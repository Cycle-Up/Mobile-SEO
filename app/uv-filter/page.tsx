import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Wat is een UV-filter voor water? Werking, kosten en toepassing 2026',
  description:
    'Alles over UV-waterfilters: hoe UV-C licht bacteriën en virussen neutraliseert, wat het niet verwijdert, kosten, onderhoud en wanneer je een UV-filter nodig hebt.',
  alternates: { canonical: 'https://waterfilterplatform.nl/uv-filter' },
  openGraph: {
    title: 'UV-filter water — complete gids over UV-C waterdesinfectie',
    description:
      'De volledige gids over UV-waterfilters: werking, effectiviteit, kosten en de juiste combinatie met andere filtertypes.',
    url: 'https://waterfilterplatform.nl/uv-filter',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe werkt een UV-filter voor water?',
    answer:
      'Een UV-filter gebruikt ultraviolet licht op de UV-C golflengte (254 nm) om micro-organismen te desinfecteren. Het licht dringt door de celwand van bacteriën, virussen en protozoa heen en beschadigt hun DNA en RNA dusdanig dat ze zich niet meer kunnen voortplanten. Ze zijn daarna niet meer in staat om infecties te veroorzaken. Het water stroomt door een transparante kamer langs een UV-lamp — geen chemicaliën worden toegevoegd.',
  },
  {
    question: 'Wat doodt een UV-filter precies?',
    answer:
      'Een correct gedimensioneerd UV-systeem (voldoende UV-dosis, helder water) neutraliseert 99,9% of meer van bacteriën zoals E. coli, Legionella en Salmonella, virussen zoals Norovirus en Hepatitis A, en protozoa zoals Giardia lamblia en Cryptosporidium. Cryptosporidium is bijzonder chloorresistent — UV-desinfectie is een van de weinige effectieve methoden daartegen.',
  },
  {
    question: 'Wat verwijdert een UV-filter NIET?',
    answer:
      'Een UV-filter verwijdert geen chemische verontreinigingen. Chloor, zware metalen (lood, arseen, kwik), nitraten, pesticiden, PFAS, microplastics en kalk blijven in het water aanwezig. UV-C breekt geen opgeloste stoffen af — het richt zich uitsluitend op levende organismen. Voor chemische verontreinigingen heb je een koolstoffilter of omgekeerde osmose nodig.',
  },
  {
    question: 'Wanneer heb je een UV-filter nodig?',
    answer:
      'Een UV-filter is relevant als je water afkomstig is van een eigen bron (putwater, regenwater, bronwater), als je na een boil-water advisory zekerheid wil, of als je in een gebied woont met verhoogd risico op microbiologische besmetting. In Nederland is leidingwater microbiologisch veilig — UV is hier vooral zinvol als extra laag bij huishoudelijke leidingen met risico op Legionella of na een calamiteit.',
  },
  {
    question: 'Moet ik water voorfilteren voordat ik een UV-filter gebruik?',
    answer:
      'Ja, dat is essentieel. UV-C licht kan alleen organismen neutraliseren die direct worden blootgesteld. Troebel water, sedimentdeeltjes of organische stoffen blokkeren het UV-licht en vormen beschermde zones voor micro-organismen. De aanbevolen volgorde is: sedimentfilter (5 micron of fijner) → actief koolstoffilter → UV-filter. Dit is ook de volgorde die NSF/ANSI 55 gecertificeerde systemen voorschrijven.',
  },
  {
    question: 'Wat is een log-reductie bij UV-filters?',
    answer:
      'Log-reductie geeft aan hoeveel micro-organismen worden verwijderd op een logaritmische schaal. 1-log = 90% reductie, 2-log = 99%, 3-log = 99,9%, 4-log = 99,99%. Drinkwaternormen vereisen doorgaans minimaal 3-log (99,9%) reductie voor bacteriën en virussen en 2-log voor Giardia en Cryptosporidium. De benodigde UV-dosis voor 3-log bacteriëreductie is circa 30–40 mJ/cm².',
  },
  {
    question: 'Hoe vaak moet de UV-lamp worden vervangen?',
    answer:
      'UV-lampen verliezen na verloop van tijd aan intensiteit, ook al branden ze nog. De meeste fabrikanten adviseren vervanging na 8.000 tot 12.000 branduren — in de praktijk eens per jaar bij continu gebruik. Een jaarlijkse lampwissel kost circa €30–€60 afhankelijk van het systeem. Sommige systemen hebben een UV-sensor die de actuele intensiteit bewaakt en alarm geeft bij onderprestatie.',
  },
  {
    question: 'Wat is NSF/ANSI 55 certificering voor UV-systemen?',
    answer:
      'NSF/ANSI 55 is de internationale prestatienorm voor UV-microbiologische waterbehandeling. Klasse A-systemen (>40 mJ/cm² UV-dosis) zijn ontworpen voor de desinfectie van microbiologisch onzekere bronnen zoals putwater. Klasse B-systemen zijn voor extra bescherming bovenop al behandeld drinkwater. Kies altijd een Klasse A gecertificeerd systeem als je werkt met putwater of andere onbehandelde bronnen.',
  },
  {
    question: 'Hoe combineer ik een UV-filter met andere filtertypen?',
    answer:
      'De meest effectieve multi-stage aanpak is: (1) grof sedimentfilter om grote deeltjes op te vangen, (2) fijn sedimentfilter (1–5 micron) voor helder water, (3) actief koolstoffilter om chloor, geur en organische stoffen te verwijderen — chloor kan UV-lampen beschadigen, (4) UV-filter voor microbiologische desinfectie. Wil je ook chemische verontreinigingen aanpakken? Voeg dan een RO-membraan toe vóór de UV-stap.',
  },
  {
    question: 'Wat kost een UV-waterfilter?',
    answer:
      'Inline UV-filters voor onder het aanrecht kosten €80–€200. Countertop modellen liggen op €150–€300. Whole-house systemen voor het volledige huishoud kosten €300–€800 exclusief installatie. Daarna reken je jaarlijks op €30–€60 voor lampvervanging en incidenteel €10–€20 voor het reinigen van de kwartsglazen omhulling van de lamp.',
  },
];

const effectiviteitTabel = [
  { categorie: 'Bacteriën (E. coli, Salmonella)', reductie: '99,99%', opmerking: 'Uitstekend' },
  { categorie: 'Virussen (Norovirus, Hepatitis A)', reductie: '99,9%', opmerking: 'Uitstekend' },
  { categorie: 'Giardia lamblia (cysten)', reductie: '99,9%', opmerking: 'Uitstekend' },
  { categorie: 'Cryptosporidium', reductie: '99,9%', opmerking: 'Uitstekend' },
  { categorie: 'Chloor', reductie: '0%', opmerking: 'Niet verwijderd' },
  { categorie: 'Zware metalen (lood, arseen)', reductie: '0%', opmerking: 'Niet verwijderd' },
  { categorie: 'Nitraten', reductie: '0%', opmerking: 'Niet verwijderd' },
  { categorie: 'Pesticiden / PFAS', reductie: '0%', opmerking: 'Niet verwijderd' },
  { categorie: 'Microplastics', reductie: '0%', opmerking: 'Niet verwijderd' },
  { categorie: 'Kalk (calcium, magnesium)', reductie: '0%', opmerking: 'Niet verwijderd' },
];

const typesUV = [
  {
    type: 'Inline UV (under-sink)',
    prijs: '€ 80–200',
    capaciteit: '10–20 L/min',
    toepassing: 'Één kraan, keuken of badkamer',
    highlight: false,
  },
  {
    type: 'Countertop UV',
    prijs: '€ 150–300',
    capaciteit: '5–15 L/min',
    toepassing: 'Staand op aanrecht, makkelijk mee te nemen',
    highlight: false,
  },
  {
    type: 'Whole-house UV',
    prijs: '€ 300–800',
    capaciteit: '30–60+ L/min',
    toepassing: 'Volledig huishoud, putwater, vakantiewoning',
    highlight: true,
  },
];

export default function UvFilterPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Wat is een UV-filter voor water? Werking, kosten en toepassing',
          description:
            'Complete gids over UV-waterfilters: UV-C werking, effectiviteit tegen bacteriën en virussen, wat het niet verwijdert, kosten en de juiste filteropbouw.',
          datePublished: '2025-09-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/uv-filter',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'UV-filter', url: 'https://waterfilterplatform.nl/uv-filter' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>UV-filter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            UV-filter voor water: werking, kosten en toepassing 2026
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een UV-waterfilter gebruikt ultraviolet licht om bacteriën, virussen en protozoa te
            neutraliseren — zonder chemicaliën toe te voegen. Het is de aangewezen techniek voor
            putwater, vakantiewoningen en situaties waarbij je microbiologische zekerheid wil. Op
            deze pagina lees je hoe het werkt, wat het wel en niet verwijdert, welk type bij jou
            past en hoe je het combineert met andere filters.
          </p>
          <QuickAnswer answer="Een UV-filter gebruikt ultraviolet licht (UV-C, 254 nm) om 99,9% van bacteriën, virussen en protozoa te neutraliseren door hun DNA te beschadigen. Het verwijdert GEEN chemische stoffen, chloor of zware metalen. Vereist helder voorwater: combineer altijd met sediment- en koolstoffilter. Aanschaf: €80–300, lampvervanging: €30–60 per jaar." />
          <div className="flex flex-wrap gap-3 mt-4">
            <Link
              href="/uv-filter/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              UV-filter kopen →
            </Link>
            <Link
              href="/waterfilter/soorten"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Alle filtersoorten vergelijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">
            Op deze pagina
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#hoe-werkt" className="hover:underline">Hoe werkt UV-desinfectie?</a></li>
            <li><a href="#effectiviteit" className="hover:underline">Effectiviteitstabel</a></li>
            <li><a href="#types" className="hover:underline">Types UV-filters</a></li>
            <li><a href="#wanneer" className="hover:underline">Wanneer heb je een UV-filter nodig?</a></li>
            <li><a href="#combinatie" className="hover:underline">Juiste filtervolgorde</a></li>
            <li><a href="#onderhoud" className="hover:underline">Onderhoud &amp; kosten</a></li>
            <li><a href="#certificering" className="hover:underline">NSF/ANSI 55 certificering</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        <section id="hoe-werkt">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt UV-waterdesinfectie?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ultraviolet licht omvat een deel van het elektromagnetisch spectrum dat niet zichtbaar
            is voor het menselijk oog. Voor waterdesinfectie wordt de zogenaamde{' '}
            <strong>UV-C band</strong> gebruikt, met een golflengte van 200 tot 280 nanometer. De
            meest effectieve golflengte voor microbiologische inactivatie is <strong>254 nm</strong>{' '}
            — dit is het absorptiemaximum van DNA en RNA.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Wanneer UV-C straling een micro-organisme raakt, dringt het door de celwand heen en
            veroorzaakt het fotochemische schade aan de nucleïnezuurstructuur. Thyminedimeren
            vormen zich in de DNA-keten, waardoor de cel zich niet meer kan delen en vermenigvuldigen.
            Het organisme is <em>geïnactiveerd</em> — niet letterlijk gedood, maar onschadelijk
            gemaakt omdat het geen infectie meer kan veroorzaken.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In de praktijk stroomt water door een roestvrijstalen kamer waarbinnen een UV-lamp is
            geplaatst in een kwartsglazen omhulling. Kwartsglas laat UV-C straling door, beschermt
            de lamp en houdt het water van direct contact met de lamp. De blootstellingstijd en de
            UV-intensiteit samen bepalen de <em>UV-dosis</em> (uitgedrukt in mJ/cm²). Een dosis
            van minimaal 30–40 mJ/cm² is vereist voor een effectieve desinfectie.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Belangrijk verschil met chloordesinfectie:</strong>{' '}
            Chloor voegt een chemische stof toe aan het water die na verloop van tijd reageert.
            UV-desinfectie laat geen residu achter en verandert de chemische samenstelling van
            het water niet. Het heeft ook geen nawerking: zodra water het UV-systeem verlaat, is
            er geen bescherming meer tegen herbesmetting in de leidingen.
          </div>
        </section>

        <section id="effectiviteit">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat verwijdert een UV-filter wel en niet?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            UV-desinfectie is uitsluitend effectief tegen levende organismen. Chemische
            verontreinigingen worden niet aangetast. Onderstaande tabel geeft een overzicht van
            de effectiviteit bij een correct gedimensioneerd systeem met helder voorwater.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Categorie</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Reductie</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Beoordeling</th>
                </tr>
              </thead>
              <tbody>
                {effectiviteitTabel.map((r, i) => (
                  <tr key={r.categorie} className={i % 2 === 0 ? 'border-b border-gray-100' : 'border-b border-gray-100 bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.categorie}</td>
                    <td className={`py-2.5 px-3 text-right font-semibold ${r.reductie === '0%' ? 'text-red-600' : 'text-green-700'}`}>
                      {r.reductie}
                    </td>
                    <td className={`py-2.5 px-3 text-right text-xs ${r.reductie === '0%' ? 'text-red-500' : 'text-green-600'}`}>
                      {r.opmerking}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Percentages gelden bij voldoende UV-dosis (≥40 mJ/cm²) en een turbiditeit van minder
            dan 1 NTU. Troebel of gekleurd water vermindert de effectiviteit aanzienlijk.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Wil je ook chemische stoffen verwijderen? Dan is een combinatie met{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>{' '}
            of een koolstoffilter noodzakelijk. Lees meer over de verschillende filtertechnieken
            op de pagina{' '}
            <Link href="/waterfilter/soorten" className="text-[#005F8A] underline hover:no-underline">
              soorten waterfilters
            </Link>.
          </p>
        </section>

        <section id="types">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welke types UV-filters zijn er?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            UV-waterfilters zijn beschikbaar in drie hoofdcategorieën, elk geschikt voor een
            andere toepassing en waterdoorvoer. De keuze hangt af van hoeveel kranen of
            apparaten je wil beschermen en wat je waterverbruik is.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Prijs</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Capaciteit</th>
                  <th className="py-2.5 px-3 font-semibold text-left pl-4">Toepassing</th>
                </tr>
              </thead>
              <tbody>
                {typesUV.map(r => (
                  <tr
                    key={r.type}
                    className={r.highlight ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3">{r.type}</td>
                    <td className="py-2.5 px-3 text-right">{r.prijs}</td>
                    <td className="py-2.5 px-3 text-right">{r.capaciteit}</td>
                    <td className="py-2.5 px-3 pl-4 text-xs text-gray-600">{r.toepassing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 space-y-4">
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Inline UV (under-sink)</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                De meest compacte optie. Wordt geplaatst in de waterleiding onder het aanrecht,
                direct voor één kraan. Ideaal als extra desinfectiestap na een sediment- en
                koolstoffilter in een multi-stage systeem. Past eenvoudig in een bestaand
                filteropstelling. Vermogen typisch 6–11 Watt.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Countertop UV</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Staat op het aanrecht en heeft vaak een ingebouwde voor-filtratiestap. Handig
                voor huurders of mensen die geen installatie willen uitvoeren. Makkelijk mee te
                nemen naar een vakantiewoning of camping. Minder geschikt voor hoge
                waterdoorvoer.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Whole-house UV</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Wordt geïnstalleerd op de hoofdwaterinlaat van de woning, zodat alle kranen,
                douches en apparaten worden beschermd. Onmisbaar bij putwater of
                bronwatergebruik. Hogere lampvermogens (25–55 Watt) voor hogere
                waterdoorvoersnelheden. Professionele installatie wordt aanbevolen.
              </p>
            </div>
          </div>
        </section>

        <section id="wanneer">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer is een UV-filter de juiste keuze?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In Nederland voldoet leidingwater aan strenge microbiologische normen. Een UV-filter
            is hier dus niet standaard vereist — maar er zijn situaties waarbij het zinvol of
            zelfs noodzakelijk is.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                titel: 'Eigen bron: putwater of bronwater',
                desc:
                  'Putwater is niet behandeld door een waterleidingbedrijf. Microbiologische besmetting door dieren, landbouwafvloeiing of lekkende septische putten is een reëel risico. Een whole-house UV-systeem is hier essentieel.',
              },
              {
                titel: 'Vakantiewoningen en recreatieparken',
                desc:
                  'Stilstaand water in leidingen bij langere periodes van non-gebruik kan Legionella herbergen. UV-desinfectie na doorspoelen biedt extra zekerheid.',
              },
              {
                titel: 'Na een boil-water advisory',
                desc:
                  'Wanneer de watermaatschappij adviseert water te koken wegens een calamiteit, biedt een UV-filter dezelfde bescherming zonder het water te hoeven verhitten.',
              },
              {
                titel: 'Reizen en camping',
                desc:
                  'Draagbare UV-pennen (UV-sticks) maken water uit onbekende bronnen veilig in 60–90 seconden. Handig voor avontuurlijke reizigers.',
              },
              {
                titel: 'Deel van multi-stage systeem',
                desc:
                  'Als sluitstuk na sediment- en koolstoffiltratie — en eventueel RO — voor maximale water­kwaliteit thuis. Met name relevant als je putwater wil filtreren naar drinkwaterstandaard.',
              },
              {
                titel: 'Chloorresistente organismen',
                desc:
                  'Cryptosporidium is berucht chloorresistent maar zeer gevoelig voor UV-C. Bij water met verhoogd Cryptosporidium-risico is UV de aangewezen methode.',
              },
            ].map(p => (
              <div key={p.titel} className="bg-white border border-gray-100 rounded-2xl p-4">
                <p className="font-semibold text-gray-900 mb-1 text-sm">{p.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="combinatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Juiste filtervolgorde: hoe combineer je een UV-filter?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een UV-filter werkt alleen optimaal als het water dat erdoorheen stroomt helder en
            vrij van sediment en chloor is. Chloor kan de kwartsglasomhulling aantasten en
            turbiditeit blokkeert het UV-licht. De aanbevolen opbouw voor een compleet systeem:
          </p>
          <div className="space-y-4">
            {[
              {
                nr: '1',
                titel: 'Grof sedimentfilter (20–50 micron)',
                desc:
                  'Vangt grote deeltjes zoals zand, roest en slib op. Beschermt het fijne sedimentfilter tegen vroegtijdige verstopping.',
              },
              {
                nr: '2',
                titel: 'Fijn sedimentfilter (1–5 micron)',
                desc:
                  'Zorgt voor helder water met een turbiditeit onder 1 NTU — een randvoorwaarde voor effectieve UV-desinfectie. Houdt ook protozoa-cysten deels al mechanisch tegen.',
              },
              {
                nr: '3',
                titel: 'Actief koolstoffilter',
                desc:
                  'Verwijdert chloor, chlooramines, geurstoffen en organische verbindingen. Chloor tast de kwartsglasomhulling van de UV-lamp aan en kan interfereren met UV-transmissie.',
              },
              {
                nr: '4',
                titel: 'UV-filter (UV-C, 254 nm)',
                desc:
                  'Neutraliseert alle resterende bacteriën, virussen en protozoa. Op dit punt is het water helder en vrij van chloor — ideale condities voor maximale UV-effectiviteit.',
              },
            ].map(s => (
              <div key={s.nr} className="flex gap-4 items-start">
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
          <div className="mt-6 bg-amber-50 border border-amber-100 rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-amber-900">Optionele stap 5:</strong> voeg een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              RO-membraan
            </Link>{' '}
            toe tussen de koolstoffilter en de UV-stap als je ook chemische verontreinigingen wil
            verwijderen. Het RO-membraan produceert helder, demineraliseerd water — optimaal als
            voorwater voor de UV-lamp. Overweeg dan ook een{' '}
            <Link href="/sedimentfilter" className="text-[#005F8A] underline hover:no-underline">
              sedimentfilter
            </Link>{' '}
            als eerste stap voor maximale bescherming van het membraan.
          </div>
        </section>

        <section id="onderhoud">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderhoud en kosten</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            UV-waterfilters zijn relatief eenvoudig te onderhouden. De twee belangrijkste
            onderhoudsactiviteiten zijn lampvervanging en reiniging van de kwartsglazen omhulling.
          </p>
          <div className="space-y-3">
            {[
              {
                onderdeel: 'UV-lamp',
                interval: 'Jaarlijks (8.000–12.000 branduren)',
                actie:
                  'Vervangen ongeacht of de lamp nog brandt. Na circa 12 maanden is de UV-intensiteit te laag voor effectieve desinfectie, ook als de lamp nog zichtbaar oplicht.',
              },
              {
                onderdeel: 'Kwartsglas omhulling',
                interval: 'Jaarlijks of bij lampwissel',
                actie:
                  'Reinigen met een zachte doek en isopropylalcohol. Kalkafzetting en organische aangroei verminderen de UV-transmissie.',
              },
              {
                onderdeel: 'O-ringen en pakkingen',
                interval: 'Elke 2–3 jaar',
                actie:
                  'Controleren op slijtage en vervangen indien nodig om lekkage te voorkomen.',
              },
              {
                onderdeel: 'UV-sensor (indien aanwezig)',
                interval: 'Jaarlijks kalibreren',
                actie:
                  'Sommige systemen hebben een optische sensor die continu de UV-intensiteit bewaakt. Kalibratie of vervanging van de sensor voorkomt valse veiligheidsgevoel.',
              },
              {
                onderdeel: 'Voorfilters (sediment + koolstof)',
                interval: 'Elke 6–12 maanden',
                actie:
                  'Vervangen conform de adviezen van de filterfabrikant. Verzadigde voorfilters verlagen de UV-transmissie en verhogen de slijtage van de lamp.',
              },
            ].map(r => (
              <div key={r.onderdeel} className="flex gap-3 items-start border border-gray-100 rounded-xl p-3">
                <div className="text-[#005F8A] text-lg shrink-0">⚙</div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline gap-2">
                    <p className="font-semibold text-gray-900 text-sm">{r.onderdeel}</p>
                    <p className="text-xs text-[#005F8A] font-medium shrink-0">{r.interval}</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{r.actie}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-gray-50 rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-3 text-sm">Overzicht jaarlijkse kosten</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#E0F2FE]">
                    <th className="text-left py-2 px-3 font-semibold text-[#003F5C]">Post</th>
                    <th className="py-2 px-3 font-semibold text-[#003F5C] text-right">Kosten</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">UV-lamp vervanging</td>
                    <td className="py-2 px-3 text-right">€ 30–60</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">Sediment- en koolstoffilters</td>
                    <td className="py-2 px-3 text-right">€ 20–50</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">Energie (6–11 Watt continu)</td>
                    <td className="py-2 px-3 text-right">€ 10–20</td>
                  </tr>
                  <tr className="bg-[#E0F2FE] font-semibold">
                    <td className="py-2 px-3">Totaal per jaar</td>
                    <td className="py-2 px-3 text-right">€ 60–130</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="certificering">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            NSF/ANSI 55: de certificeringsnorm voor UV-systemen
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            NSF International heeft de norm <strong>NSF/ANSI 55</strong> ontwikkeld voor
            ultraviolette microbiologische waterbehandelsystemen. De norm onderscheidt twee
            klassen:
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-[#005F8A] bg-[#E0F2FE] rounded-r-xl px-5 py-4">
              <p className="font-semibold text-[#003F5C] mb-1">Klasse A — &gt;40 mJ/cm² UV-dosis</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ontworpen voor de desinfectie van microbiologisch onzekere bronnen, waaronder
                putwater, bronwater en regenwater. Moet 6-log (99,9999%) reductie van
                testmicro-organismen aantonen. Vereist voor elke situatie waarbij de
                microbiologische veiligheid van de bron niet gegarandeerd is.
              </p>
            </div>
            <div className="border-l-4 border-gray-300 bg-gray-50 rounded-r-xl px-5 py-4">
              <p className="font-semibold text-gray-700 mb-1">Klasse B — aanvullende desinfectie</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Bedoeld als aanvullende behandeling bovenop al microbiologisch behandeld
                drinkwater — zoals stadswater. Lagere UV-dosiseis. Niet geschikt voor putwater
                of andere onbehandelde bronnen.
              </p>
            </div>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Controleer bij de aankoop altijd of het systeem de NSF/ANSI 55 Klasse A certificering
            draagt als je van putwater of een andere onbekende bron gebruik maakt. Systemen zonder
            certificering bieden geen garantie over de daadwerkelijk geleverde UV-dosis.
          </p>
        </section>

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen op WaterfilterPlatform</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/uv-filter/kopen',
                title: 'UV-filter kopen',
                desc: 'Vergelijking van de beste UV-waterfilters per categorie en budget.',
              },
              {
                href: '/waterfilter/soorten',
                title: 'Soorten waterfilters',
                desc: 'Overzicht van alle filtertechnieken: UV, RO, koolstof, keramisch en meer.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose',
                desc: 'De meest grondige filtermethode: verwijdert ook chemische verontreinigingen.',
              },
              {
                href: '/sedimentfilter',
                title: 'Sedimentfilter',
                desc: 'Onmisbare eerste stap in elk multi-stage filtersysteem.',
              },
              {
                href: '/keramisch-filter',
                title: 'Keramisch waterfilter',
                desc: 'Geen stroom nodig, herbruikbaar en effectief tegen bacteriën en sediment.',
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

        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over UV-waterfilters</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
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
