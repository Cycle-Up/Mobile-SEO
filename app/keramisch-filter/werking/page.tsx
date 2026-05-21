import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Hoe werkt een keramisch waterfilter? Poriënstructuur en bacteriefiltatie',
  description:
    'Alles over de werking van keramische waterfilters: poriënstructuur (0,2–0,9 µm), dieptefiltration, zilverimpregnatie, wat het wel en niet verwijdert.',
  alternates: { canonical: 'https://waterfilterplatform.nl/keramisch-filter/werking' },
  openGraph: {
    title: 'Hoe werkt een keramisch waterfilter? Poriënstructuur en bacteriefiltatie',
    description:
      'Diatomiet/porselein keramische structuur, poriegroottes (0,2–0,9 µm), zilverimpregnatie, wat wordt geblokkeerd en wat niet — compleet uitgelegd.',
    url: 'https://waterfilterplatform.nl/keramisch-filter/werking',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is het werkingsprincipe van een keramisch waterfilter?',
    answer:
      'Een keramisch waterfilter werkt via dieptefiltratie: water wordt door een poreuze keramische matrix geperst die bestaat uit miljoenen microscopisch kleine kanaaltjes. Deeltjes die groter zijn dan de poriediameter worden fysiek tegengehouden op het oppervlak en in de poriën zelf. Er is geen elektriciteit, geen chemische reactie en geen druk vereist — in zwaartekrachtsystemen drijft de zwaartekracht het water door het filter. Het keramische materiaal is doorgaans vervaardigd uit diatomiet (kiezelgoer) of porseleinen klei gebakken op hoge temperatuur.',
  },
  {
    question: 'Welke poriegroottes gebruikt een keramisch filter en wat houdt het tegen?',
    answer:
      'Keramische filters zijn beschikbaar met poriegroottes van 0,2 tot 0,9 micron. Bacteriën zijn typisch 1–10 micron groot en worden effectief geblokkeerd bij poriën van 0,2–0,5 µm. Protozoa zoals Giardia (8–15 µm) en Cryptosporidium (4–6 µm) worden al bij grotere poriën gestopt. Virussen zijn 25–200 nanometer klein — kleiner dan de meeste keramische poriën — en worden doorgaans NIET effectief tegengehouden. Sediment en troebelheid worden altijd geblokkeerd.',
  },
  {
    question: 'Wat is dieptefiltratie bij een keramisch filter?',
    answer:
      'Dieptefiltratie betekent dat deeltjes niet alleen aan het oppervlak worden tegengehouden maar ook diep in de poreuze structuur van het filtermateriaal worden vastgehouden. Water sijpelt door een labyrint van kronkelende kanalen. Hoe langer dit pad, hoe meer deeltjes worden opgevangen — ook deeltjes die theoretisch iets kleiner zijn dan de nominale poriediameter. Dit maakt keramische filters effectiever dan hun nominale poriemaat doet vermoeden.',
  },
  {
    question: 'Hoe werkt zilverimpregnatie in een keramisch filter?',
    answer:
      'Zilverimpregnatie houdt in dat colloïdaal zilver (Ag) tijdens de productie in de keramische matrix is geïntegreerd. Zilver heeft een bacteriostatisch effect: het remt de celademhaling van bacteriën en verhindert hun reproductie. In een keramisch filter doodt zilver bacteriën die vastgehouden worden in de poriën en voorkomt het biofilmvorming op het filteroppervlak. Zonder zilver kunnen bacteriën die vastzitten in de vochtige poriën zich gaan vermenigvuldigen en uiteindelijk de schone zijde bereiken.',
  },
  {
    question: 'Welke verontreinigingen verwijdert een keramisch filter NIET?',
    answer:
      'Een keramisch filter verwijdert NIET: virussen (25–200 nm, te klein voor de poriën), opgeloste chemische stoffen, nitraten, pesticiden, PFAS, zware metalen (lood, arseen), kalk/hardheid en fluoride. Deze stoffen zijn moleculair of ionisch opgelost in water en passen door de keramische poriën heen. Voor chemische zuivering is omgekeerde osmose vereist; voor virusverwijdering is UV-desinfectie of RO noodzakelijk.',
  },
  {
    question: 'Wanneer heb ik een voorfilterstap (pre-filter) nodig voor mijn keramisch filter?',
    answer:
      'Een voorfilterstap is aanbevolen als het water een hoge troebelheidsgraad heeft, zoals putwater, bronwater of regenwater met veel slib. Hoge troebelheid verstoort de werking van het keramische filter doordat de poriën sneller verstopt raken — dit verkort de levensduur drastisch en verhoogt de reinigingsfrequentie. Een sedimentfilter van 20–50 µm als pre-filter vangt grof slib op en beschermt de keramische kaars. Voor helder leidingwater is een pre-filter doorgaans niet nodig.',
  },
  {
    question: 'Hoe reinig en regenereer ik een keramisch filter?',
    answer:
      'Reinig het filter door de keramische kaars te verwijderen en deze onder koud stromend water voorzichtig schoon te schrobben met een zachte borstel. Schrobben verwijdert de buitenste laag keramisch materiaal inclusief vastgezette deeltjes — dit herstelt de doorstroomsnelheid. Gebruik nooit zeep of detergenten. Steriliseer het filter periodiek door het 10–20 minuten in kokend water te laten liggen. Controleer na elke reiniging op haarscheurtjes — een beschadigd filter is niet meer betrouwbaar.',
  },
  {
    question: 'Wanneer kies ik voor een keramisch filter versus UV of omgekeerde osmose?',
    answer:
      'Kies keramisch als u bacteriën, protozoa en sediment wilt verwijderen zonder elektriciteit — ideaal voor off-grid gebruik, vakantiewoningen, campings en putwater als pre-filter. Kies UV als u ook virussen wilt elimineren of als u leidingwater biologisch wilt desinfecteren. Kies omgekeerde osmose als u ook chemische stoffen, nitraten, kalk, PFAS of zware metalen wilt verwijderen, of als u maximale drinkwaterkwaliteit thuis wil zonder beperkingen van wat er wel en niet doorheen gaat.',
  },
];

const poriesTabel = [
  { contaminant: 'Zand, slib, roest', grootte: '> 50 µm', geblokkeerd: 'Ja', kleur: 'green' },
  { contaminant: 'Protozoa (Giardia)', grootte: '8–15 µm', geblokkeerd: 'Ja', kleur: 'green' },
  { contaminant: 'Cryptosporidium', grootte: '4–6 µm', geblokkeerd: 'Ja', kleur: 'green' },
  { contaminant: 'Bacteriën (E. coli, Salmonella)', grootte: '1–10 µm', geblokkeerd: 'Ja (99,99%)', kleur: 'green' },
  { contaminant: 'Virussen', grootte: '25–200 nm', geblokkeerd: 'Nee', kleur: 'red' },
  { contaminant: 'Opgeloste chemicaliën', grootte: 'Moleculair', geblokkeerd: 'Nee', kleur: 'red' },
  { contaminant: 'Nitraten, pesticiden', grootte: 'Moleculair', geblokkeerd: 'Nee', kleur: 'red' },
  { contaminant: 'Zware metalen (ionisch)', grootte: 'Ionisch', geblokkeerd: 'Nee', kleur: 'red' },
  { contaminant: 'Kalk / hardheid', grootte: 'Ionisch', geblokkeerd: 'Nee', kloor: 'red' },
];

const vergelijkingTabel = [
  {
    methode: 'Keramisch filter',
    bacterien: 'Ja (99,99%)',
    virussen: 'Nee',
    chemisch: 'Nee',
    kalk: 'Nee',
    stroom: 'Nee',
    jaarkosten: '€15–60',
  },
  {
    methode: 'Koolstoffilter',
    bacterien: 'Nee',
    virussen: 'Nee',
    chemisch: 'Deels',
    kalk: 'Nee',
    stroom: 'Nee',
    jaarkosten: '€40–120',
  },
  {
    methode: 'UV-filter',
    bacterien: 'Ja (99,9%)',
    virussen: 'Ja (99,9%)',
    chemisch: 'Nee',
    kalk: 'Nee',
    stroom: 'Ja',
    jaarkosten: '€30–80',
  },
  {
    methode: 'Omgekeerde osmose',
    bacterien: 'Ja (99%+)',
    virussen: 'Ja (99%+)',
    chemisch: 'Ja',
    kalk: 'Ja',
    stroom: 'Ja',
    jaarkosten: '€50–110',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Keramisch filter', url: 'https://waterfilterplatform.nl/keramisch-filter' },
  { name: 'Werking', url: 'https://waterfilterplatform.nl/keramisch-filter/werking' },
];

export default function KeramischFilterWerkingPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Hoe werkt een keramisch waterfilter? Poriënstructuur en bacteriefiltatie',
          description:
            'Diatomiet/porselein keramische structuur, poriegroottes, zilverimpregnatie, dieptefiltratie — wat het verwijdert en wat niet, met vergelijkingstabel.',
          datePublished: '2026-03-15',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/keramisch-filter/werking',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/keramisch-filter" className="hover:text-[#005F8A]">Keramisch filter</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Werking</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Hoe werkt een keramisch waterfilter? Poriënstructuur en bacteriefiltatie
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Een keramisch waterfilter houdt bacteriën, protozoa en sediment fysiek tegen via
            miljoenen microscopisch kleine poriën (0,2–0,9 µm). Maar hoe werkt dieptefiltratie
            precies, wat doet zilverimpregnatie en wat houdt een keramisch filter niét tegen?
            Op deze pagina vindt u het volledige technische antwoord.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~8 min leestijd</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">

        <QuickAnswer answer="Een keramisch waterfilter werkt via dieptefiltratie: poriën van 0,2–0,9 µm blokkeren bacteriën (1–10 µm, 99,99% reductie), protozoa en sediment mechanisch. Zilverimpregnatie voorkomt bacteriegroei in het filter. Virussen (25–200 nm) zijn te klein en worden NIET tegengehouden. Opgeloste stoffen, kalk en chemicaliën passeren ook. Reinigbaar en herbruikbaar. Geen stroom nodig." />

        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#werkingsprincipe', 'Werkingsprincipe: dieptefiltratie'],
              ['#materiaal', 'Diatomiet en porselein: het materiaal'],
              ['#porieen', 'Poriegroottes en wat ze tegenhouden'],
              ['#zilver', 'Zilverimpregnatie en bacteriostatisch effect'],
              ['#beperkingen', 'Wat een keramisch filter NIET verwijdert'],
              ['#reinigen', 'Regeneratie en reiniging'],
              ['#vergelijking', 'Vergelijking: keramisch vs koolstof vs UV vs osmose'],
              ['#toepassingen', 'Typische toepassingen'],
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Werkingsprincipe: dieptefiltratie</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het kernprincipe van een keramisch waterfilter is <strong>mechanische dieptefiltratie</strong>.
            In tegenstelling tot oppervlaktefiltratie — waarbij deeltjes alleen aan de buitenkant van
            een membraan worden tegengehouden — sijpelt water bij dieptefiltratie door de volledige
            dikte van het keramische materiaal. Dit materiaal is doorspekt met een{' '}
            <strong>doolhof van microscopisch kleine kanaaltjes</strong> die in drie dimensies door
            het keramiek kronkelen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wanneer water van de vuile naar de schone zijde stroomt, worden deeltjes op drie manieren
            vastgehouden:
          </p>
          <div className="space-y-3 mb-6">
            <div className="border-l-4 border-[#005F8A] bg-[#E0F2FE] rounded-r-xl px-5 py-4 text-sm text-gray-700">
              <strong className="text-[#003F5C]">1. Grootte-uitsluiting:</strong> deeltjes die
              groter zijn dan de poriediameter worden fysiek geblokkeerd en kunnen niet doorheen.
              Dit is het primaire mechanisme voor bacteriën en protozoa.
            </div>
            <div className="border-l-4 border-[#005F8A] bg-[#E0F2FE] rounded-r-xl px-5 py-4 text-sm text-gray-700">
              <strong className="text-[#003F5C]">2. Adsorptie aan poriewanden:</strong> sommige
              deeltjes die theoretisch door de poriën passen, blijven kleven aan de keramische
              wanden door elektrostatische aantrekkingskrachten en Van der Waals-krachten. Dit maakt
              keramische filters effectiever dan hun nominale poriemaat doet vermoeden.
            </div>
            <div className="border-l-4 border-[#005F8A] bg-[#E0F2FE] rounded-r-xl px-5 py-4 text-sm text-gray-700">
              <strong className="text-[#003F5C]">3. Sedimentatie in poriën:</strong> deeltjes met
              hogere dichtheid bezinken in de poriën terwijl het water langzaam doorstroomt. Dit
              speelt bij langzame zwaartekrachtsfiltratie een grotere rol.
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            De langere pad die water aflegt door de keramische dikte — doorgaans 6–15 mm — verhoogt
            de kans op deeltjesretentie aanzienlijk. Dit verklaart waarom keramische filters bij
            testen vaak 99,99% bacteriereductie behalen, ook al zijn sommige bacteriën theoretisch
            klein genoeg om door de poriën te passen.
          </p>
        </section>

        {/* Materiaal */}
        <section id="materiaal">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Diatomiet en porselein: het materiaal</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De filterprestaties van een keramisch filter worden voor een groot deel bepaald door het
            grondmateriaal. De meest gebruikte materialen zijn diatomiet en porselein (kaolien).
          </p>
          <div className="space-y-4">
            <div className="border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-2">Diatomiet (kiezelgoer)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Diatomiet is een sedimentair gesteente opgebouwd uit fossiele resten van diatomeeën
                — microscopisch kleine eencellige algen met een silica-exoskelet. Diatomeeën hebben
                van nature een zeer complexe en onregelmatige poreuze structuur. Wanneer diatomiet
                wordt samengeperst en gebakken, ontstaat een filtermateriaal met een uitzonderlijk
                hoge poriendensiteit. Doulton en Berkefeld zijn bekende merken die
                diatomiet gebruiken in hun filterkaarsjes.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-2">Porselein / kaolien keramiek</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Porseleinkeramische filters worden vervaardigd uit kaolien (witte klei), kwarts en
                veldspaat, die bij hoge temperaturen (1000–1300°C) worden gebakken. Het resulterende
                materiaal heeft een uniformere poriënstructuur dan diatomiet, wat zorgt voor
                consistentere filterprestaties. Porseleinen filters worden vaker gebruikt in
                druksystemen voor under-sink toepassingen omdat ze bestand zijn tegen hogere
                waterdrukken.
              </p>
            </div>
            <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
              <strong className="text-[#003F5C]">Historische context:</strong> John Doulton
              ontwikkelde in 1827 de eerste keramische filterkaars in opdracht van Queen Victoria
              om tyfus uit het drinkwater te weren. Sindsdien zijn de materialen verfijnd maar het
              basisprincipe is onveranderd — een bewijs van de fundamentele doeltreffendheid van
              mechanische dieptefiltratie.
            </div>
          </div>
        </section>

        {/* Poriëngroottes */}
        <section id="porieen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Poriegroottes (0,2–0,9 µm) en wat ze tegenhouden</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De effectiviteit van een keramisch filter wordt primair bepaald door de poriediameter.
            Een kleinere porie houdt meer tegen — maar vermindert ook de doorstroomsnelheid.
            Onderstaande tabel toont de verhouding tussen poriemaat en de grootte van veelvoorkomende
            waterverontreinigingen.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Contaminant</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Grootte</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Geblokkeerd?</th>
                </tr>
              </thead>
              <tbody>
                {poriesTabel.map((r, i) => (
                  <tr key={r.contaminant} className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-gray-50 border-b border-gray-100'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.contaminant}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600 text-xs">{r.grootte}</td>
                    <td className={`py-2.5 px-3 text-center font-semibold text-sm ${
                      r.geblokkeerd === 'Nee' ? 'text-red-600' : 'text-green-700'
                    }`}>
                      {r.geblokkeerd}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Gebaseerd op typische maten van micro-organismen en deeltjes. Werkelijke retentie hangt
            af van fabrikant, filterdikte en watercondities.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Filters met een poriemaat van <strong>0,2–0,5 µm</strong> bieden de beste bescherming
            tegen bacteriën. Filters met 0,9 µm poriën zijn voldoende voor sediment en protozoa maar
            minder betrouwbaar voor kleine bacteriën. Let op: de meeste fabrikanten geven een{' '}
            <em>nominale</em> poriemaat op — niet een absolute. Een filter van nominaal 0,5 µm houdt
            niet 100% van alle deeltjes groter dan 0,5 µm tegen; de absolute poriemaat is
            doorgaans 1–2 µm kleiner dan de nominale waarde.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Voor een bredere vergelijking van welke filtertechnologie welke verontreinigingen
            verwijdert, bekijk onze{' '}
            <Link href="/waterfilter/soorten" className="text-[#005F8A] underline hover:no-underline">
              overzichtspagina van alle waterfiltersoorten
            </Link>.
          </p>
        </section>

        {/* Zilverimpregnatie */}
        <section id="zilver">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Zilverimpregnatie en het bacteriostatisch effect</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De meeste hoogwaardige keramische filterkaarsjes bevatten <strong>colloïdaal zilver</strong>
            dat tijdens het productieproces in de keramische matrix is geïntegreerd. Zilver heeft van
            oudsher bekende antibacteriële eigenschappen en speelt in keramische filters een cruciale
            ondersteunende rol.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het werkingsmechanisme van zilver op bacteriën is meervoudig:
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex gap-3 items-start">
              <span className="text-[#005F8A] font-bold text-lg shrink-0">1.</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Verstoring van celademhaling</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Zilverionen binden aan enzymen die betrokken zijn bij de cellulaire ademhaling van
                  bacteriën, waardoor de energieproductie van de bacteriecel wordt geblokkeerd.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[#005F8A] font-bold text-lg shrink-0">2.</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Celwandschade</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Zilverionen tasten de integriteit van de bacteriële celwand aan, waardoor de cel
                  inhoud uitlookt en de bacterie sterft. Dit effect treedt op bij bacteriën die
                  in de poriën worden vastgehouden.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[#005F8A] font-bold text-lg shrink-0">3.</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Biofilmpreventie</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Zilver remt de vorming van bacteriële biofilm op het filteroppervlak. Zonder
                  zilver kunnen bacteriën in de natte omgeving van het filter een beschermende
                  biofilmlaag opbouwen die hen beschermt tegen mechanische verwijdering bij reiniging.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Opmerking over zilveruitloging:</strong> de hoeveelheid
            zilver die in het gefilterde water terechtkomt is doorgaans ver onder de WHO-grenswaarde
            van 0,1 mg/L. Bij gecertificeerde producten (NSF/ANSI 42 of 53) is de zilvermigratie
            getest en gedocumenteerd. Kies voor NSF-gecertificeerde filters voor gebruik dat langer
            dan enkele weken duurt.
          </div>
        </section>

        {/* Beperkingen */}
        <section id="beperkingen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat een keramisch filter NIET verwijdert</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het begrijpen van de beperkingen van keramische filters is minstens zo belangrijk als
            weten wat ze wél verwijderen. Keramisch werkt puur mechanisch — er vindt geen chemische
            reactie of ionenuitwisseling plaats. Dit heeft directe gevolgen voor de filterprestaties.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                titel: 'Virussen (25–200 nm)',
                tekst:
                  'Virussen zijn 25 tot 200 nanometer klein — aanzienlijk kleiner dan de poriën van gangbare keramische filters (200–900 nm). Virussen passeren het filter moeiteloos. Voor virusverwijdering combineert u keramisch met een UV-filter of omgekeerde osmose.',
              },
              {
                titel: 'Nitraten en fosfaten',
                tekst:
                  'Anorganische ionen zoals nitraat (NO₃⁻) zijn moleculair opgelost in water en passen volledig door de keramische poriën. Keramiek biedt geen enkele bescherming tegen nitraten, pesticiden of andere opgeloste chemicaliën.',
              },
              {
                titel: 'Zware metalen (ionisch)',
                tekst:
                  'Lood, arseen, chroom en andere zware metalen zijn ionisch opgelost in water. Ze zijn te klein om mechanisch te worden tegengehouden. Alleen omgekeerde osmose of bepaalde ionenwisselaars verwijderen ze effectief.',
              },
              {
                titel: 'Kalk en waterhardheid',
                tekst:
                  'Calcium- en magnesiumionen die de hardheid van water bepalen, passen door de keramische poriën. Een keramisch filter heeft geen effect op waterhardheid of kalkaanslag.',
              },
              {
                titel: 'PFAS en medicijnresten',
                tekst:
                  'Microverontreinigingen zoals PFAS (per- en polyfluoralkylstoffen) en medicijnresten zijn moleculair opgelost en passeren het filter zonder te worden tegengehouden.',
              },
              {
                titel: 'Chloor en geur',
                tekst:
                  'Chloor dat aan water is toegevoegd voor desinfectie blijft aanwezig na keramische filtratie. Voor chloor- en geurverwijdering is een koolstoffilter nodig — vaak gecombineerd met keramisch in multi-stage systemen.',
              },
            ].map(item => (
              <div key={item.titel} className="bg-red-50 border border-red-100 rounded-xl p-4">
                <p className="font-semibold text-red-900 text-sm mb-1">{item.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-5 leading-relaxed">
            Als u ook chemische verontreinigingen wilt aanpakken, is{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>{' '}
            de aangewezen techniek. Omgekeerde osmose combineert een semi-permeabel membraan met
            pre- en nafilters en verwijdert tot 95–99% van alle opgeloste stoffen.
          </p>
        </section>

        {/* Reinigen */}
        <section id="reinigen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Regeneratie en reiniging van een keramisch filter</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een van de grote voordelen van keramische filters is dat ze reinigbaar en regenereerbaar
            zijn. Door regelmatig te schrobben herstelt u de doorstroomsnelheid en verlengt u de
            levensduur aanzienlijk. Volg onderstaande drie stappen:
          </p>
          <div className="space-y-4">
            {[
              {
                nr: '1',
                titel: 'Schrobben onder koud stromend water',
                desc: 'Verwijder de filterkaars en schrobben onder koud stromend water met een schone zachte borstel of sponsje. Schrobben verwijdert de buitenste laag keramisch materiaal inclusief vastgezette deeltjes, biofilm en slib. Gebruik nooit zeep, detergenten of chemische schoonmaakmiddelen — deze beschadigen de keramische matrix en de zilverimpregnatie.',
              },
              {
                nr: '2',
                titel: 'Steriliseren door koken (maandelijks)',
                desc: 'Leg de schone filterkaars 10–20 minuten in kokend water om alle eventuele bacteriën in het filtermateriaal te doden. Dit is vooral belangrijk na lange periodes van stilstand of bij gebruik met biologisch besmet water. Laat het filter volledig afkoelen voor herplaatsing.',
              },
              {
                nr: '3',
                titel: 'Inspecteren op haarscheurtjes',
                desc: 'Houd de keramische kaars na elke reiniging tegen het licht en inspecteer op haarfijne scheurtjes of breuken. Een gebarsten filter biedt geen betrouwbare bescherming meer — water kan via de breuk de schone zijde bereiken zonder te worden gefilterd. Vervang een beschadigde kaars onmiddellijk.',
              },
            ].map(s => (
              <div key={s.nr} className="flex gap-4 border border-gray-100 rounded-xl p-5">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#005F8A] text-white flex items-center justify-center font-bold text-lg">
                  {s.nr}
                </div>
                <div>
                  <p className="font-bold text-[#003F5C] mb-1">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-gray-50 border border-gray-100 rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Levensduur:</strong> een goed onderhouden keramisch
            filter gaat 1 tot 3 jaar mee. Bij zeer troebel putwater of bronwater slijt het filter
            sneller door intensief schrobben. Fabrikanten geven een minimale wanddikte op (doorgaans
            6–8 mm) waaronder het filter vervangen moet worden.
          </div>
        </section>

        {/* Vergelijking */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vergelijking: keramisch vs koolstof vs UV vs osmose</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Elk filtertype heeft een eigen sterkepunten en beperkingen. Onderstaande tabel toont de
            prestaties op de belangrijkste filterparameters voor thuisgebruik.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[580px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Methode</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Bacteriën</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Virussen</th>
                  <th className="py-2.5 px-3 font-semibold text-center hidden sm:table-cell">Chemisch</th>
                  <th className="py-2.5 px-3 font-semibold text-center hidden sm:table-cell">Kalk</th>
                  <th className="py-2.5 px-3 font-semibold text-center hidden md:table-cell">Stroom</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Jaarkosten</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingTabel.map((r, i) => (
                  <tr key={r.methode} className={i === 0 ? 'bg-[#E0F2FE] font-medium' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 text-gray-800">{r.methode}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.bacterien}</td>
                    <td className={`py-2.5 px-3 text-center font-medium ${r.virussen === 'Nee' ? 'text-red-600' : 'text-green-700'}`}>{r.virussen}</td>
                    <td className={`py-2.5 px-3 text-center hidden sm:table-cell ${r.chemisch === 'Nee' ? 'text-red-600' : 'text-gray-700'}`}>{r.chemisch}</td>
                    <td className={`py-2.5 px-3 text-center hidden sm:table-cell ${r.kalk === 'Nee' ? 'text-red-600' : 'text-green-700'}`}>{r.kalk}</td>
                    <td className="py-2.5 px-3 text-center hidden md:table-cell text-gray-700">{r.stroom}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A]">{r.jaarkosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Voor de complete filterwerking inclusief virusverwijdering en chemische zuivering is
            een combinatie van keramisch (bacteriën/sediment) + UV (virussen) of rechtstreeks{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>{' '}
            de meest complete oplossing.
          </p>
        </section>

        {/* Toepassingen */}
        <section id="toepassingen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Typische toepassingen voor een keramisch filter</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                titel: 'Ontwikkelingslanden en reizen',
                tekst: 'Keramische potfilters zijn een bewezen technologie voor veilig drinkwater in gebieden zonder betrouwbaar waternet. Geen stroom vereist, reinigbaar en goedkoop in aanschaf.',
              },
              {
                titel: 'Off-grid en camping',
                tekst: 'Voor cabines, campers en kampeerterreinen biedt een keramische potfilter bacterievrij water uit bronnen, rivieren of regenwater zonder elektriciteit of druk.',
              },
              {
                titel: 'Vakantiewoning en buitenverblijf',
                tekst: 'Na lange stilstand kan een waterleiding bacterieel besmet zijn. Een keramische filter biedt directe bescherming zonder complexe installatie.',
              },
              {
                titel: 'Putwater als pre-filter',
                tekst: 'Keramisch als eerste filterstap voor putwater vangt bacteriën en grove deeltjes op. Combineer met UV of RO voor volledige bescherming. Lees meer op de pagina over het keramisch filter.',
              },
            ].map(item => (
              <div key={item.titel} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-[#003F5C] mb-2 text-sm">{item.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.tekst}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/keramisch-filter',
                title: 'Keramisch filter overzicht',
                desc: 'Complete gids: types, kosten, onderhoud en wanneer keramisch de juiste keuze is.',
              },
              {
                href: '/keramisch-filter/kopen',
                title: 'Keramisch waterfilter kopen',
                desc: 'Koopgids met 5-model vergelijking, prijsoverzicht en kopadvies per situatie.',
              },
              {
                href: '/keramisch-filter/soorten',
                title: 'Soorten keramische filters',
                desc: 'Kaars, pot, disc en samengesteld: alle keramische filtertypes vergeleken.',
              },
              {
                href: '/sedimentfilter',
                title: 'Sedimentfilter',
                desc: 'Pre-filter voor keramisch: hoe sedimentfilters slib en grove deeltjes opvangen.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose',
                desc: 'Volledige waterzuivering voor chemicaliën, kalk, virussen en bacteriën.',
              },
              {
                href: '/waterfilter/soorten',
                title: 'Alle waterfiltersoorten',
                desc: 'Vergelijking van alle filtertechnologieën voor thuisgebruik.',
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
            <Link href="/filtertechnieken/keramisch" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keramische filtertechniek</h3>
              <p className="text-sm text-gray-600">Hoe werkt keramische filtratie als techniek en wanneer is het de juiste keuze?</p>
            </Link>
            <Link href="/keramisch-filter/kopen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keramisch waterfilter kopen</h3>
              <p className="text-sm text-gray-600">Koopgids met 5-model vergelijking, prijsoverzicht en kopadvies per situatie.</p>
            </Link>
            <Link href="/filtertechnieken/ultrafiltratie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ultrafiltratie techniek</h3>
              <p className="text-sm text-gray-600">Hoe werkt ultrafiltratie en hoe verhoudt het zich tot keramische filtratie?</p>
            </Link>
            <Link href="/keramisch-filter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keramisch filter: complete gids</h3>
              <p className="text-sm text-gray-600">Alles over keramische waterfilters: typen, kosten en onderhoud.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over de werking van keramische waterfilters
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
