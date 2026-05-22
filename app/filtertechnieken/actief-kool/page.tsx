import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Actief kool waterfilter: GAC vs CTO, werking en wanneer effectief",
  description: "Actief kool waterfilter: granulaat (GAC) vs blok (CTO), werking via adsorptie, effectief voor chloor, geur, smaak. Niet effectief voor lood, PFAS of nitraat.",
  alternates: { canonical: "https://waterfilterplatform.nl/filtertechnieken/actief-kool" },
  openGraph: {
    title: "Actief kool waterfilter: GAC vs CTO, werking en wanneer effectief",
    description: "Actief kool waterfilter: granulaat (GAC) vs blok (CTO), werking via adsorptie, effectief voor chloor, geur, smaak. Niet effectief voor lood, PFAS of nitraat.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wat is het verschil tussen GAC en CTO actief kool?",
    answer: "GAC (Granular Activated Carbon) bestaat uit losse koolstofkorrels. Water stroomt relatief snel door de korrels heen, wat de contacttijd verkort. CTO (Carbon Block) is samengeperst koolstof in een blokfilter. Doordat water gedwongen wordt door een dichtere structuur, is de contacttijd langer en zijn de filterprestaties beter voor een breder scala aan stoffen. CTO is doorgaans duurder maar effectiever.",
  },
  {
    question: "Verwijdert actief kool ook PFAS?",
    answer: "Gedeeltelijk. Standaard actief koolfilters verwijderen sommige PFAS-verbindingen, maar de reductie varieert sterk: 20-80% afhankelijk van de PFAS-soort en filtertype. Speciaal voor PFAS ontwikkelde koolblokfilters (PFAS-geoptimaliseerd GAC of CTO) halen hogere reducties. Voor betrouwbare PFAS-verwijdering van 95-99% is omgekeerde osmose de aanbevolen techniek.",
  },
  {
    question: "Hoe werkt adsorptie bij actief kool?",
    answer: "Adsorptie is het hechten van moleculen aan een oppervlak. Actief kool heeft een enorm intern oppervlak van 500-1500 m2 per gram door zijn poreuze structuur. Chloor, organische moleculen, geurstoffen en sommige pesticiden hechten zich aan dit oppervlak via Van der Waals-krachten. Adsorptie is geen chemische reactie maar een fysisch proces: het oppervlak raakt uiteindelijk verzadigd.",
  },
  {
    question: "Hoe lang gaat een actief koolfilter mee?",
    answer: "Gemiddeld 6 tot 12 maanden, afhankelijk van het waterverbruik en de kwaliteit van het inkomende water. Een filter dat meer chloor, organische stoffen of sediment moet verwerken, raakt sneller verzadigd. Fabrikanten geven doorgaans een capaciteitsrichtlijn in liters (bijv. 3000-5000 liter). Na die capaciteit neemt de filterprestatie sterk af en kan bacteriegroei optreden.",
  },
  {
    question: "Kan actief kool bacteriegroei veroorzaken?",
    answer: "Ja, dat is een bekend risico bij te lang gebruik. De porien van verzadigd actief kool kunnen als broedplaats dienen voor bacterien, met name bij stilstaand water. Vervang het filter op tijd en spoel het systeem door na periodes van niet-gebruik (meer dan 3 dagen). CTO-filters met zilverimpregnatie remmen bacteriegroei extra.",
  },
  {
    question: "Verwijdert actief kool lood uit leidingwater?",
    answer: "Nee. Standaard actief kool (GAC en CTO) verwijdert geen loodionen uit water. Lood is een opgelost metaalion dat het koolstofoppervlak passeert. Voor loodverwijdering is omgekeerde osmose (95-99% reductie), een speciaal lood-gecertificeerd koolblokfilter (NSF/ANSI 53 gecertificeerd) of een ionenwisselaar nodig. Controleer altijd of het filter NSF 53-gecertificeerd is voor loodverwijdering.",
  },
  {
    question: "Waarom wordt actief kool gebruikt als voorfase voor omgekeerde osmose?",
    answer: "Chloor in leidingwater tast het polymide RO-membraan aan en verkort de levensduur. Een actief koolfilter (CTO) voor het osmosembraan verwijdert chloor effectief (99%+) en beschermt zo het duurdere RO-membraan. Zonder deze voorfase moet het RO-membraan doorgaans al na 1-2 jaar worden vervangen in plaats van de normale 2-3 jaar.",
  },
  {
    question: "Wat verwijdert actief kool wel en niet in vergelijking met osmose?",
    answer: "Actief kool verwijdert: chloor (99%+), trihalomethanen (THM), geurstoffen, smaakstoffen, sommige pesticiden en VOC's. Actief kool verwijdert NIET: nitraat, nitriet, lood, arseen, PFAS, fluoride, calcium, magnesium, bacterien en virussen. Omgekeerde osmose verwijdert al deze stoffen wel (85-99% afhankelijk van de stof).",
  },
  {
    question: "Is een actief koolfilter voldoende voor veilig drinkwater?",
    answer: "Voor Nederlands kraanwater, dat al aan wettelijke normen voldoet, is een actief koolfilter voldoende als u alleen de smaak en geur wilt verbeteren. Als u zich zorgen maakt over PFAS, lood (oude leidingen), nitraat (landbouwgebied) of bacteriologische veiligheid (eigen put), is actief kool niet toereikend. Gebruik dan een OSI-gecertificeerd osmosefilter of UV-sterilisator.",
  },
  {
    question: "Wat is de aanschafprijs van een actief koolfilter?",
    answer: "Een losse GAC- of CTO-filterpatroon kost 5-25 euro per stuk en gaat 6-12 maanden mee. Een compleet aanrechtfilter met koolblok kost 30-150 euro. Een onderbouw koolfilter kost 80-300 euro. Als voorfase in een osmosesysteem is de koolfilterpatroon vaak al inbegrepen in het systeem.",
  },
];

const articleSchema = {
  "@type": "Article",
  headline: "Actief kool waterfilter: GAC vs CTO, werking en wanneer effectief",
  description: "Actief kool waterfilter: granulaat (GAC) vs blok (CTO), werking via adsorptie, effectief voor chloor, geur, smaak. Niet effectief voor lood, PFAS of nitraat.",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  url: "https://waterfilterplatform.nl/filtertechnieken/actief-kool",
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

export default function ActiefKoolPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfilterplatform.nl" },
              { "@type": "ListItem", position: 2, name: "Filtertechnieken", item: "https://waterfilterplatform.nl/filtertechnieken" },
              { "@type": "ListItem", position: 3, name: "Actief kool", item: "https://waterfilterplatform.nl/filtertechnieken/actief-kool" },
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
          <span>Actief kool</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Actief kool waterfilter: GAC vs CTO, werking en wanneer effectief
        </h1>

        <QuickAnswer answer="Actief koolfilters werken via adsorptie en verwijderen effectief chloor (99%+), geur, smaak, trihalomethanen en sommige pesticiden. Ze verwijderen geen lood, PFAS, nitraat, arseen of bacterien. GAC (granulaat) is goedkoper; CTO (blokfilter) biedt langere contacttijd en betere prestaties. Vervang het filter elke 6-12 maanden." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is actief kool?
        </h2>
        <p className="text-gray-700 mb-4">
          Actief kool (ook: geactiveerde koolstof) wordt gemaakt van organisch materiaal zoals kokosnootschil, houtskool of steenkool. Via stoomactivering bij hoge temperaturen (800-1000 graden Celsius) ontstaat een uiterst poreus materiaal met een intern oppervlak van 500 tot 1500 vierkante meter per gram. Ter vergelijking: een suikerklontje van 1 gram actief kool heeft een intern oppervlak zo groot als twee tennisbanen.
        </p>
        <p className="text-gray-700 mb-4">
          Dit enorme oppervlak maakt adsorptie mogelijk: verontreinigingen hechten zich aan de koolstofoppervlak via Van der Waals-krachten en worden zo uit het water verwijderd. Het is belangrijk het onderscheid te maken: adsorptie (hechten aan een oppervlak) is iets anders dan absorptie (opnemen in een stof). Actief kool adsorbeert; het werkt als een moleculaire magneet voor organische verbindingen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          GAC: granulaat actief kool
        </h2>
        <p className="text-gray-700 mb-4">
          GAC (Granular Activated Carbon) bestaat uit losse koolstofkorrels van 0,5 tot 2 mm groot. Water stroomt vrij door de ruimte tussen de korrels, wat zorgt voor een relatief korte contacttijd met het koolstofoppervlak. De voordelen van GAC zijn de lagere kostprijs en een hogere doorstroomsnelheid. Het nadeel is dat water ook deels tussen de korrels door kan stromen zonder contact te maken met het actief kool, waardoor de filterprestaties minder consistent zijn.
        </p>
        <p className="text-gray-700 mb-4">
          GAC-filters worden vaak gebruikt als voorfase in <Link href="/omgekeerde-osmose" className="text-[#005F8A] hover:underline">osmosesystemen</Link>, in <Link href="/waterontharder" className="text-[#005F8A] hover:underline">waterontharders</Link> en in filterkannen zoals Brita-patronen. De levensduur bedraagt doorgaans 6 tot 12 maanden of 3000-5000 liter, afhankelijk van de waterkwaliteit.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          CTO: koolblokfilter
        </h2>
        <p className="text-gray-700 mb-4">
          CTO (Carbon Block, ook aangeduid als CBF) is actief kool dat onder hoge druk samengeperst is tot een compact blok. Water moet door de dichte structuur worden geperst, waardoor de contacttijd met het koolstofoppervlak aanzienlijk langer is dan bij GAC. Dit resulteert in betere filterprestaties voor een breder scala aan verontreinigingen, waaronder sommige pesticiden, VOC's en organische microverontreinigingen.
        </p>
        <p className="text-gray-700 mb-4">
          Bovendien functioneert een CTO-filter ook als sedimentfilter: de dichte koolblokstructuur houdt deeltjes groter dan 0,5-5 micron (afhankelijk van het filter) mechanisch vast. CTO-filters zijn duurder dan GAC maar bieden betere prestaties. Ze worden standaard gebruikt als tweede voorfase in osmosesystemen (na een sedimentfilter en voor het RO-membraan).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat verwijdert actief kool WEL?
        </h2>
        <div className="border border-green-200 bg-green-50 rounded-xl p-4 mb-6">
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>Chloor:</strong> 99%+ reductie (inclusief chloortdioxide en chloramine bij sommige CTO-types)</li>
            <li><strong>Trihalomethanen (THM):</strong> bijproducten van chloordesinfectie, 85-95% reductie</li>
            <li><strong>Haloazijnzuren (HAA):</strong> andere chloreringsbyproducten, 70-90% reductie</li>
            <li><strong>Geur- en smaakstoffen:</strong> aardachtige geur (geosmine), metaalsmaak, chlooraankleur</li>
            <li><strong>Sommige pesticiden:</strong> atrazine, lindaan, bestrijdingsmiddelen met organische kern</li>
            <li><strong>VOC's (vluchtige organische verbindingen):</strong> oplosmiddelen, benzeen, tolueen</li>
            <li><strong>Sommige medicijnresten:</strong> grote organische moleculen hechten aan koolstofoppervlak</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat verwijdert actief kool NIET?
        </h2>
        <div className="border border-red-200 bg-red-50 rounded-xl p-4 mb-6">
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>Nitraat en nitriet:</strong> anorganische ionen, geen adsorptie</li>
            <li><strong>Lood, arseen, cadmium, kwik:</strong> metaalionen met lage affiniteit voor koolstof</li>
            <li><strong>PFAS (PFOS, PFOA, GenX):</strong> standaard actief kool onbetrouwbaar; gespecialiseerde PFAS-koolstof deels effectief</li>
            <li><strong>Fluoride:</strong> anorganisch ion, geen adsorptie</li>
            <li><strong>Nitraat, sulfaat, fosfaat:</strong> anorganische zouten</li>
            <li><strong>Bacterien en virussen:</strong> micro-organismen passeren GAC; CTO houdt grote bacterien deels mechanisch tegen maar biedt geen betrouwbare microbiologische bescherming</li>
            <li><strong>Kalk (calcium, magnesium):</strong> hardheidsionen, geen adsorptie</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Effectiviteitstabel: actief kool vs omgekeerde osmose
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Stof</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Actief kool (GAC/CTO)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Omgekeerde osmose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Chloor</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99%+</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">90-99%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Trihalomethanen (THM)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">85-95%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">85-95%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Geur en smaak</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Effectief</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Effectief</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Lood</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">&lt;20% (niet betrouwbaar)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">95-99%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">PFAS</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600 font-medium">20-80% (wisselend)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">95-99%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Nitraat</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">0%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">85-95%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Bacterien</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">Niet betrouwbaar</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99,9%+</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Arseen</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">&lt;20%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">95-99%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Kalk (hardheid)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">0%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">90-97%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Levensduur en vervanging
        </h2>
        <p className="text-gray-700 mb-4">
          Zowel GAC- als CTO-filters hebben een levensduur van 6 tot 12 maanden bij normaal huishoudelijk gebruik (gemiddeld 150 liter per dag). De exacte capaciteit staat vermeld op de filterpatroon (bijv. 3000 liter). Bij harder water of meer chloor in het inkomende water raakt het filter sneller verzadigd.
        </p>
        <p className="text-gray-700 mb-4">
          Na de aanbevolen levensduur neemt de filterprestatie sterk af. Erger nog: verzadigd actief kool kan al geadsorbeerde stoffen terug afgeven aan het water. Bovendien kan bacteriegroei optreden in de porien van het koolstofmateriaal, met name bij stilstaand water. Vervang het filter altijd op tijd en spoel het systeem door na meer dan 2-3 dagen niet-gebruik.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Actief kool als voorfase voor omgekeerde osmose
        </h2>
        <p className="text-gray-700 mb-4">
          In een <Link href="/omgekeerde-osmose" className="text-[#005F8A] hover:underline">osmosesysteem</Link> speelt het actief koolfilter een cruciale rol als beschermer van het RO-membraan. Chloor in leidingwater (standaard 0,1-0,3 mg/L in Nederland) tast het polymide RO-membraan aan via oxidatie. Een CTO-filter als tweede voorfase (na het <Link href="/filtertechnieken" className="text-[#005F8A] hover:underline">sedimentfilter</Link>) verwijdert chloor tot onder de detectiegrens, waardoor de levensduur van het RO-membraan toeneemt van 1-2 jaar naar 2-3 jaar.
        </p>
        <p className="text-gray-700 mb-4">
          Sommige osmosesystemen gebruiken ook een actief koolfilter als post-filter na het opslagvat, om eventuele smaakafwijkingen te corrigeren en een frisse, schone smaak te garanderen.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over actief kool waterfilters</h2>
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
          <Link href="/waterfilter/actief-kool" className="text-[#005F8A] underline">actief kool waterfilter overzicht</Link>,{" "}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter kopen</Link>,{" "}
          <Link href="/filtertechnieken" className="text-[#005F8A] underline">alle filtertechnieken</Link>,{" "}
          <Link href="/filtertechnieken/vergelijking" className="text-[#005F8A] underline">filtervergelijking tabel</Link> en{" "}
          <Link href="/koolstoffilter" className="text-[#005F8A] underline">koolstoffilter informatie</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/chloor-bijproducten" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Chloor en bijproducten in water</h3>
              <p className="text-sm text-gray-600">Hoe chloor en THM ontstaan in leidingwater en hoe actief kool deze effectief verwijdert.</p>
            </Link>
            <Link href="/keurmerken/nsf-ansi-42-53" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF 42/53: keurmerk actief koolfilters</h3>
              <p className="text-sm text-gray-600">Wat NSF 42 (esthetiek) en NSF 53 (gezondheid) betekenen voor koolstoffilters.</p>
            </Link>
            <Link href="/pfas-waterfilter/vergelijken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Actief kool vs osmose voor PFAS</h3>
              <p className="text-sm text-gray-600">Verwijderingspercentages per PFAS-soort: waarom korte-keten PFAS actief kool omzeilen.</p>
            </Link>
            <Link href="/koolstoffilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Koolstoffilter gids</h3>
              <p className="text-sm text-gray-600">Types, kosten, installatie en wanneer koolstoffilters de beste keuze zijn.</p>
            </Link>
            <Link href="/vergelijken/osmose-vs-filterkan" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Osmose vs. filterkan</h3>
              <p className="text-sm text-gray-600">Vergelijking op filterprestaties, kosten en welke situatie bij welke oplossing past.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/chloor-bijproducten" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater</h3>
              <p className="text-sm text-gray-600">Welke stoffen zitten er in leidingwater en welk filter verwijdert wat?</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
