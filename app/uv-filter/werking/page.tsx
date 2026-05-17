import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Hoe werkt een UV-waterfilter? UV-C desinfectie uitgelegd',
  description:
    'UV waterfilter werking: hoe UV-C licht op 254 nm DNA beschadigt, log-reducties, wat UV wel en niet verwijdert, turbiditeitseis, UV vs chloor vs osmose en de.',
  alternates: { canonical: 'https://waterfilterplatform.nl/uv-filter/werking' },
  openGraph: {
    title: 'Hoe werkt een UV-waterfilter? UV-C desinfectie uitgelegd',
    description:
      'Uitleg van UV-C waterdesinfectie: golflengte 254 nm, DNA-schade, log-reductie, turbiditeitseis, dosisberekening en vergelijking met chloor en osmose.',
    url: 'https://waterfilterplatform.nl/uv-filter/werking',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is de juiste UV-C golflengte voor waterdesinfectie?',
    answer:
      'De effectiefste golflengte voor waterdesinfectie is 254 nanometer (nm). Dit is het absorptiemaximum van DNA en RNA — het punt waarop nucleïnezuren maximaal UV-energie absorberen. Kwikdamplampen (de traditionele UV-bron in waterfilters) produceren van nature dominant licht op precies 254 nm, wat ze bijzonder geschikt maakt voor waterdesinfectie. UV-LED systemen kunnen worden afgestemd op 255–265 nm voor een vergelijkbare effectiviteit.',
  },
  {
    question: 'Wat is een log-reductie en hoeveel log is voldoende voor veilig drinkwater?',
    answer:
      'Log-reductie drukt verwijderingspercentages uit op een logaritmische schaal: 1-log = 90% reductie, 2-log = 99%, 3-log = 99,9%, 4-log = 99,99%. Drinkwaternormen vereisen doorgaans minimaal 4-log (99,99%) reductie voor bacteriën en virussen. Voor Giardia geldt een eis van minimaal 3-log. Voor Cryptosporidium is 2-log (99%) al voldoende vanwege de extreme UV-gevoeligheid van dit protozoa. NSF/ANSI 55 Klasse A-systemen zijn getest op 6-log reductie van testorganismen.',
  },
  {
    question: 'Welke micro-organismen doodt een UV-waterfilter?',
    answer:
      'UV-C (254 nm) neutraliseert effectief: bacteriën zoals E. coli, Legionella pneumophila, Salmonella, Campylobacter en Staphylococcus; virussen zoals Norovirus, Rotavirus en Hepatitis A; protozoa zoals Giardia lamblia en Cryptosporidium parvum. Cryptosporidium is bijzonder relevant omdat het extreem chloorresistent is — UV is een van de weinige betrouwbare methoden. Schimmels en algen worden ook effectief geïnactiveerd.',
  },
  {
    question: 'Wat verwijdert een UV-filter NIET?',
    answer:
      'UV-C licht inactiveert uitsluitend levende organismen. Chemische stoffen worden niet aangetast of verwijderd: chloor, nitraten, nitriet, PFAS, pesticiden, medicijnresten, zware metalen (lood, arseen, kwik), kalk (calcium en magnesium), microplastics en farmaceutische residuen blijven aanwezig in het water na UV-behandeling. Voor chemische verontreinigingen is een koolstoffilter of omgekeerde osmose noodzakelijk.',
  },
  {
    question: 'Hoe bereken je de benodigde UV-dosis?',
    answer:
      'UV-dosis (in mJ/cm²) = UV-intensiteit (mW/cm²) × blootstellingstijd (seconden). Een hoger debiet (meer liters per minuut) verkort de contacttijd en verlaagt de effectieve dosis. Bij een te hoog debiet voor de lamp daalt de dosis onder de minimumeis. De aanbevolen minimale dosis voor drinkwater is 40 mJ/cm² (NSF/ANSI 55 Klasse A). Systemen worden beoordeeld op de "slechtste geval" situatie: maximaal debiet met een lamp op 254 nm.',
  },
  {
    question: 'Waarom is helder water vereist voor een UV-filter?',
    answer:
      'Troebel water (hoge turbiditeit) blokkeert en verstrooit UV-C straling, waardoor micro-organismen beschermde schaduwzones creëren. De NSF/ANSI 55 norm stelt een maximale turbiditeit van 1 NTU voor effectieve UV-desinfectie. Boven deze grens daalt de effectiviteit sterk. Organische stoffen, ijzer en klei absorberen UV-licht en verminderen de transmissie. Voorfiltratie met sediment- en koolstoffilter is daarom altijd vereist.',
  },
  {
    question: 'Wat is het verschil tussen UV-desinfectie en chloordesinfectie?',
    answer:
      'UV-desinfectie gebruikt fysisch licht zonder chemische toevoeging — geen residu, geen bijproducten, geen invloed op smaak. Chloor voegt een chemische stof toe die na behandeling actief blijft en nawerking geeft in de leidingen. UV heeft geen nawerking: na het UV-systeem is er geen bescherming meer. Chloor is effectief tegen de meeste bacteriën maar niet tegen Cryptosporidium. UV is effectief tegen alle micro-organismen inclusief chloorresistente soorten. Chloor produceerde trihalomethanen (THMs) als bijproduct bij reactie met organische stof; UV niet.',
  },
  {
    question: 'Wanneer combineer ik een UV-filter met een osmosefilter?',
    answer:
      'Bij putwater, bronwater of regenwater wil je zowel chemische als biologische verontreinigingen aanpakken. Osmose verwijdert chemische stoffen maar biedt geen garantie voor bacteriologische veiligheid op zichzelf (membranen kunnen defecten hebben). Een UV-filter als sluitstuk na osmose geeft een volledig systeem: RO haalt chemie weg, UV doodt resterende organismen. De ideale filtervolgorde voor putwater is: sedimentfilter → koolstoffilter → osmosemembraan → UV-filter.',
  },
];

type EffTabelRij = {
  organisme: string;
  dosisNodig: string;
  reductie: string;
  chloor: string;
};

const effectiviteitTabel: EffTabelRij[] = [
  { organisme: 'E. coli', dosisNodig: '6,6 mJ/cm²', reductie: '4-log (99,99%)', chloor: 'Effectief' },
  { organisme: 'Salmonella typhi', dosisNodig: '8,2 mJ/cm²', reductie: '4-log (99,99%)', chloor: 'Effectief' },
  { organisme: 'Legionella pneumophila', dosisNodig: '5,5 mJ/cm²', reductie: '4-log (99,99%)', chloor: 'Beperkt effectief' },
  { organisme: 'Norovirus', dosisNodig: '30 mJ/cm²', reductie: '3-log (99,9%)', chloor: 'Effectief' },
  { organisme: 'Hepatitis A', dosisNodig: '21 mJ/cm²', reductie: '3-log (99,9%)', chloor: 'Effectief' },
  { organisme: 'Giardia lamblia (cysten)', dosisNodig: '10 mJ/cm²', reductie: '3-log (99,9%)', chloor: 'Slecht (chloorresistent)' },
  { organisme: 'Cryptosporidium parvum', dosisNodig: '10 mJ/cm²', reductie: '4-log (99,99%)', chloor: 'Niet effectief' },
];

type VergRij = {
  criterium: string;
  uv: string;
  chloor: string;
  osmose: string;
};

const vergelijkingTabel: VergRij[] = [
  { criterium: 'Bacteriën', uv: '99,99%', chloor: '99,9%', osmose: 'Via membraan' },
  { criterium: 'Virussen', uv: '99,9%', chloor: '99,9%', osmose: 'Via membraan' },
  { criterium: 'Cryptosporidium', uv: '99,99%', chloor: 'Niet effectief', osmose: 'Via membraan' },
  { criterium: 'Chloor verwijderd', uv: 'Nee', chloor: 'Voegt toe', osmose: '95–99%' },
  { criterium: 'Nitraat', uv: 'Nee', chloor: 'Nee', osmose: '85–95%' },
  { criterium: 'PFAS', uv: 'Nee', chloor: 'Nee', osmose: '95–99%' },
  { criterium: 'Kalk', uv: 'Nee', chloor: 'Nee', osmose: '95–99%' },
  { criterium: 'Chemische bijproducten', uv: 'Geen', chloor: 'THMs en HAAs', osmose: 'Geen' },
  { criterium: 'Nawerking in leidingen', uv: 'Nee', chloor: 'Ja', osmose: 'Nee' },
  { criterium: 'Smaakverandering', uv: 'Geen', chloor: 'Ja (chloor)', osmose: 'Neutraal' },
  { criterium: 'Afvalwater', uv: 'Geen', chloor: 'Geen', osmose: '1:1 ratio' },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'UV-filter', url: 'https://waterfilterplatform.nl/uv-filter' },
  { name: 'Werking', url: 'https://waterfilterplatform.nl/uv-filter/werking' },
];

export default function UvFilterWerkingPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Hoe werkt een UV-waterfilter? UV-C desinfectie uitgelegd',
          description:
            'UV waterfilter werking: UV-C golflengte 254 nm, DNA-schade, log-reductie, turbiditeitseis, dosisberekening en vergelijking met chloor en osmose.',
          datePublished: '2026-03-10',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/uv-filter/werking',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/uv-filter" className="hover:text-[#005F8A]">UV-filter</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Werking</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Hoe werkt een UV-waterfilter? UV-C desinfectie uitgelegd
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            UV-C licht op 254 nm beschadigt het DNA van bacteriën, virussen en protozoa zo
            grondig dat ze zich niet meer kunnen vermenigvuldigen. Zonder chemicaliën toe te
            voegen en zonder de chemische samenstelling van water te veranderen. Maar wat doodt
            het precies, hoeveel dosis is genoeg en wanneer werkt het niet?
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~8 min leestijd</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">

        <QuickAnswer answer="UV-C licht op 254 nm dringt door celwanden van micro-organismen en vormt thyminedimeren in de DNA-keten, waardoor celdeling onmogelijk wordt. 4-log (99,99%) reductie vereist een dosis van 40 mJ/cm². UV verwijdert GEEN chemische stoffen. Helder water (turbiditeit onder 1 NTU) is vereist. Combineer altijd met sediment- en koolstoffilter." />

        {/* Inhoudsopgave */}
        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#mechanisme', 'UV-C golflengte en DNA-schademechanisme'],
              ['#log-reductie', 'Log-reductie en dosisberekening'],
              ['#effectiviteit', 'Wat doodt UV — effectiviteitstabel'],
              ['#niet', 'Wat UV niet verwijdert'],
              ['#turbiditeit', 'Turbiditeitseis en voorfiltratie'],
              ['#vergelijking', 'UV vs chloor vs osmose'],
              ['#combinatie', 'UV + koolstof combinatie'],
              ['#faq', 'Veelgestelde vragen'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#003F5C] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* UV-C mechanisme */}
        <section id="mechanisme">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            UV-C golflengte en het DNA-schademechanisme
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ultraviolet licht beslaat het elektromagnetisch spectrum van 100 tot 400 nanometer (nm).
            Voor waterdesinfectie is de UV-C band (200–280 nm) van belang. De golflengte van
            <strong> 254 nm</strong> is het absorptiemaximum van pyrimidinebasen in DNA en RNA —
            de bouwstenen van het genetisch materiaal van alle levende organismen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wanneer UV-C straling een micro-organisme raakt, dringt het door de celwand heen (die
            transparant is voor UV-C) en valt het genetisch materiaal aan. Het specifieke
            mechanisme: aangrenzende thyminebases in de DNA-keten vormen covalente bindingen
            met elkaar — zogenaamde <strong>thyminedimeren</strong>. Deze dimeren verstoren de
            normale base-pairing, waardoor het enzym DNA-polymerase de keten niet meer correct
            kan kopiëren.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het resultaat: de cel kan zich niet delen, niet vermenigvuldigen en daarmee geen
            infectie veroorzaken. De organismen zijn <em>geïnactiveerd</em> — technisch gezien
            niet gedood, maar functioneel onschadelijk gemaakt. Zodra een voldoende hoge UV-dosis
            is toegediend, is dit proces onomkeerbaar.
          </p>
          <div className="bg-[#E0F2FE] border border-[#005F8A]/20 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Praktische uitvoering:</strong> Water stroomt door
            een roestvrijstalen kamer waarbinnen een kwikdamplamp is geplaatst in een kwartsglazen
            omhulling. Kwartsglas laat UV-C straling door (normaal glas houdt UV-C grotendeels
            tegen) en beschermt de lamp tegen direct watercontact. De kamer is zo ontworpen dat
            het water voldoende lang wordt blootgesteld aan de UV-straling voor de vereiste dosis.
          </div>
        </section>

        {/* Log-reductie en dosis */}
        <section id="log-reductie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Log-reductie en UV-dosisberekening
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De effectiviteit van een UV-systeem wordt uitgedrukt in log-reductie en de benodigde
            UV-dosis in millijoule per vierkante centimeter (mJ/cm²).
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {[
              { log: '1-log', procent: '90%', kleur: 'bg-yellow-50 border-yellow-200' },
              { log: '2-log', procent: '99%', kleur: 'bg-orange-50 border-orange-200' },
              { log: '3-log', procent: '99,9%', kleur: 'bg-blue-50 border-blue-200' },
              { log: '4-log', procent: '99,99%', kleur: 'bg-[#E0F2FE] border-[#005F8A]/30' },
            ].map(item => (
              <div key={item.log} className={`rounded-xl border p-3 text-center ${item.kleur}`}>
                <p className="font-bold text-gray-900 text-lg">{item.log}</p>
                <p className="text-sm text-gray-700">= {item.procent} reductie</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>UV-dosis formule:</strong> Dosis (mJ/cm²) = UV-intensiteit (mW/cm²) ×
            contacttijd (seconden). Een hoger waterdebiet (meer L/min) verkort de contacttijd
            en verlaagt de effectieve dosis. Systemen worden beoordeeld bij maximaal nominaal
            debiet. De NSF/ANSI 55 Klasse A norm vereist een minimale dosis van <strong>40 mJ/cm²</strong>{' '}
            bij het maximale debiet van het systeem.
          </p>
          <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700">
            <p className="font-semibold text-gray-900 mb-2">Voorbeeldberekening:</p>
            <p>Een lamp met een intensiteit van 20 mW/cm² bij een contacttijd van 3 seconden
            levert: 20 × 3 = 60 mJ/cm² — ruim boven de minimumeis van 40 mJ/cm². Bij een
            te hoog debiet daalt de contacttijd naar 1 seconde: 20 × 1 = 20 mJ/cm² — te laag
            voor effectieve desinfectie. Kies altijd een systeem gedimensioneerd op uw
            werkelijke waterverbruik.</p>
          </div>
        </section>

        {/* Effectiviteitstabel */}
        <section id="effectiviteit">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welke micro-organismen doodt een UV-filter?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Onderstaande tabel toont de benodigde UV-dosis voor 4-log reductie van de meest
            relevante watergebonden pathogenen, met een vergelijking met chloor-effectiviteit.
            Alle genoemde pathogenen worden effectief geïnactiveerd bij een dosis van 40 mJ/cm².
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Organisme</th>
                  <th className="text-center px-3 py-3 font-semibold">UV-dosis (4-log)</th>
                  <th className="text-center px-3 py-3 font-semibold">Reductie bij 40 mJ/cm²</th>
                  <th className="text-center px-3 py-3 font-semibold">Chloor</th>
                </tr>
              </thead>
              <tbody>
                {effectiviteitTabel.map((row, i) => (
                  <tr key={row.organisme} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2.5 font-medium text-gray-900">{row.organisme}</td>
                    <td className="px-3 py-2.5 text-center text-gray-700">{row.dosisNodig}</td>
                    <td className="px-3 py-2.5 text-center text-green-700 font-semibold">{row.reductie}</td>
                    <td className={`px-3 py-2.5 text-center text-sm ${row.chloor.includes('Niet') ? 'text-red-600 font-semibold' : row.chloor.includes('Slecht') ? 'text-orange-600' : 'text-gray-700'}`}>
                      {row.chloor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            UV-dosis voor 4-log reductie is indicatief bij 254 nm en optimale condities (turbiditeit &lt;1 NTU).
            Bron: USEPA UV Disinfection Guidance Manual (2006), NSF/ANSI 55 testdata.
          </p>
        </section>

        {/* Wat UV niet verwijdert */}
        <section id="niet">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat verwijdert een UV-filter niet?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            UV-desinfectie is een fotochemisch proces dat uitsluitend genetisch materiaal
            beschadigt. Moleculen zonder genetisch materiaal — zoals anorganische ionen, organische
            verbindingen en microplastics — worden niet aangetast door UV-C straling.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { stof: 'Chloor en chlooramines', uitleg: 'UV desinfecteert maar verwijdert geen chloor uit het water. Koolstoffilter is nodig voor chloorverwijdering.' },
              { stof: 'Nitraten en nitriet', uitleg: 'Kleine anorganische ionen passeren UV-behandeling ongehinderd. Alleen osmose verwijdert nitraat effectief.' },
              { stof: 'PFAS en pesticiden', uitleg: 'Synthetische organische verbindingen worden niet afgebroken door UV-C. Osmose of GAC-koolstof zijn noodzakelijk.' },
              { stof: 'Zware metalen', uitleg: 'Lood, arseen, kwik en andere metaalionen worden niet beïnvloed door UV-licht. Osmose verwijdert 95–99%.' },
              { stof: 'Waterhardheid (kalk)', uitleg: 'Calcium en magnesium ionen zijn volledig UV-transparant. Voor hardheidsverlaging is osmose of een ontharder vereist.' },
              { stof: 'Microplastics', uitleg: 'Kunststofdeeltjes worden niet afgebroken door UV-C. Fijn sedimentfilter of osmosemembraan houdt ze mechanisch tegen.' },
            ].map(item => (
              <div key={item.stof} className="bg-red-50 border border-red-100 rounded-xl p-4">
                <p className="font-semibold text-red-800 mb-1 text-sm">✗ {item.stof}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.uitleg}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed text-sm">
            Voor een compleet systeem dat zowel biologische als chemische verontreinigingen aanpakt,
            is een combinatie van UV en{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>{' '}
            de meest volledige oplossing.
          </p>
        </section>

        {/* Turbiditeitseis */}
        <section id="turbiditeit">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Turbiditeitseis en de noodzaak van voorfiltratie
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Troebel water is de grootste vijand van een UV-waterfilter. Turbiditeit (troebelheid)
            wordt gemeten in NTU (Nephelometric Turbidity Units). De NSF/ANSI 55 norm stelt een
            maximale turbiditeit van <strong>1 NTU</strong> voor effectieve UV-desinfectie.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zwevende deeltjes — sediment, ijzer, mangaan, organische stof, klei — absorberen en
            verstrooien UV-C licht. Micro-organismen kunnen in de schaduw van deeltjes &apos;verschuilen&apos;
            en zo de UV-straling ontwijken. Dit heet het <em>schaduweffect</em>. Bij turbiditeit
            boven 1 NTU daalt de effectieve UV-transmissie snel, waardoor de werkelijke dosis
            lager is dan berekend.
          </p>
          <div className="space-y-3 mb-5">
            {[
              {
                nr: '1',
                titel: 'Grof sedimentfilter (10–50 micron)',
                desc: 'Verwijdert zand, roest, slib en grove deeltjes. Beschermt het fijne sedimentfilter tegen snelle verstopping en verlengt de levensduur.',
              },
              {
                nr: '2',
                titel: 'Fijn sedimentfilter (1–5 micron)',
                desc: 'Brengt turbiditeit naar de vereiste &lt;1 NTU. Houdt ook Giardia- en Cryptosporidium-cysten mechanisch deels al tegen voordat het UV-filter ze inactiveert.',
              },
              {
                nr: '3',
                titel: 'Koolstofblokfilter',
                desc: 'Verwijdert chloor (beschadigt kwartsglas en interfereert met UV-transmissie), organische stoffen en kleur die de UV-transparantie van water beïnvloeden.',
              },
              {
                nr: '4',
                titel: 'UV-filter (254 nm)',
                desc: 'Inactiveert alle resterende bacteriën, virussen en protozoa. Op dit punt is het water helder, kleurloos en vrij van chloor — ideale condities voor 40+ mJ/cm².',
              },
            ].map(s => (
              <div key={s.nr} className="flex gap-4 items-start border border-gray-100 rounded-xl p-4">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0">
                  {s.nr}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* UV vs chloor vs osmose */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            UV vs chloor vs osmose: vergelijkingstabel
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Drie veelgebruikte desinfectie- en filtratietechnieken naast elkaar: UV-desinfectie,
            chloorbehandeling en{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>.
            Elk heeft eigen sterktes en zwaktes die bepalend zijn voor de juiste keuze.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Criterium</th>
                  <th className="text-center px-3 py-3 font-semibold">UV-filter</th>
                  <th className="text-center px-3 py-3 font-semibold">Chloor</th>
                  <th className="text-center px-3 py-3 font-semibold">Osmose (RO)</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingTabel.map((row, i) => (
                  <tr key={row.criterium} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2.5 font-medium text-gray-900">{row.criterium}</td>
                    <td className="px-3 py-2.5 text-center text-gray-700 text-sm">{row.uv}</td>
                    <td className="px-3 py-2.5 text-center text-gray-700 text-sm">{row.chloor}</td>
                    <td className="px-3 py-2.5 text-center text-gray-700 text-sm">{row.osmose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* UV + koolstof combinatie */}
        <section id="combinatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            UV + koolstoffilter: de aanbevolen thuiscombinatie
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor de meeste Nederlandse situaties waarbij microbiologische bescherming gewenst is
            (putwater, vakantiewoning, regenwater) is de combinatie van een{' '}
            <Link href="/koolstoffilter" className="text-[#005F8A] underline hover:no-underline">
              koolstoffilter
            </Link>{' '}
            en een UV-filter de meest kosteneffectieve aanpak:
          </p>
          <div className="bg-[#E0F2FE] border border-[#005F8A]/20 rounded-2xl p-5 mb-4">
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-[#005F8A] font-bold shrink-0">→</span>
                <span>De koolstoffilter verwijdert chloor (dat UV-kwartsglas beschadigt), organische stoffen en verbetert smaak</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#005F8A] font-bold shrink-0">→</span>
                <span>Het sedimentfilter brengt turbiditeit onder 1 NTU voor maximale UV-effectiviteit</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#005F8A] font-bold shrink-0">→</span>
                <span>Het UV-filter inactiveert alle pathogenen inclusief het chloorresistente Cryptosporidium</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#005F8A] font-bold shrink-0">→</span>
                <span>Totale jaarkosten: €60–130 — significant goedkoper dan een volledig osmosesysteem</span>
              </li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Wanneer ook osmose toevoegen:</strong> Als je naast
            biologische veiligheid ook chemische stoffen wilt verwijderen (nitraat, PFAS, kalk,
            zware metalen) — voeg dan een osmosemembraan toe vóór het UV-filter. Dit geeft het
            meest complete systeem: sediment → koolstof → osmose → UV.
            Meer over{' '}
            <Link href="/uv-filter/toepassingen" className="text-[#005F8A] underline hover:no-underline">
              UV-filter toepassingen
            </Link>{' '}
            zoals putwater, bronwater en vakantiewoningen.
          </div>
        </section>

        {/* Gerelateerde links */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/uv-filter', title: 'UV-filter overzicht', desc: 'Complete gids over UV-waterfilters: types, toepassingen, onderhoud en kosten.' },
              { href: '/uv-filter/kopen', title: 'UV-waterfilter kopen', desc: 'Koopgids en modeloverzicht: welk UV-filter past bij jouw situatie en budget?' },
              { href: '/uv-filter/toepassingen', title: 'UV-filter toepassingen', desc: 'Putwater, regenwater, vakantiewoningen, vijver en meer: welk UV-systeem voor welk gebruik?' },
              { href: '/omgekeerde-osmose', title: 'Omgekeerde osmose', desc: 'RO-filtratie verwijdert ook chemische stoffen — de aanvulling op UV voor volledig puur water.' },
              { href: '/waterfilter/welk-filter', title: 'Welk waterfilter heb ik nodig?', desc: 'Keuzehulp in drie stappen: probleem, budget en installatiemogelijkheid.' },
              { href: '/waterfilter/soorten', title: 'Waterfilter soorten', desc: 'Overzicht van alle filtertechnieken naast elkaar.' },
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

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen: UV-waterfilter werking
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
