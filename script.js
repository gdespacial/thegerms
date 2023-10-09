document.addEventListener("DOMContentLoaded", function () {
    const carouselTrack = document.querySelector(".carousel-track");
    const carouselSlides = document.querySelectorAll(".carousel-slide");
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselSlides.length;
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselTrack.style.transform = `translateX(${offset}%)`;
    }

    setInterval(nextSlide, 2000);
});


var currentYearElement = document.getElementById("currentYear");
var currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;
















