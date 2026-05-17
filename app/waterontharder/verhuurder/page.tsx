import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterontharder plaatsen als huurder: toestemming en rechten",
  description:
    "Waterontharder als huurder: toestemming verhuurder nodig voor vaste installatie. Zoutloze alternatieven of tijdelijke systemen zonder vergunning mogelijk.",
  alternates: { canonical: "https://waterfilterplatform.nl/waterontharder/verhuurder" },
  openGraph: {
    title: "Waterontharder plaatsen als huurder: toestemming en rechten",
    description:
      "Waterontharder als huurder: toestemming verhuurder nodig voor vaste installatie. Zoutloze alternatieven of tijdelijke systemen zonder vergunning mogelijk.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Heb ik toestemming nodig van mijn verhuurder voor een waterontharder?",
    answer:
      "Voor een klassieke waterontharder die vast wordt aangesloten op de hoofdleiding via een bypass-ventiel heeft u juridisch gezien toestemming nodig van de verhuurder. Dit valt onder BW 7:215, dat bepaalt dat huurders toestemming nodig hebben voor aanpassingen aan de woning. Kleine, niet-structurele ingrepen zoals een filter onder het aanrecht vallen hier doorgaans niet onder.",
  },
  {
    question: "Wat zegt de wet over het aanbrengen van voorzieningen in een huurwoning?",
    answer:
      "Artikel 7:215 van het Burgerlijk Wetboek regelt dit: u mag als huurder veranderingen en toevoegingen aan het gehuurde aanbrengen, mits u ze bij vertrek ongedaan maakt en de woning in de oorspronkelijke staat terugbrengt. Voor ingrepen die niet zonder noemenswaardige kosten ongedaan te maken zijn, heeft u schriftelijke toestemming van de verhuurder nodig.",
  },
  {
    question: "Welke waterontharder-systemen mag ik plaatsen zonder toestemming?",
    answer:
      "Zonder toestemming zijn toegestaan: (1) compacte zoutloze magnetische of elektrische apparaten die u simpelweg om de buis klempt zonder leidingaansluiting, (2) een osmosefilter onder het aanrecht waarbij u alleen een kleine boring in het aanrechtblad maakt en een extra kraantje plaatst, (3) een waterfilterkan. Deze systemen vereisen geen structurele aanpassing aan de waterinstallatie.",
  },
  {
    question: "Hoe vraag ik toestemming aan mijn verhuurder?",
    answer:
      "Doe dit altijd schriftelijk, bij voorkeur per aangetekende brief of e-mail. Omschrijf het systeem dat u wilt plaatsen, vermeld dat u het bij vertrek zal verwijderen en eventuele schade zal herstellen. Voeg een productblad of installatietekening bij. De verhuurder mag alleen weigeren op redelijke gronden en moet binnen een redelijke termijn reageren. Bewaar alle correspondentie zorgvuldig.",
  },
  {
    question: "Mag de verhuurder weigeren?",
    answer:
      "Ja, de verhuurder mag weigeren, maar alleen op redelijke gronden. Redelijke weigeringsgronden zijn: risico op lekkage, inbreuk op garantie van de waterinstallatie, of bezwaar van de VvE. Onredelijke weigering kunt u aanvechten bij de huurcommissie of de kantonrechter, maar in de praktijk is dat tijdrovend. Als de verhuurder weigert, is een osmosefilter onder het aanrecht vaak het beste alternatief.",
  },
  {
    question: "Wat moet ik doen als ik ga verhuizen?",
    answer:
      "U bent verplicht de waterontharder te demonteren en de installatie in de oorspronkelijke staat terug te brengen. Dit betekent: bypass-ventiel verwijderen, originele leidingaansluiting herstellen, eventuele gaten dichten en oppervlakken netjes achterlaten. Kosten voor herstel zijn voor uw rekening. Leg de staat van de installatie bij inhuizen en vertrek vast met foto's.",
  },
  {
    question: "Is een osmosefilter een goed alternatief voor huurders?",
    answer:
      "Ja, een osmosefilter onder het aanrecht is voor huurders vaak de beste optie. De installatie vereist alleen een kleine boring in het aanrechtblad voor het extra kraantje en een aansluiting op de koudwaterleiding onder het aanrecht via een T-stuk zonder structurele aanpassing. Bij vertrek is demontage eenvoudig. U heeft dan weliswaar geen zacht water door het hele huis, maar wel schoon drinkwater op het keukenkraantje.",
  },
  {
    question: "Hoe werkt het bij een sociale huurwoning of woningcorporatie?",
    answer:
      "Bij woningcorporaties verloopt de aanvraag via de woningcorporatie zelf. Vermeld in uw aanvraag dat een waterontharder bijdraagt aan minder kalkschade aan apparaten (wasmachine, vaatwasser, boiler), wat ook in het belang van de verhuurder is. Sommige corporaties hebben vaste formulieren voor dit soort aanvragen. Een zoutloos systeem of klembeugelsysteem zonder leidingaansluiting stuit zelden op bezwaren.",
  },
];

export default function VerhuurderPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Waterontharder", url: "https://waterfilterplatform.nl/waterontharder" },
          { name: "Verhuurder", url: "https://waterfilterplatform.nl/waterontharder/verhuurder" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Waterontharder plaatsen in huurwoning: wat mag en wat niet?",
          description:
            "Waterontharder als huurder: toestemming verhuurder nodig voor vaste installatie. Zoutloze alternatieven of tijdelijke systemen zonder vergunning mogelijk.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/waterontharder/verhuurder",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontharder" className="hover:underline">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>Verhuurder</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontharder plaatsen in huurwoning: wat mag en wat niet?
          </h1>
          <QuickAnswer answer="In een huurwoning heeft u toestemming van de verhuurder nodig voor een vaste waterontharder die aan de waterleiding wordt gekoppeld. Tijdelijke systemen of zoutloze waterbehandeling zijn zonder toestemming toegestaan. Bij weigering kunt u een osmosefilter onder het aanrecht plaatsen." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Wettelijk kader: huurrecht en aanpassingen aan de woning
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wie als huurder een waterontharder wil plaatsen, stuit al snel op de vraag: mag dat eigenlijk
            wel? Het antwoord hangt af van het type systeem. Het Nederlandse huurrecht maakt onderscheid
            tussen klein onderhoud en structurele aanpassingen aan de woning.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Artikel 7:215 van het Burgerlijk Wetboek (BW) bepaalt dat een huurder veranderingen en
            toevoegingen aan het gehuurde mag aanbrengen als hij ze bij vertrek zonder noemenswaardige kosten
            ongedaan kan maken. Voor ingrepen die dat niet zijn, is schriftelijke toestemming van de
            verhuurder vereist. Een klassieke ionenwisselende waterontharder valt in de tweede categorie: het
            systeem wordt via een bypass-ventiel vast aangesloten op de koudwaterleiding, wat een
            permanentere ingreep is dan het ophangen van een plank.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Klein onderhoud omvat zaken als het vervangen van een tapeind of het smeren van een scharnier.
            Een waterontharder koppelen aan de hoofdleiding is een aanpassing, geen onderhoud. Zelfs als de
            monteur stelt dat het eenvoudig terug te draaien is, geldt juridisch dat u het risico draagt als
            er bij terugplaatsing iets misgaat.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Systemen die GEEN toestemming nodig hebben
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor huurders zijn er gelukkig alternatieven die u zonder toestemming kunt installeren:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li>
              <strong>Compacte magnetische of elektrische waterbehandelaars:</strong> Deze apparaatjes worden
              met een klembeugel om de waterleiding bevestigd zonder enige ingreep in het leidingwerk. Ze
              werken via elektromagnetische pulsen die de kristalstructuur van kalk zouden beinvloeden.
              Wetenschappelijk bewijs voor de effectiviteit is beperkt, maar ze zijn volstrekt legaal voor
              huurders.
            </li>
            <li>
              <strong>Osmosefilter onder het aanrecht:</strong> Voor de installatie boort u alleen een klein
              gaatje (gewoonlijk 12 mm) in het aanrechtblad voor het extra kraantje en sluit u het systeem
              aan op de koudwatertoevoer via een T-stuk of zelfsborende klem. Dit is geen structurele
              aanpassing aan de waterinstallatie. Veel verhuurders beschouwen dit als vergelijkbaar met het
              monteren van een handdoekhaak.
            </li>
            <li>
              <strong>Waterfilterkan:</strong> Kannen met actief koolstoffilter zijn de meest
              drempelvrije optie. Geen installatie nodig, volledig demontabel, geschikt als tijdelijke
              oplossing. Nadeel: capaciteit is beperkt en filters moeten regelmatig worden vervangen.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Systemen die WEL toestemming nodig hebben
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De volgende systemen vereisen altijd schriftelijke toestemming van de verhuurder omdat ze
            een vaste aansluiting aan de waterinstallatie vereisen:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li>
              <strong>Klassieke ionenwisselende waterontharder:</strong> Installatie vereist een
              bypass-ventiel op de hoofdkoudwaterleiding, wat een permanente aftakking betekent. Systeem
              heeft ook stroomaansluiting nodig voor de programmering.
            </li>
            <li>
              <strong>Twin-tank systemen:</strong> Twee tanks voor continue waterontharding; de installatie
              is uitgebreider en neemt meer ruimte in beslag. Vereist aparte afvoer voor regeneratiewater.
            </li>
            <li>
              <strong>Volledige huisinstallatie:</strong> Systemen die achter de watermeter worden
              geplaatst om alle vertrekken van zacht water te voorzien. Dit is een substantiele ingreep die
              altijd toestemming vereist.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Toestemming vragen: stappenplan
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Als u een vaste waterontharder wilt plaatsen, gaat u als volgt te werk:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
            <li>
              Stuur een schriftelijk verzoek (per e-mail of aangetekende brief) aan de verhuurder of
              beheerder.
            </li>
            <li>
              Omschrijf het systeem nauwkeurig: merk, type, afmetingen en wat er aan de waterinstallatie
              wordt gewijzigd.
            </li>
            <li>
              Leg schriftelijk vast dat u het systeem bij vertrek zult verwijderen en de installatie in de
              oorspronkelijke staat terugbrengt.
            </li>
            <li>
              Voeg een productfolder of installatietekening bij als bijlage.
            </li>
            <li>
              Vraag om een schriftelijke bevestiging van toestemming — een mondelinge toezegging is
              juridisch zwak.
            </li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-4">
            De verhuurder mag eisen dat u bij vertrek op eigen kosten de waterinstallatie terugplaatst in de
            oorspronkelijke staat, inclusief het dichten van eventuele gaten en het vervangen van aangepaste
            leidingonderdelen. Fotografeer de situatie voor installatie als bewijs van de begintoestand.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Huurcontract en specifieke bepalingen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Controleer uw huurcontract op specifieke clausules over waterinstallaties of
            aanpassingen aan de keuken. Sommige contracten verbieden uitdrukkelijk elke aanpassing aan de
            waterleiding of technische installaties, terwijl andere contracten juist een algemene
            toestemmingsbepaling bevatten die u kunt gebruiken als basis voor een schriftelijk verzoek.
            Vooral bij nieuwbouwwoningen en moderne appartementen zijn soms al specifieke bepalingen opgenomen
            over het gebruik van waterontharders in verband met garantiebepalingen op de cv-installatie.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Sociale huurwoning: contact met woningcorporatie
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij een sociale huurwoning verloopt de aanvraag via de woningcorporatie. Gebruik het argument
            dat een waterontharder kalkschade aan gemeenschappelijke installaties voorkomt: de cv-ketel,
            de boiler en de wasmachineslang slijten minder snel bij zacht water. Dit is ook in het belang
            van de corporatie. Sommige corporaties hebben standaardformulieren voor aanpassingsverzoeken.
            Informeer bij de huurdersbelangenorganisatie of servicelijn van de corporatie.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een zoutloos systeem (magnetisch of TAC-type) of een osmosefilter stuit bij woningcorporaties
            zelden op bezwaren, omdat de ingreep minimaal is. Dit zijn de meest praktische opties voor
            huurders in de sociale sector.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Vergelijking tijdelijke systemen voor huurders
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Systeem</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Toestemming</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Effectiviteit</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Kosten</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">Waterfilterkan</td>
                  <td className="border border-gray-300 p-3 text-green-700">Niet nodig</td>
                  <td className="border border-gray-300 p-3">Chloor, smaak</td>
                  <td className="border border-gray-300 p-3">20-60 euro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Magnetisch apparaat</td>
                  <td className="border border-gray-300 p-3 text-green-700">Niet nodig</td>
                  <td className="border border-gray-300 p-3">Beperkt, onbewezen</td>
                  <td className="border border-gray-300 p-3">30-150 euro</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Osmosefilter onder aanrecht</td>
                  <td className="border border-gray-300 p-3 text-green-700">Doorgaans niet</td>
                  <td className="border border-gray-300 p-3">Uitstekend drinkwater</td>
                  <td className="border border-gray-300 p-3">200-600 euro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Klassieke waterontharder</td>
                  <td className="border border-gray-300 p-3 text-red-700">Vereist</td>
                  <td className="border border-gray-300 p-3">Volledig zacht water</td>
                  <td className="border border-gray-300 p-3">500-1500 euro</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Osmosefilter als beste alternatief voor huurders
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor de meeste huurders is een{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
              osmosefilter onder het aanrecht
            </Link>{" "}
            de praktisch beste keuze. De ingreep is minimaal: een boringetje van 12 mm in het aanrechtblad
            voor het kraantje, een T-stuk op de koudwateraansluiting en een afvoerslang naar de sifon.
            Bij vertrek demonteer je het systeem in 30 minuten en dicht je het gaatje met een dopje of
            stopverf. Kosten voor herstel zijn verwaarloosbaar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een osmosefilter geeft u bovendien zuiverder drinkwater dan een waterontharder: het systeem
            verwijdert niet alleen kalk maar ook PFAS, nitraten, zware metalen en pesticiden. Het nadeel
            is dat alleen het keukenkraantje zacht en gefilterd water geeft; de rest van het huis (douche,
            wasmachine, cv-ketel) blijft op hard water. Voor huurders die vooral om drinkwaterkwaliteit
            geven, is dat echter geen probleem.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wilt u weten hoe u zelf een osmosefilter kunt installeren?{" "}
            <Link href="/omgekeerde-osmose/diy" className="text-[#005F8A] hover:underline font-medium">
              Bekijk onze DIY-installatiegids
            </Link>{" "}
            voor een stap-voor-stap aanpak.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Bij verhuizen: demontage en herstelplicht
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Heeft u met toestemming een waterontharder geplaatst, dan bent u bij vertrek verplicht het
            systeem te demonteren en de waterinstallatie in de oorspronkelijke staat terug te brengen.
            Concreet betekent dit: bypass-ventiel verwijderen, originele leidingfittingen terugplaatsen,
            eventuele boorgatjes in de meterkast of kelderwand dichten en oppervlakken schoon en
            onbeschadigd achterlaten. Herstelkosten zijn voor rekening van de huurder. Leg bij de eindinspectie
            de staat van de waterinstallatie vast met foto's, bij voorkeur in aanwezigheid van de verhuurder.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meer informatie over de verschillende{" "}
            <Link href="/waterontharder" className="text-[#005F8A] hover:underline font-medium">
              waterontharder soorten en systemen
            </Link>{" "}
            vindt u op onze overzichtspagina.
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

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
