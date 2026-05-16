import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'UV waterfilter toepassingen: woning, bron, vijver en meer',
  description:
    'UV waterfilter toepassingen in Nederland: bronwater, putwater, regenwater, vakantiewoning, legionellapreventie, vijver en reizigers. Klasse A vs B en NL-regelgeving.',
  alternates: { canonical: 'https://waterfilterplatform.nl/uv-filter/toepassingen' },
  openGraph: {
    title: 'UV waterfilter toepassingen: woning, bron, vijver en meer',
    description:
      'Alle toepassingen van UV-waterfilters uitgelegd: bronwater, regenwater, camping, vakantiewoningen, vijver, legionella en reizen. Met NL-regelgeving en systeemaanbevelingen.',
    url: 'https://waterfilterplatform.nl/uv-filter/toepassingen',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Is een UV-filter verplicht bij gebruik van putwater in Nederland?',
    answer:
      'Er is geen wettelijke verplichting om putwater te behandelen voor eigen gebruik thuis, maar het RIVM en de GGD adviseren putwater altijd te behandelen voordat het wordt gedronken. Putwater valt niet onder de Drinkwaterwet — die geldt alleen voor openbare drinkwaterlevering. De eigenaar is zelf verantwoordelijk voor de microbiologische veiligheid. Een UV-filter (NSF/ANSI 55 Klasse A) gecombineerd met een sediment- en koolstoffilter is de minimale aanbevolen behandeling voor putwater.',
  },
  {
    question: 'Mag ik regenwater gebruiken als drinkwater in Nederland?',
    answer:
      'In Nederland is het gebruik van regenwater als drinkwater wettelijk niet toegestaan via openbare distributie. Voor eigen gebruik thuis is er geen expliciete verbodsbepaling, maar het RIVM adviseert sterk tegen het gebruik van onbehandeld regenwater als drinkwater vanwege besmettingsrisico\'s (bacteriën, chemische depositie, metalen van daken). Voor gebruik als drinkwater is uitgebreide behandeling vereist: sediment → koolstof → osmose → UV. Voor toiletspoeling en bewatering is onbehandeld regenwater in principe toegestaan.',
  },
  {
    question: 'Welk UV-filter heb ik nodig voor een vakantiewoning?',
    answer:
      'Voor een vakantiewoning die meerdere maanden leeg heeft gestaan is Legionella het grootste risico. Spoel bij aankomst alle kranen 5 minuten door. Als de woning een eigen put heeft: installeer een whole-house UV-systeem (NSF/ANSI 55 Klasse A) op de hoofdwaterinlaat. Als de woning op het gemeentelijk net zit: een inline UV-filter (Klasse A of B) als extra zekerheid. Draagbare UV-pennen zijn geen permanente oplossing voor heel-huis desinfectie.',
  },
  {
    question: 'Werkt een UV-filter ook voor een vijver?',
    answer:
      'Ja, maar het gaat om een specifiek type: een UV-clarifier (ook UV-C vijverlamp of UV-sterilisator). Deze vernielen de celwanden van algen die in het vijverwater zweven, waardoor het water helder wordt. Dit is een ander product dan een drinkwater-UV-filter. Een vijver-UV-clarifier filtert ook bepaalde bacteriën en parasieten die schadelijk kunnen zijn voor vissen. De capaciteit (Watt) moet worden afgestemd op het vijvervolume.',
  },
  {
    question: 'Hoe werkt UV-filter bij legionellapreventie?',
    answer:
      'UV-desinfectie is effectief als aanvullende maatregel bij Legionella-preventie. De NSF-aanbevolen UV-dosis voor Legionella pneumophila is circa 5,5 mJ/cm² voor 4-log reductie — aanzienlijk lager dan de algehele norm van 40 mJ/cm². UV elimineert echter Legionella die al door het UV-systeem is gepasseerd. Het werkt niet retroactief op biofilm in de leidingen. Combineer UV altijd met thermische desinfectie (doorspoelen met heet water boven 60°C) voor complete Legionella-beheersing in bestaande leidinginstallaties.',
  },
  {
    question: 'Welk UV-systeem is geschikt voor camping of reizen?',
    answer:
      'Voor camping en reizen zijn draagbare UV-sticks (UV-pennen) de meest praktische optie. Deze batterij- of USB-aangedreven apparaatjes behandelen 0,5 tot 1 liter water in 60–90 seconden bij een dosis van 40+ mJ/cm². Ze inactiveren bacteriën, virussen en Giardia effectief. Beperkingen: ze werken niet op troebel water (water eerst filteren of bezinken laten), lege batterij = geen bescherming, en het te behandelen volume is beperkt. Voor grotere volumes bij camping: draagbare zwerkzwaartekracht-filtereenheden met geïntegreerde UV-stap.',
  },
  {
    question: 'Wat is het verschil tussen UV Klasse A en Klasse B voor mijn toepassing?',
    answer:
      'UV Klasse A (NSF/ANSI 55): vereist voor microbiologisch onzekere bronnen — putwater, bronwater, regenwater, water na een calamiteit. Levert >40 mJ/cm² bij maximaal debiet. UV Klasse B: aanvullende bescherming bovenop al behandeld stadswater. Lagere UV-dosiseis. Niet geschikt als primaire behandeling voor onbehandelde bronnen. Keuzeregel: als je de microbiologische veiligheid van de bron niet met zekerheid kunt garanderen, kies je altijd Klasse A.',
  },
  {
    question: 'Moet ik voor bronwater of putwater ook een osmosefilter gebruiken naast UV?',
    answer:
      'UV behandelt alleen biologische verontreinigingen. Putwater kan ook chemische verontreinigingen bevatten: nitraten (agrarische gebieden), pesticiden, zware metalen en PFAS. Laat putwater altijd analyseren door een gecertificeerd laboratorium voor de aanschaf van een behandelingssysteem. Als uit analyse blijkt dat ook chemische stoffen aanwezig zijn, voeg je een osmosemembraan toe: sedimentfilter → koolstoffilter → osmosemembraan → UV-filter. Dit is het meest complete systeem voor putwater.',
  },
];

type Toepassing = {
  id: string;
  titel: string;
  inleiding: string;
  besmettingen: string[];
  klasse: string;
  aanbevolen: string;
  extra: string;
};

const toepassingen: Toepassing[] = [
  {
    id: 'putwater',
    titel: 'Bronwater en putwater',
    inleiding:
      'Putwater en bronwater worden in Nederland niet door een drinkwaterbedrijf behandeld. De eigenaar is volledig verantwoordelijk voor de waterkwaliteit. In agrarische gebieden — die een groot deel van Nederland beslaan — zijn de risico\'s substantieel.',
    besmettingen: [
      'E. coli en fecale coliformen (landbouwafvloeiing, mestopslag)',
      'Nitraat — boven norm (50 mg/L) in grote delen van Brabant, Limburg en Overijssel',
      'Pesticiden en herbiciden uit akkerbouw',
      'Legionella in stilstaand grondwater',
      'IJzer en mangaan (troebeling, smaak)',
      'Arseen in sommige grondwaterlagen (Groningen, Drenthe)',
    ],
    klasse: 'NSF/ANSI 55 Klasse A vereist',
    aanbevolen: 'Whole-house systeem op de hoofdwaterinlaat: sedimentfilter (grof en fijn) → koolstofblokfilter → osmosemembraan (voor chemische stoffen) → UV-filter (Klasse A)',
    extra: 'Laat putwater jaarlijks analyseren door een gecertificeerd laboratorium. Analyserapport bepaalt of ook osmose noodzakelijk is naast UV.',
  },
  {
    id: 'regenwater',
    titel: 'Regenwater',
    inleiding:
      'Regenwater wordt in Nederland door particulieren gebruikt voor toiletspoeling, bewatering en in sommige gevallen als aanvullende drinkwaterbron. De wettelijke situatie en de microbiologische risico\'s vragen om zorgvuldige afweging.',
    besmettingen: [
      'Bacteriën en virussen (vogel- en dierentoegang op dak)',
      'Atmosferische depositie: fijnstof, stikstofoxiden, sulfaten',
      'Metalen van daken: zink, koper, lood (afhankelijk van dakmateriaal)',
      'PAK\'s (polycyclische aromatische koolwaterstoffen) van bitumendaken',
      'PFAS van regenwater nabij industriële bronnen',
    ],
    klasse: 'NSF/ANSI 55 Klasse A aanbevolen voor drinkwatergebruik',
    aanbevolen: 'Regenwaterput → sedimentfilter (50 micron) → sedimentfilter (5 micron) → koolstofblokfilter → osmosemembraan → UV-filter (Klasse A)',
    extra: 'Voor niet-drinkwatertoepassingen (toilet, tuin) is alleen sedimentfiltratie voldoende. Regenwater als drinkwater: RIVM adviseert sterk dit te vermijden; als je het toch doet, gebruik dan bovenstaand volledig systeem.',
  },
  {
    id: 'vakantiewoning',
    titel: 'Camping en vakantiewoning',
    inleiding:
      'Vakantiewoningen die periodes leeg staan en campings met eigen waterputten of kleine leidingsystemen zijn bijzondere situaties waarbij de microbiologische veiligheid extra aandacht vraagt.',
    besmettingen: [
      'Legionella pneumophila — groeit in stilstaand lauwwarm water (25–50°C)',
      'Biofilm in ongebruikte leidingen',
      'Bacteriële teruggroei na lange leegstand',
      'Mogelijke besmetting via eigen put (zomerhitte verhoogt bacteriologische activiteit)',
    ],
    klasse: 'Klasse A voor eigen put; Klasse B voor gemeentelijk net als extra laag',
    aanbevolen: 'Bij eigen put: whole-house UV (Klasse A) + voorfiltratie. Bij gemeentelijk net: bij aankomst 5 minuten doorspoelen + draagbare UV-pen voor directe zekerheid of inline Klasse A systeem.',
    extra: 'Draagbare UV-sticks (batterijgevoerd) zijn ideaal voor de reiziger: 60–90 seconden per liter, effectief bij helder water. Filtreer troebel water altijd eerst met een keramisch of sedimentfilter.',
  },
  {
    id: 'vijver',
    titel: 'Vijver en aquatische toepassingen',
    inleiding:
      'Een UV-filter voor een vijver is een ander product dan een drinkwater-UV-filter, maar werkt op hetzelfde principe. UV-clarifiers worden geplaatst in het vijvercirculatiesysteem om algenbloei te bestrijden en het water helder en gezond te houden voor vissen.',
    besmettingen: [
      'Eencellige zweefalgen (groen water)',
      'Bacteriën die schadelijk zijn voor vissen',
      'Parasieten en protozoa (Ich/Ichthyophthirius)',
      'Waterschimmels (saprolegnia)',
    ],
    klasse: 'Vijver-UV-clarifier (geen drinkwatercertificering vereist)',
    aanbevolen: 'UV-clarifier op het vijvercirculatiesysteem, na mechanische en biologische filters. Dimensioneer op 2× het vijvervolume per uur. Vervang lamp jaarlijks voor aanvang van het seizoen.',
    extra: 'Vijver-UV-clarifiers zijn NIET geschikt voor drinkwaterdesinfectie. Ze missen de drukbehuizing en UV-dosis garantie van gecertificeerde drinkwaterfilters.',
  },
  {
    id: 'legionella',
    titel: 'Legionellapreventie in woningen en bedrijven',
    inleiding:
      'Legionella pneumophila is een watergebonden bacterie die bij inademing van aerosolen de gevaarlijke Veteranenziekte (Legionellose) kan veroorzaken. UV-desinfectie is een effectieve aanvullende maatregel binnen een breder Legionella-beheerplan.',
    besmettingen: [
      'Legionella pneumophila in stilstaand lauwwarm water (25–50°C)',
      'Biofilm in leidingen, doucheknoppen en regendouches',
      'Koeltorens en hogedruksproeiers in bedrijfsomgevingen',
    ],
    klasse: 'Klasse A aanbevolen; in combinatie met thermische beheersing',
    aanbevolen: 'UV-filter op de koudwaterinlaat van de woning + thermische desinfectie (>60°C in boiler, regelmatige doorspoelingen). In risicogebouwen: gecertificeerd Legionella-beheersplan conform NEN 8025.',
    extra: 'UV elimineert Legionella die door het systeem stroomt, maar werkt niet op biofilm al aanwezig in de leidingen. Combineer UV altijd met thermische maatregelen en regelmatige inspectie bij leidinginstallaties ouder dan 15 jaar.',
  },
  {
    id: 'reizen',
    titel: 'Reizen naar ontwikkelingslanden',
    inleiding:
      'Bij reizen naar gebieden met onbetrouwbare drinkwatervoorziening biedt UV-desinfectie snelle en effectieve bescherming zonder gebruik van chemicaliën zoals jodiumtabletten of bleekwater.',
    besmettingen: [
      'Reizigersdiarree (E. coli, Campylobacter)',
      'Tyfus (Salmonella typhi)',
      'Hepatitis A',
      'Giardia lamblia en Cryptosporidium',
      'Cholera (Vibrio cholerae)',
    ],
    klasse: 'Draagbare UV-pen: 40+ mJ/cm² aanbevolen',
    aanbevolen: 'Draagbare UV-stick (batterij of USB-C) voor individueel gebruik: 0,5–1 L per behandeling in 60–90 seconden. Combineer met mechanische filtratie (Sawyer, LifeStraw of keramisch filter) bij troebel water.',
    extra: 'UV werkt niet op chemisch verontreinigd water (pesticiden, metalen). In industrieel vervuilde gebieden is een keramisch of osmosefilter als eerste stap noodzakelijk. Controleer of je UV-pen ook effectief is bij lagere temperaturen (koud water vermindert UV-transmissie iets).',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'UV-filter', url: 'https://waterfilterplatform.nl/uv-filter' },
  { name: 'Toepassingen', url: 'https://waterfilterplatform.nl/uv-filter/toepassingen' },
];

export default function UvFilterToepassingenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'UV waterfilter toepassingen: woning, bron, vijver en meer',
          description:
            'UV waterfilter toepassingen in Nederland: bronwater, putwater, regenwater, vakantiewoning, legionellapreventie, vijver en reizigers. Klasse A vs B en NL-regelgeving.',
          datePublished: '2026-03-10',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/uv-filter/toepassingen',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/uv-filter" className="hover:text-[#005F8A]">UV-filter</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Toepassingen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            UV waterfilter toepassingen: woning, bron, vijver en meer
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Een UV-waterfilter is veelzijdig: van putwater op het platteland tot legionellapreventie
            in een appartementencomplex, van een vijver in de tuin tot drinkwater bij avontuurlijke
            reizen. Elke toepassing heeft eigen besmettingsrisico&apos;s, Nederlandse regelgeving en
            een aanbevolen systeem. Deze pagina behandelt alle zes.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~10 min leestijd</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">

        <QuickAnswer answer="UV-waterfilters worden gebruikt bij putwater en bronwater (Klasse A, whole-house), regenwater (Klasse A + osmose voor drinkwater), vakantiewoningen (Legionella-risico), vijver (UV-clarifier voor algbestrijding), legionellapreventie en reizen (draagbare UV-pen). NL-regelgeving: putwater valt buiten de Drinkwaterwet; eigenaar is zelf verantwoordelijk." />

        {/* Inhoudsopgave */}
        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            {toepassingen.map(t => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">{t.titel}</a>
              </li>
            ))}
            <li><a href="#klasse" className="hover:underline">Klasse A vs B per toepassing</a></li>
            <li><a href="#regelgeving" className="hover:underline">NL-regelgeving niet-leidingwater</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </nav>

        {/* Inleiding */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer gebruik je een UV-filter?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Nederland voldoet gemeentelijk leidingwater aan strenge microbiologische normen van
            het Drinkwaterbesluit. Een UV-filter is bij stadswater dan ook niet standaard vereist —
            maar er zijn zes situaties waarbij UV-desinfectie zinvol of zelfs noodzakelijk is.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wil je eerst begrijpen hoe een UV-filter technisch werkt? Lees onze pagina over{' '}
            <Link href="/uv-filter/werking" className="text-[#005F8A] underline hover:no-underline">
              UV-waterfilter werking
            </Link>{' '}
            voor uitleg over UV-C golflengte, DNA-schade en log-reductie. Op de pagina{' '}
            <Link href="/uv-filter/kopen" className="text-[#005F8A] underline hover:no-underline">
              UV-filter kopen
            </Link>{' '}
            vind je de koopgids met vergelijkingstabel.
          </p>
        </section>

        {/* 6 toepassingen */}
        {toepassingen.map((toep, i) => (
          <section key={toep.id} id={toep.id}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-[#003F5C] text-white font-bold flex items-center justify-center shrink-0 text-lg">
                {i + 1}
              </span>
              <h2 className="text-2xl font-bold text-[#003F5C]">{toep.titel}</h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">{toep.inleiding}</p>

            <div className="mb-4">
              <p className="font-semibold text-gray-800 mb-2 text-sm">Typische besmettingsrisico&apos;s:</p>
              <ul className="space-y-1">
                {toep.besmettingen.map(b => (
                  <li key={b} className="flex gap-2 items-start text-sm text-gray-700">
                    <span className="text-red-500 shrink-0 font-bold mt-0.5">!</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#E0F2FE] border border-[#005F8A]/20 rounded-xl p-4">
                <p className="font-semibold text-[#003F5C] mb-1 text-sm">UV-klasse vereist</p>
                <p className="text-sm text-gray-700">{toep.klasse}</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1 text-sm">Aanbevolen systeem</p>
                <p className="text-sm text-gray-700">{toep.aanbevolen}</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-gray-700">
              <strong className="text-amber-900">Let op:</strong> {toep.extra}
            </div>
          </section>
        ))}

        {/* Klasse A vs B overzicht */}
        <section id="klasse">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Klasse A vs Klasse B: snel overzicht per toepassing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Onderstaande tabel geeft een snel overzicht van welke UV-klasse per toepassing
            van toepassing is.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Toepassing</th>
                  <th className="text-center px-3 py-3 font-semibold">UV Klasse A</th>
                  <th className="text-center px-3 py-3 font-semibold">UV Klasse B</th>
                  <th className="text-left px-3 py-3 font-semibold">Aanvullend nodig</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { toep: 'Putwater / bronwater', a: 'Verplicht', b: 'Onvoldoende', extra: 'Sediment + koolstof + evt. osmose' },
                  { toep: 'Regenwater (drinkwater)', a: 'Vereist', b: 'Onvoldoende', extra: 'Sediment + koolstof + osmose' },
                  { toep: 'Vakantiewoning (eigen put)', a: 'Vereist', b: 'Onvoldoende', extra: 'Sediment + koolstof' },
                  { toep: 'Stadswater extra zekerheid', a: 'Optioneel', b: 'Voldoende', extra: 'Koolstoffilter voor chloor' },
                  { toep: 'Legionellapreventie stadswater', a: 'Aanbevolen', b: 'Voldoende', extra: 'Thermische maatregelen' },
                  { toep: 'Vijver (UV-clarifier)', a: 'n.v.t.', b: 'n.v.t.', extra: 'Mechanische + biologische vijverfilter' },
                  { toep: 'Reizen / camping', a: 'Draagbare pen', b: 'n.v.t.', extra: 'Sediment- of keramisch filter bij troebel' },
                ].map((row, i) => (
                  <tr key={row.toep} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2.5 font-medium text-gray-900">{row.toep}</td>
                    <td className={`px-3 py-2.5 text-center text-sm font-medium ${row.a === 'n.v.t.' ? 'text-gray-400' : row.a.includes('Verplicht') || row.a === 'Vereist' ? 'text-green-700' : 'text-[#005F8A]'}`}>
                      {row.a}
                    </td>
                    <td className={`px-3 py-2.5 text-center text-sm font-medium ${row.b === 'n.v.t.' ? 'text-gray-400' : row.b === 'Onvoldoende' ? 'text-red-600' : 'text-[#005F8A]'}`}>
                      {row.b}
                    </td>
                    <td className="px-3 py-2.5 text-sm text-gray-600">{row.extra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* NL-regelgeving */}
        <section id="regelgeving">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Nederlandse regelgeving voor niet-leidingwater
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De <strong>Drinkwaterwet</strong> regelt de kwaliteitseisen en levering van drinkwater via
            het openbare net. Putwater, bronwater en regenwater vallen buiten het bereik van deze wet.
            Dit heeft praktische gevolgen:
          </p>
          <div className="space-y-4">
            <div className="border border-gray-100 rounded-xl p-5">
              <p className="font-semibold text-gray-900 mb-2">Putwater en privébronnnen</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Eigenaren van een privéput zijn wettelijk niet verplicht het water te behandelen voor
                eigen gebruik. De Wet bodembescherming en de Waterwet regelen de bescherming van
                grondwater als bron, maar niet de zuivering bij de eindgebruiker. Het RIVM en de
                regionale GGD adviseren echter sterk om putwater te laten testen en te behandelen
                voordat het als drinkwater wordt gebruikt. In Brabant, Limburg en andere intensief
                bebouwde agrarische provincies is de kans op nitraat- of pesticidebesmetting
                aanzienlijk.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <p className="font-semibold text-gray-900 mb-2">Regenwater</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Het gebruik van regenwater voor toiletspoeling, waswagenbewatering en tuinirrigatie
                is in Nederland wettelijk toegestaan, mits er geen kruisverbindingen zijn met het
                drinkwaternet. Gebruik als drinkwater is wettelijk niet via openbare systemen
                toegestaan. Voor particulieren thuis is er geen expliciete verbodsbepaling, maar het
                RIVM adviseert dit sterk te vermijden. Behandeld regenwater (via het complete
                zuiveringssysteem) valt in een grijs gebied.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <p className="font-semibold text-gray-900 mb-2">Legionella in collectieve installaties</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Voor collectieve drinkwaterinstallaties (appartementencomplexen, hotels, zorginstellingen
                met meer dan 2 wooneenheden) geldt de <strong>Legionellabeheersnorm NEN 8025</strong> en
                de verplichting tot een Legionella-risicoanalyse en -beheersplan. UV-desinfectie kan
                onderdeel zijn van dit plan maar vervangt de wettelijk vereiste thermische beheersing
                niet. Schakel een gecertificeerd Legionella-adviesbureau in voor collectieve installaties.
              </p>
            </div>
          </div>
        </section>

        {/* Combinatiesystemen per toepassing */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Combinatiesystemen per toepassing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            UV is zelden de enige filter die je nodig hebt. Hier is een samenvatting van de
            aanbevolen filtercombinaties per toepassing, van eenvoudig naar uitgebreid.
          </p>
          <div className="space-y-3">
            {[
              {
                situatie: 'Stadswater, extra zekerheid',
                systeem: 'Koolstoffilter → UV Klasse B',
                kosten: '€130–280 aanschaf + €60–100/jr',
              },
              {
                situatie: 'Vakantiewoning op gemeentelijk net',
                systeem: 'Sedimentfilter → Koolstoffilter → UV Klasse A',
                kosten: '€180–350 aanschaf + €70–120/jr',
              },
              {
                situatie: 'Putwater (geen chemische verontreiniging)',
                systeem: 'Sedimentfilter (grof) → Sedimentfilter (fijn) → Koolstoffilter → UV Klasse A',
                kosten: '€250–500 aanschaf + €80–140/jr',
              },
              {
                situatie: 'Putwater (met chemische verontreiniging)',
                systeem: 'Sedimentfilter → Koolstoffilter → Osmosemembraan → UV Klasse A',
                kosten: '€400–800 aanschaf + €110–180/jr',
              },
              {
                situatie: 'Regenwater als drinkwater',
                systeem: 'Sedimentfilter (50μ) → Sedimentfilter (5μ) → Koolstoffilter → Osmosemembraan → UV Klasse A',
                kosten: '€450–900 aanschaf + €120–200/jr',
              },
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-4">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <p className="font-semibold text-gray-900 text-sm">{item.situatie}</p>
                  <span className="text-xs bg-[#E0F2FE] text-[#005F8A] px-2 py-0.5 rounded-full shrink-0 font-medium">{item.kosten}</span>
                </div>
                <p className="text-sm text-gray-600 font-mono bg-gray-50 rounded px-3 py-2">
                  {item.systeem}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Gerelateerde links */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/uv-filter', title: 'UV-filter overzicht', desc: 'Complete gids over UV-waterfilters: werking, types, onderhoud en kosten.' },
              { href: '/uv-filter/werking', title: 'UV-filter werking uitgelegd', desc: 'UV-C golflengte 254 nm, DNA-schade en log-reductie in detail.' },
              { href: '/uv-filter/kopen', title: 'UV-waterfilter kopen', desc: 'Koopgids met vergelijkingstabel van 6 modellen op debiet, dosis en prijs.' },
              { href: '/omgekeerde-osmose', title: 'Omgekeerde osmose', desc: 'Voor chemische verontreinigingen bij putwater: osmose als aanvulling op UV.' },
              { href: '/waterfilter/welk-filter', title: 'Welk waterfilter heb ik nodig?', desc: 'Stap-voor-stap keuzehulp voor de juiste filtercombinatie.' },
              { href: '/waterfilter/soorten', title: 'Waterfilter soorten', desc: 'Overzicht van alle filtertechnieken: UV, osmose, koolstof, keramisch.' },
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

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen: UV-filter toepassingen
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
