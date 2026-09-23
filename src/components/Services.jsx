export default function Services({ t }) {
  const s = t.services;
  return (
    <section id="services" className="section solutions" aria-labelledby="solutions-title">
      <div className="container">
        <h2 id="solutions-title" className="section__title">{s.title}</h2>

        <ul className="solutions__groups">
          {s.groups.map((group) => (
            <li key={group} className="solutions__group">{group}</li>
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
