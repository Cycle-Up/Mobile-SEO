import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { ClusterHub } from "@/components/ClusterHub";
import { getCluster } from "@/data/clusters";

export const metadata: Metadata = {
  title: "Zakelijke waterfilters: voor kantoor, horeca, industrie en VVE",
  description:
    "Waterfilteroplossingen voor bedrijven: kantoor, horeca, industrie en appartementsgebouwen. Capaciteit, certificering, onderhoud en legionella-beheersplan.",
  alternates: { canonical: "https://waterfilterplatform.nl/zakelijk" },
  openGraph: {
    title: "Zakelijke waterfilters: voor kantoor, horeca, industrie en VVE",
    description:
      "Waterfilteroplossingen voor bedrijven: kantoor, horeca, industrie en appartementsgebouwen. Capaciteit, certificering, onderhoud en legionella-beheersplan.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Wanneer is een zakelijk waterfilter verplicht?",
    answer:
      "Een waterfilter is niet verplicht, maar een Legionella-beheersplan wel voor grote gebouwen (meer dan 25 personen of specifieke risicocategorieen). Horeca die water gebruikt voor voedselproductie moet aantonen dat het water voldoet aan de Warenwet.",
  },
  {
    question: "Wat is het verschil tussen zakelijke en particuliere osmosefilters?",
    answer:
      "Zakelijke systemen produceren meer liter per uur (5-50 L/u vs 0,2-0,5 L/u particulier), hebben ingebouwde monitoring, zijn op afstand uitleesbaar en hebben serviceprogrammas voor regelmatig onderhoud.",
  },
  {
    question: "Heeft mijn kantoor een waterfilter nodig?",
    answer:
      "Niet verplicht. Maar een gefilterde waterdispenser of osmosekraan vermindert plastic flessengebruik significant: een kantoor van 20 personen verbruikt ca. 4.000 plastic flessen per jaar.",
  },
  {
    question: "Wat kost een zakelijk waterfiltersysteem?",
    answer:
      "Afhankelijk van capaciteit: een kantoor-osmosesysteem (10-50 personen) kost 800-2.000 euro aanschaf plus 200-500 euro per jaar onderhoud. Horeca-systemen voor koffie en ijs kosten 1.500-5.000 euro.",
  },
  {
    question: "Wie is verantwoordelijk voor onderhoud in een VVE?",
    answer:
      "De VVE als geheel is verantwoordelijk voor gemeenschappelijke installaties. Individuele bewoners zijn verantwoordelijk voor hun eigen waterfilters. Legionella-beheer van centrale installaties valt onder VVE-verantwoordelijkheid.",
  },
];

export default function ZakelijkPage() {
  const cluster = getCluster("zakelijk")!;
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfilterplatform.nl" },
              { "@type": "ListItem", position: 2, name: "Zakelijk", item: "https://waterfilterplatform.nl/zakelijk" },
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
            <span>Zakelijk</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Zakelijke waterfilters: voor kantoor, horeca, industrie en VVE
          </h1>
          <QuickAnswer answer="Zakelijke waterfilters onderscheiden zich van particuliere systemen in drie opzichten: hogere capaciteit (m3/uur), stricter onderhoudsregime (Legionella-wetgeving) en documentatieplicht. Elke toepassing - kantoor, horeca, industrie - heeft specifieke eisen." />
        </div>
      </section>
      <ClusterHub
        intro={
          <>
            <p>
              Zakelijk watergebruik stelt andere eisen aan filtratie dan thuisgebruik. De
              Drinkwaterwet verplicht eigenaren en beheerders van grote gebouwen tot een
              Legionella-beheersplan. Horecabedrijven die water gebruiken voor voedselproductie
              vallen onder aanvullende HACCP-eisen en moeten de waterkwaliteit kunnen aantonen
              richting inspecterende instanties.
            </p>
            <p>
              Zakelijke waterfiltersystemen zijn bovendien gebouwd op hogere capaciteit, met
              ingebouwde monitoring en vaak met een servicecontract voor periodiek onderhoud
              en documentatie. Dit cluster bundelt alle informatie per bedrijfstype: van een
              kantoor met 20 medewerkers tot een restaurant met een professionele espressomachine,
              van een appartementencomplex met collectieve installatie tot een industriele
              omgeving met proceswater-eisen.
            </p>
          </>
        }
        pages={cluster.pages}
        ctaContext={cluster.ctaContext}
        relatedClusters={cluster.relatedClusters}
      />
      <div className="max-w-4xl mx-auto px-4 pb-10">
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over zakelijke waterfilters</h2>
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
