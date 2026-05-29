import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: "Waterfilter vs waterontharder: verschil, kosten en wanneer welke keuze?",
  description:
    "Osmosefilter of waterontharder? Verschil in werking, toepassingen, kosten en wat elk systeem wel en niet verwijdert.",
  alternates: { canonical: "https://waterfilterplatform.nl/vergelijken/waterfilter-vs-waterontharder" },
  openGraph: {
    title: "Waterfilter vs waterontharder: verschil, kosten en wanneer welke keuze?",
    description:
      "Osmosefilter of waterontharder? Verschil in werking, toepassingen, kosten en wat elk systeem wel en niet verwijdert.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Verwijdert een waterontharder PFAS?",
    answer:
      "Nee. Een waterontharder verwijdert via ionenwisseling calciumionen en magnesiumionen en vervangt die door natriumionen. PFAS, lood, nitraat en andere chemische verontreinigingen worden niet effectief verwijderd door ionenwisseling. Daarvoor is een osmosefilter of gespecialiseerd actief-koolfilter (NSF 401) nodig.",
  },
  {
    question: "Moet ik osmosewater ook ontkalken?",
    answer:
      "Nee. Een osmosefilter verwijdert al 95-99% van de hardheid (calcium en magnesium). Het geproduceerde osmosewater heeft een TDS van 1-20 mg/L en bevat nauwelijks kalk meer. Een waterontharder is overbodig als post-behandeling van osmosewater.",
  },
  {
    question: "Is onthard water goed om te drinken?",
    answer:
      "Onthard water bevat meer natrium dan gewoon kraanwater: een waterontharder vervangt calcium- en magnesiumionen door natriumionen. Bij normaal hard water (15-20 dH) stijgt het natriumgehalte met ca. 50-100 mg/L. Voor mensen met een natriumbeperkt dieet (hypertensie, hartfalen, nierproblemen) is dit relevant. Veel fabrikanten adviseren een aparte onbehandelde kraan of osmosefilter voor drinkwater.",
  },
  {
    question: "Hoeveel zout gebruikt een waterontharder?",
    answer:
      "Een gemiddeld huishouden (4 personen) verbruikt 8-20 kg regeneratiezout per maand, afhankelijk van de waterhardheid en het waterverbruik. Bij 20 dH en 200 liter/dag is het zoutverbruik ca. 10-15 kg/maand. Zout kost ca. 0,15-0,30 euro/kg in bulkverpakking, wat neerkomt op 18-54 euro/maand aan zoutkosten alleen.",
  },
  {
    question: "Kan ik een waterontharder combineren met een osmosefilter?",
    answer:
      "Ja, en in harde watergebieden is dit de meest complete oplossing. De waterontharder beschermt de volledige huisinstallatie (wasmachine, vaatwasser, boiler, leidingen) tegen kalkaanslag. De osmosefilter op het keukenpoint verwijdert het extra natrium dat de ontharder toevoegt, plus eventuele andere verontreinigingen. Het osmosemembraan heeft bovendien minder snel onderhoud nodig omdat het zachte water minder snel verstopt.",
  },
];

export default function WaterfilterVsWaterOntharderPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Vergelijken", url: "https://waterfilterplatform.nl/vergelijken" },
          { name: "Waterfilter vs waterontharder", url: "https://waterfilterplatform.nl/vergelijken/waterfilter-vs-waterontharder" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:underline">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Waterfilter vs waterontharder</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter vs waterontharder: verschil, kosten en wanneer welke keuze?
          </h1>
          <QuickAnswer answer="Een waterontharder verwijdert kalk door calciumionen te vervangen met natriumionen - voor het volledige huis. Een osmosefilter verwijdert vrijwel alles (inclusief kalk) maar alleen op het kraanpunt. In harde watergebieden is een combinatie van beide de meest complete oplossing." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Wat doet een waterontharder?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een waterontharder werkt via ionenwisseling. De installatieunit bevat een hars gevuld met
            natriumionen (Na+). Wanneer hard water door de hars stroomt, worden de calciumionen (Ca2+)
            en magnesiumionen (Mg2+) die de hardheid veroorzaken, aangetrokken door de hars en ingewisseld
            voor natriumionen. Het resultaat is zacht water met een hardheid van 0-5 dH.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Omdat een waterontharder op de hoofdwaterleiding wordt geplaatst, behandelt het 100% van het
            huishoudwater: douchewater, waswater, vaatwasserwater en keukenwater. Dit verlengt de
            levensduur van verwarmingselementen (vaatwasser, wasmachine, boiler, geiser) significant,
            vermindert zeepverbruik met 30-50% en elimineert kalkaanslag in de douche en op kranen.
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Wat doet een osmosefilter?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een osmosefilter werkt via een semipermeabel membraan met porieen van 0,0001 micron. Onder
            waterdruk (3-8 bar) worden vrijwel alle opgeloste stoffen tegengehouden: calcium, magnesium,
            natrium, kalium, nitraat, lood, PFAS en microplastics. Het geproduceerde water heeft een
            TDS van 1-20 mg/L.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een osmosefilter wordt geplaatst als point-of-use systeem, typisch onder de gootsteen met
            een aparte osmosekraan. Het behandelt alleen het water dat via die kraan stroomt: drink-
            en kookwater. De rest van het huishoudwater (douche, wasmachine) blijft onbehandeld.
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Vergelijkingstabel</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Eigenschap</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Waterontharder</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Osmosefilter</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Kalk / hardheid verwijderen", "Ja (ionenwisseling)", "Ja (membraan, 95-99%)"],
                  ["PFAS-verwijdering", "Nee", "Ja (90-99%)"],
                  ["Lood verwijderen", "Nee", "Ja (95-99%)"],
                  ["Nitraat verwijderen", "Nee", "Ja (85-95%)"],
                  ["Natrium in water", "Verhoogd (+50-150 mg/L)", "Verlaagd (TDS 1-20 mg/L)"],
                  ["Dekkingsgebied", "Volledig huis (100%)", "Kraanpunt alleen"],
                  ["Drinkwaterkwaliteit", "Indirect (geen kalk)", "Direct (vrijwel alle stoffen)"],
                  ["Aanschafkosten", "800-2000 euro", "400-700 euro"],
                ].map(([eigenschap, ontharder, osmose], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{eigenschap}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{ontharder}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{osmose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Wanneer kies je welk systeem?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="border border-[#005F8A]/20 rounded-xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-semibold text-[#005F8A] mb-2">Hardheidsoverlast in hele huis</h3>
              <p className="text-sm text-gray-700">Kalkaanslag op douche, wasmachine, vaatwasser, boiler: kies een waterontharder. Beschermt alle apparaten en elimineert poetsen van kalk.</p>
            </div>
            <div className="border border-[#005F8A]/20 rounded-xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-semibold text-[#005F8A] mb-2">Drinkwaterkwaliteit prioriteit</h3>
              <p className="text-sm text-gray-700">PFAS, lood of nitraat in uw water, of wil u zo zuiver mogelijk drinkwater: kies een osmosefilter op het kraanpunt.</p>
            </div>
            <div className="border border-[#005F8A]/20 rounded-xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-semibold text-[#005F8A] mb-2">Harde watergebieden</h3>
              <p className="text-sm text-gray-700">Boven 15 dH en drinkwaterkwaliteit ook belangrijk: combineer ontharder voor huis met osmose voor drinken. Meest complete bescherming.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Nadelen waterontharder</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een waterontharder heeft enkele relevante nadelen die bij de beslissing meegewogen moeten worden:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Natriumtoevoeging:</strong> Onthard water bevat meer natrium. Bij 20 dH stijgt het natriumgehalte met ca. 80-100 mg/L. Voor mensen met hypertensie of natriumbeperkt dieet is dit relevant.</li>
            <li><strong>Zoutverbruik:</strong> 8-20 kg regeneratiezout per maand voor een gemiddeld gezin, kosten ca. 18-54 euro/maand.</li>
            <li><strong>Brine-afvalwater:</strong> Elke regeneratiecyclus spoelt een geconcentreerde zoutoplossing (brine) naar het riool. In waterschaarse regio's is dit een milieunadeel.</li>
            <li><strong>Geen verontreinigingen verwijderd:</strong> PFAS, lood, nitraat en medicijnresten blijven in het water na onthardering.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Kosten vergeleken</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Kostenpost</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Waterontharder</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Osmosefilter</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Aanschaf + installatie", "800-2000 euro", "400-700 euro"],
                  ["Jaarlijks verbruiksmateriaal", "100-200 euro/jaar (zout)", "80-150 euro/jaar (filters)"],
                  ["Onderhoud / service", "50-100 euro/jaar", "Minimaal, zelf te doen"],
                  ["Totaal 5 jaar (TCO)", "1750-4000 euro", "800-1450 euro"],
                ].map(([post, ontharder, osmose], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{post}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{ontharder}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{osmose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Combinatie ontharder + osmose</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In harde watergebieden als Limburg, Zeeland en delen van Noord-Brabant en Utrecht is de
            combinatie van een waterontharder en een osmosefilter populair. De logica is complementair:
            de waterontharder behandelt het volledige huishoudwater (beschermt apparaten, bespaart op zeep
            en onderhoudskosten), terwijl de osmosefilter op de keuken het drinkwater verder zuivert.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een bijkomend voordeel: zacht inkomend water (na de ontharder) heeft een positief effect op de
            levensduur van het osmosemembraan. Kalk is een van de voornaamste oorzaken van
            membraanverstoring (scaling). Met voorbehandeld zacht water gaat het membraan langer mee en
            zijn de filterprestaties stabieler.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Let op: een osmosefilter na een waterontharder verwijdert ook het toegevoegde natrium van de
            ontharder, wat drinkwater oplevert dat vergelijkbaar is met bronwater in termen van
            mineralengehalte. Sommige gebruikers kiezen daarna voor remineralisatie om
            calcium en magnesium gecontroleerd terug toe te voegen.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="mt-10 border-t border-gray-100 pt-8">
          <h2 className="text-lg font-semibold text-[#003F5C] mb-4">Gerelateerde pagina&apos;s</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Vergelijken", href: "/vergelijken" },
              { label: "Waterhardheid", href: "/waterhardheid" },
              { label: "Ionenwisseling", href: "/filtertechnieken/ionenwisseling" },
              { label: "Omgekeerde osmose", href: "/omgekeerde-osmose" },
              { label: "Keuzehulp hard water", href: "/keuzehulp/hard-water" },
              { label: "Kalk en mineralen in drinkwater: calcium en magnesium", href: "/stoffen-in-drinkwater/kalk-mineralen" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 bg-[#E0F2FE] text-[#005F8A] font-medium text-sm px-4 py-2 rounded-lg hover:bg-[#005F8A] hover:text-white transition-colors"
              >
                {link.label} &rarr;
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kalk in drinkwater: oorzaak hard water</h3>
              <p className="text-sm text-gray-600">Hoe kalk ontstaat en het verschil tussen kalkbestrijding (ontharder) en filtratie (filter).</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling: waterontharder uitleg</h3>
              <p className="text-sm text-gray-600">Hoe een ionenwisselende ontharder werkt en waarom het iets anders is dan een osmosefilter.</p>
            </Link>
          </div>
        </section>

        <div className="mt-10">
          <CTABanner context="osmose" />
        </div>
      </div>
    </>
  );
}
