import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Brabant Water: waterkwaliteit, regio en hardheid | WaterfilterPlatform',
  description:
    'Brabant Water levert drinkwater in Noord-Brabant. Ontdek de waterhardheid, grondwaterbronnen en kwaliteit van Brabant Water.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterbedrijven/brabant-water' },
};

export default function BrabantWaterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterbedrijven', url: 'https://waterfilterplatform.nl/waterbedrijven' },
          { name: 'Brabant Water', url: 'https://waterfilterplatform.nl/waterbedrijven/brabant-water' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Brabant Water: waterkwaliteit, regio en hardheid',
          description:
            'Brabant Water levert drinkwater in Noord-Brabant. Ontdek de waterhardheid, grondwaterbronnen en kwaliteit van Brabant Water.',
          datePublished: '2026-05-22',
          dateModified: '2026-05-22',
          url: 'https://waterfilterplatform.nl/waterbedrijven/brabant-water',
        }}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          {' '}&rsaquo;{' '}
          <Link href="/waterbedrijven" className="hover:underline">Waterbedrijven</Link>
          {' '}&rsaquo;{' '}
          <span>Brabant Water</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Brabant Water: drinkwater in Noord-Brabant
          </h1>
          <p className="text-gray-700 text-lg">
            Brabant Water is de drinkwaterleverancier voor de gehele provincie Noord-Brabant.
            Met circa 2,5 miljoen klanten is het een van de grotere waterbedrijven van Nederland
            en het bedrijf put uitsluitend uit grondwater.
          </p>
        </div>

        <QuickAnswer answer="Brabant Water levert drinkwater aan circa 2,5 miljoen mensen in Noord-Brabant. Het water is zacht tot matig hard (6-10 dH) en komt volledig uit grondwater. Door de landbouwintensiteit in de regio wordt extra gefilterd op nitraat en bestrijdingsmiddelen." />

        <CTABanner context="algemeen" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Verzorgingsgebied: heel Noord-Brabant
        </h2>
        <p className="text-gray-700 mb-4">
          Brabant Water levert drinkwater in de gehele provincie Noord-Brabant — van Bergen op Zoom
          in het westen tot Boxmeer in het oosten. Het bedrijf beheert meer dan 60 winlocaties,
          verspreid over het Brabantse zandlandschap.
        </p>
        <p className="text-gray-700 mb-6">
          Brabant Water is volledig in publiek eigendom van de provincie Noord-Brabant en
          Brabantse gemeenten. Als enig drinkwaterbedrijf in de provincie heeft het een
          wettelijk monopolie op de levering van drinkwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          100% grondwater — diepte en bescherming
        </h2>
        <p className="text-gray-700 mb-4">
          Brabant Water is een van de weinige Nederlandse bedrijven die uitsluitend <strong>grondwater</strong> gebruikt,
          zonder aanvulling van oppervlaktewater. Het grondwater wordt gewonnen op dieptes van
          10 tot 80 meter, afhankelijk van de locatie. De Brabantse zandgronden zijn van nature
          goed doorlatend en zorgen voor snelle aanvulling van het grondwater.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <h3 className="font-bold text-[#003F5C] mb-2">Voordelen Brabants grondwater</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Stabiele temperatuur (10-12 °C)</li>
              <li>&bull; Microbiologisch schoon van nature</li>
              <li>&bull; Relatief zacht — minder kalkafzetting</li>
              <li>&bull; Geen algen of oppervlaktewaterproblemen</li>
            </ul>
          </div>
          <div className="bg-[#FFF7ED] rounded-xl p-5">
            <h3 className="font-bold text-[#003F5C] mb-2">Aandachtspunten</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Nitraat door intensieve landbouw</li>
              <li>&bull; Bestrijdingsmiddelen in kwetsbare gebieden</li>
              <li>&bull; PFAS vanuit historische industrieterreinen</li>
              <li>&bull; IJzer en mangaan worden verwijderd</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-700 mb-6">
          Om de nitraat- en bestrijdingsmiddelenbelasting te beheersen heeft Brabant Water
          een eigen "Grondwaterbeschermingsprogramma" opgesteld. Het bedrijf werkt samen met
          agrariërs in de buurt van waterwingebieden om de grondwaterkwaliteit op lange termijn
          te waarborgen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheid in Noord-Brabant
        </h2>
        <p className="text-gray-700 mb-4">
          Brabants drinkwater behoort tot het zachtere water van Nederland. De hardheid
          varieert per regio, maar ligt doorgaans tussen de 6 en 10 dH:
        </p>
        <div className="bg-gray-50 rounded-xl p-5 mb-6">
          <p className="font-semibold text-[#003F5C] mb-3">Hardheidsbereik per regio</p>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>West-Brabant (Bergen op Zoom, Breda)</span>
              <span className="font-medium text-green-700">Zacht (5-8 dH)</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Midden-Brabant (Tilburg, 's-Hertogenbosch)</span>
              <span className="font-medium text-green-700">Zacht-matig (6-9 dH)</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Oost-Brabant (Eindhoven, Helmond)</span>
              <span className="font-medium text-yellow-700">Matig (8-11 dH)</span>
            </div>
            <div className="flex justify-between">
              <span>Noordoost-Brabant (Oss, Boxmeer)</span>
              <span className="font-medium text-yellow-700">Matig (9-12 dH)</span>
            </div>
          </div>
        </div>
        <p className="text-gray-700 mb-6">
          Bij een hardheid van 6-10 dH is er weinig kalkafzetting in apparaten. Een waterfilter
          is voor de meeste Brabanders niet noodzakelijk vanwege hardheid. Wilt u toch filteren,
          raadpleeg dan de{' '}
          <Link href="/keuzehulp" className="text-[#005F8A] underline">
            waterfilter keuzehulp
          </Link>{' '}
          voor advies op maat.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterkwaliteit en regelgeving
        </h2>
        <p className="text-gray-700 mb-4">
          Brabant Water voldoet aan alle eisen van het Nederlandse Drinkwaterbesluit. De kwaliteit
          wordt continu gemonitord in de wingebieden, bij de zuivering en in het distributienet.
          Jaarlijks verschijnt een uitgebreid waterkwaliteitsrapport via brabantwater.nl.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Extra monitoring op nitraat door landbouwactiviteiten in de regio</li>
          <li>Actieve-koolfiltratie voor verwijdering van bestrijdingsmiddelen</li>
          <li>Investeringen in PFAS-monitoring en -verwijdering</li>
          <li>Publieke kwaliteitsrapporten beschikbaar via brabantwater.nl</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor actuele informatie over specifieke stoffen in Noord-Brabants drinkwater,
          zie{' '}
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
              <p className="text-sm text-gray-600">Zoek de exacte waterhardheid voor uw gemeente in het Brabant Water-gebied.</p>
            </Link>
            <Link
              href="/stoffen-in-drinkwater"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater</p>
              <p className="text-sm text-gray-600">Nitraat, PFAS en bestrijdingsmiddelen in Brabants grondwater.</p>
            </Link>
            <Link
              href="/drinkwaternormen"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</p>
              <p className="text-sm text-gray-600">Wettelijke kwaliteitseisen waaraan Brabant Water moet voldoen.</p>
            </Link>
            <Link
              href="/waterbedrijven/vitens"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Vitens</p>
              <p className="text-sm text-gray-600">Drinkwater in Oost-, Midden- en Noord-Nederland.</p>
            </Link>
            <Link
              href="/keuzehulp"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Waterfilter keuzehulp</p>
              <p className="text-sm text-gray-600">Welk waterfilter past bij uw situatie in Noord-Brabant?</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
