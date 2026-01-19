// Wait for the document to fully load before running functionality
document.addEventListener('DOMContentLoaded', () => {
    
    // --- MOBILE MENU FUNCTIONALITY ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Burger Animation (turning lines into X)
        burger.classList.toggle('toggle');
    });

    // --- SMOOTH SCROLLING FOR ANCHOR LINKS ---
    // This makes the page scroll nicely when you click "Products" or "Contact"
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu if it's open when a link is clicked
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});