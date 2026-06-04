import type { Metadata } from 'next';
import Link from 'next/link';
import { gemeenten } from '@/data/gemeenten';
import { SchemaOrg } from '@/components/SchemaOrg';

const BASE = 'https://waterfilterplatform.nl';

export const metadata: Metadata = {
  title: 'Waterhardheid per gemeente (dataset)',
  description:
    'Machine-leesbare dataset met de indicatieve waterhardheid (dH) en hardheidsklasse per Nederlandse gemeente, inclusief waterbedrijf.',
  alternates: { canonical: `${BASE}/data/gemeente-hardheid` },
  openGraph: {
    title: 'Waterhardheid per gemeente (dataset)',
    description: 'Indicatieve dH en hardheidsklasse per Nederlandse gemeente.',
    url: `${BASE}/data/gemeente-hardheid`,
    type: 'website',
    locale: 'nl_NL',
  },
};

export default function GemeenteHardheidDataset() {
  const sample = gemeenten.slice(0, 30);
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: BASE },
        { name: 'Data', url: `${BASE}/data` },
        { name: 'Waterhardheid per gemeente', url: `${BASE}/data/gemeente-hardheid` },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'Dataset',
        name: 'Waterhardheid per gemeente in Nederland',
        description: 'Indicatieve waterhardheid (dH) en hardheidsklasse per Nederlandse gemeente, met waterbedrijf.',
        url: `${BASE}/data/gemeente-hardheid`,
        inLanguage: 'nl-NL',
        isAccessibleForFree: true,
        creator: { '@id': `${BASE}/#organization` },
        license: `${BASE}/ai.txt`,
        spatialCoverage: { '@type': 'Place', name: 'Nederland' },
        variableMeasured: { '@type': 'PropertyValue', name: 'Waterhardheid', unitText: 'dH' },
        distribution: [{ '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: `${BASE}/data/gemeente-hardheid.json` }],
      }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/data" className="hover:text-[#005F8A]">Data</Link>
            <span className="mx-2">/</span>
            <span>Waterhardheid per gemeente</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Waterhardheid per gemeente (dataset)</h1>
          <p className="text-gray-600 text-lg">
            Indicatieve waterhardheid (dH), hardheidsklasse en waterbedrijf voor {gemeenten.length} Nederlandse gemeenten.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Bron: openbare gegevens drinkwaterbedrijven (indicatief) &middot;{' '}
            <a href="/data/gemeente-hardheid.json" className="text-[#005F8A] underline">download als JSON</a> &middot;{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline">zoek je gemeente</Link>
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-[#003F5C] mb-4">Voorbeeld (eerste {sample.length} gemeenten)</h2>
        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full min-w-[640px] text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Gemeente</th>
                <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Provincie</th>
                <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Hardheid (dH)</th>
                <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Klasse</th>
                <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Waterbedrijf</th>
              </tr>
            </thead>
            <tbody>
              {sample.map(g => (
                <tr key={g.slug} className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">{g.naam}</th>
                  <td className="py-2.5 px-3 text-gray-700">{g.provincie}</td>
                  <td className="py-2.5 px-3 text-gray-700">{g.hardheid}</td>
                  <td className="py-2.5 px-3 text-gray-700">{g.categorie}</td>
                  <td className="py-2.5 px-3 text-gray-700">{g.waterbedrijf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          De volledige lijst van {gemeenten.length} gemeenten staat in de{' '}
          <a href="/data/gemeente-hardheid.json" className="text-[#005F8A] underline">JSON-download</a>. Waarden zijn
          indicatief; je drinkwaterbedrijf geeft de exacte hardheid voor jouw adres.
        </p>
      </div>
    </>
  );
}
