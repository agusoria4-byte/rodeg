// 1. LÓGICA MEGA MENÚ ESCRITORIO
export function initMegaMenu() {
    // Interacción Nivel 1: De Categoría Principal a Subcategorías
    const catButtons = document.querySelectorAll('.mega-cat-btn');
    const megaPanels = document.querySelectorAll('.mega-panel');

    catButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            if (window.innerWidth <= 990) return; // Evita que se active hover en celulares
            
            // Limpiar activos
            catButtons.forEach(b => b.classList.remove('active'));
            megaPanels.forEach(p => p.classList.remove('active'));
            
            // Activar panel actual
            btn.classList.add('active');
            const targetPanel = document.getElementById(btn.getAttribute('data-target'));
            if (targetPanel) targetPanel.classList.add('active');
        });
    });

    // Interacción Nivel 2: De Subcategoría a Lista de Productos Finales
    const subcatButtons = document.querySelectorAll('.mega-subcat-btn');

    subcatButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            if (window.innerWidth <= 990) return;
            
            // Limpiar activos SOLO dentro del mismo panel que se está viendo
            const parentPanel = btn.closest('.mega-panel');
            if (!parentPanel) return;
            
            parentPanel.querySelectorAll('.mega-subcat-btn').forEach(b => b.classList.remove('active'));
            parentPanel.querySelectorAll('.mega-list').forEach(l => l.classList.remove('active'));
            
            // Activar lista actual
            btn.classList.add('active');
            const targetList = document.getElementById(btn.getAttribute('data-target'));
            if (targetList) targetList.classList.add('active');
        });
    });
}

// 2. LÓGICA DRILL-DOWN MOBILE (Navegación de 3 niveles)
export function initMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const headerContent = document.getElementById('header-content');
    const backBar = document.getElementById('mobile-back-bar');
    const backText = document.getElementById('back-text');
    const btnBack = document.getElementById('btn-back');
    
    // Rastreadores de Estado
    let currentLevel = 0; 
    let activeMacroItem = null;
    let activePanel = null;

    // Función para reiniciar todo a Cero (Vista principal de "Soluciones", "Tecnologías")
    const resetToLevel0 = () => {
        currentLevel = 0;
        activeMacroItem = null;
        activePanel = null;
        
        document.querySelectorAll('.hidden-by-level').forEach(el => el.classList.remove('hidden-by-level'));
        document.querySelectorAll('.is-open').forEach(el => el.classList.remove('is-open'));
        
        // Resetear visibilidad de las 3 columnas
        document.querySelectorAll('.mega-col-1, .mega-col-content, .mega-col-2, .mega-col-3').forEach(el => el.classList.remove('mobile-active-col'));
        document.querySelectorAll('.mega-panel, .mega-list').forEach(el => el.classList.remove('active'));

        if (backBar) backBar.classList.remove('show');
    };

    // Botón Hamburguesa Principal
    if (hamburgerBtn && headerContent) {
        hamburgerBtn.addEventListener('click', () => {
            headerContent.classList.toggle('is-active');
            if (!headerContent.classList.contains('is-active')) {
                resetToLevel0(); 
            }
        });
    }

    // PASO 1: De Macrocategoría a Categorías Principales (Ej: Soluciones -> Ordeño)
    document.querySelectorAll('.nav-link').forEach(link => {
        // Nos aseguramos que el link de "Soluciones" apunte a la página de categorías correcta.
        // Esto repara la navegación en escritorio y provee el `href` correcto que el menú móvil espera.
        if (link.textContent.trim().startsWith('Soluciones')) {
            link.setAttribute('href', '/categorias.html');
        }

        link.addEventListener('click', (e) => {
            if (window.innerWidth > 990) return;
            
            const parentItem = link.closest('.nav-item');
            const megaMenu = parentItem.querySelector('.mega-menu');
            
            if (megaMenu && currentLevel === 0) {
                e.preventDefault();
                currentLevel = 1;
                activeMacroItem = parentItem;
                
                // Ocultar las otras Macrocategorías
                document.querySelectorAll('.nav-item').forEach(item => {
                    if (item !== parentItem) item.classList.add('hidden-by-level');
                });
                link.classList.add('hidden-by-level'); 
                
                parentItem.classList.add('is-open');
                megaMenu.querySelector('.mega-col-1').classList.add('mobile-active-col');
                
                backText.textContent = 'Menú principal';
                backBar.classList.add('show');
                headerContent.scrollTo(0, 0);
            }
        });
    });

    // PASO 2: De Categorías a Subcategorías (Ej: Ordeño -> Equipos Completos)
    document.querySelectorAll('.mega-cat-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (window.innerWidth > 990) return;
            e.preventDefault();
            currentLevel = 2;
            
            const megaMenu = btn.closest('.mega-menu');
            
            // Ocultamos la Columna 1, Mostramos el Contenedor
            megaMenu.querySelector('.mega-col-1').classList.remove('mobile-active-col');
            megaMenu.querySelector('.mega-col-content').classList.add('mobile-active-col');
            
            // Mostramos el panel específico y su Columna 2
            activePanel = document.getElementById(btn.getAttribute('data-target'));
            if (activePanel) {
                activePanel.classList.add('active');
                activePanel.querySelector('.mega-col-2').classList.add('mobile-active-col');
                activePanel.querySelector('.mega-col-3').classList.remove('mobile-active-col');
            }
            
            backText.textContent = 'Soluciones';
            headerContent.scrollTo(0, 0);
        });
    });

    // PASO 3: De Subcategorías a Productos Finales (Ej: Equipos Completos -> Millenium Magna)
    document.querySelectorAll('.mega-subcat-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (window.innerWidth > 990) return;
            e.preventDefault();
            currentLevel = 3;
            
            if (activePanel) {
                // Ocultamos Columna 2, Mostramos Columna 3
                activePanel.querySelector('.mega-col-2').classList.remove('mobile-active-col');
                activePanel.querySelector('.mega-col-3').classList.add('mobile-active-col');
                
                // Mostramos la lista final de links
                activePanel.querySelectorAll('.mega-list').forEach(l => l.classList.remove('active'));
                const targetList = document.getElementById(btn.getAttribute('data-target'));
                if (targetList) targetList.classList.add('active');
            }
            
            // Extraer el nombre de la categoría para el botón de volver (Ej: Volver a "Ordeño")
            const catName = activePanel ? document.querySelector(`.mega-cat-btn[data-target="${activePanel.id}"]`).textContent.replace('›', '').trim() : 'Volver';
            backText.textContent = catName;
            headerContent.scrollTo(0, 0);
        });
    });

    // ================= LÓGICA DEL BOTÓN "VOLVER" (MÓVIL) =================
    if (btnBack) {
        btnBack.addEventListener('click', () => {
            if (currentLevel === 3) {
                // Volvemos del Nivel 3 (Productos) al Nivel 2 (Subcategorías)
                currentLevel = 2;
                if (activePanel) {
                    activePanel.querySelector('.mega-col-3').classList.remove('mobile-active-col');
                    activePanel.querySelector('.mega-col-2').classList.add('mobile-active-col');
                }
                backText.textContent = 'Soluciones';
                
            } else if (currentLevel === 2) {
                // Volvemos del Nivel 2 (Subcategorías) al Nivel 1 (Categorías Principales)
                currentLevel = 1;
                const megaMenu = activeMacroItem.querySelector('.mega-menu');
                megaMenu.querySelector('.mega-col-content').classList.remove('mobile-active-col');
                if (activePanel) activePanel.classList.remove('active');
                megaMenu.querySelector('.mega-col-1').classList.add('mobile-active-col');
                backText.textContent = 'Menú principal';
                
            } else if (currentLevel === 1) {
                // Volvemos al inicio de todo
                resetToLevel0();
            }
        });
    }
}