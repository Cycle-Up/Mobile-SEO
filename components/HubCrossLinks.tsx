import Link from 'next/link';

// De vier commerciele hubs waar we interne linkkracht op willen concentreren.
// Contextueel cross-linken tussen deze hubs (en naar /aanbevolen) laat de
// koopintentie-autoriteit naar de high-value pagina's vloeien.
const HUBS = [
  { key: 'omgekeerde-osmose', href: '/omgekeerde-osmose', title: 'Omgekeerde osmose', desc: 'Zuiver water via een RO-membraan (PFAS, lood, kalk).' },
  { key: 'waterontharder', href: '/waterontharder', title: 'Waterontharder', desc: 'Hard water en kalk structureel aanpakken.' },
  { key: 'kokend-water-kraan', href: '/kokend-water-kraan', title: 'Kokend water kraan', desc: 'Direct kokend en gefilterd water uit een kraan.' },
  { key: 'aanbevolen', href: '/aanbevolen', title: 'Aanbevolen producten', desc: 'Onze productaanbevelingen per situatie op een rij.' },
];

/**
 * Herbruikbaar cross-link-blok tussen de commerciele hubs. Geef via `exclude`
 * de eigen hub op zodat een pagina niet naar zichzelf linkt.
 */
export function HubCrossLinks({ exclude, heading = 'Direct naar een oplossing' }: { exclude?: string; heading?: string }) {
  const items = HUBS.filter(h => h.key !== exclude);
  return (
    <section className="my-10">
      <h2 className="text-xl font-bold text-[#005F8A] mb-4">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map(h => (
          <Link
            key={h.href}
            href={h.href}
            className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
          >
            <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{h.title}</p>
            <p className="text-sm text-gray-500">{h.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
