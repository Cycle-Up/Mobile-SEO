import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterfilter voor kantoor: drinkwater voor 10-200 medewerkers",
  description:
    "Gefilterd kraanwater op kantoor: osmose dispenser, waterkoeler vs filter, kosten per medewerker en alternatieven voor plastic flessenwater.",
  alternates: { canonical: "https://waterfilterplatform.nl/zakelijk/kantoor" },
  openGraph: {
    title: "Waterfilter voor kantoor: drinkwater voor 10-200 medewerkers",
    description:
      "Gefilterd kraanwater op kantoor: osmose dispenser, waterkoeler vs filter, kosten per medewerker en alternatieven voor plastic flessenwater.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wat kost een waterpunt per medewerker per jaar?",
    answer:
      "Een osmose-dispensersysteem kost bij 20 medewerkers ca. 20-50 euro per persoon per jaar (aanschaf 800-1.200 euro gespreid over 5 jaar, plus 200-300 euro onderhoud per jaar). Flessenwater kost bij een verbruik van 1 liter per dag en 230 werkdagen ca. 138-690 euro per medewerker per jaar (0,60-3,00 euro per liter flessenwater).",
  },
  {
    question: "Hoe snel verdient een gefilterd watersysteem zich terug?",
    answer:
      "Bij 20 medewerkers die momenteel flessenwater gebruiken (gemiddeld 0,80 euro/L, 0,5 L/dag): jaarkosten flessenwater ca. 1.840 euro. Jaarkosten osmose-dispenser: ca. 600-800 euro inclusief onderhoud. Terugverdientijd: 1-2 jaar na aanschaf.",
  },
  {
    question: "Hebben medewerkers bezwaar tegen gefilterd kraanwater?",
    answer:
      "In de praktijk accepteren medewerkers gefilterd kraanwater goed als het koud en fris wordt aangeboden. Een osmose-dispenser met gekoeld water of koolzuur wordt doorgaans als gelijkwaardig of beter ervaren dan flessenwater. Transparantie over de filterkwaliteit (TDS-display) vergroot het vertrouwen.",
  },
  {
    question: "Wie is verantwoordelijk voor onderhoud van een kantoorwaterpunt?",
    answer:
      "Dat hangt af van het contract. Bij een lease- of huurmodel (all-in) is de leverancier verantwoordelijk voor filterwissel, reiniging en TDS-monitoring. Bij eigen aanschaf is de werkgever verantwoordelijk en moet hij een onderhoudsschema bijhouden. Zorg altijd voor een servicelogboek.",
  },
  {
    question: "Zijn er fiscale voordelen voor zakelijke waterfilters?",
    answer:
      "Waterfiltersystemen voor kantoorgebruik zijn volledig aftrekbaar als bedrijfskosten (exploitatiekosten). Bij aanschaf boven 450 euro gelden afschrijvingsregels over de economische levensduur. Raadpleeg uw accountant voor specifieke fiscale behandeling en eventuele MIA/VAMIL-toepasbaarheid voor milieuvriendelijke investeringen.",
  },
];

const articleSchema = {
  "@type": "Article",
  headline: "Waterfilter voor kantoor: drinkwater voor 10-200 medewerkers",
  description:
    "Gefilterd kraanwater op kantoor: osmose dispenser, waterkoeler vs filter, kosten per medewerker en alternatieven voor plastic flessenwater.",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  url: "https://waterfilterplatform.nl/zakelijk/kantoor",
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

export default function KantoorPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfilterplatform.nl" },
              { "@type": "ListItem", position: 2, name: "Zakelijk", item: "https://waterfilterplatform.nl/zakelijk" },
              { "@type": "ListItem", position: 3, name: "Kantoor", item: "https://waterfilterplatform.nl/zakelijk/kantoor" },
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
          <span>Kantoor</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterfilter voor kantoor: drinkwater voor 10-200 medewerkers
        </h1>

        <QuickAnswer answer="Een gefilterd drinkwatersysteem op kantoor (osmose-dispenser of koude-warm-koolzuur unit) kost 20-50 euro per medewerker per jaar - tegenover 100-200 euro per medewerker aan flessenwater. Bij 20+ medewerkers is eigen filtratie bijna altijd voordeliger." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Flessenwater vs gefilterd kraanwater: de cijfers
        </h2>
        <p className="text-gray-700 mb-4">
          De kostenkloof tussen flessenwater en gefilterd leidingwater is aanzienlijk. Flessenwater
          kost in de regel 0,30-1,50 euro per liter inclusief bezorging. Een osmosesysteem
          produceert gefilterd water voor 0,02-0,05 euro per liter (filters, water, afschrijving).
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Kantoorgrootte</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten flessenwater/jaar</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten osmose/jaar</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Besparing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">20 medewerkers</td>
                <td className="border border-gray-300 px-3 py-2">ca. 2.300 euro</td>
                <td className="border border-gray-300 px-3 py-2">ca. 700 euro</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">ca. 1.600 euro</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">50 medewerkers</td>
                <td className="border border-gray-300 px-3 py-2">ca. 5.750 euro</td>
                <td className="border border-gray-300 px-3 py-2">ca. 1.200 euro</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">ca. 4.550 euro</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">100 medewerkers</td>
                <td className="border border-gray-300 px-3 py-2">ca. 11.500 euro</td>
                <td className="border border-gray-300 px-3 py-2">ca. 2.000 euro</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">ca. 9.500 euro</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-4">
          Berekening op basis van 0,5 liter drinkwater per medewerker per werkdag, 230 werkdagen,
          flessenwater 1,00 euro/L (gemiddeld 19 liter flessenwater per persoon per week) en
          osmosekosten inclusief filteronderhoud en afschrijving over 5 jaar.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Typen drinkwatersystemen voor kantoor
        </h2>
        <p className="text-gray-700 mb-4">
          Er zijn meerdere opties voor gefilterd drinkwater op kantoor, elk met eigen voor- en nadelen:
        </p>
        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-[#005F8A] mb-1">Point-of-use osmose-dispenser</h3>
            <p className="text-sm text-gray-700">Direct aangesloten op waterleiding. Produceert gefilterd, gekoeld (en optioneel bruisend) water. Geen flessen. Kosten: 800-2.000 euro aanschaf, 200-400 euro/jaar onderhoud. Geschikt voor: 10-100 personen.</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-[#005F8A] mb-1">Kokend-koud-koolzuur unit</h3>
            <p className="text-sm text-gray-700">4-in-1 unit: gefilterd koud, gefilterd warm, kokend en bruisend water. Vervangt waterkoker en waterkoeler tegelijk. Kosten: 1.200-3.000 euro aanschaf. Merken: PureAqua, Quooker Pro, Grohe Blue Professional.</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-[#005F8A] mb-1">Bottleless waterkoeler (mains-fed)</h3>
            <p className="text-sm text-gray-700">Traditionele waterkoeler maar direct op waterleiding aangesloten met inline koolstoffilter. Goedkoper dan osmose (geen membraan), maar filtert minder grondig. Kosten: 400-1.200 euro aanschaf. Geschikt voor: kantoren met zachter water (&lt;15 dH).</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-[#005F8A] mb-1">Filterkan-station</h3>
            <p className="text-sm text-gray-700">Centraal filterkan-station met meerdere kannen. Laagste aanschafkosten maar hoge filterkosten per liter en arbeidsintensief onderhoud. Alleen geschikt voor kleine kantoren (2-5 personen).</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Capaciteitsberekening
        </h2>
        <p className="text-gray-700 mb-4">
          Bereken de benodigde productiecapaciteit voor uw kantoor:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 pl-2">
          <li>Drinkwater: 0,5-1 liter per medewerker per werkdag (gemiddeld).</li>
          <li>Piekverbruik: 2-3x het gemiddelde in de ochtend (koffie, thee) en na de lunch.</li>
          <li>Bij 50 medewerkers: ca. 25-50 liter per dag, piek ca. 10 liter/uur.</li>
          <li>Osmose-dispenser met 10 L/uur capaciteit is voldoende voor 50+ personen bij normale spreiding.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Installatie en onderhoud
        </h2>
        <p className="text-gray-700 mb-4">
          De meeste kantoor-dispensers worden aangesloten op de bestaande waterleiding via een
          T-stuk (geen extra kraan nodig). Installatie door een loodgieter of gespecialiseerde
          installateur duurt 2-4 uur. Technische vereisten:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 pl-2">
          <li>Wateraansluiting (1/4 inch of 3/8 inch aftapping) binnen 1-2 meter.</li>
          <li>Stroomaansluiting 230V (geaard stopcontact) voor koeling en eventueel warmte.</li>
          <li>Afvoer voor osmose-afvalwater (spoel naar afvoer of emmer bij niet-directe afvoer).</li>
          <li>TDS-monitoring: sommige units hebben een display; anders maandelijkse meting met penmetertje.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          CO2-reductie en ESG-rapportage
        </h2>
        <p className="text-gray-700 mb-4">
          De overstap van flessenwater naar gefilterd kraanwater levert een meetbare CO2-reductie
          op die u kunt opnemen in uw ESG-rapportage of duurzaamheidsverslag:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 pl-2">
          <li>Een kantoor van 50 medewerkers verbruikt ca. 10.000 plastic flessen per jaar.</li>
          <li>Per fles 0,5 liter: ca. 100-150 gram CO2-equivalent (productie + transport).</li>
          <li>Totaal: 1.000-1.500 kg CO2 per jaar bespaard door overstap op gefilterd kraanwater.</li>
          <li>Rapporteer als Scope 3-reductie (inkoop van verbruiksartikelen).</li>
        </ul>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over kantoor waterfilters</h2>
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
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">Osmosefilter kopen</Link>,{" "}
          <Link href="/onderhoud" className="text-[#005F8A] underline">Onderhoud en gebruik</Link>,{" "}
          <Link href="/vergelijken/waterfilter-vs-waterontharder" className="text-[#005F8A] underline">Waterfilter vs waterontharder</Link> en{" "}
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">Kokend water kraan</Link>.
        </p>
      </main>
    </>
  );
}
