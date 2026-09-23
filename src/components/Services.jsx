// One icon per Solutions group, in the same order as content.services.groups
// (Gözetim/Supervision, Kalite/Quality, Miktar/Quantity, Numune/Sampling).
const GROUP_ICONS = [
  // eye: supervision
  <>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </>,
  // ribboned badge: quality
  <>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" />
  </>,
  // balance scale: quantity
  <>
    <path d="M12 3v18" />
    <path d="M7 21h10" />
    <path d="M5 7h14" />
    <path d="m5 7-3 6a3 3 0 0 0 6 0z" />
    <path d="m19 7-3 6a3 3 0 0 0 6 0z" />
  </>,
  // test tube: sampling
  <>
    <path d="M9 3h6" />
    <path d="M10 3v6.7L4.7 19a1.5 1.5 0 0 0 1.3 2.2h12a1.5 1.5 0 0 0 1.3-2.2L14 9.7V3" />
    <path d="M7.5 15h9" />
  </>,
];

export default function Services({ t }) {
  const s = t.services;
  return (
    <section id="services" className="section solutions" aria-labelledby="solutions-title">
      <div className="container">
        <h2 id="solutions-title" className="section__title">{s.title}</h2>

        <ul className="solutions__groups">
          {s.groups.map((group, i) => (
            <li key={group} className="solutions__group">
              <span className="solutions__groupIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">{GROUP_ICONS[i]}</svg>
              </span>
              {group}
            </li>
          ))}
        </ul>

        <ul className="solutions__items">
          {s.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
