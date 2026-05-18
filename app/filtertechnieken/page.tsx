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
    images: [{ url: 'https://waterfilterplatform.nl/og/filtertechnieken.svg', width: 1200, height: 630, alt: 'WaterfilterPlatform' }],
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
        type="FAQPage"
        faqItems={[
          { question: "Welke filtertechniek verwijdert PFAS uit drinkwater?", answer: "Omgekeerde osmose (RO) is de enige betrouwbare consumentenoplossing voor PFAS-verwijdering: een gecertificeerd RO-systeem (NSF/ANSI 58, getest op PFAS) verwijdert 90-99% van PFAS-verbindingen. Actief kool heeft beperkte effectiviteit, met name voor kortketenige PFAS." },
          { question: "Wat is het verschil tussen ultrafiltratie en omgekeerde osmose?", answer: "Ultrafiltratie (UF) heeft poriën van 0,01-0,1 micron en houdt bacteriën, virussen en colloïden tegen, maar laat opgeloste ionen (kalk, nitraat, lood) passeren. Omgekeerde osmose werkt op moleculair niveau (0,0001 micron) en filtert ook ionen en kleine moleculen, maar produceert afvalwater en vereist hogere druk." },
          { question: "Verwijdert actief kool bacteriën uit water?", answer: "Nee. Actief kool adsorbeert organische verbindingen, chloor, geur en smaak, maar geen bacteriën of virussen. Voor microbiologische bescherming is ultrafiltratie, UV-sterilisatie of omgekeerde osmose nodig." },
        ]}
      />
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
        collectionName={cluster.title}
        collectionUrl={`https://waterfilterplatform.nl${cluster.hub}`}
        collectionDescription={cluster.description}
        relatedClusters={cluster.relatedClusters}
      />
    </>
  );
}
