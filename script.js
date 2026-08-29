// DentaCore Landing Page — minimal interactive script
// يتعامل مع: 1) تأثير الهيدر عند الـ scroll
//              2) قائمة الموبايل (open/close)
//              3) الـ smooth scroll للروابط الداخلية
//              4) تحديث السنة تلقائياً في الفوتر

(function () {
  'use strict';

  // ====== 1) تأثير الهيدر عند الـ scroll ======
  const header = document.getElementById('siteHeader');
  const setScrolledState = () => {
    if (!header) return;
    if (window.scrollY > 24) {
      header.classList.add('site-header--scrolled');
    } else {
      header.classList.remove('site-header--scrolled');
    }
  };
  setScrolledState();
  window.addEventListener('scroll', setScrolledState, { passive: true });

  // ====== 2) قائمة الموبايل ======
  const menuToggle = document.getElementById('menuToggle');
  const desktopNav = document.getElementById('desktopNav');
  if (menuToggle && desktopNav) {
    const closeMenu = () => {
      desktopNav.classList.remove('desktop-nav--open');
      menuToggle.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'فتح القائمة');
    };
    const openMenu = () => {
      desktopNav.classList.add('desktop-nav--open');
      menuToggle.classList.add('is-open');
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.setAttribute('aria-label', 'إغلاق القائمة');
    };
    menuToggle.addEventListener('click', () => {
      if (desktopNav.classList.contains('desktop-nav--open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
    // إغلاق القائمة لما المستخدم يضغط على لينك
    desktopNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  // ====== 3) Smooth scroll للروابط الداخلية (مع مراعاة الـ header الثابت) ======
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight + 1;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });
  });

  // ====== 4) تحديث السنة تلقائياً في الفوتر ======
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
