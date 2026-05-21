import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosewater voor bier brouwen: voordelen, nadelen en instellen',
  description: 'Osmosewater is de schoonste basis voor brouwwater: TDS &lt;10 mg/L, geen ongewenste mineralen. Leer hoe je osmosewater instelt voor elk bierstijl met.',
  alternates: { canonical: 'https://waterfilterplatform.nl/brouwwater/osmose' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is osmosewater direct geschikt voor bier brouwen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, osmosewater is te puur om direct te brouwen. Met een TDS van 5-15 mg/L bevat het vrijwel geen mineralen. Calcium is onmisbaar voor enzymactiviteit, pH-verlaging en gistklaring. Magnesium ondersteunt gistmetabolisme. Zonder toegevoegde mineralen krijg je slechte enzymwerking, afwijkende maisch-pH en zwakke vergisting. Osmosewater is de perfecte startbasis, maar remineralisatie is verplicht voor elk bierstijl.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel produceert een osmosefilter water voor een brouwsessie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een standaard osmosefilter van 50 GPD (gallon per dag) produceert circa 190 liter per dag, oftewel circa 8 liter per uur. Voor een 20-liter batch heb je 25-30 liter osmosewater nodig (inclusief verlies in spoeling en bezinksel). Bij 50 GPD duurt dat circa 3-4 uur. Een 100 GPD systeem halveert die tijd. De meeste thuisbrouwers vullen hun brouwwater de avond voor de brouwsessie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de TDS van osmosewater en is dat te laag voor bier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater heeft een TDS van 5-15 mg/L, afhankelijk van membraankwaliteit en de hardheid van het bronwater. Dit is inderdaad te laag voor direct brouwen: bier heeft doorgaans een brouwwater-TDS van 50-400 mg/L nodig. Maar dit is juist het voordeel: je begint met een schone lei en bouwt het TDS-profiel zelf op met exacte mineraaltoevoegingen. Resultaat: volledige controle over elke ion in jouw brouwwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik osmosewater aanpassen voor elke bierstijl?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Elke bierstijl heeft een ander optimaal waterprofiel. Een American IPA vraagt hoog sulfaat (150-200 mg/L) voor bitterheid en hoparomen. Een Helles Lager wil laag mineraalgehalte met iets meer chloride voor rondte. Een Irish Stout profiteert van meer bicarbonaat (100-150 mg/L) om de maisch-pH op te trekken bij gebruik van donkere mouten. Apps zoals Brewfather en Bru\'n Water berekenen automatisch welke mineralen je voor jouw recept moet toevoegen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik mijn drinkwaterosmosefilter ook gebruiken voor brouwen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, dat kan. Een standaard onder-aanrecht osmosefilter (50-100 GPD) is geschikt voor thuisbrouwen, mits je genoeg capaciteit hebt. Controleer wel of het filter een aparte uitgang heeft voor het osmosewater (niet via de drinkwaterleiding met remineralisatiefilter). De meeste systemen hebben een aparte kraan voor puur osmosewater. Sluit hier een tuinslang of slang naar een brouwwaterreservoir op aan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een osmosefilter voor thuisbierbrouwen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een eenvoudig 50 GPD osmosefilter kost 80-150 euro. Een kwaliteitsvoller 100 GPD systeem met betere membraankwaliteit kost 150-300 euro. Voor thuisbrouwen is 50 GPD doorgaans voldoende. Jaarlijkse onderhoudskosten: pre-filters vervangen elke 6-12 maanden (15-30 euro), membraan elke 2-3 jaar (30-60 euro). De kosten per liter osmosewater bedragen circa 1-3 eurocent, exclusief aanschaf.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe bewaar ik osmosewater voor mijn volgende brouwsessie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater is vrijwel mineraalvrij en absorbeert CO2 uit de lucht, waardoor de pH licht daalt. Bewaar het in een afgesloten voedselveilige jerrycan of vat van HDPE-kunststof. In de koelkast houdbaar tot 2 weken; bij kamertemperatuur 3-5 dagen voor microbiologische veiligheid. Gebruik geen metalen vaten (osmosewater is licht corrosiever door het lage mineraalgehalte). Grote brouwers gebruiken een 30-60 liter kunststof brouwvat als opslagreservoir.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosewater voor bier brouwen: voordelen, nadelen en instellen',
  description: 'Osmosewater is de schoonste basis voor brouwwater: TDS minder dan 10 mg/L, geen ongewenste mineralen. Leer hoe je osmosewater instelt voor elk bierstijl met.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/brouwwater/osmose',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function BrouwwaterOsmosePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Brouwwater', item: 'https://waterfilterplatform.nl/brouwwater' },
              { '@type': 'ListItem', position: 3, name: 'Osmosewater voor brouwen', item: 'https://waterfilterplatform.nl/brouwwater/osmose' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/brouwwater" className="hover:underline">Brouwwater</Link> &rsaquo;{' '}
          <span>Osmosewater voor brouwen</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Osmosewater voor bier brouwen: voordelen, nadelen en instellen
          </h1>
          <p className="text-[#005F8A] text-lg">
            Osmosewater biedt de schoonste basis voor brouwwater. TDS van 5-15 mg/L betekent
            een volledig blanco startpunt voor elk bierstijl — maar remineralisatie is verplicht.
          </p>
        </div>

        <QuickAnswer answer="Osmosewater (TDS 5-15 mg/L) is de ideale brouwwaterbasis: geen ongewenste mineralen, volledige controle over het profiel. Nadeel: te puur voor direct gebruik. Voeg calcium, sulfaat en chloride toe per bierstijl. Een 50 GPD osmosefilter produceert 25-30 liter voor een 20-liter batch in 3-4 uur." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom osmose de ideale brouwwaterbasis is
        </h2>
        <p className="text-gray-700 mb-4">
          Bij het brouwen van bier wil je volledige controle over de mineraalsamenstelling van je water.
          Kraanwater bevat al mineralen in onbekende of wisselende hoeveelheden.{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">Omgekeerde osmose</Link>{' '}
          verwijdert 95-99% van alle opgeloste stoffen, waardoor je een tabula rasa krijgt.
        </p>
        <p className="text-gray-700 mb-4">
          Vanuit dit schone startpunt kun je elk historisch brouwwaterprofiel nabootsen:
          het sulfaatrijke Burton-on-Trent water voor een traditionele IPA, het mineraalarme Pilsner-water
          voor een zachte lager, of het bicarbonaat-rijke Dublin-water voor een stout.
          Consistentie tussen brouwsessies is gegarandeerd.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          TDS en pH van osmosewater
        </h2>
        <p className="text-gray-700 mb-4">
          De twee basisparameters van osmosewater die relevant zijn voor brouwen:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <p className="font-semibold text-[#003F5C] mb-1">TDS: 5-15 mg/L</p>
            <p className="text-gray-700 text-sm">
              Afhankelijk van membraankwaliteit en hardheid van het bronwater. Hoe harder het bronwater,
              hoe hoger de TDS van het product — maar altijd ver onder 20 mg/L bij een goed membraan.
            </p>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <p className="font-semibold text-[#003F5C] mb-1">pH: 6,0-7,0</p>
            <p className="text-gray-700 text-sm">
              Osmosewater absorbeert CO2 uit de lucht, wat de pH licht verlaagt. Dit is een prima
              startpunt voor brouwen; de maisch-pH wordt toch bijgestuurd met mineralen en zuren.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijking: osmosewater vs kraanwater als brouwbasis
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Parameter</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Osmosewater</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Zacht kraanwater</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Hard kraanwater</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">TDS (mg/L)</td>
                <td className="border border-gray-300 px-3 py-2">5-15</td>
                <td className="border border-gray-300 px-3 py-2">100-200</td>
                <td className="border border-gray-300 px-3 py-2">300-600</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Calcium (mg/L)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;5</td>
                <td className="border border-gray-300 px-3 py-2">20-60</td>
                <td className="border border-gray-300 px-3 py-2">80-150</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Bicarbonaat (mg/L)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;5</td>
                <td className="border border-gray-300 px-3 py-2">50-150</td>
                <td className="border border-gray-300 px-3 py-2">150-350</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Sulfaat (mg/L)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;3</td>
                <td className="border border-gray-300 px-3 py-2">20-60</td>
                <td className="border border-gray-300 px-3 py-2">50-150</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Controle over profiel</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Volledig</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">Beperkt</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700 font-medium">Moeilijk</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Installatie van een osmosefilter voor thuisbrouwen
        </h2>
        <p className="text-gray-700 mb-4">
          Voor de meeste thuisbrouwers (batch-grootte 15-25 liter) is een 50-100 GPD osmosefilter voldoende.
          Hier is wat je nodig hebt:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Osmosefilter (50-100 GPD):</strong> aangesloten op de koudwaterkraan.
            De meeste onder-aanrecht systemen bevatten een pre-sedimentfilter, koolstoffilter en RO-membraan
          </li>
          <li>
            <strong>Brouwwaterreservoir:</strong> een levensmiddelenveilig HDPE-vat van 25-30 liter voor opslag
            van het osmosewater. Vul dit de avond voor de brouwsessie
          </li>
          <li>
            <strong>TDS-meter:</strong> controleer de TDS van het geproduceerde water (streefwaarde: onder 15 mg/L).
            Een TDS boven 30 mg/L wijst op een versleten membraan
          </li>
          <li>
            <strong>pH-meter:</strong> voor controle van de maisch-pH na mineraaltoevoeging (doel: 5,2-5,5)
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoeveel osmosewater per brouwsessie?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor een typische 20-liter eindvolume batch heb je meer dan 20 liter brouwwater nodig:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Maischwater: circa 15-18 liter (afhankelijk van graan-waterverhouding)</li>
          <li>Spoelwater: circa 10-12 liter</li>
          <li>Verlies door verdamping, bezinksel en drab: circa 3-5 liter</li>
          <li><strong>Totaal: 25-30 liter osmosewater per 20-liter batch</strong></li>
        </ul>
        <p className="text-gray-700 mb-6">
          Een 50 GPD filter produceert circa 190 liter per dag ofwel 8 liter per uur.
          Voor 25-30 liter plan je 3-4 uur productijtijd in.
          Vul het reservoir de avond vooraf voor een stressvrije brouwsessie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Onderhoud van het osmosefilter bij brouwen
        </h2>
        <p className="text-gray-700 mb-4">
          Bij intensief gebruik (meerdere brouwsessies per maand) is regelmatig onderhoud belangrijk:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Pre-filters (sediment en koolstof):</strong> vervang elke 6-12 maanden.
            Vervuilde pre-filters reduceren de levensduur van het membraan drastisch
          </li>
          <li>
            <strong>RO-membraan:</strong> vervang elke 2-3 jaar, of eerder als de TDS van het product stijgt
            boven 30 mg/L (controle met TDS-meter)
          </li>
          <li>
            <strong>Opslagvat:</strong> reinig het brouwwaterreservoir na elke brouwsessie met warm water
            en een starsan-oplossing om microbiologische groei te voorkomen
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Meer over remineralisatie na het osmosefilter lees je in onze gids over{' '}
          <Link href="/brouwwater/remineraliseren" className="text-[#005F8A] underline">brouwwater remineraliseren</Link>.
          Voor het optimale TDS-doel per bierstijl zie{' '}
          <Link href="/brouwwater/tds-profiel" className="text-[#005F8A] underline">TDS-profiel brouwwater</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose techniek</h3>
              <p className="text-sm text-gray-600">Hoe werkt omgekeerde osmose en wat verwijdert het precies uit water?</p>
            </Link>
            <Link href="/brouwwater/remineraliseren" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Brouwwater remineraliseren</h3>
              <p className="text-sm text-gray-600">Welke mineralen voegt u toe aan osmosewater voor de perfecte bierbasis?</p>
            </Link>
            <Link href="/brouwwater/tds-profiel" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">TDS-profiel brouwwater</h3>
              <p className="text-sm text-gray-600">Welk TDS-profiel is optimaal per bierstijl en hoe stelt u het in?</p>
            </Link>
            <Link href="/brouwwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Brouwwater: complete gids</h3>
              <p className="text-sm text-gray-600">Alles over brouwwater samenstellen voor elk bierstijl.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over osmosewater voor brouwen</h2>
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
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>,{' '}
          <Link href="/brouwwater" className="text-[#005F8A] underline">brouwwater gids</Link> en{' '}
          <Link href="/brouwwater/remineraliseren" className="text-[#005F8A] underline">brouwwater remineraliseren</Link>.
        </p>
      </main>
    </>
  );
}
