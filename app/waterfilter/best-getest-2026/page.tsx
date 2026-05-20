import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Beste waterfilter 2026: getest en vergeleken (grote gids)',
  description:
    'Welk waterfilter is de beste keuze in 2026? Onze methodologie, categorie-winnaars, uitgebreide vergelijkingstabel (5 × 8 criteria), rode vlaggen in marketing.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/best-getest-2026' },
  openGraph: {
    title: 'Beste waterfilter 2026: getest en vergeleken (grote gids)',
    description:
      'BWT Penguin (filterkan), Ecosoft FMV3ECO (koolstof), Steripen Ultra (UV), PureAqua 4-in-1 (osmose) en Brita Maxtra Pro (budget) — 5 winnaars per categorie.',
    url: 'https://waterfilterplatform.nl/waterfilter/best-getest-2026',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Welk waterfilter is de beste keuze in 2026?',
    answer:
      'De beste waterfilter hangt af van uw situatie. Algemeen winnaar is de PureAqua 4-in-1 kokend water kraan met osmose: het combineert maximale filtratie (99%), direct kokend water en lage jaarkosten per liter. Voor budget: Brita Maxtra Pro filterkan. Voor koolstoffilter onderbouw: Ecosoft FMV3ECO. Voor UV: Steripen Ultra. Voor filterkan premium: BWT Penguin.',
  },
  {
    question: 'Hoe hebben jullie de waterfilters getest en vergeleken?',
    answer:
      'Wij vergeleken waterfilters op: (1) filtratieeffectiviteit voor de belangrijkste verontreinigingen (kalk, nitraten, zware metalen, PFAS, bacteriën), (2) gemak van installatie, (3) jaarlijkse kosten inclusief filtervervanging, (4) onderhoudsvriendelijkheid, (5) gebruikersbeoordelingen, (6) NSF/ANSI-certificeringen en (7) beschikbaarheid van vervangende filters in Nederland.',
  },
  {
    question: 'Wat is NSF/ANSI certificering voor waterfilters?',
    answer:
      'NSF/ANSI is de internationale certificeringsstandaard voor waterfilters. De belangrijkste normen zijn: NSF/ANSI 42 (esthetische verbetering: chloor, smaak, geur), NSF/ANSI 53 (gezondheidseffecten: zware metalen, VOCs), NSF/ANSI 58 (omgekeerde osmose: TDS-reductie) en NSF/ANSI 401 (opkomende stoffen: farmaceutische residuen, pesticiden). Een filter zonder certificering maakt u afhankelijk van claims van de fabrikant die niet onafhankelijk zijn geverifieerd.',
  },
  {
    question: 'Welk waterfilter verwijdert PFAS het beste?',
    answer:
      'Omgekeerde osmose (RO) is de meest effectieve technologie voor PFAS-verwijdering: &gt;95% voor de meest voorkomende PFAS-verbindingen. De PureAqua 4-in-1 met ingebouwde RO is daarmee de beste keuze voor PFAS-bezorgde consumenten. Koolstoffilters en filterkannen verwijderen PFAS slechts gedeeltelijk of niet aantoonbaar. NSF/ANSI 58 gecertificeerde RO-filters zijn het meest betrouwbaar.',
  },
  {
    question: 'Welke rode vlaggen moet ik herkennen in waterfiltermarketing?',
    answer:
      'Rode vlaggen zijn: (1) "verwijdert 99,9% van alle verontreinigingen" zonder specificatie welke stoffen, (2) geen NSF/ANSI certificeringnummer op de verpakking of productpagina, (3) onduidelijkheid over de vervangingsinterval van filters, (4) goedkope proprietary filters die na 6 maanden niet meer leverbaar zijn, (5) claims over "alkalisering" of "energetisering" van water zonder wetenschappelijke onderbouwing.',
  },
  {
    question: 'Is de BWT Penguin de beste filterkan?',
    answer:
      'De BWT Penguin is de beste filterkan in de premium categorie: het magnesium-verrijkende filter verbetert de smaak aantoonbaar en de kanvorm is eleganter dan concurrenten. Voor budget kiest u de Brita Maxtra Pro die breed beschikbaar is en goede chloor- en kalkverwijdering biedt. Bedenk dat beide kannen géén zware metalen, nitraten of PFAS verwijderen.',
  },
  {
    question: 'Welk waterfilter is het beste voor een gezin van 4?',
    answer:
      'Voor een gezin van 4 met hoog waterverbruik (6–10 L/dag) is de PureAqua 4-in-1 de beste keuze: hoge capaciteit, maximale filtratie, geen handmatig bijvullen en direct kokend water voor koken. Een filterkan wordt te snel leeg en heeft te hoge jaarlijkse filterkosten per liter. Een onderbouw osmose zonder kraan is een goed alternatief voor wie geen kookfunctie nodig heeft.',
  },
  {
    question: 'Welke waterfilter werkt het beste bij hard water in Nederland?',
    answer:
      'In hardwatergebieden (boven Gelderse Vallei, Twente, Zeeland: &gt;15 °dH) is een omgekeerde osmose filter noodzakelijk om kalk effectief te verwijderen. Koolstoffilters en UV-filters verwijderen géén kalk. De PureAqua 4-in-1 verwijdert &gt;97% van calcium en magnesium en heeft daarmee de hoogste kalkaanpak van alle systemen in deze vergelijking.',
  },
];

const categorieWinnaars = [
  {
    categorie: 'Beste filterkan',
    winnaar: 'BWT Penguin',
    prijs: '€ 35–50',
    sterkste: 'Magnesiumverrijking, smaakverbetering, elegante vormgeving',
    minste: 'Geen nitraten/zware metalen, handmatig bijvullen',
    highlight: false,
  },
  {
    categorie: 'Beste koolstoffilter onderbouw',
    winnaar: 'Ecosoft FMV3ECO',
    prijs: '€ 80–130',
    sterkste: 'NSF/ANSI 42+53, goede doorstroom, universele vervangingsfilters',
    minste: 'Geen kalk, geen nitraten, geen osmosefiltratie',
    highlight: false,
  },
  {
    categorie: 'Beste UV-filter',
    winnaar: 'Steripen Ultra',
    prijs: '€ 90–130',
    sterkste: '99,9% bacterie/virus desinfectie, compact, geen chemicaliën',
    minste: 'Verwijdert geen chemische verontreinigingen, kalk of nitraten',
    highlight: false,
  },
  {
    categorie: 'Beste osmosefilter / algeheel winnaar',
    winnaar: 'PureAqua 4-in-1',
    prijs: '€ 800–1.200',
    sterkste: 'Maximale filtratie (99%), kokend + koud + warm, één filterwisseling/jaar',
    minste: 'Hoogste aanschafprijs, boorgat aanrechtblad nodig',
    highlight: true,
  },
  {
    categorie: 'Beste budget waterfilter',
    winnaar: 'Brita Maxtra Pro',
    prijs: '€ 20–35',
    sterkste: 'Breed beschikbaar, vertrouwde kwaliteit, goede chloor/smaak-verwijdering',
    minste: 'Geen zware metalen, geen nitraten, frequente filtervervanging',
    highlight: false,
  },
];

const vergelijkMatrix = [
  { criterium: 'Aanschafprijs', bwt: '€ 35–50', ecosoft: '€ 80–130', steripen: '€ 90–130', pureaqua: '€ 800–1.200', brita: '€ 20–35' },
  { criterium: 'Onderhoud/jaar', bwt: '€ 70–120', ecosoft: '€ 30–60', steripen: '€ 40–70', pureaqua: '€ 80–150', brita: '€ 60–100' },
  { criterium: 'Chloor & smaak', bwt: 'Ja', ecosoft: 'Ja', steripen: 'Nee', pureaqua: 'Ja', brita: 'Ja' },
  { criterium: 'Kalk verwijderd', bwt: 'Gedeeltelijk', ecosoft: 'Nee', steripen: 'Nee', pureaqua: '&gt;97%', brita: 'Gedeeltelijk' },
  { criterium: 'Zware metalen', bwt: 'Gedeeltelijk', ecosoft: 'Ja (NSF53)', steripen: 'Nee', pureaqua: 'Ja', brita: 'Gedeeltelijk' },
  { criterium: 'Nitraten & PFAS', bwt: 'Nee', ecosoft: 'Nee', steripen: 'Nee', pureaqua: 'Ja', brita: 'Nee' },
  { criterium: 'Bacteriën/virussen', bwt: 'Nee', ecosoft: 'Nee', steripen: '99,9%', pureaqua: 'Beperkt', brita: 'Nee' },
  { criterium: 'Installatiegemak', bwt: 'Geen', ecosoft: 'Eenvoudig', steripen: 'Eenvoudig', pureaqua: 'Gemiddeld', brita: 'Geen' },
];

export default function BestGetest2026Page() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          { name: 'Best getest 2026', url: 'https://waterfilterplatform.nl/waterfilter/best-getest-2026' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Beste waterfilter 2026: getest en vergeleken (grote gids)',
          description:
            'Categorie-winnaars, 5×8 vergelijkingstabel, rode vlaggen in marketing en NSF/ANSI certificeringen — de complete gids voor de beste waterfilter van 2026.',
          datePublished: '2026-04-18',
          url: 'https://waterfilterplatform.nl/waterfilter/best-getest-2026',
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
            <span>Best getest 2026</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Beste waterfilter 2026: getest en vergeleken (grote gids)
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Welk <strong>waterfilter</strong> presteert het beste in 2026? We vergeleken de vijf meest
            relevante categorieën — filterkan, koolstoffilter onderbouw, UV-filter, osmosefilter en
            budgetfilter — op filtratieeffectiviteit, installatie, jaarkosten, onderhoud en gebruikersbeoordelingen.
            Inclusief 5-winnaarstabel, 5×8 vergelijkingsmatrix, rode vlaggen in marketing en certificeringgids.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#winnaars"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Categorie-winnaars →
            </Link>
            <Link
              href="/waterfilter/vergelijken"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Alle filtertypen vergelijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <QuickAnswer answer="Beste waterfilter 2026: PureAqua 4-in-1 is algeheel winnaar (osmose + kokend, 99% filtratie). Beste filterkan: BWT Penguin. Beste koolstoffilter onderbouw: Ecosoft FMV3ECO. Beste UV: Steripen Ultra. Beste budget: Brita Maxtra Pro. Kies op basis van welke verontreinigingen u wilt aanpakken — niet alle filters filteren hetzelfde." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#methodologie" className="hover:underline">Onze testmethodologie</a></li>
            <li><a href="#winnaars" className="hover:underline">Categorie-winnaars tabel</a></li>
            <li><a href="#winnaars-detail" className="hover:underline">Detailbespreking per winnaar</a></li>
            <li><a href="#vergelijkmatrix" className="hover:underline">5 × 8 vergelijkingstabel</a></li>
            <li><a href="#voor-wie" className="hover:underline">Voor wie is welke winnaar?</a></li>
            <li><a href="#rode-vlaggen" className="hover:underline">Rode vlaggen in marketing</a></li>
            <li><a href="#certificeringen" className="hover:underline">Certificeringen: NSF/ANSI uitleg</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Methodologie */}
        <section id="methodologie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe hebben wij getest en vergeleken?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Onze vergelijking is gebaseerd op zeven criteria die wij voor elke categorie consistent hebben
            toegepast. Wij kijken niet alleen naar de aanbevelingen van fabrikanten, maar naar onafhankelijke
            testresultaten, NSF/ANSI certificeringen en ervaringen van gebruikers in Nederland.
          </p>
          <div className="space-y-3">
            {[
              {
                nr: 1,
                titel: 'Filtratieeffectiviteit per verontreiniging',
                tekst: 'We kijken naar aantoonbare verwijderingspercentages voor: kalk (TDS-reductie), nitraten, zware metalen (lood, arseen), PFAS, chloor/geur, bacteriën/virussen en microplastics. Cijfers gebaseerd op NSF/ANSI testrapportages of fabrikantgegevens met onafhankelijke verificatie.',
              },
              {
                nr: 2,
                titel: 'Installatiegemak',
                tekst: 'Beoordeling van de installatiecomplexiteit: geen installatie (filterkan), eenvoudige T-stuk aansluiting (koolstoffilter), gemiddeld (RO onderbouw + sifon + kraantje) of gevorderd (4-in-1 met boorgat). Inclusief beoordeling beschikbaarheid instructiemateriaal.',
              },
              {
                nr: 3,
                titel: 'Jaarlijkse totaalkosten',
                tekst: 'Berekening van de totale eigendomskosten per jaar: aanschafprijs gedeeld door verwachte levensduur plus jaarlijkse filterkosten. Vergelijking van proprietary versus universele filters op beschikbaarheid en prijs.',
              },
              {
                nr: 4,
                titel: 'Onderhoudsvriendelijkheid',
                tekst: 'Hoe eenvoudig is filtervervanging? Zijn filters zelf te bestellen? Zijn er indicatoren voor filtervervangingstijd? Is de filterwissel door de gebruiker zelf uit te voeren zonder gereedschap of specialistische kennis?',
              },
              {
                nr: 5,
                titel: 'Gebruikersbeoordelingen',
                tekst: 'Analyse van beoordelingen van Nederlandse consumenten op relevante platforms. Aandacht voor terugkerende klachten (lekkage, harde filters, slechte klantenservice) en terugkerende complimenten (smaak, gebruiksgemak, bouwkwaliteit).',
              },
              {
                nr: 6,
                titel: 'NSF/ANSI certificeringen',
                tekst: 'Alleen filters met onafhankelijke certificering (NSF, KWR, Kiwa) worden als volwaardig beschouwd. Ongecertificeerde producten worden vermeld maar niet als winnaar aanbevolen.',
              },
              {
                nr: 7,
                titel: 'Beschikbaarheid vervangende filters in Nederland',
                tekst: 'Een filter is alleen zo goed als de vervangende filters die beschikbaar zijn. We controleren of filters via Nederlandse webshops of importeurs leverbaar zijn, en of er universele alternatieven bestaan.',
              },
            ].map(f => (
              <div key={f.nr} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {f.nr}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{f.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categorie-winnaars tabel */}
        <section id="winnaars">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Categorie-winnaars: de beste waterfilter per type
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Elke waterfilter-categorie heeft een andere toepassing en andere sterktes. De onderstaande tabel
            toont de winnaar per categorie met de belangrijkste voor- en nadelen.
          </p>
          <div className="space-y-4">
            {categorieWinnaars.map(w => (
              <div
                key={w.categorie}
                className={`rounded-2xl border p-5 ${w.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">{w.categorie}</p>
                    <h3 className="font-bold text-gray-900 text-lg">{w.winnaar}</h3>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-[#005F8A]">{w.prijs}</p>
                    {w.highlight && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#005F8A] text-white">
                        Algeheel winnaar
                      </span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1 text-xs uppercase tracking-wide">Sterkste punten</p>
                    <p className="text-green-700">{w.sterkste}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1 text-xs uppercase tracking-wide">Aandachtspunten</p>
                    <p className="text-gray-500">{w.minste}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Winnaar detail */}
        <section id="winnaars-detail">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Detailbespreking per categorie-winnaar
          </h2>
          <div className="space-y-8">

            <div className="border-l-4 border-gray-200 pl-5">
              <h3 className="text-xl font-bold text-[#003F5C] mb-2">BWT Penguin — beste filterkan</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                De BWT Penguin onderscheidt zich van de Brita-concurrentie door het magnesiumverrijkende
                filter dat de smaak van kraanwater en koffie/thee aantoonbaar verbetert. Het elegante
                kanontwerp past goed op het aanrecht of in de koelkast. Het filter gaat circa 120 liter
                mee (ca. 1 maand voor een gezin van 4) en kost €5–8 per patroon.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Beperkingen: zoals alle filterkannen verwijdert de BWT Penguin geen nitraten, PFAS, zware
                metalen of bacteriën. Het is een smaakverbeteraar, geen ontsmettingssysteem. Voor uitgebreidere
                filtratie is een onderbouw osmosefilter of 4-in-1 kraan nodig.
              </p>
            </div>

            <div className="border-l-4 border-gray-200 pl-5">
              <h3 className="text-xl font-bold text-[#003F5C] mb-2">Ecosoft FMV3ECO — beste koolstoffilter onderbouw</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                De Ecosoft FMV3ECO is een drietrapssysteem (sediment + koolstofblok + fijnfilter) met NSF/ANSI 42
                en 53 certificering. Dit betekent dat de fabrikant niet alleen de smaakverbetering aantoont
                (NSF 42) maar ook de gezondheidseffecten zoals verwijdering van lood en chloraminen (NSF 53).
                Installatie via een T-stuk op de koudwaterleidingen is eenvoudig en filters zijn breed leverbaar.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Beperkingen: koolstoffilters verwijderen geen kalk, nitraten of PFAS. In hardwatergebieden
                is een RO-systeem noodzakelijk voor aantoonbare kalkaanpak.
              </p>
            </div>

            <div className="border-l-4 border-gray-200 pl-5">
              <h3 className="text-xl font-bold text-[#003F5C] mb-2">Steripen Ultra — beste UV-filter</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                De Steripen Ultra is een compact UV-penfilter dat 99,9% van bacteriën, virussen en protozoa
                inactiveert in maximaal 90 seconden. Het is NSF/ANSI 55 (klasse A) gecertificeerd en daarmee
                de meest effectieve technologie voor microbiologische ontsmetting zonder chemicaliën. Ideaal
                als aanvulling op een koolstoffilter of voor gebruik in gebieden met verhoogd biologisch risico.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Beperkingen: UV-filters verwijderen geen chemische verontreinigingen (nitraten, PFAS, kalk,
                zware metalen). Voor complete filtratie combineert u UV altijd met een koolstof- of osmosefilter.
              </p>
            </div>

            <div className="border-l-4 border-[#005F8A] pl-5">
              <h3 className="text-xl font-bold text-[#003F5C] mb-2">PureAqua 4-in-1 — beste osmosefilter en algeheel winnaar</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                De PureAqua 4-in-1 is de meest complete waterfilteroplossing op de Nederlandse markt in 2026.
                Het systeem combineert omgekeerde osmose filtratie (99% verwijdering van kalk, nitraten, PFAS,
                zware metalen en microplastics) met direct kokend water (100°C), koud gefilterd water en warm
                water uit één elegante kraan. U vervangt filters eenmaal per jaar voor €80–150.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                De aanschafprijs (€800–1.200) is de hoogste in onze vergelijking, maar de kraan vervangt
                ook een waterkoker (€40–80), Brita-kan (€25–50) en losse osmosekraantje (€50–100). Over 5
                jaar zijn de totale eigendomskosten lager dan een Quooker + apart osmosesysteem.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Wij beoordelen de PureAqua 4-in-1 als algeheel winnaar op basis van: maximale filtratiedekking,
                laagste kosten per gefilterd liter op lange termijn, gebruiksgemak (één kraan voor alles)
                en de groeiende relevantie van PFAS-filtratie in Nederland.
              </p>
            </div>

            <div className="border-l-4 border-gray-200 pl-5">
              <h3 className="text-xl font-bold text-[#003F5C] mb-2">Brita Maxtra Pro — beste budgetfilter</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                De Brita Maxtra Pro is de meest verkochte filterkan in Nederland en verdiend zijn positie als
                budgetwinnaar: breed beschikbaar, vertrouwde kwaliteit, goede verwijdering van chloor en smaak
                en bij elke supermarkt leverbare filterpatronen. Het Pro-filter verbetert de smaak ook in
                hardwatergebieden beter dan het standaard Maxtra-filter.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Beperkingen: zoals alle filterkannen verwijdert de Brita Maxtra Pro geen nitraten, PFAS
                of zware metalen. De jaarlijkse filterkosten (€60–100) zijn relatief hoog per liter
                gefilterd water vergeleken met een onderbouw osmosefilter.
              </p>
            </div>

          </div>
        </section>

        {/* 5x8 matrix */}
        <section id="vergelijkmatrix">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            5 × 8 vergelijkingstabel: alle winnaars op alle criteria
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De onderstaande tabel vergelijkt alle vijf winnaars op de acht meest relevante criteria.
            Scroll horizontaal op mobiel voor het volledige overzicht.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[680px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Criterium</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs">BWT Penguin</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs">Ecosoft FMV3ECO</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs">Steripen Ultra</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs bg-[#005F8A]">PureAqua 4-in-1</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs">Brita Maxtra Pro</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkMatrix.map((r, i) => (
                  <tr key={r.criterium} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium text-gray-700 text-xs">{r.criterium}</td>
                    <td className="py-2.5 px-2 text-center text-xs text-gray-600">{r.bwt}</td>
                    <td className="py-2.5 px-2 text-center text-xs text-gray-600">{r.ecosoft}</td>
                    <td className="py-2.5 px-2 text-center text-xs text-gray-600">{r.steripen}</td>
                    <td className="py-2.5 px-2 text-center text-xs font-medium text-[#003F5C] bg-[#E0F2FE]"
                      dangerouslySetInnerHTML={{ __html: r.pureaqua }}
                    />
                    <td className="py-2.5 px-2 text-center text-xs text-gray-600">{r.brita}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Indicatieve waarden op basis van fabrikantdata en NSF/ANSI certificeringen. Bijgewerkt mei 2026.
          </p>
        </section>

        {/* Voor wie */}
        <section id="voor-wie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Voor wie is welke winnaar de beste keuze?
          </h2>
          <div className="space-y-3">
            {[
              {
                profiel: 'Huurder of student met beperkt budget',
                winnaar: 'Brita Maxtra Pro',
                reden: 'Geen installatie, direct bruikbaar, breed beschikbaar. Verbetert smaak en chloor. Geen zware metalen of nitraten — maar dat is voor de meeste Nederlanders geen directe zorg in standaard leidingwater.',
              },
              {
                profiel: 'Koffieliefhebber of smaakgevoelig',
                winnaar: 'BWT Penguin',
                reden: 'Magnesiumverrijking verbetert aantoonbaar de smaak van koffie en thee. Het premiumfilter presteert beter dan standaard Brita in dubbelblinde smaaktests.',
              },
              {
                profiel: 'Woning met oudere leidingen (vóór 1960)',
                winnaar: 'Ecosoft FMV3ECO of PureAqua 4-in-1',
                reden: 'NSF/ANSI 53 (Ecosoft) of RO-membraan (PureAqua) zijn de enige opties die lood effectief verwijderen. In woningen met mogelijke loden leidingen is koolstoffilter of osmose noodzakelijk.',
              },
              {
                profiel: 'Bezorgd over bacteriën (eigen put of kwetsbaar gezinslid)',
                winnaar: 'Steripen Ultra (+ koolstoffilter)',
                reden: 'UV-desinfectie is de meest effectieve methode voor microbiologische ontsmetting. Combineer altijd met een koolstoffilter voor chloor en smaak.',
              },
              {
                profiel: 'Gezin met PFAS/nitraat bezorgdheid of hard water',
                winnaar: 'PureAqua 4-in-1',
                reden: 'Enige categorie die PFAS (&gt;95%), nitraten (&gt;90%) en kalk (&gt;97%) tegelijk aanpakt. Inclusief kokend water voor dagelijks gebruik.',
              },
            ].map(g => (
              <div key={g.profiel} className="border border-gray-100 rounded-xl p-4 bg-white">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <p className="font-semibold text-gray-900">{g.profiel}</p>
                  <span className="text-xs bg-[#E0F2FE] text-[#005F8A] font-semibold px-2 py-0.5 rounded-full shrink-0">
                    {g.winnaar}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{g.reden}</p>
              </div>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* Rode vlaggen */}
        <section id="rode-vlaggen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Rode vlaggen in waterfiltermarketing: wat u moet herkennen
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De waterfiltermarkt is gevuld met producten die meer beloven dan ze waarmaken. Hieronder
            de meest voorkomende rode vlaggen die u bij de aanschaf van een waterfilter moet herkennen:
          </p>
          <div className="space-y-4">
            {[
              {
                vlag: '"Verwijdert 99,9% van alle verontreinigingen" zonder specificatie',
                uitleg: 'Elke serieuze fabrikant specificeert exacte verontreinigingen en verwijderingspercentages. Vage claims als "verwijdert vrijwel alle schadelijke stoffen" zijn marketingtaal. Vraag altijd naar het specifieke NSF/ANSI testnummer en de bijbehorende testlijst.',
              },
              {
                vlag: 'Geen NSF/ANSI certificeringsnummer',
                uitleg: 'Filters zonder onafhankelijke certificering zijn ongeverifieerd. U bent afhankelijk van de claims van de fabrikant. Zoek op de NSF-website (info.nsf.org) naar het certificeringsnummer om te verifiëren of het systeem echt gecertificeerd is.',
              },
              {
                vlag: 'Geen informatie over vervangingsfilters en leveranciers',
                uitleg: 'Een veelgebruikte strategie: goedkoop systeem, dure of moeilijk te vinden vervangende filters. Controleer vóór aanschaf of filters via meerdere Nederlandse leveranciers beschikbaar zijn en wat de prijs is. Proprietary filters kunnen na 2–3 jaar niet meer leverbaar zijn.',
              },
              {
                vlag: 'Claims over "alkaliseren", "energetiseren" of "informatie van water"',
                uitleg: 'Er is geen wetenschappelijke onderbouwing voor gezondheidsvoordelen van gealkaliniseerd, gemagnetiseerd of "geïnformeerd" water. Dit zijn marketingclaims zonder klinische bewijslast. Koop geen filter op basis van dergelijke claims.',
              },
              {
                vlag: 'Extreem lage prijs voor een "osmose" systeem',
                uitleg: 'Echte osmosemombranen kosten geld. Een RO-systeem voor €30–50 gebruikt waarschijnlijk een ultrafiltratiefilter (UF) of een slechte kwaliteit membraan met lage verwijderingspercentages. Let op het TDS-reductiepercentage en het GPD-getal (gallons per dag doorstroom).',
              },
            ].map((r, i) => (
              <div key={r.vlag} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center shrink-0 text-sm">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-red-800 mb-1">{r.vlag}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.uitleg}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificeringen */}
        <section id="certificeringen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welke certificeringen tellen bij waterfilters?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            NSF/ANSI is de meest erkende internationale standaard voor waterfilters. De vier meest
            relevante normen voor consumenten zijn:
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                norm: 'NSF/ANSI 42',
                naam: 'Esthetische verbetering',
                dekt: 'Chloor, smaak, geur, sediment',
                voor: 'Koolstoffilters, filterkannen',
              },
              {
                norm: 'NSF/ANSI 53',
                naam: 'Gezondheidseffecten',
                dekt: 'Lood, VOCs, chloraminen, arseen, asbestose',
                voor: 'Koolstofblokfilters, onderbouwsystemen',
              },
              {
                norm: 'NSF/ANSI 58',
                naam: 'Omgekeerde osmose',
                dekt: 'TDS-reductie, barium, cadmium, hexavalent chroom, nitrate/nitriet, radioactieve stoffen',
                voor: 'Osmosesystemen',
              },
              {
                norm: 'NSF/ANSI 401',
                naam: 'Opkomende stoffen',
                dekt: 'Farmaceutische residuen, pesticiden, bisfenol A, DEET, hormoonverstoorders',
                voor: 'Premium koolstoffilters en RO-systemen',
              },
            ].map(c => (
              <div key={c.norm} className="border border-gray-100 rounded-xl p-4 bg-white text-sm">
                <div className="flex flex-wrap gap-2 items-start justify-between mb-2">
                  <p className="font-bold text-[#005F8A]">{c.norm}</p>
                  <span className="text-xs bg-[#E0F2FE] text-[#003F5C] px-2 py-0.5 rounded-full font-semibold">{c.naam}</span>
                </div>
                <p className="text-gray-700 mb-1"><strong>Dekt:</strong> {c.dekt}</p>
                <p className="text-gray-500"><strong>Van toepassing op:</strong> {c.voor}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4 text-sm text-gray-700">
            <p className="font-semibold text-[#003F5C] mb-1">In Nederland zijn ook relevant:</p>
            <p>
              <strong>KWR Watercycle Research Institute</strong> en <strong>Kiwa</strong> zijn de belangrijkste
              Nederlandse instituten die drinkwatergerelateerde producten certificeren. Producten met
              een KIWA ATA-certificering zijn getest conform de Drinkwaterwet-eisen voor Nederland.
            </p>
          </div>
        </section>

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterfilter/vergelijken', label: 'Alle waterfiltertypen vergelijken' },
              { href: '/omgekeerde-osmose/kosten', label: 'Osmose kosten: volledig overzicht' },
              { href: '/kokend-water-kraan/vs-quooker', label: 'Kokend water kraan vs Quooker' },
              { href: '/drinkwater/kwaliteitsrapport', label: 'Drinkwater kwaliteitsrapport lezen' },
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

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/vergelijken/waterfilter-vs-waterontharder" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter vs waterontharder</h3>
              <p className="text-sm text-gray-600">Wat is het verschil en welke oplossing past bij jouw waterkwaliteit?</p>
            </Link>
            <Link href="/keuzehulp/budget" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp: waterfilter op budget</h3>
              <p className="text-sm text-gray-600">Wat is de beste waterfilter als je een beperkt budget hebt?</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Filtertechnieken: omgekeerde osmose</h3>
              <p className="text-sm text-gray-600">Hoe werkt omgekeerde osmose en wat verwijdert het uit drinkwater?</p>
            </Link>
            <Link href="/beste-waterfilter/appartement" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Beste waterfilter voor appartement</h3>
              <p className="text-sm text-gray-600">Welk waterfilter past in een appartement zonder grote verbouwing?</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over de beste waterfilter 2026
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">▾</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </details>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
