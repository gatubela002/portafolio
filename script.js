// Código para el menú de navegación dinámico (móvil)
document.addEventListener("DOMContentLoaded", function() {
    // Menú de navegación dinámico
    const navMenu = document.querySelector(".nav-menu");
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "☰";
    toggleButton.classList.add("menu-toggle");

    document.querySelector("header").prepend(toggleButton);

    toggleButton.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    // Carrusel de imágenes automáticas
    let currentIndex = 0;
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const totalSlides = slides.length;

    function moveSlides() {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0; // Reinicia el índice si llega al final
            track.style.transition = "none"; // Desactiva la transición para el reinicio rápido
            track.style.transform = "translateX(0)"; // Vuelve al principio instantáneamente
        } else {
            track.style.transition = "transform 0.5s ease-in-out"; // Activa la transición
            const slideWidth = slides[0].clientWidth + 15; // Incluye el margen
            track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
    }

    // Cambia la imagen cada 3 segundos
    setInterval(moveSlides, 3000);
});