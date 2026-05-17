import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Hoe werkt een koolstoffilter? Actief kool uitgelegd (2026)',
  description:
    'Hoe werkt een koolstoffilter? Adsorptie via van der Waals-krachten, GAC vs blokfilter vs inline, wat het verwijdert (chloor, THM, pesticiden) en wat niet.',
  alternates: { canonical: 'https://waterfilterplatform.nl/koolstoffilter/werking' },
  openGraph: {
    title: 'Hoe werkt een koolstoffilter? Actief kool uitgelegd (2026)',
    description:
      'Adsorptiewetenschap, GAC vs blokfilter vs inline, verwijderingspercentages, vervangingsintervallen en vergelijkingstabel vs osmose en UV.',
    url: 'https://waterfilterplatform.nl/koolstoffilter/werking',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe werkt adsorptie bij een koolstoffilter?',
    answer:
      'Adsorptie is het proces waarbij moleculen uit het water zich hechten aan het oppervlak van de geactiveerde kool via van der Waals-krachten — zwakke elektrostatische aantrekkingskrachten tussen moleculen. De geactiveerde kool heeft een extreem poreuze structuur met een intern oppervlak van 500–1500 m² per gram. Chloor, trihalomethanen, pesticiden en geurmoleculen binden zich aan dit enorme oppervlak. Pas als alle bindingsplaatsen bezet zijn (verzadiging), werkt het filter niet meer effectief.',
  },
  {
    question: 'Wat is het verschil tussen GAC en een koolstofblokfilter?',
    answer:
      'GAC (Granular Activated Carbon) bestaat uit losse koolkorrels. Water kan relatief snel en via de weg van de minste weerstand door de korrels stromen — wat "kanalvorming" heet. Dit vermindert de contacttijd en daarmee de filterkwaliteit. Een koolstofblokfilter (CTO) is samengeperste kool met een vaste, uniforme structuur. Water moet door de gehele massa stromen, wat zorgt voor langere contacttijd, betere adsorptie en ook mechanische filtratie van deeltjes tot 0,5–5 micron. Een blokfilter presteert gemiddeld 15–25% beter dan GAC.',
  },
  {
    question: 'Wat verwijdert een koolstoffilter effectief?',
    answer:
      'Een koolstofblokfilter verwijdert effectief: chloor (95–99%), trihalomethanen/THM (90–99%), pesticiden en herbiciden (70–90%), geur- en smaakstoffen (95%), organische verbindingen (60–90%), en deels zware metalen zoals lood en koper (25–40%). De werking is optimaal voor niet-polaire organische verbindingen die een sterke affiniteit hebben voor koolstof.',
  },
  {
    question: 'Wat verwijdert een koolstoffilter NIET?',
    answer:
      'Een koolstoffilter verwijdert nauwelijks: nitraten (<10%) — want dit zijn kleine anorganische ionen met lage affiniteit voor koolstof; bacteriën en virussen (<5%) — koolstof heeft geen antimicrobiologische werking; PFAS — kortketenige PFAS-varianten zoals GenX worden nauwelijks gebonden; zware metalen in hoge concentraties (slechts deels); kalk/hardheid (<5%); en fluoride (<10%). Voor deze stoffen is omgekeerde osmose of een ionenwisselaar nodig.',
  },
  {
    question: 'Hoe lang gaat een koolstoffilter mee voor je hem moet vervangen?',
    answer:
      'Het vervangingsinterval hangt sterk af van het type: een GAC-filter (filterkan) moet elke 4–6 weken worden vervangen bij normaal verbruik (~150 liter). Een koolstofblok als kraanfilter gaat 3–6 maanden mee. Een inline blokfilter onder het aanrecht heeft een levensduur van 6–12 maanden of 2000–4000 liter. In gebieden met hard water of hoog chloorgehalte kan dit korter zijn. Vervang nooit later dan aanbevolen — een verzadigd filter geeft opgeslagen stoffen terug aan het water.',
  },
  {
    question: 'Wat is de rol van van der Waals-krachten bij actieve kool?',
    answer:
      'Van der Waals-krachten zijn zwakke intermoleculaire aantrekkingskrachten die ontstaan door tijdelijke dipolen in moleculen. Bij actieve kool spelen deze krachten een sleutelrol: de niet-polaire oppervlaktestructuur van koolstof trekt niet-polaire organische moleculen aan (zoals chloorverbindingen, THM en pesticidemoleculen). Hoe groter het molecuulgewicht van een stof, hoe sterker de van der Waals-interactie en hoe effectiever de adsorptie. Dit verklaart waarom koolstof goed werkt voor grotere organische moleculen maar slecht voor kleine anorganische ionen.',
  },
  {
    question: 'Wanneer kies ik voor een koolstoffilter in plaats van een UV-filter of osmose?',
    answer:
      'Koolstoffilter: bij smaak- en geurproblemen, chloorverwijdering, reductie van THM en pesticiden. Ideaal als uw leidingwater microbiologisch veilig is (in Nederland altijd het geval). UV-filter: uitsluitend voor desinfectie bij biologische besmetting — UV doodt bacteriën en virussen maar verwijdert geen chemische stoffen. Omgekeerde osmose: voor volledige reiniging van nitraten, PFAS, zware metalen, kalk, bacteriën én organische stoffen. Combinaties zijn ook mogelijk: koolstoffilter als pre-filter voor osmose of UV verlengt de levensduur van membraan en lamp aanzienlijk.',
  },
  {
    question: 'Wat zijn microporiën en hoe bepalen ze de filterkwaliteit?',
    answer:
      'Microporiën zijn kanalen met een diameter kleiner dan 2 nanometer in de geactiveerde kool. Naast microporiën zijn er mesoporiën (2–50 nm) en macroporiën (>50 nm). De microporiën zijn verantwoordelijk voor het grootste deel van het interne oppervlak en de hoogste adsorptiecapaciteit — ze zijn de "opslagplaatsen" voor chloor en organische verbindingen. De mesoporiën fungeren als transportkanalen naar de microporiën. Hoe hoger het aandeel microporiën, hoe beter de filterkwaliteit. Koolstofblokfilters zijn geoptimaliseerd voor een hoge microporiënstructuur.',
  },
];

const verwijderingsTabel = [
  { stof: 'Chloor (vrij)', verwijdering: '95–99%', kleur: 'green', methode: 'Adsorptie (van der Waals)' },
  { stof: 'Trihalomethanen (THM)', verwijdering: '90–99%', kleur: 'green', methode: 'Adsorptie organische moleculen' },
  { stof: 'Pesticiden / herbiciden', verwijdering: '70–90%', kleur: 'green', methode: 'Adsorptie niet-polair' },
  { stof: 'Geur- en smaakstoffen', verwijdering: '95%', kleur: 'green', methode: 'Adsorptie vluchtige organics' },
  { stof: 'Organische verbindingen (VOC)', verwijdering: '60–90%', kleur: 'green', methode: 'Adsorptie' },
  { stof: 'Lood, koper (deels)', verwijdering: '25–40%', kleur: 'amber', methode: 'Beperkte ioneninteractie' },
  { stof: 'Nitraten', verwijdering: '<10%', kleur: 'red', methode: 'Nauwelijks — anorganisch ion' },
  { stof: 'Bacteriën / virussen', verwijdering: '<5%', kleur: 'red', methode: 'Geen antimicrobiologische werking' },
  { stof: 'PFAS (kortketenig)', verwijdering: '<20%', kleur: 'red', methode: 'Slechte affiniteit met koolstof' },
  { stof: 'Kalk (hardheid)', verwijdering: '<5%', kleur: 'red', methode: 'Anorganische ionen — geen adsorptie' },
  { stof: 'Fluoride', verwijdering: '<10%', kleur: 'red', methode: 'Anorganisch — geen koolstofaffiniteit' },
];

const vergelijkingTabel = [
  {
    methode: 'Koolstofblokfilter',
    chloor: '95–99%',
    nitraat: '<10%',
    pfas: '<20%',
    bacterien: '<5%',
    kalk: '<5%',
    jaarkosten: '€40–120',
    installatie: 'Eenvoudig',
  },
  {
    methode: 'GAC granulair',
    chloor: '80–95%',
    nitraat: '<10%',
    pfas: '<10%',
    bacterien: '<5%',
    kalk: '<5%',
    jaarkosten: '€25–80',
    installatie: 'Geen (filterkan)',
  },
  {
    methode: 'Omgekeerde osmose',
    chloor: '95–99%',
    nitraat: '85–95%',
    pfas: '90–98%',
    bacterien: '99%+',
    kalk: '95–99%',
    jaarkosten: '€50–110',
    installatie: 'Gemiddeld',
  },
  {
    methode: 'UV-filter',
    chloor: '0%',
    nitraat: '0%',
    pfas: '0%',
    bacterien: '99,9%+',
    kalk: '0%',
    jaarkosten: '€30–80',
    installatie: 'Gemiddeld',
  },
];

const filterstappen = [
  {
    nr: '1',
    titel: 'Water stroomt onder druk door het filterpatroon',
    desc: 'Leidingwater passeert onder leidingwaterdruk (2–5 bar) door het koolstofpatroon. Bij een filterkan valt het water door zwaartekracht — lagere druk, kortere contacttijd, minder effectieve adsorptie.',
  },
  {
    nr: '2',
    titel: 'Mechanische voorfiltration (blokfilter)',
    desc: 'Bij een koolstofblokfilter werkt de compacte structuur ook als mechanisch filter dat deeltjes groter dan 0,5–5 micron tegenhoudt — zand, roest, zwevende deeltjes, cystes van Giardia en Cryptosporidium. GAC-filters doen dit nauwelijks.',
  },
  {
    nr: '3',
    titel: 'Adsorptie via van der Waals-krachten',
    desc: 'Chloor, THM, pesticiden en geurmoleculen binden zich via van der Waals-krachten aan het enorme inwendige oppervlak van de actieve kool (500–1500 m² per gram). De micro- en mesoporiën fungeren als adsorptieplekken en transportkanalen.',
  },
  {
    nr: '4',
    titel: 'Gefilterd water verlaat het patroon',
    desc: 'Water dat het koolstofmedium heeft doorlopen is ontdaan van geadsorbeerde stoffen. Mineralen zoals calcium en magnesium blijven volledig intact — koolstof heeft geen effect op anorganische zouten.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Koolstoffilter', url: 'https://waterfilterplatform.nl/koolstoffilter' },
  { name: 'Werking', url: 'https://waterfilterplatform.nl/koolstoffilter/werking' },
];

export default function KoolstoffilterWerkingPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Hoe werkt een koolstoffilter? Actief kool uitgelegd (2026)',
          description:
            'Adsorptiewetenschap, GAC vs blokfilter vs inline, verwijderingspercentages, vervangingsintervallen en vergelijkingstabel vs osmose en UV.',
          datePublished: '2026-02-25',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/koolstoffilter/werking',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/koolstoffilter" className="hover:text-[#005F8A]">Koolstoffilter</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Werking</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Hoe werkt een koolstoffilter? Actief kool uitgelegd (2026)
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Een koolstoffilter filtert via adsorptie: verontreinigingen binden zich aan het enorme
            interne oppervlak van geactiveerde kool via van der Waals-krachten. Maar hoe werkt dat
            precies, wat is het verschil tussen GAC en een blokfilter, en wat verwijdert actieve kool
            wel en niet? Op deze pagina legt u het uit aan de hand van de wetenschap achter het
            filtratieproces.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~8 min leestijd</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">

        <QuickAnswer answer="Een koolstoffilter werkt via adsorptie: chloor, THM, pesticiden en geurmoleculen hechten zich via van der Waals-krachten aan het interne oppervlak van geactiveerde kool (500–1500 m²/gram). GAC (granulair) geeft snellere doorstroming; een blokfilter geeft langere contacttijd en betere filtratie. Koolstof verwijdert geen nitraten, bacteriën, PFAS of kalk." />

        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#adsorptie', 'Adsorptie en van der Waals-krachten'],
              ['#types', 'GAC vs blokfilter vs inline carbon'],
              ['#porieen', 'Poriestructuur en oppervlak'],
              ['#filterstappen', 'Filtratieproces stap voor stap'],
              ['#verwijdering', 'Wat verwijdert een koolstoffilter?'],
              ['#vervangen', 'Wanneer moet u het filter vervangen?'],
              ['#vergelijking', 'Koolstoffilter vs osmose vs UV'],
              ['#faq', 'Veelgestelde vragen'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#003F5C] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Adsorptie */}
        <section id="adsorptie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Adsorptie en van der Waals-krachten: de wetenschap</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het centrale werkingsprincipe van een koolstoffilter is <strong>adsorptie</strong> — niet te
            verwarren met absorptie. Bij absorptie wordt een stof opgenomen in een materiaal (zoals een
            spons die water opneemt). Bij adsorptie hechten moleculen zich aan het <em>oppervlak</em> van
            een materiaal, zonder er doorheen te trekken.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De bindingskracht die hierbij een rol speelt zijn <strong>van der Waals-krachten</strong>:
            zwakke, tijdelijke elektrostatische aantrekkingskrachten die ontstaan doordat elektronen
            in moleculen ongelijk verdeeld zijn. Bij koolstof — een niet-polaire stof — zijn deze
            krachten bijzonder sterk voor andere niet-polaire moleculen. Chloor, trihalomethanen (THM),
            pesticiden, herbiciden en aromatische verbindingen zijn allemaal overwegend niet-polair en
            hebben daardoor een hoge affiniteit voor de koolstofmatrix.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Anorganische ionen zoals nitraat (NO₃⁻), fluoride (F⁻), calcium (Ca²⁺) en magnesium
            (Mg²⁺) zijn <strong>ionisch en polair</strong> — ze worden nauwelijks aangetrokken door
            het koolstofoppervlak. Dit verklaart meteen de fundamentele beperking van elk
            koolstoffilter: het is selectief voor organische stoffen, niet voor anorganische ionen.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Schaalgrootte:</strong> één gram geactiveerde kool
            heeft een intern oppervlak van 500 tot 1500 vierkante meter — vergelijkbaar met de
            vloeroppervlakte van twee tot vier voetbalvelden. Dit enorme oppervlak maakt het
            mogelijk om miljoenen bindingsplekken voor verontreinigingen te bieden, totdat de
            kool verzadigd raakt.
          </div>
        </section>

        {/* Types */}
        <section id="types">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">GAC vs koolstofblokfilter vs inline carbon</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Niet alle koolstoffilters zijn gelijk. De drie hoofdvormen — GAC, blokfilter en inline
            carbon — verschillen sterk in filterkwaliteit, doorstroomsnelheid en toepassing.
          </p>
          <div className="space-y-4">
            <div className="border border-gray-100 rounded-2xl p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">GAC — Granular Activated Carbon</h3>
                <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded-full shrink-0 ml-2">Basis</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                GAC bestaat uit losse koolkorrels met een diameter van 0,4–2,5 mm. Het water
                stroomt door de ruimte <em>tussen</em> de korrels. Dit geeft snelle doorstroming
                maar ook kanalvorming: water zoekt de weg van de minste weerstand en heeft kortere
                contacttijd met de koolkorrels. GAC is de meest gebruikte vorm in filterkannen
                (Brita, PearlCo) en eenvoudige kraanfilters.
              </p>
              <p className="text-sm text-gray-500">Verwijdering: chloor 80–95% / THM 75–90% / pesticiden 60–80%</p>
            </div>
            <div className="border border-[#005F8A]/20 rounded-2xl p-5 bg-[#E0F2FE]/40">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-[#003F5C]">Koolstofblokfilter (CTO — Carbon Block)</h3>
                <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded-full shrink-0 ml-2">Aanbevolen</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Bij een blokfilter wordt geactiveerde kool samengeperst tot een vaste cilindervorm
                met een uniforme structuur. Water <em>moet</em> door het volledige koolstofmedium
                stromen, wat leidt tot langere contacttijd en consistent betere filtratie. De vaste
                structuur dient ook als mechanisch filter voor deeltjes tot 0,5–5 micron. Merken
                als Doulton, Pentair en Ecosoft leveren kwalitatieve CTO-blokfilters voor
                onderbouwsystemen.
              </p>
              <p className="text-sm text-[#005F8A] font-medium">Verwijdering: chloor 95–99% / THM 90–99% / pesticiden 70–90% / deeltjes tot 0,5 µm</p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">Inline carbon (geïntegreerd)</h3>
                <span className="text-xs font-semibold text-[#005F8A] bg-[#E0F2FE] px-2 py-1 rounded-full shrink-0 ml-2">Veelzijdig</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Inline carbonfilters zijn cilindrische patronen die in de waterleiding worden
                geplaatst via snelkoppelingen. Ze kunnen zowel GAC als koolstofblok bevatten,
                afhankelijk van de fabrikant. Ze worden veel gebruikt als voorfilter voor
                omgekeerde osmose systemen (beschermen het RO-membraan tegen chloor) of als
                nafilter voor smaakverbetering. Pentair Carbon Block en Ecosoft RFC10BB zijn
                veelgebruikte types.
              </p>
              <p className="text-sm text-gray-500">Levensduur: 6–12 maanden of 4000–10.000 liter, afhankelijk van type</p>
            </div>
          </div>
        </section>

        {/* Poriestructuur */}
        <section id="porieen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Poriestructuur en intern oppervlak</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De effectiviteit van actieve kool hangt direct af van de poriestructuur. Geactiveerde
            kool heeft drie soorten poriën, elk met een andere functie in het filtratieproces:
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[400px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Poriegrootte</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Diameter</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Functie</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Microporiën', diameter: '<2 nm', functie: 'Hoofdadsorptie van kleine organische moleculen (chloor, geur)' },
                  { type: 'Mesoporiën', diameter: '2–50 nm', functie: 'Transportkanalen naar microporiën; adsorptie grotere moleculen' },
                  { type: 'Macroporiën', diameter: '>50 nm', functie: 'Ingang en distributie; beperkte adsorptiecapaciteit' },
                ].map((r, i) => (
                  <tr key={r.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-semibold text-[#003F5C]">{r.type}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.diameter}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.functie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            De grondstof voor geactiveerde kool bepaalt de porieverdeling. <strong>Kokosnootschil-kool</strong>
            {' '}heeft relatief veel microporiën en is daardoor optimaal voor chloor- en geurverwijdering.
            <strong> Steenkoolkool</strong> heeft meer mesoporiën en is effectiever voor grotere
            organische moleculen zoals THM en bepaalde pesticiden. <strong>Houtskool</strong> heeft meer
            macroporiën en wordt minder gebruikt voor drinkwaterfiltratie.
          </p>
        </section>

        {/* Filtratieproces stap voor stap */}
        <section id="filterstappen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Het filtratieproces stap voor stap</h2>
          <div className="space-y-4">
            {filterstappen.map(s => (
              <div
                key={s.nr}
                className="flex gap-4 border border-gray-100 rounded-xl p-5 hover:border-[#005F8A]/30 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#005F8A] text-white flex items-center justify-center font-bold text-lg">
                  {s.nr}
                </div>
                <div>
                  <p className="font-bold text-[#003F5C] mb-1">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Contacttijd is bepalend:</strong> Hoe langer water in
            contact is met de actieve kool, hoe meer verontreinigingen worden geadsorbeerd. Een
            blokfilter met hoge weerstand heeft langere contacttijd dan een GAC-filter. Vergroot
            de contacttijd niet door de waterdruk te verlagen — dit vermindert de doorstroomsnelheid
            maar kan ook verstoppping bevorderen.
          </div>
        </section>

        {/* Verwijderingstabel */}
        <section id="verwijdering">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat verwijdert een koolstoffilter — en wat niet?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Onderstaande tabel geeft een realistisch beeld van de verwijderingsprestaties van een
            kwalitatief koolstofblokfilter bij Nederlands leidingwater. De percentages zijn gebaseerd
            op NSF/ANSI testdata en onafhankelijke labresultaten.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[500px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Stof / categorie</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Verwijdering</th>
                  <th className="py-2.5 px-3 font-semibold text-left hidden sm:table-cell">Werkingsmechanisme</th>
                </tr>
              </thead>
              <tbody>
                {verwijderingsTabel.map((r, i) => (
                  <tr key={r.stof} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 text-gray-800 font-medium">{r.stof}</td>
                    <td className="py-2.5 px-3 text-center">
                      <span
                        className={`inline-block font-semibold text-xs px-2.5 py-1 rounded-full ${
                          r.kleur === 'green'
                            ? 'bg-green-100 text-green-800'
                            : r.kleur === 'amber'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {r.verwijdering}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-gray-500 text-xs hidden sm:table-cell">{r.methode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Percentages zijn typische waarden voor koolstofblokfilter bij normaal Nederlands leidingwater.
            GAC-filters presteren 10–25% lager op alle groene categorieën. Bron: NSF/ANSI 42 en 53 testprotocollen.
          </p>
        </section>

        {/* Vervangen */}
        <section id="vervangen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer moet u een koolstoffilter vervangen?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een koolstoffilter raakt verzadigd naarmate de adsorptieplekken bezet raken. Na
            verzadiging stopt de filtratie. Erger nog: een oververzadigd filter kan eerder
            opgeslagen stoffen <em>teruggeven</em> aan het water (desorptie). Vervangen op tijd is
            dus essentieel.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[420px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Filtertype</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Interval</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center hidden sm:table-cell">Of na (liter)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'GAC filterkan (Brita, PearlCo)', interval: '4–6 weken', liter: '~150 liter' },
                  { type: 'GAC kraanfilter', interval: '2–3 maanden', liter: '400–600 liter' },
                  { type: 'Koolstofblok kraanfilter', interval: '3–6 maanden', liter: '500–1000 liter' },
                  { type: 'Inline blokfilter (onderbouw)', interval: '6–12 maanden', liter: '2000–4000 liter' },
                  { type: 'Pre-filter voor osmose (GAC)', interval: '6 maanden', liter: '~5000 liter' },
                ].map((r, i) => (
                  <tr key={r.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 text-gray-800">{r.type}</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-[#005F8A]">{r.interval}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600 hidden sm:table-cell">{r.liter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Signalen dat uw filter aan vervanging toe is: verhoogde chloorlucht in het gefilterde
            water, terugkerende vieze smaak, merkbaar verminderde doorstroomsnelheid, en het
            bereiken van de aanbevolen vervangingsdatum. Meer over dit onderwerp leest u op de
            pagina <Link href="/koolstoffilter/vervangen" className="text-[#005F8A] underline hover:no-underline">koolstoffilter vervangen</Link>.
          </p>
        </section>

        {/* Vergelijking */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Koolstoffilter vs omgekeerde osmose vs UV</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Koolstoffiltratie, omgekeerde osmose en UV-desinfectie zijn drie fundamenteel
            verschillende filtertechnologieën met elk hun eigen sterktes en beperkingen.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Methode</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Chloor</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Nitraat</th>
                  <th className="py-2.5 px-3 font-semibold text-center hidden sm:table-cell">PFAS</th>
                  <th className="py-2.5 px-3 font-semibold text-center hidden sm:table-cell">Bacteriën</th>
                  <th className="py-2.5 px-3 font-semibold text-center hidden md:table-cell">Kalk</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Jaarkosten</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingTabel.map((r, i) => (
                  <tr key={r.methode} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.methode}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.chloor}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.nitraat}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700 hidden sm:table-cell">{r.pfas}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700 hidden sm:table-cell">{r.bacterien}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700 hidden md:table-cell">{r.kalk}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A]">{r.jaarkosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            In de praktijk worden technologieën gecombineerd. Een osmose systeem gebruikt een
            koolstoffilter als pre-filter om chloor te verwijderen (chloor beschadigt het RO-membraan)
            en als nafilter voor smaakverbetering. Een UV-filter wordt gecombineerd met koolstoffilter
            voor zowel chemische als biologische bescherming. Lees meer op de pagina{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>.
          </p>
        </section>

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/koolstoffilter',
                title: 'Koolstoffilter overzicht',
                desc: 'Complete gids: types, kosten en wanneer een koolstoffilter genoeg is.',
              },
              {
                href: '/koolstoffilter/soorten',
                title: 'Soorten koolstoffilters',
                desc: 'GAC, blokfilter, inline, keramisch+kool — overzicht met vergelijkingstabel.',
              },
              {
                href: '/koolstoffilter/onderbouw',
                title: 'Onderbouw koolstoffilter',
                desc: 'Beste keuze voor betere kraanwatersmaak — installatie, kosten en topmodellen.',
              },
              {
                href: '/koolstoffilter/vervangen',
                title: 'Koolstoffilter vervangen',
                desc: 'Wanneer en hoe vervangt u een koolstoffilter? Stap-voor-stap handleiding.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose',
                desc: 'Volledige waterzuivering voor nitraat, PFAS en zware metalen.',
              },
              {
                href: '/waterfilter/soorten',
                title: 'Alle waterfiltersoorten',
                desc: 'Vergelijking van alle filtertechnologieën voor thuisgebruik.',
              },
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

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over de werking van een koolstoffilter
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

      </div>
    </>
  );
}
