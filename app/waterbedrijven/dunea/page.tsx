import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Dunea: waterkwaliteit Zuid-Holland (kust) | WaterfilterPlatform',
  description:
    'Dunea levert drinkwater aan Den Haag en de Zuid-Hollandse kust. Ontdek de duinwaterzuivering, waterhardheid en kwaliteit.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterbedrijven/dunea' },
};

export default function DuneaPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterbedrijven', url: 'https://waterfilterplatform.nl/waterbedrijven' },
          { name: 'Dunea', url: 'https://waterfilterplatform.nl/waterbedrijven/dunea' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Dunea: waterkwaliteit Zuid-Holland (kust)',
          description:
            'Dunea levert drinkwater aan Den Haag en de Zuid-Hollandse kust. Ontdek de duinwaterzuivering, waterhardheid en kwaliteit.',
          datePublished: '2026-05-21',
          dateModified: '2026-05-21',
          url: 'https://waterfilterplatform.nl/waterbedrijven/dunea',
        }}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          {' '}&rsaquo;{' '}
          <Link href="/waterbedrijven" className="hover:underline">Waterbedrijven</Link>
          {' '}&rsaquo;{' '}
          <span>Dunea</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Dunea: duinwater voor Den Haag en de kust
          </h1>
          <p className="text-gray-700 text-lg">
            Dunea levert drinkwater aan Den Haag, Leiden, Westland en de kustgemeenten
            van Zuid-Holland. Het water wordt gewonnen via Rijn-infiltratie in de
            Zuid-Hollandse duinen — een van de meest duurzame zuiveringsmethoden ter wereld.
          </p>
        </div>

        <QuickAnswer answer="Dunea levert drinkwater aan ca. 1,2 miljoen mensen in Den Haag en omgeving. Het water is matig hard (10-14 dH) en wordt gewonnen via Rijn-infiltratie in de duinen — een van de meest duurzame zuiveringsmethoden." />

        <CTABanner context="algemeen" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Verzorgingsgebied van Dunea
        </h2>
        <p className="text-gray-700 mb-4">
          Dunea levert drinkwater aan de volgende gemeenten en regio's in Zuid-Holland:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Den Haag (inclusief alle stadsdelen)</li>
          <li>Leiden en de regio Leidse Ommelanden</li>
          <li>Westland (tuinbouwgebied)</li>
          <li>Wassenaar, Leidschendam-Voorburg</li>
          <li>Katwijk, Noordwijk en de bollenstreekkust</li>
          <li>Gouda en omgeving (deels via Oasen)</li>
        </ul>
        <p className="text-gray-700 mb-6">
          In totaal bedient Dunea circa 1,2 miljoen mensen. Het verzorgingsgebied omvat
          zowel dichtbevolkte stedelijke gebieden als landbouwintensieve kuststroken.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Rijn-infiltratie: hoe werkt het?
        </h2>
        <p className="text-gray-700 mb-4">
          De methode die Dunea gebruikt staat bekend als <strong>oevergrondwaterwinning via
          duininfiltatie</strong>. Het is een combinatie van oppervlaktewaterzuivering en
          ondergrondse natuurlijke filtratie:
        </p>
        <ol className="space-y-3 mb-6">
          {[
            { n: 1, title: 'Inname Rijnwater', desc: 'Rijnwater wordt ingenomen bij de Oranjesluis in Katwijk. De inname vindt alleen plaats bij voldoende kwaliteit: bij calamiteiten of hoge verontreinigingspieken stopt de inname.' },
            { n: 2, title: 'Voorzuivering', desc: 'Het Rijnwater ondergaat een eerste zuivering: coagulatie, sedimentatie, actieve-koolfiltratie en ozonbehandeling verwijderen verontreinigingen, inclusief pesticiden en een deel van de PFAS.' },
            { n: 3, title: 'Infiltratie in duinen', desc: 'Het voorgezuiverde water wordt via open kanalen en infiltratiebekkens in de duinen gebracht. Het zijpelt door het kalkrijke duinzand met een verblijftijd van typisch 3-12 maanden.' },
            { n: 4, title: 'Winputten', desc: 'Na de duinpassage wordt het water onttrokken via tientallen winputten diep in het duingebied tussen Katwijk en Scheveningen.' },
            { n: 5, title: 'Nazuivering', desc: 'Een laatste ronde actieve-koolfiltratie en UV-desinfectie, gevolgd door een minimale chloorbehandeling voor veiligheid in het distributienet.' },
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
          Waterhardheid in het Dunea-gebied
        </h2>
        <p className="text-gray-700 mb-4">
          Het Dunea-water is <strong>matig hard (10-14 graden Duits, dH)</strong>. De
          duinpassage voegt calcium toe uit het kalkrijke duinzand, maar minder dan bij
          diep grondwater in Limburg of Brabant. Dit resulteert in een aangenaam
          drinkwater met goede smaak en beperkte kalkvorming.
        </p>
        <div className="bg-gray-50 rounded-xl p-5 mb-6">
          <p className="font-semibold text-[#003F5C] mb-3">Hardheid in het Dunea-gebied</p>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Den Haag en omgeving</span>
              <span className="font-medium text-yellow-700">Matig (10-13 dH)</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Leiden en Leidse Ommelanden</span>
              <span className="font-medium text-yellow-700">Matig (11-14 dH)</span>
            </div>
            <div className="flex justify-between">
              <span>Kustgemeenten</span>
              <span className="font-medium text-yellow-700">Matig (10-12 dH)</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Duurzaamheid: waarom duininfiltatie zo bijzonder is
        </h2>
        <p className="text-gray-700 mb-4">
          De Rijn-infiltratiemethode van Dunea wordt internationaal als een van de meest
          duurzame drinkwaterproductiemethoden beschouwd om meerdere redenen:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <h3 className="font-bold text-[#003F5C] mb-2">Ecologische voordelen</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Duinen behoud als natuurgebied</li>
              <li>&bull; Biodiversiteitsondersteuning in duinvallei</li>
              <li>&bull; Minder chemicalieen dan volledig industriele zuivering</li>
              <li>&bull; Grondwateraanvulling in droge perioden</li>
            </ul>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <h3 className="font-bold text-[#003F5C] mb-2">Kwaliteitsvoordelen</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Lange verblijftijd = extra zuivering</li>
              <li>&bull; Pathogenen worden biologisch afgebroken</li>
              <li>&bull; Stabiele temperatuur (8-12 graden)</li>
              <li>&bull; Aangename, zachte smaak</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-700 mb-6">
          Dunea investeert ook in extra PFAS-verwijdering omdat het ingenomen Rijnwater
          PFAS-houdend is door industriele lozingen bovenstrooms. Zie ook{' '}
          <Link href="/stoffen-in-drinkwater" className="text-[#005F8A] underline">
            stoffen in drinkwater
          </Link>{' '}
          voor actuele informatie over PFAS-concentraties.
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
              <p className="text-sm text-gray-600">Zoek de exacte waterhardheid voor uw gemeente in het Dunea-gebied.</p>
            </Link>
            <Link
              href="/waterhardheid/per-provincie"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Waterhardheid per provincie</p>
              <p className="text-sm text-gray-600">Hardheidsverschillen per provincie, inclusief Zuid-Holland.</p>
            </Link>
            <Link
              href="/stoffen-in-drinkwater"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater</p>
              <p className="text-sm text-gray-600">PFAS, nitraat en andere stoffen in het Dunea-drinkwater.</p>
            </Link>
            <Link
              href="/drinkwaternormen"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</p>
              <p className="text-sm text-gray-600">Wettelijke kwaliteitseisen waaraan Dunea en andere waterbedrijven moeten voldoen.</p>
            </Link>
            <Link
              href="/waterbedrijven/pwn"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">PWN</p>
              <p className="text-sm text-gray-600">Vergelijkbare duinwaterzuivering voor Noord-Holland.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
