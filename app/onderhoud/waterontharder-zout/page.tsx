import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterontharder zout: soorten, verbruik en wanneer bijvullen",
  description:
    "Welk zout voor waterontharder? Tabletzout vs blokzout vs kristalzout, verbruik per maand, wanneer bijvullen en wat brugvorming is.",
  alternates: { canonical: "https://waterfilterplatform.nl/onderhoud/waterontharder-zout" },
  openGraph: {
    title: "Waterontharder zout: soorten, verbruik en wanneer bijvullen",
    description:
      "Welk zout voor waterontharder? Tabletzout vs blokzout vs kristalzout, verbruik per maand, wanneer bijvullen en wat brugvorming is.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Welk zout mag ik absoluut niet gebruiken in mijn waterontharder?",
    answer:
      "Gebruik nooit keukenzout, zeezout, strooizout of industriezout. Deze bevatten verontreinigingen zoals jodium, anticakeringsmiddelen en vuildeeltjes die de harskorrels beschadigen en de klep kunnen verstoppen. Gebruik uitsluitend regeneratiezout dat voldoet aan de IEC 60734-norm, herkenbaar aan de aanduiding 'geschikt voor waterontharders'.",
  },
  {
    question: "Hoe meet ik het zoutverbruik van mijn waterontharder?",
    answer:
      "Noteer het zoutniveau bij het bijvullen (bijv. in kg) en weer na een maand. Het verschil is uw maandverbruik. U kunt ook de regeneratiefrequentie vermenigvuldigen met de zoutdosis per regeneratie (staat in de handleiding). Bij een gemiddeld gezin van 4 personen in een gebied met 20 °dH is het verbruik doorgaans 6-8 kg per maand.",
  },
  {
    question: "Wat als mijn waterontharder geen zout verbruikt?",
    answer:
      "Als het zoutniveau niet daalt, regenereert het systeem niet of onvoldoende. Mogelijke oorzaken: brugvorming (zoutbrug) bovenin de tank, een verstopte brinelijdig, een defecte tijdklok of regenarationbesturing, of een volledig verzadigde hars. Controleer eerst op brugvorming door met een stok voorzichtig in het zout te steken. Is er geen brug, laat dan een onderhoudsmonteur de regenarationklep controleren.",
  },
  {
    question: "Is zacht water van een waterontharder gezond om te drinken?",
    answer:
      "Ontharderd water bevat meer natrium (Na+) dan onbehandeld leidingwater, als gevolg van het ionenwisselingsproces. In harde gebieden (>20 °dH) kan het natriumgehalte 100-200 mg/L bedragen. Dit is voor de meeste mensen geen probleem, maar personen met een natriumbeperkt dieet of hoge bloeddruk kunnen beter gefilterd water of een aparte koudwaterkraan zonder ontharder gebruiken. De WHO-richtlijn voor natrium in drinkwater is 200 mg/L.",
  },
  {
    question: "Kan ik zeezout of keukenzout gebruiken als regeneratiezout?",
    answer:
      "Nee. Zeezout en keukenzout zijn niet geschikt voor waterontharders. Ze bevatten mineralen, anticakeringsmiddelen (E535/E536) en andere verontreinigingen die de harskorrels kunnen vervuilen en de kleppen en leidingen van de ontharder kunnen beschadigen. Gebruik uitsluitend gecertificeerd regeneratiezout (IEC 60734) in tablet- of blokvorm.",
  },
];

export default function WaterontharderZoutPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfilterplatform.nl" },
              { "@type": "ListItem", position: 2, name: "Onderhoud", item: "https://waterfilterplatform.nl/onderhoud" },
              { "@type": "ListItem", position: 3, name: "Waterontharder zout", item: "https://waterfilterplatform.nl/onderhoud/waterontharder-zout" },
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
            headline: "Waterontharder zout: soorten, verbruik en wanneer bijvullen",
            description:
              "Welk zout voor waterontharder? Tabletzout vs blokzout vs kristalzout, verbruik per maand, wanneer bijvullen en wat brugvorming is.",
            datePublished: "2026-05-18",
            dateModified: "2026-05-18",
            url: "https://waterfilterplatform.nl/onderhoud/waterontharder-zout",
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
            <span>Waterontharder zout</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontharder zout: soorten, verbruik en wanneer bijvullen
          </h1>
          <QuickAnswer answer="Gebruik uitsluitend regeneratiezout (IEC 60734-norm) voor waterontharders — tabletzout of blokzout. Verbruik: 3-10 kg per maand afhankelijk van hardheid en waterverbruik. Vul bij als het zoutniveau onder 1/3 van de tank zakt. Goedkoop tabletzout (0,20-0,30 €/kg) werkt even goed als merkzout." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="algemeen" />

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Soorten regeneratiezout: wat zijn de verschillen?
        </h2>
        <p className="text-gray-700 mb-4">
          Niet elk zout is geschikt voor een waterontharder. De enige goede keuze is regeneratiezout
          dat voldoet aan de Europese norm IEC 60734. Dit zout heeft een NaCl-zuiverheid van minimaal
          99,5% en bevat geen verontreinigingen die de hars of het ventielsysteem kunnen beschadigen.
          Binnen het regeneratiezout zijn er drie gangbare vormen, elk met eigen eigenschappen.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Type zout</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Prijs/kg</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Brugvorming-risico</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Oplostijd</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Geschiktheid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Tabletzout</td>
                <td className="border border-gray-300 px-3 py-2">€ 0,20–0,35</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">Gemiddeld</td>
                <td className="border border-gray-300 px-3 py-2">Gemiddeld</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Universeel</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Blokzout</td>
                <td className="border border-gray-300 px-3 py-2">€ 0,25–0,45</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Laag</td>
                <td className="border border-gray-300 px-3 py-2">Langzaam</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Meeste merken</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Kristalzout</td>
                <td className="border border-gray-300 px-3 py-2">€ 0,15–0,25</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Hoog</td>
                <td className="border border-gray-300 px-3 py-2">Snel</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">Alleen grote tanks</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-4">
          <strong>Tabletzout</strong> is de meest populaire keuze voor huishoudelijke waterontharders.
          De geperste tabletten lossen gelijkmatig op en geven een stabiele brineconcentratie. De
          meeste fabrikanten raden tabletzout aan als standaardoptie.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Blokzout</strong> (ook wel briketten of zoutblokken) heeft een zeer lage kans op
          brugvorming doordat de grote blokken minder snel samenklonteren. Het is iets duurder maar
          kan de onderhoudsfrequentie voor brugvorming reduceren. Controleer of uw ontharder blokzout
          ondersteunt — kleinere modellen hebben soms een opening die te smal is.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Kristalzout</strong> (los zout in granulaatvorm) heeft de laagste aanschafprijs maar
          het hoogste risico op brugvorming. Kleine korrels klonteren makkelijker samen bij vochtige
          omstandigheden. Kristalzout is alleen geschikt voor grotere installaties met ruime zoutbakken
          en hogere omloopsnelheid.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Zoutverbruik berekenen: hoeveel zout heeft uw ontharder nodig?
        </h2>
        <p className="text-gray-700 mb-4">
          Het zoutverbruik van een waterontharder hangt af van drie factoren: de hardheid van het
          leidingwater, het dagelijkse waterverbruik en de efficiëntie van de regeneratiecyclus.
          Een rekenvoorbeeld voor een gezin van vier personen:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 pl-2">
          <li>Dagverbruik: 4 personen × 120 liter = 480 liter per dag</li>
          <li>Waterhardheid: 20 °dH (harde regio, bijv. Randstad)</li>
          <li>Zoutdosis per regeneratie: gemiddeld 150-200 gram NaCl per liter harsvolume</li>
          <li>Regeneratiefrequentie: afhankelijk van harscapaciteit en verbruik</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Als vuistregel kunt u rekenen met <strong>0,5 tot 1 kg zout per persoon per week</strong>
          bij gemiddeld hard water (15-20 °dH). In zeer harde gebieden (boven 25 °dH, zoals delen van
          Noord-Brabant en Limburg) kan dit oplopen tot 1,5 kg per persoon per week.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Waterhardheid</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Regio (voorbeeld)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Zout per persoon/week</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Gezin van 4/maand</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">8–12 °dH (zacht)</td>
                <td className="border border-gray-300 px-3 py-2">Groningen, Friesland</td>
                <td className="border border-gray-300 px-3 py-2">0,3–0,5 kg</td>
                <td className="border border-gray-300 px-3 py-2">ca. 5–8 kg</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">15–20 °dH (matig hard)</td>
                <td className="border border-gray-300 px-3 py-2">Randstad, Utrecht</td>
                <td className="border border-gray-300 px-3 py-2">0,5–1,0 kg</td>
                <td className="border border-gray-300 px-3 py-2">ca. 8–16 kg</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">20–30 °dH (hard)</td>
                <td className="border border-gray-300 px-3 py-2">Brabant, Limburg</td>
                <td className="border border-gray-300 px-3 py-2">1,0–1,5 kg</td>
                <td className="border border-gray-300 px-3 py-2">ca. 16–24 kg</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Wanneer zout bijvullen: het vulschema
        </h2>
        <p className="text-gray-700 mb-4">
          De meeste waterontharders geven een signaal wanneer het zout bijgevuld moet worden, via een
          indicator-LED, display of akoestisch alarm. Toch is het verstandig om ook visueel te
          controleren. Til het deksel van de zouttank op en kijk naar het niveau.
        </p>
        <p className="text-gray-700 mb-4">
          De vuistregel is: <strong>vul bij als het zoutniveau onder de 1/3-markering van de tank
          zakt.</strong> Wacht nooit tot de tank leeg is. Een lege zouttank betekent dat de ontharder
          niet kan regenereren en dat ongezacht, hard water door het systeem stroomt. Dit leidt tot
          kalkafzetting in leidingen en apparaten.
        </p>
        <p className="text-gray-700 mb-4">
          Vul de tank ook niet te vol. Een te hoog zoutniveau verhoogt het risico op brugvorming —
          de korst van samengekit zout die de normale watertoevoer naar de hars blokkeert. Houd het
          niveau tussen de 1/3 en 2/3 van de tank als praktische richtlijn.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Brugvorming: oorzaak, herkenning en preventie
        </h2>
        <p className="text-gray-700 mb-4">
          Brugvorming (ook wel zoutbrug of salt bridge) is een veelvoorkomend probleem bij
          waterontharders. Er vormt zich een harde koek van samengekit zout bovenin de zouttank,
          terwijl er daaronder een holte ontstaat. De ontharder lijkt zout te bevatten, maar de
          hars komt niet in contact met de brine-oplossing — waardoor de regeneratie mislukt.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Oorzaken van brugvorming:</strong>
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 pl-2">
          <li>Hoge luchtvochtigheid in de ruimte waar de ontharder staat</li>
          <li>Gebruik van fijngranulaat of kristalzout (hogere aaneenklontering)</li>
          <li>Te vol bijvullen (zout zit te dicht opeengepakt)</li>
          <li>Lang stilstand van het systeem (vakantie)</li>
        </ul>
        <p className="text-gray-700 mb-4">
          <strong>Herkenning:</strong> het zoutniveau lijkt niet te dalen ondanks actief gebruik,
          of de ontharder geeft een lage-zout-alarm terwijl er zout zichtbaar is. Stoot met een
          lange stok of bezem voorzichtig in het midden van de zouttank — als er een hol geluid
          klinkt of de stok wegzakt, is er een brug.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Oplossing:</strong> verwijder de brug door voorzichtig met een stok te roeren en
          de samengekit zoutmassa los te breken. Giet indien nodig warm water over de brug om het
          zout op te lossen. Preventief: gebruik blokzout in plaats van kristalzout, en controleer
          de zouttank elke drie maanden visueel.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Zoutloze alternatieven: TAC en elektronische ontkalkers
        </h2>
        <p className="text-gray-700 mb-4">
          Wie geen zout wil gebruiken, of in een regio woont waar waterontharders zijn beperkt
          (zoals bepaalde drinkwaterbeschermingsgebieden), kan uitwijken naar zoutloze
          ontkalkingsoplossingen.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Template Assisted Crystallization (TAC)</strong> is een zoutloos systeem dat kalk
          niet verwijdert maar omzet in kleine kristallen die niet aan oppervlakken hechten. TAC
          vereist geen zout, geen regeneratie en geen afvoer. Het verlaagt het waterverbruik en heeft
          nauwelijks onderhoudskosten. Nadeel: het verwijdert de hardheid niet — TDS en geleiding
          blijven hoog — maar kalkvorming op leidingen en apparaten wordt sterk verminderd.
        </p>
        <p className="text-gray-700 mb-4">
          Elektronische ontkalkers (magneetontkalkers) maken wisselende claims over effectiviteit.
          Onafhankelijk wetenschappelijk bewijs voor hun werking is beperkt. Ze zijn geen
          vervanging voor een gecertificeerde ionenwisselaarinstallatie bij hoge waterhardheid.
        </p>

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
              { label: "Waterontharder uitleg", href: "/waterontharder" },
              { label: "Waterhardheid per gemeente", href: "/waterhardheid" },
              { label: "Ionenwisseling techniek", href: "/filtertechnieken/ionenwisseling" },
              { label: "Waterontharder vergelijken", href: "/vergelijken/waterontharder-vergelijken" },
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
