import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { CalculatorClient } from '@/components/CalculatorClient';

export const metadata: Metadata = {
  title: "Waterontharder zout-bijvulinterval calculator (2026)",
  description: "Bereken hoe vaak je het zoutreservoir van je waterontharder moet bijvullen op basis van de capaciteit en het jaarlijkse zoutverbruik.",
  alternates: { canonical: 'https://waterfilterplatform.nl/hulpmiddelen/zout-bijvul-interval' },
  openGraph: { title: "Waterontharder zout-bijvulinterval calculator (2026)", description: "Bereken hoe vaak je het zoutreservoir van je waterontharder moet bijvullen op basis van de capaciteit en het jaarlijkse zoutverbruik.", url: 'https://waterfilterplatform.nl/hulpmiddelen/zout-bijvul-interval', type: 'website', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Hoe vaak moet ik zout bijvullen?", answer: "Dat hangt af van de reservoircapaciteit en het verbruik. Deze tool geeft een indicatie in dagen op basis van je invoer." },
  { question: "Wat gebeurt er bij een leeg zoutreservoir?", answer: "Dan onthardt het systeem niet meer en wordt je water weer hard. Vul daarom op tijd bij." },
];

export default function ZoutBijvulIntervalTool() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Hulpmiddelen', url: 'https://waterfilterplatform.nl/hulpmiddelen' },
        { name: "Zout-bijvulinterval", url: 'https://waterfilterplatform.nl/hulpmiddelen/zout-bijvul-interval' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/hulpmiddelen" className="hover:text-[#005F8A]">Hulpmiddelen</Link>
            <span className="mx-2">/</span>
            <span>Zout-bijvulinterval</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Zout-bijvulinterval calculator</h1>
          <p className="text-gray-600 text-lg">Bereken hoe vaak je zout moet bijvullen op basis van de reservoircapaciteit en het jaarverbruik.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <CalculatorClient kind="zoutinterval" />

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt deze berekening?</h2>
        <p className="text-gray-700 leading-relaxed mb-3">De tool deelt de reservoircapaciteit door het dagelijkse zoutverbruik (jaarverbruik gedeeld door 365) om het interval in dagen te bepalen.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Het jaarverbruik kun je schatten met de zout-kosten calculator. Het werkelijke interval hangt af van je verbruik en instelling.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Vul het reservoir bijtijds bij; een leeg zoutreservoir betekent dat het water niet meer wordt onthard.</p>
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
              ['/hulpmiddelen/waterontharder-zout-kosten', "Zout-kosten", "Jaarverbruik schatten"],
              ['/kennisbank/waterontharder-zout-verbruik', "Zoutverbruik", "Verdieping"],
              ['/waterontharder', "Waterontharder", "Werking"],
              ['/kennisbank/waterontharder-zout-soorten', "Zoutsoorten", "Welk zout"],
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
