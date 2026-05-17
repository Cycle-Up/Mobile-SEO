import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosewater voor babyvoeding: WHO-richtlijnen en remineralisatie',
  description:
    'Osmosewater is geschikt voor babyvoeding mits de juiste mineraalsamenstelling. WHO adviseert maximaal 200 mg/L TDS voor babywater. Bij osmosewater (TDS 5-30).',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/baby' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is osmosewater veilig voor de voeding van een baby?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater is veilig voor babyvoeding mits het voorzien is van een remineralisatiefilter. Puur osmosewater heeft een TDS van 5-30 mg/L, wat betekent dat calcium en magnesium vrijwel volledig afwezig zijn. Dit is op zichzelf niet direct schadelijk, maar suboptimaal voor de mineraalinname van de baby. Met een remineralisatiefilter wordt de TDS verhoogd naar 80-120 mg/L met een gezonde calcium- en magnesiumverhouding, wat ideaal is voor babyvoeding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de WHO-richtlijnen voor water bij babyvoeding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De Wereldgezondheidsorganisatie (WHO) adviseert voor water dat gebruikt wordt bij het aanmaken van zuigelingenvoeding: TDS maximaal 200 mg/L, nitraat maximaal 10 mg/L, natrium maximaal 20 mg/L, calcium bij voorkeur 20-60 mg/L en magnesium 5-20 mg/L. Osmosewater met remineralisatiefilter voldoet aan al deze criteria. Puur leidingwater in de meeste Nederlandse regio\'s voldoet ook aan de WHO-criteria.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is een gevaarlijk nitraatgehalte voor baby\'s?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nitraat is gevaarlijk voor zuigelingen jonger dan zes maanden bij concentraties boven 10 mg/L (WHO-grens voor babywater) of 50 mg/L (EU-drinkwaternorm voor volwassenen). Hoge nitraatniveaus kunnen methemoglobinemie veroorzaken: een aandoening waarbij hemoglobine minder zuurstof kan transporteren, ook wel het blauwe baby syndroom genoemd. In agrarische gebieden van Brabant en Zeeland kunnen grondwaterputten nitraatconcentraties boven 10 mg/L hebben.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heeft osmosewater voor baby\'s een remineralisatiefilter nodig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een remineralisatiefilter wordt sterk aanbevolen maar is niet strikt noodzakelijk. Puur osmosewater mist calcium en magnesium, maar baby\'s die borstvoeding of volledige flesvoeding krijgen, ontvangen voldoende mineralen via de voeding zelf. Bij het aanmaken van poedermelk met osmosewater zonder remineralisatie ontbreekt de mineraalbijdrage vanuit het water. Een calciet + magnesiumoxide remineralisatiefilter is de eenvoudigste oplossing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik leidingwater koken voor babyvoeding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het Consultatiebureau adviseert water te koken voor babyvoeding tot de baby zes weken oud is. Dit advies is bedoeld voor hygiëne, niet voor het verlagen van nitraatgehaltes. Koken vernietigt bacteriën maar concentreert nitraat juist, omdat water verdampt. Na zes weken is in de meeste regio\'s Nederlands leidingwater zonder koken veilig voor babyvoeding. Vraag uw drinkwaterbedrijf naar de lokale nitraatwaarden als u in een agrarisch gebied woont.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is beter: commercieel babywater of osmosewater met remineralisatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater met een goed afgesteld remineralisatiefilter is minstens gelijkwaardig aan commercieel babywater en in sommige opzichten beter. Commercieel babywater heeft een TDS van 100-200 mg/L en voldoet aan de WHO-normen. Osmose met remineralisatie biedt meer controle over de mineraalsamenstelling, is duurzamer (geen plastic flesjes) en goedkoper op de lange termijn. Het nadeel is de hogere aanschafprijs van het filtersysteem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke TDS-waarde is ideaal voor water voor babyvoeding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De WHO adviseert een maximale TDS van 200 mg/L voor water bij zuigelingenvoeding. Er is geen officieel minimum, maar een TDS van 80-150 mg/L wordt als ideaal beschouwd. Dit garandeert een adequate aanvoer van calcium en magnesium via het water en belast de nieren van de baby niet. Puur osmosewater met TDS 5-30 mg/L valt ruim onder dit ideale bereik; met remineralisatiefilter behaalt u doorgaans een TDS van 80-120 mg/L.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosewater voor babyvoeding: WHO-richtlijnen en remineralisatie',
  description:
    'Osmosewater is geschikt voor babyvoeding mits de juiste mineraalsamenstelling. WHO adviseert maximaal 200 mg/L TDS. Bij osmosewater is remineralisatie aan te.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/osmose-water/baby',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseWaterBabyPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Osmose water', item: 'https://waterfilterplatform.nl/osmose-water' },
              { '@type': 'ListItem', position: 3, name: 'Osmosewater voor baby', item: 'https://waterfilterplatform.nl/osmose-water/baby' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/osmose-water" className="hover:underline">Osmose water</Link> &rsaquo;{' '}
          <span>Osmosewater voor baby</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Osmosewater voor babyvoeding: WHO-richtlijnen en remineralisatie
          </h1>
          <p className="text-[#005F8A] text-lg">
            Water voor babyvoeding stelt hogere eisen dan water voor volwassenen. De nieren van een
            zuigeling zijn nog niet uitgerijpt en kunnen geen overschotten aan mineralen of nitraat
            verwerken. Osmosewater biedt uitstekende zuiverheid, maar heeft een remineralisatiefilter
            nodig om aan de WHO-richtlijnen voor babywater te voldoen.
          </p>
        </section>

        <QuickAnswer answer="Osmosewater is veilig voor babyvoeding mits aangevuld met een remineralisatiefilter (calciet + magnesiumoxide). Puur osmosewater heeft TDS 5-30 mg/L; na remineralisatie ca 80-120 mg/L, binnen de WHO-richtlijn van max 200 mg/L. Nitraat en natrium zijn in osmosewater verwaarloosbaar laag." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom water voor babyvoeding bijzonder is
        </h2>
        <p className="text-gray-700 mb-4">
          De nieren van een pasgeboren baby zijn functioneel maar nog niet volledig uitgerijpt.
          Ze kunnen pas op een leeftijd van ongeveer zes maanden mineraalconcentraties verwerken
          die vergelijkbaar zijn met die voor volwassenen. Dit heeft twee praktische gevolgen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Te hoge mineraalconcentraties zijn belastend:</strong> water met een hoge
            hoeveelheid natrium (&gt;20 mg/L) of een zeer hoge TDS (&gt;200 mg/L) belast de
            nierfunctie en kan bij langdurig gebruik schadelijk zijn.
          </li>
          <li>
            <strong>Nitraat is acuut gevaarlijk:</strong> nitraat (&gt;10 mg/L in babywater)
            wordt in het lichaam omgezet naar nitriet, dat hemoglobine blokkeert. Bij zuigelingen
            kan dit leiden tot methemoglobinemie, ook bekend als het blauwe baby syndroom.
            Dit is een medisch spoedgeval.
          </li>
          <li>
            <strong>Te lage mineralenconcentratie is suboptimaal:</strong> calcium en magnesium
            dragen bij aan de gezonde ontwikkeling van botten en zenuwstelsel. Water met TDS
            onder 50 mg/L levert geen noemenswaardige bijdrage aan de mineralenopname.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Dit maakt de waterkeuze voor babyvoeding genuanceerder dan voor volwassenen:
          niet alleen de maximumwaarden, maar ook de minimumwaarden voor calcium en magnesium
          zijn relevant.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          WHO-richtlijnen voor water bij zuigelingenvoeding
        </h2>
        <p className="text-gray-700 mb-4">
          De Wereldgezondheidsorganisatie (WHO) heeft specifieke richtlijnen gepubliceerd voor
          water dat wordt gebruikt bij het aanmaken van poedermelk en andere zuigelingenvoeding.
          De kerncriteria zijn:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Parameter</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">WHO-richtlijn babywater</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Puur osmosewater</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Osmose + remineralisatie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">TDS (totaal opgeloste stoffen)</td>
                <td className="border border-gray-300 px-3 py-2">Max 200 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">5&ndash;30 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">80&ndash;120 mg/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Nitraat</td>
                <td className="border border-gray-300 px-3 py-2">Max 10 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">&lt;1 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">&lt;1 mg/L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Natrium</td>
                <td className="border border-gray-300 px-3 py-2">Max 20 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">&lt;2 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">&lt;5 mg/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Calcium</td>
                <td className="border border-gray-300 px-3 py-2">20&ndash;60 mg/L (wenselijk)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;2 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">30&ndash;50 mg/L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Magnesium</td>
                <td className="border border-gray-300 px-3 py-2">5&ndash;20 mg/L (wenselijk)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;1 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">10&ndash;20 mg/L</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Uit de tabel blijkt dat puur osmosewater (zonder remineralisatie) op de nitraat- en
          natriumcriteria uitstekend scoort, maar de wenselijke calcium- en magnesiumwaarden
          niet behaalt. Met een remineralisatiefilter voldoet osmosewater aan alle WHO-criteria.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Nederlands leidingwater voor babyvoeding
        </h2>
        <p className="text-gray-700 mb-4">
          In de meeste Nederlandse regio&apos;s voldoet leidingwater aan de WHO-criteria voor
          babywater. De Nederlandse drinkwaternorm hanteert een nitraatgrens van 50 mg/L
          (EU-norm voor volwassenen), maar in de praktijk liggen de nitraatconcentraties in
          leidingwater van drinkwaterbedrijven doorgaans ruim onder 10 mg/L.
        </p>
        <p className="text-gray-700 mb-4">
          Uitzonderingen zijn regio&apos;s met een intensieve landbouw, met name in:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Noord-Brabant en Limburg:</strong> agrarische gebieden waar grondwater hogere
            nitraatconcentraties kan bevatten. Leidingwater van het drinkwaterbedrijf wordt
            behandeld en voldoet aan de normen, maar particuliere putten en buitenverblijven
            met eigen waterwinning vormen een risico.
          </li>
          <li>
            <strong>Zeeland en Groningen:</strong> specifieke gebieden met intensieve veeteelt
            waar grondwatermonitoring hogere nitraatwaarden laat zien.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Het Consultatiebureau adviseert water te koken voor babyvoeding tot de baby zes weken
          oud is. Dit advies geldt voor de hygiëne (vernietiging van bacteriën), niet voor het
          verlagen van nitraat. Koken concentreert nitraat juist doordat water verdampt.
          Controleer de waterkwaliteit in uw regio via de website van uw drinkwaterbedrijf.
          Lees meer over waterkwaliteit in ons artikel over{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">
            verontreinigingen in leidingwater
          </Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosewater en de TDS-waarde: waarom remineralisatie nodig is
        </h2>
        <p className="text-gray-700 mb-4">
          Een omgekeerde osmose filter verwijdert 95-99% van alle opgeloste stoffen uit water,
          inclusief calcium, magnesium, natrium en nitraat. Het resulterende osmosewater heeft
          een TDS van 5-30 mg/L, wat:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Ruim onder de WHO-maximumgrens van 200 mg/L valt &mdash; dat is positief</li>
          <li>Tegelijkertijd ver onder de wenselijke mineraalwaarden voor calcium en magnesium valt</li>
          <li>Een licht zure pH heeft (5,5-6,5) doordat bufferende koolzuurionen zijn verwijderd</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor babyvoeding waarbij water een deel van de mineralenopname verzorgt, is aanvulling
          via een remineralisatiefilter de meest praktische en goed controleerbare oplossing.
          Lees meer over hoe osmosefilters werken op onze pagina over{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">
            omgekeerde osmose
          </Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Remineralisatiefilter: hoe het werkt en wat het toevoegt
        </h2>
        <p className="text-gray-700 mb-4">
          Een remineralisatiefilter wordt geplaatst na het RO-membraan en voegt calcium en
          magnesium terug aan het water toe. De meest gebruikte vulling is een combinatie
          van <strong>calciet (calciumcarbonaat)</strong> en <strong>magnesiumoxide</strong>:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Calciet</strong> lost langzaam op in het water en verhoogt zowel de
            calciumconcentratie als de pH. Een calcietfilter brengt calcium op 30-50 mg/L
            en de pH op 7,0-7,5.
          </li>
          <li>
            <strong>Magnesiumoxide</strong> voegt magnesium toe aan het water. Na remineralisatie
            bereikt de magnesiumconcentratie doorgaans 10-20 mg/L.
          </li>
          <li>
            <strong>TDS na remineralisatie</strong> bedraagt circa 80-120 mg/L, ruim binnen
            de WHO-grens van 200 mg/L en in het ideale bereik voor babywater.
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          Remineralisatiefilters hebben een levensduur van 6-12 maanden afhankelijk van het
          waterverbruik. De filtermedia zijn relatief goedkoop (&euro;15-30 per vervanging).
          Raadpleeg onze uitgebreide pagina over{' '}
          <Link href="/osmose-water/remineralisatie" className="text-[#005F8A] underline">
            osmosewater remineralisatie
          </Link>{' '}
          voor installatiegids en filteraanbevelingen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Commercieel babywater versus osmosewater met remineralisatie
        </h2>
        <p className="text-gray-700 mb-4">
          Supermarkten verkopen specifiek water voor babyvoeding, zoals Evian of Spa Reine.
          Deze producten voldoen aan de WHO-normen voor babywater. Hoe verhoudt zich
          dit tot osmosewater met remineralisatie?
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aspect</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Commercieel babywater</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Osmose + remineralisatie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">TDS</td>
                <td className="border border-gray-300 px-3 py-2">100&ndash;200 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">80&ndash;120 mg/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Controle mineraalsamenstelling</td>
                <td className="border border-gray-300 px-3 py-2">Afhankelijk van bron (vast)</td>
                <td className="border border-gray-300 px-3 py-2">Instelbaar via filtertype</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Kosten (jaar)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;200&ndash;600 (flesjes)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;50&ndash;100 (filters) na aanschaf</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Milieu-impact</td>
                <td className="border border-gray-300 px-3 py-2">Plastic flesjes, transport</td>
                <td className="border border-gray-300 px-3 py-2">Geen plastic flesjes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Gemak</td>
                <td className="border border-gray-300 px-3 py-2">Direct beschikbaar, geen installatie</td>
                <td className="border border-gray-300 px-3 py-2">Altijd beschikbaar na eenmalige installatie</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktisch advies voor ouders
        </h2>
        <p className="text-gray-700 mb-4">
          Op basis van de beschikbare informatie gelden de volgende praktische aanbevelingen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Osmosewater met remineralisatiefilter</strong> is de beste keuze als u al
            een osmosefilter heeft of overweegt te installeren. De investering betaalt zich
            terug ten opzichte van commercieel babywater en is duurzamer.
          </li>
          <li>
            <strong>Nederlands leidingwater</strong> is in de meeste regio&apos;s geschikt voor
            babyvoeding na de aanbevolen kookperiode (tot 6 weken). Controleer de waterkwaliteit
            van uw drinkwaterbedrijf als u in een agrarisch gebied woont.
          </li>
          <li>
            <strong>Puur osmosewater zonder remineralisatie</strong> kan worden gebruikt als
            aanvullend vocht maar levert geen mineraalbijdrage. Voor de aanmaak van
            poedermelk is remineralisatie aan te bevelen.
          </li>
          <li>
            <strong>Commercieel babywater</strong> is een betrouwbare maar kostbare en
            milieubelastende optie voor ouders zonder osmosesysteem.
          </li>
        </ul>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over osmosewater voor baby
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
          <Link href="/osmose-water/remineralisatie" className="text-[#005F8A] underline">osmosewater remineralisatie</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/osmose-water/gezondheid" className="text-[#005F8A] underline">osmosewater en gezondheid</Link> en{' '}
          <Link href="/osmose-water" className="text-[#005F8A] underline">osmose water overzicht</Link>.
        </p>
      </main>
    </>
  );
}
