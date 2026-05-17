import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter voor aquarium: zuiver water voor zoet- en zoutwateraquarium',
  description:
    'Een aquariumfilter verwijdert ammoniak, nitriet en nitraat via biologische, mechanische en chemische filtratie. Vergelijking van aquariumfilters voor zoet.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/aquarium' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Heb ik een bacteriestarter nodig voor een nieuw aquariumfilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een bacteriestarter versnelt het inrijden van een nieuw aquarium aanzienlijk. Zonder starter duurt de opstart van de stikstofcyclus 4 tot 8 weken. Met een vloeibare bacteriestarter (Nitrosomonas en Nitrobacter) of filtermedia uit een gevestigd aquarium kan dit worden teruggebracht naar 1 tot 2 weken. Meet dagelijks ammoniak en nitriet totdat beide op nul staan voordat u vis toevoegt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe groot moet mijn aquariumfilter zijn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Als vuistregel geldt dat het filter minimaal 4 tot 6 keer het aquariumvolume per uur moet rondpompen. Voor een aquarium van 100 liter is een filter met een doorstroomcapaciteit van 400 tot 600 liter per uur aanbevolen. Voor dichte beplanting of veel vis kiest u de hogere waarde. Sumpfilters en buitenfilters bieden de grootste capaciteit en zijn geschikt voor aquariums boven de 150 liter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe vaak moet ik mijn aquariumfilter reinigen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mechanische filtermedia (filterwatten, schuimrubber) reinigt u elke 2 tot 4 weken door ze uit te knijpen in afgetapt aquariumwater. Biologische filtermedia (keramische ringen, bioballen) reinigt u maximaal 1 keer per jaar en nooit volledig, om de bacteriekolonie te beschermen. Gebruik nooit kraanwater voor het reinigen van biologisch filtermedia: chloor doodt de nuttige bacterien.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is osmosewater goed voor een aquarium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater (RO-water) is zuiver water met een TDS onder 10 ppm en is ideaal als basiswater voor zowel zoet- als zoutwateraquariums. Voor zoetwateraquariums wordt RO-water gemengd met kraanwater of geremineraliseerd om de gewenste hardheid te bereiken. Voor zoutwateraquariums is RO-water de standaard: het bevat geen fosfaat, nitraat of silicaat die algengroei stimuleren. Gebruik een remineralisatiekit voor de juiste GH en KH waarden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk filter is het beste voor een zoutwateraquarium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een zoutwateraquarium is een sumpfilter de meest gebruikte en aanbevolen keuze. Een sump biedt grote filtervolumes, ruimte voor een eiwitafschuimer (proteinskimmer), refugium en aanvulwater. Buitenfilters (canisterfilters) worden ook gebruikt maar vereisen frequent onderhoud om nitraatophoping te voorkomen. Een osmosefilter voor de watervoorbereiding is bij zoutwateraquariums vrijwel onmisbaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe verlaag ik nitraat in mijn aquarium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nitraat verlagen kan op meerdere manieren: (1) gedeeltelijke waterwissels van 20 tot 30% per week met osmosewater of zacht leidingwater, (2) levende planten die nitraat opnemen als voedingsstof, (3) denitrificatiefilter of refugium met macroalgen voor zoutwateraquariums, (4) minder voeding geven en visenavond overslaan. Streef naar minder dan 20 mg/L nitraat voor tropische vis en minder dan 5 mg/L voor rifaquariums.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de tekenen dat mijn aquariumfilter kapot gaat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tekenen van een falend aquariumfilter zijn: verminderde waterstroom, ongewoon geluid (trillen, klikken), troebel water ondanks regelmatig onderhoud, stijgende ammoniak- of nitrietwaarden, vissen die hijgen aan het wateroppervlak door zuurstofgebrek. Controleer eerst de impeller op vuil of beschadiging. Vervang impellers preventief elke 1 tot 2 jaar bij intensief gebruik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heeft een plantaquarium een ander filter nodig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In een dicht beplant aquarium nemen planten ammoniak en nitraat direct op als voedingsstof, wat de belasting van het biologisch filter vermindert. Een lager debiet is vaak wenselijk om CO2 niet te snel uit te gassen. Sponsfilters of buitenfilters met verlaagd debiet zijn populair bij planted tanks. Vermijd te sterke oppervlaktebeweging zodat het CO2-gehalte voor de planten op peil blijft.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline:
    'Waterfilter voor aquarium: zuiver water voor zoet- en zoutwateraquarium',
  description:
    'Een aquariumfilter verwijdert ammoniak, nitriet en nitraat via biologische, mechanische en chemische filtratie. Vergelijking van aquariumfilters voor zoet.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/aquarium',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterAquariumPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Aquariumfilter', item: 'https://waterfilterplatform.nl/waterfilter/aquarium' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>Aquariumfilter</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterfilter voor aquarium: zuiver water voor zoet- en zoutwateraquarium
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een aquariumfilter werkt fundamenteel anders dan een drinkwaterfilter. Waar een drinkwaterfilter
            alles verwijdert inclusief bacterien, moet een aquariumfilter juist nuttige bacterien
            beschermen die de giftige stikstofverbindingen in uw aquarium afbreken. De juiste filterkeuze
            bepaalt het succes van uw aquarium.
          </p>
        </section>

        <QuickAnswer answer="Een aquariumfilter verwijdert ammoniak en nitriet via biologische filtratie door Nitrosomonas- en Nitrobacterbacterien. Kies een binnenfilter voor aquariums tot 100 liter, een buitenfilter of sumpfilter voor grotere aquariums. Voor zoutwateraquariums is osmosewater als basiswater vrijwel onmisbaar." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Aquariumfilter vs drinkwaterfilter: een fundamenteel verschil
        </h2>
        <p className="text-gray-700 mb-4">
          Een drinkwaterfilter, zoals een{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde-osmosefilter</Link>,
          is ontworpen om water zo zuiver mogelijk te maken: bacterien, virussen, mineralen, pesticiden
          en zware metalen worden verwijderd. Het resultaat is water met een TDS van minder dan 20 ppm,
          vrij van alle micro-organismen.
        </p>
        <p className="text-gray-700 mb-4">
          Een aquariumfilter heeft een tegenovergesteld doel op het biologische vlak. De meest cruciale
          component is de kolonie van <strong>Nitrosomonas</strong>- en <strong>Nitrobacter</strong>bacterien
          die zich vestigen in het biologisch filtermedia. Deze bacterien breken giftige afvalstoffen af
          die vissen produceren. Verwijder je deze bacterien, dan sterven je vissen binnen dagen aan
          ammoniakvergi ftiging.
        </p>
        <p className="text-gray-700 mb-6">
          Het reinigen van een aquariumfilter met kraanwater is dan ook een veelgemaakte fout: het
          chloor in leidingwater doodt de bacteriekolonie onmiddellijk. Gebruik altijd afgetapt
          aquariumwater voor het reinigen van filtermedia.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De stikstofcyclus: de basis van elk aquarium
        </h2>
        <p className="text-gray-700 mb-4">
          Om te begrijpen waarom filtratie zo essentieel is, moet u de stikstofcyclus kennen. Deze
          cyclus beschrijft hoe giftige stikstofverbindingen in uw aquarium worden omgezet naar
          minder schadelijke vormen:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Vissen produceren ammoniak (NH3):</strong> via urine, uitwerpselen en kieuwen
            stoten vissen ammoniak uit. Ammoniak is al giftig boven een concentratie van{' '}
            <strong>0,02 mg/L bij pH hoger dan 7</strong>. Bij hogere pH is meer ammoniak aanwezig
            in de toxische vrije vorm (NH3) in plaats van de minder gevaarlijke ammoniumvorm (NH4+).
          </li>
          <li>
            <strong>Nitrosomonas zet NH3 om naar nitriet (NO2&minus;):</strong> deze bacterien
            oxideren ammoniak naar nitriet. Nitriet is eveneens giftig voor vissen: het bindt
            aan hemoglobine en belemmert zuurstoftransport. Symptomen zijn hijgende vissen en
            bruine kieuwen (bruine-bloedziekte).
          </li>
          <li>
            <strong>Nitrobacter zet NO2&minus; om naar nitraat (NO3&minus;):</strong> het
            eindproduct van de stikstofcyclus is nitraat. Nitraat is beduidend minder giftig
            dan ammoniak of nitriet, maar stapelt zich op. Regelmatige gedeeltelijke waterwissels
            van 20 tot 30 procent per week voorkomen gevaarlijke nitraatophoping. Voor
            rifaquariums streeft u naar minder dan 5 mg/L nitraat.
          </li>
        </ol>
        <p className="text-gray-700 mb-6">
          Het inrijden van een nieuw aquarium, waarbij de bacteriekolonie zich opbouwt, duurt
          4 tot 8 weken zonder bacteriestarter. Gebruik een NH3- en NO2-testkit om de cyclus te
          volgen en voeg pas vis toe als beide parameters stabiel op nul staan.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De drie filtratietypen voor aquariums
        </h2>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          1. Mechanische filtratie
        </h3>
        <p className="text-gray-700 mb-4">
          Mechanische filtratie vangt fysieke deeltjes op: vissenavond, plantenresten, stof.
          Gebruikte materialen zijn <strong>filterwatten</strong> (fijn, goedkoop, regelmatig
          vervangen), <strong>schuimrubber</strong> (grof tot fijn, wasbaar en herbruikbaar) en
          <strong> zeefmateriaal</strong>. Mechanische filtratie is de eerste verdedigingslinie
          en beschermt het biologisch media tegen verstopping.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          2. Biologische filtratie
        </h3>
        <p className="text-gray-700 mb-4">
          Biologische filtratie is de meest cruciale component van elk aquariumfilter. Keramische
          ringen, bioballen, K1-media en sintersteen bieden een enorm oppervlak waarop
          Nitrosomonas- en Nitrobacterbacterien zich vestigen. Een grotere filteroppervlakte
          betekent een grotere bacteriecapaciteit en daarmee meer visbelasting die het systeem
          aankan. Biologisch filtermedia reinigt u nooit volledig en nooit met kraanwater.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          3. Chemische filtratie
        </h3>
        <p className="text-gray-700 mb-6">
          Chemische filtratie verwijdert opgeloste stoffen via adsorptie. <strong>Actief kool</strong>{' '}
          adsorbeert geur, kleur, chloor, medicijnresten en organische verbindingen. Het is tijdelijk
          effectief (2 tot 4 weken) en moet regelmatig worden vervangen. <strong>Zeoliet</strong> adsorbeert
          ammoniak specifiek en wordt ingezet bij het inrijden of bij ammoniakpieken. Chemische
          filtratie is optioneel en aanvullend op biologische en mechanische filtratie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filtertypen voor aquariums: voor elk aquarium de juiste keuze
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Geschikt voor</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Voordelen</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Nadelen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Binnenfilter</td>
                <td className="border border-gray-300 px-3 py-2">Tot 100 L</td>
                <td className="border border-gray-300 px-3 py-2">Goedkoop, alles in 1 unit</td>
                <td className="border border-gray-300 px-3 py-2">Beperkte filtercapaciteit</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Buitenfilter (canister)</td>
                <td className="border border-gray-300 px-3 py-2">100 L+</td>
                <td className="border border-gray-300 px-3 py-2">Stil, hoog debiet, groot mediavolume</td>
                <td className="border border-gray-300 px-3 py-2">Duurder, installatie vereist</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Hangfilter (HOB)</td>
                <td className="border border-gray-300 px-3 py-2">50&ndash;150 L</td>
                <td className="border border-gray-300 px-3 py-2">Compact, makkelijk onderhoud</td>
                <td className="border border-gray-300 px-3 py-2">Watergeluiden, beperkt media</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Sumpfilter</td>
                <td className="border border-gray-300 px-3 py-2">200 L+, zoutwater</td>
                <td className="border border-gray-300 px-3 py-2">Maximale capaciteit, uitbreidbaar</td>
                <td className="border border-gray-300 px-3 py-2">Duur, complex, veel ruimte</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Sponsfilter</td>
                <td className="border border-gray-300 px-3 py-2">Kweekbak, klein aquarium</td>
                <td className="border border-gray-300 px-3 py-2">Goedkoop, veilig voor jonge vis</td>
                <td className="border border-gray-300 px-3 py-2">Lage waterstroom, beperkt debiet</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          Binnenfilter: compact en betaalbaar
        </h3>
        <p className="text-gray-700 mb-4">
          Een binnenfilter hangt of staat in het aquarium zelf en combineert mechanische, biologische
          en chemische filtratie in een compacte unit. Geschikt voor aquariums tot 100 liter en
          beginners. Nadeel is de beperkte filtercapaciteit en het zichtbare volume in het aquarium.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          Buitenfilter: de beste keuze voor grote aquariums
        </h3>
        <p className="text-gray-700 mb-4">
          Een buitenfilter of canisterfilter staat buiten het aquarium, meestal in het meubel
          eronder. Water stroomt via aan- en afvoerslangen door het filtervat. Voordelen zijn een
          groot mediavolume, hoog debiet, stille werking en onzichtbare plaatsing. Populaire merken
          zijn Fluval, Eheim en Oase. Aanbevolen voor aquariums van 100 liter en groter.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          Sumpfilter: maximale capaciteit voor rijaquariums en zoutwater
        </h3>
        <p className="text-gray-700 mb-6">
          Een sumpfilter is een apart filtratiebak onder het hoofdaquarium. Water stroomt door
          overlopen naar de sump, passeert filterkamers en wordt teruggepompt. De sump biedt
          ruimte voor een <strong>eiwitafschuimer</strong> (essentieel voor zoutwateraquariums),
          refugium met macroalgen, kalkreaktor en aanvulwaterreservoir. Sumpfilters zijn de
          standaard voor rifaquariums en grote zoetwateraquariums boven de 300 liter.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosewater voor het aquarium: wanneer noodzakelijk?
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>Zoutwateraquarium:</strong> RO-water is bij zoutwateraquariums de standaard
          en vrijwel onmisbaar. Leidingwater bevat fosfaat, nitraat en silicaat die algengroei
          en cyanobacterien in het rifaquarium sterk stimuleren. RO-water als basiswater heeft
          een TDS van minder dan 10 ppm, ideaal als uitgangspunt voor het aanmaken van zoutwater.
          Een{' '}
          <Link href="/waterfilter/voor-aquarium" className="text-[#005F8A] underline">osmosefilter specifiek voor aquarium</Link>{' '}
          produceert het zuivere basiswater dat u nodig heeft.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Zoetwateraquarium:</strong> RO-water is bij zoetwateraquariums optioneel maar
          nuttig bij specifieke vissoorten. <strong>Discusvissen</strong> gedijen het beste in
          zacht, licht zuur water (GH 3&ndash;8, KH 2&ndash;4, pH 6,5&ndash;7,0) dat moeilijk
          te bereiken is met hard Nederlands leidingwater. RO-water wordt dan gemengd met
          leidingwater of geremineraliseerd met een <strong>remineralisatiekit</strong> (bv.
          Seachem Equilibrium of Salty Shrimp GH+) om de gewenste parameters te bereiken.
        </p>
        <p className="text-gray-700 mb-6">
          Voor gewone tropische vis en goudvissen met leidingwater van gemiddelde hardheid is
          RO-water niet noodzakelijk. Een ontchloringmiddel (natriumthiosulfaat of
          waterconditioner) is in dat geval voldoende.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Aquariumfilter onderhoud: de gouden regels
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Biologisch filtermedia nooit volledig reinigen:</strong> spoel keramische ringen
            en bioballen uitsluitend in afgetapt aquariumwater. Gooi nooit al het biologisch
            media tegelijk weg, vervang maximaal een derde per onderhoudsbeurt.
          </li>
          <li>
            <strong>Mechanisch media regelmatig reinigen:</strong> filterwatten en schuimrubber
            reinigt u elke 2 tot 4 weken afhankelijk van de bezetting. Vervang filterwatten
            wanneer ze niet meer schoon te krijgen zijn.
          </li>
          <li>
            <strong>Nooit kraanwater gebruiken:</strong> het chloor en chloramine in leidingwater
            is dodelijk voor de nuttige bacteriekolonie. Altijd aquariumwater gebruiken.
          </li>
          <li>
            <strong>Impeller controleren:</strong> controleer en reinig de impeller (het roterende
            onderdeel van de pomp) elk kwartaal. Kalkaanslag en vastgeroest vuil zijn veelvoorkomende
            oorzaken van verminderde doorstroom.
          </li>
          <li>
            <strong>Na medicijnbehandeling:</strong> actief kool na een medicijnkuur direct
            verwijderen. Actief kool adsorbeert medicijnen en vermindert de behandeling.
            Na de kuur helpt actief kool de resterende medicijnen te verwijderen.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterparameters: wat moet u meten?
        </h2>
        <p className="text-gray-700 mb-4">
          Goede aquariumhobbyisten meten minimaal wekelijks de volgende parameters, zeker bij
          een nieuw ingerijde bak:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Ammoniak (NH3/NH4+):</strong> moet 0 zijn bij een goed ingericht aquarium</li>
          <li><strong>Nitriet (NO2&minus;):</strong> moet 0 zijn na het inrijden</li>
          <li><strong>Nitraat (NO3&minus;):</strong> onder 20 mg/L voor tropisch zoetwater, onder 5 mg/L voor rifaquarium</li>
          <li><strong>pH:</strong> 6,5&ndash;7,5 voor de meeste tropische vissen, 8,1&ndash;8,3 voor zoutwater</li>
          <li><strong>GH en KH:</strong> totale hardheid en carbonaathardheid afhankelijk van de vissoort</li>
          <li><strong>TDS:</strong> totale opgeloste stoffen als algemene indicator van waterkwaliteit</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Meer over waterkwaliteitsmetingen leest u op onze pagina over{' '}
          <Link href="/waterfilter/tds" className="text-[#005F8A] underline">TDS-meting en waterfilters</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over aquariumfilters
          </h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/waterfilter/voor-aquarium" className="text-[#005F8A] underline">osmosefilter voor aquarium</Link>,{' '}
          <Link href="/waterfilter/tds" className="text-[#005F8A] underline">TDS-waarden en waterfilters</Link> en{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters</Link>.
        </p>
      </main>
    </>
  );
}
