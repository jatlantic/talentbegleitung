export const COOKIE_STORAGE_KEY = 'tb-cookie-consent';
export const OPEN_COOKIE_SETTINGS = 'tb:open-cookie-settings';

export type CookieConsent = {
  necessary: true;
  analytics: boolean;
};

/** Footer link → cookie dialog, without threading state through the tree. */
export function openCookieSettings() {
  window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS));
}

function read(): CookieConsent | null {
  try {
    const raw = window.localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookieConsent>;
    return { necessary: true, analytics: Boolean(parsed.analytics) };
  } catch {
    return null;
  }
}

/* localStorage as an external store, so components can read it through
   useSyncExternalStore instead of setting state from an effect. */

let cached: CookieConsent | null | undefined;
const listeners = new Set<() => void>();

export function subscribeConsent(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getConsent(): CookieConsent | null {
  if (cached === undefined) cached = read();
  return cached;
}

/** The server (and the hydration pass) never knows the stored consent. */
export function getConsentOnServer(): CookieConsent | null {
  return null;
}

export function writeConsent(consent: CookieConsent) {
  cached = consent;
  window.localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(consent));
  listeners.forEach((listener) => listener());
}
