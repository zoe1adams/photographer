document.addEventListener('DOMContentLoaded', () => {
  // === Smooth Anchor Link Scrolling ===
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

  // === Optional: Scroll-to-top Button (if you add one) ===
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
      scrollToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
  }

  // === Scroll Snapping Polyfill Fallback ===
  if (!CSS.supports("scroll-snap-type")) {
    console.warn("Scroll snap not supported – consider polyfill if needed.");
  }

  // === Optional Future: Section Tracking ===
  // You can use IntersectionObserver here to highlight nav or build scroll progress bars
});
// JS will be added soon
