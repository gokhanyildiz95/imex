// Small shared building blocks for simple content pages (currently just /kvkk).
import { Link } from '../router.jsx';

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

// Renders one block of a simple content document: { h2 }, { p }, { ul }, { ol }, { link }, { table }.
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

export function NotFound({ t }) {
  return (
    <PageHead>
      <h1 className="pagehead__title">{t.notFound.title}</h1>
      <p className="pagehead__lead">{t.notFound.text}</p>
      <p className="pagehead__actions">
        <Link to="/" className="btn btn--light">{t.notFound.home}</Link>
      </p>
    </PageHead>
  );
}
