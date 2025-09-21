const PRODUCTS = [
    { id: 1, name: "Naranja Jugo 3kg", price: 99, img: "img/naranja.jpg", category: "fruta" },
    { id: 2, name: "Manzana Roja 1kg", price: 120, img: "img/manzana.jpg", category: "fruta" },
    { id: 5, name: "Manzana Roja 1kg", price: 120, img: "img/manzana.jpg", category: "fruta" },
    { id: 8, name: "Lechuga Manteca", price: 75, img: "img/lechuga-manteca.jpg", category: "verdura" },
    { id: 9, name: "Lechuga Crespa", price: 70, img: "img/lechuga-crespa.jpg", category: "verdura" },
    { id: 10, name: "Lechuga Morada", price: 80, img: "img/lechuga-morada.jpg", category: "verdura" },
    { id: 11, name: "Acelga", price: 90, img: "img/acelga.jpg", category: "verdura" },
    { id: 12, name: "Espinaca", price: 85, img: "img/espinaca.jpg", category: "verdura" },
    { id: 14, name: "Nabo", price: 55, img: "img/nabo.jpg", category: "verdura" },
    { id: 15, name: "Perejil", price: 40, img: "img/perejil.jpg", category: "verdura" },
    { id: 16, name: "Apio", price: 60, img: "img/apio.jpg", category: "verdura" },
    { id: 17, name: "Repollo", price: 85, img: "img/repollo.jpg", category: "verdura" },
    { id: 18, name: "Repollo Bruselas", price: 150, img: "img/repollo-bruselas.jpg", category: "verdura" },
    { id: 19, name: "Coliflor", price: 95, img: "img/coliflor.jpg", category: "verdura" },
    { id: 20, name: "Remolacha", price: 70, img: "img/remolacha.jpg", category: "verdura" },
    { id: 21, name: "Zanahoria", price: 70, img: "img/zanahoria.jpg", category: "verdura" },
    { id: 23, name: "Brocóli", price: 110, img: "img/brocolos.jpg", category: "verdura" },
    { id: 24, name: "Berengenas", price: 90, img: "img/berengenas.jpg", category: "verdura" },
    { id: 25, name: "Pepinó", price: 75, img: "img/pepino.jpg", category: "verdura" },
    { id: 26, name: "Zapallito", price: 80, img: "img/zapalito.jpg", category: "verdura" },
    { id: 27, name: "Zapallo criollo", price: 65, img: "img/zapallo.jpg", category: "verdura" },
    { id: 28, name: "Cebolla", price: 70, img: "img/cebolla.jpg", category: "verdura" },
    { id: 29, name: "Cebolla colorada", price: 70, img: "img/cebolla.jpg", category: "verdura" },
    { id: 30, name: "Boniato criollo", price: 85, img: "img/boniato.jpg", category: "verdura" },
    { id: 31, name: "Boniato zanahoria", price: 85, img: "img/boniato.jpg", category: "verdura" },
    { id: 33, name: "Calabacín", price: 75, img: "img/calabacin.jpg", category: "verdura" },
    { id: 34, name: "Cabutiá", price: 80, img: "img/cabutia.jpg", category: "verdura" },
    { id: 35, name: "Papa oferta", price: 65, img: "img/papa.jpg", category: "verdura" },
    { id: 36, name: "Papa Mediana", price: 60, img: "img/papa-mediana.jpg", category: "verdura" },
    { id: 37, name: "Ajo", price: 110, img: "img/ajo.jpg", category: "verdura" },
    { id: 38, name: "Morrón Verde", price: 130, img: "img/morron-verde.jpg", category: "verdura" },
    { id: 39, name: "Morrón Rojo", price: 150, img: "img/morron-rojo.jpg", category: "verdura" },
    { id: 40, name: "Lima", price: 95, img: "img/limon.jpg", category: "fruta" },
    { id: 41, name: "Limón", price: 95, img: "img/limon.jpg", category: "fruta" },
    { id: 42, name: "Tomate Especial", price: 110, img: "img/tomate-especial.jpg", category: "verdura" },
    { id: 43, name: "Tomate perita", price: 100, img: "img/tomate-mediano.jpg", category: "verdura" },
    { id: 44, name: "Tomate x cajón", price: 1000, img: "img/tomate-cajon.jpg", category: "verdura" },
    { id: 47, name: "Berro", price: 65, img: "img/berro.jpg", category: "verdura" },
    { id: 48, name: "Albahaca", price: 50, img: "img/albahaca.jpg", category: "verdura" },
    { id: 49, name: "Cebolla Verdeo", price: 65, img: "img/cebolla-verdea.jpg", category: "verdura" },
    { id: 52, name: "Jengibre", price: 180, img: "img/jengibre.jpg", category: "verdura" },
    { id: 53, name: "Manzana red", price: 120, img: "img/manzana.jpg", category: "fruta" },
    { id: 54, name: "Manzana pink", price: 110, img: "img/manzana-mediana.jpg", category: "fruta" },
    { id: 55, name: "Manzana fuji", price: 130, img: "img/manzana-atf.jpg", category: "fruta" },
    { id: 56, name: "Manzana oferta", price: 1100, img: "img/manzana-cajon.jpg", category: "fruta" },
    { id: 57, name: "Manzana Verde", price: 125, img: "img/manzana-verde.jpg", category: "fruta" },
    { id: 58, name: "Naranja Jugo", price: 99, img: "img/naranja-jugo.jpg", category: "fruta" },
    { id: 59, name: "Naranja mesa", price: 90, img: "img/naranja.jpg", category: "fruta" },
    { id: 60, name: "Mandarina", price: 85, img: "img/mandarina.jpg", category: "fruta" },
    { id: 61, name: "Mandarina oferta", price: 85, img: "img/mandarina.jpg", category: "fruta" },
    { id: 62, name: "Pera", price: 130, img: "img/pera.jpg", category: "fruta" },
    { id: 64, name: "Uva", price: 180, img: "img/uva.jpg", category: "fruta" },
    { id: 66, name: "Banana ecuador", price: 100, img: "img/banana.jpg", category: "fruta" },
    { id: 67, name: "Banana brasil", price: 100, img: "img/banana.jpg", category: "fruta" },
    { id: 68, name: "Melón", price: 140, img: "img/melon.jpg", category: "fruta" },
    { id: 70, name: "Ciruela Roja", price: 135, img: "img/ciruela-roja.jpg", category: "fruta" },
    { id: 73, name: "Frutilla", price: 200, img: "img/frutilla.jpg", category: "fruta" },
    { id: 76, name: "Ananá", price: 180, img: "img/anana.jpg", category: "fruta" },
    { id: 78, name: "Pomelo Rosado", price: 120, img: "img/pomelo-rosado.jpg", category: "fruta" },
    { id: 84, name: "Zukini", price: 85, img: "img/zukini.jpg", category: "verdura" },
    { id: 85, name: "Kiwi", price: 160, img: "img/kiwi.jpg", category: "fruta" },
    { id: 87, name: "Brócoli", price: 110, img: "img/brocoli.jpg", category: "verdura" },
    { id: 89, name: "Cibulet", price: 45, img: "img/cibulet.jpg", category: "verdura" },
    { id: 91, name: "Huevos jumbo", price: 200, img: "img/huevos.jpg", category: "otros" },
    { id: 92, name: "Huevos medianos", price: 180, img: "img/huevos.jpg", category: "otros" },
    { id: 93, name: "Huevos oferta", price: 180, img: "img/huevos.jpg", category: "otros" },
    { id: 94, name: "Rúcula", price: 70, img: "img/rucula.jpg", category: "verdura" },
    { id: 95, name: "Palta haas", price: 70, img: "img/rucula.jpg", category: "fruta" },
    { id: 96, name: "Mango", price: 70, img: "img/rucula.jpg", category: "fruta" },
    { id: 97, name: "Membrillo", price: 70, img: "img/rucula.jpg", category: "fruta" },
    { id: 98, name: "Tomate cherry", price: 70, img: "img/rucula.jpg", category: "verdura" },
    { id: 99, name: "Arandanos", price: 70, img: "img/rucula.jpg", category: "fruta" }
];

  const grid = document.getElementById('productsGrid');

  function renderProducts(filter = "all"){
    grid.innerHTML = '';
    PRODUCTS.filter(p => filter === "all" || p.category === filter)
            .forEach(p => {
              const card = document.createElement('article');
              card.className='card';
              card.innerHTML = `
                <div class="thumb" aria-hidden="true">
                  <img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:8px">
                </div>
                <div class="meta">
                  <h3>${p.name}</h3>
                  <p class="muted">Producto fresco - stock limitado</p>
                  <div style="margin-top:8px; display:flex; justify-content:space-between; align-items:center">
                    <div class="price">$${p.price}</div>
                    <button class="add" data-id="${p.id}" aria-label="Agregar ${p.name}">Agregar</button>
                  </div>
                </div>
              `;
              grid.appendChild(card);
            });
  }

  // Escuchar cambios en los radios
  document.querySelectorAll('input[name="category"]').forEach(input=>{
    input.addEventListener("change", ()=>{
      renderProducts(input.value);
    });
  });

  renderProducts();

/* ============== Carrito ============== */
let cart = [];
const cartCount = document.getElementById('cartCount');
const cartList = document.getElementById('cartList');
const cartTotalEl = document.getElementById('cartTotal');

function updateCartUI() {
    cartCount.textContent = cart.reduce((s, i) => s + i.qty, 0);
    cartList.innerHTML = '';
    cart.forEach(item => {
        const el = document.createElement('div');
        el.className = 'cart-item';
        el.innerHTML = `
          <div style="width:56px;height:56px;border-radius:8px;overflow:hidden">
            <img src="${item.img}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover">
          </div>
          <div class="ri">
            <div style="display:flex; justify-content:space-between; align-items:center">
              <div><strong>${item.name}</strong><div style="font-size:13px;color:var(--muted)">Unit: $${item.price}</div></div>
              <div class="price">$${item.price * item.qty}</div>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px">
              <div class="qctrl">
                <button class="small-btn" data-action="decrease" data-id="${item.id}">−</button>
                <div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.02)">${item.qty}</div>
                <button class="small-btn" data-action="increase" data-id="${item.id}">+</button>
              </div>
              <button class="small-btn" data-action="remove" data-id="${item.id}">Eliminar</button>
            </div>
          </div>
        `;
        cartList.appendChild(el);
    });

    const total = cart.reduce((s, i) => s + i.qty * i.price, 0);
    cartTotalEl.textContent = `$${total}`;

    // handlers para botones dentro del carrito
    cartList.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = Number(btn.dataset.id);
            const action = btn.dataset.action;
            if (action === 'increase') { changeQty(id, +1) }
            if (action === 'decrease') { changeQty(id, -1) }
            if (action === 'remove') { removeItem(id) }
        });
    });
}

function changeQty(id, delta) {
    const idx = cart.findIndex(i => i.id === id);
    if (idx < 0) return;
    cart[idx].qty += delta;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
    updateCartUI();
}
function removeItem(id) { cart = cart.filter(i => i.id !== id); updateCartUI(); }

function addToCart(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const existing = cart.find(i => i.id === id);
    if (existing) existing.qty++;
    else cart.push({ id: p.id, name: p.name, price: p.price, img: p.img, qty: 1 });
    updateCartUI();
    // pequeño feedback
    const btn = document.querySelector(`button.add[data-id="${id}"]`);
    btn && (btn.textContent = 'Agregado ✓', setTimeout(() => btn.textContent = 'Agregar', 700));
}

document.addEventListener('click', (e) => {
    const add = e.target.closest('button.add');
    if (add) {
        const id = Number(add.dataset.id);
        addToCart(id);
    }
});

/* ============== Modal show/hide ============== */
const modalBackdrop = document.getElementById('modalBackdrop');
const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');

openCartBtn.addEventListener('click', () => {
    modalBackdrop.style.display = 'flex';
    modalBackdrop.setAttribute('aria-hidden', 'false');
    updateCartUI();
});
closeCartBtn.addEventListener('click', () => {
    modalBackdrop.style.display = 'none';
    modalBackdrop.setAttribute('aria-hidden', 'true');
});
modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) { modalBackdrop.style.display = 'none'; modalBackdrop.setAttribute('aria-hidden', 'true'); }
});

/* ============== Delivery / pickup logic ============== */
const deliveryRadios = document.querySelectorAll('input[name="deliveryOption"]');
const pickupTimeWrap = document.getElementById('pickupTimeWrap');
const pickupTimeInput = document.getElementById('pickupTime');

function checkDelivery() {
    const val = document.querySelector('input[name="deliveryOption"]:checked').value;
    if (val === 'pickup') { pickupTimeWrap.style.display = 'flex'; pickupTimeInput.required = true; }
    else { pickupTimeWrap.style.display = 'none'; pickupTimeInput.required = false; }
}
deliveryRadios.forEach(r => r.addEventListener('change', checkDelivery));
checkDelivery();

/* ============== WhatsApp message building ============== */
const whBtn = document.getElementById('whBtn');

// Telefono destino: editá con el número real (formato internacional sin + ni espacios, ejemplo: 59891234567)
const WHATSAPP_NUMBER = '59899385774';

whBtn.addEventListener('click', () => {
    if (cart.length === 0) { alert('El carrito está vacío. Agregá algún producto, che.'); return; }
    const tipo = document.querySelector('input[name="deliveryOption"]:checked').value;
    const total = cart.reduce((s, i) => s + i.qty * i.price, 0);

    let msg = `*Pedido — Mercadito Don Ariel*%0A`;
    cart.forEach(item => {
        msg += `- ${item.name} x ${item.qty} = $${item.qty * item.price}%0A`;
    });
    msg += `%0A*Total:* $${total}%0A`;
    if (tipo === 'delivery') {
        msg += `%0ATipo: Envío a domicilio%0A`;
        msg += `Dirección: ____________________%0A`; // usuario completa
    } else {
        const hora = pickupTimeInput.value ? pickupTimeInput.value : 'No especificada';
        msg += `%0ATipo: Retiro en local%0AHora aproximada: ${hora}%0A`;
    }
    msg += `%0AComentarios: ____________________%0A`;
    msg += `%0A*Enviar pedido desde web*`;

    // Abrir WhatsApp Web / App
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    window.open(url, '_blank');
});

/* ============== Carousel simple ============== */
const slides = document.getElementById('slides');
const dotsWrap = document.getElementById('dots');
let current = 0;
const slidesCount = slides.children.length;

function makeDots() {
    for (let i = 0; i < slidesCount; i++) {
        const d = document.createElement('div');
        d.className = 'dot' + (i === 0 ? ' active' : '');
        d.dataset.index = i;
        d.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(d);
    }
}
function goTo(i) {
    current = (i + slidesCount) % slidesCount;
    slides.style.transform = `translateX(-${current * 100}%)`;
    updateDots();
}
function updateDots() {
    dotsWrap.querySelectorAll('.dot').forEach((dot, idx) => dot.classList.toggle('active', idx === current));
}
function autoSlide() {
    goTo((current + 1) % slidesCount);
    setTimeout(autoSlide, 6000);
}

makeDots();
setTimeout(autoSlide, 6000);

/* ============== Init ============== */
renderProducts();
updateCartUI();

/* ====== Accessibility: cerrar modal con ESC ====== */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modalBackdrop.style.display = 'none';
        modalBackdrop.setAttribute('aria-hidden', 'true');
    }
});

/* ====== Tip: Reemplaza el teléfono en WHATSAPP_NUMBER y la ruta del logo en <img> ====== */