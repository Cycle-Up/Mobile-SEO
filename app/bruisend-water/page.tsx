import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Bruisend water thuis: kraan, SodaStream of CO2-systeem?',
  description:
    'Bruisend water thuis maken: vergelijking van bruisend-waterkraan, SodaStream en CO2-systemen op kosten, gemak en kwaliteit. Altijd sprankelend water voor €0,01–0,08 per liter.',
  alternates: { canonical: 'https://waterfilterplatform.nl/bruisend-water' },
};

const faqItems = [
  {
    q: 'Hoe maak ik bruisend water thuis?',
    a: 'Er zijn vier manieren: (1) een 4-in-1 bruisend waterkraan met ingebouwde CO2-cilinder en filter, (2) een SodaStream of ander bruisapparaat met verwisselbare CO2-cilinder, (3) een los CO2-systeem met drukregulator en carbonatieslang, of (4) een bruiswaterkoeler met kleine CO2-cartridges. De keuze hangt af van budget, gebruiksfrequentie en of u ook gefilterd of kokend water wilt.',
  },
  {
    q: 'Is SodaStream goedkoper dan flessenwater kopen?',
    a: 'Ja. Een SodaStream Terra kost circa €70 en een CO2-cilinder (60 liter bruisend water) kost €8–12 bij omruiling in de supermarkt. Dat is €0,13–0,20 per liter. Commercieel bruisend water in flessen kost €0,80–1,20 per liter. Bij dagelijks gebruik van 1,5 liter verdient een SodaStream zichzelf in 3–5 maanden terug. Op jaarbasis bespaart u €200–350 ten opzichte van flessenwater.',
  },
  {
    q: 'Hoe werkt een bruisend waterkraan?',
    a: 'Een 4-in-1 bruisend waterkraan combineert een boiler (voor kokend water), een chiller (voor gekoeld gefilterd water), en een CO2-tank (voor koolzuurhoudend water) in een enkel kraanontwerp. Water loopt via een filter (actief kool of omgekeerde osmose) en wordt via een separate CO2-lijn gekoolzuurd. Met een draaiknop of knop kiest u welke watersoort u wenst. Installatie vereist een loodgieter.',
  },
  {
    q: 'Hoe vaak moet ik de CO2-cilinder vervangen?',
    a: 'Een standaard SodaStream-cilinder (60L) gaat mee voor 60 liter bruisend water, wat bij dagelijks gebruik van 1,5 liter circa 40 dagen is. Een grote 6kg CO2-cilinder (zoals bij los CO2-systemen of 4-in-1 kranen) levert circa 3.000 liter en gaat bij gezinsgebruik 1–2 jaar mee. De cilinder van een 4-in-1 kraan hangt af van het model: gemiddeld 3–6 maanden bij een gezin van 4 personen.',
  },
  {
    q: 'Is bruisend water slecht voor je tanden?',
    a: 'Puur koolzuurhoudend water (zonder suiker of citroenzuur) heeft een pH van circa 3,5–5,5 en is daarmee iets zuurder dan normaal water (pH 7). Dit is beduidend minder zuur dan frisdrank (pH 2,5–3,5). Wetenschappelijk onderzoek toont aan dat bruisend water zonder toevoegingen nauwelijks schadelijk is voor tandglazuur bij normaal drinken. Beperk contact met tanden en spoel na met normaal water om erosie te minimaliseren.',
  },
  {
    q: 'Kan ik gefilterd osmosewater koolzuurhoudend maken?',
    a: 'Ja, dit is de beste combinatie. Osmosewater heeft een laag TDS (minder dan 50 mg/L) en is vrij van chloor, PFAS, lood en nitraten. Dit schone water is een ideale basis voor bruisend water. Een 4-in-1 kraan met ingebouwde RO-osmosefiltratie (zoals PureAqua Pro) doet dit automatisch. Met een los CO2-systeem koppelt u een RO-filter aan het watersysteem voor dezelfde resultaten.',
  },
  {
    q: 'Wat kost bruisend water thuis per liter?',
    a: 'De kosten per liter bruisend water thuis zijn: 4-in-1 waterkraan met RO €0,01–0,02/L (inclusief filter, excl. aanschaf), SodaStream €0,05–0,08/L bij omruil supermarkt, los CO2-systeem (6kg cilinder) €0,005–0,01/L, bruiswaterkoeler €0,05–0,10/L. Commercieel bruisend flessenwater kost €0,80–1,20/L — dus thuis bruisend water maken is altijd voordeliger.',
  },
  {
    q: 'Wat is het verschil tussen een SodaStream en een bruisend waterkraan?',
    a: 'Een SodaStream is een los tafelapparaat dat kraanwater bruisend maakt via een kleine CO2-cilinder. Aanschaf €70–130, geen installatie nodig, filtert water NIET. Een bruisend waterkraan (4-in-1) is vast ingebouwd in het aanrecht, levert ook kokend en gekoeld gefilterd water, heeft hogere capaciteit en filtert water via osmose of koolstof. Aanschaf €800–3.200 inclusief installatie. De keuze hangt af van budget en gewenste functies.',
  },
];

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Bruisend water thuis: kraan, SodaStream of CO2-systeem?',
  description:
    'Bruisend water thuis maken: vergelijking van bruisend-waterkraan, SodaStream en CO2-systemen op kosten, gemak en kwaliteit.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/bruisend-water',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function BruisendWaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Bruisend water', item: 'https://waterfilterplatform.nl/bruisend-water' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <span>Bruisend water</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Bruisend water thuis: kraan, SodaStream of CO2-systeem?
          </h1>
          <p className="text-gray-700 text-lg">
            Altijd sprankelend water voor &euro;0,01&ndash;0,08 per liter &mdash; zonder plastic flessen. Vergelijking van alle methoden op kosten, gemak en kwaliteit.
          </p>
        </div>

        <QuickAnswer answer="Bruisend water thuis maakt u via een 4-in-1 waterkraan (ook gefilterd en kokend, &euro;800&ndash;3.200), een SodaStream (&euro;70&ndash;130, geen installatie), of een los CO2-systeem (&euro;150&ndash;400, laagste kosten per liter). Kosten: &euro;0,01&ndash;0,08 per liter versus &euro;0,80&ndash;1,20 voor commercieel flessenwater. Een SodaStream verdient zichzelf in 3&ndash;5 maanden terug." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vier methoden om bruisend water thuis te maken
        </h2>

        <div className="space-y-6 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Bruisend waterkraan (4-in-1)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Meest compleet</span>
            </div>
            <p className="text-gray-700 text-sm">
              Een 4-in-1 waterkraan geeft kokend water (100&deg;C), koud gefilterd water, bruisend water en soms ook warm water uit &eacute;&eacute;n kraan. De CO2-cilinder zit ingebouwd of staat in de kast eronder. Modellen als de Quooker CUBE en PureAqua Pro bevatten ook een osmosefilter waardoor het water vrij is van PFAS, lood en nitraten. Installatie door een loodgieter is vereist.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">SodaStream of bruisapparaat</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">Laagste instapkosten</span>
            </div>
            <p className="text-gray-700 text-sm">
              Een SodaStream is een los tafelapparaat dat kraanwater koolzuurhoudend maakt via een verwisselbare CO2-cilinder. Aanschaf &euro;70&ndash;130, geen installatie, CO2-cilinder omruilen bij supermarkt voor &euro;8&ndash;12 per 60 liter. Filtert water NIET &mdash; alleen carbonatie.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Los CO2-systeem keuken</h3>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-semibold">Laagste kosten per liter</span>
            </div>
            <p className="text-gray-700 text-sm">
              Een los CO2-systeem bestaat uit een grote CO2-cilinder (6 of 10 kg), drukregulator en carbonatieslang. Een 6kg-cilinder levert circa 3.000 liter bruisend water voor &euro;15&ndash;25 refill &mdash; dat is slechts &euro;0,005&ndash;0,01 per liter. Ideaal voor grote gezinnen of horeca. Combineert uitstekend met een osmosefilter.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Bruiswaterkoeler</h3>
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full font-semibold">Tafelmodel</span>
            </div>
            <p className="text-gray-700 text-sm">
              Een bruiswaterkoeler is een tafelmodel met kleine CO2-cartridges (enkelvoudig gebruik of herlaadbaar). Koelt water en maakt het bruisend. Beperkte capaciteit en hogere kosten per liter dan een SodaStream. Geschikt voor incidenteel gebruik of kantoor.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel bruisend water methoden
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aanschaf</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kosten/L</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Capaciteit</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Installatie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filterkwaliteit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">4-in-1 kraan</td>
                <td className="border border-gray-300 px-3 py-2">&euro;800&ndash;1.500</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0,01&ndash;0,02</td>
                <td className="border border-gray-300 px-3 py-2">Onbeperkt</td>
                <td className="border border-gray-300 px-3 py-2">Ja (loodgieter)</td>
                <td className="border border-gray-300 px-3 py-2">RO-osmose</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">SodaStream Duo</td>
                <td className="border border-gray-300 px-3 py-2">&euro;100&ndash;130</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0,05&ndash;0,08</td>
                <td className="border border-gray-300 px-3 py-2">60L/cilinder</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
                <td className="border border-gray-300 px-3 py-2">Geen (kraanwater)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">CO2-systeem los</td>
                <td className="border border-gray-300 px-3 py-2">&euro;150&ndash;400</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0,02&ndash;0,04</td>
                <td className="border border-gray-300 px-3 py-2">6kg = ~3.000L</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
                <td className="border border-gray-300 px-3 py-2">Geen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Bruiswaterkoeler</td>
                <td className="border border-gray-300 px-3 py-2">&euro;200&ndash;600</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0,05&ndash;0,10</td>
                <td className="border border-gray-300 px-3 py-2">Beperkt</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
                <td className="border border-gray-300 px-3 py-2">Koolstoffilter</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          CO2 veiligheid: is het gevaarlijk binnenshuis?
        </h2>
        <p className="text-gray-700 mb-4">
          De CO2 die in bruisend water wordt gebruikt is voedselveilig CO2 (E290 grade). Bij normaal gebruik binnenshuis zijn er geen gevaren: de hoeveelheid CO2 die vrijkomt is verwaarloosbaar ten opzichte van de binnenlucht. CO2 is zwaarder dan lucht, dus bij een groot lek in een slecht geventileerde kelder kan concentratie optreden &mdash; maar bij normale huishoudelijke cilinders (425g tot 6kg) is dit geen realistisch risico.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          CO2-cilinder omruilen: praktisch overzicht
        </h2>
        <p className="text-gray-700 mb-4">
          SodaStream-cilinders ruilt u om bij Albert Heijn, Jumbo en Dirk voor &euro;8&ndash;12 per 60 liter. Online via Bol.com of SodaStream.nl is soms goedkoper bij afname van 2 cilinders tegelijk. Grote CO2-cilinders (6 of 10 kg) vult u bij bij een gasbedrijf of technische groothandel voor &euro;15&ndash;25 per refill.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Koolzuurniveau instellen: van licht tot intensief
        </h2>
        <p className="text-gray-700 mb-4">
          Het koolzuurniveau bepaalt hoe bruisend uw water is. Bij een SodaStream doet u dit door de knop korter of langer ingedrukt te houden: 1 druk = licht, 3 drukken = intensief (San Pellegrino-niveau). Bij een CO2-systeem met drukregulator regelt u de druk: 1&ndash;4 bar geeft licht bruisend water, 4&ndash;6 bar geeft flink bruisend water vergelijkbaar met commercieel bruisend bronwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Voordelen versus commercieel flessenwater
        </h2>
        <p className="text-gray-700 mb-4">
          Commercieel bruisend flessenwater kost &euro;0,80&ndash;1,20 per liter. Thuisgemaakt bruisend water kost &euro;0,01&ndash;0,08 per liter afhankelijk van de methode. Bij een gezin dat dagelijks 2 liter bruisend water drinkt, bespaart u &euro;500&ndash;800 per jaar. Bovendien produceert u nul plastic afval: geen PET-flessen, geen transportemissies.
        </p>
        <p className="text-gray-700 mb-6">
          Een 4-in-1 kraan met osmosefiltratie produceert water dat schoner is dan de meeste commerciele bronwaters: vrij van PFAS, lood, nitraten en medicijnresten. Dit kunt u vervolgens koolzuurhoudend maken voor de ultieme combinatie van kwaliteit en kosten.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over bruisend water thuis
          </h2>
          {faqItems.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">{faq.q}</summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.a}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/bruisend-water/kraan" className="text-[#005F8A] underline">bruisend waterkraan vergelijken</Link>,{' '}
          <Link href="/bruisend-water/sodastream" className="text-[#005F8A] underline">SodaStream vs waterkraan</Link>,{' '}
          <Link href="/bruisend-water/co2" className="text-[#005F8A] underline">CO2-systeem installatie</Link>,{' '}
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kraan</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> en{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilter vergelijken</Link>.
        </p>
      </main>
    </>
  );
}
