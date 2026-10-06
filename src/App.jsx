import { useEffect, useRef, useState } from 'react';
import { content } from './content/content.js';
import { legal } from './content/legal.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Legal from './components/Legal.jsx';
import { NotFound } from './components/PageParts.jsx';
import { usePath, scrollToHash } from './router.jsx';

function initialLang() {
  try {
    const saved = localStorage.getItem('imex-lang');
    if (saved === 'en' || saved === 'tr' || saved === 'de') return saved;
  } catch {
    /* storage unavailable */
  }
  const browser = navigator.language?.toLowerCase() || '';
  if (browser.startsWith('tr')) return 'tr';
  if (browser.startsWith('de')) return 'de';
  return 'en';
}

function matchRoute(path) {
  const clean = path.replace(/\/+$/, '') || '/';
  if (clean === '/') return { name: 'home' };
  if (clean === '/kvkk') return { name: 'legal', doc: 'kvkk' };
  return { name: 'notFound' };
}

export default function App() {
  const [lang, setLang] = useState(initialLang);
  const t = content[lang];
  const path = usePath();
  const route = matchRoute(path);
  const doc = route.name === 'legal' ? legal[route.doc][lang] || legal[route.doc].en : null;
  const metaTitle = doc ? `${doc.title} | IMEX Inspection` : t.meta.title;
  const metaDesc = doc ? doc.description : t.meta.description;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = metaTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', metaDesc);
    try {
      localStorage.setItem('imex-lang', lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang, metaTitle, metaDesc]);

  // After a client-side page change, land on the hash target or the top of the page.
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      if (window.location.hash) scrollToHash(window.location.hash);
      return;
    }
    scrollToHash(window.location.hash);
  }, [route.name, route.slug]);

  return (
    <>
      <Header t={t} lang={lang} onSelectLang={setLang} path={path} solidOnTop={route.name !== 'home'} />
      {route.name === 'home' && (
        <main id="top">
          <Hero t={t} />
          <Services t={t} />
          <About t={t} />
          <Contact t={t} />
        </main>
      )}
      {route.name === 'legal' && <main id="top"><Legal doc={route.doc} t={t} lang={lang} /></main>}
      {route.name === 'notFound' && <main id="top"><NotFound t={t} /></main>}
      <Footer t={t} />
    </>
  );
}
