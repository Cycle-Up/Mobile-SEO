import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: 'Osmose Filter Kopen 2026: Beste Keuze & Prijzen',
  description:
    'Osmose filter kopen? Vergelijk tankless vs tank, 4-traps vs 5-traps vs 6-traps systemen. Bekijk prijzen, specs en welk systeem het beste bij jou past in 2026.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/kopen' },
  openGraph: {
    title: 'Osmose Filter Kopen 2026: Beste Keuze & Prijzen',
    description:
      'Alles wat je moet weten voor je een osmose filter koopt: typen, specs, prijsklassen en de beste keuze voor jouw situatie.',
  },
};

const faqItems = [
  {
    question: 'Wat is het verschil tussen een tankless en een tank osmose filter?',
    answer:
      'Een tank osmose filter slaat gefilterd water op in een drukvat (4–8 liter) en levert het direct bij afname. Een tankless systeem filtert water on-demand via een boostpomp, zonder drukvat. Tankless modellen zijn compacter, leveren vrijwel onbeperkt water en hebben geen risico op bacteriegroei in het drukvat, maar zijn doorgaans duurder.',
  },
  {
    question: 'Hoeveel filterstappen heb ik nodig?',
    answer:
      'Een 4-traps osmose filter biedt solide zuivering: sedimentfilter, koolstoffilter, RO-membraan en post-koolstoffilter. Een 5-traps systeem voegt een mineralisatiestap of UV-fase toe. Een 6-traps systeem heeft ook een alkaline of ionenwisselaar. Voor normaal Nederlands leidingwater is 4 of 5 traps ruimschoots voldoende. Een geïntegreerde 4-in-1 kraan met osmose gebruikt een meertraps osmosesysteem.',
  },
  {
    question: 'Wat betekent TDS-reductie en hoe hoog moet die zijn?',
    answer:
      'TDS (Total Dissolved Solids) geeft het aantal opgeloste deeltjes aan in mg/liter of ppm. Nederlands leidingwater heeft doorgaans 200–500 ppm. Een goed osmose filter haalt 95–99% van de TDS eruit, wat resulteert in 5–25 ppm schoon drinkwater. Controleer dit eenvoudig met een goedkope TDS-meter.',
  },
  {
    question: 'Wat is de afvalwater ratio en waarom is dat belangrijk?',
    answer:
      'Klassieke osmose filters produceren 3–5 liter afvalwater per liter schoon water. Moderne systemen met boostpomp halen een ratio van 1:1 of zelfs 0,5:1. Een lage afvalwater ratio bespaart waterkosten en is milieuvriendelijker. Bekijk de specificaties altijd voordat je koopt.',
  },
  {
    question: 'Is een losse osmose filter of een 4-in-1 kraan slimmer?',
    answer:
      'Een losse osmose filter is goedkoper in aanschaf (€150–400) maar vereist een apart kraantje en biedt alleen koud gefilterd water. Een 4-in-1 kraan met osmose integreert osmosefiltratie met kokend, koud, warm en bruisend water in één elegant apparaat. Op de lange termijn is de 4-in-1 kraan voordeliger als je ook een kokendwaterfunctie wilt.',
  },
];

const filterTypes = [
  {
    type: 'Tankless (drukloze tank)',
    prijs: '€ 280 – 500',
    geschiktVoor: 'Moderne keukens, weinig ruimte',
    voordelen: [
      'Compact, geen groot drukvat',
      'On-demand filtering',
      'Geen bacterierisico in drukvat',
      'Hogere flow rate mogelijk',
    ],
    nadelen: ['Vereist boostpomp (extra stroom)', 'Duurder in aanschaf'],
    aanbevolen: false,
  },
  {
    type: 'Tank (drukvat)',
    prijs: '€ 150 – 350',
    geschiktVoor: 'Budget, traditionele installatie',
    voordelen: [
      'Goedkoper in aanschaf',
      'Werkt zonder elektriciteit (bij voldoende waterdruk)',
      'Bewezen technologie',
    ],
    nadelen: [
      'Drukvat neemt ruimte in',
      'Risico op bacteriegroei bij lang stilstaan',
      'Beperkte watervoorraad per keer',
    ],
    aanbevolen: false,
  },
  {
    type: '4-in-1 kraan met osmose (geïntegreerd)',
    prijs: '€ 699 – 899',
    geschiktVoor: 'Complete keukeninstallatie',
    voordelen: [
      'Osmosefilter + kokend + koud + warm + bruisend',
      'Één kraantje, alles in één',
      'Tankless, altijd vers gefilterd water',
      'Één jaarlijkse filterwissel',
      'Strak design, geen extra kraantje nodig',
    ],
    nadelen: ['Hogere aanschafprijs', 'Vereist stopcontact'],
    aanbevolen: true,
  },
];

const filterStages = [
  {
    stages: '4-traps',
    stappen: ['Sedimentfilter (5 µm)', 'Actief koolstofblok', 'RO-membraan', 'Post-koolstoffilter'],
    geschiktVoor: 'Standaard Nederlands leidingwater',
    prijs: '€ 150 – 350',
  },
  {
    stages: '5-traps',
    stappen: ['Sedimentfilter', 'Pre-koolstoffilter', 'RO-membraan', 'Post-koolstoffilter', 'Mineralisatie of UV'],
    geschiktVoor: 'Extra zuivering of mineralen toevoegen',
    prijs: '€ 250 – 500',
  },
  {
    stages: '6-traps',
    stappen: ['Sedimentfilter', 'Pre-koolstoffilter', 'RO-membraan', 'Post-koolstoffilter', 'Mineralisatie', 'Alkaline/ionenwisselaar'],
    geschiktVoor: 'Premium zuivering, gezondheidsgeoriënteerd',
    prijs: '€ 350 – 700',
  },
];

const priceTiers = [
  {
    range: '€ 150 – 250',
    label: 'Instap',
    wat: 'Basale 4-traps tank osmose filter. Voldoende voor drink- en kookwater. Geen boostpomp, hogere afvalwater ratio (3:1 of meer). Aparte kraantje nodig.',
  },
  {
    range: '€ 250 – 400',
    label: 'Midden',
    wat: 'Tankless of tank met boostpomp, lagere afvalwater ratio (1:1 of 2:1), 5-traps zuivering mogelijk, snellere flow rate. Geschikt voor kleine gezinnen.',
  },
  {
    range: '€ 400 – 600',
    label: 'Premium',
    wat: 'Hoge capaciteit, 5–6 filterstappen, mineralisatie, laag stroomverbruik, smart-monitoring via app mogelijk. Geschikt voor gezinnen met 3+ personen.',
  },
  {
    range: '€ 699 – 899',
    label: '4-in-1 integratie',
    wat: 'Complete keukenoplossing: osmosefilter + kokend + koud + warm + bruisend. Geen losse filters te kopen, één jaarabonnement. Best value als je ook kokend water wilt.',
  },
];

export default function OsmoseFilterKopenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Osmose filter', url: 'https://waterfilterplatform.nl/osmose-filter' },
          { name: 'Kopen', url: 'https://waterfilterplatform.nl/osmose-filter/kopen' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/osmose-filter" className="hover:text-[#005F8A]">Osmose filter</Link>
            <span className="mx-2">/</span>
            <span>Kopen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmose Filter Kopen in 2026: Welk Systeem Past bij Jou?
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Een osmose filter kopen is een slimme investering in je drinkwaterkwaliteit. Maar het aanbod is groot: tankless of met drukvat, 4-traps of 6-traps, onder het aanrecht of op het aanrecht, en standalone of geïntegreerd in een 4-in-1 kraan. In deze gids zetten we alles overzichtelijk voor je op een rij — zodat jij de beste keuze maakt.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />

        {/* Introductie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom een osmose filter kopen?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Omgekeerde osmose (reverse osmosis, RO) is de meest effectieve filtertechnologie voor thuisgebruik. Een RO-membraan heeft poriën van slechts 0,0001 micron en houdt zo 95–99% van alle opgeloste stoffen tegen: kalk, nitraten, medicijnresten, pesticiden, zware metalen, chloor, fluor en microplastics. Het resultaat: kraanwater met een TDS van 5–25 ppm — purer dan de meeste flessenwater-merken.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Nederlands leidingwater is veilig, maar bevat van nature kalk (hardheid 10–30 °dH afhankelijk van regio), chloor als desinfectant, en sporen van medicijnen en pesticiden die de waterleiding niet volledig uitfiltert. Een osmosefilter is de enige filtertechnologie die al deze stoffen in één keer verwijdert.
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <p className="text-sm text-[#003F5C] font-semibold mb-1">Wist je dat?</p>
            <p className="text-sm text-gray-700">
              In steden als Amsterdam, Rotterdam en Den Haag heeft leidingwater een hardheidsgraad van 8–15 °dH. In regio&apos;s als Brabant en Limburg loopt dit op tot 20–30 °dH. Een osmosefilter verwijdert nagenoeg alle kalk, wat ook je kokend-water-apparaten beschermt.
            </p>
          </div>
        </section>

        {/* Type 1: Tankless vs Tank */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-2">Type 1: Tankless vs Tank osmose filter</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            De eerste keuze die je maakt is of je een systeem met of zonder drukvat (tank) wilt. Beide hebben hun voor- en nadelen.
          </p>
          <div className="space-y-4">
            {filterTypes.map((f) => (
              <div
                key={f.type}
                className={`rounded-2xl border p-5 ${f.aanbevolen ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900">{f.type}</h3>
                    <p className="text-sm text-gray-500">{f.geschiktVoor}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-[#005F8A]">{f.prijs}</p>
                    {f.aanbevolen && (
                      <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full">Aanbevolen</span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Voordelen</p>
                    <ul className="space-y-0.5">
                      {f.voordelen.map((v) => (
                        <li key={v} className="text-green-700">✓ {v}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Nadelen</p>
                    <ul className="space-y-0.5">
                      {f.nadelen.map((n) => (
                        <li key={n} className="text-gray-500">− {n}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Type 2: Filterstappen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-2">Type 2: 4-traps, 5-traps of 6-traps osmose filter?</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Het aantal filterstappen bepaalt hoe grondig het water gezuiverd wordt en of er mineralen worden teruggebracht. Voor de meeste Nederlandse huishoudens is een 4-traps systeem meer dan voldoende.
          </p>
          <div className="space-y-4">
            {filterStages.map((s) => (
              <div key={s.stages} className="border border-gray-100 rounded-xl p-4 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">{s.stages} osmose filter</h3>
                  <span className="text-sm font-semibold text-[#005F8A]">{s.prijs}</span>
                </div>
                <p className="text-sm text-gray-500 mb-3">Geschikt voor: {s.geschiktVoor}</p>
                <div className="flex flex-wrap gap-2">
                  {s.stappen.map((stap, i) => (
                    <span key={stap} className="text-xs bg-[#E0F2FE] text-[#003F5C] px-2 py-1 rounded-lg">
                      {i + 1}. {stap}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Type 3: Under-counter vs Countertop */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-2">Type 3: Onder het aanrecht vs op het aanrecht</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Osmose filters zijn er in twee hoofdvormen qua plaatsing: ingebouwd onder het aanrecht (under-counter) of als vrijstaand apparaat op het aanrecht (countertop).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-800 mb-2">Onder het aanrecht</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                De meest gebruikte installatiemethode in Nederland. Het systeem is verborgen in de kast, aangesloten op de koudwaterleiding en afvoer. Je krijgt een apart kraantje (of gebruikt een bestaande 4-in-1 kraan). Vereist basisvaardigheden met loodgieterswerk.
              </p>
              <ul className="mt-3 space-y-1 text-sm">
                <li className="text-green-700">✓ Onzichtbaar, ruimtebesparend op aanrecht</li>
                <li className="text-green-700">✓ Hogere capaciteit</li>
                <li className="text-gray-500">− Installatie vereist wateraansluiting</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-800 mb-2">Op het aanrecht (countertop)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Eenvoudig aan te sluiten op een bestaande kraan, geen verbouwing nodig. Ideaal voor huurders of mensen die snel willen beginnen. Nadeel is dat het apparaat zichtbaar op het aanrecht staat en doorgaans een lagere capaciteit heeft.
              </p>
              <ul className="mt-3 space-y-1 text-sm">
                <li className="text-green-700">✓ Geen installatie, direct bruikbaar</li>
                <li className="text-green-700">✓ Mee te nemen bij verhuizing</li>
                <li className="text-gray-500">− Neemt aanrechtruimte in</li>
                <li className="text-gray-500">− Lagere capaciteit</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Specs */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Specificaties om te controleren vóór je koopt</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Niet alle osmose filters zijn gelijk. Dit zijn de drie key specs die bepalen hoe goed en hoe efficiënt een systeem is:
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-[#005F8A] pl-4">
              <h3 className="font-bold text-gray-900 mb-1">1. TDS-reductie (%)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                De TDS-reductie geeft aan hoeveel procent van de opgeloste deeltjes het osmosemembraan tegenhoudt. Een kwalitatief membraan haalt 95–99% reductie. Goedkope systemen zitten soms op 85–90%, wat betekent dat een aanzienlijk deel van kalkresten, nitraten en zware metalen het filter toch passeert. Meet altijd na installatie met een TDS-meter (kosten: €8–15).
              </p>
            </div>
            <div className="border-l-4 border-[#005F8A] pl-4">
              <h3 className="font-bold text-gray-900 mb-1">2. Doorstroomsnelheid (flow rate, l/uur of GPD)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                De flow rate geeft aan hoeveel liter gefilterd water het systeem per uur of dag kan produceren. Systemen worden vaak uitgedrukt in GPD (gallons per day): 50 GPD = circa 190 liter per dag, ruimschoots voor een gezin van vier. Let op: bij tanksystemen is de effectieve leversnelheid aan de kraan hoger dan de filtersnelheid, maar de totale voorraad is beperkt tot de tankgrootte.
              </p>
            </div>
            <div className="border-l-4 border-[#005F8A] pl-4">
              <h3 className="font-bold text-gray-900 mb-1">3. Afvalwater ratio (waste ratio)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Dit is de verhouding tussen afvalwater (naar het riool) en schoon water. Een klassiek systeem heeft een 3:1 ratio: voor elke liter schoon water gaat er 3 liter afval naar de riolering. Moderne systemen met boostpomp halen 1:1 of beter. Met de gemiddelde waterprijs van €2,50 per kubieke meter maakt een slechte ratio bij intensief gebruik al gauw €30–60 per jaar verschil.
              </p>
            </div>
          </div>
        </section>

        {/* Prijsklassen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Prijsklassen: wat krijg je per budget?</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            De aanschafprijs is slechts één deel van de totale kosten. Reken ook de jaarlijkse filterkosten mee (€30–120 per jaar afhankelijk van het systeem) en de eventuele installatiekosten.
          </p>
          <div className="space-y-3">
            {priceTiers.map((tier) => (
              <div key={tier.range} className="border border-gray-100 rounded-xl p-4 bg-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-bold text-[#005F8A] text-sm shrink-0">{tier.range}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{tier.label}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{tier.wat}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800">
              <strong>Let op filterkosten:</strong> Een goedkoop instapmodel met dure vervangende filters kan op jaarbasis duurder uitvallen dan een kwalitatief systeem. Reken altijd de Total Cost of Ownership (TCO) over drie jaar uit. Meer info op{' '}
              <Link href="/kennisbank/osmose-filter-prijs" className="underline hover:text-amber-900">onze kennisbank over osmose filter prijzen</Link>.
            </p>
          </div>
        </section>

        {/* Integratie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Standalone osmose filter vs 4-in-1 kokend water kraan</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Naast een standalone osmosefilter onder het aanrecht bestaat er ook de mogelijkheid een osmosefilter te integreren in een 4-in-1 kokend water kraan. Dit is een fundamenteel andere benadering, en voor veel huishoudens de slimste keuze.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-800 mb-2">Standalone osmose filter</h3>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                Filtert alleen drinkwater, geleverd via een apart kleine kraantje naast je gewone kraan. Je moet nog steeds een aparte waterkoker of kokendwaterfunctie aanschaffen als je ook kokend water wilt.
              </p>
              <ul className="text-sm space-y-1">
                <li className="text-green-700">✓ Lage instapprijs (€150–400)</li>
                <li className="text-green-700">✓ Eenvoudig te plaatsen</li>
                <li className="text-gray-500">− Alleen koud gefilterd water</li>
                <li className="text-gray-500">− Extra kraantje nodig</li>
                <li className="text-gray-500">− Meerdere systemen naast elkaar</li>
              </ul>
            </div>
            <div className="border border-[#005F8A] bg-[#E0F2FE] rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-[#003F5C]">4-in-1 kraan met osmose</h3>
                <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full">Aanbevolen</span>
              </div>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                Combineert een osmosefilter, kokend water (100°C), koud gefilterd water, warm water én bruisend water in één elegante keukenkraan. Één filterset per jaar, geen losse apparaten.
              </p>
              <ul className="text-sm space-y-1">
                <li className="text-green-700">✓ Alles in één — osmose + kokend water</li>
                <li className="text-green-700">✓ Één jaarlijkse filterwissel</li>
                <li className="text-green-700">✓ Strak design, geen extra kraantjes</li>
                <li className="text-green-700">✓ Bespaart op waterkoker & filter apart</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Als je overweegt ook een kokend water kraan aan te schaffen, dan is de 4-in-1 oplossing vrijwel altijd voordeliger op de lange termijn. Bekijk ons volledige overzicht op de{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] hover:underline">4-in-1 kraan pagina</Link>.
          </p>
        </section>

        {/* Installatie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Installatie: zelf doen of een professional inschakelen?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            De meeste under-counter osmose filters zijn ontworpen voor doe-het-zelf installatie. Je hebt geen loodgietersvaardigheden nodig, maar wel wat basiskennis van wateraansluitingen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-800 mb-2">Zelf installeren (DIY)</h3>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                Gemiddelde installatietijd: 30–60 minuten. Je hebt nodig: een moersleutel, een boortje voor het kraantje (als je een apart kraantje monteert) en wat teflon tape. De meeste systemen worden geleverd met quick-connect aansluitingen.
              </p>
              <p className="text-sm font-semibold text-gray-700">Benodigde aansluitingen:</p>
              <ul className="text-sm text-gray-600 mt-1 space-y-1">
                <li>• Koudwaterkraan (afsluitventiel)</li>
                <li>• Drainageaansluiting op afvoerbuis (saddle clamp)</li>
                <li>• Stopcontact voor boostpomp (indien van toepassing)</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-800 mb-2">Professionele installatie</h3>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                Aangeraden als je geen ervaring hebt met wateraansluitingen, als je een oudere woning hebt met verouderde leidingen, of als je een 4-in-1 kraan met heet-water-boiler installeert. Kosten: €80–150 voor een loodgieter of installateur.
              </p>
              <p className="text-sm font-semibold text-gray-700">Wanneer professioneel?</p>
              <ul className="text-sm text-gray-600 mt-1 space-y-1">
                <li>• 4-in-1 kraan (heet-water-boiler installatie)</li>
                <li>• Geen geschikte afvoerbuis in de buurt</li>
                <li>• Oude woning met koperleidingen</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
            <p className="text-sm text-[#003F5C]">
              <strong>Aansluittypen:</strong> De meeste Nederlandse waterleidingen hebben een 1/2&quot; of 3/4&quot; BSP aansluiting. Osmose filters worden standaard geleverd met 1/4&quot; tubing en quick-connect adapters. Controleer of je systeem de juiste adapter bevat, of koop ze los bij een bouwmarkt.
            </p>
          </div>
        </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose uitgelegd</h3>
            <p className="text-sm text-gray-600">Weet wat u koopt: begrijp hoe RO-membranen water zuiveren tot 99% puur.</p>
          </Link>
          <Link href="/omgekeerde-osmose/kopen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosefilter koopgids</h3>
            <p className="text-sm text-gray-600">Uitgebreide koopgids met prijsklassen, merken en de beste keuzes van 2026.</p>
          </Link>
          <Link href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 58 keurmerk</h3>
            <p className="text-sm text-gray-600">Waarom u alleen een gecertificeerd osmosefilter moet kopen en wat dit keurmerk betekent.</p>
          </Link>
          <Link href="/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosefilter gids</h3>
            <p className="text-sm text-gray-600">Alles over osmosefilters: van werking en capaciteit tot installatie en onderhoud.</p>
          </Link>
        </div>
      </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Meer lezen */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose: hoe werkt het?' },
              { href: '/omgekeerde-osmose/kopen', label: 'Beste omgekeerde osmose systemen kopen' },
              { href: '/4-in-1-kraan', label: '4-in-1 kokend water kraan overzicht' },
              { href: '/kennisbank/osmose-filter-prijs', label: 'Osmose filter prijzen vergelijken' },
            ].map((l) => (
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over osmose filter kopen</h2>
          <div className="space-y-3">
            {faqItems.map((item) => (
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

        {/* Slotwoord */}
        <section className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-[#003F5C] mb-3">Conclusie: welk osmose filter kopen?</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Als je alleen schoon drinkwater wilt filteren en budget beperkt is, is een 4-traps under-counter tanksysteem (€150–250) een prima keuze. Zoek naar minimaal 95% TDS-reductie, een afvalwater ratio van maximaal 2:1, en een filterbudget van €30–60 per jaar.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Wil je ook kokend water, of zoek je een complete keukenoplossing zonder losse apparaten? Dan is de{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline">4-in-1 kraan met osmose</Link> de slimste investering. Je betaalt meer upfront, maar bespaart op een waterkoker, apart filter-kraantje, en meerdere filtersets per jaar.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Bekijk ook onze{' '}
            <Link href="/kennisbank/osmose-filter-prijs" className="text-[#005F8A] hover:underline">kennisbank over osmose filter prijzen</Link> voor een gedetailleerde kostenanalyse.
          </p>
        </section>
      </div>
    </>
  );
}
