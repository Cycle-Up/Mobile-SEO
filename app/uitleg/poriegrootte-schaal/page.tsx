import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Poriegrootte-schaal van waterfilters (2026)",
  description: "Filtertechnieken gerangschikt van grof naar fijn met indicatieve poriegrootte in micrometer, zodat je ziet wat elke stap tegenhoudt.",
  alternates: { canonical: 'https://waterfilterplatform.nl/uitleg/poriegrootte-schaal' },
  openGraph: { title: "Poriegrootte-schaal van waterfilters (2026)", description: "Filtertechnieken gerangschikt van grof naar fijn met indicatieve poriegrootte in micrometer, zodat je ziet wat elke stap tegenhoudt.", url: 'https://waterfilterplatform.nl/uitleg/poriegrootte-schaal', type: 'article', locale: 'nl_NL' },
};

export default function PoriegrootteSchaalExplainer() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Poriegrootte-schaal: van zand tot ion", description: "Filtertechnieken gerangschikt van grof naar fijn met indicatieve poriegrootte in micrometer, zodat je ziet wat elke stap tegenhoudt.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/uitleg/poriegrootte-schaal' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Uitleg', url: 'https://waterfilterplatform.nl/uitleg' },
        { name: "Poriegrootte-schaal", url: 'https://waterfilterplatform.nl/uitleg/poriegrootte-schaal' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/uitleg" className="hover:text-[#005F8A]">Uitleg</Link>
            <span className="mx-2">/</span>
            <span>Poriegrootte-schaal</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Poriegrootte-schaal: van zand tot ion</h1>
          <p className="text-gray-600 text-lg">Wat houdt een filter tegen? Dat hangt af van de poriegrootte. Deze schaal loopt van grove sedimentfilters tot het ultrafijne osmosemembraan.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Waarom poriegrootte telt</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Een filter houdt tegen wat groter is dan zijn porien. Een sedimentfilter vangt zand en roest; een osmosemembraan houdt zelfs opgeloste ionen tegen.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Hoe kleiner de porien, hoe meer een filter verwijdert, maar ook hoe meer druk en onderhoud nodig zijn.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De schaal (grof naar fijn)</h2>
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
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Sediment/microfiltratie</th>
                  <td className="py-2.5 px-3 text-gray-700">0,1-10</td>
                  <td className="py-2.5 px-3 text-gray-700">Zand, roest, deeltjes, bacterien</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Ultrafiltratie</th>
                  <td className="py-2.5 px-3 text-gray-700">0,01-0,1</td>
                  <td className="py-2.5 px-3 text-gray-700">Bacterien, virussen, microplastics</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Nanofiltratie</th>
                  <td className="py-2.5 px-3 text-gray-700">0,001-0,01</td>
                  <td className="py-2.5 px-3 text-gray-700">Hardheid, grotere moleculen</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Omgekeerde osmose</th>
                  <td className="py-2.5 px-3 text-gray-700">~0,0001</td>
                  <td className="py-2.5 px-3 text-gray-700">Opgeloste ionen en zouten</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">Indicatieve waarden; zie de dataset voor de machine-leesbare versie.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/data/poriegrootte-schaal', "Dataset (JSON)"],
              ['/uitleg/filtertechnieken-matrix', "Filtertechnieken-matrix"],
              ['/kennisbank/microfiltratie', "Microfiltratie"],
              ['/omgekeerde-osmose', "Omgekeerde osmose"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
