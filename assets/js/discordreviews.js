document.addEventListener('DOMContentLoaded', function () {
    const reviews = document.querySelectorAll('.review');
    const totalReviews = reviews.length;
    let currentIndex = 0;

    function showReviewSequence() {
        // Determine the indices for hiding, active, and upcoming reviews
        const hidingIndex = currentIndex % totalReviews;
        const activeIndex = (currentIndex + 1) % totalReviews;
        const upcomingIndex = (currentIndex + 2) % totalReviews;

        // Remove all classes from reviews
        reviews.forEach(review => {
            review.classList.remove('active', 'hiding');
        });

        // Add classes based on current indices
        reviews[hidingIndex].classList.add('hiding');
        reviews[activeIndex].classList.add('active');
        reviews[upcomingIndex].classList.remove('active', 'hiding');

        // Increment currentIndex to move to the next review sequence
        currentIndex = (currentIndex + 1) % totalReviews;
    }

    // Show the initial review sequence
    showReviewSequence();

    // Set interval to switch reviews every 3 seconds
    setInterval(showReviewSequence, 3000);
});
