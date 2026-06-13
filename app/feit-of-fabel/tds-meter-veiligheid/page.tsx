import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Feit of fabel: meet een TDS-meter de veiligheid? (2026)",
  description: "Meet een TDS-meter hoe veilig je water is? Oordeel: fabel. TDS meet de totale opgeloste stoffen, niet welke stoffen het zijn of of ze schadelijk zijn.",
  alternates: { canonical: 'https://waterfilterplatform.nl/feit-of-fabel/tds-meter-veiligheid' },
  openGraph: { title: "Feit of fabel: meet een TDS-meter de veiligheid? (2026)", description: "Meet een TDS-meter hoe veilig je water is? Oordeel: fabel. TDS meet de totale opgeloste stoffen, niet welke stoffen het zijn of of ze schadelijk zijn.", url: 'https://waterfilterplatform.nl/feit-of-fabel/tds-meter-veiligheid', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Waar is een TDS-meter wel goed voor?", answer: "Voor het controleren van een osmosemembraan (toevoer vs permeaat) en een ruwe indicatie van het mineraalgehalte." },
  { question: "Hoe weet ik of mijn water veilig is?", answer: "Via je drinkwaterbedrijf en, bij een eigen bron, een laboratoriumanalyse." },
];

export default function TdsMeterVeiligheidMyth() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Een TDS-meter meet hoe veilig je water is", description: "Meet een TDS-meter hoe veilig je water is? Oordeel: fabel. TDS meet de totale opgeloste stoffen, niet welke stoffen het zijn of of ze schadelijk zijn.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/feit-of-fabel/tds-meter-veiligheid' }} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Feit of fabel', url: 'https://waterfilterplatform.nl/feit-of-fabel' },
        { name: "TDS = veiligheid?", url: 'https://waterfilterplatform.nl/feit-of-fabel/tds-meter-veiligheid' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/feit-of-fabel" className="hover:text-[#005F8A]">Feit of fabel</Link>
            <span className="mx-2">/</span>
            <span>TDS = veiligheid?</span>
          </nav>
          <p className="text-sm text-gray-500 mb-2">Claim:</p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-4">"Een TDS-meter meet hoe veilig je water is"</h1>
          <div className="quick-answer bg-white border rounded-2xl p-5" data-speakable="true" style={{ borderColor: '#B91C1C' }}>
            <p className="font-bold mb-1" style={{ color: '#B91C1C' }}>Oordeel: Fabel</p>
            <p className="text-gray-800">Een TDS-meter meet de totale hoeveelheid opgeloste stoffen, niet welke stoffen het zijn. Een hoge TDS betekent niet onveilig (meestal gewone mineralen), en een lage TDS niet automatisch veilig. Voor veiligheid is laboratoriumanalyse nodig.</p>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Uitleg</h2>
        <p className="text-gray-700 leading-relaxed mb-3">TDS (en geleidbaarheid) is handig om de werking van een osmosesysteem te volgen of het mineraalgehalte ruwweg in te schatten.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Sommige zorgwekkende stoffen komen in zulke lage concentraties voor dat ze de TDS nauwelijks beinvloeden.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Gebruik TDS voor monitoring en vergelijking, niet als veiligheidsoordeel.</p>
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
              ['/kennisbank/tds-water', "TDS uitgelegd"],
              ['/kennisbank/geleidbaarheid-ec-water', "Geleidbaarheid (EC)"],
              ['/hulpmiddelen/osmose-rejectie', "Rejectie-calculator"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
