import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';

export const metadata: Metadata = {
  title: "Feit of fabel: is alkalisch water gezonder? (2026)",
  description: "Is alkalisch of gestructureerd water gezonder? Oordeel: genuanceerd tot onbewezen. Er is geen sterk wetenschappelijk bewijs voor gezondheidsclaims.",
  alternates: { canonical: 'https://waterfilterplatform.nl/feit-of-fabel/alkalisch-water-gezonder' },
  openGraph: { title: "Feit of fabel: is alkalisch water gezonder? (2026)", description: "Is alkalisch of gestructureerd water gezonder? Oordeel: genuanceerd tot onbewezen. Er is geen sterk wetenschappelijk bewijs voor gezondheidsclaims.", url: 'https://waterfilterplatform.nl/feit-of-fabel/alkalisch-water-gezonder', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Is alkalisch water schadelijk?", answer: "Voor gezonde mensen meestal niet, maar de gezondheidsvoordelen zijn niet bewezen. Wees kritisch op claims." },
  { question: "Reguleert mijn lichaam de pH niet zelf?", answer: "Ja, het lichaam houdt de bloed-pH strak gereguleerd, los van de pH van je drinkwater." },
];

export default function AlkalischWaterGezonderMyth() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Alkalisch of gestructureerd water is gezonder", description: "Is alkalisch of gestructureerd water gezonder? Oordeel: genuanceerd tot onbewezen. Er is geen sterk wetenschappelijk bewijs voor gezondheidsclaims.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/feit-of-fabel/alkalisch-water-gezonder' }} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Feit of fabel', url: 'https://waterfilterplatform.nl/feit-of-fabel' },
        { name: "Alkalisch water gezonder?", url: 'https://waterfilterplatform.nl/feit-of-fabel/alkalisch-water-gezonder' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/feit-of-fabel" className="hover:text-[#005F8A]">Feit of fabel</Link>
            <span className="mx-2">/</span>
            <span>Alkalisch water gezonder?</span>
          </nav>
          <p className="text-sm text-gray-500 mb-2">Claim:</p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-4">"Alkalisch of gestructureerd water is gezonder"</h1>
          <div className="quick-answer bg-white border rounded-2xl p-5" data-speakable="true" style={{ borderColor: '#B45309' }}>
            <p className="font-bold mb-1" style={{ color: '#B45309' }}>Oordeel: Genuanceerd</p>
            <p className="text-gray-800">Er is geen sterk wetenschappelijk bewijs dat alkalisch of gestructureerd water gezonder is dan gewoon drinkwater. Het lichaam reguleert de zuurgraad zelf. Wees voorzichtig met verstrekkende gezondheidsclaims; dit is algemene informatie, geen medisch advies.</p>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <HealthDisclaimer />
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Uitleg</h2>
        <p className="text-gray-700 leading-relaxed mb-3">Claims over ontzuren of betere hydratatie zijn niet overtuigend onderbouwd in onafhankelijk onderzoek.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Gewoon, veilig drinkwater voldoet voor hydratatie; dure apparaten zijn daarvoor niet nodig.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Bij gezondheidsvragen is een arts leidend; trap niet in absolute claims.</p>
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
              ['/alkalisch-water', "Alkalisch water"],
              ['/kennisbank/osmotische-druk-uitleg', "Osmotische druk"],
              ['/antwoorden/gefilterd-water-beter', "Gefilterd water beter?"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
