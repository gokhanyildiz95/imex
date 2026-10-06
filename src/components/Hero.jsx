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
        <h1 id="hero-title" className="hero__brand">{t.hero.brand}</h1>
        <img className="hero__logo" src="/logo-white.png" alt="" width="120" height="76" />
        <p className="hero__slogan">{t.hero.slogan}</p>
        <div className="hero__actions">
          <a className="btn btn--light" href="#contact">{t.nav.contact}</a>
        </div>
      </div>

      <svg className="hero__edge" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 80 L0 56 C 360 98, 920 14, 1440 42 L1440 80 Z" />
      </svg>
    </section>
  );
}
