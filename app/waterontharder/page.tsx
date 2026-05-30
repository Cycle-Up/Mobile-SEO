import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: 'Heb ik een waterontharder nodig? Werking, kosten & advies',
  description:
    'Alles over de waterontharder: hoe een ionenwisselaar werkt, soorten, kosten aanschaf en zout, onderhoud en wanneer een waterontharder kopen zinvol is.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder' },
  openGraph: {
    title: 'Waterontharder — werking, kosten en alternatieven',
    description:
      'Complete gids over de waterontharder: ionenwisselaar, zoutarm, magnetisch, kosten, onderhoud en vergelijking met osmose en kalkfilter.',
    url: 'https://waterfilterplatform.nl/waterontharder',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat doet een waterontharder precies?',
    answer:
      'Een waterontharder verwijdert calcium- en magnesiumionen — de veroorzakers van kalk — uit het leidingwater. De meest gebruikte techniek is ionenwisseling: hardheidsmineralen worden uitgewisseld tegen natriumionen op een harsbed. Het resultaat is zacht water dat geen kalkafzetting achterlaat op kranen, tegels of apparaten.',
  },
  {
    question: 'Hoe werkt een ionenwisselaar waterontharder?',
    answer:
      'In de ontharderkolom zit een bed van kleine harskorrels beladen met natriumionen. Wanneer hard water door het harsbed stroomt, ruilen calcium- en magnesiumionen van plek met de natriumionen. Na verloop van tijd is het harsbed verzadigd en wordt het geregenereerd: een zoutoplossing (pekel) spoelt het harsbed schoon en laadt het opnieuw op met natrium. Dit regeneratieproces duurt 1-2 uur en verbruikt 5-15 kg zout per cyclus.',
  },
  {
    question: 'Mag je zacht water (van een waterontharder) drinken?',
    answer:
      'Dit is omstreden. Zacht water van een klassieke ionenwisselaar bevat meer natrium dan onbehandeld leidingwater. Voor de meeste gezonde volwassenen is het verschil verwaarloosbaar. Voor mensen die natriumarm dieet volgen, baby\'s en kleine kinderen wordt aanbevolen om een aparte aftappunt voor onbehandeld of gefilterd drinkwater te installeren. Controleer altijd de natriumwaarden in het eindproduct.',
  },
  {
    question: 'Wat is het verschil tussen een zout- en zoutarme waterontharder?',
    answer:
      'Een klassieke waterontharder gebruikt zout (NaCl) om het harsbed te regenereren en wisselt calcium/magnesium tegen natrium. Een zoutarme waterontharder (ook wel "waterverbeteraar" of "zoutvrije ontharding") gebruikt een andere technologie zoals TAC (Template Assisted Crystallization) die kalk niet verwijdert maar omzet in een kristalvorm die niet aan oppervlakken hecht. Zoutarme systemen verwijderen kalk dus niet écht — ze voorkomen kalkaanslag.',
  },
  {
    question: 'Hoeveel zout verbruikt een waterontharder per jaar?',
    answer:
      'Een gemiddeld gezin van 4 personen verbruikt 50 tot 150 kg zout per jaar, afhankelijk van de waterhardheid in de regio, het waterverbruik en de instelling van de ontharder. Zout kost circa €0,20-0,40 per kg, wat neerkomt op €10-60 per jaar aan zoutkosten. Moderne ontharders met vraaggestuurde regeneratie verbruiken 30-50% minder zout dan oudere modellen.',
  },
  {
    question: 'Wat is het nadeel van een waterontharder ten opzichte van omgekeerde osmose?',
    answer:
      'Een waterontharder verwijdert alleen kalk (calcium en magnesium). Chloor, nitraten, pesticiden, zware metalen, PFAS en microplastics blijven in het water. Omgekeerde osmose verwijdert 95-99% van alle opgeloste stoffen — een veel grondiger filtratie. Bovendien voegt een waterontharder natrium toe aan het water, terwijl osmose water neutraal is. Wie zowel kalk als andere verontreinigingen wil aanpakken, combineert soms beide systemen.',
  },
  {
    question: 'Is een waterontharder zinvol in mijn gemeente?',
    answer:
      'Een waterontharder is het meest zinvol bij een waterhardheid van 15 °dH (Duits graden) of hoger — dat is "hard" tot "zeer hard" water. Grote delen van Noord-Holland, Zuid-Holland, Zeeland, Noord-Brabant en Limburg hebben hard tot zeer hard leidingwater. Check de actuele waterhardheid voor jouw gemeente in onze waterhardheid-database.',
  },
  {
    question: 'Wat kost een waterontharder kopen en installeren?',
    answer:
      'Een kwalitatieve enkelvoudige waterontharder voor huishoudelijk gebruik kost €500-1.500 aanschaf. Installatie door een loodgieter kost €150-350. Simpele koppelbare zoutvrije systemen zijn al verkrijgbaar vanaf €80-200 maar bieden beperkte prestaties. Reken daarnaast op €50-150 per jaar aan zout en €50-100 per jaar voor onderhoud.',
  },
];

const soortenOntharder = [
  {
    naam: 'Ionenwisselaar (klassiek, met zout)',
    werking: 'Wisselt calcium/magnesium tegen natrium via harsbed, regenereert met pekel',
    effectiviteit: 'Verwijdert 95-99% kalk',
    kosten: '€ 500 – 1.500 aanschaf',
    nadeel: 'Voegt natrium toe; zoutgebruik; milieu-impact',
    beste_voor: 'Gezinnen met hard water en hoge kalklast',
    highlight: true,
  },
  {
    naam: 'Zoutarme waterverbeteraar (TAC / nano-technologie)',
    werking: 'Zet kalk om in microscopische kristallen die niet hechten aan oppervlakken',
    effectiviteit: 'Voorkomt kalkaanslag (verwijdert kalk niet)',
    kosten: '€ 200 – 800 aanschaf',
    nadeel: 'Verwijdert kalk niet écht; beperkte effectiviteit bij zeer hard water',
    beste_voor: 'Mensen die het milieu willen sparen; huurders; lichte kalklast',
    highlight: false,
  },
  {
    naam: 'Magnetische waterontharder',
    werking: 'Magnetisch veld zou kalkdeeltjes anders structureren (wetenschappelijk omstreden)',
    effectiviteit: 'Onbewezen; wisselende resultaten in onafhankelijke testen',
    kosten: '€ 30 – 200 aanschaf',
    nadeel: 'Weinig wetenschappelijk bewijs voor werkzaamheid',
    beste_voor: 'Niet aanbevolen als primaire oplossing',
    highlight: false,
  },
  {
    naam: 'Dubbele kolom (twin-tank) ontharder',
    werking: 'Twee harskolommen wisselen af zodat altijd zacht water beschikbaar is',
    effectiviteit: 'Continu zacht water, ook tijdens regeneratie',
    kosten: '€ 800 – 2.500 aanschaf',
    nadeel: 'Hogere aanschafprijs; meer ruimte nodig',
    beste_voor: 'Grote gezinnen; grote woningen; commercieel gebruik',
    highlight: false,
  },
];

const vergelijking = [
  {
    type: 'Waterontharder (ionenwisselaar)',
    verwijdert: 'Alleen kalk',
    zuiverheid: 'Kalk 95–99%',
    kosten: '€ 100–250/jr',
    ruimte: 'Meterkast/garage',
    natrium: 'Verhoogd',
    highlight: true,
  },
  {
    type: 'Omgekeerde osmose',
    verwijdert: 'Alle opgeloste stoffen',
    zuiverheid: '95–99% breed spectrum',
    kosten: '€ 60–150/jr',
    ruimte: 'Onder aanrecht',
    natrium: 'Geen',
    highlight: false,
  },
  {
    type: 'Kalkfilter / carbonaatfilter',
    verwijdert: 'Kalk (carbonaat) deels',
    zuiverheid: '40–70% kalk',
    kosten: '€ 30–80/jr',
    ruimte: 'Op leiding',
    natrium: 'Geen',
    highlight: false,
  },
  {
    type: 'Magnetische ontharding',
    verwijdert: 'Niets (omstreden werking)',
    zuiverheid: 'Onbewezen',
    kosten: '€ 0–10/jr',
    ruimte: 'Op leiding',
    natrium: 'Geen',
    highlight: false,
  },
];

const kostentabel = [
  { post: 'Aanschaf ontharder (enkel)', eenmalig: '€ 500 – 1.500', perjaar: '—' },
  { post: 'Installatie loodgieter', eenmalig: '€ 150 – 350', perjaar: '—' },
  { post: 'Zout (50–150 kg/jr)', eenmalig: '—', perjaar: '€ 10 – 60' },
  { post: 'Water (regeneratiespoeling)', eenmalig: '—', perjaar: '€ 5 – 20' },
  { post: 'Jaarlijks onderhoud/service', eenmalig: '—', perjaar: '€ 50 – 100' },
  { post: 'Vervanging hars (elke 8-12 jr)', eenmalig: '—', perjaar: '€ 20 – 60' },
  { post: 'Totaal jaarlijks', eenmalig: '—', perjaar: '€ 85 – 240' },
];

export default function WaterOntharderPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'ItemList',
            name: 'Waterontharder',
            url: 'https://waterfilterplatform.nl/waterontharder',
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
            { '@type': 'ListItem', position: 12, name: 'Waterontharder Kopen 2026: Complete Gids', url: 'https://waterfilterplatform.nl/waterontharder/kopen' },
            { '@type': 'ListItem', position: 13, name: 'Waterontharder kosten: aanschaf, zout en totale eigendomskosten', url: 'https://waterfilterplatform.nl/waterontharder/kosten' },
            { '@type': 'ListItem', position: 14, name: 'Waterontharder nadelen: de eerlijke keerzijde op een rij', url: 'https://waterfilterplatform.nl/waterontharder/nadelen' },
            { '@type': 'ListItem', position: 15, name: 'Waterontharder onderhoud: jaarlijks schema, reiniging en hars', url: 'https://waterfilterplatform.nl/waterontharder/onderhoud' },
            { '@type': 'ListItem', position: 16, name: 'Waterontharder Prijs: Kosten & Vergelijking 2026', url: 'https://waterfilterplatform.nl/waterontharder/prijs' },
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
          title: 'Waterontharder — werking, kosten en alternatieven',
          description:
            'Complete gids over de waterontharder: hoe een ionenwisselaar werkt, soorten, kosten, onderhoud en vergelijking met osmose en kalkfilter.',
          datePublished: '2025-09-01',
          dateModified: '2026-05-13',
          url: 'https://waterfilterplatform.nl/waterontharder',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/waterontharder' },
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
            Waterontharder: werking, kosten en alternatieven
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een <strong>waterontharder</strong> verwijdert kalk uit leidingwater en voorkomt kalkaanslag op
            kranen, tegels en huishoudelijke apparaten. Op deze pagina leggen we uit hoe een ionenwisselaar
            werkt, welke soorten ontharders er zijn, wat een waterontharder kopen kost en wanneer een
            alternatief — zoals omgekeerde osmose — de betere keuze is.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kennisbank/waterontharder"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Meer over waterontharders →
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

        <QuickAnswer answer="Een waterontharder verwijdert kalk (calcium en magnesium) uit leidingwater via ionenwisseling. Het beschermt leidingen, cv-ketel, wasmachine en vaatwasser. In Nederland is een ontharder zinvol bij een waterhardheid boven 12°dH. Bij lagere hardheden is een osmosefilter op de keukenkraan een goedkoper en praktischer alternatief." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">
            Op deze pagina
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#wat-is" className="hover:underline">Wat is een waterontharder?</a></li>
            <li><a href="#hoe-werkt" className="hover:underline">Hoe werkt een ionenwisselaar?</a></li>
            <li><a href="#soorten" className="hover:underline">Soorten waterontharders</a></li>
            <li><a href="#voordelen" className="hover:underline">Voordelen</a></li>
            <li><a href="#nadelen" className="hover:underline">Nadelen (eerlijk)</a></li>
            <li><a href="#vergelijking" className="hover:underline">Ontharder vs osmose vs kalkfilter</a></li>
            <li><a href="#kosten" className="hover:underline">Kosten aanschaf + installatie + zout</a></li>
            <li><a href="#onderhoud" className="hover:underline">Onderhoud</a></li>
            <li><a href="#voor-wie" className="hover:underline">Voor wie is het zinvol?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Wat is een waterontharder */}
        <section id="wat-is">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is een waterontharder?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een <strong>waterontharder</strong> is een apparaat dat de hardheid van leidingwater verlaagt door
            calcium- en magnesiumionen te verwijderen. Dit zijn de twee mineralen die verantwoordelijk zijn voor
            kalkafzetting op kranen, tegels, waterkokers, douchekoppen, verwarmingselementen en cv-ketels.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Waterhardheid wordt uitgedrukt in <strong>°dH</strong> (Duits graden) of mmol/L. Water geldt als:
          </p>
          <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
            <li>Zacht: 0–8 °dH (weinig kalk)</li>
            <li>Matig hard: 8–15 °dH</li>
            <li>Hard: 15–21 °dH</li>
            <li>Zeer hard: boven 21 °dH (veel kalk, grote kans op problemen)</li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Grote delen van Nederland hebben hard tot zeer hard leidingwater. Met name in de kustprovincies
            Noord- en Zuid-Holland, Zeeland en in Limburg en Noord-Brabant kan de waterhardheid oplopen tot 25
            °dH of meer. In deze regio&apos;s is kalkoverlast een veelgehoorde klacht en wordt een
            waterontharder kopen serieus overwogen door huizenbezitters. Wil je weten hoe hard het water in jouw
            gemeente is? Bekijk de{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid per gemeente
            </Link>
            .
          </p>
          <p className="text-gray-700 leading-relaxed">
            De meestgebruikte techniek voor huishoudelijke waterontharding is de{' '}
            <strong>ionenwisseling</strong>, ook wel ionenuitwisseling of ion exchange genoemd. Lees meer over de
            achtergrond in ons artikel{' '}
            <Link href="/kennisbank/waterhardheid-verlagen" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid verlagen
            </Link>
            .
          </p>
        </section>

        {/* Hoe werkt ionenwisselaar */}
        <section id="hoe-werkt">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt een ionenwisselaar?</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Het hart van een klassieke waterontharder is een cilindervormig reservoir gevuld met{' '}
            <strong>ionenwisselaarhars</strong>: miljoenen kleine polymeerkralen, elk beladen met
            natriumionen (Na⁺). Als het harde leidingwater door dit harsbed stroomt, vindt een
            chemische uitwisseling plaats:
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                nr: '1',
                titel: 'Hardheidsmineralen binden aan het hars',
                desc: 'Calcium (Ca²⁺) en magnesium (Mg²⁺) hebben een sterkere aantrekking tot het harsbed dan natrium. Ze verdringen de natriumionen en hechten aan de harskorrels.',
              },
              {
                nr: '2',
                titel: 'Natrium komt vrij in het water',
                desc: 'Voor elke Ca²⁺ of Mg²⁺ die aan het hars bindt, komen twee Na⁺ ionen vrij in het doorstromende water. Het zachte water bevat dus meer natrium dan het inkomende harde water.',
              },
              {
                nr: '3',
                titel: 'Harsbed raakt verzadigd',
                desc: 'Na verloop van tijd — afhankelijk van gebruik en waterhardheid — zijn alle natriumionen uitgewisseld en kan het hars geen kalk meer opnemen. De ontharder gaat dan in regeneratiemodus.',
              },
              {
                nr: '4',
                titel: 'Regeneratie met pekelwater',
                desc: 'Een geconcentreerde zoutoplossing (NaCl-pekel) uit het zouttankreservoir spoelt het harsbed. De hoge natriumconcentratie verdringt de opgeslagen calcium en magnesium, die samen met het spoelwater naar de afvoer worden geleid. Het harsbed is daarna opnieuw beladen met natrium en klaar voor de volgende cyclus.',
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
            <strong className="text-[#003F5C]">Let op:</strong> moderne ontharders zijn voorzien van een
            vraaggestuurde of tijdgestuurde regeleenheid die de regeneratie automatisch activeert. Vraaggestuurde
            systemen meten het werkelijke waterverbruik en regenereren alleen wanneer nodig — dit bespaart 30–50%
            zout en water ten opzichte van oude tijdgestuurde modellen.
          </div>
        </section>

        {/* Soorten waterontharders */}
        <section id="soorten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke soorten waterontharders zijn er?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Niet elke &ldquo;waterontharder&rdquo; werkt hetzelfde. Op de markt zijn vier hoofdtypen, elk met
            eigen voor- en nadelen. Het is belangrijk om ze van elkaar te onderscheiden, want de prestaties
            lopen sterk uiteen.
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
                      Meest effectief
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm">
                  <div><span className="text-gray-400">Werking:</span> <span className="text-gray-700">{s.werking}</span></div>
                  <div><span className="text-gray-400">Effectiviteit:</span> <span className="text-gray-700">{s.effectiviteit}</span></div>
                  <div><span className="text-gray-400">Kosten:</span> <span className="text-gray-700">{s.kosten}</span></div>
                  <div><span className="text-gray-400">Nadeel:</span> <span className="text-gray-700">{s.nadeel}</span></div>
                  <div className="sm:col-span-2"><span className="text-gray-400">Beste voor:</span> <span className="text-gray-700">{s.beste_voor}</span></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Voor een diepgaande uitleg over het verlagen van waterhardheid zonder klassieke zoutontharding, lees
            ons artikel{' '}
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
            In regio&apos;s met hard water biedt een goed geïnstalleerde waterontharder concrete, merkbare
            voordelen. Hieronder de belangrijkste:
          </p>
          <div className="space-y-3">
            {[
              {
                titel: 'Geen kalkaanslag meer op kranen, tegels en douche',
                tekst:
                  'De meest zichtbare verbetering: de witte vlekken op keuken- en badkamerkranen, de kalksluier op de douchecabine en de aanslag op tegels verdwijnen. Schoonmaken wordt een stuk eenvoudiger en ontkalker is niet langer nodig.',
              },
              {
                titel: 'Langere levensduur van huishoudelijke apparaten',
                tekst:
                  'Kalk beschadigt de verwarmingselementen in waterkokers, koffiezetters, wasmachines, vaatwassers en cv-ketels. Zacht water verlengt de levensduur van deze apparaten aanzienlijk — berekeningen van VEWIN tonen aan dat kalkaanslag het energieverbruik van een verwarmingselement tot 15% kan verhogen.',
              },
              {
                titel: 'Lager energieverbruik van cv-ketel en boiler',
                tekst:
                  'Kalk isoleert verwarmingselementen en dwingt de ketel harder te werken. Een kalkvrije cv-ketel kan tot 12-15% energie besparen. Over de levensduur van de ketel kan dat een substantiële kostenbesparing opleveren.',
              },
              {
                titel: 'Minder wasmiddel en shampoo nodig',
                tekst:
                  'Zacht water schuimt beter dan hard water. Veel gebruikers merken dat ze 20-30% minder wasmiddel en shampoo nodig hebben. Ook wasverzachter is vaak niet meer nodig, omdat zacht water kleding van nature zachter houdt.',
              },
              {
                titel: 'Zachtere huid en haar',
                tekst:
                  'Hard water kan de huid uitdrogen en haar dof maken doordat mineraalzouten achterblijven op het haar en in de huidporiën. Mensen met droge huid of eczeem rapporteren regelmatig verbeteringen na overstap naar zacht water.',
              },
              {
                titel: 'Bescherming van leidingwerk',
                tekst:
                  'Op de lange termijn voorkomt ontharding ook kalkafzetting in de leidingen zelf, wat de doorstroom op peil houdt en storingen aan fittingen en appendages vermindert.',
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
            Een waterontharder is geen wondermiddel. Hieronder de voornaamste bezwaren die je eerlijk
            moet afwegen voordat je besluit een waterontharder te kopen.
          </p>
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">1. Verhoogd natriumgehalte in het drinkwater</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Bij elke Ca²⁺ of Mg²⁺ die wordt verwijderd, komen twee Na⁺ ionen vrij. In hard-watergebieden kan
                het natriumgehalte van het zachte water 100–200 mg/L bereiken, terwijl de WHO een advieswaarde
                van 200 mg/L aanhoudt. Voor gezonde volwassenen is dit geen gevaar, maar voor mensen met
                hartfalen, hoge bloeddruk of nierproblemen — en voor zuigelingen — is een aparte aftap voor
                onbehandeld of osmose-gefilterd drinkwater verstandig.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">2. Zout- en waterverbruik (milieu-impact)</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Regeneratie verbruikt 50–150 kg zout per jaar en 50–200 liter spoelwater per regeneratiecyclus.
                Het zoute spoelwater gaat naar de riolering, wat druk legt op waterzuiveringsstations. Sommige
                gemeenten ontmoedigen actief het gebruik van klassieke waterontharders om deze reden. Overleg
                altijd met de gemeente of er lokale regels gelden.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">3. Hoge aanschaf- en installatiekosten</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Een kwalitatieve ontharder met installatie kost €650–1.850. Bovendien moet het apparaat geplaatst
                worden op de hoofdwaterleiding, wat een loodgieter vereist. Bij huurwoningen is aanpassen van de
                hoofdleiding vaak niet toegestaan zonder toestemming van de verhuurder.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">4. Verwijdert alleen kalk — geen andere verontreinigingen</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Een waterontharder verwijdert calcium en magnesium, maar laat chloor, nitraten, pesticiden, PFAS,
                medicijnresten, zware metalen en microplastics ongemoeid. Wie naast kalkvrij ook schoon
                drinkwater wil, heeft een aanvullende filtratietechniek nodig — zie de vergelijking verderop op
                deze pagina.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">5. Regelmatig onderhoud vereist</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Zout bijvullen (maandelijks of tweemaandelijks), het hars periodiek desinfecteren, afsluitkranen
                controleren en het apparaat eens per jaar laten nakijken door een servicemonteur. Wie dat
                onderhoud verwaarloost, riskeert bacteriegroei in het zouttankreservoir en verslechtering van de
                ontharder.
              </p>
            </div>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Meer over de gevolgen van kalk in huis en wat je ertegen kunt doen, lees je in ons artikel{' '}
            <Link href="/kennisbank/kalk-in-huis" className="text-[#005F8A] underline hover:no-underline">
              kalk in huis: oorzaken en oplossingen
            </Link>
            .
          </p>
        </section>

        {/* Vergelijking */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waterontharder vs omgekeerde osmose vs kalkfilter
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Wie last heeft van kalk heeft meerdere opties. Hieronder vergelijken we de drie meest gebruikte
            technieken. Voor een nog diepgaandere analyse, lees ons{' '}
            <Link href="/kennisbank/waterfilter-vergelijken" className="text-[#005F8A] underline hover:no-underline">
              complete waterfilter vergelijking
            </Link>
            -artikel.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[580px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Verwijdert</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Zuiverheid</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Kosten/jr</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Natrium</th>
                </tr>
              </thead>
              <tbody>
                {vergelijking.map(r => (
                  <tr
                    key={r.type}
                    className={r.highlight ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 text-sm">{r.type}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.verwijdert}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.zuiverheid}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.kosten}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.natrium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 space-y-4">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Wanneer kies je voor een waterontharder?</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Als je primaire doel is kalkaanslag voorkomen in leidingen, cv-ketel, wasmachine en
                badkamer, en je de volledige woning wilt ontharden (inclusief douchewater), dan is een
                klassieke ionenwisselaar de meest directe oplossing. Zorg dan wel voor een aparte
                drinkwatertap met osmose-filtratie of een onbehandeld aftappunt.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Wanneer kies je voor omgekeerde osmose?</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Als je wilt dat het drinkwater écht zuiver is — vrij van chloor, nitraten, pesticiden,
                PFAS en microplastics — dan is{' '}
                <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
                  omgekeerde osmose
                </Link>{' '}
                de betere keuze voor de keukenkraan. Een osmose systeem is goedkoper in aanschaf dan
                een volledige huisontharder, vraagt minder onderhoud en voegt geen natrium toe.
              </p>
            </div>
          </div>
        </section>

        {/* Kosten */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kosten: aanschaf, installatie en zout</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De totale kosten van een waterontharder bestaan uit een eenmalig deel (aanschaf en installatie) en
            terugkerende kosten (zout, water en onderhoud). Hieronder een realistisch overzicht voor een
            gemiddeld gezin van 2–4 personen in een hard-watergebied.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[460px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Kostenpost</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Eenmalig</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Per jaar</th>
                </tr>
              </thead>
              <tbody>
                {kostentabel.map(r => (
                  <tr
                    key={r.post}
                    className={
                      r.post === 'Totaal jaarlijks'
                        ? 'bg-[#E0F2FE] font-semibold'
                        : 'border-b border-gray-100'
                    }
                  >
                    <td className="py-2.5 px-3">{r.post}</td>
                    <td className="py-2.5 px-3 text-right">{r.eenmalig}</td>
                    <td className="py-2.5 px-3 text-right">{r.perjaar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            Bedragen zijn indicatief voor een gezin van 2–4 personen, harde waterregio (18–22 °dH) en
            een vraaggestuurde ontharder. Een hars-regeneratie kost gemiddeld €1–2 per cyclus.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Let op: bovenstaande kosten gelden voor de ontharding van het volledige huishoudelijk water.
            Als je alleen het drinkwater wilt filteren, is een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              osmose-systeem onder het aanrecht
            </Link>{' '}
            aanzienlijk goedkoper in aanschaf en onderhoud.
          </p>
        </section>

        {/* Onderhoud */}
        <section id="onderhoud">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderhoud van een waterontharder</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een waterontharder vraagt regelmatig onderhoud om goed te blijven functioneren en om
            hygiënisch te blijven. Verwaarloosde ontharders kunnen een broedplaats worden voor bacteriën in
            het zouttankcompartiment. Hieronder een overzicht van de vereiste onderhoudshandelingen:
          </p>
          <div className="space-y-3">
            {[
              {
                onderdeel: 'Zout bijvullen',
                interval: 'Maandelijks of tweemaandelijks',
                actie:
                  'Controleer het zoutniveau in het brinereservoir. Gebruik speciaal onthardingszout (tabletten of blokken), geen keukenzout. Zorg dat het reservoir nooit leeg raakt — dan regenereert de ontharder zonder pekel en verliest het hars zijn capaciteit.',
              },
              {
                onderdeel: 'Brinereservoir reinigen',
                interval: 'Jaarlijks',
                actie:
                  'Leeg het zouttank en reinig het van zoutkorst en slijmvorming. Desinfecteer met een milde chlooroplossing en spoel grondig na. Dit voorkomt bacteriegroei en klontvorming van zout (bridging).',
              },
              {
                onderdeel: 'Harsbedcontrole',
                interval: 'Elke 2–3 jaar (of bij servicemonteur)',
                actie:
                  'Laat de kwaliteit van het harsbed controleren. Na 8–12 jaar verliest het hars capaciteit en moet het worden vervangen. Dit kost €150–300 exclusief arbeid.',
              },
              {
                onderdeel: 'Hardheid uitgangswater meten',
                interval: 'Halfjaarlijks',
                actie:
                  'Meet met een sneltest de hardheid van het zachte water. Als de waarde boven de ingestelde doelwaarde stijgt, is bijstelling of harsvervanging nodig.',
              },
              {
                onderdeel: 'Jaarlijkse servicebeurt',
                interval: 'Jaarlijks (aanbevolen)',
                actie:
                  'Laat een erkende monteur de ontharder controleren: lekken, ventielen, regeneratieprogramma, zout- en waterverbruik en elektrische onderdelen.',
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
        </section>

        {/* Voor wie */}
        <section id="voor-wie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voor wie is een waterontharder zinvol?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een waterontharder is niet voor iedereen even relevant. Hieronder een overzicht van situaties
            waarbij een waterontharder kopen de moeite waard is — en situaties waarbij een alternatief
            beter past.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              {
                titel: 'Woningen in hard-waterregio',
                desc:
                  'Woon je in een gemeente met water boven 15 °dH? Dan is kalkoverlast reëel en kan een ontharder de hoeveelheid schoonmaakwerk en apparaatstoringen flink verminderen.',
              },
              {
                titel: 'Bezitters van een cv-ketel of lucht-warmtepomp',
                desc:
                  'Kalkafzetting op warmtewisselaars is een van de meest voorkomende oorzaken van rendementsverlies en vroegtijdige slijtage. Zacht water beschermt uw investering.',
              },
              {
                titel: 'Gezinnen met een wasmachine en vaatwasser',
                desc:
                  'Zacht water verlengt de levensduur van verwarmingselementen in wasmachine en vaatwasser en vermindert het benodigde wasmiddel.',
              },
              {
                titel: 'Mensen met droge huid of eczeem',
                desc:
                  'Zacht douchewater laat minder mineraalresidu op huid en haar achter. Sommige mensen met droge huid of eczeem merken verbetering.',
              },
              {
                titel: 'Eigenaren van een nieuwbouwwoning',
                desc:
                  'Bij nieuwbouw is de aanleg van een ontharder eenvoudiger omdat de leidingen nog niet door kalk aangetast zijn. Integreer het systeem gelijk bij de installatie van de technische ruimte.',
              },
              {
                titel: 'Niet geschikt: huurders zonder toestemming',
                desc:
                  'Installatie op de hoofdleiding vereist doorgaans toestemming van de verhuurder. Bij huurwoningen is een osmose-systeem onder de keukenkraan een eenvoudiger alternatief.',
              },
            ].map(p => (
              <div key={p.titel} className="bg-white border border-gray-100 rounded-2xl p-4">
                <p className="font-semibold text-gray-900 mb-1 text-sm">{p.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Woon je in Amsterdam, Utrecht of een andere stad en wil je weten hoe hard het water is bij jou in
            de buurt? Bekijk onze lokale informatie, zoals{' '}
            <Link href="/waterhardheid/amsterdam" className="text-[#005F8A] underline hover:no-underline">
              waterontharder Amsterdam
            </Link>
            . We hebben voor de grootste gemeenten de waterhardheid, kalkoverlast en meest geschikte
            oplossingen op een rij gezet.
          </p>
        </section>

        {/* CTA */}
        <CTABanner context="waterhardheid" />

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/kennisbank/waterontharder',
                title: 'Kennisbank: waterontharder',
                desc: 'Diepgaande achtergrond over ionenwisseling, harsbedtypes en marktoverzicht.',
              },
              {
                href: '/kennisbank/waterhardheid-verlagen',
                title: 'Waterhardheid verlagen',
                desc: 'Alle methoden om waterhardheid te verlagen — van ontharder tot osmose.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Zoek de actuele waterhardheid op voor jouw woonplaats in Nederland.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose',
                desc: 'De alternatief voor drinkwater: 95–99% zuivering zonder natriumtoevoeging.',
              },
              {
                href: '/kennisbank/kalk-verwijderen-water',
                title: 'Kalk verwijderen uit water',
                desc: 'Overzicht van alle technieken om kalk te verwijderen of te neutraliseren.',
              },
              {
                href: '/kennisbank/kalk-in-huis',
                title: 'Kalk in huis: oorzaken en oplossingen',
                desc: 'Wat kalk doet met apparaten, leidingen en tegels — en hoe je het bestrijdt.',
              },
              {
                href: '/waterhardheid/amsterdam',
                title: 'Waterhardheid in Amsterdam',
                desc: 'Lokale waterhardheidsdata en de beste aanpak voor Amsterdamse woningen.',
              },
              {
                href: '/kennisbank/waterfilter-vergelijken',
                title: 'Waterfilter vergelijken',
                desc: 'Alle filtertypes naast elkaar: osmose, ontharder, koolstof en filterkan.',
              },
              {
                href: '/stoffen-in-drinkwater/kalk-mineralen',
                title: 'Kalk en mineralen in drinkwater',
                desc: 'Calcium, magnesium en bicarbonaat: effecten op gezondheid, apparaten en smaak.',
              },
              {
                href: '/filtertechnieken/ionenwisseling',
                title: 'Ionenwisseling als filtertechniek',
                desc: 'Hoe een harsbed werkt, regeneratie met zout en toepassingen voor ontharding.',
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
            Bekende merken op de Nederlandse en Belgische markt. Neutrale uitleg per merk, zonder
            verkoopprikkel - beoordeel altijd op de juiste capaciteit, certificering en service.
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
            <Link href="/beste-waterontharder-2026" className="text-[#005F8A] underline">beste waterontharder koopgids</Link>.
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
              <p className="text-sm text-gray-500">Is onthard water gezond? Natrium, mineralen en voor wie oplet - genuanceerd.</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Ionenwisseling: hoe werkt onthardering?</p>
              <p className="text-sm text-gray-500">De technische werking van ionenwisseling en wanneer het de juiste keuze is.</p>
            </Link>
            <Link href="/keuzehulp/hard-water" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Keuzehulp bij hard water</p>
              <p className="text-sm text-gray-500">Welke oplossing past het beste bij uw situatie: ontharder, anti-kalkfilter of osmose?</p>
            </Link>
            <Link href="/waterhardheid" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Waterhardheid in uw gemeente</p>
              <p className="text-sm text-gray-500">Zoek op postcode hoe hard het water is in uw regio.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Kalk en mineralen in drinkwater</p>
              <p className="text-sm text-gray-500">Wat zijn calcium en magnesium in water, en zijn ze schadelijk of juist gezond?</p>
            </Link>
          </div>
        </section>

        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'ILT', 'EU-richtlijn 2020/2184', 'Vewin', 'WHO – Guidelines for Drinking-water Quality']} />

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
