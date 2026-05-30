import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { ClusterHub } from "@/components/ClusterHub";
import { getCluster } from "@/data/clusters";
import { MethodologyBadge } from "@/components/MethodologyBadge";

export const metadata: Metadata = {
  title: "Stoffen in drinkwater: overzicht, normen en wanneer filtreren?",
  description:
    "Welke stoffen zitten in Nederlands drinkwater? Overzicht van PFAS, lood, pesticiden, kalk, hormonen en microplastics: normen, risico en filteradvies.",
  alternates: { canonical: "https://waterfilterplatform.nl/stoffen-in-drinkwater" },
  openGraph: {
    title: "Stoffen in drinkwater: overzicht, normen en wanneer filtreren?",
    description:
      "Welke stoffen zitten in Nederlands drinkwater? Overzicht van PFAS, lood, pesticiden, kalk, hormonen en microplastics: normen, risico en filteradvies.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Welke stoffen zitten er in Nederlands drinkwater?",
    answer:
      "Nederlands drinkwater bevat naast water een breed scala aan opgeloste stoffen. Nuttige mineralen zoals calcium en magnesium zitten er altijd in. Daarnaast worden in kleine concentraties ook chloor (desinfectiemiddel), nitraten, pesticiden, PFAS-verbindingen, medicijnresten en zware metalen gemeten. De meeste stoffen zitten ver onder de wettelijke grenswaarden van het Drinkwaterbesluit.",
  },
  {
    question: "Welke stoffen in drinkwater zijn schadelijk voor de gezondheid?",
    answer:
      "Bij de concentraties die in Nederlands leidingwater voorkomen zijn vrijwel alle stoffen onschadelijk. Risicogroepen zijn: lood (relevant voor woningen gebouwd voor 1960 met loden leidingen), nitraat (risico voor zuigelingen bij gehalten boven 50 mg/L), PFAS (bij langdurige blootstelling aan hogere concentraties), en microbiologische verontreinigingen (met name bij grondwaterputten). Kraanwater uit het leidingnet voldoet aan strenge normen.",
  },
  {
    question: "Is kraanwater in Nederland veilig om te drinken?",
    answer:
      "Ja. Nederlands kraanwater behoort tot de veiligste ter wereld. Drinkwaterbedrijven meten continu meer dan 60 parameters en publiceren jaarlijkse kwaliteitsrapporten. Overschrijdingen van wettelijke normen zijn zeldzaam en worden direct gemeld. Toch kiezen sommige consumenten voor extra filtratie vanwege smaak, kalk, persoonlijke gezondheidsoverwegingen of voorzorg ten aanzien van stoffen zoals PFAS en medicijnresten.",
  },
  {
    question: "Wanneer is een waterfilter zinvol voor stoffen in drinkwater?",
    answer:
      "Extra filtratie is zinvol in specifieke situaties: lood (bij woningen met loden leidingen), hoge kalkhardheid (boven 15 dH, relevant voor apparaten en smaak), PFAS-voorzorg (osmosefilter verwijdert 90-99%), medicijnresten (osmose of actief kool NSF/ANSI 401), smaak- en geurproblemen door chloor (eenvoudig koolstoffilter), en nitraat voor zuigelingenwater (osmose verwijdert 85-95%).",
  },
  {
    question: "Welk waterfilter verwijdert welke stof?",
    answer:
      "Osmosefilter (RO): verwijdert PFAS, lood, arseen, nitraat, microplastics, medicijnresten, kalk en zware metalen. Actief koolfilter (NSF 42/53): verwijdert chloor, geur, smaak en sommige pesticiden. UV-filter: inactiveert bacterien en virussen maar verwijdert geen chemische stoffen. Sedimentfilter: verwijdert deeltjes groter dan 1-5 micron. Voor brede bescherming biedt een gecertificeerd osmosesysteem de meest volledige verwijdering.",
  },
  {
    question: "Hoe lees ik het kwaliteitsrapport van mijn drinkwaterbedrijf?",
    answer:
      "Elk drinkwaterbedrijf publiceert een jaarlijks kwaliteitsrapport. Let op de kolommen 'gemeten waarde' en 'norm'. Groene cellen of waardes ver onder de norm betekenen geen risico. Controleer specifiek: nitraat (norm 50 mg/L), lood (norm 10 ug/L, streefwaarde 5 ug/L), hardheid (informatief, geen norm), PFAS-som (norm 0,1 ug/L voor 20 stoffen) en trihalomethanen (norm 100 ug/L). Raadpleeg ook de meetlocatie: tappunt thuis kan afwijken van het productiewater.",
  },
];

export default function StoffenInDrinkwaterPage() {
  const cluster = getCluster("stoffen-in-drinkwater")!;
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'ItemList',
            name: 'Stoffen in drinkwater',
            url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater',
            numberOfItems: 9,
            itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Chloor bijproducten in drinkwater -- THM en HAA', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/chloor-bijproducten' },
            { '@type': 'ListItem', position: 2, name: 'Hormonen en medicijnresten in drinkwater -- wat weten we?', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/hormonen' },
            { '@type': 'ListItem', position: 3, name: 'Kalk en mineralen in drinkwater -- calcium, magnesium en bicarbonaat', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/kalk-mineralen' },
            { '@type': 'ListItem', position: 4, name: 'Microbiologische risicos in drinkwater -- bacterien, virussen en protozoen', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/microbiologisch' },
            { '@type': 'ListItem', position: 5, name: 'Nitraat en nitriet in drinkwater -- norm, risicos en filteren', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/nitraat-nitriet' },
            { '@type': 'ListItem', position: 6, name: 'Pesticiden in drinkwater -- glyfosaat, atrazine en MCPA', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/pesticiden' },
            { '@type': 'ListItem', position: 7, name: 'PFAS in drinkwater -- PFOA, PFOS en de nieuwe EU-norm', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/pfas-overzicht' },
            { '@type': 'ListItem', position: 8, name: 'Radioactieve stoffen in drinkwater -- radon, uranium en radium', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/radioactieve-stoffen' },
            { '@type': 'ListItem', position: 9, name: 'Zware metalen in drinkwater -- lood, koper, chroom en arseen', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/zware-metalen' },
            ],
          },
        ]}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Stoffen in drinkwater", url: "https://waterfilterplatform.nl/stoffen-in-drinkwater" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Stoffen in drinkwater: overzicht, normen en wanneer filtreren?",
          description: "Welke stoffen zitten in Nederlands drinkwater? Overzicht van PFAS, lood, pesticiden, kalk, hormonen en microplastics: normen, risico en filteradvies.",
          datePublished: "2026-05-17",
          dateModified: "2026-05-22",
          url: "https://waterfilterplatform.nl/stoffen-in-drinkwater",
        }}
      />
      <SchemaOrg
        type="DefinedTermSet"
        definedTerms={{
          name: "Stoffen in Nederlands drinkwater — begrippen en normen",
          description: "Definities van veelgestelde stoffen in Nederlands leidingwater met EU/NL-normen",
          url: "https://waterfilterplatform.nl/stoffen-in-drinkwater",
          terms: [
            { name: "PFAS (per- en polyfluoralkylstoffen)", description: "Groep van >4.700 synthetische stoffen. EU-norm drinkwater: totaal-PFAS 0,1 µg/L (vanaf 2026). Worden niet afgebroken in het milieu ('forever chemicals'). RO-filter verwijdert >99%.", url: "https://waterfilterplatform.nl/stoffen-in-drinkwater/pfas-overzicht" },
            { name: "Lood (Pb)", description: "Zwaar metaal. NL-norm: 5 µg/L (per Drinkwaterbesluit). Risico bij huizen gebouwd voor 1960 met loden leidingen. Geen smaak of geur. RO verwijdert 97%.", url: "https://waterfilterplatform.nl/leidingwater/lood" },
            { name: "Nitraat (NO₃⁻)", description: "Landbouwgerelateerde verontreiniging. EU-norm: 50 mg/L. Risico voor zuigelingen (methemoglobinemie). RO verwijdert 85-95%.", url: "https://waterfilterplatform.nl/stoffen-in-drinkwater/nitraat-nitriet" },
            { name: "Waterhardheid (Ca²⁺/Mg²⁺)", description: "Opgeloste calcium- en magnesiumzouten. Uitgedrukt in °dH. Geen gezondheidsrisico maar veroorzaakt kalkafzetting. In Nederland 4-22 °dH.", url: "https://waterfilterplatform.nl/waterhardheid" },
            { name: "Microplastics", description: "Plastic deeltjes 1-5000 µm. Geen wettelijke norm in drinkwater (2026). Ultrafiltratie en RO verwijderen effectief. WHO: beperkt bewijs van gezondheidsschade.", url: "https://waterfilterplatform.nl/drinkwater/microplastics" },
          ],
        }}
      />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Stoffen in drinkwater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Stoffen in drinkwater: overzicht, normen en wanneer filtreren?
          </h1>
          <QuickAnswer question="Welke stoffen zitten er in Nederlands drinkwater?" answer="Nederlands drinkwater is veilig: het voldoet aan meer dan 60 wettelijke parameters en behoort tot de schoonste ter wereld. Toch bevat het naast nuttige mineralen ook kleine hoeveelheden PFAS, medicijnresten, nitraten en kalk. Extra filtratie is zinvol als u loden leidingen heeft, gevoelig bent voor bepaalde stoffen, of in een hard-watergebied woont." />
        </div>
      </section>
      <ClusterHub
        intro={
          <>
            <p>
              Drinkwater is geen puur H2O. Het bevat altijd opgeloste stoffen: calcium en magnesium voor de
              mineraalbalans, bicarbonaat voor de pH-buffer, en chloor als desinfectant tijdens transport.
              Naast deze functionele stoffen worden in meetprogramma's ook sporen aangetroffen van PFAS,
              pesticiden, medicijnresten, nitraten en zware metalen.
            </p>
            <p>
              Dat klinkt alarmerender dan het is. De meeste stoffen zitten ver onder de wettelijke grenswaarden
              uit het Drinkwaterbesluit. Normen zijn opgesteld met ruime veiligheidsmarges en houden rekening
              met levenslange blootstelling. Drinkwaterbedrijven meten continu en zijn verplicht te rapporteren.
            </p>
            <p>
              Toch zijn er situaties waarbij extra filtratie de moeite waard is: woningen met loden leidingen,
              harde watergebieden waar kalkaanslag apparaten beschadigt, of consumenten die om gezondheidsredenen
              een extra barriere willen tegen stoffen als PFAS of medicijnresten. Dit cluster biedt per
              stofgroep een genuanceerd overzicht van bronnen, normen, risico en de meest effectieve filteroptie,
              zonder angstmarketing.
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
              { href: "/drinkwaternormen", title: "EU-normen per stof" },
              { href: "/leidingwater", title: "Leidingwater kwaliteit in Nederland" },
              { href: "/filtertechnieken", title: "Welk filter verwijdert welke stof?" },
              { href: "/pfas-waterfilter", title: "PFAS-filter: specifieke aanpak" },
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
