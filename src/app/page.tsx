'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Logo from '@/components/Logo';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { SECTIONS, Block } from '@/lib/i18n/translations';
import { useReveal } from '@/lib/useReveal';
import styles from './page.module.css';

function ServiceBlock({ block }: { block: Block }) {
  return (
    <div className={styles.block}>
      {block.heading && <h4 className={styles.blockHeading}>{block.heading}</h4>}
      {block.text && <p className={styles.blockText}>{block.text}</p>}
      {block.items && (
        <ul className={styles.bullets}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {block.links && (
        <div className={styles.blockLinks}>
          {block.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
              <span aria-hidden="true"> ↗</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();
  useReveal();

  return (
    <>
      <Navigation />

      <main>
        {/* ── Sie im Mittelpunkt / You matter ─────────────────────────── */}
        <section className={styles.hero} id={SECTIONS.home}>
          <div className={styles.heroInner}>
            <Logo className={styles.heroMark} />
            <p className={styles.eyebrow}>{t.hero.eyebrow}</p>
            <h1 className={styles.heroTitle}>{t.hero.title}</h1>
            <p className={styles.heroLead}>{t.hero.lead}</p>
            <div className={styles.heroActions}>
              <a href={`#${SECTIONS.profile}`} className={styles.btnPrimary}>
                {t.hero.cta}
              </a>
              <a href={`#${SECTIONS.services}`} className={styles.btnGhost}>
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </section>

        {/* ── Intro: achieve / statement / stand ──────────────────────── */}
        <section className={styles.sectionDeep}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle} data-reveal>
              {t.intro.achieveTitle}
            </h2>
            <div className={styles.cards} data-reveal>
              {t.intro.achieve.map((item, i) => (
                <article key={item.title} className={styles.card}>
                  <span className={styles.cardNumber}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.text}</p>
                </article>
              ))}
            </div>

            <p className={styles.statement} data-reveal>
              {t.intro.statement}
            </p>

            <h2 className={styles.sectionTitle} data-reveal>
              {t.intro.standTitle}
            </h2>
            <div className={styles.cards} data-reveal>
              {t.intro.stand.map((item) => (
                <article key={item.title} className={styles.card}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.text}</p>
                </article>
              ))}
            </div>

            <div className={styles.ctaBand} data-reveal>
              <div>
                <h3 className={styles.ctaTitle}>{t.intro.closingTitle}</h3>
                <p className={styles.ctaText}>{t.intro.closingText}</p>
              </div>
              <a href={`#${SECTIONS.profile}`} className={styles.btnPrimary}>
                {t.hero.cta}
              </a>
            </div>
          </div>
        </section>

        {/* ── Leistungen / Services ───────────────────────────────────── */}
        <section className={styles.section} id={SECTIONS.services}>
          <div className={styles.container}>
            <div className={styles.sectionHead} data-reveal>
              <p className={styles.eyebrow}>{t.nav.services}</p>
              <h2 className={styles.sectionTitleLarge}>{t.services.title}</h2>
              <p className={styles.sectionLead}>{t.services.lead}</p>
            </div>

            <ul className={styles.summaryList} data-reveal>
              {t.services.summary.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            <p className={styles.note} data-reveal>
              {t.services.note}
            </p>

            <div className={styles.services}>
              {t.services.items.map((service, i) => (
                <article key={service.id} id={service.id} className={styles.service} data-reveal>
                  <div className={styles.serviceIndex}>{String(i + 1).padStart(2, '0')}</div>
                  <div className={styles.serviceBody}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceLead}>{service.lead}</p>
                    {service.blocks.map((block, bi) => (
                      <ServiceBlock key={bi} block={block} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Erfolgsgeschichten / Success Stories ────────────────────── */}
        <section className={styles.sectionDeep} id={SECTIONS.stories}>
          <div className={styles.container}>
            <div className={styles.sectionHead} data-reveal>
              <p className={styles.eyebrow}>{t.nav.stories}</p>
              <h2 className={styles.sectionTitleLarge}>{t.stories.title}</h2>
              <p className={styles.sectionLead}>{t.stories.lead}</p>
            </div>

            <div className={styles.stories}>
              {t.stories.items.map((story) => (
                <figure key={story.author} className={styles.story} data-reveal>
                  <h3 className={styles.storyPrompt}>{story.prompt}</h3>
                  <blockquote className={styles.storyQuote}>{story.quote}</blockquote>
                  <figcaption className={styles.storyAuthor}>{story.author}</figcaption>
                </figure>
              ))}
            </div>

            <div className={styles.twoUp} data-reveal>
              <div>
                <h3 className={styles.subTitle}>{t.stories.focusTitle}</h3>
                <ul className={styles.chips}>
                  {t.stories.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className={styles.subTitle}>{t.stories.languagesTitle}</h3>
                <ul className={styles.chips}>
                  {t.stories.languages.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Philosophie / Philosophy ────────────────────────────────── */}
        <section className={styles.philosophy} id={SECTIONS.philosophy}>
          <div className={styles.containerNarrow} data-reveal>
            <p className={styles.eyebrow}>{t.nav.philosophy}</p>
            <h2 className={styles.sectionTitleLarge}>{t.philosophy.title}</h2>
            <p className={styles.philosophyText}>{t.philosophy.text}</p>
          </div>
        </section>

        {/* ── Profil & Publikationen / Profile & Publications ─────────── */}
        <section className={styles.section} id={SECTIONS.profile}>
          <div className={styles.container}>
            <div className={styles.sectionHead} data-reveal>
              <p className={styles.eyebrow}>{t.nav.profile}</p>
              <h2 className={styles.sectionTitleLarge}>{t.profile.title}</h2>
            </div>

            <div className={styles.twoUp} data-reveal>
              <div>
                <h3 className={styles.subTitle}>{t.profile.profileTitle}</h3>
                <p className={styles.blockText}>{t.profile.profileLead}</p>
                <ul className={styles.bullets}>
                  {t.profile.credentials.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className={styles.subTitle}>{t.profile.publicationsTitle}</h3>
                <p className={styles.blockText}>{t.profile.publicationsLead}</p>
                <ul className={styles.publications}>
                  {t.profile.publications.map((pub) => (
                    <li key={pub.isbn}>
                      <strong>{pub.title}</strong>
                      <span>{pub.source}</span>
                      <em>{pub.isbn}</em>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className={styles.statement} data-reveal>
              {t.profile.outro}
            </p>
          </div>
        </section>

        {/* ── Kontakt / Contact ───────────────────────────────────────── */}
        <section className={styles.contact}>
          <div className={styles.container}>
            <div className={styles.contactGrid}>
              <div data-reveal>
                <p className={styles.eyebrow}>{t.contact.kicker}</p>
                <h2 className={styles.sectionTitleLarge}>{t.contact.title}</h2>
                <dl className={styles.contactDetails}>
                  <div>
                    <dt>{t.contact.name}</dt>
                  </div>
                  <div>
                    <dt>{t.contact.phoneLabel}</dt>
                    <dd>
                      <a href={`tel:${t.contact.phone.replace(/[^0-9+]/g, '')}`}>{t.contact.phone}</a>
                    </dd>
                  </div>
                  <div>
                    <dt>{t.contact.emailLabel}</dt>
                    <dd>
                      <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div data-reveal>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
