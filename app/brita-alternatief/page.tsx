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
    title: 'Brita alternatief: betere waterfilters dan de filterkan? (2026)',
    description:
      'Zoek je een alternatief voor de Brita filterkan? Vergelijk BWT, ZeroWater, een onder-aanrecht filter en osmose op filtering, kosten en gemak in 2026.',
    alternates: { canonical: 'https://waterfilterplatform.nl/brita-alternatief' },
    openGraph: {
      title: 'Brita alternatief vergelijken - beste opties 2026',
      description:
        'De Brita filterkan verbetert vooral smaak en geur. Wil je ook kalk, lood of PFAS aanpakken, dan zijn er alternatieven die verder filteren.',
      url: 'https://waterfilterplatform.nl/brita-alternatief',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is een goed alternatief voor de Brita filterkan?',
    answer:
      'Dat hangt af van je doel. Wil je alleen een betere smaak, dan zijn een BWT- of ZeroWater-filterkan directe alternatieven. Wil je echt verontreinigingen zoals kalk, lood of PFAS aanpakken, dan filtert een onder-aanrecht koolstoffilter of een omgekeerde-osmosesysteem grondiger dan welke filterkan dan ook. Een filterkan met actieve kool richt zich vooral op chloor, smaak en geur, niet op brede contaminantverwijdering.',
  },
  {
    question: 'Is er een goedkoper alternatief dan Brita?',
    answer:
      'Op de aanschaf is een Brita-kan goedkoop (circa 20 tot 40 euro), maar de filterpatronen tikken aan: reken op ongeveer 4 tot 6 euro per patroon, elke maand vervangen. Over een jaar kom je al snel op 50 tot 90 euro aan filters. Huismerk-filterkannen zijn vaak goedkoper in gebruik; een onder-aanrecht filter heeft een hogere aanschaf maar lagere kosten per liter op de lange termijn.',
  },
  {
    question: 'Verwijdert een Brita filterkan kalk, lood of PFAS?',
    answer:
      'Een Brita-filterkan vermindert vooral chloor en verbetert smaak en geur; sommige patronen verminderen tijdelijk wat kalk. Voor het betrouwbaar verwijderen van lood, nitraat of PFAS is een filterkan niet de juiste keuze. Daarvoor zijn een gecertificeerd onder-aanrecht koolstoffilter of een omgekeerde-osmosesysteem geschikter; osmose verwijdert volgens onder meer de EPA een breed pakket verontreinigingen.',
  },
  {
    question: 'Brita of BWT - wat is beter?',
    answer:
      'Beide zijn filterkannen die zich richten op smaak en geur. BWT voegt magnesium toe voor de smaak, Brita heeft het grootste assortiment en de bekendste naam. De verschillen in prestaties zijn klein; beide blijven filterkannen met dezelfde beperking. Een feitelijke vergelijking lees je in ons artikel Brita vs BWT.',
  },
  {
    question: 'Is een onder-aanrecht filter of osmose echt beter dan een filterkan?',
    answer:
      'Voor grondige filtering wel. Een filterkan is goedkoop en mobiel, maar filtert beperkt en vraagt frequent patroon wisselen. Een onder-aanrecht koolstoffilter of osmosesysteem levert continu gefilterd water uit de kraan, filtert breder en heeft lagere kosten per liter. Het nadeel is een hogere aanschaf en een eenmalige installatie. Voor wie dagelijks veel gefilterd water gebruikt, is dat doorgaans de betere investering.',
  },
];

const topAlternatieven = [
  {
    naam: 'Onder-aanrecht osmose',
    prijs: 'EUR 200-500',
    filtering: 'Breed (kalk, chloor, lood, nitraat, PFAS)',
    kostenLiter: 'Laag',
    gemak: 'Continu uit de kraan',
    highlight: true,
    notitie: 'Grondigste filtering, lage kosten per liter, eenmalige installatie.',
  },
  {
    naam: 'Onder-aanrecht koolstoffilter',
    prijs: 'EUR 80-200',
    filtering: 'Chloor, smaak, deels zware metalen',
    kostenLiter: 'Laag-midden',
    gemak: 'Continu uit de kraan',
    highlight: false,
    notitie: 'Meer filtering dan een kan, zonder afvalwater; geen kalk-/PFAS-garantie.',
  },
  {
    naam: 'Brita filterkan (referentie)',
    prijs: 'EUR 20-40 + patronen',
    filtering: 'Chloor, smaak, geur',
    kostenLiter: 'Midden-hoog',
    gemak: 'Mobiel, handmatig bijvullen',
    highlight: false,
    notitie: 'Goedkope aanschaf, maar maandelijks patroon wisselen en beperkte filtering.',
  },
  {
    naam: 'BWT / ZeroWater filterkan',
    prijs: 'EUR 25-50 + patronen',
    filtering: 'Smaak; ZeroWater verlaagt TDS sterk',
    kostenLiter: 'Hoog (ZeroWater)',
    gemak: 'Mobiel, handmatig bijvullen',
    highlight: false,
    notitie: 'Directe kan-alternatieven; ZeroWater scoort op TDS maar patronen gaan snel.',
  },
];

export default function BritaAlternatiefPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Brita alternatief: betere waterfilters dan de filterkan? (2026)',
          description: 'Zoek je een alternatief voor de Brita filterkan? Vergelijk BWT, ZeroWater, een onder-aanrecht filter en osmose op filtering, kosten en gemak in 2026.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/brita-alternatief',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Brita alternatief', url: 'https://waterfilterplatform.nl/brita-alternatief' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Brita alternatief</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Brita alternatief: filtert het beter en goedkoper?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            De <strong>Brita</strong> filterkan is de bekendste manier om kraanwater lekkerder te maken.
            Toch zoeken veel mensen een <strong>alternatief voor Brita</strong> - omdat ze meer willen dan
            alleen een betere smaak, de maandelijkse patronen zat zijn, of een{' '}
            <strong>goedkoper alternatief voor Brita</strong> zoeken op de lange termijn. We zetten de
            serieuze opties eerlijk naast elkaar.
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
        <MethodologyBadge lastReviewed="2026-05-29" sources={['US EPA', 'RIVM', 'Vewin', 'NSF/ANSI-standaarden']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Wat is het beste Brita alternatief?"
          answer="Dat hangt af van je doel. Voor alleen een betere smaak zijn BWT- en ZeroWater-filterkannen directe alternatieven. Wil je echt kalk, lood, nitraat of PFAS aanpakken, dan filtert een onder-aanrecht koolstoffilter of een omgekeerde-osmosesysteem grondiger dan welke filterkan dan ook - met lagere kosten per liter en water continu uit de kraan, tegen een hogere aanschaf en eenmalige installatie. Een Brita-kan blijft prima voor wie alleen chloorsmaak wil verminderen."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat doet de Brita filterkan precies?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een Brita-filterkan werkt met een patroon van actieve kool en ionenwisselaar. Voordat je
            alternatieven beoordeelt, is het belangrijk te weten wat je er wel en niet mee bereikt.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Betere smaak en minder chloor', 'De actieve kool vermindert chloor, smaak en geur - daar is de filterkan sterk in.'],
              ['Beperkte contaminantverwijdering', 'Voor lood, nitraat of PFAS is een filterkan niet de aangewezen oplossing.'],
              ['Maandelijks patroon wisselen', 'Patronen gaan circa een maand mee; vergeten te wisselen verlaagt de werking.'],
              ['Handmatig bijvullen', 'Je vult de kan steeds met de hand en wacht tot het water is doorgelopen.'],
              ['Lage aanschaf, lopende kosten', 'De kan is goedkoop, maar de patronen vormen de werkelijke kostenpost.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong> - {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            De Brita is sterk voor wie alleen de smaak wil verbeteren. Wie meer filtering of lagere kosten
            per liter wil, vindt betere opties. Lees ook onze feitelijke vergelijking{' '}
            <Link href="/kennisbank/brita-vs-osmose" className="text-[#005F8A] underline">Brita vs osmose</Link>{' '}
            en{' '}
            <Link href="/kennisbank/brita-vs-bwt" className="text-[#005F8A] underline">Brita vs BWT</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De beste alternatieven voor Brita vergeleken</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Hieronder vergelijken we de serieuze alternatieven, met de Brita-filterkan als referentie. Let
            op de verhouding tussen filtering, kosten per liter en gemak.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Prijs</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Filtering</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Kosten/liter</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Gemak</th>
                </tr>
              </thead>
              <tbody>
                {topAlternatieven.map(a => (
                  <tr key={a.naam} className={`border-b border-gray-100 ${a.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">
                      {a.naam}
                      {a.highlight && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Aanbevolen</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-700">{a.prijs}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.filtering}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.kostenLiter}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.gemak}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Prijzen indicatief op basis van publieke richtprijzen. Bijgewerkt mei 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer is osmose of een onder-aanrecht filter de betere keuze?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Gebruik je dagelijks veel gefilterd water, of wil je meer dan alleen smaakverbetering, dan is
            een vaste oplossing onder het aanrecht logischer dan een kan. Een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde-osmosesysteem</Link>{' '}
            filtert het breedst en levert water continu uit een aparte kraan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              ['Breder filteren', 'Osmose pakt naast smaak ook kalk, lood, nitraat en PFAS aan - waar een filterkan stopt.'],
              ['Lagere kosten per liter', 'Geen maandelijkse patronen; filters gaan veel langer mee dan kan-patronen.'],
              ['Continu uit de kraan', 'Geen wachten en bijvullen; gefilterd water is er direct, zoveel als je wilt.'],
              ['Eenmalige installatie', 'Hogere aanschaf en een installatie onder het aanrecht, daarna nauwelijks omkijken.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer weten? Lees onze gids over het{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">kopen van een osmosesysteem</Link>{' '}
            of bekijk de{' '}
            <Link href="/waterfilter/onder-aanrecht" className="text-[#005F8A] underline">onder-aanrecht waterfilters</Link>.
          </p>
        </section>

        <AffiliateCTA
          destination="theSource"
          campaign="omgekeerde-osmose"
          content="brita-alternatief-cta"
          label="Bekijk The Source RO-systeem voor thuis"
          title="Op zoek naar een RO-systeem voor thuis?"
          sub="The Source is het omgekeerde-osmosesysteem van onze partner PureAqua."
        />

        <CTABanner context="algemeen" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer blijf je bij Brita?</h2>
          <div className="space-y-3">
            {[
              ['Je wilt alleen lekkerder water', 'Gaat het je puur om minder chloorsmaak, dan doet een Brita-kan dat prima en goedkoop in aanschaf.'],
              ['Je huurt of verhuist vaak', 'Een filterkan vraagt geen installatie en verhuist zo mee - handig in een huurwoning.'],
              ['Je gebruikt weinig water', 'Drink je maar af en toe gefilterd water, dan is een vaste installatie onnodig.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">-</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{t}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Conclusie: welk alternatief past bij jou?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            De Brita-filterkan blijft een prima, goedkope keuze voor wie alleen de smaak wil verbeteren.
            Maar voor wie breder wil filteren, lagere kosten per liter wil of klaar is met maandelijks
            patronen wisselen, biedt een <strong>onder-aanrecht filter of osmosesysteem</strong> een
            completere oplossing.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Verder vergelijken? Bekijk de{' '}
            <Link href="/filterkan" className="text-[#005F8A] underline">filterkannen</Link>, de{' '}
            <Link href="/beste-filterkan-2026" className="text-[#005F8A] underline">beste filterkan van 2026</Link>{' '}
            of lees{' '}
            <Link href="/kennisbank/filterkan-vs-osmose" className="text-[#005F8A] underline">filterkan vs osmose</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Brita alternatieven</h2>
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
              ['/kennisbank/brita-vs-bwt', 'Brita vs BWT', 'Twee grootste filterkanmerken vergeleken'],
              ['/kennisbank/brita-vs-osmose', 'Brita vs osmose', 'Wat verwijdert welk filter echt'],
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
