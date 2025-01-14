let currentIndex = 0;
let intervalId;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slides[currentIndex].classList.add('active');
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    
    currentIndex += direction;

    if (currentIndex >= slides.length) {
        currentIndex = 0; 
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1; 
    }

    showSlides();
}

function autoChangeSlide() {
    changeSlide(1);
}

showSlides();
intervalId = setInterval(autoChangeSlide, 5000);