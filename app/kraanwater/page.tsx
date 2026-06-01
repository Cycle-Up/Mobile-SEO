import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Kraanwater Drinken: Veilig, Gezond & Lekker?',
  description:
    'Is kraanwater drinken veilig in Nederland? Lees over smaak, chloor, kalk, PFAS, microplastics en wanneer een waterfilter de juiste keuze is.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kraanwater' },
  openGraph: {
    title: 'Kraanwater Drinken: Veilig, Gezond & Lekker?',
    description:
      'Alles wat je moet weten over kraanwater in Nederland: veiligheid, smaak per regio, vergelijking met flessenwater en wanneer filteren zinvol is.',
    url: 'https://waterfilterplatform.nl/kraanwater',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Is kraanwater in Nederland veilig om direct te drinken?',
    answer:
      'Ja, Nederlands kraanwater is veilig om direct uit de kraan te drinken. Het voldoet aan het Drinkwaterbesluit en de Europese Drinkwaterrichtlijn. Nederland behoort tot de landen met de hoogste drinkwaterkwaliteit ter wereld. Wel zijn er nuances: in hard-watergebieden bevat kraanwater veel kalk, en in sommige regio\'s kunnen sporen van PFAS of nitraten aanwezig zijn, altijd binnen de wettelijke normen.',
  },
  {
    question: 'Waarom smaakt kraanwater anders per regio?',
    answer:
      'De smaak van kraanwater wordt bepaald door de mineraalsamenstelling, het chloorgehalte en de bron. In gebieden met hard water (hoog calcium/magnesium-gehalte, zoals Limburg) proeft het water mineraliger. In gebieden waar chloor als desinfectiemiddel wordt toegepast, kan een lichte chloor- of bleekmiddelgeur merkbaar zijn. Zacht water (Zeeland) smaakt vaak neutraler en lichter.',
  },
  {
    question: 'Wat is het verschil tussen kraanwater en flessenwater?',
    answer:
      'Kraanwater en bronwater worden allebei streng gecontroleerd, maar op basis van andere normen. Kraanwater voldoet aan het Drinkwaterbesluit; bronwater aan de Warenwet. Qua veiligheid zijn ze vergelijkbaar. Het grote verschil is prijs (kraanwater is 500–1000x goedkoper), milieu-impact (flessenwater produceert veel plastic afval en CO₂) en smaak (bronwater heeft een vaste mineraalsamenstelling, kraanwater varieert per regio).',
  },
  {
    question: 'Zit er PFAS in kraanwater?',
    answer:
      'Ja, in kleine hoeveelheden. RIVM-metingen tonen aan dat PFAS aanwezig is in Nederlands kraanwater, maar de concentraties liggen gemiddeld onder de Europese norm van 0,1 μg/L voor de som van 20 PFAS. Lokale uitzonderingen bestaan in gebieden nabij industrieterreinen of vliegvelden. Omgekeerde osmose is de enige consumentenoplossing die PFAS effectief verwijdert.',
  },
  {
    question: 'Wat doet kalk in kraanwater met mijn gezondheid?',
    answer:
      'Kalk (calcium en magnesium) in kraanwater is niet schadelijk voor de gezondheid — het zijn essentiële mineralen. De gezondheidsorganisaties WHO en EFSA bevestigen dat hard water geen negatief gezondheidseffect heeft. De nadelen van kalk zijn praktisch: kalkvorming in apparaten, aanslag op kranen en tegels, en een mogelijk minder prettige mondgevoel bij het drinken van heel hard water.',
  },
  {
    question: 'Wanneer is kraanwater filteren aan te raden?',
    answer:
      'Filteren is zinvol als je last hebt van de smaak (chloor, minerals), in een hard-watergebied woont en kalkproblemen wil voorkomen, bezorgd bent over PFAS in je regio, of extra zekerheid wilt over de zuiverheid. Een actieve koolstoffilter lost smaken en geur op; omgekeerde osmose verwijdert ook kalk, nitraten, PFAS en microplastics.',
  },
];

const smaakRegios = [
  {
    regio: 'Zeeland / kustgebieden',
    hardheid: 'Zacht (4–8 °dH)',
    chloorniveau: 'Laag',
    smaakprofiel: 'Neutraal, licht, weinig namaak',
    kleur: 'bg-green-50 border-green-200',
    tekst: 'text-green-800',
  },
  {
    regio: 'West-Nederland (Rijn/Maas-water)',
    hardheid: 'Matig (8–12 °dH)',
    chloorniveau: 'Matig',
    smaakprofiel: 'Soms lichte chloor-/zwembadgeur, afhankelijk van seizoen',
    kleur: 'bg-amber-50 border-amber-200',
    tekst: 'text-amber-800',
  },
  {
    regio: 'Randstad (Amsterdam, Den Haag)',
    hardheid: 'Matig hard (9–12 °dH)',
    chloorniveau: 'Laag tot matig',
    smaakprofiel: 'Over het algemeen goed; duinwater heeft rustiger profiel',
    kleur: 'bg-lime-50 border-lime-200',
    tekst: 'text-lime-800',
  },
  {
    regio: 'Oost-Nederland (Overijssel, Gelderland)',
    hardheid: 'Hard (12–18 °dH)',
    chloorniveau: 'Laag (grondwater)',
    smaakprofiel: 'Mineralig, soms iets kalkig gevoel in de mond',
    kleur: 'bg-orange-50 border-orange-200',
    tekst: 'text-orange-800',
  },
  {
    regio: 'Limburg / Noord-Brabant',
    hardheid: 'Zeer hard (15–22 °dH)',
    chloorniveau: 'Laag tot matig',
    smaakprofiel: 'Uitgesproken mineralig, kalkig, soms minder drinkplezier',
    kleur: 'bg-red-50 border-red-200',
    tekst: 'text-red-800',
  },
];

const vergelijkingKraan = [
  {
    criterium: 'Veiligheid',
    kraanwater: 'Hoog — voldoet aan Drinkwaterbesluit',
    flessenwater: 'Hoog — voldoet aan Warenwet',
    voordeel: 'gelijk',
  },
  {
    criterium: 'Prijs',
    kraanwater: '€ 0,001 per liter',
    flessenwater: '€ 0,50–1,50 per liter',
    voordeel: 'kraan',
  },
  {
    criterium: 'Milieu-impact',
    kraanwater: 'Zeer laag',
    flessenwater: 'Hoog (plastic, transport, CO₂)',
    voordeel: 'kraan',
  },
  {
    criterium: 'Smaak',
    kraanwater: 'Varieert per regio (chloor, kalk)',
    flessenwater: 'Consistent per merk',
    voordeel: 'fles',
  },
  {
    criterium: 'PFAS / Verontreinigingen',
    kraanwater: 'Sporen aanwezig, binnen norm',
    flessenwater: 'Sporen mogelijk (plastic migratie)',
    voordeel: 'gelijk',
  },
  {
    criterium: 'Gemak',
    kraanwater: 'Altijd beschikbaar, geen aankoop',
    flessenwater: 'Sjouwen, opslaan, afval',
    voordeel: 'kraan',
  },
  {
    criterium: 'Controle & transparantie',
    kraanwater: 'Jaarlijkse publieke rapportage',
    flessenwater: 'Minder frequent',
    voordeel: 'kraan',
  },
];

const zorgenEnFeiten = [
  {
    zorg: 'Chloor in kraanwater',
    feit: 'Chloor wordt toegevoegd als desinfectiemiddel om microbiologische veiligheid te garanderen tijdens transport. De concentraties zijn laag (0,1–0,3 mg/L) en veilig. Het is een geur- en smaakprobleem, geen gezondheidsrisico bij normale blootstelling.',
    oplossing: 'Koolstoffilter of osmose verwijdert chloor volledig.',
  },
  {
    zorg: 'Kalk (calciumcarbonaat)',
    feit: 'Hard water bevat calcium en magnesium — beiden essentiële mineralen. Hard water is niet schadelijk voor de gezondheid. De WHO stelt dat waterhardheid geen negatief effect heeft op de gezondheid. Het nadeel is apparatenslijtage en een soms onaangename mondervaring.',
    oplossing: 'Osmose of waterontharder verwijdert kalk.',
  },
  {
    zorg: 'PFAS in kraanwater',
    feit: 'PFAS (per- en polyfluoralkylstoffen) zijn persistent in het milieu. RIVM bevestigt sporen in Nederlands drinkwater, gemiddeld onder de Europese norm. Lokale verhogingen mogelijk nabij industrie of vliegvelden. Langetermijnrisico\'s bij lage blootstelling zijn wetenschappelijk nog niet volledig vastgesteld.',
    oplossing: 'Omgekeerde osmose verwijdert 90–99% van PFAS.',
  },
  {
    zorg: 'Microplastics',
    feit: 'KWR-onderzoek vindt microplastics in Nederlands drinkwater in lage concentraties. Er zijn geen wettelijke normen voor microplastics in drinkwater en de gezondheidseffecten bij drinkwaterblootstelling zijn nog onduidelijk. Het aandeel uit drinkwater is klein vergeleken met voeding en lucht.',
    oplossing: 'Osmose-membraan houdt deeltjes >0,1 μm tegen.',
  },
  {
    zorg: 'Loden leidingen (voor 1960)',
    feit: 'Woningen gebouwd voor 1960 kunnen loden binnenhuisleidingen hebben. Lood lost langzaam op in stilstaand water. De meeste loden leidingen zijn inmiddels gesaneerd, maar in enkele gevallen zijn ze nog aanwezig. Controleer dit bij de gemeente of eigenaar.',
    oplossing: 'Osmose verwijdert lood effectief; laat leidingen saneren.',
  },
  {
    zorg: 'Nitraten (landbouwgebieden)',
    feit: 'Grondwater in landbouwintensieve gebieden bevat soms verhoogde nitraatconcentraties. Drinkwaterbedrijven mengmalen om onder de norm van 50 mg/L te blijven. Voor volwassenen is dit geen gezondheidsrisico; voor baby\'s jonger dan 6 maanden is extra voorzichtigheid aangeraden.',
    oplossing: 'Omgekeerde osmose verwijdert 90–95% van nitraten.',
  },
];

export default function KraanwaterPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kraanwater', url: 'https://waterfilterplatform.nl/kraanwater' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Kraanwater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kraanwater drinken: veilig, gezond en lekker?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            In Nederland kun je direct kraanwater drinken — en dat is ook meteen het meest
            duurzame en goedkoopste alternatief voor flessenwater. Maar smaakt het altijd lekker?
            Wat zit er precies in? En wanneer is filteren toch een slimme keuze?
            Op deze pagina vind je evidence-based antwoorden op de meest gestelde vragen over
            Nederlands kraanwater.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#vergelijking"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Kraan vs. flessenwater →
            </Link>
            <Link
              href="/waterhardheid"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Hardheid in mijn regio
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#veilig" className="hover:underline">Is kraanwater veilig?</a></li>
            <li><a href="#smaak" className="hover:underline">Smaak per regio</a></li>
            <li><a href="#zorgen" className="hover:underline">Chloor, kalk, PFAS, microplastics</a></li>
            <li><a href="#vergelijking" className="hover:underline">Kraanwater vs. flessenwater</a></li>
            <li><a href="#filter" className="hover:underline">Wanneer een filter overwegen?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Is kraanwater veilig */}
        <section id="veilig">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Is kraanwater in Nederland veilig om te drinken?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het korte antwoord: <strong>ja</strong>. Nederlands kraanwater behoort tot het veiligste
            ter wereld en is direct drinkbaar. Dat is geen marketingboodschap maar een wetenschappelijke
            vaststelling, bevestigd door de WHO, de Europese Commissie en het RIVM.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Tien drinkwaterbedrijven zuiveren het water uit grondwater, de Rijn en Maas, en
            geïnfiltreerd duinwater tot een kwaliteit die voldoet aan het{' '}
            <strong>Drinkwaterbesluit</strong>. Dit besluit stelt normen voor meer dan 50 parameters
            — van bacteriën en pesticiden tot zware metalen, PFAS en nitraten. Jaarlijkse meetresultaten
            zijn publiek beschikbaar via drinkwaterinfo.nl.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het is wel belangrijk te beseffen dat &ldquo;veilig&rdquo; niet hetzelfde is als
            &ldquo;puur&rdquo;. Kraanwater bevat altijd opgeloste mineralen, behandelingsstoffen
            (chloor) en soms sporen van PFAS, nitraten of medicijnresten — alles binnen de wettelijke
            normen. Of je deze stoffen wilt filteren is een persoonlijke keuze.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-4 flex gap-3 items-start">
            <div className="text-2xl shrink-0">✓</div>
            <div>
              <p className="font-semibold text-[#003F5C] mb-1">Conclusie</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Kraanwater in Nederland is veilig om dagelijks te drinken voor gezonde volwassenen en
                kinderen. Voor specifieke groepen (baby&apos;s, zwangere vrouwen, immuungecompromitteerden)
                of in specifieke gebieden (nabij industrieterreinen) kan extra zekerheid door filteren
                zinvol zijn.
              </p>
            </div>
          </div>
        </section>

        {/* Smaak per regio */}
        <section id="smaak">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom smaakt kraanwater per regio anders?</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De smaak van kraanwater wordt bepaald door drie factoren: de <strong>mineraalsamenstelling</strong>
            (waterhardheid), het <strong>chloorgehalte</strong> en de <strong>waterbron</strong>.
            Hieronder een overzicht per regio:
          </p>
          <div className="space-y-3">
            {smaakRegios.map(r => (
              <div key={r.regio} className={`border rounded-2xl p-4 ${r.kleur}`}>
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <p className={`font-semibold ${r.tekst}`}>{r.regio}</p>
                  <span className="text-xs bg-white/70 px-2 py-0.5 rounded-full text-gray-600 font-medium">
                    {r.hardheid}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-2">
                  <div><span className="text-gray-400">Chloor:</span> {r.chloorniveau}</div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed italic">&ldquo;{r.smaakprofiel}&rdquo;</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-5 leading-relaxed">
            Wil je weten wat de exacte hardheid in jouw gemeente is? Bekijk de{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid per gemeente
            </Link>
            . Voor meer achtergrondinformatie over smaakverschillen lees de{' '}
            <Link href="/kennisbank/kraanwater-smaak" className="text-[#005F8A] underline hover:no-underline">
              kennisbank: kraanwater smaak
            </Link>
            .
          </p>
        </section>

        {/* Veelgestelde zorgen */}
        <section id="zorgen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Veelgestelde zorgen over kraanwater: feiten en nuances</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Er circuleren veel misverstanden over kraanwater. Hieronder behandelen we de meest
            voorkomende zorgen op basis van wetenschappelijk bewijs:
          </p>
          <div className="space-y-4">
            {zorgenEnFeiten.map(z => (
              <div key={z.zorg} className="border border-gray-100 rounded-2xl p-4">
                <p className="font-semibold text-[#003F5C] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#005F8A] shrink-0 inline-block" />
                  {z.zorg}
                </p>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">{z.feit}</p>
                <div className="bg-[#E0F2FE]/60 rounded-lg px-3 py-2">
                  <p className="text-xs text-[#005F8A] font-medium">Oplossing: {z.oplossing}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-5 leading-relaxed">
            Meer diepgaande informatie over de drinkwaterkwaliteit in Nederland vind je op onze
            pagina over{' '}
            <Link href="/drinkwater" className="text-[#005F8A] underline hover:no-underline">
              drinkwater
            </Link>
            , inclusief het RIVM-toezichtskader en regionale kwaliteitsverschillen.
          </p>
        </section>

        {/* Kraanwater vs flessenwater */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kraanwater vs. flessenwater: eerlijke vergelijking</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Nederland is een van de landen met de hoogste consumptie van flessenwater per hoofd van
            de bevolking — ondanks dat ons kraanwater van uitstekende kwaliteit is. Hieronder een
            eerlijke vergelijking op alle relevante criteria:
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[500px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Criterium</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Kraanwater</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Flessenwater</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingKraan.map((r, i) => (
                  <tr
                    key={r.criterium}
                    className={i % 2 === 0 ? 'border-b border-gray-100' : 'bg-[#E0F2FE]/20 border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.criterium}</td>
                    <td className={`py-2.5 px-3 text-xs ${r.voordeel === 'kraan' ? 'text-green-700 font-medium' : 'text-gray-600'}`}>
                      {r.voordeel === 'kraan' && <span className="mr-1">✓</span>}
                      {r.kraanwater}
                    </td>
                    <td className={`py-2.5 px-3 text-xs ${r.voordeel === 'fles' ? 'text-green-700 font-medium' : 'text-gray-600'}`}>
                      {r.voordeel === 'fles' && <span className="mr-1">✓</span>}
                      {r.flessenwater}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-[#005F8A]">500×</p>
              <p className="text-xs text-gray-600 mt-1">goedkoper dan flessenwater</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-[#005F8A]">€ 500–</p>
              <p className="text-xs text-gray-600 mt-1">besparing per gezin per jaar</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-[#005F8A]">100%</p>
              <p className="text-xs text-gray-600 mt-1">minder plastic flessenafval</p>
            </div>
          </div>

          <p className="text-gray-700 mt-5 leading-relaxed">
            Wil je wél de smaak en zuiverheid van bronwater thuis hebben? Een{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose filter
            </Link>{' '}
            geeft kraanwater een vergelijkbaar smaakprofiel als hoogwaardig bronwater — maar voor een
            fractie van de kosten. Lees meer in de vergelijking{' '}
            <Link href="/kennisbank/kraanwater-vs-flessenwater" className="text-[#005F8A] underline hover:no-underline">
              kraanwater vs. flessenwater
            </Link>
            .
          </p>
        </section>

        {/* Wanneer een filter overwegen */}
        <section id="filter">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer een waterfilter overwegen voor kraanwater?</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Kraanwater is veilig om te drinken, maar er zijn situaties waarbij een waterfilter
            de kwaliteit van je drinkwater merkbaar verbetert. Hieronder de meest relevante
            overwegingen:
          </p>

          <div className="space-y-3 mb-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2">1. Smaak verbeteren (chloor, mineralen)</p>
              <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                Als je de chloorsmaak of de mineralige smaak van hard water wil verminderen, is een
                actieve koolstoffilter al voldoende. Dit is de goedkoopste en eenvoudigste optie. Voor
                de puurste smaak — vergelijkbaar met bronwater — is omgekeerde osmose de betere keuze.
              </p>
              <p className="text-xs text-[#005F8A] font-medium">
                Optie: Koolstoffilter op kraan (€30–80/jr) of omgekeerde osmose (€60–150/jr)
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2">2. Kalkproblemen in hard-watergebied</p>
              <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                Woon je in een gebied met waterhardheid boven de 15 °dH (Limburg, Noord-Brabant,
                Gelderland)? Dan profiteert zowel je drinkwater als je apparaten van ontkalking.
                Een osmose-systeem op de keukentap geeft zacht, puur drinkwater. Voor de volledige
                woning is een waterontharder een aanvulling.
              </p>
              <p className="text-xs text-[#005F8A] font-medium">
                Optie: Omgekeerde osmose of waterontharder
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2">3. PFAS-bezorgdheid</p>
              <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                Woon je nabij een industrieterrein, vliegveld of brandoefenlocatie? Dan kunnen
                PFAS-concentraties in het lokale grondwater verhoogd zijn. Controleer dit via de
                drinkwaterkwaliteitsrapporten van jouw drinkwaterbedrijf. Als zekerheid gewenst
                is, is omgekeerde osmose de enige bewezen methode om PFAS te verwijderen.
              </p>
              <p className="text-xs text-[#005F8A] font-medium">
                Optie: Omgekeerde osmose (verwijdert 90–99% PFAS)
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2">4. Gezondheidsoverwegingen (baby&apos;s, zwangere vrouwen)</p>
              <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                Voor de bereiding van flesvoeding voor zuigelingen of als extra zekerheid tijdens
                zwangerschap is gefilterd water met een osmose-systeem een veilige keuze. Let op:
                osmose-water heeft een lage mineraalsamenstelling; bij langdurig exclusief gebruik
                kan mineralenaanvulling nodig zijn.
              </p>
              <p className="text-xs text-[#005F8A] font-medium">
                Optie: Omgekeerde osmose met remineralisatiefilter
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2">5. Loden leidingen (oudere woning)</p>
              <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                Woningen gebouwd voor 1960 kunnen nog loden binnenhuisleidingen hebben. Lood lost
                langzaam op in stilstaand water en kan loodvergiftiging veroorzaken — met name bij
                kinderen. Laat bij twijfel een loodmeting uitvoeren. Een osmose-filter verwijdert lood
                effectief.
              </p>
              <p className="text-xs text-[#005F8A] font-medium">
                Optie: Loodmeting + sanering leidingen en/of omgekeerde osmose
              </p>
            </div>
          </div>

          <div className="bg-[#E0F2FE] rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2">Welk filter past bij jou?</p>
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
              Voor smaakverbetering volstaat een koolstoffilter. Voor bredere zuivering (kalk,
              nitraten, PFAS, microplastics) is omgekeerde osmose de beste keuze. Wil je
              bovendien kokend en bruisend water? Dan is een 4-in-1 kraan met ingebouwde osmose
              de meest complete oplossing.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/omgekeerde-osmose/kopen"
                className="bg-[#005F8A] text-white font-semibold px-4 py-2 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
              >
                Osmosefilter kopen →
              </Link>
              <Link
                href="/waterfilter"
                className="border border-[#005F8A] text-[#005F8A] font-semibold px-4 py-2 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
              >
                Alle filtertypen vergelijken
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Interne links */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer lezen over kraanwater en waterfilters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Hoe hard is het kraanwater bij jou thuis? 349 gemeenten met advies.',
              },
              {
                href: '/drinkwater',
                title: 'Drinkwater in Nederland',
                desc: 'Uitgebreide gids over het Nederlandse drinkwaterstelsel, RIVM en kwaliteitsmonitoring.',
              },
              {
                href: '/kennisbank/kraanwater-vs-flessenwater',
                title: 'Kraanwater vs. flessenwater',
                desc: 'Eerlijke vergelijking op smaak, prijs, veiligheid en milieu-impact.',
              },
              {
                href: '/kennisbank/kraanwater-smaak',
                title: 'Waarom smaakt kraanwater anders?',
                desc: 'Alles over chloor, kalk en regionale smaakverschillen in kraanwater.',
              },
              {
                href: '/waterfilter',
                title: 'Waterfilters vergelijken',
                desc: 'Alle filtertypes naast elkaar: filterkan, koolstof, osmose en ontharder.',
              },
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Osmosefilter kopen',
                desc: 'Vergelijk de beste osmose-systemen voor jouw situatie en budget.',
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
            <Link href="/stoffen-in-drinkwater" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Welke stoffen zitten er in kraanwater?</p>
              <p className="text-sm text-gray-500">Een volledig overzicht van mineralen, verontreinigingen en toevoegingen in kraanwater.</p>
            </Link>
            <Link href="/drinkwaternormen" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Drinkwaternormen in Nederland</p>
              <p className="text-sm text-gray-500">Welke wettelijke normen gelden er voor de kwaliteit van drinkwater in Nederland?</p>
            </Link>
            <Link href="/leidingwater" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Leidingwater kwaliteit uitgelegd</p>
              <p className="text-sm text-gray-500">Hoe wordt leidingwater gezuiverd en hoe veilig is het in Nederland?</p>
            </Link>
            <Link href="/filtertechnieken" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Kraanwater filteren: welke opties?</p>
              <p className="text-sm text-gray-500">Vergelijk filtertechnieken voor het verbeteren van de kwaliteit van uw kraanwater.</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over kraanwater</h2>
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
      {/* orphan-fix: meer in dit cluster */}
      <div className="max-w-3xl mx-auto px-4 pb-12">
        <section>
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Meer in dit cluster</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link key="/kraanwater/bacterien" href="/kraanwater/bacterien" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Bacterien in kraanwater</p>
              </Link>
          </div>
        </section>
      </div>
    </>
  );
}
