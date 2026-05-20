import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter voor de tuin: planten, vijver en beregeningssysteem',
  description:
    'Waarom kraanwater niet ideaal is voor de tuin: chloor, kalk en fluoride. Vergelijk regenwater opvangen, koolstoffilter, vijverfilter en beregeningsfilters.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/tuin' },
  openGraph: {
    title: 'Waterfilter voor de tuin: planten, vijver en beregeningssysteem',
    description:
      'Waarom kraanwater niet ideaal is voor de tuin: chloor, kalk en fluoride. Vergelijk regenwater opvangen, koolstoffilter, vijverfilter en beregeningsfilters.',
    url: 'https://waterfilterplatform.nl/waterfilter/tuin',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Is kraanwater slecht voor tuinplanten?',
    answer:
      'Kraanwater is voor de meeste tuinplanten acceptabel maar niet ideaal. De drie belangrijkste nadelen: (1) Restchloor (0,1–0,3 mg/L) doodt nuttige bodemschimmels en bacteriën die essentieel zijn voor gezonde plantengroei. (2) Hard leidingwater verhoogt de bodem-pH bij langdurig gebruik — nadelig voor zuurminnende planten (rododendrons, blauwe bessen, hortensia\'s). (3) Fluoride (0,1–0,3 mg/L) kan schadelijk zijn voor gevoelige tropische planten zoals orchideeën en palmen.',
  },
  {
    question: 'Welke planten hebben gefilterd of regenwater nodig?',
    answer:
      'Planten die bijzonder gevoelig zijn voor leidingwater: orchideeën (fluoride- en chloorschade), bonsai (pH-verstoring), carnivore planten (vleesetende planten zoals sundew en spitsmos — kunnen alleen gedijen op regenwater of gedestilleerd water), blauwe bessen en rododendrons (pH te hoog bij hard water), hydroponics/kweekkamers (TDS-controle essentieel). Reguliere tuinplanten en groenten verdragen gewoon leidingwater goed.',
  },
  {
    question: 'Hoe filter ik regenwater voor gebruik in de tuin?',
    answer:
      'Basissetup regenwater filtren: (1) First-flush afleider: de eerste liters regenwater (die dakverontreiniging bevatten) worden afgeleid. (2) Sedimentfilter: verwijdert bladresten, insecten en grove deeltjes. (3) Actief koolfilter (optioneel): verwijdert organische verontreinigingen en verbetering van geur. Voor gebruik op groenten: voeg een UV-C sterilisator toe om Legionella en E. coli te neutraliseren. Regenwater is van nature zacht en vrij van chloor — ideaal voor gevoelige planten.',
  },
  {
    question: 'Welk filter heb ik nodig voor mijn vijver?',
    answer:
      'Een vijver heeft een combinatie van drie filtertypes nodig: (1) Mechanisch filter: verwijdert vaste deeltjes (visontlasting, bladresten, algen) via schuim of filtermatten. (2) Biologisch filter: nitrificerende bacteriën zetten schadelijke ammoniak en nitriet om naar onschadelijk nitraat. (3) UV-C clarifier: deactiveert algen en bacteriën door ultraviolet licht, wat het water helder houdt. UV-C kost geen chemicaliën. Voor drinkbaar vijverwater voor dieren is een aanvullend actief koolfilter zinvol.',
  },
  {
    question: 'Heb ik een sedimentfilter nodig voor mijn beregeningssysteem?',
    answer:
      'Ja, een sedimentfilter is sterk aanbevolen als pre-filter voor druppelbevloeiing en beregeningssystemen. Kleine druppelaarsgaatjes (0,5–1 mm) verstoppen snel door sediment, kalkdeeltjes, algen en organisch materiaal in het leidingwater. Een eenvoudig sedimentfilter (50–100 micron) voor het systeem voorkomt verstoppingen. Vervangingsinterval: jaarlijks of bij drukverval.',
  },
  {
    question: 'Kan ik osmosewater gebruiken voor de tuin?',
    answer:
      'Puur osmosewater (TDS <20 mg/L) is theoretisch ideaal voor gevoelige planten maar is te arm aan mineralen voor de meeste tuinplanten en moestuingroenten die voedingsstoffen (calcium, magnesium, kalium) via het gietwater opnemen. Osmosewater is wel geschikt voor orchideeën, bonsai, carnivore planten en hydroponics waarbij voedingsstoffen nauwkeurig worden gedoseerd via meststoffen. Voor reguliere tuinberegening is osmosewater ook te kostbaar en waterverspillend.',
  },
  {
    question: 'Hoe sluit ik een regenwater-opvangsysteem aan op de tuin?',
    answer:
      'Basissetup: regenpijp → first-flush afleider → regenton of ondergrondse cisterne → dompelpomp → sedimentfilter → tuinslang of druppelirrigatie. Voor grotere toepassingen: voeg een drukregelaar toe (max 2–3 bar voor druppelirrigatie). Capaciteit regenton afstemmen op tuinoppervlak: 1 m² tuin heeft gemiddeld 15–20 liter per week nodig in droge perioden. Een regenton van 1.000 liter is zinvol voor tuinen tot ca. 70 m².',
  },
  {
    question: 'Wat kost het om regenwater op te vangen en te filteren voor de tuin?',
    answer:
      'Basissetup: first-flush afleider €15–30, regenton 500L €80–150, sedimentfilter €20–50, totaal €120–230 aanschafkosten. Geavanceerdere setup met ondergrondse cisterne: €800–3.000 inclusief installatie. Jaarlijkse besparingen: een tuin van 100 m² verbruikt 1.500–2.000 liter per droge week. Bij 12 weken beregening: 18.000–24.000 liter. Waterprijs ca. €1,50–2,00 per m³: besparing €27–48 per jaar. Terugverdientijd basissetup: 3–8 jaar.',
  },
  {
    question: 'Wat is het verschil tussen een vijverpomp en een vijverfilter?',
    answer:
      'Een vijverpomp circuleert het water en zorgt voor zuurstof. Zonder filter loopt de vijver snel groen of troebel. Een vijverfilter reinigt het water — mechanisch (vaste deeltjes) en biologisch (ammoniak/nitriet afbreken). De filter heeft de pomp nodig om water door te sturen. UV-C is een aanvulling op het filtercircuit die losse algen en bacteriën neutraliseert maar de vaste delen niet verwijdert. Alle drie componenten werken samen voor een heldere, gezonde vijver.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
  { name: 'Tuin', url: 'https://waterfilterplatform.nl/waterfilter/tuin' },
];

const scenarioTable = [
  {
    situatie: 'Reguliere tuin / groenten',
    waterType: 'Kraanwater',
    filter: 'Geen filter nodig',
    kosten: '€0',
    opmerking: 'Leidingwater is voldoende voor standaard tuinplanten',
  },
  {
    situatie: 'Gevoelige planten (orchideeën, bonsai)',
    waterType: 'Regenwater of gefilterd',
    filter: 'Regenwater + sedimentfilter',
    kosten: '€120–230',
    opmerking: 'Fluoride en chloor schadelijk voor gevoelige soorten',
  },
  {
    situatie: 'Druppelirrigatie systeem',
    waterType: 'Kraanwater',
    filter: 'Sedimentfilter (pre-filter)',
    kosten: '€20–50',
    opmerking: 'Voorkomt verstopping druppelaarsgaatjes',
  },
  {
    situatie: 'Vijver met vissen',
    waterType: 'Kraanwater + circulatie',
    filter: 'Mechanisch + biologisch + UV-C',
    kosten: '€200–800',
    opmerking: 'Combinatiepakket nodig voor heldere, gezonde vijver',
  },
  {
    situatie: 'Hydroponics / kweekkamer',
    waterType: 'Gefilterd (laag TDS)',
    filter: 'Osmosefilter of regenwater',
    kosten: '€150–400',
    opmerking: 'TDS-controle essentieel voor nauwkeurige voedingsdosering',
  },
];

export default function WaterfilterTuinPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterfilter voor de tuin: planten, vijver en beregeningssysteem',
          description:
            'Waarom kraanwater niet ideaal is voor de tuin en welke filteropties er zijn voor planten, vijvers en beregeningssystemen.',
          datePublished: '2026-03-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/waterfilter/tuin',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/waterfilter" className="hover:text-[#005F8A]">Waterfilter</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Tuin</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Waterfilter voor de tuin: planten, vijver en beregeningssysteem
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-2">
            Kraanwater is niet voor alle tuinplanten geschikt. Chloor, harde kalk en fluoride kunnen
            bodemkwaliteit aantasten, gevoelige planten beschadigen en vijvers troebel maken. Welk
            filter past bij jouw tuinsituatie?
          </p>
          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">
              Bijgewerkt mei 2026
            </span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">
              ~9 min leestijd
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">

        <QuickAnswer answer="Voor de meeste tuinplanten is kraanwater voldoende, maar gevoelige soorten (orchideeën, bonsai, carnivore planten) en vijvers profiteren van gefilterd of regenwater. Regenwater opvangen met een sedimentfilter is de goedkoopste oplossing (€120–230). Druppelirrigatiesystemen hebben altijd een sedimentfilter nodig ter voorkoming van verstopping." />

        {/* Waarom kraanwater niet ideaal is */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waarom kraanwater niet ideaal is voor planten
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nederlands leidingwater is uitstekend drinkwater voor mensen, maar bevat een aantal stoffen
            die voor planten problematisch kunnen zijn:
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-2">Chloor en chloramines</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Waterbedrijven voegen chloor (0,1–0,3 mg/L) toe aan leidingwater als desinfectiemiddel.
            Chloor doodt niet alleen bacteriën in het water, maar ook de nuttige microbiologie in de
            tuinbodem. Mycorrhizaschimmels en nitrificerende bacteriën — essentieel voor gezonde
            plantenwortelgroei en stikstofopname — zijn gevoelig voor chloorconcentraties in het
            gietwater. Bij intensief gieten met kraanwater neemt de bodemkwaliteit op termijn af.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            <strong>Oplossing:</strong> Laat kraanwater 24 uur in een open emmer staan — het chloor
            verdampt. Of gebruik een actief koolfilter dat chloor direct verwijdert. Regenwater bevat
            van nature geen chloor.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-2">Harde kalk en hoge pH</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Hard leidingwater (boven 12°dH) heeft een hoge pH (7,5–8,5). Wanneer je jarenlang met
            hard water giet, stijgt de bodem-pH geleidelijk. Dit is schadelijk voor{' '}
            <em>zuurminnende planten</em> zoals rododendrons, azalea&apos;s, hortensia&apos;s, blauwe bessen en
            erika&apos;s. Bij een te hoge bodem-pH kunnen planten geen ijzer en mangaan opnemen, wat
            resulteert in geelverkleuring tussen de bladnerven (chlorose).
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Controleer de{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid in jouw gemeente
            </Link>{' '}
            om te beoordelen of dit relevant is voor jouw regio.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-2">Fluoride</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Sommige waterbedrijven voegen fluoride toe aan leidingwater (0,1–0,3 mg/L). Fluoride is
            schadelijk voor een beperkte groep tropische en gevoelige kamerplanten, met name orchideeën,
            palmen (Dracaena, Yucca, Cordyline) en vleesetende planten. De schade uit zich als
            bruine bladpunten. Voor buitentuinplanten is de fluorideconcentratie in leidingwater
            doorgaans geen probleem.
          </p>
        </section>

        {/* Filteropties voor planten */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Filteropties: van regenwater tot koolstoffilter
          </h2>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-2">
            1. Regenwater opvangen
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Regenwater is van nature zacht (TDS &lt;20 mg/L), vrij van chloor en heeft een lichte
            zure pH (5,5–6,5) — ideaal voor de meeste tuinplanten en zuurminnende soorten. Het opvangen
            van regenwater is de meest duurzame en kosteneffectieve oplossing voor tuinberegening.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Een basisregenton van 500 liter kost €80–150. Koppel meerdere tonnen in serie voor meer
            capaciteit. Voor gebruik op groenten wordt een <strong>first-flush afleider</strong> en
            een sedimentfilter aanbevolen om bladresten, vogelontlasting en dakvervuiling te verwijderen.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-2">
            2. Actief koolstoffilter (kraanwater)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Als je kraanwater wilt filteren voor gevoelige planten, verwijdert een actief koolstoffilter
            chloor effectief (&gt;90%). Geschikt als inline filter op de tuinkraan of als filterkan
            vullen voor gieten. Dit is geen ontharder — de pH en mineraleninhoud blijven hetzelfde.
            Kosten: €30–80 voor een inline koolstoffilter op de buitenkraan.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-2">
            3. Zacht water voor gevoelige planten
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Voor orchideeën, bonsai en carnivore planten is water met een lage TDS (onder 50 mg/L) en
            lage pH (5,5–6,5) noodzakelijk. Opties: regenwater, gedestilleerd water (duur bij grotere
            hoeveelheden), of osmosewater. Osmosewater (TDS &lt;20 mg/L) is ideaal voor carnivore planten.
            Lees meer over{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose voor thuisgebruik
            </Link>
            .
          </p>
        </section>

        {/* Vijver */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Vijverfilter: biologisch, mechanisch en UV-C
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een tuinvijver — zeker met vissen — is een complex ecosysteem. Voor helder en gezond vijverwater
            zijn drie typen filtering nodig die samenwerken:
          </p>
          <div className="space-y-4">
            <div className="border border-gray-100 rounded-xl p-5">
              <p className="font-bold text-[#003F5C] mb-2">Mechanische filtratie</p>
              <p className="text-sm text-gray-700">
                Verwijdert vaste deeltjes: visontlasting, bladresten, algen en organisch materiaal.
                Bestaande uit filterscschuim of filtermatten met verschillende dichtheden (grof naar fijn).
                De pomp stuurt het vijverwater door de filterkast. Regelmatige reiniging (spoel
                filtermatten maandelijks) is essentieel voor goede doorstroming.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <p className="font-bold text-[#003F5C] mb-2">Biologische filtratie</p>
              <p className="text-sm text-gray-700">
                Nitrificerende bacteriën (Nitrosomonas, Nitrobacter) zetten giftige ammoniak
                (visafscheidingen) om in nitriet en daarna in relatief onschadelijk nitraat.
                Dit biologische proces — de stikstofcyclus — is essentieel voor visoverleven.
                Het biologische filter heeft een groot oppervlak nodig voor bacteriegroei:
                filterringen (Kaldnes) of bioballen. Wacht minimaal 6–8 weken na aanleg voor de
                bacteriëncultuur is opgebouwd (&ldquo;vijver inrijden&rdquo;).
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <p className="font-bold text-[#003F5C] mb-2">UV-C sterilisator</p>
              <p className="text-sm text-gray-700">
                Ultraviolet licht (254 nm) deactiveert algencellen en bacteriën die door het water
                zweven. Dit houdt het water helder (geen groene watersluier) zonder chemicaliën.
                De UV-lamp vervangt u jaarlijks (ook als ze nog brandt — de effectiviteit daalt na
                ca. 8.000 branduren). UV-C doodt geen vaste deeltjes — dat doet het mechanische filter.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Vijverbeheer vraagt ook aandacht voor de waterhardheid: een KH (carbonaathardheid) van
            4–8°dH is ideaal voor koikarpers en goudvissen. Controleer de{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid in jouw regio
            </Link>
            {' '}als referentie voor je vijverbeheer.
          </p>
        </section>

        {/* Beregeningssystemen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Beregeningssystemen: sedimentfilter als eerste stap
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Druppelirrigatie is de meest waterefficiënte methode voor moestuinen en siertuinen —
            maar ook de gevoeligste voor verstopping. Kleine druppelaarsgaatjes (0,5–2 mm) raken
            snel verstopt door:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Kalkdeeltjes die losschieten van leidingwanden</li>
            <li>Zandkorrels en sediment vanuit het leidingnet</li>
            <li>Algen en biofilm die zich bij langdurig stilstaand water vormen</li>
            <li>Plantmateriaal dat het systeem ingezogen wordt</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een eenvoudig sedimentfilter (50–100 micron, schroefkaptype) als pre-filter op de
            watertoevoer van het beregeningssysteem is de standaardoplossing. Kosten: €20–40.
            Reinig het filterelement aan het begin van elk groeiseizoen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Bij gebruik van regenwater voor druppelirrigatie is een sedimentfilter nog belangrijker:
            regenwater bevat meer organisch materiaal dan leidingwater.
          </p>
        </section>

        {/* Welke planten */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welke planten hebben gefilterd water nodig?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-red-200 bg-red-50 rounded-xl p-5">
              <p className="font-bold text-red-800 mb-3">Gevoelig voor leidingwater</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {[
                  'Orchideeën (fluoride- en chloorschade)',
                  'Bonsai (pH-verstoring bij hard water)',
                  'Carnivore planten (vleesetend)',
                  'Blauwe bessen (pH te hoog bij hard water)',
                  'Rododendron, azalea, hortensia',
                  'Hydroponics en kweekkamers',
                  'Dracaena, Yucca, Cordyline (fluoride)',
                ].map(p => (
                  <li key={p} className="flex gap-2 items-start">
                    <span className="text-red-500 shrink-0 mt-0.5">!</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-green-200 bg-green-50 rounded-xl p-5">
              <p className="font-bold text-green-800 mb-3">Verdragen kraanwater goed</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {[
                  'Groenten (tomaat, komkommer, prei)',
                  'Kruiden (basilicum, peterselie)',
                  'Gras en gazon',
                  'Heesters en haagplanten',
                  'Rozen en vaste planten',
                  'Fruitbomen',
                  'Eenjarige zomerbloeiers',
                ].map(p => (
                  <li key={p} className="flex gap-2 items-start">
                    <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* DIY regenwater setup */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            DIY: regenwater opvangen en filteren voor de tuin
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een eenvoudige regenwater-opvanginstallatie is in een middag te installeren:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3 mb-5">
            <li>
              <strong>First-flush afleider installeren (€15–30):</strong> De eerste 20–30 liter regen
              na een droge periode bevat de meeste dakvervuiling. De afleider laat dit water afvloeien
              en stuurt de rest naar de ton.
            </li>
            <li>
              <strong>Regenpijp aankoppelen:</strong> Zaag de regenpijp aan, monteer de
              doorloopkoppeling en verbind met de regenton via een vulpijp.
            </li>
            <li>
              <strong>Sedimentfilter monteren (€20–40):</strong> Monteer een filterkorfliter op
              de uitgang van de regenton, voor de pomp of slang.
            </li>
            <li>
              <strong>Overloop aansluiten:</strong> Verbind de overloop van de volle ton met de
              regenpijp of afvoer. Zo stroomt overtollig water weg bij hevige regenval.
            </li>
            <li>
              <strong>Optioneel: dompelpomp (€40–100):</strong> Bij lage waterdruk of voor
              aansluiting op druppelirrigatie is een dompelpomp in de ton praktisch.
            </li>
          </ol>
          <p className="text-gray-700 leading-relaxed">
            Voor gebruik van regenwater op moestuingroenten is een UV-C desinfectie aanbevolen
            om E. coli en andere ziekteverwekkers te elimineren. Vogel- en kat-ontlasting op het
            dak kan het regenwater besmetten.
          </p>
        </section>

        {/* Vergelijkingstabel situaties */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Overzicht: welk filter past bij jouw tuinsituatie?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Situatie</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Watertype</th>
                  <th className="text-left px-4 py-3 font-semibold">Filter</th>
                  <th className="text-center px-4 py-3 font-semibold">Kosten</th>
                </tr>
              </thead>
              <tbody>
                {scenarioTable.map((row, i) => (
                  <tr key={row.situatie} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.situatie}</td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.waterType}</td>
                    <td className="px-4 py-3 text-gray-700">{row.filter}</td>
                    <td className="px-4 py-3 text-center font-semibold text-[#003F5C]">{row.kosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-2">
            Aanschafkosten inclusief basismaterialen. Installatie en eventuele professionele hulp niet inbegrepen.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/waterfilter/vijver" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Vijverfilter kiezen</h3>
              <p className="text-sm text-gray-600">De beste vijverfilters voor helder water en gezonde vissen in uw tuin.</p>
            </Link>
            <Link href="/waterfilter/voor-aquarium" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor aquarium</h3>
              <p className="text-sm text-gray-600">Osmosewater voor zoet- en zoutwateraquaria: GH, KH en TDS instellen.</p>
            </Link>
            <Link href="/filtertechnieken/ultrafiltratie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ultrafiltratie techniek</h3>
              <p className="text-sm text-gray-600">Hoe ultrafiltratie werkt voor buitenwater en tuinirrigatie.</p>
            </Link>
            <Link href="/waterfilter/sediment" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Sedimentfilter voor de tuin</h3>
              <p className="text-sm text-gray-600">Bescherm uw beregeningssysteem met een sedimentfilter als pre-filter.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over waterfilters voor de tuin
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details
                key={item.question}
                className="border border-gray-100 rounded-xl p-4 group"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">
                    ▾
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/waterhardheid', title: 'Waterhardheid per gemeente', desc: 'Controleer of je hard of zacht leidingwater hebt in jouw regio.' },
              { href: '/waterfilter/soorten', title: 'Alle waterfiltersoorten', desc: 'Van koolstoffilter tot osmose — overzicht en vergelijking.' },
              { href: '/omgekeerde-osmose', title: 'Omgekeerde osmose uitleg', desc: 'Hoe RO-membranen werken en wanneer osmose zinvol is.' },
              { href: '/waterfilter', title: 'Waterfilter kiezen', desc: 'Praktische gids voor het kiezen van het juiste waterfilter.' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">
                  {l.title}
                </p>
                <p className="text-sm text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
