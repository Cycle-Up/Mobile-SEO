import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kosten omgekeerde osmose: aanschaf, filters en totale eigendomskosten',
  description:
    'Een osmosefilter kost 250-800 euro aanschaf. De totale eigendomskosten (TCO) over 5 jaar zijn 600-1.500 euro. Vergelijking met flessenwater (500-1.500 euro/jaar) en filterkan.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/kosten' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoeveel kost een osmosefilter per jaar aan filters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De jaarlijkse filterkosten van een osmosefilter bedragen 65-180 euro, afhankelijk van het systeem en waterverbruik. Dit bestaat uit: sedimentfilter (1x per jaar, 10-25 euro), koolstofprefilter (1x per jaar, 15-35 euro), RO-membraan (1x per 2-3 jaar, 30-80 euro, dus 10-40 euro per jaar) en nafilter (1x per jaar, 10-20 euro). Een vijf-traps systeem heeft soms een extra nafilter die 10-20 euro per jaar kost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer moet ik de filters van mijn osmosefilter vervangen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sedimentfilter en koolstofprefilter: elke 6-12 maanden, afhankelijk van uw waterkwaliteit. Het RO-membraan: elke 2-3 jaar bij normaal gebruik. De nafilter (postfilter): jaarlijks. Vervangingstermijnen zijn richtlijnen; bij hoge TDS-waarden, hard water of hoog verbruik slijten filters sneller. Een TDS-meter helpt u de membraanprestaties monitoren: als de TDS van gefilterd water stijgt boven 10% van het inkomende water, is membraanvervanging aan te raden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is er subsidie beschikbaar voor een osmosefilter in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er is geen specifieke rijkssubsidie voor osmosefilters in Nederland. Sommige gemeenten bieden een duurzaamheidslening of energieprestatieverbetering-lening aan, maar osmosefilters vallen daar doorgaans niet onder. Eigenaren van rijksmonumenten kunnen via de WKPB-aftrekregeling kosten voor binneninstallaties soms fiscaal verrekenen. Controleer bij uw gemeente of er lokale regelingen zijn voor waterbesparende of waterzuiverende maatregelen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel verdient een osmosefilter zichzelf terug ten opzichte van flessenwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een gezin van drie personen dat 2 liter per persoon per dag aan flessenwater koopt (gemiddeld 0,50 euro per liter), zijn de jaarlijkse flessenwaterkosten circa 1.095 euro. Een budget osmosefilter kost inclusief installatie en jaarlijkse filters circa 250-300 euro in het eerste jaar en 65-120 euro per jaar daarna. De terugverdientijd ligt daarmee op 6-12 maanden. Ten opzichte van duurdere merkwater (1 euro per liter) is de terugverdientijd nog korter: 3-6 maanden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel stroom verbruikt een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standaard onder-aanrecht osmosefilters werken op waterleidingdruk en verbruiken geen elektriciteit. Ze hebben geen pomp nodig als de waterdruk minimaal 3 bar is. Systemen met een boosterpomp (voor lage waterdruk of hogere recovery) verbruiken 25-50 watt tijdens gebruik, maar draaien slechts enkele uren per dag. De jaarlijkse elektriciteitskosten van een pompgestuurd systeem zijn daarmee slechts 5-15 euro per jaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een osmosefilter laten installeren door een loodgieter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Installatie door een loodgieter kost doorgaans 100-250 euro, afhankelijk van de complexiteit van de aansluiting en regio. Een standaardinstallatie onder het aanrecht (aansluiting op koudwaterleiding, afvoer op sifon, boorgat voor extra kraan) duurt 1-2 uur. Bij aankoop via sommige webwinkels is installatieservice inbegrepen voor 0-50 euro. Zelfinstallatie is goed haalbaar met de bijgeleverde handleiding en kost circa 30-60 minuten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil in kosten tussen budget- en premium osmosesystemen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budgetsystemen (250-400 euro) zoals IcePure en Aquatrio leveren functioneel gefilterd water maar hebben soms minder duurzame onderdelen en hogere afvalwaterverhouding (4:1 of slechter). Mid-range systemen (400-700 euro) zoals Aqua Elegant en WaterDrop bieden betere recovery (2:1 of 3:1), stille pomp en langere garantie. Premium systemen (700-1.500 euro) zoals PureAqua 4-in-1 of Pentair omvatten een geintegreerde kokend- of koud-warm-kraanoplossing. Op vijfjaarsbasis zijn de totale eigendomskosten van budget en mid-range systemen echter vergelijkbaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel extra waterkosten maakt een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oudere osmosefilters hebben een recovery van 20-25%: voor 1 liter gefilterd water gaat 3-4 liter naar het afvoer. Moderne systemen met permeaatpomp of hoge-recovery-membraan bereiken 50-75% recovery. Bij een gezin dat 3 liter per dag drinkt en een systeem met 25% recovery gebruikt, is het extra waterverbruik circa 9 liter per dag, ofwel 3.285 liter per jaar. Bij een watertarief van 2 euro per m3 zijn de extra waterkosten circa 6,50 euro per jaar. Met een modern hoge-recovery-systeem daalt dit naar 2-3 euro per jaar.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Kosten omgekeerde osmose: aanschaf, filters en totale eigendomskosten',
  description:
    'Een osmosefilter kost 250-800 euro aanschaf. TCO over 5 jaar: 600-1.500 euro. Vergelijking met flessenwater en filterkan.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/omgekeerde-osmose/kosten',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseKostenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
              { '@type': 'ListItem', position: 3, name: 'Kosten osmosefilter', item: 'https://waterfilterplatform.nl/omgekeerde-osmose/kosten' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/omgekeerde-osmose" className="hover:underline">Omgekeerde osmose</Link> &rsaquo;{' '}
          <span>Kosten osmosefilter</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Kosten omgekeerde osmose: aanschaf, filters en totale eigendomskosten
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een osmosefilter kost 250&ndash;800 euro bij aanschaf. De totale eigendomskosten (TCO)
            over vijf jaar liggen op 600&ndash;1.500 euro. Ter vergelijking: een gezin dat
            flessenwater koopt geeft 2.700&ndash;13.500 euro per vijf jaar uit. Wat kost een
            osmosefilter werkelijk, en wanneer verdient het zichzelf terug?
          </p>
        </section>

        <QuickAnswer answer="Een osmosefilter kost 250-800 euro aanschaf plus 65-180 euro per jaar aan filters. De totale eigendomskosten over 5 jaar bedragen 600-1.500 euro. Een gezin dat flessenwater koopt betaalt 2.700-13.500 euro in diezelfde periode. De terugverdientijd ten opzichte van flessenwater is gemiddeld 6-18 maanden." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Aanschafkosten: budget, mid-range en premium
        </h2>
        <p className="text-gray-700 mb-4">
          De aanschafprijs van een{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde-osmosefilter</Link>{' '}
          varieert sterk naar kwaliteit, capaciteit en extra functies:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Categorie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Voorbeelden</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Budget</td>
                <td className="border border-gray-300 px-3 py-2">&euro;250&ndash;400</td>
                <td className="border border-gray-300 px-3 py-2">IcePure, Aquatrio</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Mid-range</td>
                <td className="border border-gray-300 px-3 py-2">&euro;400&ndash;700</td>
                <td className="border border-gray-300 px-3 py-2">Aqua Elegant, WaterDrop</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Premium</td>
                <td className="border border-gray-300 px-3 py-2">&euro;700&ndash;1.500</td>
                <td className="border border-gray-300 px-3 py-2">PureAqua 4-in-1, Everpure, Pentair</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-4">
          <strong>Budgetsystemen</strong> (250&ndash;400 euro) leveren functioneel gezuiverd water
          met 4&ndash;5 filterstadia. Ze hebben vaak een hogere afvalwaterverhouding (3:1 tot 4:1)
          en minder verfijnde onderdelen. Geschikt voor een eenpersoonshuishouden of voor wie
          puur de waterkwaliteit wil verbeteren tegen minimale kosten.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Mid-range systemen</strong> (400&ndash;700 euro) bieden een betere recovery
          (2:1 tot 3:1), stillere pompen, digitale indicatoren voor filtervervanging en betere
          garantievoorwaarden. Merken als WaterDrop en Aqua Elegant hebben compactere ontwerpen
          die minder kast- en sleufruimte innemen.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Premiumsystemen</strong> (700&ndash;1.500 euro) combineren osmosezuivering met
          extra functies: een geintegreerde 4-in-1 kraan die zowel kokend, koud, warm als gefilterd
          water levert (PureAqua 4-in-1), of professionele merken als Everpure en Pentair die
          worden gebruikt in de horeca en door waterexperts.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Installatiekosten
        </h2>
        <p className="text-gray-700 mb-4">
          De meeste onder-aanrecht osmosefilters worden geleverd met een complete installatiekit en
          een stapsgewijze handleiding. Installatie bestaat uit het aansluiten op de koudwaterleiding
          via een zadel- of T-stuk, het doorboren van het aanrecht voor een aparte kraan en het
          aansluiten van de afvoerslang op de sifon. Dit kost gemiddeld 30&ndash;60 minuten.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Zelfinstallatie:</strong> gratis, alleen gereedschapskosten</li>
          <li><strong>Installateur / loodgieter:</strong> 100&ndash;250 euro voor 1&ndash;2 uur werk</li>
          <li><strong>Inclusief service bij aankoop:</strong> sommige leveranciers bieden installatie aan voor 0&ndash;50 euro als u het systeem bij hen koopt</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Jaarlijkse filterkosten
        </h2>
        <p className="text-gray-700 mb-4">
          Een osmosefilter bestaat uit meerdere filterstadia die elk een eigen vervangingsinterval
          hebben. De onderstaande tabel toont de gemiddelde kosten:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filter</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Interval</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kosten</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Per jaar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Sedimentfilter</td>
                <td className="border border-gray-300 px-3 py-2">1x per jaar</td>
                <td className="border border-gray-300 px-3 py-2">&euro;10&ndash;25</td>
                <td className="border border-gray-300 px-3 py-2">&euro;10&ndash;25</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Koolstofprefilter</td>
                <td className="border border-gray-300 px-3 py-2">1x per jaar</td>
                <td className="border border-gray-300 px-3 py-2">&euro;15&ndash;35</td>
                <td className="border border-gray-300 px-3 py-2">&euro;15&ndash;35</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">RO-membraan</td>
                <td className="border border-gray-300 px-3 py-2">1x per 2&ndash;3 jaar</td>
                <td className="border border-gray-300 px-3 py-2">&euro;30&ndash;80</td>
                <td className="border border-gray-300 px-3 py-2">&euro;10&ndash;40</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Nafilter (postfilter)</td>
                <td className="border border-gray-300 px-3 py-2">1x per jaar</td>
                <td className="border border-gray-300 px-3 py-2">&euro;10&ndash;20</td>
                <td className="border border-gray-300 px-3 py-2">&euro;10&ndash;20</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium text-[#003F5C]">Totaal</td>
                <td className="border border-gray-300 px-3 py-2"></td>
                <td className="border border-gray-300 px-3 py-2"></td>
                <td className="border border-gray-300 px-3 py-2 font-bold">&euro;65&ndash;180</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Goedkopere generieke filters (A4Best, APEC, IcePure vervangers) kunnen de filterkosten
          halveren, maar controleer altijd of ze compatibel zijn met uw systeem en voldoen aan
          NSF/ANSI certificering. Zie ook ons artikel over{' '}
          <Link href="/omgekeerde-osmose/onderhoud" className="text-[#005F8A] underline">osmosefilter onderhoud en filtervervanging</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Extra waterverbruik door afvalwater
        </h2>
        <p className="text-gray-700 mb-4">
          Osmosefilters produceren naast gefilterd water ook concentraat (afvalwater). De
          verhouding hangt af van de recovery van het systeem:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>25% recovery (oud systeem):</strong> voor 1 liter gefilterd water gaat
            3 liter naar het afvoer. Bij 3 liter per dag is het extra verbruik 9 liter totaal,
            ofwel circa &euro;6,50 per jaar bij een watertarief van &euro;2/m3.
          </li>
          <li>
            <strong>50% recovery (modern systeem):</strong> voor 1 liter gefilterd water
            gaat 1 liter naar het afvoer. Extra kosten: circa &euro;3,30 per jaar.
          </li>
          <li>
            <strong>75% recovery (hoge-efficiency systeem):</strong> minimaal afvalwater;
            extra kosten minder dan &euro;2 per jaar.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Het afvalwater is niet gevaarlijk en wordt via de sifon afgevoerd. In droge periodes kunt
          u het afvalwater gebruiken voor het besproeien van planten of spoelen van het toilet.
          Meer details in ons artikel over{' '}
          <Link href="/omgekeerde-osmose/rendement" className="text-[#005F8A] underline">osmosefilter rendement en efficiency</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Totale eigendomskosten over 5 jaar (TCO)
        </h2>
        <p className="text-gray-700 mb-4">
          De totale eigendomskosten over vijf jaar geven een eerlijk beeld van de werkelijke
          uitgaven per wateroplossing:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Oplossing</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aanschaf</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Installatie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filters 5 jaar</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">TCO 5 jaar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Budget osmose</td>
                <td className="border border-gray-300 px-3 py-2">&euro;350</td>
                <td className="border border-gray-300 px-3 py-2">&euro;150</td>
                <td className="border border-gray-300 px-3 py-2">&euro;400</td>
                <td className="border border-gray-300 px-3 py-2 font-bold">&euro;900</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Mid-range osmose</td>
                <td className="border border-gray-300 px-3 py-2">&euro;550</td>
                <td className="border border-gray-300 px-3 py-2">&euro;150</td>
                <td className="border border-gray-300 px-3 py-2">&euro;500</td>
                <td className="border border-gray-300 px-3 py-2 font-bold">&euro;1.200</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">4-in-1 kraan (PureAqua)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1.200</td>
                <td className="border border-gray-300 px-3 py-2">&euro;200</td>
                <td className="border border-gray-300 px-3 py-2">&euro;550</td>
                <td className="border border-gray-300 px-3 py-2 font-bold">&euro;1.950</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Filterkan (gezin 3 pers.)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;50</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0</td>
                <td className="border border-gray-300 px-3 py-2">&euro;400</td>
                <td className="border border-gray-300 px-3 py-2 font-bold">&euro;450</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Flessenwater (3 pers., 2L/dag)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0</td>
                <td className="border border-gray-300 px-3 py-2">&euro;13.500</td>
                <td className="border border-gray-300 px-3 py-2 font-bold text-red-600">&euro;13.500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-4">
          De flessenwaterberekening gaat uit van 2 liter per persoon per dag a &euro;0,50 per liter
          voor een gezin van drie personen: 3 &times; 365 &times; 2 &times; 0,50 = &euro;1.095 per jaar,
          ofwel &euro;5.475 over vijf jaar. Bij duurdere merkwater (&euro;1,00/L) loopt dit op tot
          &euro;10.950 over vijf jaar &mdash; bijna 9 keer zoveel als een mid-range osmosesysteem.
        </p>
        <p className="text-gray-700 mb-6">
          De filterkan is goedkoop maar biedt aanzienlijk minder filterprestaties dan een
          osmosefilter. Zie ons artikel over{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter kopen</Link>{' '}
          voor een concreet aankoopadvies op maat.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Subsidies en fiscale regelingen
        </h2>
        <p className="text-gray-700 mb-4">
          Er bestaat geen specifieke rijkssubsidie voor osmosefilters in Nederland. Mogelijke
          alternatieven:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Gemeentelijke duurzaamheidslening:</strong> sommige gemeenten bieden renteloze
            of laagrentende leningen aan voor woningverbeteringen. Osmosefilters vallen hier niet
            standaard onder, maar informeer bij uw gemeente.
          </li>
          <li>
            <strong>WKPB-aftrek voor monumenten:</strong> eigenaren van rijksmonumenten kunnen
            via de Wet Kosten Particuliere Buitenrenovatie soms kosten voor binneninstallaties
            fiscaal verrekenen. Raadpleeg uw belastingadviseur.
          </li>
          <li>
            <strong>Energiebespaarfonds:</strong> biedt leningen voor energiebesparende maatregelen,
            maar osmosefilters zijn hiervoor doorgaans niet kwalificerend.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Als u in een gemeente woont met verhoogde PFAS-concentraties of als uw woning loden
          leidingen heeft, kunnen de gezondheidskosten van ongefilterd water op lange termijn
          aanzienlijk hoger uitvallen dan de aanschafkosten van een osmosefilter. Zie ook ons
          artikel over een{' '}
          <Link href="/kokend-water-kraan/met-filter" className="text-[#005F8A] underline">kokend-waterkraan met filter</Link>{' '}
          als premium alternatief.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Terugverdientijd ten opzichte van flessenwater
        </h2>
        <p className="text-gray-700 mb-4">
          De terugverdientijd van een osmosefilter hangt af van uw huidige wateruitgaven en
          gezinsgrootte:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Eenpersoonshuishouden</strong> dat 2 L/dag koopt a &euro;0,50/L (&euro;365/jaar):
            terugverdientijd budget osmose (incl. installatie, circa &euro;400 totaal jaar 1): circa 13 maanden.
          </li>
          <li>
            <strong>Gezin van drie personen</strong> (&euro;1.095/jaar flessenwater):
            terugverdientijd budget osmose (&euro;500 totaal jaar 1): circa 6 maanden.
          </li>
          <li>
            <strong>Gezin van vier personen</strong> dat duurdere flessenwater koopt (&euro;1/L):
            terugverdientijd minder dan 4 maanden.
          </li>
        </ul>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over de kosten van omgekeerde osmose
          </h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter kopen</Link>,{' '}
          <Link href="/omgekeerde-osmose/rendement" className="text-[#005F8A] underline">rendement en efficiency</Link> en{' '}
          <Link href="/kokend-water-kraan/met-filter" className="text-[#005F8A] underline">kokend-waterkraan met filter</Link>.
        </p>
      </main>
    </>
  );
}
