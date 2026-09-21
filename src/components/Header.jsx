import { useEffect, useState } from 'react';
import { Link } from '../router.jsx';

const SECTIONS = ['services', 'why', 'faq', 'contact'];

export default function Header({ t, onToggleLang, path, solidOnTop }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setActive('');
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    const onTop = () => window.scrollY < 200 && setActive('');
    window.addEventListener('scroll', onTop, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onTop);
    };
  }, [path]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const solid = scrolled || open || solidOnTop;

  return (
    <header className={`header${solid ? ' header--solid' : ''}`}>
      <div className="header__bar container">
        <Link className="header__logo" to="/" aria-label={t.nav.home} onClick={close}>
          <img src={solid ? '/logo.png' : '/logo-white.png'} alt="IMEX Inspection" width="106" height="66" />
        </Link>

        <nav
          id="site-nav"
          className={`header__nav${open ? ' header__nav--open' : ''}`}
          aria-label="Main"
        >
          <Link to="/#services" onClick={close} aria-current={active === 'services' ? 'true' : undefined}>{t.nav.services}</Link>
          <Link to="/#why" onClick={close} aria-current={active === 'why' ? 'true' : undefined}>{t.nav.why}</Link>
          <Link to="/#faq" onClick={close} aria-current={active === 'faq' ? 'true' : undefined}>{t.nav.faq}</Link>
          <Link to="/blog" onClick={close} aria-current={path.startsWith('/blog') ? 'true' : undefined}>{t.nav.blog}</Link>
          <Link to="/#contact" onClick={close} aria-current={active === 'contact' ? 'true' : undefined}>{t.nav.contact}</Link>
        </nav>

        <div className="header__tools">
          <button
            type="button"
            className="lang-toggle"
            onClick={onToggleLang}
            aria-label={t.nav.switchLabel}
            lang={t.nav.switchTo.toLowerCase()}
          >
            {t.nav.switchTo}
          </button>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="menu-toggle__label">{t.nav.menu}</span>
            <span className="menu-toggle__bars" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
