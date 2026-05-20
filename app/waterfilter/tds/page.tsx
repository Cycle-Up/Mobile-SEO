import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'TDS meten in water: wat is het en wanneer filteren?',
  description: 'TDS (Total Dissolved Solids) in water uitgelegd: wat het is, hoe je het meet, wat de waarden betekenen voor Nederlands kraanwater, en wanneer filteren zinvol.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/tds' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is TDS in water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TDS staat voor Total Dissolved Solids — alle opgeloste vaste stoffen in water. Dit omvat mineralen zoals calcium, magnesium en natrium, zouten zoals chloride en sulfaat, en sommige metalen. TDS wordt gemeten in mg/L (milligram per liter) of ppm (parts per million). Een TDS van 100 mg/L betekent dat er 100 milligram opgeloste stoffen in elke liter water zitten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is een goede TDS-waarde voor drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De WHO beschouwt water onder 300 mg/L als uitstekend tot goed. Tussen 300–500 mg/L is het acceptabel. Boven 1000 mg/L wordt water als ongeschikt voor menselijke consumptie beschouwd. Voor de beste smaak is 150–300 mg/L ideaal — hieronder smaakt water vlak en flauw, erboven kan het een zoute of metalige bijsmaak hebben.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe meet ik de TDS van mijn kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De eenvoudigste methode is een TDS-meter: een klein penachtig apparaat dat de elektrische geleidbaarheid meet en omrekent naar TDS (€10–30 bij elektronica- of aquariumwinkels). Dompel het uiteinde in het water en lees de waarde af. Voor een exactere analyse, inclusief identificatie van specifieke stoffen, is een gecertificeerd laboratoriumonderzoek nodig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de gemiddelde TDS van Nederlands kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nederlandse kraanwater heeft doorgaans een TDS tussen 150 en 400 mg/L, afhankelijk van de regio. Zachte watergebieden (Drenthe, Groningen) liggen lager (150–250 mg/L), harde watergebieden (Zuid-Holland, Zeeland, delen van Noord-Brabant) kunnen oplopen tot 350–500 mg/L. Dit is ruim binnen de WHO-norm van 1000 mg/L.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter TDS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een omgekeerde-osmosefilter verwijdert 90–99% van alle opgeloste stoffen. Water dat door een osmosefilter gaat, heeft doorgaans een TDS van 5–20 mg/L. Dit betekent ook dat nuttige mineralen worden verwijderd. Met een remineralisatiefilter kan de TDS worden verhoogd naar 50–80 mg/L voor een betere smaak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Meet een TDS-meter ook bacteriën of pesticiden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, een TDS-meter meet alleen electrically charged dissolved solids — geladen deeltjes in water. Bacteriën, virussen, PFAS, pesticiden en de meeste organische verbindingen zijn elektrisch neutraal of aanwezig in zulke lage concentraties dat ze de TDS-waarde nauwelijks beïnvloeden. Water met een lage TDS kan nog steeds vervuilde zijn met gevaarlijke stoffen. Een lage TDS is geen veiligheidscertificaat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de ideale TDS voor koffie zetten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Barista\'s en koffiespecialisten raden een TDS van 150–250 mg/L aan voor optimale koffie-extractie. Te laag TDS (onder 100 mg/L, zoals osmosewater zonder remineralisatie) geeft een vlak, ondergeëxtraheerd resultaat. Te hoog TDS (boven 300 mg/L) kan bitterheid en overextractie bevorderen. De SCA (Specialty Coffee Association) adviseert specifiek 150 mg/L als ideaal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer moet ik mijn water filteren op basis van TDS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een hoge TDS alleen is zelden een reden om te filteren — Nederlandse kraanwater is veilig ondanks TDS-variatie. Filteren is zinvol als: (1) je specifieke verontreinigingen wilt verwijderen die TDS verhogen (lood, nitraat, arseen), (2) je water voor aquarium of medische doeleinden gebruikt met strikte eisen, of (3) de smaak slecht is door mineraalsamenstelling. Combineer TDS-meting altijd met informatie over de waterkwaliteit van jouw leverancier.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'TDS meten in water: wat is het en wanneer filteren?',
  description: 'TDS (Total Dissolved Solids) uitgelegd: wat het meet, Nederlandse normen, smaakeffecten en wanneer filteren zinvol is.',
  datePublished: '2026-04-15',
  dateModified: '2026-04-15',
  url: 'https://waterfilterplatform.nl/waterfilter/tds',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function TDSWaterPage() {
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
              { '@type': 'ListItem', position: 3, name: 'TDS water meten', item: 'https://waterfilterplatform.nl/waterfilter/tds' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterfilter" className="hover:underline">Waterfilter</a> &rsaquo;{' '}
          <span>TDS water meten</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          TDS meten in water: wat is het en wanneer filteren?
        </h1>

        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#003F5C] mb-1">Kort antwoord</p>
          <p className="text-gray-700 text-sm">
            TDS (Total Dissolved Solids) is de totale hoeveelheid opgeloste mineralen en zouten in water, gemeten in mg/L. Nederlands kraanwater zit doorgaans tussen 150–400 mg/L — ruim binnen de WHO-norm. TDS beïnvloedt smaak maar meet geen bacteriën, pesticiden of PFAS.
          </p>
        </div>

        <CTABanner context="osmose" />

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8 mt-6">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Wat is TDS precies?
          </h2>
          <p className="text-gray-700 mb-4">
            TDS staat voor <strong>Total Dissolved Solids</strong> — de totale hoeveelheid opgeloste vaste stoffen in water. Het getal geeft aan hoeveel milligram aan deeltjes er zijn opgelost in één liter water. Dit is geen maat voor specifieke stoffen, maar een totaalwaarde.
          </p>
          <p className="text-gray-700 mb-4">
            Wat draagt bij aan TDS?
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li><strong>Calcium (Ca²⁺):</strong> Hardheidsbepalend mineraal, afkomstig uit kalksteen in de bodem.</li>
            <li><strong>Magnesium (Mg²⁺):</strong> Hardheidsbepalend, tweede grootste bijdrage in hard water.</li>
            <li><strong>Natrium (Na⁺):</strong> Afkomstig uit natriumchloride (zout), zeewaterinfiltratie of waterbehandeling.</li>
            <li><strong>Kalium (K⁺):</strong> In lage concentraties aanwezig, ook van nature in de bodem.</li>
            <li><strong>Chloride (Cl⁻):</strong> Zoutionenhalf, aanwezig in vrijwel al het water.</li>
            <li><strong>Sulfaat (SO₄²⁻):</strong> Afkomstig uit gips en industriële lozingen.</li>
            <li><strong>Bicarbonaat (HCO₃⁻):</strong> Bufferminderaal, bepaalt ook de pH-stabiliteit.</li>
            <li><strong>Zware metalen:</strong> In lage concentraties aanwezig (ijzer, mangaan, lood in leidingen).</li>
          </ul>
        </section>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          TDS-waarden en wat ze betekenen
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">TDS (mg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kwalificatie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Smaak</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Bron/context</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">&lt;50</td>
                <td className="border border-gray-300 px-3 py-2">Gedestilleerd/osmose</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Vlak, flauw</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600">Osmosewater, gedestilleerd</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">50–150</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Uitstekend (WHO)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Fris, licht</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600">Zacht bronwater, gefilterd water</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">150–300</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Goed (WHO)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Optimaal voor de meeste</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600">Zacht tot middelhard kraanwater</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">300–500</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Acceptabel (WHO)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Licht zoet/mineraal</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600">Hard kraanwater NL</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">500–1000</td>
                <td className="border border-gray-300 px-3 py-2 text-orange-700">Matig (WHO)</td>
                <td className="border border-gray-300 px-3 py-2 text-orange-700">Zoet, mineraalachtig</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600">Brak water, sommige bronnen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">&gt;1000</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Niet aanbevolen (WHO)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Zout, onaangenaam</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600">Zout grondwater, afvalwater</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          TDS in Nederlands kraanwater
        </h2>
        <p className="text-gray-700 mb-4">
          Het TDS van Nederlands kraanwater varieert sterk per regio en hangt nauw samen met de waterhardheid. Zachte watergebieden in het noorden en oosten van Nederland hebben doorgaans een lager TDS, terwijl kustregio&rsquo;s en rivierdalgebieden harder en mineralenrijker water hebben.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Drenthe / Groningen:</strong> 100–200 mg/L (zacht grondwater)</li>
          <li><strong>Midden-Nederland (Utrecht, Gelderland):</strong> 200–300 mg/L</li>
          <li><strong>Randstad (Amsterdam, Rotterdam):</strong> 200–350 mg/L</li>
          <li><strong>Zeeland / Zuid-Holland kust:</strong> 300–500 mg/L (hogere chloride door zeewater)</li>
          <li><strong>Noord-Brabant (grondwater):</strong> 150–350 mg/L</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Al deze waarden liggen ruim onder de WHO-drempel van 1000 mg/L en zijn veilig voor normale consumptie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe TDS meten?
        </h2>
        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">TDS-meter (€10–30)</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Meet de elektrische geleidbaarheid (EC) en rekent dit om naar TDS. Snel, handig, geschikt voor thuisgebruik. Nauwkeurigheid is ongeveer ±5%. Ideaal voor regelmatige controle van osmosefilters of aquariumwater. Let op: TDS-meters geven een geschatte waarde — niet identiek aan laboratoriummetingen.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">EC-meter</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Meet de elektrische geleidbaarheid direct in µS/cm (microsiemens per centimeter). Meer gebruikt in aquarium- en tuinbouw. De omrekening naar TDS varieert per watertype (factor 0,5–0,7). EC-meters zijn preciezer voor specifieke toepassingen waar de mineralensamenstelling bekend is.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Laboratoriumanalyse</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Een gecertificeerd waterlaboratorium meet niet alleen TDS maar ook de individuele componenten (calcium, magnesium, nitraat, zware metalen, PFAS). Kosten: €50–200 afhankelijk van het analysepakket. Nodig als je wilt weten wat er precies in je water zit — niet alleen hoeveel.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          TDS en smaak: het ideale bereik
        </h2>
        <p className="text-gray-700 mb-4">
          TDS beïnvloedt de smaak van water significant. Onderzoek toont dat de meeste mensen water in het bereik van 150–300 mg/L als het meest aangenaam ervaren:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Onder 150 mg/L:</strong> Water smaakt vlak en flauw. Dit is typisch voor osmosewater en gedestilleerd water. Veel mensen vinden dit onaangenaam ondanks de extreme zuiverheid.</li>
          <li><strong>150–300 mg/L:</strong> Optimaal voor de meeste mensen. Fris en licht mineraalachtig, zonder dominante smaken.</li>
          <li><strong>300–500 mg/L:</strong> Merkbaar mineraalrijker. Sommigen vinden dit aangenaam; anderen ervaren een lichte zoute of kalkige bijsmaak.</li>
          <li><strong>Boven 500 mg/L:</strong> Duidelijk smaakeffect — zoet tot zout. Minder aangenaam voor dagelijks drinkwater.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          TDS voor specifieke toepassingen
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Toepassing</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Ideale TDS (mg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Reden</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Drinkwater (algemeen)</td>
                <td className="border border-gray-300 px-3 py-2">150–300</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600">Beste smaak, WHO-optimaal</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Koffie (specialiteit)</td>
                <td className="border border-gray-300 px-3 py-2">150–250</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600">SCA-norm voor optimale extractie</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Aquarium (zoetwatervis)</td>
                <td className="border border-gray-300 px-3 py-2">50–300</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600">Soortafhankelijk (discus: &lt;100)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Aquarium (zeewater)</td>
                <td className="border border-gray-300 px-3 py-2">30.000–35.000</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600">Zeewatersamenstelling</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Babyvoeding bereiden</td>
                <td className="border border-gray-300 px-3 py-2">&lt;200</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600">Laag natriumgehalte belangrijk</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">RO-membraanefficiëntie</td>
                <td className="border border-gray-300 px-3 py-2">&lt;500</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600">Efficiëntie daalt bij &gt;500 mg/L</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat TDS NIET meet: de cruciale beperking
        </h2>
        <p className="text-gray-700 mb-4">
          Dit is het meest belangrijke om te begrijpen bij TDS-metingen: <strong>een lage TDS-waarde betekent niet dat water veilig is</strong>. TDS-meters meten elektrisch geleidende deeltjes. De volgende gevaarlijke stoffen zijn niet of nauwelijks detecteerbaar via TDS:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Bacteriën en virussen:</strong> Micro-organismen zijn elektrisch neutraal en dragen niet bij aan TDS.</li>
          <li><strong>PFAS (forever chemicals):</strong> Organische verbindingen met minimale elektrische lading — aanwezig bij TDS &lt;10 mg/L in osmosewater van slechte kwaliteit.</li>
          <li><strong>Pesticiden en herbiciden:</strong> Ongeladen organische moleculen.</li>
          <li><strong>Medicijnresten:</strong> Farmaceutische verbindingen zijn niet TDS-detecteerbaar.</li>
          <li><strong>Microplastics:</strong> Vaste deeltjes die geen ionen zijn.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          TDS is nuttig als indicatie van mineralenrijkdom en als controlemiddel voor osmosefilters, maar geen veiligheidsindicator. Voor veiligheidscontrole is een volledig laboratoriumonderzoek nodig.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmose en remineralisatie: TDS bewust instellen
        </h2>
        <p className="text-gray-700 mb-4">
          Een osmosefilter reduceert TDS met 90–99%, wat water oplevert met een TDS van 5–20 mg/L. Dit is bijzonder zuiver maar kan vlak smaken. Via <strong>remineralisatie</strong> wordt de TDS bewust verhoogd naar 50–80 mg/L door calciet- of magnesiumoxide-patronen toe te voegen.
        </p>
        <p className="text-gray-700 mb-6">
          Met een TDS-meter kun je eenvoudig controleren of je osmosefilter goed werkt: na het RO-membraan zou de TDS ten minste 90% lager moeten zijn dan het ingaande water. Als dit niet het geval is, is het membraan mogelijk beschadigd of aan vervanging toe. Lees meer over dit principe in ons artikel over <a href="/osmose-water/gezondheidsvoordelen" className="text-[#005F8A] underline">gezondheidsvoordelen van osmosewater</a>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose filtertechniek</h3>
              <p className="text-sm text-gray-600">Hoe omgekeerde osmose TDS drastisch verlaagt en water ultrazuiver maakt.</p>
            </a>
            <a href="/waterhardheid/testen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterhardheid testen</h3>
              <p className="text-sm text-gray-600">Meet de hardheid van uw kraanwater en begrijp de relatie met TDS.</p>
            </a>
            <a href="/onderhoud/osmose-filter-vervangen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Osmosefilter vervangen</h3>
              <p className="text-sm text-gray-600">Wanneer en hoe u het membraan en filters van uw osmosesysteem vervangt.</p>
            </a>
            <a href="/waterfilter/hardheidstest" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter hardheidstest</h3>
              <p className="text-sm text-gray-600">Test de hardheid van uw water en ontdek welk filter het beste past.</p>
            </a>
          </div>
        </section>

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
          <a href="/waterfilter/zwaar-metalen" className="text-[#005F8A] underline">zware metalen in water filteren</a>{' '}
          en{' '}
          <a href="/waterfilter/chloor-verwijderen" className="text-[#005F8A] underline">chloor verwijderen uit kraanwater</a>.
        </p>
      </main>
    </>
  );
}
