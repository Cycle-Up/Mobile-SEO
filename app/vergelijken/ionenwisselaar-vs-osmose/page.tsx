import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: "Ionenwisselaar vs omgekeerde osmose voor kalk (2026)",
    description: "Waterontharder (ionenwisseling) of omgekeerde osmose tegen kalk? Vergelijk hardheid, verwijdering, plek in huis en kosten.",
    alternates: { canonical: 'https://waterfilterplatform.nl/vergelijken/ionenwisselaar-vs-osmose' },
    openGraph: {
      title: "Ionenwisselaar vs omgekeerde osmose voor kalk (2026)",
      description: "Waterontharder (ionenwisseling) of omgekeerde osmose tegen kalk? Vergelijk hardheid, verwijdering, plek in huis en kosten.",
      url: 'https://waterfilterplatform.nl/vergelijken/ionenwisselaar-vs-osmose',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: "Verlaagt osmose de hardheid in het hele huis?",
    answer: "Nee, osmose werkt aan een tappunt. Voor zacht water door het hele huis (leidingen, boiler, apparaten) heb je een ionenwisselaar nodig.",
  },
  {
    question: "Voegt een ionenwisselaar natrium toe?",
    answer: "Ja, ionenwisseling vervangt calcium en magnesium door natrium. Osmose verwijdert juist mineralen; daarom combineren mensen soms beide.",
  },
];

const vergelijking = [
  { naam: "Ionenwisselaar", c1: "Hele huis", c2: "Hardheid (naar natrium)", c3: "Kalkaanslag in huis", highlight: true },
  { naam: "Omgekeerde osmose", c1: "Een tappunt", c2: "Vrijwel alles", c3: "Kalk in drinkwater" },
];

export default function IonenwisselaarVsOsmosePage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: "Ionenwisselaar vs omgekeerde osmose voor kalk",
          description: "Waterontharder (ionenwisseling) of omgekeerde osmose tegen kalk? Vergelijk hardheid, verwijdering, plek in huis en kosten.",
          datePublished: '2026-06-02',
          dateModified: '2026-06-02',
          url: 'https://waterfilterplatform.nl/vergelijken/ionenwisselaar-vs-osmose',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/vergelijken' },
          { name: "Ionenwisselaar vs osmose", url: 'https://waterfilterplatform.nl/vergelijken/ionenwisselaar-vs-osmose' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:text-[#005F8A]">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Ionenwisselaar vs osmose</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Ionenwisselaar vs omgekeerde osmose voor kalk</h1>
          <p className="text-gray-600 text-lg mb-6">Een <strong>ionenwisselaar</strong> (waterontharder) verlaagt de hardheid in het hele huis; <strong>omgekeerde osmose</strong> levert vrijwel kalkvrij water aan een tappunt. We vergelijken ze tegen kalk.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/waterontharder" className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm">Over waterontharders</Link>
            <Link href="/omgekeerde-osmose" className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm">Over omgekeerde osmose</Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-06-02" sources={['RIVM', 'KWR Water Research Institute', 'NSF/ANSI normen']} />
        <AuthorBox datePublished="2026-06-02" />

        <QuickAnswer question="Ionenwisselaar of osmose tegen kalk?" answer="Een ionenwisselaar verlaagt de hardheid in het hele huis door calcium en magnesium te vervangen door natrium; ideaal tegen kalkaanslag in leidingen en apparaten. Omgekeerde osmose verwijdert vrijwel alle mineralen, maar alleen aan een tappunt. Voor kalkbescherming door het hele huis kies je een ontharder; voor zuiver drinkwater osmose. Veel mensen combineren beide." />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Naast elkaar</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Bereik</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Verwijdert</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Beste tegen</th>
                </tr>
              </thead>
              <tbody>
                {vergelijking.map(a => (
                  <tr key={a.naam} className={`border-b border-gray-100 ${a.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">{a.naam}</th>
                    <td className="py-2.5 px-3 text-gray-700">{a.c1}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.c2}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.c3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-1">Indicatief overzicht; prestaties verschillen per product en situatie. Bijgewerkt juni 2026.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kies je wat?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              ["Kies een ionenwisselaar als...", "Je kalkaanslag in leidingen, boiler en apparaten door het hele huis wilt tegengaan."],
              ["Kies osmose als...", "Je vooral kalkvrij en zuiver drinkwater aan de keukenkraan wilt."],
              ["Combineer als...", "Je zacht water in huis en zuiver drinkwater aan het tappunt wilt."],
              ["Let op natrium...", "Ionenwisseling voegt natrium toe; osmose verwijdert juist mineralen."],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">Meer lezen? Bekijk <Link href="/filtertechnieken/ionenwisseling" className="text-[#005F8A] underline">ionenwisseling</Link>, <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharders</Link> of <Link href="/kennisbank/waterhardheid-verlagen" className="text-[#005F8A] underline">waterhardheid verlagen</Link>.</p>
        </section>

        <CTABanner context="waterhardheid" />

        <section>
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

        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ["/filtertechnieken/ionenwisseling", "Ionenwisseling", "Hoe ontharden werkt"],
              ["/kennisbank/waterhardheid-verlagen", "Waterhardheid verlagen", "Alle manieren"],
              ["/vergelijken/waterfilter-vs-waterontharder", "Waterfilter vs ontharder", "Verschil en keuze"],
              ["/kennisbank/tijdelijke-blijvende-hardheid", "Soorten hardheid", "Tijdelijk vs blijvend"],
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
