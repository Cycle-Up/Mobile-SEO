import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { CalculatorClient } from '@/components/CalculatorClient';

export const metadata: Metadata = {
  title: "Kokend water kraan energie- en kostencalculator (2026)",
  description: "Bereken de energiekosten en totale kosten van een kokend water kraan over meerdere jaren op basis van standby-vermogen en stroomprijs.",
  alternates: { canonical: 'https://waterfilterplatform.nl/hulpmiddelen/kokend-water-kraan-kosten' },
  openGraph: { title: "Kokend water kraan energie- en kostencalculator (2026)", description: "Bereken de energiekosten en totale kosten van een kokend water kraan over meerdere jaren op basis van standby-vermogen en stroomprijs.", url: 'https://waterfilterplatform.nl/hulpmiddelen/kokend-water-kraan-kosten', type: 'website', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Hoeveel stroom gebruikt een kokend water kraan?", answer: "Vooral standby-energie om de boiler warm te houden, indicatief enkele tientallen tot ruim honderd kWh per jaar, afhankelijk van het model." },
  { question: "Is een kokend water kraan duurder dan een waterkoker?", answer: "In aanschaf en standby-energie meestal wel; in gemak juist niet. Over meerdere jaren is een waterkoker vaak goedkoper." },
];

export default function KokendWaterKraanKostenTool() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Hulpmiddelen', url: 'https://waterfilterplatform.nl/hulpmiddelen' },
        { name: "Kokend kraan TCO-calculator", url: 'https://waterfilterplatform.nl/hulpmiddelen/kokend-water-kraan-kosten' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/hulpmiddelen" className="hover:text-[#005F8A]">Hulpmiddelen</Link>
            <span className="mx-2">/</span>
            <span>Kokend kraan TCO-calculator</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Kokend water kraan kostencalculator</h1>
          <p className="text-gray-600 text-lg">Schat de jaarlijkse energiekosten en de totale kosten van een kokend water kraan over de gekozen periode.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <CalculatorClient kind="kokend" />

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt deze berekening?</h2>
        <p className="text-gray-700 leading-relaxed mb-3">Een kokend water kraan houdt een boiler continu op temperatuur; het standby-vermogen bepaalt het energieverbruik. De tool rekent het standby-vermogen om naar kWh per jaar en vermenigvuldigt met je stroomprijs.</p>
        <p className="text-gray-700 leading-relaxed mb-3">De totale kosten tellen de aanschafprijs op bij de energiekosten over de gekozen periode. Onderhoud en filters zijn niet meegerekend.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Vergelijk de uitkomst met een waterkoker, die alleen energie gebruikt op het moment van koken.</p>
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
              ['/kokend-water-kraan', "Kokend water kranen", "Merken en werking"],
              ['/vergelijken/kokend-kraan-vs-waterkoker', "Kraan vs waterkoker", "Vergelijking"],
              ['/kennisbank/kokend-water-kraan-kosten', "Kosten", "Verdieping"],
              ['/kennisbank/kokend-water-kraan-duurzaamheid', "Duurzaamheid", "Energie"],
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
