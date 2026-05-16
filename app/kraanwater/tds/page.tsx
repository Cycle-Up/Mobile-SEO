import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'TDS in kraanwater meten: wat betekent TDS en wanneer is het te hoog?',
  description:
    'TDS (Total Dissolved Solids) meet alle opgeloste stoffen in water in mg/L. Nederlands kraanwater heeft TDS 100-600 mg/L. Een TDS-meter kost 10-25 euro. Leer TDS meten, interpreteren en verlagen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kraanwater/tds' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat meet een TDS-meter precies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een TDS-meter meet de elektrische geleidbaarheid van water en rekent dit om naar een schatting van het totale opgeloste vaste stofgehalte in mg/L (milligram per liter) of ppm (parts per million, identiek aan mg/L). De meter meet alle geladen deeltjes: calcium, magnesium, natrium, kalium, bicarbonaat, sulfaat, chloride, nitraat en kleine hoeveelheden mineralen en metalen. Elektrisch neutrale stoffen zoals pesticiden, PFAS en sommige organische verbindingen worden echter NIET gemeten door een TDS-meter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is een gezond TDS-niveau voor drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Volgens de WHO is een TDS van 150 tot 300 mg/L ideaal voor drinkwater, met een goede balans van mineralen. Water onder 50 mg/L (gedestilleerd, omgekeerde osmose) mist mineralen en smaakt vlak. Water boven 500 mg/L kan een bittere of zoute smaak geven. De WHO-maximumnorm voor drinkwater is 1000 mg/L. Nederlands kraanwater heeft TDS-waarden van 100 tot 600 mg/L afhankelijk van de regio, wat vrijwel overal veilig en aanvaardbaar is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is hoge TDS gevaarlijk voor de gezondheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niet per se. TDS is geen maatstaf voor de veiligheid van water. Een hoge TDS kan komen van gezonde mineralen (calcium, magnesium) die juist bijdragen aan de dagelijkse inname van voedingsstoffen. Omgekeerd kan water met een lage TDS toch verontreinigd zijn met pesticiden, PFAS of medicijnresten die geen effect hebben op de TDS-waarde. Beoordeel waterkwaliteit altijd op basis van een volledige chemische analyse, niet alleen op TDS.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe gebruik ik een TDS-meter correct?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dompel de elektrode van de TDS-meter 2 tot 3 centimeter in het water en wacht 20 tot 30 seconden voor een stabiele meting. De meest accurate meting krijgt u bij een watertemperatuur van 25 graden Celsius. Goede TDS-meters hebben automatische temperatuurcompensatie (ATC). Kalibreer de meter regelmatig met een bekende kalibratieoplossing. Spoel de elektrode na gebruik met gedestilleerd of osmosewater en bewaar de meter droog. Een goedkope TDS-meter (10-25 euro) is voldoende voor thuisgebruik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke TDS geeft een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een goed functionerend osmosefilter produceert water met een TDS van 5 tot 30 mg/L, afhankelijk van het invoerwater en de membraankwaliteit. Dit is bijna gedestilleerd water. Voor drinkwater is dit te laag: de WHO adviseert een minimum van 100 mg/L voor goede mineraalbalans. Voeg daarom altijd een remineralisatiefilter toe na het osmosefilter, waardoor de TDS stijgt naar 100-150 mg/L. Controleer uw osmosefilter regelmatig met een TDS-meter: een stijgende TDS-waarde (boven 50 mg/L) wijst op een versleten membraan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de ideale TDS voor koffiezetten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De Specialty Coffee Association (SCA) adviseert een TDS van 75 tot 150 mg/L voor optimale espresso-extractie en filterkoffie. Bij te lage TDS (onder 50 mg/L, zoals puur osmosewater) heeft water onvoldoende mineralen om de aromastoffen in koffie goed te extraheren, wat resulteert in vlakke, zure koffie. Bij te hoge TDS (boven 300 mg/L) kan kalkvorming in de machine ontstaan en de smaak worden beinvloed. Gebruik na een osmosefilter altijd een remineralisatiefilter voor koffiemachines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe verhoog ik de TDS van osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater met een TDS onder 30 mg/L is te arm aan mineralen voor dagelijks drinkwater. U kunt de TDS verhogen door: (1) een remineralisatiefilter plaatsen na het osmosesysteem, die calciumcarbonaat en magnesium toevoegt en de TDS brengt naar 100-150 mg/L; (2) mineraaltabletjes of elektrolytdruppels toevoegen; (3) osmosewater mengen met gewoon kraanwater in een vaste verhouding. Een remineralisatiefilter is de meest praktische en goedkope oplossing voor dagelijks gebruik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel TDS heeft flessenwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De TDS van flessenwater varieert enorm: Evian heeft circa 350 mg/L, Spa Reine circa 30 mg/L, San Pellegrino circa 1000 mg/L en Volvic circa 130 mg/L. Dit verklaart de verschillende smaakprofielen: San Pellegrino smaakt "zwaar" en mineraalrijk, Spa Reine smaakt neutraal en licht. Flessenwater met een hoge TDS is niet per se ongezond; de samenstelling van de mineralen bepaalt of het drinkwater gunstig is voor uw gezondheid.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'TDS in kraanwater meten: wat betekent TDS en wanneer is het te hoog?',
  description:
    'TDS (Total Dissolved Solids) meet alle opgeloste stoffen in water in mg/L. Nederlands kraanwater heeft TDS 100-600 mg/L. Leer TDS meten, interpreteren en verlagen met een osmosefilter.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/kraanwater/tds',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function KraanwaterTdsPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Kraanwater', item: 'https://waterfilterplatform.nl/kraanwater' },
              { '@type': 'ListItem', position: 3, name: 'TDS meten', item: 'https://waterfilterplatform.nl/kraanwater/tds' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/kraanwater" className="hover:underline">Kraanwater</Link> &rsaquo;{' '}
          <span>TDS meten</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            TDS in kraanwater meten: wat betekent TDS en wanneer is het te hoog?
          </h1>
          <p className="text-[#005F8A] text-lg">
            TDS staat voor Total Dissolved Solids en geeft het totaal aan opgeloste deeltjes in water
            aan, gemeten in mg/L. Een TDS-meter kost 10&ndash;25 euro en geeft direct inzicht in uw
            waterkwaliteit. Nederlands kraanwater heeft TDS 100&ndash;600 mg/L. Leer wat TDS betekent,
            hoe u het meet en wat de ideale waarde is voor drinkwater en koffie.
          </p>
        </section>

        <QuickAnswer answer="TDS (Total Dissolved Solids) meet alle opgeloste deeltjes in water in mg/L. Ideale drinkwater TDS: 150-300 mg/L (WHO). TDS is geen veiligheidsmaatstaf: hoge TDS kan van gezonde mineralen komen. Osmosefilter verlaagt TDS tot onder 30 mg/L. Daarna remineraliseren naar 100-150 mg/L." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is TDS?
        </h2>
        <p className="text-gray-700 mb-4">
          TDS staat voor <strong>Total Dissolved Solids</strong> &mdash; het totaal aan opgeloste vaste
          stoffen in water, uitgedrukt in mg/L (milligram per liter) of ppm (parts per million).
          De waarden zijn identiek: 1 mg/L = 1 ppm. TDS omvat alle opgeloste mineralen, zouten,
          metalen en organische verbindingen die in water zijn opgelost:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li><strong>Calcium en magnesium:</strong> verantwoordelijk voor waterhardheid; van nature aanwezig</li>
          <li><strong>Natrium en kalium:</strong> van nature aanwezig en via ontharders verhoogd</li>
          <li><strong>Bicarbonaat (HCO&#8323;&#8315;):</strong> buffert pH en vormt kalkafzetting bij verhitting</li>
          <li><strong>Sulfaat (SO&#8324;&#178;&#8315;):</strong> geologische oorsprong en landbouwinput</li>
          <li><strong>Chloride (Cl&#8315;):</strong> van nature aanwezig; verhoogd in kustgebieden</li>
          <li><strong>Nitraat (NO&#8323;&#8315;):</strong> landbouwuitspoeling; verhoogd in agrarische gebieden</li>
          <li><strong>Silica, zware metalen en organische stoffen:</strong> in kleine hoeveelheden</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Belangrijk: TDS meet <strong>uitsluitend geladen en opgeloste deeltjes</strong> die de
          elektrische geleidbaarheid verhogen. Stoffen zoals pesticiden, PFAS, hormonen en virussen
          hebben vrijwel geen effect op de TDS-waarde maar kunnen desondanks schadelijk zijn.
          TDS is dus geen maatstaf voor de veiligheid van drinkwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          TDS-referentiewaarden voor drinkwater
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">TDS (mg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Beoordeling</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Voorbeelden</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">&lt;50 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">Zeer laag; mineraalarm</td>
                <td className="border border-gray-300 px-3 py-2">Osmosewater, gedestilleerd</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">50&ndash;150 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">Laag; zacht water</td>
                <td className="border border-gray-300 px-3 py-2">Spa Reine (~30), Amsterdam (~200)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">150&ndash;300 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">Ideaal (WHO-aanbeveling)</td>
                <td className="border border-gray-300 px-3 py-2">Volvic (~130), Amsterdam regio</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">300&ndash;500 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">Acceptabel; licht mineraalrijk</td>
                <td className="border border-gray-300 px-3 py-2">Rotterdam (~250), Evian (~350)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">500&ndash;1000 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">Hoog; kan bittere smaak geven</td>
                <td className="border border-gray-300 px-3 py-2">Limburg kraanwater (~500)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">&gt;1000 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Te hoog (WHO-maximum)</td>
                <td className="border border-gray-300 px-3 py-2">Brak water, zeewater</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          TDS van Nederlands kraanwater per regio
        </h2>
        <p className="text-gray-700 mb-4">
          De TDS van kraanwater varieert aanzienlijk per regio in Nederland, afhankelijk van de
          waterbron (grondwater of oppervlaktewater) en de lokale geologie:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Amsterdam:</strong> circa 200 mg/L (Amsterdamse Waterleidingduinen, relatief zacht duinwater)</li>
          <li><strong>Rotterdam:</strong> circa 250 mg/L (Maaswater, oppervlaktewater)</li>
          <li><strong>Utrecht:</strong> circa 300 mg/L (grondwater met hogere mineraleninhoud)</li>
          <li><strong>Limburg:</strong> tot 500&ndash;600 mg/L (hard grondwater met hoog calcium- en sulfaatgehalte)</li>
          <li><strong>Zeeland en kustgebieden:</strong> kan hoger zijn door chloride-invloed van zeewater</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Al deze waarden vallen binnen veilige grenzen. De hogere TDS in Limburg en andere harde
          watergebieden is voornamelijk afkomstig van calcium en magnesium, die op zichzelf niet
          schadelijk zijn maar kalkafzetting in waterkokers en koffiezetapparaten veroorzaken.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          TDS meten met een TDS-meter: stap voor stap
        </h2>
        <p className="text-gray-700 mb-4">
          Een TDS-meter is een eenvoudig en goedkoop meetinstrument (10&ndash;25 euro) dat u direct
          een indicatie geeft van het mineraalgehalte van uw water:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>Laat de kraan 30 seconden lopen voor u een representatieve meting neemt</li>
          <li>Dompel de elektrode 2&ndash;3 cm in het water</li>
          <li>Wacht 20&ndash;30 seconden voor een stabiele aflezing</li>
          <li>Lees de waarde af in mg/L of ppm (identiek)</li>
          <li>Meet bij kamertemperatuur (20&ndash;25 graden); meters met ATC compenseren automatisch</li>
          <li>Spoel de meter na gebruik af met schoon water en bewaar droog</li>
        </ol>
        <p className="text-gray-700 mb-6">
          Voor de meting van{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosewater</Link>{' '}
          is een TDS-meter bijzonder nuttig: een stijgende TDS na het filter (van typisch 5&ndash;15 mg/L
          naar boven 50 mg/L) wijst op een versleten membraan dat vervangen moet worden. Meet zowel
          het invoerwater als het gefilterde water en bereken de rejectiegraad: (TDS-in minus TDS-uit)
          gedeeld door TDS-in maal 100%. Een goed membraan behaalt 95&ndash;99% rejectie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          TDS is GEEN maatstaf voor veiligheid
        </h2>
        <p className="text-gray-700 mb-4">
          Dit is het belangrijkste misverstand over TDS. Een hoge TDS zegt niets over de aanwezigheid
          van gevaarlijke stoffen, en een lage TDS garandeert geen veilig water:
        </p>
        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
          <ul className="text-gray-700 text-sm space-y-3">
            <li>
              <strong>PFAS (poly- en perfluoralkylstoffen):</strong> aanwezig in nanogrammen per liter
              &mdash; vrijwel geen effect op TDS, maar een serieus gezondheidsrisico bij langdurige blootstelling
            </li>
            <li>
              <strong>Pesticiden en herbiciden:</strong> organische moleculen die TDS nauwelijks beinvloeden
              maar wel kunnen worden aangetroffen in oppervlaktewater en grondwater
            </li>
            <li>
              <strong>Virussen en bacterien:</strong> biologische verontreiniging heeft geen effect op TDS
            </li>
            <li>
              <strong>Medicijnresten:</strong> hormonen en farmaceutische stoffen zijn bij zeer lage
              concentraties aanwezig en onzichtbaar voor een TDS-meter
            </li>
          </ul>
        </div>
        <p className="text-gray-700 mb-6">
          Voor een betrouwbaar beeld van uw waterkwaliteit is een volledige laboratoriumanalyse nodig.
          Bekijk onze pagina over{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteitstesten</Link>{' '}
          voor meer informatie over het laten testen van uw water.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          TDS verlagen met een osmosefilter
        </h2>
        <p className="text-gray-700 mb-4">
          Een osmosefilter is de meest effectieve methode om de TDS van kraanwater drastisch te
          verlagen. Het semi-permeabele membraan houdt 95&ndash;99% van alle opgeloste ionen tegen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Invoerwater TDS 300 mg/L</strong> &rarr; osmosewater TDS 3&ndash;15 mg/L</li>
          <li><strong>Invoerwater TDS 500 mg/L</strong> &rarr; osmosewater TDS 5&ndash;25 mg/L</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Puur osmosewater met TDS onder 30 mg/L is echter te mineraalarm voor dagelijks drinkwater.
          Het smaakt vlak en mist de mineralen die bijdragen aan de dagelijkse calciuminname. Voeg
          altijd een <strong>remineralisatiefilter</strong> toe na het osmosesysteem. Dit calciumcarbonaat-
          of magnesiumfilter brengt de TDS terug naar 100&ndash;150 mg/L &mdash; ideaal voor drinkwater
          en voor gebruik in koffiemachines. Meer hierover leest u op onze pagina over{' '}
          <Link href="/osmose-water/mineralen" className="text-[#005F8A] underline">mineralen in osmosewater</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          TDS voor koffie en thee: de ideale waarde
        </h2>
        <p className="text-gray-700 mb-4">
          Waterchemie heeft een significante invloed op de smaak van koffie en thee. De{' '}
          <strong>Specialty Coffee Association (SCA)</strong> heeft richtlijnen voor ideaal koffiewater:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>TDS 75&ndash;150 mg/L:</strong> optimaal voor espresso en filterkoffie</li>
          <li><strong>TDS &lt;50 mg/L:</strong> te laag; onvoldoende mineralen voor goede extractie; vlakke koffie</li>
          <li><strong>TDS &gt;250 mg/L:</strong> te hoog; kalk- en smaakproblemen in espressomachines</li>
          <li><strong>Magnesium:</strong> bevordert aromastofextractie; voorkeur boven calcium voor koffiesmaak</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor een koffiebar of thuisespresso-installatie is osmosewater met remineralisatie (TDS
          100&ndash;150 mg/L, magnesiumrijk) de gouden standaard. Gebruik nooit puur osmosewater of
          gedestilleerd water in professionele koffiemachines zonder remineralisatie.
          Lees meer over de invloed van waterbehandeling op smaak op onze pagina{' '}
          <Link href="/osmose-water/smaak" className="text-[#005F8A] underline">osmosewater en smaak</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over TDS in kraanwater
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
          <Link href="/osmose-water/mineralen" className="text-[#005F8A] underline">mineralen in osmosewater</Link>,{' '}
          <Link href="/osmose-water/smaak" className="text-[#005F8A] underline">osmosewater en smaak</Link> en{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteitstest</Link>.
        </p>
      </main>
    </>
  );
}
