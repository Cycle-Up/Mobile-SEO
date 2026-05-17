import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { ClusterHub } from "@/components/ClusterHub";
import { getCluster } from "@/data/clusters";

export const metadata: Metadata = {
  title: "Waterfilter keurmerken: NSF, Kiwa, ACS en CE uitgelegd",
  description:
    "Waterfilter keurmerken: NSF/ANSI 42/53/58/401, Kiwa 113, ACS en CE. Wat garanderen ze en welk keurmerk heeft u nodig voor osmose, koolfilter of UV?",
  alternates: { canonical: "https://waterfilterplatform.nl/keurmerken" },
  openGraph: {
    images: [{ url: 'https://waterfilterplatform.nl/og/keurmerken.svg', width: 1200, height: 630, alt: 'WaterfilterPlatform' }],
    title: "Waterfilter keurmerken: NSF, Kiwa, ACS en CE uitgelegd",
    description:
      "Waterfilter keurmerken: NSF/ANSI 42/53/58/401, Kiwa 113, ACS en CE. Wat garanderen ze en welk keurmerk heeft u nodig voor osmose, koolfilter of UV?",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Waarom is certificering van een waterfilter belangrijk?",
    answer:
      "Fabrikanten mogen voor hun waterfilters vrijwel alle claims maken zonder verplichting tot bewijs. Termen als '99% reductie', 'klinisch getest' of 'gecertificeerd' kunnen marketingtaal zijn zonder onafhankelijke verificatie. Erkende keurmerken zoals NSF/ANSI en Kiwa vereisen testen door een accrediteerd laboratorium, publicatie van testmethodes en periodieke hercontrole. Ze geven daarmee objectief bewijs dat een filter doet wat de fabrikant beweert.",
  },
  {
    question: "Wat is het verschil tussen NSF en Kiwa?",
    answer:
      "NSF International (VS) certifieert filterprestaties: hoeveel procent van een stof wordt verwijderd onder gestandaardiseerde testomstandigheden. NSF/ANSI 58 geldt voor omgekeerde osmose (lood, arseen, TDS-reductie), NSF 42 voor esthetische koolfilters (chloor, geur, smaak) en NSF 53 voor gezondheidsrelevante contaminanten. Kiwa 113 is een Nederlandse/Europese norm die uitsluitend materiaalveiligheid test: geen schadelijke stoffen mogen uitlogen vanuit filteronderdelen naar het drinkwater. Een filter kan Kiwa 113 hebben zonder dat prestaties zijn aangetoond.",
  },
  {
    question: "Hoe kan ik controleren of een keurmerk echt is?",
    answer:
      "Controleer altijd in de officiele databases. NSF-certificeringen zijn verifieerbaar via nsf.org/certified-products-systems. Kiwa-certificeringen staan in het Kiwa-productregister op kiwa.com. ACS-certificeringen zijn opvraagbaar bij het Centre scientifique et technique du batiment (CSTB) in Frankrijk. Let op: het kopieeeren van een logo op verpakking zonder geldige registratie is helaas gangbaar. Vraag bij twijfel naar het certificaatnummer.",
  },
  {
    question: "Wat garandeert de CE-markering voor waterfilters?",
    answer:
      "De CE-markering is een EU-conformiteitsverklaring en betekent dat een product voldoet aan relevante Europese richtlijnen, zoals de Drinkwaterrichtlijn of de Bouwproductenverordening voor leidingmaterialen. CE garandeert echter geen specifieke filterprestaties. Een waterfilter met CE-markering maar zonder NSF- of Kiwa-certificering heeft aangetoond juridisch op de markt te mogen worden gebracht, maar niet dat het effectief contaminanten verwijdert.",
  },
  {
    question: "Welk keurmerk heb ik nodig voor een osmosefilter?",
    answer:
      "Voor omgekeerde osmose is NSF/ANSI 58 de meest relevante certificering. Deze norm specificeert minimale reductiepercentages voor meer dan 20 contaminanten onder gestandaardiseerde testcondities (druk, temperatuur, TDS-niveau). Zoek ook naar NSF/ANSI 401 als u medicijnresten en hormonen wilt verwijderen, en Kiwa 113 of ACS voor materiaalveiligheid van slangen en fittingen.",
  },
  {
    question: "Garandeert een keurmerk dat alle claims van de fabrikant kloppen?",
    answer:
      "Nee. Een keurmerk garandeert alleen wat er expliciet in de certificeringsscope is opgenomen. NSF/ANSI 58 test een specifieke lijst contaminanten; stoffen buiten die lijst zijn niet gecertificeerd. Fabrikanten kunnen aanvullende claims maken voor niet-gecertificeerde stoffen zonder bewijs. Controleer altijd het exacte certificaatscope-document, niet alleen het logo op de verpakking. NSF publiceert per gecertificeerd product de volledige testresultaten op zijn website.",
  },
];

export default function KeurmerkenPage() {
  const cluster = getCluster("keurmerken")!;
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Keurmerken", url: "https://waterfilterplatform.nl/keurmerken" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Keurmerken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter keurmerken: NSF, Kiwa, ACS en CE uitgelegd
          </h1>
          <QuickAnswer answer="Certificering van waterfilters is vrijwillig, maar biedt het enige objectieve bewijs dat een filter doet wat de fabrikant beweert. Erkende keurmerken zoals NSF/ANSI (prestaties) en Kiwa 113 (materiaalveiligheid) vereisen onafhankelijke laboratoriumtests en periodieke hercontrole; een CE-markering of niet-geregistreerd logo geeft die garantie niet." />
        </div>
      </section>
      <ClusterHub
        intro={
          <>
            <p>
              De waterfiltermarkt staat vol met claims: '99,9% reductie', 'medisch gecertificeerd',
              'NSF-getest'. Veel van deze termen zijn niet gedefinieerd of slaan op interne tests zonder
              onafhankelijke verificatie. Echte certificering vereist dat een accrediteerd laboratorium
              het product test volgens gepubliceerde protocollen, de resultaten openbaar maakt en het
              certificaat periodiek hernieuwt.
            </p>
            <p>
              De vier belangrijkste keurmerk-systemen voor waterfilters in Nederland zijn: NSF/ANSI-normen
              (VS, internationaal erkend, filterprestaties), Kiwa 113 (Nederland/Europa,
              materiaalveiligheid), ACS (Frankrijk/Belgie/Nederland, materiaalveiligheid) en CE
              (EU-conformiteit, geen prestatiebewijs).
            </p>
            <p>
              Een goed gecertificeerd osmosefilter heeft idealiter NSF/ANSI 58 voor RO-prestaties,
              NSF/ANSI 401 voor medicijnresten en hormonen, en Kiwa 113 of ACS voor de materiaalveiligheid
              van slangen en housingonderdelen. Dit cluster legt elk keurmerk afzonderlijk uit, vergelijkt
              de scope en helpt u het onderscheid te maken tussen betrouwbare certificeringen en
              ongesubstantieerde marketingclaims.
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
