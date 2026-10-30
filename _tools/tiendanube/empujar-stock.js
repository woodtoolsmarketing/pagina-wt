/* =====================================================================
   EMPUJAR STOCK: sistema de empleados -> TIENDA NUBE
   ---------------------------------------------------------------------
   Lee el stock que carga la oficina en el sistema de afilado (Supabase,
   RPC stock_para_tienda) y le escribe la cantidad a cada variante de la
   tienda, matcheando por SKU = codigo (normalizado: MAYUS, sin espacios
   ni . _ - ( )).

   Con esto, el stock que se carga ACA manda en la tienda. Despues corren
   stock-sitio.js (enlaces del sitio) y auto-ocultar-stock.js (muestra/
   oculta): los dos leen el stock de la tienda, asi que reflejan solos lo
   que empuja este script. Por eso este va PRIMERO en la tarea horaria
   (ver auto-ocultar-stock.cmd).

   Solo escribe las variantes cuya cantidad CAMBIA (o que estaban en
   "stock infinito" y ahora llevan una cantidad exacta). Los productos de
   la tienda que no estan en nuestro stock no se tocan; nuestros codigos
   que no existen en la tienda se informan y se saltean.

   USO:
     node empujar-stock.js            simulacro: informa, NO escribe en la tienda
     node empujar-stock.js --aplicar  aplica los cambios a la tienda

   CONFIG (las dos van en esta carpeta):
     api-config.json     store_id + access_token de Tienda Nube (ya existe,
                         la usa auto-ocultar-stock.js)
     fuente-stock.json   supabase_url + anon_key + token (copiar de
                         fuente-stock.example.json). El token sale de
                         configuracion.stock_tienda_token en la base del
                         sistema de empleados. NO va al repo (es publico).
   ===================================================================== */
'use strict';
const fs = require('fs');
const path = require('path');

const APLICAR = process.argv.includes('--aplicar');
const DIR = __dirname;
const CFG_API = path.join(DIR, 'api-config.json');
const CFG_FUENTE = path.join(DIR, 'fuente-stock.json');

function leerJson(f) { return JSON.parse(fs.readFileSync(f, 'utf8').replace(/^﻿/, '')); }
const dormir = ms => new Promise(r => setTimeout(r, ms));
// Mismo criterio que cosechar-variantes.js, para que "LG3D 0400" matchee el SKU.
const norm = s => String(s || '').toUpperCase().replace(/[\s_\-().]/g, '');

for (const f of [CFG_API, CFG_FUENTE]) {
  if (!fs.existsSync(f)) {
    console.error('Falta ' + f + '.');
    if (f === CFG_FUENTE) console.error('Copia fuente-stock.example.json a fuente-stock.json y completalo.');
    process.exit(1);
  }
}
const cfg = leerJson(CFG_API);
const fuente = leerJson(CFG_FUENTE);
if (!cfg.store_id || !cfg.access_token || String(cfg.access_token).startsWith('PEGAR')) {
  console.error('Completa store_id y access_token en api-config.json.');
  process.exit(1);
}
if (!fuente.supabase_url || !fuente.anon_key || !fuente.token ||
    String(fuente.anon_key).startsWith('PEGAR') || String(fuente.token).startsWith('PEGAR')) {
  console.error('Completa supabase_url, anon_key y token en fuente-stock.json.');
  process.exit(1);
}

const BASE = 'https://api.tiendanube.com/v1/' + cfg.store_id;
const HEADERS = {
  'Authentication': 'bearer ' + cfg.access_token,
  'User-Agent': 'WoodTools empujar-stock (' + (cfg.contact_email || 'woodtoolsmarketing@gmail.com') + ')',
  'Content-Type': 'application/json'
};

// Llamada a la API de la tienda con reintentos ante 429 (limite de tasa) y red.
async function api(method, url, body) {
  for (let intento = 1; intento <= 6; intento++) {
    let res;
    try {
      res = await fetch(url, { method, headers: HEADERS, body: body ? JSON.stringify(body) : undefined });
    } catch (e) {
      if (intento === 6) throw e;
      await dormir(1500 * intento);
      continue;
    }
    if (res.status === 429) {
      const espera = parseInt(res.headers.get('Retry-After') || '2', 10) * 1000 || 2000;
      await dormir(espera + 300);
      continue;
    }
    if (!res.ok) {
      const txt = await res.text().catch(() => '');
      throw new Error(method + ' ' + url + ' -> ' + res.status + ' ' + txt.slice(0, 200));
    }
    return res;
  }
  throw new Error('Demasiados 429 en ' + url);
}

// Nuestro stock, por la RPC del sistema de empleados (gateada por token).
async function traerNuestroStock() {
  const url = fuente.supabase_url.replace(/\/+$/, '') + '/rest/v1/rpc/stock_para_tienda';
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'apikey': fuente.anon_key,
      'Authorization': 'Bearer ' + fuente.anon_key,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ p_token: fuente.token })
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    throw new Error('stock_para_tienda -> ' + res.status + ' ' + txt.slice(0, 200));
  }
  const filas = await res.json();
  if (!Array.isArray(filas)) throw new Error('Respuesta inesperada de stock_para_tienda.');
  return filas; // [{ codigo, cantidad }]
}

// Todos los productos de la tienda con sus variantes (id, sku, stock, stock_management).
async function traerProductos() {
  const todos = [];
  for (let page = 1; ; page++) {
    let res;
    try {
      res = await api('GET', BASE + '/products?page=' + page + '&per_page=200&fields=id,variants');
    } catch (e) {
      if (page > 1 && / -> 404 /.test(e.message)) break; // la pagina de mas da 404: fin
      throw e;
    }
    const lote = await res.json();
    todos.push(...lote);
    if (lote.length < 200) break;
    await dormir(300);
  }
  return todos;
}

(async function main() {
  console.log(APLICAR ? '=== APLICANDO (escribe en la tienda) ===' : '=== SIMULACRO (no escribe nada; usa --aplicar) ===');

  const nuestro = await traerNuestroStock();
  console.log('Stock nuestro (codigos trackeados): ' + nuestro.length);
  if (!nuestro.length) {
    console.log('No hay stock cargado en el sistema (stock_articulos vacio): nada para empujar.');
    return;
  }

  const productos = await traerProductos();
  // indice: norm(sku) -> { pid, vid, stock, manage, sku }  (el primero gana)
  const porSku = new Map();
  let sinSku = 0, dup = 0;
  for (const p of productos) for (const v of (p.variants || [])) {
    const clave = norm(v.sku);
    if (!clave) { sinSku++; continue; }
    if (porSku.has(clave)) { dup++; continue; }
    porSku.set(clave, { pid: p.id, vid: v.id, stock: v.stock, manage: v.stock_management, sku: v.sku });
  }
  console.log('Variantes en la tienda con SKU: ' + porSku.size +
    (dup ? ' (+' + dup + ' SKU repetidos, gana el primero)' : '') +
    (sinSku ? ' | ' + sinSku + ' sin SKU' : ''));

  const cambios = [];
  const sinTienda = [];
  for (const { codigo, cantidad } of nuestro) {
    const v = porSku.get(norm(codigo));
    if (!v) { sinTienda.push(codigo); continue; }
    const actual = v.manage === false ? null : (v.stock == null ? null : Number(v.stock));
    // Escribir si: la variante estaba en infinito (manage=false) y ahora lleva
    // cantidad exacta, o si la cantidad difiere.
    if (v.manage === false || actual !== Number(cantidad)) {
      cambios.push({ codigo, pid: v.pid, vid: v.vid, de: v.manage === false ? 'inf' : actual, a: Number(cantidad) });
    }
  }

  console.log('Nuestros codigos que estan en la tienda: ' + (nuestro.length - sinTienda.length) +
    ' | sin producto en la tienda: ' + sinTienda.length);
  console.log('Variantes a actualizar: ' + cambios.length);
  cambios.slice(0, 15).forEach(c => console.log('  ' + c.codigo + '   ' + c.de + ' -> ' + c.a));
  if (cambios.length > 15) console.log('  ... y ' + (cambios.length - 15) + ' mas');
  if (sinTienda.length) {
    console.log('  (sin producto en la tienda: ' + sinTienda.slice(0, 20).join(', ') +
      (sinTienda.length > 20 ? ' ... +' + (sinTienda.length - 20) : '') + ')');
  }

  if (!APLICAR) {
    console.log('\n(simulacro) Para aplicarlo: node empujar-stock.js --aplicar');
    return;
  }

  let ok = 0, err = 0;
  for (const c of cambios) {
    try {
      await api('PUT', BASE + '/products/' + c.pid + '/variants/' + c.vid, { stock: c.a, stock_management: true });
      ok++;
    } catch (e) {
      err++;
      console.error('  ERROR ' + c.codigo + ': ' + e.message);
    }
    await dormir(550); // ~2 req/s, dentro del limite de la API
  }
  console.log('\nActualizadas: ' + ok + (err ? ' | con error: ' + err : ''));
  if (err) process.exitCode = 1; // que la tarea horaria lo anote como ERROR
})().catch(e => { console.error('FALLO: ' + e.message); process.exit(1); });
