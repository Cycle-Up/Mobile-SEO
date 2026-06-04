import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';

export const metadata: Metadata = {
  title: "Feit of fabel: osmosewater ontneemt mineralen? (2026)",
  description: "Ontneemt osmosewater je lichaam mineralen? Oordeel: genuanceerd. Mineralen komen vooral uit voeding; de WHO vraagt aandacht bij langdurig exclusief gebruik.",
  alternates: { canonical: 'https://waterfilterplatform.nl/feit-of-fabel/osmose-mineralen-lichaam' },
  openGraph: { title: "Feit of fabel: osmosewater ontneemt mineralen? (2026)", description: "Ontneemt osmosewater je lichaam mineralen? Oordeel: genuanceerd. Mineralen komen vooral uit voeding; de WHO vraagt aandacht bij langdurig exclusief gebruik.", url: 'https://waterfilterplatform.nl/feit-of-fabel/osmose-mineralen-lichaam', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Moet ik osmosewater remineraliseren?", answer: "Niet strikt noodzakelijk bij gevarieerde voeding, maar het herstelt smaak en mineraalinhoud en is een logische keuze als het je hoofdbron is." },
  { question: "Wat zegt de WHO?", answer: "De WHO vraagt aandacht voor langdurig drinken van gedemineraliseerd water als enige bron; het is genuanceerd en context-afhankelijk." },
];

export default function OsmoseMineralenLichaamMyth() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Osmosewater ontneemt je lichaam mineralen", description: "Ontneemt osmosewater je lichaam mineralen? Oordeel: genuanceerd. Mineralen komen vooral uit voeding; de WHO vraagt aandacht bij langdurig exclusief gebruik.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/feit-of-fabel/osmose-mineralen-lichaam' }} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Feit of fabel', url: 'https://waterfilterplatform.nl/feit-of-fabel' },
        { name: "Osmose ontneemt mineralen?", url: 'https://waterfilterplatform.nl/feit-of-fabel/osmose-mineralen-lichaam' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/feit-of-fabel" className="hover:text-[#005F8A]">Feit of fabel</Link>
            <span className="mx-2">/</span>
            <span>Osmose ontneemt mineralen?</span>
          </nav>
          <p className="text-sm text-gray-500 mb-2">Claim:</p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-4">"Osmosewater ontneemt je lichaam mineralen"</h1>
          <div className="quick-answer bg-white border rounded-2xl p-5" data-speakable="true" style={{ borderColor: '#B45309' }}>
            <p className="font-bold mb-1" style={{ color: '#B45309' }}>Oordeel: Genuanceerd</p>
            <p className="text-gray-800">Genuanceerd. Osmosewater is mineraalarm, maar je haalt mineralen vooral uit voeding. Het idee dat het water actief mineralen aan je lichaam onttrekt, is niet onderbouwd; wel vraagt de WHO aandacht bij langdurig drinken als enige bron.</p>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <HealthDisclaimer />
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Uitleg</h2>
        <p className="text-gray-700 leading-relaxed mb-3">Calcium en magnesium komen in een gevarieerd dieet vooral uit zuivel, groenten, noten en volkoren producten.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Wie osmosewater als hoofdbron gebruikt, kan kiezen voor remineralisatie of een scheut kraanwater bijmengen.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Bij gezondheidsvragen of een bijzonder dieet is een arts of dietist leidend.</p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">{item.question}<span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">v</span></summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Lees verder</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/kennisbank/mineraalarm-water-langdurig', "Mineraalarm water"],
              ['/osmose-water/remineralisatie', "Remineralisatie"],
              ['/antwoorden/is-osmosewater-ongezond', "Is osmosewater ongezond?"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
