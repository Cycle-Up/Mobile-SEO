import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Soorten keramische filters: kaars, pot, disc en meer',
  description:
    'Overzicht van alle soorten keramische waterfilters: filterkaars, potfilter, keramische schijf en samengesteld keramisch. Vergelijkingstabel, koopadvies en.',
  alternates: { canonical: 'https://waterfilterplatform.nl/keramisch-filter/soorten' },
  openGraph: {
    title: 'Soorten keramische filters: kaars, pot, disc en samengesteld',
    description:
      'Welk type keramisch waterfilter past bij uw situatie? Vergelijkingstabel van alle keramische filtertypes op poriemaat, doorstroom, kosten en toepassingen.',
    url: 'https://waterfilterplatform.nl/keramisch-filter/soorten',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is het verschil tussen een keramische kaars en een potfilter?',
    answer:
      'Een keramische filterkaars is een losse cilindrische kaars die in een bestaand systeem of potfilter wordt geplaatst. Een potfilter (gravity filter) is een compleet systeem met een bovenreservoir (ongefiltreerd water), één of meerdere filterkaarsen en een onderreservoir (gefilterd water). De kaars is het filtermedium; de pot is het complete systeem. U kunt filterkaarsen vervangen zonder een nieuw potfiltersysteem te kopen.',
  },
  {
    question: 'Wat is een keramische schijf (disc filter) en wanneer gebruik ik die?',
    answer:
      'Een keramische schijf is een platte ronde filtercomponent die wordt gebruikt in under-sink multi-stage filtersystemen en druksystemen. De platte vorm geeft een groter filteroppervlak bij gelijke diameter vergeleken met een kaars, wat resulteert in een hogere doorstroomsnelheid. Schijven worden gebruikt in systemen waarbij water onder druk wordt doorgestuurd. Ze zijn minder geschikt voor gravity-filters.',
  },
  {
    question: 'Wat is een samengesteld keramisch filter?',
    answer:
      'Een samengesteld keramisch filter combineert keramische filtratie met andere filtermedia in één filterkaars. De meest voorkomende combinatie is keramisch + geactiveerde kool (carbon). De keramische buitenlaag verwijdert bacteriën, protozoa en sediment; de binnenste koolstoflaag verbetert smaak en geur en verwijdert chloor, THM en deels pesticiden. Voorbeelden: Doulton Ultracarb (keramisch + kool + zilver) en Berkefeld CFC (keramisch + kool).',
  },
  {
    question: 'Welk type keramisch filter is het meest effectief voor bacteriebescherming?',
    answer:
      'Voor maximale bacteriebescherming kiest u een filterkaars of potfilter met een absolute poriemaat van 0,2 µm. Alle keramische typen — kaars, schijf, pot en samengesteld — kunnen beschikbaar zijn in 0,2 µm. De keuze hangt meer af van de toepassing (gravity vs druk, stand-alone vs integrated) dan van het keramische type zelf. Controleer altijd of de poriemaat absoluut of nominaal is.',
  },
  {
    question: 'Kan ik een keramische filterkaars van het ene merk gebruiken in een pot van een ander merk?',
    answer:
      'Soms, maar niet altijd. Filterkaarsen hebben verschillende bevestigingsstandaarden. De meest voorkomende zijn: M10 schroefdraad (meest universeel), M9 schroefdraad, en bajonet-type. Berkefeld- en Doulton-kaarsen gebruiken veelal dezelfde M10 standaard en zijn daardoor onderling uitwisselbaar in veel systemen. Katadyn heeft eigen aansluitingen. Controleer altijd de aansluitspecificaties voor aankoop.',
  },
  {
    question: 'Wat zijn de voordelen van een potfilter van RVS versus kunststof?',
    answer:
      'Een RVS (roestvrijstalen) potfilter is duurzamer, hygiënischer (geen plastic uitloging) en makkelijker grondig te reinigen dan een kunststof model. RVS is ook lichtdicht — dit remt alggroei in het onderreservoir. Nadelen: RVS is zwaarder (belangrijk bij draagbaarheid) en duurder (€150–350 vs €30–100 voor kunststof). Voor thuisgebruik is RVS de betere lange-termijn keuze; voor reizen en camping is kunststof praktischer.',
  },
  {
    question: 'Hoe werkt de combinatie keramisch + koolstoffilter?',
    answer:
      'In een samengesteld keramisch filter of in een twee-staps systeem verwijdert de keramische laag eerst mechanisch alle deeltjes, bacteriën en protozoa. Daarna passeert het water een laag geactiveerde kool die via adsorptie chloor, trihalomethanen, geurmoleculen en deels pesticiden verwijdert. Het resultaat is water dat zowel microbiologisch veilig is als goed smaakt. Deze combinatie is de meest complete keramische oplossing die beschikbaar is zonder omgekeerde osmose.',
  },
  {
    question: 'Welk keramisch filtertype is geschikt voor reizen en kamperen?',
    answer:
      'Voor reizen en kamperen zijn compacte potfilters van kunststof (5–10 liter) of losse filterkaarsen die in bestaande systemen passen het meest praktisch. De Katadyn Ceradyn en Berkefeld reisfilters zijn specifiek ontworpen voor draagbaar gebruik. Alternatieven zijn filterkaarsjes die in een eenvoudige kunststof pot worden geplaatst — licht, goedkoop en betrouwbaar. Kies een absolute poriemaat van 0,2 µm voor gebruik met onbehandeld oppervlakte- of bronwater.',
  },
];

const vergelijkingTabel = [
  {
    type: 'Filterkaars (candle)',
    porie: '0,2–0,9 µm',
    doorstroom: '0,5–2 L/uur',
    kosten: '€10–55',
    onderhoud: 'Schrobben',
    geschikt: 'Universeel inzetbaar',
    highlight: false,
  },
  {
    type: 'Potfilter (gravity)',
    porie: '0,2–0,9 µm',
    doorstroom: '1–4 L/uur',
    kosten: '€30–350',
    onderhoud: 'Schrobben + pot reinigen',
    geschikt: 'Off-grid, gezin, vakantie',
    highlight: false,
  },
  {
    type: 'Keramische schijf (disc)',
    porie: '0,2–0,5 µm',
    doorstroom: '5–15 L/uur',
    kosten: '€30–80/schijf',
    onderhoud: 'Terugspuelen of vervangen',
    geschikt: 'Under-sink druksysteem',
    highlight: false,
  },
  {
    type: 'Samengesteld (keramisch+kool)',
    porie: '0,2–0,9 µm',
    doorstroom: '0,5–2 L/uur',
    kosten: '€25–60',
    onderhoud: 'Schrobben',
    geschikt: 'Beste smaak + bescherming',
    highlight: true,
  },
];

const merkPerType = [
  {
    type: 'Filterkaars',
    merken: ['Doulton (Ultracarb, Sterasyl)', 'Berkefeld (W9, CF)', 'Katadyn (Ceradyn kaars)', 'British Berkefeld'],
  },
  {
    type: 'Potfilter',
    merken: ['British Berkefeld (RVS)', 'Gravity Water (kunststof)', 'Katadyn Ceradyn (10L)', 'Berkefeld filtervat'],
  },
  {
    type: 'Keramische schijf',
    merken: ['Doulton (Ultracarb disc)', 'Aquafilter disc', 'Pentek CC-10 disc'],
  },
  {
    type: 'Samengesteld',
    merken: ['Doulton Ultracarb (keramisch+kool+zilver)', 'Berkefeld CFC (keramisch+kool)', 'ATC Super Sterasyl'],
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Keramisch filter', url: 'https://waterfilterplatform.nl/keramisch-filter' },
  { name: 'Soorten', url: 'https://waterfilterplatform.nl/keramisch-filter/soorten' },
];

export default function KeramischFilterSoortenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Soorten keramische filters: kaars, pot, disc en meer',
          description:
            'Overzicht van alle soorten keramische waterfilters met vergelijkingstabel, combinatiemogelijkheden, merkoverzicht en koopadvies per situatie.',
          datePublished: '2026-03-15',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/keramisch-filter/soorten',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/keramisch-filter" className="hover:text-[#005F8A]">Keramisch filter</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Soorten</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Soorten keramische filters: kaars, pot, disc en meer
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Keramische waterfilters zijn verkrijgbaar in vier hoofdtypen: de filterkaars, de
            potfilter, de keramische schijf en het samengesteld keramisch filter. Elk type heeft
            een andere constructie, doorstroomsnelheid en toepassing. Op deze pagina leest u wat
            elk type is, hoe ze van elkaar verschillen en welk type het beste bij uw situatie past.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~7 min leestijd</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">

        <QuickAnswer answer="Er zijn 4 keramische filtertypes: filterkaars (universeel, €10–55), potfilter/gravity (compleet systeem, €30–350), keramische schijf (voor druksystemen, hogere doorstroom) en samengesteld keramisch (keramisch + koolstof in één kaars voor beste smaak en bescherming). Voor off-grid gebruik kiest u een potfilter; voor dagelijks thuisgebruik een under-sink schijf of samengesteld filter." />

        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#kaars', 'Type 1: Filterkaars (candle filter)'],
              ['#pot', 'Type 2: Potfilter (gravity filter)'],
              ['#disc', 'Type 3: Keramische schijf (disc)'],
              ['#samengesteld', 'Type 4: Samengesteld keramisch'],
              ['#vergelijking', 'Vergelijkingstabel alle types'],
              ['#combinaties', 'Combinaties: keramisch + koolstof'],
              ['#merken', 'Merken per type'],
              ['#koopadvies', 'Koopadvies per situatie'],
              ['#faq', 'Veelgestelde vragen'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#003F5C] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Type 1: Filterkaars */}
        <section id="kaars">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Type 1: Filterkaars (candle filter)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De <strong>keramische filterkaars</strong> is het meest verkochte en meest veelzijdige
            type keramisch filter. Het is een cilindrische, holle keramische kaars — van buiten
            poreus keramiek, van binnen een hol kanaal voor het gefilterde water.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700 mb-4">
            <strong className="text-[#003F5C]">Hoe het werkt:</strong> water stroomt van buiten
            naar binnen door de keramische wand. Deeltjes groter dan de poriediameter worden in
            de wand tegengehouden. Gefilterd water verlaat de kaars via het binnenste kanaal naar
            de schone zijde van het systeem.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="font-semibold text-gray-900 mb-2 text-sm">Voordelen</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {[
                  'Universeel: past in meeste systemen',
                  'Goedkoop in aanschaf (€10–55)',
                  'Reinigbaar en jarenlang herbruikbaar',
                  'Grote keuze aan poriematen (0,2–0,9 µm)',
                  'Zowel voor gravity als druksystemen',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-green-600 font-bold shrink-0 text-xs mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2 text-sm">Beperkingen</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {[
                  'Langzame doorstroom (0,5–2 L/uur)',
                  'Vereist een behuizing of pot',
                  'Breekbaar keramisch materiaal',
                  'Regelmatig schrobben nodig',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-amber-500 font-bold shrink-0 text-xs mt-0.5">~</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            <strong>Aansluitstandaard:</strong> de meeste filterkaarsen gebruiken een M10 of M9
            schroefdraadaansluiting. Berkefeld- en Doulton-kaarsen zijn doorgaans uitwisselbaar.
            Controleer de aansluitspecificaties voor aankoop als u een kaars in een bestaand
            systeem wilt plaatsen.
          </p>
        </section>

        {/* Type 2: Potfilter */}
        <section id="pot">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Type 2: Potfilter (gravity filter)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een <strong>keramische potfilter</strong> — ook wel gravity filter of zwaartekrachtsfilter
            genoemd — is een compleet filtersysteem bestaande uit een bovenste reservoir (ongefiltreerd
            water), één of meerdere filterkaarsen die het schot vormen tussen boven en onder, en een
            onderste reservoir (gefilterd water).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het bovenste reservoir wordt handmatig gevuld. De zwaartekracht drijft het water door
            de filterkaars(en) naar het onderreservoir — zonder stroom, zonder wateraansluiting en
            zonder druk. Een kraan aan het onderreservoir maakt het tappen eenvoudig.
          </p>
          <div className="space-y-3 mb-4">
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1 text-sm">Inhoud en capaciteit</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Potfilters variëren van 5 liter (voor 1–2 personen) tot 20 liter (voor gezinnen
                van 4–6 personen). Systemen met 2–4 filterkaarsen hebben een hogere doorstroom dan
                systemen met één kaars — het dubbele aantal kaarsen geeft ruwweg het dubbele debiet.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1 text-sm">Materiaal: RVS vs kunststof</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                RVS potfilters (€150–350) zijn duurzamer, lichtdicht (remt alggroei) en
                hygiënischer dan kunststof (€30–100). Voor thuisgebruik verdient RVS de voorkeur.
                Voor reizen en camping is een licht kunststof model praktischer.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Potfilters zijn ideaal voor gebruik in vakantiewoningen, off-grid locaties, campings en
            als tijdelijke noodoplossing. Ze zijn ook populair in huishoudens die graag een simpele,
            onderhoudsvriendelijke oplossing willen zonder installatiewerk.
          </p>
        </section>

        {/* Type 3: Schijf */}
        <section id="disc">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Type 3: Keramische schijf (disc filter)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een <strong>keramische schijf</strong> (disc filter) is een platte, ronde keramische
            filtercomponent die wordt gebruikt in under-sink filtersystemen en industriële
            drukfiltersystemen. De platte vorm biedt een groter filteroppervlak bij dezelfde
            diameter vergeleken met een cilindrische kaars, wat resulteert in een significant
            hogere doorstroomsnelheid.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700 mb-4">
            <strong className="text-[#003F5C]">Doorstroomvoordeel:</strong> door het grotere
            oppervlak van een schijf vergeleken met een kaars bij gelijke poriemaat is de
            doorstroomsnelheid 3–5 keer hoger. Dit maakt schijffilters geschikt voor
            gezinsgebruik waarbij meerdere liters per uur nodig zijn. Typische
            doorstroom: 5–15 liter per uur.
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Keramische schijven worden doorgaans gebruikt als één component in een
            multi-stage filtersysteem samen met een koolstoffilter en eventueel een RO-membraan
            of UV-trap. Ze werken onder leidingwaterdruk en zijn niet geschikt voor
            zwaartekrachtsfiltratie.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Onderhoud:</strong> keramische schijven in druksystemen kunnen worden
            teruggespoeld (backwash) om de poriën schoon te maken, of worden periodiek
            vervangen. De levensduur is korter dan die van filterkaarsen in gravity-systemen
            vanwege de hogere waterdruk.
          </p>
        </section>

        {/* Type 4: Samengesteld */}
        <section id="samengesteld">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Type 4: Samengesteld keramisch filter (keramisch + koolstof + zilver)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een <strong>samengesteld keramisch filter</strong> combineert meerdere filtermedia
            in één filterkaars. De meest voorkomende combinatie is een keramische buitenlaag
            met een binnenste laag geactiveerde kool, aangevuld met zilverimpregnatie.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Elke laag heeft een specifieke functie in het filtratieproces:
          </p>
          <div className="space-y-3 mb-6">
            <div className="border-l-4 border-[#005F8A] bg-[#E0F2FE] rounded-r-xl px-5 py-4 text-sm text-gray-700">
              <strong className="text-[#003F5C]">Keramische buitenlaag:</strong> mechanische
              dieptefiltratie van bacteriën (99,99%), protozoa (Giardia, Cryptosporidium),
              sediment en troebelheid. Poriemaat 0,2–0,9 µm.
            </div>
            <div className="border-l-4 border-[#005F8A] bg-[#E0F2FE] rounded-r-xl px-5 py-4 text-sm text-gray-700">
              <strong className="text-[#003F5C]">Zilverimpregnatie:</strong> bacteriostatisch
              effect — doodt bacteriën die in de poriën worden vastgehouden en voorkomt
              biofilmvorming. Verhoogt de microbiologische betrouwbaarheid van het filter.
            </div>
            <div className="border-l-4 border-[#005F8A] bg-[#E0F2FE] rounded-r-xl px-5 py-4 text-sm text-gray-700">
              <strong className="text-[#003F5C]">Binnenste koolstoflaag:</strong> adsorptie van
              chloor (95–99%), trihalomethanen, geurmoleculen en deels pesticiden. Verbetert
              significant de smaak en geur van het gefilterde water.
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Het samengestelde type is de meest complete keramische oplossing voor dagelijks
            thuisgebruik. Het biedt zowel microbiologische bescherming als smaakverbetering
            in één filterkaars. De Doulton Ultracarb is het meest verkochte model in deze
            categorie. Meer informatie over de werking van de keramische filtratie vindt u op de
            pagina{' '}
            <Link href="/keramisch-filter/werking" className="text-[#005F8A] underline hover:no-underline">
              werking keramisch waterfilter
            </Link>.
          </p>
        </section>

        {/* Vergelijkingstabel */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vergelijkingstabel: alle keramische filtertypes</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Poriemaat</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Doorstroom</th>
                  <th className="py-2.5 px-3 font-semibold text-center hidden sm:table-cell">Kosten</th>
                  <th className="py-2.5 px-3 font-semibold text-center hidden sm:table-cell">Onderhoud</th>
                  <th className="py-2.5 px-3 font-semibold text-left hidden md:table-cell">Geschikt voor</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingTabel.map((r) => (
                  <tr
                    key={r.type}
                    className={r.highlight ? 'bg-[#E0F2FE] font-medium border-b border-[#005F8A]/10' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3">
                      {r.type}
                      {r.highlight && (
                        <span className="ml-2 text-xs bg-[#005F8A] text-white px-1.5 py-0.5 rounded">Aanbevolen</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-center text-xs text-[#005F8A] font-medium">{r.porie}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.doorstroom}</td>
                    <td className="py-2.5 px-3 text-center text-xs hidden sm:table-cell">{r.kosten}</td>
                    <td className="py-2.5 px-3 text-center text-xs hidden sm:table-cell">{r.onderhoud}</td>
                    <td className="py-2.5 px-3 text-xs text-gray-600 hidden md:table-cell">{r.geschikt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prijzen zijn richtprijzen voor de Nederlandse markt in 2026. Doorstroomsnelheden zijn
            typische waarden bij normaal water en 0,2 µm poriemaat.
          </p>
        </section>

        {/* Combinaties */}
        <section id="combinaties">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Combinaties: keramisch + geactiveerde kool</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De combinatie van keramische filtratie met een koolstoffilter is de krachtigste
            keramische oplossing voor thuisgebruik. De combinatie kan op twee manieren worden
            gerealiseerd:
          </p>
          <div className="space-y-4 mb-4">
            <div className="border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-2">Samengesteld in één kaars</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Modellen zoals de Doulton Ultracarb en Berkefeld CFC combineren keramische en
                koolstoflagen in één kaars. Voordeel: eenvoudig onderhoud (één kaars vervangen),
                compacte opbouw. Nadeel: de koolstoflaag raakt eerder uitgeput dan de keramische
                laag — u vervangt dan beide tegelijk.
              </p>
            </div>
            <div className="border border-[#005F8A]/20 rounded-2xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-bold text-[#003F5C] mb-2">Twee aparte filtertaken</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                In een multi-stage under-sink systeem plaatst u een keramische filterkaars of
                -schijf als eerste stap (sediment en bacteriën) en een separate koolstoffilterpatroon
                als tweede stap (chloor, smaak). Dit systeem is flexibeler — u kunt beide patronen
                onafhankelijk vervangen. Meer over koolstoffilters als tweede stap leest u op de{' '}
                <Link href="/koolstoffilter" className="text-[#005F8A] underline hover:no-underline">
                  koolstoffilter pagina
                </Link>.
              </p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Wat de combinatie NIET verwijdert:</strong> ook
            keramisch + koolstof verwijdert geen virussen, nitraten, PFAS, zware metalen of kalk.
            Voor volledige zuivering is{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>{' '}
            of een UV-stap nodig.
          </div>
        </section>

        {/* Merken */}
        <section id="merken">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Merken per keramisch filtertype</h2>
          <div className="space-y-4">
            {merkPerType.map(item => (
              <div key={item.type} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-[#003F5C] mb-2 text-sm">{item.type}</p>
                <ul className="flex flex-wrap gap-2">
                  {item.merken.map(merk => (
                    <li key={merk} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{merk}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Koopadvies */}
        <section id="koopadvies">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Koopadvies per situatie</h2>
          <div className="space-y-3">
            {[
              {
                situatie: 'Off-grid, camping of noodsituatie',
                advies: 'Kies een kunststof potfilter (gravity filter) van 5–10 liter met filterkaarsen van 0,2 µm. Lichtgewicht, geen stroom nodig, eenvoudig in gebruik. Katadyn Ceradyn of Gravity Water GWP zijn goede keuzes.',
              },
              {
                situatie: 'Vakantiewoning of buitenverblijf',
                advies: 'Een RVS potfilter (British Berkefeld SS-2F) is de beste langetermijnkeuze. Duurzaam, hygiënisch en bestand tegen lange periodes van stilstand. Eenvoudig schoon te maken voor het vakantieseizoen.',
              },
              {
                situatie: 'Dagelijks thuisgebruik met putwater',
                advies: 'Gebruik een samengesteld keramisch filter (Doulton Ultracarb) in een under-sink systeem. Dit geeft bacteriebescherming + smaakverbetering aan de kraan. Overweeg een UV-stap toe te voegen als virusbescherming gewenst is.',
              },
              {
                situatie: 'Reizen naar ontwikkelingslanden',
                advies: 'Een compacte filterkaars (0,2 µm absoluut) in een lichte kunststof pot. Combineer bij voorkeur met chemische desinfectie (chloor of jodium) voor virusverwijdering — keramisch beschermt niet tegen virussen.',
              },
            ].map(item => (
              <div key={item.situatie} className="bg-white border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-[#003F5C] text-sm mb-1">{item.situatie}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.advies}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-5 leading-relaxed">
            Wilt u een specifiek model kopen? Bekijk onze uitgebreide koopgids op de pagina{' '}
            <Link href="/keramisch-filter/kopen" className="text-[#005F8A] underline hover:no-underline">
              keramisch waterfilter kopen
            </Link>{' '}
            met een gedetailleerde 5-model vergelijking en prijsoverzicht.
          </p>
        </section>

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/keramisch-filter',
                title: 'Keramisch filter overzicht',
                desc: 'Complete gids over keramische waterfilters: werking, soorten en wanneer kiezen.',
              },
              {
                href: '/keramisch-filter/werking',
                title: 'Werking keramisch filter',
                desc: 'Dieptefiltratie, poriënstructuur en zilverimpregnatie technisch uitgelegd.',
              },
              {
                href: '/keramisch-filter/kopen',
                title: 'Keramisch filter kopen',
                desc: 'Koopgids met 5-model vergelijking en advies per situatie.',
              },
              {
                href: '/waterfilter/soorten',
                title: 'Alle waterfiltersoorten',
                desc: 'Vergelijking van alle filtertechnologieën: keramisch, koolstof, UV en osmose.',
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

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keramisch-filter/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Werking keramisch filter</h3>
              <p className="text-sm text-gray-600">Dieptefiltratie, poriënstructuur, zilverimpregnatie en filterbeperkingen uitgelegd.</p>
            </Link>
            <Link href="/filtertechnieken/keramisch" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keramische filtertechniek</h3>
              <p className="text-sm text-gray-600">Hoe werkt keramische filtratie als techniek en wanneer is het de juiste keuze?</p>
            </Link>
            <Link href="/waterfilter/soorten" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Alle waterfiltersoorten</h3>
              <p className="text-sm text-gray-600">Vergelijking van alle filtertechnologieën voor thuisgebruik.</p>
            </Link>
            <Link href="/keramisch-filter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keramisch filter: complete gids</h3>
              <p className="text-sm text-gray-600">Alles over keramische waterfilters: werking, soorten en wanneer kiezen.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over soorten keramische filters
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
