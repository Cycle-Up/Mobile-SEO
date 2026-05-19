import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: '5-in-1 Kokend Water Kraan: Alle Functies Uitgelegd',
  description:
    'Een 5-in-1 kokend water kraan levert kokend, koud gefilterd, warm, koud bruisend én warm bruisend water. Lees alles over CO₂-integratie, kosten en of het de.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/5-in-1' },
  openGraph: {
    title: '5-in-1 Kokend Water Kraan: Alle Functies Uitgelegd',
    description:
      'Vijf waterfuncties uit één kraan — inclusief warm bruisend water. Ontdek hoe een 5-in-1 kraan werkt, wat het extra kost en wanneer het de meerprijs waard is.',
    url: 'https://waterfilterplatform.nl/kokend-water-kraan/5-in-1',
    type: 'article',
    locale: 'nl_NL',
  },
};

const faqItems = [
  {
    question: 'Wat is het verschil tussen een 4-in-1 en een 5-in-1 kraan?',
    answer:
      'Een 4-in-1 kraan levert kokend water, koud gefilterd water, warm water en koud bruisend water. Een 5-in-1 kraan voegt daar één extra functie aan toe: warm bruisend water (ook wel "spa warm" of "pétillant chaud" genoemd). Dit is bruisend water op drinktemperatuur van circa 35–50°C — populair voor mensen die geen ijskoud bruisend water willen, maar toch koolzuur in hun glas. Qua prijs zit een 5-in-1 systeem doorgaans € 100–300 hoger dan een vergelijkbare 4-in-1 setup.',
  },
  {
    question: 'Hoe werkt de CO₂-cilinder in een 5-in-1 kraan?',
    answer:
      'De CO₂-cilinder staat in de onderkast naast de boiler en het osmosefilter. Bij 5-in-1 systemen wordt hetzelfde CO₂-reservoir gebruikt voor zowel koud als warm bruisend water. Het gas wordt vlak voor de uitloop door het water gevoerd en lost op door druk en temperatuur. Een standaard cilinder van 425 g gaat bij gemiddeld gebruik (2–4 glazen bruisend per dag) drie tot zes maanden mee. Navullen kost circa € 15–25 per keer en is bij veel supermarkten of online mogelijk.',
  },
  {
    question: 'Is een 5-in-1 kraan de meerprijs waard vergeleken met een SodaStream?',
    answer:
      'Dat hangt af van gebruik. Een SodaStream kost € 60–130 aanschaf en circa € 40–60 per jaar aan CO₂-navullingen. Een 5-in-1 kraan kost meer in aanschaf maar levert ook gefilterd, kokend en warm water — plus ruimte op het aanrecht. Als je dagelijks bruisend water drinkt én toch al een kokendwaterkraan overweegt, pakt een 5-in-1 systeem over vijf jaar voordeliger uit. Drink je zelden bruisend, dan verdient een losse SodaStream de voorkeur.',
  },
  {
    question: 'Is een 5-in-1 kraan moeilijker te installeren dan een 3-in-1 of 4-in-1?',
    answer:
      'Licht complexer, maar niet dramatisch. Je hebt dezelfde basisvereisten: een vrije WCD, een koude wateraansluiting en een afvoeraansluiting voor het osmose-spoelwater. Het enige extra element is de CO₂-cilinder die moet worden gekoppeld. De meeste 5-in-1 systemen zijn ontworpen voor doe-het-zelf installatie; de CO₂-koppeling is een simpele snelkoppeling zonder gereedschap. Gemiddelde installatietijd: 2–3 uur.',
  },
  {
    question: 'Welke gezinnen profiteren het meest van een 5-in-1 kraan?',
    answer:
      'Gezinnen die dagelijks meerdere liters bruisend water drinken — warm én koud — halen het meeste uit een 5-in-1 systeem. Denk aan huishoudens van vier of meer personen die SodaStream-flessen rondsleepen, waarbij de ene helft van het gezin koud bruisend water wil en de andere helft liever warm bruisend water drinkt. Ook voor liefhebbers van warme spa-momenten of diners waarbij warm spuitwater geserveerd wordt, is de 5e functie een echte toevoeging.',
  },
];

const vijfFuncties = [
  {
    nr: '1',
    titel: 'Kokend water (100°C)',
    tekst: 'Direct heet water voor thee, koffie, pasta, soep of blancheren. Geen waterkoker meer nodig.',
  },
  {
    nr: '2',
    titel: 'Koud gefilterd water',
    tekst: 'Puur, zacht drinkwater via omgekeerde osmose — zonder kalk, chloor of nitraatresten.',
  },
  {
    nr: '3',
    titel: 'Warm water',
    tekst: 'Normaal warm leidingwater voor dagelijks gebruik, net als een gewone mengkraan.',
  },
  {
    nr: '4',
    titel: 'Koud bruisend water',
    tekst: 'Verfrissend koolzuurhoudend water op koude temperatuur — direct uit de kraan, geen SodaStream.',
  },
  {
    nr: '5',
    titel: 'Warm bruisend water',
    tekst: 'Bruisend water op drinktemperatuur (± 35–50°C). De extra 5e functie die het systeem onderscheidt van een 4-in-1 kraan.',
  },
];

const co2Gegevens = [
  { aspect: 'Cilinder type', waarde: '425 g CO₂ (standaard SodaStream-formaat of merkspecifiek)' },
  { aspect: 'Plaatsing', waarde: 'In de onderkast naast de boiler; standaard hoogte 30–40 cm' },
  { aspect: 'Levensduur', waarde: '3–6 maanden bij 2–4 glazen bruisend per dag' },
  { aspect: 'Kosten navulling', waarde: '€ 15–25 per cilinder (supermarkt, Coolblue, diverse webshops)' },
  { aspect: 'Koppeling', waarde: 'Snelkoppeling of schroefdraad afhankelijk van merk' },
  { aspect: 'Ruimte nodig', waarde: 'Ca. 10–15 cm extra in de onderkast naast de boiler' },
];

const kostenVergelijking = [
  {
    optie: 'SodaStream Duo (apart)',
    aanschaf: '€ 100',
    jaarlijks: '€ 50 (CO₂)',
    vijfJaar: '€ 350',
    opmerking: 'Geen filter, geen kokend water, ruimte op aanrecht',
  },
  {
    optie: '4-in-1 kraan met osmose',
    aanschaf: '€ 799',
    jaarlijks: '€ 120 (filter + CO₂)',
    vijfJaar: '€ 1.399',
    opmerking: 'Kokend + gefilterd + koud bruisend; geen warm bruisend',
    highlight: false,
  },
  {
    optie: '5-in-1 kraan met osmose',
    aanschaf: '€ 949',
    jaarlijks: '€ 130 (filter + CO₂)',
    vijfJaar: '€ 1.599',
    opmerking: 'Alle vijf functies inclusief warm bruisend water',
    highlight: true,
  },
  {
    optie: 'Quooker Fusion + CUBE (5-in-1)',
    aanschaf: '€ 2.500',
    jaarlijks: '€ 100 (CO₂ + scale)',
    vijfJaar: '€ 3.000',
    opmerking: 'Premium merk, hogere aanschaf, geen osmosefilter standaard',
    highlight: false,
  },
];

const installatieStappen = [
  {
    nr: '1',
    stap: 'Controleer de ruimte onder het aanrecht',
    detail: 'Zorg voor minstens 40×40×60 cm voor boiler + osmosefilter, plus 15 cm extra voor de CO₂-cilinder.',
  },
  {
    nr: '2',
    stap: 'Monteer de kraan in het kraangat',
    detail: 'Standaard kraangat van 35–52 mm; eventueel nieuwe opening boren in composiet of RVS aanrecht.',
  },
  {
    nr: '3',
    stap: 'Sluit de koude waterleiding aan',
    detail: 'T-stuk met afsluitkraan op de koudwateraanvoer; gebruik push-fit aansluitingen voor lekvrij resultaat.',
  },
  {
    nr: '4',
    stap: 'Installeer het osmosefilter',
    detail: 'Houd de behuizing verticaal; sluit inlaat, uitlaat en afvoerslang aan op het systeem.',
  },
  {
    nr: '5',
    stap: 'Koppel de CO₂-cilinder',
    detail: 'Schroef of klik de cilinder in de CO₂-unit; controleer de koppeling op lekkage met zeepsopwater.',
  },
  {
    nr: '6',
    stap: 'Sluit aan op het stopcontact',
    detail: 'Plug de boiler in op de vrije WCD (230V); controleer of de zekering minimaal 10A is.',
  },
  {
    nr: '7',
    stap: 'Eerste flush uitvoeren',
    detail: 'Laat het osmosefilter 20 minuten doorspoelen voor eerste gebruik; gooi het eerste reservoir weg.',
  },
];

const gebruiksProfielen = [
  {
    profiel: 'Groot gezin (4+ personen)',
    match: true,
    reden:
      'Dagelijks hoog verbruik van bruisend water (koud én warm), koffie, thee en kokend water voor koken. Een 5-in-1 kraan betaalt zich hier snel terug ten opzichte van meerdere losse apparaten.',
  },
  {
    profiel: 'Koffieliefhebbers en theedrinkers',
    match: true,
    reden:
      'Puur osmosewater voor de beste smaak bij pour-over en specialty thee, gecombineerd met koud bruisend water als verfrissing — alles uit één kraan zonder aanrechtrommel.',
  },
  {
    profiel: 'Warm bruisend water liefhebbers',
    match: true,
    reden:
      'Wie warm spa-water drinkt bij het avondeten of warm koolzuurhoudend water gebruikt voor gezichtsreiniging en cocktails, is de enige die écht de 5e functie benut.',
  },
  {
    profiel: 'Kleine huishoudens (1–2 personen)',
    match: false,
    reden:
      'De meerprijs van een 5-in-1 vs 4-in-1 kraan verdien je moeilijker terug bij laag dagelijks verbruik. Een 4-in-1 kraan of zelfs een 3-in-1 met losse SodaStream kan hier voordeliger zijn.',
  },
  {
    profiel: 'Huurwoning zonder ruime onderkast',
    match: false,
    reden:
      'Een 5-in-1 systeem heeft meer ruimte nodig (boiler + osmosefilter + CO₂-cilinder). Bij weinig ruimte onder het aanrecht is een compacte 3-in-1 kraan praktischer.',
  },
];

export default function VijfInEenKraanPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kokend water kraan', url: 'https://waterfilterplatform.nl/kokend-water-kraan' },
          { name: '5-in-1 kraan', url: 'https://waterfilterplatform.nl/kokend-water-kraan/5-in-1' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: '5-in-1 Kokend Water Kraan: Alle Functies Uitgelegd',
          description:
            'Alles over de 5-in-1 kokend water kraan: de vijf functies, CO₂-integratie, kosten, installatie en wanneer het de meerprijs waard is.',
          datePublished: '2026-05-13',
          dateModified: '2026-05-13',
          url: 'https://waterfilterplatform.nl/kokend-water-kraan/5-in-1',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:text-[#005F8A]">Kokend water kraan</Link>
            <span className="mx-2">/</span>
            <span>5-in-1</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            5-in-1 Kokend Water Kraan: Alle Functies Uitgelegd
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een <strong>5-in-1 kokend water kraan</strong> levert vijf waterfuncties uit één kraanlichaam: kokend water,
            koud gefilterd water, warm water, koud bruisend water én warm bruisend water. Die vijfde functie — warm
            koolzuurhoudend water op drinktemperatuur — maakt het verschil met een{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] underline hover:no-underline">4-in-1 kraan</Link>.
            In deze gids leggen we uit hoe het systeem werkt, wat de CO₂-integratie inhoudt, wat het kost en voor
            welke huishoudens de upgrade de meerprijs waard is.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              5-in-1 kranen vergelijken →
            </Link>
            <Link
              href="/kokend-water-kraan/vergelijken"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Alle modellen vergelijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        {/* Wat zijn de 5 functies */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De vijf functies van een 5-in-1 kraan</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Waar een{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] underline hover:no-underline">4-in-1 kraan</Link>{' '}
            stopt bij vier functies, voegt de 5-in-1 variant een vijfde toe: warm bruisend water. Alle vijf functies
            worden bediend via één kraanlichaam met afzonderlijke standen of een combinatiegreep. Hieronder een
            overzicht van wat je uit de kraan kunt halen.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-4">
            {vijfFuncties.map(f => (
              <div key={f.nr} className="flex gap-3">
                <span className="flex-shrink-0 bg-[#005F8A] text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center">
                  {f.nr}
                </span>
                <div>
                  <p className="font-semibold text-gray-900">{f.titel}</p>
                  <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{f.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mt-5">
            <p className="text-sm text-gray-700">
              <strong className="text-[#003F5C]">Wat is warm bruisend water precies?</strong> Warm bruisend water
              (ook wel &ldquo;spa warm&rdquo; of pétillant chaud) is koolzuurhoudend water op een drinktemperatuur
              van circa 35–50°C. Het is populair in Italië en Duitsland, maar wint ook in Nederland terrein. Voor
              wie geen ijskoud bruisend water wil maar toch koolzuur in het glas — ideaal bij het avondeten of
              als alternatief voor frisdrank.
            </p>
          </div>
        </section>

        {/* 5-in-1 vs 4-in-1 */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">5-in-1 vs 4-in-1: wat verandert er?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] underline hover:no-underline">4-in-1 kraan</Link>{' '}
            biedt al kokend water, gefilterd koud water, warm water en koud bruisend water — een compleet pakket
            voor de meeste gezinnen. De 5-in-1 variant breidt dit uit met warm bruisend water. Dat klinkt als een
            kleine stap, maar de techniek die erachter zit is iets complexer: het systeem moet het CO₂-gas
            mengen met water op een hogere temperatuur zonder dat het koolzuur direct verdampt. Dat vereist
            een nauwkeuriger druk-temperatuurregeling in de CO₂-unit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-3">4-in-1 kraan</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Kokend water (100°C)',
                  'Koud gefilterd water (osmose)',
                  'Warm water (normaal gebruik)',
                  'Koud bruisend water',
                  '—',
                ].map((f, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className={i < 4 ? 'text-green-600 font-bold mt-0.5' : 'text-gray-300'}>
                      {i < 4 ? '✓' : '✗'}
                    </span>
                    <span className={i === 4 ? 'text-gray-400 italic' : ''}>{i === 4 ? 'Warm bruisend' : f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-gray-400">Indicatief: € 799–999</p>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-4 border border-[#005F8A]">
              <h3 className="font-semibold text-[#003F5C] mb-3">5-in-1 kraan</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Kokend water (100°C)',
                  'Koud gefilterd water (osmose)',
                  'Warm water (normaal gebruik)',
                  'Koud bruisend water',
                  'Warm bruisend water (35–50°C)',
                ].map((f, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-green-600 font-bold mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-gray-400">Indicatief: € 949–1.099</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-5">
            De extra meerprijs van een 5-in-1 ten opzichte van een 4-in-1 ligt doorgaans tussen de € 100 en € 300,
            afhankelijk van het merk en het model. Het verschil in jaarlijkse onderhoudskosten is minimaal: het
            CO₂-verbruik neemt licht toe als je ook warm bruisend water gebruikt, maar de filterkosten blijven
            hetzelfde.
          </p>
        </section>

        {/* CO₂-cilinder integratie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">CO₂-cilinder: werking, plaatsing en kosten</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het bruisende water in een 5-in-1 kraan — zowel koud als warm — komt van een CO₂-cilinder die is
            ingebouwd in de onderkast. Die cilinder staat doorgaans rechtop naast de boiler en het osmosefilter,
            verbonden met de waterunit via een druksysteem dat het gas op de juiste dosering inbrengt.
          </p>
          <div className="space-y-2 mb-5">
            {co2Gegevens.map(r => (
              <div key={r.aspect} className="flex gap-3 border-b border-gray-100 py-2.5 text-sm">
                <span className="text-gray-500 w-36 shrink-0 font-medium">{r.aspect}</span>
                <span className="text-gray-700">{r.waarde}</span>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Hoe vaak moet je de cilinder vervangen?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            De vervangingsfrequentie hangt sterk af van gebruik. Bij een gezin van vier dat dagelijks twee tot drie
            glazen bruisend water per persoon drinkt, gaat een 425 g cilinder gemiddeld twee tot drie maanden mee.
            Drinkt het gezin ook warm bruisend water, dan verbruikt het systeem iets meer CO₂ vanwege het licht
            verhoogde temperatuurproces. Reken op € 60–120 per jaar aan CO₂-kosten bij intensief gebruik.
          </p>
          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Waar koop je navulcilinders?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Navullen kan via de leverancier van de kraan (vaak een wisselservice), bij Coolblue, Action of specifieke
            waterspeciaalzaken. Sommige merken gebruiken een merkspecifieke cilinder (zoals Quooker CUBE); andere —
            waaronder de meeste 5-in-1 systemen — werken met een standaard 60 L of 425 g cilinder die breed
            beschikbaar is.
          </p>
          <div className="bg-[#E0F2FE]/50 border-l-4 border-[#005F8A] rounded-r-xl p-4">
            <p className="text-sm text-gray-700">
              <strong className="text-[#003F5C]">Praktische tip:</strong> houd altijd een reservecilinder in huis,
              zodat je niet zonder bruisend water zit terwijl je wacht op bezorging. De wisseling zelf duurt
              minder dan twee minuten en vereist geen gereedschap.
            </p>
          </div>
        </section>

        {/* Is het de meerprijs waard? */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Is de 5e functie de meerprijs waard? Kostenanalyse</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De meest gestelde vraag bij de 5-in-1 kraan: is warm bruisend water het extra bedrag waard? Dat hangt
            van twee factoren af — hoe vaak je de 5e functie daadwerkelijk gebruikt, en hoe dat afsteekt tegen
            het alternatief (een losse SodaStream of een 4-in-1 kraan).
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[540px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-right">Aanschaf</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-right">Per jaar</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-right">5 jaar totaal</th>
                </tr>
              </thead>
              <tbody>
                {kostenVergelijking.map(r => (
                  <tr
                    key={r.optie}
                    className={`border-b border-gray-100 ${r.highlight ? 'bg-[#E0F2FE]/40 font-medium' : ''}`}
                  >
                    <td className="py-2.5 px-3 text-gray-800">
                      {r.optie}
                      {r.highlight && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">
                          Aanbevolen
                        </span>
                      )}
                      <p className="text-xs text-gray-400 font-normal">{r.opmerking}</p>
                    </td>
                    <td className="py-2.5 px-3 text-right text-gray-700">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-right text-gray-700">{r.jaarlijks}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A]">{r.vijfJaar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-5">
            Indicatief, 4-persoonshuishouden, energiekosten € 0,30/kWh, gebruik mei 2026.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De conclusie: als je al een{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] underline hover:no-underline">4-in-1 kraan</Link>{' '}
            overweegt en dagelijks bruisend water drinkt — zowel koud als warm — betaal je voor de 5-in-1 variant
            slechts € 150–200 meer over vijf jaar. Vergeleken met een SodaStream erbij is de 5-in-1 duidelijk
            aantrekkelijker: minder ruimte, minder handelingen, beter gefilterd water.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-[#003F5C]">Vergelijking met Quooker:</strong> een Quooker Fusion + CUBE biedt
            ook warm en koud bruisend water, maar kost al snel € 2.500 of meer in aanschaf, zonder osmosefilter
            standaard inbegrepen. Over vijf jaar is het kostenverschil met een 5-in-1 osmose kraan meer dan € 1.400.
            Lees het gedetailleerde overzicht op de{' '}
            <Link href="/kokend-water-kraan/vergelijken" className="text-[#005F8A] underline hover:no-underline">
              vergelijkpagina
            </Link>
            .
          </p>
        </section>

        {/* Installatie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Installatie: complexer dan 3-in-1 of 4-in-1?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een 5-in-1 kraan is iets complexer te installeren dan een 3-in-1 — puur vanwege het extra component:
            de CO₂-cilinder. Ten opzichte van een 4-in-1 kraan is het verschil echter minimaal, omdat een
            4-in-1 ook al een CO₂-eenheid heeft. Het installatieproces volgt zeven logische stappen en is
            door de meeste doe-het-zelvers te doen in twee tot drie uur.
          </p>
          <div className="space-y-3">
            {installatieStappen.map(s => (
              <div key={s.nr} className="flex gap-4 border border-gray-100 rounded-xl p-4">
                <span className="flex-shrink-0 bg-[#005F8A] text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  {s.nr}
                </span>
                <div>
                  <p className="font-semibold text-gray-800">{s.stap}</p>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-5">
            Zorg voor een vrije WCD (230V) in de onderkast en minimaal 50–60 cm onderkasthoogte voor de complete
            installatie van boiler + osmosefilter + CO₂-cilinder. Heb je geen stopcontact in de kast?
            Laat dat voor de installatie plaatsen door een elektricien — dit kost typisch € 80–150 extra.
          </p>
          <div className="bg-[#E0F2FE]/50 border-l-4 border-[#005F8A] rounded-r-xl p-4 mt-4">
            <p className="text-sm text-gray-700">
              <strong className="text-[#003F5C]">Ruimtevereisten samengevat:</strong> boiler (30×40×40 cm) +
              osmosefilter (10×10×35 cm) + CO₂-cilinder (10–15 cm diameter, 30–40 cm hoog). Een standaard
              60 cm brede keukenonderkast heeft hier doorgaans voldoende ruimte voor.
            </p>
          </div>
        </section>

        {/* Voor wie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voor wie is een 5-in-1 kraan de beste keuze?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Een 5-in-1 kraan is niet voor elk huishouden de logische stap. Hieronder een eerlijk overzicht van
            wie er het meeste profijt van heeft — en wanneer een 4-in-1 of zelfs een 3-in-1 slimmer is.
          </p>
          <div className="space-y-3">
            {gebruiksProfielen.map(p => (
              <div
                key={p.profiel}
                className={`rounded-xl border p-4 flex gap-3 items-start ${
                  p.match
                    ? 'border-green-200 bg-green-50/50'
                    : 'border-gray-100 bg-gray-50/50'
                }`}
              >
                <span className={`text-xl shrink-0 mt-0.5 ${p.match ? 'text-green-600' : 'text-gray-300'}`}>
                  {p.match ? '✓' : '✗'}
                </span>
                <div>
                  <p className="font-semibold text-gray-800">{p.profiel}</p>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{p.reden}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-5">
            Twijfel je of een 5-in-1 kraan past bij jouw situatie? De{' '}
            <Link href="/kokend-water-kraan/vergelijken" className="text-[#005F8A] underline hover:no-underline">
              vergelijkpagina
            </Link>{' '}
            legt alle modellen naast elkaar, zodat je op basis van jouw specifieke wensen en budget de juiste
            keuze kunt maken.
          </p>
        </section>

        {/* Onderhoud */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderhoud van een 5-in-1 kraan</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het onderhoud van een 5-in-1 kraan verschilt nauwelijks van een 4-in-1. Er zijn drie terugkerende
            taken: filterwissels, CO₂-navulling en jaarlijkse controle van aansluitingen.
          </p>
          <div className="space-y-3">
            {[
              {
                freq: 'Elke 6–12 maanden',
                taak: 'Osmose voorfilter wisselen',
                desc: 'Het sediment- en koolstofvoorfilter vervangt u jaarlijks (of vaker bij hard water). Kosten: € 40–60 per filterpatroon.',
              },
              {
                freq: 'Elke 1–2 jaar',
                taak: 'Osmosemembraan controleren / vervangen',
                desc: 'Het membraan heeft een langere levensduur. Test de filterkwaliteit met een TDS-meter of via de indicatielampjes van het systeem.',
              },
              {
                freq: 'Elke 3–6 maanden',
                taak: 'CO₂-cilinder wisselen',
                desc: 'Zodra het bruisende water minder prikkelend wordt, is de cilinder bijna leeg. Wisselen duurt twee minuten.',
              },
              {
                freq: 'Jaarlijks',
                taak: 'Aansluitingen en lekbak controleren',
                desc: 'Check alle push-fit aansluitingen visueel. Een lekbak onder de boiler voorkomt waterschade bij een kleine lekkage.',
              },
              {
                freq: 'Per kwartaal',
                taak: 'Kraanmond reinigen',
                desc: 'Verwijder eventuele kalkafzetting op de uitloop met een zachte doek en citroenzuuroplossing.',
              },
            ].map(o => (
              <div key={o.taak} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <div className="shrink-0">
                  <span className="text-[10px] font-semibold text-[#005F8A] bg-[#E0F2FE] px-2 py-0.5 rounded-full whitespace-nowrap">
                    {o.freq}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{o.taak}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Jaarlijkse onderhoudskosten voor een 5-in-1 kraan met gemiddeld gebruik: € 100–150 (filter + CO₂).
            Dat is vergelijkbaar met een 4-in-1 kraan — het CO₂-gebruik neemt licht toe als de vijfde functie
            regelmatig wordt gebruikt.
          </p>
        </section>

        {/* Quooker CUBE vs 5-in-1 */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Quooker CUBE vs 5-in-1 kraan met osmose: een eerlijk beeld</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De bekendste 5-in-1 variant op de Nederlandse markt is de Quooker Fusion met CUBE-module — de combinatie
            die warm en koud bruisend water, kokend water én de standaard kraan combineert. Een 5-in-1 kraan met osmose
            biedt hetzelfde functiepakket en voegt daar een volledig osmosefilter aan toe als standaard onderdeel.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-100 bg-white p-4">
              <h3 className="font-bold text-gray-900 mb-3">Quooker Fusion + CUBE</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  ['Aanschaf', '€ 2.200–2.800'],
                  ['Osmosefilter', 'Nee (koolstoffilter in CUBE)'],
                  ['Installatie', 'Via dealer aanbevolen'],
                  ['Garantie', 'Meerjarig via dealer'],
                  ['CO₂-cilinder', 'Merkspecifiek (CUBE-cilinder)'],
                  ['Reputatie', 'Premium, marktleider NL'],
                ].map(([k, v]) => (
                  <li key={k} className="flex justify-between gap-2">
                    <span className="text-gray-500">{k}</span>
                    <span className="font-medium text-right">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#005F8A] bg-[#E0F2FE] p-4">
              <h3 className="font-bold text-gray-900 mb-3">5-in-1 kraan met osmose <span className="text-xs bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full ml-1">Beste waarde</span></h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  ['Aanschaf', '€ 949–1.099'],
                  ['Osmosefilter', 'Standaard inbegrepen'],
                  ['Installatie', 'Zelf of installateur'],
                  ['Garantie', '2–5 jaar'],
                  ['CO₂-cilinder', 'Standaard 425 g (breed verkrijgbaar)'],
                  ['Service', 'Nederlands, directe support'],
                ].map(([k, v]) => (
                  <li key={k} className="flex justify-between gap-2">
                    <span className="text-gray-600">{k}</span>
                    <span className="font-medium text-right">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-5">
            <strong className="text-[#003F5C]">Onze conclusie:</strong> de Quooker CUBE is een uitstekend product
            met uitstekende naam- en merkwaarde. Maar voor wie de beste prijs-kwaliteitverhouding zoekt —
            inclusief osmosefilter en breed verkrijgbare CO₂-cilinders — biedt een 5-in-1 kraan met osmose meer voor minder.
            Het prijsverschil over vijf jaar bedraagt meer dan € 1.400.
          </p>
        </section>

        {/* CTA Banner */}
        <CTABanner context="kokend" />

        {/* Verdere leesgids */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kokend-water-kraan', label: 'Kokend water kraan: complete gids' },
              { href: '/4-in-1-kraan', label: '4-in-1 kraan uitgelegd' },
              { href: '/kokend-water-kraan/vergelijken', label: 'Alle modellen vergelijken' },
              { href: '/omgekeerde-osmose/kopen', label: '4-in-1/5-in-1 osmosekraan vergelijken' },
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
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over de 5-in-1 kraan</h2>
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

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose filtertechniek</h3>
              <p className="text-sm text-gray-600">Hoe het osmosefilter in een 5-in-1 kraan werkt en waarom een hoog TDS-percentage duidt op membraanvervanging.</p>
            </Link>
            <Link href="/keuzehulp/installatie-type" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Installatietype keuzehulp</h3>
              <p className="text-sm text-gray-600">Onderbouw, aanrecht of inbouw: welk installattype past bij uw keuken en welke aansluiting de 5-in-1 kraan vereist.</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
