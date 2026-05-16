import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Mineralen in osmose water: remineralisatie uitgelegd',
  description: 'Osmosewater mist mineralen — maar is dat een probleem? Alles over remineralisatie, wat de WHO zegt, smaakverbetering en mineraalgehalte vergeleken met kraanwater.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/mineralen' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welke mineralen verwijdert een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een omgekeerde-osmosefilter verwijdert 95–99% van alle opgeloste stoffen: calcium, magnesium, kalium, natrium, fluoride, maar ook lood, nitraat, PFAS en bacteriën. Het membraan laat alleen watermoleculen door. Het resulterende water heeft een TDS van 5–20 mg/L, tegenover 150–400 mg/L in normaal leidingwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is het ongezond om mineraalarm osmosewater te drinken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, niet bij een normaal gevarieerd voedingspatroon. De WHO heeft in het rapport "Nutrients in Drinking Water" (2005) geconcludeerd dat drinkwater gemiddeld 5–20% van de dagelijkse calcium- en magnesiuminname levert, afhankelijk van de waterhardheid. Dit aandeel is gemakkelijk te compenseren via voeding. Er is geen bewijs dat langdurig gebruik van mineraalarm water gezondheidsschade veroorzaakt bij gevarieerde voeding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom smaakt osmosewater vlak of zuur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater heeft geen buffercapaciteit en lost gemakkelijk CO₂ op uit de lucht, waardoor de pH daalt naar 6,0–6,5. Dit geeft een "plat" of licht zuur gevoel. Mineralen zoals calcium en magnesium geven water de ronde, prettige smaak die we gewend zijn. Remineralisatie herstelt de pH naar 7,0–7,5 en verbetert de smaak aanzienlijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is remineralisatie van osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Remineralisatie is het terugvoegen van mineralen aan osmosewater via een nafilter. Gangbare methoden zijn calcietpatronen (voegen calcium en magnesium toe via oplosbaar calciumcarbonaat), alkaline filters (verhogen de pH), en mineraalstenen (plaatsen in een karaf). Een remineralisatiefilter verhoogt de TDS van 10 naar 50–100 mg/L en de pH van 6,2 naar 7,0–8,0.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is osmosewater goed voor koffie en thee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater is uitstekend voor koffie en thee dankzij de afwezigheid van chloor en kalk. Kalk (hardheid) beïnvloedt de extractie negatief bij espresso. Echter, te zacht (TDS < 20) of te zuur water geeft een scherpe, wrange smaak. Barista\'s gebruiken licht geremineraliseerd osmosewater (TDS 60–120 mg/L, pH 7,0–7,5) voor de beste extractie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel calcium en magnesium zit er in remineralisatiewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een goed afgesteld remineralisatiefilter voegt 30–60 mg/L calcium en 10–20 mg/L magnesium toe aan osmosewater. Dit is vergelijkbaar met licht mineraalwater. Ter vergelijking: Nederlands kraanwater bevat gemiddeld 50–100 mg/L calcium en 5–20 mg/L magnesium, afhankelijk van de regio.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik een remineralisatiefilter kopen bij een osmosesysteem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Remineralisatie is geen medische noodzaak voor gezonde volwassenen met een gevarieerd dieet, maar wordt aanbevolen voor: (1) smaakverbetering, (2) gebruik bij koffiezetapparaten en ketels, (3) babyvoeding, en (4) mensen die weinig calcium uit voeding binnenkrijgen. Veel moderne osmosesystemen hebben een ingebouwde remineralisatiestap.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert osmosewater ook fluoride?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, osmosefilters verwijderen 90–95% van fluoride uit water. In Nederland wordt fluoride niet meer toegevoegd aan drinkwater (dit is in 1973 gestopt), dus fluoridegehaltes in leidingwater zijn al laag (0,1–0,3 mg/L). Tandartsen adviseren dan ook dit te compenseren met fluoridehoudende tandpasta, niet via drinkwater.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Mineralen in osmose water: remineralisatie uitgelegd',
  description: 'Osmosewater mist mineralen — maar is dat een probleem? Alles over remineralisatie, wat de WHO zegt, smaakverbetering en mineraalgehalte vergeleken met kraanwater.',
  datePublished: '2026-04-08',
  dateModified: '2026-04-08',
  url: 'https://waterfilterplatform.nl/osmose-water/mineralen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseMineralenPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Osmose water', item: 'https://waterfilterplatform.nl/osmose-water' },
              { '@type': 'ListItem', position: 3, name: 'Mineralen', item: 'https://waterfilterplatform.nl/osmose-water/mineralen' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/osmose-water" className="hover:underline">Osmose water</a> &rsaquo;{' '}
          <span>Mineralen</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Mineralen in osmose water: remineralisatie uitgelegd
        </h1>

        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#003F5C] mb-1">Kort antwoord</p>
          <p className="text-gray-700 text-sm">
            Osmosewater bevat vrijwel geen mineralen (calcium, magnesium, kalium). Dit is geen gezondheidsrisico bij gevarieerde voeding — de WHO bevestigt dit. Remineralisatie verbetert vooral de smaak en is aan te raden voor koffieapparaten en babyvoeding.
          </p>
        </div>

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat verwijdert een osmosefilter?
        </h2>
        <p className="text-gray-700 mb-4">
          Een <a href="/osmose-water/gezond" className="text-[#005F8A] underline">omgekeerde-osmosefilter</a> (RO) werkt via een semipermeabel membraan met poriën van 0,0001 micron. Alleen watermoleculen passeren; ionen, zouten, metalen en organische stoffen blijven achter. Het systeem verwijdert daardoor:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Calcium (Ca²⁺):</strong> 95–99% verwijderd. Calcium zorgt voor waterhardheid en heeft een minerale, licht bittere smaak.</li>
          <li><strong>Magnesium (Mg²⁺):</strong> 95–99% verwijderd. Medebepalend voor de smaak en kalkvorming.</li>
          <li><strong>Kalium (K⁺):</strong> 95–98% verwijderd. Speelt een rol in hartfunctie en zenuwstelsel.</li>
          <li><strong>Natrium (Na⁺):</strong> 90–95% verwijderd. Relevant voor mensen met natriumbeperking.</li>
          <li><strong>Fluoride (F⁻):</strong> 90–95% verwijderd. In Nederland geen probleem (fluoride niet meer toegevoegd aan leidingwater).</li>
          <li><strong>Lood, PFAS, nitraat, bacteriën:</strong> Eveneens sterk gereduceerd — het echte voordeel van osmosfiltratie.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Het resulterende water heeft een TDS (totaal opgeloste stoffen) van 5–20 mg/L. Nederlands leidingwater heeft doorgaans 150–400 mg/L TDS, afhankelijk van de hardheid van de regio.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat zegt de wetenschap over mineralen en gezondheid?
        </h2>
        <p className="text-gray-700 mb-4">
          De WHO publiceerde in 2005 het rapport <em>&ldquo;Nutrients in Drinking Water&rdquo;</em> dat het meest aangehaalde wetenschappelijke document is over dit onderwerp. De hoofdconclusies:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Drinkwater levert gemiddeld <strong>5–20% van de dagelijkse calcium</strong> en <strong>4–8% van de magnesium</strong>inname bij hard leidingwater.</li>
          <li>Er is <strong>geen bewijs</strong> dat langdurig drinken van gedemineraliseerd water gezondheidsschade veroorzaakt bij gevarieerde voeding.</li>
          <li>De WHO beschrijft voorzichtig dat extreem zacht water (TDS &lt; 30 mg/L) mogelijk negatieve effecten kan hebben bij langdurig gebruik in combinatie met een slecht voedingspatroon — maar dit is geen vastgestelde causale relatie.</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Nieuwere meta-analyses (2015–2023) bevestigen het WHO-standpunt: mineralen in water zijn een aanvulling, geen primaire bron. Mensen die gevarieerd eten — groenten, zuivel, noten, volkoren granen — krijgen ruimschoots calcium en magnesium via voeding.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Praktische conclusie:</strong> Remineralisatie is geen medische noodzaak, maar heeft voordelen voor smaak, keukenapparaten en gemoedsrust.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Remineralisatiemethoden vergeleken
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Mineraalsteentje in karaf</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Een calciet- of toermalijnsteen in een karaf of fles lost langzaam op en voegt calcium en magnesium toe. Eenvoudig, goedkoop en geen installatie nodig. Nadeel: moeilijk te doseren, inconsistente mineraaltoevoeging en vereist periodiek vervangen.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>Kosten: €10–25 eenmalig</span>
              <span>Controle: laag</span>
              <span>Geschikt voor: karafgebruik</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Inline mineraalpatroon</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Populairste optie</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Een calcietpatroon wordt na het osmosemembraan geplaatst in de filterketen. Water stroomt door calciumcarbonaat, dat gecontroleerd oplost en calcium en magnesium toevoegt. De dosering is afhankelijk van de doorstroomsnelheid en de pH van het inkomende water. Resultaat: TDS stijgt naar 50–80 mg/L, pH naar 7,0–7,5.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>Kosten: €20–50 per jaar (patroon)</span>
              <span>Controle: gemiddeld</span>
              <span>Installatie: eenvoudig</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Alkaline nafilter (pH-verhoging)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Alkaline filters verhogen de pH naar 7,5–8,5 via media zoals calciet of magnesiumoxide. Ze voegen mineralen toe én neutraliseren de licht zure pH van osmosewater. Ideaal voor mensen die &ldquo;alkalisch water&rdquo; prefereren. Let op: er is geen wetenschappelijk bewijs dat alkalisch water extra gezondheidsvoordelen biedt boven normaal water.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>Kosten: €30–60 per jaar</span>
              <span>pH resultaat: 7,5–8,5</span>
              <span>Mineraaltoevoeging: laag-matig</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Geïntegreerd systeem (4-in-1 osmosekraan)</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">Meest compleet</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Moderne osmosesystemen combineren sedimentfilter, koolstofprefilter, RO-membraan en remineralisatiestap in één systeem. De remineralisatie is geoptimaliseerd voor het specifieke osmosewater en levert consistent water met 60–100 mg/L TDS en pH 7,0–7,5. Meest comfortabele en betrouwbare optie voor dagelijks gebruik.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>Kosten: €400–900 systeem</span>
              <span>Onderhoud: jaarlijks patroonwissel</span>
              <span>Controle: optimaal</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Mineraalgehalte vergeleken (mg/L)
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Watertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Calcium</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Magnesium</th>
                <th className="border border-gray-300 px-3 py-2 text-left">TDS</th>
                <th className="border border-gray-300 px-3 py-2 text-left">pH</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">NL kraanwater (gem.)</td>
                <td className="border border-gray-300 px-3 py-2">50–100</td>
                <td className="border border-gray-300 px-3 py-2">5–20</td>
                <td className="border border-gray-300 px-3 py-2">150–400</td>
                <td className="border border-gray-300 px-3 py-2">7,2–7,8</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Osmosewater (zonder)</td>
                <td className="border border-gray-300 px-3 py-2">1–3</td>
                <td className="border border-gray-300 px-3 py-2">&lt;1</td>
                <td className="border border-gray-300 px-3 py-2">5–20</td>
                <td className="border border-gray-300 px-3 py-2">6,0–6,5</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Osmosewater (met remin.)</td>
                <td className="border border-gray-300 px-3 py-2">30–60</td>
                <td className="border border-gray-300 px-3 py-2">10–20</td>
                <td className="border border-gray-300 px-3 py-2">60–100</td>
                <td className="border border-gray-300 px-3 py-2">7,0–7,5</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Spa Reine (mineraalwater)</td>
                <td className="border border-gray-300 px-3 py-2">3,5</td>
                <td className="border border-gray-300 px-3 py-2">1,3</td>
                <td className="border border-gray-300 px-3 py-2">33</td>
                <td className="border border-gray-300 px-3 py-2">6,7</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Evian (mineraalwater)</td>
                <td className="border border-gray-300 px-3 py-2">80</td>
                <td className="border border-gray-300 px-3 py-2">26</td>
                <td className="border border-gray-300 px-3 py-2">304</td>
                <td className="border border-gray-300 px-3 py-2">7,2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosewater voor koffie en thee
        </h2>
        <p className="text-gray-700 mb-4">
          Osmosewater is om meerdere redenen uitstekend voor koffie en thee. De afwezigheid van chloor elimineert ongewenste smaken. De lage hardheid voorkomt kalkaanslag in ketels en koffiezettapparaten. Kalk beïnvloedt ook de extractie: calciumionen remmen de oplosbaarheid van bepaalde aromamoleculen.
        </p>
        <p className="text-gray-700 mb-6">
          Echter: puur osmosewater (TDS &lt; 20 mg/L) geeft een scherpe, soms wrange smaak bij koffie. Professionele barista&rsquo;s en de SCA (Specialty Coffee Association) adviseren water met TDS 75–175 mg/L en een pH van 6,5–7,5. Licht geremineraliseerd osmosewater (TDS 60–120 mg/L) is daarmee de ideale keuze.
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
          Lees ook: <a href="/osmose-water/gezond" className="text-[#005F8A] underline">is osmosewater gezond?</a> en <a href="/osmose-water/remineralisatie" className="text-[#005F8A] underline">osmosewater remineraliseren — stap voor stap</a>.
        </p>
      </main>
    </>
  );
}
