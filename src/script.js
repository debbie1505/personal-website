document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate sections on scroll
    window.addEventListener('scroll', function(){
        const element = document.querySelector('sticy-section');
        const scrollTop = window.scrollY;
        element.style.transform = `TranslateY(${scrollTop * - 0.5}px)`;
    });
    // Animate skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 200 * (index + 1));
    });

    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = "translateY(-10px)";
            card.style.transition = "transform 0.3s ease";
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = "translateY(0)";
        });
    });

    // Typing effect for tagline
    const tagline = document.querySelector('.tagline');
    const text = tagline.textContent;
    tagline.textContent = '';
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            tagline.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }

    setTimeout(typeWriter, 1000);

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section-container');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateX(0)";
                observer.unobserve(entry.target);
            }
        });
    }, options);

    timelineItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateX(-50px)";
        item.style.transition = "all 0.5s ease-out";
        timelineObserver.observe(item);
    });
});


/*const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      entry.target.style.opacity = "0";
    } else {
      entry.target.style.opacity = "1";
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));

*/
/*
document.getElementById('year').textContent = new Date().getFullYear();

const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
      entry.target.classList.add('exit');
    } else {
      entry.target.classList.remove('exit');
    }
  });
}, { threshold: 0 });

sections.forEach(section => observer.observe(section));
*/
const elements = document.querySelectorAll('.fade-in.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('hidden');
      observer.unobserve(entry.target); // Stop observing once it's visible
    }
  });
});

elements.forEach((el) => observer.observe(el));
