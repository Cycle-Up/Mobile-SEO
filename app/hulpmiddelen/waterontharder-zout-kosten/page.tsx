import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { CalculatorClient } from '@/components/CalculatorClient';

export const metadata: Metadata = {
  title: "Waterontharder zout-kosten calculator (2026)",
  description: "Bereken indicatief je jaarlijkse zoutverbruik en -kosten van een waterontharder op basis van hardheid en huishoudgrootte.",
  alternates: { canonical: 'https://waterfilterplatform.nl/hulpmiddelen/waterontharder-zout-kosten' },
  openGraph: { title: "Waterontharder zout-kosten calculator (2026)", description: "Bereken indicatief je jaarlijkse zoutverbruik en -kosten van een waterontharder op basis van hardheid en huishoudgrootte.", url: 'https://waterfilterplatform.nl/hulpmiddelen/waterontharder-zout-kosten', type: 'website', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Hoeveel zout verbruikt een waterontharder per jaar?", answer: "Dat hangt af van de waterhardheid en het verbruik. Deze tool geeft een indicatie op basis van je invoer; reken op tientallen kilo's per jaar voor een gemiddeld gezin in een hard-watergebied." },
  { question: "Wat kost het zout?", answer: "Onthardingszout kost grofweg 0,30 tot 0,70 euro per kilo. Vul je eigen prijs in voor een nauwkeuriger schatting." },
];

export default function WaterontharderZoutKostenTool() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Hulpmiddelen', url: 'https://waterfilterplatform.nl/hulpmiddelen' },
        { name: "Zout-kosten calculator", url: 'https://waterfilterplatform.nl/hulpmiddelen/waterontharder-zout-kosten' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/hulpmiddelen" className="hover:text-[#005F8A]">Hulpmiddelen</Link>
            <span className="mx-2">/</span>
            <span>Zout-kosten calculator</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Waterontharder zout-kosten calculator</h1>
          <p className="text-gray-600 text-lg">Schat het jaarlijkse zoutverbruik en de kosten van je waterontharder op basis van de waterhardheid en het aantal personen.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <CalculatorClient kind="zout" />

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt deze berekening?</h2>
        <p className="text-gray-700 leading-relaxed mb-3">De berekening gaat uit van een indicatief huishoudelijk verbruik van circa 120 liter per persoon per dag en een zoutverbruik dat meeschaalt met de hoeveelheid water en de hardheid (dH).</p>
        <p className="text-gray-700 leading-relaxed mb-3">Het werkelijke verbruik hangt af van je ontharder, de instelling en je leefpatroon. Gebruik de uitkomst als richtgetal, niet als exacte meting.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Wil je weten hoe hard jouw water is? Kijk op de pagina over waterhardheid per gemeente.</p>
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
              ['/waterontharder', "Waterontharders", "Werking en kosten"],
              ['/kennisbank/waterontharder-zout-verbruik', "Zoutverbruik", "Verdieping"],
              ['/waterhardheid', "Waterhardheid", "Per gemeente"],
              ['/hulpmiddelen/zout-bijvul-interval', "Bijvul-interval", "Hoe vaak bijvullen"],
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
