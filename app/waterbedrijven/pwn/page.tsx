import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'PWN: waterkwaliteit Noord-Holland | WaterfilterPlatform',
  description:
    'PWN levert drinkwater in Noord-Holland. Leer over de waterhardheid, duinwaterzuivering en kwaliteit van PWN-drinkwater.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterbedrijven/pwn' },
};

export default function PwnPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterbedrijven', url: 'https://waterfilterplatform.nl/waterbedrijven' },
          { name: 'PWN', url: 'https://waterfilterplatform.nl/waterbedrijven/pwn' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'PWN: waterkwaliteit Noord-Holland',
          description:
            'PWN levert drinkwater in Noord-Holland. Leer over de waterhardheid, duinwaterzuivering en kwaliteit van PWN-drinkwater.',
          datePublished: '2026-05-21',
          dateModified: '2026-05-21',
          url: 'https://waterfilterplatform.nl/waterbedrijven/pwn',
        }}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          {' '}&rsaquo;{' '}
          <Link href="/waterbedrijven" className="hover:underline">Waterbedrijven</Link>
          {' '}&rsaquo;{' '}
          <span>PWN</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            PWN: drinkwater in Noord-Holland
          </h1>
          <p className="text-gray-700 text-lg">
            PWN Waterleidingbedrijf Noord-Holland levert drinkwater aan Noord-Holland
            (buiten Amsterdam). Het water is bekend om zijn kwaliteit dankzij de
            unieke duinwaterzuivering van Rijnwater.
          </p>
        </div>

        <QuickAnswer answer="PWN levert drinkwater aan circa 1 miljoen mensen in Noord-Holland (excl. Amsterdam). Het water is matig tot hard (12-16 dH) en is afkomstig van Rijnwater dat door de duinen wordt gezuiverd." />

        <CTABanner context="algemeen" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Verzorgingsgebied van PWN
        </h2>
        <p className="text-gray-700 mb-4">
          PWN bedient de provincie Noord-Holland, met uitzondering van Amsterdam en de
          Amsterdamse agglomeratie (die door Waternet worden bediend). Concreet gaat
          het om gemeenten zoals:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Alkmaar en de regio Noord-Kennemerland</li>
          <li>Haarlem en Haarlemmermeer (deels)</li>
          <li>Den Helder en de kop van Noord-Holland</li>
          <li>West-Friesland (Hoorn, Enkhuizen e.o.)</li>
          <li>Kennemerland en het IJmondgebied</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Amsterdam en omgeving worden afzonderlijk bediend door Waternet, dat
          gebruik maakt van het Bethunepoldersysteem.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterbron: Rijnwater via de duinen
        </h2>
        <p className="text-gray-700 mb-4">
          PWN gebruikt twee hoofdbronnen die nauw met elkaar samenhangen:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <h3 className="font-bold text-[#003F5C] mb-2">Oevergrondwater (primair)</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Rijnwater kunstmatig geinfiltreerd in duinen</li>
              <li>&bull; Verblijftijd van enkele maanden in de bodem</li>
              <li>&bull; Duinen fungeren als biologisch filter</li>
              <li>&bull; Verwijdering van pathogenen en organische stof</li>
              <li>&bull; Stabielere kwaliteit dan direct rivierwater</li>
            </ul>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <h3 className="font-bold text-[#003F5C] mb-2">IJsselmeerwater (aanvullend)</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Gebruikt als aanvulling in droge perioden</li>
              <li>&bull; Vereist intensievere zuivering</li>
              <li>&bull; Minder PFAS dan Rijnwater</li>
              <li>&bull; Goede beschikbaarheid als buffer</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Duinwaterzuivering: hoe werkt het?
        </h2>
        <p className="text-gray-700 mb-4">
          De duinwaterzuivering is een van de meest bijzondere aspecten van het Noord-Hollandse
          drinkwaterproductiesysteem. Het proces verloopt in twee fasen:
        </p>
        <ol className="space-y-3 mb-6">
          {[
            { n: 1, title: 'Voorzuivering Rijnwater', desc: 'Rijnwater wordt ingenomen en voorbehandeld: coagulatie, flocculatie, sedimentatie en actieve-koolfiltratie verwijderen de grovere verontreinigingen, inclusief pesticiden en PFAS.' },
            { n: 2, title: 'Infiltratie in duinen', desc: 'Het voorgezuiverde water wordt via infiltratiebekkens in de Noord-Hollandse duinen gebracht. Het water zijpelt langzaam door het zand — een verblijftijd van enkele maanden tot meer dan een jaar.' },
            { n: 3, title: 'Onttrekking als oevergrondwater', desc: 'Na de duinpassage wordt het water onttrokken via winputten. Het is nu sterk gezuiverd: bacterien, virussen en organische stoffen zijn grotendeels verwijderd.' },
            { n: 4, title: 'Nazuivering', desc: 'Actieve-koolfiltratie, UV-desinfectie en een lichte chloorbehandeling completeren het zuiveringsproces.' },
          ].map(({ n, title, desc }) => (
            <li key={n} className="flex gap-3 items-start">
              <span className="bg-[#003F5C] text-white text-sm font-bold px-2.5 py-1 rounded-full shrink-0">{n}</span>
              <div>
                <span className="font-semibold text-[#003F5C]">{title}: </span>
                <span className="text-gray-700 text-sm">{desc}</span>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheid in Noord-Holland (PWN-gebied)
        </h2>
        <p className="text-gray-700 mb-4">
          Het water van PWN is <strong>matig tot hard (12-16 graden Duits, dH)</strong>. Dit
          relatief hoge calciumgehalte is een gevolg van het kalkrijke duinzand waardoor het
          water trekt. De Rijn draagt ook bij aan de mineraalrijkdom.
        </p>
        <div className="bg-gray-50 rounded-xl p-5 mb-4">
          <p className="font-semibold text-[#003F5C] mb-2">Praktische gevolgen van dit hardheidsgehalte</p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>&bull; Kalkvorming in waterkokers en koffiezetapparaten</li>
            <li>&bull; Kalkranden op kranen en douche-omgeving</li>
            <li>&bull; Iets meer wasmiddel en afwasmiddel nodig</li>
            <li>&bull; Geen gezondheidsrisico (calcium is essentieel mineraal)</li>
          </ul>
        </div>
        <p className="text-gray-700 mb-6">
          Bij een hardheid boven 12 dH is een waterfilter of waterontharder zinvol om
          kalkvorming in huishoudapparaten te beperken. Lees meer op de pagina{' '}
          <Link href="/waterhardheid" className="text-[#005F8A] underline">
            waterhardheid per gemeente
          </Link>
          .
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bijzonderheden: PFAS en investeringen
        </h2>
        <p className="text-gray-700 mb-4">
          Rijnwater bevat verhoogde concentraties PFAS door industriele lozingen bovenstrooms.
          PWN investeert samen met andere waterbedrijven in extra actieve-koolfiltratie om de
          PFAS-concentraties verder terug te dringen. De duinpassage draagt al bij aan een
          gedeeltelijke verwijdering van PFAS, maar is niet voldoende voor de nieuwe EU-normen
          die in 2026 van kracht worden.
        </p>
        <p className="text-gray-700 mb-6">
          Meer informatie over PFAS in drinkwater vindt u op{' '}
          <Link href="/stoffen-in-drinkwater" className="text-[#005F8A] underline">
            stoffen in drinkwater
          </Link>
          .
        </p>

        <CTABanner context="algemeen" />

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/waterbedrijven"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Alle waterbedrijven</p>
              <p className="text-sm text-gray-600">Overzicht van alle 10 Nederlandse drinkwaterbedrijven met regio en hardheid.</p>
            </Link>
            <Link
              href="/waterhardheid"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Waterhardheid per gemeente</p>
              <p className="text-sm text-gray-600">Zoek de exacte waterhardheid voor uw gemeente in Noord-Holland.</p>
            </Link>
            <Link
              href="/waterhardheid/per-provincie"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Waterhardheid per provincie</p>
              <p className="text-sm text-gray-600">Hardheidsverschillen per provincie, inclusief Noord-Holland.</p>
            </Link>
            <Link
              href="/stoffen-in-drinkwater"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater</p>
              <p className="text-sm text-gray-600">PFAS, nitraat en andere stoffen in het PWN-drinkwater.</p>
            </Link>
            <Link
              href="/drinkwaternormen"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</p>
              <p className="text-sm text-gray-600">Wettelijke kwaliteitseisen waaraan PWN en andere waterbedrijven moeten voldoen.</p>
            </Link>
            <Link
              href="/waterbedrijven/dunea"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Dunea</p>
              <p className="text-sm text-gray-600">Vergelijkbare duinwaterzuivering voor Den Haag en de Zuid-Hollandse kust.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
