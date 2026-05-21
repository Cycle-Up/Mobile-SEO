import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Vitens: waterkwaliteit, regio en hardheid | WaterfilterPlatform',
  description:
    'Vitens levert drinkwater in Oost-, Midden- en Noord-Nederland. Ontdek de waterhardheid, bronnen en kwaliteit van Vitens-drinkwater.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterbedrijven/vitens' },
};

export default function VitensPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterbedrijven', url: 'https://waterfilterplatform.nl/waterbedrijven' },
          { name: 'Vitens', url: 'https://waterfilterplatform.nl/waterbedrijven/vitens' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Vitens: waterkwaliteit, regio en hardheid',
          description:
            'Vitens levert drinkwater in Oost-, Midden- en Noord-Nederland. Ontdek de waterhardheid, bronnen en kwaliteit van Vitens-drinkwater.',
          datePublished: '2026-05-21',
          dateModified: '2026-05-21',
          url: 'https://waterfilterplatform.nl/waterbedrijven/vitens',
        }}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          {' '}&rsaquo;{' '}
          <Link href="/waterbedrijven" className="hover:underline">Waterbedrijven</Link>
          {' '}&rsaquo;{' '}
          <span>Vitens</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Vitens: het grootste waterbedrijf van Nederland
          </h1>
          <p className="text-gray-700 text-lg">
            Vitens is verantwoordelijk voor de drinkwaterlevering in een groot deel van
            Oost-, Midden- en Noord-Nederland. Met bijna 5,8 miljoen klanten is het
            het grootste drinkwaterbedrijf van Nederland.
          </p>
        </div>

        <QuickAnswer answer="Vitens is het grootste drinkwaterbedrijf van Nederland en levert water aan 5,8 miljoen mensen in Oost-, Midden- en Noord-Nederland. Het water is overwegend zacht tot matig hard (5-15 dH) en komt voor 90% uit grondwater." />

        <CTABanner context="algemeen" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Verzorgingsgebied van Vitens
        </h2>
        <p className="text-gray-700 mb-4">
          Vitens levert drinkwater in de volgende provincies en regio's:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Friesland</li>
          <li>Groningen (deels)</li>
          <li>Drenthe</li>
          <li>Overijssel</li>
          <li>Gelderland</li>
          <li>Utrecht</li>
          <li>Flevoland</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Binnen dit uitgestrekte verzorgingsgebied beheert Vitens meer dan 50 waterwinlocaties
          en duizenden kilometers aan leidingen. Het bedrijf is volledig in publiek eigendom van
          vijf provincies en tientallen gemeenten.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterbronnen: 90% grondwater
        </h2>
        <p className="text-gray-700 mb-4">
          Vitens gebruikt voor circa <strong>90% grondwater</strong> en voor de resterende 10%
          oevergrondwater. Grondwater wordt opgepompt uit beschermde waterwingebieden op een
          diepte van doorgaans 20 tot 100 meter. De bodem fungeert als een natuurlijk filter:
          het water heeft tientallen tot honderden jaren over de bodemlagen gedaan voordat het
          wordt gewonnen.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <h3 className="font-bold text-[#003F5C] mb-2">Grondwater (90%)</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Pompputten op 20-100 m diepte</li>
              <li>&bull; Microbiologisch van nature schoon</li>
              <li>&bull; Stabiele kwaliteit het hele jaar</li>
              <li>&bull; Bevat ijzer en mangaan (worden verwijderd)</li>
              <li>&bull; Beschermde waterwingebieden</li>
            </ul>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <h3 className="font-bold text-[#003F5C] mb-2">Oevergrondwater (10%)</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Grondwater dichtbij rivieren</li>
              <li>&bull; Profiteert van rivierwater-infiltratie</li>
              <li>&bull; Vereist iets intensievere zuivering</li>
              <li>&bull; Gebruikt nabij grotere rivieren</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheid bij Vitens
        </h2>
        <p className="text-gray-700 mb-4">
          De waterhardheid in het verzorgingsgebied van Vitens varieert sterk per gemeente en
          per productielocatie. In het algemeen geldt:
        </p>
        <div className="bg-gray-50 rounded-xl p-5 mb-6">
          <p className="font-semibold text-[#003F5C] mb-3">Hardheidsbereik per regio</p>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Friesland, Groningen, Drenthe</span>
              <span className="font-medium text-green-700">Zacht (3-8 dH)</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Overijssel, Flevoland</span>
              <span className="font-medium text-yellow-700">Matig (8-12 dH)</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Gelderland</span>
              <span className="font-medium text-orange-700">Matig-hard (10-15 dH)</span>
            </div>
            <div className="flex justify-between">
              <span>Utrecht (deels)</span>
              <span className="font-medium text-orange-700">Matig-hard (12-15 dH)</span>
            </div>
          </div>
        </div>
        <p className="text-gray-700 mb-6">
          Voor de exacte waterhardheid in uw gemeente kunt u de hardheidspagina van uw gemeente
          raadplegen via{' '}
          <Link href="/waterhardheid" className="text-[#005F8A] underline">
            waterhardheid per gemeente
          </Link>
          . Vitens publiceert ook per productielocatie de actuele hardheidscijfers in het
          jaarlijkse waterkwaliteitsrapport.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterkwaliteit en regelgeving
        </h2>
        <p className="text-gray-700 mb-4">
          Vitens voldoet aan alle eisen van het Nederlandse Drinkwaterbesluit en de Europese
          Drinkwaterrichtlijn (2020/2184). De waterkwaliteit wordt continu gemonitord via
          duizenden meetpunten in het wingebied, de zuiveringsinstallaties en het distributienet.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Jaarlijks waterkwaliteitsrapport openbaar beschikbaar via vitens.nl</li>
          <li>Onafhankelijke controle door de Inspectie Leefomgeving en Transport (ILT)</li>
          <li>RIVM monitort landelijke trends in drinkwaterkwaliteit</li>
          <li>Investering in extra actieve-koolfiltratie voor PFAS-verwijdering</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Bij specifieke bezorgdheid over stoffen als PFAS of nitraat in uw regio kunt u de
          actuele kwaliteitsgegevens raadplegen op{' '}
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
              <p className="text-sm text-gray-600">Zoek de exacte waterhardheid voor uw gemeente in het Vitens-gebied.</p>
            </Link>
            <Link
              href="/waterhardheid/per-provincie"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Waterhardheid per provincie</p>
              <p className="text-sm text-gray-600">Hardheidsverschillen per provincie, inclusief Friesland, Gelderland en Overijssel.</p>
            </Link>
            <Link
              href="/stoffen-in-drinkwater"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater</p>
              <p className="text-sm text-gray-600">PFAS, nitraat en andere stoffen in het drinkwater van Vitens.</p>
            </Link>
            <Link
              href="/drinkwaternormen"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</p>
              <p className="text-sm text-gray-600">Wettelijke kwaliteitseisen waaraan Vitens en andere waterbedrijven moeten voldoen.</p>
            </Link>
            <Link
              href="/waterbedrijven/evides"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Evides</p>
              <p className="text-sm text-gray-600">Drinkwater in Zeeland en Zuidwest-Nederland.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
