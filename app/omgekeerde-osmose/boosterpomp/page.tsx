import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Boosterpomp osmosefilter: lage waterdruk oplossen en installeren",
  description:
    "Boosterpomp voor osmosefilter bij lage waterdruk (<3,5 bar). Automatische pomp verhoogt druk naar 6-8 bar. Productie +40-70%. Zelf installeren in 30 min.",
  alternates: {
    canonical: "https://waterfilterplatform.nl/omgekeerde-osmose/boosterpomp",
  },
  openGraph: {
    title: "Boosterpomp osmosefilter: lage waterdruk oplossen en installeren",
    description:
      "Boosterpomp voor osmosefilter bij lage waterdruk. Verhoogt druk naar 6-8 bar, productie +40-70%. Installatie in 30 minuten.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Wanneer heb ik een boosterpomp nodig voor mijn osmosefilter?",
    answer:
      "Een boosterpomp is nodig als de waterdruk in uw huis structureel lager is dan 3,5 bar. Dit is het geval in woningen op hoge etages, oudere panden met verouderd leidingwerk of woningen aan het einde van een lange leidingtak. U kunt de druk meten met een manometer (10-20 euro bij de bouwmarkt).",
  },
  {
    question: "Hoeveel verbetert een boosterpomp de productie van mijn osmosefilter?",
    answer:
      "Bij een verhoging van 2,5 bar naar 6 bar neemt de membraanproductie toe met 40 tot 70 procent. Een 50 GPD membraan dat bij 2,5 bar slechts 70-80 liter per dag produceert, haalt bij 6 bar de volledige nominale capaciteit van circa 190 liter per dag.",
  },
  {
    question: "Wat is het verschil tussen een boosterpomp en een permeaatpomp?",
    answer:
      "Een boosterpomp verhoogt actief de waterdruk voor het membraan en verbruikt stroom (10-24 W). Een permeaatpomp is hydraulisch en gebruikt de energie van het afvalwater om de tegendruk van de opslagtank te compenseren. De permeaatpomp verbruikt geen stroom maar heeft wel een voldoende hoge invoerdruk nodig. Beide pompen verbeteren de afvalwaterverhouding.",
  },
  {
    question: "Kan ik een boosterpomp zelf installeren?",
    answer:
      "Ja. Een externe boosterpomp wordt in de koudwateraanvoerleiding geplaatst, voor de pre-filters van de osmoseunit. De pomp beschikt over snelkoppel-aansluitingen (3/8 inch). De voedingskabel sluit u aan op een stopcontact of op de pressure switch van de osmoseunit. Installatie duurt gemiddeld 30 minuten.",
  },
  {
    question: "Hoeveel stroom verbruikt een boosterpomp?",
    answer:
      "De meeste huishoudelijke boosterpompen voor osmosefilters verbruiken 10 tot 24 watt. Omdat de pomp alleen draait wanneer de osmoseunit water produceert (via de ingebouwde pressure switch), bedraagt het werkelijke stroomverbruik doorgaans 10 tot 20 kWh per jaar, wat neerkomt op 3 tot 5 euro per jaar.",
  },
  {
    question: "Verbetert een boosterpomp ook de afvalwaterverhouding?",
    answer:
      "Ja. Zonder boosterpomp bij lage druk kan de verhouding oplopen tot 1:5 of zelfs 1:8 (8 liter afvalwater per liter drinkwater). Met een boosterpomp die de druk naar 5-6 bar brengt, verbetert de verhouding naar 1:2 of beter. Dit bespaart aanzienlijk op het waterverbruik.",
  },
  {
    question: "Welke merken boosterpompen zijn geschikt voor osmosefilters?",
    answer:
      "Veelgebruikte merken zijn Aquatec (model 6800 en 8800), Shurflo en Boosterm. Aquatec-pompen zijn in Nederland het meest verkrijgbaar en zijn compatibel met alle standaard 3/8 inch snelkoppel-systemen. Let bij aankoop op het maximale debiet (minimaal 1,5 L/min) en het maximale uitgangsdebiet van 6-8 bar.",
  },
  {
    question: "Heeft een boosterpomp onderhoud nodig?",
    answer:
      "Een boosterpomp voor osmosefilters is nagenoeg onderhoudsvrij. De pomp heeft een verwachte levensduur van 5 tot 10 jaar bij normaal gebruik. Controleer jaarlijks de aansluitingen op lekkage. Bij verlies van druk of ongewone geluiden vervangt u de pomp.",
  },
];

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const articleSchema = {
  "@type": "Article",
  headline: "Boosterpomp osmosefilter: wanneer nodig en hoe installeren",
  description:
    "Boosterpomp voor osmosefilter bij lage waterdruk. Verhoogt druk naar 6-8 bar, productie +40-70%. Installatie in 30 minuten.",
  datePublished: "2026-05-01",
  dateModified: "2026-05-01",
  url: "https://waterfilterplatform.nl/omgekeerde-osmose/boosterpomp",
  publisher: {
    "@type": "Organization",
    name: "WaterfilterPlatform",
    url: "https://waterfilterplatform.nl",
  },
};

export default function BoosterpompPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://waterfilterplatform.nl",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Omgekeerde osmose",
                item: "https://waterfilterplatform.nl/omgekeerde-osmose",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Boosterpomp osmosefilter",
                item: "https://waterfilterplatform.nl/omgekeerde-osmose/boosterpomp",
              },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:underline">
              Omgekeerde osmose
            </Link>
            <span className="mx-2">/</span>
            <span>Boosterpomp</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Boosterpomp osmosefilter: wanneer nodig en hoe installeren
          </h1>
          <QuickAnswer answer="Een boosterpomp voor een osmosefilter is nodig als de waterdruk minder dan 3,5 bar is. De pomp verhoogt de druk naar 6-8 bar, wat de membraanproductie met 40-70% verhoogt en de afvalwaterverhouding verbetert. Installatie duurt circa 30 minuten." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-10 mb-4">
          Waarom waterdruk cruciaal is voor een RO-membraan
        </h2>
        <p className="text-gray-700 mb-4">
          Het werkingsprincipe van omgekeerde osmose is eenvoudig: water wordt onder druk door een semi-permeabel
          membraan gedwongen. Verontreinigingen, zouten en microplastics zijn te groot om door de porieen
          (0,0001 micron) te passeren en worden afgevoerd als concentraat. Dit proces heet transmembraandruk (TMP).
        </p>
        <p className="text-gray-700 mb-4">
          De transmembraandruk is het drukverschil tussen de invoerzijde en de permeaatzijde van het membraan.
          Hoe hoger de TMP, hoe meer water per tijdseenheid door het membraan stroomt. Bij een te lage TMP
          produceert het membraan nauwelijks drinkwater en stijgt de verhouding afvalwater-drinkwater dramatisch.
        </p>
        <p className="text-gray-700 mb-6">
          Voor een huishoudelijk 50 GPD membraan geldt als vuistregel: elke bar extra druk levert circa
          20-30% meer productie op, tot het maximum van 8 bar. Boven de 8 bar bestaat het risico op
          membraanschade en lekkende verbindingen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Minimale druk en ideale druk voor osmosefilters
        </h2>
        <p className="text-gray-700 mb-4">
          Osmosefilters werken pas betrouwbaar vanaf een bepaalde minimumdruk. De absolute ondergrens is
          2,8 bar (40 psi). Onder die druk produceert het systeem nauwelijks gefilterd water. De ideale
          werkdruk voor een huishoudelijk osmosefilter is 4 tot 6 bar:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Druk</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Productie (50 GPD)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Afvalwaterverhouding</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">2,5 bar</td>
                <td className="border border-gray-300 px-3 py-2">60-80 L/dag</td>
                <td className="border border-gray-300 px-3 py-2">1:6 tot 1:8</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Onvoldoende</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">3,5 bar</td>
                <td className="border border-gray-300 px-3 py-2">120-140 L/dag</td>
                <td className="border border-gray-300 px-3 py-2">1:4</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">Functioneel minimum</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">4-6 bar</td>
                <td className="border border-gray-300 px-3 py-2">180-220 L/dag</td>
                <td className="border border-gray-300 px-3 py-2">1:2 tot 1:3</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Ideaal</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">6-8 bar</td>
                <td className="border border-gray-300 px-3 py-2">220-250 L/dag</td>
                <td className="border border-gray-300 px-3 py-2">1:1,5</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Uitstekend</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Symptomen van te lage waterdruk bij een osmosefilter
        </h2>
        <p className="text-gray-700 mb-4">
          Te lage waterdruk is een veelvoorkomende oorzaak van klachten over een osmosefilter.
          Herkent u een of meer van de volgende symptomen?
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Drukvat vult traag:</strong> het duurt meer dan 3 uur om een 10-liter drukvat te vullen na
            volledig leegdrinken.
          </li>
          <li>
            <strong>Slechte TDS-rejectie:</strong> de TDS-meter achter het membraan geeft hogere waarden dan
            verwacht (boven de 10% van de invoer-TDS). Dit wijst op onvoldoende membraandruk om alle ionen
            te weren.
          </li>
          <li>
            <strong>Hoge reject-ratio:</strong> u merkt dat de afvoerslang voortdurend water loost, ook als
            het drukvat vol zou moeten zijn.
          </li>
          <li>
            <strong>Zwakke waterstraal bij kraan:</strong> zelfs bij een volledig gevuld drukvat is de
            waterstraal aan de osmosekraan zwakker dan normaal.
          </li>
          <li>
            <strong>Systeem produceert niet:</strong> de float valve sluit, maar het systeem start niet
            opnieuw doordat de druk onvoldoende is om de pressure switch te activeren.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe waterdruk thuis meten
        </h2>
        <p className="text-gray-700 mb-4">
          Voordat u investeert in een boosterpomp, meet u eerst de daadwerkelijke waterdruk in uw woning:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>Koop een waterdrukmanometer met 3/4 inch binnendraad (10-20 euro bij de bouwmarkt of online).</li>
          <li>
            Sluit de manometer aan op een buitenkraan, de afsluiter onder de gootsteen of de
            wasmachinaansluiting.
          </li>
          <li>Open de afsluiter volledig en lees de druk af op de wijzerplaat.</li>
          <li>
            Meet ook terwijl elders in huis water wordt gebruikt (douche, toilet doorspoelen) om de werkdruk
            onder belasting te kennen.
          </li>
        </ol>
        <p className="text-gray-700 mb-6">
          Is de druk lager dan 3,5 bar? Dan is een boosterpomp sterk aan te raden. Is de druk lager dan
          2,8 bar? Dan is een boosterpomp een vereiste.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is een boosterpomp nodig?
        </h2>
        <p className="text-gray-700 mb-4">
          Een boosterpomp is in de volgende situaties aan te raden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Waterdruk lager dan 3,5 bar:</strong> de meest voorkomende reden. Woningen op hoge
            etages, panden met verouderd leidingwerk of locaties aan het einde van een leidingnet hebben
            vaak druk tussen de 2 en 3,5 bar.
          </li>
          <li>
            <strong>Hoge TDS in bronwater:</strong> bij hoge zoutconcentraties (TDS boven de 500 mg/L)
            is extra druk nodig om de osmotische druk te overwinnen en een goede rejectie te halen.
          </li>
          <li>
            <strong>Membraanvervanging met hogere capaciteit:</strong> als u overschakelt van een 50 GPD
            naar een 100 GPD membraan, vereist het nieuwe membraan doorgaans hogere druk voor optimale
            werking.
          </li>
          <li>
            <strong>Gebruik in een (huur)woning zonder eigen drukaansluiting:</strong> bij installaties
            in een ruimte zonder directe aansluiting op de hoofdleiding.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Typen boosterpompen voor osmosefilters
        </h2>
        <p className="text-gray-700 mb-4">
          Er zijn twee hoofdtypen boosterpompen voor huishoudelijke osmosefilters:
        </p>
        <p className="text-gray-700 mb-2">
          <strong>1. Automatische boosterpomp (stroom-gestuurd via pressure switch):</strong>
        </p>
        <p className="text-gray-700 mb-4">
          Dit is de standaardkeuze voor de meeste gebruikers. De pomp draait alleen wanneer het osmosesysteem
          water produceert. Een ingebouwde pressure switch activeert de pomp zodra de vraag naar water de druk
          doet dalen. Stopt het systeem met produceren (drukvat vol), dan gaat de pomp automatisch uit.
          Energieverbruik: 10-24 watt. Levensduur: 5-10 jaar.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>2. Handmatig instelbare boosterpomp:</strong>
        </p>
        <p className="text-gray-700 mb-6">
          Deze pomp heeft een instelbare drukregelaar waarmee u de uitgangdruk nauwkeurig kunt afstellen,
          typisch tussen de 4 en 8 bar. Geschikt voor gebruikers die de druk willen optimaliseren op basis
          van hun specifieke membraantype en waterkwaliteit. Iets duurder dan de automatische variant.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Installatie stap voor stap
        </h2>
        <p className="text-gray-700 mb-4">
          Een externe boosterpomp installeert u voor de pre-filters van de osmoseunit. Zo werkt het:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Watertoevoer afsluiten:</strong> sluit de koudwaterafsluitkraan onder het aanrecht.
          </li>
          <li>
            <strong>Invoerslang loskoppelen:</strong> koppel de invoerslang (3/8 inch) los van het
            osmosesysteem of de saddle valve.
          </li>
          <li>
            <strong>Pomp plaatsen in de aanvoerleiding:</strong> sluit de binnenkomende slang aan op de
            inlaat van de pomp en een nieuwe slang van de uitlaat van de pomp naar de pre-filteringang
            van de osmoseunit. Gebruik de meegeleverde 3/8 inch snelkoppelingen.
          </li>
          <li>
            <strong>Elektrische aansluiting:</strong> sluit de voedingskabel van de pomp aan op het
            stopcontact. Sommige pompen worden aangesloten op de voedingsdraad van de osmoseunit zodat
            de pomp alleen draait wanneer het systeem actief is.
          </li>
          <li>
            <strong>Watertoevoer openen en testen:</strong> open de afsluitkraan langzaam. Controleer
            alle verbindingen op lekkage. Vul het drukvat en controleer de TDS-waarden na vulling.
          </li>
        </ol>
        <p className="text-gray-700 mb-6">
          De totale installatietijd bedraagt voor de meeste gebruikers 20 tot 30 minuten. Er zijn geen
          speciale gereedschappen vereist buiten een snijder voor de slangen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Energieverbruik en kosten
        </h2>
        <p className="text-gray-700 mb-4">
          Boosterpompen voor osmosefilters zijn energiezuinig. De meeste modellen verbruiken 10 tot 24 watt
          en draaien gemiddeld 2 tot 4 uur per dag (afhankelijk van het watergebruik van het gezin).
          Het jaarlijkse energieverbruik bedraagt daarmee 10 tot 35 kWh, ofwel 3 tot 10 euro per jaar.
        </p>
        <p className="text-gray-700 mb-6">
          Aanschafprijs van een boosterpomp ligt tussen de 50 en 150 euro, afhankelijk van merk en type.
          Dankzij de verbeterde afvalwaterverhouding (van 1:4 naar 1:2) bespaart u tegelijkertijd op uw
          waterrekening. Bij een gemiddeld gezin dat 2-3 liter osmosewater per dag gebruikt, is de
          terugverdientijd van de pomp via waterbesparing circa 1 tot 2 jaar.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Effect op afvalwaterverhouding
        </h2>
        <p className="text-gray-700 mb-4">
          De afvalwaterverhouding van een osmosefilter geeft aan hoeveel liter water er wordt afgevoerd
          als concentrate voor elke liter drinkwater die wordt geproduceerd. Zonder boosterpomp bij lage
          druk is de verhouding ongunstig:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Situatie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Invoerdruk</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Afvalwaterverhouding</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Extra afval per liter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Zonder pomp, lage druk</td>
                <td className="border border-gray-300 px-3 py-2">2,5-3 bar</td>
                <td className="border border-gray-300 px-3 py-2">1:6 tot 1:8</td>
                <td className="border border-gray-300 px-3 py-2">6-8 liter afval</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Zonder pomp, normale druk</td>
                <td className="border border-gray-300 px-3 py-2">3,5-4 bar</td>
                <td className="border border-gray-300 px-3 py-2">1:3 tot 1:4</td>
                <td className="border border-gray-300 px-3 py-2">3-4 liter afval</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Met boosterpomp</td>
                <td className="border border-gray-300 px-3 py-2">5-7 bar</td>
                <td className="border border-gray-300 px-3 py-2">1:1,5 tot 1:2</td>
                <td className="border border-gray-300 px-3 py-2">1,5-2 liter afval</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Aanbevolen merken en modellen
        </h2>
        <p className="text-gray-700 mb-4">
          De populairste boosterpompen voor huishoudelijke osmosefilters in Nederland:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Aquatec 6800:</strong> compact formaat (10 W), geschikt voor systemen tot 50 GPD.
            Inclusief pressure switch. Prijs: 60-90 euro.
          </li>
          <li>
            <strong>Aquatec 8800:</strong> krachtigere versie (20 W), geschikt voor grotere systemen
            (75-100 GPD). Prijs: 90-130 euro.
          </li>
          <li>
            <strong>Shurflo 8050:</strong> robuust model, instelbare druk. Prijs: 80-110 euro.
          </li>
          <li>
            <strong>Boosterm BM-150A:</strong> budgetmodel met automatische aan/uitfunctie via
            pressure switch. Prijs: 45-70 euro.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Let bij aankoop op compatibiliteit met uw osmoseunit en de maximale debietsnelheid van het membraan.
          Alle genoemde pompen zijn compatibel met standaard 3/8 inch John Guest snelkoppelingen.
        </p>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{" "}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">
            omgekeerde osmose uitleg
          </Link>
          ,{" "}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">
            osmosefilter kopen
          </Link>{" "}
          en{" "}
          <Link href="/omgekeerde-osmose/diy" className="text-[#005F8A] underline">
            osmosefilter zelf installeren
          </Link>
          .
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over boosterpompen
          </h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">
                {item.question}
              </summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
