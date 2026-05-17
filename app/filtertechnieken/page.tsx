import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { ClusterHub } from "@/components/ClusterHub";
import { getCluster } from "@/data/clusters";

export const metadata: Metadata = {
  title: "Filtertechnieken waterfilters: omgekeerde osmose, UV, actief kool en meer",
  description: "Alle waterfiltertechnieken vergeleken: RO, UV-sterilisatie, actief kool, ultrafiltratie, ionenwisseling. Welke techniek verwijdert wat?",
  alternates: { canonical: "https://waterfilterplatform.nl/filtertechnieken" },
  openGraph: {
    title: "Filtertechnieken waterfilters: omgekeerde osmose, UV, actief kool en meer",
    description: "Alle waterfiltertechnieken vergeleken: RO, UV-sterilisatie, actief kool, ultrafiltratie, ionenwisseling. Welke techniek verwijdert wat?",
    type: "website",
  },
};

export default function FiltertechniekenPage() {
  const cluster = getCluster("filtertechnieken")!;
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Filtertechnieken", url: "https://waterfilterplatform.nl/filtertechnieken" },
        ]}
      />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Filtertechnieken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Filtertechnieken waterfilters: van actief kool tot omgekeerde osmose
          </h1>
          <QuickAnswer answer="Elke filtertechniek verwijdert andere stoffen: actief kool absorbeert chloor en geur, ultrafiltratie stopt bacterien en virussen, ionenwisseling vervangt hardheidsionen, en omgekeerde osmose filtert op moleculair niveau inclusief PFAS, nitraat en lood. De juiste keuze hangt af van wat er in uw water zit." />
        </div>
      </section>
      <ClusterHub
        intro={
          <>
            <p>
              Waterfilters werken op fundamenteel verschillende principes. Een actief-koolfilter werkt via adsorptie: verontreinigingen hechten zich aan het enorme oppervlak van geactiveerde koolstof. Ultrafiltratie gebruikt een fysieke membraanbarriere om deeltjes boven 0,01 micron terug te houden. Omgekeerde osmose dwingt water onder druk door een semi-permeabel membraan dat vrijwel alle opgeloste stoffen — inclusief ionen en moleculen — tegenhoudt.
            </p>
            <p>
              De keuze voor een filtertechniek begint bij de vraag: wat wilt u verwijderen? Voor chloor, geur en smaak volstaat een koolblokfilter. Voor bacterien in putwater biedt ultrafiltratie of UV-sterilisatie bescherming zonder afvalwater. Voor PFAS, lood, nitraat of hormonen is omgekeerde osmose de enige betrouwbare point-of-use oplossing. Ionenwisseling is gespecialiseerd in ontharding en nitraatverlaging. Dit cluster legt elke techniek afzonderlijk uit, inclusief het werkingsprincipe, effectiviteitstabel en praktisch advies over kosten en onderhoud.
            </p>
          </>
        }
        pages={cluster.pages}
        ctaContext={cluster.ctaContext}
        relatedClusters={cluster.relatedClusters}
      />
    </>
  );
}
