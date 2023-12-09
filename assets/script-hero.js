let currentSlide = 0;
let slideInterval;

function showSlide(n) {
    const slidesContainer = document.querySelector('.slides');
    currentSlide = (n + slidesContainer.children.length) % slidesContainer.children.length;
    const translateValue = 200 - 100 * currentSlide + '%';
    slidesContainer.style.transform = 'translateX(' + translateValue + ')';

    updateDots();
    resetSlideInterval();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 4 seconds
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

resetSlideInterval(); // Initialize the interval

// Handle manual navigation for each dot
document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(index);
    });
});

// Initially show the first slide
showSlide(currentSlide);