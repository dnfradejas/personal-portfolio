// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenuToggle = document.getElementById('nav-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu (old hamburger - keeping for compatibility)
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Toggle new menu button
    if (navMenuToggle) {
        navMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navMenuToggle.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
            if (navMenuToggle) navMenuToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) || 
                                 (navToggle && navToggle.contains(event.target)) ||
                                 (navMenuToggle && navMenuToggle.contains(event.target));
        
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
            if (navMenuToggle) navMenuToggle.classList.remove('active');
        }
    });

    // Close menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
            if (navMenuToggle) navMenuToggle.classList.remove('active');
        }
    });
});
