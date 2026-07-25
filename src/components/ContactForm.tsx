'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import styles from './ContactForm.module.css';

/**
 * No mail backend is configured yet, so the form composes the message and
 * hands it to the visitor's mail client. Swap `handleSubmit` for a POST to a
 * server action / form service once an endpoint exists — the markup stays.
 */
export default function ContactForm() {
  const { t } = useLanguage();
  const [fields, setFields] = useState({ name: '', email: '', phone: '', message: '' });
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const update = (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [key]: e.target.value }));
    setError('');
    setSent(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
      setError(t.contact.form.required);
      return;
    }

    const body = [
      `${t.contact.form.name}: ${fields.name}`,
      `${t.contact.form.email}: ${fields.email}`,
      `${t.contact.form.phone}: ${fields.phone}`,
      '',
      fields.message,
    ].join('\n');

    window.location.href = `mailto:${t.contact.email}?subject=${encodeURIComponent(
      t.contact.form.subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h3 className={styles.title}>{t.contact.formTitle}</h3>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>{t.contact.form.name}</span>
          <input type="text" value={fields.name} onChange={update('name')} autoComplete="name" />
        </label>
        <label className={styles.field}>
          <span>{t.contact.form.email}</span>
          <input type="email" value={fields.email} onChange={update('email')} autoComplete="email" />
        </label>
      </div>

      <label className={styles.field}>
        <span>{t.contact.form.phone}</span>
        <input type="tel" value={fields.phone} onChange={update('phone')} autoComplete="tel" />
      </label>

      <label className={styles.field}>
        <span>{t.contact.form.message}</span>
        <textarea rows={5} value={fields.message} onChange={update('message')} />
      </label>

      <p className={styles.privacy}>
        {t.contact.form.privacy}{' '}
        <Link href="/datenschutz">{t.contact.form.privacyLink}</Link>
      </p>

      {error && <p className={styles.error}>{error}</p>}
      {sent && !error && <p className={styles.success}>{t.contact.form.sent}</p>}

      <button type="submit" className={styles.submit}>
        {t.contact.form.submit}
      </button>
    </form>
  );
}
