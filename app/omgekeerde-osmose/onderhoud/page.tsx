import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Omgekeerde Osmose Onderhoud: Handleiding 2026',
  description:
    'Compleet onderhoudsschema voor omgekeerde osmose systemen: wanneer vervang je sedimentfilter, koolstoffilter, RO-membraan en post-filter? Kosten, stap-voor-stap handleiding en DIY vs professional.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/onderhoud' },
  openGraph: {
    title: 'Omgekeerde Osmose Onderhoud: Handleiding 2026',
    description:
      'Onderhoudsschema RO-systeem: sedimentfilter (3-6 mnd), koolstoffilter (6-12 mnd), RO-membraan (2-3 jaar), post-filter (12 mnd). Kosten en stap-voor-stap handleiding.',
  },
};

const faqItems = [
  {
    question: 'Hoe vaak moet ik mijn omgekeerde osmose filter vervangen?',
    answer:
      'Een standaard RO-systeem heeft meerdere filters met elk hun eigen interval: sedimentfilter elke 3–6 maanden, koolstof pre-filter elke 6–12 maanden, RO-membraan elke 2–3 jaar, en post-filter (koolstof) jaarlijks. Bij een 4-in-1 geïntegreerd systeem zoals de PureAqua vervang je één filterset per jaar.',
  },
  {
    question: 'Hoe weet ik of mijn RO-membraan aan vervanging toe is?',
    answer:
      'De betrouwbaarste methode is een TDS-meter. Meet het ongefilterde leidingwater en het gefilterde water. Als de TDS-reductie onder de 85% daalt (een nieuw membraan haalt 95–99%), is vervanging nodig. Andere signalen: sterk verminderde flow rate, TDS van gefilterd water boven de 50 ppm, afwijkende smaak, of zichtbare aanslag of verkleuring op het membraan.',
  },
  {
    question: 'Wat kost het onderhoud van een omgekeerde osmose systeem per jaar?',
    answer:
      'Een standaard RO-systeem (4-traps) kost €40–90 per jaar aan filters als je de membraanvervanging uitspreidt over 2–3 jaar. Een 5-traps systeem met UV-lamp kost €60–120 per jaar. De PureAqua 4-in-1 kraan gebruikt één jaarlijkse filterset van circa €80–120 — alles inbegrepen, geen losse componenten.',
  },
  {
    question: 'Kan ik het RO-membraan zelf vervangen?',
    answer:
      'Ja, bij de meeste moderne systemen met quick-connect aansluitingen is membraanvervanging een doe-het-zelf klus van 15–20 minuten. Je hebt geen gereedschap nodig: het membraan klik of draait uit de behuizing. Sluit altijd eerst de watertoevoer af vóór je begint, en laat het systeem na vervanging 30 minuten naspoelen voordat je het gefilterde water drinkt.',
  },
  {
    question: 'Wat is het verschil in onderhoud tussen een los RO-systeem en een 4-in-1 kraan?',
    answer:
      'Een los RO-systeem heeft meerdere losse filters die op verschillende momenten vervangen moeten worden (sediment, pre-koolstof, membraan, post-koolstof). Een geïntegreerd 4-in-1 systeem zoals de PureAqua combineert de filterstappen in één jaarlijkse filterset, zodat je één keer per jaar alles tegelijk vervangt. Dat scheelt planning en verkleint de kans dat je een filter vergeet.',
  },
];

const onderhoudsSchema = [
  {
    component: 'Sedimentfilter (pre-filter)',
    interval: '3–6 maanden',
    kosten: '€ 5–15',
    diy: true,
    toelichting: 'Houdt zand, roest en grove deeltjes tegen. Beschermt het RO-membraan. Eerder vervangen bij harde of troebele watertoevoer.',
  },
  {
    component: 'Koolstof pre-filter (GAC/CTO)',
    interval: '6–12 maanden',
    kosten: '€ 10–25',
    diy: true,
    toelichting: 'Verwijdert chloor, chloraminen en organische stoffen. Beschermt het RO-membraan tegen chlooraanval.',
  },
  {
    component: 'RO-membraan',
    interval: '2–3 jaar',
    kosten: '€ 25–70',
    diy: true,
    toelichting: 'Hart van het systeem: filtert 95–99% van alle opgeloste stoffen. Vervanging op basis van TDS-meting.',
  },
  {
    component: 'Post-filter (koolstof)',
    interval: '12 maanden',
    kosten: '€ 10–20',
    diy: true,
    toelichting: 'Laatste stap: verwijdert eventuele restgeur of -smaak uit het drukvat vóór consumptie.',
  },
  {
    component: 'Tanksanering (drukvat)',
    interval: 'Jaarlijks',
    kosten: '€ 0–20 (DIY)',
    diy: true,
    toelichting: 'Spoel het drukvat door met waterstofperoxide-oplossing om bacteriebiofilm te voorkomen. Vooral belangrijk bij weinig gebruik of lange stilstand.',
  },
];

const membraanSignalen = [
  {
    signaal: 'Stijgende TDS-uitvoer',
    uitleg:
      'TDS-reductie daalt onder de 85% (nieuw membraan: 95–99%). Meet het ongefilterde leidingwater en vergelijk met gefilterd water. TDS van gefilterd water boven de 50 ppm bij normaal Nederlands leidingwater (150–300 ppm) is een duidelijk signaal.',
  },
  {
    signaal: 'Tragere flow rate',
    uitleg:
      'Het drukvat vult zich merkbaar langzamer dan bij installatie. Dit kan wijzen op een verstopt membraan, lage waterdruk, of een verouderd pre-filter dat het membraan extra belast. Controleer eerst de sediment- en koolstoffilters.',
  },
  {
    signaal: 'Zichtbare aanslag of verkleuring',
    uitleg:
      'Bij het verwijderen van het membraan zie je donkerbruine, grijze of groene verkleuring die verder reikt dan normale slijtage. Dit wijst op kalkafzetting, ijzeroxidatie of biologische groei op het membraanoppervlak.',
  },
  {
    signaal: 'Afwijkende smaak of geur',
    uitleg:
      'Bittere, metaalachtige of aardse smaak in het gefilterde water, ook nadat de post-filter recent vervangen is, wijst op een beschadigd of uitgeput membraan dat verontreinigingen doorlaat.',
  },
];

const stappenPlan = [
  'Sluit de koudwatertoevoer naar het RO-systeem af via het afsluitventiel (doorgaans een kwartslag kraan op de toevoerleiding).',
  'Laat het drukvat leeg lopen door de filterkraan open te draaien. Wacht tot er geen water meer uitkomt.',
  'Verwijder de membraanbehuizing. Bij quick-connect systemen: druk de vergrendelknop in en trek de aansluiting eruit. Bij draaibehuizing: draai linksom los.',
  'Trek het oude membraan eruit. Het ziet er donkerbruin of grijs uit — dat is normaal na 2–3 jaar gebruik.',
  'Controleer de O-ring van de behuizing. Is hij ingedroogd, beschadigd of vervormd? Vervang deze dan ook meteen (vaak meegeleverd bij het nieuwe membraan).',
  'Schuif het nieuwe membraan in de behuizing. Let op de richting: de pijlmarkering op het membraan wijst in de richting van de waterstroming.',
  'Sluit de behuizing en zet de watertoevoer weer open. Controleer op lekkages bij alle aansluitingen.',
  'Laat het systeem 30 minuten draaien en gooi het eerste gefilterde water weg. Dit spoelt eventuele conserveringsmiddelen uit het nieuwe membraan.',
  'Meet de TDS van het gefilterde water. Verwacht 5–30 ppm bij normaal Nederlands leidingwater. Is de waarde hoger? Laat het systeem nog 30 minuten doordraaien en meet opnieuw.',
];

const kostenOverzicht = [
  {
    systeem: 'Standaard RO-systeem (4-traps)',
    jaarkosten: '€ 40–90',
    details: 'Sediment + koolstof jaarlijks (€15–40), RO-membraan eens per 2–3 jaar (€25–70 gespreid), post-filter jaarlijks (€10–20).',
    aanbevolen: false,
  },
  {
    systeem: 'RO-systeem met boostpomp (5-traps)',
    jaarkosten: '€ 55–110',
    details: 'Idem + extra koolstoffilter. Boostpomp vereist jaarlijkse controle, extra €15–30 bij professioneel onderhoud.',
    aanbevolen: false,
  },
  {
    systeem: 'PureAqua 4-in-1 kraan (geïntegreerd)',
    jaarkosten: '€ 80–120',
    details: 'Één jaarlijkse filterset. Geen losse componenten, geen verschillende momenten. Eenvoudigst te onderhouden.',
    aanbevolen: true,
  },
];

export default function OsmoseOnderhoudPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Omgekeerde osmose', url: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
          { name: 'Onderhoud', url: 'https://waterfilterplatform.nl/omgekeerde-osmose/onderhoud' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:text-[#005F8A]">Omgekeerde osmose</Link>
            <span className="mx-2">/</span>
            <span>Onderhoud</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Omgekeerde Osmose Onderhoud: Handleiding 2026
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Een omgekeerde osmose systeem levert jarenlang zuiver drinkwater — mits je het op tijd onderhoudt. Elk onderdeel heeft zijn eigen vervangingsinterval. In deze handleiding vind je het volledige onderhoudsschema, signalen dat je RO-membraan aan vervanging toe is, een stap-voor-stap vervangingsgids en een kostenoverzicht per systeemtype.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Waarom onderhoud */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom is onderhoud bij een RO-systeem zo belangrijk?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Omgekeerde osmose is een van de meest effectieve filtermethoden die er bestaat. Het membraan houdt 95–99% van alle opgeloste stoffen tegen: kalk, nitraten, medicijnresten, zware metalen en microplastics. Maar dat membraan heeft grenzen. Na verloop van tijd raken de poriën verstopt, groeit er biologisch materiaal op het filtervlies, of raken de pre-filters zo verzadigd dat ze het membraan niet langer beschermen.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Verwaarlozing heeft twee gevolgen. Ten eerste verslechtert de filterkwaliteit geleidelijk — en dat merk je niet altijd aan de smaak. Alleen een TDS-meter onthult of het membraan nog effectief filtert. Ten tweede slijt het membraan sneller als de pre-filters niet tijdig vervangen worden: chloor uit een uitgeputte koolstoffilter tast het RO-membraan aan en verkort zijn levensduur met maanden of jaren.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800">
              <strong>Belangrijk:</strong> De opgegeven intervallenin deze handleiding zijn gebaseerd op gemiddeld gebruik (4 personen, 3–4 liter gefilterd water per dag) en normaal Nederlands leidingwater. Woon je in een regio met hard water (hardheid boven 20 °dH, zoals Brabant of Zeeland), vervang de sedimentfilter dan eerder. Controleer de <Link href="/waterhardheid" className="underline hover:text-amber-900">waterhardheid per gemeente</Link> om te weten wat jouw lokale waterkwaliteit is.
            </p>
          </div>
        </section>

        {/* Onderhoudsschema tabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-2">Onderhoudsschema omgekeerde osmose systeem</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Een standaard RO-systeem bestaat uit meerdere filterstappen die elk hun eigen levensduur hebben. Hieronder het volledige schema:
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-[#005F8A] text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Component</th>
                  <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Interval</th>
                  <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Kosten</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Toelichting</th>
                </tr>
              </thead>
              <tbody>
                {onderhoudsSchema.map((r, i) => (
                  <tr key={r.component} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.component}</td>
                    <td className="px-4 py-3 text-[#005F8A] font-semibold whitespace-nowrap">{r.interval}</td>
                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{r.kosten}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs hidden sm:table-cell">{r.toelichting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Kosten zijn richtprijzen voor losse filterpatronen. Geïntegreerde filterse voor 4-in-1 systemen hebben een vaste jaarprijs.
          </p>
        </section>

        {/* Signalen membraan */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Signalen dat het RO-membraan aan vervanging toe is</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Het RO-membraan is het duurste en meest kritieke onderdeel van een osmosesysteem. Anders dan sediment- of koolstoffilters geeft een uitgeput membraan niet altijd een duidelijk visueel signaal. Dit zijn de vier belangrijkste indicatoren:
          </p>
          <div className="space-y-4">
            {membraanSignalen.map((item) => (
              <div key={item.signaal} className="border border-gray-100 rounded-xl p-4 bg-white">
                <div className="flex items-start gap-3">
                  <span className="text-amber-500 shrink-0 mt-0.5 text-lg">⚠</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{item.signaal}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.uitleg}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-[#E0F2FE] rounded-xl p-4">
            <p className="text-sm text-[#003F5C]">
              <strong>Tip: gebruik een TDS-meter.</strong> Dit is de betrouwbaarste manier om de prestaties van je RO-membraan te monitoren. Een goede TDS-meter kost €10–20 en geeft direct inzicht in de filterkwaliteit. Meet maandelijks en noteer de waarden. Meer over TDS en wat de getallen betekenen lees je op onze{' '}
              <Link href="/kennisbank/osmose-membraan-levensduur" className="text-[#005F8A] hover:underline">pagina over de levensduur van een osmosemembraan</Link>.
            </p>
          </div>
        </section>

        {/* Stap-voor-stap handleiding */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-2">RO-filter vervangen: stap-voor-stap handleiding</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Bij de meeste moderne omgekeerde osmose systemen met quick-connect aansluitingen is het vervangen van filters een doe-het-zelf klus van 15–30 minuten. Je hebt geen gereedschap nodig voor de meeste onderdelen. Onderstaande stappen gelden voor het vervangen van het RO-membraan; de pre- en post-filters volgen hetzelfde principe maar zijn nog eenvoudiger.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <p className="text-sm text-red-800">
              <strong>Veiligheidsnoot:</strong> Sluit altijd eerst de watertoevoer af voordat je begint. Dit voorkomt waterlekkage en geeft je de kans om rustig en droog te werken. Bij systemen met boostpomp: zet ook de stroom uit voordat je aan het membraan of de pomp werkt.
            </p>
          </div>
          <ol className="space-y-4">
            {stappenPlan.map((stap, i) => (
              <li key={i} className="flex items-start gap-4 text-sm text-gray-600">
                <span className="bg-[#005F8A] text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{stap}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6 bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-600">
              Meer gedetailleerde instructies, inclusief foto&apos;s en systeem-specifieke handleidingen, vind je op onze{' '}
              <Link href="/kennisbank/osmose-membraan-vervangen" className="text-[#005F8A] hover:underline">kennisbank: osmose membraan vervangen</Link>.
            </p>
          </div>
        </section>

        {/* Kostenover zicht */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderhoudskosten per jaar per systeemtype</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            De jaarlijkse onderhoudskosten variëren sterk afhankelijk van het systeem. Goedkopere systemen hebben soms dure losse filters die op verschillende momenten vervangen moeten worden, terwijl een geïntegreerd systeem alles in één jaarlijkse filterset bundelt.
          </p>
          <div className="space-y-4">
            {kostenOverzicht.map((k) => (
              <div
                key={k.systeem}
                className={`rounded-2xl border p-5 ${k.aanbevolen ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900">{k.systeem}</h3>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-[#005F8A]">{k.jaarkosten}</p>
                    {k.aanbevolen && (
                      <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full">Aanbevolen</span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600">{k.details}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-[#E0F2FE] rounded-xl p-4">
            <p className="text-sm text-[#003F5C]">
              <strong>Total Cost of Ownership:</strong> Reken bij het vergelijken altijd de kosten over 3 jaar. Een instapsysteem van €150 met filterkosten van €80 per jaar kost na 3 jaar €390. Een PureAqua 4-in-1 kraan van €799 met filterkosten van €100 per jaar kost na 3 jaar €1.099 — maar levert dan ook kokend, koud, warm en bruisend osmosewater. Meer over aanschafopties vind je op onze pagina{' '}
              <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline">osmose filter kopen</Link>.
            </p>
          </div>
        </section>

        {/* 4-in-1 geïntegreerd onderhoud */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderhoud van geïntegreerde 4-in-1 systemen</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Geïntegreerde systemen zoals de PureAqua 4-in-1 kraan combineren alle filterstappen in één compacte unit. Het onderhoudsschema is daardoor aanzienlijk eenvoudiger dan bij een los RO-systeem met meerdere losse filterbehuizingen.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-gray-800 mb-3">Los RO-systeem</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 shrink-0 mt-0.5">•</span>
                  Sedimentfilter: elke 3–6 maanden
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 shrink-0 mt-0.5">•</span>
                  Koolstof pre-filter: elke 6–12 maanden
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 shrink-0 mt-0.5">•</span>
                  RO-membraan: elke 2–3 jaar
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 shrink-0 mt-0.5">•</span>
                  Post-filter: jaarlijks
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 shrink-0 mt-0.5">•</span>
                  Tanksanering: jaarlijks
                </li>
                <li className="flex items-start gap-2 font-medium text-gray-700 pt-2 border-t border-gray-200">
                  <span className="shrink-0">→</span>
                  3–5 onderhoudsmomenten per jaar
                </li>
              </ul>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-5 border border-[#005F8A]/20">
              <h3 className="font-bold text-[#003F5C] mb-3">PureAqua 4-in-1 (geïntegreerd)</h3>
              <ul className="space-y-2 text-sm text-[#003F5C]">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                  Één jaarlijkse filterset — alles in één
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                  Geen losse filterbehuizingen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                  Geen tanksanering nodig (tankloze design)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                  Vervanging in 10–15 minuten
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                  Minder kans op vergeten filterwissel
                </li>
                <li className="flex items-start gap-2 font-medium text-[#003F5C] pt-2 border-t border-[#005F8A]/20">
                  <span className="shrink-0">→</span>
                  1 onderhoudsmoment per jaar
                </li>
              </ul>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Het tankloze ontwerp van geïntegreerde 4-in-1 systemen elimineert ook het risico op bacteriebiofilm in een drukvat — een van de grotere hygiënische risico&apos;s bij klassieke RO-tanksystemen. Water wordt on demand gefilterd en niet opgeslagen, waardoor de versheid en hygiëne gewaarborgd zijn. Meer details over het verschil in aanschaf en specificaties lees je op de pagina{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline">osmose filter kopen</Link>.
          </p>
        </section>

        {/* DIY vs Professional */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Zelf onderhouden of professional inschakelen?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            De meeste onderhoudstaken voor een omgekeerde osmose systeem zijn goed zelf te doen. Fabrikanten ontwerpen moderne systemen bewust voor zelfonderhoud: filters klikken of draaien eruit zonder gereedschap.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-800 mb-2 text-sm">Goed zelf te doen</h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">✓</span>
                  Sedimentfilter vervangen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">✓</span>
                  Koolstof pre-filter vervangen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">✓</span>
                  Post-filter vervangen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">✓</span>
                  RO-membraan vervangen (quick-connect)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">✓</span>
                  TDS meten en bijhouden
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">✓</span>
                  Drukvat naspoelen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">✓</span>
                  Visuele inspectie leidingen en verbindingen
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-800 mb-2 text-sm">Professional aanbevolen</h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 shrink-0">!</span>
                  Boostpomp onderhoud of vervanging
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 shrink-0">!</span>
                  4-in-1 kraan boiler inspectie
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 shrink-0">!</span>
                  Leidingwerk aanpassen of verzetten
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 shrink-0">!</span>
                  Drukvat desinfectie bij ernstige bacteriebesmetting
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 shrink-0">!</span>
                  Membraanbehuizing met oudere schroefdraadkoppelingen
                </li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Professioneel onderhoud kost doorgaans €60–120 per bezoek. Voor de meeste filtercomponenten is dat niet nodig: een jaarlijkse filterwissel doe je in 10–20 minuten zelf. Bredere informatie over waterfilter onderhoud in het algemeen vind je op onze{' '}
            <Link href="/kennisbank/waterfilter-onderhoud" className="text-[#005F8A] hover:underline">kennisbank pagina waterfilter onderhoud</Link>.
          </p>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Meer lezen */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose: hoe werkt het?' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose filter kopen: beste keuze 2026' },
              { href: '/kennisbank/osmose-membraan-vervangen', label: 'Osmose membraan vervangen: handleiding' },
              { href: '/kennisbank/waterfilter-onderhoud', label: 'Waterfilter onderhoud: algemene tips' },
              { href: '/kennisbank/osmose-membraan-levensduur', label: 'Levensduur van een osmosemembraan' },
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over omgekeerde osmose onderhoud</h2>
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

        {/* Samenvatting */}
        <section className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-[#003F5C] mb-3">Samenvatting: RO-onderhoud in het kort</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Een omgekeerde osmose systeem vraagt om regelmatig, maar eenvoudig onderhoud. Vervang de sedimentfilter elke 3–6 maanden, de koolstof pre-filter elke 6–12 maanden, de post-filter jaarlijks en het RO-membraan elke 2–3 jaar op basis van TDS-metingen. Saneer het drukvat jaarlijks om bacteriebiofilm te voorkomen.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Wil je het onderhoud maximaal vereenvoudigen? De{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline">PureAqua 4-in-1 kraan</Link>{' '}
            brengt alle filterstappen terug naar één jaarlijkse filterset. Geen losse componenten, geen planning, geen risico op vergeten filterwissel. En door het tankloze ontwerp ook geen risico op bacteriebiofilm in een drukvat.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Meer specifieke informatie over het vervangen van het membraan vind je op{' '}
            <Link href="/kennisbank/osmose-membraan-vervangen" className="text-[#005F8A] hover:underline">osmose membraan vervangen</Link>, en over de verwachte levensduur op{' '}
            <Link href="/kennisbank/osmose-membraan-levensduur" className="text-[#005F8A] hover:underline">levensduur osmosemembraan</Link>.
          </p>
        </section>
      </div>
    </>
  );
}
