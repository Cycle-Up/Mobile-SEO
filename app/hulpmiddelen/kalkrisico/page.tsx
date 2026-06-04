import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { CalculatorClient } from '@/components/CalculatorClient';

export const metadata: Metadata = {
  title: "Kalkrisico-indicator op basis van waterhardheid (2026)",
  description: "Bepaal op basis van je waterhardheid (dH) de hardheidsklasse en het indicatieve kalkrisico voor je apparaten.",
  alternates: { canonical: 'https://waterfilterplatform.nl/hulpmiddelen/kalkrisico' },
  openGraph: { title: "Kalkrisico-indicator op basis van waterhardheid (2026)", description: "Bepaal op basis van je waterhardheid (dH) de hardheidsklasse en het indicatieve kalkrisico voor je apparaten.", url: 'https://waterfilterplatform.nl/hulpmiddelen/kalkrisico', type: 'website', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Vanaf welke dH is water hard?", answer: "Boven ongeveer 14 dH spreekt men van hard water. Tussen 8 en 14 dH is het gemiddeld, daaronder zacht." },
  { question: "Wat helpt tegen kalk?", answer: "Een waterontharder verlaagt de hardheid in huis; omgekeerde osmose levert kalkvrij water aan een tappunt." },
];

export default function KalkrisicoTool() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Hulpmiddelen', url: 'https://waterfilterplatform.nl/hulpmiddelen' },
        { name: "Kalkrisico-indicator", url: 'https://waterfilterplatform.nl/hulpmiddelen/kalkrisico' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/hulpmiddelen" className="hover:text-[#005F8A]">Hulpmiddelen</Link>
            <span className="mx-2">/</span>
            <span>Kalkrisico-indicator</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Kalkaanslag-risico-indicator</h1>
          <p className="text-gray-600 text-lg">Voer je waterhardheid in en zie de hardheidsklasse en het indicatieve kalkrisico voor je apparaten.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <CalculatorClient kind="kalkrisico" />

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt deze berekening?</h2>
        <p className="text-gray-700 leading-relaxed mb-3">De indeling volgt de gangbare klassegrenzen: zacht tot circa 8 dH, gemiddeld 8 tot 14 dH, en hard boven 14 dH.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Hoe harder het water, hoe sneller kalkaanslag ontstaat in waterkoker, koffiemachine en op kranen.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Bij een hoog kalkrisico kan een waterontharder of, voor het tappunt, omgekeerde osmose zinvol zijn.</p>
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
              ['/waterhardheid', "Waterhardheid", "Per gemeente"],
              ['/kennisbank/waterhardheid-verlagen', "Hardheid verlagen", "Manieren"],
              ['/waterontharder', "Waterontharder", "Werking"],
              ['/kennisbank/kranen-douchekop-ontkalken', "Ontkalken", "Kranen en douchekop"],
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
