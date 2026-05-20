import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Omgekeerde osmose filtertechniek: werking, membraan en effectiviteit",
  description: "Omgekeerde osmose filtert op 0,0001 micron: verwijdert PFAS, lood, nitraat, bacterien en microplastics. Werking membraan, afvalwaterverhouding en certificering.",
  alternates: { canonical: "https://waterfilterplatform.nl/filtertechnieken/omgekeerde-osmose" },
  openGraph: {
    title: "Omgekeerde osmose filtertechniek: werking, membraan en effectiviteit",
    description: "Omgekeerde osmose filtert op 0,0001 micron: verwijdert PFAS, lood, nitraat, bacterien en microplastics. Werking membraan, afvalwaterverhouding en certificering.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Hoe werkt een omgekeerde osmose membraan?",
    answer: "Een omgekeerde osmose membraan bestaat uit meerdere lagen polymide met porieen van 0,0001 micron. Onder verhoogde druk (3-8 bar) wordt water door dit semi-permeabele membraan geperst. Water- en kleine gasmoleculen passeren het membraan; grotere moleculen, ionen, bacterien en microplastics worden tegengehouden en afgevoerd als afvalwater (concentraat). Het gefilterde water noemen we permeaat.",
  },
  {
    question: "Wat is de afvalwaterverhouding van omgekeerde osmose?",
    answer: "Traditionele RO-systemen hebben een afvalwaterverhouding van 2:1 tot 4:1: voor elke liter drinkwater wordt 2-4 liter afgevoerd als concentraat. Moderne systemen met een permeaatpomp of drukbooster bereiken verhoudingen van 1:1 of zelfs 1:0,5. De permeaatpomp gebruikt de druk van het concentraat om het inkomende water voor te stuwen, waardoor het waterverbruik fors daalt.",
  },
  {
    question: "Verwijdert omgekeerde osmose ook PFAS?",
    answer: "Ja. Omgekeerde osmose is een van de meest effectieve technieken voor PFAS-verwijdering. Langketenige PFAS zoals PFOS en PFOA worden voor 90-99% gereduceerd. Kortketenige PFAS (zoals GenX en PFBS) worden met 85-95% gereduceerd. Voor optimale PFAS-prestaties moet het RO-systeem gecertificeerd zijn volgens NSF/ANSI 58 (basis) en bij voorkeur ook NSF/ANSI 401 (voor nieuwe contaminanten inclusief kortketenige PFAS).",
  },
  {
    question: "Hoe lang gaat een RO-membraan mee?",
    answer: "Bij normaal gebruik en goede voorfiltering gaat een RO-membraan 2-3 jaar mee. De levensduur wordt sterk beinvloed door de waterkwaliteit en de voorfilterstadia. Chloor is de grootste bedreiging: zonder actief koolfilter als voorfase wordt het polymide membraan geoxideerd en beschadigd, soms al na 1-2 jaar. Hard water (hoge kalkconcentratie) kan neerslag vormen op het membraan (scaling), wat ook de levensduur verkort.",
  },
  {
    question: "Verwijdert RO ook mineralen uit water?",
    answer: "Ja. Omgekeerde osmose verwijdert ook calcium (90-97%) en magnesium (90-97%), de mineralen die bijdragen aan waterhardheid. Het geproduceerde permeaat heeft daardoor een lage mineraalconcentratie. Sommige fabrikanten voegen een remineralisatiefilter als post-filter toe om calcium en magnesium gedeeltelijk terug te voegen voor een betere smaak en licht alkalisch water (pH 7,3-7,8). Mineraalverlies is voor gezonde mensen geen gezondheidsrisico, omdat voeding de voornaamste mineraalbron is.",
  },
  {
    question: "Hoe weet ik of mijn RO-systeem goed werkt?",
    answer: "De eenvoudigste methode is een TDS-meter (Total Dissolved Solids). Het permeaat van een goed functionerend RO-systeem heeft een TDS van 5-50 ppm, terwijl leidingwater doorgaans 100-500 ppm heeft. Een reductie van minder dan 75% wijst op een beschadigd of verouderd membraan. Sommige systemen hebben een ingebouwde TDS-monitor. Controleer ook de druk: te lage inkomende waterdruk (onder 2,5 bar) vermindert de filterprestaties.",
  },
  {
    question: "Wat zijn de voorfilterstadia bij omgekeerde osmose?",
    answer: "Een standaard RO-systeem heeft drie of vier voorfilterstadia: (1) sedimentfilter van 10-5 micron die deeltjes, zand en slib tegenhoudt; (2) CTO koolblokfilter die chloor, geur en organische stoffen verwijdert en het RO-membraan beschermt; (3) het RO-membraan zelf (0,0001 micron); (4) optioneel een post-koolfilter voor optimale smaak en eventueel een remineralisatiefilter. Vijfstapssystemen voegen een extra sediment- of koolfilter toe.",
  },
  {
    question: "Kan ik omgekeerde osmose gebruiken op putwater?",
    answer: "Ja, maar dit vereist extra aandacht voor de samenstelling van het putwater. Putwater kan bacterien, virussen, nitraat, ijzer, mangaan en organische stoffen bevatten die het RO-membraan kunnen beschadigen. Voor putwater wordt aanbevolen: een ijzerfilter als voorfase (indien nodig), UV-sterilisatie na het RO-systeem voor microbiologische zekerheid, en regelmatige waterkwaliteitsanalyse. Raadpleeg een waterspecialist voor de juiste systeemconfiguratie.",
  },
];

const articleSchema = {
  "@type": "Article",
  headline: "Omgekeerde osmose filtertechniek: werking, membraan en effectiviteit",
  description: "Omgekeerde osmose filtert op 0,0001 micron: verwijdert PFAS, lood, nitraat, bacterien en microplastics. Werking membraan, afvalwaterverhouding en certificering.",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  url: "https://waterfilterplatform.nl/filtertechnieken/omgekeerde-osmose",
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

export default function OmgekeerdeOsmosePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfilterplatform.nl" },
              { "@type": "ListItem", position: 2, name: "Filtertechnieken", item: "https://waterfilterplatform.nl/filtertechnieken" },
              { "@type": "ListItem", position: 3, name: "Omgekeerde osmose", item: "https://waterfilterplatform.nl/filtertechnieken/omgekeerde-osmose" },
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
          <span>Omgekeerde osmose</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Omgekeerde osmose filtertechniek: werking, membraan en effectiviteit
        </h1>

        <QuickAnswer answer="Omgekeerde osmose (RO) filtert op 0,0001 micron via een semi-permeabel membraan onder druk. Het verwijdert PFAS (90-99%), lood (95-99%), nitraat (85-95%), bacterien (99,9%+), kalk (90-97%) en microplastics (99%+). Actief kool doet het beter voor geur en smaak. Afvalwaterverhouding: 2:1 tot 4:1, te verbeteren naar 1:1 met permeaatpomp." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Werking van het omgekeerde osmose membraan
        </h2>
        <p className="text-gray-700 mb-4">
          Omgekeerde osmose (RO) is gebaseerd op het principe van natuurlijke osmose, maar dan omgekeerd. Bij natuurlijke osmose beweegt water door een semi-permeabel membraan van een waterige oplossing met lage naar hoge concentratie. Bij omgekeerde osmose wordt door externe waterdruk (3-8 bar) de osmotische druk overwonnen, waardoor water van hoge naar lage concentratie wordt gedwongen.
        </p>
        <p className="text-gray-700 mb-4">
          Het RO-membraan bestaat uit meerdere lagen polymide met porieen van slechts 0,0001 micron. Dit is 100.000 keer kleiner dan een menselijk haar (70 micron) en kleiner dan de meeste virussen (0,02-0,3 micron). Water- en kleine gasmoleculen passeren het membraan; vrijwel alle opgeloste stoffen, ionen, bacterien en microplastics worden tegengehouden. Het gefilterde water heet permeaat; het concentraat met de tegengehouden stoffen wordt als afvalwater afgevoerd.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat verwijdert omgekeerde osmose WEL?
        </h2>
        <div className="border border-green-200 bg-green-50 rounded-xl p-4 mb-6">
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>PFAS (PFOS, PFOA, GenX):</strong> 90-99% reductie; langketenige PFAS het meest effectief</li>
            <li><strong>Lood:</strong> 95-99% reductie; ook andere zware metalen zoals arseen, cadmium en kwik</li>
            <li><strong>Nitraat:</strong> 85-95% reductie; relevant voor drinkwater in landbouwgebieden</li>
            <li><strong>Bacterien:</strong> 99,9%+ reductie; het membraan is kleiner dan de kleinste bacterie</li>
            <li><strong>Kalk (calcium, magnesium):</strong> 90-97% reductie; produceert zacht, schoon water</li>
            <li><strong>Microplastics:</strong> 99%+ reductie; zelfs nanoplastics worden grotendeels tegengehouden</li>
            <li><strong>Fluoride:</strong> 90-96% reductie</li>
            <li><strong>Chloor en trihalomethanen:</strong> 90-99% reductie (actief kool doet chloor beter)</li>
            <li><strong>Medicijnresten en hormoonverstorende stoffen:</strong> 85-99% reductie</li>
            <li><strong>Virussen:</strong> 99,9%+ reductie (hoewel UV-sterilisatie hier ook voor wordt ingezet)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat verwijdert omgekeerde osmose NIET goed?
        </h2>
        <div className="border border-red-200 bg-red-50 rounded-xl p-4 mb-6">
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>Geur en smaak:</strong> beperkt effectief; <Link href="/filtertechnieken/actief-kool" className="text-[#005F8A] underline">actief kool</Link> is hiervoor beter geschikt</li>
            <li><strong>Sommige vluchtige gassen:</strong> kleine gasmoleculen zoals radon passeren het membraan gedeeltelijk</li>
            <li><strong>Chlooramines:</strong> minder effectief dan actief kool voor chlooraminen; een CTO-voorfase is daarom essentieel</li>
            <li><strong>Kwikdamp en andere vluchtige verbindingen:</strong> gasachtige stoffen met een molecuulgewicht vergelijkbaar met water</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Afvalwaterverhouding: oorzaak en oplossingen
        </h2>
        <p className="text-gray-700 mb-4">
          Een traditioneel RO-systeem produceert voor elke liter drinkwater 2 tot 4 liter afvalwater (concentraat). Dit concentraat bevat alle tegengehouden stoffen en wordt op de riolering afgevoerd. De verhouding hangt af van de waterdruk, de temperatuur en het type membraan.
        </p>
        <p className="text-gray-700 mb-4">
          Moderne systemen met een <strong>permeaatpomp</strong> gebruiken de druk van het concentraat om het inkomende water voor te stuwen. Hiermee daalt de verhouding naar 1:1 of beter. Systemen met een <strong>drukbooster</strong> verhogen de inkomende waterdruk, wat zowel de productiecapaciteit als de waterefficiency verbetert. Bij aanschaf is het verstandig te kiezen voor een systeem met een verhouding van maximaal 2:1.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Voorfilterstadia in een RO-systeem
        </h2>
        <p className="text-gray-700 mb-4">
          Een goed RO-systeem beschermt het dure membraan via meerdere voorfilterstadia:
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2 text-sm">
          <li><strong>Sedimentfilter (10-5 micron):</strong> houdt zand, slib, roest en deeltjes tegen die het RO-membraan kunnen verstoppen of beschadigen</li>
          <li><strong>CTO koolblokfilter:</strong> verwijdert chloor, trihalomethanen en organische stoffen; beschermt het polymide membraan tegen oxidatie door chloor</li>
          <li><strong>RO-membraan (0,0001 micron):</strong> de kerncomponent die ionen, bacterien, PFAS en microplastics verwijdert</li>
          <li><strong>Post-koolfilter:</strong> verbetert de smaak van het permeaat en verwijdert eventuele smaakafwijkingen uit het opslagvat</li>
          <li><strong>Optioneel: remineralisatiefilter:</strong> voegt calcium en magnesium terug toe voor een betere smaak en licht alkalisch water</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Effectiviteitstabel: omgekeerde osmose vs actief kool
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Stof</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Omgekeerde osmose</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Actief kool (GAC/CTO)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">PFAS</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">90-99%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600 font-medium">20-80% (wisselend)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Lood</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">95-99%</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">&lt;20% (niet betrouwbaar)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Nitraat</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">85-95%</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">0%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Bacterien</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99,9%+</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">Niet betrouwbaar</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Kalk (hardheid)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">90-97%</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">0%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Microplastics</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99%+</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600 font-medium">Deels (grootte-afhankelijk)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Chloor</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">90-99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99%+</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Geur en smaak</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600 font-medium">Beperkt effectief</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Effectief</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Certificering van RO-systemen
        </h2>
        <p className="text-gray-700 mb-4">
          Keurmerken geven inzicht in de daadwerkelijke filterprestaties van een RO-systeem. De belangrijkste certificeringen zijn:
        </p>
        <ul className="text-sm text-gray-700 mb-4 space-y-2">
          <li><strong><Link href="/keurmerken/nsf-ansi-58" className="text-[#005F8A] underline">NSF/ANSI 58:</Link></strong> de Amerikaanse basisstandaard voor RO-systemen; test op een lijst van contaminanten inclusief lood, arseen, nitraat, barium en fluoride</li>
          <li><strong>NSF/ANSI 401:</strong> aanvullende certificering voor opkomende contaminanten, inclusief kortketenige PFAS, medicijnresten en hormoonverstorende stoffen</li>
          <li><strong>Watermark:</strong> Australische standaard, vergelijkbaar niveau met NSF/ANSI 58</li>
          <li><strong>KIWA:</strong> Nederlandse/Europese certificering voor waterkwaliteit en veiligheid van materialen in contact met drinkwater</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Let bij aanschaf op certificering voor de specifieke stoffen die u wilt verwijderen. Een NSF/ANSI 58-keurmerk garandeert niet automatisch PFAS-verwijdering; controleer of <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="text-[#005F8A] underline">PFAS</Link> en <Link href="/stoffen-in-drinkwater/zware-metalen" className="text-[#005F8A] underline">zware metalen</Link> specifiek zijn getest.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over omgekeerde osmose</h2>
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
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter kopen</Link>,{" "}
          <Link href="/filtertechnieken" className="text-[#005F8A] underline">alle filtertechnieken</Link>,{" "}
          <Link href="/filtertechnieken/actief-kool" className="text-[#005F8A] underline">actief kool waterfilter</Link>,{" "}
          <Link href="/keurmerken/nsf-ansi-58" className="text-[#005F8A] underline">NSF/ANSI 58 keurmerk</Link>,{" "}
          <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="text-[#005F8A] underline">PFAS in drinkwater</Link>,{" "}
          <Link href="/stoffen-in-drinkwater/zware-metalen" className="text-[#005F8A] underline">zware metalen in water</Link> en{" "}
          <Link href="/filtertechnieken/vergelijking" className="text-[#005F8A] underline">filtervergelijking tabel</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS-verwijdering met osmose</h3>
              <p className="text-sm text-gray-600">Waarom RO 95-99% van PFAS verwijdert en de geldende EU-norm 2026 ruimschoots haalt.</p>
            </Link>
            <Link href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF 58: het RO-keurmerk</h3>
              <p className="text-sm text-gray-600">Wat NSF/ANSI 58 certificering inhoudt en welke verontreinigingen onafhankelijk worden getest.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
