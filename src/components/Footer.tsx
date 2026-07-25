'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { SECTIONS } from '@/lib/i18n/translations';
import { openCookieSettings } from '@/lib/cookies';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { href: `/#${SECTIONS.home}`, label: t.nav.home },
    { href: `/#${SECTIONS.services}`, label: t.nav.services },
    { href: `/#${SECTIONS.stories}`, label: t.nav.stories },
    { href: `/#${SECTIONS.philosophy}`, label: t.nav.philosophy },
    { href: `/#${SECTIONS.profile}`, label: t.nav.profile },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.brandRow}>
            <Logo className={styles.mark} />
            <span className={styles.wordmark}>Talentbegleitung</span>
          </Link>
          <p className={styles.tagline}>{t.footer.tagline}</p>
        </div>

        <div className={styles.column}>
          <h2 className={styles.columnTitle}>{t.footer.navTitle}</h2>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.column}>
          <h2 className={styles.columnTitle}>{t.footer.contactTitle}</h2>
          <span className={styles.static}>{t.contact.name}</span>
          <a href={`tel:${t.contact.phone.replace(/[^0-9+]/g, '')}`} className={styles.link}>
            {t.contact.phone}
          </a>
          <a href={`mailto:${t.contact.email}`} className={styles.link}>
            {t.contact.email}
          </a>
        </div>

        <div className={styles.column}>
          <h2 className={styles.columnTitle}>{t.footer.legalTitle}</h2>
          <Link href="/impressum" className={styles.link}>
            {t.footer.imprint}
          </Link>
          <Link href="/datenschutz" className={styles.link}>
            {t.footer.privacy}
          </Link>
          <button type="button" onClick={openCookieSettings} className={styles.linkButton}>
            {t.footer.cookies}
          </button>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>
          &copy; {new Date().getFullYear()} Marie-Louise Schäfer, Talentbegleitung. {t.footer.rights}
        </span>
        <span>Bayerisch Gmain</span>
      </div>
    </footer>
  );
}
