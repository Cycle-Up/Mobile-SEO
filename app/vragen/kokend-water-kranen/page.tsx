import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Alles over kokend water kranen: 10 vragen beantwoord",
  description: "Kokendwaterkranen in tien vragen: werking, veiligheid, kosten en onderhoud, kort en feitelijk beantwoord.",
  alternates: { canonical: 'https://waterfilterplatform.nl/vragen/kokend-water-kranen' },
  openGraph: { title: "Alles over kokend water kranen: 10 vragen beantwoord", description: "Kokendwaterkranen in tien vragen: werking, veiligheid, kosten en onderhoud, kort en feitelijk beantwoord.", url: 'https://waterfilterplatform.nl/vragen/kokend-water-kranen', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Hoe werkt een kokendwaterkraan?", answer: "Een geisoleerd boilertje onder het aanrecht houdt water op bijna kookpunt, zodat je direct kokend water uit de kraan tapt." },
  { question: "Is een kokendwaterkraan veilig?", answer: "Moderne kranen hebben een kinderslot en geisoleerde uitloop tegen verbranding. Lees de veiligheidsinstructies van de fabrikant." },
  { question: "Wat kost een kokendwaterkraan aan stroom?", answer: "Het standby-verbruik hangt af van model en gebruik. Met de kokend-water-kraan-calculator bereken je een indicatie voor jouw situatie." },
  { question: "Is een kokendwaterkraan goedkoper dan een waterkoker?", answer: "Dat hangt af van je gebruik en het standbyverbruik; bij veel kleine tappingen kan een kraan gunstig zijn. Reken het door met de TCO-calculator." },
  { question: "Hoe vaak moet ik een kokendwaterkraan onderhouden?", answer: "Periodiek ontkalken en het filter vervangen volgens de handleiding; in hardwatergebieden vaker." },
  { question: "Kan ik er ook gefilterd water uit krijgen?", answer: "Sommige systemen combineren kokend water met een koolstoffilter of bruiswater; dat verschilt per merk en model." },
  { question: "Hoeveel kokend water levert zo'n kraan?", answer: "Afhankelijk van de tankgrootte, vaak genoeg voor meerdere koppen achter elkaar; daarna warmt de boiler weer op." },
  { question: "Welke merken zijn er?", answer: "Bekende merken zijn onder meer Quooker, Grohe, Selsiuz en Boretti; ze verschillen in tankgrootte, filters en functies." },
  { question: "Verbruikt een kokendwaterkraan veel stroom in standby?", answer: "Goed geisoleerde tanks houden het standbyverbruik beperkt; het exacte verbruik staat in de specificaties van het toestel." },
];

export default function KokendWaterKranenCluster() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Vragen', url: 'https://waterfilterplatform.nl/vragen' },
        { name: "Kokend water kranen", url: 'https://waterfilterplatform.nl/vragen/kokend-water-kranen' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vragen" className="hover:text-[#005F8A]">Vragen</Link>
            <span className="mx-2">/</span>
            <span>Kokend water kranen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Alles over kokend water kranen in tien vragen</h1>
          <p className="text-gray-600 text-lg">De belangrijkste vragen over kokendwaterkranen, beknopt beantwoord.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="space-y-3">
          {faqItems.map(item => (
            <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">{item.question}<span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">v</span></summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/hulpmiddelen/kokend-water-kraan-kosten', "Kosten-calculator"],
              ['/selsiuz-alternatief', "Selsiuz-alternatief"],
              ['/grohe-blue-alternatief', "Grohe Blue-alternatief"],
              ['/boretti-alternatief', "Boretti-alternatief"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
