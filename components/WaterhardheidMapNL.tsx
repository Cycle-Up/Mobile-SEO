interface WaterhardheidMapNLProps {
  className?: string;
}

const provinces = [
  { name: 'Groningen',     x: 380, y: 80,  dh: '5-7',   color: '#86EFAC', label: 'zacht' },
  { name: 'Friesland',     x: 305, y: 75,  dh: '4-8',   color: '#86EFAC', label: 'zacht' },
  { name: 'Drenthe',       x: 380, y: 130, dh: '6-9',   color: '#86EFAC', label: 'zacht' },
  { name: 'Overijssel',    x: 360, y: 175, dh: '6-10',  color: '#FDE68A', label: 'middel' },
  { name: 'Flevoland',     x: 305, y: 175, dh: '8-12',  color: '#FDE68A', label: 'middel' },
  { name: 'N-Holland',     x: 215, y: 145, dh: '15-20', color: '#FCA5A5', label: 'hard' },
  { name: 'Z-Holland',     x: 195, y: 215, dh: '9-13',  color: '#FDE68A', label: 'middel' },
  { name: 'Utrecht',       x: 270, y: 200, dh: '10-14', color: '#FDE68A', label: 'middel' },
  { name: 'Gelderland',    x: 335, y: 220, dh: '6-12',  color: '#FDE68A', label: 'middel' },
  { name: 'Zeeland',       x: 145, y: 280, dh: '4-7',   color: '#86EFAC', label: 'zacht' },
  { name: 'N-Brabant',     x: 270, y: 290, dh: '6-10',  color: '#86EFAC', label: 'zacht' },
  { name: 'Limburg',       x: 330, y: 360, dh: '15-22', color: '#FCA5A5', label: 'hard' },
];

export function WaterhardheidMapNL({ className = '' }: WaterhardheidMapNLProps) {
  const width = 520;
  const height = 460;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label="Schematische kaart van Nederland met waterhardheid per provincie in graden Duitse hardheid (°dH). Zeeland en het noorden hebben zacht water (4-9 °dH), Limburg en Noord-Holland hard water (15-22 °dH)."
    >
      <defs>
        <linearGradient id="mapBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0F9FF" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width={width} height={height} fill="url(#mapBg)" rx="12" />

      <text x={width / 2} y="26" textAnchor="middle" fill="#003F5C" fontWeight="700" fontSize="14">
        Waterhardheid in Nederland (°dH per provincie)
      </text>

      {/* Schematic NL outline (simplified) */}
      <path
        d="M 175 80
           Q 215 60 280 65
           Q 360 60 420 90
           Q 440 130 430 180
           Q 425 230 405 270
           Q 395 320 370 360
           Q 345 410 305 420
           Q 250 415 215 405
           Q 165 395 130 360
           Q 100 320 110 270
           Q 115 220 130 175
           Q 140 125 175 80 Z"
        fill="#E2E8F0"
        stroke="#94A3B8"
        strokeWidth="1.5"
      />

      {/* Province bubbles */}
      {provinces.map(p => (
        <g key={p.name}>
          <circle cx={p.x} cy={p.y} r="22" fill={p.color} stroke="#003F5C" strokeWidth="0.8" opacity="0.92" />
          <text x={p.x} y={p.y - 2} textAnchor="middle" fill="#003F5C" fontSize="9" fontWeight="700">
            {p.dh}
          </text>
          <text x={p.x} y={p.y + 9} textAnchor="middle" fill="#003F5C" fontSize="7">°dH</text>
          <text x={p.x} y={p.y + 36} textAnchor="middle" fill="#003F5C" fontSize="9" fontWeight="600">
            {p.name}
          </text>
        </g>
      ))}

      {/* Legend */}
      <g transform="translate(20, 405)">
        <text x="0" y="0" fill="#003F5C" fontSize="10" fontWeight="700">Hardheidsklasse</text>
        <circle cx="8" cy="18" r="6" fill="#86EFAC" stroke="#003F5C" strokeWidth="0.5" />
        <text x="20" y="22" fill="#003F5C" fontSize="9">Zacht (&lt; 8 °dH)</text>
        <circle cx="135" cy="18" r="6" fill="#FDE68A" stroke="#003F5C" strokeWidth="0.5" />
        <text x="147" y="22" fill="#003F5C" fontSize="9">Middel (8–14 °dH)</text>
        <circle cx="270" cy="18" r="6" fill="#FCA5A5" stroke="#003F5C" strokeWidth="0.5" />
        <text x="282" y="22" fill="#003F5C" fontSize="9">Hard (&gt; 14 °dH)</text>
      </g>
    </svg>
  );
}
