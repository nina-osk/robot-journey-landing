import puppeteer from 'puppeteer'
import { spawn, spawnSync } from 'child_process'
import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { routePaths as routes } from './routes.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '../dist')
const PORT = 4173

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

  // La última pasada es una URL inexistente: React pinta NotFound y se guarda
  // como dist/404.html, que nginx sirve con estado 404 (error_page).
  const NOT_FOUND = '/__404__'

  let failed = 0

  for (const route of [...routes, NOT_FOUND]) {
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
        // La 404 no se pide al servidor: vite preview falla en rutas que no
        // existen en dist/. Se carga la home y se navega dentro de React Router.
        await page.goto(`http://localhost:${PORT}${route === NOT_FOUND ? '/' : route}`, {
          waitUntil: 'networkidle2',
          timeout: 20000,
        })
        if (route === NOT_FOUND) {
          await page.evaluate((path) => {
            history.pushState({}, '', path)
            dispatchEvent(new PopStateEvent('popstate'))
          }, NOT_FOUND)
        }
      } catch (_) {
        // timeout or network never settled — still capture what rendered
      }

      // Wait extra for React to finish rendering
      await new Promise(r => setTimeout(r, 2000))

      const html = await page.content()

      // Si vite preview no responde, Chrome devuelve su propia página de error
      // y antes se guardaba igual, machacando el HTML bueno. Mejor no escribir.
      if (!html.includes('<div id="root">') || html.includes('ERR_CONNECTION')) {
        throw new Error('la página no cargó (¿vite preview caído?)')
      }

      const filePath =
        route === NOT_FOUND
          ? join(DIST, '404.html')
          : route === '/'
          ? join(DIST, 'index.html')
          : join(DIST, route.slice(1), 'index.html')

      const fileDir = dirname(filePath)
      if (!existsSync(fileDir)) mkdirSync(fileDir, { recursive: true })

      writeFileSync(filePath, html, 'utf-8')
      console.log(`✅ ${route}`)
    } catch (err) {
      console.error(`❌ ${route}: ${err.message}`)
      failed++
    } finally {
      await page.close()
    }
  }

  await browser.close()

  // Con shell:true, en Windows server.kill() solo mata la shell y vite preview
  // queda huérfano en el puerto 4173. Hay que matar el árbol entero.
  if (process.platform === 'win32') {
    spawnSync('taskkill', ['/pid', String(server.pid), '/T', '/F'], { stdio: 'ignore' })
  } else {
    server.kill()
  }
  if (failed) {
    console.error(`\n💥 ${failed} ruta(s) fallaron. NO despliegues este dist/.`)
    process.exit(1)
  }
  console.log('\n✨ Pre-rendering complete! Static HTML saved to dist/')
  process.exit(0)
}

prerender().catch((e) => {
  console.error(e)
  process.exit(1)
})
