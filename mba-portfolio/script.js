document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    // Sticky Navbar shadow on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Navbar Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinksList = document.querySelectorAll('.nav-links a');

    function toggleMobileMenu() {
        navbar.classList.toggle('mobile-active');
    }

    function closeMobileMenu() {
        navbar.classList.remove('mobile-active');
    }

    hamburger.addEventListener('click', toggleMobileMenu);

    // Close menu when a navigation link is clicked
    navLinksList.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
    });

    // Scroll to Top Button functionality
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Update URL hash without jumping
        if (history.pushState) {
            history.pushState(null, null, '#home');
        } else {
            location.hash = '#home';
        }
    });

    // Scroll Animations Observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: unobserve if you only want it to animate once
                // scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        scrollObserver.observe(el);
    });

});
