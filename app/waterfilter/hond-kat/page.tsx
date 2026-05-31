import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter voor hond en kat: schoner drinkwater voor uw huisdier',
  description: 'Een waterfilter voor uw hond of kat verwijdert chloor, lood en bacterien uit drinkwater. Vergelijking drinkfonteinen met filter, osmosewater en gefilterd.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/hond-kat' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is kraanwater veilig voor mijn hond of kat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nederlands kraanwater voldoet aan de wettelijke normen voor menselijke consumptie, maar huisdieren kunnen gevoeliger zijn voor bepaalde stoffen. Chloor veroorzaakt bij katten smaakafkeer waardoor ze minder drinken, wat nierstenen bevordert. Honden en katten met bestaande nierklachten profiteren aantoonbaar van gefilterd water. In gebieden met verhoogde PFAS- of loodconcentraties is filteren extra verstandig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom drinkt mijn kat niet graag uit de waterbak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Katten zijn evolutionair gewend aan stromend water en mijden stilstaand water van nature. Daarnaast ruiken katten chloor in kraanwater, wat ze afstoot. Een drinkfontein met actief koolfilter lost beide problemen op: het water beweegt continu en het chloor wordt gefilterd. Katten met nierproblemen drinken gemiddeld 30-50% meer wanneer ze een gefilterde fontein krijgen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doet chloor in kraanwater met mijn huisdier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chloor en chloaraminen in kraanwater zijn voor mensen bij normale concentraties veilig, maar katten ruiken dit sterk en gaan minder drinken. Chronisch te weinig drinken is een hoofdoorzaak van urinewegproblemen en nierstenen bij katten. Honden zijn minder gevoelig voor de smaak maar bij langdurige blootstelling aan hoge chloornitraten zijn maagdarmproblemen mogelijk. Een actief koolfilter verwijdert chloor effectief.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is osmosewater goed voor katten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater is in principe veilig voor katten en honden, maar bij langdurig exclusief gebruik is remineralisatie aan te raden. Osmosewater heeft een TDS van minder dan 10 mg/L — bij een TDS onder 50 mg/L ontbreken mineralen zoals magnesium en calcium die katten ook via water opnemen. Voeg een remineralisatiecartridge toe of meng met gefilterd kraanwater in verhouding 1:1 voor optimaal mineraalgehalte.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe vaak moet ik het filter in een drinkfontein vervangen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meeste huisdierfonteinfilters (actief kool + foam) moeten elke 1 tot 3 maanden worden vervangen, afhankelijk van het merk en het watergebruik. PetKit adviseert maandelijkse vervanging, Catit en Drinkwell om de 4 tot 6 weken. Een versleten filter verliest zijn filtercapaciteit maar kan ook bacteriegroeipunt worden. Stel een herinnering in, want de filter ziet er na 8 weken nog schoon uit terwijl de capaciteit al sterk is afgenomen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mijn kat heeft nierproblemen -- helpt gefilterd water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, meerdere diergeneeskundige studies ondersteunen gefilterd water bij katten met chronische nierziekte (CKD). Door chloor, lood en andere verontreinigingen te verwijderen vermindert de belasting op de nieren. Nog belangrijker: katten met CKD moeten veel drinken. Een gefilterde drinkfontein stimuleert dit doordat het water smakelijker en bewegend is. Bespreek altijd de watersoort met uw dierenarts, want bij sommige nierdieten speelt de mineraalbalans een rol.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een huisdierfontein en een gewone waterfilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een huisdierfontein is een standalone apparaat met een circulatiepomp en een eenvoudig actief koolfilter (soms met foamfilter). Het filtert voornamelijk chloor, geur en grove deeltjes. Een huishoudelijk waterfilter (koolstoffilter of osmosefilter) zit op de waterleiding en filtert ook lood, zware metalen, PFAS en bacterien weg. Voor maximale bescherming kunt u osmosewater in een drinkfontein doen: zo profiteert uw huisdier van zowel de filterkwaliteit als het stimulerende stromende water.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter voor hond en kat: schoner drinkwater voor uw huisdier',
  description: 'Een waterfilter voor uw hond of kat verwijdert chloor, lood en bacterien uit drinkwater. Vergelijking drinkfonteinen met filter, osmosewater en gefilterd.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/hond-kat',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterHondKatPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Waterfilter hond en kat', item: 'https://waterfilterplatform.nl/waterfilter/hond-kat' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>Waterfilter hond en kat</span>
        </nav>

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-2xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterfilter voor hond en kat: schoner drinkwater voor uw huisdier
          </h1>
          <p className="text-gray-700 text-lg">
            Huisdieren drinken relatief meer water per kilogram lichaamsgewicht dan mensen. Wat voor u een verwaarloosbare hoeveelheid chloor of lood is, kan voor een kat van 4 kg een significant grotere dagelijkse dosis betekenen. Ontdek welke waterfilteroplossing het beste bij uw hond of kat past.
          </p>
        </section>

        <QuickAnswer answer="Een waterfilter voor hond en kat verwijdert chloor, lood en bacterien die via de waterbak binnenkomen. Katten zijn bijzonder gevoelig voor chloor en drinken minder als het water riekt, wat nierstenen bevordert. Een drinkfontein met actief koolfilter of gefilterd kraanwater via een osmosefilter zijn de beste oplossingen. Filterpatronen maandelijks vervangen." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom zijn huisdieren gevoeliger voor verontreinigingen in water?
        </h2>
        <p className="text-gray-700 mb-4">
          Een gezonde kat weegt gemiddeld 4 tot 5 kg en heeft dagelijks 200 tot 300 ml water nodig. Een volwassen mens drinkt 2 liter per dag bij een gewicht van 70 kg. Verhoudingsgewijs neemt een kat per kilogram lichaamsgewicht dus meer water op dan een mens. Dit betekent dat verontreinigingen een relatief hogere concentratie bereiken in het kleine lichaam van uw huisdier.
        </p>
        <p className="text-gray-700 mb-4">
          De nieren van katten zijn anatomisch bijzonder kwetsbaar voor zware metalen. Chronische nierziekte (CKD) treft naar schatting 1 op de 3 oudere katten. Lood, koper en andere zware metalen die via oud leidingwerk in drinkwater terechtkomen, belasten de nierfunctie extra. Honden hebben een robuustere nierfunctie maar zijn eveneens gevoelig voor accumulerende toxines bij langdurige blootstelling.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat kan schadelijk zijn voor hond en kat?
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Chloor en chloaraminen</h3>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-semibold">Smaakafkeer bij katten</span>
            </div>
            <p className="text-gray-700 text-sm">
              Chloor wordt als desinfectiemiddel toegevoegd aan drinkwater en is voor mensen bij normale concentraties veilig. Katten hebben echter een reukvermogen dat 14 keer scherper is dan dat van mensen en ruiken chloor sterk. De smaakafkeer leidt ertoe dat katten minder drinken, wat een directe risicofactor is voor urinekristallen en nierstenen. Chronisch te weinig drinken is een van de meest voorkomende oorzaken van urinewegproblemen bij katten.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Lood uit oude leidingen</h3>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">Chronisch risico</span>
            </div>
            <p className="text-gray-700 text-sm">
              In woningen gebouwd voor 1960 kunnen nog loden waterleidingen aanwezig zijn. Lood accumuleert in botten en organen en heeft geen veilige ondergrens. Een osmosefilter verwijdert meer dan 95% van het lood uit drinkwater. Dit is zowel voor mensen als voor huisdieren de meest effectieve bescherming. Bent u onzeker over uw leidingwater, laat het dan testen via uw gemeente of een gecertificeerd laboratorium.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Fluoride</h3>
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full font-semibold">Laag risico bij normaal gebruik</span>
            </div>
            <p className="text-gray-700 text-sm">
              Nederlands leidingwater bevat doorgaans 0,1 tot 0,3 mg/L fluoride, ruim onder de Nederlandse norm van 1,1 mg/L. Voor honden geldt dat bij inname van meer dan 0,5 mg/L over langere tijd tandvleisaandoeningen en skeletproblemen kunnen optreden. Bij de huidige concentraties in Nederlands kraanwater is het risico voor de meeste honden beperkt. Grote honden die veel water drinken in regio&apos;s met hogere fluorideconcentraties lopen een groter risico.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Bacterien in de waterbak</h3>
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-semibold">Buitenwaterkom risico</span>
            </div>
            <p className="text-gray-700 text-sm">
              Een waterbak die uren buiten staat of niet dagelijks wordt gereinigd, is een ideale broedplaats voor bacterien en gisten. Speekselresten, voedseldeeltjes en warmte versnellen de bacteriegroei aanzienlijk. Drinkfonteinen met een circulatiepomp en actief koolfilter beperken dit risico doordat het water in beweging blijft en het filter organische deeltjes vasthoudt. Reinig de fontein wekelijks grondig met warm water.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">5</span>
              <h3 className="font-semibold text-[#003F5C]">PFAS (eeuwigdurende chemicalien)</h3>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">Geen specifieke huisdierennorm</span>
            </div>
            <p className="text-gray-700 text-sm">
              PFAS (poly- en perfluoralkylstoffen) accumuleren in het lichaam en zijn gevonden in drinkwater in Nederland, met name in gebieden nabij vliegvelden, brandweerkazernes en industrieterreinen. Er bestaat geen specifieke huisdierennorm voor PFAS, maar de biologische werking is vergelijkbaar met die bij mensen: hormoonverstoring, leverschade en immuniteitsonderdrukking. Een osmosefilter verwijdert PFAS voor 90 tot 99%.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Drinkfontein met filter vs gefilterd kraanwater
        </h2>
        <p className="text-gray-700 mb-4">
          Een huisdierfontein met ingebouwd actief koolfilter stimuleert het drinkgedrag van katten doordat het water continu in beweging is. Katten drinken gemiddeld 30 tot 50% meer uit een fontein dan uit een stilstaande waterbak. Het actief koolfilterpatroon moet elke 1 tot 3 maanden worden vervangen om effectief te blijven. Let op: een versleten filter ziet er nog schoon uit maar heeft zijn adsorbtiepotentieel verloren.
        </p>
        <p className="text-gray-700 mb-4">
          Gefilterd kraanwater via een onder-aanrecht waterfilter of een osmosefilter biedt een bredere filterdekking: naast chloor worden ook lood, zware metalen, PFAS en bacterien verwijderd. U kunt dit gefilterde water in een drinkfontein doen voor het beste resultaat: brede filterkwaliteit plus stimulerend bewegend water.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosewater voor huisdieren
        </h2>
        <p className="text-gray-700 mb-4">
          Osmosewater is nagenoeg mineraalvrij (TDS &lt; 10 mg/L) en uitermate puur. Voor kortdurend gebruik of als aanvulling is het uitstekend geschikt voor honden en katten. Bij langdurig exclusief gebruik van osmosewater als enige drinkvloeistof kan een TDS onder de 50 mg/L de mineraalbalans beinvloeden, met name de natriumhuishouding. Katten en honden halen de meeste mineralen uit hun voeding, maar een lichte remineralisatie van osmosewater (via een remineralisatiefilter of door mengen 1:1 met gefilterd kraanwater) geeft extra zekerheid.
        </p>
        <p className="text-gray-700 mb-4">
          Katten met nierklachten die een speciaal dieet volgen op advies van een dierenarts, dienen de watersoort altijd in overleg met de dierenarts te bepalen, omdat de mineraalbalans bij renale dieten een specifieke rol speelt.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Populaire drinkfonteinen met filter: PetKit, Catit en Drinkwell
        </h2>
        <p className="text-gray-700 mb-4">
          De drie populairste merken drinkfonteinen voor huisdieren in Nederland zijn PetKit, Catit en Drinkwell (PetSafe). Alle drie gebruiken een combinatie van een actief koolfilter (verwijdert chloor, geur, smaakstoffen) en een foamfilter (houdt haar en voedselresten tegen). PetKit onderscheidt zich met een automatische UV-sterilisatiefunctie in de pomp. Catit Flower Fountain is populair door de lage prijs en eenvoudige reiniging. Drinkwell heeft een grotere capaciteit, geschikt voor meerdere huisdieren of grote honden.
        </p>
        <p className="text-gray-700 mb-6">
          De fonteinfuncties filteren geen zware metalen of PFAS. Voor maximale filterkwaliteit combineert u een osmosefilterinstallatie op de waterleiding met het bijvullen van de drinkfontein met osmosewater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is een osmosefilter zinvol voor huis en huisdier?
        </h2>
        <p className="text-gray-700 mb-4">
          Een osmosefilter is een slimme investering voor het hele huishouden als een of meer van de volgende situaties van toepassing zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Harde watergebieden</strong> (meer dan 20 dH): kalk in de waterbak en verhoogde niersteinvorming bij katten</li>
          <li><strong>PFAS-risicozone</strong> (nabij vliegveld, industrieterrein of brandweerkazerne)</li>
          <li><strong>Kat met nierklachten (CKD)</strong>: osmosewater vermindert de nierenbelasting aantoonbaar</li>
          <li><strong>Woning met oudere leidingen</strong> (gebouwd voor 1960): loodrisico voor hele gezin inclusief huisdier</li>
          <li><strong>Hond met recidiverende urinewegproblemen</strong>: purer water vermindert de mineraalbelasting</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijking: filteropties voor huisdieren
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Optie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filterkosten/jaar</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Chloor</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Lood</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">PFAS</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Gemak</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Drinkfontein met koolstoffilter</td>
                <td className="border border-gray-300 px-3 py-2">&euro;25&ndash;80</td>
                <td className="border border-gray-300 px-3 py-2">&euro;20&ndash;40</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2">Hoog</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Gefilterd kraanwater (koolstof)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;80&ndash;200</td>
                <td className="border border-gray-300 px-3 py-2">&euro;30&ndash;60</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">Deels</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">Deels</td>
                <td className="border border-gray-300 px-3 py-2">Hoog</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Osmosewater</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300&ndash;800</td>
                <td className="border border-gray-300 px-3 py-2">&euro;50&ndash;100</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Ja (&gt;99%)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Ja (&gt;95%)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Ja (&gt;90%)</td>
                <td className="border border-gray-300 px-3 py-2">Middel</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Zie ook onze uitgebreide gidsen over{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>,{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfiltersoorten</Link> en{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/waterfilter/baby" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor baby</h3>
            <p className="text-sm text-gray-600">Veilig drinkwater voor zuigelingen: welk filter verwijdert nitraat, lood en PFAS?</p>
          </Link>
          <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Actief koolfilter uitleg</h3>
            <p className="text-sm text-gray-600">Hoe actief kool chloor, geur en organische stoffen uit water verwijdert.</p>
          </Link>
          <Link href="/waterfilter/lood" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Lood in drinkwater filteren</h3>
            <p className="text-sm text-gray-600">Hoe verwijder je lood uit drinkwater en welk filter is het meest effectief?</p>
          </Link>
          <Link href="/waterfilter/gezondheid" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter en gezondheid</h3>
            <p className="text-sm text-gray-600">Overzicht van gezondheidsrelevante stoffen in kraanwater en welk filter wat verwijdert.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over waterfilters voor huisdieren</h2>
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
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilter vergelijken</Link> en{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>
      </main>
    </>
  );
}
