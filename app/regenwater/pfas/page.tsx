import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'PFAS in regenwater: meetwaarden NL en filteropties uitgelegd',
  description:
    'PFAS komt via atmosferische depositie in regenwater terecht. Nederlandse meetwaarden 5-50 ng/L. Omgekeerde osmose verwijdert meer dan 95%, actief kool 60-90%.',
  alternates: { canonical: 'https://waterfilterplatform.nl/regenwater/pfas' },
};

const faqItems = [
  {
    q: 'Zit er PFAS in regenwater?',
    a: 'Ja, regenwater in Nederland bevat aantoonbare hoeveelheden PFAS door atmosferische depositie. Het RIVM en KWR Watercycle Research Institute hebben PFAS-concentraties gemeten tussen 5 en 50 ng/L in regenwater, afhankelijk van de regio en het seizoen. PFAS-verbindingen (PFOS, PFOA, GenX, PFHxS) verspreiden zich via de atmosfeer vanaf industriele bronnen wereldwijd en slaan neer met regen en sneeuw. Geen enkel regenwater op aarde is meer PFAS-vrij volgens recent onderzoek (Cousins et al., 2022).',
  },
  {
    q: 'Welke PFAS-waarden zijn gemeten in Nederlands regenwater?',
    a: 'Metingen door RIVM en universiteiten (2020 tot 2024) tonen PFAS-concentraties in Nederlands regenwater van 5 tot 50 ng/L (somwaarde van 20 belangrijkste PFAS-verbindingen). Industriele hotspots zoals omgeving Dordrecht (Chemours-fabriek) en delen van Noord-Brabant tonen hogere waarden tot 100 ng/L. Schoner Zeeland en Noord-Nederland: 5 tot 15 ng/L. Ter referentie: de EFSA-veiligheidsdrempel voor de som van 4 belangrijke PFAS is 4,4 ng/kg lichaamsgewicht per week, een grens die in PFAS-hotspots snel wordt overschreden bij regelmatig gebruik van ongezuiverd regenwater.',
  },
  {
    q: 'Welke filter verwijdert PFAS uit regenwater?',
    a: 'Omgekeerde osmose (RO) is de meest effectieve techniek: verwijdert meer dan 95% van alle PFAS-verbindingen, inclusief korte-keten PFAS zoals GenX en PFBS. Actief-koolfilter (granular activated carbon, GAC) is een goedkoper alternatief: verwijdert 60 tot 90% van lange-keten PFAS (PFOS, PFOA) maar slechts 20 tot 50% van korte-keten PFAS. Ionenwisselaars met selectief PFAS-hars verwijderen 95 tot 99% maar zijn duur. Voor regenwaterzuivering wordt doorgaans een combinatie aanbevolen: actief kool als voorfilter en omgekeerde osmose voor finalisering.',
  },
  {
    q: 'Hoe komt PFAS in regenwater terecht?',
    a: 'PFAS komt in regenwater via atmosferische depositie: industriele uitstoot van PFAS-producerende fabrieken (Chemours-Dordrecht, 3M-Antwerpen, fluorpolymeer-industrie wereldwijd), verbranding van PFAS-houdende producten in afvalovens, en verdamping vanuit oppervlaktewater en oceanen. PFAS verdampen niet als individuele moleculen maar binden aan stofdeeltjes en aerosolen die hoog in de atmosfeer worden getransporteerd. Met regen, sneeuw en mist slaan ze neer op land en water, ook in gebieden ver van industriele bronnen.',
  },
  {
    q: 'Zijn er PFAS-hotspots in Nederland?',
    a: 'Ja. De bekendste PFAS-hotspots in Nederland zijn de omgeving van Dordrecht (Chemours-fabriek, voormalig DuPont) met verhoogde PFAS-concentraties in bodem, oppervlaktewater en lucht binnen straal van 15 tot 25 km. Schiphol-regio kent verhoogde waarden door brandblusschuim (PFOS) gebruikt voor brandbestrijdingsoefeningen tot 2020. Andere hotspots: Eindhoven (Brainport-industrie), Helmond (verschillende industriele bronnen) en delen van Noord-Brabant en Zeeland. RIVM publiceert jaarlijks update van PFAS-meetwaarden per gebied.',
  },
  {
    q: 'Kan ik regenwater drinken na PFAS-filtratie?',
    a: 'Met geschikte filtering (actief kool plus omgekeerde osmose) kan PFAS uit regenwater worden verwijderd tot onder detectiegrens. Echter, regenwater drinken wordt zelden aanbevolen, omdat naast PFAS ook andere risicos bestaan: microbiele besmetting (E. coli, Legionella), zware metalen (lood van oudere dakgoten, koper), zuurgraad (pH circa 5) en organisch materiaal. Drinken vereist actief kool plus omgekeerde osmose plus UV-sterilisatie plus pH-correctie &mdash; samen ruim 1500 tot 3000 euro extra naast de tankinstallatie. Kraanwater met huishoudelijke RO-filter is een veel praktischere en goedkopere oplossing voor PFAS-arm drinkwater.',
  },
  {
    q: 'Hoeveel PFAS verwijdert actief kool uit regenwater?',
    a: 'Actief kool (GAC, granular activated carbon) verwijdert 60 tot 90% van lange-keten PFAS zoals PFOS en PFOA bij correcte dimensionering (contacttijd minimaal 10 minuten en frequente filtervervanging). Voor korte-keten PFAS zoals GenX, PFBS en PFBA is actief kool minder effectief: slechts 20 tot 50% verwijdering, omdat deze kleinere moleculen minder sterk aan het kooloppervlak binden. Voor regenwater met onbekende PFAS-samenstelling biedt enkel actief kool dus geen volledige garantie. Combineer altijd met omgekeerde osmose voor zekerheid.',
  },
  {
    q: 'Is regenwater zonder filter gevaarlijk vanwege PFAS?',
    a: 'Voor toepassingen zoals tuinbesproeiing, WC-doorspoelen en wasmachine is ongezuiverd regenwater met PFAS-niveaus van 5 tot 50 ng/L acceptabel: er is geen significante blootstelling via huid of inademing. Voor douchen, drinken of koken is filtering noodzakelijk in PFAS-hotspots (omgeving Dordrecht, Schiphol-zone) om de EFSA-veiligheidsdrempel niet te overschrijden. Voor babyvoeding wordt regenwater zelfs na filtering afgeraden vanwege de extra kwetsbaarheid van zuigelingen. Gebruik dan een huishoudelijk RO-filter op het kraanwater.',
  },
];

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'PFAS in regenwater: meetwaarden en filteropties voor Nederland',
  description:
    'PFAS komt via atmosferische depositie in regenwater terecht. Nederlandse meetwaarden 5 tot 50 ng/L. Omgekeerde osmose verwijdert meer dan 95%, actief kool 60-90%.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/regenwater/pfas',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function RegenwaterPfasPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Regenwater', item: 'https://waterfilterplatform.nl/regenwater' },
              { '@type': 'ListItem', position: 3, name: 'PFAS in regenwater', item: 'https://waterfilterplatform.nl/regenwater/pfas' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/regenwater" className="hover:underline">Regenwater</Link> &rsaquo;{' '}
          <span>PFAS in regenwater</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            PFAS in regenwater: meetwaarden NL en filteropties uitgelegd
          </h1>
          <p className="text-gray-700 text-lg">
            Regenwater bevat in Nederland 5 tot 50 ng/L PFAS door atmosferische depositie. Omgekeerde osmose verwijdert meer dan 95%, actief kool 60 tot 90% afhankelijk van PFAS-type.
          </p>
        </div>

        <QuickAnswer answer="Nederlands regenwater bevat 5&ndash;50 ng/L PFAS door atmosferische depositie, met hotspots tot 100 ng/L bij Dordrecht (Chemours) en Schiphol. Voor verwijdering: omgekeerde osmose verwijdert &gt;95% van alle PFAS-verbindingen, actief kool 60&ndash;90% van lange-keten PFAS maar slechts 20&ndash;50% van korte-keten PFAS zoals GenX. Voor tuin en WC is ongezuiverd regenwater acceptabel; voor douchen of drinken is filtering noodzakelijk in hotspots." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe komt PFAS in regenwater terecht?
        </h2>
        <p className="text-gray-700 mb-4">
          PFAS (poly- en perfluoralkylstoffen) zijn synthetische chemicalien die wereldwijd worden gebruikt in antiaanbaklagen, waterafstotende coatings, brandblusschuim en industriele toepassingen. Ze worden vrijgesteld bij productie, gebruik en verbranding, en verspreiden zich vervolgens via de atmosfeer. PFAS-moleculen binden aan stofdeeltjes en aerosolen die hoog in de atmosfeer worden getransporteerd, vaak duizenden kilometers ver van de bron.
        </p>
        <p className="text-gray-700 mb-4">
          Met regen, sneeuw en mist slaan deze PFAS-deeltjes neer op land en water &mdash; ook in gebieden ver van industriele bronnen. Onderzoek door Cousins et al. (2022, Environmental Science &amp; Technology) toont aan dat geen enkele plaats op aarde nog PFAS-vrij regenwater kent, inclusief afgelegen gebieden zoals Antarctica en het Tibetaans Plateau. De EPA-drinkwaternorm voor PFOS plus PFOA (4 ng/L) wordt vrijwel overal in regenwater wereldwijd overschreden.
        </p>
        <p className="text-gray-700 mb-6">
          Lees ook ons <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="text-[#005F8A] underline">PFAS-overzicht voor drinkwater</Link> voor een complete uitleg over PFAS-typen, gezondheidseffecten en regelgeving.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gemeten waarden in Nederland: regionaal verschil
        </h2>
        <p className="text-gray-700 mb-4">
          Metingen door RIVM, KWR en TNO (2020 tot 2024) tonen variabele PFAS-concentraties in Nederlands regenwater, afhankelijk van locatie, seizoen en windrichting. De somwaarde van de 20 belangrijkste PFAS-verbindingen ligt doorgaans tussen 5 en 50 ng/L. Industriele hotspots (omgeving Dordrecht, Schiphol-zone, delen van Brabant) tonen waarden tot 100 ng/L.
        </p>
        <p className="text-gray-700 mb-6">
          Ter referentie: de EFSA-veiligheidsdrempel voor de som van vier belangrijke PFAS (PFOA, PFOS, PFNA, PFHxS) is 4,4 ng per kilogram lichaamsgewicht per week. Voor een volwassene van 70 kg komt dit neer op 308 ng per week. Bij regelmatig gebruik van ongezuiverd regenwater (1 liter per dag) in een hotspot-gebied kan deze drempel snel worden overschreden. Zie ook <Link href="/drinkwaternormen" className="text-[#005F8A] underline">drinkwaternormen Nederland</Link> voor alle relevante PFAS-grenswaarden.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          PFAS-hotspots in Nederland
        </h2>
        <p className="text-gray-700 mb-4">
          De bekendste PFAS-hotspot in Nederland is de omgeving van Dordrecht, rond de Chemours-fabriek (voorheen DuPont). De fabriek produceert sinds de jaren 1960 PFOA en sinds 2012 GenX, met aantoonbare verhoogde PFAS-concentraties in bodem, oppervlaktewater, gewassen en lucht in een straal van 15 tot 25 kilometer. Het RIVM publiceerde in 2024 dat inwoners binnen deze zone aantoonbaar verhoogde PFAS-niveaus in hun bloed hebben.
        </p>
        <p className="text-gray-700 mb-6">
          De Schiphol-regio kent verhoogde PFAS-waarden door het gebruik van PFOS-houdend brandblusschuim voor brandbestrijdingsoefeningen tot 2020. Andere hotspots zijn de Brainport-regio Eindhoven (verschillende industriele bronnen), delen van West-Brabant en de Westerschelde-zone in Zeeland (3M Antwerpen via lucht en water). Voor specifieke regionale advies, zie onze <Link href="/waterfilter/pfas" className="text-[#005F8A] underline">PFAS-waterfilter-pagina</Link> per gebied.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filtertechnieken: wat werkt tegen PFAS?
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filtertechniek</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Lange-keten PFAS</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Korte-keten PFAS</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kosten</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Sedimentfilter</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0%</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;20&ndash;50</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief kool (GAC)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">60&ndash;90%</td>
                <td className="border border-gray-300 px-3 py-2">20&ndash;50%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;100&ndash;300</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Ionenwisselaar (PFAS-hars)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">95&ndash;99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">90&ndash;98%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;500&ndash;1200</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">&gt;95%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">&gt;95%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300&ndash;800</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-4">
          Omgekeerde osmose is de meest effectieve techniek tegen alle PFAS-verbindingen, inclusief de moeilijk te verwijderen korte-keten PFAS zoals GenX, PFBS en PFBA. De semi-permeabele RO-membraan houdt moleculen groter dan circa 0,0001 micron tegen, waardoor vrijwel alle PFAS worden afgevangen ongeacht ketenlengte. Meer over deze techniek leest u op <Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose werking</Link>.
        </p>
        <p className="text-gray-700 mb-6">
          Actief kool is een goedkoper alternatief maar minder volledig. Lange-keten PFAS (PFOS, PFOA) binden goed aan het kooloppervlak waardoor 60 tot 90% verwijdering haalbaar is. Korte-keten PFAS zijn kleiner en polairder, binden minder sterk en worden slechts voor 20 tot 50% verwijderd. Voor regenwater met onbekende PFAS-mix biedt enkel actief kool dus geen sluitende garantie. Combineer altijd actief kool als voorfilter met omgekeerde osmose voor zekerheid.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is PFAS-filtering van regenwater noodzakelijk?
        </h2>
        <p className="text-gray-700 mb-6">
          Voor toepassingen zonder directe blootstelling (tuinbesproeiing, WC-doorspoelen, wasmachine) is ongezuiverd regenwater met PFAS-niveaus van 5 tot 50 ng/L acceptabel: er is geen significante blootstelling via huid, inademing of orale weg. Voor toepassingen met huidcontact of mogelijke inademing (douchen, baden) wordt filtering aanbevolen in hotspot-gebieden. Voor drinken, koken of babyvoeding is filtering verplicht ongeacht regio, en zelfs dan wordt regenwater zelden aanbevolen door de combinatie van andere risicos (microbiele besmetting, zware metalen, lage pH). Gebruik in dat geval liever een huishoudelijk RO-filter op het kraanwater.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS overzicht in drinkwater</h3>
              <p className="text-sm text-gray-600">Complete uitleg over PFAS-typen, gezondheidseffecten en Nederlandse regelgeving.</p>
            </Link>
            <Link href="/waterfilter/pfas" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor PFAS</h3>
              <p className="text-sm text-gray-600">Vergelijking van filteropties voor PFAS-verwijdering met prijzen en effectiviteit.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose techniek</h3>
              <p className="text-sm text-gray-600">Hoe werkt RO-filtering en waarom is het effectief tegen PFAS en zware metalen.</p>
            </Link>
            <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen Nederland</h3>
              <p className="text-sm text-gray-600">Alle Nederlandse en EU-grenswaarden voor PFAS, nitraat, lood en andere stoffen.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over PFAS in regenwater
          </h2>
          {faqItems.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">{faq.q}</summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.a}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="text-[#005F8A] underline">PFAS overzicht</Link>,{' '}
          <Link href="/waterfilter/pfas" className="text-[#005F8A] underline">waterfilter PFAS</Link>,{' '}
          <Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> en{' '}
          <Link href="/drinkwaternormen" className="text-[#005F8A] underline">drinkwaternormen</Link>.
        </p>
      </main>
    </>
  );
}
