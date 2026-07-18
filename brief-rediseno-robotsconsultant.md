# Brief de rediseño — robotsconsultant.net
*Basado en la hoja de personaje de Roberta · Julio 2026*

---

## 1. Identidad visual

### Paleta

| Token | Hex | Uso |
|---|---|---|
| `--teal` | #4E9D96 | Color principal de marca: header, iconos, enlaces, detalles |
| `--teal-dark` | #2F6E74 | Hover, fondos de sección suaves, texto sobre claro |
| `--coral` | #F0836C | CTA principal, highlights, cifras destacadas |
| `--greige` | #CDC6BA | Bordes, fondos de tarjeta alternos, separadores |
| `--hueso` | #F2F1EE | Fondo general de la página (NO blanco puro) |
| `--pantalla` | #17171B | Secciones "tech" oscuras, texto principal |
| `--cian-glow` | #63E5EF | SOLO dentro de secciones oscuras: acentos, datos en vivo, líneas |

**Regla de oro:** el cian nunca aparece sobre fondo claro (es el "interior" de Roberta, su cara-pantalla). Solo brilla en las secciones oscuras.

### Tipografía

- **Display (H1, H2):** Bricolage Grotesque — peso 700-800.
- **Cuerpo:** Figtree — 18px mínimo, interlineado 1.6.
- **Datos/etiquetas:** IBM Plex Mono en mayúsculas pequeñas para eyebrows, métricas y precios.

### Formas y componentes

- **Border-radius generoso:** 20-24px en tarjetas, botones tipo píldora (radius full).
- **Botón CTA:** fondo `--coral`, texto `--pantalla`, píldora, borde sutil 2px más oscuro. Hover: se eleva 2px con sombra suave. Texto siempre verbo + resultado.
- **Botón secundario:** borde teal 2px, texto teal, fondo transparente.
- **Tarjetas:** fondo blanco sobre `--hueso`, borde 1px `--greige`, sombra muy suave.
- **Secciones oscuras "cara de Roberta":** fondo `--pantalla` con acentos `--cian-glow`. SOLO para momentos de producto/tecnología: demo del TPV, pantalla de cocina, dashboards, métricas.

### Uso del personaje (mapa de poses)

| Pose | Dónde usarla |
|---|---|
| Cuerpo entero saludando | Hero de la home y de /odoo/hosteleria |
| Cara feliz | Capítulos positivos de la historia, favicon, avatar del chat |
| Cara tímida/contenta | Capítulo 1 (el caos), FAQs |
| Guiño + saludo | CTA final de cada página |
| Perfil con mochila | /sobre-mi y /apps-personalizadas |
| Mano con móvil | Bloques de carta digital, WhatsApp, compras desde el móvil |

Exportar cada pose como PNG con fondo transparente y también como WebP. Máx. 300px de ancho en uso normal; en hero hasta 480px. Ubicación: `/public/roberta/`.

---

## 2. Layout general

### Header
- Fondo `--hueso` con blur al hacer scroll, logo a la izquierda.
- Menú: **Inicio · Odoo ▾ (Implantación / Migración) · Hostelería · Ecommerce · Kioscos · Apps con IA · Robótica · Cursos**
- CTA en el header: botón coral "Diagnóstico gratis" → WhatsApp.
- Un solo teléfono en toda la web: **654 94 27 20**.
- Todos los enlaces con rutas absolutas.

### Footer
- Fondo `--pantalla`, textos greige, enlaces cian.
- Columnas: Servicios · Sectores · Recursos · Legal.
- Eliminar anclas muertas (#courses, #features).

### Móvil
- Botón WhatsApp sticky inferior en páginas de servicio.
- Menú hamburguesa con las 8 entradas, CTA coral al final.
- Hero: Roberta DEBAJO del H1.

---

## 3. Rediseño página a página

### Home `/`
- Hero: eyebrow mono "PARTNER OFICIAL DE ODOO", H1 "Automatización e IA para pymes de hostelería y ecommerce", Roberta saludando, CTA coral único.
- Bloque "¿Tu empresa te tiene atrapado?" rediseñado en tarjetas redondeadas.
- Sección oscura firma: ecosistema (kiosco → TPV → cocina → métricas) con líneas cian.
- Dos puertas: Hostelería (Carmen) y Ecommerce (Javier).
- Franja de YouTube a 1 fila. CTA final con Roberta guiñando.
- **Quitar:** SITECO, packs de kioscos, módulos del agente WhatsApp, ROS2.

### /odoo/hosteleria
Copy completo de `landing-odoo-hosteleria.md`: capítulos alternados hueso/blanco, TPV+cocina en sección oscura, poses por capítulo, FAQ acordeón con schema FAQPage.

### /odoo (pilar)
Contenido Odoo actual de /servicios-odoo limpio de kioscos, tokens nuevos, proceso de 4 pasos en tarjetas numeradas.

### /kioscos-autoservicio y /cajon-cobro-automatico
Contenido existente + tokens. Pack Profesional destacado con borde coral y etiqueta "El más contratado".

### /odoo/ecommerce · /apps-personalizadas · /robotica
- Ecommerce: nueva, con Agente IA WhatsApp como upsell.
- Apps: contenido actual + tokens + Roberta de perfil.
- Robótica: robots + ROS2 movidos desde la home, parte técnica en sección oscura.

---

## 4. Fixes técnicos (no negociables)

1. Enlaces del menú y footer con rutas absolutas.
2. Open Graph único por página (og:title, og:url, og:image).
3. Calendly: `embed_domain` = dominio real, no localhost.
4. Teléfono único en header, footer y schema.
5. 301: `/servicios-odoo` → `/odoo` · `/shopify` → `/odoo/integracion-shopify` · `/agentes-ia` → `/odoo/ecommerce`.
6. Schema: Organization (global), FAQPage, Service, Product.
7. Titles y metas según el documento SEO.
8. Imágenes WebP + lazy load; Roberta precargada solo en el hero.
