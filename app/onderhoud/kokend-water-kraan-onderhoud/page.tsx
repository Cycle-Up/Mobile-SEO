import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Kokend water kraan onderhoud: filter wisselen, ontkalken en lekkage",
  description:
    "Onderhoud kokend water kraan: hoe en wanneer het filter wisselen, tank ontkalken, storing oplossen en levensduur verlengen.",
  alternates: { canonical: "https://waterfilterplatform.nl/onderhoud/kokend-water-kraan-onderhoud" },
  openGraph: {
    title: "Kokend water kraan onderhoud: filter wisselen, ontkalken en lekkage",
    description:
      "Onderhoud kokend water kraan: hoe en wanneer het filter wisselen, tank ontkalken, storing oplossen en levensduur verlengen.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Hoe weet ik wanneer het filter van mijn kokend water kraan aan vervanging toe is?",
    answer:
      "De meeste systemen tonen een indicatie via een app, display of knipperlampje. Als uw systeem dat niet heeft, houd dan het tijdschema aan: elk jaar of na 500-1.000 liter gebruik, afhankelijk van het model. Smaakverslechtering, verminderde filtercapaciteit of een verhoogd TDS-gehalte zijn praktische signalen dat vervanging nodig is.",
  },
  {
    question: "Kan ik zelf mijn Quooker ontkalken?",
    answer:
      "Ja, Quooker biedt officiële ontkalktabletten aan voor zelfreiniging. Het proces duurt ongeveer 30 minuten: de tablet oplossen in water, het systeem vullen via de onderhoudsingang, laten inweken en daarna grondig naspoelen. Raadpleeg de handleiding van uw specifieke Quooker-model, want het proces verschilt tussen het klassieke reservoir en de CUBE. Vergeet niet om na het ontkalken ook het filter te vervangen als het schema dat aangeeft.",
  },
  {
    question: "Wat kost een filterwissel bij een kokend water kraan?",
    answer:
      "Merkeigen filters kosten doorgaans 30-80 euro per stuk. Sommige systemen gebruiken een combinatiefilter (koolstof + antikalk), anderen hebben meerdere losse filters. Doe-het-zelvers betalen alleen de filterprijs; een loodgieter of installateur rekent 60-120 euro per uur voor de arbeid, waardoor een professionele wissel 100-200 euro kan kosten. Bij de meeste systemen is de filterwissel goed uitvoerbaar voor een doe-het-zelver.",
  },
  {
    question: "Waarom smaakt mijn kokend water naar plastic?",
    answer:
      "Een plasticachtige smaak wijst er vaak op dat het systeem nog niet voldoende is doorgespoeld na installatie of filterwissel. Spoel het systeem minimaal 3-5 minuten door voordat u het water gebruikt. Als de smaak aanhoudt, kan een uitgeput of van slechte kwaliteit zijnde koolstoffilter de oorzaak zijn — vervang het filter. In zeldzame gevallen betreft het een probleem met de interne leidingen; raadpleeg dan de fabrikant.",
  },
  {
    question: "Hoe lang gaat een kokend water kraan mee?",
    answer:
      "Een goed onderhouden kokend water kraan gaat gemiddeld 10-15 jaar mee. De boiler (reservoir) heeft een technische levensduur van 8-12 jaar. Regelmatig ontkalken in harde watergebieden is de belangrijkste factor voor een lange levensduur. Het kraanmechanisme en de kraan zelf zijn vaak langer duurzaam dan de boiler. Verwacht de boiler in harde watergebieden eerder te vervangen dan in zachte watergebieden.",
  },
];

export default function KokendWaterKraanOnderhoudPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfilterplatform.nl" },
              { "@type": "ListItem", position: 2, name: "Onderhoud", item: "https://waterfilterplatform.nl/onderhoud" },
              {
                "@type": "ListItem",
                position: 3,
                name: "Kokend water kraan onderhoud",
                item: "https://waterfilterplatform.nl/onderhoud/kokend-water-kraan-onderhoud",
              },
            ],
          },
          {
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
          {
            "@type": "Article",
            headline: "Kokend water kraan onderhoud: filter wisselen, ontkalken en lekkage",
            description:
              "Onderhoud kokend water kraan: hoe en wanneer het filter wisselen, tank ontkalken, storing oplossen en levensduur verlengen.",
            datePublished: "2026-05-18",
            dateModified: "2026-05-18",
            url: "https://waterfilterplatform.nl/onderhoud/kokend-water-kraan-onderhoud",
            publisher: {
              "@type": "Organization",
              name: "WaterfilterPlatform",
              url: "https://waterfilterplatform.nl",
            },
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/onderhoud" className="hover:underline">Onderhoud</Link>
            <span className="mx-2">/</span>
            <span>Kokend water kraan onderhoud</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan onderhoud: filter wisselen, ontkalken en lekkage
          </h1>
          <QuickAnswer answer="Een kokend water kraan heeft jaarlijks onderhoud nodig: filterwissel (1x per jaar of per 500-1.000 liter), tankreiniging/ontkalken (1-2x per jaar in harde gebieden), en controle van aansluitingen. Verwaarlozing leidt tot kalkaanslag, smaakproblemen en verkorte levensduur van de boiler." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="algemeen" />

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Waarom is regelmatig onderhoud zo belangrijk?
        </h2>
        <p className="text-gray-700 mb-4">
          Een kokend water kraan verhit water tot 100 °C in een geïsoleerde boilertank die continu
          onder druk staat. Kalkaanslag is de grootste vijand van dit systeem: bij iedere
          verwarmingscyclus slaat het calcium en magnesium uit het leidingwater neer op de
          verwarmingsspiraal en de binnenwand van de tank. In harde watergebieden zoals de Randstad,
          Noord-Brabant of Limburg kan dit proces binnen een jaar leiden tot merkbare
          prestatieverlies.
        </p>
        <p className="text-gray-700 mb-4">
          Kalkaanslag heeft meerdere negatieve effecten: de verwarmingstijd neemt toe (hogere
          energiekosten), het debiet vermindert, de smaak van het water verslechtert en de levensduur
          van de boiler verkort aanzienlijk. Een dikke kalklaag fungeert als isolator, waardoor de
          verwarmingsspiraal overbelast raakt. Regelmatig ontkalken en het filter tijdig vervangen
          zijn de twee eenvoudigste manieren om dit te voorkomen.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Onderhoudsschema per kwartaal
        </h2>
        <p className="text-gray-700 mb-4">
          Een gestructureerd onderhoudsschema zorgt ervoor dat geen taak over het hoofd wordt gezien.
          Hieronder een overzicht van alle onderhoudsactiviteiten, geordend per frequentie.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Frequentie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Onderhoudstaak</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Tijdsduur</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Geschatte kosten</th>
                <th className="border border-gray-300 px-3 py-2 text-left">DIY of loodgieter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Maandelijks</td>
                <td className="border border-gray-300 px-3 py-2">Visuele controle op lekkage aansluitingen</td>
                <td className="border border-gray-300 px-3 py-2">5 min</td>
                <td className="border border-gray-300 px-3 py-2">€ 0</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">DIY</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Per kwartaal</td>
                <td className="border border-gray-300 px-3 py-2">Controle waterdruk en debiet</td>
                <td className="border border-gray-300 px-3 py-2">10 min</td>
                <td className="border border-gray-300 px-3 py-2">€ 0</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">DIY</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Per kwartaal</td>
                <td className="border border-gray-300 px-3 py-2">Kraanbuitenkant reinigen (kalkvlekken)</td>
                <td className="border border-gray-300 px-3 py-2">10 min</td>
                <td className="border border-gray-300 px-3 py-2">€ 0–2</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">DIY</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Jaarlijks</td>
                <td className="border border-gray-300 px-3 py-2">Filter vervangen</td>
                <td className="border border-gray-300 px-3 py-2">15–30 min</td>
                <td className="border border-gray-300 px-3 py-2">€ 30–80</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">DIY mogelijk</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">1–2× per jaar (hard water)</td>
                <td className="border border-gray-300 px-3 py-2">Boilertank ontkalken</td>
                <td className="border border-gray-300 px-3 py-2">30–60 min</td>
                <td className="border border-gray-300 px-3 py-2">€ 5–20</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">DIY mogelijk</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Eens per 2–3 jaar</td>
                <td className="border border-gray-300 px-3 py-2">Professionele keuring en afdichting controle</td>
                <td className="border border-gray-300 px-3 py-2">30–60 min</td>
                <td className="border border-gray-300 px-3 py-2">€ 80–150</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">Loodgieter aanbevolen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Na 8–12 jaar</td>
                <td className="border border-gray-300 px-3 py-2">Boilervervanging</td>
                <td className="border border-gray-300 px-3 py-2">1–3 uur</td>
                <td className="border border-gray-300 px-3 py-2">€ 200–600</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Loodgieter verplicht</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Filter wisselen: stap-voor-stap
        </h2>
        <p className="text-gray-700 mb-4">
          Het filter van een kokend water kraan verwijdert chloor, sediment en andere stoffen uit
          het leidingwater voordat dit in de boiler wordt verhit. Een uitgeput filter laat deze
          stoffen door, wat leidt tot smaakproblemen en extra kalkafzetting in de tank. De meeste
          filters zijn eenvoudig te wisselen zonder gereedschap.
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2 pl-2">
          <li>
            <strong>Watertoevoer afsluiten:</strong> sluit de afsluitkraan onder het aanrecht
            (koude watertoevoer naar het systeem). Bij sommige systemen is er een aparte
            afsluitkraan op de koudwaterleiding naar de boiler.
          </li>
          <li>
            <strong>Druk aflaten:</strong> open de kokend-water-kraan en laat het resterende
            water uitstromen totdat het systeem drukvrij is. Dit kan een minuut duren.
          </li>
          <li>
            <strong>Filter losdraaien:</strong> afhankelijk van het merk draait u de
            filterbehuizing linksom los (Quooker, Grohe, Franke) of klikt u de cartridge
            direct uit de houder. Houd een handdoek gereed — er kan een kleine hoeveelheid
            water uitkomen.
          </li>
          <li>
            <strong>Nieuw filter plaatsen:</strong> verwijder de verpakking van het nieuwe filter,
            controleer de O-ring en druk of draai het nieuwe filter op zijn plaats.
          </li>
          <li>
            <strong>Watertoevoer openen:</strong> open de afsluitkraan langzaam. Controleer
            onmiddellijk op lekkage bij de filteraansluiting.
          </li>
          <li>
            <strong>Doorspoelen:</strong> laat het systeem 3-5 minuten doorstromen via de
            gewone koudwaterfunctie (niet het kokend watergedeelte) om losse koolstofdeeltjes
            en lucht te verwijderen. Gooi dit eerste water weg.
          </li>
          <li>
            <strong>Datum noteren:</strong> schrijf de vervangingsdatum op het nieuwe filter of
            stel een herinnering in voor over 12 maanden.
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Boilertank ontkalken met citroenzuur
        </h2>
        <p className="text-gray-700 mb-4">
          Ontkalken is effectiever dan repareren na de schade. Gebruik bij voorkeur
          voedselveilig citroenzuurpoeder (niet azijn, want dat kan rubberen afdichtingen
          aantasten) of de door de fabrikant aanbevolen ontkalktabletten. Citroenzuur is
          milieuvriendelijk, effectief tegen kalkafzetting en veilig voor de leidingen.
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2 pl-2">
          <li>
            Zet het systeem uit en laat het afkoelen tot kamertemperatuur (minimaal 30 minuten
            na het laatste gebruik).
          </li>
          <li>
            Los 30-50 gram citroenzuurpoeder op in 1 liter lauwwarm water. Dit is de
            ontkalkingsoplossing.
          </li>
          <li>
            Sluit de normale watertoevoer af. Vul de tank via de onderhoudsingang of door de
            toevoerslang te ontkoppelen en de oplossing direct in te gieten (raadpleeg de
            handleiding voor de juiste methode bij uw model).
          </li>
          <li>
            Laat de citroenzuuroplossing 20-30 minuten inwerken. Voor ernstige kalkaanslag
            kunt u dit verlengen tot 60 minuten.
          </li>
          <li>
            Sluit de toevoer opnieuw aan en spoel de tank met minimaal 3 tankinhouden schoon
            leidingwater door. Laat het water weglopen via de afvoerfunctie of de kraan.
          </li>
          <li>
            Controleer of het water neutraal smaakt (geen zure citroenachtige nasmaak meer)
            voordat u het systeem weer in gebruik neemt.
          </li>
        </ol>
        <p className="text-gray-700 mb-4">
          In zachte watergebieden (onder 10 °dH, zoals Groningen, Friesland en Drenthe) is
          ontkalken slechts eens per 2-3 jaar nodig. In harde watergebieden (boven 20 °dH)
          is twee keer per jaar ontkalken aan te raden.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Storing diagnostiek: veelvoorkomende problemen oplossen
        </h2>
        <p className="text-gray-700 mb-4">
          Veel storingen aan een kokend water kraan zijn op te lossen zonder een monteur.
          Hieronder de meest voorkomende problemen met mogelijke oorzaken en oplossingen.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Symptoom</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Mogelijke oorzaak</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Oplossing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Te laag debiet of waterdruk</td>
                <td className="border border-gray-300 px-3 py-2">Verstopt filter of kalkaanslag in leidingen</td>
                <td className="border border-gray-300 px-3 py-2">Filter vervangen, tank ontkalken</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Smaakverslechtering of chloorlucht</td>
                <td className="border border-gray-300 px-3 py-2">Uitgeput koolstoffilter</td>
                <td className="border border-gray-300 px-3 py-2">Filter onmiddellijk vervangen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Lekkage bij aansluiting onder aanrecht</td>
                <td className="border border-gray-300 px-3 py-2">Slijtage O-ring of losgeraakte koppeling</td>
                <td className="border border-gray-300 px-3 py-2">O-ring vervangen, koppeling aandraaien</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Geen heet of kokend water</td>
                <td className="border border-gray-300 px-3 py-2">Beveiligingsvergrendeling actief, stroomstoring of defecte thermostaat</td>
                <td className="border border-gray-300 px-3 py-2">Vergrendeling opheffen, stekker controleren; anders monteur</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Water kookt niet volledig (onder 95 °C)</td>
                <td className="border border-gray-300 px-3 py-2">Dikke kalklaag op verwarmingsspiraal</td>
                <td className="border border-gray-300 px-3 py-2">Grondig ontkalken; bij aanhoudend probleem monteur</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Ruis of bonkend geluid</td>
                <td className="border border-gray-300 px-3 py-2">Kalkaanslag die losbreekt, of lucht in leidingen</td>
                <td className="border border-gray-300 px-3 py-2">Ontkalken en luchten van leidingen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Verband tussen waterhardheid en onderhoudsfrequentie
        </h2>
        <p className="text-gray-700 mb-4">
          De waterhardheid in uw gemeente bepaalt in grote mate hoe vaak u moet ontkalken.
          Hoe harder het water, hoe meer calcium en magnesium bij elke verhittingscyclus
          achterblijft als kalk. In zachte watergebieden (Groningen, Friesland: 5-10 °dH)
          is het systeem nauwelijks gevoelig voor kalkaanslag. In zeer harde gebieden
          (Limburg, Zeeland: 25-35 °dH) kan zelfs een semi-jaarlijkse ontkalkingsbeurt
          onvoldoende zijn.
        </p>
        <p className="text-gray-700 mb-4">
          Overweeg in harde watergebieden een waterontharder of een anti-kalk inline filter
          te plaatsen vóór de kokend water kraan. Dit verlaagt de onderhoudsfrequentie
          aanzienlijk en verlengt de levensduur van de boiler. Sommige fabrikanten leveren
          specifieke ontkalkcartridges voor gebruik in combinatie met hun systeem.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Wanneer heeft u een professional nodig?
        </h2>
        <p className="text-gray-700 mb-4">
          De meeste onderhoudswerkzaamheden zijn uitstekend door een doe-het-zelver uit te
          voeren. Er zijn echter situaties waarbij een erkend installateur of loodgieter
          noodzakelijk is:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 pl-2">
          <li>
            <strong>Elektrische storingen:</strong> een defecte thermostaat, beveiligingsrelais
            of verwarmingsspiraal vereist een gekwalificeerde monteur. Werk nooit zelf aan de
            elektrische componenten van een kokend water systeem.
          </li>
          <li>
            <strong>Boilervervanging:</strong> de boiler vervangen vereist het ontkoppelen van
            zowel water- als elektrische aansluitingen en is doorgaans aansluitingsspecifiek.
          </li>
          <li>
            <strong>Lekkage aan vaste leidingen:</strong> als de lekkage niet bij een koppeling
            of O-ring zit maar aan de vaste waterleiding, is een loodgieter vereist.
          </li>
          <li>
            <strong>Garantiewerk:</strong> sommige fabrikanten (waaronder Quooker) schrijven
            voor dat onderhoud door erkende dealers moet worden uitgevoerd om garantie te
            behouden.
          </li>
        </ul>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="mt-8 border-t border-gray-100 pt-6">
          <h2 className="text-lg font-semibold text-[#003F5C] mb-3">Verwante pagina&apos;s</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Onderhoud overzicht", href: "/onderhoud" },
              { label: "Kokend water kraan uitleg", href: "/kokend-water-kraan" },
              { label: "4-in-1 kokend water kraan", href: "/kokend-water-kraan/4-in-1" },
              { label: "Kokend water kraan merken vergelijken", href: "/vergelijken/kokend-water-kraan-merken" },
              { label: "Waterhardheid behandelingsadvies", href: "/waterhardheid/behandelingsadvies" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm bg-[#E0F2FE] text-[#005F8A] px-3 py-1.5 rounded-lg hover:bg-[#005F8A] hover:text-white transition-colors"
              >
                {l.label} &rarr;
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-8">
          <CTABanner context="osmose" />
        </div>
      </div>
    </>
  );
}
