import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Zware metalen in putwater: arseen, lood, koper en nikkel',
  description:
    'Zware metalen in putwater (arseen, lood, koper, nikkel) ontstaan door geologie of corrosie. ICP-MS detecteert ze; osmose verwijdert meer dan 97%.',
  alternates: { canonical: 'https://waterfilterplatform.nl/putwater/zware-metalen' },
};

const faqItems = [
  {
    q: 'Welke zware metalen komen voor in putwater?',
    a: 'In Nederlands putwater worden vooral arseen, lood, koper, nikkel, cadmium en chroom aangetroffen. Arseen komt natuurlijk voor in bepaalde geologische lagen (zandsteen en kleilagen in Oost-Nederland). Lood ontstaat vrijwel altijd door corrosie van oude loden leidingen of soldeerverbindingen, niet uit de bodem. Koper en nikkel zijn meestal afkomstig uit koperen of vernikkelde messing leidingen die agressief water aantast. Cadmium en chroom kunnen voorkomen bij industriele bodemverontreiniging of door uitloging van gegalvaniseerde leidingen.',
  },
  {
    q: 'Hoe ontdek je zware metalen in putwater?',
    a: 'Een ICP-MS analyse (Inductively Coupled Plasma Mass Spectrometry) is de standaardmethode en detecteert zware metalen tot onder 0,1 microgram per liter. Laboratoria zoals Aqualab, Eurofins en HMVT bieden putwaterpakketten aan vanaf 95 tot 250 euro inclusief 8 tot 15 metalen. Eenvoudige teststrips of veldkits geven slechts indicatieve waarden en missen lage concentraties die toch boven de EU-norm zitten. Voor consumptie-putten adviseren wij minimaal jaarlijks een professionele meting.',
  },
  {
    q: 'Wat zijn de EU-normen voor zware metalen in drinkwater?',
    a: 'De Drinkwaterrichtlijn 2020/2184 stelt strikte maxima: arseen 10 microgram per liter, lood 5 microgram per liter (vanaf 2036 verlaagd), cadmium 5 microgram per liter, chroom 25 microgram per liter, koper 2 milligram per liter en nikkel 20 microgram per liter. Voor putwater zijn deze normen niet wettelijk verplicht (alleen voor leidingwater), maar gelden ze als veiligheidsadvies. Bij overschrijding adviseert het RIVM een waterfilter of overstap op leidingwater.',
  },
  {
    q: 'Verwijdert omgekeerde osmose zware metalen uit putwater?',
    a: 'Ja, omgekeerde osmose (RO) verwijdert zware metalen voor 97 tot 99,5 procent. Het halfdoorlatende membraan met poriegrootte van 0,0001 micrometer houdt geioniseerde metalen volledig tegen. Bij een arseenconcentratie van 30 microgram per liter daalt de uitloop naar minder dan 1 microgram per liter. Belangrijk is dat voor putwater een pre-filtratie nodig is (sediment 5 micrometer plus actiefkool) om het RO-membraan te beschermen tegen ijzer, mangaan en organische deeltjes die het membraan snel kunnen vervuilen.',
  },
  {
    q: 'Helpt actief kool tegen zware metalen?',
    a: 'Actief kool verwijdert zware metalen slechts beperkt en onvoorspelbaar. Voor lood, koper en kwik werkt speciaal gemodificeerd kool met KDF-77 redelijk (50 tot 80 procent reductie). Voor arseen, cadmium en chroom is actief kool ontoereikend. Voor putwater met bevestigde zware metalen is omgekeerde osmose of ionenwisseling (specifiek voor arseen) de juiste keuze. Standaard kraankoolfilters zoals Brita zijn ongeschikt voor putwater met zware metalen.',
  },
  {
    q: 'Is arseen in putwater gevaarlijk?',
    a: 'Arseen is een bewezen humaan carcinogeen (IARC groep 1) en zelfs lage chronische blootstelling verhoogt risico op huid-, blaas- en longkanker. De WHO en EU stellen het maximum op 10 microgram per liter, maar gezondheidskundige adviesgrenzen liggen lager (1 microgram per liter optimaal). In delen van Oost-Nederland (Twente, Achterhoek) en specifieke locaties in Zeeland worden waarden van 15 tot 50 microgram per liter gemeten in ondiep grondwater. Bij verhoogde arseenwaarden in uw put: stop direct met consumptie en installeer RO of een specifieke arseenfilter.',
  },
  {
    q: 'Kan lood in putwater komen via leidingen?',
    a: 'Ja, lood in putwater is bijna altijd afkomstig van corrosie van loden leidingen, loden soldeer of messing kranen met loodlegering. Het zachtere putwater (laag calciumcarbonaat, lage pH) lost lood sneller op dan hard leidingwater. Bij huizen gebouwd voor 1960 zijn loden leidingen mogelijk nog aanwezig. Een spoel-monster (eerste liter na 6 uur stilstand) toont de loodbelasting. Verwijder loden leidingen volledig of gebruik altijd een RO-filter onder het aanrecht voor drinkwater.',
  },
  {
    q: 'Wat kost een zware-metalen-filter voor putwater?',
    a: 'Een complete onder-aanrecht omgekeerde osmose filter geschikt voor putwater kost 450 tot 1200 euro inclusief sediment- en koolvoorfilter. Jaarlijkse vervangingskosten 80 tot 180 euro (voorfilters elke 6 tot 12 maanden, membraan elke 3 tot 5 jaar). Een specifieke arseenfilter met ijzeroxide-medium kost 300 tot 700 euro met capaciteit voor 5000 tot 15000 liter. Laboratoriumcontrole (ICP-MS) elk jaar erbij: 95 tot 250 euro. Totale jaarkosten 175 tot 430 euro voor veilig drinkwater uit eigen put.',
  },
];

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Zware metalen in putwater: arseen, lood, koper en nikkel',
  description:
    'Zware metalen in putwater zoals arseen, lood, koper en nikkel ontstaan door geologie of corrosie. ICP-MS detecteert ze; omgekeerde osmose verwijdert meer dan 97%.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/putwater/zware-metalen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function ZwareMetalenPutwaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Putwater', item: 'https://waterfilterplatform.nl/putwater' },
              { '@type': 'ListItem', position: 3, name: 'Zware metalen in putwater', item: 'https://waterfilterplatform.nl/putwater/zware-metalen' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/putwater" className="hover:underline">Putwater</Link> &rsaquo;{' '}
          <span>Zware metalen</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Zware metalen in putwater: arseen, lood, koper en nikkel
          </h1>
          <p className="text-gray-700 text-lg">
            Putwater kan natuurlijke en door corrosie veroorzaakte zware metalen bevatten. ICP-MS analyse toont concentraties; omgekeerde osmose verwijdert meer dan 97 procent.
          </p>
        </div>

        <QuickAnswer answer="Zware metalen in putwater (arseen, lood, koper, nikkel, cadmium) ontstaan door bodemgeologie of corrosie van leidingen. Een ICP-MS test (95-250 euro) toont de exacte concentraties. EU-norm voor arseen is 10 microgram per liter, voor lood 5 microgram per liter. Omgekeerde osmose verwijdert deze metalen voor 97-99,5 procent en is de meest effectieve oplossing voor putwater." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke zware metalen komen voor in Nederlands putwater?
        </h2>
        <p className="text-gray-700 mb-4">
          Putwater in Nederland kent twee bronnen van zware metalen. De eerste is de natuurlijke geologie: in delen van Oost-Nederland (Twente, Achterhoek), Zeeland en delen van Limburg bevatten zandsteen- en kleilagen verhoogde concentraties arseen, ijzer en mangaan. Arseen komt voor in waarden van 5 tot 50 microgram per liter, ruim boven de EU-norm van 10 microgram per liter.
        </p>
        <p className="text-gray-700 mb-4">
          De tweede bron is corrosie van leidingen en pompinstallaties. Putwater met lage pH (onder 7) en lage hardheid lost koper, lood en nikkel sneller op uit leidingmateriaal. In huizen gebouwd voor 1960 zijn loden leidingen mogelijk nog aanwezig. Messing kranen met loodlegering geven ook lood af, vooral bij stilstand. Gegalvaniseerde stalen leidingen geven zink en cadmium af bij agressief water.
        </p>
        <p className="text-gray-700 mb-6">
          Een goede putwater-analyse onderzoekt minimaal 8 metalen: arseen, lood, cadmium, chroom, koper, nikkel, kwik en zink. Voor uitgebreide analyse zie ook{' '}
          <Link href="/stoffen-in-drinkwater/zware-metalen" className="text-[#005F8A] underline">zware metalen in drinkwater</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-normen en gezondheidsrisico per metaal
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Metaal</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">EU-norm</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Bron</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Risico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Arseen</td>
                <td className="border border-gray-300 px-3 py-2">10 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">Geologie</td>
                <td className="border border-gray-300 px-3 py-2">Kanker (IARC 1)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Lood</td>
                <td className="border border-gray-300 px-3 py-2">5 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">Loden leidingen</td>
                <td className="border border-gray-300 px-3 py-2">Neurotoxisch (kinderen)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Cadmium</td>
                <td className="border border-gray-300 px-3 py-2">5 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">Industrie/leiding</td>
                <td className="border border-gray-300 px-3 py-2">Niersschade</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Koper</td>
                <td className="border border-gray-300 px-3 py-2">2 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">Koperen leidingen</td>
                <td className="border border-gray-300 px-3 py-2">Maag/leverklachten</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Nikkel</td>
                <td className="border border-gray-300 px-3 py-2">20 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">Messing/kranen</td>
                <td className="border border-gray-300 px-3 py-2">Allergie/eczeem</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Chroom</td>
                <td className="border border-gray-300 px-3 py-2">25 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">Industrie</td>
                <td className="border border-gray-300 px-3 py-2">Carcinogeen (Cr-VI)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          ICP-MS analyse: hoe wordt putwater getest?
        </h2>
        <p className="text-gray-700 mb-4">
          ICP-MS (Inductively Coupled Plasma Mass Spectrometry) is de gouden standaard voor zware-metalen-analyse. De methode ioniseert het watermonster in een argonplasma op 6000 graden Celsius en meet vervolgens individuele metaalionen op massa. De gevoeligheid gaat tot 0,01 microgram per liter, ruim onder elke EU-norm.
        </p>
        <p className="text-gray-700 mb-6">
          Voor putwater verzamelt u twee monsters: een spoelmonster (eerste liter na 6 uur stilstand) toont uitloging uit leidingen, een doorstroommonster (na 5 minuten spoelen) toont de werkelijke putwaterkwaliteit. Laboratoria als Aqualab, Eurofins en HMVT bieden complete putwaterpakketten van 95 tot 250 euro. Voor specifieke metalen zie ook{' '}
          <Link href="/waterfilter/lood" className="text-[#005F8A] underline">loodfilter</Link> en{' '}
          <Link href="/waterfilter/arseen" className="text-[#005F8A] underline">arseenfilter</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Omgekeerde osmose: de meest effectieve oplossing
        </h2>
        <p className="text-gray-700 mb-4">
          Omgekeerde osmose verwijdert zware metalen voor 97 tot 99,5 procent. Het semi-permeabele membraan met poriegrootte van 0,0001 micrometer (0,1 nanometer) blokkeert vrijwel alle metaalionen. Bij arseen daalt 30 microgram per liter naar minder dan 1 microgram per liter; bij lood van 15 microgram per liter naar minder dan 0,2 microgram per liter.
        </p>
        <p className="text-gray-700 mb-6">
          Voor putwater is een meertraps systeem essentieel: sediment 20 micrometer, sediment 5 micrometer, actief kool (verwijdert chloor en organisch), RO-membraan, en optioneel een remineralisatie-traps. Zie ook{' '}
          <Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose techniek</Link> voor diepere uitleg.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Specifieke filtertechnieken per metaal
        </h2>
        <h3 className="text-xl font-semibold text-[#005F8A] mt-4 mb-2">Arseenfilter</h3>
        <p className="text-gray-700 mb-4">
          Voor selectieve arseenverwijdering gebruikt men ijzeroxide- of titaniumdioxide-media (zoals Bayoxide E33 of GFH). Capaciteit 5000 tot 20000 liter per cartridge. Werkt zonder energie en effectief tot 1 microgram per liter restwaarde.
        </p>
        <h3 className="text-xl font-semibold text-[#005F8A] mt-4 mb-2">Loodfilter</h3>
        <p className="text-gray-700 mb-4">
          Voor lood werkt actief kool met KDF-55-medium (koper-zink-legering) goed bij concentraties tot 20 microgram per liter. Boven die waarde is RO de betere keuze. Vervang loden leidingen altijd permanent.
        </p>
        <h3 className="text-xl font-semibold text-[#005F8A] mt-4 mb-2">Ionenwisseling</h3>
        <p className="text-gray-700 mb-6">
          Kationenwisselaars verwijderen koper, zink, cadmium en nikkel effectief. Bij verzadiging regenereren met zoutoplossing. Wordt vaak gecombineerd met waterontharder voor putwater met harde minerale belasting.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over zware metalen in putwater
          </h2>
          {faqItems.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">{faq.q}</summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.a}</p>
            </details>
          ))}
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/zware-metalen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Zware metalen in drinkwater</h3>
              <p className="text-sm text-gray-600">Volledig overzicht van metalen, normen en gezondheidseffecten in Nederlands drinkwater.</p>
            </Link>
            <Link href="/waterfilter/lood" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Loodfilter</h3>
              <p className="text-sm text-gray-600">Effectieve filters tegen lood uit oude leidingen en messing kranen.</p>
            </Link>
            <Link href="/waterfilter/arseen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Arseenfilter</h3>
              <p className="text-sm text-gray-600">Selectieve ijzeroxide-filters voor putwater met verhoogde arseenconcentratie.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose techniek</h3>
              <p className="text-sm text-gray-600">Hoe RO werkt en waarom het 97-99,5 procent zware metalen verwijdert.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
