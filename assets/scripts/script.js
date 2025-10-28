    
// navegación suave para los links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// funcionalidad del faq
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const wasActive = faqItem.classList.contains('active');
    
    // abrir faq una por una 
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    if (!wasActive) {
        faqItem.classList.add('active');
    }
}


 // efecto del encabezado
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        header.style.backdropFilter = 'none';
    }
});

 // Intersection Observer for animations
 const observerOptions = {
     threshold: 0.1,
     rootMargin: '0px 0px -50px 0px'
 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

 // animacion cards
 document.querySelectorAll('.service-card, .about-item, .team-member, .pricing-card, .testimonial-card').forEach(el => {
     observer.observe(el);
 });

document.querySelectorAll('.service-card, .pricing-card, .team-member').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = this.classList.contains('featured') ? 
            'scale(1.05) translateY(-8px)' : 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = this.classList.contains('featured') ? 
            'scale(1.05)' : 'translateY(0)';
    });
});

// circulos del testimonio
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
    });
});

// Active navigation highlighting based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-links a');
        
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.href.includes(current)) {
            link.classList.add('active');
        }
    });
});

    // Page navigation with smooth transitions
    let currentPage = 'home';

     function showPage(pageName) {
        // Hide current page
        const currentSection = document.getElementById(currentPage);
        if (currentSection) {
            currentSection.classList.remove('active');
        }

        // Show new page
        const newSection = document.getElementById(pageName);
        if (newSection) {
            setTimeout(() => {
                newSection.classList.add('active');
            }, 150);
        }

            currentPage = pageName;

            // Update header background based on page
            const header = document.querySelector('.header');
            if (pageName === 'home' || pageName === 'testimonials') {
                header.style.background = 'rgba(30, 58, 138, 0.9)';
            } else {
                header.style.background = '#1e3a8a';
            }
        }

// FAQ toggle functionality
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const wasActive = faqItem.classList.contains('active');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current FAQ
    if (!wasActive) {
        faqItem.classList.add('active');
    }
}

// Smooth header transition on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        header.style.backdropFilter = 'none';
    }
});


// Enhanced hover effects for cards
document.querySelectorAll('.service-card, .pricing-card, .team-member').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = this.classList.contains('featured') ? 
            'scale(1.05) translateY(-8px)' : 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = this.classList.contains('featured') ? 
            'scale(1.05)' : 'translateY(0)';
    });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.querySelector('.navbar__menu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});

