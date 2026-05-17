import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { ClusterHub } from "@/components/ClusterHub";
import { getCluster } from "@/data/clusters";

export const metadata: Metadata = {
  title: "Waterfilter vergelijken: osmose vs filterkan, waterontharder en meer",
  description:
    "Eerlijke vergelijkingen: osmose vs filterkan, waterfilter vs waterontharder, kraanwater vs flessenwater. Kosten, prestaties en milieu-impact.",
  alternates: { canonical: "https://waterfilterplatform.nl/vergelijken" },
  openGraph: {
    title: "Waterfilter vergelijken: osmose vs filterkan, waterontharder en meer",
    description:
      "Eerlijke vergelijkingen: osmose vs filterkan, waterfilter vs waterontharder, kraanwater vs flessenwater. Kosten, prestaties en milieu-impact.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Wat is het verschil tussen osmose en een filterkan?",
    answer:
      "Een osmosefilter werkt op 0,0001 micron en verwijdert PFAS, lood, nitraat en microplastics. Een filterkan gebruikt actief kool en verwijdert chloor, geur en smaakproblemen maar geen PFAS of opgelost lood.",
  },
  {
    question: "Is kraanwater goedkoper dan flessenwater?",
    answer:
      "Nederlands kraanwater kost ca. 0,001 euro per liter. Flessenwater kost 0,20-1,50 euro per liter. Over een jaar is kraanwater voor een gezin dat 2 liter per dag drinkt ca. 800-3000 euro goedkoper dan flessenwater.",
  },
  {
    question: "Wat kost osmose per jaar alles inbegrepen?",
    answer:
      "Installatie 400-700 euro (eenmalig), filters 80-150 euro per jaar, water: osmose produceert 3-4 liter afvalwater per liter zuiver water. Totaal ca. 200-350 euro per jaar inclusief afschrijving.",
  },
  {
    question: "Wanneer kies ik voor een waterontharder en wanneer voor osmose?",
    answer:
      "Een waterontharder is beter voor de volledige huisinstallatie (apparaten, leidingen, wasmachine). Osmose is beter voor drinkwaterkwaliteit op het kraanpunt. In harde watergebieden is een combinatie van ontharder + osmose de meest complete oplossing.",
  },
  {
    question: "Hoe vergelijk ik waterfilters eerlijk?",
    answer:
      "Vergelijk op: NSF/ANSI-certificering (aantoonbare prestaties), kosten per liter gefilterd water (TCO), filterwissel-frequentie en -prijs, afvalwaterproductie (osmose), en onderhoudsvereisten.",
  },
];

export default function VergelijkenPage() {
  const cluster = getCluster("vergelijken")!;
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Vergelijken", url: "https://waterfilterplatform.nl/vergelijken" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Vergelijken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter vergelijken: osmose vs filterkan, waterontharder en meer
          </h1>
          <QuickAnswer answer="Een osmosefilter filtert op moleculair niveau en verwijdert PFAS, lood en nitraat. Een filterkan verwijdert alleen chloor en geur. Een waterontharder verwijdert alleen kalk. De beste keuze hangt af van uw specifieke probleem." />
        </div>
      </section>
      <ClusterHub
        intro={
          <>
            <p>
              De markt is vol met claims en vergelijkingen die producten in het beste licht zetten.
              Dit cluster vergelijkt waterfilteroplossingen op basis van onafhankelijke data:
              filterprestaties, totale kosten over de levensduur, onderhoud en milieu-impact.
            </p>
            <p>
              Of u nu twijfelt tussen een osmosefilter en een filterkan, wilt weten of een
              waterontharder of osmosefilter beter past bij uw situatie, of wil begrijpen of
              kraanwater werkelijk beter is dan flessenwater: elke vergelijking in dit cluster
              is opgebouwd rond feitelijke prestatiemeting, gestandaardiseerde kosten per liter
              en transparante TCO-berekeningen.
            </p>
          </>
        }
        pages={cluster.pages}
        ctaContext={cluster.ctaContext}
        relatedClusters={cluster.relatedClusters}
      />
      <div className="max-w-4xl mx-auto px-4 pb-10">
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>
      </div>
    </>
  );
}
