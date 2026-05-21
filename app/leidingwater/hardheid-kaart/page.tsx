import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterhardheid per provincie en gemeente: kaart en overzicht Nederland',
  description:
    'Nederlandse waterhardheid varieert van 4 dH (Friesland, zacht) tot 28 dH (Limburg, zeer hard). Overzicht per provincie en de 10 grootste steden.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/hardheid-kaart' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe meet ik de waterhardheid in mijn gemeente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'U kunt de waterhardheid op drie manieren meten. Ten eerste via de website van uw drinkwaterbedrijf: voer uw postcode in en u ziet de actuele hardheid in dH of mmol/L. Ten tweede met teststrips (5-15 euro): dompel de strip 1 seconde in kraanwater en vergelijk de kleur na 15 seconden met de kleurenschaal. Ten derde met een titratiekit (10-25 euro): nauwkeuriger dan strips, u telt het aantal druppels reagens tot kleurverandering. Voor dagelijks gebruik volstaan teststrips.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is hard water schadelijk voor de gezondheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hard water is niet schadelijk voor de gezondheid. Integendeel: calcium en magnesium in hard water leveren een kleine bijdrage aan de dagelijkse mineraalinname. Onderzoek van de WHO wijst zelfs op een mogelijk beschermend effect van hard water op hart- en vaatziekten. De nadelen van hard water zijn puur praktisch: kalkafzetting in apparaten, grotere zeepbehoefte en douche-aanslag. Zacht water is iets corrosiever en kan meer koper en lood uit leidingen lossen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk gebied in Nederland heeft het hardste water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Limburg heeft het hardste leidingwater van Nederland, met waarden van 20 tot 28 dH (zeer hard). Dit komt doordat het drinkwater in Limburg grotendeels wordt gewonnen uit diepe kalksteenlagen (Maaswater en grondwater uit de Roerdalslenk). Steden als Maastricht, Venlo en Roermond hebben structureel meer dan 20 dH. Noord-Brabant volgt met 14-22 dH. Friesland heeft met 4-8 dH het zachtste leidingwater van Nederland.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vanaf welke hardheid heb ik een waterontharder nodig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een waterontharder wordt algemeen aanbevolen vanaf 14 dH (hard water). Bij deze hardheid treedt zichtbare kalkvorming op in waterkokers en op douche-armaturen. Boven 21 dH (zeer hard, zoals in Limburg) is een waterontharder voor huishoudelijk gebruik vrijwel noodzakelijk om apparaten te beschermen. Tussen 7 en 14 dH is een ontharder optioneel; regelmatig ontkalken van apparaten is dan afdoende. Voor espresso- en koffiemachines is al boven 8 dH een filter of zachter water aan te bevelen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doet hard water met mijn waterkoker en espressomachine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Boven 10 dH begint kalk zich zichtbaar af te zetten in waterkokers: de verwarmingsspiraal raakt bedekt met een witte laag calciumcarbonaat. Dit verhoogt het energieverbruik (1 mm kalk = 10% meer energie) en verkort de levensduur. Espressomachines zijn nog gevoeliger: boven 8 dH worden boilers en stoomsproeiers aangetast. Veel fabrikanten (Breville, De&apos;Longhi, Jura) adviseren filter- of zacht water. In Limburg (25 dH) zonder filter moet u een espressomachine elke 1-2 maanden ontkalken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de gevolgen van te zacht water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Te zacht water (onder 4 dH) is agressiever: het lost gemakkelijker metalen op uit leidingen, met name koper uit koperleidingen en lood uit oudere soldeerverbindingen. Dit kan verhoogde koperconcentraties in drinkwater veroorzaken. Daarnaast is extreem zacht water minder smakelijk (mist mineraliteit) en geeft het minder schuim met zeep in de wasruimte. In Nederland heeft vrijwel nergens het leidingwater een hardheid onder 4 dH.',
      },
    },
    {
      '@type': 'Question',
      name: 'Helpt een osmosefilter bij hard water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Een osmosefilter verwijdert 95-99% van calcium en magnesium uit water, waardoor het geproduceerde water vrijwel volledig zacht is (TDS &lt;20 mg/L). Dit is ideaal voor espresso- en koffiemachines. Voor heel-huis-gebruik is een osmosefilter echter te duur en te traag; daarvoor is een waterontharder op ionenwisseling praktischer. Veel huishoudens in hard-watergebieden combineren een waterontharder voor de kranen en een osmosefilter voor drinkwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe verschilt waterhardheid per stad in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De hardheid varieert sterk per stad, afhankelijk van de waterbron. Amsterdam gebruikt oppervlaktewater uit het Amsterdamse Waterleiding Duinen en heeft een relatief zachte 7 dH. Rotterdam (8 dH) en Den Haag (9 dH) gebruiken Maaswater na uitgebreide zuivering. Eindhoven (18 dH) en Breda (17 dH) gebruiken hard grondwater uit Brabantse zandlagen. Limburg-steden als Maastricht zitten boven 22 dH door winning uit kalksteenformaties.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterhardheid per provincie en gemeente: kaart en overzicht Nederland',
  description:
    'Nederlandse waterhardheid varieert van 4 dH (Friesland, zacht) tot 28 dH (Limburg, zeer hard). Overzicht per provincie en de 10 grootste steden.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/leidingwater/hardheid-kaart',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterhardheidKaartPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Leidingwater', item: 'https://waterfilterplatform.nl/leidingwater' },
              { '@type': 'ListItem', position: 3, name: 'Waterhardheid kaart Nederland', item: 'https://waterfilterplatform.nl/leidingwater/hardheid-kaart' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/leidingwater" className="hover:underline">Leidingwater</Link> &rsaquo;{' '}
          <span>Waterhardheid kaart Nederland</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterhardheid per provincie en gemeente: kaart en overzicht Nederland
          </h1>
          <p className="text-[#005F8A] text-lg">
            De waterhardheid in Nederland varieert enorm: van 4 dH in Friesland tot 28 dH in Limburg.
            Ontdek de hardheid in uw provincie en gemeente, wat dit betekent voor uw apparaten en
            wanneer een waterontharder of osmosefilter de juiste oplossing is.
          </p>
        </section>

        <QuickAnswer answer="Nederlandse waterhardheid loopt van 4 dH (Friesland, zacht) tot 28 dH (Limburg, zeer hard). Boven 14 dH is hard water, boven 21 dH zeer hard. Kalk in waterkoker treedt op boven 10 dH, espressomachines zijn gevoelig boven 8 dH. Een waterontharder of osmosefilter biedt bescherming." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is waterhardheid en hoe wordt het gemeten?
        </h2>
        <p className="text-gray-700 mb-4">
          Waterhardheid is de concentratie opgeloste calcium (Ca2+) en magnesium (Mg2+) ionen in
          drinkwater. Deze ionen komen vrij als regenwater door kalksteenlagen en dolomietgesteenten
          stroomt. In Nederland wordt waterhardheid uitgedrukt in <strong>Duitse graden (&#176;dH)</strong>,
          maar ook millimol per liter (mmol/L) en mg/L CaCO3 worden gebruikt. De omrekenfactoren zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>1 dH = 0,179 mmol/L (Ca2+ en Mg2+ samen)</li>
          <li>1 dH = 17,8 mg/L als CaCO3</li>
          <li>1 mmol/L = 5,6 dH</li>
        </ul>
        <p className="text-gray-700 mb-4">De Nederlandse classificatie voor waterhardheid:</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Klasse</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Hardheid (dH)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Hardheid (mmol/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kenmerk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Zacht</td>
                <td className="border border-gray-300 px-3 py-2">&lt;7 dH</td>
                <td className="border border-gray-300 px-3 py-2">&lt;1,25 mmol/L</td>
                <td className="border border-gray-300 px-3 py-2">Weinig kalkvorming, iets corrosiever</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Matig</td>
                <td className="border border-gray-300 px-3 py-2">7&ndash;14 dH</td>
                <td className="border border-gray-300 px-3 py-2">1,25&ndash;2,5 mmol/L</td>
                <td className="border border-gray-300 px-3 py-2">Lichte kalkafzetting bij hoog gebruik</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Hard</td>
                <td className="border border-gray-300 px-3 py-2">14&ndash;21 dH</td>
                <td className="border border-gray-300 px-3 py-2">2,5&ndash;3,75 mmol/L</td>
                <td className="border border-gray-300 px-3 py-2">Duidelijke kalk, ontharder aanbevolen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Zeer hard</td>
                <td className="border border-gray-300 px-3 py-2">&gt;21 dH</td>
                <td className="border border-gray-300 px-3 py-2">&gt;3,75 mmol/L</td>
                <td className="border border-gray-300 px-3 py-2">Sterke kalkvorming, apparaten risico</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheid per provincie: overzicht Nederland
        </h2>
        <p className="text-gray-700 mb-4">
          De geografische spreiding van waterhardheid in Nederland wordt bepaald door de bodemgesteldheid
          en de gebruikte waterbron. Provincies met meer kalksteenlagen of diep grondwater hebben harder
          water; provincies die oppervlaktewater of dunzandige grondlagen gebruiken hebben zachter water.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Provincie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Hardheid (dH)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Klasse</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Voornaamste bron</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Groningen</td>
                <td className="border border-gray-300 px-3 py-2">10&ndash;15 dH</td>
                <td className="border border-gray-300 px-3 py-2">Matig</td>
                <td className="border border-gray-300 px-3 py-2">Grondwater en oppervlaktewater</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Friesland</td>
                <td className="border border-gray-300 px-3 py-2">4&ndash;8 dH</td>
                <td className="border border-gray-300 px-3 py-2">Zacht&ndash;matig</td>
                <td className="border border-gray-300 px-3 py-2">Oppervlaktewater (IJsselmeer)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Drenthe</td>
                <td className="border border-gray-300 px-3 py-2">10&ndash;15 dH</td>
                <td className="border border-gray-300 px-3 py-2">Matig</td>
                <td className="border border-gray-300 px-3 py-2">Grondwater zandlagen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Overijssel</td>
                <td className="border border-gray-300 px-3 py-2">10&ndash;18 dH</td>
                <td className="border border-gray-300 px-3 py-2">Matig&ndash;hard</td>
                <td className="border border-gray-300 px-3 py-2">Grondwater dieper (Twente harder)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Gelderland</td>
                <td className="border border-gray-300 px-3 py-2">12&ndash;20 dH</td>
                <td className="border border-gray-300 px-3 py-2">Matig&ndash;hard</td>
                <td className="border border-gray-300 px-3 py-2">Grondwater Veluwe, Rijnwater</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Utrecht</td>
                <td className="border border-gray-300 px-3 py-2">10&ndash;16 dH</td>
                <td className="border border-gray-300 px-3 py-2">Matig&ndash;hard</td>
                <td className="border border-gray-300 px-3 py-2">Grondwater Utrechtse heuvelrug</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Noord-Holland</td>
                <td className="border border-gray-300 px-3 py-2">7&ndash;12 dH</td>
                <td className="border border-gray-300 px-3 py-2">Matig</td>
                <td className="border border-gray-300 px-3 py-2">Duinwater (Amsterdamse Waterleidingduinen)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Zuid-Holland</td>
                <td className="border border-gray-300 px-3 py-2">7&ndash;12 dH</td>
                <td className="border border-gray-300 px-3 py-2">Matig</td>
                <td className="border border-gray-300 px-3 py-2">Maaswater en duinwater</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Zeeland</td>
                <td className="border border-gray-300 px-3 py-2">10&ndash;16 dH</td>
                <td className="border border-gray-300 px-3 py-2">Matig&ndash;hard</td>
                <td className="border border-gray-300 px-3 py-2">Maaswater en grondwater</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Noord-Brabant</td>
                <td className="border border-gray-300 px-3 py-2">14&ndash;22 dH</td>
                <td className="border border-gray-300 px-3 py-2">Hard&ndash;zeer hard</td>
                <td className="border border-gray-300 px-3 py-2">Grondwater Brabantse zandlagen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Limburg</td>
                <td className="border border-gray-300 px-3 py-2">20&ndash;28 dH</td>
                <td className="border border-gray-300 px-3 py-2">Zeer hard</td>
                <td className="border border-gray-300 px-3 py-2">Kalksteengrondwater, Maaswater</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Flevoland</td>
                <td className="border border-gray-300 px-3 py-2">8&ndash;12 dH</td>
                <td className="border border-gray-300 px-3 py-2">Matig</td>
                <td className="border border-gray-300 px-3 py-2">IJsselmeerwater</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheid in de 10 grootste steden
        </h2>
        <p className="text-gray-700 mb-4">
          De hardheid per gemeente verschilt soms sterk van het provinciaal gemiddelde, doordat
          steden hun eigen waterwingebieden en mengverhoudingen hebben. Hieronder de tien grootste
          steden van Nederland:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Stad</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Hardheid (dH)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Klasse</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Waterschap</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Amsterdam</td>
                <td className="border border-gray-300 px-3 py-2">7 dH</td>
                <td className="border border-gray-300 px-3 py-2">Matig</td>
                <td className="border border-gray-300 px-3 py-2">Waternet</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Rotterdam</td>
                <td className="border border-gray-300 px-3 py-2">8 dH</td>
                <td className="border border-gray-300 px-3 py-2">Matig</td>
                <td className="border border-gray-300 px-3 py-2">Evides</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Den Haag</td>
                <td className="border border-gray-300 px-3 py-2">9 dH</td>
                <td className="border border-gray-300 px-3 py-2">Matig</td>
                <td className="border border-gray-300 px-3 py-2">Dunea</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Utrecht</td>
                <td className="border border-gray-300 px-3 py-2">12 dH</td>
                <td className="border border-gray-300 px-3 py-2">Matig</td>
                <td className="border border-gray-300 px-3 py-2">Vitens</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Eindhoven</td>
                <td className="border border-gray-300 px-3 py-2">18 dH</td>
                <td className="border border-gray-300 px-3 py-2">Hard</td>
                <td className="border border-gray-300 px-3 py-2">Brabant Water</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Tilburg</td>
                <td className="border border-gray-300 px-3 py-2">16 dH</td>
                <td className="border border-gray-300 px-3 py-2">Hard</td>
                <td className="border border-gray-300 px-3 py-2">Brabant Water</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Groningen</td>
                <td className="border border-gray-300 px-3 py-2">13 dH</td>
                <td className="border border-gray-300 px-3 py-2">Matig</td>
                <td className="border border-gray-300 px-3 py-2">Waterbedrijf Groningen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Almere</td>
                <td className="border border-gray-300 px-3 py-2">10 dH</td>
                <td className="border border-gray-300 px-3 py-2">Matig</td>
                <td className="border border-gray-300 px-3 py-2">Vitens</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Breda</td>
                <td className="border border-gray-300 px-3 py-2">17 dH</td>
                <td className="border border-gray-300 px-3 py-2">Hard</td>
                <td className="border border-gray-300 px-3 py-2">Brabant Water</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Nijmegen</td>
                <td className="border border-gray-300 px-3 py-2">15 dH</td>
                <td className="border border-gray-300 px-3 py-2">Matig&ndash;hard</td>
                <td className="border border-gray-300 px-3 py-2">Vitens</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gevolgen van hard water voor uw huishouden
        </h2>
        <p className="text-gray-700 mb-4">
          Harde waterhardheid heeft merkbare gevolgen voor apparaten en dagelijks comfort. De
          drempelwaarden waarop problemen beginnen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Waterkoker (boven 10 dH):</strong> kalk slaat neer op de verwarmingsspiraal.
            1 mm kalk verhoogt het energieverbruik met circa 10%. De levensduur van de waterkoker
            neemt af bij structureel hard water zonder regelmatig ontkalken.
          </li>
          <li>
            <strong>Espressomachine (boven 8 dH):</strong> kalk in de boiler en stoomlans is
            kostbaar te repareren. Fabrikanten adviseren water met minder dan 150 mg/L CaCO3
            (circa 8,4 dH). In Eindhoven (18 dH) moet u zonder filter maandelijks ontkalken.
          </li>
          <li>
            <strong>Wasmachine en vaatwasser:</strong> boven 14 dH is een wasversterker of een
            waterontharder aanbevolen. Wasmachines verbruiken bij hard water meer wasmiddel
            en hebben een kortere levensduur van de verwarmingselementen.
          </li>
          <li>
            <strong>Douche en kranen:</strong> boven 15 dH vormt zich witte aanslag op douchecabines,
            kranen en tegels. Dagelijks afdrogen of een beschermingsmiddel helpt, maar een
            waterontharder voor de badkamer is structureel effectiever.
          </li>
          <li>
            <strong>Heetwatercirculatieboiler (cv-installatie):</strong> kalk in boilers verhoogt
            de verwarmingstemperatuur, wat leidt tot hoger energieverbruik en in het ergste geval
            tot lekke of gebarsten leidingen.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gevolgen van zacht water: minder kalk maar meer corrosie
        </h2>
        <p className="text-gray-700 mb-6">
          Zacht water (onder 7 dH) heeft nauwelijks kalkvorming, maar is van nature agressiever voor
          leidingen. Water met weinig calcium en magnesium is oververzadigd met koolzuur (CO2) en kan
          koper, zink en lood uit leidingen lossen. In provincies zoals Friesland (4-8 dH) kan het
          kopergehalte in kraanwater iets hoger liggen dan in harde waterprovincies, met name in
          oudere koperleidingen. De WHO-grens voor koper is 2 mg/L; bij zacht water is het verstandig
          het eerste water dat uit de kraan komt even weg te spoelen als de kraan lang niet heeft
          gelopen (stagnatiebemonstering).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Oplossingen bij hard water
        </h2>
        <p className="text-gray-700 mb-4">
          Afhankelijk van uw situatie en budget zijn er verschillende oplossingen:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Waterontharder voor het gehele huis</strong> &mdash; ionenwisselaarsysteem dat
            calcium en magnesium vervangt door natrium. Effectief voor alle kranen. Kosten:
            &euro;600&ndash;1.500 inclusief installatie. Let op: verbruikt zout (regeneratie) en
            verhoogt het natriumgehalte van drinkwater; niet ideaal voor babyfles of koffie-specialty.
            Zie ook: <Link href="/waterfilter/waterverzachter" className="text-[#005F8A] underline">waterontharder kiezen</Link>.
          </li>
          <li>
            <strong>Osmosefilter voor drinkwater</strong> &mdash; verwijdert 95-99% van kalk uit
            water voor drinkwater en koffie. Compact systeem onder aanrecht.
            Kosten: &euro;200&ndash;600. Ideaal te combineren met een waterontharder voor de rest
            van het huis. Meer over{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>.
          </li>
          <li>
            <strong>Filterkan met kalkontharder</strong> &mdash; filterkan met ionenwisselaarcartridge
            (bijv. BRITA Maxtra+) verlaagt de hardheid met 50-70%. Goedkoopste optie (&euro;20&ndash;50
            inclusief filters per kwartaal). Geschikt voor drinkwater en koffie.
          </li>
          <li>
            <strong>Regelmatig ontkalken</strong> &mdash; bij matige hardheid (7-14 dH) is structureel
            ontkalken van apparaten vaak voldoende. Gebruik citroenzuur (goedkoper) of commerciele
            ontkalkingsmiddelen.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheidtest: zelf meten in 3 minuten
        </h2>
        <p className="text-gray-700 mb-4">
          U hoeft geen laboratorium te bellen om uw waterhardheid te weten. Drie eenvoudige methoden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Website drinkwaterbedrijf (gratis):</strong> voer uw postcode in op de website
            van uw drinkwaterbedrijf (Vitens, Evides, Waternet, Dunea, etc.). U krijgt direct de
            actuele hardheid te zien in dH of mmol/L.
          </li>
          <li>
            <strong>Teststrips (5-15 euro):</strong> verkrijgbaar bij bouwmarkten en online.
            Dompel de strip 1 seconde in kraanwater en vergelijk de kleur na 15 seconden met de
            kleurenschaal. Nauwkeurigheid: &plusmn;2 dH.
          </li>
          <li>
            <strong>Titratiekit (10-25 euro):</strong> vul de meetbuis tot 5 mL met kraanwater,
            voeg druppelsgewijs reagens toe en tel het aantal druppels tot de kleur omslaat.
            Elke druppel staat voor 1 dH. Nauwkeuriger dan strips.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Meer informatie over het meten van uw waterkwaliteit vindt u op onze pagina over{' '}
          <Link href="/leidingwater/kwaliteit" className="text-[#005F8A] underline">waterkwaliteit en testen</Link>.
          Voor bewoners in harde waterzones zoals Eindhoven of Limburg is kennis van uw exacte
          hardheid essentieel om de juiste bescherming voor uw apparaten te kiezen.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/waterhardheid/kaart" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterhardheidskaart Nederland</h3>
              <p className="text-sm text-gray-600">Interactieve kaart met de waterhardheid per regio en gemeente.</p>
            </Link>
            <Link href="/waterhardheid/per-provincie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterhardheid per provincie</h3>
              <p className="text-sm text-gray-600">Vergelijk de waterhardheid in alle Nederlandse provincies.</p>
            </Link>
            <Link href="/waterontharder/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Werking van een waterontharder</h3>
              <p className="text-sm text-gray-600">Hoe een waterontharder kalkaanslag en hard water aanpakt.</p>
            </Link>
            <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp bij hard water</h3>
              <p className="text-sm text-gray-600">Vind de juiste oplossing voor hard water in uw situatie.</p>
            </Link>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/waterhardheid/kaart" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterhardheid kaart Nederland</h3>
              <p className="text-sm text-gray-600">Interactieve kaart met waterhardheidswaarden per regio in Nederland.</p>
            </Link>
            <Link href="/waterhardheid/per-provincie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterhardheid per provincie</h3>
              <p className="text-sm text-gray-600">Overzicht van waterhardheid uitgesplitst per Nederlandse provincie.</p>
            </Link>
            <Link href="/waterontharder/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Hoe werkt een waterontharder?</h3>
              <p className="text-sm text-gray-600">Technische werking van waterontharders en wanneer ze zinvol zijn.</p>
            </Link>
            <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp hard water</h3>
              <p className="text-sm text-gray-600">Vind de beste oplossing voor hard water op basis van uw situatie.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over waterhardheid in Nederland
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
          <Link href="/waterfilter/hardheid" className="text-[#005F8A] underline">waterfilter voor hard water</Link>,{' '}
          <Link href="/waterfilter/waterverzachter" className="text-[#005F8A] underline">waterontharder</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> en{' '}
          <Link href="/leidingwater" className="text-[#005F8A] underline">leidingwater kwaliteit Nederland</Link>.
        </p>
      </main>
    </>
  );
}
