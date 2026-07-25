'use client';

import { useSyncExternalStore } from 'react';

const noopSubscribe = () => () => {};

/**
 * `false` on the server and during the hydration pass, `true` afterwards.
 * Lets a component render client-only UI without a hydration mismatch.
 */
export function useIsHydrated() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );
}
