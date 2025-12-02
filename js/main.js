// Mouse-follow spotlight on hero
const hero = document.querySelector('.hero');

hero.addEventListener('mousemove', (e) => {
  const { left, top, width, height } = hero.getBoundingClientRect();
  const x = ((e.clientX - left) / width) * 100 + '%';
  const y = ((e.clientY - top) / height) * 100 + '%';

  hero.style.setProperty('--mx', x);
  hero.style.setProperty('--my', y);
});

// Optional: Add subtle fade-in when cards enter viewport
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 0;
      entry.target.style.transform = 'translateY(50px)';
      setTimeout(() => {
        entry.target.style.transition = 'all 0.8s ease-out';
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }, 100);
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));
