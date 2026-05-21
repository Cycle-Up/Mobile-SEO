import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'pH van kraanwater: wat is normaal en wanneer is het een probleem?',
  description:
    'De pH van Nederlands kraanwater ligt normaal tussen 7,2 en 9,5. Te lage pH (zuur) lost lood en koper op uit leidingen. Alles over pH van kraanwater en.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kraanwater/ph' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is de normale pH van Nederlands kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De wettelijke pH-range voor Nederlands drinkwater is 7,0-9,5 (Drinkwaterbesluit). In de praktijk houdt de meeste waterwingebieden de pH tussen 7,5 en 8,5. Dit licht alkalische bereik wordt bereikt door bicarbonaten en kalk in het bronwater. Leidingwater in de Randstad en grote steden heeft doorgaans een stabiele pH van circa 7,5-8,0.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe meet ik de pH van mijn kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er zijn drie meetmethodes voor thuisgebruik. pH-teststrips (EUR 5-15): dip in water, vergelijk kleur met kaart. Indicatief, nauwkeurigheid circa plus of min 0,5 pH. Kleurdruppeltest (EUR 10): voeg een druppel indicator toe aan water, kleur geeft pH aan. pH-meter digitaal (EUR 20-50): meest nauwkeurig (plus of min 0,1 pH), vereist kalibratie met bufferoplossing. Voor eenmalige meting zijn strips voldoende; voor regelmatige controle kiest u een digitale meter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is zuur kraanwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zuur kraanwater (pH lager dan 7,0) is op zichzelf niet direct gevaarlijk om te drinken, maar het veroorzaakt wel een serieus probleem in leidingen. Water met pH lager dan 7,0 is agressief en lost metalen op uit leidingen: lood (neurotoxisch), koper (smaakafwijking en bij hoge concentraties toxisch) en zink. In woningen met loden of koperen leidingen kan zuur water de blootstelling aan zware metalen aanzienlijk verhogen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom is osmosewater licht zuur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater heeft een pH van 6,0-7,0 door twee oorzaken. Ten eerste verwijdert het RO-membraan carbonaten en bicarbonaten, die normaal als buffer werken en de pH verhogen. Ten tweede absorbeert osmosewater CO2 uit de lucht, wat koolzuur (H2CO3) vormt en de pH verlaagt. Dit is geen gezondheidsrisico, maar het water is wel licht agressief voor koperen of loden leidingen. Een remineralisatiecartridge corrigeert de pH naar 7,0-7,5.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doet lage pH met loodleidingen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Water met pH lager dan 7,0 lost lood op uit loden leidingen via een chemisch verweeringsproces. Hoe lager de pH, hoe agressiever het water en hoe meer lood er in oplossing gaat. Nederlandse drinkwaterbedrijven houden de pH bewust boven 7,5 juist om dit te voorkomen. De EU-drinkwaternorm voor lood is 5 µg/L (2036) en 10 µg/L (tot 2036). Zuur water in huizen met loden leidingen kan concentraties ver boven deze norm veroorzaken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe verhoog ik de pH van mijn drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor osmosewater: voeg een alkalische remineralisatiecartridge toe (EUR 15-35/jaar). Deze verhoogt de pH naar 7,0-7,5 door calcium- en magnesiumcarbonaten toe te voegen. Alternatief: voeg een minieme hoeveelheid baksoda (natriumwaterstofcarbonaat, NaHCO3) toe aan osmosewater: circa 0,1 gram per liter verhoogt de pH naar 7,0-7,5. Voor kraanwater met structureel lage pH (onwaarschijnlijk in Nederland): contact opnemen met het waterbedrijf, want dat is een schending van het Drinkwaterbesluit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is hoge pH kraanwater schadelijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kraanwater met pH 8,5-9,5 is veilig om te drinken. De wettelijke bovengrens is 9,5. Hogere pH (alkalisch water) kan een zeepachtige nasmaak geven en kalkafzetting bevorderen in ketels en apparaten. Er zijn geen aangetoonde gezondheidsrisicos bij kraanwater binnen de wettelijke pH-range. Commercieel alkalisch water met pH 8,5-9,5 wordt als sportdrank vermarkt, maar bewezen gezondheidsvoordelen ontbreken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de wettelijke pH-norm voor drinkwater in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het Nederlandse Drinkwaterbesluit (artikel 3 en Bijlage A) stelt een pH-range van 7,0 tot 9,5 vast als indicatieve waarde voor drinkwater. Dit is een esthetische en leidingbeschermende parameter, geen directe gezondheidsgrenswaarde. In de praktijk streven waterbedrijven naar een pH van 7,5-8,5 om looduitloging te minimaliseren en de waterkwaliteit stabiel te houden.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'pH van kraanwater: wat is normaal en wanneer is het een probleem?',
  description:
    'De pH van Nederlands kraanwater ligt normaal tussen 7,2 en 9,5. Te lage pH (zuur) lost lood en koper op uit leidingen. Alles over pH van kraanwater en.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/kraanwater/ph',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function KraanwaterPhPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Kraanwater', item: 'https://waterfilterplatform.nl/kraanwater' },
              { '@type': 'ListItem', position: 3, name: 'pH van kraanwater', item: 'https://waterfilterplatform.nl/kraanwater/ph' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/kraanwater" className="hover:underline">Kraanwater</a> &rsaquo;{' '}
          <span>pH van kraanwater</span>
        </nav>

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            pH van kraanwater: wat is normaal en wanneer is het een probleem?
          </h1>
          <p className="text-gray-600 text-sm">
            Wettelijke normen, looduitloging, osmosewater pH en hoe u thuis kunt meten
          </p>
        </section>

        <QuickAnswer answer="Nederlands kraanwater heeft een wettelijke pH van 7,0-9,5, in de praktijk gemiddeld 7,5-8,5. pH onder 7,0 is gevaarlijk in huizen met loodleidingen: zuur water lost lood op. Osmosewater heeft pH 6,0-7,0 (licht zuur) en vereist een remineralisatiecartridge bij gebruik in woningen met metalen leidingen. Meten kan met pH-strips (EUR 5-15) of digitale meter (EUR 20-50)." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De pH-schaal uitgelegd voor drinkwater
        </h2>
        <p className="text-gray-700 mb-4">
          De pH-schaal loopt van 0 (extreem zuur) tot 14 (extreem alkalisch), met 7,0 als neutraal. Elke stap op de pH-schaal staat voor een factor 10 verschil in zuurgraad. Water met pH 6,0 is dus 10 keer zuurder dan water met pH 7,0. Voor drinkwater is de pH relevant omdat het direct invloed heeft op de levensduur van leidingen en de uitloging van metalen.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">pH-waarde</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Classificatie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Effect op leidingen</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-red-50">
                <td className="border border-gray-300 px-3 py-2">&lt;6,5</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Zuur</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Lood/koper oplossend — gevaarlijk</td>
              </tr>
              <tr className="bg-yellow-50">
                <td className="border border-gray-300 px-3 py-2">6,5-7,0</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Licht zuur</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Klein risico bij loodleiding</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-gray-300 px-3 py-2">7,0-8,5</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Neutraal tot licht alkalisch</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ideaal voor leidingen</td>
              </tr>
              <tr className="bg-yellow-50">
                <td className="border border-gray-300 px-3 py-2">8,5-9,5</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Alkalisch</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Kalkafzetting mogelijk</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-300 px-3 py-2">&gt;9,5</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Te alkalisch</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Wettelijk niet toegestaan</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom houdt Nederland de pH boven 7,5?
        </h2>
        <p className="text-gray-700 mb-4">
          Nederlandse drinkwaterbedrijven passen de pH actief aan. Dit is geen toeval: een hogere pH beschermt leidingen. Kalk (calciumcarbonaat) slaat neer op de binnenzijde van leidingen bij hogere pH, waardoor een beschermende laag ontstaat die contact tussen water en het leidingmateriaal vermindert. Dit is bijzonder relevant in ouder leidingnet met loden of koperen leidingen.
        </p>
        <p className="text-gray-700 mb-6">
          De relatie tussen pH en looduitloging is goed onderzocht. Bij pH 7,5 is de looduitloging in loden leidingen al aanzienlijk lager dan bij pH 7,0. Waterbedrijven die oppervlaktewater gebruiken (dat van nature een lagere pH heeft) voegen calciumcarbonaat of natriumhydroxide toe om de pH te verhogen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosewater en pH: wat u moet weten
        </h2>
        <p className="text-gray-700 mb-4">
          Puur osmosewater heeft een pH van 6,0-7,0. Dit heeft twee oorzaken:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
          <li>Het RO-membraan verwijdert bicarbonaten en carbonaten. Dit zijn de bufferstoffen die normaal de pH van water verhogen en stabiel houden.</li>
          <li>Osmosewater absorbeert vrij snel CO2 uit de lucht, wat koolzuur vormt (H2CO3) en de pH verder verlaagt naar 6,0-6,5.</li>
        </ol>
        <p className="text-gray-700 mb-4">
          In de meeste gevallen is dit geen probleem voor gezondheid. Maar als uw woning koperen of loden leidingen heeft, of als u osmosewater door de huisleiding verdeelt, is het verstandig om de pH te verhogen met een remineralisatiecartridge. Deze voegt calciumcarbonaat toe en verhoogt de pH naar 7,0-7,5.
        </p>
        <p className="text-gray-700 mb-6">
          Meer over osmosewater leest u op de pagina{' '}
          <Link href="/osmose-water" className="text-[#005F8A] underline">osmosewater uitleg</Link> en{' '}
          <Link href="/osmose-water/gezondheid" className="text-[#005F8A] underline">osmosewater en gezondheid</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          pH meten thuis: drie methoden
        </h2>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#E0F2FE] text-[#003F5C] text-xs font-bold px-2 py-1 rounded">Optie 1</span>
              <h3 className="font-semibold text-[#003F5C]">pH-teststrips (EUR 5-15)</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Dip een strip 1 seconde in het water en vergelijk de kleur direct daarna met de kleurenkaart. Nauwkeurigheid circa plus of min 0,5 pH. Geschikt voor een snelle indicatieve meting. Strips zijn gevoelig voor luchtvochtigheid; bewaar in afgesloten verpakking.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#E0F2FE] text-[#003F5C] text-xs font-bold px-2 py-1 rounded">Optie 2</span>
              <h3 className="font-semibold text-[#003F5C]">Kleurdruppeltest (EUR 10)</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Voeg een druppel pH-indicator toe aan een watermonsterglas en vergelijk de kleur met de meegeleverde kaart. Nauwkeurigheid vergelijkbaar met strips. Eenvoudig te gebruiken zonder apparatuur.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#E0F2FE] text-[#003F5C] text-xs font-bold px-2 py-1 rounded">Optie 3</span>
              <h3 className="font-semibold text-[#003F5C]">Digitale pH-meter (EUR 20-50)</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Meest nauwkeurig (plus of min 0,1 pH). Kalibreer de meter voor gebruik met pH-bufferoplossing (pH 7,0 en pH 4,0). Dip de elektrode 30 seconden in het water. Bewaar de elektrode in bewaarvloeistof om uitdroging te voorkomen. Vervang de elektrode na 1-2 jaar.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer moet u actie ondernemen?
        </h2>
        <div className="bg-[#E0F2FE] rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-[#003F5C] mb-2">Actieschema op basis van pH-meting</h3>
          <ul className="text-gray-700 text-sm space-y-2">
            <li><strong>pH 7,0-9,5 (leidingwater):</strong> normaal, geen actie nodig</li>
            <li><strong>pH &lt;7,0 (leidingwater):</strong> neem contact op met uw waterbedrijf. Dit is een wettelijke overtreding.</li>
            <li><strong>pH 6,0-7,0 (osmosewater):</strong> normaal voor osmose. Voeg remineralisatiecartridge toe bij gebruik in huis met metalen leidingen.</li>
            <li><strong>pH &lt;6,0 (osmosewater):</strong> membraan mogelijk defect of CO2-verzadiging. Controleer het systeem.</li>
          </ul>
        </div>

        <p className="text-gray-700 mb-6">
          Bij woningen met loodleidingen en pH-problemen is een osmosefilter de meest effectieve oplossing: het verwijdert meer dan 97% van lood ongeacht de pH. Meer lezen over hardheid en kwaliteit van leidingwater:{' '}
          <Link href="/kraanwater/hardheid" className="text-[#005F8A] underline">kraanwater hardheid</Link> en{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/alkalisch-water/gezondheid" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Alkalisch water en gezondheid</h3>
            <p className="text-sm text-gray-600">Wat zegt de wetenschap over alkalisch water en pH-waarde?</p>
          </Link>
          <Link href="/osmose-water/ph" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">pH van osmosewater</h3>
            <p className="text-sm text-gray-600">Waarom osmosewater een lage pH heeft en wat dat betekent.</p>
          </Link>
          <Link href="/stoffen-in-drinkwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater</h3>
            <p className="text-sm text-gray-600">Overzicht van alle stoffen die in drinkwater kunnen voorkomen.</p>
          </Link>
          <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</h3>
            <p className="text-sm text-gray-600">Wettelijke normen voor drinkwaterkwaliteit in Nederland.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over pH van kraanwater</h2>
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
          <Link href="/kraanwater" className="text-[#005F8A] underline">kraanwater kwaliteit</Link>,{' '}
          <Link href="/kraanwater/hardheid" className="text-[#005F8A] underline">kraanwater hardheid</Link>,{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link> en{' '}
          <Link href="/alkalisch-water" className="text-[#005F8A] underline">alkalisch water</Link>.
        </p>
      </main>
    </>
  );
}
