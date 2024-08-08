const slidesContainer = document.querySelector('.slides');
let slides = Array.from(document.querySelectorAll('.slide'));
const navLines = document.querySelectorAll('.nav-line');

let currentIndex = 0;

// Sort slides based on the data-order attribute
slides.sort((a, b) => {
    return a.getAttribute('data-order') - b.getAttribute('data-order');
});

// Re-append sorted slides to the container
slides.forEach(slide => {
    slidesContainer.appendChild(slide);
});

// Function to show a specific slide based on the index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        navLines[i].classList.toggle('active', i === index);
    });

    const offset = -index * 100; // Calculate the offset for the slide
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Add event listeners for navigation lines
navLines.forEach((line, index) => {
    line.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

// Add keyboard arrow navigation
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        // Navigate to the previous slide
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    } else if (event.key === 'ArrowRight') {
        // Navigate to the next slide
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
});

// Initialize the slider by showing the first slide
showSlide(currentIndex);


// setInterval(() => {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
// }, 3000);