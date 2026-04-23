document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const btnLimpiar = document.getElementById('btn-limpiar');
    const productos = document.querySelectorAll('.product-card');

    // 1. Estado inicial de los filtros
    let filtrosActivos = {};

    // Rastrear todos los tipos de filtro que existen en la página actual
    filterButtons.forEach(btn => {
        let tipo = btn.getAttribute('data-filter-type');
        if (tipo && !filtrosActivos[tipo]) {
            filtrosActivos[tipo] = 'todos';
        }
    });

    // 2. Función principal que muestra u oculta productos
    function aplicarFiltros() {
        productos.forEach(producto => {
            let mostrar = true;

            // Revisamos cada filtro
            for (let tipo in filtrosActivos) {
                let valorEsperado = filtrosActivos[tipo];
                let valorProducto = producto.getAttribute('data-' + tipo);

                // Si hay un filtro seleccionado y el producto no lo tiene, lo ocultamos
                if (valorEsperado !== 'todos') {
                    if (valorProducto !== valorEsperado) {
                        mostrar = false;
                    }
                }
            }

            // Aplicamos visualmente (se usa '' para que respete el display original de tu CSS)
            if (mostrar) {
                producto.style.display = ''; 
            } else {
                producto.style.display = 'none';
            }
        });
    }

    // 3. Acción para cada botón del menú lateral
    filterButtons.forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault();

            // Si es el botón de limpiar, no hacemos la lógica normal aquí
            if (this.id === 'btn-limpiar') return;

            let tipo = this.getAttribute('data-filter-type');
            let valor = this.getAttribute('data-filter-value');

            // Si tocamos el que ya está activo, lo apagamos
            if (this.classList.contains('activo')) {
                this.classList.remove('activo');
                filtrosActivos[tipo] = 'todos';
            } else {
                // Apagamos los otros de la misma familia (ej: otras categorías)
                document.querySelectorAll(`.filter-btn[data-filter-type="${tipo}"]`).forEach(b => {
                    b.classList.remove('activo');
                });
                // Encendemos el nuevo
                this.classList.add('activo');
                filtrosActivos[tipo] = valor;
            }

            aplicarFiltros();
        });
    });

    // 4. Acción para el botón "Limpiar Filtros"
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Reseteamos el estado
            for (let tipo in filtrosActivos) {
                filtrosActivos[tipo] = 'todos';
            }
            
            // Quitamos clases activas de todos los botones
            filterButtons.forEach(b => b.classList.remove('activo'));
            
            // Limpiamos la URL (por si venía de un link externo)
            window.history.replaceState({}, document.title, window.location.pathname);

            aplicarFiltros();
        });
    }

    // ==========================================
    // 5. LECTURA DE FILTROS DESDE LA URL AL CARGAR
    // ==========================================
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