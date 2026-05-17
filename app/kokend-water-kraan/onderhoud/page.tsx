import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kokend water kraan onderhoud: ontkalken, filters en jaarlijkse service',
  description: 'Een kokend water kraan vereist regelmatig onderhoud: ontkalken elke 3-6 maanden, filters vervangen 1-2x per jaar. Complete onderhoudsgids voor Quooker.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/onderhoud' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe vaak moet ik mijn kokend water kraan ontkalken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In een regio met hard water (boven 15 dH) ontkalkt u de boiler elke 3-6 maanden. In een regio met zacht water of als u een waterontharder heeft, volstaat ontkalken eens per 12 maanden. Signalen dat ontkalken nodig is: minder heet water per keer, langere opwarmtijd, klikgeluiden in de boiler of een witte aanslag zichtbaar bij het kraanmondstuk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe ontkalk ik mijn kokend water kraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stap 1: schakel het systeem uit en laat 30 minuten afkoelen. Stap 2: maak een oplossing van 2 eetlepels citroenzuur op 1 liter water. Stap 3: sluit de watertoevoer af en tap de boiler leeg. Stap 4: vul de boiler via de filteraansluiting met de citroenzuuroplossing. Stap 5: laat 30-60 minuten inwerken. Stap 6: spoel door met minimaal 3 liter schoon water. Stap 7: herstart het systeem. Gebruik nooit azijnzuur of schoonmaakazijn, want dit kan rubberdelen aantasten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe vervang ik het filter van mijn kokend water kraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meeste kokend water kranen hebben een los filterpatroon dat u zelf kunt verwisselen. Sluit de watertoevoer af, draai het filterpatroon los (doorgaans een kwartslag naar links), verwijder het oude filter, plaats het nieuwe filter en draai vast. Open de watertoevoer en spoel de eerste liter weg. Houd de jaarlijkse leveranciersinstructies aan voor uw specifieke model (Quooker, PureAqua, Grohe, etc.).',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost het onderhoud van een kokend water kraan per jaar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De jaarlijkse onderhoudskosten bestaan uit: filtervervanging €30-80, ontkalking (citroenzuur) €5-15, en eventueel een jaarlijkse servicebeurt €80-150. Totaal: €115-245 per jaar. Quooker biedt een onderhoudsabonnement aan voor circa €100-150 per jaar inclusief filters en servicebezoek. Zonder servicecontract kunt u de meeste onderhoudstaken zelf uitvoeren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mijn kokend water kraan geeft minder heet water -- wat is er aan de hand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meest waarschijnlijke oorzaak is kalkaanslag in de boiler. Kalk isoleert het verwarmingselement, waardoor het water minder goed wordt opgewarmd en de capaciteit afneemt. Voer een ontkalkbeurt uit. Andere oorzaken: het verwarmingselement is defect (monteur nodig), of de boilerinhoud is kleiner dan verwacht bij hoog verbruik (upgrade naar grotere boiler overwegen).',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe reinig ik de buitenkant van mijn kokend water kraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reinig de kraan wekelijks met een zachte vochtige doek. Gebruik geen schurende schoonmaakmiddelen of staalwol, want die beschadigen de chroomlaag of het matte oppervlak. Voor hardnekkige kalkranden bij het mondstuk: een doek gedrenkt in citroenzuuroplossing (1 theelepel per 200ml water) laten inwerken gedurende 10 minuten. Droog de kraan na elke reiniging af om waterstrepen te voorkomen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heeft een kokend water kraan een jaarlijkse servicebeurt nodig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een jaarlijkse servicebeurt is niet strikt verplicht maar wordt aanbevolen, zeker in de garantieperiode. Een monteur controleert de afdichtingen, slangen, het verwarmingselement, de temperatuurinstelling en de veiligheidsbeveiliging. Quooker adviseert een jaarlijks servicecontract. Als u de filters zelf vervangt en regelmatig ontkalkt, kunt u een professionele servicebeurt beperken tot eens per twee jaar.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Kokend water kraan onderhoud: ontkalken, filters en jaarlijkse service',
  description: 'Een kokend water kraan vereist regelmatig onderhoud: ontkalken elke 3-6 maanden, filters vervangen 1-2x per jaar. Complete onderhoudsgids voor Quooker.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/kokend-water-kraan/onderhoud',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function KokendWaterKraanOnderhoudPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Kokend water kraan', item: 'https://waterfilterplatform.nl/kokend-water-kraan' },
              { '@type': 'ListItem', position: 3, name: 'Kokend water kraan onderhoud', item: 'https://waterfilterplatform.nl/kokend-water-kraan/onderhoud' },
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
          <span>Kokend water kraan onderhoud</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Kokend water kraan onderhoud: ontkalken, filters en jaarlijkse service
        </h1>

        <QuickAnswer answer="Een kokend water kraan vereist: filter vervangen elke 6-12 maanden (€30-80), boiler ontkalken elke 3-6 maanden in hard-watergebied met citroenzuur (€5-15), en optioneel een jaarlijkse servicebeurt (€80-150). Totale jaarlijkse kosten: €115-245. Kalkaanslag in de boiler is de meest voorkomende oorzaak van verminderde prestaties." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Onderhoudschema: overzicht van alle taken
        </h2>
        <p className="text-gray-700 mb-4">
          Een kokend water kraan vereist regelmatig onderhoud om betrouwbaar te blijven functioneren. Hieronder het complete onderhoudschema:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Taak</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Frequentie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Zelf te doen</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Filter vervangen</td>
                <td className="border border-gray-300 px-3 py-2">6-12 maanden</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
                <td className="border border-gray-300 px-3 py-2">&euro;30-80</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Boiler ontkalken</td>
                <td className="border border-gray-300 px-3 py-2">3-6 mnd (hard water), 12 mnd (zacht)</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
                <td className="border border-gray-300 px-3 py-2">&euro;5-15 (citroenzuur)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Kraan uitwendig reinigen</td>
                <td className="border border-gray-300 px-3 py-2">Wekelijks</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
                <td className="border border-gray-300 px-3 py-2">Gratis</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Jaarlijkse servicebeurt</td>
                <td className="border border-gray-300 px-3 py-2">1x per jaar (aanbevolen)</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
                <td className="border border-gray-300 px-3 py-2">&euro;80-150</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Slangen en verbindingen checken</td>
                <td className="border border-gray-300 px-3 py-2">1x per jaar</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
                <td className="border border-gray-300 px-3 py-2">Gratis</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Boiler ontkalken: stap voor stap
        </h2>
        <p className="text-gray-700 mb-4">
          Kalkaanslag is de grootste bedreiging voor een kokend water kraan. Kalk isoleert het verwarmingselement, wat leidt tot hogere energiekosten, minder capaciteit en uiteindelijk uitval. Ontkalken is eenvoudig en kost u minder dan een kwartier actieve tijd.
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Systeem uitschakelen</strong> en minimaal 30 minuten laten afkoelen. Werk nooit aan een heetwatersysteem dat net in gebruik is geweest.
          </li>
          <li>
            <strong>Citroenzuuroplossing bereiden:</strong> los 2 eetlepels (circa 30 gram) citroenzuurpoeder op in 1 liter lauwwarm water. Citroenzuur is veilig voor alle materialen in het systeem.
          </li>
          <li>
            <strong>Watertoevoer afsluiten</strong> via het afsluitventiel onder de gootsteen. Druk ontlasten door even de kraan te openen.
          </li>
          <li>
            <strong>Boiler leegronden</strong> door de drain- of serviceaansluiting te openen, of via de waterafvoer bij het filter.
          </li>
          <li>
            <strong>Citroenzuuroplossing invullen</strong> via de filteraansluiting of de onderhoudsingang (zie handleiding van uw model).
          </li>
          <li>
            <strong>30-60 minuten laten inwerken.</strong> Bij zware kalkaanslag kunt u dit verlengen naar 2 uur.
          </li>
          <li>
            <strong>Doorspoelen</strong> met minimaal 3 liter schoon water via de watertoevoer. Gooi het spoelwater weg.
          </li>
          <li>
            <strong>Systeem opnieuw opstarten</strong> en controleren of de temperatuur correct is en het systeem geen ongewone geluiden maakt.
          </li>
        </ol>
        <p className="text-gray-700 mb-6">
          Gebruik nooit azijnzuur (schoonmaakazijn) voor ontkalken. Azijnzuur tast rubberen afdichtingen en bepaalde metaalsoorten aan, wat lekkage kan veroorzaken. Citroenzuur is de veilige keuze voor alle modellen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filters vervangen: welk type en wanneer?
        </h2>
        <p className="text-gray-700 mb-4">
          De meeste kokend water kranen hebben een of meerdere filters. De vervangingsfrequentie hangt af van het filtertype:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Sedimentfilter (5-10 micron):</strong> vervangen elke 6-12 maanden, afhankelijk van de waterkwaliteit. Dit filter houdt zand, roest en grote deeltjes tegen.</li>
          <li><strong>Koolstoffilter (actieve kool):</strong> vervangen elke 6-12 maanden. Verwijdert chloor, organische stoffen en verbetert de smaak. Verouderde koolstoffilters kunnen bacterieel besmet raken, dus vervang op tijd.</li>
          <li><strong>RO-membraan (bij 4-in-1 kranen):</strong> vervangen elke 2-3 jaar. Een te lang gebruikt membraan verlaagt de filterkwaliteit aanzienlijk.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Filtersets voor de meest populaire modellen zijn verkrijgbaar bij de fabrikant of bij gespecialiseerde webshops. Vergelijk prijzen: merkfilters kunnen twee tot drie keer duurder zijn dan compatibele huismerkfilters.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kalkaanslag preventie: osmosefilter als definitieve oplossing
        </h2>
        <p className="text-gray-700 mb-4">
          De meest effectieve manier om kalkaanslag in uw kokend water kraan te voorkomen, is het gebruik van een <strong>osmosefilter (4-in-1 kraan)</strong>. Omgekeerde osmose verwijdert vrijwel alle calcium- en magnesiumionen uit het water, waardoor kalkvorming bijna volledig stopt.
        </p>
        <p className="text-gray-700 mb-6">
          Bij een 4-in-1 kokend water kraan met geintegreerd osmosefilter gaat de boiler mee tot de volledige levensduur van het apparaat zonder ontkalken, en zijn de filterprestaties consistent hoog. Dit maakt het een logische keuze voor gebieden met hard water (boven 15 dH), waar zonder osmose het ontkalken elke 3 maanden nodig is.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Merkaanbevelingen voor onderhoud
        </h2>
        <p className="text-gray-700 mb-4">
          Het onderhoud verschilt per merk. Hier de aanpak voor de populairste merken:
        </p>
        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Quooker</h3>
            <p className="text-gray-700 text-sm">
              Quooker heeft een eigen serviceapp waarmee u onderhoudsherinneringen instelt. Het filterpatroon vervangt u jaarlijks (€30-50). Quooker biedt servicecontracten aan voor circa €100-150 per jaar, inclusief filters en een jaarlijks servicebezoek. Bij de Quooker CUBE (osmoseversie) vervangt u ook het CUBE-filter jaarlijks.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">PureAqua 4-in-1</h3>
            <p className="text-gray-700 text-sm">
              PureAqua levert complete filtersets voor jaarlijkse wisseling, inclusief sediment, koolstof en RO-membraan. De sets zijn beschikbaar als jaarset en bevatten alle filters die het systeem nodig heeft. Ontkalken is bij de 4-in-1 variant zelden nodig door het osmosewater.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Grohe Red en andere merken</h3>
            <p className="text-gray-700 text-sm">
              Volg de handleiding voor filtervervanging. Bij de meeste merken vervangt u het filter elke 6-12 maanden. Ontkalken met citroenzuur werkt bij alle merken. De boiler van de Grohe Red zit onder het aanrecht en is eenvoudig bereikbaar.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Problemen herkennen: wanneer actie ondernemen?
        </h2>
        <p className="text-gray-700 mb-4">
          Let op de volgende signalen die duiden op onderhoud of storing:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Minder heet water per vulling:</strong> kalkaanslag in de boiler; ontkalk direct</li>
          <li><strong>Langere opwarmtijd:</strong> verwarmingselement belast door kalk; ontkalken of servicebeurt</li>
          <li><strong>Waterlekkage onder het aanrecht:</strong> slang losgekomen of koppeling defect; watertoevoer direct afsluiten</li>
          <li><strong>Klikgeluid:</strong> normaal thermisch uitzetten en krimpen van metaalonderdelen, geen actie nodig</li>
          <li><strong>Verminderde smaak van het gefilterde water:</strong> filter aan vervanging toe</li>
          <li><strong>Verminderde waterstroom:</strong> sedimentfilter verstopt; vervangen</li>
        </ul>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over kokend water kraan onderhoud</h2>
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
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kraan vergelijking</Link>,{' '}
          <Link href="/kokend-water-kraan/vergelijken" className="text-[#005F8A] underline">welk merk kiezen</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose voor kalkvrij water</Link>.
        </p>
      </main>
    </>
  );
}
