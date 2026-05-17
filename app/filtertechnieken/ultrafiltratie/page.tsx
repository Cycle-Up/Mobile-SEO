import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Ultrafiltratie (UF) waterfilter: 0,01 micron, hollow fiber en toepassingen",
  description: "Ultrafiltratie filtert op 0,01 micron: verwijdert bacterien, virussen, protozoa en microplastics. Geen chemicalien, geen zouten. Verschil met osmose en nanofiltration.",
  alternates: { canonical: "https://waterfilterplatform.nl/filtertechnieken/ultrafiltratie" },
  openGraph: {
    title: "Ultrafiltratie (UF) waterfilter: 0,01 micron, hollow fiber en toepassingen",
    description: "Ultrafiltratie filtert op 0,01 micron: verwijdert bacterien, virussen, protozoa en microplastics. Geen chemicalien, geen zouten. Verschil met osmose en nanofiltration.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wat is ultrafiltratie en hoe verschilt het van microfiltratie?",
    answer: "Ultrafiltratie (UF) is een membraanfiltratiemethode met een poriemaat van 0,01 tot 0,1 micrometer. Microfiltratie (MF) heeft grotere porieen van 0,1 tot 10 micrometer en verwijdert alleen grotere deeltjes en protozoa, maar laat de meeste bacterien en alle virussen door. UF verwijdert zowel bacterien als grote virussen (norovirus, rotavirus). Beide laten opgeloste stoffen zoals nitraat, PFAS en lood passeren.",
  },
  {
    question: "Verwijdert ultrafiltratie ook virussen?",
    answer: "UF verwijdert grote virussen (norovirus, rotavirus, adenovirus) met een log-4 of hogere reductie. Kleine virussen zoals enterovirussen (15-30 nm) zijn kleiner dan de kleinste UF-porieen en kunnen bij membraanintegriteitsfouten doorlaten. Een intact UF-membraan met poriemaat 0,02 micron biedt echter voor de meeste pathogene virussen in drinkwater voldoende bescherming. Voor maximale virusverwijdering (ook piconavirussen) biedt omgekeerde osmose de sterkste garantie.",
  },
  {
    question: "Hoe werkt een hollow fiber UF-membraan?",
    answer: "Hollow fiber membranen bestaan uit honderden tot duizenden dunne, buisvormige vezels met een diameter van 0,5 tot 2 mm. Het membraanmateriaal (polyethersulfon, polyvinylideen-fluoride of cellulose-acetaat) heeft porieen van 0,01-0,1 micron. Water stroomt in buiten-naar-binnen modus (outside-in) of binnen-naar-buiten (inside-out). Deeltjes, bacterien en virussen worden aan het buitenoppervlak tegengehouden terwijl gefilterd water door de porieen stroomt. Het grote oppervlak per volume-eenheid maakt hollow fiber compacte en efficiante systemen.",
  },
  {
    question: "Produceert ultrafiltratie afvalwater?",
    answer: "In normale doorstroomoperatie produceert UF vrijwel geen afvalwater: 95-99% van het inkomende water wordt als productwater geleverd. Afvalwater ontstaat alleen tijdens backflush (terugspoelingsprocedure). Een backflush duurt 30-60 seconden en verbruikt 2-5 liter. Bij automatische systemen die elke 30-60 minuten backflushen bedraagt het afvalwaterpercentage minder dan 5%. Dit is aanzienlijk zuiniger dan omgekeerde osmose, dat 3-4 liter afvalwater per liter product produceert.",
  },
  {
    question: "Wat is backflushing en hoe vaak is het nodig?",
    answer: "Backflushing (terugspoelingen) is het doorspoelen van het UF-membraan in omgekeerde richting om verzamelde deeltjes van het membraanoppervlak te verwijderen. Bij huishoudelijke systemen vindt backflush automatisch plaats elke 30-60 minuten, of na een ingesteld volume productwater. Campingfilters zoals Sawyer worden handmatig gespoeld met de bijgeleverde injectiespuit. Zonder regelmatig backflushen neemt de doorstroomsnelheid (flux) af en stijgt de transmembraandruk.",
  },
  {
    question: "Verwijdert ultrafiltratie PFAS of nitraat?",
    answer: "Nee. PFAS-moleculen (PFOS: 500 dalton, PFOA: 414 dalton) en nitraationen (NO3-: 62 dalton) zijn vele malen kleiner dan UF-porieen van 0,01 micron (10.000 dalton grens). Ze passeren het UF-membraan volledig onbelemmerd. Voor PFAS-verwijdering (95-99%) en nitraatverwijdering (85-95%) is omgekeerde osmose of ionenwisseling (nitraat) noodzakelijk. Dit is het fundamentele verschil tussen UF en RO.",
  },
  {
    question: "Kan ik ultrafiltratie gebruiken voor putwater?",
    answer: "Ja, UF is een uitstekende keuze voor putwater wanneer de microbiologische veiligheid de voornaamste zorg is. Putwater bevat soms bacterien (E. coli, enterococcen) en protozoa (Giardia, Cryptosporidium). Een UF-filter met gegarandeerde integriteit (NSF/ANSI 419 of gelijkwaardig) verwijdert deze micro-organismen effectief. Laat echter ook een chemische analyse doen: bevat het putwater nitraat (boven 50 mg/L), lood of PFAS, dan is UF onvoldoende en is aanvullende filtratie (osmose, ionenwisseling) noodzakelijk.",
  },
  {
    question: "Wat kost een ultrafiltratie systeem vergeleken met osmose?",
    answer: "Een huishoudelijk UF-systeem kost 100-400 euro aanschaf. Membraanvervanging is 20-80 euro en nodig elke 2-5 jaar. De jaarlijkse kosten bedragen 30-80 euro. Een osmosesysteem kost 250-800 euro aanschaf, met jaarlijkse filterkosten van 60-150 euro (sedimentfilter, koolfilter, membraan, postfilter). UF is op alle kostenposten goedkoper en vereist geen opslagtank. Osmose biedt echter een breder filterspectrum, inclusief PFAS, nitraat en lood.",
  },
  {
    question: "Werkt ultrafiltratie zonder waterdruk?",
    answer: "Passieve UF-systemen (zoals Sawyer-filters voor camping) werken op zwaartekracht of via handmatig zuigen. Ze vereisen geen waterdruk. Huishoudelijke ingebouwde UF-systemen werken op normaal leidingwaterdruk (1-6 bar), zonder boosterpomp. Dit in tegenstelling tot osmose, dat minimaal 2,8 bar nodig heeft voor goede productie. In gebouwen met lage waterdruk (minder dan 2 bar) werkt UF nog betrouwbaar waar osmose onvoldoende presteert.",
  },
  {
    question: "Wat is het verschil tussen UF, NF en RO?",
    answer: "De drie membraantechnieken filteren op sterk verschillende schaal. UF (ultrafiltratie) heeft porieen van 0,01-0,1 micron en houdt bacterien, protozoa en grote virussen tegen, maar laat opgeloste ionen passeren. NF (nanofiltratie) heeft porieen van 0,001-0,01 micron en verwijdert hardheidsionen (Ca, Mg), grotere organische moleculen en virussen, maar niet alle kleine ionen zoals nitraat. RO (omgekeerde osmose) heeft porieen van 0,0001 micron en verwijdert vrijwel alles: ionen, zware metalen, PFAS, nitraat en nano-deeltjes. RO vereist de hoogste druk en produceert afvalwater; UF heeft de laagste druk en geen afvalwater.",
  },
];

const articleSchema = {
  "@type": "Article",
  headline: "Ultrafiltratie (UF) waterfilter: 0,01 micron, hollow fiber en toepassingen",
  description: "Ultrafiltratie filtert op 0,01 micron: verwijdert bacterien, virussen, protozoa en microplastics. Geen chemicalien, geen zouten. Verschil met osmose en nanofiltration.",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  url: "https://waterfilterplatform.nl/filtertechnieken/ultrafiltratie",
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

export default function UltrafiltratieFiltertechniekenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfilterplatform.nl" },
              { "@type": "ListItem", position: 2, name: "Filtertechnieken", item: "https://waterfilterplatform.nl/filtertechnieken" },
              { "@type": "ListItem", position: 3, name: "Ultrafiltratie", item: "https://waterfilterplatform.nl/filtertechnieken/ultrafiltratie" },
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
          <span>Ultrafiltratie</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Ultrafiltratie (UF) waterfilter: 0,01 micron, hollow fiber en toepassingen
        </h1>

        <QuickAnswer answer="Ultrafiltratie (UF) filtert op 0,01-0,1 micron via hollow fiber membranen en verwijdert bacterien (99,99%+), protozoa (100%), grote virussen (99%+) en microplastics. UF verwijdert geen opgeloste stoffen zoals nitraat, PFAS, lood of kalk. Geen afvalwater, geen chemicalien, lage druk. Ideaal voor microbiologisch onveilig water." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Definitie en filtratieniveau
        </h2>
        <p className="text-gray-700 mb-4">
          Ultrafiltratie (UF) is een membraanfiltratieprocede dat werkt op een poriemaat van 0,01 tot 0,1 micrometer (10 tot 100 nanometer). In de hierarchie van membraantechnieken zit UF tussen microfiltratie (MF, 0,1-10 micron) en nanofiltratie (NF, 0,001-0,01 micron). Elke klasse verwijdert andere deeltjesgroottes en molecuulgewichten.
        </p>
        <p className="text-gray-700 mb-4">
          De molecuulgewichtgrens (MWCO: Molecular Weight Cut-Off) van UF-membranen ligt doorgaans tussen 1.000 en 100.000 dalton. Dit betekent dat moleculen zwaarder dan 100 kDa grotendeels worden tegengehouden. Bacterien (500.000+ dalton), protozoa (veel groter) en grote virussen (norovirus: 1.500.000 dalton) worden effectief geblokkeerd. Kleine ionen zoals nitraat (62 Da), calcium (40 Da) en PFAS (400-500 Da) passeren het membraan volledig.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hollow fiber membranen: opbouw en werking
        </h2>
        <p className="text-gray-700 mb-4">
          De meest toegepaste UF-configuratie in huishoudelijke en draagbare systemen is het hollow fiber membraan. Dit bestaat uit honderden tot duizenden dunne, holle polymeervezelbuizen met een wanddikte van 100-300 micron. Materialen zijn onder andere polyethersulfon (PES), polyvinylideen fluoride (PVDF) en cellulose-acetaat.
        </p>
        <p className="text-gray-700 mb-4">
          In outside-in modus (de meest voorkomende voor drinkwater) stroomt water aan de buitenkant van de vezels. Druk dwingt water door de membraanwand naar binnen. Deeltjes en micro-organismen blijven aan het buitenoppervlak achter als een retentaat. Het gezuiverde water (permeaat) stroomt via de holle kern naar de uitgang. Het enorme vezelbundel-oppervlak per volume-eenheid (300-500 m2 per m3 modulevolume) maakt hollow fiber systemen compacte en efficiente filters.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat UF verwijdert: microbiologische bescherming
        </h2>
        <div className="border border-green-200 bg-green-50 rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-green-800 mb-2">UF verwijdert WEL (bij intact membraan)</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>Bacterien:</strong> &gt;4 log reductie (99,99%+) — E. coli, Salmonella, Legionella, Campylobacter</li>
            <li><strong>Protozoa:</strong> volledige verwijdering — Giardia, Cryptosporidium (chloorresistent)</li>
            <li><strong>Grote virussen:</strong> &gt;3 log reductie — norovirus, rotavirus, adenovirus</li>
            <li><strong>Microplastics:</strong> deeltjes groter dan 0,1 micron (de meerderheid van microplastics in drinkwater)</li>
            <li><strong>Colloiden:</strong> organische en anorganische colloidale deeltjes</li>
            <li><strong>Turbiditeit:</strong> troebeling vrijwel volledig verwijderd</li>
            <li><strong>Sommige macromoleculen:</strong> humuszuren, grote eiwitten (boven MWCO-waarde)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat UF NIET verwijdert: chemische beperkingen
        </h2>
        <div className="border border-red-200 bg-red-50 rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-red-800 mb-2">UF verwijdert NIET</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>PFAS:</strong> molecuulgrootte 200-600 Da, ver onder de MWCO van UF</li>
            <li><strong>Nitraat (NO3-):</strong> opgelost ion, 62 Da</li>
            <li><strong>Lood (Pb2+), arseen, cadmium:</strong> metaalionen, te klein</li>
            <li><strong>Kalk (Ca2+, Mg2+):</strong> hardheidsionen blijven in het water</li>
            <li><strong>Chloride, sulfaat, fosfaat:</strong> anorganische zouten</li>
            <li><strong>Chloor en organische chemicalieen:</strong> opgeloste moleculen passeren</li>
            <li><strong>Hormonen en medicijnresten:</strong> kleine organische moleculen (&lt;500 Da)</li>
            <li><strong>Nanoplastics (&lt;0,01 micron):</strong> kleiner dan de kleinste UF-porieen</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Drukvrij vs drukvereist: passieve en actieve UF
        </h2>
        <p className="text-gray-700 mb-4">
          UF-systemen bestaan in twee categorieen qua drukbehoefte. Passieve UF-systemen zoals de Sawyer Squeeze en LifeStraw werken op zwaartekracht of handmatige zuigdruk. Ze vereisen geen aansluiting op het leidingnet en zijn ideaal voor camping, trekken, noodsituaties en gebruik in gebieden zonder betrouwbaar leidingwater. De doorstroomsnelheid is lager dan bij gedrukte systemen.
        </p>
        <p className="text-gray-700 mb-4">
          Professionele en huishoudelijke UF-systemen werken op normaal leidingwaterdruk (1-5 bar), zonder boosterpomp. Dit geeft hogere doorstroomcapaciteit (5-30 liter per uur) en is geschikt als keukenfilter of pre-filter voor een RO-systeem. Het ontbreken van een boosterpomp maakt UF stiller en energiezuiniger dan osmose.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Onderhoud: backflush en membraanlevensduur
        </h2>
        <p className="text-gray-700 mb-4">
          Het belangrijkste onderhoud voor een UF-membraan is backflushing: het terugspoelingsprocedure waarbij water in omgekeerde richting door het membraan wordt geperst om opgehoopte deeltjes los te maken. Bij automatische systemen vindt dit elke 30-60 minuten of na 200-500 liter productwater automatisch plaats. Campingfilters worden handmatig gespoten met de bijgeleverde spuit.
        </p>
        <p className="text-gray-700 mb-4">
          In tegenstelling tot ionenwisselend hars en osmosemembranen vereist UF-onderhoud geen chemicalien. Periodiek (jaarlijks) kan desinfectie met een verdunde natriumhypochlooroplossing worden uitgevoerd bij professionele installaties. De membraanlevensduur bij correct gebruik en regelmatig backflushen bedraagt 2 tot 5 jaar. Vervanging kost 20-80 euro afhankelijk van het systeem.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Toepassingen van ultrafiltratie
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Camping en outdoor:</strong> Sawyer-, LifeStraw- en MSR-filters zijn gebaseerd op hollow fiber UF. Licht, compact, geen chemicalien nodig.</li>
          <li><strong>Putwater (microbiologisch):</strong> bescherming tegen bacterien en protozoa uit grondwater of regenwater, mits chemische analyse geen verontreinigingen aantoont.</li>
          <li><strong>Voorfase voor osmose:</strong> UF als pre-filter voor een RO-systeem vermindert de slibbeling van het RO-membraan en verlengt de levensduur aanzienlijk.</li>
          <li><strong>Buitenlandse reizen:</strong> in landen waar drinkwater bacteriologisch onveilig is maar chemisch schoon, biedt een UF-reisfilter effectieve bescherming.</li>
          <li><strong>Industrieel en gemeentelijk:</strong> grootschalige UF-installaties worden gebruikt bij gemeentelijke drinkwaterbereiding als pre-behandeling voor desinfectie, als alternatief voor zandfiltratie.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijking: UF vs osmose vs nanofiltratie
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Eigenschap</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Ultrafiltratie (UF)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Nanofiltratie (NF)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Omgekeerde osmose (RO)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Poriemaat</td>
                <td className="border border-gray-300 px-3 py-2">0,01-0,1 micron</td>
                <td className="border border-gray-300 px-3 py-2">0,001-0,01 micron</td>
                <td className="border border-gray-300 px-3 py-2">0,0001 micron</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Bacterien</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">99,99%+</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">99,99%+</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">99,99%+</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Virussen</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">Grote virussen 99%+</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">99,99%+</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">99,99%+</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Hardheid (Ca, Mg)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">0%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">60-90%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">90-97%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Nitraat</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">0%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">30-60%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">85-95%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">PFAS</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">&lt;10%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">50-80%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">95-99%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Afvalwater</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">&lt;5% (alleen backflush)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">15-30%</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">50-75% (zonder pomp)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Benodigde druk</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Leidingdruk (&gt;0,5 bar)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">3-10 bar</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">5-15 bar</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Systeemkosten</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">100-400 euro</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">400-1.000 euro</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">250-800 euro</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over ultrafiltratie</h2>
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
          <Link href="/filtertechnieken" className="text-[#005F8A] underline">alle filtertechnieken</Link>,{" "}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter kopen</Link>,{" "}
          <Link href="/omgekeerde-osmose/vs-ultrafiltratie" className="text-[#005F8A] underline">omgekeerde osmose vs ultrafiltratie</Link> en{" "}
          <Link href="/waterfilter/microplastics" className="text-[#005F8A] underline">waterfilter voor microplastics</Link>.
        </p>
      </main>
    </>
  );
}
