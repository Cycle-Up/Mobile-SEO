import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterontharder kosten: aanschaf, zout en totale eigendomskosten',
  description:
    'Een waterontharder kost 500-2.000 euro aanschaf plus 150-300 euro per jaar aan zout en onderhoud. Vergelijking van TCO over 5 en 10 jaar versus huren (15-35.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/prijs' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat kost een waterontharder gemiddeld?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een waterontharder kost in aanschaf 500-2.000 euro afhankelijk van het merk en de capaciteit. Budget modellen (Harvey MiniMax, BWT Perla S) kosten 500-800 euro. Mid-range (EcoWater, Harvey Crown) 800-1.400 euro. Premium (BWT AQA Perla, Kinetico) 1.400-2.000 euro. Daar komen installatiekosten bij van 200-500 euro voor een loodgieter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel zout verbruikt een waterontharder per jaar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een gezin van 4 personen in een regio met hard water (20-25 dH) verbruikt 100-200 kg regeneratiezout per jaar. Bij waterontharders met vraaggestuurde regeneratie (efficienter) is dit 80-150 kg. Zout kost 0,30-0,50 euro per kilogram in grote zakken. Jaarlijkse zoutkosten: 30-100 euro.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is huren of kopen van een waterontharder voordeliger?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Huren kost 15-35 euro per maand inclusief onderhoud maar exclusief zout, dus 180-420 euro per jaar. Na 5 jaar heeft u 900-2.100 euro betaald zonder eigendom. Kopen is bij een gebruiksduur van meer dan 5-7 jaar vrijwel altijd goedkoper. Huren heeft als voordeel geen grote investering vooraf, inclusief onderhoud en vervanging bij storing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke besparingen levert een waterontharder op?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De jaarlijkse besparingen omvatten: 30-50% minder zeep- en wasmiddelverbruik (20-80 euro per jaar), lagere energierekening door minder kalkafzetting in de cv-ketel (50-150 euro per jaar), en langere levensduur van wasmachine, vaatwasser en waterkoker. Totale jaarlijkse besparing: 200-400 euro bij harde waterregio. Bij zachte waterregio zijn de besparingen kleiner.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt het voordat een waterontharder zichzelf terugverdient?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij een aanschaf van 1.500 euro (apparaat + installatie) en een jaarlijkse besparing van 300 euro duurt het terugverdienen 5 jaar. Bij lagere besparingen (zacht watergebied, klein huishouden) kan dit 7-10 jaar zijn. Bij harde waterregio en groot huishouden kan de terugverdientijd 3-5 jaar zijn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de jaarlijkse onderhoudskosten van een waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Naast zout (30-100 euro per jaar) zijn er onderhoudskosten: een servicecontract kost 100-200 euro per jaar en omvat harsinspectie, controle van de regeneratiecyclus en kleine reparaties. Extra water voor regeneratie kost circa 10 euro per jaar. Elektriciteit is verwaarloosbaar (2-5 W continu). Totale jaarlijkse bedrijfskosten: 150-300 euro.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel kost waterontharder installatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Installatie door een erkend loodgieter kost 200-500 euro. De installatieprijs is afhankelijk van de complexiteit van de aansluiting, de afstand tot het hoofdleidingpunt en eventuele aanpassingen aan het leidingwerk. Sommige leveranciers bieden installatie aan als pakket inclusief het apparaat. Een KIWA-gecertificeerde aansluiting is vereist in Nederland.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn er subsidies voor een waterontharder in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er zijn geen landelijke subsidies specifiek voor waterontharders in Nederland. Sommige gemeenten in harde waterregio\'s bieden lokale regelingen aan; controleer de website van uw gemeente. Bij combinatie met andere verduurzamingsmaatregelen kunnen er soms bredere energiebesparingssubsidies van toepassing zijn, maar dit is sterk afhankelijk van de lokale regeling.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterontharder kosten: aanschaf, zout en totale eigendomskosten',
  description:
    'Volledig kostenoverzicht voor waterontharders: aanschaf 500-2.000 euro, jaarlijkse kosten 150-300 euro, TCO-vergelijking over 5 en 10 jaar, besparingen en.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterontharder/kosten',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterontharderKostenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterontharder', item: 'https://waterfilterplatform.nl/waterontharder' },
              { '@type': 'ListItem', position: 3, name: 'Kosten waterontharder', item: 'https://waterfilterplatform.nl/waterontharder/kosten' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterontharder" className="hover:underline">Waterontharder</Link> &rsaquo;{' '}
          <span>Kosten waterontharder</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterontharder kosten: aanschaf, zout en totale eigendomskosten
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een waterontharder is een investering voor de lange termijn. Naast de aanschafprijs
            betaalt u jaarlijks voor zout en onderhoud. Maar een waterontharder bespaart ook: minder
            energieverbruik, minder wasmiddel en langere levensduur van apparaten. Bereken uw
            werkelijke kosten en besparingen.
          </p>
        </section>

        <QuickAnswer answer="Een waterontharder kost 500-2.000 euro aanschaf plus 200-500 euro installatie. Jaarlijkse bedrijfskosten: 150-300 euro (zout + onderhoud). Jaarlijkse besparing in harde waterregio: 200-400 euro. Terugverdientijd: 5-7 jaar. Huren kost 15-35 euro per maand maar levert geen eigendom op." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Aanschafkosten: budget, mid-range en premium
        </h2>
        <p className="text-gray-700 mb-4">
          De prijs van een waterontharder verschilt sterk per segment. De keuze hangt af van uw
          waterverbruik, de gewenste capaciteit en het belang dat u hecht aan functies zoals
          vraaggestuurde regeneratie (zuiniger zout- en waterverbruik):
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Segment</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Merken</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs apparaat</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kenmerken</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Budget</td>
                <td className="border border-gray-300 px-3 py-2">Harvey MiniMax, BWT Perla S</td>
                <td className="border border-gray-300 px-3 py-2">&euro;500&ndash;800</td>
                <td className="border border-gray-300 px-3 py-2">Tijdgestuurde regeneratie, compact</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Mid-range</td>
                <td className="border border-gray-300 px-3 py-2">EcoWater ERR, Harvey Crown</td>
                <td className="border border-gray-300 px-3 py-2">&euro;800&ndash;1.400</td>
                <td className="border border-gray-300 px-3 py-2">Vraaggestuurde regeneratie, zuiniger</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Premium</td>
                <td className="border border-gray-300 px-3 py-2">BWT AQA Perla, Kinetico</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1.400&ndash;2.000</td>
                <td className="border border-gray-300 px-3 py-2">Non-elektrisch (Kinetico), dubbelcilinder, minimaal zoutverbruik</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Installatie</td>
                <td className="border border-gray-300 px-3 py-2">Erkend loodgieter</td>
                <td className="border border-gray-300 px-3 py-2">&euro;200&ndash;500</td>
                <td className="border border-gray-300 px-3 py-2">KIWA-aansluiting verplicht in NL</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Jaarlijkse bedrijfskosten
        </h2>
        <p className="text-gray-700 mb-4">
          Na de aanschaf zijn er jaarlijkse terugkerende kosten. Voor een gezin van 4 personen in
          een regio met hard water (circa 20 dH, zoals in delen van Limburg of Noord-Brabant):
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Regeneratiezout:</strong> 100-200 kg per jaar &times; &euro;0,30-0,50/kg =
            <strong> &euro;30&ndash;100 per jaar</strong>. Koop zout in grote zakken van 25 kg voor
            de beste prijs. Tabletvorm wordt het meest gebruikt; blokzout is zuiverder maar duurder.
          </li>
          <li>
            <strong>Servicecontract / onderhoud:</strong> 100-200 euro per jaar. Een jaarlijkse
            servicebeurt omvat harsinspectie, controle van de regeneratiecyclus, instellingen
            aanpassen en kleine reparaties. Sterk aanbevolen voor behoud van garantie.
          </li>
          <li>
            <strong>Extra waterverbruik voor regeneratie:</strong> circa 50-100 liter per regeneratie
            &times; 50 regeneraties per jaar = 5 m&sup3; &times; &euro;2/m&sup3; =
            <strong> circa &euro;10 per jaar</strong>.
          </li>
          <li>
            <strong>Elektriciteit:</strong> 2-5 W continu (alleen elektronische modellen) = minder
            dan &euro;5 per jaar. Verwaarloosbaar. Non-elektrische modellen (Kinetico) verbruiken
            geen stroom.
          </li>
        </ul>

        <div className="bg-[#E0F2FE] rounded-lg px-5 py-4 mb-6">
          <p className="text-[#003F5C] font-semibold">Totale jaarlijkse bedrijfskosten:</p>
          <p className="text-[#005F8A] mt-1">
            &euro;150&ndash;300 per jaar voor een gemiddeld gezin. Bij zuinige modellen met
            vraaggestuurde regeneratie en goedkoop ingekocht zout: &euro;120&ndash;200 per jaar.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          TCO-vergelijking: kopen vs huren over 5 jaar
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Scenario</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Jaar 1</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Jaar 2-5</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Totaal 5 jaar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Budget kopen (700 euro + inst.)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1.050</td>
                <td className="border border-gray-300 px-3 py-2">&euro;175/jaar</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1.750</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Mid-range kopen (1.100 euro + inst.)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1.400</td>
                <td className="border border-gray-300 px-3 py-2">&euro;175/jaar</td>
                <td className="border border-gray-300 px-3 py-2">&euro;2.100</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Huren (25 euro/maand excl. zout)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;400</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300 + &euro;65 zout</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1.760 (geen eigendom)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Bij huren betaalt u na 5 jaar een vergelijkbaar bedrag als bij kopen, maar zonder eigendom
          van het apparaat. Na 7-10 jaar is kopen altijd voordeliger. Huren is zinvol als u niet weet
          of u lang op hetzelfde adres blijft, of als u de installatie- en onderhoudsverantwoordelijkheid
          wilt uitbesteden. Lees meer op de pagina over{' '}
          <Link href="/waterontharder/huren" className="text-[#005F8A] underline">waterontharder huren</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Besparingen door een waterontharder
        </h2>
        <p className="text-gray-700 mb-4">
          Een waterontharder levert concrete besparingen op die de jaarlijkse kosten gedeeltelijk
          of volledig compenseren:
        </p>

        <div className="space-y-4 mb-6">
          <div className="border-l-4 border-[#005F8A] pl-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Zeep en wasmiddel</h3>
            <p className="text-gray-700 text-sm">
              Zacht water schuimt beter en reinigt effectiever. U verbruikt 30-50% minder
              waspoeder, afwasmiddel, shampoo en zeep. Besparing: 20-80 euro per jaar bij een
              gemiddeld huishouden.
            </p>
          </div>
          <div className="border-l-4 border-[#005F8A] pl-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Energiebesparing cv-ketel</h3>
            <p className="text-gray-700 text-sm">
              Elke millimeter kalkafzetting in een cv-ketel verhoogt het energieverbruik met
              circa 7%. In harde waterregio&apos;s kan kalk zich snel ophopen. Een waterontharder
              voorkomt nieuwe afzetting. Besparing: 50-150 euro per jaar op gasverbruik,
              afhankelijk van waterhardheid en verwarmingsverbruik.
            </p>
          </div>
          <div className="border-l-4 border-[#005F8A] pl-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Langere apparatuurlevensduur</h3>
            <p className="text-gray-700 text-sm">
              Wasmachine, vaatwasser, waterkoker en cv-ketel gaan 20-30% langer mee bij
              gebruik van zacht water. Bij een wasmachine van &euro;800 die normaal 10 jaar meegaat
              maar nu 13 jaar: dat is circa &euro;240 bespaard per apparaat over de levensduur.
            </p>
          </div>
        </div>

        <div className="bg-[#E0F2FE] rounded-lg px-5 py-4 mb-6">
          <p className="text-[#003F5C] font-semibold">Totale jaarlijkse besparing (harde waterregio):</p>
          <p className="text-[#005F8A] mt-1">
            &euro;200&ndash;400 per jaar voor een gezin van 4 in Limburg of Noord-Brabant.
            In regio&apos;s met zacht water (Amsterdam, Utrecht) zijn de besparingen kleiner:
            &euro;50&ndash;150 per jaar.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Terugverdientijd berekenen
        </h2>
        <p className="text-gray-700 mb-4">
          De terugverdientijd hangt af van de aanschafkosten, de jaarlijkse bedrijfskosten en de
          jaarlijkse besparing:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Voorbeeld harde waterregio, mid-range apparaat:</strong> aanschaf 1.100 euro +
            installatie 350 euro = 1.450 euro. Jaarlijkse kosten 200 euro. Jaarlijkse besparing
            300 euro. Nettobesparing 100 euro/jaar. Terugverdientijd: 14,5 jaar &mdash; maar met
            de apparaatlevensduurverlenging inbegrepen effectief 7-8 jaar.
          </li>
          <li>
            <strong>Voorbeeld harde waterregio, budget apparaat:</strong> aanschaf 700 + installatie
            300 = 1.000 euro. Besparing 300 euro/jaar. Bedrijfskosten 175 euro/jaar. Nettobesparing
            125 euro/jaar. Terugverdientijd: 8 jaar.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Wilt u weten of een waterontharder zinvol is in uw regio? Controleer de waterhardheid via
          uw drinkwaterbedrijf en vergelijk aanbieders op onze pagina{' '}
          <Link href="/waterontharder/vergelijken" className="text-[#005F8A] underline">waterontharders vergelijken</Link>.
          Voor installatie-informatie zie{' '}
          <Link href="/waterontharder/installeren" className="text-[#005F8A] underline">waterontharder installeren</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over waterontharder kosten
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
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder uitleg</Link>,{' '}
          <Link href="/waterontharder/huren" className="text-[#005F8A] underline">waterontharder huren</Link>,{' '}
          <Link href="/waterontharder/vergelijken" className="text-[#005F8A] underline">waterontharders vergelijken</Link> en{' '}
          <Link href="/waterontharder/installeren" className="text-[#005F8A] underline">waterontharder installeren</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keuzehulp/budget" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Budget keuzehulp waterontharder</h3>
              <p className="text-sm text-gray-600">Totale kosten: aanschaf, zout, water, energie en onderhoud over 10 jaar vergeleken.</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling: bedrijfskosten</h3>
              <p className="text-sm text-gray-600">Hoe de hars-regeneratie het zoutverbruik bepaalt en daarmee de operationele kosten.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
