import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { HubCrossLinks } from '@/components/HubCrossLinks';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { MethodologyBadge } from '@/components/MethodologyBadge';
import { AuthorBox } from '@/components/AuthorBox';
import { JoepCTA } from '@/components/JoepCTA';
import { JoepRecommendation } from '@/components/JoepRecommendation';
import { JOEP, JOEP_MARKET, JOEP_MIN_DH, JOEP_POSITIONING } from '@/lib/joep.mjs';
import { FOUR_IN_ONE, THREE_WAY } from '@/lib/kranen.mjs';
import { COUNTERTOP } from '@/lib/countertop.mjs';
import { FACTS } from '@/lib/facts.mjs';

const PUBLISHED = '2025-09-01';
const MODIFIED = '2026-11-10';
const PAGE_URL = 'https://waterfilterplatform.nl/waterontharder';
const ZACHT = FACTS.hardZachtGrens.value;
const HARD = FACTS.hardGrens.value;
const PFAS_ADVIES = FACTS.pfasRivmAdvieswaarde.value;
const EU_RICHTLIJN = FACTS.euRichtlijn.value;
// Duur van een regeneratie uit lib/joep.mjs ("circa 1 uur, standaard ..."): alleen het deel voor de komma.
const REGENERATIE_DUUR = JOEP.regenerationTime.split(',')[0];
const NOS_GREENPEACE = 'https://nos.nl/artikel/2632030';

const TITLE = 'Waterontharder: werking en kosten';
const DESCRIPTION =
  'Wat een waterontharder doet, vanaf welke hardheid hij zinvol is en wat hij kost. Met eerlijke alternatieven en waarom JOEP volgens ons de slimste keuze is.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Waterontharder: wat het doet, wat het kost en onze keuze',
    description: DESCRIPTION,
    url: PAGE_URL,
    type: 'article',
  },
};

const quickAnswer = `Een waterontharder haalt kalk (calcium en magnesium) uit al het water in huis, meestal via ionenwisseling met zout. Dat is doorgaans zinvol vanaf ongeveer ${JOEP_MIN_DH} dH; bij zacht water (tot ${ZACHT} dH) heb je hem niet nodig. Wil je alleen zuiver drinkwater, dan is osmose voor de keukenkraan logischer. Een zoutloos systeem verwijdert geen kalk, maar beperkt aanslag. Onze keuze: ${JOEP_POSITIONING} Bij PureAqua kost JOEP ${JOEP.installedPrice} compleet geïnstalleerd.`;

const faqItems = [
  {
    question: 'Wat doet een waterontharder precies?',
    answer:
      'Een waterontharder haalt calcium en magnesium uit het leidingwater. Die twee mineralen veroorzaken kalk. De meest gebruikte techniek is ionenwisseling: de hardheidsmineralen worden op een harsbed uitgewisseld tegen natrium. Het resultaat is zacht water dat veel minder kalkaanslag achterlaat op kranen, tegels en apparaten.',
  },
  {
    question: 'Heb ik een waterontharder nodig?',
    answer: `Dat hangt af van de hardheid van je kraanwater. Vanaf ongeveer ${JOEP_MIN_DH} dH wordt een ontharder voor het hele huis doorgaans zinvol, zeker als je last hebt van kalk op kranen, in de douche en in apparaten. Bij zacht water (tot ${ZACHT} dH) heb je geen ontharder nodig. De hardheid verschilt sterk per gemeente; zoek die van jou op via onze pagina over waterhardheid per gemeente.`,
  },
  {
    question: 'Hoe werkt een ionenwisselaar waterontharder?',
    answer: `In de ontharder zit een bed van kleine harskorrels met natrium. Stroomt hard water erdoor, dan nemen calcium en magnesium de plaats van het natrium in. Is het harsbed vol, dan regenereert de ontharder: een zoutoplossing spoelt het hars schoon en laadt het opnieuw op. Hoeveel zout en water dat kost, verschilt per model. Bij JOEP is dat volgens de fabrikant ${JOEP.saltPerRegeneration} zout en ${JOEP.waterPerRegeneration} water per regeneratie. Een regeneratie duurt ${REGENERATIE_DUUR} en gebeurt standaard 's nachts.`,
  },
  {
    question: 'Mag je zacht water van een waterontharder drinken?',
    answer:
      'Ja, voor de meeste gezonde volwassenen is dat geen probleem. Zacht water van een ionenwisselaar bevat wel meer natrium dan onbehandeld kraanwater, en hoe meer kalk er wordt verwijderd, hoe meer natrium erbij komt. Volg je een natriumarm dieet of maak je flesvoeding, gebruik dan een aparte kraan met onbehandeld of gefilterd water en overleg bij twijfel met je arts of consultatiebureau.',
  },
  {
    question: 'Wat is het verschil tussen een ontharder met zout en een zoutloze waterontharder?',
    answer:
      'Een klassieke ontharder met zout haalt calcium en magnesium echt uit het water. Een zoutloos systeem (bijvoorbeeld TAC) laat de kalk in het water, maar zet die om in kristallen die minder aan oppervlakken hechten. Zoutloos voorkomt dus deels aanslag, maar maakt het water niet zacht. Bij hard water werkt een ontharder met zout volgens ons beter.',
  },
  {
    question: 'Hoeveel zout verbruikt een waterontharder per jaar?',
    answer: `Dat hangt af van de hardheid, je waterverbruik en het model. Als rekenvoorbeeld: de fabrikant van JOEP noemt ${JOEP.saltPerYear}. Bij harder water en een groter huishouden ligt het verbruik hoger. Reken het voor je eigen situatie uit met onze rekenhulp voor zoutkosten.`,
  },
  {
    question: 'Verwijdert een waterontharder ook PFAS of andere stoffen?',
    answer: `Nee. Een waterontharder verwijdert alleen kalk (calcium en magnesium). Chloor, PFAS, medicijnresten en andere opgeloste stoffen blijven in het water. Nederlands kraanwater voldoet aan de wettelijke normen, waaronder de EU-norm van 100 nanogram per liter voor de som van 20 PFAS. De RIVM-advieswaarde van ${PFAS_ADVIES} nanogram PFOA-equivalenten per liter is strenger: volgens een analyse van Greenpeace (september 2026, gemeld door de NOS) zit ongeveer een derde van het Nederlandse drinkwater daarboven. Wil je extra zuivering van je drinkwater, dan is omgekeerde osmose op de keukenkraan daarvoor de geschikte techniek; sommige huishoudens combineren beide.`,
  },
  {
    question: 'Wat kost een waterontharder kopen en installeren?',
    answer: `Een complete waterontharder kost doorgaans ${JOEP_MARKET.typicalInstalledRange} inclusief installatie, en voor kwaliteitsmodellen ligt dat meestal tussen ${JOEP_MARKET.typicalQualityRange}. Onze keuze JOEP kost bij PureAqua ${JOEP.devicePrice}, of ${JOEP.installedPrice} compleet geïnstalleerd. Daarna betaal je vooral zout en eventueel onderhoud.`,
  },
];

const soortenOntharder = [
  {
    naam: 'Ionenwisselaar met zout (klassiek)',
    werking: 'Wisselt calcium en magnesium tegen natrium via een harsbed en regenereert met zout',
    effectiviteit: 'Maakt het water echt zacht; de resthardheid is in te stellen',
    kosten: `${JOEP_MARKET.typicalInstalledRange} geïnstalleerd`,
    nadeel: 'Iets meer natrium in het water; zoutverbruik en spoelwater',
    beste_voor: `Woningen met hard water (vanaf circa ${JOEP_MIN_DH} dH) die kalk in het hele huis willen aanpakken`,
    highlight: true,
  },
  {
    naam: 'Zoutloze waterverbeteraar (TAC)',
    werking: 'Zet kalk om in kristallen die minder aan oppervlakken hechten',
    effectiviteit: 'Beperkt aanslag, maar verwijdert geen kalk',
    kosten: 'Meestal goedkoper dan een ontharder met zout',
    nadeel: 'Water blijft hard; minder effect bij zeer hard water',
    beste_voor: 'Lichte kalklast en wie geen zout wil gebruiken',
    highlight: false,
  },
  {
    naam: 'Magnetische of elektronische ontharder',
    werking: 'Een magnetisch of elektrisch veld zou kalk anders laten neerslaan',
    effectiviteit: 'Wetenschappelijk omstreden; wisselende resultaten',
    kosten: 'Laag in aanschaf',
    nadeel: 'Weinig onafhankelijk bewijs dat het werkt',
    beste_voor: 'Volgens ons niet geschikt als hoofdoplossing',
    highlight: false,
  },
  {
    naam: 'Twin-tank ontharder (twee kolommen)',
    werking: 'Twee harskolommen wisselen elkaar af, zodat er altijd zacht water is',
    effectiviteit: 'Ook zacht water tijdens de regeneratie',
    kosten: 'Verschilt sterk per merk; vraag meerdere offertes aan',
    nadeel: 'Doorgaans duurder en neemt meer ruimte in',
    beste_voor: 'Grote huishoudens met een hoog piekverbruik',
    highlight: false,
  },
];

const vergelijking = [
  { type: 'Waterontharder (ionenwisselaar)', verwijdert: 'Kalk, in het hele huis', waar: 'Op de hoofdleiding', natrium: 'Iets verhoogd', highlight: true },
  { type: 'Omgekeerde osmose', verwijdert: 'Kalk en de meeste opgeloste stoffen, alleen drinkwater', waar: 'Onder of op het aanrecht', natrium: 'Niet verhoogd', highlight: false },
  { type: 'Zoutloos systeem (TAC)', verwijdert: 'Niets; beperkt aanslag', waar: 'Op de hoofdleiding', natrium: 'Niet verhoogd', highlight: false },
  { type: 'Magnetische ontharding', verwijdert: 'Niets (omstreden werking)', waar: 'Om de leiding', natrium: 'Niet verhoogd', highlight: false },
];

const kostentabel = [
  { post: 'Complete ontharder inclusief installatie', eenmalig: JOEP_MARKET.typicalInstalledRange, perjaar: 'n.v.t.' },
  { post: 'Kwaliteitsmodellen inclusief installatie', eenmalig: JOEP_MARKET.typicalQualityRange, perjaar: 'n.v.t.' },
  { post: 'Zout', eenmalig: 'n.v.t.', perjaar: 'Afhankelijk van hardheid en verbruik' },
  { post: 'Spoelwater bij regeneratie', eenmalig: 'n.v.t.', perjaar: `Per regeneratie, bij JOEP ${JOEP.waterPerRegeneration}` },
  { post: 'Onderhoud of serviceabonnement', eenmalig: 'n.v.t.', perjaar: 'Optioneel, verschilt per merk' },
];

export default function WaterOntharderPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'ItemList',
            name: 'Waterontharder',
            url: PAGE_URL,
            numberOfItems: 31,
            itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Waterontharder in Appartement: Mag Dit & Welke Opties?', url: 'https://waterfilterplatform.nl/waterontharder/appartement' },
            { '@type': 'ListItem', position: 2, name: 'Waterontharder en aquarium: natrium gevaarlijk voor vissen', url: 'https://waterfilterplatform.nl/waterontharder/aquarium' },
            { '@type': 'ListItem', position: 3, name: 'Waterontharder bypass: instelling, mengklep en wanneer hard water gewenst', url: 'https://waterfilterplatform.nl/waterontharder/bypass' },
            { '@type': 'ListItem', position: 4, name: 'Waterontharder capaciteit berekenen: hardheid, gezinsgrootte en harsvolume', url: 'https://waterfilterplatform.nl/waterontharder/capaciteit' },
            { '@type': 'ListItem', position: 5, name: 'Elektrische waterontharder: werkt het echt?', url: 'https://waterfilterplatform.nl/waterontharder/elektrisch' },
            { '@type': 'ListItem', position: 6, name: 'Elektromagnetische waterontharder: werking, effectiviteit en vergelijking', url: 'https://waterfilterplatform.nl/waterontharder/elektromagnetisch' },
            { '@type': 'ListItem', position: 7, name: 'Waterontharder en gezondheid: is onthard water gezond?', url: 'https://waterfilterplatform.nl/waterontharder/gezondheid' },
            { '@type': 'ListItem', position: 8, name: 'Harsbed waterontharder: ionenwisseling, levensduur en regeneratie', url: 'https://waterfilterplatform.nl/waterontharder/harsbed' },
            { '@type': 'ListItem', position: 9, name: 'Hoe lang gaat een waterontharder mee? Levensduur en onderhoud', url: 'https://waterfilterplatform.nl/waterontharder/hoe-lang' },
            { '@type': 'ListItem', position: 10, name: 'Waterontharder huren: voordelen, kosten en wanneer huren vs kopen', url: 'https://waterfilterplatform.nl/waterontharder/huren' },
            { '@type': 'ListItem', position: 11, name: 'Waterontharder installeren: kosten, stappen en loodgieter vs zelf doen', url: 'https://waterfilterplatform.nl/waterontharder/installeren' },
            { '@type': 'ListItem', position: 12, name: 'Waterontharder kopen: koopgids 2026', url: 'https://waterfilterplatform.nl/waterontharder/kopen' },
            { '@type': 'ListItem', position: 13, name: 'Waterontharder kosten per jaar en in totaal (2026)', url: 'https://waterfilterplatform.nl/waterontharder/kosten' },
            { '@type': 'ListItem', position: 14, name: 'Waterontharder nadelen: de eerlijke keerzijde op een rij', url: 'https://waterfilterplatform.nl/waterontharder/nadelen' },
            { '@type': 'ListItem', position: 15, name: 'Waterontharder onderhoud: jaarlijks schema, reiniging en hars', url: 'https://waterfilterplatform.nl/waterontharder/onderhoud' },
            { '@type': 'ListItem', position: 16, name: 'Waterontharder prijs 2026: marktprijzen en goedkope opties', url: 'https://waterfilterplatform.nl/waterontharder/prijs' },
            { '@type': 'ListItem', position: 17, name: 'Waterontharder regeneratie uitgelegd: hoe vaak en hoeveel zout?', url: 'https://waterfilterplatform.nl/waterontharder/regeneratie' },
            { '@type': 'ListItem', position: 18, name: 'Hoe lang duurt regeneratie waterontharder? Tijdgestuurde vs volumetrisch', url: 'https://waterfilterplatform.nl/waterontharder/regeneratie-tijd' },
            { '@type': 'ListItem', position: 19, name: 'Waterontharder storingen: diagnose en oplossingen voor veelvoorkomende problemen', url: 'https://waterfilterplatform.nl/waterontharder/storingen' },
            { '@type': 'ListItem', position: 20, name: 'Waterontharder storing: diagnose checklist en oplossingen', url: 'https://waterfilterplatform.nl/waterontharder/storingen-checklist' },
            { '@type': 'ListItem', position: 21, name: 'Twin-tank waterontharder: continu zacht water met duplex systeem', url: 'https://waterfilterplatform.nl/waterontharder/twin-tank' },
            { '@type': 'ListItem', position: 22, name: 'Waterontharder vergelijken: de beste modellen van 2026', url: 'https://waterfilterplatform.nl/waterontharder/vergelijken' },
            { '@type': 'ListItem', position: 23, name: 'Waterontharder plaatsen als huurder: toestemming en rechten', url: 'https://waterfilterplatform.nl/waterontharder/verhuurder' },
            { '@type': 'ListItem', position: 24, name: 'Waterontharder of osmosefilter: wanneer kies je wat?', url: 'https://waterfilterplatform.nl/waterontharder/vs-osmose' },
            { '@type': 'ListItem', position: 25, name: 'Hoe Werkt een Waterontharder? Uitleg 2026', url: 'https://waterfilterplatform.nl/waterontharder/werking' },
            { '@type': 'ListItem', position: 26, name: 'Zakelijke waterontharder: voor bedrijven, kantoren en industrie', url: 'https://waterfilterplatform.nl/waterontharder/zakelijk' },
            { '@type': 'ListItem', position: 27, name: 'Waterontharder zout kopen: types en verbruik', url: 'https://waterfilterplatform.nl/waterontharder/zout' },
            { '@type': 'ListItem', position: 28, name: 'Waterontharder zoutverbruik: optimaliseren, soorten zout en kosten', url: 'https://waterfilterplatform.nl/waterontharder/zout-gebruik' },
            { '@type': 'ListItem', position: 29, name: 'Waterontharder zout: tablet, blok en grof zout vergelijken', url: 'https://waterfilterplatform.nl/waterontharder/zout-types' },
            { '@type': 'ListItem', position: 30, name: 'Waterontharder zoutverbruik: berekening en bespaartips', url: 'https://waterfilterplatform.nl/waterontharder/zout-verbruik' },
            { '@type': 'ListItem', position: 31, name: 'Zoutloze waterontharder: werkt het echt? (2026)', url: 'https://waterfilterplatform.nl/waterontharder/zoutloos' },
            ],
          },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterontharder: wat het doet, wat het kost en onze keuze',
          description: DESCRIPTION,
          datePublished: PUBLISHED,
          dateModified: MODIFIED,
          lastReviewed: MODIFIED,
          url: PAGE_URL,
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: PAGE_URL },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Waterontharder</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontharder: wat het doet, wat het kost en onze keuze
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een <strong>waterontharder</strong> haalt kalk uit al het water in huis. Zo voorkom je aanslag op
            kranen, tegels en in apparaten zoals de cv-ketel en de wasmachine. Hier lees je vanaf welke hardheid
            dat zinvol is, hoe een ontharder werkt, wat hij kost en wanneer een alternatief zoals omgekeerde
            osmose beter past. Plus welke ontharder wij aanraden, en waarom.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/waterhardheid"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Waterhardheid in mijn gemeente
            </Link>
            <Link
              href="/waterontharder/kopen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Koopgids waterontharder
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <div>
          <AuthorBox datePublished={PUBLISHED} dateModified={MODIFIED} />
          <QuickAnswer question="Wat is een waterontharder en heb ik er een nodig?" answer={quickAnswer} />
        </div>

        <JoepRecommendation content="waterontharder-hub-aanbeveling" />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">
            Op deze pagina
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#nodig" className="hover:underline">Heb je een waterontharder nodig?</a></li>
            <li><a href="#onze-keuze" className="hover:underline">Voor wie JOEP wel en niet past</a></li>
            <li><a href="#hoe-werkt" className="hover:underline">Hoe werkt een ionenwisselaar?</a></li>
            <li><a href="#soorten" className="hover:underline">Soorten waterontharders</a></li>
            <li><a href="#voordelen" className="hover:underline">Voordelen</a></li>
            <li><a href="#nadelen" className="hover:underline">Nadelen (eerlijk)</a></li>
            <li><a href="#vergelijking" className="hover:underline">Ontharder, osmose of zoutloos?</a></li>
            <li><a href="#kosten" className="hover:underline">Kosten</a></li>
            <li><a href="#onderhoud" className="hover:underline">Onderhoud</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Heb je een waterontharder nodig */}
        <section id="nodig">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Heb je een waterontharder nodig?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Begin bij de hardheid van je kraanwater, uitgedrukt in Duitse hardheidsgraden (dH). Water tot{' '}
            {ZACHT} dH geldt als zacht, vanaf {HARD} dH als hard. Een ontharder voor het hele huis wordt volgens
            ons zinvol vanaf ongeveer {JOEP_MIN_DH} dH, zeker als je merkt dat kranen, douchewand en waterkoker
            snel verkalken. De hardheid verschilt sterk per gemeente: zoek die van jou op bij{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid per gemeente
            </Link>
            .
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Belangrijk om te weten: Nederlands kraanwater voldoet aan de wettelijke normen, ook als het hard is.
            Een ontharder is een keuze voor comfort en minder onderhoud aan leidingen en apparaten, geen
            gezondheidsmaatregel. Welke oplossing past, hangt af van wat je wilt bereiken:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="border border-[#005F8A] bg-[#E0F2FE] rounded-2xl p-4">
              <p className="font-semibold text-gray-900 mb-1 text-sm">Kalk in het hele huis, vanaf circa {JOEP_MIN_DH} dH</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Een ionenwisselaar met zout op de hoofdleiding. Onze keuze is de{' '}
                <Link href={JOEP.reviewPath} className="text-[#005F8A] underline hover:no-underline">
                  JOEP waterontharder
                </Link>{' '}
                ({JOEP.installedPrice} compleet geïnstalleerd).
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-4">
              <p className="font-semibold text-gray-900 mb-1 text-sm">Lichte kalklast of liever geen zout</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Een{' '}
                <Link href="/waterontharder/zoutloos" className="text-[#005F8A] underline hover:no-underline">
                  zoutloos systeem
                </Link>{' '}
                beperkt aanslag, maar laat de kalk in het water. Bij hard water is het effect beperkt.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-4">
              <p className="font-semibold text-gray-900 mb-1 text-sm">Alleen zuiver drinkwater</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Een ontharder filtert geen PFAS, chloor of medicijnresten. Daarvoor is{' '}
                <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
                  omgekeerde osmose
                </Link>{' '}
                op de keukenkraan geschikt, bijvoorbeeld de{' '}
                <Link href={FOUR_IN_ONE.reviewPath} className="text-[#005F8A] underline hover:no-underline">
                  {FOUR_IN_ONE.name}
                </Link>{' '}
                of een{' '}
                <Link href={THREE_WAY.reviewPath} className="text-[#005F8A] underline hover:no-underline">
                  {THREE_WAY.name}
                </Link>
                .
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-4">
              <p className="font-semibold text-gray-900 mb-1 text-sm">Huurwoning</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Voor een ontharder op de hoofdleiding heb je{' '}
                <Link href="/waterontharder/verhuurder" className="text-[#005F8A] underline hover:no-underline">
                  toestemming van de verhuurder
                </Link>{' '}
                nodig. Voor zuiver drinkwater zonder boren kan het{' '}
                <Link href={COUNTERTOP.reviewPath} className="text-[#005F8A] underline hover:no-underline">
                  {COUNTERTOP.shortName}
                </Link>{' '}
                ({COUNTERTOP.price}): omgekeerde osmose op het aanrecht, met de stekker in het stopcontact.
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Twijfel je nog? De{' '}
            <Link href="/keuzehulp/hard-water" className="text-[#005F8A] underline hover:no-underline">
              keuzehulp bij hard water
            </Link>{' '}
            zet de opties per situatie op een rij, en in{' '}
            <Link href="/waterontharder/vs-osmose" className="text-[#005F8A] underline hover:no-underline">
              waterontharder of osmose
            </Link>{' '}
            lees je het verschil in detail.
          </p>
        </section>

        {/* Onze keuze */}
        <section id="onze-keuze">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voor wie JOEP wel en niet past</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Waarom JOEP onze keuze is, en wat &quot;zonder poespas&quot; concreet betekent, zie je in het blok
            hierboven. Maar onze keuze is niet voor iedereen de juiste. Een eerlijk overzicht:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="font-semibold text-gray-900 mb-2 text-sm">Past goed als</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                {[
                  `je water vanaf ongeveer ${JOEP_MIN_DH} dH hard is en je kalk in het hele huis wilt aanpakken`,
                  'je in een koopwoning woont of toestemming hebt om de hoofdleiding aan te passen',
                  `je weinig ruimte hebt: het apparaat meet ${JOEP.dimensions}`,
                  `er een afvoer en een stopcontact in de buurt zijn (${JOEP.power})`,
                  `je waterdruk ${JOEP.pressure} is`,
                ].map(punt => (
                  <li key={punt}>{punt}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="font-semibold text-gray-900 mb-2 text-sm">Kies iets anders als</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                {[
                  `je water zacht is (tot ${ZACHT} dH): dan heb je geen ontharder nodig`,
                  'je alleen zuiver drinkwater wilt: kies dan osmose voor de keukenkraan',
                  'je geen zout wilt bijvullen: een systeem zonder zout verwijdert geen kalk, maar beperkt aanslag',
                  'je huurt en geen toestemming krijgt voor de hoofdleiding',
                  'je een groot huishouden met een hoog piekverbruik hebt: laat dan eerst checken of het formaat past',
                ].map(punt => (
                  <li key={punt}>{punt}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Ter vergelijking: complete ontharders kosten doorgaans {JOEP_MARKET.typicalInstalledRange}{' '}
            geïnstalleerd. JOEP is daarmee niet het goedkoopste apparaat op de markt, maar zit volgens ons op een
            eerlijke prijs voor wat je krijgt. Alle specificaties staan in onze{' '}
            <Link href={JOEP.reviewPath} className="text-[#005F8A] underline hover:no-underline">
              JOEP-koopgids
            </Link>
            .
          </p>
        </section>

        {/* Hoe werkt ionenwisselaar */}
        <section id="hoe-werkt">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt een ionenwisselaar?</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Het hart van een klassieke waterontharder is een tank met{' '}
            <strong>ionenwisselaarhars</strong>: heel veel kleine kunststof korrels met natrium (Na⁺). Stroomt het
            harde leidingwater erdoor, dan gebeurt het volgende:
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                nr: '1',
                titel: 'Kalkmineralen binden aan het hars',
                desc: 'Calcium (Ca²⁺) en magnesium (Mg²⁺) hechten sterker aan het hars dan natrium. Ze verdringen het natrium en blijven aan de korrels zitten.',
              },
              {
                nr: '2',
                titel: 'Natrium komt in het water',
                desc: 'Voor elk calcium- of magnesiumion komen twee natriumionen vrij. Zacht water bevat dus iets meer natrium dan het harde water dat binnenkomt.',
              },
              {
                nr: '3',
                titel: 'Het harsbed raakt vol',
                desc: 'Na verloop van tijd, afhankelijk van verbruik en hardheid, kan het hars geen kalk meer opnemen. De ontharder start dan een regeneratie.',
              },
              {
                nr: '4',
                titel: 'Regeneratie met zout',
                desc: 'Een sterke zoutoplossing uit de zoutbak spoelt het hars. Het opgeslagen calcium en magnesium gaat met het spoelwater naar de afvoer en het hars is weer klaar voor gebruik.',
              },
            ].map(s => (
              <div key={s.nr} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {s.nr}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Goed om te weten:</strong> moderne ontharders starten de
            regeneratie automatisch. Modellen die op het werkelijke verbruik regenereren, gebruiken doorgaans
            minder zout en water dan modellen die op vaste tijden regenereren. Meer uitleg vind je bij{' '}
            <Link href="/waterontharder/werking" className="text-[#005F8A] underline hover:no-underline">
              hoe een waterontharder werkt
            </Link>
            .
          </div>
        </section>

        {/* Soorten waterontharders */}
        <section id="soorten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke soorten waterontharders zijn er?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Niet alles wat als &quot;waterontharder&quot; wordt verkocht, werkt hetzelfde. Dit zijn de vier
            hoofdtypen, met hun voor- en nadelen.
          </p>
          <div className="space-y-4">
            {soortenOntharder.map(s => (
              <div
                key={s.naam}
                className={`rounded-2xl border p-5 ${s.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start gap-2 mb-2">
                  <p className="font-bold text-gray-900 flex-1">{s.naam}</p>
                  {s.highlight && (
                    <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full shrink-0">
                      Haalt kalk echt weg
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm">
                  <div><span className="text-gray-400">Werking:</span> <span className="text-gray-700">{s.werking}</span></div>
                  <div><span className="text-gray-400">Effect:</span> <span className="text-gray-700">{s.effectiviteit}</span></div>
                  <div><span className="text-gray-400">Kosten:</span> <span className="text-gray-700">{s.kosten}</span></div>
                  <div><span className="text-gray-400">Nadeel:</span> <span className="text-gray-700">{s.nadeel}</span></div>
                  <div className="sm:col-span-2"><span className="text-gray-400">Past bij:</span> <span className="text-gray-700">{s.beste_voor}</span></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Meer over kalk aanpakken zonder klassieke ontharder lees je in{' '}
            <Link href="/kennisbank/kalk-verwijderen-water" className="text-[#005F8A] underline hover:no-underline">
              kalk verwijderen uit water
            </Link>
            .
          </p>
        </section>

        {/* Voordelen */}
        <section id="voordelen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat zijn de voordelen van een waterontharder?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Bij hard water levert een goed afgestelde ontharder merkbare voordelen op:
          </p>
          <div className="space-y-3">
            {[
              {
                titel: 'Veel minder kalkaanslag op kranen, tegels en douche',
                tekst:
                  'Het meest zichtbare verschil: witte vlekken op kranen, een kalksluier op de douchewand en aanslag op tegels verdwijnen grotendeels. Schoonmaken gaat sneller en ontkalker heb je nauwelijks nog nodig.',
              },
              {
                titel: 'Apparaten verkalken veel minder',
                tekst:
                  'Kalk zet zich af op verwarmingselementen in waterkokers, koffiemachines, wasmachines, vaatwassers en de cv-ketel. Zacht water beperkt die afzetting sterk, zodat je minder vaak hoeft te ontkalken.',
              },
              {
                titel: 'Verwarmen zonder kalklaag',
                tekst:
                  'Een kalklaag werkt isolerend op een verwarmingselement of warmtewisselaar. Zonder die laag geeft het element zijn warmte beter af aan het water.',
              },
              {
                titel: 'Vaak minder wasmiddel en zeep nodig',
                tekst:
                  'Zacht water schuimt beter dan hard water, waardoor je vaak minder wasmiddel, zeep en shampoo nodig hebt. Hoeveel minder, hangt af van je hardheid en je gewoontes.',
              },
              {
                titel: 'Meer comfort onder de douche',
                tekst:
                  'Zacht water laat minder kalkresten achter op huid, haar en douchewand. Sommige mensen ervaren dat als prettiger. Het is niet aangetoond dat zacht water huidaandoeningen voorkomt of geneest; heb je huidklachten, overleg dan met je huisarts.',
              },
              {
                titel: 'Bescherming van leidingwerk',
                tekst:
                  'Op lange termijn voorkomt ontharding ook kalkafzetting in leidingen, kranen en thermostaatkranen, zodat de doorstroom op peil blijft.',
              },
            ].map(v => (
              <div key={v.titel} className="flex gap-3 items-start">
                <span className="text-green-600 font-bold text-lg mt-0.5 shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">{v.titel}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{v.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nadelen */}
        <section id="nadelen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat zijn de nadelen van een waterontharder?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een waterontharder is geen wondermiddel. Weeg deze punten eerlijk af voordat je er een koopt.
          </p>
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">1. Iets meer natrium in het water</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Voor elk verwijderd calcium- of magnesiumion komen twee natriumionen in het water. Hoe harder het
                water, hoe meer natrium erbij komt. Voor gezonde volwassenen is dat geen probleem. Volg je een
                natriumarm dieet of maak je flesvoeding, gebruik dan een aparte kraan met onbehandeld of gefilterd
                water. Meer hierover in{' '}
                <Link href="/waterontharder/gezondheid" className="text-[#005F8A] underline hover:no-underline">
                  waterontharder en gezondheid
                </Link>
                .
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">2. Zout en spoelwater</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Bij elke regeneratie gaan zout en spoelwater naar het riool. Hoeveel precies, verschilt per model
                en per huishouden. Kijk bij het vergelijken naar het zout- en waterverbruik per regeneratie.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">3. Aanschaf en installatie</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Een complete ontharder kost doorgaans {JOEP_MARKET.typicalInstalledRange} inclusief installatie.
                Het apparaat komt op de hoofdwaterleiding en heeft een afvoer nodig, en meestal ook een
                stopcontact. In een huurwoning mag je de hoofdleiding vaak niet zonder toestemming aanpassen.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">4. Alleen kalk, geen andere stoffen</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Een waterontharder verwijdert calcium en magnesium, maar laat chloor, PFAS, medicijnresten en andere
                opgeloste stoffen ongemoeid. Kraanwater voldoet aan de wettelijke EU-norm voor PFAS (100 nanogram
                per liter voor de som van 20 PFAS), maar volgens een{' '}
                <a href={NOS_GREENPEACE} className="text-[#005F8A] underline hover:no-underline" rel="noopener">
                  Greenpeace-analyse (NOS, september 2026)
                </a>{' '}
                zit ongeveer een derde van het Nederlandse drinkwater boven de RIVM-advieswaarde van {PFAS_ADVIES}{' '}
                nanogram PFOA-equivalenten per liter. Meer daarover lees je in{' '}
                <Link href="/pfas-water" className="text-[#005F8A] underline hover:no-underline">
                  PFAS in water
                </Link>
                . Wil je ook je drinkwater extra zuiveren, dan heb je daarnaast een andere techniek nodig; zie de
                vergelijking hieronder.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">5. Onderhoud blijft nodig</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Je moet zout bijvullen en de zoutbak af en toe schoonmaken. Raakt het zout op, dan regenereert de
                ontharder niet goed en komt er weer hard water uit de kraan.
              </p>
            </div>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Alle bezwaren op een rij staan in{' '}
            <Link href="/waterontharder/nadelen" className="text-[#005F8A] underline hover:no-underline">
              nadelen van een waterontharder
            </Link>
            . Meer over kalk in huis lees je in{' '}
            <Link href="/kennisbank/kalk-in-huis" className="text-[#005F8A] underline hover:no-underline">
              kalk in huis: oorzaken en oplossingen
            </Link>
            .
          </p>
        </section>

        {/* Vergelijking */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waterontharder, omgekeerde osmose of zoutloos?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Deze technieken lossen verschillende problemen op. Een ontharder pakt kalk aan in het hele huis,
            osmose zuivert alleen het drinkwater aan de keukenkraan. Voor een uitgebreide vergelijking, lees{' '}
            <Link href="/kennisbank/waterfilter-vergelijken" className="text-[#005F8A] underline hover:no-underline">
              waterfilters vergelijken
            </Link>
            .
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Type</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Wat het verwijdert</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Waar</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Natrium</th>
                </tr>
              </thead>
              <tbody>
                {vergelijking.map(r => (
                  <tr
                    key={r.type}
                    className={r.highlight ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 text-sm">{r.type}</td>
                    <td className="py-2.5 px-3 text-xs">{r.verwijdert}</td>
                    <td className="py-2.5 px-3 text-xs">{r.waar}</td>
                    <td className="py-2.5 px-3 text-xs">{r.natrium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 space-y-4">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Wanneer kies je een waterontharder?</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Als je kalk wilt voorkomen in leidingen, cv-ketel, wasmachine en badkamer, en al het water in huis
                zacht wilt hebben, inclusief douchewater. Dan is een ionenwisselaar met zout volgens ons de meest
                directe oplossing.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Wanneer kies je omgekeerde osmose?</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Als het je vooral om het drinkwater gaat. Een{' '}
                <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
                  osmosesysteem
                </Link>{' '}
                haalt naast kalk ook het grootste deel van de andere opgeloste stoffen uit het water dat je drinkt
                en kookt, en voegt geen natrium toe. Het werkt alleen voor de keukenkraan, niet voor douche en
                apparaten. Sommige huishoudens combineren daarom een ontharder met osmose voor het drinkwater.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Wanneer kies je zoutloos?</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Als je kalklast beperkt is en je geen zout wilt bijvullen. Verwacht geen zacht water: een{' '}
                <Link href="/waterontharder/zoutloos" className="text-[#005F8A] underline hover:no-underline">
                  zoutloze waterontharder
                </Link>{' '}
                verandert alleen hoe kalk neerslaat.
              </p>
            </div>
          </div>
        </section>

        {/* Kosten */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat kost een waterontharder?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De kosten bestaan uit een eenmalig deel (aanschaf en installatie) en doorlopende kosten (vooral zout).
            Dit zijn de prijsklassen die we in de markt zien:
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[460px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Kostenpost</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Eenmalig</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Doorlopend</th>
                </tr>
              </thead>
              <tbody>
                {kostentabel.map(r => (
                  <tr key={r.post} className="border-b border-gray-100">
                    <td className="py-2.5 px-3">{r.post}</td>
                    <td className="py-2.5 px-3 text-right">{r.eenmalig}</td>
                    <td className="py-2.5 px-3 text-right">{r.perjaar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            Prijsklassen: {JOEP_MARKET.rangeSources.join(' en ')}, peildatum september 2026. Onze keuze JOEP kost
            bij PureAqua {JOEP.devicePrice}, of {JOEP.installedPrice} compleet geïnstalleerd.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Een uitgebreide rekensom staat in{' '}
            <Link href="/waterontharder/kosten" className="text-[#005F8A] underline hover:no-underline">
              kosten van een waterontharder
            </Link>{' '}
            en{' '}
            <Link href="/waterontharder/prijs" className="text-[#005F8A] underline hover:no-underline">
              waterontharder prijs
            </Link>
            . Je zoutkosten per jaar bereken je met onze{' '}
            <Link href="/hulpmiddelen/waterontharder-zout-kosten" className="text-[#005F8A] underline hover:no-underline">
              rekenhulp voor zoutkosten
            </Link>
            . Wil je alleen het drinkwater zuiveren, dan is een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              osmosesysteem
            </Link>{' '}
            vaak goedkoper.
          </p>
        </section>

        {/* Onderhoud */}
        <section id="onderhoud">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderhoud van een waterontharder</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een waterontharder vraagt weinig, maar niet niets. Een verwaarloosde zoutbak kan vervuilen. Dit is
            het gebruikelijke onderhoud:
          </p>
          <div className="space-y-3">
            {[
              {
                onderdeel: 'Zout bijvullen',
                interval: 'Als het niveau laag is',
                actie:
                  'Gebruik speciaal onthardingszout (tabletten), geen keukenzout. Laat de zoutbak nooit leeg raken, anders regenereert het hars niet goed.',
              },
              {
                onderdeel: 'Zoutbak schoonmaken',
                interval: 'Jaarlijks',
                actie:
                  'Haal zoutkorsten en aanslag weg en spoel de bak goed na. Zo voorkom je verontreiniging en klonten zout.',
              },
              {
                onderdeel: 'Hardheid controleren',
                interval: 'Halfjaarlijks',
                actie:
                  'Meet met een eenvoudige test de hardheid van het water uit de kraan. Stijgt die boven de ingestelde waarde, stel de ontharder dan bij of laat hem nakijken.',
              },
              {
                onderdeel: 'Controle door een monteur',
                interval: 'Naar behoefte',
                actie:
                  'Laat bij twijfel lekken, ventielen en het regeneratieprogramma controleren. Sommige fabrikanten bieden hiervoor een optioneel serviceabonnement.',
              },
            ].map(r => (
              <div key={r.onderdeel} className="flex gap-3 items-start border border-gray-100 rounded-xl p-3">
                <div className="text-[#005F8A] text-lg shrink-0">⚙</div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline gap-2">
                    <p className="font-semibold text-gray-900 text-sm">{r.onderdeel}</p>
                    <p className="text-xs text-[#005F8A] font-medium shrink-0">{r.interval}</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{r.actie}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Het volledige schema staat in{' '}
            <Link href="/waterontharder/onderhoud" className="text-[#005F8A] underline hover:no-underline">
              onderhoud van een waterontharder
            </Link>
            .
          </p>
        </section>

        {/* CTA */}
        <HubCrossLinks exclude="waterontharder" />

        <JoepCTA context="hard-water" content="waterontharder-joep" />

        <AffiliateCTA
          destination="waterontharders"
          campaign="waterontharder"
          content="waterontharder-hub-shopcta"
          title="Een waterontharder aanschaffen?"
          sub="Bekijk het assortiment waterontharders bij onze partner PureAqua en vergelijk de opties."
        />

        <CTABanner context="waterhardheid" />

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/waterontharder/kopen',
                title: 'Waterontharder kopen',
                desc: 'Koopgids: capaciteit, installatie, zout en kosten over tien jaar.',
              },
              {
                href: JOEP.reviewPath,
                title: 'JOEP waterontharder',
                desc: 'Specificaties, prijs en voor wie onze keuze wel en niet past.',
              },
              {
                href: '/kennisbank/waterontharder',
                title: 'Kennisbank: waterontharder',
                desc: 'Achtergrond over ionenwisseling, harsbed en de markt.',
              },
              {
                href: '/kennisbank/waterhardheid-verlagen',
                title: 'Waterhardheid verlagen',
                desc: 'Alle methoden om waterhardheid te verlagen, van ontharder tot osmose.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Zoek de actuele waterhardheid op voor jouw woonplaats.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose',
                desc: 'Het alternatief voor zuiver drinkwater, zonder natrium toe te voegen.',
              },
              {
                href: '/kennisbank/kalk-verwijderen-water',
                title: 'Kalk verwijderen uit water',
                desc: 'Overzicht van technieken om kalk te verwijderen of te neutraliseren.',
              },
              {
                href: '/waterhardheid/amsterdam',
                title: 'Waterhardheid in Amsterdam',
                desc: 'Lokale hardheidsdata en de aanpak voor Amsterdamse woningen.',
              },
              {
                href: '/stoffen-in-drinkwater/kalk-mineralen',
                title: 'Kalk en mineralen in drinkwater',
                desc: 'Calcium, magnesium en bicarbonaat: effect op apparaten en smaak.',
              },
              {
                href: '/filtertechnieken/ionenwisseling',
                title: 'Ionenwisseling als filtertechniek',
                desc: 'Hoe een harsbed werkt en waar ionenwisseling nog meer voor wordt gebruikt.',
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
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Waterontharder-merken</h2>
          <p className="text-gray-600 text-sm mb-4">
            Bekende merken op de Nederlandse en Belgische markt, met uitleg per merk. Onze keuze is
            JOEP; JOEP en AquaCell worden verkocht door PureAqua, waaraan wij gelieerd zijn.
            Beoordeel altijd op de juiste capaciteit, certificering en service.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              ['BWT', '/bwt-waterontharder'],
              ['Grunbeck', '/grunbeck-waterontharder'],
              ['EcoWater', '/ecowater-waterontharder'],
              ['Harvey', '/harvey-waterontharder'],
              ['Viteau', '/viteau-waterontharder'],
              ['Aquacell', '/aquacell-waterontharder'],
              ['Maxima', '/maxima-waterontharder'],
              ['Culligan', '/culligan-waterontharder'],
              ['Kinetico', '/kinetico-waterontharder'],
              ['Erie', '/erie-waterontharder'],
              ['JOEP', '/joep-waterontharder'],
            ].map(([naam, href]) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-1.5 bg-[#E0F2FE] text-[#005F8A] font-medium text-sm px-3.5 py-2 rounded-lg hover:bg-[#005F8A] hover:text-white transition-colors"
              >
                {naam} waterontharder
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Merken vergelijken? Lees{' '}
            <Link href="/vergelijken/bwt-vs-grunbeck" className="text-[#005F8A] underline">BWT vs Grunbeck</Link>,{' '}
            <Link href="/vergelijken/harvey-vs-bwt" className="text-[#005F8A] underline">Harvey vs BWT</Link>{' '}
            of de{' '}
            <Link href="/beste-waterontharder-2026" className="text-[#005F8A] underline">koopgids beste waterontharder 2026</Link>.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/beste-waterontharder-2026" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Beste waterontharder 2026</p>
              <p className="text-sm text-gray-500">Koopgids met shortlist per situatie, bekende merken en kosten over 5 jaar.</p>
            </Link>
            <Link href="/waterontharder/nadelen" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Nadelen van een waterontharder</p>
              <p className="text-sm text-gray-500">De eerlijke keerzijde: kosten, natrium, onderhoud en wanneer het niet zinvol is.</p>
            </Link>
            <Link href="/waterontharder/gezondheid" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Waterontharder en gezondheid</p>
              <p className="text-sm text-gray-500">Is onthard water gezond? Natrium, mineralen en voor wie oplet, genuanceerd.</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Ionenwisseling: hoe werkt ontharding?</p>
              <p className="text-sm text-gray-500">De technische werking van ionenwisseling en wanneer het de juiste keuze is.</p>
            </Link>
            <Link href="/keuzehulp/hard-water" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Keuzehulp bij hard water</p>
              <p className="text-sm text-gray-500">Welke oplossing past bij jouw situatie: ontharder, anti-kalkfilter of osmose?</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Kalk en mineralen in drinkwater</p>
              <p className="text-sm text-gray-500">Wat zijn calcium en magnesium in water, en zijn ze schadelijk of juist gezond?</p>
            </Link>
          </div>
        </section>

        <MethodologyBadge
          lastReviewed={MODIFIED}
          sources={[
            'RIVM (advieswaarde PFAS)',
            `EU-richtlijn ${EU_RICHTLIJN} (PFAS-norm)`,
            'NOS (Greenpeace-analyse, september 2026)',
            'Fabrikant AquaSens (JOEP-specificaties)',
            ...JOEP_MARKET.rangeSources,
          ]}
        />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over de waterontharder
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
      {/* orphan-fix: meer in dit cluster */}
      <div className="max-w-3xl mx-auto px-4 pb-12">
        <section>
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Meer in dit cluster</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link key="/waterontharder/appartement" href="/waterontharder/appartement" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Waterontharder in Appartement</p>
              </Link>
              <Link key="/waterontharder/aquarium" href="/waterontharder/aquarium" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Waterontharder en aquarium</p>
              </Link>
              <Link key="/waterontharder/bypass" href="/waterontharder/bypass" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Waterontharder bypass</p>
              </Link>
              <Link key="/waterontharder/elektrisch" href="/waterontharder/elektrisch" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Elektrische waterontharder</p>
              </Link>
              <Link key="/waterontharder/regeneratie-tijd" href="/waterontharder/regeneratie-tijd" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Hoe lang duurt regeneratie waterontharder? Tijdgestuurde</p>
              </Link>
              <Link key="/waterontharder/storingen-checklist" href="/waterontharder/storingen-checklist" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Waterontharder storing</p>
              </Link>
              <Link key="/waterontharder/twin-tank" href="/waterontharder/twin-tank" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Twin-tank waterontharder</p>
              </Link>
              <Link key="/waterontharder/verhuurder" href="/waterontharder/verhuurder" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Waterontharder plaatsen als huurder</p>
              </Link>
              <Link key="/waterontharder/zout-verbruik" href="/waterontharder/zout-verbruik" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Waterontharder zoutverbruik</p>
              </Link>
          </div>
        </section>
      </div>
    </>
  );
}
