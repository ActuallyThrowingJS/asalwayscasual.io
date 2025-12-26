// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // Initial check

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(15, 12, 41, 0.95)';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
    } else {
        header.style.background = 'rgba(15, 12, 41, 0.8)';
        header.style.boxShadow = 'none';
    }
});

// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

if (burger) {
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Email Modal Logic
const emailOrb = document.getElementById('email-orb');
const emailModal = document.getElementById('email-modal');
const closeModal = document.querySelector('.close-modal');
const emailForm = document.getElementById('email-form');

if (emailOrb && emailModal) {
    emailOrb.addEventListener('click', () => {
        emailModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    closeModal.addEventListener('click', () => {
        emailModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === emailModal) {
            emailModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

if (emailForm) {
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('sender-name').value;
        const email = document.getElementById('sender-email').value;
        const message = document.getElementById('sender-message').value;

        if (name && email && message) {
            alert(`Thanks ${name}! Your message has been sent.`);
            emailForm.reset();
            emailModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}
