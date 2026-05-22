export function OsmoseIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 220"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto select-none ${className}`}
      role="img"
      aria-label="Hoe omgekeerde osmose werkt: water met verontreinigingen wordt onder druk door een RO-membraan geperst, waarbij 99% van opgeloste stoffen wordt tegengehouden"
    >
      <defs>
        <linearGradient id="inputGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#BFDBFE" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
        <linearGradient id="outputGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#BAE6FD" />
          <stop offset="100%" stopColor="#7DD3FC" />
        </linearGradient>
        <linearGradient id="rejectGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="100%" stopColor="#F87171" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="520" height="220" rx="18" fill="#F8FAFC" />

      {/* ===== TITLE ===== */}
      <text x="260" y="24" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontSize="11" fontWeight="700" fill="#64748B" letterSpacing="0.5">
        WERKING OMGEKEERDE OSMOSE
      </text>

      {/* ===== INPUT SIDE ===== */}
      {/* Input water container */}
      <rect x="14" y="38" width="148" height="112" rx="10" fill="url(#inputGrad)" opacity="0.85" />
      <rect x="14" y="38" width="148" height="112" rx="10" fill="none" stroke="#60A5FA" strokeWidth="1.5" />

      {/* Input label */}
      <text x="88" y="58" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontSize="10" fontWeight="700" fill="#1E3A5F">Kraanwater</text>
      <text x="88" y="72" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontSize="8.5" fill="#1E40AF" opacity="0.8">onder druk (3-6 bar)</text>

      {/* Contaminant particles in input */}
      <circle cx="42" cy="90" r="5" fill="#EF4444" opacity="0.8" />
      <circle cx="58" cy="105" r="4" fill="#F59E0B" opacity="0.85" />
      <circle cx="72" cy="88" r="6" fill="#8B5CF6" opacity="0.75" />
      <circle cx="90" cy="108" r="4.5" fill="#EF4444" opacity="0.8" />
      <circle cx="108" cy="92" r="5" fill="#F59E0B" opacity="0.8" />
      <circle cx="50" cy="118" r="4" fill="#8B5CF6" opacity="0.7" />
      <circle cx="120" cy="118" r="5.5" fill="#EF4444" opacity="0.75" />
      <circle cx="82" cy="128" r="4" fill="#F59E0B" opacity="0.75" />
      <circle cx="135" cy="100" r="4" fill="#8B5CF6" opacity="0.7" />

      {/* Legend for input particles */}
      <circle cx="22" cy="163" r="4" fill="#EF4444" opacity="0.8" />
      <text x="30" y="167" fontFamily="system-ui,-apple-system,sans-serif" fontSize="8" fill="#64748B">PFAS/lood</text>
      <circle cx="80" cy="163" r="4" fill="#F59E0B" opacity="0.85" />
      <text x="88" y="167" fontFamily="system-ui,-apple-system,sans-serif" fontSize="8" fill="#64748B">Kalk/nitraat</text>
      <circle cx="22" cy="178" r="4" fill="#8B5CF6" opacity="0.75" />
      <text x="30" y="182" fontFamily="system-ui,-apple-system,sans-serif" fontSize="8" fill="#64748B">Microplastics</text>

      {/* Pressure arrow */}
      <path d="M88 175 L88 153" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      <text x="88" y="196" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontSize="8" fill="#2563EB">Pomp</text>

      {/* ===== MEMBRANE ===== */}
      <rect x="174" y="36" width="32" height="148" rx="6" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" />
      {/* Membrane lines - semi-permeable pattern */}
      {[44, 51, 58, 65, 72, 79, 86, 93, 100, 107, 114, 121, 128, 135, 142, 149, 156, 163, 170].map((y) => (
        <line key={y} x1="178" y1={y} x2="202" y2={y} stroke="#0EA5E9" strokeWidth="0.8" strokeOpacity="0.5" />
      ))}
      {/* Membrane label */}
      <text x="190" y="20" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontSize="9" fontWeight="700" fill="#0369A1">RO-membraan</text>
      <text x="190" y="30" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontSize="7.5" fill="#0284C7">0,0001 µm poriën</text>
      {/* Pore indicator */}
      <path d="M190 36 L190 20" stroke="#0369A1" strokeWidth="1" strokeDasharray="2,2" />

      {/* Water molecules passing through (small dots near top of membrane) */}
      <circle cx="183" cy="54" r="2" fill="#0EA5E9" opacity="0.7" />
      <circle cx="196" cy="60" r="2" fill="#0EA5E9" opacity="0.7" />
      <circle cx="184" cy="68" r="1.5" fill="#0EA5E9" opacity="0.6" />
      <circle cx="197" cy="74" r="2" fill="#0EA5E9" opacity="0.7" />

      {/* ===== OUTPUT SIDE ===== */}
      <rect x="220" y="38" width="148" height="65" rx="10" fill="url(#outputGrad)" opacity="0.7" />
      <rect x="220" y="38" width="148" height="65" rx="10" fill="none" stroke="#38BDF8" strokeWidth="1.5" />

      {/* Clean water indicator */}
      <text x="294" y="62" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontSize="10" fontWeight="700" fill="#0C4A6E">Gefilterd water</text>
      <text x="294" y="78" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontSize="8.5" fill="#0369A1">99% vrij van verontreinigingen</text>

      {/* Checkmark badge */}
      <circle cx="294" cy="93" r="10" fill="#D1FAE5" stroke="#34D399" strokeWidth="1.5" />
      <path d="M288 93L292 97L300 88" stroke="#059669" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* ===== REJECT SIDE ===== */}
      <rect x="220" y="116" width="148" height="34" rx="10" fill="url(#rejectGrad)" opacity="0.6" />
      <rect x="220" y="116" width="148" height="34" rx="10" fill="none" stroke="#F87171" strokeWidth="1.5" />

      {/* Reject particles */}
      <circle cx="250" cy="133" r="4" fill="#EF4444" opacity="0.75" />
      <circle cx="266" cy="128" r="3.5" fill="#F59E0B" opacity="0.8" />
      <circle cx="280" cy="135" r="4" fill="#8B5CF6" opacity="0.7" />
      <circle cx="296" cy="130" r="3" fill="#EF4444" opacity="0.75" />
      <circle cx="310" cy="136" r="3.5" fill="#F59E0B" opacity="0.75" />
      <circle cx="325" cy="128" r="3" fill="#8B5CF6" opacity="0.65" />
      <text x="294" y="158" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontSize="8.5" fill="#B91C1C">Concentraat → afvoer</text>
      <text x="294" y="170" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontSize="7.5" fill="#64748B">verontreinigingen afgevoerd</text>

      {/* ===== FLOW ARROWS ===== */}
      {/* Main flow right */}
      <path d="M162 72 L172 72 M167 67 L173 72 L167 77" stroke="#2563EB" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Clean water to right */}
      <path d="M206 64 L218 64 M213 59 L219 64 L213 69" stroke="#0369A1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Reject downward */}
      <path d="M197 108 L197 116" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M193 112 L197 116 L201 112" fill="none" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* ===== EFFICIENCY BADGE ===== */}
      <rect x="390" y="38" width="116" height="148" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
      <text x="448" y="62" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontSize="9" fontWeight="600" fill="#64748B">VERWIJDERT</text>

      {[
        { label: 'PFAS', pct: '99%', color: '#EF4444' },
        { label: 'Lood', pct: '97%', color: '#F59E0B' },
        { label: 'Nitraat', pct: '93%', color: '#8B5CF6' },
        { label: 'Kalk', pct: '99%', color: '#0EA5E9' },
        { label: 'Microplastics', pct: '99%', color: '#10B981' },
      ].map(({ label, pct, color }, i) => {
        const y = 80 + i * 22;
        const barW = (parseInt(pct) / 100) * 82;
        return (
          <g key={label}>
            <text x="396" y={y} fontFamily="system-ui,-apple-system,sans-serif" fontSize="8.5" fill="#374151">{label}</text>
            <rect x="396" y={y + 4} width="82" height="8" rx="4" fill="#F1F5F9" />
            <rect x="396" y={y + 4} width={barW} height="8" rx="4" fill={color} opacity="0.7" />
            <text x="483" y={y + 11} fontFamily="system-ui,-apple-system,sans-serif" fontSize="8.5" fontWeight="600" fill={color}>{pct}</text>
          </g>
        );
      })}
    </svg>
  );
}
