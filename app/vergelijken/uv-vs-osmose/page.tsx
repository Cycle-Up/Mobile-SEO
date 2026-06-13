import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: "UV-filter vs omgekeerde osmose: wat is het verschil? (2026)",
    description: "UV-sterilisatie of omgekeerde osmose? Vergelijk wat ze aanpakken (micro-organismen vs opgeloste stoffen) en wanneer je ze combineert.",
    alternates: { canonical: 'https://waterfilterplatform.nl/vergelijken/uv-vs-osmose' },
    openGraph: {
      title: "UV-filter vs omgekeerde osmose: wat is het verschil? (2026)",
      description: "UV-sterilisatie of omgekeerde osmose? Vergelijk wat ze aanpakken (micro-organismen vs opgeloste stoffen) en wanneer je ze combineert.",
      url: 'https://waterfilterplatform.nl/vergelijken/uv-vs-osmose',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: "Doodt omgekeerde osmose bacterien?",
    answer: "Osmose houdt veel micro-organismen tegen via het membraan, maar is daar niet primair voor bedoeld. Voor microbiologisch onveilig water is UV de aangewezen, specifieke stap.",
  },
  {
    question: "Werkt UV op troebel water?",
    answer: "Nee. UV werkt alleen goed op helder water; troebelheid en deeltjes moeten eerst worden weggefilterd, anders bereikt het licht de micro-organismen niet.",
  },
];

const vergelijking = [
  { naam: "Omgekeerde osmose", c1: "Opgeloste stoffen, kalk, PFAS", c2: "Niet primair micro-organismen", c3: "Drinkwater zuiveren", highlight: true },
  { naam: "UV-sterilisatie", c1: "Bacterien, virussen", c2: "Geen opgeloste stoffen", c3: "Microbiologisch onveilig water" },
];

export default function UvVsOsmosePage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: "UV-filter vs omgekeerde osmose: wat is het verschil?",
          description: "UV-sterilisatie of omgekeerde osmose? Vergelijk wat ze aanpakken (micro-organismen vs opgeloste stoffen) en wanneer je ze combineert.",
          datePublished: '2026-06-02',
          dateModified: '2026-06-02',
          url: 'https://waterfilterplatform.nl/vergelijken/uv-vs-osmose',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/vergelijken' },
          { name: "UV vs osmose", url: 'https://waterfilterplatform.nl/vergelijken/uv-vs-osmose' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:text-[#005F8A]">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>UV vs osmose</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">UV-filter vs omgekeerde osmose: wat is het verschil?</h1>
          <p className="text-gray-600 text-lg mb-6"><strong>UV-sterilisatie</strong> doodt micro-organismen met ultraviolet licht; <strong>omgekeerde osmose</strong> verwijdert opgeloste stoffen via een membraan. Ze pakken verschillende dingen aan en worden soms gecombineerd.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/waterfilter/uv-sterilisatie" className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm">Over UV-sterilisatie</Link>
            <Link href="/omgekeerde-osmose" className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm">Over omgekeerde osmose</Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-06-02" sources={['RIVM', 'KWR Water Research Institute', 'NSF/ANSI normen']} />
        <AuthorBox datePublished="2026-06-02" />

        <QuickAnswer question="UV of omgekeerde osmose?" answer="UV-sterilisatie inactiveert bacterien en virussen met ultraviolet licht, maar verwijdert geen opgeloste stoffen, kalk of PFAS. Omgekeerde osmose verwijdert juist opgeloste stoffen zoals lood, nitraat, kalk en PFAS, maar is niet primair bedoeld om micro-organismen te doden. Voor microbiologisch onveilig water (zoals bronwater) is UV zinvol; voor opgeloste verontreinigingen osmose. Soms combineer je beide." />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Naast elkaar</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Pakt aan</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Pakt niet aan</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Typisch gebruik</th>
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
              ["Kies UV als...", "Je water microbiologisch onveilig kan zijn, bijvoorbeeld bron- of putwater."],
              ["Kies osmose als...", "Je opgeloste stoffen zoals lood, nitraat, kalk of PFAS wilt verwijderen."],
              ["Combineer als...", "Je zowel micro-organismen als opgeloste stoffen wilt aanpakken."],
              ["Let op...", "UV werkt alleen op helder water; troebelheid moet eerst worden weggefilterd."],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">Meer lezen? Bekijk <Link href="/waterfilter/uv-sterilisatie" className="text-[#005F8A] underline">UV-sterilisatie</Link>, <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> of de <Link href="/filtertechnieken" className="text-[#005F8A] underline">filtertechnieken</Link>.</p>
        </section>

        <AffiliateCTA
          destination="zuiverWaterKranen"
          campaign="omgekeerde-osmose"
          content="vergelijken-uv-vs-osmose-cta"
          label="Bekijk de zuiver-water-kranen"
          title="Klaar voor zuiver water uit de kraan?"
          sub="Bekijk de zuiver-water-kranen (osmosesysteem met kraan) bij onze partner PureAqua."
        />

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
              ["/filtertechnieken", "Filtertechnieken", "Alle technieken vergeleken"],
              ["/omgekeerde-osmose", "Omgekeerde osmose", "Werking en wanneer zinvol"],
              ["/kennisbank/putwater-behandelen", "Putwater behandelen", "Veilig maken van bronwater"],
              ["/kennisbank/microfiltratie", "Microfiltratie", "De grofste membraanstap"],
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
