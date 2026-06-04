import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Alles over kraanwater drinken: 10 vragen beantwoord",
  description: "Kraanwater drinken in tien vragen: veiligheid, kwaliteit, smaak, filteren en flessenwater, kort en feitelijk beantwoord.",
  alternates: { canonical: 'https://waterfilterplatform.nl/vragen/kraanwater-drinken' },
  openGraph: { title: "Alles over kraanwater drinken: 10 vragen beantwoord", description: "Kraanwater drinken in tien vragen: veiligheid, kwaliteit, smaak, filteren en flessenwater, kort en feitelijk beantwoord.", url: 'https://waterfilterplatform.nl/vragen/kraanwater-drinken', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Is Nederlands kraanwater veilig om te drinken?", answer: "Ja, Nederlands kraanwater behoort tot de best gecontroleerde van Europa en voldoet aan strenge normen uit het Drinkwaterbesluit." },
  { question: "Moet ik kraanwater filteren?", answer: "Voor veiligheid is dat meestal niet nodig. Filteren kan zinvol zijn voor smaak, kalk of specifieke zorgen zoals lood in oude leidingen." },
  { question: "Waarom smaakt mijn kraanwater soms naar chloor?", answer: "Lichte chloorsmaak kan optreden na werkzaamheden aan het net; een kan even open laten staan of koelen in de koelkast vermindert de smaak." },
  { question: "Is kraanwater beter dan flessenwater?", answer: "Kraanwater is veel goedkoper en duurzamer en kwalitatief uitstekend. Met de flessenwater-besparingscalculator zie je het verschil in kosten." },
  { question: "Kan ik kraanwater aan baby's geven?", answer: "Vers doorgespoeld koud kraanwater is doorgaans geschikt voor babyvoeding; volg het advies van het consultatiebureau, zeker bij oude leidingen." },
  { question: "Hoelang blijft kraanwater goed?", answer: "Bewaar het afgesloten en koel; binnen een dag is het op smaak het best. Laat het niet lang in warme flessen staan." },
  { question: "Is warm kraanwater veilig om te drinken?", answer: "Gebruik voor consumptie altijd de koude kraan; warm water staat langer in de boiler en kan meer stoffen uit leidingen opnemen." },
  { question: "Zit er kalk in kraanwater en is dat erg?", answer: "In hardwatergebieden zit er meer kalk in; dat is niet ongezond, maar geeft wel meer aanslag." },
  { question: "Hoe weet ik wat er in mijn kraanwater zit?", answer: "Je drinkwaterbedrijf publiceert per leveringsgebied een meetrapport met de actuele waarden." },
];

export default function KraanwaterDrinkenCluster() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Vragen', url: 'https://waterfilterplatform.nl/vragen' },
        { name: "Kraanwater drinken", url: 'https://waterfilterplatform.nl/vragen/kraanwater-drinken' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vragen" className="hover:text-[#005F8A]">Vragen</Link>
            <span className="mx-2">/</span>
            <span>Kraanwater drinken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Alles over kraanwater drinken in tien vragen</h1>
          <p className="text-gray-600 text-lg">De meestgestelde vragen over kraanwater drinken, beknopt beantwoord.</p>
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
              ['/kennisbank/is-kraanwater-gezond', "Is kraanwater gezond?"],
              ['/hulpmiddelen/flessenwater-besparing', "Flessenwater-besparing"],
              ['/water-en-gezondheid', "Water en gezondheid"],
              ['/feit-of-fabel', "Feit of fabel"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
