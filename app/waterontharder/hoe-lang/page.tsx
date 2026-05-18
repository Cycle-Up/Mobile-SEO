import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Hoe lang gaat een waterontharder mee? Levensduur en onderhoud',
  description: 'Een waterontharder gaat gemiddeld 15-25 jaar mee bij goed onderhoud. Ontdek wat de levensduur bepaalt, wanneer vervanging nodig is en hoe u uw ontharder.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/hoe-lang' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe lang gaat een waterontharder gemiddeld mee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een waterontharder van een kwaliteitsmerk zoals Kinetico, BWT of Clack gaat gemiddeld 15 tot 25 jaar mee bij goed onderhoud. Budgetmodellen van minder bekende merken hebben een gemiddelde levensduur van 8 tot 12 jaar. De levensduur wordt sterk beinvloed door waterdruk, zoutkwaliteit, regeneratiefrequentie en jaarlijks onderhoud. Het harsbed gaat doorgaans 10 tot 15 jaar mee voordat vervanging nodig is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer moet ik het harsbed van mijn waterontharder vervangen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het harsbed moet vervangen worden wanneer het water na regeneratie nog steeds hard is, het zoutverbruik sterk stijgt zonder toename van waterverbruik, of wanneer de harskorreltjes breken en als fijn poeder door het leidingnet verspreid worden. Gemiddeld is harsbedvervanging na 10 tot 15 jaar gebruik nodig. De kosten bedragen doorgaans 300 tot 500 euro en zijn daarmee veel goedkoper dan een geheel nieuw apparaat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe weet ik of mijn waterontharder versleten is?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Signalen dat uw waterontharder aan vervanging toe is: het water wordt weer hard (kalkaanslag op kranen, glazen en douchedeuren keert terug), het zoutverbruik stijgt zonder meer watergebruik, de regeneratiecyclus wordt frequenter zonder dat uw waterverbruik is toegenomen, u ziet lekkages bij aansluitingen of kleppen, of de besturing geeft foutmeldingen die niet te resetten zijn. Meet de waterhardheld regelmatig met een teststrookje om vroege signalen te herkennen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kan ik doen om de levensduur van mijn waterontharder te verlengen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De vijf belangrijkste maatregelen: (1) gebruik uitsluitend zuiver tabletzout met maximaal 5 mg/kg ijzer; (2) voer jaarlijks een harsbedreiniging uit met ontijzeringskorrels; (3) laat de kleppen om de 5 jaar professioneel saneren; (4) controleer regelmatig op een zoutbrug in het zoutreservoir; (5) zet de ontharder op bypass bij afwezigheid van meer dan 2 weken. Een jaarlijkse servicebeurt door een erkend installateur verlengt de levensduur aantoonbaar en voorkomt dure storingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is het goedkoper om te repareren of een nieuwe waterontharder te kopen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De vuistregel is: als de reparatiekosten meer dan 50% van de aanschafwaarde van een nieuw vergelijkbaar apparaat bedragen, is vervanging financieel verstandiger. Bij een apparaat ouder dan 15 jaar komt daarbij dat de energieficientie van nieuwe modellen beter is en dat reserveonderdelen voor oude modellen steeds moeilijker verkrijgbaar worden. Kleine reparaties zoals een nieuwe klep of besturingspaneel zijn doorgaans de moeite waard als het apparaat jonger dan 10 jaar is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Gaat een Kinetico waterontharder langer mee dan andere merken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kinetico ontharders staan bekend om hun langere levensduur, mede omdat ze werken zonder elektriciteit en dus geen elektronische besturing hebben die kan uitvallen. Kinetico geeft op sommige modellen een garantie van 10 jaar op onderdelen. In de praktijk bereiken goed onderhouden Kinetico-ontharders regelmatig een levensduur van 20 tot 25 jaar. BWT en Clack-gebaseerde ontharders zijn ook betrouwbaar en halen bij goed onderhoud 15 tot 20 jaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heeft mijn waterontharder jaarlijks onderhoud nodig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, jaarlijks onderhoud is sterk aanbevolen voor een optimale prestatie en lange levensduur. Een jaarlijkse servicebeurt omvat: controle van de zoutdosering en regeneratieprogrammering, reinigen van het harsbed met harsbedreinigerkorrels, inspectie van afsluitkleppen en verbindingen op lekkage, en controle van de waterhardheld voor en na de ontharder. Veel installateurs bieden een onderhoudscontract aan voor circa 80 tot 150 euro per jaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is een harsbed en wanneer moet het vervangen worden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het harsbed bestaat uit duizenden kleine ionenwisselaarsparels die calciumionen in het water uitwisselen voor natriumionen. Dit is het kernonderdeel van een waterontharder. Na circa 10 tot 15 jaar gebruik verliezen de harsparels capaciteit door degradatie, ijzerverontreiniging of mechanische slijtage. Vervanging kost 300 tot 500 euro voor materiaal en arbeid en geeft het apparaat effectief een nieuwe levensduur van nog eens 10 tot 15 jaar.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Hoe lang gaat een waterontharder mee? Levensduur en onderhoud',
  description: 'Een waterontharder gaat gemiddeld 15-25 jaar mee bij goed onderhoud. Ontdek wat de levensduur bepaalt, wanneer vervanging nodig is en hoe u uw ontharder.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterontharder/hoe-lang',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterontharderHoeLangPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterontharder', item: 'https://waterfilterplatform.nl/waterontharder' },
              { '@type': 'ListItem', position: 3, name: 'Hoe lang gaat een waterontharder mee', item: 'https://waterfilterplatform.nl/waterontharder/hoe-lang' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterontharder" className="hover:underline">Waterontharder</a> &rsaquo;{' '}
          <span>Hoe lang gaat een waterontharder mee</span>
        </nav>

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-2xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Hoe lang gaat een waterontharder mee? Levensduur en onderhoud
          </h1>
          <p className="text-gray-700 text-lg">
            Een waterontharder is een investering voor de lange termijn. Kwaliteitsmodellen gaan 15 tot 25 jaar mee, maar de levensduur hangt sterk af van onderhoud, zoutkwaliteit en waterdruk. Ontdek wanneer uw ontharder aan vervanging toe is en hoe u de levensduur maximaliseert.
          </p>
        </section>

        <QuickAnswer answer="Een waterontharder van een kwaliteitsmerk (Kinetico, BWT, Clack) gaat 15-25 jaar mee bij goed onderhoud. Budgetmodellen halen 8-12 jaar. Het harsbed vervangt u na 10-15 jaar voor 300-500 euro. Jaarlijks onderhoud, zuiver tabletzout en correcte waterdruk verlengen de levensduur aanzienlijk." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gemiddelde levensduur per type waterontharder
        </h2>
        <p className="text-gray-700 mb-4">
          Niet alle waterontharders zijn gelijk gemaakt. Er is een significant verschil in verwachte levensduur tussen kwaliteitsmerken en budgetopties:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Categorie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Merken</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Levensduur</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Garantie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Kwaliteitsmodel</td>
                <td className="border border-gray-300 px-3 py-2">Kinetico, BWT, Clack, EcoWater</td>
                <td className="border border-gray-300 px-3 py-2 font-semibold text-green-700">15&ndash;25 jaar</td>
                <td className="border border-gray-300 px-3 py-2">5&ndash;10 jaar</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Middenklasse</td>
                <td className="border border-gray-300 px-3 py-2">Harvey, Aquatru, diverse huismerken</td>
                <td className="border border-gray-300 px-3 py-2 font-semibold text-yellow-700">10&ndash;15 jaar</td>
                <td className="border border-gray-300 px-3 py-2">2&ndash;5 jaar</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Budgetmodel</td>
                <td className="border border-gray-300 px-3 py-2">Onbekende merken, witlabel</td>
                <td className="border border-gray-300 px-3 py-2 font-semibold text-red-700">8&ndash;12 jaar</td>
                <td className="border border-gray-300 px-3 py-2">1&ndash;2 jaar</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat bepaalt de levensduur van uw waterontharder?
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Kwaliteit en conditie van het harsbed</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Het harsbed is het hart van de waterontharder. Na 10 tot 15 jaar gebruik verliezen de ionenwisselaarsparels hun capaciteit door chemische degradatie, oxidatie en mechanische slijtage. Een tijdige harsbedvervanging kost 300 tot 500 euro en is aanzienlijk goedkoper dan een nieuw apparaat van 800 tot 2.500 euro. Behandel uw harsbed jaarlijks met harsbedreinigerkorrels om ijzer- en mangaanafzetting te verwijderen die de parels vergiftigt.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Regeneratiefrequentie</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Te frequente regeneratie slijt het harsbed sneller doordat de zoutoplossing (pekel) bij elke regeneratiecyclus een chemische en mechanische belasting op de harsparels uitoefent. Een tijdgestuurde ontharder die elke nacht regenereert ongeacht het waterverbruik is inefficienter dan een vraaggestuurde ontharder die alleen regenereert wanneer de harscapaciteit daadwerkelijk is uitgeput. Vraaggestuurde systemen verlengen de harsduur met 20 tot 30% vergeleken met tijdgestuurde systemen.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Zoutkwaliteit</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Gebruik uitsluitend zuiver tabletzout of blokzout met een maximaal ijzergehalte van 5 mg/kg. Goedkoop industrieel zout of zout met hoge ijzerconcentraties verontreinigt het harsbed. IJzer bindt aan de ionenwisselaar en vermindert de capaciteit permanent. Ook onzuiverheden in het zout kunnen leiden tot een zoutbrug in het zoutreservoir: een harde korst die verhindert dat zout in het water oplost, waarna de regeneratie niet meer werkt en het water ongefilterd hard blijft.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Waterdruk</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Een waterdruk boven 6 bar belast de kleppen en aansluitingen van de waterontharder. De meeste ontharders zijn ontworpen voor een werkdruk van 2,5 tot 6 bar. Constante overdruk slijt de rubberringen, klepmembranen en afsluiters sneller. Controleer de waterdruk bij uw aansluiting met een manometer. Is de druk hoger dan 5,5 bar, overweeg dan een drukreduceerventiel te plaatsen voor de ontharder.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">5</span>
              <h3 className="font-semibold text-[#003F5C]">Regelmatig onderhoud</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Een jaarlijkse servicebeurt omvat harsbedreiniging, inspectie van kleppen en verbindingen, controle van de regeneratieprogrammering en meting van de waterhardheld voor en na de ontharder. Zonder onderhoud kunnen kleine problemen zoals een licht lekkende klep of een te hoge zoutdosering ongemerkt uitgroeien tot grote storingen. Kleppensanering door een professional om de 5 jaar verlengt de levensduur van de besturingsklep met jaren.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Slijtagesignalen: wanneer is vervanging nodig?
        </h2>
        <p className="text-gray-700 mb-4">
          Herken de vroege signalen van een versleten waterontharder voordat het tot een complete storing komt:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Water wordt weer hard</strong>: kalkaanslag keert terug op kranen, douchedeuren en waterkokers; meet de hardheid met een teststrookje</li>
          <li><strong>Stijgend zoutverbruik</strong>: als u meer zout verbruikt zonder dat het waterverbruik is toegenomen, verliest het harsbed capaciteit en regenereert het systeem vaker</li>
          <li><strong>Frequentere regeneratiecycli</strong>: het systeem regenereert meerdere keren per dag in plaats van een keer per 2 tot 3 dagen</li>
          <li><strong>Lekke verbindingen of kleppen</strong>: waterdruppels of vochtsporen rondom het apparaat duiden op sleet aan rubberringen of klep-afdichtingen</li>
          <li><strong>Bruinige of kleverige afzetting</strong> in het zoutreservoir kan op ijzerverontreiniging duiden die het harsbed beschadigt</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Onderhoudstips om de levensduur te maximaliseren
        </h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Gebruik zuiver tabletzout</strong> met maximaal 5 mg/kg ijzer &mdash; goedkoop zout met onzuiverheden is de meest voorkomende oorzaak van vroegtijdige harsbedschade
          </li>
          <li>
            <strong>Jaarlijkse harsbedreiniging</strong> met ontijzeringskorrels (bijv. Rescare of vergelijkbaar product) &mdash; voorkomt ijzer- en mangaanopbouw op de harsparels
          </li>
          <li>
            <strong>Kleppensanering om de 5 jaar</strong> door een erkend installateur &mdash; de besturingsklep is het meest mechanisch belaste onderdeel
          </li>
          <li>
            <strong>Controleer maandelijks op een zoutbrug</strong> in het zoutreservoir &mdash; een korst boven het zout verhindert oplossing en stopt de regeneratie heimelijk
          </li>
          <li>
            <strong>Zet de ontharder op bypass</strong> bij afwezigheid van meer dan 2 weken &mdash; stilstaand water in het apparaat kan bacteriegroei bevorderen en harsparels beschadigen
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kostenvergelijking: waterontharder 20 jaar vs osmosefilter
        </h2>
        <p className="text-gray-700 mb-4">
          Een waterontharder en een osmosefilter beschermen uw leidingen op verschillende manieren. Over een periode van 20 jaar ziet de kostenbalans er als volgt uit:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kostenpost</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-[#003F5C]">Waterontharder (20 jr)</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-[#003F5C]">Osmosefilter (20 jr)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Aanschaf + installatie</td>
                <td className="border border-gray-300 px-3 py-2 text-center">&euro;1.000&ndash;2.500</td>
                <td className="border border-gray-300 px-3 py-2 text-center">&euro;400&ndash;900</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Zout (waterontharder)</td>
                <td className="border border-gray-300 px-3 py-2 text-center">&euro;3.000&ndash;6.000</td>
                <td className="border border-gray-300 px-3 py-2 text-center">&euro;0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Filterpatronen (osmose)</td>
                <td className="border border-gray-300 px-3 py-2 text-center">&euro;0</td>
                <td className="border border-gray-300 px-3 py-2 text-center">&euro;1.000&ndash;1.500</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Onderhoud / service</td>
                <td className="border border-gray-300 px-3 py-2 text-center">&euro;2.000&ndash;3.000</td>
                <td className="border border-gray-300 px-3 py-2 text-center">&euro;400&ndash;600</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Harsbedvervanging</td>
                <td className="border border-gray-300 px-3 py-2 text-center">&euro;300&ndash;500</td>
                <td className="border border-gray-300 px-3 py-2 text-center">&euro;0</td>
              </tr>
              <tr className="bg-[#E0F2FE]">
                <td className="border border-gray-300 px-3 py-2 font-bold text-[#003F5C]">Totaal geschat</td>
                <td className="border border-gray-300 px-3 py-2 text-center font-bold text-[#003F5C]">&euro;6.300&ndash;12.000</td>
                <td className="border border-gray-300 px-3 py-2 text-center font-bold text-[#003F5C]">&euro;1.800&ndash;3.000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-4">
          Een waterontharder beschermt het volledige leidingnet en alle apparaten tegen kalk. Een osmosefilter produceert uitsluitend zacht drinkwater voor de keuken. In harde watergebieden met aantoonbare kalkproblemen is een waterontharder zinvol. In mildere watergebieden of voor huishoudens die puur drinkwater als hoofddoel hebben, is een osmosefilter doeltreffender en goedkoper.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Repareren of vervangen?
        </h2>
        <p className="text-gray-700 mb-4">
          De vuistregel is duidelijk: als de reparatiekosten meer bedragen dan 50% van de aanschafwaarde van een vergelijkbaar nieuw apparaat, is vervanging financieel verstandiger. Een bijkomende overweging is de leeftijd van het apparaat: bij een ontharder ouder dan 15 jaar zijn reserveonderdelen soms moeilijker te verkrijgen en is de energieficientie van moderne apparaten beter.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Repareer</strong> als: apparaat jonger dan 10 jaar, reparatiekosten &lt; 50% van vervangingswaarde, enkel klep of besturing defect</li>
          <li><strong>Vervang</strong> als: apparaat ouder dan 15-18 jaar, harsbed al vervangen, meerdere componenten defect, of reparatiekosten &gt; 50% van vervangingswaarde nieuw</li>
        </ul>

        <p className="text-gray-700 mb-6">
          Lees meer over alternatieven en onderhoud in onze gidsen over{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharders</Link>,{' '}
          <Link href="/waterontharder/regeneratie" className="text-[#005F8A] underline">regeneratie van de waterontharder</Link>,{' '}
          <Link href="/vergelijken/waterontharder-vergelijken" className="text-[#005F8A] underline">waterontkalker vs waterontharder</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose als alternatief</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kalk: wat het met leidingen doet</h3>
              <p className="text-sm text-gray-600">Hoe kalk en mineralen in drinkwater leidingen en apparaten aantasten over de tijd.</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisselaar levensduur</h3>
              <p className="text-sm text-gray-600">Hoe lang gaat ionenwisselingshars mee en wanneer is vervanging nodig?</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over de levensduur van waterontharders</h2>
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
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder overzicht</Link>,{' '}
          <Link href="/waterontharder/regeneratie" className="text-[#005F8A] underline">waterontharder regeneratie</Link>,{' '}
          <Link href="/waterkalker/vs-waterontharder" className="text-[#005F8A] underline">waterontkalker vs waterontharder</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>.
        </p>
      </main>
    </>
  );
}
