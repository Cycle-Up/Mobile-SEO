import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Feit of fabel: kraanwater minder gezond dan flessenwater? (2026)",
  description: "Is kraanwater minder gezond dan flessenwater? Oordeel: fabel. Nederlands kraanwater is streng gecontroleerd, goedkoop en duurzaam.",
  alternates: { canonical: 'https://waterfilterplatform.nl/feit-of-fabel/flessenwater-gezonder' },
  openGraph: { title: "Feit of fabel: kraanwater minder gezond dan flessenwater? (2026)", description: "Is kraanwater minder gezond dan flessenwater? Oordeel: fabel. Nederlands kraanwater is streng gecontroleerd, goedkoop en duurzaam.", url: 'https://waterfilterplatform.nl/feit-of-fabel/flessenwater-gezonder', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Is mineraalwater dan gezonder?", answer: "Niet aantoonbaar voor de algemene bevolking. Mineralen haal je vooral uit voeding, niet uit water." },
  { question: "Wanneer is flessenwater wel handig?", answer: "Onderweg of als de kraan tijdelijk niet beschikbaar is. Voor dagelijks gebruik thuis is kraanwater prima." },
];

export default function FlessenwaterGezonderMyth() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Kraanwater is minder gezond dan flessenwater", description: "Is kraanwater minder gezond dan flessenwater? Oordeel: fabel. Nederlands kraanwater is streng gecontroleerd, goedkoop en duurzaam.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/feit-of-fabel/flessenwater-gezonder' }} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Feit of fabel', url: 'https://waterfilterplatform.nl/feit-of-fabel' },
        { name: "Flessenwater gezonder?", url: 'https://waterfilterplatform.nl/feit-of-fabel/flessenwater-gezonder' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/feit-of-fabel" className="hover:text-[#005F8A]">Feit of fabel</Link>
            <span className="mx-2">/</span>
            <span>Flessenwater gezonder?</span>
          </nav>
          <p className="text-sm text-gray-500 mb-2">Claim:</p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-4">"Kraanwater is minder gezond dan flessenwater"</h1>
          <div className="quick-answer bg-white border rounded-2xl p-5" data-speakable="true" style={{ borderColor: '#B91C1C' }}>
            <p className="font-bold mb-1" style={{ color: '#B91C1C' }}>Oordeel: Fabel</p>
            <p className="text-gray-800">Nederlands kraanwater is streng gecontroleerd en voldoet aan dezelfde of strengere eisen dan veel flessenwater, terwijl het veel goedkoper en duurzamer is.</p>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Uitleg</h2>
        <p className="text-gray-700 leading-relaxed mb-3">Drinkwaterbedrijven controleren continu op honderden parameters; flessenwater is niet per definitie veiliger of gezonder.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Flessenwater is vele malen duurder per liter en geeft plastic afval en transportuitstoot.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Dit is algemene informatie; voor specifieke gezondheidsvragen is je huisarts leidend.</p>
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
              ['/vergelijken/kraanwater-vs-flessenwater', "Kraanwater vs flessenwater"],
              ['/drinkwaternormen', "Drinkwaternormen"],
              ['/antwoorden/is-kraanwater-veilig', "Is kraanwater veilig?"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
