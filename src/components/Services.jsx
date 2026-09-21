export default function Services({ t }) {
  return (
    <section id="services" className="section services" aria-labelledby="services-title">
      <div className="container services__layout">
        <div className="services__head">
          <h2 id="services-title" className="section__title">{t.services.title}</h2>
        </div>
        <ul className="services__list">
          {t.services.items.map((s) => (
            <li key={s.id} className="service">
              <img
                className="service__img"
                src={`/media/${s.id}.jpg`}
                alt=""
                width="900"
                height="600"
                loading="lazy"
              />
              <div className="service__body">
                <h3 className="service__title">{s.title}</h3>
                <p className="service__text">{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
