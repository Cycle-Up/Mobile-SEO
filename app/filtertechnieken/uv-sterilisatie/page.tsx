import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "UV-sterilisatie waterfilter: werking, dosis en toepassingen",
  description: "UV-sterilisatie vernietigt bacteriën, virussen en Giardia zonder chemicaliën. Werking UV-C licht, dosis 40 mJ/cm2, combinatie met sediment- en koolfilter.",
  alternates: { canonical: "https://waterfilterplatform.nl/filtertechnieken/uv-sterilisatie" },
  openGraph: {
    title: "UV-sterilisatie waterfilter: werking, dosis en toepassingen",
    description: "UV-sterilisatie vernietigt bacteriën, virussen en Giardia zonder chemicaliën. Werking UV-C licht, dosis 40 mJ/cm2, combinatie met sediment- en koolfilter.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Hoe werkt UV-sterilisatie voor water?",
    answer: "Een UV-sterilisator zendt UV-C licht uit op een golflengte van 254 nanometer. Dit is de golflengte waarbij DNA en RNA van micro-organismen maximaal worden aangetast. Het UV-licht penetreert de celwand van bacterien, virussen en protozoa en beschadigt hun genetisch materiaal zodanig dat ze zich niet meer kunnen vermenigvuldigen. Er worden geen chemicalieen toegevoegd en het water verandert niet van samenstelling.",
  },
  {
    question: "Welke micro-organismen doodt UV-sterilisatie?",
    answer: "UV-sterilisatie is effectief tegen bacterien zoals E. coli, Legionella en Salmonella (99,99%+ reductie), virussen zoals norovirus, rotavirus en hepatitis A (99,99%+ reductie) en protozoa zoals Giardia lamblia en Cryptosporidium parvum (ook resistent tegen chloor). Cryptosporidium en Giardia zijn chloorresistent maar bijzonder gevoelig voor UV-licht, wat UV een uniek voordeel geeft ten opzichte van chemische desinfectie.",
  },
  {
    question: "Wat is de vereiste UV-dosis voor veilig drinkwater?",
    answer: "De NSF/ANSI 55 klasse A standaard vereist een minimale UV-dosis van 40 mJ/cm² (millijoule per vierkante centimeter) gemeten bij het einde van de lamplevensuur. Bij deze dosis wordt een reductie van 4 log (99,99%) voor bacterien en virussen bereikt. Klasse B-systemen (10-16 mJ/cm²) zijn alleen geschikt als aanvullende behandeling en niet voor water van onbekende microbiologische kwaliteit.",
  },
  {
    question: "Werkt UV-sterilisatie in troebel water?",
    answer: "Nee, UV-sterilisatie vereist helder water. Turbiditiet (troebelheid) absorbeert en verstrooide het UV-licht, waardoor de effectieve dosis sterk daalt. NSF/ANSI 55 stelt de turbiditeitsgrens op maximaal 1 NTU (Nephelometric Turbidity Unit). Water met hogere turbiditeit moet eerst worden voorgefilterd met een sedimentfilter. Opgeloste stoffen zoals ijzer (boven 0,3 mg/L) en mangaan (boven 0,05 mg/L) verminderen ook de UV-transmissie.",
  },
  {
    question: "Verwijdert UV-sterilisatie ook chemicalieen, nitraat of PFAS?",
    answer: "Nee. UV-sterilisatie is uitsluitend gericht op micro-organismen. Het verwijdert geen chemicalieen, zware metalen, nitraat, PFAS, lood, kalk of andere opgeloste stoffen. UV-sterilisatie is een microbiologische barriere, geen chemische zuiveringstechniek. Voor verwijdering van chemische verontreinigingen is een aanvullend systeem zoals omgekeerde osmose of actief kool nodig.",
  },
  {
    question: "Hoe lang gaat een UV-lamp mee?",
    answer: "De meeste UV-lampen voor waterbehandeling hebben een nominale levensduur van 8.000 tot 12.000 uur, wat overeenkomt met circa een jaar bij continu gebruik. Na deze periode daalt de UV-output onder het vereiste niveau, ook al gloeit de lamp nog. Vervang de lamp jaarlijks of volgens de richtlijn van de fabrikant, ongeacht of de lamp nog zichtbaar brandt. Sommige systemen hebben een UV-dosismonitor die aangeeft wanneer vervanging nodig is.",
  },
  {
    question: "Is UV-sterilisatie geschikt voor putwater?",
    answer: "Ja, UV-sterilisatie is een populaire keuze voor putwater en bronwater met microbiologische risicos. Putwater is niet onderworpen aan drinkwaternormen en kan E. coli, coliformen, Giardia en andere ziekteverwekkers bevatten. Een typisch systeem voor putwater combineert een sedimentfilter, een actief koolfilter en een UV-sterilisator als laatste stap. Bij hoog ijzer- of mangaangehalte is voorbehandeling nodig voor UV effectief werkt.",
  },
  {
    question: "Wat is het verschil tussen UV-sterilisatie en ultrafiltratie voor micro-organismen?",
    answer: "Ultrafiltratie (UF) verwijdert bacterien en protozoa mechanisch via een membraan van 0,01-0,1 micron. Virussen (0,02-0,3 micron) passeren UF-membranen echter gedeeltelijk. UV-sterilisatie vernietigt zowel bacterien als virussen en protozoa, ongeacht de grootte. UV is effectiever voor virussen en Cryptosporidium; UF biedt een absolute fysieke barriere voor bacterien. Combinatie van beide geeft de hoogste microbiologische zekerheid.",
  },
];

const articleSchema = {
  "@type": "Article",
  headline: "UV-sterilisatie waterfilter: werking, dosis en toepassingen",
  description: "UV-sterilisatie vernietigt bacteriën, virussen en Giardia zonder chemicaliën. Werking UV-C licht, dosis 40 mJ/cm2, combinatie met sediment- en koolfilter.",
  datePublished: "2026-05-18",
  dateModified: "2026-05-18",
  url: "https://waterfilterplatform.nl/filtertechnieken/uv-sterilisatie",
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

export default function UvSterilisatiePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfilterplatform.nl" },
              { "@type": "ListItem", position: 2, name: "Filtertechnieken", item: "https://waterfilterplatform.nl/filtertechnieken" },
              { "@type": "ListItem", position: 3, name: "UV-sterilisatie", item: "https://waterfilterplatform.nl/filtertechnieken/uv-sterilisatie" },
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
          <span>UV-sterilisatie</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          UV-sterilisatie waterfilter: werking, dosis en toepassingen
        </h1>

        <QuickAnswer answer="UV-sterilisatie gebruikt UV-C licht op 254 nm om het DNA van micro-organismen te vernietigen. Het is effectief tegen bacterien, virussen en Giardia/Cryptosporidium (99,99%+). Vereiste dosis: 40 mJ/cm² (NSF/ANSI 55 klasse A). UV verwijdert geen chemicalieen, nitraat, lood of PFAS. Vereist helder water (max 1 NTU). Combineer met sedimentfilter en koolfilter voor veilig putwater." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Werking: UV-C licht vernietigt DNA van micro-organismen
        </h2>
        <p className="text-gray-700 mb-4">
          UV-sterilisatie maakt gebruik van ultraviolet licht in het UV-C spectrum, specifiek bij een golflengte van 254 nanometer. Op deze golflengte absorbeert het DNA en RNA van micro-organismen het licht maximaal. De energieoverdracht veroorzaakt fotochemische schade aan de nucleinezuren: thymine-dimeren worden gevormd, die de DNA-replicatie blokkeren. Het gevolg is dat de micro-organismen zich niet meer kunnen vermenigvuldigen en na verloop van tijd afsterven.
        </p>
        <p className="text-gray-700 mb-4">
          Anders dan chloor of ozon voegt UV-sterilisatie geen chemicalieen toe aan het water. Er ontstaan geen desinfectiebijproducten (DBP&apos;s) en de smaak, geur of samenstelling van het water wordt niet beinvloed. De enige vereiste is dat het water de UV-reactor passeert met voldoende verblijftijd om de minimale UV-dosis te ontvangen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat vernietigt UV-sterilisatie?
        </h2>
        <div className="border border-green-200 bg-green-50 rounded-xl p-4 mb-6">
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>Bacterien (E. coli, Legionella, Salmonella, coliformen):</strong> 99,99%+ reductie bij 40 mJ/cm²</li>
            <li><strong>Virussen (norovirus, rotavirus, hepatitis A):</strong> 99,99%+ reductie; effectiever dan chloor bij dezelfde dosis</li>
            <li><strong>Giardia lamblia:</strong> 99,99%+ reductie; chloorresistent, maar bijzonder gevoelig voor UV</li>
            <li><strong>Cryptosporidium parvum:</strong> 99,99%+ reductie; chloorresistent parasiet die ook met UV effectief wordt gedesinfecteerd</li>
            <li><strong>Schimmels en algen:</strong> effectief bij standaard UV-doses</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat doet UV-sterilisatie NIET?
        </h2>
        <div className="border border-red-200 bg-red-50 rounded-xl p-4 mb-6">
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>Chemicalieen, pesticiden, herbiciden:</strong> UV heeft geen effect op opgeloste chemische verbindingen</li>
            <li><strong>Nitraat en nitriet:</strong> anorganische ionen worden niet beinvloed door UV-licht</li>
            <li><strong>Lood, arseen, PFAS en zware metalen:</strong> voor chemische verontreinigingen is <Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> of ionenwisseling nodig</li>
            <li><strong>Kalk (waterhardheid):</strong> calcium en magnesium worden niet aangetast door UV</li>
            <li><strong>Sediment en troebelheid:</strong> UV vermindert troebelheid niet; een sedimentfilter is een vereiste voorfase</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          UV-dosis: 40 mJ/cm² als norm
        </h2>
        <p className="text-gray-700 mb-4">
          De effectiviteit van UV-sterilisatie wordt uitgedrukt in UV-dosis: de hoeveelheid UV-energie die het water ontvangt, gemeten in millijoule per vierkante centimeter (mJ/cm²). De dosis is het product van de UV-intensiteit (mW/cm²) en de verblijftijd in de reactor (seconden).
        </p>
        <p className="text-gray-700 mb-4">
          De internationale standaard NSF/ANSI 55 klasse A vereist een minimale UV-dosis van 40 mJ/cm², gemeten aan het einde van de nominale lamplevensuur (worst-case scenario). Bij deze dosis worden bacterien, virussen en protozoa met ten minste 4 log (99,99%) gereduceerd. Klasse B-systemen (10-16 mJ/cm²) zijn uitsluitend geschikt als aanvullende behandeling van al behandeld water van bekende kwaliteit.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vereist helder water: turbiditeit max 1 NTU
        </h2>
        <p className="text-gray-700 mb-4">
          UV-sterilisatie is alleen effectief in helder water. Deeltjes en opgeloste stoffen absorberen en verstrooien het UV-licht, waardoor de effectieve dosis die de micro-organismen bereikt sterk daalt. NSF/ANSI 55 stelt de maximale turbiditeit op 1 NTU. Water boven dit niveau moet eerst worden voorgefilterd.
        </p>
        <p className="text-gray-700 mb-4">
          Ook opgeloste stoffen verminderen de UV-transmissie: ijzer boven 0,3 mg/L, mangaan boven 0,05 mg/L, humusverbindingen en tanninen absorberen UV-licht. Bij putwater of bronwater is het verstandig de UV-transmissie (UVT%) van het bronwater te meten. Een UVT van minder dan 75% bij 254 nm vereist voorbehandeling of een krachtiger UV-systeem.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Toepassingen: putwater, regenwaterbehandeling, nabehandeling
        </h2>
        <p className="text-gray-700 mb-4">
          UV-sterilisatie wordt het meest toegepast in situaties waar microbiologische risicos aanwezig zijn:
        </p>
        <ul className="text-sm text-gray-700 mb-4 space-y-2">
          <li><strong>Putwater en boorwater:</strong> niet onderworpen aan drinkwaternormen; kan E. coli, coliformen en andere bacterien bevatten door grondwatervervuiling of mankementen aan de put</li>
          <li><strong>Regenwaterbehandeling:</strong> regenwater is microbiologisch onbetrouwbaar; UV is een standaard component in regenwaterinstallaties voor huishoudelijk gebruik</li>
          <li><strong>Nabehandeling na omgekeerde osmose:</strong> bij gebruik van een opslagvat kan bacteriegroei optreden; UV als eindstap na het opslagvat elimineert dit risico</li>
          <li><strong>Vakantiehuizen en seizoensgebonden gebruik:</strong> bij lang stilstaand water in leidingen is heractivering van bacterien mogelijk; UV biedt continue bescherming</li>
          <li><strong>Gebieden met meldingen van waterverontreiniging:</strong> tijdelijke UV-installatie als extra veiligheidsmaatregel</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Combinatie met andere technieken: microbiologisch veilig putwater
        </h2>
        <p className="text-gray-700 mb-4">
          UV-sterilisatie wordt zelden als enige behandelingstechniek gebruikt. Voor microbiologisch veilig putwater of bronwater wordt de volgende combinatie aanbevolen:
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2 text-sm">
          <li><strong>Sedimentfilter (5-10 micron):</strong> verwijdert deeltjes die de UV-transmissie verminderen en de koolfilter verstoppen</li>
          <li><strong><Link href="/filtertechnieken/actief-kool" className="text-[#005F8A] underline">Actief koolfilter (CTO):</Link></strong> verwijdert organische verbindingen, humus en tanninen die UV-transmissie beperken; verbetert tevens smaak en geur</li>
          <li><strong>UV-sterilisator (40 mJ/cm², NSF/ANSI 55 klasse A):</strong> vernietigt bacterien, virussen en protozoa in het voorbehandelde, heldere water</li>
        </ol>
        <p className="text-gray-700 mb-4">
          Voor situaties waar ook chemische verontreinigingen zoals nitraat, PFAS of zware metalen aanwezig zijn, kan een <Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmosesysteem</Link> worden gecombineerd met UV-sterilisatie als nabehandeling. Raadpleeg voor complexe putwaterproblemen een gecertificeerd drinkwaterinstallateur.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          UV vs ultrafiltratie: vergelijking voor micro-organismen
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Micro-organisme</th>
                <th className="border border-gray-300 px-3 py-2 text-left">UV-sterilisatie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Ultrafiltratie (UF)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Chloor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Bacterien</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99,99%+</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99,99%+</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99,99%+</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Virussen</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99,99%+</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600 font-medium">Beperkt (te klein)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99,99%+</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Giardia</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99,99%+</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99,99%+</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600 font-medium">Wisselend</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Cryptosporidium</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99,99%+</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99,99%+</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">Chloorresistent</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Chemische stoffen</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">Geen effect</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">Geen effect</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">Geen effect</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over UV-sterilisatie</h2>
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
          <Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose techniek</Link>,{" "}
          <Link href="/filtertechnieken/actief-kool" className="text-[#005F8A] underline">actief kool waterfilter</Link>,{" "}
          <Link href="/filtertechnieken/ultrafiltratie" className="text-[#005F8A] underline">ultrafiltratie membraantechniek</Link>,{" "}
          <Link href="/stoffen-in-drinkwater/microbiologisch" className="text-[#005F8A] underline">microbiologische veiligheid drinkwater</Link> en{" "}
          <Link href="/filtertechnieken/vergelijking" className="text-[#005F8A] underline">filtervergelijking tabel</Link>.
        </p>
      </main>
    </>
  );
}
