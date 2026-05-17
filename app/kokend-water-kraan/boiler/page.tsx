import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Kokend Water Kraan Boiler: Hoe Werkt Het?',
  description:
    'Alles over de boiler van een kokend water kraan: werking, volumes (1L, 3L, 7L), energieverbruik, vacuümisolatie, drukventiel EN 61770 en onderhoud.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/boiler' },
  openGraph: {
    title: 'Kokend Water Kraan Boiler: Hoe Werkt Het?',
    description:
      'Van verwarmingselement en thermostaat tot vacuümisolatie en veiligheidsventiel — alles wat je moet weten over de boiler van je kokend water kraan.',
    url: 'https://waterfilterplatform.nl/kokend-water-kraan/boiler',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe lang duurt het voordat de boiler weer op temperatuur is na intensief gebruik?',
    answer:
      'Na het leeggebruiken van een 3-liter boiler duurt het herstel gemiddeld 5 tot 10 minuten om het water weer volledig op 108 °C te brengen. Een 7-liter boiler heeft iets langer nodig (10-15 minuten), maar kan ook veel meer gebruik aan voordat de temperatuur merkbaar daalt. Moderne systemen met goede vacuümisolatie koelen de tank minder snel af, waardoor de hersteltijd beperkt blijft.',
  },
  {
    question: 'Wat is het stand-by verbruik van een kokend water kraan boiler?',
    answer:
      'In stand-by verbruikt een moderne kokend water kraan boiler 10 tot 30 watt. Dit hangt sterk af van de kwaliteit van de vacuümisolatie en het volume van de tank. Grotere tanks verliezen iets meer warmte en verbruiken daardoor iets meer. Op jaarbasis komt dit neer op 90 tot 220 kWh, goed voor circa € 27 tot € 65 per jaar bij een stroomprijs van € 0,30 per kWh.',
  },
  {
    question: 'Hoe vaak moet ik de boiler ontkalken?',
    answer:
      'Bij zacht water (< 7 °dH) is ontkalken eens per 2 à 3 jaar voldoende. Bij gemiddeld hard water (7-14 °dH) ontkalkt u de boiler idealiter eens per jaar. In gebieden met erg hard water (> 14 °dH, zoals delen van Limburg en Noord-Holland) is ontkalken elke 6 maanden aan te raden. Met een ingebouwd omgekeerde-osmosefilter is kalkafzetting nagenoeg nihil, ongeacht de waterhardheid.',
  },
  {
    question: 'Is de boiler van een kokend water kraan veilig? Wat doet de EN 61770 norm?',
    answer:
      'Ja. De EN 61770-norm (Elektrische apparaten voor het gebruik van water — vermijden van sifon-effect en terugstromen) stelt eisen aan het drukveiligheidssysteem van de boiler. De tank is een gecertificeerd drukvat met een overdrukventiel dat automatisch opent als de druk te hoog oploopt. Zo is er nooit risico op barsten of explosie. Buitenwanden blijven koel dankzij dubbelwandige isolatie.',
  },
  {
    question: 'Welk boilervolume past bij mijn huishouden?',
    answer:
      'Een 1-liter boiler is geschikt voor 1 à 2 personen die incidenteel gebruik maken van kokend water. Een 3-liter boiler is de populairste keuze voor huishoudens van 2 tot 4 personen en dekt dagelijks thee-, koffie- en pastaverbruik comfortabel. Een 7-liter boiler is bedoeld voor grote gezinnen of intensieve gebruikers die regelmatig grote hoeveelheden kokend water nodig hebben, zoals voor het vullen van grote pannen of professioneel koken.',
  },
];

const onderhoudSchema = [
  { hardheid: 'Zacht (< 7 °dH)', interval: 'Elke 2-3 jaar', methode: 'Citroenzuuroplossing (30 min)' },
  { hardheid: 'Gemiddeld (7-14 °dH)', interval: 'Elke 12 maanden', methode: 'Ontkalkingsmiddel (1 uur)' },
  { hardheid: 'Hard (14-20 °dH)', interval: 'Elke 6 maanden', methode: 'Ontkalkingsmiddel (1-2 uur)' },
  { hardheid: 'Zeer hard (> 20 °dH)', interval: 'Elke 3-4 maanden', methode: 'Professioneel ontkalkingsproduct' },
];

const volumeVergelijking = [
  {
    volume: '1 liter',
    gebruikers: '1-2 personen',
    toepassingen: 'Thee, koffie, occasioneel pasta',
    herstelTijd: '3-5 min',
    energieJaar: '~70 kWh',
    highlight: false,
  },
  {
    volume: '3 liter',
    gebruikers: '2-4 personen',
    toepassingen: 'Thee, koffie, pasta, soep, blancheren',
    herstelTijd: '5-10 min',
    energieJaar: '~120 kWh',
    highlight: true,
  },
  {
    volume: '7 liter',
    gebruikers: '4+ personen / intensief',
    toepassingen: 'Alles + grote pannen, professioneel gebruik',
    herstelTijd: '10-15 min',
    energieJaar: '~180 kWh',
    highlight: false,
  },
];

export default function KokendWaterKraanBoilerPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kokend water kraan', url: 'https://waterfilterplatform.nl/kokend-water-kraan' },
          { name: 'Boiler', url: 'https://waterfilterplatform.nl/kokend-water-kraan/boiler' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Kokend Water Kraan Boiler: Hoe Werkt Het?',
          description:
            'Alles over de boiler van een kokend water kraan: werking, volumes, energieverbruik, vacuümisolatie en onderhoud.',
          datePublished: '2026-01-15',
          dateModified: '2026-05-13',
          url: 'https://waterfilterplatform.nl/kokend-water-kraan/boiler',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:text-[#005F8A]">Kokend water kraan</Link>
            <span className="mx-2">/</span>
            <span>Boiler</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan boiler: hoe werkt het?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            De boiler is het kloppende hart van iedere kokend water kraan. In dit artikel lees je hoe het verwarmingselement, de thermostaat en de vacuümisolatie samenwerken, welk volume het beste bij jouw huishouden past, hoeveel energie de boiler verbruikt in stand-by én hoe je hem zo weinig mogelijk hoeft te ontkalken.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              4-in-1 met osmose bekijken →
            </Link>
            <Link
              href="/kokend-water-kraan/installeren"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Installatiegids
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        {/* Hoe werkt de boiler */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt de boiler van een kokend water kraan?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De boiler is een compact, hermetisch gesloten drukvat dat onder het aanrecht wordt geplaatst. Binnenin zit een verwarmingselement dat het water opwarmt tot circa 108 °C — iets boven het normaal kookpunt. Die hogere temperatuur is bewust: de lichte overdruk in de gesloten tank voorkomt dat het water begint te borrelen of stomen, en zorgt er tegelijkertijd voor dat het water bij de uitloop exact 100 °C is wanneer de druk wegvalt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een ingebouwde thermostaat bewaakt de temperatuur continu en schakelt het verwarmingselement in zodra de watertemperatuur onder de ingestelde waarde daalt. Hierdoor is er altijd onmiddellijk kokend water beschikbaar zonder wachttijd. De cyclus van aan- en uitschakelen verloopt zo snel en frequent dat de energietoevoer in de praktijk als continu aanvoelt.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm mb-4">
            {[
              { nr: '1', label: 'Verwarmingselement', desc: 'Brengt water naar 108 °C in het gesloten drukvat' },
              { nr: '2', label: 'Thermostaat', desc: 'Houdt temperatuur constant; schakelt element in/uit' },
              { nr: '3', label: 'Vacuümisolatie', desc: 'Beperkt warmteverlies tot minimum — ook in stand-by' },
            ].map(s => (
              <div key={s.nr} className="bg-white rounded-xl p-4">
                <div className="w-8 h-8 bg-[#005F8A] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">
                  {s.nr}
                </div>
                <p className="font-semibold text-gray-800">{s.label}</p>
                <p className="text-gray-500 text-xs mt-1">{s.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-[#003F5C] mt-6 mb-2">Het verwarmingselement</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Moderne boilers gebruiken een buisvormig verwarmingselement van roestvast staal of Incoloy (een kalk- en corrosiebestendig legeringsmetaal). Het element is volledig ondergedompeld in het water (natter dan bij een ketel of boiler) voor maximale warmteoverdracht en minimale kalkopbouw op het element zelf. Het vermogen varieert van 1.500 tot 2.200 watt bij actief verwarmen, maar dit ziet u nauwelijks terug op de energierekening omdat het element maar korte bursts actief is.
          </p>

          <h3 className="text-lg font-semibold text-[#003F5C] mt-6 mb-2">De thermostaat: nauwkeurig temperatuurbeheer</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            De thermostaat is typisch een NTC-sensor (Negative Temperature Coefficient) of een bimetaal-beveiliger. De NTC-sensor meet de watertemperatuur continu en stuurt de regelkaart aan die het verwarmingselement inschakelt bij een daling van meer dan 1 à 2 °C. Kwaliteitsboilers hebben bovendien een tweede, onafhankelijke overhitbeveiliging die het element uitschakelt bij een temperatuur boven de veiligheidsdrempel — ongeacht wat de primaire thermostaat aangeeft. Dit dubbele systeem maakt thermische doorloop vrijwel onmogelijk.
          </p>

          <h3 className="text-lg font-semibold text-[#003F5C] mt-6 mb-2">Vacuümisolatie: de stille besparing</h3>
          <p className="text-gray-700 leading-relaxed">
            Het grootste verschil tussen een goedkope en een kwalitatieve boiler zit in de isolatie. Premiumboilers (zoals in premium kokendwaterkranen) gebruiken een dubbelwandige vacuümmantel — hetzelfde principe als een thermosfles. Tussen de binnenste en buitenste wand is een vacuüm aangebracht, waardoor warmtegeleiding en convectie vrijwel nihil zijn. Alleen straling draagt nog bij aan warmteverlies, en dat is bij roestvast staal minimaal. Het resultaat: het stand-by verbruik daalt van 40-60W bij conventionele isolatieschuim naar 10-20W bij vacuümisolatie — een besparing van 60-70% op warmteverlies.
          </p>
        </section>

        {/* Boilervolumes */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Boilervolume kiezen: 1L, 3L of 7L?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het volume van de boiler bepaalt hoeveel kokend water u achter elkaar kunt tappen zonder merkbare temperatuurdaling. De keuze hangt af van de grootte van uw huishouden en het gebruikspatroon. Hieronder een vergelijking van de drie gangbare maten.
          </p>
          <div className="space-y-3 mb-6">
            {volumeVergelijking.map(v => (
              <div
                key={v.volume}
                className={`rounded-2xl border p-4 ${v.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="font-bold text-gray-900 text-lg">{v.volume}</span>
                  {v.highlight && (
                    <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full shrink-0">Meest gekozen</span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-gray-600">
                  <div><span className="text-gray-400">Gezinsgrootte:</span> {v.gebruikers}</div>
                  <div><span className="text-gray-400">Herstel na leeggebruik:</span> {v.herstelTijd}</div>
                  <div className="col-span-2"><span className="text-gray-400">Toepassingen:</span> {v.toepassingen}</div>
                  <div><span className="text-gray-400">Energieverbruik/jaar:</span> {v.energieJaar}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">1-liter boiler: compact en zuinig</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            De 1-liter tank is ideaal voor singles of stellen die primair kokend water willen voor één of twee koppen thee of koffie tegelijk. De tank past in het kleinste keukenkastje (circa 15 × 15 × 25 cm) en verbruikt per jaar het minste stroom. Het nadeel is dat bij intensief gebruik — denk aan drie koppen thee na elkaar of het halvullen van een kleine pan — de temperatuur merkbaar daalt en u korter moet wachten op herstel dan met een grotere tank.
          </p>

          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">3-liter boiler: de gouden middenweg</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Verreweg het populairste volume. Een 3-liter tank levert voor 2 tot 4 personen ruim voldoende kokend water voor het dagelijks gebruik: ochtendkoffie, meerdere kopjes thee, het blancheren van groenten en het snel opzetten van een kleine pan pasta. De hersteltijd na zwaar gebruik is beperkt (5-10 minuten), en het jaarlijkse energieverbruik van circa 120 kWh is voor de meeste huishoudens acceptabel. Dit is dan ook het standaardvolume van de meeste topmodellen.
          </p>

          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">7-liter boiler: voor grote huishoudens en intensieve gebruikers</h3>
          <p className="text-gray-700 leading-relaxed">
            De 7-liter tank is ontworpen voor gezinnen van vijf of meer personen, of voor mensen die regelmatig grotere hoeveelheden kokend water nodig hebben — denk aan het vullen van een 5-liter pasta pan, het bereiden van grote hoeveelheden thee voor bezoek, of semi-professioneel gebruik. Quooker biedt dit volume aan in combinatie met hun COMBI-boiler. Het hogere stand-by verbruik (circa 180 kWh/jaar) wordt gecompenseerd door het grote gebruiksgemak en de zeldzamere herstelperiodes. Ruimte-eis: circa 25 × 25 × 50 cm.
          </p>

          <div className="bg-[#E0F2FE]/50 border-l-4 border-[#005F8A] rounded-r-xl p-4 my-4">
            <p className="text-sm text-gray-700">
              <strong className="text-[#003F5C]">Tip:</strong> Heeft u een <Link href="/4-in-1-kraan" className="text-[#005F8A] underline hover:no-underline">4-in-1 kraan</Link> met omgekeerde osmose, dan helpt het gefilterde water (nagenoeg kalkvrij) de levensduur van de boiler te verlengen, ongeacht het gekozen volume. U hoeft de tank minder vaak te ontkalken en het verwarmingselement blijft langer efficiënt.
            </p>
          </div>
        </section>

        {/* Hersteltijd */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hersteltijd na intensief gebruik</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wanneer u de boiler in korte tijd grotendeels leeggebruikt, stroomt er koud leidingwater in om het onttrokken volume te compenseren. Het verwarmingselement springt onmiddellijk aan, maar het duurt enkele minuten voordat het verse koude water de vereiste 108 °C heeft bereikt. In die tussentijd is het water dat uit de kraan komt minder heet — merkbaar als u achter elkaar grote hoeveelheden tapt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De hersteltijd wordt bepaald door drie factoren: de capaciteit van het verwarmingselement (wattage), het volume van de tank, en de kwaliteit van de isolatie. Een element van 2.200 W verwarmt water aanzienlijk sneller dan een element van 1.500 W. Hierdoor heeft een 7-liter boiler met een sterk element een vergelijkbare hersteltijd als een 3-liter boiler met een minder krachtig element.
          </p>
          <div className="bg-gray-50 rounded-xl p-5">
            <p className="font-semibold text-[#003F5C] mb-3">Indicatieve hersteltijden per volume</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between gap-2 border-b border-gray-100 pb-2">
                <span>1-liter boiler (1.500 W)</span>
                <span className="text-gray-500 shrink-0">3-5 minuten</span>
              </li>
              <li className="flex justify-between gap-2 border-b border-gray-100 pb-2">
                <span>3-liter boiler (1.800 W)</span>
                <span className="text-gray-500 shrink-0">5-10 minuten</span>
              </li>
              <li className="flex justify-between gap-2 border-b border-gray-100 pb-2">
                <span>7-liter boiler (2.200 W)</span>
                <span className="text-gray-500 shrink-0">10-15 minuten</span>
              </li>
              <li className="flex justify-between gap-2">
                <span>3-liter boiler met osmose (gefilterd water)</span>
                <span className="text-gray-500 shrink-0">5-8 minuten</span>
              </li>
            </ul>
            <p className="text-xs text-gray-400 mt-3">Tijden bij volledig leeggebruik; bij gedeeltelijke aftap is de hersteltijd navenant korter.</p>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            In de praktijk is volledig leeggebruik zeldzaam. Wie de tank halfvol heeft getapt ervaart nauwelijks herstelvertraging. Alleen bij catering-achtig gebruik — denk aan het maken van thee voor een grote vergadering — merkt u dat een groter volume of kortere hersteltijd prettig is.
          </p>
        </section>

        {/* Energieverbruik */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Energieverbruik: stand-by vs actief gebruik</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een van de meest gestelde vragen is: hoeveel stroom verbruikt de boiler eigenlijk? Het antwoord is tweeledig: er is het stand-by verbruik (de continue warmtehandhaving terwijl u niets tapt) en het actieve verbruik (het korte moment waarop het verwarmingselement echt heet water produceert).
          </p>

          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Stand-by verbruik</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            In stand-by draait de boiler op minimaal vermogen om de warmteverliezen door de tankwand te compenseren. Bij een kwalitatieve vacuümgeïsoleerde tank zijn deze verliezen klein: 10-20 watt is realistisch voor een 3-liter boiler. Ter vergelijking: een oudere boiler met schuimisolatie verliest 40-60 watt. Over een vol jaar betekent 15 W stand-by verbruik: 15 × 24 × 365 = 131 kWh, ofwel circa € 39 bij een tarief van € 0,30/kWh.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Gaat u op vakantie? Zet de boiler dan uit bij de stekker of gebruik de stand-by-modus die veel modellen hebben. Dit bespaart energie en verlengt de levensduur van het verwarmingselement, omdat het minder thermische cycli doormaakt.
          </p>

          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Actief verbruik</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het verwarmingselement verbruikt 1.500-2.200 W wanneer het actief is, maar dit is slechts een fractie van de dag. Stel: u tapt dagelijks 3 koppen (à 250 ml = 750 ml/dag). Om 750 ml van 15 °C naar 108 °C te verwarmen heeft u nodig: 0,75 liter × 4,18 kJ/(kg·K) × 93 K ≈ 0,081 kWh. Bij een rendement van 85% is het werkelijke verbruik circa 0,095 kWh per dag, ofwel 35 kWh per jaar — slechts een fractie van het stand-by verbruik.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het totale energieverbruik wordt dus gedomineerd door het stand-by vermogen, niet door het actieve gebruik. Dit maakt vacuümisolatie zo waardevol: hoe minder warmte de tank verliest, hoe minder het element hoeft te compenseren.
          </p>

          <div className="bg-gray-50 rounded-xl p-5">
            <p className="font-semibold text-[#003F5C] mb-3">Jaarlijks energieverbruik — vergelijking</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between gap-2 border-b border-gray-100 pb-2">
                <span>Kokend water kraan boiler (3L, vacuüm)</span>
                <span className="text-gray-500 shrink-0">~120 kWh (€ 36/jr)</span>
              </li>
              <li className="flex justify-between gap-2 border-b border-gray-100 pb-2">
                <span>Kokend water kraan boiler (3L, schuimisolatie)</span>
                <span className="text-gray-500 shrink-0">~350 kWh (€ 105/jr)</span>
              </li>
              <li className="flex justify-between gap-2 border-b border-gray-100 pb-2">
                <span>Waterkoker (3× per dag, vol gevuld, 1,7L)</span>
                <span className="text-gray-500 shrink-0">~150 kWh (€ 45/jr)</span>
              </li>
              <li className="flex justify-between gap-2">
                <span>Waterkoker (5× per dag, half gevuld)</span>
                <span className="text-gray-500 shrink-0">~125 kWh (€ 38/jr)</span>
              </li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold text-[#003F5C] mt-6 mb-2">Vacuümisolatie nader verklaard</h3>
          <p className="text-gray-700 leading-relaxed">
            Vacuümisolatie werkt door de drie warmteoverdrachtstransportmechanismen te elimineren: geleiding, convectie en straling. In het vacuüm tussen de twee roestvast-stalen wanden is geen gas aanwezig, dus geleiding en convectie zijn vrijwel nul. Stralingswarmte wordt geminimaliseerd door de spiegelende binnenwand van de buitenschil. Het enige restwarmteverlies verloopt via de dunne metalen rand waar beide wanden zijn samengevoegd — dit noemen fabrikanten wel de &ldquo;thermische brug&rdquo; en is het technische focuspunt van concurrentie tussen merken.
          </p>
        </section>

        {/* Drukvat veiligheid */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Drukvat en veiligheid: de EN 61770-norm</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De boiler van een kokend water kraan is geen gewone waterbak — het is een gecertificeerd drukvat. Het water staat continu onder een lichte overdruk (typisch 0,8-2,5 bar boven leidingdruk) om het koken in de tank te voorkomen. Dit stelt eisen aan de constructie, de afdichtingen en met name het veiligheidsventiel.
          </p>

          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Wat regelt EN 61770?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Europese norm EN 61770 (ook aangeduid als IEC 61770: &ldquo;Elektrische huishoudtoestellen voor gebruik met water — vermijden van sifon-effect en terugstromen&rdquo;) schrijft voor dat een kokend-water-boiler:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            {[
              'Een overdrukventiel heeft dat automatisch opent bij een druk van meer dan de maximaal toegestane werkdruk',
              'Terugstromen van heet water naar het leidingnet verhindert via een niet-terugslag klep',
              'Uitzettingsvolume biedt voor het water dat bij opwarming in volume toeneemt (typisch 4%)',
              'Extern bereikbaar is voor periodieke controle van het veiligheidsventiel zonder gereedschap',
              'Bewijs levert van pressuretesten bij 1,5× de maximale werkdruk (hydrostatische proef)',
            ].map(t => (
              <li key={t} className="flex gap-2 items-start">
                <span className="text-green-600 font-bold mt-0.5 shrink-0">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            In de praktijk betekent dit dat een goedgekeurde boiler nooit kan &ldquo;exploderen&rdquo; bij normaal gebruik. Het overdrukventiel laat overtollig water of stoom ontsnappen lang voordat gevaarlijke drukken worden bereikt. CE-markering op de boiler is het zichtbare bewijs dat aan deze norm is voldaan.
          </p>

          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Koude buitenwand</h3>
          <p className="text-gray-700 leading-relaxed">
            Dankzij de vacuümisolatie blijft de buitenwand van de boiler op kamertemperatuur, zelfs wanneer het water binnenin 108 °C is. U kunt de tank veilig aanraken. Hetzelfde geldt voor de aansluitleidingen die geïsoleerd zijn omwikkeld. Alleen de uitvoerleiding richting de kraan is warm; deze ligt uit bereik in het kastje en is bekleed met een hittebestendige mantel.
          </p>
        </section>

        {/* Onderhoud en ontkalken */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderhoud: ontkalken op basis van waterhardheid</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kalkafzetting (calciumcarbonaat) is de grootste vijand van een kokend-water-boiler. Bij verhitting precipiteert opgelost calciumcarbonaat als een harde, witte laag op het verwarmingselement en de tankwand. Dit vergroot de thermische weerstand van het element, waardoor het harder moet werken om dezelfde temperatuur te bereiken — hogere energiekosten en kortere levensduur zijn het gevolg.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hoe hard uw leidingwater is, bepaalt hoe snel kalk opbouwt. In Nederland varieert de waterhardheid sterk per gemeente. Amsterdam en Rotterdam hebben relatief zacht water (7-10 °dH), terwijl Limburg, delen van Noord-Brabant en de Veluwe water leveren van 18-25 °dH. Bekijk de waterhardheid van uw eigen gemeente op onze <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">waterhardheidskaart</Link>.
          </p>

          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-4 font-semibold text-[#003F5C]">Waterhardheid</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-center">Ontkalkinterval</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-center">Methode</th>
                </tr>
              </thead>
              <tbody>
                {onderhoudSchema.map(r => (
                  <tr key={r.hardheid} className="border-b border-gray-100">
                    <td className="py-2.5 px-4 text-gray-700">{r.hardheid}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.interval}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.methode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Stap-voor-stap ontkalken</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Ontkalken van een kokend-water-boiler verschilt per merk, maar de algemene aanpak is voor de meeste systemen gelijk:
          </p>
          <div className="space-y-3 mb-4">
            {[
              { stap: '1', tekst: 'Schakel de boiler uit en laat hem afkoelen tot kamertemperatuur (minimaal 30 minuten).' },
              { stap: '2', tekst: 'Sluit de koudwatertoevoer af via de bijgeleverde servicekraan of de T-stuk-afsluitkraan.' },
              { stap: '3', tekst: 'Maak een ontkalkingsoplossing: 1 zakje citroenzuurpoeder (20 g) of een specifiek ontkalkingsmiddel opgelost in 500 ml lauw water.' },
              { stap: '4', tekst: 'Vul de boiler met de oplossing via de onderhoudspoort of de waterinlaat (raadpleeg de handleiding van uw merk).' },
              { stap: '5', tekst: 'Laat de oplossing 1-2 uur inwerken. Schakel daarna de boiler in en laat het ontkalkingswater heet worden (voorzichtig — dampen kunnen vrijkomen).' },
              { stap: '6', tekst: 'Tap het ontkalkingswater af en spoel de tank 2-3 keer door met vers leidingwater totdat geen citroenzuurlucht meer waarneembaar is.' },
              { stap: '7', tekst: 'Open de watertoevoer, laat de boiler opnieuw vullen en opwarmen. De boiler is klaar voor gebruik.' },
            ].map(s => (
              <div key={s.stap} className="flex gap-3 items-start">
                <div className="w-7 h-7 bg-[#005F8A] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  {s.stap}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{s.tekst}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Ontkalken overbodig met osmosefilter</h3>
          <p className="text-gray-700 leading-relaxed">
            Bij een <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">4-in-1 kraan met geïntegreerd omgekeerde-osmosefilter</Link> stroomt er nagenoeg calciumvrij water (&lt; 5 mg/L) naar de boiler. Kalkafzetting is daardoor praktisch nihil. Dit maakt regelmatig ontkalken overbodig en verlengt de levensduur van het verwarmingselement aanzienlijk. Meer over het filterprincipe leest u op de pagina <Link href="/kennisbank/kokend-water-kraan-boiler" className="text-[#005F8A] underline hover:no-underline">kokend water kraan boiler — kennisbank</Link>.
          </p>
        </section>

        {/* Levensduur */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Levensduur van de boiler</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een goed onderhouden boiler gaat 8 tot 12 jaar mee. De twee hoofdoorzaken van voortijdige slijtage zijn kalkafzetting (zie hierboven) en metaalmoeheid door thermische cycli. Elke keer dat het verwarmingselement opwarmt en afkoelt, ervaart het metaal een kleine uitzetting en inkrimping. Na tienduizenden cycli kunnen scheurtjes in soldeerverbindingen of bij de tankflenzen ontstaan.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De beste manier om de levensduur te maximaliseren is een combinatie van:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {[
              { titel: 'Gefilterd water', tekst: 'Osmosewater voorkomt kalkafzetting op het element — de grootste slijtagefactor.' },
              { titel: 'Regelmatig ontkalken', tekst: 'Bij hard water de tankbodem vrijhouden van kalkkorst verlengt het element-rendement.' },
              { titel: 'Stand-by bij langere afwezigheid', tekst: 'Minder thermische cycli tijdens vakanties spaart de afdichtingen.' },
              { titel: 'Lekcontrole', tekst: 'Een kleine lekkage aan een fitting kan kalk en zuurstof sneller bij het element brengen.' },
            ].map(t => (
              <div key={t.titel} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 text-sm mb-1">{t.titel}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{t.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            De kraan zelf gaat over het algemeen langer mee dan de boiler: 10-15 jaar is realistisch. Een defecte boiler hoeft dus niet te betekenen dat u ook de kraan vervangt — in de meeste gevallen is alleen de tank los te vervangen. Raadpleeg bij twijfel de <Link href="/kokend-water-kraan/installeren" className="text-[#005F8A] underline hover:no-underline">installatiegids</Link> voor instructies over het ontkoppelen en vervangen van de boilertank.
          </p>
        </section>

        {/* CTA */}
        <CTABanner context="kokend" />

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gerelateerde pagina&apos;s</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kokend-water-kraan', label: 'Kokend water kraan — complete gids' },
              { href: '/4-in-1-kraan', label: '4-in-1 kraan met osmose en bruisend water' },
              { href: '/kokend-water-kraan/installeren', label: 'Zelf installeren: stap-voor-stap gids' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmosefilter kopen — aanbevelingen' },
              { href: '/kennisbank/kokend-water-kraan-boiler', label: 'Kennisbank: boiler techniek verdieping' },
              { href: '/waterhardheid', label: 'Waterhardheid per gemeente in Nederland' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>→</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over de boiler</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">▾</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
