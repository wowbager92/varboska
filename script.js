// script.js
const scanner = document.querySelector('.scanner');
const banner = document.querySelector('.banner');

function animateScanner() {
    scanner.style.left = '-100%'; // Start the line off the left side
    scanner.style.transition = 'none'; // Remove any existing transition
    setTimeout(() => {
        scanner.style.transition = 'left 2s linear'; // Apply the transition
        scanner.style.left = '100%'; // Move the line to the right
        setTimeout(() => {
            animateScanner(); // Repeat the animation
        }, 2000); // Adjust the animation duration (in milliseconds)
    }, 100); // Delay before starting the animation
}

banner.addEventListener('animationend', () => {
    scanner.style.transition = 'none'; // Remove transition at the end
    scanner.style.left = '-100%'; // Reset the line to the left side
});

animateScanner();
