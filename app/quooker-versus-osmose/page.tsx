import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: 'Quooker vs osmose filter: wat filtert meer en wat kost het? Vergelijking 2026',
  description:
    'Quooker of osmose filter — wat zijn de echte verschillen? Vergelijking op filterwerkzaamheid, kosten, installatie en voor wie elk systeem geschikt is.',
  alternates: { canonical: 'https://waterfilterplatform.nl/quooker-versus-osmose' },
  openGraph: {
    title: 'Quooker vs osmose filter: wat filtert meer en wat kost het? Vergelijking 2026',
    description:
      'Quooker of osmose filter — wat zijn de echte verschillen? Vergelijking op filterwerkzaamheid, kosten, installatie en voor wie elk systeem geschikt is.',
    url: 'https://waterfilterplatform.nl/quooker-versus-osmose',
    type: 'article',
    locale: 'nl_NL',
  },
};

const faqItems = [
  {
    question: 'Filtert de Quooker het water net zo goed als osmose?',
    answer:
      'Nee. De Quooker FILTER gebruikt een geactiveerde koolstoffilter die chloor (90–95%) en geur effectief verwijdert, maar nitraat, PFAS, zware metalen, kalk en bacteriën laat passeren. Een omgekeerde osmose filter werkt met een semi-permeabel membraan dat 95–99% van vrijwel alle verontreinigingen tegenhoudt. De twee systemen zijn fundamenteel verschillend van technologie en filterwerkzaamheid.',
  },
  {
    question: 'Kan ik osmose combineren met een Quooker?',
    answer:
      'Ja. Je kunt een omgekeerde osmose-systeem aansluiten op de koude watertoevoer naar het Quooker-reservoir. Het RO-systeem staat dan onder het aanrecht en filtert het koudwatergedeelte voordat het de Quooker in gaat. Zo profiteer je van de filterkwaliteit van osmose én de kokend-waterfunctie van de Quooker. Let op: de FILTER in de Quooker zelf wordt dan grotendeels overbodig. Raadpleeg een installateur voor de juiste aansluitingen.',
  },
  {
    question: 'Wat is goedkoper: Quooker of osmose?',
    answer:
      'Een standalone osmose filter kost €150–500 inclusief installatie. Een Quooker kost €1.000–1.800 en levert primair kokend water. De systemen zijn functioneel niet direct vergelijkbaar: een Quooker geeft kokend water, een osmose filter geeft puur drinkwater. Wil je zowel kokend als gefilterd water, vergelijk dan een Quooker + osmose combinatie (€1.500–2.500) met een 4-in-1 osmose kraan (€700–1.000). Die laatste combinatie is doorgaans goedkoper voor hetzelfde functiepakket.',
  },
  {
    question: 'Welk systeem kies ik bij hard water?',
    answer:
      'Bij hard water (waterhardheid boven 15–20°dH) kies je voor omgekeerde osmose — of voor een waterontharder. Een Quooker met koolstoffilter verwijdert geen kalk. Hard water leidt tot ketenaanslag in je Quooker-reservoir en corte de levensduur van het apparaat. Een RO-systeem verwijdert 95–99% van de kalk en beschermt daarmee het hele systeem. Controleer de waterhardheid in jouw gemeente op de pagina over waterhardheid in Nederland.',
  },
  {
    question: 'Verwijdert de Quooker PFAS?',
    answer:
      'Nee. Het geactiveerde koolstoffilter in Quooker FILTER-modellen is niet ontworpen voor de betrouwbare verwijdering van PFAS (poly- en perfluoralkylstoffen). Hoewel sommige koolstoffilters een beperkte adsorptiecapaciteit voor bepaalde PFAS-varianten hebben, is dit onvoldoende voor gezondheidsrisicobeheersing. Een omgekeerde osmose filter verwijdert 95–99% van bekende PFAS-verbindingen via het RO-membraan. Bij verhoogd PFAS-risico (afhankelijk van waterwingebied) is osmose de betrouwbare keuze.',
  },
  {
    question: 'Is een 4-in-1 osmose kraan een Quooker-alternatief?',
    answer:
      'Ja. Een 4-in-1 osmose kraan levert kokend, koud gefilterd, warm en bruisend water uit één kraan — met een ingebouwd RO-filter. De aanschafprijs is doorgaans €600–1.000, aanzienlijk minder dan een vergelijkbare Quooker met CUBE. Bovendien zit volledige RO-filtratie standaard ingebouwd. Voor wie vanaf nul begint én zowel kokend als gefilterd water wil, is de 4-in-1 osmose kraan het meest complete en kostenefficiënte alternatief.',
  },
  {
    question: 'Wat is beter voor babyvoeding: Quooker of osmose water?',
    answer:
      'Voor babyvoeding wordt osmosewater of bronwater aanbevolen boven gefilterd kraanwater via een koolstoffilter. De reden: baby\'s zijn gevoeliger voor nitraat, PFAS, lood en andere sporenmineralen dan volwassenen. Het koolstoffilter van de Quooker verwijdert deze stoffen niet betrouwbaar. Omgekeerde osmose water (met lage mineralenconcentratie) is de veiligste keuze voor babyvoeding wanneer de waterkwaliteit in de regio aanleiding geeft tot zorg. Raadpleeg bij twijfel de aanbevelingen van het RIVM.',
  },
  {
    question: 'Kan ik mijn Quooker achteraf upgraden met osmose?',
    answer:
      'Ja. Je kunt een omgekeerde osmose systeem achteraf aansluiten op de koude watertoevoer, vóór de Quooker-inlaat. Het RO-systeem filtert dan het water voordat het de Quooker in gaat. Je geniet daarna van RO-gefilterd water — ook voor de kokend-waterfunctie. Let op dat je de bestaande Quooker FILTER dan kunt uitschakelen of het patroon niet meer hoeft te vervangen. Technisch is het combineren goed mogelijk; een installateur beoordeelt de leidingopzet in jouw keuken.',
  },
];

export default function QuookerVersusOsmosePage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Quooker versus osmose', url: 'https://waterfilterplatform.nl/quooker-versus-osmose' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Quooker vs osmose filter: wat filtert meer en wat kost het? Vergelijking 2026',
          description:
            'Quooker of osmose filter — wat zijn de echte verschillen? Vergelijking op filterwerkzaamheid, kosten, installatie en voor wie elk systeem geschikt is.',
          datePublished: '2026-04-10',
          url: 'https://waterfilterplatform.nl/quooker-versus-osmose',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Quooker versus osmose</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Quooker versus osmose filter: wat filtert meer en wat kost het?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Quooker en osmose zijn twee fundamenteel verschillende systemen. De Quooker filtert via actief kool en levert kokend water;
            een osmose filter zuivert via een RO-membraan en verwijdert 95–99% van vrijwel alle verontreinigingen.
            Op deze pagina vergelijken we beide systemen onafhankelijk op filterwerkzaamheid, kosten, installatie en geschiktheid per situatie.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Osmose filter uitleg →
            </Link>
            <Link
              href="/quooker-cube"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Quooker CUBE
            </Link>
            <Link
              href="/4-in-1-kraan"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              4-in-1 osmose kraan
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer answer="Een Quooker filtert alleen chloor en geur via actief kool. Een osmosefilter verwijdert 95–99% van nitraten, PFAS, zware metalen, kalk en microplastics. Voor smaakverbetering volstaat de Quooker; voor echt puur drinkwater of hard water biedt osmose aanzienlijk meer. Je kunt osmose ook combineren mét een Quooker." />

        {/* Hoe werkt elk systeem */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werken de twee systemen?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-[#E0F2FE] rounded-xl p-5">
              <p className="font-bold text-[#003F5C] mb-2">Quooker FILTER</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                De Quooker is primair een <strong>kokend water kraan</strong>. Het FILTER-model heeft een geactiveerde koolstofpatroon dat chloor, geur en smaak verbetert.
                Het water stroomt door het koolstofbed en verlaat de filter met een betere smaak, maar de chemische samenstelling (kalk, nitraat, metalen) blijft nagenoeg onveranderd.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Filtermethode: adsorptie via actief kool</li>
                <li>• Filterpatroon: jaarlijks wisselen</li>
                <li>• Geen druk of membraan nodig</li>
                <li>• Koelbaarheid: optioneel via CUBE (4°C)</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-2">Osmose filter (RO)</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmose filter</Link> gebruikt een semi-permeabel membraan onder druk.
                Waterdeeltjes worden doorgelaten; grotere moleculen (zouten, metalen, organische stoffen, bacteriën) worden tegengehouden en afgevoerd als afvalwater.
                Het resultaat is uiterst puur water.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Filtermethode: RO-membraan + pre/post-filters</li>
                <li>• Membraan: 1–2 jaar vervangen</li>
                <li>• Werkt op waterdruk (minimaal 2–3 bar)</li>
                <li>• Produceert enig afvalwater (1:1 tot 1:3 ratio)</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm">
            De twee technologieën zijn complementair: een Quooker verwarmt snel tot 100°C; osmose zuivert grondig maar levert koud water.
            Combineren is mogelijk en levert het beste van beide werelden — zie verderop op deze pagina.
          </p>
        </section>

        {/* Hoofdvergelijking tabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Filtert de Quooker het water net zo goed als osmose?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Nee. De filterwerkzaamheid verschilt fundamenteel. Hieronder een gedetailleerde vergelijking per type verontreiniging.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Criterium</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Quooker FILTER/CUBE</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Osmose filter (standalone RO)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { criterium: 'Filtermethode', quooker: 'Actief kool', osmose: 'RO membraan + pre/post-filters' },
                  { criterium: 'Chloor', quooker: '✓ 90–95%', osmose: '✓ 95–99%' },
                  { criterium: 'Kalk / waterhardheid', quooker: '✗', osmose: '✓ 95–99%' },
                  { criterium: 'Nitraat', quooker: '✗', osmose: '✓ 85–95%' },
                  { criterium: 'PFAS', quooker: '✗', osmose: '✓ 95–99%' },
                  { criterium: 'Lood', quooker: '½ (beperkt)', osmose: '✓ 95–99%' },
                  { criterium: 'Bacteriën', quooker: '✗', osmose: '✓ (membraan filtert vrijwel alle bacteriën)' },
                  { criterium: 'Microplastics', quooker: '✗', osmose: '✓ (RO-membraan <0,0001 µm)' },
                  { criterium: 'Zware metalen', quooker: '✗', osmose: '✓ 95–99%' },
                  { criterium: 'Kokend water (100°C)', quooker: '✓', osmose: '✗ (apart systeem nodig)' },
                  { criterium: 'Bruisend water', quooker: '✓ (met CUBE)', osmose: '✓ (bij 4-in-1 kraan)' },
                  { criterium: 'Gekoeld water (4°C)', quooker: '✓ (met CUBE)', osmose: '✓ (bij sommige 4-in-1 systemen)' },
                  { criterium: 'Aanschafprijs', quooker: '€1.000–1.800', osmose: '€150–500' },
                  { criterium: 'Jaarlijkse kosten', quooker: '€110–175 (incl. CUBE)', osmose: '€60–110' },
                  { criterium: 'Geschikt voor hard water', quooker: '✗', osmose: '✓' },
                  { criterium: 'Installatie', quooker: 'Via Quooker-dealer aanbevolen', osmose: 'Vaak zelf installeerbaar' },
                ].map((r, i) => (
                  <tr key={r.criterium} className={`border-b border-gray-100 ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-700">{r.criterium}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.quooker}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.osmose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            ✓ = effectief, ✗ = niet of nauwelijks, ½ = beperkte werking. Aanschafprijzen zijn richtprijzen exclusief installatie tenzij anders vermeld.
          </p>
        </section>

        {/* Wat filtert wat: visuele uitleg */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat filtert wat? Visuele uitleg</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Niet alle verontreinigingen zijn even groot. Actief kool werkt via adsorptie — grotere moleculen en ionen worden vastgehouden.
            Het RO-membraan werkt als een extreem fijn zeefje dat op moleculair niveau filtert.
          </p>
          <div className="space-y-3">
            {[
              {
                stof: 'Chloor en geurmoleculen',
                maat: 'Grotere organische verbindingen',
                kool: true,
                ro: true,
                uitleg: 'Beide systemen zijn effectief. Actief kool adsorbeert chloor goed; RO-membraan blokkeert het ook.',
              },
              {
                stof: 'Kalk (calciumcarbonaat)',
                maat: 'Ionen (Ca²⁺, Mg²⁺)',
                kool: false,
                ro: true,
                uitleg: 'Kalk bestaat uit kleine ionen die door koolstoffilters heengaan. Het RO-membraan houdt ze tegen.',
              },
              {
                stof: 'Nitraat (NO₃⁻)',
                maat: 'Klein ion',
                kool: false,
                ro: true,
                uitleg: 'Nitraat is een klein negatief ion; koolstoffilters bieden geen bescherming. RO verwijdert 85–95%.',
              },
              {
                stof: 'PFAS',
                maat: 'Kleine fluorverbindingen',
                kool: false,
                ro: true,
                uitleg: 'PFAS-verbindingen zijn klein en polair. Koolstoffilters bieden geen betrouwbare bescherming; RO-membraan blokkeert 95–99%.',
              },
              {
                stof: 'Bacteriën en virussen',
                maat: '0,1–10 µm / 0,02–0,3 µm',
                kool: false,
                ro: true,
                uitleg: 'Bacteriën zijn te klein voor koolstoffilters maar worden gestopt door het RO-membraan (0,0001 µm poriegrootte).',
              },
              {
                stof: 'Microplastics',
                maat: '< 5 mm tot enkele µm',
                kool: false,
                ro: true,
                uitleg: 'Grotere microplastics houden koolstoffilters deels tegen; kleinere passeren ongehinderd. RO blokkeert alle bekende maten.',
              },
            ].map(r => (
              <div key={r.stof} className="border border-gray-100 rounded-xl p-4">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <p className="font-semibold text-gray-800 text-sm">{r.stof}</p>
                  <span className="text-xs text-gray-400">({r.maat})</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${r.kool ? 'bg-[#E0F2FE] text-[#005F8A]' : 'bg-gray-100 text-gray-400'}`}>
                    Actief kool: {r.kool ? '✓' : '✗'}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${r.ro ? 'bg-[#E0F2FE] text-[#005F8A]' : 'bg-gray-100 text-gray-400'}`}>
                    RO-osmose: {r.ro ? '✓' : '✗'}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{r.uitleg}</p>
              </div>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* Osmose + Quooker combineren */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kan ik osmose combineren met een Quooker?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ja, het is technisch goed mogelijk en sommige huishoudens doen dit al. Je sluit een RO-systeem aan op de koudwaterinlaat,
            vóór de Quooker. Alle water dat de Quooker in gaat — voor kokend, koud gefilterd én CUBE-functies — is dan al door het RO-membraan gefilterd.
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-5 mb-5">
            <p className="font-semibold text-[#003F5C] mb-3">Zo werkt de combinatie</p>
            <ol className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="bg-[#005F8A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">1</span>
                <span>Kraanwater gaat eerst door het RO-systeem onder het aanrecht (pre-filter → RO-membraan → post-filter)</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-[#005F8A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">2</span>
                <span>Gezuiverd RO-water stroomt naar een drukspaartank (1–5 liter opslag)</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-[#005F8A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">3</span>
                <span>Vanuit de tank gaat het gefilterde water naar de koudwaterinlaat van de Quooker</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-[#005F8A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">4</span>
                <span>De Quooker verwarmt het al gezuiverde water tot 100°C — kokend RO-water uit je kraan</span>
              </li>
            </ol>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-800 text-sm mb-2">Wat je wint</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>✓ Kokend RO-gefilterd water (kalk- en nitraatvrij)</li>
                <li>✓ Bescherming Quooker-reservoir tegen ketenaanslag</li>
                <li>✓ Langere levensduur Quooker (minder kalk)</li>
                <li>✓ Geen apart Quooker-filterpatroon meer nodig</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-800 text-sm mb-2">Wat het kost</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• RO-systeem aanschaf: €150–350</li>
                <li>• Installatie (loodgieter): €100–200</li>
                <li>• Membraanvervanging: €30–60/jaar</li>
                <li>• Totaal extra investering: €250–550</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Let op: bij een gecombineerd systeem is de Quooker FILTER niet meer nodig. Je kunt het filterpatroon dan achterwege laten,
            wat de jaarlijkse kosten verlaagt. Lees meer over de werking van{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> en waar je op let bij{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">het kopen van een RO-systeem</Link>.
          </p>
        </section>

        {/* Voor wie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voor wie is de Quooker geschikt, en voor wie osmose?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#E0F2FE] rounded-xl p-5">
              <p className="font-bold text-[#003F5C] mb-3">Kies Quooker als…</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">✓</span> Instant kokend water de hoofdbehoefte is</li>
                <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">✓</span> Je woont in een gebied met zacht water (onder 10°dH)</li>
                <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">✓</span> Smaakverbetering (chloor, geur) voldoende is</li>
                <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">✓</span> Je dealer-installatie en een bekende merknaam waardeert</li>
                <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">✓</span> Je geen specifiek waterverontreinigingsprobleem hebt</li>
                <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">✓</span> Bruisend water een fijne extra is (met CUBE)</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <p className="font-bold text-gray-700 mb-3">Kies osmose als…</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-gray-400 font-bold shrink-0">→</span> Je hard water hebt (boven 15–20°dH)</li>
                <li className="flex gap-2"><span className="text-gray-400 font-bold shrink-0">→</span> Je nitraat, PFAS of zware metalen wilt verwijderen</li>
                <li className="flex gap-2"><span className="text-gray-400 font-bold shrink-0">→</span> Je babyvoeding bereidt of immuungecompromitteerd bent</li>
                <li className="flex gap-2"><span className="text-gray-400 font-bold shrink-0">→</span> Je maximale filterkwaliteit wilt voor een lager budget</li>
                <li className="flex gap-2"><span className="text-gray-400 font-bold shrink-0">→</span> Je zelf wilt installeren zonder installateur</li>
                <li className="flex gap-2"><span className="text-gray-400 font-bold shrink-0">→</span> Je kalk- en microplasticvrij water wilt voor koffie en thee</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            Controleer de waterhardheid in jouw gemeente via onze pagina over{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid per gemeente in Nederland</Link>.
          </p>
        </section>

        {/* 4-in-1 als alternatief */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De 4-in-1 osmose kraan als alternatief voor Quooker</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wie zowel kokend als gefilterd water wil zonder de Quooker-prijs, kiest steeds vaker voor een{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] underline">4-in-1 osmose kraan</Link>.
            Dit type combineert vier functies — kokend, koud gefilterd (RO), warm en bruisend — in één systeem met ingebouwde RO-filtratie.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              {
                titel: 'Zelfde functies als Quooker + CUBE',
                tekst: 'Kokend, koud gefilterd, warm én bruisend water uit één kraan — identiek aan het functiepakket van de Quooker Fusion met CUBE.',
              },
              {
                titel: 'Volledige RO-filtratie ingebouwd',
                tekst: 'Kalk, nitraat, PFAS, zware metalen en microplastics worden 95–99% verwijderd. Standaard ingebouwd, geen losse osmose-installatie nodig.',
              },
              {
                titel: 'Lagere aanschafprijs',
                tekst: 'Complete 4-in-1 set: €699–899. Quooker Fusion FILTER + CUBE: €1.500–2.200 exclusief installatie.',
              },
              {
                titel: 'Veelal zelf installeerbaar',
                tekst: 'Met standaard koudwateraansluitingen onder het aanrecht plaatsen veel huishoudens een 4-in-1 set zelf, zonder installateur.',
              },
            ].map(b => (
              <div key={b.titel} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1 text-sm">{b.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{b.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Lees de volledige gids over de{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] underline">4-in-1 osmose kraan</Link> of bekijk de brede vergelijking in ons artikel over de{' '}
            <Link href="/quooker-alternatief" className="text-[#005F8A] underline">beste Quooker alternatieven van 2026</Link>.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen: Quooker versus osmose</h2>
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
              { href: '/quooker-filter', label: 'Quooker FILTER: werking en filterpatroon' },
              { href: '/quooker-cube', label: 'Quooker CUBE: kosten en werking' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose: complete uitleg' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose filter kopen: waar let je op?' },
              { href: '/4-in-1-kraan', label: '4-in-1 osmose kraan vergelijking' },
              { href: '/quooker-alternatief', label: 'Beste Quooker alternatieven 2026' },
              { href: '/waterhardheid', label: 'Waterhardheid per gemeente' },
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

        <CTABanner context="osmose" />

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/omgekeerde-osmose" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Omgekeerde osmose</p>
              <p className="text-sm text-gray-500">Hoe werkt omgekeerde osmose filtratie?</p>
            </Link>
            <Link href="/kokend-water-kraan" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Kokend water kraan</p>
              <p className="text-sm text-gray-500">Complete gids over kokend water kranen</p>
            </Link>
            <Link href="/vergelijken/omgekeerde-osmose-vergelijken" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Omgekeerde osmose vergelijken</p>
              <p className="text-sm text-gray-500">Systemen naast elkaar gezet</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Omgekeerde osmose filtertechniek</p>
              <p className="text-sm text-gray-500">Technische uitleg over osmose filtratie</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
