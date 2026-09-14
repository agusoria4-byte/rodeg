export function initScrollReveal() {
    // 1. Le decimos qué clases queremos animar
    const elementosAAnimar = [
        '.home-card', 
        '.product-card', 
        '.stat-card', 
        '.diferencial-item', 
        '.team-card',
        '.category-row',
        '.tech-card',
        /* --- LAS NUEVAS DE LA PÁGINA DE PRODUCTO --- */
        '.product-hero',
        '.product-detail-section',
        '.sidebar',
        /* --- EL COMODÍN MÁGICO --- */
        '.auto-reveal' // Si le ponés esta clase a mano a algo en el HTML, lo anima igual.
    ];

    // Buscamos todos esos elementos en la página actual
    const elementos = document.querySelectorAll(elementosAAnimar.join(', '));

    // ... EL RESTO DEL ARCHIVO QUEDA EXACTAMENTE IGUAL ...

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -40px 0px', // Dispara un poquito antes de tocar el borde inferior
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active-reveal');
                observer.unobserve(entry.target); // Animamos una sola vez
            }
        });
    }, observerOptions);

    // 2. Preparamos cada elemento antes de observarlo
    elementos.forEach((el, index) => {
        // Le inyectamos la clase CSS base automáticamente
        el.classList.add('auto-reveal');
        
        // Magia pura: Generamos un efecto "escalera" automático para las grillas
        // Si hay varias tarjetas juntas, la segunda tarda 100ms más, la tercera 200ms más...
        let delay = (index % 4) * 150; 
        el.style.transitionDelay = `${delay}ms`;

        // Empezamos a vigilar el elemento
        observer.observe(el);
    });
}