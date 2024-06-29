document.addEventListener('DOMContentLoaded', function() {
    const reviews = document.querySelectorAll('.review');
    let currentReview = 0;

    function showNextReview() {
        reviews[currentReview].classList.remove('active');
        currentReview = (currentReview + 1) % reviews.length;
        reviews[currentReview].classList.add('active');
    }

    setInterval(showNextReview, 3000); // Change review every 3 seconds
});
