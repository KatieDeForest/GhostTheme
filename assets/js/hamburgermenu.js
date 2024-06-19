// Function to handle toggling of invert colors for menu and hamburger
function toggleInvertColors() {
    document.querySelector('.menu').classList.toggle('invert');
    document.querySelector('.hamburger').classList.toggle('invert');
}

// Add event listener to toggle invert colors on button click
document.getElementById('invert-colors-button').addEventListener('click', function() {
    toggleInvertColors();
});

// Add event listener to toggle hamburger menu and related styles
document.getElementById('hamburger').addEventListener('click', function () {
    this.classList.toggle('open');
    var menu = document.getElementById('menu');
    menu.classList.toggle('open');
});