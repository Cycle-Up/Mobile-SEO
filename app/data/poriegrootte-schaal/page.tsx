import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { DATASETS } from '@/lib/datasets.mjs';

const KEY = "poriegrootte-schaal";
const ds = DATASETS[KEY];

export const metadata: Metadata = {
  title: "Poriegrootte-schaal van filtertechnieken (dataset)",
  description: "Filtertechnieken gesorteerd van grof naar fijn met indicatieve poriegrootte in micrometer.",
  alternates: { canonical: 'https://waterfilterplatform.nl/data/' + KEY },
  openGraph: { title: "Poriegrootte-schaal van filtertechnieken (dataset)", description: "Filtertechnieken gesorteerd van grof naar fijn met indicatieve poriegrootte in micrometer.", url: 'https://waterfilterplatform.nl/data/' + KEY, type: 'website', locale: 'nl_NL' },
};

export default function PoriegrootteSchaalDataset() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Data', url: 'https://waterfilterplatform.nl/data' },
        { name: ds.name, url: 'https://waterfilterplatform.nl/data/' + KEY },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'Dataset',
        name: ds.name,
        description: ds.description,
        url: 'https://waterfilterplatform.nl/data/' + KEY,
        inLanguage: 'nl-NL',
        isAccessibleForFree: true,
        creator: { '@id': 'https://waterfilterplatform.nl/#organization' },
        license: 'https://waterfilterplatform.nl/ai.txt',
        distribution: [{ '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: 'https://waterfilterplatform.nl/data/' + KEY + '.json' }],
        variableMeasured: ds.columns,
      }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/data" className="hover:text-[#005F8A]">Data</Link>
            <span className="mx-2">/</span>
            <span>{ds.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">{ds.name}</h1>
          <p className="text-gray-600 text-lg">{ds.description}</p>
          <p className="text-sm text-gray-500 mt-3">Bron: {ds.source} &middot; <a href={'/data/' + KEY + '.json'} className="text-[#005F8A] underline">download als JSON</a></p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full min-w-[640px] text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Techniek</th>
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Poriegrootte (micrometer)</th>
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Houdt globaal tegen</th>
              </tr>
            </thead>
            <tbody>
              {ds.rows.map((row, i) => (
                <tr key={i} className="border-b border-gray-100">
                  {row.map((cell, j) => (
                    j === 0
                      ? <th key={j} scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">{cell}</th>
                      : <td key={j} className="py-2.5 px-3 text-gray-700">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-4">Bron: {ds.source}. Waarden zijn officieel of indicatief (zie toelichting); raadpleeg de bron voor exacte, actuele waarden.</p>
      </div>
    </>
  );
}
