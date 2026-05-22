const DEFAULT_SOURCES = [
  'Drinkwaterbesluit (Stb. 2011, 293), inclusief wijzigingen 2023',
  'Europese Drinkwaterrichtlijn 2020/2184/EU',
  'RIVM – Drinkwaterkwaliteit in Nederland (jaarrapportage)',
  'Inspectie Leefomgeving en Transport (ILT) – Toezicht drinkwaterbedrijven',
  'WHO – Guidelines for Drinking-water Quality (4e editie, 2022)',
];

interface SourcesSectionProps {
  sources?: string[];
  extra?: string[];
}

export function SourcesSection({ sources, extra }: SourcesSectionProps) {
  const list = [...(sources?.length ? sources : DEFAULT_SOURCES), ...(extra ?? [])];

  return (
    <section className="mt-10 pt-6 border-t border-gray-100" aria-label="Bronnen">
      <h2 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
        <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 shrink-0" aria-hidden="true">
          <rect x="3" y="2" width="14" height="17" rx="2" stroke="#005F8A" strokeWidth="1.3" />
          <path d="M6 6.5h8M6 10h8M6 13.5h5" stroke="#005F8A" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        Bronnen en verwijzingen
      </h2>
      <ol className="space-y-1.5 list-none">
        {list.map((s, i) => (
          <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
            <span className="shrink-0 font-medium text-gray-400 tabular-nums w-4">{i + 1}.</span>
            <span className="leading-relaxed">{s}</span>
          </li>
        ))}
      </ol>
      <p className="text-[10px] text-gray-400 mt-4 leading-relaxed">
        WaterfilterPlatform streeft ernaar informatie te baseren op officiële en peer-reviewed bronnen.
        Gevonden een onjuistheid of verouderde informatie?{' '}
        <a href="/contact" className="text-[#005F8A] hover:underline">Laat het ons weten →</a>
      </p>
    </section>
  );
}
