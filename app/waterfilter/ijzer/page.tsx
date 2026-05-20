import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'IJzer in water filteren: bruine vlekken en metaalsmaak oplossen',
  description: 'IJzer in water: bruine vlekken, metaalsmaak, roestwater in Brabant en Gelderland. Welk waterfilter verwijdert ijzer het best? Vergelijking van ijzerfilters.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/ijzer' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waarom is mijn kraanwater bruin of oranje?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bruin of oranje water wijst op ferrisch ijzer (Fe³⁺) — opgelost ijzer dat is geoxideerd en neergeslagen als roestdeeltjes. Dit kan komen van oude ijzeren leidingen in uw woning of distributienet, of van grondwater met hoog ijzergehalte (privéput). Laat bij de eerste bruine kleur het water even doorlopen; blijft het probleem, dan is een ijzerfilter nodig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen ferreus ijzer (Fe²⁺) en ferrisch ijzer (Fe³⁺)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ferreus ijzer (Fe²⁺) is opgelost in water en onzichtbaar — het water ziet er helder uit maar smaakt metaalachtig. Na contact met lucht oxideert het naar ferrisch ijzer (Fe³⁺) en wordt het oranje-bruin en troebel. Dit is waarom water uit de kraan eerst helder lijkt maar in een glas bruinig wordt na even staan.',
      },
    },
    {
      '@type': 'Question',
      name: 'In welke Nederlandse regio\'s komt ijzer in grondwater voor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IJzer in grondwater is het meest prevalent in zandige grondgebieden: Noord-Brabant, Gelderland, Drenthe en Friesland. Het ijzer zit van nature in de bodem en lost op in zuurstofarme grondlagen. Privéputten in deze gebieden hebben vaker hoog ijzergehalte. Leidingwater van waterleidingbedrijven is altijd voorbehandeld en ijzerarm (< 0,05 mg/L).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is ijzer in drinkwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IJzer is op lage niveaus niet toxisch — het is een essentieel spoorelement. De WHO-grenswaarde van 0,3 mg/L (en EU-norm 0,2 mg/L) is een esthetische norm, niet een toxicologische. Boven 0,3 mg/L treedt metaalsmaak op, oranje vlekken op sanitair, en beschadiging van wasmachines en vaatwassers. Chronisch hoge ijzerinname (>20 mg/dag) via water is wel een aandachtspunt maar komt zelden voor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk waterfilter verwijdert ijzer het best?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De beste filterkeuze hangt af van de ijzervorm. Voor ferreus ijzer (opgelost) is een birm-filter of mangaanzeolietfilter het meest effectief: het oxideert Fe²⁺ naar Fe³⁺ en filtert de vlokken. Voor ferrisch ijzer (deeltjes) volstaat een sedimentfilter (5 micron of fijner). Een osmosefilter verwijdert opgelost ijzer voor 90–95%. Combinatiesystemen pakken beide ijzervormen aan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe weet ik hoeveel ijzer er in mijn water zit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visueel: bruin/oranje water of vlekken op wastafel en toilet wijzen op Fe³⁺ ≥ 0,3 mg/L. Voor exacte meting: gebruik een ijzer-testkit (colorimetrisch, €15–30) of stuur een watermonster op naar een gecertificeerd laboratorium. Bewoners van privéputten in risicoregio\'s (Brabant, Gelderland) wordt jaarlijkse test aanbevolen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een waterverzachter ook ijzer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een ionenwisselaar (waterverzachter) verwijdert opgelost ferreus ijzer (Fe²⁺) deels, maar is hier niet voor ontworpen. Hoge ijzerconcentraties beschadigen het hars van een waterverzachter door ijzerfouling. Installeer altijd een ijzerfilter vóór een waterverzachter als het ijzergehalte boven 0,05 mg/L ligt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen ijzer in gemeentewater en privéputwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gemeentelijk leidingwater is altijd voorbewerktt en bevat vrijwel geen ijzer (< 0,05 mg/L). Als u bruinig kraanwater heeft met gemeenteaansluiting, ligt de oorzaak doorgaans in roestende leidingen in uw eigen woning (met name oudere, voor 1960 gebouwde huizen met ijzeren leidingen). Bij een privéput is het grondwater zelf de bron en is een actief ijzerfilter noodzakelijk.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'IJzer in water filteren: bruine vlekken en metaalsmaak oplossen',
  description: 'IJzer in water: bruine vlekken, metaalsmaak, roestwater in Brabant en Gelderland. Welk waterfilter verwijdert ijzer het best?',
  datePublished: '2026-04-08',
  dateModified: '2026-04-08',
  url: 'https://waterfilterplatform.nl/waterfilter/ijzer',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterIjzerPage() {
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
              { '@type': 'ListItem', position: 3, name: 'IJzer', item: 'https://waterfilterplatform.nl/waterfilter/ijzer' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterfilter" className="hover:underline">Waterfilter</a> &rsaquo;{' '}
          <span>IJzer</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          IJzer in water filteren: bruine vlekken en metaalsmaak oplossen
        </h1>

        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#003F5C] mb-1">Kort antwoord</p>
          <p className="text-gray-700 text-sm">
            Bruin water, oranje vlekken en metaalsmaak wijzen op ijzer. Opgelost ijzer (Fe²⁺) vereist een oxidatiefilter (birm of mangaanzeoliet); zichtbaar bruin water (Fe³⁺) is met een sedimentfilter te behandelen. Osmosefilters werken ook voor opgelost ijzer. Privéputten in Brabant, Gelderland en Friesland hebben het hoogste risico.
          </p>
        </div>

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waar komt ijzer in water vandaan?
        </h2>
        <p className="text-gray-700 mb-4">
          IJzer is het vierde meest voorkomende element in de aardkorst. Het lost op in grondwater in zuurstofarm milieu en bereikt zo privéputten en diepe grondwaterbronnen. Er zijn twee mogelijke bronnen in de Nederlandse context:
        </p>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Grondwater (privéputten)</h3>
            <p className="text-gray-700 text-sm">In zandige, zuurstofarme grondlagen lost ijzer op uit mineralen in de bodem. Risicogebieden in Nederland: <strong>Noord-Brabant, Gelderland (Veluwe/Achterhoek), Drenthe, Friesland</strong>. Concentraties kunnen oplopen tot 5–20 mg/L — ver boven de WHO-norm van 0,3 mg/L. Bij privéputten is periodieke wateranalyse noodzakelijk.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Oude ijzeren leidingen</h3>
            <p className="text-gray-700 text-sm">Woningen gebouwd vóór 1960 hebben vaak nog ijzeren leidingen. Corrosie van deze leidingen geeft bruinig water, vooral na stilstand (eerste ochtend na langere afwezigheid). Oplossing: laat water even doorlopen en vervang op termijn de leidingen. Een sedimentfilter filtert de roestdeeltjes.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Twee vormen van ijzer in water
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Eigenschap</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Ferreus Fe²⁺ (opgelost)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Ferrisch Fe³⁺ (deeltjes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Uiterlijk water</td>
                <td className="border border-gray-300 px-3 py-2">Helder uit kraan</td>
                <td className="border border-gray-300 px-3 py-2">Direct bruin/oranje</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Na blootstelling aan lucht</td>
                <td className="border border-gray-300 px-3 py-2">Wordt bruin/oranje</td>
                <td className="border border-gray-300 px-3 py-2">Blijft bruin</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Smaak</td>
                <td className="border border-gray-300 px-3 py-2">Metaalachtig</td>
                <td className="border border-gray-300 px-3 py-2">Metaalachtig, troebel</td>
              </tr>
              <tr className="border-gray-50">
                <td className="border border-gray-300 px-3 py-2">Bron</td>
                <td className="border border-gray-300 px-3 py-2">Grondwater, put</td>
                <td className="border border-gray-300 px-3 py-2">Roestige leidingen, put</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Filtertype</td>
                <td className="border border-gray-300 px-3 py-2">Oxidatiefilter, osmose</td>
                <td className="border border-gray-300 px-3 py-2">Sedimentfilter (5 µm)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidseffecten en detectie
        </h2>
        <p className="text-gray-700 mb-4">
          De WHO-richtwaarde voor ijzer is 0,3 mg/L; de EU-norm is 0,2 mg/L. Dit zijn esthetische normen — boven dit niveau treden smaak- en kleurproblemen op, geen directe toxiciteit. IJzer is een essentieel spoorelement en matig verhoogde inname via water is voor de meeste mensen niet schadelijk.
        </p>
        <p className="text-gray-700 mb-4">
          Praktische problemen bij te hoog ijzergehalte:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Oranje/bruine vlekken</strong> op wastafel, toilet en bad</li>
          <li><strong>Roestvlekken in de wasmachine</strong> — beschadigt witte kleding</li>
          <li><strong>Metaalsmaak</strong> en onaangename geur</li>
          <li><strong>Bacteriële groei:</strong> ijzerbacteriën (Gallionella, Leptothrix) groeien op ijzer en vormen slijmlagen in leidingen</li>
          <li><strong>Beschadiging van apparaten:</strong> koffiemachines, vaatwassers en boilers lijden sneller</li>
        </ul>
        <p className="text-gray-700 mb-6">
          <strong>Detectie:</strong> Visuele inspectie (oranje vlekken in toilet, roestvlekken op kranen) geeft een eerste indicatie. Een colorimetrische testkit (€15–25) geeft binnen minuten een numerieke waarde. Voor privéputten is een laboratoriumanalyse bij een gecertificeerd lab aan te bevelen (€50–100).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filteropties voor ijzer
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Birm- of mangaanzeolietfilter</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Best voor Fe²⁺</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Birm (een mangaanoxide-gecoat medium) oxideert opgelost ferreus ijzer (Fe²⁺) katalytisch naar ferrisch ijzer (Fe³⁺) en vangt de vlokken op. Effectief voor ijzerconcentraties tot 15 mg/L. Vereist zuurstofrijk water (DO &gt; 15% verzadiging) voor goede werking. Mangaanzeoliet werkt vergelijkbaar en kan ook mangaan verwijderen.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>Fe²⁺: ✓ 90–99%</span>
              <span>Fe³⁺: ✓</span>
              <span>Kosten: €400–1.200 (installatie)</span>
              <span>Onderhoud: terugspoelen</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Sedimentfilter (5 of 1 micron)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Best voor Fe³⁺</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Ferrisch ijzer (Fe³⁺) vormt vaste roestdeeltjes die mechanisch gefilterd kunnen worden. Een 5-micronfilter verwijdert grotere vlokken; een 1-micronfilter is effectiever bij fijne deeltjes. Sedimentfilters verwijderen géén opgelost ijzer — als het water helder uit de kraan komt maar bruin wordt na staan, heeft u een oxidatiefilter nodig.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>Fe²⁺: ✗</span>
              <span>Fe³⁺: ✓</span>
              <span>Kosten: €20–60 (patroon)</span>
              <span>Onderhoud: maandelijks vervangen bij hoog ijzer</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Omgekeerde osmose (RO)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Een osmosefilter verwijdert opgelost ferreus ijzer voor 90–95% via het semipermeabele membraan. Het is echter geen primaire ijzerfilter: ferrisch ijzer (roestdeeltjes) beschadigt het membraan. Installeer altijd een sedimentprefilter (5 µm) vóór een osmosesysteem bij ijzerhoudend water. RO is ideaal als u naast ijzer ook andere verontreinigingen (nitraat, hardheid, PFAS) wilt aanpakken.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>Fe²⁺: ✓ 90–95%</span>
              <span>Fe³⁺: via prefilter</span>
              <span>Kosten: €300–800 systeem</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Ionenwisselaar (waterverzachter)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Waterverzachters verwijderen opgelost Fe²⁺ deels via ionenwisseling, maar zijn hier niet voor geoptimaliseerd. Bij concentraties boven 0,05 mg/L treedt ijzerfouling op in het hars, wat de levensduur verkort en de werking verslechtert. Een ijzerfilter vóór een waterverzachter is noodzakelijk bij hoog ijzergehalte.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>Fe²⁺: ± (laag ijzer)</span>
              <span>Fe³⁺: ✗</span>
              <span>Aanbeveling: combineer met ijzerfilter</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: filteropties voor ijzer
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Fe²⁺ opgelost</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Fe³⁺ deeltjes</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Onderhoud</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Doorstroming</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Birm/mangaanzeoliet</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ 90–99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓</td>
                <td className="border border-gray-300 px-3 py-2">€400–1.200</td>
                <td className="border border-gray-300 px-3 py-2">Terugspoelen</td>
                <td className="border border-gray-300 px-3 py-2">Hoog</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Sedimentfilter</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓</td>
                <td className="border border-gray-300 px-3 py-2">€20–60/jaar</td>
                <td className="border border-gray-300 px-3 py-2">Maandelijks patroon</td>
                <td className="border border-gray-300 px-3 py-2">Hoog</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Osmosefilter</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ 90–95%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">± (via prefilter)</td>
                <td className="border border-gray-300 px-3 py-2">€300–800</td>
                <td className="border border-gray-300 px-3 py-2">Jaarlijks patroon</td>
                <td className="border border-gray-300 px-3 py-2">Laag (tank)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Waterverzachter</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">± (laag Fe)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
                <td className="border border-gray-300 px-3 py-2">€800–1.500</td>
                <td className="border border-gray-300 px-3 py-2">Zout bijvullen</td>
                <td className="border border-gray-300 px-3 py-2">Hoog</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Combinatiesystemen voor putwater
        </h2>
        <p className="text-gray-700 mb-4">
          Bij privéputten in risicogebieden zoals Noord-Brabant of Drenthe zijn combinatiesystemen de meest complete aanpak. Een typische waterzuiveringsketen voor putwater met hoog ijzergehalte:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Sedimentprefilter (50–100 µm):</strong> Verwijdert grotere deeltjes en zandkorrels.</li>
          <li><strong>IJzerfilter (birm of mangaanzeoliet):</strong> Oxideert en filtert opgelost en particulair ijzer, eventueel ook mangaan.</li>
          <li><strong>Actief koolfilter:</strong> Verwijdert geur, kleur en organische stoffen die vaak samen met ijzer voorkomen in grondwater.</li>
          <li><strong>UV-lamp:</strong> Extra bacteriologische beveiliging voor putwater, waar geen chloorrestwerking is.</li>
          <li><strong>Optioneel: osmosefilter</strong> voor drinkwater (keuken), als nitraat of andere verontreinigingen ook aanwezig zijn.</li>
        </ol>
        <p className="text-gray-700 mb-6">
          Meer informatie over waterfilters voor specifieke verontreinigingen vindt u op onze pagina over{' '}
          <a href="/drinkwater/nitraat" className="text-[#005F8A] underline">nitraat in drinkwater</a>. Voor een volledige vergelijking van filtersoorten, zie{' '}
          <a href="/waterfilter/soorten" className="text-[#005F8A] underline">waterfilter soorten vergelijken</a>.
        </p>

        <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/stoffen-in-drinkwater/zware-metalen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Zware metalen in drinkwater</h3>
            <p className="text-sm text-gray-600">Welke zware metalen in drinkwater voorkomen, wat de risicos zijn en hoe je ze verwijdert.</p>
          </a>
          <a href="/waterfilter/mangaan" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter mangaan</h3>
            <p className="text-sm text-gray-600">Mangaan in water filteren: zwarte vlekken, oorzaken en welke filters mangaan effectief verwijderen.</p>
          </a>
          <a href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose filtertechniek</h3>
            <p className="text-sm text-gray-600">Hoe omgekeerde osmose ijzer en andere opgeloste stoffen uit drinkwater verwijdert.</p>
          </a>
          <a href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</h3>
            <p className="text-sm text-gray-600">De EU- en WHO-normen voor ijzer en andere stoffen in drinkwater en wat ze betekenen.</p>
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
          Zie ook: <a href="/waterfilter/soorten" className="text-[#005F8A] underline">vergelijking van waterfiltersoorten</a> en <a href="/drinkwater/nitraat" className="text-[#005F8A] underline">nitraat in drinkwater filteren</a>.
        </p>
      </main>
    </>
  );
}
