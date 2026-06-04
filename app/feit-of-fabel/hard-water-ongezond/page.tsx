import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';

export const metadata: Metadata = {
  title: "Feit of fabel: is hard water ongezond? (2026)",
  description: "Is hard water slecht voor je gezondheid? Oordeel: fabel. Hard water is gewoon drinkbaar; het geeft vooral kalkaanslag, geen gezondheidsprobleem.",
  alternates: { canonical: 'https://waterfilterplatform.nl/feit-of-fabel/hard-water-ongezond' },
  openGraph: { title: "Feit of fabel: is hard water ongezond? (2026)", description: "Is hard water slecht voor je gezondheid? Oordeel: fabel. Hard water is gewoon drinkbaar; het geeft vooral kalkaanslag, geen gezondheidsprobleem.", url: 'https://waterfilterplatform.nl/feit-of-fabel/hard-water-ongezond', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Waarom dan een waterontharder?", answer: "Vooral voor comfort en om kalkaanslag in leidingen en apparaten te voorkomen, niet om gezondheidsredenen." },
  { question: "Is zacht water gezonder?", answer: "Niet aantoonbaar. Het verschil zit in kalk en comfort, niet in gezondheid." },
];

export default function HardWaterOngezondMyth() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Hard water is slecht voor je gezondheid", description: "Is hard water slecht voor je gezondheid? Oordeel: fabel. Hard water is gewoon drinkbaar; het geeft vooral kalkaanslag, geen gezondheidsprobleem.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/feit-of-fabel/hard-water-ongezond' }} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Feit of fabel', url: 'https://waterfilterplatform.nl/feit-of-fabel' },
        { name: "Hard water ongezond?", url: 'https://waterfilterplatform.nl/feit-of-fabel/hard-water-ongezond' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/feit-of-fabel" className="hover:text-[#005F8A]">Feit of fabel</Link>
            <span className="mx-2">/</span>
            <span>Hard water ongezond?</span>
          </nav>
          <p className="text-sm text-gray-500 mb-2">Claim:</p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-4">"Hard water is slecht voor je gezondheid"</h1>
          <div className="quick-answer bg-white border rounded-2xl p-5" data-speakable="true" style={{ borderColor: '#B91C1C' }}>
            <p className="font-bold mb-1" style={{ color: '#B91C1C' }}>Oordeel: Fabel</p>
            <p className="text-gray-800">Hard water (veel calcium en magnesium) is gewoon drinkbaar en voldoet aan de normen. Het veroorzaakt kalkaanslag in apparaten, maar is geen gezondheidsprobleem; calcium en magnesium zijn juist nuttige mineralen.</p>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <HealthDisclaimer />
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Uitleg</h2>
        <p className="text-gray-700 leading-relaxed mb-3">Het ongemak van hard water is praktisch (kalk op kranen, in de waterkoker), niet gezondheidskundig.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Sommige mensen ervaren een drogere huid bij hard douchewater; dat is een comfortkwestie.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Voor gezondheidsvragen is je huisarts leidend.</p>
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
              ['/kennisbank/drinkwater-huid-eczeem', "Water en huid"],
              ['/waterhardheid', "Waterhardheid"],
              ['/waterontharder', "Waterontharder"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
