import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'pH van osmosewater: waarom het zuur is en hoe u het corrigeert',
  description:
    'Osmosewater heeft een pH van 5-6 door CO2-absorptie. Dit is licht zuur maar niet schadelijk voor gezondheid. Remineralisatiefilter brengt de pH naar 7-7,5.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/ph' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waarom heeft osmosewater een lage pH?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het RO-membraan verwijdert carbonaationen (HCO3-) en calciumionen die normaal als pH-buffer in water fungeren. Zonder deze buffer absorbeert het osmosewater CO2 uit de lucht. CO2 reageert met water tot koolzuur (H2CO3), waardoor de pH daalt naar 5-6. Dit is een chemisch onvermijdelijk gevolg van het verwijderen van alle opgeloste mineralen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is de lage pH van osmosewater schadelijk voor de gezondheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Maagsap heeft een pH van 1,5-3, veel lager dan osmosewater met pH 5-6. Uw maag neutraliseert elke lage pH onmiddellijk na inname. Zowel de EFSA (Europese Voedselautoriteit) als de WHO bevestigen dat een pH van 5-6 in drinkwater geen gezondheidsrisico vormt. U kunt osmosewater met pH 5-6 probleemloos drinken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke pH heeft osmosewater normaal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vers osmosewater direct uit de druktank heeft doorgaans een pH van 5,0-6,5. Na contact met lucht in een glas kan de pH iets verder dalen door extra CO2-absorptie. Met een calciet remineralisatiefilter stijgt de pH naar 7,0-7,5. Met een calciet-magnesiet filter naar 7,0-7,8. Alkaliserende filters kunnen de pH tot 8-9 brengen, maar dit is voor de meeste mensen niet noodzakelijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan osmosewater met lage pH leidingen beschadigen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, dit is een reeel risico. Water met een pH onder 6,5 is licht corrosief voor koperen en ijzeren leidingen en kan metaalionen oplossen. Osmosewater mag daarom niet door koperen huisleidingen stromen. Een osmosefilter wordt altijd direct op een aparte osmosekraan aangesloten, rechtstreeks van de druktank. Koper- en loodconcentraties in osmosewater zijn dan niet aan de orde.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de beste manier om de pH van osmosewater te verhogen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meest aanbevolen methode is een calciet remineralisatiefilter (CaCO3) als laatste filterstap. Dit verhoogt de pH naar 7-7,5 en voegt ook gezonde calcium toe. Een calciet-magnesiet combinatiefilter voegt zowel calcium als magnesium toe en is optimaal voor drinkwater. Kosten: 15-25 euro per jaar voor filtervervanging.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heeft pH van osmosewater invloed op de smaak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, licht. Osmosewater met een lage pH (5-6) kan een iets scherpere of "platte" smaak hebben. De WHO adviseert voor optimale drinkwatersmaak een pH van 6,5-8,5. Voor koffiezetten adviseert de Specialty Coffee Association (SCA) een pH van 6,5-7,5. Een remineralisatiefilter verbetert zowel de pH als de smaak van osmosewater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke pH heeft kraanwater vergeleken met osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nederlands kraanwater heeft doorgaans een pH van 7,5-8,5, licht basisch. Dit komt door de aanwezigheid van carbonaten, calcium en magnesium als natuurlijke bufferstoffen. Na osmoseverwerking daalt de pH naar 5-6 doordat deze buffers zijn verwijderd. Met een remineralisatiefilter nadert het osmosewater de pH van kraanwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is alkalisch water (hoge pH) beter dan osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er is geen wetenschappelijk bewijs dat alkalisch water (pH 8-9) gezondheidsvoordelen biedt boven normaal drinkwater met pH 7-7,5. Marketingclaims over het neutraliseren van de zuurtegraad van het lichaam zijn onjuist: uw lichaam regelt de bloedzuur-base balans nauwkeurig ongeacht wat u drinkt. Een pH van 7-7,5 na remineralisatie is voor osmosewater volledig voldoende.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'pH van osmosewater: waarom het zuur is en hoe u het corrigeert',
  description:
    'Osmosewater heeft een pH van 5-6 door CO2-absorptie na verwijdering van carbonaatbuffers. Niet schadelijk voor gezondheid. Remineralisatiefilter corrigeert.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/osmose-water/ph',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseWaterPhPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Osmosewater', item: 'https://waterfilterplatform.nl/osmose-water' },
              { '@type': 'ListItem', position: 3, name: 'pH van osmosewater', item: 'https://waterfilterplatform.nl/osmose-water/ph' },
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
          <span>pH van osmosewater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            pH van osmosewater: waarom het zuur is en hoe u het corrigeert
          </h1>
          <p className="text-[#005F8A] text-lg">
            Osmosewater heeft een lagere pH dan kraanwater, vaak tussen 5 en 6. Dit klinkt alarmerend,
            maar is niet gevaarlijk voor uw gezondheid. Begrijp de chemie erachter en leer hoe een
            eenvoudig remineralisatiefilter de pH naar 7-7,5 brengt.
          </p>
        </section>

        <QuickAnswer answer="Osmosewater heeft een pH van 5-6 omdat het RO-membraan carbonaatbuffers verwijdert en het water daarna CO2 absorbeert. Dit is niet schadelijk: maagsap heeft pH 1,5. Een calciet remineralisatiefilter corrigeert de pH naar 7-7,5 voor optimale smaak en veiligheid voor leidingen." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom heeft osmosewater een lage pH?
        </h2>
        <p className="text-gray-700 mb-4">
          De verklaring is puur chemisch. Normaal kraanwater bevat <strong>carbonaationen
          (HCO&sup3;&minus;)</strong> en <strong>calciumionen (Ca&sup2;&plus;)</strong> die als
          natuurlijke pH-buffer functioneren. Deze bufferstoffen houden de pH stabiel rond 7,5-8,5,
          zelfs als CO&sup2; in contact komt met het water.
        </p>
        <p className="text-gray-700 mb-4">
          Het RO-membraan verwijdert 95-99% van alle opgeloste ionen, inclusief deze carbonaat- en
          calciumionen. Het resulterende osmosewater heeft geen buffercapaciteit meer. Wanneer het
          water vervolgens in contact komt met lucht &mdash; in de druktank, de leidingen of in uw
          glas &mdash; absorbeert het CO&sup2;. Die CO&sup2; reageert met water tot koolzuur
          (H&sup2;CO&sup3;), dat gedeeltelijk dissocieert en H&plus;-ionen vrijmaakt.
        </p>
        <p className="text-gray-700 mb-6">
          De vrijgekomen H&plus;-ionen verlagen de pH. Zonder bufferstoffen die deze ionen kunnen
          opnemen, daalt de pH snel naar 5-6. Hoe langer het water in contact is met lucht, hoe
          lager de pH kan worden. Dit is hetzelfde mechanisme waardoor regenwater een pH van
          circa 5,6 heeft.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De pH-schaal begrijpen: is pH 5-6 gevaarlijk?
        </h2>
        <p className="text-gray-700 mb-4">
          De pH-schaal loopt van 0 tot 14: pH 7 is neutraal, lager is zuur, hoger is basisch. Ter
          vergelijking:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Maagsap: pH <strong>1,5&ndash;3</strong> (sterk zuur)</li>
          <li>Sinaasappelsap: pH <strong>3,5</strong></li>
          <li>Koffie: pH <strong>4,5&ndash;5</strong></li>
          <li>Osmosewater (onbehandeld): pH <strong>5&ndash;6</strong></li>
          <li>Regenwater: pH <strong>5,6</strong> (door CO&sup2; uit lucht)</li>
          <li>Kraanwater Nederland: pH <strong>7,5&ndash;8,5</strong></li>
        </ul>
        <p className="text-gray-700 mb-6">
          De <strong>EFSA</strong> (Europese Voedselautoriteit) en de <strong>WHO</strong> bevestigen
          dat een pH van 5-6 in drinkwater <strong>geen gezondheidsrisico</strong> vormt. Uw maag
          bevat altijd maagzuur met pH 1,5-3; elke lage pH in drinkwater wordt onmiddellijk
          geneutraliseerd. Er is geen wetenschappelijk bewijs dat licht zuur drinkwater schadelijk
          is bij normaal gebruik.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          pH en smaak van osmosewater
        </h2>
        <p className="text-gray-700 mb-4">
          Hoewel de lage pH geen gezondheidsrisico vormt, kan het wel de smaakbeleving beinvloeden.
          Osmosewater zonder remineralisatie wordt vaak omschreven als <strong>"plat"</strong> of
          <strong>"leeg"</strong> van smaak. De lage mineraalconcentratie en licht zure pH dragen
          hier beide aan bij.
        </p>
        <p className="text-gray-700 mb-4">
          De WHO adviseert voor optimale drinkwatersmaak een pH van <strong>6,5&ndash;8,5</strong>.
          De Specialty Coffee Association (SCA) hanteert als koffiezetstandaard een pH van
          <strong> 6,5&ndash;7,5</strong>. Osmosewater met pH 5-5,5 produceert koffie die iets
          scherper of zuurder smaakt dan optimaal.
        </p>
        <p className="text-gray-700 mb-6">
          Voor baristas en koffieliefhebbers is remineralisatie van osmosewater daarom niet alleen
          een pH-kwestie maar ook een smaakvereiste. Lees meer op onze pagina over{' '}
          <Link href="/osmose-water/remineraliseren" className="text-[#005F8A] underline">osmosewater remineraliseren</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          pH en metaalcorrosie: waarom een aparte osmosekraan belangrijk is
        </h2>
        <p className="text-gray-700 mb-4">
          Een aspect van de lage pH dat wel praktisch relevant is: water met pH onder 6,5 is
          <strong> corrosief voor koperen en ijzeren leidingen</strong>. Het licht zure osmosewater
          lost metaalionen op uit het leidingmateriaal. In een woning met koperen huisleidingen kan
          dit leiden tot verhoogde koperconcentraties in het water.
        </p>
        <p className="text-gray-700 mb-6">
          Daarom wordt een osmosefilter <strong>altijd direct op een aparte osmosekraan</strong>{' '}
          aangesloten, rechtstreeks vanuit de druktank via een eigen kunststof leiding. Het
          osmosewater stroomt nooit door de koperen huisleidingen. Dit is de standaardinstallatie
          voor alle onder-aanrecht RO-systemen. Zie onze uitleg over{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>{' '}
          voor meer details over de installatie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe corrigeert u de pH van osmosewater?
        </h2>
        <p className="text-gray-700 mb-4">
          Er zijn vier methoden om de pH van osmosewater te verhogen, elk met eigen voor- en nadelen:
        </p>

        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">
              1. Calciet remineralisatiefilter (CaCO3) &mdash; Aanbevolen
            </h3>
            <p className="text-gray-700 text-sm">
              Calciet reageert met het koolzuur in osmosewater en neutraliseert het. Dit verhoogt
              de pH naar 7,0-7,5 en voegt tegelijk gezonde calcium toe aan het water. Kosten:
              15-25 euro per jaar voor filtervervanging. Dit is de meest aanbevolen en meest
              gebruikte oplossing voor thuis.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">
              2. Calciet + magnesiet combinatiefilter &mdash; Optimaal voor drinkwater
            </h3>
            <p className="text-gray-700 text-sm">
              Combineert calciet (CaCO&sup3;) met magnesiet (MgCO&sup3;) voor een pH van 7,0-7,8
              plus toevoeging van zowel calcium als magnesium. Optimaal voor drinkwaterkwaliteit
              en smaak. Kosten: 20-35 euro per jaar. Dit filter voegt ook de mineralen toe die
              bijdragen aan de{' '}
              <Link href="/osmose-water/mineralen" className="text-[#005F8A] underline">mineralenbalans van osmosewater</Link>.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">
              3. Alkaliserende filterpatroon (ionenwisseling) &mdash; Gebruik met voorzichtigheid
            </h3>
            <p className="text-gray-700 text-sm">
              Verhoogt pH tot 8-9 via ionenwisseling. Kan echter overmatig natrium toevoegen, wat
              voor mensen op een natriumarm dieet ongewenst is. Controleer de specificaties van het
              filter op natriumafgifte. Niet nodig voor de meeste gebruikers; een pH boven 8 biedt
              geen bewezen gezondheidsvoordelen.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">
              4. Kaliumbicarbonaat dosering &mdash; Professioneel gebruik
            </h3>
            <p className="text-gray-700 text-sm">
              Professionele oplossing voor nauwkeurige pH-controle. KHCO&sup3; lost op in water en
              verhoogt de pH zonder natrium toe te voegen. Wordt gebruikt door koffiebars en
              waterkwaliteitsspecialisten voor precieze water recipes. Vereist nauwkeurige dosering.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          pH meten van osmosewater
        </h2>
        <p className="text-gray-700 mb-4">
          U kunt de pH van uw osmosewater eenvoudig meten met de volgende instrumenten:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Digitale pH-meter:</strong> 10-30 euro, nauwkeurig tot 0,1 pH-eenheid. Regelmatig
            kalibreren met ijkoplossingen (pH 4 en pH 7 buffers) voor betrouwbare metingen.
          </li>
          <li>
            <strong>pH-teststrips:</strong> 5-10 euro per pakket, minder nauwkeurig (0,5 pH-eenheid
            nauwkeurigheid), voldoende voor globale controle van de filterwerking.
          </li>
          <li>
            <strong>Druppeltest (aquariumtest):</strong> nauwkeurig en goedkoop, licht bewerkelijker
            in gebruik maar geschikt voor regelmatige controle.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Meet de pH direct na het tappen, niet na langdurig staan in een open glas (extra CO&sup2;
          absorptie verlaagt de pH verder). Zie ook onze uitleg over de{' '}
          <Link href="/kraanwater/ph" className="text-[#005F8A] underline">pH van kraanwater</Link>{' '}
          voor vergelijking met normaal leidingwater.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over de pH van osmosewater
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
          <Link href="/kraanwater/ph" className="text-[#005F8A] underline">pH van kraanwater</Link> en{' '}
          <Link href="/osmose-water/mineralen" className="text-[#005F8A] underline">mineralen in osmosewater</Link>.
        </p>
      </main>
    </>
  );
}
