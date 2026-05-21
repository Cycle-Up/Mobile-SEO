import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Bruisend osmosewater: CO2 toevoegen aan gefilterd water",
  description:
    "Bruisend osmosewater maken met CO2-cilinder: SodaStream of inline carbonator. Osmosewater is ideaal voor bruisend water door lage TDS. Kosten en tips.",
  alternates: {
    canonical: "https://waterfilterplatform.nl/osmose-water/koolzuur",
  },
  openGraph: {
    title: "Bruisend osmosewater: CO2 toevoegen aan gefilterd water",
    description:
      "Osmosewater is ideaal voor bruisend water door de lage TDS. Methoden: SodaStream, inline carbonator of kokend water kraan met bruiswatertap.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Waarom is osmosewater beter voor bruisend water dan leidingwater?",
    answer:
      "Osmosewater heeft een lage TDS (5-30 mg/L) omdat vrijwel alle opgeloste mineralen en zouten zijn verwijderd. CO2 lost daardoor gemakkelijker op in osmosewater dan in water met veel mineralen. Het resultaat is een scherpere, frissere bubbelsmaak die vergelijkbaar is met mineraalarme bruisende bronwateren.",
  },
  {
    question: "Kan ik gewoon osmosewater in een SodaStream gebruiken?",
    answer:
      "Ja, dat kan zonder aanpassingen. Vul de SodaStream-fles met gekoeld osmosewater en koolzuur het zoals gewoonlijk. Omdat osmosewater weinig mineralen bevat, kunt u iets minder CO2-druk gebruiken voor een gelijkwaardig resultaat. Gekoeld water (4-8 graden) absorbeert meer CO2 en geeft een betere koolzuurvorming.",
  },
  {
    question: "Wat is een inline carbonator en hoe werkt die?",
    answer:
      "Een inline carbonator is een systeem dat rechtstreeks na het osmosememembraan wordt gekoppeld. Water stroomt door een carbonatietank onder CO2-druk, waarna bruisend water via een apart kraantje beschikbaar is. Dit is geschikt voor gebruikers die continu bruisend water willen zonder elke keer flessen te vullen. Installatie kost 200-500 euro.",
  },
  {
    question: "Welke CO2-cilinder heb ik nodig voor bruisend osmosewater?",
    answer:
      "Voor een SodaStream gebruikt u standaard SodaStream-cilinders (425 g CO2, circa 12 euro bij vervanging). Voor een inline carbonator gebruikt u een voedingsgeschikte CO2-cilinder van 2 tot 10 kg, verkrijgbaar bij gas- en horecaleveranciers. Let op: gebruik altijd food-grade CO2 (aangeduid als E290); industrieel CO2 bevat verontreinigingen en is niet geschikt voor consumptie.",
  },
  {
    question: "Verandert de pH van osmosewater door het toevoegen van CO2?",
    answer:
      "Ja. CO2 lost op in water en vormt koolzuur (H2CO3), waardoor de pH daalt naar circa 4 tot 5. Dit is normaal voor bruisend water en vergelijkbaar met commercieel bruisend bronwater (pH 4,5-5,5). De lage pH is tijdelijk; zodra het CO2 ontwijkt is de pH weer neutraal. Regelmatig drinken van matig gecarboneerd water heeft geen negatief effect op de gezondheid.",
  },
  {
    question: "Hoeveel kost bruisend osmosewater per liter?",
    answer:
      "Bij gebruik van een SodaStream en osmosewater zijn de kosten circa 0,05 tot 0,10 euro per liter (CO2-kosten plus osmosefilterverbruik). Een inline carbonator is nog goedkoper (0,03-0,07 euro per liter) maar heeft een hogere aanschafprijs. Flessenwater bruisend kost 0,50 tot 1,50 euro per liter, dus de besparing is aanzienlijk.",
  },
  {
    question: "Zijn er kokend water kranen die ook bruisend water leveren?",
    answer:
      "Ja. De Quooker CUBE levert kokend, koud gefilterd en koud bruisend water uit een en dezelfde kraan. De CUBE bevat een ingebouwde carbonator en CO2-cilinder onder het aanrecht. Vergelijkbare systemen zijn beschikbaar van PureAqua en sommige andere merken. Dit is de meest comfortabele maar ook duurste oplossing (400-800 euro voor de CUBE uitbreiding).",
  },
  {
    question: "Moet ik osmosewater remineraliseren voor ik het carboneer?",
    answer:
      "Dat is niet verplicht maar wel een optie. Zuiver osmosewater (TDS 5-10 mg/L) geeft een scherpere, mineraalarme smaak na carbonatie. Sommige gebruikers voegen een kleine hoeveelheid mineralen toe via een remineralisatiefilter om een smaak te krijgen die dicht bij mineraalwater ligt. Dit heeft geen invloed op de carbonatiegraad.",
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
  headline: "Bruisend osmosewater: koolzuur toevoegen aan gefilterd water",
  description:
    "Osmosewater is ideaal voor bruisend water door de lage TDS. Methoden: SodaStream, inline carbonator of kokend water kraan met bruiswatertap.",
  datePublished: "2026-05-01",
  dateModified: "2026-05-01",
  url: "https://waterfilterplatform.nl/osmose-water/koolzuur",
  publisher: {
    "@type": "Organization",
    name: "WaterfilterPlatform",
    url: "https://waterfilterplatform.nl",
  },
};

export default function KoolzuurPage() {
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
                name: "Osmose water",
                item: "https://waterfilterplatform.nl/osmose-water",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Koolzuur in osmosewater",
                item: "https://waterfilterplatform.nl/osmose-water/koolzuur",
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
            <Link href="/osmose-water" className="hover:underline">
              Osmose water
            </Link>
            <span className="mx-2">/</span>
            <span>Koolzuur</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Bruisend osmosewater: koolzuur toevoegen aan gefilterd water
          </h1>
          <QuickAnswer answer="Osmosewater is bij uitstek geschikt voor bruisend water omdat de lage TDS (5-30 mg/L) zorgt voor een scherpere CO2-smaak dan mineraalwater. U kunt CO2 toevoegen via een SodaStream, een inline carbonator of een CO2-cilinder direct na het osmosemembraan." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-10 mb-4">
          Waarom osmosewater ideaal is voor bruisend water
        </h2>
        <p className="text-gray-700 mb-4">
          Bruisend water wordt gemaakt door CO2 onder druk in water op te lossen. De hoeveelheid CO2
          die oplost en de smaak van het eindresultaat hangen sterk af van de mineralensamenstelling
          van het water. Osmosewater heeft een lage TDS (Total Dissolved Solids) van doorgaans 5 tot
          30 mg/L, terwijl leidingwater in Nederland 200-500 mg/L bevat en mineraalwater 300-1000 mg/L.
        </p>
        <p className="text-gray-700 mb-4">
          Door de lage ionenconcentratie zijn er minder stoffen die de CO2-opname belemmeren. Dit
          resulteert in:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Scherpere, frissere bubbels die langer in het water blijven</li>
          <li>Een schone, heldere smaak zonder de mineralige nasmaak van hard leidingwater</li>
          <li>Efficienter CO2-gebruik: u kunt minder CO2 gebruiken voor eenzelfde carbonatiegraad</li>
          <li>Vergelijkbaar resultaat als dure mineraalarmere bruisende bronwateren</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Vergelijkende smaaktests tonen aan dat consumenten bruisend osmosewater vaak als frisser en
          schoner ervaren dan gecarboneerd leidingwater. Dit is te verklaren door de afwezigheid van
          chloor, kalk en andere opgeloste stoffen die de smaak beinvloeden.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijking: osmosewater versus leidingwater versus flessenwater
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Waterbron</th>
                <th className="border border-gray-300 px-3 py-2 text-left">TDS (mg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Smaak bruisend</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten per liter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Osmosewater + SodaStream</td>
                <td className="border border-gray-300 px-3 py-2">5-30</td>
                <td className="border border-gray-300 px-3 py-2">Scherp, schoon</td>
                <td className="border border-gray-300 px-3 py-2">0,05-0,10 euro</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Leidingwater + SodaStream</td>
                <td className="border border-gray-300 px-3 py-2">200-500</td>
                <td className="border border-gray-300 px-3 py-2">Zachter, mineralig</td>
                <td className="border border-gray-300 px-3 py-2">0,03-0,07 euro</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Bruisend flessenwater (Spa Reine)</td>
                <td className="border border-gray-300 px-3 py-2">30-80</td>
                <td className="border border-gray-300 px-3 py-2">Fris, licht</td>
                <td className="border border-gray-300 px-3 py-2">0,50-0,80 euro</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Bruisend flessenwater (San Pellegrino)</td>
                <td className="border border-gray-300 px-3 py-2">1.100</td>
                <td className="border border-gray-300 px-3 py-2">Zacht, mineraalrijk</td>
                <td className="border border-gray-300 px-3 py-2">1,00-1,50 euro</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Methode 1: SodaStream of Drinkmate
        </h2>
        <p className="text-gray-700 mb-4">
          De eenvoudigste methode om bruisend osmosewater te maken is via een SodaStream of het
          vergelijkbare Drinkmate-apparaat. U hebt hiervoor geen extra installatie nodig:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            Vul de SodaStream-fles met gekoeld osmosewater (4-8 graden voor optimale CO2-opname).
          </li>
          <li>Sluit de fles aan op het SodaStream-apparaat.</li>
          <li>
            Druk de carbonatieknop in: 1-2 korte drukken voor licht bruisend, 3-4 voor sterk bruisend.
          </li>
          <li>Serveer direct of bewaar de afgesloten fles in de koelkast.</li>
        </ol>
        <p className="text-gray-700 mb-4">
          Een standaard SodaStream-cilinder bevat 425 gram CO2 en is goed voor circa 60 liter bruisend
          water. De vervangingsprijs bedraagt circa 12-15 euro per cilinder (retourprijs bij inlevering).
          Dit komt neer op 0,20-0,25 euro per liter puur CO2-kosten.
        </p>
        <p className="text-gray-700 mb-6">
          Het Drinkmate-apparaat heeft het voordeel dat het ook andere dranken (vruchtensap, wijn) kan
          carboneren, iets wat een SodaStream officieel niet aanraadt vanwege schuimvorming.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Methode 2: Inline carbonator direct na het osmosemembraan
        </h2>
        <p className="text-gray-700 mb-4">
          Voor gebruikers die continu bruisend water uit de kraan willen, is een inline carbonator de
          beste keuze. Dit systeem wordt na de post-filter van de osmoseunit gekoppeld en slaat bruisend
          water op in een gekoelde tank of carbonateert het water on-the-fly:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>CO2-cilinder:</strong> 2 kg cilinder is goed voor circa 1.000 liter bruisend water.
            Prijs: 20-30 euro voor een volle wisselcilinder (food-grade CO2, E290).
          </li>
          <li>
            <strong>Drukregelaar (regulator):</strong> verlaagt de cilinderd druk (50-60 bar) naar
            circa 4-6 bar voor de carbonatietank.
          </li>
          <li>
            <strong>Carbonatietank:</strong> een kleine roestvrijstalen of kunststof tank
            (0,5-2 liter) waar water en CO2 worden gemengd.
          </li>
          <li>
            <strong>Aparte kraantap:</strong> een extra kraantje (koud bruisend) naast de bestaande
            osmosekraan.
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          De installatiekosten bedragen 200 tot 500 euro voor materiaal en installatie. De lopende
          kosten zijn 0,02-0,03 euro per liter (CO2-kosten). Dit is goedkoper dan SodaStream op
          de lange termijn bij dagelijks gebruik.
        </p>
        <p className="text-gray-700 mb-6">
          Let op: zorg dat de CO2-cilinder en drukregelaar zijn goedgekeurd voor drinkwaterkwaliteit.
          Gebruik alleen food-grade CO2 (E290). Industriele CO2 bevat verontreinigingen die niet
          geschikt zijn voor consumptie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Methode 3: Kokend water kraan met ingebouwde bruiswatertap
        </h2>
        <p className="text-gray-700 mb-4">
          De meest complete en comfortabele oplossing is een kokend water kraan met ingebouwde
          bruiswatertap. De Quooker CUBE is hiervan het bekendste voorbeeld: uit een enkele kraan
          ontvangt u kokend water, koud gefilterd water en koud bruisend water.
        </p>
        <p className="text-gray-700 mb-4">
          De CUBE bevat een ingebouwde carbonator en een CO2-cilinder van 60 liter (goed voor circa
          60 liter bruisend water). De cilinder wordt bij de Quooker-dealer vervangen. Vergelijkbare
          systemen worden aangeboden door PureAqua en enkele Europese merken.
        </p>
        <p className="text-gray-700 mb-6">
          De CUBE-uitbreiding kost 400-800 euro bovenop de reguliere Quooker-prijs en vereist een
          apart CO2-systeem onder het aanrecht. De lopende kosten zijn vergelijkbaar met een inline
          carbonator, maar het comfort is maximaal.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          CO2-kwaliteit: food-grade verplicht
        </h2>
        <p className="text-gray-700 mb-4">
          Voor bruisend drinkwater is uitsluitend food-grade CO2 toegestaan. Dit wordt aangeduid als
          E290 (kooldioxide als levensmiddelenadditief) en heeft een zuiverheid van minimaal 99,9%.
          Food-grade CO2 is vrij van olie, water en andere verontreinigingen die voorkomen in
          industriele CO2.
        </p>
        <p className="text-gray-700 mb-6">
          Food-grade CO2-cilinders zijn verkrijgbaar bij gespecialiseerde gasleveranciers, grotere
          horecagroothandels en via de SodaStream-dealer. Let bij aankoop op het certificaat of
          het E290-keurmerk op de cilinder.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          TDS-effect op smaak en carbonatie
        </h2>
        <p className="text-gray-700 mb-4">
          De TDS (Total Dissolved Solids) van het water heeft een directe invloed op hoe bruisend
          water smaakt:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Lage TDS (osmosewater, 5-30 mg/L):</strong> scherpe, droge bubbels, schone smaak,
            vergelijkbaar met Perrier of Badoit.
          </li>
          <li>
            <strong>Gemiddelde TDS (gefilterd water, 100-200 mg/L):</strong> zachtere bubbels,
            lichtmineralige nasmaak.
          </li>
          <li>
            <strong>Hoge TDS (hard leidingwater, 300-500 mg/L):</strong> zachte, vlakke bubbels,
            duidelijke mineralige smaak die niet iedereen waardeert.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Wilt u een smaak die dichter bij mineraalwater ligt? Voeg een kleine hoeveelheid
          mineraalconcentraat toe na het osmosememembraan via een{" "}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">
            remineralisatiefilter
          </Link>
          . Hiermee stelt u de mineralensamenstelling naar wens in.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          pH na carbonatie: wat u moet weten
        </h2>
        <p className="text-gray-700 mb-4">
          Wanneer CO2 oplost in water ontstaat koolzuur (H2CO3) via de reactie:
        </p>
        <div className="bg-[#F0F9FF] border border-[#005F8A]/30 rounded-lg p-4 mb-4">
          <p className="font-mono text-sm text-gray-800">
            CO2 + H2O &rarr; H2CO3 (koolzuur) &rarr; H+ + HCO3- (bicarbonaationen)
          </p>
        </div>
        <p className="text-gray-700 mb-4">
          De pH van osmosewater daalt na carbonatie naar circa 4 tot 5. Dit is normaal voor bruisend
          water. Commercieel bruisend bronwater heeft doorgaans een pH van 4,5 tot 5,5.
        </p>
        <p className="text-gray-700 mb-6">
          De lage pH is tijdelijk: zodra het CO2 ontwijkt (het water staat open), stijgt de pH
          terug naar neutraal. Dagelijks matig gecarboneerd water drinken heeft geen bewezen
          negatief effect op de gezondheid bij gezonde volwassenen. Mensen met reflux of
          maagklachten kunnen beter plat water drinken.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kosten vergelijking per liter
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Aanschaf</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten per liter</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Gemak</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Flessenwater bruisend (supermarkt)</td>
                <td className="border border-gray-300 px-3 py-2">Geen</td>
                <td className="border border-gray-300 px-3 py-2">0,50-1,50 euro</td>
                <td className="border border-gray-300 px-3 py-2">Hoog</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">SodaStream + osmosewater</td>
                <td className="border border-gray-300 px-3 py-2">80-130 euro</td>
                <td className="border border-gray-300 px-3 py-2">0,05-0,10 euro</td>
                <td className="border border-gray-300 px-3 py-2">Gemiddeld</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Inline carbonator + osmose</td>
                <td className="border border-gray-300 px-3 py-2">200-500 euro</td>
                <td className="border border-gray-300 px-3 py-2">0,03-0,07 euro</td>
                <td className="border border-gray-300 px-3 py-2">Hoog</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Quooker CUBE (kokend + bruisend)</td>
                <td className="border border-gray-300 px-3 py-2">400-800 euro extra</td>
                <td className="border border-gray-300 px-3 py-2">0,04-0,08 euro</td>
                <td className="border border-gray-300 px-3 py-2">Maximaal</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          De terugverdientijd van een SodaStream ten opzichte van flessenwater bedraagt bij gemiddeld
          gebruik (1 liter per dag) circa 3-6 maanden. Een inline carbonator verdient zichzelf terug
          in 1-2 jaar.
        </p>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{" "}
          <Link href="/osmose-water" className="text-[#005F8A] underline">
            osmose water eigenschappen en gebruik
          </Link>
          ,{" "}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">
            osmosefilter kopen
          </Link>{" "}
          en{" "}
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">
            kokend water kraan met bruiswatertap
          </Link>
          .
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over bruisend osmosewater
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

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/bruisend-water/kraan" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Bruisend water uit de kraan</h3>
            <p className="text-sm text-gray-600">Koolzuurwater direct uit de kraan: systemen en werking.</p>
          </Link>
          <Link href="/osmose-water/smaak" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Smaak van osmosewater</h3>
            <p className="text-sm text-gray-600">Waarom osmosewater anders smaakt en hoe je de smaak verbetert.</p>
          </Link>
          <Link href="/osmose-water/mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Mineralen in osmosewater</h3>
            <p className="text-sm text-gray-600">Welke mineralen nodig zijn en hoe je ze toevoegt aan osmosewater.</p>
          </Link>
          <Link href="/osmose-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater</h3>
            <p className="text-sm text-gray-600">Alles over osmosewater: werking, voordelen en toepassingen.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
