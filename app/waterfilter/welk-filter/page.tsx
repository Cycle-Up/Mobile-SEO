import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Welk waterfilter heb ik nodig? Keuzehulp 2026',
  description:
    'Welk waterfilter past bij jouw situatie? Keuzehulp met beslissingsstappen op basis van probleem, budget en installatiemogelijkheid. Van filterkan tot omgekeerde osmose.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/welk-filter' },
  openGraph: {
    title: 'Welk waterfilter heb ik nodig? Keuzehulp 2026',
    description:
      'Kies het juiste waterfilter met deze stap-voor-stap keuzehulp: smaak, bacteriën, nitraat, budget en installatie bepalen welk filter het best bij jou past.',
    url: 'https://waterfilterplatform.nl/waterfilter/welk-filter',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Welk waterfilter verwijdert het meeste uit leidingwater?',
    answer:
      'Een omgekeerde osmose filter (RO) verwijdert het meeste: 95–99% van alle opgeloste stoffen, inclusief nitraten, PFAS, zware metalen, kalk en microplastics. Een 4-in-1 kokend water kraan met geïntegreerde RO biedt dezelfde filtratie plus direct kokend water. UV-filters zijn het meest effectief specifiek voor bacteriën en virussen, maar verwijderen geen chemische stoffen.',
  },
  {
    question: 'Welk waterfilter heb ik nodig als huurder?',
    answer:
      'Als huurder zonder toestemming voor boorwerk en vaste installaties zijn er twee goede opties: een filterkan (Brita, BWT) vereist helemaal geen installatie en verwijdert chloor en deels kalk. Een aanrecht RO-filter (countertop) klikt aan op de bestaande kraan via een adapter — geen boorwerk nodig. Beide zijn meeneembaar bij verhuizing.',
  },
  {
    question: 'Welk waterfilter heb ik nodig bij nitraat in het water?',
    answer:
      'Bij verhoogd nitraat (boven 25 mg/L, frequent in agrarische gebieden) is omgekeerde osmose de enige betrouwbare thuisoplossing. Een osmosefilter verwijdert 85–95% van nitraat. Een filterkan verwijdert minder dan 10% van nitraat en biedt hier geen serieuze bescherming. Controleer nitraatwaarden via uw drinkwaterbedrijf of gemeentelijke rapportages.',
  },
  {
    question: 'Welk waterfilter is het goedkoopst?',
    answer:
      'De filterkan is goedkoopst in aanschaf (€18–45) met jaarlijkse filterkosten van €45–100. Een onderbouw koolstoffilter kost €50–150 aanschaf en €30–60 per jaar. Een osmosefilter vraagt een investering van €150–400 maar heeft vergelijkbare jaarkosten (€60–110). Op 5-jaar basis zijn de totale kosten van filterkan en osmose dichter bij elkaar dan je denkt.',
  },
  {
    question: 'Wat is het verschil tussen een koolstoffilter en osmosefilter?',
    answer:
      'Een koolstoffilter verwijdert via adsorptie: chloor, geur, organische stoffen en deels pesticiden. Een osmosefilter doet dat ook, maar perst water bovendien door een semipermeabel membraan dat werkt op moleculair niveau — waardoor ook nitraten, PFAS, zware metalen, kalk en bacteriën worden verwijderd. Voor een uitgebreide vergelijking, zie onze pagina over osmose vs koolstoffilter.',
  },
  {
    question: 'Heb ik een waterfilter nodig als het leidingwater in Nederland veilig is?',
    answer:
      'Nederlands leidingwater voldoet aan de wettelijke drinkwaternormen. Toch kiezen veel mensen voor extra filtratie om: restchloor en bijbehorende geur te verwijderen (koolstoffilter), nitraat in agrarische regio\'s te reduceren (osmose), PFAS bij bewoners nabij industriële bronnen te reduceren (osmose), of waterhardheid te verminderen voor apparaatbescherming en betere smaakin koffie (osmose of ontharder).',
  },
  {
    question: 'Welk waterfilter is het beste voor baby en zwanger?',
    answer:
      'Voor babyvoeding en gezinnen met zwangere vrouwen wordt omgekeerde osmose aanbevolen. Osmose verwijdert nitraat voor 85–95% — nitraat vormt bij zuigelingen risico op methemoglobinemie. Het RIVM hanteert voor baby\'s een veiligheidsgrens van circa 10 mg/L nitraat, ver onder de norm voor volwassenen van 50 mg/L. Een filterkan biedt hier geen voldoende bescherming.',
  },
  {
    question: 'Hoe kies ik tussen osmose en UV-filter?',
    answer:
      'Osmose en UV pakken fundamenteel verschillende problemen aan. Osmose verwijdert chemische stoffen: nitraat, PFAS, zware metalen, kalk. UV doodt biologische organismen: bacteriën, virussen, Giardia, Cryptosporidium. Als je zowel chemische als biologische verontreinigingen wilt aanpakken — zoals bij putwater — combineer je beide technologieën. Bij stadswater en chemische bezorgdheid kies je osmose; bij microbiologische bezorgdheid bij een eigen bron kies je UV als basis.',
  },
];

type FilterMatrixRij = {
  filtertype: string;
  chloor: string;
  kalk: string;
  nitraat: string;
  pfas: string;
  bacterien: string;
  microplastics: string;
  aanschaf: string;
  jaarkosten: string;
};

const filterMatrix: FilterMatrixRij[] = [
  { filtertype: 'Filterkan (Brita/BWT)', chloor: '95%+', kalk: '30–60%', nitraat: '<10%', pfas: '<20%', bacterien: 'Nee', microplastics: 'Nee', aanschaf: '€18–45', jaarkosten: '€45–100' },
  { filtertype: 'Koolstoffilter onderbouw', chloor: '95%+', kalk: '30–60%', nitraat: '<10%', pfas: 'Deels', bacterien: 'Nee', microplastics: 'Deels', aanschaf: '€50–150', jaarkosten: '€30–60' },
  { filtertype: 'Osmose onderbouw', chloor: '95–99%', kalk: '95–99%', nitraat: '85–95%', pfas: '95–99%', bacterien: 'Via membraan', microplastics: 'Ja', aanschaf: '€150–400', jaarkosten: '€60–110' },
  { filtertype: 'Osmose aanrecht', chloor: '95–99%', kalk: '95–99%', nitraat: '85–95%', pfas: '95–99%', bacterien: 'Via membraan', microplastics: 'Ja', aanschaf: '€100–350', jaarkosten: '€40–100' },
  { filtertype: 'UV-filter', chloor: 'Nee', kalk: 'Nee', nitraat: 'Nee', pfas: 'Nee', bacterien: '99,99%', microplastics: 'Nee', aanschaf: '€80–250', jaarkosten: '€30–80' },
  { filtertype: 'Waterontharder', chloor: 'Nee', kalk: '95–99%', nitraat: 'Nee', pfas: 'Nee', bacterien: 'Nee', microplastics: 'Nee', aanschaf: '€300–800', jaarkosten: '€60–120' },
  { filtertype: '4-in-1 kokend water kraan', chloor: '95–99%', kalk: '95–99%', nitraat: '85–95%', pfas: '95–99%', bacterien: 'Via membraan', microplastics: 'Ja', aanschaf: '€700–1.000', jaarkosten: '€80–150' },
  { filtertype: 'Keramisch filter', chloor: 'Deels', kalk: 'Nee', nitraat: 'Nee', pfas: 'Nee', bacterien: '99%+', microplastics: 'Deels', aanschaf: '€30–120', jaarkosten: '€20–50' },
];

const aanbevelingKaarten = [
  {
    titel: 'Huurder: smaak en chloor verbeteren',
    aanbeveling: 'Filterkan of aanrecht osmose',
    reden: 'Geen installatie nodig. Een filterkan (Brita, BWT) is direct bruikbaar voor chloor en smaakverbetering. Aanrecht osmose geeft betere filtratie via een kraanadapter.',
    budget: '€18–350',
    kleur: 'green',
  },
  {
    titel: 'Eigenaar in agrarische regio (nitraat/PFAS)',
    aanbeveling: 'Omgekeerde osmose onderbouw',
    reden: 'Enige betrouwbare thuisoplossing voor nitraat (85–95%) en PFAS (95–99%). Eenmalige installatie onder aanrecht, jaarlijkse filterwissel.',
    budget: '€150–400 aanschaf + €60–110/jr',
    kleur: 'blue',
  },
  {
    titel: 'Gezin met hard water en kokend water behoefte',
    aanbeveling: '4-in-1 kokend water kraan',
    reden: 'Verwijdert kalk (95–99%), nitraat, PFAS en levert direct kokend water. Vervangt waterkoker en filterkan. Premium investering voor maximale dagelijkse gebruikswaarde.',
    budget: '€700–1.000 aanschaf + €80–150/jr',
    kleur: 'orange',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
  { name: 'Welk filter', url: 'https://waterfilterplatform.nl/waterfilter/welk-filter' },
];

export default function WelkWaterfilterPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Welk waterfilter heb ik nodig? Keuzehulp 2026',
          description:
            'Welk waterfilter past bij jouw situatie? Keuzehulp met beslissingsstappen op basis van probleem, budget en installatiemogelijkheid.',
          datePublished: '2026-03-05',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/waterfilter/welk-filter',
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
            <span className="text-gray-700 font-medium">Welk filter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Welk waterfilter heb ik nodig? Keuzehulp 2026
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Of je nu chloor wilt verwijderen, nitraat vreest, last hebt van kalkaanslag of huurder
            bent zonder installatieruimte — het juiste waterfilter hangt af van je specifieke
            situatie. Deze keuzehulp leidt je in drie stappen naar het beste antwoord.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~9 min leestijd</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">

        <QuickAnswer answer="Welk waterfilter je nodig hebt hangt af van drie factoren: je hoofdprobleem (smaak → koolstoffilter, bacteriën → UV, nitraat/PFAS → osmose, kalk → osmose of ontharder), je budget (<€50/jr filterkan, €50–200 koolstof, €200+ osmose) en of je kunt installeren (huurder → filterkan of aanrecht RO, eigenaar → onderbouw osmose)." />

        {/* Inhoudsopgave */}
        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#stap1', 'Stap 1: wat is je hoofdprobleem?'],
              ['#stap2', 'Stap 2: wat is je budget?'],
              ['#stap3', 'Stap 3: wat zijn je installatiemogelijkheden?'],
              ['#matrix', 'Vergelijkingsmatrix: 8 filtertypen'],
              ['#aanbevelingen', 'Top 3 aanbevelingen per situatie'],
              ['#links', 'Gerelateerde filterpagina\'s'],
              ['#faq', 'Veelgestelde vragen'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#003F5C] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Inleiding */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe kies je het juiste waterfilter?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Nederlandse waterfiltermarkt biedt tientallen opties: filterkannen, koolstoffilters,
            osmosefilters, UV-systemen, ontharders en combinatiesystemen. Om de juiste keuze te maken
            zonder overweldigd te raken, helpt het om drie vragen in volgorde te beantwoorden.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ten eerste: <strong>wat is je primaire waterprobleem?</strong> Chloor en smaak vragen
            om een andere oplossing dan nitraat of bacteriologische besmetting. Ten tweede: welk
            budget is beschikbaar — zowel aanschaf als jaarlijkse kosten? Ten derde: mag en kun je
            een systeem installeren, of woon je in een huurwoning zonder die mogelijkheid?
          </p>
          <p className="text-gray-700 leading-relaxed">
            Gebruik ook de{' '}
            <Link href="/waterfilter/vergelijken" className="text-[#005F8A] underline hover:no-underline">
              waterfilter vergelijkingspagina
            </Link>{' '}
            voor een compleet overzicht van alle filtertypen naast elkaar.
          </p>
        </section>

        {/* Stap 1 */}
        <section id="stap1">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Stap 1: wat is je hoofdprobleem met je kraanwater?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Jouw primaire bezorgdheid bepaalt welk filtertype je nodig hebt. Onderstaande
            beslissingshulp koppelt veelvoorkomende waterproblemen aan de juiste filtertechnologie.
          </p>
          <div className="space-y-4">
            <div className="border border-gray-100 rounded-xl p-5 bg-white">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#E0F2FE] text-[#003F5C] font-bold flex items-center justify-center shrink-0 text-sm">A</div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1">Smaak en/of chloorlucht</p>
                  <p className="text-sm text-gray-600 mb-2">
                    Je hebt geen specifieke gezondheidsklacht maar stoort je aan de chloorlucht of
                    metaalachtige smaak van leidingwater.
                  </p>
                  <p className="text-sm font-medium text-[#005F8A]">
                    Aanbeveling: <Link href="/koolstoffilter" className="underline hover:no-underline">koolstoffilter (onderbouw of filterkan)</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-100 rounded-xl p-5 bg-white">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#E0F2FE] text-[#003F5C] font-bold flex items-center justify-center shrink-0 text-sm">B</div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1">Bacteriën, virussen of Legionella</p>
                  <p className="text-sm text-gray-600 mb-2">
                    Je hebt een eigen waterput, bronwater, regenwater of bent bezorgd over microbiologische
                    veiligheid (vakantiewoning, oudere leidingen).
                  </p>
                  <p className="text-sm font-medium text-[#005F8A]">
                    Aanbeveling: <Link href="/uv-filter" className="underline hover:no-underline">UV-filter</Link> of keramisch filter, altijd gecombineerd met een sedimentfilter
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-100 rounded-xl p-5 bg-white">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#E0F2FE] text-[#003F5C] font-bold flex items-center justify-center shrink-0 text-sm">C</div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1">Nitraat, PFAS of zware metalen</p>
                  <p className="text-sm text-gray-600 mb-2">
                    Je woont in een agrarische regio met verhoogd nitraat, nabij een industriële PFAS-bron
                    (Chemours/DuPont gebied, brandweefoefenterreinen), of hebt oudere leidingen met loodrisico.
                  </p>
                  <p className="text-sm font-medium text-[#005F8A]">
                    Aanbeveling: <Link href="/omgekeerde-osmose" className="underline hover:no-underline">omgekeerde osmose</Link> — enige betrouwbare thuisoplossing voor deze stoffen
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-100 rounded-xl p-5 bg-white">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#E0F2FE] text-[#003F5C] font-bold flex items-center justify-center shrink-0 text-sm">D</div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1">Waterhardheid en kalkaanslag</p>
                  <p className="text-sm text-gray-600 mb-2">
                    Je hebt witte aanslag op espressomachines, vaatwassers en ketels. Je water is hard
                    (meer dan 12°dH). Je wilt de levensduur van apparatuur verlengen en de smaak van
                    koffie verbeteren.
                  </p>
                  <p className="text-sm font-medium text-[#005F8A]">
                    Aanbeveling: osmose filter (95–99% hardheidsverlaging) of waterontharder/waterontkalker
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stap 2 */}
        <section id="stap2">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Stap 2: wat is je budget per jaar?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Naast de aanschafprijs tellen ook de jaarlijkse filterkosten mee. Vergelijk altijd de
            totale eigendomskosten over drie tot vijf jaar — een goedkope filterkan kan op
            jaarbasis duurder zijn dan een kwaliteits-osmosesysteem.
          </p>
          <div className="space-y-4">
            <div className="border border-green-200 bg-green-50 rounded-xl p-5">
              <p className="font-semibold text-green-900 mb-2">Minder dan €50 per jaar</p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Keuze: filterkan</strong> — aanschaf €18–45, filterpatronen €45–100 per jaar.
                Verwijdert chloor en verbetert smaak. Geen installatie nodig. Beperkte filterwerkzaamheid
                op nitraat, PFAS of bacteriën. Geschikt voor mensen die primair smaak willen verbeteren
                in gebieden zonder bijzondere waterverontreiniging.
              </p>
              <Link href="/filterkan" className="text-sm text-[#005F8A] underline hover:no-underline">
                Meer over filterkansen →
              </Link>
            </div>

            <div className="border border-blue-200 bg-blue-50 rounded-xl p-5">
              <p className="font-semibold text-blue-900 mb-2">€50–200 per jaar</p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Keuze: koolstoffilter onderbouw of aanrecht RO</strong> — aanschaf €50–350,
                jaarkosten €30–100. De onderbouw koolstoffilter heeft hogere capaciteit dan een filterkan
                en lagere filterkosten per liter. Een aanrecht osmose geeft volledige RO-filtratie zonder
                boorwerk. Ideaal voor wie meer filterkwaliteit wil zonder grote investering.
              </p>
              <Link href="/koolstoffilter" className="text-sm text-[#005F8A] underline hover:no-underline">
                Meer over koolstoffilters →
              </Link>
            </div>

            <div className="border border-[#005F8A]/30 bg-[#E0F2FE] rounded-xl p-5">
              <p className="font-semibold text-[#003F5C] mb-2">€200–500 investering (eenmalig) + €60–110 per jaar</p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Keuze: omgekeerde osmose onderbouw</strong> — aanschaf €150–400, installatie
                €0–80, jaarkosten €60–110. Beste prijs-kwaliteitsverhouding voor maximale zuivering.
                Verwijdert nitraat, PFAS, zware metalen, kalk en microplastics. Eenmaal per jaar
                filters wisselen. De logische keuze voor eigenaren met specifieke waterproblematiek.
              </p>
              <Link href="/omgekeerde-osmose" className="text-sm text-[#005F8A] underline hover:no-underline">
                Meer over osmosefilters →
              </Link>
            </div>
          </div>
        </section>

        {/* Stap 3 */}
        <section id="stap3">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Stap 3: wat zijn je installatiemogelijkheden?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Je woonsituatie bepaalt welke systemen haalbaar zijn. Huurders met beperkte mogelijkheden
            voor permanent boorwerk hebben andere opties dan eigenaars die vrijelijk kunnen aanpassen.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
              <p className="font-bold text-gray-900 mb-3">Huurder zonder boortoestemming</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2 items-start">
                  <span className="text-green-600 shrink-0 font-bold">✓</span>
                  <span><strong>Filterkan</strong> — geen installatie, direct bruikbaar, meeneembaar</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-green-600 shrink-0 font-bold">✓</span>
                  <span><strong>Aanrecht osmose (countertop)</strong> — kraanadapter, geen boorwerk, volledige RO-filtratie</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-amber-600 shrink-0 font-bold">~</span>
                  <span><strong>Countertop UV</strong> — staat op aanrecht, geen installatie nodig</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#E0F2FE] border border-[#005F8A]/20 rounded-xl p-5">
              <p className="font-bold text-[#003F5C] mb-3">Eigenaar of huurder met toestemming</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2 items-start">
                  <span className="text-green-600 shrink-0 font-bold">✓</span>
                  <span><strong>Osmose onderbouw</strong> — T-stuk op koudwater, sifon-aansluiting, eigen kraantje</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-green-600 shrink-0 font-bold">✓</span>
                  <span><strong>4-in-1 kokend water kraan</strong> — één boorgat in aanrechtblad, alles-in-één</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-green-600 shrink-0 font-bold">✓</span>
                  <span><strong>Inline UV-filter</strong> — in de leidingkast of onder aanrecht op waterleiding</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vergelijkingsmatrix */}
        <section id="matrix">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Vergelijkingsmatrix: 8 filtertypen op 8 criteria
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            De tabel hieronder zet acht waterfiltertypen af tegen acht criteria die relevant zijn
            voor de dagelijkse keuze. Scroll horizontaal op mobiel voor de volledige tabel.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[800px] text-xs border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-3 py-3 font-semibold">Filtertype</th>
                  <th className="text-center px-2 py-3 font-semibold">Chloor</th>
                  <th className="text-center px-2 py-3 font-semibold">Kalk</th>
                  <th className="text-center px-2 py-3 font-semibold">Nitraat</th>
                  <th className="text-center px-2 py-3 font-semibold">PFAS</th>
                  <th className="text-center px-2 py-3 font-semibold">Bacteriën</th>
                  <th className="text-center px-2 py-3 font-semibold">Microplastics</th>
                  <th className="text-center px-2 py-3 font-semibold">Aanschaf</th>
                  <th className="text-center px-2 py-3 font-semibold">Jaarkosten</th>
                </tr>
              </thead>
              <tbody>
                {filterMatrix.map((row, i) => (
                  <tr key={row.filtertype} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-2.5 font-medium text-gray-900">{row.filtertype}</td>
                    <td className="px-2 py-2.5 text-center text-gray-700">{row.chloor}</td>
                    <td className="px-2 py-2.5 text-center text-gray-700">{row.kalk}</td>
                    <td className="px-2 py-2.5 text-center text-gray-700">{row.nitraat}</td>
                    <td className="px-2 py-2.5 text-center text-gray-700">{row.pfas}</td>
                    <td className="px-2 py-2.5 text-center text-gray-700">{row.bacterien}</td>
                    <td className="px-2 py-2.5 text-center text-gray-700">{row.microplastics}</td>
                    <td className="px-2 py-2.5 text-center text-gray-700">{row.aanschaf}</td>
                    <td className="px-2 py-2.5 text-center text-gray-700">{row.jaarkosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            Percentages zijn indicatief bij optimale condities. Exacte prestaties variëren per merk
            en model. Vraag altijd om NSF/ANSI testcertificaten bij aanschaf.
          </p>
        </section>

        {/* Top 3 aanbevelingen */}
        <section id="aanbevelingen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Top 3 aanbevelingen per situatie
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Op basis van de drie keuzestappen zijn dit de meest voorkomende situaties met de
            bijbehorende beste aanbeveling.
          </p>
          <div className="space-y-5">
            {aanbevelingKaarten.map((kaart, i) => (
              <div
                key={kaart.titel}
                className={`rounded-2xl border p-5 ${
                  kaart.kleur === 'green'
                    ? 'border-green-200 bg-green-50'
                    : kaart.kleur === 'blue'
                    ? 'border-[#005F8A]/30 bg-[#E0F2FE]'
                    : 'border-orange-200 bg-orange-50'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`w-8 h-8 rounded-full font-bold text-white flex items-center justify-center text-sm ${
                    kaart.kleur === 'green' ? 'bg-green-600' : kaart.kleur === 'blue' ? 'bg-[#005F8A]' : 'bg-orange-500'
                  }`}>
                    {i + 1}
                  </span>
                  <p className="font-bold text-gray-900">{kaart.titel}</p>
                </div>
                <p className={`text-sm font-semibold mb-2 ${
                  kaart.kleur === 'green' ? 'text-green-800' : kaart.kleur === 'blue' ? 'text-[#003F5C]' : 'text-orange-800'
                }`}>
                  Aanbeveling: {kaart.aanbeveling}
                </p>
                <p className="text-sm text-gray-700 mb-2">{kaart.reden}</p>
                <p className="text-xs text-gray-500">Budget indicatie: {kaart.budget}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Gerelateerde pagina's */}
        <section id="links">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gerelateerde filterpagina&apos;s</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/waterfilter/soorten',
                title: 'Waterfilter soorten',
                desc: 'Uitleg van alle filtertechnieken: koolstof, osmose, UV, keramisch en meer.',
              },
              {
                href: '/waterfilter/vergelijken',
                title: 'Waterfilter vergelijken',
                desc: 'Grote vergelijkingstabel van alle filtertypen op prijs, prestatie en installatie.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose uitgelegd',
                desc: 'Hoe werkt een osmosefilter en wanneer is het de juiste keuze?',
              },
              {
                href: '/waterfilter/osmose-vs-koolstof',
                title: 'Osmose vs koolstoffilter',
                desc: 'Gedetailleerde vergelijking: wanneer kies je osmose en wanneer koolstof?',
              },
              {
                href: '/uv-filter',
                title: 'UV-waterfilter uitgelegd',
                desc: 'Hoe UV-C licht bacteriën en virussen neutraliseert — werking en toepassingen.',
              },
              {
                href: '/koolstoffilter',
                title: 'Koolstoffilter',
                desc: 'Alles over actief koolstoffilters: werking, types en wanneer ze voldoende zijn.',
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

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen: welk waterfilter heb ik nodig?
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
