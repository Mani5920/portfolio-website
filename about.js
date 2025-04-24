document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.about-content p, .skills-section, .resume-button').forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  });
  