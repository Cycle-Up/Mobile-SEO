import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Legionella thuis: risico in huishoudleidingen en hoe te voorkomen',
  description:
    'Legionella in huishoudleidingen kan dodelijk zijn. Risico neemt toe bij stagnant warm water (25-50 graden Celsius). Na vakantie of verbouwing altijd doorspoelen. Welke maatregelen beschermen uw huishouden?',
  alternates: { canonical: 'https://waterfilterplatform.nl/kraanwater/legionella-thuis' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe groot is het Legionella-risico in een gewone woning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In een normaal bewoonde woning waarbij warm water regelmatig wordt gebruikt, is het Legionella-risico laag. Het risico neemt toe bij: leegstand van een week of langer, boiler ingesteld op minder dan 60 graden Celsius, oude leidingen met "dode" leidingdelen (afgesloten maar niet verwijderde takken), en bij gebruik van een jacuzzi of bubbelbad. Grote gebouwen met uitgebreide leidingstelsels (hotels, zorginstellingen) hebben aanzienlijk hogere risicos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe spoel ik na vakantie correct door om Legionella te voorkomen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na een vakantie van een week of langer: spoel elke koud-waterkraan minimaal 2-3 minuten door. Spoel elke warme-waterkraan en douche 1-2 minuten op maximale warmtestand door. Doe dit voor alle waterafnamepunten in de woning. Open ramen of ventileer de badkamer goed tijdens het doorspoelen, zodat u de douchedamp niet inademt. Leg de doucheknop vast op heet en ga even uit de ruimte staan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Op welke temperatuur moet ik mijn boiler instellen om Legionella te voorkomen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stel uw warmwaterboiler in op minimaal 60 graden Celsius. Bij 60 graden Celsius sterft Legionella binnen 2 minuten. Bij 70 graden sterft de bacterie onmiddellijk. Hoe lager de boilertemperatuur, hoe groter het groeirisico: de gevarenzone ligt tussen 25 en 50 graden. Hogere boilertemperaturen verhogen ook het energieverbruik, maar dit is de aanbevolen maatregel door GGD en RIVM.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kun je Legionella krijgen door drinkwater te drinken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, Legionella verspreidt zich niet via drinken van besmet water maar via het inademen van fijne waterdruppeltjes (aerosolen). Aerosolen ontstaan bij douchen, in een jacuzzi, bij gebruik van een hogedrukspuit en bij diverse industriele processen. Zieke mensen of mensen met een verminderde weerstand zijn kwetsbaarder. Een waterfilter of osmosefilter biedt dan ook geen bescherming tegen Legionella in leidingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is mijn verhuurder verplicht Legionella-maatregelen te treffen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij gebouwen met 10 of meer wooneenheden of bij collectieve waterinstallaties is een verhuurder wettelijk verplicht een Legionella-risicoanalyse te laten uitvoeren en een beheersplan op te stellen. Voor kleinere verhuurde woningen is dit niet wettelijk verplicht, maar de verhuurder heeft wel een zorgplicht voor veilige bewoning. Als huurder kunt u de verhuurder aanspreken op watertemperatuur en leidingonderhoud.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de symptomen van de veteranenziekte (Legionella)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De veteranenziekte is een ernstige vorm van longontsteking veroorzaakt door Legionella pneumophila. Symptomen beginnen 2-10 dagen na blootstelling: hoge koorts (boven 39 graden), hoesten, kortademigheid, spierpijn, hoofdpijn en soms diarree en verwardheid. Zonder behandeling is de sterfte 5-15%; met tijdige antibioticabehandeling (fluorochinolonen of azithromycine) is het risico aanzienlijk lager. Raadpleeg direct een arts bij deze symptomen na mogelijke blootstelling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen veteranenziekte en Pontiac-koorts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beide worden veroorzaakt door Legionella-bacterieen, maar de ernst verschilt sterk. Veteranenziekte is een ernstige longontsteking met 5-15% sterfte. Pontiac-koorts is een milde, griepachtige ziekte met koorts, spierpijn en hoofdpijn die vanzelf overgaat binnen 2-5 dagen zonder behandeling. Pontiac-koorts vereist geen antibiotica. Mensen met een verzwakt immuunsysteem, ouderen, rokers en mensen met longaandoeningen lopen meer risico op de ernstige veteranenziekte.',
      },
    },
    {
      '@type': 'Question',
      name: 'Beschermt een waterfilter thuis tegen Legionella?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, een waterfilter (osmosefilter of actief-koolfilter) biedt geen bescherming tegen Legionella. De bacterie bevindt zich niet zozeer in het drinkwater dat u filtert, maar in de warmwaterleidingen en reservoirs van uw woning. Bescherming vereist thermische maatregelen (boiler op 60 graden, wekelijks heet doorspoelen) en preventie van stagnant warm water. Filtratie is hier niet de oplossing.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Legionella thuis: risico in huishoudleidingen en hoe te voorkomen',
  description:
    'Legionella in huishoudleidingen kan dodelijk zijn. Risico neemt toe bij stagnant warm water (25-50 graden Celsius). Na vakantie of verbouwing altijd doorspoelen. Welke maatregelen beschermen uw huishouden?',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/kraanwater/legionella-thuis',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function LegionellaThuisPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Kraanwater', item: 'https://waterfilterplatform.nl/kraanwater' },
              { '@type': 'ListItem', position: 3, name: 'Legionella thuis', item: 'https://waterfilterplatform.nl/kraanwater/legionella-thuis' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/kraanwater" className="hover:underline">Kraanwater</Link> &rsaquo;{' '}
          <span>Legionella thuis</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Legionella thuis: risico in huishoudleidingen en hoe te voorkomen
          </h1>
          <p className="text-[#005F8A] text-lg">
            Legionella pneumophila is een bacterie die in huishoudleidingen kan groeien bij
            stilstaand warm water tussen 25 en 50 graden Celsius. Besmetting via douchenevels
            kan leiden tot de ernstige veteranenziekte met een sterfte van 5&ndash;15%.
            Dit artikel legt uit wanneer het risico het grootst is en welke maatregelen uw
            huishouden beschermen.
          </p>
        </section>

        <QuickAnswer answer="Legionella groeit in huisleidingen bij stilstaand warm water (25-50 graden Celsius). Na vakantie altijd 2-3 minuten doorspoelen. Boiler instellen op minimaal 60 graden. Besmetting gaat via douchenevels, niet via drinken. Een waterfilter biedt geen bescherming: thermische maatregelen zijn de oplossing." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is Legionella?
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>Legionella pneumophila</strong> is een gram-negatieve staafvormige bacterie die
          van nature voorkomt in zoetwater: rivieren, meren en grondwater bevatten doorgaans lage
          concentraties Legionella. De bacterie wordt pas gevaarlijk wanneer ze de kans krijgt zich
          sterk te vermenigvuldigen in kunstmatige watersystemen: koeltorens, zwembaden, jacuzzis,
          klimaatinstallaties en huishoudelijke warmwatersystemen.
        </p>
        <p className="text-gray-700 mb-4">
          Legionella veroorzaakt twee ziektebeelden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Veteranenziekte (Legionellapneumonie):</strong> een ernstige longontsteking
            met symptomen als hoge koorts, hoest, kortademigheid en verwardheid. Sterfte zonder
            behandeling: 5&ndash;15%; met antibiotica aanzienlijk lager. Incubatietijd: 2&ndash;10 dagen.
          </li>
          <li>
            <strong>Pontiac-koorts:</strong> een milde griepachtige ziekte met koorts en spierpijn
            die vanzelf overgaat binnen 2&ndash;5 dagen, zonder antibiotica. Niet levensbedreigend.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          De naam &ldquo;veteranenziekte&rdquo; stamt van de eerste beschreven uitbraak in 1976: bij een
          congres van de American Legion in Philadelphia raakten 221 mensen ziek en stierven 34
          deelnemers. Het koelsysteem van het hotel bleek besmet. Sindsdien is Legionella erkend
          als een serieus volksgezondheidsrisico.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Groeiomstandigheden in huisleidingen
        </h2>
        <p className="text-gray-700 mb-4">
          Legionella gedijt onder vier specifieke omstandigheden die in huisleidingen kunnen optreden:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Factor</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Risico-omstandigheid</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Veilige omstandigheid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Temperatuur</td>
                <td className="border border-gray-300 px-3 py-2">25&ndash;50&deg;C (optimum 35&ndash;45&deg;C)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;20&deg;C of &gt;60&deg;C</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Waterbeweging</td>
                <td className="border border-gray-300 px-3 py-2">Stagnerend, stilstaand water</td>
                <td className="border border-gray-300 px-3 py-2">Regelmatig doorstroomd water</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Biofilm</td>
                <td className="border border-gray-300 px-3 py-2">Aanwezig in leidingwanden</td>
                <td className="border border-gray-300 px-3 py-2">Regelmatige thermische desinfectie</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Chloorconcentratie</td>
                <td className="border border-gray-300 px-3 py-2">Laag of afwezig (&lt;0,1 mg/L)</td>
                <td className="border border-gray-300 px-3 py-2">Voldoende restchloor aanwezig</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Bijzonder risicovol zijn <strong>dode leidingdelen</strong>: afgetakte leidingen die bij
          een verbouwing zijn afgesloten maar niet verwijderd. In deze blinde leidingdelen staat water
          permanent stil en kan Legionella een grote kolonie opbouwen die zich vanuit dit reservoir
          verspreidt naar het aktieve leidingstelsel.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe verspreidt Legionella zich?
        </h2>
        <p className="text-gray-700 mb-4">
          Het is essentieel te begrijpen dat Legionella zich <strong>niet</strong> verspreidt via
          het drinken van besmet water. De besmettingsroute is uitsluitend via het inademen van
          fijne waterdruppeltjes (aerosolen). Aerosolen ontstaan bij:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Douchen:</strong> douchekoppen produceren fijne nevels die diep in de longen kunnen doordringen</li>
          <li><strong>Jacuzzi en bubbelbad:</strong> de belletjes produceren intensief aerosolen uit warm water &mdash; hoog risico</li>
          <li><strong>Hogedrukspuit:</strong> reinigen met een hogedrukspuit bij een besmet watersysteem</li>
          <li><strong>Koeltorens:</strong> de voornaamste bron van grote uitbraken in kantoorgebouwen en fabrieken</li>
          <li><strong>Mondwater-apparaten en vernevelaars</strong> in winkelgroenten-afdelingen</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Dit heeft een directe implicatie voor waterfiltratie: een osmosefilter of koolstoffilter
          op uw drinkwaterleiding beschermt <strong>niet</strong> tegen Legionella. De bacterie
          bevindt zich in uw warmwaterleidingen en -reservoir, niet in het koude drinkwater dat u
          filtert. Bescherming vereist thermische en mechanische maatregelen, geen filtratie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Risicosituaties in uw woning
        </h2>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          1. Na vakantie of langere leegstand
        </h3>
        <p className="text-gray-700 mb-4">
          Na een afwezigheid van een week of langer heeft het water in uw leidingen stilgestaan.
          Als de leidingen in een warme woning liggen, kunnen warmwaterleidingen de Legionella-gevarenzone
          bereiken (25&ndash;50&deg;C). <strong>Actie:</strong> spoel voor gebruik alle kranen
          2&ndash;3 minuten koud door en alle douches 1&ndash;2 minuten op maximale warmtestand.
          Verlaat de badkamer tijdens het doorspoelen van de douche of ventileer goed zodat u de
          aerosolen niet inademt.
        </p>
        <p className="text-gray-700 mb-6">
          In de zomer is dit risico groter vanwege hogere omgevingstemperaturen. Lees meer op onze
          pagina over{' '}
          <Link href="/kraanwater/zomer" className="text-[#005F8A] underline">
            kraanwater in de zomer
          </Link>
          .
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          2. Boiler of geiser ingesteld op te lage temperatuur
        </h3>
        <p className="text-gray-700 mb-4">
          Een warmwaterreservoir dat wordt bewaard op 50&ndash;55&deg;C ligt in de optimale
          groeizone voor Legionella. Uit energiebesparingsoverwegingen worden boilers soms lager
          ingesteld. <strong>Actie:</strong> stel uw boiler in op minimaal <strong>60&deg;C</strong>.
          Bij 60&deg;C sterft Legionella binnen 2 minuten; bij 70&deg;C onmiddellijk. Gebruik een
          thermostatische mengkraan om het hete water op een veilige gebruikstemperatuur te brengen
          zodat u zich niet verbrandt.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          3. Verbouwing en nieuwbouw
        </h3>
        <p className="text-gray-700 mb-6">
          Na een verbouwing waarbij leidingen zijn aangelegd of gewijzigd, kunnen dode leidingdelen
          achterblijven. Laat bij verbouwing altijd de aannemer bevestigen dat afgekoppelde leidingen
          volledig zijn verwijderd, niet alleen afgesloten. Nieuwe leidingen bevatten ook geen
          beschermende biofilm en kunnen hogere lekkage van metalen hebben. Spoel bij oplevering
          van een nieuwbouw alle tappunten grondig door.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          4. Zelden gebruikte kranen en douches
        </h3>
        <p className="text-gray-700 mb-6">
          Een reservebadkamer, een kraan in de kelder of een buitenkraan die weinig wordt gebruikt,
          is een potentieel Legionella-reservoir. <strong>Advies:</strong> spoel zelden gebruikte
          kranen en douches minstens eens per week gedurende 1&ndash;2 minuten door. Dit houdt het
          water in beweging en verhindert bacteriegroei door stagnatie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Preventie: thermische en mechanische maatregelen
        </h2>
        <p className="text-gray-700 mb-4">
          Effectieve Legionella-preventie in een particuliere woning steunt op een combinatie van
          thermische maatregelen en het vermijden van stagnatie:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Boilertemperatuur op 60&deg;C:</strong> de eerste en belangrijkste maatregel.
            Controleer de instelling van uw boiler of geiser en pas deze aan indien nodig.
          </li>
          <li>
            <strong>Wekelijkse thermische desinfectie:</strong> laat de douche(s) eens per week
            volledig op maximale temperatuur (ideaal &gt;60&deg;C) gedurende 1&ndash;2 minuten
            doorstromen. Doe dit terwijl u niet in de doucheruimte staat.
          </li>
          <li>
            <strong>Zelden gebruikte tappunten wekelijks doorspoelen:</strong> elke kraan of douche
            die minder dan eens per week wordt gebruikt, minimaal 1 minuut doorspoelen.
          </li>
          <li>
            <strong>Dode leidingdelen verwijderen:</strong> laat een erkende installateur afgesloten
            leidingdelen volledig verwijderen in plaats van alleen afsluiten.
          </li>
          <li>
            <strong>Thermostatische mengkranen (STAD/STAM):</strong> voor grotere installaties
            zorgen anti-Legionella mengkranen dat warm water pas op gebruik-temperatuur wordt
            gebracht, terwijl het reservoir op 60&deg;C blijft.
          </li>
          <li>
            <strong>Na langere leegstand: professionele desinfectie:</strong> bij een vakantiewoning
            of huurwoning die maanden leeg heeft gestaan, is een chloorspoeling of thermische
            desinfectie door een erkend bedrijf aanbevolen.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wettelijke verplichtingen voor verhuurders
        </h2>
        <p className="text-gray-700 mb-4">
          In Nederland zijn eigenaren en beheerders van collectieve waterinstallaties wettelijk
          verplicht een Legionella-risicoanalyse te laten uitvoeren en een beheersplan op te stellen.
          Dit geldt voor:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Gebouwen met 10 of meer wooneenheden met een gemeenschappelijke waterinstallatie</li>
          <li>Hotels, zorginstellingen, campings en recreatieverblijven</li>
          <li>Gebouwen met koeltorens of luchtbehandelingsinstallaties met waterkoeling</li>
          <li>Zwembaden, bubbelbaden en spa-faciliteiten</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor een gewone huurwoning met een eigen warmwaterinstallatie is geen wettelijke verplichting
          tot risicoanalyse voor de verhuurder. Toch heeft de verhuurder een algemene zorgplicht
          voor veilige bewoning. Als huurder kunt u de verhuurder aanspreken als u twijfelt over de
          boilertemperatuur of de staat van de leidingen. Raadpleeg bij twijfel uw GGD voor advies.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterfilters en Legionella: wat werkt wel en wat niet?
        </h2>
        <p className="text-gray-700 mb-4">
          Een veelgestelde vraag is of een waterfilter thuis bescherming biedt tegen Legionella.
          Het antwoord is eenduidig: <strong>nee</strong>.
        </p>
        <p className="text-gray-700 mb-4">
          Zowel een osmosefilter als een actief-koolfilter filtert het koude drinkwater dat de
          woning binnenkomt. Legionella bevindt zich echter in de warmwaterleidingen en het
          warmwaterreservoir &mdash; verderop in het systeem, na de filter. De besmettingsroute
          is via douchenevels, niet via drinken. Filtratie van drinkwater lost dit probleem
          structureel niet op.
        </p>
        <p className="text-gray-700 mb-6">
          Een osmosefilter heeft andere voordelen: het verwijdert effectief farmaceutische stoffen,
          zware metalen, nitraat en andere verontreinigingen uit drinkwater. Zie ons{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">
            overzicht van waterfilters
          </Link>{' '}
          voor een vergelijking. Voor Legionella-preventie zijn uitsluitend thermische en
          mechanische maatregelen effectief.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over Legionella thuis
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
          <Link href="/leidingwater/bacterien" className="text-[#005F8A] underline">bacterien in leidingwater</Link>,{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilters vergelijken</Link>,{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteitstest</Link> en{' '}
          <Link href="/kraanwater/zomer" className="text-[#005F8A] underline">kraanwater in de zomer</Link>.
        </p>
      </main>
    </>
  );
}
