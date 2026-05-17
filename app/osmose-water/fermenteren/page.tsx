import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Osmosewater voor fermenteren: bier, kombucha en kimchi",
  description:
    "Osmosewater voor fermenteren: geen chloor, lage TDS, volledige controle. Ideaal voor bier brouwen, kombucha, kimchi en zuurdesem. Mineralen toevoegen.",
  alternates: { canonical: "https://waterfilterplatform.nl/osmose-water/fermenteren" },
  openGraph: {
    title: "Osmosewater voor fermenteren: bier, kombucha en kimchi",
    description:
      "Osmosewater voor fermenteren: geen chloor, lage TDS, volledige controle. Ideaal voor bier brouwen, kombucha, kimchi en zuurdesem. Mineralen toevoegen.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Waarom is chloor in leidingwater slecht voor fermenteren?",
    answer:
      "Chloor en chloramine zijn toegevoegd aan leidingwater om bacteriegroei te remmen. Dit werkt ook tegen de nuttige micro-organismen die u nodig heeft bij fermentatie: gisten, melkzuurbacterien en azijnzuurbacterien. Bij bier leidt chloor tot chloorfenolen die een medicijnachtige geur geven. Bij kombucha en zuurkool vertraagt of stopt de fermentatie. Osmosewater bevat geen chloor en lost dit probleem volledig op.",
  },
  {
    question: "Moet ik mineralen toevoegen aan osmosewater voor bier brouwen?",
    answer:
      "Ja, voor bier brouwen is het aan te raden om mineralen toe te voegen aan osmosewater. Water is 90-95% van bier en mineralen beinvloeden de smaak direct. Voeg calcium (50-150 mg/L als CaSO4 of CaCl2) toe als basis. Voor een Pilsner-profiel blijft u bij laag mineraalgehalte. Voor een Burton-stijl IPA voegt u 400-600 mg/L sulfaat toe. Gebruik een waterprofielcalculator of brouwwater-app om de juiste hoeveelheden te bepalen.",
  },
  {
    question: "Is osmosewater goed voor kombucha?",
    answer:
      "Osmosewater is uitstekend voor kombucha. De SCOBY (symbiotic culture of bacteria and yeast) gedijt beter in water zonder chloor of chloramine. De SCOBY produceert meer regelmatige acidificatie en een betere smaak. Voeg een kleine hoeveelheid calcium en magnesium toe (20-40 mg/L) om de SCOBY van essentiele mineralen te voorzien. Dit kan met een mespuntje calciumsulfaat of via een klein deel remineralisatiedrop.",
  },
  {
    question: "Heb ik osmosewater nodig voor kimchi en zuurkool?",
    answer:
      "Voor kimchi en zuurkool is osmosewater een duidelijke verbetering ten opzichte van leidingwater, maar minder kritiek dan voor bier. Het zout dat u toevoegt levert al de meeste mineralen die melkzuurbacterien nodig hebben. Het grootste voordeel van osmosewater is het ontbreken van chloor, dat de fermentatiesnelheid kan remmen. Een praktisch alternatief is leidingwater 24 uur open laten staan zodat chloor verdampt.",
  },
  {
    question: "Kan ik osmosewater gebruiken voor zuurdesem?",
    answer:
      "Ja, osmosewater geeft betere resultaten bij zuurdesem. Wilde gisten en lactobacillen in zuurdesemstarters zijn gevoelig voor chloor en chloramine. Met osmosewater krijgt u een actiever en meer betrouwbaar deeg. Het alternatief is leidingwater 30-60 minuten laten staan of even laten koken om chloor te laten verdampen. Chloramine (in sommige gemeentes) verdampt echter niet en vereist osmosefiltratie.",
  },
  {
    question: "Wat zijn de beste waterprofielen voor bier brouwen met osmosewater?",
    answer:
      "De klassieke waterprofielen: Pilsner (Plzen): TDS 50 mg/L, calcium 10 mg/L, sulfaat 5 mg/L, chloride 5 mg/L. Weissbier (Munchen): calcium 80 mg/L, magnesium 20 mg/L, bicarbonaat 150 mg/L. Burton IPA: calcium 300 mg/L, sulfaat 500 mg/L, chloride 30 mg/L. U bouwt elk profiel op vanuit osmosewater door de juiste zouten toe te voegen met een brouwwater-app.",
  },
  {
    question: "Hoeveel mineralen moet ik toevoegen aan osmosewater voor kombucha?",
    answer:
      "Voor kombucha is een licht mineralenprofiel voldoende. Voeg toe per liter: 0,1 g calciumsulfaat (geeft circa 30 mg/L calcium) en 0,05 g magnesiumsulfaat (geeft circa 10 mg/L magnesium). Dit geeft de SCOBY voldoende mineralen zonder de karakteristieke lichte en frisse smaak van kombucha te overheersen. Gebruik nooit natriumhoudende zouten in grotere hoeveelheden bij kombucha.",
  },
  {
    question: "Is osmosewater ook geschikt voor het maken van wijn?",
    answer:
      "Osmosewater kan worden gebruikt voor het verdunnen van druivenmost als het suikergehalte te hoog is, of voor het aanmaken van voedingsoplossingen voor wijngist. Voor wijn is het echter minder gebruikelijk dan voor bier: druivensap brengt zelf al de benodigde mineralen en suikers mee. Bij thuisfermentatie van wijn is osmosewater met toegevoegde gistvoeding een goede basis.",
  },
];

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfilterplatform.nl" },
    { "@type": "ListItem", position: 2, name: "Osmose water", item: "https://waterfilterplatform.nl/osmose-water" },
    { "@type": "ListItem", position: 3, name: "Fermenteren", item: "https://waterfilterplatform.nl/osmose-water/fermenteren" },
  ],
};

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
  headline: "Osmosewater voor fermenteren: bier, kombucha, kimchi en zuurdesem",
  description:
    "Osmosewater voor fermenteren: geen chloor, lage TDS, volledige controle. Ideaal voor bier brouwen, kombucha, kimchi en zuurdesem. Mineralen toevoegen.",
  datePublished: "2026-05-01",
  dateModified: "2026-05-01",
  url: "https://waterfilterplatform.nl/osmose-water/fermenteren",
  publisher: {
    "@type": "Organization",
    name: "WaterfilterPlatform",
    url: "https://waterfilterplatform.nl",
  },
};

export default function FermenterenPage() {
  return (
    <>
      <SchemaOrg schema={[breadcrumbSchema, faqSchema, articleSchema]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/osmose-water" className="hover:underline">Osmose water</Link>
            <span className="mx-2">/</span>
            <span>Fermenteren</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmosewater voor fermenteren: bier, kombucha, kimchi en zuurdesem
          </h1>
          <QuickAnswer answer="Osmosewater is uitstekend voor fermenteren omdat het geen chloor, chloramine of andere fermentatieremmers bevat. De lage TDS (5-30 mg/L) geeft volledige controle over mineraalgehaltes. Voor bier en kombucha voegt u specifieke mineralen toe op basis van het gewenste waterprofiel." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-10 mb-4">
          Waarom water cruciaal is bij fermenteren
        </h2>
        <p className="text-gray-700 mb-4">
          Bij fermentatie zijn micro-organismen de motor: gisten, melkzuurbacterien, azijnzuurbacterien en wilde gisten zetten suikers om in alcohol, zuren en koolzuurgas. Deze micro-organismen zijn gevoelig voor de chemische samenstelling van het water dat u gebruikt. De pH-buffers, mineraalgehaltes en de aanwezigheid van desinfectiemiddelen beinvloeden direct hoe actief en gezond uw fermentaat wordt.
        </p>
        <p className="text-gray-700 mb-6">
          Water is bij bier goed voor 90-95% van het eindproduct. Bij kombucha, kefir en zuurdesem is water de hoofdcomponent van het medium waarin de cultuur leeft. Een slechte waterkwaliteit leidt tot trage fermentaties, off-flavors en inconsistente resultaten.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Problemen met leidingwater voor fermenteren
        </h2>
        <div className="space-y-3 mb-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-1">Chloor en chloramine</h3>
            <p className="text-gray-700">
              Chloor wordt toegevoegd aan leidingwater als desinfectiemiddel en doodt ook de gisten en melkzuurbacterien die u nodig heeft voor fermentatie. Chloramine (in sommige gemeentes gebruikt in plaats van chloor) is nog hardnekkiger: het verdampt niet bij het laten staan van water en reageert met fenolverbindingen in mout om chloorfenolen te vormen, die een medicijnachtige of plastiekachtige smaak geven aan bier.
            </p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-800 mb-1">Variabele TDS</h3>
            <p className="text-gray-700">
              Leidingwater in Nederland heeft een TDS van 100-400 mg/L, maar deze waarde varieert per regio en zelfs per seizoen. Dit maakt herhaalbare resultaten moeilijk: uw kombucha in de winter smaakt anders dan in de zomer, uw bier varieert per batch. Met osmosewater als basis (TDS 5-30 mg/L) heeft u een constante startpositie en kunt u exact hetzelfde waterprofiel recreeren.
            </p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-800 mb-1">Hoge hardheid beinvloedt pH-buffers</h3>
            <p className="text-gray-700">
              Bicarbonaten (verantwoordelijk voor waterhardheid) bufferen de pH omhoog. Bij het maischen van bier is de ideale pH 5,2-5,5; hard leidingwater kan de pH naar 5,8-6,2 duwen. Dit vermindert de enzymatische activiteit en geeft een minder efficiënte suikeromzetting. Osmosewater heeft geen bicarbonaten, zodat u de mash-pH precies kunt sturen.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bier brouwen met osmosewater
        </h2>
        <p className="text-gray-700 mb-4">
          Water is de meest overvloedige grondstof in bier. De historische brouwerssteden kozen hun locatie vanwege het lokale water: Pilsen (Tsjechie) voor zijn zachte, lage-TDS water dat de delicate hopbitterheid van een Bohemian Pilsner benadrukt; Burton-on-Trent (Engeland) voor zijn sulfaatrijke water dat de droge bitterheid van pale ales versterkt. Met osmosewater kunt u elk historisch waterprofiel nabootsen.
        </p>

        <h3 className="text-lg font-semibold text-[#003F5C] mt-6 mb-3">Klassieke waterprofielen voor bier</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Profiel</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Bierstijl</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Calcium</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Sulfaat</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Chloride</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">Pilsner (Plzen)</td>
                <td className="border border-gray-200 px-4 py-2">Bohemian Pilsner, Helles</td>
                <td className="border border-gray-200 px-4 py-2">7 mg/L</td>
                <td className="border border-gray-200 px-4 py-2">5 mg/L</td>
                <td className="border border-gray-200 px-4 py-2">5 mg/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-medium">Munchen</td>
                <td className="border border-gray-200 px-4 py-2">Marzen, Weissbier, Dunkel</td>
                <td className="border border-gray-200 px-4 py-2">75 mg/L</td>
                <td className="border border-gray-200 px-4 py-2">10 mg/L</td>
                <td className="border border-gray-200 px-4 py-2">2 mg/L</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">Burton</td>
                <td className="border border-gray-200 px-4 py-2">Pale Ale, IPA, ESB</td>
                <td className="border border-gray-200 px-4 py-2">295 mg/L</td>
                <td className="border border-gray-200 px-4 py-2">725 mg/L</td>
                <td className="border border-gray-200 px-4 py-2">25 mg/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-medium">Dublin</td>
                <td className="border border-gray-200 px-4 py-2">Stout, Porter</td>
                <td className="border border-gray-200 px-4 py-2">120 mg/L</td>
                <td className="border border-gray-200 px-4 py-2">55 mg/L</td>
                <td className="border border-gray-200 px-4 py-2">20 mg/L</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-[#003F5C] mt-6 mb-3">Mineraalzouten voor bierwater</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>CaSO4 (gips):</strong> verhoogt calcium en sulfaat. Geeft droge, hopbittere smaak. Gebruikelijk voor pale ales en IPAs.</li>
          <li><strong>CaCl2 (calciumchloride):</strong> verhoogt calcium en chloride. Accentueert moutkarakter en body. Gebruikt voor maltse bieren.</li>
          <li><strong>MgSO4 (Epsom zout):</strong> verhoogt magnesium en sulfaat. Gebruik spaarzaam (max 30 mg/L Mg), anders bittere nasmaak.</li>
          <li><strong>NaHCO3 (baksoda):</strong> verhoogt bicarbonaat en pH. Bruikbaar voor donkere bieren met veel geroost mout die de pH verlagen.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Let op: osmosewater heeft nauwelijks buffercapaciteit. Voeg calcium toe (min 50 mg/L) voordat u de mash-pH aanpast, want calcium helpt de pH van nature te verlagen via fosfaatreacties met het mout.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kombucha met osmosewater
        </h2>
        <p className="text-gray-700 mb-4">
          Kombucha wordt gebrouwen door een SCOBY (symbiotic culture of bacteria and yeast) op gesuikerde thee. De SCOBY bestaat uit een samenwerking van gisten die suikers omzetten in alcohol en koolzuur, en bacterien (voornamelijk Acetobacter en Gluconobacter) die de alcohol verder omzetten in azijnzuur en andere zuren.
        </p>
        <p className="text-gray-700 mb-4">
          Chloor en chloramine zijn de voornaamste vijanden van een gezonde SCOBY. Met osmosewater:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Snellere fermentatie: de gisten en bacterien starten zonder remming</li>
          <li>Consistentere acidificatie: de pH-daling is gelijkmatiger</li>
          <li>Betere SCOBY-gezondheid: minder kans op beschimmeling en slijmig SCOBY-weefsel</li>
          <li>Reproduceerbare batches: elke keer hetzelfde startpunt</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voeg een kleine hoeveelheid mineralen toe: 0,1 g calciumsulfaat en 0,05 g magnesiumsulfaat per liter geeft calcium (circa 30 mg/L) en magnesium (circa 10 mg/L) die de SCOBY nodig heeft.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kimchi en zuurkool met osmosewater
        </h2>
        <p className="text-gray-700 mb-4">
          Kimchi en zuurkool zijn lacto-fermentaties: Lactobacillus-bacterien zetten suikers om in melkzuur, wat het voedsel conserveert en de karakteristieke zure smaak geeft. Het zout dat u toevoegt aan de groenten levert al voldoende mineralen voor de melkzuurbacterien.
        </p>
        <p className="text-gray-700 mb-4">
          Het voornaamste voordeel van osmosewater is opnieuw de afwezigheid van chloor. Praktische alternatieven zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Leidingwater 24 uur open laten staan (werkt voor chloor, niet voor chloramine)</li>
          <li>Leidingwater even aan de kook brengen (verwijdert chloor, niet chloramine)</li>
          <li>Osmosewater: volledig effectief voor zowel chloor als chloramine</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Zuurdesem met osmosewater
        </h2>
        <p className="text-gray-700 mb-6">
          Zuurdesemstarters bevatten wilde gisten (Saccharomyces cerevisiae en andere soorten) en lactobacillen. Deze zijn bijzonder gevoelig voor chloor en chloramine. Het gebruik van osmosewater of gefilterd water bij het bijvoeden van een zuurdesemstarter leidt tot een actiever deeg met een betere rijskracht. Bakers die overstappen op gefilterd water rapporteren consistent een verbetering van de rijsactiviteit.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijking: leidingwater vs koolfilter vs osmosewater voor fermenteren
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Watertype</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Chloor</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Chloramine</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">TDS controle</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Geschiktheid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">Leidingwater</td>
                <td className="border border-gray-200 px-4 py-2">Aanwezig</td>
                <td className="border border-gray-200 px-4 py-2">Mogelijk</td>
                <td className="border border-gray-200 px-4 py-2">Geen</td>
                <td className="border border-gray-200 px-4 py-2">Matig</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-medium">Koolblokfilter</td>
                <td className="border border-gray-200 px-4 py-2">Verwijderd</td>
                <td className="border border-gray-200 px-4 py-2">Gedeeltelijk</td>
                <td className="border border-gray-200 px-4 py-2">Beperkt</td>
                <td className="border border-gray-200 px-4 py-2">Goed</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">Osmosewater</td>
                <td className="border border-gray-200 px-4 py-2">Verwijderd</td>
                <td className="border border-gray-200 px-4 py-2">Verwijderd</td>
                <td className="border border-gray-200 px-4 py-2">Volledig</td>
                <td className="border border-gray-200 px-4 py-2">Uitstekend</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-8">
          <h3 className="font-semibold text-[#003F5C] mb-2">Interne links</h3>
          <ul className="space-y-1 text-[#005F8A]">
            <li><Link href="/osmose-water" className="hover:underline">Osmose water: eigenschappen en toepassingen</Link></li>
            <li><Link href="/omgekeerde-osmose/kopen" className="hover:underline">Osmosefilter kopen: vergelijking en advies</Link></li>
            <li><Link href="/osmose-water/koffie-espresso" className="hover:underline">Osmosewater voor koffie en espresso</Link></li>
          </ul>
        </div>

        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-6">Veelgestelde vragen</h2>
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
