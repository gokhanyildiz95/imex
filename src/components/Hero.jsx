export default function Hero({ t }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <video
        className="hero__media"
        src="/media/hero.mp4"
        poster="/media/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__inner container">
        <div className="hero__copy">
          <h1 id="hero-title" className="hero__title">{t.hero.title}</h1>
          <p className="hero__lead">{t.hero.lead}</p>
          <div className="hero__actions">
            <a className="btn btn--light" href="#contact">{t.hero.primary}</a>
            <a className="btn btn--ghost" href="#services">{t.hero.secondary}</a>
          </div>
        </div>
      </div>

      <svg className="hero__edge" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 80 L0 56 C 360 98, 920 14, 1440 42 L1440 80 Z" />
      </svg>
    </section>
  );
}
