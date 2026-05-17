import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Hoe werkt een sedimentfilter? Mechanische filtratie uitgelegd',
  description:
    'Hoe werkt een sedimentfilter? Mechanische filtratie, micronwaardes uitgelegd (1–50 µm), string-wound vs geplooide vs melt-blown filter, drukval.',
  alternates: { canonical: 'https://waterfilterplatform.nl/sedimentfilter/werking' },
  openGraph: {
    title: 'Hoe werkt een sedimentfilter? Mechanische filtratie uitgelegd',
    description:
      'Micronwaardes, typen sedimentfilters, drukvalberekening, waarom sedimentfilters altijd als eerste in een multi-stage systeem gaan en wanneer vervangen.',
    url: 'https://waterfilterplatform.nl/sedimentfilter/werking',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe werkt een sedimentfilter?',
    answer:
      'Een sedimentfilter werkt via mechanische (fysieke) filtratie zonder chemische interactie. Water stroomt door een poreus filtermedium — string-wound, geplooide polyester, melt-blown polypropyleen of een zak — en deeltjes die groter zijn dan de nominale micronwaarde van het filter worden fysiek tegengehouden. Er vindt geen chemische reactie, adsorptie of ionenuitwisseling plaats. Sedimentfiltratie is puur een groottescheiding van vaste deeltjes van water.',
  },
  {
    question: 'Wat is een micronwaarde en wat zegt het over een sedimentfilter?',
    answer:
      'Een micron (µm) is een duizendste millimeter. De micronwaarde van een sedimentfilter geeft aan hoe groot de kleinste deeltjes zijn die het filter tegenhoudt. Een filter van 5 µm houdt deeltjes groter dan 5 µm tegen. Belangrijke micronwaardes: 1 µm = bacteriën en fijne algen; 5 µm = fijn sediment, schimmels, algen; 10 µm = zand, roest, kalkdeeltjes; 20–50 µm = grof zand, puinresten. Let op: fabrikanten geven doorgaans een nominale micronwaarde op (90% retentie) of een absolute waarde (99,9% retentie) — kies de absolute waarde voor nauwkeurige bescherming.',
  },
  {
    question: 'Wat is het verschil tussen string-wound, geplooide en melt-blown sedimentfilters?',
    answer:
      'String-wound filters bestaan uit op een kern gewikkeld garen dat een variabele dichtheid heeft. De buitenlaag is minder dicht dan de kern. Ze bieden goede deeltjesretentie maar zijn moeilijker schoon te spoelen. Geplooide (pleated) filters hebben een geplooid polyester of polypropyleenoppervlak met een uniform poreuze structuur. Ze hebben een groter filteroppervlak per cartridgegrootte, geven minder drukval en zijn beter te spoelen. Melt-blown filters zijn het meest homogeen: gesmolten polypropyleenvezels worden gespoten op een kern en vormen een filterstructuur met een graded density. Ze bieden de beste filterprestaties maar zijn eenmalig gebruik.',
  },
  {
    question: 'Waarom gaat een sedimentfilter altijd als eerste in een multi-stage filtersysteem?',
    answer:
      'Een sedimentfilter beschermt alle navolgende filters en membranen. Een koolstofblokfilter verstopt snel bij hoge turbiditeit — het sedimentfilter vangt de grove deeltjes op en verlengt de levensduur van het koolstofpatroon. Een omgekeerde osmose-membraan is zeer gevoelig voor turbiditeit en sediment: vuile deeltjes verstoppen het membraan en verminderen de flux. Een sedimentfilter als pre-filter (doorgaans 5 µm) verlengd de levensduur van het RO-membraan van maanden naar meerdere jaren.',
  },
  {
    question: 'Wat is drukval (pressure drop) bij een sedimentfilter?',
    answer:
      'Drukval is het drukverschil tussen de inlaat en uitlaat van een sedimentfilter. Een schoon sedimentfilter heeft een lage drukval (0,2–0,5 bar). Naarmate deeltjes zich ophopen in het filtermedium stijgt de drukval. Een te hoge drukval (>0,8–1 bar) is een signaal dat het filter verstopt raakt en vervangen moet worden. Bij RO-systemen is drukvalmonitoring kritisch: een hoge drukval voor het membraan vermindert de waterproductie sterk.',
  },
  {
    question: 'Wat meten turbiditeit en TSS en waarom zijn ze relevant voor sedimentfilters?',
    answer:
      'Turbiditeit (troebelheid) is de optische maatstaf voor de hoeveelheid zwevende deeltjes in water, gemeten in NTU (Nephelometric Turbidity Units). Drinkwater mag maximaal 1 NTU hebben (WHO-richtlijn). TSS (Total Suspended Solids) is de gewichtsmaatstaf: milligram vaste deeltjes per liter water. Hoog turbiditeitswater (bijv. putwater of bronwater, 10–100 NTU) veroorzaakt snelle verstoppping van sedimentfilters. Meet de turbiditeit van uw water voor u een vervangingsinterval bepaalt.',
  },
  {
    question: 'Hoe vaak moet ik een sedimentfilter vervangen?',
    answer:
      'Het vervangingsinterval hangt af van turbiditeit en waterverbruik. Als vuistregel geldt: bij helder leidingwater elke 6–12 maanden; bij matig troebel water (bronnwater, putwater) elke 3–6 maanden; bij sterk troebel water (hoge TSS) elke 4–8 weken. Gebruik twee indicatoren: de drukval over het filter (vervangen bij >0,8 bar) en de visuele kleur van het filterpatroon (donkerbruin/zwart = vol).',
  },
  {
    question: 'Verwijdert een sedimentfilter ook bacteriën of chemische stoffen?',
    answer:
      'Sedimentfilters van 1 µm houden grote bacteriën (≥1 µm) gedeeltelijk tegen — maar dit is geen betrouwbare desinfectie. Kleine bacteriën (<1 µm) en virussen passeren moeiteloos. Chemische stoffen, nitraten, PFAS en opgeloste metalen zijn moleculair opgelost in water en gaan volledig door een sedimentfilter heen. Een sedimentfilter is uitsluitend een mechanische pre-filter voor zwevende deeltjes, nooit een vervanging voor microbiologische of chemische waterzuivering.',
  },
];

const micronTabel = [
  { micron: '50 µm', verwijdert: 'Grof zand, steengruis, grote deeltjes', toepassing: 'Irrigatie, pre-filter voor grove filtering', kleur: 'gray' },
  { micron: '20 µm', verwijdert: 'Zand, grote algen, vezels', toepassing: 'Pre-filter voor drinkwater in stedelijk gebied', kleur: 'gray' },
  { micron: '10 µm', verwijdert: 'Fijn zand, roest, kalkdeeltjes', toepassing: 'Standaard gemeentelijk leidingwater', kleur: 'amber' },
  { micron: '5 µm', verwijdert: 'Slib, fijn sediment, schimmels, grote algen', toepassing: 'Pre-filter voor koolstof en RO', kleur: 'amber' },
  { micron: '1 µm', verwijdert: 'Fijn slib, grote bacteriën, cystes', toepassing: 'Put/bronwater, pre-filter voor UV en RO', kleur: 'green' },
];

const typesVergelijking = [
  {
    type: 'String-wound',
    structuur: 'Gewikkeld garen',
    drukval: 'Gemiddeld',
    spoelbaar: 'Beperkt',
    prijs: '€3–8',
    highlight: false,
  },
  {
    type: 'Geplooide (pleated)',
    structuur: 'Geplooid polyester/PP',
    drukval: 'Laag',
    spoelbaar: 'Ja',
    prijs: '€5–15',
    highlight: true,
  },
  {
    type: 'Melt-blown (PP)',
    structuur: 'Gespoten polypropyleen',
    drukval: 'Laag tot gemiddeld',
    spoelbaar: 'Nee (eenmalig)',
    prijs: '€2–7',
    highlight: false,
  },
  {
    type: 'Zakfilter (bag)',
    structuur: 'Geweven textielzak',
    drukval: 'Laag',
    spoelbaar: 'Ja (herbruikbaar)',
    prijs: '€10–30',
    highlight: false,
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Sedimentfilter', url: 'https://waterfilterplatform.nl/sedimentfilter' },
  { name: 'Werking', url: 'https://waterfilterplatform.nl/sedimentfilter/werking' },
];

export default function SedimentfilterWerkingPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Hoe werkt een sedimentfilter? Mechanische filtratie uitgelegd',
          description:
            'Mechanische filtratie, micronwaardes, typen sedimentfilters, drukval, voorfilterrol en vervangingsinterval.',
          datePublished: '2026-03-20',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/sedimentfilter/werking',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/sedimentfilter" className="hover:text-[#005F8A]">Sedimentfilter</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Werking</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Hoe werkt een sedimentfilter? Mechanische filtratie uitgelegd
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Een sedimentfilter is de meest basale en tevens onmisbare filterstap in elk
            multi-stage waterfiltersysteem. Het werkt puur mechanisch — geen chemicaliën,
            geen elektriciteit, geen adsorptie. Maar hoe werken micronwaardes precies, wat
            is het verschil tussen filtertypen en waarom moet een sedimentfilter altijd als
            eerste in lijn komen?
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~7 min leestijd</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">

        <QuickAnswer answer="Een sedimentfilter werkt via mechanische filtratie zonder chemische interactie: deeltjes groter dan de micronwaarde worden fysiek tegengehouden. Micronwaardes: 1 µm=bacteriën/fijn slib, 5 µm=sediment/algen, 10 µm=zand/roest, 20–50 µm=grof zand. Sedimentfilter altijd als eerste stap in multi-stage systemen (beschermt koolstof en RO). Vervangen bij drukval >0,8 bar of na 3–12 maanden." />

        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#werkingsprincipe', 'Mechanisch filtratieprincipe'],
              ['#micron', 'Micronwaardes uitgelegd (1–50 µm)'],
              ['#typen', 'String-wound, pleated, melt-blown, bag'],
              ['#drukval', 'Drukval en wat het betekent'],
              ['#multistage', 'Waarom altijd als eerste in lijn?'],
              ['#turbiditeit', 'Turbiditeit vs TSS'],
              ['#vervangen', 'Wanneer vervangen?'],
              ['#faq', 'Veelgestelde vragen'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#003F5C] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Werkingsprincipe */}
        <section id="werkingsprincipe">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Mechanisch filtratieprincipe: puur fysiek, geen chemie</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een sedimentfilter werkt op het eenvoudigste principe in waterfiltratie: water passeert
            een poreuze barrière en vaste deeltjes die groter zijn dan de poriediameter worden
            fysiek tegengehouden. Er is geen chemische reactie, geen adsorptie en geen
            ionenuitwisseling.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dit is het fundamentele verschil met een koolstoffilter (adsorptie via van der
            Waals-krachten) of een RO-membraan (osmotische druk): een sedimentfilter doet
            uitsluitend aan <strong>groottescheiding</strong> — niets meer en niets minder.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Gevolg voor waterchemie:</strong> omdat er geen
            chemische interactie plaatsvindt, wijzigt een sedimentfilter de waterchemie niet.
            Mineralen, ionen, opgeloste stoffen, pH, hardheid — alles blijft volledig onveranderd.
            Alleen vaste zwevende deeltjes worden verwijderd.
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            De prestaties van een sedimentfilter worden primair bepaald door twee parameters:
            de <strong>micronwaarde</strong> (kleinste tegengehouden deeltjesgrootte) en het
            <strong> filteroppervlak</strong> (bepaalt doorstroom en levensduur voordat verstoppping
            optreedt).
          </p>
        </section>

        {/* Micronwaardes */}
        <section id="micron">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Micronwaardes uitgelegd: wat houdt welke waarde tegen?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De micronwaarde (µm) van een sedimentfilter geeft aan hoe klein de deeltjes zijn die
            het filter tegenhoudt. Eén micron is een duizendste millimeter (0,001 mm). Het menselijk
            oog kan deeltjes zien vanaf ongeveer 40 µm — de meeste relevante waterpollutanten zijn
            dus onzichtbaar voor het blote oog.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[500px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Micronwaarde</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Wat wordt verwijderd</th>
                  <th className="py-2.5 px-3 font-semibold text-left hidden sm:table-cell">Typische toepassing</th>
                </tr>
              </thead>
              <tbody>
                {micronTabel.map((r, i) => (
                  <tr key={r.micron} className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-gray-50 border-b border-gray-100'}>
                    <td className="py-2.5 px-3 font-bold text-[#003F5C]">{r.micron}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.verwijdert}</td>
                    <td className="py-2.5 px-3 text-gray-500 text-xs hidden sm:table-cell">{r.toepassing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Waarden zijn nominale retentiewaarden. Absolute retentie is doorgaans 1–2 µm kleiner
            dan nominaal. Overleg met een waterspecialist als u nauwkeurige retentiegaranties nodig heeft.
          </p>
          <div className="mt-5 bg-amber-50 border border-amber-100 rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Nominaal vs absoluut:</strong> een nominale 5 µm
            filter houdt 90–95% van deeltjes groter dan 5 µm tegen. Een absolute 5 µm filter houdt
            minimaal 99,9% tegen. Voor pre-filtratie van RO-membranen en microbiologische toepassingen
            is een absolute micronwaarde vereist.
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            De keuze van micronwaarde hangt sterk af van uw waterbron. Voor meer informatie over
            welke micronwaarde u nodig heeft voor put- of bronwater, zie de pagina{' '}
            <Link href="/sedimentfilter/kopen" className="text-[#005F8A] underline hover:no-underline">
              sedimentfilter kopen
            </Link>.
          </p>
        </section>

        {/* Typen */}
        <section id="typen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Filtertypen: string-wound, pleated, melt-blown en bag</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Niet alle sedimentfilters zijn gelijk. De vier hoofdtypen hebben elk hun eigen
            filtratiestructuur, prestatieniveau en toepassingsgebied.
          </p>
          <div className="space-y-4 mb-6">
            <div className="border border-gray-100 rounded-2xl p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">String-wound filter</h3>
                <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-full shrink-0 ml-2">Klassiek</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                Een string-wound cartridge bestaat uit op een kern gewikkeld garen (polypropylene,
                katoen of glasvezel). De wikkeldichtheid neemt toe van buiten naar binnen: de
                buitenste lagen vangen grof sediment op; de binnenste lagen fijner sediment. Dit
                gradient-effect verhoogt de levensduur van het filter.
              </p>
              <p className="text-sm text-gray-500">
                Voordelen: goede gradient dichtheid, kosteneffectief. Nadelen: moeilijk te spoelen, niet herbruikbaar.
              </p>
            </div>
            <div className="border border-[#005F8A]/20 rounded-2xl p-5 bg-[#E0F2FE]/30">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-[#003F5C]">Geplooide filter (pleated)</h3>
                <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded-full shrink-0 ml-2">Aanbevolen</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                Een geplooide cartridge heeft een geplooid filteroppervlak van polyester,
                polypropylene of cellulose. De plooivorm vergroot het beschikbare filteroppervlak
                sterk (5–10× meer dan een vlakke cartridge bij dezelfde behuizingsgrootte), wat
                resulteert in een lagere drukval en langere levensduur. Geplooide filters zijn
                vaak terug te spoelen en herbruikbaar.
              </p>
              <p className="text-sm text-[#005F8A] font-medium">
                Voordelen: laag drukval, groot oppervlak, herspoelbaar. Nadelen: iets duurder.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">Melt-blown filter (polypropylene)</h3>
                <span className="text-xs font-semibold text-[#005F8A] bg-[#E0F2FE] px-2 py-1 rounded-full shrink-0 ml-2">Meest gebruikt in RO</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                Melt-blown cartridges worden gemaakt door gesmolten polypropyleen te spuiten op
                een roterende kern. Dit vormt een uniform, driedimensionaal vezelnetwerk met een
                gradient dichtheid vergelijkbaar met string-wound. De vezelstructuur geeft
                uitstekende deeltjesretentie en lage drukval bij een homogene structuur.
              </p>
              <p className="text-sm text-gray-500">
                Voordelen: uniforme structuur, weinig interne kanaalvorming, goede retentie. Nadelen: niet herbruikbaar.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">Zakfilter (bag filter)</h3>
                <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-full shrink-0 ml-2">Voor hogere doorstroom</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                Zakfilters zijn zakken van geweven textiel die in een cilindrische behuizing worden
                geplaatst. Ze worden gebruikt voor hogere debietstoepassingen (meer dan 10 m³/uur)
                en zijn herbruikbaar door uitwassen. Voor huishoudelijke toepassingen zijn
                zakfilters minder gangbaar dan cartridgefilters.
              </p>
              <p className="text-sm text-gray-500">
                Voordelen: herbruikbaar, goedkoop per jaar. Nadelen: minder fijne filtratie.
              </p>
            </div>
          </div>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Structuur</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Drukval</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center hidden sm:table-cell">Spoelbaar</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Prijs/st</th>
                </tr>
              </thead>
              <tbody>
                {typesVergelijking.map((r) => (
                  <tr
                    key={r.type}
                    className={r.highlight ? 'bg-[#E0F2FE] font-medium border-b border-[#005F8A]/10' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 text-gray-800">{r.type}</td>
                    <td className="py-2.5 px-3 text-center text-xs text-gray-600">{r.structuur}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.drukval}</td>
                    <td className="py-2.5 px-3 text-center text-xs hidden sm:table-cell">{r.spoelbaar}</td>
                    <td className="py-2.5 px-3 text-right text-xs font-semibold text-[#005F8A]">{r.prijs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Drukval */}
        <section id="drukval">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Drukval: wat is het en waarom is het belangrijk?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Drukval</strong> (pressure drop) is het drukverschil in bar tussen de inlaat
            (upstream) en uitlaat (downstream) van een sedimentfilter. Een schoon filter heeft een
            lage drukval — water stroomt vrij door de poriën. Naarmate deeltjes zich ophopen in
            de poriën van het filtermedium, neemt de weerstand toe en stijgt de drukval.
          </p>
          <div className="space-y-3 mb-5">
            {[
              { druk: '< 0,3 bar', status: 'Normaal', kleur: 'green', uitleg: 'Filter is schoon en presteert optimaal.' },
              { druk: '0,3–0,7 bar', status: 'Acceptabel', kleur: 'amber', uitleg: 'Filter werkt nog goed; controleer visueel op kleur.' },
              { druk: '> 0,8 bar', status: 'Vervang filter', kleur: 'red', uitleg: 'Filter is bijna vol; vervangen om prestatieverlies te voorkomen.' },
            ].map(r => (
              <div key={r.druk} className={`flex gap-3 items-center rounded-xl p-4 border ${
                r.kleur === 'green' ? 'bg-green-50 border-green-100' :
                r.kleur === 'amber' ? 'bg-amber-50 border-amber-100' :
                'bg-red-50 border-red-100'
              }`}>
                <div className={`font-bold text-sm shrink-0 w-24 ${
                  r.kleur === 'green' ? 'text-green-700' :
                  r.kleur === 'amber' ? 'text-amber-700' :
                  'text-red-700'
                }`}>{r.druk}</div>
                <div className={`text-xs font-semibold shrink-0 w-24 ${
                  r.kleur === 'green' ? 'text-green-700' :
                  r.kleur === 'amber' ? 'text-amber-700' :
                  'text-red-700'
                }`}>{r.status}</div>
                <p className="text-sm text-gray-700">{r.uitleg}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Bij RO-systemen is drukvalmonitoring kritisch. Het RO-membraan werkt optimaal bij
            3–6 bar inlaatdruk. Als een verstopt sedimentfilter 1–2 bar absorbeert, daalt de
            effectieve druk op het membraan en daalt de waterproductie sterk. Installeer een
            drukmeter voor en na het sedimentfilter als u een RO-systeem heeft.
          </p>
        </section>

        {/* Multi-stage */}
        <section id="multistage">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom gaat een sedimentfilter altijd als eerste in een multi-stage systeem?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In elk multi-stage waterfiltersysteem — of het nu een eenvoudig twee-staps koolstof
            + UV-systeem is of een complete osmose-installatie — staat het sedimentfilter altijd
            als eerste in de waterstroom. Dit is geen conventie maar een technische noodzaak.
          </p>
          <div className="space-y-3 mb-5">
            <div className="border-l-4 border-amber-400 bg-amber-50 rounded-r-xl px-5 py-4 text-sm text-gray-700">
              <strong className="text-amber-900">Bescherming koolstoffilter:</strong> een
              koolstofblokfilter verstopt snel bij hoog sedimentgehalte. Hoge turbiditeit verkort
              de levensduur van een €15–40 koolstofpatroon van 6 maanden naar slechts weken.
              Een goedkoop sedimentfilter van €3–8 absorbeert al het grof sediment en verlengt
              de levensduur van het duurdere koolstofpatroon tot het volledige aanbevolen interval.
            </div>
            <div className="border-l-4 border-red-400 bg-red-50 rounded-r-xl px-5 py-4 text-sm text-gray-700">
              <strong className="text-red-900">Bescherming RO-membraan:</strong> een RO-membraan
              is extreem gevoelig voor vaste deeltjes. Sediment veroorzaakt fouling (aankorstingen)
              op het membraanoppervlak die de flux verminderen en uiteindelijk het membraan
              onherstelbaar beschadigen. Een €100–200 RO-membraan gaat bij goed voorfiltrateid
              2–5 jaar mee; zonder sedimentfilter soms minder dan 6 maanden.
            </div>
            <div className="border-l-4 border-blue-400 bg-blue-50 rounded-r-xl px-5 py-4 text-sm text-gray-700">
              <strong className="text-blue-900">Bescherming UV-lamp:</strong> troebel water
              vermindert de UV-doorlating drastisch. Een sedimentfilter voor een UV-lamp zorgt
              voor helder water met maximale UV-transmissie, wat garandeert dat de UV-dosis
              voldoende is voor effectieve desinfectie.
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            De standaard volgorde in een multi-stage systeem is: sedimentfilter (5–10 µm) →
            koolstoffilter → [RO-membraan of UV-lamp] → nafilter. Meer over dit onderwerp op de
            pagina{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>.
          </p>
        </section>

        {/* Turbiditeit */}
        <section id="turbiditeit">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Turbiditeit vs TSS: hoe meet u de vervuiling van uw water?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Twee maatstaven zijn relevant voor de sedimentbelasting van uw water:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-2">Turbiditeit (NTU)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Turbiditeit (troebelheid) is een optische meting van de hoeveelheid licht die
                door zwevende deeltjes wordt verstrooid. Gemeten in NTU (Nephelometric Turbidity
                Units). WHO-grenswaarde drinkwater: &lt; 1 NTU. Leidingwater in Nederland: 0,1–0,5 NTU.
                Putwater: 1–50 NTU. Oppervlaktewater: 10–500 NTU.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-2">TSS (mg/L)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Total Suspended Solids is de gewichtsmaatstaf: milligram vaste deeltjes per liter
                water. Meetbaar door filtering en weging. Hoge TSS (&gt;10 mg/L) duidt op sterk troebel
                water met hoge sedimentlast. TSS &lt; 1 mg/L is normaal voor behandeld leidingwater.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Voor het bepalen van het juiste vervangingsinterval van uw sedimentfilter is turbiditeit
            de meest praktische maatstaf. Een turbidimetermeting van uw waterbron kan u precies
            vertellen hoe snel uw sedimentfilter verstopt raakt.
          </p>
        </section>

        {/* Vervangen */}
        <section id="vervangen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer moet u een sedimentfilter vervangen?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Er zijn twee praktische indicatoren voor vervanging:
          </p>
          <div className="space-y-3 mb-5">
            {[
              {
                indicator: 'Drukval over het filter',
                uitleg: 'Meet de waterdruk voor en na het sedimentfilter. Bij een drukval van meer dan 0,8 bar is het filter aan vervanging toe. Bij RO-systemen is dit kritisch — een hoge drukval vermindert de waterproductie van het RO-membraan.',
              },
              {
                indicator: 'Visuele inspectie kleur',
                uitleg: 'Een wit filterpatroon dat bruin, oranje of zwart verkleurt, is een duidelijk teken van verontreiniging. Wanneer meer dan 50% van het filteroppervlak verkleurd is, is vervanging aanbevolen, ook als de drukval nog acceptabel is.',
              },
            ].map(r => (
              <div key={r.indicator} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1 text-sm">{r.indicator}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{r.uitleg}</p>
              </div>
            ))}
          </div>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[420px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Waterbron</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Typisch interval</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { bron: 'Helder leidingwater (< 0,5 NTU)', interval: '6–12 maanden' },
                  { bron: 'Matig troebel leidingwater / stadswater', interval: '3–6 maanden' },
                  { bron: 'Putwater / bronwater (5–20 NTU)', interval: '1–3 maanden' },
                  { bron: 'Sterk troebel putwater (> 20 NTU)', interval: '2–6 weken' },
                ].map((r, i) => (
                  <tr key={r.bron} className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-gray-50 border-b border-gray-100'}>
                    <td className="py-2.5 px-3 text-gray-800">{r.bron}</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-[#005F8A]">{r.interval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Wilt u weten welk sedimentfilter het beste bij uw situatie past? Lees dan de{' '}
            <Link href="/sedimentfilter/kopen" className="text-[#005F8A] underline hover:no-underline">
              sedimentfilter koopgids
            </Link>{' '}
            met advies per waterbron en een vergelijking van 5 modellen.
          </p>
        </section>

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/sedimentfilter',
                title: 'Sedimentfilter overzicht',
                desc: 'Complete gids over sedimentfilters: toepassingen, kosten en wanneer kiezen.',
              },
              {
                href: '/sedimentfilter/kopen',
                title: 'Sedimentfilter kopen',
                desc: 'Koopgids: welke micronwaarde, welk formaat en de beste modellen 2026.',
              },
              {
                href: '/keramisch-filter',
                title: 'Keramisch filter',
                desc: 'Combineer een sedimentfilter als pre-filter met een keramisch filter.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose',
                desc: 'Waarom een sedimentfilter onmisbaar is als pre-filter voor RO-systemen.',
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

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over de werking van een sedimentfilter
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
