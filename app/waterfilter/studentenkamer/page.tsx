import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter voor studentenkamer: compact en betaalbaar gefilterd water',
  description: 'Op een studentenkamer past een filterkan of compact tafelmodel osmosefilter perfect. Vergelijking van kleine waterfilters voor studenten op prijs, ruimte en filterkwaliteit.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/studentenkamer' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welk waterfilter is het beste voor een studentenkamer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor de meeste studenten is een kraanmontage filter (zoals TAPP Water of Brita On-Tap) de beste keuze: geen installatie, past op iedere standaardkraan, filtert chloor, lood en microplastics, en kost circa 60 tot 120 euro per jaar inclusief vervangingscartridges. Wie ook PFAS of medicijnen wil filteren kiest een compact tafelmodel osmosefilter voor 150 tot 300 euro aanschaf.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een waterfilter installeren in een huurwoning als student?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, zonder toestemming van de verhuurder. Een filterkan of kraanmontage filter vereist geen boren, geen loodgieterswerk en geen permanente aanpassingen. Een compact tafelmodel osmosefilter staat op het aanrecht en gebruikt een slang naar de kraan. Na het vertrek neemt u alles gewoon mee. Alleen een ingebouwd onderaanrecht filter vereist toestemming.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een filterkan of een kraanfilter beter voor studenten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een kraanmontage filter is handiger in gebruik: u filtert direct uit de kraan zonder wachten. Een filterkan is goedkoper in aanschaf (15 tot 30 euro) maar vraagt om regelmatig bijvullen en heeft een cartridge die elke 4 tot 6 weken voor 1 persoon vervangen moet worden. Bij een gedeelde keuken met meerdere gebruikers is een kraanfilter praktischer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het goedkoopste waterfilter voor studenten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De goedkoopste optie in aanschaf is een filterkan van Brita of Aquaphor voor 15 tot 30 euro. De totale jaarkosten inclusief cartridges bedragen 50 tot 100 euro per jaar. Goedkoper dan flessenwater (300 tot 600 euro per jaar bij 2 liter per dag). Een reisfilter zoals Lifestraw Go (40 tot 55 euro) heeft na aanschaf geen vervolgkosten tot 4.000 liter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Past een osmosefilter op een studentenkamer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, compact tafelmodel osmosefilters zijn speciaal ontworpen voor kleine ruimtes. Ze staan op het aanrecht, gebruiken een slang naar de kraan en hebben geen boringen nodig. Aanschaf kost 150 tot 300 euro, maar jaarlijkse filterkosten zijn slechts 40 tot 60 euro. Dit is de beste keuze als u in een PFAS-zone woont of in een huis met oude loodleidingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een reisfilter bruikbaar als dagelijks waterfilter voor studenten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een reisfilter zoals de Lifestraw Go fles is een volwaardige dagelijkse filteroplossing voor studenten die veel onderweg zijn. De filter gaat mee in uw tas, filtert bacterien en protozoa en heeft een capaciteit van 4.000 liter voordat vervanging nodig is. Nadeel: geen filterwerking tegen opgeloste chemische stoffen zoals PFAS of lood.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe bespaar ik als student op flessenwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij 2 liter per dag kost flessenwater 300 tot 600 euro per jaar. Zelfs de duurste filteroplossing voor studenten (compact osmosefilter) kost na terugverdientijd minder dan 100 euro per jaar. Een filterkan of kraanfilter verdient zichzelf in 2 tot 3 maanden terug. Op een studentenbudget is overstappen op gefilterd kraanwater een van de snelst terugverdienende investeringen.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter voor studentenkamer: compact en betaalbaar gefilterd water',
  description: 'Op een studentenkamer past een filterkan of compact tafelmodel osmosefilter perfect. Vergelijking van kleine waterfilters voor studenten op prijs, ruimte en filterkwaliteit.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/studentenkamer',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function StudentenkamerWaterfilterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Waterfilter studentenkamer', item: 'https://waterfilterplatform.nl/waterfilter/studentenkamer' },
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
          <span>Waterfilter studentenkamer</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterfilter voor studentenkamer: compact en betaalbaar gefilterd water
          </h1>
          <p className="text-gray-700 text-lg">
            Beperkte ruimte, gedeelde keuken, huurwoning en een krap budget: de studentenkamer stelt specifieke eisen
            aan een waterfilter. Gelukkig zijn er uitstekende opties vanaf &euro;15.
          </p>
        </div>

        <QuickAnswer answer="Voor een studentenkamer is een kraanmontage filter (TAPP Water, Brita On-Tap) of filterkan de meest praktische keuze: geen installatie, geen boren, werkt in huurwoning. Compact osmosefilter op aanrecht filtert ook PFAS en lood. Besparing ten opzichte van flessenwater: 200 tot 500 euro per jaar." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Uitdagingen op een studentenkamer
        </h2>
        <p className="text-gray-700 mb-4">
          Een studentenkamer verschilt sterk van een reguliere woning als het gaat om waterfiltratie. De vier grootste uitdagingen zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Beperkte ruimte:</strong> Kleine keuken of gedeelde kitchenette, weinig aanrechtruimte</li>
          <li><strong>Gedeelde keuken:</strong> Geen vaste installatie mogelijk zonder toestemming van alle bewoners</li>
          <li><strong>Huurwoning:</strong> Geen boringen, geen permanente aanpassingen aan het leidingwerk</li>
          <li><strong>Beperkt budget:</strong> Lage aanschafkosten en lage jaarlijkse kosten zijn prioriteit</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijking: waterfilters voor studenten
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Optie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aanschaf</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Jaarlijks</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Installeert</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Ruimte</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filtert</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Filterkan (Brita)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;15&ndash;30</td>
                <td className="border border-gray-300 px-3 py-2">&euro;40&ndash;80</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
                <td className="border border-gray-300 px-3 py-2">Klein</td>
                <td className="border border-gray-300 px-3 py-2">Chloor, lood deels</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Kraanfilter (TAPP)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;40&ndash;80</td>
                <td className="border border-gray-300 px-3 py-2">&euro;40&ndash;60</td>
                <td className="border border-gray-300 px-3 py-2">Op kraan</td>
                <td className="border border-gray-300 px-3 py-2">Minimaal</td>
                <td className="border border-gray-300 px-3 py-2">Chloor, lood, microplastics</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Compact osmose tafelblad</td>
                <td className="border border-gray-300 px-3 py-2">&euro;150&ndash;300</td>
                <td className="border border-gray-300 px-3 py-2">&euro;40&ndash;60</td>
                <td className="border border-gray-300 px-3 py-2">Op aanrecht</td>
                <td className="border border-gray-300 px-3 py-2">Middel</td>
                <td className="border border-gray-300 px-3 py-2">Alles incl. PFAS</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Reisfilter (Lifestraw Go)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;40&ndash;55</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0 (4.000 L)</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
                <td className="border border-gray-300 px-3 py-2">Ultracompact</td>
                <td className="border border-gray-300 px-3 py-2">Bacterien, protozoa</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filterkan: de goedkoopste instap
        </h2>
        <p className="text-gray-700 mb-4">
          Een filterkan van Brita, Aquaphor of PearlCo is de eenvoudigste en goedkoopste oplossing. De kan staat in de koelkast, past overal en vereist geen enkele installatie. Een standaard cartridge van 150 liter is voor een student die 1,5 tot 2 liter per dag drinkt elke vier tot zes weken verbruikt.
        </p>
        <p className="text-gray-700 mb-6">
          De filterkan verwijdert effectief chloor en verbetertde smaak. Lood wordt deels verwijderd. PFAS, nitraat en medicijnresten worden niet of nauwelijks gefilterd. Voor de meeste studenten in Nederland (normaal leidingwater, geen PFAS-hotspot) is dit ruim voldoende.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kraanmontage filter: beste prijs-kwaliteit voor huurwoning
        </h2>
        <p className="text-gray-700 mb-4">
          Een kraanmontage filter (TAPP Water EcoPro, Brita On-Tap) schroeft in twee minuten op de bestaande kraan en vereist geen gereedschap of permanente aanpassingen. Bij vertrek schroeft u het er gewoon weer af.
        </p>
        <p className="text-gray-700 mb-6">
          TAPP Water EcoPro filtert meer dan 95 procent van chloor, lood en microplastics, en de cartridge gaat 3 maanden mee voor een gemiddeld huishouden (langer voor een student alleen). De jaarkosten bedragen circa 50 tot 70 euro. Dit is de aanbevolen keuze voor studenten in een huurwoning die de smaak willen verbeteren en basisverontreinigingen willen verwijderen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Compact osmosefilter op aanrecht: voor PFAS-zones en oude huizen
        </h2>
        <p className="text-gray-700 mb-4">
          Compact tafelmodel osmosefilters zijn speciaal ontworpen voor situaties zonder vaste installatie. Ze staan op het aanrecht en zijn via een dunne slang verbonden met de kraan. Geen boringen, geen gereedschap, volledig verplaatsbaar.
        </p>
        <p className="text-gray-700 mb-6">
          De aanschaf kost 150 tot 300 euro, maar de jaarlijkse filterkosten zijn slechts 40 tot 60 euro. Dit systeem verwijdert ook PFAS, lood, nitraat en medicijnresten. Als u woont in een gebied met bekende PFAS-verontreiniging of in een oud pand met mogelijke loodleidingen (&lt;1960), is dit de enige optie die echt volledige bescherming biedt.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Reisfilter als primaire drinkwaterfilter
        </h2>
        <p className="text-gray-700 mb-4">
          De Lifestraw Go drinkfles met ingebouwd filter is niet alleen voor reizen. Voor studenten die veel onderweg zijn, biedt deze fles een handige all-in-one oplossing: u vult de fles gewoon met leidingwater, en de filter verwijdert bacterien en protozoa terwijl u drinkt.
        </p>
        <p className="text-gray-700 mb-6">
          Nadeel: de Lifestraw filtert geen opgeloste chemische stoffen zoals PFAS, lood of nitraat. Voor het filteren van uitsluitend chloor en smaakverbetering is het systeem ook minder geschikt dan een filterkan of kraanfilter. Ideaal als aanvulling of als u onderweg gefilterd water wilt zonder losse flessen te kopen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kosten vergelijking per jaar (2 liter per dag)
        </h2>
        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
          <ul className="text-gray-700 space-y-2 text-sm">
            <li className="flex justify-between"><span>Flessenwater (1,5 L fles)</span><span className="font-semibold text-red-600">&euro;300&ndash;600/jaar</span></li>
            <li className="flex justify-between"><span>Filterkan (incl. cartridges)</span><span className="font-semibold text-green-700">&euro;50&ndash;100/jaar</span></li>
            <li className="flex justify-between"><span>Kraanmontage filter</span><span className="font-semibold text-green-700">&euro;60&ndash;120/jaar</span></li>
            <li className="flex justify-between"><span>Compact osmose tafelblad (na aanschaf)</span><span className="font-semibold text-green-700">&euro;40&ndash;60/jaar</span></li>
          </ul>
        </div>
        <p className="text-gray-700 mb-6">
          Zelfs de eenvoudigste filterkan betaalt zichzelf binnen twee maanden terug ten opzichte van flessenwater. Over vier jaar studie bespaart u met gefilterd kraanwater gemakkelijk 1.000 tot 2.000 euro.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen: waterfilter voor studenten</h2>
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
          <Link href="/filterkan" className="text-[#005F8A] underline">filterkan vergelijken</Link>,{' '}
          <Link href="/reisfilter" className="text-[#005F8A] underline">reisfilter overzicht</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>
      </main>
    </>
  );
}
