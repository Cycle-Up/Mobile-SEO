import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Hoe werkt een filterkan? Actief kool, ionenwisseling en wat het filtert',
  description:
    'Een filterkan filtert via actief kool (chloor, geur) en ionenwisseling (kalk, zware metalen). Uitleg van de filterstappen, wat er wel en niet uit wordt.',
  alternates: { canonical: 'https://waterfilterplatform.nl/filterkan/werking' },
  openGraph: {
    title: 'Hoe werkt een filterkan? Actief kool, ionenwisseling en wat het filtert',
    description:
      'Een filterkan filtert via actief kool en ionenwisseling. Uitleg van alle filterstappen, beperkingen en wanneer je betere filtratie nodig hebt.',
    url: 'https://waterfilterplatform.nl/filterkan/werking',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe werkt actief kool in een filterkan?',
    answer:
      'Actief kool heeft miljoenen microporiën die een enorm intern oppervlak vormen — tot 1500 m² per gram. Via adsorptie binden chloor, trihalomethanen (THMs), organische stoffen en geurmoleculen zich aan dit oppervlak. Het water passeert de actief koollaag door zwaartekracht; chloordeeltjes blijven vastgeplakt en het gefilterde water ruikt en smaakt neutraler. Adsorptie werkt het beste bij koud water: warme moleculen hebben meer energie en binden minder goed.',
  },
  {
    question: 'Wat doet de ionenwisselaar in een filterkan?',
    answer:
      'De ionenwisselaarshars vervangt calcium²⁺- en magnesium²⁺-ionen (de oorzaak van kalk) deels door natrium⁺-ionen. BWT gebruikt een andere aanpak: hun Magnesiumtechnologie wisselt calcium²⁺ uit voor magnesium²⁺, wat geschikter is voor koffie en thee. De ionenwisselaar verlaagt de tijdelijke hardheid met 30–60% en kan ook deels lood en koper vastleggen. De hars raakt uitgeput en moet elke 4 weken worden vervangen.',
  },
  {
    question: 'Verwijdert een filterkan ook bacteriën?',
    answer:
      'Nee. Actief kool en ionenwisseling doden noch verwijderen bacteriën. Sterker nog: na een paar dagen ongebruikt kan bacteriegroei optreden in het filter zelf. De vochtige en voedingsstofrijke omgeving in een verzadigde koolstofcartridge is een ideale broedplaats. Vervang het filter tijdig en laat een filterkan niet langer dan 24 uur gevuld staan bij warm weer. Voor bacteriologische bescherming is UV-filtratie of omgekeerde osmose nodig.',
  },
  {
    question: 'Waarom moet ik het filter elke 4 weken vervangen?',
    answer:
      'Na 4 weken of circa 100–150 liter zijn er drie problemen. Ten eerste raakt het actief kool verzadigd: er zijn geen vrije adsorptieplekken meer, dus nieuwe chloor- en geurdelen passeren ongehinderd. Ten tweede is de ionenwisselhars uitgeput en kan hij geen calcium meer opnemen. Ten derde neemt het risico op bacteriegroei toe en kunnen eerder opgenomen stoffen terugwassen in het gefilterde water. Bij hard water (>14°dH) kan verzadiging eerder optreden dan na 4 weken.',
  },
  {
    question: 'Hoe snel filtert een filterkan?',
    answer:
      'Een standaard filterkan filtert circa 1 liter per 5 tot 10 minuten, afhankelijk van twee factoren: de verstoppinggraad van het filter en de watertemperatuur. Koud water filtert langzamer omdat de viscositeit hoger is en de moleculen trager door de poriën bewegen. Een bijna verzadigd filter filtert aanzienlijk trager dan een nieuw filter — dit is een nuttig signaal dat vervanging nodig is.',
  },
  {
    question: 'Wat is het filtratieverschil tussen een filterkan en osmose?',
    answer:
      'Een filterkan gebruikt 2 filterstappen: actief kool en ionenwisseling. Dit verwijdert chloor effectief (95%+) en verlaagt kalk deels (30–60%). Een omgekeerde osmose systeem gebruikt 4 tot 5 stappen inclusief een semipermeabel RO-membraan dat werkt onder hoge druk. Het membraan verwijdert 95–99% van vrijwel alle opgeloste stoffen: nitraten, PFAS, zware metalen, kalk, bacteriën en microplastics. Een filterkan verbetert smaak; osmose verwijdert ook gezondheidsrelevante contaminanten.',
  },
  {
    question: 'Kan ik warm water door een filterkan filtreren?',
    answer:
      'Nee. Warm of heet water beschadigt zowel de actief koollaag als de ionenwisselhars. Warmte versnelt de desorptie van al opgenomen stoffen — die spoelen dan terug het water in. Bovendien verliest de koolstof bij verhitting zijn adsorptiecapaciteit permanent. Gebruik altijd koud leidingwater. Als je warm gefilterd water wilt, filter eerst koud en verwarm daarna.',
  },
  {
    question: 'Hoelang duurt het voor een nieuw filter ingeslepen is?',
    answer:
      'De eerste twee vullingen (het zogenaamde inloopwater) moet je weggooien. Dit water bevat koolstofstof en kleine deeltjes die loskomen uit de nieuwe cartridge. Gooi de eerste twee volle kankansen weg voordat je het gefilterde water consumeert. De meeste fabrikanten vermelden dit in de bijsluiter, maar veel gebruikers slaan dit stap over — wat leidt tot zwart- of grijs gekleurd water in het glas.',
  },
];

const filterstappen = [
  {
    nummer: 1,
    naam: 'Sedimentlaag',
    beschrijving:
      'Grote deeltjes zoals zand, roestkorrels en zwevende onzuiverheden worden mechanisch tegengehouden door een grove voorfilterlaag. Dit beschermt de actief kool en ionenwisselhars tegen snelle verstopping.',
    verwijdert: 'Zand, roest, zwevende deeltjes',
  },
  {
    nummer: 2,
    naam: 'Actief kool',
    beschrijving:
      'Het water passeert geactiveerd koolstofkorrels met een intern oppervlak van 500–1500 m² per gram. Via adsorptie worden chloor, trihalomethanen (THMs), organische verbindingen en geur- en smaakstoffen vastgehouden aan de microporieuze koolstofstructuur.',
    verwijdert: 'Chloor (95%+), THMs (80%+), organische stoffen, geur, smaak',
  },
  {
    nummer: 3,
    naam: 'Ionenwisselhars',
    beschrijving:
      'Calcium²⁺- en magnesium²⁺-ionen (kalk) worden deels uitgewisseld voor natrium⁺ (of bij BWT: magnesium²⁺). De hars bindt ook deels lood²⁺ en koper²⁺ via selectieve ionenuitwisseling. De reductie van hardheid is 30–60%, afhankelijk van de beginconcentratie.',
    verwijdert: 'Kalk (30–60%), deels lood, deels koper',
  },
  {
    nummer: 4,
    naam: 'Uitloopzeef',
    beschrijving:
      'Een fijn zeefje aan de onderkant van de cartridge houdt losse koolstofdeeltjes en harskorrels tegen die door trilling of gebruik los zijn gekomen. Dit zorgt voor helder water zonder zwarte deeltjes in het onderste reservoir.',
    verwijdert: 'Koolstofstof, losse harskorrels',
  },
];

type FilterRow = {
  stof: string;
  reductie: string;
  klasse: 'goed' | 'slecht';
};

const filterWel: FilterRow[] = [
  { stof: 'Vrij chloor', reductie: '95%+', klasse: 'goed' },
  { stof: 'Chloorbijproducten (THMs)', reductie: '80%+', klasse: 'goed' },
  { stof: 'Smaak en geur', reductie: '90–95%', klasse: 'goed' },
  { stof: 'Kalk (tijdelijke hardheid)', reductie: '30–60%', klasse: 'goed' },
  { stof: 'Lood (deels)', reductie: '40–60%', klasse: 'goed' },
  { stof: 'Koper (deels)', reductie: '60–80%', klasse: 'goed' },
  { stof: 'Pesticiden (deels)', reductie: '50–70%', klasse: 'goed' },
];

const filterNiet: FilterRow[] = [
  { stof: 'Nitraten', reductie: '<10%', klasse: 'slecht' },
  { stof: 'Nitriet', reductie: '<10%', klasse: 'slecht' },
  { stof: 'PFAS (GenX e.a.)', reductie: '<20%', klasse: 'slecht' },
  { stof: 'Bacteriën', reductie: '0%', klasse: 'slecht' },
  { stof: 'Virussen', reductie: '0%', klasse: 'slecht' },
  { stof: 'Microplastics', reductie: '0–30%', klasse: 'slecht' },
  { stof: 'Arseen', reductie: '<10%', klasse: 'slecht' },
  { stof: 'Fluoride', reductie: '<10%', klasse: 'slecht' },
  { stof: 'Volledige hardheid', reductie: '0%', klasse: 'slecht' },
];

const vergelijkingTabel = [
  { methode: 'Filterkan (Brita/BWT)', stappen: 2, chloor: '95%+', kalk: '30–60%', nitraat: 'Nee', pfas: 'Nee', bacterien: 'Nee', prijs: '€45–100/jr' },
  { methode: 'Onderbouw koolstoffilter', stappen: 2, chloor: '95%+', kalk: '30–60%', nitraat: 'Nee', pfas: 'Nee', bacterien: 'Nee', prijs: '€50–120/jr' },
  { methode: 'Omgekeerde osmose', stappen: '4–5', chloor: '95–99%', kalk: '95–99%', nitraat: '85–95%', pfas: '95–99%', bacterien: 'Ja', prijs: '€60–110/jr' },
  { methode: 'UV-filter', stappen: 1, chloor: 'Nee', kalk: 'Nee', nitraat: 'Nee', pfas: 'Nee', bacterien: '99.9%+', prijs: '€30–80/jr' },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Filterkan', url: 'https://waterfilterplatform.nl/filterkan' },
  { name: 'Werking', url: 'https://waterfilterplatform.nl/filterkan/werking' },
];

export default function FilterkanWerkingPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Hoe werkt een filterkan? Actief kool, ionenwisseling en wat het filtert',
          description:
            'Een filterkan filtert via actief kool (chloor, geur) en ionenwisseling (kalk, zware metalen). Uitleg van de filterstappen, wat er wel en niet uit wordt.',
          datePublished: '2026-05-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/filterkan/werking',
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
            <span className="text-gray-700 font-medium">Werking</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Hoe werkt een filterkan? Actief kool, ionenwisseling en wat het filtert
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Een Brita of BWT filterkan filtert leidingwater via twee lagen: actief kool en
            ionenwisseling. Maar hoe werkt dat precies, welke stoffen worden er echt uitgehaald
            en wanneer bereikt een filterkan zijn grenzen?
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~7 min leestijd</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">

        {/* Quick Answer */}
        <QuickAnswer answer="Een filterkan werkt via twee lagen: actief kool absorbeert chloor, organische stoffen en geur, terwijl een ionenwisselaar calcium en zware metalen deels vervangt. Het resultaat is water dat beter smaakt en minder kalk bevat. Een filterkan verwijdert geen nitraten, PFAS, bacteriën of microplastics — daarvoor is osmose of UV nodig." />

        {/* Inhoudsopgave */}
        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#filtratieproces', 'Het filtratieproces stap voor stap'],
              ['#wel-niet', 'Wat filtert een filterkan wel en niet?'],
              ['#grenzen', 'Wanneer bereikt een filterkan zijn grenzen?'],
              ['#vergelijking', 'Filterkan vs andere filtermethoden'],
              ['#faq', 'Veelgestelde vragen'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#003F5C] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Hoe werkt een filterkan */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe werkt een filterkan precies?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een waterfilterkan bestaat uit twee compartimenten: een bovenste reservoir voor
            ongefilterd leidingwater en een onderste reservoir voor gefilterd water. Daartussen
            bevindt zich de filterpatroon — de cartridge. Het water zakkt door de cartridge via
            zwaartekracht, zonder pomp of elektrische aandrijving.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dit maakt de filterkan eenvoudig en zuinig in gebruik, maar ook de reden waarom de
            filtratie beperkter is dan systemen die water onder hoge druk door een semipermeable
            membraan persen. De contacttijd van het water met de filtermedia bepaalt hoe goed de
            adsorptie en ionenwisseling plaatsvinden — en bij een filterkan is die contacttijd
            relatief kort.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De cartridge bij merken als{' '}
            <Link href="/filterkan/brita" className="text-[#005F8A] underline hover:no-underline">Brita</Link> en{' '}
            <Link href="/filterkan/bwt" className="text-[#005F8A] underline hover:no-underline">BWT</Link>{' '}
            bevat twee actieve lagen die elk een ander type verontreiniging aanpakken. Het water
            passeert eerst een sedimentlaag, daarna actief kool, vervolgens de ionenwisselhars en
            ten slotte een uitloopzeef.
          </p>
        </section>

        {/* Filtratieproces visueel */}
        <section id="filtratieproces">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Het filtratieproces stap voor stap
          </h2>
          <div className="space-y-4">
            {filterstappen.map((stap) => (
              <div
                key={stap.nummer}
                className="flex gap-4 border border-gray-100 rounded-xl p-5 hover:border-[#005F8A]/30 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#005F8A] text-white flex items-center justify-center font-bold text-lg">
                  {stap.nummer}
                </div>
                <div>
                  <p className="font-bold text-[#003F5C] mb-1">{stap.naam}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">{stap.beschrijving}</p>
                  <p className="text-xs text-[#005F8A] font-medium">
                    Verwijdert: {stap.verwijdert}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-[#E0F2FE] border border-[#005F8A]/20 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Opwarmtip:</strong> De eerste twee vullingen van
            een nieuwe cartridge moet je altijd weggooien. Dit inloopwater bevat koolstofstof en
            kleine harsdeeltjes die loskomen uit de nieuwe cartridge. Consumeer dit water niet.
          </div>
        </section>

        {/* Wat filtert een filterkan wel/niet */}
        <section id="wel-niet">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat filtert een filterkan wel en niet?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Onderstaande tabel geeft een overzicht gebaseerd op fabrieksdata van Brita en BWT en
            onafhankelijke NSF-testresultaten. Houd er rekening mee dat werkelijke prestaties
            afhangen van waterhardheid, cartridgeleeftijd en watertemperatuur.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* WEL */}
            <div>
              <p className="font-bold text-green-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm font-bold">✓</span>
                Wat een filterkan WEL filtert
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-green-700 text-white">
                      <th className="text-left px-3 py-2 font-semibold rounded-tl-lg">Stof</th>
                      <th className="text-center px-3 py-2 font-semibold rounded-tr-lg">Reductie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterWel.map((row, i) => (
                      <tr key={row.stof} className={i % 2 === 0 ? 'bg-white' : 'bg-green-50'}>
                        <td className="px-3 py-2 text-gray-800">{row.stof}</td>
                        <td className="px-3 py-2 text-center">
                          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                            {row.reductie}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* NIET */}
            <div>
              <p className="font-bold text-red-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-sm font-bold">✗</span>
                Wat een filterkan NIET filtert
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-red-700 text-white">
                      <th className="text-left px-3 py-2 font-semibold rounded-tl-lg">Stof</th>
                      <th className="text-center px-3 py-2 font-semibold rounded-tr-lg">Reductie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterNiet.map((row, i) => (
                      <tr key={row.stof} className={i % 2 === 0 ? 'bg-white' : 'bg-red-50'}>
                        <td className="px-3 py-2 text-gray-800">{row.stof}</td>
                        <td className="px-3 py-2 text-center">
                          <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                            {row.reductie}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-xs mt-4">
            Bronnen: NSF International testdata; fabrikantspecificaties Brita Maxtra+, BWT Penguin
            (2024–2025). Percentages zijn indicatief bij optimale gebruiksomstandigheden.
          </p>
        </section>

        {/* Grenzen van de filterkan */}
        <section id="grenzen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer bereikt een filterkan zijn grenzen?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Een filterkan is uitstekend voor het verbeteren van smaak en het verwijderen van
            restchloor uit gemeentelijk drinkwater. Maar er zijn situaties waarin een filterkan
            tekortschiet en je een geavanceerdere oplossing nodig hebt:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-red-400 bg-red-50 rounded-r-xl p-4">
              <p className="font-bold text-red-800 mb-1">Nitraat in het water</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                In agrarische gebieden kan nitraat in het grondwater en leidingwater verhoogd zijn.
                Een filterkan verwijdert nitraat nauwelijks (&lt;10%). Bij nitraatconcentraties boven
                25 mg/L — vooral relevant voor baby&apos;s en zwangere vrouwen — is{' '}
                <Link href="/filterkan/vs-osmose" className="text-[#005F8A] underline hover:no-underline">
                  omgekeerde osmose
                </Link>{' '}
                de enige betrouwbare oplossing voor thuis.
              </p>
            </div>

            <div className="border-l-4 border-red-400 bg-red-50 rounded-r-xl p-4">
              <p className="font-bold text-red-800 mb-1">PFAS-belasting</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Bewoners nabij industriële PFAS-bronnen (zoals Chemours/DuPont in de Dordtse Biesbosch)
                hebben te maken met verhoogde PFAS-concentraties. Standaard actief kool adsorbeert
                sommige PFAS-verbindingen, maar de reductie is onvoldoende voor de kortketenige
                varianten zoals GenX. Osmose verwijdert 95–99% van PFAS.
              </p>
            </div>

            <div className="border-l-4 border-orange-400 bg-orange-50 rounded-r-xl p-4">
              <p className="font-bold text-orange-800 mb-1">Medisch kwetsbare gebruikers</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Baby&apos;s, zwangere vrouwen, ouderen en mensen met een verzwakt immuunsysteem zijn
                gevoeliger voor nitraat, lood en microbiologische besmetting. Een filterkan biedt
                geen bescherming tegen bacteriën en filtert nitraat niet. Het RIVM adviseert voor
                babyvoeding gebruik van gekookt leidingwater of specifiek geschikt bronwater.
              </p>
            </div>

            <div className="border-l-4 border-orange-400 bg-orange-50 rounded-r-xl p-4">
              <p className="font-bold text-orange-800 mb-1">Extreem hard water (&gt;18°dH)</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Bij zeer hard water biedt een filterkan slechts 30–60% hardheidsverlaging. Dit is
                onvoldoende om kalkaanslag in espressomachines, vaatwassers en waterkokers significant
                te verminderen. Overweeg een{' '}
                <Link href="/koolstoffilter" className="text-[#005F8A] underline hover:no-underline">
                  onderbouw koolstoffilter
                </Link>{' '}
                of osmose voor een completere oplossing.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <CTABanner context="osmose" variant="compact" />
          </div>
        </section>

        {/* Vergelijkingstabel */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Filterkan vs andere filtermethoden
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Hoe verhoudt een filterkan zich tot andere filteroplossingen voor thuis? Onderstaand
            overzicht geeft een beknopte vergelijking op de meest relevante criteria.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Methode</th>
                  <th className="text-center px-4 py-3 font-semibold">Stappen</th>
                  <th className="text-center px-4 py-3 font-semibold">Chloor</th>
                  <th className="text-center px-4 py-3 font-semibold">Kalk</th>
                  <th className="text-center px-4 py-3 font-semibold hidden sm:table-cell">Nitraat</th>
                  <th className="text-center px-4 py-3 font-semibold hidden sm:table-cell">PFAS</th>
                  <th className="text-center px-4 py-3 font-semibold hidden md:table-cell">Bacteriën</th>
                  <th className="text-right px-4 py-3 font-semibold hidden md:table-cell">Jaarkosten</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingTabel.map((row, i) => (
                  <tr
                    key={row.methode}
                    className={i === 0 ? 'bg-[#E0F2FE] border-l-4 border-[#005F8A]' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-4 py-3 font-medium text-gray-900">{row.methode}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.stappen}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.chloor}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.kalk}</td>
                    <td className="px-4 py-3 text-center text-gray-700 hidden sm:table-cell">{row.nitraat}</td>
                    <td className="px-4 py-3 text-center text-gray-700 hidden sm:table-cell">{row.pfas}</td>
                    <td className="px-4 py-3 text-center text-gray-700 hidden md:table-cell">{row.bacterien}</td>
                    <td className="px-4 py-3 text-right text-gray-700 hidden md:table-cell">{row.prijs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            Jaarkosten zijn exclusief aanschaf. Osmose inclusief filterwissels, exclusief
            eenmalige installatiekosten (€150–400 aanschaf, €0–80 installatie).
          </p>
          <p className="text-gray-700 text-sm mt-4">
            Meer over dit onderwerp:{' '}
            <Link href="/filterkan/vs-osmose" className="text-[#005F8A] underline hover:no-underline">
              Filterkan vs osmose — volledige vergelijking
            </Link>.
          </p>
        </section>

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/filterkan',
                title: 'Waterfilterkan overzicht',
                desc: 'Alles over filterkannen: merken, prestaties en wanneer je beter kiest voor osmose.',
              },
              {
                href: '/filterkan/brita',
                title: 'Brita filterkan review',
                desc: 'Gedetailleerde beoordeling van de Brita Maxtra+ — prestaties, prijs en alternatieven.',
              },
              {
                href: '/filterkan/bwt',
                title: 'BWT filterkan review',
                desc: 'BWT Magnesiumtechnologie uitgelegd — voor wie is dit de betere keuze?',
              },
              {
                href: '/filterkan/filter-vervangen',
                title: 'Filter vervangen',
                desc: 'Wanneer en hoe vervang je de cartridge van je filterkan? Stap-voor-stap uitleg.',
              },
              {
                href: '/filterkan/vs-osmose',
                title: 'Filterkan vs osmose',
                desc: 'Vergelijking op filterwerkzaamheid, kosten en voor wie welke optie het beste is.',
              },
              {
                href: '/koolstoffilter',
                title: 'Koolstoffilter uitgelegd',
                desc: 'Hoe actief kool werkt en welke stoffen het adsorbeert — de wetenschap achter de filter.',
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
          <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Actief kool filtratie</h3>
            <p className="text-sm text-gray-600">De techniek achter filterkannnen: hoe actief kool chloor, geuren en andere stoffen bindt.</p>
          </Link>
          <Link href="/filterkan/kopen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Filterkan kopen</h3>
            <p className="text-sm text-gray-600">Nu u weet hoe een filterkan werkt: vergelijk de beste modellen van 2026.</p>
          </Link>
          <Link href="/filterkan/filter-vervangen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Filter vervangen</h3>
            <p className="text-sm text-gray-600">Wanneer en hoe vervangt u het filter in uw filterkan?</p>
          </Link>
          <Link href="/filterkan" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Filterkannengids</h3>
            <p className="text-sm text-gray-600">Het complete overzicht van filterkannnen: merken, modellen en onderhoud.</p>
          </Link>
        </div>
      </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over de werking van een filterkan
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
