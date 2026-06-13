import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { CalculatorClient } from '@/components/CalculatorClient';

export const metadata: Metadata = {
  title: "Osmose afvalwater- en opbrengstcalculator (2026)",
  description: "Bereken hoeveel gefilterd water en afvalwater je osmosesysteem per jaar produceert op basis van je verbruik en de afvalwaterverhouding.",
  alternates: { canonical: 'https://waterfilterplatform.nl/hulpmiddelen/osmose-afvalwater' },
  openGraph: { title: "Osmose afvalwater- en opbrengstcalculator (2026)", description: "Bereken hoeveel gefilterd water en afvalwater je osmosesysteem per jaar produceert op basis van je verbruik en de afvalwaterverhouding.", url: 'https://waterfilterplatform.nl/hulpmiddelen/osmose-afvalwater', type: 'website', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Hoeveel water verspilt osmose?", answer: "Dat hangt van de afvalwaterverhouding af. Bij 1:1 wordt evenveel afgevoerd als gefilterd; bij 1:3 driemaal zoveel. Moderne systemen halen vaak 1:1 of beter." },
  { question: "Kan ik het afvalwater hergebruiken?", answer: "Voor sommige doeleinden (schoonmaken, bepaalde planten) wel, maar let op het hogere zoutgehalte." },
];

export default function OsmoseAfvalwaterTool() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Hulpmiddelen', url: 'https://waterfilterplatform.nl/hulpmiddelen' },
        { name: "Afvalwater calculator", url: 'https://waterfilterplatform.nl/hulpmiddelen/osmose-afvalwater' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/hulpmiddelen" className="hover:text-[#005F8A]">Hulpmiddelen</Link>
            <span className="mx-2">/</span>
            <span>Afvalwater calculator</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Osmose afvalwater- en opbrengstcalculator</h1>
          <p className="text-gray-600 text-lg">Schat de jaarlijkse hoeveelheid gefilterd water (permeaat) en afvalwater (concentraat) van je osmosesysteem.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <CalculatorClient kind="afvalwater" />

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt deze berekening?</h2>
        <p className="text-gray-700 leading-relaxed mb-3">De afvalwaterverhouding geeft aan hoeveel liter concentraat het systeem afvoert per liter gefilterd water. Een verhouding van 1:1 is efficient; oudere systemen halen 1:3 of slechter.</p>
        <p className="text-gray-700 leading-relaxed mb-3">De tool vermenigvuldigt je dagelijkse verbruik met 365 en met de verhouding. Het werkelijke verbruik hangt af van druk, temperatuur en membraan.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Een lagere afvalwaterverhouding of een boosterpomp verbetert de waterefficientie.</p>
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
              ['/omgekeerde-osmose', "Omgekeerde osmose", "Werking"],
              ['/kennisbank/permeaat-concentraat', "Permeaat en concentraat", "Uitleg"],
              ['/kennisbank/osmose-filter-afvalwater', "Osmose afvalwater", "Verdieping"],
              ['/omgekeerde-osmose/kopen', "Osmose kopen", "Aanschaf"],
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
