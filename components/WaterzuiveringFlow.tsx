interface WaterzuiveringFlowProps {
  className?: string;
}

const steps = [
  { n: 1, title: 'Inname',           desc: 'Grond- of oppervlaktewater',     icon: 'intake' },
  { n: 2, title: 'Coagulatie',       desc: 'Aluminium-/ijzerzouten',         icon: 'mix' },
  { n: 3, title: 'Sedimentatie',     desc: 'Bezinking deeltjes',             icon: 'sediment' },
  { n: 4, title: 'Zandfiltratie',    desc: 'Snelle/langzame zandfilters',    icon: 'filter' },
  { n: 5, title: 'Actief kool',      desc: 'Smaak, geur, organisch',         icon: 'carbon' },
  { n: 6, title: 'Desinfectie',      desc: 'UV / chloor / ozon',             icon: 'uv' },
  { n: 7, title: 'Distributie',      desc: 'Leidingnet naar kraan',          icon: 'tap' },
];

function StepIcon({ type }: { type: string }) {
  switch (type) {
    case 'intake':
      return <path d="M-10 0 Q-10 -8 0 -8 Q10 -8 10 0 L8 6 L-8 6 Z" fill="#0EA5E9" />;
    case 'mix':
      return <path d="M-8 -8 L8 -8 L6 8 L-6 8 Z M-6 -4 Q0 -2 6 -4" stroke="#005F8A" strokeWidth="1.5" fill="#BAE6FD" />;
    case 'sediment':
      return <g><circle cx="-4" cy="-3" r="1.5" fill="#92400E"/><circle cx="4" cy="-2" r="1.5" fill="#92400E"/><circle cx="0" cy="2" r="1.5" fill="#92400E"/><rect x="-9" y="5" width="18" height="3" fill="#005F8A"/></g>;
    case 'filter':
      return <g><rect x="-9" y="-8" width="18" height="16" fill="#FDE68A" rx="2"/><line x1="-9" y1="-2" x2="9" y2="-2" stroke="#92400E"/><line x1="-9" y1="3" x2="9" y2="3" stroke="#92400E"/></g>;
    case 'carbon':
      return <g><rect x="-9" y="-8" width="18" height="16" fill="#1F2937" rx="2"/><circle cx="-3" cy="-2" r="1" fill="#9CA3AF"/><circle cx="3" cy="2" r="1" fill="#9CA3AF"/></g>;
    case 'uv':
      return <g><rect x="-8" y="-9" width="16" height="18" fill="#A78BFA" rx="3"/><path d="M-4 0 L4 0 M0 -4 L0 4" stroke="#FFFFFF" strokeWidth="1.5"/></g>;
    case 'tap':
      return <g><path d="M-6 -8 L6 -8 L4 -4 L-4 -4 Z" fill="#94A3B8"/><rect x="-1" y="-4" width="2" height="6" fill="#94A3B8"/><path d="M-4 2 Q-4 8 0 8 Q4 8 4 2" fill="#BAE6FD" stroke="#0EA5E9"/></g>;
    default:
      return null;
  }
}

export function WaterzuiveringFlow({ className = '' }: WaterzuiveringFlowProps) {
  const width = 720;
  const height = 200;
  const margin = 30;
  const stepWidth = (width - margin * 2) / steps.length;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label="Zeven-stappen drinkwaterzuivering in Nederland: inname, coagulatie, sedimentatie, zandfiltratie, actief kool, desinfectie, distributie."
    >
      <defs>
        <linearGradient id="wzfBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0F9FF" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width={width} height={height} fill="url(#wzfBg)" rx="12" />

      <text x={width / 2} y="22" textAnchor="middle" fill="#003F5C" fontWeight="700" fontSize="14">
        Drinkwaterzuivering — van bron tot kraan
      </text>

      {steps.map((s, i) => {
        const cx = margin + i * stepWidth + stepWidth / 2;
        const cy = 80;
        return (
          <g key={s.n}>
            {/* connector line */}
            {i < steps.length - 1 && (
              <line
                x1={cx + 22}
                y1={cy}
                x2={cx + stepWidth - 22}
                y2={cy}
                stroke="#0EA5E9"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
            )}
            {/* circle background */}
            <circle cx={cx} cy={cy} r="22" fill="#FFFFFF" stroke="#005F8A" strokeWidth="1.5" />
            {/* icon */}
            <g transform={`translate(${cx},${cy})`}>
              <StepIcon type={s.icon} />
            </g>
            {/* step number badge */}
            <circle cx={cx + 16} cy={cy - 16} r="9" fill="#005F8A" />
            <text x={cx + 16} y={cy - 13} textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">
              {s.n}
            </text>
            {/* title */}
            <text x={cx} y={cy + 42} textAnchor="middle" fill="#003F5C" fontSize="11" fontWeight="600">
              {s.title}
            </text>
            {/* description */}
            <text x={cx} y={cy + 58} textAnchor="middle" fill="#475569" fontSize="9">
              {s.desc}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
