// Select elements
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Safety check (prevents errors)
if (hamburger && menu) {

    hamburger.addEventListener('click', () => {

        // Toggle active state on hamburger (for X animation)
        hamburger.classList.toggle('active');

        // Toggle menu visibility
        menu.classList.toggle('open');
    });

}
