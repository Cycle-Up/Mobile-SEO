import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Putwater filteren: risico's, vereisten en beste waterfilters",
  description:
    "Putwater of bronwater thuis gebruiken? Leer over wettelijke status, verontreinigingsrisico's per regio, verplicht testen, aanbevolen filtersystemen en kosten",
  alternates: { canonical: 'https://waterfilterplatform.nl/putwater' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is putwater veilig om te drinken in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Putwater is niet automatisch veilig. In tegenstelling tot leidingwater valt putwater (eigen waterwinning) buiten het Drinkwaterbesluit. De eigenaar is zelf verantwoordelijk voor de kwaliteit. Bacteriën, nitraat en zware metalen zijn reële risico\'s, afhankelijk van de regio en bodemgesteldheid. Jaarlijks testen en filteren is sterk aanbevolen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk waterfilter heb ik nodig voor putwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dat hangt af van de verontreiniging in jouw put. Bacteriën alleen: UV-filter. Nitraat: omgekeerde osmose of ionenwisseling. IJzer en mangaan: ijzerfilter met sedimentprefilter. Complete aanpak: 5-traps omgekeerde osmose + UV-lamp. Laat eerst het water testen voordat je een filtersysteem kiest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe vaak moet ik mijn putwater laten testen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De WHO beveelt jaarlijks testen aan voor particuliere waterwinning. Bij een nieuwe put: uitgebreide basisanalyse (bacteriën, nitraat, metalen, pH, hardheid, PFAS). Daarna jaarlijks een verkort pakket (bacteriën, nitraat). Na hevige regenval of nabijgelegen activiteiten (bouw, landbouw) extra testen. Laboratoria rekenen €50–200 afhankelijk van het pakket.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke verontreinigingen komen voor in putwater in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Meest voorkomende verontreinigingen: nitraat in landbouwgebieden (Brabant, Achterhoek, Limburg), bacteriën en E.coli bij ondiepe putten of na hevige regen, ijzer en mangaan door bodemgesteldheid, hardheid (kalk) in kalkhoudende bodems, arseen in bepaalde kwelgebieden, en PFAS nabij industrieterreinen of defensiebases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik mijn put melden bij de gemeente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, in de meeste gemeenten is eigen waterwinning meldingsplichtig of vergunningsplichtig op basis van de Waterwet. De drempel varieert per provincie, maar onttrekkingen boven de 10 m³/uur zijn vrijwel altijd vergunningplichtig. Raadpleeg je gemeente of waterschap. Gebruik van putwater als drinkwater zonder melding is niet illegaal, maar wel op eigen risico.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter bacteriën uit putwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een RO-membraan verwijdert bacteriën voor 99%+, maar een UV-lamp is de veiligste aanvulling als bacteriologische besmetting een risico is. Gecombineerde systemen (5-traps osmose + UV nabehandeling) bieden de volledigste bescherming voor putwater met meerdere verontreinigingen tegelijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een filtersysteem voor putwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IJzerfilter (eenvoudig): €200–500. UV-desinfectie alleen: €150–400. 5-traps osmosefilter: €300–800. Osmose + UV combinatie: €500–1.200. Ionenwisselaar (nitraat): €400–900 professioneel. Jaarlijkse filterkosten: €50–150 afhankelijk van verbruik en watersamenstelling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik putwater gebruiken voor babyvoeding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uitsluitend als het water aan de normen van het Drinkwaterbesluit voldoet én dit aantoonbaar is via recente laboratoriumanalyse. Nitraat moet onder 10 mg/L zijn voor babyvoeding (WHO-richtlijn). Bacteriën mogen niet aanwezig zijn. Bij twijfel: gebruik gefilterd osmosewater met remineralisatie of flessenwater specifiek voor babyvoeding.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: "Putwater filteren: risico's, vereisten en beste waterfilters",
  description:
    "Putwater of bronwater thuis gebruiken? Leer over wettelijke status, verontreinigingsrisico's per regio, verplicht testen, aanbevolen filtersystemen en kosten",
  datePublished: '2026-04-01',
  dateModified: '2026-04-01',
  url: 'https://waterfilterplatform.nl/putwater',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function PutwaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Putwater filteren', item: 'https://waterfilterplatform.nl/putwater' },
            ],
          },
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <span>Putwater filteren</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Putwater filteren: risico&apos;s, vereisten en beste waterfilters
        </h1>

        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-gray-700 text-sm font-medium">
            <strong>Samenvatting:</strong> Putwater valt buiten het Drinkwaterbesluit — de eigenaar is volledig zelf verantwoordelijk voor de veiligheid. In Nederland hebben circa 200.000 huishoudens een eigen waterwinning. Jaarlijks testen en een passend filtersysteem zijn onmisbaar voor veilig gebruik als drinkwater.
          </p>
        </div>

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is putwater en bronwater in Nederland?
        </h2>
        <p className="text-gray-700 mb-4">
          In Nederland zijn circa 200.000 huishoudens — voornamelijk in landelijke gebieden — aangewezen op eigen waterwinning via een boorput, grondwaterput of bron. Dit water valt juridisch buiten het <strong>Drinkwaterbesluit</strong>: de overheid controleert de kwaliteit niet, en het waterleidingbedrijf is hier niet bij betrokken.
        </p>
        <p className="text-gray-700 mb-4">
          Als eigenaar ben jij volledig verantwoordelijk voor de waterkwaliteit. Dat betekent: zelf testen, zelf filteren en zelf melden als er problemen zijn. De risico&apos;s zijn afhankelijk van jouw regio, de diepte van de put en de nabijgelegen bodemactiviteiten.
        </p>
        <p className="text-gray-700 mb-6">
          Putwater is niet hetzelfde als bronwater uit flessen — dat wordt commercieel gewonnen en voldoet aan strenge EU-normen. Eigen putwater heeft géén automatische kwaliteitsgarantie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Typische verontreinigingsrisico&apos;s per regio
        </h2>
        <p className="text-gray-700 mb-4">
          De risico&apos;s in jouw put hangen sterk af van de regio en de bodemgesteldheid:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Landbouwgebieden (Brabant, Achterhoek, Gelderse Vallei, Limburg):</strong> Verhoogd nitraatgehalte door meststoffenuitspoeling. Waarden boven de EU-norm van 50 mg/L zijn hier geen uitzondering bij ondiepe putten.</li>
          <li><strong>Ondiepe putten algemeen:</strong> Bacteriën en E.coli door infiltratie van oppervlaktewater, mest of rioollekkages. Risico neemt toe na hevige regenval.</li>
          <li><strong>IJzer- en mangaanrijke bodems:</strong> Oost-Nederland en veengebieden. Bruinkleurig water, metaalsmaak, aanslag op apparaten.</li>
          <li><strong>Kalkrijke bodems (Zuid-Limburg, Zeeland):</strong> Hoge waterhardheid (kalk), schade aan apparatuur, kalkafzetting in leidingen.</li>
          <li><strong>Kwelgebieden en laagveengebieden:</strong> Arseen kan van nature aanwezig zijn in grondwater. Bepaalde gebieden in Drenthe, Friesland en de Gelderse Vallei.</li>
          <li><strong>Nabij industrieterreinen en defensiebases:</strong> PFAS in grondwater. Risicogebieden zijn Dordrecht, omgeving Schiphol, Brabant nabij defensieterreinen.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Aanbevolen testparameters voor putwater
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Parameter</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Referentiewaarde</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Welk filter lost het op</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">E.coli / Coliformen</td>
                <td className="border border-gray-300 px-3 py-2">0 KVE/100 ml</td>
                <td className="border border-gray-300 px-3 py-2">UV-lamp, osmose, UF-filter</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Nitraat (NO₃)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;50 mg/L (EU), &lt;10 voor baby&apos;s</td>
                <td className="border border-gray-300 px-3 py-2">Omgekeerde osmose, ionenwisseling</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">IJzer (Fe)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;0,2 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">IJzerfilter, sedimentfilter + beluchting</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Mangaan (Mn)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;0,05 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">IJzerfilter (mangaanlaag), osmose</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Hardheid (Ca/Mg)</td>
                <td className="border border-gray-300 px-3 py-2">50–150 mg/L (aanbevolen)</td>
                <td className="border border-gray-300 px-3 py-2">Osmose, waterontharder</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Arseen (As)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10 µg/L (EU)</td>
                <td className="border border-gray-300 px-3 py-2">Osmose, specifiek arsenfilter</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">PFAS (som 20)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;0,10 µg/L (EU 2026)</td>
                <td className="border border-gray-300 px-3 py-2">Osmose (95–99%), actief kool</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">pH</td>
                <td className="border border-gray-300 px-3 py-2">6,5–9,5</td>
                <td className="border border-gray-300 px-3 py-2">pH-correctiefilter, doseerpomp</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Aanbevolen filtersysteem per verontreiniging
        </h2>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Uitsluitend bacteriën → UV-desinfectie</h3>
            <p className="text-gray-700 text-sm">Een UV-lamp op 254 nm vernietigt bacteriën, virussen en parasieten zonder chemicaliën. Combineer altijd met een sedimentprefilter (5 micron) om het UV-licht niet te blokkeren. Kosten: €150–350 installatie, lamp vervanging jaarlijks circa €30.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Hoog nitraat → Omgekeerde osmose</h3>
            <p className="text-gray-700 text-sm">Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerd osmosefilter</Link> verwijdert 85–95% van nitraat. Eenvoudiger dan ionenwisseling en pakt tegelijk ook andere verontreinigingen aan. Zie ook onze pagina over <Link href="/drinkwater/nitraat" className="text-[#005F8A] underline">nitraat in drinkwater</Link>.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">IJzer en mangaan → IJzerfilter + sedimentfilter</h3>
            <p className="text-gray-700 text-sm">Een beluchter of oxidatiefilter zet opgelost ijzer om in neerslag, waarna een sedimentfilter het opvangt. Voor mangaan is een speciaal mangaanlaagfilter nodig. Professionele installatie aanbevolen; kosten €300–700.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Complete aanpak → 5-traps osmose + UV</h3>
            <p className="text-gray-700 text-sm">De meest complete oplossing: sediment (voorfilter 5µm) → koolstofblokfilter → osmosemembraan → post-koolfilter → UV-lamp. Verwijdert bacteriën, nitraat, PFAS, lood, arseen en hardheid in één systeem. Aanschaf €500–1.200, jaarlijkse filterkosten €80–150.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap-voor-stap: veilig putwater als drinkwater
        </h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li><strong>Wateranalyse aanvragen:</strong> Laat een basisanalyse uitvoeren door een gecertificeerd laboratorium (€80–200). Test minimaal op bacteriën, nitraat, ijzer, mangaan, pH en hardheid. In risicogebieden ook op arseen en PFAS.</li>
          <li><strong>Resultaten beoordelen:</strong> Vergelijk met de normen van het Drinkwaterbesluit. Overschrijdingen bepalen welk filtersysteem noodzakelijk is.</li>
          <li><strong>Filtersysteem kiezen:</strong> Op basis van de analyseresultaten: één specifiek filter of een combinatiesysteem. Zie de tabel hierboven.</li>
          <li><strong>Installatie en inbedrijfstelling:</strong> Laat het systeem installeren door een erkend installateur. Controleer waterdichtheid en druk.</li>
          <li><strong>Hertest na installatie:</strong> Laat het water na installatie opnieuw testen om de filterwerking te bevestigen.</li>
          <li><strong>Jaarlijks onderhoud:</strong> Filterpatronen vervangen, UV-lamp jaarlijks vervangen, membraan elke 2–3 jaar. Jaarlijkse heranalyse aanbevolen.</li>
          <li><strong>Melden bij gemeente:</strong> Informeer de gemeente als je putwater als drinkwater gebruikt. In veel gemeenten is dit meldingsplichtig op grond van de Waterwet.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kostenовerzicht putwatersysteem
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Systeem</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Aanschaf</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten/jaar</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Geschikt voor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">UV-lamp alleen</td>
                <td className="border border-gray-300 px-3 py-2">€150–350</td>
                <td className="border border-gray-300 px-3 py-2">€30–50</td>
                <td className="border border-gray-300 px-3 py-2">Bacteriën</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">IJzerfilter</td>
                <td className="border border-gray-300 px-3 py-2">€200–500</td>
                <td className="border border-gray-300 px-3 py-2">€30–80</td>
                <td className="border border-gray-300 px-3 py-2">IJzer, mangaan</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">5-traps osmose</td>
                <td className="border border-gray-300 px-3 py-2">€300–800</td>
                <td className="border border-gray-300 px-3 py-2">€50–120</td>
                <td className="border border-gray-300 px-3 py-2">Nitraat, PFAS, hardheid</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Osmose + UV</td>
                <td className="border border-gray-300 px-3 py-2">€500–1.200</td>
                <td className="border border-gray-300 px-3 py-2">€80–150</td>
                <td className="border border-gray-300 px-3 py-2">Complete bescherming</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Ionenwisselaar</td>
                <td className="border border-gray-300 px-3 py-2">€400–900</td>
                <td className="border border-gray-300 px-3 py-2">€60–100</td>
                <td className="border border-gray-300 px-3 py-2">Nitraat specifiek</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="text-amber-900 text-sm">
            <strong>Juridische tip:</strong> Informeer je gemeente als je putwater als drinkwater gebruikt. Bij calamiteiten (overstroming, bodemverontreiniging) kan dit relevant zijn voor aansprakelijkheid. In sommige provincies geldt een meldplicht voor grondwateronttrekkingen boven 10 m³ per uur.
          </p>
        </div>

        <p className="text-gray-700 mb-6">
          Bekijk ook de vergelijking van <Link href="/waterfilter/soorten" className="text-[#005F8A] underline">alle soorten waterfilters</Link> voor meer informatie over filtertypen die geschikt zijn voor putwater. Voor PFAS-risico&apos;s in jouw regio, zie onze pagina over <Link href="/pfas-water" className="text-[#005F8A] underline">PFAS in drinkwater</Link>.
        </p>

        <div className="space-y-3 mb-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Putwater-onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/putwater/bacterien-testen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Bacterien testen</h3>
              <p className="text-sm text-gray-600">E. coli, coliformen en enterokokken: RIVM-procedure, labkosten en testfrequentie.</p>
            </Link>
            <Link href="/putwater/nitraat" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Nitraat in putwater</h3>
              <p className="text-sm text-gray-600">Landbouwgebieden, EU-norm 50 mg/L en welke filters nitraat verwijderen.</p>
            </Link>
            <Link href="/putwater/ijzer-verwijderen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">IJzer verwijderen</h3>
              <p className="text-sm text-gray-600">Roestbruine vlekken, oxidatiefilter en kosten installatie ijzerverwijdering.</p>
            </Link>
            <Link href="/putwater/mangaan-verwijderen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Mangaan verwijderen</h3>
              <p className="text-sm text-gray-600">Zwarte aanslag in leidingen en hoe mangaanfilters werken.</p>
            </Link>
            <Link href="/putwater/zware-metalen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Zware metalen</h3>
              <p className="text-sm text-gray-600">Arseen, lood en koper uit geologie of corroderende leidingen.</p>
            </Link>
            <Link href="/putwater/uv-desinfectie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">UV-desinfectie</h3>
              <p className="text-sm text-gray-600">UV-C lampen, dosering en pre-filtratie voor microbiologische veiligheid.</p>
            </Link>
            <Link href="/putwater/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</h3>
              <p className="text-sm text-gray-600">RO als compleet 5-traps filtersysteem voor putwater.</p>
            </Link>
            <Link href="/putwater/kosten" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kosten en budget</h3>
              <p className="text-sm text-gray-600">Van basis tot compleet systeem en jaarlijkse onderhoudskosten.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Filtertechnieken uitgelegd</p>
              <p className="text-sm text-gray-600">Alle technologieen die putwater geschikt maken voor gebruik en consumptie.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater</p>
              <p className="text-sm text-gray-600">Nitraat, ijzer, mangaan, arseen en andere verontreinigingen in grondwater.</p>
            </Link>
            <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</p>
              <p className="text-sm text-gray-600">Wettelijke grenzen voor verontreinigingen en hoe putwater hieraan voldoet.</p>
            </Link>
            <Link href="/waterfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Waterfilter vergelijken</p>
              <p className="text-sm text-gray-600">Van sedimentfilter tot volledig RO-systeem: welk filter past bij uw putwater?</p>
            </Link>
          </div>
        </section>

        <p className="text-gray-600 text-sm mt-6">
          Meer lezen: <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitgelegd</Link>, <Link href="/drinkwater/nitraat" className="text-[#005F8A] underline">nitraat in drinkwater</Link> en <Link href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid per gemeente</Link>.
        </p>
      </main>
    </>
  );
}
