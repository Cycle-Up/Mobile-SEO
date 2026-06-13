import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';

export const metadata: Metadata = {
  title: "Alles over lood in drinkwater: 10 vragen beantwoord",
  description: "Lood in drinkwater in tien vragen: norm, oude leidingen, risico en wat helpt, met bronnen.",
  alternates: { canonical: 'https://waterfilterplatform.nl/vragen/lood' },
  openGraph: { title: "Alles over lood in drinkwater: 10 vragen beantwoord", description: "Lood in drinkwater in tien vragen: norm, oude leidingen, risico en wat helpt, met bronnen.", url: 'https://waterfilterplatform.nl/vragen/lood', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Waar komt lood in kraanwater vandaan?", answer: "Vrijwel altijd uit oude loden leidingen, meestal in woningen gebouwd voor 1960; het drinkwater zelf verlaat de zuivering loodvrij." },
  { question: "Wat is de loodnorm?", answer: "De norm is per 2026 aangescherpt naar 5 microgram per liter." },
  { question: "Hoe weet ik of ik loden leidingen heb?", answer: "In woningen van voor 1960 kan het voorkomen. Oude loden leidingen zijn grijs en zacht; laat het bij twijfel onderzoeken." },
  { question: "Is lood in drinkwater gevaarlijk?", answer: "Lood is vooral een risico voor jonge kinderen en zwangeren. Er is geen veilige ondergrens, daarom geldt een strenge norm. Voor gezondheidsvragen is je huisarts of de GGD leidend." },
  { question: "Wat helpt tegen lood in kraanwater?", answer: "Loden leidingen vervangen is de structurele oplossing. Tijdelijk helpt doorspoelen bij stilstand en kan omgekeerde osmose lood effectief verwijderen." },
  { question: "Helpt doorspoelen tegen lood?", answer: "Water dat lang heeft stilgestaan bevat meer lood; even doorspoelen voor gebruik verlaagt de concentratie, maar lost de oorzaak niet op." },
  { question: "Verwijdert een waterfilter lood?", answer: "Omgekeerde osmose verwijdert lood zeer effectief (meer dan 99 procent); sommige gecertificeerde koolstoffilters claimen ook loodreductie." },
  { question: "Mag ik loodhoudend water gebruiken om te koken?", answer: "Koken verwijdert lood niet. Gebruik bij verdenking doorgespoeld of gefilterd water, zeker voor babyvoeding." },
  { question: "Wie is verantwoordelijk voor het vervangen van loden leidingen?", answer: "De leidingen binnen de woning vallen meestal onder de eigenaar; neem bij huur contact op met de verhuurder." },
];

export default function LoodCluster() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Vragen', url: 'https://waterfilterplatform.nl/vragen' },
        { name: "Lood", url: 'https://waterfilterplatform.nl/vragen/lood' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vragen" className="hover:text-[#005F8A]">Vragen</Link>
            <span className="mx-2">/</span>
            <span>Lood</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Alles over lood in drinkwater in tien vragen</h1>
          <p className="text-gray-600 text-lg">De belangrijkste vragen over lood in kraanwater, beknopt en met bronverwijzing beantwoord.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <HealthDisclaimer />
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
              ['/factsheets/lood', "Lood-factsheet"],
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
