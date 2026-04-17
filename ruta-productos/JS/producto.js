document.addEventListener("DOMContentLoaded", function() {
    
    const contenedorZoom = document.getElementById("zoom-container");
    const imagenPrincipal = document.getElementById("main-image");

    // Lógica para el ZOOM estilo ML
    contenedorZoom.addEventListener("mousemove", function(e) {
        // Calculamos la posición del mouse dentro del contenedor (en porcentajes)
        const rect = contenedorZoom.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        // Movemos el origen de la transformación a donde esté apuntando el mouse
        imagenPrincipal.style.transformOrigin = `${x}% ${y}%`;
        // Agrandamos la imagen al 250%
        imagenPrincipal.style.transform = "scale(2.5)";
    });

    contenedorZoom.addEventListener("mouseleave", function() {
        // Reseteamos el zoom cuando el mouse sale de la caja
        imagenPrincipal.style.transformOrigin = "center center";
        imagenPrincipal.style.transform = "scale(1)";
    });

});

// Función para las miniaturas del lateral izquierdo
function cambiarImagen(elemento) {
    // Cambiar el src de la imagen principal por la miniatura seleccionada
    const imagenPrincipal = document.getElementById("main-image");
    imagenPrincipal.src = elemento.src;

    // Actualizar el borde azul (clase activa)
    const miniaturas = document.querySelectorAll(".mini-img");
    miniaturas.forEach(img => img.classList.remove("activa"));
    elemento.classList.add("activa");
}