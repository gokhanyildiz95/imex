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

  const { address, mapQuery } = siteConfig;
  const query = mapQuery || address;
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="section__title">{c.title}</h2>

        <div className="contact__map">
          <iframe
            src={mapEmbedSrc}
            title={c.mapLabel}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <span className="contact__mapTint" aria-hidden="true" />
          <span className="contact__mapLabel">{c.mapLabel}</span>
        </div>
        <a className="contact__route" href={directionsHref} target="_blank" rel="noopener noreferrer">
          {c.directions} <span aria-hidden="true">→</span>
        </a>

        <form className="form" onSubmit={onSubmit} noValidate={false}>
          <div className="form__row form__row--three">
            <label className="field">
              <span className="field__label">{f.name}</span>
              <input name="name" type="text" autoComplete="name" required maxLength={120} />
            </label>
            <label className="field">
              <span className="field__label">{f.company} <em>({f.optional})</em></span>
              <input name="company" type="text" autoComplete="organization" maxLength={160} />
            </label>
            <label className="field">
              <span className="field__label">{f.email}</span>
              <input name="email" type="email" autoComplete="email" required maxLength={200} />
            </label>
          </div>

          <div className="form__row">
            <label className="field">
              <span className="field__label">{f.phone} <em>({f.optional})</em></span>
              <input name="phone" type="tel" autoComplete="tel" maxLength={60} />
            </label>
            <label className="field">
              <span className="field__label">{f.category}</span>
              <select name="category" defaultValue="" required>
                <option value="" disabled>{f.categoryPlaceholder}</option>
                {f.categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="field">
            <span className="field__label">{f.message}</span>
            <textarea name="message" rows="5" required minLength={10} maxLength={4000} />
          </label>

          <label className="check">
            <input name="kvkk" type="checkbox" required />
            <span>
              {f.kvkkPre}
              <a href="/kvkk" target="_blank" rel="noopener">{f.kvkkLink}</a>
              {f.kvkkPost}
            </span>
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
