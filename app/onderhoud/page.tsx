import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { ClusterHub } from "@/components/ClusterHub";
import { getCluster } from "@/data/clusters";

export const metadata: Metadata = {
  title: "Waterfilter onderhoud: wanneer filters wisselen, reinigen en controleren",
  description:
    "Onderhoud voor osmosefilters, waterontharders, filterkansen en koolstoffilters: wanneer wisselen, hoe reinigen en hoe storingen oplossen.",
  alternates: { canonical: "https://waterfilterplatform.nl/onderhoud" },
  openGraph: {
    images: [{ url: 'https://waterfilterplatform.nl/og/onderhoud.svg', width: 1200, height: 630, alt: 'WaterfilterPlatform' }],
    title: "Waterfilter onderhoud: wanneer filters wisselen, reinigen en controleren",
    description:
      "Onderhoud voor osmosefilters, waterontharders, filterkansen en koolstoffilters: wanneer wisselen, hoe reinigen en hoe storingen oplossen.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Hoe weet ik wanneer mijn osmosefilter aan vervanging toe is?",
    answer:
      "Meeste systemen hebben een TDS-meter: als het TDS-gehalte van het gefilterde water meer dan 50% van het ruwe water bedraagt, is het membraan uitgeput. Prefilters wisselt u op basis van tijd: elke 6-12 maanden afhankelijk van waterkwaliteit.",
  },
  {
    question: "Kan ik osmosefilters zelf wisselen?",
    answer:
      "Ja. De meeste osmosesystemen gebruiken quick-connect cartridges die u zonder gereedschap kunt wisselen. Het membraan vereist iets meer handelingen maar is goed te doen met de handleiding.",
  },
  {
    question: "Hoe reinig ik een waterontharder?",
    answer:
      "Brinebed reinigen met citroenzuur of speciaal reinigingsproduct 1-2x per jaar. Hars controleren op ijzervervuiling (rode kleur). Zoutbridge voorkomen door niet te vol te vullen met zout.",
  },
  {
    question: "Wat als mijn waterfilter slechter ruikt of smaakt?",
    answer:
      "Dit wijst op een filter dat aan vervanging toe is of, bij osmose, op een lekkend membraan. Eerst de filterleeftijd controleren. Daarna TDS meten. Bij bacterieel probleem: systeem desinfecteren met waterstofperoxide-oplossing.",
  },
  {
    question: "Hoe lang gaat een osmosemembraan mee?",
    answer:
      "Gemiddeld 2-3 jaar bij normaal kraanwater. In gebieden met hoog chloramine-gehalte of hoge hardheid korter. Een goede prefilter verlengt de membraanlevensduur aanzienlijk.",
  },
];

export default function OnderhoudPage() {
  const cluster = getCluster("onderhoud")!;
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfilterplatform.nl" },
              { "@type": "ListItem", position: 2, name: "Onderhoud", item: "https://waterfilterplatform.nl/onderhoud" },
            ],
          },
          {
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
        ]}
      />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Onderhoud</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter onderhoud: wanneer filters wisselen, reinigen en controleren
          </h1>
          <QuickAnswer answer="Goed onderhoud verlengt de levensduur van uw waterfilter en garandeert dat het systeem effectief blijft. Een osmosefilter heeft elk 6-12 maanden een filterwissel nodig; het membraan gaat 2-3 jaar mee. Een filterkan moet elke 4-8 weken worden gewisseld." />
        </div>
      </section>
      <ClusterHub
        intro={
          <>
            <p>
              Elk waterfiltersysteem vereist periodiek onderhoud. Verwaarlozing leidt niet alleen
              tot slechter water, maar ook tot kostbare schade: een osmosemembraan dat te lang
              meegaat zonder prefilter-vervanging gaat vroegtijdig kapot en moet eerder worden
              vervangen. De kwaliteit van het gefilterde water neemt sluipenderwijs af zonder dat
              het direct opvalt.
            </p>
            <p>
              Een verstopte filterkan die te lang in gebruik is, kan bacteriegroei bevorderen
              doordat de verzadigde koolstofmatrix een voedingsbodem wordt voor micro-organismen.
              Dit cluster bundelt alle praktische onderhoudsinformatie: vervangtermijnen per
              filtertype, reinigingsprocedures, diagnose van storingen en kosteninschattingen
              per systeem.
            </p>
          </>
        }
        pages={cluster.pages}
        ctaContext={cluster.ctaContext}
        relatedClusters={cluster.relatedClusters}
      />
      <div className="max-w-4xl mx-auto px-4 pb-10">
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over waterfilter onderhoud</h2>
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
