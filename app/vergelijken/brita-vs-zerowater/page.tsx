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
    title: 'Brita vs ZeroWater: smaak of TDS 0? (2026)',
    description:
      'Brita of ZeroWater filterkan? Brita mikt op smaak, ZeroWater op een zeer lage TDS. Vergelijk filtering, kosten per liter en smaak, plus wanneer osmose beter is.',
    alternates: { canonical: 'https://waterfilterplatform.nl/vergelijken/brita-vs-zerowater' },
    openGraph: {
      title: 'Brita vs ZeroWater - filterkannen vergeleken (2026)',
      description:
        'Brita (smaak/chloor) versus ZeroWater (5-traps, zeer lage TDS): filtering, kosten per liter en smaak, met osmose als grondiger en goedkoper alternatief per liter.',
      url: 'https://waterfilterplatform.nl/vergelijken/brita-vs-zerowater',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Brita of ZeroWater - wat is het verschil?',
    answer:
      'Brita is een filterkan met actieve kool en ionenwisselaar die vooral chloor, smaak en geur verbetert. ZeroWater gebruikt een 5-traps systeem dat de TDS (opgeloste stoffen) veel sterker verlaagt, vaak tot bijna 0, en levert er een TDS-meter bij. ZeroWater filtert dus dieper, maar de patronen raken sneller op en zijn duurder.',
  },
  {
    question: 'Heeft ZeroWater echt een lagere TDS dan Brita?',
    answer:
      'Ja. ZeroWater is specifiek ontworpen om de TDS sterk te verlagen via ionenwisseling, terwijl Brita zich vooral op smaak en chloor richt en de TDS nauwelijks verlaagt. Wil je een zeer lage TDS uit een kan, dan presteert ZeroWater daarop beter; voor alleen lekkerder water volstaat Brita.',
  },
  {
    question: 'Wat kost Brita vs ZeroWater per liter?',
    answer:
      'Brita-patronen gaan langer mee en zijn goedkoper per stuk, dus de kosten per liter zijn lager. ZeroWater-patronen raken sneller uitgeput, zeker bij harder water met een hoge TDS, waardoor de kosten per liter een stuk hoger liggen. Reken je eigen verbruik door om de twee eerlijk te vergelijken.',
  },
  {
    question: 'Waarom smaakt ZeroWater soms zuur?',
    answer:
      'Door de diepe ionenwisseling kan ZeroWater de pH-waarde verlagen, waardoor het water iets zuur kan smaken naarmate het patroon voller raakt. Dat is een bekend effect van sterke demineralisatie. Bij osmose speelt iets vergelijkbaars; daar kun je met remineralisatie de smaak weer neutraler maken.',
  },
  {
    question: 'Wanneer kies je osmose in plaats van een van beide kannen?',
    answer:
      'Wil je de lage TDS van ZeroWater zonder de dure, snel uitgeputte patronen, dan is een omgekeerde-osmosesysteem logischer: een vergelijkbaar laag TDS-niveau, maar continu uit de kraan en met lagere kosten per liter. Voor wie dagelijks veel zuiver water gebruikt is dat doorgaans de betere investering.',
  },
];

const vergelijking = [
  {
    naam: 'Onder-aanrecht osmose',
    tds: 'Zeer laag (membraan 95-99%)',
    filtering: 'Breed + lage TDS',
    kostenLiter: 'Laag',
    gemak: 'Continu uit de kraan',
    highlight: true,
    notitie: 'Lage TDS als ZeroWater, maar continu en goedkoper per liter.',
  },
  {
    naam: 'ZeroWater filterkan',
    tds: 'Zeer laag (tot bijna 0)',
    filtering: '5-traps, TDS-focus',
    kostenLiter: 'Hoog',
    gemak: 'Mobiel, handmatig bijvullen',
    highlight: false,
    notitie: 'Diepste TDS-verlaging uit een kan; dure, snel uitgeputte patronen.',
  },
  {
    naam: 'Brita filterkan',
    tds: 'Nauwelijks verlaagd',
    filtering: 'Chloor, smaak, geur',
    kostenLiter: 'Midden',
    gemak: 'Mobiel, handmatig bijvullen',
    highlight: false,
    notitie: 'Goedkoper in gebruik; gericht op smaak, niet op TDS.',
  },
];

export default function BritaVsZeroWaterPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Brita vs ZeroWater: smaak of TDS 0?',
          description:
            'Een eerlijke vergelijking van de filterkannen Brita (smaak/chloor) en ZeroWater (zeer lage TDS) op filtering, kosten per liter en smaak, met osmose als alternatief.',
          datePublished: '2026-05-30',
          dateModified: '2026-05-30',
          url: 'https://waterfilterplatform.nl/vergelijken/brita-vs-zerowater',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/vergelijken' },
          { name: 'Brita vs ZeroWater', url: 'https://waterfilterplatform.nl/vergelijken/brita-vs-zerowater' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:text-[#005F8A]">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Brita vs ZeroWater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Brita vs ZeroWater: smaak of TDS 0?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>Brita</strong> mikt op lekkerder water, <strong>ZeroWater</strong> op een zeer lage
            TDS. We vergelijken de twee filterkannen eerlijk op filtering, kosten per liter en smaak - en
            laten zien wanneer een osmosesysteem het beste van beide combineert.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/filterkan"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Filterkannen vergelijken
            </Link>
            <Link
              href="/omgekeerde-osmose"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Wat is omgekeerde osmose?
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-30" sources={['Fabrikant / verkoper', 'RIVM', 'NSF/ANSI-standaarden']} />
        <AuthorBox datePublished="2026-05-30" />

        <QuickAnswer
          question="Brita of ZeroWater?"
          answer="Kies Brita als je vooral lekkerder water wilt (minder chloor, betere smaak) tegen lagere kosten per liter. Kies ZeroWater als je een zeer lage TDS uit een kan wilt; het 5-traps systeem verlaagt opgeloste stoffen sterk, maar de patronen zijn duur en raken snel op, en het water kan iets zuur smaken. Wil je die lage TDS zonder de dure patronen, dan is een omgekeerde-osmosesysteem logischer: vergelijkbaar laag, continu uit de kraan en goedkoper per liter."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Brita en ZeroWater naast elkaar</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">TDS-verlaging</th>
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
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Beste per liter</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-700">{a.tds}</td>
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
              ['Kies Brita als...', 'Je vooral lekkerder water wilt met lagere kosten per liter en geen lage TDS nodig hebt.'],
              ['Kies ZeroWater als...', 'Een zeer lage TDS uit een kan je doel is en je de hogere patroonkosten accepteert.'],
              ['Let op bij ZeroWater...', 'Patronen raken snel op bij hard water en het water kan iets zuur smaken.'],
              ['Veel verbruik / lage TDS?', 'Dan is osmose voordeliger per liter dan ZeroWater-patronen en levert het continu uit de kraan.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer lezen? Bekijk{' '}
            <Link href="/zerowater-alternatief" className="text-[#005F8A] underline">ZeroWater alternatief</Link>,{' '}
            <Link href="/brita-alternatief" className="text-[#005F8A] underline">Brita alternatief</Link>{' '}
            of lees hoe je met een{' '}
            <Link href="/kennisbank/tds-meter-gebruiken" className="text-[#005F8A] underline">TDS-meter</Link> de werking controleert.
          </p>
        </section>

        <AffiliateCTA
          destination="zuiverWaterKranen"
          campaign="omgekeerde-osmose"
          content="vergelijken-brita-vs-zerowater-cta"
          label="Meer dan een filterkan: osmosesysteem met kraan"
          title="Klaar voor zuiver water uit de kraan?"
          sub="Bekijk de zuiver-water-kranen (osmosesysteem met kraan) bij onze partner PureAqua."
        />

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Brita vs ZeroWater</h2>
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
              ['/vergelijken/bwt-vs-brita', 'BWT vs Brita', 'Twee filterkanmerken op smaak en prijs'],
              ['/zerowater-alternatief', 'ZeroWater alternatief', 'Lage TDS zonder dure patronen'],
              ['/omgekeerde-osmose', 'Omgekeerde osmose', 'Lage TDS continu uit de kraan'],
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
