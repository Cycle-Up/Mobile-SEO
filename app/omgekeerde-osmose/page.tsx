import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Omgekeerde osmose — uitleg, voordelen & filter kopen | 2026',
  description:
    'Alles over omgekeerde osmose (RO): hoe het werkt, wat het verwijdert, kosten, onderhoud en welk osmose filter past bij jou. Complete gids.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
  openGraph: {
    title: 'Omgekeerde osmose — complete gids over RO waterfilters',
    description:
      'De volledige gids over omgekeerde osmose: werking, voordelen, nadelen, kosten en de beste systemen voor thuis.',
    url: 'https://waterfilterplatform.nl/omgekeerde-osmose',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is omgekeerde osmose precies?',
    answer:
      'Omgekeerde osmose (reverse osmosis of RO) is een filtratietechniek waarbij water onder druk door een semipermeabel membraan wordt geperst. Het membraan heeft poriën van ongeveer 0,0001 micron — klein genoeg om zouten, zware metalen, pesticiden, microplastics en zelfs virussen tegen te houden. Wat overblijft is praktisch zuiver H₂O.',
  },
  {
    question: 'Hoe werkt omgekeerde osmose stap voor stap?',
    answer:
      'In vier stappen: (1) het sedimentfilter vangt zand, roest en grotere deeltjes op, (2) het koolstoffilter verwijdert chloor en organische verbindingen, (3) het RO-membraan filtert opgeloste stoffen op moleculair niveau, en (4) een post-koolstoffilter polijst de smaak. Het hele proces gebeurt onder een druk van 3–6 bar.',
  },
  {
    question: 'Is osmose water gezond om te drinken?',
    answer:
      'Osmose water is veilig en gezond om dagelijks te drinken. Het bevat minder mineralen dan leidingwater, maar de mineralen die je via voeding binnenkrijgt vormen verreweg de grootste bijdrage aan je dagelijkse inname. De WHO en gezondheidsorganisaties bevestigen dat osmose water geen gezondheidsrisico vormt bij een gevarieerd dieet.',
  },
  {
    question: 'Hoeveel water verbruikt een osmose filter?',
    answer:
      'Klassieke osmose systemen produceren 3–5 liter spoelwater per liter gefilterd water. Moderne systemen met permeaatpomp halen 1:1 of zelfs 1:0,5. Bij een gemiddeld huishouden van 4 personen praat je over circa 5–10 liter drinkwater per dag, dus het extra verbruik is in de praktijk beperkt.',
  },
  {
    question: 'Hoe vaak moet ik de filters vervangen?',
    answer:
      'Een vuistregel: sediment- en koolstof voorfilters elke 6–12 maanden, het RO-membraan elke 2–3 jaar, en de post-koolstof na 12 maanden. Hard water of veel sediment in het leidingnet kan deze intervallen verkorten. Een complete 4-in-1 kraan zoals van PureAqua heeft één jaarlijkse filterwissel.',
  },
  {
    question: 'Wat is het verschil tussen omgekeerde osmose en een Brita filterkan?',
    answer:
      'Een Brita filterkan gebruikt actieve kool en een ionenwisselaar. Dat verwijdert chloor en deels kalk, maar laat nitraten, pesticiden, zware metalen en microplastics grotendeels door. Omgekeerde osmose verwijdert 95–99% van vrijwel alle opgeloste stoffen — een veel grondiger filtratie. Lees onze diepgaande vergelijking voor de cijfers.',
  },
  {
    question: 'Kan ik een osmose systeem zelf installeren?',
    answer:
      'Ja, de meeste under-sink osmose systemen zijn ontworpen voor doe-het-zelf installatie. Je sluit het systeem aan op de koudwatertoevoer, monteert een aanboorkraan voor de afvoer en boort één gat in het aanrecht voor de extra kraan. Reken op 30 tot 60 minuten. Bij een 4-in-1 kraan is het verstandig een installateur in te schakelen vanwege de elektrische aansluiting.',
  },
  {
    question: 'Vermindert osmose water de kalkaanslag in mijn apparaten?',
    answer:
      'Ja, en heel effectief. Omdat omgekeerde osmose 95–99% van calcium en magnesium verwijdert, krijgen je waterkoker, koffiemachine en stoomoven vrijwel geen kalkaanslag meer. Dat verlengt de levensduur van apparaten aanzienlijk en bespaart ontkalker.',
  },
  {
    question: 'Is osmose water beter voor koffie en thee?',
    answer:
      'Voor de meeste mensen ja. Specialty coffee baristas en theesommeliers werken graag met gefilterd water omdat smaakcomponenten beter tot hun recht komen zonder chloor en zware mineralen. Voor espresso wordt soms een lichte remineralisatie aanbevolen om optimaal extractieprofiel te halen.',
  },
  {
    question: 'Wat kost een osmose systeem per jaar?',
    answer:
      'De jaarlijkse kosten liggen tussen €60 en €150 voor filtervervanging, afhankelijk van het systeem. Tel daar enkele euro\'s aan extra waterverbruik bij op. Ter referentie: een gezin dat overstapt van flessenwater bespaart €400–€600 per jaar.',
  },
];

const verwijdertTabel = [
  { categorie: 'Zware metalen', stof: 'Lood, koper, kwik, arseen', verwijdering: '95–99%' },
  { categorie: 'Desinfectiemiddelen', stof: 'Chloor, chlooramine, THM', verwijdering: '95–99%' },
  { categorie: 'Mineralen', stof: 'Calcium, magnesium (kalk)', verwijdering: '95–99%' },
  { categorie: 'Nutriënten', stof: 'Nitraat, nitriet, fosfaat', verwijdering: '85–95%' },
  { categorie: 'Landbouwresten', stof: 'Pesticiden, herbiciden', verwijdering: '95–99%' },
  { categorie: 'Medicijnresten', stof: 'Hormonen, antibiotica, PFAS', verwijdering: '95–99%' },
  { categorie: 'Microplastics', stof: 'Deeltjes >0,001 μm', verwijdering: '99%+' },
  { categorie: 'Microbiologie', stof: 'Bacteriën, virussen, cysten', verwijdering: '99%+' },
];

const vergelijking = [
  {
    type: 'Omgekeerde osmose',
    zuiverheid: '95–99%',
    kosten: '€ 60–150/jr',
    onderhoud: 'Jaarlijks',
    ruimte: 'Onder aanrecht',
    highlight: true,
  },
  {
    type: 'Koolstoffilter (op kraan)',
    zuiverheid: '40–70%',
    kosten: '€ 30–80/jr',
    onderhoud: '3–6 maanden',
    ruimte: 'Op kraan',
    highlight: false,
  },
  {
    type: 'Filterkan (Brita e.d.)',
    zuiverheid: '20–50%',
    kosten: '€ 40–90/jr',
    onderhoud: '4–6 weken',
    ruimte: 'Op werkblad',
    highlight: false,
  },
  {
    type: 'Waterontharder (ionenwisselaar)',
    zuiverheid: 'Alleen kalk',
    kosten: '€ 100–250/jr',
    onderhoud: 'Zout bijvullen',
    ruimte: 'Meterkast/garage',
    highlight: false,
  },
];

export default function OmgekeerdeOsmosePage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Omgekeerde osmose — uitleg, voordelen en filter kopen',
          description:
            'Complete gids over omgekeerde osmose (RO): werking, voordelen, nadelen, kosten, onderhoud en de beste systemen voor thuis.',
          datePublished: '2025-08-15',
          dateModified: '2026-05-13',
          url: 'https://waterfilterplatform.nl/omgekeerde-osmose',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Omgekeerde osmose', url: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Omgekeerde osmose</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Omgekeerde osmose: de complete gids
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Omgekeerde osmose (Engels: <em>reverse osmosis</em>, kort RO) is de meest grondige
            filtratietechniek voor leidingwater. Het verwijdert 95 tot 99 procent van alle
            opgeloste stoffen — kalk, chloor, nitraten, pesticiden, zware metalen, microplastics
            en zelfs bacteriën en virussen. Op deze pagina leggen we precies uit hoe het werkt,
            wat het verwijdert, wat het kost en welk systeem past bij jouw huishouden.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Osmose filter kopen →
            </Link>
            <Link
              href="/omgekeerde-osmose/wat-is-osmose-water"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Wat is osmose water?
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">
            Op deze pagina
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#wat-is" className="hover:underline">Wat is omgekeerde osmose?</a></li>
            <li><a href="#hoe-werkt" className="hover:underline">Hoe werkt het stap voor stap?</a></li>
            <li><a href="#verwijdert" className="hover:underline">Wat verwijdert het?</a></li>
            <li><a href="#vergelijking" className="hover:underline">Vergelijking met andere filters</a></li>
            <li><a href="#geschiedenis" className="hover:underline">Geschiedenis &amp; toepassingen</a></li>
            <li><a href="#voordelen" className="hover:underline">Voordelen</a></li>
            <li><a href="#nadelen" className="hover:underline">Nadelen (eerlijk)</a></li>
            <li><a href="#voor-wie" className="hover:underline">Voor wie is het geschikt?</a></li>
            <li><a href="#kosten" className="hover:underline">Kosten per jaar</a></li>
            <li><a href="#onderhoud" className="hover:underline">Onderhoud</a></li>
            <li><a href="#installatie" className="hover:underline">Installatie</a></li>
            <li><a href="#gezondheid" className="hover:underline">Veiligheid &amp; gezondheid</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Wat is omgekeerde osmose */}
        <section id="wat-is">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is omgekeerde osmose?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Om <strong>omgekeerde osmose</strong> te begrijpen, helpt het eerst gewone osmose te
            kennen. Osmose is een natuurkundig verschijnsel waarbij water spontaan door een
            semipermeabel (selectief doorlaatbaar) membraan stroomt — vanaf de kant met weinig
            opgeloste stoffen naar de kant met veel opgeloste stoffen. Planten gebruiken dit
            principe om water via hun wortels op te nemen.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Bij <strong>omgekeerde osmose</strong> draaien we dit proces om. Door waterdruk
            (typisch 3 tot 6 bar) wordt water in de tegengestelde richting door het membraan
            geperst: van de geconcentreerde kant (leidingwater met alle opgeloste stoffen) naar
            de schone kant. Het membraan houdt vrijwel alles tegen wat groter is dan een
            watermolecuul. Wat overblijft, is <strong>praktisch zuiver H₂O</strong>.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een modern osmose systeem bestaat niet uit één maar uit <strong>vier
            filterstappen</strong> in serie. Elk filter heeft een specifieke rol: het beschermt
            het kostbare membraan tegen vroegtijdige slijtage en zorgt voor een optimale
            eindkwaliteit. De vier stappen zijn:
          </p>
          <ol className="space-y-2 text-gray-700 list-decimal list-inside mb-4">
            <li><strong>Sedimentfilter</strong> (5 micron): vangt zand, roest en slibdeeltjes</li>
            <li><strong>Koolstoffilter (pre)</strong>: verwijdert chloor dat het membraan zou aantasten</li>
            <li><strong>RO-membraan</strong> (0,0001 micron): het hart van het systeem</li>
            <li><strong>Koolstoffilter (post)</strong>: polijst de smaak van het eindproduct</li>
          </ol>
          <p className="text-gray-700 leading-relaxed">
            Wil je nog dieper duiken in de scheikundige en fysische achtergrond? Lees dan ons
            kennisbankartikel <Link href="/kennisbank/osmose-water" className="text-[#005F8A] underline hover:no-underline">over osmose water en hoe het ontstaat</Link>.
          </p>
        </section>

        {/* Hoe werkt het stap voor stap */}
        <section id="hoe-werkt">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt het stap voor stap?</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Wanneer je de osmose kraan opent, doorloopt het leidingwater binnen enkele seconden
            de volgende vier filters. De doorstroming is relatief traag (typisch 50–100 liter
            per dag) — daarom hebben veel systemen een kleine drukvat als buffer.
          </p>
          <div className="space-y-4">
            {[
              {
                nr: '1',
                titel: 'Sedimentfilter (mechanisch)',
                desc:
                  'Een polypropyleen filter met poriën van circa 5 micron. Vangt zandkorrels, roestdeeltjes, slib en andere mechanische verontreinigingen op. Beschermt de volgende filterstappen tegen verstopping.',
              },
              {
                nr: '2',
                titel: 'Pre-koolstoffilter (chemisch)',
                desc:
                  'Actieve kool absorbeert chloor, chlooramines, geurstoffen en organische verbindingen. Cruciaal omdat chloor het RO-membraan onomkeerbaar zou beschadigen.',
              },
              {
                nr: '3',
                titel: 'RO-membraan (moleculair)',
                desc:
                  'Een opgerolde polyamide membraanrol met poriën van 0,0001 micron. Onder druk passeert alleen water; opgeloste zouten, metalen, pesticiden en zelfs virussen worden tegengehouden. Het afgewezen water (concentraat) wordt naar de afvoer geleid.',
              },
              {
                nr: '4',
                titel: 'Post-koolstoffilter (polishing)',
                desc:
                  'Een laatste fijne actieve kool die eventuele restsmaak verwijdert. Vooral belangrijk als het water in een drukvat is opgeslagen — dat geeft het eindproduct een fris-neutrale smaak.',
              },
            ].map(s => (
              <div key={s.nr} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0">
                  {s.nr}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Tip:</strong> sommige premiumsystemen voegen een
            vijfde stap toe — een <em>remineralisatiepatroon</em> dat licht calcium en magnesium
            teruggeeft voor een vollere smaak. Wanneer dat zinvol is, leggen we uit op de pagina <Link href="/omgekeerde-osmose/voor-thuis" className="text-[#005F8A] underline hover:no-underline">osmose apparaat voor thuis</Link>.
          </div>
        </section>

        {/* Wat verwijdert het */}
        <section id="verwijdert">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat verwijdert omgekeerde osmose allemaal?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Omgekeerde osmose is wereldwijd de gouden standaard voor drinkwaterfiltratie. In
            tegenstelling tot een filterkan of een actieve koolstoffilter werkt RO op
            <em> moleculair niveau</em>: alles wat groter is dan een watermolecuul wordt
            tegengehouden. Hieronder een overzicht van wat een goed onderhouden systeem
            verwijdert.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Categorie</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Voorbeeld</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">% verwijderd</th>
                </tr>
              </thead>
              <tbody>
                {verwijdertTabel.map(r => (
                  <tr key={r.categorie} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.categorie}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.stof}</td>
                    <td className="py-2.5 px-3 text-right text-green-700 font-semibold">{r.verwijdering}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Percentages zijn typische waarden voor een goed onderhouden 4-staps systeem bij
            Nederlands leidingwater. Werkelijke prestaties hangen af van membraankwaliteit,
            waterdruk, temperatuur en filterouderdom.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Met name de verwijdering van <strong>PFAS</strong> en
            <strong> medicijnresten</strong> krijgt steeds meer aandacht. RIVM-metingen tonen
            aan dat deze stoffen in beperkte mate in het Nederlandse drinkwater voorkomen.
            Omgekeerde osmose is op dit moment één van de weinige consumentenoplossingen die ze
            effectief verwijdert.
          </p>
        </section>

        {/* Vergelijking met andere filtertypes */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Omgekeerde osmose vs andere filtertypes</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Niet elk &ldquo;waterfilter&rdquo; doet hetzelfde. Onderstaande tabel zet de vier
            populairste consumenttechnieken naast elkaar. Voor een nog uitgebreidere analyse:
            lees onze <Link href="/kennisbank/waterfilter-vergelijken" className="text-[#005F8A] underline hover:no-underline">complete waterfilter vergelijking</Link>.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Zuiverheid</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Kosten</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Onderhoud</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Ruimte</th>
                </tr>
              </thead>
              <tbody>
                {vergelijking.map(r => (
                  <tr
                    key={r.type}
                    className={r.highlight ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3">{r.type}</td>
                    <td className="py-2.5 px-3 text-right">{r.zuiverheid}</td>
                    <td className="py-2.5 px-3 text-right">{r.kosten}</td>
                    <td className="py-2.5 px-3 text-right">{r.onderhoud}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.ruimte}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Speciale aandacht voor Brita-achtige filterkannen: ze zijn goedkoop en compact, maar
            verwijderen slechts een fractie van wat een RO-systeem aanpakt. Bekijk onze diepe duik
            <Link href="/kennisbank/brita-vs-osmose" className="text-[#005F8A] underline hover:no-underline"> Brita versus omgekeerde osmose</Link> voor de feitelijke meetgegevens.
          </p>
        </section>

        {/* Geschiedenis */}
        <section id="geschiedenis">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Geschiedenis &amp; toepassingen</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het principe van osmose werd voor het eerst beschreven in 1748 door de Franse
            natuurkundige Jean-Antoine Nollet. Het duurde echter tot de jaren <em>50</em> en{' '}
            <em>60</em> van de twintigste eeuw voordat de eerste praktische omgekeerde
            osmose-membranen werden ontwikkeld aan de University of California. De doorbraak
            kwam in 1959 toen onderzoekers Sourirajan en Loeb een asymmetrisch celluloseacetaat
            membraan presenteerden dat zeewater effectief kon ontzilten.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De technologie kreeg vlucht in drie domeinen:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4 list-disc list-inside">
            <li>
              <strong>Zeewaterontzilting:</strong> in landen als Saoedi-Arabië, Israël en Spanje
              produceren reusachtige RO-installaties dagelijks miljoenen liters drinkwater uit
              zeewater. Israël wint vandaag de dag meer dan de helft van zijn drinkwater op deze
              manier.
            </li>
            <li>
              <strong>Ruimtevaart:</strong> NASA gebruikt al decennialang omgekeerde
              osmose-systemen in combinatie met andere filtratiestappen op het Internationaal
              Ruimtestation om afvalwater (inclusief urine en condens) te recyclen tot drinkbaar
              water.
            </li>
            <li>
              <strong>Industrie en thuisgebruik:</strong> sinds de jaren <em>80</em> wordt RO
              steeds compacter en betaalbaarder. Vandaag is een under-sink osmose systeem voor
              circa €200 verkrijgbaar en past het onder elke aanrecht.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            In Nederland is de adoptie pas de laatste tien jaar echt op gang gekomen, gedreven
            door bewustwording over kalk, microplastics en PFAS, en door het succes van
            kokendwaterkranen die de keuken hebben gemoderniseerd. Veel huishoudens combineren
            tegenwoordig een osmose filter met een <Link href="/kokend-water-kraan/met-filter" className="text-[#005F8A] underline hover:no-underline">kokend water kraan met filter</Link>.
          </p>
        </section>

        {/* Voordelen */}
        <section id="voordelen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voordelen van omgekeerde osmose</h2>
          <div className="space-y-4">
            {[
              {
                titel: 'Hoogste zuiverheid die thuis haalbaar is',
                tekst:
                  'Geen enkele andere thuisfiltratietechniek verwijdert zo breed en zo grondig. Van kalk en chloor tot microplastics, PFAS en virussen — een RO-membraan vangt het allemaal.',
              },
              {
                titel: 'Neutrale, fris-zachte smaak',
                tekst:
                  'Zonder chloor, kalk en metallieke ondertoon proeft osmose water schoon en mild. Veel mensen vergelijken het met goed bronwater. Voor koffie, thee en babymelk een ideaal startpunt.',
              },
              {
                titel: 'Beschermt apparaten tegen kalkaanslag',
                tekst:
                  'Waterkokers, koffiezetters en stoomovens leven veel langer omdat er geen calcium- en magnesiumzouten op de verwarmingselementen aanslaan. Ontkalkingsmiddel wordt overbodig.',
              },
              {
                titel: 'Duurzame keuze: geen plastic flessen',
                tekst:
                  'Een gemiddeld gezin dat overstapt van flessenwater bespaart 1000–2000 plastic flessen per jaar. Dat is een aanzienlijke milieuwinst, ook ten opzichte van glasflessen vanwege transport.',
              },
              {
                titel: 'Aanzienlijke besparing op de lange termijn',
                tekst:
                  'Bij een aanschafprijs van €200–€800 en jaarlijkse filterkosten van €60–€150 verdien je een systeem in twee à drie jaar terug ten opzichte van flessenwater (€400–€600/jr voor een gezin).',
              },
              {
                titel: 'Compact: alles onder het aanrecht',
                tekst:
                  'Moderne systemen zijn niet groter dan een grote brooddoos. Bij een 4-in-1 oplossing zoals een combinatie met een kokendwaterkraan staat er zelfs nog minder op je werkblad.',
              },
              {
                titel: 'Gemakkelijk in onderhoud',
                tekst:
                  'Geen kalk meer in je waterkoker, geen ontkalker meer in je koffiezetter, één jaarlijks filterwissel-momentje. Veel mensen vinden het een opluchting in de dagelijkse routine.',
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Nadelen — eerlijk besproken</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Geen techniek is perfect. Hieronder noemen we de drie meest gehoorde bezwaren tegen
            omgekeerde osmose, met daarbij een eerlijke nuance. Wil je deze discussie nog
            diepgaander zien? Lees ons artikel over <Link href="/kennisbank/reverse-osmosis-nadelen" className="text-[#005F8A] underline hover:no-underline">de nadelen van reverse osmosis</Link>.
          </p>
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">1. Spoelwater (afvalwater)</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Een klassiek systeem gebruikt 3 tot 5 liter spoelwater per liter gefilterd water.
                <strong> Nuance:</strong> moderne systemen met permeaatpomp halen 1:1 of zelfs
                beter. Het &ldquo;afvalwater&rdquo; is bovendien niet vies — het is gewoon
                geconcentreerd leidingwater dat je kunt gebruiken voor planten, schoonmaak of
                doorspoelen.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">2. Mineralen worden ook verwijderd</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Omdat het membraan ook calcium en magnesium tegenhoudt, mist osmose water de
                mineralen die wel in leidingwater zitten. <strong>Nuance:</strong> volgens de WHO
                en het Voedingscentrum krijgen we 95% van onze mineralen via voeding binnen.
                Bovendien zijn er optionele <em>remineralisatiepatronen</em> die calcium en
                magnesium kunnen teruggeven aan het gefilterde water.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">3. Trage doorstroom</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Een RO-membraan filtert relatief langzaam — ongeveer 50–100 liter per 24 uur.
                <strong> Nuance:</strong> met een drukvat als buffer (of een 4-in-1 systeem met
                geïntegreerd reservoir) merk je hier in de praktijk niets van. De kraan loopt
                gewoon op normale snelheid.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">4. Aanschaf- en plaatsingskosten</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Een goede installatie ligt tussen €200 en €800, en je hebt ruimte nodig onder
                het aanrecht. <strong>Nuance:</strong> de terugverdientijd ten opzichte van
                flessenwater is doorgaans twee tot drie jaar, daarna bespaar je structureel.
              </p>
            </div>
          </div>
        </section>

        {/* Voor wie geschikt */}
        <section id="voor-wie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voor wie is omgekeerde osmose geschikt?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Omgekeerde osmose is geen niche-product meer. Hieronder enkele profielen waarvoor
            een osmose filter bijzonder zinvol is.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                titel: 'Huishoudens in hardwatergebied',
                desc:
                  'Woon je in een gemeente met water boven 10 °dH (vrijwel heel Zuid- en Oost-Nederland)? Dan bespaart RO je een hoop kalkellende. Check je gebied op de pagina waterhardheid per gemeente.',
              },
              {
                titel: 'Gezinnen met jonge kinderen',
                desc:
                  'Voor babymelk en kinderdrinkflessen geeft osmose water rust: geen chloor, geen nitraat-restjes, geen microplastics.',
              },
              {
                titel: 'Koffie- en theeliefhebbers',
                desc:
                  'Schone watertoevoer is de geheim van een goede koffie- of theesmaak. Specialty baristas zweren bij gefilterd water.',
              },
              {
                titel: 'Mensen met gevoelige huid of allergieën',
                desc:
                  'Chloorvrij water kan helpen bij irritatie. Sommigen merken ook bij dagelijks drinken een verschil.',
              },
              {
                titel: 'Milieubewuste consumenten',
                desc:
                  'Verlost van duizenden plastic flessen per jaar. Een serieuze voetafdrukreductie zonder smaakcompromis.',
              },
              {
                titel: 'Bezitters van dure apparaten',
                desc:
                  'Heb je een hoogwaardige espressomachine, stoomoven of strijkijzer? Osmose water beschermt je investering.',
              },
            ].map(p => (
              <div key={p.titel} className="bg-white border border-gray-100 rounded-2xl p-4">
                <p className="font-semibold text-gray-900 mb-1 text-sm">{p.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Twijfel je over je waterhardheid? Bekijk de actuele cijfers per gemeente in onze <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">waterhardheid-database</Link>.
          </p>
        </section>

        {/* Kosten */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kosten: aanschaf, filters, water en energie</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We splitsen de kosten op in vier categorieën. Bedragen zijn realistische gemiddelden
            voor een huishouden van 2–4 personen in Nederland.
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
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">Aanschaf basissysteem</td>
                  <td className="py-2.5 px-3 text-right">€ 150–800</td>
                  <td className="py-2.5 px-3 text-right text-gray-400">—</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">Installatie (DIY)</td>
                  <td className="py-2.5 px-3 text-right">€ 0–25</td>
                  <td className="py-2.5 px-3 text-right text-gray-400">—</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">Filtervervanging</td>
                  <td className="py-2.5 px-3 text-right text-gray-400">—</td>
                  <td className="py-2.5 px-3 text-right">€ 60–150</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">Extra waterverbruik</td>
                  <td className="py-2.5 px-3 text-right text-gray-400">—</td>
                  <td className="py-2.5 px-3 text-right">€ 5–20</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">Energie (pomp, indien aanwezig)</td>
                  <td className="py-2.5 px-3 text-right text-gray-400">—</td>
                  <td className="py-2.5 px-3 text-right">€ 2–10</td>
                </tr>
                <tr className="bg-[#E0F2FE] font-semibold">
                  <td className="py-2.5 px-3">Totaal jaarlijks</td>
                  <td className="py-2.5 px-3 text-right text-gray-400">—</td>
                  <td className="py-2.5 px-3 text-right">€ 70–180</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Vergelijk dit met een gezin dat dagelijks flessenwater drinkt: gemakkelijk €400–€600
            per jaar plus de ergernis van flessen sjouwen. De
            terugverdientijd van een RO-systeem is doorgaans 2 tot 3 jaar.
          </p>
        </section>

        {/* Onderhoud */}
        <section id="onderhoud">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderhoud: filterwisselschema</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Onderhoud aan een RO-systeem stelt in de praktijk weinig voor. De drie meest
            voorkomende onderhoudshandelingen:
          </p>
          <div className="space-y-3">
            {[
              {
                onderdeel: 'Sedimentfilter',
                interval: 'Elke 6 maanden',
                actie: 'Patronen wisselen. Visuele check: bruinkleuring is teken van verzadiging.',
              },
              {
                onderdeel: 'Pre-koolstoffilter',
                interval: 'Elke 6 maanden',
                actie: 'Patronen wisselen. Kritisch om RO-membraan te beschermen tegen chloor.',
              },
              {
                onderdeel: 'RO-membraan',
                interval: 'Elke 2–3 jaar',
                actie:
                  'Vervangen. Bij merkbare daling van waterproductie of smaak eerder controleren.',
              },
              {
                onderdeel: 'Post-koolstoffilter',
                interval: 'Elke 12 maanden',
                actie: 'Polishing filter wisselen voor optimale smaak.',
              },
              {
                onderdeel: 'Drukvat (indien aanwezig)',
                interval: 'Jaarlijks druk controleren',
                actie:
                  'Met fietspomp drukvat op 6–8 psi opvoeren wanneer leeg. Periodiek sanitiseren.',
              },
              {
                onderdeel: 'Systeem desinfecteren',
                interval: 'Bij filterwissel',
                actie: 'Behuizingen reinigen met een milde chloorbleekoplossing en goed spoelen.',
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
            Bij een geïntegreerd systeem zoals de PureAqua 4-in-1 kraan combineer je alles in
            één jaarlijkse filterwissel — geen losse patronen meer. Lees meer over deze optie op
            de pagina <Link href="/omgekeerde-osmose/voor-thuis" className="text-[#005F8A] underline hover:no-underline">osmose apparaat voor thuis</Link>.
          </p>
        </section>

        {/* Installatie */}
        <section id="installatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Installatie: kort overzicht</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De meeste osmose systemen zijn ontworpen voor doe-het-zelf installatie. In grote
            lijnen volg je deze stappen:
          </p>
          <ol className="space-y-2 text-gray-700 list-decimal list-inside mb-4">
            <li>Koudwatertoevoer onder het aanrecht afsluiten.</li>
            <li>Aanboorkraan (saddle valve) op de koudwaterleiding monteren.</li>
            <li>Systeem aansluiten op water-in, afvoer en drukvat (indien aanwezig).</li>
            <li>Gat van 35–38 mm boren in aanrecht voor de osmose kraan.</li>
            <li>Eerste flush van 5–10 liter doorlaten om het membraan te conditioneren.</li>
          </ol>
          <p className="text-gray-700 leading-relaxed">
            Een uitgebreide stap-voor-stap installatiegids met afbeeldingen vind je op de pagina <Link href="/omgekeerde-osmose/voor-thuis" className="text-[#005F8A] underline hover:no-underline">osmose voor thuis</Link>. Wil je geen losse extra kraan maar één elegante geïntegreerde oplossing? Bekijk dan een <Link href="/kokend-water-kraan/met-filter" className="text-[#005F8A] underline hover:no-underline">kokend water kraan met filter</Link>.
          </p>
        </section>

        {/* Veiligheid en gezondheid */}
        <section id="gezondheid">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Veiligheid &amp; gezondheid</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De meest gestelde vraag rond omgekeerde osmose: is het wel <strong>gezond</strong>{' '}
            om water te drinken waar de mineralen uit zijn? Het korte antwoord: ja, voor de
            overgrote meerderheid van mensen is osmose water volkomen veilig.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De Wereldgezondheidsorganisatie (WHO) heeft uitgebreid onderzoek gedaan naar de
            gezondheidsimpact van demineraliseerd water. Conclusie: in een normaal Westers
            voedingspatroon is de bijdrage van mineralen uit drinkwater minder dan 5% van de
            totale dagelijkse inname. Calcium komt vooral uit zuivel en groenten; magnesium uit
            noten, zaden, peulvruchten en groene bladgroenten.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Voor specifieke groepen — bijvoorbeeld topsporters die veel zweten of mensen met
            specifieke nieraandoeningen — kan het verstandig zijn om met de huisarts of diëtist
            te overleggen. Voor het reguliere gezin is osmose water een prima keuze. Wil je het
            zekere voor het onzekere nemen? Een <em>remineralisatiepatroon</em> kan calcium en
            magnesium toevoegen na de RO-stap.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Verder duiken? Lees ons artikel <Link href="/kennisbank/osmose-water-drinken" className="text-[#005F8A] underline hover:no-underline">osmose water drinken — is het gezond?</Link> met de wetenschappelijke onderbouwing.
          </p>
          <div className="mt-4 bg-red-50 border border-red-100 rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-red-900">Belangrijk:</strong> we maken op deze pagina geen
            medische claims. Omgekeerde osmose is een filtratietechniek, geen medicijn. Bij
            specifieke gezondheidsvragen raden we aan te overleggen met een professional.
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Subcategorieën */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen op WaterfilterPlatform</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Osmose filter kopen',
                desc: 'Welk systeem past bij jou? Onafhankelijke vergelijking van de beste osmose filters.',
              },
              {
                href: '/omgekeerde-osmose/wat-is-osmose-water',
                title: 'Wat is osmose water?',
                desc: 'Eigenschappen, smaak, pH-waarde en veelgestelde vragen over osmose water.',
              },
              {
                href: '/omgekeerde-osmose/voor-thuis',
                title: 'Osmose apparaat voor thuis',
                desc: 'Drie hoofdtypen voor thuisgebruik vergeleken op prijs, capaciteit en gemak.',
              },
              {
                href: '/kokend-water-kraan/met-filter',
                title: 'Kokend water kraan met filter',
                desc: 'Geïntegreerde oplossing: kokend, koud en gefilterd water uit één kraan.',
              },
              {
                href: '/kennisbank/osmose-water',
                title: 'Kennisbank: osmose water',
                desc: 'Diepgaande achtergrond over de scheikunde van osmose en zuiver water.',
              },
              {
                href: '/kennisbank/brita-vs-osmose',
                title: 'Brita vs osmose',
                desc: 'Wat verwijdert welk filter écht? Een feitelijke vergelijking met meetdata.',
              },
              {
                href: '/kennisbank/reverse-osmosis-nadelen',
                title: 'Nadelen van reverse osmosis',
                desc: 'Eerlijke discussie van de drie meest gehoorde bezwaren, met nuance.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Zoek de actuele waterhardheid op voor jouw woonplaats in Nederland.',
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over omgekeerde osmose</h2>
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
