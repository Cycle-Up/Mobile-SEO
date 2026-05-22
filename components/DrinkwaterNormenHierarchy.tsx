interface DrinkwaterNormenHierarchyProps {
  className?: string;
}

export function DrinkwaterNormenHierarchy({ className = '' }: DrinkwaterNormenHierarchyProps) {
  const width = 560;
  const height = 360;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label="Hiërarchie van Nederlandse drinkwater-regelgeving: EU-richtlijn 2020/2184, Drinkwaterbesluit, RIVM en ILT toezicht, 10 waterbedrijven, consument."
    >
      <defs>
        <linearGradient id="dnhBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0F9FF" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width={width} height={height} fill="url(#dnhBg)" rx="12" />

      <text x={width / 2} y="24" textAnchor="middle" fill="#003F5C" fontWeight="700" fontSize="14">
        Wie controleert Nederlands drinkwater?
      </text>

      {/* Layer 1: EU */}
      <g>
        <rect x="120" y="44" width="320" height="44" rx="8" fill="#1E40AF" />
        <text x={width / 2} y="64" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
          EU-Drinkwaterrichtlijn 2020/2184
        </text>
        <text x={width / 2} y="80" textAnchor="middle" fill="#BFDBFE" fontSize="10">
          Europees Parlement & Raad — bindende minimumnormen
        </text>
      </g>

      <line x1={width / 2} y1="88" x2={width / 2} y2="104" stroke="#94A3B8" strokeWidth="1.5" />

      {/* Layer 2: NL */}
      <g>
        <rect x="100" y="104" width="360" height="44" rx="8" fill="#005F8A" />
        <text x={width / 2} y="124" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
          Drinkwaterbesluit Nederland (Stb. 2011, 293)
        </text>
        <text x={width / 2} y="140" textAnchor="middle" fill="#BAE6FD" fontSize="10">
          Nationale omzetting van de EU-richtlijn + extra eisen
        </text>
      </g>

      <line x1={width / 2} y1="148" x2={width / 2} y2="164" stroke="#94A3B8" strokeWidth="1.5" />

      {/* Layer 3: Toezicht (RIVM + ILT split) */}
      <g>
        <rect x="60" y="164" width="200" height="44" rx="8" fill="#0EA5E9" />
        <text x="160" y="184" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
          RIVM
        </text>
        <text x="160" y="200" textAnchor="middle" fill="#E0F2FE" fontSize="9">
          Wetenschappelijk onderzoek & advies
        </text>

        <rect x="300" y="164" width="200" height="44" rx="8" fill="#0EA5E9" />
        <text x="400" y="184" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
          ILT
        </text>
        <text x="400" y="200" textAnchor="middle" fill="#E0F2FE" fontSize="9">
          Toezicht & handhaving
        </text>
      </g>

      <line x1="160" y1="208" x2="160" y2="224" stroke="#94A3B8" strokeWidth="1.5" />
      <line x1="400" y1="208" x2="400" y2="224" stroke="#94A3B8" strokeWidth="1.5" />
      <line x1="160" y1="224" x2="400" y2="224" stroke="#94A3B8" strokeWidth="1.5" />
      <line x1={width / 2} y1="224" x2={width / 2} y2="236" stroke="#94A3B8" strokeWidth="1.5" />

      {/* Layer 4: Waterbedrijven */}
      <g>
        <rect x="120" y="236" width="320" height="44" rx="8" fill="#0284C7" />
        <text x={width / 2} y="256" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
          10 Nederlandse waterbedrijven
        </text>
        <text x={width / 2} y="272" textAnchor="middle" fill="#E0F2FE" fontSize="9">
          Vitens · Evides · PWN · Dunea · Brabant Water · Waternet · WML · Oasen · WDL · Groningen
        </text>
      </g>

      <line x1={width / 2} y1="280" x2={width / 2} y2="296" stroke="#94A3B8" strokeWidth="1.5" />

      {/* Layer 5: Consument */}
      <g>
        <rect x="180" y="296" width="200" height="44" rx="8" fill="#22C55E" />
        <text x={width / 2} y="316" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
          Consument — uit de kraan
        </text>
        <text x={width / 2} y="332" textAnchor="middle" fill="#DCFCE7" fontSize="9">
          Veilig drinkwater volgens EU-norm
        </text>
      </g>
    </svg>
  );
}
