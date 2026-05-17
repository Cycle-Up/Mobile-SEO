import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Reisfilter water: beste filter voor kamperen, trekken en reizen",
  description:
    "Reisfilter water 2026: LifeStraw, Sawyer Squeeze, Katadyn. Verwijdert bacterien en parasieten. UV-pen voor virussen. Keuze per reistype en bestemming.",
  alternates: { canonical: "https://waterfilterplatform.nl/waterfilter/reisfilter" },
  openGraph: {
    title: "Reisfilter water: beste filter voor kamperen, trekken en reizen",
    description:
      "Reisfilter water 2026: LifeStraw, Sawyer Squeeze, Katadyn. Verwijdert bacterien en parasieten. UV-pen voor virussen. Keuze per reistype en bestemming.",
    type: "website",
  },
};

const filterVergelijking = [
  { filter: "LifeStraw Personal", gewicht: "42g", prijs: "25-35 euro", bacterien: "Ja", virussen: "Nee", levensduur: "1.000L" },
  { filter: "Sawyer Squeeze", gewicht: "85g", prijs: "35-50 euro", bacterien: "Ja", virussen: "Nee", levensduur: "378.000L" },
  { filter: "Katadyn Pocket", gewicht: "270g", prijs: "250-350 euro", bacterien: "Ja", virussen: "Nee", levensduur: "50.000L" },
  { filter: "SteriPen Ultra", gewicht: "65g", prijs: "80-120 euro", bacterien: "Ja", virussen: "Ja", levensduur: "8.000L" },
  { filter: "Grayl Geopress", gewicht: "450g", prijs: "80-100 euro", bacterien: "Ja", virussen: "Ja", levensduur: "300L cartridge" },
];

const faqItems = [
  {
    question: "Verwijdert een LifeStraw ook virussen?",
    answer:
      "Nee. De LifeStraw Personal gebruikt een hol-vezel-membraan van 0,2 micron en verwijdert bacterien en protozoa (Giardia, Cryptosporidium), maar geen virussen. Virussen zijn te klein (0,02-0,09 micron) om door mechanische filters tegengehouden te worden. Gebruik bij virusrisico een UV-pen zoals SteriPen aanvullend op de LifeStraw.",
  },
  {
    question: "Wat is het beste reisfilter voor backpacken in Azie?",
    answer:
      "Voor Azie, Afrika en andere gebieden met virusrisico is een combinatie van mechanisch filter plus UV-sterilisatie noodzakelijk. De meest praktische combinatie is Sawyer Squeeze (bacterien + protozoa) en SteriPen Ultra (virussen). Of kies de Grayl Geopress, die beide functies combineert in een drukfles.",
  },
  {
    question: "Hoe lang gaat een Sawyer Squeeze mee?",
    answer:
      "De Sawyer Squeeze heeft een levensduur van 378.000 liter, wat in de praktijk een levenslange filter is voor de meeste backpackers. Het filter kan worden teruggespoeld (back-flushed) met de meegeleverde injectiespuit om prestaties te herstellen. Niet laten bevriezen, anders is het membraan beschadigd.",
  },
  {
    question: "Wat filtert een reisfilter niet?",
    answer:
      "Standaard reisfilters (hol vezel, keramisch) verwijderen geen virussen, geen chemische stoffen zoals pesticiden en herbiciden, geen zware metalen zoals lood of arseen, en geen opgeloste zouten. Voor chemische verontreiniging heb je actief kool nodig; voor zware metalen alleen een osmosefilter.",
  },
  {
    question: "Is de Katadyn Pocket beter dan de Sawyer Squeeze?",
    answer:
      "De Katadyn Pocket is robuuster (zilvergeimpregneerd keramisch filter) en heeft een lange levensduur van 50.000 liter, maar weegt 270g en kost 250-350 euro. De Sawyer Squeeze is lichter (85g), goedkoper en heeft een bijna onbeperkte levensduur bij onderhoud. Voor ultralight backpacken wint Sawyer; voor expedities en ruig gebruik is Katadyn Pocket betrouwbaarder.",
  },
  {
    question: "Kan ik een reisfilter ook gebruiken voor rampenvoorbereiding thuis?",
    answer:
      "Ja. Reisfilters zoals Sawyer Squeeze en Katadyn Pocket zijn uitstekend geschikt voor noodvoorraden. De lange levensduur, geen batterijen nodig en eenvoudig gebruik maken ze ideaal. Bewaar een filter met doorgangsstoppers in de noodkit en spoel voor gebruik met schoon water door.",
  },
  {
    question: "Hoe onderhoud ik een reisfilter op reis?",
    answer:
      "Spoel het filter na elk gebruik terug met schoon water (Sawyer) of schoonmaakoplossing (Katadyn). Bewaar altijd droog met de doorgangsstoppers geplaatst. Laat een hol-vezelfilter nooit bevriezen: de fijne kanaaltjes scheuren en het filter functioneert niet meer. Controleer voor vertrek altijd de doorstroomsnelheid.",
  },
  {
    question: "Wat is het verschil tussen een reisfilter en een thuisosmosefilter?",
    answer:
      "Een reisfilter is ontworpen voor gebruik buitenshuis met oppervlaktewater en bronwater. Het verwijdert bacterien en protozoa via mechanische filtratie. Een thuisosmosefilter verwijdert 95-99% van alle opgeloste stoffen, inclusief zware metalen, PFAS en nitraat. Osmosefilters zijn niet draagbaar en werken alleen op drinkwaterleiding.",
  },
];

export default function WaterfilterReisfilterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Waterfilter", url: "https://waterfilterplatform.nl/waterfilter" },
          { name: "Reisfilter", url: "https://waterfilterplatform.nl/waterfilter/reisfilter" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Reisfilter voor water: LifeStraw, Sawyer en Katadyn vergeleken",
          description:
            "Beste reisfilters 2026: LifeStraw, Sawyer Squeeze, Katadyn Pocket en UV-sterilisatie vergeleken per reistype en bestemming.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/waterfilter/reisfilter",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:underline">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>Reisfilter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Reisfilter voor water: LifeStraw, Sawyer en Katadyn vergeleken
          </h1>
          <QuickAnswer answer="Een reisfilter filtert bacterien en parasieten uit oppervlaktewater en bronwater. Voor bestemmingen met virusrisico (Azie, Afrika) is een UV-pen of chemische behandeling nodig als aanvulling. LifeStraw en Sawyer Squeeze zijn de populairste filters voor backpacken en kamperen." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">

        <section className="bg-gray-50 rounded-2xl p-5 mb-10">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#wanneer" className="hover:underline">Wanneer een reisfilter nodig?</a></li>
            <li><a href="#wat-filtert" className="hover:underline">Wat filtert een reisfilter wel/niet?</a></li>
            <li><a href="#technologie" className="hover:underline">Filtertechnologieen</a></li>
            <li><a href="#vergelijking" className="hover:underline">Vergelijking populaire filters</a></li>
            <li><a href="#virusgebieden" className="hover:underline">Strategie voor virusgebieden</a></li>
            <li><a href="#onderhoud" className="hover:underline">Onderhoud en gebruik</a></li>
            <li><a href="#vs-tabletten" className="hover:underline">Reisfilter vs waterzuiveringstabletten</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        <section id="wanneer" className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer heb je een reisfilter nodig?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In veel landen is leidingwater veilig te drinken. Maar zodra je afhankelijk bent van oppervlaktewater, bronwater, rivierwater of onbetrouwbaar lokaal leidingwater, is een reisfilter essentieel. Drie situaties waar een reisfilter standaarduitrusting is:
          </p>
          <div className="space-y-3 mb-4">
            {[
              { situatie: "Ontwikkelingslanden en vierde wereld", desc: "In grote delen van Azie, Afrika en Zuid-Amerika is leidingwater niet betrouwbaar. Bacteriele en parasitaire besmetting is een reeel risico. Een reisfilter voorkomt reizigersdiarree, tyfus en andere watergerelateerde ziekten." },
              { situatie: "Wilderniskamperen en trekken", desc: "Zelfs in afgelegen berggebieden van Europa of Noord-Amerika kan bronwater en beekwater bacterien en protozoa bevatten. Besmetting door dierlijke uitwerpselen stroomopwaarts is een veelvoorkomende oorzaak van Giardia-infectie bij backpackers." },
              { situatie: "Rampenvoorbereiding en noodkit", desc: "Bij overstromingen, aardbeving of stroomuitval kan drinkwater besmet raken. Een reisfilter met lange levensduur (Sawyer: 378.000L) is een slimme aanvulling in een noodpakket." },
            ].map((item) => (
              <div key={item.situatie} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1 text-sm">{item.situatie}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="wat-filtert" className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat filtert een reisfilter wel en niet?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold text-green-700 mb-2 text-sm">Wel gefilterd</h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">&#10003;</span> Bacterien: E. coli, Salmonella, Cholera</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">&#10003;</span> Protozoa: Giardia, Cryptosporidium</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">&#10003;</span> Sediment en troebel water</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">&#10003;</span> Chloor en chloorsmaken (actief kool)</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold text-red-600 mb-2 text-sm">Niet gefilterd (standaard reisfilter)</h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">&times;</span> Virussen: norovirus, hepatitis A, rotavirus</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">&times;</span> Chemische stoffen: pesticiden, herbiciden</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">&times;</span> Zware metalen: lood, arseen</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">&times;</span> Opgeloste zouten en mineralen</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm">
            Virussen zijn 0,02-0,09 micron groot: te klein voor mechanische filters (0,1-0,2 micron). Voor virusrisico heb je UV-sterilisatie of chemische behandeling nodig als aanvulling op het mechanische filter.
          </p>
        </section>

        <CTABanner context="osmose" />

        <section id="technologie" className="mt-10 mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Filtertechnologieen voor reisfilters</h2>
          <div className="space-y-4 mb-4">
            {[
              {
                tech: "Hol-vezel-membraan (hollow fiber)",
                merken: "LifeStraw, Sawyer Squeeze",
                porie: "0,1-0,2 micron",
                pros: "Ultralight, geen batterijen, lange levensduur, terugspoel-mogelijk",
                cons: "Geen virussen, langzame doorstroom bij fijn sediment",
              },
              {
                tech: "Keramisch filter",
                merken: "Katadyn Pocket, Katadyn Vario",
                porie: "0,2 micron",
                pros: "Zeer robuust, lang mee, geen vervanging nodig voor membraan",
                cons: "Zwaarder (270g+), duurder, hogere aanschafprijs",
              },
              {
                tech: "Actief koolstoffilter",
                merken: "Als aanvulling in meerdere systemen",
                porie: "Geen mechanische werking",
                pros: "Verbetert smaak, verwijdert chloor en organische stoffen",
                cons: "Verwijdert geen bacterien of virussen op zichzelf",
              },
              {
                tech: "UV-sterilisatie",
                merken: "SteriPen Ultra, SteriPen Adventurer",
                porie: "Geen membraan",
                pros: "Doodt virussen, bacterien en protozoa, snel (60-90 sec per liter)",
                cons: "Werkt alleen in helder water, batterij nodig, geen sedimentwerking",
              },
            ].map((item) => (
              <div key={item.tech} className="border border-gray-100 rounded-xl p-4">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <p className="font-semibold text-gray-900 text-sm">{item.tech}</p>
                  <span className="text-xs bg-[#E0F2FE] text-[#005F8A] font-semibold px-2 py-0.5 rounded-full">{item.porie}</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">Merken: {item.merken}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div><span className="text-green-700 font-medium">Voordelen: </span><span className="text-gray-600">{item.pros}</span></div>
                  <div><span className="text-red-600 font-medium">Beperkingen: </span><span className="text-gray-600">{item.cons}</span></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="vergelijking" className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vergelijking populaire reisfilters 2026</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Filter</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Gewicht</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Prijs</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Bacterien</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Virussen</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Levensduur</th>
                </tr>
              </thead>
              <tbody>
                {filterVergelijking.map((r, i) => (
                  <tr key={r.filter} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-900">{r.filter}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{r.gewicht}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.prijs}</td>
                    <td className="py-2.5 px-3 text-center text-green-700 font-semibold">{r.bacterien}</td>
                    <td className={`py-2.5 px-3 text-center font-semibold ${r.virussen === "Ja" ? "text-green-700" : "text-red-500"}`}>{r.virussen}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600 text-xs">{r.levensduur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm">
            De Sawyer Squeeze heeft de langste levensduur en de beste prijs-kwaliteitsverhouding voor westerse wildernis. De Grayl Geopress en SteriPen bieden ook virusbescherming, wat essentieel is bij Aziatisch en Afrikaans oppervlaktewater.
          </p>
        </section>

        <section id="virusgebieden" className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Strategie voor bestemmingen met virusrisico</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In Azie, Afrika, Midden-Amerika en delen van Oost-Europa zijn watergebonden virussen (norovirus, hepatitis A, rotavirus) een reeel risico. Standaard hol-vezel reisfilters verwijderen deze niet. De beste strategie is een combinatie van mechanisch filter en virusbehandeling:
          </p>
          <div className="space-y-3 mb-4">
            {[
              {
                stap: "Stap 1: Pre-filter voor sediment",
                desc: "Gebruik een bandana of koffiefilter om grof sediment te verwijderen voordat je het water door het reisfilter haalt. Dit verlengt de levensduur van het filter.",
              },
              {
                stap: "Stap 2: Mechanisch filter (Sawyer of LifeStraw)",
                desc: "Verwijdert bacterien (E. coli, Salmonella, Cholera) en protozoa (Giardia, Cryptosporidium). Het water is nu veilig voor 99,9999% van de bacteriologische risicos.",
              },
              {
                stap: "Stap 3: UV-sterilisatie (SteriPen) of chemische behandeling",
                desc: "Behandel het gefilterde water aanvullend met UV-licht (60-90 seconden per liter) of chloordioxide-tabletten. Dit doodt virussen die door het mechanische filter zijn gegaan.",
              },
            ].map((item) => (
              <div key={item.stap} className="flex gap-3 items-start border border-gray-100 rounded-xl p-4">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5 text-lg">&#9654;</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.stap}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
            <strong>Alternatief:</strong> De Grayl Geopress combineert mechanisch filteren en virusverwijdering in een drukflaconsysteem. Ideaal voor reizigers die geen twee apparaten willen meenemen. Beperkter levensduur (300L per cartridge) maar vrijwel universele bescherming.
          </div>
        </section>

        <section id="onderhoud" className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderhoud van een reisfilter</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Correct onderhoud bepaalt voor een groot deel hoe lang en hoe betrouwbaar je reisfilter presteert. De basisregels:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {[
              { tip: "Terugspoelen (Sawyer)", desc: "Spoel het hol-vezel membraan na gebruik terug met de meegeleverde injectiespuit. Dit verwijdert opgehoopte deeltjes en herstelt de doorstroomsnelheid." },
              { tip: "Drogen voor opslag", desc: "Bewaar het filter altijd droog. Schimmels en bacterien kunnen groeien in een vochtig filter. Laat doorluchten voor je het opbergt." },
              { tip: "Nooit laten bevriezen", desc: "Bevriezing scheurt de fijne holle vezels. Een bevroren hol-vezel filter is onherstelbaar beschadigd. Draag het filter dicht op het lichaam bij vriestochten." },
              { tip: "Controleer doorstroomsnelheid", desc: "Een sterk afgenomen doorstroomsnelheid is een teken dat het filter verzadigd is. Terugspoelen herstelt dit. Als terugspuien niet helpt, is vervanging noodzakelijk." },
            ].map((item) => (
              <div key={item.tip} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1 text-sm">{item.tip}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="vs-tabletten" className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Reisfilter vs waterzuiveringstabletten</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Waterzuiveringstabletten (chloordioxide, jodium, natriumhypochloriet) zijn een lichtgewicht alternatief voor mechanische reisfilters. Ze doden bacterien, protozoa en virussen, maar hebben enkele nadelen vergeleken met een filter:
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[400px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Kenmerk</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Tabletten</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Mechanisch filter</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { kenmerk: "Virusbescherming", tabletten: "Ja", filter: "Nee (standaard)" },
                  { kenmerk: "Wachttijd", tabletten: "30 min - 4 uur", filter: "Direct" },
                  { kenmerk: "Smaak", tabletten: "Chemisch residu", filter: "Neutraal" },
                  { kenmerk: "Gewicht", tabletten: "Zeer licht", filter: "42-450g" },
                  { kenmerk: "Kosten op langere termijn", tabletten: "Doorlopend", filter: "Eenmalig" },
                  { kenmerk: "Sediment verwijdering", tabletten: "Nee", filter: "Ja" },
                ].map((r, i) => (
                  <tr key={r.kenmerk} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="py-2.5 px-3 text-gray-800">{r.kenmerk}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{r.tabletten}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{r.filter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm">
            Voor kortere tochten in laag-risicogebieden zijn tabletten een handige noodoplossing. Voor meerdaagse tochten is een mechanisch filter meer comfortabel en goedkoper op de langere termijn. Combineer beide voor maximale bescherming.
          </p>
        </section>

        <CTABanner context="osmose" />

        <section id="faq" className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over reisfilters</h2>
          <section className="mt-4">
            {faqItems.map((item, i) => (
              <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
                <p className="mt-2 text-gray-700">{item.answer}</p>
              </details>
            ))}
          </section>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/waterfilter", label: "Waterfilter: alle types en toepassingen" },
              { href: "/waterfilter/uv-sterilisatie", label: "UV-sterilisatie: werking en toepassing" },
              { href: "/omgekeerde-osmose/kopen", label: "Omgekeerde osmose filter kopen" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>&rarr;</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
