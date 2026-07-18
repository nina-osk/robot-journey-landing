/**
 * Extrae las poses de Roberta de la hoja de personaje y las deja en
 * /public/roberta/<pose>.png (+ .webp) con el fondo transparente.
 *
 * El fondo gris claro se elimina con un flood-fill desde los bordes del
 * recorte, así el cuerpo crema del robot (color parecido al fondo pero NO
 * conectado con el borde) queda intacto. Las poses que van sobre tarjeta
 * coral conservan su tarjeta: es parte del diseño.
 *
 * Uso: node scripts/extract-roberta.mjs [ruta-de-la-hoja]
 */
import sharp from 'sharp'
import { mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SHEET = process.argv[2] ?? 'C:/Users/ingos/Downloads/quiero_q_me_ayudes_con_202607181612.jpeg'
const OUT = join(__dirname, '../public/roberta')
mkdirSync(OUT, { recursive: true })

// Coordenadas sobre la hoja de 1376x768
const POSES = [
  { name: 'saludando',      box: { left: 254, top: 38,  width: 372, height: 697 } },
  { name: 'cara-feliz',     box: { left: 730, top: 45,  width: 240, height: 225 } },
  { name: 'cara-timida',    box: { left: 735, top: 295, width: 225, height: 195 } },
  { name: 'guino',          box: { left: 685, top: 500, width: 330, height: 260 } },
  { name: 'perfil-mochila', box: { left: 1030, top: 75, width: 320, height: 325 } },
  { name: 'mano-movil',     box: { left: 1050, top: 470, width: 252, height: 232 } },
]

function floodTransparent(data, width, height) {
  /*
   * El fondo de la hoja es un gris casi neutro con degradado y sombras
   * suaves, así que en vez de comparar contra un color fijo se considera
   * fondo cualquier píxel de croma baja (gris) y luminosidad media-alta.
   * El cuerpo crema del robot tiene más croma y no está conectado al borde.
   */
  const isBg = (i) => {
    const r = data[i], g = data[i + 1], b = data[i + 2]
    const chroma = Math.max(r, g, b) - Math.min(r, g, b)
    const lum = (r + g + b) / 3
    return chroma < 22 && lum > 150
  }

  const visited = new Uint8Array(width * height)
  const queue = []
  for (let x = 0; x < width; x++) queue.push([x, 0], [x, height - 1])
  for (let y = 0; y < height; y++) queue.push([0, y], [width - 1, y])

  while (queue.length) {
    const [x, y] = queue.pop()
    if (x < 0 || y < 0 || x >= width || y >= height) continue
    const p = y * width + x
    if (visited[p]) continue
    visited[p] = 1
    const i = p * 4
    if (!isBg(i)) continue
    data[i + 3] = 0
    queue.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1])
  }
}

for (const { name, box } of POSES) {
  const raw = await sharp(SHEET).extract(box).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  floodTransparent(raw.data, raw.info.width, raw.info.height)
  const img = sharp(raw.data, { raw: raw.info }).trim({ threshold: 1 })
  await img.clone().png().toFile(join(OUT, `${name}.png`))
  await img.clone().webp({ quality: 92 }).toFile(join(OUT, `${name}.webp`))
  console.log(`✅ ${name}`)
}
console.log('Poses extraídas en public/roberta/')
