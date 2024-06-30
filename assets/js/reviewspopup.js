// Add a click event listener to your existing review container element
const reviewContainer = document.querySelector('.reviews-container');

reviewContainer.addEventListener('click', function() {
    // Show the popup reviews container
    const popupContainer = document.querySelector('.popup-reviews-container');
    popupContainer.style.display = 'block';

    // Copy reviews from original container to popup container
    const reviews = this.querySelectorAll('.review');
    const popupReviews = document.querySelector('.popup-reviews');
    popupReviews.innerHTML = ''; // Clear existing content

    reviews.forEach(review => {
        popupReviews.appendChild(review.cloneNode(true));
    });

    // Add event listener to close the popup when clicking outside of it
    popupContainer.addEventListener('click', function(e) {
        if (e.target === this) {
            popupContainer.style.display = 'none';
        }
    });
});
