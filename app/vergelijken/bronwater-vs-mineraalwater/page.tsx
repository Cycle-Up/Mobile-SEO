import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: "Bronwater vs mineraalwater: wat is het verschil? (2026)",
    description: "Bronwater of mineraalwater uit de fles? Vergelijk herkomst, mineralen, regels en kosten, en hoe ze zich verhouden tot kraanwater.",
    alternates: { canonical: 'https://waterfilterplatform.nl/vergelijken/bronwater-vs-mineraalwater' },
    openGraph: {
      title: "Bronwater vs mineraalwater: wat is het verschil? (2026)",
      description: "Bronwater of mineraalwater uit de fles? Vergelijk herkomst, mineralen, regels en kosten, en hoe ze zich verhouden tot kraanwater.",
      url: 'https://waterfilterplatform.nl/vergelijken/bronwater-vs-mineraalwater',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: "Is mineraalwater gezonder dan kraanwater?",
    answer: "Niet aantoonbaar voor de algemene bevolking. Nederlands kraanwater is streng gecontroleerd, veel goedkoper en duurzamer. Dit is algemene informatie, geen voedingsadvies.",
  },
  {
    question: "Mag mineraalwater bewerkt worden?",
    answer: "Natuurlijk mineraalwater mag wettelijk niet wezenlijk worden bewerkt en moet een constante samenstelling hebben. Bronwater kent minder strenge eisen aan constante samenstelling.",
  },
];

const vergelijking = [
  { naam: "Mineraalwater", c1: "Beschermde bron", c2: "Constant, niet bewerkt", c3: "Strengst" },
  { naam: "Bronwater", c1: "Ondergrondse bron", c2: "Mag varieren", c3: "Drinkwatereisen" },
  { naam: "Kraanwater", c1: "Leidingnet", c2: "Streng gecontroleerd", c3: "Drinkwaterbesluit", highlight: true },
];

export default function BronwaterVsMineraalwaterPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: "Bronwater vs mineraalwater: wat is het verschil?",
          description: "Bronwater of mineraalwater uit de fles? Vergelijk herkomst, mineralen, regels en kosten, en hoe ze zich verhouden tot kraanwater.",
          datePublished: '2026-06-02',
          dateModified: '2026-06-02',
          url: 'https://waterfilterplatform.nl/vergelijken/bronwater-vs-mineraalwater',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/vergelijken' },
          { name: "Bronwater vs mineraalwater", url: 'https://waterfilterplatform.nl/vergelijken/bronwater-vs-mineraalwater' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:text-[#005F8A]">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Bronwater vs mineraalwater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Bronwater vs mineraalwater: wat is het verschil?</h1>
          <p className="text-gray-600 text-lg mb-6"><strong>Bronwater</strong> en <strong>mineraalwater</strong> komen allebei uit een fles, maar verschillen in herkomst, regels en mineraalgehalte. We zetten ze naast elkaar, ook ten opzichte van kraanwater.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/vergelijken/kraanwater-vs-flessenwater" className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm">Kraanwater vs flessenwater</Link>
            <Link href="/drinkwaternormen" className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm">Drinkwaternormen</Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-06-02" sources={['RIVM', 'KWR Water Research Institute', 'NSF/ANSI normen']} />
        <AuthorBox datePublished="2026-06-02" />

        <QuickAnswer question="Bronwater of mineraalwater?" answer="Natuurlijk mineraalwater komt uit een beschermde bron met een wettelijk constante samenstelling en mag niet worden bewerkt. Bronwater komt ook uit een ondergrondse bron en moet aan drinkwatereisen voldoen, maar kent minder strenge eisen aan constante samenstelling. Voor de meeste mensen is goedkoop, gecontroleerd kraanwater een prima en duurzamer alternatief voor beide." />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Naast elkaar</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Herkomst</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Samenstelling</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Regels</th>
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
              ["Kies mineraalwater als...", "Je een vaste, gegarandeerde mineraalsamenstelling wilt."],
              ["Kies bronwater als...", "Je een flessenwater zoekt dat aan drinkwatereisen voldoet."],
              ["Kies kraanwater als...", "Je goedkoop, gecontroleerd en duurzaam water wilt; eventueel gefilterd."],
              ["Let op kosten en milieu...", "Flessenwater is vele malen duurder en belastender dan kraanwater."],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">Meer lezen? Bekijk <Link href="/vergelijken/kraanwater-vs-flessenwater" className="text-[#005F8A] underline">kraanwater vs flessenwater</Link>, <Link href="/vergelijken/osmose-vs-bronwater" className="text-[#005F8A] underline">osmose vs bronwater</Link> of <Link href="/drinkwaternormen" className="text-[#005F8A] underline">drinkwaternormen</Link>.</p>
        </section>

        <CTABanner context="algemeen" />

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
              ["/vergelijken/kraanwater-vs-flessenwater", "Kraanwater vs flessenwater", "Kosten, kwaliteit, milieu"],
              ["/vergelijken/osmose-vs-bronwater", "Osmose vs bronwater", "Mineralen en zuiverheid"],
              ["/kennisbank/leidingwater-vs-bronwater-fles", "Leidingwater vs bronwater", "Fles versus kraan"],
              ["/drinkwaternormen", "Drinkwaternormen", "Wettelijke eisen"],
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
