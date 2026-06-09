import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Omgekeerde osmose factsheet: werking en prestaties (2026)",
  description: "Factsheet omgekeerde osmose: hoe het werkt, poriegrootte, wat het verwijdert en de afvalwaterverhouding.",
  alternates: { canonical: 'https://waterfilterplatform.nl/factsheets/omgekeerde-osmose' },
  openGraph: { title: "Omgekeerde osmose factsheet: werking en prestaties (2026)", description: "Factsheet omgekeerde osmose: hoe het werkt, poriegrootte, wat het verwijdert en de afvalwaterverhouding.", url: 'https://waterfilterplatform.nl/factsheets/omgekeerde-osmose', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Wat verwijdert omgekeerde osmose?", answer: "Vrijwel alle opgeloste stoffen, waaronder lood, nitraat, PFAS, kalk en microplastics." },
  { question: "Verspilt osmose water?", answer: "Er ontstaat concentraat; moderne systemen halen vaak een verhouding van 1:1 of beter." },
  { question: "Smaakt osmosewater anders?", answer: "Het is mineraalarm en neutraal; remineralisatie maakt het voller van smaak." },
];

export default function OmgekeerdeOsmoseFactsheet() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="DefinedTermSet" definedTerms={{
        name: "Omgekeerde osmose - factsheet",
        url: 'https://waterfilterplatform.nl/factsheets/omgekeerde-osmose',
        terms: [{ name: "Omgekeerde osmose", description: "Omgekeerde osmose perst water onder druk door een semi-permeabel membraan dat vrijwel alle opgeloste stoffen tegenhoudt.", url: "https://waterfilterplatform.nl/omgekeerde-osmose", sameAs: ["https://nl.wikipedia.org/wiki/Omgekeerde_osmose"] }],
      }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Factsheets', url: 'https://waterfilterplatform.nl/factsheets' },
        { name: "Omgekeerde osmose", url: 'https://waterfilterplatform.nl/factsheets/omgekeerde-osmose' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/factsheets" className="hover:text-[#005F8A]">Factsheets</Link>
            <span className="mx-2">/</span>
            <span>Omgekeerde osmose</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Omgekeerde osmose: factsheet</h1>
          <div className="quick-answer bg-white border border-[#BAE6FD] rounded-2xl p-5 text-lg text-gray-800" data-speakable="true">
            Omgekeerde osmose perst water onder druk door een semi-permeabel membraan dat vrijwel alle opgeloste stoffen tegenhoudt.
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kerncijfers</h2>
          <div className="bg-white border border-gray-100 rounded-xl">
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Poriegrootte</span><span className="font-semibold text-[#003F5C]">~0,0001 micrometer</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Verwijdering</span><span className="font-semibold text-[#003F5C]">90-99% opgeloste stoffen</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Afvalwaterverhouding</span><span className="font-semibold text-[#003F5C]">vaak 1:1 of beter</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Norm voor systemen</span><span className="font-semibold text-[#003F5C]">NSF/ANSI 58</span></div>
          </div>
          <p className="text-xs text-gray-400 mt-2">Bron: RIVM, KWR, NSF/ANSI. Cijfers indicatief/officieel; raadpleeg de bron voor exacte waarden.</p>
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
              ['/omgekeerde-osmose', "Omgekeerde osmose"],
              ['/kennisbank/permeaat-concentraat', "Permeaat en concentraat"],
              ['/data/filtertechniek-matrix', "Filtertechniek-matrix"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
