'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { FORM_RECIPIENT, WEB3FORMS_ENDPOINT, WEB3FORMS_KEY } from '@/lib/contact';
import styles from './ContactForm.module.css';

type Status = 'idle' | 'sending' | 'sent' | 'sentMail' | 'error';

const EMPTY = { name: '', email: '', phone: '', message: '', botcheck: '' };

export default function ContactForm() {
  const { t } = useLanguage();
  const [fields, setFields] = useState(EMPTY);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const update =
    (key: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((prev) => ({ ...prev, [key]: e.target.value }));
      setError('');
      if (status !== 'sending') setStatus('idle');
    };

  /** Used until a Web3Forms key is configured. */
  const sendViaMailClient = () => {
    const body = [
      `${t.contact.form.name}: ${fields.name}`,
      `${t.contact.form.email}: ${fields.email}`,
      `${t.contact.form.phone}: ${fields.phone}`,
      '',
      fields.message,
    ].join('\n');

    window.location.href = `mailto:${FORM_RECIPIENT}?subject=${encodeURIComponent(
      t.contact.form.subject
    )}&body=${encodeURIComponent(body)}`;
    setStatus('sentMail');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;

    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
      setError(t.contact.form.required);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim())) {
      setError(t.contact.form.invalidEmail);
      return;
    }
    if (fields.botcheck) return; // honeypot tripped — silently drop

    if (!WEB3FORMS_KEY) {
      sendViaMailClient();
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: t.contact.form.subject,
          from_name: 'Talentbegleitung Website',
          replyto: fields.email,
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          message: fields.message,
        }),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setFields(EMPTY);
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const sending = status === 'sending';

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h3 className={styles.title}>{t.contact.formTitle}</h3>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <input
        type="text"
        name="botcheck"
        value={fields.botcheck}
        onChange={update('botcheck')}
        className={styles.honeypot}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className={styles.row}>
        <label className={styles.field}>
          <span>{t.contact.form.name}</span>
          <input
            type="text"
            value={fields.name}
            onChange={update('name')}
            autoComplete="name"
            disabled={sending}
          />
        </label>
        <label className={styles.field}>
          <span>{t.contact.form.email}</span>
          <input
            type="email"
            value={fields.email}
            onChange={update('email')}
            autoComplete="email"
            disabled={sending}
          />
        </label>
      </div>

      <label className={styles.field}>
        <span>{t.contact.form.phone}</span>
        <input
          type="tel"
          value={fields.phone}
          onChange={update('phone')}
          autoComplete="tel"
          disabled={sending}
        />
      </label>

      <label className={styles.field}>
        <span>{t.contact.form.message}</span>
        <textarea rows={5} value={fields.message} onChange={update('message')} disabled={sending} />
      </label>

      <p className={styles.privacy}>
        {t.contact.form.privacy} <Link href="/datenschutz">{t.contact.form.privacyLink}</Link>
      </p>

      <div aria-live="polite">
        {error && <p className={styles.error}>{error}</p>}
        {!error && status === 'sent' && <p className={styles.success}>{t.contact.form.sent}</p>}
        {!error && status === 'sentMail' && (
          <p className={styles.success}>{t.contact.form.sentMail}</p>
        )}
        {!error && status === 'error' && (
          <p className={styles.error}>
            {t.contact.form.error}{' '}
            <a href={`mailto:${FORM_RECIPIENT}`}>{FORM_RECIPIENT}</a>
          </p>
        )}
      </div>

      <button type="submit" className={styles.submit} disabled={sending}>
        {sending ? t.contact.form.sending : t.contact.form.submit}
      </button>
    </form>
  );
}
