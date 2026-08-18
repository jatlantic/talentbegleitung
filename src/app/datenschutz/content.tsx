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
          <p className={styles.updated}>{t.privacy.updated}</p>

          {t.privacy.sections.map((section) => (
            <section key={section.heading} className={styles.section}>
              <h2 className={styles.heading}>{section.heading}</h2>
              {section.paragraphs && (
                <div className={styles.paragraphs}>
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              )}
              {section.lines && (
                <div className={styles.lines}>
                  {section.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              )}
              {section.links && (
                <div className={styles.links}>
                  {section.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  ))}
                </div>
              )}
            </section>
          ))}

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
