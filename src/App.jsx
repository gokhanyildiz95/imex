import { useEffect, useState } from 'react';
import { content } from './content/content.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import WhyUs from './components/WhyUs.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function initialLang() {
  try {
    const saved = localStorage.getItem('imex-lang');
    if (saved === 'en' || saved === 'tr') return saved;
  } catch {
    /* storage unavailable */
  }
  return navigator.language?.toLowerCase().startsWith('tr') ? 'tr' : 'en';
}

export default function App() {
  const [lang, setLang] = useState(initialLang);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.meta.description);
    try {
      localStorage.setItem('imex-lang', lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang, t]);

  const toggleLang = () => setLang((l) => (l === 'en' ? 'tr' : 'en'));

  return (
    <>
      <Header t={t} onToggleLang={toggleLang} />
      <main id="top">
        <Hero t={t} />
        <Services t={t} />
        <WhyUs t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
