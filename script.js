// Scroll animation type shi
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15, 
    rootMargin: '0px 0px -50px 0px' 
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// smooth scroll idk
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

// navbar effect 
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

// mobile/small device ui change
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

if (burger) {
    burger.addEventListener('click', () => {
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

// Email part yoink
const emailOrb = document.getElementById('email-orb');
const emailModal = document.getElementById('email-modal');
const closeModal = document.querySelector('.close-modal');
const emailForm = document.getElementById('email-form');

if (emailOrb && emailModal) {
    emailOrb.addEventListener('click', () => {
        emailModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
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
            const submitBtn = emailForm.querySelector('.btn');
            const originalText = submitBtn.innerText;
            
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(`Thanks ${name}! Your message has been sent somewhere atleast.`);
                emailForm.reset();
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                emailModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 1500);
        }
    });
}

// Add sum effect
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollValue = window.scrollY;
    if (hero) {
        hero.style.backgroundPositionY = `${scrollValue * 0.5}px`;
    }
});

// Back to Top Button at right bottom
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
