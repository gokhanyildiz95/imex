import { useEffect } from 'react';
import { Link } from '../router.jsx';
import { posts, getPost } from '../content/blog.js';

const formatDate = (iso, lang) =>
  new Date(iso).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

export function PageHead({ children }) {
  return (
    <section className="pagehead">
      <div className="container pagehead__inner">{children}</div>
      <svg className="pagehead__edge" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 80 L0 56 C 360 98, 920 14, 1440 42 L1440 80 Z" />
      </svg>
    </section>
  );
}

function PostCard({ post, t, lang }) {
  const copy = post[lang];
  return (
    <article className="card">
      <Link to={`/blog/${post.slug}`} className="card__media" tabIndex={-1} aria-hidden="true">
        <img src={post.image} alt="" width="900" height="600" loading="lazy" />
      </Link>
      <div className="card__body">
        <p className="card__meta">
          <span className="card__tag">{copy.category}</span>
          <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
        </p>
        <h2 className="card__title">
          <Link to={`/blog/${post.slug}`}>{copy.title}</Link>
        </h2>
        <p className="card__excerpt">{copy.excerpt}</p>
        <p className="card__foot">
          <span>{post.minutes} {t.blog.minutes}</span>
          <Link to={`/blog/${post.slug}`} className="card__more" aria-label={`${t.blog.readMore}: ${copy.title}`}>
            {t.blog.readMore} <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </article>
  );
}

export function BlogIndex({ t, lang }) {
  return (
    <>
      <PageHead>
        <h1 className="pagehead__title">{t.blog.title}</h1>
        <p className="pagehead__lead">{t.blog.lead}</p>
      </PageHead>
      <section className="section blog" aria-label={t.blog.all}>
        <div className="container blog__grid">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} t={t} lang={lang} />
          ))}
        </div>
      </section>
    </>
  );
}

export function Block({ block }) {
  if (block.h2) return <h2>{block.h2}</h2>;
  if (block.p) return <p>{block.p}</p>;
  if (block.ul) return <ul>{block.ul.map((li) => <li key={li}>{li}</li>)}</ul>;
  if (block.ol) return <ol>{block.ol.map((li) => <li key={li}>{li}</li>)}</ol>;
  if (block.link) return <p><Link to={block.link.to}>{block.link.label}</Link></p>;
  if (block.table) {
    return (
      <div className="table-wrap">
        <table>
          <thead>
            <tr>{block.table.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
          </thead>
          <tbody>
            {block.table.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (i === 0 ? <th key={cell} scope="row">{cell}</th> : <td key={cell}>{cell}</td>))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return null;
}

// Structured data so search engines can show the article properly.
function useArticleSchema(post, lang) {
  useEffect(() => {
    if (!post) return undefined;
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post[lang].title,
      description: post[lang].excerpt,
      datePublished: post.date,
      inLanguage: lang,
      image: new URL(post.image, window.location.origin).href,
      author: { '@type': 'Organization', name: 'IMEX Inspection' },
      publisher: { '@type': 'Organization', name: 'IMEX Inspection' },
    });
    document.head.appendChild(el);
    return () => el.remove();
  }, [post, lang]);
}

export function BlogPost({ slug, t, lang }) {
  const post = getPost(slug);
  useArticleSchema(post, lang);
  if (!post) return <NotFound t={t} />;

  const copy = post[lang];
  const others = posts.filter((p) => p.slug !== slug);

  return (
    <>
      <PageHead>
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">{t.blog.home}</Link>
          <span aria-hidden="true">/</span>
          <Link to="/blog">{t.nav.blog}</Link>
        </nav>
        <p className="pagehead__tag">{copy.category}</p>
        <h1 className="pagehead__title pagehead__title--post">{copy.title}</h1>
        <p className="pagehead__byline">
          IMEX Inspection · <time dateTime={post.date}>{formatDate(post.date, lang)}</time> · {post.minutes} {t.blog.minutes}
        </p>
      </PageHead>

      <article className="section article">
        <div className="container article__wrap">
          <img className="article__cover" src={post.image} alt="" width="900" height="600" />
          <div className="prose">
            {copy.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          <aside className="cta">
            <h2 className="cta__title">{t.blog.ctaTitle}</h2>
            <p>{t.blog.ctaText}</p>
            <Link to="/#contact" className="btn btn--light">{t.blog.ctaButton}</Link>
          </aside>
        </div>
      </article>

      {others.length > 0 && (
        <section className="section blog blog--more" aria-labelledby="more-title">
          <div className="container">
            <h2 id="more-title" className="section__title">{t.blog.more}</h2>
            <div className="blog__grid">
              {others.map((p) => (
                <PostCard key={p.slug} post={p} t={t} lang={lang} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export function NotFound({ t }) {
  return (
    <PageHead>
      <h1 className="pagehead__title">{t.blog.notFoundTitle}</h1>
      <p className="pagehead__lead">{t.blog.notFoundText}</p>
      <p className="pagehead__actions">
        <Link to="/" className="btn btn--light">{t.blog.home}</Link>
      </p>
    </PageHead>
  );
}
