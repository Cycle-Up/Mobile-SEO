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
    title: 'ZeroWater alternatief: goedkoper TDS 0 met osmose? (2026)',
    description:
      'Zoek je een alternatief voor de ZeroWater filterkan? Vergelijk TDS-verwijdering, kosten per liter en gemak met osmose en andere filters in 2026.',
    alternates: { canonical: 'https://waterfilterplatform.nl/zerowater-alternatief' },
    openGraph: {
      title: 'ZeroWater alternatief vergelijken - beste opties 2026',
      description:
        'ZeroWater verlaagt de TDS sterk, maar de patronen gaan snel op. Een osmosesysteem doet dat continu en goedkoper per liter.',
      url: 'https://waterfilterplatform.nl/zerowater-alternatief',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is een goed alternatief voor de ZeroWater filterkan?',
    answer:
      'Het sterkste alternatief is een omgekeerde-osmosesysteem. ZeroWater is een filterkan die met een 5-traps ionenwisselaar de TDS (opgeloste stoffen) sterk verlaagt, vaak tot bijna 0. Een osmosesysteem bereikt een vergelijkbaar laag TDS-niveau, maar dan continu uit de kraan en met veel lagere kosten per liter. Wil je alleen een betere smaak, dan volstaat een gewone filterkan zoals Brita of BWT.',
  },
  {
    question: 'Is er een goedkoper alternatief dan ZeroWater?',
    answer:
      'Op de lange termijn wel. ZeroWater-patronen zijn relatief duur en raken snel uitgeput, zeker bij harder water met een hoge TDS: soms is een patroon al na 25 tot 40 liter op. Een osmosesysteem heeft een hogere aanschaf, maar de filters gaan veel langer mee, waardoor de kosten per liter een stuk lager liggen voor wie dagelijks gefilterd water gebruikt.',
  },
  {
    question: 'Verlaagt osmose de TDS net zo goed als ZeroWater?',
    answer:
      'Ja, vergelijkbaar. Beide kunnen de TDS sterk verlagen. ZeroWater doet dit via ionenwisseling in een kan, omgekeerde osmose via een membraan dat tot circa 95 tot 99 procent van opgeloste stoffen tegenhoudt. Het verschil zit in gemak en kosten: osmose levert continu water uit een aparte kraan, ZeroWater vraagt handmatig bijvullen en frequent patroon wisselen. Een TDS-meter helpt om bij beide de werking te controleren.',
  },
  {
    question: 'Waarom smaakt ZeroWater soms zuur of vreemd?',
    answer:
      'Door de sterke ionenwisseling kan ZeroWater de pH-waarde verlagen, waardoor het water iets zuur kan smaken naarmate het patroon voller raakt. Dat is een bekend effect van diepe demineralisatie. Bij osmose speelt iets vergelijkbaars; daar kun je een remineralisatiestap toevoegen die mineralen terugbrengt voor een vollere, neutralere smaak.',
  },
  {
    question: 'Voor wie blijft ZeroWater een goede keuze?',
    answer:
      'ZeroWater is handig als je zonder installatie snel water met een zeer lage TDS wilt, bijvoorbeeld tijdelijk, in een huurwoning of voor een specifiek gebruik. Gebruik je dagelijks veel water, dan wegen de patroonkosten zwaar en is een vaste osmose-oplossing voordeliger en makkelijker.',
  },
];

const topAlternatieven = [
  {
    naam: 'Onder-aanrecht osmose',
    prijs: 'EUR 200-500',
    tds: 'Zeer laag (membraan 95-99%)',
    kostenLiter: 'Laag',
    gemak: 'Continu uit de kraan',
    highlight: true,
    notitie: 'Vergelijkbaar laag TDS als ZeroWater, maar continu en goedkoper per liter.',
  },
  {
    naam: 'ZeroWater filterkan (referentie)',
    prijs: 'EUR 30-60 + patronen',
    tds: 'Zeer laag (tot bijna 0)',
    kostenLiter: 'Hoog',
    gemak: 'Mobiel, handmatig bijvullen',
    highlight: false,
    notitie: 'Sterke TDS-verlaging, maar dure patronen die snel opraken.',
  },
  {
    naam: 'Brita / BWT filterkan',
    prijs: 'EUR 20-50 + patronen',
    tds: 'Beperkt (smaak/chloor)',
    kostenLiter: 'Midden',
    gemak: 'Mobiel, handmatig bijvullen',
    highlight: false,
    notitie: 'Goedkoper alternatief als je alleen smaak wilt verbeteren, niet de TDS.',
  },
  {
    naam: 'Onder-aanrecht koolstoffilter',
    prijs: 'EUR 80-200',
    tds: 'Beperkt (geen TDS-doel)',
    kostenLiter: 'Laag-midden',
    gemak: 'Continu uit de kraan',
    highlight: false,
    notitie: 'Continu gefilterd voor smaak; verlaagt de TDS niet zoals osmose.',
  },
];

export default function ZeroWaterAlternatiefPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'ZeroWater alternatief: goedkoper TDS 0 met osmose? (2026)',
          description: 'Zoek je een alternatief voor de ZeroWater filterkan? Vergelijk TDS-verwijdering, kosten per liter en gemak met osmose en andere filters in 2026.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/zerowater-alternatief',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'ZeroWater alternatief', url: 'https://waterfilterplatform.nl/zerowater-alternatief' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>ZeroWater alternatief</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            ZeroWater alternatief: zelfde TDS 0, lagere kosten?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            De <strong>ZeroWater</strong> filterkan staat bekend om het sterk verlagen van de TDS, vaak
            tot bijna nul. Toch zoeken veel mensen een <strong>alternatief voor ZeroWater</strong> - omdat
            de patronen snel opraken en duur zijn, of omdat ze een <strong>goedkoper alternatief voor
            ZeroWater</strong> willen met hetzelfde resultaat. We zetten de serieuze opties eerlijk naast
            elkaar.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Wat is omgekeerde osmose?
            </Link>
            <Link
              href="/filterkan"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Filterkannen vergelijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['US EPA', 'RIVM', 'Vewin', 'NSF/ANSI-standaarden']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Wat is het beste ZeroWater alternatief?"
          answer="Het sterkste alternatief is een omgekeerde-osmosesysteem: dat bereikt een vergelijkbaar laag TDS-niveau als ZeroWater, maar continu uit de kraan en met veel lagere kosten per liter. ZeroWater verlaagt de TDS via een 5-traps ionenwisselaar in een kan, maar de patronen zijn duur en raken snel op, zeker bij harder water. Wil je alleen een betere smaak en niet per se een lage TDS, dan volstaat een goedkopere filterkan zoals Brita of BWT."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat doet de ZeroWater filterkan precies?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            ZeroWater gebruikt een 5-traps systeem met onder meer ionenwisseling om opgeloste stoffen te
            verwijderen. Voordat je alternatieven beoordeelt, is het goed te weten wat je er wel en niet
            mee bereikt.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Sterke TDS-verlaging', 'De ionenwisselaar verlaagt de TDS tot bijna 0; er zit vaak een TDS-meter bij om dit te controleren.'],
              ['Dure, snel uitgeputte patronen', 'Bij harder water is een patroon soms al na 25 tot 40 liter op - dat tikt aan.'],
              ['Mogelijk zure smaak', 'Diepe demineralisatie kan de pH verlagen, waardoor het water iets zuur kan smaken.'],
              ['Handmatig bijvullen', 'Je vult de kan steeds met de hand en wacht tot het water is doorgelopen.'],
              ['Geen installatie', 'Direct te gebruiken, handig voor tijdelijk gebruik of een huurwoning.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong> - {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            ZeroWater is sterk in TDS-verlaging, maar duur in gebruik. Wie ditzelfde resultaat continu en
            goedkoper wil, kijkt naar osmose. Lees ook hoe je met een{' '}
            <Link href="/kennisbank/tds-meter-gebruiken" className="text-[#005F8A] underline">TDS-meter de werking controleert</Link>{' '}
            en wat{' '}
            <Link href="/osmose-water" className="text-[#005F8A] underline">osmose water</Link> precies is.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De beste alternatieven voor ZeroWater vergeleken</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Hieronder vergelijken we de serieuze alternatieven, met de ZeroWater-kan als referentie. Let op
            de verhouding tussen TDS-verlaging, kosten per liter en gemak.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Prijs</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">TDS-verlaging</th>
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
                    <td className="py-2.5 px-3 text-gray-700">{a.tds}</td>
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom osmose het sterkste alternatief is</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wil je de lage TDS van ZeroWater behouden zonder de dure patronen, dan is een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde-osmosesysteem</Link>{' '}
            de logische keuze. Het membraan houdt het grootste deel van de opgeloste stoffen tegen en
            levert het water continu uit een aparte kraan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              ['Vergelijkbaar lage TDS', 'Een RO-membraan houdt circa 95 tot 99 procent van opgeloste stoffen tegen.'],
              ['Lagere kosten per liter', 'Geen wekelijks uitgeputte patronen; osmosefilters gaan veel langer mee.'],
              ['Continu uit de kraan', 'Geen handmatig bijvullen en wachten; gefilterd water is er direct.'],
              ['Smaak naar wens', 'Met een remineralisatiestap voeg je mineralen toe voor een vollere, neutralere smaak.'],
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
            of vergelijk de{' '}
            <Link href="/beste-osmosefilter-2026" className="text-[#005F8A] underline">beste osmosefilters van 2026</Link>.
          </p>
        </section>

        <AffiliateCTA
          destination="countertopRo"
          campaign="omgekeerde-osmose"
          content="zerowater-alternatief-cta"
          label="Bekijk de Countertop RO (osmose zonder installatie)"
          title="Osmose zonder installatie?"
          sub="De Countertop RO is een plug-and-play osmose-apparaat zonder installatie bij onze partner PureAqua."
        />

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer blijf je bij ZeroWater?</h2>
          <div className="space-y-3">
            {[
              ['Je wilt geen installatie', 'Een kan werkt direct en verhuist mee - handig tijdelijk of in een huurwoning.'],
              ['Je gebruikt weinig water', 'Drink je maar af en toe gefilterd water, dan wegen de patroonkosten minder zwaar.'],
              ['Je wilt snel een lage TDS testen', 'Met de meegeleverde TDS-meter zie je direct het effect, zonder vaste opstelling.'],
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
            ZeroWater is sterk in TDS-verlaging, maar duur in gebruik door de snel uitgeputte patronen.
            Voor wie dagelijks gefilterd water met een lage TDS wil, biedt een{' '}
            <strong>omgekeerde-osmosesysteem</strong> hetzelfde resultaat, continu en goedkoper per liter.
            Gaat het je puur om smaak, dan is een gewone filterkan voldoende.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Verder vergelijken? Lees{' '}
            <Link href="/kennisbank/filterkan-vs-osmose" className="text-[#005F8A] underline">filterkan vs osmose</Link>, bekijk de{' '}
            <Link href="/osmose-filter" className="text-[#005F8A] underline">osmosefilters</Link>{' '}
            of lees of{' '}
            <Link href="/kennisbank/osmose-water-drinken" className="text-[#005F8A] underline">osmose water gezond is om te drinken</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over ZeroWater alternatieven</h2>
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
              ['/omgekeerde-osmose', 'Omgekeerde osmose', 'Werking, kosten, voordelen en nadelen'],
              ['/kennisbank/tds-meter-gebruiken', 'TDS-meter gebruiken', 'Zo controleer je de filterwerking'],
              ['/filterkan', 'Filterkan', 'Hoe filterkannen werken en wat ze kosten'],
              ['/beste-osmosefilter-2026', 'Beste osmosefilter 2026', 'Koopgids met shortlist en criteria'],
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
