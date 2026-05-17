import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosewater vs mineraalwater: wat is het verschil en wat is gezonder?',
  description:
    'Osmosewater heeft TDS &lt;50 mg/L en geen verontreinigingen. Mineraalwater heeft vaste mineraalsamenstelling. Vergelijking voor gezondheid, koffie, kosten en.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/vs-mineraalwater' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is osmosewater gezonder dan mineraalwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Geen van beide is per definitie gezonder. Osmosewater bevat vrijwel geen verontreinigingen (PFAS, nitraat, lood), maar ook weinig mineralen. Mineraalwater bevat meer calcium en magnesium, maar ook hogere concentraties van variabele stoffen. Bij een gevarieerde voeding maakt het verschil in mineralengehalte weinig uit: voeding levert 80-90% van de dagelijkse calcium- en magnesiumbehoefte. Osmosewater met remineralisatiecartridge biedt het beste van beide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bevat osmosewater geen mineralen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puur osmosewater bevat zeer weinig mineralen: TDS 5-50 mg/L, calcium onder 5 mg/L, magnesium onder 2 mg/L. Het RO-membraan verwijdert 95-99% van alle opgeloste stoffen, inclusief mineralen. Door een remineralisatiecartridge toe te voegen stijgt de pH naar 7,5 en worden calcium en magnesium teruggevoegd tot 80-150 mg/L TDS, vergelijkbaar met licht bronwater zoals Volvic.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom is mineraalwater zo duur vergeleken met osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mineraalwater kost EUR 0,40-1,50 per liter in de supermarkt. De prijs dekt bronextractie, kwaliteitscontrole, plastic flesproductie, transport en retailmarge. Osmosewater thuis kost EUR 0,02-0,05 per liter (inclusief filterpatronen en afschrijving apparaat). Een gezin dat dagelijks 4 liter drinkt, bespaart EUR 600-2.000 per jaar door over te stappen op osmose.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is het milieuvriendelijker om osmosewater te drinken in plaats van flessenwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, aanzienlijk. Een liter mineraalwater in plastic fles veroorzaakt 300-500 gram CO2-equivalent (plasticproductie, transport, afvalverwerking). Osmosewater vanuit leidingwater produceert minder dan 30 gram CO2 per liter. Bovendien genereert flessenwater plastic afval en microplastics. Voor een milieubewust huishouden is osmose veruit de betere keuze.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen bronwater en mineraalwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mineraalwater (EU-Richtlijn 2009/54/EG) moet komen van een beschermde ondergrondse bron en een wettelijk vastgelegde, constante mineraalsamenstelling hebben. Bronwater heeft geen vereiste vaste samenstelling. Mineraalwater ondergaat minimale behandeling (geen chloor, geen ontharding), bronwater mag iets ruimere behandeling ondergaan. Beiden zijn gereguleerd, maar mineraalwater heeft strengere eisen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik osmosewater gebruiken als vervanging voor mineraalwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, osmosewater met een remineralisatiecartridge is een uitstekende vervanging voor dagelijks gebruik. De cartridge voegt calcium, magnesium en bicarbonaten toe waardoor het water vergelijkbaar wordt met licht mineraalwater. Voor babyvoeding, koffie en dagelijks drinken is het volledig geschikt. Alleen voor specifieke medische dieten met voorgeschreven mineraalgehalte kan mineraalwater een specifieke reden hebben.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk water is beter voor koffiezetten: mineraalwater of osmose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor espresso prefereert de SCA (Specialty Coffee Association) water met 75-150 mg/L TDS en 50-100 mg/L calcium. Evian (309 mg/L TDS) is te mineraalrijk voor de meeste recepten. Osmosewater met remineralisatie geeft de barista volledige controle over de samenstelling. Veel professionele koffiebars gebruiken RO-systemen met remineralisatie juist omdat je de samenstelling precies kunt instellen per koffie-oorsprong.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heeft osmosewater genoeg mineralen voor dagelijks gebruik?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puur osmosewater heeft weinig mineralen, maar dit is geen gezondheidsrisico bij een gevarieerde voeding. De WHO erkent in haar 2004-rapport dat mineralen primair uit voeding komen en dat water bij een normale voeding slechts 10-20% van de dagelijkse behoefte dekt. Met een remineralisatiecartridge wordt osmosewater aangerijkt met calcium en magnesium, waarmee het nog meer lijkt op bronwater en optimaal geschikt is voor dagelijks gebruik.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosewater vs mineraalwater: wat is het verschil en wat is gezonder?',
  description:
    'Osmosewater heeft TDS kleiner dan 50 mg/L en geen verontreinigingen. Mineraalwater heeft vaste mineraalsamenstelling. Vergelijking voor gezondheid, koffie.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/osmose-water/vs-mineraalwater',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseVsMineraaalwaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Osmosewater', item: 'https://waterfilterplatform.nl/osmose-water' },
              { '@type': 'ListItem', position: 3, name: 'Osmosewater vs mineraalwater', item: 'https://waterfilterplatform.nl/osmose-water/vs-mineraalwater' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/osmose-water" className="hover:underline">Osmosewater</a> &rsaquo;{' '}
          <span>Osmosewater vs mineraalwater</span>
        </nav>

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Osmosewater vs mineraalwater: wat is het verschil en wat is gezonder?
          </h1>
          <p className="text-gray-600 text-sm">
            Vergelijking op gezondheid, mineralen, kosten, milieu en koffiekwaliteit
          </p>
        </section>

        <QuickAnswer answer="Osmosewater heeft TDS van 5-50 mg/L en verwijdert meer dan 95% van alle verontreinigingen. Mineraalwater heeft een wettelijk vaste mineraalsamenstelling (100-500 mg/L TDS). Beide zijn veilig. Voor dagelijks gebruik is osmose goedkoper (EUR 0,02-0,05/L), milieuvriendelijker en zuiverder. Met remineralisatiecartridge heeft osmosewater vergelijkbare mineralenwaarden als licht bronwater." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is mineraalwater precies?
        </h2>
        <p className="text-gray-700 mb-4">
          Mineraalwater is in de EU streng gereguleerd via Richtlijn 2009/54/EG. Het moet afkomstig zijn van een beschermde, erkende ondergrondse bron en een vaste, wettelijk vastgelegde mineraalsamenstelling hebben. Dit betekent dat Evian altijd dezelfde hoeveelheid calcium bevat, jaar na jaar. Alleen minimale behandeling is toegestaan: het toevoegen of verwijderen van koolzuur, filtratie om sediment te verwijderen, en UV-desinfectie. Chloor, ontharding en andere chemische behandelingen zijn verboden.
        </p>
        <p className="text-gray-700 mb-6">
          Bekende mineraalwatermerken in Nederland: Evian (Alpen, Frankrijk, circa 309 mg/L TDS), Spa Blauw (Ardennen, circa 354 mg/L TDS), San Pellegrino (Italie, circa 1.109 mg/L TDS). De hoge prijs (EUR 0,40-1,50/L) dekt bronbescherming, kwaliteitscontrole, flesproductie en transport over honderden kilometers.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is osmosewater?
        </h2>
        <p className="text-gray-700 mb-4">
          Osmosewater ontstaat door leidingwater te persen door een semi-permeabel membraan met porieen van 0,0001 micron. Dit membraan houdt 95-99% van alle opgeloste stoffen tegen: mineralen, zware metalen, nitraat, PFAS, farmaceutische resten en bacteriesporen. Het resultaat is water met een TDS van 5-50 mg/L, vrijwel vrij van alle verontreinigingen.
        </p>
        <p className="text-gray-700 mb-6">
          Het productieproces verbruikt wel water: voor elke liter osmosewater gaat er gemiddeld 2-4 liter als concentraat (afvalwater) weg. Moderne systemen recupereren dit concentraat of gebruiken permeaat-pompen om het verbruik te beperken.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: osmose, mineraalwater en kraanwater
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Eigenschap</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Osmosewater</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Mineraalwater (gem.)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kraanwater NL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">TDS (mg/L)</td>
                <td className="border border-gray-300 px-3 py-2">5-50</td>
                <td className="border border-gray-300 px-3 py-2">100-500</td>
                <td className="border border-gray-300 px-3 py-2">150-350</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Calcium (mg/L)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;5</td>
                <td className="border border-gray-300 px-3 py-2">50-150</td>
                <td className="border border-gray-300 px-3 py-2">40-100</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Magnesium (mg/L)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;2</td>
                <td className="border border-gray-300 px-3 py-2">10-50</td>
                <td className="border border-gray-300 px-3 py-2">5-20</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Natrium (mg/L)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;5</td>
                <td className="border border-gray-300 px-3 py-2">5-50</td>
                <td className="border border-gray-300 px-3 py-2">10-100</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">PFAS</td>
                <td className="border border-gray-300 px-3 py-2">&lt;0,001 µg/L</td>
                <td className="border border-gray-300 px-3 py-2">&lt;0,001 µg/L*</td>
                <td className="border border-gray-300 px-3 py-2">0,01-0,04 µg/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Nitraat</td>
                <td className="border border-gray-300 px-3 py-2">&lt;1 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">5-25 mg/L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Prijs per liter</td>
                <td className="border border-gray-300 px-3 py-2">EUR 0,02-0,05</td>
                <td className="border border-gray-300 px-3 py-2">EUR 0,40-1,50</td>
                <td className="border border-gray-300 px-3 py-2">EUR 0,001</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Plastic afval</td>
                <td className="border border-gray-300 px-3 py-2">Geen</td>
                <td className="border border-gray-300 px-3 py-2">Ja (fles)</td>
                <td className="border border-gray-300 px-3 py-2">Geen</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-xs mb-6">
          * Sommige bronnen zijn in 2021 aangetroffen met lage PFAS-concentraties (EEA-rapport 2021). Wettelijke norm voor mineraalwater is streng maar niet nul.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Calcium en magnesium: hoe belangrijk is water als bron?
        </h2>
        <p className="text-gray-700 mb-4">
          Een veelgehoord argument voor mineraalwater is het hogere gehalte aan calcium en magnesium. Maar hoe groot is de bijdrage van water aan de totale dagelijkse inname? De dagelijkse calciumbehoefte voor een volwassene is circa 1.000 mg. Bij 2 liter Evian (80 mg/L calcium) neem je 160 mg calcium in via water: 16% van de dagbehoefte. De andere 84% moet uit voeding komen: kaas, melk, yoghurt, groenten.
        </p>
        <p className="text-gray-700 mb-4">
          De WHO erkent in haar richtlijnen dat calcium uit drinkwater bijdraagt aan de totale inname, maar benadrukt dat bij een normale, gevarieerde voeding mineralen primair via voeding worden opgenomen. Drinkwater levert doorgaans 10-20% van calcium en magnesium.
        </p>
        <p className="text-gray-700 mb-6">
          Conclusie: wie voldoende zuivelproducten, groenten en noten eet, heeft geen specifieke behoefte aan mineraalwater voor zijn calciuminname. Wie zorgen heeft over een te lage inname, voegt beter een remineralisatiecartridge toe aan het osmosesysteem.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosewater + remineralisatie: het beste van beide werelden
        </h2>
        <p className="text-gray-700 mb-4">
          Door een alkalische remineralisatiecartridge toe te voegen aan een osmosesysteem krijgt het water een pH van 7,0-7,5 en worden calcium- en magnesiumcarbonaten teruggevoegd. Het TDS stijgt naar 80-200 mg/L, vergelijkbaar met Volvic of gemiddeld licht bronwater. Kosten van een remineralisatiecartridge: EUR 15-35 per jaar.
        </p>
        <p className="text-gray-700 mb-6">
          Dit gecombineerde systeem geeft volledige controle over de watersamenstelling: PFAS en nitraat worden verwijderd, mineralen worden gedoseerd teruggevoegd, en de prijs blijft ver onder die van flessenwater. Meer informatie over remineralisatie leest u op de pagina{' '}
          <Link href="/osmose-water" className="text-[#005F8A] underline">osmosewater voordelen</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Milieu: flessenwater vs osmose thuis
        </h2>
        <p className="text-gray-700 mb-4">
          Flessenwater heeft een forse milieu-impact die consumenten vaak onderschatten. De CO2-voetafdruk per liter mineraalwater bedraagt 300-500 gram, inclusief plasticproductie, afvulling, transport en afvalverwerking. Osmosewater thuis veroorzaakt minder dan 30 gram CO2 per liter. Het verschil is een factor 10 tot 17.
        </p>
        <p className="text-gray-700 mb-6">
          Bovendien is plastic flessenwater de grootste bron van microplastics in drinkwater: PET-flessen geven bij warmte en hergebruik microplasticdeeltjes af. Een osmosesysteem met roestvrijstalen opslagtank genereert geen microplastics.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Koffie en thee: welk water geeft de beste smaak?
        </h2>
        <p className="text-gray-700 mb-4">
          Baristas en theemeesters zijn het erover eens: de mineralensamenstelling van water bepaalt voor een groot deel de smaak van de koffie of thee. De SCA (Specialty Coffee Association) beveelt water aan met 75-150 mg/L TDS en een calciumgehalte van 50-100 mg/L.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Evian (309 mg/L TDS):</strong> te mineraalrijk voor de meeste espressorecepten, kan bitterheid versterken</li>
          <li><strong>Volvic (130 mg/L TDS):</strong> populair bij baristas voor lichte koffiesoorten</li>
          <li><strong>Osmose puur (10-30 mg/L):</strong> te zacht voor espresso, calcium ontbreekt voor goede extractie</li>
          <li><strong>Osmose + remineralisatie:</strong> optimaal, samengestelling volledig aanpasbaar per koffie-origine</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Professionele koffiebars kiezen steeds vaker voor een RO-systeem met remineralisatiemodule. Zo hebben zij volledige controle ongeacht de lokale waterkwaliteit. Meer lezen?{' '}
          <Link href="/osmose-water/vs-bronwater" className="text-[#005F8A] underline">Vergelijking osmose vs bronwater</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">alles over omgekeerde osmose</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen</h2>
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
          <Link href="/osmose-water" className="text-[#005F8A] underline">osmosewater uitleg</Link>,{' '}
          <Link href="/osmose-water/vs-bronwater" className="text-[#005F8A] underline">osmose vs bronwater</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose filter</Link> en{' '}
          <a href="/osmose-water/koffie" className="text-[#005F8A] underline">osmosewater voor koffie</a>.
        </p>
      </main>
    </>
  );
}
