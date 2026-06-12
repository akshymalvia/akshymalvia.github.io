/*
  Personal resume — Akshay Malviya
  Cursor glow, scroll-spy nav, reveal-on-scroll. No dependencies.
*/

(() => {
  'use strict';

  // Cursor-following glow (pointer devices only)
  const glow = document.querySelector('.glow');
  if (glow && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (event) => {
      glow.style.setProperty('--x', `${event.clientX}px`);
      glow.style.setProperty('--y', `${event.clientY}px`);
    });
  }

  // Scroll-spy: highlight the nav link of the section in view
  const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
  const sections = navLinks.map((link) => document.querySelector(link.hash)).filter(Boolean);

  if (sections.length) {
    const setActive = (id) => {
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.hash === `#${id}`);
      });
    };

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach((section) => spy.observe(section));
  }

  // Reveal sections as they enter the viewport
  const revealables = document.querySelectorAll('.reveal');
  const reveal = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealables.forEach((element) => reveal.observe(element));

  // Keep the footer year current
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
