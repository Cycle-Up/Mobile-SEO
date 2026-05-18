import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Drinkwater in Nederland: Kwaliteit & Veiligheid',
  description:
    'Alles over drinkwater in Nederland: kwaliteit, samenstelling, regionale verschillen en wanneer een waterfilter toegevoegde waarde biedt.',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwater' },
  openGraph: {
    title: 'Drinkwater in Nederland: Kwaliteit & Veiligheid',
    description:
      'Wat zit er in Nederlands drinkwater? Lees over de 10 drinkwaterbedrijven, RIVM-monitoring, regionale hardheidsverschillen en wanneer filteren zinvol is.',
    url: 'https://waterfilterplatform.nl/drinkwater',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Is drinkwater in Nederland veilig om te drinken?',
    answer:
      'Ja. Nederlands drinkwater behoort tot de veiligste ter wereld en wordt continu gecontroleerd op basis van het Drinkwaterbesluit. RIVM en de drinkwaterbedrijven meten honderden parameters. Toch bevatten metingen soms sporen van PFAS, nitraten of medicijnresten die binnen de wettelijke normen vallen maar door sommige consumenten als ongewenst worden beschouwd.',
  },
  {
    question: 'Welke stoffen zitten er in Nederlands drinkwater?',
    answer:
      'Nederlands drinkwater bevat van nature mineralen als calcium, magnesium, natrium en kalium. Daarnaast worden behandelingsstoffen toegevoegd zoals chloor (desinfectie) en soms natriumhydroxide (pH-correctie). Afhankelijk van de bron en regio kunnen ook sporen van nitraten, PFAS, medicijnresten en pesticiden aanwezig zijn, altijd binnen wettelijke normen.',
  },
  {
    question: 'Hoe hard is drinkwater in Nederland?',
    answer:
      'De waterhardheid verschilt sterk per regio. In Zeeland en de Zeeuwse eilanden is het water zacht (4–6 °dH), terwijl in Limburg en grote delen van Noord-Brabant het water zeer hard kan zijn (18–22 °dH). Hard water bevat meer calcium en magnesium, wat kalkvorming veroorzaakt op apparaten en kranen.',
  },
  {
    question: 'Wat is het Drinkwaterbesluit?',
    answer:
      'Het Drinkwaterbesluit is de Nederlandse implementatie van de Europese Drinkwaterrichtlijn. Het stelt maximale concentraties vast voor honderden stoffen — van bacteriën en virussen tot pesticiden, zware metalen en PFAS. Drinkwaterbedrijven zijn wettelijk verplicht hieraan te voldoen en jaarlijks publiek te rapporteren.',
  },
  {
    question: 'Wat zijn PFAS en zitten die in drinkwater?',
    answer:
      'PFAS (poly- en perfluoralkylstoffen) zijn industriële chemicaliën die persistent in het milieu en het menselijk lichaam ophopen. RIVM-metingen bevestigen dat sporen van PFAS in Nederlands drinkwater aanwezig zijn. De concentraties liggen onder de wettelijke norm, maar de WHO en EFSA zijn bezig normen te herzien. Omgekeerde osmose is momenteel de enige consumentenoplossing die PFAS effectief verwijdert.',
  },
  {
    question: 'Wanneer is een waterfilter nuttig voor drinkwater?',
    answer:
      'Een waterfilter voegt waarde toe als je last hebt van de chloorsmaak, in een hard-watergebied woont, bezorgd bent over PFAS of nitraten, of hogere zekerheid wil over de zuiverheid. Voor de beste bescherming is omgekeerde osmose aanbevolen: dit verwijdert 95–99% van alle opgeloste stoffen, inclusief PFAS, nitraten, zware metalen, kalk en chloor.',
  },
];

const waterbedrijven = [
  { naam: 'Evides', regio: 'Zeeland, Zuid-Holland (eilanden)', hardheid: '4–8 °dH' },
  { naam: 'Dunea', regio: 'Den Haag, Westland, regio Midden-Holland', hardheid: '7–9 °dH' },
  { naam: 'PWN', regio: 'Noord-Holland (excl. Amsterdam)', hardheid: '8–11 °dH' },
  { naam: 'Waternet', regio: 'Amsterdam e.o.', hardheid: '9–11 °dH' },
  { naam: 'Vitens', regio: 'Gelderland, Overijssel, Friesland, Utrecht (deels)', hardheid: '10–18 °dH' },
  { naam: 'Oasen', regio: 'Midden-Holland, Goeree-Overflakkee', hardheid: '8–12 °dH' },
  { naam: 'WML', regio: 'Limburg', hardheid: '14–22 °dH' },
  { naam: 'Brabant Water', regio: 'Noord-Brabant', hardheid: '10–20 °dH' },
  { naam: 'Dune Water', regio: 'Delfland, Kennemerland', hardheid: '7–10 °dH' },
  { naam: 'Groningen Waterleiding', regio: 'Groningen, Drenthe', hardheid: '8–14 °dH' },
];

const bronnenTabel = [
  {
    bron: 'Grondwater',
    aandeel: '~60%',
    kenmerken: 'Gefilterd door bodemlagen, laag in microbiologische verontreiniging, maar kan hogere nitraat- en PFAS-gehalten hebben in landbouwgebieden',
    regio: 'Oost- en Zuid-Nederland',
  },
  {
    bron: 'Oppervlaktewater (Rijn, Maas)',
    aandeel: '~35%',
    kenmerken: 'Vereist uitgebreide behandeling. Na zuivering kwalitatief goed, maar bevat soms sporenconcentraties van farmaceutica en PFAS',
    regio: 'West-Nederland',
  },
  {
    bron: 'Duinwater (infiltratie)',
    aandeel: '~5%',
    kenmerken: 'Rivierwaterpre-behandeld en geïnfiltreerd in de duinen. Lange verblijftijd geeft extra zuivering',
    regio: 'Kustgebieden',
  },
];

const stoffenInDrinkwater = [
  {
    stof: 'Calcium (Ca²⁺)',
    herkomst: 'Bodem en gesteente',
    effect: 'Kalkvorming op apparaten, benedengrens gezond',
    filter: 'Omgekeerde osmose, waterontharder',
  },
  {
    stof: 'Magnesium (Mg²⁺)',
    herkomst: 'Bodem en gesteente',
    effect: 'Bijdraagt aan waterhardheid, essentieel mineraal',
    filter: 'Omgekeerde osmose, waterontharder',
  },
  {
    stof: 'Chloor (Cl₂)',
    herkomst: 'Toegevoegd als desinfectiemiddel',
    effect: 'Merkbare smaak en geur in sommige regio\'s',
    filter: 'Actieve koolstoffilter, omgekeerde osmose',
  },
  {
    stof: 'Nitraat (NO₃⁻)',
    herkomst: 'Meststoffen in landbouwgebieden',
    effect: 'Schadelijk bij hoge concentraties, risico voor zuigelingen',
    filter: 'Omgekeerde osmose',
  },
  {
    stof: 'PFAS',
    herkomst: 'Industriële emissies, brandblusstoffen',
    effect: 'Persistent in het lichaam, mogelijke gezondheidsrisico\'s bij langdurige blootstelling',
    filter: 'Omgekeerde osmose',
  },
  {
    stof: 'Medicijnresten',
    herkomst: 'Afvalwater/rioolwater',
    effect: 'Sporen aanwezig, langetermijneffect onzeker',
    filter: 'Omgekeerde osmose (gedeeltelijk)',
  },
];

export default function DrinkwaterPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Drinkwater in Nederland: Kwaliteit & Veiligheid',
          description:
            'Uitgebreide gids over drinkwater in Nederland: bronnen, kwaliteit, samenstelling, regionale hardheidsverschillen en wanneer filteren zinvol is.',
          datePublished: '2025-10-01',
          dateModified: '2026-05-13',
          url: 'https://waterfilterplatform.nl/drinkwater',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Drinkwater', url: 'https://waterfilterplatform.nl/drinkwater' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Drinkwater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Drinkwater in Nederland: kwaliteit, samenstelling en veiligheid
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Nederland heeft een uitstekend drinkwaterstelsel. Tien drinkwaterbedrijven leveren dagelijks
            schoon water aan ruim 17 miljoen Nederlanders. Maar wat zit er precies in ons drinkwater?
            Hoe verschilt het per regio? En wanneer voegt een waterfilter echte waarde toe?
            Op deze pagina vind je een volledig overzicht.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#gemeente"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Check jouw gemeente →
            </Link>
            <Link
              href="/waterhardheid"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Waterhardheid per gemeente
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#stelsel" className="hover:underline">Het Nederlandse drinkwaterstelsel</a></li>
            <li><a href="#bronnen" className="hover:underline">Bronnen: grond- en oppervlaktewater</a></li>
            <li><a href="#samenstelling" className="hover:underline">Wat zit er in drinkwater?</a></li>
            <li><a href="#hardheid" className="hover:underline">Regionale hardheids&shy;verschillen</a></li>
            <li><a href="#veiligheid" className="hover:underline">Veiligheid en toezicht (RIVM)</a></li>
            <li><a href="#pfas" className="hover:underline">PFAS, nitraten en microverontreinigingen</a></li>
            <li><a href="#filter" className="hover:underline">Wanneer is een waterfilter zinvol?</a></li>
            <li><a href="#gemeente" className="hover:underline">Check jouw gemeente</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Het Nederlandse drinkwaterstelsel */}
        <section id="stelsel">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Het Nederlandse drinkwaterstelsel</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Drinkwater in Nederland wordt geleverd door tien regionale drinkwaterbedrijven. Samen zorgen zij
            voor de productie, zuivering en distributie van drinkwater aan alle huishoudens, bedrijven en
            instellingen. Nederland is één van de weinige landen ter wereld waar kraanwater zo veilig is dat
            het direct gedronken kan worden — zonder koken of aanvullende behandeling.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            De drinkwaterbedrijven zijn verantwoordelijk voor de kwaliteit tot aan de watermeter. Daarna is de
            eigenaar van het gebouw verantwoordelijk voor de leidingen. In oudere woningen met loden leidingen
            (gebouwd voor 1960) bestaat er een klein risico op loodbesmetting vanuit het eigen leidingwerk —
            al zijn de meeste loden leidingen inmiddels gesaneerd.
          </p>

          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[500px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Bedrijf</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Regio</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Hardheid</th>
                </tr>
              </thead>
              <tbody>
                {waterbedrijven.map((b, i) => (
                  <tr key={b.naam} className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-[#E0F2FE]/30 border-b border-gray-100'}>
                    <td className="py-2.5 px-3 font-medium">{b.naam}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{b.regio}</td>
                    <td className="py-2.5 px-3 text-right text-xs font-mono">{b.hardheid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Hardheid indicatief; exacte waarden variëren per leveringspunt en seizoen.
          </p>
        </section>

        {/* Bronnen */}
        <section id="bronnen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Bronnen: grond- en oppervlaktewater</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Nederlands drinkwater wordt gewonnen uit drie typen bronnen: grondwater, oppervlaktewater
            (Rijn en Maas) en geïnfiltreerd duinwater. Elk type heeft zijn eigen kwaliteits&shy;profiel
            en vereist een andere zuiveringstechniek.
          </p>
          <div className="space-y-3">
            {bronnenTabel.map(b => (
              <div key={b.bron} className="border border-gray-100 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <p className="font-semibold text-[#003F5C]">{b.bron}</p>
                  <span className="text-xs bg-[#E0F2FE] text-[#005F8A] px-2 py-0.5 rounded-full font-medium">
                    {b.aandeel} van productie
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1 leading-relaxed">{b.kenmerken}</p>
                <p className="text-xs text-gray-400">Voornamelijk: {b.regio}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-5 leading-relaxed">
            Na winning wordt het ruwe water behandeld via een combinatie van coagulatie, sedimentatie,
            zandfiltratie, actieve koolstoffiltratie en UV-bestraling of chloring. Het resultaat voldoet
            aan het <Link href="/drinkwaterkwaliteit" className="text-[#005F8A] underline hover:no-underline">Drinkwaterbesluit</Link> en de
            Europese Drinkwaterrichtlijn (2020/2184). Een volledige kwaliteitsanalyse per regio vind je
            op onze{' '}
            <Link href="/kennisbank/waterkwaliteit-nederland" className="text-[#005F8A] underline hover:no-underline">
              kennisbank: waterkwaliteit Nederland
            </Link>
            .
          </p>
        </section>

        {/* Samenstelling */}
        <section id="samenstelling">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat zit er in Nederlands drinkwater?</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Drinkwater is geen puur H₂O: het bevat van nature opgeloste mineralen en na zuivering ook
            kleine hoeveelheden behandelingsstoffen. Hieronder een overzicht van de voornaamste
            componenten, hun herkomst en de mogelijkheden om ze te verwijderen.
          </p>
          <div className="space-y-2">
            {stoffenInDrinkwater.map(s => (
              <div key={s.stof} className="border border-gray-100 rounded-xl p-4">
                <div className="flex items-start justify-between gap-3 mb-1 flex-wrap">
                  <p className="font-semibold text-gray-900">{s.stof}</p>
                  <span className="text-xs text-gray-400 shrink-0">{s.herkomst}</span>
                </div>
                <p className="text-sm text-gray-600 mb-1 leading-relaxed">{s.effect}</p>
                <p className="text-xs text-[#005F8A]">Verwijderbaar met: {s.filter}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-[#E0F2FE]/60 rounded-2xl p-4">
            <p className="font-semibold text-[#003F5C] mb-1 text-sm">Wat meet het Drinkwaterbesluit?</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Het Drinkwaterbesluit stelt normen voor meer dan 50 parameters, waaronder microbiologische
              parameters (E. coli, enterokokken), chemische stoffen (nitraat, pesticiden, zware metalen,
              PFAS), radioactiviteit en indicatoren zoals kleur, geur en smaak. Jaarlijkse resultaten zijn
              openbaar via <span className="font-medium">drinkwaterinfo.nl</span>.
            </p>
          </div>
        </section>

        {/* Regionale hardheidsverschillen */}
        <section id="hardheid">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Regionale hardheidsverschillen: hard vs. zacht water</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De waterhardheid — uitgedrukt in graden Duitse hardheid (°dH) — verschilt enorm per provincie
            en zelfs per gemeente. Dit heeft directe gevolgen voor de hoeveelheid kalk die zich afzet
            op kranen, in waterkokers, koffiemachines en cv-ketels.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
              <p className="font-semibold text-green-800 mb-2">Zacht water (4–8 °dH)</p>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Zeeland en Zeeuwse eilanden</li>
                <li>• Kustgebieden Zuid-Holland</li>
                <li>• Weinig kalkvorming</li>
                <li>• Minder reden voor waterontharder</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
              <p className="font-semibold text-orange-800 mb-2">Hard water (15–22 °dH)</p>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Limburg en Noord-Brabant</li>
                <li>• Delen van Gelderland</li>
                <li>• Zware kalkvorming op apparaten</li>
                <li>• Osmose of ontharder aanbevolen</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hard water is niet ongezond — calcium en magnesium zijn essentiële mineralen — maar het heeft
            wel praktische nadelen. Kalk in een waterkoker verhoogt het energieverbruik met 10–25%. Een
            kalklaag van 1 mm in een cv-ketel geeft al 5–8% hogere stookkosten. Bovendien verslechtert
            kalk de levensduur van wasmachines, vaatwassers en koffieapparaten aanzienlijk.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wil je weten hoe hard het water in jouw regio is? Bekijk de{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid per gemeente
            </Link>
            , inclusief een uitgebreide uitleg per hardheidsklasse en filteradvies.
          </p>
        </section>

        {/* Veiligheid en RIVM */}
        <section id="veiligheid">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Veiligheid en toezicht: RIVM en het Drinkwaterbesluit</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De kwaliteit van Nederlands drinkwater wordt gewaarborgd door een stelsel van wettelijke normen,
            continue monitoring en onafhankelijk toezicht:
          </p>
          <div className="space-y-3 mb-5">
            <div className="flex gap-3 items-start bg-[#E0F2FE]/40 rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">1</div>
              <div>
                <p className="font-semibold text-[#003F5C] mb-1">Drinkwaterbesluit (wettelijk kader)</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Het Drinkwaterbesluit (2011, geactualiseerd 2023) implementeert de Europese
                  Drinkwaterrichtlijn en stelt normen voor meer dan 50 parameters. Drinkwaterbedrijven
                  zijn verplicht jaarlijks te meten en publiek te rapporteren.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-[#E0F2FE]/40 rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">2</div>
              <div>
                <p className="font-semibold text-[#003F5C] mb-1">RIVM — onafhankelijke monitoring</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Het Rijksinstituut voor Volksgezondheid en Milieu (RIVM) voert landelijke monitorings&shy;programma's
                  uit en publiceert jaarlijks de <em>Staat van de Drinkwaterkwaliteit</em>. RIVM signaleert
                  trends zoals toenemende PFAS-concentraties en adviseert over normaanpassing.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-[#E0F2FE]/40 rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">3</div>
              <div>
                <p className="font-semibold text-[#003F5C] mb-1">ILT — Inspectie Leefomgeving en Transport</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  De ILT houdt toezicht op de naleving van het Drinkwaterbesluit door de
                  drinkwaterbedrijven. Bij overschrijdingen worden bedrijven verplicht maatregelen te nemen
                  en worden consumenten geïnformeerd.
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            In de praktijk zijn overschrijdingen van drinkwaternormen in Nederland zeldzaam. Wanneer ze
            voorkomen — zoals tijdelijke nitraatpieken of verhoogde turbiditeit na buiïge perioden —
            worden consumenten actief geïnformeerd via gemeentelijke berichtgeving en de media. Meer
            achtergrondinformatie vind je op de pagina{' '}
            <Link href="/drinkwaterkwaliteit" className="text-[#005F8A] underline hover:no-underline">
              drinkwaterkwaliteit
            </Link>
            .
          </p>
        </section>

        {/* PFAS, nitraten en microverontreinigingen */}
        <section id="pfas">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">PFAS, nitraten en microverontreinigingen</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Hoewel Nederlands drinkwater veilig is, bevat het soms sporen van stoffen die de afgelopen
            jaren toenemende aandacht krijgen. Drie categorieën zijn het meest relevant:
          </p>

          {/* PFAS */}
          <div className="mb-6 border-l-4 border-[#005F8A] pl-4">
            <h3 className="text-lg font-semibold text-[#003F5C] mb-2">PFAS (Eeuwigdurende Chemicaliën)</h3>
            <p className="text-sm text-gray-700 mb-2 leading-relaxed">
              PFAS is een verzamelnaam voor duizenden synthetische stoffen die door hun sterke koolstof-
              fluorbinding nagenoeg niet afbreken in het milieu. Ze komen voor in brandblusstoffen,
              coatings, verpakkingsmateriaal en textiel. Uit RIVM-onderzoek (2022–2025) blijkt dat
              PFAS-concentraties in Nederlands drinkwater gemiddeld onder de Europese norm van 0,1 μg/L
              (som van 20 PFAS) liggen, maar er zijn lokale uitzonderingen — met name in grondwatergebieden
              nabij industrieterreinen of vliegvelden.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Omgekeerde osmose is de enige bewezen consumentenoplossing die PFAS effectief verwijdert
              (90–99% afhankelijk van het type PFAS). Actieve koolstoffilters verwijderen bepaalde
              PFAS-verbindingen deels, maar zijn minder betrouwbaar voor de kortketenige varianten (PFBA, PFBS).
            </p>
          </div>

          {/* Nitraten */}
          <div className="mb-6 border-l-4 border-[#005F8A] pl-4">
            <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Nitraten</h3>
            <p className="text-sm text-gray-700 mb-2 leading-relaxed">
              Nitraten komen in grondwater terecht via meststoffen in de landbouw. De Europese drinkwaternorm
              is 50 mg/L. In intensieve landbouwgebieden in Brabant en Gelderland worden grondwaterbronnen
              al decennialang belast met nitraten. Drinkwaterbedrijven mengen of aanvullend zuiveren het
              ruwe water om aan de norm te voldoen.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Nitraten zijn bij normale concentraties in drinkwater niet schadelijk voor volwassenen, maar
              voor zuigelingen jonger dan 6 maanden geldt een advies om voorzichtig te zijn bij lokaal
              hoge nitraatgehalten. Omgekeerde osmose verwijdert nitraten voor 90–95%.
            </p>
          </div>

          {/* Microplastics en medicijnresten */}
          <div className="border-l-4 border-[#005F8A] pl-4">
            <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Microplastics en medicijnresten</h3>
            <p className="text-sm text-gray-700 mb-2 leading-relaxed">
              Onderzoek van KWR Water Research Institute toont aan dat microplastics in kleine
              hoeveelheden aanwezig zijn in Nederlands drinkwater, maar de concentraties zijn
              laag. Er zijn geen vastgestelde gezondheidsrichtlijnen voor microplastics in
              drinkwater. Medicijnresten (metformine, ibuprofen, oestrogenen) worden gevonden
              in oppervlaktewater en ondanks uitgebreide zuivering ook in kleine sporen in drinkwater.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Omgekeerde osmose kan microplastics (&gt;0,1 μm) en een deel van de farmaceutische
              resten verwijderen. Voor een bredere analyse, zie de{' '}
              <Link href="/kennisbank/waterkwaliteit-nederland" className="text-[#005F8A] underline hover:no-underline">
                kennisbank: waterkwaliteit Nederland
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Wanneer filter zinvol */}
        <section id="filter">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer is een waterfilter zinvol voor drinkwater?</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Nederlands drinkwater is veilig. Maar er zijn situaties waarin een waterfilter
            toegevoegde waarde biedt — zowel voor gezondheid als comfort:
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                titel: 'Chloor- of geurproblemen',
                uitleg: 'In regio\'s waar chloor als desinfectiemiddel wordt toegepast, kan leidingwater een merkbare chloor- of bleekmiddelgeur hebben. Een actieve koolstoffilter of omgekeerde osmose verwijdert chloor volledig.',
                filter: 'Koolstoffilter op kraan, omgekeerde osmose',
              },
              {
                titel: 'Hard water (kalkproblemen)',
                uitleg: 'Bij een hardheid van 15 °dH of meer is kalkvorming in apparaten aanzienlijk. Een omgekeerde osmose filter verwijdert 95–99% van het calcium en magnesium en beschermt zo je apparaten en geeft zachter drinkwater.',
                filter: 'Omgekeerde osmose, waterontharder',
              },
              {
                titel: 'PFAS-bezorgdheid (specifieke gebieden)',
                uitleg: 'Woon je in de buurt van een industrieterrein, vliegveld of voormalig brandoefengebied? Dan kunnen PFAS-concentraties in het grondwater lokaal hoger zijn. Omgekeerde osmose is de enige bewezen bescherming.',
                filter: 'Omgekeerde osmose',
              },
              {
                titel: 'Verhoogd nitraatgehalte',
                uitleg: 'In landbouwintensieve gebieden kunnen nitraatconcentraties in grondwaterbronnen dichter bij de norm liggen. Voor huishoudens met baby\'s of zwangere vrouwen is extra zekerheid aan te bevelen.',
                filter: 'Omgekeerde osmose',
              },
              {
                titel: 'Smaakvoorkeur en zuiverheid',
                uitleg: 'Veel mensen vinden gefilterd water eenvoudigweg lekkerder smaken. Een osmose-systeem of 4-in-1 kraan geeft mineraalarm, puur water zonder nasmaken.',
                filter: 'Omgekeerde osmose, 4-in-1 kraan',
              },
            ].map(s => (
              <div key={s.titel} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-[#003F5C] mb-1">{s.titel}</p>
                <p className="text-sm text-gray-600 mb-2 leading-relaxed">{s.uitleg}</p>
                <p className="text-xs text-[#005F8A] font-medium">Advies: {s.filter}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Voor de meest complete bescherming — chloor, kalk, nitraten, PFAS en microplastics in één
            stap — is{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>{' '}
            de aangewezen keuze. Wil je bovendien kokend en bruisend water uit één kraan? Dan is
            een 4-in-1 kraan met ingebouwde osmose de meest volledige oplossing.
          </p>
          <Link
            href="/omgekeerde-osmose/kopen"
            className="inline-block bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
          >
            Osmosefilter kopen: bekijk opties →
          </Link>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Check jouw gemeente */}
        <section id="gemeente">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Check drinkwaterkwaliteit in jouw gemeente</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De drinkwaterkwaliteit en hardheid verschilt sterk per gemeente, afhankelijk van de
            drinkwaterbron en het waterwingebied. Check je gemeente voor een specifiek overzicht
            van de waterhardheid, leverend drinkwaterbedrijf en filteradvies.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-3">Populaire zoekopdrachten</p>
            <div className="flex flex-wrap gap-2">
              {[
                'Amsterdam', 'Rotterdam', 'Utrecht', 'Den Haag', 'Eindhoven',
                'Groningen', 'Tilburg', 'Almere', 'Breda', 'Nijmegen',
                'Maastricht', 'Leiden', 'Haarlem', 'Arnhem', 'Zaandam',
              ].map(stad => (
                <Link
                  key={stad}
                  href={`/drinkwater/${stad.toLowerCase()}`}
                  className="text-sm bg-white text-[#005F8A] border border-[#005F8A]/30 px-3 py-1.5 rounded-full hover:bg-[#005F8A] hover:text-white transition-colors"
                >
                  {stad}
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Staat jouw gemeente er niet bij?{' '}
              <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
                Bekijk het volledige gemeente-overzicht →
              </Link>
            </p>
          </div>
        </section>

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer lezen over drinkwater en waterfilters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Hoe hard is het water bij jou thuis? Alle 349 gemeenten met advies.',
              },
              {
                href: '/drinkwaterkwaliteit',
                title: 'Drinkwaterkwaliteit in Nederland',
                desc: 'Uitgebreide analyse van meetresultaten, normen en trends.',
              },
              {
                href: '/kennisbank/waterkwaliteit-nederland',
                title: 'Kennisbank: waterkwaliteit Nederland',
                desc: 'Wetenschappelijk onderbouwde achtergrond over PFAS, nitraten en meer.',
              },
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Osmosefilter kopen',
                desc: 'Vergelijk de beste osmose-systemen voor jouw situatie en budget.',
              },
              {
                href: '/waterfilter',
                title: 'Waterfilter vergelijken',
                desc: 'Alle filtertypes naast elkaar: filterkan, koolstof, osmose en ontharder.',
              },
              {
                href: '/kraanwater',
                title: 'Kraanwater drinken',
                desc: 'Is kraanwater direct drinkbaar? Smaak, veiligheid en filtertips.',
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over drinkwater</h2>
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

        {/* Verdiep je kennis */}
        <section>
          <h2 className="text-2xl font-semibold text-[#003F5C] mb-4">Verdiep je kennis</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/drinkwater/bacterien" className="border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-[#003F5C] group-hover:text-[#005F8A] text-sm">Bacteriën in drinkwater</h3>
              <p className="text-xs text-gray-500 mt-1">E.coli, Legionella, normen en risico&apos;s.</p>
            </Link>
            <Link href="/drinkwater/medicijnresten" className="border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-[#003F5C] group-hover:text-[#005F8A] text-sm">Medicijnresten in drinkwater</h3>
              <p className="text-xs text-gray-500 mt-1">Welke farmaceutische resten worden gemeten en wat is het risico?</p>
            </Link>
            <Link href="/drinkwater/fluoride" className="border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-[#003F5C] group-hover:text-[#005F8A] text-sm">Fluoride in kraanwater</h3>
              <p className="text-xs text-gray-500 mt-1">Fluoridegehalte in Nederland: normen, debat en filteropties.</p>
            </Link>
            <Link href="/drinkwater/hardheid" className="border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-[#003F5C] group-hover:text-[#005F8A] text-sm">Waterhardheid en kalk</h3>
              <p className="text-xs text-gray-500 mt-1">Calcium, kalkaanslag en wat jij eraan kunt doen.</p>
            </Link>
            <Link href="/drinkwater/nitraat-verlagen" className="border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-[#003F5C] group-hover:text-[#005F8A] text-sm">Nitraat in drinkwater verlagen</h3>
              <p className="text-xs text-gray-500 mt-1">Oorzaken van nitraat en effectieve filteroplossingen.</p>
            </Link>
            <Link href="/drinkwater/microplastics" className="border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-[#003F5C] group-hover:text-[#005F8A] text-sm">Microplastics in drinkwater</h3>
              <p className="text-xs text-gray-500 mt-1">Wat weten we over microplastics in kraanwater en hoe filter je ze eruit?</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
