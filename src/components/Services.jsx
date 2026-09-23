import { faCircleCheck, faEye, faFlaskVial, faMedal, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';

// One Font Awesome icon per Solutions group, in the same order as content.services.groups
// (Gözetim/Supervision, Kalite/Quality, Miktar/Quantity, Numune/Sampling).
const GROUP_ICONS = [faEye, faMedal, faScaleBalanced, faFlaskVial];

// Renders a Font Awesome icon definition as inline SVG, sized by CSS.
function FaIcon({ icon: { icon }, className }) {
  const [width, height, , , path] = icon;
  return (
    <svg className={className} viewBox={`0 0 ${width} ${height}`} aria-hidden="true" focusable="false">
      <path fill="currentColor" d={Array.isArray(path) ? path.join(' ') : path} />
    </svg>
  );
}

export default function Services({ t }) {
  const s = t.services;
  return (
    <section id="services" className="section solutions" aria-labelledby="solutions-title">
      <div className="container">
        <h2 id="solutions-title" className="section__title">{s.title}</h2>

        <ul className="solutions__groups">
          {s.groups.map((group, i) => (
            <li key={group} className="solutions__group">
              <FaIcon icon={GROUP_ICONS[i]} className="solutions__groupIcon" />
              {group}
            </li>
          ))}
        </ul>

        <ul className="solutions__items">
          {s.items.map((item) => (
            <li key={item}>
              <FaIcon icon={faCircleCheck} className="solutions__check" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
