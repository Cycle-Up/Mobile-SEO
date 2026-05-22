export function HeroIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 192"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto select-none ${className}`}
      role="img"
      aria-label="Waterfiltratie in drie stappen: van kraanwater via sedimentfilter, actief koolfilter en RO-membraan naar schoon gefilterd drinkwater"
    >
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EFF9FF" />
          <stop offset="100%" stopColor="#E0F2FE" />
        </linearGradient>
        <filter id="softShadow" x="-5%" y="-5%" width="110%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#93C5FD" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="480" height="192" rx="18" fill="url(#bgGrad)" />

      {/* === PANEL 1: Kraanwater === */}
      <circle cx="75" cy="94" r="50" fill="#DBEAFE" filter="url(#softShadow)" />
      <circle cx="75" cy="94" r="50" fill="none" stroke="#93C5FD" strokeWidth="1.5" />

      {/* Water drop */}
      <path
        d="M75 56 C73 59 56 77 56 94 C56 106 64.5 114 75 114 C85.5 114 94 106 94 94 C94 77 77 59 75 56Z"
        fill="#3B82F6"
        opacity="0.5"
      />

      {/* Pollutant particles */}
      <circle cx="66" cy="82" r="3" fill="#F59E0B" opacity="0.9" />
      <circle cx="84" cy="78" r="2.2" fill="#EF4444" opacity="0.85" />
      <circle cx="70" cy="100" r="2.5" fill="#8B5CF6" opacity="0.75" />
      <circle cx="88" cy="95" r="2" fill="#F97316" opacity="0.8" />
      <circle cx="63" cy="107" r="1.8" fill="#EF4444" opacity="0.6" />

      {/* Panel 1 labels */}
      <text x="75" y="158" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontSize="11" fontWeight="700" fill="#0F3C5E">Kraanwater</text>
      <text x="75" y="172" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontSize="9" fill="#64748B">PFAS · kalk · chloor</text>

      {/* === ARROW 1 === */}
      <path
        d="M130 92 L143 92 M137 86 L144 92 L137 98"
        stroke="#94A3B8"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* === FILTER PANEL === */}
      <rect x="148" y="46" width="184" height="96" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="1.5" filter="url(#softShadow)" />

      {/* Layer 1: Sediment */}
      <rect x="156" y="54" width="168" height="26" rx="5" fill="#FEF9C3" />
      <rect x="156" y="54" width="168" height="26" rx="5" fill="none" stroke="#FDE68A" strokeWidth="1" />
      <line x1="163" y1="61" x2="317" y2="61" stroke="#D97706" strokeWidth="0.9" strokeOpacity="0.45" />
      <line x1="163" y1="67" x2="317" y2="67" stroke="#D97706" strokeWidth="0.9" strokeOpacity="0.35" />
      <line x1="163" y1="73" x2="317" y2="73" stroke="#D97706" strokeWidth="0.9" strokeOpacity="0.45" />
      <text x="240" y="72" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontSize="9" fontWeight="600" fill="#92400E">Sedimentfilter</text>

      {/* Layer 2: Carbon */}
      <rect x="156" y="85" width="168" height="26" rx="5" fill="#1E293B" />
      <rect x="156" y="85" width="168" height="26" rx="5" fill="none" stroke="#334155" strokeWidth="1" />
      <circle cx="174" cy="98" r="2.8" fill="#475569" opacity="0.8" />
      <circle cx="188" cy="94" r="2.3" fill="#64748B" opacity="0.7" />
      <circle cx="202" cy="99" r="2.8" fill="#475569" opacity="0.8" />
      <circle cx="216" cy="95" r="2.3" fill="#64748B" opacity="0.7" />
      <circle cx="230" cy="98" r="2.8" fill="#475569" opacity="0.8" />
      <circle cx="244" cy="94" r="2.3" fill="#64748B" opacity="0.7" />
      <circle cx="258" cy="99" r="2.8" fill="#475569" opacity="0.8" />
      <circle cx="272" cy="95" r="2.3" fill="#64748B" opacity="0.7" />
      <circle cx="286" cy="99" r="2.8" fill="#475569" opacity="0.8" />
      <circle cx="300" cy="95" r="2.3" fill="#64748B" opacity="0.7" />
      <text x="240" y="102" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontSize="9" fontWeight="600" fill="#94A3B8">Actief koolfilter</text>

      {/* Layer 3: RO Membrane */}
      <rect x="156" y="116" width="168" height="22" rx="5" fill="#BFDBFE" />
      <rect x="156" y="116" width="168" height="22" rx="5" fill="none" stroke="#93C5FD" strokeWidth="1" />
      {[164, 172, 180, 188, 196, 204, 212, 220, 228, 236, 244, 252, 260, 268, 276, 284, 292, 300, 308].map((x) => (
        <line key={x} x1={x} y1={118} x2={x} y2={136} stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.45" />
      ))}
      <text x="240" y="131" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontSize="9" fontWeight="600" fill="#1D4ED8">RO-membraan</text>

      {/* Filter labels */}
      <text x="240" y="158" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontSize="11" fontWeight="700" fill="#0F3C5E">Waterfilter</text>
      <text x="240" y="172" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontSize="9" fill="#64748B">3-staps filtratie</text>

      {/* === ARROW 2 === */}
      <path
        d="M337 92 L350 92 M344 86 L351 92 L344 98"
        stroke="#94A3B8"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* === PANEL 3: Schoon water === */}
      <circle cx="405" cy="94" r="50" fill="#DCFCE7" filter="url(#softShadow)" />
      <circle cx="405" cy="94" r="50" fill="none" stroke="#86EFAC" strokeWidth="1.5" />

      {/* Clean water drop */}
      <path
        d="M405 56 C403 59 386 77 386 94 C386 106 394.5 114 405 114 C415.5 114 424 106 424 94 C424 77 407 59 405 56Z"
        fill="#0EA5E9"
        opacity="0.3"
      />

      {/* Checkmark */}
      <path
        d="M389 94 L401 106 L424 80"
        stroke="#16A34A"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Panel 3 labels */}
      <text x="405" y="158" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontSize="11" fontWeight="700" fill="#0F3C5E">Schoon water</text>
      <text x="405" y="172" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontSize="9" fill="#16A34A">99% gefilterd</text>
    </svg>
  );
}
