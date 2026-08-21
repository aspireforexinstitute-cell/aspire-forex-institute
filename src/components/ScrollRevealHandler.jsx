import { useEffect } from 'react';

export default function ScrollRevealHandler() {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        } else {
          // Re-trigger animation on every scroll up / down
          entry.target.classList.remove('is-revealed');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -30px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Target sections, cards, section headers and accordion items
    const elementsToReveal = document.querySelectorAll(
      'section, .glass-card, .glass-card-static, .section-header, .faq-item'
    );

    elementsToReveal.forEach((el) => {
      if (!el.classList.contains('reveal-on-scroll')) {
        el.classList.add('reveal-on-scroll');
      }
      observer.observe(el);
    });

    return () => {
      elementsToReveal.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
