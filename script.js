let slideIndex = 0; 
let slideInterval;
let isAnimating = false;

// Arrancar carrusel
iniciarTemporizador();

// Flechas
function changeSlide(n) {
    if (isAnimating) return; // Evita que se buguee si hacés muchos clics rápido
    let direction = n > 0 ? 'next' : 'prev';
    moveSlide(slideIndex + n, direction);
    reiniciarTemporizador();
}

// Puntos (círculos)
function currentSlide(n) {
    if (isAnimating) return;
    let newIndex = n - 1;
    if (newIndex === slideIndex) return; // Si toca el mismo punto, no hace nada
    
    // Calcula para qué lado tiene que deslizar
    let direction = newIndex > slideIndex ? 'next' : 'prev';
    moveSlide(newIndex, direction);
    reiniciarTemporizador();
}

// Lógica de transición 3D tipo Bootstrap
function moveSlide(newIndex, direction) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    let totalSlides = slides.length;
    
    // Bucle infinito
    if (newIndex >= totalSlides) newIndex = 0;
    if (newIndex < 0) newIndex = totalSlides - 1;
    
    isAnimating = true;
    
    let current = slides[slideIndex];
    let next = slides[newIndex];
    
    // 1. Acomodar la NUEVA imagen del lado de afuera antes de que entre
    if (direction === 'next') {
        next.style.transform = 'translate3d(100%, 0, 0)'; // La espera a la derecha
    } else {
        next.style.transform = 'translate3d(-100%, 0, 0)'; // La espera a la izquierda
    }
    
    // Le damos display: block para que empiece a existir en la pantalla (escondida a un costado)
    next.classList.add("animating");
    
    // Pequeño truco para forzar al navegador a procesar la posición antes de animar
    void next.offsetWidth; 
    
    // 2. Animar: La actual se va, la nueva entra al centro
    current.style.transform = direction === 'next' ? 'translate3d(-100%, 0, 0)' : 'translate3d(100%, 0, 0)';
    next.style.transform = 'translate3d(0, 0, 0)';
    
    // Actualizar los puntos
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[newIndex].classList.add("active");
    
    // 3. Cuando termina la animación (0.8s), limpiamos las clases
    setTimeout(() => {
        current.classList.remove("active");
        current.classList.remove("animating");
        current.style.transform = ''; // Limpiar estilos en línea
        
        next.classList.remove("animating");
        next.classList.add("active"); // Dejarla como la única activa
        
        slideIndex = newIndex;
        isAnimating = false;
    }, 800); // Este tiempo tiene que coincidir con el transition: 0.8s del CSS
}

function iniciarTemporizador() {
    slideInterval = setInterval(function() {
        changeSlide(1);
    }, 15000);
}

function reiniciarTemporizador() {
    clearInterval(slideInterval);
    iniciarTemporizador();
}