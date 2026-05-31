import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { SchemaOrg } from '@/components/SchemaOrg';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nitraat in drinkwater verlagen: oorzaken en filteroplossingen',
  description: 'Hoog nitraat in drinkwater: oorzaken (landbouw Brabant, Gelderland), EU-norm 50 mg/L, risico voor baby\'s en welke filters nitraat effectief verwijderen',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwater/nitraat-verlagen' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waarom zit er nitraat in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nitraat (NO₃⁻) in drinkwater is in Nederland voornamelijk afkomstig van landbouwuitspoeling. Intensieve veeteelt in Brabant, Gelderland en Limburg produceren grote hoeveelheden dierlijke mest met hoge stikstofconcentraties. Bij regenval spoelt dit als nitraat het grondwater in. Andere bronnen zijn kunstmest in de tuinbouw en stedelijk afvalwater. Drinkwaterbedrijven mengen water uit verschillende bronnen om onder de EU-norm van 50 mg/L te blijven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de veilige nitraatgrens voor drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU-norm voor nitraat in drinkwater is 50 mg/L. De WHO adviseert eenzelfde grens voor volwassenen. Voor baby\'s onder 6 maanden is de WHO-aanbeveling echter maximaal 10 mg/L, omdat baby\'snieren nitraat niet kunnen verwerken en de darmbacteriën nitraat omzetten in nitriet, wat methemoglobinemie kan veroorzaken. Drinkwaterbedrijven in Nederland leveren doorgaans 5–25 mg/L nitraat — ruim onder de volwassenennorm.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert koken nitraat uit water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, koken verhoogt de nitraatconcentratie. Water verdampt tijdens het koken, maar nitraat blijft volledig achter — daardoor stijgt de concentratie in het resterende water. Een pan die voor de helft verdampt heeft daarna twee keer zoveel nitraat per liter. Nooit koken als methode gebruiken om nitraat te verlagen; dit geldt ook voor het opwarmen van babyvoeding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een actief-koolfilter nitraat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Dit is een veelvoorkomende misvatting. Actieve kool adsorbeert organische stoffen, chloor en sommige pesticiden, maar heeft geen effect op opgeloste ionen zoals nitraat (NO₃⁻). Waterfilterkannen (Brita e.d.) werken met actief kool en verwijderen nitraat niet. Alleen osmose, ionenwisseling (anioonhars), destillatie en specifieke nitraatfilters zijn effectief.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke gebieden in Nederland hebben hoog nitraat in grondwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Risicogebieden zijn agrarische regio\'s met intensieve veehouderij en akkerbouw: Noord-Brabant (de Peel, zandgronden), Gelderland (Achterhoek, Veluweflank), Limburg en de Gelderse Vallei. Het RIVM publiceert jaarlijks nitraatconcentraties in grondwatermonitoringspunten. Private putten op zandgrond in deze regio\'s kunnen concentraties van 50–200 mg/L bereiken. Leidingwater in deze gebieden voldoet wel aan de norm door menging van bronnen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is blauwzucht (methemoglobinemie) bij baby\'s?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Methemoglobinemie, ook wel "blue baby syndrome", treedt op wanneer nitriet (omgezet uit nitraat door darmbacteriën) hemoglobine omzet in methemoglobine. Methemoglobine kan geen zuurstof transporteren. Bij baby\'s onder 6 maanden is dit gevaarlijker dan bij volwassenen omdat hun maagzuur minder zuur is (meer bacteriën), ze meer water drinken per kg lichaamsgewicht en hun hemoglobine gevoeliger is. Symptomen: blauwverkleuring van huid en lippen. Dit is een medisch noodgeval.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe effectief is osmose voor nitraatverwijdering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Omgekeerde osmose verwijdert 85–95% van nitraat. Bij ingangconcentratie van 50 mg/L geeft osmose doorgaans minder dan 5 mg/L nitraat in het gefiltreerde water — ruim onder de WHO-babyrichtlijn van 10 mg/L. Osmose pakt tegelijkertijd ook bacteriën, PFAS, lood en pesticiden aan, wat het de beste alles-in-één keuze maakt voor privéputbezitters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer moet ik mijn putwater op nitraat testen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Test putwater op nitraat als u in een agrarisch gebied woont (Brabant, Gelderland, Limburg, Gelderse Vallei), als u putwater gebruikt voor babyvoeding, als uw put minder dan 20 meter diep is (ondiep grondwater bevat meer nitraat), of als u nog nooit hebt getest. Jaarlijkse tests zijn aanbevolen in risicogebieden. Een nitraattest kost €20–40; een uitgebreide drinkwateranalyse €80–150.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Nitraat in drinkwater verlagen: oorzaken en filteroplossingen',
  description: 'Nitraat in drinkwater door landbouwuitspoeling: EU-norm, risico voor baby\'s en welke filters nitraat effectief verwijderen.',
  datePublished: '2026-04-20',
  dateModified: '2026-04-20',
  url: 'https://waterfilterplatform.nl/drinkwater/nitraat-verlagen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function DrinkwaterNitraatVerlagenPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Nitraat verlagen', item: 'https://waterfilterplatform.nl/drinkwater/nitraat-verlagen' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/drinkwater" className="hover:underline">Drinkwater</Link> &rsaquo;{' '}
          <span>Nitraat verlagen</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Nitraat in drinkwater verlagen: oorzaken en filteroplossingen
        </h1>

        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#003F5C] mb-1">Kort antwoord</p>
          <p className="text-gray-700 text-sm">
            Nitraat in drinkwater is kleur- en reukloos en veroorzaakt voor volwassenen geen direct risico tot 50 mg/L. Baby&apos;s onder 6 maanden zijn kwetsbaar. Osmose verwijdert 85–95%; ionenwisseling 90–99%. Actief kool en koken werken NIET. Testen is noodzakelijk voor putwater in Brabant, Gelderland en Limburg.
          </p>
        </div>

        <HealthDisclaimer />
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom zit er nitraat in Nederlands drinkwater?
        </h2>
        <p className="text-gray-700 mb-4">
          Nitraat (NO₃⁻) is een anion dat van nature voorkomt in de stikstofkringloop, maar menselijke activiteiten hebben de concentraties in grondwater sterk verhoogd. In Nederland zijn er drie hoofdoorzaken:
        </p>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Intensieve veeteelt en mestoverschot</h3>
            <p className="text-gray-700 text-sm">
              Nederland heeft een van de hoogste veedichtheden ter wereld. De concentratie van varkens- en pluimveebedrijven in Noord-Brabant, de Achterhoek (Gelderland) en Limburg heeft decennialang geleid tot mestoverschotten. De stikstof in mest spoelt bij regenval als nitraat naar het grondwater, met name op zandige bodems die weinig nitraat binden. Het RIVM monitort jaarlijks de grondwaterkwaliteit op honderden meetpunten.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Kunstmest in akkerbouw en tuinbouw</h3>
            <p className="text-gray-700 text-sm">
              Stikstofhoudende kunstmest wordt intensief gebruikt in akkerbouwgebieden. Bij regenval en irrigatie spoelt een deel van de niet-opgenomen stikstof als nitraat het grondwater in. De EU-Nitratenrichtlijn (91/676/EEG) verplicht lidstaten nitraatgevoelige gebieden aan te wijzen en maatregelen te nemen, maar de ecologische gevolgen zijn nog steeds zichtbaar in de grondwaterkwaliteit.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Stedelijk afvalwater en septic tanks</h3>
            <p className="text-gray-700 text-sm">
              In gebieden zonder riolering of met verouderde septische putten kan menselijk afvalwater bijdragen aan nitraat in grondwater. Dit speelt in Nederland minder dan in sommige andere landen, maar is relevant voor geïsoleerde woningen en boerderijen met eigen septisch systeem.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-normen en Nederlandse drinkwaterkwaliteit
        </h2>
        <p className="text-gray-700 mb-4">
          De EU-Drinkwaterrichtlijn stelt een maximale nitraatconcentratie van 50 mg/L voor drinkwater. De Nederlandse situatie:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Leidingwater:</strong> Drinkwaterbedrijven zijn wettelijk verplicht water onder de 50 mg/L-norm te leveren. Zij mengen bronnen en behandelen water actief. Typisch: 5–25 mg/L.</li>
          <li><strong>Privéputten in risicogebieden:</strong> Kunnen 50–200+ mg/L bevatten. Geen wettelijke verplichting tot monitoring door gemeenten voor privéputten.</li>
          <li><strong>WHO-richtlijn voor baby&apos;s:</strong> Max 10 mg/L voor water gebruikt bij babyvoeding.</li>
          <li><strong>RIVM-monitoring:</strong> Grondwaterkaarten tonen verhoogde nitraatwaarden in agrarische zandgebieden.</li>
        </ul>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Waterbron</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Nitraat (mg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Beoordeling</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">NL leidingwater (gemiddeld)</td>
                <td className="border border-gray-300 px-3 py-2">5–25</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Veilig voor iedereen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Privéput (niet-agrarisch)</td>
                <td className="border border-gray-300 px-3 py-2">10–40</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Testen aanbevolen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Privéput (Brabant/Gelderland/Limburg)</td>
                <td className="border border-gray-300 px-3 py-2">50–200+</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Filteren noodzakelijk</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">EU-norm volwassenen</td>
                <td className="border border-gray-300 px-3 py-2">max 50</td>
                <td className="border border-gray-300 px-3 py-2">Wettelijk maximum</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">WHO-richtlijn babyvoeding</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Veilig voor baby&apos;s</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Na osmosefilter</td>
                <td className="border border-gray-300 px-3 py-2">&lt;2–5</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">85–95% verwijderd</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wie loopt risico bij hoog nitraat in water?
        </h2>
        <p className="text-gray-700 mb-4">
          Nitraat zelf is relatief onschadelijk; nitriet (NO₂⁻), dat gevormd wordt bij omzetting van nitraat, is het problematische product. Drie risicogroepen:
        </p>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Baby&apos;s onder 6 maanden — de hoogste prioriteit</h3>
            <p className="text-gray-700 text-sm">
              Baby&apos;s zijn kwetsbaar om twee redenen: hun maag is minder zuur dan die van volwassenen, waardoor bacteriën nitraat sneller omzetten naar nitriet; en hun hemoglobine is gevoeliger voor oxidatie door nitriet. Methemoglobinemie (&ldquo;blauwe baby&rdquo;) kan ernstige zuurstoftekorten veroorzaken en is een medisch noodgeval. Het WHO-advies van max 10 mg/L voor babyvoeding moet strikt worden opgevolgd. Gebruik bij twijfel osmosewater of speciaal babywater.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Zwangere vrouwen</h3>
            <p className="text-gray-700 text-sm">
              Foetussen kunnen via het bloed van de moeder worden blootgesteld. Hoewel het risico lager is dan bij baby&apos;s, raden gynaecologen en de RIVM aan om bij hoog nitraat in putwater gefilterd water te gebruiken tijdens de zwangerschap.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Volwassenen met maag-darmklachten</h3>
            <p className="text-gray-700 text-sm">
              Bij bepaalde maagaandoeningen (verminderde maagzuurproductie, gastritis) kan de bacteriële omzetting van nitraat naar nitriet verhoogd zijn. Concentraties boven 100 mg/L zijn voor gezonde volwassenen geen direct acuut risico, maar langdurige blootstelling bij sterk verhoogde niveaus is niet onderzocht als veilig.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Detectie: kleur, geur, smaak?
        </h2>
        <p className="text-gray-700 mb-6">
          Nitraat heeft geen kleur, geen geur en geen smaak bij concentraties die relevant zijn voor drinkwater. Dit maakt het extra gevaarlijk: u kunt niet aan het water zien of proeven of het verhoogde nitraatwaarden heeft. Laboratoriumanalyse is de enige betrouwbare methode. Er zijn ook goedkope teststrips (€15–30 voor 50 strips) voor indicatieve metingen, maar laboratoriumanalyse geeft nauwkeurigere resultaten bij twijfel over putwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filteropties voor nitraat: wat werkt en wat niet
        </h2>
        <p className="text-gray-700 mb-4">
          Niet alle filters zijn effectief voor nitraat. Dit is cruciaal om te begrijpen — een actief-koolfilter dat wél chloor verwijdert, heeft nul effect op nitraat.
        </p>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Omgekeerde osmose (RO)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Aanbevolen voor particulieren</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Het RO-membraan houdt nitraationen (NO₃⁻) voor 85–95% tegen. De beste alles-in-één oplossing voor privéputbezitters: pakt naast nitraat ook bacteriën (via UV), pesticiden, lood, PFAS en andere verontreinigingen aan. Ideaal voor onder-aanrecht installatie voor drinkwater en babyvoeding. Zie onze pagina over{' '}
              <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose waterfilter</Link>.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Nitraat: 85–95% verwijdering</span>
              <span>Kosten: €300–800 aanschaf</span>
              <span>Onderhoud: €50–80/jaar</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Ionenwisseling (anioonhars)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Hoogste nitraatverwijdering</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Specifiek op nitraat gerichte anioonharsen ruilen nitraat (en sulfaat) uit tegen chloride of bicarbonaat. Verwijderingsrendement 90–99% — hoger dan osmose. Nadeel: verwijdert geen bacteriën, zware metalen of pesticiden. Vereist periodieke regeneratie met zoutoplossing. Professionele installatie aanbevolen. Meest zinvol bij uitsluitend nitraatprobleem in leidingwater.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Nitraat: 90–99% verwijdering</span>
              <span>Kosten: €500–1.500</span>
              <span>Onderhoud: regeneratie zout</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Destillatie</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Destillatie verwijdert 95%+ van nitraat door water te verdampen en te condenseren. Nitraat blijft in de distillatierest. Hoog energieverbruik, langzame productie. Praktisch voor noodgevallen of kleine hoeveelheden (babyvoeding).
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Nitraat: 95%+ verwijdering</span>
              <span>Kosten: €200–500 apparaat</span>
              <span>Energieverbruik: hoog</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Actief-koolfilter / waterfilterkan</h3>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">NIET effectief voor nitraat</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Actieve kool en Brita-filterkannen verwijderen nitraat niet. Dit is een veelgehoorde misvatting. Actief kool werkt via adsorptie van organische molecules; nitraat is een anorganisch ion dat niet wordt geadsorbeerd.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Nitraat: 0% verwijdering</span>
              <span>NIET geschikt voor nitraat</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">5</span>
              <h3 className="font-semibold text-[#003F5C]">UV-desinfectie en koken</h3>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">Werkt NIET voor nitraat</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              UV-licht doodt bacteriën en virussen, maar heeft nul effect op opgeloste chemische verbindingen zoals nitraat. Koken is niet alleen ineffectief, het verhoogt de nitraatconcentratie doordat water verdampt maar nitraat achterblijft. Gebruik koken nooit als nitraat-reductiemethode.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Nitraat UV: 0% verwijdering</span>
              <span>Nitraat koken: CONCENTREERT nitraat</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: filters voor nitraat
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Nitraat verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Bacteriën</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Opmerkingen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Omgekeerde osmose</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">85–95%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (membraan+UV)</td>
                <td className="border border-gray-300 px-3 py-2">€300–800</td>
                <td className="border border-gray-300 px-3 py-2">Beste alles-in-één</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Ionenwisseling (anion)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">90–99%</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2">€500–1.500</td>
                <td className="border border-gray-300 px-3 py-2">Hoog rendement, nitraatspecifiek</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Destillatie</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">95%+</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2">€200–500</td>
                <td className="border border-gray-300 px-3 py-2">Langzaam, hoog energieverbruik</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Actief-koolfilter</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0%</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2">€30–200</td>
                <td className="border border-gray-300 px-3 py-2">NIET geschikt voor nitraat</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Waterfilterkan (Brita)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0%</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2">€30–60</td>
                <td className="border border-gray-300 px-3 py-2">NIET geschikt voor nitraat</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">UV-filter</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2">€100–300</td>
                <td className="border border-gray-300 px-3 py-2">Goed voor bacteriën, niet nitraat</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Koken</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Verhoogt nitraat</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2">Energiekosten</td>
                <td className="border border-gray-300 px-3 py-2">CONTRAPRODUCTIEF voor nitraat</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Specifiek advies voor putwater in agrarische gebieden
        </h2>
        <p className="text-gray-700 mb-4">
          Putgebruikers in Noord-Brabant, de Achterhoek, Limburg en de Gelderse Vallei verdienen extra aandacht. Aanbevelingen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Test jaarlijks:</strong> Nitraatconcentraties in grondwater kunnen seizoensgebonden variëren; de hoogste concentraties zijn vaak in het voorjaar na bemestingsperiodes.</li>
          <li><strong>Test ook op bacteriën:</strong> Putten in agrarische gebieden zijn ook vatbaar voor fecale besmetting. Een uitgebreide analyse (nitraat + e-coli + enterococcen) kost €80–120.</li>
          <li><strong>Installeer een combinatiefilter:</strong> Osmose + UV dekt zowel nitraat als bacteriologische besmetting. Dit is de aangeraden standaardoplossing voor putwater in risicogebieden.</li>
          <li><strong>Diepe putten (&gt;30 meter):</strong> Diepere grondwaterlagen zijn beter beschermd door kleibodems. Laat de diepte en waterlaag documenteren bij uw wateranalyse.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Meer over putwaterbehandeling leest u in ons artikel over{' '}
          <Link href="/drinkwater/nitraat" className="text-[#005F8A] underline">nitraat in drinkwater normen en risico&apos;s</Link> en ons overzicht over{' '}
          <Link href="/putwater" className="text-[#005F8A] underline">putwater testen en zuiveren</Link>.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/drinkwater/nitraat" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Nitraat in drinkwater</h3>
            <p className="text-sm text-gray-600">Normen en risicos van nitraat in drinkwater voor Nederland.</p>
          </Link>
          <Link href="/stoffen-in-drinkwater/nitraat-nitriet" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Nitraat en nitriet in drinkwater</h3>
            <p className="text-sm text-gray-600">Achtergronden van nitraat en nitriet als verontreiniging in water.</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">Hoe omgekeerde osmose nitraat effectief uit water verwijdert.</p>
          </Link>
          <Link href="/waterfilter/nitraat" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor nitraat</h3>
            <p className="text-sm text-gray-600">Welke waterfilters nitraat effectief uit drinkwater verwijderen.</p>
          </Link>
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
          <Link href="/drinkwater/nitraat" className="text-[#005F8A] underline">nitraat normen en risico&apos;s</Link>,{' '}
          <Link href="/drinkwater/baby" className="text-[#005F8A] underline">drinkwater voor baby&apos;s</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose waterfilter</Link>.
        </p>
      </main>
    </>
  );
}
