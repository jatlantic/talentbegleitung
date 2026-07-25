'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { openCookieSettings } from '@/lib/cookies';
import styles from '../legal.module.css';

export default function PrivacyContent() {
  const { t } = useLanguage();

  return (
    <>
      <Navigation />
      <main className={styles.page}>
        <div className={styles.inner}>
          <Link href="/" className={styles.back}>
            <span aria-hidden="true">←</span> {t.footer.back}
          </Link>
          <h1 className={styles.title}>{t.privacy.title}</h1>

          <p className={styles.notice}>{t.privacy.placeholder}</p>

          <section className={styles.section}>
            <h2 className={styles.heading}>{t.privacy.controllerTitle}</h2>
            <div className={styles.lines}>
              {t.privacy.controller.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>{t.privacy.rightsTitle}</h2>
            <div className={styles.paragraphs}>
              <p>{t.privacy.rights}</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>{t.cookies.title}</h2>
            <div className={styles.paragraphs}>
              <p>{t.cookies.text}</p>
            </div>
            <button type="button" onClick={openCookieSettings} className={styles.back}>
              {t.cookies.open}
            </button>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
