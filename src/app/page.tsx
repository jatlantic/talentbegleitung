'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import styles from './page.module.css';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className={styles.main}>
      <Navigation />

      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={`${styles.heroContent} animate-fade-in`}>
          <h1 className={styles.heroTitle}>{t.hero.title}</h1>
          <p className={styles.heroSubtitle}>{t.hero.subtitle}</p>
          <a href="#contact" className={styles.primaryBtn}>
            {t.hero.cta}
          </a>
        </div>
      </section>

      <section className={styles.section} id="testimonials">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.testimonials.title}</h2>
        </div>
        <div className={styles.sectionContent}>
          <div className={styles.testimonialsGrid}>
            {t.testimonials.items.map((item, idx) => (
              <div key={idx} className={styles.testimonialCard}>
                <p className={styles.quote}>&quot;{item.quote}&quot;</p>
                <div>
                  <div className={styles.author}>{item.author}</div>
                  <div className={styles.role}>{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="services" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.clients.title}</h2>
        </div>
        <div className={styles.sectionContent}>
          <div className={styles.clientsList}>
            {t.clients.list.map((client, idx) => (
              <div key={idx} className={styles.clientItem}>
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="experience">
        <div className={styles.sectionContent}>
          <div className={styles.splitSection}>
            <div>
              <h2 className={styles.sectionTitle} style={{ marginBottom: '80px' }}>
                {t.experience.title}
              </h2>
            </div>
            <div className={styles.experienceStats}>
              <div className={styles.statBlock}>
                <h3>Geographic Scope</h3>
                <p>{t.experience.continents}</p>
              </div>
              <div className={styles.statBlock}>
                <h3>{t.experience.languagesTitle}</h3>
                <p>{t.experience.languages}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="about" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className={styles.sectionContent}>
          <div className={styles.splitSection}>
            <div>
              <h2 className={styles.sectionTitle}>{t.about.title}</h2>
            </div>
            <div>
              <p className={styles.aboutText}>{t.about.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="publications">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.publications.title}</h2>
        </div>
        <div className={styles.sectionContent}>
          <div className={styles.pubList}>
            {t.publications.items.map((item, idx) => (
              <div key={idx} className={styles.pubItem}>
                <div className={styles.pubYear}>{item.year}</div>
                <div className={styles.pubText}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
