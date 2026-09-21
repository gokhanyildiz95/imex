const PILLAR_ICONS = [
  // shield with check: impartial
  <>
    <path d="M12 3 4 6v6c0 4.5 3.2 7.7 8 9 4.8-1.3 8-4.5 8-9V6l-8-3z" />
    <path d="m9 12 2 2 4-4" />
  </>,
  // report: transparent reporting
  <>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6" />
    <path d="M9 17h6" />
  </>,
  // globe: two languages
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </>,
];

const CARD_ICONS = [
  // box: container shipments
  <>
    <path d="M21 8 12 3 3 8v8l9 5 9-5V8z" />
    <path d="m3 8 9 5 9-5" />
    <path d="M12 13v8" />
  </>,
  // ship: vessel operations
  <>
    <path d="M3 15h18l-2.6 5H5.6L3 15z" />
    <path d="M7 15v-5h10v5" />
    <path d="M10 10V6h4v4" />
    <path d="M12 6V3" />
  </>,
];

const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">{children}</svg>
);

export default function About({ t }) {
  const a = t.about;
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__top">
          <div>
            <p className="eyebrow">{a.eyebrow}</p>
            <h2 id="about-title" className="section__title">{a.title}</h2>
          </div>
          <p className="about__lead">{a.lead}</p>
        </div>

        <ul className="about__pillars">
          {a.pillars.map((p, i) => (
            <li key={p.title} className="pillar">
              <span className="pillar__icon"><Icon>{PILLAR_ICONS[i]}</Icon></span>
              <div>
                <h3 className="pillar__title">{p.title}</h3>
                <p className="pillar__text">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="about__cards">
          {a.cards.map((c, i) => (
            <article key={c.title} className="acard">
              <span className="acard__icon"><Icon>{CARD_ICONS[i]}</Icon></span>
              <h3 className="acard__title">{c.title}</h3>
              <p className="acard__text">{c.text}</p>
              <ul className="tags">
                {c.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
