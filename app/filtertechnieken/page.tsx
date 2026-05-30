import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { ClusterHub } from "@/components/ClusterHub";
import { FilterTechniekenComparison } from "@/components/FilterTechniekenComparison";
import { MethodologyBadge } from "@/components/MethodologyBadge";
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
        schema={[
          {
            '@type': 'ItemList',
            name: 'Filtertechnieken',
            url: 'https://waterfilterplatform.nl/filtertechnieken',
            numberOfItems: 9,
            itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Actief kool waterfilter: GAC vs CTO, werking en wanneer effectief', url: 'https://waterfilterplatform.nl/filtertechnieken/actief-kool' },
            { '@type': 'ListItem', position: 2, name: 'Elektrolyse en CDI waterontzouting - hoe werkt capacitieve deionisatie?', url: 'https://waterfilterplatform.nl/filtertechnieken/elektrolyse-cdi' },
            { '@type': 'ListItem', position: 3, name: 'Ionenwisseling voor drinkwater: principe, hars en regeneratie uitgelegd', url: 'https://waterfilterplatform.nl/filtertechnieken/ionenwisseling' },
            { '@type': 'ListItem', position: 4, name: 'Keramisch waterfilter - diatomeeenaarde en zilverbehandeling', url: 'https://waterfilterplatform.nl/filtertechnieken/keramisch' },
            { '@type': 'ListItem', position: 5, name: 'Nanofiltration (NF) - tussen ultrafiltratie en omgekeerde osmose', url: 'https://waterfilterplatform.nl/filtertechnieken/nanofiltration' },
            { '@type': 'ListItem', position: 6, name: 'Omgekeerde osmose filtertechniek: werking, membraan en effectiviteit', url: 'https://waterfilterplatform.nl/filtertechnieken/omgekeerde-osmose' },
            { '@type': 'ListItem', position: 7, name: 'Ultrafiltratie (UF) waterfilter: 0,01 micron, hollow fiber en toepassingen', url: 'https://waterfilterplatform.nl/filtertechnieken/ultrafiltratie' },
            { '@type': 'ListItem', position: 8, name: 'UV-sterilisatie waterfilter: werking, dosis en toepassingen', url: 'https://waterfilterplatform.nl/filtertechnieken/uv-sterilisatie' },
            { '@type': 'ListItem', position: 9, name: 'Filtertechnieken vergelijken - welke technologie verwijdert wat?', url: 'https://waterfilterplatform.nl/filtertechnieken/vergelijking' },
            ],
          },
        ]}
      />
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
      <SchemaOrg
        type="Article"
        article={{
          title: "Filtertechnieken waterfilters: omgekeerde osmose, UV, actief kool en meer",
          description: "Alle waterfiltertechnieken vergeleken: RO, UV-sterilisatie, actief kool, ultrafiltratie, ionenwisseling. Welke techniek verwijdert wat?",
          datePublished: "2026-05-17",
          dateModified: "2026-05-22",
          url: "https://waterfilterplatform.nl/filtertechnieken",
        }}
      />
      <SchemaOrg
        type="DefinedTermSet"
        definedTerms={{
          name: "Waterfilter filtertechnieken — begrippen",
          description: "Definities van filtertechnieken voor huishoudelijk drinkwater",
          url: "https://waterfilterplatform.nl/filtertechnieken",
          terms: [
            { name: "Omgekeerde osmose (RO)", description: "Filtratietechniek waarbij water onder druk door een semi-permeabel membraan met poriën van ~0,0001 µm wordt geperst. Verwijdert 95-99% van opgeloste stoffen inclusief PFAS, lood, nitraat en microplastics.", url: "https://waterfilterplatform.nl/omgekeerde-osmose" },
            { name: "Actief kool (GAC/CTO)", description: "Adsorptiemateriaal dat organische verbindingen, chloor, geur en smaak uit water bindt. Poriegrootte ~0,5 µm. Verwijdert geen opgeloste ionen zoals kalk, nitraat of lood.", url: "https://waterfilterplatform.nl/filtertechnieken/actief-kool" },
            { name: "Ultrafiltratie (UF)", description: "Membraanfiltratie met poriën van 0,01-0,1 µm. Stopt bacteriën, virussen en microplastics. Laat opgeloste mineralen en ionen passeren.", url: "https://waterfilterplatform.nl/filtertechnieken/ultrafiltratie" },
            { name: "Ionenwisseling", description: "Harsbedfiltratie waarbij hardheidsionen (Ca²⁺, Mg²⁺) worden uitgewisseld voor natriumionen. Basis van waterontharders.", url: "https://waterfilterplatform.nl/filtertechnieken/ionenwisseling" },
            { name: "UV-sterilisatie", description: "Ultraviolet licht (254 nm) inactiveert microorganismen door DNA-schade. Geen chemische stoffen. Verwijdert geen opgeloste verontreinigingen.", url: "https://waterfilterplatform.nl/waterfilter/uv-sterilisatie" },
            { name: "Nanofiltratie (NF)", description: "Membraanfiltratie met poriën van ~0,001 µm. Verwijdert pesticiden, hormonen en kalk, maar laat monovalente ionen deels door. Minder afvalwater dan RO.", url: "https://waterfilterplatform.nl/filtertechnieken/nanofiltratie" },
          ],
        }}
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
          <QuickAnswer question="Welke filtertechniek verwijdert welke stoffen?" answer="Elke filtertechniek verwijdert andere stoffen: actief kool absorbeert chloor en geur, ultrafiltratie stopt bacterien en virussen, ionenwisseling vervangt hardheidsionen, en omgekeerde osmose filtert op moleculair niveau inclusief PFAS, nitraat en lood. De juiste keuze hangt af van wat er in uw water zit." />
          <figure className="mt-6">
            <FilterTechniekenComparison className="w-full h-auto rounded-2xl shadow-sm bg-white" />
            <figcaption className="text-xs text-gray-500 text-center mt-2">
              Vergelijking van 5 filtertechnieken op poriegrootte en doelstoffen — van grof (sediment, 5&nbsp;µm) tot fijn (omgekeerde osmose, 0,0001&nbsp;µm).
            </figcaption>
          </figure>
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
      <div className="max-w-4xl mx-auto px-4 pb-10">
        <MethodologyBadge lastReviewed="2026-05-22" />
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/waterfilter", title: "Waterfilter kopen: overzicht" },
              { href: "/keuzehulp", title: "Welke filtertechniek past bij u?" },
              { href: "/keurmerken", title: "NSF/ANSI certificering per techniek" },
              { href: "/vergelijken", title: "Filtertechnieken vergelijken" },
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
