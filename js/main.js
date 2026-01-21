
// Mobile navigation toggle
(function() {
    const toggleButton = document.querySelector('.mobile-nav-toggle');
    const nav = document.querySelector('.main-nav');
    
    if (toggleButton && nav) {
        toggleButton.addEventListener('click', function() {
            const isOpen = nav.classList.toggle('is-open');
            toggleButton.setAttribute('aria-expanded', isOpen);
        });
    }
})();

// Smooth scroll for anchor links
(function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
})();
