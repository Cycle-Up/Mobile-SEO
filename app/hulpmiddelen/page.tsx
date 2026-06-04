import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Hulpmiddelen: waterfilter- en hardheidscalculators',
  description:
    'Interactieve rekentools voor water: zout-kosten, osmose-afvalwater, kokend water kraan-kosten, flessenwater-besparing, hardheid omrekenen en meer.',
  alternates: { canonical: 'https://waterfilterplatform.nl/hulpmiddelen' },
  openGraph: {
    title: 'Hulpmiddelen - waterfilter-calculators',
    description: 'Interactieve rekentools voor zout, afvalwater, kosten, hardheid en meer.',
    url: 'https://waterfilterplatform.nl/hulpmiddelen',
    type: 'website',
    locale: 'nl_NL',
  },
};

const BASE = 'https://waterfilterplatform.nl';

const tools: [string, string, string][] = [
  ['/hulpmiddelen/waterontharder-zout-kosten', 'Zout-kosten calculator', 'Jaarlijks zoutverbruik en -kosten'],
  ['/hulpmiddelen/osmose-afvalwater', 'Osmose afvalwater-calculator', 'Permeaat en concentraat per jaar'],
  ['/hulpmiddelen/kokend-water-kraan-kosten', 'Kokend kraan kostencalculator', 'Energie en TCO over jaren'],
  ['/hulpmiddelen/flessenwater-besparing', 'Flessenwater-besparing', 'Euro- en CO2-besparing'],
  ['/hulpmiddelen/waterhardheid-omrekenen', 'Hardheid omrekenen', 'dH, mmol/L, ppm, fH'],
  ['/hulpmiddelen/filter-vervangdatum', 'Filter-vervangdatum', 'Volgende vervangmoment'],
  ['/hulpmiddelen/kalkrisico', 'Kalkrisico-indicator', 'Hardheidsklasse en risico'],
  ['/hulpmiddelen/osmose-rejectie', 'Membraan-rejectie', 'TDS in/uit en conditie'],
  ['/hulpmiddelen/waterverbruik', 'Waterverbruik-schatter', 'Per dag en per jaar'],
  ['/hulpmiddelen/zout-bijvul-interval', 'Zout-bijvulinterval', 'Hoe vaak bijvullen'],
];

export default function HulpmiddelenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: BASE },
        { name: 'Hulpmiddelen', url: `${BASE}/hulpmiddelen` },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'CollectionPage',
        name: 'Hulpmiddelen - waterfilter-calculators',
        url: `${BASE}/hulpmiddelen`,
        inLanguage: 'nl-NL',
        isPartOf: { '@id': `${BASE}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: tools.length,
          itemListElement: tools.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t[1], url: `${BASE}${t[0]}` })),
        },
      }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Hulpmiddelen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Hulpmiddelen en calculators</h1>
          <p className="text-gray-600 text-lg">
            Interactieve rekentools met transparante formules: bereken indicatief je zoutverbruik,
            osmose-afvalwater, kosten, hardheid-omrekening en meer. Geen meting, wel een goede schatting.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tools.map(([href, t, d]) => (
            <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{t}</p>
              <p className="text-sm text-gray-500">{d}</p>
            </Link>
          ))}
        </div>
        <p className="text-gray-700 text-sm leading-relaxed mt-8">
          Alle uitkomsten zijn indicatief en gebaseerd op transparante aannames en je eigen invoer.
          Voor exacte waarden gelden je drinkwaterbedrijf, fabrikant en officiele bronnen.
        </p>
      </div>
    </>
  );
}
