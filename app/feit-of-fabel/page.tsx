import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

const BASE = 'https://waterfilterplatform.nl';

export const metadata: Metadata = {
  title: 'Feit of fabel: mythes over water en filters ontkracht',
  description:
    'Veelgehoorde mythes over kraanwater, osmose, hard water en filters, met een helder oordeel (feit, fabel of genuanceerd) en bronnen.',
  alternates: { canonical: `${BASE}/feit-of-fabel` },
  openGraph: {
    title: 'Feit of fabel over water',
    description: 'Mythes over water en filters met een helder oordeel en bronnen.',
    url: `${BASE}/feit-of-fabel`,
    type: 'website',
    locale: 'nl_NL',
  },
};

const items: [string, string, string][] = [
  ['/feit-of-fabel/flessenwater-gezonder', 'Kraanwater minder gezond dan flessenwater?', 'Fabel'],
  ['/feit-of-fabel/osmose-mineralen-lichaam', 'Osmosewater ontneemt mineralen?', 'Genuanceerd'],
  ['/feit-of-fabel/hard-water-ongezond', 'Hard water is ongezond?', 'Fabel'],
  ['/feit-of-fabel/magneet-ontkalker-werkt', 'Magneet net zo goed als ontharder?', 'Fabel'],
  ['/feit-of-fabel/koken-zuivert-water', 'Koken haalt alle verontreinigingen weg?', 'Fabel'],
  ['/feit-of-fabel/tds-meter-veiligheid', 'TDS-meter meet veiligheid?', 'Fabel'],
  ['/feit-of-fabel/alkalisch-water-gezonder', 'Alkalisch water gezonder?', 'Genuanceerd'],
];

export default function FeitOfFabelHub() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: BASE },
        { name: 'Feit of fabel', url: `${BASE}/feit-of-fabel` },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'CollectionPage',
        name: 'Feit of fabel over water',
        url: `${BASE}/feit-of-fabel`,
        inLanguage: 'nl-NL',
        isPartOf: { '@id': `${BASE}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: items.length,
          itemListElement: items.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c[1], url: `${BASE}${c[0]}` })),
        },
      }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Feit of fabel</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Feit of fabel over water</h1>
          <p className="text-gray-600 text-lg">
            Veelgehoorde mythes over kraanwater, osmose, hard water en filters, met een helder oordeel
            en bronnen. Zo scheid je de feiten van de fabels.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="space-y-3">
          {items.map(([href, q, v]) => (
            <Link key={href} href={href} className="flex items-center justify-between gap-3 border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <span className="font-medium text-gray-800">{q}</span>
              <span className="shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#003F5C]">{v}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
