/* DentaCore standalone landing page — minimal behavior, calm interactions, no framework. */
(function () {
  const header = document.querySelector('.site-header');
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  window.addEventListener('scroll', function () {
    if (header) header.classList.toggle('scrolled', window.scrollY > 16);
  }, { passive: true });

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة');
      menuToggle.textContent = open ? '×' : '☰';
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'فتح القائمة');
        menuToggle.textContent = '☰';
      });
    });
  }

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxClose = document.getElementById('lightboxClose');

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    if (lightboxImage) lightboxImage.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.media-frame img, .feature-image img').forEach(function (image) {
    image.addEventListener('click', function () {
      if (!lightbox || !lightboxImage || image.style.display === 'none') return;
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeLightbox();
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
