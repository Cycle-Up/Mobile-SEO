import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { CTABanner } from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Omgekeerde osmose filter zelf installeren: stappenplan',
  description:
    'Osmosefilter zelf installeren in 6 stappen. Gereedschap, aansluitpunten, kosten besparen. DIY-installatie duurt 2-3 uur zonder loodgieter.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/diy' },
  openGraph: {
    title: 'Omgekeerde osmose filter zelf installeren: stappenplan',
    description:
      'Osmosefilter zelf installeren in 6 stappen. Gereedschap, aansluitpunten, kosten besparen. DIY-installatie duurt 2-3 uur zonder loodgieter.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Heb ik een loodgieter nodig om een osmosefilter te installeren?',
    answer:
      'Nee, de meeste moderne osmosefilters zijn ontworpen voor doe-het-zelf installatie. De meegeleverde snelkoppelingen (push-fit verbindingen) vereisen geen solderen of speciale gereedschappen. Met een basis set gereedschappen en 2 tot 3 uur tijd installeert u het systeem zelf. Een loodgieter is alleen nodig als u geen geschikte koude wateraansluiting heeft of als u problemen ondervindt met de afvoer.',
  },
  {
    question: 'Wat heb ik nodig om een osmosefilter te installeren?',
    answer:
      'U heeft nodig: een koude wateraansluiting (koudwaterkraan of het koudwaterbuisje onder het aanrecht), een nabijgelegen afvoer voor het spoelwater, een stopcontact voor de boosterpomp (als aanwezig), een vrije plek onder het aanrecht van minimaal 40x40 cm, en een gat in het aanrecht of werkblad voor de speciale osmosekraan. Gereedschap: accuboor met 32-35mm gatzaag of spiraalboor, moersleutel, kniptang voor buisjes, en wat afplakband.',
  },
  {
    question: 'Hoe taak ik de koudwateraansluiting af?',
    answer:
      'De meeste installaties gebruiken een zadel-aankoppeling (saddle valve of aanboorzadel) op de bestaande koudwaterleiding. U knoopt het zadel om de bestaande buis (12-15 mm), boort een klein gaatje in de buis door het zadel, en sluit de osmose-ingangsslang aan. Een alternatief is een T-stuk plaatsen in de koudwaterleiding, wat een betere doorstroming geeft maar meer installatiewerk vereist.',
  },
  {
    question: 'Hoeveel water verspilt een osmosefilter?',
    answer:
      'Een standaard osmosefilter zonder pomp verspilt 3 tot 4 liter spoelwater per liter gefilterd water (verhouding 1:3 of 1:4). Modernere systemen met permeaatpomp of boosterpomp verbeteren dit tot 1:1 of zelfs beter (50% afvalwater). Het spoelwater gaat via de afvoeraansluiting naar het riool. Over een maand vertegenwoordigt dit extra watergebruik typisch 5 tot 15 euro extra op de waterrekening.',
  },
  {
    question: 'Hoe lang duurt de eerste spoelcyclus na installatie?',
    answer:
      'Na installatie laat u het systeem minimaal 30 tot 60 minuten doorlopen voordat u het water drinkt. Hierbij spoelt u de filters (pre-filters en membraan), vult u het drukvat, en gooit u de eerste vulling weg. Sommige fabrikanten adviseren de eerste 24 uur water weg te gooien. Dit verwijdert productieresten uit het membraan en de filters en zorgt voor de beste smaak.',
  },
  {
    question: 'Op welk waterdrukniveau werkt een osmosefilter?',
    answer:
      'Omgekeerde osmose heeft minimaal 2,5 tot 3 bar waterdruk nodig om goed te functioneren. De meeste Nederlandse huishoudens hebben 3 tot 6 bar waterdruk, wat voldoende is. Bij een druk onder 2,5 bar (soms in hoge flats of bij oude leidingen) produceert het systeem weinig water en is de verwijdering minder efficiënt. Een boosterpomp lost dit op. Controleer uw waterdruk met een manometer als u twijfelt.',
  },
  {
    question: 'Kan ik het osmosefilter ook in de kelder of bijkeuken installeren?',
    answer:
      'Ja, dat kan, mits u een koude wateraansluiting, afvoermogelijkheid en stopcontact heeft. U legt dan een aparte waterleiding naar een kraan in de keuken. Dit vereist meer werk maar is soms de beste oplossing als de ruimte onder het aanrecht beperkt is. Let op: bij langere slangen (meer dan 3 meter) kunt u drukverliezen krijgen en is een boosterpomp aan te raden.',
  },
  {
    question: 'Wanneer schakel ik toch een loodgieter in?',
    answer:
      'Schakel een loodgieter in wanneer: de bestaande waterleiding van metaal is en gesoldeerd moet worden, er geen geschikte afvoer beschikbaar is en een nieuwe aansluiting geboord moet worden in het PVC-afvoerriool (boven de sifon), de waterdruk te laag is en dit nader onderzocht moet worden, of wanneer u de klus na het starten van de installatie niet vertrouwt. Een loodgieter rekent typisch 80 tot 150 euro per uur voor dit type werk.',
  },
];

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Omgekeerde osmose filter zelf installeren: compleet stappenplan',
  description:
    'Osmosefilter zelf installeren in 6 stappen zonder loodgieter. Gereedschap, aansluitpunten, kosten besparen.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/omgekeerde-osmose/diy',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseDIYPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
              { '@type': 'ListItem', position: 3, name: 'Zelf installeren', item: 'https://waterfilterplatform.nl/omgekeerde-osmose/diy' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:underline">Omgekeerde osmose</Link>
            <span className="mx-2">/</span>
            <span>Zelf installeren</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Omgekeerde osmose filter zelf installeren: compleet stappenplan
          </h1>
          <QuickAnswer answer="Een osmosefilter zelf installeren is goed te doen in 2-3 uur zonder loodgieter. Je hebt een koudwaterkraan, afvoerverbinding en stopcontact nodig. De meeste systemen worden geleverd met snelkoppelingen die geen solderen vereisen." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-10 mb-4">
          Wat heeft u nodig voor de installatie?
        </h2>
        <p className="text-gray-700 mb-4">
          Voordat u begint, controleert u of aan alle basisvereisten is voldaan. De meeste osmosefilters worden geleverd met alles wat nodig is voor de aansluiting, inclusief kleurgecodeerde slangen en push-fit snelkoppelingen.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
          <h3 className="font-semibold text-[#003F5C] mb-3">Benodigde locatievereisten</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Vrije ruimte onder aanrecht: minimaal 40 x 40 x 50 cm (b x d x h)</li>
            <li>Koudwaterleiding bereikbaar vanuit de onderkast</li>
            <li>Nabijgelegen afvoer (sifon) voor het spoelwater</li>
            <li>Stopcontact (voor boosterpomp of UV-unit indien aanwezig)</li>
            <li>Mogelijkheid om een gat (32-35 mm) in het aanrecht te boren voor de osmosekraan</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
          <h3 className="font-semibold text-[#003F5C] mb-3">Gereedschap</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Accuboor met 32-35 mm gatzaag of spiraalboor</li>
            <li>Verstelbare moersleutel</li>
            <li>Kniptang voor kunststof slangen</li>
            <li>Schroevendraaier (kruis en plat)</li>
            <li>Afplaktape en een emmer voor eventueel wateropvang</li>
            <li>Waterpomptang voor het monteren van aansluitingen</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap 1: Locatie kiezen onder het aanrecht
        </h2>
        <p className="text-gray-700 mb-4">
          Kies een stabiele positie voor het osmosesysteem in de kast onder de gootsteen. Het systeem moet stevig kunnen worden bevestigd aan de kastachterwand of -zijkant. Houd rekening met de bereikbaarheid van de filters voor toekomstige vervanging: u wilt de filterhuizen kunnen losdraaien zonder het hele systeem te verplaatsen.
        </p>
        <p className="text-gray-700 mb-6">
          Controleer ook of het drukvat (de opslagtank, meestal 8 tot 12 liter) in dezelfde kast past. Sommige mensen plaatsen het drukvat in een aangrenzende kast of zelfs in een aparte bergruimte, wat prima werkt mits de verbindingsslangen niet te lang worden.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap 2: Koudwateraansluiting aftakken
        </h2>
        <p className="text-gray-700 mb-4">
          Dit is technisch de meest kritieke stap. U takt de koudwatertoevoer aan op de bestaande koudwaterleiding. Er zijn twee methoden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-3">
          <li>
            <strong>Zadel-aankoppeling (saddle valve):</strong> sluit een klem (zadel) om de bestaande buis en boort een gaatje van 3-4 mm door het zadel in de leiding. Sluit de osmose-ingangsslang aan op de klemkraan. Eenvoudig, geen solderen. Nadeel: kleine doorboring van de bestaande buis.
          </li>
          <li>
            <strong>T-stuk aansluiting:</strong> sluit het water af, zaag de leiding door, en monteer een T-stuk met een extra aftakking voor het osmosesysteem. Geeft betere doorstroming maar vereist meer werk. Aanbevolen als de bestaande buis al oud of kwetsbaar is.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Sluit altijd het hoofdkraan van het koudwater af voordat u begint. Laat de druk ontlopen door een kraan te openen totdat er geen water meer stroomt. Monteer dan de aansluiting en sluit het water weer langzaam aan.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap 3: Filterhuizen en pre-filters monteren
        </h2>
        <p className="text-gray-700 mb-4">
          Bevestig het filterchassis aan de achterwand van de onderkast met de meegeleverde schroeven of montagebeugels. Zorg dat de filterhuizen goed bereikbaar blijven. Sluit de inkomende koudwaterslang aan op de eerste ingang van het pre-filterblok.
        </p>
        <p className="text-gray-700 mb-6">
          De meeste systemen hebben een pre-filter van 5 micron sediment gevolgd door een actief koolfilter (GAC of CTO). Controleer of de filters al in de filterhuizen zitten of dat u ze zelf moet plaatsen. Draai de filterhuizen stevig aan maar niet te krachtig om de O-ringen niet te beschadigen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap 4: Membraanhouder en drukvat aansluiten
        </h2>
        <p className="text-gray-700 mb-4">
          Het RO-membraan zit in een aparte cilindrische houder. Bevestig deze houder naast of onder het filterchassis. Sluit de slang van het pre-filterblok aan op de ingang van de membraanhouder. Uit de membraanhouder komen twee uitgangen: het permeaat (gefilterd water) gaat richting het drukvat, het concentraat (spoelwater) gaat richting de afvoer.
        </p>
        <p className="text-gray-700 mb-6">
          Het drukvat staat op de bodem van de kast of hangt aan de wand. Sluit de permeaatslang van de membraanhouder aan op de inlaat van het drukvat. Een debietbegrenzer (flow restrictor) zit in de afvoerslang en regelt de verhouding permeaat/concentraat. Vervang deze restrictor nooit door een gewone slang, want dit beschadigt het membraan.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap 5: Osmosekraan boren en monteren
        </h2>
        <p className="text-gray-700 mb-4">
          De meeste osmosekranen vereisen een gat van 32 tot 35 mm in het aanrecht of werkblad. Gebruik een gatzaag van de juiste maat op de accuboor. Als uw aanrecht van graniet of steen is, heeft u een diamantboor nodig en doet u er goed aan dit door een professional te laten uitvoeren.
        </p>
        <p className="text-gray-700 mb-6">
          Steek de kraanstang door het gat, bevestig de onderzijde met de meegeleverde borgmoer en afdichtingsring, en sluit de watertoevoerslang van het drukvat aan op de aansluiting onderaan de kraan. Sluit ook de post-filter (koolstoffilter na het drukvat) aan in de lijn tussen drukvat en kraan.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap 6: Afvoer aansluiten en eerste flush uitvoeren
        </h2>
        <p className="text-gray-700 mb-4">
          Sluit de concentraatslang (spoelwater) aan op de sifon onder de gootsteen. De meeste systemen worden geleverd met een speciale sifon-aankoppeling die u eenvoudig kunt monteren zonder de sifon volledig te demonteren. Zorg dat de afvoeraansluiting boven de waterlijn van de sifon zit om terugstroming te voorkomen.
        </p>
        <p className="text-gray-700 mb-4">
          Na alle aansluitingen controleert u alle verbindingen visueel en opent u langzaam de koudwaterkraan. Kijk of er lekkages zijn bij alle aansluitpunten. Laat het systeem 30 tot 60 minuten doorlopen met de osmosekraan open totdat het drukvat vol is. Gooi de eerste vulling weg voordat u het water consumeert.
        </p>
        <p className="text-gray-700 mb-6">
          Sommige fabrikanten adviseren de eerste 24 uur water weg te gooien om productieresten volledig uit het membraan te spoelen. Daarna is het water klaar voor consumptie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kosten vergelijking: zelf doen versus loodgieter
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Post</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Zelf installeren</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Met loodgieter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Installatiemateriaal</td>
                <td className="border border-gray-300 px-3 py-2">Inbegrepen bij systeem</td>
                <td className="border border-gray-300 px-3 py-2">Inbegrepen bij systeem</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Extra gereedschap</td>
                <td className="border border-gray-300 px-3 py-2">0&ndash;30 euro (gatzaag)</td>
                <td className="border border-gray-300 px-3 py-2">0 euro</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Arbeidskosten loodgieter</td>
                <td className="border border-gray-300 px-3 py-2">0 euro</td>
                <td className="border border-gray-300 px-3 py-2">150&ndash;300 euro</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Uw tijdsinvestering</td>
                <td className="border border-gray-300 px-3 py-2">2&ndash;3 uur</td>
                <td className="border border-gray-300 px-3 py-2">30 min (toezicht)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Totale besparing</td>
                <td className="border border-gray-300 px-3 py-2 font-semibold text-green-700">150&ndash;270 euro bespaard</td>
                <td className="border border-gray-300 px-3 py-2">&mdash;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Door het systeem zelf te installeren bespaart u gemakkelijk 150 tot 270 euro. Wilt u eerst het juiste systeem kiezen? Bekijk ons overzicht van{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">
            osmosefilters om te kopen
          </Link>{' '}
          inclusief systemen met uitgebreide installatie-instructies. Meer weten over de levensduur van uw systeem na installatie? Lees onze pagina over{' '}
          <Link href="/omgekeerde-osmose/levensduur" className="text-[#005F8A] underline">
            de levensduur van een osmosefilter
          </Link>.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over zelf installeren
          </h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <CTABanner context="osmose" />

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">Omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">Osmosefilter kopen</Link>,{' '}
          <Link href="/omgekeerde-osmose/levensduur" className="text-[#005F8A] underline">Levensduur osmosefilter</Link> en{' '}
          <Link href="/omgekeerde-osmose/onderhoud" className="text-[#005F8A] underline">Onderhoud osmosefilter</Link>.
        </p>
      </div>
    </>
  );
}
