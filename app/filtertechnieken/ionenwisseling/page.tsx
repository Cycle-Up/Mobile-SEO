import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Ionenwisseling voor drinkwater: principe, hars en regeneratie uitgelegd",
  description:
    "Ionenwisseling verwijdert calcium, magnesium, nitraat of arseen door ionen te wisselen met harskorrels. Uitleg van kation-, anion- en gemengde harsbedden.",
  alternates: {
    canonical: "https://waterfilterplatform.nl/filtertechnieken/ionenwisseling",
  },
  openGraph: {
    title: "Ionenwisseling voor drinkwater: principe, hars en regeneratie uitgelegd",
    description:
      "Ionenwisseling verwijdert calcium, magnesium, nitraat of arseen door ionen te wisselen met harskorrels. Uitleg van kation-, anion- en gemengde harsbedden.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wat is het verschil tussen een waterontharder en een osmosefilter?",
    answer:
      "Een waterontharder op basis van ionenwisseling verwijdert uitsluitend hardheidsionen (calcium en magnesium) en vervangt deze door natriumionen. Het water bevat nog alle andere opgeloste stoffen. Een osmosefilter (omgekeerde osmose) filtert vrijwel alle opgeloste stoffen, inclusief nitraat, PFAS, lood en bacterien, door water onder druk door een semi-permeabel membraan te persen. Voor puur ontharden is ionenwisseling goedkoper en levert het meer volume; voor brede waterkwaliteitsverbetering is omgekeerde osmose completer.",
  },
  {
    question: "Voegt ionenwisseling schadelijke stoffen toe aan mijn water?",
    answer:
      "Een kationhars met natriumregeneratie voegt natrium toe aan het drinkwater. Bij een hardheid van 20 dH kan de natriumtoename 150-200 mg/L bedragen. Voor gezonde mensen vormt dit geen probleem, maar bij een natriumbeperkt dieet (hoge bloeddruk, hartfalen of nierproblemen) is een apart aftappunt voor onbehandeld water aanbevolen. Nieuwe harsen kunnen bij ingebruikname tijdelijk kleine hoeveelheden resterende productiestoffen afgeven; een eerste doorspoeling met meerdere liters is standaardpraktijk.",
  },
  {
    question: "Hoe weet ik wanneer de hars verzadigd is?",
    answer:
      "Moderne waterontharders meten het waterverbruik en berekenen automatisch wanneer de harscapaciteit bereikt is, waarna ze zelf regenereren. Bij eenvoudigere systemen kunt u de waterhardheid meten met een hardheidsstrip of druppeltest: als het water weer hardheidswaarden boven 5-7 dH toont, is regeneratie nodig. Voor nitraat- of arsenicumharsen zijn specifieke teststrips of labanalyse nodig. Industriele systemen meten de conductiviteit van het effluent als maat voor de beladingsgraad.",
  },
  {
    question: "Kan ionenwisseling ook PFAS verwijderen?",
    answer:
      "Standaard kation- of anionhars is niet ontworpen voor PFAS-verwijdering en biedt weinig of geen verwijdering van PFAS-verbindingen. Speciaal PFAS-selectief anionhars (bijv. op basis van triethylamine of polystyreen met lange koolstofketens) kan PFAS-verbindingen adsorberen, maar dit is duur en vereist frequent vervangen van de hars. Voor PFAS-verwijdering is omgekeerde osmose de meest betrouwbare en gecertificeerde methode. Actief kool (GAC) is een alternatief voor PFAS-reductie.",
  },
  {
    question: "Hoeveel zout verbruikt een waterontharder per jaar?",
    answer:
      "Een gemiddeld Nederlands gezin van vier personen in een hard-watergebied (18-20 dH) verbruikt 150-250 kg keukenzout per jaar. Moderne waterontharders met vraaggestuurde regeneratie verbruiken 20-30% minder zout dan tijdgestuurde modellen. Efficiente modellen komen uit op 80-120 kg per jaar voor een gemiddeld gezin. Bij een zoutprijs van 15-25 euro per 25 kg komt dit neer op 50-250 euro per jaar aan zoutkosten. Per regeneratiecyclus wordt gemiddeld 3-8 kg zout gebruikt.",
  },
];

const breadcrumbItems = [
  { name: "Home", url: "https://waterfilterplatform.nl" },
  { name: "Filtertechnieken", url: "https://waterfilterplatform.nl/filtertechnieken" },
  { name: "Ionenwisseling", url: "https://waterfilterplatform.nl/filtertechnieken/ionenwisseling" },
];

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const articleSchema = {
  "@type": "Article",
  headline: "Ionenwisseling voor drinkwater: principe, hars en regeneratie uitgelegd",
  description:
    "Ionenwisseling verwijdert calcium, magnesium, nitraat of arseen door ionen te wisselen met harskorrels. Uitleg van kation-, anion- en gemengde harsbedden.",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  url: "https://waterfilterplatform.nl/filtertechnieken/ionenwisseling",
  publisher: {
    "@type": "Organization",
    name: "WaterfilterPlatform",
    url: "https://waterfilterplatform.nl",
  },
};

export default function IonenwisselingPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbItems.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              item: item.url,
            })),
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            &rsaquo;{" "}
            <Link href="/filtertechnieken" className="hover:underline">
              Filtertechnieken
            </Link>{" "}
            &rsaquo; <span>Ionenwisseling</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Ionenwisseling voor drinkwater: principe, hars en toepassingen
          </h1>

          <QuickAnswer answer="Ionenwisseling gebruikt harskorrels om ongewenste ionen in water te vervangen door onschadelijke ionen. Kationhars verwijdert calcium en magnesium (waterontharders), anionhars verwijdert nitraat en arseen. Na verzadiging regenereert het systeem met zout of loog." />
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-[#005F8A] mt-2 mb-4">
          Hoe werkt ionenwisseling?
        </h2>
        <p className="text-gray-700 mb-4">
          Ionenwisseling is een fysisch-chemisch proces waarbij ionen uit water tijdelijk worden
          vastgehouden door een harsmateriaal en geruild worden voor andere ionen van dezelfde
          lading. Het hars bestaat uit een polymeermatrix (meestal polystyreen) met covalent
          gebonden functionele groepen die de wisselwerking met ionen in het water mogelijk maken.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Kationhars</strong> bevat sulfonzuurgroepen (-SO3H) die positief geladen ionen
          (kationen) binden. In natriumvorm ruilt het hars Ca2+ en Mg2+ uit water voor Na+; in
          waterstofvorm levert het H+ terug in plaats van Na+. <strong>Anionhars</strong> bevat
          kwartaire ammoniumgroepen die negatief geladen ionen (anionen) binden, zoals NO3-,
          AsO4(3-) en SO4(2-), en deze ruilen voor Cl- of OH-.
        </p>
        <p className="text-gray-700 mb-4">
          De capaciteit van het hars wordt uitgedrukt in milliequivalent per liter hars (meq/L).
          Standaard sterk kationhars heeft een capaciteit van circa 1,7-2,0 meq/mL. De
          selectiviteitsreeks bepaalt welke ionen preferentieel worden uitgewisseld: bij kationhars
          is de volgorde ruwweg Ba2+ &gt; Pb2+ &gt; Ca2+ &gt; Mg2+ &gt; K+ &gt; Na+ &gt; H+.
          Ionen hoger in de reeks verdringen ionen lager in de reeks van het hars.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Toepassingen in drinkwaterbehandeling
        </h2>
        <p className="text-gray-700 mb-4">
          Ionenwisseling wordt op meerdere schaalniveaus toegepast, van de huishoudelijke
          waterontharder tot grootschalige industriele deminwaterinstallaties.
        </p>

        <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
          Waterontharders (kationwisseling)
        </h3>
        <p className="text-gray-700 mb-4">
          De meest voorkomende huishoudelijke toepassing is de{" "}
          <Link href="/waterontharder/harsbed" className="text-[#005F8A] underline">
            waterontharder op basis van een harsbed
          </Link>
          . Hard water met Ca2+ en Mg2+ passeert het kationhars in natriumvorm. De hardheidsionen
          worden gebonden aan het hars en natriumionen komen vrij in het water. De{" "}
          <Link href="/waterhardheid" className="text-[#005F8A] underline">
            waterhardheid
          </Link>{" "}
          daalt van bijvoorbeeld 20 dH naar 0-2 dH. Kalkaanslag op leidingen, verwarmingselementen
          en keukengerei wordt hierdoor voorkomen.
        </p>

        <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
          Nitraatverwijdering (anionwisseling)
        </h3>
        <p className="text-gray-700 mb-4">
          In landbouwintensieve gebieden (Noord-Brabant, Gelderland, Limburg) overschrijdt nitraat
          in grondwater regelmatig de EU-norm van 50 mg/L. Via{" "}
          <Link href="/stoffen-in-drinkwater/nitraat-nitriet" className="text-[#005F8A] underline">
            nitraat-selectief anionhars
          </Link>{" "}
          wordt NO3- uitgewisseld voor Cl-. Nitraat-selectieve harsen zijn bestand tegen de hogere
          affiniteit van standaardhars voor sulfaat, zodat nitraat ook bij hoge sulfaatconcentraties
          effectief wordt verwijderd. Verwijderingsrendement bedraagt 85-95%.
        </p>

        <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
          Arsenicumverwijdering
        </h3>
        <p className="text-gray-700 mb-4">
          Arseen komt in bepaalde grondwaterbronnen voor als arsenaat (AsO4(3-)). Speciaal
          ijzer(III)-beladen anionhars (ook wel ijzeroxide-gecoat hars) adsorbeert arsenaat
          selectief. Kleine point-of-use installaties zijn beschikbaar voor gezinnen met
          putwater. De WHO-norm van 10 microgram/L wordt met deze techniek doorgaans gemakkelijk
          gehaald.
        </p>

        <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
          Volledige ontzilting (deminwater)
        </h3>
        <p className="text-gray-700 mb-4">
          Door kation- en anionhars in serie of als{" "}
          <em>mixed bed</em> te combineren worden vrijwel alle opgeloste ionen verwijderd. Het
          resultaat is gedemineraliseerd water met een TDS-waarde onder 1 mg/L, geschikt voor
          laboratoria, elektronica, farmacie en stoominstallaties. Combinatie met{" "}
          <Link href="/filtertechnieken/ultrafiltratie" className="text-[#005F8A] underline">
            ultrafiltratie
          </Link>{" "}
          verwijdert ook deeltjes en bacterien.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Regeneratie van de hars
        </h2>
        <p className="text-gray-700 mb-4">
          Harskorrels raken na verloop van tijd verzadigd met de ongewenste ionen en verliezen hun
          werking. Regeneratie herstelt de capaciteit door de gebonden ionen te verdringen met een
          geconcentreerde regeneratievloeistof.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Kationhars (waterontharder):</strong> regeneratie met 10-15% NaCl-oplossing
            (keukenzout). De hoge Na+-concentratie verdringt de opgeslagen Ca2+ en Mg2+ van het
            hars. Afvalwater (brine) bevat hoge zout- en hardheidsconcentraties en moet worden
            afgevoerd via de riolering; lozen op oppervlaktewater is niet toegestaan.
          </li>
          <li>
            <strong>Anionhars (nitraat, sulfaat):</strong> regeneratie met NaCl voor chloridehars
            of met NaOH (natriumhydroxide) voor sterk basisch anionhars.
          </li>
          <li>
            <strong>Volledig deminwater (mixed bed):</strong> kationhars wordt geregenereerd met
            HCl, anionhars met NaOH. De harsen moeten eerst worden gescheiden op basis van
            soortelijk gewicht (backwash) alvorens afzonderlijk te regenereren.
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          Bij huishoudelijke waterontharders reguleert een volumemeter de regeneratiefrequentie op
          basis van het werkelijke waterverbruik (vraaggestuurde regeneratie). Backwash en
          regeneratiewater bedragen gemiddeld 10-15% van het geproduceerde watervolume. Duplexsystemen
          met twee alternerende harsbedden zorgen voor continue waterlevering, ook tijdens
          regeneratie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Ionenwisseling vs andere filtertechnieken
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">
                  Eigenschap
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">
                  Ionenwisseling
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">
                  <Link href="/omgekeerde-osmose" className="underline">
                    Omgekeerde osmose
                  </Link>
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">
                  Nanofiltratie
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Ontharding</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">
                  Ja (100%)
                </td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">
                  Ja (volledig)
                </td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600 font-medium">
                  Ja (gedeeltelijk)
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Nitraat</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">
                  Ja (anion)
                </td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600 font-medium">
                  Gedeeltelijk
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">PFAS</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">
                  Nee (standaard hars)
                </td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Ja</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Energieverbruik</td>
                <td className="border border-gray-300 px-3 py-2">Laag</td>
                <td className="border border-gray-300 px-3 py-2">Middel</td>
                <td className="border border-gray-300 px-3 py-2">Middel</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Afvalwater</td>
                <td className="border border-gray-300 px-3 py-2">Brine (regeneratie)</td>
                <td className="border border-gray-300 px-3 py-2">20-30% concentraat</td>
                <td className="border border-gray-300 px-3 py-2">15-20% concentraat</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Onderhoud</td>
                <td className="border border-gray-300 px-3 py-2">Zout bijvullen</td>
                <td className="border border-gray-300 px-3 py-2">Filters wisselen</td>
                <td className="border border-gray-300 px-3 py-2">Filters wisselen</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-4">
          Ionenwisseling is de optimale keuze voor grootschalige ontharding (heel huis: douche,
          wasmachine, vaatwasser, CV-installatie). Voor brede zuivering van verontreinigingen zoals
          PFAS, lood of microbiologische risicos is{" "}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">
            omgekeerde osmose
          </Link>{" "}
          uitgebreider. Beide technieken kunnen worden gecombineerd.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Nadelen en beperkingen
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Natriumtoevoeging:</strong> kationhars in natriumvorm verhoogt het
            natriumgehalte van het drinkwater. Bij volledige ontharding van water met een hardheid
            van 20 dH stijgt de natriumconcentratie met circa 160 mg/L. Voor mensen met een
            natriumbeperkt dieet is een apart aftappunt voor onbehandeld water aanbevolen.
          </li>
          <li>
            <strong>PFAS niet verwijderd:</strong> standaard ionenwisseling verwijdert geen PFAS of
            andere kleine organische stoffen. Speciaal PFAS-selectief hars bestaat maar is kostbaar
            en vereist frequente vervanging.
          </li>
          <li>
            <strong>Brine-afvalwater:</strong> regeneratiewater bevat hoge concentraties
            natriumchloride (3.000-10.000 mg/L chloride) plus de verwijderde ionen. Dit mag niet
            op oppervlaktewater worden geloosd en vormt een zoutbelasting voor het rioolstelsel.
          </li>
          <li>
            <strong>Water- en zoutverbruik:</strong> backwash en regeneratie vergen gemiddeld 10-15%
            van het geproduceerde watervolume en 3-8 kg zout per cyclus.
          </li>
          <li>
            <strong>Harsdegradatie:</strong> over jaren kunnen harskorrels afbreken door mechanische
            belasting, oxidatiemiddelen (chloor) of extreme pH-waarden. Periodieke controle en
            eventuele vervanging van de hars (elke 10-15 jaar) is noodzakelijk.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Huishoudelijke vs industriele schaal
        </h2>
        <p className="text-gray-700 mb-4">
          Op <strong>huishoudelijke schaal</strong> is de waterontharder de meest gebruikte toepassing.
          Een typische installatie bevat 1-3 liter kationhars en verbruikt 3-8 kg zout per regeneratiecyclus,
          afhankelijk van de waterhardheid en het verbruik. Moderne toestellen regenereren vraaggestuurd
          en verbruiken 20-30% minder zout dan tijdsgestuurde modellen.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Punt-van-gebruik deionisatoren</strong> (cartridges met gemengd hars) worden
          gebruikt voor laboratoriumwerk, aquaria en fotografische toepassingen. Deze cartridges
          worden weggegooid of ingezonden voor regeneratie zodra de capaciteit is bereikt.
        </p>
        <p className="text-gray-700 mb-4">
          Op <strong>industriele schaal</strong> worden multi-bed systemen ingezet voor de productie
          van ultrazuiver water in farmacie, elektronica, voedingsindustrie en energiecentrales.
          Volledig geautomatiseerde installaties met meerdere harsbedden in serie garanderen
          een constant TDS onder 0,1 mg/L, met een geleidbaarheid van minder dan 0,1 microsiemens
          per centimeter.
        </p>
        <p className="text-gray-700 mb-4">
          De keuze voor een systeem hangt af van het te behandelen watervolume, de
          doelverontreiniging, beschikbare ruimte en de gewenste waterkwaliteit. Raadpleeg bij
          twijfel de pagina{" "}
          <Link href="/filtertechnieken" className="text-[#005F8A] underline">
            filtertechnieken vergelijken
          </Link>{" "}
          voor een overzicht van alle beschikbare methoden.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over ionenwisseling
          </h2>
          {faqItems.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{" "}
          <Link href="/waterontharder/harsbed" className="text-[#005F8A] underline">
            waterontharder harsbed
          </Link>
          ,{" "}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">
            omgekeerde osmose
          </Link>
          ,{" "}
          <Link href="/stoffen-in-drinkwater/nitraat-nitriet" className="text-[#005F8A] underline">
            nitraat en nitriet in drinkwater
          </Link>
          ,{" "}
          <Link href="/filtertechnieken" className="text-[#005F8A] underline">
            alle filtertechnieken
          </Link>
          ,{" "}
          <Link href="/waterhardheid" className="text-[#005F8A] underline">
            waterhardheid per gemeente
          </Link>{" "}
          en{" "}
          <Link href="/filtertechnieken/ultrafiltratie" className="text-[#005F8A] underline">
            ultrafiltratie
          </Link>
          .
        </p>
      </main>
    </>
  );
}
