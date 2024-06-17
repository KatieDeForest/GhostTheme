document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const iconX = document.getElementById('icon-x');

    hamburgerMenu.addEventListener('click', function () {
        // Toggle open/close classes for hamburger menu
        hamburgerMenu.classList.toggle('open');
        
        // Toggle visibility of nav menu
        if (navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            iconX.style.display = 'none'; // Hide X icon
        } else {
            navMenu.classList.add('open');
            iconX.style.display = 'block'; // Show X icon
        }
    });
});