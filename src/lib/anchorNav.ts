'use client';

import type { MouseEvent } from 'react';

/**
 * Click handler for the "/#section" links in the header, footer and hero.
 *
 * Next.js treats a click on the hash that is already in the URL as a no-op, so
 * clicking a tab a second time would not scroll anywhere. When the target
 * exists on the current page we scroll it ourselves; when it does not (e.g.
 * from /impressum) we fall through and let the router navigate.
 */
export function handleAnchorClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
  // Leave new-tab / new-window clicks alone.
  if (event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const hash = href.split('#')[1];
  if (!hash) return;

  const target = document.getElementById(hash);
  if (!target) return; // different page — let Next.js handle the navigation

  event.preventDefault();

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  window.history.replaceState(null, '', `#${hash}`);
}
