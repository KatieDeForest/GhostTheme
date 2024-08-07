document.getElementById('portfolio-button').addEventListener('click', function() {
    const button = this;
    button.classList.add('animate');
    
    // Remove the class after the animation completes to reset the state
    button.addEventListener('animationend', function() {
        button.classList.remove('animate');
    }, { once: true });
});