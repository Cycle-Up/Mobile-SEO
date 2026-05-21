import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Chloor in drinkwater: waarom erin en is het veilig?',
  description: 'Chloor in kraanwater: waarom waterbedrijven het toevoegen, Nederlandse normen (max 0,3 mg/L), gezondheidseffecten, THM-risico en wanneer filteren zinvol is.',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwater/chloor' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waarom zit er chloor in kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Waterleidingbedrijven voegen chloor toe als desinfectiemiddel. Chloor doodt bacteriën, virussen en andere ziekteverwekkers in de zuiveringsinstallatie én zorgt voor een restdesinfectie in het leidingnet tot aan de kraan. Zonder desinfectie kunnen gevaarlijke bacteriën zoals Legionella groeien in stilstaand water in leidingen. Dit is een wettelijke verplichting in Europa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is chloor in drinkwater gevaarlijk voor de gezondheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij de wettelijk gereguleerde concentraties (max 0,3 mg/L vrij chloor aan de kraan) is chloor in drinkwater niet gevaarlijk voor de gezondheid — zo concluderen WHO en EFSA. Het indirecte risico komt van desinfectiebijproducten (THM\'s): bij langdurige blootstelling aan hoge THM-niveaus (>70 µg/L) is er een epidemiologische associatie met blaaskanker. Nederlandse niveaus liggen doorgaans ruim onder dit niveau.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen vrij chloor en gebonden chloor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vrij chloor (Cl₂, HOCl, OCl⁻) is het actieve desinfectiemiddel. Gebonden chloor of chloramine ontstaat wanneer vrij chloor reageert met ammoniak of stikstofverbindingen in water. Chloramine heeft een lagere desinfecterende werking maar is stabieler en vormt minder trihalomethanen. Sommige waterbedrijven kiezen bewust voor chloramine om de THM-vorming te beperken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel chloor zit er in Nederlands kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nederlandse waterleidingbedrijven hanteren concentraties van 0,05–0,30 mg/L vrij chloor, afhankelijk van de regio en het distributienetwerk. De EU-norm via het Drinkwaterbesluit is 0,3 mg/L vrij chloor aan de tap. Duitsland gebruikt doorgaans minder chloor omdat de distributienetwerken korter zijn; Nederland heeft langere leidingnetwerken die meer restdesinfectie vereisen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Proef ik chloor in mijn kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De smaakdetectiedrempel voor chloor ligt bij de meeste mensen rond 0,2 mg/L. In regio\'s met hogere chloorconcentraties (zoals Zeeland of sommige stadsgebieden) is de chloorsmaa merkbaar. In gebieden met minder chloor, zoals delen van Vitens-gebied, is de smaak nauwelijks merkbaar. Als uw water naar zwembad ruikt, overweeg dan een koolstoffilter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is chloor in drinkwater slecht voor baby\'s?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De chloorconcentraties in Nederlands leidingwater zijn veilig voor baby\'s. Het RIVM geeft geen specifiek advies om chloor te filteren voor babyvoeding. Wél wordt aanbevolen vers water te gebruiken (niet al uren stilstaand in de leiding) en water te koken voor zuigelingen jonger dan 6 maanden. Wie extra zekerheid wil, kan een koolstoffilter of osmosefilter gebruiken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verschilt chloor in drinkwater per land?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Duitsland gebruikt relatief weinig chloor (kortere distributienetwerken, meer grondwater). België zit iets hoger dan Duitsland maar lager dan Nederland in stedelijke gebieden. Groot-Brittannië gebruikt historisch meer chloor en ook chloramine in sommige regio\'s. De VS gebruikt breed chloramine. Nederland valt in een middengroep, met hogere concentraties in regio\'s met oppervlaktewater als bron.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer heeft het zin om chloor te filteren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Filteren is zinvol wanneer: (1) u de chloorSmaak onaangenaam vindt, (2) u koffie of thee zet en optimale smaak wilt, (3) u een huidaandoening heeft die gevoelig is voor chloor, (4) u een aquarium heeft met vissen, of (5) u THM-blootstelling wilt minimaliseren. Een eenvoudige filterkaan of koolstoffilter volstaat voor smaak; een osmosefilter voor maximale reductie van alle chloorverbindingen en bijproducten.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Chloor in drinkwater: waarom erin en is het veilig?',
  description: 'Chloor in kraanwater: waarom waterbedrijven het toevoegen, Nederlandse normen, gezondheidseffecten en wanneer filteren zinvol is.',
  datePublished: '2026-04-08',
  dateModified: '2026-04-08',
  url: 'https://waterfilterplatform.nl/drinkwater/chloor',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function DrinkwaterChloorPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Chloor', item: 'https://waterfilterplatform.nl/drinkwater/chloor' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/drinkwater" className="hover:underline">Drinkwater</a> &rsaquo;{' '}
          <span>Chloor</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Chloor in drinkwater: waarom erin en is het veilig?
        </h1>

        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#003F5C] mb-1">Kort antwoord</p>
          <p className="text-gray-700 text-sm">
            Chloor in kraanwater is wettelijk verplicht voor desinfectie en is veilig bij de gehanteerde Nederlandse concentraties (0,05–0,30 mg/L). Desinfectiebijproducten (THM&rsquo;s) zijn bij hogere niveaus een aandachtspunt, maar Nederlandse waarden liggen ruim onder de gezondheidsdrempel.
          </p>
        </div>

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom voegen waterbedrijven chloor toe?
        </h2>
        <p className="text-gray-700 mb-4">
          Chloordesinfectie van drinkwater is een van de belangrijkste volksgezondheidsmaatregelen van de twintigste eeuw. Vóór grootschalige chloorbehandeling waren cholera, tyfus en andere watergedragen infectieziekten wijdverspreid. De WHO en EU-Drinkwaterrichtlijn verplichten desinfectie van drinkwater.
        </p>
        <p className="text-gray-700 mb-4">
          Waterleidingbedrijven gebruiken chloor voor twee doelen:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Primaire desinfectie:</strong> Vernietiging van bacteriën, virussen en parasieten in de zuiveringsinstallatie.</li>
          <li><strong>Restdesinfectie:</strong> Een minimale concentratie chloor die in het leidingnet actief blijft, ook wanneer het water al in jouw wijk of huis stroomt. Dit voorkomt hergroei van bacteriën, inclusief Legionella.</li>
        </ol>
        <p className="text-gray-700 mb-6">
          In Nederland wordt voornamelijk natriumhypochloriet (NaOCl, bleekmiddel) of chloorgas (Cl₂) gebruikt. Het type desinfectiemiddel bepaalt welke bijproducten ontstaan en hoe makkelijk chloor te verwijderen is.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De chemie van chloor: vrij, gebonden en bijproducten
        </h2>
        <p className="text-gray-700 mb-4">
          Chloor in water bestaat in meerdere vormen, afhankelijk van de pH:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Vrij chloor:</strong> Cl₂ (chloorgas), HOCl (hypochloorzuur, sterkste desinfectant) en OCl⁻ (hypochloriet). Vrij chloor is snel werkzaam maar vluchtig.</li>
          <li><strong>Gebonden chloor / chloramine:</strong> Ontstaat als vrij chloor reageert met ammoniak (NH₃) aanwezig in het water. Chloramine is stabieler maar minder actief als desinfectant.</li>
          <li><strong>Trihalomethanen (THM&rsquo;s):</strong> Bijproducten die ontstaan als chloor reageert met organisch materiaal. Voorbeelden: chloroform (CHCl₃), bromoform, bromodichloormethaan.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Chloorconcentraties: Nederland vs. andere landen
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Land/regio</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Vrij chloor (mg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Opmerkingen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Nederland (gemiddeld)</td>
                <td className="border border-gray-300 px-3 py-2">0,05–0,25</td>
                <td className="border border-gray-300 px-3 py-2">Varieert per regio en bron</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Nederland (max wettelijk)</td>
                <td className="border border-gray-300 px-3 py-2">0,30</td>
                <td className="border border-gray-300 px-3 py-2">EU Drinkwaterbesluit</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Duitsland</td>
                <td className="border border-gray-300 px-3 py-2">0,02–0,10</td>
                <td className="border border-gray-300 px-3 py-2">Kortere netten, meer grondwater</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">België</td>
                <td className="border border-gray-300 px-3 py-2">0,05–0,25</td>
                <td className="border border-gray-300 px-3 py-2">Vergelijkbaar met NL</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Verenigd Koninkrijk</td>
                <td className="border border-gray-300 px-3 py-2">0,10–0,50</td>
                <td className="border border-gray-300 px-3 py-2">Chloramine in sommige regio&rsquo;s</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">WHO advieswaarde</td>
                <td className="border border-gray-300 px-3 py-2">max 5</td>
                <td className="border border-gray-300 px-3 py-2">Veiligheidsmarge ver boven praktijk</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Nederland gebruikt meer chloor dan Duitsland vanwege langere distributienetwerken (water legt grotere afstanden af) en het hogere aandeel oppervlaktewater als bron, dat meer organisch materiaal bevat en intensievere behandeling vereist.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Is chloor veilig? Wat zegt de wetenschap?
        </h2>
        <p className="text-gray-700 mb-4">
          De WHO en EFSA (Europese Autoriteit voor Voedselveiligheid) stellen dat chloor in drinkwater bij de gehanteerde concentraties geen directe gezondheidsschade veroorzaakt. De smaakdetectiedrempel ligt voor de meeste mensen rond 0,2 mg/L — bij lagere concentraties proeft men doorgaans niets.
        </p>
        <p className="text-gray-700 mb-4">
          De aandacht van onderzoekers richt zich meer op de <strong>desinfectiebijproducten (THM&rsquo;s en haloazijnzuren)</strong>. Epidemiologische studies tonen een associatie tussen langdurige blootstelling aan totaal-THM-concentraties boven 70–80 µg/L en een verhoogd risico op blaaskanker. De EU-norm is 100 µg/L totaal-THM.
        </p>
        <p className="text-gray-700 mb-6">
          In de meeste Nederlandse regio&rsquo;s liggen THM-waarden ruim onder 50 µg/L. Voor de overgrote meerderheid van consumenten is er geen aanleiding tot zorg. Gevoelige groepen (zwangere vrouwen, mensen met sterk verhoogd risico op blaaskanker) kunnen ervoor kiezen te filteren als extra voorzorgsmaatregel.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gevoelige groepen: wanneer is extra aandacht nodig?
        </h2>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Huidaandoeningen (eczeem, psoriasis)</h3>
            <p className="text-gray-700 text-sm">Chloor kan de huidbarrière aantasten en irritatie verergeren bij mensen met atopische huidaandoeningen. Zowel drinkwater als douchewater kunnen bijdragen. Een koolstoffilter aan de kraan of douche is een praktische maatregel.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Zuigelingen</h3>
            <p className="text-gray-700 text-sm">De chloorconcentraties in Nederlands leidingwater zijn veilig voor baby&rsquo;s. Het RIVM raadt aan vers water te gebruiken voor babyvoeding en water te koken voor baby&rsquo;s jonger dan 6 maanden. Extra filtratie is geen vereiste maar kan gemoedsrust geven.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Mensen met aquaria</h3>
            <p className="text-gray-700 text-sm">Chloor is giftig voor vissen en andere waterorganismen. Water voor aquaria moet altijd worden ontchloord — door laten staan, natriumthiosulfaat toevoegen of filtratie met actief kool.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer chloor filteren?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor de meeste mensen is filteren van chloor geen noodzaak, maar een kwestie van smaak en comfort. Overweeg filteren wanneer:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>U de chloorSmaak of -geur onaangenaam vindt</li>
          <li>U koffie of thee zet en de beste smaak wilt</li>
          <li>U een huidaandoening heeft die gevoelig is voor chloor</li>
          <li>U een aquarium heeft</li>
          <li>U THM-blootstelling wilt minimaliseren (zwangerschap, verhoogd risico)</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor een uitgebreide vergelijking van alle methoden, zie onze pagina over{' '}
          <a href="/waterfilter/chloor-verwijderen" className="text-[#005F8A] underline">chloor verwijderen uit kraanwater</a>. Voor algemene filteropties, zie onze{' '}
          <a href="/waterfilter/soorten" className="text-[#005F8A] underline">vergelijking van waterfiltersoorten</a>.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/stoffen-in-drinkwater/chloor-bijproducten" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Chloorbijproducten in drinkwater</h3>
            <p className="text-sm text-gray-600">Risicos van trihalomethanen en andere chloorbijproducten.</p>
          </a>
          <a href="/koolstoffilter/chloor" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Koolstoffilter voor chloor</h3>
            <p className="text-sm text-gray-600">Hoe actief kool chloor effectief uit kraanwater verwijdert.</p>
          </a>
          <a href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Actief kool filtratie</h3>
            <p className="text-sm text-gray-600">Werking en toepassingen van actief kool als filtertechniek.</p>
          </a>
          <a href="/waterfilter/chloor-verwijderen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Chloor verwijderen</h3>
            <p className="text-sm text-gray-600">Overzicht van methoden om chloor uit kraanwater te verwijderen.</p>
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
          Zie ook: <a href="/waterfilter/chloor-verwijderen" className="text-[#005F8A] underline">5 methoden om chloor te verwijderen</a> en <a href="/drinkwater/kwaliteit" className="text-[#005F8A] underline">drinkwaterkwaliteit in Nederland</a>.
        </p>
      </main>
    </>
  );
}
