import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'WDL: drinkwater in Noordwest-Overijssel | WaterfilterPlatform',
  description:
    'WDL levert drinkwater in Noordwest-Overijssel. Ontdek de zachte waterhardheid, grondwaterbronnen en kwaliteit van WDL-drinkwater.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterbedrijven/wdl' },
};

export default function WdlPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterbedrijven', url: 'https://waterfilterplatform.nl/waterbedrijven' },
          { name: 'WDL', url: 'https://waterfilterplatform.nl/waterbedrijven/wdl' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'WDL: drinkwater in Noordwest-Overijssel',
          description:
            'WDL levert drinkwater in Noordwest-Overijssel. Ontdek de zachte waterhardheid, grondwaterbronnen en kwaliteit van WDL-drinkwater.',
          datePublished: '2026-05-22',
          dateModified: '2026-05-22',
          url: 'https://waterfilterplatform.nl/waterbedrijven/wdl',
        }}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          {' '}&rsaquo;{' '}
          <Link href="/waterbedrijven" className="hover:underline">Waterbedrijven</Link>
          {' '}&rsaquo;{' '}
          <span>WDL</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            WDL: drinkwater in Noordwest-Overijssel
          </h1>
          <p className="text-gray-700 text-lg">
            WDL (Waterleidingbedrijf De Liemers en omstreken) is een van de kleinere
            Nederlandse drinkwaterbedrijven en levert water aan Noordwest-Overijssel.
            Het water is zacht door de zandige bodemgesteldheid van de regio.
          </p>
        </div>

        <QuickAnswer answer="WDL levert drinkwater in Noordwest-Overijssel vanuit grondwater. Het water is zacht (4-8 dH), wat betekent dat kalkafzetting nauwelijks voorkomt. WDL is een van de kleinere Nederlandse waterbedrijven maar voldoet volledig aan de wettelijke drinkwaternormen." />

        <CTABanner context="algemeen" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Verzorgingsgebied
        </h2>
        <p className="text-gray-700 mb-4">
          WDL verzorgt de drinkwaterlevering voor de Noordwest-Overijsselse regio, een
          gebied dat grenst aan het Vitens-gebied. De regio kenmerkt zich door een
          landelijk karakter met kleine steden en dorpen, veengebieden en zandgronden.
        </p>
        <p className="text-gray-700 mb-6">
          Het bedrijf is, net als alle andere Nederlandse waterbedrijven, in publiek eigendom
          en heeft geen winstoogmerk. Alle opbrengsten worden geherinvesteerd in de
          drinkwaterinfrastructuur van de regio.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterbronnen: zacht grondwater
        </h2>
        <p className="text-gray-700 mb-4">
          WDL wint drinkwater uitsluitend uit <strong>grondwater</strong>. De zandige
          bodemgesteldheid van Noordwest-Overijssel filtert het water effectief en zorgt
          voor een stabiele, microbiologisch schone grondwaterkwaliteit.
        </p>
        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
          <h3 className="font-bold text-[#003F5C] mb-2">Kenmerken WDL-grondwater</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>&bull; Zacht water (4-8 dH) — weinig kalk</li>
            <li>&bull; Lage calcium- en magnesiumgehaltes</li>
            <li>&bull; Stabiele kwaliteit het hele jaar door</li>
            <li>&bull; Vrij van oppervlaktewaterinvloeden</li>
            <li>&bull; IJzer en mangaan worden verwijderd bij zuivering</li>
          </ul>
        </div>
        <p className="text-gray-700 mb-6">
          De zachte bodemgesteldheid van het Overijsselse zandlandschap zorgt ervoor dat
          grondwater relatief weinig calcium opneemt. Dit resulteert in een van de lagere
          hardheden in Nederland — vergelijkbaar met Friesland en Drenthe.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheid: zacht water
        </h2>
        <p className="text-gray-700 mb-4">
          WDL levert een van de zachtere soorten drinkwater in Nederland. De hardheid
          ligt doorgaans tussen de 4 en 8 dH:
        </p>
        <div className="bg-gray-50 rounded-xl p-5 mb-6">
          <p className="font-semibold text-[#003F5C] mb-3">Waterhardheid WDL-gebied</p>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Gemiddeld WDL-gebied</span>
              <span className="font-medium text-green-700">Zacht (4-8 dH)</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Vergelijking: Amsterdam (Waternet)</span>
              <span className="font-medium text-red-700">Hard (15-20 dH)</span>
            </div>
            <div className="flex justify-between">
              <span>Vergelijking: NL gemiddeld</span>
              <span className="font-medium text-yellow-700">Matig (10-14 dH)</span>
            </div>
          </div>
        </div>
        <p className="text-gray-700 mb-6">
          Bij zacht water hoeft u nauwelijks ontkalkingstabs voor de vaatwasser te gebruiken
          en blijft uw waterkoker langer schoon. Zie ook{' '}
          <Link href="/waterhardheid" className="text-[#005F8A] underline">
            waterhardheid per gemeente
          </Link>{' '}
          voor de precieze waarde in uw gemeente.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterkwaliteit
        </h2>
        <p className="text-gray-700 mb-4">
          WDL voldoet aan alle eisen van het Nederlandse Drinkwaterbesluit. Het grondwater
          wordt bij winlocaties gemeten op alle relevante parameters. De zuivering omvat
          ontijzering en ontmanganing, en waar nodig desinfectie met UV.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Jaarlijks waterkwaliteitsrapport via wdl.nl</li>
          <li>Controle door de Inspectie Leefomgeving en Transport (ILT)</li>
          <li>Monitoring op nitraat in agrarische gebieden</li>
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
              href="/waterbedrijven/vitens"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Vitens</p>
              <p className="text-sm text-gray-600">Drinkwater in het aangrenzende Oost- en Midden-Nederland.</p>
            </Link>
            <Link
              href="/waterhardheid"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Waterhardheid per gemeente</p>
              <p className="text-sm text-gray-600">Exacte hardheid voor uw gemeente in het WDL-gebied.</p>
            </Link>
            <Link
              href="/drinkwaternormen"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</p>
              <p className="text-sm text-gray-600">Wettelijke kwaliteitseisen waaraan WDL moet voldoen.</p>
            </Link>
            <Link
              href="/stoffen-in-drinkwater"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater</p>
              <p className="text-sm text-gray-600">Welke stoffen kunnen voorkomen in Overijssels grondwater?</p>
            </Link>
            <Link
              href="/keuzehulp"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Waterfilter keuzehulp</p>
              <p className="text-sm text-gray-600">Welk filter past bij zacht WDL-water in uw regio?</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
