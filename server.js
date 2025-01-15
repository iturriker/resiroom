import { createServer } from 'node:http';
import { readFile, createReadStream } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Obtener el directorio actual (equivalente a __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

const host = '127.0.0.1';
const port = 3000;

const server = createServer((request, response) => {
    const url = request.url;

    // Si la solicitud es para la página principal (index.html)
    if (url === '/') {
        const filePath = join(__dirname, 'index.html');
        readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                response.writeHead(500, { 'Content-Type': 'text/plain' });
                response.end('Error al leer el archivo');
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(data);
            }
        });
    }
    // Si la solicitud es para un archivo HTML
    else if (url.endsWith('.html')) {
        const filePath = join(__dirname, url);
        //response.writeHead(200, { 'Content-Type': 'text/html' });
        createReadStream(filePath)
            .on('error', () => {
                response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.end('Archivo HTML no encontrado');
            })
            .pipe(response);
    }
    // Si la solicitud es para un archivo CSS
    else if (url.endsWith('.css')) {
        const filePath = join(__dirname, url);
        //response.writeHead(200, { 'Content-Type': 'text/css' });
        createReadStream(filePath)
            .on('error', () => {
                response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.end('Archivo CSS no encontrado');
            })
            .pipe(response);
    }
    // Si la solicitud es para un archivo JS
    else if (url.endsWith('.js')) {
        const filePath = join(__dirname, url);
        //response.writeHead(200, { 'Content-Type': 'application/javascript' });
        createReadStream(filePath)
            .on('error', () => {
                response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.end('Archivo JS no encontrado');
            })
            .pipe(response);
    }
    // Si la solicitud es para un archivo JPG
    else if (url.endsWith('.jpg')) {
        const filePath = join(__dirname, url);
        //response.writeHead(200, { 'Content-Type': 'text/jpg' });
        createReadStream(filePath)
            .on('error', () => {
                response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.end('Archivo JS no encontrado');
            })
            .pipe(response);
    }
    // Otras rutas (como imágenes, etc.) pueden ser manejadas aquí
    else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Página no encontrada');
    }
});

// Iniciar el servidor
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});