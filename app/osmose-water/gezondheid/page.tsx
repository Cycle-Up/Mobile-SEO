import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Is osmosewater gezond? Mineralen, WHO-advies en dagelijks gebruik',
  description:
    'Is osmosewater ongezond omdat het mineralen mist? De WHO adviseert minimaal Ca 30 mg/L in drinkwater. Leer wanneer osmosewater gezond is en wanneer remineralisatie nodig is.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/gezondheid' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is osmosewater ongezond doordat het geen mineralen bevat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater is niet ongezond voor de meeste volwassenen met een gevarieerde voeding. Circa 80 procent van calcium en magnesium wordt via voeding opgenomen, niet via water. EFSA bevestigde in 2022 dat er geen bewijs is voor gezondheidsschade bij kortdurend gebruik van gedemineraliseerd water bij gezonde volwassenen. Voor langdurig dagelijks gebruik als enige drinkbron is een remineralisatiefilter of gevarieerde voeding met voldoende zuivel en groenten aanbevolen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat adviseert de WHO over de mineralengehalten in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De WHO publiceerde in 2011 richtlijnen en bevestigde deze in 2022: voor drinkwater dat als primaire bron dient wordt minimaal calcium 30 mg/L, magnesium 10 mg/L en een totaal TDS van meer dan 100 mg/L aanbevolen. Puur osmosewater heeft een TDS van slechts 1 tot 20 mg/L en zit ver onder deze waarden. Met een remineralisatiecartridge (circa 15 tot 35 euro per jaar) is het TDS eenvoudig op te hogen naar 80 tot 200 mg/L, ruim boven de WHO-aanbeveling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mag ik een baby voeden met osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pure osmosewater zonder remineralisatie wordt afgeraden voor de bereiding van flesvoeding voor zuigelingen. Baby\'s zijn volledig afhankelijk van flesvoeding als voedingsbron en kunnen bij gebruik van gedemineraliseerd water een calciumtekort oplopen als de voeding zelf ook onvoldoende mineralen levert. Gebruik voor babyvoeding water dat voldoet aan de normen voor babywater: laag nitraat, laag natrium, TDS bij voorkeur 50 tot 200 mg/L. Met remineralisatiefilter is osmosewater geschikt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe voeg ik mineralen terug aan osmosewater toe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er zijn drie praktische methoden voor remineralisatie van osmosewater: (1) een alkalische remineralisatiecartridge op het osmosesysteem die calciet en magnesiumoxide toevoegt, kosten circa 15 tot 35 euro per jaar; (2) mineraaltabletjes of -druppels toevoegen aan het water, flexibel maar duurder per liter; (3) osmosewater mengen met mineraalwater of leidingwater in een verhouding van 50 tot 50. De cartridge is de meest praktische en goedkoopste oplossing voor dagelijks gebruik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn sporters in het nadeel als ze osmosewater drinken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij intensieve inspanning verliezen sporters elektrolyten (natrium, kalium, magnesium) via transpiratie. Puur osmosewater bevat deze elektrolyten niet en is daardoor minder geschikt als exclusieve dorstlesser tijdens langdurige inspanning. Sporters doen er verstandig aan osmosewater aan te vullen met elektrolytentabs of een remineralisatiefilter te gebruiken. Bij normaal dagelijks gebruik en gevarieerde voeding is osmosewater ook voor sporters geen probleem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de bewezen voordelen van osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater verwijdert bewezen schadelijke stoffen: PFAS (meer dan 95 procent), lood (meer dan 97 procent), nitraat (meer dan 90 procent), hormonen en medicijnresten (meer dan 95 procent), zware metalen, microplastics en chloor. In gebieden met PFAS-belasting, woningen met loden leidingen of agrarische gebieden met verhoogd nitraat is osmosewater aantoonbaar gezonder dan ongefilterd leidingwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe vergelijkt osmosewater met mineraalwater in fles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Geremineraliseerd osmosewater (TDS 80 tot 200 mg/L) is vergelijkbaar met licht mineraalwater wat betreft mineralengehalte. Voordelen van osmosewater: geen plastic flessenafval, veel goedkoper (circa 0,01 euro per liter versus 0,50 tot 1,50 euro voor flessenwater), altijd vers, geen microplastics uit plastic flessen. Nadeel: vereist initieel een osmosefilterinstallatie van 300 tot 700 euro. Na 1 tot 2 jaar is de investering terugverdiend.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het TDS van osmosewater en is dat voldoende?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puur osmosewater direct na het membraan heeft een TDS van 1 tot 20 mg/L, afhankelijk van de kwaliteit van het membraan en het invoerwater. Dit is ver onder de WHO-aanbeveling van meer dan 100 mg/L voor drinkwater. Met een remineralisatiecartridge stijgt het TDS naar 80 tot 200 mg/L. Een TDS-meter (5 tot 15 euro) helpt u de kwaliteit van het membraan en de remineralisatie te controleren.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Is osmosewater gezond? Mineralen, WHO-advies en dagelijks gebruik',
  description:
    'Is osmosewater ongezond omdat het mineralen mist? De WHO adviseert minimaal Ca 30 mg/L in drinkwater. Leer wanneer osmosewater gezond is en wanneer remineralisatie nodig is.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/osmose-water/gezondheid',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseWaterGezondheidsPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Osmosewater', item: 'https://waterfilterplatform.nl/osmose-water' },
              { '@type': 'ListItem', position: 3, name: 'Is osmosewater gezond?', item: 'https://waterfilterplatform.nl/osmose-water/gezondheid' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/osmose-water" className="hover:underline">Osmosewater</Link> &rsaquo;{' '}
          <span>Is osmosewater gezond?</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Is osmosewater gezond? Mineralen, WHO-advies en dagelijks gebruik
          </h1>
          <p className="text-[#005F8A] text-lg">
            Osmosewater verwijdert bijna alle opgeloste stoffen, inclusief calcium en magnesium.
            Is dat schadelijk? De WHO geeft richtlijnen, de wetenschap nuanceert, en de praktijk
            voor de meeste Nederlanders is minder zorgwekkend dan vaak wordt beweerd.
          </p>
        </section>

        <QuickAnswer answer="Osmosewater is voor de meeste volwassenen met een gevarieerde voeding veilig en gezond. 80 procent van calcium en magnesium komt uit voeding, niet uit water. De WHO adviseert minimaal Ca 30 mg/L en TDS meer dan 100 mg/L. Met een remineralisatiefilter voldoet osmosewater ruim aan die norm." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat osmosewater verwijdert: de volledige lijst
        </h2>
        <p className="text-gray-700 mb-4">
          Een{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde-osmosefilter</Link>{' '}
          dwingt water door een membraan met porieen van 0,0001 micron. Dit is zo fijn dat vrijwel
          alle opgeloste stoffen worden tegengehouden, zowel schadelijke als onschadelijke:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="border border-red-200 bg-red-50 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-2">Schadelijke stoffen verwijderd</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>PFAS (meer dan 95%)</li>
              <li>Lood en zware metalen (meer dan 97%)</li>
              <li>Nitraat en nitriet (meer dan 90%)</li>
              <li>Pesticiden en herbiciden (meer dan 95%)</li>
              <li>Hormonen en medicijnresten (meer dan 95%)</li>
              <li>Microplastics (meer dan 99%)</li>
              <li>Bacterien en virussen (meer dan 99%)</li>
              <li>Chloor en chloramine</li>
            </ul>
          </div>
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-800 mb-2">Nuttige stoffen ook verwijderd</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>Calcium (Ca) &mdash; min. 30 mg/L aanbevolen</li>
              <li>Magnesium (Mg) &mdash; min. 10 mg/L aanbevolen</li>
              <li>Natrium (Na)</li>
              <li>Kalium (K)</li>
              <li>Bicarbonaat (HCO3&minus;)</li>
              <li>Fluor (in gebieden met fluoridering)</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-700 mb-6">
          Het verwijderen van nuttige mineralen is de reden voor de discussie over de gezondheid
          van osmosewater. Om dit goed te beoordelen, moet u weten hoeveel mineralen we
          daadwerkelijk uit water halen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Mineralen uit water: hoeveel missen we echt?
        </h2>
        <p className="text-gray-700 mb-4">
          Water is voor de meeste mensen een <strong>marginale mineralenbron</strong>. De
          Europese Voedselautoriteit (EFSA) en de WHO zijn eensluidend: de overgrote meerderheid
          van calcium en magnesium komt uit voeding, niet uit drinkwater:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Calcium:</strong> zuivelproducten, groene bladgroenten, noten en peulvruchten
            leveren samen meer dan 80 procent van de dagelijkse calciumbehoefte (1000&ndash;1200 mg/dag
            voor volwassenen). Zelfs hard leidingwater (150 mg/L) levert bij 2 liter per dag
            slechts 300 mg calcium, ofwel 25 procent van de dagelijkse behoefte.
          </li>
          <li>
            <strong>Magnesium:</strong> noten, zaden, volkorengranen en groene groenten zijn
            de primaire magnesiumbronnen. De dagelijkse behoefte is 300&ndash;400 mg; water
            levert ook hierbij hooguit 10 tot 20 procent.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          EFSA bevestigde in haar 2022-rapport dat er geen bewijs is voor gezondheidsschade bij
          kortdurend gebruik van gedemineraliseerd water bij gezonde volwassenen met een
          evenwichtige voeding. Dit nuanceert de WHO-richtlijn sterk voor de gemiddelde Nederlander.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          WHO-richtlijnen: Ca 30 mg/L en TDS &gt; 100 mg/L
        </h2>
        <p className="text-gray-700 mb-4">
          De WHO publiceerde in 2011 specifieke aanbevelingen voor mineralengehalten in drinkwater,
          bevestigd in 2022:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Parameter</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">WHO minimum</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Puur osmosewater</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Osmose + remineralisatie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Calcium (Ca)</td>
                <td className="border border-gray-300 px-3 py-2">30 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">0&ndash;2 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">30&ndash;80 mg/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Magnesium (Mg)</td>
                <td className="border border-gray-300 px-3 py-2">10 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">0&ndash;1 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">10&ndash;30 mg/L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">TDS</td>
                <td className="border border-gray-300 px-3 py-2">&gt;100 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">1&ndash;20 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">80&ndash;200 mg/L</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Meer over remineralisatie leest u op onze pagina{' '}
          <Link href="/osmose-water/remineraliseren" className="text-[#005F8A] underline">osmosewater remineraliseren</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Risicogroepen: voor wie is osmosewater zonder remineralisatie minder geschikt?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor de meeste gezonde volwassenen met een gevarieerde voeding is puur osmosewater geen
          probleem. Echter, voor bepaalde groepen is voorzichtigheid geboden of is remineralisatie
          sterk aanbevolen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Baby&apos;s en zuigelingen:</strong> baby&apos;s die volledig afhankelijk zijn van
            flesvoeding bereid met gedemineraliseerd osmosewater lopen een risico op
            calciumtekort als de voeding zelf ook onvoldoende mineralen levert. Voor
            babywater is een lage nitraatconcentratie en een TDS van 50 tot 200 mg/L
            aanbevolen. Zie ook onze pagina over{' '}
            <Link href="/osmose-water/remineraliseren" className="text-[#005F8A] underline">osmosewater remineraliseren</Link>.
          </li>
          <li>
            <strong>Beroepssporters:</strong> bij intensieve training verliezen sporters
            elektrolyten (natrium, kalium, magnesium) via zweet. Puur osmosewater bevat
            deze niet en volstaat niet als exclusieve hydratatiebron tijdens langdurige
            inspanning. Elektrolytentabs of geremineraliseerd water zijn beter geschikt.
          </li>
          <li>
            <strong>Ouderen met verminderde eetlust:</strong> ouderen die minder eten hebben
            minder mogelijkheid om mineralentekorten via voeding te compenseren. Een
            remineralisatiefilter is hier zinvol als extra zekerheid.
          </li>
          <li>
            <strong>Mensen met eenzijdig dieet:</strong> bij een voeding die weinig zuivel,
            groenten en noten bevat, draagt water relatief meer bij aan de mineralenbalans.
            In dat geval is geremineraliseerd osmosewater te prefereren.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosewater vs mineraalwater vs bronwater: mineralenvergelijking
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Watertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Ca (mg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Mg (mg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">TDS (mg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Puur osmosewater</td>
                <td className="border border-gray-300 px-3 py-2">0&ndash;2</td>
                <td className="border border-gray-300 px-3 py-2">0&ndash;1</td>
                <td className="border border-gray-300 px-3 py-2">1&ndash;20</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0,01/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Osmose + remineralisatie</td>
                <td className="border border-gray-300 px-3 py-2">30&ndash;80</td>
                <td className="border border-gray-300 px-3 py-2">10&ndash;30</td>
                <td className="border border-gray-300 px-3 py-2">80&ndash;200</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0,02/L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Leidingwater NL (gemiddeld)</td>
                <td className="border border-gray-300 px-3 py-2">60&ndash;120</td>
                <td className="border border-gray-300 px-3 py-2">5&ndash;15</td>
                <td className="border border-gray-300 px-3 py-2">150&ndash;400</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0,001/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Bronwater (Spa Blauw)</td>
                <td className="border border-gray-300 px-3 py-2">5</td>
                <td className="border border-gray-300 px-3 py-2">1</td>
                <td className="border border-gray-300 px-3 py-2">33</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0,50&ndash;1,00/L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Mineraalwater (Spa Rood)</td>
                <td className="border border-gray-300 px-3 py-2">60</td>
                <td className="border border-gray-300 px-3 py-2">5</td>
                <td className="border border-gray-300 px-3 py-2">260</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0,50&ndash;1,50/L</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Een uitgebreide vergelijking leest u op{' '}
          <Link href="/osmose-water/vs-mineraalwater" className="text-[#005F8A] underline">osmosewater versus mineraalwater</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De oplossing: remineralisatiefilter of gevarieerde voeding
        </h2>
        <p className="text-gray-700 mb-4">
          Er zijn twee eenvoudige manieren om de mineralenbalans te herstellen bij gebruik van
          osmosewater als dagelijkse drinkwaterbron:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-3">
          <li>
            <strong>Remineralisatiecartridge:</strong> een alkalische remineralisatiecartridge
            wordt na het RO-membraan geplaatst en voegt calciumcarbonaat en magnesiumoxide toe.
            Het TDS stijgt naar 80 tot 200 mg/L. Kosten: 15 tot 35 euro per jaar. Dit is de
            meest praktische en kosteneffectieve oplossing.
          </li>
          <li>
            <strong>Gevarieerde voeding:</strong> dagelijks zuivelproducten (yoghurt, kaas, melk),
            groene bladgroenten (boerenkool, broccoli), noten (amandelen, cashews) en volkoren
            granen leveren ruimschoots de aanbevolen calcium- en magnesiuminname, ongeacht
            het soort drinkwater.
          </li>
        </ol>
        <p className="text-gray-700 mb-6">
          Meer over de verschillende remineralisatieopties leest u op{' '}
          <Link href="/osmose-water/remineraliseren" className="text-[#005F8A] underline">osmosewater remineraliseren: methoden en kosten</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over osmosewater en gezondheid
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
          <Link href="/osmose-water/remineraliseren" className="text-[#005F8A] underline">osmosewater remineraliseren</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/osmose-water/vs-mineraalwater" className="text-[#005F8A] underline">osmose vs mineraalwater</Link> en{' '}
          <Link href="/osmose-water" className="text-[#005F8A] underline">alle osmosewater-informatie</Link>.
        </p>
      </main>
    </>
  );
}
