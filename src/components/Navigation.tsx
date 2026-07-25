'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { SECTIONS } from '@/lib/i18n/translations';
import { handleAnchorClick } from '@/lib/anchorNav';
import styles from './Navigation.module.css';

export default function Navigation() {
  const { language, t, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/#${SECTIONS.home}`, label: t.nav.home },
    { href: `/#${SECTIONS.services}`, label: t.nav.services },
    { href: `/#${SECTIONS.stories}`, label: t.nav.stories },
    { href: `/#${SECTIONS.philosophy}`, label: t.nav.philosophy },
    { href: `/#${SECTIONS.profile}`, label: t.nav.profile },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <Logo className={styles.mark} />
          <span className={styles.wordmark}>Talentbegleitung</span>
        </Link>

        <nav className={styles.desktopNav} aria-label={t.nav.menu}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={(e) => handleAnchorClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            onClick={toggleLanguage}
            className={styles.toggle}
            aria-label={language === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
          >
            <span className={language === 'de' ? styles.active : undefined}>DE</span>
            <span className={styles.slash}>/</span>
            <span className={language === 'en' ? styles.active : undefined}>EN</span>
          </button>

          <button
            className={styles.burger}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.close : t.nav.open}
            aria-expanded={open}
          >
            <span className={open ? styles.barTop : undefined} />
            <span className={open ? styles.barMid : undefined} />
            <span className={open ? styles.barBottom : undefined} />
          </button>
        </div>
      </div>

      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <nav aria-label={t.nav.menu}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.drawerLink}
              onClick={(e) => {
                // The open drawer locks body scrolling; release it before we
                // scroll, since the effect that restores it runs too late.
                document.body.style.overflow = '';
                setOpen(false);
                handleAnchorClick(e, link.href);
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
