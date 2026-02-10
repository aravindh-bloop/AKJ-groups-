// ===========================
// NAVIGATION SCROLL EFFECT
// ===========================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===========================
// MOBILE MENU TOGGLE
// ===========================
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===========================
// SMOOTH SCROLL & ACTIVE LINK
// ===========================
const sections = document.querySelectorAll('section');

const observerOptions = {
    threshold: 0.3,
    rootMargin: '-100px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// ===========================
// ANIMATED COUNTER
// ===========================
const statNumbers = document.querySelectorAll('.stat-number');
let hasAnimated = false;

const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            statNumbers.forEach(stat => {
                animateCounter(stat);
            });
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// ===========================
// SCROLL REVEAL ANIMATION
// ===========================
const revealElements = document.querySelectorAll('.service-card, .project-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(element);
});

// ===========================
// FORM SUBMISSION
// ===========================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };

    // Show success message (in production, this would send to a server)
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');

    // Reset form
    contactForm.reset();

    console.log('Form submitted:', formData);
});

// ===========================
// VIDEO OPTIMIZATION
// ===========================
const heroVideo = document.getElementById('heroVideo');

// Pause video when not in viewport to save resources
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            heroVideo.play();
        } else {
            heroVideo.pause();
        }
    });
}, { threshold: 0.5 });

if (heroVideo) {
    videoObserver.observe(heroVideo);
}

// ===========================
// SMOOTH SCROLL POLYFILL
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// PARALLAX EFFECT (SUBTLE)
// ===========================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.video-container');

    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===========================
// LAZY LOADING OPTIMIZATION
// ===========================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy operations
const debouncedScroll = debounce(() => {
    // Any heavy scroll operations can go here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ===========================
// ACCESSIBILITY ENHANCEMENTS
// ===========================
// Keyboard navigation for mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinksContainer.classList.contains('active')) {
        navLinksContainer.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Focus trap for mobile menu
const focusableElements = navLinksContainer.querySelectorAll('a, button');
const firstFocusable = focusableElements[0];
const lastFocusable = focusableElements[focusableElements.length - 1];

navLinksContainer.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    }
});

// ===========================
// LOADING OPTIMIZATION
// ===========================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Start any animations that should happen on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
    }
});

// ===========================
// RESPONSIVE VIDEO HANDLING
// ===========================
function handleVideoSource() {
    const video = document.getElementById('heroVideo');
    const isMobile = window.innerWidth <= 768;

    // In production, you might want to load a lower resolution video for mobile
    if (isMobile && video) {
        video.setAttribute('playsinline', '');
    }
}

handleVideoSource();
window.addEventListener('resize', debounce(handleVideoSource, 250));

// ===========================
// CONSOLE BRANDING
// ===========================
console.log(
    '%cAKJ Groups',
    'font-size: 24px; font-weight: bold; color: #92AA83; font-family: Playfair Display, serif;'
);
console.log(
    '%cBuilding Dreams Into Reality Since 1995',
    'font-size: 14px; color: #6B7280; font-family: Inter, sans-serif;'
);
