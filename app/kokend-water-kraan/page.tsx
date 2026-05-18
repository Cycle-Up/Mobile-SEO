import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kokend water kraan kopen? Complete gids & vergelijking 2026',
  description:
    'Kokend water kraan: hoe werkt het, welke merken zijn er en wat zijn de kosten? Vergelijk Quooker, Grohe, Insinkerator en 4-in-1 systemen met osmose in deze.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan' },
  openGraph: {
    title: 'Kokend water kraan — hoe werkt het en welk merk past bij jou?',
    description:
      'Direct 100°C water uit de kraan. Vergelijk merken, prijzen, filteropties en vind de beste kokend water kraan voor jouw keuken.',
    url: 'https://waterfilterplatform.nl/kokend-water-kraan',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe werkt een kokend water kraan?',
    answer:
      'Een kokend water kraan heeft een geïsoleerd reservoir onder het aanrecht dat het water constant op ongeveer 100°C houdt. Door een dubbele veiligheidsvergrendeling (druk-en-draai) komt het kokende water alleen vrij als je de kraan bewust activeert. Zo heb je direct 100°C water zonder waterkoker.',
  },
  {
    question: 'Is een kokend water kraan veilig in gebruik?',
    answer:
      'Ja. Moderne kokend water kranen hebben een dubbele veiligheidsontgrendeling en een kindslot. De buitenkant van de kraan blijft koel zodat je hem kunt aanraken. Het water komt als een fijne, niet-spattende straal naar buiten en de systemen voldoen aan EU-normen voor watertemperatuur en drukventielen.',
  },
  {
    question: 'Hoeveel stroom verbruikt een kokend water kraan per jaar?',
    answer:
      'Een gemiddelde kokend water kraan verbruikt 10-30 watt in stand-by, wat neerkomt op zo\'n 90-220 kWh per jaar. Bij een stroomprijs van € 0,30 per kWh zit je tussen € 27 en € 65 per jaar. Bij dagelijks gebruik is dat vergelijkbaar met — of zelfs lager dan — een waterkoker die je meerdere keren per dag opzet.',
  },
  {
    question: 'Wat is het verschil tussen een kokend water kraan met en zonder filter?',
    answer:
      'Een kokend water kraan zonder filter levert wel kokend water maar filtert het leidingwater niet. Met een ingebouwd osmosefilter krijg je ook puur, kalkvrij water — beter voor koffie en thee, geen kalkaanslag in de tank en je beschermt je apparaten. Een 4-in-1 kraan combineert kokend, koud gefilterd, warm en bruisend water.',
  },
  {
    question: 'Wat kost een kokend water kraan inclusief installatie?',
    answer:
      'Een eenvoudige kokend water kraan kost € 500-1.000 inclusief installatie. Een complete 4-in-1 kraan met osmosefilter kost € 699-899 en is zelf te installeren. Quooker-modellen variëren van € 1.500 tot € 2.800 inclusief loodgieterkosten. Reken daarnaast op € 30-80 per jaar voor filters en energie.',
  },
  {
    question: 'Hoe lang gaat een kokend water kraan mee?',
    answer:
      'De kraan zelf gaat 10-15 jaar mee. De boiler/tank onder het aanrecht heeft een levensduur van 8-12 jaar, afhankelijk van waterhardheid en onderhoud. Bij hard water is een osmosefilter sterk aanbevolen omdat het kalkaanslag in de tank voorkomt en de levensduur aanzienlijk verlengt.',
  },
  {
    question: 'Past een kokend water kraan in elke keuken?',
    answer:
      'Bijna altijd. Je hebt onder het aanrecht ruimte nodig van ongeveer 30x40x40 cm voor de boiler, een stopcontact (WCD) en een aansluiting op de koudwaterleiding. In een kleine keuken kan de compactere 2-liter tank uitkomst bieden. Voor een 4-in-1 kraan met osmose is iets extra ruimte nodig voor het filter.',
  },
  {
    question: 'Hoe vaak moet je het filter van een kokend water kraan vervangen?',
    answer:
      'Bij een kokend water kraan met osmosefilter vervang je het filterpatroon meestal eenmaal per jaar. Het osmose-membraan zelf gaat 2-3 jaar mee. Standaard kokend water kranen zonder filter hebben geen filtervervanging nodig, maar wel periodieke ontkalking als je hard water hebt.',
  },
  {
    question: 'Kan ik een kokend water kraan zelf installeren?',
    answer:
      'Een 4-in-1 kraan met osmose is ontworpen voor doe-het-zelf installatie en duurt 1-2 uur. Je hebt enkele standaard gereedschappen nodig en een vrije WCD onder het aanrecht. Bij andere merken laat je de installatie vaak door een loodgieter doen (€ 150-300 extra). Lees onze stap-voor-stap installatiegids voor de details.',
  },
  {
    question: 'Wat is het verschil tussen een kokend water kraan en een heet water kraan?',
    answer:
      'In de praktijk worden de termen door elkaar gebruikt. Strikt genomen levert een heet water kraan water tussen 70°C en 98°C (ideaal voor de meeste theesoorten en directe afwas), terwijl een kokend water kraan echt 100°C levert (voor koken, blancheren en pasta). Veel 4-in-1 modellen leveren beide temperaturen vanuit dezelfde kraan.',
  },
];

const vergelijking = [
  {
    merk: '4-in-1 kraan met osmose',
    prijs: '€ 699 – 899',
    tank: '2,5 liter',
    functies: ['Kokend (100°C)', 'Koud gefilterd', 'Warm', 'Bruisend'],
    filter: 'Omgekeerde osmose ingebouwd',
    garantie: '5 jaar',
    installatie: 'Zelf te installeren',
    highlight: true,
    note: 'Beste prijs-kwaliteit met osmose erin',
  },
  {
    merk: 'Quooker Combi+',
    prijs: '€ 1.500 – 2.000',
    tank: '3 / 7 liter',
    functies: ['Kokend (100°C)'],
    filter: 'Geen (optioneel CUBE voor bruisend)',
    garantie: '2 jaar',
    installatie: 'Door loodgieter',
    highlight: false,
    note: 'Marktleider, stille tank, premium afwerking',
  },
  {
    merk: 'Quooker Fusion + CUBE',
    prijs: '€ 2.200 – 2.800',
    tank: '3 / 7 liter',
    functies: ['Kokend', 'Koud', 'Warm', 'Bruisend (CUBE)'],
    filter: 'Geen RO (CUBE is CO₂ + koolstof)',
    garantie: '2 jaar',
    installatie: 'Door loodgieter',
    highlight: false,
    note: 'Compleet pakket maar fors prijskaartje',
  },
  {
    merk: 'Grohe Red Duo',
    prijs: '€ 1.100 – 1.700',
    tank: '4 / 7 liter',
    functies: ['Kokend (100°C)', 'Koud / warm via mengkraan'],
    filter: 'Geen (los kalkfilter beschikbaar)',
    garantie: '5 jaar',
    installatie: 'Door loodgieter',
    highlight: false,
    note: 'Duitse kwaliteit, ruime tankcapaciteit',
  },
  {
    merk: 'InSinkErator 3N1 / 4N1',
    prijs: '€ 600 – 1.100',
    tank: '2,5 liter',
    functies: ['Heet (98°C)', 'Koud', 'Warm', '4N1: ook gefilterd'],
    filter: '4N1: koolstoffilter (geen RO)',
    garantie: '2 jaar',
    installatie: 'Door loodgieter aanbevolen',
    highlight: false,
    note: 'Amerikaans merk, levert 98°C i.p.v. 100°C',
  },
];

const tcoTabel = [
  { item: 'Aanschaf kraan + installatie', pureaqua: '€ 799', quooker: '€ 1.800' },
  { item: 'Energie (5 jaar à € 50/jr)', pureaqua: '€ 250', quooker: '€ 250' },
  { item: 'Filterpatronen / onderhoud', pureaqua: '€ 250 (5x € 50)', quooker: '€ 0 — € 150' },
  { item: 'Bruisend water / CO₂', pureaqua: '€ 100 (CO₂-cilinders)', quooker: '€ 250 (CUBE-cilinders)' },
  { item: 'Totale eigendomskosten 5 jaar', pureaqua: '€ 1.399', quooker: '€ 2.300 — € 2.450' },
];

const voordelen = [
  { icon: '⚡', titel: 'Direct klaar', tekst: 'Geen wachten op de waterkoker — kokend water binnen 1 seconde uit de kraan' },
  { icon: '🏡', titel: 'Stijlvol & ruimte', tekst: 'Geen waterkoker meer op het aanrecht: cleaner keukenblad en extra werkruimte' },
  { icon: '💰', titel: 'Energiezuinig', tekst: 'Bij dagelijks gebruik goedkoper dan een waterkoker die je meerdere keer per dag opzet' },
  { icon: '☕', titel: 'Betere koffie & thee', tekst: 'Constante temperatuur voor specialty coffee en perfecte theebereiding' },
  { icon: '🧼', titel: 'Hygiënisch', tekst: 'Gesloten tanksysteem voorkomt stof en kalkaanslag zoals in een open waterkoker' },
  { icon: '🍝', titel: 'Sneller koken', tekst: 'Pasta-, rijst- en aardappelpan vullen met kokend water — direct aan de slag' },
];

const nadelen = [
  { titel: 'Hogere aanschafprijs', tekst: 'Een kokend water kraan kost € 500-2.800 versus € 20-100 voor een waterkoker. Terugverdienen kan, maar duurt jaren.' },
  { titel: 'Installatie en ruimte', tekst: 'Onder het aanrecht is een boiler nodig (ca. 30x40x40 cm) plus een stopcontact. In een minimalistische keukenkast kan dat krap zijn.' },
  { titel: 'Stand-by stroomverbruik', tekst: 'De boiler verbruikt 24/7 een kleine hoeveelheid stroom (10-30W), ook als je een week op vakantie bent.' },
  { titel: 'Vervanging op termijn', tekst: 'De tank gaat 8-12 jaar mee. Daarna is vervanging nodig — afhankelijk van het merk een fors bedrag.' },
  { titel: 'Kalkgevoeligheid', tekst: 'In gebieden met hard water (zoals delen van Noord-Holland en Limburg) ontkalkt de tank sneller zonder filter. Een osmosefilter lost dit op.' },
];

export default function KokendWaterKraanPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kokend water kraan', url: 'https://waterfilterplatform.nl/kokend-water-kraan' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Kokend water kraan kopen? Complete gids & vergelijking 2026',
          description:
            'Alles over de kokend water kraan: werking, soorten, merken, kosten, installatie en onderhoud.',
          datePublished: '2026-01-10',
          dateModified: '2026-05-13',
          url: 'https://waterfilterplatform.nl/kokend-water-kraan',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Kokend water kraan</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Met een kokend water kraan (ook wel kokendwaterkraan) heb je direct 100°C water uit de kraan — geen waterkoker, geen wachten. In deze complete gids leggen we uit hoe een kokend water kraan werkt, welke soorten er zijn, wat ze kosten en welke systemen — Quooker, Grohe, InSinkErator en 4-in-1 met osmose — het beste bij jouw keuken passen.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/kokend-water-kraan/vergelijken" className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm">
              Merken vergelijken →
            </Link>
            <Link href="/kokend-water-kraan/met-filter" className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm">
              Kraan met filter
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <QuickAnswer answer="Een kokend water kraan levert direct 100°C heet water via een geïsoleerde boiler onder het aanrecht. De beste modellen combineren kokend, koud, warm en bruisend water in één kraanpunt. Een 4-in-1 uitvoering met osmosefilter beschermt bovendien de boiler tegen kalkafzetting en geeft gefilterd drinkwater." />

        {/* Wat is een kokend water kraan */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is een kokend water kraan?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een kokend water kraan is een keukenkraan die water levert van rond de 100°C, direct en onder druk. Onder het aanrecht zit een kleine, sterk geïsoleerde boiler die het water continu op temperatuur houdt. Je hoeft geen waterkoker meer aan te zetten en hoeft niet meer te wachten — handig voor thee, koffie, pasta, rijst, soep, blancheren of een snelle kom instant noodles.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Nederland zijn kokend water kranen sinds de jaren '90 populair geworden, mede dankzij de opmars van het merk Quooker. Inmiddels bieden ook merken als Grohe, InSinkErator en diverse andere aanbieders een eigen variant. De moderne generatie kranen combineert kokend water vaak met andere functies zoals gefilterd koud water, warm water en bruisend water — in één kraan.
          </p>
          <div className="bg-[#E0F2FE]/50 border-l-4 border-[#005F8A] rounded-r-xl p-4 my-4">
            <p className="text-sm text-gray-700">
              <strong className="text-[#003F5C]">Kokend water kraan vs heet water kraan:</strong> in de praktijk worden de termen vaak door elkaar gebruikt. Strikt genomen levert een <Link href="/heet-water-kraan" className="text-[#005F8A] underline hover:no-underline">heet water kraan</Link> water tussen 70 en 98°C, terwijl een kokend water kraan echte 100°C levert. Veel premium kranen kunnen beide.
            </p>
          </div>
        </section>

        {/* Hoe werkt het */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt een kokend water kraan?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een kokend water kraan bestaat uit drie kerncomponenten: de kraan zelf op het aanrecht, de geïsoleerde boilertank eronder, en de aansluitingen op het waternet en het stroomnet. De boiler is doorgaans gemaakt van roestvast staal of titanium, zit in een vacuümgeïsoleerde behuizing en houdt water op ongeveer 108°C onder lichte overdruk — dat klinkt heet, maar het voorkomt schuimen en zorgt dat het water bij de uitloop precies 100°C is.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm mb-4">
            {[
              { nr: '1', label: 'Aansluiting', desc: 'Boiler verbonden met koudwaterleiding en WCD' },
              { nr: '2', label: 'Verwarmen', desc: 'Element houdt water op ~108°C onder druk' },
              { nr: '3', label: 'Vergrendeling', desc: 'Druk-en-draai opent de kokendwaterstroom' },
            ].map(s => (
              <div key={s.nr} className="bg-white rounded-xl p-4">
                <div className="w-8 h-8 bg-[#005F8A] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">
                  {s.nr}
                </div>
                <p className="font-semibold text-gray-800">{s.label}</p>
                <p className="text-gray-500 text-xs mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-[#003F5C] mt-6 mb-2">De geïsoleerde boilertank</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            De tank is het hart van de kokend water kraan. Capaciteiten variëren van 2 tot 7 liter. Een kleinere tank (2-3L) past gemakkelijk in elke keukenkast en is energiezuiniger. Een grotere tank (4-7L) is interessant voor grote gezinnen of mensen die regelmatig veel kokend water tegelijk gebruiken — bijvoorbeeld om een grote pan pasta of een kan thee voor visite te vullen.
          </p>
          <h3 className="text-lg font-semibold text-[#003F5C] mt-6 mb-2">Veiligheidsfunctie en kindslot</h3>
          <p className="text-gray-700 leading-relaxed">
            Alle moderne kokend water kranen hebben een dubbele bediening: je moet de greep eerst indrukken én vervolgens draaien (push-and-twist) om kokend water te activeren. Dit voorkomt ongelukken met kinderen of per ongeluk een hand onder de kraan. Veel modellen hebben ook een visuele indicatie (verlichte ring) zodat je ziet wanneer kokend water actief is. De kraan zelf blijft koel aan de buitenkant dankzij dubbelwandige constructie, en het systeem voldoet aan EU-normen voor watertemperatuur en drukbeveiliging.
          </p>
        </section>

        {/* Soorten */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke soorten kokend water kranen zijn er?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Niet elke kokend water kraan is gelijk. Op basis van functies onderscheiden we drie hoofdtypes, plus een variant die de kraan combineert met een waterfilter.
          </p>
          <div className="space-y-3">
            {[
              {
                titel: '2-in-1: alleen kokend water',
                tekst: 'Een aparte kraan naast de mengkraan, exclusief voor kokend water. Geen koud of warm water uit deze kraan. Voorbeeld: Quooker Nordic of Flex (basisuitvoering). Prijs: € 800-1.500.',
              },
              {
                titel: '3-in-1: kokend + koud + warm',
                tekst: 'Vervangt je bestaande mengkraan: één kraan voor kokend, koud en warm leidingwater. Het meest gekochte type. Voorbeeld: Quooker Combi+ of Grohe Red Duo. Prijs: € 1.100-2.000.',
              },
              {
                titel: '4-in-1: kokend + koud + warm + bruisend (of gefilterd)',
                tekst: 'De meest complete kraan. Levert alle vier de temperaturen plus bruisend of gefilterd water. Voorbeeld: 4-in-1 kraan met osmose (filter ingebouwd) of Quooker Fusion + CUBE. Prijs: € 699-2.800.',
              },
            ].map(t => (
              <div key={t.titel} className="border border-gray-100 rounded-xl p-4 bg-white">
                <p className="font-semibold text-[#003F5C] mb-1">{t.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{t.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Tank-capaciteit verschilt ook per type. Voor een gemiddeld huishouden (1-4 personen) volstaat een 2-3 liter tank. Bij grotere gezinnen of veelgebruikers (groot theerituelen, dagelijks pasta) is een 4-7 liter tank verstandiger. Een grotere tank verbruikt iets meer stand-by stroom maar levert meer kokend water achter elkaar zonder dat de temperatuur tijdelijk zakt.
          </p>
        </section>

        {/* Kokend water kraan met filter */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is een kokend water kraan met filter?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een groeiend deel van de markt is een <Link href="/kokend-water-kraan/met-filter" className="text-[#005F8A] underline hover:no-underline">kokend water kraan met ingebouwd filter</Link>. De meest geavanceerde variant gebruikt <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">omgekeerde osmose (RO)</Link>: een membraan dat 95-99% van alle opgeloste stoffen verwijdert. Het resultaat is kokend en koud water dat smaakneutraal is, vrijwel kalkvrij en zonder chloor- of nitraatresten.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het grote voordeel van een combinatie kokend water + osmose: de boiler verkalkt niet meer aan de binnenkant, omdat het ingaande water al gefilterd is. Dat verlengt de levensduur van de tank substantieel, vooral in gebieden met <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">hard water</Link>. Daarnaast smaken je koffie en thee merkbaar beter omdat de mineraalbalans rustiger is.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Een 4-in-1 kraan met osmose combineert osmose, kokend, koud, warm én <Link href="/kennisbank/bruisend-water-thuis" className="text-[#005F8A] underline hover:no-underline">bruisend water</Link> in één kraan. Bij Quooker zit het bruisend water in een aparte CUBE-unit met CO₂ en koolstoffilter — geen volledige RO-filtering. Bij Grohe en InSinkErator zijn filters meestal optioneel (los koolstoffilter, geen osmose).
          </p>
        </section>

        {/* Merken vergeleken */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke bekende merken zijn er en hoe vergelijken ze?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hieronder zetten we de vier grootste merken op de Nederlandse markt naast elkaar. We kijken naar prijs, tankcapaciteit, functies, filteropties en garantie. Een uitgebreide head-to-head vind je op de <Link href="/kokend-water-kraan/vergelijken" className="text-[#005F8A] underline hover:no-underline">vergelijkpagina</Link>.
          </p>
          <div className="space-y-3">
            {vergelijking.map(v => (
              <div
                key={v.merk}
                className={`rounded-2xl border p-4 ${v.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="font-bold text-gray-900">{v.merk}</span>
                    {v.highlight && (
                      <span className="ml-2 text-xs bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full">Aanbevolen</span>
                    )}
                  </div>
                  <span className="font-semibold text-[#005F8A] shrink-0 text-sm">{v.prijs}</span>
                </div>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-gray-600 mb-2">
                  <div><span className="text-gray-400">Tank:</span> {v.tank}</div>
                  <div><span className="text-gray-400">Garantie:</span> {v.garantie}</div>
                  <div className="col-span-2"><span className="text-gray-400">Filter:</span> {v.filter}</div>
                  <div className="col-span-2"><span className="text-gray-400">Installatie:</span> {v.installatie}</div>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {v.functies.map(f => (
                    <span key={f} className="text-xs bg-white border border-gray-200 rounded-full px-2 py-0.5 text-gray-600">{f}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 italic">{v.note}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-5">
            <strong className="text-[#003F5C]">Onze eerlijke beoordeling:</strong> Quooker is de premium marktleider met een uitstekende reputatie, stille tank en jaren ervaring — als budget geen issue is, krijg je een topproduct. Grohe Red Duo combineert Duitse engineering met een ruime tank en 5 jaar garantie. InSinkErator is een betaalbare Amerikaanse optie, maar levert 98°C in plaats van echte 100°C. Een 4-in-1 kraan met osmose onderscheidt zich met de combinatie kokend + osmose + bruisend in één kraan, een prijs onder duizend euro en doe-het-zelf installatie. Wie filtering, bruisend water én een eerlijke prijs wil, vindt in dit type systeem de beste prijs-kwaliteitverhouding.
          </p>
        </section>

        {/* Voordelen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voordelen van een kokend water kraan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {voordelen.map(v => (
              <div key={v.titel} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <span className="text-2xl shrink-0">{v.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800">{v.titel}</p>
                  <p className="text-sm text-gray-600">{v.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Voor veel huishoudens is het belangrijkste argument simpelweg het gemak: nooit meer wachten op een waterkoker, nooit meer koud water uit de kraan laten lopen voor je warm water krijgt, en altijd de exacte hoeveelheid kokend water die je nodig hebt — niet de hele waterkoker.
          </p>
        </section>

        {/* Nadelen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Nadelen en aandachtspunten</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een kokend water kraan is een fijne aanwinst, maar het is geen impulsaankoop. Houd rekening met de volgende punten voordat je beslist.
          </p>
          <div className="space-y-3">
            {nadelen.map(n => (
              <div key={n.titel} className="border-l-4 border-amber-400 bg-amber-50/50 rounded-r-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{n.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{n.tekst}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Veiligheid */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Veiligheid van een kokend water kraan</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Veiligheid is misschien wel de grootste zorg bij ouders en nieuwe gebruikers. Begrijpelijk — er stroomt letterlijk 100°C water uit een kraan op heuphoogte. De industrie heeft daar de afgelopen decennia veel aandacht aan besteed en moderne kokend water kranen voldoen aan strikte EU-normen voor watertemperatuur, drukventielen en oppervlaktetemperatuur.
          </p>
          <ul className="space-y-2 text-gray-700">
            {[
              'Push-and-twist bediening: alleen kokend water als je bewust beide handelingen doet',
              'Kindslot: extra blokkering die je optioneel kunt activeren',
              'Koele buitenkant: de kraan blijft aanraakbaar dankzij dubbelwandige constructie',
              'Anti-spat uitloop: het kokend water komt als een gerichte, fijne straal naar buiten',
              'Drukventiel in de tank: extra druk wordt automatisch afgevoerd',
              'Visuele indicatie: een verlichte ring laat zien wanneer kokend water actief is',
            ].map(t => (
              <li key={t} className="flex gap-2 items-start">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Praktische tip: bespreek de werking even met kinderen vanaf een jaar of vier en oefen samen het indrukken-en-draaien. De meeste ouders ervaren een kokend water kraan na een paar weken als minstens zo veilig als — of veiliger dan — een waterkoker met snoer op het aanrecht.
          </p>
        </section>

        {/* Installatie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Installatie: wat heb je nodig?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor de installatie van een kokend water kraan heb je drie dingen nodig onder het aanrecht: een aansluiting op de koudwaterleiding, een vrije wandcontactdoos (WCD) op 230V, en voldoende ruimte voor de boilertank. Ruimte-eisen verschillen per merk, maar reken op ongeveer 30 cm breed, 40 cm diep en 40 cm hoog voor een standaard 3-liter tank.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
            {[
              { titel: 'Waterleiding', tekst: 'T-stuk op koudwatertoevoer met afsluitkraan' },
              { titel: 'Stopcontact', tekst: 'Vrije WCD met aarding (230V, max 2400W)' },
              { titel: 'Ruimte', tekst: '30×40×40 cm vrij in kastje, ventilatie aanbevolen' },
            ].map(b => (
              <div key={b.titel} className="bg-[#E0F2FE]/50 rounded-xl p-4">
                <p className="font-semibold text-[#003F5C] text-sm mb-1">{b.titel}</p>
                <p className="text-xs text-gray-600">{b.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een 4-in-1 kraan met osmose is bewust ontworpen voor doe-het-zelf installatie: alle aansluitingen zijn push-fit (geen soldeerwerk), de installatiehandleiding bevat een stappenplan en gemiddeld ben je in 1-2 uur klaar. Quooker en Grohe adviseren in de regel installatie door een loodgieter, wat € 150-300 extra kost.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Voor de complete stap-voor-stap handleiding inclusief checklist, foto's en tips, lees onze <Link href="/kennisbank/kokend-water-kraan-installeren" className="text-[#005F8A] underline hover:no-underline">installatiegids voor een kokend water kraan</Link>. Goed om te weten: een 4-in-1 kraan met osmosefilter heeft naast de tank ook ruimte nodig voor het filterelement (typisch 10×10×35 cm) en een afvoeraansluiting voor het spoelwater.
          </p>
        </section>

        {/* Kosten over 5 jaar */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kosten over 5 jaar (TCO)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De aanschafprijs is slechts één deel van het verhaal. Voor een eerlijke vergelijking kijk je naar de totale eigendomskosten (Total Cost of Ownership) over de levensduur. Hieronder een realistische schatting voor een gezinshuishouden over 5 jaar, vergeleken tussen een 4-in-1 kraan met osmose en een gemiddelde Quooker Combi+ setup.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-4 font-semibold text-[#003F5C]">Kostenpost</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-center">4-in-1 kraan met osmose</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-center">Quooker Combi+</th>
                </tr>
              </thead>
              <tbody>
                {tcoTabel.map(r => (
                  <tr key={r.item} className="border-b border-gray-100">
                    <td className="py-2.5 px-4 text-gray-700">{r.item}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.pureaqua}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.quooker}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Bedragen indicatief, gebaseerd op gemiddeld huishoudgebruik (2-4 personen) en prijzen mei 2026.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Over 5 jaar bespaar je met een 4-in-1 kraan met osmose ongeveer € 900-1.000 vergeleken met een Quooker-setup met bruisend water. Belangrijker dan het absolute bedrag is wat je terugkrijgt: een 4-in-1 systeem met osmose-filtering levert kalk- en chloorvrij water, wat bij Quooker een aparte upgrade vergt of helemaal niet mogelijk is.
          </p>
        </section>

        {/* Energieverbruik */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Energieverbruik in de praktijk</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Veel mensen denken dat een kraan die constant kokend water op temperatuur houdt enorm veel stroom verbruikt. In werkelijkheid valt het mee. Een moderne kokend water kraan met goede isolatie verbruikt 10-30 watt in stand-by — vergelijkbaar met een spaarlamp of nachtlampje. Over een jaar betekent dat ongeveer 90-220 kWh.
          </p>
          <div className="bg-gray-50 rounded-xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2">Vergelijking energieverbruik per jaar</p>
            <ul className="space-y-1.5 text-sm text-gray-700">
              <li className="flex justify-between gap-2"><span>Kokend water kraan (stand-by + gebruik)</span><span className="text-gray-500">~120 kWh</span></li>
              <li className="flex justify-between gap-2"><span>Waterkoker (3x per dag, vol gevuld)</span><span className="text-gray-500">~150 kWh</span></li>
              <li className="flex justify-between gap-2"><span>Waterkoker (5x per dag, vol gevuld)</span><span className="text-gray-500">~250 kWh</span></li>
              <li className="flex justify-between gap-2"><span>Waterkoker (1x per dag, half vol)</span><span className="text-gray-500">~25 kWh</span></li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            De conclusie: bij dagelijks intensief gebruik is een kokend water kraan vergelijkbaar of zelfs zuiniger dan een waterkoker. Bij sporadisch gebruik (een keer per dag) is een waterkoker zuiniger. Voor de meeste Nederlandse huishoudens — waar de waterkoker meerdere keren per dag op gaat — komt het qua energie ongeveer op hetzelfde neer.
          </p>
        </section>

        {/* Onderhoud */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderhoud van een kokend water kraan</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een kokend water kraan vraagt verrassend weinig onderhoud. De belangrijkste taken zijn ontkalken, filterwissel (bij gefilterde varianten) en periodieke lekcontrole.
          </p>
          <div className="space-y-3">
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-1">Ontkalken</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Zonder filter krijg je in gebieden met hard water (zie onze <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">waterhardheidskaart</Link>) na 1-2 jaar kalkafzetting in de tank. Ontkalken doe je met een specifiek ontkalkingsmiddel via de inlaat — meestal eenmaal per jaar. Bij osmose-gefilterde varianten is dit vrijwel niet nodig.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-1">Filterwissel</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Bij een 4-in-1 met osmose vervang je het filterpatroon eenmaal per jaar (€ 40-60). Het membraan zelf gaat 2-3 jaar mee. De kraan geeft vaak een visuele indicatie wanneer het tijd is. Bij koolstoffilters (Grohe, InSinkErator) is wisseling elke 6-12 maanden. Lees meer over <Link href="/kennisbank/waterfilter-keuken" className="text-[#005F8A] underline hover:no-underline">waterfilters in de keuken</Link>.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-1">Lekcontrole</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Check 1-2x per jaar visueel of de aansluitingen droog zijn. Een klein lekje aan een fitting kan op termijn voor waterschade in het kastje zorgen. Een lekbak onder de boiler is een goedkope verzekering.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-1">Reiniging van de kraan</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Veeg de kraan dagelijks af met een zachte doek. Vermijd schurende middelen of chloorhoudende reinigers — die beschadigen de coating. Vinger- en kalkvlekken verwijder je het beste met een microvezeldoekje en wat allesreiniger op waterbasis.
              </p>
            </div>
          </div>
        </section>

        {/* Voor wie geschikt */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voor wie is een kokend water kraan geschikt?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een kokend water kraan is een investering en niet voor iedereen even relevant. Hieronder de typische profielen die er het meeste profijt van hebben.
          </p>
          <div className="space-y-3">
            {[
              {
                titel: 'Gezinnen met kinderen',
                tekst: 'Snel een pak macaroni koken, pasta opzetten of een fles voeding klaarmaken — een kokend water kraan scheelt enorm in de drukke gezinsfase. Met kindslot is het veiliger dan een waterkoker met snoer.',
              },
              {
                titel: 'Theedrinkers en koffieliefhebbers',
                tekst: 'Voor specialty thee en pour-over koffie is precieze temperatuur cruciaal. Een kokend water kraan met osmose-filter levert direct 100°C water zonder kalk of chloorsmaak — perfect voor de smaak.',
              },
              {
                titel: 'Ouders van baby\'s',
                tekst: 'Voor het maken van flesvoeding is steriel kokend water aanbevolen. Een kokend water kraan met osmose-filter geeft schoon, kalkarm water dat snel op de juiste temperatuur is. (Volg altijd het advies van consultatiebureau / kinderarts.)',
              },
              {
                titel: 'Kleine keukens',
                tekst: 'Geen waterkoker meer op het aanrecht en geen waterfles in de koelkast — alles uit één kraan. Vooral handig in compacte stadsappartementen waar elke vierkante centimeter telt.',
              },
              {
                titel: 'Mensen met hard water',
                tekst: 'In gebieden met hard water (zoals delen van Limburg, Noord-Brabant en Noord-Holland) is een kokend water kraan mét osmose-filter een verstandige keuze. Geen kalk in de waterkoker, geen witte aanslag op de kraan en geen kalkrand in je thee.',
              },
              {
                titel: 'Duurzaam levenden',
                tekst: 'Geen plastic flessen mineraalwater meer en geen overcapaciteit kokend water meer (je tapt precies wat je nodig hebt). In combinatie met een osmose-filter ook geen plastic flessen bruisend water meer.',
              },
            ].map(p => (
              <div key={p.titel} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{p.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{p.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Voor wie zelden warme drank drinkt, vrijwel nooit pasta of rijst kookt en in een huurwoning zit met weinig kastruimte, is een waterkoker waarschijnlijk nog steeds de praktische keuze. Wil je weten of een waterontharder of <Link href="/kennisbank/osmose-water" className="text-[#005F8A] underline hover:no-underline">osmose-water</Link> meer voor jou zou betekenen? Bekijk dan onze diepteartikelen.
          </p>
        </section>

        {/* CTA Banner */}
        <CTABanner context="kokend" />

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kokend-water-kraan/vergelijken', label: 'Alle merken vergelijken + TCO' },
              { href: '/kokend-water-kraan/met-filter', label: 'Kokend water kraan met filter' },
              { href: '/heet-water-kraan', label: 'Heet water kraan: alles erover' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose uitleg' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose filter kopen' },
              { href: '/kennisbank/kokend-water-kraan-installeren', label: 'Zelf installeren: stappenplan' },
              { href: '/kennisbank/bruisend-water-thuis', label: 'Bruisend water thuis maken' },
              { href: '/kennisbank/waterfilter-keuken', label: 'Waterfilter in de keuken' },
              { href: '/waterhardheid', label: 'Waterhardheid per gemeente' },
              { href: '/kennisbank/osmose-water', label: 'Wat is osmose-water?' },
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

        {/* Orphaned sub-pages */}
        <section>
          <h2 className="text-2xl font-semibold text-[#003F5C] mb-4">Meer over kokend water kranen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/kokend-water-kraan/boiler" className="border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-[#003F5C] group-hover:text-[#005F8A] text-sm">De boilertank uitgelegd</h3>
              <p className="text-xs text-gray-500 mt-1">Werking, materialen en levensduur van de onderbouwtank.</p>
            </Link>
            <Link href="/kokend-water-kraan/5-in-1" className="border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-[#003F5C] group-hover:text-[#005F8A] text-sm">5-in-1 kokend water kraan</h3>
              <p className="text-xs text-gray-500 mt-1">Alles over modellen met vijf functies in één kraanpunt.</p>
            </Link>
            <Link href="/kokend-water-kraan/prijs-per-liter" className="border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-[#003F5C] group-hover:text-[#005F8A] text-sm">Kosten per liter kokend water</h3>
              <p className="text-xs text-gray-500 mt-1">Wat betaal je werkelijk per liter? Vergelijking met de waterkoker.</p>
            </Link>
            <Link href="/kokend-water-kraan/duurzaamheid" className="border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-[#003F5C] group-hover:text-[#005F8A] text-sm">Duurzaamheid & milieu</h3>
              <p className="text-xs text-gray-500 mt-1">Ecologische voetafdruk, levensduur en minder plasticafval.</p>
            </Link>
            <Link href="/kokend-water-kraan/huurwoning" className="border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-[#003F5C] group-hover:text-[#005F8A] text-sm">Kokend water kraan in huurwoning</h3>
              <p className="text-xs text-gray-500 mt-1">Wat mag, wat is mogelijk en hoe vraag je toestemming aan de verhuurder.</p>
            </Link>
            <Link href="/kokend-water-kraan/kinderveiligheid" className="border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-[#003F5C] group-hover:text-[#005F8A] text-sm">Kinderveiligheid</h3>
              <p className="text-xs text-gray-500 mt-1">Kindsloten, veiligheidsontgrendeling en tips voor gezinnen met kleine kinderen.</p>
            </Link>
            <Link href="/kokend-water-kraan/installateur" className="border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-[#003F5C] group-hover:text-[#005F8A] text-sm">Installateur inschakelen</h3>
              <p className="text-xs text-gray-500 mt-1">Wanneer heb je een loodgieter nodig en wat kost installatie door een vakman?</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over de kokend water kraan</h2>
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
