'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useTheme } from '@/lib/theme/ThemeContext';
import styles from './Navigation.module.css';

export default function Navigation() {
  const { language, t, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          M. Schäfer
          <span>Talentbegleiter</span>
        </Link>
        
        <div className={styles.links}>
          <div className={styles.linksNav}>
            <Link href="#services" className={styles.link}>{t.nav.services}</Link>
            <Link href="#experience" className={styles.link} style={{ marginLeft: '40px' }}>{t.nav.experience}</Link>
            <Link href="#about" className={styles.link} style={{ marginLeft: '40px' }}>{t.nav.about}</Link>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button onClick={toggleLanguage} className={styles.toggle} aria-label="Toggle language">
              <span style={{ opacity: language === 'de' ? 1 : 0.4 }}>DE</span>
              /
              <span style={{ opacity: language === 'en' ? 1 : 0.4 }}>EN</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
