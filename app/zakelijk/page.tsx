import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
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
            '@type': 'ItemList',
            name: 'Zakelijke waterfilters',
            url: 'https://waterfilterplatform.nl/zakelijk',
            numberOfItems: 9,
            itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Waterfilter voor appartementen en VvE: collectieve oplossingen', url: 'https://waterfilterplatform.nl/zakelijk/appartementen-vve' },
            { '@type': 'ListItem', position: 2, name: 'Waterfilter voor horeca: koffie, ijs, koken en legionella-beheersplan', url: 'https://waterfilterplatform.nl/zakelijk/horeca' },
            { '@type': 'ListItem', position: 3, name: 'Proceswater voor industrie: filtratie, ontzouting en kwaliteitsnormen', url: 'https://waterfilterplatform.nl/zakelijk/industrie-proceswater' },
            { '@type': 'ListItem', position: 4, name: 'Waterfilter voor kantoor: drinkwater voor 10-200 medewerkers', url: 'https://waterfilterplatform.nl/zakelijk/kantoor' },
            { '@type': 'ListItem', position: 5, name: 'Legionella-beheersplan voor bedrijven: wettelijke eisen & aanpak', url: 'https://waterfilterplatform.nl/zakelijk/legionella-beheersplan' },
            { '@type': 'ListItem', position: 6, name: 'Waterfilter voor scholen en kinderopvang: veilig drinkwater voor kinderen', url: 'https://waterfilterplatform.nl/zakelijk/scholen-kinderopvang' },
            { '@type': 'ListItem', position: 7, name: 'Waterfilter voor sportschool en wellness: hydratie, spa en Legionella', url: 'https://waterfilterplatform.nl/zakelijk/sportschool-wellness' },
            { '@type': 'ListItem', position: 8, name: 'Waterkoeler vs waterfilter voor zakelijk gebruik: kosten en prestaties', url: 'https://waterfilterplatform.nl/zakelijk/waterkoeler-vs-filter' },
            { '@type': 'ListItem', position: 9, name: 'Waterkwaliteitsanalyse voor bedrijven: lab-analyse aanvragen', url: 'https://waterfilterplatform.nl/zakelijk/waterkwaliteitsanalyse' },
            ],
          },
        ]}
      />
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
        collectionName={cluster.title}
        collectionUrl={`https://waterfilterplatform.nl${cluster.hub}`}
        collectionDescription={cluster.description}
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
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/waterfilter", title: "Waterfilteroplossingen voor bedrijven" },
              { href: "/drinkwaterfontein", title: "Drinkwaterfontein voor kantoor en bedrijf" },
              { href: "/filtertechnieken", title: "Filtertechnieken voor zakelijk gebruik" },
              { href: "/keurmerken", title: "Keurmerken voor zakelijke waterfilters" },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors">{l.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
