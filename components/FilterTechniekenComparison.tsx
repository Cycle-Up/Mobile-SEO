interface FilterTechniekenComparisonProps {
  className?: string;
}

const techniques = [
  { name: 'Sediment',     pore: '5 µm',      removes: ['Zand', 'Roest', 'Deeltjes'],                 color: '#FCD34D' },
  { name: 'Actief kool',  pore: '0,5 µm',    removes: ['Chloor', 'Geur', 'Smaak'],                    color: '#475569' },
  { name: 'Ultrafiltratie',pore: '0,01 µm',  removes: ['Bacteriën', 'Virussen', 'Microplastics'],     color: '#0EA5E9' },
  { name: 'Nanofiltratie',pore: '0,001 µm',  removes: ['Pesticiden', 'Kalk (deels)', 'Hormonen'],     color: '#6366F1' },
  { name: 'Omgekeerde osmose', pore: '0,0001 µm', removes: ['PFAS', 'Lood', 'Nitraat', 'Microplastics'], color: '#005F8A' },
];

export function FilterTechniekenComparison({ className = '' }: FilterTechniekenComparisonProps) {
  const width = 560;
  const height = 340;
  const padding = { top: 36, bottom: 24, left: 20, right: 20 };
  const colWidth = (width - padding.left - padding.right) / techniques.length;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label="Vergelijking van 5 filtertechnieken: sediment, actief kool, ultrafiltratie, nanofiltratie en omgekeerde osmose, met poriegrootte van grof (5 µm) tot zeer fijn (0,0001 µm) en welke stoffen ze verwijderen."
    >
      <defs>
        <linearGradient id="ftcBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0F9FF" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width={width} height={height} fill="url(#ftcBg)" rx="12" />

      <text x={width / 2} y="22" textAnchor="middle" fill="#003F5C" fontWeight="700" fontSize="14">
        Filtertechnieken vergeleken — poriegrootte (µm)
      </text>

      {techniques.map((t, i) => {
        const x = padding.left + i * colWidth + colWidth / 2;
        const barTop = padding.top + 16;
        const barHeight = 200;
        const fillHeight = 30 + (i / (techniques.length - 1)) * (barHeight - 40);
        return (
          <g key={t.name}>
            {/* funnel/bar visual representing pore tightness */}
            <rect
              x={x - 26}
              y={barTop + (barHeight - fillHeight)}
              width="52"
              height={fillHeight}
              fill={t.color}
              opacity="0.92"
              rx="4"
            />
            {/* pore label inside bar */}
            <text
              x={x}
              y={barTop + barHeight - 8}
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="10"
              fontWeight="700"
            >
              {t.pore}
            </text>
            {/* technique name */}
            <text
              x={x}
              y={barTop + barHeight + 18}
              textAnchor="middle"
              fill="#003F5C"
              fontSize="10"
              fontWeight="600"
            >
              {t.name}
            </text>
            {/* substances removed (max 3) */}
            {t.removes.slice(0, 3).map((r, j) => (
              <text
                key={r}
                x={x}
                y={barTop + barHeight + 34 + j * 12}
                textAnchor="middle"
                fill="#475569"
                fontSize="9"
              >
                {r}
              </text>
            ))}
          </g>
        );
      })}

      {/* legend bar at bottom: grof → fijn */}
      <text x={padding.left} y={height - 6} fill="#94A3B8" fontSize="9" fontWeight="600">
        ← Grover
      </text>
      <text x={width - padding.right} y={height - 6} fill="#94A3B8" fontSize="9" fontWeight="600" textAnchor="end">
        Fijner →
      </text>
    </svg>
  );
}
