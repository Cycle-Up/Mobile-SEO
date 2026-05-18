import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterkwaliteitsrapport leidingwater: jaarrapport opvragen en lezen",
  description:
    "Waterkwaliteitsrapport leidingwater: drinkwaterbedrijven publiceren jaarlijks meetresultaten. Rapport opvragen, parameters begrijpen en normen controleren.",
  alternates: { canonical: "https://waterfilterplatform.nl/leidingwater/waterkwaliteitsrapport" },
  openGraph: {
    title: "Waterkwaliteitsrapport leidingwater: jaarrapport opvragen en lezen",
    description:
      "Waterkwaliteitsrapport leidingwater: drinkwaterbedrijven publiceren jaarlijks meetresultaten. Rapport opvragen, parameters begrijpen en normen controleren.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Waar kan ik het waterkwaliteitsrapport van mijn drinkwaterbedrijf vinden?",
    answer:
      "Elk Nederlands drinkwaterbedrijf publiceert het jaarlijkse waterkwaliteitsrapport op zijn website. Vitens publiceert op vitens.nl/over-vitens/waterkwaliteit, Evides op evides.nl/drinkwater/kwaliteit, PWN op pwn.nl, Brabant Water op brabantwater.nl, WML op wml.nl, Dunea op dunea.nl en Oasen op oasen.nl. U kunt ook zoeken op postcode voor de specifieke waarden in uw wijk.",
  },
  {
    question: "Wat is het RIVM Landelijk Meetnet Water?",
    answer:
      "Het RIVM Landelijk Meetnet Water is een nationale database met meetresultaten van alle drinkwaterbedrijven in Nederland. Via het publiek toegankelijke portaal kunt u historische en actuele metingen inzien voor honderden parameters. De database is beschikbaar via het RIVM-drinkwaterportaal en biedt data terug tot de jaren negentig.",
  },
  {
    question: "Welke microbiologische parameters worden gemeten in leidingwater?",
    answer:
      "In het waterkwaliteitsrapport worden minimaal gemeten: E. coli (norm: 0 per 100 ml), enterococcen (norm: 0 per 100 ml), Legionella (norm: niet aantoonbaar in distributiesysteem), en Cryptosporidium. Drinkwaterbedrijven meten ook intestinale enterovirus als aanvullende veiligheidsindicator. In Nederland zijn deze waarden structureel veilig.",
  },
  {
    question: "Wat zijn de PFAS-normen in drinkwater en hoe lees ik die in het rapport?",
    answer:
      "Vanaf 2026 gelden de Europese PFAS-normen: de som van PFOS, PFOA en twee andere stoffen mag maximaal 100 ng/L zijn. Voor individuele PFAS-stoffen geldt 10 ng/L. In het waterkwaliteitsrapport zoekt u naar de paragraaf PFAS of per- en polyfluoralkylstoffen. Nederlandse drinkwaterbedrijven liggen doorgaans ruim onder de norm, maar rapportageplicht is verplicht.",
  },
  {
    question: "Hoe interpreteer ik de hardheidswaarde in het waterkwaliteitsrapport?",
    answer:
      "Hardheid wordt in rapporten uitgedrukt in mmol/L, mg Ca/L of graden dH (DH). Omrekening: 1 mmol/L = 5,6 dH = 40 mg Ca/L. Zachte regio's (Oost-Nederland, Twente): 1-3 mmol/L. Harde regio's (Zuid-Holland, Noord-Brabant): 2,5-4,5 mmol/L. Voor osmosefilters maakt de hardheid weinig uit; voor kalkfilters is dit de sleutelparameter.",
  },
  {
    question: "Wat betekenen P90- en P95-waarden in het rapport?",
    answer:
      "P90 en P95 zijn percentielwaarden die aangeven dat 90% respectievelijk 95% van de metingen onder die waarde lagen. Ze worden gebruikt om piekwaarden te rapporteren zonder dat incidentele uitschieters het gemiddelde verstoren. Een P95 van 0,5 microgram/L voor lood betekent dat 95% van de metingen onder 0,5 microgram/L lag.",
  },
  {
    question: "Bij welke waarde van nitraat moet ik actie ondernemen?",
    answer:
      "De wettelijke grens voor nitraat is 50 mg/L. Als voorzorgsmaatregel wordt voor zuigelingen (jonger dan 6 maanden) al actie aanbevolen boven 25 mg/L. In Nederland liggen de nitraatwaarden in drinkwater doorgaans onder 10-20 mg/L. Boven 25 mg/L in uw rapport is een osmosefilter of nitraatspecifieke ionenwisselaar de meest effectieve oplossing.",
  },
  {
    question: "Hoe weet ik welk filter ik nodig heb op basis van het waterkwaliteitsrapport?",
    answer:
      "Als uw rapport lood of koper boven 1 microgram/L laat zien: kies een osmosefilter. Als nitraat boven 25 mg/L is: osmosefilter of ionenwisselaar. Als PFAS boven 50 ng/L ligt: osmosefilter. Als hardheid boven 3 mmol/L is en u last heeft van kalk: onthardingsfilter of osmose. Bij normconforme waarden voor alle parameters is een filter meestal niet nodig.",
  },
];

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfilterplatform.nl" },
    { "@type": "ListItem", position: 2, name: "Leidingwater", item: "https://waterfilterplatform.nl/leidingwater" },
    { "@type": "ListItem", position: 3, name: "Waterkwaliteitsrapport", item: "https://waterfilterplatform.nl/leidingwater/waterkwaliteitsrapport" },
  ],
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const articleSchema = {
  "@type": "Article",
  headline: "Waterkwaliteitsrapport leidingwater: hoe opvragen en interpreteren",
  description:
    "Waterkwaliteitsrapport leidingwater: drinkwaterbedrijven publiceren jaarlijks meetresultaten. Rapport opvragen, parameters begrijpen en normen controleren.",
  datePublished: "2026-05-01",
  dateModified: "2026-05-01",
  url: "https://waterfilterplatform.nl/leidingwater/waterkwaliteitsrapport",
  publisher: {
    "@type": "Organization",
    name: "WaterfilterPlatform",
    url: "https://waterfilterplatform.nl",
  },
};

export default function WaterkwaliteitsrapportPage() {
  return (
    <>
      <SchemaOrg schema={[breadcrumbSchema, faqSchema, articleSchema]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/leidingwater" className="hover:underline">Leidingwater</Link>
            <span className="mx-2">/</span>
            <span>Waterkwaliteitsrapport</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterkwaliteitsrapport leidingwater: hoe opvragen en interpreteren
          </h1>
          <QuickAnswer answer="Elk Nederlands drinkwaterbedrijf publiceert jaarlijks een waterkwaliteitsrapport met meetresultaten voor honderden parameters. U kunt het rapport opvragen via de website van uw drinkwaterbedrijf of via het Landelijk Meetnet Water van het RIVM. Typische parameters: hardheid, nitraat, PFAS, bacteriologie, zware metalen." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-10 mb-4">
          Wettelijke verplichting: het Drinkwaterbesluit
        </h2>
        <p className="text-gray-700 mb-4">
          Op grond van artikel 42 van het Drinkwaterbesluit zijn alle Nederlandse drinkwaterbedrijven verplicht om jaarlijks een kwaliteitsrapport te publiceren met de meetresultaten van het geleverde drinkwater. De rapportage omvat minimaal de in bijlage A van het besluit genoemde parameters en moet openbaar toegankelijk zijn voor consumenten.
        </p>
        <p className="text-gray-700 mb-6">
          De Inspectie Leefomgeving en Transport (ILT) houdt toezicht op de naleving van deze rapportageverplichting en de waterkwaliteitsnormen zelf. Nederland heeft historisch gezien een van de strengste drinkwaterregimes in Europa, met strengere normen dan de Europese Drinkwaterrichtlijn op diverse punten.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe het rapport opvragen: drinkwaterbedrijven per regio
        </h2>
        <p className="text-gray-700 mb-4">
          Nederland heeft tien drinkwaterbedrijven, elk verantwoordelijk voor een specifieke regio. De waterkwaliteitsrapporten zijn te vinden op hun websites:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Bedrijf</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Regio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">Vitens</td>
                <td className="border border-gray-200 px-4 py-2">Overijssel, Gelderland, Utrecht, Friesland, Flevoland</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-medium">Evides</td>
                <td className="border border-gray-200 px-4 py-2">Zeeland, Zuid-Holland (deel)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">PWN</td>
                <td className="border border-gray-200 px-4 py-2">Noord-Holland</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-medium">Brabant Water</td>
                <td className="border border-gray-200 px-4 py-2">Noord-Brabant</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">WML</td>
                <td className="border border-gray-200 px-4 py-2">Limburg</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-medium">Dunea</td>
                <td className="border border-gray-200 px-4 py-2">Zuid-Holland (deel)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">Oasen</td>
                <td className="border border-gray-200 px-4 py-2">Zuid-Holland (midden)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          De meeste bedrijven laten u zoeken op postcode zodat u de specifieke waarden voor uw waterwingebied kunt inzien. Dit is relevant omdat de kwaliteit kan verschillen tussen zuiveringsinstallaties, zelfs binnen hetzelfde bedrijf.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          RIVM Landelijk Meetnet Water: nationale database
        </h2>
        <p className="text-gray-700 mb-6">
          Het RIVM beheert het Landelijk Meetnet Water, een publiek toegankelijke database met geaggregeerde meetresultaten van alle drinkwaterbedrijven. Via het drinkwaterportaal van het RIVM kunt u historische data inzien, trends volgen en vergelijken tussen regioos. De database bevat data terug tot de jaren negentig en is de meest complete nationale bron voor drinkwaterkwaliteitsdata.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke parameters worden gemeten?
        </h2>

        <div className="space-y-4 mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Microbiologie</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>E. coli en enterococcen (fecale indicatoren, norm: 0 per 100 ml)</li>
              <li>Legionella (norm: niet aantoonbaar in het distributiesysteem)</li>
              <li>Cryptosporidium en Giardia (protozoa, norm: 0 per 10 liter)</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Anorganische stoffen</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Nitraat (norm: 50 mg/L) en nitriet (norm: 0,5 mg/L)</li>
              <li>Ammonium (norm: 0,5 mg/L)</li>
              <li>IJzer (norm: 200 microgram/L) en mangaan (norm: 50 microgram/L)</li>
              <li>Lood (norm: 5 microgram/L) en koper (norm: 2 mg/L)</li>
              <li>Arseen (norm: 10 microgram/L)</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">PFAS (per- en polyfluoralkylstoffen)</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>PFOS, PFOA en 18 andere PFAS-verbindingen</li>
              <li>EU-norm 2026: som van PFOS/PFOA/PFNA/PFHxS maximaal 100 ng/L</li>
              <li>Individuele PFAS-stoffen: 10 ng/L</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Pesticiden</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Circa 50 individuele pesticiden en metabolieten</li>
              <li>Glyfosaat, bentazon, AMPA en diverse metabolieten</li>
              <li>Norm per stof: 0,1 microgram/L; totaal: 0,5 microgram/L</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Fysisch-chemische parameters</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Hardheid (uitgedrukt in mmol/L, mg Ca/L of graden dH)</li>
              <li>pH (norm: 7,0-9,5)</li>
              <li>TDS (totale opgeloste stoffen, indicatief)</li>
              <li>Kleur (norm: 20 mg Pt/L) en troebelheid (norm: 1 NTU)</li>
              <li>Elektrische geleidbaarheid (norm: 2500 microsiemens/cm)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Een waterkwaliteitsrapport lezen: gemeten waarden vs normen
        </h2>
        <p className="text-gray-700 mb-4">
          In het rapport wordt voor elke parameter de gemeten waarde afgezet tegen de wettelijke grenswaarde en de signaleringswaarde. De signaleringswaarde is lager dan de grenswaarde en geeft aan dat het drinkwaterbedrijf bij overschrijding aanvullend onderzoek moet uitvoeren, nog voordat de wettelijke grens wordt bereikt.
        </p>
        <p className="text-gray-700 mb-4">
          Veel rapporten gebruiken een kleurindicatie:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li><strong>Groen:</strong> ruim onder de signaleringswaarde</li>
          <li><strong>Geel:</strong> tussen signaleringswaarde en grenswaarde</li>
          <li><strong>Rood:</strong> boven de wettelijke grenswaarde (mag in principe niet voorkomen in drinkwater)</li>
        </ul>
        <p className="text-gray-700 mb-6">
          P90- en P95-waarden geven aan dat 90% respectievelijk 95% van de metingen onder die waarde lagen. Dit is relevant voor parameters die sterk variëren, zoals lood (afhankelijk van leidingmateriaal in uw huis) en Legionella.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hardheidswaarden in het rapport begrijpen
        </h2>
        <p className="text-gray-700 mb-4">
          Hardheid wordt in Nederlandse rapporten weergegeven in mmol/L of mg Ca/L. Sommige oudere rapporten gebruiken graden dH (duitse hardheidsgraden). De omrekening:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">mmol/L</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">mg Ca/L</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Graden dH</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Classificatie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">0-1</td>
                <td className="border border-gray-200 px-4 py-2">0-40</td>
                <td className="border border-gray-200 px-4 py-2">0-5,6</td>
                <td className="border border-gray-200 px-4 py-2">Zacht</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">1-2</td>
                <td className="border border-gray-200 px-4 py-2">40-80</td>
                <td className="border border-gray-200 px-4 py-2">5,6-11,2</td>
                <td className="border border-gray-200 px-4 py-2">Matig zacht</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">2-3</td>
                <td className="border border-gray-200 px-4 py-2">80-120</td>
                <td className="border border-gray-200 px-4 py-2">11,2-16,8</td>
                <td className="border border-gray-200 px-4 py-2">Matig hard</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">3+</td>
                <td className="border border-gray-200 px-4 py-2">120+</td>
                <td className="border border-gray-200 px-4 py-2">16,8+</td>
                <td className="border border-gray-200 px-4 py-2">Hard</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer actie ondernemen na het lezen van het rapport?
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Parameter</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Actiedrempel</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Aanbevolen filter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Lood</td>
                <td className="border border-gray-200 px-4 py-2">Boven 1 microgram/L</td>
                <td className="border border-gray-200 px-4 py-2">Osmosefilter</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Nitraat</td>
                <td className="border border-gray-200 px-4 py-2">Boven 25 mg/L (kinderen)</td>
                <td className="border border-gray-200 px-4 py-2">Osmose of ionenwisselaar</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">PFAS (som)</td>
                <td className="border border-gray-200 px-4 py-2">Boven 50 ng/L</td>
                <td className="border border-gray-200 px-4 py-2">Osmosefilter</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Hardheid</td>
                <td className="border border-gray-200 px-4 py-2">Boven 3 mmol/L</td>
                <td className="border border-gray-200 px-4 py-2">Onthardingsfilter of osmose</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Pesticide (per stof)</td>
                <td className="border border-gray-200 px-4 py-2">Boven 0,05 microgram/L</td>
                <td className="border border-gray-200 px-4 py-2">Actief koolfilter of osmose</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Chloor (smaak)</td>
                <td className="border border-gray-200 px-4 py-2">Merkbaar smaak/geur</td>
                <td className="border border-gray-200 px-4 py-2">Koolblokfilter</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-8">
          <h3 className="font-semibold text-[#003F5C] mb-2">Interne links</h3>
          <ul className="space-y-1 text-[#005F8A]">
            <li><Link href="/leidingwater" className="hover:underline">Leidingwater kwaliteit: complete gids</Link></li>
            <li><Link href="/omgekeerde-osmose/kopen" className="hover:underline">Osmosefilter kopen: vergelijking en advies</Link></li>
            <li><Link href="/leidingwater/pesticiden" className="hover:underline">Pesticiden in leidingwater</Link></li>
          </ul>
        </div>

        <section className="mt-8 mb-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater: compleet overzicht</h3>
              <p className="text-sm text-gray-600">Alle stoffen die voorkomen in Nederlands drinkwater: van mineralen tot verontreinigingen en hun normen.</p>
            </Link>
            <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen in Nederland</h3>
              <p className="text-sm text-gray-600">Welke wettelijke normen gelden voor drinkwaterkwaliteit en hoe kunt u uw waterkwaliteitsrapport interpreteren?</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-6">Veelgestelde vragen</h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
