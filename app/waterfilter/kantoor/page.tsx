import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter voor kantoor: gezond drinkwater op de werkvloer',
  description: 'Gefilterd water op kantoor: vergelijk oplossingen voor 1–10, 10–50 en 50+ medewerkers. ROI-berekening, Arbowet-uitleg en vergelijking waterkoeler vs osmose kraan.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/kantoor' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Zijn werkgevers verplicht drinkwater te verstrekken op kantoor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Op grond van de Arbowet (artikel 3) en het Arbeidsomstandighedenbesluit (artikel 6.1) zijn werkgevers verplicht om werknemers gratis drinkwater ter beschikking te stellen. Het water moet van voldoende kwaliteit zijn en vrij beschikbaar zijn. Er is geen wettelijke verplichting om gefilterd water te verstrekken, maar een osmose- of filtersysteem is een kwalitatieve en kostenefficiënte manier om aan deze plicht te voldoen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een waterkoeler en een osmose kraan op kantoor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een waterkoeler (flessenkoeler of aangesloten koeler) gebruikt een opslagtank die regelmatig gereinigd moet worden om bacteriegroei (Legionella) te voorkomen. Een osmose kraan filtert water direct op het moment van tappen — geen opslagtank, altijd vers gefilterd water. Osmose verwijdert kalk, nitraat, PFAS en zware metalen (95%+); waterkoelers filteren alleen als ze een ingebouwde koolstoffilter hebben. Op de lange termijn is een osmosesysteem goedkoper dan doorlopende flessenlevering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel kost een waterfilter voor een kantoor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Counter-top osmose (1–10 personen): €200–400 aanschaf + €60–100/jaar onderhoud. Onder-aanrecht osmose (10–30 personen): €400–800 inclusief installatie + €100–150/jaar. 4-in-1 osmose + kokend water kraan: €800–1.500 inclusief installatie. Centrale waterfiltratie (50+ personen): €2.000–6.000 inclusief installatie + servicecontract. Waterkoeler (huur): €30–80/maand inclusief onderhoud. Losse flessenwater voor 50 medewerkers: €3/persoon/dag × 220 werkdagen = €33.000/jaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke waterfilter is het meest geschikt voor een klein kantoor van 5 personen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een kantoor van 1–10 personen is een counter-top osmosefilter (€200–400) of een onder-aanrecht osmose met tapkraan (€400–700) de meest praktische en kostenefficiënte keuze. Geen waterkoelerfles te vervangen, geen service-abonnement, osmosekwaliteit water direct uit de kraan. Waterverbruik van 10 personen (0,5L pp/uur × 8 uur = 40L/dag) is eenvoudig te leveren met een standaard osmosesysteem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe bereken ik de ROI van een waterfilter voor mijn kantoor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voorbeeld: 50 medewerkers, plastic flessenwater €3/pp/dag × 50 × 220 werkdagen = €33.000/jaar. Osmosesysteem inclusief installatie: €2.000–3.000. Jaarlijks onderhoud: €200–400. Terugverdientijd: 1–2 maanden. Bijkomende besparingen: minder plastic afval (±11.000 flessen/jaar), tijdsbesparing bestelling/levering, werknemer-tevredenheidsvoordeel. Zelfs bij 10 medewerkers met €1/pp/dag aan flessenwater is een osmose kraan binnen 4–6 maanden terugverdiend.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet een kantoorwaterfilter onderhouden worden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Jaarlijks onderhoud is verplicht voor voedselveiligheid en optimale werking. Voor een osmosesysteem: voorfilters (sediment, koolstof) elke 6–12 maanden vervangen, membraan elke 2–3 jaar. Voor waterkoelers: tank desinfecteren elke 6 maanden, filters vervangen per leveranciersinstructie. Verantwoordelijkheid ligt bij de werkgever; servicecontracten zijn beschikbaar bij de meeste leveranciers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een kokend water kraan installeren op een kantoor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Een 4-in-1 kokend water kraan is een uitstekende kantooroplossing: één aansluiting levert kokend water (voor thee, koffie), gefilterd koud water en gewoon koud/warm water. Vervangt de waterkoeler, het waterreservoir én de waterkoker. Ideaal voor kantoren tot 30 personen aan één watertappunt. Grotere kantoren kunnen meerdere units plaatsen bij verschillende koffiehoeken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil in bacterierisico tussen waterkoeler en osmose op kantoor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Waterkoelers met opslagtank vormen een Legionella-risico als ze niet regelmatig gereinigd worden (RIVM-richtlijn: elke 6 maanden desinfecteren bij bedrijfsmatig gebruik). Flessenkoelers zijn hygienisch bij regelmatige fleswissel maar de dispensertop kan worden besmet door handen of lucht. Een osmosesysteem zonder opslagtank (tankloze versie of directe tap) elimineert het bacterieopslagrisico volledig — water wordt direct door het membraan geperst op het moment van tappen.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter voor kantoor: gezond drinkwater op de werkvloer',
  description: 'Gefilterd water op kantoor: vergelijk oplossingen voor 1–10, 10–50 en 50+ medewerkers. ROI-berekening en Arbowet uitleg.',
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  url: 'https://waterfilterplatform.nl/waterfilter/kantoor',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterKantoorPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Kantoor', item: 'https://waterfilterplatform.nl/waterfilter/kantoor' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterfilter" className="hover:underline">Waterfilter</a> &rsaquo;{' '}
          <span>Kantoor</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterfilter voor kantoor: gezond drinkwater op de werkvloer
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Schoon drinkwater op kantoor is niet alleen een wettelijke verplichting (Arbowet) — het is ook een bewezen investering in medewerkerstevredenheid, productiviteit en duurzaamheid. In dit artikel vergelijken we alle opties van klein kantoor tot groot bedrijf, inclusief een ROI-berekening.
        </p>

        <QuickAnswer answer="Werkgevers zijn verplicht gratis drinkwater te verstrekken (Arbowet art. 3). Een osmose kraan vervangt kostbare flessenwater: 50 medewerkers besparen €33.000/jaar op flessenwater, terugverdientijd systeem 1–2 maanden. Kies de oplossing op basis van kantoorgrootte: counter-top osmose (1–10 personen), onder-aanrecht osmose + tapkraan (10–50) of centrale filtratie (50+)." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom kantoren gefilterd water nodig hebben
        </h2>
        <p className="text-gray-700 mb-4">
          Leidingwater in kantoorgebouwen doorloopt vaak oude leidingen, opslagtanks en lange trajectorien voor het de kraan bereikt. Drie concrete redenen om een waterfilter te installeren:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Medewerkerswelzijn:</strong> Hydratatie verbetert concentratie en productiviteit. Studies tonen een 14% productiviteitsdaling bij milde uitdroging. Drempelvrij toegankelijk, smakelijk water verlaagt de drempel om voldoende te drinken.</li>
          <li><strong>Plasticreductie:</strong> Een kantoor van 50 medewerkers gebruikt gemiddeld 11.000 plastic flessen per jaar. Een waterfilter elimineert dit volledig.</li>
          <li><strong>Kostenreductie:</strong> Flessenwater kost €2–4 per persoon per dag. Een osmosesysteem verlaagt de kosten naar &lt;€0,01 per liter.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Lees ook onze pagina over <a href="/drinkwater" className="text-[#005F8A] underline">drinkwaterkwaliteit in Nederland</a> voor de achtergrond van wat er in kraanwater zit.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Arbowet: wat is de wettelijke plicht?
        </h2>
        <p className="text-gray-700 mb-4">
          De Arbowet (artikel 3, lid 1) verplicht werkgevers een gezonde werkomgeving te waarborgen. Het Arbeidsomstandighedenbesluit (artikel 6.1) specificeert:
        </p>
        <div className="bg-gray-50 border-l-4 border-[#005F8A] pl-4 py-3 mb-4 text-gray-700 text-sm">
          <p className="italic">&ldquo;In een arbeidsplaats moet voor de werknemers drinkwater beschikbaar zijn. Het drinkwater moet gemakkelijk bereikbaar en voldoende aanwezig zijn.&rdquo;</p>
          <p className="mt-1 text-xs text-gray-500">— Arbobesluit artikel 6.1</p>
        </div>
        <p className="text-gray-700 mb-6">
          Er is geen wettelijke verplichting om gefilterd water te bieden, maar een osmosesysteem is een kwalitatieve manier om aan de verplichting te voldoen — en biedt betere kwaliteit dan standaard leidingwater uit een oud kantoorgebouw.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Oplossingen per kantoorgrootte
        </h2>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Kleine kantoren: 1–10 personen</h3>
        <p className="text-gray-700 mb-3">
          Voor kleine kantoren, thuiswerkplekken en ZZP&rsquo;ers met personeel zijn twee opties het meest praktisch:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li><strong>Counter-top osmose (€200–400):</strong> Osmosekwaliteit water, geen installatie. Staat op het aanrecht in de keukenhoek, koppelt aan de bestaande kraan.</li>
          <li><strong>Filterkruik (€25–60):</strong> Budget-optie. Voldoende voor 2–4 personen. Verwijdert chloor en verbetert smaak, maar geen osmosekwaliteit.</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Waterverbruik: 10 personen × 0,5L/uur × 8 uur = 40L/dag — eenvoudig te leveren met een standaard osmosesysteem (produceert 100–200L/dag).
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Middelgrote kantoren: 10–50 personen</h3>
        <p className="text-gray-700 mb-3">
          Bij 10–50 medewerkers is een vaste installatie met onder-aanrecht osmose + tapkraan de beste keuze, eventueel gecombineerd met een 4-in-1 kokend water kraan:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li><strong>Onder-aanrecht osmose + tapkraan:</strong> €400–800 installatie. Levert 150–300L/dag, voldoende voor 30 personen.</li>
          <li><strong>4-in-1 kokend water kraan:</strong> €800–1.500. Vervangt waterkoeler en waterkoker. Levert kokend, koud gefilterd en normaal water via één elegant punt.</li>
          <li><strong>Aansluitpunt waterkoeler (aangevuld met RO-filter):</strong> Bestaande waterkoeler vervangen door één met ingebouwde osmosemembraan eliminateert flessenlogistiek.</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Grote kantoren: 50+ personen</h3>
        <p className="text-gray-700 mb-3">
          Grote kantoren hebben baat bij meerdere tappunten of een centrale waterfiltratie op de hoofdleiding:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li><strong>Centrale waterfiltratie:</strong> Filtert alle water in het gebouw (keuken, vergaderzalen, badkamers). Kosten: €2.000–6.000 inclusief installatie.</li>
          <li><strong>Meerdere osmose tappunten:</strong> Een under-sink unit per keukenhoek/verdieping. Kosten: €400–800 per punt, inclusief installatie.</li>
          <li><strong>Waterkoeler met ingebouwde RO:</strong> Meest gebruikelijk in grote kantoorpanden. Huurmodel beschikbaar: €50–100/maand inclusief onderhoud.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: 5 oplossingen voor kantoor
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Oplossing</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Personen</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Prijs</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Onderhoud</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Flessen bespaard</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Installatie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Filterkruik</td>
                <td className="border border-gray-300 px-3 py-2">1–4</td>
                <td className="border border-gray-300 px-3 py-2">€25–60</td>
                <td className="border border-gray-300 px-3 py-2">€40–60/jr</td>
                <td className="border border-gray-300 px-3 py-2">~200/jr</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Geen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Counter-top osmose</td>
                <td className="border border-gray-300 px-3 py-2">1–10</td>
                <td className="border border-gray-300 px-3 py-2">€200–400</td>
                <td className="border border-gray-300 px-3 py-2">€80–100/jr</td>
                <td className="border border-gray-300 px-3 py-2">~2.000/jr</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Slangkoppeling</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Onder-aanrecht osmose</td>
                <td className="border border-gray-300 px-3 py-2">10–50</td>
                <td className="border border-gray-300 px-3 py-2">€400–800</td>
                <td className="border border-gray-300 px-3 py-2">€100–150/jr</td>
                <td className="border border-gray-300 px-3 py-2">~7.000/jr</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Loodgieter</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">4-in-1 kokend water kraan</td>
                <td className="border border-gray-300 px-3 py-2">10–30</td>
                <td className="border border-gray-300 px-3 py-2">€800–1.500</td>
                <td className="border border-gray-300 px-3 py-2">€120–200/jr</td>
                <td className="border border-gray-300 px-3 py-2">~5.000/jr</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Loodgieter</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Centrale filtratie</td>
                <td className="border border-gray-300 px-3 py-2">50+</td>
                <td className="border border-gray-300 px-3 py-2">€2.000–6.000</td>
                <td className="border border-gray-300 px-3 py-2">Service contract</td>
                <td className="border border-gray-300 px-3 py-2">~11.000+/jr</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Specialist</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterkoeler vs. osmose kraan: de echte vergelijking
        </h2>
        <p className="text-gray-700 mb-4">
          Waterkoelers zijn jarenlang de standaard geweest op kantoor. Maar osmosekranen pakken de nadelen aan:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Aspect</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Waterkoeler (fles)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Osmose kraan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Kosten/liter</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">€0,50–1,50</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">&lt;€0,01</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Bacterierisico</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Hoog (tank/lucht)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Laag (vers gefilterd)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">PFAS / nitraat</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Beperkt</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">95%+ verwijderd</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Plastic afval</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Hoog</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Geen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Logistiek</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Flessen bestellen/wisselen</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Geen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Onderhoud</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Desinfectie 6-maandelijks</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Filters jaarlijks</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          ROI-berekening: waterfilter op kantoor
        </h2>
        <p className="text-gray-700 mb-4">
          Een concreet rekenvoorbeeld voor 50 medewerkers die momenteel flessenwater drinken:
        </p>
        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
          <h3 className="font-semibold text-[#003F5C] mb-3 text-sm">Huidige situatie: flessenwater</h3>
          <ul className="text-sm text-gray-700 space-y-1 mb-4">
            <li>50 medewerkers × €3/dag × 220 werkdagen = <strong className="text-red-700">€33.000/jaar</strong></li>
            <li>Plastic flessen: ~11.000 stuks per jaar</li>
            <li>Logistiekverlies (bestellingen, opslag, fleswissel): ~2 uur/week</li>
          </ul>
          <h3 className="font-semibold text-[#003F5C] mb-3 text-sm">Na installatie: osmosesysteem</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Systeem aanschaf + installatie: €2.500 (eenmalig)</li>
            <li>Jaarlijks onderhoud: €250</li>
            <li>Kosten per liter gefilterd water: ~€0,005</li>
            <li>Jaarlijkse besparing: <strong className="text-green-700">€32.750</strong></li>
            <li>Terugverdientijd: <strong className="text-green-700">&lt;1 maand</strong></li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Onderhoud en verantwoordelijkheid
        </h2>
        <p className="text-gray-700 mb-4">
          De werkgever is verantwoordelijk voor het onderhoud van het waterfiltersysteem. Praktisch:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Osmosefilters:</strong> Voorfilters (sediment, koolstof) elke 6–12 maanden. Membraan elke 2–3 jaar. Documenteer elke onderhoudsbeurt.</li>
          <li><strong>Waterkoelers:</strong> Desinfectie elke 6 maanden (RIVM richtlijn). Filters per leveranciersadvies. Veel leveranciers bieden een servicecontract.</li>
          <li><strong>Servicecontracten:</strong> Meeste leveranciers bieden jaarlijkse serviceovereenkomsten aan (€100–300/jaar voor osmosesystemen). Dit dekt vervanging voorfilters en inspectie membraan.</li>
          <li><strong>Documentatie:</strong> Houd een logboek bij voor het geval een arbeidsinspectie de waterkwaliteit controleert.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Bekijk onze pagina <a href="/waterfilter/onderhoud" className="text-[#005F8A] underline">waterfilter onderhoud</a> voor gedetailleerde onderhoudsschema&rsquo;s.
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
          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Gezond water voor jouw team — direct geregeld</h3>
          <p className="text-gray-700 mb-4">
            De PureAqua 4-in-1 osmose + kokend water kraan is de complete kantooroplossing: osmosekwaliteit drinkwater, direct kokend water voor thee en koffie, nul plastic flessen. Terugverdientijd bij 10+ medewerkers: &lt;6 maanden.
          </p>
          <a href="/omgekeerde-osmose/kopen" className="inline-block bg-[#005F8A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#003F5C] transition-colors">
            Bekijk kantooroplossingen →
          </a>
        </div>

        <p className="text-gray-600 text-sm">
          Lees ook: <a href="/waterfilter" className="text-[#005F8A] underline">waterfilters vergelijken</a>, <a href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</a> en <a href="/waterfilter/soorten" className="text-[#005F8A] underline">alle waterfiltersoorten</a>.
        </p>
      </main>
    </>
  );
}
