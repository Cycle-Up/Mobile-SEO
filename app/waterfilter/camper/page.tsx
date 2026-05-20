import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterfilter voor Camper & Caravan | Veilig Drinkwater Onderweg',
  description: 'Welk waterfilter past in jouw camper of caravan? Vergelijk inline-filters, UF-filters en draagbare RO-systemen. Veilig drinkwater op elk standplaats.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/camper' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welk waterfilter heb ik nodig in een camper?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een camper is een inline-waterfilter (actief kool + sediment) of een ultrafiltratie-filter (UF) geschikt. Een RO-systeem geeft de beste kwaliteit maar vergt meer ruimte en waterdruk. Kies op basis van bestemming: West-Europa: UF of koolfilter volstaat; buiten Europa of op primitieve campings: overweeg RO of osmosefilter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een osmosefilter in mijn camper installeren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, compacte RO-systemen zijn beschikbaar voor campergebruik. Vereisten: minimaal 2,5 bar waterdruk (boosterpomp indien nodig), 12V aansluiting beschikbaar, ruimte voor membraan en kleine opslagtank. Tankloze systemen (tapkraan) zijn het meest praktisch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe behandel ik het watertanksysteem van mijn camper?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reinig de watertank jaarlijks met citroenzuur of een speciale desinfectietabletten. Laat de tank nooit langer dan 48 uur gevuld staan bij warme temperaturen (Legionella-risico). Gebruik een inlinetankfilter en vervang het filter elk seizoen of elke 3.000 liter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een waterfilter voor een camper?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inline sediment + koolfilter: €25–60. UF-filter (ultrafiltratie): €80–150. Draagbaar RO-systeem: €200–400. Compacte inbouw RO met tank: €300–600. Vervangingsfilters: €15–40 per jaar bij normaal gebruik.',
      },
    },
  ],
};

export default function WaterfilterCamperPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Camper', item: 'https://waterfilterplatform.nl/waterfilter/camper' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterfilter" className="hover:underline">Waterfilter</a> &rsaquo;{' '}
          <span>Camper</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterfilter voor Camper & Caravan
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Onderweg rijden camperaars en caravanbezitters op allerlei waterbronnen: campingkranen, gemeentelijke standpunten, en zelfs eigen bronnen. De kwaliteit varieert sterk — een goed waterfilter is geen luxe maar noodzaak.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom heb je een waterfilter nodig in je camper?
        </h2>
        <p className="text-gray-700 mb-4">
          Campingwater doorloopt oude leidingen, slangen van wisselende kwaliteit en soms opslagtanks die al jaren niet gereinigd zijn. Bacteriën, sediment, chloor en zware metalen zijn reële risico's — zeker op campings buiten West-Europa.
        </p>
        <p className="text-gray-700 mb-4">
          Bovendien bouwen watertanks in campers snel biofilm op als ze lang staan. Een goed filtersysteem elimineert dit risico zonder dat je afhankelijk bent van flessenwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Soorten waterfilters voor campers
        </h2>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">1. Inline sediment + koolfilter</h3>
        <p className="text-gray-700 mb-3">
          De meest toegankelijke optie. Een inline-filter wordt gemonteerd op de watertoevoer van de camper en verwijdert sediment, chloor en lichte verontreinigingen. Prijsklasse €25–60, vervanging jaarlijks.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Geschikt voor West-Europese campings</li>
          <li>Eenvoudige installatie (schroefdraad aansluiting)</li>
          <li>Verwijdert geen bacteriën of virussen</li>
          <li>Verbetert smaak en geur aanzienlijk</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">2. Ultrafiltratie (UF) filter</h3>
        <p className="text-gray-700 mb-3">
          UF-filters hebben poriën van 0,01–0,1 micron en filteren bacteriën, parasieten en grotere virussen eruit. Geen elektriciteit nodig, werkt op waterdruk. Ideaal voor campings in Oost-Europa, Turkije of Marokko.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Verwijdert 99,99% van bacteriën</li>
          <li>Geen stroom of afvalwater</li>
          <li>Prijsklasse €80–150</li>
          <li>Periodiek achterwaarts spoelen (backflush)</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">3. Draagbaar osmosefilter</h3>
        <p className="text-gray-700 mb-3">
          Een compacte RO-installatie geeft de hoogste waterkwaliteit: vrijwel geen mineralen, bacteriën, virussen of zware metalen. Vereist minimaal 2,5 bar waterdruk en produceert afvalwater (verhouding 1:3 bij standaard membraan).
        </p>
        <p className="text-gray-700 mb-4">
          Bekijk ons overzicht van <a href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilters kopen</a> voor compacte modellen die geschikt zijn voor campergebruik.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Prijs</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Bacteriën</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kalk</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Geschikt voor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Inline koolfilter</td>
                <td className="border border-gray-300 px-3 py-2">€25–60</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
                <td className="border border-gray-300 px-3 py-2">Beperkt</td>
                <td className="border border-gray-300 px-3 py-2">West-Europa</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">UF-filter</td>
                <td className="border border-gray-300 px-3 py-2">€80–150</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
                <td className="border border-gray-300 px-3 py-2">Beperkt</td>
                <td className="border border-gray-300 px-3 py-2">Oost-Europa, Turkije</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">RO-filter (compact)</td>
                <td className="border border-gray-300 px-3 py-2">€200–600</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
                <td className="border border-gray-300 px-3 py-2">Ja (95%+)</td>
                <td className="border border-gray-300 px-3 py-2">Wereldwijd</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Installatie-tips voor camperfilters
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Externe aansluiting:</strong> Monteer het filter op de externe wateraansluiting, vóór de campertank. Zo is al het water in de tank al gefilterd.</li>
          <li><strong>Kraanwater direct:</strong> Alternatief: filter op de koude waterkraan in de keuken, zodat drinkwater en kookwater gefilterd zijn.</li>
          <li><strong>Druk controleren:</strong> Campings leveren vaak 1,5–4 bar. Gebruik een drukregelaar als de druk boven 3 bar stijgt om slangen te beschermen.</li>
          <li><strong>Winterstalling:</strong> Leeg het filtersysteem volledig voor de winter. Bevroren filters scheuren en zijn onbruikbaar.</li>
          <li><strong>Vervangingsschema:</strong> Noteer de installatedatum op de filter. Verwissel jaarlijks of na 3.000 liter, wat eerder komt.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Legionella-preventie in de camper
        </h2>
        <p className="text-gray-700 mb-4">
          Legionellabacteriën groeien bij temperaturen van 20–45°C. Een campertank die weken zonder gebruik staat in de zomerzon is een ideale kweekplek. Preventieve maatregelen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Laat de tank bij gebruik altijd volledig doorstromen voor je drinkt</li>
          <li>Laat het water even doorlopen als de camper &gt;1 week heeft gestaan</li>
          <li>Reinig de tank elk seizoen met desinfectietabletten</li>
          <li>Gebruik een UV-C filter als aanvulling op je standaard filter</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Veelgestelde vragen
        </h2>

        <div className="space-y-4 mb-8">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <div className="bg-[#E0F2FE] rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Thuis ook schoon water?</h3>
          <p className="text-gray-700 mb-4">
            Een osmosefilter thuis geeft dezelfde superieure waterkwaliteit als je filtersysteem in de camper — maar dan voor je hele gezin. Bekijk ons aanbod:
          </p>
          <a href="/omgekeerde-osmose/kopen" className="inline-block bg-[#005F8A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#003F5C] transition-colors">
            Bekijk osmosefilters →
          </a>
        </div>

        <p className="text-gray-600 text-sm">
          Lees ook: <a href="/kennisbank/waterfilter-camper" className="text-[#005F8A] underline">Waterfilter voor camper – praktisch gids</a> en <a href="/waterfilter/soorten" className="text-[#005F8A] underline">alle soorten waterfilters</a>.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/waterfilter/reisfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Reisfilter</h3>
            <p className="text-sm text-gray-600">Draagbare waterfilters voor op reis: van UV-pennen tot compacte holle-vezelfilters.</p>
          </a>
          <a href="/waterfilter/outdoor" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Outdoor waterfilter</h3>
            <p className="text-sm text-gray-600">Waterfilters voor buiten, wandelen en kamperen: lichtgewicht en betrouwbaar.</p>
          </a>
          <a href="/filtertechnieken/uv-sterilisatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">UV-sterilisatie</h3>
            <p className="text-sm text-gray-600">Hoe UV-sterilisatie bacterien en virussen vernietigt zonder chemicalien toe te voegen.</p>
          </a>
          <a href="/waterfilter/sediment" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Sedimentfilter</h3>
            <p className="text-sm text-gray-600">Hoe een sedimentfilter deeltjes en troebel water aanpakt als eerste stap in uw filtersysteem.</p>
          </a>
        </div>
      </section>
      </main>
    </>
  );
}
