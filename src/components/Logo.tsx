import React from 'react';

/**
 * Talentbegleitung mark: three chevrons.
 * Drawn with `currentColor` so it inherits the surrounding text colour
 * (white on the blue-grey surfaces, brand blue-grey on white).
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 111 103"
      className={className}
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="18.15"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.59 5.29 L41.64 52.58 L7.30 96.39" />
      <path d="M35.69 5.29 L69.74 52.58 L35.40 96.39" />
      <path d="M64.64 5.29 L98.69 52.58 L64.35 96.39" />
    </svg>
  );
}
