import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'BWT filterkan: Penguin, Minerva en mg²⁺ technologie uitgelegd 2026',
  description:
    'BWT filterkansen onderscheiden zich door magnesium-verrijking (mg²⁺). Vergelijking Penguin, Minerva en BWT Vida modellen: prijzen, filters en wat ze.',
  alternates: { canonical: 'https://waterfilterplatform.nl/filterkan/bwt' },
  openGraph: {
    title: 'BWT filterkan: Penguin, Minerva en mg²⁺ technologie uitgelegd 2026',
    description:
      'BWT filterkansen onderscheiden zich door magnesium-verrijking (mg²⁺). Vergelijking Penguin, Minerva en BWT Vida modellen: prijzen, filters en wat ze.',
    url: 'https://waterfilterplatform.nl/filterkan/bwt',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is het verschil tussen BWT en Brita?',
    answer:
      'Het belangrijkste onderscheid: BWT voegt magnesium toe aan gefilterd water via mg²⁺ technologie — Brita doet dat niet. BWT\'s ionenwisselaar wisselt calcium (kalk) gedeeltelijk om voor magnesiumionen, wat de smaak van koffie en thee verbetert. Brita wisselt calcium om voor natrium of waterstof. BWT heeft een smallere modellenkeuze dan Brita, en merkloze filters zijn voor BWT nauwelijks verkrijgbaar, waardoor de kosten per patroon structureel hoger liggen. Filterprestaties op chloor en smaak zijn vergelijkbaar tussen beide merken.',
  },
  {
    question: 'Hoe werkt de BWT mg²⁺ technologie?',
    answer:
      'BWT\'s mg²⁺ technologie is gebaseerd op selectieve ionenwisseling. De ionenwisselaarhars in het BWT-filterpatroon is geladen met magnesiumionen. Wanneer hard water — rijk aan calciumionen (kalk) — door het filter stroomt, worden calciumionen tegengehouden en vrijgegeven magnesiumionen gaan mee het gefilterde water in. Calcium veroorzaakt bitterheid in koffie door extractie van ongewenste aromamoleculen; magnesium versterkt juist het aroma en de zoetheid. Dit maakt BWT populair in de specialty coffee-wereld. De totale geleidbaarheid van het water verandert nauwelijks, maar de ionensamenstelling verschuift gunstig voor koffie- en theebereiding.',
  },
  {
    question: 'Welke BWT filterkan modellen zijn er?',
    answer:
      'BWT biedt vier hoofdmodellen aan voor de consumentenmarkt in 2026: het Penguin (2,7L met glazen onderkant, €35–50), de Minerva (3L volledig plastic, €25–35), de BWT Vida (2,6L budgetmodel, €18–25) en de Fill & Enjoy (3L, €20–28). Alle modellen gebruiken dezelfde BWT filterpatronen met mg²⁺ technologie. Het Penguin-model is het populairst en wordt ook gebruikt in de horeca vanwege de glazen constructie.',
  },
  {
    question: 'Hoe vaak het BWT filter vervangen?',
    answer:
      'BWT adviseert het filterpatroon te vervangen elke 4 weken of na 120 liter gefilterd water — wat het eerst bereikt wordt. Dit is iets minder capaciteit dan de Brita Maxtra Pro (150 liter per patroon). Voor een huishouden van twee personen dat gemiddeld 1,5 liter per dag filtert, kom je op circa 12–14 patronen per jaar. BWT-kannen hebben een mechanische of digitale filtermemo die de vervangingsdatum bijhoudt. Na de vervaldatum neemt de filterprestatie af en kan de mg²⁺ overdracht verminderen.',
  },
  {
    question: 'Is BWT goed voor hard water regio\'s?',
    answer:
      'Ja, het mg²⁺ filter van BWT verwijdert calcium effectief via ionenwisseling en is daarmee ook een gedeeltelijk kalkfilter. Bij waterhardheid van 8–16°dH is het effect goed merkbaar: minder kalkvorming in de kan en betere smaak. Bij hardheid boven 18°dH is het filter echter niet geschikt voor volledige ontharding — de ionenwisselaar raakt sneller verzadigd en je moet frequenter vervangen. Voor structureel hard water boven 20°dH biedt een waterontharder of omgekeerde osmose een fundamenteel betere oplossing.',
  },
  {
    question: 'Zijn BWT filters compatibel met Brita kannen?',
    answer:
      'Nee, absoluut niet. BWT en Brita filterpatronen hebben een andere patroonvorm en zijn niet onderling uitwisselbaar. Een BWT-patroon past niet in een Brita-kan, en een Brita Maxtra Pro past niet in een BWT-kan. Dit geldt ook andersom. Zorg er bij aanschaf van vervangende patronen altijd voor dat u de juiste patronen voor uw specifieke kan koopt. Merkloze patronen voor BWT zijn schaars en vrijwel niet NSF-gecertificeerd.',
  },
  {
    question: 'Wat kost een BWT filterkan per jaar?',
    answer:
      'Een BWT filterpatroon kost €4–6 per stuk en filtert 120 liter (4 weken). Bij gemiddeld gebruik van 1,5 liter per dag verbruikt een tweepersoonsgezin circa 12 patronen per jaar: jaarkosten van €50–75. De aanschafprijs van de kan (€18–50) schrijf je af over 3–5 jaar. Ter vergelijking: Brita met originele patronen kost bij vergelijkbaar gebruik €45–60 per jaar. BWT is structureel iets duurder vanwege hogere patronenprijzen en iets lagere capaciteit per patroon.',
  },
  {
    question: 'Wat verwijdert een BWT filter niet?',
    answer:
      'Een BWT filterpatroon verwijdert niet: nitraten (ionenwisselaar niet selectief genoeg), PFAS en PFOA (standaard koolstof onvoldoende), bacteriën en virussen (geen microbiologische bescherming), microplastics (alleen grotere deeltjes), en medicijnresten. BWT is net als Brita primair een smaak- en geurfilter met gedeeltelijke kalkverwijdering. Voor volledige waterzuivering — inclusief nitraten, PFAS of bacteriën — is omgekeerde osmose vereist.',
  },
];

const bwtModellen = [
  {
    model: 'Penguin',
    capaciteit: '2,7L',
    materiaal: 'Glas + plastic',
    mg2: 'Ja',
    prijsKan: '€35–50',
    filterPer4wk: '€4–6',
  },
  {
    model: 'Minerva',
    capaciteit: '3,0L',
    materiaal: 'Plastic',
    mg2: 'Ja',
    prijsKan: '€25–35',
    filterPer4wk: '€4–6',
  },
  {
    model: 'Vida',
    capaciteit: '2,6L',
    materiaal: 'Plastic',
    mg2: 'Ja',
    prijsKan: '€18–25',
    filterPer4wk: '€3–5',
  },
  {
    model: 'Fill & Enjoy',
    capaciteit: '3,0L',
    materiaal: 'Plastic',
    mg2: 'Ja',
    prijsKan: '€20–28',
    filterPer4wk: '€4–6',
  },
];

const bwtVsBritaPunten = [
  {
    kenmerk: 'Magnesiumverrijking',
    bwt: 'Ja — mg²⁺ technologie',
    brita: 'Nee',
    voordeel: 'bwt',
  },
  {
    kenmerk: 'Modellenkeuze',
    bwt: '4 modellen',
    brita: '8+ modellen',
    voordeel: 'brita',
  },
  {
    kenmerk: 'Filterpatroon capaciteit',
    bwt: '120 liter / 4 weken',
    brita: '150 liter / 4 weken',
    voordeel: 'brita',
  },
  {
    kenmerk: 'Patronenprijs (origineel)',
    bwt: '€4–6 per stuk',
    brita: '€4–5 per stuk',
    voordeel: 'brita',
  },
  {
    kenmerk: 'Merkloze patronen beschikbaar',
    bwt: 'Nauwelijks',
    brita: 'Breed aanbod',
    voordeel: 'brita',
  },
  {
    kenmerk: 'NSF-certificering patroon',
    bwt: 'NSF/ANSI 42',
    brita: 'NSF/ANSI 53 (Maxtra Pro)',
    voordeel: 'brita',
  },
  {
    kenmerk: 'Koffie- en theegeschiktheid',
    bwt: 'Uitstekend (mg²⁺)',
    brita: 'Goed',
    voordeel: 'bwt',
  },
  {
    kenmerk: 'Glazen uitvoering beschikbaar',
    bwt: 'Ja (Penguin)',
    brita: 'Ja (Style)',
    voordeel: 'gelijk',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Filterkan', url: 'https://waterfilterplatform.nl/filterkan' },
  { name: 'BWT', url: 'https://waterfilterplatform.nl/filterkan/bwt' },
];

export default function BwtFilterkanPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'BWT filterkan: Penguin, Minerva en mg²⁺ technologie uitgelegd 2026',
          description:
            'BWT filterkansen onderscheiden zich door magnesium-verrijking (mg²⁺). Vergelijking Penguin, Minerva en BWT Vida modellen: prijzen, filters en wat ze.',
          datePublished: '2026-05-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/filterkan/bwt',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/filterkan" className="hover:text-[#005F8A]">Filterkan</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">BWT</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            BWT filterkan: Penguin, Minerva en mg²⁺ technologie uitgelegd 2026
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-2">
            BWT is het Oostenrijkse filterkannenmerk dat zich onderscheidt van Brita door één uniek
            kenmerk: mg²⁺ technologie. Waarbij Brita kalk simpelweg verwijdert, wisselt BWT calcium
            selectief om voor magnesium. Dit levert aantoonbaar betere koffie- en theesmaak op —
            maar is een BWT filterkan voor iedereen de juiste keuze?
          </p>
          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">
              Bijgewerkt mei 2026
            </span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">
              ~7 min leestijd
            </span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">

        {/* Quick Answer */}
        <QuickAnswer answer="BWT filterkansen voegen magnesium (mg²⁺) toe aan gefilterd water — een uniek kenmerk ten opzichte van Brita. Het BWT Penguin (2,7L) en Minerva (3L) filteren chloor, kalk en zware metalen, én verrijken het water met magnesium voor beter smakende koffie en thee. Filterpatroon €4–6, elke 4 weken vervangen." />

        {/* Inhoudsopgave */}
        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#modellen', 'BWT filterkan modellen vergelijking'],
              ['#mg2-technologie', 'BWT mg²⁺ technologie uitgelegd'],
              ['#bwt-vs-brita', 'BWT vs Brita — kernverschillen'],
              ['#wanneer-bwt', 'Wanneer kies je BWT boven Brita?'],
              ['#wanneer-meer', 'Wanneer heb je meer nodig dan BWT?'],
              ['#faq', 'Veelgestelde vragen'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#003F5C] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Modellen vergelijking */}
        <section id="modellen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welke BWT filterkan modellen zijn beschikbaar in 2026?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            BWT biedt vier consumentenmodellen aan in Nederland. Alle modellen gebruiken dezelfde
            BWT filterpatronen met mg²⁺ technologie. Het onderscheid zit in capaciteit, materiaal
            en prijsklasse. Het Penguin-model — met glazen onderkant — is het populairst en wordt
            ook door barista&#39;s en koffieprofessionals aanbevolen.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Model</th>
                  <th className="text-center px-4 py-3 font-semibold">Capaciteit</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Materiaal</th>
                  <th className="text-center px-4 py-3 font-semibold">mg²⁺</th>
                  <th className="text-center px-4 py-3 font-semibold">Prijs kan</th>
                  <th className="text-center px-4 py-3 font-semibold hidden sm:table-cell">Filter/4wk</th>
                </tr>
              </thead>
              <tbody>
                {bwtModellen.map((row, i) => (
                  <tr
                    key={row.model}
                    className={
                      row.model === 'Penguin'
                        ? 'bg-[#E0F2FE] border-l-4 border-[#005F8A]'
                        : i % 2 === 0
                        ? 'bg-white'
                        : 'bg-gray-50'
                    }
                  >
                    <td className="px-4 py-3 font-semibold text-[#003F5C]">{row.model}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.capaciteit}</td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.materiaal}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-block bg-green-100 text-green-800 font-semibold text-xs px-2 py-0.5 rounded-full">
                        {row.mg2}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center font-medium text-gray-900">{row.prijsKan}</td>
                    <td className="px-4 py-3 text-center text-gray-700 hidden sm:table-cell">{row.filterPer4wk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-2">
            Blauw gemarkeerd: aanbevolen model. Prijzen indicatief op basis van gangbare verkoopprijzen in Nederland (2026).
          </p>
          <div className="mt-5 bg-[#E0F2FE] rounded-xl p-4 text-sm text-gray-700 border border-[#005F8A]/10">
            <strong className="text-[#003F5C]">BWT Penguin — waarom zo populair?</strong> De glazen
            onderkant van de Penguin is niet alleen esthetisch aantrekkelijk, maar ook praktischer
            bij dagelijks gebruik: glas neemt geen geuren op, is vaatwasserbestendig en geeft geen
            plasticgeur af aan het gefilterde water. Samen met de mg²⁺ technologie maakt dit de
            Penguin populair bij koffieliefhebbers die de smaak van hun drankjes optimaal willen
            houden.
          </div>
        </section>

        {/* mg2 technologie */}
        <section id="mg2-technologie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            BWT mg²⁺ technologie — hoe werkt het en wat levert het op?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De mg²⁺ technologie is het kernkenmerk dat BWT onderscheidt van alle andere
            filterkanmerken. Het principe is eenvoudig maar heeft meetbare effecten op smaak,
            met name bij koffie en thee.
          </p>
          <div className="space-y-4 mb-6">
            <div className="border border-gray-100 rounded-xl p-5 bg-gray-50">
              <p className="font-semibold text-[#003F5C] mb-2">Stap 1: Kalkverwijdering via ionenwisseling</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Hard water bevat calciumionen (Ca²⁺) en magnesiumionen (Mg²⁺) — gezamenlijk
                aangeduid als &apos;tijdelijke hardheid&apos;. De BWT-ionenwisselaarhars is geladen met
                magnesiumionen. Wanneer water door het filter stroomt, worden calciumionen (de
                primaire veroorzaker van kalkafzetting) uit het water getrokken en uitgewisseld
                tegen magnesiumionen. Het resultaat: minder kalk, meer magnesium.
              </p>
            </div>
            <div className="border border-[#005F8A]/20 rounded-xl p-5 bg-[#E0F2FE]">
              <p className="font-semibold text-[#003F5C] mb-2">Stap 2: Magnesiumverrijking voor betere smaak</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Magnesium speelt een unieke rol in de koffiechemie. Calcium-ionen binden sterk aan
                bepaalde aromamoleculen en kunnen bittere verbindingen uit het koffiezetsel trekken.
                Magnesium is een betere &apos;aroma-extractor&apos;: het bindt aan wenselijke
                smaakverbindingen en laat bittere achterwege. Dit is geen marketingclaim —
                onderzoek gepubliceerd in <em>Nature Scientific Reports</em> (2020) toonde aan dat
                magnesiumrijker water aantoonbaar meer gewenste aromamoleculen extraheert uit
                koffiebonen dan calciumrijker water.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Voor theezetten geldt een vergelijkbaar principe: zachter water met aanwezig magnesium
            trekt minder looistoffen (tannines) uit thee — wat resulteert in een minder wrange,
            rondere smaak. Barista&apos;s en specialty coffee-enthousiaten kiezen daarom structureel
            voor BWT of voor geprogrammeerd remineralisatiewater.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4 text-sm text-gray-700">
            <strong className="text-amber-900">Nuance:</strong> De smaakverbetering van mg²⁺ is
            vooral merkbaar bij specialty espresso en filterkoffie met geprepareerde bonen. Voor
            dagelijks gebruik van instant koffie of theebuiltjes is het verschil voor de meeste
            mensen minder significant. In gebieden met al zacht water (onder 8°dH) is het
            mg²⁺-effect minimaal.
          </div>
        </section>

        {/* BWT vs Brita */}
        <section id="bwt-vs-brita">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            BWT vs Brita — 6 kernverschillen op een rij
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Brita en BWT zijn de twee dominante filterkanmerken in Nederland. Ze lijken sterk op
            elkaar in functie en prijs, maar verschillen op een aantal wezenlijke punten. Hieronder
            een directe vergelijking op de meest relevante criteria.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Kenmerk</th>
                  <th className="text-center px-4 py-3 font-semibold">BWT</th>
                  <th className="text-center px-4 py-3 font-semibold">Brita</th>
                </tr>
              </thead>
              <tbody>
                {bwtVsBritaPunten.map((row, i) => (
                  <tr key={row.kenmerk} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.kenmerk}</td>
                    <td
                      className={`px-4 py-3 text-center text-sm ${
                        row.voordeel === 'bwt'
                          ? 'font-semibold text-[#005F8A]'
                          : 'text-gray-600'
                      }`}
                    >
                      {row.bwt}
                    </td>
                    <td
                      className={`px-4 py-3 text-center text-sm ${
                        row.voordeel === 'brita'
                          ? 'font-semibold text-[#005F8A]'
                          : 'text-gray-600'
                      }`}
                    >
                      {row.brita}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Voor een uitgebreide vergelijking op alle criteria, lees onze pagina{' '}
            <Link
              href="/filterkan/brita-vs-bwt"
              className="text-[#005F8A] underline hover:no-underline"
            >
              Brita vs BWT filterkan vergelijking
            </Link>
            .
          </p>
        </section>

        {/* Wanneer kies je BWT */}
        <section id="wanneer-bwt">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer kies je BWT boven Brita?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            BWT is niet voor iedereen de beste keuze — maar in een aantal specifieke situaties biedt
            het BWT-filter een duidelijk voordeel ten opzichte van Brita.
          </p>
          <div className="rounded-xl border border-green-200 bg-green-50 p-5 mb-4">
            <p className="font-bold text-green-800 mb-3">Kies BWT als...</p>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                {
                  kop: 'Je koffieliefhebber bent',
                  tekst:
                    'Specialty coffee, espresso of filterkoffie van kwaliteitsbonen profiteert aantoonbaar van magnesiumrijker water. BWT is populair in de barista-wereld en wordt aangeraden door diverse specialtycoffeeshops.',
                },
                {
                  kop: 'Je regelmatig thee drinkt',
                  tekst:
                    'Magnesiumhoudend gefilterd water geeft thee een rondere smaak door minder looistoffentonttrekking. Voor groene thee en lichte oolongs is dit het meest merkbaar.',
                },
                {
                  kop: 'Je in een matig hard watergebied woont (8–16°dH)',
                  tekst:
                    'Bij matige hardheid is de mg²⁺-omwisseling het meest effectief. Het filter verwijdert voldoende calcium om kalkvorming te beperken, terwijl de magnesiumoverdracht optimaal is.',
                },
                {
                  kop: 'Je een glazen kan prefereert',
                  tekst:
                    'De BWT Penguin heeft een glazen onderkant — de enige BWT-kan met glas. Dit is voor gebruikers die plasticcontact met drinkwater willen minimaliseren een aantrekkelijke keuze.',
                },
              ].map(item => (
                <li key={item.kop} className="flex gap-2 items-start">
                  <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                  <span>
                    <strong>{item.kop}:</strong> {item.tekst}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <p className="font-bold text-gray-700 mb-3">Kies Brita als...</p>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                'Je een breed aanbod van modellen en maten zoekt (Brita heeft meer keuze)',
                'Je kosten wilt beperken met merkloze patronen (voor BWT nauwelijks verkrijgbaar)',
                'Je de hoogste NSF-certificering (NSF/ANSI 53) wilt voor lood- en pesticidereductie',
                'Je koffie en thee minder prioriteit geeft dan het filteren van kraanwater voor drinkwater',
              ].map(item => (
                <li key={item} className="flex gap-2 items-start">
                  <span className="text-gray-400 shrink-0 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Wanneer heb je meer nodig dan BWT */}
        <section id="wanneer-meer">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer heb je meer nodig dan een BWT filter?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een BWT filterkan is — net als een Brita — primair een smaak- en geurfilter. Er zijn
            situaties waarbij een filterkan fundamenteel tekortschiet, ongeacht het merk.
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                titel: 'Verhoogde nitraatniveaus',
                tekst:
                  'Nitraat komt voor in water van privéputten en in landbouwintensieve gebieden. BWT verwijdert nitraat nauwelijks (<10%). Nitraat is gevaarlijk voor zuigelingen en kan bij langdurige blootstelling gezondheidsproblemen veroorzaken. Omgekeerde osmose verwijdert 90–96% van nitraten.',
                kleur: 'red',
              },
              {
                titel: 'PFAS-belasting in jouw regio',
                tekst:
                  'PFAS/PFOA zijn persistente organische stoffen die in sommige Nederlandse regio\'s verhoogd voorkomen (nabij Chemours, Schiphol). Een BWT of Brita filtert PFAS nauwelijks. Alleen geactiveerde koolstof met specifieke PFAS-adsorptie of omgekeerde osmose biedt bescherming.',
                kleur: 'red',
              },
              {
                titel: 'Babyvoeding bereiden',
                tekst:
                  'Voor zuigelingen gelden strenge normen voor nitraat en bacteriënbelasting. Een filterkan biedt geen microbiologische bescherming en geen nitraatreductie. Het RIVM adviseert gekookt leidingwater of specifiek gecertificeerd bronwater voor babyvoeding.',
                kleur: 'red',
              },
              {
                titel: 'Volledig puur drinkwater',
                tekst:
                  'Wie zekerheid wil over de volledige afwezigheid van medicijnresten, microplastics, zware metalen en andere contaminanten, heeft omgekeerde osmose nodig. Een osmosefilter verwijdert 95–99% van alle opgeloste stoffen op moleculair niveau.',
                kleur: 'orange',
              },
            ].map(item => (
              <div
                key={item.titel}
                className={`rounded-xl p-4 text-sm border ${
                  item.kleur === 'red'
                    ? 'bg-red-50 border-red-200'
                    : 'bg-amber-50 border-amber-200'
                }`}
              >
                <p
                  className={`font-semibold mb-1.5 ${
                    item.kleur === 'red' ? 'text-red-800' : 'text-amber-900'
                  }`}
                >
                  {item.titel}
                </p>
                <p className="text-gray-700 leading-relaxed">{item.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            In bovenstaande situaties is{' '}
            <Link
              href="/omgekeerde-osmose"
              className="text-[#005F8A] underline hover:no-underline"
            >
              omgekeerde osmose
            </Link>{' '}
            de aanbevolen oplossing. Lees ook:{' '}
            <Link
              href="/filterkan/vs-osmose"
              className="text-[#005F8A] underline hover:no-underline"
            >
              filterkan vs omgekeerde osmose
            </Link>
            .
          </p>
        </section>

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/filterkan',
                title: 'Filterkannen vergelijken',
                desc: 'Overzicht van alle filterkanmerken: Brita, BWT, PUR en Laica.',
              },
              {
                href: '/filterkan/brita',
                title: 'Brita filterkan',
                desc: 'Alle Brita modellen, Maxtra Pro patronen en jaarkosten vergeleken.',
              },
              {
                href: '/filterkan/brita-vs-bwt',
                title: 'Brita vs BWT vergelijking',
                desc: 'Directe vergelijking op prijs, filterprestaties en mg²⁺ technologie.',
              },
              {
                href: '/filterkan/vs-osmose',
                title: 'Filterkan vs osmose',
                desc: 'Wanneer is een filterkan niet genoeg en heb je osmose nodig?',
              },
              {
                href: '/koolstoffilter',
                title: 'Koolstoffilter uitleg',
                desc: 'Hoe actief kool werkt en welke stoffen het filtert.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose',
                desc: 'Wat is osmose, hoe werkt het en wanneer is het de betere keuze?',
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
          <Link href="/filterkan/brita-vs-bwt" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">BWT vs Brita vergelijking</h3>
            <p className="text-sm text-gray-600">Welk merk wint? Een objectieve vergelijking van BWT en Brita filterkannnen.</p>
          </Link>
          <Link href="/filterkan/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Hoe werkt een filterkan?</h3>
            <p className="text-sm text-gray-600">Begrijp de technologie achter BWT-filterpatronen en de Magnesium-aanrijking.</p>
          </Link>
          <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Actief kool filtratie</h3>
            <p className="text-sm text-gray-600">De basis filtertechniek die ook BWT-filters gebruiken om uw water te verbeteren.</p>
          </Link>
          <Link href="/filterkan" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Filterkannengids</h3>
            <p className="text-sm text-gray-600">Vergelijk alle filterkannmerken en kies de beste optie voor uw huishouden.</p>
          </Link>
        </div>
      </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over de BWT filterkan
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
