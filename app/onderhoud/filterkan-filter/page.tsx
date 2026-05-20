import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Filterkan filter wisselen: Brita, BWT en andere merken vergeleken",
  description:
    "Hoe vaak filterkan wisselen? Brita vs BWT vs generisch filter: levensduur, kosten, prestaties en wanneer het filter echt uitgeput is.",
  alternates: { canonical: "https://waterfilterplatform.nl/onderhoud/filterkan-filter" },
  openGraph: {
    title: "Filterkan filter wisselen: Brita, BWT en andere merken vergeleken",
    description:
      "Hoe vaak filterkan wisselen? Brita vs BWT vs generisch filter: levensduur, kosten, prestaties en wanneer het filter echt uitgeput is.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Kan ik een filterkan te lang gebruiken?",
    answer:
      "Ja, en dat heeft reele risicos. Na verzadiging (150-200 liter) neemt de filterprestatie sterk af. Erger: de koolstofmatrix kan bacteriegroei bevorderen. Gebruik een filterkan nooit langer dan het dubbele van de aanbevolen termijn, ook niet als het water er schoon uitziet.",
  },
  {
    question: "Zijn generische Brita-filters even goed?",
    answer:
      "Dat varieert. Goedkope generische filters zijn mechanisch compatibel, maar de activkoolfill kan minder poreus zijn, de filtermaterialen kunnen inferieur zijn en er is geen onafhankelijke certificering. Kies generische filters alleen als ze NSF/ANSI 42 gecertificeerd zijn en van een betrouwbare importeur.",
  },
  {
    question: "Hoe weet ik wanneer mijn filter klaar is zonder indicator?",
    answer:
      "Houd bij hoeveel liter u filtert. Een gemiddeld gezin van 4 personen gebruikt ca. 3 liter gefilterd water per dag; bij 150 liter capaciteit is het filter na 50 dagen op. Schrijf de startdatum op de cartridge of stel een herinnering in.",
  },
  {
    question: "Filtert mijn filterkan ook lood?",
    answer:
      "Standaard Brita- en BWT-filters verwijderen lood slechts gedeeltelijk en onbetrouwbaar. Brita Maxtra Pro All-in-1 claimt loodverwijdering, maar de NSF 53-certificering voor lood dekt niet alle filterkanmodellen. Bij loodverdachte leidingen (bouw voor 1960) is een osmosefilter de enige betrouwbare oplossing.",
  },
  {
    question: "Moet ik de filterkan koelen?",
    answer:
      "Bewaar gefilterd water in de koelkast. Bij kamertemperatuur groeit bacterien sneller in het gefilterde water, met name als het filter oud is. Gebruik gefilterd water bij voorkeur binnen 24 uur op. Was de kan wekelijks.",
  },
];

const articleSchema = {
  "@type": "Article",
  headline: "Filterkan filter wisselen: Brita, BWT en andere merken vergeleken",
  description:
    "Hoe vaak filterkan wisselen? Brita vs BWT vs generisch filter: levensduur, kosten, prestaties en wanneer het filter echt uitgeput is.",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  url: "https://waterfilterplatform.nl/onderhoud/filterkan-filter",
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
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FilterkanFilterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfilterplatform.nl" },
              { "@type": "ListItem", position: 2, name: "Onderhoud", item: "https://waterfilterplatform.nl/onderhoud" },
              { "@type": "ListItem", position: 3, name: "Filterkan filter wisselen", item: "https://waterfilterplatform.nl/onderhoud/filterkan-filter" },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{" "}
          <Link href="/onderhoud" className="hover:underline">Onderhoud</Link> &rsaquo;{" "}
          <span>Filterkan filter wisselen</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Filterkan filter wisselen: Brita, BWT en andere merken vergeleken
        </h1>

        <QuickAnswer answer="Een filterkancartridge gaat gemiddeld 4-8 weken mee (150-200 liter). Langer gebruiken leidt tot verminderde filterprestaties en risico op bacteriegroei in de verzadigde koolstofmatrix." />

        <CTABanner context="algemeen" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is een filterkanfilter uitgeput?
        </h2>
        <p className="text-gray-700 mb-4">
          Een filterkanfilter bevat actief kool als kernelement. Actief kool werkt via adsorptie:
          ongewenste stoffen hechten zich aan het enorme interne oppervlak van het koolstofmateriaal.
          Na verloop van tijd raakt dit oppervlak verzadigd; nieuwe stoffen kunnen zich niet meer
          hechten en passeren het filter zonder te worden verwijderd.
        </p>
        <p className="text-gray-700 mb-4">
          De capaciteit van een standaard filterkancartridge bedraagt 150-200 liter. Bij gemiddeld
          gebruik van 3-4 liter per dag per huishouden betekent dit een levensduur van 5-7 weken.
          Sommige merken leveren filters met een ingebouwde indicator (kleurverandering of
          digitale teller op de kan). Zonder indicator kunt u de startdatum bijhouden.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Brita vs BWT vs generisch vergeleken
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Merk</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Capaciteit</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Materialen</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten/100L</th>
                <th className="border border-gray-300 px-3 py-2 text-left">NSF-cert.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Brita Maxtra+</td>
                <td className="border border-gray-300 px-3 py-2">150 L</td>
                <td className="border border-gray-300 px-3 py-2">Actief kool + ionenwisseling</td>
                <td className="border border-gray-300 px-3 py-2">ca. 0,13 euro</td>
                <td className="border border-gray-300 px-3 py-2">Gedeeltelijk</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">BWT Penguin</td>
                <td className="border border-gray-300 px-3 py-2">120 L</td>
                <td className="border border-gray-300 px-3 py-2">Actief kool + Mg-ionenwisseling</td>
                <td className="border border-gray-300 px-3 py-2">ca. 0,17 euro</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Generisch (compatibel)</td>
                <td className="border border-gray-300 px-3 py-2">100-150 L</td>
                <td className="border border-gray-300 px-3 py-2">Actief kool (wisselend)</td>
                <td className="border border-gray-300 px-3 py-2">ca. 0,04-0,10 euro</td>
                <td className="border border-gray-300 px-3 py-2">Zelden</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat filtert een filterkan echt?
        </h2>
        <p className="text-gray-700 mb-4">
          Een filterkan is effectief voor een beperkte set stoffen. Actief kool adsorbeert chloor
          (de voornaamste filterprestatie), chloreringsbyproducten (THM), smaakstoffen en
          geurstoffen. Sommige filterkannen voegen mineralen zoals magnesium toe via ionenwisseling.
        </p>
        <div className="border border-green-200 bg-green-50 rounded-xl p-4 mb-4">
          <p className="text-sm font-semibold text-green-800 mb-1">Wat een filterkan WEL verwijdert:</p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Chloor en chlooraankleur (80-99%)</li>
            <li>Trihalomethanen (bijproducten chlorering, 60-80%)</li>
            <li>Smaakstoffen en lichte geur</li>
            <li>Deels kalk (door ionenwisseling in sommige modellen)</li>
          </ul>
        </div>
        <div className="border border-red-200 bg-red-50 rounded-xl p-4 mb-6">
          <p className="text-sm font-semibold text-red-800 mb-1">Wat een filterkan NIET verwijdert:</p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>PFAS (perfluorverbindingen) - niet betrouwbaar</li>
            <li>Lood (beperkt en niet gecertificeerd bij meeste modellen)</li>
            <li>Nitraat en nitriet</li>
            <li>Bacterien en virussen</li>
            <li>Microplastics (deeltjes kleiner dan 1 micron)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Risico bij te lang gebruik
        </h2>
        <p className="text-gray-700 mb-4">
          Het risico van een te lang gebruikte filterkan gaat verder dan verminderde filterprestaties.
          De koolstofmatrix van een verzadigde cartridge kan een gunstige omgeving worden voor
          bacteriegroei: micro-organismen hechten zich aan het koolstofoppervlak en vermenigvuldigen
          zich in het vochtige, nutrientenrijke filtermateriaal.
        </p>
        <p className="text-gray-700 mb-4">
          Dit fenomeen heet biofilm-vorming en kan ertoe leiden dat gefilterd water bacterieel
          meer belast is dan het ongefilterde kraanwater. In de praktijk is dit risico bij normaal
          gebruik gering, maar bij temperaturen boven 20 graden (bijv. zomer, kamertemperatuur)
          en langdurig gebruik neemt het toe. Bewaar de kan altijd in de koelkast.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Goedkope generische filters: waar op letten
        </h2>
        <p className="text-gray-700 mb-4">
          Compatibele filters voor Brita-, BWT- en andere merken filterkannen zijn breed
          beschikbaar voor een fractie van de originele prijs. De mechanische pasvorm is
          doorgaans goed, maar de filterprestaties kunnen sterk variëren:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 pl-2">
          <li>Kwaliteit van het activkoolmateriaal (kokosnoot-actief kool is superieur).</li>
          <li>Dichtheid van de koolstofvulling (bepaalt contacttijd en adsorbtieprestatie).</li>
          <li>Aanwezigheid of afwezigheid van ionenwisselaarshars.</li>
          <li>NSF/ANSI 42-certificering als minimale kwaliteitsgarantie.</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Vermijd filters zonder enige certificering of van onbekende herkomst. Niet-gecertificeerde
          filters kunnen zelfs stoffen aan het water afgeven vanuit de filtermaterialen zelf.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Reinigen van de kan zelf
        </h2>
        <p className="text-gray-700 mb-4">
          De kan zelf vereist ook periodiek onderhoud. Volg dit schema:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 pl-2">
          <li><strong>Wekelijks:</strong> Spoel alle delen van de kan om met warm water. Gebruik een mild afwasmiddel voor het bovenste reservoir en de deksel. Droog goed af.</li>
          <li><strong>Maandelijks:</strong> Reinig met een citroenzuuroplossing (1 theelepel per liter water). Laat 30 minuten inwerken. Spoel minstens driemaal grondig na.</li>
          <li><strong>Bij smaakafwijkingen:</strong> Demonteer de kan volledig, reinig alle onderdelen, vervang het filter en laat de kan volledig drogen voor hergebruik.</li>
        </ul>

        <CTABanner context="algemeen" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over filterkan onderhoud</h2>
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
          <Link href="/onderhoud" className="text-[#005F8A] underline">Onderhoud overzicht</Link>,{" "}
          <Link href="/filterkan" className="text-[#005F8A] underline">Filterkan vergelijking</Link>,{" "}
          <Link href="/filtertechnieken/actief-kool" className="text-[#005F8A] underline">Actief kool uitgelegd</Link> en{" "}
          <Link href="/vergelijken/osmose-vs-filterkan" className="text-[#005F8A] underline">Osmose vs filterkan</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Actief kool: filterkan techniek</h3>
              <p className="text-sm text-gray-600">Hoe actief kool in filterkannen werkt en welke verontreinigingen wel/niet worden verwijderd.</p>
            </Link>
            <Link href="/keurmerken/nsf-ansi-42-53" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF 42/53: filterkan keurmerken</h3>
              <p className="text-sm text-gray-600">Wat NSF 42 (esthetiek) en NSF 53 (gezondheid) zeggen over de prestaties van filterkanpatronen.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
