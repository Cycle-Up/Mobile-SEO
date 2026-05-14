import Link from 'next/link';
import type { Gemeente } from '@/data/gemeenten';
import { getHardheidLabel } from '@/data/gemeenten';

interface PageType {
  path: string;
  label: string;
  desc: (g: Gemeente) => string;
}

const PAGE_TYPES: PageType[] = [
  { path: 'waterhardheid', label: 'Waterhardheid', desc: g => `${g.hardheid}°dH — ${getHardheidLabel(g.categorie).toLowerCase()}` },
  { path: 'waterontharder', label: 'Waterontharder', desc: () => 'Nodig of niet? Kosten en advies' },
  { path: 'waterontkalker', label: 'Waterontkalker', desc: () => 'Magnetisch alternatief voor ontharder' },
  { path: 'osmose-filter', label: 'Osmosefilter', desc: () => 'Puur drinkwater via omgekeerde osmose' },
  { path: 'waterfilter', label: 'Waterfilter', desc: () => 'Welk filter past bij dit water?' },
  { path: 'kokend-water-kraan', label: 'Kokend water kraan', desc: () => 'Direct kokend water aan tafel' },
  { path: 'kraanwater', label: 'Kraanwater', desc: () => 'Kwaliteit en veiligheid van kraanwater' },
  { path: 'drinkwater', label: 'Drinkwater', desc: () => 'Drinkwaterkwaliteit en normen' },
  { path: 'leidingwater', label: 'Leidingwater', desc: () => 'Samenstelling en eigenschappen' },
  { path: 'kalk-in', label: 'Kalk in huis', desc: () => 'Kalkproblemen en oplossingen' },
];

interface GemeenteLinksProps {
  gemeente: Gemeente;
  currentPath: string;
}

export function GemeenteLinks({ gemeente, currentPath }: GemeenteLinksProps) {
  const others = PAGE_TYPES.filter(p => p.path !== currentPath);

  return (
    <section>
      <h2 className="text-xl font-bold text-[#003F5C] mb-3">
        Meer over water in {gemeente.naam}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {others.map(p => (
          <Link
            key={p.path}
            href={`/${p.path}/${gemeente.slug}`}
            className="group border border-gray-100 rounded-xl p-3 hover:border-[#005F8A] transition-all"
          >
            <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">
              {p.label} {gemeente.naam}
            </p>
            <p className="text-xs text-gray-500">{p.desc(gemeente)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
