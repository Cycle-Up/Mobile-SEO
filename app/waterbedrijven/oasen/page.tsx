import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Oasen: waterkwaliteit Midden-Holland | WaterfilterPlatform',
  description:
    'Oasen levert drinkwater in Midden-Holland (Gouda, Alphen). Ontdek de waterhardheid, oevergrondwaterbronnen en kwaliteit van Oasen-drinkwater.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterbedrijven/oasen' },
};

export default function OasenPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterbedrijven', url: 'https://waterfilterplatform.nl/waterbedrijven' },
          { name: 'Oasen', url: 'https://waterfilterplatform.nl/waterbedrijven/oasen' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Oasen: waterkwaliteit Midden-Holland',
          description:
            'Oasen levert drinkwater in Midden-Holland (Gouda, Alphen). Ontdek de waterhardheid, oevergrondwaterbronnen en kwaliteit van Oasen-drinkwater.',
          datePublished: '2026-05-22',
          dateModified: '2026-05-22',
          url: 'https://waterfilterplatform.nl/waterbedrijven/oasen',
        }}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          {' '}&rsaquo;{' '}
          <Link href="/waterbedrijven" className="hover:underline">Waterbedrijven</Link>
          {' '}&rsaquo;{' '}
          <span>Oasen</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Oasen: drinkwater in Midden-Holland
          </h1>
          <p className="text-gray-700 text-lg">
            Oasen levert drinkwater aan circa 800.000 mensen in Midden-Holland en de
            Krimpenerwaard. Het verzorgingsgebied omvat gemeenten als Gouda, Alphen aan
            den Rijn, Woerden en Krimpen aan den IJssel.
          </p>
        </div>

        <QuickAnswer answer="Oasen levert drinkwater aan circa 800.000 mensen in Midden-Holland (Gouda, Alphen, Woerden). Het water heeft een matige hardheid van 9-13 dH en is afkomstig van oevergrondwater langs de Hollandse IJssel en Lek. De kwaliteit is goed en voldoet ruim aan alle wettelijke normen." />

        <CTABanner context="algemeen" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Verzorgingsgebied van Oasen
        </h2>
        <p className="text-gray-700 mb-4">
          Oasen is een van de kleinere Nederlandse waterbedrijven, maar levert water aan
          een dicht bevolkt gebied in het groene hart van Zuid-Holland. Het verzorgingsgebied
          omvat onder andere:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Gouda</li>
          <li>Alphen aan den Rijn</li>
          <li>Woerden</li>
          <li>Krimpen aan den IJssel</li>
          <li>Bodegraven-Reeuwijk</li>
          <li>Krimpenerwaard</li>
          <li>Zuidplas</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Oasen is in eigendom van de Zuid-Hollandse gemeenten in het verzorgingsgebied.
          Het bedrijf heeft als maatschappelijke doelstelling niet alleen drinkwater leveren,
          maar ook bijdragen aan de bescherming van de leefomgeving en waternatuur in Midden-Holland.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterbronnen: oevergrondwater langs IJssel en Lek
        </h2>
        <p className="text-gray-700 mb-4">
          Oasen gebruikt uitsluitend <strong>oevergrondwater</strong> als waterbron.
          Dit is grondwater dat langzaam wordt aangevuld met water uit de Hollandse IJssel
          en de Lek via oeverfiltratie — een natuurlijk zuiveringsproces waarbij rivierwater
          door de bodem sijpelt en daarbij gefilterd en gezuiverd wordt.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <h3 className="font-bold text-[#003F5C] mb-2">Voordelen oevergrondwater</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Natuurlijke bodemfiltratie</li>
              <li>&bull; Stabielere kwaliteit dan direct rivierwater</li>
              <li>&bull; Lagere concentraties ziekteverwekkers</li>
              <li>&bull; Buffercapaciteit bij droogte</li>
            </ul>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <h3 className="font-bold text-[#003F5C] mb-2">Aandachtspunten</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Rivierinvloeden: nitraat, medicijnen</li>
              <li>&bull; Seizoensvariatie in kwaliteit</li>
              <li>&bull; PFAS-monitoring vereist</li>
              <li>&bull; Intensievere zuivering dan puur grondwater</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheid in Midden-Holland
        </h2>
        <p className="text-gray-700 mb-4">
          Het water van Oasen heeft een matige hardheid van gemiddeld 9-13 dH. Dit valt
          in de middencategorie — niet zo zacht als Friese of Drentse gebieden, maar ook
          niet zo hard als Amsterdam of Limburg.
        </p>
        <div className="bg-gray-50 rounded-xl p-5 mb-6">
          <p className="font-semibold text-[#003F5C] mb-3">Hardheidsindicatie per gebied</p>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Gouda en omgeving</span>
              <span className="font-medium text-yellow-700">Matig (10-13 dH)</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Alphen aan den Rijn</span>
              <span className="font-medium text-yellow-700">Matig (9-12 dH)</span>
            </div>
            <div className="flex justify-between">
              <span>Krimpenerwaard</span>
              <span className="font-medium text-green-700">Zacht-matig (9-11 dH)</span>
            </div>
          </div>
        </div>
        <p className="text-gray-700 mb-6">
          Bij een hardheid van 9-13 dH is kalkafzetting beperkt aanwezig. Een waterfilter
          is niet per definitie noodzakelijk, maar kan smaakverbeteringen bieden. Raadpleeg
          de{' '}
          <Link href="/waterhardheid" className="text-[#005F8A] underline">
            waterhardheid per gemeente
          </Link>{' '}
          voor de specifieke waarde in uw gemeente.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterkwaliteit en duurzaamheid
        </h2>
        <p className="text-gray-700 mb-4">
          Oasen heeft een sterke focus op duurzaamheid en transparantie. Het bedrijf
          monitort actief op opkomende stoffen zoals PFAS, medicijnresten en hormonen.
          De zuiveringsinstallaties zijn uitgerust met actieve-koolfiltratie en UV-desinfectie.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Jaarlijks uitgebreid kwaliteitsrapport via oasen.nl</li>
          <li>Actieve monitoring op PFAS in Hollandse IJssel</li>
          <li>Participatie in nationaal onderzoek naar opkomende stoffen</li>
          <li>Duurzaamheidsrapportage: CO₂-voetafdruk en waterbalans</li>
        </ul>

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
              <p className="text-sm text-gray-600">Exacte hardheid voor uw gemeente in het Oasen-gebied.</p>
            </Link>
            <Link
              href="/stoffen-in-drinkwater"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater</p>
              <p className="text-sm text-gray-600">PFAS, nitraat en medicijnen in Midden-Hollands drinkwater.</p>
            </Link>
            <Link
              href="/waterbedrijven/dunea"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Dunea</p>
              <p className="text-sm text-gray-600">Drinkwater in Den Haag en de Zuid-Hollandse kust.</p>
            </Link>
            <Link
              href="/drinkwaternormen"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</p>
              <p className="text-sm text-gray-600">Wettelijke kwaliteitseisen waaraan Oasen moet voldoen.</p>
            </Link>
            <Link
              href="/keuzehulp"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Waterfilter keuzehulp</p>
              <p className="text-sm text-gray-600">Welk waterfilter past bij uw situatie in Midden-Holland?</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
