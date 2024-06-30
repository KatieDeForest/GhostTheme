document.addEventListener('DOMContentLoaded', function () {
    const reviews = Array.from(document.querySelectorAll('.review'));
    const totalReviews = reviews.length;
    let currentIndex = 0;
    let shuffledIndices = shuffleArray(Array.from({ length: totalReviews }, (_, i) => i));

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function showReviewSequence() {
        // Determine the indices for hiding, active, and upcoming reviews using shuffled order
        const hidingIndex = shuffledIndices[currentIndex % totalReviews];
        const activeIndex = shuffledIndices[(currentIndex + 1) % totalReviews];
        const upcomingIndex = shuffledIndices[(currentIndex + 2) % totalReviews];

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
