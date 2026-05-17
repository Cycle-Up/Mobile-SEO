import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Ionenwisseling als waterbehandeling: principe, toepassingen en regeneratie",
  description: "Ionenwisseling in waterbehandeling: cation/anion exchange, ontharding, nitraat- en fluoride-verlaging. Regeneratie met NaCl of NaOH, voor- en nadelen.",
  alternates: { canonical: "https://waterfilterplatform.nl/filtertechnieken/ionenwisseling" },
  openGraph: {
    title: "Ionenwisseling als waterbehandeling: principe, toepassingen en regeneratie",
    description: "Ionenwisseling in waterbehandeling: cation/anion exchange, ontharding, nitraat- en fluoride-verlaging. Regeneratie met NaCl of NaOH, voor- en nadelen.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Hoe werkt ionenwisseling bij waterontharding?",
    answer: "Bij cationenwisseling voor ontharding passeert hard water een bed met harskorrels die zijn geladen met natriumionen (Na+). De harskorrels hebben een hogere affiniteit voor calcium (Ca2+) en magnesium (Mg2+) dan voor natrium. De hardheidsionen worden aan de hars gebonden, terwijl natriumionen vrijkomen in het water. Het resultaat is zacht water met een hogere natriumconcentratie.",
  },
  {
    question: "Wat is het verschil tussen cationenwisseling en anionenwisseling?",
    answer: "Cationenwisseling verwijdert positief geladen ionen (kationen) zoals calcium (Ca2+), magnesium (Mg2+) en lood (Pb2+). Het hars bevat negatief geladen groepen die kationen aantrekken. Anionenwisseling verwijdert negatief geladen ionen (anionen) zoals nitraat (NO3-), sulfaat (SO42-), fluoride (F-) en arseen (AsO43-). Het hars bevat positief geladen groepen. Beide technieken worden gecombineerd in mixed-bed systemen voor ultrazuiver water.",
  },
  {
    question: "Hoe wordt een ionenwisselaar geregenereerd?",
    answer: "Cationenhars wordt geregenereerd met een natriumchlorideoplossing (keukenzout, NaCl). Het hoge natriumgehalte verdringt de opgeslagen calcium- en magnesiumionen, die met het regeneratiewater worden afgevoerd. Anionenhars wordt geregenereerd met natriumhydroxide (NaOH) of natriumchloride, afhankelijk van het harstype. Na regeneratie is het hars weer volledig actief. Een huishoudelijke waterontharder regenereert automatisch elke 3-14 dagen afhankelijk van het waterverbruik.",
  },
  {
    question: "Is zacht water van een ionenwisselaar gezond om te drinken?",
    answer: "Ionenwisselaar-zacht water bevat meer natrium dan onbehandeld hard water: bij hardheid van 20 dH kan de natriumtoename 150-200 mg/L bedragen. Voor de meeste gezonde mensen is dit geen probleem. Voor personen op een natriumarm dieet (hypertensie, hartfalen) kan het echter bezwaarlijk zijn. Verder zijn calcium en magnesium, die gunstig zijn voor het lichaam, verwijderd. Een apart aftappunt voor onbehandeld water voor drinken en koken is dan aan te raden.",
  },
  {
    question: "Verwijdert ionenwisseling ook PFAS of lood?",
    answer: "Specifiek anionenhars kan sommige PFAS-verbindingen adsorberen, maar dit is geen standaardfunctie van een huishoudelijke waterontharder. Speciaal PFAS-selectief hars is beschikbaar maar duur en vereist frequent vervangen. Lood (Pb2+) als kation wordt inderdaad door cationenwisseling verwijderd, maar een standaard waterontharder is niet gecertificeerd voor loodverwijdering. Voor PFAS en lood is omgekeerde osmose de meest betrouwbare oplossing.",
  },
  {
    question: "Wat is een mixed-bed ionenwisselaar?",
    answer: "Een mixed-bed ionenwisselaar combineert cationenhars en anionenhars in een enkelvoudig bed. Dit produceert water met een TDS (Total Dissolved Solids) van vrijwel 0 mg/L en een geleidbaarheid van minder dan 1 microsiemens per centimeter. Dit ultrazuivere water wordt gebruikt in laboratoria, elektronica-industrie, aquaria, fotografie en geavanceerde brouwinstallaties. Regeneratie van mixed-bed hars is complexer en vereist scheiding van de harsen.",
  },
  {
    question: "Wat zijn de ecologische nadelen van ionenwisseling?",
    answer: "Het grootste ecologische nadeel is het regeneratieproces. Per regeneratiecyclus verbruikt een huishoudelijke waterontharder 5-15 kg keukenzout en 40-150 liter water. Het afvalwater bevat hoge concentraties natriumchloride (3.000-10.000 mg/L chloride), calcium en magnesium. Dit verhoogt de zoutbelasting van oppervlaktewater en kan problemen geven bij gebruik van het rioolwater voor irrigatie. In sommige Europese regio's gelden beperkingen voor het lozen van regeneratiewater.",
  },
  {
    question: "Wanneer is ionenwisseling beter dan omgekeerde osmose voor ontharding?",
    answer: "Ionenwisseling (waterontharder) is geschikter dan RO voor ontharding wanneer: (1) u uitsluitend kalk wilt verwijderen en geen andere verontreinigingen; (2) u grote volumes water wilt ontharden voor de hele woning (douche, wasmachine, vaatwasser, CV); (3) u mineralen wilt behouden in drinkwater; (4) u geen afvalwater wilt produceren bij watergebruik (alleen bij regeneratie). RO is geschikter als er naast hardheid ook andere verontreinigingen zijn (PFAS, nitraat, lood).",
  },
  {
    question: "Hoeveel zout verbruikt een waterontharder per jaar?",
    answer: "Een gemiddeld Nederlands gezin van 4 personen in een hard-watergebied (18-20 dH) verbruikt 150-250 kg zout per jaar. Moderne ontharders met vraaggestuurde regeneratie (meten actual waterverbruik) verbruiken 20-30% minder zout dan tijdsgestuurde modellen. Efficiencte modellen halen 80-120 kg per jaar voor een gemiddeld gezin. Zout kost 15-25 euro per 25 kg, wat neerkomt op 90-250 euro per jaar aan zoutkosten.",
  },
  {
    question: "Kan ionenwisseling nitraat verwijderen uit drinkwater?",
    answer: "Ja, via specifieke nitraat-selectieve anionenwisseling. Standaard anionenhars heeft voorkeur voor sulfaat boven nitraat; nitraat-selectief hars heeft juist voorkeur voor nitraat. Dergelijke systemen zijn beschikbaar als point-of-entry of point-of-use filtersysteem voor gebieden met verhoogd nitraat (landbouwgebieden in Brabant, Gelderland, Limburg). Regeneratie met natriumchloride is nodig elke 2-8 weken afhankelijk van het nitraatgehalte.",
  },
];

const articleSchema = {
  "@type": "Article",
  headline: "Ionenwisseling als waterbehandeling: principe, toepassingen en regeneratie",
  description: "Ionenwisseling in waterbehandeling: cation/anion exchange, ontharding, nitraat- en fluoride-verlaging. Regeneratie met NaCl of NaOH, voor- en nadelen.",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  url: "https://waterfilterplatform.nl/filtertechnieken/ionenwisseling",
  publisher: {
    "@type": "Organization",
    name: "WaterfilterPlatform",
    url: "https://waterfilterplatform.nl",
  },
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function IonenwisselingPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfilterplatform.nl" },
              { "@type": "ListItem", position: 2, name: "Filtertechnieken", item: "https://waterfilterplatform.nl/filtertechnieken" },
              { "@type": "ListItem", position: 3, name: "Ionenwisseling", item: "https://waterfilterplatform.nl/filtertechnieken/ionenwisseling" },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{" "}
          <Link href="/filtertechnieken" className="hover:underline">Filtertechnieken</Link> &rsaquo;{" "}
          <span>Ionenwisseling</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Ionenwisseling als waterbehandeling: principe, toepassingen en regeneratie
        </h1>

        <QuickAnswer answer="Ionenwisseling wisselt ongewenste ionen in water uit voor minder schadelijke ionen via geladen harskorrels. Cationenwisseling verwijdert calcium en magnesium (ontharding), anionenwisseling verwijdert nitraat, sulfaat en fluoride. Regeneratie met keukenzout of loog is noodzakelijk. Mixed-bed hars produceert ultrazuiver water met TDS bijna 0." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Principe van ionenwisseling
        </h2>
        <p className="text-gray-700 mb-4">
          Ionenwisseling is een chemisch scheidingsproces waarbij ongewenste ionen in water worden vervangen door andere ionen via een harsmateriaal. Het hars bestaat uit een polymeernetwerk met functionele groepen die ionen kunnen binden en vrijlaten. Het proces is omkeerbaar en selectief: het hars heeft een hogere affiniteit voor bepaalde ionen dan voor anderen, afhankelijk van lading, ionengrootte en concentratie.
        </p>
        <p className="text-gray-700 mb-4">
          Er zijn twee hoofdtypen ionenwisselende harsen. Cationenhars (katjonenwisseling) bevat negatief geladen functionele groepen die positief geladen ionen (kationen) binden, zoals calcium (Ca2+), magnesium (Mg2+), natrium (Na+) en lood (Pb2+). Anionenhars (anionenwisseling) bevat positief geladen groepen die negatieve ionen (anionen) binden, zoals nitraat (NO3-), sulfaat (SO42-), chloride (Cl-) en fluoride (F-).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Cationenwisseling voor waterontharding
        </h2>
        <p className="text-gray-700 mb-4">
          De meest voorkomende toepassing van ionenwisseling in huishoudens is waterontharding. Hard water bevat verhoogde concentraties calcium (Ca2+) en magnesium (Mg2+), die kalkaanslag veroorzaken op leidingen, apparaten en in ketels. Via cationenwisseling worden deze hardheidsionen uitgewisseld tegen natriumionen (Na+):
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6 font-mono text-sm">
          <p>Ca2+ + 2 Na-Hars &rarr; Ca-Hars2 + 2 Na+</p>
          <p>Mg2+ + 2 Na-Hars &rarr; Mg-Hars2 + 2 Na+</p>
        </div>
        <p className="text-gray-700 mb-4">
          Het resultaat is zacht water: de hardheid daalt van bijv. 20 dH naar 0-3 dH. De prijs is dat de natriumconcentratie stijgt. Bij een hardheidsverlaging van 15 dH stijgt het natriumgehalte met circa 120 mg/L. Moderne waterontharders hebben een hardheidsblender (bypass) die een deel onbehandeld water bijmengt om een eindresultaat van 7-10 dH te bereiken, wat de natriumstijging beperkt.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Anionenwisseling: nitraat, sulfaat en fluoride
        </h2>
        <p className="text-gray-700 mb-4">
          Anionenwisseling richt zich op negatief geladen verontreinigingen. De meest relevante toepassingen voor drinkwater zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Nitraatverwijdering:</strong> in landbouwgebieden (Brabant, Gelderland, Limburg) kan nitraat in grondwater de EU-norm van 50 mg/L overschrijden. Nitraat-selectief anionenhars verwijdert 85-95% van het nitraat. Regeneratie met natriumchloride is elke 2-8 weken vereist.
          </li>
          <li>
            <strong>Sulfaatverwijdering:</strong> standaard anionenhars heeft een hoge affiniteit voor sulfaat (SO42-). Dit kan nuttig zijn bij industrieel proceswater maar is zelden nodig bij Nederlands drinkwater.
          </li>
          <li>
            <strong>Fluorideverwijdering:</strong> in gebieden met van nature hoog fluoride (geologisch) kan anionenwisseling fluoride verlagen. Zirconiumfosfaat of specifiek anionenhars wordt hiervoor ingezet.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Mixed-bed hars voor ultrazuiver water
        </h2>
        <p className="text-gray-700 mb-4">
          Een mixed-bed ionenwisselaar combineert cationenhars en anionenhars in een enkele kolom. Het water passeert afwisselend catione- en anionenwisselaars, waardoor vrijwel alle opgeloste ionen worden verwijderd. Het resultaat is water met een TDS van minder dan 1 mg/L en een elektrische geleidbaarheid onder 1 microsiemens per centimeter.
        </p>
        <p className="text-gray-700 mb-4">
          Mixed-bed water wordt gebruikt in: laboratoriumanalyse, halfgeleiderindustrie, fotochemie, stoomgeneratoren, geavanceerde aquaria en specialistische brouwinstallaties. Voor huishoudelijk drinkgebruik is mixed-bed water niet aanbevolen zonder remineralisatie, omdat het zo weinig mineralen bevat dat het ecologisch zacht maar smaakarm en licht corrosief is.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Regeneratie: hoe en hoe vaak?
        </h2>
        <p className="text-gray-700 mb-4">
          Ionenwisselend hars heeft een eindig ionenwisselcapaciteit. Na verloop van tijd is het hars verzadigd met de ongewenste ionen en verliest het zijn functie. Regeneratie herstelt het hars in zijn oorspronkelijke toestand:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Cationenhars (ontharding):</strong> regeneratie met geconcentreerde natriumchlorideoplossing (10-15%). De hoge Na+-concentratie verdringt de opgeslagen Ca2+ en Mg2+ van het hars. Afvalwater met hoge zout- en hardheidsconcentratie wordt afgevoerd.</li>
          <li><strong>Anionenhars (nitraat, sulfaat):</strong> regeneratie met natriumchloride of natriumhydroxide (NaOH) afhankelijk van het harstype. Sterk basisch anionenhars vereist NaOH.</li>
          <li><strong>Mixed-bed hars:</strong> de harsen moeten worden gescheiden (op soortelijk gewicht) alvorens afzonderlijk te regenereren. Dit vereist specialistische apparatuur.</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Een moderne huishoudelijke waterontharder reguleert regeneratie vraaggestuurd: hij meet het waterverbruik en berekent wanneer de harscapaciteit is bereikt. Dit verbruikt 20-30% minder zout dan tijdgestuurde systemen die op vaste intervallen regenereren.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijking: ionenwisseling vs omgekeerde osmose vs UV
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Toepassing</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Ionenwisseling</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Omgekeerde osmose</th>
                <th className="border border-gray-300 px-3 py-2 text-left">UV-sterilisatie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Ontharding (Ca, Mg)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Uitstekend (100%)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Goed (90-97%)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">Niet effectief</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Nitraat</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Goed (85-95%)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Goed (85-95%)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">Niet effectief</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">PFAS</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600 font-medium">Wisselend (specifiek hars)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Uitstekend (95-99%)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">Niet effectief</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Bacterien en virussen</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">Niet effectief</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Goed (&gt;99,9%)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Uitstekend (99,99%)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Fluoride</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Goed (anionenhars)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Goed (85-95%)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">Niet effectief</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Lood</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600 font-medium">Deels (niet gecertificeerd)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Uitstekend (95-99%)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">Niet effectief</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Chloor</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">Niet effectief</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Goed (90-99%)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">Niet effectief</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over ionenwisseling</h2>
          {faqItems.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{" "}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder uitleg en vergelijking</Link>,{" "}
          <Link href="/filtertechnieken" className="text-[#005F8A] underline">alle filtertechnieken</Link>,{" "}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter kopen</Link> en{" "}
          <Link href="/waterontharder/vs-osmose" className="text-[#005F8A] underline">waterontharder vs omgekeerde osmose</Link>.
        </p>
      </main>
    </>
  );
}
