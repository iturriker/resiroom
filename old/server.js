import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

const host = '127.0.0.1';
const port = 3000;

// Diccionario de tipos MIME
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.json': 'application/json',
    '.txt': 'text/plain',
    '.svg': 'image/svg+xml'
};

const server = createServer((request, response) => {
    const url = request.url === '/' ? '/index.html' : request.url; // Redirigir '/' a 'index.html'
    const filePath = join(__dirname, url);
    const ext = extname(filePath); // Obtener la extensión del archivo
    const mimeType = mimeTypes[ext] || 'application/octet-stream'; // Tipo MIME por defecto

    // Leer y enviar el archivo solicitado
    createReadStream(filePath)
        .on('error', () => {
            // Enviamos la respuesta solo si no se ha enviado antes
            if (!response.headersSent) {
                response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.end('Archivo no encontrado');
            }
        })
        .on('open', () => {
            response.writeHead(200, { 'Content-Type': mimeType });
        })
        .pipe(response);
    
    if (request.method === 'POST' && url === '/submit') { //cambiar a index.html
        let body = '';
    
        // Recoger los datos del formulario en partes
        request.on('data', chunk => {
            body += chunk;
        });
    
        // Procesar los datos cuando se hayan recibido todos
        request.on('end', () => {
            // Convertir los datos a un objeto
            const formData = new URLSearchParams(body);
    
            // Crear un objeto con los valores enviados
            const data = {
                name: formData.get('name'),
                surname: formData.get('surname'),
                mail: formData.get('mail'),
                phone: formData.get('phone'),
                message: formData.get('message'),
            };

            // Validación de datos
            if (!data.name || !data.surname || !data.mail || !data.phone) {
                response.writeHead(400, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ mensaje: 'Por favor, completa todos los campos obligatorios' }));
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.mail)) {
                response.writeHead(400, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ mensaje: 'El correo electrónico no es válido' }));
                return;
            }
    
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({
                mensaje: 'Formulario recibido correctamente',
                datos: data
            }));
        });
        return;
    }
});

// Iniciar el servidor
server.listen(port, host, () => {
    console.log(`Servidor ejecutándose en http://${host}:${port}/`);
});