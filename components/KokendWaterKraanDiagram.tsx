interface KokendWaterKraanDiagramProps {
  className?: string;
}

export function KokendWaterKraanDiagram({ className = '' }: KokendWaterKraanDiagramProps) {
  const width = 560;
  const height = 360;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label="Doorsnede van een kokend water kraan-systeem: kraan boven aanrecht, onder aanrecht een geïsoleerde boiler (98-100°C), aansluitingen voor koud water, warm water en gefilterd water via osmosefilter."
    >
      <defs>
        <linearGradient id="kwkBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0F9FF" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id="boiler" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width={width} height={height} fill="url(#kwkBg)" rx="12" />

      <text x={width / 2} y="24" textAnchor="middle" fill="#003F5C" fontWeight="700" fontSize="14">
        Kokend water kraan — systeemoverzicht
      </text>

      {/* Aanrecht line */}
      <line x1="40" y1="170" x2="520" y2="170" stroke="#475569" strokeWidth="2" />
      <text x="48" y="164" fill="#475569" fontSize="9" fontWeight="600">Aanrecht</text>

      {/* Kraan above counter */}
      <g>
        {/* base */}
        <ellipse cx="200" cy="170" rx="14" ry="3" fill="#94A3B8" />
        {/* spout column */}
        <rect x="194" y="100" width="12" height="68" fill="#94A3B8" rx="2" />
        {/* spout arc */}
        <path d="M 200 100 Q 200 80 220 80 L 260 80 L 260 96" stroke="#94A3B8" strokeWidth="12" fill="none" strokeLinecap="round" />
        {/* handles */}
        <circle cx="184" cy="120" r="6" fill="#0EA5E9" />
        <circle cx="216" cy="120" r="6" fill="#EF4444" />
        <circle cx="200" cy="140" r="5" fill="#1F2937" />
        {/* steam */}
        <path d="M 260 70 Q 256 60 262 56 Q 266 52 262 44" stroke="#CBD5E1" strokeWidth="1.5" fill="none" strokeDasharray="2 2" />
        <path d="M 268 70 Q 274 64 270 58 Q 266 52 272 46" stroke="#CBD5E1" strokeWidth="1.5" fill="none" strokeDasharray="2 2" />
        {/* water stream */}
        <line x1="260" y1="96" x2="260" y2="148" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="2 2" />
        {/* labels */}
        <text x="172" y="118" textAnchor="end" fill="#0EA5E9" fontSize="9" fontWeight="600">Koud</text>
        <text x="228" y="118" fill="#EF4444" fontSize="9" fontWeight="600">Warm</text>
        <text x="200" y="158" textAnchor="middle" fill="#1F2937" fontSize="8" fontWeight="600">Kokend</text>
      </g>

      {/* Below counter: boiler + filter */}
      {/* Boiler tank */}
      <g>
        <rect x="80" y="195" width="120" height="120" rx="12" fill="url(#boiler)" stroke="#7F1D1D" strokeWidth="1.5" />
        <text x="140" y="225" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">
          BOILER
        </text>
        <text x="140" y="244" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600">
          98–100 °C
        </text>
        <text x="140" y="262" textAnchor="middle" fill="#FECACA" fontSize="9">
          Geïsoleerde tank
        </text>
        <text x="140" y="276" textAnchor="middle" fill="#FECACA" fontSize="9">
          2–4 liter
        </text>
        <text x="140" y="294" textAnchor="middle" fill="#FECACA" fontSize="9">
          ~10 W standby
        </text>
        {/* heating element symbol */}
        <path d="M 110 305 Q 115 300 120 305 Q 125 310 130 305 Q 135 300 140 305 Q 145 310 150 305 Q 155 300 160 305 Q 165 310 170 305"
              stroke="#FEF3C7" strokeWidth="2" fill="none" />
      </g>

      {/* RO filter */}
      <g>
        <rect x="240" y="200" width="100" height="110" rx="8" fill="#005F8A" stroke="#003F5C" strokeWidth="1.5" />
        <text x="290" y="226" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
          RO-FILTER
        </text>
        <text x="290" y="244" textAnchor="middle" fill="#BAE6FD" fontSize="9">
          Sediment
        </text>
        <text x="290" y="258" textAnchor="middle" fill="#BAE6FD" fontSize="9">
          Actief kool
        </text>
        <text x="290" y="272" textAnchor="middle" fill="#BAE6FD" fontSize="9">
          RO-membraan
        </text>
        <text x="290" y="286" textAnchor="middle" fill="#BAE6FD" fontSize="9">
          Post-filter
        </text>
        <text x="290" y="302" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="700">
          99% gefilterd
        </text>
      </g>

      {/* Inlet */}
      <g>
        <line x1="400" y1="240" x2="500" y2="240" stroke="#0EA5E9" strokeWidth="3" />
        <line x1="400" y1="240" x2="340" y2="240" stroke="#0EA5E9" strokeWidth="3" />
        <line x1="240" y1="240" x2="200" y2="240" stroke="#0EA5E9" strokeWidth="3" />
        <text x="450" y="230" textAnchor="middle" fill="#0EA5E9" fontSize="9" fontWeight="600">
          Koud water inlet
        </text>
        <text x="500" y="244" textAnchor="end" fill="#0EA5E9" fontSize="13">→</text>
      </g>

      {/* Pipes up to tap */}
      <line x1="140" y1="195" x2="140" y2="180" stroke="#94A3B8" strokeWidth="3" />
      <line x1="140" y1="180" x2="194" y2="180" stroke="#94A3B8" strokeWidth="3" />
      <line x1="290" y1="200" x2="290" y2="180" stroke="#94A3B8" strokeWidth="3" />
      <line x1="290" y1="180" x2="206" y2="180" stroke="#94A3B8" strokeWidth="3" />

      {/* Note bottom */}
      <text x={width / 2} y={height - 8} textAnchor="middle" fill="#94A3B8" fontSize="9">
        4-in-1 systemen combineren koud, warm, kokend en gefilterd water
      </text>
    </svg>
  );
}
