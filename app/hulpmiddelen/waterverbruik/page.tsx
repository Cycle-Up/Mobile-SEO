import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { CalculatorClient } from '@/components/CalculatorClient';

export const metadata: Metadata = {
  title: "Waterverbruik per huishouden schatter (2026)",
  description: "Schat het indicatieve dagelijkse en jaarlijkse waterverbruik van je huishouden op basis van het aantal personen.",
  alternates: { canonical: 'https://waterfilterplatform.nl/hulpmiddelen/waterverbruik' },
  openGraph: { title: "Waterverbruik per huishouden schatter (2026)", description: "Schat het indicatieve dagelijkse en jaarlijkse waterverbruik van je huishouden op basis van het aantal personen.", url: 'https://waterfilterplatform.nl/hulpmiddelen/waterverbruik', type: 'website', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Hoeveel water gebruikt een persoon per dag?", answer: "Gemiddeld rond de 120 liter per persoon per dag voor huishoudelijk gebruik, maar dit verschilt sterk per leefpatroon." },
  { question: "Hoe bespaar ik water?", answer: "Korter douchen, zuinige apparaten en de tuin met regenwater besproeien helpen het meest." },
];

export default function WaterverbruikTool() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Hulpmiddelen', url: 'https://waterfilterplatform.nl/hulpmiddelen' },
        { name: "Waterverbruik-schatter", url: 'https://waterfilterplatform.nl/hulpmiddelen/waterverbruik' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/hulpmiddelen" className="hover:text-[#005F8A]">Hulpmiddelen</Link>
            <span className="mx-2">/</span>
            <span>Waterverbruik-schatter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Waterverbruik-schatter</h1>
          <p className="text-gray-600 text-lg">Schat het indicatieve water­verbruik van je huishouden per dag en per jaar.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <CalculatorClient kind="verbruik" />

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt deze berekening?</h2>
        <p className="text-gray-700 leading-relaxed mb-3">De schatting gaat uit van een gemiddeld huishoudelijk verbruik van circa 120 liter per persoon per dag.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Het werkelijke verbruik hangt af van douchen, wassen, koken en tuingebruik. Gebruik de uitkomst als orde van grootte.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Met zuinige apparaten en bewust gebruik kun je het verbruik verlagen.</p>
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
              ['/kennisbank/water-besparen', "Water besparen", "Tips"],
              ['/kennisbank/waterbesparing-thuis', "Waterbesparing thuis", "Verdieping"],
              ['/hulpmiddelen/osmose-afvalwater', "Osmose afvalwater", "Verbruik osmose"],
              ['/waterhardheid', "Waterhardheid", "Per gemeente"],
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
