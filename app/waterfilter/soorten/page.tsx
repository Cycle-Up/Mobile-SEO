import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterfilter Soorten: Welk Type Past bij Jou?',
  description:
    'Overzicht van alle waterfilter soorten: koolstoffilter, keramisch, omgekeerde osmose, UV-filter, ionenwisselaar, sedimentfilter en geïntegreerde systemen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/soorten' },
  openGraph: {
    title: 'Waterfilter Soorten: Welk Type Past bij Jou?',
    description:
      'Koolstoffilter, omgekeerde osmose, keramisch, UV — welk waterfiltertype past bij jouw probleem? Complete vergelijkingstabel en beslishulp voor het juiste.',
    url: 'https://waterfilterplatform.nl/waterfilter/soorten',
    type: 'article',
    locale: 'nl_NL',
  },
};

const faqItems = [
  {
    question: 'Welk waterfilter verwijdert het meest?',
    answer:
      'Omgekeerde osmose (RO) is het meest uitgebreide waterfiltersysteem. Het verwijdert 95–99% van opgeloste stoffen zoals kalk, chloor, nitraten, PFAS, lood, pesticiden en microplastics. Geen ander single-stage filter haalt een vergelijkbare breedte van verwijdering. Voor bacteriën en virussen is een extra UV-stap of keramisch filter vereist als aanvulling.',
  },
  {
    question: 'Wat is het verschil tussen een koolstoffilter en omgekeerde osmose?',
    answer:
      'Een koolstoffilter (actief kool) verbetert voornamelijk smaak en geur door chloor en organische stoffen te absorberen. Het verwijdert geen opgeloste mineralen zoals kalk, nitraat of zware metalen. Omgekeerde osmose perst water door een semi-permeabel membraan dat moleculair filtert — het verwijdert naast chloor en organica ook kalk, nitraat, lood, PFAS en microplastics. RO is dus veel uitgebreider, maar ook complexer en duurder in aanschaf.',
  },
  {
    question: 'Verwijdert een waterfilter ook bacteriën?',
    answer:
      'Dat hangt af van het filtertype. Een keramisch filter met voldoende kleine poriën (0,1–0,2 micron) houdt bacteriën en cysten effectief tegen. Een UV-filter doodt microorganismen door ultraviolet licht, maar verwijdert geen chemische stoffen. Omgekeerde osmose membranen houden bacteriën ook feitelijk tegen vanwege de extreem kleine poriën (0,0001 micron). Een koolstoffilter of sedimentfilter verwijdert geen bacteriën.',
  },
  {
    question: 'Welk waterfilter heb ik nodig voor hard water?',
    answer:
      'Voor hard water zijn de meest effectieve oplossingen: (1) omgekeerde osmose — verwijdert kalk en andere mineralen volledig; (2) een ionenwisselaar of waterontharder — wisselt calcium en magnesium om voor natrium of kalium. Een koolstoffilter verbetert de smaak maar onthardt het water niet. Als je alleen de kalkproblemen in apparaten wilt oplossen, is een ionenwisselaar of magneetontharder een goedkopere optie.',
  },
  {
    question: 'Wat kost een waterfilter per jaar aan onderhoud?',
    answer:
      'Kosten variëren sterk per type: een koolstofpatroon (aanrecht- of kraan­filter) kost € 20–50 per jaar. Een compleet omgekeerde osmosesysteem kost € 60–110 per jaar aan filterwissels (voorfilter + membraan). Een ionenwisselaar of waterontharder gebruikt zout — reken op € 30–80 per jaar. UV-filters hebben een lamp die jaarlijks vervanging nodig heeft (€ 30–60). Sedimentfilters zijn het goedkoopst: € 10–25 per jaar.',
  },
];

type FilterEffect = 'ja' | 'gedeeltelijk' | 'nee';

interface FilterRow {
  type: string;
  chloor: FilterEffect;
  kalk: FilterEffect;
  nitraat: FilterEffect;
  bacterien: FilterEffect;
  pfas: FilterEffect;
  lood: FilterEffect;
  smaak: FilterEffect;
}

const vergelijkMatrix: FilterRow[] = [
  {
    type: 'Koolstoffilter',
    chloor: 'ja',
    kalk: 'nee',
    nitraat: 'nee',
    bacterien: 'nee',
    pfas: 'gedeeltelijk',
    lood: 'gedeeltelijk',
    smaak: 'ja',
  },
  {
    type: 'Keramisch filter',
    chloor: 'nee',
    kalk: 'nee',
    nitraat: 'nee',
    bacterien: 'ja',
    pfas: 'nee',
    lood: 'nee',
    smaak: 'gedeeltelijk',
  },
  {
    type: 'Omgekeerde osmose',
    chloor: 'ja',
    kalk: 'ja',
    nitraat: 'ja',
    bacterien: 'ja',
    pfas: 'ja',
    lood: 'ja',
    smaak: 'ja',
  },
  {
    type: 'UV-filter',
    chloor: 'nee',
    kalk: 'nee',
    nitraat: 'nee',
    bacterien: 'ja',
    pfas: 'nee',
    lood: 'nee',
    smaak: 'nee',
  },
  {
    type: 'Ionenwisselaar',
    chloor: 'nee',
    kalk: 'ja',
    nitraat: 'gedeeltelijk',
    bacterien: 'nee',
    pfas: 'nee',
    lood: 'gedeeltelijk',
    smaak: 'gedeeltelijk',
  },
  {
    type: 'Sedimentfilter',
    chloor: 'nee',
    kalk: 'nee',
    nitraat: 'nee',
    bacterien: 'nee',
    pfas: 'nee',
    lood: 'nee',
    smaak: 'nee',
  },
  {
    type: 'Geïntegreerd (4-in-1 + RO)',
    chloor: 'ja',
    kalk: 'ja',
    nitraat: 'ja',
    bacterien: 'ja',
    pfas: 'ja',
    lood: 'ja',
    smaak: 'ja',
  },
  {
    type: 'Filterkan (bv. Brita)',
    chloor: 'ja',
    kalk: 'nee',
    nitraat: 'nee',
    bacterien: 'nee',
    pfas: 'gedeeltelijk',
    lood: 'nee',
    smaak: 'ja',
  },
  {
    type: 'Waterontkalker',
    chloor: 'nee',
    kalk: 'ja',
    nitraat: 'nee',
    bacterien: 'nee',
    pfas: 'nee',
    lood: 'gedeeltelijk',
    smaak: 'gedeeltelijk',
  },
  {
    type: 'Ultrafiltratie (UF)',
    chloor: 'nee',
    kalk: 'nee',
    nitraat: 'nee',
    bacterien: 'ja',
    pfas: 'nee',
    lood: 'nee',
    smaak: 'gedeeltelijk',
  },
  {
    type: 'Nanofiltration (NF)',
    chloor: 'gedeeltelijk',
    kalk: 'ja',
    nitraat: 'gedeeltelijk',
    bacterien: 'ja',
    pfas: 'gedeeltelijk',
    lood: 'ja',
    smaak: 'ja',
  },
];

function EffectBadge({ effect }: { effect: FilterEffect }) {
  if (effect === 'ja') {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold">
        ✓
      </span>
    );
  }
  if (effect === 'gedeeltelijk') {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
        ½
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-400 text-xs">
      ✗
    </span>
  );
}

const filterTypes = [
  {
    id: 'koolstof',
    naam: 'Koolstoffilter (Actief Kool)',
    geschiktVoor: 'Smaak en geur verbeteren',
    hubUrl: '/koolstoffilter',
    hubLabel: 'Volledige gids over koolstoffilters →',
    samenvatting:
      'Het meest verkochte type waterfilter wereldwijd. Actief koolstof heeft een enorme interne oppervlakte die organische verbindingen, chloor en chloorbijproducten absorbeert. Resultaat: beter smakend en frisser ruikend drinkwater.',
    watVerwijdert: [
      'Vrij chloor en chloorbijproducten (THMs)',
      'Organische verbindingen (pesticiden, herbiciden)',
      'Smaak- en geurproblemen',
      'Gedeeltelijk: PFAS en lood',
    ],
    watNiet: ['Kalk (calciumcarbonaat)', 'Nitraat en nitriet', 'Bacteriën en virussen', 'Zware metalen (volledig)'],
    vormen: 'Aanrechtfilterkan (Brita), kraanfilter, ingebouwde blokfilter (onder aanrecht) of als voorfilter in RO-systeem.',
    kosten: 'Aanschaf € 20–100 (kan) tot € 150–400 (ingebouwd); filterpatroon € 20–50 per jaar.',
    wanneer:
      'Wanneer je leidingwater smaakt of ruikt naar chloor en je geen hard-water of nitraatprobleem hebt. Ideaal als budgetvriendelijke eerste stap.',
  },
  {
    id: 'keramisch',
    naam: 'Keramisch Filter',
    geschiktVoor: 'Bacteriën, cysten en troebelheid verwijderen',
    hubUrl: '/keramisch-filter',
    hubLabel: 'Volledige gids over keramische filters →',
    samenvatting:
      'Een keramisch filter werkt via mechanische filtratie: de kleine poriën (0,1–0,9 micron) houden deeltjes, bacteriën en protozoaire cysten (zoals Giardia en Cryptosporidium) fysiek tegen. Populair in landen met minder betrouwbaar leidingwater en als aanvulling op RO-systemen.',
    watVerwijdert: [
      'Bacteriën (E. coli, Salmonella)',
      'Protozoaire cysten (Giardia, Cryptosporidium)',
      'Troebelheid en sediment',
      'Grotere deeltjes en colloïden',
    ],
    watNiet: [
      'Virussen (poriën te groot)',
      'Opgeloste chemische stoffen',
      'Kalk en nitraat',
      'Chloor (tenzij gecombineerd met koolstof)',
    ],
    vormen: 'Tafeltopfilter (gravity filter), kannenfilter of ingebouwd als voorfilter in meertraps systeem.',
    kosten: 'Aanschaf € 30–200; keramisch element vervangt men na 6–12 maanden (€ 15–40) of reinigt men regelmatig.',
    wanneer:
      'Wanneer je bacterieel veilig water wilt in gebieden met matige waterkwaliteit, of als aanvulling op een UV-filter voor troebel water.',
  },
  {
    id: 'osmose',
    naam: 'Omgekeerde Osmose (RO)',
    geschiktVoor: 'Meest uitgebreide filtratie — ook kalk, nitraat, PFAS, lood',
    hubUrl: '/omgekeerde-osmose',
    hubLabel: 'Volledige gids over omgekeerde osmose →',
    samenvatting:
      'Omgekeerde osmose is het meest effectieve waterfiltersysteem voor thuisgebruik. Onder druk wordt water door een semi-permeabel membraan met extreem kleine poriën (0,0001 micron) geperst. Het membraan laat alleen watermoleculen door en houdt vrijwel alle opgeloste stoffen tegen — van kalk en nitraat tot lood, PFAS en microplastics.',
    watVerwijdert: [
      'Kalk en harde mineralen (95–99%)',
      'Nitraat en nitriet',
      'PFAS (fluorhoudende verbindingen)',
      'Lood en zware metalen',
      'Microplastics',
      'Chloor en organische verbindingen',
      'Bacteriën en grote virussen',
      'Medicijnresten (gedeeltelijk)',
    ],
    watNiet: [
      'Sommige kleine virussen (aanvulling UV aanbevolen bij onzeker leidingwater)',
      'Opgeloste gassen (CO₂, H₂S) — die passeren deels het membraan',
    ],
    vormen:
      'Systeem onder het aanrecht met meerdere filterstadia (sediment → koolstof → RO-membraan → nafilter). Vaak gecombineerd met een apart kraantje of een 4-in-1 kraan.',
    kosten:
      'Aanschaf € 200–900 (systeem); jaarlijks € 60–110 (voorfilter + membraan). Membraan gaat 1–3 jaar mee. Beste waarde via een geïntegreerde 4-in-1 kraan.',
    wanneer:
      'Wanneer je het meest complete waterfilter wilt: hard water, nitraat, lood, PFAS of gewoon het schoonste drinkwater ongeacht de probleemstof. De beste keuze voor gezinnen die willen weten dat hun water echt schoon is.',
  },
  {
    id: 'uv',
    naam: 'UV-Filter',
    geschiktVoor: 'Microorganismen doden (bacteriën, virussen)',
    hubUrl: '/uv-filter',
    hubLabel: 'Volledige gids over UV-filters →',
    samenvatting:
      'Een UV-filter gebruikt ultraviolet licht (UV-C, 254 nm) om het DNA van microorganismen te beschadigen, zodat ze zich niet meer kunnen vermenigvuldigen en feitelijk worden geneutraliseerd. Effectief tegen vrijwel alle bacteriën, virussen en protozoën — maar het filtert geen chemische stoffen of deeltjes.',
    watVerwijdert: [
      'Bacteriën (E. coli, Salmonella, Legionella)',
      'Virussen (Norovirus, Rotavirus)',
      'Protozoën (Giardia, Cryptosporidium)',
    ],
    watNiet: [
      'Chemische stoffen (chloor, nitraat, PFAS)',
      'Zware metalen',
      'Kalk',
      'Troebelheid (troebel water vermindert UV-effectiviteit)',
    ],
    vormen:
      'Inline UV-unit in de waterleiding, doorgaans als eindstap na mechanisch filtratie (sediment + koolstof). Vereist elektriciteit.',
    kosten: 'Aanschaf € 80–300; UV-lamp vervangen per 12 maanden (€ 30–60). Geen filter dat slijtage heeft van het water zelf.',
    wanneer:
      'Als aanvulling op een ander filtersysteem wanneer bacteriologische veiligheid de prioriteit is — bijvoorbeeld bij een privéwaterbron, regenwater of gebieden met bekend bacterieel risico.',
  },
  {
    id: 'ionenwisselaar',
    naam: 'Ionenwisselaar / Waterontharder',
    geschiktVoor: 'Hardheid (kalk) verwijderen',
    hubUrl: '/waterontharder',
    hubLabel: 'Volledige gids over waterontharders →',
    samenvatting:
      'Een ionenwisselaar wisselt calcium- en magnesiumionen (verantwoordelijk voor waterhardheid) uit voor natrium- of kaliumionen via een harsbed. Het resultaat is zacht water dat geen kalkaanslag achterlaat in leidingen, apparaten en kranen. Geen filter in de traditionele zin — het verwijdert geen chemische contaminanten.',
    watVerwijdert: [
      'Calciumcarbonaat (kalk)',
      'Magnesiumverbindingen',
      'Gedeeltelijk: sommige zware metalen',
    ],
    watNiet: [
      'Bacteriën en virussen',
      'Chemische stoffen (chloor, nitraat, PFAS)',
      'Microplastics',
      'Organische verbindingen',
    ],
    vormen:
      'Centrale waterontharder (voor het hele huis) of kleine ionenwisselaarpatronen voor specifieke kranen. Vereist regelmatige regeneratie met keukenzout.',
    kosten:
      'Aanschaf centrale installatie € 400–1.500; zout € 30–80 per jaar. Kleine patroonontharders € 30–80 aanschaf; patronen € 15–30 per half jaar.',
    wanneer:
      'Wanneer de waterhardheid de hoofdproblematiek is: kalkaanslag in de waterkoker, wasmachine, douche en leidingen. Combineer met een koolstoffilter voor ook smaakverbetering, of kies voor RO als een completere oplossing gewenst is.',
  },
  {
    id: 'sediment',
    naam: 'Sedimentfilter',
    geschiktVoor: 'Deeltjes en troebelheid verwijderen (voorfilter)',
    hubUrl: '/sedimentfilter',
    hubLabel: 'Volledige gids over sedimentfilters →',
    samenvatting:
      'Een sedimentfilter is de eenvoudigste filtervorm: een polypropyleenpatroon of geweven filter dat deeltjes van 1–100 micron uit het water zeeft. Denk aan zand, roest, klei en aarddeeltjes. Sedimentfilters worden bijna altijd als voorfilter ingezet in een meertraps systeem om de levensduur van de volgende filterstadia (koolstof, membraan) te verlengen.',
    watVerwijdert: [
      'Zand en grind',
      'Roest en oxidatiedeeltjes',
      'Klei en aarddeeltjes',
      'Grote organische deeltjes',
    ],
    watNiet: [
      'Bacteriën (tenzij < 1 micron keramisch)',
      'Chemische stoffen',
      'Kalk (opgelost)',
      'Geur en smaak',
    ],
    vormen:
      'Inline filterpatroon (5 of 10 inch, 1–100 micron) in een kunststof filterbehuizing. Standaard als eerste stap in RO-systemen of op waterzuivering op locatie.',
    kosten: 'Aanschaf filterbehuizing € 15–40; patronen € 5–15 per 3–6 maanden.',
    wanneer:
      'Als voorfilter in een meertraps systeem — altijd vóór een koolstof- of RO-filter. Zelfstandig nuttig bij privéwaterbronnen met veel troebel of roestachtig water.',
  },
  {
    id: 'filterkan',
    naam: 'Filterkan (bv. Brita, TAPP)',
    geschiktVoor: 'Chloor en smaak verbeteren — instapoptie',
    hubUrl: '/filterkan',
    hubLabel: 'Volledige gids over filterkansen →',
    samenvatting:
      'Een filterkan is de eenvoudigste en goedkoopste manier om kraanwater te verbeteren. Een compacte actief-koolstofpatroon in de kan absorbeert chloor, chloorbijproducten en lichte smaakproblemen. Geen installatie nodig — ideaal als eerste stap of voor huurders.',
    watVerwijdert: [
      'Vrij chloor en chloorgeur',
      'Organische verbindingen (licht)',
      'Smaak- en geurproblemen',
      'Gedeeltelijk: PFAS (afhankelijk van patroon)',
    ],
    watNiet: ['Kalk en hardheid', 'Nitraat en nitriet', 'Bacteriën en virussen', 'Lood en zware metalen'],
    vormen: 'Tafelmodel kan (1,5–3,5 liter reservoir), filterkraan of kleine aanrechtunit met hetzelfde principe.',
    kosten: 'Aanschaf € 20–60; filterpatronen € 20–40 per jaar (circa elke 4–8 weken vervangen bij gemiddeld gebruik).',
    wanneer:
      'Wanneer je snel en zonder installatie de smaak wil verbeteren en geen hard water- of nitraatprobleem hebt. Geschikt voor huurwoningen of als tijdelijke oplossing. Voor een bredere zuivering kies je voor een ingebouwd systeem of omgekeerde osmose.',
  },
  {
    id: 'waterontkalker',
    naam: 'Waterontkalker / Antikalkfilter',
    geschiktVoor: 'Kalkaanslag in apparaten verminderen',
    hubUrl: '/waterontkalker',
    hubLabel: 'Volledige gids over waterontkalkers →',
    samenvatting:
      'Een waterontkalker richt zich specifiek op het voorkomen of verminderen van kalkaanslag in apparaten en leidingen. Anders dan een ionenwisselaar (die kalk verwijdert) werken veel ontkalkers via fysische methoden (magneet, elektromagneet, template assisted crystallisation) die calcium en magnesium in een niet-aanhechtende kristalvorm omzetten. Effectiviteit van fysische methoden is wetenschappelijk omstreden.',
    watVerwijdert: [
      'Kalkaanslag (aanhechtingsgedrag verminderd)',
      'Beschermt waterkoker, koffiemachine en leidingen',
    ],
    watNiet: [
      'Kalk chemisch uit het water (water blijft hard)',
      'Bacteriën, chemische stoffen, nitraat, PFAS',
      'Smaakverbetering (pH en TDS ongewijzigd)',
    ],
    vormen:
      'Magneetontkalker (klemmen op leiding), elektronische ontkalker, TAC/template-kristallisator (inline), zoutloze onthardingspatroon.',
    kosten:
      'Magneetontkalkers: € 20–80 (eenmalig, geen vervanging). TAC-patronen: € 100–300 aanschaf + € 40–80 per jaar patroonvervanging. Elektronisch: € 50–200.',
    wanneer:
      'Wanneer je kalkaanslag in apparaten wil reduceren zonder zout te gebruiken en zonder chemische samenstelling van het water te willen wijzigen. Combineer met een koolstoffilter voor smaakverbetering. Bij zwaar probleem met hardheid kies voor een ionenwisselaar of omgekeerde osmose.',
  },
  {
    id: 'ultrafiltratie',
    naam: 'Ultrafiltratie (UF)',
    geschiktVoor: 'Bacteriën en virussen zonder chemicaliën',
    hubUrl: '/ultrafiltratie',
    hubLabel: 'Volledige gids over ultrafiltratie →',
    samenvatting:
      'Ultrafiltratie (UF) gebruikt membranen met poriën van 0,01–0,1 micron om bacteriën, virussen, eiwitten en colloidale deeltjes te verwijderen zonder drukpompen of chemicaliën. Het water stroomt door het membraan op leidingwaterdruk. UF verwijdert geen opgeloste stoffen zoals kalk, nitraat of chloor.',
    watVerwijdert: [
      'Bacteriën — 99,99%',
      'Virussen — 99–99,9% (afhankelijk van membraangrootte)',
      'Protozoa en cysten',
      'Eiwitten en colloidale deeltjes',
      'Troebelheid',
    ],
    watNiet: [
      'Opgeloste zouten (kalk, nitraat, PFAS)',
      'Chloor en organische verbindingen',
      'Zware metalen',
      'Kleine virussen (bij membranen >0,02 µm)',
    ],
    vormen:
      'Hollow-fiber membraanmodule (inline, onder aanrecht), tafelmodel UF-unit of als aanvullend filtertreden in meertraps systeem.',
    kosten:
      'Aanschaf € 100–400 (afhankelijk van type en merk); membraanvervanging elke 1–3 jaar (€ 40–120). Geen elektriciteit nodig.',
    wanneer:
      'Wanneer microbiologische veiligheid de prioriteit is en je geen chemische verontreinigingen verwacht. Populair als aanvulling op een koolstoffilter bij privéwaterbronnen of regenwater. Combineer met een koolstoffilter voor volledige oplossing.',
  },
  {
    id: 'nanofiltration',
    naam: 'Nanofiltration (NF)',
    geschiktVoor: 'Ontharting met gedeeltelijk mineraalbehoud',
    hubUrl: '/nanofiltration',
    hubLabel: 'Volledige gids over nanofiltration →',
    samenvatting:
      'Nanofiltration (NF) is een membraantechnologie met poriën van 0,001–0,01 micron — tussen ultrafiltratie en omgekeerde osmose in. Het verwijdert hardheid, pesticiden en kleurstoffen effectief, terwijl het een deel van de nuttige mineralen behoudt. Voor thuisgebruik zijn vrijwel geen kant-en-klare producten beschikbaar; NF wordt voornamelijk gemeentelijk en industrieel ingezet.',
    watVerwijdert: [
      'Hardheid / kalk (Ca²⁺, Mg²⁺) — 80–95%',
      'Pesticiden en herbiciden — 90–99%',
      'Kleurstoffen en grote organische moleculen',
      'Bacteriën (99,99%) en virussen (~99%)',
    ],
    watNiet: [
      'Kleine zouten (NaCl) — deels doorgelaten',
      'Nitraat — slechts 50–70% verwijdering',
      'PFAS — variabel (70–95%, afhankelijk van molecuulgrootte)',
      'Monovalente ionen',
    ],
    vormen:
      'Geen standaard consumentenproducten. "Zachte osmose" of "selective RO" systemen bevatten soms een NF-membraan. Industrieel als drukmembraanunit.',
    kosten:
      'Geen kant-en-klare thuisproducten. Maatwerk: losse NF-membraanmodule € 50–200 + installatie. RO met remineralisatiefilter is goedkoper en breder beschikbaar (€ 230–560 totaal).',
    wanneer:
      'Wanneer je hardheid en pesticiden wil verwijderen maar meer mineralen wil behouden dan bij RO. In de praktijk is een RO-systeem met remineralisatiefilter voor thuisgebruik de betere keuze — meer producten, betere service, hogere zekerheid voor nitraat en PFAS.',
  },
  {
    id: 'geintegreerd',
    naam: 'Geïntegreerd Systeem (4-in-1 Kraan + RO)',
    geschiktVoor: 'Alles in één — kokend, koud, gefilterd, bruisend',
    hubUrl: null,
    hubLabel: null,
    samenvatting:
      'Een geïntegreerd systeem combineert meerdere filterstadia én een intelligente kraan in één product. Het meest volledige voorbeeld is een 4-in-1 kraan met ingebouwde omgekeerde osmose: sedimentfilter, koolstoffilter, RO-membraan en nafilter zijn al op elkaar afgestemd. Bovendien levert de kraan ook kokend water en — bij 4-in-1 of 5-in-1 modellen — bruisend water.',
    watVerwijdert: [
      'Alles wat RO verwijdert (kalk, nitraat, PFAS, lood, chloor, microplastics)',
      'Bacteriën en grote virussen',
      'Sediment en deeltjes via het voorfilter',
      'Organische stoffen en chloorbijproducten via koolstof',
    ],
    watNiet: [
      'Opgeloste gassen (CO₂ — maar dit is geen probleem bij normaal leidingwater)',
    ],
    vormen:
      '4-in-1 of 5-in-1 kraan met alles-in-één installatie onder het aanrecht. Meest complete optie voor het Nederlandse huishouden.',
    kosten:
      'Aanschaf € 699–899 (4-in-1 kraan met osmose); jaarlijks € 90–120 (filter + CO₂). Over vijf jaar de goedkoopste totaaloplossing.',
    wanneer:
      'Wanneer je één systeem wilt dat alle waterproblemen oplost én ook kokend en bruisend water levert. De aanbevolen oplossing voor gezinnen die willen upgraden van losse waterkoker, SodaStream en waterfilter.',
  },
];

const probleemGids = [
  {
    probleem: 'Chloor smaak / geur in leidingwater',
    oplossing: 'Koolstoffilter',
    alternatief: 'Omgekeerde osmose',
    href: null,
  },
  {
    probleem: 'Hard water / kalkaanslag',
    oplossing: 'Ionenwisselaar of omgekeerde osmose',
    alternatief: 'Magneetontharder (minder effectief)',
    href: '/waterhardheid',
  },
  {
    probleem: 'Nitraat (landbouwgebieden, ouder leidingnet)',
    oplossing: 'Omgekeerde osmose',
    alternatief: 'Ionenwisselaar (specifiek voor nitraat)',
    href: null,
  },
  {
    probleem: 'PFAS (pers- en blusstoffen)',
    oplossing: 'Omgekeerde osmose',
    alternatief: 'Geactiveerd koolstof (beperkt effectief)',
    href: null,
  },
  {
    probleem: 'Lood (oud leidingwerk, vóór 1960)',
    oplossing: 'Omgekeerde osmose',
    alternatief: 'Koolstofblokfilter (gedeeltelijk)',
    href: null,
  },
  {
    probleem: 'Bacteriologische veiligheid',
    oplossing: 'UV-filter of keramisch filter',
    alternatief: 'Omgekeerde osmose',
    href: null,
  },
  {
    probleem: 'Microplastics',
    oplossing: 'Omgekeerde osmose',
    alternatief: 'Keramisch filter (0,1 micron)',
    href: null,
  },
  {
    probleem: 'Troebel of roestig water',
    oplossing: 'Sedimentfilter (als voorfilter)',
    alternatief: 'Keramisch filter',
    href: null,
  },
  {
    probleem: 'Alles tegelijk (gezinsoplossing)',
    oplossing: 'Geïntegreerde 4-in-1 kraan met RO',
    alternatief: 'Modulair RO-systeem onder aanrecht',
    href: '/omgekeerde-osmose/kopen',
  },
];

export default function WaterfilterSoortenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          { name: 'Soorten', url: 'https://waterfilterplatform.nl/waterfilter/soorten' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterfilter Soorten: Welk Type Past bij Jou?',
          description:
            'Overzicht van alle waterfiltersoorten, wat elk type verwijdert, een vergelijkingstabel en een beslishulp voor het juiste waterfilter.',
          datePublished: '2026-05-13',
          dateModified: '2026-05-13',
          url: 'https://waterfilterplatform.nl/waterfilter/soorten',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:text-[#005F8A]">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>Soorten</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter Soorten: Welk Type Past bij Jou?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Niet elk waterfilter doet hetzelfde. Een koolstoffilter verbetert de smaak, maar verwijdert geen
            kalk. Omgekeerde osmose filtert vrijwel alles, maar is een groter systeem. Een UV-filter doodt
            bacteriën, maar verwijdert geen chemische stoffen. In deze hubpagina leggen we de zeven belangrijkste
            waterfiltersoorten uit — wat ze verwijderen, wat ze kosten, en wanneer welk type de juiste keuze is.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Bekijk osmose waterfilters →
            </Link>
            <Link
              href="/waterfilter/kopen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Waterfilter kopen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Overzicht quick nav */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Snel naar het juiste filtertype</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Hieronder vind je de zeven waterfiltersoorten die we bespreken. Klik door naar de sectie die voor
            jou het meest relevant is, of lees door voor de volledige vergelijking.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {filterTypes.map(f => (
              <a
                key={f.id}
                href={`#${f.id}`}
                className="flex items-start gap-3 bg-gray-50 hover:bg-[#E0F2FE]/60 rounded-xl p-3 transition-colors"
              >
                <span className="text-[#005F8A] font-bold mt-0.5 shrink-0">→</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{f.naam}</p>
                  <p className="text-xs text-gray-500">{f.geschiktVoor}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Per filtertype */}
        {filterTypes.map(f => (
          <section key={f.id} id={f.id}>
            <div className="flex items-start gap-2 mb-3">
              <div className="w-1 bg-[#005F8A] rounded-full self-stretch shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-[#003F5C]">{f.naam}</h2>
                <p className="text-sm text-[#005F8A] font-medium mt-0.5">{f.geschiktVoor}</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">{f.samenvatting}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                <h3 className="font-semibold text-green-800 mb-2 text-sm">Wat het verwijdert</h3>
                <ul className="space-y-1">
                  {f.watVerwijdert.map(v => (
                    <li key={v} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-bold shrink-0">✓</span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-700 mb-2 text-sm">Wat het niet verwijdert</h3>
                <ul className="space-y-1">
                  {f.watNiet.map(v => (
                    <li key={v} className="flex gap-2 text-sm text-gray-600">
                      <span className="text-gray-400 shrink-0">✗</span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="font-medium text-gray-500 w-24 shrink-0">Vormen:</span>
                <span className="leading-relaxed">{f.vormen}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium text-gray-500 w-24 shrink-0">Kosten:</span>
                <span className="leading-relaxed">{f.kosten}</span>
              </div>
              <div className="bg-[#E0F2FE]/50 border-l-4 border-[#005F8A] rounded-r-xl p-3">
                <span className="font-semibold text-[#003F5C]">Wanneer kiezen: </span>
                <span className="leading-relaxed">{f.wanneer}</span>
              </div>
              {f.hubUrl && f.hubLabel && (
                <div className="pt-1">
                  <Link
                    href={f.hubUrl}
                    className="inline-flex items-center gap-1.5 text-[#005F8A] font-medium hover:underline text-sm"
                  >
                    {f.hubLabel}
                  </Link>
                </div>
              )}
            </div>
          </section>
        ))}

        {/* Vergelijkingstabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-2">Vergelijkingstabel: wat verwijdert elk waterfilter?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            De tabel hieronder geeft een overzicht van de zeven filtertypen en zeven veelvoorkomende
            waterproblemen. Zo zie je in één oogopslag welk filter de stoffen verwijdert die voor jou relevant zijn.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[600px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Filtertype</th>
                  <th className="py-3 px-2 text-center font-semibold text-[#003F5C]">Chloor</th>
                  <th className="py-3 px-2 text-center font-semibold text-[#003F5C]">Kalk</th>
                  <th className="py-3 px-2 text-center font-semibold text-[#003F5C]">Nitraat</th>
                  <th className="py-3 px-2 text-center font-semibold text-[#003F5C]">Bacteriën</th>
                  <th className="py-3 px-2 text-center font-semibold text-[#003F5C]">PFAS</th>
                  <th className="py-3 px-2 text-center font-semibold text-[#003F5C]">Lood</th>
                  <th className="py-3 px-2 text-center font-semibold text-[#003F5C]">Smaak</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkMatrix.map((r, i) => (
                  <tr
                    key={r.type}
                    className={`border-b border-gray-100 ${i === 2 || i === 6 ? 'bg-[#E0F2FE]/30' : ''}`}
                  >
                    <td className="py-2.5 px-3 font-medium text-gray-800">
                      {r.type}
                      {(i === 2 || i === 6) && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">
                          Meest compleet
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 px-2 text-center"><EffectBadge effect={r.chloor} /></td>
                    <td className="py-2.5 px-2 text-center"><EffectBadge effect={r.kalk} /></td>
                    <td className="py-2.5 px-2 text-center"><EffectBadge effect={r.nitraat} /></td>
                    <td className="py-2.5 px-2 text-center"><EffectBadge effect={r.bacterien} /></td>
                    <td className="py-2.5 px-2 text-center"><EffectBadge effect={r.pfas} /></td>
                    <td className="py-2.5 px-2 text-center"><EffectBadge effect={r.lood} /></td>
                    <td className="py-2.5 px-2 text-center"><EffectBadge effect={r.smaak} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-700 font-bold">✓</span>
              Verwijdert effectief
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-100 text-amber-700 font-bold">½</span>
              Gedeeltelijk of conditie-afhankelijk
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 text-gray-400">✗</span>
              Verwijdert niet
            </span>
          </div>
        </section>

        {/* Beslishulp */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-2">Welk waterfilter voor welk probleem?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Weet je wat je waterprobleem is, maar niet welk filter erbij past? De tabel hieronder koppelt
            veelvoorkomende waterklachten direct aan de aanbevolen filteroplossing.
          </p>
          <div className="space-y-2">
            {probleemGids.map(g => (
              <div key={g.probleem} className="border border-gray-100 rounded-xl p-4">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                  <p className="font-semibold text-gray-800">{g.probleem}</p>
                  {g.href && (
                    <Link href={g.href} className="text-xs text-[#005F8A] underline hover:no-underline">
                      Meer info →
                    </Link>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm">
                  <div className="flex gap-2">
                    <span className="text-green-600 font-bold shrink-0">✓</span>
                    <span><strong>Aanbevolen:</strong> {g.oplossing}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-amber-500 font-bold shrink-0">→</span>
                    <span className="text-gray-500"><strong>Alternatief:</strong> {g.alternatief}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE]/50 border-l-4 border-[#005F8A] rounded-r-xl p-4 mt-5">
            <p className="text-sm text-gray-700">
              <strong className="text-[#003F5C]">Geen duidelijk waterprobleem maar toch wil je beter water?</strong>{' '}
              Dan is een geïntegreerde{' '}
              <Link href="/4-in-1-kraan" className="text-[#005F8A] underline hover:no-underline">4-in-1 kraan</Link>{' '}
              met omgekeerde osmose de aanbevolen all-in-one oplossing. Je hebt dan automatisch het breedste
              filterpakket — en als bonus ook kokend en bruisend water uit één kraan.
            </p>
          </div>
        </section>

        {/* Combinaties */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waterfilters combineren: zo werkt een meerstapssysteem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Geen enkel single-stage filter verwijdert alles. De meest complete waterzuivering wordt bereikt
            door meerdere filterstadia achter elkaar te schakelen. In een goed ontworpen meertraps systeem
            versterken de stadia elkaar:
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5">
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center text-sm">
              {[
                { nr: '1', stap: 'Sedimentfilter', sub: '5–25 micron\nDeeltjes, roest' },
                { nr: '2', stap: 'Koolstoffilter', sub: 'Chloor\nOrganica, geur' },
                { nr: '3', stap: 'RO-membraan', sub: '0,0001 micron\nKalk, nitraat, PFAS' },
                { nr: '4', stap: 'Nafilter koolstof', sub: 'Smaak\nResidu-verwijdering' },
              ].map((s, i) => (
                <div key={s.nr} className="flex sm:flex-col items-center gap-2">
                  <div className="flex items-center gap-2 sm:flex-col">
                    <div className="w-10 h-10 bg-[#005F8A] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {s.nr}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{s.stap}</p>
                      <p className="text-xs text-gray-500 whitespace-pre-line">{s.sub}</p>
                    </div>
                  </div>
                  {i < 3 && (
                    <span className="text-[#005F8A] font-bold text-lg sm:hidden">→</span>
                  )}
                  {i < 3 && (
                    <span className="text-[#005F8A] font-bold text-lg hidden sm:block">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Dit vierstaps schema — sediment, koolstof, RO-membraan, nafilter — is precies hoe een
            professioneel omgekeerde osmose systeem is opgebouwd. Een geïntegreerde{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] underline hover:no-underline">4-in-1 kraan</Link>{' '}
            combineert dit filterpakket met een kokend water boiler en een CO₂-unit voor bruisend water —
            alles in één installatie onder het aanrecht.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Wil je meer weten over hoe het osmoseproces precies werkt? Lees onze{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              uitgebreide pagina over omgekeerde osmose
            </Link>
            .
          </p>
        </section>

        {/* Kosten overzicht per type */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kosten per waterfiltertype op een rij</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            De aanschafprijs is slechts een deel van de totale kosten. Jaarlijkse onderhoudskosten
            (filterpatronen, zout, UV-lampen) bepalen mede welk type het meest economisch is op de lange termijn.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Filtertype</th>
                  <th className="py-3 px-3 text-right font-semibold text-[#003F5C]">Aanschaf</th>
                  <th className="py-3 px-3 text-right font-semibold text-[#003F5C]">Per jaar</th>
                  <th className="py-3 px-3 text-right font-semibold text-[#003F5C]">5 jaar totaal</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Koolstoffilterkan (bv. Brita)', aanschaf: '€ 25–60', jaar: '€ 30–50', vijfJaar: '€ 175–310' },
                  { type: 'Koolstoffilter (ingebouwd)', aanschaf: '€ 150–400', jaar: '€ 40–80', vijfJaar: '€ 350–800' },
                  { type: 'Keramisch filter', aanschaf: '€ 30–200', jaar: '€ 20–50', vijfJaar: '€ 130–450' },
                  { type: 'Sedimentfilter', aanschaf: '€ 20–60', jaar: '€ 20–50', vijfJaar: '€ 120–310' },
                  { type: 'UV-filter', aanschaf: '€ 80–300', jaar: '€ 30–60', vijfJaar: '€ 230–600' },
                  { type: 'Ionenwisselaar / waterontharder', aanschaf: '€ 400–1.500', jaar: '€ 30–80', vijfJaar: '€ 550–1.900' },
                  { type: 'Omgekeerde osmose (los systeem)', aanschaf: '€ 200–500', jaar: '€ 60–110', vijfJaar: '€ 500–1.050' },
                  { type: '4-in-1 kraan met osmose (RO + kokend + bruisend)', aanschaf: '€ 799', jaar: '€ 120', vijfJaar: '€ 1.399', highlight: true },
                ].map(r => (
                  <tr key={r.type} className={`border-b border-gray-100 ${'highlight' in r && r.highlight ? 'bg-[#E0F2FE]/40 font-medium' : ''}`}>
                    <td className="py-2.5 px-3 text-gray-800">
                      {r.type}
                      {'highlight' in r && r.highlight && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">
                          Aanbevolen
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-right text-gray-700">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-right text-gray-700">{r.jaar}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A]">{r.vijfJaar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Indicatieve bedragen, 4-persoonshuishouden, mei 2026. Kosten variëren per waterhardheid en gebruik.
          </p>
        </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/filtertechnieken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Filtertechnieken</h3>
            <p className="text-sm text-gray-600">Overzicht van alle filtertechnieken: van sedimentfiltratie tot omgekeerde osmose en UV-sterilisatie.</p>
          </Link>
          <Link href="/vergelijken/waterfilter-vs-waterontharder" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter vs waterontharder</h3>
            <p className="text-sm text-gray-600">Wat is het verschil tussen een waterfilter en een waterontharder, en welke kiest u voor uw situatie?</p>
          </Link>
          <Link href="/keuzehulp/budget" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp op budget</h3>
            <p className="text-sm text-gray-600">Welk waterfilter past bij uw budget? Van goedkope filterkan tot complete osmose-installatie.</p>
          </Link>
          <Link href="/waterfilter/kopen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter kopen</h3>
            <p className="text-sm text-gray-600">Praktische koopgids voor waterfilters: waar op te letten, welke merken en waar te kopen.</p>
          </Link>
        </div>
      </section>

        {/* CTA Banner */}
        <CTABanner context="osmose" />

        {/* Verdere links */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer lezen over waterfilters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterfilter', label: 'Waterfilter: algemene gids' },
              { href: '/waterfilter/kopen', label: 'Waterfilter kopen: vergelijking' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose uitgelegd' },
              { href: '/kennisbank/waterfilter-soorten', label: 'Kennisbank: waterfilter soorten' },
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over waterfiltersoorten</h2>
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
