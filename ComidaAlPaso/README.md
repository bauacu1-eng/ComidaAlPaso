# Sitio web de parrilladas

Página web de una sola página para un emprendimiento de parrilladas argentinas: portada, catálogo con precios en ARS, carrito de pedidos que se envía por WhatsApp, sección «Nosotros», preguntas frecuentes, opiniones (preparada para el futuro), contacto y pie de página.

## Tecnologías

- **HTML5 semántico**, **CSS3** y **JavaScript puro**. No usa frameworks ni pasos de compilación.
- Tipografías de Google Fonts (Fraunces y Manrope).
- El pedido se guarda en el navegador con `localStorage`, así se conserva mientras se navega.
- No hay pagos en línea: pedidos y consultas se envían por WhatsApp (`wa.me`).

## Estructura

```
index.html     → estructura y contenido de la página
style.css      → diseño (colores y tipografías en :root, al principio)
script.js      → CONFIGURACIÓN DEL NEGOCIO (al principio) + funcionalidades
images/        → images-3.jpg, images-4.jpg, images-5.jpg, images-6.jpg
netlify.toml   → configuración para publicar en Netlify
```

## Qué editar (todo está al principio de `script.js`, en el objeto `CONFIG`)

| Campo | Qué es |
|---|---|
| `nombre` | Nombre del emprendimiento (hoy: «NOMBRE DE TU PARRILLADA») |
| `eslogan` | Frase de la marca |
| `logo` | Ruta a tu logo, p. ej. `images/logo.png` (vacío = ícono de fuego) |
| `whatsapp` | Número con código de país, solo dígitos, p. ej. `5491123456789` |
| `telefono` | Teléfono tal como se muestra |
| `instagram` | Usuario sin @ |
| `zona` | Dirección o zona de entrega |
| `horarios` | Días y horarios de atención |
| `costoEnvio` | Costo de envío en pesos, o `null` para «A coordinar» |
| `preciosDeEjemplo` | Ponelo en `false` cuando cargues tus precios reales |
| `fondos` | Fotos de las secciones (Images 3, 4, 5 y 6) |
| `historia` | La historia real del negocio |
| `productos` | Nombre, descripción, qué incluye, personas, precio y foto de cada parrillada |
| `preguntas` | Preguntas frecuentes (completá las marcadas con `[EDITAR]`) |
| `resenas` | Opiniones **reales** de clientes (vacío = sección «próximamente») |

Para cambiar una foto, guardá la nueva en `images/` y escribí su nombre en `CONFIG.fondos` o en la `imagen` del producto. Los colores se cambian en las variables de `:root` en `style.css`.

## Abrirla en tu computadora

1. Guardá la carpeta completa (con `index.html`, `style.css`, `script.js` e `images/` juntos).
2. Hacé doble clic en `index.html` para abrirla en el navegador.
3. Opcional: para probarla como en Internet, abrí la carpeta con la extensión «Live Server» de VS Code, o ejecutá `npx serve .` en esa carpeta.

## Publicarla gratis

**Netlify (arrastrar y soltar):** entrá a <https://app.netlify.com/drop> y arrastrá la carpeta del proyecto. En segundos te da un enlace público. El archivo `netlify.toml` ya está listo.

**Netlify con Git:** subí el proyecto a un repositorio y conectalo desde Netlify → «Add new project». No hace falta comando de compilación; la carpeta de publicación es la raíz (`.`).

**GitHub Pages:** subí los archivos a un repositorio, entrá a *Settings → Pages*, elegí la rama `main` y la carpeta `/ (root)`.

## Próximos pasos posibles

- Cargar los datos reales del negocio, el logo y los precios en `CONFIG`.
- Sumar fotos propias de cada parrillada.
- Si en el futuro querés recibir los mensajes del formulario por correo, se puede activar Netlify Forms sin cambiar el diseño.
