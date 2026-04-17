document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter-btn:not(#btn-limpiar)');
    const btnLimpiar = document.getElementById('btn-limpiar');
    const productos = document.querySelectorAll('.product-card');

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
                // Obtenemos la etiqueta del producto (ej: data-categoria="madera" o data-formato="planas")
                const valorProducto = producto.getAttribute(`data-${tipoFiltro}`) || 'todos';

                // Si hay un filtro marcado y el producto no lo tiene, lo descartamos
                if (valorSeleccionado !== 'todos' && valorSeleccionado !== valorProducto) {
                    coincideTodo = false;
                    break; // No hace falta revisar los demás filtros para este producto
                }
            }

            // Si pasó la validación de todos los filtros, lo mostramos. Si no, lo ocultamos.
            if (coincideTodo) {
                producto.style.display = 'flex'; // Cambiar a 'block' si tu CSS no usa flexbox acá
            } else {
                producto.style.display = 'none';
            }
        });
    }

    // Le asignamos el comportamiento a cada botón del menú lateral
    filterButtons.forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault(); // Evitamos que la página salte al hacer clic (#)

            const tipoFiltro = this.getAttribute('data-filter-type'); 
            const valorFiltro = this.getAttribute('data-filter-value'); 

            // Si el botón ya estaba activo, lo apagamos
            if (this.classList.contains('activo')) {
                this.classList.remove('activo');
                filtrosActivos[tipoFiltro] = 'todos';
            } else {
                // Si activamos uno nuevo, primero apagamos los otros de la MISMA familia de filtros
                document.querySelectorAll(`.filter-btn[data-filter-type="${tipoFiltro}"]`).forEach(btn => {
                    btn.classList.remove('activo');
                });
                
                // Prendemos el que el usuario tocó
                this.classList.add('activo');
                filtrosActivos[tipoFiltro] = valorFiltro;
            }

            // Ejecutamos la función para que se actualice la grilla
            aplicarFiltros();
        });
    });

    // Comportamiento del botón "Limpiar Filtros"
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Volvemos todas las categorías detectadas a 'todos'
            for (let tipo in filtrosActivos) {
                filtrosActivos[tipo] = 'todos';
            }

            // Le sacamos el color rojo/negrita a todos los botones
            filterButtons.forEach(btn => btn.classList.remove('activo'));

            // Mostramos de nuevo todo el catálogo
            aplicarFiltros();
        });
    }
});