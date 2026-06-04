import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

const BASE = 'https://waterfilterplatform.nl';

export const metadata: Metadata = {
  title: 'Beslishulp: in een paar vragen naar de juiste waterkeuze',
  description:
    'Interactieve beslishulpen die je in een paar vragen naar de juiste waterfilter, waterontharder, osmose of reisfilter leiden.',
  alternates: { canonical: `${BASE}/beslishulp` },
  openGraph: {
    title: 'Beslishulp voor waterfilters',
    description: 'Vind in een paar vragen de juiste waterkeuze.',
    url: `${BASE}/beslishulp`,
    type: 'website',
    locale: 'nl_NL',
  },
};

const items: [string, string, string][] = [
  ['/beslishulp/welke-waterfilter', 'Welke waterfilter past bij mij?', 'Op basis van je doel'],
  ['/beslishulp/osmose-nodig', 'Heb ik omgekeerde osmose nodig?', 'PFAS, lood, nitraat of zuiver water'],
  ['/beslishulp/welke-waterontharder', 'Welke waterontharder past bij mij?', 'Zout, zoutloos of osmose'],
  ['/beslishulp/kokend-kraan-nodig', 'Heb ik een kokend water kraan nodig?', 'Gebruik en budget'],
  ['/beslishulp/filteren-of-ontharden', 'Filteren, ontharden of allebei?', 'Op basis van je hoofddoel'],
  ['/beslishulp/putwater-filter', 'Welke filter voor putwater?', 'Bacterien, nitraat of ijzer'],
  ['/beslishulp/reisfilter', 'Welke reisfilter past bij mij?', 'Op basis van je bestemming'],
];

export default function BeslishulpHub() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: BASE },
        { name: 'Beslishulp', url: `${BASE}/beslishulp` },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'CollectionPage',
        name: 'Beslishulp voor waterfilters',
        url: `${BASE}/beslishulp`,
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
            <span>Beslishulp</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Beslishulp</h1>
          <p className="text-gray-600 text-lg">
            Beantwoord een paar vragen en kom direct bij de juiste waterkeuze. Elke beslishulp geeft
            een onderbouwd advies met een link naar de verdieping.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map(([href, t, d]) => (
            <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{t}</p>
              <p className="text-sm text-gray-500">{d}</p>
            </Link>
          ))}
        </div>
        <p className="text-gray-700 text-sm leading-relaxed mt-8">
          Wil je een uitgebreider advies op maat? Gebruik de <Link href="/keuzehulp" className="text-[#005F8A] underline">keuzehulp</Link>.
        </p>
      </div>
    </>
  );
}
