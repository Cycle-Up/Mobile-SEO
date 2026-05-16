import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Harde water: wat is waterhardheid en wat doet het?',
  description: 'Waterhardheid in Nederland: kalk, kalkaanslag en energiekosten. Hardheid per regio (Limburg 25–30°dH, Amsterdam 10–15°dH). Waterontharder, osmose of ontkalker — wat werkt?',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwater/hardheid' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is waterhardheid en hoe wordt het gemeten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Waterhardheid is de concentratie opgeloste calcium (Ca²⁺) en magnesium (Mg²⁺) in water. Het wordt uitgedrukt in graden Duitse hardheid (°dH), mmol/L of mg/L CaCO₃. De schaal loopt van zacht (<8°dH) via middelhard (8–15°dH) en hard (15–20°dH) tot zeer hard (>20°dH). Nederlands leidingwater varieert sterk per regio: van 4°dH in Friesland tot 28°dH in Zuid-Limburg.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is hard water schadelijk voor de gezondheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. De WHO stelt expliciet dat hard water niet schadelijk is voor de gezondheid. Integendeel: calcium en magnesium in drinkwater dragen bij aan de dagelijkse behoefte. Epidemiologisch onderzoek suggereert zelfs een cardioprotectief effect van hard water — mensen in gebieden met hard water hebben iets lagere sterftecijfers aan hart- en vaatziekten. Zachter water gemaakt door ontharting mist dit effect.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe hard is het water in mijn gemeente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De hardheid verschilt sterk per regio. Globaal: Zuid-Limburg 25–30°dH (zeer hard), Zeeland kustgebieden 15–20°dH, Amsterdam/Randstad 10–15°dH, Oost-Nederland/Gelderland 5–10°dH, Friesland/Drenthe 4–8°dH (zacht). Uw drinkwaterbedrijf publiceert de exacte hardheid voor uw postcodegebied. Op onze pagina over waterhardheid per gemeente vindt u specifieke informatie per gemeente.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke huishoudelijke problemen veroorzaakt hard water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hard water veroorzaakt: kalkaanslag op waterkokers, douchekoppen, kranen en koffiezetapparaten; zeepschuim-problemen (meer wasmiddel nodig); witte strepen op vaat uit de vaatwasser; snel verstopte sproeikoppen; en verkorte levensduur van boilers en wasmachines door kalkafzetting op verwarmingselementen. Per 1 mm kalk op een verwarmingselement stijgt het energieverbruik met circa 12%.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost hard water mij aan energie en onderhoud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kalkafzetting op verwarmingselementen verhoogt het energieverbruik significant: 1 mm kalksteen geeft circa 12% meer energieverbruik, 5 mm geeft al 40% extra verbruik. Voor een gemiddeld huishouden in een harde waterzone kost dit €50–150 per jaar aan extra energiekosten. Daarbovenop komen voortijdige vervanging van boilers (gemiddeld 30% kortere levensduur), wasmachines en vaatwassers, en hogere verbruikskosten voor wasmiddel en reinigingsproducten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een waterontharder en een waterontkalker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een waterontharder (ionenwisselaar) verwijdert calcium en magnesium chemisch via ionenwisseling met natrium. Het water is daarna echt zacht: geen kalkaanslag. Een waterontkalker (magneet, elektronisch of polyfosfoaat) verandert de structuur van kalkdeeltjes zodat ze minder aanslaan, maar verwijdert calcium en magnesium niet uit het water. Ionenwisselaars zijn de enige echte waterontharders; ontkalkers zijn aanvullend maar minder effectief.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter waterhardheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Een osmosefilter verwijdert 95–99% van calcium en magnesium, waardoor het water extreem zacht wordt (vrijwel 0°dH). Dit is echter te zacht voor dagelijks drinken — goede osmosesystemen hebben een remineralisatiefilter dat calcium en magnesium in de juiste verhouding teruggeeft. Osmose is geen whole-house oplossing voor hardheid; het is een keukenfilter. Voor hele-huis ontharding is een ionenwisselaar de betere keuze.',
      },
    },
    {
      '@type': 'Question',
      name: 'Helpt polyfosfoaat-dosering tegen kalk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Polyfosfoaat (polifosfoaat) bindt kalkdeeltjes en verandert hun kristalstructuur zodat ze minder kleven aan leidingen en verwarmingselementen. Het is een anti-kalkbehandeling, geen ontharding: het calcium blijft in het water. Effectief ter bescherming van boilers en warmtewisselaars. Wordt ook gebruikt in combi-filters vóór koffiezetapparaten en keukenapparaten. Goedkoop en onderhoudsarm alternatief voor volledige ionenwisseling.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Harde water: wat is waterhardheid en wat doet het?',
  description: 'Waterhardheid in Nederland uitgelegd: calcium en magnesium, schaal in °dH, regionale verdeling, huishoudelijke effecten en oplossingen zoals waterontharder en osmose.',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  url: 'https://waterfilterplatform.nl/drinkwater/hardheid',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function DrinkwaterHardheidPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Drinkwater', item: 'https://waterfilterplatform.nl/drinkwater' },
              { '@type': 'ListItem', position: 3, name: 'Waterhardheid', item: 'https://waterfilterplatform.nl/drinkwater/hardheid' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/drinkwater" className="hover:underline">Drinkwater</a> &rsaquo;{' '}
          <span>Waterhardheid</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Hard water: wat is waterhardheid en wat doet het?
        </h1>

        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#003F5C] mb-1">Kort antwoord</p>
          <p className="text-gray-700 text-sm">
            Waterhardheid is de hoeveelheid opgelost calcium en magnesium in water, gemeten in °dH. In Nederland varieert dit van 4°dH (Friesland) tot 28°dH (Zuid-Limburg). Hard water is niet ongezond — de WHO stelt het cardioprotectief — maar veroorzaakt kalkafzetting, kortere apparaatlevensduur en hogere energiekosten. Een waterontharder of osmosefilter lost dit op.
          </p>
        </div>

        <CTABanner context="waterhardheid" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is waterhardheid?
        </h2>
        <p className="text-gray-700 mb-4">
          Waterhardheid is de concentratie opgeloste calcium (Ca²⁺) en magnesium (Mg²⁺) ionen in drinkwater. Deze mineralen lossen op wanneer regenwater door kalksteenlagen in de bodem sijpelt. Water dat door kalkhoudende gronden zoals mergel of krijt stroomt, neemt meer calcium op en wordt hard.
        </p>
        <p className="text-gray-700 mb-4">
          Waterhardheid wordt uitgedrukt in meerdere eenheden. In Nederland is de graden Duitse hardheid (°dH) het meest gangbaar:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Eenheid</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Zacht (&lt;8°dH)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Middelhard (8–15°dH)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Hard (15–20°dH)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Zeer hard (&gt;20°dH)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">°dH</td>
                <td className="border border-gray-300 px-3 py-2">&lt;8</td>
                <td className="border border-gray-300 px-3 py-2">8–15</td>
                <td className="border border-gray-300 px-3 py-2">15–20</td>
                <td className="border border-gray-300 px-3 py-2">&gt;20</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">mmol/L</td>
                <td className="border border-gray-300 px-3 py-2">&lt;1,4</td>
                <td className="border border-gray-300 px-3 py-2">1,4–2,7</td>
                <td className="border border-gray-300 px-3 py-2">2,7–3,6</td>
                <td className="border border-gray-300 px-3 py-2">&gt;3,6</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">mg/L CaCO₃</td>
                <td className="border border-gray-300 px-3 py-2">&lt;142</td>
                <td className="border border-gray-300 px-3 py-2">142–267</td>
                <td className="border border-gray-300 px-3 py-2">267–356</td>
                <td className="border border-gray-300 px-3 py-2">&gt;356</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheid per regio in Nederland
        </h2>
        <p className="text-gray-700 mb-4">
          De waterhardheid in Nederland verschilt aanzienlijk per regio, afhankelijk van de bodemsamenstelling en de gebruikte waterbron (grondwater vs. rivierwater):
        </p>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold text-[#003F5C]">Zuid-Limburg</h3>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">25–30°dH — Zeer hard</span>
            </div>
            <p className="text-gray-700 text-sm">
              Het hardste water van Nederland. Mergel- en kalksteenbodem in het heuvelland van Zuid-Limburg zorgt voor extreem hoge calciumconcentraties. Maastricht, Valkenburg en omgeving hebben hardheidswaarden van 25–30°dH. Kalkproblemen in huishoudens zijn hier het meest uitgesproken.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold text-[#003F5C]">Zeeland (kustgebieden)</h3>
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-semibold">15–20°dH — Hard</span>
            </div>
            <p className="text-gray-700 text-sm">
              Zeeuwse kustgebieden hebben hard water door de schelpenrijke, kalkrijke kleibodem. Middelburg, Vlissingen en Goes vallen in de harde categorie. Ook delen van West-Noord-Brabant vallen in dit bereik.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold text-[#003F5C]">Randstad (Amsterdam, Den Haag, Rotterdam)</h3>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-semibold">10–15°dH — Middelhard</span>
            </div>
            <p className="text-gray-700 text-sm">
              De Randstad heeft overwegend middelhard water. Amsterdam gebruikt deels duinwater (gefilterd en iets harder), Rotterdam en Den Haag gebruik Maas- en Rijntakewater. Kalkvorming is zichtbaar maar minder ernstig dan in Limburg.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold text-[#003F5C]">Gelderland, Overijssel (Oost-Nederland)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">5–10°dH — Zacht tot middelhard</span>
            </div>
            <p className="text-gray-700 text-sm">
              Zandgronden in Gelderland en Overijssel geven relatief zacht water. Nijmegen en Arnhem hebben harder water dan de Veluwerand door gebruik van Rijnwater. De Achterhoek heeft overwegend zacht grondwater.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold text-[#003F5C]">Friesland, Drenthe, Groningen</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">4–8°dH — Zacht</span>
            </div>
            <p className="text-gray-700 text-sm">
              Het zachtste leidingwater van Nederland. Veen- en zandgronden in het noorden bevatten weinig kalk. Kalkproblemen spelen hier nauwelijks. Waterverzachters zijn in deze regio weinig zinvol.
            </p>
          </div>
        </div>

        <p className="text-gray-700 mb-6">
          Voor de exacte hardheid in uw gemeente, zie{' '}
          <a href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid per gemeente</a> — uw drinkwaterbedrijf publiceert altijd de exacte waarde voor uw postcodegebied.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidseffecten van hard water
        </h2>
        <p className="text-gray-700 mb-4">
          De WHO is duidelijk: hard water is niet schadelijk voor de gezondheid. Calcium en magnesium in drinkwater zijn essentiële mineralen die bijdragen aan de dagelijkse behoefte:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Calcium (Ca²⁺):</strong> Bijdrage aan botopbouw, spierfunctie en zenuwgeleiding. Aanbevolen dagelijkse inname: 800–1.200 mg. Hard water (20°dH) levert circa 80–120 mg calcium per liter.</li>
          <li><strong>Magnesium (Mg²⁺):</strong> Betrokken bij meer dan 300 enzymatische reacties. Aanbevolen inname: 300–400 mg/dag. Hard water levert 10–40 mg per liter.</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Epidemiologisch onderzoek suggereert een <strong>cardioprotectief effect</strong> van hard water: mensen in gebieden met hard water hebben iets lagere sterftecijfers aan hart- en vaatziekten vergeleken met zachte watergebieden, wanneer gecorrigeerd voor andere factoren. De WHO erkent dit verband in haar richtlijnen.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Let op bij waterverzachting:</strong> Een ionenwisselaar vervangt calcium en magnesium door natrium. Wie volledig onthard water drinkt, mist de mineraaltoevoer via water. Dit is geen acuut gezondheidsrisico voor gezonde volwassenen, maar zuigelingen en mensen met natriumbeperking moeten voorzichtig zijn.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Huishoudelijke effecten van hard water
        </h2>
        <p className="text-gray-700 mb-4">
          Hoewel hard water geen gezondheidsrisico vormt, heeft het significante praktische gevolgen voor het huishouden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Kalkaanslag op waterkokers en koffiezetapparaten:</strong> Zichtbaar wit kalk, verminderde smaak van thee/koffie, verkorte levensduur van apparaten</li>
          <li><strong>Verstopte douchekoppen:</strong> Kalkafzetting vernauwt de gaatjes en vermindert de waterdruk</li>
          <li><strong>Kalkkorsten op kranen en sanitair:</strong> Harder te reinigen dan zeeprest; speciale ontkalkingsproducten nodig</li>
          <li><strong>Strepen en waas op vaat:</strong> Witte films op glazen en bestek na de vaatwasser</li>
          <li><strong>Verminderde schuimvorming van zeep:</strong> Meer shampoo, zeep en wasmiddel nodig voor hetzelfde reinigingseffect</li>
          <li><strong>Kalkafzetting op verwarmingselementen:</strong> Hogere energiekosten (zie hieronder)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De kosten van hard water
        </h2>
        <p className="text-gray-700 mb-4">
          Hard water heeft directe financiële gevolgen. De belangrijkste kostenposten:
        </p>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Energieverbruik verwarmingselementen</h3>
            <p className="text-gray-700 text-sm">
              Per 1 mm kalkafzetting op een verwarmingselement (boiler, geiser, warmwaterboiler) stijgt het energieverbruik met circa 12%. Bij 3 mm kalk — wat in een jaar kan opbouwen in een harde waterzone — is het energieverbruik al 30–40% hoger. Voor een gemiddeld huishouden met gasboiler kost dit €80–150 per jaar extra.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Verkorte apparaatlevensduur</h3>
            <p className="text-gray-700 text-sm">
              Boilers in harde waterzones gaan gemiddeld 30% korter mee dan in zachte zones. Een CV-ketel die normaal 15 jaar meegaat, haalt in een hard watergebied zonder ontharting misschien 10–11 jaar. Wasmachines en vaatwassers kennen vergelijkbare kortere levensduur door kalkafzetting op pompen en verwarmingselementen.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Hogere verbruikskosten</h3>
            <p className="text-gray-700 text-sm">
              In hard water reageert zeep minder goed: meer wasmiddel, shampoo en afwasmiddel nodig. Studies schatten een 10–20% hogere dosering in harde waterzones. Ontkalkingstabletten, filters voor koffiezetapparaten en ontkalkers voor waterkokers zijn extra kostenposten.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Oplossingen voor hard water
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Waterontharder (ionenwisselaar)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Meest effectief whole-house</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Een ionenwisselaar vervangt calcium- en magnesiumionen door natriumionen via hars. Het water wordt volledig onthard (typisch 0–4°dH). Vereist periodieke regeneratie met zout. Ideaal voor hele-huis toepassing: beschermt boiler, CV-ketel, wasmachine en vaatwasser. Meer informatie over waterontharders op onze{' '}
              <a href="/waterontharder" className="text-[#005F8A] underline">waterontharder vergelijking</a>.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Hardheid: ✓ 90–100% verwijdering</span>
              <span>Kosten: €800–2.000 installatie</span>
              <span>Onderhoud: zout bijvullen + regeneratie</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Waterontkalker / anti-kalkbehandeling</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Magneet-ontkalkers, elektronische ontkalkers en polyfosfoaatdosering veranderen de kristalstructuur van kalk zodat het minder aankoekt op oppervlakken. Ze verwijderen calcium en magnesium niet uit het water — de hardheid blijft. Effectiviteit is debatable en minder goed onderbouwd dan ionenwisseling. Goedkoper alternatief voor lichte kalkreductie.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Hardheid: ± (structuurverandering)</span>
              <span>Kosten: €100–500</span>
              <span>Onderhoud: laag</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Omgekeerde osmose (keuken)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Een osmosefilter verwijdert 95–99% van calcium en magnesium. Het geproduceerde water heeft vrijwel 0°dH — te zacht voor rechtstreeks drinken. Goede osmosesystemen hebben een remineralisatiefilter. Osmose is geen whole-house oplossing: het filtert alleen het drinkwater (keukenafname). Boilers en wasmachines worden niet beschermd.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Hardheid drinkwater: ✓ 95–99%</span>
              <span>Kosten: €300–800</span>
              <span>Onderhoud: jaarlijks patronen</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Polyfosfoaat-dosering</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Polyfosfoaat bindt calciumionen en verandert de kristalvorm van kalk van calciet naar aragoniet — een vorm die minder kleverig is. Wordt gedoseerd in het leidingnet vóór boilers en keukenapparaten. Eenvoudig te installeren, lage kosten, geen elektriciteit nodig. Effectief ter bescherming van verwarmingselementen, maar geen echte ontharding.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Kalkbescherming: ✓ goed</span>
              <span>Kosten: €80–200</span>
              <span>Onderhoud: navullen granulaat</span>
            </div>
          </div>
        </div>

        <p className="text-gray-700 mb-6">
          Meer details over ontharting vindt u op onze pagina&apos;s over{' '}
          <a href="/waterontharder" className="text-[#005F8A] underline">waterontharders vergelijken</a> en{' '}
          <a href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid per gemeente</a>.
        </p>

        <CTABanner context="waterhardheid" />

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
          <a href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid per gemeente</a>,{' '}
          <a href="/waterontharder" className="text-[#005F8A] underline">waterontharder vergelijken</a> en{' '}
          <a href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose waterfilter</a>.
        </p>
      </main>
    </>
  );
}
