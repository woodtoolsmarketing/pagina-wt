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
const EXCLUIR_DIRS = new Set(['_tools', '_admin', '.git', 'node_modules', '.claude']);
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
      if (EXCLUIR_ARCH.has(e.name) || e.name.startsWith('.')) continue;
      if (EXCLUIR_EXT.has(path.extname(e.name).toLowerCase())) continue;
      acc.push(path.join(dir, e.name));
    }
  }
  return acc;
}

function cargarLedger() { try { return JSON.parse(fs.readFileSync(LEDGER, 'utf8')); } catch { return {}; } }
function guardarLedger(l) { fs.writeFileSync(LEDGER, JSON.stringify(l, null, 0)); }
const rel = f => path.relative(ROOT, f).replace(/\\/g, '/');

(async () => {
  const ledger = cargarLedger();
  const archivos = walk(ROOT);
  const cambiados = archivos.filter(f => {
    const r = rel(f);
    const m = fs.statSync(f).mtimeMs;
    return ledger[r] === undefined || ledger[r] !== m;
  });

  console.log('============================================================');
  console.log(' SUBIR CAMBIOS AL SERVIDOR' + (DRY ? '  (PRUEBA: no sube nada)' : MARCAR ? '  (marcar como subido)' : ''));
  console.log('============================================================');
  console.log(' Archivos del sitio: ' + archivos.length + ' | a actualizar: ' + cambiados.length);

  if (cambiados.length === 0) { console.log('\n Todo está al día. No hay nada para subir.'); return; }

  // --marcar: registra todo como subido sin conectarse
  if (MARCAR) {
    const l = {}; for (const f of archivos) l[rel(f)] = fs.statSync(f).mtimeMs;
    guardarLedger(l);
    console.log('\n Listo: marqué los ' + archivos.length + ' archivos como ya subidos.');
    console.log(' La próxima vez, "Subir cambios" enviará solo lo que edites de ahora en más.');
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
  try { cfg = JSON.parse(fs.readFileSync(CONFIG, 'utf8')); }
  catch {
    console.log('\n FALTA CONFIGURACIÓN.');
    console.log(' Copiá "ftp-config.example.json" a "ftp-config.json" y completá tus datos de FTP');
    console.log(' (los mismos que usás en FileZilla: host, usuario, contraseña y carpeta remota).');
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
  const remoteBase = (cfg.remoteDir || '/').replace(/\\/g, '/').replace(/\/+$/, '') || '';
  let ok = 0, fail = 0;
  try {
    await client.access({
      host: cfg.host, port: cfg.port || 21,
      user: cfg.user, password: cfg.password,
      secure: cfg.secure === true,
      secureOptions: cfg.secure === true ? { rejectUnauthorized: false } : undefined
    });
    console.log('\n Conectado a ' + cfg.host + '. Subiendo ' + cambiados.length + ' archivo(s)...\n');
    for (const f of cambiados) {
      const r = rel(f);
      const remotePath = (remoteBase + '/' + r).replace(/\/+/g, '/');
      try {
        await client.ensureDir(path.posix.dirname(remotePath));
        await client.uploadFrom(f, path.posix.basename(remotePath));
        // ensureDir deja el cwd en la carpeta; volvemos a raíz para el próximo
        await client.cd('/');
        ledger[r] = fs.statSync(f).mtimeMs;
        ok++;
        console.log('   ✔ ' + r);
      } catch (e) {
        fail++;
        console.log('   [ERROR] ' + r + ' : ' + e.message);
      }
    }
  } catch (e) {
    console.log('\n No me pude conectar al FTP: ' + e.message);
    console.log(' Revisá host/usuario/contraseña/puerto y si tu hosting usa "FTP con TLS" (poné "secure": true).');
  } finally {
    client.close();
    guardarLedger(ledger);
  }
  console.log('\n============================================================');
  console.log(' Subidos: ' + ok + (fail ? ' | con error: ' + fail : ''));
  console.log('============================================================');
  if (fail) console.log(' Los que fallaron se reintentan la próxima vez (no se marcaron como subidos).');
})();
