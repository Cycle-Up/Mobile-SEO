import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { CountertopCTA } from '@/components/CountertopCTA';
import { ThreeWayRecommendation } from '@/components/ThreeWayRecommendation';
import { SgsResults } from '@/components/SgsResults';
import { FOUR_IN_ONE, THREE_WAY, KRAAN_MARKET } from '@/lib/kranen.mjs';
import { COUNTERTOP } from '@/lib/countertop.mjs';

const PAGE_TITLE = 'Osmose en PFAS: hoeveel haalt omgekeerde osmose eruit?';
const PAGE_URL = 'https://waterfilterplatform.nl/pfas-waterfilter/osmose';
// Max 160 tekens.
const PAGE_DESCRIPTION = `Omgekeerde osmose vermindert PFAS het sterkst. Gemeten voorbeeld: SGS mat bij de PureAqua 4-in-1 PFOS ${FOUR_IN_ONE.lab.PFOS} minder. Plus kosten en nadelen.`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: 'article',
    locale: 'nl_NL',
  },
};

// Zichtbare FAQ en FAQPage-JSON-LD gebruiken exact dezelfde tekst.
const faqItems = [
  {
    question: 'Hoeveel procent PFAS verwijdert omgekeerde osmose?',
    answer: `Dat hangt af van de stof en van de staat van het membraan. Omgekeerde osmose verwijdert in onderzoek het grootste deel van de PFAS, ook veel kortketenige soorten; langketenige PFAS zoals PFOS en PFOA houdt het membraan het best tegen. Dat geldt voor een nieuw membraan met een goed voorfilter; een versleten membraan laat meer door. In rapport ${FOUR_IN_ONE.labReport.number} van ${FOUR_IN_ONE.labReport.lab} kwam een nieuw systeem van de ${FOUR_IN_ONE.name} uit op PFOS ${FOUR_IN_ONE.lab.PFOS} en PFOA ${FOUR_IN_ONE.lab.PFOA} minder. PureAqua verkoopt deze kraan; WaterfilterPlatform is aan PureAqua gelieerd.`,
  },
  {
    question: 'Waarom werkt een osmosemembraan zo goed tegen PFAS?',
    answer:
      'Een osmosemembraan laat watermoleculen door en houdt de meeste opgeloste stoffen tegen, op basis van grootte en elektrische lading. PFAS worden daardoor met het spoelwater afgevoerd. Dat is anders dan bij actief kool, dat PFAS aan zijn oppervlak bindt en op termijn verzadigd raakt.',
  },
  {
    question: 'Wat is het verschil tussen osmose en een koolstoffilter voor PFAS?',
    answer:
      'Osmose vermindert zowel langketenige als kortketenige PFAS sterk. Een koolstofblokfilter vermindert langketenige PFAS zoals PFOS en PFOA vaak goed, maar kortketenige PFAS duidelijk minder. Koolstof raakt bovendien verzadigd, zonder dat je dat merkt. Een koolstoffilter is wel eenvoudiger: geen tank, geen spoelwater en meestal geen stroom.',
  },
  {
    question: 'Verwijdert osmose ook kortketenige PFAS zoals GenX en TFA?',
    answer:
      `Grotendeels. Omgekeerde osmose verwijdert in onderzoek het grootste deel van de PFAS, ook veel kortketenige soorten, al gaat dat minder goed dan bij langketenige PFAS. Het zeer kleine TFA is ook voor osmose lastiger. Actief kool houdt kortketenige PFAS duidelijk slechter vast dan osmose. Het rapport van ${FOUR_IN_ONE.labReport.lab} over een nieuw systeem van de ${FOUR_IN_ONE.name} noemt PFOS ${FOUR_IN_ONE.lab.PFOS} en PFOA ${FOUR_IN_ONE.lab.PFOA} minder; dat zijn twee langketenige stoffen, voor kortketenige PFAS geeft dat rapport geen cijfer. PureAqua verkoopt deze kraan; WaterfilterPlatform is aan PureAqua gelieerd.`,
  },
  {
    question: 'Wat kost een osmosesysteem tegen PFAS?',
    answer: `Een osmosesysteem onder het aanrecht kost doorgaans ${KRAAN_MARKET.underSinkRange}. Bij PureAqua kost The Source ${THREE_WAY.sourcePrice}, een zuiver-water-kraan ${THREE_WAY.tapPrice}; onderhoud: ${THREE_WAY.filters}. Het ${COUNTERTOP.name} kost ${COUNTERTOP.price} en heeft geen installatie nodig. De ${FOUR_IN_ONE.name} kost ${FOUR_IN_ONE.price}, met filterkosten van omgerekend circa ${FOUR_IN_ONE.filterCostYearEur} euro per jaar. Bij PureAqua is ${THREE_WAY.installation}.`,
  },
  {
    question: 'Wat zegt een NSF/ANSI 58-certificaat over PFAS?',
    answer:
      'NSF/ANSI 58 is de Amerikaanse norm voor osmosesystemen. Een certificaat geldt alleen voor de stoffen die erop staan; voor PFAS zijn dat vaak PFOA en PFOS. Heeft een systeem geen certificaat, kijk dan naar een openbaar rapport van een onafhankelijk lab, zoals het SGS-rapport van de PureAqua 4-in-1 kraan. NSF/ANSI 42 gaat alleen over smaak en geur.',
  },
  {
    question: 'Hoe weet ik of mijn osmosefilter nog goed werkt?',
    answer:
      'Vervang de filters volgens het schema van de fabrikant. Een TDS-meter laat zien of het membraan nog opgeloste zouten tegenhoudt: een stijgende waarde wijst op slijtage. PFAS zelf meet een TDS-meter niet. Wil je dat zeker weten, laat dan een monster van gefilterd en ongefilterd water in een lab meten.',
  },
  {
    question: 'Hoe vaak moet ik het osmosemembraan vervangen?',
    answer: `Dat verschilt per systeem en per verbruik. Bij de ${FOUR_IN_ONE.name} is het schema: ${FOUR_IN_ONE.filters}. Een versleten membraan of verzadigd voorfilter zie of proef je niet, terwijl het wel meer kan doorlaten. Labresultaten gelden altijd voor een nieuw systeem.`,
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'PFAS waterfilter', url: 'https://waterfilterplatform.nl/pfas-waterfilter' },
  { name: 'Osmose voor PFAS', url: PAGE_URL },
];

export default function PfasOsmosePage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          datePublished: '2026-05-01',
          dateModified: '2026-11-10',
          url: PAGE_URL,
          sources: ['RIVM', 'EU-drinkwaterrichtlijn 2020/2184', 'SGS', 'NSF International'],
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pfas-waterfilter" className="hover:underline">PFAS waterfilter</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Omgekeerde osmose</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PFAS verwijderen met omgekeerde osmose
          </h1>
          <p className="text-xs text-gray-500 mb-2">
            Laatst bijgewerkt: <time dateTime="2026-11-10">10 november 2026</time>
          </p>
          <QuickAnswer
            question="Hoeveel PFAS haalt omgekeerde osmose eruit?"
            answer={`Van de filters voor thuis haalt omgekeerde osmose de meeste PFAS uit kraanwater, ook een groot deel van de kortketenige stoffen; alleen het zeer kleine TFA blijft lastig. Hoeveel precies, verschilt per stof en per systeem. Bij een nieuw systeem van de ${FOUR_IN_ONE.name} kwam ${FOUR_IN_ONE.labReport.lab} uit op PFOS ${FOUR_IN_ONE.lab.PFOS} en PFOA ${FOUR_IN_ONE.lab.PFOA} minder. Nadelen: je hebt ruimte en een afvoer nodig, het systeem gebruikt spoelwater en filters moeten op tijd vervangen worden. PureAqua, dat deze kraan verkoopt, is aan WaterfilterPlatform gelieerd.`}
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <AuthorBox datePublished="2026-05-01" dateModified="2026-11-10" />
        <HealthDisclaimer />

        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed">
            Eerst de nuance: Nederlands kraanwater voldoet aan de wettelijke PFAS-norm van 100 nanogram per liter voor
            de som van 20 PFAS. Het RIVM hanteert een strengere advieswaarde van 4,4 nanogram PFOA-equivalenten per
            liter, die geen wettelijke norm is. Volgens een analyse van Greenpeace ligt ongeveer een derde van het
            Nederlandse drinkwater boven die advieswaarde (
            <a href="https://nos.nl/artikel/2632030" rel="noopener" className="text-[#005F8A] underline">NOS, 22 september 2026</a>).
            Osmose is dan een manier om extra marge te nemen. Welk filter bij jouw situatie past, lees je in onze gids
            over het <Link href="/pfas-waterfilter" className="text-[#005F8A] underline font-medium">PFAS waterfilter</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe werkt omgekeerde osmose tegen PFAS?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Bij omgekeerde osmose wordt water onder druk door een semipermeabel membraan geperst. Watermoleculen gaan
            erdoorheen; de meeste opgeloste stoffen, waaronder PFAS, worden tegengehouden op basis van grootte en
            elektrische lading en met het spoelwater afgevoerd.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Dat verschilt van actief kool, waar PFAS aan het koolstofoppervlak blijven hangen. Koolstof raakt op termijn
            verzadigd, en dan laat het filter meer door zonder dat je dat merkt. Een osmosemembraan slijt ook, maar
            werkt niet met binding; daardoor vermindert het ook kortketenige PFAS beter.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Een osmosesysteem heeft meestal een voorfilter (tegen zand, roest en chloor, om het membraan te beschermen),
            het osmosemembraan en vaak een nafilter of remineralisatiefilter dat weer wat mineralen toevoegt voor de
            smaak.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gemeten voorbeeld: de PureAqua 4-in-1 kraan</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hoeveel PFAS een osmosesysteem precies tegenhoudt, verschilt per stof en per systeem. Daarom noemen we een
            gemeten voorbeeld. Het osmosesysteem van de{' '}
            <Link href={FOUR_IN_ONE.reviewPath} className="text-[#005F8A] underline">{FOUR_IN_ONE.name}</Link> is door
            het onafhankelijke laboratorium {FOUR_IN_ONE.labReport.lab} getest. De kraan geeft {FOUR_IN_ONE.functions},
            voor {FOUR_IN_ONE.price}. PureAqua verkoopt de kraan; WaterfilterPlatform is aan PureAqua gelieerd.
          </p>
          <SgsResults />
          <p className="text-gray-700 mt-6 mb-4 leading-relaxed">
            Voor de andere osmose-opties van PureAqua is geen eigen PFAS-meting gepubliceerd. Ze werken met dezelfde
            techniek, maar percentages noemen we alleen waar een labrapport bestaat:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2 leading-relaxed">
            <li>
              <strong>Osmosewater uit je eigen keukenkraan:</strong> een{' '}
              <Link href={THREE_WAY.reviewPath} className="text-[#005F8A] underline">zuiver-water-kraan met The Source</Link>{' '}
              onder het aanrecht. The Source kost {THREE_WAY.sourcePrice}, de kraan {THREE_WAY.tapPrice}.
            </li>
            <li>
              <strong>Niet boren, bijvoorbeeld in een huurwoning:</strong> het{' '}
              <Link href={COUNTERTOP.reviewPath} className="text-[#005F8A] underline">{COUNTERTOP.name}</Link> op het
              aanrecht, met omgekeerde osmose en remineralisatie, voor {COUNTERTOP.price}.
            </li>
          </ul>
          <ThreeWayRecommendation content="pfas-waterfilter-osmose-3weg-aanbeveling" />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Omgekeerde osmose of koolstoffilter tegen PFAS?
          </h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-3">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="p-3 text-left">Eigenschap</th>
                  <th className="p-3 text-left">Omgekeerde osmose</th>
                  <th className="p-3 text-left">Koolstofblokfilter</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 font-medium text-[#003F5C]">Langketenige PFAS (PFOS, PFOA)</td>
                  <td className="p-3 text-green-700 font-semibold">Sterk verminderd</td>
                  <td className="p-3 text-gray-700">Vaak goed verminderd</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-medium text-[#003F5C]">Kortketenige PFAS (PFBS, GenX)</td>
                  <td className="p-3 text-green-700 font-semibold">Grotendeels verminderd, TFA lastiger</td>
                  <td className="p-3 text-red-600">Duidelijk minder</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-medium text-[#003F5C]">Werking</td>
                  <td className="p-3">Membraan houdt opgeloste stoffen tegen</td>
                  <td className="p-3">Binding aan het koolstofoppervlak</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-medium text-[#003F5C]">Verzadiging</td>
                  <td className="p-3">Membraan slijt geleidelijk</td>
                  <td className="p-3">Koolstof raakt vol, ongemerkt</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-medium text-[#003F5C]">Spoelwater</td>
                  <td className="p-3">Ja</td>
                  <td className="p-3">Nee</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-medium text-[#003F5C]">Ruimte en installatie</td>
                  <td className="p-3">Onder het aanrecht, met afvoer; of een apparaat op het aanrecht</td>
                  <td className="p-3">Klein, vaak zonder stroom</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            Algemene inschatting per techniek, bij een nieuw filter en correct onderhoud; geen gemeten percentages.
            Hoeveel een concreet product vermindert, verschilt per stof en per systeem. Gemeten cijfers noemen we alleen
            waar een labrapport bestaat, zoals hierboven bij de {FOUR_IN_ONE.name}. Bijgewerkt november 2026.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Certificaat of labrapport: waar let je op?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            NSF/ANSI 58 is de Amerikaanse norm voor osmosesystemen. Een certificaat geldt alleen voor de stoffen die erop
            staan; voor PFAS zijn dat vaak PFOA en PFOS. Controleer een certificaat via de website van NSF met het
            modelnummer. Heeft een systeem geen certificaat, dan is een openbaar rapport van een onafhankelijk lab het
            beste bewijs. Let dan op drie dingen: welke PFAS zijn gemeten, was het systeem nieuw, en wie deed de test?
          </p>
          <p className="text-gray-700 leading-relaxed">
            Voor de PureAqua 4-in-1 kraan is er zo&apos;n rapport van {FOUR_IN_ONE.labReport.lab}; een NSF-certificaat
            claimen wij voor die kraan niet.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Kosten en praktische overwegingen
          </h2>
          <div className="space-y-3 mb-6">
            {[
              {
                titel: 'Aanschaf',
                tekst: `Een osmosesysteem onder het aanrecht kost doorgaans ${KRAAN_MARKET.underSinkRange}. Een osmose-apparaat op het aanrecht, zoals het ${COUNTERTOP.name} (${COUNTERTOP.price}), heeft geen vaste installatie nodig.`,
              },
              {
                titel: 'Installatie',
                tekst: `Een systeem onder het aanrecht sluit je aan op de koude leiding en op de afvoer. Met wat kluservaring kan dat zelf; bij PureAqua is ${THREE_WAY.installation}.`,
              },
              {
                titel: 'Filters',
                tekst: `Voorfilters vervang je meestal jaarlijks, het membraan na een paar jaar. Ter indicatie: bij The Source is het ${THREE_WAY.filters}; bij de ${FOUR_IN_ONE.name} komen de filterkosten omgerekend op circa ${FOUR_IN_ONE.filterCostYearEur} euro per jaar.`,
              },
              {
                titel: 'Spoelwater en ruimte',
                tekst: 'Een osmosesysteem gebruikt spoelwater om de tegengehouden stoffen af te voeren, en het neemt ruimte in onder of op het aanrecht. Wil je dat niet, dan is een koolstoffilter op de leiding een eenvoudiger, maar minder sterk alternatief.',
              },
            ].map(item => (
              <div key={item.titel} className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-[#005F8A] mb-1">{item.titel}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Hoe osmose zich verhoudt tot andere filters, lees je in onze{' '}
            <Link href="/pfas-waterfilter/vergelijken" className="text-[#005F8A] underline">
              vergelijking van PFAS-waterfilters
            </Link>
            . De techniek in detail staat bij{' '}
            <Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] underline">
              omgekeerde osmose
            </Link>
            .
          </p>
        </section>

        <CountertopCTA context="pfas" content="pfas-waterfilter-osmose-countertop" />

        <section className="mb-10 mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over osmose en PFAS
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-200 rounded-lg">
                <summary className="p-4 font-semibold text-[#005F8A] cursor-pointer hover:bg-gray-50">
                  {item.question}
                </summary>
                <p className="px-4 pb-4 text-gray-700 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-8 mb-10">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/pfas-waterfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS waterfilter overzicht</h3>
              <p className="text-sm text-gray-600">Onze keuze per situatie, met labcijfers en kosten</p>
            </Link>
            <Link href="/antwoorden/verwijdert-osmose-pfas" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Verwijdert osmose PFAS?</h3>
              <p className="text-sm text-gray-600">Het korte antwoord</p>
            </Link>
            <Link href="/drinkwaternormen/pfas" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen voor PFAS</h3>
              <p className="text-sm text-gray-600">Wettelijke norm en RIVM-advieswaarde</p>
            </Link>
            <Link href="/pfas-waterfilter/testen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS in water testen</h3>
              <p className="text-sm text-gray-600">Thuistest, labtest of gegevens van je waterbedrijf</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
