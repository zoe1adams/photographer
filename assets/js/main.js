document.addEventListener('DOMContentLoaded', () => {
  // === CUSTOM CURSOR ===
  const cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  // === THEME TOGGLE ===
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if (currentTheme === 'light') {
    document.body.classList.add('light');
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const theme = document.body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
  });

  // === AUDIO & MOTION TOGGLES ===
  const audio = document.getElementById('bg-music');
  const audioToggle = document.getElementById('audio-toggle');
  const motionToggle = document.getElementById('motion-toggle');

  audioToggle.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      audioToggle.textContent = '🔇';
    } else {
      audio.pause();
      audioToggle.textContent = '🔊';
    }
  });

  motionToggle.addEventListener('click', () => {
    document.body.classList.toggle('reduced-motion');
    const isReduced = document.body.classList.contains('reduced-motion');
    motionToggle.textContent = isReduced ? '🌙 Motion Off' : '✨ Motion On';
  });

  // === GSAP SCROLL ANIMATIONS ===
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".panel").forEach((panel, i) => {
    gsap.from(panel, {
      scrollTrigger: {
        trigger: panel,
        start: "top 80%",
        toggleActions: "play none none reset"
      },
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out"
    });
  });

  // === FLIP GALLERY MODAL ===
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('gallery-modal');
  const modalImg = document.getElementById('modal-img');
  const modalClose = document.getElementById('modal-close');

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const bg = item.style.backgroundImage;
      const url = bg.slice(5, -2); // remove `url("...")`
      modalImg.src = url;
      modal.style.display = 'flex';

      // Optional: add FLIP animation logic here later
    });
  });

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.style.display = 'none';
    }
  });
});
