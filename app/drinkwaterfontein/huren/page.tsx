import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Drinkwaterfontein huren: kosten, aanbieders en alternatieven 2026',
  description: 'Drinkwaterfontein huren of kopen? Vergelijk kosten per maand, contract voorwaarden en aanbieders. Inclusief rekenvoorbeeld huren vs kopen voor kantoor en thuis.',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwaterfontein/huren' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoeveel kost het huren van een drinkwaterfontein per maand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De huurprijs van een drinkwaterfontein varieert van €15-40 per maand voor een eenvoudig flessenmodel tot €40-90 per maand voor een mains-fed kantoormodel inclusief filteronderhoud. Premium 4-in-1 modellen met RO-filtratie kosten €80-200 per maand bij huur. De huurprijs is doorgaans inclusief levering, installatie en periodiek filteronderhoud, maar controleer altijd de kleine lettertjes van het contract.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is huren of kopen van een drinkwaterfontein goedkoper?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kopen is op de lange termijn (3+ jaar) bijna altijd goedkoper. Een mains-fed fontein kost €400-800 aanschaf en daarna €15-30 per maand aan filters en stroom. Bij huur betaalt u €40-90 per maand structureel. Het break-even punt ligt bij 12-24 maanden. Huren is zinvol bij onzekerheid over de gebruiksduur, tijdelijke locaties, of als u geen onderhoud zelf wilt verzorgen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke aanbieders verhuren drinkwaterfonteinen in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bekende aanbieders op de Nederlandse markt zijn Eden Springs, Aqua Vital, PurAqua en WaterLogic. Deze aanbieders leveren zowel flessenfonteinen als mains-fed modellen. Zij verzorgen ook het periodieke filteronderhoud en levering van waterflessen. Vergelijk altijd de contractduur, opzegtermijn en wat inbegrepen is bij servicebezoeken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de nadelen van een huurcontract voor een drinkwaterfontein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nadelen van huren zijn: hogere totaalkosten op de lange termijn, minimale contractduur (vaak 12-24 maanden), opzegtermijnen van 1-3 maanden, en afhankelijkheid van de aanbieder voor onderhoud en vervanging. Bij faillissement van de verhuurder kunt u zonder fontein komen te zitten. Sommige contracten hebben automatische verlengingsclausules die u actief moet opzeggen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een drinkwaterfontein maandelijks opzeggen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meeste huurcontracten voor drinkwaterfonteinen hebben een minimale looptijd van 12 maanden, met daarna een opzegtermijn van 1-3 maanden. Maandelijkse opzegging is zelden mogelijk en komt met een hogere maandprijs. Lees altijd de contractvoorwaarden voordat u tekent, met bijzondere aandacht voor de automatische verlengingsclausule en de kosten bij voortijdige beeindiging.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Drinkwaterfontein huren: kosten, aanbieders en alternatieven 2026',
  description: 'Drinkwaterfontein huren of kopen? Vergelijk kosten per maand, contractvoorwaarden en aanbieders voor kantoor en thuis.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/drinkwaterfontein/huren',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function DrinkwaterfonteinHurenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Drinkwaterfontein', item: 'https://waterfilterplatform.nl/drinkwaterfontein' },
              { '@type': 'ListItem', position: 3, name: 'Drinkwaterfontein huren', item: 'https://waterfilterplatform.nl/drinkwaterfontein/huren' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/drinkwaterfontein" className="hover:underline">Drinkwaterfontein</Link> &rsaquo;{' '}
          <span>Drinkwaterfontein huren</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Drinkwaterfontein huren: kosten, aanbieders en alternatieven 2026
        </h1>

        <QuickAnswer answer="Een drinkwaterfontein huren kost €15-90 per maand afhankelijk van het model en de aanbieder. Huren is handig voor kantoren die geen groot voorschot willen of twijfelen over de duur van gebruik. Kopen is goedkoper zodra u langer dan 12-24 maanden gebruik maakt van de fontein." />

        <CTABanner context="osmose" />

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Huren of kopen: rekenvoorbeeld
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="px-3 py-2 text-left">Situatie</th>
                  <th className="px-3 py-2 text-left">Huren (5 jaar)</th>
                  <th className="px-3 py-2 text-left">Kopen (5 jaar)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Eenvoudig kantoormodel</td>
                  <td className="border border-gray-300 px-3 py-2">&euro;55/mnd = &euro;3.300</td>
                  <td className="border border-gray-300 px-3 py-2">&euro;600 + &euro;25/mnd = &euro;2.100</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Mains-fed premium</td>
                  <td className="border border-gray-300 px-3 py-2">&euro;85/mnd = &euro;5.100</td>
                  <td className="border border-gray-300 px-3 py-2">&euro;1.000 + &euro;30/mnd = &euro;2.800</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Flessenfontein</td>
                  <td className="border border-gray-300 px-3 py-2">&euro;25/mnd = &euro;1.500</td>
                  <td className="border border-gray-300 px-3 py-2">&euro;150 + fleskosten</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-3">Bovenstaande bedragen zijn indicatief. Maandelijkse kosten bij kopen zijn exclusief stroom (~&euro;5-15/mnd).</p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is inbegrepen bij een huurcontract?
        </h2>
        <p className="text-gray-700 mb-4">
          De meeste huurcontracten voor drinkwaterfonteinen omvatten:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Levering en installatie van de fontein</li>
          <li>Periodieke filtervervanging (doorgaans 1 of 2 keer per jaar)</li>
          <li>Reiniging en desinfectie bij het servicebezoek</li>
          <li>Reparatie of vervanging bij defecten</li>
          <li>Bij flessenfonteinen: levering van waterflessen</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Wat doorgaans <strong>niet</strong> inbegrepen is: extra servicebezoeken buiten schema, vervanging door gebruikersschade, en kosten na voortijdige opzegging.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Aanbieders drinkwaterfontein huren
        </h2>
        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Eden Springs</h3>
            <p className="text-gray-700 text-sm">Een van de grootste aanbieders van waterfonteinen in Europa, actief in Nederland. Breed assortiment flessenfonteinen en mains-fed modellen, inclusief filter en onderhoud. Contracten vanaf 12 maanden.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Aqua Vital</h3>
            <p className="text-gray-700 text-sm">Nederlandse aanbieder gericht op kantooromgevingen. Mains-fed fonteinen met koolstoffiltratie. Flexibele contractvormen beschikbaar voor grotere klanten.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">WaterLogic</h3>
            <p className="text-gray-700 text-sm">Internationaal merk met UV-filtratie als standaard. Gericht op zakelijke klanten, modellen met PurVive UV-technologie. Beschikbaar in Nederland via distributeurs.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is huren zinvol?
        </h2>
        <p className="text-gray-700 mb-4">
          Huren is een verstandige keuze in de volgende situaties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Tijdelijke locatie</strong>: bij verhuizing of tijdelijke kantoorruimte is huren praktischer dan kopen.</li>
          <li><strong>Geen eigen technisch onderhoud</strong>: als u filtervervanging en onderhoud niet zelf wilt of kunt verzorgen.</li>
          <li><strong>Beperkt startkapitaal</strong>: bij startende bedrijven is de lagere initiële investering aantrekkelijk.</li>
          <li><strong>Onzekerheid over gebruik</strong>: als u niet weet hoe lang u de fontein nodig hebt.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Alternatieven voor huren
        </h2>
        <p className="text-gray-700 mb-6">
          Overweegt u een drinkwaterfontein te huren voor uw kantoor, maar twijfelt u? Bekijk ook de mogelijkheid om een fontein te <Link href="/drinkwaterfontein/kopen" className="text-[#005F8A] underline">kopen</Link>. Op de pagina over{' '}
          <Link href="/zakelijk/kantoor" className="text-[#005F8A] underline">drinkwater voor kantoor</Link> vindt u een volledig overzicht van alle opties voor de werkplek, inclusief de vergelijking tussen fonteinen en waterfiltersystemen.
        </p>

        {/* Gerelateerde onderwerpen */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/zakelijk/kantoor" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwater kantoor</h3>
              <p className="text-sm text-gray-600">Overzicht van drinkwateroplossingen voor de werkplek, inclusief Arbowet-verplichting.</p>
            </Link>
            <Link href="/drinkwaterfontein/kopen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaterfontein kopen</h3>
              <p className="text-sm text-gray-600">Koopgids met prijsklassen, merken en beslispunten voor thuis en kantoor.</p>
            </Link>
            <Link href="/vergelijken/waterfilter-vs-waterontharder" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter vs waterontharder</h3>
              <p className="text-sm text-gray-600">Vergelijking van de twee meest gebruikte waterbehandelingstechnieken.</p>
            </Link>
            <Link href="/drinkwaterfontein" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaterfontein</h3>
              <p className="text-sm text-gray-600">Alles over drinkwaterfonteinen: types, kosten en onderhoud.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over drinkwaterfontein huren</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/drinkwaterfontein" className="text-[#005F8A] underline">drinkwaterfontein overzicht</Link>,{' '}
          <Link href="/drinkwaterfontein/kopen" className="text-[#005F8A] underline">drinkwaterfontein kopen</Link>,{' '}
          <Link href="/drinkwaterfontein/onderhoud" className="text-[#005F8A] underline">onderhoud drinkwaterfontein</Link> en{' '}
          <Link href="/drinkwaterfontein/kantoor" className="text-[#005F8A] underline">kantoorwaterfontein</Link>.
        </p>
      </main>
    </>
  );
}
