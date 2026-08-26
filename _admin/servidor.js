/* Mini-servidor local (sin dependencias) solo para abrir el panel en el navegador.
   La API de edición de archivos del navegador necesita "localhost" para funcionar;
   por eso no alcanza con abrir el .html directo. Este server sirve SOLO la carpeta
   _admin y abre el panel en Edge/Chrome. No expone nada a internet. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec, spawn } = require('child_process');

const DIR = __dirname;
const TOOLS = path.join(DIR, '..', '_tools');   // donde viven subir.js / generar-manifest.js
const PORT = 8765;
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon'
};

// Solo aceptamos las acciones si vienen del propio panel. Sin esto, cualquier página
// abierta en el mismo navegador podría disparar una subida FTP real a tus espaldas.
// (POST solo no alcanza: un <form> de otro sitio también puede hacer POST.)
function vieneDelPanel(req) {
  if (req.method !== 'POST') return false;
  const sfs = req.headers['sec-fetch-site'];
  if (sfs !== undefined && sfs !== 'same-origin' && sfs !== 'none') return false;
  const origin = req.headers.origin;
  if (origin !== undefined &&
      origin !== 'http://127.0.0.1:' + PORT && origin !== 'http://localhost:' + PORT) return false;
  return true;
}

// Una tarea por vez: dos subidas FTP en paralelo escribirían el mismo registro
// (.subido.json) y la última pisaría a la primera.
let tareaEnCurso = null;

// Corre un script de _tools y va enviando su salida en vivo al navegador.
function correrScript(args, res) {
  if (tareaEnCurso) {
    res.writeHead(409, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Ya hay una tarea en curso (' + tareaEnCurso + '). Esperá a que termine.\n');
    return;
  }
  tareaEnCurso = args[0];
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' });

  let terminado = false;
  const fin = msg => {
    if (terminado) return;                      // 'error' y 'close' pueden llegar los dos
    terminado = true;
    tareaEnCurso = null;
    if (!res.writableEnded) res.end(msg);
  };
  // Si el usuario cierra la pestaña, el script SIGUE hasta terminar (cortar una subida
  // a la mitad dejaría archivos incompletos en el servidor): mandamos la salida a esta
  // ventana negra, que el LEEME pide dejar abierta.
  const escribir = d => { if (!res.writableEnded) res.write(d); else process.stdout.write(d); };

  // process.execPath = la ruta al node.exe que ya está corriendo: no depende del PATH.
  const proc = spawn(process.execPath, args, { cwd: TOOLS });
  proc.stdout.on('data', escribir);
  proc.stderr.on('data', escribir);
  proc.on('close', code => fin('\n[FIN] (código ' + code + ')\n'));
  proc.on('error', e => fin('\n[ERROR] No pude ejecutar ' + args[0] + ': ' + e.message +
    '\nRevisá que exista la carpeta _tools al lado de _admin.\n'));
}

const server = http.createServer((req, res) => {
  const ruta = (req.url || '/').split('?')[0];

  // --- Acciones (las dispara el botón del panel) ---
  if (ruta.startsWith('/api/')) {
    if (!vieneDelPanel(req)) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('No permitido: esta acción solo se puede pedir desde el panel.\n');
      return;
    }
    if (ruta === '/api/subir')     return correrScript(['subir.js'], res);
    if (ruta === '/api/subir-dry') return correrScript(['subir.js', '--dry'], res);
    if (ruta === '/api/manifest')  return correrScript(['generar-manifest.js'], res);
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Acción desconocida\n');
    return;
  }

  let p = decodeURIComponent(ruta);
  if (p === '/') p = '/panel.html';
  // path.resolve + separador: así "/../_adminOtro/x" no pasa por empezar igual que DIR.
  const fp = path.resolve(DIR, '.' + p);
  if (!(fp === DIR || fp.startsWith(DIR + path.sep))) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('No permitido');
    return;
  }
  fs.readFile(fp, (e, data) => {
    if (e) {
      if (e.code === 'ENOENT' || e.code === 'EISDIR') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('No encontrado');
      } else {
        console.log('Error leyendo ' + fp + ': ' + e.message);
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Error al leer el archivo (' + e.code + ')');
      }
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(fp).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
});

const URL = 'http://127.0.0.1:' + PORT + '/panel.html';
server.listen(PORT, '127.0.0.1', () => {   // solo accesible desde tu PC
  console.log('==============================================');
  console.log(' Panel abierto en: ' + URL);
  console.log(' (Dejá esta ventana abierta. Cerrala para apagar el panel.)');
  console.log('==============================================');
  // Abrir en Edge; si no está, Chrome; si no, el navegador por defecto.
  if (!process.argv.includes('--no-open')) {
    exec('start msedge "' + URL + '"', e1 => {
      if (e1) exec('start chrome "' + URL + '"', e2 => {
        if (e2) exec('start "" "' + URL + '"');
      });
    });
  }
});
server.on('error', err => {
  if (err.code === 'EADDRINUSE') {
    console.log('El puerto ' + PORT + ' está ocupado (lo más probable: el panel ya está abierto en otra ventana).');
    console.log('Abriendo ' + URL + ' — si eso no es tu panel, cerrá la otra ventana negra y volvé a intentar.');
    exec('start "" "' + URL + '"');
  } else {
    console.log('Error: ' + err.message);
  }
});
