import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Beste waterfilter voor hard water: kalk verwijderen of behandelen",
  description:
    "In een hard-watergebied (>14°dH, Limburg, Utrecht, Gelderland)? Kies tussen osmosefilter, waterontharder of ontkalker op basis van uw doel.",
  alternates: {
    canonical: "https://waterfilterplatform.nl/beste-waterfilter/hard-water-gebied",
  },
  openGraph: {
    title: "Beste waterfilter voor hard water: kalk verwijderen of behandelen",
    description:
      "In een hard-watergebied (>14°dH, Limburg, Utrecht, Gelderland)? Kies tussen osmosefilter, waterontharder of ontkalker op basis van uw doel.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Welke regio's in Nederland hebben het hardste water?",
    answer:
      "Limburg heeft verreweg het hardste kraanwater in Nederland: gemiddeld 19-23°dH (duitse hardheidsgraden), wat overeenkomt met 'zeer hard' water. Delen van Gelderland (Veluwe, Achterhoek), Utrecht en Noord-Brabant scoren 14-18°dH ('hard'). Het zachtste water vindt u in Zeeland, Friesland en Groningen (onder de 7°dH). De exacte hardheid per gemeente kunt u opzoeken via uw drinkwaterbedrijf of op waterhardheidskaarten van Vitens, Evides en Brabant Water.",
  },
  {
    question: "Is hard water schadelijk voor mijn gezondheid?",
    answer:
      "Hard water is niet schadelijk voor de gezondheid — calcium en magnesium zijn mineralen die het lichaam nodig heeft. De WHO geeft geen bovengrens aan voor waterhardheid op gezondheidsgronden. Sommige mensen ervaren een zeepachtige of krijtige nasmaak bij extreem hard water (>20°dH). De schade door hard water betreft vooral uw huishoudapparaten, leidingen en huid: kalkaanslag op verwarmingselementen, verminderd schuimen van zeep en shampoo, en droge huid na het douchen.",
  },
  {
    question: "Hoeveel kalk verwijdert een osmosefilter?",
    answer:
      "Een osmosefilter (omgekeerde osmose) verwijdert 95-99% van de opgeloste kalk (calcium- en magnesiumionen) uit het drinkwater. Het water dat het filter verlaat is vrijwel kalkvrij. Dit heeft direct effect op de smaak: osmosewater smaakt zachter en vlakker dan kraanwater met hoge hardheid. Let op: een osmosefilter behandelt alleen het water op het aangesloten kraantje, niet de rest van de installatie (cv-ketel, wasmachine, douche). Voor bescherming van de volledige installatie is een waterontharder nodig.",
  },
  {
    question: "Kan ik een osmosefilter combineren met een waterontharder?",
    answer:
      "Ja, en dit is zelfs de optimale combinatie in zeer harde watergebieden. Een waterontharder beschermt de volledige installatie door alle inkomend water te ontharden (leidingen, cv-ketel, wasmachine, douche). Een osmosefilter filtert aanvullend het drinkwater op het keukengraantje van resterende verontreinigingen zoals PFAS, nitraat en zware metalen. Combinatie geeft maximale bescherming. Nadeel: hogere aanschaf- en onderhoudskosten (waterontharder vereist zout, osmosefilter patronenwissels).",
  },
  {
    question: "Wat kost kalk mijn cv-ketel per jaar?",
    answer:
      "Kalkafzetting in een cv-ketel verlaagt het rendement significant. Per millimeter kalklaag daalt het rendement met 7-10%. In een hard-watergebied zoals Limburg kan de ketel zonder behandeling in 5-7 jaar een kalklaag opbouwen die de energiekosten met 15-25% verhoogt. Een cv-ketel ontkalken kost 80-200 euro per beurt. Vroegtijdige slijtage door kalk kan de levensduur van een ketel halveren: van 20 jaar naar 10-12 jaar, een meerkosten van honderden euro's over de levensduur. Een waterontharder of magnetische ontkalker beschermt de ketel.",
  },
];

export default function HardWaterGebiedPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          {
            name: "Beste waterfilter per situatie",
            url: "https://waterfilterplatform.nl/beste-waterfilter",
          },
          {
            name: "Hard-watergebied",
            url: "https://waterfilterplatform.nl/beste-waterfilter/hard-water-gebied",
          },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Beste waterfilter voor hard water: kalk verwijderen of behandelen",
          description:
            "In een hard-watergebied (>14°dH, Limburg, Utrecht, Gelderland)? Kies tussen osmosefilter, waterontharder of ontkalker op basis van uw doel.",
          datePublished: "2026-05-18",
          url: "https://waterfilterplatform.nl/beste-waterfilter/hard-water-gebied",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/beste-waterfilter" className="hover:underline">
              Beste waterfilter per situatie
            </Link>
            <span className="mx-2">/</span>
            <span>Hard-watergebied</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Beste waterfilter voor hard water
          </h1>
          <QuickAnswer answer="In hard-watergebieden (>14°dH, zoals Limburg, Gelderland, Utrecht) is de keuze: osmosefilter voor zuiver drinkwater (kalk 95-99% weg, 300-700 euro), waterontharder voor bescherming van de volledige installatie (500-2.000 euro), of combinatie van beide. Een waterontkalker (zoutloos) beschermt leidingen gedeeltelijk maar verwijdert geen kalk uit drinkwater." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#003F5C] mt-8 mb-4">
            Hard water in Nederland: welke regio&apos;s en waarom
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Waterhardheid wordt uitgedrukt in duitse hardheidsgraden (°dH) en geeft aan hoeveel
            calcium en magnesium er in het water zijn opgelost. Water onder de 7°dH is zacht,
            7-14°dH matig hard, 14-21°dH hard en boven de 21°dH zeer hard. In Nederland
            verschilt de waterhardheid sterk per regio, afhankelijk van de geologische ondergrond
            en de wijze van drinkwaterwinning.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Limburg</strong> heeft de hoogste hardheid in Nederland: door winning uit
            kalksteenlagen (mergel en krijt in het zuiden) en de invloed van de Maas komen
            waarden van 19-23°dH regelmatig voor. Dit is meer dan dubbel zo hard als water
            in de Randstad. Bewoners in Maastricht, Roermond, Venlo en Sittard-Geleen ervaren
            dagelijks de gevolgen: dikke kalkranden in de waterkoker na enkele weken,
            witte aanslag op kranen en tegels, en een verminderde zeepwerking.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Gelderland, Utrecht en Noord-Brabant</strong> scoren in delen 14-18°dH,
            wat ook als &apos;hard&apos; kwalificeert. Steden als Arnhem, Nijmegen, Utrecht
            en &apos;s-Hertogenbosch liggen in zones waar grondwaterwinning uit kalkrijke lagen
            de hardheid ophoogt. <strong>Overijssel en Noord-Holland</strong> kennen wisselende
            hardheid: stedelijke gebieden als Enschede en Zwolle meten 10-15°dH, terwijl
            Amsterdam en Haarlem relatief zacht water hebben (7-10°dH) door de winning uit
            duinwaterinfiltrate.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left">Regio</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Hardheid (°dH)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Classificatie</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Waterkoker: aanslag na</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Limburg (zuiden)</td>
                  <td className="border border-gray-300 px-3 py-2">19–23°dH</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Zeer hard</td>
                  <td className="border border-gray-300 px-3 py-2">2–4 weken</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Gelderland, Utrecht, N-Brabant</td>
                  <td className="border border-gray-300 px-3 py-2">14–18°dH</td>
                  <td className="border border-gray-300 px-3 py-2 text-orange-600">Hard</td>
                  <td className="border border-gray-300 px-3 py-2">4–8 weken</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Overijssel, N-Holland (buiten Amsterdam)</td>
                  <td className="border border-gray-300 px-3 py-2">10–15°dH</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">Matig hard</td>
                  <td className="border border-gray-300 px-3 py-2">2–4 maanden</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Amsterdam, Haarlem, Randstad</td>
                  <td className="border border-gray-300 px-3 py-2">7–10°dH</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Zacht–matig</td>
                  <td className="border border-gray-300 px-3 py-2">4–6 maanden</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Zeeland, Friesland, Groningen</td>
                  <td className="border border-gray-300 px-3 py-2">&lt;7°dH</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Zacht</td>
                  <td className="border border-gray-300 px-3 py-2">6+ maanden</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-[#003F5C] mt-8 mb-4">
            Wat veroorzaakt hard water en wat zijn de gevolgen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hard water ontstaat doordat regenwater door kalkrijke geologische lagen sijpelt en
            daarbij calcium (Ca²⁺) en magnesium (Mg²⁺) oplost. In Limburg zijn dit de Maastrichtse
            krijtformaties en mergellagen. In Gelderland en Utrecht zorgen de Veluwerandmeren en
            de winning van diep grondwater uit kalkrijke zandsteen- en kalksteenformaties voor
            de hogere hardheid.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De gevolgen van hard water zijn breed en merkbaar in het dagelijks leven:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Waterkoker en koffiezetapparaat:</strong> kalkafzetting op het verwarmingselement
              vermindert de warmteoverdracht. Een 1 mm dikke kalklaag kost al 7-10% meer energie
              en verlengt de kooktijd. Frequente ontkalking (elke 2-6 weken bij hard water) is
              noodzakelijk om apparaten te sparen.
            </li>
            <li>
              <strong>Cv-ketel en boiler:</strong> kalk in warmtewisselaars verlaagt het rendement
              en verhoogt het risico op vroegtijdige slijtage. Bij een ketel met 10 jaar kalkopbouw
              in een hard-waterregio kan het rendementsverlies oplopen tot 20-25%.
            </li>
            <li>
              <strong>Wasmachine en vaatwasser:</strong> hard water vereist meer wasmiddel voor
              hetzelfde reinigingsresultaat en kan textiel stijf en dof maken. De levensduur van
              verwarmingselementen in wasmachines wordt in hard-watergebieden geschat op 30-40%
              korter dan in zachte watergebieden.
            </li>
            <li>
              <strong>Douche en kranen:</strong> kalkranden op douchekop, glas en tegels zijn
              cosmetisch vervelend maar ook functioneel: een verstopte douchekop geeft ongelijkmatige
              waterstraal. Chroombeslag op kranen wordt aangetast door frequente inwerking van
              kalkhoudend water.
            </li>
            <li>
              <strong>Huid en haar:</strong> hard water heeft meer zeep nodig om te schuimen en
              laat een dunne kalkfilm achter op huid en haar na het douchen. Dit kan leiden tot
              een droog, strak gevoel van de huid en dof, breekbaar haar bij mensen met
              gevoelige huid.
            </li>
            <li>
              <strong>Smaak:</strong> boven 15°dH merken veel mensen een mineralige of krijtige
              nasmaak in thee en koffie. Dit is smaakverschil, geen veiligheidsissue.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#003F5C] mt-8 mb-4">
            Drie oplossingen voor hard water vergeleken
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Er bestaan drie fundamenteel verschillende aanpakken voor hard water. De keuze
            hangt af van uw doel: wilt u alleen beter drinkwater, of wilt u ook uw installatie
            en apparaten beschermen?
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
            1. Osmosefilter: beste keuze voor zuiver drinkwater
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een osmosefilter (omgekeerde osmose) plaatst u onder het aanrecht en sluit u aan op
            een aparte kraantap of een bestaande keukenkraan. Het systeem perst water door een
            semipermeabel membraan dat vrijwel alle opgeloste stoffen tegenhoudt, inclusief
            calcium en magnesium. Het resultaat is water met een hardheid van 0-1°dH — vrijwel
            kalkvrij.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De voordelen van een osmosefilter in een hard-watergebied zijn groot voor drinkwater:
            geen kalk in de waterkoker, geen kalk in het koffiezetapparaat, betere smaak van
            thee en koffie, en tegelijkertijd verwijdering van PFAS (90-99%), lood (95-99%),
            nitraat (85-95%) en andere verontreinigingen. Een osmosefilter pakt dus meer aan
            dan alleen kalk. Meer informatie over de techniek vindt u op de pagina{" "}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] hover:underline font-medium">
              omgekeerde osmose
            </Link>
            .
          </p>
          <p className="text-gray-700 mt-4">
            Meer achtergrondinformatie over kalk en mineralen: <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="text-[#005F8A] hover:underline font-medium">Kalk en mineralen in drinkwater: effecten en verwijdering</Link>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beperkingen: een osmosefilter behandelt alleen het water op het aangeslo ten kraantje.
            De cv-ketel, wasmachine, douche en overige leidingen worden er niet door beschermd.
            Aanschafprijs: 300-700 euro. Jaarlijkse filterkosten: 60-120 euro voor patronenwissels.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
            2. Waterontharder: beste keuze voor de volledige installatie
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een waterontharder werkt via ionenwisseling: calcium- en magnesiumionen worden
            uitgewisseld tegen natriumionen in een harsbed. Het resultaat is volledig onthard
            water voor de hele woning — alle kranen, de douche, de cv-ketel, de wasmachine en
            de vaatwasser krijgen zacht water. Dit is de enige methode die de volledige installatie
            beschermt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De waterontharder heeft twee nadelen: hij verbruikt zout (tabletzout of blokzout,
            gemiddeld 3-8 kg per maand afhankelijk van waterverbruik en hardheid) en voegt
            natrium toe aan het drinkwater. In een hard-watergebied als Limburg kan het
            natriumgehalte na ontharding oplopen tot 150-300 mg per liter, terwijl de WHO-richtlijn
            200 mg/l is. Mensen met hoge bloeddruk of natriumbeperkt dieet doen er goed aan
            het drinkwater apart te filteren via een osmosefilter achter de ontharder. Lees meer
            over het principe op de pagina{" "}
            <Link href="/filtertechnieken/ionenwisseling" className="text-[#005F8A] hover:underline font-medium">
              ionenwisseling
            </Link>
            .
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aanschafprijs: 500-2.000 euro afhankelijk van capaciteit en merk. Jaarlijkse kosten
            voor zout en onderhoud: 100-250 euro. Installatie door een erkend installateur is
            vereist, wat 150-400 euro extra kost. De waterontharder dient te worden ingesteld op
            een eindwaarde van 7-8°dH (licht restzacht), niet op 0°dH — volledig ontharden is
            onnodig en verhoogt de natriumbelasting onnodig.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
            3. Zoutloze ontkalker (TAC/magnetisch): gedeeltelijke bescherming
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zoutloze ontkalkingssystemen werken via Template-Assisted Crystallization (TAC) of
            via magnetische of elektrische velden. Het principe is niet kalk verwijderen maar
            de kristalstructuur van kalk veranderen: calciumcarbonaat vormt kleine, losse
            kristallen die niet meer aan leidingen en oppervlakken hechten. Het water blijft
            even hard in chemische zin (hetzelfde calcium- en magnesiumgehalte), maar de
            neiging tot aankoeken neemt af.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De effectiviteit van zoutloze systemen is omstreden. TAC-systemen tonen in
            laboratoriumtests een reductie van kalkaanslag van 40-80%, maar de resultaten
            in de praktijk zijn wisselend en afhankelijk van watertemperatuur, debiet en
            installatiewijze. Magnetische ontkalkingsapparaten die op de waterleiding worden
            geklemd, hebben in onafhankelijke tests nauwelijks meetbaar effect aangetoond.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cruciaal verschil met een waterontharder of osmosefilter: een zoutloze ontkalker
            verwijdert geen kalk uit het drinkwater. Het kraanwater blijft even hard. Voor
            mensen die specifiek de drinkwatersmaak of de kalkafzetting in de waterkoker
            willen aanpakken, helpt een zoutloze ontkalker niet. Aanschafprijs: 200-800 euro.
            Geen zout nodig, nauwelijks onderhoud. Geschikt als aanvulling in een huurwoning
            of als laagdrempelige eerste stap.
          </p>

          <h2 className="text-2xl font-semibold text-[#003F5C] mt-8 mb-4">
            Vergelijking: osmosefilter, waterontharder en zoutloze ontkalker
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left">Kenmerk</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Osmosefilter</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Waterontharder</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Zoutloze ontkalker</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Kalkverwijdering drinkwater</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">95–99%</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">95–100%</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">0% (structuur wijzigt)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Beschermt leidingen/apparaten</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee (alleen kraantje)</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (hele woning)</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">Gedeeltelijk</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Verwijdert PFAS / lood</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (90–99%)</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Zout nodig</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Nee</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Ja (3–8 kg/mnd)</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Nee</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Aanschafprijs</td>
                  <td className="border border-gray-300 px-3 py-2">300–700 euro</td>
                  <td className="border border-gray-300 px-3 py-2">500–2.000 euro</td>
                  <td className="border border-gray-300 px-3 py-2">200–800 euro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Jaarlijkse kosten</td>
                  <td className="border border-gray-300 px-3 py-2">60–120 euro</td>
                  <td className="border border-gray-300 px-3 py-2">100–250 euro</td>
                  <td className="border border-gray-300 px-3 py-2">&lt;50 euro</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Natriumtoevoeging</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Nee</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Ja</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Nee</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Installatie</td>
                  <td className="border border-gray-300 px-3 py-2">Onderkast, kraangat</td>
                  <td className="border border-gray-300 px-3 py-2">Installatieruimte, erkend installateur</td>
                  <td className="border border-gray-300 px-3 py-2">Op leiding klemmen</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-[#003F5C] mt-8 mb-4">
            Aanbeveling per situatie
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De beste keuze hangt af van uw specifieke situatie en prioriteiten:
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Alleen beter drinkwater in hard-watergebied:</strong> een osmosefilter
            onder het aanrecht is de meest effectieve en kostenefficiënte oplossing. U krijgt
            vrijwel kalkvrij drinkwater, de beste smaak voor thee en koffie, en tegelijkertijd
            bescherming tegen PFAS en andere verontreinigingen. Kosten: 300-700 euro aanschaf
            plus 60-120 euro per jaar. Geschikt voor alle woningtypen, ook huurwoningen met
            toestemming van verhuurder, en ook beschikbaar als aanrechtmodel zonder boorwerk.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Bescherming van leidingen, cv-ketel en apparaten:</strong> een waterontharder
            op het inkomend water is de meest volledige oplossing. Zeker in Limburg of andere
            regio&apos;s boven de 17°dH is de investering van 500-2.000 euro al binnen 5-10 jaar
            terugverdiend via lagere energiekosten en langere levensduur van apparaten. Laat
            de eindwaarde instellen op 7-8°dH, niet op 0°dH. Combineer eventueel met een
            osmosefilter op het drinkwaterkraantje voor het beste resultaat. Meer informatie op{" "}
            <Link href="/waterontharder" className="text-[#005F8A] hover:underline font-medium">
              waterontharder kiezen
            </Link>
            .
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Huurwoning of tijdelijke situatie:</strong> een aanrechtmodel osmosefilter
            (countertop RO) biedt de beste filterprestaties zonder permanente installatie.
            Geen boren, volledig verplaatsbaar, aanschaf 200-350 euro. Aanvullend kunt u een
            magnetische of TAC-ontkalker om de leiding klemmen als extra bescherming voor de
            leiding — ook zonder boorwerk te installeren. Zie ook{" "}
            <Link href="/keuzehulp/hard-water" className="text-[#005F8A] hover:underline font-medium">
              keuzehulp hard water
            </Link>
            .
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Koopwoning in zeer hard-watergebied (Limburg, Oost-Gelderland):</strong>
            de combinatie waterontharder + osmosefilter geeft de maximale bescherming. De
            ontharder beschermt de installatie, de osmosefilter optimaliseert het drinkwater.
            Totale investering: 800-2.700 euro, met jaarlijkse kosten van 160-370 euro. Over
            een periode van 10-15 jaar is dit financieel aantrekkelijker dan de kosten van
            ontkalken van apparaten, vervanging van cv-ketel en waterkokers, en het kopen
            van flessenwater.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#003F5C] mb-6">
            Veelgestelde vragen over waterfilter bij hard water
          </h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {item.question}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{item.answer}</p>
            </details>
          ))}
        </section>

        <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-[#003F5C] mb-3">Verwante pagina&apos;s</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/beste-waterfilter" className="text-[#005F8A] hover:underline">
                Beste waterfilter per situatie: alle woningtypen
              </Link>
            </li>
            <li>
              <Link href="/waterhardheid" className="text-[#005F8A] hover:underline">
                Waterhardheid per gemeente in Nederland
              </Link>
            </li>
            <li>
              <Link href="/keuzehulp/hard-water" className="text-[#005F8A] hover:underline">
                Keuzehulp hard water: osmose of waterontharder?
              </Link>
            </li>
            <li>
              <Link href="/waterontharder" className="text-[#005F8A] hover:underline">
                Waterontharder: werking, kosten en vergelijking
              </Link>
            </li>
            <li>
              <Link href="/filtertechnieken/ionenwisseling" className="text-[#005F8A] hover:underline">
                Ionenwisseling: hoe werkt een waterontharder technisch?
              </Link>
            </li>
          </ul>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in drinkwater</h3>
              <p className="text-sm text-gray-600">Wat hard water is, hoe het ontstaat en welke gevolgen het heeft voor toestellen en huid.</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling voor hard water</h3>
              <p className="text-sm text-gray-600">Hoe een ionenwisselende ontharder kalk verwijdert en wanneer dit beter is dan een filter.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
