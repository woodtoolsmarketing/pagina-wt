/* Mueve las 8 fotos nuevas de JFMP3416G a su carpeta propia y las recomprime
   (bajar peso) manteniendo 1080px. Idempotente-ish: si la carpeta origen ya no
   existe, no hace nada. */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'imagenes', 'herramientas', 'Fresas', 'FP2226', 'JFMP3416G');
const DEST = path.join(__dirname, '..', 'imagenes', 'herramientas', 'Fresas', 'JFMP3416G');
const MAX = 1280, Q = 82;

(async () => {
  if (!fs.existsSync(SRC)) { console.log('Origen ya no existe (¿ya movido?):', SRC); return; }
  if (!fs.existsSync(DEST)) fs.mkdirSync(DEST, { recursive: true });

  const files = fs.readdirSync(SRC).filter(f => /\.jpe?g$/i.test(f)).sort();
  let inTot = 0, outTot = 0;
  for (const f of files) {
    const sp = path.join(SRC, f);
    const inBuf = fs.readFileSync(sp);
    inTot += inBuf.length;
    let out = inBuf;
    try {
      const rec = await sharp(inBuf, { failOn: 'none' })
        .rotate()
        .resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: Q, mozjpeg: true })
        .toBuffer();
      if (rec.length < inBuf.length) out = rec;
    } catch (e) { console.log('  (sin recomprimir) ' + f + ' - ' + e.message); }
    fs.writeFileSync(path.join(DEST, f), out);
    outTot += out.length;
    fs.unlinkSync(sp);
    console.log('  ' + f + ': ' + Math.round(inBuf.length / 1024) + 'KB -> ' + Math.round(out.length / 1024) + 'KB');
  }
  // borrar carpeta origen vacía (y FP2226 si quedó vacía)
  try { fs.rmdirSync(SRC); } catch (e) {}
  const fp = path.dirname(SRC);
  try { if (fs.readdirSync(fp).length === 0) fs.rmdirSync(fp); } catch (e) {}

  const kb = n => Math.round(n / 1024) + 'KB';
  console.log('\nMovidas ' + files.length + ' fotos a Fresas/JFMP3416G/');
  console.log('Peso total: ' + kb(inTot) + ' -> ' + kb(outTot) + '  (ahorro ' + Math.round((1 - outTot / inTot) * 100) + '%)');
})();
