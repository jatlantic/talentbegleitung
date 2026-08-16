'use client';

import React from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Logo from '@/components/Logo';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { SECTIONS, Block } from '@/lib/i18n/translations';
import { useReveal } from '@/lib/useReveal';
import portrait from '../../public/marie-louise-schaefer.jpg';
import styles from './page.module.css';

/** Render `**bold**` markers in translation strings as <strong>. */
function renderEmphasis(text: string): React.ReactNode {
  return text
    .split('**')
    .map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));
}

function ServiceBlock({ block }: { block: Block }) {
  return (
    <div className={styles.block}>
      {block.heading && <h4 className={styles.blockHeading}>{block.heading}</h4>}
      {block.text && <p className={styles.blockText}>{block.text}</p>}
      {block.steps && (
        <div className={styles.steps} role="list">
          {block.steps.map((step, i) => (
            <React.Fragment key={step}>
              {i > 0 && <Logo className={styles.stepArrow} />}
              <div role="listitem" className={styles.step}>
                {step}
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
      {block.items &&
        (block.boxed ? (
          <ul className={styles.topicGrid}>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <ul className={styles.bullets}>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ))}
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
            <h1 className={styles.heroTitle}>{t.hero.title}</h1>
            <p className={styles.heroLead}>{t.hero.lead}</p>
            <div className={styles.heroActions}>
              <a href={`#${SECTIONS.contact}`} className={styles.btnPrimary}>
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
              {t.intro.achieve.map((item) => (
                <article key={item.title} className={styles.card}>
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
              <a href={`#${SECTIONS.contact}`} className={styles.btnPrimary}>
                {t.hero.cta}
              </a>
            </div>
          </div>
        </section>

        {/* ── Leistungen / Services ───────────────────────────────────── */}
        <section className={styles.section} id={SECTIONS.services}>
          <div className={styles.container}>
            <div className={styles.sectionHead} data-reveal>
              <h2 className={styles.sectionTitleLarge}>{t.services.title}</h2>
              <p className={styles.sectionLead}>{t.services.lead}</p>
            </div>

            <ul className={styles.summaryList} data-reveal>
              {t.services.summary.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>
                    <span>{renderEmphasis(item.text)}</span>
                    <span className={styles.summaryArrow} aria-hidden="true">
                      ↓
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className={`${styles.sectionLead} ${styles.noteLead}`} data-reveal>
              {t.services.note}
            </p>

            <div className={styles.services}>
              {t.services.items.map((service) => (
                <article key={service.id} id={service.id} className={styles.service} data-reveal>
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

            <div className={styles.twoUp} id={SECTIONS.focus} data-reveal>
              <div>
                <h3 className={styles.subTitle}>{t.services.focusTitle}</h3>
                <ul className={styles.chips}>
                  {t.services.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className={styles.subTitle}>{t.services.languagesTitle}</h3>
                <ul className={styles.chips}>
                  {t.services.languages.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Erfolgsgeschichten / Success Stories ────────────────────── */}
        <section className={styles.sectionDeep} id={SECTIONS.stories}>
          <div className={styles.container}>
            <div className={styles.sectionHead} data-reveal>
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
          </div>
        </section>

        {/* ── Philosophie / Philosophy ────────────────────────────────── */}
        <section className={styles.philosophy} id={SECTIONS.philosophy}>
          <div className={styles.containerNarrow} data-reveal>
            <h2 className={styles.sectionTitleLarge}>{t.philosophy.title}</h2>
            {t.philosophy.paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.philosophyText}>
                {renderEmphasis(paragraph)}
              </p>
            ))}
            <a href={`#${SECTIONS.contact}`} className={styles.philosophyCta}>
              {t.philosophy.cta}
            </a>
          </div>
        </section>

        {/* ── Profil & Publikationen / Profile & Publications ─────────── */}
        <section className={styles.section} id={SECTIONS.profile}>
          <div className={styles.container}>
            <div className={styles.sectionHead} data-reveal>
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
                <div className={styles.blockLinks}>
                  <a href={`#${SECTIONS.focus}`}>{t.profile.focusLink}</a>
                </div>
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

            <div className={styles.founder} data-reveal>
              <h3 className={styles.subTitle}>{t.profile.founderTitle}</h3>
              <div className={styles.founderGrid}>
                <Image
                  src={portrait}
                  alt={t.profile.founderName}
                  className={styles.founderPhoto}
                  priority={false}
                />
                <div>
                  <p className={styles.founderName}>{t.profile.founderName}</p>
                  <p className={styles.founderRole}>{t.profile.founderRole}</p>
                  <p className={styles.blockText}>{t.profile.founderText}</p>
                  <p className={styles.founderMotto}>{t.profile.founderMotto}</p>
                  <div className={styles.blockLinks}>
                    <a href={t.profile.founderLink.href} target="_blank" rel="noopener noreferrer">
                      {t.profile.founderLink.label}
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <p className={`${styles.statement} ${styles.outro}`} data-reveal>
              {t.profile.outro}
            </p>
          </div>
        </section>

        {/* ── Kontakt / Contact ───────────────────────────────────────── */}
        <section className={styles.contact} id={SECTIONS.contact}>
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
