import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: "4-in-1 kraan vs aparte osmose en kokend water (2026)",
    description: "Een 4-in-1 kraan of losse systemen voor osmose en kokend water? Vergelijk functies, ruimte, prijs en flexibiliteit.",
    alternates: { canonical: 'https://waterfilterplatform.nl/vergelijken/vier-in-een-vs-apart' },
    openGraph: {
      title: "4-in-1 kraan vs aparte osmose en kokend water (2026)",
      description: "Een 4-in-1 kraan of losse systemen voor osmose en kokend water? Vergelijk functies, ruimte, prijs en flexibiliteit.",
      url: 'https://waterfilterplatform.nl/vergelijken/vier-in-een-vs-apart',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: "Wat is voordeliger: 4-in-1 of aparte systemen?",
    answer: "Dat hangt af van de opstelling. Vergelijk de totale kosten inclusief installatie en filters. Een 4-in-1 bespaart ruimte; aparte systemen geven meer flexibiliteit.",
  },
  {
    question: "Kan ik onderdelen los vervangen bij een 4-in-1?",
    answer: "Beperkter dan bij aparte systemen, omdat functies in een toestel zitten. Bij losse systemen vervang of upgrade je elk onderdeel apart.",
  },
];

const vergelijking = [
  { naam: "4-in-1 kraan", c1: "Kokend + gefilterd + bruisend", c2: "Compact, een kraan", c3: "Alles in een", highlight: true },
  { naam: "Aparte systemen", c1: "Per toestel een functie", c2: "Meer ruimte", c3: "Los te vervangen" },
];

export default function VierInEenVsApartPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: "4-in-1 kraan vs aparte osmose en kokend water",
          description: "Een 4-in-1 kraan of losse systemen voor osmose en kokend water? Vergelijk functies, ruimte, prijs en flexibiliteit.",
          datePublished: '2026-06-02',
          dateModified: '2026-06-02',
          url: 'https://waterfilterplatform.nl/vergelijken/vier-in-een-vs-apart',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/vergelijken' },
          { name: "4-in-1 kraan vs apart", url: 'https://waterfilterplatform.nl/vergelijken/vier-in-een-vs-apart' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:text-[#005F8A]">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>4-in-1 kraan vs apart</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">4-in-1 kraan vs aparte osmose en kokend water</h1>
          <p className="text-gray-600 text-lg mb-6">Een <strong>4-in-1 kraan</strong> combineert kokend, koud gefilterd, warm en bruisend water; <strong>aparte systemen</strong> doen elk een ding. We vergelijken functies, ruimte en prijs.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/4-in-1-kraan" className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm">4-in-1 kraan overzicht</Link>
            <Link href="/omgekeerde-osmose/kopen" className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm">Osmosesysteem kopen</Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-06-02" sources={['RIVM', 'KWR Water Research Institute', 'NSF/ANSI normen']} />
        <AuthorBox datePublished="2026-06-02" />

        <QuickAnswer question="4-in-1 kraan of aparte systemen?" answer="Een 4-in-1 kraan bundelt kokend, gefilterd, warm en vaak bruisend water in een toestel en kraan, wat ruimte en bedieningsgemak oplevert. Aparte systemen (bijvoorbeeld een osmosesysteem plus een kokend water kraan) geven meer flexibiliteit en zijn los te vervangen, maar vragen meer ruimte en aansluitingen. De keuze hangt af van ruimte, budget en hoeveel functies je echt gebruikt." />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Naast elkaar</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Functies</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Ruimte</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Flexibiliteit</th>
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
              ["Kies 4-in-1 als...", "Je meerdere functies in een compacte, nette opstelling wilt."],
              ["Kies apart als...", "Je maximale flexibiliteit wilt en onderdelen los wilt kunnen vervangen."],
              ["Let op de prijs...", "Vergelijk de totale opstelling inclusief installatie en filters."],
              ["Let op onderhoud...", "Bij een 4-in-1 zit alles in een toestel; bij apart onderhoud je per systeem."],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">Meer lezen? Bekijk het <Link href="/4-in-1-kraan" className="text-[#005F8A] underline">4-in-1 kraan overzicht</Link>, <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> of <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kranen</Link>.</p>
        </section>

        <CTABanner context="osmose" />

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
              ["/4-in-1-kraan", "4-in-1 kraan", "Kokend, gefilterd, bruisend"],
              ["/omgekeerde-osmose", "Omgekeerde osmose", "Zuiver drinkwater"],
              ["/kokend-water-kraan", "Kokend water kraan", "Merken en werking"],
              ["/vergelijken/kokend-kraan-vs-waterkoker", "Kraan vs waterkoker", "Kosten en gemak"],
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
