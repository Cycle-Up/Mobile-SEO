import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterfilter storingen oplossen: osmose, filterkan en waterontharder",
  description:
    "Diagnose en oplossing voor de meest voorkomende waterfilter storingen: laag debiet, slechte smaak, lekkage en waterontharder regeneratiefouten.",
  alternates: { canonical: "https://waterfilterplatform.nl/onderhoud/storingen-oplossen" },
  openGraph: {
    title: "Waterfilter storingen oplossen: osmose, filterkan en waterontharder",
    description:
      "Diagnose en oplossing voor de meest voorkomende waterfilter storingen: laag debiet, slechte smaak, lekkage en waterontharder regeneratiefouten.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Hoe meet ik de waterdruk voor mijn osmosefilter?",
    answer:
      "Een drukmeter (manometer) schroeft u op de watertoevoer van het osmosesysteem. Osmosesystemen hebben minimaal 2,5 bar nodig voor goede filterprestaties; de ideale druk is 3-5 bar. Bij een druk onder 2 bar is een drukverhogerpomp noodzakelijk.",
  },
  {
    question: "Mijn water smaakt na filter-vervanging anders, is dat normaal?",
    answer:
      "Ja, de eerste 1-2 liter na filtervervanging kan een lichte smaakafwijking hebben doordat de nieuwe cartridge gespoeld moet worden. Bij een nieuw membraan gooit u het eerste volledig gevulde reservoir weg. Als de afwijking langer aanhoudt dan 2 dagen, controleer dan of het filter correct geplaatst is.",
  },
  {
    question: "Hoe lang mag een osmosesysteem stilstaan?",
    answer:
      "Bij stilstand van meer dan 3 dagen neemt het risico op bacteriegroei toe in het stilstaande water in de druktank en slangen. Laat het systeem bij terugkomst 10-15 minuten doorspoelen voordat u het water drinkt. Bij stilstand langer dan 2 weken: desinfecteren met waterstofperoxide-oplossing.",
  },
  {
    question: "Wat doe ik met mijn osmosefilter als ik op vakantie ga?",
    answer:
      "Sluit de watertoevoer af als u langer dan een week weg bent. Dit voorkomt dat een eventuele lekkage ongemerkt doorgaat. Zet ook de druktank leeg. Bij terugkomst: toevoer openen, systeem 15 minuten laten doorspoelen en het eerste reservoir weggooien.",
  },
  {
    question: "Hoe reinig ik de druktank van mijn osmosefilter?",
    answer:
      "Sluit de watertoevoer af, laat de druktank volledig leeglopen via de osmosekraan. Ontkoppel de tank van het systeem. Vul met een oplossing van 30 ml waterstofperoxide (3%) per liter water. Laat 1 uur staan, giet weg en spoel driemaal met schoon water door. Sluit opnieuw aan en laat volledig vullen.",
  },
];

const articleSchema = {
  "@type": "Article",
  headline: "Waterfilter storingen oplossen: osmose, filterkan en waterontharder",
  description:
    "Diagnose en oplossing voor de meest voorkomende waterfilter storingen: laag debiet, slechte smaak, lekkage en waterontharder regeneratiefouten.",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  url: "https://waterfilterplatform.nl/onderhoud/storingen-oplossen",
  publisher: {
    "@type": "Organization",
    name: "WaterfilterPlatform",
    url: "https://waterfilterplatform.nl",
  },
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function StoringenOplossenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfilterplatform.nl" },
              { "@type": "ListItem", position: 2, name: "Onderhoud", item: "https://waterfilterplatform.nl/onderhoud" },
              { "@type": "ListItem", position: 3, name: "Storingen oplossen", item: "https://waterfilterplatform.nl/onderhoud/storingen-oplossen" },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{" "}
          <Link href="/onderhoud" className="hover:underline">Onderhoud</Link> &rsaquo;{" "}
          <span>Storingen oplossen</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterfilter storingen oplossen: osmose, filterkan en waterontharder
        </h1>

        <QuickAnswer answer="De meest voorkomende osmosestoring is laag debiet (verstopte prefilter of uitgeput membraan). Een slechte smaak wijst op een verzadigde postfilter of een membraanlek. Controleer altijd eerst de filterleeftijd voor u andere oorzaken onderzoekt." />

        <CTABanner context="algemeen" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Laag debiet: weinig water uit de osmosekraan
        </h2>
        <p className="text-gray-700 mb-4">
          Een osmosesysteem produceert water langzamer dan een gewone kraan; dat is normaal.
          Maar als het debiet significant afneemt tegenover eerder gebruik, is er een oorzaak.
          Controleer de volgende factoren in volgorde:
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2 pl-2">
          <li><strong>Sedimentprefilter:</strong> Verstopte sedimentfilter is de meest voorkomende oorzaak van laag debiet. Controleer de kleur van de cartridge; bruin of zwart = vervangen.</li>
          <li><strong>Waterdruk:</strong> Meet de druk op de watertoevoer. Osmosesystemen hebben minimaal 2,5 bar nodig; bij &lt;2 bar werkt het systeem niet goed. Controleer of andere kranen normaal doorstromen.</li>
          <li><strong>Druktank:</strong> Een defecte druktank (verloren luchtdruk) zorgt voor een slappe waterstraal. Controleer de luchtdruk via het ventiel aan de onderkant van de tank (leeg: 0,3-0,5 bar, vol: 6-8 bar). Pompt u er lucht bij tot het lege volume, dan is de binnenzak intact.</li>
          <li><strong>RO-membraan:</strong> Een uitgeput of vervuild membraan vertraagt de doorstroming. Meet TDS-rejectie; onder 70% is het membraan aan vervanging toe.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Slechte smaak of geur
        </h2>
        <p className="text-gray-700 mb-4">
          Smaak- en geurproblemen bij osmosewater wijzen doorgaans op een van deze oorzaken:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 pl-2">
          <li><strong>Verzadigde postfilter:</strong> De meest voorkomende oorzaak van smaakafwijking. De koolstofpostfilter is verzadigd en geeft reeds geadsorbeerde stoffen af. Vervang de postfilter (6-12 maanden).</li>
          <li><strong>Membraanlek (bittere smaak):</strong> Een beschadigd membraan laat zouten door, wat een bittere of metallieke smaak geeft. Voer een TDS-meting uit. Bij hoge TDS-doorlaat (meer dan 50%) is het membraan defect.</li>
          <li><strong>Bacteriegroei in druktank:</strong> Na langdurige stilstand (vakantie, verhuizing) kan bacteriegroei een muffige geur veroorzaken. Oplossing: desinfecteren met waterstofperoxide-oplossing.</li>
          <li><strong>Chloor-doorslag:</strong> Als de koolstofprefilter verzadigd is, bereikt chloor het membraan en het gefilterde water. Merkbaar als zwembadgeur. Prefilter direct vervangen.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterfilter lekt
        </h2>
        <p className="text-gray-700 mb-4">
          Bij elke lekkage is de eerste stap: sluit de hoofdkraan en de invoerkraan van het
          osmosesysteem. Bepaal daarna de lekbron:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 pl-2">
          <li><strong>Losse snelkoppeling:</strong> Druk de slang opnieuw volledig in de fitting (klik). Trek licht aan de slang om te controleren of hij vastklikt. Beschadigde fittingen vervangen.</li>
          <li><strong>Beschadigde O-ring:</strong> Bij filterbehuizingen loopt lekkage langs de behuizingsaansluiting. Demonteer de behuizing en inspecteer de O-ring. Vervang bij insnijdingen of deformatie; smeer licht in met siliconenvet.</li>
          <li><strong>Te hoge waterdruk:</strong> Bij druk boven 7 bar kunnen fittingen lekken. Installeer een drukreduceerventiel op de inkomende watertoevoer.</li>
          <li><strong>Haarspleet in behuizing:</strong> Zichtbaar als continue druppelvorming uit de behuizingswand. Behuizing vervangen.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterontharder regenereert niet
        </h2>
        <p className="text-gray-700 mb-4">
          Als uw waterontharder het water niet meer onthardt (hardheid onveranderd), controleer
          dan deze punten:
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2 pl-2">
          <li><strong>Zoutpeil:</strong> Controleer of er zout in het zoutreservoir zit. Het minimum ligt bij 1/4 gevuld. Vul bij met wateronthardingszout (NaCl tabletten of kristallen, geen tafelzout).</li>
          <li><strong>Zoutbrug:</strong> Soms koekt het zout samen tot een harde koek die een luchtruimte boven het wateroppervlak creëert, waardoor de brine-oplossing niet goed wordt gevormd. Breek de brug voorzichtig los met een bezem of stok.</li>
          <li><strong>Timer/klok:</strong> Controleer of de regeneratietimer op de juiste tijd en frequentie is ingesteld. Na een stroomstoring kan de klok zijn gereset.</li>
          <li><strong>Brine-aanzuiging:</strong> Controleer de brine-slang en injectie-eenheid op verstoppingen. Reinig indien nodig met warm water.</li>
          <li><strong>Harsbed:</strong> Harsparels kunnen na jaren verklumpen of worden verontreinigd met ijzer (rode kleur). Reinig met harsreiniger; overweeg na 10-15 jaar harsvervangning.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          TDS te hoog ondanks nieuwe filters
        </h2>
        <p className="text-gray-700 mb-4">
          Als het TDS-gehalte van het gefilterde water na filtervervanging nog steeds hoog is,
          controleer dan:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 pl-2">
          <li><strong>Bypass-controle:</strong> Controleer of alle bypass-kranen volledig gesloten zijn. Een open bypass laat ongefilterd water mengen.</li>
          <li><strong>Membraanorientatie:</strong> Een verkeerd geplaatst membraan (omgekeerd) werkt niet of nauwelijks. Verwijder het membraan en controleer de flow direction-pijl.</li>
          <li><strong>Lekkend membraanhuis:</strong> Ongefilterd water kan de membraanbehuizing binnenkomen via een beschadigde O-ring. Demonteer en inspecteer.</li>
          <li><strong>Membraankwaliteit:</strong> Een goedkoop nep-membraan kan slechte rejectiewaarden geven. Koop alleen van gecertificeerde leveranciers (Filmtec, Hydranautics, Vontron).</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer professionele hulp inschakelen
        </h2>
        <p className="text-gray-700 mb-4">
          De meeste osmosestoringen zijn zelfoploosbaar. Schakel een installateur in bij:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 pl-2">
          <li>Aanhoudende lekkage na O-ring- en fittingcontrole (mogelijk leidingprobleem).</li>
          <li>TDS-probleem dat niet is opgelost na membraanvervanging en bypass-controle.</li>
          <li>Waterontharder die na volledig doorlopen van de basiscontrole niet regenereert.</li>
          <li>Lekkage uit de membraanbehuizing zelf (barst of scheur).</li>
          <li>Elektrisch defect aan de timer of de regeneratievalve van de waterontharder.</li>
        </ul>

        <CTABanner context="algemeen" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over waterfilter storingen</h2>
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
          Zie ook:{" "}
          <Link href="/onderhoud" className="text-[#005F8A] underline">Onderhoud overzicht</Link>,{" "}
          <Link href="/onderhoud/osmose-filter-vervangen" className="text-[#005F8A] underline">Osmosefilter vervangen</Link>,{" "}
          <Link href="/kennisbank/tds-meter-gebruiken" className="text-[#005F8A] underline">TDS-meter gebruiken</Link>,{" "}
          <Link href="/waterontharder" className="text-[#005F8A] underline">Waterontharder informatie</Link> en{" "}
          <Link href="/filtertechnieken/vergelijking" className="text-[#005F8A] hover:underline font-medium">Filtertechnieken vergeleken: welke past bij jou?</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose techniek</h3>
              <p className="text-sm text-gray-600">Hoe RO-systemen werken zodat u storingen kunt diagnosticeren (drukvat, membraan, voorfilters).</p>
            </Link>
            <Link href="/keuzehulp/installatie-type" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Installatietype: storing per type</h3>
              <p className="text-sm text-gray-600">Welke storingen vaker voorkomen per installatietype (onderbouw, aanrecht, inline).</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
