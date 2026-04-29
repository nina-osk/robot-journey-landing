import puppeteer from 'puppeteer'
import { spawn } from 'child_process'
import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '../dist')
const PORT = 4173

const routes = [
  '/',
  '/robots-moviles',
  '/kioscos-pago',
  '/pack-restaurante',
  '/pack-hotel',
  '/pack-ecommerce',
  '/servicios-odoo',
  '/transformacion-digital',
  '/agentes-ia',
  '/agentes-ia/restaurantes',
  '/shopify',
  '/mentoria-ia',
  '/sobre-mi',
  '/apps-personalizadas',
  '/contacto',
  '/politica-compras',
  '/politica-privacidad',
  '/politica-cookies',
  '/terminos-servicio',
  '/politica-entrega',
  '/politica-reembolso',
]

function startServer() {
  return new Promise((resolve, reject) => {
    const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
      cwd: join(__dirname, '..'),
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: true,
    })

    server.stdout.on('data', (data) => {
      const msg = data.toString()
      if (msg.includes(String(PORT))) {
        resolve(server)
      }
    })

    server.stderr.on('data', (data) => {
      const msg = data.toString()
      if (msg.includes(String(PORT))) resolve(server)
    })

    setTimeout(() => resolve(server), 4000)

    server.on('error', reject)
  })
}

async function prerender() {
  console.log('🚀 Starting vite preview server...')
  const server = await startServer()

  await new Promise(r => setTimeout(r, 1500))

  console.log('🌐 Launching browser...')
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  for (const route of routes) {
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })

    // Pre-set localStorage so GDPR dialog and other consent popups
    // don't appear open in the pre-rendered HTML
    await page.evaluateOnNewDocument(() => {
      localStorage.setItem('gdpr-consent', JSON.stringify({
        necessary: true, analytics: true, marketing: true, functional: true,
        timestamp: new Date().toISOString(),
      }))
      localStorage.setItem('cookie-consent', 'accepted')
    })

    try {
      try {
        await page.goto(`http://localhost:${PORT}${route}`, {
          waitUntil: 'networkidle2',
          timeout: 20000,
        })
      } catch (_) {
        // timeout or network never settled — still capture what rendered
      }

      // Wait extra for React to finish rendering
      await new Promise(r => setTimeout(r, 2000))

      const html = await page.content()

      const filePath =
        route === '/'
          ? join(DIST, 'index.html')
          : join(DIST, route.slice(1), 'index.html')

      const fileDir = dirname(filePath)
      if (!existsSync(fileDir)) mkdirSync(fileDir, { recursive: true })

      writeFileSync(filePath, html, 'utf-8')
      console.log(`✅ ${route}`)
    } catch (err) {
      console.error(`❌ ${route}: ${err.message}`)
    } finally {
      await page.close()
    }
  }

  await browser.close()

  server.kill()
  console.log('\n✨ Pre-rendering complete! Static HTML saved to dist/')
  process.exit(0)
}

prerender().catch((e) => {
  console.error(e)
  process.exit(1)
})
