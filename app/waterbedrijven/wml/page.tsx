import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'WML Limburg: waterkwaliteit, hardheid en bronnen | WaterfilterPlatform',
  description:
    'WML levert drinkwater in Limburg. Ontdek de hoge waterhardheid, Maas- en grondwaterbronnen en kwaliteit van WML-drinkwater.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterbedrijven/wml' },
};

export default function WmlPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterbedrijven', url: 'https://waterfilterplatform.nl/waterbedrijven' },
          { name: 'WML', url: 'https://waterfilterplatform.nl/waterbedrijven/wml' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'WML Limburg: waterkwaliteit, hardheid en bronnen',
          description:
            'WML levert drinkwater in Limburg. Ontdek de hoge waterhardheid, Maas- en grondwaterbronnen en kwaliteit van WML-drinkwater.',
          datePublished: '2026-05-22',
          dateModified: '2026-05-22',
          url: 'https://waterfilterplatform.nl/waterbedrijven/wml',
        }}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          {' '}&rsaquo;{' '}
          <Link href="/waterbedrijven" className="hover:underline">Waterbedrijven</Link>
          {' '}&rsaquo;{' '}
          <span>WML</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            WML: drinkwater in Limburg
          </h1>
          <p className="text-gray-700 text-lg">
            WML (Waterleidingmaatschappij Limburg) levert drinkwater aan alle inwoners van
            de provincie Limburg — ruim 1,1 miljoen mensen. Het Limburgse water staat bekend
            om zijn relatief hoge hardheid, veroorzaakt door de kalkrijke bodemgesteldheid.
          </p>
        </div>

        <QuickAnswer answer="WML levert drinkwater aan ruim 1,1 miljoen mensen in Limburg. Het water is hard (15-22 dH) door de kalkrijke Limburgse bodem. De bronnen zijn een combinatie van grondwater en Maaswater. Kalkafzetting is een veelvoorkomend probleem bij WML-abonnees." />

        <CTABanner context="waterhardheid" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Verzorgingsgebied: heel Limburg
        </h2>
        <p className="text-gray-700 mb-4">
          WML verzorgt de drinkwaterlevering voor de gehele provincie Limburg, van Venlo
          in het noorden tot Maastricht en Vaals in het zuiden. Het bedrijf beheert tientallen
          pompstations en waterreservoirs verspreid over het Limburgse landschap.
        </p>
        <p className="text-gray-700 mb-6">
          WML is in publiek eigendom van de provincie Limburg en Limburgse gemeenten.
          Net als alle andere Nederlandse waterbedrijven heeft WML geen winstoogmerk —
          alle inkomsten worden geherinvesteerd in de drinkwaterinfrastructuur.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterbronnen: grondwater en Maaswater
        </h2>
        <p className="text-gray-700 mb-4">
          WML maakt gebruik van twee typen bronnen, afhankelijk van de regio:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <h3 className="font-bold text-[#003F5C] mb-2">Grondwater (Midden- en Zuid-Limburg)</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Gewonnen uit kalkrijke gronden</li>
              <li>&bull; Hoge calciumgehaltes → harde water</li>
              <li>&bull; Stabiele microbiologische kwaliteit</li>
              <li>&bull; Dieptes variërend van 20-120 m</li>
            </ul>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <h3 className="font-bold text-[#003F5C] mb-2">Maaswater (Noord-Limburg)</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Oevergrondwater langs de Maas</li>
              <li>&bull; Intensieve zuivering van rivier-invloeden</li>
              <li>&bull; Actieve-kool en ozonbehandeling</li>
              <li>&bull; Monitoring op landbouwverontreinigingen</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-700 mb-6">
          De Limburgse kalkbodem — een gevolg van de geologische samenstelling met kalksteen
          en mergel in het zuiden — is de belangrijkste oorzaak van het harde water in Limburg.
          Calcium lost op in grondwater dat door kalksteen stroomt.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheid in Limburg: tot 22 dH
        </h2>
        <p className="text-gray-700 mb-4">
          Limburg heeft een van de hardste drinkwaters van Nederland, met name in het zuiden
          waar de kalkrijke mergel- en krijtbodem domineert:
        </p>
        <div className="bg-gray-50 rounded-xl p-5 mb-6">
          <p className="font-semibold text-[#003F5C] mb-3">Hardheidsbereik per regio</p>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Noord-Limburg (Venlo, Venray)</span>
              <span className="font-medium text-yellow-700">Matig-hard (12-16 dH)</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Midden-Limburg (Roermond, Weert)</span>
              <span className="font-medium text-orange-700">Hard (15-18 dH)</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Zuid-Limburg (Maastricht, Heerlen)</span>
              <span className="font-medium text-red-700">Zeer hard (18-22 dH)</span>
            </div>
            <div className="flex justify-between">
              <span>Oostelijk Maasdal</span>
              <span className="font-medium text-orange-700">Hard (16-20 dH)</span>
            </div>
          </div>
        </div>
        <p className="text-gray-700 mb-6">
          Bij een hardheid boven 15 dH is kalkbehandeling voor veel huishoudens zinvol.
          Bekijk de{' '}
          <Link href="/vergelijken/waterfilter-vs-waterontharder" className="text-[#005F8A] underline">
            vergelijking waterfilter vs waterontharder
          </Link>{' '}
          om te bepalen wat voor uw Limburgse woning het meest geschikt is.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterkwaliteit en regelgeving
        </h2>
        <p className="text-gray-700 mb-4">
          WML voldoet aan alle eisen van het Drinkwaterbesluit. Het Limburgse drinkwater is
          microbiologisch veilig en voldoet aan alle chemische normen. Aandachtspunten zijn
          nitraat in landbouwgebieden in het noorden en historische vervuiling rondom
          industrieterreinen.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Extra PFAS-monitoring vanwege historische industrielocaties</li>
          <li>Nitraat-monitoring in landbouwgebieden Noord-Limburg</li>
          <li>Maaswater krijgt meerdere zuiveringsbarrières</li>
          <li>Jaarlijkse kwaliteitsrapporten beschikbaar via wml.nl</li>
        </ul>

        <CTABanner context="waterhardheid" />

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
              href="/keuzehulp/hard-water"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Hard water oplossingen</p>
              <p className="text-sm text-gray-600">Wat kunt u doen bij het harde Limburgse water?</p>
            </Link>
            <Link
              href="/waterhardheid"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Waterhardheid per gemeente</p>
              <p className="text-sm text-gray-600">Exacte waterhardheid voor uw Limburgse gemeente.</p>
            </Link>
            <Link
              href="/vergelijken/waterfilter-vs-waterontharder"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Filter of ontharder?</p>
              <p className="text-sm text-gray-600">Vergelijking voor Limburgse omstandigheden met hard water.</p>
            </Link>
            <Link
              href="/drinkwaternormen"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</p>
              <p className="text-sm text-gray-600">Wettelijke kwaliteitseisen waaraan WML moet voldoen.</p>
            </Link>
            <Link
              href="/waterbedrijven/brabant-water"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Brabant Water</p>
              <p className="text-sm text-gray-600">Drinkwater in Noord-Brabant — grenzend aan het WML-gebied.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
