/* =====================================================================
   REGLA AUTOMÁTICA: ocultar productos sin stock (Tienda Nube API)
   ---------------------------------------------------------------------
   Recorre TODOS los productos de la tienda y ajusta su visibilidad según
   el stock:
     - sin stock (todas las variantes controladas y en 0)  -> OCULTO
     - con stock (alguna variante con stock > 0 o "infinito") -> VISIBLE

   Solo cambia la visibilidad de los productos que estén "al revés": no
   toca precio, descripción ni stock. Como también MUESTRA los que tienen
   stock, alcanza con cargarle stock a un producto (en el panel o por CSV)
   y en la próxima corrida reaparece solo.

   USO:
     node auto-ocultar-stock.js            (simulacro: informa, no cambia nada)
     node auto-ocultar-stock.js --aplicar  (aplica los cambios)

   CONFIG:  _tools/tiendanube/api-config.json  (copiar de api-config.example.json
            y pegar el access_token — ver stock.md, sección "Regla automática").

   PROGRAMARLO: correrlo cada tanto (ej. Programador de tareas de Windows,
   cada 1-2 h, o pegado a la subida diaria). NO es instantáneo: aplica en la
   próxima corrida.
   ===================================================================== */
'use strict';
const fs = require('fs');
const path = require('path');

const APLICAR = process.argv.includes('--aplicar');
const CFG_PATH = path.join(__dirname, 'api-config.json');

if (!fs.existsSync(CFG_PATH)) {
  console.error('Falta ' + CFG_PATH + '.');
  console.error('Copiá api-config.example.json a api-config.json y pegá el access_token.');
  process.exit(1);
}
const cfg = JSON.parse(fs.readFileSync(CFG_PATH, 'utf8'));
if (!cfg.store_id || !cfg.access_token || cfg.access_token.startsWith('PEGAR')) {
  console.error('Completá store_id y access_token en api-config.json.');
  process.exit(1);
}

const BASE = 'https://api.tiendanube.com/v1/' + cfg.store_id;
const HEADERS = {
  'Authentication': 'bearer ' + cfg.access_token,
  // Tienda Nube EXIGE un User-Agent que identifique la app + un contacto.
  'User-Agent': 'WoodTools auto-stock (' + (cfg.contact_email || 'woodtoolsmarketing@gmail.com') + ')',
  'Content-Type': 'application/json'
};

const dormir = ms => new Promise(r => setTimeout(r, ms));

// Llamada con reintentos ante 429 (límite de tasa) y errores de red.
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
      // esperar lo que pida la API (segundos) antes de reintentar
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

// Una variante "tiene stock" si NO controla stock (infinito) o si su stock > 0.
function varianteConStock(v) {
  if (v.stock_management === false) return true;   // ∞ infinito
  if (v.stock === null || v.stock === undefined) return true;
  return Number(v.stock) > 0;
}

async function traerTodosLosProductos() {
  const productos = [];
  let page = 1;
  const per = 200;
  for (;;) {
    const url = BASE + '/products?page=' + page + '&per_page=' + per +
                '&fields=id,name,published,variants';
    let res;
    try {
      res = await api('GET', url);
    } catch (e) {
      // Con exactamente 200, 400... productos, la pagina siguiente da 404: es el final.
      if (page > 1 && / -> 404 /.test(e.message)) break;
      throw e;
    }
    const lote = await res.json();
    productos.push(...lote);
    if (lote.length < per) break;   // última página
    page++;
    await dormir(300);
  }
  return productos;
}

function nombre(p) {
  const n = p.name;
  if (typeof n === 'string') return n;
  if (n && typeof n === 'object') return n.es || n.pt || Object.values(n)[0] || '(sin nombre)';
  return '(sin nombre)';
}

(async function main() {
  console.log(APLICAR ? '=== APLICANDO ===' : '=== SIMULACRO (no cambia nada; usá --aplicar) ===');
  const productos = await traerTodosLosProductos();
  console.log('Productos en la tienda: ' + productos.length);

  const aOcultar = [], aMostrar = [];
  for (const p of productos) {
    const conStock = (p.variants || []).some(varianteConStock);
    const deseado = conStock;             // published deseado
    if (p.published === deseado) continue; // ya está bien
    (deseado ? aMostrar : aOcultar).push(p);
  }

  console.log('A OCULTAR (sin stock y hoy visibles) : ' + aOcultar.length);
  console.log('A MOSTRAR (con stock y hoy ocultos)  : ' + aMostrar.length);
  const muestra = [...aOcultar.slice(0, 5).map(p => '  ocultar  ' + nombre(p)),
                   ...aMostrar.slice(0, 5).map(p => '  mostrar  ' + nombre(p))];
  if (muestra.length) console.log(muestra.join('\n'));

  if (!APLICAR) {
    console.log('\n(simulacro) Para aplicarlo: node auto-ocultar-stock.js --aplicar');
    return;
  }

  let ok = 0, err = 0;
  for (const p of [...aOcultar, ...aMostrar]) {
    const deseado = aMostrar.includes(p);
    try {
      await api('PUT', BASE + '/products/' + p.id, { published: deseado });
      ok++;
    } catch (e) {
      err++;
      console.error('  ERROR ' + nombre(p) + ': ' + e.message);
    }
    await dormir(550);   // ~2 req/s, dentro del límite de la API
  }
  console.log('\nAplicados: ' + ok + (err ? ' | con error: ' + err : ''));
  if (err) process.exitCode = 1;   // que la tarea horaria lo anote como ERROR
})().catch(e => { console.error('FALLÓ:', e.message); process.exit(1); });
