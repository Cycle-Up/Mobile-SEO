import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter voor tiny house: compacte oplossingen zonder vaste aansluiting',
  description: 'Een tiny house heeft speciale waterfilterwensen: compact, energie-efficient, vaak zonder vast leidingwater. De beste waterfilteroplossingen voor off-grid en tiny house.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/tiny-house' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welk waterfilter past in een tiny house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een tiny house met gemeentelijk leidingwater volstaat een compact koolstoffilter of een tafelblad-osmosesysteem (countertop RO). Bij regenwater of tankwater is een combinatie van sedimentfilter, actieve kool en UV-lamp noodzakelijk voor microbiologische veiligheid. Berkey-type zwaartekrachtfilters zijn ideaal als u helemaal off-grid werkt zonder stroom.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik in een tiny house regenwatercollectie gebruiken als drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, dat mag wettelijk in Nederland, maar het is uw eigen verantwoordelijkheid om het water veilig te maken. Regenwater bevat bacterien, algen, stof en eventueel zware metalen van het dakoppervlak. Het minimum is een sedimentfilter (50 µm), een koolstoffilter en een UV-lamp (254 nm). Voor extra zekerheid voegt u een keramisch filter of osmosemembraan toe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt een osmosefilter ook off-grid zonder stroom?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Omgekeerde osmose gebruikt GEEN elektriciteit voor de filtratie zelf; waterdruk (minimaal 2-3 bar) drijft het proces. Alleen als u een UV-lamp toevoegt of een elektrische booster-pomp gebruikt, heeft u stroom nodig. Een countertop osmosesysteem werkt op normale kraandruk zonder enige elektriciteit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe groot is een compact osmosesysteem voor een tiny house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een countertop (tafelblad) osmosesysteem is typisch 30x20x40 cm groot en kan gewoon op het aanrecht staan zonder installatie. Onder-aanrecht systemen zijn iets groter (40x20x50 cm) maar passen in de meeste kleine keukens. Er is geen boiler nodig als u alleen koud gefilterd drinkwater wilt, waardoor het systeem nog compacter blijft.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe filter ik water in een tiny house zonder vast leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zonder vast leidingwater zijn er drie opties: (1) Zwaartekracht-keramisch filter (Berkey-type): geen stroom, geen druk nodig, vult u handmatig bij. (2) 12V UV-purifier met pomp op een kleine accumulator of solar-paneel. (3) Portable countertop osmosesysteem dat werkt op druk van een kleine handpomp of accupomp. Combineer altijd met een sedimentprefilter om het membraan te beschermen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een Berkey-filter en een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een Berkey (zwaartekrachtfilter) gebruikt keramische en actieve koolfilters om bacterien, protozoa, chloor en sommige chemicalien te verwijderen. Het werkt zonder stroom of druk. Een osmosefilter heeft waterdruk nodig maar verwijdert aanzienlijk meer: ook zware metalen, nitraten, PFAS, farmaceutische resten en opgeloste zouten. Berkey is ideaal voor off-grid gebruik; osmose geeft de breedste en diepste zuivering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een kokend water kraan geschikt voor een tiny house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een 4-in-1 kokend waterkraan combineert gefilterd koud water, warm water, kokend water en soms ook bruisend water in een enkele kraan. Dit bespaart ruimte in een tiny house. De ingebouwde boiler is compact (2-4 liter) en verbruikt standby circa 10-30W. Voor een off-grid tiny house op zonne-energie is dit goed te combineren met een thuisbatterij of kleine omvormer.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter voor tiny house: compacte oplossingen zonder vaste aansluiting',
  description: 'Een tiny house heeft speciale waterfilterwensen: compact, energie-efficient, vaak zonder vast leidingwater. De beste waterfilteroplossingen voor off-grid en tiny house.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/tiny-house',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterTinyHousePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Waterfilter tiny house', item: 'https://waterfilterplatform.nl/waterfilter/tiny-house' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>Waterfilter tiny house</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterfilter voor tiny house: compacte oplossingen zonder vaste aansluiting
          </h1>
          <p className="text-gray-600 text-lg">
            Een tiny house stelt andere eisen aan waterfiltratie dan een gewone woning. Ruimte is schaars, stroom is soms beperkt en de waterbron varieert van gemeentelijk leidingwater tot regenwater of tankwater. Op deze pagina leest u welke filteroplossingen werken in een tiny house, ook volledig off-grid.
          </p>
        </div>

        <QuickAnswer answer="Voor een tiny house met leidingwater volstaat een compact koolstoffilter of countertop osmosesysteem. Bij regenwater of tankwater is UV + sediment + koolstof het minimum. Off-grid zonder stroom: kies een Berkey-type zwaartekrachtfilter. Osmose gebruikt geen stroom voor filtratie, alleen waterdruk." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterbronnen in een tiny house
        </h2>
        <p className="text-gray-700 mb-4">
          Een tiny house kan op meerdere waterbronnen draaien, afhankelijk van de locatie en de mate van off-grid leven. Elke bron heeft andere filtereisen.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Waterbron</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aanbevolen filter</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Reden</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Gemeentelijk leidingwater</td>
                <td className="border border-gray-300 px-3 py-2">Koolstoffilter of klein osmosesysteem</td>
                <td className="border border-gray-300 px-3 py-2">Chloor, standaard Nederlandse waterkwaliteit</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Regenwatercollectie</td>
                <td className="border border-gray-300 px-3 py-2">UV + sedimentfilter + koolstof</td>
                <td className="border border-gray-300 px-3 py-2">Bacterien, algen, verontreinigingen van dakoppervlak</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Tankwater (aangevuld)</td>
                <td className="border border-gray-300 px-3 py-2">UV + keramisch of osmose</td>
                <td className="border border-gray-300 px-3 py-2">Onbekende bron, bacterierisico bij stilstaand water</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Bronwater (eigen bron)</td>
                <td className="border border-gray-300 px-3 py-2">Volledig filtratiesysteem</td>
                <td className="border border-gray-300 px-3 py-2">Nitraat, ijzer, bacterien afhankelijk van bodem</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Uitdagingen bij waterfiltratie in een tiny house
        </h2>
        <p className="text-gray-700 mb-4">
          Wie in een tiny house woont, stuit op drie praktische uitdagingen die in een gewone woning zelden spelen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Beperkte ruimte:</strong> Er is nauwelijks ruimte onder het aanrecht of in een technische ruimte. Filters moeten compact zijn of op het aanrecht kunnen staan.</li>
          <li><strong>Beperkt stroomverbruik:</strong> Off-grid tiny houses werken op zonne-energie of een kleine generator. Elk apparaat telt mee in het energiebudget.</li>
          <li><strong>Variabele waterkwaliteit per bron:</strong> Als u wisselt tussen leidingwater, tankwater en regenwater heeft u een systeem nodig dat met al deze bronnen overweg kan.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Compacte osmosesystemen voor een tiny house
        </h2>
        <p className="text-gray-700 mb-4">
          Osmose is de meest complete filtermethode: het verwijdert bacterien, zware metalen, nitraten, PFAS, farmaceutische resten en opgeloste zouten. Voor een tiny house zijn er twee formaten:
        </p>
        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">Countertop osmose (tafelblad-unit)</h3>
            <p className="text-gray-700 text-sm">
              Een countertop osmosesysteem staat op het aanrecht en hoeft niet vast te worden aangesloten. U koppelt het aan de kraan via een snelkoppeling. Afmetingen zijn typisch 30&times;20&times;40 cm. Geen installateur nodig, geen gaten in het aanrecht boren. Ideaal als u met de tiny house verhuist of tijdelijk ergens staat.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">Onder-aanrecht systeem met mini-configuratie</h3>
            <p className="text-gray-700 text-sm">
              Een compact onder-aanrecht osmosesysteem (zonder boiler) heeft een footprint van circa 20&times;40 cm en past in vrijwel elk klein aanrechtkastje. Zonder drukboiler is geen stroom nodig; u levert alleen waterdruk van de kraan. De osmosekraan geeft direct koud gefilterd water.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stroomverbruik van waterfilters: wat verbruikt wat?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor een off-grid tiny house is stroomverbruik cruciaal. Hieronder het verbruik van de meest voorkomende filteropties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Osmosemembraan:</strong> 0 Watt. Het membraan zelf werkt uitsluitend op waterdruk; geen elektriciteit benodigd.</li>
          <li><strong>UV-lamp (9W-16W):</strong> Circa 10-16W continu tijdens gebruik. Op dagbasis bij 2 uur gebruik: 20-32 Wh. Goed te combineren met een kleine accu.</li>
          <li><strong>Berkey zwaartekrachtfilter:</strong> 0 Watt. Volledig passief, vult u handmatig bij met water.</li>
          <li><strong>Kokend waterkraan (boiler):</strong> Circa 10-30W standby en 2.200-2.800W tijdens verhitten. Voor off-grid gebruik heeft u een omvormer of groot thuisbatterijpakket nodig.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Regenwater als drinkwater in een tiny house
        </h2>
        <p className="text-gray-700 mb-4">
          In Nederland is het toegestaan om regenwater als drinkwater te gebruiken, maar de verantwoordelijkheid voor de veiligheid ligt bij u als gebruiker. Regenwater dat via een dak wordt opgevangen, bevat bacterien, algen, vogeluitwerpselen, fijne stofdeeltjes en soms zware metalen van dakbedekking of dakgoten.
        </p>
        <p className="text-gray-700 mb-4">
          Het wettelijke minimum voor drinkwaardig regenwater is:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>Een <strong>sedimentfilter</strong> (50 µm of fijner) om grove deeltjes en algen te verwijderen</li>
          <li>Een <strong>koolstoffilter</strong> om organische stoffen en geuren te reduceren</li>
          <li>Een <strong>UV-purifier</strong> (254 nm) om bacterien en virussen te doden</li>
        </ol>
        <p className="text-gray-700 mb-6">
          Voor maximale zekerheid voegt u een osmosemembraan toe als vierde stap. Dit verwijdert ook eventuele chemische verontreinigingen en geeft water van drinkwaterkwaliteit ongeacht de bronkwaliteit.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Off-grid waterfilter zonder stroom: de Berkey en keramische filters
        </h2>
        <p className="text-gray-700 mb-4">
          Voor een volledig stroomonafhankelijke tiny house is een zwaartekracht-keramisch filter de beste oplossing. De bekendste is de Berkey-filter, maar er zijn ook Europese alternatieven. Deze systemen werken als volgt:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>U vult het bovenste reservoir handmatig met water</li>
          <li>Het water filtert langzaam door keramische elementen (0,2 µm of fijner) naar het onderste reservoir</li>
          <li>Keramische filters verwijderen bacterien, protozoa, sediment en via actieve kool ook chloor en sommige organische stoffen</li>
          <li>Capaciteit: 10-15 liter per dag afhankelijk van de filtergrootte en waterkwaliteit</li>
          <li>Nadeel ten opzichte van osmose: verwijdert geen opgeloste ionen (nitraat, lood, fluoride, PFAS)</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Een Berkey-filter is ideaal voor gebruik met regenwater of relatief schoon bronwater waar bacterien het grootste risico vormen. Voor zwaar vervuild water of bronnen met nitraat of zware metalen heeft u aanvullende filters nodig.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kokend water kraan in een tiny house
        </h2>
        <p className="text-gray-700 mb-4">
          Een 4-in-1 kokend waterkraan combineert gefilterd drinkwater en kokend water in een enkele kraan en bespaart zo een aparte waterkoker en een extra filterkraan. Dit is een slimme ruimtebesparing voor een tiny house keuken. De ingebouwde boiler heeft een inhoud van 2-4 liter en past onder het aanrecht in een kleine behuizing.
        </p>
        <p className="text-gray-700 mb-6">
          Voor gebruik op leidingwater is dit een uitstekende investering. Combineer de kokend waterkraan met een osmosefilter voor zowel het kokende als het gekoelde gefilterde water uit dezelfde installatie. Op off-grid stroom vereist de boiler een omvormer (230V) of een DC-variant (12V/24V systemen zijn beschikbaar).
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over waterfilters in een tiny house</h2>
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
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfiltertypen</Link> en{' '}
          <Link href="/waterfilter/woonboot" className="text-[#005F8A] underline">waterfilter voor een woonboot</Link>.
        </p>
      </main>
    </>
  );
}
