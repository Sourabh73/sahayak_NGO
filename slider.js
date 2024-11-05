document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slides img');
    let currentSlide = 0;

    document.querySelector('.next').addEventListener('click', function () {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block';
    });

    document.querySelector('.prev').addEventListener('click', function () {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].style.display = 'block';
    });
});