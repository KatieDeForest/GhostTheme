// Function to handle toggling of invert colors for menu and hamburger
function toggleInvertColors() {
    var menu = document.querySelector('.menu');
    var hamburger = document.querySelector('.hamburger');
    var icon = document.querySelector('#invert-colors-button .darkmodeicon');
    var invertButton = document.getElementById('invert-colors-button');

    menu.classList.toggle('invert');
    hamburger.classList.toggle('invert');

    if (menu.classList.contains('invert')) {
        icon.textContent = '☀️'; // Sun icon for light mode
    } else {
        icon.textContent = '🌙'; // Moon icon for dark mode
    }

    invertButton.classList.toggle('animate');
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
