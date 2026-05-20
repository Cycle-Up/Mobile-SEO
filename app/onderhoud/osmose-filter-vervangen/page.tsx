import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Osmosefilter vervangen: wanneer en hoe wissel je filters en membraan?",
  description:
    "Stap-voor-stap: wanneer osmosefilters wisselen, TDS meten, prefilter vs membraan vs postfilter, kosten en levensduur per cartridge.",
  alternates: { canonical: "https://waterfilterplatform.nl/onderhoud/osmose-filter-vervangen" },
  openGraph: {
    title: "Osmosefilter vervangen: wanneer en hoe wissel je filters en membraan?",
    description:
      "Stap-voor-stap: wanneer osmosefilters wisselen, TDS meten, prefilter vs membraan vs postfilter, kosten en levensduur per cartridge.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Kan ik elk merk filter in mijn osmosesysteem gebruiken?",
    answer:
      "Veel osmosesystemen gebruiken standaard formaten (2,5 x 10 inch voor prefilters, standaard membraanbehuizing 1812 of 2012). Generische cartridges passen vaak mechanisch, maar presteren niet altijd gelijk aan originelen. Controleer of de vervanging NSF/ANSI 58-gecertificeerd is voor vergelijkbare prestaties.",
  },
  {
    question: "Wat gebeurt er als ik de filter te lang laat zitten?",
    answer:
      "Een verzadigde prefilter laat sediment door naar het membraan, wat membraanvervuiling en vroegtijdige slijtage veroorzaakt. Een uitgeput membraan laat steeds meer opgeloste stoffen door: TDS-rejectie daalt onder 50%. Bij een verzadigde postfilter kan smaak en geur terugkeren. Elk station heeft zijn eigen risico bij te lang gebruik.",
  },
  {
    question: "Hoelang duurt het vervangen van osmosefilters?",
    answer:
      "Prefilters vervangen duurt gemiddeld 15-30 minuten voor een ervaren gebruiker. Het membraan vervangen neemt 30-60 minuten in beslag, inclusief het initieel doorspoelen van het systeem na plaatsing.",
  },
  {
    question: "Moet ik de druktank ook reinigen bij filtervervanging?",
    answer:
      "Niet bij elke filterwissel. Reinig de druktank eens per jaar of als het water een slechte smaak of geur heeft na een nieuwe filterplaatsing. Laat de tank volledig leeglopen, spoel met waterstofperoxide-oplossing (3%) en spoel daarna driemaal door met schoon water.",
  },
  {
    question: "Hoe weet ik welke filters mijn osmosesysteem nodig heeft?",
    answer:
      "Raadpleeg de handleiding van uw systeem voor de exacte filterformaten en -typen. Noteer het merk, model en serienummer. De meeste fabrikanten bieden online een filterzoekfunctie. Alternatief: meet de afmetingen van de gebruikte cartridges (diameter x lengte in inches).",
  },
];

const articleSchema = {
  "@type": "Article",
  headline: "Osmosefilter vervangen: wanneer en hoe wissel je filters en membraan?",
  description:
    "Stap-voor-stap: wanneer osmosefilters wisselen, TDS meten, prefilter vs membraan vs postfilter, kosten en levensduur per cartridge.",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  url: "https://waterfilterplatform.nl/onderhoud/osmose-filter-vervangen",
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

export default function OsmoseFilterVervangenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfilterplatform.nl" },
              { "@type": "ListItem", position: 2, name: "Onderhoud", item: "https://waterfilterplatform.nl/onderhoud" },
              { "@type": "ListItem", position: 3, name: "Osmosefilter vervangen", item: "https://waterfilterplatform.nl/onderhoud/osmose-filter-vervangen" },
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
          <span>Osmosefilter vervangen</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Osmosefilter vervangen: wanneer en hoe wissel je filters en membraan?
        </h1>

        <QuickAnswer answer="Een osmosesysteem heeft 3-4 filterstadia: sedimentprefilter (6-12 maanden), koolstofprefilter (6-12 maanden), RO-membraan (2-3 jaar) en koolstofpostfilter (6-12 maanden). Vervangen op tijd voorkomt membraanbeschadiging." />

        <CTABanner context="algemeen" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De 4 filterstadia van een osmosesysteem
        </h2>
        <p className="text-gray-700 mb-4">
          Een standaard osmosesysteem filtert water in meerdere stappen. Elk stadium heeft een
          specifieke functie en een eigen levensduur. Inzicht in de rol van elk filter helpt u
          begrijpen waarom regelmatig vervangen essentieel is.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Stadium</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Functie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Levensduur</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">1</td>
                <td className="border border-gray-300 px-3 py-2">Sedimentfilter (5 micron)</td>
                <td className="border border-gray-300 px-3 py-2">Zand, roest, deeltjes</td>
                <td className="border border-gray-300 px-3 py-2">6-12 maanden</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">2</td>
                <td className="border border-gray-300 px-3 py-2">Koolstofprefilter (GAC of CTO)</td>
                <td className="border border-gray-300 px-3 py-2">Chloor, geur, organische stoffen</td>
                <td className="border border-gray-300 px-3 py-2">6-12 maanden</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">3</td>
                <td className="border border-gray-300 px-3 py-2">RO-membraan (0,0001 micron)</td>
                <td className="border border-gray-300 px-3 py-2">PFAS, lood, nitraat, zouten</td>
                <td className="border border-gray-300 px-3 py-2">2-3 jaar</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">4</td>
                <td className="border border-gray-300 px-3 py-2">Postfilter / remineralisatie</td>
                <td className="border border-gray-300 px-3 py-2">Smaak, mineralen terugvoegen</td>
                <td className="border border-gray-300 px-3 py-2">6-12 maanden</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-4">
          De sedimentfilter en koolstofprefilter beschermen het RO-membraan. Als deze prefilters
          niet op tijd worden vervangen, bereiken sediment en chloor het membraan en verkorten
          zijn levensduur aanzienlijk. Het membraan is de duurste component; prefilters zijn
          de goedkopere verzekering.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer wisselen: tijdschema vs TDS-meting
        </h2>
        <p className="text-gray-700 mb-4">
          Er zijn twee benaderingen om te bepalen wanneer filters aan vervanging toe zijn:
          op basis van tijd of op basis van een gemeten TDS-waarde.
        </p>
        <p className="text-gray-700 mb-4">
          Het tijdschema is het eenvoudigst: prefilters elke 6-12 maanden, membraan elke 2-3 jaar,
          postfilter elke 6-12 maanden. Bij zachter, schoon kraanwater kunt u de bovengrens aanhouden;
          bij hard water of hoge sedimentbelasting kiest u voor de ondergrens van 6 maanden.
        </p>
        <p className="text-gray-700 mb-4">
          TDS-meting geeft een directe indicatie van de membraanprestatie. Bereken het
          rejectiepercentage: als het TDS van het gefilterde water meer dan 50% bedraagt van het
          TDS van het ruwe leidingwater, is het membraan uitgeput. Voorbeeld: leidingwater TDS 300
          mg/L &rarr; gefilterd water boven 150 mg/L = membraan vervangen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe TDS meten
        </h2>
        <p className="text-gray-700 mb-4">
          Een TDS-pen (digitale geleidbaarheidspen) is het meest praktische meetinstrument en
          kost 10-25 euro. Meet in twee stappen:
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1 pl-2">
          <li>Meet het TDS van het ruwe leidingwater direct uit de kraan (voor het osmosesysteem).</li>
          <li>Meet het TDS van het gefilterde water uit de osmosekraan.</li>
          <li>Bereken: rejectie (%) = 100 - (TDS gefilterd / TDS ongefilterd x 100).</li>
        </ol>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Rejectiepercentage</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Interpretatie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">85-99%</td>
                <td className="border border-gray-300 px-3 py-2">Membraan in goede conditie</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 text-yellow-600 font-medium">70-85%</td>
                <td className="border border-gray-300 px-3 py-2">Membraan slijt, binnenkort vervangen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">&lt;70% (of &gt;50% doorlaat)</td>
                <td className="border border-gray-300 px-3 py-2">Membraan uitgeput, direct vervangen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap-voor-stap: prefilters wisselen
        </h2>
        <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2 pl-2">
          <li>Sluit de watertoevoer af via de invoerkraan van het osmosesysteem.</li>
          <li>Open de osmosekraan en laat het systeem leeglopen totdat er geen water meer uitkomt.</li>
          <li>Zet een kleine bak of handdoek onder de filterbehuizingen.</li>
          <li>Schroef de filterbehuizing los met de meegeleverde filtersleutel (linksom draaien).</li>
          <li>Verwijder de verbruikte cartridge en inspecteer de behuizing op sediment of slijm.</li>
          <li>Reinig de behuizing met een zachte borstel en mild schoonmaakmiddel; spoel goed na.</li>
          <li>Controleer de O-ring op beschadigingen; vervang indien nodig.</li>
          <li>Plaats de nieuwe cartridge in de correcte orientatie en schroef de behuizing terug vast.</li>
          <li>Open de watertoevoer en controleer op lekkage bij de behuizingsaansluitingen.</li>
          <li>Laat het systeem 10-15 minuten doorspoelen voordat u het eerste water gebruikt.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap-voor-stap: membraan vervangen
        </h2>
        <p className="text-gray-700 mb-4">
          Het membraan vervangen vereist extra stappen bovenop de prefilterwissel:
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2 pl-2">
          <li>Volg stap 1 t/m 3 van de prefilterwissel (toevoer sluiten, leeglopen).</li>
          <li>Ontkoppel de snelkoppeling-slangen van de membraanbehuizing (druk in en trek).</li>
          <li>Open de membraanbehuizing door de eindkap los te schroeven.</li>
          <li>Noteer of fotografeer de orientatie van het membraan (let op de flow direction pijl).</li>
          <li>Trek het verbruikte membraan eruit; gebruik eventueel een smalle tang.</li>
          <li>Reinig de membraanbehuizing grondig; spoel met schoon water.</li>
          <li>Controleer en vervang de O-ringen in de eindkap.</li>
          <li>Breng het nieuwe membraan in de correcte richting aan; duw tot het stopt.</li>
          <li>Schroef de eindkap vast en sluit de slangen opnieuw aan.</li>
          <li>Open de watertoevoer, laat het systeem vullen en laat het eerste volle reservoir weggooien.</li>
        </ol>
        <p className="text-gray-700 mb-4">
          Het wegooien van het eerste reservoir na membraanvervanging is belangrijk: het membraan
          bevat conserveringsmiddelen uit de productie die eerst uitgespoeld moeten worden. Sommige
          fabrikanten adviseren zelfs het eerste en tweede reservoir niet te drinken.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kosten per vervanging
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Component</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Frequentie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Jaarlijks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Prefilter-set (sediment + koolstof)</td>
                <td className="border border-gray-300 px-3 py-2">30-60 euro</td>
                <td className="border border-gray-300 px-3 py-2">1x per jaar</td>
                <td className="border border-gray-300 px-3 py-2">30-60 euro</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">RO-membraan</td>
                <td className="border border-gray-300 px-3 py-2">40-100 euro</td>
                <td className="border border-gray-300 px-3 py-2">1x per 2-3 jaar</td>
                <td className="border border-gray-300 px-3 py-2">15-50 euro</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Postfilter</td>
                <td className="border border-gray-300 px-3 py-2">20-40 euro</td>
                <td className="border border-gray-300 px-3 py-2">1x per jaar</td>
                <td className="border border-gray-300 px-3 py-2">20-40 euro</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-semibold">Totaal per jaar</td>
                <td className="border border-gray-300 px-3 py-2" colSpan={2}></td>
                <td className="border border-gray-300 px-3 py-2 font-semibold">ca. 80-150 euro</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CTABanner context="algemeen" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over osmosefilter vervangen</h2>
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
          <Link href="/onderhoud/storingen-oplossen" className="text-[#005F8A] underline">Storingen oplossen</Link>,{" "}
          <Link href="/kennisbank/tds-meter-gebruiken" className="text-[#005F8A] underline">TDS-meter gebruiken</Link>,{" "}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">Omgekeerde osmose uitleg</Link> en{" "}
          <Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] hover:underline font-medium">Hoe een omgekeerde osmose membraan werkt</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose: werking</h3>
              <p className="text-sm text-gray-600">Hoe het membraan en de voorfilters samenwerken en waarom voorfilters het membraan beschermen.</p>
            </Link>
            <Link href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF 58: keurmerk osmose en filterlevensduur</h3>
              <p className="text-sm text-gray-600">Wat NSF/ANSI 58 zegt over filterlevensduur en welke testmethoden gebruikt worden.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
