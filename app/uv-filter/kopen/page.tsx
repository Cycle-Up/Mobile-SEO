import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'UV waterfilter kopen: beste modellen en koopgids 2026',
  description:
    'UV waterfilter kopen in Nederland: vergelijking van instap-, midden- en professionele modellen op debiet, UV-dosis, lampvermogen, NSF 55 certificering en jaarkosten.',
  alternates: { canonical: 'https://waterfilterplatform.nl/uv-filter/kopen' },
  openGraph: {
    title: 'UV waterfilter kopen: beste modellen en koopgids 2026',
    description:
      'Welk UV-waterfilter kopen? Koopgids met 6-modellen vergelijkingstabel, koopadvies op debiet en UV-dosis, NSF/ANSI 55 certificering en installatiekosten.',
    url: 'https://waterfilterplatform.nl/uv-filter/kopen',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe kies ik het juiste UV-waterfilter?',
    answer:
      'De drie belangrijkste koopfactoren zijn: (1) debiet — zorg dat het systeem de maximale waterafname in L/min van uw situatie aankan bij de vereiste UV-dosis van 40 mJ/cm²; (2) NSF/ANSI 55 Klasse A certificering voor onbehandeld bronwater of putwater, Klasse B voor aanvulling op stadswater; (3) lampvermogen en kwartsglas vs. hard glas omhulling — kwartsglas heeft hogere UV-transmissie en langere levensduur. Controleer altijd de UV-dosis bij maximaal debiet, niet alleen het maximale debiet zelf.',
  },
  {
    question: 'Wat is NSF/ANSI 55 certificering en heb ik Klasse A of B nodig?',
    answer:
      'NSF/ANSI 55 is de internationale prestatienorm voor UV-waterbehandelingssystemen. Klasse A (>40 mJ/cm² bij maximaal debiet) is vereist voor onbehandeld water: putwater, bronwater, regenwater. Klasse B is voor aanvullende bescherming bovenop al behandeld gemeentelijk drinkwater. Als u putwater of regenwater gebruikt: kies altijd Klasse A. Bij stadswater als extra veiligheidsmaatregel volstaat Klasse B. Systemen zonder certificering bieden geen gegarandeerde UV-dosis.',
  },
  {
    question: 'Hoeveel liter per minuut (L/min) heb ik nodig voor mijn UV-filter?',
    answer:
      'Voor één kraan (drinkwater): een systeem met 4–8 L/min debiet is voldoende. Voor heel-huis bescherming: reken op 20–40 L/min afhankelijk van het aantal badkamers en aansluitpunten. Een eengezinswoning met 2 badkamers heeft typisch een piekverbruik van 25–35 L/min. Let op: kies altijd een systeem waarbij de UV-dosis van 40 mJ/cm² is gegarandeerd bij het maximale debiet — niet alleen het debiet als losstaande spec.',
  },
  {
    question: 'Wat zijn de jaarlijkse kosten van een UV-waterfilter?',
    answer:
      'Jaarlijkse kosten bestaan uit: UV-lampvervanging €30–60 (elk jaar, ook als lamp nog brandt — intensiteit daalt), kwartsglas reinigen (eigen arbeid), pre-filters (sediment + koolstof) €20–50 per jaar, en energie (6–55 Watt afhankelijk van model) €10–25 per jaar. Totaal per jaar: €60–135 afhankelijk van het systeem. Professionele systemen hebben hogere lampkosten maar langer membraaninterval.',
  },
  {
    question: 'Kan ik een UV-filter zelf installeren of heb ik een installateur nodig?',
    answer:
      'Inline UV-systemen (onder aanrecht, één kraan) zijn voor handige doe-het-zelvers goed zelf te installeren: het systeem wordt in de bestaande waterleiding gesneden via een T-stuk, slangen worden aangesloten en de lamp wordt geaard op het stopcontact. Heel-huis systemen (op de hoofdwaterinlaat) vereisen werken aan de hoofdleiding en worden professionele installatie aanbevolen: €80–150 inclusief materiaal. Raadpleeg altijd een loodgieter bij twijfel over de waterdruk en installatielocatie.',
  },
  {
    question: 'Wat is het verschil tussen een kwartsglas en hard glas omhulling?',
    answer:
      'De omhulling (sleeve) beschermt de UV-lamp tegen watercontact. Kwartsglas (quartz) heeft een UV-transmissie van 90%+ en is bestand tegen thermische schokken — de standaard in professionele systemen en de aanbevolen keuze voor putwater. Hard glas (soda-lime) heeft een lagere UV-transmissie van circa 60–75%, waardoor de effectieve UV-dosis lager uitvalt bij hetzelfde lampvermogen. Kies voor systemen met kwartsglas omhulling voor maximale prestaties en levensduur.',
  },
  {
    question: 'Hoe lang gaat een UV-lamp mee?',
    answer:
      'UV-lampen worden jaarlijks vervangen, ongeacht of ze nog branden. Na circa 8.000–12.000 branduren (bij continu gebruik circa 1 jaar) daalt de UV-intensiteit onder de 40 mJ/cm² drempel. De lamp kan nog zichtbaar branden maar levert onvoldoende UV-C voor effectieve desinfectie. Vervang altijd op jaarlijkse basis. Systemen met UV-sensor geven alarm bij onderprestatie, maar ook die lampen worden jaarlijks vervangen.',
  },
  {
    question: 'Waar kan ik een UV-waterfilter kopen in Nederland?',
    answer:
      'UV-waterfilters zijn verkrijgbaar bij gespecialiseerde waterfilteraanbieders online (waterfilteraanbieders.nl, directfilter.nl, waterfiltershop.nl), bij bouwmarkten (Gamma, Hornbach — beperkt assortiment) en via installatiebedrijven voor complete installatie. Online aanbod is doorgaans uitgebreider en goedkoper. Controleer altijd of de aanbieder originele vervangingslampen levert voor uw model — generieke lampen passen soms niet of leveren lagere prestaties.',
  },
  {
    question: 'Heb ik naast een UV-filter ook een ander filter nodig?',
    answer:
      'Ja, altijd. UV-filters werken uitsluitend effectief bij helder water (turbiditeit &lt;1 NTU). De verplichte voorfiltratie bestaat minimaal uit: sedimentfilter (5 micron of fijner) voor het verwijderen van deeltjes, en een koolstofblokfilter voor het verwijderen van chloor (dat kwartsglas beschadigt) en organische stoffen die de UV-transmissie verlagen. Bij putwater of regenwater voeg je ook een grof sedimentfilter (20–50 micron) toe als eerste stap.',
  },
];

type ModelRij = {
  model: string;
  categorie: string;
  prijs: string;
  debiet: string;
  uvDosis: string;
  lampVermogen: string;
  sleeve: string;
  nsf: string;
  jaarkosten: string;
};

const modellenTabel: ModelRij[] = [
  {
    model: 'Instap inline (6W)',
    categorie: 'Instap',
    prijs: '€80–120',
    debiet: '4–6 L/min',
    uvDosis: '30 mJ/cm²',
    lampVermogen: '6 Watt',
    sleeve: 'Hard glas',
    nsf: 'Klasse B',
    jaarkosten: '€35–55',
  },
  {
    model: 'Instap countertop',
    categorie: 'Instap',
    prijs: '€100–150',
    debiet: '3–5 L/min',
    uvDosis: '35 mJ/cm²',
    lampVermogen: '8 Watt',
    sleeve: 'Hard glas',
    nsf: 'Klasse B',
    jaarkosten: '€40–60',
  },
  {
    model: 'Middenklasse under-sink (11W)',
    categorie: 'Midden',
    prijs: '€150–220',
    debiet: '8–12 L/min',
    uvDosis: '40 mJ/cm²',
    lampVermogen: '11 Watt',
    sleeve: 'Kwartsglas',
    nsf: 'Klasse A',
    jaarkosten: '€50–80',
  },
  {
    model: 'Middenklasse heel-huis (25W)',
    categorie: 'Midden',
    prijs: '€220–300',
    debiet: '18–25 L/min',
    uvDosis: '40 mJ/cm²',
    lampVermogen: '25 Watt',
    sleeve: 'Kwartsglas',
    nsf: 'Klasse A',
    jaarkosten: '€60–90',
  },
  {
    model: 'Professioneel heel-huis (40W)',
    categorie: 'Professioneel',
    prijs: '€300–450',
    debiet: '30–50 L/min',
    uvDosis: '40+ mJ/cm²',
    lampVermogen: '40 Watt',
    sleeve: 'Kwartsglas',
    nsf: 'Klasse A',
    jaarkosten: '€75–110',
  },
  {
    model: 'Professioneel whole-house (55W)',
    categorie: 'Professioneel',
    prijs: '€400–600',
    debiet: '50–75 L/min',
    uvDosis: '40+ mJ/cm²',
    lampVermogen: '55 Watt',
    sleeve: 'Kwartsglas',
    nsf: 'Klasse A',
    jaarkosten: '€90–135',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'UV-filter', url: 'https://waterfilterplatform.nl/uv-filter' },
  { name: 'Kopen', url: 'https://waterfilterplatform.nl/uv-filter/kopen' },
];

export default function UvFilterKopenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'UV waterfilter kopen: beste modellen en koopgids 2026',
          description:
            'UV waterfilter kopen in Nederland: vergelijking van instap-, midden- en professionele modellen op debiet, UV-dosis, NSF 55 certificering en jaarkosten.',
          datePublished: '2026-03-10',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/uv-filter/kopen',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/uv-filter" className="hover:text-[#005F8A]">UV-filter</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Kopen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            UV waterfilter kopen: beste modellen en koopgids 2026
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Een UV-waterfilter kopen vereist meer dan alleen een prijs vergelijken. Debiet in
            L/min, UV-dosis in mJ/cm², NSF/ANSI 55 certificering, kwarts- of hardglas omhulling
            en jaarlijkse lampkosten bepalen samen of je systeem werkelijk veilig water levert.
            Deze koopgids helpt je de juiste keuze maken.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~9 min leestijd</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">

        <QuickAnswer answer="UV-waterfilter kopen: kies op basis van debiet (L/min), UV-dosis (min. 40 mJ/cm²) en NSF/ANSI 55 Klasse A (voor putwater) of B (voor stadswater). Instap €80–150, midden €150–300, professioneel €300+. Altijd gecombineerd met sediment- en koolstoffilter. Lampvervanging jaarlijks €30–60." />

        {/* Inhoudsopgave */}
        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#criteria', 'Koopfactoren: debiet, UV-dosis, certificering'],
              ['#modellen', '6-modellen vergelijkingstabel'],
              ['#installatie', 'Installatievereisten'],
              ['#jaarkosten', 'Jaarlijkse kosten'],
              ['#diy', 'Zelf installeren of loodgieter'],
              ['#specs', 'Wat zoeken in specificaties?'],
              ['#waar', 'Waar kopen in Nederland?'],
              ['#faq', 'Veelgestelde vragen'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#003F5C] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Inleiding */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat moet je weten voor je een UV-waterfilter koopt?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            UV-waterfilters lijken op basis van aanschafprijs makkelijk te vergelijken, maar de
            werkelijke kwaliteit en geschiktheid schuilt in technische specificaties die niet
            altijd prominent worden vermeld. Een goedkoop UV-filter kan een onvoldoende UV-dosis
            leveren bij normaal waterverbruik — waardoor het geen echte bescherming biedt.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Het is ook belangrijk te begrijpen wat een UV-filter doet en niet doet. Voor een
            diepgaande uitleg van de werking, zie onze pagina over{' '}
            <Link href="/uv-filter/werking" className="text-[#005F8A] underline hover:no-underline">
              UV-waterfilter werking
            </Link>.
            UV inactiveert biologische organismen maar verwijdert geen chemische stoffen. Voor
            een compleet systeem combineer je UV altijd met sediment- en koolstoffilter.
          </p>
        </section>

        {/* Koopfactoren */}
        <section id="criteria">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            De 5 belangrijkste koopfactoren voor een UV-waterfilter
          </h2>
          <div className="space-y-4">
            <div className="border border-gray-100 rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#003F5C] text-white font-bold flex items-center justify-center shrink-0 text-sm">1</div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Debiet in L/min bij 40 mJ/cm²</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    De meest kritieke spec. Het debiet moet voldoende zijn voor jouw toepassing
                    <em> terwijl de UV-dosis van minimaal 40 mJ/cm² gegarandeerd blijft</em>. Een
                    systeem met nominaal debiet van 20 L/min dat slechts 30 mJ/cm² levert bij dat
                    debiet voldoet niet aan de NSF Klasse A norm. Vraag altijd naar de dosis bij
                    maximaal debiet. Voor één kraan: 4–8 L/min. Voor heel-huis: 20–50 L/min.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-100 rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#003F5C] text-white font-bold flex items-center justify-center shrink-0 text-sm">2</div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">NSF/ANSI 55 certificering — Klasse A of B</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Klasse A (&gt;40 mJ/cm²): vereist voor onbehandelde bronnen zoals putwater,
                    bronwater en regenwater. Klasse B: voor aanvullende desinfectie op al behandeld
                    stadswater. Systemen zonder certificering bieden geen gegarandeerde prestaties.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-100 rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#003F5C] text-white font-bold flex items-center justify-center shrink-0 text-sm">3</div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Sleeve type: kwartsglas vs. hard glas</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Kwartsglas (quartz): UV-transmissie 90%+, thermisch stabiel, levensduur
                    5–7 jaar. Hard glas (soda-lime): UV-transmissie 60–75%, lagere effectieve
                    dosis bij zelfde lampvermogen. Kies kwartsglas voor putwater en toepassingen
                    waarbij maximale desinfectie vereist is.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-100 rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#003F5C] text-white font-bold flex items-center justify-center shrink-0 text-sm">4</div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Kosten vervangingslamp</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Lampen worden jaarlijks vervangen. Controleer de prijs en beschikbaarheid van
                    de originele vervangingslamp voor uw model. Proprietary lampen van bepaalde
                    merken kosten €50–80 per jaar; universele compatibele lampen €25–40. Bij
                    twijfel: kies een merk met breed beschikbare vervangingsonderdelen.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-100 rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#003F5C] text-white font-bold flex items-center justify-center shrink-0 text-sm">5</div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">UV-sensor en alarm</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Hogere modellen hebben een optische UV-sensor die continu de intensiteit bewaakt
                    en alarm geeft bij te lage UV-output. Dit is een extra veiligheidsmaatregel voor
                    putwater en kritische toepassingen. Basismodellen hebben geen sensor en vereisen
                    strikte jaarlijkse lampvervanging op schema.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6-modellen vergelijkingstabel */}
        <section id="modellen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Vergelijkingstabel: 6 UV-waterfilter categorieën
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Onderstaande tabel vergelijkt zes categorieën UV-waterfilters van instap tot
            professioneel. De specificaties zijn representatief voor kwalitatieve systemen in
            elk prijssegment. Scroll horizontaal op mobiel.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[720px] text-xs border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-3 py-3 font-semibold">Model/categorie</th>
                  <th className="text-center px-2 py-3 font-semibold">Prijs</th>
                  <th className="text-center px-2 py-3 font-semibold">Debiet</th>
                  <th className="text-center px-2 py-3 font-semibold">UV-dosis</th>
                  <th className="text-center px-2 py-3 font-semibold">Vermogen</th>
                  <th className="text-center px-2 py-3 font-semibold">Sleeve</th>
                  <th className="text-center px-2 py-3 font-semibold">NSF 55</th>
                  <th className="text-center px-2 py-3 font-semibold">Jaarkosten</th>
                </tr>
              </thead>
              <tbody>
                {modellenTabel.map((row, i) => (
                  <tr
                    key={row.model}
                    className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${row.categorie === 'Midden' ? 'border-l-4 border-[#005F8A]' : ''}`}
                  >
                    <td className="px-3 py-2.5">
                      <span className="font-medium text-gray-900 block">{row.model}</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                        row.categorie === 'Instap' ? 'bg-gray-100 text-gray-600' :
                        row.categorie === 'Midden' ? 'bg-[#E0F2FE] text-[#005F8A]' :
                        'bg-amber-100 text-amber-800'
                      }`}>{row.categorie}</span>
                    </td>
                    <td className="px-2 py-2.5 text-center font-semibold text-gray-900">{row.prijs}</td>
                    <td className="px-2 py-2.5 text-center text-gray-700">{row.debiet}</td>
                    <td className={`px-2 py-2.5 text-center font-medium ${row.uvDosis.includes('40+') || row.uvDosis === '40 mJ/cm²' ? 'text-green-700' : 'text-orange-600'}`}>
                      {row.uvDosis}
                    </td>
                    <td className="px-2 py-2.5 text-center text-gray-700">{row.lampVermogen}</td>
                    <td className={`px-2 py-2.5 text-center text-sm font-medium ${row.sleeve === 'Kwartsglas' ? 'text-green-700' : 'text-gray-600'}`}>
                      {row.sleeve}
                    </td>
                    <td className={`px-2 py-2.5 text-center text-sm font-medium ${row.nsf === 'Klasse A' ? 'text-green-700' : 'text-gray-600'}`}>
                      {row.nsf}
                    </td>
                    <td className="px-2 py-2.5 text-center text-gray-700">{row.jaarkosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            Specificaties zijn representatief voor kwalitatieve systemen in elk segment.
            Precieze specs variëren per merk en model. Groen = voldoet aan NSF/ANSI 55 Klasse A.
          </p>
          <div className="mt-4 bg-[#E0F2FE] border border-[#005F8A]/20 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Aanbeveling:</strong> Voor putwater of bronwater
            is het middenklasse heel-huis systeem (25W, kwartsglas, NSF Klasse A) de beste
            prijs-kwaliteitsbalans. Stadswater als extra zekerheid: een instap inline systeem
            met Klasse B is voldoende.
          </div>
        </section>

        {/* Installatievereisten */}
        <section id="installatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Installatievereisten voor een UV-waterfilter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een UV-filter werkt alleen effectief als de installatievolgorde correct is. De
            volgende vereisten zijn van toepassing bij elke installatie:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                titel: 'Verplichte voorfiltratie',
                tekst: 'Altijd een sedimentfilter (5 micron of fijner) vóór het UV-systeem. Bij putwater ook een grof sedimentfilter (20–50 micron) als eerste stap. Een koolstofblokfilter voor chloorverwijdering (beschermt kwartsglas).',
              },
              {
                titel: 'Stopcontact in de buurt',
                tekst: 'UV-lampen hebben een 230V stroomaansluiting nodig. Inline systemen (6–11W) zijn te voeden via een normale adapter. Heel-huis systemen (25–55W) hebben een geaarde wandcontactdoos nodig nabij de installatielocatie.',
              },
              {
                titel: 'Waterdruk 2–6 bar',
                tekst: 'UV-systemen werken bij standaard leidingwaterdruk. Bij druk onder 2 bar (soms bij eigen put zonder drukpomp) is het debiet te laag voor effectieve desinfectie. Voeg dan een drukpomp toe vóór het UV-systeem.',
              },
              {
                titel: 'Temperatuur waterinlaat',
                tekst: 'UV-lampen zijn ontworpen voor koud water (max. 38°C). Installeer nooit op de warmwateraansluiting. Warm water beschadigt UV-lampen en kwartsglas op termijn.',
              },
              {
                titel: 'Horizontale of verticale plaatsing',
                tekst: 'De meeste UV-systemen kunnen zowel horizontaal als verticaal worden gemonteerd. Controleer de fabrieksspecificaties: sommige systemen vereisen een specifieke oriëntatie voor optimale waterstroomverdeling in de kamer.',
              },
              {
                titel: 'Afvoer niet nodig',
                tekst: 'UV-filters produceren geen afvalwater — een groot voordeel ten opzichte van osmose. Er is geen sifon of afvoerverbinding nodig. Dit vereenvoudigt de installatie aanzienlijk.',
              },
            ].map(item => (
              <div key={item.titel} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-2 text-sm">{item.titel}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.tekst}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Jaarlijkse kosten */}
        <section id="jaarkosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Jaarlijkse kosten van een UV-waterfilter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Naast de aanschafprijs zijn er jaarlijkse onderhoudskosten. Onderstaande tabel geeft
            een overzicht van alle kostenposten.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-4 font-semibold text-[#003F5C]">Kostenpost</th>
                  <th className="text-center py-2.5 px-3 font-semibold text-[#003F5C]">Instap</th>
                  <th className="text-center py-2.5 px-3 font-semibold text-[#003F5C]">Midden</th>
                  <th className="text-center py-2.5 px-3 font-semibold text-[#003F5C]">Professioneel</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { post: 'UV-lamp vervanging (jaarlijks)', instap: '€25–35', midden: '€35–55', pro: '€50–75' },
                  { post: 'Sedimentfilter (2×/jaar)', instap: '€10–20', midden: '€15–25', pro: '€20–35' },
                  { post: 'Koolstoffilter (1×/jaar)', instap: '€8–15', midden: '€12–20', pro: '€18–30' },
                  { post: 'Energie (8–55W continu)', instap: '€8–12', midden: '€12–20', pro: '€18–28' },
                  { post: 'Totaal per jaar', instap: '€51–82', midden: '€74–120', pro: '€106–168' },
                ].map((row, i) => (
                  <tr key={row.post} className={i === 4 ? 'bg-[#E0F2FE] font-semibold text-[#003F5C]' : i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-gray-50 border-b border-gray-100'}>
                    <td className="py-2.5 px-4">{row.post}</td>
                    <td className="py-2.5 px-3 text-center">{row.instap}</td>
                    <td className="py-2.5 px-3 text-center">{row.midden}</td>
                    <td className="py-2.5 px-3 text-center">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* DIY vs loodgieter */}
        <section id="diy">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Zelf installeren of een loodgieter inschakelen?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            De installatiemoeilijkheid varieert sterk per type UV-systeem.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="font-bold text-green-900 mb-3">Zelf installeren: inline (1 kraan)</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2 items-start"><span className="text-green-600 shrink-0">✓</span>Waterleiding afsluiten en T-stuk plaatsen</li>
                <li className="flex gap-2 items-start"><span className="text-green-600 shrink-0">✓</span>Slangen aansluiten op sediment, koolstof en UV-eenheid</li>
                <li className="flex gap-2 items-start"><span className="text-green-600 shrink-0">✓</span>Adapter in stopcontact, lamp plaatsen</li>
                <li className="flex gap-2 items-start"><span className="text-green-600 shrink-0">✓</span>Doorlooptijd: 1–2 uur</li>
                <li className="flex gap-2 items-start"><span className="text-green-600 shrink-0">✓</span>Geen speciale gereedschappen nodig</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="font-bold text-amber-900 mb-3">Installateur: heel-huis systeem</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2 items-start"><span className="text-amber-600 shrink-0">!</span>Werken aan de hoofdwateraansluiting</li>
                <li className="flex gap-2 items-start"><span className="text-amber-600 shrink-0">!</span>Drukgroep correct dimensioneren</li>
                <li className="flex gap-2 items-start"><span className="text-amber-600 shrink-0">!</span>Aarding en elektra controleren</li>
                <li className="flex gap-2 items-start"><span className="text-amber-600 shrink-0">!</span>Installatiekosten: €80–150 inclusief materiaal</li>
                <li className="flex gap-2 items-start"><span className="text-amber-600 shrink-0">!</span>Aanbevolen bij putwater en professionele systemen</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Specs uitleg */}
        <section id="specs">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat zoeken in specificaties — NSF/ANSI 55 uitgelegd
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij het lezen van productspecificaties zijn er drie punten die veel kopers over het
            hoofd zien:
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-[#005F8A] bg-[#E0F2FE] rounded-r-xl px-5 py-4">
              <p className="font-semibold text-[#003F5C] mb-1">NSF/ANSI 55 Klasse A — &gt;40 mJ/cm²</p>
              <p className="text-sm text-gray-700">
                Vereist voor microbiologisch onzekere bronnen. Systeem moet 6-log (99,9999%)
                reductie van testmicro-organismen kunnen aantonen bij maximaal nominaal debiet.
                Controleer of de 40 mJ/cm² dosis geldt bij het vermelde maximale debiet.
              </p>
            </div>
            <div className="border-l-4 border-gray-300 bg-gray-50 rounded-r-xl px-5 py-4">
              <p className="font-semibold text-gray-700 mb-1">NSF/ANSI 55 Klasse B — aanvullend</p>
              <p className="text-sm text-gray-600">
                Voor aanvullende bescherming op al behandeld stadswater. Lagere UV-dosiseis.
                Niet geschikt voor putwater of andere onbehandelde bronnen.
              </p>
            </div>
            <div className="border-l-4 border-amber-400 bg-amber-50 rounded-r-xl px-5 py-4">
              <p className="font-semibold text-amber-900 mb-1">Zonder certificering — niet aanbevolen</p>
              <p className="text-sm text-gray-700">
                Systemen zonder NSF-certificering bieden geen gegarandeerde UV-dosis. De fabrikant
                kan claims maken die niet onafhankelijk zijn geverifieerd. Kies altijd gecertificeerde
                systemen voor drinkwaterdesinfectie.
              </p>
            </div>
          </div>
        </section>

        {/* Waar kopen */}
        <section id="waar">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waar koop je een UV-waterfilter in Nederland?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            UV-waterfilters zijn in Nederland verkrijgbaar via meerdere kanalen met elk hun eigen
            voor- en nadelen:
          </p>
          <div className="space-y-3">
            {[
              {
                kanaal: 'Online waterfilterspecialisten',
                desc: 'Ruimste assortiment, productadvies, compatibele vervangingslampen, technische documentatie. Aanbevolen voor de beste keuze en nazorg. Zoek op specifieke termen als "UV waterfilter Klasse A" voor gericht aanbod.',
                score: 'Aanbevolen',
                kleur: 'green',
              },
              {
                kanaal: 'Bouwmarkten (Gamma, Hornbach)',
                desc: 'Beperkt assortiment, voornamelijk instapmodellen zonder NSF-certificering. Geschikt voor wie een eenvoudige extra beschermingslaag zoekt voor stadswater. Weinig productadvies beschikbaar.',
                score: 'Beperkt aanbod',
                kleur: 'orange',
              },
              {
                kanaal: 'Installatiebedrijven',
                desc: 'Leveren en installeren in één afspraak. Hogere prijzen maar inclusief professionele installatie, garantie en onderhoudsprogramma. Beste optie voor whole-house systemen bij putwater.',
                score: 'Compleet pakket',
                kleur: 'blue',
              },
            ].map(item => (
              <div key={item.kanaal} className="border border-gray-100 rounded-xl p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="font-semibold text-gray-900">{item.kanaal}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
                    item.kleur === 'green' ? 'bg-green-100 text-green-800' :
                    item.kleur === 'orange' ? 'bg-orange-100 text-orange-800' :
                    'bg-[#E0F2FE] text-[#005F8A]'
                  }`}>{item.score}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gerelateerde links */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer lezen over UV-filters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/uv-filter', title: 'UV-filter overzicht', desc: 'Complete gids over UV-waterfilters: werking, types en toepassingen.' },
              { href: '/uv-filter/werking', title: 'Hoe werkt een UV-filter?', desc: 'UV-C golflengte, DNA-schade, log-reductie en turbiditeitseis uitgelegd.' },
              { href: '/uv-filter/toepassingen', title: 'UV-filter toepassingen', desc: 'Putwater, regenwater, vakantiewoningen en meer — welk systeem voor welke toepassing?' },
              { href: '/waterfilter/welk-filter', title: 'Welk waterfilter heb ik nodig?', desc: 'Keuzehulp in drie stappen voor het juiste waterfilter.' },
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

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen: UV-waterfilter kopen
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details
                key={item.question}
                className="border border-gray-100 rounded-xl p-4 group"
              >
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
