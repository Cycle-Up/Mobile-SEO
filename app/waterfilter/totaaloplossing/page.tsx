import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterfilter totaaloplossing: complete waterzuivering voor heel huis",
  description:
    "Waterfilter totaaloplossing: sediment + actief kool + ontharder + osmose drinkwater. Complete aanpak voor heel huis. Kosten, installatie en prioritering.",
  alternates: { canonical: "https://waterfilterplatform.nl/waterfilter/totaaloplossing" },
  openGraph: {
    title: "Waterfilter totaaloplossing: complete waterzuivering voor heel huis",
    description:
      "Waterfilter totaaloplossing: sediment + actief kool + ontharder + osmose drinkwater. Complete aanpak voor heel huis. Kosten, installatie en prioritering.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Waarom is een totaaloplossing beter dan een enkel waterfilter?",
    answer:
      "Geen enkel filtersysteem verwijdert alles. Een koolstoffilter verwijdert chloor maar geen kalk of PFAS. Een waterontharder verwijdert kalk maar geen bacterien of pesticiden. Een osmosefilter zuivert drinkwater uitstekend maar behandelt niet het water voor de wasmachine of cv-ketel. Alleen een gecombineerd systeem met meerdere trappen beschermt zowel uw leidingen en apparaten als uw drinkwaterkwaliteit.",
  },
  {
    question: "Wat is de juiste volgorde van installatie bij een totaaloplossing?",
    answer:
      "De correcte volgorde is: (1) sedimentfilter direct achter de watermeter als grofste voorfilter, (2) waterontharder voor de gehele huisinstallatie, (3) actief koolfilter op de koudwaterleiding voor de keuken, (4) osmosefilter als eindstap op het drinkwaterpunt. Optioneel voegt u UV-sterilisatie toe na het osmosefilter. Deze volgorde zorgt ervoor dat elk systeem optimaal werkt en het volgende systeem beschermt.",
  },
  {
    question: "Hoeveel kost een complete waterfilter totaaloplossing?",
    answer:
      "Een complete totaaloplossing kost tussen de 1.180 en 3.030 euro in totaal (aanschaf plus installatie), met een jaarlijks onderhoudsbedrag van 130 tot 260 euro. Het goedkoopste alternatief is een osmosefilter alleen (vanaf 300 euro inclusief installatie), voor wie alleen drinkwaterkwaliteit wil verbeteren. Een volledige installatie met ontharder en alle trappen kost gemiddeld 2.000 euro all-in.",
  },
  {
    question: "Welke trap heeft prioriteit als mijn budget beperkt is?",
    answer:
      "Dat hangt af van uw situatie. Woon u in een hardheidsgebied met meer dan 15 dH (zoals Amsterdam, Den Haag of Utrecht)? Dan heeft een waterontharder prioriteit om kalkschade aan uw cv-ketel, boiler en apparaten te voorkomen. Heeft u zorgen over PFAS of nitraten in uw drinkwater? Dan is een osmosefilter de eerste prioriteit. Bij putwater of bronwater begint u met een sedimentfilter plus UV-sterilisatie.",
  },
  {
    question: "Moet ik een loodgieter inschakelen voor de installatie?",
    answer:
      "Voor de sedimentfilter en het osmosefilter kan een handige doe-het-zelver de installatie zelfstandig uitvoeren. Voor de waterontharder is een erkende installateur sterk aan te raden: het systeem wordt achter de watermeter geplaatst en vereist een bypass-ventiel op de hoofdleiding. Foutieve installatie kan de garantie op uw cv-ketel en boiler ongeldig maken. Vraag altijd een installatiebewijs.",
  },
  {
    question: "Hoe combineer ik onderhoud van alle systemen?",
    answer:
      "Maak een jaarlijks onderhoudschema: (1) sedimentfilterpatroon vervangen elke 3-6 maanden, (2) zout bijvullen in de waterontharder maandelijks controleren en bijvullen, (3) osmosefilter pre-filter jaarlijks, membraan elke 2-3 jaar, (4) UV-lamp jaarlijks vervangen, (5) waterontharder professionele controle jaarlijks. Stel herinneringen in op uw telefoon of kalender.",
  },
  {
    question: "Werkt een osmosefilter samen met een waterontharder?",
    answer:
      "Ja, ze werken complementair. De waterontharder zorgt voor zacht water door het hele huis (beschermt leidingen, apparaten, cv-ketel). De osmosefilter zuivert het drinkwaterpunt verder door ook natrium (dat de ontharder toevoegt), PFAS, nitraten en zware metalen te verwijderen. Osmosewater bevat na behandeling door de ontharder zelfs minder mineralen, wat de levensduur van het osmosemembraan verlengt.",
  },
  {
    question: "Is een totaaloplossing zinvol in een nieuwbouwwoning?",
    answer:
      "Ja, zeker in gebieden met hard water. In een nieuwbouwwoning kunt u de installatie al bij de inrichting meenemen, wat achteraf verbouwen voorkomt. Reserveer ruimte in de meterkast voor de waterontharder en onder het aanrecht voor het osmosefilter. Sommige projectontwikkelaars bieden tegenwoordig een waterontharder als optie aan bij de oplevering; vraag hiernaar als u een nieuwbouwwoning koopt.",
  },
  {
    question: "Hoe weet ik of ik een sedimentfilter nodig heb?",
    answer:
      "Een sedimentfilter is zeker zinvol als u in een oudere woning woont met stalen leidingen die kunnen roesten, als u zichtbaar bruin of troebel water heeft gehad, als u putwater of bronwater gebruikt, of als u filterpatronen van andere systemen snel ziet verkleuren. In een nieuwbouwwoning met kunststof leidingen en scherp leidingwater is het minder urgent, maar als voorfilter voor een waterontharder of osmosefilter altijd verstandig.",
  },
];

export default function TotaaloplossigPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Waterfilter", url: "https://waterfilterplatform.nl/waterfilter" },
          { name: "Totaaloplossing", url: "https://waterfilterplatform.nl/waterfilter/totaaloplossing" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Waterfilter totaaloplossing: complete waterzuivering voor heel huis",
          description:
            "Waterfilter totaaloplossing: sediment + actief kool + ontharder + osmose drinkwater. Complete aanpak voor heel huis. Kosten, installatie en prioritering.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/waterfilter/totaaloplossing",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:underline">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>Totaaloplossing</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter totaaloplossing: complete waterzuivering voor heel huis
          </h1>
          <QuickAnswer answer="Een complete waterfilter totaaloplossing combineert meerdere systemen: een sedimentfilter als voorfilter, een waterontharder voor kalkvrij huiswater, en een osmosefilter op het drinkwaterpunt. Deze combinatie beschermt zowel uw leidingen en apparaten als uw drinkwaterkwaliteit optimaal." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Waarom geen enkel systeem alles doet
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De meest voorkomende misvatting bij waterfiltratie is dat een goed filter alle problemen
            oplost. In werkelijkheid heeft elk systeem een specifieke taak en beperking. Een
            koolstoffilter verwijdert chloor, organische verbindingen en verbetert smaak en geur, maar
            laat kalk, nitraten, PFAS en bacterien passeren. Een waterontharder verwijdert kalk maar
            voegt natrium toe en verwijdert geen chloor, zware metalen of microplastics. Een osmosefilter
            geeft extreem zuiver drinkwater maar behandelt geen water voor de rest van het huis.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een totaaloplossing combineert deze systemen zodat elk zijn sterke punt benut en de zwakke
            punten van de anderen opvangt. Het resultaat: beschermd leidingwerk, langere levensduur van
            apparaten, en zuiver drinkwater van de hoogste kwaliteit.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            De vier filtratietrappen uitgelegd
          </h2>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
            Trap 1: Sedimentfilter (5-50 micron)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            De sedimentfilter is de grofste en eerste trap, direct achter de watermeter geplaatst. Het
            filter vangt deeltjes op van 5 tot 50 micron: zand, roestdeeltjes uit oude leidingen,
            slib en grove vaste stofdeeltjes. Zonder sedimentfilter zouden deze deeltjes de fijnere
            filters downstream (waterontharder, osmosemembraan) snel verstoppen en beschadigen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een sedimentfilterpatroon kost 5 tot 15 euro en moet elke 3 tot 6 maanden worden vervangen,
            afhankelijk van de waterkwaliteit. Het is de goedkoopste beschermlaag in het systeem.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
            Trap 2: Waterontharder
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            De{" "}
            <Link href="/waterontharder" className="text-[#005F8A] hover:underline font-medium">
              waterontharder
            </Link>{" "}
            wordt direct na de sedimentfilter geplaatst en behandelt al het water voor het hele huis.
            Via ionenwisseling worden calcium- en magnesiumionen (kalk) uitgewisseld tegen natriumionen.
            Het resultaat is zacht water dat geen kalkaanslag achterlaat op kranen, tegels, in de
            cv-ketel, boiler, wasmachine of vaatwasser.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De waterontharder beschermt de investering in uw woning: onderzoek toont dat een cv-ketel
            met kalkafzetting 15-25% meer energie verbruikt. Door zacht water te gebruiken, bespaart u
            op energiekosten en verlengt u de levensduur van dure apparaten.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
            Trap 3: Actief koolfilter op koudwaterleiding
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Na de waterontharder installeert u een actief kool (GAC) filter op de koudwatertoevoer naar
            de keuken. Dit filter verwijdert chloor en chloorverbindingen, organische microverontreinigingen,
            pesticiden en verbetert smaak en geur. Chloor is niet schadelijk in de concentraties in
            Nederlands leidingwater, maar het kan de smaak van water en koffie beinvloeden. Bovendien
            beschermt het verwijderen van chloor voor het osmosefilter de levensduur van het
            osmosemembraan.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
            Trap 4: Osmosefilter op het drinkwaterpunt
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
              osmosefilter
            </Link>{" "}
            is de laatste en meest geavanceerde trap, geinstalleerd onder het aanrecht voor een apart
            drinkwaterkraantje. Via een semi-permeabel membraan met porieen van 0,0001 micron worden
            95-99% van alle opgeloste stoffen verwijderd: PFAS, nitraten, nitriet, zware metalen,
            fluoride, farmaceutische resten, bacterien en parasieten zoals Cryptosporidium.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Doordat de waterontharder al zacht water levert, heeft het osmosemembraan minder last van
            kalkafzetting. Dit verlengt de levensduur van het membraan aanzienlijk.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
            Optioneel: UV-sterilisatie na osmose
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor extra zekerheid, met name voor risicogroepen (baby's, immuungecompromitteerden), kunt u
            na het osmosemembraan een UV-lamp plaatsen. UV inactiveert eventuele bacterien die door een
            beschadigd membraan kunnen passeren. Dit is een extra veiligheidslaag boven op de al
            uitstekende osmosefiltratie.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Overzichtsschema totaaloplossing
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Volgorde</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Systeem</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Locatie</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Verwijdert</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">1</td>
                  <td className="border border-gray-300 p-3">Sedimentfilter</td>
                  <td className="border border-gray-300 p-3">Na watermeter</td>
                  <td className="border border-gray-300 p-3">Zand, roest, slib</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">2</td>
                  <td className="border border-gray-300 p-3">Waterontharder</td>
                  <td className="border border-gray-300 p-3">Meterkast / kelder</td>
                  <td className="border border-gray-300 p-3">Kalk (Ca, Mg)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">3</td>
                  <td className="border border-gray-300 p-3">Actief koolfilter</td>
                  <td className="border border-gray-300 p-3">Koudwaterlijn keuken</td>
                  <td className="border border-gray-300 p-3">Chloor, organisch, smaak</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">4</td>
                  <td className="border border-gray-300 p-3">Osmosefilter</td>
                  <td className="border border-gray-300 p-3">Onder aanrecht</td>
                  <td className="border border-gray-300 p-3">PFAS, nitraat, metalen, bacterien</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">5 (opt.)</td>
                  <td className="border border-gray-300 p-3">UV-sterilisator</td>
                  <td className="border border-gray-300 p-3">Na osmosemembraan</td>
                  <td className="border border-gray-300 p-3">Bacterien, virussen (inactivatie)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Kosten totaaloplossing
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Onderdeel</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Aanschaf</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Installatie</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Onderhoud/jaar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">Sedimentfilter</td>
                  <td className="border border-gray-300 p-3">30-80 euro</td>
                  <td className="border border-gray-300 p-3">50-100 euro</td>
                  <td className="border border-gray-300 p-3">20-40 euro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Waterontharder</td>
                  <td className="border border-gray-300 p-3">500-1500 euro</td>
                  <td className="border border-gray-300 p-3">300-500 euro</td>
                  <td className="border border-gray-300 p-3">50-100 euro</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Actief koolfilter</td>
                  <td className="border border-gray-300 p-3">50-150 euro</td>
                  <td className="border border-gray-300 p-3">50-100 euro</td>
                  <td className="border border-gray-300 p-3">20-40 euro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Osmosefilter</td>
                  <td className="border border-gray-300 p-3">200-600 euro</td>
                  <td className="border border-gray-300 p-3">100-250 euro</td>
                  <td className="border border-gray-300 p-3">60-120 euro</td>
                </tr>
                <tr className="font-semibold bg-[#E0F2FE]">
                  <td className="border border-gray-300 p-3">Totaal</td>
                  <td className="border border-gray-300 p-3">780-2330 euro</td>
                  <td className="border border-gray-300 p-3">500-950 euro</td>
                  <td className="border border-gray-300 p-3">150-300 euro</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            De totale investering voor een volledige installatie ligt tussen de 1.280 en 3.280 euro all-in.
            De terugverdientijd is afhankelijk van uw specifieke situatie: in een hard watergebied bespaart
            een waterontharder op energiekosten en reparaties aan apparaten, wat de investering op
            termijn terugverdient.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Prioritering bij beperkt budget
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Als u niet meteen de volledige totaaloplossing kunt aanschaffen, is prioritering belangrijk.
            Gebruik de volgende richtlijnen:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li>
              <strong>Hardheidsgebied &gt;15 dH (Amsterdam, Den Haag, Utrecht, Zeeland):</strong> Begin
              met de waterontharder. Kalkschade aan cv-ketel en boiler kost op termijn meer dan de
              ontharder zelf.
            </li>
            <li>
              <strong>PFAS of nitraat in uw regio:</strong> Begin met het osmosefilter op het drinkwaterpunt.
              Dit beschermt het meest kwetsbare gebruik: uw drinkwater.
            </li>
            <li>
              <strong>Putwater of bronwater:</strong> Begin met sedimentfilter plus UV-sterilisatie als
              basis microbiologische bescherming, daarna osmosefilter.
            </li>
            <li>
              <strong>Smaak- en geurklachten:</strong> Een actief koolfilter of filterkan lost dit als
              eerste snel en goedkoop op.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Installatieplanning en praktische tips
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Plan de installatie van de totaaloplossing zorgvuldig. Praktische aandachtspunten:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li>
              Installeer de waterontharder in de meterkast of een droge kelder. Minimale ruimte: 60 x 60
              cm vloeroppervlak, 1,80 m hoogte. Zorg voor een afvoermogelijkheid voor regeneratiewater
              (aansluiting op sifon of vloerputje).
            </li>
            <li>
              Het osmosefilter past onder het aanrecht; reserveer een ruimte van circa 40 x 40 cm.
              Boor een gaatje van 12 mm in het aanrechtblad voor het kraantje.
            </li>
            <li>
              Zet het water tijdelijk af bij installatie; informeer medebewoners.
            </li>
            <li>
              Laat de loodgieter bij installatie van de waterontharder altijd een bypass-ventiel plaatsen
              zodat u bij onderhoud of defect het systeem kunt omzeilen zonder de watertoevoer te
              onderbreken.
            </li>
            <li>
              Stel na installatie de hardheidsinstelling van de ontharder correct in op basis van de
              waterhardheid van uw gemeente. Controleer de waterhardheid op de website van uw waterbedrijf.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Gecombineerd onderhoudschema
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Systeem</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Onderhoudstaak</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Frequentie</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Kosten</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">Sedimentfilter</td>
                  <td className="border border-gray-300 p-3">Patroon vervangen</td>
                  <td className="border border-gray-300 p-3">3-6 maanden</td>
                  <td className="border border-gray-300 p-3">5-15 euro/keer</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Waterontharder</td>
                  <td className="border border-gray-300 p-3">Zout bijvullen</td>
                  <td className="border border-gray-300 p-3">Maandelijks controleren</td>
                  <td className="border border-gray-300 p-3">0,25 euro/kg zout</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Waterontharder</td>
                  <td className="border border-gray-300 p-3">Professionele controle</td>
                  <td className="border border-gray-300 p-3">Jaarlijks</td>
                  <td className="border border-gray-300 p-3">50-100 euro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Osmosefilter pre-filter</td>
                  <td className="border border-gray-300 p-3">Koolpatroon vervangen</td>
                  <td className="border border-gray-300 p-3">Jaarlijks</td>
                  <td className="border border-gray-300 p-3">20-40 euro</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Osmosemembraan</td>
                  <td className="border border-gray-300 p-3">Membraan vervangen</td>
                  <td className="border border-gray-300 p-3">Elke 2-3 jaar</td>
                  <td className="border border-gray-300 p-3">40-80 euro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">UV-lamp (optioneel)</td>
                  <td className="border border-gray-300 p-3">Lamp vervangen</td>
                  <td className="border border-gray-300 p-3">Jaarlijks</td>
                  <td className="border border-gray-300 p-3">20-50 euro</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Meer over de afzonderlijke systemen vindt u op onze pagina over{" "}
            <Link href="/waterfilter" className="text-[#005F8A] hover:underline font-medium">
              waterfilters
            </Link>{" "}
            en onze pagina over de{" "}
            <Link href="/waterontharder" className="text-[#005F8A] hover:underline font-medium">
              waterontharder
            </Link>.
            Klaar om te beginnen met een osmosefilter?{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
              Bekijk ons osmosefilter koopadvies
            </Link>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Alle filtertechnieken</h3>
              <p className="text-sm text-gray-600">Overzicht van alle beschikbare filtertechnologieen en hoe ze samenwerken.</p>
            </Link>
            <Link href="/vergelijken/waterfilter-vs-waterontharder" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter vs. waterontharder</h3>
              <p className="text-sm text-gray-600">Wat zijn de verschillen en wanneer heeft u beide systemen nodig?</p>
            </Link>
            <Link href="/waterfilter/kopen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter kopen: complete gids</h3>
              <p className="text-sm text-gray-600">Alles over het kiezen en aanschaffen van het juiste waterfilter voor thuis.</p>
            </Link>
            <Link href="/keuzehulp/budget" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter op budget kiezen</h3>
              <p className="text-sm text-gray-600">Welk waterfilter past bij uw budget? Overzicht van de goedkoopste opties.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
