import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Tijdlijn drinkwaternormen: PFAS, lood en meer (2026)",
  description: "Chronologisch overzicht van belangrijke aanscherpingen in de drinkwaternormen, met de bron per stap.",
  alternates: { canonical: 'https://waterfilterplatform.nl/uitleg/drinkwaternormen-tijdlijn' },
  openGraph: { title: "Tijdlijn drinkwaternormen: PFAS, lood en meer (2026)", description: "Chronologisch overzicht van belangrijke aanscherpingen in de drinkwaternormen, met de bron per stap.", url: 'https://waterfilterplatform.nl/uitleg/drinkwaternormen-tijdlijn', type: 'article', locale: 'nl_NL' },
};

export default function DrinkwaternormenTijdlijnExplainer() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Tijdlijn: aanscherping van drinkwaternormen", description: "Chronologisch overzicht van belangrijke aanscherpingen in de drinkwaternormen, met de bron per stap.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/uitleg/drinkwaternormen-tijdlijn' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Uitleg', url: 'https://waterfilterplatform.nl/uitleg' },
        { name: "Normen-tijdlijn", url: 'https://waterfilterplatform.nl/uitleg/drinkwaternormen-tijdlijn' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/uitleg" className="hover:text-[#005F8A]">Uitleg</Link>
            <span className="mx-2">/</span>
            <span>Normen-tijdlijn</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Tijdlijn: aanscherping van drinkwaternormen</h1>
          <p className="text-gray-600 text-lg">Drinkwaternormen worden strenger. Deze tijdlijn zet de belangrijke wijzigingen op een rij, met de EU-richtlijn 2020/2184 als kader.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Het kader</h2>
          <p className="text-gray-700 leading-relaxed mb-3">De Europese Drinkwaterrichtlijn 2020/2184 is in Nederland geimplementeerd via het Drinkwaterbesluit en scherpt meerdere normen aan.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Hieronder de kernpunten; raadpleeg het Drinkwaterbesluit en het RIVM voor de actuele, exacte waarden.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kernwijzigingen</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Onderwerp</th>
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Wijziging</th>
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Bron</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">EU-richtlijn 2020/2184</th>
                  <td className="py-2.5 px-3 text-gray-700">Nieuw kader, strengere normen</td>
                  <td className="py-2.5 px-3 text-gray-700">Europese Unie</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">PFAS (som)</th>
                  <td className="py-2.5 px-3 text-gray-700">Norm 0,1 microgram/L, volledig van kracht in 2026</td>
                  <td className="py-2.5 px-3 text-gray-700">EU 2020/2184</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Lood</th>
                  <td className="py-2.5 px-3 text-gray-700">Aangescherpt naar 5 microgram/L per 2026</td>
                  <td className="py-2.5 px-3 text-gray-700">EU 2020/2184 / Drinkwaterbesluit</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Nitraat</th>
                  <td className="py-2.5 px-3 text-gray-700">Maximaal 50 mg/L (ongewijzigd, blijft kader)</td>
                  <td className="py-2.5 px-3 text-gray-700">Drinkwaterbesluit</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">Cijfers conform de centrale feiten-bron; controleer het Drinkwaterbesluit voor de exacte, actuele waarden.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/data/drinkwaternormen', "Normen-dataset (JSON)"],
              ['/drinkwaternormen', "Drinkwaternormen"],
              ['/kennisbank/pfas-in-nederland-2026', "PFAS 2026"],
              ['/kennisbank/loodvrij-leidingwater', "Lood"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
