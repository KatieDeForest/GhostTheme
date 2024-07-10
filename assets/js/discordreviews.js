document.addEventListener('DOMContentLoaded', function () {
    const reviewsContainer = document.getElementById('reviews-container');

    // Fetch reviews from Disboard
    fetch('https://disboard.org/server/reviews/1092815830678503446')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const reviews = Array.from(doc.querySelectorAll('.review'));

            const reviewsData = reviews.map(review => {
                const header = review.querySelector('.span-header').textContent;
                const paragraphs = review.querySelector('.paragraphs').textContent;
                const user = review.querySelector('.span-user').textContent;
                const stars = review.querySelector('.span-stars').textContent;

                return { header, paragraphs, user, stars };
            });

            createReviewElements(reviewsData);
            showReviewSequence();
            setInterval(showReviewSequence, 8000);
        })
        .catch(error => console.error('Error fetching reviews:', error));

    // Function to create review elements from fetched data
    function createReviewElements(reviewsData) {
        reviewsData.forEach((review, index) => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.setAttribute('data-index', index);

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

    // Function to shuffle array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to show review sequence
    function showReviewSequence() {
        const reviews = Array.from(document.querySelectorAll('.review'));
        const totalReviews = reviews.length;
        let currentIndex = 0;
        let shuffledIndices = shuffleArray(Array.from({ length: totalReviews }, (_, i) => i));

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
});
