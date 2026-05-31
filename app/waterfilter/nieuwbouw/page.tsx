import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Waterfilter nieuwbouwwoning: de beste keuze bij oplevering',
  description: 'Waterfilter in nieuwbouw inbouwen? Leer wanneer installeren het goedkoopst is (tijdens bouw 40–60% goedkoper), welke systemen passen en wat je de aannemer.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/nieuwbouw' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wanneer is het goedkoopst om een waterfilter te installeren in nieuwbouw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tijdens de bouwfase is installatie 40–60% goedkoper dan achteraf. De aannemer kan de leidingen, kabelgoten en aansluitpunten meenemen in het bestaande loodgieterswerk. Na oplevering zijn de wanden dicht en moet er worden weggehakt, stucwerk worden gerepareerd en opnieuw geschilderd — dit maakt de installatiekosten aanzienlijk hoger. Bij oplevering (sleutelmoment) zijn de wanden nog open genoeg voor relatief eenvoudige aanpassingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk waterfilter is het meest geschikt voor nieuwbouw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor nieuwbouw zijn er drie topkeuzes: (1) Pre-piped osmosefilter onder het aanrecht — ideaal als de aannemer de leidingen al meelegt. (2) Kokend water kraan (4-in-1: kokend, gefilterd, koud, warm) — integreert osmosefilter en boiler in één systeem, perfect voor nieuwe keukens. (3) Huis-breed waterontharder aan de hoofdleiding bij harde watertregio\'s. Combineer osmose onder het aanrecht met een kokend water kraan voor de complete oplossing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat moet ik de aannemer vragen bij nieuwbouw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vraag de aannemer specifiek om: (1) Ruimte onder het aanrecht voor osmosesysteem (minimaal 40×40×50 cm vrij), (2) Koud-wateraftapkraan onder het aanrecht met afsluiter, (3) Afvoerpunt voor concentraatwater naast het sifon, (4) 230V stopcontact onder het aanrecht voor de booster/boiler, (5) Optioneel: voorbereid leidingwerk voor huis-breed filtersysteem bij de hoofdkraan. Leg dit schriftelijk vast in de bouwbeschrijving of als meerwerk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een kokend water kraan laten inbouwen in nieuwbouw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, en nieuwbouw is het ideale moment. De aannemer kan bij de keukenmontage direct de juiste kraangat boren (typisch 35mm), de onderboiler plaatsen en het stopcontact onder het aanrecht meenemen. Een 4-in-1 kokend water kraan combineert osmosefiltratie, boiler en tapkraan in één elegant systeem. Kosten in nieuwbouw: €800–1.500 inclusief installatie (vs €1.200–2.000 achteraf bij keukenrenovatie).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is leidingwater in nieuwbouw al schoon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nieuwbouw leidingwater voldoet aan de wettelijke normen, maar heeft specifieke aandachtspunten: (1) Nieuwe leidingen (koper, PVC) geven de eerste weken stoffen af — spoel het systeem de eerste maand goed door. (2) Nieuwbouw staat vaak in polders of akkerbouwgebieden met hogere nitraatwaarden in het grondwater. (3) PFAS-verontreiniging is regionaal aanwezig. Een osmosefilter biedt de meest complete bescherming, ook in nieuwbouw.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een waterfilter laten installeren in nieuwbouw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosefilter tijdens bouw (door aannemer/installateur): €400–800 alles-inclusief. Osmosefilter bij oplevering (installateur): €500–900. Osmosefilter achteraf (na intrek): €600–1.200 inclusief wegwerk. 4-in-1 kokend water kraan + osmose tijdens bouw: €900–1.600. Huis-breed waterontharder tijdens bouw: €1.200–2.500. De extra kosten achteraf zitten hoofdzakelijk in loodgieterswerk en herstelwerkzaamheden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heeft nieuwbouw last van kalkafzetting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dat hangt sterk af van de regio. Nederland kent grote regionale verschillen: West-Nederland (Amsterdam, Rotterdam, Den Haag) heeft zacht tot matig water (8–16 °dH). Midden- en Oost-Nederland hebben hard tot zeer hard water (16–30+ °dH). Bij hard water is een waterontharder aan de hoofdleiding aan te bevelen, gecombineerd met een osmosefilter voor drinkwater. Controleer de waterhardheid in jouw gemeente via onze database.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een smart home waterfilter integreren in nieuwbouw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, nieuwbouw is het perfecte moment voor smart home integratie. Moderne osmosesystemen en kokend water kranen hebben WiFi-modules voor filtercontrole, verbruiksmonitoring en onderhoudsmeldingen. Zorg bij de bouw voor een WiFi-signaal bij het aanrecht (range extender of CAT6-kabel). Sommige systemen integreren met Home Assistant, Google Home of Apple HomeKit voor volledige smart kitchen integratie.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter nieuwbouwwoning: de beste keuze bij oplevering',
  description: 'Waterfilter in nieuwbouw inbouwen? Leer wanneer installeren het goedkoopst is en wat je de aannemer moet vragen.',
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  url: 'https://waterfilterplatform.nl/waterfilter/nieuwbouw',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterNieuwbouwPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          articleSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Nieuwbouw', item: 'https://waterfilterplatform.nl/waterfilter/nieuwbouw' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>Nieuwbouw</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterfilter nieuwbouwwoning: de beste keuze bij oplevering
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Een nieuwbouwwoning is de ideale gelegenheid om een waterfilter of osmosesysteem te integreren. De muren zijn nog open, de aannemer werkt nog aan het leidingwerk en een kokend water kraan of osmosefilter is aanzienlijk goedkoper in te bouwen dan achteraf. In dit artikel lees je hoe je dit slim aanpakt.
        </p>

        <QuickAnswer answer="In nieuwbouw is een waterfilter installeren 40–60% goedkoper dan achteraf. Vraag de aannemer om leidingvoorbereiding onder het aanrecht, een stopcontact en afvoerpunt. De beste keuze: een 4-in-1 osmose kokend water kraan tijdens de keukenmontage, voor de laagste totaalprijs en beste integratie." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom nieuwbouw het ideale moment is
        </h2>
        <p className="text-gray-700 mb-4">
          Bij nieuwbouw liggen de muren open, de loodgieter werkt nog aan het systeem en de keuken wordt nieuw geplaatst. Dit creëert een unieke kans om een waterfilter of osmosesysteem te integreren zonder achteraf te hoeven slopen, stucken en schilderen. Drie structurele voordelen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Open muren:</strong> Leidingen kunnen worden meegelegd zonder wegbreekwerk. De loodgieter legt een extra afvoer- en toevoerleiding tegelijk met het bestaande leidingwerk.</li>
          <li><strong>Architectuurplanning:</strong> Je kunt de positie van de filter, het stopcontact en de tapkraan optimaal plannen — voor keukenlayout, kastruimte en esthetiek.</li>
          <li><strong>Geen reparatiekosten:</strong> Na oplevering zijn er geen tegels, stucwerk of schilderwerk om te herstellen. Dit scheelt €300–800 aan bijkomende kosten.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Lees ook onze pagina over <Link href="/waterfilter/soorten" className="text-[#005F8A] underline">alle soorten waterfilters</Link> voor een overzicht van beschikbare systemen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          3 momenten om te installeren
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border-l-4 border-[#005F8A] pl-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Tijdens de bouw (goedkoopst)</h3>
            <p className="text-gray-700 text-sm mb-2">De aannemer legt leidingen en stopcontacten mee in het bestaande loodgieterswerk. Kosten voor de filtereenheid plus installatie: €400–800 voor osmose, €900–1.600 voor 4-in-1 kokend water kraan systeem. Bespaart 40–60% ten opzichte van achteraf.</p>
            <p className="text-xs text-gray-500">Ideaal wanneer: je al weet welk systeem je wilt vóór de keukenplaatsing</p>
          </div>

          <div className="border-l-4 border-[#005F8A] pl-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Bij oplevering (nog steeds voordelig)</h3>
            <p className="text-gray-700 text-sm mb-2">Op het moment van sleuteloverdracht zijn de wanden gesloten maar de keuken soms nog niet volledig ingericht. Dit is nog steeds een goed moment: leidingen onder het aanrecht zijn bereikbaar, de installateur hoeft geen wanden open te breken. Kosten: €500–900 voor osmose.</p>
            <p className="text-xs text-gray-500">Ideaal wanneer: je de keuken zelf plaatst of nog aanpassingen doet</p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Na intrek (duurste optie)</h3>
            <p className="text-gray-700 text-sm mb-2">Keuken is ingericht, leidingen lopen achter kasten en tegels. Installateur moet leidingen trekken via bestaande ruimtes, mogelijk via plinten of via een gat in de achterwand van het aanrechtblad. Wegbreekwerk, stucwerk en schilderen verhogen de kosten naar €600–1.200+.</p>
            <p className="text-xs text-gray-500">Ideaal wanneer: je later de wens ontwikkelt of first moves in maakt</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Opties specifiek voor nieuwbouw
        </h2>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">1. Pre-piped osmosefilter onder het aanrecht</h3>
        <p className="text-gray-700 mb-3">
          De aannemer legt een extra koud-wateraftap en afvoerpunt onder het aanrecht. Na oplevering plaatst de installateur het osmosesysteem in de voorbereidde ruimte. Geen wegbreekwerk, geen stofoverlast. Bekijk ons aanbod aan <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose systemen</Link> voor de technische specificaties.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Verwijdert 95%+ van kalk, nitraat, PFAS, lood en bacteriën</li>
          <li>Stille werking — installatie volledig verborgen</li>
          <li>Extra tapkraan op aanrechtblad voor gefilterd water</li>
          <li>Onderhoud: filters jaarlijks, membraan elke 2–3 jaar</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">2. 4-in-1 kokend water kraan (smart home integratie)</h3>
        <p className="text-gray-700 mb-3">
          De meest elegante oplossing voor nieuwbouw: één kraan vervangt de traditionele mengkraan, waterkoker en aparte drinkwaterkraan. De PureAqua 4-in-1 levert kokend water (100°C on demand), koud gefilterd water, warm water en koud leidingwater via één tapkraan.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Osmosefiltratie ingebouwd — geen aparte filter unit nodig</li>
          <li>Boiler (2,4–4L) onder het aanrecht, bijna onhoorbaar</li>
          <li>Bespaar ruimte op het aanrecht (geen waterkoker meer)</li>
          <li>Smart home integratie via app voor temperatuur en filterstand</li>
          <li>Ideaal moment: kraan inbouwen bij keukenmontage door aannemer</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">3. Huis-breed waterontharder (voor harde waterregio&rsquo;s)</h3>
        <p className="text-gray-700 mb-3">
          In regio&rsquo;s met hard water (boven 16 °dH) beschermt een waterontharder aan de hoofdleiding alle apparaten: wasmachine, vaatwasser, cv-ketel en douchekop. Combineer dit met een osmosefilter voor drinkwater (een ontharder is geen drinkwaterfilter).
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Beschermt alle huishoudelijke apparaten tegen kalkafzetting</li>
          <li>Installatie aan de hoofdwaterleiding — eenvoudig bij nieuwbouw</li>
          <li>Zout toevoegen elke 4–8 weken (afhankelijk van waterverbruik)</li>
          <li>Combineer altijd met osmosefilter voor drinkwater</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: 5 scenario&rsquo;s in nieuwbouw
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Scenario</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Timing</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Overlast</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Osmose — tijdens bouw</td>
                <td className="border border-gray-300 px-3 py-2">Bouwfase</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">€400–800</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Geen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">4-in-1 kraan — bij keuken</td>
                <td className="border border-gray-300 px-3 py-2">Keukenmontage</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">€900–1.600</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Geen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Osmose — bij oplevering</td>
                <td className="border border-gray-300 px-3 py-2">Sleutelmoment</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">€500–900</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Minimaal</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Osmose — na intrek</td>
                <td className="border border-gray-300 px-3 py-2">Na verhuizing</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">€600–1.200</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Matig</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Waterontharder + osmose</td>
                <td className="border border-gray-300 px-3 py-2">Tijdens bouw</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">€1.600–3.200</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Geen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Checklist: wat te vragen aan de aannemer
        </h2>
        <p className="text-gray-700 mb-4">
          Gebruik deze checklist bij je gesprek met de aannemer of architect. Laat de punten die je wilt opnemen in de bouwtekening of het meerwerkformulier zetten:
        </p>
        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm text-gray-800">
            <li className="flex gap-2"><span className="text-[#005F8A] font-bold mt-0.5">&#9745;</span> <span>Ruimte onder aanrecht voor osmosesysteem: minimaal 40 cm breed × 40 cm diep × 50 cm hoog</span></li>
            <li className="flex gap-2"><span className="text-[#005F8A] font-bold mt-0.5">&#9745;</span> <span>Koud-wateraftapkraan (1/4&quot; of 3/8&quot; aansluiting) met afsluiter onder het aanrecht</span></li>
            <li className="flex gap-2"><span className="text-[#005F8A] font-bold mt-0.5">&#9745;</span> <span>Afvoerpunt voor concentraatwater naast het sifon (geen afzonderlijk rioolaansluiting nodig)</span></li>
            <li className="flex gap-2"><span className="text-[#005F8A] font-bold mt-0.5">&#9745;</span> <span>230V geaard stopcontact onder het aanrecht (voor booster en/of boiler)</span></li>
            <li className="flex gap-2"><span className="text-[#005F8A] font-bold mt-0.5">&#9745;</span> <span>Gat (35 mm) in aanrechtblad voor aparte tapkraan (of meeleveren bij keukenmontage)</span></li>
            <li className="flex gap-2"><span className="text-[#005F8A] font-bold mt-0.5">&#9745;</span> <span>Optioneel: voorbereid leidingwerk voor waterontharder bij de hoofdkraan (meterkast/technische ruimte)</span></li>
            <li className="flex gap-2"><span className="text-[#005F8A] font-bold mt-0.5">&#9745;</span> <span>WiFi-ontvangst bij aanrecht (CAT6-kabel of bevestig range extender positie)</span></li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Loodgietersspecificaties voor de aannemer
        </h2>
        <p className="text-gray-700 mb-4">
          Voeg de volgende specificaties toe aan het loodgietersbeschrijving (meerwerkformulier of bestek):
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 font-mono text-xs text-gray-700 space-y-1">
          <p>MEERWERK WATERFILTERVOORBEREIDING:</p>
          <p>- Koud-water aftappunt 3/8&quot; BSP onder aanrecht, afsluitbaar, met dopje</p>
          <p>- Afvoer T-stuk op sifon voor concentraatwater (max. 1,0 bar)</p>
          <p>- 1× geaard 230V stopcontact onder aanrecht (groep 4 of eigen groep)</p>
          <p>- Vrije ruimte in onderkast: 400×400×500mm (B×D×H)</p>
          <p>- Kraangat aanrechtblad: 35mm, positie: rechts naast mengkraan</p>
          <p>Opmerking: systeem plaatsing na oplevering door gespecialiseerde installateur</p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Typische kostenvergelijking: tijdens vs. na bouw
        </h2>
        <p className="text-gray-700 mb-4">
          Een osmosefilter installeren achteraf in een bewoond huis kost meer door bijkomende werkzaamheden:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Kostenpost</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Tijdens bouw</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Na intrek</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Osmose unit (hardware)</td>
                <td className="border border-gray-300 px-3 py-2">€300–500</td>
                <td className="border border-gray-300 px-3 py-2">€300–500</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Loodgieterswerk</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">€50–100</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">€200–400</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Elektra (stopcontact)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">€0 (meegenomen)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">€80–150</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Herstelwerkzaamheden</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">€0</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">€100–200</td>
              </tr>
              <tr className="font-semibold">
                <td className="border border-gray-300 px-3 py-2">Totaal</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">€350–600</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">€680–1.250</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Besparing bij installatie tijdens bouw: <strong>€330–650 gemiddeld</strong> (40–55%).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Veelgestelde vragen
        </h2>
        <div className="space-y-3 mb-8">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <div className="bg-[#E0F2FE] rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Plan je waterfilter mee met de bouw</h3>
          <p className="text-gray-700 mb-4">
            De PureAqua 4-in-1 osmose + kokend water kraan is de perfecte keuze voor nieuwbouw: één systeem voor gefilterd drinkwater en kokend water op aanvraag, volledig te integreren bij de keukenmontage.
          </p>
          <Link href="/omgekeerde-osmose/kopen" className="inline-block bg-[#005F8A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#003F5C] transition-colors">
            Bekijk PureAqua systemen →
          </Link>
        </div>

        <p className="text-gray-600 text-sm">
          Lees ook: <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilters vergelijken</Link>, <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link> en <Link href="/drinkwater" className="text-[#005F8A] underline">drinkwaterkwaliteit Nederland</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/waterfilter/keuken-installatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter keuken installatie</h3>
              <p className="text-sm text-gray-600">Tips voor installatie onder aanrecht bij een nieuwe keuken.</p>
            </Link>
            <Link href="/waterfilter/lood" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Lood in drinkwater</h3>
              <p className="text-sm text-gray-600">Risico's en filteroplossingen voor lood in kraanwater.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose uitgelegd</h3>
              <p className="text-sm text-gray-600">Hoe werkt een RO-membraan en wat filtert het?</p>
            </Link>
            <Link href="/beste-waterfilter/appartement" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Beste waterfilter voor een appartement</h3>
              <p className="text-sm text-gray-600">Welk systeem past in een kleinere ruimte?</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
