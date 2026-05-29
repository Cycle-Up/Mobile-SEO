import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Gezondheidsvoordelen osmose water: wat zegt het onderzoek?',
  description: 'Bewezen en betwiste gezondheidsvoordelen van osmosewater: wat verwijdert het, wat zegt de WHO over mineralen, en voor wie is osmosewater het meest voordelig?',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/gezondheid' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat zijn de bewezen gezondheidsvoordelen van osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater heeft aantoonbare voordelen door wat het verwijdert: lood (95–99%), PFAS (90%+), nitraat (85–95%), arseen (95%+), bacteriën en virussen worden tegengehouden door het membraan. Deze verwijdering reduceert blootstelling aan bewezen schadelijke stoffen. Daarnaast verwijdert het chloor en chloramine, wat smaak verbetert en blootstelling aan desinfectie-bijproducten zoals THM\'s vermindert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is het ontbreken van mineralen in osmosewater ongezond?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, niet bij een gevarieerd voedingspatroon. De WHO concludeerde in 2005 (Nutrients in Drinking Water) dat drinkwater gemiddeld slechts 10–20% van de dagelijkse calciumbehoefte levert en 4–8% van magnesium. Dit is gemakkelijk te compenseren via voeding (zuivel, groenten, noten). Nieuwer onderzoek bevestigt dat langdurig gebruik van mineraalarm water geen klinisch relevant nadeel heeft bij mensen die gezond eten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Lekt osmosewater mineralen uit de botten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, dit is een veelvoorkomende mythe zonder wetenschappelijke basis. Mineralen worden door de nieren gereguleerd op basis van bloedwaarden, niet op basis van waterkwaliteit. Epidemiologisch onderzoek in regio\'s waar mensen langdurig mineraalarm water drinken toont geen verhoogde osteoporose- of deficiëntie-incidentie. WHO-data bevestigen dit expliciet. Osmosewater "lekt" geen mineralen uit het lichaam.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is osmosewater zuur en schadelijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater heeft een lage buffercapaciteit waardoor het CO₂ uit de lucht absorbeert en een pH van 6,0–6,5 kan bereiken. Dit is licht zuur maar binnen veilige grenzen voor consumptie. Het menselijk lichaam heeft een robuust bicarbonaatsysteem dat de bloedzuurgraad stabiel houdt ongeacht de pH van drinkwater. Remineralisatie herstelt de pH naar 7,0–7,5 voor betere smaak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Voor wie is osmosewater extra voordelig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater is extra waardevol voor: (1) zuigelingen waarvoor babymelk bereid wordt — lood- en nitraatvrij water is cruciaal; (2) zwangere vrouwen die blootstelling aan lood en PFAS willen minimaliseren; (3) mensen in gebieden met verhoogde PFAS-, nitraat- of arsenicumconcentraties; (4) immuungecompromitteerde personen voor wie bacterievrij water extra belangrijk is; (5) niersteenpatiënten op advies van een arts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe verhoudt osmosewater + remineralisatie zich tot mineraalwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater met een remineralisatiefilter heeft een vergelijkbaar mineraalprofiel als commercieel mineraalwater (TDS 50–150 mg/L na remineralisatie). Het is echter aanzienlijk goedkoper (€0,01–0,03/L vs €0,50–2,00/L voor flessenwater), produceert geen plasticafval en bevat geen microplastics die via de plastic fles in het water migreren. Qua mineraleninhoud zijn ze uitwisselbaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moeten nierpatiënten osmosewater drinken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nierpatiënten moeten hun specifieke situatie altijd bespreken met hun nefroloog. Sommige nierpatiënten baat hebben bij beperkte inname van bepaalde mineralen (kalium, fosfaat), waarvoor osmosewater voordelen biedt. Anderen, zoals dialysepatiënten, hebben juist specifieke eisen aan thuisdialyswater. Een generiek advies is niet mogelijk — medisch overleg is vereist.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat bewijst het onderzoek NIET over osmosewater en gezondheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er is geen wetenschappelijk bewijs dat osmosewater actief de gezondheid bevordert buiten het verwijderen van schadelijke stoffen. Claims dat osmosewater "detox" bevordert, de stofwisseling verhoogt, de energieniveaus verbetert of kanker voorkomt zijn niet onderbouwd door klinisch onderzoek. De voordelen van osmosewater zijn defensief van aard: het verwijdert risicostoffen. Het is geen wonderwater.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Gezondheidsvoordelen osmose water: wat zegt het onderzoek?',
  description: 'Evidence-based analyse van de gezondheidsvoordelen van osmosewater: bewezen voordelen, betwiste claims en voor wie het extra zinvol is.',
  datePublished: '2026-04-15',
  dateModified: '2026-04-15',
  url: 'https://waterfilterplatform.nl/osmose-water/gezondheidsvoordelen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseGezondheidsvoordelen() {
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
              { '@type': 'ListItem', position: 3, name: 'Gezondheidsvoordelen', item: 'https://waterfilterplatform.nl/osmose-water/gezondheidsvoordelen' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/osmose-water" className="hover:underline">Osmose water</a> &rsaquo;{' '}
          <span>Gezondheidsvoordelen</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Gezondheidsvoordelen osmose water: wat zegt het onderzoek?
        </h1>

        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#003F5C] mb-1">Kort antwoord</p>
          <p className="text-gray-700 text-sm">
            Osmosewater heeft bewezen voordelen door het verwijderen van lood, PFAS, nitraat, arseen en chloorverbindingen. De bezorgdheid over mineraalverlies is bij een gevarieerd dieet niet gerechtvaardigd (WHO 2005). Met remineralisatie is osmosewater vergelijkbaar met kwalitatief mineraalwater — en veel goedkoper.
          </p>
        </div>

        <CTABanner context="osmose" />

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8 mt-6">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Wat verwijdert osmosewater definitief?
          </h2>
          <p className="text-gray-700 mb-4">
            De gezondheidsvoordelen van osmosewater zijn primair <em>defensief</em>: het verwijdert stoffen die bewezen schadelijk zijn of waarvan het risico reëel is. Dit zijn de stoffen waar het wetenschappelijk bewijs sterk is:
          </p>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Lood (Pb) — 95–99% verwijdering</h3>
              <p className="text-gray-700 text-sm">
                Lood is een van de meest onderzochte neurotoxines. Er bestaat geen veilige blootstellingsgrens voor kinderen. Osmosefilters verwijderen 95–99% van het aanwezige lood — cruciaal voor woningen met loden leidingen (gebouwd voor 1970) of oudere koperen leidingen. Zwangere vrouwen en jonge kinderen lopen het grootste risico.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">PFAS (forever chemicals) — 90%+ verwijdering</h3>
              <p className="text-gray-700 text-sm">
                PFAS-verbindingen (perfluoralkylstoffen) zijn hormoonverstorend en accumuleren in het lichaam. De EU heeft strenge nieuwe normen vastgesteld (0,1 µg/L voor de meest zorgwekkende PFAS). Osmosefilters verwijderen &gt;90% van PFAS-verbindingen. Actieve koolfilters alleen zijn minder effectief bij lage concentraties.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Nitraat — 85–95% verwijdering</h3>
              <p className="text-gray-700 text-sm">
                Nitraat wordt in het lichaam omgezet naar nitriet, dat bij zuigelingen het methemoglobinemie-syndroom (&ldquo;blauwe baby&rdquo;) kan veroorzaken. In landbouwgebieden kan het nitraatgehalte van grondwater de EU-norm van 50 mg/L overschrijden. Osmosefilters bieden effectieve bescherming, met name bij de bereiding van babyvoeding.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Arseen — 95%+ verwijdering</h3>
              <p className="text-gray-700 text-sm">
                Arseen komt van nature voor in bepaalde grondwaterbronnen. Chronische blootstelling is geassocieerd met huid-, long- en blaaskanker. In Nederland zijn arseenconcentraties in kraanwater doorgaans laag, maar privéputten in bepaalde regio&rsquo;s kunnen hogere niveaus hebben. RO verwijdert arseen zeer effectief.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Chloor, chloramine en THM&rsquo;s — nagenoeg volledig</h3>
              <p className="text-gray-700 text-sm">
                Osmosefilters verwijderen chloor en chloramine via het koolstofvoorfilter, en trihalomethanen (desinfectiebijproducten) via het RO-membraan. Dit verbetert niet alleen de smaak maar vermindert ook blootstelling aan THM&rsquo;s die bij hoge concentraties geassocieerd zijn met blaaskanker. Zie ook onze pagina over <a href="/waterfilter/chlooramine" className="text-[#005F8A] underline">chlooramine verwijderen</a>.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Bacteriën en virussen — mechanische barrière</h3>
              <p className="text-gray-700 text-sm">
                Het RO-membraan heeft poriën van 0,0001 µm — klein genoeg om bacteriën (0,2–2 µm) en virussen (0,02–0,3 µm) uit te sluiten. Dit maakt osmosewater extra veilig voor immuungecompromitteerde personen en in situaties waar microbiologische waterkwaliteit onzeker is.
              </p>
            </div>
          </div>
        </section>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Het betwiste gebied: mineralen
        </h2>
        <p className="text-gray-700 mb-4">
          Het meest besproken nadeel van osmosewater is het verwijderen van mineralen zoals calcium en magnesium. Dit roept de vraag op: mis je iets essentieels?
        </p>

        <h3 className="text-lg font-semibold text-[#003F5C] mb-3">Wat zegt de WHO?</h3>
        <p className="text-gray-700 mb-4">
          In 2005 publiceerde de WHO het rapport <em>&ldquo;Nutrients in Drinking Water&rdquo;</em>, het meest geciteerde document over dit onderwerp. Kernbevindingen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Drinkwater levert gemiddeld <strong>10–20% van de dagelijkse calciumbehoefte</strong> en <strong>4–8% van de magnesiumbehoefte</strong> — maar alleen bij hard water.</li>
          <li>Bij zachte water (zoals osmosewater) levert drinkwater praktisch nul mineralen.</li>
          <li>De WHO concludeert dat dit <strong>geen gezondheidsrisico vormt bij een normaal voedingspatroon</strong>, maar adviseert wel dat waterbehandelingsinstallaties die voor grote bevolkingsgroepen produceren rekening houden met mineraalgehalte.</li>
        </ul>

        <h3 className="text-lg font-semibold text-[#003F5C] mb-3">Nieuwer onderzoek</h3>
        <p className="text-gray-700 mb-4">
          Epidemiologische studies uit regio&rsquo;s waar mensen langdurig weinig mineraalwater drinken (Scandinavië, Centraal-Europa met zacht grondwater) tonen geen verhoogde incidentie van osteoporose, hartziekten of mineraaldeficiënties ten opzichte van regio&rsquo;s met hard water, mits voedingspatronen vergelijkbaar zijn.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Praktische conclusie:</strong> Als je gevarieerd eet met zuivel, groenten, noten en volle granen, compenseert jouw voeding ruimschoots de mineralen die drinkwater anders zou leveren. Osmosewater zonder remineralisatie is veilig voor de gezondheid. Met remineralisatie is het optimaal.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Mythes die de wetenschap weerlegt
        </h2>
        <div className="space-y-4 mb-8">
          <div className="border-l-4 border-red-300 bg-red-50 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-1">Mythe: &ldquo;Osmosewater lekt mineralen uit de botten&rdquo;</h3>
            <p className="text-gray-700 text-sm">
              <strong>Feit:</strong> Mineraalhuishouding in het lichaam wordt gereguleerd door hormonen (PTH, calcitonine, vitamine D) en de nieren — niet door de waterkwaliteit. Er bestaat geen fysiologisch mechanisme waarbij de pH of mineralengehalte van drinkwater leidt tot botontkalking. WHO-data en epidemiologische studies weerleggen deze claim expliciet.
            </p>
          </div>
          <div className="border-l-4 border-red-300 bg-red-50 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-1">Mythe: &ldquo;Osmosewater is zuur en schadelijk voor het lichaam&rdquo;</h3>
            <p className="text-gray-700 text-sm">
              <strong>Feit:</strong> Osmosewater heeft een pH van 6,0–6,5 — licht zuur door opgenomen CO₂. De maagzuurwaarde (pH 1,5–3,5) is echter al extreem zuur, en het bicarbonaatsysteem in het bloed reguleert de bloedzuurgraad (pH 7,35–7,45) onafhankelijk van drinkwater-pH. Remineralisatie verbetert de smaak maar is geen medische noodzaak voor de pH-correctie.
            </p>
          </div>
          <div className="border-l-4 border-red-300 bg-red-50 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-1">Mythe: &ldquo;Osmosewater geeft detox of verhoogde energie&rdquo;</h3>
            <p className="text-gray-700 text-sm">
              <strong>Feit:</strong> Er zijn geen klinische studies die aantonen dat osmosewater energieniveaus verhoogt, detoxificeert of de stofwisseling versnelt. Dit zijn marketingclaims zonder wetenschappelijke basis. De bewezen voordelen zijn defensief: het verwijdert schadelijke stoffen.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Voor wie is osmosewater bijzonder waardevol?
        </h2>
        <div className="space-y-3 mb-8">
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Zuigelingen en babyvoeding</h3>
            <p className="text-gray-700 text-sm">
              Bij de bereiding van babymelk is waterzekerheid cruciaal. Lood, nitraat en bacteriën zijn voor zuigelingen gevaarlijker dan voor volwassenen. Osmosewater biedt een maximale beschermingslaag. Let op: gebruik bij voorkeur osmosewater met een kleine hoeveelheid remineralisatie om het natriumgehalte in de goede range te houden.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Zwangere vrouwen</h3>
            <p className="text-gray-700 text-sm">
              Tijdens de zwangerschap is blootstelling aan lood en PFAS bijzonder risicovol vanwege de ontwikkeling van het foetale zenuwstelsel. Osmosewater biedt een significante reductie van deze blootstelling. Raadpleeg uw verloskundige of arts voor persoonlijk advies.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Bewoners van gebieden met verontreinigd water</h3>
            <p className="text-gray-700 text-sm">
              In gebieden nabij industrieterreinen, voormalige vliegvelden of intensieve landbouwgebieden kunnen PFAS, pesticiden of nitraat verhoogd zijn. Osmosefilters bieden hier de meest brede bescherming. Test uw water eerst bij een gecertificeerd laboratorium.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Immuungecompromitteerde personen</h3>
            <p className="text-gray-700 text-sm">
              Mensen met HIV/aids, na orgaantransplantatie of tijdens chemotherapie lopen een verhoogd risico op wateroverdraagbare infecties. De mechanische barrière van het RO-membraan biedt extra bescherming tegen bacteriën en protozoa zoals Cryptosporidium.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Woningen met oud leidingwerk</h3>
            <p className="text-gray-700 text-sm">
              Huizen gebouwd voor 1970 kunnen loden aansluitingen hebben. Zelfs woningen met modern leidingwerk in het net kunnen loodblootstelling hebben als de huisinstallatie oud is. Een osmosefilter onder de gootsteen biedt zekerheid op het punt van gebruik.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosewater + remineralisatie versus mineraalwater: vergelijking
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Aspect</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Osmose + remineralisatie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Mineraalwater (fles)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Mineraalprofiel</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Instelbaar, vergelijkbaar</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Vastgesteld, variabel</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Kosten per liter</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">€0,01–0,03</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">€0,50–2,00</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Plasticafval</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Geen</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Veel (PET-flessen)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Microplastics</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Geen (verwijderd door RO)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Aanwezig (uit fles)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Lood / PFAS</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Verwijderd</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Niet aanwezig (bronwater)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">CO₂-voetafdruk</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Laag (geen transport)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Hoog (productie + transport)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Smaak</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Vergelijkbaar na remineralisatie</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Bekend en consistent</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Voor meer informatie over de basis van osmosewater en wat er in zit, lees ons artikel over <a href="/osmose-water/gezond" className="text-[#005F8A] underline">is osmosewater gezond</a>.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/osmose-water/gezondheid" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater en gezondheid</h3>
            <p className="text-sm text-gray-600">Wat zegt de wetenschap over de gezondheidseffecten van osmosewater drinken?</p>
          </a>
          <a href="/osmose-water/mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Mineralen in osmosewater</h3>
            <p className="text-sm text-gray-600">Welke mineralen zitten in osmosewater en wat is de invloed op uw gezondheid?</p>
          </a>
          <a href="/osmose-water/ph" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">pH van osmosewater</h3>
            <p className="text-sm text-gray-600">Wat is de pH van osmosewater en wat betekent dit voor uw gezondheid?</p>
          </a>
          <a href="/osmose-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater overzicht</h3>
            <p className="text-sm text-gray-600">Alles over osmosewater: toepassingen, gezondheid en kwaliteit.</p>
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
          <a href="/osmose-water/gezond" className="text-[#005F8A] underline">is osmosewater gezond? feiten en fabels</a>{' '}
          en{' '}
          <a href="/waterfilter/zwaar-metalen" className="text-[#005F8A] underline">zware metalen in water filteren</a>.
        </p>
      </main>
    </>
  );
}
