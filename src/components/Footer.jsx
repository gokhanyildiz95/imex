import { Link } from '../router.jsx';
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
          <img src="/logo-white.png" alt="IMEX Inspection" width="130" height="82" />
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <Link to="/#services">{t.nav.services}</Link>
          <Link to="/#about">{t.nav.about}</Link>
          <Link to="/#contact">{t.nav.contact}</Link>
        </nav>
      </div>

      <div className="container footer__legal">
        <div className="footer__legalrow">
          <p>© {year} {siteConfig.legalName} {t.footer.rights}</p>
          <nav className="footer__policies" aria-label="Legal">
            <Link to="/kvkk">{t.footer.privacy}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
