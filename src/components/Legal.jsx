import { Link } from '../router.jsx';
import { legal } from '../content/legal.js';
import { PageHead, Block } from './PageParts.jsx';

export default function Legal({ doc, t, lang }) {
  // The KVKK notice is a Turkish legal document; it exists in Turkish and English only,
  // so German readers get the English version.
  const page = legal[doc][lang] || legal[doc].en;
  return (
    <>
      <PageHead>
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">{t.notFound.home}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{page.title}</span>
        </nav>
        <h1 className="pagehead__title pagehead__title--post">{page.title}</h1>
        <p className="pagehead__byline">{t.legal.updated}: {page.updated}</p>
      </PageHead>

      <article className="section article article--legal">
        <div className="container article__wrap">
          <div className="prose">
            {page.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
