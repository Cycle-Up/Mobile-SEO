import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'RO-membraan vervangen: wanneer en hoe doe je dat?',
  description: 'Het RO-membraan van een osmosefilter vervangen na 2-3 jaar. Ontdek hoe je weet wanneer het membraan aan vervanging toe is, welk membraan past en hoe je het.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/membraan-vervangen' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe weet ik wanneer mijn RO-membraan vervangen moet worden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er zijn twee methoden: tijdgebaseerd (vervang na 2-3 jaar ongeacht prestaties) en prestatiegebaseerd (meet de rejection rate). Een slecht membraan heeft een rejection rate onder de 85%. Signalen: het duurt langer om de opslagtank te vullen (meer dan 4 uur voor 10 liter), de TDS-waarde van het productwater is gestegen, of u proeft een smaakverandering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe bereken ik de rejection rate van mijn osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Meet de TDS (in ppm) van het inkomende water en van het productwater met een TDS-meter. Bereken: rejection rate = (1 - TDS_productwater / TDS_inkomend) x 100%. Een nieuw membraan haalt 95-99%. Zakt de rejection rate onder de 85%, dan is vervanging aan te raden. Een TDS-meter kost €10-20 en is essentieel gereedschap voor elke osmosefilter eigenaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk RO-membraan past in mijn osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standaard huishoudelijke osmosefilters gebruiken een 11 inch membraan met een diameter van 1,8 inch. Deze maat is breed compatibel met merken als Filmtec, Hydranautics en Vontron. Kies de juiste capaciteit in GPD: 50 GPD voor een 1-3 persoonshuishouden, 75 GPD voor een middelgroot huishouden, 100 GPD voor een gezin van 4 of meer. Controleer ook of uw systeem een standaard tank-systeem of een tankless systeem heeft.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe vervang ik zelf een RO-membraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stap-voor-stap: (1) watertoevoer afsluiten en druk ontlasten door een kraan te openen, (2) membraanbehuizing losdraaien met de speciale sleutel of met de hand, (3) oud membraan uittrekken (stevig trekken), (4) nieuw membraan invoegen met de concentrate-zijde (met O-ringen) naar de insteekopening, (5) behuizing dichtdraaien, (6) toevoer openen en eerste 2-3 tankinhouden weggoooien, (7) TDS meten om prestaties te bevestigen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de kosten van een nieuw RO-membraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een standaard 50 GPD membraan kost €25-50. Een 75 GPD membraan €30-60, een 100 GPD membraan €35-70. Tankless membranen (400 GPD) kosten €60-120. Merkmembranen van Dow Filmtec zijn iets duurder maar gelden als referentie voor kwaliteit. Generieke membranen van Vontron of Hydranautics zijn betrouwbaar en betaalbaarder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik het water weggoooien na een membraanwissel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Nieuwe membranen zijn behandeld met conserveringsmiddelen die in de eerste productiecycli uitgewassen worden. Gooi de eerste twee volledige tankinhouden weg. Meet daarna de TDS om te bevestigen dat de rejection rate normaal is. Pas als de TDS consistent laag is, is het water geschikt voor consumptie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang gaat een nieuw RO-membraan mee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gemiddeld 2-3 jaar bij normaal huishoudelijk gebruik. Factoren die de levensduur verkorten: hoog chloorgehalte in het inkomende water (chloor beschadigt het membraan), hoge TDS van het inkomende water, onvoldoende onderhoud van de prefilters (vuil sediment en chloor bereiken het membraan). Vervang altijd de koolstofprefilter bij het wisselen van het membraan.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'RO-membraan vervangen: wanneer en hoe doe je dat?',
  description: 'Het RO-membraan van een osmosefilter vervangen na 2-3 jaar. Ontdek hoe je weet wanneer het membraan aan vervanging toe is, welk membraan past en hoe je het.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/omgekeerde-osmose/membraan-vervangen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function MembraanVervangenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
              { '@type': 'ListItem', position: 3, name: 'RO-membraan vervangen', item: 'https://waterfilterplatform.nl/omgekeerde-osmose/membraan-vervangen' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/omgekeerde-osmose" className="hover:underline">Omgekeerde osmose</Link> &rsaquo;{' '}
          <span>RO-membraan vervangen</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          RO-membraan vervangen: wanneer en hoe doe je dat?
        </h1>

        <QuickAnswer answer="Een RO-membraan vervangen doe je na 2-3 jaar of als de rejection rate onder de 85% daalt. Meet de TDS voor en na het filter. Stap-voor-stap: watertoevoer dicht, behuizing losdraaien, oud membraan eruit, nieuw membraan erin (let op richting), eerste 2 tankinhouden weggooien. Kosten: €25-70 per membraan." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer moet het RO-membraan vervangen worden?
        </h2>
        <p className="text-gray-700 mb-4">
          Er zijn twee benaderingen om te bepalen wanneer vervanging nodig is:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Tijdgebaseerd:</strong> vervang het membraan elke 2-3 jaar, ongeacht de gemeten prestaties. Dit is de eenvoudigste aanpak en voorkomt dat u wacht tot de kwaliteit merkbaar verslechtert.</li>
          <li><strong>Prestatiegebaseerd:</strong> meet de rejection rate met een TDS-meter. Zodra de rejection rate daalt onder de 85%, is vervanging noodzakelijk.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Signalen die duiden op een versleten membraan: het duurt meer dan 4 uur om een tank van 10 liter te vullen, de TDS-waarde van het productwater is zichtbaar gestegen ten opzichte van de beginmeting, of u merkt een smaakverandering in het water.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Rejection rate berekenen: zo doet u het
        </h2>
        <p className="text-gray-700 mb-4">
          De rejection rate is de maatstaf voor hoe goed het membraan werkt. Berekening:
        </p>
        <div className="bg-[#E0F2FE] rounded-lg p-4 mb-6">
          <p className="font-mono text-[#003F5C] font-semibold text-sm">
            Rejection rate (%) = (1 &minus; TDS_productwater / TDS_inkomend) &times; 100
          </p>
        </div>
        <p className="text-gray-700 mb-4">
          <strong>Voorbeeld:</strong> inkomend water heeft een TDS van 300 ppm, het productwater heeft een TDS van 15 ppm.
          Rejection rate = (1 &minus; 15/300) &times; 100 = (1 &minus; 0,05) &times; 100 = 95%. Dit is een uitstekend resultaat.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Rejection rate</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Beoordeling</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Actie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">95-99%</td>
                <td className="border border-gray-300 px-3 py-2">Uitstekend (nieuw membraan)</td>
                <td className="border border-gray-300 px-3 py-2">Geen actie nodig</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">90-95%</td>
                <td className="border border-gray-300 px-3 py-2">Goed (lichte slijtage)</td>
                <td className="border border-gray-300 px-3 py-2">Monitoren, over 6-12 mnd vervangen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">85-90%</td>
                <td className="border border-gray-300 px-3 py-2">Matig (versleten)</td>
                <td className="border border-gray-300 px-3 py-2">Vervanging plannen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">&lt;85%</td>
                <td className="border border-gray-300 px-3 py-2">Slecht (uitgewerkt)</td>
                <td className="border border-gray-300 px-3 py-2">Direct vervangen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welk RO-membraan kiezen?
        </h2>
        <p className="text-gray-700 mb-4">
          Standaard huishoudelijke osmosefilters gebruiken membranen van 11 inch lengte en 1,8 inch diameter. Dit formaat is breed compatibel. Kies de capaciteit op basis van uw verbruik:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Capaciteit</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Prijs</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Geschikt voor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">50 GPD (standaard)</td>
                <td className="border border-gray-300 px-3 py-2">~190 L/dag</td>
                <td className="border border-gray-300 px-3 py-2">&euro;25-50</td>
                <td className="border border-gray-300 px-3 py-2">1-3 persoons huishouden</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">75 GPD</td>
                <td className="border border-gray-300 px-3 py-2">~285 L/dag</td>
                <td className="border border-gray-300 px-3 py-2">&euro;30-60</td>
                <td className="border border-gray-300 px-3 py-2">Middelgroot huishouden</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">100 GPD</td>
                <td className="border border-gray-300 px-3 py-2">~380 L/dag</td>
                <td className="border border-gray-300 px-3 py-2">&euro;35-70</td>
                <td className="border border-gray-300 px-3 py-2">Gezin 4+ personen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">400 GPD (tankless)</td>
                <td className="border border-gray-300 px-3 py-2">Directe productie</td>
                <td className="border border-gray-300 px-3 py-2">&euro;60-120</td>
                <td className="border border-gray-300 px-3 py-2">Hoge capaciteit, geen tank</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Merken zoals <strong>Dow Filmtec</strong>, <strong>Hydranautics</strong> en <strong>Vontron</strong> produceren betrouwbare membranen die breed compatibel zijn met standaard osmosesystemen. Controleer altijd de interne diameter van de membraanbehuizing: de standaard voor huishoudelijk gebruik is 1,8 inch.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap-voor-stap: RO-membraan zelf vervangen
        </h2>
        <p className="text-gray-700 mb-4">
          Membraanwissel is een klus die de meeste gebruikers zelf kunnen uitvoeren. U heeft alleen een membraansleutel of stevige handen nodig.
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Watertoevoer afsluiten</strong> en druk ontlasten door even de osmosekraan te openen totdat het water stopt
          </li>
          <li>
            <strong>Membraanbehuizing losdraaien</strong> &mdash; gebruik de meegeleverde sleutel of draai met de hand (kan stijf zitten door waterdruk). De behuizing zit doorgaans aan de zijkant of bovenzijde van de filterunit.
          </li>
          <li>
            <strong>Oud membraan uittrekken</strong> &mdash; pak het membraan stevig vast en trek het eruit. Het kan stijf zitten; een lichte draaiende beweging helpt.
          </li>
          <li>
            <strong>Nieuw membraan invoegen</strong> &mdash; let op de richting: de concentrate-zijde (het uiteinde met de O-ringen of dop) gaat als eerste de behuizing in. Duw het membraan stevig op zijn plaats.
          </li>
          <li>
            <strong>Behuizing sluiten</strong> &mdash; draai stevig aan, maar niet overmatig (geen gereedschap nodig voor het sluiten bij de meeste systemen).
          </li>
          <li>
            <strong>Toevoer openen</strong> en de eerste twee tot drie volledige tankinhouden weggoooien (conserveringsmiddelen spoelen).
          </li>
          <li>
            <strong>TDS meten</strong> om te bevestigen dat de rejection rate goed is (doel: boven 90%).
          </li>
        </ol>
        <p className="text-gray-700 mb-6">
          Tip: vervang tegelijkertijd de sediment- en koolstofprefilters. Vervuilde prefilters zijn de voornaamste oorzaak van voortijdige membraanslijtage.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Eerste gebruik na membraanwissel: water weggoooien
        </h2>
        <p className="text-gray-700 mb-4">
          Nieuwe membranen worden behandeld met een conserveringsoplossing om beschadiging tijdens transport te voorkomen. Deze stof is niet schadelijk, maar geeft het water een onaangename smaak. Gooi daarom:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>De eerste volledige tankinhoud weg (laat de tank vollopen en drain hem volledig)</li>
          <li>De tweede tankinhoud ook weggooooien</li>
          <li>Vanaf de derde vulling is het water geschikt voor consumptie</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Meet na de tweede tankwissel de TDS om de prestaties te bevestigen. Een nieuw membraan van goede kwaliteit bereikt direct een rejection rate van 95-99%.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/omgekeerde-osmose/membraan" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Osmose membraan</h3>
              <p className="text-sm text-gray-600">Hoe werkt een RO-membraan en welke stoffen filtert het uit het water?</p>
            </Link>
            <Link href="/omgekeerde-osmose/levensduur" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Levensduur osmosesysteem</h3>
              <p className="text-sm text-gray-600">Hoe lang gaan de filters en het systeem mee en wat verlengt de levensduur?</p>
            </Link>
            <Link href="/onderhoud/osmose-filter-vervangen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Osmosefilter vervangen</h3>
              <p className="text-sm text-gray-600">Stap-voor-stap handleiding voor het vervangen van alle filters in je osmosesysteem.</p>
            </Link>
            <Link href="/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose: complete gids</h3>
              <p className="text-sm text-gray-600">Alles over hoe RO werkt, wat het filtert en welk systeem bij jou past.</p>
            </Link>
          </div>
        </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/omgekeerde-osmose/membraan" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Membraan</h3>
            <p className="text-sm text-gray-600">Alles over het RO-membraan: werking, types en kwaliteit.</p>
          </Link>
          <Link href="/omgekeerde-osmose/levensduur" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Levensduur</h3>
            <p className="text-sm text-gray-600">Hoe lang gaat een omgekeerde osmose systeem mee?</p>
          </Link>
          <Link href="/onderhoud/osmose-filter-vervangen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmose filter vervangen</h3>
            <p className="text-sm text-gray-600">Stap-voor-stap uitleg voor het vervangen van osmose filters.</p>
          </Link>
          <Link href="/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">Terug naar het hoofdoverzicht van omgekeerde osmose.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over RO-membraan vervangen</h2>
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
          <Link href="/osmose-filter/vervangen" className="text-[#005F8A] underline">osmosefilter filters vervangen</Link> en{' '}
          <Link href="/omgekeerde-osmose/waterdruk" className="text-[#005F8A] underline">waterdruk voor osmosefilter</Link>.
        </p>
      </main>
    </>
  );
}
