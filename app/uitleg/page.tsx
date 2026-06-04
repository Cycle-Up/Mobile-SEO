import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

const BASE = 'https://waterfilterplatform.nl';

export const metadata: Metadata = {
  title: 'Uitleg en matrices: water in een oogopslag',
  description:
    'Visuele explainers en vergelijkingsmatrices over water: filtertechnieken, poriegrootte, normen-tijdlijn, verontreinigingen, hardheidsklassen en kosten.',
  alternates: { canonical: `${BASE}/uitleg` },
  openGraph: {
    title: 'Uitleg en matrices over water',
    description: 'Vergelijkingsmatrices en explainers over filters, normen en kosten.',
    url: `${BASE}/uitleg`,
    type: 'website',
    locale: 'nl_NL',
  },
};

const items: [string, string, string][] = [
  ['/uitleg/filtertechnieken-matrix', 'Filtertechnieken-matrix', 'Wat doet wat'],
  ['/uitleg/poriegrootte-schaal', 'Poriegrootte-schaal', 'Van grof naar fijn'],
  ['/uitleg/drinkwaternormen-tijdlijn', 'Normen-tijdlijn', 'PFAS, lood en meer'],
  ['/uitleg/verontreinigingen-overzicht', 'Verontreinigingen-overzicht', 'Bron, risico, oplossing'],
  ['/uitleg/hardheidsklassen', 'Hardheidsklassen', 'Zacht, gemiddeld, hard'],
  ['/uitleg/kostenoverzicht-waterfilters', 'Kostenoverzicht', 'Aanschaf en jaarlijks'],
  ['/uitleg/energie-en-waterverbruik', 'Energie en verbruik', 'Per oplossing'],
];

export default function UitlegHub() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: BASE },
        { name: 'Uitleg', url: `${BASE}/uitleg` },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'CollectionPage',
        name: 'Uitleg en matrices over water',
        url: `${BASE}/uitleg`,
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
            <span>Uitleg</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Uitleg en matrices</h1>
          <p className="text-gray-600 text-lg">
            Visuele explainers en vergelijkingsmatrices die water in een oogopslag begrijpelijk maken:
            van filtertechnieken en poriegrootte tot normen, kosten en verbruik.
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
          De machine-leesbare versies van deze overzichten vind je als <Link href="/data" className="text-[#005F8A] underline">open datasets</Link>.
        </p>
      </div>
    </>
  );
}
