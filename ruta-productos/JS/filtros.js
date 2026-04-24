document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter-btn:not(#btn-limpiar)');
    const btnLimpiar = document.getElementById('btn-limpiar');
    const productos = document.querySelectorAll('.product-card');

    // =====================================================================
    // PARCHE: CORRECCIÓN DE CATEGORÍAS PARA SIERRAS DE MELAMINA
    // Ahora busca el código en el enlace (href) para no depender del título
    // =====================================================================
    const codigosMelamina = [
        "LU2C 1200", "LU2C 1500", "LU2C 2000", "LU2C 2100", 
        "LU3D 0200", "LU3D 0400", "LU3D 0600", "LU3D 1700", 
        "LU3E 0200", "LU3F 0100", "LU3F 0200", "LU3F 0300", "LU3F 0400", 
        "LSB25003X", "LSB29001X", "LSB30001X", "LSB32001X", "LSB35003X", 
        "LSB38002X", "LSB40007X", "LSB43007X", "LSB43013X", "LSB45007X", 
        "LSB45018X", "LSB45019X", "LSB48001X", "FR12L001H"
    ];

    productos.forEach(producto => {
        const enlace = producto.getAttribute('href');
        if (enlace) {
            // Verificamos si la ruta del enlace contiene alguno de los códigos de la lista
            const esMelamina = codigosMelamina.some(codigo => enlace.includes(codigo));
            if (esMelamina) {
                producto.setAttribute('data-categoria', 'melamina');
            }
        }
    });
    // =====================================================================

    // 1. Detectamos automáticamente qué categorías de filtros existen
    let filtrosActivos = {};
    filterButtons.forEach(btn => {
        const tipo = btn.getAttribute('data-filter-type');
        if (tipo && !filtrosActivos[tipo]) {
            filtrosActivos[tipo] = 'todos'; 
        }
    });

    // Función principal para aplicar los filtros
    function aplicarFiltros() {
        productos.forEach(producto => {
            let coincideTodo = true;

            for (let tipoFiltro in filtrosActivos) {
                const valorSeleccionado = filtrosActivos[tipoFiltro];
                const valorProducto = producto.getAttribute(`data-${tipoFiltro}`) || 'todos';

                if (valorSeleccionado !== 'todos' && valorSeleccionado !== valorProducto) {
                    coincideTodo = false;
                    break;
                }
            }

            // Mostramos u ocultamos
            if (coincideTodo) {
                producto.style.display = 'flex'; 
            } else {
                producto.style.display = 'none';
            }
        });
    }

    // Le asignamos el comportamiento a cada botón del menú lateral
    filterButtons.forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault(); 

            const tipoFiltro = this.getAttribute('data-filter-type'); 
            const valorFiltro = this.getAttribute('data-filter-value'); 

            if (this.classList.contains('activo')) {
                this.classList.remove('activo');
                filtrosActivos[tipoFiltro] = 'todos';
            } else {
                document.querySelectorAll(`.filter-btn[data-filter-type="${tipoFiltro}"]`).forEach(btn => {
                    btn.classList.remove('activo');
                });
                this.classList.add('activo');
                filtrosActivos[tipoFiltro] = valorFiltro;
            }

            aplicarFiltros();
        });
    });

    // Comportamiento del botón "Limpiar Filtros"
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', function(e) {
            e.preventDefault();
            
            for (let tipo in filtrosActivos) {
                filtrosActivos[tipo] = 'todos';
            }
            filterButtons.forEach(btn => btn.classList.remove('activo'));
            
            // Limpiamos también la URL
            window.history.replaceState({}, document.title, window.location.pathname);

            aplicarFiltros();
        });
    }

    // LECTURA DE FILTROS DESDE LA URL
    const urlParams = new URLSearchParams(window.location.search);
    let aplicarAlInicio = false;

    urlParams.forEach((valorUrl, tipoFiltroUrl) => {
        if (filtrosActivos[tipoFiltroUrl] !== undefined) {
            filtrosActivos[tipoFiltroUrl] = valorUrl;
            aplicarAlInicio = true;

            const botonCorrespondiente = document.querySelector(`.filter-btn[data-filter-type="${tipoFiltroUrl}"][data-filter-value="${valorUrl}"]`);
            if (botonCorrespondiente) {
                botonCorrespondiente.classList.add('activo');
            }
        }
    });

    if (aplicarAlInicio) {
        aplicarFiltros();
    }
});