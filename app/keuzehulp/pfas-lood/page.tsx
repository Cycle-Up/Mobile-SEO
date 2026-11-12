import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { AuthorBox } from "@/components/AuthorBox";
import { HealthDisclaimer } from "@/components/HealthDisclaimer";
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { PureFilterCTA } from '@/components/PureFilterCTA';
import { SgsResults } from '@/components/SgsResults';
import { PUREFILTER } from '@/lib/purefilter.mjs';
import { FOUR_IN_ONE, THREE_WAY, KRAAN_MARKET } from '@/lib/kranen.mjs';
import { COUNTERTOP } from '@/lib/countertop.mjs';

const PAGE_TITLE = "PFAS of lood in je water: wanneer kies je osmose?";
const PAGE_URL = "https://waterfilterplatform.nl/keuzehulp/pfas-lood";
// Max 160 tekens.
const PAGE_DESCRIPTION =
  "PFAS of lood in je leidingwater? Osmose vermindert beide het sterkst. Keuzehulp met onze keuze per situatie, gemeten labcijfers en wanneer testen zinvol is.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    locale: "nl_NL",
  },
};

type FaqItem = { question: string; answer: string; links?: [string, string][] };

// Zichtbare antwoorden en FAQPage-JSON-LD gebruiken exact dezelfde tekst; de links staan los onder het antwoord.
const faqItems: FaqItem[] = [
  {
    question: "Is PFAS in Nederlands kraanwater boven de norm?",
    answer:
      "Nee. Nederlands kraanwater voldoet aan de wettelijke norm van 0,1 microgram per liter (100 nanogram per liter) voor de som van 20 PFAS, die sinds januari 2026 geldt. Het RIVM hanteert daarnaast een veel strengere advieswaarde van 4,4 nanogram PFOA-equivalenten per liter, die geen wettelijke norm is. Volgens een analyse van Greenpeace (september 2026) ligt ongeveer een derde van het drinkwater boven die advieswaarde. De waarden voor jouw adres staan bij je drinkwaterbedrijf.",
    links: [["/kennisbank/pfas-nederland-kaart", "PFAS-kaart van Nederland"]],
  },
  {
    question: "Welk filter haalt PFAS echt weg?",
    answer: `Omgekeerde osmose vermindert PFAS het sterkst, ook een groot deel van de kortketenige stoffen. Een koolstofblokfilter vermindert vooral langketenige PFAS; over filterkannen is weinig onafhankelijk bewijs. Onze keuze: maximaal zuiveren plus zeer heet en gekoeld water met de ${FOUR_IN_ONE.name} (${FOUR_IN_ONE.labReport.lab}: PFOS ${FOUR_IN_ONE.lab.PFOS} en PFOA ${FOUR_IN_ONE.lab.PFOA} minder bij een nieuw systeem). Osmosewater uit je eigen kraan met een zuiver-water-kraan en The Source. Niet boren: het ${COUNTERTOP.name} op het aanrecht. Zonder osmose of installatie-gedoe: de ${PUREFILTER.name} (Equinox Labs: ${PUREFILTER.pfasReduction} minder van vijf PFAS bij een nieuw filter). Alle vier verkoopt PureAqua, waaraan WaterfilterPlatform gelieerd is.`,
    links: [["/pfas-waterfilter", "PFAS waterfilter: onze keuze per situatie"]],
  },
  {
    question: "Welk filter kies ik als ik me zorgen maak over PFAS en lood?",
    answer: `Dan is osmose volgens ons de logische keuze, omdat het beide sterk vermindert. Bij de ${FOUR_IN_ONE.name} mat ${FOUR_IN_ONE.labReport.lab} naast PFOS ${FOUR_IN_ONE.lab.PFOS} en PFOA ${FOUR_IN_ONE.lab.PFOA} ook lood ${FOUR_IN_ONE.lab.lood} minder. Voor The Source en het ${COUNTERTOP.shortName} is geen eigen labmeting gepubliceerd; ze werken met dezelfde techniek. Voor de ${PUREFILTER.name} zagen wij geen labresultaat voor lood, dus bij lood raden wij die niet als oplossing aan. PureAqua verkoopt deze producten; WaterfilterPlatform is aan PureAqua gelieerd.`,
    links: [["/pfas-waterfilter", "PFAS waterfilter overzicht"], [FOUR_IN_ONE.reviewPath, FOUR_IN_ONE.name]],
  },
  {
    question: "Mijn huis is van voor 1960: hoe weet ik of ik loden leidingen heb?",
    answer:
      "Dat kun je op drie manieren nagaan. Kijk in het bouwdossier van je gemeente of vraag het je verhuurder. Laat een loodgieter de leidingen bekijken: loden leidingen zijn grijs, zacht en buigzaam, en laten een zilverachtige kras achter als je er met een mes overheen gaat. Of laat je leidingwater testen bij een gecertificeerd laboratorium; een verhoogd loodgehalte wijst op lood in je huisinstallatie.",
    links: [["/leidingwater/lood", "Lood in leidingwater"]],
  },
  {
    question: "Kan ik PFAS zelf laten testen?",
    answer:
      "Ja, via een laboratorium dat voor PFAS in water geaccrediteerd is. De prijs hangt af van het lab en van het aantal stoffen; vraag vooraf een offerte en vraag welke PFAS het lab meet. Een thuistest die je zelf afleest geeft hooguit een grove indicatie. Voor kraanwater zijn de gegevens van je drinkwaterbedrijf gratis en meestal de beste bron.",
    links: [["/pfas-waterfilter/testen", "PFAS in water testen"]],
  },
  {
    question: "Wat kost een osmosefilter per jaar?",
    answer: `Een los osmosesysteem onder het aanrecht kost doorgaans ${KRAAN_MARKET.underSinkRange}. Daarna betaal je voor filters en een membraan dat na een paar jaar vervangen moet worden, plus wat extra water door het spoelwater. Bij PureAqua kost The Source ${THREE_WAY.sourcePrice}, een zuiver-water-kraan ${THREE_WAY.tapPrice}; onderhoud: ${THREE_WAY.filters}. De ${FOUR_IN_ONE.name} kost ${FOUR_IN_ONE.price}, met filterkosten van omgerekend circa ${FOUR_IN_ONE.filterCostYearEur} euro per jaar. Het ${COUNTERTOP.shortName} kost ${COUNTERTOP.price}. WaterfilterPlatform is gelieerd aan PureAqua.`,
  },
  {
    question: "Is de combinatie van PFAS en lood extra reden tot zorg?",
    answer:
      "Als beide stoffen in je water zitten, is het praktisch om een filter te kiezen dat ze allebei aanpakt; osmose doet dat. Voor de gezondheidsvraag zelf is je huisarts leidend. Lood komt in Nederland vrijwel alleen uit oude leidingen in huis; het echt vervangen van loden leidingen blijft de structurele oplossing.",
  },
];

const choiceRows = [
  {
    situatie: "PFAS en lood, plus zeer heet en gekoeld water",
    keuze: FOUR_IN_ONE.name,
    href: FOUR_IN_ONE.reviewPath,
    gemeten: `${FOUR_IN_ONE.labReport.lab}: PFOS ${FOUR_IN_ONE.lab.PFOS}, PFOA ${FOUR_IN_ONE.lab.PFOA}, lood ${FOUR_IN_ONE.lab.lood} minder`,
  },
  {
    situatie: "Osmosewater uit je eigen keukenkraan",
    keuze: "Zuiver-water-kraan met The Source",
    href: THREE_WAY.reviewPath,
    gemeten: "Omgekeerde osmose; geen eigen labmeting gepubliceerd",
  },
  {
    situatie: "Huurwoning of niet boren",
    keuze: COUNTERTOP.name,
    href: COUNTERTOP.reviewPath,
    gemeten: "Omgekeerde osmose; geen eigen labmeting gepubliceerd",
  },
  {
    situatie: "Alleen PFAS, zonder osmose of installatie-gedoe",
    keuze: PUREFILTER.name,
    href: PUREFILTER.reviewPath,
    gemeten: `Equinox Labs: ${PUREFILTER.pfasReduction} minder van vijf PFAS; geen labresultaat voor lood`,
  },
];

export default function PfasLoodPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Keuzehulp", url: "https://waterfilterplatform.nl/keuzehulp" },
          { name: "PFAS of lood in water", url: PAGE_URL },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems.map(({ question, answer }) => ({ question, answer }))} />
      <SchemaOrg
        type="Article"
        article={{
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          datePublished: "2026-05-17",
          dateModified: "2026-11-10",
          url: PAGE_URL,
          sources: ["RIVM", "EU-drinkwaterrichtlijn 2020/2184", "SGS", "Equinox Labs", "NOS"],
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/keuzehulp" className="hover:underline">Keuzehulp</Link>
            <span className="mx-2">/</span>
            <span>PFAS of lood in water</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PFAS of lood in drinkwater: wanneer is osmose de beste keuze?
          </h1>
          <p className="text-xs text-gray-500 mb-2">
            Laatst bijgewerkt: <time dateTime="2026-11-10">10 november 2026</time>
          </p>
          <QuickAnswer
            question="Welk filter kies je bij PFAS of lood?"
            answer={`Maak je je zorgen over zowel PFAS als lood, dan is omgekeerde osmose volgens ons de beste thuisoplossing: het vermindert beide sterk. Gemeten voorbeeld: bij de ${FOUR_IN_ONE.name} mat ${FOUR_IN_ONE.labReport.lab} PFOS ${FOUR_IN_ONE.lab.PFOS}, PFOA ${FOUR_IN_ONE.lab.PFOA} en lood ${FOUR_IN_ONE.lab.lood} minder. Gaat het alleen om PFAS en wil je geen osmose, dan vermindert een koolstoffilter op de leiding vooral langketenige PFAS. PureAqua, dat deze producten verkoopt, is aan WaterfilterPlatform gelieerd.`}
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <AuthorBox datePublished="2026-05-17" dateModified="2026-11-10" />
        <HealthDisclaimer />

        <section className="prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">
            Wanneer is dit relevant voor je?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nederlands kraanwater is veilig en voldoet aan de wettelijke normen. Er zijn twee situaties waarin extra
            filtratie toch zinvol kan zijn. De eerste is PFAS. Het water blijft onder de wettelijke norm van 100
            nanogram per liter voor de som van 20 PFAS, maar volgens een analyse van Greenpeace ligt ongeveer een derde
            van het drinkwater boven de strengere RIVM-advieswaarde van 4,4 nanogram PFOA-equivalenten per liter, met de
            hoogste waarden onder meer in IJmuiden en Zaandam (
            <a href="https://nos.nl/artikel/2632030" rel="noopener" className="text-[#005F8A] hover:underline">NOS, 22 september 2026</a>
            ). Bekende PFAS-bronnen zijn onder meer de omgeving van Chemours (voorheen DuPont) in Dordrecht en plekken
            waar PFAS-houdend blusschuim is gebruikt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De tweede situatie is een woning van voor 1960 die mogelijk nog loden leidingen of loden verbindingsstukken
            heeft. Drinkwaterbedrijven leveren loodvrij water; lood komt uit de huisinstallatie.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De actuele waarden in jouw leveringsgebied vind je bij je drinkwaterbedrijf. Achtergrond lees je op{" "}
            <Link href="/leidingwater/pfas" className="text-[#005F8A] hover:underline font-medium">
              onze pagina over PFAS in leidingwater
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">
            Onze keuze bij PFAS en lood
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Percentages noemen we alleen waar een onafhankelijk labrapport bestaat. Uitleg over alle opties staat in onze
            gids over het{" "}
            <Link href="/pfas-waterfilter" className="text-[#005F8A] hover:underline font-medium">PFAS waterfilter</Link>.
          </p>
        </section>

        <div className="overflow-x-auto -mx-4 px-4 mb-3 not-prose">
          <table className="w-full min-w-[560px] text-sm border-collapse">
            <thead>
              <tr className="bg-[#003F5C] text-white">
                <th className="p-3 text-left">Jouw situatie</th>
                <th className="p-3 text-left">Onze keuze</th>
                <th className="p-3 text-left">Gemeten</th>
              </tr>
            </thead>
            <tbody>
              {choiceRows.map((row, i) => (
                <tr key={row.keuze} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 text-gray-700">{row.situatie}</td>
                  <td className="p-3 font-medium">
                    <Link href={row.href} className="text-[#005F8A] underline">{row.keuze}</Link>
                  </td>
                  <td className="p-3 text-gray-700">{row.gemeten}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-6">
          Alle vier verkoopt PureAqua, waaraan WaterfilterPlatform gelieerd is. Labcijfers gelden voor de geteste stoffen
          en een nieuw filter of systeem.
        </p>

        <div className="mb-8">
          <SgsResults />
        </div>

        <section className="prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">
            Wat vermindert omgekeerde osmose?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een osmosemembraan houdt de meeste opgeloste stoffen tegen. In gepubliceerde tests geldt doorgaans:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Langketenige PFAS (zoals PFOS en PFOA):</strong> 95-99%
            </li>
            <li>
              <strong>Kortketenige PFAS (zoals PFBS en GenX):</strong> 85-95%; het zeer kleine TFA is lastiger
            </li>
            <li>
              <strong>Lood:</strong> sterk; bij de {FOUR_IN_ONE.name} mat {FOUR_IN_ONE.labReport.lab} {FOUR_IN_ONE.lab.lood} minder lood
            </li>
            <li>
              <strong>Nitraat:</strong> grotendeels, relevant in landbouwgebieden
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een NSF/ANSI 58-certificaat of een openbaar labrapport geeft de meeste zekerheid. Een certificaat geldt alleen
            voor de stoffen die erop staan. Zie ook onze pagina over{" "}
            <Link href="/waterfilter/nanoplastics" className="text-[#005F8A] hover:underline font-medium">
              nanoplastics filtratie
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">
            Wat vermindert osmose minder goed?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Osmose is breed effectief, maar heeft grenzen. Sommige kleine, vluchtige organische stoffen kunnen deels
            passeren; een koolstof voor- of nafilter, dat in de meeste osmosesystemen zit, vangt een deel daarvan af. Ook
            heel kleine moleculen, zoals TFA, worden minder goed tegengehouden dan grotere.
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">
            Zijn er alternatieven voor osmose?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Koolstofblokfilter tegen PFAS:</strong> vermindert langketenige PFAS vaak goed, kortketenige
              duidelijk minder. Een verzadigd filter laat meer door zonder dat je het merkt. Een voorbeeld met labtest is
              de{" "}
              <Link href={PUREFILTER.reviewPath} className="text-[#005F8A] hover:underline font-medium">{PUREFILTER.name}</Link>{" "}
              op de koude leiding ({PUREFILTER.pfasReduction} minder van vijf PFAS bij een nieuw filter, Equinox Labs);
              voor lood zagen wij van dat filter geen labresultaat.
            </li>
            <li>
              <strong>Filter met een NSF/ANSI 53-certificaat voor lood:</strong> zulke filters zijn op loodvermindering
              getest. Pakken ze ook PFAS aan, dan staat dat apart op het certificaat.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Conclusie: gaat het om zowel PFAS als lood, dan is osmose volgens ons de eenvoudigste keuze, omdat het beide
            aanpakt. Meer vergelijkingen vind je op onze pagina{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
              osmosefilter kopen
            </Link>{" "}
            en bij{" "}
            <Link href="/pfas-waterfilter/vergelijken" className="text-[#005F8A] hover:underline font-medium">
              PFAS-filters vergelijken
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">
            Praktische stap: eerst testen?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Weten wat er in je water zit, helpt bij de keuze. Voor lood: laat een watermonster testen bij een
            gecertificeerd laboratorium. Neem het monster na een stilstand van minimaal 30 minuten, bijvoorbeeld de eerste
            liter van de ochtend, voor de meest representatieve meting. Voor PFAS: kijk eerst bij je drinkwaterbedrijf;
            die gegevens zijn gratis. Wil je je eigen water laten meten, lees dan hoe je{" "}
            <Link href="/pfas-waterfilter/testen" className="text-[#005F8A] hover:underline font-medium">
              je water op PFAS laat testen
            </Link>
            . Vraag bij een lab altijd vooraf een offerte.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meer over de normen lees je bij{" "}
            <Link href="/drinkwaternormen/pfas" className="text-[#005F8A] hover:underline font-medium">
              PFAS-normen voor drinkwater
            </Link>{" "}
            en over lood bij{" "}
            <Link href="/leidingwater/lood" className="text-[#005F8A] hover:underline font-medium">
              lood in leidingwater
            </Link>
            .
          </p>
          <p className="text-gray-700 mt-4">
            Meer achtergrond over PFAS: <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="text-[#005F8A] hover:underline font-medium">PFAS in drinkwater: alle feiten over PFAS-verbindingen</Link>.
          </p>
          <p className="text-gray-700 mt-4">
            Meer achtergrond over zware metalen: <Link href="/stoffen-in-drinkwater/zware-metalen" className="text-[#005F8A] hover:underline font-medium">Zware metalen in drinkwater: lood, koper en arseen</Link>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          {faqItems.map(item => (
            <details key={item.question} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
              {item.links && (
                <p className="mt-2 text-sm">
                  <span className="text-gray-500">Lees verder: </span>
                  {item.links.map(([href, label], i) => (
                    <span key={href}>
                      {i > 0 && <span className="text-gray-400">, </span>}
                      <Link href={href} className="text-[#005F8A] underline">{label}</Link>
                    </span>
                  ))}
                </p>
              )}
            </details>
          ))}
        </section>

        <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="font-semibold text-[#003F5C] mb-3">Verwante pagina&apos;s</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/pfas-waterfilter" className="text-[#005F8A] hover:underline">
                PFAS waterfilter: welke filters werken echt
              </Link>
            </li>
            <li>
              <Link href="/leidingwater/pfas" className="text-[#005F8A] hover:underline">
                PFAS in leidingwater: gebiedskaart en actuele waarden
              </Link>
            </li>
            <li>
              <Link href="/leidingwater/lood" className="text-[#005F8A] hover:underline">
                Lood in leidingwater: loden leidingen herkennen en testen
              </Link>
            </li>
            <li>
              <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline">
                Osmosefilter kopen: vergelijking en advies
              </Link>
            </li>
            <li>
              <Link href="/drinkwaternormen/pfas" className="text-[#005F8A] hover:underline">
                PFAS drinkwaternormen: EU-richtlijn en Nederlandse implementatie
              </Link>
            </li>
            <li>
              <Link href="/keuzehulp" className="text-[#005F8A] hover:underline">
                Terug naar het keuzehulp-overzicht
              </Link>
            </li>
          </ul>
        </div>

        <section className="mt-8 mb-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS in drinkwater: bronnen en risico</h3>
              <p className="text-sm text-gray-600">Wat PFAS zijn, hoe ze in drinkwater terechtkomen en wat er over de gezondheidsrisico&apos;s bekend is.</p>
            </Link>
            <Link href="/pfas-waterfilter/osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose tegen PFAS</h3>
              <p className="text-sm text-gray-600">Hoe osmose werkt, wat het kost en wat er gemeten is.</p>
            </Link>
          </div>
        </section>

        <div className="space-y-6">
          <PureFilterCTA context="pfas" content="keuzehulp-pfas-lood-purefilter" />

          <AffiliateCTA
            destination="theSource"
            campaign="omgekeerde-osmose"
            content="keuzehulp-pfas-lood-cta"
            label="Bekijk The Source (RO-systeem)"
            title="Zorgen over PFAS of lood?"
            sub={`Omgekeerde osmose vermindert PFAS en lood sterk. Eigen labwaarden van The Source staan niet in de productgegevens die wij controleerden. The Source, het osmosesysteem van onze partner PureAqua, kost ${THREE_WAY.sourcePrice}, plus een 3-weg-kraan van ${THREE_WAY.tapPrice} en ${THREE_WAY.filters}.`}
          />

          <CTABanner context="osmose" />
        </div>
      </div>
    </>
  );
}
