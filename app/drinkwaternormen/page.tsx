import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { DrinkwaterNormenHierarchy } from "@/components/DrinkwaterNormenHierarchy";
import { MethodologyBadge } from "@/components/MethodologyBadge";

export const metadata: Metadata = {
  title: "Drinkwaternormen Nederland: wie bepaalt wat veilig drinkwater is?",
  description:
    "Drinkwaternormen NL: Drinkwaterbesluit, EU-richtlijn 2020/2184, RIVM, ILT en 10 waterbedrijven. Alles over PFAS, lood, certificering en extra filtratie.",
  alternates: { canonical: "https://waterfilterplatform.nl/drinkwaternormen" },
  openGraph: {
    images: [{ url: 'https://waterfilterplatform.nl/og/drinkwaternormen.svg', width: 1200, height: 630, alt: 'WaterfilterPlatform' }],
    title: "Drinkwaternormen Nederland: wie bepaalt wat veilig drinkwater is?",
    description:
      "Drinkwaternormen NL: Drinkwaterbesluit, EU-richtlijn 2020/2184, RIVM, ILT en 10 waterbedrijven. Alles over PFAS, lood, certificering en extra filtratie.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Wie stelt de normen voor drinkwater in Nederland vast?",
    answer:
      "De normen worden bepaald op drie niveaus. De Europese Unie stelt de kaderrichtlijn vast (EU-richtlijn 2020/2184). De Nederlandse overheid vertaalt die naar het Drinkwaterbesluit. De 10 drinkwaterbedrijven zijn verantwoordelijk voor de uitvoering. Toezicht houdt de Inspectie Leefomgeving en Transport (ILT). RIVM adviseert en publiceert de wetenschappelijke onderbouwing.",
  },
  {
    question: "Is kraanwater in Nederland echt veilig om te drinken?",
    answer:
      "Ja. Nederlands kraanwater behoort tot de veiligste ter wereld. De gemiddelde overschrijdingskans van de drinkwaternormen is uiterst laag. Drinkwaterbedrijven meten duizenden parameters per jaar en publiceren jaarlijkse kwaliteitsrapporten. Toch kiezen sommige consumenten voor extra filtratie vanwege smaak, kalk, PFAS-sporen, medicijnresten of persoonlijke voorkeur.",
  },
  {
    question: "Wat staat er in het Drinkwaterbesluit?",
    answer:
      "Het Drinkwaterbesluit 2011 (gewijzigd in 2023 naar aanleiding van EU-richtlijn 2020/2184) bevat maximale normen voor meer dan 60 parameters: bacteriologische parameters (E. coli, enterococcen), chemische stoffen (nitraat, lood, arseen, PFAS), radioactieve stoffen, en indicatorparameters zoals pH, hardheid en kleur. Drinkwaterbedrijven zijn verplicht regelmatig te meten en te rapporteren.",
  },
  {
    question: "Wat is het verschil tussen een parameterwaarde en een actiewaarde?",
    answer:
      "Een parameterwaarde is de wettelijke norm: overschrijding verplicht tot actie. Een actiewaarde is een lagere signaalwaarde: bij overschrijding moet het waterbedrijf onderzoeken of er actie nodig is, maar er is nog geen direct gevaar. Zo heeft lood een parameterwaarde van 10 microgram/liter (tijdelijk, definitief 5 ug/L per 2026), maar sommige bedrijven hanteren 1 ug/L als interne actiewaarde.",
  },
  {
    question: "Wat zijn PFAS en welke norm geldt in drinkwater?",
    answer:
      "PFAS (per- en polyfluoralkylstoffen) zijn een groep van meer dan 10.000 synthetische chemicalien die niet van nature afbreken. In het Drinkwaterbesluit geldt per 2023 een norm van 0,1 microgram/liter voor de som van 20 individuele PFAS-stoffen, en 0,5 ug/L voor alle PFAS samen. Osmosefilters verwijderen 90-99% van de meeste PFAS-verbindingen.",
  },
  {
    question: "Welke filterkeuring is noodzakelijk voor waterfilters in Nederland?",
    answer:
      "Er bestaat geen verplichte certificering voor waterfilters in Nederland, maar erkende keuringen geven garantie op werking en materiaalveiligheid. Kiwa 113 is de Nederlandse norm voor materiaalveiligheid (geen uitloging van schadelijke stoffen). NSF/ANSI 58 is de internationale standaard voor omgekeerde osmose-prestaties. NSF/ANSI 42 en 53 gelden voor koolstoffilters. Producten met deze certificeringen bieden de meeste garantie.",
  },
  {
    question: "Hoe hard is het leidingwater in mijn gemeente?",
    answer:
      "Waterhardheid varieert sterk per regio in Nederland. Zachte gebieden (Groningen, Friesland, Drenthe): 2-8 graden Duits (dH). Gemiddelde zones (Utrecht, Noord-Holland): 10-15 dH. Harde zones (Limburg, Zeeland): 20-30 dH. De grens voor zachte versus harde gebieden ligt rond 15 dH. Onze waterhardheid-pagina geeft de exacte waarde per gemeente.",
  },
  {
    question: "Worden medicijnresten gevonden in Nederlands drinkwater?",
    answer:
      "In oppervlaktewater (Maas, Rijn) worden medicijnresten zoals ibuprofen, antibiotica en anticonceptiehormonen regelmatig gemeten. Na zuivering door waterbedrijven zijn de concentraties in drinkwater echter vrijwel altijd ver onder detectielimieten of wettelijke actieniveaus. Er zijn geen normen voor individuele medicijnresten in drinkwater. Osmosefilters verwijderen 90-99% van de meeste farmaceutische stoffen.",
  },
  {
    question: "Wat verwijdert een osmosefilter precies dat het leidingwater niet verwijdert?",
    answer:
      "Omgekeerde osmose filtert op moleculair niveau (0,0001 micron). Het verwijdert stoffen die kraanwater mogelijkerwijs in lage concentraties bevat: PFAS, medicijnresten, nitraten, zware metalen (lood, arseen), microplastics en in harde gebieden kalk (calciumcarbonaat). Osmosewater heeft een TDS van 1-20 mg/l versus 150-400 mg/l voor normaal leidingwater.",
  },
  {
    question: "Welk drinkwaterbedrijf levert mijn water?",
    answer:
      "Nederland heeft 10 drinkwaterbedrijven die geografisch zijn verdeeld. De grootste zijn Vitens (Midden- en Oost-Nederland), Evides (Zeeland, Zuid-Holland), Brabant Water (Noord-Brabant), PWN (Noord-Holland) en Dunea (Den Haag, Zuid-Holland). Welk bedrijf uw water levert kunt u vinden via de website van uw gemeente of via vewin.nl.",
  },
  {
    question: "Is er een Europese norm voor microplastics in drinkwater?",
    answer:
      "De EU-richtlijn 2020/2184 verplicht lidstaten om microplastics in drinkwater te gaan monitoren, maar er is nog geen wettelijke grenswaarde vastgesteld. WHO concludeert dat er bij huidige blootstelling via drinkwater geen bewijs is voor een direct gezondheidsrisico, maar de wetenschap is nog in ontwikkeling. Osmosefilters verwijderen microplastics van meer dan 1 micron vrijwel volledig.",
  },
  {
    question: "Wat is de nieuwe EU-loodnorm voor drinkwater?",
    answer:
      "De EU-richtlijn 2020/2184 verlaagt de maximale loodconcentratie in drinkwater van 10 naar 5 microgram/liter, met een implementatietermijn tot 12 januari 2036 (uitstel mogelijk vanwege infrastructuuruitdagingen). Nederland heeft al circa 180.000 loden huisaansluitingen vervangen. Loodblootstelling via drinkwater is vrijwel uitsluitend een probleem bij woningen met loden leidingen gebouwd voor 1960.",
  },
];

const clusters = [
  {
    title: "Wie controleert drinkwater?",
    href: "/drinkwaternormen/wie-controleert-drinkwater",
    description: "RIVM, ILT, waterbedrijven en de rol van de overheid. Wie meet wat, hoe vaak en wat zijn de gevolgen van overschrijding?",
  },
  {
    title: "Drinkwaterbesluit",
    href: "/drinkwaternormen/drinkwaterbesluit",
    description: "De Nederlandse wetgeving: meer dan 60 parameters, rapportageverplichtingen en recente wijzigingen door EU-richtlijn 2020/2184.",
  },
  {
    title: "EU-drinkwaterrichtlijn",
    href: "/drinkwaternormen/eu-drinkwaterrichtlijn",
    description: "EU-richtlijn 2020/2184: nieuwe normen voor PFAS, lood, microplastics-monitoring en risicogebaseerd toezicht.",
  },
  {
    title: "Drinkwaterbedrijven",
    href: "/drinkwaternormen/drinkwaterbedrijven",
    description: "De 10 Nederlandse drinkwaterbedrijven: wie levert in uw regio, hoe zuiveren ze en waar vindt u kwaliteitsrapporten?",
  },
  {
    title: "Waterfilter certificering",
    href: "/drinkwaternormen/waterfilter-certificering",
    description: "NSF/ANSI, Kiwa, ACS: wat betekenen deze keurmerken en waarom zijn ze belangrijk bij de aanschaf van een waterfilter?",
  },
  {
    title: "Kiwa, NSF en ANSI",
    href: "/drinkwaternormen/kiwa-nsf-ansi",
    description: "Diepgaand: Kiwa 113, NSF 58 (RO), NSF 42/53 en ACS vergeleken. Welke norm zegt wat over prestaties versus materiaalveiligheid?",
  },
  {
    title: "PFAS in drinkwater",
    href: "/drinkwaternormen/pfas",
    description: "PFAS-normen in het Drinkwaterbesluit, hotspots in Nederland, gezondheidsrisicos en hoe osmose 90-99% verwijdert.",
  },
  {
    title: "Lood in drinkwater",
    href: "/drinkwaternormen/lood",
    description: "EU-norm 2026: 5 ug/L. Loden leidingen in Nederland, wie heeft risico, hoe meten en wat helpt echt.",
  },
  {
    title: "Kalk en hard water",
    href: "/drinkwaternormen/kalk-hard-water",
    description: "Waterhardheidsnormen, de dH-schaal, effecten op apparaten en gezondheid, en de keuze tussen ontharder en osmose.",
  },
  {
    title: "Medicijnresten",
    href: "/drinkwaternormen/medicijnresten",
    description: "Farmacostetica in oppervlaktewater en drinkwater, meetresultaten, geldende normen (of gebrek eraan) en filteropties.",
  },
  {
    title: "Microplastics",
    href: "/drinkwaternormen/microplastics",
    description: "WHO-bevindingen, NL-situatie, ontbrekende wettelijke normen en welke filters microplastics effectief tegenhouden.",
  },
  {
    title: "Osmose als extra stap",
    href: "/drinkwaternormen/reverse-osmosis",
    description: "Waarom kiezen consumenten voor osmose bovenop veilig kraanwater? TDS, smaak, risicogroepen en de 4-in-1 kraan.",
  },
];

export default function DrinkwaternormenPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Drinkwaternormen", url: "https://waterfilterplatform.nl/drinkwaternormen" },
        ]}
      />
      <SchemaOrg
        schema={[
          {
            "@type": "CollectionPage",
            name: "Drinkwaternormen Nederland",
            url: "https://waterfilterplatform.nl/drinkwaternormen",
            description: "EU-richtlijn, Drinkwaterbesluit, RIVM, ILT en de 10 Nederlandse waterbedrijven.",
            inLanguage: "nl-NL",
            isPartOf: {
              "@type": "WebSite",
              name: "WaterfilterPlatform",
              url: "https://waterfilterplatform.nl",
            },
          },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Drinkwaternormen Nederland: wie bepaalt wat veilig drinkwater is?",
          description:
            "Drinkwaternormen NL: Drinkwaterbesluit, EU-richtlijn 2020/2184, RIVM, ILT en 10 waterbedrijven.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/drinkwaternormen",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Drinkwaternormen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Drinkwaternormen in Nederland: wie bepaalt wat veilig drinkwater is?
          </h1>
          <QuickAnswer answer="Drinkwaternormen in Nederland worden bepaald door EU-richtlijn 2020/2184, uitgewerkt in het Drinkwaterbesluit. RIVM levert de wetenschappelijke onderbouwing, ILT houdt toezicht en de 10 drinkwaterbedrijven zijn verantwoordelijk voor levering en kwaliteitscontrole. Nederlands kraanwater voldoet vrijwel altijd aan alle normen, maar sommige consumenten kiezen voor extra filtratie vanwege smaak, kalk of persoonlijke risicoperceptie." />
          <figure className="mt-6">
            <DrinkwaterNormenHierarchy className="w-full h-auto rounded-2xl shadow-sm bg-white" />
            <figcaption className="text-xs text-gray-500 text-center mt-2">
              Hiërarchie van Nederlandse drinkwaterregelgeving: EU &rarr; nationale wet &rarr; toezicht door RIVM en ILT &rarr; 10 waterbedrijven &rarr; consument.
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <MethodologyBadge lastReviewed="2026-05-22" />
        <CTABanner context="osmose" />

        <section className="mt-10 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Het drielaagse systeem: EU, Nederland, waterbedrijf
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Drinkwaterkwaliteit wordt in Nederland geregeld op drie niveaus die op elkaar voortbouwen.
            Bovenaan staat de Europese Unie, die met de{" "}
            <Link href="/drinkwaternormen/eu-drinkwaterrichtlijn" className="text-[#005F8A] hover:underline font-medium">
              EU-drinkwaterrichtlijn 2020/2184
            </Link>{" "}
            de kaderregels stelt. Lidstaten moeten deze richtlijn vertalen naar nationale wetgeving.
            In Nederland is dat het{" "}
            <Link href="/drinkwaternormen/drinkwaterbesluit" className="text-[#005F8A] hover:underline font-medium">
              Drinkwaterbesluit
            </Link>,
            dat meer dan 60 parameters bevat met maximale waarden voor bacteriologische,
            chemische en fysische eigenschappen van drinkwater.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Op het uitvoerend niveau staan de{" "}
            <Link href="/drinkwaternormen/drinkwaterbedrijven" className="text-[#005F8A] hover:underline font-medium">
              10 Nederlandse drinkwaterbedrijven
            </Link>.
            Zij zijn wettelijk verantwoordelijk voor het leveren van drinkwater dat aan alle normen voldoet,
            van bron tot aan de huisaansluiting. De Inspectie Leefomgeving en Transport (ILT) houdt
            onafhankelijk toezicht. RIVM monitort en adviseert op wetenschappelijk vlak.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Zijn de normen streng genoeg?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die vraag is minder eenvoudig te beantwoorden dan ze lijkt. Wettelijke normen zijn gebaseerd
            op een risicoafweging: ze beschermen de brede bevolking, inclusief kwetsbare groepen, bij
            levenslange blootstelling. Voor de meeste parameters geldt een veiligheidsmarge van factor 10
            tot 1000 ten opzichte van de laagste dosis waarbij gezondheidseffecten zijn waargenomen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tegelijkertijd ontwikkelt de wetenschap. PFAS stond 20 jaar geleden niet in de normen omdat
            we de omvang van de problematiek niet kenden. Nieuwe EU-regels (2020/2184) hebben de norm
            aangescherpt. Medicijnresten kennen nog steeds geen wettelijke grenswaarden, ondanks detectie
            in oppervlaktewater. Dit is niet per definitie gevaarlijk, maar het toont aan dat regulering
            altijd achterloopt op wetenschappelijke inzichten.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De genuanceerde conclusie: kraanwater in Nederland is veilig conform alle huidige normen.
            Consumenten die extra zekerheid willen vanwege PFAS-sporen, medicijnresten, lood in oudere
            leidingen of gewoonweg smaak en kalk, kunnen kiezen voor aanvullende thuisfiltratie.
            Dat is een persoonlijke keuze, geen noodzaak.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Recente wijzigingen: EU-richtlijn 2020/2184
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De herziene EU-drinkwaterrichtlijn van 2020 heeft de grootste revisie van Europese
            drinkwaternormen in twee decennia teweeggebracht. De belangrijkste wijzigingen:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>PFAS:</strong> Voor het eerst wettelijke normen voor PFAS in drinkwater.
              Grenswaarden zijn 0,1 ug/L voor 20 prioritaire PFAS afzonderlijk en 0,5 ug/L voor
              alle PFAS samen.
            </li>
            <li>
              <strong>Lood:</strong> Verlaging van 10 naar 5 microgram/liter, met een implementatietermijn
              tot 2036. Lees meer op onze pagina over{" "}
              <Link href="/drinkwaternormen/lood" className="text-[#005F8A] hover:underline font-medium">lood in drinkwater</Link>.
            </li>
            <li>
              <strong>Microplastics:</strong> Verplichte monitoring, nog geen wettelijke grenswaarden.
              Meer informatie op{" "}
              <Link href="/drinkwaternormen/microplastics" className="text-[#005F8A] hover:underline font-medium">microplastics in drinkwater</Link>.
            </li>
            <li>
              <strong>Risicogebaseerd toezicht:</strong> Waterbedrijven moeten risicoanalyses uitvoeren
              voor het hele stroomgebied, niet alleen voor het eindproduct.
            </li>
            <li>
              <strong>Toegang tot veilig water:</strong> Lidstaten moeten toegang tot veilig drinkwater
              voor kwetsbare groepen garanderen.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Waterfilter certificering: wat zijn de keurmerken waard?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Nederland is er geen wettelijke verplichting voor waterfilter-certificering. Toch zijn
            keuringen van groot belang: ze bewijzen dat een filter doet wat het belooft en dat het
            geen schadelijke stoffen afgeeft aan het drinkwater. De twee belangrijkste keurmerken zijn:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Kiwa 113:</strong> Nederlandse norm voor materiaalveiligheid. Garandeert dat het
              filter geen schadelijke stoffen afgeeft.
            </li>
            <li>
              <strong>NSF/ANSI 58:</strong> Internationale standaard voor omgekeerde osmose-prestaties.
              Bewijst dat het filter minimaal 75% van specifieke contaminanten verwijdert. Meer informatie
              op{" "}
              <Link href="/drinkwaternormen/kiwa-nsf-ansi" className="text-[#005F8A] hover:underline font-medium">
                onze Kiwa-NSF-ANSI vergelijkingspagina
              </Link>.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij de aankoop van een waterfilter of osmosesysteem is het raadzaam altijd te controleren
            welke certificeringen het product draagt. Een goede gids vindt u op onze pagina over{" "}
            <Link href="/drinkwaternormen/waterfilter-certificering" className="text-[#005F8A] hover:underline font-medium">
              waterfilter certificering
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Specifieke stoffen: PFAS, lood, kalk en meer
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Drinkwaternormen bestaan niet in een vacuum: ze zijn altijd verbonden aan specifieke stoffen
            met specifieke gezondheidsrisicos en -toepassingen. Onze diepte-artikelen per stof bespreken
            de wetenschappelijke onderbouwing, de geldende norm, de situatie in Nederland en de filteropties:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <Link href="/drinkwaternormen/pfas" className="text-[#005F8A] hover:underline font-medium">
                PFAS
              </Link>{" "}
              &mdash; synthetische stoffen die accumuleren en waarvoor osmose de beste thuisoplossing is
            </li>
            <li>
              <Link href="/drinkwaternormen/lood" className="text-[#005F8A] hover:underline font-medium">
                Lood
              </Link>{" "}
              &mdash; risico bij woningen gebouwd voor 1960 met loden leidingen
            </li>
            <li>
              <Link href="/drinkwaternormen/kalk-hard-water" className="text-[#005F8A] hover:underline font-medium">
                Kalk en hard water
              </Link>{" "}
              &mdash; geen gezondheidsrisico, maar schade aan apparaten en smaak
            </li>
            <li>
              <Link href="/drinkwaternormen/medicijnresten" className="text-[#005F8A] hover:underline font-medium">
                Medicijnresten
              </Link>{" "}
              &mdash; detecteerbaar in oppervlaktewater, nauwelijks in gereinigd drinkwater
            </li>
            <li>
              <Link href="/drinkwaternormen/microplastics" className="text-[#005F8A] hover:underline font-medium">
                Microplastics
              </Link>{" "}
              &mdash; normen ontbreken, osmose verwijdert alles boven 1 micron
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Osmose als aanvulling op veilig kraanwater
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Veel consumenten die osmose overwegen stellen de vraag: "Maar het water is toch al veilig?"
            Dat klopt. Toch kiezen steeds meer huishoudens voor osmosefiltratie als aanvulling,
            niet als correctie. De redenen:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Smaak:</strong> Osmosewater heeft een TDS van 1-20 mg/L versus 150-400 voor leidingwater. Veel mensen ervaren dit als frisser en puurder.</li>
            <li><strong>Kalk:</strong> In harde gebieden (meer dan 15 dH) voorkomt osmose kalkaanslag op flessen, apparaten en tanden.</li>
            <li><strong>PFAS-sporen:</strong> Sommige leidingwaterbronnen hebben lage maar detecteerbare PFAS-concentraties onder de norm. Osmose verwijdert 90-99%.</li>
            <li><strong>Risicogroepen:</strong> Baby's, zwangere vrouwen en immuungecompromitteerden profiteren van de extra barriere die osmose biedt.</li>
            <li><strong>Loden leidingen:</strong> In woningen van voor 1960 met nog onvervangen huisinstallatie biedt osmose direct op het kraanpunt de beste bescherming.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meer over osmose als aanvulling op het waterleidingennet vindt u op onze pagina over{" "}
            <Link href="/drinkwaternormen/reverse-osmosis" className="text-[#005F8A] hover:underline font-medium">
              omgekeerde osmose en drinkwaternormen
            </Link>.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Verdieping per onderwerp</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clusters.map((cluster) => (
              <Link
                key={cluster.href}
                href={cluster.href}
                className="block border border-gray-200 rounded-lg p-5 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <h3 className="font-semibold text-[#005F8A] mb-2">{cluster.title}</h3>
                <p className="text-sm text-gray-600">{cluster.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Stoffen in drinkwater uitgelegd</p>
              <p className="text-sm text-gray-500">Welke stoffen worden gemeten in drinkwater en wat betekenen de grenswaarden?</p>
            </Link>
            <Link href="/leidingwater" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Leidingwater kwaliteit in Nederland</p>
              <p className="text-sm text-gray-500">Alles over de kwaliteit, samenstelling en veiligheid van Nederlands leidingwater.</p>
            </Link>
            <Link href="/filtertechnieken" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Welke filter verwijdert wat?</p>
              <p className="text-sm text-gray-500">Vergelijk filtertechnieken op basis van de stoffen die ze uit drinkwater verwijderen.</p>
            </Link>
            <Link href="/waterhardheid" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Waterhardheid en normen per gemeente</p>
              <p className="text-sm text-gray-500">Waterhardheid verschilt per regio. Bekijk de waarden voor uw gemeente.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
