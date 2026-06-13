import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Feit of fabel: werken magnetische ontkalkers net zo goed? (2026)",
  description: "Werken magnetische ontkalkers net zo goed als een waterontharder? Oordeel: fabel. Ze verlagen de hardheid niet en het bewijs is omstreden.",
  alternates: { canonical: 'https://waterfilterplatform.nl/feit-of-fabel/magneet-ontkalker-werkt' },
  openGraph: { title: "Feit of fabel: werken magnetische ontkalkers net zo goed? (2026)", description: "Werken magnetische ontkalkers net zo goed als een waterontharder? Oordeel: fabel. Ze verlagen de hardheid niet en het bewijs is omstreden.", url: 'https://waterfilterplatform.nl/feit-of-fabel/magneet-ontkalker-werkt', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Doen magneten dan niks?", answer: "Het effect is onzeker en beperkt; ze verlagen de hardheid niet. Vraag om onafhankelijke testresultaten." },
  { question: "Wat werkt wel?", answer: "Een ionenwisselaar voor het hele huis, of omgekeerde osmose voor kalkvrij drinkwater aan een tappunt." },
];

export default function MagneetOntkalkerWerktMyth() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Magnetische ontkalkers werken net zo goed als een waterontharder", description: "Werken magnetische ontkalkers net zo goed als een waterontharder? Oordeel: fabel. Ze verlagen de hardheid niet en het bewijs is omstreden.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/feit-of-fabel/magneet-ontkalker-werkt' }} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Feit of fabel', url: 'https://waterfilterplatform.nl/feit-of-fabel' },
        { name: "Magneet net zo goed?", url: 'https://waterfilterplatform.nl/feit-of-fabel/magneet-ontkalker-werkt' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/feit-of-fabel" className="hover:text-[#005F8A]">Feit of fabel</Link>
            <span className="mx-2">/</span>
            <span>Magneet net zo goed?</span>
          </nav>
          <p className="text-sm text-gray-500 mb-2">Claim:</p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-4">"Magnetische ontkalkers werken net zo goed als een waterontharder"</h1>
          <div className="quick-answer bg-white border rounded-2xl p-5" data-speakable="true" style={{ borderColor: '#B91C1C' }}>
            <p className="font-bold mb-1" style={{ color: '#B91C1C' }}>Oordeel: Fabel</p>
            <p className="text-gray-800">Magnetische en elektronische ontkalkers verlagen de waterhardheid niet; ze proberen alleen kristalvorming te beinvloeden, met omstreden en wisselend bewijs. Een ionenwisselaar verlaagt de hardheid wel meetbaar.</p>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Uitleg</h2>
        <p className="text-gray-700 leading-relaxed mb-3">Bij een echte waterontharder daalt de dH meetbaar doordat calcium en magnesium worden vervangen door natrium.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Bij magnetische ontkalkers blijft de hardheid gelijk; onafhankelijke resultaten lopen sterk uiteen.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Voor meetbaar zachter water is ionenwisseling de zekerdere keuze.</p>
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
              ['/vergelijken/waterontharder-vs-magneet', "Waterontharder vs magneet"],
              ['/vergelijken/zoutloos-vs-ionenwisselaar', "Zoutloos vs ionenwisselaar"],
              ['/kennisbank/magnetisch-waterontharder', "Magnetische ontharder"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
