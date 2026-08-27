/* =====================================================================
   SUBIR CAMBIOS AL SERVIDOR POR FTP  (solo lo que cambió, nunca borra)
   ---------------------------------------------------------------------
   Lee _tools/ftp-config.json con tus datos de FTP y sube por FTP los
   archivos del sitio que cambiaron desde la última vez.
   - Excluye carpetas internas: _tools, _admin, .git, node_modules, .claude
   - SOLO sube; jamás borra nada del servidor.
   - Recuerda qué subió en _tools/.subido.json (para subir solo lo nuevo).

   Uso:
     node subir.js          -> sube los archivos cambiados
     node subir.js --dry    -> muestra qué subiría, SIN conectarse ni subir
     node subir.js --marcar -> marca todo como "ya subido" sin subir
                               (útil si ya hiciste una subida completa con FileZilla)
   ===================================================================== */
const fs = require('fs');
const path = require('path');

const TOOLS = __dirname;
const ROOT = path.join(TOOLS, '..');                 // raíz del proyecto
const LEDGER = path.join(TOOLS, '.subido.json');
const CONFIG = path.join(TOOLS, 'ftp-config.json');
// prueba/, Prueba2/ y tienda/ son entornos de prueba: se suben con su propio
// script (armar-prueba2.js), no con este. Si no se excluyen, cada subida del
// sitio arrastra 200 archivos de mas. Excluirlos es seguro: esta herramienta
// nunca borra del servidor, solo limpia su registro local.
const EXCLUIR_DIRS = new Set(['_tools', '_admin', '.git', 'node_modules', '.claude', 'prueba', 'Prueba2', 'tienda']);
const EXCLUIR_ARCH = new Set(['.DS_Store', 'Thumbs.db', 'desktop.ini']);
// Extensiones de desarrollo que NO son parte del sitio público (no se suben).
const EXCLUIR_EXT = new Set(['.sh', '.bat', '.md', '.markdown', '.log', '.map', '.zip']);

const args = process.argv.slice(2);
const DRY = args.includes('--dry');
const MARCAR = args.includes('--marcar');

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (EXCLUIR_DIRS.has(e.name)) continue;
      walk(path.join(dir, e.name), acc);
    } else if (e.isFile()) {
      if (EXCLUIR_ARCH.has(e.name)) continue;
      // Saltear archivos ocultos (dotfiles) EXCEPTO .htaccess, que es parte
      // del sitio (redirects/SEO) y SÍ tiene que subir al servidor.
      if (e.name.startsWith('.') && e.name !== '.htaccess') continue;
      if (EXCLUIR_EXT.has(path.extname(e.name).toLowerCase())) continue;
      acc.push(path.join(dir, e.name));
    }
  }
  return acc;
}

// El Bloc de notas de Windows puede guardar el archivo con una marca invisible al
// principio (BOM). Sin sacarla, JSON.parse falla y parecía que faltaba la configuración.
function leerJson(archivo) { return JSON.parse(fs.readFileSync(archivo, 'utf8').replace(/^﻿/, '')); }

function cargarLedger() {
  if (!fs.existsSync(LEDGER)) return {};                 // primera vez: sube todo (normal)
  try { return leerJson(LEDGER); }
  catch {
    console.log(' AVISO: el registro de subidas estaba dañado. Voy a subir todo el sitio de nuevo');
    console.log(' (no se pierde nada, solo tarda mas esta vez).');
    return {};
  }
}
// Escritura atomica: primero a un .tmp y despues renombrar. Si se corta la luz a mitad,
// el registro viejo queda intacto en vez de quedar truncado e ilegible.
function guardarLedger(l) {
  const tmp = LEDGER + '.tmp';
  try { fs.writeFileSync(tmp, JSON.stringify(l)); fs.renameSync(tmp, LEDGER); }
  catch { fs.writeFileSync(LEDGER, JSON.stringify(l)); }
}
const rel = f => path.relative(ROOT, f).replace(/\\/g, '/');

(async () => {
  const ledger = cargarLedger();
  const archivos = walk(ROOT);
  // Guardamos el mtime del ESCANEO. Si el archivo cambia mientras se transfiere, el
  // registro queda "atrasado" y la proxima corrida lo vuelve a subir (que es lo correcto).
  const mtimes = new Map();
  const cambiados = archivos.filter(f => {
    const r = rel(f);
    const m = fs.statSync(f).mtimeMs;
    mtimes.set(r, m);
    return ledger[r] !== m;
  });

  // Archivos que borraste de tu PC pero siguen anotados como subidos: los sacamos del
  // registro para que no crezca para siempre. (Del servidor no se borra nada nunca.)
  // En modo --dry no se toca nada, ni siquiera esto.
  const vivos = new Set(archivos.map(rel));
  const muertos = Object.keys(ledger).filter(k => !vivos.has(k));
  if (muertos.length && !DRY) {
    muertos.forEach(k => delete ledger[k]);
    guardarLedger(ledger);
  }

  console.log('============================================================');
  console.log(' SUBIR CAMBIOS AL SERVIDOR' + (DRY ? '  (PRUEBA: no sube nada)' : MARCAR ? '  (marcar como subido)' : ''));
  console.log('============================================================');
  console.log(' Archivos del sitio: ' + archivos.length + ' | a actualizar: ' + cambiados.length);
  if (muertos.length) {
    console.log(' Nota: ' + muertos.length + ' archivo(s) que borraste de tu PC siguen en el servidor');
    console.log('       (esta herramienta nunca borra). Si los querés sacar, usá FileZilla.');
  }

  if (cambiados.length === 0) { console.log('\n Todo está al día. No hay nada para subir.'); return; }

  // --marcar: registra todo como subido sin conectarse. Con --dry gana --dry (no toca nada).
  if (MARCAR && !DRY) {
    // Copia de seguridad por si fue un doble clic equivocado (la primera vez no hay nada que copiar)
    let hayCopia = false;
    try { fs.copyFileSync(LEDGER, LEDGER + '.bak'); hayCopia = true; } catch {}
    const l = {}; for (const f of archivos) l[rel(f)] = mtimes.get(rel(f)) ?? fs.statSync(f).mtimeMs;
    guardarLedger(l);
    console.log('\n Listo: marqué los ' + archivos.length + ' archivos como ya subidos.');
    console.log(' La próxima vez, "Subir cambios" enviará solo lo que edites de ahora en más.');
    if (hayCopia) {
      console.log('\n ¿Te equivocaste? Borrá  _tools\\.subido.json  y renombrá  .subido.json.bak  a  .subido.json');
    }
    return;
  }

  // --dry: solo listar
  if (DRY) {
    console.log('\n Subiría estos archivos:');
    cambiados.slice(0, 60).forEach(f => console.log('   - ' + rel(f)));
    if (cambiados.length > 60) console.log('   ... (+' + (cambiados.length - 60) + ' más)');
    console.log('\n (Modo prueba: no me conecté ni subí nada.)');
    return;
  }

  // --- Subida real ---
  let cfg;
  try { cfg = leerJson(CONFIG); }
  catch (e) {
    if (fs.existsSync(CONFIG)) {
      console.log('\n No pude leer _tools/ftp-config.json: ' + e.message);
      console.log(' Revisá que no le falte una coma o una comilla. Si lo editaste con el Bloc de');
      console.log(' notas, guardalo como "UTF-8" (no "UTF-8 con BOM") o usá el Bloc de notas normal.');
    } else {
      console.log('\n FALTA CONFIGURACIÓN.');
      console.log(' Copiá "ftp-config.example.json" a "ftp-config.json" y completá tus datos de FTP');
      console.log(' (los mismos que usás en FileZilla: host, usuario, contraseña y carpeta remota).');
    }
    process.exit(1);
  }
  if (!cfg.host || cfg.host === 'ftp.tudominio.com' || !cfg.user) {
    console.log('\n Completá tus datos reales en _tools/ftp-config.json (host, user, password, remoteDir).');
    process.exit(1);
  }

  let ftp;
  try { ftp = require('basic-ftp'); }
  catch {
    console.log('\n Falta la herramienta de FTP. Ejecutá una vez:  npm install basic-ftp');
    process.exit(1);
  }

  const client = new ftp.Client(30000);
  client.ftp.verbose = false;
  // La ruta remota SIEMPRE tiene que ser absoluta: si no arranca con "/", basic-ftp no
  // vuelve a la raíz entre carpeta y carpeta y el sitio se va anidando solo
  // (/public_html/public_html/imagenes/...). Con "/" el resultado es idéntico al de antes.
  let remoteBase = (cfg.remoteDir || '/').replace(/\\/g, '/').replace(/\/+$/, '');
  if (!remoteBase.startsWith('/')) remoteBase = '/' + remoteBase;
  let ok = 0, fail = 0;
  try {
    await client.access({
      host: cfg.host, port: cfg.port || 21,
      user: cfg.user, password: cfg.password,
      secure: cfg.secure === true,
      secureOptions: cfg.secure === true ? { rejectUnauthorized: false } : undefined
    });
    console.log('\n Conectado a ' + cfg.host + '. Subiendo ' + cambiados.length + ' archivo(s)...\n');
    cambiados.sort((a, b) => rel(a).localeCompare(rel(b)));   // agrupa por carpeta (mismo prefijo de ruta)
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    let lastDir = null;
    for (const f of cambiados) {
      const r = rel(f);
      const remotePath = (remoteBase + '/' + r).replace(/\/+/g, '/');
      const remoteDir = path.posix.dirname(remotePath);
      let subido = false, ultimoErr;
      // Reintenta hasta 3 veces: cura hipos transitorios del FTP (timeouts de conexión de datos en modo pasivo)
      for (let intento = 1; intento <= 3 && !subido; intento++) {
        try {
          if (remoteDir !== lastDir) { await client.ensureDir(remoteDir); lastDir = remoteDir; }
          await client.uploadFrom(f, path.posix.basename(remotePath));
          subido = true;
        } catch (e) {
          ultimoErr = e; lastDir = null;            // forzar re-crear/posicionar carpeta en el reintento
          if (client.closed) break;                 // conexión caída: reintentar es al pedo
          if (intento < 3) await sleep(1500);
        }
      }
      if (subido) {
        ledger[r] = mtimes.get(r);
        ok++;
        if (ok === 1 || ok % 25 === 0) console.log('   ' + ok + '/' + cambiados.length + '  ' + r);
        if (ok % 50 === 0) guardarLedger(ledger);   // progreso por si se corta
      } else {
        fail++;
        console.log('   [ERROR] ' + r + ' : ' + (ultimoErr && ultimoErr.message));
      }
      // Si se corta la conexión, cortamos acá en vez de escupir un [ERROR] por cada
      // archivo restante. Lo ya subido queda anotado y la próxima corrida sigue de ahí.
      if (client.closed) {
        console.log('\n Se cortó la conexión con el servidor.');
        console.log(' Volvé a hacer doble clic en "Subir cambios" cuando tengas internet:');
        console.log(' sigue desde donde quedó, no vuelve a subir lo que ya subió.');
        break;
      }
    }
  } catch (e) {
    console.log('\n No me pude conectar al FTP: ' + e.message);
    console.log(' Revisá host/usuario/contraseña/puerto y si tu hosting usa "FTP con TLS" (poné "secure": true).');
    process.exitCode = 1;   // que el .bat pueda avisar que NO salió bien
  } finally {
    client.close();
    guardarLedger(ledger);
  }
  console.log('\n============================================================');
  console.log(' Subidos: ' + ok + (fail ? ' | con error: ' + fail : ''));
  console.log('============================================================');
  if (fail) {
    process.exitCode = 1;
    console.log(' Los que fallaron se reintentan la próxima vez (no se marcaron como subidos).');
  }
})();
