import { Link } from '../router.jsx';
import { siteConfig } from '../content/site.config.js';

export default function Footer({ t, onCookieSettings }) {
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
          <Link to="/#about">{t.nav.about}</Link>
          <Link to="/#services">{t.nav.services}</Link>
          <Link to="/#why">{t.nav.why}</Link>
          <Link to="/#faq">{t.nav.faq}</Link>
          <Link to="/blog">{t.nav.blog}</Link>
        </nav>

        <div className="footer__nav footer__contact">
          <Link to="/#contact">{t.nav.contact}</Link>
          {siteConfig.emails.map((mail) => (
            <a key={mail} href={`mailto:${mail}`}>{mail}</a>
          ))}
          {siteConfig.phone && <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>{siteConfig.phone}</a>}
        </div>
      </div>

      <div className="container footer__legal">
        <div className="footer__legalrow">
          <p>© {year} {siteConfig.legalName} {t.footer.rights}</p>
          <nav className="footer__policies" aria-label="Legal">
            <Link to="/kvkk">{t.footer.privacy}</Link>
            <Link to="/cookie-policy">{t.footer.cookies}</Link>
            <button type="button" onClick={onCookieSettings}>{t.footer.cookieSettings}</button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
