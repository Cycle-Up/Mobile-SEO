import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export function generateMetadata(): Metadata {
  return {
    title: 'Drinkwaterkwaliteit in Nederland — wat zit er in?',
    description:
      'Hoe goed is het drinkwater in Nederland? Lees over het Drinkwaterbesluit, RIVM-metingen, waterhardheid per regio, PFAS, chloor en wanneer filteren zinvol is.',
    alternates: { canonical: 'https://waterfilterplatform.nl/drinkwaterkwaliteit' },
    openGraph: {
      title: 'Drinkwaterkwaliteit Nederland: wat zit er in uw kraanwater?',
      description:
        'Uitleg over hoe NL drinkwater wordt gecontroleerd, wat de regionale verschillen zijn en wanneer filteren zinvol is.',
      url: 'https://waterfilterplatform.nl/drinkwaterkwaliteit',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Is drinkwater in Nederland veilig om te drinken?',
    answer:
      'Ja. Nederland heeft een van de strengste drinkwaterregelgevingen ter wereld. Het Drinkwaterbesluit stelt grenzen aan meer dan honderd parameters. Alle Nederlandse waterbedrijven publiceren jaarlijks hun resultaten, en de meeste waarden liggen ruim onder de wettelijke norm. Dat wil niet zeggen dat water overal identiek smaakt of dat elke stof volledig afwezig is — maar het is veilig voor dagelijks gebruik.',
  },
  {
    question: 'Wat is het verschil tussen hard en zacht drinkwater?',
    answer:
      'Waterhardheid geeft aan hoeveel calcium en magnesium er in water opgelost zijn. Hard water (> 15 °dH) laat kalkafzetting achter op kranen, ketels en koffiezetapparaten. Zacht water (< 7 °dH) heeft minder kalkaanslag maar kan iets agressiever zijn voor leidingen. In Nederland varieert de hardheid sterk per regio: van zacht in Zeeland en Noord-Holland tot hard in Limburg en Brabant.',
  },
  {
    question: 'Zit er PFAS in Nederlands drinkwater?',
    answer:
      'In 2020 zijn er in Nederland enkele locaties gevonden waar PFAS-waarden in het drinkwater tijdelijk boven de nieuwe, strengere EU-norm uitkwamen. Sindsdien zijn maatregelen genomen door de waterbedrijven. De meeste bedrijven voldoen aan de huidige normen, maar PFAS is een aandachtspunt dat actief gemonitord wordt door RIVM en KWR Watercycle Research Institute. Een omgekeerde osmose filter kan PFAS voor meer dan 95% verwijderen.',
  },
  {
    question: 'Hoeveel chloor zit er in Nederlands drinkwater?',
    answer:
      'In Nederland wordt chloor soms gebruikt als desinfectiemiddel tijdens de waterbehandeling, maar de concentraties zijn doorgaans laag (< 0,1 mg/l). Sommige waterbedrijven gebruiken liever UV-desinfectie of ozon. Als je water een zwakke chloorlucht heeft, kan dat tijdelijk zijn na behandeling. Een koolstoffilter of omgekeerde osmose filter verwijdert restchloor effectief.',
  },
  {
    question: 'Wanneer is een waterfilter thuis nuttig?',
    answer:
      'Een waterfilter heeft meerwaarde als je in een regio met hard water woont (bescherming apparaten, betere smaak), als je gevoelig bent voor chloride- of nitraatgehaltes, als je puur water wilt voor koffie of thee, of als je lokale leidingen oud zijn (koper, lood). Voor de meeste gezonde volwassenen is ongefilterd Nederlands kraanwater volkomen veilig. Maar voor smaakbeleving en apparaatonderhoud heeft filteren zeker voordelen.',
  },
  {
    question: 'Wat doet het Drinkwaterbesluit precies?',
    answer:
      'Het Drinkwaterbesluit (2011, meerdere keren herzien) is de Nederlandse uitwerking van de EU-drinkwaterrichtlijn. Het stelt maximumwaarden voor meer dan 100 parameters — van bacteriën en nitraat tot zware metalen en bestrijdingsmiddelen. Waterbedrijven zijn wettelijk verplicht het water te testen, de resultaten te publiceren en te handelen als een waarde dreigt te worden overschreden.',
  },
];

const waterbedrijven = [
  { naam: 'Vitens', gebied: 'Overijssel, Gelderland, Utrecht, Friesland, Flevoland', klanten: '± 5,8 mln' },
  { naam: 'Evides', gebied: 'Zuid-Holland, Zeeland', klanten: '± 2,5 mln' },
  { naam: 'PWN', gebied: 'Noord-Holland (noord)', klanten: '± 1,2 mln' },
  { naam: 'Waternet', gebied: 'Amsterdam, deel Noord-Holland', klanten: '± 1,3 mln' },
  { naam: 'Dunea', gebied: 'Zuid-Holland (kust)', klanten: '± 1,1 mln' },
  { naam: 'Brabant Water', gebied: 'Noord-Brabant', klanten: '± 2,6 mln' },
  { naam: 'WML', gebied: 'Limburg', klanten: '± 0,6 mln' },
  { naam: 'Oasen', gebied: 'Midden-Holland', klanten: '± 0,8 mln' },
];

const regionaleTabel = [
  { regio: 'Amsterdam / Waternet', hardheid: 'Zacht', dH: '4–7 °dH', chloor: 'Soms laag', nitraat: 'Laag', opmerking: 'Dunwater vanuit de Amsterdamse Waterleidingduinen' },
  { regio: 'Rotterdam / Evides', hardheid: 'Matig', dH: '8–12 °dH', chloor: 'Wisselend', nitraat: 'Gemiddeld', opmerking: 'Rijnwater, uitgebreid gezuiverd' },
  { regio: 'Utrecht / Vitens', hardheid: 'Matig-hard', dH: '12–18 °dH', chloor: 'Laag', nitraat: 'Laag-matig', opmerking: 'Grotendeels grondwater' },
  { regio: 'Noord-Holland (kust) / PWN', hardheid: 'Zacht-matig', dH: '5–10 °dH', chloor: 'Laag', nitraat: 'Laag', opmerking: 'Duinwater en oppervlaktewater' },
  { regio: 'Noord-Brabant / Brabant Water', hardheid: 'Hard', dH: '16–22 °dH', chloor: 'Laag', nitraat: 'Matig', opmerking: 'Grondwater, hogere mineralenconcentratie' },
  { regio: 'Limburg / WML', hardheid: 'Hard', dH: '18–24 °dH', chloor: 'Laag', nitraat: 'Wisselend', opmerking: 'Maaswater en grondwater, hoog kalkgehalte' },
  { regio: 'Zeeland / Evides', hardheid: 'Zacht', dH: '4–8 °dH', chloor: 'Matig', nitraat: 'Laag', opmerking: 'Deels oevergrondwater, laag in mineralen' },
  { regio: 'Friesland / Vitens', hardheid: 'Zacht-matig', dH: '6–11 °dH', chloor: 'Laag', nitraat: 'Laag', opmerking: 'Veengebied, bijzonder zacht water' },
];

export default function DrinkwaterkwaliteitPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Drinkwaterkwaliteit', url: 'https://waterfilterplatform.nl/drinkwaterkwaliteit' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Drinkwaterkwaliteit</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Drinkwaterkwaliteit in Nederland — wat zit er in uw kraanwater?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            De <strong>drinkwaterkwaliteit</strong> in Nederland behoort tot de beste ter wereld. Maar &ldquo;veilig&rdquo; is niet hetzelfde als
            &ldquo;identiek overal&rdquo;. De <strong>kwaliteit van drinkwater in Nederland</strong> verschilt per regio, waterbedrijf en zelfs
            per seizoen. Op deze pagina leggen we uit hoe drinkwater wordt gecontroleerd, wat er in zit en wanneer extra filteren zinvol is.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/waterhardheid"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Waterhardheid per gemeente →
            </Link>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Osmosefilter kopen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        <QuickAnswer answer="Nederlands leidingwater behoort tot de schoonste ter wereld en voldoet ruimschoots aan het Drinkwaterbesluit. Een waterfilter is geen gezondheidsnoodzaak, maar kan de smaak verbeteren en restchloor verwijderen. In gebieden met hard water (>12°dH) beschermt een osmosefilter ook keukenapparaten tegen kalkschade." />

        {/* Hoe wordt drinkwater gecontroleerd */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe wordt drinkwater in Nederland gecontroleerd?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nederland heeft een strak systeem voor toezicht op drinkwaterkwaliteit. Drie instanties spelen daarin een centrale rol:
            het wettelijk kader (het Drinkwaterbesluit), het nationale instituut voor gezondheidsonderzoek (RIVM) en het
            onafhankelijke wateronderzoeksinstituut (KWR).
          </p>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">Het Drinkwaterbesluit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Het Drinkwaterbesluit (2011, sindsdien meerdere keren herzien) is de Nederlandse vertaling van de EU-drinkwaterrichtlijn.
                Het stelt maximumwaarden voor meer dan honderd stoffen — van bacteriën en nitraat tot zware metalen, pesticiden en
                opkomende stoffen zoals PFAS. Waterbedrijven moeten hun water minimaal wekelijks testen op een breed panel van parameters
                en zijn verplicht de resultaten jaarlijks openbaar te maken. De Inspectie Leefomgeving en Transport (ILT) houdt toezicht
                op de naleving.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">RIVM — Rijksinstituut voor Volksgezondheid en Milieu</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Het RIVM voert jaarlijks een landelijke analyse uit van de drinkwaterkwaliteit op basis van de rapportages van
                alle tien waterbedrijven. Het instituut publiceert de bevindingen in het rapport &ldquo;De kwaliteit van het drinkwater
                in Nederland&rdquo;. Daarin staan trends, overschrijdingen (hoe zeldzaam ook), en aandachtspunten voor de komende jaren.
                De RIVM-data vormt de wetenschappelijke basis voor beleidsaanpassingen aan het Drinkwaterbesluit.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">KWR Watercycle Research Institute</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                KWR is een onafhankelijk onderzoeksinstituut dat voor de waterbedrijven en de overheid onderzoek doet naar
                opkomende risico&rsquo;s in de waterketen — denk aan PFAS, microplastics, medicijnresten en klimaateffecten op
                waterbronnen. KWR werkt aan methoden om stoffen vroegtijdig te detecteren voor ze in het drinkwater terechtkomen
                en adviseert over verbeterde zuiveringsprocessen.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Het systeem werkt: in 2023 voldeed ruim 99,9% van alle Nederlandse watermonsters aan alle wettelijke normen. Toch
            zijn er nuances — met name rondom hardheid, nitraat in bepaalde grondwaterregio&rsquo;s en opkomende stoffen als PFAS.
          </p>
        </section>

        {/* Waterbedrijven */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke waterbedrijven leveren drinkwater in Nederland?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Nederland heeft tien regionale waterbedrijven die samen het drinkwater voor alle huishoudens en bedrijven leveren.
            Elk bedrijf gebruikt andere bronnen (grondwater, oppervlaktewater, duinwater) en heeft daardoor een eigen waterprofiel.
            Hieronder de acht grootste.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Waterbedrijf</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Verzorgingsgebied</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Klanten</th>
                </tr>
              </thead>
              <tbody>
                {waterbedrijven.map(b => (
                  <tr key={b.naam} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-semibold text-gray-800">{b.naam}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{b.gebied}</td>
                    <td className="py-2.5 px-3 text-gray-700">{b.klanten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Indicatieve klantenaantallen. Naast deze bedrijven opereren ook Oasen, WML en enkele kleinere regionale leveranciers.
          </p>
        </section>

        {/* Wat zit er in */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat zit er in Nederlands drinkwater?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Drinkwater is geen pure H₂O — en dat hoeft ook niet. Mineralen en spoorelementen zijn deels gunstig voor de
            gezondheid. De uitdaging zit in het balanceren van gewenste en ongewenste stoffen. Hieronder de meest besproken
            componenten.
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-gray-100 p-4">
              <h3 className="font-bold text-gray-900 mb-2">Calcium en magnesium (hardheid)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Calcium en magnesium zijn de hoofdoorzaak van <Link href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid</Link>.
                Ze zijn niet schadelijk voor de gezondheid — magnesium is zelfs gunstig — maar veroorzaken kalkafzetting op
                apparaten, kranen en heetwaterboilers. In Nederland varieert de hardheid van 4 °dH (Friesland, kust Noord-Holland)
                tot 24 °dH (Limburg). Voor apparaten die kokend water verwarmen is harde water het slijtst.
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 p-4">
              <h3 className="font-bold text-gray-900 mb-2">Chloor en desinfectie-bijproducten</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Chloor wordt in sommige waterbedrijven gebruikt als nadesinfectant. De concentraties zijn laag (doorgaans onder
                0,1 mg/l) maar kunnen een lichte geur of smaak geven. Bij reactie met organisch materiaal in de leidingen kunnen
                kleine hoeveelheden trihalomethanen (THM&rsquo;s) ontstaan — deze zitten ruim onder de wettelijke norm maar zijn
                een reden waarom sommige mensen filteren. Meer achtergrond lees je in ons artikel over{' '}
                <Link href="/kennisbank/chloor-in-drinkwater" className="text-[#005F8A] underline">chloor in drinkwater</Link>.
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 p-4">
              <h3 className="font-bold text-gray-900 mb-2">Nitraat</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nitraat is een landbouwgerelateerde verontreiniger die in hogere concentraties voorkomt in grondwatergebieden met
                intensieve akkerbouw — met name in Noord-Brabant en Gelderland. De wettelijke norm is 50 mg/l. In Nederland
                voldoen alle waterbedrijven aan deze norm na behandeling, maar de druk op grondwaterbronnen is een structureel
                aandachtspunt. Meer informatie in ons kennisbankartikel over{' '}
                <Link href="/kennisbank/nitraat-drinkwater" className="text-[#005F8A] underline">nitraat in drinkwater</Link>.
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 p-4">
              <h3 className="font-bold text-gray-900 mb-2">PFAS (pfas-verbindingen)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                PFAS (poly- en perfluoralkylstoffen) zijn industriële verbindingen die in de natuur niet of nauwelijks afbreken.
                Ze komen voor in de bodem en het oppervlaktewater in de buurt van chemische fabrieken, vliegvelden en
                brandweeroefenterreinen. In 2020–2021 bleek dat PFAS-waarden in enkele Nederlandse bronnen de nieuwe, strengere
                EU-drinkwaternorm overschreden. Sindsdien zijn zuiveringsmaatregelen doorgevoerd. Lees onze uitleg over de{' '}
                <Link href="/kennisbank/pfas-drinkwater" className="text-[#005F8A] underline">PFAS-situatie in drinkwater</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Regionale verschillen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe verschillen regio's in waterkwaliteit?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            De drinkwaterkwaliteit per regio hangt sterk samen met de waterbron: grondwater is vaak harder maar minder
            vatbaar voor oppervlaktevervuiling; oppervlaktewater is zachter maar vereist intensievere zuivering.
            Bekijk ook onze gedetailleerde pagina over{' '}
            <Link href="/kennisbank/waterkwaliteit-nederland" className="text-[#005F8A] underline">waterkwaliteit per regio in Nederland</Link>.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Regio / Bedrijf</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Hardheid</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Graad (°dH)</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Chloor</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Nitraat</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Toelichting</th>
                </tr>
              </thead>
              <tbody>
                {regionaleTabel.map(r => (
                  <tr key={r.regio} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-semibold text-gray-800">{r.regio}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.hardheid}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.dH}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.chloor}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.nitraat}</td>
                    <td className="py-2.5 px-3 text-gray-500 text-xs">{r.opmerking}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Indicatieve waarden op basis van gepubliceerde jaarverslagen waterbedrijven 2022–2024. Lokale waarden kunnen afwijken — raadpleeg uw waterbedrijf voor actuele cijfers.
          </p>
        </section>

        {/* Is NL drinkwater veilig */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Is Nederlands drinkwater veilig? Ja — maar er zijn nuances</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het korte antwoord is: ja. De RIVM-rapportages laten jaar op jaar zien dat meer dan 99,9% van de watermonsters
            voldoet aan alle wettelijke normen. Nederland staat internationaal in de top als het gaat om drinkwaterkwaliteit.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De nuances zitten in een paar specifieke situaties:
          </p>
          <div className="space-y-3">
            {[
              {
                titel: 'Verouderde leidingen in oudere woningen',
                tekst: 'In woningen van vóór 1960 kunnen nog loden leidingen aanwezig zijn. Lood lost op in water en is schadelijk, zeker voor kinderen en zwangere vrouwen. Heeft u loden leidingen? Laat ze vervangen — dat is wettelijk verplicht maar wordt soms vergeten bij oude panden.',
              },
              {
                titel: 'PFAS op specifieke locaties',
                tekst: 'Nabij industriële locaties of voormalige vliegvelden kunnen PFAS-concentraties in het bronwater hoger zijn. Waterbedrijven in die gebieden passen extra zuiveringsstappen toe, maar het is een structureel aandachtspunt voor de sector.',
              },
              {
                titel: 'Nitraat in agrarische grondwatergebieden',
                tekst: 'In delen van Noord-Brabant, Gelderland en Overijssel staat grondwater onder druk van landbouw. Nitraatconcentraties zijn na behandeling onder de norm, maar de trend is soms niet gunstig zonder extra maatregelen.',
              },
              {
                titel: 'Hardheid en smaakbeleving',
                tekst: 'Veilig is niet gelijk aan lekker of ideaal. Hard water tast de smaak van koffie en thee aan en beschadigt apparaten. Dat is geen veiligheidsrisico maar wel een kwaliteitsaspect dat veel mensen reden geeft om te filteren.',
              },
            ].map(p => (
              <div key={p.titel} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">→</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{p.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Wanneer filteren zinvol */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer is filteren van drinkwater zinvol?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We zijn eerlijk: voor de grote meerderheid van Nederlandse huishoudens is ongefilterd kraanwater veilig en
            drinkbaar. Toch zijn er goede redenen om te kiezen voor extra filtratie via een{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">omgekeerde osmose filter</Link> of een
            andere filtermethode.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                situatie: 'U woont in een harde waterregio',
                uitleg: 'Woonplaatsen als Tilburg, Eindhoven, Maastricht of Utrecht hebben hard water. Een osmose filter vermindert kalk, beschermt uw apparaten en verbetert de smaak.',
              },
              {
                situatie: 'U drinkt liever puur water',
                uitleg: 'Osmose water is neutraal van smaak en bevat minimaal opgeloste stoffen — ideaal voor koffie- en theeliefhebbers die het verschil proeven.',
              },
              {
                situatie: 'U heeft jonge kinderen of bent zwanger',
                uitleg: 'Bij verhoogde nitraat- of PFAS-waarden in uw regio kan filteren extra bescherming bieden voor kwetsbare groepen.',
              },
              {
                situatie: 'Uw woning heeft oudere leidingen',
                uitleg: 'Als u onzeker bent over de staat van uw binnenhuisleidingen, verwijdert een osmose filter eventuele metaalresten effectief.',
              },
              {
                situatie: 'U wilt kokend én gefilterd water',
                uitleg: 'Een 4-in-1 kraan met osmose filter combineert kokend water, bruisend water en puur gefilterd water in één systeem — ideaal als u meerdere verbeteringen tegelijk wilt.',
              },
              {
                situatie: 'U ervaart chloor- of aardgeur',
                uitleg: 'Een koolstof of osmose filter verwijdert restchloor en organische geurassociaties effectief, zonder de veiligheid van uw water te beïnvloeden.',
              },
            ].map(s => (
              <div key={s.situatie} className="bg-[#E0F2FE]/50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 text-sm mb-1">{s.situatie}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{s.uitleg}</p>
              </div>
            ))}
          </div>
        </section>

        <CTABanner context="waterhardheid" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over drinkwaterkwaliteit</h2>
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
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen over drinkwater en waterkwaliteit</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterhardheid', label: 'Waterhardheid per gemeente in NL' },
              { href: '/kennisbank/waterkwaliteit-nederland', label: 'Waterkwaliteit per regio' },
              { href: '/kennisbank/nitraat-drinkwater', label: 'Nitraat in drinkwater' },
              { href: '/kennisbank/pfas-drinkwater', label: 'PFAS in drinkwater' },
              { href: '/kennisbank/chloor-in-drinkwater', label: 'Chloor in drinkwater' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmosefilter kopen' },
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

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#005F8A] to-[#003F5C] text-white rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Wilt u uw drinkwater verbeteren?</h2>
          <p className="text-blue-100 mb-5 max-w-lg mx-auto">
            Een 4-in-1 kraan met omgekeerde osmose filtert via RO en levert tegelijk kokend, koud, warm en bruisend water.
            Ideaal voor harde waterregio&rsquo;s of iedereen die puur, lekker water wil.
          </p>
          <Link
            href="/omgekeerde-osmose/kopen"
            className="inline-block bg-white text-[#005F8A] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm md:text-base"
          >
            Bekijk osmosefilters →
          </Link>
        </section>
      </div>
    </>
  );
}
