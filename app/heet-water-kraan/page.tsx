import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Heet Water Kraan: Instant Warm Water uit de Kraan',
  description:
    'Alles over de heet water kraan: verschil met kokend water, types, installatie, energieverbruik en wanneer 60–80°C volstaat. Met vergelijking en koopadvies.',
  alternates: { canonical: 'https://waterfilterplatform.nl/heet-water-kraan' },
  openGraph: {
    title: 'Heet Water Kraan: Instant Warm Water uit de Kraan',
    description:
      'Complete gids over heet water kranen (60–80°C): verschil met kokend, types, installatie, energieverbruik en de beste keuze voor jouw keuken.',
    url: 'https://waterfilterplatform.nl/heet-water-kraan',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is het verschil tussen een heet water kraan en een kokend water kraan?',
    answer:
      'Een heet water kraan levert water van 60–80°C — heet genoeg voor thee, pasta, babyvoeding en soep, maar niet kokend. Een kokend water kraan (zoals de Quooker of een 4-in-1 kraan met osmose) levert water van 100°C en vervangt volledig de waterkoker. Voor de meeste dagelijkse toepassingen volstaat een heet water kraan, maar wie écht 100°C wil voor espresso of sterilisatie, kiest voor een kokend water systeem.',
  },
  {
    question: 'Is een instant warm water kraan energiezuinig?',
    answer:
      'Ja, relatief gezien. Een instant water heater of heet water kraan gebruikt 1–2 kW om een kleine waterhoeveelheid direct op te warmen (doorstroomprincipe), of houdt een klein reservoir van 2–10 liter op temperatuur met 20–50 W standby-vermogen. Dat is zuiniger dan dagelijks een volle waterkoker opkoken voor kleine hoeveelheden. Op jaarbasis scheelt dat 30–60% energieverbruik vergeleken met een conventionele waterkoker die meerdere keren per dag vol wordt gebruikt.',
  },
  {
    question: 'Kan een heet water kraan ook filteren?',
    answer:
      'Dat hangt af van het systeem. Eenvoudige instant water heaters hebben geen filter ingebouwd — ze verwarmen gewoon leidingwater. Systemen gebaseerd op een 4-in-1 kraan met omgekeerde osmose filteren het water wél via een RO-membraan en leveren naast warm ook kokend, koud gefilterd en bruisend water. Voor wie zowel heet water als waterfiltratie wil, is een volledig 4-in-1 systeem de meest complete keuze.',
  },
  {
    question: 'Welke temperatuur heeft een heet water kraan?',
    answer:
      'De meeste heet water kranen en instant water heaters leveren water tussen 60°C en 80°C. Sommige modellen zijn instelbaar tussen 35°C en 98°C. Echte kokend water kranen leveren 100°C (of 103°C om schuimen te voorkomen). Voor thee is 80–90°C ideaal; voor groene of witte thee zelfs 60–70°C. Voor pasta en soep volstaat 80°C volledig.',
  },
  {
    question: 'Hoeveel kost een heet water kraan installeren?',
    answer:
      'Een eenvoudige under-sink instant water heater kost €100–300 aanschaf en kan zelf worden geïnstalleerd in 30–60 minuten (aansluiting op koud water en stroom). Een complete heet water kraan met aparte tank kost €300–700 en vereist mogelijk een elektricien voor een extra wandcontactdoos. Een 4-in-1 kraan met osmosefilter kost €699–899 en is zelf te installeren in 1–2 uur.',
  },
];

const temperaturenTabel = [
  { gebruik: 'Groene thee', ideaal: '60–70°C', voldoende: 'Heet water kraan' },
  { gebruik: 'Zwarte thee / kruidenthee', ideaal: '85–95°C', voldoende: 'Heet water kraan (hoog ingesteld)' },
  { gebruik: 'Soep / bouillon', ideaal: '75–85°C', voldoende: 'Heet water kraan' },
  { gebruik: 'Pasta koken', ideaal: '100°C', voldoende: 'Kokend water kraan' },
  { gebruik: 'Babyvoeding afkoelen', ideaal: '70°C (steriel)', voldoende: 'Heet water kraan' },
  { gebruik: 'Espresso (watertemperatuur)', ideaal: '88–94°C', voldoende: 'Heet water kraan (hoog)' },
  { gebruik: 'Steriliseren / desinfecteren', ideaal: '100°C', voldoende: 'Kokend water kraan' },
  { gebruik: 'Afwassen zonder machine', ideaal: '50–60°C', voldoende: 'Heet water kraan' },
];

const systeemTypes = [
  {
    naam: 'Instant water heater (doorstroom)',
    temp: '40–85°C instelbaar',
    prijs: '€ 100–300',
    installatie: 'Zelf, 30–60 min',
    filter: false,
    highlight: false,
    beschrijving:
      'Een compacte unit onder het aanrecht die koudwater direct verwarmt via een verwarmingselement (doorstroomprincipe). Geen reservoir, dus geen stand-by verlies. Levering van warm water tot 85°C op aanvraag. Ideaal als eenvoudige vervanger voor de gootsteenapparaat of als aanvulling op een koud-water kraan.',
  },
  {
    naam: 'Heet water kraan met reservoir (mini-boiler)',
    temp: '60–80°C',
    prijs: '€ 200–500',
    installatie: 'Zelf of met loodgieter',
    filter: false,
    highlight: false,
    beschrijving:
      'Een small boiler van 2–10 liter houdt water constant op 60–80°C. Bij gebruik wordt koud water bijgevuld en opgewarmd. Voordeel: direct beschikbaar, hogere flow dan doorstromer. Nadeel: stand-by energieverbruik (20–50 W). Geschikt voor gezinnen die regelmatig warm water nodig hebben voor koken, thee en soep.',
  },
  {
    naam: 'Kokend water kraan (100°C systeem)',
    temp: '100°C',
    prijs: '€ 500–2.800',
    installatie: 'Zelf of loodgieter',
    filter: false,
    highlight: false,
    beschrijving:
      'Echte kokend water kranen (Quooker, GROHE Red, Franke) leveren water van 100°C. Ze gebruiken een geïsoleerd hoge-druk reservoir of een doorstroom verwarmingselement dat water tot kookpunt brengt. Duurder in aanschaf maar maximalere functionaliteit. Vereist een goede veiligheidsvergrendeling (dubbel)..',
  },
  {
    naam: '4-in-1 kraan (kokend + warm + koud + osmose)',
    temp: '100°C + warm + koud',
    prijs: '€ 699–900',
    installatie: 'Zelf, 1–2 uur',
    filter: true,
    highlight: true,
    beschrijving:
      'De meest complete oplossing: combineert een geïntegreerd osmosefilter met vier waterfuncties — kokend (100°C), warm, koud gefilterd en bruisend water. Dit type systeem vervangt zowel de waterkoker als alle losse filtersystemen. Één jaarlijkse filterwissel. Beste prijs-kwaliteitverhouding voor complete wateroplossingen.',
  },
];

const installatieTips = [
  {
    stap: '1',
    titel: 'Controleer de stroomaansluiting',
    tekst:
      'De meeste instant water heaters vereisen een geaard stopcontact (230V, 10–16A) in de keukenonderkast. Controleer of dit aanwezig is. Een aparte groep is aanbevolen voor systemen boven 2.000 W.',
  },
  {
    stap: '2',
    titel: 'Meet de ruimte onder het aanrecht',
    tekst:
      'Een mini-boiler of osmose-tank heeft typisch een hoogte van 25–45 cm nodig. Meet de beschikbare ruimte voor aankoop. Doorsstroomapparaten zijn compacter (15–25 cm hoog).',
  },
  {
    stap: '3',
    titel: 'Keuze: extra kraangat of bestaande kraan vervangen',
    tekst:
      'Een standalone heet water kraan vereist een extra kraangat in het aanrecht (standaard 35 mm). Een 4-in-1 kraan vervangt de bestaande mengkraan en gebruikt hetzelfde kraangat — geen extra boring nodig.',
  },
  {
    stap: '4',
    titel: 'Wateraansluiting',
    tekst:
      'Verbind de unit met de koudwaterafvoer via een aftakventiel (T-stuk). Gebruik flexibele aansluitslangen met geïntegreerde afsluiter. Zet bij de eerste ingebruikname de watertoevoer langzaam open en check alle verbindingen op lekkage.',
  },
  {
    stap: '5',
    titel: 'Test vóór definitieve installatie',
    tekst:
      'Test het systeem losjes opgesteld voordat alles wordt weggewerkt. Controleer de ingestelde temperatuur, het veiligheidsventiel en de veiligheidsvergrendeling van de kraan. Pas dan alles definitief wegwerken in het kastje.',
  },
];

export default function HeetWaterKraanPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Heet Water Kraan: Instant Warm Water uit de Kraan',
          description:
            'Complete gids over heet water kranen (60–80°C): verschil met kokend, types, installatie, energieverbruik en de beste keuze voor jouw keuken.',
          datePublished: '2025-11-01',
          dateModified: '2026-05-13',
          url: 'https://waterfilterplatform.nl/heet-water-kraan',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Heet water kraan', url: 'https://waterfilterplatform.nl/heet-water-kraan' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Heet water kraan</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Heet Water Kraan: Instant Warm Water uit de Kraan
          </h1>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Een <strong>heet water kraan</strong> levert direct warm water van 60–80°C uit de kraan —
            ideaal voor thee, soep, pasta en babyvoeding. Maar wanneer heb je echt 100°C nodig en
            wanneer volstaat een <strong>warm water kraan</strong>? En wat is het verschil met een
            echte kokend water kraan? Op deze pagina leggen we alles uit.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We bespreken de vier typen systemen — van eenvoudige instant water heaters tot complete
            4-in-1 kranen — inclusief installatie, energieverbruik en prijsvergelijking. Met een
            duidelijk temperatuuroverzicht voor alle dagelijkse toepassingen.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kokend-water-kraan"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Kokend water kraan →
            </Link>
            <Link
              href="/kokend-water-kraan/vergelijken"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Merken vergelijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#verschil" className="hover:underline">Heet vs kokend water: het verschil</a></li>
            <li><a href="#temperaturen" className="hover:underline">Welke temperatuur voor welk gebruik?</a></li>
            <li><a href="#typen" className="hover:underline">Typen heet water systemen</a></li>
            <li><a href="#energie" className="hover:underline">Energieverbruik vergelijking</a></li>
            <li><a href="#installatie" className="hover:underline">Installatie: stap voor stap</a></li>
            <li><a href="#kiezen" className="hover:underline">Heet of kokend: wanneer kies je wat?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Verschil heet vs kokend */}
        <section id="verschil">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Heet water kraan vs kokend water kraan: wat is het verschil?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In het dagelijks taalgebruik worden de termen <strong>heet water kraan</strong>,{' '}
            <strong>warm water kraan</strong> en <strong>kokend water kraan</strong> door elkaar gebruikt.
            Technisch zijn het drie verschillende categorieën die sterk van elkaar verschillen in
            temperatuur, kosten en toepassingsgebied.
          </p>
          <div className="space-y-3 mb-6">
            <div className="bg-[#E0F2FE]/60 rounded-xl p-4 border-l-4 border-[#005F8A]">
              <p className="font-semibold text-[#003F5C] mb-1">Warm water kraan (35–55°C)</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                De gewone keukenkraan levert via de boiler of cv-ketel warm water tot circa 55°C.
                Dit is te warm om direct te drinken, maar geschikt voor afwassen. Een{' '}
                <strong>instant warm water kraan</strong> verwarmt water direct via een doorstromer
                zonder separate boiler — handig in woningen zonder centrale verwarming of aparte boiler.
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border-l-4 border-amber-400">
              <p className="font-semibold text-amber-900 mb-1">Heet water kraan (60–80°C)</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Water van 60–80°C is heet genoeg voor het zetten van thee, soep verwarmen, pasta voorkoken
                en babyvoeding prepareren. Dit temperatuurbereik dekt 80–90% van alle dagelijkse
                toepassingen waarvoor mensen normaal een waterkoker gebruiken. Systemen in deze categorie
                zijn goedkoper en stiller dan echte kokend water kranen.
              </p>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border-l-4 border-red-400">
              <p className="font-semibold text-red-900 mb-1">Kokend water kraan (100°C)</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Water van exact 100°C is nodig om pasta echt te koken (niet voorkoken), om te
                steriliseren, en voor espressoapparaten die boiling-point water vereisen. Echte kokend
                water kranen — zoals de Quooker, GROHE Red of de{' '}
                <Link href="/4-in-1-kraan" className="text-[#005F8A] underline hover:no-underline">
                  4-in-1 kraan met osmose
                </Link>{' '}
                — zijn duurder maar leveren maximale flexibiliteit.
              </p>
            </div>
          </div>
          <div className="bg-[#E0F2FE] rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2">Praktische vuistregel</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Gebruik je warm water voornamelijk voor thee, soep en snel opwarmen? Dan volstaat een
              heet water systeem (60–80°C) en bespaar je op aanschaf en energiekosten. Wil je ook
              pasta koken, steriliseren of water écht tot 100°C brengen? Dan kies je voor een kokend
              water kraan. En als je ook zuiver drinkwater wil via een ingebouwd filter, dan is de{' '}
              <Link href="/4-in-1-kraan" className="text-[#005F8A] underline hover:no-underline">
                4-in-1 kraan
              </Link>{' '}
              de meest complete keuze.
            </p>
          </div>
        </section>

        {/* Temperatuur per gebruik */}
        <section id="temperaturen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welke watertemperatuur heb je nodig voor welk gebruik?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Niet voor elke toepassing is 100°C nodig. Onderstaande tabel laat zien welke temperatuur
            optimaal is voor dagelijkse keukentaken en of een heet water kraan (60–80°C) of een echte
            kokend water kraan vereist is.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Toepassing</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Ideale temp.</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Benodigd systeem</th>
                </tr>
              </thead>
              <tbody>
                {temperaturenTabel.map(r => (
                  <tr key={r.gebruik} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.gebruik}</td>
                    <td className="py-2.5 px-3 text-center text-[#005F8A] font-semibold">{r.ideaal}</td>
                    <td className="py-2.5 px-3 text-right text-xs text-gray-600">{r.voldoende}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Tabel gebaseerd op aanbevolen brouwtemperaturen per theetype en kooktemperaturen voor
            voedsel. Voor sterilisatie (babyflessen, inmaak) is 100°C vereist.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            De conclusie is duidelijk: voor de overgrote meerderheid van dagelijks gebruik — thee, soep,
            babyvoeding, snelle opwarming — volstaat een heet water kraan van 75–85°C volledig. Alleen
            voor koken, steriliseren en specifieke espresso-toepassingen is 100°C noodzakelijk.
          </p>
        </section>

        {/* Typen systemen */}
        <section id="typen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Typen heet water systemen</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Er zijn vier hoofdtypen systemen die heet of kokend water leveren vanuit de kraan. Ze
            variëren sterk in temperatuurbereik, prijs, installatie-eisen en extra functies. Hieronder
            een uitgebreide beschrijving van elk type.
          </p>
          <div className="space-y-4">
            {systeemTypes.map(s => (
              <div
                key={s.naam}
                className={`rounded-2xl border p-5 ${s.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                  <div>
                    <p className="font-bold text-gray-900">{s.naam}</p>
                    {s.highlight && (
                      <span className="inline-block mt-1 text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full">
                        Meest compleet
                      </span>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-semibold text-[#005F8A] text-sm">{s.prijs}</p>
                    <p className="text-xs text-gray-500">{s.temp}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-600 mb-3">
                  <div><span className="text-gray-400">Installatie:</span> {s.installatie}</div>
                  <div>
                    <span className="text-gray-400">Filter:</span>{' '}
                    {s.filter ? (
                      <span className="text-green-700 font-medium">Osmosefilter ingebouwd</span>
                    ) : (
                      <span>Geen</span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{s.beschrijving}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Wil je een uitgebreide vergelijking van alle merken en modellen? Bekijk onze{' '}
            <Link href="/kokend-water-kraan/vergelijken" className="text-[#005F8A] underline hover:no-underline">
              merken vergelijken pagina
            </Link>{' '}
            met TCO-berekening over 5 jaar.
          </p>
        </section>

        {/* Energieverbruik */}
        <section id="energie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Energieverbruik: heet water kraan vs waterkoker vs boiler
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een van de meest gestelde vragen over heet water kranen is het energieverbruik. Wat is
            goedkoper op de lange termijn: een instant water heater, een mini-boiler of de klassieke
            waterkoker? Het antwoord hangt sterk af van gebruikspatroon.
          </p>

          {/* Energievergelijking visueel */}
          <div className="space-y-3 mb-6">
            {[
              {
                naam: 'Waterkoker (1,7 liter)',
                kwh: '0,10–0,15 kWh per kookbeurt',
                jaarkosten: '€ 30–60/jr (4x per dag)',
                score: 60,
                opmerking: 'Hogere kosten bij frequent gebruik, verwarmt altijd vol',
              },
              {
                naam: 'Instant water heater (doorstroom)',
                kwh: '1–2 kW × gebruik (geen stand-by)',
                jaarkosten: '€ 15–35/jr (vergelijkbaar gebruik)',
                score: 85,
                opmerking: 'Meest efficiënt: verwarmt alleen wat je gebruikt',
              },
              {
                naam: 'Mini-boiler / heet water kraan',
                kwh: '20–50 W stand-by continu',
                jaarkosten: '€ 25–55/jr (stand-by + gebruik)',
                score: 70,
                opmerking: 'Stand-by verlies maar direct beschikbaar bij gebruik',
              },
              {
                naam: 'Kokend water kraan (100°C reservoir)',
                kwh: '10–30 W stand-by (geïsoleerd)',
                jaarkosten: '€ 20–50/jr (zeer goed geïsoleerd)',
                score: 80,
                opmerking: 'Moderne systemen zijn goed geïsoleerd; lage stand-by kosten',
              },
            ].map(e => (
              <div key={e.naam} className="border border-gray-100 rounded-xl p-4">
                <div className="flex justify-between items-start gap-2 mb-2 flex-wrap">
                  <p className="font-semibold text-gray-800 text-sm">{e.naam}</p>
                  <span className="text-xs font-medium text-[#005F8A]">{e.jaarkosten}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full mb-2">
                  <div
                    className="h-2 bg-[#005F8A] rounded-full"
                    style={{ width: `${e.score}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500">{e.kwh} · {e.opmerking}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#E0F2FE] rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2">Conclusie energieverbruik</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Een instant water heater (doorstroom) is de meest energiezuinige optie als je regelmatig
              kleine hoeveelheden warm water nodig hebt. Een mini-boiler is efficiënter dan een
              waterkoker die meerdere keren per dag vol wordt opgewarmd. Een moderne kokend water kraan
              met goed geïsoleerd reservoir heeft een verrassend laag stand-by verbruik (10–30 W),
              vergelijkbaar met een wifi-router. Op jaarbasis zijn de energiekosten van alle systemen
              met heet water vergelijkbaar — het grote voordeel zit in het comfort en de tijdwinst.
            </p>
          </div>
        </section>

        {/* Installatie */}
        <section id="installatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Installatie van een heet water kraan: stap voor stap
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De meeste heet water systemen zijn zelf te installeren zonder loodgieter. Hieronder de vijf
            stappen die voor nagenoeg alle systemen gelden — van eenvoudige doorstromers tot
            complete 4-in-1 kranen.
          </p>
          <div className="space-y-4 mb-6">
            {installatieTips.map(s => (
              <div key={s.stap} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {s.stap}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mt-0.5">{s.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
            <p className="font-semibold text-amber-900 mb-2">Wanneer toch een installateur inschakelen?</p>
            <ul className="space-y-1.5">
              {[
                'Als er geen vrij wandstopcontact in de keukenonderkast aanwezig is (elektricien nodig voor extra groep)',
                'Als de waterdruk in huis lager is dan 2 bar (doorstroomheaters vereisen minimale waterdruk)',
                'Bij aardgas- of combiboiler-aansluitingen: laat de integratie door een installateur beoordelen',
                'Als de bestaande mengkraan vervangen wordt en de watertoevoer daarvoor afgesloten moet worden',
              ].map(tip => (
                <li key={tip} className="flex gap-2 items-start text-sm text-gray-700">
                  <span className="text-amber-600 shrink-0 mt-0.5">!</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Wil je ook een waterfilter combineren met de installatie? Bij de{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">
              aanschaf van een osmose systeem
            </Link>{' '}
            of een 4-in-1 kraan wordt de installatie maar één keer gedaan voor alle functies tegelijk.
          </p>
        </section>

        {/* Wanneer heet vs kokend */}
        <section id="kiezen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Heet of kokend water: wanneer kies je wat?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De keuze tussen een heet water kraan (60–80°C) en een echte kokend water kraan (100°C)
            hangt af van drie factoren: je dagelijks gebruik, je budget en of je ook een waterfilter
            wilt. Hier is een praktisch beslismodel:
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                situatie: 'Ik gebruik warm water alleen voor thee, soep en snel opwarmen',
                advies: 'Heet water kraan (60–80°C) is voldoende — goedkoper en simpeler',
                type: 'heet',
              },
              {
                situatie: 'Ik wil pasta koken of water echt aan de kook brengen',
                advies: 'Kokend water kraan (100°C) is noodzakelijk — overweeg een 4-in-1 systeem',
                type: 'kokend',
              },
              {
                situatie: 'Ik wil ook gefilterd drinkwater (kalkvrij, chloorvrij)',
                advies: 'Kies voor een 4-in-1 kraan met osmosefilter — biedt alle functies in één',
                type: 'compleet',
              },
              {
                situatie: 'Mijn budget is beperkt (onder €300)',
                advies: 'Instant water heater (doorstroom, €100–300) — direct warm water tot 85°C',
                type: 'budget',
              },
              {
                situatie: 'Ik wil ook bruisend water en heb hard leidingwater',
                advies: '4-in-1 kraan met osmose — kokend, koud, gefilterd en bruisend in één systeem',
                type: 'compleet',
              },
              {
                situatie: 'Ik wil het premium merk (Quooker) met alle functies',
                advies: 'Quooker CUBE + filter — duurdere optie maar kwalitatief hoogwaardig',
                type: 'premium',
              },
            ].map(s => (
              <div key={s.situatie} className="border border-gray-100 rounded-xl p-4 flex gap-3 items-start">
                <div className={`shrink-0 w-3 h-3 rounded-full mt-1 ${
                  s.type === 'compleet' ? 'bg-[#005F8A]' :
                  s.type === 'kokend' ? 'bg-red-400' :
                  s.type === 'heet' ? 'bg-amber-400' :
                  s.type === 'budget' ? 'bg-green-500' : 'bg-purple-400'
                }`} />
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-1">{s.situatie}</p>
                  <p className="text-sm text-gray-600">{s.advies}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Vergelijkingstabel heet vs kokend */}
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Criterium</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Heet (60–80°C)</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Kokend (100°C)</th>
                  <th className="py-2.5 px-3 font-semibold text-center">4-in-1 (alles)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { criterium: 'Prijs aanschaf', heet: '€ 100–500', kokend: '€ 500–2.800', alles: '€ 699–900' },
                  { criterium: 'Thee en soep', heet: '✓', kokend: '✓', alles: '✓' },
                  { criterium: 'Pasta koken', heet: '~', kokend: '✓', alles: '✓' },
                  { criterium: 'Waterfilter ingebouwd', heet: '✗', kokend: 'Optioneel', alles: '✓ (osmose)' },
                  { criterium: 'Bruisend water', heet: '✗', kokend: 'Optioneel', alles: '✓' },
                  { criterium: 'Zelf installeren', heet: '✓', kokend: '~', alles: '✓' },
                  { criterium: 'Energieverbruik/jr', heet: 'Laag', kokend: 'Laag–matig', alles: 'Laag' },
                ].map(r => (
                  <tr key={r.criterium} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.criterium}</td>
                    <td className="py-2.5 px-3 text-center text-sm">{r.heet}</td>
                    <td className="py-2.5 px-3 text-center text-sm">{r.kokend}</td>
                    <td className="py-2.5 px-3 text-center text-sm font-medium text-[#005F8A]">{r.alles}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">✓ = ja · ~ = gedeeltelijk · ✗ = nee</p>
        </section>

        {/* Wanneer echt 100 graden */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer heb je echt 100°C nodig?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het meest gehoorde argument voor een echte kokend water kraan is gemak: je hoeft nooit meer
            na te denken over de temperatuur. Maar er zijn ook concrete situaties waarbij 100°C echt
            noodzakelijk is:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              {
                titel: 'Pasta en rijst koken',
                tekst: 'Koken vereist echt 100°C. Bij 80°C wordt pasta niet gaar — je kunt het water voorverwarmen maar het moet daarna verder op het fornuis.',
                needsBoiling: true,
              },
              {
                titel: 'Steriliseren van babyflessen',
                tekst: 'Officieel advies is steriliseren bij minimaal 100°C. Voor babyvoeding bereiden (af te koelen) volstaat 70°C.',
                needsBoiling: true,
              },
              {
                titel: 'Groene en witte thee',
                tekst: 'Groene thee smaakt beter bij 60–70°C. Kokend water (100°C) verbrandt de teerbladen en geeft bittere smaak. Heet water kraan is dus beter.',
                needsBoiling: false,
              },
              {
                titel: 'Zwarte thee en kruidenthee',
                tekst: 'De meeste kruidenmengsels trekken het beste bij 90–95°C. Een heet water kraan ingesteld op maximaal (80–85°C) volstaat bijna.',
                needsBoiling: false,
              },
              {
                titel: 'Inmaak en conserven',
                tekst: 'Het steriliseren van potten en deksels vereist 100°C. Dit is een specifiek gebruik maar een echt argument voor kokend water.',
                needsBoiling: true,
              },
              {
                titel: 'Directe koffie (Aeropress, French press)',
                tekst: 'Ideale koffietemperatuur is 88–94°C, ruim onder kookpunt. Een heet water kraan op 85–90°C presteert hiervoor beter dan kokend water dat afgekoeld moet worden.',
                needsBoiling: false,
              },
            ].map(c => (
              <div
                key={c.titel}
                className={`rounded-xl p-4 border ${c.needsBoiling ? 'border-red-100 bg-red-50' : 'border-green-100 bg-green-50'}`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-sm font-bold ${c.needsBoiling ? 'text-red-600' : 'text-green-600'}`}>
                    {c.needsBoiling ? '100°C vereist' : 'Heet water voldoet'}
                  </span>
                </div>
                <p className="font-semibold text-gray-800 text-sm mb-1">{c.titel}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{c.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wil je toch een kokend water systeem? Lees dan onze complete gids over de{' '}
            <Link href="/kokend-water-kraan" className="text-[#005F8A] underline hover:no-underline">
              kokend water kraan
            </Link>{' '}
            of bekijk de{' '}
            <Link href="/kokend-water-kraan/vergelijken" className="text-[#005F8A] underline hover:no-underline">
              merken vergelijking
            </Link>{' '}
            voor Quooker, GROHE Red, Franke en 4-in-1 systemen met osmose naast elkaar.
          </p>
        </section>

        {/* Waterfilter combineren */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Heet water kraan combineren met een waterfilter
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De meeste standalone heet water kranen en instant water heaters hebben geen ingebouwd
            waterfilter. Dat betekent dat je ongefilterd leidingwater verwarm — inclusief kalk, chloor
            en eventuele verontreinigingen. Als je in een hard-watergebied woont, versnelt kalk bovendien
            de verslijting van het verwarmingselement.
          </p>
          <div className="space-y-3 mb-5">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Optie 1: losse koolstoffilter vóór de unit</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Een eenvoudige koolstoffilterpatroon (€20–50) kan vóór de heet water unit worden geplaatst.
                Dit verwijdert chloor en verbetert de smaak, maar filtert geen nitraten of PFAS.
                Filtervervanging elke 3–6 maanden.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Optie 2: losse osmose-unit onder het aanrecht</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Een{' '}
                <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">
                  omgekeerde osmose systeem
                </Link>{' '}
                (€150–500) filtert 95–99% van alle verontreinigingen. Je kunt de heet water unit
                achter het osmose-systeem plaatsen zodat alleen gefilterd water wordt verwarmd. Optimaal
                maar vereist meer ruimte onder het aanrecht.
              </p>
            </div>
            <div className="bg-[#E0F2FE] border border-[#005F8A] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-semibold text-[#003F5C]">Optie 3: 4-in-1 kraan (alles in één)</p>
                <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full">Aanbevolen</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                De{' '}
                <Link href="/4-in-1-kraan" className="text-[#005F8A] underline hover:no-underline">
                  4-in-1 kraan
                </Link>{' '}
                heeft een geïntegreerd osmosefilter en levert kokend (100°C), warm, koud gefilterd
                en bruisend water uit één kraan. Geen aparte units, geen losse filtersystemen.
                Dit is de meest ruimtebesparende en complete oplossing voor wie zowel heet water
                als zuiver drinkwater wil.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="kokend" />

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/kokend-water-kraan',
                title: 'Kokend water kraan: complete gids',
                desc: 'Alles over echte 100°C kranen: werking, typen, veiligheid en kosten.',
              },
              {
                href: '/kokend-water-kraan/vergelijken',
                title: 'Merken vergelijken (Quooker, GROHE, 4-in-1 met osmose)',
                desc: 'TCO-vergelijking en functieoverzicht van alle populaire merken.',
              },
              {
                href: '/4-in-1-kraan',
                title: '4-in-1 kraan met osmose',
                desc: 'Kokend, koud, warm en bruisend met ingebouwde osmosefilter.',
              },
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Omgekeerde osmose kopen',
                desc: 'Losse osmose-unit als aanvulling op een heet water systeem.',
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

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over de heet water kraan
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
