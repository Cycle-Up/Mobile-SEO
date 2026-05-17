import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterfilter voor horeca: koffie, ijs, koken en legionella-beheersplan",
  description:
    "Horeca waterfilters voor espresso, ijsmachines en koelinstallaties. NSF-certificering, HACCP-eisen, capaciteitsberekening en onderhoud.",
  alternates: { canonical: "https://waterfilterplatform.nl/zakelijk/horeca" },
  openGraph: {
    title: "Waterfilter voor horeca: koffie, ijs, koken en legionella-beheersplan",
    description:
      "Horeca waterfilters voor espresso, ijsmachines en koelinstallaties. NSF-certificering, HACCP-eisen, capaciteitsberekening en onderhoud.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Is een waterfilter verplicht in een restaurant?",
    answer:
      "Een waterfilter zelf is niet wettelijk verplicht, maar de HACCP-wetgeving verplicht horecaondernemers te aantonen dat het water dat zij gebruiken voor voedselproductie voldoet aan de normen van de Warenwet. Een gedocumenteerd waterfiltersysteem met servicelogboek ondersteunt dit bewijs. Bij gebruik van leidingwater is het risico doorgaans laag; bij eigen put of collectieve installatie is monitoring verplicht.",
  },
  {
    question: "Hoe vaak moet ik het filter bij mijn espressomachine wisselen?",
    answer:
      "Professionele espressomachinefilters (BRITA PURITY, Everpure) hebben een capaciteit van 4.000-15.000 liter afhankelijk van de waterhardheid. Bij gemiddeld gebruik van 200 koppen koffie per dag (ca. 3 liter water) is dat 3-15 maanden. Controleer de filterindicator op het hoofd of gebruik de leverancierscalculator op basis van uw lokale waterhardheid.",
  },
  {
    question: "Welk filter gebruik ik voor mijn ijsmachine?",
    answer:
      "IJsmachines zijn gevoelig voor kalk en smaakoverdracht. Aanbevolen: een combinatie van sedimentfilter (5 micron) en koolstofblokfilter. Bij harde gebieden (boven 15 dH) voeg een onthardingselement toe. Let op NSF/ANSI 42 of NSF 53 certificering voor voedselcontact.",
  },
  {
    question: "Moet ik als horecaondernemer een Legionella-plan hebben?",
    answer:
      "Ja, als uw bedrijf een risico-installatie heeft: douches voor personeel, spa of wellness, vernevelingsinstallaties, fonteinen of andere installaties waarbij wateraërosol vrijkomt. Een eenvoudig restaurant zonder deze installaties valt buiten de verplichting. Neem contact op met uw GGD of een gecertificeerd Legionella-adviesbureau.",
  },
  {
    question: "Zijn er subsidies voor zakelijke waterfilters?",
    answer:
      "Directe subsidies voor waterfilters zijn beperkt. Sommige energiebesparende systemen (minder flessenwater = minder transport) kunnen onderdeel zijn van MKB-duurzaamheidsfondsen. Controleer de RVO-subsidiedatabank en uw gemeente op actuele regelingen. Fiscaal: zakelijke waterfilters zijn volledig aftrekbaar als bedrijfskosten.",
  },
];

const articleSchema = {
  "@type": "Article",
  headline: "Waterfilter voor horeca: koffie, ijs, koken en legionella-beheersplan",
  description:
    "Horeca waterfilters voor espresso, ijsmachines en koelinstallaties. NSF-certificering, HACCP-eisen, capaciteitsberekening en onderhoud.",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  url: "https://waterfilterplatform.nl/zakelijk/horeca",
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

export default function HorecaPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfilterplatform.nl" },
              { "@type": "ListItem", position: 2, name: "Zakelijk", item: "https://waterfilterplatform.nl/zakelijk" },
              { "@type": "ListItem", position: 3, name: "Horeca", item: "https://waterfilterplatform.nl/zakelijk/horeca" },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{" "}
          <Link href="/zakelijk" className="hover:underline">Zakelijk</Link> &rsaquo;{" "}
          <span>Horeca</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterfilter voor horeca: koffie, ijs, koken en legionella-beheersplan
        </h1>

        <QuickAnswer answer="Horeca heeft waterfiltratie nodig voor drie toepassingen: koffie (TDS 75-150 mg/L), ijs (zo zuiver mogelijk, geen smaakafwijkingen) en koken (zachter water voor betere resultaten). HACCP vereist documentatie van waterkwaliteit bij voedselproductie." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterfiltratie-eisen voor horeca
        </h2>
        <p className="text-gray-700 mb-4">
          De Warenwet en HACCP-wetgeving verplichten horecaondernemers die water gebruiken voor
          voedselproductie om de waterkwaliteit te kunnen aantonen. Dit betekent niet dat een
          waterfilter wettelijk verplicht is, maar het gebruik van leidingwater zonder monitoring
          kan bij een NVWA-inspectie tot vragen leiden als er incidenten zijn.
        </p>
        <p className="text-gray-700 mb-4">
          Een gedocumenteerd filtersysteem met servicelogboek, TDS-registratie en filterwissel-
          records toont aan dat u de waterkwaliteit actief bewaakt. Dit is met name relevant voor
          toepassingen waarbij water direct in voedsel of dranken terechtkomt: espresso, ijs,
          soepen, sauzen en deeg.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filters voor espresso en koffie
        </h2>
        <p className="text-gray-700 mb-4">
          Water voor espresso heeft een ideale TDS van 75-150 mg/L. Te zacht water (onder 50 mg/L)
          geeft een zure, flauwe espresso; te hard water (boven 200 mg/L) zorgt voor
          overkalk van de machine en een vlakke smaak. Professionele espressofilters regelen
          de TDS door een combinatie van koolstoffiltratie en selectieve ionenwisseling.
        </p>
        <p className="text-gray-700 mb-4">
          Veelgebruikte merken voor horecaespresso zijn BRITA PURITY C (voor machines tot
          2.000 koppen per dag), Everpure (H-series) en WMF Waterfilter. Aandachtspunten:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 pl-2">
          <li>Controleer of het filter compatibel is met uw specifieke machinemodel.</li>
          <li>Stel de bypass correct in op basis van uw lokale waterhardheid (leverancier-chart).</li>
          <li>Registreer de filterwissel in het machinelogboek voor garantiedoeleinden.</li>
          <li>Verificeer TDS maandelijks met een pen-meter.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filters voor ijsmachines
        </h2>
        <p className="text-gray-700 mb-4">
          IJsmachines zijn bijzonder gevoelig voor kalkaanslag. Kalk in ijsmachines leidt tot
          verstoppingen, smaakafwijkingen en verhoogd energieverbruik. Aanbevolen filtratie:
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1 pl-2">
          <li>Sedimentfilter (5 micron): verwijdert deeltjes die kleppen en leidingen beschadigen.</li>
          <li>Koolstofblokfilter: verwijdert chloor en smaakstoffen die in het ijs terechtkomen.</li>
          <li>Zachter water (bij hardheid boven 12 dH): ionenwisselaar of onthardelement.</li>
        </ol>
        <p className="text-gray-700 mb-4">
          Let bij de aanschaf op NSF/ANSI 42 certificering als minimum voor voedselcontacttoepassingen.
          Bij twijfel over PFAS-belasting in uw regio: voeg een koolblokfilter met PFAS-specificatie
          toe als extra stap.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Capaciteitsberekening
        </h2>
        <p className="text-gray-700 mb-4">
          Bepaal de benodigde filtercapaciteit op basis van uw dagelijks waterverbruik per
          toepassing:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Toepassing</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Waterverbruik</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Piekbelasting</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Espressomachine (200 koppen/dag)</td>
                <td className="border border-gray-300 px-3 py-2">ca. 3 L/uur (piek)</td>
                <td className="border border-gray-300 px-3 py-2">Lunchpiek 1-2 uur</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">IJsmachine (20 kg ijs/dag)</td>
                <td className="border border-gray-300 px-3 py-2">ca. 30-50 L/dag</td>
                <td className="border border-gray-300 px-3 py-2">Doorlopend productie</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Kookwater (restaurantkeuken)</td>
                <td className="border border-gray-300 px-3 py-2">50-200 L/dag</td>
                <td className="border border-gray-300 px-3 py-2">Ochtend mise-en-place</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-4">
          Bij systemen met een druk opslagtank is de benodigde productiecapaciteit lager omdat
          de tank de piekbelasting opvangt. Bij inline filters zonder tank moet het filter
          de piekflow continu kunnen verwerken.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Legionella-beheersplan voor horeca
        </h2>
        <p className="text-gray-700 mb-4">
          Een Legionella-beheersplan is verplicht voor horecabedrijven met installaties die
          aërosol kunnen produceren: douches voor personeel, wellness-faciliteiten of
          fonteinen. Het plan omvat minimaal:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 pl-2">
          <li>Risicobeoordeling van de waterinstallatie (door gecertificeerd bureau).</li>
          <li>Temperatuurbeheer: warm water boven 60 graden C, koud water onder 25 graden C.</li>
          <li>Thermische desinfectie: warm water leidingen doorstromen op 70+ graden C (jaarlijks).</li>
          <li>Monstername en analyse: minimaal 1x per jaar bij risicocategorie A-installaties.</li>
          <li>Registratie in logboek met datum, meting, maatregel en uitvoerder.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Onderhoud en serviceprogrammas
        </h2>
        <p className="text-gray-700 mb-4">
          Professionele horecafiltersystemen vereisen een gedocumenteerd serviceregime.
          Stel een kwartaal-serviceschema op:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 pl-2">
          <li><strong>Maandelijks:</strong> TDS meten en registreren aan inlaat en uitlaat.</li>
          <li><strong>Per kwartaal:</strong> Filterpatronen controleren op basis van capaciteitsindicator of literteller.</li>
          <li><strong>Jaarlijks:</strong> Volledige filterservice inclusief membraan- of filterwissel, desinfectierapport en eventueel Legionella-analyse.</li>
          <li><strong>Bij afwijking TDS (&gt;10% verandering):</strong> Direct filterwissel en oorzaakonderzoek.</li>
        </ul>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over horeca waterfilters</h2>
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
          <Link href="/zakelijk" className="text-[#005F8A] underline">Zakelijk overzicht</Link>,{" "}
          <Link href="/onderhoud/storingen-oplossen" className="text-[#005F8A] underline">Storingen oplossen</Link>,{" "}
          <Link href="/filtertechnieken" className="text-[#005F8A] underline">Filtertechnieken</Link>,{" "}
          <Link href="/keurmerken/nsf-ansi-58" className="text-[#005F8A] underline">NSF/ANSI 58 keurmerk</Link> en{" "}
          <Link href="/waterhardheid/effect-op-koffie" className="text-[#005F8A] underline">Waterhardheid en koffie</Link>.
        </p>
      </main>
    </>
  );
}
