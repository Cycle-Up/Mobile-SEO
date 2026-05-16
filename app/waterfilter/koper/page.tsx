import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter koper: te veel koper in drinkwater uit koperleidingen?',
  description: 'Koper in drinkwater uit koperleidingen: risico\'s, EU-norm (2 mg/L) en welke waterfilters koper effectief verwijderen. Osmose vs koolstoffilter.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/koper' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe komt koper in drinkwater terecht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Koper in drinkwater is bijna altijd afkomstig van koperleidingen in de huisinstallatie. Bij contact met water lost een kleine hoeveelheid koper op via corrosie. Dit proces verloopt sneller bij: zuur water (pH lager dan 7), zacht water (laag carbonaatgehalte), warm water en het eerste water na een periode van stilstand (nacht). Drinkwaterbedrijven leveren vrijwel geen koper — de bron zit in de woning zelf. Koperleidingen werden in Nederland massaal toegepast van de jaren 1950 tot heden en zijn nog steeds de standaard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de EU-norm voor koper in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU-drinkwaternorm voor koper is 2 mg/L (Richtlijn 2020/2184). Het Nederlandse Drinkwaterbesluit hanteert dezelfde waarde. De WHO hanteert een gezondheidskundige richtwaarde van 2 mg/L. In de praktijk bevat leidingwater in de meeste Nederlandse woningen 0,01 tot 0,3 mg/L koper, ruimschoots onder de norm. Bij specifieke risicofactoren (zuur water, nieuw gelegd koper, eerste waterafname na stilstand) kunnen piekconcentraties de norm naderen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is koper in drinkwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Koper is een essentieel sporenelement en in kleine hoeveelheden noodzakelijk voor de gezondheid. Bij concentraties tot 1-2 mg/L zijn er voor gezonde volwassenen geen gezondheidseffecten. Risicoos bij hoge koperbloostelling zijn: akute maagklachten bij inname van meer dan 3-5 mg/L; bij langdurige hoge inname lever- en nierschade. Bijzondere risicogroepen: zuigelingen (lever niet volledig ontwikkeld voor koperverwerking), personen met de ziekte van Wilson (genetische aandoening die koperopstapeling veroorzaakt) en mensen met leverziekten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn zuigelingen extra gevoelig voor koper in water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. De lever van zuigelingen (0-12 maanden) is nog niet volledig in staat koper te verwerken en uit te scheiden. De WHO en EFSA (Europese Voedselveiligheidsautoriteit) bevelen aan om bij de bereiding van flesvoeding voor zuigelingen water te gebruiken met een kopergehalte lager dan 0,1 mg/L, aanzienlijk onder de drinkwaternorm van 2 mg/L. Osmosewater (koper &lt;0,02 mg/L) is een veilige keuze voor flesvoeding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe herken ik koper in mijn drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Koper geeft bij hogere concentraties: een metaalachtige, bittere smaak; blauwe of groene verkleuringsringen in bad, wasbak of toilet (koperoxidatie); blauwgroene vlekken op sanitair. Een blauwe kleur van het water zelf is zeldzaam maar kan optreden bij extreme corrosie. Witte kalkachtige afzetting is van kalkmineralen, niet van koper. Bij twijfel: laat het water analyseren door een gecertificeerd laboratorium (&euro;20-40 voor koper alleen, &euro;60-120 voor een volledig metaalpaneel).',
      },
    },
    {
      '@type': 'Question',
      name: 'Helpt het om de kraan te laten lopen voor gebruik?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, dit is een eenvoudige en effectieve preventieve maatregel. Laat de kraan 30 seconden tot 2 minuten dorlopen voordat u drinkwater afneemt na een periode van stilstand (nacht, weekendje weg). Dit eerste water bevat de hoogste koperconcentraties vanuit de leidingwanden. Voor de bereiding van zuigelingenvoeding wordt aanbevolen altijd doorgelopen water te gebruiken en eventueel een osmosefilter toe te passen. Het dorlopen water kunt u opvangen voor plantenwater of schoonmaken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een koolstoffilter koper uit drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Standaard actieve koolstoffilters zoals Brita-filterkannen en inline koolstoffilters zijn niet effectief voor koper of andere metaalionen. Actieve kool adsorbeert organische verbindingen, chloor, geur en smaak, maar metaalionen zoals Cu2+ worden niet gebonden. Voor koper zijn ionenwisseling of omgekeerde osmose de aangewezen methoden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe effectief is omgekeerde osmose voor koper?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Omgekeerde osmose verwijdert 97 tot 99% van koper (Cu2+) uit drinkwater. Bij een inkomende concentratie van 0,3 mg/L (verhoogd maar onder de norm) daalt koper naar minder dan 0,01 mg/L in osmosewater. Dit is veilig voor alle risicogroepen inclusief zuigelingen. Osmose verwijdert naast koper ook lood, zink, cadmium, nitraat en PFAS tegelijk. Een onder-aanrecht osmosesysteem is de meest praktische oplossing voor de keuken.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter koper: te veel koper in drinkwater uit koperleidingen?',
  description: 'Koper in drinkwater uit koperleidingen: EU-norm (2 mg/L), gezondheidsrisico\'s voor zuigelingen en risicogroepen, en welke waterfilters koper effectief verwijderen.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/koper',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterKoperPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Koper', item: 'https://waterfilterplatform.nl/waterfilter/koper' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterfilter" className="hover:underline">Waterfilter</a> &rsaquo;{' '}
          <span>Koper</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterfilter koper: te veel koper in drinkwater uit koperleidingen?
        </h1>

        <QuickAnswer answer="Koper in drinkwater komt uit koperleidingen in uw eigen installatie, met name bij zuur water (pH &lt;7). EU-norm: 2 mg/L. Zuigelingen zijn extra gevoelig. Laat de kraan 2 minuten lopen na stilstand. Osmosefilter verwijdert 97-99% van koper. Koolstoffilter werkt niet voor metalen." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe komt koper in drinkwater terecht?
        </h2>
        <p className="text-gray-700 mb-4">
          Nederland heeft een groot aandeel koperleidingen in de woninginstallaties. Koper is de standaard leidingmateriaal geworden in de bouw vanaf de jaren 1950. Bij contact met water lost een kleine hoeveelheid koper op via corrosie. Dit is een normaal en in kleine hoeveelheden onschadelijk proces.
        </p>
        <p className="text-gray-700 mb-4">
          Het probleem doet zich voor wanneer de corrosiesnelheid verhoogd is door bepaalde watereigenschappen:
        </p>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Zuur water (pH lager dan 7)</h3>
            <p className="text-gray-700 text-sm">
              Bij een lage pH lost koper sneller op. Water in sommige delen van Nederland (met name zachte-watergebieden) heeft een lagere pH. Drinkwaterbedrijven corrigeren de pH, maar in de huisinstallatie kan de pH lokaal variëren. Regenwater heeft van nature een lage pH en is niet geschikt als drinkwater zonder behandeling.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Nieuw gelegd koper</h3>
            <p className="text-gray-700 text-sm">
              Nieuw koperen leidingen geven de eerste weken tot maanden hogere koperconcentraties af. Een beschermende koperoxidelaag vormt zich geleidelijk aan de binnenkant van de leidingen, waarna de koperafgifte sterk daalt. Bij renovatie of nieuwbouw is extra voorzichtigheid geboden in de beginperiode.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Stilstaand water na een nacht</h3>
            <p className="text-gray-700 text-sm">
              Het eerste water dat uit de kraan komt na een periode van stilstand (nacht, afwezigheid) heeft het langste contact gehad met de leidingwanden en bevat de hoogste koperconcentraties. Dit is het zogenaamde eerste-watereffect en is de reden waarom de kraan even moet dorlopen voor drinkwater.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Warm water en vloerverwarmingssystemen</h3>
            <p className="text-gray-700 text-sm">
              Warm water corrodering is agressiever dan koud water. Gebruik nooit warm kraanwater direct voor drinkdoeleinden of voor de bereiding van flesvoeding. Warm water staat langer in contact met koperleidingen en heeft verhoogde koperconcentraties.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm en WHO-richtwaarde
        </h2>
        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
          <ul className="text-gray-700 text-sm space-y-2">
            <li><strong>EU-drinkwaternorm (2020/2184):</strong> 2 mg/L</li>
            <li><strong>WHO-gezondheidskundige richtwaarde:</strong> 2 mg/L</li>
            <li><strong>Gemiddeld NL kraanwater:</strong> 0,01-0,3 mg/L (ver onder de norm)</li>
            <li><strong>Aanbevolen voor zuigelingenvoeding:</strong> &lt;0,1 mg/L</li>
            <li><strong>Na osmosefilter:</strong> typisch &lt;0,02 mg/L</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Risicogroepen: wie is het meest gevoelig?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor gezonde volwassenen is de koperconcentratie in Nederlands drinkwater vrijwel nooit een probleem. De volgende groepen verdienen extra aandacht:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Zuigelingen (0-12 maanden):</strong> lever nog niet volledig in staat koper te verwerken; WHO beveelt &lt;0,1 mg/L aan voor flesvoeding</li>
          <li><strong>Ziekte van Wilson:</strong> genetische stofwisselingsziekte met koperopstapeling; elke extra koperbron is riskant</li>
          <li><strong>Leveraandoeningen:</strong> verminderde koperstofwisseling; verhoogd risico bij chronisch hoge inname</li>
          <li><strong>Mensen met acute maagproblemen:</strong> koper verergert maagklachten bij hoge concentraties (&gt;3-5 mg/L)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Herkenning: blauwe vlekken en bittere smaak
        </h2>
        <p className="text-gray-700 mb-4">
          Koper in drinkwater herkent u aan:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Blauwe of blauwgroene vlekken en ringen</strong> in bad, wasbak of toiletpot — het meest kenmerkende teken</li>
          <li><strong>Metaalachtige of bittere smaak</strong> van het eerste water uit de kraan</li>
          <li><strong>Groene aanslag</strong> op armaturen en rondom kranen</li>
          <li><strong>Prikkelende smaak</strong> bij hogere concentraties (&gt;1 mg/L)</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Opmerking: witte kalkringen zijn van hardheidsmineralen (calcium/magnesium) en hebben niets met koper te maken. Oranje-bruine vlekken wijzen op ijzer.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filteropties voor koper
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Omgekeerde osmose (RO)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Beste keuze</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Osmose verwijdert 97 tot 99% van koper via het semipermeabele membraan. Een inkomende concentratie van 0,3 mg/L koper daalt naar minder dan 0,01 mg/L in het gefilterde water. Tevens effectief voor zink, lood, cadmium, nitraat, PFAS en hormonen. Ideaal voor huishoudens met zuigelingen of bewoners met de ziekte van Wilson.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Koper: ✓ 97-99%</span>
              <span>Lood: ✓ 97-99%</span>
              <span>Kosten: &euro;300-800</span>
              <span>Onderhoud: jaarlijks patronen + membraan</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Ionenwisselaar (kationenwisseling)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Koperionen (Cu&#178;&#8314;) worden uitgewisseld met natrium- of waterstofionen op het ionenwisselharshars. Effectief voor koper en andere zware metalen. Minder gangbaar als consumentenproduct voor drinkwater. Vereist periodieke regeneratie met zout. Verhoogt natriumgehalte van het water.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Koper: ✓ 90-98%</span>
              <span>Kosten: &euro;400-1.000</span>
              <span>Onderhoud: zoutregeneratie</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Actieve kool / koolstoffilter</h3>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">Niet effectief voor metalen</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Koolstoffilters verwijderen <strong>geen</strong> koper of andere metaalionen. Ze zijn effectief voor chloor, geur en smaak. Verwar de verbetering in smaak die soms wordt ervaren na een koolstoffilter niet met koperverwijdering — het is het chloor en de organische verbindingen die verwijderd worden, niet het koper.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Koper: ✗ 0%</span>
              <span>Chloor: ✓</span>
              <span>Geur/smaak: ✓</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: koperfilters
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Koper reductie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Opmerkingen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Omgekeerde osmose</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">97-99%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300-800</td>
                <td className="border border-gray-300 px-3 py-2">Aanbevolen; ook lood, zink, PFAS</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Ionenwisseling</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">90-98%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;400-1.000</td>
                <td className="border border-gray-300 px-3 py-2">Effectief; verhoogt natrium</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Actieve kool (Brita e.d.)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;20-60/jaar</td>
                <td className="border border-gray-300 px-3 py-2">Niet geschikt voor metalen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktische tips: wat u nu kunt doen
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Laat de kraan 2 minuten lopen</strong> na een nacht stilstand voordat u drinkwater afneemt — gratis en eenvoudig</li>
          <li><strong>Gebruik alleen koud water</strong> voor drinken en koken — warm water bevat hogere koperconcentraties</li>
          <li><strong>Zuigelingenvoeding:</strong> gebruik osmosewater of gefilterd water; gebruik nooit direct kraanwater zonder te dorlopen</li>
          <li><strong>Nieuwbouw of renovatie:</strong> spoel de leidingen de eerste weken intensief door</li>
          <li><strong>Test uw water</strong> als u blauwe vlekken ziet of bij een risicogroep behoort: gecertificeerde laboratoriumanalyse voor koper kost &euro;20-40</li>
        </ul>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over koper in drinkwater</h2>
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
          <a href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters</a>,{' '}
          <a href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</a>,{' '}
          <a href="/waterfilter/zink" className="text-[#005F8A] underline">zink in drinkwater</a> en{' '}
          <a href="/pfas-waterfilter" className="text-[#005F8A] underline">PFAS waterfilter</a>.
        </p>
      </main>
    </>
  );
}
