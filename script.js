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