import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { CalculatorClient } from '@/components/CalculatorClient';

export const metadata: Metadata = {
  title: "Waterhardheid omrekenen: dH, mmol/L, ppm, fH (2026)",
  description: "Reken waterhardheid eenvoudig om tussen Duitse graden (dH), mmol/L, ppm (mg/L CaCO3) en Franse graden (fH).",
  alternates: { canonical: 'https://waterfilterplatform.nl/hulpmiddelen/waterhardheid-omrekenen' },
  openGraph: { title: "Waterhardheid omrekenen: dH, mmol/L, ppm, fH (2026)", description: "Reken waterhardheid eenvoudig om tussen Duitse graden (dH), mmol/L, ppm (mg/L CaCO3) en Franse graden (fH).", url: 'https://waterfilterplatform.nl/hulpmiddelen/waterhardheid-omrekenen', type: 'website', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Wat is 1 dH in ppm?", answer: "1 Duitse hardheidsgraad (dH) komt overeen met ongeveer 17,85 ppm (mg/L calciumcarbonaat)." },
  { question: "Welke eenheid gebruikt mijn drinkwaterbedrijf?", answer: "Vaak dH of mmol/L. Op de waterhardheid-pagina vind je de waarde voor jouw gemeente." },
];

export default function WaterhardheidOmrekenenTool() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Hulpmiddelen', url: 'https://waterfilterplatform.nl/hulpmiddelen' },
        { name: "Hardheid omrekenen", url: 'https://waterfilterplatform.nl/hulpmiddelen/waterhardheid-omrekenen' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/hulpmiddelen" className="hover:text-[#005F8A]">Hulpmiddelen</Link>
            <span className="mx-2">/</span>
            <span>Hardheid omrekenen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Waterhardheid eenheden-omrekener</h1>
          <p className="text-gray-600 text-lg">Reken een hardheidswaarde om tussen de gangbare eenheden: dH, mmol/L, ppm en fH.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <CalculatorClient kind="hardheid" />

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt deze berekening?</h2>
        <p className="text-gray-700 leading-relaxed mb-3">De omrekening gebruikt de standaardfactoren: 1 dH komt overeen met circa 0,1783 mmol/L, 17,85 ppm (mg/L CaCO3) en 1,78 fH.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Voer je waarde in en kies de eenheid; de tool toont alle eenheden tegelijk.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Welke eenheid je drinkwaterbedrijf gebruikt verschilt; in Nederland is dH gangbaar.</p>
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
              ['/kennisbank/tijdelijke-blijvende-hardheid', "Soorten hardheid", "Tijdelijk vs blijvend"],
              ['/begrippenlijst', "Begrippenlijst", "Alle termen"],
              ['/kennisbank/waterhardheid-meten', "Hardheid meten", "Thuis"],
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
