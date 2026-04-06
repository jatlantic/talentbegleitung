'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            M. Schäfer
            <span>Talentbegleiter</span>
          </div>
          <p className={styles.desc}>
            {t.contact.subtitle}
          </p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>{t.nav.contact}</h4>
          <a href={`tel:${t.contact.phone.replace(/[^0-9+]/g, '')}`} className={styles.link}>
            {t.contact.phone}
          </a>
          <a href={`mailto:${t.contact.email}`} className={styles.link}>
            {t.contact.email}
          </a>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>Menu</h4>
          <Link href="#services" className={styles.link}>{t.nav.services}</Link>
          <Link href="#experience" className={styles.link}>{t.nav.experience}</Link>
          <Link href="#about" className={styles.link}>{t.nav.about}</Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <div>&copy; {new Date().getFullYear()} Marie-Louise Schäfer. All rights reserved.</div>
        <div>München & Salzburg</div>
      </div>
    </footer>
  );
}
