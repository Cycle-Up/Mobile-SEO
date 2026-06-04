import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Actief kool factsheet: werking en grenzen (2026)",
  description: "Factsheet actief kool: hoe adsorptie werkt, wat het wel en niet verwijdert en typische toepassingen.",
  alternates: { canonical: 'https://waterfilterplatform.nl/factsheets/actief-kool' },
  openGraph: { title: "Actief kool factsheet: werking en grenzen (2026)", description: "Factsheet actief kool: hoe adsorptie werkt, wat het wel en niet verwijdert en typische toepassingen.", url: 'https://waterfilterplatform.nl/factsheets/actief-kool', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Wat verwijdert actief kool?", answer: "Vooral chloor, smaak en geur, en een deel van de organische stoffen." },
  { question: "Verwijdert actief kool kalk?", answer: "Nee, daarvoor is een ontharder of osmose nodig." },
  { question: "Hoe vaak vervangen?", answer: "Doorgaans elke 6 tot 12 maanden, afhankelijk van gebruik en waterkwaliteit." },
];

export default function ActiefKoolFactsheet() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="DefinedTermSet" definedTerms={{
        name: "Actief kool - factsheet",
        url: 'https://waterfilterplatform.nl/factsheets/actief-kool',
        terms: [{ name: "Actief kool", description: "Actief kool bindt via adsorptie chloor, smaak, geur en sommige organische stoffen, maar geen opgeloste zouten.", url: "https://waterfilterplatform.nl/filtertechnieken/actief-kool" }],
      }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Factsheets', url: 'https://waterfilterplatform.nl/factsheets' },
        { name: "Actief kool", url: 'https://waterfilterplatform.nl/factsheets/actief-kool' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/factsheets" className="hover:text-[#005F8A]">Factsheets</Link>
            <span className="mx-2">/</span>
            <span>Actief kool</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Actief kool: factsheet</h1>
          <div className="quick-answer bg-white border border-[#BAE6FD] rounded-2xl p-5 text-lg text-gray-800" data-speakable="true">
            Actief kool bindt via adsorptie chloor, smaak, geur en sommige organische stoffen, maar geen opgeloste zouten.
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kerncijfers</h2>
          <div className="bg-white border border-gray-100 rounded-xl">
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Werking</span><span className="font-semibold text-[#003F5C]">adsorptie</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Pakt aan</span><span className="font-semibold text-[#003F5C]">chloor, smaak, geur</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Pakt niet aan</span><span className="font-semibold text-[#003F5C]">kalk, nitraat, metalen</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Norm</span><span className="font-semibold text-[#003F5C]">vaak NSF/ANSI 42</span></div>
          </div>
          <p className="text-xs text-gray-400 mt-2">Bron: RIVM, NSF/ANSI. Cijfers indicatief/officieel; raadpleeg de bron voor exacte waarden.</p>
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
              ['/filtertechnieken/actief-kool', "Actief kool"],
              ['/koolstoffilter', "Koolstoffilter"],
              ['/vergelijken/actief-kool-vs-osmose', "Actief kool vs osmose"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
