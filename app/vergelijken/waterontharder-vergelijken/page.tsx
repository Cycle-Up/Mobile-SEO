import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterontharder vergelijken: zoutgebaseerd, zoutloos en osmose",
  description:
    "Vergelijk waterontharders: zoutgebaseerde ionenwisseling, zoutloze ontkalker en osmosefilter. Kosten, effectiviteit en installatie.",
  alternates: { canonical: "https://waterfilterplatform.nl/vergelijken/waterontharder-vergelijken" },
  openGraph: {
    title: "Waterontharder vergelijken: zoutgebaseerd, zoutloos en osmose",
    description:
      "Vergelijk waterontharders: zoutgebaseerde ionenwisseling, zoutloze ontkalker en osmosefilter. Kosten, effectiviteit en installatie.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wat is het verschil tussen een waterontharder en een waterontkalker?",
    answer:
      "Een waterontharder (ionenwisseling) verwijdert calcium- en magnesiumionen permanent uit het water door ze te vervangen door natriumionen. Het water is daarna echt zacht (0-5 dH). Een waterontkalker of zoutloze ontkalker (TAC/template-assisted crystallization) verandert de kristalstructuur van kalk zodat het minder aanslaat, maar verwijdert de mineralen niet uit het water. De TDS blijft gelijk; alleen het gedrag van de kalk verandert.",
  },
  {
    question: "Is ontharderd water gezond om te drinken?",
    answer:
      "Ontharderd water is veilig om te drinken, maar bevat meer natrium dan onbehandeld kraanwater. Een waterontharder vervangt calciumionen (Ca2+) door natriumionen (Na+). Bij een hardheid van 20 dH stijgt het natriumgehalte met ca. 80-120 mg/L. De EU-drinkwaternorm voor natrium is 200 mg/L. In harde watergebieden kan het totale natriumgehalte de norm naderen. Voor mensen met hypertensie of een natriumbeperkt dieet is een aparte onbehandelde kraan of osmosefilter voor drinkwater aan te raden.",
  },
  {
    question: "Hoeveel zout verbruikt een waterontharder per maand?",
    answer:
      "Een gemiddeld huishouden van 4 personen verbruikt 8-20 kg regeneratiezout per maand, afhankelijk van de waterhardheid en het dagelijkse waterverbruik. Bij een hardheid van 20 dH en 200 liter verbruik per dag bedraagt het zoutverbruik ca. 12-15 kg/maand. Regeneratiezout in bulkverpakkingen (25 kg) kost 0,15-0,30 euro per kilogram, wat neerkomt op 18-54 euro per maand aan zout alleen.",
  },
  {
    question: "Hebben appartementen een waterontharder nodig?",
    answer:
      "Appartementen liggen doorgaans in stedelijke gebieden met gemiddeld harde tot harde waterkwaliteit (10-25 dH in steden als Amsterdam, Rotterdam en Utrecht). Een centrale waterontharder voor een appartementencomplex is een alternatief voor individuele installaties. Voor individuele appartementen is een onderbouw osmosefilter op het keukenpoint praktischer: geen ruimte nodig voor een zoutbak, geen regeneratiecycli en geen natriumtoevoeging aan het water.",
  },
  {
    question: "Kan een osmosefilter kalk verwijderen zonder waterontharder?",
    answer:
      "Ja. Een osmosefilter verwijdert 95-99% van de hardheid (calcium en magnesium) op het kraanpunt. Het geproduceerde osmosewater heeft een TDS van 1-20 mg/L en bevat vrijwel geen kalk. Het nadeel is dat de rest van de huisinstallatie (douche, wasmachine, vaatwasser, boiler) geen bescherming krijgt tegen kalkaanslag. Voor volledige installatiebescherming is een waterontharder nodig; voor drinkwaterkwaliteit volstaat osmose.",
  },
];

export default function WaterOntharderVergelijkenPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Vergelijken", url: "https://waterfilterplatform.nl/vergelijken" },
          { name: "Waterontharder vergelijken", url: "https://waterfilterplatform.nl/vergelijken/waterontharder-vergelijken" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Waterontharder vergelijken: zoutgebaseerd, zoutloos en osmose",
          description:
            "Vergelijk waterontharders: zoutgebaseerde ionenwisseling, zoutloze ontkalker en osmosefilter. Kosten, effectiviteit en installatie.",
          datePublished: "2026-05-18",
          url: "https://waterfilterplatform.nl/vergelijken/waterontharder-vergelijken",
        }}
      />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:underline">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Waterontharder vergelijken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontharder vergelijken: zoutgebaseerd, zoutloos en osmose
          </h1>
          <QuickAnswer answer="Een zoutgebaseerde waterontharder verwijdert 100% kalk voor de hele installatie (500-2.000 euro). Een zoutloze ontkalker (TAC/NuvoH2O) verandert kalkstructuur maar verwijdert geen mineralen (300-800 euro). Een osmosefilter verwijdert 95-99% kalk op drinkwaterpunt (300-700 euro). De keuze hangt af van het doel: bescherming van leidingen (ontharder) of drinkwaterkwaliteit (osmose)." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">Drie categorie&euml;n kalkbehandeling vergeleken</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hard water is in Nederland een veelvoorkomend probleem. De waterhardheid varieert per regio
            van 4 dH in Groningen en Friesland tot meer dan 25 dH in Limburg en Zeeland. Boven 15 dH
            begint kalkaanslag merkbaar te worden op verwarmingselementen, kranen en leidingen. Er zijn
            drie fundamenteel verschillende technische benaderingen om dit aan te pakken, elk met
            eigen voor- en nadelen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De eerste categorie is <strong>ionenwisseling</strong>: de klassieke zoutgebaseerde waterontharder
            die calcium- en magnesiumionen permanent uit het water verwijdert door ze te vervangen door
            natriumionen. De tweede categorie is <strong>zoutloze ontkalkingstechnologie</strong> (TAC,
            template-assisted crystallization), waarbij kalk niet wordt verwijderd maar wordt omgezet in
            een kristalvorm die niet aanslaat. De derde categorie is <strong>omgekeerde osmose</strong>:
            een membraanfilter dat vrijwel alle opgeloste stoffen verwijdert, inclusief kalk, maar alleen
            op het kraanpunt.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">Categorie 1: Ionenwisseling (zoutgebaseerde waterontharder)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een ionenwisselaar werkt via een harsbed gevuld met natriumbeladen ionenwisselaarkorrels. Hard
            water stroomt door het hars; de calciumionen (Ca2+) en magnesiumionen (Mg2+) die de hardheid
            bepalen, worden uitgewisseld voor natriumionen (Na+). Het resultaat is water met een hardheid
            van 0-5 dH.
          </p>
          <p className="text-gray-700 mt-4">Zie ook: <Link href="/filtertechnieken/ionenwisseling" className="text-[#005F8A] hover:underline font-medium">Ionenwisseling als wateronthardingstechniek</Link>.</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wanneer het harsbed verzadigd is met calcium en magnesium, vindt een regeneratiecyclus plaats:
            een geconcentreerde zoutoplossing (brine) spoelt het hars schoon en herstelt de natriumbelading.
            Dit verbruikt 8-20 kg regeneratiezout per maand voor een gemiddeld gezin. De brine-afvoer
            (geconcentreerde zout-kalkoplossing) gaat naar het riool.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een ionenwisselaar wordt op de hoofdwaterleiding ge&iuml;nstalleerd en behandelt 100% van het
            huishoudwater. Dit beschermt verwarmingselementen in vaatwasser, wasmachine en boiler,
            vermindert zeepverbruik met 30-50% en elimineert kalkaanslag in douche en op kranen.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">Categorie 2: Zoutloze ontkalker (TAC / NuvoH2O)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TAC (template-assisted crystallization) is een zoutloze ontkalkingstechnologie waarbij calcium
            en magnesium niet worden verwijderd maar worden omgezet in calcietkristallen die in suspensie
            blijven. De mineralen zijn nog aanwezig in het water (TDS ongewijzigd), maar slaan niet meer
            neer op warmte-oppervlakken en leidingwanden.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voordelen van TAC ten opzichte van ionenwisseling: geen zout nodig, geen natriumtoevoeging
            aan het water, geen brine-afvoer en minder onderhoud. De effectiviteit is echter beperkter
            dan ionenwisseling en varieert per watersamenstelling. Bij waterhardheden boven 25 dH presteren
            TAC-systemen minder consistent.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            NuvoH2O en ScaleBlaster zijn bekende merken in deze categorie. NuvoH2O gebruikt citroenzuur
            als sequesteringsmiddel; ScaleBlaster werkt via elektromagnetische behandeling. De wetenschappelijke
            consensus over de effectiviteit van magnetische behandeling is minder sterk dan voor TAC.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">Categorie 3: Osmosefilter (puntsgewijze kalkverwijdering)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een osmosefilter verwijdert 95-99% van alle opgeloste stoffen, inclusief calcium en magnesium,
            via een semipermeabel membraan op het kraanpunt. Het geproduceerde water is vrijwel kalkvri
            (TDS 1-20 mg/L) maar de rest van de huisinstallatie krijgt geen bescherming.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Osmose is ideaal wanneer drinkwaterkwaliteit de prioriteit is: naast kalk verwijdert het ook
            PFAS, lood, nitraat en andere verontreinigingen. Voor de volledige installatiebescherming is
            osmose echter niet de aangewezen techniek; daarvoor zijn een waterontharder of TAC-systeem
            op de hoofdleiding beter geschikt.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">Vergelijkingstabel: de drie systemen</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-3 py-3 font-semibold text-[#003F5C] border border-gray-200">Eigenschap</th>
                  <th className="text-left px-3 py-3 font-semibold text-[#003F5C] border border-gray-200">Ionenwisseling (zout)</th>
                  <th className="text-left px-3 py-3 font-semibold text-[#003F5C] border border-gray-200">Zoutloos (TAC)</th>
                  <th className="text-left px-3 py-3 font-semibold text-[#003F5C] border border-gray-200">Osmosefilter</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Aanschafprijs", "500-2.000 euro", "300-800 euro", "300-700 euro"],
                  ["Jaarlijkse kosten", "100-200 euro (zout)", "50-100 euro (patronen)", "80-150 euro (filters)"],
                  ["Kalkverwijdering %", "100% (verwijderd)", "80-95% (aanslag geremd)", "95-99% (verwijderd)"],
                  ["Behandelt hele installatie", "Ja", "Ja", "Nee (kraanpunt)"],
                  ["Natriumtoevoeging", "Ja (+50-120 mg/L)", "Nee", "Nee"],
                  ["PFAS / lood verwijderd", "Nee", "Nee", "Ja (90-99%)"],
                  ["Onderhoud", "Maandelijks zout bijvullen", "Jaarlijks patroon", "Jaarlijks filters"],
                  ["NSF/Kiwa-certificering", "NSF 44 / Kiwa", "NSF 61", "NSF 58"],
                  ["Brine-afvoer (zoutafval)", "Ja", "Nee", "Nee"],
                  ["Installatie", "Professioneel (op hoofdleiding)", "Semi-professioneel", "DIY / loodgieter"],
                ].map(([eigenschap, ionenwisseling, tac, osmose], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-3 py-2.5 font-medium text-gray-700 border border-gray-200">{eigenschap}</td>
                    <td className="px-3 py-2.5 text-gray-700 border border-gray-200">{ionenwisseling}</td>
                    <td className="px-3 py-2.5 text-gray-700 border border-gray-200">{tac}</td>
                    <td className="px-3 py-2.5 text-gray-700 border border-gray-200">{osmose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">Wanneer welk systeem kiezen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="border border-[#005F8A]/20 rounded-xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-semibold text-[#005F8A] mb-2">Hard water (&gt;15 dH) + apparatenbescherming</h3>
              <p className="text-sm text-gray-700">
                Kies een zoutgebaseerde waterontharder. Enige techniek die 100% hardheid uit het water verwijdert
                voor de volledige installatie. Beschermt vaatwasser, wasmachine, boiler en leidingen.
              </p>
            </div>
            <div className="border border-[#005F8A]/20 rounded-xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-semibold text-[#005F8A] mb-2">Matig hard water (10-20 dH) + geen zout gewenst</h3>
              <p className="text-sm text-gray-700">
                Kies een zoutloze TAC-ontkalker. Geen natriumtoevoeging, weinig onderhoud en goede
                kalkaanslagreductie bij moderate hardheidswaarden.
              </p>
            </div>
            <div className="border border-[#005F8A]/20 rounded-xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-semibold text-[#005F8A] mb-2">Drinkwaterkwaliteit prioriteit</h3>
              <p className="text-sm text-gray-700">
                Kies een osmosefilter. Verwijdert niet alleen kalk maar ook PFAS, lood en nitraat.
                Geen natriumtoevoeging. Ideaal als aanvulling op een waterontharder.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">Gecombineerde aanpak: ontharder + osmose</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In harde watergebieden als Limburg (20-30 dH), Zeeland en delen van Noord-Brabant en Utrecht
            is de combinatie van een waterontharder en een osmosefilter de meest complete oplossing.
            De logica is complementair: de waterontharder beschermt de volledige huisinstallatie en
            bespaart op onderhoudskosten van apparaten; de osmosefilter op de keuken levert optimaal
            drinkwater.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een bijkomend technisch voordeel: zacht water (na de ontharder) verlengt de levensduur van
            het osmosemembraan aanzienlijk. Kalk is de voornaamste oorzaak van membraanverstoring
            (scaling). Met voorbehandeld zacht water gaat het membraan 3-5 jaar mee in plaats van
            2-3 jaar bij hard inkomend water.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De osmosefilter na de ontharder verwijdert ook het extra natrium dat de ontharder toevoegt.
            Het resultaat is drinkwater met een TDS van 1-20 mg/L dat vergelijkbaar is met bronwater
            in mineralengehalte. Optionele remineralisatie voegt vervolgens gecontroleerd calcium en
            magnesium terug toe voor optimale smaak.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">Natriumgehalte in ontharderd water (EU-norm)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De EU-drinkwaternorm stelt een maximum van 200 mg/L natrium. Een waterontharder verhoogt het
            natriumgehalte afhankelijk van de waterhardheid: elke dH hardheid die wordt verwijderd voegt
            theoretisch ca. 8 mg/L natrium toe.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Waterhardheid (ingaand)</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Natriumtoevoeging</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Totaal Na (incl. natrium kraanwater)</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">EU-norm (200 mg/L)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["10 dH (matig hard)", "+80 mg/L", "ca. 90-100 mg/L", "Ruim onder norm"],
                  ["15 dH (hard)", "+120 mg/L", "ca. 130-140 mg/L", "Onder norm"],
                  ["20 dH (zeer hard)", "+160 mg/L", "ca. 170-180 mg/L", "Dicht bij norm"],
                  ["25 dH (extreem hard)", "+200 mg/L", "ca. 210-220 mg/L", "Mogelijk boven norm"],
                ].map(([hardheid, toevoeging, totaal, norm], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{hardheid}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{toevoeging}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{totaal}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{norm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij waterhardheden boven 20 dH adviseren leveranciers doorgaans een aparte onbehandelde kraan
            voor drinkwater, of een osmosefilter op het keukenpoint dat het extra natrium verwijdert.
            Mensen met hypertensie, nierproblemen of een natriumbeperkt dieet dienen altijd een aparte
            drinkwaterkraan te overwegen, ongeacht de hardheid.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">Totale kosten over 5 jaar (TCO)</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Kostenpost</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Ionenwisseling</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Zoutloos (TAC)</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Osmose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Aanschaf + installatie", "800-2.200 euro", "400-900 euro", "400-700 euro"],
                  ["Jaarlijkse verbruikskosten", "120-250 euro/jaar (zout)", "50-100 euro/jaar", "80-150 euro/jaar"],
                  ["Service en onderhoud", "50-100 euro/jaar", "Minimaal", "Minimaal"],
                  ["Totaal 5 jaar (TCO)", "1.750-4.700 euro", "850-1.900 euro", "800-1.450 euro"],
                ].map(([post, ionenwisseling, tac, osmose], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{post}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{ionenwisseling}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{tac}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{osmose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            De ionenwisseling-waterontharder heeft de hoogste totaalkosten over 5 jaar, maar biedt ook
            de breedste bescherming voor de volledige installatie. De besparing op onderhoud van
            apparaten (verlengde levensduur vaatwasser, wasmachine en boiler), minder zeepverbruik
            en minder schoonmaakmiddel kan de meerkosten gedeeltelijk compenseren. Een osmosefilter
            is de goedkoopste optie op TCO-basis maar beschermt alleen het drinkwaterpunt.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="mt-10 border-t border-gray-100 pt-8">
          <h2 className="text-lg font-semibold text-[#003F5C] mb-4">Gerelateerde pagina&apos;s</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Vergelijken", href: "/vergelijken" },
              { label: "Waterontharder", href: "/waterontharder" },
              { label: "Keuzehulp hard water", href: "/keuzehulp/hard-water" },
              { label: "Ionenwisseling", href: "/filtertechnieken/ionenwisseling" },
              { label: "Waterhardheid", href: "/waterhardheid" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 bg-[#E0F2FE] text-[#005F8A] font-medium text-sm px-4 py-2 rounded-lg hover:bg-[#005F8A] hover:text-white transition-colors"
              >
                {link.label} &rarr;
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling: hart van de waterontharder</h3>
              <p className="text-sm text-gray-600">Hoe ionenwisseling werkt, wanneer regeneratie nodig is en hoe het verschilt van andere onthardertechnieken.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Hard water in Nederland: kalk en mineralen</h3>
              <p className="text-sm text-gray-600">Waar in Nederland het water hard is en welke mineralen verantwoordelijk zijn voor kalkaanslag.</p>
            </Link>
          </div>
        </section>

        <div className="mt-10">
          <CTABanner context="osmose" />
        </div>
      </div>
    </>
  );
}
