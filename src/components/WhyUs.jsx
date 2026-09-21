// One icon per item, in the same order as content.why.items.
const ICONS = [
  // anchor: maritime expertise
  <>
    <circle cx="12" cy="5" r="3" />
    <path d="M12 8v14" />
    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
  </>,
  // two people: client-centric
  <>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>,
  // eye: transparency and integrity
  <>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </>,
  // layers: comprehensive coverage
  <>
    <path d="M12 2 2 7l10 5 10-5-10-5z" />
    <path d="m2 17 10 5 10-5" />
    <path d="m2 12 10 5 10-5" />
  </>,
  // award: certified professionals
  <>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" />
  </>,
  // globe: international standards
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </>,
];

export default function WhyUs({ t }) {
  return (
    <section id="why" className="section why" aria-labelledby="why-title">
      <img className="why__bg" src="/media/why-bg.jpg" alt="" width="1600" height="900" loading="lazy" decoding="async" />
      <div className="why__shade" aria-hidden="true" />
      <div className="container why__inner">
        <h2 id="why-title" className="section__title">{t.why.title}</h2>
        <ul className="why__grid">
          {t.why.items.map((item, i) => (
            <li key={item.title} className="why__item">
              <span className="why__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">{ICONS[i]}</svg>
              </span>
              <h3 className="why__title">{item.title}</h3>
              <p className="why__text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
