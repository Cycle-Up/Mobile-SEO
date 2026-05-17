import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Hard water en waterfilter: waterontharder of osmose?",
  description: "Waterhardheid boven 15 dH? Vergelijking waterontharder vs osmose: kosten, effectiviteit, zoutverbruik en welke keuze het beste past bij uw woning.",
  alternates: { canonical: "https://waterfilterplatform.nl/keuzehulp/hard-water" },
  openGraph: {
    title: "Hard water en waterfilter: waterontharder of osmose?",
    description: "Waterhardheid boven 15 dH? Vergelijking waterontharder vs osmose: kosten, effectiviteit, zoutverbruik en welke keuze het beste past bij uw woning.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Hoe weet ik of ik hard water heb?",
    answer:
      "U kunt uw waterhardheid op drie manieren controleren. Ten eerste via de gemeente of uw drinkwaterbedrijf: elk drinkwaterbedrijf publiceert de waterhardheid per regio. Ten tweede met een TDS-meter: een TDS boven 300 mg/L wijst op hard water (ruw indicatief). Ten derde met teststrips die speciaal voor waterhardheid zijn ontworpen: ze meten calciumcarbonaat en geven het resultaat in dH of mg/L. Limburg, Zeeland en delen van Noord-Brabant hebben de hardste gebieden van Nederland (boven 20 dH). Groningen en Friesland hebben zachte gebieden (onder 8 dH).",
  },
  {
    question: "Wat is de grens tussen zacht en hard water?",
    answer:
      "In Nederland wordt de volgende indeling gehanteerd: zacht water 0-8 graden Duits (dH), matig hard 8-15 dH, hard 15-25 dH en zeer hard boven 25 dH. De meeste kalkoverlast treedt op boven 15 dH. Boven 20 dH is een waterontharder of osmosefilter vrijwel altijd zinvol om schade aan apparaten te voorkomen.",
  },
  {
    question: "Wat zijn de gevolgen van hard water in huis?",
    answer:
      "Hard water veroorzaakt kalkaanslag op douchekoppen, kranen, waterkokers, koffiemachines en wasmachines. Dit verkort de levensduur van apparaten significant: een koffiemachine gaat 30-50% korter mee in hard-watergebieden. Verder verbruikt u meer zeep en shampoo omdat calcium en magnesium de schuimvorming tegengaan. Sommige mensen ervaren ook een kalkachtige nasmaak in thee of koffie.",
  },
  {
    question: "Hoe werkt een waterontharder?",
    answer:
      "Een waterontharder werkt via ionenwisseling. Het harde water stroomt door een tank met harskorrels die geladen zijn met natrium-ionen (Na+). Calcium- en magnesiumionen (Ca2+ en Mg2+) in het water worden uitgewisseld voor natriumionen. Het resultaat is zacht water zonder calcium en magnesium. Periodiek wordt de hars geregenereerd met zout (natriumchloride). Een waterontharder behandelt het volledige huishoudwater (douche, wasmachine, kranen), maar voegt natrium toe aan het drinkwater.",
  },
  {
    question: "Hoe werkt een osmosefilter voor hard water?",
    answer:
      "Een osmosefilter verwijdert kalk (calciumcarbonaat) door water onder druk door een semipermeabel membraan te persen. Het membraan heeft porieen van 0,0001 micron en laat nagenoeg alleen watermoleculen door. Calcium, magnesium en alle andere opgeloste stoffen (inclusief PFAS, lood, nitraat) blijven achter in het concentraat dat wordt afgevoerd. Osmosefilters werken op het kraanpunt (puntsgewijs), niet voor het volledige huis.",
  },
  {
    question: "Moet ik osmosewater remineraliseren?",
    answer:
      "Osmosewater heeft een TDS van 1-20 mg/L en is vrijwel mineraalvrij. Voor drinkwater wordt remineralisatie aanbevolen: een remineralisatiefilter voegt calcium, magnesium en bicarbonaat terug toe. Dit verhoogt de pH (van circa 5,5 naar 7-8) en verbetert de smaak. Voor het bereiden van baby-flesvoeding is remineralisatie standaard aanbevolen. Osmosewater zonder remineralisatie is niet schadelijk, maar koffie en thee smaken er anders door.",
  },
  {
    question: "Hoeveel zout verbruikt een waterontharder per jaar?",
    answer:
      "Een gemiddelde waterontharder voor een gezin van 4 personen verbruikt 100-200 kg zout per jaar, afhankelijk van de waterhardheid en het waterverbruik. Zout kost circa 0,20-0,40 euro per kg, wat neerkomt op 20-80 euro per jaar alleen aan zout. Modernere ontharders met vraaggestuurde regeneratie verbruiken 30-40% minder zout dan oudere tijdklok-modellen.",
  },
  {
    question: "Wanneer kies ik voor een waterontharder en wanneer voor osmose?",
    answer:
      "Kies een waterontharder als u hoofdzakelijk kalkoverlast wilt aanpakken in het hele huis (douche, wasmachine, alle kranen) en u bereid bent zout bij te vullen. Kies een osmosefilter als u naast kalk ook PFAS, lood, nitraat of medicijnresten wilt verwijderen, of als u puur drinkwater wilt zonder zouttoevoeging. De combinatie van beide systemen is de meest volledige aanpak: de ontharder beschermt apparaten, de osmose filtert drinkwater.",
  },
  {
    question: "Is water van een waterontharder veilig om te drinken?",
    answer:
      "Ontharderd water bevat meer natrium. Voor de meeste mensen is de natriumtoevoeging verwaarloosbaar (circa 20-100 mg/L extra, afhankelijk van de oorspronkelijke hardheid). Mensen met een natriumbeperkt dieet (hoge bloeddruk, hartproblemen) moeten voorzichtig zijn. WHO adviseert om een apart kraanpunt voor drinkwater te installeren dat de ontharder omzeilt, of een osmosefilter voor drinken te plaatsen.",
  },
  {
    question: "Wat kost een waterontharder per jaar inclusief alle kosten?",
    answer:
      "Een waterontharder voor een huishouden kost bij aankoop 800-2500 euro. De jaarlijkse kosten bestaan uit: zout (30-80 euro), elektriciteit (15-30 euro), onderhoud en filtervervanging (50-100 euro). Totaal circa 100-200 euro per jaar na de aanschafkosten. Bij een osmosefilter zijn de aanschafkosten 200-600 euro en de jaarlijkse filterkosten 60-100 euro.",
  },
];

export default function HardWaterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Keuzehulp", url: "https://waterfilterplatform.nl/keuzehulp" },
          { name: "Hard water", url: "https://waterfilterplatform.nl/keuzehulp/hard-water" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Hard water en waterfilter: waterontharder of osmose?",
          description:
            "Waterhardheid boven 15 dH? Vergelijking waterontharder vs osmose: kosten, effectiviteit, zoutverbruik en welke keuze het beste past bij uw woning.",
          datePublished: "2026-05-17",
          url: "https://waterfilterplatform.nl/keuzehulp/hard-water",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/keuzehulp" className="hover:underline">Keuzehulp</Link>
            <span className="mx-2">/</span>
            <span>Hard water</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Hard water en waterfilter: waterontharder of osmose?
          </h1>
          <QuickAnswer answer="Bij waterhardheid boven 15 dH zijn twee systemen zinvol: een waterontharder (ionenwisseling) behandelt het volledige huis en beschermt wasmachines, douche en kranen, maar verbruikt zout. Een osmosefilter filtert op het kraanpunt, verwijdert kalk en ook PFAS, lood en nitraat, maar behandelt niet het hele huis. Voor kalkoverlast in het hele huis: ontharder. Voor puur drinkwater met brede bescherming: osmose. Maximale bescherming: combineer beide." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="waterhardheid" />

        <section className="mt-10 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Hoe weet u of u hard water heeft?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De eerste stap is uw waterhardheid kennen. Er zijn drie praktische methoden:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Gemeente of drinkwaterbedrijf:</strong> Elk Nederlands drinkwaterbedrijf publiceert
              de waterhardheid per leveringsgebied. Op onze{" "}
              <Link href="/waterhardheid" className="text-[#005F8A] hover:underline font-medium">
                waterhardheid-pagina
              </Link>{" "}
              vindt u de waarden per gemeente. Limburg en Zeeland zijn de hardste gebieden (tot 30 dH);
              Groningen en Friesland hebben het zachtste water (2-6 dH).
            </li>
            <li>
              <strong>TDS-meter:</strong> Een TDS-meter (Total Dissolved Solids) meet alle opgeloste
              stoffen in mg/L. Een TDS boven 300 mg/L wijst op hard water. TDS-meters kosten circa
              10-20 euro en zijn handig voor regelmatige controle.
            </li>
            <li>
              <strong>Teststrips:</strong> Waterhardheidsteststrips meten direct calcium en magnesium
              en geven een uitslag in dH of Franse graden. Ze zijn eenvoudig in gebruik en kosten
              5-10 euro voor een set van 50 strips.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Nederlandse hardheidsindeling: zacht 0-8 dH, matig hard 8-15 dH, hard 15-25 dH,
            zeer hard boven 25 dH. Kalkoverlast treedt merkbaar op boven 15 dH. Boven 20 dH is
            actie vrijwel altijd zinvol om apparaten te beschermen.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Gevolgen van hard water
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hard water veroorzaakt problemen op meerdere vlakken in het huishouden:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Kalkaanslag op apparaten:</strong> Waterkokers, koffiemachines, vaatwasmachines
              en wasmachines raken eerder verstopt. Studies tonen dat verwarmingselementen in een
              hard-watergebied 15-30% meer energie verbruiken door kalkafzetting, en apparaten
              gemiddeld 30-50% korter meegaan.
            </li>
            <li>
              <strong>Wasmachineslijtage:</strong> Kalk tast de rubber afdichtingen aan en vermindert
              de werking van wasmiddelen. Wasprogramma's op hogere temperatuur versnellen
              kalkafzetting.
            </li>
            <li>
              <strong>Smaak:</strong> Hard water geeft thee en koffie een kalkachtige, vlakke smaak.
              De ideale TDS voor koffie-extractie ligt op 50-150 mg/L; hard leidingwater zit daar
              ver boven.
            </li>
            <li>
              <strong>Zeepverbruik:</strong> Calcium en magnesium binden met zeep en vormen een
              neerslag (kalkzeep) in plaats van schuim. In harde gebieden verbruiken huishoudens
              tot 30% meer shampoo, douchegel en vaatwasmiddel.
            </li>
            <li>
              <strong>Douchekoppen en kranen:</strong> Kalkaanslag verstopt sproeiers en verlaagt
              de waterdruk. In extreme gevallen moeten douchekoppen jaarlijks worden vervangen.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Optie 1: waterontharder (ionenwisseling)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een waterontharder werkt via ionenwisseling. Het harde water stroomt door een tank
            met speciaal ionenwisselingsmateriaal (hars) dat geladen is met natriumionen (Na+).
            Calcium-ionen (Ca2+) en magnesiumionen (Mg2+) in het water worden uitgewisseld
            voor natriumionen. Het resultaat is zacht water (meestal 0-5 dH) zonder calcium
            en magnesium.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wanneer de hars verzadigd is, wordt deze geregenereerd met een zoutoplossing
            (natriumchloride). Het regeneratiewater, rijk aan calcium en magnesium, wordt
            afgevoerd naar het riool. Na regeneratie is de hars weer klaar voor gebruik.
            Moderne ontharders met vraaggestuurde regeneratie optimaliseren het zoutverbruik
            op basis van het gemeten waterverbruik.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het grote voordeel van een waterontharder is de volledige behandeling van het
            huishoudwater: alle kranen, douche, wasmachine en vaatwasmachine profiteren.
            Het nadeel is het zoutverbruik (100-200 kg/jaar voor een gemiddeld gezin) en
            de natriumtoevoeging aan het water. Voor meer informatie, zie onze pagina over{" "}
            <Link href="/waterontharder" className="text-[#005F8A] hover:underline font-medium">
              waterontharders
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Optie 2: osmosefilter op het kraanpunt
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een osmosefilter verwijdert kalk volledig door water onder druk door een
            semipermeabel membraan te persen. Het membraan heeft porieen van slechts 0,0001
            micron: kleiner dan alle opgeloste ionen. Calcium, magnesium en praktisch alle
            andere stoffen (PFAS, lood, nitraat, medicijnresten) worden tegengehouden. Het
            gefilterde water heeft een TDS van 1-20 mg/L.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het nadeel van osmose is dat het alleen op het kraanpunt werkt: de rest van het
            huis (douche, wasmachine) krijgt nog steeds hard water. Ook verbruikt osmose water:
            per liter gefilterd water gaat 2-4 liter naar het riool als concentraat. Voor
            drinkwater is dit acceptabel; als complete huisoplossing voor kalkoverlast is
            osmose niet geschikt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Osmosewater is vrijwel mineraalvrij en heeft een lage pH (circa 5,5). Een
            remineralisatiefilter voegt calcium, magnesium en bicarbonaat terug toe voor
            betere smaak en een neutrale pH. Meer informatie over osmosefilters kopen vindt
            u op onze pagina{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
              osmosefilter kopen
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Wanneer welke keuze?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Hard watergebied + kalkoverlast in het hele huis:</strong> Kies een
              waterontharder. Apparaten, douche en leidingen worden beschermd. Overweeg
              een extra osmosefilter voor drinkwater.
            </li>
            <li>
              <strong>Puur drinkwater + zorg om PFAS of lood:</strong> Kies een osmosefilter
              op het keukenformaat. Verwijdert kalk en brede reeks verontreinigingen.
            </li>
            <li>
              <strong>Beide wensen (kalkloos huis + puur drinkwater):</strong> Combineer
              een waterontharder met een osmosefilter. De ontharder behandelt het huis,
              de osmose levert gefilterd drinkwater.
            </li>
            <li>
              <strong>Beperkt budget of huurwoning:</strong> Begin met een osmosefilter
              of filterkan voor drinkwater. Bespreek een waterontharder met de verhuurder
              als de kalkoverlast ernstig is.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lees ook onze gedetailleerde vergelijking op{" "}
            <Link href="/waterontharder/vs-osmose" className="text-[#005F8A] hover:underline font-medium">
              waterontharder vs osmose
            </Link>{" "}
            voor een uitgebreide kostenberekening.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Vergelijkingstabel: waterontharder vs osmosefilter
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Eigenschap</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Waterontharder</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Osmosefilter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Werkingsprincipe</td>
                  <td className="border border-gray-300 px-3 py-2">Ionenwisseling Ca/Mg naar Na</td>
                  <td className="border border-gray-300 px-3 py-2">Membraanfiltratie 0,0001 micron</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Dekking</td>
                  <td className="border border-gray-300 px-3 py-2">Heel huis (alle kranen, douche)</td>
                  <td className="border border-gray-300 px-3 py-2">Kraanpunt (keuken)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Kalkverwjdering</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Volledig (heel huis)</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Volledig (kraanpunt)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">PFAS/lood verwijdering</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Ja (90-99%)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Kosten aanschaf</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 800-2500</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 200-600</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Kosten per jaar</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 100-200 (zout + onderhoud)</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 60-100 (filters)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Zoutverbruik</td>
                  <td className="border border-gray-300 px-3 py-2">100-200 kg/jaar</td>
                  <td className="border border-gray-300 px-3 py-2">Geen</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Mineralen in drinkwater</td>
                  <td className="border border-gray-300 px-3 py-2">Natrium toegevoegd</td>
                  <td className="border border-gray-300 px-3 py-2">Vrijwel geen (remineralisatie aanbevolen)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Meest geschikt voor</td>
                  <td className="border border-gray-300 px-3 py-2">Kalkoverlast heel huis, apparaten</td>
                  <td className="border border-gray-300 px-3 py-2">Puur drinkwater, brede bescherming</td>
                </tr>
              </tbody>
            </table>
          </div>
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

        <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-[#003F5C] mb-3">Verwante paginas</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/waterhardheid" className="text-[#005F8A] hover:underline">
                Waterhardheid per gemeente in Nederland
              </Link>
            </li>
            <li>
              <Link href="/waterontharder" className="text-[#005F8A] hover:underline">
                Waterontharder: werking, kosten en aanbevelingen
              </Link>
            </li>
            <li>
              <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline">
                Osmosefilter kopen: vergelijking en advies
              </Link>
            </li>
            <li>
              <Link href="/waterontharder/vs-osmose" className="text-[#005F8A] hover:underline">
                Waterontharder vs osmose: uitgebreide vergelijking
              </Link>
            </li>
            <li>
              <Link href="/keuzehulp" className="text-[#005F8A] hover:underline">
                Terug naar de keuzehulp overzicht
              </Link>
            </li>
          </ul>
        </div>

        <CTABanner context="waterhardheid" />
      </div>
    </>
  );
}
