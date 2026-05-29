import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { ClusterHub } from "@/components/ClusterHub";
import { getCluster } from "@/data/clusters";

export const metadata: Metadata = {
  title: "Beste waterfilter per situatie: welk filter past bij uw woning?",
  description:
    "Welk waterfilter is het beste voor een appartement, huurwoning, ouder huis of gezin? Concrete aanbevelingen per woningtype en gebruik.",
  alternates: { canonical: "https://waterfilterplatform.nl/beste-waterfilter" },
  openGraph: {
    images: [{ url: 'https://waterfilterplatform.nl/og/beste-waterfilter.svg', width: 1200, height: 630, alt: 'WaterfilterPlatform' }],
    title: "Beste waterfilter per situatie: welk filter past bij uw woning?",
    description:
      "Welk waterfilter is het beste voor een appartement, huurwoning, ouder huis of gezin? Concrete aanbevelingen per woningtype en gebruik.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Is het beste waterfilter altijd het duurste?",
    answer:
      "Nee. Een Brita-kan voor 25 euro/jaar is het beste filter voor iemand die alleen chloor en smaak wil verbeteren. Een osmosefilter (300-600 euro/jaar alles in) is het beste voor iemand die PFAS, lood of nitraat wil verwijderen. De beste keuze is de goedkoopste die uw specifieke probleem oplost.",
  },
  {
    question: "Welk waterfilter verwijdert de meeste stoffen?",
    answer:
      "Omgekeerde osmose (RO) verwijdert de breedste range van stoffen: PFAS (90-99%), lood (95-99%), nitraat (85-95%), microplastics, bacterien en kalk. Het nadeel is dat het ook nuttige mineralen verwijdert en remineralisatie vereist voor de beste smaak.",
  },
  {
    question: "Wat is het goedkoopste waterfilter dat echt werkt?",
    answer:
      "Een actief-koolfilter (filterkan of inline) kost 25-60 euro per jaar en verwijdert effectief chloor, geur en smaakproblemen. Voor PFAS of lood is dit onvoldoende; daarvoor is osmose de minimale optie.",
  },
  {
    question: "Heb ik een filter nodig als ik in een nieuw huis woon?",
    answer:
      "In een nieuw huis (na 2000) zijn loden leidingen afwezig. Als u in een zachtwatergebied woont (Groningen, Friesland) en geen specifieke zorgen heeft, is een waterfilter niet noodzakelijk. In harde watergebieden kan een filter of ontharder de levensduur van apparaten significant verlengen.",
  },
  {
    question: "Wat is het verschil tussen een waterfilter en een waterontharder?",
    answer:
      "Een waterontharder verwijdert alleen hardheid (calcium en magnesium) door ze te vervangen met natrium. Het behandelt alle water in huis. Een osmosefilter verwijdert een brede range stoffen maar werkt alleen op het kraanpunt waar het is aangesloten. Voor volledige huisbescherming tegen kalk is een ontharder beter; voor drinkwaterkwaliteit is osmose beter.",
  },
];

export default function BesteWaterfilterPage() {
  const cluster = getCluster("beste-waterfilter")!;
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          {
            name: "Beste waterfilter per situatie",
            url: "https://waterfilterplatform.nl/beste-waterfilter",
          },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: "Beste waterfilter per situatie: welk filter past bij uw woning?",
          description: "Welk waterfilter is het beste voor een appartement, huurwoning, ouder huis of gezin? Concrete aanbevelingen per woningtype en gebruik.",
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: "https://waterfilterplatform.nl/beste-waterfilter",
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Beste waterfilter per situatie</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Beste waterfilter per situatie
          </h1>
          <QuickAnswer answer="Het beste waterfilter hangt sterk af van uw situatie: hardwatergebied, huurwoning of oud huis vereist elk een andere aanpak. Osmose is de meest veelzijdige keuze voor drinkwater; voor de volledige installatie is een waterontharder beter." />
        </div>
      </section>
      <ClusterHub
        intro={
          <>
            <p>
              Geen waterfilter is universeel het beste. Een gezin in Limburg (30 dH) heeft een
              andere behoefte dan een student op een Amsterdamse kamer. De beste keuze hangt af
              van waterhardheid, woning-type, budget en waarvoor u het water gebruikt.
            </p>
            <p>
              Dit cluster beantwoordt de vraag per situatie — met concrete aanbevelingen en
              kostenindicaties — in plaats van een generiek advies.
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

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/vergelijken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Waterfilters vergelijken</p>
              <p className="text-sm text-gray-600">Merken, prijzen en prestaties naast elkaar in een overzichtelijke tabel.</p>
            </Link>
            <Link href="/keuzehulp" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Keuzehulp waterfilter</p>
              <p className="text-sm text-gray-600">Vind het juiste filter op basis van uw woonsituatie en budget.</p>
            </Link>
            <Link href="/keurmerken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Keurmerken waterfilter</p>
              <p className="text-sm text-gray-600">NSF, KIWA en andere certificeringen: wat zeggen ze over filterkwaliteit?</p>
            </Link>
            <Link href="/waterfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Waterfilter overzicht</p>
              <p className="text-sm text-gray-600">Alle filtertypen voor thuis: filterkan, actief kool, osmose en meer.</p>
            </Link>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-6">
            Veelgestelde vragen over het beste waterfilter
          </h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {item.question}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{item.answer}</p>
            </details>
          ))}
        </section>
      </div>
    </>
  );
}
