import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: "Keramisch filter vs koolstoffilter: verschil en keuze (2026)",
    description: "Keramisch filter of koolstoffilter? Vergelijk wat ze tegenhouden (deeltjes en bacterien vs chloor en smaak) en wanneer je ze combineert.",
    alternates: { canonical: 'https://waterfilterplatform.nl/vergelijken/keramisch-vs-koolstof' },
    openGraph: {
      title: "Keramisch filter vs koolstoffilter: verschil en keuze (2026)",
      description: "Keramisch filter of koolstoffilter? Vergelijk wat ze tegenhouden (deeltjes en bacterien vs chloor en smaak) en wanneer je ze combineert.",
      url: 'https://waterfilterplatform.nl/vergelijken/keramisch-vs-koolstof',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: "Houdt een keramisch filter chloor tegen?",
    answer: "Nee, keramiek werkt mechanisch op deeltjesgrootte en houdt geen chloor of opgeloste stoffen tegen. Daarvoor is een koolstoffilter nodig; veel filters combineren beide.",
  },
  {
    question: "Verwijdert een koolstoffilter bacterien?",
    answer: "Niet betrouwbaar. Koolstof bindt chloor, smaak en geur via adsorptie. Voor het tegenhouden van bacterien is een keramisch of fijner membraanfilter geschikter.",
  },
];

const vergelijking = [
  { naam: "Keramisch filter", c1: "Mechanisch (porien)", c2: "Deeltjes, veel bacterien", c3: "Chloor, opgeloste stoffen" },
  { naam: "Koolstoffilter", c1: "Adsorptie", c2: "Chloor, smaak, geur", c3: "Bacterien, kalk" },
  { naam: "Combinatie", c1: "Beide", c2: "Deeltjes + chloor/smaak", c3: "Geen opgeloste zouten", highlight: true },
];

export default function KeramischVsKoolstofPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: "Keramisch filter vs koolstoffilter: verschil en keuze",
          description: "Keramisch filter of koolstoffilter? Vergelijk wat ze tegenhouden (deeltjes en bacterien vs chloor en smaak) en wanneer je ze combineert.",
          datePublished: '2026-06-02',
          dateModified: '2026-06-02',
          url: 'https://waterfilterplatform.nl/vergelijken/keramisch-vs-koolstof',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/vergelijken' },
          { name: "Keramisch vs koolstoffilter", url: 'https://waterfilterplatform.nl/vergelijken/keramisch-vs-koolstof' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:text-[#005F8A]">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Keramisch vs koolstoffilter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Keramisch filter vs koolstoffilter: verschil en keuze</h1>
          <p className="text-gray-600 text-lg mb-6">Een <strong>keramisch filter</strong> houdt deeltjes en veel bacterien tegen op poriegrootte; een <strong>koolstoffilter</strong> bindt chloor, smaak en geur via adsorptie. Ze vullen elkaar vaak aan.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/filtertechnieken" className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm">Filtertechnieken</Link>
            <Link href="/koolstoffilter" className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm">Over koolstoffilters</Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-06-02" sources={['RIVM', 'KWR Water Research Institute', 'NSF/ANSI normen']} />
        <AuthorBox datePublished="2026-06-02" />

        <QuickAnswer question="Keramisch of koolstoffilter?" answer="Een keramisch filter werkt mechanisch: het houdt deeltjes, troebelheid en veel bacterien tegen dankzij de fijne porien, maar verwijdert geen chloor of opgeloste stoffen. Een koolstoffilter bindt juist chloor, smaak, geur en sommige organische stoffen via adsorptie, maar houdt geen bacterien tegen. Veel filters combineren een keramische buitenkant met een koolstofkern, zodat je beide voordelen krijgt." />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Naast elkaar</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Werking</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Pakt aan</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Pakt niet aan</th>
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
              ["Kies keramisch als...", "Je deeltjes en bacterien wilt tegenhouden, bijvoorbeeld bij troebel of onzeker water."],
              ["Kies koolstof als...", "Je vooral chloorsmaak en geur wilt verbeteren."],
              ["Combineer als...", "Je zowel deeltjes/bacterien als smaak wilt aanpakken (veel filters doen dit)."],
              ["Voor opgeloste stoffen...", "Voor lood, nitraat of PFAS is osmose nodig; geen van beide doet dat grondig."],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">Meer lezen? Bekijk <Link href="/keramisch-filter" className="text-[#005F8A] underline">keramische filters</Link>, <Link href="/koolstoffilter" className="text-[#005F8A] underline">koolstoffilters</Link> of de <Link href="/filtertechnieken" className="text-[#005F8A] underline">filtertechnieken</Link>.</p>
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
              ["/keramisch-filter", "Keramisch filter", "Werking en gebruik"],
              ["/koolstoffilter", "Koolstoffilter", "Chloor en smaak"],
              ["/filtertechnieken/actief-kool", "Actief kool", "Adsorptie uitgelegd"],
              ["/vergelijken/actief-kool-vs-osmose", "Actief kool vs osmose", "Wat verwijdert wat"],
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
