import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Drinkwaterkwaliteit Nederland 2026: normen, rapporten en regionale verschillen',
  description:
    'Drinkwaterkwaliteit Nederland 2026: alle wettelijke normen, waterbedrijven per regio, PFAS-hotspots en hoe u uw eigen waterkwaliteitsrapport kunt opvragen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterkwaliteit/nederland' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waar vind ik het waterkwaliteitsrapport voor mijn adres?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'U vindt uw waterkwaliteitsrapport op de website van uw drinkwaterbedrijf. Zoek uw waterbedrijf op via uw postcode: Vitens (vitens.nl/waterkwaliteit), Evides (evides.nl/waterkwaliteit), PWN (pwn.nl), Waternet (waternet.nl), Brabant Water (brabantwater.nl), WML (wml.nl), Dunea (dunea.nl), Oasen (oasen.nl) of WMD (wmdrente.nl). De rapporten zijn gratis te downloaden en bevatten meetresultaten per waterwingebied.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke normen gelden voor drinkwater in Nederland in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In 2026 gelden de normen van de herziene EU Drinkwaterrichtlijn (2020/2184), geimplementeerd via de Nederlandse Drinkwaterwet. Nieuwe elementen ten opzichte van de oude richtlijn (1998): strengere loodnorm (van 25 naar 10 microgram/L), PFAS sum-4 norm van 0,05 microgram/L (eerste keer), microplastics onder observatielijst, en 33 nieuwe parameters. De normen zijn bindend voor alle 10 Nederlandse drinkwaterbedrijven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk NL waterbedrijf levert het schoonste water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alle Nederlandse drinkwaterbedrijven leveren water dat voldoet aan de wettelijke normen. Bedrijven die uitsluitend grondwater gebruiken als bron (Vitens, Brabant Water, WML, Oasen, WMD) hebben doorgaans een stabielere kwaliteit omdat grondwater minder seizoensgebonden variaties heeft. Bedrijven die oppervlaktewater zuiveren (Evides, PWN, Waternet) passen geavanceerdere zuiveringstechnieken toe om dezelfde veiligheidsstandaard te bereiken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe verschilt grondwater van oppervlaktewater qua kwaliteit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grondwater heeft van nature een stabielere kwaliteit: het wordt gefilterd door bodemlagen, bevat minder micro-organismen, en is minder gevoelig voor seizoensgebonden verontreinigingen. Nadeel is dat het meer mineralen kan bevatten (hogere hardheid) en soms arseen of andere geogene verontreinigingen. Oppervlaktewater (rivieren, meren) varieert sterker in kwaliteit en bevat meer organische stoffen, PFAS-uitspoeling bij regen, en agriculturele verontreinigingen. Het vereist intensievere behandeling maar levert ook goed drinkwater op.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de nieuwe EU Drinkwaterrichtlijn 2020 en wat verandert er?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU Drinkwaterrichtlijn 2020/2184 vervangt de richtlijn uit 1998 en brengt ingrijpende veranderingen. Nieuwe elementen: (1) strengere loodnorm (van 25 naar 10 microgram/L, met overgangsperiode tot 2036); (2) eerste PFAS-norm ooit: sum-4 verbindingen max 0,05 microgram/L; (3) microplastics en endocriene verstoorders op observatielijst; (4) 33 extra te monitoren parameters; (5) verbeterde transparantie via online toegang tot kwaliteitsgegevens per adres. In Nederland van kracht sinds eind 2023.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zitten er PFAS in het water van mijn gemeente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste Nederlandse gemeenten zijn de PFAS-waarden in drinkwater laag, ver onder de EU-norm van 0,05 microgram/L. Uitzonderingen zijn de Dordrecht-regio (nabij Chemours) waar waarden tot 0,04 microgram/L zijn gemeten, en gebieden rond voormalige militaire bases in Brabant en Gelderland. De Schiphol-zone wordt intensief gemonitord. Uw waterbedrijf publiceert de lokale PFAS-meetwaarden in het jaarlijkse kwaliteitsrapport.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe vaak wordt drinkwater getest door waterbedrijven?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nederlandse drinkwaterbedrijven testen het water continu en op vaste intervallen. Continue monitoring vindt plaats via geautomatiseerde sensoren in het distributiesysteem. Laboratoriumanalyses worden dagelijks tot wekelijks uitgevoerd voor microbiologische parameters en maandelijks tot jaarlijks voor chemische parameters, afhankelijk van de risicocategorie. De testfrequentie is wettelijk vastgelegd in het Drinkwaterbesluit en de EU-richtlijn, gebaseerd op het geproduceerde watervolume.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is er een nationaal overzicht van drinkwaterkwaliteit per gemeente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het RIVM publiceert jaarlijks het rapport "Kwaliteit van het drinkwater in Nederland", dat een nationaal overzicht geeft van alle kwaliteitsparameters per waterbedrijf en regio. Dit rapport is gratis beschikbaar op rivm.nl. Daarnaast rapporteert de ILT (Inspectie Leefomgeving en Transport) jaarlijks over de naleving. Per individueel adres kunt u de meest specifieke informatie vinden via de website van uw eigen drinkwaterbedrijf.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Drinkwaterkwaliteit Nederland 2026: normen, rapporten en regionale verschillen',
  description:
    'Drinkwaterkwaliteit Nederland 2026: alle wettelijke normen, waterbedrijven per regio, PFAS-hotspots en hoe u uw eigen waterkwaliteitsrapport kunt opvragen.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterkwaliteit/nederland',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterkwaliteitNederlandPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterkwaliteit', item: 'https://waterfilterplatform.nl/waterkwaliteit' },
              { '@type': 'ListItem', position: 3, name: 'Drinkwaterkwaliteit Nederland', item: 'https://waterfilterplatform.nl/waterkwaliteit/nederland' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterkwaliteit" className="hover:underline">Waterkwaliteit</Link> &rsaquo;{' '}
          <span>Drinkwaterkwaliteit Nederland</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Drinkwaterkwaliteit Nederland 2026: normen, rapporten en regionale verschillen
        </h1>

        <QuickAnswer answer="Nederland heeft 10 drinkwaterbedrijven die streng worden gecontroleerd via de Drinkwaterwet en EU-richtlijn 2020. In 2026 gelden nieuwe PFAS-normen en een strengere loodnorm. Grondwaterbedrijven scoren stabiel; PFAS-hotspots zijn Dordrecht/Chemours en voormalige militaire bases. Waterkwaliteitsrapporten zijn gratis te downloaden via uw waterbedrijf." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wettelijk kader: Drinkwaterwet en EU-richtlijn 2020
        </h2>
        <p className="text-gray-700 mb-4">
          De drinkwaterkwaliteit in Nederland wordt geregeld door de Drinkwaterwet, die de EU Drinkwaterrichtlijn implementeert. In 2023 trad de herziene EU Drinkwaterrichtlijn 2020/2184 in werking, de meest ingrijpende update in meer dan twee decennia.
        </p>
        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
          <h3 className="font-semibold text-[#003F5C] mb-3">Belangrijkste wijzigingen EU-richtlijn 2020</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm">
            <li><strong>33 nieuwe parameters</strong> toegevoegd aan de monitoringslijst, waaronder hormoonverstorende stoffen</li>
            <li><strong>PFAS-norm voor het eerst opgenomen:</strong> sum van 4 verbindingen (PFOA, PFOS, PFNA, PFHxS) maximaal 0,05 &micro;g/L</li>
            <li><strong>Strengere loodnorm:</strong> van 25 naar 10 &micro;g/L (overgangsperiode tot 2036 voor huisinstallaties)</li>
            <li><strong>Microplastics onder observatie:</strong> nog geen norm, maar verplichte monitoring</li>
            <li><strong>Transparantieplicht:</strong> burgers moeten online toegang hebben tot waterkwaliteitsgegevens per adres</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De 10 Nederlandse drinkwaterbedrijven
        </h2>
        <p className="text-gray-700 mb-4">
          Nederland heeft 10 regionale drinkwaterbedrijven, elk verantwoordelijk voor een specifiek verzorgingsgebied. Samen leveren zij drinkwater aan alle 17+ miljoen Nederlanders.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Bedrijf</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Regio</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Bron</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Vitens</td>
                <td className="border border-gray-300 px-3 py-2">Midden/Noord/Oost NL</td>
                <td className="border border-gray-300 px-3 py-2">Grondwater</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-semibold">Evides</td>
                <td className="border border-gray-300 px-3 py-2">Zuid-Holland, Zeeland</td>
                <td className="border border-gray-300 px-3 py-2">Oppervlaktewater (Maas)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">PWN</td>
                <td className="border border-gray-300 px-3 py-2">Noord-Holland</td>
                <td className="border border-gray-300 px-3 py-2">Oppervlaktewater (IJmeer)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-semibold">Waternet</td>
                <td className="border border-gray-300 px-3 py-2">Amsterdam</td>
                <td className="border border-gray-300 px-3 py-2">Oppervlaktewater (Amstel/Rijn)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Brabant Water</td>
                <td className="border border-gray-300 px-3 py-2">Noord-Brabant</td>
                <td className="border border-gray-300 px-3 py-2">Grondwater</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-semibold">WML</td>
                <td className="border border-gray-300 px-3 py-2">Limburg</td>
                <td className="border border-gray-300 px-3 py-2">Grondwater</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Dunea</td>
                <td className="border border-gray-300 px-3 py-2">Den Haag, Duin- en Bollenstreek</td>
                <td className="border border-gray-300 px-3 py-2">Duinwater</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-semibold">HWL</td>
                <td className="border border-gray-300 px-3 py-2">Leidse regio</td>
                <td className="border border-gray-300 px-3 py-2">Duinwater</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Oasen</td>
                <td className="border border-gray-300 px-3 py-2">Midden-Holland</td>
                <td className="border border-gray-300 px-3 py-2">Grondwater</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-semibold">WMD</td>
                <td className="border border-gray-300 px-3 py-2">Drenthe</td>
                <td className="border border-gray-300 px-3 py-2">Grondwater</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterkwaliteitsrapport opvragen voor uw adres
        </h2>
        <p className="text-gray-700 mb-4">
          Elk drinkwaterbedrijf is verplicht een jaarlijks kwaliteitsrapport te publiceren. Deze rapporten zijn gratis te downloaden via de websites van de bedrijven. Via uw postcode kunt u direct het rapport voor uw waterwingebied opvragen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1 text-sm">
          <li>Vitens: vitens.nl/waterkwaliteit</li>
          <li>Evides: evides.nl/waterkwaliteit</li>
          <li>PWN: pwn.nl (waterkwaliteit sectie)</li>
          <li>Waternet: waternet.nl/waterkwaliteit</li>
          <li>Brabant Water: brabantwater.nl/waterkwaliteit</li>
          <li>WML: wml.nl/waterkwaliteit</li>
          <li>Dunea: dunea.nl/waterkwaliteit</li>
          <li>Oasen: oasen.nl/waterkwaliteit</li>
          <li>WMD: wmdrente.nl</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          PFAS in Nederlands drinkwater 2026
        </h2>
        <p className="text-gray-700 mb-4">
          De EU sum-4 PFAS-norm van 0,05 &micro;g/L (microgram per liter) is in 2026 van kracht voor alle Nederlandse drinkwaterbedrijven. In de meeste regio&apos;s liggen gemeten waarden ver onder dit niveau. Er zijn echter twee aandachtsgebieden:
        </p>
        <div className="space-y-3 mb-6">
          <div className="border-l-4 border-yellow-400 pl-4 py-2">
            <div className="font-semibold text-[#003F5C]">Dordrecht/Chemours-regio</div>
            <p className="text-sm text-gray-700 mt-1">
              De Chemours-fabriek (voorheen DuPont) loost al decennia PFAS-verbindingen, waaronder GenX. In drinkwater van de nabijgelegen gebieden zijn waarden tot 0,04 &micro;g/L gemeten voor de sum-4, net onder de Europese grenswaarde. Het RIVM en het waterbedrijf Evides monitoren deze regio intensief.
            </p>
          </div>
          <div className="border-l-4 border-blue-300 pl-4 py-2">
            <div className="font-semibold text-[#003F5C]">Schiphol-zone</div>
            <p className="text-sm text-gray-700 mt-1">
              Historisch gebruik van PFAS-houdend blusschuim op en rond Schiphol heeft geleid tot grondwaterverontreiniging. Drinkwaterbronnen in de directe Schiphol-zone worden intensief gemonitord. De actuele meetresultaten zijn beschikbaar via PWN en Waternet.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Grondwater versus oppervlaktewater: kwaliteitsvergelijking
        </h2>
        <p className="text-gray-700 mb-4">
          De waterbron heeft een grote invloed op de zuiveringsmethode en de uiteindelijke waterkwaliteit:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Grondwater</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>+ Stabiele, constante kwaliteit</li>
              <li>+ Minder microbiologische risico&apos;s</li>
              <li>+ Minder gevoelig voor neerslag</li>
              <li>&minus; Hogere hardheid mogelijk</li>
              <li>&minus; Meer kans op geogene verontreinigingen</li>
            </ul>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Oppervlaktewater</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>+ Zachter water doorgaans</li>
              <li>+ Grote beschikbaarheid</li>
              <li>&minus; Seizoensgebonden variaties</li>
              <li>&minus; PFAS-uitspoeling bij hevige regen</li>
              <li>&minus; Intensievere zuivering nodig</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 mb-6">
          Wilt u uw waterkwaliteit zelf meten? Lees onze gids over{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteit testen</Link>.
          Meer weten over PFAS-verontreinigingen?{' '}
          <Link href="/pfas-waterfilter" className="text-[#005F8A] underline">Lees over PFAS waterfilters</Link>.
          Voor een volledig overzicht van verontreinigingen, bezoek onze pagina over{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
          Een{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmosefilter</Link>{' '}
          biedt de meest complete bescherming ongeacht uw waterbron.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over drinkwaterkwaliteit Nederland</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>
      </main>
    </>
  );
}
