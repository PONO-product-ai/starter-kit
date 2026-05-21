'use strict';

// ============================================
// Scroll Fade-in — Intersection Observer
// ============================================
(function () {
  const fadeEls = document.querySelectorAll('.fade-in');
  if (!fadeEls.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -32px 0px',
    }
  );

  fadeEls.forEach(function (el) {
    observer.observe(el);
  });
})();

// ============================================
// FAQ Accordion
// ============================================
(function () {
  const faqItems = document.querySelectorAll('.faq__item');
  if (!faqItems.length) return;

  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq__question');
    if (!question) return;

    function toggle() {
      const isOpen = item.classList.contains('open');

      // Close all items
      faqItems.forEach(function (i) {
        i.classList.remove('open');
        const q = i.querySelector('.faq__question');
        if (q) q.setAttribute('aria-expanded', 'false');
      });

      // Open this item if it was closed
      if (!isOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    }

    question.addEventListener('click', toggle);

    question.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
})();

// ============================================
// Hero scroll link — smooth scroll
// ============================================
(function () {
  const scrollLink = document.querySelector('.hero__scroll');
  if (!scrollLink) return;

  scrollLink.addEventListener('click', function (e) {
    const href = scrollLink.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
})();
