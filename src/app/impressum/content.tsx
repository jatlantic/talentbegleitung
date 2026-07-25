'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import styles from '../legal.module.css';

export default function ImprintContent() {
  const { t } = useLanguage();

  return (
    <>
      <Navigation />
      <main className={styles.page}>
        <div className={styles.inner}>
          <Link href="/" className={styles.back}>
            <span aria-hidden="true">←</span> {t.footer.back}
          </Link>
          <h1 className={styles.title}>{t.imprint.title}</h1>

          {t.imprint.sections.map((section) => (
            <section key={section.heading} className={styles.section}>
              <h2 className={styles.heading}>{section.heading}</h2>
              {section.lines && (
                <div className={styles.lines}>
                  {section.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              )}
              {section.paragraphs && (
                <div className={styles.paragraphs}>
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
