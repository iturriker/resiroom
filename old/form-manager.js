const contactForm = document.querySelector('.contact-form');
const responseWrap = document.querySelector('.response-wrap');

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    
    try {
        const response = await fetch('/submit', {
            method: 'POST',
            body: new URLSearchParams(formData), // Convierte el formulario en un formato legible para el backend
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        const result = await response.json();

        if (response.ok) {
            responseWrap.textContent = result.mensaje;
            responseWrap.style.color = 'green';
            //responseWrap.setAttribute(disabled);
        } else {
            responseWrap.textContent = result.mensaje;
            responseWrap.style.color = 'red';
        }
    } catch (error) {
        responseWrap.textContent = 'Ocurrió un error inesperado.';
        responseWrap.style.color = 'red';
    }
});