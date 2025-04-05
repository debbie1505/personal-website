document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, // Offset for any fixed header
          behavior: "smooth",
        });
      }
    });
  });

  // Animate sections on scroll
  const stickySection = document.querySelector(".sticky-section");
  if (stickySection) {
    window.addEventListener("scroll", function () {
      const scrollTop = window.scrollY;
      stickySection.style.transform = `translateY(${scrollTop * -0.5}px)`;
    });
  }

  // Animate skill cards
  const skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 200 * (index + 1));
  });

  // Project cards hover effect
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)";
      card.style.transition = "transform 0.3s ease";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });

  // Typing effect for tagline
  const tagline = document.querySelector(".tagline");
  if (tagline) {
    const text = tagline.textContent;
    tagline.textContent = "";
    let index = 0;
    function typeWriter() {
      if (index < text.length) {
        tagline.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
      }
    }
    setTimeout(typeWriter, 1000);
  }

  // Parallax effect for hero section
  const heroSection = document.querySelector(".hero-section-container");
  if (heroSection) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
  }

  // Set up IntersectionObserver options
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px",
  };

  // Animate timeline items
  const timelineItems = document.querySelectorAll(".timeline-item");
  const timelineObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateX(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  timelineItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateX(-50px)";
    item.style.transition = "all 0.5s ease-out";
    timelineObserver.observe(item);
  });

  // Fade-in animation for sections
  const fadeElements = document.querySelectorAll(".fade-in.hidden");
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden");
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach((el) => fadeObserver.observe(el));
});
