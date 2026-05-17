import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter voor koffiezetter: betere smaak, minder kalk (2026)',
  description:
    'Welk waterfilter past bij jouw koffiezetapparaat? Vergelijk interne machinefilters, filterkannen, koolstoffilters en omgekeerde osmose.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/koffiezetter' },
  openGraph: {
    title: 'Waterfilter voor koffiezetter: betere smaak, minder kalk (2026)',
    description:
      'Welk waterfilter past bij jouw koffiezetapparaat? Vergelijk interne machinefilters, filterkannen, koolstoffilters en omgekeerde osmose.',
    url: 'https://waterfilterplatform.nl/waterfilter/koffiezetter',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Welk waterfilter is het beste voor een koffiezetapparaat?',
    answer:
      'Het beste filter hangt af van jouw waterkwaliteit en koffieapparaat. Voor espressomachines is gefilterd water met een TDS van 150–250 mg/L ideaal. Een interne machinefilter (zoals AquaClean bij De\'Longhi of Philips) verlengt de levensduur. Voor maximale smaakverfijning en kalkbescherming is een omgekeerde-osmosefilter met remineralisatiepatroon de beste keuze.',
  },
  {
    question: 'Waarom is waterfilter nodig voor een koffiezetapparaat?',
    answer:
      'Kalk tast het verwarmingselement, de boiler en de sproeidouche aan. Bij hard water (>15°dH) kan kalkvorming al na enkele maanden schade veroorzaken. Chloor en andere vluchtige organische stoffen onderdrukken de aromatische verbindingen in koffie. Gefilterd water verbetert de smaak en verlengt de levensduur van het apparaat.',
  },
  {
    question: 'Wat is de ideale TDS voor koffiezetten?',
    answer:
      'De Specialty Coffee Association (SCA) beveelt een TDS van 75–250 mg/L aan voor optimale koffie-extractie. Puur osmosewater (TDS < 20 mg/L) geeft een vlakke, weinig uitgesproken smaak. Water met TDS boven 300 mg/L leidt tot te veel kalkneerslag en een minerale smaakcomponent. Het ideale bereik voor espresso is 150–250 mg/L.',
  },
  {
    question: 'Kan ik osmosewater gebruiken in mijn espressomachine?',
    answer:
      'Puur osmosewater (TDS < 20 mg/L) is niet ideaal voor koffie: het mist de mineralen die nodig zijn voor goede extractie en kan corrosief zijn voor koperonderdelen. Gebruik altijd osmosewater mét remineralisatiepatroon, zodat de TDS uitkomt op 80–200 mg/L. PureAqua\'s 4-in-1 systeem heeft een ingebouwd remineralisatiepatroon.',
  },
  {
    question: 'Wat filteren interne machinefilters van De\'Longhi en Philips?',
    answer:
      'Interne machinefilters (zoals De\'Longhi AquaClean en Philips AquaClean) zijn actief-koolfilters die chloor, chloramines en deels kalk verwijderen. Ze verbeteren de smaak maar verwijderen geen nitraten, PFAS of zware metalen. Vervangingsinterval: gemiddeld elke 5.000 kopjes of 3 maanden. Ze zijn niet geschikt als volledige waterbehandeling bij hard water.',
  },
  {
    question: 'Hoe vaak moet ik het waterfilter voor mijn koffiezetapparaat vervangen?',
    answer:
      'Interne machinefilters (De\'Longhi, Philips, Nespresso): elke 2–3 maanden of 5.000 kopjes. Filterkan (Brita): elke 4 weken of 150 liter. Inline koolstoffilter: elke 6 maanden. Osmosefilter: sediment en koolstofpatroon elk jaar, RO-membraan elke 2–3 jaar. Een TDS-meter helpt je bepalen wanneer het membraan aan vervanging toe is.',
  },
  {
    question: 'Helpt een waterfilter ook tegen kalk in de koffiezetapparaat?',
    answer:
      'Ja, maar in verschillende mate. Een koolstoffilter verwijdert chloor goed maar slechts 10–30% van de kalk. Een ontharder verwijdert kalk vrijwel volledig maar voegt natrium toe, wat de espresso zouter smaakt. Omgekeerde osmose verwijdert 95–99% van de kalk en is de meest effectieve kalkbescherming. Voeg daarna mineralen terug via remineralisatie.',
  },
  {
    question: 'Is een Brita filterkan goed genoeg voor mijn koffiezetapparaat?',
    answer:
      'Een Brita filterkan is een goede budgetvriendelijke optie die chloor verwijdert en de smaak verbetert. Bij zacht tot matig hard water (<12°dH) volstaat een filterkan. Bij hard water (>15°dH) biedt een filterkan onvoldoende kalkbescherming voor het verwarmingselement. Voor premium espressomachines en harder water is een osmosefilter met remineralisatie de betere investering.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
  { name: 'Koffiezetter', url: 'https://waterfilterplatform.nl/waterfilter/koffiezetter' },
];

const vergelijkingData = [
  {
    type: 'Intern machinefilter',
    kosten: '€10–20 / 3 mnd',
    tdsOutput: 'Zelfde als leidingwater',
    smaakImpact: 'Goed (chloor weg)',
    onderhoud: 'Eenvoudig (patroon wisselen)',
    voordeel: 'Speciaal voor het apparaat',
  },
  {
    type: 'Filterkan (Brita)',
    kosten: '€20–40 / jaar',
    tdsOutput: 'Zacht verminderd',
    smaakImpact: 'Goed',
    onderhoud: 'Maandelijks patroon',
    voordeel: 'Laagste aanschafkosten',
  },
  {
    type: 'Inline koolstoffilter',
    kosten: '€30–60 aanschaf',
    tdsOutput: 'Weinig verschil',
    smaakImpact: 'Goed',
    onderhoud: '6-maandelijks',
    voordeel: 'Automatisch, geen handeling',
  },
  {
    type: 'Waterontharder',
    kosten: '€400–1.500 aanschaf',
    tdsOutput: 'Laag calcium, hoger natrium',
    smaakImpact: 'Risico op zoute smaak',
    onderhoud: 'Zout bijvullen',
    voordeel: 'Hele huis ontkalkt',
  },
  {
    type: 'Osmose + remineralisatie',
    kosten: '€150–400 aanschaf',
    tdsOutput: '80–200 mg/L (instelbaar)',
    smaakImpact: 'Uitstekend',
    onderhoud: 'Jaarlijks filters',
    voordeel: 'Maximale controle over waterkwaliteit',
  },
];

export default function WaterfilterKoffiezetterPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterfilter voor koffiezetter: betere smaak, minder kalk (2026)',
          description:
            'Welk waterfilter past bij jouw koffiezetapparaat? Vergelijk interne machinefilters, filterkannen, koolstoffilters en omgekeerde osmose.',
          datePublished: '2026-03-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/waterfilter/koffiezetter',
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
            <span className="text-gray-700 font-medium">Koffiezetter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Waterfilter voor koffiezetter: betere smaak, minder kalk (2026)
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-2">
            Water is voor 98% de basis van je koffie. Chloor, kalk en een verkeerde mineraalbalans
            beïnvloeden de smaak en beschadigen je koffiezetapparaat. Welk waterfilter past bij jouw
            machine en koffievoorkeur?
          </p>
          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">
              Bijgewerkt mei 2026
            </span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">
              ~8 min leestijd
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">

        <QuickAnswer answer="Voor een koffiezetapparaat is gefilterd water met een TDS van 150–250 mg/L ideaal. Een intern machinefilter (De'Longhi AquaClean, Philips) verwijdert chloor en beschermt deels tegen kalk. Bij hard water of voor maximale smaak is een osmosefilter mét remineralisatiepatroon de beste keuze." />

        {/* Waarom waterkwaliteit belangrijk is */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waarom waterkwaliteit koffiesmaak en apparaat beïnvloedt
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Koffie bestaat voor 98–99% uit water. De chemische samenstelling van dat water bepaalt
            direct hoe de aromatische verbindingen in het koffiezetsel worden geëxtraheerd. Vier
            factoren zijn bepalend:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-5 space-y-2">
            <li>
              <strong>TDS (Total Dissolved Solids):</strong> De totale hoeveelheid opgeloste
              mineralen in mg/L. Te laag (&lt;75 mg/L) geeft vlakke koffie; te hoog (&gt;300 mg/L)
              leidt tot over-extractie en een bittere, minerale smaak. Optimaal: 150–250 mg/L.
            </li>
            <li>
              <strong>Mineralen — calcium en magnesium:</strong> Magnesium verbetert de extractie van
              aromatische verbindingen aanzienlijk. Calcium versterkt de body van espresso maar
              verhoogt kalkvorming. De verhouding is cruciaal.
            </li>
            <li>
              <strong>pH:</strong> De ideale pH voor koffiewater is 6,5–7,5. Te zuur water (pH &lt;6)
              vergroot de zuurheid van de koffie; te basisch water (pH &gt;8) dempt de zuren en geeft
              een vlakke smaak.
            </li>
            <li>
              <strong>Chloor en chloramines:</strong> Residu chloor uit drinkwaterbehandeling onderdrukt
              de vluchtende aromatische verbindingen direct. Al bij 0,1 mg/L is het smaakeffect
              merkbaar voor geoefende koffiedrinkers.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Naast smaak beschadigt hard water (boven 15°dH) het verwarmingselement en de boiler door
            kalkafzetting. Een millimeter kalk op het verwarmingselement verlaagt de efficiëntie met
            7–10% en leidt op termijn tot kapotte onderdelen. Lees meer over{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid in jouw gemeente
            </Link>{' '}
            om te beoordelen hoe hard jouw leidingwater is.
          </p>
        </section>

        {/* Soorten filters */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Soorten waterfilters voor koffiezetapparaten
          </h2>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-2">
            1. Intern machinefilter
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Veel premiumkoffiemachines hebben een ingebouwd filterpatroon. De bekendste systemen zijn
            de <strong>De&apos;Longhi AquaClean</strong> (compatibel met volautomaten en espressomachines),
            <strong> Philips/Saeco AquaClean</strong> en <strong>Nespresso descaling kit</strong>.
            Deze filters bestaan uit geactiveerd kool en een ionenwisselaar die chloor verwijderen en
            de kalk deels reduceren.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Verwijdert chloor en chloramines goed (&gt;90%)</li>
            <li>Beperkte kalkwerking (ionenwisseling, 20–40%)</li>
            <li>Vervanging elke 2–3 maanden of 5.000 kopjes</li>
            <li>Kosten: €8–20 per patroon</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-2">
            2. Filterkan (actief kool)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Een Brita of vergelijkbare filterkan is een laagdrempelige oplossing. Het verwijdert chloor
            effectief maar heeft beperkte kalkwerking. Bij matig hard water (&lt;12°dH) een bruikbare
            optie; bij hard water onvoldoende bescherming voor het verwarmingselement. Lees onze{' '}
            <Link href="/filterkan/brita" className="text-[#005F8A] underline hover:no-underline">
              uitgebreide Brita-vergelijking
            </Link>
            .
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-2">
            3. Inline koolstoffilter
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Een inline koolstoffilter wordt op de waterleiding aangesloten, vóór de kraan of
            koffiemachine. Handige optie als je meerdere apparaten tegelijk wilt filteren. Verwijdert
            chloor, sediment en deels zware metalen. Vervangingsinterval: 6 maanden.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-2">
            4. Omgekeerde osmose met remineralisatie
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde-osmosefilter
            </Link>{' '}
            verwijdert 95–99% van alle opgeloste stoffen, inclusief kalk, nitraat, PFAS en zware
            metalen. Puur osmosewater (TDS &lt;20 mg/L) is echter te leeg voor goede koffie-extractie.
            Dat is waarom een <strong>remineralisatiepatroon</strong> essentieel is: het voegt calcium en
            magnesium terug in de juiste verhouding, zodat de TDS uitkomt op het ideale bereik van
            150–250 mg/L.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            De PureAqua 4-in-1 kokend water kraan met omgekeerde osmose heeft een ingebouwd
            remineralisatiepatroon. Dit is ideaal voor koffieliefhebbers die zowel kalkvrij water als
            de optimale mineraalbalans voor espresso willen.
          </p>
        </section>

        {/* Ideale TDS */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Ideale TDS voor koffie: 150–250 mg/L
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Specialty Coffee Association (SCA) publiceerde in haar Water Quality Handbook de
            volgende richtlijnen voor optimaal koffiewater:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Parameter</th>
                  <th className="text-center px-4 py-3 font-semibold">Minimum</th>
                  <th className="text-center px-4 py-3 font-semibold">Ideaal</th>
                  <th className="text-center px-4 py-3 font-semibold">Maximum</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['TDS (mg/L)', '75', '150', '250'],
                  ['Hardheid (°dH)', '3', '6–8', '12'],
                  ['pH', '6,0', '7,0', '7,5'],
                  ['Chloor (mg/L)', '0', '0', '0'],
                  ['Natrium (mg/L)', '<10', '<10', '30'],
                ].map(([param, min, ideaal, max], i) => (
                  <tr key={param} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{param}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{min}</td>
                    <td className="px-4 py-3 text-center font-semibold text-[#005F8A]">{ideaal}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-2">
            Bron: Specialty Coffee Association, Water Quality Handbook (2023).
          </p>
        </section>

        {/* Merken: filter systemen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Koffiezetapparaat merken en hun filtersystemen
          </h2>
          <div className="space-y-4">
            <div className="border border-gray-100 rounded-xl p-5">
              <p className="font-bold text-[#003F5C] mb-2">De&apos;Longhi — AquaClean-filter</p>
              <p className="text-sm text-gray-700">
                De&apos;Longhi volautomaten (Magnifica, Dinamica, Eletta) zijn uitgerust met het AquaClean-filtersysteem.
                Het patroon is een gecombineerde actief kool- en ionenwisselaarfilter. Vervanging na elke
                5.000 kopjes. Compatibel met DLSC002, DLSC004. Bij gebruik van AquaClean hoef je minder
                vaak te ontkalken, maar dit vervult het filter niet volledig.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <p className="font-bold text-[#003F5C] mb-2">Philips Saeco — AquaClean-filter</p>
              <p className="text-sm text-gray-700">
                Philips/Saeco volautomaten (Series 2200, 3200, 5400) gebruiken hetzelfde AquaClean-principe.
                Het filter vermindert kalkvorming met 50–70% volgens fabrieksopgave. Bij hard water (&gt;15°dH)
                is aanvullende waterbehandeling aan te bevelen. Vervangingsinterval: 3 maanden.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <p className="font-bold text-[#003F5C] mb-2">Nespresso — Descaling kit</p>
              <p className="text-sm text-gray-700">
                Nespresso-machines hebben geen ingebouwd filterpatroon maar adviseren ontkalking elke 3 maanden
                bij normaal gebruik. Nespresso verkoopt ook een externe inline-filter (Nespresso Brita) voor
                gebruik met OriginalLine-machines. Alternatieven: filterkan met gefilterd water vullen in het
                reservoir.
              </p>
            </div>
          </div>
        </section>

        {/* Vergelijkingstabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Vergelijking: welk filter past bij jouw koffiesituatie?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Filtertype</th>
                  <th className="text-center px-4 py-3 font-semibold">Kosten</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">TDS output</th>
                  <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Smaakimpact</th>
                  <th className="text-left px-4 py-3 font-semibold">Onderhoud</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingData.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.kosten}</td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.tdsOutput}</td>
                    <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{row.smaakImpact}</td>
                    <td className="px-4 py-3 text-gray-600">{row.onderhoud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Osmose + remineralisatie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waarom osmose remineralisatie nodig heeft voor koffie
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Omgekeerde osmose verwijdert vrijwel alle mineralen, inclusief de magnesium en calcium die
            juist bijdragen aan de koffie-extractie. Puur osmosewater geeft een waterige, weinig
            uitgesproken espresso. Het veroorzaakt ook een lage pH (&lt;6) wat de zuurheid van de koffie
            benadrukt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een remineralisatiepatroon lost dit op door selectief magnesium en calcium terug toe te voegen.
            Moderne 4-in-1 systemen zoals de PureAqua-kraan combineren osmose, actief kool, sedimentfilter
            en remineralisatie in één installatie — ideaal voor thuisbarista&apos;s die de volledige controle
            over hun watersamenstelling willen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Lees meer over de werking van{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>{' '}
            en het verschil met andere{' '}
            <Link href="/waterfilter/soorten" className="text-[#005F8A] underline hover:no-underline">
              waterfiltersoorten
            </Link>
            .
          </p>
        </section>

        {/* Stappenplan */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Stap-voor-stap: het juiste filter kiezen voor jouw koffiezetapparaat
          </h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3">
            <li>
              <strong>Bepaal de waterhardheid in jouw gemeente.</strong> Controleer{' '}
              <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
                waterhardheid per gemeente
              </Link>
              . Zacht (&lt;8°dH), matig (8–15°dH) of hard (&gt;15°dH)?
            </li>
            <li>
              <strong>Kies jouw apparaattype.</strong> Volautomaat met intern filterslot? Ga voor het
              merk-specifieke patroon (AquaClean, etc.) als basisbescherming. Espressomachine zonder
              filter? Overweeg een extern filtersysteem.
            </li>
            <li>
              <strong>Beoordeel je budget.</strong> Laag budget: filterkan. Gemiddeld budget: inline
              koolstoffilter. Koffieliefhebber met oog op de lange termijn: osmose met remineralisatie.
            </li>
            <li>
              <strong>Meet de TDS van je huidige kraanwater.</strong> Een TDS-meter kost €8–15 en geeft
              direct inzicht in de mineraleninhoud van jouw water.
            </li>
            <li>
              <strong>Installeer en houdt het onderhoud bij.</strong> Stel een herinnering in voor
              filtervervanging. Een vergeten filter werkt slechter dan geen filter.
            </li>
          </ol>
        </section>

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over waterfilters voor koffiezetapparaten
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
              { href: '/waterfilter/soorten', title: 'Alle waterfiltersoorten', desc: 'Van koolstoffilter tot omgekeerde osmose — overzicht en vergelijking.' },
              { href: '/omgekeerde-osmose', title: 'Omgekeerde osmose uitleg', desc: 'Hoe RO-membranen werken en wat ze verwijderen.' },
              { href: '/waterhardheid', title: 'Waterhardheid per gemeente', desc: 'Controleer hoe hard het leidingwater in jouw gemeente is.' },
              { href: '/filterkan/brita', title: 'Brita filterkan review', desc: 'Modellen, filterpatronen en jaarkosten vergeleken.' },
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
