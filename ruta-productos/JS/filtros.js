document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter-btn:not(#btn-limpiar)');
    const btnLimpiar = document.getElementById('btn-limpiar');
    const productos = document.querySelectorAll('.product-card');

    // =====================================================================
    // PARCHE: CORRECCIÓN DE CATEGORÍAS PARA SIERRAS DE MELAMINA
    // Forzamos los siguientes códigos a la categoría "melamina"
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
        const tituloElement = producto.querySelector('.product-title');
        if (tituloElement) {
            // Obtenemos el código del producto (cortando el texto antes del primer " - ")
            const codigoProducto = tituloElement.innerText.split(' - ')[0].trim();
            
            // Si el código coincide con nuestra lista, le sobreescribimos la categoría
            if (codigosMelamina.includes(codigoProducto)) {
                producto.setAttribute('data-categoria', 'melamina');
            }
        }
    });
    // =====================================================================


    // 1. Detectamos automáticamente qué categorías de filtros existen en esta página HTML
    let filtrosActivos = {};
    filterButtons.forEach(btn => {
        const tipo = btn.getAttribute('data-filter-type');
        if (tipo && !filtrosActivos[tipo]) {
            filtrosActivos[tipo] = 'todos'; // Inicializamos todos en 'todos'
        }
    });

    // Función principal para aplicar los filtros
    function aplicarFiltros() {
        productos.forEach(producto => {
            let coincideTodo = true;

            // Revisamos cada tipo de filtro que el script detectó en la página
            for (let tipoFiltro in filtrosActivos) {
                const valorSeleccionado = filtrosActivos[tipoFiltro];
                const valorProducto = producto.getAttribute(`data-${tipoFiltro}`) || 'todos';

                // Si hay un filtro marcado y el producto no lo tiene, lo descartamos
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
            
            // Limpiamos también la URL si el usuario tocó limpiar
            window.history.replaceState({}, document.title, window.location.pathname);

            aplicarFiltros();
        });
    }

    // ==========================================
    // LECTURA DE FILTROS DESDE LA URL
    // ==========================================
    const urlParams = new URLSearchParams(window.location.search);
    let aplicarAlInicio = false;

    // Recorremos los parámetros que vengan en la URL (ej: ?categoria=melamina)
    urlParams.forEach((valorUrl, tipoFiltroUrl) => {
        // Si el filtro de la URL es válido para esta página
        if (filtrosActivos[tipoFiltroUrl] !== undefined) {
            filtrosActivos[tipoFiltroUrl] = valorUrl;
            aplicarAlInicio = true;

            // Encendemos visualmente (rojo/negrita) el botón del menú lateral
            const botonCorrespondiente = document.querySelector(`.filter-btn[data-filter-type="${tipoFiltroUrl}"][data-filter-value="${valorUrl}"]`);
            if (botonCorrespondiente) {
                botonCorrespondiente.classList.add('activo');
            }
        }
    });

    // Si encontramos filtros en la URL, los aplicamos ni bien carga la página
    if (aplicarAlInicio) {
        aplicarFiltros();
    }
});