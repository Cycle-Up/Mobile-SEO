import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Drinkwaterfontein kopen: beste waterfonteinen voor kantoor en thuis',
  description: 'Een drinkwaterfontein geeft altijd gekoeld, gefilterd en soms bruisend water. Vergelijking van waterfonteinen voor kantoor, thuis en openbaar gebruik in 2026.',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwaterfontein' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een drinkwaterfontein en een waterkoeler?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een drinkwaterfontein en een waterkoeler worden in Nederland door elkaar gebruikt. Technisch gezien is een waterkoeler een apparaat dat water koelt via een reservoir of een compressor. Een drinkwaterfontein is een breder begrip: het omvat alle apparaten die gekoeld, gefilterd of andersoortig behandeld water leveren via een tapkraan of drinkpunt. Mains-fed modellen (aangesloten op het leidingwater) worden vaker drinkwaterfontein genoemd; flessenmodellen worden vaker waterkoeler of watercooler genoemd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke drinkwaterfontein is het beste voor kantoor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor kantoor is een mains-fed drinkwaterfontein doorgaans de beste keuze bij een wateraansluiting in de buurt. Deze heeft geen flessenwissels nodig, biedt onbeperkt water en is op lange termijn goedkoper. Bij kantoren zonder wateraansluiting is een flessenfontein in huurmodel een praktische oplossing. Voor hoge waterkwaliteitseisen is een POU osmose-fontein de beste keuze: het verwijdert kalk, PFAS, nitraten en andere verontreinigingen via een RO-membraan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe werkt een mains-fed drinkwaterfontein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een mains-fed drinkwaterfontein wordt direct aangesloten op het leidingwater via een waterslang en een kogelkraan. Het water gaat door een intern filtersysteem (koolstoffilter en/of UV-lamp) en vervolgens naar een gekoeld reservoir. Bij sommige modellen is er ook een warmwateroptie via een boiler. Het filter wordt doorgaans 1-2 keer per jaar vervangen. Geen flessenwissels nodig, altijd water beschikbaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is huren of kopen van een drinkwaterfontein goedkoper?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Huren is op korte termijn goedkoper (geen investering), maar kopen is bijna altijd voordeliger op de lange termijn. Bij een gekochte mains-fed fontein bedragen de maandelijkse kosten circa €15-30 (filter + stroom). Bij een huurcontract betaal je €40-90 per maand. Het break-even punt ligt doorgaans bij 12-24 maanden. Flessenfonteinen zijn ook gekocht duurder in gebruik door de flessenkosten (€8-15 per fles).',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe hygiënisch is een drinkwaterfontein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een drinkwaterfontein is hygiënisch mits goed onderhouden. Bij mains-fed modellen moet het mondstuk wekelijks worden gereinigd, het reservoir en de leidingen minimaal 2 keer per jaar worden gedesinfecteerd, en de UV-lamp jaarlijks worden vervangen. Bij flessenfonteinen is maandelijkse reiniging van het mondstuk en het reservoir aanbevolen. Slecht onderhouden fonteinen kunnen bacteriegroei (Legionella, Pseudomonas) vertonen in stilstaand water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een drinkwaterfontein aansluiten op mijn leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, mains-fed en POU-fonteinen worden direct op het leidingwater aangesloten. Je hebt een kogelkraan (afsluitkraan) nodig onder de gootsteen of nabij de aansluiting, en een dunne slang (3/8 of 1/4 inch) die naar het apparaat loopt. De installatie duurt doorgaans 30-60 minuten. Voor onderbouw POU-modellen is een boorgat in het aanrecht nodig voor het tapkraantje. Raadpleeg bij twijfel een installateur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een drinkwaterfontein PFAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alleen drinkwaterfonteinen met een RO-membraan (omgekeerde osmose) verwijderen PFAS betrouwbaar, met een verwijderingspercentage van 90-99%. Standaard koolstoffilters in mains-fed fonteinen verwijderen PFAS slechts gedeeltelijk (30-70%, afhankelijk van filtertype en contacttijd). Flessenfonteinen filteren het water niet zelf; de kwaliteit hangt af van de leverancier. Voor maximale PFAS-verwijdering kies je een POU osmose-fontein.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een drinkwaterfontein per maand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De maandelijkse kosten hangen af van het type: flessenfontein €25-80 (flessen + evt. huur), mains-fed koop €15-30 (filter + stroom), POU osmose-fontein koop €10-20 (filterset + stroom). Bij huurmodellen reken je op €40-200 per maand afhankelijk van leverancier en inclusief diensten. De aanschafkosten varieren van €0 (huur) tot €150-1.200 (koop) afhankelijk van type en kwaliteit.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Drinkwaterfontein kopen: beste waterfonteinen voor kantoor en thuis',
  description: 'Een drinkwaterfontein geeft altijd gekoeld, gefilterd en soms bruisend water. Vergelijking van waterfonteinen voor kantoor, thuis en openbaar gebruik in 2026.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/drinkwaterfontein',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function DrinkwaterfonteinPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'ItemList',
            name: 'Drinkwaterfontein',
            url: 'https://waterfilterplatform.nl/drinkwaterfontein',
            numberOfItems: 11,
            itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Contactloze drinkwaterfontein: sensor, hygiene en gebruik', url: 'https://waterfilterplatform.nl/drinkwaterfontein/contactloos' },
            { '@type': 'ListItem', position: 2, name: 'Drinkwaterfontein voor horeca: tafelwater en personeelswater', url: 'https://waterfilterplatform.nl/drinkwaterfontein/horeca' },
            { '@type': 'ListItem', position: 3, name: 'Drinkwaterfontein huren: kosten, aanbieders en alternatieven 2026', url: 'https://waterfilterplatform.nl/drinkwaterfontein/huren' },
            { '@type': 'ListItem', position: 4, name: 'Drinkwaterfontein voor kantoor: kosten, types en regelgeving', url: 'https://waterfilterplatform.nl/drinkwaterfontein/kantoor' },
            { '@type': 'ListItem', position: 5, name: 'Gekoelde drinkwaterfontein: koeltechniek en verbruik', url: 'https://waterfilterplatform.nl/drinkwaterfontein/koeling' },
            { '@type': 'ListItem', position: 6, name: 'Drinkwaterfontein kopen: vergelijking en koopgids 2026', url: 'https://waterfilterplatform.nl/drinkwaterfontein/kopen' },
            { '@type': 'ListItem', position: 7, name: 'Leidinggebonden vs flessenfontein: wat is beter?', url: 'https://waterfilterplatform.nl/drinkwaterfontein/leidinggebonden-vs-fles' },
            { '@type': 'ListItem', position: 8, name: 'Drinkwaterfontein met bruiswater: hoe werkt het?', url: 'https://waterfilterplatform.nl/drinkwaterfontein/met-bruiswater' },
            { '@type': 'ListItem', position: 9, name: 'Drinkwaterfontein onderhoud: reinigen, filters vervangen en levensduur 2026', url: 'https://waterfilterplatform.nl/drinkwaterfontein/onderhoud' },
            { '@type': 'ListItem', position: 10, name: 'Drinkwaterfontein soorten: types, koeling en bruiswater vergeleken', url: 'https://waterfilterplatform.nl/drinkwaterfontein/soorten' },
            { '@type': 'ListItem', position: 11, name: 'Drinkwaterfontein voor thuis: gekoeld gefilterd water altijd klaar', url: 'https://waterfilterplatform.nl/drinkwaterfontein/thuis' },
            ],
          },
        ]}
      />
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Drinkwaterfontein', item: 'https://waterfilterplatform.nl/drinkwaterfontein' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <span>Drinkwaterfontein</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Drinkwaterfontein kopen: beste waterfonteinen voor kantoor en thuis
        </h1>

        <QuickAnswer answer="Een drinkwaterfontein levert altijd gekoeld en gefilterd water zonder plastic flessen. Er zijn vier hoofdtypen: flessenfontein, mains-fed (leidingwater), POU tafelmodel en osmose-fontein. Prijs varieert van €150 tot €1.200 bij aankoop. Mains-fed en POU zijn goedkoopst op lange termijn en meest geschikt voor dagelijks gebruik." />

        <CTABanner context="osmose" />

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Wat is een drinkwaterfontein?
          </h2>
          <p className="text-gray-700 mb-4">
            Een drinkwaterfontein is een apparaat dat gekoeld, gefilterd en soms ook warm of bruisend water levert via een of meerdere tapkranen. In kantoren, wachtkamers, sporthallen en ook steeds vaker thuis zijn drinkwaterfonteinen een duurzaam alternatief voor flessenwater en plastic wegwerpbekers. Ze verminderen plastic afval, verbeteren de smaak van leidingwater en moedigen mensen aan meer te drinken.
          </p>
          <p className="text-gray-700">
            In 2026 zijn er vier hoofdtypen op de Nederlandse markt: de klassieke flessenfontein, de mains-fed fontein (direct op leidingwater), het POU tafelmodel en de osmose-gebaseerde fontein. Elk type heeft zijn eigen voor- en nadelen op het gebied van kosten, installatie, filterkwaliteit en capaciteit.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De 4 typen drinkwaterfonteinen uitgelegd
        </h2>

        <div className="space-y-5 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Flessenfontein</h3>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              De flessenfontein werkt met een 19 liter waterfles die omgekeerd bovenop het apparaat wordt geplaatst. Het water stroomt via zwaartekracht of een kleine pomp naar het gekoelde reservoir. Geen wateraansluiting nodig, waardoor dit type overal te plaatsen is. Beschikbaar in huur- of koopmodel. Populair op kantoren, bij evenementen en in ruimtes zonder waterleiding in de buurt.
            </p>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>Geen wateraansluiting nodig</li>
              <li>Flexibel te verplaatsen</li>
              <li>Maandelijkse flessenkosten €8-15 per fles</li>
              <li>Fles wisselen vereist inspanning (19L = 19kg)</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Mains-fed drinkwaterfontein</h3>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              Een mains-fed fontein is direct aangesloten op het leidingwater. Het water wordt intern gefilterd (koolstof en/of UV), gekoeld en getapt. Bij veel modellen is ook een warmwaterfunctie beschikbaar. Geen flessenwissels nodig; het water is altijd beschikbaar. Vereist een nabijgelegen wateraansluiting en een kleine installatie. Populairste type voor kantoren met 5 of meer medewerkers.
            </p>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>Onbeperkte watercapaciteit</li>
              <li>Koud en warm water optioneel</li>
              <li>Intern koolstoffilter en UV mogelijk</li>
              <li>Filterwissel 1-2x per jaar vereist</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">POU tafelmodel (point-of-use)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              Een POU (point-of-use) tafelmodel staat op het aanrecht of bureau en sluit aan op het leidingwater via een dunne slang. Klein formaat, eenvoudige installatie en geschikt voor keuken of kleinere kantoorruimte. Filtert het water op het punt van gebruik, waardoor de waterkwaliteit optimaal is. Prijs ligt tussen een standaard mains-fed fontein en een volledige RO-installatie.
            </p>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>Compact, past op aanrecht</li>
              <li>Aansluiting op leidingwater</li>
              <li>Koolstoffilter of UV ingebouwd</li>
              <li>Geschikt voor 1-5 personen</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Osmose-gebaseerde fontein</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Beste kwaliteit</span>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              Een osmose-gebaseerde drinkwaterfontein integreert een volledig RO-filtersysteem. Het water wordt gefilterd door sedimentfilter, koolstofprefilter, RO-membraan en koolstofpostfilter voor de best mogelijke waterkwaliteit. Verwijdert kalk, PFAS, nitraten, zware metalen en medicijnresten voor meer dan 90%. Ideaal voor huishoudens met hoge kwaliteitswensen en kantoren in gebieden met verontreinigd leidingwater.
            </p>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>RO-membraan verwijdert 90-99% van verontreinigingen</li>
              <li>Inclusief PFAS, nitraten en zware metalen</li>
              <li>Hogere aanschafprijs (€500-1.200)</li>
              <li>Filterwissel 1x per jaar, membraan 2-3 jaar</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: alle typen op een rij
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Aanschaf</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Maandelijks</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Filter</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Geschikt voor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Flessenfontein (huur)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0 + &euro;8-15/fles</td>
                <td className="border border-gray-300 px-3 py-2">&euro;25-80</td>
                <td className="border border-gray-300 px-3 py-2">Via fles</td>
                <td className="border border-gray-300 px-3 py-2">Kantoor zonder wateraansluiting</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Flessenfontein (koop)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;150-400</td>
                <td className="border border-gray-300 px-3 py-2">&euro;8-15/fles</td>
                <td className="border border-gray-300 px-3 py-2">Via fles</td>
                <td className="border border-gray-300 px-3 py-2">Flexibel gebruik</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Mains-fed met filter</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300-800</td>
                <td className="border border-gray-300 px-3 py-2">&euro;15-30 (filter)</td>
                <td className="border border-gray-300 px-3 py-2">Koolstof/UV</td>
                <td className="border border-gray-300 px-3 py-2">Kantoor met wateraansluiting</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">POU osmose-fontein</td>
                <td className="border border-gray-300 px-3 py-2">&euro;500-1.200</td>
                <td className="border border-gray-300 px-3 py-2">&euro;10-20 (filter)</td>
                <td className="border border-gray-300 px-3 py-2">RO-membraan</td>
                <td className="border border-gray-300 px-3 py-2">Hoogste waterkwaliteit</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kantoor versus thuis: welk type past bij uw situatie?
        </h2>
        <p className="text-gray-700 mb-4">
          De keuze voor een drinkwaterfontein hangt sterk af van de gebruikscontext. Op kantoor staat capaciteit en gebruiksgemak voor meerdere personen centraal. Een kantoor met 20 of meer medewerkers heeft een vrijstaand mains-fed model nodig dat meerdere liters per uur kan leveren. Het huurmodel is populair op kantoor omdat onderhoud en filtervervanging inbegrepen zijn bij de leverancier.
        </p>
        <p className="text-gray-700 mb-4">
          Thuis is het gebruik minder intensief. Een compact tafelmodel of POU onderbouwmodel is doorgaans voldoende voor een gezin van 2-6 personen. De aanschaf is eenmalig en de maandelijkse kosten zijn laag. Thuis wordt vaker gekozen voor een model met extra functies zoals warm water of bruisend water, gecombineerd met een RO-filter voor maximale waterkwaliteit.
        </p>
        <p className="text-gray-700 mb-6">
          Voor thuis zijn ook 4-in-1 kranen interessant: deze leveren koud, warm, kokend en soms bruisend gefilterd water via een enkele kraan. Lees meer op onze pagina over de <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kraan</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Koeling: Peltier versus compressor
        </h2>
        <p className="text-gray-700 mb-4">
          Drinkwaterfonteinen koelen het water op twee manieren: via het Peltier-effect (thermoelektrisch) of via een compressor (mechanisch). Peltier-koeling is stil en trillingsvrij, maar minder efficiënt en minder geschikt voor warme omgevingen (boven 30&deg;C werkt het slecht). Compressorkoeling is efficiënter, haalt lagere temperaturen (4-8&deg;C) en presteert ook in warme kantoren goed, maar maakt meer geluid en is zwaarder.
        </p>
        <p className="text-gray-700 mb-6">
          Voor thuisgebruik in een getempereerde ruimte is Peltier-koeling voldoende. Voor drukke kantoorruimtes of warme locaties verdient compressorkoeling de voorkeur.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hygiene: onderhoud is cruciaal
        </h2>
        <p className="text-gray-700 mb-4">
          Een slecht onderhouden drinkwaterfontein is een broedplaats voor bacterien. Bij mains-fed fonteinen zijn de kritieke onderhoudsacties: wekelijks het mondstuk reinigen, minimaal 2 keer per jaar een volledige ontsmetting van reservoir en leidingen, en jaarlijkse vervanging van de UV-lamp. Bij flessenfonteinen wordt maandelijkse reiniging van het mondstuk en het interne reservoir aanbevolen.
        </p>
        <p className="text-gray-700 mb-6">
          Veel huurcontracten voor kantoorfonteinen omvatten regelmatig onderhoud door de leverancier. Dit is een praktisch voordeel van huren boven kopen voor bedrijven zonder eigen technische dienst.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Meer lezen over drinkwaterfonteinen
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><Link href="/drinkwaterfontein/kantoor" className="text-[#005F8A] underline">Drinkwaterfontein voor kantoor</Link>: Arbowet, capaciteitsberekening en leveranciersvergelijking</li>
          <li><Link href="/drinkwaterfontein/thuis" className="text-[#005F8A] underline">Drinkwaterfontein voor thuis</Link>: compacte modellen, gezinsverbruik en bruisend water</li>
          <li><Link href="/drinkwaterfontein/kopen" className="text-[#005F8A] underline">Drinkwaterfontein kopen</Link>: koopgids met checklist, prijsklassen en merken</li>
          <li><Link href="/drinkwaterfontein/soorten" className="text-[#005F8A] underline">Soorten drinkwaterfonteinen</Link>: types vergeleken met een keuzematrix per situatie</li>
          <li><Link href="/drinkwaterfontein/leidinggebonden-vs-fles" className="text-[#005F8A] underline">Leidinggebonden vs flessenfontein</Link>: kosten, hygiene en duurzaamheid afgewogen</li>
          <li><Link href="/drinkwaterfontein/met-bruiswater" className="text-[#005F8A] underline">Drinkwaterfontein met bruiswater</Link>: hoe CO2-bruiswater uit de fontein werkt</li>
          <li><Link href="/drinkwaterfontein/koeling" className="text-[#005F8A] underline">Gekoelde drinkwaterfontein</Link>: koeltechniek, verbruik en hygiene</li>
          <li><Link href="/drinkwaterfontein/contactloos" className="text-[#005F8A] underline">Contactloze drinkwaterfontein</Link>: sensorbediening en hygiene voor openbaar gebruik</li>
          <li><Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">Omgekeerde osmose</Link>: hoe RO-filtratie werkt en waarom het de beste keuze is voor waterkwaliteit</li>
          <li><Link href="/waterfilter" className="text-[#005F8A] underline">Alle waterfilters</Link>: overzicht van alle filtertypen voor thuis</li>
        </ul>

        <CTABanner context="osmose" />

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/waterfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Waterfilter vergelijken</p>
              <p className="text-sm text-gray-600">Alle filtertypen voor thuis en kantoor naast elkaar vergeleken.</p>
            </Link>
            <Link href="/vergelijken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Waterfilters vergelijken</p>
              <p className="text-sm text-gray-600">Merken, prijzen en specificaties naast elkaar in een tabel.</p>
            </Link>
            <Link href="/zakelijk" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Waterfilter zakelijk</p>
              <p className="text-sm text-gray-600">Oplossingen voor kantoor, horeca en bedrijven: lease, koop en onderhoud.</p>
            </Link>
            <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Actief-koolfilter</p>
              <p className="text-sm text-gray-600">Chloor, geur en smaakverbeteringen met actief-koolfiltratie uitgelegd.</p>
            </Link>
          </div>
        </section>

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over drinkwaterfonteinen</h2>
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
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>,{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilters</Link> en{' '}
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kraan</Link>.
        </p>
      </main>
    </>
  );
}
