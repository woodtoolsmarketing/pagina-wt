document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter-btn:not(#btn-limpiar)');
    const btnLimpiar = document.getElementById('btn-limpiar');
    const productos = document.querySelectorAll('.product-card');

    // =====================================================================
    // PARCHE: CORRECCIÓN DE CATEGORÍAS PARA SIERRAS DE MELAMINA
    // Ahora busca el código base en el enlace (href) de forma flexible
    // =====================================================================
    const codigosMelamina = [
        "LU2C", "LU3D", "LU3E", "LU3F", "LSB", "FR12L", "LG3D", "SSK12", "F03FS"
    ];

    productos.forEach(producto => {
        const enlace = producto.getAttribute('href');
        if (enlace) {
            const esMelamina = codigosMelamina.some(codigo => enlace.includes(codigo));
            if (esMelamina && producto.getAttribute('data-categoria') !== 'incisor') {
                producto.setAttribute('data-categoria', 'melamina');
            }
        }
    });
    // =====================================================================

    let filtrosActivos = {};
    filterButtons.forEach(btn => {
        const tipo = btn.getAttribute('data-filter-type');
        if (tipo && !filtrosActivos[tipo]) {
            filtrosActivos[tipo] = 'todos'; 
        }
    });

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

            if (coincideTodo) {
                producto.style.display = 'flex'; 
            } else {
                producto.style.display = 'none';
            }
        });
    }

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

    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', function(e) {
            e.preventDefault();
            
            for (let tipo in filtrosActivos) {
                filtrosActivos[tipo] = 'todos';
            }
            filterButtons.forEach(btn => btn.classList.remove('activo'));
            
            window.history.replaceState({}, document.title, window.location.pathname);
            aplicarFiltros();
        });
    }

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