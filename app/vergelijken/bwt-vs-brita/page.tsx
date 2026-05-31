import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'BWT vs Brita filterkan: welke kiezen? (2026)',
    description:
      'BWT of Brita filterkan? Vergelijk magnesium-smaak, filterprestatie, kosten per liter en gemak - en wanneer een onder-aanrecht filter of osmose beter is.',
    alternates: { canonical: 'https://waterfilterplatform.nl/vergelijken/bwt-vs-brita' },
    openGraph: {
      title: 'BWT vs Brita filterkan - vergelijking 2026',
      description:
        'Twee grootste filterkanmerken naast elkaar: smaak, filtering, kosten per liter en gemak, plus wanneer je verder moet kijken dan een kan.',
      url: 'https://waterfilterplatform.nl/vergelijken/bwt-vs-brita',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'BWT of Brita - wat is het verschil?',
    answer:
      'Beide zijn filterkannen met een patroon van actieve kool en ionenwisselaar die vooral chloor, smaak en geur verbeteren. Het bekendste verschil: BWT voegt magnesium toe voor de smaak, terwijl Brita het grootste assortiment en de bekendste naam heeft. In filterprestatie ontlopen ze elkaar weinig; beide blijven filterkannen met dezelfde beperking.',
  },
  {
    question: 'Verwijdert BWT of Brita kalk, lood of PFAS?',
    answer:
      'Beide verminderen vooral chloor en verbeteren smaak en geur; sommige patronen verminderen tijdelijk wat kalk. Voor het betrouwbaar verwijderen van lood, nitraat of PFAS is een filterkan - van welk merk dan ook - niet de juiste keuze. Daarvoor zijn een gecertificeerd onder-aanrecht koolstoffilter of een omgekeerde-osmosesysteem geschikter.',
  },
  {
    question: 'Wat kost BWT vs Brita per jaar?',
    answer:
      'De kosten zitten vooral in de patronen, die je doorgaans maandelijks vervangt. Per jaar kom je voor beide merken al snel op enkele tientallen tot ongeveer negentig euro aan patronen, afhankelijk van verbruik en prijs per patroon. De aanschaf van de kan zelf is bij beide relatief laag.',
  },
  {
    question: 'Smaakt BWT-water beter door het magnesium?',
    answer:
      'Sommige mensen ervaren het magnesium-toevoegende BWT-water als iets voller of zachter van smaak. Dat is persoonlijk en subtiel; de hoeveelheid magnesium is klein. Zie het als een smaakvoorkeur, niet als een aangetoonde gezondheidswinst. Je haalt het grootste deel van je mineralen uit voeding.',
  },
  {
    question: 'Wanneer kies je geen filterkan maar iets anders?',
    answer:
      'Gebruik je dagelijks veel gefilterd water, wil je breder filteren (kalk, lood, PFAS) of ben je het maandelijks patronen wisselen zat, dan is een onder-aanrecht koolstoffilter of osmosesysteem op termijn beter: continu water uit de kraan, bredere filtering en lagere kosten per liter, tegen een hogere aanschaf.',
  },
];

const vergelijking = [
  {
    naam: 'Onder-aanrecht osmose',
    smaak: 'Neutraal, zeer zuiver',
    filtering: 'Breed (kalk, lood, nitraat, PFAS)',
    kostenLiter: 'Laag',
    gemak: 'Continu uit de kraan',
    highlight: true,
    notitie: 'Grondigste optie; hogere aanschaf, lage kosten per liter.',
  },
  {
    naam: 'BWT filterkan',
    smaak: 'Magnesium-toevoeging',
    filtering: 'Chloor, smaak, geur',
    kostenLiter: 'Midden-hoog',
    gemak: 'Mobiel, handmatig bijvullen',
    highlight: false,
    notitie: 'Vollere smaak door magnesium; maandelijks patroon wisselen.',
  },
  {
    naam: 'Brita filterkan',
    smaak: 'Neutraal',
    filtering: 'Chloor, smaak, geur',
    kostenLiter: 'Midden-hoog',
    gemak: 'Mobiel, handmatig bijvullen',
    highlight: false,
    notitie: 'Grootste assortiment en naamsbekendheid; zelfde beperking.',
  },
];

export default function BwtVsBritaPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'BWT vs Brita filterkan: welke kiezen?',
          description:
            'Een eerlijke vergelijking van de filterkannen van BWT en Brita op smaak, filtering, kosten per liter en gemak, met osmose als grondiger alternatief.',
          datePublished: '2026-05-30',
          dateModified: '2026-05-30',
          url: 'https://waterfilterplatform.nl/vergelijken/bwt-vs-brita',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/vergelijken' },
          { name: 'BWT vs Brita', url: 'https://waterfilterplatform.nl/vergelijken/bwt-vs-brita' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:text-[#005F8A]">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>BWT vs Brita</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            BWT vs Brita filterkan: welke kiezen?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>BWT</strong> en <strong>Brita</strong> zijn de twee bekendste filterkanmerken. We
            vergelijken ze eerlijk op smaak, filtering, kosten per liter en gemak - en laten zien wanneer
            een onder-aanrecht filter of osmose een betere keuze is dan welke kan dan ook.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/filterkan"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Filterkannen vergelijken
            </Link>
            <Link
              href="/beste-filterkan-2026"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Beste filterkan 2026
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-30" sources={['Fabrikant / verkoper', 'RIVM', 'NSF/ANSI-standaarden']} />
        <AuthorBox datePublished="2026-05-30" />

        <QuickAnswer
          question="BWT of Brita?"
          answer="Beide zijn filterkannen die vooral chloor, smaak en geur verbeteren; in prestatie ontlopen ze elkaar weinig. BWT voegt magnesium toe voor een vollere smaak, Brita heeft het grootste assortiment en de bekendste naam. Voor kalk, lood of PFAS is geen van beide de juiste keuze. Gebruik je veel water of wil je breder filteren, dan is een onder-aanrecht koolstoffilter of osmosesysteem op termijn beter: continu uit de kraan en lagere kosten per liter."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">BWT en Brita naast elkaar</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Smaak</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Filtering</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Kosten/liter</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Gemak</th>
                </tr>
              </thead>
              <tbody>
                {vergelijking.map(a => (
                  <tr key={a.naam} className={`border-b border-gray-100 ${a.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">
                      {a.naam}
                      {a.highlight && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Grondigst</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-700">{a.smaak}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.filtering}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.kostenLiter}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.gemak}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Indicatief op basis van publieke informatie. Bijgewerkt mei 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke past bij jou?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              ['Kies BWT als...', 'Je een iets vollere smaak door magnesium prettig vindt en bij een filterkan wilt blijven.'],
              ['Kies Brita als...', 'Je het grootste assortiment, brede verkrijgbaarheid en de bekendste naam wilt.'],
              ['Beide beperkt voor...', 'Lood, nitraat en PFAS - daarvoor heb je osmose of een gecertificeerd onder-aanrecht filter nodig.'],
              ['Veel verbruik?', 'Dan is een vaste oplossing onder het aanrecht goedkoper per liter en minder gedoe.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer lezen? Bekijk{' '}
            <Link href="/filterkan/brita" className="text-[#005F8A] underline">Brita filterkan</Link>,{' '}
            <Link href="/filterkan/bwt" className="text-[#005F8A] underline">BWT filterkan</Link>{' '}
            of de afweging{' '}
            <Link href="/kennisbank/filterkan-vs-osmose" className="text-[#005F8A] underline">filterkan vs osmose</Link>.
          </p>
        </section>

        <CTABanner context="algemeen" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over BWT vs Brita</h2>
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
              ['/filterkan', 'Filterkan', 'Hoe filterkannen werken en wat ze kosten'],
              ['/vergelijken/brita-vs-zerowater', 'Brita vs ZeroWater', 'Twee filterkannen op TDS-prestatie'],
              ['/brita-alternatief', 'Brita alternatief', 'Verder kijken dan de filterkan'],
              ['/beste-filterkan-2026', 'Beste filterkan 2026', 'Koopgids met shortlist'],
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
