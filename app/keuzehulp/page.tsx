import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { ClusterHub } from "@/components/ClusterHub";
import { getCluster } from "@/data/clusters";

export const metadata: Metadata = {
  title: "Waterfilter keuzehulp: welk filter past bij jouw situatie?",
  description: "Stap-voor-stap keuzehulp voor waterfilters. Per situatie: hard water, PFAS, baby, huurwoning en budget. Zonder verkoopadvies.",
  alternates: { canonical: "https://waterfilterplatform.nl/keuzehulp" },
  openGraph: {
    images: [{ url: 'https://waterfilterplatform.nl/og/keuzehulp.svg', width: 1200, height: 630, alt: 'WaterfilterPlatform' }],
    title: "Waterfilter keuzehulp: welk filter past bij jouw situatie?",
    description: "Stap-voor-stap keuzehulp voor waterfilters. Per situatie: hard water, PFAS, baby, huurwoning en budget. Zonder verkoopadvies.",
    type: "website",
  },
};

export default function KeuzehulpPage() {
  const cluster = getCluster("keuzehulp")!;
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Keuzehulp", url: "https://waterfilterplatform.nl/keuzehulp" },
        ]}
      />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Keuzehulp</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter keuzehulp: welk filter past bij jouw situatie?
          </h1>
          <QuickAnswer answer="Het juiste waterfilter hangt af van uw specifieke situatie: de waterhardheid in uw gemeente, eventuele verontreinigingen zoals PFAS of lood, uw woonsituatie (koop of huur) en uw budget. Een osmosefilter biedt de breedste bescherming en verwijdert kalk, PFAS, lood en nitraat. Een waterontharder pakt alleen kalk aan voor het hele huis. Een filterkan volstaat voor smaak en chloor. Deze keuzehulp leidt u per situatie naar het meest passende systeem, zonder verborgen verkoopadvies." />
        </div>
      </section>
      <ClusterHub
        intro={<>
          <p>
            Het aanbod aan waterfilters is overweldigend: actief-koolfilters, osmosefilters, waterontharders,
            filterkannen, UV-filters en 4-in-1 kranen. Elk systeem is ontworpen voor een andere set
            problemen. Een osmosefilter beschermt tegen PFAS en lood maar lost kalkoverlast in het hele
            huis niet op. Een waterontharder behandelt hard water maar verwijdert geen microverontreinigingen.
            Een filterkan verbetert smaak maar biedt geen bescherming tegen lood of nitraat. De keuze
            begint bij uw eigen situatie: wat zit er in uw water en wat wilt u bereiken?
          </p>
          <p>
            Deze keuzehulp is opgedeeld per situatie. Heeft u last van kalkaanslag door hard water? Woont
            u in een risicogebied voor PFAS of in een woning van voor 1960 met mogelijke loden leidingen?
            Heeft u een baby of jong gezin? Woont u in een huurwoning zonder mogelijkheid tot boren? Of
            zoekt u de beste keuze binnen een bepaald budget? Per situatie vindt u een eerlijke analyse
            van de opties, een vergelijkingstabel en concrete aanbevelingen, zonder merkvoorkeur of
            verborgen verkoopboodschap. Gebruik de sub-pagina die op uw situatie aansluit als startpunt.
          </p>
        </>}
        pages={cluster.pages}
        ctaContext={cluster.ctaContext}
        relatedClusters={cluster.relatedClusters}
      />
    </>
  );
}
