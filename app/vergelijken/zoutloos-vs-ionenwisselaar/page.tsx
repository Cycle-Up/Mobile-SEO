import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: "Zoutloze ontharder vs ionenwisselaar: wat werkt? (2026)",
    description: "Zoutloze waterontharder of klassieke ionenwisselaar? Vergelijk werking, bewijs, onderhoud en kosten tegen kalk.",
    alternates: { canonical: 'https://waterfilterplatform.nl/vergelijken/zoutloos-vs-ionenwisselaar' },
    openGraph: {
      title: "Zoutloze ontharder vs ionenwisselaar: wat werkt? (2026)",
      description: "Zoutloze waterontharder of klassieke ionenwisselaar? Vergelijk werking, bewijs, onderhoud en kosten tegen kalk.",
      url: 'https://waterfilterplatform.nl/vergelijken/zoutloos-vs-ionenwisselaar',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: "Werkt een zoutloze ontharder echt?",
    answer: "Het bewijs is wisselend. Zoutloze systemen verlagen de hardheid niet, maar proberen aanslag te beperken. Voor meetbaar zachter water is ionenwisseling de zekerdere keuze.",
  },
  {
    question: "Heeft een zoutloze ontharder onderhoud nodig?",
    answer: "Doorgaans weinig; er is geen zout nodig. Daar staat tegenover dat het effect onzeker is, terwijl een ionenwisselaar een bewezen maar onderhoudsgevoeliger resultaat geeft.",
  },
];

const vergelijking = [
  { naam: "Ionenwisselaar", c1: "Verlaagt meetbaar", c2: "Bewezen", c3: "Zout + spoelen", highlight: true },
  { naam: "Zoutloze ontharder", c1: "Onveranderd", c2: "Wisselend", c3: "Vrijwel geen" },
];

export default function ZoutloosVsIonenwisselaarPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: "Zoutloze ontharder vs ionenwisselaar: wat werkt?",
          description: "Zoutloze waterontharder of klassieke ionenwisselaar? Vergelijk werking, bewijs, onderhoud en kosten tegen kalk.",
          datePublished: '2026-06-02',
          dateModified: '2026-06-02',
          url: 'https://waterfilterplatform.nl/vergelijken/zoutloos-vs-ionenwisselaar',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/vergelijken' },
          { name: "Zoutloos vs ionenwisselaar", url: 'https://waterfilterplatform.nl/vergelijken/zoutloos-vs-ionenwisselaar' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:text-[#005F8A]">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Zoutloos vs ionenwisselaar</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Zoutloze ontharder vs ionenwisselaar: wat werkt?</h1>
          <p className="text-gray-600 text-lg mb-6">Een <strong>ionenwisselaar</strong> verlaagt de hardheid meetbaar met zout; een <strong>zoutloze ontharder</strong> belooft kalkaanslag te beperken zonder de hardheid te veranderen. We vergelijken werking en bewijs.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/waterontharder" className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm">Over waterontharders</Link>
            <Link href="/vergelijken/zoutloze-waterontharder-vergelijken" className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm">Zoutloze ontharders</Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-06-02" sources={['RIVM', 'KWR Water Research Institute', 'NSF/ANSI normen']} />
        <AuthorBox datePublished="2026-06-02" />

        <QuickAnswer question="Zoutloze ontharder of ionenwisselaar?" answer="Een klassieke ionenwisselaar verlaagt de hardheid echt door calcium en magnesium te vervangen door natrium; bewezen, maar met zout en onderhoud. Een zoutloze ontharder (vaak op basis van kristalkiemvorming) verandert de hardheid niet en probeert alleen aanslag te beperken; het bewijs is wisselend. Voor meetbaar zachter water is ionenwisseling de zekerdere keuze." />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Naast elkaar</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Hardheid</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Bewijs</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Onderhoud</th>
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
              ["Kies een ionenwisselaar als...", "Je meetbaar zachter water wilt en bereid bent zout bij te vullen."],
              ["Kies zoutloos als...", "Je een onderhoudsarme, zoutvrije oplossing wilt en accepteert dat het effect onzeker is."],
              ["Twijfel je...", "Beoordeel het bewijs kritisch; vraag om onafhankelijke testresultaten."],
              ["Voor drinkwater...", "Voor kalkvrij drinkwater is osmose aan het tappunt een aparte route."],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">Meer lezen? Bekijk <Link href="/vergelijken/zoutloze-waterontharder-vergelijken" className="text-[#005F8A] underline">zoutloze waterontharders</Link>, <Link href="/vergelijken/waterontharder-vs-magneet" className="text-[#005F8A] underline">waterontharder vs magneet</Link> of <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharders</Link>.</p>
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
              ["/vergelijken/zoutloze-waterontharder-vergelijken", "Zoutloze ontharders", "Alternatieven zonder zout"],
              ["/vergelijken/waterontharder-vs-magneet", "Waterontharder vs magneet", "Werkt magnetisch ontkalken"],
              ["/filtertechnieken/ionenwisseling", "Ionenwisseling", "Hoe ontharden werkt"],
              ["/kennisbank/waterhardheid-verlagen", "Waterhardheid verlagen", "Alle manieren"],
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
