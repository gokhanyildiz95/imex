import { useState } from 'react';
import { Link } from '../router.jsx';

export default function CookieBanner({ t, consent, startWithPrefs, onSave }) {
  const c = t.cookie;
  const [showPrefs, setShowPrefs] = useState(startWithPrefs);
  const [analytics, setAnalytics] = useState(consent?.analytics === true);

  return (
    <section className="consent" role="dialog" aria-modal="false" aria-labelledby="consent-title">
      <h2 id="consent-title" className="consent__title">{c.title}</h2>
      <p className="consent__text">
        {c.text}{' '}
        <Link to="/cookie-policy">{c.policy}</Link>
        {' · '}
        <Link to="/kvkk">{c.privacy}</Link>
      </p>

      {showPrefs && (
        <div className="consent__prefs">
          <label className="consent__row">
            <input type="checkbox" checked disabled />
            <span><strong>{c.necessary.title}</strong> {c.necessary.text}</span>
          </label>
          <label className="consent__row">
            <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
            <span><strong>{c.analytics.title}</strong> {c.analytics.text}</span>
          </label>
        </div>
      )}

      <div className="consent__actions">
        <button type="button" className="btn btn--solid" onClick={() => onSave({ analytics: true })}>
          {c.acceptAll}
        </button>
        <button type="button" className="btn btn--outline" onClick={() => onSave({ analytics: false })}>
          {c.necessaryOnly}
        </button>
        {showPrefs ? (
          <button type="button" className="btn btn--outline" onClick={() => onSave({ analytics })}>
            {c.save}
          </button>
        ) : (
          <button type="button" className="consent__more" onClick={() => setShowPrefs(true)}>
            {c.prefs}
          </button>
        )}
      </div>
    </section>
  );
}
