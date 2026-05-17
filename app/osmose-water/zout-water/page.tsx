import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Osmosewater en zout koken: smaak, concentratie en pasta",
  description:
    "Osmosewater en zout koken: laag TDS geeft scherpere zoutsmaak, minder zout nodig. Effect op pasta, rijst en soep uitgelegd. Kookpunt nauwelijks beinvloed.",
  alternates: { canonical: "https://waterfilterplatform.nl/osmose-water/zout-water" },
  openGraph: {
    title: "Osmosewater en zout koken: smaak, concentratie en pasta",
    description:
      "Osmosewater en zout koken: laag TDS geeft scherpere zoutsmaak, minder zout nodig. Effect op pasta, rijst en soep uitgelegd. Kookpunt nauwelijks beinvloed.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Proef je meer zout als je kookt met osmosewater?",
    answer:
      "Ja. Osmosewater heeft een TDS van 5-30 mg/L, vergeleken met 200-400 mg/L voor leidingwater. Minder calcium en magnesium in het water zorgt ervoor dat de natriumchloride-smaak minder gemaskeerd wordt. Je ervaart dezelfde hoeveelheid zout als intenser.",
  },
  {
    question: "Hoeveel minder zout heb ik nodig bij osmosewater voor pasta?",
    answer:
      "Praktisch gezien kun je 10-20% minder zout gebruiken bij osmosewater en toch hetzelfde zoutgevoel bereiken. Dit is het directe effect van de lagere mineralenconcentratie die de zoutsmaak niet maskeert.",
  },
  {
    question: "Is het kookpunt anders bij osmosewater?",
    answer:
      "Nee, het verschil is verwaarloosbaar. Leidingwater met 300 mg/L TDS bevat circa 0,003 mol opgeloste stoffen per liter, wat het kookpunt met slechts 0,0015 graden Celsius verhoogt. Dit is praktisch niet meetbaar en heeft geen effect op kooktijden.",
  },
  {
    question: "Is osmosewater beter voor het koken van rijst?",
    answer:
      "Rijst neemt het kookwater op, waardoor de mineralenconcentratie doordringt in het eindproduct. Osmosewater geeft rijst een schonere, minder minerale smaak. Professionele sushi-koks gebruiken gefilterd of osmosewater voor een zuiverder smaakresultaat.",
  },
  {
    question: "Wat is het effect van osmosewater op soep en bouillon?",
    answer:
      "Osmosewater geeft een schonere smaakbasis voor soep en bouillon. Kruiden, groenten en vlees komen beter door omdat er geen concurrerende mineraalsmaak is. Een bouillonblokje smaakt iets intenser, waardoor je eventueel minder kunt gebruiken.",
  },
  {
    question: "Kan ik vlees bereiden met osmosewater?",
    answer:
      "Ja. Bij sous vide bereiding kan osmosewater als marinade-basis gebruikt worden voor een minimalistische smaakachtergrond. Het lage TDS zorgt dat de smaken van kruiden en marinades puurder overkomen, zonder de invloed van mineralen zoals calcium en magnesium.",
  },
  {
    question: "Is osmosewater veilig om mee te koken?",
    answer:
      "Ja, osmosewater is veilig om mee te koken. Het is juist erg zuiver water. Bij langdurig koken van pasta of rijst kan het echter zinvol zijn de kooktijd kort te houden, zodat mineralen uit de groenten of pasta niet onnodig uitlogen in het kookwater dat weggegoten wordt.",
  },
  {
    question: "Geeft osmosewater een andere textuur bij pasta?",
    answer:
      "De zetmeelafgifte van pasta is vergelijkbaar met leidingwater. Kooktijd is identiek bij 100 graden Celsius. Wel kan de pasta een fractie schoner van smaak zijn, wat sommige koks als voordeel ervaren bij delicate sauzen die de volle pastasmaak moeten laten spreken.",
  },
];

export default function OsmoseWaterZoutWaterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Osmose water", url: "https://waterfilterplatform.nl/osmose-water" },
          { name: "Zout water koken", url: "https://waterfilterplatform.nl/osmose-water/zout-water" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Osmosewater en zout koken: smaak, concentratie en pasta",
          description:
            "Osmosewater en zout koken: laag TDS geeft scherpere zoutsmaak, minder zout nodig. Effect op pasta, rijst en soep uitgelegd. Kookpunt nauwelijks beinvloed.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/osmose-water/zout-water",
        }}
      />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/osmose-water" className="hover:underline">Osmose water</Link>
            <span className="mx-2">/</span>
            <span>Zout water koken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmosewater en zout koken: smaakeffect en concentratie
          </h1>
          <QuickAnswer answer="Osmosewater (TDS 5-30 mg/L) heeft een scherpere zoutsmaak dan hard leidingwater omdat er minder mineralen zijn die de smaak maskeren. Voor pasta, rijst en soep geeft osmosewater + minder zout een vergelijkbaar resultaat. Het kookpunt wordt nauwelijks beinvloed door de lage mineralenconcentratie." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10 prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Smaakperceptie en TDS: de wetenschap</h2>
          <p className="text-gray-700 mb-4">
            TDS staat voor Total Dissolved Solids: de totale hoeveelheid opgeloste vaste stoffen in water,
            uitgedrukt in milligram per liter (mg/L). Gewoon leidingwater in Nederland heeft typisch een
            TDS van 200-400 mg/L. Osmosewater heeft na filtratie een TDS van slechts 5-30 mg/L.
          </p>
          <p className="text-gray-700 mb-4">
            Die mineralen in leidingwater zijn voor een groot deel calcium (Ca2+) en magnesium (Mg2+),
            de stoffen die water "hard" maken. Onderzoek naar smaakperceptie toont aan dat deze ionen
            een complexerende werking hebben op natriumchloride (keukenzout): ze verminderen de
            waargenomen zoutheid door te interageren met de smaakpapillen en de
            natriumchloride-concentratie deels te maskeren.
          </p>
          <p className="text-gray-700 mb-4">
            In osmosewater ontbreken deze maskers. Het resultaat: dezelfde hoeveelheid zout smaakt
            duidelijk intenser in osmosewater dan in hard leidingwater.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">
            Zoutperceptie: osmosewater versus hard leidingwater
          </h2>
          <p className="text-gray-700 mb-4">
            Het mechanisme is als volgt: calcium en magnesium-ionen in hard water concurreren met
            natriumionen om dezelfde receptoren op de tong. Dit fenomeen, bekend als ionantagonisme,
            verklaart waarom zout in zacht of osmosewater scherper aankomt.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="p-3 text-left">Watertype</th>
                  <th className="p-3 text-right">Typisch TDS (mg/L)</th>
                  <th className="p-3 text-right">Relatieve zoutsmaakintensiteit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Osmosewater</td>
                  <td className="p-3 text-right text-gray-700">5-30</td>
                  <td className="p-3 text-right text-gray-700">Hoog (min. maskering)</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3 text-gray-700">Zacht leidingwater</td>
                  <td className="p-3 text-right text-gray-700">50-150</td>
                  <td className="p-3 text-right text-gray-700">Gemiddeld</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Normaal leidingwater</td>
                  <td className="p-3 text-right text-gray-700">200-400</td>
                  <td className="p-3 text-right text-gray-700">Lager (meer maskering)</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3 text-gray-700">Hard leidingwater</td>
                  <td className="p-3 text-right text-gray-700">400-700</td>
                  <td className="p-3 text-right text-gray-700">Laagst (sterke maskering)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            Praktisch advies: bij overstap naar osmosewater voor koken, begin met 10-20% minder zout
            dan je normaal gebruikt. Pas aan op smaak. Zo voorkom je dat gerechten te zout worden.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">Pasta koken met osmosewater</h2>
          <p className="text-gray-700 mb-4">
            Pasta koken is de meest voorkomende toepassing waarbij zout en osmosewater samenkomen.
            Hieronder de belangrijkste kenmerken:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Zetmeelafgifte:</strong> vergelijkbaar met leidingwater. Osmosewater beinvloedt
              de zetmeelstructuur van pasta niet meetbaar.
            </li>
            <li>
              <strong>Smaak:</strong> de zoutsmaak van de pasta is iets scherper, wat positief uitpakt
              bij pasta met delicate sauzen die de volle pastasmaak moeten laten spreken.
            </li>
            <li>
              <strong>Kooktijd:</strong> identiek. Het kookpunt bij zeeniveau is 100 graden Celsius,
              en de TDS van osmosewater beinvloedt dat vrijwel niet.
            </li>
            <li>
              <strong>Advies zout:</strong> gebruik 10-20% minder zout dan normaal voor vergelijkbaar
              zoutgevoel.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">Rijst koken met osmosewater</h2>
          <p className="text-gray-700 mb-4">
            Rijst is een bijzonder geval: het graan absorbeert het kookwater volledig. Daardoor
            dringt ook de mineralenconcentratie (of het gebrek daaraan) door in het eindproduct.
          </p>
          <p className="text-gray-700 mb-4">
            Rijst gekookt in osmosewater heeft een schonere, minder minerale nasmaak. Dit is extra
            merkbaar bij witte rijst en zeker bij sushi-rijst. Niet voor niets gebruiken professionele
            sushi-koks gefilterd of osmosewater: de neutralere smaakbasis laat de subtiele smaak van
            de rijst zelf en de rijstazijn beter uitkomen.
          </p>
          <p className="text-gray-700 mb-4">
            Voor bruine rijst of volkoren varianten, waarbij de smaak robuuster is, is het verschil
            minder opvallend maar nog steeds aanwezig.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">Soep en bouillon met osmosewater</h2>
          <p className="text-gray-700 mb-4">
            Soep en bouillon profiteren het meest van osmosewater. De redenering is eenvoudig: soep
            is in essentie een extractie van smaken uit groenten, vlees en kruiden in water. Hoe
            neutraler het water, hoe puurder de extractie.
          </p>
          <p className="text-gray-700 mb-4">
            Calcium en magnesium in hard water kunnen de extractie van sommige polyfenolen en
            aromaten remmen. In osmosewater zijn er minder mineralen die de smaakextractie
            beinvloeden. Praktisch resultaat: groenten en kruiden komen intenser door.
          </p>
          <p className="text-gray-700 mb-4">
            Bij het gebruik van bouillonblokjes: door de scherpere zoutsmaak in osmosewater
            smaken bouillonblokjes intenser. Je kunt doorgaans iets minder gebruiken voor
            dezelfde bouillonsterkte.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">Kookpunt: de wiskunde</h2>
          <p className="text-gray-700 mb-4">
            Er bestaat een misverstand dat osmosewater een lager kookpunt heeft dan leidingwater.
            Kookpuntverhoging is een colligatief effect: het kookpunt stijgt met 0,512 graden Celsius
            per mol opgeloste stof per kilogram water (bij water als oplosmiddel).
          </p>
          <p className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-700 mb-4">
            Leidingwater 300 mg/L TDS &#8776; 0,003 mol/L &#8594; kookpuntstijging: 0,512 x 0,003 = <strong>0,0015 graden Celsius</strong> (volledig verwaarloosbaar)
          </p>
          <p className="text-gray-700 mb-4">
            Het verschil in kookpunt tussen osmosewater en leidingwater is dus minder dan 0,002 graden
            Celsius. Dit heeft geen enkel meetbaar effect op kooktijden of het kookproces.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">Vlees en vis: sous vide en osmosewater</h2>
          <p className="text-gray-700 mb-4">
            Bij sous vide bereiding, waarbij voedsel in vacuumzakken op lage temperatuur in een waterbad
            gegaard wordt, gebruiken professionele koks regelmatig osmosewater voor de waterbak.
            Osmosewater is agressiever als oplosmiddel (lager ionengehalte) en kan bij langdurig contact
            met vlees via de vacuumzak een iets andere textuur geven bij bepaalde bereidingen.
          </p>
          <p className="text-gray-700 mb-4">
            Als marinade-injectie voor grootschalige vleesproductie wordt osmosewater gebruikt voor een
            minimalistische smaakbasis: het injectiemengsel heeft dan precies de gewenste
            smaakcomponenten, zonder invloed van mineralen uit het water.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">Vergelijkingstabel: osmosewater versus leidingwater versus gedestilleerd</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="p-3 text-left">Toepassing</th>
                  <th className="p-3 text-center">Osmosewater</th>
                  <th className="p-3 text-center">Leidingwater</th>
                  <th className="p-3 text-center">Gedestilleerd</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Pasta koken</td>
                  <td className="p-3 text-center text-green-700">Goed (scherpere zoutsmaak)</td>
                  <td className="p-3 text-center text-gray-700">Goed (standaard)</td>
                  <td className="p-3 text-center text-gray-700">Goed (vergelijkbaar osmose)</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3 text-gray-700">Rijst koken</td>
                  <td className="p-3 text-center text-green-700">Uitstekend (schoner smaak)</td>
                  <td className="p-3 text-center text-gray-700">Goed</td>
                  <td className="p-3 text-center text-gray-700">Uitstekend</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Soep en bouillon</td>
                  <td className="p-3 text-center text-green-700">Uitstekend (pure smaken)</td>
                  <td className="p-3 text-center text-gray-700">Goed</td>
                  <td className="p-3 text-center text-gray-700">Uitstekend</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3 text-gray-700">Thee zetten</td>
                  <td className="p-3 text-center text-green-700">Uitstekend (helder infuus)</td>
                  <td className="p-3 text-center text-gray-700">Matig (kalk, smaak)</td>
                  <td className="p-3 text-center text-yellow-700">Matig (te vlak)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Dagelijks drinken</td>
                  <td className="p-3 text-center text-green-700">Goed (remineraliseer optioneel)</td>
                  <td className="p-3 text-center text-green-700">Uitstekend</td>
                  <td className="p-3 text-center text-yellow-700">Niet aanbevolen (geen mineralen)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">Conclusie</h2>
          <p className="text-gray-700 mb-4">
            Osmosewater (TDS 5-30 mg/L) geeft een scherpere zoutsmaak dan hard leidingwater door
            minder maskering van natriumchloride door calcium en magnesium. Voor pasta, rijst en soep
            geldt: gebruik 10-20% minder zout voor hetzelfde zoutgevoel. Het kookpunt verschilt
            praktisch niet. Rijst en sushi-bereiding profiteren het meest van osmosewater dankzij de
            schonere smaakbasis.
          </p>
          <p className="text-gray-700 mb-4">
            Meer weten over osmosewater in de keuken? Lees ons artikel over{" "}
            <Link href="/osmose-water/koken" className="text-[#005F8A] hover:underline">
              koken met osmosewater
            </Link>{" "}
            of bekijk hoe een{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline">
              omgekeerde osmosefilter
            </Link>{" "}
            werkt.
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
