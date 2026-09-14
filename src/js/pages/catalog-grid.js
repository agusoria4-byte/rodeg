import '../global.js';

/* ---------- MAPA GLOBAL DE PRODUCTOS (Con nivel 3) ---------- */
const allCategories = {
  "1. Nuevas Tecnologías": [
      { 
          name: "Innovación y automatización", 
          url: "/productos/nuevas-tecnologias/",
          items: [
              { name: "GLOBAL FLOW CONTROL", anchor: "#global-flow-control" },
              { name: "SMART EAR TAG", anchor: "#smart-ear-tag" },
              { name: "TAXI MILK Autopropulsado", anchor: "#taxi-milk" },
              { name: "Ventiladores R-FAN", anchor: "#r-fan" }
          ]
      }
  ],
  "2. Ordeño": [
      { 
          name: "Equipos Completos", 
          url: "/productos/ordeno/equipos-completos/",
          items: [
              { name: "Millenium Magna", anchor: "#millenium-magna" },
              { name: "Millenium", anchor: "#millenium" },
              { name: "MP 2700", anchor: "#mp2700" },
              { name: "MP 2000", anchor: "#mp2000" },
              { name: "Directo al tarro (DTP)", anchor: "#dtp" },
              { name: "Directo al tarro (DTE)", anchor: "#dte" },
              { name: "Máquinas para cabras", anchor: "#cabras" }
          ]
      },
      { 
          name: "Sistema, Accesorios y Repuestos", 
          url: "/productos/ordeno/sistemas-y-repuestos/",
          items: [
              { name: "Grupo de ordeño R-Max", anchor: "#grupo-rmax" },
              { name: "Grupo de ordeño PZ-3", anchor: "#grupo-pz3" },
              { name: "Pulsador RG-3", anchor: "#pulsador-rg3" },
              { name: "Pulmones de vacío", anchor: "#pulmones-vacio" },
              { name: "Regulación de vacío", anchor: "#regulacion-vacio" },
              { name: "Sistemas de vacío", anchor: "#sistemas-vacio" },
              { name: "Electrobombas centrífugas", anchor: "#electrobombas" },
              { name: "Controles de nivel", anchor: "#controles-nivel" },
              { name: "Unidades finales", anchor: "#unidades-finales" },
              { name: "Intercambiadores de calor", anchor: "#intercambiadores" },
              { name: "Lavados programables", anchor: "#lavados" },
              { name: "Global Flow Control", anchor: "#global-flow-control" },
              { name: "Extractor automático CRA-4G", anchor: "#extractor-cra4g" },
              { name: "Brazos de posicionamiento M-18", anchor: "#brazos-m18" },
              { name: "Ordeñador individual de cuartos", anchor: "#ordenador-cuartos" },
              { name: "Pezoneras", anchor: "#pezoneras-categoria" },
              { name: "Mangueras y tubos", anchor: "#mangueras-categoria" },
              { name: "Bombas de vacío", anchor: "#bombas-categoria" }
          ]
      }
  ],
  "3. Bretes para sala": [
      { 
          name: "Ver todos los bretes", 
          url: "/productos/bretes/",
          items: [
              { name: "Bretes a la par", anchor: "#bretes-par" },
              { name: "Bretes espina vertical", anchor: "#bretes-espina" },
              { name: "Brete Lado x Lado", anchor: "#brete-lado" },
              { name: "Bretes salida rápida", anchor: "#brete-rapida" },
              { name: "Bretes autoportantes", anchor: "#bretes-autoportantes" },
              { name: "Bretes para cabras y ovejas", anchor: "#bretes-cabras" },
              { name: "Chapón anti-bosteo", anchor: "#chapon" }
          ]
      }
  ],
  "4. Manejo y corrales": [
      { 
          name: "Soluciones de manejo", 
          url: "/productos/manejo-y-corrales-de-rodeo/index.html",
          items: [
              { name: "Corrales de espera", url: "/productos/manejo-y-corrales-de-rodeo/corrales-de-espera/index.html" },
              { name: "Corrales circulares", url: "/productos/manejo-y-corrales-de-rodeo/corrales-circulares/index.html" },
              { name: "Corrales perimetrales", url: "/productos/manejo-y-corrales-de-rodeo/corrales-perimetrales/index.html" },
              { name: "Puertas apartadoras", url: "/productos/manejo-y-corrales-de-rodeo/puertas-apartadoras/index.html" },
              { name: "Cepos para mangas y corrales", url: "/productos/manejo-y-corrales-de-rodeo/cepos/index.html" },
              { name: "Manga de inseminación", url: "/productos/manejo-y-corrales-de-rodeo/manga-de-inseminacion/index.html" },
              { name: "Balanza y apartado", url: "/productos/manejo-y-corrales-de-rodeo/balanza-y-apartado/index.html" },
              { name: "Sistemas de estabulados", url: "/productos/manejo-y-corrales-de-rodeo/sistemas-de-estabulados/index.html" },
              { name: "Camas y separadores de bretes", url: "/productos/manejo-y-corrales-de-rodeo/camas-y-separadores/index.html" },
              { name: "Tranqueras arreadoras", url: "/productos/manejo-y-corrales-de-rodeo/tranqueras-arreadoras/index.html" }
          ]
      }
  ],
  "5. Enfriadores de leche": [
      { 
          name: "Sistemas de frío", 
          url: "/productos/enfriadores-de-leche/",
          items: [
              { name: "Cubas Cerradas", anchor: "#cerradas" },
              { name: "Cubas Abiertas", anchor: "#abiertas" },
              { name: "Comando y lavado", anchor: "#comando" },
              { name: "Recuperadores de calor", anchor: "#recuperadores" },
              { name: "Silos de almacenamiento", anchor: "#silos" },
              { name: "Enfriamiento instantáneo", anchor: "#instantaneo" }
          ]
      }
  ],
  "6. Alimentación ordeño": [
      { 
          name: "Sistemas de alimentación", 
          url: "/productos/alimentacion-ordeno/",
          items: [
              { name: "Racionadores manuales", anchor: "#manuales" },
              { name: "Dosificación automática", anchor: "#automatica" }
          ]
      }
  ],
  "7. Alimentación terneros": [
      { 
          name: "Sistemas de crianza", 
          url: "/productos/alimentacion-terneros/",
          items: [
              { name: "Taxi manual (280L)", anchor: "#taxi-manual" },
              { name: "Taxi de arrastre (280L)", anchor: "#taxi-arrastre" },
              { name: "Taxi autopropulsado (280L)", anchor: "#taxi-autopropulsado" },
              { name: "Dosificación de leche", anchor: "#dosificacion" },
              { name: "Carros de transporte", anchor: "#carros" }
          ]
      }
  ],
  "8. Confort animal": [
      { 
          name: "Equipos de confort", 
          url: "/productos/confort-animal/",
          items: [
              { name: "Ventiladores R-FAN", anchor: "#ventiladores" },
              { name: "Sistema anti-estrés", anchor: "#anti-estres" }
          ]
      }
  ],
  "9. Pasteurizadores": [
      { 
          name: "Sistemas de pasteurización", 
          url: "/productos/pasteurizadores/",
          items: [
              { name: "Tina - Eléctrico", anchor: "#tina-electrico" },
              { name: "Tina - A caldera", anchor: "#tina-caldera" },
              { name: "Placas - Semiautomático", anchor: "#placas-semiautomatico" },
              { name: "Placas - Automático", anchor: "#placas-automatico" }
          ]
      }
  ]
};

// 1. LÓGICA DE DETECCIÓN AUTOMÁTICA
const currentPath = window.location.pathname;
let expandedCategory = "1. Nuevas Tecnologías"; // Por defecto arranca abierto este

if (currentPath.includes('/nuevas-tecnologias')) expandedCategory = "1. Nuevas Tecnologías";
else if (currentPath.includes('/ordeno')) expandedCategory = "2. Ordeño";
else if (currentPath.includes('/bretes')) expandedCategory = "3. Bretes para sala";
else if (currentPath.includes('/manejo')) expandedCategory = "4. Manejo y corrales";
else if (currentPath.includes('/enfriadores-de-leche')) expandedCategory = "5. Enfriadores de leche";
else if (currentPath.includes('/alimentacion-ordeno')) expandedCategory = "6. Alimentación ordeño";
else if (currentPath.includes('/alimentacion-terneros')) expandedCategory = "7. Alimentación terneros";
else if (currentPath.includes('/confort-animal')) expandedCategory = "8. Confort animal";
else if (currentPath.includes('/pasteurizadores')) expandedCategory = "9. Pasteurizadores";

// Función auxiliar para saber si estamos exactamente en esa página
const isActivePage = (url) => {
  const cleanCurrent = currentPath.replace(/\/$/, '').split('#')[0];
  const cleanUrl = url.replace(/\/$/, '').split('#')[0];
  return cleanCurrent === cleanUrl;
};

// 2. RENDERIZADO DEL MENÚ INTELIGENTE
function renderSidebar() {
  const el = document.getElementById('sidebar-content');
  if (!el) return;
  
  el.innerHTML = Object.keys(allCategories).map(cat => `
    <div class="nav-cat ${cat === expandedCategory ? 'active-cat' : ''}" data-cat="${cat}">
      <span>${cat}</span><span class="toggle-icon">${cat === expandedCategory ? '−' : '+'}</span>
    </div>
    <div class="nav-subs ${cat === expandedCategory ? 'open' : ''}">
      ${allCategories[cat].map(sub => {
          const isActive = isActivePage(sub.url);
          return `
            <div class="sub-item-container">
                <a href="${sub.url}" class="nav-sub-link ${isActive ? 'active-sub' : ''}">${sub.name}</a>
                
                ${isActive && sub.items ? `
                  <div class="nav-sub-items">
                      ${sub.items.map(item => `
                          <a href="${sub.url}${item.anchor || ''}" class="nav-anchor-link">- ${item.name}</a>
                      `).join('')}
                  </div>
                ` : ''}
            </div>
          `;
      }).join('')}
    </div>
  `).join('');

  el.querySelectorAll('.nav-cat').forEach(node => {
    node.addEventListener('click', () => {
      const cat = node.getAttribute('data-cat');
      expandedCategory = (expandedCategory === cat) ? null : cat;
      renderSidebar();
    });
  });
}

renderSidebar();

// ================= CAROUSEL DE PRODUCTOS =================
const currentSlides = {};

window.moveCarousel = function(direction, trackId) {
    const track = document.getElementById(trackId);
    if (!track) return;

    const images = track.querySelectorAll('img');
    const totalImages = images.length;
    
    // Inicializa el contador para este carrusel si no existe
    if (typeof currentSlides[trackId] === 'undefined') {
        currentSlides[trackId] = 0;
    }
    
    currentSlides[trackId] += direction;
    
    // Lógica de bucle infinito
    if (currentSlides[trackId] >= totalImages) {
        currentSlides[trackId] = 0; 
    } else if (currentSlides[trackId] < 0) {
        currentSlides[trackId] = totalImages - 1; 
    }
    
    // Desplaza el contenedor
    const moveAmount = currentSlides[trackId] * 100;
    track.style.transform = `translateX(-${moveAmount}%)`;
};