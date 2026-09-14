import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

export default defineConfig({
  base: '/rodeg/',
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/components'),
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        categorias: resolve(__dirname, 'categorias.html'),
        enfriado: resolve(__dirname, 'productos/enfriadores-de-leche/index.html'),
        ordenoEquipos: resolve(__dirname, 'productos/ordeno/equipos-completos/index.html'),
        ordenoRepuestos: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/index.html'),
        bretes: resolve(__dirname, 'productos/bretes/index.html'),
        manejo: resolve(__dirname, 'productos/manejo-y-corrales-de-rodeo/index.html'),
        enfriado: resolve(__dirname, 'productos/enfriadores-de-leche/index.html'),
        alimentacionOrdeno: resolve(__dirname, 'productos/alimentacion-ordeno/index.html'),
        alimentacionTerneros: resolve(__dirname, 'productos/alimentacion-terneros/index.html'),
        confort: resolve(__dirname, 'productos/confort-animal/index.html'),
        pasteurizadores: resolve(__dirname, 'productos/pasteurizadores/index.html'),
        milleniumMagna: resolve(__dirname, 'productos/ordeno/equipos-completos/millenium-magna/index.html'),
        pezonerasCategoria: resolve(__dirname, 'productos/ordeno/sistemas-y-repuestos/pezoneras/index.html'),
        tranquerasCategoria: resolve(__dirname, 'productos/manejo-y-corrales-de-rodeo/tranqueras-arreadoras/index.html'),
      }
    }
  }
});