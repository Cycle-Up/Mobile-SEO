import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waternet Amsterdam: waterkwaliteit, hardheid en bronnen | WaterfilterPlatform',
  description:
    'Waternet levert drinkwater in Amsterdam en de regio. Ontdek de hoge waterhardheid, IJmeer-bronnen en kwaliteit van Waternet-drinkwater.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterbedrijven/waternet' },
};

export default function WaternetPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterbedrijven', url: 'https://waterfilterplatform.nl/waterbedrijven' },
          { name: 'Waternet', url: 'https://waterfilterplatform.nl/waterbedrijven/waternet' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waternet Amsterdam: waterkwaliteit, hardheid en bronnen',
          description:
            'Waternet levert drinkwater in Amsterdam en de regio. Ontdek de hoge waterhardheid, IJmeer-bronnen en kwaliteit van Waternet-drinkwater.',
          datePublished: '2026-05-22',
          dateModified: '2026-05-22',
          url: 'https://waterfilterplatform.nl/waterbedrijven/waternet',
        }}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          {' '}&rsaquo;{' '}
          <Link href="/waterbedrijven" className="hover:underline">Waterbedrijven</Link>
          {' '}&rsaquo;{' '}
          <span>Waternet</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waternet: drinkwater in Amsterdam en omgeving
          </h1>
          <p className="text-gray-700 text-lg">
            Waternet levert drinkwater aan circa 1 miljoen mensen in Amsterdam, Amstelveen,
            Diemen en de Gooi en Vechtstreek. Het water is relatief hard — een van de
            hogere hardheden onder de Nederlandse waterbedrijven.
          </p>
        </div>

        <QuickAnswer answer="Waternet levert drinkwater aan circa 1 miljoen mensen in Amsterdam en omgeving. Het water is hard (15-20 dH) door de IJmeer- en Rijnbron. Door de hoge hardheid is kalkafzetting in waterkokers, koffiezetapparaten en leidingen een veelvoorkomend probleem voor Amsterdammers." />

        <CTABanner context="waterhardheid" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Verzorgingsgebied van Waternet
        </h2>
        <p className="text-gray-700 mb-4">
          Waternet is een bijzondere organisatie: het combineert drinkwaterlevering met het
          beheer van het Amsterdamse riool, oppervlaktewater en de gemeentelijke riolering.
          Het verzorgingsgebied voor drinkwater omvat:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Amsterdam (gemeente)</li>
          <li>Amstelveen</li>
          <li>Diemen</li>
          <li>Gooi en Vechtstreek (deels)</li>
          <li>Waterland (deels)</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Waternet is in eigendom van de gemeente Amsterdam en het Waterschap Amstel, Gooi
          en Vecht. Het is daarmee qua structuur uniek in Nederland: alle watercyclusdiensten
          zijn geïntegreerd in één organisatie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterbronnen: IJmeer en Bethunepolder
        </h2>
        <p className="text-gray-700 mb-4">
          Waternet gebruikt <strong>oppervlaktewater</strong> als primaire bron. Het water
          wordt gewonnen uit het IJmeer en aangevuld met oevergrondwater via de Bethunepolder
          in De Ronde Venen. Dit water heeft een andere samenstelling dan grondwater, met
          hogere calciumgehaltes die de hardheid verklaren.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <h3 className="font-bold text-[#003F5C] mb-2">IJmeer (hoofdbron)</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Oppervlaktewater, sterk beïnvloed door Rijn</li>
              <li>&bull; Seizoensvariatie in kwaliteit</li>
              <li>&bull; Intensieve zuivering vereist</li>
              <li>&bull; Ozon-, UV- en zandfiltratie</li>
            </ul>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <h3 className="font-bold text-[#003F5C] mb-2">Bethunepolder (aanvulling)</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Oevergrondwater via kunstmatige infiltratie</li>
              <li>&bull; Langzamere doortrekking door de bodem</li>
              <li>&bull; Stabieler en microbiologisch schoner</li>
              <li>&bull; Buffercapaciteit in droge periodes</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheid in Amsterdam: hard water
        </h2>
        <p className="text-gray-700 mb-4">
          Amsterdam staat bekend om zijn <strong>harde water</strong>. De gemiddelde hardheid
          bedraagt 15-20 dH, wat in de categorie &apos;hard&apos; valt. Dit heeft directe gevolgen
          voor het dagelijks leven:
        </p>
        <div className="bg-gray-50 rounded-xl p-5 mb-6">
          <p className="font-semibold text-[#003F5C] mb-3">Gevolgen van hard water in Amsterdam</p>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Waterkoker</span>
              <span className="font-medium text-orange-700">Kalklaag elke 2-4 weken</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Koffiezetapparaat</span>
              <span className="font-medium text-orange-700">Frequent ontkalken nodig</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Douchecabine/douche</span>
              <span className="font-medium text-yellow-700">Kalkvlekken zichtbaar</span>
            </div>
            <div className="flex justify-between">
              <span>Wasmachine/vaatwasser</span>
              <span className="font-medium text-yellow-700">Extra ontkalkingstabs aanbevolen</span>
            </div>
          </div>
        </div>
        <p className="text-gray-700 mb-6">
          Voor Amsterdammers die last hebben van kalk is een{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">
            omgekeerde-osmosefilter
          </Link>{' '}
          of{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">
            waterontharder
          </Link>{' '}
          een effectieve oplossing. De{' '}
          <Link href="/keuzehulp/hard-water" className="text-[#005F8A] underline">
            keuzehulp voor hard water
          </Link>{' '}
          helpt u de juiste keuze te maken.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterkwaliteit en regelgeving
        </h2>
        <p className="text-gray-700 mb-4">
          Ondanks de complexere bron (oppervlaktewater) voldoet Waternet aan alle wettelijke
          kwaliteitseisen. De zuivering omvat meerdere barrières: coagulatie, sedimentatie,
          zandfiltratie, actieve-koolfiltratie, ozonbehandeling en UV-desinfectie.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Jaarlijks publiek waterkwaliteitsrapport via waternet.nl</li>
          <li>Monitoring op geneesmiddelen, hormonen en opkomende stoffen</li>
          <li>PFAS-metingen in IJmeer en behandeld water</li>
          <li>Extra drempelwaarden voor microplastics</li>
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
              <p className="text-sm text-gray-600">Wat kunt u doen tegen kalk bij hard Amsterdams water?</p>
            </Link>
            <Link
              href="/waterhardheid"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Waterhardheid per gemeente</p>
              <p className="text-sm text-gray-600">Zoek de exacte waterhardheid voor uw gemeente in het Waternet-gebied.</p>
            </Link>
            <Link
              href="/omgekeerde-osmose"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</p>
              <p className="text-sm text-gray-600">Effectief hard water filteren met osmose — ook voor Amsterdam.</p>
            </Link>
            <Link
              href="/waterontharder"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Waterontharder</p>
              <p className="text-sm text-gray-600">Kalk verwijderen voor het hele huis — geschikt bij hard Amsterdams water.</p>
            </Link>
            <Link
              href="/drinkwaternormen"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</p>
              <p className="text-sm text-gray-600">Wettelijke kwaliteitseisen waaraan Waternet moet voldoen.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
