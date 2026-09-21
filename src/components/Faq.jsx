import { useEffect } from 'react';
import { Link } from '../router.jsx';

// The answers are plain text in the page and in FAQPage structured data,
// so search engines and AI assistants can quote them directly.
function useFaqSchema(items, lang) {
  useEffect(() => {
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: lang,
      mainEntity: items.map((it) => ({
        '@type': 'Question',
        name: it.q,
        acceptedAnswer: { '@type': 'Answer', text: it.a },
      })),
    });
    document.head.appendChild(el);
    return () => el.remove();
  }, [items, lang]);
}

export default function Faq({ t, lang }) {
  const { title, lead, items } = t.faq;
  useFaqSchema(items, lang);

  return (
    <section id="faq" className="section faq" aria-labelledby="faq-title">
      <div className="container faq__layout">
        <div className="faq__head">
          <h2 id="faq-title" className="section__title">{title}</h2>
          <p className="faq__lead">{lead}</p>
        </div>

        <div className="faq__list">
          {items.map((it) => (
            <details key={it.q} className="faq__item">
              <summary className="faq__q">
                <h3>{it.q}</h3>
                <span className="faq__icon" aria-hidden="true" />
              </summary>
              <div className="faq__a">
                <p>{it.a}</p>
                {it.link && <Link to={it.link.to} className="faq__link">{it.link.label} <span aria-hidden="true">→</span></Link>}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
