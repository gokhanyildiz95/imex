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

        <div className="footer__categories">
          <p className="footer__categoriesTitle">{t.footer.categoryTitle}</p>
          <ul className="footer__categoriesList">
            {t.contact.form.categories.map((cat) => (
              <li key={cat}>{cat}</li>
            ))}
          </ul>
        </div>
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
