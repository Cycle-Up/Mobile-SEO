import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterontharder onderhoud: jaarlijks schema, reiniging en hars',
  description:
    'Een waterontharder vraagt minimaal onderhoud: jaarlijkse controle, zout bijvullen elke 4-8 weken, harsbed desinfecteren en om de 10-15 jaar hars vervangen. Compleet onderhoudsschema voor thuisgebruik.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/onderhoud' },
};

const faqItems = [
  {
    question: 'Hoe vaak heeft een waterontharder onderhoud nodig?',
    answer:
      'Een waterontharder is een van de meest onderhoudsarme waterbehandelingssystemen. De enige regelmatige taak is zout bijvullen elke 4 tot 8 weken. Daarnaast is een jaarlijkse controle aanbevolen waarbij u de injector reinigt, het harsbed desinfesteert en de regeneratie-instellingen controleert. Een professionele inspectie is zinvol elke 5 jaar of wanneer de ontharder minder goed presteert.',
  },
  {
    question: 'Hoe vaak moet ik zout bijvullen?',
    answer:
      'De bijvulfrequentie hangt af van het waterverbruik, de waterhardheid en de capaciteit van de zoutbak. Bij een gemiddeld huishouden van vier personen met hard water (boven 15 graden dH) is bijvullen elke 4 tot 6 weken gebruikelijk. Controleer het zoutniveau maandelijks en vul bij als de bak voor minder dan de helft gevuld is. Laat de bak nooit volledig leeg raken: dit riskeert een zoutbrug en lucht in het harsbed.',
  },
  {
    question: 'Hoe lang gaat het harsbed mee?',
    answer:
      'Het ionenwisselaarhars in een waterontharder gaat bij normaal gebruik 10 tot 20 jaar mee. Veroudering is herkenbaar aan een hogere zoutdosering die nodig is voor dezelfde onthardingscapaciteit, en aan resterende hardheid in het water ondanks correct onderhoud. Harsvervanging kost circa 150 tot 300 euro aan materialen en 1 tot 2 uur werk; sommige merken bieden harsvervanging als servicepakket aan.',
  },
  {
    question: 'Hoe desinfecteer ik het harsbed van mijn waterontharder?',
    answer:
      'Desinfecteer het harsbed eenmaal per jaar met een gespecialiseerde harscleaner zoals Res-Up, citroenzuuroplossing of een natriumhypochlorietzoutoplossing. Voeg het middel toe aan de zoutbak en start een handmatige regeneratiecyclus. Dit verwijdert bacterieopbouw, ijzerafzettingen en organische vervuiling. Bij ijzerrijk water (boven 0,5 mg/L) is halfjaarlijkse desinfectie aanbevolen.',
  },
  {
    question: 'Wat is een zoutbrug en hoe los ik die op?',
    answer:
      'Een zoutbrug is een harde koek van samengekit zout die boven in de zoutbak hangt terwijl de ruimte eronder leeg is. De ontharder regenereert dan zonder zout en het water blijft hard. U herkent een zoutbrug doordat het zoutniveau schijnbaar constant blijft. Los het op door voorzichtig met een lange stok of bezemsteel door de korst te prikken. Warm water toevoegen helpt bij het oplossen van de zoutkorst.',
  },
  {
    question: 'Wat kost professioneel onderhoud van een waterontharder?',
    answer:
      'Merken als Kinetico, BWT en Aquion bieden jaarlijkse onderhoudscontracten aan voor circa 80 tot 150 euro per jaar inclusief arbeidskosten, vervanging van kleine onderdelen en een waterhardheidstest. Dit is vaak voordeliger dan losse onderhoudsbeurten die 80 tot 200 euro per bezoek kunnen kosten. Bij harsvervanging of defecte ventielen komen materiaalkosten bovenop.',
  },
  {
    question: 'Heeft de garantie invloed op het onderhoud dat ik zelf mag doen?',
    answer:
      'De meeste fabrikanten eisen dat u zout van voldoende kwaliteit gebruikt (minimaal 99,5 procent natriumchloride) en dat u de regeneratie-instellingen correct houdt. Zelf de injector reinigen en de zoutbak schoonmaken is bij vrijwel alle merken toegestaan en staat zelfs in de handleiding. Reparaties aan de elektronica, ventielen of het harsbed zijn doorgaans voorbehouden aan erkende servicemonteurs als u de garantie wilt behouden.',
  },
];

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
    { '@type': 'ListItem', position: 2, name: 'Waterontharder', item: 'https://waterfilterplatform.nl/waterontharder' },
    { '@type': 'ListItem', position: 3, name: 'Onderhoud waterontharder', item: 'https://waterfilterplatform.nl/waterontharder/onderhoud' },
  ],
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterontharder onderhoud: jaarlijks schema, reiniging en hars',
  description:
    'Een waterontharder vraagt minimaal onderhoud: jaarlijkse controle, zout bijvullen elke 4-8 weken, harsbed desinfecteren en om de 10-15 jaar hars vervangen.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterontharder/onderhoud',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterontharderOnderhoudPage() {
  return (
    <>
      <SchemaOrg schema={[breadcrumbSchema, faqSchema, articleSchema]} />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterontharder" className="hover:underline">Waterontharder</Link> &rsaquo;{' '}
          <span>Onderhoud waterontharder</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterontharder onderhoud: jaarlijks schema, reiniging en hars
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een waterontharder is een van de meest onderhoudsarme waterbehandelingsapparaten voor
            thuisgebruik. De enige routinetaak is zout bijvullen elke vier tot acht weken. Met
            een jaarlijkse grondige controle en incidentele harsbedreiniging gaat een waterontharder
            tien tot twintig jaar mee.
          </p>
        </section>

        <QuickAnswer answer="Waterontharder onderhoud bestaat uit: zout bijvullen elke 4-8 weken (tablet- of blokzout 99,5%+ NaCl), jaarlijkse injector- en zoutbakreiniging, jaarlijkse harsbeddesinfectie, en harsvervanging na 10-20 jaar voor circa 150-300 euro. Professionele onderhoudscontracten kosten 80-150 euro per jaar." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe onderhoudsvriendelijk zijn waterontharders?
        </h2>
        <p className="text-gray-700 mb-4">
          Een waterontharder werkt op het principe van ionenwisseling: calcium- en magnesiumionen
          in het harde water worden uitgewisseld tegen natriumionen in het harsbed. Wanneer het
          hars verzadigd is, wordt het geregenereerd door een zoutoplossing (pekel) doorheen te
          spoelen, waarbij de calcium- en magnesiumionen worden losgemaakt en afgevoerd. Dit
          regeneratieproces verloopt automatisch op basis van een tijdklok of een watermeterteller.
        </p>
        <p className="text-gray-700 mb-4">
          Het ionenwisselaarhars zelf is een duurzame vulling die tien tot twintig jaar meegaat.
          De enige consumable die u regelmatig hoeft te vervangen is het regeneratiezout.
          Vergeleken met een <Link href="/omgekeerde-osmose/onderhoud" className="text-[#005F8A] underline">osmosefilter</Link>,
          waarbij membraan en prefilters om de een tot drie jaar vervangen moeten worden, is het
          structurele onderhoud van een waterontharder zeer beperkt.
        </p>
        <p className="text-gray-700 mb-6">
          De meeste problemen bij waterontharders zijn niet het gevolg van technische slijtage maar
          van verkeerd gebruik of suboptimale instellingen: te weinig zout, verkeerd zouttype,
          of regeneratietijden die niet zijn aangepast aan het actuele waterverbruik.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Zout bijvullen: frequentie, type en hoeveelheid
        </h2>
        <p className="text-gray-700 mb-4">
          Regeneratiezout is de enige verbruikstoffe bij een waterontharder. Het zoutniveau
          bewaken en tijdig bijvullen is de belangrijkste onderhoudstaak. Houd de volgende
          richtlijnen aan:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Controleer maandelijks</strong> het zoutniveau in de zoutbak. Vul bij als
            de bak voor minder dan de helft gevuld is
          </li>
          <li>
            <strong>Zoutpeil nooit helemaal op laten raken:</strong> bij een lege bak regenereert
            de ontharder met onvoldoende pekel, wat het harsbed niet volledig herstelt. Bovendien
            kan lucht in het systeem komen
          </li>
          <li>
            <strong>Aanbevolen niveau:</strong> houd de bak altijd minimaal een derde gevuld,
            maar vul niet hoger dan het maximumniveau (doorgaans aangegeven met een markering)
          </li>
          <li>
            <strong>Aanbevolen zouttype:</strong> tablet- of blokzout met een zuiverheid van
            minimaal 99,5 procent natriumchloride (NaCl). Dit is verkrijgbaar bij bouwmarkten,
            waterzuiveraars en online
          </li>
          <li>
            <strong>Niet aanbevolen:</strong> keukenzout, steenzout of strooizout. Deze bevatten
            onzuiverheden (calcium, magnesium, sulfaten) die slib vormen in de zoutbak en de
            injector kunnen verstoppen
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Zoutbrug: herkennen en oplossen
        </h2>
        <p className="text-gray-700 mb-4">
          Een zoutbrug is een hardnekkig onderhoudsprobleem bij waterontharders. Het ontstaat
          wanneer zoutkristallen samenklonteren tot een harde koek boven in de zoutbak, terwijl
          de ruimte eronder leeg is of slechts loose zoutkristallen bevat. De ontharder
          "ziet" de bak als vol maar er komt nauwelijks pekel in het harsbed.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Hoe herkent u een zoutbrug?</strong> Het zoutniveau lijkt constant te blijven
          ook al verbruikt het systeem water en regenereert het regelmatig. Tegelijkertijd wordt
          het water hard: uw zeep schuimt minder en u ziet kalkafzetting op kranen en douchekoppen.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Oplossing:</strong> prik voorzichtig met een lange stok, bezem- of mopsteel
          door de zoutkors om de brug te breken. Voeg daarna een halve emmer warm water toe om
          het losgebrokkelde zout te helpen oplossen. Start vervolgens een handmatige
          regeneratiecyclus om het harsbed te herstellen. Schakel over op grotere zoutblokken
          (tablets) in plaats van fijn granulaat om herhaling te voorkomen, en bewaar de zoutbak
          op een droge locatie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Harsbed desinfecteren: waarom en hoe?
        </h2>
        <p className="text-gray-700 mb-4">
          Over de tijd accumuleert het harsbed niet alleen calcium en magnesium, maar ook ijzer,
          mangaan en organische verbindingen. Bij hogere concentraties ijzer in het bronwater
          (boven 0,3 mg/L) is ijzeraccumulatie een serieus probleem dat de onthardingscapaciteit
          sterk vermindert. Ook bacteriegroei in het hars is een aandachtspunt, met name bij
          langdurig stilstaand water of na een vakantieperiode.
        </p>
        <p className="text-gray-700 mb-4">
          Desinfecteer het harsbed als volgt:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            Kies een geschikt reinigingsmiddel: Res-Up (ijzerverwijderaar op basis van
            natriumdithioniet), citroenzuuroplossing (10 procent, effectief tegen kalk en
            ijzer) of een gespecialiseerde waterontharder-desinfectant
          </li>
          <li>
            Voeg de aanbevolen hoeveelheid rechtstreeks toe aan de zoutbak, bovenop het zout
          </li>
          <li>
            Start een handmatige regeneratiecyclus via het bedieningspaneel. Het reinigingsmiddel
            lost op in de pekelmengeling en doorstroomt het harsbed
          </li>
          <li>
            Laat na de cyclus extra naspoelwater doorstromen voordat u de bypass terugzet
          </li>
          <li>
            Meet de waterhardheid na behandeling om te bevestigen dat de capaciteit is hersteld
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Injector en venturi reinigen
        </h2>
        <p className="text-gray-700 mb-4">
          De injector (ook wel ejector of venturi-injector) is het kleine onderdeel dat de
          pekeloplossing in het harsbed zuigt tijdens de regeneratie. Het werkt via het
          venturi-principe: stromend water creeert onderdruk en trekt de pekel aan. Zout- en
          slijkafzetting kunnen de injector na verloop van tijd verstoppen, wat leidt tot
          onvolledige regeneratie.
        </p>
        <p className="text-gray-700 mb-6">
          Controleer de injector jaarlijks als onderdeel van het onderhoudsschema. De meeste
          merken leveren een onderhoudsset mee met een klein borsteltje en een extra O-ring.
          Demonteer het injectorkopje voorzichtig (draai los of verwijder met een schroevendraaier),
          spoel het onder de kraan, verwijder eventueel zoutresten met een tandenstoker of
          dun borsteltje, en monteer terug. Vervang de O-ring als deze vervormd of beschadigd is.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hars vervangen: wanneer en wat kost het?
        </h2>
        <p className="text-gray-700 mb-4">
          Ionenwisselaarhars heeft een levensduur van tien tot twintig jaar bij normaal gebruik
          en correcte regeneratie. Vervanging is nodig wanneer:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Hogere zoutdosering vereist:</strong> u heeft aanzienlijk meer zout nodig
            voor dezelfde onthardingsprestatie; de regeneratie-instellingen zijn maximaal opgedraaid
          </li>
          <li>
            <strong>Resterende hardheid:</strong> water is harder dan de ingestelde doelwaarde,
            ondanks correcte regeneratieinstellingen en voldoende zout
          </li>
          <li>
            <strong>Harsleeftijd boven 15 jaar:</strong> bij systemen ouder dan 15 jaar is
            preventieve harsvervanging te overwegen
          </li>
          <li>
            <strong>Ernstige ijzerverontreiniging:</strong> sterk ijzerhoudend bronwater kan
            het hars na 5 tot 8 jaar al uitputten
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          De kosten van harsvervanging bedragen circa 150 tot 300 euro aan materialen (standaard
          harscylinder 8 tot 20 liter), plus installatiekosten van 80 tot 150 euro als u een
          monteur inschakelt. Sommige gebruikers vervangen het hars zelf: dit is technisch
          mogelijk maar vereist het leeghalen van het systeem en het correct doseren van het
          nieuwe hars. Zie ook onze vergelijking van{' '}
          <Link href="/waterontharder/kosten" className="text-[#005F8A] underline">waterontharder kosten</Link>{' '}
          voor een volledig overzicht.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Jaarlijks onderhoudsschema voor waterontharders
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Frequentie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Taak</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium align-top">Maandelijks</td>
                <td className="border border-gray-300 px-3 py-2">Zoutniveau controleren en bijvullen indien nodig; controleren op zoutbrug</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium align-top">Elk kwartaal</td>
                <td className="border border-gray-300 px-3 py-2">Waterhardheid meten na de ontharder; regeneratiefrequentie en zoutverbruik noteren</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium align-top">Jaarlijks</td>
                <td className="border border-gray-300 px-3 py-2">Injector reinigen; zoutbak schoonmaken; harsbed desinfecteren; bypass-klep controleren; regeneratie-instellingen verifieren</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium align-top">Elke 5 jaar</td>
                <td className="border border-gray-300 px-3 py-2">Professionele keuring harsbed; harscapaciteitstest; controle ventielen en aansluitingen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium align-top">10&ndash;20 jaar</td>
                <td className="border border-gray-300 px-3 py-2">Harsvervanging bij verminderde capaciteit; kosten circa 150&ndash;300 euro materialen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Professioneel onderhoud versus zelf doen
        </h2>
        <p className="text-gray-700 mb-4">
          Waterontharder merken als Kinetico, BWT, Fleck en Aquion bieden jaarcontracten aan
          voor regulier onderhoud. Deze contracten kosten doorgaans 80 tot 150 euro per jaar
          en omvatten een jaarlijks bezoek waarbij de monteur de injector reinigt, het harsbed
          controleert, de regeneratie-instellingen optimaliseert en eventuele kleine onderdelen
          vervangt. Bij harsvervanging of ernstige defecten gelden aanvullende kosten.
        </p>
        <p className="text-gray-700 mb-6">
          De meeste onderhoudstaken zijn goed door de eigenaar zelf uit te voeren: zout bijvullen,
          zoutbrug doorprikken, zoutbak reinigen en harsbed desinfecteren. Een handig persoon
          kan ook de injector zelf reinigen met de meegeleverde onderhoudsset. Inschakelen van
          een monteur is pas nodig bij aanhoudend hard water na correcte zelfcontrole, lekkages,
          foutcodes op het display of bij harsvervanging.
        </p>
        <p className="text-gray-700 mb-6">
          Overweegt u de overstap naar een alternatief dat geen zout of regeneratie nodig heeft?
          Lees dan onze vergelijking van{' '}
          <Link href="/waterontharder/vs-osmose" className="text-[#005F8A] underline">waterontharder versus osmosefilter</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over waterontharder onderhoud
          </h2>
          {faqItems.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder overzicht</Link>,{' '}
          <Link href="/waterontharder/zout" className="text-[#005F8A] underline">waterontharder zout kiezen</Link>,{' '}
          <Link href="/waterontharder/vs-osmose" className="text-[#005F8A] underline">waterontharder vs osmose</Link> en{' '}
          <Link href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid in Nederland</Link>.
        </p>
      </main>
    </>
  );
}
