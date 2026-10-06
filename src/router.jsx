import { useEffect, useState } from 'react';

// Minimal History API router: the site has three kinds of page, so a library is not needed.
const EVENT = 'imex:navigate';

export function usePath() {
  const [path, setPath] = useState(() => window.location.pathname);
  useEffect(() => {
    const sync = () => setPath(window.location.pathname);
    window.addEventListener('popstate', sync);
    window.addEventListener(EVENT, sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener(EVENT, sync);
    };
  }, []);
  return path;
}

export function scrollToHash(hash, behavior = 'instant') {
  const id = hash.replace(/^#/, '');
  const target = id && id !== 'top' ? document.getElementById(id) : null;
  if (target) target.scrollIntoView({ behavior });
  else window.scrollTo({ top: 0, behavior });
}

export function navigate(to) {
  const url = new URL(to, window.location.origin);
  const samePage = url.pathname === window.location.pathname;
  if (url.pathname + url.search + url.hash !== window.location.pathname + window.location.search + window.location.hash) {
    window.history.pushState({}, '', url.pathname + url.search + url.hash);
  }
  // On the same page the target already exists; across pages App scrolls after rendering.
  if (samePage) scrollToHash(url.hash, 'smooth');
  else window.dispatchEvent(new Event(EVENT));
}

export function Link({ to, onClick, children, ...rest }) {
  const handle = (e) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handle} {...rest}>
      {children}
    </a>
  );
}
