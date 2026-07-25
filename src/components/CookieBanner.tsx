'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import {
  OPEN_COOKIE_SETTINGS,
  getConsent,
  getConsentOnServer,
  subscribeConsent,
  writeConsent,
} from '@/lib/cookies';
import { useIsHydrated } from '@/lib/useIsHydrated';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
  const { t } = useLanguage();
  const hydrated = useIsHydrated();
  const consent = useSyncExternalStore(subscribeConsent, getConsent, getConsentOnServer);

  // Reopened from the footer / privacy page even though a choice exists.
  const [reopened, setReopened] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const onOpen = () => {
      setAnalytics(getConsent()?.analytics ?? false);
      setExpanded(true);
      setReopened(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS, onOpen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, onOpen);
  }, []);

  const decide = (withAnalytics: boolean) => {
    writeConsent({ necessary: true, analytics: withAnalytics });
    setReopened(false);
    setExpanded(false);
  };

  // Nothing renders until after hydration, so a returning visitor with a
  // stored choice never sees the banner flash past.
  const visible = hydrated && (reopened || consent === null);
  if (!visible) return null;

  return (
    <div className={styles.wrap} role="dialog" aria-modal="false" aria-label={t.cookies.title}>
      <div className={styles.panel}>
        <div className={styles.body}>
          <h2 className={styles.title}>{t.cookies.title}</h2>
          <p className={styles.text}>{t.cookies.text}</p>

          {expanded && (
            <div className={styles.options}>
              <label className={styles.option}>
                <input type="checkbox" checked disabled readOnly />
                <span>
                  <strong>{t.cookies.necessary}</strong>
                  <em>{t.cookies.necessaryHint}</em>
                </span>
              </label>
              <label className={styles.option}>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                <span>
                  <strong>{t.cookies.analytics}</strong>
                  <em>{t.cookies.analyticsHint}</em>
                </span>
              </label>
            </div>
          )}

          <Link href="/datenschutz" className={styles.privacyLink}>
            {t.footer.privacy}
          </Link>
        </div>

        <div className={styles.actions}>
          {expanded ? (
            <button className={styles.primary} onClick={() => decide(analytics)}>
              {t.cookies.save}
            </button>
          ) : (
            <>
              <button className={styles.ghost} onClick={() => setExpanded(true)}>
                {t.cookies.title}
              </button>
              <button className={styles.ghost} onClick={() => decide(false)}>
                {t.cookies.necessaryOnly}
              </button>
              <button className={styles.primary} onClick={() => decide(true)}>
                {t.cookies.accept}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
