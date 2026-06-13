import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { CalculatorClient } from '@/components/CalculatorClient';

export const metadata: Metadata = {
  title: "Filterpatroon vervangdatum-calculator (2026)",
  description: "Bereken wanneer je je waterfilterpatroon moet vervangen op basis van de installatiedatum en het interval.",
  alternates: { canonical: 'https://waterfilterplatform.nl/hulpmiddelen/filter-vervangdatum' },
  openGraph: { title: "Filterpatroon vervangdatum-calculator (2026)", description: "Bereken wanneer je je waterfilterpatroon moet vervangen op basis van de installatiedatum en het interval.", url: 'https://waterfilterplatform.nl/hulpmiddelen/filter-vervangdatum', type: 'website', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Hoe vaak moet ik mijn filter vervangen?", answer: "Voorfilters doorgaans elke 6 tot 12 maanden, het membraan na enkele jaren. Het exacte interval staat in de handleiding." },
  { question: "Slaan jullie mijn datum op?", answer: "Nee. De berekening gebeurt lokaal in je browser; er wordt niets bewaard." },
];

export default function FilterVervangdatumTool() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Hulpmiddelen', url: 'https://waterfilterplatform.nl/hulpmiddelen' },
        { name: "Filter-vervangdatum", url: 'https://waterfilterplatform.nl/hulpmiddelen/filter-vervangdatum' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/hulpmiddelen" className="hover:text-[#005F8A]">Hulpmiddelen</Link>
            <span className="mx-2">/</span>
            <span>Filter-vervangdatum</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Filter vervangdatum-calculator</h1>
          <p className="text-gray-600 text-lg">Bereken de volgende vervangdatum van je filterpatroon op basis van de installatiedatum en het interval.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <CalculatorClient kind="filterdatum" />

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt deze berekening?</h2>
        <p className="text-gray-700 leading-relaxed mb-3">De tool telt het aantal maanden bij de installatiedatum op. Er wordt niets opgeslagen; de berekening gebeurt lokaal in je browser.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Gangbare intervallen: voorfilters elke 6 tot 12 maanden, een osmosemembraan vaak na enkele jaren. Volg het advies van je fabrikant.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Een TDS-meting kan helpen bepalen of het membraan nog goed werkt.</p>
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
              ['/onderhoud', "Onderhoud", "Filters vervangen"],
              ['/kennisbank/osmose-membraan-levensduur', "Membraan levensduur", "Wanneer vervangen"],
              ['/hulpmiddelen/osmose-rejectie', "Rejectie-calculator", "Membraan testen"],
              ['/kennisbank/osmose-membraan-sanitiseren', "Sanitiseren", "Hygiene"],
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
