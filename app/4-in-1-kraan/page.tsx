import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export function generateMetadata(): Metadata {
  return {
    title: '4-in-1 kraan: alles over kokend, koud & bruisend water',
    description:
      'Alles over de 4-in-1 kraan: hoe werkt het systeem, wat kost het, welke merken zijn er en wanneer is zo\'n kraan de juiste keuze? Complete gids inclusief kostentabel.',
    alternates: { canonical: 'https://waterfilterplatform.nl/4-in-1-kraan' },
    openGraph: {
      title: '4-in-1 kraan: kokend, koud, warm en bruisend water uit één kraan',
      description:
        'Ontdek hoe een 4-in-1 kraan werkt, wat het kost en welk merk het beste bij jou past. Inclusief vergelijkingstabel en 5-jaar kostenberekening.',
      url: 'https://waterfilterplatform.nl/4-in-1-kraan',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is een 4-in-1 kraan precies?',
    answer:
      'Een 4-in-1 kraan levert vier waterfuncties uit één enkel kraanlichaam: kokend water (100°C), koud gefilterd water, warm water voor normaal gebruik en bruisend water. Het systeem bestaat uit een speciale kraan, een compacte boiler of reservoir onder het aanrecht, een CO₂-cilinder voor het koolzuur en meestal een omgekeerde osmose filter voor de filterstap. Je vervangt daarmee zowel je gewone mengkraan als een losse koffie- of theewaterkraan. De bekendste categorie is de geïntegreerde 4-in-1 osmosekraan.',
  },
  {
    question: 'Wat is het verschil tussen een 4-in-1 kraan kopen en een Quooker met CUBE?',
    answer:
      'Een Quooker met CUBE-module biedt vergelijkbare functies maar bestaat uit meerdere losstaande componenten die je bij elkaar koopt. Een geïntegreerde 4-in-1 kraan met osmosefilter is ontworpen als geïntegreerd systeem waarbij boiler, osmose filter en CO₂-unit al op elkaar zijn afgestemd. Qua prijs: een Quooker Fusion met CUBE-module kost al snel meer dan € 2.500 inclusief installatie, terwijl een complete 4-in-1 osmosekraan rond de € 699–899 ligt.',
  },
  {
    question: 'Hoe veilig is een 4-in-1 kraan met kokend water?',
    answer:
      'Alle serieuze 4-in-1 kranen hebben een dubbele veiligheidsvergrendeling voor de kokendwaterstand: je moet bewust twee handelingen tegelijk uitvoeren voordat het water stroomt. De buitenkant van de kraan wordt niet heet. Let bij aankoop op CE-markering en een kinderslot of gelijkwaardige beveiliging.',
  },
  {
    question: 'Hoeveel kokend water kan een 4-in-1 kraan leveren?',
    answer:
      'De meeste 4-in-1 systemen hebben een reservoir van 2,5 tot 5 liter dat constant op temperatuur wordt gehouden. Bij normaal gebruik (thee, koffie, pasta) is dat ruimschoots voldoende voor een gemiddeld huishouden. Na hoog gebruik duurt het enkele minuten voor het reservoir weer volledig op temperatuur is.',
  },
  {
    question: 'Kan ik een 4-in-1 kraan zelf installeren?',
    answer:
      'Ja, als je standaard aansluitingen (koud water en afvoer) onder je aanrecht hebt. De meeste 4-in-1 systemen worden geleverd met een Nederlandstalige installatiehandleiding en de meeste klanten plaatsen het systeem zelf in twee tot vier uur. Voor de CO₂-aansluiting heb je geen speciaal gereedschap nodig. Een installateur is optioneel maar niet verplicht.',
  },
  {
    question: 'Wat kost het onderhoud van een 4-in-1 kraan per jaar?',
    answer:
      'Je hebt twee soorten terugkerende kosten: filterwissels en CO₂-navulling. Een osmose filterset kost gemiddeld € 60–110 per jaar afhankelijk van het merk en watergebruik. Een CO₂-cilinder voor bruisend water gaat circa 3–6 maanden mee en kost bij navulling € 15–25. Totaal kom je gemiddeld uit op € 90–150 per jaar aan verbruiksartikelen.',
  },
  {
    question: 'Is een 4-in-1 kraan ook geschikt voor hard water?',
    answer:
      'Juist. Het omgekeerde osmose filter dat in de meeste 4-in-1 systemen zit verwijdert een groot deel van de kalk (calciumcarbonaat) die verantwoordelijk is voor hardheid. Dat beschermt niet alleen het systeem zelf maar levert ook zachter, lekkerder smakend water op. Woon je in een harde waterregio zoals Noord-Holland, Utrecht of Limburg? Dan is dit extra relevant.',
  },
  {
    question: 'Welke 4-in-1 kraan heeft de beste prijs-kwaliteitsverhouding?',
    answer:
      'Voor de meeste huishoudens biedt een geïntegreerde 4-in-1 kraan met osmosefilter de beste combinatie van prijs en functies: het complete systeem met osmose filter, boiler en CO₂-unit ligt rond € 699–899, inclusief twee jaar garantie. Quooker is meer naam en status maar kost bij vergelijkbare functies significant meer. Grohe Red en Franke bieden minder functies voor een vergelijkbare of hogere prijs.',
  },
];

const voordelen = [
  {
    aspect: 'Prijs over 5 jaar',
    losseApparaten: 'Koffiewaterkraan € 250 + waterkoker € 60 + SodaStream € 100 + mengkraan € 200 = € 610 aanschaf + jaarlijks kosten',
    vierInEen: 'Compleet systeem ± € 800 aanschaf + ± € 120/jaar verbruik = ± € 1.400 over 5 jaar',
    winnaar: 'Vergelijkbaar of lager bij 4-in-1',
  },
  {
    aspect: 'Ruimte',
    losseApparaten: 'Waterkoker op aanrecht, SodaStream op aanrecht, meerdere aansluitingen onder aanrecht',
    vierInEen: 'Alleen de kraan zelf; alles onder aanrecht — geen aanrechtruimte kwijt',
    winnaar: '4-in-1',
  },
  {
    aspect: 'Filterkwaliteit',
    losseApparaten: 'Geen standaard filter bij losse apparaten; koolstoffilter optioneel',
    vierInEen: 'Omgekeerde osmose verwijdert kalk, chloor, nitraat en microplastics',
    winnaar: '4-in-1',
  },
  {
    aspect: 'Gebruiksgemak',
    losseApparaten: 'Meerdere apparaten, meerdere acties voor elke watersoort',
    vierInEen: 'Alles uit één kraan, onmiddellijk beschikbaar',
    winnaar: '4-in-1',
  },
  {
    aspect: 'CO₂-gebruik bruisend water',
    losseApparaten: 'SodaStream: fles navullen of wisselen, minder praktisch',
    vierInEen: 'Ingebouwde CO₂-cilinder; stiller en eenvoudiger te wisselen',
    winnaar: '4-in-1',
  },
  {
    aspect: 'Flexibiliteit / aanpasbaarheid',
    losseApparaten: 'Elk apparaat afzonderlijk te vervangen of upgraden',
    vierInEen: 'Één systeem; upgrade vergt kraan vervangen',
    winnaar: 'Losse apparaten',
  },
];

const merken = [
  {
    naam: '4-in-1 kraan met osmose',
    prijs: '€ 699–899',
    functies: 'Kokend, koud gefilterd, warm, bruisend',
    osmose: 'Ja (standaard)',
    bruisend: 'Ja (standaard)',
    garantie: '2 jaar',
    installatie: 'Zelf of installateur',
    highlight: true,
    notitie: 'Volledigste functiepakket voor de laagste prijs',
  },
  {
    naam: 'Quooker Fusion + CUBE',
    prijs: '€ 2.200–2.800',
    functies: 'Kokend, koud, warm, bruisend',
    osmose: 'Nee (optioneel scale control)',
    bruisend: 'Via CUBE-module',
    garantie: 'Meerjarig via dealer',
    installatie: 'Aanbevolen via dealer',
    highlight: false,
    notitie: 'Bekendste naam in NL; hoger prijspunt',
  },
  {
    naam: 'Grohe Blue Home / Red',
    prijs: '€ 900–2.000',
    functies: 'Kokend of gefilterd, koud, warm',
    osmose: 'Nee',
    bruisend: 'Bij Blue Home-modellen',
    garantie: 'Via dealer',
    installatie: 'Aanbevolen via dealer',
    highlight: false,
    notitie: 'Sterk design; gefocust op koel/bruisend of kokend, niet beide tegelijk',
  },
  {
    naam: 'Franke Vital / Mondial',
    prijs: '€ 800–1.500',
    functies: 'Gefilterd koud/bruisend of kokend',
    osmose: 'Nee',
    bruisend: 'Bij bepaalde modellen',
    garantie: 'Via dealer',
    installatie: 'Via dealer',
    highlight: false,
    notitie: 'Zwitsers merk; goede bouwkwaliteit maar minder functies gecombineerd',
  },
];

const tco5jaar = [
  {
    set: '4-in-1 kraan met osmose',
    aanschaf: '€ 799',
    installatie: '€ 0 (zelf)',
    filtersCO2: '€ 120/jaar',
    energie: '± € 35/jaar',
    totaal5jaar: '± € 1.574',
    highlight: true,
  },
  {
    set: 'Quooker Fusion + CUBE',
    aanschaf: '€ 2.500',
    installatie: '€ 250',
    filtersCO2: '€ 80/jaar (CO₂ + scale)',
    energie: '± € 35/jaar',
    totaal5jaar: '± € 3.325',
    highlight: false,
  },
  {
    set: 'Grohe Blue Home',
    aanschaf: '€ 1.400',
    installatie: '€ 200',
    filtersCO2: '€ 90/jaar',
    energie: '± € 30/jaar',
    totaal5jaar: '± € 2.250',
    highlight: false,
  },
  {
    set: 'Losse apparaten (koker + SodaStream + filter)',
    aanschaf: '€ 610',
    installatie: '€ 0',
    filtersCO2: '€ 110/jaar',
    energie: '± € 20/jaar',
    totaal5jaar: '± € 1.260',
    highlight: false,
  },
];

export default function VierInEenKraanPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: '4-in-1 kraan', url: 'https://waterfilterplatform.nl/4-in-1-kraan' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: '4-in-1 kraan: alles over kokend, koud & bruisend water',
          description:
            'Complete gids over de 4-in-1 kraan: werking, systemen, kosten, merken en onderhoud.',
          datePublished: '2026-05-01',
          dateModified: '2026-05-13',
          url: 'https://waterfilterplatform.nl/4-in-1-kraan',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>4-in-1 kraan</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            4-in-1 kraan: kokend, koud, warm én bruisend water uit één kraan
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Een <strong>4-in-1 kraan</strong> vervangt je gewone mengkraan, waterkoker, bruiswater-apparaat én waterfilter in één geïntegreerd systeem.
            Op deze pagina lees je hoe het systeem werkt, wat het kost, welke merken er zijn en wanneer zo&rsquo;n kraan de juiste keuze is — of juist niet.
            Of je nu zoekt naar een <strong>4 in 1 kraan</strong> of specifiek een <strong>4-in-1 kraan kopen</strong> overweegt: hier staat alles wat je nodig hebt.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kokend-water-kraan"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Kokend water kranen →
            </Link>
            <Link
              href="/kokend-water-kraan/met-filter"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Kraan met filter
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        {/* Wat is een 4-in-1 kraan */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is een 4-in-1 kraan?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een 4-in-1 kraan is een keukenkraan die vier waterfuncties integreert in één kraanlichaam. De naam zegt het al:
            vier functies, één kraan. Afhankelijk van het model en de fabrikant zijn die vier functies doorgaans:
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-5">
            {[
              { nr: '1', titel: 'Kokend water (100°C)', tekst: 'Direct heet water voor thee, koffie, pasta of soep — uit een geïsoleerd reservoir onder het aanrecht.' },
              { nr: '2', titel: 'Koud gefilterd water', tekst: 'Puur, gefilterd koud water via een omgekeerde osmose filter of koolstoffilter.' },
              { nr: '3', titel: 'Warm water', tekst: 'Normaal warm leidingwater voor afwassen en dagelijks gebruik, zoals bij een gewone mengkraan.' },
              { nr: '4', titel: 'Bruisend water', tekst: 'Koolzuurhoudend water via een ingebouwde CO₂-cilinder — direct uit de kraan, geen losse SodaStream meer.' },
            ].map(f => (
              <div key={f.nr} className="flex gap-3">
                <span className="flex-shrink-0 bg-[#005F8A] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">{f.nr}</span>
                <div>
                  <p className="font-semibold text-gray-800">{f.titel}</p>
                  <p className="text-gray-600 mt-0.5">{f.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Het systeem vervangt daarmee meerdere losse apparaten: je waterkoker, SodaStream of bruiswater-apparaat, een eventuele
            aanrechtfilter en je gewone mengkraan. Alles wordt aangestuurd via één kraan met meerdere standen — waarbij het kokend
            water altijd achter een dubbele veiligheidsbeveiliging zit.
          </p>
        </section>

        {/* Hoe werkt het systeem */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt het systeem: boiler, osmose en CO₂</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een 4-in-1 kraan bestaat niet alleen uit de kraan zelf. Onder het aanrecht — in de kast of in een lege ruimte — zitten
            de componenten die het systeem doen werken. Elk onderdeel vervult een specifieke taak.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">De boiler of het reservoir</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                De kern van het systeem is een geïsoleerd reservoir — ook wel boiler of tank — dat water constant op of nabij
                100°C houdt. Het volume loopt uiteen van 2,5 tot 5 liter afhankelijk van het model. Dankzij de isolatielaag
                verbruikt de boiler ook in standby weinig energie: gemiddeld € 30–40 per jaar. Zodra je de kokendwaterstand
                opent, stroomt het hete water direct door de kraan.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">Het omgekeerde osmose filter</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                De meeste 4-in-1 systemen zijn gekoppeld aan een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose filter</Link>.
                Dat systeem perst water onder druk door een semipermeable membraan dat kalk, chloor, nitraten, PFAS en microplastics
                tegenhoudt. Het resultaat is puur, zacht water dat zowel via de koude filterstand als via de kokendwaterstand
                de kraan verlaat. De filtermembraan heeft een levensduur van 1–2 jaar afhankelijk van gebruik en waterhardheid.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">De CO₂-unit voor bruisend water</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Voor het bruisende water gebruikt het systeem een CO₂-cilinder — vergelijkbaar met die van een SodaStream,
                maar vaak in een iets ander formaat afhankelijk van het merk. De cilinder staat in de onderkast en is
                eenvoudig te wisselen zodra hij leeg is. Afhankelijk van gebruik (frequentie en gasintensiteit) gaat een
                cilinder drie tot zes maanden mee. Lees meer over <Link href="/kennisbank/bruisend-water-thuis" className="text-[#005F8A] underline">bruisend water thuis</Link> voor
                een dieper inzicht in de CO₂-technologie.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            De drie componenten — boiler, osmose filter en CO₂-unit — werken samen met de kraan als stuurpunt. Bij een goed
            ontworpen systeem zijn ze al op elkaar afgestemd, waardoor druk, debiet en temperatuur optimaal samenwerken.
          </p>
        </section>

        {/* Voordelen vs losse apparaten */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">4-in-1 kraan vs losse apparaten: vergelijking</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Veel mensen hebben al een waterkoker, SodaStream en misschien een aanrechtfilter. Waarom dan upgraden naar een
            4-in-1 systeem? En wanneer zijn losse apparaten eigenlijk handiger? De vergelijking hieronder laat de
            praktische voor- en nadelen zien.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Aspect</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Losse apparaten</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">4-in-1 kraan</th>
                </tr>
              </thead>
              <tbody>
                {voordelen.map(v => (
                  <tr key={v.aspect} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-semibold text-gray-800">{v.aspect}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs leading-relaxed">{v.losseApparaten}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs leading-relaxed">{v.vierInEen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">
            Indicatieve vergelijking op basis van gemiddeld gebruik, 4-persoonshuishouden. Losse apparaten kunnen voordeliger uitvallen als je al beschikt over waterkoker en SodaStream.
          </p>
        </section>

        {/* Soorten 4-in-1 kranen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Soorten 4-in-1 kranen</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Niet elk systeem dat zichzelf &ldquo;4-in-1&rdquo; noemt is hetzelfde. Er zijn drie hoofdcategorieën op de markt,
            elk met een andere opbouw en functieomvang.
          </p>
          <div className="space-y-4">
            {[
              {
                type: 'Geïntegreerd 4-in-1 systeem',
                beschrijving: 'Boiler, osmose filter en CO₂-unit zijn ontworpen als één pakket en werken samen via de kraan. Dit is de meest gebruiksvriendelijke variant. Voorbeelden: geïntegreerde 4-in-1 osmosekranen, bepaalde Quooker-combinaties.',
                geschiktVoor: 'Huishoudens die maximaal gemak willen zonder losstaande apparaten.',
              },
              {
                type: '3-in-1 of kokend + filter (zonder bruisend)',
                beschrijving: 'Systemen die kokend water en gefilterd koud water leveren maar geen ingebouwde CO₂-functie hebben. Geschikt als je bruisend water minder belangrijk vindt.',
                geschiktVoor: 'Thee- en koffieliefhebbers die puur water willen maar geen bruisend water drinken.',
              },
              {
                type: 'Modulair systeem (optionele uitbreiding)',
                beschrijving: 'Begint als 2-in-1 of 3-in-1 met de optie later een CO₂-module of osmose-unit toe te voegen. Meer flexibel, maar duurder als je alles later uitbreidt.',
                geschiktVoor: 'Mensen die nu een budget hebben voor de basis en later willen uitbreiden.',
              },
            ].map(s => (
              <div key={s.type} className="rounded-xl border border-gray-100 p-4">
                <h3 className="font-bold text-gray-900 mb-1">{s.type}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">{s.beschrijving}</p>
                <p className="text-xs text-[#005F8A] font-medium">Geschikt voor: {s.geschiktVoor}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Merken vergeleken */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Merken vergeleken</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Hieronder staan de vier meest verkochte merken in de 4-in-1 categorie naast elkaar. Let op welke functies
            standaard inbegrepen zijn en welke extra kosten of modules nodig zijn.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[700px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Merk</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Prijs</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Osmose</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Bruisend</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Garantie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Installatie</th>
                </tr>
              </thead>
              <tbody>
                {merken.map(m => (
                  <tr key={m.naam} className={`border-b border-gray-100 ${m.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">
                      {m.naam}
                      {m.highlight && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Aanbevolen</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-700">{m.prijs}</td>
                    <td className="py-2.5 px-3 text-gray-700">{m.osmose}</td>
                    <td className="py-2.5 px-3 text-gray-700">{m.bruisend}</td>
                    <td className="py-2.5 px-3 text-gray-700">{m.garantie}</td>
                    <td className="py-2.5 px-3 text-gray-700">{m.installatie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-3">
            {merken.map(m => (
              <div
                key={m.naam}
                className={`rounded-xl border p-4 ${m.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-3 mb-1">
                  <p className="font-bold text-gray-900">{m.naam}</p>
                  <span className="font-semibold text-[#005F8A] shrink-0 text-sm">{m.prijs}</span>
                </div>
                <p className="text-sm text-gray-600">{m.notitie}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-5">
            Wil je weten hoe een 4-in-1 kraan met osmose zich specifiek verhoudt tot Quooker? Lees onze gedetailleerde pagina over het{' '}
            <Link href="/quooker-alternatief" className="text-[#005F8A] underline">Quooker alternatief</Link> of bekijk
            hoe de 4-in-1 osmosekraan scoort ten opzichte van het{' '}
            <Link href="/grohe-red-alternatief" className="text-[#005F8A] underline">Grohe Red alternatief</Link>.
          </p>
        </section>

        {/* Installatievereisten */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Installatievereisten</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voordat je een 4-in-1 kraan koopt, is het verstandig te controleren of je aanrecht en onderkast aan de minimale
            vereisten voldoen. De meeste installaties zijn eenvoudiger dan je denkt, maar een paar aandachtspunten spelen altijd een rol.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                punt: 'Kraangat in het aanrecht',
                tekst: 'Je hebt een bestaand kraangat of een geschikte plek nodig om de 4-in-1 kraan te monteren. Standaard maat: 35–52 mm diameter afhankelijk van het merk.',
              },
              {
                punt: 'Koude wateraansluiting',
                tekst: 'Een standaard koude waterkraan (3/8 of 1/2 inch) onder het aanrecht is vereist. Vrijwel elke Nederlandse keuken heeft dit al aanwezig.',
              },
              {
                punt: 'Afvoer voor osmosewater',
                tekst: 'Het omgekeerde osmose filter produceert een kleine hoeveelheid spoelwater die wordt afgevoerd. Je hebt een afvoer of koppeling op de bestaande afvoerbuis nodig.',
              },
              {
                punt: 'Stopcontact (230V)',
                tekst: 'De boiler heeft stroom nodig. Er moet een stopcontact in de onderkast aanwezig zijn of worden geïnstalleerd door een elektricien.',
              },
              {
                punt: 'Onderkastdiepte',
                tekst: 'De meeste boiler-units zijn 30–40 cm diep en 25–35 cm breed. Standaard keukens met 60 cm diepe lades hebben voldoende ruimte.',
              },
              {
                punt: 'CO₂-ruimte',
                tekst: 'De CO₂-cilinder heeft extra ruimte nodig van circa 10–15 cm hoogte en diameter. Controleer de afmetingen van het specifieke model.',
              },
            ].map(p => (
              <div key={p.punt} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 text-sm mb-1">{p.punt}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{p.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Meer details over de installatieprocedure lees je in onze handleiding{' '}
            <Link href="/kennisbank/kokend-water-kraan-installeren" className="text-[#005F8A] underline">kokend water kraan installeren</Link>.
          </p>
        </section>

        {/* Kosten over 5 jaar */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kosten over 5 jaar (TCO-overzicht)</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            De aanschafprijs is slechts een deel van de totale investering. Filters, CO₂-navullingen en energieverbruik
            tellen mee over de gebruiksperiode. Hieronder een vergelijking van vier opties inclusief alle terugkerende kosten.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Aanschaf</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Installatie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Filter + CO₂/jaar</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Energie/jaar</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">5 jaar totaal</th>
                </tr>
              </thead>
              <tbody>
                {tco5jaar.map(r => (
                  <tr key={r.set} className={`border-b border-gray-100 ${r.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">
                      {r.set}
                      {r.highlight && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Aanbevolen</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-700">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.installatie}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.filtersCO2}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.energie}</td>
                    <td className="py-2.5 px-3 font-semibold text-[#005F8A]">{r.totaal5jaar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Indicatieve cijfers, 4-persoonshuishouden, energieprijs € 0,30/kWh. Filterkosten variëren per waterhardheid en gebruik.
          </p>
        </section>

        {/* Onderhoud */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderhoud van een 4-in-1 kraan</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een goed onderhouden 4-in-1 systeem gaat gemakkelijk 10 jaar mee. Het onderhoud is minimaal maar regelmatig:
            je hoeft niet veel tijd te investeren, maar je mag bepaalde wissels niet vergeten.
          </p>
          <div className="space-y-3">
            {[
              {
                frequentie: 'Elke 6–12 maanden',
                taak: 'Osmose filterpatroon wisselen',
                tekst: 'Het pre-filter (sediment + koolstof) moet jaarlijks worden vervangen. Afhankelijk van je waterhardheid en gebruik kan dat al na 6 maanden nodig zijn.',
              },
              {
                frequentie: 'Elke 1–2 jaar',
                taak: 'Osmose membraan vervangen',
                tekst: 'Het membraan zelf heeft een langere levensduur maar moet na 1–2 jaar worden gecontroleerd en eventueel vervangen om de filterkwaliteit te waarborgen.',
              },
              {
                frequentie: 'Elke 3–6 maanden',
                taak: 'CO₂-cilinder wisselen',
                tekst: 'Wanneer het bruisende water minder prikkelend wordt, is de CO₂-cilinder bijna leeg. De meeste systemen geven een indicatie via een indicator of app.',
              },
              {
                frequentie: 'Jaarlijks',
                taak: 'Kraankoppen en filters reinigen',
                tekst: 'Kalkafzetting op de kraanmond kan worden verwijderd met citroenzuuroplossing. Inwendig reinigen is bij een osmosesysteem doorgaans niet nodig.',
              },
            ].map(o => (
              <div key={o.taak} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <div className="shrink-0 text-right">
                  <span className="text-[10px] font-semibold text-[#005F8A] bg-[#E0F2FE] px-2 py-0.5 rounded-full whitespace-nowrap">{o.frequentie}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{o.taak}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{o.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Voor wie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voor wie is een 4-in-1 kraan de juiste keuze?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een 4-in-1 kraan is niet voor iedereen de logische stap. Hier is een eerlijk overzicht van wie er het meeste
            baat bij heeft — en wanneer je er beter voor kunt kiezen om het niet te doen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#E0F2FE] rounded-xl p-4">
              <h3 className="font-bold text-[#003F5C] mb-3">Goed idee als je...</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Dagelijks thee, koffie of pasta maakt en wacht op de waterkoker',
                  'Regelmatig bruisend water drinkt en SodaStream-flessen sleept',
                  'Een gefilterd water oplossing zoekt voor hard of calciumrijk leidingwater',
                  'Aanrechtruimte wilt besparen',
                  'Een nieuwe keuken plaatst of je mengkraan toch al aan vervanging toe is',
                  'Budget voor de komende vijf jaar bekijkt in plaats van alleen aanschaf',
                ].map(p => (
                  <li key={p} className="flex gap-2">
                    <span className="text-[#005F8A] shrink-0 font-bold">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-[#003F5C] mb-3">Minder logisch als je...</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Zelden bruisend water drinkt en geen osmose-filter nodig hebt',
                  'Al beschikt over een waterkoker en SodaStream die nog prima werken',
                  'In een huurwoning zit zonder eigen aanrechtinfrastructuur',
                  'Geen stopcontact in de onderkast kunt of wilt laten plaatsen',
                  'Een strak budget hebt en losse apparaten al bezit',
                ].map(p => (
                  <li key={p} className="flex gap-2">
                    <span className="text-gray-400 shrink-0">✗</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <CTABanner context="kokend" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over de 4-in-1 kraan</h2>
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

        {/* Meer lezen */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kokend-water-kraan', label: 'Kokend water kraan: complete gids' },
              { href: '/kokend-water-kraan/met-filter', label: 'Kokend water kraan met filter' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose uitleg' },
              { href: '/quooker-alternatief', label: 'Quooker alternatief vergelijken' },
              { href: '/grohe-red-alternatief', label: 'Grohe Red alternatief' },
              { href: '/kennisbank/bruisend-water-thuis', label: 'Bruisend water thuis' },
              { href: '/kennisbank/4-in-1-kraan', label: 'Kennisbank: 4-in-1 kraan' },
              { href: '/kennisbank/kokend-water-kraan-installeren', label: 'Installatie stap voor stap' },
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

        <CTABanner context="kokend" />
      </div>
    </>
  );
}
