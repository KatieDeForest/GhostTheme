const slides = document.querySelectorAll('.slide');
const navLines = document.querySelectorAll('.nav-line');

let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        navLines[i].classList.toggle('active', i === index);
    });

    const offset = -index * 100; // Calculate the offset for the slide
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

navLines.forEach((line, index) => {
    line.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

// setInterval(() => {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
// }, 3000);