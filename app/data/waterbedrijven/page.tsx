import type { Metadata } from 'next';
import Link from 'next/link';
import { gemeenten } from '@/data/gemeenten';
import { SchemaOrg } from '@/components/SchemaOrg';

const BASE = 'https://waterfilterplatform.nl';

export const metadata: Metadata = {
  title: 'Nederlandse drinkwaterbedrijven (dataset)',
  description:
    'Machine-leesbare dataset met de Nederlandse drinkwaterbedrijven, de provincies waarin ze leveren en het aantal gemeenten in de dataset.',
  alternates: { canonical: `${BASE}/data/waterbedrijven` },
  openGraph: {
    title: 'Nederlandse drinkwaterbedrijven (dataset)',
    description: 'Drinkwaterbedrijven met provincies en aantal gemeenten.',
    url: `${BASE}/data/waterbedrijven`,
    type: 'website',
    locale: 'nl_NL',
  },
};

function rows() {
  const map = new Map<string, { naam: string; provincies: Set<string>; aantal: number }>();
  for (const g of gemeenten) {
    if (!map.has(g.waterbedrijf)) map.set(g.waterbedrijf, { naam: g.waterbedrijf, provincies: new Set(), aantal: 0 });
    const e = map.get(g.waterbedrijf)!;
    e.provincies.add(g.provincie);
    e.aantal++;
  }
  return [...map.values()].sort((a, b) => b.aantal - a.aantal);
}

export default function WaterbedrijvenDataset() {
  const data = rows();
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: BASE },
        { name: 'Data', url: `${BASE}/data` },
        { name: 'Drinkwaterbedrijven', url: `${BASE}/data/waterbedrijven` },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'Dataset',
        name: 'Nederlandse drinkwaterbedrijven',
        description: 'Drinkwaterbedrijven met de provincies en het aantal gemeenten in de dataset.',
        url: `${BASE}/data/waterbedrijven`,
        inLanguage: 'nl-NL',
        isAccessibleForFree: true,
        creator: { '@id': `${BASE}/#organization` },
        license: `${BASE}/ai.txt`,
        spatialCoverage: { '@type': 'Place', name: 'Nederland' },
        distribution: [{ '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: `${BASE}/data/waterbedrijven.json` }],
      }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/data" className="hover:text-[#005F8A]">Data</Link>
            <span className="mx-2">/</span>
            <span>Drinkwaterbedrijven</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Nederlandse drinkwaterbedrijven (dataset)</h1>
          <p className="text-gray-600 text-lg">
            De drinkwaterbedrijven in de dataset, met de provincies waarin ze leveren en het aantal gemeenten.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Bron: afgeleid uit de gemeente-hardheid dataset &middot;{' '}
            <a href="/data/waterbedrijven.json" className="text-[#005F8A] underline">download als JSON</a> &middot;{' '}
            <Link href="/waterbedrijven" className="text-[#005F8A] underline">over de waterbedrijven</Link>
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full min-w-[640px] text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Waterbedrijf</th>
                <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Provincies</th>
                <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Gemeenten in dataset</th>
              </tr>
            </thead>
            <tbody>
              {data.map(e => (
                <tr key={e.naam} className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">{e.naam}</th>
                  <td className="py-2.5 px-3 text-gray-700">{[...e.provincies].sort().join(', ')}</td>
                  <td className="py-2.5 px-3 text-gray-700">{e.aantal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-4">Afgeleid uit publieke gemeente-gegevens; voor de exacte verzorgingsgebieden gelden de drinkwaterbedrijven zelf.</p>
      </div>
    </>
  );
}
