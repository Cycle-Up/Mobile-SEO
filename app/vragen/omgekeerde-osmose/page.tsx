import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Alles over omgekeerde osmose: 10 vragen beantwoord",
  description: "Omgekeerde osmose in tien vragen: werking, wat het verwijdert, afvalwater, mineralen en onderhoud, met bronnen.",
  alternates: { canonical: 'https://waterfilterplatform.nl/vragen/omgekeerde-osmose' },
  openGraph: { title: "Alles over omgekeerde osmose: 10 vragen beantwoord", description: "Omgekeerde osmose in tien vragen: werking, wat het verwijdert, afvalwater, mineralen en onderhoud, met bronnen.", url: 'https://waterfilterplatform.nl/vragen/omgekeerde-osmose', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Hoe werkt omgekeerde osmose?", answer: "Water wordt onder druk door een semi-permeabel membraan geperst dat vrijwel alle opgeloste stoffen tegenhoudt; het schone water heet permeaat." },
  { question: "Wat verwijdert omgekeerde osmose?", answer: "Vrijwel alle opgeloste stoffen, waaronder lood, nitraat, PFAS, kalk en microplastics, doorgaans 90 tot 99 procent." },
  { question: "Verspilt omgekeerde osmose veel water?", answer: "Er ontstaat concentraat (afvalwater). Moderne systemen halen vaak een verhouding van ongeveer 1:1 of beter; oudere systemen meer." },
  { question: "Haalt osmose ook gezonde mineralen weg?", answer: "Ja, het water wordt mineraalarm. Mineralen uit water leveren een kleine bijdrage; een gevarieerd voedingspatroon is de hoofdbron. Remineralisatie kan smaak en mineralen toevoegen." },
  { question: "Smaakt osmosewater anders?", answer: "Het is neutraal en zacht van smaak omdat er weinig opgeloste stoffen in zitten; sommigen vinden het vlak en kiezen voor remineralisatie." },
  { question: "Hoe vaak moet ik de membraan vervangen?", answer: "Een RO-membraan gaat doorgaans twee tot vijf jaar mee; voorfilters meestal elke 6 tot 12 maanden, afhankelijk van waterkwaliteit en gebruik." },
  { question: "Is osmosewater veilig om te drinken?", answer: "Ja, mineraalarm water is veilig te drinken; de WHO ziet geen gezondheidsprobleem bij een normaal voedingspatroon." },
  { question: "Heb ik een tank of een tankless systeem nodig?", answer: "Een tank levert direct een buffer; tankless systemen zijn compacter en leveren on-demand, maar vragen een hogere doorstroomcapaciteit." },
  { question: "Wat is het verschil met een koolstoffilter?", answer: "Een koolstoffilter werkt via adsorptie en pakt vooral chloor, smaak en geur aan; osmose verwijdert ook opgeloste zouten en metalen." },
];

export default function OmgekeerdeOsmoseCluster() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Vragen', url: 'https://waterfilterplatform.nl/vragen' },
        { name: "Omgekeerde osmose", url: 'https://waterfilterplatform.nl/vragen/omgekeerde-osmose' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vragen" className="hover:text-[#005F8A]">Vragen</Link>
            <span className="mx-2">/</span>
            <span>Omgekeerde osmose</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Alles over omgekeerde osmose in tien vragen</h1>
          <p className="text-gray-600 text-lg">De meestgestelde vragen over omgekeerde osmose, kort en feitelijk beantwoord.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="space-y-3">
          {faqItems.map(item => (
            <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">{item.question}<span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">v</span></summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/factsheets/omgekeerde-osmose', "Osmose-factsheet"],
              ['/omgekeerde-osmose', "Omgekeerde osmose"],
              ['/kennisbank/permeaat-concentraat', "Permeaat en concentraat"],
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
