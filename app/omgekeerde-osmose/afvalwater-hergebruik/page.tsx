import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Osmosefilter afvalwater hergebruiken: planten, toilet en tuin",
  description:
    "Osmosefilter afvalwater (reject water) hergebruiken: TDS 400-800 mg/L. Geschikt voor planten gieten, toiletspoeling, tuin. Niet voor drinken. Bespaartips.",
  alternates: { canonical: "https://waterfilterplatform.nl/omgekeerde-osmose/afvalwater-hergebruik" },
  openGraph: {
    title: "Osmosefilter afvalwater hergebruiken: planten, toilet en tuin",
    description:
      "Osmosefilter afvalwater (reject water) hergebruiken: TDS 400-800 mg/L. Geschikt voor planten gieten, toiletspoeling, tuin.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Is het afvalwater van een osmosefilter schadelijk?",
    answer:
      "Het afvalwater (reject water) van een osmosefilter is niet schadelijk voor mensen of het milieu. Het bevat dezelfde mineralen als gewoon leidingwater, maar in hogere concentraties: 2-4 keer hoger dan het inkomende water. Het gaat normaal naar het riool; hergebruik is een milieuvriendelijke keuze om waterverbruik te verminderen.",
  },
  {
    question: "Hoeveel afvalwater produceert een osmosefilter?",
    answer:
      "Een standaard osmosefilter zonder boosterpomp produceert 2-4 liter afvalwater per liter gefilterd water (verhouding 1:3 tot 1:4). Met een boosterpomp daalt dit naar 1-1,5 liter afvalwater per liter gefilterd water (verhouding 1:1 tot 1:1,5). Een gezin dat 20 liter osmosewater per dag verbruikt, produceert zonder pomp 40-80 liter afvalwater per dag.",
  },
  {
    question: "Mag ik osmose-afvalwater gebruiken voor planten?",
    answer:
      "Osmose-afvalwater is matig geschikt voor planten. Bij incidenteel gieten is er geen probleem. Bij langdurig gebruik (wekelijks of dagelijks) hoopt calcium en magnesium op in de potgrond, wat de pH verhoogt en de wortelopname van voedingsstoffen belemmert. Kalkgevoelige planten (azalea, hortensia, blauwe regen) tolereren dit slecht. Gebruik het bij voorkeur voor buiten en voor niet-kalkgevoelige planten.",
  },
  {
    question: "Kan ik osmose-afvalwater gebruiken voor de toiletspoeling?",
    answer:
      "Toiletspoeling is de ideale toepassing voor osmose-afvalwater. Er zijn geen kwaliteitseisen voor toiletwater, de volumes sluiten goed aan (een gezin gebruikt 30-50 liter per dag voor toiletspoeling), en het water bevat geen schadelijke stoffen. De eenvoudigste methode is een emmer opvangen en handmatig in het toilet gieten; een dedicated afvoeropvangbak met pomp maakt dit automatisch.",
  },
  {
    question: "Hoe kan ik het afvalwater van mijn osmosefilter opvangen?",
    answer:
      "Er zijn drie methoden: (1) Emmer onder de afvoer: eenvoudigst en gratis, maar vereist handmatige lediging. (2) Dedicated opvangtank van 10-20 liter met een automatisch 12V-pompje dat doorpompt naar het toiletreservoir of een opvangvat. (3) Directe loodgieterij-aansluiting op het toiletreservoir: meest automatisch maar vereist een erkend loodgieter en goedkeuring van uw waterbedrijf.",
  },
  {
    question: "Hoeveel water kan ik per jaar besparen door afvalwater te hergebruiken?",
    answer:
      "Bij een gezin dat 15-20 liter osmosewater per dag produceert bij een 1:3-verhouding, komt er 45-60 liter afvalwater per dag vrij. Dat is 16.000-22.000 liter per jaar. Als u dit geheel voor toiletspoeling gebruikt, bespaart u het equivalent van 250-330 vuilwaterspoelingsessies per maand, oftewel 15.000-20.000 liter drinkwater per jaar.",
  },
  {
    question: "Kan ik de afval-waterverhouding van mijn osmosefilter verbeteren?",
    answer:
      "Ja, via twee aanpassingen: (1) Boosterpomp: verhoogt de waterdruk voor het membraan, waardoor meer permeaat per liter inkomend water wordt geproduceerd. De verhouding verbetert van typisch 1:3-1:4 naar 1:1-1:1,5. (2) Permeaatpomp: een mechanische drukpomp die geen elektriciteit gebruikt en de productie-afvalverhouding verbetert tot circa 1:1. Beide opties kosten 50-150 euro extra bij installatie.",
  },
  {
    question: "Mag osmose-afvalwater in de tuin worden gebruikt?",
    answer:
      "Voor de meeste tuinplanten is osmose-afvalwater prima: gras, struiken, groenten en fruitbomen tolereren de iets hogere mineralenconcentratie goed. Vermijd gebruik bij carnivore planten (veenplanten, zonnedauw) die juist mineraalarm water nodig hebben, en bij sterk kalkgevoelige sierbeplanting bij langdurig gebruik. Voor tuinirrigatie is het water goed bruikbaar en bespaart het drinkwater.",
  },
];

export default function AfvalwaterHergebruikPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Omgekeerde osmose", url: "https://waterfilterplatform.nl/omgekeerde-osmose" },
          {
            name: "Afvalwater hergebruik",
            url: "https://waterfilterplatform.nl/omgekeerde-osmose/afvalwater-hergebruik",
          },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Osmosefilter afvalwater hergebruiken: planten, toilet en tuin",
          description:
            "Osmosefilter afvalwater (reject water) hergebruiken: TDS 400-800 mg/L. Geschikt voor toiletspoeling, tuinirrigatie en schoonmaken.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/omgekeerde-osmose/afvalwater-hergebruik",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:underline">Omgekeerde osmose</Link>
            <span className="mx-2">/</span>
            <span>Afvalwater hergebruik</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmosefilter afvalwater hergebruiken: slimme toepassingen
          </h1>
          <QuickAnswer answer="Het afvalwater (reject water) van een osmosefilter heeft een TDS van 400-800 mg/L, 2-4 keer hoger dan normaal leidingwater. Het is niet schadelijk maar te mineraalrijk voor langdurig plantengieten. Goede toepassingen: toiletspoeling, tuinirrigatie (niet voor kalkgevoelige planten), schoonmaken en autorijden." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Wat is reject water?
          </h2>
          <p className="text-gray-700 mb-4">
            Een osmosefilter werkt met twee waterstromen. De permeaatstroom is het gezuiverde
            drinkwater dat u drinkt. De concentraatstroom, ook wel reject water of afvalwater
            genoemd, bevat alle stoffen die het membraan heeft tegengehouden: calcium, magnesium,
            natrium, nitraat, en eventuele verontreinigingen in geconcentreerde vorm.
          </p>
          <p className="text-gray-700 mb-4">
            Bij een standaard osmosefilter zonder extra pomp is de verhouding 1:3 tot 1:4
            (permeaat:reject). Per liter drinkwater wordt dus 3-4 liter afvalwater geproduceerd.
            De TDS van dit afvalwater ligt tussen de 400 en 800 mg/L bij gemiddeld Nederlands
            leidingwater (inkomend TDS circa 200-300 mg/L). Het is niet gevaarlijk, maar het is
            2-4 keer geconcentreerder dan het inkomende water.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Verhouding verbeteren met pomp
          </h2>
          <p className="text-gray-700 mb-4">
            De productie-afvalverhouding is te verbeteren met een boosterpomp of permeaatpomp.
            Een boosterpomp verhoogt de waterdruk voor het membraan, waardoor het membraan
            efficienter werkt en meer water doorlaat.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Configuratie</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verhouding permeaat:reject</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Afvalwater per liter drinkwater</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Zonder pomp (standaard)</td>
                  <td className="border border-gray-300 px-3 py-2">1:3 tot 1:4</td>
                  <td className="border border-gray-300 px-3 py-2">3&ndash;4 liter</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Met permeaatpomp</td>
                  <td className="border border-gray-300 px-3 py-2">1:1 tot 1:1,5</td>
                  <td className="border border-gray-300 px-3 py-2">1&ndash;1,5 liter</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Met boosterpomp</td>
                  <td className="border border-gray-300 px-3 py-2">1:1,5 tot 1:2</td>
                  <td className="border border-gray-300 px-3 py-2">1,5&ndash;2 liter</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Toepassingen voor osmose-afvalwater
          </h2>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            Toiletspoeling: ideale toepassing
          </h3>
          <p className="text-gray-700 mb-4">
            Toiletspoeling is verreweg de beste toepassing voor osmose-afvalwater. Een toilet
            vereist geen enkele waterkwaliteitseis en verbruikt 6-9 liter per spoelbeurt. Een
            gezin met vier personen spoelt gemiddeld 16-20 keer per dag, oftewel 30-50 liter
            per dag. Dit sluit vrijwel exact aan op de hoeveelheid afvalwater van een
            gemiddeld osmosefilter.
          </p>
          <div className="bg-[#E0F2FE] rounded-lg p-4 mb-4">
            <p className="text-sm text-[#003F5C]">
              <strong>Bespaarpotentieel:</strong> een gezin dat 20 liter osmosewater per dag
              produceert bij 1:3-verhouding stoot 60 liter afvalwater per dag uit. Volledig
              ingezet voor toiletspoeling = 21.900 liter per jaar bespaard op drinkwaterverbruik.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            Tuinirrigatie
          </h3>
          <p className="text-gray-700 mb-4">
            Voor gras, struiken, groenten en fruitbomen is osmose-afvalwater prima geschikt.
            De hogere mineralenconcentratie is voor de meeste buitenplanten geen probleem; in
            Nederland regent het bovendien regelmatig waardoor de grond gespoeld wordt.
            Vermijd gebruik bij carnivore planten (zonnedauw, vliegenvanger) en zuur- of
            veenbodemplanten die specifiek mineralenarm water vereisen.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            Auto en fiets wassen
          </h3>
          <p className="text-gray-700 mb-4">
            Osmose-afvalwater is voldoende schoon om auto, fiets of tuinmeubilair te wassen.
            Het bevat geen bacterien of gevaarlijke stoffen; de iets hogere mineralenconcentratie
            kan wel kleine waterdruppelsporen achterlaten bij drogen, vergelijkbaar met gewoon
            leidingwater.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            Schoonmaken (dweilwater en vloer)
          </h3>
          <p className="text-gray-700 mb-4">
            Voor dweilwater, schoonmaken van tegels, buitenterras of afspuiten van vuil is
            osmose-afvalwater uitstekend geschikt. Er zijn geen kwaliteitseisen voor
            schoonmaakwater.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            Plantengieten (matig geschikt)
          </h3>
          <p className="text-gray-700 mb-4">
            Bij incidenteel gieten van kamerplanten is osmose-afvalwater geen probleem. Bij
            wekelijks of dagelijks gebruik hoopt kalk op in de potgrond: de pH stijgt, waardoor
            voedingsstoffen minder goed opneembaar worden. Kalkgevoelige planten zoals hortensia,
            azalea en blauwe regen reageren hier negatief op. Gebruik het water bij voorkeur
            voor buiten en buitenplanten, niet voor stek of gevoelige kamerplanten.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            Handen wassen
          </h3>
          <p className="text-gray-700 mb-4">
            Prima toepasbaar voor handen wassen, afspoelen of bijvullen van de wasmachine.
            Het water is microbiologisch gelijk aan leidingwater.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            Drinken of koken: niet aanbevolen
          </h3>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-orange-800">
              <strong>Niet gebruiken voor drinken of koken.</strong> Het reject water heeft een
              hogere TDS (400-800 mg/L) dan gewoon leidingwater. Het is niet gefiltreerd op
              eventuele verontreinigingen; juist deze stoffen zijn geconcentreerd in het
              afvalwater. Er is geen gezondheidsvoordeel ten opzichte van gewoon leidingwater.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Afvalwater opvangen: drie methoden
          </h2>
          <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-4">
            <li>
              <strong>Emmer onder de afvoer:</strong> de eenvoudigste methode. Zet een emmer of
              kan onder de afvoerslang van het osmosefilter. Vul handmatig de watertank voor
              het toilet of giet het water in de tuin. Kosten: nihil. Nadeel: vereist handmatige
              actie.
            </li>
            <li>
              <strong>Dedicated opvangtank met pomp:</strong> een 10-20 liter opvangvat met een
              automatisch 12V-pompje dat het water doorpompt naar het toiletreservoir of een
              extern vat. Kosten: 30-80 euro. Werkt volledig automatisch na installatie.
            </li>
            <li>
              <strong>Directe loodgieterij-aansluiting:</strong> een loodgieter sluit de afvoer
              direct aan op het toiletreservoir via een aparte leiding. Meest automatisch en
              nette oplossing. Kosten: 150-400 euro inclusief arbeid. Informeer uw waterbedrijf;
              er zijn in sommige gemeenten regels over terugkoppeling naar het leidingnet.
            </li>
          </ol>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Milieu-impact en bespaarpotentieel
          </h2>
          <p className="text-gray-700 mb-4">
            Zonder hergebruik gaat al het reject water naar het riool. In Nederland kost de
            productie van drinkwater energie en grondstoffen; elk gespaard liter drinkwater
            reduceert ook de waterrekening. Bij een waterprijs van circa 1,50-2,00 euro per
            kubieke meter en een jaarlijkse reductie van 15.000-20.000 liter betekent hergebruik
            een besparing van 22-40 euro per jaar.
          </p>
          <p className="text-gray-700 mb-6">
            Bovendien geldt: minder afvalwater naar het riool = lagere rioolheffing bij
            volumegebonden tarieven. In sommige gemeenten is de rioolheffing deels
            gebaseerd op waterverbruik.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Veelgestelde vragen
          </h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <CTABanner context="osmose" />

        <p className="text-gray-600 text-sm mt-8">
          Zie ook:{" "}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>
          {", "}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter kopen</Link>
          {" en "}
          <Link href="/omgekeerde-osmose/capaciteit-liter" className="text-[#005F8A] underline">osmosefilter capaciteit berekenen</Link>.
        </p>
      </div>
    </>
  );
}
