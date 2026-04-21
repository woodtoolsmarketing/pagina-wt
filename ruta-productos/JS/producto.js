document.addEventListener("DOMContentLoaded", function() {
    const contenedorZoom = document.getElementById("zoom-container");
    const imagenPrincipal = document.getElementById("main-image");

    if (contenedorZoom && imagenPrincipal) {
        contenedorZoom.addEventListener("mousemove", function(e) {
            const rect = contenedorZoom.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            imagenPrincipal.style.transformOrigin = `${x}% ${y}%`;
            imagenPrincipal.style.transform = "scale(2.5)";
        });

        contenedorZoom.addEventListener("mouseleave", function() {
            imagenPrincipal.style.transformOrigin = "center center";
            imagenPrincipal.style.transform = "scale(1)";
        });
    }
});

function cambiarImagen(elemento) {
    const imagenPrincipal = document.getElementById("main-image");
    imagenPrincipal.src = elemento.src;
    document.querySelectorAll(".mini-img").forEach(img => img.classList.remove("activa"));
    elemento.classList.add("activa");
}