// Selección de elementos
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let index = 0;

// Función para mostrar un slide específico
function showSlide(i) {
    index = (i + totalSlides) % totalSlides; // Hace el carrusel cíclico
    carousel.style.transform = `translateX(${-index * 100}%)`;
}

// Botón siguiente
document.querySelector('.next').addEventListener('click', () => {
    showSlide(index + 1);
});

// Botón anterior
document.querySelector('.prev').addEventListener('click', () => {
    showSlide(index - 1);
});

// Reproducción automática cada 4 segundos
setInterval(() => {
    showSlide(index + 1);
}, 4000);