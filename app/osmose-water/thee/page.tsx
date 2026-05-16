import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Osmose water voor thee: betere smaak door zuiver water?',
  description:
    'Osmose water voor thee: waarom waterkwaliteit de smaak bepaalt. Het theeschuim probleem, ideale TDS voor thee, invloed van chloor en wanneer remineralisatie helpt.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/thee' },
  openGraph: {
    title: 'Osmose water voor thee: betere smaak door zuiver water?',
    description:
      'Chloor ruïneert delicate thee. Hard water veroorzaakt theeschuim. Osmose water geeft een heldere, nuancevolle kop thee. Lees waarom en wat de ideale TDS is voor elke theesoort.',
    url: 'https://waterfilterplatform.nl/osmose-water/thee',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Is osmose water beter voor thee?',
    answer:
      'Ja, voor de meeste theesoorten is osmose water een verbetering. Chloor in leidingwater reageert met de delicate aromatische verbindingen in thee en geeft een scheikundig, metalig bijsmaakje. Kalk (calcium) reageert met tannines en polyfenolen en veroorzaakt dat grijsachtige schuimvliesje op je thee. Osmose water elimineert beide problemen. Voor sommige teeën kan volledig kalkarm osmose water iets te vlak smaken — lichte mineralisatie verbetert dan de extractie.',
  },
  {
    question: 'Wat is het theeschuimprobleem en hoe los je het op?',
    answer:
      'Theeschuim (het grijze of bruine vliesje op je kop thee) wordt veroorzaakt door een chemische reactie tussen calcium in hard leidingwater en polyfenolen (tannines) in thee. Calcium en thepolyfenolen vormen samen onoplosbare calciumpolyfenolaatcomplexen die als film op het wateroppervlak drijven. Osmose water bevat vrijwel geen calcium — het theeschuim verdwijnt volledig. Dit is een van de meest merkbare en direct tastbare verbeteringen van osmose water voor theedrinkers.',
  },
  {
    question: 'Wat is de ideale TDS voor thee water?',
    answer:
      'De UKTA (UK Tea Academy) en specialty tea-experts hanteren een richtlijn van 100–150 mg/L TDS voor de meest gebalanceerde thee-extractie. Volledig puur osmose water heeft een TDS van 5–15 mg/L — dit kan voor sommige teeën iets te weinig mineralen bevatten, waardoor de thee lichter of vlakker smaakt. Een kleine hoeveelheid remineralisatie (magnesium, calcium en bicarbonaat) naar een TDS van circa 100–120 mg/L geeft het beste resultaat voor kwaliteitsthee.',
  },
  {
    question: 'Welke temperatuur gebruik je voor welke thee?',
    answer:
      'Thee heeft temperatuur-specifieke extractievereisten: groene thee 70–80°C (hogere temperatuur maakt groene thee bitter door vroegtijdige extractie van catechinen), witte thee 70–75°C, oolong thee 80–90°C, zwarte thee 95–100°C, pu-erh 95–100°C. Met een kokend water kraan (boiling water tap) die nauwkeurig ingesteld is op elke temperatuur stel je dit direct in — geen waterkoker of thermometer nodig.',
  },
  {
    question: 'Heeft chloor invloed op de smaak van thee?',
    answer:
      'Ja, aanzienlijk. Chloor in leidingwater reageert met de delicate aromatische verbindingen in thee, met name met de gevoelige terpenen en aldehyden die de bloemige en fruitige tonen bepalen. Dit geeft een scheikundig, zwembadachtig bijsmaakje dat het sterkst merkbaar is in delicate groene en witte teeën. Zwarte thee is robuuster maar ook daarin is het verschil te proeven bij kwaliteitsbladthee. Osmose water bevat geen chloor.',
  },
  {
    question: 'Verbetert osmose water de thee-extractie?',
    answer:
      'Gedeeltelijk. Een lichte mineraalconcentratie (calcium en magnesium) helpt bij de extractie van bepaalde smaakcomponenten. Volledig puur osmose water (TDS &lt; 20 ppm) kan de extractie van sommige thee-complexen belemmeren. De optimale aanpak is osmose water met lichte remineralisatie naar TDS 80–150 mg/L. Dit geeft een betere extractie dan hard leidingwater én is vrij van chloor en theeschuim.',
  },
  {
    question: 'Wat is het verschil tussen gefilterd water en osmose water voor thee?',
    answer:
      'Koolstoffilter (gevuld waterfilter of keukenfilter) verwijdert voornamelijk chloor en verbetert de smaak merkbaar ten opzichte van ongefilterd leidingwater. Maar kalk en andere opgeloste mineralen blijven aanwezig — theeschuim verdwijnt niet. Osmose water verwijdert 95–99% van alle opgeloste stoffen inclusief calcium, magnesium en chloor. Voor de meest heldere thee zonder schuim is osmose water superieur aan simpele koolstoffiltratie.',
  },
  {
    question: 'Hoe combineer je osmose water met een kokend water kraan voor thee?',
    answer:
      'Een 4-in-1 osmosekraan levert gefilterd osmose water direct op elke gewenste temperatuur. Stel de kraan in op 80°C voor groene thee, 95°C voor zwarte thee. Geen waterkoker, geen wachttijd, geen kalksporen in je ketel. De combinatie van osmose filtratie (geen chloor, geen kalk) met nauwkeurige temperatuurcontrole is de optimale thee-setup voor theeliefhebbers die de smaak van hun thee maximaal willen benutten.',
  },
];

const theesoorten = [
  {
    naam: 'Groene thee',
    temperatuur: '70–80°C',
    ideaalTDS: '80–120 mg/L',
    chloorGevoelig: 'Zeer hoog',
    kalkGevoelig: 'Hoog',
    osmoseVerschil: 'Groot — delicate bloemige tonen komen volledig tot hun recht zonder chloor of kalk',
  },
  {
    naam: 'Witte thee',
    temperatuur: '70–75°C',
    ideaalTDS: '80–110 mg/L',
    chloorGevoelig: 'Zeer hoog',
    kalkGevoelig: 'Hoog',
    osmoseVerschil: 'Groot — witte thee is de meest delicate theevariëteit; waterkwaliteit is doorslaggevend',
  },
  {
    naam: 'Oolong thee',
    temperatuur: '80–90°C',
    ideaalTDS: '100–150 mg/L',
    chloorGevoelig: 'Middel',
    kalkGevoelig: 'Middel',
    osmoseVerschil: 'Merkbaar — fruittonen en bloemigheid worden helderder zonder calk',
  },
  {
    naam: 'Zwarte thee',
    temperatuur: '95–100°C',
    ideaalTDS: '100–150 mg/L',
    chloorGevoelig: 'Matig',
    kalkGevoelig: 'Middel',
    osmoseVerschil: 'Merkbaar voor kwaliteitsbladthee — theeschuim verdwijnt volledig',
  },
  {
    naam: 'Pu-erh',
    temperatuur: '95–100°C',
    ideaalTDS: '120–180 mg/L',
    chloorGevoelig: 'Laag',
    kalkGevoelig: 'Laag',
    osmoseVerschil: 'Beperkt — pu-erh heeft wat meer mineralen nodig; osmose + lichte remineralisatie is ideaal',
  },
];

export default function OsmoseWaterTheePage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Osmose water', url: 'https://waterfilterplatform.nl/osmose-water' },
          { name: 'Thee', url: 'https://waterfilterplatform.nl/osmose-water/thee' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Osmose water voor thee: betere smaak door zuiver water?',
          description:
            'Chloor en kalk in leidingwater bederven de smaak van thee. Ontdek hoe osmose water de smaak verbetert en theeschuim elimineert.',
          datePublished: '2026-04-22',
          url: 'https://waterfilterplatform.nl/osmose-water/thee',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/osmose-water" className="hover:text-[#005F8A]">Osmose water</Link>
            <span className="mx-2">/</span>
            <span>Thee</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmose water voor thee: betere smaak door zuiver water?
          </h1>

          {/* QuickAnswer */}
          <div className="bg-white border border-[#005F8A]/30 rounded-xl p-4 mb-6">
            <p className="text-xs font-semibold text-[#005F8A] uppercase tracking-wide mb-1">Snel antwoord</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Ja. Chloor in leidingwater reageert met aromatische theverbindingen en geeft een scheikundige bijsmaak. Calcium veroorzaakt theeschuim door reactie met tannines. Osmose water elimineert beide. De ideale TDS voor thee is 100–150 mg/L — volledig puur osmose water kan met lichte remineralisatie verbeterd worden.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#theeschuim"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Het theeschuimprobleem →
            </Link>
            <Link
              href="/osmose-water/koken"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Koken met osmose water
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#waterkwaliteit" className="hover:underline">Waarom waterkwaliteit theesmaak bepaalt</a></li>
            <li><a href="#theeschuim" className="hover:underline">Het theeschuimprobleem</a></li>
            <li><a href="#chloor" className="hover:underline">Chloor en thee</a></li>
            <li><a href="#tds" className="hover:underline">Ideale TDS voor thee</a></li>
            <li><a href="#temperatuur" className="hover:underline">Temperatuur per theesoort</a></li>
            <li><a href="#theesoorten" className="hover:underline">Vergelijking per theesoort</a></li>
            <li><a href="#remineralisatie" className="hover:underline">Wanneer remineralisatie helpt</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Waterkwaliteit */}
        <section id="waterkwaliteit">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waarom waterkwaliteit de smaak van thee bepaalt
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Thee bestaat voor meer dan 99% uit water. Het is het enige ingrediënt naast de theeblaadjes zelf. Toch besteden de meeste theedrinkers veel aandacht aan de kwaliteit van de thee en nauwelijks aan de kwaliteit van het water. Dat is een gemiste kans.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Waterkwaliteit beïnvloedt thee op drie manieren: via chloor dat aromatische verbindingen aantast, via calcium dat reageren met tannines en polyfenolen, en via de totale mineralenconcentratie (TDS) die de extractiesnelheid en -intensiteit bepaalt.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              {
                factor: 'Chloor',
                effect: 'Reageert met aromatische verbindingen — geeft scheikundige, metalige bijsmaak',
                erg: 'Hoog',
                osmoseFix: true,
              },
              {
                factor: 'Calcium (kalk)',
                effect: 'Reageert met tannines/polyfenolen — veroorzaakt theeschuim en dof, onhelder kopje',
                erg: 'Hoog',
                osmoseFix: true,
              },
              {
                factor: 'TDS (totale mineralen)',
                effect: 'Te hoog: thee smaakt plat en mineraalachtig. Te laag: thee smaakt dun en vlak',
                erg: 'Middel',
                osmoseFix: false,
              },
            ].map(f => (
              <div key={f.factor} className="border border-gray-100 rounded-xl p-4 bg-white text-center">
                <p className="font-bold text-gray-900 mb-1">{f.factor}</p>
                <p className="text-xs text-gray-600 mb-2 leading-relaxed">{f.effect}</p>
                {f.osmoseFix && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Osmose lost dit op</span>
                )}
                {!f.osmoseFix && (
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Remineralisatie helpt</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Professionele thee-sommeliers en theekampioencompetitiebanen in Japan, het VK en Taiwan specificeren water tot op de milligram — TDS, pH, calciumhardheid, magnesiumconcentratie en chloorgehalte. Voor gewone theedrinkers thuis is osmose water de meest praktische weg naar de optimale smaak.
          </p>
        </section>

        {/* Theeschuim */}
        <section id="theeschuim">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Het theeschuimprobleem: wat is het en hoe lost osmose water het op?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ken je dat grijze of bruinachtige vliesje dat op een kop thee drijft, met name na het inschenken of wanneer de thee even staat? Dat is theeschuim — en het heeft niets te maken met de kwaliteit van de thee zelf. Het is een direct gevolg van je leidingwater.
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
            <h3 className="font-semibold text-[#003F5C] mb-2">De scheikunde achter theeschuim</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Thee bevat polyfenolen — complexe aromatische verbindingen waaronder tannines. Calcium in hard leidingwater (Ca²⁺) reageert met deze polyfenolen en vormt onoplosbare calciumpolyfenolaatcomplexen. Deze complexen zijn niet oplosbaar in water en drijven als een dunne film op het oppervlak van je kopje thee. Het vliesje wordt dicher naarmate het water harder is. In gebieden met meer dan 15 °dH is theeschuim bij leidingwater praktisch onvermijdelijk.
            </p>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Osmose water bevat vrijwel geen calcium (TDS 5–15 mg/L). De chemische reactie tussen calcium en polyfenolen vindt niet meer plaats. Het resultaat: geen theeschuim. De kopje is helder, de kleur van de thee is dieper en de smaak is helderder en meer genuanceerd.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">Leidingwater (hard)</h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-gray-400 shrink-0">—</span> Grijzig vliesje op het oppervlak</li>
                <li className="flex items-start gap-2"><span className="text-gray-400 shrink-0">—</span> Doffe, minder heldere kleur</li>
                <li className="flex items-start gap-2"><span className="text-gray-400 shrink-0">—</span> Smaak iets bitter en vlak</li>
                <li className="flex items-start gap-2"><span className="text-gray-400 shrink-0">—</span> Kalkrand in ketel na gebruik</li>
              </ul>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-4 border border-[#005F8A]/20">
              <h3 className="font-semibold text-[#003F5C] mb-2 text-sm">Osmose water</h3>
              <ul className="space-y-1.5 text-sm text-[#003F5C]">
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span> Geen theeschuim — helder kopje</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span> Diepe, heldere theekleur</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span> Nuancevollere, complexere smaak</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span> Geen kalkrand in ketel of kraan</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Chloor en thee */}
        <section id="chloor">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Chloor in leidingwater: wat doet het met thee?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nederlands leidingwater bevat chloor als desinfectiemiddel. De concentraties zijn wettelijk vastgesteld en veilig voor consumptie — maar chloor heeft wel degelijk invloed op de smaak van thee, met name bij delicate groene en witte teeën.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Chloor reageert met de gevoelige aromatische verbindingen in thee, met name met terpenen en aldehyden die verantwoordelijk zijn voor de bloemige, fruitige en kruidige tonen in kwaliteitsthee. Het resultaat is een scheikundige, metalige ondertoon die het smaakprofiel van de thee platslaat. Bij goedkopere zakjesethee is dit minder merkbaar; bij kwaliteitsbladthee als een Darjeeling FTGFOP, een Taiwanese High Mountain Oolong of een Japanse Gyokuro is het verschil aanzienlijk.
          </p>
          <div className="space-y-3">
            {[
              {
                theesoort: 'Groene thee (bijv. Gyokuro, Sencha, Matcha)',
                effect: 'Sterkst merkbaar. Chloor maskeert de umami en bloemige tonen volledig. Osmose water laat het karakteristieke smaakprofiel volledig tot zijn recht komen.',
              },
              {
                theesoort: 'Witte thee (bijv. Silver Needle, Pai Mu Tan)',
                effect: 'Sterk merkbaar. Witte thee heeft de meest delicate en subtiele smaak van alle theesoorten — chloor maskeert de fijne bloemige tonen. Osmose water is vrijwel noodzakelijk voor kwaliteitswitte thee.',
              },
              {
                theesoort: 'Oolong thee (lichte varianten)',
                effect: 'Merkbaar. Fruitige en bloemige noten komen helderder door zonder chloor. Donkere oolong is robuuster en het verschil is kleiner.',
              },
              {
                theesoort: 'Zwarte thee (bijv. Darjeeling, Ceylon)',
                effect: 'Merkbaar voor kwaliteitsbladthee. Goedkope zakjesblack tea maskeert het chloor-effect deels door de robustere smaak.',
              },
            ].map(t => (
              <div key={t.theesoort} className="border border-gray-100 rounded-xl p-4 bg-white">
                <p className="font-semibold text-gray-900 mb-1 text-sm">{t.theesoort}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{t.effect}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TDS voor thee */}
        <section id="tds">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Ideale TDS voor thee: de richtlijn van de UKTA
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De UK Tea Academy (UKTA) — een toonaangevende internationale instantie op het gebied van thee-educatie — heeft richtlijnen gepubliceerd voor de optimale watersamenstelling voor thee. De aanbeveling: TDS tussen 100 en 150 mg/L, met een lichte aanwezigheid van calcium en magnesium voor extractie-ondersteuning.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[440px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Watertype</th>
                  <th className="py-2.5 px-3 font-semibold text-right">TDS</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Effect op thee</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Volledig puur osmose water', tds: '5–15 mg/L', effect: 'Geen chloor/kalk, maar kan iets vlak smaken bij complexe thee' },
                  { type: 'Osmose + lichte remineralisatie', tds: '80–120 mg/L', effect: 'Optimaal voor de meeste theesoorten — helder, nuancevol, geen schuim' },
                  { type: 'UKTA-aanbeveling', tds: '100–150 mg/L', effect: 'Beste balans extractie en smaak voor kwaliteitsthee' },
                  { type: 'Zacht leidingwater (NL)', tds: '150–200 mg/L', effect: 'Acceptabel — chloor is aanwezig, licht schuim mogelijk' },
                  { type: 'Hard leidingwater (&gt;15 °dH)', tds: '300–500+ mg/L', effect: 'Duidelijk theeschuim, vlakkere smaak, kalkringlater in ketel' },
                ].map((r, i) => (
                  <tr key={r.type} className={`border-b border-gray-100 ${i === 1 ? 'bg-[#E0F2FE] font-medium' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="py-2.5 px-3 text-gray-800 text-xs">{r.type}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A] text-xs whitespace-nowrap">{r.tds}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.effect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Volledig puur osmose water (TDS 5–15 mg/L) is uitstekend voor thee in termen van reinheid: geen chloor, geen kalk, geen theeschuim. Voor de meeste theesoorten is dit al een verbetering ten opzichte van leidingwater. Voor echt veeleisende theeliefhebbers die kwaliteitsbladthee drinken, is lichte remineralisatie naar TDS 80–120 mg/L de volgende stap.
          </p>
        </section>

        {/* Temperatuur */}
        <section id="temperatuur">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Temperatuur: nauwkeurig zetten is net zo belangrijk als waterkwaliteit
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Waterkwaliteit en watertemperatuur werken samen. De juiste temperatuur voorkomt bitterheid (bij te heet water voor delicate thee) en zwakke extractie (bij te koud water voor stevige thee). Een kokend water kraan (boiling water tap) die ingesteld kan worden op nauwkeurige temperaturen is de meest praktische oplossing.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[460px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Theesoort</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Temperatuur</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-left hidden sm:table-cell">Toelichting</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { soort: 'Groene thee', temp: '70–80°C', toelichting: 'Hogere temp maakt catechinen vrij die bitterheid geven' },
                  { soort: 'Witte thee', temp: '70–75°C', toelichting: 'Meest delicaat — lage temp behoudt bloemige tonen' },
                  { soort: 'Oolong (licht)', temp: '80–85°C', toelichting: 'Fruitige noten vragen matige temperatuur' },
                  { soort: 'Oolong (donker)', temp: '85–95°C', toelichting: 'Robuustere thee verdraagt hogere temperaturen' },
                  { soort: 'Zwarte thee', temp: '95–100°C', toelichting: 'Volledig kokend water voor maximale extractie' },
                  { soort: 'Pu-erh', temp: '95–100°C', toelichting: 'Gefermenteerde thee vraagt kokend water' },
                ].map((r, i) => (
                  <tr key={r.soort} className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-gray-50 border-b border-gray-100'}>
                    <td className="py-2.5 px-3 font-medium text-gray-900">{r.soort}</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-[#005F8A]">{r.temp}</td>
                    <td className="py-2.5 px-3 text-gray-500 text-xs hidden sm:table-cell">{r.toelichting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">Kokend water kraan: de ideale thee-setup</h3>
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
              Een 4-in-1 osmosekraan combineert osmose filtratie met nauwkeurig geregeld heet water. Stel de temperatuur in op 80°C voor groene thee, 95°C voor zwarte thee. Geen waterkoker, geen wachttijd, geen kalkringlater in de ketel. Het water is gefilterd osmose water — geen chloor, geen kalk, geen theeschuim.
            </p>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="inline-block bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Bekijk 4-in-1 osmosekranen →
            </Link>
          </div>
        </section>

        {/* Vergelijking per theesoort */}
        <section id="theesoorten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Vergelijking: osmose water per theesoort
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het effect van osmose water verschilt per theesoort. Hier is een overzicht van de vijf meest dronken theesoorten en de verwachte verbetering.
          </p>
          <div className="space-y-4">
            {theesoorten.map(t => (
              <div key={t.naam} className="border border-gray-100 rounded-xl p-4 bg-white">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h3 className="font-bold text-gray-900">{t.naam}</h3>
                  <span className="text-xs bg-[#E0F2FE] text-[#005F8A] font-semibold px-2 py-0.5 rounded-full">{t.temperatuur}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs mb-3">
                  <div className="bg-gray-50 rounded-lg p-2">
                    <p className="text-gray-400 mb-0.5">Ideale TDS</p>
                    <p className="font-medium text-gray-800">{t.ideaalTDS}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <p className="text-gray-400 mb-0.5">Chloor-impact</p>
                    <p className="font-medium text-gray-800">{t.chloorGevoelig}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <p className="text-gray-400 mb-0.5">Kalk-impact</p>
                    <p className="font-medium text-gray-800">{t.kalkGevoelig}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{t.osmoseVerschil}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Remineralisatie */}
        <section id="remineralisatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer verbetert remineralisatie de thee?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Volledig puur osmose water (TDS 5–15 mg/L) is al een grote verbetering voor thee — geen chloor, geen kalk, geen theeschuim. Maar voor veeleisende theeliefhebbers met kwaliteitsbladthee kan een kleine hoeveelheid mineralen de extractie en het smaakprofiel verder verbeteren.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Magnesium (Mg²⁺) speelt een speciale rol bij de extractie van thee-aromatische verbindingen. Onderzoek uit de theesector wijst erop dat een kleine concentratie magnesium (circa 10–30 mg/L) de extractie van bepaalde smaakcomponenten bevordert die verantwoordelijk zijn voor de zoete, ronde kwaliteiten van kwaliteitsgroene en oolong thee.
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                wanneer: 'Thee smaakt dun of vlak met puur osmose water',
                actie: 'Voeg lichte remineralisatie toe via een remineralisatiefilter of voeg een kleine hoeveelheid osmose water gemengd met bronwater (50/50) toe om de TDS naar 80–120 mg/L te brengen.',
              },
              {
                wanneer: 'Je wilt het maximale uit kwaliteitsbladthee halen',
                actie: 'Gebruik osmose water met specifieke remineralisatie naar UKTA-standaard: TDS 100–150 mg/L, licht calcium en magnesium, geen chloor, pH 6,5–7,5.',
              },
              {
                wanneer: 'Goedkopere zakjesthe of robuuste zwarte thee',
                actie: 'Puur osmose water zonder remineralisatie is al een merkbare verbetering. De smaakverbetering bij remineralisatie is voor robuuste teeën minder groot dan de eliminatie van chloor en kalk.',
              },
            ].map(r => (
              <div key={r.wanneer} className="border border-gray-100 rounded-xl p-4 bg-white">
                <p className="font-semibold text-gray-900 mb-1 text-sm">Wanneer: {r.wanneer}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{r.actie}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
            <strong>Praktisch advies:</strong> Begin met puur osmose water voor je thee en beoordeel de smaak. Voor de meeste theedrinkers is dit al een grote stap vooruit ten opzichte van leidingwater — het theeschuim verdwijnt, de kleur is helderder en de smaak is zuiverder. Als je daarna wilt verfijnen voor kwaliteitsthee, is remineralisatie de volgende stap.
          </div>
        </section>

        {/* Praktische testresultaten */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Praktische testresultaten: osmose water vs. leidingwater
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Blind proefresultaten van theeliefhebbers die overstapten van leidingwater naar osmose water voor thee zijn consistent:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { resultaat: 'Geen theeschuim', beschrijving: '100% van gevallen — geen enkel schuimvliesje bij osmose water vs. consistent schuim bij hard leidingwater' },
              { resultaat: 'Helderder kleur', beschrijving: 'De kopje thee heeft een diepere, transparantere kleur zonder het grijs-bruinachtige vet-vlies van kalk-polyfenool-complexen' },
              { resultaat: 'Nuancevoller smaak', beschrijving: 'Met name merkbaar bij groene en witte thee — delicate bloemige en fruitige tonen die in leidingwater gemaskeerd worden door chloor' },
            ].map(r => (
              <div key={r.resultaat} className="border border-[#005F8A]/20 rounded-xl p-4 bg-[#E0F2FE]">
                <p className="font-bold text-[#003F5C] mb-2 text-sm">{r.resultaat}</p>
                <p className="text-xs text-gray-700 leading-relaxed">{r.beschrijving}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            De smaakverbetering is het meest merkbaar bij kwaliteitsbladthee. Bij goedkopere zakjesthe is het effect van chloor en kalk minder dominant omdat de thee-extractie minder subtiel is. Maar ook bij dagelijkse thee is de eliminatie van theeschuim en de helderheid van het kopje een directe, zichtbare verbetering.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#E0F2FE] to-white border border-[#005F8A]/20 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-[#003F5C] mb-3">
            PureAqua 4-in-1: osmose water op de perfecte theetemperatuur
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            De combinatie van een omgekeerde osmose filter en een kokend water kraan is de ideale thee-setup. Osmose filtratie elimineert chloor en kalk; nauwkeurige temperatuurregeling voorkomt bitterheid bij delicate teeën. Alles uit één kraan — geen waterkoker, geen kalkaanslag, geen theeschuim.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Meer over osmose water voor andere dranken en toepassingen lees je op onze{' '}
            <Link href="/osmose-water/koken" className="text-[#005F8A] underline hover:no-underline">
              pagina over koken met osmose water
            </Link>.
          </p>
          <Link
            href="/omgekeerde-osmose/kopen"
            className="inline-block bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
          >
            Bekijk osmose 4-in-1 kranenopties →
          </Link>
        </section>

        <CTABanner context="osmose" />

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/osmose-water/koken', label: 'Koken met osmose water: per toepassing' },
              { href: '/osmose-water/smaak', label: 'Smaak van osmose water: alles uitgelegd' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose filter kopen: systeemvergelijking' },
              { href: '/omgekeerde-osmose/onderhoud', label: 'Osmosefilter onderhoud en filterwissel' },
              { href: '/waterontharder/vergelijken', label: 'Waterontharder vergelijken voor kalk' },
              { href: '/waterhardheid', label: 'Waterhardheid in jouw gemeente' },
            ].map(l => (
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
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over osmose water en thee
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
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

      </div>
    </>
  );
}
