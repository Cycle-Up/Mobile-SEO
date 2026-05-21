import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Wat is een waterontkalker? Werking, types en verschil met waterontharder',
  description:
    'Alles over waterontkalkers: elektronisch, magnetisch of zoutvrij. Verschil met waterontharder, effectiviteit, kosten en wanneer je welke kiest voor.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontkalker' },
  openGraph: {
    title: 'Waterontkalker — werking, types en verschil met waterontharder',
    description:
      'Alles over waterontkalkers: elektronisch, magnetisch of zoutvrij. Verschil met waterontharder, effectiviteit, kosten en wanneer je welke kiest.',
    url: 'https://waterfilterplatform.nl/waterontkalker',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is het verschil tussen een waterontkalker en waterontharder?',
    answer:
      'Een waterontharder verwijdert calcium en magnesium via ionenwisseling — het water wordt écht zacht. Een waterontkalker verandert de kristalstructuur van kalk zodat het minder snel aan oppervlakken hecht, maar de mineralen blijven in het water. Het water blijft even hard, maar de kalkaanslag wordt verminderd.',
  },
  {
    question: 'Werkt een magnetische waterontkalker echt?',
    answer:
      'Het wetenschappelijk bewijs voor magnetische waterontkalkers is zwak. Onafhankelijke tests, waaronder onderzoek door de WQA (Water Quality Association), vinden wisselende resultaten. Magneten zouden kalkdeeltjes anders oriënteren, maar het effect verdwijnt snel nadat het water de magneet heeft gepasseerd. Magnetische ontkalkers worden niet aanbevolen als primaire oplossing voor ernstige kalkoverlast.',
  },
  {
    question: 'Wat is sjabloonkristallisatie (TAC)?',
    answer:
      'TAC staat voor Template Assisted Crystallization (sjabloonkristallisatie). Het water stroomt langs polymere media waarop kalk microscopisch kleine kristallen vormt. Die kristallen lossen los in het water en hechten niet aan leidingen of apparaten. TAC verwijdert kalk niet, maar voorkomt kalkaanslag. Onderzoek toont aan dat TAC-systemen beter presteren dan magnetische types voor apparaatbescherming.',
  },
  {
    question: 'Hoe installeer je een elektronische waterontkalker?',
    answer:
      'Een elektronische ontkalker wordt om de buitenkant van de waterleiding geklemd — zonder in te kappen. De apparaatkabels wikkelen spiraalvormig om de leiding. Het apparaat geeft zwakke elektromagnetische pulsen af die de kristalstructuur van kalk zouden beïnvloeden. Installatie duurt 15–30 minuten en vereist een stopcontact in de buurt. Er is geen loodgieter nodig.',
  },
  {
    question: 'Verwijdert een waterontkalker ook al bestaande kalkafzetting?',
    answer:
      'Fabrikanten claimen dat sommige elektronische en TAC-ontkalkers bestaande kalkafzetting langzaam oplossen. Dit effect is in de praktijk wisselend en niet wetenschappelijk aangetoond voor alle types. Voor het verwijderen van bestaande kalk in leidingen of apparaten is een mechanische reiniging of een ontkalkmiddel effectiever.',
  },
  {
    question: 'Welk type waterontkalker werkt het beste?',
    answer:
      'TAC-systemen (sjabloonkristallisatie) hebben het sterkste onafhankelijke bewijs voor het voorkomen van kalkaanslag op apparaten, al geldt dit alleen voor apparaatbescherming — niet voor de huid of het schoonmaakgemak. Elektronische ontkalkers scoren matig in onafhankelijke testen. Magnetische types scoren het slechtst. Geen enkel type haalt de effectiviteit van een echte waterontharder voor complete kalkverwijdering.',
  },
  {
    question: 'Is een waterontkalker goed voor de gezondheid?',
    answer:
      'Waterontkalkers zijn veilig. Ze verwijderen geen mineralen, dus calcium en magnesium blijven in het water — dit is juist gunstig voor de gezondheid. NSF/ANSI 61-certificering garandeert dat het gebruikte materiaal geen schadelijke stoffen afgeeft aan het drinkwater. In tegenstelling tot een waterontharder verhoogt een ontkalker het natriumgehalte niet.',
  },
  {
    question: 'Waterontkalker of osmosefilter voor drinkwater?',
    answer:
      'Een waterontkalker verbetert de drinkwaterkwaliteit niet — het filtert niets. Een osmosefilter verwijdert 95–99% van alle opgeloste stoffen, inclusief kalk, nitraten, pesticiden en PFAS. Voor schoon drinkwater is omgekeerde osmose de betere keuze. Voor apparaatbescherming (wasmachine, cv-ketel, boiler) kan een TAC-ontkalker een zoutvrij alternatief zijn voor een waterontharder.',
  },
];

const typesOntkalker = [
  {
    type: 'Magnetisch',
    kosten: '€30–80',
    stroom: 'Geen',
    bewijs: 'Beperkt',
    werking: 'Magneet rond leiding oriënteert kalkdeeltjes anders',
    highlight: false,
  },
  {
    type: 'Elektronisch / inductief',
    kosten: '€80–200',
    stroom: 'Ja (zwakke pulse)',
    bewijs: 'Matig',
    werking: 'Elektromagnetische pulsen via draad om leiding',
    highlight: false,
  },
  {
    type: 'TAC (sjabloonkristallisatie)',
    kosten: '€150–300',
    stroom: 'Geen',
    bewijs: 'Beter (apparaatbescherming)',
    werking: 'Polymere media vormen onschadelijke kristallen',
    highlight: true,
  },
];

const vergelijking = [
  {
    kenmerk: 'Verwijdert Ca/Mg',
    ontharder: 'Ja — water wordt écht zacht',
    ontkalker: 'Nee — mineralen blijven in water',
  },
  {
    kenmerk: 'Waterhardheid na behandeling',
    ontharder: 'Verlaagd (zacht water)',
    ontkalker: 'Onveranderd (hard water)',
  },
  {
    kenmerk: 'Zout nodig',
    ontharder: 'Ja (50–150 kg/jaar)',
    ontkalker: 'Nee',
  },
  {
    kenmerk: 'Kosten aanschaf',
    ontharder: '€500–2.000',
    ontkalker: '€30–300',
  },
  {
    kenmerk: 'Installatie',
    ontharder: 'Loodgieter vereist',
    ontkalker: 'Zelf te plaatsen (meeste types)',
  },
  {
    kenmerk: 'Wetenschappelijk bewijs',
    ontharder: 'Sterk (bewezen effectief)',
    ontkalker: 'Wisselend (zwak tot matig)',
  },
  {
    kenmerk: 'Natriumgehalte drinkwater',
    ontharder: 'Verhoogd',
    ontkalker: 'Onveranderd',
  },
];

export default function WaterOntkalkerPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Wat is een waterontkalker? Werking, types en verschil met waterontharder',
          description:
            'Alles over waterontkalkers: elektronisch, magnetisch of zoutvrij. Verschil met waterontharder, effectiviteit, kosten en wanneer je welke kiest voor.',
          datePublished: '2025-09-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/waterontkalker',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontkalker', url: 'https://waterfilterplatform.nl/waterontkalker' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Waterontkalker</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Wat is een waterontkalker? Werking, types en verschil met waterontharder
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een <strong>waterontkalker</strong> voorkomt kalkaanslag zonder zout en zonder ingreep in het
            leidingwerk. Maar werkt het ook echt? Op deze pagina vergelijken we de drie types
            (magnetisch, elektronisch en TAC), leggen we het verschil met een waterontharder uit en
            vertellen we wanneer een ontkalker volstaat — en wanneer niet.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/waterontharder"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Waterontharder vergelijken →
            </Link>
            <Link
              href="/waterhardheid"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Waterhardheid in mijn gemeente
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <QuickAnswer answer="Een waterontkalker voorkomt kalkaanslag zonder zout door de kristalstructuur van kalk te veranderen (elektronisch/magnetisch) of via sjabloonkristallisatie. Het verwijdert géén mineralen — water blijft even hard. Kosten: €30–300. Effectiviteit wisselend; wetenschappelijk bewijs is zwakker dan bij een echte waterontharder." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">
            Op deze pagina
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#wat-is" className="hover:underline">Wat is een waterontkalker?</a></li>
            <li><a href="#types" className="hover:underline">Types: magnetisch, elektronisch, TAC</a></li>
            <li><a href="#vergelijking" className="hover:underline">Ontkalker vs waterontharder</a></li>
            <li><a href="#effectiviteit" className="hover:underline">Effectiviteit en wetenschappelijk bewijs</a></li>
            <li><a href="#wanneer" className="hover:underline">Wanneer ontkalker, wanneer ontharder?</a></li>
            <li><a href="#installatie" className="hover:underline">Installatie en kosten</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Wat is een waterontkalker */}
        <section id="wat-is">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is een waterontkalker?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een <strong>waterontkalker</strong> is een apparaat dat kalkaanslag probeert te voorkomen door
            de manier waarop kalk (calciumcarbonaat) zich gedraagt in het water te beïnvloeden. In
            tegenstelling tot een{' '}
            <Link href="/waterontharder" className="text-[#005F8A] underline hover:no-underline">
              waterontharder
            </Link>{' '}
            verwijdert een ontkalker calcium en magnesium <em>niet</em> uit het water. Het water blijft
            chemisch even hard — maar de kalkdeeltjes worden zo beïnvloed dat ze minder snel aan
            leidingen, kranen en apparaten hechten.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Waterontkalkers zijn populair omdat ze:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside mb-4">
            <li>Geen zout nodig hebben</li>
            <li>Geen elektriciteitsaansluiting vereisen (behalve elektronische types)</li>
            <li>Zelf te installeren zijn zonder loodgieter</li>
            <li>Goedkoper zijn in aanschaf dan een echte waterontharder</li>
            <li>Het natriumgehalte van het drinkwater niet verhogen</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            De keerzijde: de effectiviteit van waterontkalkers is wetenschappelijk gezien aanzienlijk
            minder goed onderbouwd dan die van klassieke waterontharders. Afhankelijk van het type en de
            waterhardheid in jouw regio kan een ontkalker voldoende zijn — of onvoldoende. Wil je weten
            hoe hard het water bij jou is?{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              Bekijk de waterhardheid per gemeente
            </Link>
            .
          </p>
        </section>

        {/* Types */}
        <section id="types">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Types waterontkalkers: magnetisch, elektronisch en TAC
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Er zijn drie hoofdtypen waterontkalkers op de markt. Ze werken fundamenteel anders en
            presteren ook anders in onafhankelijke tests. Hieronder de vergelijking.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Kosten</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Elektra</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Bewijs</th>
                </tr>
              </thead>
              <tbody>
                {typesOntkalker.map(r => (
                  <tr
                    key={r.type}
                    className={r.highlight ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3">
                      <span className="font-medium">{r.type}</span>
                      <span className="block text-xs text-gray-500 font-normal">{r.werking}</span>
                    </td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.kosten}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.stroom}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.bewijs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-5">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Magnetische waterontkalker</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Een magnetische ontkalker bestaat uit één of twee krachtige permanente magneten die rond
                de waterleiding worden geklemd. De magneet zou de oriëntatie van kalkdeeltjes
                (calcietionen) beïnvloeden, zodat ze minder snel kristalliseren op oppervlakken.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                In de praktijk: het effect houdt maximaal een paar uur aan nadat het water de magneet
                heeft gepasseerd en is in onafhankelijke laboratoriumtests nauwelijks meetbaar.
                Magnetische ontkalkers zijn het goedkoopst maar ook het minst effectief.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Elektronische / inductieve waterontkalker</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Elektronische ontkalkers wikkelen een spiraalvormige draad om de buitenkant van de
                leiding. Een kleine stroomsignaalmodule geeft variabele elektromagnetische pulsen af die
                door de leiding en het water heen dringen. De theorie: de pulsen zouden voorkomen dat
                kalk aan de binnenwand van de leiding hecht.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Onafhankelijk onderzoek toont wisselende resultaten. Sommige studies vinden een
                verminderde kalkvorming op verwarmingselementen; andere vinden geen effect. Het apparaat
                heeft een stopcontact nodig (verbruik: 3–10 W).
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">TAC — sjabloonkristallisatie (beste bewijs)</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                TAC (Template Assisted Crystallization) is de meest wetenschappelijk onderbouwde
                zoutvrije methode. Het water stroomt door een bed van kleine polymere media. Op het
                oppervlak van die media vormt kalk microscopisch kleine, stabiele calcietkristallen die
                loslaten in het water en meespoelen zonder aan leidingen of apparaten te hechten.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Onderzoek gepubliceerd in <em>Water Research</em> en testen door het Water Research
                Foundation tonen aan dat TAC-systemen effectiever zijn dan magnetische en elektronische
                types voor het beschermen van verwarmingselementen en leidingen. TAC-systemen vereisen
                geen elektriciteit en geen zout, maar de media moeten elke 3–5 jaar vervangen worden.
              </p>
            </div>
          </div>
        </section>

        {/* Vergelijking ontkalker vs ontharder */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waterontkalker vs waterontharder — verschil op een rij
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het fundamentele verschil: een waterontharder <em>verwijdert</em> calcium en magnesium. Een
            waterontkalker <em>verandert</em> hoe die mineralen zich gedragen. Hieronder de
            verschillen overzichtelijk weergegeven.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Kenmerk</th>
                  <th className="py-2.5 px-3 font-semibold">Waterontharder</th>
                  <th className="py-2.5 px-3 font-semibold">Waterontkalker</th>
                </tr>
              </thead>
              <tbody>
                {vergelijking.map((r, i) => (
                  <tr
                    key={r.kenmerk}
                    className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.kenmerk}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.ontharder}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.ontkalker}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Meer over de werking van een waterontharder lees je op de pagina{' '}
            <Link href="/waterontharder" className="text-[#005F8A] underline hover:no-underline">
              waterontharder
            </Link>
            . Voor een overzicht van alle filtertypes, zie{' '}
            <Link href="/waterfilter/soorten" className="text-[#005F8A] underline hover:no-underline">
              waterfilter soorten
            </Link>
            .
          </p>
        </section>

        {/* Effectiviteit en wetenschappelijk bewijs */}
        <section id="effectiviteit">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Effectiviteit en wetenschappelijk bewijs
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De markt voor waterontkalkers is gevuld met grote claims maar beperkt onafhankelijk
            onderzoek. Hier is wat de wetenschap daadwerkelijk zegt over de drie types:
          </p>

          <div className="space-y-4">
            <div className="border border-gray-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-orange-500 font-bold text-lg">●</span>
                <p className="font-semibold text-gray-900">Magnetisch — zwak bewijs</p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Meerdere onafhankelijke studies vinden geen statistisch significant effect op
                kalkvorming. De WQA (Water Quality Association) erkent magnetische ontkalkers niet als
                effectieve methode. NSF/ANSI-certificering voor effectiviteitsclaims is niet beschikbaar.
                Alleen NSF/ANSI 61 (materiaalveiligheid) is relevant.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-500 font-bold text-lg">●</span>
                <p className="font-semibold text-gray-900">Elektronisch — matig bewijs</p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Sommige fabrikantgestuurde studies tonen verminderde kalkafzetting op
                verwarmingselementen. Onafhankelijke replicatie is beperkt. Effectiviteit hangt sterk
                af van watertype, leiding­materiaal en doorstroomsnelheid. NSF/ANSI 61 voor
                materiaalveiligheid van toepassing; geen effectiviteitsnorm beschikbaar.
              </p>
            </div>
            <div className="border border-[#005F8A] bg-[#E0F2FE] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-600 font-bold text-lg">●</span>
                <p className="font-semibold text-gray-900">TAC — beter bewijs voor apparaatbescherming</p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Onderzoek van de Water Research Foundation (2011) en studies gepubliceerd in
                peer-reviewed tijdschriften tonen aan dat TAC-systemen de vorming van kalkafzetting op
                verwarmingselementen significant verminderen (tot 88% reductie in sommige condities).
                Belangrijk: dit geldt voor apparaatbescherming, niet voor het verbeteren van
                drinkwaterkwaliteit of het zachter maken van water voor huid en haar.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mt-5">
            <p className="font-semibold text-amber-900 mb-1">Let op: geen NSF-norm voor effectiviteit</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Er bestaat geen NSF/ANSI-norm die de effectiviteit van waterontkalkers certificeert. Wel
              bestaat NSF/ANSI 61 voor materiaalveiligheid — dit certificaat garandeert dat het
              apparaat geen schadelijke stoffen afgeeft aan het drinkwater. Wees kritisch op claims
              die niet door onafhankelijke laboratoria zijn geverifieerd.
            </p>
          </div>
        </section>

        {/* Wanneer volstaat een ontkalker */}
        <section id="wanneer">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer volstaat een ontkalker — en wanneer heb je een ontharder nodig?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De keuze hangt af van je doelstelling, waterhardheid en budget. Hieronder een praktisch
            beslisschema.
          </p>

          <div className="space-y-4">
            <div className="bg-green-50 border border-green-100 rounded-xl p-5">
              <p className="font-bold text-green-900 mb-2">
                Een waterontkalker (TAC) kán volstaan als...
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li>Je water matig hard is (8–15 °dH) en je geen extreme kalkoverlast hebt</li>
                <li>Je vooral apparaten wilt beschermen (cv-ketel, boiler, wasmachine)</li>
                <li>Je geen zout wilt gebruiken of geen loodgieter wilt inschakelen</li>
                <li>Je een huurwoning hebt en de hoofdleiding niet wilt aanpassen</li>
                <li>Je budget voor aanschaf beperkt is (onder €300)</li>
                <li>Je drinkwaterkwaliteit geen prioriteit is (je hebt al een osmosefilter)</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-5">
              <p className="font-bold text-red-900 mb-2">
                Een echte waterontharder is nodig als...
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li>Je water zeer hard is (boven 18–20 °dH) met ernstige kalkoverlast</li>
                <li>Je wil dat de douche, huid en haar echt profiteert van zacht water</li>
                <li>Je vaatwasser en wasmachine al schade vertonen door kalk</li>
                <li>Je minder wasmiddel en shampoo wil verbruiken</li>
                <li>Je een nieuwe cv-ketel hebt en die maximaal wil beschermen</li>
                <li>Je een eigen woning hebt en bereid bent te investeren in een professionele installatie</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 mt-5 leading-relaxed">
            Wil je weten hoe hard het water precies is in jouw gemeente? Bekijk de{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid per gemeente
            </Link>{' '}
            in Nederland. Voor drinkwaterpurificatie is een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde-osmosefilter
            </Link>{' '}
            effectiever dan een ontkalker.
          </p>
        </section>

        {/* Installatie en kosten */}
        <section id="installatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Installatie en kosten</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een groot voordeel van waterontkalkers is dat ze doorgaans zelf te installeren zijn.
            Hieronder een overzicht van wat je kunt verwachten per type.
          </p>

          <div className="space-y-4">
            {[
              {
                type: 'Magnetische ontkalker',
                kosten: '€30–80',
                installatie: 'Klem rond leiding, geen gereedschap. 5 minuten.',
                onderhoud: 'Geen. Verwisseling na 3–7 jaar als magneet zwakker wordt.',
                opmerking: 'Geen stopcontact nodig. Werkt op alle leidingmaterialen.',
              },
              {
                type: 'Elektronische ontkalker',
                kosten: '€80–200',
                installatie: 'Draad spiraalvormig om leiding wikkelen, adapter in stopcontact. 15–30 min.',
                onderhoud: 'Controleer apparaat jaarlijks. Stroomverbruik 3–10 W continu.',
                opmerking: 'Stopcontact in de buurt vereist. Werkt op meeste leidingmaterialen.',
              },
              {
                type: 'TAC-systeem (sjabloonkristallisatie)',
                kosten: '€150–300',
                installatie: 'Inline op de leiding plaatsen — vergelijkbaar met een waterfilter. Loodgieter aanbevolen maar niet verplicht.',
                onderhoud: 'Media vervangen elke 3–5 jaar (€40–80). Geen zout, geen stroom.',
                opmerking: 'Meest effectief. Vereist doorvoer in de leiding (in-line installatie).',
              },
            ].map(r => (
              <div key={r.type} className="border border-gray-100 rounded-xl p-4">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <p className="font-bold text-gray-900">{r.type}</p>
                  <span className="text-sm font-semibold text-[#005F8A]">{r.kosten}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm">
                  <div><span className="text-gray-400">Installatie:</span> <span className="text-gray-700">{r.installatie}</span></div>
                  <div><span className="text-gray-400">Onderhoud:</span> <span className="text-gray-700">{r.onderhoud}</span></div>
                  <div className="sm:col-span-2"><span className="text-gray-400">Let op:</span> <span className="text-gray-700">{r.opmerking}</span></div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 mt-5 leading-relaxed">
            Ter vergelijking: een echte waterontharder (ionenwisselaar) kost €500–2.000 aanschaf plus
            €150–350 installatie door een loodgieter. Daar bovenop komen zoutkosten van €50–150 per jaar.
            Zie voor de volledige kostenvergelijking de pagina{' '}
            <Link href="/waterontharder" className="text-[#005F8A] underline hover:no-underline">
              waterontharder
            </Link>
            .
          </p>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/waterontharder',
                title: 'Waterontharder: werking en kosten',
                desc: 'Wanneer is een echte waterontharder zinvol? Kosten, soorten en installatie.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Hoe hard is het water bij jou in de buurt? Actuele data voor heel Nederland.',
              },
              {
                href: '/waterfilter/soorten',
                title: 'Alle waterfiltersoorten',
                desc: 'Van filterkan tot omgekeerde osmose: overzicht van alle filtermethodes.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose',
                desc: 'De grondigste filtratie voor drinkwater: 95–99% verwijdering van alle stoffen.',
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
            <Link href="/waterontharder" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Waterontharder</p>
              <p className="text-sm text-gray-600">Centrale ontharders voor de hele huisinstallatie: werking, kosten en merken.</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Ionenwisseling uitgelegd</p>
              <p className="text-sm text-gray-600">Hoe ionenwisselaars calcium en magnesium vervangen door natrium of kalium.</p>
            </Link>
            <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Keuzehulp hard water</p>
              <p className="text-sm text-gray-600">Ontkalker, ontharder of osmosefilter: welke oplossing past het beste?</p>
            </Link>
            <Link href="/waterhardheid" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Waterhardheid</p>
              <p className="text-sm text-gray-600">Hardheid per gemeente en wat dit betekent voor uw huishouden en apparaten.</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over waterontkalkers
          </h2>
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
    </>
  );
}
