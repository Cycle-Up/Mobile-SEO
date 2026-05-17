import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterhardheid thuis testen: teststrips, TDS-meter en labanalyse",
  description:
    "Waterhardheid thuis testen: teststrips 2-5 euro, TDS-meter 8-25 euro, labanalyse 25-60 euro. Nauwkeurigheid vergeleken. Gratis hardheidscheck via drinkwaterbedrijf.",
  alternates: { canonical: "https://waterfilterplatform.nl/waterfilter/hardheidstest" },
  openGraph: {
    title: "Waterhardheid thuis testen: teststrips, TDS-meter en labanalyse",
    description:
      "Waterhardheid thuis testen: teststrips 2-5 euro, TDS-meter 8-25 euro, labanalyse 25-60 euro. Nauwkeurigheid vergeleken.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Wat is de goedkoopste manier om waterhardheid te meten?",
    answer:
      "Teststrips zijn de goedkoopste optie: 2-10 euro voor een setje van 10 tot 50 strips. Ze geven een indicatieve waarde met een nauwkeurigheid van plus of min 2-5 dH. Voor een gratis en betrouwbaardere uitslag vraagt u de hardheid op bij uw drinkwaterbedrijf via hun website met uw postcode.",
  },
  {
    question: "Hoe nauwkeurig is een TDS-meter voor het meten van waterhardheid?",
    answer:
      "Een TDS-meter meet de totale geleidbaarheid van alle opgeloste stoffen, niet alleen calcium en magnesium. De correlatie met hardheid is ruw: TDS gedeeld door 17,1 geeft een benadering in dH, maar natrium, nitraat en chloride verstoren dit. Voor een indicatie is een TDS-meter bruikbaar; voor nauwkeurige hardheidsmetingen gebruikt u teststrips, een titratietest of een labanalyse.",
  },
  {
    question: "Wanneer is een labanalyse zinvol voor waterhardheid?",
    answer:
      "Een labanalyse is zinvol bij: eigen put of bronwater (geen drinkwaterbedrijf), aankoop van een woning met onbekende waterinstallatie, professioneel gebruik (horecabedrijf, brouwerij, aquariumhouder) of wanneer u een complete wateranalyse wilt inclusief zware metalen, bacterien en alle mineralen. Kosten bedragen 25-60 euro bij geaccrediteerde laboratoria zoals KWR, Kiwa of commerciele partijen.",
  },
  {
    question: "Wat betekenen de eenheden dH, mmol/L en mg/L CaCO3?",
    answer:
      "Waterhardheid wordt uitgedrukt in drie eenheden: dH (Duitse hardheidsgraden), mmol/L en mg/L CaCO3. De omrekening is: 1 dH = 0,178 mmol/L = 17,8 mg/L CaCO3 = 7,14 mg/L calcium (Ca). Drinkwaterbedrijven in Nederland gebruiken doorgaans mmol/L. Aquariumhouders werken vaak met dH of dKH.",
  },
  {
    question: "Hoe werkt een druppeltest (titratie) voor waterhardheid?",
    answer:
      "Een titratie (EDTA-methode) is de meest nauwkeurige thuismethode. U voegt druppels EDTA-reagens toe aan een watermonster totdat de kleur omslomt van rood naar blauw. Elke druppel staat voor een bepaalde hoeveelheid calcium en magnesium. De nauwkeurigheid is plus of min 0,5 dH. Testkits kosten 10-30 euro en zijn verkrijgbaar bij aquariumspeciaalzaken en online.",
  },
  {
    question: "Kan ik de waterhardheid gratis opzoeken?",
    answer:
      "Ja. Alle Nederlandse drinkwaterbedrijven publiceren de waterhardheid per postcode op hun website. Vitens (Noord- en Oost-Nederland), Evides (Zeeland, Zuid-Holland), PWN (Noord-Holland), Waternet (Amsterdam), Dunea (Den Haag, Leiden), Brabant Water en WML (Limburg) bieden elk een postcode-checker aan. Dit geeft de actuele meting direct vanuit het productiepunt.",
  },
  {
    question: "Welke methode gebruik ik als ik een waterontharder wil instellen?",
    answer:
      "Voor het instellen van een waterontharder heeft u de exacte hardheidswaarde in dH of mmol/L nodig. De meest betrouwbare bronnen zijn: (1) de postcode-checker van uw drinkwaterbedrijf voor leidingwater, of (2) een titratie-testkit voor uw specifieke aansluiting. Teststrips zijn minder geschikt omdat de foutmarge bij instelling van een ontharder problemen geeft.",
  },
  {
    question: "Hoeveel dH heeft mijn water als de TDS-meter 300 mg/L aangeeft?",
    answer:
      "Bij 300 mg/L TDS kunt u een ruwe hardheidsschatting maken: 300 gedeeld door 17,1 is circa 17,5 dH. Dit is echter slechts een benadering omdat TDS ook natrium, kalium, nitraat en chloride omvat. De werkelijke hardheid kan 30-50 procent lager liggen als uw leidingwater relatief veel natrium of nitraat bevat. Gebruik een titratietest voor een betrouwbare waarde.",
  },
];

export default function WaterfilterHardheidstestPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Waterfilter", url: "https://waterfilterplatform.nl/waterfilter" },
          { name: "Hardheidstest", url: "https://waterfilterplatform.nl/waterfilter/hardheidstest" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Waterhardheid thuis testen: teststrips, TDS-meter en labanalyse",
          description:
            "Waterhardheid thuis testen: teststrips 2-5 euro, TDS-meter 8-25 euro, labanalyse 25-60 euro. Nauwkeurigheid vergeleken.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/waterfilter/hardheidstest",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:underline">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>Hardheidstest</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterhardheid testen: methoden, nauwkeurigheid en kosten vergeleken
          </h1>
          <QuickAnswer answer="De goedkoopste manier om waterhardheid te meten zijn teststrips (2-5 euro), maar deze zijn minder nauwkeurig. Een TDS-meter (8-25 euro) geeft een indicatie via geleidbaarheid maar meet geen pure hardheid. De meest nauwkeurige optie is een labanalyse (25-60 euro) of uw waterhardheid gratis opvragen bij uw drinkwaterbedrijf." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Waarom waterhardheid kennen?
          </h2>
          <p className="text-gray-700 mb-4">
            De waterhardheid in uw regio bepaalt welke maatregelen zinvol zijn. Hard water boven de
            15 dH veroorzaakt kalkafzetting in waterkokers, espressomachines, CV-ketels en
            leidingen. Wie een waterontharder wil installeren of instellen, heeft de exacte
            hardheidswaarde nodig. Osmosefiltergebruikers kunnen hun membraanvervanging beter
            plannen als ze de mineralenbelasting kennen. En aquariumhouders hebben de hardheid
            nodig om GH en KH correct in te stellen.
          </p>
          <p className="text-gray-700 mb-6">
            In Nederland loopt de waterhardheid sterk uiteen: Amsterdam heeft circa 7-8 dH
            (zacht), terwijl Limburg boven de 20 dH uitkomt (zeer hard). Zonder meting weet u
            niet of maatregelen noodzakelijk zijn.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Methode 1: Gratis opvragen bij het drinkwaterbedrijf
          </h2>
          <p className="text-gray-700 mb-3">
            De eenvoudigste en meest betrouwbare methode voor leidingwater is de postcode-checker
            van uw drinkwaterbedrijf. U vult uw postcode in en krijgt direct de actuele
            waterhardheid in mmol/L of dH, gemeten aan het productiepunt.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Vitens: vitens.nl/kwaliteit &mdash; Noord- en Oost-Nederland</li>
            <li>Evides: evides.nl/waterkwaliteit &mdash; Zeeland en Zuid-Holland</li>
            <li>PWN: pwn.nl/waterkwaliteit &mdash; Noord-Holland</li>
            <li>Waternet: waternet.nl &mdash; Amsterdam en omgeving</li>
            <li>Dunea: dunea.nl &mdash; Den Haag en Leiden</li>
            <li>Brabant Water: brabantwater.nl &mdash; Noord-Brabant</li>
            <li>WML: wml.nl &mdash; Limburg</li>
          </ul>
          <p className="text-gray-700 mb-6">
            <strong>Betrouwbaarheid: zeer hoog.</strong> De waarden zijn direct afkomstig van
            continue metingen aan het productiepunt en worden regelmatig bijgewerkt. Het enige
            voorbehoud: bij eigen put of bronwater heeft u geen drinkwaterbedrijf en is deze
            methode niet toepasbaar.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Methode 2: Teststrips
          </h2>
          <p className="text-gray-700 mb-3">
            Teststrips werken via een kleurreactie: de strip bevat een calcium-indicator die van
            kleur verandert in contact met calcium- en magnesiumionen. U vergelijkt de kleur na
            30-60 seconden met een meegeleverde kleurschaal.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Eigenschap</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Teststrips</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Nauwkeurigheid</td>
                  <td className="border border-gray-300 px-3 py-2">Plus of min 2&ndash;5 dH (indicatief)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Kosten</td>
                  <td className="border border-gray-300 px-3 py-2">2&ndash;10 euro voor 10&ndash;50 strips</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Snelheid</td>
                  <td className="border border-gray-300 px-3 py-2">30&ndash;60 seconden</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Merken</td>
                  <td className="border border-gray-300 px-3 py-2">JBL, Tetra, Salifert, Aquarium Systems</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-6">
            Teststrips zijn voldoende voor een eerste orientatie, maar niet geschikt voor het
            nauwkeurig instellen van een waterontharder of voor aquariumgebruik waarbij exacte GH
            en KH waarden noodzakelijk zijn.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Methode 3: TDS-meter
          </h2>
          <p className="text-gray-700 mb-3">
            Een TDS-meter (Total Dissolved Solids) meet de elektrische geleidbaarheid van water en
            rekent dit om naar mg/L opgeloste stoffen. Het is geen directe hardheidsmeteing: de
            meter meet alle ionen, niet alleen calcium en magnesium.
          </p>
          <p className="text-gray-700 mb-3">
            Ruwe correlatie: TDS in mg/L gedeeld door 17,1 geeft een benadering van de hardheid
            in dH. Bij 200 mg/L TDS is de schatting circa 11,7 dH. Maar: natrium, nitraat,
            chloride en kalium worden ook meegemeten. Bij leidingwater met relatief veel natrium
            kan de werkelijke hardheid 30-50 procent lager liggen dan de TDS-schatting suggereert.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Geschikt voor:</strong> osmosefilter-effluent meten (TDS &lt; 20 mg/L als
            indicatie van goed werkend membraan), relatieve veranderingen in watersamenstelling
            volgen. <strong>Niet geschikt voor:</strong> nauwkeurige hardheidsbepaling.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Methode 4: Druppeltest (titratie)
          </h2>
          <p className="text-gray-700 mb-3">
            De EDTA-titratie is de nauwkeurigste thuismethode. U voegt druppels EDTA-reagens toe
            aan een watermonster van 5 of 10 mL. Elke druppel bindt calcium- en magnesiumionen; de
            kleur slaat om van rood naar blauw zodra alle ionen gebonden zijn. Het aantal druppels
            bepaalt de hardheid.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Nauwkeurigheid: plus of min 0,5 dH</li>
            <li>Kosten: 10-30 euro voor een testkit</li>
            <li>Tijdsduur: 5-10 minuten per meting</li>
            <li>Verkrijgbaar bij: aquariumspeciaalzaak, brouwerijbenodigdheden, online</li>
          </ul>
          <p className="text-gray-700 mb-6">
            Titratie is geschikt voor aquariumgebruikers, brouwers, en iedereen die een
            waterontharder wil instellen op een exacte waarde. Het vereist meer handelingen dan
            een strip maar geeft een beduidend betrouwbaarder resultaat.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Methode 5: Labanalyse
          </h2>
          <p className="text-gray-700 mb-3">
            Een geaccrediteerde labanalyse geeft de meest volledige en nauwkeurige informatie.
            Naast hardheid (GH, KH, calcium, magnesium) analyseert het lab ook pH, nitraat,
            lood, bacteriologische kwaliteit en andere parameters.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Nauwkeurigheid: hoogste beschikbaar, methode ISO/IEC 17025 geaccrediteerd</li>
            <li>Kosten: 25-60 euro (basispakket hardheid), 80-200 euro (volledig drinkwateranalyse)</li>
            <li>Doorlooptijd: 3-10 werkdagen</li>
            <li>Aanbieders: KWR, Kiwa, Waterproef, diverse commerciele labs</li>
          </ul>
          <p className="text-gray-700 mb-6">
            Zinvol bij: eigen put of bronwater, aankoop van een woning met oude leidingen (lood of
            koper), professioneel gebruik in horeca of brouwerij, of wanneer u een volledige
            waterkwaliteitsinspectie wilt uitvoeren.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Vergelijkingstabel alle methoden
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Methode</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kosten</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Nauwkeurigheid</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Snelheid</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Geschikt voor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Drinkwaterbedrijf</td>
                  <td className="border border-gray-300 px-3 py-2">Gratis</td>
                  <td className="border border-gray-300 px-3 py-2">Zeer hoog</td>
                  <td className="border border-gray-300 px-3 py-2">Direct</td>
                  <td className="border border-gray-300 px-3 py-2">Leidingwater</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Teststrips</td>
                  <td className="border border-gray-300 px-3 py-2">2&ndash;10 euro</td>
                  <td className="border border-gray-300 px-3 py-2">Laag (plus of min 2&ndash;5 dH)</td>
                  <td className="border border-gray-300 px-3 py-2">1 minuut</td>
                  <td className="border border-gray-300 px-3 py-2">Eerste orientatie</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">TDS-meter</td>
                  <td className="border border-gray-300 px-3 py-2">8&ndash;25 euro</td>
                  <td className="border border-gray-300 px-3 py-2">Indicatief (geen echte hardheid)</td>
                  <td className="border border-gray-300 px-3 py-2">Direct</td>
                  <td className="border border-gray-300 px-3 py-2">Osmose-effluent</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Titratie (druppeltest)</td>
                  <td className="border border-gray-300 px-3 py-2">10&ndash;30 euro</td>
                  <td className="border border-gray-300 px-3 py-2">Hoog (plus of min 0,5 dH)</td>
                  <td className="border border-gray-300 px-3 py-2">5&ndash;10 minuten</td>
                  <td className="border border-gray-300 px-3 py-2">Aquarium, ontharder instellen</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Labanalyse</td>
                  <td className="border border-gray-300 px-3 py-2">25&ndash;60 euro</td>
                  <td className="border border-gray-300 px-3 py-2">Hoogste</td>
                  <td className="border border-gray-300 px-3 py-2">3&ndash;10 dagen</td>
                  <td className="border border-gray-300 px-3 py-2">Put, professioneel, woning</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Omrekentabel: dH naar mmol/L, mg/L CaCO3 en mg/L Ca
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">dH</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">mmol/L</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">mg/L CaCO3</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">mg/L Ca</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Classificatie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">0&ndash;7</td>
                  <td className="border border-gray-300 px-3 py-2">0&ndash;1,25</td>
                  <td className="border border-gray-300 px-3 py-2">0&ndash;125</td>
                  <td className="border border-gray-300 px-3 py-2">0&ndash;50</td>
                  <td className="border border-gray-300 px-3 py-2">Zacht</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">7&ndash;14</td>
                  <td className="border border-gray-300 px-3 py-2">1,25&ndash;2,5</td>
                  <td className="border border-gray-300 px-3 py-2">125&ndash;250</td>
                  <td className="border border-gray-300 px-3 py-2">50&ndash;100</td>
                  <td className="border border-gray-300 px-3 py-2">Matig hard</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">14&ndash;21</td>
                  <td className="border border-gray-300 px-3 py-2">2,5&ndash;3,75</td>
                  <td className="border border-gray-300 px-3 py-2">250&ndash;375</td>
                  <td className="border border-gray-300 px-3 py-2">100&ndash;150</td>
                  <td className="border border-gray-300 px-3 py-2">Hard</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">&gt;21</td>
                  <td className="border border-gray-300 px-3 py-2">&gt;3,75</td>
                  <td className="border border-gray-300 px-3 py-2">&gt;375</td>
                  <td className="border border-gray-300 px-3 py-2">&gt;150</td>
                  <td className="border border-gray-300 px-3 py-2">Zeer hard</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mb-6">
            Omrekenformule: 1 dH = 0,178 mmol/L = 17,8 mg/L CaCO3 = 7,14 mg/L calcium.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Veelgestelde vragen
          </h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <CTABanner context="osmose" />

        <p className="text-gray-600 text-sm mt-8">
          Zie ook:{" "}
          <Link href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid per gemeente</Link>
          {", "}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder kiezen</Link>
          {" en "}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter kopen</Link>.
        </p>
      </div>
    </>
  );
}
