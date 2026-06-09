import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';

export const metadata: Metadata = {
  title: "Lood in drinkwater factsheet: norm en aanpak (2026)",
  description: "Factsheet lood in drinkwater: de norm van 5 microgram per liter, herkomst uit oude leidingen en hoe je het aanpakt.",
  alternates: { canonical: 'https://waterfilterplatform.nl/factsheets/lood' },
  openGraph: { title: "Lood in drinkwater factsheet: norm en aanpak (2026)", description: "Factsheet lood in drinkwater: de norm van 5 microgram per liter, herkomst uit oude leidingen en hoe je het aanpakt.", url: 'https://waterfilterplatform.nl/factsheets/lood', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Wat is de loodnorm?", answer: "Aangescherpt naar 5 microgram per liter per 2026." },
  { question: "Hoe weet ik of ik loden leidingen heb?", answer: "In woningen van voor 1960 kan het voorkomen; laat het bij twijfel onderzoeken." },
  { question: "Wat helpt tegen lood?", answer: "Doorspoelen bij stilstand en omgekeerde osmose verwijderen lood effectief. Voor gezondheidsvragen is je huisarts leidend." },
];

export default function LoodFactsheet() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="DefinedTermSet" definedTerms={{
        name: "Lood in drinkwater - factsheet",
        url: 'https://waterfilterplatform.nl/factsheets/lood',
        terms: [{ name: "Lood in drinkwater", description: "Lood in kraanwater komt vrijwel altijd uit oude loden leidingen, meestal in woningen van voor 1960.", url: "https://waterfilterplatform.nl/leidingwater/lood", sameAs: ["https://nl.wikipedia.org/wiki/Lood_(element)"] }],
      }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Factsheets', url: 'https://waterfilterplatform.nl/factsheets' },
        { name: "Lood in drinkwater", url: 'https://waterfilterplatform.nl/factsheets/lood' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/factsheets" className="hover:text-[#005F8A]">Factsheets</Link>
            <span className="mx-2">/</span>
            <span>Lood in drinkwater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Lood in drinkwater: factsheet</h1>
          <div className="quick-answer bg-white border border-[#BAE6FD] rounded-2xl p-5 text-lg text-gray-800" data-speakable="true">
            Lood in kraanwater komt vrijwel altijd uit oude loden leidingen, meestal in woningen van voor 1960.
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <HealthDisclaimer />
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kerncijfers</h2>
          <div className="bg-white border border-gray-100 rounded-xl">
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Norm (per 2026)</span><span className="font-semibold text-[#003F5C]">5 microgram/L</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Herkomst</span><span className="font-semibold text-[#003F5C]">oude loden leidingen</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Risicowoningen</span><span className="font-semibold text-[#003F5C]">gebouwd voor 1960</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Beste verwijdering</span><span className="font-semibold text-[#003F5C]">omgekeerde osmose (meer dan 99%)</span></div>
          </div>
          <p className="text-xs text-gray-400 mt-2">Bron: Drinkwaterbesluit, EU 2020/2184, RIVM. Cijfers indicatief/officieel; raadpleeg de bron voor exacte waarden.</p>
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
              ['/leidingwater/lood', "Lood in leidingwater"],
              ['/kennisbank/loodvrij-leidingwater', "Loodvrij leidingwater"],
              ['/kennisbank/kraanwater-doorspoelen-loodleiding', "Doorspoelen"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
