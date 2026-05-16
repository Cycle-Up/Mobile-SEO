import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Afvalwater osmosefilter: verhouding, besparing en waterbesparende systemen',
  description:
    'Een osmosefilter produceert 2-4 liter afvalwater per liter drinkwater. Moderne tankloze systemen met permeaatpomp halen een verhouding van 1:1. Lees hoe u afvalwater beperkt en hergebruikt.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/afvalwater' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoeveel afvalwater produceert een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een standaard osmosefilter met druktank produceert 3 tot 4 liter afvalwater per liter drinkwater (verhouding 3:1 tot 4:1). Systemen met een boosterpump verbeteren dit naar 2:1. Moderne tankloze systemen met permeaatpomp halen een verhouding van 1:1 tot 1,5:1, wat neerkomt op slechts 1 tot 1,5 liter afvalwater per liter drinkwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe verbeter ik de afvalwaterverhouding van mijn osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meest effectieve verbetering is een permeaatpomp of boosterpump. Een boosterpump verhoogt de waterdruk en verbetert de verhouding van 4:1 naar 2:1. Een permeaatpomp is een drukgestuurd systeem zonder elektriciteitsverbruik dat een verhouding van 1:1 haalt. Hogere watertemperatuur (zomerwater) en een lage TDS van het invoerwater dragen ook bij aan een gunstigere verhouding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik het afvalwater van mijn osmosefilter hergebruiken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Afvalwater (concentraat) van een osmosefilter is niet gevaarlijk maar heeft een hogere TDS dan gewoon leidingwater. Geschikte toepassingen zijn: tuin begieten (niet voor kalkgevoelige planten), schoonmaken, wc doorspoelen. Minder geschikt zijn gevoelige kamerplanten en wasmachine (hogere TDS kan invloed hebben op wasresultaat). Het water bevat de geconcentreerde stoffen die het membraan heeft tegengehouden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is een tankloze osmosefilter en hoe werkt die?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een tankloos osmosesysteem (on-demand RO) produceert water direct op aanvraag zonder een druktank op te slaan. De hoge productiesnelheid (400 GPD en hoger) maakt een opslagtank overbodig. Tankloze systemen hebben geen standby-verlies van water, een compacter design en bereiken verhoudingen van 1:1 of beter. De hogere aanschafprijs wordt deels gecompenseerd door lagere waterkosten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is afvalwater van een osmosefilter slecht voor het milieu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het afvalwater gaat via het riool naar de waterzuivering en bevat geen gevaarlijke stoffen, alleen geconcentreerd leidingwater. Bij een verhouding van 4:1 en 2 liter drinkwater per dag loost een huishouden 8 liter extra per dag. Ter vergelijking: een normale douche verbruikt 60 tot 80 liter. Op stadsniveau is de impact van huishoudelijke osmosesystemen verwaarloosbaar. Het bewustzijn over waterverbruik is desondanks waardevol.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen afvalwater van osmose en waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een waterontharder produceert regeneratiewater bij elke regeneratiebeurt, doorgaans 10 tot 30 liter per keer met een hoog zoutgehalte (natriumchloride). Bij 1 tot 2 regeneraties per week is dit vergelijkbaar met het afvalwater van een osmosefilter op weekbasis. Actief koolfilters produceren geen afvalwater. Osmose is in milieuperspectief vergelijkbaar met andere waterbehandelingssystemen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel kost het extra water van een osmosefilter op de waterrekening?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij een verhouding van 3:1 en een gemiddeld gebruik van 3 liter drinkwater per dag via de osmosefilter gaat er 9 liter als afvalwater weg. Op jaarbasis is dit circa 3.285 liter extra. Bij een gemiddeld watertarief van 1,50 tot 2,00 euro per kubieke meter kost dit minder dan 7 euro per jaar extra op de waterrekening. Met een waterbesparend systeem (1:1) daalt dit naar minder dan 2,50 euro per jaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom produceert een osmosefilter afvalwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het RO-membraan scheidt water in twee stromen: permeaat (gezuiverd drinkwater) en concentraat (afvalwater met alle tegengehouden stoffen). Het concentraat is nodig om het membraan continu te spoelen en accumulatie van kalk, nitraat, PFAS en zware metalen op het membraan te voorkomen. Zonder deze spoelstroom zou het membraan snel verstopt raken door scaling en de levensduur sterk verkorten.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Afvalwater osmosefilter: verhouding, besparing en waterbesparende systemen',
  description:
    'Een osmosefilter produceert 2-4 liter afvalwater per liter drinkwater. Moderne tankloze systemen met permeaatpomp halen een verhouding van 1:1.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/omgekeerde-osmose/afvalwater',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseAfvalwaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
              { '@type': 'ListItem', position: 3, name: 'Afvalwater osmosefilter', item: 'https://waterfilterplatform.nl/omgekeerde-osmose/afvalwater' },
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
          <span>Afvalwater osmosefilter</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Afvalwater osmosefilter: verhouding, besparing en waterbesparende systemen
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een osmosefilter produceert altijd afvalwater (concentraat) naast het gezuiverde drinkwater.
            Traditionele systemen verspillen 3&ndash;4 liter per liter drinkwater. Moderne waterbesparende
            technieken zoals de permeaatpomp en tankloze systemen reduceren dit naar 1:1.
          </p>
        </section>

        <QuickAnswer answer="Een standaard osmosefilter heeft een afvalwaterverhouding van 3:1 tot 4:1. Met een boosterpump verbetert dit naar 2:1. Tankloze systemen met permeaatpomp halen 1:1. Afvalwater is niet gevaarlijk en geschikt voor tuin en schoonmaken. Het extra waterverbruik kost minder dan 7 euro per jaar." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is afvalwater bij een osmosefilter?
        </h2>
        <p className="text-gray-700 mb-4">
          Bij <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> wordt
          water onder hoge druk door een semi-permeabel membraan geperst. Het membraan laat watermoleculen
          door maar houdt opgeloste stoffen tegen. Dit levert twee waterstromen op:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Permeaat (drinkwater):</strong> het gezuiverde water dat het membraan is gepasseerd.
            Bevat minder dan 5% van de oorspronkelijke opgeloste stoffen
          </li>
          <li>
            <strong>Concentraat (afvalwater):</strong> het water dat het membraan niet heeft gepasseerd.
            Bevat alle verwijderde stoffen in geconcentreerde vorm: kalk (calcium en magnesium),
            nitraat, PFAS, zware metalen en alle andere opgeloste verbindingen
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Het concentraat is <strong>niet gevaarlijk</strong> maar heeft een hogere TDS
          (Total Dissolved Solids) dan gewoon leidingwater. In de meeste gevallen gaat het
          rechtstreeks naar het riool, maar hergebruik is een duurzame alternatief.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Afvalwaterverhoudingen per systeemtype
        </h2>
        <p className="text-gray-700 mb-4">
          De verhouding afvalwater:drinkwater varieert sterk per type systeem en installatieparameters:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Systeemtype</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verhouding afval:drink</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Efficientie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Extra kosten/jaar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Standaard met druktank</td>
                <td className="border border-gray-300 px-3 py-2">3:1 tot 4:1</td>
                <td className="border border-gray-300 px-3 py-2">20&ndash;25%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;5&ndash;7</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Met boosterpump</td>
                <td className="border border-gray-300 px-3 py-2">2:1</td>
                <td className="border border-gray-300 px-3 py-2">33%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;3&ndash;4</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Met permeaatpomp</td>
                <td className="border border-gray-300 px-3 py-2">1:1 tot 1,5:1</td>
                <td className="border border-gray-300 px-3 py-2">40&ndash;50%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1,5&ndash;2,5</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Tankloos on-demand</td>
                <td className="border border-gray-300 px-3 py-2">1:1 of beter</td>
                <td className="border border-gray-300 px-3 py-2">50&ndash;75%</td>
                <td className="border border-gray-300 px-3 py-2">&lt;&euro;1,5</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Factoren die de verhouding beinvloeden
        </h2>
        <p className="text-gray-700 mb-4">
          De afvalwaterverhouding is niet alleen afhankelijk van het systeemtype. Vier operationele
          factoren hebben een directe invloed:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Waterdruk:</strong> hogere invoerdruk (ideaal 3,5&ndash;6 bar) verbetert de
            verhouding significant. Bij lage druk (onder 2,5 bar) loopt de verhouding op tot 5:1 of meer.
            Een boosterpump lost dit op
          </li>
          <li>
            <strong>Watertemperatuur:</strong> koud water (winterwater rond 8&ndash;10 graden) verlaagt
            de membraanpermeabiliteit en verslechtert de verhouding. Warmer water (18&ndash;20 graden)
            geeft een gunstiger resultaat
          </li>
          <li>
            <strong>TDS van het invoerwater:</strong> hoge zoutconcentraties in het invoerwater verhogen
            de osmotische tegendruk en verlagen het permeaatrendement, wat meer afvalwater betekent
          </li>
          <li>
            <strong>Membraankwaliteit en ouderdom:</strong> een verouderd of vervuild membraan heeft
            een lagere doorlatendheid en verslechtert de verhouding. Regelmatig{' '}
            <Link href="/omgekeerde-osmose/membraan-vervangen" className="text-[#005F8A] underline">membraanvervanging</Link>{' '}
            (elke 2&ndash;3 jaar) is essentieel
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterbesparende technieken in detail
        </h2>
        <p className="text-gray-700 mb-4">
          Er zijn vier hoofdtechnieken om de afvalwaterverhouding te verbeteren:
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-4 mb-2">
          1. Boosterpump (elektrische drukverhoger)
        </h3>
        <p className="text-gray-700 mb-4">
          Een boosterpump verhoogt de invoerdruk tot het optimale werkingsbereik van het membraan.
          Dit verbetert de verhouding van gemiddeld 4:1 naar 2:1 en verhoogt tegelijkertijd de
          productiesnelheid. De pomp verbruikt elektriciteit (typisch 12&ndash;24W) maar de
          besparingen op water zijn aanzienlijk groter dan de extra energiekosten.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-4 mb-2">
          2. Permeaatpomp (drukgestuurd, geen elektriciteit)
        </h3>
        <p className="text-gray-700 mb-4">
          De permeaatpomp is een mechanisch systeem dat de druk van het afvalwater gebruikt om de
          druk op het permeaat te verlagen, waardoor het membraan efficienter werkt. Het systeem
          verbruikt geen elektriciteit en haalt verhoudingen van 1:1 bij normale leidingdruk.
          De permeaatpomp is de meest kosten- en energieefficiënte upgrade voor bestaande systemen.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-4 mb-2">
          3. Recycle-klep (gedeeltelijke recirculatie)
        </h3>
        <p className="text-gray-700 mb-4">
          Een recycle-klep stuurt een deel van het concentraat terug naar de invoerkant van het membraan.
          Dit verbetert de verhouding maar verhoogt ook de TDS van het invoerwater en daarmee het risico
          op <strong>scaling</strong> (kalkafzetting op het membraan). Alleen aanbevolen bij
          waterontharder-voorbehandeling of laag TDS-invoerwater.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-4 mb-2">
          4. Tankloze systemen (on-demand RO)
        </h3>
        <p className="text-gray-700 mb-6">
          Tankloze osmosesystemen produceren water direct bij aanvraag zonder een opslagtank. De hogere
          membraancapaciteit (400 GPD en meer) maakt continue opslag overbodig. Voordelen: geen
          standby-verlies, betere verhouding, compacter ontwerp. Nadeel: hogere aanschafprijs
          (&euro;400&ndash;800 versus &euro;150&ndash;300 voor standaardsystemen).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Afvalwater hergebruiken: praktische toepassingen
        </h2>
        <p className="text-gray-700 mb-4">
          Het concentraat van een osmosefilter heeft doorgaans een TDS van 400&ndash;1.200 mg/L
          afhankelijk van het invoerwater en de verhouding. Dit is vergelijkbaar met licht mineraalwater
          en absoluut niet schadelijk voor de meeste toepassingen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Tuin begieten:</strong> geschikt voor de meeste tuinplanten, groenten en gras.
            Niet aanbevolen voor calciumgevoelige planten zoals azalea en rhododendron bij harde
            waterbronnen
          </li>
          <li>
            <strong>Schoonmaken:</strong> vloeren, buitenterrassen, auto wassen (niet als eindspoel,
            want kalkvlekken kunnen optreden)
          </li>
          <li>
            <strong>Wc doorspoelen:</strong> via een opvangvat aansluiten op de stortbak. Dit vereist
            extra leidingwerk maar is technisch eenvoudig
          </li>
          <li>
            <strong>Wasmachine:</strong> technisch mogelijk maar niet aanbevolen vanwege de hogere
            TDS die invloed kan hebben op wasprestaties en de machine
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijking met andere waterbehandelingssystemen
        </h2>
        <p className="text-gray-700 mb-6">
          In het perspectief van waterverbruik is een osmosefilter vergelijkbaar met andere
          waterbehandelingssystemen. Een{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder</Link>{' '}
          produceert 10&ndash;30 liter zout regeneratiewater per regeneratiebeurt, bij frequentie
          van 1&ndash;2 keer per week. Actief koolfilters produceren geen afvalwater maar behandelen
          ook geen opgeloste ionen zoals nitraat, PFAS of zware metalen. Op jaarbasis is het
          waterverbruik van een osmosefilter in dezelfde orde van grootte als een waterontharder.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over afvalwater van osmosesystemen
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
          <Link href="/omgekeerde-osmose/membraan-vervangen" className="text-[#005F8A] underline">membraan vervangen</Link>,{' '}
          <Link href="/omgekeerde-osmose/installatie" className="text-[#005F8A] underline">osmosefilter installatie</Link>,{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder vergelijken</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>
      </main>
    </>
  );
}
