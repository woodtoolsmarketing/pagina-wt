let slideIndex = 1;
showSlides(slideIndex);

// Control de las flechas Prev/Next
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Control de los puntos (círculos)
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Función principal que muestra la diapositiva correcta
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    // Si llegamos al final, volvemos al principio
    if (n > slides.length) { slideIndex = 1 }    
    
    // Si retrocedemos más allá del inicio, vamos al final
    if (n < 1) { slideIndex = slides.length }
    
    // Ocultar todas las diapositivas
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");  
    }
    
    // Desactivar todos los puntos
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    // Mostrar la diapositiva actual y activar su punto correspondiente
    slides[slideIndex - 1].classList.add("active");  
    dots[slideIndex - 1].classList.add("active");
}