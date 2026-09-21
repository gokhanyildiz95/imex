export default function WhyUs({ t }) {
  return (
    <section id="why" className="section why" aria-labelledby="why-title">
      <div className="container">
        <h2 id="why-title" className="section__title">{t.why.title}</h2>
        <ul className="why__grid">
          {t.why.items.map((item) => (
            <li key={item.title} className="why__item">
              <h3 className="why__title">{item.title}</h3>
              <p className="why__text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
