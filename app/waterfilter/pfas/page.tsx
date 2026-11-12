import type { Metadata } from 'next';
import Link from 'next/link';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { PureFilterCTA } from '@/components/PureFilterCTA';
import { SourcesSection } from '@/components/SourcesSection';
import { PUREFILTER } from '@/lib/purefilter.mjs';
import { FOUR_IN_ONE, THREE_WAY } from '@/lib/kranen.mjs';
import { COUNTERTOP } from '@/lib/countertop.mjs';

// Technische uitleg: hoe filters PFAS tegenhouden, per filtertype. Bewust een andere intentie dan
// de koopgids /pfas-waterfilter (welk filter kopen) en /pfas-water (feiten over PFAS in drinkwater).
const PAGE_URL = 'https://waterfilterplatform.nl/waterfilter/pfas';
const PAGE_TITLE = 'Hoe filtert een waterfilter PFAS? Techniek per type';
const PAGE_DESCRIPTION =
  'Hoe haalt een waterfilter PFAS uit water? Actieve kool, ionenwisseling en osmose uitgelegd, waarom korte ketens lastiger zijn en wanneer een filter vol raakt.';
const DATE_PUBLISHED = '2026-05-20';
const DATE_MODIFIED = '2026-11-10';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
};

const QUICK_ANSWER =
  'Een waterfilter haalt PFAS op twee manieren uit water: door de stoffen vast te houden aan een oppervlak (adsorptie, zoals bij actieve kool en ionenwisselingshars) of door ze tegen te houden met een membraan (omgekeerde osmose en nanofiltratie). Lange ketens zoals PFOS en PFOA hechten goed aan actieve kool; korte ketens en de zeer kleine stof TFA veel minder. Een osmosemembraan houdt ook veel korte ketens tegen. Een waterontharder, UV-lamp of sedimentfilter doet niets tegen PFAS.';

const faqItems = [
  {
    question: 'Hoe haalt actieve kool PFAS uit water?',
    answer:
      'Actieve kool heeft een enorm inwendig oppervlak met fijne poriën. PFAS-moleculen hebben een waterafstotende staart van koolstof en fluor, en die staart hecht zich aan het kooloppervlak (adsorptie). Hoe langer de keten, hoe sterker de hechting. Daarom werkt actieve kool goed tegen PFOS en PFOA, maar minder tegen korte ketens. Een koolblok of koolstofvezel met een lange contacttijd presteert doorgaans beter dan losse korrels.',
  },
  {
    question: 'Waarom zijn korte PFAS-ketens moeilijker te filteren?',
    answer:
      'Korte ketens, zoals PFBS, PFHxA en vooral TFA, hebben een kleine waterafstotende staart. Ze lossen goed op in water en hechten zwak aan actieve kool, waardoor ze sneller door een koolfilter heen komen. Ook bij ionenwisseling slaan korte ketens eerder door. Een osmosemembraan houdt veel korte ketens wel tegen, omdat het werkt op grootte en lading in plaats van op hechting; bij de zeer kleine stof TFA is ook die werking wisselend.',
  },
  {
    question: 'Haalt een waterontharder PFAS uit water?',
    answer:
      'Nee. Een waterontharder is een kationwisselaar: de hars wisselt positief geladen calcium- en magnesiumionen uit tegen natrium. PFAS zijn in water juist negatief geladen en worden door die hars niet vastgehouden. Voor PFAS is een anionwisselaar met speciale hars nodig, en die zit in een gewone waterontharder niet.',
  },
  {
    question: 'Wanneer is een PFAS-filter verzadigd?',
    answer:
      'Een adsorptiefilter, zoals actieve kool of ionenwisselingshars, heeft een beperkte capaciteit. Na verloop van tijd zijn de bindingsplaatsen bezet en komen PFAS door het filter heen; dat heet doorslag. Korte ketens slaan als eerste door en kunnen zelfs weer loskomen als sterker hechtende stoffen hun plaats innemen. Houd je daarom aan de vervangtermijn of het aantal liters dat de fabrikant opgeeft. Een osmosemembraan raakt niet op dezelfde manier vol, maar heeft wel een voorfilter en membraan die op tijd vervangen moeten worden.',
  },
  {
    question: 'Werkt omgekeerde osmose ook tegen TFA?',
    answer:
      'Gedeeltelijk. TFA is een van de kleinste PFAS-stoffen. Actieve kool helpt er nauwelijks tegen, en ook de werking van omgekeerde osmose is wisselend. Let bij een PFAS-claim daarom op welke stoffen precies getest zijn; een test op PFOS en PFOA zegt weinig over TFA.',
  },
  {
    question: 'Helpen koken, een UV-lamp of een sedimentfilter tegen PFAS?',
    answer:
      'Nee. Koken breekt PFAS niet af en laat ze ook niet verdampen; bij lang koken stijgt de concentratie juist iets. Een UV-lamp doodt micro-organismen maar verandert niets aan chemische stoffen zoals PFAS. Een sedimentfilter houdt alleen zand en roest tegen, en PFAS-moleculen zijn daarvoor veel te klein.',
  },
];

const FILTER_ROWS = [
  {
    type: 'Omgekeerde osmose',
    principe: 'Membraan houdt opgeloste stoffen tegen op grootte en lading',
    lang: 'Zeer goed',
    kort: 'Goed; TFA wisselend',
    letop: 'Spoelwater; voorfilter en membraan op tijd vervangen',
  },
  {
    type: 'Nanofiltratie',
    principe: 'Membraan, iets grover dan osmose',
    lang: 'Goed',
    kort: 'Wisselend',
    letop: 'Vooral bij drinkwaterbedrijven en semi-professioneel',
  },
  {
    type: 'Koolblok of koolstofvezel',
    principe: 'Adsorptie met lange contacttijd',
    lang: 'Goed, zolang het filter vers is',
    kort: 'Matig; TFA nauwelijks',
    letop: 'Doorslag na verzadiging; vervangtermijn aanhouden',
  },
  {
    type: 'Actieve kool in korrels (GAC)',
    principe: 'Adsorptie met kortere contacttijd',
    lang: 'Redelijk',
    kort: 'Matig; TFA nauwelijks',
    letop: 'Water kan langs de korrels stromen (kanaalvorming)',
  },
  {
    type: 'Anionwisselaar (PFAS-hars)',
    principe: 'Negatief geladen PFAS binden aan positief geladen hars',
    lang: 'Goed',
    kort: 'Beter dan kool, maar slaat eerder door',
    letop: 'Zelden in huishoudfilters; wel bij drinkwaterbedrijven',
  },
  {
    type: 'Waterontharder',
    principe: 'Kationwisselaar voor kalk',
    lang: 'Geen effect',
    kort: 'Geen effect',
    letop: 'Bedoeld tegen kalk, niet tegen PFAS',
  },
  {
    type: 'UV-lamp, sedimentfilter, koken',
    principe: 'Desinfectie, zeven of verhitten',
    lang: 'Geen effect',
    kort: 'Geen effect',
    letop: 'Werkt niet tegen opgeloste chemische stoffen',
  },
];

const linkClass = 'text-[#005F8A] underline hover:text-[#003F5C]';

export default function WaterfilterPFASPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          { name: 'PFAS-filtertechniek', url: PAGE_URL },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          datePublished: DATE_PUBLISHED,
          dateModified: DATE_MODIFIED,
          url: PAGE_URL,
        }}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>PFAS-filtertechniek</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Hoe filtert een waterfilter PFAS? De techniek per filtertype
        </h1>

        <AuthorBox datePublished={DATE_PUBLISHED} dateModified={DATE_MODIFIED} />

        <QuickAnswer question="Hoe haalt een waterfilter PFAS uit water?" answer={QUICK_ANSWER} />

        <div className="border-2 border-[#005F8A] bg-[#F0F9FF] rounded-2xl p-5 mb-8">
          <p className="font-semibold text-[#003F5C] mb-1">Zoek je vooral welk filter je moet kopen?</p>
          <p className="text-sm text-gray-700 mb-3">
            Deze pagina legt de techniek uit. In onze koopgids vergelijken we concrete filters met labresultaten, prijs
            en onderhoud.
          </p>
          <Link
            href="/pfas-waterfilter"
            className="inline-flex justify-center items-center bg-[#005F8A] text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors"
          >
            Naar de PFAS-waterfilter koopgids
          </Link>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Twee principes: vasthouden of tegenhouden
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          PFAS zijn opgeloste moleculen, veel kleiner dan een bacterie. Een gewone zeef houdt ze niet tegen. Filters die
          wel werken, gebruiken een van twee principes:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Adsorptie:</strong> de PFAS hechten zich aan het oppervlak van het filtermateriaal. Zo werken
            actieve kool en ionenwisselingshars. Het filter raakt na verloop van tijd vol.
          </li>
          <li>
            <strong>Scheiding met een membraan:</strong> water wordt onder druk door een uiterst fijn membraan geperst
            dat de meeste opgeloste stoffen tegenhoudt. Zo werken omgekeerde osmose en nanofiltratie. De
            tegengehouden stoffen spoelen weg met het spoelwater.
          </li>
        </ul>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Hoe goed een filter werkt, hangt sterk af van de ketenlengte van de PFAS. PFOS en PFOA hebben lange ketens en
          zijn relatief makkelijk te filteren; korte ketens zoals PFBS en vooral TFA zijn lastiger. Meer over de
          verschillende stoffen lees je bij{' '}
          <Link href="/pfas-waterfilter/pfas-soorten" className={linkClass}>PFAS-soorten en filters</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">Filtertypen tegen PFAS vergeleken</h2>
        <div className="overflow-x-auto mb-3">
          <table className="w-full min-w-[640px] text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Werkingsprincipe</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Lange ketens (PFOS, PFOA)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Korte ketens en TFA</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Let op</th>
              </tr>
            </thead>
            <tbody>
              {FILTER_ROWS.map((r, i) => (
                <tr key={r.type} className={i % 2 === 1 ? 'bg-gray-50' : undefined}>
                  <td className="border border-gray-300 px-3 py-2 font-medium">{r.type}</td>
                  <td className="border border-gray-300 px-3 py-2">{r.principe}</td>
                  <td className="border border-gray-300 px-3 py-2">{r.lang}</td>
                  <td className="border border-gray-300 px-3 py-2">{r.kort}</td>
                  <td className="border border-gray-300 px-3 py-2">{r.letop}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-6">
          Algemene werking per techniek. De prestaties verschillen per product, per stof en per moment in de levensduur
          van het filter; kijk daarom altijd naar een onafhankelijke labtest van het specifieke filter.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Actieve kool: hoe hecht PFAS aan een koolfilter?
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Actieve kool heeft een enorm inwendig oppervlak vol fijne poriën. Een PFAS-molecuul heeft een waterafstotende
          staart van koolstof en fluor, en die staart hecht zich aan dat oppervlak. Hoe langer de staart, hoe sterker de
          hechting. Twee dingen bepalen het resultaat:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Contacttijd:</strong> een samengeperst koolblok of koolstofvezel dwingt het water langs veel
            oppervlak. Losse korrels laten water sneller en soms langs de korrels heen stromen.
          </li>
          <li>
            <strong>Verzadiging:</strong> elke bindingsplaats kan maar een keer bezet worden. Is het filter vol, dan
            komen PFAS erdoorheen. Korte ketens slaan als eerste door en kunnen zelfs weer loskomen als sterker
            hechtende stoffen hun plaats innemen.
          </li>
        </ul>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Een voorbeeld van een koolstoffilter met een gepubliceerde PFAS-test is de{' '}
          <Link href={PUREFILTER.reviewPath} className={linkClass}>{PUREFILTER.name}</Link>, een inline filter op de
          koude leiding. Bij Equinox Labs verminderde een nieuw filter {PUREFILTER.pfasTested.length} PFAS (
          {PUREFILTER.pfasTested.join(', ')}) met {PUREFILTER.pfasReduction} (
          <a href={PUREFILTER.labReportUrl} rel="noopener" className={linkClass}>Equinox-testrapport, pdf</a>). Dat zegt iets over die vijf stoffen bij
          een nieuw filter, niet over alle PFAS of over een filter aan het eind van zijn levensduur. PureFilter is een
          merk van PureAqua, waaraan WaterfilterPlatform gelieerd is. Meer over de techniek in{' '}
          <Link href="/koolstoffilter/werking" className={linkClass}>zo werkt een koolstoffilter</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Ionenwisseling: waarom een waterontharder niet helpt
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          PFAS zijn in water negatief geladen. Een anionwisselaar met speciale hars trekt die negatief geladen moleculen
          aan en houdt ze vast. Drinkwaterbedrijven zetten deze techniek in op locaties met veel PFAS; in
          huishoudfilters kom je haar zelden tegen.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Een waterontharder werkt ook met ionenwisseling, maar met het omgekeerde type hars: een kationwisselaar die
          positief geladen calcium en magnesium vervangt door natrium. PFAS gaan daar ongehinderd doorheen. Een
          ontharder is dus een oplossing tegen kalk, niet tegen PFAS.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Omgekeerde osmose en nanofiltratie: het membraan als barrière
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Bij{' '}
          <Link href="/filtertechnieken/omgekeerde-osmose" className={linkClass}>omgekeerde osmose</Link> perst de
          waterdruk het water door een membraan dat vrijwel alleen watermoleculen doorlaat. PFAS worden tegengehouden op
          grootte en op lading en spoelen weg met het spoelwater. Omdat het membraan niet werkt op hechting, raakt het
          niet op dezelfde manier vol als een koolfilter en houdt het ook veel korte ketens tegen. Bij de zeer kleine
          stof TFA is de werking wisselend.{' '}
          <Link href="/nanofiltration" className={linkClass}>Nanofiltratie</Link> gebruikt een iets grover membraan en
          zit qua werking tussen actieve kool en osmose in.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Hoe dat in de praktijk uitpakt, laat een labtest van de{' '}
          <Link href={FOUR_IN_ONE.reviewPath} className={linkClass}>{FOUR_IN_ONE.name}</Link> zien: SGS mat bij een
          nieuw systeem {FOUR_IN_ONE.lab.PFOS} minder PFOS en {FOUR_IN_ONE.lab.PFOA} minder PFOA (
          <a href={FOUR_IN_ONE.labReport.url} rel="noopener" className={linkClass}>
            {FOUR_IN_ONE.labReport.lab}-rapport {FOUR_IN_ONE.labReport.number}, pdf
          </a>
          , {FOUR_IN_ONE.labReport.date}). Ook die kraan wordt verkocht door PureAqua,
          waaraan WaterfilterPlatform gelieerd is. Een osmosesysteem heeft wel nadelen: het gebruikt spoelwater, haalt
          ook mineralen weg (vaak opgevangen met een remineralisatiefilter) en vraagt om een voorfilter en membraan die
          op tijd vervangen worden.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">Hoe weet je of een PFAS-claim klopt?</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Welke stoffen zijn getest?</strong> &quot;Verwijdert PFAS&quot; zegt weinig. Een test op PFOS en
            PFOA zegt niets over korte ketens of TFA.
          </li>
          <li>
            <strong>Wie heeft getest?</strong> Een onafhankelijk laboratorium met een openbaar rapport is sterker dan
            een claim van de fabrikant zelf.
          </li>
          <li>
            <strong>Nieuw of gebruikt filter?</strong> Veel tests meten een nieuw filter. Bij adsorptiefilters neemt de
            werking af naarmate het filter voller raakt.
          </li>
          <li>
            <strong>Hoe snel stroomde het water?</strong> Een hogere doorstroming betekent minder contacttijd en vaak
            een lagere reductie.
          </li>
        </ul>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Filters met onafhankelijke testresultaten naast elkaar zien? Bekijk{' '}
          <Link href="/pfas-waterfilter/vergelijken" className={linkClass}>PFAS-waterfilters vergelijken</Link> of ga
          direct naar de <Link href="/pfas-waterfilter" className={linkClass}>PFAS-waterfilter koopgids</Link>.
        </p>

        <section className="border border-gray-200 bg-white rounded-2xl p-5 mb-8" aria-labelledby="welke-techniek">
          <h2 id="welke-techniek" className="text-xl font-bold text-[#003F5C] mb-2">
            Welke techniek past bij welke situatie? Onze keuze
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              <strong>Koolstoffilter zonder osmose en zonder ingewikkelde installatie, dat je zelf op de koude leiding zet:</strong>{' '}
              <Link href={PUREFILTER.reviewPath} className={linkClass}>{PUREFILTER.name}</Link> ({PUREFILTER.price}).
            </li>
            <li>
              <strong>Osmose voor maximale zuivering, plus zeer heet en gekoeld water:</strong>{' '}
              <Link href={FOUR_IN_ONE.reviewPath} className={linkClass}>{FOUR_IN_ONE.name}</Link> ({FOUR_IN_ONE.price}).
            </li>
            <li>
              <strong>Osmosewater uit je eigen kraan:</strong> een{' '}
              <Link href={THREE_WAY.reviewPath} className={linkClass}>{THREE_WAY.name}</Link>.
            </li>
            <li>
              <strong>Osmose zonder boren, bijvoorbeeld in een huurwoning:</strong> het{' '}
              <Link href={COUNTERTOP.reviewPath} className={linkClass}>{COUNTERTOP.name}</Link> ({COUNTERTOP.price}).
            </li>
          </ul>
          <p className="text-xs text-gray-500 mt-4">
            Deze producten verkoopt PureAqua, waaraan WaterfilterPlatform gelieerd is. De onderbouwing per situatie staat
            in de <Link href="/pfas-waterfilter" className="underline">koopgids</Link>.
          </p>
        </section>

        <PureFilterCTA context="pfas" content="waterfilter-pfas-purefilter" />

        <HealthDisclaimer />

        <section className="space-y-3 mb-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over PFAS-filtertechniek</h2>
          {faqItems.map(item => (
            <details key={item.question} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700 text-sm">{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/pfas-waterfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS waterfilter: koopgids</h3>
              <p className="text-sm text-gray-600">Welke filters PFAS aantoonbaar verminderen, met prijzen en labtests.</p>
            </Link>
            <Link href="/pfas-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS in drinkwater</h3>
              <p className="text-sm text-gray-600">De feiten over PFAS in kraanwater, normen en het laatste nieuws.</p>
            </Link>
            <Link href="/leidingwater/pfas" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS in leidingwater per regio</h3>
              <p className="text-sm text-gray-600">Waar de PFAS-waarden hoger liggen en waarom.</p>
            </Link>
            <Link href="/keuzehulp/pfas-lood" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp: PFAS en lood</h3>
              <p className="text-sm text-gray-600">Welk filter past als je zowel PFAS als lood wilt verminderen?</p>
            </Link>
          </div>
        </section>

        <SourcesSection
          sources={[
            `Equinox Labs, PFAS-test PureFilter inline filter (pdf): ${PUREFILTER.labReportUrl}`,
            `${FOUR_IN_ONE.labReport.lab}, testrapport ${FOUR_IN_ONE.labReport.number} (${FOUR_IN_ONE.labReport.date}): ${FOUR_IN_ONE.labReport.url}`,
            'US EPA, Drinking Water Treatability Database: PFAS-verwijdering met actieve kool, ionenwisseling en membranen',
            'US EPA, Reducing PFAS in Your Drinking Water (2024)',
            "ILT, Risico's van TFA voor onze drinkwaterkwaliteit (11 september 2026)",
          ]}
        />
      </main>
    </>
  );
}
