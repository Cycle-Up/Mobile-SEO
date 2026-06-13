import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Verontreinigingen in drinkwater: bron, risico, oplossing (2026)",
  description: "Overzichtsmatrix van veelvoorkomende verontreinigingen met hun herkomst en de filtertechniek die ze aanpakt.",
  alternates: { canonical: 'https://waterfilterplatform.nl/uitleg/verontreinigingen-overzicht' },
  openGraph: { title: "Verontreinigingen in drinkwater: bron, risico, oplossing (2026)", description: "Overzichtsmatrix van veelvoorkomende verontreinigingen met hun herkomst en de filtertechniek die ze aanpakt.", url: 'https://waterfilterplatform.nl/uitleg/verontreinigingen-overzicht', type: 'article', locale: 'nl_NL' },
};

export default function VerontreinigingenOverzichtExplainer() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Verontreinigingen: bron, risico en oplossing", description: "Overzichtsmatrix van veelvoorkomende verontreinigingen met hun herkomst en de filtertechniek die ze aanpakt.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/uitleg/verontreinigingen-overzicht' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Uitleg', url: 'https://waterfilterplatform.nl/uitleg' },
        { name: "Verontreinigingen-overzicht", url: 'https://waterfilterplatform.nl/uitleg/verontreinigingen-overzicht' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/uitleg" className="hover:text-[#005F8A]">Uitleg</Link>
            <span className="mx-2">/</span>
            <span>Verontreinigingen-overzicht</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Verontreinigingen: bron, risico en oplossing</h1>
          <p className="text-gray-600 text-lg">Welke stof komt waar vandaan en welk filter pakt het aan? Deze matrix geeft per verontreiniging de herkomst en de oplossing.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Lees de matrix met nuance</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Nederlands kraanwater voldoet aan de normen; deze matrix helpt vooral bij eigen bronnen of specifieke wensen.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Voor gezondheidsvragen zijn het RIVM en je huisarts leidend; dit is algemene informatie.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Bron, risico en oplossing</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Stof</th>
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Herkomst</th>
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Aanpak</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Lood</th>
                  <td className="py-2.5 px-3 text-gray-700">Oude loden leidingen</td>
                  <td className="py-2.5 px-3 text-gray-700">Doorspoelen, omgekeerde osmose</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Nitraat</th>
                  <td className="py-2.5 px-3 text-gray-700">Landbouw, mest</td>
                  <td className="py-2.5 px-3 text-gray-700">Osmose, ionenwisseling</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">PFAS</th>
                  <td className="py-2.5 px-3 text-gray-700">Industrie, milieu</td>
                  <td className="py-2.5 px-3 text-gray-700">Omgekeerde osmose, geschikt actief kool</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Kalk</th>
                  <td className="py-2.5 px-3 text-gray-700">Natuurlijke mineralen</td>
                  <td className="py-2.5 px-3 text-gray-700">Waterontharder, osmose</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Microplastics</th>
                  <td className="py-2.5 px-3 text-gray-700">Milieu</td>
                  <td className="py-2.5 px-3 text-gray-700">Ultrafiltratie, osmose</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Chloor (smaak)</th>
                  <td className="py-2.5 px-3 text-gray-700">Tijdelijke desinfectie</td>
                  <td className="py-2.5 px-3 text-gray-700">Actief kool, laten staan</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">Indicatief; raadpleeg de gecertificeerde productspecificatie en officiele bronnen.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/data/verwijdering-matrix', "Verwijdering-dataset (JSON)"],
              ['/stoffen-in-drinkwater', "Stoffen in drinkwater"],
              ['/omgekeerde-osmose', "Omgekeerde osmose"],
              ['/keuzehulp', "Keuzehulp"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
