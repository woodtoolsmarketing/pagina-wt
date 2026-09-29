// =====================================================================
// TARJETAS -> TIENDA NUBE CUANDO HAY STOCK
// Lee /stock-tienda.json (lo genera y sube cada hora
// _tools/tiendanube/stock-sitio.js) y, para cada tarjeta cuya ficha figura
// ahi, cambia el destino al producto de la tienda. Las demas tarjetas
// siguen yendo a la ficha del sitio, como siempre.
// - No muestra nada en la tarjeta (ni precio ni stock).
// - Guarda la ficha original en data-ficha: filtros.js la usa para filtrar
//   y buscar cuando el href ya apunta a la tienda.
// - Si el archivo no esta, falla la lectura o tiene mas de 7 dias (la tarea
//   horaria dejo de correr), todas las tarjetas van a la ficha.
// - Vuelve a leerlo al volver con "atras" y al volver a una pestaña que
//   quedo abierta mas de 5 minutos, para no llevar a un producto que se
//   agoto mientras tanto.
// =====================================================================
document.addEventListener("DOMContentLoaded", function() {
    const tarjetas = document.querySelectorAll('a.product-card');
    if (!tarjetas.length || !window.fetch) return;

    const VIGENCIA = 7 * 24 * 60 * 60 * 1000;
    let ultimaLectura = 0;

    function aplicar(enlaces) {
        tarjetas.forEach(function(tarjeta) {
            const ficha = tarjeta.getAttribute('data-ficha') || tarjeta.getAttribute('href');
            const url = enlaces[ficha];
            if (url) {
                tarjeta.setAttribute('data-ficha', ficha);
                tarjeta.setAttribute('href', url);
            } else if (tarjeta.hasAttribute('data-ficha')) {
                tarjeta.setAttribute('href', ficha);   // se agoto: vuelve a la ficha
            }
        });
    }

    function leer() {
        ultimaLectura = Date.now();
        // cache: 'no-store' + marca de 5 minutos: que ningun navegador ni proxy
        // muestre enlaces viejos.
        fetch('/stock-tienda.json?t=' + Math.floor(Date.now() / 300000), { cache: 'no-store' })
            .then(function(r) { return r.ok ? r.json() : null; })
            .then(function(datos) {
                const verificado = datos && Date.parse(datos.verificado);
                const vigente = verificado && (Date.now() - verificado) < VIGENCIA;
                aplicar(vigente && datos.enlaces ? datos.enlaces : {});
            })
            .catch(function() { aplicar({}); });
    }

    leer();
    window.addEventListener('pageshow', function(e) { if (e.persisted) leer(); });
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible' && Date.now() - ultimaLectura > 300000) leer();
    });
});
