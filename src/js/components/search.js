
const searchDatabase = [
    // ---------------- 1. ORDEÑO ----------------
    // Equipos Completos
    { name: "Millenium Magna", cat: "Ordeño / Equipos Completos", url: "/productos/ordeno/equipos-completos/#millenium-magna", keywords: "ordeñadora, tambo, equipo, magna, grande, rotativa, maquina, instalacion" },
    { name: "Millenium", cat: "Ordeño / Equipos Completos", url: "/productos/ordeno/equipos-completos/#millenium", keywords: "ordeñadora, tambo, equipo, millenium, maquina" },
    { name: "MP 2700", cat: "Ordeño / Equipos Completos", url: "/productos/ordeno/equipos-completos/#mp2700", keywords: "ordeñadora, mp, mp2700, 2700" },
    { name: "MP 2000", cat: "Ordeño / Equipos Completos", url: "/productos/ordeno/equipos-completos/#mp2000", keywords: "ordeñadora, mp, mp2000, 2000" },
    { name: "Directo al tarro portátil (DTP)", cat: "Ordeño / Equipos Completos", url: "/productos/ordeno/equipos-completos/#dtp", keywords: "ordeñadora, portatil, tarro, dtp, carrito, vaca, tambito, tacho" },
    { name: "Directo al tarro estacionario (DTE)", cat: "Ordeño / Equipos Completos", url: "/productos/ordeno/equipos-completos/#dte", keywords: "ordeñadora, estacionario, fijo, tarro, dte, tacho" },
    { name: "Máquinas para cabras y ovejas", cat: "Ordeño / Equipos Completos", url: "/productos/ordeno/equipos-completos/#cabras", keywords: "cabra, oveja, caprino, ovino, chivo, ordeñadora" },
    
    // Sistema, Accesorios y Repuestos
    { name: "Grupo de ordeño R-Max", cat: "Ordeño / Repuestos", url: "/productos/ordeno/sistemas-y-repuestos/#grupo-r-max", keywords: "grupo, rmax, r-max, garra, colector" },
    { name: "Grupo de ordeño PZ-3", cat: "Ordeño / Repuestos", url: "/productos/ordeno/sistemas-y-repuestos/#grupo-pz3", keywords: "grupo, pz3, pz-3, garra, colector" },
    { name: "Pulsador RG-3", cat: "Ordeño / Repuestos", url: "/productos/ordeno/sistemas-y-repuestos/#pulsadores", keywords: "pulsador, electronico, rg3, rg-3, pulsacion" },
    { name: "Sistemas, Pulmones y Regulación de vacío", cat: "Ordeño / Repuestos", url: "/productos/ordeno/sistemas-y-repuestos/#vacio", keywords: "pulmon, regulador, vacio, sistema, valvula" },
    { name: "Electrobombas y Controles de nivel", cat: "Ordeño / Repuestos", url: "/productos/ordeno/sistemas-y-repuestos/#electrobombas", keywords: "electrobomba, centrifuga, control, nivel, leche, bomba" },
    { name: "Unidades finales e Intercambiadores", cat: "Ordeño / Repuestos", url: "/productos/ordeno/sistemas-y-repuestos/#unidades", keywords: "unidad, final, trampa, intercambiador, placa, calor" },
    { name: "Lavados programables", cat: "Ordeño / Repuestos", url: "/productos/ordeno/sistemas-y-repuestos/#lavados", keywords: "lavado, programable, automatico, limpieza, tablero" },
    { name: "Brazos M-18 y Extractor CRA-4G", cat: "Ordeño / Repuestos", url: "/productos/ordeno/sistemas-y-repuestos/#brazos", keywords: "brazo, m18, m-18, extractor, retiro, automatico, cra4g" },
    { name: "Pezoneras Millenium, PZ3, PZ-R MAX", cat: "Ordeño / Repuestos", url: "/productos/ordeno/sistemas-y-repuestos/#pezoneras", keywords: "pezonera, goma, silicona, repuesto, teta, recambio, pesonera" },
    { name: "Mangueras y tubos lácteos", cat: "Ordeño / Repuestos", url: "/productos/ordeno/sistemas-y-repuestos/#mangueras", keywords: "manguera, tubo, pvc, flexible, leche, atoxico, pulsacion, lavado" },
    { name: "Bombas de vacío (300L a 2250L)", cat: "Ordeño / Repuestos", url: "/productos/ordeno/sistemas-y-repuestos/#bombas", keywords: "bomba, vacio, motor, 300l, 500l, 800l, 900l, 1650l, 2250l, vonba, sv" },

    // ---------------- 2. BRETES PARA SALA ----------------
    { name: "Bretes a la par - Salida en retroceso", cat: "Bretes", url: "/productos/bretes/#salida-retroceso", keywords: "brete, par, retroceso, hierro, estructura" },
    { name: "Bretes a la par - Salida lateral", cat: "Bretes", url: "/productos/bretes/#salida-lateral", keywords: "brete, par, lateral, hierro, corral" },
    { name: "Bretes espina vertical - Arcos a piso", cat: "Bretes", url: "/productos/bretes/#arcos-piso", keywords: "brete, espina, pescado, vertical, piso, arco" },
    { name: "Bretes espina vertical - Autoportante", cat: "Bretes", url: "/productos/bretes/#autoportante", keywords: "brete, espina, pescado, vertical, autoportante" },
    { name: "Brete salida rápida Lado x Lado", cat: "Bretes", url: "/productos/bretes/#lado-lado", keywords: "brete, rapida, lado, agil" },
    { name: "Bretes salida rápida (Arcos y Autoportantes)", cat: "Bretes", url: "/productos/bretes/#arcos-piso-rapida", keywords: "brete, rapida, arco, autoportante" },
    { name: "Bretes cabras y ovejas", cat: "Bretes", url: "/productos/bretes/#bretes-cabras", keywords: "brete, cabra, oveja, caprino, ovino" },
    { name: "Chapón anti-bosteo", cat: "Bretes / Accesorios", url: "/productos/bretes/#chapon", keywords: "chapon, chapa, caca, heces, antibosteo, bosteo, bosta, limpieza" },

    // ---------------- 3. MANEJO Y CORRALES ----------------
    { name: "Corrales circulares", cat: "Manejo y corrales", url: "/productos/manejo-y-corrales-de-rodeo/#circulares", keywords: "corral, circular, espera, encierre" },
    { name: "Corrales perimetrales", cat: "Manejo y corrales", url: "/productos/manejo-y-corrales-de-rodeo/#perimetrales", keywords: "corral, perimetral, caño, tranquera" },
    { name: "Puertas apartadoras", cat: "Manejo y corrales", url: "/productos/manejo-y-corrales-de-rodeo/#puertas", keywords: "puerta, apartadora, clasificador, desvio" },
    { name: "Cepos para mangas y corrales", cat: "Manejo y corrales", url: "/productos/manejo-y-corrales-de-rodeo/#cepos", keywords: "cepo, manga, corral, cuello, traba" },
    { name: "Manga de Inseminación", cat: "Manejo y corrales", url: "/productos/manejo-y-corrales-de-rodeo/#manga", keywords: "manga, inseminacion, iseminacion, veterinario, tacto, brete" },
    { name: "Balanza y apartado (Gestión Milk)", cat: "Manejo y corrales", url: "/productos/manejo-y-corrales-de-rodeo/#balanza", keywords: "balanza, peso, pesaje, apartado, gestion, milk" },
    { name: "Tranqueras arreadoras manuales", cat: "Manejo y corrales", url: "/productos/manejo-y-corrales-de-rodeo/#tranqueras-manuales", keywords: "tranquera, arreo, manual, empuje" },
    { name: "Tranqueras arreadoras automáticas", cat: "Manejo y corrales", url: "/productos/manejo-y-corrales-de-rodeo/#tranqueras-automaticas", keywords: "tranquera, arreo, automatica, perro, electrica" },
    { name: "Sistemas de estabulados y Camas", cat: "Manejo y corrales", url: "/productos/manejo-y-corrales-de-rodeo/#estabulados", keywords: "estabulado, cama, separador, free stall, freestall, descanso" },

    // ---------------- 4. ENFRIADORES DE LECHE ----------------
    { name: "Cubas Cerradas Tipo Cisterna", cat: "Enfriadores de leche", url: "/productos/enfriadores-de-leche/#cerradas", keywords: "tanque, cuba, cisterna, frio, enfriador, leche, 4000l, 30000l, cerrado" },
    { name: "Cubas Abiertas", cat: "Enfriadores de leche", url: "/productos/enfriadores-de-leche/#abiertas", keywords: "tanque, cuba, abierta, frio, enfriador, batea, media caña" },
    { name: "Sistema de comando y lavado automático", cat: "Enfriadores de leche", url: "/productos/enfriadores-de-leche/#comando", keywords: "comando, tablero, lavado, automatico, frio" },
    { name: "Recuperadores de calor", cat: "Enfriadores de leche", url: "/productos/enfriadores-de-leche/#recuperadores", keywords: "recuperador, calor, agua, caliente, energia, ahorro" },
    { name: "Silos para almacenamiento", cat: "Enfriadores de leche", url: "/productos/enfriadores-de-leche/#silos", keywords: "silo, almacenamiento, tanque, vertical, acopio" },
    { name: "Sistema de enfriamiento instantáneo", cat: "Enfriadores de leche", url: "/productos/enfriadores-de-leche/#instantaneo", keywords: "enfriamiento, instantaneo, chiller, placa, frio" },

    // ---------------- 5. ALIMENTACIÓN ORDEÑO ----------------
    { name: "Racionadores manuales", cat: "Alimentación ordeño", url: "/productos/alimentacion-ordeno/#manuales", keywords: "racionador, manual, alimento, balanceado, comedero, comida" },
    { name: "Llenado y dosificación automática", cat: "Alimentación ordeño", url: "/productos/alimentacion-ordeno/#automatica", keywords: "racionador, automatico, llenado, dosificador, espiral, chimango, alimento" },

    // ---------------- 6. ALIMENTACIÓN TERNEROS ----------------
    { name: "Taxi Milk Manual Eléctrico", cat: "Alimentación terneros", url: "/productos/alimentacion-terneros/#taxi-manual", keywords: "taxi milk, guachera, ternero, alimentacion, leche, manual, 280l, taximilk" },
    { name: "Taxi Milk de Arrastre Eléctrico", cat: "Alimentación terneros", url: "/productos/alimentacion-terneros/#taxi-arrastre", keywords: "taxi milk, guachera, ternero, arrastre, cuatriciclo, 280l, taximilk" },
    { name: "Taxi Milk Autopropulsado Eléctrico", cat: "Alimentación terneros", url: "/productos/alimentacion-terneros/#taxi-autopropulsado", keywords: "taxi milk, alimentacion, guachera, ternero, autopropulsado, plc, 280l, taximilk, automatico" },
    { name: "Sistema de dosificación de leche", cat: "Alimentación terneros", url: "/productos/alimentacion-terneros/#dosificacion", keywords: "dosificador, leche, pistola, porcion, exacto" },
    { name: "Carros de transporte de leche", cat: "Alimentación terneros", url: "/productos/alimentacion-terneros/#carros", keywords: "carro, arrastre, transporte, leche, 500l, 3000l, acoplado" },

    // ---------------- 7. CONFORT ANIMAL ----------------
    { name: "Ventiladores R-FAN", cat: "Confort animal", url: "/productos/confort-animal/#ventiladores", keywords: "ventilador, r-fan, rfan, calor, estres, aspas, verano, aire, refrescar" },
    { name: "Sistema anti-estrés", cat: "Confort animal", url: "/productos/confort-animal/#anti-estres", keywords: "estres, calorico, aspersor, gota, rocio, ducha, refrescado" },

    // ---------------- 8. PASTEURIZADORES ----------------
    { name: "Pasteurizador de tina eléctrico", cat: "Pasteurizadores", url: "/productos/pasteurizadores/#tina-electrico", keywords: "pasteurizador, tina, electrico, sanidad, calostro, bacteria" },
    { name: "Pasteurizador de tina a caldera", cat: "Pasteurizadores", url: "/productos/pasteurizadores/#tina-caldera", keywords: "pasteurizador, tina, caldera, vapor, sanidad, calostro" },
    { name: "Pasteurizador a placas semiautomático", cat: "Pasteurizadores", url: "/productos/pasteurizadores/#placas-semiautomatico", keywords: "pasteurizador, placa, semiautomatico, sanidad, continuo" },
    { name: "Pasteurizador a placas automático", cat: "Pasteurizadores", url: "/productos/pasteurizadores/#placas-automatico", keywords: "pasteurizador, placa, automatico, sanidad, plc" }
];
// Función mágica para quitar tildes y pasar a minúsculas
const limpiarTexto = (texto) => {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

export function initSearch() {
    const searchInputs = document.querySelectorAll('.search-input');

    searchInputs.forEach(input => {
        const pill = input.closest('.search-pill');
        pill.style.position = 'relative'; // Necesario para anclar el desplegable

        // Creamos la cajita de resultados
        const dropdown = document.createElement('div');
        dropdown.className = 'search-results-dropdown';
        pill.appendChild(dropdown);

        // Cuando el usuario escribe...
        input.addEventListener('input', (e) => {
            const queryOriginal = e.target.value.trim();
            const queryLimpia = limpiarTexto(queryOriginal);
            
            // Si borró todo, ocultamos la caja
            if (queryLimpia.length === 0) {
                dropdown.classList.remove('active');
                dropdown.innerHTML = '';
                return;
            }

            // Filtramos comparando textos sin tildes
            const results = searchDatabase.filter(item => {
                const nombreLimpio = limpiarTexto(item.name);
                const keywordsLimpias = limpiarTexto(item.keywords);
                return nombreLimpio.includes(queryLimpia) || keywordsLimpias.includes(queryLimpia);
            });

            // Pintamos los resultados (máximo 6 para no hacer una lista infinita)
            if (results.length > 0) {
                dropdown.innerHTML = results.slice(0, 6).map(item => `
                    <a href="${item.url}" class="search-item">
                        <span class="search-item-title">${item.name}</span>
                        <span class="search-item-cat">${item.cat}</span>
                    </a>
                `).join('');
            } else {
                dropdown.innerHTML = `<div class="search-no-results">No encontramos "${queryOriginal}"</div>`;
            }

            dropdown.classList.add('active');
        });

        // Si hace clic en cualquier otro lado de la pantalla, cerramos el buscador
        document.addEventListener('click', (e) => {
            if (!pill.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    });
}