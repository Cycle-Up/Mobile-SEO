import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Quooker CUBE: bruisend en gekoeld water — kosten, werking en alternatieven 2026',
  description:
    'De Quooker CUBE voegt gekoeld (4°C) en bruisend gefilterd water toe aan je Quooker. Kosten, CO₂-verbruik, onderhoud en vergelijking met 4-in-1 osmose alternatieven.',
  alternates: { canonical: 'https://waterfilterplatform.nl/quooker-cube' },
  openGraph: {
    title: 'Quooker CUBE: bruisend en gekoeld water — kosten, werking en alternatieven 2026',
    description:
      'De Quooker CUBE voegt gekoeld (4°C) en bruisend gefilterd water toe aan je Quooker. Kosten, CO₂-verbruik, onderhoud en vergelijking met 4-in-1 osmose alternatieven.',
    url: 'https://waterfilterplatform.nl/quooker-cube',
    type: 'article',
    locale: 'nl_NL',
  },
};

const faqItems = [
  {
    question: 'Wat doet de Quooker CUBE precies?',
    answer:
      'De Quooker CUBE is een add-on module die je aan een bestaande Quooker FILTER-variant koppelt. De CUBE voegt twee extra functies toe: gekoeld gefilterd water (4°C) en bruisend gefilterd water. Samen met de basisfuncties van de Quooker (kokend, warm en koud) beschik je dan over vijf waterfuncties uit één kraan. De CUBE staat naast het Quooker reservoir onder het aanrecht en bevat een koelelement, een CO₂-cilinder en een koolstoffilter.',
  },
  {
    question: 'Werkt de CUBE op alle Quooker modellen?',
    answer:
      'Nee. De CUBE is uitsluitend compatibel met de FILTER-varianten van Quooker: de PRO3 FILTER, PRO7 FILTER en de FUSION FILTER. Heb je een standaard PRO3 of PRO7 zonder FILTER-aanduiding, dan kun je de CUBE niet direct aansluiten. In dat geval moet je eerst upgraden naar een FILTER-reservoir. Controleer het typeplaatje van je huidige Quooker-reservoir voordat je een CUBE aanschaft.',
  },
  {
    question: 'Hoe lang gaat een CO₂-cilinder mee?',
    answer:
      'Een standaard CO₂-cilinder van 60 gram levert circa 60 liter bruisend water. Bij gemiddeld gebruik (0,5 liter per dag per persoon voor een gezin van vier) ga je naar schatting vijf tot zes weken mee. Een zwaar gebruiker die dagelijks een liter of meer bruisend water drinkt, haalt twee tot drie maanden uit een cilinder. Lege cilinders ruil je in via een Quooker-dealer of een erkend ruilpunt — je koopt dan een volle cilinder terug.',
  },
  {
    question: 'Wat kost de Quooker CUBE per jaar?',
    answer:
      'De aanschafprijs van de CUBE ligt tussen €249 en €299. Aan jaarlijkse kosten tel je mee: het filterpatroon (€20–25 per jaar, gelijk aan het standaard Quooker FILTER-patroon), CO₂-cilinders (bij gemiddeld gebruik €60–100 per jaar, bij zwaar gebruik meer) en elektriciteit voor het koelelement (circa €30–50 per jaar). In totaal kom je uit op ongeveer €110–175 per jaar voor jaar twee en verder. In het eerste jaar reken je ook de aanschafprijs mee: €399–499.',
  },
  {
    question: 'Filtert de CUBE het water beter dan een gewone Quooker?',
    answer:
      'De CUBE gebruikt hetzelfde geactiveerde koolstoffilter als de standaard Quooker FILTER-modellen. Dit filter verwijdert effectief chloor en verbeteren de smaak en geur van het water. Wat het filter níet doet: nitraat, PFAS, zware metalen, kalk of bacteriën worden niet of nauwelijks verwijderd. Het koolstoffilter in de CUBE is dus geen vervanging voor een omgekeerde osmose-systeem. Wie puur, kalkvrij of nitraatarm water wil, heeft een RO-filter nodig.',
  },
  {
    question: 'Wat is het verschil tussen Quooker CUBE en een 4-in-1 osmose kraan?',
    answer:
      'Het grootste verschil zit in de filtermethode. De CUBE gebruikt een geactiveerde koolstoffilter — geschikt voor chloor en smaakverbetering, maar geen omgekeerde osmose. Een 4-in-1 osmose kraan heeft een RO-membraan dat 95–99% van nitraat, PFAS, kalk, zware metalen en microplastics verwijdert. Bovendien is de aanschafprijs van een complete 4-in-1 osmose set (€699–899) doorgaans lager dan een Quooker plus CUBE (samen €1.300–2.000). De Quooker biedt wél een vertrouwde gebruikservaring met dealer-installatie.',
  },
  {
    question: 'Kan ik de CUBE retourneren en een ander systeem installeren?',
    answer:
      'De CUBE is een losse module die los van het Quooker-reservoir staat. Je kunt de CUBE in principe loskoppelen zonder de rest van je Quooker-installatie te raken. Het Quooker-reservoir en de kraan blijven dan gewoon functioneren voor kokend, warm en koud gefilterd water. Wil je daarna overstappen op een ander systeem, dan is dat een aparte afweging — het basisreservoir van Quooker is niet zomaar te vervangen door een ander merk. Raadpleeg een installateur voor de concrete situatie in jouw keuken.',
  },
  {
    question: 'Is de Quooker CUBE de moeite waard?',
    answer:
      'Dat hangt sterk af van je bruisend waterverbruik. Voor een huishouden dat dagelijks een liter of meer bruisend water drinkt, is de CUBE financieel interessanter dan een losse SodaStream plus een apart koolstoffilter — zeker als je die combinatie ook nog regelmatig hoeft bij te vullen met CO₂-cylinders en patronen. Drink je zelden bruisend water, of vind je de jaarlijkse CO₂-kosten een bezwaar, dan is de CUBE minder aantrekkelijk. Een 4-in-1 osmose kraan biedt dan dezelfde functies én betere filtratie voor een lagere totaalprijs.',
  },
];

export default function QuookerCubePage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Quooker CUBE', url: 'https://waterfilterplatform.nl/quooker-cube' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Quooker CUBE: bruisend en gekoeld water — kosten, werking en alternatieven 2026',
          description:
            'De Quooker CUBE voegt gekoeld (4°C) en bruisend gefilterd water toe aan je Quooker. Kosten, CO₂-verbruik, onderhoud en vergelijking met 4-in-1 osmose alternatieven.',
          datePublished: '2026-04-10',
          url: 'https://waterfilterplatform.nl/quooker-cube',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Quooker CUBE</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Quooker CUBE: bruisend en gekoeld water uit je Quooker
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            De <strong>Quooker CUBE</strong> is een uitbreidingsmodule die gekoeld (4°C) en bruisend gefilterd water toevoegt aan een bestaande Quooker.
            Op deze pagina vind je een onafhankelijke uitleg van de werking, de jaarlijkse kosten, CO₂-verbruik en
            een eerlijke vergelijking met alternatieven zoals de{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] underline">4-in-1 osmose kraan</Link>.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quooker-versus-osmose"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Quooker vs osmose →
            </Link>
            <Link
              href="/4-in-1-kraan"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              4-in-1 kraan bekijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        <QuickAnswer answer="De Quooker CUBE is een add-on module voor de Quooker die gekoeld (4°C) en bruisend gefilterd water toevoegt. Samen met de bestaande Quooker krijg je 5 waterfuncties uit één kraan: kokend, warm, koud, gekoeld en bruisend. Aanschafprijs CUBE: €249–299. Jaarlijkse kosten: CO₂-cilinder €60–100 + filterpatroon €20–25 + elektriciteit €30–50." />

        {/* Wat doet de CUBE */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat doet de Quooker CUBE precies?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Quooker CUBE is een separate module die je naast het bestaande Quooker-reservoir onder het aanrecht plaatst.
            Het apparaat koelt gefilterd water actief naar 4°C en carbonateert het met CO₂ voor bruisend water.
            Beide functies lopen via dezelfde Quooker-kraan, met een aparte bedieningshandeling per functie.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Samen met de bestaande functies van de{' '}
            <Link href="/quooker-filter" className="text-[#005F8A] underline">Quooker FILTER</Link>-variant (kokend 100°C, warm en koud gefilterd)
            levert de combinatie vijf waterfuncties uit één kraan op. Dat maakt het tot een zogeheten 5-in-1 systeem.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <caption className="text-left text-xs text-gray-400 mb-2 font-normal">Overzicht CUBE-functies (Quooker FILTER + CUBE)</caption>
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Functie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Beschikbaar</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Temperatuur / type</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { functie: 'Kokend water', beschikbaar: '✓', detail: '100°C' },
                  { functie: 'Warm water', beschikbaar: '✓', detail: 'Via mengkraan (Fusion/Flex)' },
                  { functie: 'Koud gefilterd water', beschikbaar: '✓', detail: 'Kamertemperatuur, actief kool gefilterd' },
                  { functie: 'Gekoeld gefilterd water', beschikbaar: '✓ (CUBE)', detail: '4°C, actief kool gefilterd' },
                  { functie: 'Bruisend gefilterd water', beschikbaar: '✓ (CUBE)', detail: 'CO₂-gecarboniseerd, actief kool gefilterd' },
                ].map(r => (
                  <tr key={r.functie} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-semibold text-gray-800">{r.functie}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.beschikbaar}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-400 mt-2">
            Let op: filtertype is geactiveerde kool — géén omgekeerde osmose. Nitraat, PFAS en kalk worden niet verwijderd.
          </p>
        </section>

        {/* Compatibiliteit */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Op welke Quooker modellen werkt de CUBE?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De CUBE is uitsluitend compatibel met de <strong>FILTER-varianten</strong> van Quooker. Dat zijn modellen die al een ingebouwd koolstoffilterpatroon hebben.
            Op een standaard PRO3 of PRO7 zonder FILTER-aanduid werkt de CUBE niet zonder extra aanpassingen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-[#E0F2FE] rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] text-sm mb-2">Compatibel met CUBE</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ PRO3 FILTER</li>
                <li>✓ PRO7 FILTER</li>
                <li>✓ FUSION FILTER (Combi en Combi+)</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-700 text-sm mb-2">Niet direct compatibel</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✗ PRO3 (standaard, zonder FILTER)</li>
                <li>✗ PRO7 (standaard, zonder FILTER)</li>
                <li>✗ Oudere modellen zonder filterpatroon</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            Twijfel je over jouw model? Controleer het typeplaatje op het reservoir of raadpleeg een Quooker-dealer.
          </p>
        </section>

        {/* CO₂ uitleg */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe lang gaat een CO₂-cilinder mee?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De CUBE gebruikt een standaard CO₂-cilinder van 60 gram. Elke cilinder levert circa 60 liter bruisend water.
            Hoe lang dat meegaat, hangt volledig af van je verbruik.
          </p>
          <div className="space-y-3 mb-4">
            {[
              { type: 'Licht gebruik', verbruik: '0,25 L/dag', duur: '± 8 maanden', kosten: '± €15–25/jaar' },
              { type: 'Gemiddeld gebruik', verbruik: '0,5 L/dag', duur: '± 4 maanden', kosten: '± €45–75/jaar' },
              { type: 'Zwaar gebruik', verbruik: '1 L/dag', duur: '± 2 maanden', kosten: '± €90–150/jaar' },
            ].map(r => (
              <div key={r.type} className="bg-gray-50 rounded-xl p-4 flex justify-between items-center text-sm">
                <div>
                  <p className="font-semibold text-gray-800">{r.type}</p>
                  <p className="text-gray-500">{r.verbruik} bruisend water</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-700">{r.duur} per cilinder</p>
                  <p className="text-[#005F8A] font-semibold">{r.kosten}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed text-sm">
            Lege cilinders wissel je in bij een Quooker-dealer of erkend ruilpunt.
            Je betaalt dan de prijs van de volle cilinder minus een kleine statiegeldkorting.
            Grotere cilinders zijn niet beschikbaar voor de CUBE — de module is ontworpen voor de standaard 60g-maat.
          </p>
        </section>

        {/* Kostenberekening */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat kost de Quooker CUBE per jaar?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Naast de eenmalige aanschafprijs heb je jaarlijks terugkerende kosten voor filters, CO₂ en elektriciteit.
            Hieronder een overzicht voor een gemiddeld huishouden van vier personen.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Kostenpost</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Eenmalig</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Per jaar</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { post: 'CUBE aanschaf', eenmalig: '€249–299', perjaar: '—' },
                  { post: 'Filterpatroon (actief kool)', eenmalig: '—', perjaar: '€20–25' },
                  { post: 'CO₂-cilinder (gemiddeld gebruik)', eenmalig: '—', perjaar: '€60–100' },
                  { post: 'Elektriciteit (koelen)', eenmalig: '—', perjaar: '€30–50' },
                ].map(r => (
                  <tr key={r.post} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 text-gray-800">{r.post}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.eenmalig}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.perjaar}</td>
                  </tr>
                ))}
                <tr className="bg-[#E0F2FE]/50">
                  <td className="py-2.5 px-3 font-bold text-[#003F5C]">Totaal jaar 1</td>
                  <td className="py-2.5 px-3 font-bold text-[#003F5C]">€399–499</td>
                  <td className="py-2.5 px-3 text-gray-500">—</td>
                </tr>
                <tr className="bg-[#E0F2FE]/30">
                  <td className="py-2.5 px-3 font-bold text-[#003F5C]">Totaal jaar 2+</td>
                  <td className="py-2.5 px-3 text-gray-500">—</td>
                  <td className="py-2.5 px-3 font-bold text-[#003F5C]">€110–175</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Indicatieve bedragen op basis van gemiddeld verbruik (0,5 L bruisend per dag, gezin van vier). CO₂-kosten variëren sterk per verbruik.
          </p>
        </section>

        {/* Filterwerkzaamheid */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Filtert de CUBE het water beter dan een gewone Quooker?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De CUBE gebruikt hetzelfde <strong>geactiveerde koolstoffilter</strong> als de FILTER-modellen van Quooker.
            Dit filter is effectief voor chloor (90–95%) en verbetert smaak en geur van het water merkbaar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wat het koolstoffilter <strong>niet</strong> doet: nitraat, PFAS, zware metalen (zoals lood), kalk en bacteriën worden niet of nauwelijks verwijderd.
            Wie puur, kalkvrij water wil — bijvoorbeeld bij hard leidingwater of voor babyvoeding — heeft een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose-filter</Link> nodig.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <p className="font-semibold mb-1">Let op bij hard water</p>
            <p className="leading-relaxed">
              Woon je in een regio met hard water (waterhardheid boven 20°dH)? Dan lost het koolstoffilter van de CUBE het kalkprobleem niet op.
              De CUBE bevat géén ontkalker. Overweeg een systeem met osmose of een{' '}
              <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder</Link> als kalk een probleem is.
            </p>
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* CUBE vs 4-in-1 osmose */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Quooker CUBE versus 4-in-1 osmose kraan: de vergelijking</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            De <Link href="/4-in-1-kraan" className="text-[#005F8A] underline">4-in-1 osmose kraan</Link> is het voornaamste alternatief voor wie kokend, koud, warm én bruisend water wil — maar dan met volledige RO-filtratie.
            Hieronder de directe vergelijking op de meest relevante criteria.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Criterium</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Quooker CUBE</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">4-in-1 osmose kraan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { criterium: 'Filtermethode', cube: 'Actief kool', osmose: 'Omgekeerde osmose (RO)' },
                  { criterium: 'Verwijdert chloor', cube: '✓ 90–95%', osmose: '✓ 95–99%' },
                  { criterium: 'Verwijdert nitraat', cube: '✗ Nee', osmose: '✓ 85–95%' },
                  { criterium: 'Verwijdert PFAS', cube: '✗ Nee', osmose: '✓ 95–99%' },
                  { criterium: 'Verwijdert kalk', cube: '✗ Nee', osmose: '✓ 95–99%' },
                  { criterium: 'Bruisend water', cube: '✓ (CO₂)', osmose: '✓ (CO₂, 4-in-1)' },
                  { criterium: 'Kokend water (100°C)', cube: '✓', osmose: '✓' },
                  { criterium: 'Gekoeld water (4°C)', cube: '✓', osmose: '✓ (bij sommige modellen)' },
                  { criterium: 'Aanschafprijs totaal', cube: '€1.300–2.000 (Quooker + CUBE)', osmose: '€699–899' },
                  { criterium: 'Jaarlijkse kosten', cube: '€110–175', osmose: '€80–120' },
                  { criterium: 'Geschikt voor hard water', cube: '✗ Nee', osmose: '✓ Ja' },
                  { criterium: 'Installatie', cube: 'Via Quooker-dealer', osmose: 'Vaak zelf installeerbaar' },
                ].map((r, i) => (
                  <tr key={r.criterium} className={`border-b border-gray-100 ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-700">{r.criterium}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.cube}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.osmose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Aanschafprijzen zijn indicatief en inclusief het Quooker-basisreservoir waar relevant. Controleer actuele prijzen bij dealers.
          </p>
        </section>

        {/* Wanneer CUBE, wanneer anders */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kies je de CUBE, en wanneer niet?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#E0F2FE] rounded-xl p-5">
              <p className="font-bold text-[#003F5C] mb-3">Kies de CUBE als…</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">✓</span> Je al een compatibele Quooker FILTER hebt</li>
                <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">✓</span> Je dagelijks minstens 0,5 L bruisend water drinkt</li>
                <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">✓</span> Smaakverbetering (chloor, geur) voldoende is voor jou</li>
                <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">✓</span> Je geen hard water-problematiek hebt</li>
                <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">✓</span> Je de Quooker-gebruikservaring wilt behouden</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <p className="font-bold text-gray-700 mb-3">Kies een alternatief als…</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-gray-400 font-bold shrink-0">→</span> Je nog géén Quooker hebt en van scratch begint</li>
                <li className="flex gap-2"><span className="text-gray-400 font-bold shrink-0">→</span> Je puur, kalkvrij of nitraatarm water nodig hebt</li>
                <li className="flex gap-2"><span className="text-gray-400 font-bold shrink-0">→</span> Je hard water hebt (boven 20°dH)</li>
                <li className="flex gap-2"><span className="text-gray-400 font-bold shrink-0">→</span> Je totaalkosten wilt beperken (&lt; €900 inclusief installatie)</li>
                <li className="flex gap-2"><span className="text-gray-400 font-bold shrink-0">→</span> Je PFAS of nitraat wilt verwijderen</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4 text-sm">
            Lees ook onze uitgebreide vergelijking: <Link href="/quooker-versus-osmose" className="text-[#005F8A] underline">Quooker versus osmose filter</Link> — wat filtert meer en wat kost het?
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over de Quooker CUBE</h2>
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
              { href: '/quooker-filter', label: 'Quooker FILTER: werking en kosten' },
              { href: '/quooker-versus-osmose', label: 'Quooker versus osmose: vergelijking' },
              { href: '/4-in-1-kraan', label: '4-in-1 osmose kraan: complete gids' },
              { href: '/kokend-water-kraan', label: 'Kokend water kraan: alle merken' },
              { href: '/quooker-alternatief', label: 'Beste Quooker alternatieven 2026' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose uitleg' },
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
      </div>
    </>
  );
}
