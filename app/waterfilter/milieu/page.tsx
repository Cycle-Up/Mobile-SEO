import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterfilter en milieu: duurzamer dan flessenwater?',
  description:
    'Is een waterfilter duurzamer dan flessenwater? CO2-vergelijking, plastic afval en levenscyclus van osmose-, koolstof- en filterkan. Feiten en cijfers.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/milieu' },
  openGraph: {
    title: 'Waterfilter en milieu: duurzamer dan flessenwater?',
    description:
      'Een gezin van 3 genereert met flessenwater 50 kg plastic per jaar en 1.200 kg CO2. Een osmosefilter reduceert dit met meer dan 90%. Feiten en cijfers.',
    url: 'https://waterfilterplatform.nl/waterfilter/milieu',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Is een waterfilter duurzamer dan flessenwater?',
    answer:
      'Ja, aanzienlijk. Een gezin van 3 personen genereert met flessenwater per jaar circa 1.200 kg CO2 en 50 kg plastic afval. Een osmosefilter produceert minder dan 50 kg CO2 per jaar in gebruik (exclusief eenmalige productie-emissie) en genereert slechts 1-2 kg filterafval. Over een periode van 5 jaar is het CO2-voordeel van een osmosefilter ten opzichte van flessenwater meer dan 5.000 kg CO2.',
  },
  {
    question: 'Hoeveel CO2 produceert een fles water?',
    answer:
      'De CO2-voetafdruk van een fles mineraalwater van 0,5 liter bedraagt 0,3-0,4 kg CO2-equivalent. Dit omvat productie van de fles (PET-kunststof), transport van de bron naar de verpakkingsfabriek, transport naar het distributiepunt, koeling in de winkel, en transport naar huis. Bronwater dat uit Italie of Frankrijk naar Nederland komt heeft een significant hogere CO2-voetafdruk door transport.',
  },
  {
    question: 'Wat is het waterafval van een osmosefilter?',
    answer:
      'Traditionele osmosefilters hebben een afvalwaterverhouding van 3:1 of 4:1 (3-4 liter afvalwater per liter drinkwater). Moderne systemen bereiken een verhouding van 1:1. Dit afvalwater is niet verontreinigd; het bevat dezelfde stoffen als leidingwater maar in hogere concentratie. Het is bruikbaar voor toiletspoelen, tuinbewatering of schoonmaak, waardoor de netto waterverspilling beperkt blijft.',
  },
  {
    question: 'Zijn osmosefilter-cartridges recyclebaar?',
    answer:
      'Koolstofcartridges en sedimentfilters zijn deels recyclebaar; het geactiveerde koolstof is biologisch afbreekbaar. Het RO-membraan (polyamide) is moeilijker recyclebaar en belandt vaak in restafval. Sommige fabrikanten bieden terugnameprogrammas aan. Totale filterafval per jaar: 1-2 kg, vergeleken met 50 kg plastic bij flessenwater. De netto milieubelasting is altijd significant lager voor het filter.',
  },
  {
    question: 'Welk waterfilter is het meest milieuvriendelijk?',
    answer:
      'Van meest naar minst milieuvriendelijk: 1. Osmosefilter met hoge waterrecovery (meest effectief qua plastic- en CO2-reductie), 2. Koolstoffilter onder het aanrecht (eenvoudig, weinig filterafval, geen afvalwater), 3. Filterkan (geen installatie, maar jaarlijks 200-400 g plastic van cartridges), 4. Flessenwater (het minst milieuvriendelijk: 50 kg plastic + 1.200 kg CO2 per gezin per jaar).',
  },
  {
    question: 'Hoeveel plastic afval bespaart een waterfilter?',
    answer:
      'Een gezin van 3 dat uitsluitend flessenwater drinkt verbruikt circa 1.500 liter per jaar, dit zijn 3.000 flessen van 0,5 liter. Dit genereert 45-60 kg PET-plastic. Met een osmosefilter of koolstoffilter wordt dit gereduceerd naar vrijwel nul. Zelfs als u het flessenwater voor 50% omzet naar gefilterd kraanwater, spaart u 25-30 kg plastic per jaar.',
  },
  {
    question: 'Is het afvalwater van een osmosefilter schadelijk?',
    answer:
      'Nee. Het afvalwater van een osmosefilter (concentrate) is gewoon leidingwater met een hogere concentratie van de stoffen die normaal in kraanwater zitten: calcium, magnesium, chloride, etc. Het is niet verontreinigd en veilig voor de riolering. U kunt het hergebruiken voor spoelen van de wc, tuinbewatering (niet voor zoutgevoelige planten bij hard water) of schoonmaak.',
  },
  {
    question: 'Heeft een osmosefilter een hogere CO2-voetafdruk dan een filterkan?',
    answer:
      'In productie heeft een osmosefilter een hogere CO2-voetafdruk dan een filterkan door de complexere materialen en het RO-membraan. Maar over de gebruiksperiode (5-10 jaar) compenseert de osmosefilter dit verschil ruimschoots door de grote CO2-besparing ten opzichte van flessenwater. Een filterkan bereikt alleen milieuwinst als deze flessenwater vervangt, niet als vervanging van leidingwater met slechte smaak.',
  },
];

export default function WaterfilterMilieuPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          { name: 'Milieu', url: 'https://waterfilterplatform.nl/waterfilter/milieu' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterfilter en milieu: duurzamer dan flessenwater?',
          description:
            'CO2-vergelijking en plasticafval van waterfilters versus flessenwater. Feiten en cijfers over duurzaam drinkwater thuis.',
          datePublished: '2026-05-01',
          url: 'https://waterfilterplatform.nl/waterfilter/milieu',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:text-[#005F8A]">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>Milieu</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter en milieu: duurzamer dan flessenwater?
          </h1>

          {/* QuickAnswer */}
          <div className="bg-white border border-[#005F8A]/30 rounded-xl p-4 mb-6">
            <p className="text-xs font-semibold text-[#005F8A] uppercase tracking-wide mb-1">Snel antwoord</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Ja. Een gezin van 3 genereert met flessenwater 1.200 kg CO2 en 50 kg plastic per jaar. Een osmosefilter produceert minder dan 50 kg CO2 jaarlijks in gebruik. Over 5 jaar bespaart een filter meer dan 5.000 kg CO2 en 250 kg plastic ten opzichte van flessenwater.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#co2-vergelijking"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              CO2-vergelijking bekijken &rarr;
            </Link>
            <Link
              href="#duurzaamste-opties"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Duurzaamste opties
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#co2-flessenwater" className="hover:underline">CO2 van flessenwater</a></li>
            <li><a href="#co2-osmose" className="hover:underline">CO2 van osmosefilter</a></li>
            <li><a href="#co2-vergelijking" className="hover:underline">Vergelijking over 5 jaar</a></li>
            <li><a href="#plastic" className="hover:underline">Plasticafval per jaar</a></li>
            <li><a href="#afvalwater" className="hover:underline">Afvalwater osmosefilter</a></li>
            <li><a href="#filterafval" className="hover:underline">Filterafval en recycling</a></li>
            <li><a href="#duurzaamste-opties" className="hover:underline">Duurzaamste opties ranking</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* CO2 flessenwater */}
        <section id="co2-flessenwater">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            CO2-voetafdruk van flessenwater: de volledige keten
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De milieulast van flessenwater gaat verder dan alleen de plastic fles. De volledige levenscyclus omvat productie van de PET-fles, transport van de bron naar de verpakkingsfabriek, transport naar distributiecentra en winkels, koeling in de winkel en thuis, en verwerking van het afval.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[440px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Fase</th>
                  <th className="py-2.5 px-3 font-semibold text-right">CO2 per fles (0,5 L)</th>
                  <th className="py-2.5 px-3 font-semibold text-left hidden sm:table-cell">Toelichting</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { fase: 'Productie PET-fles', co2: '0,12-0,15 kg', toelichting: 'Aardolie-extractie, PET-productie, vormen van de fles' },
                  { fase: 'Bronwater en vulling', co2: '0,02-0,04 kg', toelichting: 'Waterwinning, filtering en vullen van de fles' },
                  { fase: 'Transport (bron → winkel)', co2: '0,08-0,15 kg', toelichting: 'Hoog voor import (Italie, Frankrijk); laag voor NL-bronwater' },
                  { fase: 'Koeling (winkel + thuis)', co2: '0,03-0,06 kg', toelichting: 'Doorlopende koeling in winkelkoelkast en thuiskoelkast' },
                  { fase: 'Afvalverwerking', co2: '0,02-0,04 kg', toelichting: 'Recyclen of verbranden; recyclen lager CO2' },
                  { fase: 'Totaal per fles', co2: '0,27-0,44 kg', toelichting: 'Gemiddeld circa 0,35 kg CO2 per fles van 0,5 liter' },
                ].map((r, i) => (
                  <tr key={r.fase} className={`border-b border-gray-100 ${i === 5 ? 'bg-[#E0F2FE] font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="py-2.5 px-3 text-gray-800 text-xs">{r.fase}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A] text-xs whitespace-nowrap">{r.co2}</td>
                    <td className="py-2.5 px-3 text-gray-500 text-xs hidden sm:table-cell">{r.toelichting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Een gezin van 3 personen dat 1,5 liter per persoon per dag drinkt (SCA aanbevolen dagelijkse inname) verbruikt circa 1.500 liter drinkwater per jaar. Dit zijn 3.000 flessen van 0,5 liter, wat resulteert in 810-1.320 kg CO2 per jaar, gemiddeld circa 1.050 kg CO2.
          </p>
        </section>

        {/* CO2 osmosefilter */}
        <section id="co2-osmose">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            CO2-voetafdruk van een osmosefilter: eenmalig en doorlopend
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De CO2-voetafdruk van een osmosefilter bestaat uit een eenmalige productie-emissie bij aanschaf en doorlopende lage emissies door filtervervanging en een beperkt stroomverbruik.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                type: 'Eenmalige productie-emissie',
                co2: '30-60 kg CO2',
                toelichting: 'Productie van RO-membraan, behuizing, leidingen en onderdelen. Vergelijkbaar met productie van 85-170 flessen.',
              },
              {
                type: 'Jaarlijkse filtervervanging',
                co2: '5-15 kg CO2',
                toelichting: 'Productie en transport van koolstofcartridges en RO-membraan. Afhankelijk van filterkwaliteit en -frequentie.',
              },
              {
                type: 'Waterverbruik (afvalwater)',
                co2: 'Verwaarloosbaar',
                toelichting: 'Afvalwater gaat naar riolering; geen significante extra CO2-emissie. Hergebruik is mogelijk en verlaagt de impact.',
              },
              {
                type: 'Stroomverbruik (indien pomp)',
                co2: '2-8 kg CO2/jaar',
                toelichting: 'RO-filters met opvoerpomp gebruiken 5-15 Wh per liter. Bij 500 liter gebruik per jaar: 2,5-7,5 kWh = 1-3 kg CO2.',
              },
            ].map(c => (
              <div key={c.type} className="border border-gray-100 rounded-xl p-4 bg-white">
                <p className="font-semibold text-gray-900 mb-0.5 text-sm">{c.type}</p>
                <p className="text-lg font-bold text-[#005F8A] mb-1">{c.co2}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{c.toelichting}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5-jaar vergelijking */}
        <section id="co2-vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            CO2-vergelijking over 5 jaar: filter vs. flessenwater
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Om een eerlijke vergelijking te maken kijken we naar de totale CO2-emissie over 5 jaar voor een gezin van 3 personen dat 1.500 liter drinkwater per jaar verbruikt.
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-[#003F5C] mb-3">Flessenwater (5 jaar)</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Flessen per jaar</span>
                    <span className="font-semibold text-gray-900">3.000 stuks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">CO2 per jaar</span>
                    <span className="font-semibold text-gray-900">~1.050 kg</span>
                  </div>
                  <div className="flex justify-between border-t border-[#005F8A]/20 pt-2 mt-2">
                    <span className="text-gray-700 font-semibold">Totaal 5 jaar</span>
                    <span className="font-bold text-red-600 text-base">5.250 kg CO2</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[#003F5C] mb-3">Osmosefilter (5 jaar)</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Productie (eenmalig)</span>
                    <span className="font-semibold text-gray-900">~45 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gebruik per jaar</span>
                    <span className="font-semibold text-gray-900">~20 kg</span>
                  </div>
                  <div className="flex justify-between border-t border-[#005F8A]/20 pt-2 mt-2">
                    <span className="text-gray-700 font-semibold">Totaal 5 jaar</span>
                    <span className="font-bold text-green-600 text-base">145 kg CO2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[#005F8A]/20 text-center">
              <p className="text-sm text-gray-600 mb-1">CO2-besparing over 5 jaar</p>
              <p className="text-2xl font-bold text-[#003F5C]">5.105 kg CO2 minder</p>
              <p className="text-xs text-gray-500 mt-1">Gelijk aan het wegplanten van circa 230 bomen</p>
            </div>
          </div>
        </section>

        {/* Plastic afval */}
        <section id="plastic">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Plasticafval: 50 kg per jaar vs. bijna nul
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Plastic afval is de meest zichtbare milieu-impact van flessenwater. Een PET-fles van 0,5 liter weegt circa 15-18 gram. Bij 3.000 flessen per jaar genereert een gezin 45-54 kg PET-plastic per jaar.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { optie: 'Flessenwater', plastic: '~50 kg/jaar', kleur: 'bg-red-50 border-red-200', tekstkleur: 'text-red-700' },
              { optie: 'Filterkan', plastic: '0,2-0,4 kg/jaar', kleur: 'bg-amber-50 border-amber-200', tekstkleur: 'text-amber-700' },
              { optie: 'Osmosefilter', plastic: '&lt;0,1 kg/jaar', kleur: 'bg-green-50 border-green-200', tekstkleur: 'text-green-700' },
            ].map(o => (
              <div key={o.optie} className={`border rounded-xl p-4 text-center ${o.kleur}`}>
                <p className="font-semibold text-gray-900 mb-1">{o.optie}</p>
                <p className={`text-lg font-bold ${o.tekstkleur}`}>{o.plastic}</p>
                <p className="text-xs text-gray-500 mt-1">plasticafval</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Zelfs als al het flessenwater gerecycled wordt (Nederland recyclet circa 94% van PET-flessen via statiegeld), blijft de energie voor recycling en de degradatie van PET-kwaliteit een significante milieulast. Plastic niet genereren is altijd beter dan plastic recyclen.
          </p>
        </section>

        <CTABanner context="osmose" />

        {/* Afvalwater */}
        <section id="afvalwater">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Afvalwater van osmosefilter: probleem of kans?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een veelgenoemde kritiek op osmosefilters is het afvalwater. Traditionele systemen produceren 3-4 liter afvalwater per liter drinkwater. Moderne systemen bereiken een verhouding van 1:1 of beter.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                punt: 'Wat is het afvalwater?',
                uitleg: 'Het afvalwater (concentrate) is gewoon leidingwater met een hogere concentratie van calcium, magnesium en andere mineralen. Het is niet verontreinigd en volledig veilig voor het riool. De kwaliteit is vergelijkbaar met hard leidingwater.',
              },
              {
                punt: 'Hergebruik van afvalwater',
                uitleg: 'Het afvalwater is bruikbaar voor toiletspoelen (ideaal: installeer een aparte leiding), tuinbewatering (opgelet bij hard water voor zoutgevoelige planten), moppen van vloeren, autowassen en overige schoonmaak. Hergebruik compenseert de "verspilling" volledig.',
              },
              {
                punt: 'Moderne systemen: 1:1 of beter',
                uitleg: 'Nieuwere osmosesystemen gebruiken een permeaatpomp of recirculatiesysteem en bereiken een waterrecovery van 50-75%. Dit betekent: 1-2 liter afvalwater per liter drinkwater. Bij 500 liter drinkwater per jaar is de afvalwaterproductie 500-1.000 liter, tegenover 1.500-2.000 liter bij oudere systemen.',
              },
            ].map(p => (
              <div key={p.punt} className="border border-gray-100 rounded-xl p-4 bg-white">
                <p className="font-semibold text-gray-900 mb-1 text-sm">{p.punt}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{p.uitleg}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Filterafval */}
        <section id="filterafval">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Filterafval: wat gooit u weg per jaar?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een osmosefilter heeft drie tot vier filterstadia die periodiek vervangen worden. Het totale gewicht aan filterafval per jaar is 1-2 kg, vergeleken met 45-54 kg plastic bij flessenwater.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[440px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Filter</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Vervanging</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Gewicht</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-left hidden sm:table-cell">Recycling</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { filter: 'Sedimentfilter', vervanging: 'Elk jaar', gewicht: '~100 g', recycling: 'Restafval' },
                  { filter: 'Koolstoffilter (pre)', vervanging: 'Elk jaar', gewicht: '~200 g', recycling: 'Koolstof biologisch afbreekbaar' },
                  { filter: 'RO-membraan', vervanging: 'Elke 2-3 jaar', gewicht: '~300 g', recycling: 'Restafval; terugname bij sommige fabrikanten' },
                  { filter: 'Koolstoffilter (post)', vervanging: 'Elk jaar', gewicht: '~150 g', recycling: 'Koolstof biologisch afbreekbaar' },
                  { filter: 'Remineralisatiefilter', vervanging: 'Elke 1-2 jaar', gewicht: '~150 g', recycling: 'Deels recyclebaar' },
                ].map((r, i) => (
                  <tr key={r.filter} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="py-2.5 px-3 text-gray-800 text-xs font-medium">{r.filter}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600 text-xs">{r.vervanging}</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-[#005F8A] text-xs">{r.gewicht}</td>
                    <td className="py-2.5 px-3 text-gray-500 text-xs hidden sm:table-cell">{r.recycling}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Totaal filterafval per jaar: circa 600-900 gram. Over 5 jaar is dit 3-4,5 kg filterafval, vergeleken met 225-270 kg plastic van flessenwater over dezelfde periode.
          </p>
        </section>

        {/* Duurzaamste opties */}
        <section id="duurzaamste-opties">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Ranking: duurzaamste drinkwateropties
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Op basis van CO2-voetafdruk, plasticafval en watergebruik over een periode van 5 jaar:
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                rang: '1',
                optie: 'Osmosefilter met hoge waterrecovery',
                co2: '&lt;50 kg CO2/jaar',
                plastic: '&lt;0,1 kg/jaar',
                kleur: 'bg-green-50 border-green-200',
                badge: 'Meest duurzaam',
                badgeKleur: 'bg-green-100 text-green-800',
              },
              {
                rang: '2',
                optie: 'Koolstoffilter onder aanrecht',
                co2: '&lt;10 kg CO2/jaar',
                plastic: '&lt;0,2 kg/jaar',
                kleur: 'bg-[#E0F2FE] border-[#005F8A]/20',
                badge: 'Zeer duurzaam',
                badgeKleur: 'bg-[#E0F2FE] text-[#005F8A]',
              },
              {
                rang: '3',
                optie: 'Filterkan',
                co2: '&lt;15 kg CO2/jaar',
                plastic: '0,2-0,4 kg/jaar',
                kleur: 'bg-amber-50 border-amber-200',
                badge: 'Duurzaam',
                badgeKleur: 'bg-amber-100 text-amber-800',
              },
              {
                rang: '4',
                optie: 'Flessenwater',
                co2: '~1.050 kg CO2/jaar',
                plastic: '~50 kg/jaar',
                kleur: 'bg-red-50 border-red-200',
                badge: 'Minst duurzaam',
                badgeKleur: 'bg-red-100 text-red-700',
              },
            ].map(o => (
              <div key={o.rang} className={`border rounded-xl p-4 ${o.kleur}`}>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sm font-bold text-[#003F5C] shrink-0">{o.rang}</span>
                    <p className="font-semibold text-gray-900">{o.optie}</p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${o.badgeKleur}`}>{o.badge}</span>
                </div>
                <div className="flex gap-4 ml-10 text-xs text-gray-600">
                  <span>CO2: <strong>{o.co2}</strong></span>
                  <span>Plastic: <strong>{o.plastic}</strong></span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            De koolstoffilter scoort iets beter dan osmose qua CO2-productie in gebruik (geen afvalwater, geen pomp), maar de osmosefilter is effectiever in het verwijderen van verontreinigingen. Voor pure milieuoverweging bij al goed drinkwater is een koolstoffilter de lichtste keuze.
          </p>
        </section>

        <CTABanner context="osmose" />

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterfilter/vergelijken', label: 'Waterfilters vergelijken: welk systeem past?' },
              { href: '/waterfilter/subsidie', label: 'Waterfilter subsidie 2026: regelingen overzicht' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose: hoe werkt het?' },
              { href: '/koolstoffilter', label: 'Koolstoffilter: werking en toepassingen' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>&rarr;</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over waterfilter en milieu
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">&#9662;</span>
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
