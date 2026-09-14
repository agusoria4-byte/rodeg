export function initProductDetail() {
    // 1. Mostrar/Ocultar Detalles
    const btnToggle = document.getElementById('btn-toggle-detalles');
    const seccionDetalles = document.getElementById('seccion-detalles');
    
    if (btnToggle && seccionDetalles) {
        btnToggle.addEventListener('click', function(e) {
            e.preventDefault();
            if (seccionDetalles.style.display === 'none') {
                seccionDetalles.style.display = 'block';
                this.textContent = 'Ocultar detalles';
            } else {
                seccionDetalles.style.display = 'none';
                this.textContent = 'Ver detalles';
            }
        });
    }

    // 2. Efecto Variantes (Estilo MercadoLibre)
    const variantThumbs = document.querySelectorAll('.variant-thumb');
    const variantNameDisplay = document.getElementById('variant-name');
    
    if (variantThumbs.length > 0 && variantNameDisplay) {
        variantThumbs.forEach(thumb => {
            thumb.addEventListener('mouseenter', () => {
                variantNameDisplay.textContent = thumb.getAttribute('data-name');
            });
            thumb.addEventListener('mouseleave', () => {
                const activeThumb = document.querySelector('.variant-thumb.active');
                if(activeThumb) variantNameDisplay.textContent = activeThumb.getAttribute('data-name');
            });
        });
    }

    // 3. Cambiar Foto Dinámica en el Acordeón
    const accordionDetails = document.querySelectorAll('#how-it-works-accordion details');
    const displayImg = document.getElementById('how-it-works-display');

    if (accordionDetails.length > 0 && displayImg) {
        accordionDetails.forEach(detail => {
            detail.addEventListener('toggle', (e) => {
                if (detail.open) {
                    displayImg.style.opacity = 0.5;
                    setTimeout(() => {
                        displayImg.src = detail.getAttribute('data-img');
                        displayImg.style.opacity = 1;
                    }, 150);
                }
            });
        });
    }

    // 4. Cambiar Foto de Galería Principal
    const galThumbs = document.querySelectorAll('.gal-thumb');
    const mainImg = document.getElementById('main-gallery-img');

    if (galThumbs.length > 0 && mainImg) {
        galThumbs.forEach(thumb => {
            thumb.addEventListener('click', function() {
                mainImg.style.opacity = 0.5;
                setTimeout(() => {
                    mainImg.src = this.src;
                    mainImg.style.opacity = 1;
                }, 150);
                
                // Remover clase active de todas y ponerla en la clickeada
                galThumbs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // 5. Botón "Ver Más" de Características Técnicas
    const specsGrid = document.querySelector(".specs-row"); // Seleccionamos por clase
    const btnMoreSpecs = document.getElementById("btn-more-specs");

    if (specsGrid && btnMoreSpecs) {
        // Contamos cuántas características hay
        const specItems = specsGrid.querySelectorAll('.spec-minimal');
        
        // Si hay más de 4, mostramos el botón
        if (specItems.length > 4) {
            btnMoreSpecs.style.display = "block";
        }

        // Lógica de expandir/contraer
        btnMoreSpecs.addEventListener("click", () => {
            specsGrid.classList.toggle("show-all");
            
            if (specsGrid.classList.contains("show-all")) {
                btnMoreSpecs.textContent = "Ver menos";
            } else {
                btnMoreSpecs.textContent = "Ver más características";
            }
        });
    }
}

// 6. Nueva función para cargar los productos relacionados automáticamente
async function cargarProductosRelacionados() {
    const contenedor = document.getElementById('contenedor-relacionados');
    
    if (!contenedor) return;
    const idsString = contenedor.getAttribute('data-ids');
    if (!idsString) return;

    const idsArray = idsString.split(',').map(id => id.trim());

    try {
        // Apuntamos a la nueva carpeta que creaste
        const response = await fetch('/public/data/productos.json'); 
        const todosLosProductos = await response.json();

        let htmlTarjetas = '';
        
        idsArray.forEach(id => {
            const producto = todosLosProductos.find(p => p.id === id);
            
            if (producto) {
                htmlTarjetas += `
                <div class="rel-card">
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="rel-img">
                    <div class="rel-info">
                        <div class="rel-text">
                            <h4>${producto.nombre}</h4>
                            <p>${producto.descripcion}</p>
                        </div>
                        <a href="${producto.url}" class="rel-btn">Ver más ➔</a>
                    </div>
                </div>
                `;
            }
        });

        contenedor.innerHTML = htmlTarjetas;

    } catch (error) {
        console.error('Error cargando los productos relacionados:', error);
    }
}

// Inicializar automáticamente cuando cargue la página
document.addEventListener('DOMContentLoaded', () => {
    initProductDetail();
    cargarProductosRelacionados(); 
});