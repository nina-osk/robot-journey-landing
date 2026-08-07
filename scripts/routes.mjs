// Fuente única de rutas del sitio.
//
// La usan DOS scripts: scripts/prerender.mjs (genera el HTML estático) y
// scripts/generate-sitemap.mjs (genera public/sitemap.xml). Añade una ruta
// nueva aquí una sola vez y aparecerá en AMBOS. (El router de React en
// src/App.tsx sigue siendo independiente por ser JSX.)
//
// Las rutas antiguas con 301 en public/.htaccess NO van aquí
// (/servicios-odoo, /shopify, /agentes-ia, /kioscos-pago, /robots-moviles):
// un fichero prerenderizado o una entrada de sitemap competirían con la
// redirección y mandarían señales contradictorias a Google.

export const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },

  // Páginas de dinero (★) — pilares de cada gama
  { path: '/tpv-hosteleria', priority: 0.9, changefreq: 'weekly' },
  { path: '/tpv-inteligente', priority: 0.9, changefreq: 'weekly' },

  // Apoyo hostelería
  { path: '/metodo-5-estrellas', priority: 0.7, changefreq: 'monthly' },

  // Odoo (paraguas técnico)
  { path: '/odoo', priority: 0.9, changefreq: 'monthly' },
  { path: '/odoo/hosteleria', priority: 0.8, changefreq: 'monthly' },
  { path: '/odoo/ecommerce', priority: 0.8, changefreq: 'monthly' },
  { path: '/odoo/integracion-shopify', priority: 0.8, changefreq: 'monthly' },

  // Soluciones
  { path: '/kioscos-autoservicio', priority: 0.8, changefreq: 'monthly' },
  { path: '/cajon-cobro-automatico', priority: 0.7, changefreq: 'monthly' },
  { path: '/robotica', priority: 0.7, changefreq: 'monthly' },
  { path: '/apps-personalizadas', priority: 0.8, changefreq: 'monthly' },

  // Packs
  { path: '/pack-restaurante', priority: 0.7, changefreq: 'monthly' },
  { path: '/pack-hotel', priority: 0.7, changefreq: 'monthly' },
  { path: '/pack-ecommerce', priority: 0.7, changefreq: 'monthly' },

  // IA / formación
  { path: '/transformacion-digital', priority: 0.7, changefreq: 'monthly' },
  { path: '/agentes-ia/restaurantes', priority: 0.7, changefreq: 'monthly' },
  { path: '/mentoria-ia', priority: 0.6, changefreq: 'monthly' },

  // Marca / contacto
  { path: '/sobre-mi', priority: 0.6, changefreq: 'monthly' },
  { path: '/contacto', priority: 0.7, changefreq: 'monthly' },

  // Legales (baja prioridad, pero indexables y con canonical propio)
  { path: '/politica-compras', priority: 0.3, changefreq: 'yearly' },
  { path: '/politica-privacidad', priority: 0.3, changefreq: 'yearly' },
  { path: '/politica-cookies', priority: 0.3, changefreq: 'yearly' },
  { path: '/terminos-servicio', priority: 0.3, changefreq: 'yearly' },
  { path: '/politica-entrega', priority: 0.3, changefreq: 'yearly' },
  { path: '/politica-reembolso', priority: 0.3, changefreq: 'yearly' },
]

/** Solo las rutas, para el prerender. */
export const routePaths = routes.map((r) => r.path)
