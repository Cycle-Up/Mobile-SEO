import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Nanoplastics in drinkwater: gezondheidsrisico's en osmose als enige oplossing",
  description:
    "Nanoplastics zijn kleiner dan 1 micron en passeren bijna alle filters. Onderzoek toont ze aan in bloed, longen en placenta. Alleen osmose houdt ze tegen.",
  alternates: { canonical: "https://waterfilterplatform.nl/waterfilter/nanoplastics" },
  openGraph: {
    title: "Nanoplastics in drinkwater: gezondheidsrisico's en osmose als enige oplossing",
    description:
      "Nanoplastics zijn kleiner dan 1 micron en passeren bijna alle filters. Onderzoek toont ze aan in bloed, longen en placenta. Alleen osmose houdt ze tegen.",
    type: "website",
  },
};

const faqItems = [
  {
    name: "Wat zijn nanoplastics precies?",
    answer:
      "Nanoplastics zijn kunststofdeeltjes kleiner dan 1 micrometer (1 µm). Sommige definities hanteren een bovengrens van 100 nanometer (0,1 µm). Ze zijn zo klein dat ze niet zichtbaar zijn met een gewone lichtmicroscoop en detectie vereist geavanceerde technieken zoals ICP-MS of Raman-spectroscopie.",
  },
  {
    name: "Wat is het verschil tussen microplastics en nanoplastics?",
    answer:
      "Microplastics zijn deeltjes van 1 µm tot 5 mm. Nanoplastics zijn kleiner dan 1 µm. Nanoplastics kunnen celwanden passeren en worden opgenomen in bloed en weefsels, wat bij microplastics veel beperkter is. Nanoplastics zijn bovendien moeilijker te detecteren en te bestuderen.",
  },
  {
    name: "Wat zegt het wetenschappelijk onderzoek over nanoplastics in het menselijk lichaam?",
    answer:
      "Studies hebben nanoplastics aangetoond in menselijk bloed (Environmental Research, 2023), in placentaweefsel van zwangere vrouwen (Toxicological Sciences) en in hartspiercellen van hartpatienten (Nature Medicine, 2024). Belangrijk voorbehoud: dit zijn associatiestudies; causaliteit is niet bewezen en langetermijneffecten zijn nog onduidelijk.",
  },
  {
    name: "Waarom zijn nanoplastics gevaarlijker dan microplastics?",
    answer:
      "Door hun kleine omvang kunnen nanoplastics biologische barrières passeren die grotere deeltjes tegenhouden, zoals celwanden en de placentabarriere. Ze worden opgenomen in bloed en weefsels en kunnen daar mogelijk biologische reacties veroorzaken. De exacte gezondheidseffecten zijn echter nog onvoldoende onderzocht.",
  },
  {
    name: "Waar komen nanoplastics in drinkwater vandaan?",
    answer:
      "Nanoplastics in drinkwater zijn afkomstig van UV-degradatie en mechanische slijtage van macroplastics, kunststof componenten in drinkwatersystemen en plastic flessen. Plastic flessen zijn een bijzonder rijke bron: schudden en warm water verhogen de afgifte van nanoplastics aan het water aanzienlijk.",
  },
  {
    name: "Hoeveel nanoplastics zitten er in Nederlands drinkwater?",
    answer:
      "Het RIVM monitort microplastics in Nederlands drinkwater. Nederlands kraanwater bevat na zuivering relatief lage hoeveelheden microplastics en nanoplastics vergeleken met flessenwater. Meerdere studies tonen aan dat flessenwater significant meer nanoplastics bevat dan kraanwater, deels door afgifte vanuit de fles zelf.",
  },
  {
    name: "Welke filters verwijderen nanoplastics?",
    answer:
      "Alleen omgekeerde osmose (RO) met porieen van 0,0001 µm verwijdert nanoplastics volledig. Ultrafiltratie (porieen 0,01 µm) laat de kleinste nanoplastics door. Actieve koolfilters, sedimentfilters en waterfilterkannen zijn niet effectief tegen nanoplastics.",
  },
  {
    name: "Verwijdert een osmosefilter alle nanoplastics?",
    answer:
      "Ja. Een omgekeerde-osmosemembraan heeft porieen van 0,0001 µm (0,1 nm), wat kleiner is dan zelfs de allerkleinste nanoplastics. RO verwijdert praktisch alle nanoplastics en microplastics uit drinkwater met een efficientie van meer dan 99,9%.",
  },
  {
    name: "Is flessenwater beter dan kraanwater voor nanoplastics?",
    answer:
      "Nee. Flessenwater bevat significant meer nanoplastics dan Nederlands kraanwater. De plastic fles zelf geeft nanoplastics af aan het water, in het bijzonder bij warmte, zonlicht en bij schudden. Kraanwater gecombineerd met een osmosefilter geeft de laagste blootstelling.",
  },
  {
    name: "Zijn er normen voor nanoplastics in drinkwater in Nederland?",
    answer:
      "Er bestaan nog geen wettelijke grenswaarden specifiek voor nanoplastics in drinkwater in Nederland of de EU. De EU Drinkwaterrichtlijn 2020/2184 eist monitoring van microplastics. Grenswaarden worden verwacht in 2026-2028. De detectie van nanoplastics is technisch complex, wat normstelling bemoeilijkt.",
  },
  {
    name: "Moeten baby's en zwangere vrouwen extra voorzichtig zijn?",
    answer:
      "Studies tonen aan dat nanoplastics de placentabarriere kunnen passeren bij dieren en zijn aangetroffen in menselijk placentaweefsel. Het voorzorgsprincipe suggereert dat zwangere vrouwen en ouders van jonge kinderen de meeste reden hebben om voor een osmosefilter te kiezen, al is directe gezondheidsschade bij mensen op huidige blootstellingsniveaus niet bewezen.",
  },
];

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.name,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const articleSchema = {
  "@type": "Article",
  headline: "Nanoplastics in drinkwater: gezondheidsrisico's en osmose als enige oplossing",
  description:
    "Nanoplastics zijn kleiner dan 1 micron en passeren bijna alle filters. Onderzoek toont ze aan in bloed, longen en placenta. Alleen osmose houdt ze tegen.",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  url: "https://waterfilterplatform.nl/waterfilter/nanoplastics",
  publisher: {
    "@type": "Organization",
    name: "WaterfilterPlatform",
    url: "https://waterfilterplatform.nl",
  },
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://waterfilterplatform.nl",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Waterfilter",
      item: "https://waterfilterplatform.nl/waterfilter",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Nanoplastics",
      item: "https://waterfilterplatform.nl/waterfilter/nanoplastics",
    },
  ],
};

export default function NanoplasticsPage() {
  return (
    <>
      <SchemaOrg schema={[breadcrumbSchema, faqSchema, articleSchema]} />

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &rsaquo;{" "}
          <Link href="/waterfilter" className="hover:underline">
            Waterfilter
          </Link>{" "}
          &rsaquo; <span>Nanoplastics</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Nanoplastics in drinkwater: gezondheidsrisico&apos;s en osmose als enige oplossing
          </h1>
          <p className="text-[#005F8A] text-lg">
            Nanoplastics zijn kleiner dan 1 micrometer &mdash; zo klein dat ze celwanden passeren en
            in bloed, longen en placentaweefsel zijn aangetroffen. Bijna alle standaard waterfilters
            houden ze niet tegen. Alleen omgekeerde osmose biedt effectieve bescherming.
          </p>

          <QuickAnswer answer="Nanoplastics (kleiner dan 1 µm) passeren bijna alle standaard waterfilters. Ze zijn aangetoond in menselijk bloed, longen en placentaweefsel. Alleen omgekeerde osmose (porieen 0,0001 µm) houdt nanoplastics volledig tegen. Flessenwater bevat significant meer nanoplastics dan kraanwater." />
        </section>

        <CTABanner context="osmose" />

        {/* Sectie 1: Wat zijn nanoplastics */}
        <h2 className="text-2xl font-semibold text-[#003F5C] mt-10 mb-4">
          Wat zijn nanoplastics?
        </h2>
        <p className="text-gray-700 mb-4">
          Nanoplastics zijn kunststofdeeltjes kleiner dan <strong>1 micrometer (1 µm)</strong>.
          Sommige wetenschappers hanteren een striktere definitie en spreken pas van nanoplastics
          bij deeltjes kleiner dan 100 nanometer (0,1 µm). Ze behoren tot de kleinste categorie
          van plasticvervuiling en zijn met gewone lichtmicroscopen niet zichtbaar, omdat ze kleiner
          zijn dan de golflengte van zichtbaar licht.
        </p>
        <p className="text-gray-700 mb-4">
          Het onderscheid met <strong>microplastics</strong> (1 nm tot 5 mm) is niet alleen een
          kwestie van schaal. Door hun extreme kleine omvang gedragen nanoplastics zich fundamenteel
          anders: ze kunnen biologische barrières passeren die grotere deeltjes tegenhouden, worden
          opgenomen in de bloedsomloop en hopen zich mogelijk op in orgaanweefsel.
        </p>
        <p className="text-gray-700 mb-6">
          Detectie is technisch uiterst uitdagend. Optische microscopie werkt niet omdat de deeltjes
          kleiner zijn dan lichtgolven. Onderzoekers gebruiken geavanceerde technieken zoals{" "}
          <strong>ICP-MS</strong> (inductief gekoppeld plasma massaspectrometrie) en{" "}
          <strong>Raman-spectroscopie</strong> om nanoplastics te identificeren en kwantificeren.
          Dit verklaart waarom de wetenschap op dit gebied relatief jong is: tot voor kort misten we
          simpelweg de tools om nanoplastics betrouwbaar te meten.
        </p>

        {/* Sectie 2: Waarom gevaarlijker */}
        <h2 className="text-2xl font-semibold text-[#003F5C] mt-10 mb-4">
          Waarom nanoplastics gevaarlijker zijn dan microplastics
        </h2>
        <p className="text-gray-700 mb-4">
          De gevaren van nanoplastics vloeien direct voort uit hun afmeting. Hoe kleiner een deeltje,
          hoe makkelijker het biologische barrières kan overwinnen. Microplastics blijven in het
          maag-darmkanaal grotendeels ingesloten en worden voor een groot deel weer uitgescheiden.
          Nanoplastics kunnen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Celwanden passeren</strong> via endocytose of directe membraanpenetratie,
            waardoor ze terechtkomen in het inwendige van cellen
          </li>
          <li>
            <strong>Door de bloedbaan transporteren</strong> naar organen en weefsels die ver
            verwijderd zijn van het oorspronkelijke opnamepunt
          </li>
          <li>
            <strong>De placentabarriere doorkruisen</strong>, wat inhoudt dat ze het ongeboren
            kind kunnen bereiken
          </li>
          <li>
            <strong>Chemische stoffen meesleuren</strong>: plasticadditieven zoals weekmakers,
            vlamvertragers en kleurmiddelen kunnen aan de deeltjesoppervlakte hechten en zo
            biologisch actief worden na opname
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Bij microplastics is biologische opname via de darmwand beperkt en transport door de
          bloedbaan zeldzamer. De bezorgdheid over nanoplastics is dan ook groter, al heeft de
          wetenschap de langetermijngevolgen voor de menselijke gezondheid nog niet volledig in kaart
          gebracht.
        </p>

        {/* Sectie 3: Wetenschappelijk bewijs */}
        <h2 className="text-2xl font-semibold text-[#003F5C] mt-10 mb-4">
          Wetenschappelijk bewijs: wat laten studies zien?
        </h2>
        <p className="text-gray-700 mb-4">
          De afgelopen jaren is het onderzoek naar nanoplastics in het menselijk lichaam snel
          gevorderd, mede door verbeterde detectiemethoden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Environmental Research (2023):</strong> nanoplastics aangetroffen in menselijk
            bloed bij gezonde volwassenen. Dit bevestigt dat nanoplastics systemisch worden
            opgenomen en door de bloedsomloop circuleren.
          </li>
          <li>
            <strong>Nature Medicine (2024):</strong> nanoplastics aangetroffen in hartspiercellen
            van patienten die een hartoperatie ondergingen. Dit is opmerkelijk omdat het
            hartspierweefsel betreft, ver verwijderd van het maag-darmkanaal.
          </li>
          <li>
            <strong>Toxicological Sciences:</strong> nanoplastics gevonden in placentaweefsel van
            zwangere vrouwen, wat aantoont dat zelfs de placentabarriere geen volledige bescherming
            biedt.
          </li>
          <li>
            <strong>Eerdere studies (2020):</strong> microplastics en nanoplastics in longweefsel
            van mensen, ook bij niet-rokers.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Belangrijk voorbehoud: al deze studies zijn observationeel van aard.{" "}
          <strong>Correlatie is niet hetzelfde als causaliteit.</strong> Het feit dat nanoplastics
          worden aangetroffen in orgaanweefsel bewijst niet dat ze directe gezondheidsschade
          veroorzaken. Langetermijneffecten bij mensen op huidige blootstellingsniveaus zijn nog
          onvoldoende onderzocht. De wetenschap is actief bezig met het beantwoorden van deze
          vragen, maar definitieve conclusies ontbreken nog.
        </p>

        {/* Sectie 4: Bronnen */}
        <h2 className="text-2xl font-semibold text-[#003F5C] mt-10 mb-4">
          Bronnen van nanoplastics in drinkwater
        </h2>
        <p className="text-gray-700 mb-4">
          Nanoplastics komen via verschillende routes in drinkwater terecht:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>UV-degradatie van macroplastics:</strong> zonlicht breekt groter plastic afval
            af tot steeds kleinere deeltjes, tot op nanoplasticschaal. Dit proces vindt plaats in
            oppervlaktewater, op stranden en in het milieu.
          </li>
          <li>
            <strong>Mechanische slijtage:</strong> wrijving en botsingen breken microplastics
            verder af tot nanoplastics. Dit gebeurt tijdens transport, zuivering en in
            distributiesystemen.
          </li>
          <li>
            <strong>Kunststof drinkwatersystemen:</strong> PVC-leidingen, plastic fittingen en
            rubber afdichtingen kunnen nanodeeltjes afgeven, met name bij temperatuurschommelingen
            en chemische stress.
          </li>
          <li>
            <strong>Plastic flessen:</strong> onderzoek toont aan dat plastic flessen bij normaal
            gebruik al nanoplastics afgeven aan het water. Dit effect is significant groter bij
            schudden, verhitting (auto in de zon) of warm water in de fles. Dit maakt flessenwater
            paradoxaal genoeg een grotere bron van nanoplasticblootstelling dan kraanwater.
          </li>
        </ul>

        {/* Sectie 5: Situatie Nederland */}
        <h2 className="text-2xl font-semibold text-[#003F5C] mt-10 mb-4">
          Nanoplastics in Nederlands drinkwater
        </h2>
        <p className="text-gray-700 mb-4">
          Het <strong>RIVM</strong> monitort de kwaliteit van Nederlands drinkwater, inclusief
          microplastics. Na de uitgebreide zuiveringsprocessen van Nederlandse drinkwaterbedrijven
          zijn de concentraties in kraanwater relatief laag vergeleken met andere landen.
          Drinkwaterbedrijven detecteren maar beperkte hoeveelheden na behandeling, al is de
          detectie van nanoplastics specifiek nog in ontwikkeling.
        </p>
        <p className="text-gray-700 mb-6">
          Meerdere studies bevestigen consistent dat{" "}
          <strong>flessenwater significant meer nanoplastics bevat dan kraanwater</strong>. De
          ironie is groot: wie flessenwater drinkt om verontreinigingen te vermijden, stelt zichzelf
          bloot aan meer nanoplastics dan kraanwaterdrinkers. Dit geldt in het bijzonder voor
          flessenwater in PET-plastic.
        </p>
        <p className="text-gray-700 mb-4">
          Er bestaan nog geen wettelijke grenswaarden specifiek voor nanoplastics in drinkwater. De
          EU Drinkwaterrichtlijn 2020/2184 vereist monitoring van microplastics en nanoplastics staan
          op de watchlist voor toekomstige normstelling. Grenswaarden worden verwacht in 2026-2028,
          maar de technische complexiteit van nanoplasticdetectie maakt dit uitdagend.
        </p>

        {/* Sectie 6: Filtervergelijking */}
        <h2 className="text-2xl font-semibold text-[#003F5C] mt-10 mb-4">
          Filtervergelijking: wat houdt nanoplastics tegen?
        </h2>
        <p className="text-gray-700 mb-4">
          De effectiviteit van een waterfilter tegen nanoplastics hangt volledig af van de
          poriegrootte van het filtermedium. Nanoplastics zijn zo klein dat de meeste
          filtermethoden ze niet kunnen tegenhouden:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">
                  Filtertype
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">
                  Poriegrootte
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">
                  Verwijdert microplastics
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">
                  Verwijdert nanoplastics
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">
                  Omgekeerde osmose (RO)
                </td>
                <td className="border border-gray-300 px-3 py-2">0,0001 µm</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">
                  Ja (&gt;99,9%)
                </td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">
                  Ja (&gt;99,9%)
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">
                  Ultrafiltratie (UF)
                </td>
                <td className="border border-gray-300 px-3 py-2">0,01 µm</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">
                  Ja
                </td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">
                  Deels (kleinste passeren)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">
                  Keramisch filter
                </td>
                <td className="border border-gray-300 px-3 py-2">0,2 µm</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">
                  Grotendeels
                </td>
                <td className="border border-gray-300 px-3 py-2 text-red-700 font-medium">
                  Nee
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">
                  Actieve kool (blok)
                </td>
                <td className="border border-gray-300 px-3 py-2">0,5-1 µm</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">
                  Gedeeltelijk
                </td>
                <td className="border border-gray-300 px-3 py-2 text-red-700 font-medium">
                  Nee
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">
                  Sedimentfilter
                </td>
                <td className="border border-gray-300 px-3 py-2">5-20 µm</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700 font-medium">
                  Alleen groter
                </td>
                <td className="border border-gray-300 px-3 py-2 text-red-700 font-medium">
                  Nee
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">
                  Waterfilterkan (Brita e.d.)
                </td>
                <td className="border border-gray-300 px-3 py-2">Niet gedefinieerd</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700 font-medium">
                  Minimaal
                </td>
                <td className="border border-gray-300 px-3 py-2 text-red-700 font-medium">
                  Nee
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Sectie 7: Osmose */}
        <h2 className="text-2xl font-semibold text-[#003F5C] mt-10 mb-4">
          Osmose als enige effectieve thuisoplossing
        </h2>
        <p className="text-gray-700 mb-4">
          Een{" "}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">
            omgekeerde-osmosefilter
          </Link>{" "}
          is de enige thuisoplossing die nanoplastics volledig tegenhoudt. Het RO-membraan heeft
          porieen van slechts <strong>0,0001 µm (0,1 nm)</strong>. Ter vergelijking: de kleinste
          nanoplastics zijn circa 1 nm groot &mdash; het RO-membraan is dus ongeveer 10 keer
          kleiner dan zelfs de allerkleinste nanoplastics.
        </p>
        <p className="text-gray-700 mb-4">
          Hoe werkt het? Water wordt onder druk door het semi-permeabele membraan geperst. Alleen
          watermoleculen (H2O) en een kleine hoeveelheid opgeloste gassen passeren het membraan.
          Nanoplastics, microplastics, zware metalen, nitraat, PFAS en andere verontreinigingen
          worden tegengehouden en afgevoerd via het afvalwaterkanaal.
        </p>
        <p className="text-gray-700 mb-6">
          Een bijkomend voordeel van osmose: het systeem verwijdert tegelijkertijd ook andere
          verontreinigingen. Voor huishoudens die uitgebreide bescherming zoeken is osmose daarmee
          de meest complete thuisoplossing. Kies altijd voor NSF/ANSI 58-gecertificeerde systemen
          om te garanderen dat het filtermateriaal zelf geen nanoplastics afgeeft.
        </p>
        <p className="text-gray-700 mb-4">
          Meer lezen over osmose? Zie onze pagina{" "}
          <Link href="/waterfilter/microplastics" className="text-[#005F8A] underline">
            waterfilter tegen microplastics
          </Link>{" "}
          en{" "}
          <Link href="/drinkwaternormen/microplastics" className="text-[#005F8A] underline">
            drinkwaternormen voor microplastics
          </Link>
          .
        </p>

        {/* Sectie 8: Aanbevelingen per risicogroep */}
        <h2 className="text-2xl font-semibold text-[#003F5C] mt-10 mb-4">
          Aanbevelingen per risicogroep
        </h2>
        <p className="text-gray-700 mb-4">
          Het risico van nanoplastics is voor iedereen aanwezig, maar sommige groepen hebben meer
          reden tot voorzorg dan anderen:
        </p>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-[#003F5C]">
                Zwangere vrouwen
              </h3>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">
                Hoog voorzorgsniveau
              </span>
            </div>
            <p className="text-gray-700 text-sm">
              Nanoplastics zijn aangetroffen in placentaweefsel en kunnen de placentabarriere
              passeren. Het voorzorgsprincipe rechtvaardigt een osmosefilter tijdens de zwangerschap.
              Vermijd ook plastic flessen en microwave-verhitting in plastic containers.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-[#003F5C]">
                Baby&apos;s en jonge kinderen
              </h3>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">
                Hoog voorzorgsniveau
              </span>
            </div>
            <p className="text-gray-700 text-sm">
              Baby&apos;s hebben een onvolgroeid immuunsysteem en worden relatief zwaarder belast
              door contaminanten dan volwassenen. Osmosewater voor flesvoeding en drinkwater is
              een prudente keuze. Zie ook onze pagina{" "}
              <Link href="/waterfilter" className="text-[#005F8A] underline">
                waterfilter voor baby
              </Link>
              .
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-[#003F5C]">
                Immuungecompromitteerden
              </h3>
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">
                Verhoogd voorzorgsniveau
              </span>
            </div>
            <p className="text-gray-700 text-sm">
              Mensen met een verzwakt immuunsysteem (door ziekte, medicatie of ouderdom) zijn
              mogelijk gevoeliger voor de effecten van nanoplastics. Een osmosefilter biedt
              optimale bescherming.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-[#003F5C]">
                Gezonde volwassenen
              </h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                Persoonlijke afweging
              </span>
            </div>
            <p className="text-gray-700 text-sm">
              Het risico voor gezonde volwassenen bij huidige blootstellingsniveaus is onduidelijk.
              Causaliteit is niet bewezen. Vooruitzorg is echter zinvol: de meerkosten van een
              osmosefilter zijn laag vergeleken met de potentiele voordelen op lange termijn.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-semibold text-[#005F8A] mt-10 mb-4">
          Veelgestelde vragen over nanoplastics in drinkwater
        </h2>
        <div className="space-y-3 mb-8">
          {faqItems.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
            </details>
          ))}
        </div>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/stoffen-in-drinkwater/microplastics" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Microplastics in drinkwater</h3>
            <p className="text-sm text-gray-600">Wetenschappelijke achtergrond en normen voor microplastics in drinkwater.</p>
          </Link>
          <Link href="/waterfilter/microplastics" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter microplastics</h3>
            <p className="text-sm text-gray-600">Welk waterfilter verwijdert microplastics het meest effectief?</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose uitleg</h3>
            <p className="text-sm text-gray-600">Hoe werkt omgekeerde osmose en waarom houdt het nanoplastics tegen?</p>
          </Link>
          <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen Nederland</h3>
            <p className="text-sm text-gray-600">Actueel overzicht van EU- en Nederlandse normen voor drinkwaterkwaliteit.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{" "}
          <Link href="/waterfilter/microplastics" className="text-[#005F8A] underline">
            microplastics in drinkwater
          </Link>
          ,{" "}
          <Link href="/drinkwaternormen/microplastics" className="text-[#005F8A] underline">
            drinkwaternormen microplastics
          </Link>
          ,{" "}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">
            osmosefilter kopen
          </Link>{" "}
          en{" "}
          <Link href="/waterfilter" className="text-[#005F8A] underline">
            waterfilters vergelijken
          </Link>
          .
        </p>
      </main>
    </>
  );
}
