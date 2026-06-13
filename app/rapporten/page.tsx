import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

const BASE = 'https://waterfilterplatform.nl';

export const metadata: Metadata = {
  title: 'Rapporten en trends: de staat van Nederlands drinkwater',
  description:
    'Data-rapporten en trendoverzichten over Nederlands drinkwater: staat van het drinkwater, PFAS, normwijzigingen, filtertrends en verzilting.',
  alternates: { canonical: `${BASE}/rapporten` },
  openGraph: {
    title: 'Rapporten en trends over drinkwater',
    description: 'Datarapporten en trends over Nederlands drinkwater.',
    url: `${BASE}/rapporten`,
    type: 'website',
    locale: 'nl_NL',
  },
};

const items: [string, string, string][] = [
  ['/rapporten/staat-van-drinkwater-2026', 'Staat van drinkwater 2026', 'Kerncijfers en aandachtspunten'],
  ['/rapporten/pfas-trendoverzicht-2026', 'PFAS-trendoverzicht 2026', 'Norm, aanpak en filters'],
  ['/rapporten/normwijzigingen-overzicht', 'Normwijzigingen-overzicht', 'Wat veranderde er'],
  ['/rapporten/trends-waterfilters', 'Trends in waterfilters', 'Tankless en efficienter'],
  ['/rapporten/verzilting-droogte-context', 'Verzilting en droogte', 'Context voor drinkwater'],
];

export default function RapportenHub() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: BASE },
        { name: 'Rapporten', url: `${BASE}/rapporten` },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'CollectionPage',
        name: 'Rapporten en trends over drinkwater',
        url: `${BASE}/rapporten`,
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
            <span>Rapporten</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Rapporten en trends</h1>
          <p className="text-gray-600 text-lg">
            Data-rapporten en trendoverzichten over Nederlands drinkwater, met kerncijfers en bronnen.
            Bedoeld als citeerbare, feitelijke achtergrond.
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
      </div>
    </>
  );
}
