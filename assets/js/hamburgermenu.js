// Function to handle toggling of invert colors for menu and hamburger
function toggleInvertColors() {
    var menu = document.querySelector('.menu');
    var hamburger = document.querySelector('.hamburger');

    menu.classList.toggle('invert');
    hamburger.classList.toggle('invert');
}

// Add event listener to toggle invert colors when clicking switch container
document.querySelector('.tdnn').addEventListener('click', function () {
    toggleInvertColors();
});

// Add event listener to toggle hamburger menu and related styles
document.getElementById('hamburger').addEventListener('click', function () {
    this.classList.toggle('open');
    var menu = document.getElementById('menu');
    menu.classList.toggle('open');
});

function tdnn() {
    document.getElementsByClassName("moon")[0].classList.toggle("sun");
    document.getElementsByClassName("tdnn")[0].classList.toggle("day");
    document.getElementsByTagName("BODY")[0].classList.toggle("light");
}
