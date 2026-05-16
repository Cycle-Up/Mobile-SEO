import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Chlooramine in water: zwaarder te verwijderen dan chloor',
  description: 'Chlooramine in drinkwater: wat is monochloramine, waarom gebruiken waterbedrijven het, waarom is het moeilijker te verwijderen dan chloor, en welke filters werken écht?',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/chlooramine' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is chlooramine en hoe verschilt het van chloor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chlooramine is een verbinding die ontstaat wanneer chloor reageert met ammoniak. De meest voorkomende vorm in drinkwater is monochloramine (NH₂Cl). In tegenstelling tot vrij chloor, dat vluchtig is en snel dissipeert, is monochloramine veel stabieler en blijft het weken actief in het leidingnet. Dit maakt het nuttig als desinfectant maar moeilijker te verwijderen dan gewoon chloor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom gebruiken waterleidingbedrijven chlooramine in plaats van chloor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Waterleidingbedrijven kiezen voor chlooramine vanwege twee voordelen: ten eerste heeft het een langere restduur in het distributienet — tot 3 keer langer actief dan vrij chloor. Ten tweede vormt chlooramine aanzienlijk minder trihalomethanen (THM\'s) bij reactie met organisch materiaal, wat gunstig is voor de voldoening aan strenge EU-normen voor desinfectiebijproducten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke waterleidingbedrijven in Nederland gebruiken chlooramine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Nederland is het gebruik van chlooramine beperkt maar niet afwezig. Sommige leveranciers in Oost-Nederland, waaronder delen van het verzorgingsgebied van Vitens en Brabant Water, passen chloraminering toe in delen van het distributienet met lange transportafstanden. Controleer het jaarverslag of de waterkwaliteitsrapportage van jouw waterleidingbedrijf om te weten of jouw regio betroffen is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een gewoon koolstoffilter chlooramine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een gewoon granulaat-actief-koolfilter (GAC) verwijdert chlooramine veel minder efficiënt dan vrij chloor. De adsorptiereactie is trager en vereist minstens 3 minuten contacttijd. De meeste standaard GAC-filters bieden onvoldoende contacttijd bij normale doorstroomsnelheden. Catalytisch actief koolstof is de juiste keuze voor chloramineverwijdering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is catalytisch actief koolstof en waarom werkt het beter voor chlooramine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Catalytisch geactiveerd koolstof heeft een gewijzigde oppervlaktechemie die de afbraak van chlooramine katalyseert. In plaats van alleen adsorptie vindt er een chemische reactie plaats waarbij chlooramine wordt afgebroken. Kokosnootdopkool heeft van nature een gunstigere microporeuze structuur. Blokfilters van catalytisch kool bieden meer contacttijd dan granulaat en zijn efficiënter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is chlooramine gevaarlijk voor dialysepatiënten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, chlooramine is bijzonder gevaarlijk voor dialysepatiënten. Tijdens hemodialyse komt bloed direct in contact met grote hoeveelheden water. Chlooramine in dat water kan door het dialysemembraan dringen en hemolytische anemie (bloedafbraak) veroorzaken. Dialysecentra gebruiken verplicht gespecialiseerde waterbehandeling. Thuisdialyse vereist specifiek advies van de behandelend arts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom is chlooramine schadelijk voor aquariumvissen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vissen ademen water door hun kieuwen en chlooramine beschadigt het gevoelige kieuwweefsel direct, zelfs bij de lage concentraties die in kraanwater voorkomen (0,1–2 mg/L). Anders dan vrij chloor verdwijnt chlooramine ook niet door het water te laten staan of te beluchten. Aquariumhouders moeten specifieke ontchloramineringmiddelen gebruiken of een osmosefilter inzetten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter chlooramine volledig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een osmosefilter verwijdert chlooramine in twee stappen. Eerst verwijdert het koolstofvoorfilter het grootste deel van de chlooramine (osmosemembranen zijn gevoelig voor oxidanten). Vervolgens vangt het RO-membraan eventuele resterende verbindingen op. Een goed onderhouden osmosefilter met regelmatig vervangen koolprefilter biedt de meest volledige bescherming tegen zowel chloor als chlooramine.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Chlooramine in water: zwaarder te verwijderen dan chloor',
  description: 'Wat is chlooramine, waarom gebruiken waterbedrijven het, en welke filters verwijderen het effectief uit drinkwater.',
  datePublished: '2026-04-15',
  dateModified: '2026-04-15',
  url: 'https://waterfilterplatform.nl/waterfilter/chlooramine',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function ChlooramineWaterfilterPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Chlooramine', item: 'https://waterfilterplatform.nl/waterfilter/chlooramine' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterfilter" className="hover:underline">Waterfilter</a> &rsaquo;{' '}
          <span>Chlooramine</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Chlooramine in water: zwaarder te verwijderen dan chloor
        </h1>

        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#003F5C] mb-1">Kort antwoord</p>
          <p className="text-gray-700 text-sm">
            Chlooramine (monochloramine) is een stabiele desinfectant die waterbedrijven gebruiken vanwege minder bijproducten. Het verdwijnt niet door laten staan en vereist catalytisch actief koolstof of een osmosefilter voor effectieve verwijdering — gewone GAC-filters zijn onvoldoende.
          </p>
        </div>

        <CTABanner context="osmose" />

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8 mt-6">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Wat is chlooramine?
          </h2>
          <p className="text-gray-700 mb-4">
            Chlooramine is een groep chemische verbindingen die ontstaan wanneer chloor reageert met ammoniak (NH₃) in water. Er zijn drie vormen:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Monochloramine (NH₂Cl):</strong> De meest gebruikte vorm in drinkwaterbehandeling — stabieler, minder agressief, langzamere desinfectie maar langere restduur.</li>
            <li><strong>Dichloramine (NHCl₂):</strong> Vormt bij hogere chloor-stikstof-verhoudingen; sterkere geur, minder gewenst.</li>
            <li><strong>Trichloramine (NCl₃):</strong> Bekende geur bij overdosering in zwembaden; in drinkwater nauwelijks aanwezig.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            In drinkwaterbehandeling wordt uitsluitend monochloramine bewust toegepast. De vorming vindt gecontroleerd plaats door chloor en ammoniak in de juiste verhouding (5:1 op gewichtsbasis) toe te voegen aan het behandelde water.
          </p>
        </section>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom kiezen waterbedrijven voor chlooramine?
        </h2>
        <p className="text-gray-700 mb-4">
          Het gebruik van chlooramine als alternatief voor vrij chloor kent twee belangrijke drijfveren:
        </p>
        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">1. Langere restduur in het leidingnet</h3>
            <p className="text-gray-700 text-sm">
              Vrij chloor reageert snel met organisch materiaal in leidingen en verliest zijn desinfecterende werking. Monochloramine is chemisch stabieler en blijft actief over langere transportafstanden — tot drie keer langer dan vrij chloor. Dit is cruciaal voor uitgebreide distributienetwerken in landelijke gebieden van Oost-Nederland.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">2. Minder trihalomethanen (THM&rsquo;s)</h3>
            <p className="text-gray-700 text-sm">
              Wanneer vrij chloor reageert met humuszuren en andere organische verbindingen in water, ontstaan trihalomethanen (THM&rsquo;s) zoals chloroform. De EU-norm is 100 µg/L. Chlooramine vormt aanzienlijk minder THM&rsquo;s dan vrij chloor, wat helpt om onder de wettelijke limieten te blijven — vooral relevant voor bronnen met hoog organisch materiaalgehalte.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Nederlandse situatie: wie gebruikt chlooramine?
        </h2>
        <p className="text-gray-700 mb-4">
          In Nederland is het gebruik van chlooramine niet wijdverspreid, maar ook niet afwezig. De meeste Nederlandse waterleidingbedrijven werken primair met vrij chloor (natriumhypochloriet) als desinfectant. Echter, in regio&rsquo;s met lange distributielijnen en hogere organische belasting van het bronwater — zoals in Oost-Nederland — passen leveranciers zoals <strong>Vitens</strong> en <strong>Brabant Water</strong> in bepaalde delen van het net chlooraminering toe.
        </p>
        <p className="text-gray-700 mb-4">
          Wil je weten of jouw regio chlooramine gebruikt? Kijk in het jaarlijkse waterkwaliteitsverslag van jouw waterleidingbedrijf, of gebruik een gespecialiseerde testkit die onderscheid maakt tussen vrij chloor en totaalchloor. Als totaalchloor hoger is dan vrij chloor, is er waarschijnlijk chlooramine aanwezig.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom is chlooramine moeilijker te verwijderen dan chloor?
        </h2>
        <p className="text-gray-700 mb-4">
          De stabiliteit die chlooramine zo nuttig maakt als desinfectant, maakt het ook lastig om te verwijderen voor de consument:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Niet vluchtig:</strong> Vrij chloor dissipeert na 30–60 minuten laten staan in een open bak. Chlooramine niet — zelfs na 24 uur zijn er nauwelijks meetbare concentratiedalingen bij kamertemperatuur.</li>
          <li><strong>Koolstofadsorptie is trager:</strong> Gewone geactiveerde kool adsorbeert vrij chloor vrijwel direct via Van der Waals-krachten. Bij chlooramine is de adsorptiereactie veel langzamer en vereist minimaal 3 minuten contacttijd — die de meeste GAC-filters bij normale doorstroomsnelheden niet bieden.</li>
          <li><strong>Penetreert dieper:</strong> Door zijn kleinere molecuulgrootte en grotere stabiliteit dringt chlooramine makkelijker door barrières die vrij chloor tegenhouden.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsrelevantie: wie loopt risico?
        </h2>
        <div className="space-y-4 mb-8">
          <div className="border-l-4 border-red-400 bg-red-50 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-2">Dialysepatiënten: ernstig risico</h3>
            <p className="text-gray-700 text-sm">
              Dialysepatiënten mogen <strong>geen</strong> kraanwater gebruiken dat chlooramine bevat zonder specifieke behandeling. Tijdens hemodialyse komt bloed in direct contact met grote volumes water via het dialysemembraan. Chlooramine kan door dit membraan dringen en hemolytische anemie veroorzaken — een ernstige vorm van bloedarmoede door afbraak van rode bloedcellen. Dialysecentra zijn wettelijk verplicht om chlooramine te verwijderen.
            </p>
          </div>
          <div className="border-l-4 border-yellow-400 bg-yellow-50 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-800 mb-2">Aquariumvissen: gevaar bij kraanwaterconcentraties</h3>
            <p className="text-gray-700 text-sm">
              Zelfs bij de lage concentraties die in kraanwater voorkomen (0,1–2 mg/L) is chlooramine direct giftig voor vissen en andere waterorganismen. Het beschadigt het kieuwweefsel en verstoort de zuurstofopname. Aquariumhouders die kraanwater gebruiken, moeten chlooramine actief neutraliseren — laten staan of beluchten is onvoldoende.
            </p>
          </div>
          <div className="border-l-4 border-blue-400 bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">Algemene bevolking</h3>
            <p className="text-gray-700 text-sm">
              Voor de algemene bevolking zijn de concentraties in drinkwater (doorgaans onder 3 mg/L) niet acuut gevaarlijk bij normaal drinkwatergebruik. Langetermijnsonderzoek naar chronische blootstelling loopt nog. Mensen met gevoelige maag, huidirritaties of specifieke medische aandoeningen kunnen baat hebben bij het verwijderen van chlooramine.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke filters verwijderen chlooramine effectief?
        </h2>

        <h3 className="text-lg font-semibold text-[#003F5C] mb-3">Catalytisch actief koolstof</h3>
        <p className="text-gray-700 mb-4">
          Catalytisch geactiveerd koolstof (ook wel &ldquo;catalytic carbon&rdquo; genoemd) is de beste keuze voor chloramineverwijdering. De oppervlaktechemie van dit materiaal is gemodificeerd — vaak door stoomactivering bij hogere temperaturen — waardoor de koolstofatomen als katalysator fungeren bij de afbraak van chlooramine. In plaats van simpele adsorptie vindt er een chemische reactie plaats.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Kokosnootdopkool</strong> heeft van nature een microporeuze structuur die bijzonder geschikt is voor chloramineverwijdering. Blokfilters van catalytisch kokosnootkool bieden meer contacttijd dan losse granulaten en presteren beter bij normale waterdoorstroomsnelheden.
        </p>

        <h3 className="text-lg font-semibold text-[#003F5C] mb-3">Granulaat versus blok: contacttijd is beslissend</h3>
        <p className="text-gray-700 mb-6">
          Voor chloramineverwijdering is contacttijd de kritische factor. Granulaat-actief-koolfilters (GAC) bieden een kortere contacttijd doordat water snel door de losse korrels stroomt. Blokfilters dwingen water door een compact koolstofmatrix, wat een contacttijd van meerdere minuten oplevert. Voor chlooramine geldt: <strong>minimaal 3 minuten contacttijd</strong> is nodig voor effectieve verwijdering. Bij GAC-filters bereiken de meeste huishoudinstallaties dit niet.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: filterprestaties voor chloor en chlooramine
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Vrij chloor</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Chlooramine</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Opmerkingen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Laten staan</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ goed</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗ geen effect</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600 text-xs">Chlooramine is niet vluchtig</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Standaard GAC-filter</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ 95–99%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">± 30–60%</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600 text-xs">Onvoldoende contacttijd</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Catalytisch kool (blok)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ 99%+</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ 85–99%</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600 text-xs">Beste koolstofoptie voor chlooramine</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Catalytisch kool (granulaat)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ 95–99%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">± 50–80%</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600 text-xs">Beter dan standaard GAC, minder dan blok</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Osmosefilter (RO)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ 99%+</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ 95–99%</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600 text-xs">Verwijdert via koolprefilter + membraan</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">UV-lamp</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600 text-xs">Geen effect op chemische verbindingen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Filterkan (Brita e.d.)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ 85–95%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">± onzeker</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600 text-xs">Niet getest voor chlooramine</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktisch advies: wat te doen?
        </h2>
        <p className="text-gray-700 mb-4">
          Stap 1 is uitzoeken of jouw waterleidingbedrijf chlooramine gebruikt. Dit kan via het jaarverslag, een testkit (totaalchloor versus vrij chloor meten), of contact met de klantenservice. Als je chlooramine hebt:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Vervang je koolfilters door catalytisch actief kool</strong> — specifiek blokfilters voor hogere contacttijd.</li>
          <li><strong>Overweeg een osmosefilter</strong> als je ook andere verontreinigingen wilt aanpakken. Zie onze pagina over <a href="/waterfilter/chloor-verwijderen" className="text-[#005F8A] underline">chloor verwijderen</a> voor een vergelijking.</li>
          <li><strong>Aquariumhouders:</strong> gebruik specifieke waterontkiemers op basis van natriumbisulfiet of natriumthiosulfaat, gecombineerd met een osmosefilter voor volledig veilig aquariumwater.</li>
          <li><strong>Dialysepatiënten:</strong> raadpleeg altijd uw nefroloog of dialysecentrum — dit vereist gespecialiseerde behandeling.</li>
        </ol>

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
          <a href="/waterfilter/chloor-verwijderen" className="text-[#005F8A] underline">chloor verwijderen uit kraanwater</a>{' '}
          en{' '}
          <a href="/osmose-water/gezondheidsvoordelen" className="text-[#005F8A] underline">gezondheidsvoordelen van osmosewater</a>.
        </p>
      </main>
    </>
  );
}
