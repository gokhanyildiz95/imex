import { Link } from '../router.jsx';
import { legal } from '../content/legal.js';
import { PageHead, Block } from './Blog.jsx';

export default function Legal({ doc, t, lang }) {
  const page = legal[doc][lang];
  return (
    <>
      <PageHead>
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">{t.blog.home}</Link>
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
