import { siteConfig } from '../content/site.config.js';

export default function Footer({ t }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <svg className="footer__edge" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 80 L0 44 C 500 4, 1080 86, 1440 22 L1440 80 Z" />
      </svg>

      <div className="container footer__layout">
        <div className="footer__brand">
          <img src="/logo-white.png" alt="IMEX Inspection" width="150" height="94" />
          <p>{t.footer.tagline}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <a href="#services">{t.nav.services}</a>
          <a href="#why">{t.nav.why}</a>
          <a href="#contact">{t.nav.contact}</a>
          {siteConfig.email && <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>}
        </nav>
      </div>

      <div className="container footer__legal">
        <p>© {year} IMEX Inspection. {t.footer.rights}</p>
      </div>
    </footer>
  );
}
