import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Waterhardheid factsheet: dH, klassen en gevolgen (2026)",
  description: "Factsheet waterhardheid: wat dH betekent, de klassegrenzen en wat hardheid betekent voor kalk.",
  alternates: { canonical: 'https://waterfilterplatform.nl/factsheets/waterhardheid' },
  openGraph: { title: "Waterhardheid factsheet: dH, klassen en gevolgen (2026)", description: "Factsheet waterhardheid: wat dH betekent, de klassegrenzen en wat hardheid betekent voor kalk.", url: 'https://waterfilterplatform.nl/factsheets/waterhardheid', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Wat is hard water?", answer: "Water met veel calcium en magnesium, boven ongeveer 14 dH. Het geeft sneller kalkaanslag." },
  { question: "Hoe vind ik mijn hardheid?", answer: "Bij je drinkwaterbedrijf of via de gemeentepagina; zelf meten kan met een teststrip." },
  { question: "Is hard water ongezond?", answer: "Nee, het is gewoon drinkbaar; het ongemak is praktisch (kalk)." },
];

export default function WaterhardheidFactsheet() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="DefinedTermSet" definedTerms={{
        name: "Waterhardheid - factsheet",
        url: 'https://waterfilterplatform.nl/factsheets/waterhardheid',
        terms: [{ name: "Waterhardheid", description: "Waterhardheid is het gehalte aan calcium en magnesium in water, uitgedrukt in Duitse hardheidsgraden (dH).", url: "https://waterfilterplatform.nl/waterhardheid", sameAs: ["https://nl.wikipedia.org/wiki/Waterhardheid"] }],
      }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Factsheets', url: 'https://waterfilterplatform.nl/factsheets' },
        { name: "Waterhardheid", url: 'https://waterfilterplatform.nl/factsheets/waterhardheid' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/factsheets" className="hover:text-[#005F8A]">Factsheets</Link>
            <span className="mx-2">/</span>
            <span>Waterhardheid</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Waterhardheid: factsheet</h1>
          <div className="quick-answer bg-white border border-[#BAE6FD] rounded-2xl p-5 text-lg text-gray-800" data-speakable="true">
            Waterhardheid is het gehalte aan calcium en magnesium in water, uitgedrukt in Duitse hardheidsgraden (dH).
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kerncijfers</h2>
          <div className="bg-white border border-gray-100 rounded-xl">
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Eenheid</span><span className="font-semibold text-[#003F5C]">dH (Duitse hardheidsgraad)</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Zacht</span><span className="font-semibold text-[#003F5C]">tot 8 dH</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Gemiddeld</span><span className="font-semibold text-[#003F5C]">8-14 dH</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Hard</span><span className="font-semibold text-[#003F5C]">boven 14 dH</span></div>
          </div>
          <p className="text-xs text-gray-400 mt-2">Bron: Vewin, RIVM. Cijfers indicatief/officieel; raadpleeg de bron voor exacte waarden.</p>
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
              ['/waterhardheid', "Waterhardheid per gemeente"],
              ['/uitleg/hardheidsklassen', "Hardheidsklassen"],
              ['/hulpmiddelen/waterhardheid-omrekenen', "Hardheid omrekenen"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
