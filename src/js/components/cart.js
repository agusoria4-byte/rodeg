export function initCart() {
    // 1. Recuperamos la lista de la memoria del navegador (si no hay, creamos un array vacío)
    let inquiryList = JSON.parse(localStorage.getItem('rodeg_cart')) || [];
    
    const cartCount = document.getElementById('cart-count');
    const cartPanel = document.getElementById('cart-panel');
    const cartItemsContainer = document.getElementById('cart-items');
    const inquiryForm = document.getElementById('inquiry-form');
    const openCartBtn = document.getElementById('open-cart-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toast-title');
    const cartPopupAlert = document.getElementById('cart-popup-alert');
    let popupTimeout;

    // 2. Función para guardar en memoria y pintar en pantalla
    const updateCart = () => {
        localStorage.setItem('rodeg_cart', JSON.stringify(inquiryList)); // Guardamos en memoria
        if(cartCount) cartCount.textContent = inquiryList.length;
        
        if (!cartItemsContainer) return;

        if (inquiryList.length === 0) {
            cartItemsContainer.innerHTML = '<p class="cart-empty">Todavía no agregaste productos.</p>';
            if(inquiryForm) inquiryForm.style.display = 'none';
        } else {
            cartItemsContainer.innerHTML = inquiryList.map((item, index) => `
                <div class="cart-item">
                    <span>${item}</span>
                    <button class="cart-item-remove" data-index="${index}">X</button>
                </div>
            `).join('');
            if(inquiryForm) inquiryForm.style.display = 'block';

            // Escuchamos los botones de eliminar (X)
            document.querySelectorAll('.cart-item-remove').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const idx = e.target.getAttribute('data-index');
                    removeProduct(idx);
                });
            });
        }
        
        // Marcamos los botones de la página actual como "añadidos" si ya están en la lista
        document.querySelectorAll('.add-icon-btn').forEach(btn => {
            const product = btn.getAttribute('data-product');
            if (inquiryList.includes(product)) {
                btn.classList.add('added');
                btn.textContent = '✓';
            } else {
                btn.classList.remove('added');
                btn.textContent = '+';
            }
        });
    };

    // 3. Eliminar producto
    const removeProduct = (index) => {
        inquiryList.splice(index, 1);
        updateCart();
    };

    // 4. Agregar producto
    window.addProductToCart = (productName) => {
        if (!inquiryList.includes(productName)) {
            inquiryList.push(productName);
            updateCart();
            
            // Mostrar Toast
            if(toast && toastTitle) {
                toastTitle.textContent = productName;
                toast.classList.add('show');
                setTimeout(() => toast.classList.remove('show'), 3500);
            }

            // Mostrar alerta de popup
            if(cartPopupAlert) {
                cartPopupAlert.classList.add('show');
                clearTimeout(popupTimeout);
                popupTimeout = setTimeout(() => {
                    cartPopupAlert.classList.remove('show');
                }, 3500);
            }
        }
    };

    // 5. Interacciones de UI (Abrir, Cerrar)
    if (openCartBtn) openCartBtn.addEventListener('click', () => cartPanel.classList.toggle('open'));
    if (closeCartBtn) closeCartBtn.addEventListener('click', () => cartPanel.classList.remove('open'));

    // 6. Escuchar clics en los botones de agregar productos en CUALQUIER página
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-icon-btn')) {
            const product = e.target.getAttribute('data-product');
            if (product) window.addProductToCart(product);
        }
    });

    // 7. Envíos (WhatsApp y Correo)
    const btnMail = document.getElementById('btn-mail');
    const rodegWhatsApp = "5493401421075"; 

    // Función para armar el texto
    const generateMessage = (isEmail) => {
        const name = document.getElementById('inq-name').value;
        const email = document.getElementById('inq-email').value;
        const phone = document.getElementById('inq-phone').value;
        
        let msg = isEmail 
            ? `Hola Rodeg, soy ${name}.\n\nMe interesa cotizar estos equipos:\n\n`
            : `Hola Rodeg, soy *${name}*.\nMe interesa cotizar estos equipos:\n\n`;
            
        inquiryList.forEach(item => msg += `✅ ${item}\n`);
        msg += `\nDatos de contacto:\n📧 Email: ${email}\n📱 Teléfono: ${phone}`;
        return msg;
    };

    // Botón Naranja (Submit form -> WhatsApp)
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = generateMessage(false);
            window.open(`https://wa.me/${rodegWhatsApp}?text=${encodeURIComponent(message)}`, '_blank');
        });
    }

    // Botón Azul (Correo)
    if (btnMail) {
        btnMail.addEventListener('click', () => {
            // Validar que llenó los campos antes de mandar el mail
            if(!inquiryForm.checkValidity()) {
                inquiryForm.reportValidity();
                return;
            }
            const message = generateMessage(true);
            const subject = encodeURIComponent("Consulta de cotización desde la web");
            window.location.href = `mailto:info@rodeg.com.ar?subject=${subject}&body=${encodeURIComponent(message)}`;
        });
    }

    updateCart();
}