import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'CO2-systeem voor bruisend water thuis: kosten en installatie',
  description:
    'Een los CO2-systeem voor bruisend water thuis kost €150–400 en produceert water voor €0,02–0,04/L. Ideaal voor grote gezinnen en horeca.',
  alternates: { canonical: 'https://waterfilterplatform.nl/bruisend-water/co2' },
};

const faqItems = [
  {
    q: 'Hoe werkt een CO2-systeem voor bruisend water?',
    a: 'Een los CO2-systeem bestaat uit vier componenten: (1) een CO2-cilinder (425g, 6kg of 10kg), (2) een drukregulator die de hoge cilinderspanning (50–60 bar) verlaagt naar 3–6 bar bruisdruk, (3) een carbonatieslang met diffuser die CO2-belletjes door het water borrelt, en (4) een drukvaste carbonatiefles of ingebouwde dispenser. U vult de fles met water, plaatst de diffuser erin, opent de CO2-klep en wacht 30–60 seconden totdat het gewenste carbonatieniveau is bereikt.',
  },
  {
    q: 'Welke CO2-cilinder is het goedkoopst per liter bruisend water?',
    a: 'Grote cilinders zijn altijd voordeliger per liter: een SodaStream 60L-cilinder kost €8–12 per omruil = €0,13–0,20 per liter bruisend water. Een 6kg CO2-cilinder levert circa 3.000 liter voor €15–25 refill = €0,005–0,008 per liter bruisend water. Een 10kg cilinder levert circa 5.000 liter voor €20–35 = €0,004–0,007 per liter. De grote cilinders zijn 15–40 keer goedkoper per liter dan SodaStream-cilinders. Nadeel: grotere cilinder vereist meer opbergruimte.',
  },
  {
    q: 'Hoe installeer ik een CO2-systeem voor bruisend water?',
    a: 'Installatie van een los CO2-systeem: (1) Kies een geschikte locatie voor de cilinder (keukenkast, bijkeuken, kelder). (2) Sluit de drukregulator aan op de CO2-cilinder (rechts draad, linksom lossen, rechtsom sluiten). (3) Verbind de carbonatieslang met de drukregulator en de carbonatiefles of dispenser. (4) Stel de drukregulator in op 3–6 bar (laag = licht bruisend, hoog = intensief bruisend). (5) Test met koud water (koud water absorbeert meer CO2). Geen loodgieter nodig voor een losse setup; integratie met keukeninstallatie vereist wel een vakman.',
  },
  {
    q: 'Waar vul ik een grote CO2-cilinder bij?',
    a: 'Grote CO2-cilinders (6kg, 10kg) vult u bij of ruilt u om bij: (1) technische gasbedrijven (zoals Linde, Air Liquide, lokale gasbedrijven), (2) horeca-groothandels (Sligro, Metro), (3) brouwersspeciaalzaken, (4) sommige bierbrouwwinkels en gascilinderverhuurders. Controleer of het bedrijf voedselveilig CO2 (E290 grade) levert en of u de cilinder koopt of huurt (deposito-systeem). Eigen cilinder: u betaalt alleen de refill. Huurcilinder: u betaalt deposito + vulkosten.',
  },
  {
    q: 'Is een CO2-systeem veilig binnenshuis?',
    a: 'Ja, bij normaal gebruik is een CO2-systeem voor bruisend water veilig binnenshuis. CO2 (E290) is voedselveilig en niet toxisch in kleine hoeveelheden. Let op: CO2 is zwaarder dan lucht en kan zich in laag gelegen ruimtes (kelder, vlak bij de vloer) ophopen bij een groot lek. In een goed geventileerde keuken is dit geen risico bij huishoudelijke cilinders tot 10kg. Bij een vermoedelijk lek: ruimte verluchten en cilinder sluiten. Installeer nooit CO2-systemen in slaapkamers of afgesloten kasten zonder ventilatie.',
  },
  {
    q: 'Kan ik een CO2-systeem koppelen aan mijn osmosefilter?',
    a: 'Ja, dit is de meest professionele thuissetup. Een omgekeerde osmosefilter zuivert het water volledig (verwijdert PFAS, lood, nitraten, medicijnresten), waarna het CO2-systeem het gezuiverde water carboniseert. U koppelt de osmose-uitlaat aan een drukvat of dispensertank, waaruit u de carbonatiefles vult. Sommige 4-in-1 waterkranen (zoals PureAqua Pro) hebben dit geintegreerd. Bij een losse setup plaatst u het osmosefilter onder de gootsteen met een eigen afnamekraan en vult u vandaar de carbonatiefles.',
  },
  {
    q: 'Hoeveel liter bruisend water geeft een 6kg CO2-cilinder?',
    a: 'Een 6kg CO2-cilinder geeft theoretisch 3.000–3.500 liter bruisend water, afhankelijk van het carbonatieniveau. Bij licht bruisend (3 bar) haalt u meer liters; bij intensief bruisend (6 bar) iets minder. Bij een gezin dat dagelijks 2 liter bruisend water drinkt (730 liter per jaar), gaat een 6kg-cilinder circa 4 jaar mee. Kosten: €15–25 per refill = €4–7 per jaar voor CO2. Dit is verreweg de goedkoopste manier om bruisend water te produceren.',
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
  headline: 'CO2-systeem voor bruisend water thuis: kosten en installatie',
  description:
    'Een los CO2-systeem voor bruisend water thuis kost €150–400 en produceert water voor €0,02–0,04/L. Ideaal voor grote gezinnen en horeca.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/bruisend-water/co2',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function CO2SysteemPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Bruisend water', item: 'https://waterfilterplatform.nl/bruisend-water' },
              { '@type': 'ListItem', position: 3, name: 'CO2-systeem bruisend water', item: 'https://waterfilterplatform.nl/bruisend-water/co2' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/bruisend-water" className="hover:underline">Bruisend water</Link> &rsaquo;{' '}
          <span>CO2-systeem bruisend water</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            CO2-systeem voor bruisend water thuis: kosten en installatie
          </h1>
          <p className="text-gray-700 text-lg">
            Een los CO2-systeem produceert bruisend water voor slechts &euro;0,005&ndash;0,01 per liter &mdash; de goedkoopste methode voor grote gezinnen en horeca.
          </p>
        </div>

        <QuickAnswer answer="Een los CO2-systeem (drukregulator + grote CO2-cilinder) kost &euro;150&ndash;400 aanschaf en produceert bruisend water voor &euro;0,005&ndash;0,01 per liter met een 6kg-cilinder. Dat is 15&ndash;40 keer goedkoper dan SodaStream-cilinders. Ideaal voor grote gezinnen, horeca en combinatie met osmosefilter voor perfect schoon bruisend water." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is een los CO2-systeem?
        </h2>
        <p className="text-gray-700 mb-4">
          Een los CO2-systeem is een carbonatiesetup die los staat van SodaStream of een vaste waterkraan. Het systeem biedt hogere capaciteit, lagere kosten per liter en meer flexibiliteit in carbonatieniveau. Het wordt veel gebruikt door bierbrouwers thuis, in de horeca en door gezinnen met hoog waterverbruik.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vier componenten van een CO2-systeem
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">CO2-cilinder</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Beschikbaar in formaten van 425g (SodaStream-formaat), 60L, 6kg en 10kg. Hoe groter de cilinder, hoe lager de prijs per liter bruisend water. Voedselveilig CO2 (E290 grade) is vereist. De cilinder staat onder hoge druk (50&ndash;60 bar bij kamertemperatuur) en mag niet worden beschadigd of blootgesteld aan hitte.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Drukregulator</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Verlaagt de hoge cilinderspanning (50&ndash;60 bar) naar een bruikbare werkdruk van 3&ndash;6 bar voor carbonatie. Een goede drukregulator heeft een ingangsmanometer (cilinder druk) en uitgangsmanometer (werkdruk), een afsluitkraan en een veiligheidsventiel. Prijs: &euro;30&ndash;100. Duurdere modellen bieden nauwkeurigere drukinstellingen.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Carbonatieslang met diffuser</h3>
            </div>
            <p className="text-gray-700 text-sm">
              De slang verbindt de drukregulator met de carbonatiefles. De diffuser aan het uiteinde verdeelt het CO2 in fijne belletjes voor snelle en gelijkmatige absorptie. Gebruik voedselveilige slangen (silicon of PTFE). Prijs slang + diffuser: &euro;10&ndash;30.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Carbonatiefles of dispenser</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Een drukvaste fles (1&ndash;2 liter, roestvrij staal of glas) of een ingebouwde dispensertank. De fles moet bestand zijn tegen 6&ndash;8 bar overdruk. Vaatwassersbestendige roestvrijstalen flessen zijn het meest duurzaam. Prijs: &euro;20&ndash;60 per fles.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          CO2-cilinder kostenverlijking
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Cilinder</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Inhoud (bruisend water)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs refill</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs/L</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">SodaStream 60L</td>
                <td className="border border-gray-300 px-3 py-2">60L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;8&ndash;12</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700 font-semibold">&euro;0,13&ndash;0,20</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">425g cilinder</td>
                <td className="border border-gray-300 px-3 py-2">~40L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;5&ndash;8</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700 font-semibold">&euro;0,13&ndash;0,20</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">6kg cilinder</td>
                <td className="border border-gray-300 px-3 py-2">~3.000L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;15&ndash;25</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">&euro;0,005&ndash;0,008</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">10kg cilinder</td>
                <td className="border border-gray-300 px-3 py-2">~5.000L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;20&ndash;35</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">&euro;0,004&ndash;0,007</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Integratie met osmosefilter: de beste combinatie
        </h2>
        <p className="text-gray-700 mb-4">
          De meest professionele thuissetup combineert een osmosefilter met een los CO2-systeem. Het omgekeerde osmosefilter zuivert het kraanwater volledig: het verwijdert PFAS (&gt;95%), lood, nitraten, medicijnresten en bacterien. Het gezuiverde osmosewater (TDS &lt;50 mg/L) wordt vervolgens door het CO2-systeem gecarboniseerd.
        </p>
        <p className="text-gray-700 mb-6">
          Resultaat: schoon, zuiver bruisend water voor minder dan &euro;0,05 per liter. Commercieel bruisend bronwater kost &euro;0,80&ndash;1,20 per liter en is zelden zo goed gefilterd als osmosewater. Bij PFAS-zones (Dordrecht, Schiphol-omgeving) of bij loodleidingen (huizen gebouwd voor 1960) is deze combinatie de veiligste keuze.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Veiligheid van CO2 binnenshuis
        </h2>
        <p className="text-gray-700 mb-4">
          CO2 gebruikt in bruisend water is voedselveilig CO2 (E290 grade) &mdash; dezelfde kwaliteit als gebruikt in frisdrank en bier. Bij normaal gebruik zijn er geen gezondheidsrisicos: de hoeveelheid CO2 die vrijkomt bij het openen van een fles of bij een kleine lekkage is verwaarloosbaar.
        </p>
        <p className="text-gray-700 mb-6">
          Let op bij grote cilinders (6&ndash;10 kg): CO2 is zwaarder dan lucht en kan zich ophopen in laag gelegen, slecht geventileerde ruimtes (kelders, diepe kasten). Bij concentraties boven 2% in lucht treedt kortademigheid op; boven 5% zijn ernstige klachten mogelijk. Bij normaal gebruik en goede ventilatie is dit risico verwaarloosbaar klein. Bewaar cilinders nooit in slaapkamers of kleine ruimtes zonder ventilatie.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/bruisend-water/kraan" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">4-in-1 bruisend waterkraan</h3>
              <p className="text-sm text-gray-600">Vergelijking van 4-in-1 kranen: Quooker, Grohe Blue, Zip HydroTap en PureAqua.</p>
            </Link>
            <Link href="/bruisend-water/sodastream" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">SodaStream vs bruisend waterkraan</h3>
              <p className="text-sm text-gray-600">Welke keuze past bij uw budget en verbruik?</p>
            </Link>
            <Link href="/waterfilter/koffiezetter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor koffiezetter</h3>
              <p className="text-sm text-gray-600">Hoe filtert u water voor de beste koffiesmaak en langere levensduur van uw apparaat?</p>
            </Link>
            <Link href="/bruisend-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Bruisend water: alle methoden</h3>
              <p className="text-sm text-gray-600">Overzicht van alle manieren om thuis bruisend water te maken.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over CO2-systemen voor bruisend water
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
          <Link href="/bruisend-water" className="text-[#005F8A] underline">alle bruisend water methoden</Link>,{' '}
          <Link href="/bruisend-water/kraan" className="text-[#005F8A] underline">4-in-1 bruisend waterkraan</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>
      </main>
    </>
  );
}
