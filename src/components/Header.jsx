import { useEffect, useRef, useState } from 'react';
import { Link } from '../router.jsx';

const SECTIONS = ['services', 'about', 'contact'];

// Native language names, shown the same way regardless of the site's current language.
const LANGS = [
  { code: 'tr', label: 'Türkçe' },
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
];

export default function Header({ t, lang, onSelectLang, path, solidOnTop }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
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

  // Close the language menu on an outside click or Escape.
  useEffect(() => {
    if (!langOpen) return undefined;
    const onDocClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setLangOpen(false);
    document.addEventListener('mousedown', onDocClick);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      window.removeEventListener('keydown', onKey);
    };
  }, [langOpen]);

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
          <Link to="/#about" onClick={close} aria-current={active === 'about' ? 'true' : undefined}>{t.nav.about}</Link>
          <Link to="/#contact" onClick={close} aria-current={active === 'contact' ? 'true' : undefined}>{t.nav.contact}</Link>
        </nav>

        <div className="header__tools">
          <div className="lang" ref={langRef}>
            <button
              type="button"
              className="lang-toggle"
              aria-haspopup="true"
              aria-expanded={langOpen}
              aria-label={t.nav.langLabel}
              onClick={() => setLangOpen((o) => !o)}
            >
              <span aria-hidden="true">🌐</span>
            </button>
            {langOpen && (
              <div className="lang-menu" role="menu">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    role="menuitem"
                    className="lang-option"
                    lang={l.code}
                    aria-current={lang === l.code ? 'true' : undefined}
                    onClick={() => {
                      onSelectLang(l.code);
                      setLangOpen(false);
                    }}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
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
