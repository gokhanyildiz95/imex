import { useEffect, useRef, useState } from 'react';
import { content } from './content/content.js';
import { getPost } from './content/blog.js';
import { legal } from './content/legal.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import WhyUs from './components/WhyUs.jsx';
import Faq from './components/Faq.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { BlogIndex, BlogPost, NotFound } from './components/Blog.jsx';
import Legal from './components/Legal.jsx';
import CookieBanner from './components/CookieBanner.jsx';
import { readConsent, writeConsent } from './consent.js';
import { usePath, scrollToHash } from './router.jsx';

function initialLang() {
  try {
    const saved = localStorage.getItem('imex-lang');
    if (saved === 'en' || saved === 'tr') return saved;
  } catch {
    /* storage unavailable */
  }
  return navigator.language?.toLowerCase().startsWith('tr') ? 'tr' : 'en';
}

function matchRoute(path) {
  const clean = path.replace(/\/+$/, '') || '/';
  if (clean === '/') return { name: 'home' };
  if (clean === '/blog') return { name: 'blog' };
  if (clean === '/kvkk') return { name: 'legal', doc: 'kvkk' };
  if (clean === '/cookie-policy') return { name: 'legal', doc: 'cookies' };
  const post = clean.match(/^\/blog\/([^/]+)$/);
  if (post) return { name: 'post', slug: decodeURIComponent(post[1]) };
  return { name: 'notFound' };
}

export default function App() {
  const [lang, setLang] = useState(initialLang);
  const t = content[lang];
  const path = usePath();
  const route = matchRoute(path);
  const post = route.name === 'post' ? getPost(route.slug) : null;
  const doc = route.name === 'legal' ? legal[route.doc][lang] : null;
  const metaTitle = post
    ? `${post[lang].title} | IMEX Inspection`
    : doc
      ? `${doc.title} | IMEX Inspection`
      : route.name === 'blog'
        ? t.blog.meta.title
        : t.meta.title;
  const metaDesc = post ? post[lang].excerpt : doc ? doc.description : route.name === 'blog' ? t.blog.meta.description : t.meta.description;

  const [consent, setConsent] = useState(readConsent);
  const [cookieOpen, setCookieOpen] = useState(false);
  const saveConsent = (choice) => {
    setConsent(writeConsent(choice));
    setCookieOpen(false);
  };

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

  const toggleLang = () => setLang((l) => (l === 'en' ? 'tr' : 'en'));

  return (
    <>
      <Header t={t} onToggleLang={toggleLang} path={path} solidOnTop={route.name !== 'home'} />
      {route.name === 'home' && (
        <main id="top">
          <Hero t={t} />
          <About t={t} />
          <Services t={t} />
          <WhyUs t={t} />
          <Faq t={t} lang={lang} />
          <Contact t={t} />
        </main>
      )}
      {route.name === 'blog' && <main id="top"><BlogIndex t={t} lang={lang} /></main>}
      {route.name === 'post' && <main id="top"><BlogPost slug={route.slug} t={t} lang={lang} /></main>}
      {route.name === 'legal' && <main id="top"><Legal doc={route.doc} t={t} lang={lang} /></main>}
      {route.name === 'notFound' && <main id="top"><NotFound t={t} /></main>}
      <Footer t={t} onCookieSettings={() => setCookieOpen(true)} />
      {(!consent || cookieOpen) && (
        <CookieBanner key={cookieOpen ? 'reopened' : 'first'} t={t} consent={consent} startWithPrefs={cookieOpen} onSave={saveConsent} />
      )}
    </>
  );
}
