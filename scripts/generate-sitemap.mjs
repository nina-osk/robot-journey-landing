// Genera public/sitemap.xml a partir de la fuente única scripts/routes.mjs.
// Se ejecuta ANTES de `vite build` para que el fichero acabe copiado en dist/.
// No editar public/sitemap.xml a mano: este script lo sobrescribe.

import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { routes } from './routes.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SITE = 'https://robotsconsultant.net'
const LASTMOD = new Date().toISOString().slice(0, 10)

const body = routes
  .map(
    (r) => `  <url>
    <loc>${SITE}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generado por scripts/generate-sitemap.mjs desde scripts/routes.mjs. No editar a mano. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`

const outPath = join(__dirname, '../public/sitemap.xml')
writeFileSync(outPath, xml, 'utf-8')
console.log(`🗺️  sitemap.xml generado con ${routes.length} URLs (lastmod ${LASTMOD})`)
