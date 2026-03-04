let slideIndex = 0; 
let slideInterval;

showSlides(slideIndex);
iniciarTemporizador();

function changeSlide(n) {
    showSlides(slideIndex += n);
    reiniciarTemporizador();
}

function currentSlide(n) {
    showSlides(slideIndex = n - 1); 
    reiniciarTemporizador();
}

function showSlides(n) {
    let slidesWrapper = document.querySelector(".slides-wrapper");
    let dots = document.getElementsByClassName("dot");
    let totalSlides = dots.length;
    
    if (n >= totalSlides) { slideIndex = 0 }    
    
    if (n < 0) { slideIndex = totalSlides - 1 }
    
    slidesWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    dots[slideIndex].classList.add("active");
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

// NUEVA FUNCIÓN PARA LOS VIDEOS DE YOUTUBE (Lazy Load)
function playVideo(element, videoId) {
    // Creamos el reproductor iframe en el momento exacto en que se hace clic
    let iframe = document.createElement("iframe");
    
    // Le asignamos el link con "?autoplay=1" para que empiece solo
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoId + "?autoplay=1");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    iframe.setAttribute("allowfullscreen", "true");
    
    // Aseguramos que cubra todo el bloque negro
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    
    // Reemplazamos la imagen (miniatura) por el video real
    element.parentNode.replaceChild(iframe, element);
}