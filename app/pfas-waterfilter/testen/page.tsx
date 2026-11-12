import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { AuthorBox } from '@/components/AuthorBox';
import { PureFilterCTA } from '@/components/PureFilterCTA';
import { PUREFILTER } from '@/lib/purefilter.mjs';
import { FOUR_IN_ONE, THREE_WAY } from '@/lib/kranen.mjs';
import { COUNTERTOP } from '@/lib/countertop.mjs';

const PAGE_TITLE = 'PFAS water testen: tester, thuistest of labtest?';
const PAGE_URL = 'https://waterfilterplatform.nl/pfas-waterfilter/testen';
// Max 160 tekens.
const PAGE_DESCRIPTION =
  'Een PFAS water tester voor thuis geeft hooguit een grove indicatie. Zo test je water op PFAS wel betrouwbaar: via je waterbedrijf of een labtest.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: 'article',
    locale: 'nl_NL',
  },
};

// Zichtbare FAQ en FAQPage-JSON-LD gebruiken exact dezelfde tekst.
const faqItems = [
  {
    question: 'Bestaat er een betrouwbare PFAS water tester voor thuis?',
    answer:
      'Voor zover wij weten niet. PFAS zitten in drinkwater in nanogrammen per liter: de wettelijke norm is 100 nanogram per liter voor de som van 20 PFAS en de RIVM-advieswaarde is 4,4 nanogram PFOA-equivalenten per liter. Zulke lage concentraties meet je alleen betrouwbaar met laboratoriumapparatuur (meestal LC-MS/MS). Een strip- of kleurtest die je zelf afleest geeft hooguit een grove indicatie bij sterk verhoogde waarden. Veel producten die als PFAS-testkit verkocht worden, zijn in feite een monsterpakket dat je naar een lab opstuurt; dat is dan gewoon een labtest.',
  },
  {
    question: 'Wat kost een PFAS-test van je water?',
    answer:
      'Dat hangt af van het laboratorium en van het aantal PFAS dat je laat meten. Wij noemen bewust geen bedrag, omdat we geen actuele en controleerbare prijslijst hebben. Vraag vooraf een offerte en vraag welke PFAS het lab meet. Wil je alleen weten wat er in je kraanwater zit, dan zijn de gegevens van je drinkwaterbedrijf gratis.',
  },
  {
    question: 'Hoe neem ik een watermonster voor een PFAS-test?',
    answer:
      'Volg precies de instructies van het laboratorium. Gebruik alleen het flesje dat het lab meestuurt, omdat sommige kunststoffen en materialen zelf PFAS kunnen bevatten. Labs vragen meestal om de kraan eerst even te laten doorlopen, het flesje goed af te sluiten, het monster koel te bewaren en het snel te versturen.',
  },
  {
    question: 'Controleren drinkwaterbedrijven al op PFAS?',
    answer:
      'Ja. Drinkwaterbedrijven meten PFAS en publiceren de waarden per leveringsgebied. Sinds januari 2026 geldt de Europese norm van 100 nanogram per liter voor de som van 20 PFAS, en Nederlands kraanwater voldoet daaraan. Op een deel van de plekken ligt de waarde wel boven de strengere RIVM-advieswaarde van 4,4 nanogram PFOA-equivalenten per liter, die geen wettelijke norm is.',
  },
  {
    question: 'Wanneer is een eigen PFAS-test zinvol?',
    answer:
      'Vooral in vier situaties: je drinkt water uit een eigen put of bron, dat niet door een drinkwaterbedrijf wordt gecontroleerd; je woont dicht bij een bekende PFAS-bron en wilt meer zekerheid; je wilt controleren wat een geplaatst filter doet; of er is in de buurt een incident geweest, bijvoorbeeld met blusschuim. Voor gewoon kraanwater zijn de gegevens van je drinkwaterbedrijf meestal de beste bron.',
  },
  {
    question: 'Wat doe ik als er veel PFAS in mijn water zit?',
    answer:
      'Gaat het om water uit een eigen put, drink het dan niet en overleg met de GGD of je gemeente. Gaat het om kraanwater, neem dan contact op met je drinkwaterbedrijf: dat moet aan de wettelijke norm voldoen en kan de uitslag duiden. Wil je zelf extra marge, dan vermindert een waterfilter het deel van de PFAS dat via drinkwater binnenkomt. Omgekeerde osmose doet dat het sterkst.',
  },
  {
    question: 'Wat is het verschil tussen de som van 20 PFAS en PFOA-equivalenten?',
    answer:
      'De Europese norm telt de concentraties van 20 PFAS gewoon bij elkaar op. De RIVM-advieswaarde werkt met PFOA-equivalenten: elke stof wordt gewogen naar hoe giftig hij is ten opzichte van PFOA. Daardoor kan water ruim onder de wettelijke norm blijven en toch boven de advieswaarde uitkomen. Vraag het lab of het ook PFOA-equivalenten berekent, anders kun je de uitslag niet direct naast de RIVM-advieswaarde leggen.',
  },
  {
    question: 'Meet een TDS-meter PFAS?',
    answer:
      'Nee. Een TDS-meter meet de totale hoeveelheid opgeloste zouten en mineralen. PFAS zitten in zulke kleine hoeveelheden in water dat ze daarin niet zichtbaar zijn. Bij een osmosesysteem zegt een stijgende TDS-waarde wel iets over slijtage van het membraan, maar niet hoeveel PFAS er nog door komt.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'PFAS waterfilter', url: 'https://waterfilterplatform.nl/pfas-waterfilter' },
  { name: 'Testen', url: PAGE_URL },
];

const testMethoden = [
  {
    methode: 'Gegevens van je drinkwaterbedrijf',
    watJeWeet: 'Gemeten PFAS-waarden van het kraanwater in jouw leveringsgebied',
    betrouwbaar: 'Ja, officiële metingen',
    kosten: 'Gratis',
  },
  {
    methode: 'Labtest (monster naar een geaccrediteerd lab)',
    watJeWeet: 'Concentratie per PFAS in jouw eigen watermonster, in nanogram per liter',
    betrouwbaar: 'Ja, als het lab voor PFAS in water geaccrediteerd is',
    kosten: 'Vraag een offerte; hangt af van het aantal stoffen',
  },
  {
    methode: 'PFAS-testkit om op te sturen',
    watJeWeet: 'Hetzelfde als een labtest: de kit is een monsterpakket voor een lab',
    betrouwbaar: 'Zo betrouwbaar als het lab erachter',
    kosten: 'Vraag na wat het lab meet en wat het kost',
  },
  {
    methode: 'Thuistest die je zelf afleest (strip of kleur)',
    watJeWeet: 'Hooguit een grove indicatie bij sterk verhoogde waarden',
    betrouwbaar: 'Nee, niet om aan de norm of advieswaarde te toetsen',
    kosten: 'Niet zinvol voor drinkwater, volgens ons',
  },
  {
    methode: 'TDS-meter',
    watJeWeet: 'Totaal opgeloste zouten en mineralen, geen PFAS',
    betrouwbaar: 'Nee, meet geen PFAS',
    kosten: 'Niet van toepassing',
  },
];

const stappen = [
  {
    stap: '1',
    titel: 'Kijk eerst wat je drinkwaterbedrijf meet',
    tekst:
      'Gebruik je kraanwater, zoek dan de waterkwaliteitsgegevens van je drinkwaterbedrijf op (vaak te vinden met je postcode). Daar staan de gemeten PFAS-waarden. Op onze PFAS-kaart van Nederland zie je hoe het in jouw regio zit.',
  },
  {
    stap: '2',
    titel: 'Kies een geaccrediteerd laboratorium',
    tekst:
      'Wil je je eigen water laten meten, kies dan een lab dat voor PFAS in water geaccrediteerd is volgens ISO/IEC 17025. In Nederland controleer je dat in het register van de Raad voor Accreditatie (RvA). Vraag welke PFAS het lab meet: minimaal de 20 uit de Europese norm, en bij voorkeur ook of het PFOA-equivalenten berekent.',
  },
  {
    stap: '3',
    titel: 'Neem het monster precies volgens de instructies',
    tekst:
      'Gebruik het flesje van het lab, niet je eigen fles. Volg de instructies over doorspoelen, vullen, koel bewaren en verzenden. Een slordig genomen monster kan de uitslag beïnvloeden.',
  },
  {
    stap: '4',
    titel: 'Lees de uitslag in nanogram per liter',
    tekst:
      'Tel de 20 PFAS uit de Europese lijst op en vergelijk de som met de wettelijke norm van 100 nanogram per liter. Wil je de uitslag naast de RIVM-advieswaarde van 4,4 nanogram PFOA-equivalenten per liter leggen, dan heb je de gewogen som nodig.',
  },
  {
    stap: '5',
    titel: 'Bepaal je vervolgstap',
    tekst:
      'Bij putwater met verhoogde waarden: drink het niet en overleg met de GGD of je gemeente. Bij kraanwater: neem bij twijfel contact op met je drinkwaterbedrijf. Wil je zelf extra marge, kijk dan welk waterfilter bij je situatie past.',
  },
];

const situaties = [
  {
    situatie: 'Je drinkt water uit een eigen put of bron',
    uitleg:
      'Een eigen put valt niet onder de controle van een drinkwaterbedrijf. Wie dat water drinkt, weet zonder test niet wat erin zit.',
    urgentie: 'Hoog',
  },
  {
    situatie: 'Je woont dicht bij een bekende PFAS-bron',
    uitleg:
      'Bijvoorbeeld rond Chemours in Dordrecht of bij plekken waar PFAS-houdend blusschuim is gebruikt. Kraanwater blijft gecontroleerd, maar grond- en putwater kan plaatselijk hoger zijn.',
    urgentie: 'Hoog bij putwater',
  },
  {
    situatie: 'Je wilt weten wat je filter doet',
    uitleg:
      'Laat een monster nemen van ongefilterd en van gefilterd water en vergelijk de twee. Labresultaten van fabrikanten gelden meestal voor een nieuw filter; een eigen test laat zien hoe het bij jou zit.',
    urgentie: 'Zinvol',
  },
  {
    situatie: 'Er is een incident geweest in de buurt',
    uitleg:
      'Bijvoorbeeld een brand waarbij blusschuim is gebruikt, of een bekende bodemverontreiniging. Volg dan ook de adviezen van je gemeente.',
    urgentie: 'Situationeel',
  },
];

export default function PfasWaterfilterTestenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          datePublished: '2026-04-25',
          dateModified: '2026-11-10',
          url: PAGE_URL,
          sources: ['RIVM', 'EU-drinkwaterrichtlijn 2020/2184', 'Raad voor Accreditatie', 'NOS', 'Reformatorisch Dagblad'],
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pfas-waterfilter" className="hover:underline">PFAS waterfilter</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Testen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PFAS in water testen: wat een thuistest wel en niet kan
          </h1>
          <p className="text-xs text-gray-500 mb-2">
            Laatst bijgewerkt: <time dateTime="2026-11-10">10 november 2026</time>
          </p>
          <QuickAnswer
            question="Hoe test je water op PFAS?"
            answer="Wil je weten hoeveel PFAS in je kraanwater zit, kijk dan eerst bij je drinkwaterbedrijf: dat meet PFAS en publiceert de waarden gratis. Een PFAS water tester die je thuis zelf afleest geeft hooguit een grove indicatie, omdat PFAS in drinkwater in nanogrammen per liter voorkomt. Betrouwbaar meten kan alleen in een geaccrediteerd laboratorium. Een eigen labtest is vooral zinvol bij water uit een eigen put, dicht bij een bekende PFAS-bron of om een filter te controleren."
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <AuthorBox datePublished="2026-04-25" dateModified="2026-11-10" />
        <HealthDisclaimer />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Eerst de nuance: wat zegt de norm?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nederlands kraanwater voldoet aan de wettelijke PFAS-norm. Sinds januari 2026 mag de som van 20 PFAS niet
            hoger zijn dan 100 nanogram per liter (0,1 microgram per liter), volgens de Europese drinkwaterrichtlijn
            2020/2184. Het RIVM hanteert daarnaast een veel strengere advieswaarde van 4,4 nanogram PFOA-equivalenten per
            liter. Die advieswaarde is geen wettelijke norm en telt anders: elke stof wordt gewogen naar zijn
            giftigheid.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Een eigen test is dus geen verplichting. Het is een manier om zekerheid te krijgen in situaties waar de
            controle van het drinkwaterbedrijf niet geldt, zoals bij een eigen put, of om te weten wat een filter bij
            jou thuis doet.
          </p>
        </section>

        <section className="mb-10 bg-[#F0F9FF] border border-[#BAE6FD] rounded-2xl p-5 md:p-6">
          <h2 className="text-xl font-bold text-[#003F5C] mb-3">Waarom zoveel mensen nu hun water willen testen</h2>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <li>
              <strong>22 september 2026:</strong> volgens een analyse van Greenpeace ligt de PFAS-waarde in ongeveer een
              derde van het Nederlandse drinkwater boven de RIVM-advieswaarde, met de hoogste waarden onder meer in
              IJmuiden en Zaandam. Het water voldoet wel aan de wettelijke norm. Bron:{' '}
              <a href="https://nos.nl/artikel/2632030" rel="noopener" className="text-[#005F8A] underline">NOS</a>.
            </li>
            <li>
              <strong>September 2026:</strong> de Inspectie Leefomgeving en Transport (ILT) waarschuwt dat PFAS uit
              bestrijdingsmiddelen, zoals het afbraakproduct TFA, een groeiend risico vormen voor drinkwater. Bron:{' '}
              <a href="https://nos.nl/artikel/2630617" rel="noopener" className="text-[#005F8A] underline">NOS</a>.
            </li>
            <li>
              <strong>30 oktober 2026:</strong> Noord-Holland, Zuid-Holland en Zeeland onderzoeken samen met het
              ministerie van Infrastructuur en Waterstaat en de drinkwaterbedrijven wat PFAS langs de kust betekent voor
              de drinkwaterwinning. Bron:{' '}
              <a href="https://www.rd.nl/a/onderzoek-gevolgen-pfas-in-kustgebied-voor-winning-drinkwater" rel="noopener" className="text-[#005F8A] underline">Reformatorisch Dagblad</a>.
            </li>
          </ul>
          <p className="text-sm text-gray-700 mt-4 leading-relaxed">
            Benieuwd naar jouw regio? Bekijk de{' '}
            <Link href="/kennisbank/pfas-nederland-kaart" className="text-[#005F8A] underline">PFAS-kaart van Nederland</Link>{' '}
            of lees wat het betekent als{' '}
            <Link href="/kennisbank/pfas-kraanwater-boven-rivm-advieswaarde" className="text-[#005F8A] underline">je kraanwater boven de RIVM-advieswaarde zit</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is een PFAS water tester eigenlijk?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Onder de naam PFAS water tester of PFAS-testkit worden drie heel verschillende dingen verkocht. Het loont om
            te weten welke je koopt:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 leading-relaxed">
            <li>
              <strong>Een monsterpakket voor een lab.</strong> Je vult een flesje en stuurt het op; een laboratorium meet
              de PFAS. Dit is een echte labtest. De waarde hangt af van het lab en van welke stoffen het meet.
            </li>
            <li>
              <strong>Een strip- of kleurtest die je zelf afleest.</strong> Voor zover wij weten bestaat er geen
              thuistest die PFAS betrouwbaar meet op het niveau van de wettelijke norm (100 nanogram per liter), laat
              staan op het niveau van de RIVM-advieswaarde (4,4 nanogram PFOA-equivalenten per liter).
            </li>
            <li>
              <strong>Een TDS-meter of digitale waterpen.</strong> Die meet opgeloste zouten en mineralen, geen PFAS.
              Een lage TDS-waarde zegt niets over PFAS.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Kortom: wil je PFAS in je water testen, dan kom je uit bij de gegevens van je drinkwaterbedrijf of bij een
            laboratorium.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Testmethoden voor PFAS in water vergeleken
          </h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-3">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="p-3 text-left">Methode</th>
                  <th className="p-3 text-left">Wat je te weten komt</th>
                  <th className="p-3 text-left">Betrouwbaar voor PFAS?</th>
                  <th className="p-3 text-left">Kosten</th>
                </tr>
              </thead>
              <tbody>
                {testMethoden.map((t, i) => (
                  <tr key={t.methode} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 font-medium text-[#003F5C]">{t.methode}</td>
                    <td className="p-3 text-gray-700">{t.watJeWeet}</td>
                    <td className="p-3 text-gray-700">{t.betrouwbaar}</td>
                    <td className="p-3 text-gray-700">{t.kosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            We noemen geen labprijzen, omdat we geen actuele en controleerbare prijslijst hebben. Vraag altijd vooraf
            een offerte. Bijgewerkt november 2026.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Stap voor stap: zo test je je water op PFAS
          </h2>
          <div className="space-y-4">
            {stappen.map(item => (
              <div key={item.stap} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#003F5C] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  {item.stap}
                </div>
                <div>
                  <h3 className="font-semibold text-[#005F8A] mb-1">{item.titel}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer is een eigen PFAS-test zinvol?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {situaties.map(item => (
              <div key={item.situatie} className="border rounded-lg p-4">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="font-semibold text-[#005F8A]">{item.situatie}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium shrink-0 ${
                    item.urgentie.startsWith('Hoog') ? 'bg-red-100 text-red-700' :
                    item.urgentie === 'Zinvol' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>{item.urgentie}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{item.uitleg}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Een filter controleren met een PFAS-test</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Heb je een waterfilter, dan kun je met twee labmonsters zien wat het doet: een van het ongefilterde
            kraanwater en een van het gefilterde water, op dezelfde dag genomen. Let erop dat labresultaten van
            fabrikanten meestal gelden voor een nieuw filter en voor de stoffen die getest zijn. Een filter dat al lang
            meegaat, kan minder doen. Vervang filters daarom op tijd volgens het schema van de fabrikant.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Liever meteen filteren?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Je hoeft niet eerst te testen om een filter te nemen. Welk filter PFAS echt vermindert en wat bij jouw
            situatie past, lees je in onze gids over het{' '}
            <Link href="/pfas-waterfilter" className="text-[#005F8A] underline font-medium">PFAS waterfilter</Link>.
            Kort samengevat is dit onze keuze:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-sm leading-relaxed">
            <li>
              <strong>Zonder osmose of installatie-gedoe:</strong> de{' '}
              <Link href={PUREFILTER.reviewPath} className="text-[#005F8A] underline">{PUREFILTER.name}</Link>{' '}
              ({PUREFILTER.price}) op de koude leiding. Equinox Labs mat bij een nieuw filter {PUREFILTER.pfasReduction} minder
              van vijf PFAS ({PUREFILTER.pfasTested.join(', ')}).
            </li>
            <li>
              <strong>Maximaal zuiveren, plus zeer heet en gekoeld water:</strong> de{' '}
              <Link href={FOUR_IN_ONE.reviewPath} className="text-[#005F8A] underline">{FOUR_IN_ONE.name}</Link>{' '}
              ({FOUR_IN_ONE.price}). {FOUR_IN_ONE.labReport.lab} mat bij een nieuw osmosesysteem PFOS {FOUR_IN_ONE.lab.PFOS} en
              PFOA {FOUR_IN_ONE.lab.PFOA} minder.
            </li>
            <li>
              <strong>Osmosewater uit je eigen kraan:</strong> een{' '}
              <Link href={THREE_WAY.reviewPath} className="text-[#005F8A] underline">zuiver-water-kraan met The Source</Link>.
              Omgekeerde osmose; een eigen PFAS-meting is niet gepubliceerd.
            </li>
            <li>
              <strong>Niet boren, bijvoorbeeld in een huurwoning:</strong> het{' '}
              <Link href={COUNTERTOP.reviewPath} className="text-[#005F8A] underline">{COUNTERTOP.name}</Link>{' '}
              ({COUNTERTOP.price}) op het aanrecht. Omgekeerde osmose; een eigen PFAS-meting is niet gepubliceerd.
            </li>
          </ul>
          <p className="text-xs text-gray-500 mb-6">
            Alle vier verkoopt PureAqua, waaraan WaterfilterPlatform gelieerd is.
          </p>
          <PureFilterCTA context="pfas" content="pfas-waterfilter-testen" />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over PFAS testen
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-200 rounded-lg">
                <summary className="p-4 font-semibold text-[#005F8A] cursor-pointer hover:bg-gray-50">
                  {item.question}
                </summary>
                <p className="px-4 pb-4 text-gray-700 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gerelateerde pagina&apos;s</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/pfas-waterfilter" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS waterfilter: onze keuze</h3>
              <p className="text-sm text-gray-600">Welke filters PFAS echt verminderen, per situatie</p>
            </Link>
            <Link href="/pfas-waterfilter/vergelijken" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS-filters vergelijken</h3>
              <p className="text-sm text-gray-600">Osmose, koolstof en filterkan naast elkaar</p>
            </Link>
            <Link href="/pfas-water" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS in drinkwater</h3>
              <p className="text-sm text-gray-600">Risico&apos;s, normen en achtergrond</p>
            </Link>
            <Link href="/pfas-waterfilter/normen-2026" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS-normen 2026</h3>
              <p className="text-sm text-gray-600">Wettelijke norm en RIVM-advieswaarde</p>
            </Link>
            <Link href="/pfas-waterfilter/gebieden-nederland" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS-gebieden in Nederland</h3>
              <p className="text-sm text-gray-600">Waar de waarden hoger liggen</p>
            </Link>
            <Link href="/pfas-waterfilter/kopen" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS-filter kopen</h3>
              <p className="text-sm text-gray-600">Opties en kosten naast elkaar</p>
            </Link>
          </div>
        </section>

        <section className="mt-8 pt-6 border-t border-gray-100" aria-label="Bronnen">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Bronnen</h2>
          <ul className="space-y-1.5 text-xs text-gray-500 leading-relaxed">
            <li>Europese drinkwaterrichtlijn 2020/2184: norm van 0,1 microgram per liter voor de som van 20 PFAS.</li>
            <li>RIVM: advieswaarde van 4,4 nanogram PFOA-equivalenten per liter drinkwater.</li>
            <li>Raad voor Accreditatie (RvA): register van geaccrediteerde laboratoria (ISO/IEC 17025).</li>
            <li>
              NOS, 22 september 2026:{' '}
              <a href="https://nos.nl/artikel/2632030" rel="noopener" className="underline">analyse Greenpeace over PFAS in drinkwater</a>.
            </li>
            <li>
              NOS, september 2026:{' '}
              <a href="https://nos.nl/artikel/2630617" rel="noopener" className="underline">ILT over PFAS in bestrijdingsmiddelen</a>.
            </li>
            <li>
              Reformatorisch Dagblad, 30 oktober 2026:{' '}
              <a href="https://www.rd.nl/a/onderzoek-gevolgen-pfas-in-kustgebied-voor-winning-drinkwater" rel="noopener" className="underline">onderzoek naar PFAS in het kustgebied</a>.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
