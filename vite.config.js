import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/components'),
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        // --- PÁGINAS PRINCIPALES ---
        main: resolve(__dirname, 'index.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        categorias: resolve(__dirname, 'categorias.html'),
        nosotros: resolve(__dirname, 'nosotros.html'),

        // --- CATEGORÍAS GENERALES ---
        enfriado: resolve(__dirname, 'productos/enfriadores-de-leche/index.html'),
        bretes: resolve(__dirname, 'productos/bretes/index.html'),
        manejo: resolve(__dirname, 'productos/manejo-y-corrales-de-rodeo/index.html'),
        alimentacionOrdeno: resolve(__dirname, 'productos/alimentacion-ordeno/index.html'),
        alimentacionTerneros: resolve(__dirname, 'productos/alimentacion-terneros/index.html'),
        confort: resolve(__dirname, 'productos/confort-animal/index.html'),
        pasteurizadores: resolve(__dirname, 'productos/pasteurizadores/index.html'),
        nuevasTecnologias: resolve(__dirname, 'productos/nuevas-tecnologias/index.html'),

        // --- ENFRIADORES DE LECHE (SUB-CATEGORÍAS) ---
        frioComando: resolve(__dirname, 'productos/enfriadores-de-leche/comando-de-frio-y-lavado-automatico/index.html'),
        frioCisterna: resolve(__dirname, 'productos/enfriadores-de-leche/enfriador-cisterna/index.html'),
        frioRecuperador: resolve(__dirname, 'productos/enfriadores-de-leche/recuperador-de-calor/index.html'),
        frioSilos: resolve(__dirname, 'productos/enfriadores-de-leche/silos-de-almacenamiento/index.html'),
        frioInstantaneo: resolve(__dirname, 'productos/enfriadores-de-leche/sistema-de-frio-instantaneo/index.html'),
        
        frioCubas: resolve(__dirname, 'productos/enfriadores-de-leche/cubas/index.html'),
        frioCubasAbiertas: resolve(__dirname, 'productos/enfriadores-de-leche/cubas/abiertas/index.html'),
        frioCubasCerradas: resolve(__dirname, 'productos/enfriadores-de-leche/cubas/cerradas/index.html'),

        // --- ALIMENTACIÓN TERNEROS (SUB-CATEGORÍAS) ---
        taxiArrastre: resolve(__dirname, 'productos/alimentacion-terneros/taxi-arrastre/index.html'),
        taxiAutopropulsado: resolve(__dirname, 'productos/alimentacion-terneros/taxi-autopropulsado/index.html'),
        taxiManual: resolve(__dirname, 'productos/alimentacion-terneros/taxi-manual/index.html'),

        // --- CONFORT ANIMAL (SUB-CATEGORÍAS) ---
        confortRfan: resolve(__dirname, 'productos/confort-animal/r-fan/index.html'),

        // --- MANEJO Y CORRALES (SUB-CATEGORÍAS) ---
        tranquerasCategoria: resolve(__dirname, 'productos/manejo-y-corrales-de-rodeo/tranqueras-arreadoras/index.html'),
        tranquerasAutomatica: resolve(__dirname, 'productos/manejo-y-corrales-de-rodeo/tranqueras-arreadoras/automatica/index.html'),
        tranquerasManual: resolve(__dirname, 'productos/manejo-y-corrales-de-rodeo/tranqueras-arreadoras/manual/index.html'),

        // --- NUEVAS TECNOLOGÍAS (SUB-CATEGORÍAS) ---
        tecnologiaSmartEar: resolve(__dirname, 'productos/nuevas-tecnologias/smart-ear-tag/index.html'),

        // --- ORDEÑO: EQUIPOS COMPLETOS ---
        ordenoEquipos: resolve(__dirname, 'productos/ordeno/equipos-completos/index.html'),
        equiposCabrasOvejas: resolve(__dirname, 'productos/ordeno/equipos-completos/cabras-y-ovejas/index.html'),
        equiposDte: resolve(__dirname, 'productos/ordeno/equipos-completos/dte/index.html'),
        equiposDtp: resolve(__dirname, 'productos/ordeno/equipos-completos/dtp/index.html'),
        equiposMillenium: resolve(__dirname, 'productos/ordeno/equipos-completos/millenium/index.html'),
        equiposMilleniumMagna: resolve(__dirname, 'productos/ordeno/equipos-completos/millenium-magna/index.html'),
        equiposMp2000: resolve(__dirname, 'productos/ordeno/equipos-completos/mp2000/index.html'),
        equiposMp2700: resolve(__dirname, 'productos/ordeno/equipos-completos/mp2700/index.html'),

        // --- ORDEÑO: SISTEMAS Y REPUESTOS ---
        ordenoRepuestos: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/index.html'),
        repuestosBombasVacio: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/bombas-de-vacio/index.html'),
        repuestosBrazoM18: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/brazo-de-posicionamiento-m18/index.html'),
        repuestosControlesNivel: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/controles-de-nivel/index.html'),
        repuestosElectrobombas: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/electrobombas-centrifugas/index.html'),
        repuestosExtractorCra4g: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/extractor-automatico-cra4g/index.html'),
        repuestosGlobalFlow: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/global-flow-control/index.html'),
        repuestosGrupoPz3: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/grupo-de-ordeño-pz-3/index.html'), 
        repuestosGrupoRmax: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/grupo-de-ordeño-r-max/index.html'), 
        repuestosIntercambiadores: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/intercambiadores-de-calor/index.html'),
        repuestosLavados: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/lavados-programables/index.html'),
        repuestosOrdenador: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/ordenador-individual/index.html'),
        repuestosPulmones: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/pulmones-de-vacio/index.html'),
        repuestosPulsadorRg3: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/pulsador-rg3/index.html'),
        repuestosRegulacionVacio: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/regulacion-de-vacio/index.html'),
        repuestosUnidadesFinales: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/unidades-finales/index.html'),

        // --- ORDEÑO: PEZONERAS ---
        pezonerasCategoria: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/pezoneras/index.html'),
        pezonerasMillenium: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/pezoneras/linea-millenium/index.html'),
        pezonerasPz3: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/pezoneras/linea-pz3/index.html'),
        pezonerasPzrmax: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/pezoneras/linea-pzrmax/index.html'),

        // --- ORDEÑO: MANGUERAS Y TUBOS ---
        manguerasCategoria: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/mangueras-y-tubos/index.html'),
        manguerasLavado: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/mangueras-y-tubos/mangueras-de-lavado/index.html'),
        manguerasPulsacion: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/mangueras-y-tubos/tubos-de-pulsacion/index.html'),
        manguerasLacteos: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/mangueras-y-tubos/tubos-lacteos/index.html'),
      }
    }
  }
});