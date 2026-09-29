/* =====================================================================
   TARJETAS DEL SITIO -> TIENDA NUBE SEGUN STOCK  (genera stock-tienda.json)
   ---------------------------------------------------------------------
   Lee el stock de la tienda por la API (SOLO lectura) y arma el archivo
   del sitio stock-tienda.json con las fichas que HOY se pueden comprar:

     { "verificado": "2026-09-25T20:08:00.000Z",
       "enlaces": { "SC/LG3D 0400.html": "https://woodtools.ar/productos/sierras-lg3d/?variant=123", ... } }

   En los listados del sitio, ruta-productos/JS/stock-tienda.js lee ese
   archivo: la tarjeta de una ficha que figura ahi lleva al producto de la
   tienda; todas las demas siguen yendo a la ficha del sitio. La tarjeta no
   muestra ni precio ni stock.

   Cuando una ficha va a la tienda:
     - su producto esta PUBLICADO (si no, la tienda da 404), y
     - si la ficha es de una medida (mapa con "variante"): esa variante
       esta visible y tiene stock; si es de familia (variante null): alguna.
   "Tiene stock" = mismo criterio que auto-ocultar-stock.js (sin control
   de stock, stock vacio o stock > 0).

   Que ficha corresponde a que producto: mapa-tarjetas.json (misma carpeta).

   Sube stock-tienda.json por FTP en CADA corrida (es chico), con la fecha
   de "verificado": el sitio ignora un archivo de mas de 7 dias, por si la
   tarea dejo de correr. Si algo falla (API o FTP) sale con codigo 1, y
   auto-ocultar-stock.cmd NO aplica la regla de ocultar en esa corrida:
   asi ninguna tarjeta queda llevando a un producto recien ocultado (404).

   ORDEN en auto-ocultar-stock.cmd: primero este script, despues la regla.
     - Un producto que se agoto sale de los enlaces ANTES de ocultarse.
     - Uno que recien recibio stock se publica en esa corrida y se enlaza
       en la siguiente (hasta ~2 h): margen para la cache de la tienda.

   USO:
     node stock-sitio.js                 genera y sube
     node stock-sitio.js --dry           solo muestra que haria (no escribe ni sube)
     node stock-sitio.js --sin-subir     escribe el archivo pero no lo sube
     node stock-sitio.js --probar "SC/LG3D 0400.html,CH/CBP.html" --salida X.json
                                          prueba: hace de cuenta que esas fichas
                                          tienen stock y escribe en X.json (no sube)
   ===================================================================== */
'use strict';
const fs = require('fs');
const path = require('path');

const AQUI = __dirname;
const RAIZ = path.join(AQUI, '..', '..');
const CFG_API = path.join(AQUI, 'api-config.json');
const CFG_FTP = path.join(AQUI, '..', 'ftp-config.json');
const MAPA = path.join(AQUI, 'mapa-tarjetas.json');
const LISTADOS = path.join(RAIZ, 'ruta-productos', 'HTML');
const ARCHIVO_SITIO = path.join(RAIZ, 'stock-tienda.json');
const TIENDA = 'https://woodtools.ar';

const args = process.argv.slice(2);
const DRY = args.includes('--dry');
const SIN_SUBIR = args.includes('--sin-subir');
const iProbar = args.indexOf('--probar');
const PROBAR = iProbar >= 0 ? new Set((args[iProbar + 1] || '').split(',').map(s => s.trim()).filter(Boolean)) : null;
const iSalida = args.indexOf('--salida');
const SALIDA = iSalida >= 0 ? path.resolve(args[iSalida + 1]) : null;

function leerJson(f) { return JSON.parse(fs.readFileSync(f, 'utf8').replace(/^﻿/, '')); }
const dormir = ms => new Promise(r => setTimeout(r, ms));

// Mismo criterio que auto-ocultar-stock.js
function varianteConStock(v) {
  if (v.stock_management === false) return true;
  if (v.stock === null || v.stock === undefined) return true;
  return Number(v.stock) > 0;
}
// Una variante oculta en la tienda (visible:false) no se ofrece aunque tenga stock.
function varianteDisponible(v) { return v.visible !== false && varianteConStock(v); }

function handleDe(p) {
  const h = p.handle;
  return typeof h === 'string' ? h : (h && (h.es || Object.values(h)[0])) || '';
}

function urlDe(handle, variante) {
  return TIENDA + '/productos/' + handle + '/' + (variante ? '?variant=' + variante : '');
}

// productos: respuesta de la API; fichas: mapa-tarjetas.json -> fichas; probar: Set o null
function calcularEnlaces(productos, fichas, probar) {
  const porHandle = new Map(productos.map(p => [handleDe(p), p]));
  const enlaces = {};
  const avisos = [];
  for (const ficha of Object.keys(fichas).sort()) {
    const { handle, variante } = fichas[ficha];
    const url = urlDe(handle, variante);
    if (probar) { if (probar.has(ficha)) enlaces[ficha] = url; continue; }
    const p = porHandle.get(handle);
    if (!p) { avisos.push('no existe en la tienda: ' + handle + ' (' + ficha + ')'); continue; }
    if (p.published !== true) continue;                      // oculto: la tienda da 404
    const vs = p.variants || [];
    if (variante) {
      const v = vs.find(x => Number(x.id) === Number(variante));
      if (!v) { avisos.push('no existe la variante ' + variante + ' de ' + handle + ' (' + ficha + ')'); continue; }
      if (varianteDisponible(v)) enlaces[ficha] = url;
    } else if (vs.some(varianteDisponible)) {
      enlaces[ficha] = url;
    }
  }
  if (probar) for (const f of probar) if (!fichas[f]) avisos.push('--probar: la ficha no esta en el mapa: ' + f);
  return { enlaces, avisos };
}

// Tarjetas activas de los listados (fuera de comentarios) que no estan ni en el
// mapa ni en la lista "sin_tienda": probablemente una ficha nueva sin mapear.
function tarjetasSinMapa(mapa) {
  const conocidas = new Set([...Object.keys(mapa.fichas || {}), ...(mapa.sin_tienda || [])]);
  const faltan = new Set();
  for (const f of fs.readdirSync(LISTADOS).filter(n => n.endsWith('.html'))) {
    const html = fs.readFileSync(path.join(LISTADOS, f), 'utf8').replace(/<!--[\s\S]*?-->/g, '');
    for (const m of html.matchAll(/<a\b[^>]*class="product-card[^"]*"[^>]*>/g)) {
      const href = (m[0].match(/\bhref="([^"]+)"/) || [])[1];
      if (href && !/^https?:/.test(href) && !conocidas.has(href)) faltan.add(href);
    }
  }
  return [...faltan].sort();
}

async function traerProductos(cfg) {
  const BASE = 'https://api.tiendanube.com/v1/' + cfg.store_id;
  const HEADERS = {
    'Authentication': 'bearer ' + cfg.access_token,
    'User-Agent': 'WoodTools stock-sitio (' + (cfg.contact_email || 'woodtoolsmarketing@gmail.com') + ')'
  };
  // null = la API dijo 404 en una pagina > 1: no hay mas paginas
  async function get(url, page) {
    for (let intento = 1; intento <= 6; intento++) {
      let res;
      try { res = await fetch(url, { headers: HEADERS }); }
      catch (e) { if (intento === 6) throw e; await dormir(1500 * intento); continue; }
      if (res.status === 429) {
        const espera = parseInt(res.headers.get('Retry-After') || '2', 10) * 1000 || 2000;
        await dormir(espera + 300);
        continue;
      }
      if (res.status === 404 && page > 1) return null;
      if (!res.ok) throw new Error('GET ' + url + ' -> ' + res.status);
      return res.json();
    }
    throw new Error('Demasiados 429 en ' + url);
  }
  const todos = [];
  for (let page = 1; ; page++) {
    const lote = await get(BASE + '/products?page=' + page + '&per_page=200&fields=id,handle,published,variants', page);
    if (!lote) break;
    todos.push(...lote);
    if (lote.length < 200) break;
    await dormir(300);
  }
  return todos;
}

async function subirFtp(archivo) {
  const ftpCfg = leerJson(CFG_FTP);
  const ftp = require('basic-ftp');
  const client = new ftp.Client(30000);
  let base = (ftpCfg.remoteDir || '/').replace(/\\/g, '/').replace(/\/+$/, '');
  if (!base.startsWith('/')) base = '/' + base;               // igual que subir.js
  try {
    await client.access({
      host: ftpCfg.host, port: ftpCfg.port || 21,
      user: ftpCfg.user, password: ftpCfg.password,
      secure: ftpCfg.secure === true,
      secureOptions: ftpCfg.secure === true ? { rejectUnauthorized: false } : undefined
    });
    await client.ensureDir(base || '/');
    await client.uploadFrom(archivo, path.basename(archivo));
  } finally {
    client.close();
  }
}

module.exports = { calcularEnlaces, varianteConStock, varianteDisponible };

async function main() {
  if (PROBAR && !SALIDA) throw new Error('--probar necesita --salida <archivo>: una prueba nunca pisa el stock-tienda.json real.');
  const inicio = new Date();
  console.log('--- stock-sitio ' + inicio.toLocaleString('es-AR', { hour12: false }) + (DRY ? ' (simulacro)' : '') + (PROBAR ? ' (PRUEBA)' : ''));
  const mapa = leerJson(MAPA);
  const fichas = mapa.fichas;

  const faltan = tarjetasSinMapa(mapa);
  if (faltan.length) console.log('  AVISO tarjetas de los listados sin entrada en mapa-tarjetas.json (siempre van a la ficha): ' + faltan.join(', '));

  let productos = [];
  if (!PROBAR) {
    if (!fs.existsSync(CFG_API)) throw new Error('Falta ' + CFG_API + ' (ver stock.md, seccion D).');
    productos = await traerProductos(leerJson(CFG_API));
  }
  const { enlaces, avisos } = calcularEnlaces(productos, fichas, PROBAR);
  avisos.forEach(a => console.log('  AVISO ' + a));
  const n = Object.keys(enlaces).length;
  console.log('Fichas en el mapa: ' + Object.keys(fichas).length + ' | van a la tienda: ' + n);
  Object.entries(enlaces).slice(0, 10).forEach(([f, u]) => console.log('  ' + f + '  ->  ' + u));
  if (n > 10) console.log('  ... y ' + (n - 10) + ' mas');

  const destino = SALIDA || ARCHIVO_SITIO;
  let anterior = null;
  try { anterior = JSON.stringify(leerJson(destino).enlaces); } catch { /* no existe o esta roto */ }
  console.log(anterior === JSON.stringify(enlaces) ? 'Enlaces sin cambios.' : 'Enlaces CAMBIARON.');
  if (DRY) return;

  fs.writeFileSync(destino, JSON.stringify({ verificado: inicio.toISOString(), enlaces }, null, 1) + '\n', 'utf8');
  console.log('Escrito ' + destino);
  if (SALIDA || SIN_SUBIR) return;
  await subirFtp(ARCHIVO_SITIO);
  console.log('Subido stock-tienda.json al sitio.');
}

if (require.main === module) {
  main().catch(e => { console.error('FALLO: ' + e.message); process.exit(1); });
}
