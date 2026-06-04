import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Nitraat factsheet: norm, bron en filtering (2026)",
  description: "Factsheet nitraat: de norm van 50 mg/L, herkomst uit de landbouw en welke filters het verlagen.",
  alternates: { canonical: 'https://waterfilterplatform.nl/factsheets/nitraat' },
  openGraph: { title: "Nitraat factsheet: norm, bron en filtering (2026)", description: "Factsheet nitraat: de norm van 50 mg/L, herkomst uit de landbouw en welke filters het verlagen.", url: 'https://waterfilterplatform.nl/factsheets/nitraat', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Wat is de nitraatnorm?", answer: "Maximaal 50 mg/L in drinkwater; bij 25 mg/L gelden aanvullende maatregelen." },
  { question: "Waar zit het hoogste risico?", answer: "Bij particuliere putten in landbouwgebieden, niet bij het leidingnet." },
  { question: "Hoe verlaag ik nitraat?", answer: "Met omgekeerde osmose of ionenwisseling." },
];

export default function NitraatFactsheet() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="DefinedTermSet" definedTerms={{
        name: "Nitraat - factsheet",
        url: 'https://waterfilterplatform.nl/factsheets/nitraat',
        terms: [{ name: "Nitraat", description: "Nitraat is een stikstofverbinding die vooral via landbouw en mest in water terechtkomt.", url: "https://waterfilterplatform.nl/stoffen-in-drinkwater/nitraat-nitriet" }],
      }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Factsheets', url: 'https://waterfilterplatform.nl/factsheets' },
        { name: "Nitraat", url: 'https://waterfilterplatform.nl/factsheets/nitraat' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/factsheets" className="hover:text-[#005F8A]">Factsheets</Link>
            <span className="mx-2">/</span>
            <span>Nitraat</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Nitraat: factsheet</h1>
          <div className="quick-answer bg-white border border-[#BAE6FD] rounded-2xl p-5 text-lg text-gray-800" data-speakable="true">
            Nitraat is een stikstofverbinding die vooral via landbouw en mest in water terechtkomt.
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kerncijfers</h2>
          <div className="bg-white border border-gray-100 rounded-xl">
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Norm</span><span className="font-semibold text-[#003F5C]">50 mg/L</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Signaalwaarde</span><span className="font-semibold text-[#003F5C]">25 mg/L</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Herkomst</span><span className="font-semibold text-[#003F5C]">landbouw, mest</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Verwijdering</span><span className="font-semibold text-[#003F5C]">osmose, ionenwisseling</span></div>
          </div>
          <p className="text-xs text-gray-400 mt-2">Bron: Drinkwaterbesluit, RIVM. Cijfers indicatief/officieel; raadpleeg de bron voor exacte waarden.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Kernvragen</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">{item.question}<span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">v</span></summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/stoffen-in-drinkwater/nitraat-nitriet', "Nitraat en nitriet"],
              ['/kennisbank/nitraat-drinkwater', "Nitraat in drinkwater"],
              ['/data/drinkwaternormen', "Normen-dataset"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
