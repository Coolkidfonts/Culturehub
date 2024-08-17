document.addEventListener('DOMContentLoaded', () => {
    // Function to load songs and initialize event listeners
});
function toggleMenu() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    } else {
        navLinks.classList.add('show');
    }
}
