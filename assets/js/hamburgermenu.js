// Function to handle toggling of invert colors for menu and hamburger
function toggleInvertColors() {
    var menu = document.querySelector('.menu');
    var hamburger = document.querySelector('.hamburger');
    var floatingsection = document.querySelector('.floating-section');

    menu.classList.toggle('invert');
    hamburger.classList.toggle('invert');
    floatingsection.classList.toggle('invert');
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
    var body = document.getElementsByTagName("BODY")[0];
    var moon = document.getElementsByClassName("moon")[0];
    var tdnn = document.getElementsByClassName("tdnn")[0];

    moon.classList.toggle("sun");
    tdnn.classList.toggle("day");
    body.classList.toggle("light");
}
