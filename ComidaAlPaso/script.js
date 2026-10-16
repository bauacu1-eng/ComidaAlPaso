/* =========================================================
   ✏️ CONFIGURACIÓN DEL NEGOCIO — EDITÁ SOLO ESTA SECCIÓN
   ---------------------------------------------------------
   Todo lo que aparece en la web (nombre, contacto, productos,
   precios, fotos, preguntas, reseñas) se toma de este objeto.
   Cambiá los valores entre comillas y guardá el archivo.
   ========================================================= */
const CONFIG = {
  // Nombre del emprendimiento (aparece en la barra, portada, textos y pie)
  nombre: "COMIDAS AL PASO",

  // Frase distintiva de la marca
  eslogan: "“Brasa, tiempo y buena compañía.”",

  // Logo: ruta a tu imagen (ej.: "images/logo.png"). Dejalo vacío "" para usar el ícono de fuego.
  logo: "",

  // WhatsApp:  solo números, con código de país y sin el 0 ni el 15.
  // Ejemplo Argentina: 54 + 9 + código de área + número → "5491123456789"
  // Si queda vacío, WhatsApp se abre igual y el cliente elige a quién enviar el mensaje.
  whatsapp: "",

  // Teléfono tal como querés que se vea en la web (ej.: "+54 9 11 2345-6789")
  telefono: "5491144798876",


  // Instagram: solo el usuario, sin @ (ej.: "miparrilla"). Vacío = enlace a Instagram general.
  instagram: "@ComidaAlpaso.ok",

  // Dirección o zona de entrega
  zona: "Grandbourg",

  // Horarios de atención (agregá o quitá filas)
  horarios: [
    { dias: "DÍAS DE ATENCIÓN", horas: "8:00hs a 17:00hs" },
    { dias: "DÍAS DE ATENCIÓN", horas: "HORARIO" },
  ],

  // Costo de envío en pesos. Usá null para mostrar "A coordinar".
  costoEnvio: null,

  // true = muestra el aviso de que los precios son de referencia. Ponelo en false cuando cargues tus precios reales.
  preciosDeEjemplo: true,

  // 🖼️ Fotografías de fondo de las secciones (Images 3, 4, 5 y 6)
  fondos: {
    inicio: "images/images-5.jpg",   // Images 5 → Portada
    catalogo: "images/images-3.jpg", // Images 3 → Fondo del catálogo
    nosotros: "images/images-4.jpg", // Images 4 → Foto de "Nosotros"
    pedido: "images/images-6.jpg",   // Images 6 → Bloque "Hacé tu pedido"
  },

  // Historia real del negocio. Si la dejás vacía se muestra un recuadro recordatorio.
  historia: {
    titulo: "Nuestra historia",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Vivamus feugiat, justo non tincidunt tincidunt, neque lorem tincidunt nisi, vitae consequat 
     libero erat sed urna.", // ✏️ Escribí acá cómo empezó tu emprendimiento.
  },

  // Categorías para los filtros del catálogo (el id debe coincidir con "categoria" de cada producto)
  categorias: [
    { id: "todas", nombre: "Todas" },
    { id: "individual", nombre: "Individual" },
    { id: "pareja", nombre: "Para dos" },
    { id: "familiar", nombre: "Familiar" },
    { id: "especial", nombre: "Especial" },
  ],

  // 🥩 PRODUCTOS — precios de EJEMPLO en pesos argentinos (reemplazalos por los tuyos)
  productos: [
    {
      id: "individual",
      nombre: "Parrillada individual",
      categoria: "individual",
      personas: 1,
      precio: 15000, // ✏️ precio de ejemplo
      imagen: "images/images-3.jpg",
      descripcion: "Una porción completa para disfrutar solo o sumar a la mesa.",
      incluye: ["Tira de asado", "Vacío", "Chorizo", "Morcilla", "Chimichurri"],
      etiqueta: "",
    },
    {
      id: "para-dos",
      nombre: "Parrillada para dos",
      categoria: "pareja",
      personas: 2,
      precio: 28000, // ✏️ precio de ejemplo
      imagen: "images/images-5.jpg",
      descripcion: "Cortes variados y achuras para compartir de a dos.",
      incluye: ["Tira de asado", "Vacío", "Pollo", "Chorizos", "Morcillas", "Provoleta"],
      etiqueta: "Más pedida",
    },
    {
      id: "familiar",
      nombre: "Parrillada familiar",
      categoria: "familiar",
      personas: 4,
      precio: 52000, // ✏️ precio de ejemplo
      imagen: "images/images-3.jpg",
      descripcion: "Para la mesa del domingo: abundante, variada y lista para compartir.",
      incluye: ["Asado", "Vacío", "Matambre", "Pollo", "Chorizos", "Morcillas", "Chinchulines"],
      etiqueta: "",
    },
    {
      id: "familiar-grande",
      nombre: "Parrillada familiar grande",
      categoria: "familiar",
      personas: 6,
      precio: 75000, // ✏️ precio de ejemplo
      imagen: "images/images-5.jpg",
      descripcion: "Pensada para reuniones y festejos con toda la familia o amigos.",
      incluye: ["Asado", "Vacío", "Entraña", "Pollo", "Chorizos", "Morcillas", "Provoletas"],
      etiqueta: "",
    },
    {
      id: "especial",
      nombre: "Parrillada especial",
      categoria: "especial",
      personas: 3,
      precio: 45000, // ✏️ precio de ejemplo
      imagen: "images/images-6.jpg",
      descripcion: "Una selección de cortes premium para una ocasión distinta.",
      incluye: ["Asado de tira", "Entraña", "Ojo de bife", "Provoleta", "Chimichurri casero"],
      etiqueta: "Especial",
    },
    {
      id: "tabla-cortes",
      nombre: "Tabla de cortes",
      categoria: "especial",
      personas: 2,
      precio: 34000, // ✏️ precio de ejemplo
      imagen: "images/images-4.jpg",
      descripcion: "Cortes en tiras servidos en tabla, con salsas frescas para acompañar.",
      incluye: ["Bife en tiras", "Vacío", "Salsa criolla", "Guacamole", "Verduras asadas"],
      etiqueta: "",
    },
  ],

  // ❓ PREGUNTAS FRECUENTES (completá las respuestas marcadas con [EDITAR])
  preguntas: [
    {
      pregunta: "¿Cómo hago un pedido?",
      respuesta: "Elegí tus parrilladas en el catálogo, tocá «Agregar al pedido» y luego «Finalizar pedido por WhatsApp». Se abre un mensaje con tu pedido listo para enviarnos y desde ahí coordinamos los detalles.",
    },
    {
      pregunta: "¿Hacen envíos? ¿A qué zonas?",
      respuesta: "[EDITAR] Contá acá si hacés envíos, a qué zonas y si tienen costo. También podés indicar si se puede retirar el pedido.",
    },
    {
      pregunta: "¿Con cuánta anticipación tengo que pedir?",
      respuesta: "[EDITAR] Indicá con cuánta anticipación conviene hacer el pedido, sobre todo para fines de semana y reuniones grandes.",
    },
    {
      pregunta: "¿Qué medios de pago aceptan?",
      respuesta: "[EDITAR] Detallá los medios de pago que aceptás. Desde esta web no se realizan pagos en línea: el pago se coordina por WhatsApp.",
    },
    {
      pregunta: "¿Puedo personalizar mi parrillada?",
      respuesta: "Escribinos por WhatsApp contándonos qué necesitás (cantidad de personas, cortes preferidos o punto de cocción) y vemos juntos la mejor opción.",
    },
  ],

  // ⭐ RESEÑAS: cargá SOLO opiniones reales de clientes. Mientras esté vacío se muestra un mensaje.
  // Ejemplo: { nombre: "Nombre del cliente", texto: "Su opinión", estrellas: 5 }
  resenas: [],
};
/* ================= FIN DE LA CONFIGURACIÓN ================= */


/* =========================================================
   UTILIDADES
   ========================================================= */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// Formato de moneda argentina: $ 15.000
const pesos = (n) => "$ " + Math.round(n).toLocaleString("es-AR");

// Evita que textos de la configuración rompan el HTML
const esc = (str) =>
  String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Arma el enlace de WhatsApp con un mensaje prearmado
function waLink(mensaje) {
  const numero = String(CONFIG.whatsapp).replace(/\D/g, "");
  const texto = encodeURIComponent(mensaje);
  return numero ? `https://wa.me/${numero}?text=${texto}` : `https://wa.me/?text=${texto}`;
}

function openWhatsApp(mensaje) {
  window.open(waLink(mensaje), "_blank", "noopener");
}

/* =========================================================
   NOTIFICACIONES (toasts)
   ========================================================= */
function toast(msg, { type = "ok", action } = {}) {
  const box = $("#toasts");
  const el = document.createElement("div");
  el.className = `toast${type === "error" ? " toast--error" : ""}`;
  el.innerHTML = `<span class="toast__icon" aria-hidden="true">${type === "error" ? "!" : "✓"}</span><span>${esc(msg)}</span>`;
  if (action) {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = action.label;
    b.addEventListener("click", () => { action.onClick(); remove(); });
    el.appendChild(b);
  }
  box.appendChild(el);
  // Máximo 3 avisos a la vez
  while (box.children.length > 3) box.firstElementChild.remove();
  const timer = setTimeout(remove, 3200);
  function remove() {
    clearTimeout(timer);
    el.classList.add("is-leaving");
    el.addEventListener("animationend", () => el.remove(), { once: true });
  }
}

/* =========================================================
   APLICAR CONFIGURACIÓN A LA PÁGINA
   ========================================================= */
function applyConfig() {
  const igUser = String(CONFIG.instagram).replace(/^@/, "").trim();
  const valores = {
    nombre: CONFIG.nombre,
    eslogan: CONFIG.eslogan,
    telefono: CONFIG.telefono,
    zona: CONFIG.zona,
    instagramTexto: igUser ? "@" + igUser : "@TU_USUARIO",
  };
  $$("[data-cfg]").forEach((el) => {
    const v = valores[el.dataset.cfg];
    if (v !== undefined) el.textContent = v;
  });
  document.title = `${CONFIG.nombre} | Parrilladas para compartir`;

  // Logo
  if (CONFIG.logo) {
    $$("[data-logo]").forEach((el) => {
      el.classList.add("has-logo");
      el.innerHTML = `<img src="${esc(CONFIG.logo)}" alt="" />`;
    });
  }

  // Fondos de secciones
  const root = document.documentElement.style;
  Object.entries(CONFIG.fondos).forEach(([k, url]) => root.setProperty(`--bg-${k}`, `url("${url}")`));
  const imgNos = $('[data-img="nosotros"]');
  if (imgNos && CONFIG.fondos.nosotros) imgNos.src = CONFIG.fondos.nosotros;

  // Teléfono (enlace para llamar): usa los números de CONFIG.telefono o, si no tiene, el de WhatsApp
  const telDigitos = String(CONFIG.telefono).replace(/\D/g, "");
  const tel = telDigitos.length >= 8 ? telDigitos : String(CONFIG.whatsapp).replace(/\D/g, "");
  $$("[data-tel]").forEach((a) => {
    if (tel) a.href = (String(CONFIG.telefono).trim().startsWith("+") || tel === String(CONFIG.whatsapp).replace(/\D/g, "") ? "tel:+" : "tel:") + tel;
    else {
      a.removeAttribute("href");
      a.setAttribute("aria-disabled", "true");
    }
  });

  // Instagram
  $$("[data-ig]").forEach((a) => (a.href = igUser ? `https://www.instagram.com/${encodeURIComponent(igUser)}/` : "https://www.instagram.com/"));

  // Botones de WhatsApp de consulta
  const consulta = `¡Hola ${CONFIG.nombre}! Quería hacer una consulta sobre sus parrilladas.`;
  $$('[data-wa="consulta"]').forEach((a) => (a.href = waLink(consulta)));

  // Horarios
  const hours = $("[data-hours]");
  if (hours) hours.innerHTML = CONFIG.horarios.map((h) => `<li><span>${esc(h.dias)}</span><span>${esc(h.horas)}</span></li>`).join("");

  // Aviso de precios de referencia
  $("#price-note").hidden = !CONFIG.preciosDeEjemplo;

  // Historia
  const story = $("#story");
  if (CONFIG.historia.texto.trim()) {
    story.innerHTML = `<h3>${esc(CONFIG.historia.titulo)}</h3><p>${esc(CONFIG.historia.texto)}</p>`;
  } else {
    story.classList.add("story--placeholder");
    story.innerHTML = `<h3>${esc(CONFIG.historia.titulo)}</h3><p>✏️ Espacio reservado para la historia real del emprendimiento: cómo empezó, quiénes están detrás y qué los inspira. Se completa en <code>script.js</code> → <code>CONFIG.historia</code>.</p>`;
  }

  $("#year").textContent = new Date().getFullYear();
}

/* =========================================================
   NAVEGACIÓN: menú móvil, sección activa, barra al hacer scroll
   ========================================================= */
function initNav() {
  const nav = $("#nav");
  const menu = $("#menu");
  const burger = $("#burger");

  const setMenu = (open) => {
    menu.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  };
  burger.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));

  // Cerrar el menú al elegir una opción, al tocar fuera o con Escape
  menu.addEventListener("click", (e) => { if (e.target.closest("a, button")) setMenu(false); });
  document.addEventListener("click", (e) => { if (!nav.contains(e.target)) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  window.matchMedia("(min-width: 901px)").addEventListener("change", () => setMenu(false));

  // Desplazamiento suave para todos los enlaces internos
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href");
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", id);
  });

  // Fondo de la barra y botón "volver arriba"
  const toTop = $("#to-top");
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("is-scrolled", y > 30);
    toTop.classList.toggle("is-visible", y > 700);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Resaltar la sección actual en el menú
  const links = $$(".nav__link");
  const sections = links.map((l) => document.querySelector(l.getAttribute("href"))).filter(Boolean);
  const setActive = () => {
    const line = window.scrollY + window.innerHeight * 0.35;
    let current = sections[0];
    sections.forEach((s) => { if (s.offsetTop <= line) current = s; });
    // Al llegar al final de la página, se marca Contacto
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = sections[sections.length - 1];
    links.forEach((l) => {
      const active = l.getAttribute("href") === "#" + current.id;
      l.classList.toggle("is-active", active);
      if (active) l.setAttribute("aria-current", "true");
      else l.removeAttribute("aria-current");
    });
  };
  window.addEventListener("scroll", setActive, { passive: true });
  window.addEventListener("resize", setActive);
  setActive();
}

/* =========================================================
   CATÁLOGO: tarjetas, filtros y orden
   ========================================================= */
const catalogState = { categoria: "todas", orden: "destacados" };

function renderFilters() {
  const box = $("#filters");
  box.innerHTML = CONFIG.categorias
    .map((c) => `<button type="button" class="filter${c.id === catalogState.categoria ? " is-active" : ""}" data-cat="${esc(c.id)}" aria-pressed="${c.id === catalogState.categoria}">${esc(c.nombre)}</button>`)
    .join("");
  box.addEventListener("click", (e) => {
    const b = e.target.closest("[data-cat]");
    if (!b) return;
    catalogState.categoria = b.dataset.cat;
    $$(".filter", box).forEach((f) => {
      const on = f === b;
      f.classList.toggle("is-active", on);
      f.setAttribute("aria-pressed", String(on));
    });
    renderProducts();
  });
  $("#sort").addEventListener("change", (e) => {
    catalogState.orden = e.target.value;
    renderProducts();
  });
}

function renderProducts() {
  let lista = CONFIG.productos.filter((p) => catalogState.categoria === "todas" || p.categoria === catalogState.categoria);
  const ordenes = {
    "precio-asc": (a, b) => a.precio - b.precio,
    "precio-desc": (a, b) => b.precio - a.precio,
    "personas-asc": (a, b) => a.personas - b.personas,
    "personas-desc": (a, b) => b.personas - a.personas,
  };
  if (ordenes[catalogState.orden]) lista = [...lista].sort(ordenes[catalogState.orden]);

  $("#products").innerHTML = lista
    .map((p, i) => {
      const enCarrito = cart.items[p.id];
      const personas = p.personas === 1 ? "1 persona" : `${p.personas} personas`;
      return `
      <article class="product" style="--i:${i}">
        <div class="product__media">
          ${p.etiqueta ? `<span class="product__tag${/especial/i.test(p.etiqueta) ? " product__tag--hot" : ""}">${esc(p.etiqueta)}</span>` : ""}
          <img src="${esc(p.imagen)}" alt="${esc(p.nombre)}: ${esc(p.incluye.join(", "))}" loading="lazy" width="600" height="450" />
          <span class="product__people"><span aria-hidden="true">👥</span> Para ${personas}</span>
        </div>
        <div class="product__body">
          <h3 class="product__name">${esc(p.nombre)}</h3>
          <p class="product__desc">${esc(p.descripcion)}</p>
          <ul class="product__includes" aria-label="Incluye">${p.incluye.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          <div class="product__foot">
            <p class="product__price"><small>${CONFIG.preciosDeEjemplo ? "Precio de referencia" : "Precio"}</small><strong>${pesos(p.precio)}</strong></p>
            <button type="button" class="btn btn--fire btn--sm add-btn" data-add="${esc(p.id)}" aria-label="Agregar ${esc(p.nombre)} al pedido">
              ${enCarrito ? `✓ En el pedido (${enCarrito})` : "Agregar al pedido"}
            </button>
          </div>
        </div>
      </article>`;
    })
    .join("");
  $("#products-empty").hidden = lista.length > 0;
}

/* =========================================================
   CARRITO (se guarda en el navegador con localStorage)
   ========================================================= */
const STORAGE_KEY = "parrillada-pedido-v1";
const cart = {
  items: {}, // { idProducto: cantidad }

  load() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
      // Solo se conservan productos que siguen existiendo en el catálogo
      Object.entries(saved).forEach(([id, q]) => {
        if (findProduct(id) && Number.isInteger(q) && q > 0) this.items[id] = Math.min(q, 99);
      });
    } catch { this.items = {}; }
  },
  save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items)); } catch { /* almacenamiento no disponible */ }
  },
  add(id, n = 1) { this.items[id] = Math.min((this.items[id] || 0) + n, 99); this.changed(); },
  set(id, q) { if (q <= 0) delete this.items[id]; else this.items[id] = Math.min(q, 99); this.changed(); },
  remove(id) { delete this.items[id]; this.changed(); },
  clear() { this.items = {}; this.changed(); },
  lines() {
    return Object.entries(this.items).map(([id, q]) => {
      const p = findProduct(id);
      return { ...p, cantidad: q, subtotal: p.precio * q };
    });
  },
  count() { return Object.values(this.items).reduce((a, b) => a + b, 0); },
  subtotal() { return this.lines().reduce((a, l) => a + l.subtotal, 0); },
  shipping() { return typeof CONFIG.costoEnvio === "number" && this.count() > 0 ? CONFIG.costoEnvio : 0; },
  total() { return this.subtotal() + this.shipping(); },
  changed() { this.save(); renderCart(); renderProducts(); },
};

const findProduct = (id) => CONFIG.productos.find((p) => p.id === id);

function renderCart() {
  const lines = cart.lines();
  const count = cart.count();

  // Contador del botón
  $$("[data-cart-count]").forEach((c) => {
    c.textContent = count;
    c.classList.toggle("has-items", count > 0);
  });
  $(".cart-btn").setAttribute("aria-label", `Abrir mi pedido (${count} ${count === 1 ? "producto" : "productos"})`);

  // Lista de productos
  $("#cart-items").innerHTML = lines
    .map(
      (l) => `
    <li class="cart-item">
      <img src="${esc(l.imagen)}" alt="" width="68" height="68" loading="lazy" />
      <div>
        <p class="cart-item__name">${esc(l.nombre)}</p>
        <p class="cart-item__unit">${pesos(l.precio)} c/u · ${l.personas} ${l.personas === 1 ? "persona" : "personas"}</p>
        <p class="cart-item__line">${pesos(l.subtotal)}</p>
      </div>
      <div class="cart-item__side">
        <div class="qty" role="group" aria-label="Cantidad de ${esc(l.nombre)}">
          <button type="button" data-dec="${esc(l.id)}" aria-label="Quitar una unidad">−</button>
          <output aria-live="polite">${l.cantidad}</output>
          <button type="button" data-inc="${esc(l.id)}" aria-label="Agregar una unidad">+</button>
        </div>
        <button type="button" class="remove-btn" data-remove="${esc(l.id)}" aria-label="Eliminar ${esc(l.nombre)} del pedido">Eliminar</button>
      </div>
    </li>`
    )
    .join("");
  $("#cart-empty").hidden = lines.length > 0;

  // Resumen (paso 2)
  $("#summary-list").innerHTML = lines.map((l) => `<li><span>${l.cantidad} × ${esc(l.nombre)}</span><span>${pesos(l.subtotal)}</span></li>`).join("");

  // Totales
  $("#cart-subtotal").textContent = pesos(cart.subtotal());
  $("#cart-shipping").textContent = typeof CONFIG.costoEnvio === "number" ? pesos(cart.shipping()) : "A coordinar";
  $("#cart-total").textContent = pesos(cart.total());

  // Botones
  $('[data-action="review"]').disabled = lines.length === 0;
  $('[data-action="clear-cart"]').hidden = lines.length === 0;
  if (lines.length === 0) setStep(1);
}

/* ---- Panel del carrito: abrir / cerrar / pasos ---- */
let lastFocus = null;
function openCart() {
  const panel = $("#cart");
  const overlay = $("#overlay");
  lastFocus = document.activeElement;
  overlay.hidden = false;
  requestAnimationFrame(() => overlay.classList.add("is-visible"));
  panel.classList.add("is-open");
  panel.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  setTimeout(() => panel.focus(), 50);
}
function closeCart() {
  const panel = $("#cart");
  const overlay = $("#overlay");
  if (!panel.classList.contains("is-open")) return;
  panel.classList.remove("is-open");
  panel.setAttribute("aria-hidden", "true");
  overlay.classList.remove("is-visible");
  setTimeout(() => (overlay.hidden = true), 350);
  document.body.classList.remove("no-scroll");
  if (lastFocus) lastFocus.focus();
}
function setStep(n) {
  $("#cart-step-1").hidden = n !== 1;
  $("#cart-step-2").hidden = n !== 2;
  $("#cart-actions-1").hidden = n !== 1;
  $("#cart-actions-2").hidden = n !== 2;
  $("#cart-step-label").textContent = `Paso ${n} de 2`;
  $("#cart-title").textContent = n === 1 ? "Mi pedido" : "Confirmá tu pedido";
}

/* ---- Animación: la foto "vuela" hasta el carrito ---- */
function flyToCart(btn) {
  const card = btn.closest(".product");
  const img = card && $("img", card);
  const target = $(".cart-btn");
  if (img && target && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const from = btn.getBoundingClientRect();
    const to = target.getBoundingClientRect();
    const clone = document.createElement("img");
    clone.src = img.src;
    clone.alt = "";
    clone.className = "fly";
    clone.style.left = from.left + from.width / 2 - 22 + "px";
    clone.style.top = from.top + from.height / 2 - 22 + "px";
    document.body.appendChild(clone);
    requestAnimationFrame(() => {
      clone.style.transform = `translate(${to.left + to.width / 2 - (from.left + from.width / 2)}px, ${to.top + to.height / 2 - (from.top + from.height / 2)}px) scale(0.4)`;
      clone.style.opacity = "0.4";
    });
    setTimeout(() => clone.remove(), 800);
  }
  target.classList.remove("bump");
  void target.offsetWidth; // reinicia la animación
  target.classList.add("bump");
}

/* ---- Mensaje de WhatsApp con el pedido ---- */
function buildOrderMessage({ nombre, entrega, direccion, notas }) {
  const lineas = cart.lines().map((l) => `• ${l.cantidad} × ${l.nombre} — ${pesos(l.subtotal)}`);
  const envio = typeof CONFIG.costoEnvio === "number" ? pesos(cart.shipping()) : "A coordinar";
  return [
    `¡Hola ${CONFIG.nombre}! Quiero hacer este pedido:`,
    "",
    ...lineas,
    "",
    `Subtotal: ${pesos(cart.subtotal())}`,
    `Envío: ${entrega === "Retiro" ? "Retiro en el local" : envio}`,
    `*Total: ${pesos(entrega === "Retiro" ? cart.subtotal() : cart.total())}*`,
    "",
    `Nombre: ${nombre}`,
    `Entrega: ${entrega}${entrega !== "Retiro" && direccion ? ` — ${direccion}` : ""}`,
    notas ? `Notas: ${notas}` : "",
    "",
    "¿Me confirman disponibilidad y forma de pago? ¡Gracias!",
  ]
    .filter((l, i, arr) => !(l === "" && arr[i - 1] === ""))
    .join("\n");
}

function initCart() {
  cart.load();
  renderCart();

  // Mostrar/ocultar campo de dirección según la forma de entrega
  const updateDelivery = () => {
    const retiro = $('input[name="entrega"]:checked').value === "Retiro";
    $("#ord-dir-field").hidden = retiro;
    // Si es retiro no se suma envío en el total mostrado
    $("#cart-total").textContent = pesos(retiro ? cart.subtotal() : cart.total());
    $("#cart-shipping").textContent = retiro ? "Retiro" : typeof CONFIG.costoEnvio === "number" ? pesos(cart.shipping()) : "A coordinar";
  };
  $$('input[name="entrega"]').forEach((r) => r.addEventListener("change", updateDelivery));

  // Delegación de eventos para todos los botones de la página
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-add],[data-inc],[data-dec],[data-remove],[data-action]");
    if (!t) return;

    if (t.dataset.add) {
      const p = findProduct(t.dataset.add);
      flyToCart(t);
      cart.add(p.id);
      toast(`${p.nombre} se agregó a tu pedido`, { action: { label: "Ver pedido", onClick: openCart } });
      return;
    }
    if (t.dataset.inc) return cart.add(t.dataset.inc);
    if (t.dataset.dec) return cart.set(t.dataset.dec, (cart.items[t.dataset.dec] || 0) - 1);
    if (t.dataset.remove) {
      const p = findProduct(t.dataset.remove);
      const q = cart.items[p.id];
      cart.remove(p.id);
      toast(`Se eliminó ${p.nombre}`, { action: { label: "Deshacer", onClick: () => cart.add(p.id, q) } });
      return;
    }

    switch (t.dataset.action) {
      case "pedido": // "Hacer un pedido": abre el pedido o lleva al catálogo si está vacío
        if (cart.count() > 0) openCart();
        else {
          $("#catalogo").scrollIntoView({ behavior: "smooth" });
          toast("Elegí tus parrilladas y agregalas a tu pedido");
        }
        break;
      case "open-cart": openCart(); break;
      case "close-cart": closeCart(); break;
      case "go-catalog":
        closeCart();
        $("#catalogo").scrollIntoView({ behavior: "smooth" });
        break;
      case "clear-cart": {
        const copia = { ...cart.items };
        cart.clear();
        toast("Vaciaste tu pedido", { action: { label: "Deshacer", onClick: () => { cart.items = copia; cart.changed(); } } });
        break;
      }
      case "review":
        if (!cart.count()) return;
        setStep(2);
        updateDelivery();
        $("#cart-step-2").scrollTop = 0;
        break;
      case "back":
        setStep(1);
        renderCart();
        break;
      case "send-order": {
        const nombreInput = $("#ord-nombre");
        const err = $("#ord-nombre-err");
        const nombre = nombreInput.value.trim();
        if (nombre.length < 2) {
          err.textContent = "Ingresá tu nombre para que sepamos a quién preparar el pedido.";
          nombreInput.closest(".field").classList.add("has-error");
          nombreInput.focus();
          return;
        }
        err.textContent = "";
        nombreInput.closest(".field").classList.remove("has-error");
        const datos = {
          nombre,
          entrega: $('input[name="entrega"]:checked').value,
          direccion: $("#ord-direccion").value.trim(),
          notas: $("#ord-notas").value.trim(),
        };
        openWhatsApp(buildOrderMessage(datos));
        toast("Abrimos WhatsApp con tu pedido. Solo falta tocar «Enviar».");
        break;
      }
    }
  });

  // Cerrar con el fondo oscuro o la tecla Escape
  $("#overlay").addEventListener("click", closeCart);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeCart(); });

  // Mantener el foco dentro del panel mientras está abierto
  $("#cart").addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;
    const focusables = $$("button, input, textarea, a[href]", $("#cart")).filter((el) => !el.disabled && el.offsetParent !== null);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  // Sincroniza el pedido si se abre la web en otra pestaña
  window.addEventListener("storage", (e) => {
    if (e.key !== STORAGE_KEY) return;
    cart.items = {};
    cart.load();
    renderCart();
    renderProducts();
  });
}

/* =========================================================
   PREGUNTAS FRECUENTES (acordeón)
   ========================================================= */
function initFaq() {
  const box = $("#faq");
  box.innerHTML = CONFIG.preguntas
    .map(
      (q, i) => `
    <div class="acc">
      <h3 style="margin:0;font:inherit">
        <button type="button" class="acc__btn" id="faq-btn-${i}" aria-expanded="false" aria-controls="faq-panel-${i}">
          <span>${esc(q.pregunta)}</span><span class="acc__icon" aria-hidden="true"></span>
        </button>
      </h3>
      <div class="acc__panel" id="faq-panel-${i}" role="region" aria-labelledby="faq-btn-${i}">
        <div><p>${esc(q.respuesta)}</p></div>
      </div>
    </div>`
    )
    .join("");

  box.addEventListener("click", (e) => {
    const btn = e.target.closest(".acc__btn");
    if (!btn) return;
    const item = btn.closest(".acc");
    const open = !item.classList.contains("is-open");
    // Solo una pregunta abierta a la vez
    $$(".acc", box).forEach((a) => {
      a.classList.remove("is-open");
      $(".acc__btn", a).setAttribute("aria-expanded", "false");
    });
    item.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
  });
}

/* =========================================================
   OPINIONES (solo se muestran si hay reseñas reales cargadas)
   ========================================================= */
function renderReviews() {
  const box = $("#reviews");
  if (!CONFIG.resenas.length) {
    box.innerHTML = `
      <div class="reviews__empty reveal">
        <span aria-hidden="true">⭐</span>
        <p><strong>Pronto vas a ver acá las opiniones de nuestros clientes.</strong></p>
        <p>¿Ya probaste nuestras parrilladas? Contanos tu experiencia por WhatsApp.</p>
      </div>`;
    return;
  }
  box.innerHTML = CONFIG.resenas
    .map((r) => {
      const n = Math.max(0, Math.min(5, Number(r.estrellas) || 5));
      return `
      <figure class="review reveal">
        <div class="review__stars" aria-label="${n} de 5 estrellas">${"★".repeat(n)}${"☆".repeat(5 - n)}</div>
        <blockquote>“${esc(r.texto)}”</blockquote>
        <figcaption><cite>— ${esc(r.nombre)}</cite></figcaption>
      </figure>`;
    })
    .join("");
}

/* =========================================================
   FORMULARIO DE CONTACTO (validación + envío por WhatsApp)
   ========================================================= */
function initContactForm() {
  const form = $("#contact-form");
  const status = $("#form-status");

  const reglas = {
    nombre: (v) => (v.length < 2 ? "Ingresá tu nombre (mínimo 2 letras)." : /[0-9<>]/.test(v) ? "El nombre no debería contener números ni símbolos." : ""),
    telefono: (v) => {
      const digitos = v.replace(/\D/g, "");
      if (!v) return "Ingresá un teléfono para poder responderte.";
      if (!/^[+\d\s()-]+$/.test(v)) return "Usá solo números, espacios, guiones o el signo +.";
      if (digitos.length < 8 || digitos.length > 15) return "El teléfono debe tener entre 8 y 15 números.";
      return "";
    },
    mensaje: (v) => (v.length < 10 ? "Contanos un poco más (mínimo 10 caracteres)." : ""),
  };

  const validar = (input) => {
    const error = reglas[input.name](input.value.trim());
    const field = input.closest(".field");
    field.classList.toggle("has-error", !!error);
    field.classList.toggle("is-valid", !error);
    input.setAttribute("aria-invalid", String(!!error));
    $(`#${input.id}-err`).textContent = error;
    return !error;
  };

  $$("input, textarea", form).forEach((input) => {
    input.addEventListener("blur", () => input.value && validar(input));
    input.addEventListener("input", () => input.closest(".field").classList.contains("has-error") && validar(input));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = $$("input, textarea", form);
    const resultados = inputs.map(validar);
    if (resultados.includes(false)) {
      status.className = "form-status is-error";
      status.textContent = "Revisá los campos marcados para continuar.";
      inputs[resultados.indexOf(false)].focus();
      return;
    }
    const d = Object.fromEntries(new FormData(form));
    const mensaje = `¡Hola ${CONFIG.nombre}! Les escribo desde la web.\n\nNombre: ${d.nombre.trim()}\nTeléfono: ${d.telefono.trim()}\n\n${d.mensaje.trim()}`;
    openWhatsApp(mensaje);
    status.className = "form-status is-ok";
    status.textContent = "✓ Abrimos WhatsApp con tu mensaje listo. Tocá «Enviar» en WhatsApp para que nos llegue.";
    form.reset();
    $$(".field", form).forEach((f) => f.classList.remove("is-valid", "has-error"));
  });
}

/* =========================================================
   ANIMACIONES AL HACER SCROLL
   ========================================================= */
function initReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  // Pequeño escalonado entre elementos hermanos
  items.forEach((el) => {
    const hermanos = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
    el.style.setProperty("--stagger", `${Math.min(hermanos.indexOf(el), 5) * 0.08}s`);
    io.observe(el);
  });
}

/* =========================================================
   INICIO
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  initNav();
  renderFilters();
  initCart();       // carga el carrito antes de dibujar las tarjetas
  renderProducts();
  initFaq();
  renderReviews();
  initContactForm();
  initReveal();
});
