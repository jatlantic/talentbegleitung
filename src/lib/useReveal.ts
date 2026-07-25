'use client';

import { useEffect } from 'react';

/**
 * Fades `[data-reveal]` elements in as they scroll into view.
 * Elements already on screen at mount are shown immediately (no flash), and
 * everything is shown unconditionally when motion is reduced or IO is missing.
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => (el.dataset.reveal = 'shown'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.reveal = 'shown';
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );

    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
        el.dataset.reveal = 'shown';
      } else {
        el.dataset.reveal = 'pending';
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);
}
