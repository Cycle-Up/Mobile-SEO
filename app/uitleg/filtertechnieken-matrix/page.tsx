import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Filtertechnieken vergelijkingsmatrix: wat doet wat? (2026)",
  description: "Overzichtsmatrix van alle waterfiltertechnieken: poriegrootte, wat ze aanpakken en niet aanpakken, in een oogopslag.",
  alternates: { canonical: 'https://waterfilterplatform.nl/uitleg/filtertechnieken-matrix' },
  openGraph: { title: "Filtertechnieken vergelijkingsmatrix: wat doet wat? (2026)", description: "Overzichtsmatrix van alle waterfiltertechnieken: poriegrootte, wat ze aanpakken en niet aanpakken, in een oogopslag.", url: 'https://waterfilterplatform.nl/uitleg/filtertechnieken-matrix', type: 'article', locale: 'nl_NL' },
};

export default function FiltertechniekenMatrixExplainer() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Filtertechnieken vergeleken: de complete matrix", description: "Overzichtsmatrix van alle waterfiltertechnieken: poriegrootte, wat ze aanpakken en niet aanpakken, in een oogopslag.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/uitleg/filtertechnieken-matrix' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Uitleg', url: 'https://waterfilterplatform.nl/uitleg' },
        { name: "Filtertechnieken-matrix", url: 'https://waterfilterplatform.nl/uitleg/filtertechnieken-matrix' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/uitleg" className="hover:text-[#005F8A]">Uitleg</Link>
            <span className="mx-2">/</span>
            <span>Filtertechnieken-matrix</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Filtertechnieken vergeleken: de complete matrix</h1>
          <p className="text-gray-600 text-lg">Welke filtertechniek pakt welke verontreiniging aan? Deze matrix zet microfiltratie, ultrafiltratie, nanofiltratie, omgekeerde osmose, actief kool, ionenwisseling en UV naast elkaar.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Van grof naar fijn</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Membraantechnieken verschillen vooral in poriegrootte: hoe fijner, hoe meer ze tegenhouden, maar ook hoe meer druk en onderhoud nodig zijn.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Actief kool en ionenwisseling werken niet op poriegrootte maar op adsorptie respectievelijk uitwisseling; UV doodt micro-organismen zonder iets te verwijderen.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De matrix</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Techniek</th>
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Poriegrootte</th>
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Pakt aan</th>
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Pakt niet aan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Microfiltratie</th>
                  <td className="py-2.5 px-3 text-gray-700">0,1-10 micrometer</td>
                  <td className="py-2.5 px-3 text-gray-700">Deeltjes, veel bacterien</td>
                  <td className="py-2.5 px-3 text-gray-700">Opgeloste stoffen, virussen</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Ultrafiltratie</th>
                  <td className="py-2.5 px-3 text-gray-700">0,01-0,1 micrometer</td>
                  <td className="py-2.5 px-3 text-gray-700">Bacterien, virussen, microplastics</td>
                  <td className="py-2.5 px-3 text-gray-700">Opgeloste zouten, kalk</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Nanofiltratie</th>
                  <td className="py-2.5 px-3 text-gray-700">0,001-0,01 micrometer</td>
                  <td className="py-2.5 px-3 text-gray-700">Hardheid, deel opgeloste stoffen</td>
                  <td className="py-2.5 px-3 text-gray-700">Deel eenwaardige zouten</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Omgekeerde osmose</th>
                  <td className="py-2.5 px-3 text-gray-700">~0,0001 micrometer</td>
                  <td className="py-2.5 px-3 text-gray-700">Vrijwel alle opgeloste stoffen</td>
                  <td className="py-2.5 px-3 text-gray-700">Zeer weinig</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Actief kool</th>
                  <td className="py-2.5 px-3 text-gray-700">adsorptie</td>
                  <td className="py-2.5 px-3 text-gray-700">Chloor, smaak, geur</td>
                  <td className="py-2.5 px-3 text-gray-700">Kalk, metalen, nitraat</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Ionenwisseling</th>
                  <td className="py-2.5 px-3 text-gray-700">uitwisseling</td>
                  <td className="py-2.5 px-3 text-gray-700">Hardheid (naar natrium)</td>
                  <td className="py-2.5 px-3 text-gray-700">Organische stoffen, deeltjes</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">UV-sterilisatie</th>
                  <td className="py-2.5 px-3 text-gray-700">n.v.t.</td>
                  <td className="py-2.5 px-3 text-gray-700">Bacterien, virussen</td>
                  <td className="py-2.5 px-3 text-gray-700">Opgeloste stoffen, kalk</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">Indicatief overzicht; de machine-leesbare versie staat in de dataset. Gecertificeerde prestaties verschillen per product.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/data/filtertechniek-matrix', "Dataset (JSON)"],
              ['/filtertechnieken', "Filtertechnieken"],
              ['/kennisbank/microfiltratie', "Microfiltratie"],
              ['/uitleg/poriegrootte-schaal', "Poriegrootte-schaal"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
