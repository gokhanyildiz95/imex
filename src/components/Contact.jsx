import { useState } from 'react';
import { siteConfig } from '../content/site.config.js';

export default function Contact({ t }) {
  const c = t.contact;
  const f = c.form;
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('request failed');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  const details = [
    siteConfig.email && { label: c.email, value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    siteConfig.phone && { label: c.phone, value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s+/g, '')}` },
    siteConfig.address && { label: c.address, value: siteConfig.address },
  ].filter(Boolean);

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__layout">
        <div className="contact__intro">
          <h2 id="contact-title" className="section__title">{c.title}</h2>
          <p className="contact__lead">{c.lead}</p>
          {details.length > 0 && (
            <dl className="contact__details">
              {details.map((d) => (
                <div key={d.label}>
                  <dt>{d.label}</dt>
                  <dd>{d.href ? <a href={d.href}>{d.value}</a> : d.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <form className="form" onSubmit={onSubmit} noValidate={false}>
          <div className="form__row">
            <label className="field">
              <span className="field__label">{f.name}</span>
              <input name="name" type="text" autoComplete="name" required maxLength={120} />
            </label>
            <label className="field">
              <span className="field__label">{f.company} <em>({f.optional})</em></span>
              <input name="company" type="text" autoComplete="organization" maxLength={160} />
            </label>
          </div>

          <div className="form__row">
            <label className="field">
              <span className="field__label">{f.email}</span>
              <input name="email" type="email" autoComplete="email" required maxLength={200} />
            </label>
            <label className="field">
              <span className="field__label">{f.phone} <em>({f.optional})</em></span>
              <input name="phone" type="tel" autoComplete="tel" maxLength={60} />
            </label>
          </div>

          <label className="field">
            <span className="field__label">{f.service}</span>
            <select name="service" defaultValue="">
              <option value="">{f.serviceAny}</option>
              {t.services.items.map((s) => (
                <option key={s.id} value={s.title}>{s.title}</option>
              ))}
            </select>
          </label>

          <label className="field">
            <span className="field__label">{f.message}</span>
            <textarea name="message" rows="5" required minLength={10} maxLength={4000} />
          </label>

          {/* Honeypot: hidden from people, tempting for bots */}
          <div className="form__trap" aria-hidden="true">
            <label>
              Website
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="form__foot">
            <button className="btn btn--solid" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? f.sending : f.send}
            </button>
            <p className={`form__status form__status--${status}`} role="status" aria-live="polite">
              {status === 'sent' && f.success}
              {status === 'error' && f.error}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
