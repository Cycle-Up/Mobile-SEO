import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { CTABanner } from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Waterontharder storing: diagnose checklist en oplossingen',
  description:
    'Waterontharder werkt niet? Diagnose checklist: zout op water, regeneratie faalt, bypass open. Stap-voor-stap oplossingen zonder monteur.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/storingen' },
  openGraph: {
    title: 'Waterontharder storing: diagnose checklist en oplossingen',
    description:
      'Waterontharder werkt niet? Diagnose checklist: zout op water, regeneratie faalt, bypass open. Stap-voor-stap oplossingen zonder monteur.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Mijn water is nog steeds hard terwijl de waterontharder werkt — wat is er mis?',
    answer:
      'Dit kan meerdere oorzaken hebben: de bypass-stand staat aan (controleer het bypass-ventiel), de zoutstand is te laag of er heeft zich een zoutbrug gevormd, de regeneratietimer werkt niet correct, of het harsbed is uitgeput of vervuild. Begin met de meest eenvoudige diagnose: controleer of er zout in het reservoir zit en of het bypass-ventiel op "service" staat.',
  },
  {
    question: 'Wat is een zoutbrug en hoe los ik het op?',
    answer:
      'Een zoutbrug is een harde korst van samengekoekte zoutkorrels die zich boven op de waterlaag in het zoutreservoir vormt. De korst houdt het zout vast, waardoor de brine (pekeloplossing) niet meer naar het harsbed kan stromen. Oplossing: stoot voorzichtig in het zout met een bezem of houten stok om de korst te breken. Gebruik daarna fijnere of een ander type zout (tabletten in plaats van blokzout).',
  },
  {
    question: 'Hoe controleer ik of de regeneratie goed verloopt?',
    answer:
      'Start een handmatige regeneratie via het bedieningspaneel (zie uw handleiding voor de exacte knop of menu-optie). Luister of u water hoort stromen door de afvoer tijdens de brinefase (fase 2 van de regeneratie). Controleer na de regeneratie of het zoutniveau gedaald is; als het niet gedaald is, is de brine niet opgezogen en is er een probleem met de brine-opname. Meet ook de waterhardheid na de regeneratie met een teststrook.',
  },
  {
    question: 'Mijn display toont een foutmelding — wat betekent dat?',
    answer:
      'Foutmeldingen verschillen per fabrikant en model. Veelvoorkomende foutcodes zijn: E1 of ERR1 (zout-alarm, zoutstand te laag), E2 (motorfout van de control valve), E3 (tijdklok fout of stroomproblemen), en bypasalarm. Raadpleeg de handleiding van uw specifieke model voor de betekenis. Als de handleiding ontbreekt, zoek dan op het modelnummer van uw ontharder op internet of neem contact op met de fabrikant.',
  },
  {
    question: 'Het zout in het reservoir verdwijnt niet — wat is er aan de hand?',
    answer:
      'Als het zoutniveau niet daalt, verloopt de regeneratie niet correct. Mogelijke oorzaken: bypass-ventiel staat op bypass (dan vindt er helemaal geen regeneratie plaats), de tijdklok is niet correct ingesteld, de sturing (controller) is defect, of er is een mechanisch probleem met de regelklep (control valve). Controleer eerst de bypass en de timer-instellingen. Als die in orde zijn, is waarschijnlijk de control valve defect.',
  },
  {
    question: 'Kan ijzer in het water het harsbed van mijn waterontharder beschadigen?',
    answer:
      'Ja, ijzer in leidingwater kan het harsbed vervuilen en de ontharder progressief minder effectief maken. Opgelost ijzer (Fe2+) wordt door het hars gebonden maar niet goed teruggespoeld tijdens regeneratie, waardoor het harsbed na verloop van tijd verstopt raakt. Symptoom: stijgende hardheid en bruine aanslag in het reservoir en bij kranen. Oplossing: harsbedcleaner (ijzerverwijderaar) toevoegen aan het zoutreservoir, of het harsbed vervangen.',
  },
  {
    question: 'Hoe controleer ik of het bypass-ventiel goed staat?',
    answer:
      'Het bypass-ventiel (of bypass-hendel) zit doorgaans direct achter of naast de ontharder op de leidingen. Er zijn drie posities: "service" (ontharder actief), "bypass" (water gaat om de ontharder heen, onbehandeld) en "isolatie" (water afgesloten). In de service-positie staat de hendel doorgaans loodrecht op de richting van de waterleiding. Raadpleeg de handleiding van uw ontharder voor de exacte positie-aanduiding van uw model.',
  },
  {
    question: 'Wanneer moet ik een monteur bellen voor mijn waterontharder?',
    answer:
      'Bel een monteur wanneer: de control valve mechanisch vastloopt of klepproblemen heeft die u niet zelf kunt oplossen, het harsbed na reiniging nog steeds niet functioneert en vervanging nodig is, de printplaat of sturing defect is (foutmeldingen die niet verdwijnen na resetten), er een lekkage is bij de aansluitingen of control valve, of wanneer u geen handleiding meer heeft en de oorzaak van het probleem niet kunt achterhalen.',
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
  headline: 'Waterontharder storing: diagnose checklist en oplossingen',
  description:
    'Diagnose checklist voor waterontharder storingen. Zout op water, regeneratie faalt, bypass open. Stap-voor-stap oplossingen zonder monteur.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterontharder/storingen-checklist',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterontharderStoringenChecklistPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterontharder', item: 'https://waterfilterplatform.nl/waterontharder' },
              { '@type': 'ListItem', position: 3, name: 'Storingen checklist', item: 'https://waterfilterplatform.nl/waterontharder/storingen-checklist' },
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
            <Link href="/waterontharder" className="hover:underline">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>Storingen checklist</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontharder storing: diagnose checklist en oplossingen
          </h1>
          <QuickAnswer answer="De meest voorkomende storingen bij waterontharders zijn: zout dat een brug vormt boven de brine, samengekoekte zoutkorrels in het reservoir, een kapotte tijdklok/controller, of een defect harsbed. Met deze diagnose checklist lost u de meeste problemen zelf op." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-10 mb-4">
          Hoe herkent u dat uw waterontharder niet goed werkt?
        </h2>
        <p className="text-gray-700 mb-4">
          Een waterontharder werkt stil op de achtergrond en geeft niet altijd een duidelijk signaal als er iets mis is. De meest herkenbare symptomen van een storing zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Water voelt nog steeds hard:</strong> zeep schuimt slecht, er vormt zich kalk op kranen en in de waterkoker.</li>
          <li><strong>Kalkaanslag keert snel terug</strong> ondanks dat de ontharder aanstaat.</li>
          <li><strong>Het zout in het reservoir verdwijnt niet</strong> of verdwijnt juist ongewoon snel.</li>
          <li><strong>Foutmelding op het display</strong> of de tijdklok staat op een verkeerde waarde.</li>
          <li><strong>Ongewoon hoog zoutverbruik</strong> zonder verklaring (regeneratie draait te vaak).</li>
          <li><strong>Bruine of roestige aanslag</strong> bij kranen of in het toilet (ijzervervuiling van harsbed).</li>
          <li><strong>Hoorbaar waterverlies</strong> via de afvoer terwijl het systeem niet in regeneratie zou moeten zijn.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Ga systematisch te werk met onderstaande diagnose-stappen. Begin altijd bij de eenvoudigste controles en ga pas over op complexere diagnoses als de simpele oorzaken zijn uitgesloten.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Diagnose stap 1: Controleer de zoutstand en zoutbrug
        </h2>
        <p className="text-gray-700 mb-4">
          Open het deksel van het zoutreservoir. Controleer of er voldoende zout aanwezig is. Het zoutniveau moet altijd boven het wateroppervlak in het reservoir liggen. Als het zout ontbreekt, vult u bij en start u een handmatige regeneratie.
        </p>
        <p className="text-gray-700 mb-4">
          Controleer vervolgens op een <strong>zoutbrug</strong>: een harde korst van samengekoekte zoutkorrels die boven op het water hangt. Stoot voorzichtig met een bezem of houten stok in het zout. Als er een lege ruimte onder de korst zit, heeft u een zoutbrug gevonden. Breek de korst voorzichtig op en verwijder de brokken zout. Spoel het reservoir schoon als er veel slib of korst aanwezig is.
        </p>
        <p className="text-gray-700 mb-6">
          Zoutbruggen ontstaan vaker bij vochtige omstandigheden, bij gebruik van fijn granulaat-zout, of als de ontharder lang niet werd gebruikt. Preventie: gebruik tabletzout of blokkenzout in plaats van fijnkorrelig zout, en bewaar het zout droog.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Diagnose stap 2: Controleer de brine-tank op slib en korstvorming
        </h2>
        <p className="text-gray-700 mb-4">
          Naast de zoutbrug kan er slib of een slakkenkorst onderin de brine-tank (het zoutreservoir) zijn. Over de jaren hoopt zich hier calciumfosfaat, organische stoffen en fijne zoutpartikels op. Dit slib verstopt de brine-leiding waardoor het zoute water niet meer naar het harsbed kan worden gezogen.
        </p>
        <p className="text-gray-700 mb-4">
          Verwijder al het zout uit het reservoir. Controleer de brine-leiding en het brine-valve onderin het reservoir op verstoppingen. Spoel het reservoir grondig schoon met lauw water. Controleer ook het brine-orifice (het kleine gaatje of opening waardoor brine wordt opgezogen): soms zit dit verstopt met een kristal of slib.
        </p>
        <p className="text-gray-700 mb-6">
          Na reiniging vult u het reservoir opnieuw met schoon zout en start u een handmatige regeneratie. Controleer of het zoutniveau daalt, wat aangeeft dat de brine-opname werkt.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Diagnose stap 3: Bypass-ventiel controleren
        </h2>
        <p className="text-gray-700 mb-4">
          Een van de meest voorkomende en eenvoudigst op te lossen oorzaken van "hard water ondanks ontharder": het bypass-ventiel staat op bypass. In de bypass-stand gaat het water rechtstreeks om de ontharder heen, zonder te worden onthard.
        </p>
        <p className="text-gray-700 mb-4">
          Zoek het bypass-ventiel op (doorgaans achter of naast de ontharder). Het heeft drie posities: service (normaal gebruik), bypass en afgesloten. Controleer of de stand op "service" staat. Als het bypass-ventiel per ongeluk is omgezet (bijv. tijdens reparatiewerkzaamheden of bij een jaarlijkse ketelservice), zet het dan terug op "service".
        </p>
        <p className="text-gray-700 mb-6">
          Tip: markeer de correcte stand van het bypass-ventiel met een permanente stift of een sticker, zodat u altijd snel kunt zien of het goed staat.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Diagnose stap 4: Regeneratieproces controleren
        </h2>
        <p className="text-gray-700 mb-4">
          De regeneratie is het proces waarbij de verzadigde hars wordt gespoeld met pekelwater (brine) om de calcium- en magnesiumionen te vervangen door natriumionen. Als de regeneratie niet goed verloopt, wordt het hars niet vernieuwd en produceert de ontharder geen zacht water meer.
        </p>
        <p className="text-gray-700 mb-4">
          Start een <strong>handmatige regeneratie</strong> via het bedieningspaneel (zie uw handleiding). Luister tijdens de regeneratie:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>U zou water moeten horen stromen via de afvoer (dit is het spoelwater).</li>
          <li>Na de backwash-fase hoort u de brine worden opgezogen (dit klinkt als een zuigend geluid).</li>
          <li>Na de regeneratie meet u de hardheid van het water met een teststrook.</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Controleer ook de regeneratietimer: staat deze op de juiste tijd en frequentie? Bij hoog waterverbruik of hard bronwater moet de ontharder vaker regenereren. Te weinig regeneraties leiden tot onvoldoende ontharding. Te veel regeneraties zijn onnodig en verhogen het zout- en waterverbruik.
        </p>
        <p className="text-gray-700 mb-6">
          De ideale regeneratiefrequentie hangt af van de capaciteit van de ontharder en uw waterverbruik. Raadpleeg onze pagina over{' '}
          <Link href="/waterontharder/capaciteit" className="text-[#005F8A] underline">
            de capaciteit van waterontharders
          </Link>{' '}
          voor hulp bij het berekenen van de juiste instellingen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Diagnose stap 5: Harsbed controleren op fouling of ijzervergiftiging
        </h2>
        <p className="text-gray-700 mb-4">
          Het harsbed bestaat uit kleine kunstharsbolletjes die calcium en magnesium binden. Na jaren gebruik kunnen deze bolletjes beschadigd raken, vervuild worden met organische stoffen, of "vergiftigd" raken door ijzer of mangaan. Een vergiftigd harsbed herstelt niet meer bij normale regeneratie.
        </p>
        <p className="text-gray-700 mb-4">
          Symptomen van een aangetast harsbed:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Bruine of roestrode aanslag bij kranen en in de toiletpot.</li>
          <li>Verminderde capaciteit: de ontharder werkt steeds korter na regeneratie.</li>
          <li>Zwarte of donkere deeltjes in het water (beschadigde harsbolletjes).</li>
          <li>Sterkere smaak in het water dan voorheen.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Behandeling: voeg een harsbedcleaner of ijzerverwijderaar (zoals Resin Clean of Fe-out) toe aan het zoutreservoir en voer een extra regeneratiecyclus uit. Als het probleem aanhoudt, is vervanging van het harsbed noodzakelijk. Een harsbed gaat doorgaans 10 tot 15 jaar mee.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Diagnose stap 6: Elektromechanische problemen
        </h2>
        <p className="text-gray-700 mb-4">
          Als alle bovenstaande stappen geen oplossing bieden, is er mogelijk een elektromechanisch probleem met de <strong>control valve</strong> (de centrale regelklep die de waterstroom door de ontharder regelt), de motor, of de printplaat.
        </p>
        <p className="text-gray-700 mb-4">
          Veelvoorkomende elektromechanische storingen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Motor van de control valve draait niet:</strong> de klep beweegt niet naar de juiste positie. Hoorbaar als een klikgeluid dat wordt herhaald zonder dat de klep wisselt.</li>
          <li><strong>Klep lekt intern:</strong> water lekt van de service-kant naar de afvoer zonder dat regeneratie plaatsvindt. Dit veroorzaakt continu waterverbruik via de afvoer.</li>
          <li><strong>Tijdklok reset steeds:</strong> na stroomuitval wordt de tijd niet bewaard. Dit kan worden veroorzaakt door een lege reservebatterij in de controller.</li>
          <li><strong>Display reageert niet:</strong> de printplaat is defect of er is een probleem met de stroomtoevoer.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Controleer of de stroomtoevoer intact is (kabel, stopcontact, zekering). Reset de controller indien mogelijk via een lange indruk van de reset-knop. Als het probleem aanhoudt, is vervanging van de control valve of printplaat nodig. Dit is werk voor een monteur of een waterontharder-specialist.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Preventie: zo voorkomt u storingen
        </h2>
        <p className="text-gray-700 mb-4">
          De meeste storingen zijn te voorkomen met regelmatig onderhoud:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Gebruik tabletzout of blokkenzout</strong> in plaats van fijn zout. Dit geeft minder brugvorming en minder slib in het reservoir.</li>
          <li><strong>Houd de zoutstand boven het waterniveau</strong> in het reservoir. Laat het reservoir nooit helemaal leegdraaien.</li>
          <li><strong>Controleer het zoutreservoir maandelijks</strong> op brugvorming en slib.</li>
          <li><strong>Laat jaarlijks een inspectie uitvoeren</strong> door een erkend onderhoudsbedrijf. Dit kost typisch 80 tot 150 euro en voorkomt grotere reparaties.</li>
          <li><strong>Gebruik harsbedcleaner</strong> twee keer per jaar als uw water ijzer of mangaan bevat.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Overweegt u een nieuwe waterontharder vanwege aanhoudende storingen? Bekijk ons overzicht van{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">
            osmosefilters als alternatief voor waterontharders
          </Link>{' '}
          of lees meer op de{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">
            waterverzachter informatiepagina
          </Link>.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over waterontharder storingen
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
          <Link href="/waterontharder" className="text-[#005F8A] underline">Waterontharder informatie</Link>,{' '}
          <Link href="/waterontharder/capaciteit" className="text-[#005F8A] underline">Capaciteit waterontharder</Link>,{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">Osmosefilter als alternatief</Link> en{' '}
          <Link href="/waterontharder/regeneratie" className="text-[#005F8A] underline">Regeneratie waterontharder</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/onderhoud/storingen-oplossen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Storingen oplossen waterontharder</h3>
              <p className="text-sm text-gray-600">Diagnostische gids voor regeneratiestoringen, harsblokkades en regelautomaat-problemen.</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling: storing-oorzaken</h3>
              <p className="text-sm text-gray-600">Veelvoorkomende oorzaken van harsuitval, ionenuitwisselingsverlies en bypass-lekkage.</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
