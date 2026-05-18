import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kalium in leidingwater: normen, gezondheid en waterontharder met KCl',
  description:
    'Kalium (K) in leidingwater is van nature aanwezig in kleine hoeveelheden (1-15 mg/L). KCl als alternatief voor NaCl in waterontharders verhoogt het.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/kalium' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoeveel kalium zit er in Nederlands leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Nederlands leidingwater is kalium van nature aanwezig als K+-ion in concentraties van 1 tot 15 mg/L, afhankelijk van de regio en de waterbron. De gemiddelde kaliumconcentratie in Nederlands leidingwater bedraagt circa 8 mg/L. Er geldt in de EU geen specifieke wettelijke grenswaarde voor kalium in drinkwater, omdat de concentraties in leidingwater geen gezondheidsrisico vormen bij normale inname.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is kalium in leidingwater gevaarlijk voor de gezondheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kalium in leidingwater is bij normale concentraties (1-15 mg/L) niet gevaarlijk voor gezonde mensen. De aanbevolen dagelijkse inname van kalium voor volwassenen is 3.500 mg per dag (WHO en EFSA). Leidingwater levert slechts 3-45 mg per dag, wat overeenkomt met 1 tot 1,3% van de dagbehoefte. Voor mensen met ernstige nierinsufficiency kan zelfs een lichte verhoging van kalium problematisch zijn; overleg dan altijd met een arts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is KCl en waarom wordt het gebruikt in waterontharders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KCl staat voor kaliumchloride, een zout dat als alternatief voor gewoon keukenzout (NaCl) kan worden gebruikt in waterontharders. Bij het regeneratieproces van de harskolom worden calcium- en magnesiumionen uitgewisseld tegen kaliumionen (bij KCl) of natriumionen (bij NaCl). Het voordeel van KCl is dat het natrium-gehalte in het verzachte water niet stijgt, wat gunstig is voor mensen op een natriumarm dieet. KCl kost doorgaans 2 tot 4 keer meer dan NaCl.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel kalium voegt een KCl-waterontharder toe aan drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een waterontharder die KCl gebruikt verhoogt het kaliumgehalte van het verzachte water met 15 tot 60 mg/L, afhankelijk van de waterhardheid en het zoutverbruik. Dit is nog steeds een fractie van de aanbevolen dagelijkse inname van 3.500 mg/dag. Voor de meeste gezonde mensen vormt dit geen probleem. Bij nieraandoeningen of medicijngebruik (bijv. ACE-remmers of kaliumsparende diuretica) is overleg met een arts noodzakelijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer is een KCl-waterontharder een goede keuze?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KCl als regeneratiezout is een goede keuze voor huishoudens waar een of meer bewoners een natriumarm dieet volgen vanwege hart- en vaatziekten of hypertensie. Ook mensen die het natrium-gehalte in drinkwater willen minimaliseren zonder een osmosefilter te plaatsen kunnen KCl overwegen. Let op de hogere kosten van KCl ten opzichte van NaCl. Raadpleeg bij twijfel een arts of dietist.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter kalium uit leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een omgekeerde osmosefilter verwijdert 90 tot 95% van het kalium in leidingwater, evenals vrijwel alle andere opgeloste ionen. Het geproduceerde osmosewater bevat slechts 0,5 tot 1,5 mg/L kalium. Remineralisatiefilters die na het osmosemembraan worden geplaatst voegen calcium en magnesium toe aan het water maar herstellen het kalium-gehalte niet. Voor kaliumsuppletie dient u te vertrouwen op voedingsbronnen zoals bananen, aardappelen en tomaten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een KCl-waterontharder veilig bij nierinsufficiency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, een KCl-waterontharder is NIET veilig bij chronische nierinsufficiency zonder medisch advies. Gezonde nieren scheiden kalium efficient uit, maar bij nierinsufficiency kan een verhoogde kaliumopname leiden tot hyperkaliemie (te hoog kaliumgehalte in het bloed). Hyperkaliemie is een levensgevaarlijke aandoening die hartritmestoornissen kan veroorzaken. Patienten met chronische nierziekte moeten altijd een nefroloog raadplegen voor het gebruik van een KCl-ontharder.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Kalium in leidingwater: normen, gezondheid en waterontharder met KCl',
  description:
    'Kalium (K) in leidingwater is van nature aanwezig in kleine hoeveelheden. KCl als alternatief voor NaCl in waterontharders verhoogt het kaliumgehalte.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/leidingwater/kalium',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function LeidingwaterKaliumPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Leidingwater', item: 'https://waterfilterplatform.nl/leidingwater' },
              { '@type': 'ListItem', position: 3, name: 'Kalium in leidingwater', item: 'https://waterfilterplatform.nl/leidingwater/kalium' },
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
          <span>Kalium in leidingwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Kalium in leidingwater: normen, gezondheid en waterontharder met KCl
          </h1>
          <p className="text-[#005F8A] text-lg">
            Kalium is een essentieel mineraal dat van nature voorkomt in leidingwater in kleine
            concentraties. Het gebruik van kaliumchloride (KCl) als zouttabletten in een
            waterontharder verhoogt het kaliumgehalte, maar heeft voor de meeste mensen
            geen gezondheidseffect. Lees over normen, KCl versus NaCl en wanneer voorzichtigheid
            geboden is.
          </p>
        </section>

        <QuickAnswer answer="Kalium in Nederlands leidingwater bedraagt gemiddeld 8 mg/L (1-15 mg/L), ver onder de aanbevolen dagelijkse inname van 3.500 mg. Er is geen EU-grenswaarde. Een KCl-waterontharder verhoogt dit met 15-60 mg/L. Bij nierinsufficiency is KCl gevaarlijk zonder medisch advies." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kalium in leidingwater: wat is het?
        </h2>
        <p className="text-gray-700 mb-4">
          Kalium (K) is een alkali-metaal dat van nature voorkomt in de aardkorst en oplost in
          grondwater als het kaliumion (K+). In Nederlands leidingwater is de concentratie
          doorgaans laag: <strong>1 tot 15 mg/L</strong>, met een gemiddelde van circa 8 mg/L.
          Dit is aanzienlijk lager dan de concentraties van calcium (20-100 mg/L) en natrium
          (10-50 mg/L) in leidingwater.
        </p>
        <p className="text-gray-700 mb-6">
          De <strong>Europese drinkwaterrichtlijn (2020/2184)</strong> stelt geen specifieke
          maximumgrens voor kalium in drinkwater. De WHO heeft evenmin een richtwaarde vastgesteld,
          omdat de concentraties in leidingwater wereldwijd ruimschoots onder het niveau liggen
          dat gezondheidsproblemen zou kunnen veroorzaken bij gezonde personen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kalium en gezondheid: aanbevolen dagelijkse inname
        </h2>
        <p className="text-gray-700 mb-4">
          Kalium is een essentieel voedingsstof dat een sleutelrol speelt in:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>De regulatie van de bloeddruk (kalium werkt bloeddrukverlagend)</li>
          <li>Het functioneren van spieren, inclusief het hart</li>
          <li>De zenuwgeleiding</li>
          <li>Het handhaven van de vochtbalans in cellen</li>
        </ul>
        <p className="text-gray-700 mb-4">
          De WHO en EFSA (European Food Safety Authority) bevelen een dagelijkse inname aan van
          <strong> 3.500 mg kalium per dag</strong> voor volwassenen. Leidingwater levert hier
          slechts een minimale bijdrage aan:
        </p>
        <div className="bg-[#E0F2FE] rounded-lg p-5 mb-6">
          <p className="text-[#003F5C] font-semibold mb-2">Bijdrage leidingwater aan kaliuminname</p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>Gemiddelde kaliumconcentratie leidingwater: 8 mg/L</li>
            <li>Gemiddelde waterinname per dag: 2 liter</li>
            <li>Kalium uit leidingwater: 8 mg/L &times; 2 L = <strong>16 mg/dag</strong></li>
            <li>Percentage van dagbehoefte: 16 / 3.500 = <strong>minder dan 0,5%</strong></li>
          </ul>
        </div>
        <p className="text-gray-700 mb-6">
          Voeding is verreweg de belangrijkste bron van kalium. Rijke voedselbronnen zijn:
          bananen (358 mg/100g), aardappelen (421 mg/100g), tomaten (237 mg/100g), spinazie
          (558 mg/100g) en witte bonen (1.185 mg/100g).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          KCl als alternatief voor NaCl in waterontharders
        </h2>
        <p className="text-gray-700 mb-4">
          Waterontharders werken via ionenwisseling: calcium (Ca2+) en magnesium (Mg2+) worden
          uitgewisseld tegen ionen uit het regeneratiezout. Traditioneel wordt hiervoor
          natriumchloride (NaCl, keukenzout) gebruikt, waardoor het natrium-gehalte in het
          verzachte water stijgt.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Kaliumchloride (KCl)</strong> is een alternatief regeneratiezout waarbij
          calcium en magnesium worden vervangen door kalium in plaats van natrium. Dit heeft
          de volgende consequenties voor de waterkwaliteit:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Parameter</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Leidingwater (NL gem.)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Na NaCl-ontharder</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Na KCl-ontharder</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Kalium (K)</td>
                <td className="border border-gray-300 px-3 py-2">8 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">8 mg/L (geen verandering)</td>
                <td className="border border-gray-300 px-3 py-2">23&ndash;70 mg/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Natrium (Na)</td>
                <td className="border border-gray-300 px-3 py-2">20 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">+50&ndash;200 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">20 mg/L (geen verandering)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Hardheid (Ca+Mg)</td>
                <td className="border border-gray-300 px-3 py-2">10&ndash;25 dH</td>
                <td className="border border-gray-300 px-3 py-2">1&ndash;3 dH (zacht)</td>
                <td className="border border-gray-300 px-3 py-2">1&ndash;3 dH (zacht)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          Voordelen van KCl-zout
        </h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Geen stijging van het natriumgehalte in het drinkwater &mdash; gunstig voor mensen met hypertensie of op een natriumarm dieet</li>
          <li>Kalium is bloeddrukverlagend; een lichte stijging is bij gezonde mensen zelfs positief</li>
          <li>Zelfde ontharderwerking als NaCl: gelijkwaardige kalkverwijdering</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-4 mb-3">
          Nadelen van KCl-zout
        </h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>KCl kost 2 tot 4 keer meer dan NaCl-tabletten</li>
          <li>Niet geschikt voor mensen met nierinsufficiency (zie waarschuwing hieronder)</li>
          <li>Bij sommige oudere ontharders minder efficient dan NaCl; raadpleeg de fabrikant</li>
        </ul>

        <div className="bg-red-50 border border-red-300 rounded-lg p-5 mb-6">
          <h3 className="text-lg font-bold text-red-800 mb-2">
            Waarschuwing: KCl bij nierinsufficiency
          </h3>
          <p className="text-red-700 text-sm">
            Bij chronische nierziekte (stadium 3 of hoger) is de nierfiltratie zodanig verminderd
            dat het lichaam kalium onvoldoende kan uitscheiden. Een verhoogd kalium in drinkwater
            kan dan leiden tot <strong>hyperkaliemie</strong> (te hoog kaliumgehalte in het bloed),
            een potentieel levensgevaarlijke aandoening die hartritmestoornissen veroorzaakt.
            Gebruik <strong>GEEN KCl-waterontharder</strong> bij chronische nierziekte zonder
            uitdrukkelijk advies van een nefroloog. Dit geldt ook voor mensen die bepaalde
            medicijnen gebruiken die het kaliumgehalte verhogen (ACE-remmers, kaliumsparende
            diuretica zoals spironolacton).
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer KCl kiezen?
        </h2>
        <p className="text-gray-700 mb-4">
          KCl als regeneratiezout is een verstandige keuze in de volgende situaties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Hart- en vaatpatienten op een natriumarm dieet die ook zacht water willen</li>
          <li>Huishoudens die het natriumgehalte in drinkwater willen beperken zonder een osmosefilter te plaatsen</li>
          <li>Mensen met hypertensie die bewust hun natriumconsumptie verlagen</li>
          <li>Situaties waar de extra kostprijs van KCl opweegt tegen het gezondheidsvoordeel</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kalium en osmosefilters
        </h2>
        <p className="text-gray-700 mb-4">
          Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmosefilter</Link>{' '}
          verwijdert 90 tot 95% van het kalium in leidingwater. Het osmosewater bevat
          slechts 0,5 tot 1,5 mg/L kalium. Dit is volledig onschadelijk en heeft geen meetbaar
          effect op de kaliumstatus van gezonde personen.
        </p>
        <p className="text-gray-700 mb-4">
          Remineralisatiefilters die achter een osmosemembraan worden geplaatst voegen doorgaans
          calcium (Ca2+) en magnesium (Mg2+) toe aan het water om de smaak te verbeteren en de
          mineralenbalans te herstellen. Kalium wordt hierbij <strong>niet</strong> hersteld.
          De dagelijkse behoefte aan kalium wordt uitsluitend gedekt door voeding.
        </p>
        <p className="text-gray-700 mb-6">
          Wilt u meer weten over welke stoffen een osmosefilter verwijdert? Bekijk onze
          pagina over{' '}
          <Link href="/waterfilter/vergelijken" className="text-[#005F8A] underline">
            waterfilter vergelijken
          </Link>{' '}
          voor een overzicht van verwijderingspercentages per filtertype.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: kalium in context
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Bron</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kaliumgehalte</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Bijdrage aan dagbehoefte</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Leidingwater NL (gem. 8 mg/L, 2L/dag)</td>
                <td className="border border-gray-300 px-3 py-2">16 mg/dag</td>
                <td className="border border-gray-300 px-3 py-2">&lt;0,5%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">KCl-ontharder water (2L/dag, 40 mg/L)</td>
                <td className="border border-gray-300 px-3 py-2">80 mg/dag</td>
                <td className="border border-gray-300 px-3 py-2">2,3%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">1 banaan (118g)</td>
                <td className="border border-gray-300 px-3 py-2">422 mg</td>
                <td className="border border-gray-300 px-3 py-2">12%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">100g aardappelen (gekookt)</td>
                <td className="border border-gray-300 px-3 py-2">379 mg</td>
                <td className="border border-gray-300 px-3 py-2">11%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Aanbevolen dagelijkse inname (volwassenen)</td>
                <td className="border border-gray-300 px-3 py-2">3.500 mg/dag</td>
                <td className="border border-gray-300 px-3 py-2">100% (doel)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over kalium in leidingwater
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
          <Link href="/waterfilter/vergelijken" className="text-[#005F8A] underline">waterfilters vergelijken</Link>,{' '}
          <Link href="/waterfilter/zout" className="text-[#005F8A] underline">waterontharder zout kiezen</Link>,{' '}
          <Link href="/onderhoud/waterontharder-zout" className="text-[#005F8A] underline">zoutverbruik waterontharder</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>
      </main>
    </>
  );
}
