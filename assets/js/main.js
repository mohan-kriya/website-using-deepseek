// assets/js/main.js

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const active = navMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', active ? 'true' : 'false');
        });
    }
    
    // NOTE: We open dropdowns via the inline script in index.html (click-based).
    // Avoid adding another .dropdown-toggle handler here to prevent double toggling.

    // Products submenu (mobile): tap a category to expand/collapse its product list
    const productCategories = document.querySelectorAll('#products-dropdown .dropdown-category');

    productCategories.forEach(link => {
        link.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();

                const column = this.closest('.dropdown-column');
                const allColumns = column.parentElement.querySelectorAll('.dropdown-column');

                // Close other open columns
                allColumns.forEach(c => {
                    if (c !== column) c.classList.remove('open');
                });

                // Toggle this one
                column.classList.toggle('open');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Certification hover effects
    const certItems = document.querySelectorAll('.cert-logo');
    certItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.filter = 'grayscale(0)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.filter = 'grayscale(1)';
        });
    });
});
