import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { CalculatorClient } from '@/components/CalculatorClient';

export const metadata: Metadata = {
  title: "Osmose membraan-rejectie calculator (TDS) (2026)",
  description: "Bereken de rejectie van je osmosemembraan op basis van de TDS van toevoer- en gefilterd water, en zie of het membraan nog goed presteert.",
  alternates: { canonical: 'https://waterfilterplatform.nl/hulpmiddelen/osmose-rejectie' },
  openGraph: { title: "Osmose membraan-rejectie calculator (TDS) (2026)", description: "Bereken de rejectie van je osmosemembraan op basis van de TDS van toevoer- en gefilterd water, en zie of het membraan nog goed presteert.", url: 'https://waterfilterplatform.nl/hulpmiddelen/osmose-rejectie', type: 'website', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Wat is een goede rejectie?", answer: "Een gezond osmosemembraan haalt doorgaans 90 tot 99% rejectie. Daalt dat sterk, dan is vervanging nodig." },
  { question: "Hoe meet ik de TDS?", answer: "Met een eenvoudige TDS-meter meet je het toevoerwater en het gefilterde water; vul beide waarden in." },
];

export default function OsmoseRejectieTool() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Hulpmiddelen', url: 'https://waterfilterplatform.nl/hulpmiddelen' },
        { name: "Membraan-rejectie", url: 'https://waterfilterplatform.nl/hulpmiddelen/osmose-rejectie' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/hulpmiddelen" className="hover:text-[#005F8A]">Hulpmiddelen</Link>
            <span className="mx-2">/</span>
            <span>Membraan-rejectie</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Osmose membraan-rejectie calculator</h1>
          <p className="text-gray-600 text-lg">Vul de TDS van je toevoerwater en je gefilterde water in om de rejectie en de conditie van je membraan te schatten.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <CalculatorClient kind="rejectie" />

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt deze berekening?</h2>
        <p className="text-gray-700 leading-relaxed mb-3">De rejectie is het percentage opgeloste stoffen dat het membraan tegenhoudt: (1 - TDS permeaat / TDS toevoer) x 100.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Vuistregel: zit de TDS van het gefilterde water boven 50% van die van het toevoerwater, dan is het membraan waarschijnlijk versleten.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Meet met een TDS-meter zowel het toevoerwater als het gefilterde water voor een betrouwbare uitkomst.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">v</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['/kennisbank/osmose-membraan-levensduur', "Membraan levensduur", "Wanneer vervangen"],
              ['/kennisbank/tds-water', "TDS uitgelegd", "Wat het betekent"],
              ['/kennisbank/geleidbaarheid-ec-water', "Geleidbaarheid (EC)", "Meten"],
              ['/omgekeerde-osmose', "Omgekeerde osmose", "Werking"],
            ].map(([href, t, d]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{t}</p>
                <p className="text-sm text-gray-500">{d}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
