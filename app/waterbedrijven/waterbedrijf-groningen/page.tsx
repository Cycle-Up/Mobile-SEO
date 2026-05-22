import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterbedrijf Groningen: kwaliteit en hardheid | WaterfilterPlatform',
  description:
    'Waterbedrijf Groningen levert drinkwater in de provincie Groningen. Ontdek de zachte waterhardheid, grondwaterbronnen en drinkwaterkwaliteit.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterbedrijven/waterbedrijf-groningen' },
};

export default function WaterbedrijfGroningenPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterbedrijven', url: 'https://waterfilterplatform.nl/waterbedrijven' },
          { name: 'Waterbedrijf Groningen', url: 'https://waterfilterplatform.nl/waterbedrijven/waterbedrijf-groningen' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterbedrijf Groningen: kwaliteit en hardheid',
          description:
            'Waterbedrijf Groningen levert drinkwater in de provincie Groningen. Ontdek de zachte waterhardheid, grondwaterbronnen en drinkwaterkwaliteit.',
          datePublished: '2026-05-22',
          dateModified: '2026-05-22',
          url: 'https://waterfilterplatform.nl/waterbedrijven/waterbedrijf-groningen',
        }}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          {' '}&rsaquo;{' '}
          <Link href="/waterbedrijven" className="hover:underline">Waterbedrijven</Link>
          {' '}&rsaquo;{' '}
          <span>Waterbedrijf Groningen</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterbedrijf Groningen: zacht water uit de provincie
          </h1>
          <p className="text-gray-700 text-lg">
            Waterbedrijf Groningen verzorgt de drinkwaterlevering voor een deel van de
            provincie Groningen. Het water is een van de zachtste van Nederland — ideaal
            voor apparaten en vrijwel zonder kalkafzetting.
          </p>
        </div>

        <QuickAnswer answer="Waterbedrijf Groningen levert drinkwater in de provincie Groningen vanuit grondwater. Het water is zacht (3-7 dH), wat behoort tot de laagste hardheden in Nederland. Kalkproblemen zijn zeldzaam; een waterontharder of ontkalker is hier doorgaans niet nodig." />

        <CTABanner context="algemeen" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Verzorgingsgebied
        </h2>
        <p className="text-gray-700 mb-4">
          Waterbedrijf Groningen verzorgt drinkwater voor een deel van de provincie Groningen.
          Een ander deel van de provincie valt onder het Vitens-verzorgingsgebied. De regio
          kenmerkt zich door een uitgestrekt landelijk gebied met relatief lage bevolkingsdichtheid.
        </p>
        <p className="text-gray-700 mb-6">
          Net als alle Nederlandse waterbedrijven is Waterbedrijf Groningen in publiek
          eigendom en heeft het geen winstoogmerk. Alle inkomsten worden teruggeïnvesteerd
          in infrastructuur en waterkwaliteit.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterbronnen: Gronings grondwater
        </h2>
        <p className="text-gray-700 mb-4">
          Waterbedrijf Groningen wint drinkwater volledig uit <strong>grondwater</strong>.
          De Groningse ondergrond bestaat voor een groot deel uit zand en klei, waardoor
          het grondwater microbiologisch schoon is en weinig mineralen bevat.
        </p>
        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
          <h3 className="font-bold text-[#003F5C] mb-2">Kenmerken Gronings grondwater</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>&bull; Zacht — lage calcium- en magnesiumgehaltes</li>
            <li>&bull; Stabiele kwaliteit door diepe winning</li>
            <li>&bull; Minimale bovengrondse invloeden</li>
            <li>&bull; IJzer en mangaan worden verwijderd</li>
            <li>&bull; Geen kalkafzettingsproblemen voor bewoners</li>
          </ul>
        </div>
        <p className="text-gray-700 mb-6">
          De zandige bodemopbouw van Groningen, met name in het westelijke en zuidelijke
          deel van de provincie, zorgt ervoor dat grondwater weinig calcium opneemt.
          Dit maakt het Groningse water een van de zachtste van Nederland.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheid: behoort tot de zachtste in Nederland
        </h2>
        <p className="text-gray-700 mb-4">
          Met een hardheid van doorgaans 3-7 dH behoort Gronings drinkwater tot de
          zachtste categorie in Nederland, samen met Friesland en Drenthe:
        </p>
        <div className="bg-gray-50 rounded-xl p-5 mb-6">
          <p className="font-semibold text-[#003F5C] mb-3">Vergelijking waterhardheid</p>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Waterbedrijf Groningen</span>
              <span className="font-medium text-green-700">Zacht (3-7 dH)</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Vitens (Friesland/Drenthe)</span>
              <span className="font-medium text-green-700">Zacht (3-8 dH)</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Nationaal gemiddelde</span>
              <span className="font-medium text-yellow-700">Matig (10-14 dH)</span>
            </div>
            <div className="flex justify-between">
              <span>WML Limburg (max)</span>
              <span className="font-medium text-red-700">Zeer hard (tot 22 dH)</span>
            </div>
          </div>
        </div>
        <p className="text-gray-700 mb-6">
          Bij zacht water heeft u vrijwel geen last van kalkaanslag in uw waterkoker of
          douchecabine. De hoeveelheid ontkalkingstabs voor de vaatwasser is minimaal en
          een waterontharder is niet nodig. Bekijk{' '}
          <Link href="/waterhardheid/per-provincie" className="text-[#005F8A] underline">
            waterhardheid per provincie
          </Link>{' '}
          voor een vergelijking met andere regio&apos;s.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterkwaliteit en regelgeving
        </h2>
        <p className="text-gray-700 mb-4">
          Waterbedrijf Groningen voldoet aan alle eisen van het Drinkwaterbesluit en de
          Europese Drinkwaterrichtlijn. De kwaliteitscontrole omvat monitoring bij de
          winlocaties, in de zuiveringsinstallaties en in het distributienet.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Jaarlijks waterkwaliteitsrapport beschikbaar via de website</li>
          <li>Onafhankelijke controle door de ILT</li>
          <li>Monitoring op nitraat en bestrijdingsmiddelen</li>
          <li>Aandacht voor aardbevingseffecten op waterinfrastructuur in de regio</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Een specifiek aandachtspunt voor de Groningse regio zijn de gevolgen van
          aardgaswinning. Waterbedrijf Groningen monitort de staat van de
          drinkwaterinfrastructuur nauwlettend op schades door verzakkingen en trillingen.
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
              href="/waterbedrijven/vitens"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Vitens</p>
              <p className="text-sm text-gray-600">Drinkwater in het aangrenzende Drenthe, Friesland en Overijssel.</p>
            </Link>
            <Link
              href="/waterhardheid"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Waterhardheid per gemeente</p>
              <p className="text-sm text-gray-600">Exacte hardheid voor uw Groningse gemeente.</p>
            </Link>
            <Link
              href="/waterhardheid/per-provincie"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Waterhardheid per provincie</p>
              <p className="text-sm text-gray-600">Vergelijk de Groningse hardheid met andere provincies.</p>
            </Link>
            <Link
              href="/drinkwaternormen"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</p>
              <p className="text-sm text-gray-600">Wettelijke kwaliteitseisen voor alle Nederlandse waterbedrijven.</p>
            </Link>
            <Link
              href="/stoffen-in-drinkwater"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater</p>
              <p className="text-sm text-gray-600">Welke stoffen kunnen voorkomen in Gronings grondwater?</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
