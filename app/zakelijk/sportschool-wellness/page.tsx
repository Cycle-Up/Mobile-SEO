import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterfilter voor sportschool en wellness: hydratie, spa en Legionella",
  description:
    "Waterfiltratie voor sportscholen en wellness: drinkwaterfontein, spa-waterbehandeling, Legionella-beheersplan en waterkoeler vs osmose.",
  alternates: { canonical: "https://waterfilterplatform.nl/zakelijk/sportschool-wellness" },
  openGraph: {
    title: "Waterfilter voor sportschool en wellness: hydratie, spa en Legionella",
    description:
      "Waterfiltratie voor sportscholen en wellness: drinkwaterfontein, spa-waterbehandeling, Legionella-beheersplan en waterkoeler vs osmose.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Is een Legionella-beheersplan verplicht voor sportscholen?",
    answer:
      "Ja. Sportscholen met douches worden geclassificeerd als 'prioritaire instelling' onder het Drinkwaterbesluit (bijlage 4). Dit betekent een verplichte risicoanalyse, een schriftelijk beheersplan met beheermaatregelen, en een monsternameschema (minimaal jaarlijks). Bij een whirlpool, stoombad of sauna met waterverstuiving gelden aanvullende eisen. Het beheersplan moet worden opgesteld door of in samenwerking met een gecertificeerde Legionella-adviseur en bewaard worden voor inspectie door de GGD of NVWA.",
  },
  {
    question: "Welk filter is het meest geschikt voor een whirlpool of jacuzzi?",
    answer:
      "Voor een whirlpool of jacuzzi in een wellness of sportschool wordt een combinatie van ontharder + koolstoffilter + UV-sterilisatie aanbevolen. De ontharder voorkomt kalkaanslag op de pomp en verwarmingselement (bij 20+ dH sterk aanbevolen). Het koolstoffilter verwijdert chloor zodat minder irritatie voor de huid en minder chloorlucht. UV-sterilisatie (254 nm) inactiveert Legionella en andere pathogenen. Osmose is optioneel maar verkort de levensduur van het water omdat geminimaliseerd water sneller chemisch onevenwichtig wordt; ga niet tot volledige ontmineralisatie bij openstaande systemem.",
  },
  {
    question: "Wat kost een drinkwaterfontein voor een sportschool?",
    answer:
      "Een vloerstaande drinkwaterfontein op leidingwateraansluiting met koolstoffilter kost 400-1.200 euro aanschaf + 100-200 euro/jaar onderhoud (filtervervanging + reiniging). Een uitgebreidere unit met koud-warm-bruisend-water functie kost 1.200-2.500 euro. Bij meerdere locaties in de sportschool (kleedkamers, fitnessruimte, receptie) zijn 2-4 fonteinen doorgaans voldoende. Totale jaarkosten voor een middelgrote sportschool (±200 leden): 800-2.500 euro, tegenover 3.000-8.000 euro voor flessenwater bij hetzelfde verbruik.",
  },
  {
    question: "Hoe behandel ik spawater zonder chloor?",
    answer:
      "Chloorvrije spawaterbehandeling is mogelijk via: (1) actief zuurstof (kaliumperoxomonosulfaat + waterstofperoxide): effectief tegen bacteriën, geen sterke chloorlucht, geschikt voor binnenruimtes met beperkte ventilatie. (2) Broom (BCDMH): stabieler dan chloor bij hogere watertemperaturen (35-40°C), minder oogirritatie. (3) Zilver/koper-ionisatie: laag chemicaliënverbruik, gecombineerd met minimale chloor- of zuurstofbehandeling. (4) UV + ozon: oxideer organische stoffen en inactiveer pathogenen, maar vereist ook residu-desinfectant in het water. Kies op basis van de temperatuur van het spawater en de bezettingsgraad.",
  },
  {
    question: "Hoe vaak moet ik spawater vervangen?",
    answer:
      "De frequentie van volledig waterwisselen hangt af van de bezetting en het type spa. Als richtlijn geldt: gedeeld gebruik (wellness, sportschool): volledig wisselen elke 1-3 maanden bij professioneel beheer + dagelijkse chemie-controle. Privégebruik (hotel, VIP-zone): elke 3-6 maanden. Na wisselen: tank reinigen, desinfecteren met chloorshock, water opnieuw instellen op pH 7,2-7,6 en desinfectant-niveau. Tussentijds: dagelijks pH en desinfectanteniveau meten; wekelijks totale alkaliniteit en calcium hardheid controleren; maandelijks volledig wateranalyse (TDS, cyanuurniveum, metalen).",
  },
];

export default function SportschoolWellnessPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Zakelijk", url: "https://waterfilterplatform.nl/zakelijk" },
          { name: "Sportschool en wellness", url: "https://waterfilterplatform.nl/zakelijk/sportschool-wellness" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Waterfilter voor sportschool en wellness: hydratie, spa en Legionella",
          description:
            "Waterfiltratie voor sportscholen en wellness: drinkwaterfontein, spa-waterbehandeling, Legionella-beheersplan en waterkoeler vs osmose.",
          datePublished: "2026-05-18",
          url: "https://waterfilterplatform.nl/zakelijk/sportschool-wellness",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/">Home</Link><span className="mx-2">/</span>
            <Link href="/zakelijk">Zakelijk</Link><span className="mx-2">/</span>
            <span>Sportschool en wellness</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter voor sportschool en wellness: hydratie, spa en Legionella
          </h1>
          <QuickAnswer answer="Sportscholen en wellnesscentra hebben te maken met Legionella-risico (verplicht beheerplan bij douches/spa/stoombad), hoge drinkwaterbehoefte (fontein of waterkoeler voor sporters) en spa-waterbehandeling. Een RO-systeem voor spa/sauna verlengt apparatuurlevensduur en vermindert chloorgebruik." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="zakelijk" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Drinkwaterbehoefte in sportscholen</h2>
          <p className="text-gray-700 mb-4">
            Sporters hebben een aanzienlijk hogere waterinname nodig dan kantoormedewerkers:
            0,5-1 liter per uur intensieve training, tegenover 0,5 liter per dag op kantoor.
            Een sportschool met 100 actieve sporters per dag heeft een drinkwatercapaciteit
            van 50-100 liter per dag nodig via fonteinen en waterkoelers — exclusief kleedkamer-
            en sanitairgebruik.
          </p>
          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Drinkwaterfonteinen vs waterkoelers vs flessenwater</h3>
          <p className="text-gray-700 mb-4">
            Sportscholen kiezen traditioneel voor flessenkoelers (jaarlijkse kosten: 3.000-8.000 euro
            voor 150 leden) of stationaire drinkwaterfonteinen op leidingwater (800-2.500 euro/jaar).
            De businesscase voor gefilterd kraanwater is sterk bij sportscholen: sporters waarderen
            koud, fris en schoon water; smaak is doorslaggevend. Een osmose-fontein met koolzuur-
            optie (sparkling water) is een extra service-differentiator die flessenwater volledig
            vervangt. CO2-reductie en duurzaamheidsimago zijn daarnaast steeds meer een marketingargument
            voor sportscholen die zich als &apos;duurzame&apos; aanbieder willen positioneren.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Optie</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aanschaf</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Jaarkosten (150 leden)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kosten/liter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Flessenwater (bezorgd)</td>
                  <td className="border border-gray-300 px-3 py-2">50-200 euro (koeler)</td>
                  <td className="border border-gray-300 px-3 py-2">4.000-9.000 euro</td>
                  <td className="border border-gray-300 px-3 py-2">0,40-1,50 euro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Leidingwaterkoeler (mains-fed)</td>
                  <td className="border border-gray-300 px-3 py-2">400-1.200 euro</td>
                  <td className="border border-gray-300 px-3 py-2">800-2.000 euro</td>
                  <td className="border border-gray-300 px-3 py-2">0,03-0,08 euro</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Osmose-fontein (met bruiswater)</td>
                  <td className="border border-gray-300 px-3 py-2">1.200-2.500 euro</td>
                  <td className="border border-gray-300 px-3 py-2">1.000-2.500 euro</td>
                  <td className="border border-gray-300 px-3 py-2">0,02-0,06 euro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Spa en stoombad: waterbehandeling in detail</h2>
          <p className="text-gray-700 mb-4">
            Spa-waterbehandeling in een professionele wellness is een combinatie van filtratie,
            desinfectie en chemisch evenwicht. Onbehandeld of slecht behandeld spawater is een
            broedplaats voor Legionella, Pseudomonas aeruginosa en andere pathogenen die ernstige
            infecties kunnen veroorzaken.
          </p>
          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Waarom een ontharder voor de spa?</h3>
          <p className="text-gray-700 mb-4">
            Hard water (boven 15 dH) vormt bij verwarming snel kalkaanslag op:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 pl-2">
            <li>Spa-verwarmingselementen (levensduur daalt van 10 naar 3-5 jaar zonder ontharder).</li>
            <li>Pompen en filters van de spa-circulatie.</li>
            <li>Straalmondes (jets) die verstopt raken.</li>
            <li>Glazen en betegelde oppervlakken (witte kalkstrepen).</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Een ontharder vóór de spa-vulleiding (inline of centrale ontharder) betaalt zichzelf
            terug via verlengde apparatuurlevensduur en verminderd chloorverbruik (hard water
            verbruikt meer desinfectant per volume).
          </p>
          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">RO voor stoombad en sauna</h3>
          <p className="text-gray-700 mb-4">
            Stoombadgeneratoren en infraroodsauna-stoomgeneratoren zijn bijzonder gevoelig voor
            mineralen: bij verdamping concentreren alle mineralen tot witte kalkaanslag op de
            verwarmingselementen. Een RO-systeem voor voeding van de stoomgenerator (klein systeem,
            50-200 L/uur, 800-2.500 euro) elimineert dit probleem volledig en verlengt de
            levensduur van dure generatoren (3.000-15.000 euro) met factor 2-3.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Legionella-risicoprofiel voor sportscholen en wellness</h2>
          <p className="text-gray-700 mb-4">
            Een risicobeoordeling per watertoepassing is de basis voor een effectief beheersplan.
            Niet elke watertoepassing heeft hetzelfde Legionella-risico.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Toepassing</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Risico</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kritische factoren</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Meetfrequentie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Kleedkamerdouches</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-700 font-medium">Hoog</td>
                  <td className="border border-gray-300 px-3 py-2">Verstuiving, inademing, 25-45°C</td>
                  <td className="border border-gray-300 px-3 py-2">Kwartaal</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Whirlpool / jacuzzi</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-700 font-medium">Hoog</td>
                  <td className="border border-gray-300 px-3 py-2">Luchtbellen, fijn aerosol, 35-40°C</td>
                  <td className="border border-gray-300 px-3 py-2">Maandelijks</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Stoombad</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">Matig</td>
                  <td className="border border-gray-300 px-3 py-2">Stoom &gt; 60°C doodt Legionella; koele toevoerleiding risicovol</td>
                  <td className="border border-gray-300 px-3 py-2">Jaarlijks</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Sauna (droge)</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Laag</td>
                  <td className="border border-gray-300 px-3 py-2">Hoge temperatuur elimineert bacteriën</td>
                  <td className="border border-gray-300 px-3 py-2">Niet specifiek vereist</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Drinkwaterfonteinen</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">Laag-matig</td>
                  <td className="border border-gray-300 px-3 py-2">Stagnant water bij weinig gebruik</td>
                  <td className="border border-gray-300 px-3 py-2">Jaarlijks</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Koeltoren (klimaat)</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-700 font-medium">Hoog</td>
                  <td className="border border-gray-300 px-3 py-2">Verstuiving, hoge doorstroming omgeving</td>
                  <td className="border border-gray-300 px-3 py-2">Kwartaal</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Wettelijke verplichtingen Legionella (RIVM-richtlijn)</h3>
          <p className="text-gray-700 mb-4">
            Op grond van het Drinkwaterbesluit moeten sportscholen met douches en spa-faciliteiten:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-2">
            <li>Een schriftelijke risicoanalyse laten opstellen (eenmalig, revisie bij verbouwing of na positieve meting).</li>
            <li>Een beheersplan met maatregel- en monsternameschema opstellen en bijhouden.</li>
            <li>Jaarlijks minimaal één Legionella-watermonster laten analyseren door een geaccrediteerd lab (KWR, Eurofins, LaboratoGar).</li>
            <li>Bij een positief resultaat (&gt; 100 KVE/L Legionella pneumophila) onmiddellijk actie ondernemen: RIVM informeren, ruimte sluiten, hoge-temperatuurspoeling of chloorshock uitvoeren.</li>
            <li>Documentatie bewaren voor minimaal 5 jaar voor inspectie.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kosten waterbehandeling voor sportschool en wellness</h2>
          <p className="text-gray-700 mb-4">
            Een realistisch kostenplaatje voor waterbehandeling in een middelgrote sportschool
            (500 m², 300 leden, kleedkamers, 1 whirlpool):
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-2">
            <li><strong>Drinkwaterfonteinen (2-3 stuks):</strong> 1.200-3.600 euro aanschaf, 300-600 euro/jaar onderhoud.</li>
            <li><strong>Ontharder voor spa en douches (centrale unit):</strong> 1.500-4.000 euro aanschaf, 300-600 euro/jaar (zout + onderhoud).</li>
            <li><strong>RO voor stoomgenerator (klein systeem, 100 L/uur):</strong> 1.200-2.500 euro aanschaf, 150-300 euro/jaar.</li>
            <li><strong>Legionella-beheersplan (opstellen):</strong> 800-2.000 euro eenmalig; jaarlijkse bemonstering 400-1.200 euro.</li>
            <li><strong>Totaal eerste jaar:</strong> 5.500-14.000 euro (inclusief eenmalige investeringen).</li>
            <li><strong>Jaarlijks terugkerend (vanaf jaar 2):</strong> 1.500-3.500 euro.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Duurzaamheid: minder plastic, lager energieverbruik</h2>
          <p className="text-gray-700 mb-4">
            Sportscholen zijn vaak actieve duurzaamheidsambassadeurs richting hun leden. De
            overstap van flessenwater naar gefilterd kraanwater heeft directe duurzaamheidsvoordelen:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-2">
            <li>Een sportschool met 300 leden die dagelijks 0,5 liter flessenwater gebruiken: 54.750 flessen per jaar → ca. 5.500 kg CO2 bespaard door overstap op gefilterd kraanwater.</li>
            <li>Minder plastic afval: vermeld de jaarlijkse besparing in de sportschoolnewsletter of op de website als duurzaamheidsindicator.</li>
            <li>Ontharder voor de CV/klimaatinstallatie: kalkaanslag verhoogt het energieverbruik van verwarmingselementen met 10-25% per mm kalklaag; zachter water = lagere energierekening.</li>
            <li>RO voor stoomgenerator elimineert periodiek descalingchemicaliën (zoutzuur, citroenzuur) die anders in het afvalwater terechtkomen.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="mt-8 border-t border-gray-100 pt-6">
          <h2 className="text-lg font-semibold text-[#003F5C] mb-3">Verwante pagina's</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Zakelijk overzicht", href: "/zakelijk" },
              { label: "Waterontharder", href: "/waterontharder" },
              { label: "Ultrafiltratie", href: "/filtertechnieken/ultrafiltratie" },
              { label: "Drinkwaternormen", href: "/drinkwaternormen" },
              { label: "Onderhoud en gebruik", href: "/onderhoud" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm bg-[#E0F2FE] text-[#005F8A] px-3 py-1.5 rounded-lg hover:bg-[#005F8A] hover:text-white transition-colors"
              >
                {l.label} →
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-8">
          <CTABanner context="zakelijk" />
        </div>
      </div>
    </>
  );
}
