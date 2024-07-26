function toggleInvertColors() {
    var elements = ['menu', 'hamburger', 'floating-section', 'floating-logo', 'reviews-container'];
    elements.forEach(function (cls) {
        document.querySelector('.' + cls).classList.toggle('invert');
    });
}

document.querySelector('.tdnn').addEventListener('click', toggleInvertColors);

document.getElementById('hamburger').addEventListener('click', function () {
    this.classList.toggle('open');
    document.getElementById('menu').classList.toggle('open');
});

function tdnn() {
    var body = document.body;
    var moon = document.querySelector('.moon');
    var tdnn = document.querySelector('.tdnn');
    moon.classList.toggle('sun');
    tdnn.classList.toggle('day');
    body.classList.toggle('light');
}
