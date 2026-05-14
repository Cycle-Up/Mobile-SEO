import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Hoe Werkt een Osmose Filter? Complete Uitleg',
  description:
    'Complete uitleg over hoe een osmosefilter werkt: het osmoseprincipe, semi-permeabel membraan (0,0001 micron), meerfasige filtratie, TDS-rejectie en afvalwater.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-filter/werking' },
  openGraph: {
    title: 'Hoe Werkt een Osmose Filter? Complete Uitleg',
    description:
      'Van osmoseprincipe tot membraantechnologie: leer hoe een omgekeerde osmosefilter 95–99% van verontreinigingen verwijdert via een semi-permeabel membraan van 0,0001 micron.',
    url: 'https://waterfilterplatform.nl/osmose-filter/werking',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe werkt omgekeerde osmose precies?',
    answer:
      'Bij omgekeerde osmose wordt water onder druk (4–8 bar) door een semi-permeabel membraan gedwongen. De poriën in het membraan zijn slechts 0,0001 micron groot — kleiner dan watermoleculen maar veel groter dan waterstofatomen, zodat alleen H₂O-moleculen erdoor kunnen. Opgeloste stoffen zoals kalk, nitraten, zware metalen, pesticiden en PFAS worden tegengehouden en afgevoerd als concentraat (afvalwater). Het resultaat is ultrapuur water met een TDS-rejectie van 95–99%.',
  },
  {
    question: 'Wat is het verschil tussen osmose en omgekeerde osmose?',
    answer:
      'Bij natuurlijke osmose beweegt water van een minder geconcentreerde oplossing naar een meer geconcentreerde oplossing, door een semi-permeabel membraan, totdat de concentraties gelijk zijn. Bij omgekeerde osmose keren we dit proces om: we passen druk toe aan de kant van de geconcentreerde oplossing (het ruwe leidingwater), groter dan de osmotische druk. Hierdoor stroomt water terug door het membraan — van geconcentreerd naar minder geconcentreerd — en worden verontreinigingen tegengehouden.',
  },
  {
    question: 'Hoeveel afvalwater produceert een osmosefilter?',
    answer:
      'Een traditioneel osmosefilter zonder boostpomp produceert 2–4 liter afvalwater per liter schoon water (ratio 2:1 tot 4:1). Moderne systemen met boostpomp en geoptimaliseerde membranen halen een ratio van 1:1 of beter. Het afvalwater (concentraat) bevat de tegengehouden verontreinigingen en wordt via de sifon naar de riolering afgevoerd. Dit water is niet schadelijk voor het riool en kan ook gebruikt worden voor het besproeien van planten of het schoonmaken.',
  },
  {
    question: 'Wat is TDS-rejectie en wat betekent 95–99% in de praktijk?',
    answer:
      'TDS staat voor Total Dissolved Solids — de totale hoeveelheid opgeloste stoffen in het water, gemeten in mg/L of ppm. TDS-rejectie is het percentage van die stoffen dat het membraan tegenhoudt. Bij Nederlands leidingwater met een gemiddelde TDS van 300–500 mg/L betekent 97% rejectie dat het gefilterde water nog maar 9–15 mg/L TDS bevat — vergelijkbaar met het zuiverste bronwater. U kunt TDS meten met een goedkope TDS-meter (€5–15).',
  },
  {
    question: 'Hoe verschilt een ingebouwd osmosefilter in een 4-in-1 kraan van een losstaand systeem?',
    answer:
      'Een losstaand onderbouwsysteem heeft een aparte druktank (3–12 liter) voor wateropslag en een apart osmosekraantje naast uw gewone kraan. Een 4-in-1 kokend water kraan integreert het osmosemembraan in het systeem onder het aanrecht en combineert gefilterd koud water, warm water, kokend water (100°C) en soms bruisend water uit één elegante kraan. De 4-in-1 heeft geen aparte tank — het membraan produceert water direct on-demand of via een kleine interne buffer. Dit maakt het systeem compacter en hygiënischer.',
  },
];

const filtratieStappen = [
  {
    stap: 1,
    naam: 'Sedimentfilter (5 micron)',
    doel: 'Verwijdert zwevende deeltjes',
    verwijdert: 'Zand, slib, roest, inspoeling van leidingen',
    interval: '6–12 maanden',
    kleur: 'bg-amber-50 border-amber-200',
  },
  {
    stap: 2,
    naam: 'Actief koolstof voorfilter',
    doel: 'Verwijdert chloor en organische stoffen',
    verwijdert: 'Chloor, chloorkoolwaterstoffen, geur, smaak, sommige pesticiden',
    interval: '6–12 maanden',
    kleur: 'bg-gray-50 border-gray-200',
  },
  {
    stap: 3,
    naam: 'RO-membraan (0,0001 micron)',
    doel: 'Hoofdfiltratie via omgekeerde osmose',
    verwijdert: 'Nitraten, zware metalen, PFAS, pesticiden, bacteriën, virussen, farmaceutische residuen',
    interval: '2–3 jaar',
    kleur: 'bg-[#E0F2FE] border-[#005F8A]',
  },
  {
    stap: 4,
    naam: 'Actief koolstof nafilter',
    doel: 'Smaakverbetering na membraan',
    verwijdert: 'Resterende smaak- en geurcomponenten uit het membraan en druktank',
    interval: '12 maanden',
    kleur: 'bg-gray-50 border-gray-200',
  },
];

export default function OsmoseFilterWerkingPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Osmose filter', url: 'https://waterfilterplatform.nl/osmose-filter' },
          { name: 'Werking', url: 'https://waterfilterplatform.nl/osmose-filter/werking' },
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
            <span>Werking</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Hoe Werkt een Osmose Filter? Complete Uitleg
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een <strong>osmosefilter</strong> — of omgekeerde osmose systeem — is de meest effectieve
            drinkwatertechnologie voor thuisgebruik. Het verwijdert 95–99% van alle opgeloste stoffen
            via een semi-permeabel membraan met poriën van slechts <strong>0,0001 micron</strong>. Op
            deze pagina leggen we stap voor stap uit hoe het proces werkt, van het osmoseprincipe tot
            het multistaps filtratieproces en de rol van afvalwater.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#osmoseprincipe"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Lees de uitleg →
            </Link>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Osmosefilter kopen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#osmoseprincipe" className="hover:underline">Het osmoseprincipe</a></li>
            <li><a href="#membraan" className="hover:underline">Semi-permeabel membraan en poriegroottes</a></li>
            <li><a href="#filtratiestappen" className="hover:underline">Meerfasige filtratie: stap voor stap</a></li>
            <li><a href="#tds-rejectie" className="hover:underline">TDS-rejectie: wat 95–99% betekent</a></li>
            <li><a href="#afvalwater" className="hover:underline">Afvalwater: ratio en hergebruik</a></li>
            <li><a href="#4in1-kraan" className="hover:underline">Geïntegreerd in een 4-in-1 kraan</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Het osmoseprincipe */}
        <section id="osmoseprincipe">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Het osmoseprincipe: van natuur naar technologie
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Om omgekeerde osmose te begrijpen, helpt het om eerst het natuurlijke osmoseproces te kennen.
            Osmose is een fundamenteel biologisch verschijnsel dat plaatsvindt in elke levende cel.
          </p>

          <h3 className="text-lg font-bold text-[#003F5C] mb-3">Natuurlijke osmose</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Bij <strong>natuurlijke osmose</strong> bewegen watermoleculen spontaan door een
            semi-permeabel membraan van een verdunde (lage concentratie opgeloste stoffen) naar een
            geconcentreerde oplossing (hoge concentratie). Dit proces stopt pas als de concentraties aan
            beide kanten van het membraan gelijk zijn — het chemisch evenwicht is bereikt — of als er
            voldoende tegendruk is opgebouwd aan de geconcentreerde kant. Die tegendruk noemen we de
            <strong> osmotische druk</strong>.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Osmose speelt overal in de natuur een rol: wortels die water opnemen uit de aarde via
            osmose, de opname van water in de darmen, de regulering van zoutconcentraties in
            zeeorganismen. Het is een passief proces dat geen energie vereist — de natuur gebruikt het
            als een elegant transporthulpmiddel.
          </p>

          <h3 className="text-lg font-bold text-[#003F5C] mb-3">Omgekeerde osmose: het principe omdraaien</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Bij <strong>omgekeerde osmose</strong> (Reverse Osmosis, RO) keren we het proces bewust om.
            We passen mechanische druk toe aan de kant van de geconcentreerde oplossing — in dit geval
            het ruwe leidingwater met daarin opgeloste mineralen, nitraten, pesticiden en andere
            contaminanten. Als de aangebrachte druk groter is dan de osmotische tegendruk, worden
            watermoleculen door het membraan gedwongen — terwijl de opgeloste verontreinigingen worden
            tegengehouden en geconcentreerd aan de andere kant achterblijven.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 mb-5">
            <p className="font-semibold text-[#003F5C] mb-3">Samenvatting: osmose vs. omgekeerde osmose</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-2">Natuurlijke osmose</p>
                <ul className="space-y-1.5 text-gray-700">
                  <li className="flex gap-2"><span className="text-blue-500 shrink-0">→</span>Water beweegt van laag naar hoog geconcentreerd</li>
                  <li className="flex gap-2"><span className="text-blue-500 shrink-0">→</span>Passief proces — geen externe druk nodig</li>
                  <li className="flex gap-2"><span className="text-blue-500 shrink-0">→</span>Concentratie-egalisatie is het doel</li>
                  <li className="flex gap-2"><span className="text-blue-500 shrink-0">→</span>Toepassing: biologische cellen, planten</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-2">Omgekeerde osmose</p>
                <ul className="space-y-1.5 text-gray-700">
                  <li className="flex gap-2"><span className="text-[#005F8A] shrink-0">→</span>Water gedwongen van hoog naar laag geconcentreerd</li>
                  <li className="flex gap-2"><span className="text-[#005F8A] shrink-0">→</span>Actief proces — vereist druk van 4–8 bar</li>
                  <li className="flex gap-2"><span className="text-[#005F8A] shrink-0">→</span>Waterzuivering is het doel</li>
                  <li className="flex gap-2"><span className="text-[#005F8A] shrink-0">→</span>Toepassing: drinkwaterfiltratie, ontzilting</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            De benodigde druk voor huishoudelijke osmosefilters ligt tussen 4 en 8 bar. In Nederland
            heeft leidingwater doorgaans een waterdruk van 3–6 bar. Bij systemen zonder boostpomp
            werkt de leidingwaterdruk rechtstreeks als drijvende kracht. Bij lagere leidingwaterdruk
            (onder 3,5 bar) of bij systemen die een hogere doorstroomsnelheid vereisen, wordt een
            ingebouwde boostpomp gebruikt die de druk verhoogt tot het optimale werkingsniveau.
          </p>
        </section>

        {/* Membraan */}
        <section id="membraan">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Het semi-permeabele membraan: de kern van het osmosefilter
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Het <strong>RO-membraan</strong> is het hart van elk osmosefilter. Het is een
            semi-permeabele barrière met microscopisch kleine poriën die alleen watermoleculen
            doorlaten en nagenoeg alle opgeloste stoffen tegenhouden. Het begrijpen van de
            membraanstructuur helpt u de prestaties en beperkingen van een osmosefilter beter
            te interpreteren.
          </p>

          <h3 className="text-lg font-bold text-[#003F5C] mb-3">Poriegroottes: 0,0001 micron</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De poriën in een RO-membraan zijn <strong>0,0001 micron</strong> (0,1 nanometer) groot —
            dit is de maatstaf voor de filtratienauwkeurigheid. Om dit in perspectief te plaatsen:
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-5">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Deeltje</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Grootte (micron)</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Tegengehouden door RO?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { deeltje: 'Watermolecuul (H₂O)', grootte: '0,00028 micron', gehouden: 'Nee — passeert het membraan' },
                  { deeltje: 'Natriumion (Na⁺)', grootte: '0,00019 micron', gehouden: 'Gedeeltelijk (94–99%)' },
                  { deeltje: 'Calciumion (Ca²⁺)', grootte: '0,0006 micron', gehouden: 'Ja (95–99%)' },
                  { deeltje: 'Nitraat (NO₃⁻)', grootte: '0,00062 micron', gehouden: 'Ja (85–96%)' },
                  { deeltje: 'PFAS (PFOA)', grootte: '0,00091 micron', gehouden: 'Ja (>95%)' },
                  { deeltje: 'Virus (hepatitis A)', grootte: '0,027 micron', gehouden: 'Ja (>99,9%)' },
                  { deeltje: 'Bacterie (E. coli)', grootte: '1–5 micron', gehouden: 'Ja (>99,99%)' },
                  { deeltje: 'Chloor (opgelost gas)', grootte: 'Moleculair', gehouden: 'Beperkt (koolstoffilter vereist)' },
                ].map((r, i) => (
                  <tr key={r.deeltje} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium">{r.deeltje}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.grootte}</td>
                    <td className={`py-2.5 px-3 text-center text-xs ${r.gehouden.startsWith('Nee') ? 'text-blue-700 font-medium' : r.gehouden.startsWith('Ja') ? 'text-green-700 font-medium' : 'text-gray-600'}`}>
                      {r.gehouden}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold text-[#003F5C] mb-3">Membraanconstructie: TFC-technologie</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Moderne RO-membranen zijn gebouwd als dunne samengestelde films (<strong>TFC: Thin Film
            Composite</strong>). Een TFC-membraan bestaat uit drie lagen:
          </p>
          <div className="space-y-3 mb-5">
            {[
              { laag: 'Polyester draaggaas (backing layer)', dikte: '120–150 micron', functie: 'Mechanische ondersteuning en drukweerstand — houdt het membraan op zijn plaats onder hoge druk' },
              { laag: 'Microporeuze polysulfone interlayer', dikte: '40–60 micron', functie: 'Poreuze tussenlaag die de actieve laag ondersteunt en een intermediaire filtratiefunctie vervult' },
              { laag: 'Polyamide active layer', dikte: '0,2–0,5 micron', functie: 'De eigenlijke filterlaag — ultradun polyamidefilm met poriën van 0,0001 micron die verontreinigingen tegenhouden' },
            ].map((l, i) => (
              <div key={l.laag} className="flex gap-4 items-start border border-gray-100 rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{l.laag}</p>
                  <p className="text-xs text-[#005F8A] mb-1">Dikte: {l.dikte}</p>
                  <p className="text-sm text-gray-600">{l.functie}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            De capaciteit van een RO-membraan wordt uitgedrukt in <strong>GPD (gallons per dag)</strong>:
            een 50 GPD-membraan produceert nominaal circa 190 liter gefilterd water per dag onder
            standaardomstandigheden (25°C, 6 bar inkomende druk, 500 ppm TDS). Bij lagere watertemperatuur
            of druk daalt de output: bij 15°C (typisch Nederlands kraanwater) produceert een 50
            GPD-membraan slechts 60–70% van de nominale capaciteit. Kies daarom bij voorkeur een
            membraan met een hogere GPD-rating dan uw dagelijkse vraag.
          </p>
        </section>

        {/* Filtratiestappen */}
        <section id="filtratiestappen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Meerfasige filtratie: stap voor stap door het osmosesysteem
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Een osmosefilter filtert niet in één stap. Een goed systeem heeft minimaal vier filterfasen
            die elk een specifieke categorie verontreinigingen aanpakken. De volgorde is bewust
            gekozen: elke stap beschermt de volgende en verlengt de levensduur van het kostbare
            RO-membraan.
          </p>
          <div className="space-y-4 mb-6">
            {filtratieStappen.map(stap => (
              <div key={stap.stap} className={`rounded-2xl border p-5 ${stap.kleur}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full font-bold flex items-center justify-center shrink-0 text-lg ${stap.stap === 3 ? 'bg-[#005F8A] text-white' : 'bg-gray-200 text-gray-700'}`}>
                    {stap.stap}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="font-bold text-gray-900">{stap.naam}</h3>
                      <span className="text-xs text-gray-500 bg-white/70 px-2 py-0.5 rounded-full">
                        Vervangen: {stap.interval}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Doel:</strong> {stap.doel}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Verwijdert:</strong> {stap.verwijdert}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Aanvullende filterstappen */}
          <h3 className="text-lg font-bold text-[#003F5C] mb-3">
            Aanvullende filterstappen in premium systemen
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Basismodellen stoppen bij stap 4. Premium systemen en de geïntegreerde 4-in-1 kokend
            water kraan voegen één of meer van de volgende stappen toe:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {[
              {
                stap: '5a',
                naam: 'Remineralisatiefilter',
                beschrijving: 'Voegt calcium en magnesium terug toe aan het gefilterde water in een gecontroleerde, gezonde verhouding. Verbetert de smaak en neutraliseert de lage pH van osmosewater (normaal 5,5–6,5).',
                reden: 'Osmosewater is nagenoeg mineraalvrij — sommige gebruikers vinden dit te "plat" van smaak.',
              },
              {
                stap: '5b',
                naam: 'UV-desinfectiefilter',
                beschrijving: 'Ultraviolet licht (254 nm golflengte) desinfecteert het gefilterde water door bacteriën en virussen onschadelijk te maken. Geen chemicaliën, geen residu.',
                reden: 'Extra bescherming bij systemen met een druktank waar water enige tijd kan stilstaan.',
              },
              {
                stap: '5c',
                naam: 'Alkaline / pH-verhogend filter',
                beschrijving: 'Verhoogt de pH van het gefilterde water van 5,5–6,5 naar 7,5–8,5 door mineralentoevoeging (calcium, magnesium, kalium). Sommige gebruikers prefereren licht alkalisch water.',
                reden: 'Populair bij gebruikers die alkalisch water prefereren — wetenschappelijk bewijs voor gezondheidsvoordelen is beperkt.',
              },
              {
                stap: '5d',
                naam: 'Infraroode keramische mineralenfilter',
                beschrijving: 'Keramische ballen met mineralen geven op kleine schaal elementen af aan het water. Minder controle over de exacte doseringen dan een remineralisatiefilter.',
                reden: 'Goedkoper alternatief voor remineralisatie — resultaten kunnen variëren per fabrikant.',
              },
            ].map(f => (
              <div key={f.stap} className="bg-white border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">Stap {f.stap}: {f.naam}</p>
                <p className="text-xs text-gray-600 mb-2 leading-relaxed">{f.beschrijving}</p>
                <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-2 py-1">{f.reden}</p>
              </div>
            ))}
          </div>

          {/* Het waterpad visueel */}
          <div className="bg-gray-50 rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-3 text-sm">Het waterpad door een 4-traps osmosefilter</p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-center">
              {['Leidingwater', 'Sediment\n5 micron', 'Koolstof\nvoorfil.', 'RO-membraan\n0,0001 μm', 'Koolstof\nnafil.', 'Gefilterd\nwater'].map((label, i, arr) => (
                <div key={label} className="flex items-center gap-2">
                  <div className={`rounded-lg p-2 min-w-[60px] ${i === 3 ? 'bg-[#005F8A] text-white font-semibold' : i === arr.length - 1 ? 'bg-green-100 text-green-800 font-semibold' : 'bg-white border border-gray-200 text-gray-700'}`}>
                    {label.split('\n').map((line, j) => (
                      <div key={j}>{line}</div>
                    ))}
                  </div>
                  {i < arr.length - 1 && (
                    <span className="text-gray-400 text-base shrink-0">→</span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Parallel aan het RO-membraan: afvalwater (concentraat) → sifon/riolering
            </p>
          </div>
        </section>

        {/* TDS-rejectie */}
        <section id="tds-rejectie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            TDS-rejectie: wat 95–99% verwijdering betekent in de praktijk
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De prestaties van een osmosefilter worden uitgedrukt als <strong>TDS-rejectie</strong>
            (Total Dissolved Solids rejection). Dit percentage geeft aan hoeveel van de opgeloste
            stoffen in het inkomende water worden tegengehouden door het membraan.
          </p>

          <h3 className="text-lg font-bold text-[#003F5C] mb-3">Hoe TDS wordt gemeten</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            TDS wordt gemeten met een elektrische geleidbaarheidstest: opgeloste ionen geleiden
            stroom, en hoe meer ionen aanwezig zijn, hoe hoger de gemeten TDS-waarde. Een TDS-meter
            (digitale pen, €5–15 bij webwinkels) meet de elektrische geleidbaarheid en rekent dit
            om naar mg/L (ook uitgedrukt als ppm — parts per million). Koel Nederlands leidingwater
            heeft doorgaans een TDS van 200–600 mg/L afhankelijk van de regio.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De TDS-rejectieprocent berekent u als volgt:
          </p>
          <div className="bg-gray-50 rounded-2xl p-5 mb-5 text-center">
            <p className="font-mono text-[#003F5C] text-sm md:text-base font-semibold">
              Rejectie (%) = ((TDS inkomend − TDS gefilterd) / TDS inkomend) × 100
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Voorbeeld: TDS inkomend = 450 mg/L, TDS gefilterd = 13 mg/L → Rejectie = ((450−13)/450) × 100 = 97,1%
            </p>
          </div>

          <h3 className="text-lg font-bold text-[#003F5C] mb-3">Wat 95–99% rejectie betekent</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Op het eerste gezicht lijkt het verschil tussen 95% en 99% klein, maar in de praktijk is
            het aanzienlijk. Bekijk de praktische impact voor Nederlands leidingwater:
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-5">
            <table className="w-full min-w-[500px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Inkomend TDS</th>
                  <th className="py-2.5 px-3 font-semibold text-center">95% rejectie</th>
                  <th className="py-2.5 px-3 font-semibold text-center">97% rejectie</th>
                  <th className="py-2.5 px-3 font-semibold text-center bg-[#005F8A]">99% rejectie</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Bronwater ref.</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { inkomend: '200 mg/L (zacht water)', v95: '10 mg/L', v97: '6 mg/L', v99: '2 mg/L', bron: '1–5 mg/L' },
                  { inkomend: '400 mg/L (gemiddeld)', v95: '20 mg/L', v97: '12 mg/L', v99: '4 mg/L', bron: '1–5 mg/L' },
                  { inkomend: '600 mg/L (hard water)', v95: '30 mg/L', v97: '18 mg/L', v99: '6 mg/L', bron: '1–5 mg/L' },
                  { inkomend: '1000 mg/L (brak water)', v95: '50 mg/L', v97: '30 mg/L', v99: '10 mg/L', bron: '1–5 mg/L' },
                ].map((r, i) => (
                  <tr key={r.inkomend} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium text-xs">{r.inkomend}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.v95}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.v97}</td>
                    <td className="py-2.5 px-3 text-center text-xs font-semibold text-[#005F8A] bg-[#E0F2FE]/50">{r.v99}</td>
                    <td className="py-2.5 px-3 text-center text-xs text-green-700">{r.bron}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold text-[#003F5C] mb-3">Factoren die de rejectie beïnvloeden</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De vermelde rejectiepercentages zijn gemeten onder laboratoriumcondities (25°C, 6 bar,
            500 ppm TDS). In de praktijk wijken de resultaten af door:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              { factor: 'Watertemperatuur', impact: 'Lagere temperatuur (15°C) verlaagt rejectie met 2–3% door verminderde membraanpermeabiliteit' },
              { factor: 'Inkomende waterdruk', impact: 'Lagere druk (<4 bar) verlaagt rejectie; hogere druk verbetert rejectie tot een optimum' },
              { factor: 'Membraanouderdom', impact: 'Na 2–3 jaar begint de rejectie te dalen; bij >90% verslechtering is vervanging aangeraden' },
              { factor: 'TDS van inkomend water', impact: 'Hogere osmotische druk bij hogere TDS vereist meer werkingsdruk voor dezelfde rejectie' },
              { factor: 'Type contaminant', impact: 'Monovalente ionen (Na⁺, F⁻) worden minder goed tegengehouden dan divalente ionen (Ca²⁺, Mg²⁺)' },
              { factor: 'Temperatuur van het water', impact: 'Chloor in leidingwater tast het polyamide membraan aan; de koolstof voorfilter moet chloor volledig verwijderen' },
            ].map(f => (
              <div key={f.factor} className="bg-gray-50 rounded-xl p-3">
                <p className="font-semibold text-gray-900 text-xs mb-1">{f.factor}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{f.impact}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Tip:</strong> Meet de TDS van uw gefilterde water elke
            6 maanden met een TDS-meter om de membraankwaliteit te beoordelen. Als de TDS-rejectie
            onder 90% daalt ten opzichte van de beginmeting, is membraanvervanging (€40–80) aangeraden.
            Een dalend membraan verwijdert nitraten en zware metalen minder effectief, wat gezondheidsrisico&apos;s
            kan opleveren.
          </div>
        </section>

        {/* Afvalwater */}
        <section id="afvalwater">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Afvalwater (concentraat): waarom het ontstaat, ratio&apos;s en hergebruik
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Een van de meest besproken aspecten van omgekeerde osmose is het afvalwater, ook wel
            <strong> concentraat</strong> of <strong>rejectwater</strong> genoemd. Dit is het water
            dat niet door het membraan is gegaan en daardoor een hogere concentratie verontreinigingen
            bevat dan het oorspronkelijke leidingwater. Begrijpen waarom dit ontstaat helpt bij het
            maken van een bewuste keuze voor het juiste systeem.
          </p>

          <h3 className="text-lg font-bold text-[#003F5C] mb-3">Waarom wordt afvalwater geproduceerd?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het membraan kan niet onbeperkt filtreren als er geen afvoer is voor de tegengehouden
            verontreinigingen. Als het concentraat niet wordt afgevoerd, stapelen de opgeloste
            mineralen zich op aan de membraanoppervlakte — een verschijnsel dat <strong>scaling</strong>
            of <strong>fouling</strong> wordt genoemd. Dit verstopt het membraan, verlaagt de
            filtratieprestaties en verkort de levensduur. Door continu een stroom concentraat af te
            voeren (de drain-flow), houdt het systeem het membraanoppervlak schoon en functioneert
            het optimaal.
          </p>

          <h3 className="text-lg font-bold text-[#003F5C] mb-3">De afvalwaterratio: 2:1 tot 4:1</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De verhouding tussen gefilterd water en afvalwater (de recovery rate) varieert per systeem:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            {[
              {
                systeem: 'Basis zonder pomp',
                ratio: '1:3 tot 1:5',
                herstel: '17–25%',
                beschrijving: 'Per liter schoon water gaat 3–5 liter als concentraat naar de afvoer. Hoog waterverbruik maar lage aanschafprijs.',
                kleur: 'bg-amber-50 border-amber-100',
              },
              {
                systeem: 'Premium met boostpomp',
                ratio: '1:1 tot 1:2',
                herstel: '33–50%',
                beschrijving: 'Boostpomp verhoogt de druk en zorgt voor meer efficiënte doorstroming, minder afvalwater en betere membraanbenutting.',
                kleur: 'bg-white border-gray-200',
              },
              {
                systeem: '4-in-1 geoptimaliseerd',
                ratio: '1:1 of beter',
                herstel: '50%+',
                beschrijving: 'Geavanceerde permeaat- en concentraatregulering met ingebouwde boostpomp. Minimale waterverliezen bij maximale rejectie.',
                kleur: 'bg-[#E0F2FE] border-[#005F8A]',
              },
            ].map(r => (
              <div key={r.systeem} className={`rounded-xl border p-4 ${r.kleur}`}>
                <p className="font-semibold text-gray-900 text-sm mb-1">{r.systeem}</p>
                <p className="text-[#005F8A] font-bold text-sm mb-1">Ratio: {r.ratio}</p>
                <p className="text-xs text-gray-500 mb-2">Herstelrate: {r.herstel}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{r.beschrijving}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-[#003F5C] mb-3">Hergebruik van afvalwater</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het concentraat van een huishoudelijk osmosefilter is niet gevaarlijk — het is gewoon
            leidingwater met een iets hogere concentratie mineralen en eventuele verontreinigingen.
            In de meeste installaties gaat het direct naar de sifon en riolering. Maar er zijn
            zinvolle toepassingen voor hergebruik:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              { gebruik: 'Planten besproeien', info: 'Zolang de nitraat- en zoutconcentratie niet extreem hoog is (TDS < 1500 mg/L), zijn de meeste tuinplanten en kamerplanten hier prima mee te besproeien.' },
              { gebruik: 'Vaatwasser of wasmachine', info: 'Geschikt als voorspoelwater. Verminder het waterverbruik van de afvalstroom door een kleine opvangbak te installeren.' },
              { gebruik: 'Toilet spoelen', info: 'Met een eenvoudige opvangbak en graviteitssysteem kan concentraat worden hergebruikt voor het doorspoelen van het toilet.' },
              { gebruik: 'Auto- of fietswas', info: 'Acceptabele kwaliteit voor het wassen van voertuigen — vermijdt de gebruik van duur leidingwater voor schoonmaken.' },
            ].map(g => (
              <div key={g.gebruik} className="flex gap-3 items-start bg-green-50 border border-green-100 rounded-xl p-3">
                <span className="text-green-600 font-bold text-sm shrink-0 mt-0.5">♻</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{g.gebruik}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{g.info}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-[#005F8A]">Milieuperspectief:</strong> Een 4-in-1 osmosekraan met
            geoptimaliseerde recovery rate produceert significant minder afvalwater dan een basismodel.
            De milieuimpact van het afvalwater moet worden afgewogen tegen de plastic besparing (geen
            flessenwater meer) en de lagere energiekosten van kalkvrije verwarmingselementen.
          </div>
        </section>

        {/* 4-in-1 kraan */}
        <section id="4in1-kraan">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Osmosefilter geïntegreerd in een 4-in-1 kokend water kraan
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De meest geavanceerde toepassing van omgekeerde osmose in de huishoudelijke markt is de
            integratie in een <strong>4-in-1 kokend water kraan</strong>. Dit systeem combineert het
            osmosefilter met een geïsoleerde boiler en levert vier watertypen uit één elegante kraan:
            gefilterd koud water, warm water, kokend water (100°C) en optioneel bruisend gefilterd water.
          </p>

          <h3 className="text-lg font-bold text-[#003F5C] mb-3">Hoe het verschilt van een losstaand systeem</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-3 text-sm">Losstaand onderbouwsysteem</p>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex gap-2"><span className="text-gray-400 shrink-0">→</span>Aparte druktank (3–12 liter) voor opslag</li>
                <li className="flex gap-2"><span className="text-gray-400 shrink-0">→</span>Extra kraantje naast bestaande keukenkraan</li>
                <li className="flex gap-2"><span className="text-gray-400 shrink-0">→</span>Gefilterd water op kamertemperatuur of koud</li>
                <li className="flex gap-2"><span className="text-gray-400 shrink-0">→</span>Aparte waterkoker nodig voor kokend water</li>
                <li className="flex gap-2"><span className="text-gray-400 shrink-0">→</span>Aanschafprijs: €150–500 (systeem)</li>
                <li className="flex gap-2"><span className="text-gray-400 shrink-0">→</span>Meerdere losse filtersets te vervangen</li>
              </ul>
            </div>
            <div className="bg-[#E0F2FE] border border-[#005F8A] rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-3 text-sm">4-in-1 kokend water kraan</p>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex gap-2"><span className="text-[#005F8A] shrink-0">→</span>Geen aparte druktank — compactere installatie</li>
                <li className="flex gap-2"><span className="text-[#005F8A] shrink-0">→</span>Één elegante kraan vervangt meerdere apparaten</li>
                <li className="flex gap-2"><span className="text-[#005F8A] shrink-0">→</span>Gefilterd koud, warm en kokend water direct beschikbaar</li>
                <li className="flex gap-2"><span className="text-[#005F8A] shrink-0">→</span>Geen losse waterkoker meer nodig</li>
                <li className="flex gap-2"><span className="text-[#005F8A] shrink-0">→</span>Aanschafprijs: €700–1.000 (all-in systeem)</li>
                <li className="flex gap-2"><span className="text-[#005F8A] shrink-0">→</span>Één jaarlijkse filterset: €80–150</li>
              </ul>
            </div>
          </div>

          <h3 className="text-lg font-bold text-[#003F5C] mb-3">Het filtratiesysteem in de 4-in-1 kraan</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het osmosefilter in een 4-in-1 kraan werkt op hetzelfde principe als een losstaand systeem:
            sedimentfilter → koolstoffilter → RO-membraan → nafilter. Het gefilterde water gaat
            vervolgens naar een kleine ingebouwde buffer of direct naar de kraan. Een geïntegreerde
            boostpomp zorgt voor constante filtratiedruk, ook bij variabele leidingwaterdruk.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De kokendwaterfunctie werkt via een compacte geïsoleerde boiler (1–2 liter) die het
            <em> gefilterde</em> water verwarmt tot 100°C. Doordat het water al door het osmosefilter
            is gegaan voordat het de boiler in gaat, bevat het nauwelijks kalk — wat scaling en
            slijtage van het verwarmingselement tot een minimum beperkt. Dit is een belangrijk
            verschil met gewone waterkokers die op ongefilterd leidingwater werken.
          </p>

          <div className="space-y-3 mb-5">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-2 text-sm">Veiligheidsmechanisme kokend water</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Kokend water (100°C) uit een kraan vereist extra veiligheidsmaatregelen. Professionele
                4-in-1 systemen gebruiken een veiligheidsgrendel (druk-en-draai bediening) die
                voorkómt dat kokend water per ongeluk wordt geactiveerd. Sommige modellen hebben een
                kinderbeveiliging die via een aparte vergrendeling wordt in- en uitgeschakeld.
                Controleer altijd de veiligheidscertificering van het systeem (CE, WRAS of equivalent)
                voordat u een aankoop doet.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-2 text-sm">Energieverbruik van de boiler</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Een compacte boiler van 1–2 liter in een 4-in-1 kraan verbruikt 800–1500 watt tijdens
                het opwarmen en 10–25 watt in stand-by (geïsoleerde tank). Het energieverbruik per
                dag is vergelijkbaar met een traditionele waterkoker — bij intensief gebruik (8+
                koppen thee per dag) kan een 4-in-1 systeem zelfs zuiniger zijn doordat het water
                niet herhaaldelijk opnieuw wordt gekookt in een te grote koker.
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Meer weten over het selecteren van een osmosefilter voor uw situatie? Lees onze uitgebreide
            koopgids op{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">
              osmosefilter kopen
            </Link>{' '}
            of bekijk de verschillen tussen membraantypes in ons artikel over{' '}
            <Link href="/kennisbank/osmose-membraan-types" className="text-[#005F8A] underline hover:no-underline">
              osmose membraan types
            </Link>
            .
          </p>
        </section>

        <CTABanner context="osmose" />

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/osmose-filter', label: 'Osmose filter: overzicht en vergelijking' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose: complete gids' },
              { href: '/kennisbank/osmose-water', label: 'Kennisbank: osmose water — kwaliteit en gebruik' },
              { href: '/kennisbank/osmose-membraan-types', label: 'Kennisbank: osmose membraan types vergeleken' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmosefilter kopen — welk systeem past bij u?' },
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
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over de werking van een osmosefilter
          </h2>
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
