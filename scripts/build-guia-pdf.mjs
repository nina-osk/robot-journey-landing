// Genera los PDF de las guías (lead magnets) a partir de su HTML fuente en
// guias-pdf/, renderizándolos con Chromium headless (puppeteer) a public/.
//
// Uso: node scripts/build-guia-pdf.mjs
// Añade nuevas guías al array GUIAS.

import puppeteer from 'puppeteer'
import { dirname, join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const GUIAS = [
  { src: 'guias-pdf/guia-6-fugas.html', out: 'public/guia-6-fugas.pdf' },
]

const run = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  for (const g of GUIAS) {
    const page = await browser.newPage()
    const url = pathToFileURL(join(ROOT, g.src)).href
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
    // Un respiro extra para asegurar que las webfonts están pintadas
    await new Promise((r) => setTimeout(r, 800))
    await page.pdf({
      path: join(ROOT, g.out),
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
    })
    await page.close()
    console.log(`📕 ${g.out}`)
  }

  await browser.close()
  console.log('✨ PDFs generados.')
}

run().catch((e) => { console.error(e); process.exit(1) })
