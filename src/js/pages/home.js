// 1. Primero importamos el JS global para que el Header funcione en esta página
import '../global.js';

// 2. Lógica exclusiva del Hero Slider
const slidesData = [
    {
        title: "Tecnología que cuida tu tambo.",
        sub: "Ayudamos al productor a ordeñar mejor, cuidar sus vacas y a ganar tiempo con tecnología pensada para el tambo argentino."
    },
    {
        title: "Equipos de ordeño y tecnología para tambos en Argentina.",
        sub: "33 años de trayectoria, service propio, red de agentes nacionales."
    }
];

let currentSlideIndex = 0;
const contentContainer = document.getElementById('hero-slide-content');
const titleEl = document.getElementById('hero-title');
const subEl = document.getElementById('hero-sub');

// Verificamos que los elementos existan antes de ejecutar el intervalo
if (contentContainer && titleEl && subEl) {
    setInterval(() => {
        // Fade Out
        contentContainer.style.opacity = '0';
        
        // Esperar que termine la transición y cambiar texto
        setTimeout(() => {
            currentSlideIndex = (currentSlideIndex + 1) % slidesData.length;
            titleEl.textContent = slidesData[currentSlideIndex].title;
            subEl.textContent = slidesData[currentSlideIndex].sub;
            
            // Fade In
            contentContainer.style.opacity = '1';
        }, 600); 
        
    }, 5500);
}
// ================= LÓGICA DEL CARRUSEL DE FONDO (SECCIÓN TECNOLOGÍAS) =================
const techImages = [
    '/public/img/hero/tecno.png', // Imagen 1 (Chanchos/Animales)
    '/public/img/hero/tecno2.png', // Imagen 2 (Tambo interior)
    '/public/img/hero/equipamiento.webp'  // Imagen 3 (Equipamiento)
];

let currentTechIndex = 0;
const techSection = document.getElementById('tech-carousel-section');

function updateTechBackground() {
    if(!techSection) return;
    techSection.style.backgroundImage = `url('${techImages[currentTechIndex]}')`;
}

if (techSection) {
    // Carga la primera imagen al iniciar
    updateTechBackground();

    setInterval(() => {
        currentTechIndex = (currentTechIndex + 1) % techImages.length;
        updateTechBackground();
    }, 4500); // Cambia la imagen cada 4.5 segundos
}