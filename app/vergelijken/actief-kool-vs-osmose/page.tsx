import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Actief kool vs omgekeerde osmose: welke filter kiezen? (2026)',
    description:
      'Actief koolfilter of omgekeerde osmose? Vergelijk wat ze verwijderen (chloor, smaak vs lood, nitraat, PFAS), kosten en wanneer welke keuze past.',
    alternates: { canonical: 'https://waterfilterplatform.nl/vergelijken/actief-kool-vs-osmose' },
    openGraph: {
      title: 'Actief kool vs omgekeerde osmose vergeleken (2026)',
      description:
        'Een eerlijke vergelijking van actief kool en omgekeerde osmose op wat ze verwijderen, kosten en toepassingen.',
      url: 'https://waterfilterplatform.nl/vergelijken/actief-kool-vs-osmose',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is het verschil tussen actief kool en omgekeerde osmose?',
    answer:
      'Actief kool bindt chloor, smaak, geur en sommige organische stoffen via adsorptie, maar laat opgeloste zouten, kalk, nitraat en de meeste zware metalen door. Omgekeerde osmose perst water door een membraan en verwijdert 90-99% van vrijwel alle opgeloste stoffen, inclusief lood, nitraat, PFAS en microplastics. Osmose is grondiger; actief kool is goedkoper en gericht op smaak en chloor.',
  },
  {
    question: 'Verwijdert actief kool PFAS en lood?',
    answer:
      'Een goed actief-koolfilter kan een deel van de PFAS en sommige organische stoffen binden, maar de prestatie varieert sterk en neemt af naarmate het filter verzadigt. Voor betrouwbare verwijdering van lood, nitraat en PFAS is omgekeerde osmose de zekerdere keuze. Controleer altijd de gecertificeerde claims (NSF/ANSI) van een specifiek product.',
  },
  {
    question: 'Kan ik actief kool en osmose combineren?',
    answer:
      'Ja, en dat gebeurt vaak. Een osmosesysteem bevat doorgaans al een actief-koolvoorfilter (tegen chloor, dat het membraan beschermt) en een nafilter (voor de smaak). Zo combineer je de sterke punten van beide technieken in een opstelling.',
  },
  {
    question: 'Wat is goedkoper: actief kool of osmose?',
    answer:
      'Een actief-koolfilter (zoals een filterkan of opzetfilter) is goedkoper in aanschaf en onderhoud. Omgekeerde osmose kost meer, maar verwijdert veel meer stoffen. De juiste keuze hangt af van wat er in jouw water zit en wat je wilt aanpakken.',
  },
];

const vergelijking = [
  { naam: 'Omgekeerde osmose', verwijdert: 'Lood, nitraat, PFAS, kalk, microplastics (90-99%)', smaak: 'Chloor weg + zeer zuiver', kosten: 'Hoger', highlight: true },
  { naam: 'Actief kool', verwijdert: 'Chloor, geur, smaak, deel organische stoffen', smaak: 'Sterk op smaak/geur', kosten: 'Laag', highlight: false },
];

export default function ActiefKoolVsOsmosePage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Actief kool vs omgekeerde osmose: welke filter kiezen?',
          description:
            'Een eerlijke vergelijking van actief kool en omgekeerde osmose op wat ze verwijderen, kosten en toepassingen.',
          datePublished: '2026-05-31',
          dateModified: '2026-05-31',
          url: 'https://waterfilterplatform.nl/vergelijken/actief-kool-vs-osmose',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/vergelijken' },
          { name: 'Actief kool vs osmose', url: 'https://waterfilterplatform.nl/vergelijken/actief-kool-vs-osmose' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:text-[#005F8A]">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Actief kool vs osmose</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Actief kool vs omgekeerde osmose: welke filter kiezen?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>Actief kool</strong> en <strong>omgekeerde osmose</strong> pakken verschillende
            dingen aan. We vergelijken wat ze verwijderen, de kosten en wanneer welke keuze past.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/filtertechnieken/actief-kool" className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm">
              Over actief kool
            </Link>
            <Link href="/omgekeerde-osmose" className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm">
              Over omgekeerde osmose
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-31" sources={['RIVM', 'NSF/ANSI normen', 'KWR Water Research Institute']} />
        <AuthorBox datePublished="2026-05-31" />

        <QuickAnswer
          question="Actief kool of omgekeerde osmose?"
          answer="Actief kool is goedkoop en sterk in chloor, geur en smaak, maar laat kalk, nitraat, lood en de meeste opgeloste stoffen door. Omgekeerde osmose verwijdert 90-99% van vrijwel alle opgeloste stoffen, inclusief lood, nitraat en PFAS. Kies actief kool voor smaak, osmose voor brede zuivering; vaak worden ze gecombineerd."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Actief kool en osmose naast elkaar</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Verwijdert</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Smaak/geur</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Kosten</th>
                </tr>
              </thead>
              <tbody>
                {vergelijking.map(a => (
                  <tr key={a.naam} className={`border-b border-gray-100 ${a.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">
                      {a.naam}
                      {a.highlight && <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Breedst</span>}
                    </th>
                    <td className="py-2.5 px-3 text-gray-700">{a.verwijdert}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.smaak}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.kosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-1">Indicatief overzicht; gecertificeerde prestaties verschillen per product. Bijgewerkt mei 2026.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kies je wat?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              ['Kies actief kool als...', 'Je vooral chloorsmaak en geur wilt wegnemen en een goedkope, simpele oplossing zoekt.'],
              ['Kies osmose als...', 'Je lood, nitraat, PFAS of kalk wilt verwijderen en een breed zuiver resultaat wilt.'],
              ['Combineer als...', 'Je het beste van beide wilt: osmose bevat meestal al een actief-koolvoor- en nafilter.'],
              ['Twijfel je...', 'Laat je water testen of gebruik de keuzehulp om te bepalen wat in jouw situatie nodig is.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer lezen? Bekijk{' '}
            <Link href="/filtertechnieken/actief-kool" className="text-[#005F8A] underline">actief kool</Link>,{' '}
            <Link href="/vergelijken/osmose-vs-filterkan" className="text-[#005F8A] underline">osmose vs filterkan</Link>{' '}
            of de{' '}
            <Link href="/keuzehulp" className="text-[#005F8A] underline">keuzehulp</Link>.
          </p>
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
              ['/vergelijken/osmose-vs-filterkan', 'Osmose vs filterkan', 'Prestaties, kosten en keuze'],
              ['/filtertechnieken', 'Filtertechnieken', 'Alle technieken vergeleken'],
              ['/kennisbank/microfiltratie', 'Microfiltratie', 'De grofste membraantechniek'],
              ['/omgekeerde-osmose/kopen', 'Osmosesysteem kopen', 'Wat moet je weten voor aanschaf'],
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
