import { initMegaMenu, initMobileMenu } from '../components/header/header.js';
import { initSearch } from './components/search.js';
import { initCart } from './components/cart.js'; 
import { initScrollReveal } from './components/scroll-reveal.js'; 

document.addEventListener('DOMContentLoaded', () => {
    // ... tus otras funciones ...
    initScrollReveal(); 
});

initMegaMenu();
initMobileMenu();
initSearch();
initCart();