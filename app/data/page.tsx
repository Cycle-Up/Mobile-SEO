import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

const BASE = 'https://waterfilterplatform.nl';

export const metadata: Metadata = {
  title: 'Open data over water: datasets en downloads',
  description:
    'Machine-leesbare datasets over drinkwater: normen, waterhardheid per gemeente, filtertechnieken, keurmerken, verwijdering per filter en meer. Met JSON-download.',
  alternates: { canonical: `${BASE}/data` },
  openGraph: {
    title: 'Open data over water - datasets',
    description: 'Datasets over normen, hardheid, filtertechnieken en keurmerken met JSON-download.',
    url: `${BASE}/data`,
    type: 'website',
    locale: 'nl_NL',
  },
};

const datasets: [string, string, string][] = [
  ['/data/drinkwaternormen', 'Drinkwaternormen', 'Wettelijke maximumwaarden per stof'],
  ['/data/gemeente-hardheid', 'Waterhardheid per gemeente', 'dH en klasse per gemeente'],
  ['/data/filtertechniek-matrix', 'Filtertechnieken-matrix', 'Poriegrootte en werking'],
  ['/data/keurmerken', 'Keurmerken-register', 'NSF/ANSI, Kiwa, WRAS, ACS, CE'],
  ['/data/verwijdering-matrix', 'Verwijdering per filter', 'Indicatief per stof'],
  ['/data/waterbedrijven', 'Drinkwaterbedrijven', 'Provincies en dekking'],
  ['/data/poriegrootte-schaal', 'Poriegrootte-schaal', 'Van grof naar fijn'],
  ['/data/tds-ec-referentie', 'TDS/EC-referentie', 'Bereiken per watertype'],
];

export default function DataHub() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: BASE },
        { name: 'Data', url: `${BASE}/data` },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'CollectionPage',
        name: 'Open data over water',
        url: `${BASE}/data`,
        inLanguage: 'nl-NL',
        isPartOf: { '@id': `${BASE}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: datasets.length,
          itemListElement: datasets.map((d, i) => ({ '@type': 'ListItem', position: i + 1, name: d[1], url: `${BASE}${d[0]}` })),
        },
      }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Data</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Open data over water</h1>
          <p className="text-gray-600 text-lg">
            Machine-leesbare datasets over drinkwater, hardheid, filtertechnieken en keurmerken. Elke
            dataset heeft een zichtbare tabel met bronvermelding en een JSON-download voor hergebruik.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {datasets.map(([href, t, d]) => (
            <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{t}</p>
              <p className="text-sm text-gray-500">{d}</p>
            </Link>
          ))}
        </div>
        <p className="text-gray-700 text-sm leading-relaxed mt-8">
          Waarden zijn officieel (Drinkwaterbesluit, EU 2020/2184, RIVM, NSF/ANSI) of indicatief waar
          geen exact bron-cijfer bestaat. Raadpleeg altijd de genoemde bron voor exacte, actuele waarden.
        </p>
      </div>
    </>
  );
}
