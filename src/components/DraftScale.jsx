// Decorative hull draft marks with a waterline, the numerals surveyors read
// to find a vessel's draught. The wave echoes the swoosh in the IMEX logo.
const MARKS = [14, 12, 10, 8, 6];

export default function DraftScale() {
  return (
    <svg
      className="draft"
      viewBox="0 0 380 460"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      {/* hull plate */}
      <rect x="120" y="0" width="200" height="460" className="draft__hull" />

      {/* minor ticks */}
      {Array.from({ length: 40 }).map((_, i) => (
        <line
          key={i}
          x1="120"
          x2={i % 4 === 0 ? 156 : 138}
          y1={20 + i * 11}
          y2={20 + i * 11}
          className="draft__tick"
        />
      ))}

      {/* draft numerals */}
      {MARKS.map((m, i) => (
        <g key={m}>
          <text x="292" y={86 + i * 82} textAnchor="end" className="draft__num">
            {m}
          </text>
          <rect x="298" y={52 + i * 82} width="22" height="44" className="draft__bar" />
        </g>
      ))}

      {/* water */}
      <g className="draft__water">
        <path
          d="M0 252 C 60 232, 120 272, 190 252 S 320 232, 380 252 L380 460 L0 460 Z"
          className="draft__sea"
        />
        <path
          d="M0 252 C 60 232, 120 272, 190 252 S 320 232, 380 252"
          className="draft__line"
        />
        <path
          d="M0 276 C 70 260, 130 292, 200 276 S 330 258, 380 274"
          className="draft__line draft__line--soft"
        />
      </g>
    </svg>
  );
}
