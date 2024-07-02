// Import reviews from JSON file
import reviewsData from './reviews.json' with { type: 'json' };

document.addEventListener('DOMContentLoaded', function () {
    const reviewsContainer = document.querySelector('#reviews-container'); // Make sure to have a container element in your HTML to hold the reviews

    // Function to create review elements from JSON data
    function createReviewElements(reviewsData) {
        reviewsData.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');

            const headerElement = document.createElement('span');
            headerElement.classList.add('span-header');
            headerElement.textContent = review.header;

            const paragraphsElement = document.createElement('p');
            paragraphsElement.classList.add('paragraphs');
            paragraphsElement.textContent = review.paragraphs;

            const userElement = document.createElement('span');
            userElement.classList.add('span-user');
            userElement.textContent = review.user;

            const starsElement = document.createElement('span');
            starsElement.classList.add('span-stars');
            starsElement.textContent = review.stars;

            reviewElement.appendChild(headerElement);
            reviewElement.appendChild(paragraphsElement);
            reviewElement.appendChild(userElement);
            reviewElement.appendChild(starsElement);

            reviewsContainer.appendChild(reviewElement);
        });
    }

    // Create review elements
    createReviewElements(reviewsData);

    // Get all review elements after they've been added to the DOM
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
    setInterval(showReviewSequence, 5000);
});
