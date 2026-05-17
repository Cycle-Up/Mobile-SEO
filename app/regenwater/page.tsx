import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Regenwater filteren voor drinkwater: kan het en hoe? (2026)',
  description:
    'Regenwater filteren voor drinkwater in Nederland: wettelijke status, verontreinigingen, benodigde behandeling, kosten (€800–2.500) en het verschil tussen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/regenwater' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is regenwater drinkbaar na filteren in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Regenwater als drinkwater is in Nederland wettelijk toegestaan, maar de aanbieder (eigenaar van het systeem) is verantwoordelijk dat het voldoet aan het Drinkwaterbesluit. Dat vereist een volledige behandelingsketen: minimaal sedimentfilter + actief kool + UV-desinfectie. Voor de hoogste veiligheid is een omgekeerd osmosesysteem de aanbevolen aanpak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke verontreinigingen zitten in regenwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Regenwater bevat: bacteriën en schimmels (vogeldroppen, dakoppervlak), fijnstof en roet uit de atmosfeer, zware metalen van dak- en gootmaterialen (zink, lood, koper), PFAS uit atmosferische depositie (uitgestoten door industrie en vliegtuigen), microplastics en organische verbindingen. Frisse luchtgebieden hebben schonere regen; industriegebieden en drukke snelwegen verhogen de belasting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen regenwater voor toilet en voor drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor toiletspoeling en tuinberegening (grijs water) volstaat een eenvoudig opvangsysteem met grove filter — geen drinkwaternorm vereist. Voor drinkwater is een volledige zuiveringsketen nodig (sediment → actief kool → osmose of UV). Een gecombineerd systeem met twee circuits (grijs + drinkwater) is technisch mogelijk maar kostbaar en vereist kruisverbindingsbeveiliging.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel kost een compleet regenwatersysteem voor drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een volledig systeem voor drinkwater uit regenwater kost €800–2.500 afhankelijk van capaciteit en filtertype. Specificaties: opslagtank (1.000–5.000 L): €200–600, voorfilter en dakfilter: €100–200, 5-traps osmosefilter: €300–800, UV-lamp: €150–350, installatie: €200–500. Jaarlijkse onderhoudskosten: €100–200.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter PFAS uit regenwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Een omgekeerd osmosesysteem verwijdert 95–99% van PFAS uit regenwater, inclusief kortketenige PFAS die via atmosferische depositie in regen terechtkomt. Dit is de meest complete oplossing voor PFAS-verwijdering uit hemelwater. Actief kool verwijdert langketenige PFAS gedeeltelijk (70–90%), maar is minder betrouwbaar voor kortketens.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is regenwater zachter dan leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, regenwater is het zachtste water dat er bestaat — het bevat nauwelijks calcium of magnesium (hardheid ~0 °dH). Dit is een voordeel voor apparaten (geen kalkaanslag) en heeft een aangenaam drinkgevoel. Na osmosezuivering is remineralisatie (calciumfilter of remineralisatiepatroon) aanbevolen om de smaak te verbeteren en micronutriënten toe te voegen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer is regenwater opvangen voor drinkwater praktisch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Regenwater als primaire drinkwaterbron is het meest praktisch in landelijke gebieden, off-grid woningen, duurzaamheidsprojecten of gebieden waar geen leidingwateraansluiting beschikbaar is. In stedelijke gebieden met leidingwater is het financieel minder interessant, maar kan het als aanvulling (grijs water voor toilet/tuin + osmosedrinkwater) significante waterbesparingen opleveren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik mijn regenwatersysteem melden bij de gemeente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een regenwateropvangsysteem voor grijs water (toilet, tuin) hoeft in de meeste gemeenten niet gemeld te worden. Als het systeem wordt aangesloten op de drinkwaterleiding of als drinkwatervervanging wordt gebruikt, gelden strengere regels. Raadpleeg de gemeente en Waterwet. Een aparte kraan (niet gekoppeld aan het drinkwaternet) is de eenvoudigste juridische oplossing.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Regenwater filteren voor drinkwater: kan het en hoe? (2026)',
  description:
    'Regenwater filteren voor drinkwater in Nederland: wettelijke status, verontreinigingen, benodigde behandeling, kosten en het verschil tussen grijs water en.',
  datePublished: '2026-04-01',
  dateModified: '2026-04-01',
  url: 'https://waterfilterplatform.nl/regenwater',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function RegenwaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Regenwater filteren', item: 'https://waterfilterplatform.nl/regenwater' },
            ],
          },
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <span>Regenwater filteren</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Regenwater filteren voor drinkwater: kan het en hoe? (2026)
        </h1>

        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-gray-700 text-sm font-medium">
            <strong>Samenvatting:</strong> Regenwater gebruiken als drinkwater mag in Nederland, maar de eigenaar draagt de volledige verantwoordelijkheid voor de waterkwaliteit. Regenwater bevat bacteriën, atmosferisch stof, PFAS en dakverontreinigingen. Een volledige filterketen (sediment &rarr; actief kool &rarr; osmose of UV) is vereist voor veilig gebruik.
          </p>
        </div>

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wettelijke status: regenwater als drinkwater in Nederland
        </h2>
        <p className="text-gray-700 mb-4">
          Regenwater als drinkwaterbron is in Nederland niet verboden, maar het valt onder de reikwijdte van het <strong>Drinkwaterbesluit</strong> zodra het als drinkwater wordt aangeboden. Dat betekent dat het behandelde water moet voldoen aan dezelfde normen als leidingwater — en de aanbieder (de eigenaar van het systeem) is daarvoor aansprakelijk.
        </p>
        <p className="text-gray-700 mb-4">
          In de praktijk zijn er twee scenario&apos;s:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Eigen gebruik (privé):</strong> Technisch toegestaan, maar op eigen risico. Geen externe controle of handhaving voor persoonlijk gebruik.</li>
          <li><strong>Collectief gebruik (huurders, gebouwen):</strong> Strikte regelgeving. Periodieke testing verplicht, meldplicht bij de gemeente, voldoen aan Drinkwaterbesluit.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat zit er in regenwater?
        </h2>
        <p className="text-gray-700 mb-4">
          Regenwater is absoluut niet puur. Gedurende de neerslag absorbeert het water allerlei stoffen uit de atmosfeer en van het oppervlak waarop het valt:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Bacteriën en schimmels:</strong> Vogeldroppings, bladresten, mos en algen op het dak introduceren bacteriën en gisten. E.coli is bij onderzochte dakopvangbakken regelmatig aangetoond.</li>
          <li><strong>Atmosferische verontreiniging:</strong> Fijnstof, roet, stikstofoxiden en andere industrie-emissies worden meegenomen door de regen.</li>
          <li><strong>Dakmateriaal-lekking:</strong> Zinken dakgoten, koperen elementen en bitumen daken geven metalen en organische verbindingen af. Oud lood in goten is een bijzonder risico.</li>
          <li><strong>PFAS:</strong> Onderzoek van het RIVM toont aan dat PFAS via atmosferische depositie in regenwater terechtkomen. Gebieden nabij industrie, vliegvelden en Chemours-fabriek (Dordrecht) hebben hogere PFAS-concentraties in regenwater. Zie ook onze pagina over <a href="/pfas-water" className="text-[#005F8A] underline">PFAS in drinkwater</a>.</li>
          <li><strong>Microplastics:</strong> Aanwezig in regenwater in stedelijke omgevingen.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke behandeling is noodzakelijk voor veilig drinkwater?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor veilig drinkwater uit regenwater is een meertraps behandeling noodzakelijk. Het minimum bestaat uit drie stappen; voor de hoogste veiligheid is omgekeerde osmose de aanbevolen oplossing:
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
          <h3 className="font-semibold text-[#003F5C] mb-3">4-traps systeem: dakopvang &rarr; voorfilter &rarr; opslagtank &rarr; filterketen</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 bg-[#005F8A] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
              <div><strong>Dakopvang met dakfilter:</strong> First-flush diverter verwijdert de eerste (meest verontreinigde) liters regen. Grove filter verwijdert bladeren en grotere deeltjes.</div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 bg-[#005F8A] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
              <div><strong>Opslagtank (donker, afgesloten):</strong> Minimaal 500 liter. Donker om algengroei te voorkomen. Gecertificeerd voedseiveilig materiaal (PE of RVS). Nooit in direct zonlicht.</div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 bg-[#005F8A] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
              <div><strong>Sedimentfilter (5 micron):</strong> Verwijdert fijnstof, zand en grotere deeltjes vóór de koolfilter. Beschermt het osmosemembraan.</div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 bg-[#005F8A] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</span>
              <div><strong>5-traps osmosefilter + UV:</strong> <a href="/omgekeerde-osmose" className="text-[#005F8A] underline">Omgekeerde osmose</a> verwijdert PFAS (95–99%), bacteriën, metalen en organische verbindingen. UV-eindstap elimineert resterende micro-organismen.</div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Grijs water vs. drinkwater: wat heeft wat nodig?
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Toepassing</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Vereiste behandeling</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten installatie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Tuinberegening</td>
                <td className="border border-gray-300 px-3 py-2">Grove filter, opslagtank</td>
                <td className="border border-gray-300 px-3 py-2">€100–300</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Toiletspoeling</td>
                <td className="border border-gray-300 px-3 py-2">Grove filter, opslagtank, drukpomp</td>
                <td className="border border-gray-300 px-3 py-2">€300–600</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Wasmachine</td>
                <td className="border border-gray-300 px-3 py-2">Sediment + koolfilter</td>
                <td className="border border-gray-300 px-3 py-2">€400–800</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Drinkwater (minimum)</td>
                <td className="border border-gray-300 px-3 py-2">Sediment + actief kool + UV</td>
                <td className="border border-gray-300 px-3 py-2">€500–1.000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Drinkwater (optimaal)</td>
                <td className="border border-gray-300 px-3 py-2">5-traps osmose + UV + remineralisatie</td>
                <td className="border border-gray-300 px-3 py-2">€800–2.500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Milieuvriendelijkheid en duurzaamheid
        </h2>
        <p className="text-gray-700 mb-4">
          Regenwater is het minst gemineraliseerde water dat bestaat. In vergelijking met leidingwater heeft regenwater als grondstof unieke voordelen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Geen chloor of chloraminen — leidingwater bevat 0,1–0,2 mg/L chloor voor desinfectie</li>
          <li>Hardheid praktisch nul — geen kalkaanslag in apparaten, minder wasmiddel nodig</li>
          <li>Reduceert drinkwatervraag — ontlast het drinkwaternet, vooral relevant bij droogte</li>
          <li>Off-grid toepasbaar — onafhankelijk van infrastructuur bij calamiteiten</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Regenwater als primaire drinkwaterbron is het meest praktisch op het platteland, bij off-grid woningen of duurzame nieuwbouwprojecten. In de stad is een gecombineerde aanpak realistischer: regenwater voor grijs water (toilet, tuin) en leidingwater of osmosewater als reservedrinkwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktische aanbeveling: gecombineerde aanpak
        </h2>
        <p className="text-gray-700 mb-4">
          De meest pragmatische oplossing voor Nederlandse huishoudens is een gecombineerd systeem:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Regenwater opvangen voor toilet, tuin en wasmachine (besparing 30–40% waterverbruik)</li>
          <li>Leidingwater als primaire drinkwaterbron, gefilterd via een <a href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</a> voor de beste kwaliteit</li>
          <li>Leidingwater als noodback-up wanneer de regenwateropslagtank leeg is</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Wil je ook weten hoe putwater of bronwater veilig te gebruiken? Lees onze pagina over <a href="/putwater" className="text-[#005F8A] underline">putwater filteren</a> voor een vergelijkbare aanpak.
        </p>

        <div className="space-y-3 mb-8">
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

        <CTABanner context="osmose" />

        <p className="text-gray-600 text-sm mt-6">
          Meer lezen: <a href="/waterfilter/soorten" className="text-[#005F8A] underline">alle soorten waterfilters</a>, <a href="/pfas-water" className="text-[#005F8A] underline">PFAS in drinkwater</a> en <a href="/putwater" className="text-[#005F8A] underline">putwater filteren</a>.
        </p>
      </main>
    </>
  );
}
