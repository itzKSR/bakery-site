
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Hero animation
    setTimeout(() => {
        document.querySelector('.hero').classList.add('animate');
    }, 100);
    
    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.section, .product-card').forEach(el => {
        observer.observe(el);
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add hover effect to social icons
    document.querySelectorAll('.social-links a').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-5px)';
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0)';
        });
    });
});


// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBE27riVZF47qGcP_Tb4DkkOkB1agPer6c",
  authDomain: "sweet-delights-bakery-b9bfa.firebaseapp.com",
  projectId: "sweet-delights-bakery-b9bfa",
  storageBucket: "sweet-delights-bakery-b9bfa.firebasestorage.app",
  messagingSenderId: "850650886927",
  appId: "1:850650886927:web:f81cb07ee326c0cdac447a",
  measurementId: "G-5YKJRXP5G8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.getAnalytics(app);
