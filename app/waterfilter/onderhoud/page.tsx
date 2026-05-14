import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterfilter Onderhoud: Complete Handleiding 2026',
  description:
    'Alles over waterfilter onderhoud: onderhoudsschema per filtertype, signalen van een verouderd filter, kosten en hygiënerisico\'s van verwaarlozing. Complete handleiding 2026.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/onderhoud' },
  openGraph: {
    title: 'Waterfilter Onderhoud: Complete Handleiding 2026',
    description:
      'Wanneer moet je een waterfilter vervangen? Onderhoudsschema per filtertype (actief koolstof, RO, UV, sediment), kosten en risico\'s bij verwaarlozing.',
  },
};

const faqItems = [
  {
    question: 'Hoe vaak moet ik mijn waterfilter vervangen?',
    answer:
      'Dit hangt af van het filtertype: een sedimentfilter vervang je elke 3–6 maanden, een actief koolstoffilter elke 6–12 maanden, een RO-membraan elke 2–3 jaar, en een UV-lamp jaarlijks. Volg altijd de instructies van de fabrikant en pas de frequentie aan op je waterverbruik en lokale waterkwaliteit.',
  },
  {
    question: 'Wat zijn de risico\'s als ik mijn waterfilter niet verwissel?',
    answer:
      'Een verouderd filter kan meer schade aanrichten dan geen filter. Een uitgeputte actief koolstoffilter laat gebonden verontreinigingen weer los (desorptie). Een vervuild sedimentfilter kan bacteriën herbergen en het stromende water besmetten. Een RO-membraan met bacteriebiofilm laat pathogenen door die zonder filter nooit aanwezig zouden zijn.',
  },
  {
    question: 'Kan ik mijn waterfilter zelf onderhouden?',
    answer:
      'Ja, de meeste filterwissel is een doe-het-zelf klus van 5–15 minuten. Filterpatronen click of draaien er meestal gewoon uit. UV-lampen vereisen iets meer precisie maar zijn goed te doen met de handleiding. Professioneel onderhoud is aan te raden bij RO-systemen met boostpomp, 4-in-1 kranen met heet-water-boiler, en systemen waarbij leidingen worden doorgesneden.',
  },
  {
    question: 'Hoeveel kost waterfilter onderhoud per jaar?',
    answer:
      'Een eenvoudig koolstoffilter verwissel je voor €15–30 per jaar. Een RO-systeem kost €40–120 per jaar aan filters (sediment + koolstof + membraan eens per 2–3 jaar). Een UV-lamp kost €20–50 per jaar. Een 4-in-1 kraan met osmose gebruikt één jaarlijkse filterset van circa €80–120.',
  },
  {
    question: 'Hoe weet ik of mijn RO-membraan aan vervanging toe is?',
    answer:
      'De betrouwbaarste methode is een TDS-meter: meet de TDS van het ongefilterde leidingwater en van het gefilterde water. Als de reductie onder de 85% daalt (was 95–99% bij een nieuw membraan), is vervanging nodig. Andere signalen: verminderde flow rate, slechte smaak of geur, en een TDS van gefilterd water boven de 50 ppm bij normaal Nederlands leidingwater.',
  },
];

const filterTypes = [
  {
    naam: 'Sedimentfilter',
    beschrijving: 'Houdt zand, roest, zwevende deeltjes en grove verontreinigingen tegen. Vaak de eerste stap in een meertraps systeem.',
    vervangInterval: '3–6 maanden',
    signalen: [
      'Zichtbaar bruin of grijs verkleurd filterpatroon',
      'Verminderde waterdruk of flow rate',
      'Troebel water bij de kraan',
    ],
    kosten: '€ 5–15 per patroon',
    diy: true,
    risicoBijVerwaarlozing: 'Verstopt filter blokkeert doorstroming en verhoogt de druk op het RO-membraan, wat leidt tot vroegtijdige slijtage.',
  },
  {
    naam: 'Actief koolstoffilter (GAC/CTO)',
    beschrijving: 'Adsorbeert chloor, chloraminen, pesticiden, geur- en smaakstoffen. Essentieel als pre-filter voor een RO-membraan.',
    vervangInterval: '6–12 maanden',
    signalen: [
      'Chloorlucht of smaak terug in het water',
      'Gele of bruine verkleuring van het filterpatroon',
      'Afwijkende geur na het filter',
    ],
    kosten: '€ 10–30 per patroon',
    diy: true,
    risicoBijVerwaarlozing: 'Een uitgeput koolstoffilter kan geadsorbeerde stoffen teruggeven aan het water (desorptie). Beschermt bovendien het RO-membraan niet meer tegen chloor, wat het membraan beschadigt.',
  },
  {
    naam: 'RO-membraan (omgekeerde osmose)',
    beschrijving: 'Het hart van een osmosesysteem. Houdt 95–99% van alle opgeloste stoffen tegen: kalk, nitraten, medicijnresten, zware metalen en microplastics.',
    vervangInterval: '2–3 jaar',
    signalen: [
      'TDS-reductie daalt onder de 85%',
      'Gefilterd water TDS boven de 50 ppm',
      'Sterk verminderde flow rate',
      'Afwijkende smaak of geur in gefilterd water',
    ],
    kosten: '€ 25–70 per membraan',
    diy: true,
    risicoBijVerwaarlozing: 'Beschadigd membraan laat verontreinigingen door die bij normaal gebruik geblokkeerd zouden worden. Bacteriebiofilm op het membraan kan een bron van pathogenen worden.',
  },
  {
    naam: 'UV-lamp',
    beschrijving: 'Bestrijdt bacteriën, virussen en parasieten met ultraviolet licht. Effectief als laatste stap vóór het tapwater, ook wanneer het RO-membraan een kleine lek heeft.',
    vervangInterval: '12 maanden (lamp verliest geleidelijk intensiteit)',
    signalen: [
      'Indicatielampje van UV-systeem brandt rood',
      'Verminderde UV-intensiteit op UV-meter',
      'Na 12 maanden gebruik, ook zonder zichtbare gebreken',
    ],
    kosten: '€ 20–50 per lamp',
    diy: false,
    risicoBijVerwaarlozing: 'Een verouderde UV-lamp levert te weinig UV-dosis voor effectieve desinfectie. Water lijkt gefilterd maar is microbiologisch niet veilig.',
  },
];

const onderhoudstaken = [
  { frequentie: 'Maandelijks', taak: 'Visuele inspectie van filterbehuizingen op lekkages of verkleuring' },
  { frequentie: 'Maandelijks', taak: 'TDS-meting van gefilterd water bij osmosesystemen' },
  { frequentie: 'Elk kwartaal', taak: 'Sedimentfilter controleren en vervangen indien nodig' },
  { frequentie: 'Halfjaarlijks', taak: 'Actief koolstoffilter vervangen' },
  { frequentie: 'Jaarlijks', taak: 'UV-lamp vervangen (na 12 maanden gebruik)' },
  { frequentie: 'Jaarlijks', taak: 'Post-koolstoffilter vervangen (osmosesystemen)' },
  { frequentie: 'Elke 2–3 jaar', taak: 'RO-membraan vervangen op basis van TDS-meting' },
  { frequentie: 'Elke 2–3 jaar', taak: 'Drukvat spoelen en controleren op bacteriebiofilm (tanksystemen)' },
];

const kostenPerType = [
  {
    systeem: 'Eenvoudig koolstoffilter',
    jaarkosten: '€ 15–30',
    details: 'Één filterpatroon per jaar. Laagste onderhoudskosten.',
  },
  {
    systeem: 'Sediment + koolstof (2-traps)',
    jaarkosten: '€ 25–55',
    details: 'Sedimentfilter 2x per jaar + koolstoffilter 1x per jaar.',
  },
  {
    systeem: 'RO-systeem (4-traps)',
    jaarkosten: '€ 40–90',
    details: 'Sediment + koolstof jaarlijks; RO-membraan eens per 2–3 jaar (€25–70 gespreid).',
  },
  {
    systeem: 'RO + UV (5-traps)',
    jaarkosten: '€ 60–120',
    details: 'Alle bovenstaande filters + UV-lamp vervanging (€20–50 per jaar).',
  },
  {
    systeem: '4-in-1 kraan met osmose',
    jaarkosten: '€ 80–120',
    details: 'Één jaarlijkse filterset. Geen losse filters; alles inbegrepen. Eenvoudigst te onderhouden.',
  },
];

export default function WaterfilterOnderhoudPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          { name: 'Onderhoud', url: 'https://waterfilterplatform.nl/waterfilter/onderhoud' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:text-[#005F8A]">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>Onderhoud</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter Onderhoud: Complete Handleiding 2026
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Een waterfilter is geen set-and-forget apparaat. Elk filtertype heeft zijn eigen onderhoudsschema, vervangingsinterval en risico&apos;s bij verwaarlozing. In deze handleiding lees je precies wanneer je welk filter moet vervangen, wat het kost en wat de hygiënische gevolgen zijn als je het te lang uitstelt.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Introductie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom is waterfilter onderhoud zo belangrijk?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Een waterfilter werkt door verontreinigingen op te vangen of te blokkeren. Na verloop van tijd raken filters verzadigd of beschadigd — en op dat moment beschermen ze je drinkwater niet meer. Erger nog: een volledig uitgeput actief koolstoffilter kan gebonden verontreinigingen teruggeven aan het water, wat het water slechter maakt dan onefilterd leidingwater.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Regelmatig onderhoud garandeert niet alleen de zuiveringsprestaties van je filter, maar beschermt ook de kostbaardere onderdelen. Een vuile sedimentfilter verhoogt de druk op een RO-membraan en verkort zijn levensduur aanzienlijk. Een tijdige filterwissel van €10 kan voorkomen dat je een RO-membraan van €50 eerder moet vervangen.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800">
              <strong>Belangrijk:</strong> Fabrikanten geven onderhoudsintervallen op basis van gemiddeld gebruik en water kwaliteit. Als je in een regio woont met hard water (zoals Brabant, hardheid 20–30 °dH), kunnen sediment- en koolstoffilters sneller verslijten dan aangegeven. Controleer je filters vaker als je merkt dat de flow rate afneemt.
            </p>
          </div>
        </section>

        {/* Onderhoudsschema per filtertype */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-2">Onderhoudsschema per filtertype</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Elk filtertype heeft zijn eigen levensduur en onderhoudsbehoefte. Hieronder een gedetailleerd overzicht van de vier meest voorkomende filtertypes in Nederlandse huishoudens.
          </p>
          <div className="space-y-6">
            {filterTypes.map((filter) => (
              <div key={filter.naam} className="border border-gray-100 rounded-2xl p-5 bg-white">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{filter.naam}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{filter.beschrijving}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="text-xs bg-[#E0F2FE] text-[#005F8A] font-semibold px-2 py-1 rounded-lg block mb-1">
                      {filter.vervangInterval}
                    </span>
                    <span className="text-xs text-gray-500">{filter.kosten}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Signalen dat vervanging nodig is:</p>
                  <ul className="space-y-1">
                    {filter.signalen.map((s) => (
                      <li key={s} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-amber-500 shrink-0 mt-0.5">⚠</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full shrink-0 ${filter.diy ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                    {filter.diy ? 'DIY mogelijk' : 'Professional aanbevolen'}
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <strong>Risico bij verwaarlozing:</strong> {filter.risicoBijVerwaarlozing}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Onderhoudskalender */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Praktisch onderhoudsschema: wanneer doe je wat?</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Een goed waterfilter onderhoud begint met een vaste routine. Sla dit schema op of zet herinneringen in je agenda:
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-[#005F8A] text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Frequentie</th>
                  <th className="text-left px-4 py-3 font-semibold">Onderhoudstaak</th>
                </tr>
              </thead>
              <tbody>
                {onderhoudstaken.map((t, i) => (
                  <tr key={t.taak} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-[#005F8A] whitespace-nowrap">{t.frequentie}</td>
                    <td className="px-4 py-3 text-gray-700">{t.taak}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Signalen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Signalen dat een filter vervanging nodig heeft</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Niet alle filters veranderen van kleur of geven een duidelijk signaal wanneer ze uitgeput zijn. Sommige filters zien er uitwendig nog goed uit terwijl ze al lang niet meer effectief filteren. Dit zijn de belangrijkste signalen om op te letten:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                signaal: 'Verminderde waterdruk of flow rate',
                uitleg: 'Een verstopte sedimentfilter of koolstoffilter vermindert de doorstroom. Als je merkt dat het water langzamer uit de filterkraan komt, is een filterwissel de eerste stap.',
              },
              {
                signaal: 'Chloor- of chemische geur',
                uitleg: 'Als je chloor ruikt in gefilterd water, is de koolstoffilter uitgeput. Dit is het duidelijkste signaal voor de meest voorkomende huishoudfilters.',
              },
              {
                signaal: 'Afwijkende smaak',
                uitleg: 'Metaalachtige, bittere of aardse smaak na het filter wijst op een uitgeputte of beschadigde filter. Dit kan ook op een beschadigd RO-membraan wijzen.',
              },
              {
                signaal: 'Hoge TDS-waarde (osmosesystemen)',
                uitleg: 'Meet maandelijks de TDS van je gefilterd water. Stijgt de waarde boven de 50 ppm, of daalt de reductie onder de 85%, dan is het RO-membraan aan vervanging toe.',
              },
              {
                signaal: 'Rood indicatielampje (UV-systemen)',
                uitleg: 'UV-systemen hebben doorgaans een indicator die rood gaat als de lamp te zwak is. Negeer dit signaal nooit — het water wordt dan niet meer desinfecteerd.',
              },
              {
                signaal: 'Troebel of verkleurd water',
                uitleg: 'Troebel water na de filter wijst op een beschadigde of volledig verstopte sedimentfilter. In ernstige gevallen kan dit ook wijzen op een lekkend filtermembraan.',
              },
            ].map((item) => (
              <div key={item.signaal} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1 text-sm">{item.signaal}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.uitleg}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIY vs Professional */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Zelf onderhouden of een professional inschakelen?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            De meeste waterfilter onderhoudstaken zijn goed zelf te doen, ook zonder technische kennis. Filters draaien of klikken eruit en erin; de meeste fabrikanten leveren duidelijke instructies mee.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-800 mb-2">Goed te doen zelf</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span> Sedimentfilter vervangen</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span> Actief koolstoffilter vervangen</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span> Post-koolstoffilter vervangen</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span> RO-membraan vervangen (bij quick-connect systemen)</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span> TDS meten en bijhouden</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span> Visuele inspectie leidingen en behuizingen</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-800 mb-2">Professional aanbevolen</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-orange-500 shrink-0">!</span> UV-lamp vervangen (elektrische component)</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 shrink-0">!</span> Boostpomp onderhoud of vervanging</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 shrink-0">!</span> 4-in-1 kraan heet-water-boiler onderhoud</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 shrink-0">!</span> Leidingwerk aanpassen of verzetten</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 shrink-0">!</span> Drukvat desinfectie (ernstige bacteriebesmetting)</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Professioneel onderhoud kost doorgaans €60–120 per bezoek. Voor de meeste huishoudfilters is dat niet nodig: een jaarlijkse filterwissel doe je in 10–15 minuten zelf. Meer info vind je op onze{' '}
            <Link href="/kennisbank/waterfilter-onderhoud" className="text-[#005F8A] hover:underline">kennisbank pagina over waterfilter onderhoud</Link>.
          </p>
        </section>

        {/* Kosten */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kosten van waterfilter onderhoud per jaar</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            De jaarlijkse onderhoudskosten variëren sterk per systeem. Goedkope instapmodellen hebben soms duurde losse filters, terwijl premiumsystemen juist alles in één set hebben. Hieronder een overzicht van de verwachte jaarlijkse kosten:
          </p>
          <div className="space-y-3">
            {kostenPerType.map((k) => (
              <div key={k.systeem} className="border border-gray-100 rounded-xl p-4 bg-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-gray-800 text-sm">{k.systeem}</span>
                  <span className="font-bold text-[#005F8A] text-sm shrink-0 ml-2">{k.jaarkosten}</span>
                </div>
                <p className="text-xs text-gray-500">{k.details}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-[#E0F2FE] rounded-xl p-4">
            <p className="text-sm text-[#003F5C]">
              <strong>Tip:</strong> Reken altijd de Total Cost of Ownership (TCO) over 3 jaar. Een goedkoop instapfilter van €80 met filterkosten van €60 per jaar kost je na drie jaar meer dan een kwalitatief systeem van €200 met filterkosten van €30 per jaar.
            </p>
          </div>
        </section>

        {/* Hygiënerisico's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hygiënerisico&apos;s van verwaarloosde waterfilters</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            De gevaren van een verwaarloosd waterfilter worden vaak onderschat. Het meest bekende risico is dat het filter simpelweg minder goed filtert — maar in sommige gevallen is het water na een uitgeput filter actief schadelijker dan onefilterd leidingwater.
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-red-400 pl-4">
              <h3 className="font-bold text-gray-900 mb-1">Bacteriebiofilm in het drukvat</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Tanksystemen (met drukvat) kunnen bij langdurig stilstand of verwaarloosd onderhoud bacteriebiofilm ontwikkelen. Het drukvat is een perfecte broedplaats: donker, warm en vochtig. Bacteriën zoals Legionella, Pseudomonas en E. coli zijn aangetoond in verwaarloosde drukvaten. Spoel het drukvat ten minste één keer per jaar door.
              </p>
            </div>
            <div className="border-l-4 border-orange-400 pl-4">
              <h3 className="font-bold text-gray-900 mb-1">Desorptie van koolstoffilters</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Een uitgeputte actief koolstoffilter slaat vol met opgenomen stoffen. Bij overmatige belasting kan het filter beginnen met het teruggeven van eerder gebonden stoffen aan het doorstromende water. Dit verschijnsel heet desorptie. Het water dat uit zo&apos;n filter komt bevat dan meer chloor, pesticiden of organische stoffen dan leidingwater dat nooit gefilterd is.
              </p>
            </div>
            <div className="border-l-4 border-amber-400 pl-4">
              <h3 className="font-bold text-gray-900 mb-1">Beschadigd RO-membraan</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Een RO-membraan dat niet tijdig vervangen wordt, ontwikkelt beschadigingen in het filtervlies. Kleine poriën worden groter door langdurige druk en chemische belasting. Het membraan geeft dan de indruk te werken (water stroomt door, filter ziet er intact uit), maar laat steeds meer verontreinigingen door. Alleen een TDS-meting onthult dit probleem.
              </p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h3 className="font-bold text-gray-900 mb-1">Inadequate UV-desinfectie</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Een verouderde UV-lamp levert een te lage UV-dosis. Bacteriën, virussen en cystes (zoals Cryptosporidium en Giardia) worden niet meer volledig geïnactiveerd. Het systeem lijkt te werken (de lamp brandt nog), maar de desinfectie-effectiviteit is ernstig verminderd. Wissel UV-lampen altijd na maximaal 12 maanden gebruik, ongeacht of ze nog branden.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-red-50 border border-red-100 rounded-xl p-4">
            <p className="text-sm text-red-800">
              <strong>Conclusie:</strong> Een filter dat niet tijdig vervangen wordt beschermt je niet alleen slechter — het kan actief schadelijk zijn. Stel filtervervanging nooit langer dan 3 maanden uit na het aanbevolen interval.
            </p>
          </div>
        </section>

        {/* RO-membraan vervangen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Osmosemembraan vervangen: stap voor stap</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Het RO-membraan is het duurste en meest kritieke onderdeel van een osmosesysteem. Gelukkig is vervanging bij de meeste moderne systemen een kwestie van klikken en draaien — geen gereedschap nodig.
          </p>
          <ol className="space-y-3">
            {[
              'Sluit de toevoer van koud water naar het osmosesysteem af via het afsluitventiel.',
              'Laat het drukvat leeg lopen door de filterkraan open te draaien totdat er geen water meer uitkomt.',
              'Draai of klik de membraanbehuizing open (bij quick-connect systemen: knop indrukken en trekken).',
              'Verwijder het oude membraan. Het ziet er donkerbruin of grijzig uit — dit is normaal.',
              'Controleer de O-ring van de behuizing op slijtage. Vervang deze als hij beschadigd of ingedroogd is.',
              'Schuif het nieuwe membraan in de behuizing (let op de richting: de pijlmarkering wijst in de waterstroomrichting).',
              'Sluit de behuizing en zet de watertoevoer weer open.',
              'Laat het systeem 30 minuten draaien en gooi het eerste gefilterde water weg (naspoelen van het nieuwe membraan).',
              'Meet de TDS van het gefilterde water. Verwacht 5–25 ppm bij normaal Nederlands leidingwater.',
            ].map((stap, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="bg-[#005F8A] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {stap}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-gray-500">
            Meer gedetailleerde instructies vind je op onze{' '}
            <Link href="/kennisbank/osmose-membraan-vervangen" className="text-[#005F8A] hover:underline">kennisbank pagina: osmose membraan vervangen</Link>.
          </p>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Meer lezen */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterfilter', label: 'Waterfilter overzicht en vergelijking' },
              { href: '/kennisbank/waterfilter-onderhoud', label: 'Kennisbank: waterfilter onderhoud tips' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose filter kopen: beste keuze 2026' },
              { href: '/kennisbank/osmose-membraan-vervangen', label: 'Osmose membraan vervangen: handleiding' },
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over waterfilter onderhoud</h2>
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
          <h2 className="text-xl font-bold text-[#003F5C] mb-3">Samenvatting: waterfilter onderhoud in het kort</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Regelmatig onderhoud is de sleutel tot effectief en veilig gefilterd drinkwater. Vervang sedimentfilters elke 3–6 maanden, koolstoffilters elke 6–12 maanden, UV-lampen jaarlijks en RO-membranen elke 2–3 jaar. Meet maandelijks de TDS van je gefilterd water als je een osmosesysteem hebt.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Wil je het onderhoud zo eenvoudig mogelijk houden? De{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline">Een 4-in-1 kraan met osmose</Link> gebruikt één jaarlijkse filterset — geen losse componenten, één moment per jaar, klaar. Ideaal voor drukke huishoudens die gewoon schoon water willen zonder gedoe.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Heb je vragen over jouw specifieke systeem? Raadpleeg onze{' '}
            <Link href="/kennisbank/waterfilter-onderhoud" className="text-[#005F8A] hover:underline">kennisbank</Link> of bekijk de{' '}
            <Link href="/kennisbank/osmose-membraan-vervangen" className="text-[#005F8A] hover:underline">stap-voor-stap handleiding voor het vervangen van een osmosemembraan</Link>.
          </p>
        </section>
      </div>
    </>
  );
}
