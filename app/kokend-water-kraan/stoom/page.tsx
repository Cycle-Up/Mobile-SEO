import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Stoom bij kokend water kraan: normaal, gevaarlijk of probleem?',
  description:
    'Stoom bij het uitschenken van een kokend water kraan is normaal en onvermijdelijk bij 100 graden Celsius. Overmatige stoom of spetteren wijst op een te hoge.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/stoom' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is stoom bij een kokend water kraan normaal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, stoom is volledig normaal en onvermijdelijk bij een kokend water kraan. Water dat 100 graden Celsius heeft bereikt, kookt bij zeeniveau. Zodra dit water in contact komt met de buitenlucht bij het uitschenken, vormt zich zichtbare waterdamp (stoom). Dit is geen storing of gevaar bij correct gebruik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer is overmatige stoom een probleem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Overmatige stoom of heftig spetteren kan wijzen op een verstopte of verkalkte sproeikop, een te hoge temperatuurinstelling of een defect in de boiler. Bij stoom uit gesloten aansluitingen of grote stoomwolken uit de boiler zelf moet de kraan onmiddellijk worden uitgeschakeld en een technicus worden ingeschakeld.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe los ik spetteren bij mijn kokend water kraan op?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spetteren wordt meestal veroorzaakt door een verstopte of verkalkte sproeikop. Verwijder de sproeikop en week deze in een oplossing van azijn en water (1:1) gedurende 30 minuten. Spoel grondig na. Bij ernstige kalkafzetting kan vervanging van de sproeikop nodig zijn. Controleer ook of de temperatuurinstelling niet te hoog staat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is stoom van een kokend water kraan gevaarlijk voor kinderen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stoomverbranding is gevaarlijker dan verbranding door heet water, omdat stoom condenseert op de huid en daarbij extra warmte vrijgeeft. Een kokend water kraan moet altijd zijn voorzien van een kinderveiligheidsslot. Houd kinderen altijd op veilige afstand tijdens het uitschenken. De kraan mag niet bereikbaar zijn voor jonge kinderen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik de temperatuur verlagen om minder stoom te krijgen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Veel kokend water kranen hebben een instelbare temperatuur tussen 95 en 100 graden Celsius. Bij 95 graden vormt zich minder zichtbare stoom dan bij 100 graden. Voor thee en de meeste warme dranken is 95 graden voldoende. Bij 100 graden is de kokende werking maximaal, wat nodig is voor pasta of bepaalde theesoorten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat betekent stoom uit de boiler van een kokend water kraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kleine ventilatieopeningen op de boiler kunnen licht stoom of warme lucht afgeven -- dit is normaal. Grote stoomwolken uit de boiler, leidingen of aansluitpunten wijzen echter op een lek of onjuiste drukopbouw. Schakel in dat geval de kraan direct uit via de stopcontactschakelaar en bel een gecertificeerd installateur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil in stoom tussen een straalkop en een sproeikop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een straalkop bundelt het water in een compacte straal, wat resulteert in minder spreiding van stoom maar een hogere stoomconcentratie op een klein oppervlak. Een sproeikop verspreidt het water en de stoom over een groter gebied. Bij verstopte gaatjes in de sproeikop ontstaat ongelijkmatige verdeling en meer spettering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom geeft mijn kokend water kraan meer stoom in de winter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In een kouder keuken (lage omgevingstemperatuur en lage luchtvochtigheid) condenseert de waterdamp sneller en wordt meer stoom zichtbaar. Dit is hetzelfde principe als bij je adem in de kou. De kraan functioneert normaal -- het temperatuurverschil tussen het kokende water en de omgeving is groter, waardoor meer condensatie optreedt.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Stoom bij kokend water kraan: normaal, gevaarlijk of probleem?',
  description:
    'Stoom bij het uitschenken van een kokend water kraan is normaal en onvermijdelijk bij 100 graden Celsius. Overmatige stoom of spetteren wijst op een te hoge.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/kokend-water-kraan/stoom',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function KokendWaterKraanStoomPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Kokend water kraan', item: 'https://waterfilterplatform.nl/kokend-water-kraan' },
              { '@type': 'ListItem', position: 3, name: 'Stoom bij kokend water', item: 'https://waterfilterplatform.nl/kokend-water-kraan/stoom' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/kokend-water-kraan" className="hover:underline">Kokend water kraan</Link> &rsaquo;{' '}
          <span>Stoom bij kokend water</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Stoom bij kokend water kraan: normaal, gevaarlijk of probleem?
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een kokend water kraan produceert altijd stoom -- dat is de aard van het systeem.
            Water op 100 graden Celsius kookt nu eenmaal. Maar wanneer is stoom normaal, wanneer
            is het een teken van slijtage, en hoe voorkom je stoomverbranding? Dit artikel
            beantwoordt alle vragen over stoom bij uw kokend water kraan.
          </p>
        </section>

        <QuickAnswer answer="Stoom bij een kokend water kraan is normaal en onvermijdelijk: water op 100 graden kookt en vormt zichtbare damp. Overmatige stoom of spetteren wijst op een verstopte sproeikop of te hoge temperatuurinstelling. Stoomverbranding is gevaarlijker dan heet water -- gebruik altijd kinderbeveiliging." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stoom is normaal bij 100 graden Celsius
        </h2>
        <p className="text-gray-700 mb-4">
          Water verandert bij 100 graden Celsius en zeeniveau van vloeibare toestand in gasvorm. Dit
          is een fundamenteel natuurkundig gegeven. Alle kokend-watersystemen -- van een klassieke
          waterkoker tot een ingebouwde kokend water kraan -- produceren stoom tijdens het uitschenken.
          Dit is geen storing, geen fabricagefout en geen gevaar bij correct gebruik.
        </p>
        <p className="text-gray-700 mb-4">
          Zodra het kokende water de kraan verlaat en in contact komt met de koelere omgevingslucht,
          condenseert een deel van de waterdamp onmiddellijk tot zichtbare nevel. Dit is dezelfde
          reden waarom een waterkoker stoomt en waarom je adem zichtbaar is op een koude dag. De
          hoeveelheid zichtbare stoom is groter naarmate het temperatuurverschil tussen het water
          en de omgevingslucht groter is.
        </p>
        <p className="text-gray-700 mb-6">
          Een kokend water kraan heeft ten opzichte van een waterkoker het voordeel van een vaste
          positie. Er is geen risico van omkiepen of morsen van een volle waterkoker. De stoom
          komt altijd op dezelfde, voorspelbare plek vrij, waardoor u uw handeling eenvoudig kunt
          aanpassen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoeveel stoom is normaal bij het uitschenken?
        </h2>
        <p className="text-gray-700 mb-4">
          Bij het openen van de kraan en de eerste uitstroom: verwacht een korte stoomwolk van
          1 tot 3 seconden terwijl het water versnelling opbouwt en de lucht uit de uitloop
          verplaatst. Daarna vloeit het water continu en is er een constante, dunne stoomwolk
          zichtbaar boven het uitstroomend water.
        </p>
        <p className="text-gray-700 mb-4">
          De zichtbare hoeveelheid stoom hangt af van drie factoren:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Omgevingstemperatuur:</strong> in een koud keuken is meer stoom zichtbaar
            dan in een warme ruimte, omdat de condensatie sneller optreedt
          </li>
          <li>
            <strong>Debiet van de kraan:</strong> een hogere uitstroomsnelheid verplaatst meer
            lucht en maakt meer stoom zichtbaar
          </li>
          <li>
            <strong>Afstand tot de beker:</strong> hoe hoger de beker onder de kraan, hoe meer
            stoom zichtbaar is voordat het water het doel bereikt
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is stoom een probleem?
        </h2>
        <p className="text-gray-700 mb-4">
          Hoewel een zekere hoeveelheid stoom volkomen normaal is, zijn er situaties waarbij
          overmatige stoom of ongewoon gedrag wijst op een onderliggend probleem:
        </p>

        <h3 className="text-lg font-semibold text-[#003F5C] mt-6 mb-2">
          1. Overmatige spettering of spatten
        </h3>
        <p className="text-gray-700 mb-4">
          Als het water bij het uitschenken hevig spettert in plaats van in een gelijkmatige straal
          vloeit, wijst dit bijna altijd op een verstopte of verkalkte sproeikop. Kalkaanslag
          verstopt de kleine gaatjes van de sproeikop, waardoor het water onder hogere druk door
          minder openingen wordt geperst. Dit geeft niet alleen meer spatten, maar ook
          onregelmatige verdeling van stoom.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Oplossing:</strong> verwijder de sproeikop (meestal schroefbaar of klikbaar) en
          week deze 30 minuten in een gelijkmatige oplossing van azijn en water. Spoel grondig na
          met koud water. Herhaal indien nodig. Bij ernstige kalkafzetting is vervanging
          (doorgaans 5&ndash;15 euro) de eenvoudigste oplossing.
        </p>

        <h3 className="text-lg font-semibold text-[#003F5C] mt-6 mb-2">
          2. Stoom uit de kraan terwijl die gesloten is
        </h3>
        <p className="text-gray-700 mb-4">
          Bij sommige modellen voelt de kraanuitloop warm aan of is lichte warmte merkbaar wanneer
          de kraan gesloten is. Dit is warmtegeleiding via het kraanlichaam vanuit de boiler --
          normaal bij systemen waarbij de boiler en de kraan dicht bij elkaar zijn gemonteerd.
          Zichtbare stoom uit een gesloten kraan is echter zeldzamer en kan wijzen op slijtage
          van de afsluiter.
        </p>

        <h3 className="text-lg font-semibold text-[#003F5C] mt-6 mb-2">
          3. Stoom uit de boiler of aansluitingen
        </h3>
        <p className="text-gray-700 mb-4">
          Kleine ventilatieopeningen op de boiler geven soms warme lucht of lichte condensatie af --
          dit is ontworpen en normaal. Grote stoomwolken die zichtbaar zijn rond de boilerbehuizing,
          de wateraanvoerslang of elektrische aansluitingen zijn echter een ernstig signaal.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Actie:</strong> schakel de kraan onmiddellijk uit via de schakelaar bij het
          stopcontact of via de zekeringkast. Bel een gecertificeerd installateur. Gebruik de
          kraan niet opnieuw totdat het probleem is vastgesteld en verholpen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Veiligheidsadvies bij stoom: dit moet u weten
        </h2>
        <p className="text-gray-700 mb-4">
          Stoomverbranding is aanzienlijk gevaarlijker dan verbranding door heet water.
          De reden is thermodynamisch: wanneer stoom condenseert op de huid, geeft het de
          latente condensatiewarmte (539 cal/g) vrij bovenop de reeds hoge temperatuur.
          Dit betekent dat stoom bij 100 graden meer warmte overbrengt op de huid dan
          vloeibaar water bij dezelfde temperatuur.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            Houd uw gezicht nooit direct boven de uitloop bij het uitschenken. Buig uw hoofd
            niet over de beker terwijl het water stroomt
          </li>
          <li>
            Gebruik altijd een stabiele, hittebestendige beker of pot die niet kan kantelen
          </li>
          <li>
            Kinderbeveiliging is essentieel: elke kokend water kraan moet zijn voorzien van
            een vergrendelingsmechanisme dat niet door jonge kinderen kan worden bediend
          </li>
          <li>
            Houd kinderen altijd op minimaal 1 meter afstand tijdens het uitschenken
          </li>
          <li>
            Bij spetteren: draai de kraan dicht, wacht en controleer de sproeikop voordat
            u verder gaat
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Temperatuurinstelling en het effect op stoom
        </h2>
        <p className="text-gray-700 mb-4">
          Veel moderne kokend water kranen bieden een instelbare temperatuur, doorgaans tussen
          95 en 100 graden Celsius. Het effect op de hoeveelheid zichtbare stoom is merkbaar:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Temperatuur</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Zichtbare stoom</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Toepassingen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">100 &deg;C</td>
                <td className="border border-gray-300 px-3 py-2">Maximaal</td>
                <td className="border border-gray-300 px-3 py-2">Pasta koken, zwarte thee, steriliseren</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">98 &deg;C</td>
                <td className="border border-gray-300 px-3 py-2">Iets minder</td>
                <td className="border border-gray-300 px-3 py-2">Zwarte thee, instantsoep</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">95 &deg;C</td>
                <td className="border border-gray-300 px-3 py-2">Merkbaar minder</td>
                <td className="border border-gray-300 px-3 py-2">Groene thee, kruidenthee, koffie</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Voor de meeste dagelijkse toepassingen is 95 graden ruimschoots voldoende en geeft
          het een aangenamer gebruikscomfort door de gereduceerde stoomvorming. Raadpleeg ook
          onze pagina over{' '}
          <Link href="/kokend-water-kraan/thee" className="text-[#005F8A] underline">de ideale temperatuur voor thee</Link>{' '}
          voor theecategorie-specifieke aanbevelingen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Sproeipatroon, sproeikop en stoom
        </h2>
        <p className="text-gray-700 mb-4">
          Het sproeipatroon van de uitloop heeft directe invloed op hoe stoom wordt verspreid:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Straalkop:</strong> concentreert het water in een bundel. Minder spatten,
            maar stoom is geconcentreerd op een klein oppervlak direct voor de uitloop.
            Geschikt voor precies invullen van bekers
          </li>
          <li>
            <strong>Sproeikop (aerated):</strong> mengt lucht door het water en verspreidt
            de stroom. Geeft meer spreiding van stoom over een groter gebied. Aangenamer
            in gebruik maar iets meer spatten bij hoge temperatuur
          </li>
          <li>
            <strong>Verstopte sproeikop:</strong> ongelijkmatige verdeling van gaatjes leidt
            tot onregelmatige stralen, meer spettering en onaangenaam gebruik. Ontkalken of
            vervangen is de oplossing
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijking met een waterkoker: voordelen van de vaste positie
        </h2>
        <p className="text-gray-700 mb-4">
          Een waterkoker produceert ook stoom tijdens het koken en uitschenken. Het grote
          verschil met een kokend water kraan is de mobiliteit: een waterkoker kan worden
          omgekiept, valt van het aanrecht of wordt omgestoten door kinderen. Een kokend
          water kraan heeft een vaste, stabiele positie op het aanrecht.
        </p>
        <p className="text-gray-700 mb-6">
          Bij een kokend water kraan weet u altijd precies waar de stoom vrijkomt: recht
          boven de uitloop, in een vaste richting. U kunt uw beker nauwkeurig positioneren
          en uw handeling anticiperen op de stoom. Raadpleeg onze{' '}
          <Link href="/kokend-water-kraan/veiligheid" className="text-[#005F8A] underline">veiligheidspagina voor kokend water kranen</Link>{' '}
          voor een uitgebreide risicoanalyse en vergelijking met de waterkoker.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over stoom bij een kokend water kraan
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
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kraan vergelijken</Link>,{' '}
          <Link href="/kokend-water-kraan/veiligheid" className="text-[#005F8A] underline">veiligheid kokend water kraan</Link>,{' '}
          <Link href="/kokend-water-kraan/onderhoud" className="text-[#005F8A] underline">onderhoud en ontkalken</Link> en{' '}
          <Link href="/kokend-water-kraan/thee" className="text-[#005F8A] underline">thee zetten met kokend water kraan</Link>.
        </p>
      </main>
    </>
  );
}
