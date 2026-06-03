import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: "Kokend water kraan vs waterkoker: kosten en gemak (2026)",
    description: "Een kokend water kraan of een gewone waterkoker? Vergelijk aanschaf, energie, gemak en levensduur over meerdere jaren.",
    alternates: { canonical: 'https://waterfilterplatform.nl/vergelijken/kokend-kraan-vs-waterkoker' },
    openGraph: {
      title: "Kokend water kraan vs waterkoker: kosten en gemak (2026)",
      description: "Een kokend water kraan of een gewone waterkoker? Vergelijk aanschaf, energie, gemak en levensduur over meerdere jaren.",
      url: 'https://waterfilterplatform.nl/vergelijken/kokend-kraan-vs-waterkoker',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: "Is een kokend water kraan zuiniger dan een waterkoker?",
    answer: "Niet per se. Een waterkoker verwarmt alleen bij gebruik; een kraan houdt een boiler op temperatuur (standby-energie). Over meerdere jaren is een waterkoker vaak goedkoper.",
  },
  {
    question: "Waarom dan toch een kokend water kraan?",
    answer: "Voor gemak, snelheid en ruimtebesparing. Je hebt direct kokend water zonder wachten of een apparaat op het aanrecht.",
  },
];

const vergelijking = [
  { naam: "Waterkoker", c1: "Laag (tientallen euro)", c2: "Alleen bij koken", c3: "Wachten, neemt ruimte" },
  { naam: "Kokend water kraan", c1: "Hoog (honderden euro)", c2: "Standby-boiler", c3: "Direct, ruimtebesparend", highlight: true },
];

export default function KokendKraanVsWaterkokerPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: "Kokend water kraan vs waterkoker: kosten en gemak",
          description: "Een kokend water kraan of een gewone waterkoker? Vergelijk aanschaf, energie, gemak en levensduur over meerdere jaren.",
          datePublished: '2026-06-02',
          dateModified: '2026-06-02',
          url: 'https://waterfilterplatform.nl/vergelijken/kokend-kraan-vs-waterkoker',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/vergelijken' },
          { name: "Kokend water kraan vs waterkoker", url: 'https://waterfilterplatform.nl/vergelijken/kokend-kraan-vs-waterkoker' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:text-[#005F8A]">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Kokend water kraan vs waterkoker</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Kokend water kraan vs waterkoker: kosten en gemak</h1>
          <p className="text-gray-600 text-lg mb-6">Een <strong>kokend water kraan</strong> geeft direct kokend water; een <strong>waterkoker</strong> is goedkoop maar vraagt wachten. We vergelijken kosten, energie en gemak.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/kokend-water-kraan" className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm">Kokend water kranen</Link>
            <Link href="/vergelijken/kokend-water-kraan-merken" className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm">Merken vergelijken</Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-06-02" sources={['RIVM', 'KWR Water Research Institute', 'NSF/ANSI normen']} />
        <AuthorBox datePublished="2026-06-02" />

        <QuickAnswer question="Kokend water kraan of waterkoker?" answer="Een waterkoker is goedkoop in aanschaf en kookt alleen wat je nodig hebt, maar je wacht en hij neemt aanrechtruimte in. Een kokend water kraan geeft direct kokend water en is comfortabel en ruimtebesparend, maar kost honderden euro's plus standby-energie om de boiler warm te houden. Over meerdere jaren is een waterkoker doorgaans goedkoper; de kraan koop je voor gemak." />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Naast elkaar</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Aanschaf</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Energie</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Gemak</th>
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
              ["Kies een waterkoker als...", "Budget voorop staat en je af en toe heet water nodig hebt."],
              ["Kies een kokend water kraan als...", "Je dagelijks vaak kokend water gebruikt en comfort en ruimte belangrijk vindt."],
              ["Reken de TCO...", "Tel aanschaf, energie en levensduur over meerdere jaren bij elkaar op."],
              ["Overweeg 4-in-1...", "Een 4-in-1 kraan combineert kokend, gefilterd en bruisend water."],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">Meer lezen? Bekijk <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kranen</Link>, <Link href="/kennisbank/kokend-water-kraan-kosten" className="text-[#005F8A] underline">de kosten</Link> of het <Link href="/4-in-1-kraan" className="text-[#005F8A] underline">4-in-1 kraan overzicht</Link>.</p>
        </section>

        <CTABanner context="kokend" />

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
              ["/kokend-water-kraan", "Kokend water kranen", "Merken en werking"],
              ["/kennisbank/kokend-water-kraan-kosten", "Kosten kokend water kraan", "Aanschaf en energie"],
              ["/4-in-1-kraan", "4-in-1 kraan", "Kokend, gefilterd, bruisend"],
              ["/vergelijken/kokend-water-kraan-merken", "Merken vergelijken", "Alle merken op een rij"],
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
