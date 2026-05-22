import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: 'Nederlandse Waterbedrijven — Overzicht | WaterfilterPlatform',
  description:
    'Overzicht van de 10 Nederlandse drinkwaterbedrijven: regio, waterbron, hardheid en kwaliteit. Vitens, Evides, PWN, Dunea en meer.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterbedrijven' },
};

const bedrijven = [
  { naam: 'Vitens', regio: 'Oost, Midden, Noord NL', bron: 'Grondwater (90%)', hardheid: 'Zacht-matig (5-15 dH)', website: 'vitens.nl' },
  { naam: 'Evides', regio: 'ZW Nederland, Zeeland', bron: 'Gemengd', hardheid: 'Matig (8-12 dH)', website: 'evides.nl' },
  { naam: 'PWN', regio: 'Noord-Holland', bron: 'Oppervlaktewater (Rijn)', hardheid: 'Matig-hard (12-16 dH)', website: 'pwn.nl' },
  { naam: 'Dunea', regio: 'Zuid-Holland (kust)', bron: 'Duinwater (Rijn-infiltratie)', hardheid: 'Matig (10-14 dH)', website: 'dunea.nl' },
  { naam: 'Brabant Water', regio: 'Noord-Brabant', bron: 'Grondwater', hardheid: 'Matig-zacht (6-10 dH)', website: 'brabantwater.nl' },
  { naam: 'Waternet', regio: 'Amsterdam & omgeving', bron: 'Oppervlaktewater (IJmeer)', hardheid: 'Hard (15-20 dH)', website: 'waternet.nl' },
  { naam: 'WML', regio: 'Limburg', bron: 'Grondwater + Maas', hardheid: 'Hard (15-22 dH)', website: 'wml.nl' },
  { naam: 'Oasen', regio: 'Midden-Holland', bron: 'Oevergrondwater', hardheid: 'Matig (9-13 dH)', website: 'oasen.nl' },
  { naam: 'WDL', regio: 'NW-Overijssel', bron: 'Grondwater', hardheid: 'Zacht (4-8 dH)', website: 'wdl.nl' },
  { naam: 'Waterbedrijf Groningen', regio: 'Groningen', bron: 'Grondwater', hardheid: 'Zacht (3-7 dH)', website: 'waterbedrijfgroningen.nl' },
];

const uitgelicht = [
  {
    naam: 'Vitens',
    href: '/waterbedrijven/vitens',
    regio: 'Oost, Midden en Noord-Nederland',
    hardheid: '5-15 dH (zacht tot matig)',
    desc: 'Grootste drinkwaterbedrijf van Nederland. Levert water aan 5,8 miljoen mensen op basis van 90% grondwater.',
  },
  {
    naam: 'Evides',
    href: '/waterbedrijven/evides',
    regio: 'Zeeland en Zuidwest-Nederland',
    hardheid: '8-12 dH (matig)',
    desc: 'Levert water aan 2,5 miljoen mensen via Biesbosch-spaarbekkens en grondwater.',
  },
  {
    naam: 'PWN',
    href: '/waterbedrijven/pwn',
    regio: 'Noord-Holland (excl. Amsterdam)',
    hardheid: '12-16 dH (matig tot hard)',
    desc: 'Maakt gebruik van Rijnwater dat via de duinen wordt gezuiverd voor circa 1 miljoen mensen.',
  },
  {
    naam: 'Dunea',
    href: '/waterbedrijven/dunea',
    regio: 'Den Haag en Zuid-Hollandse kust',
    hardheid: '10-14 dH (matig)',
    desc: 'Levert duinwater via Rijn-infiltratie aan 1,2 miljoen mensen in en rond Den Haag.',
  },
  {
    naam: 'Brabant Water',
    href: '/waterbedrijven/brabant-water',
    regio: 'Noord-Brabant',
    hardheid: '6-10 dH (zacht tot matig)',
    desc: 'Enige drinkwaterleverancier in Noord-Brabant. Levert zacht grondwater aan 2,5 miljoen mensen.',
  },
  {
    naam: 'Waternet',
    href: '/waterbedrijven/waternet',
    regio: 'Amsterdam en omgeving',
    hardheid: '15-20 dH (hard)',
    desc: 'Levert relatief hard IJmeerwater aan circa 1 miljoen Amsterdammers. Kalkafzetting is een veelgehoorde klacht.',
  },
  {
    naam: 'WML',
    href: '/waterbedrijven/wml',
    regio: 'Limburg',
    hardheid: '15-22 dH (hard tot zeer hard)',
    desc: 'Levert het hardste water van Nederland aan 1,1 miljoen Limburgers vanuit grondwater en de Maas.',
  },
  {
    naam: 'Oasen',
    href: '/waterbedrijven/oasen',
    regio: 'Midden-Holland (Gouda, Alphen)',
    hardheid: '9-13 dH (matig)',
    desc: 'Levert oevergrondwater aan circa 800.000 mensen in Midden-Holland en de Krimpenerwaard.',
  },
  {
    naam: 'WDL',
    href: '/waterbedrijven/wdl',
    regio: 'Noordwest-Overijssel',
    hardheid: '4-8 dH (zacht)',
    desc: 'Levert zacht grondwater in Noordwest-Overijssel. Kalkafzetting is nauwelijks een probleem.',
  },
  {
    naam: 'Waterbedrijf Groningen',
    href: '/waterbedrijven/waterbedrijf-groningen',
    regio: 'Provincie Groningen',
    hardheid: '3-7 dH (zacht)',
    desc: 'Levert een van de zachtste drinkwaters van Nederland vanuit Gronings grondwater.',
  },
];

export default function WaterbedrijvenPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterbedrijven', url: 'https://waterfilterplatform.nl/waterbedrijven' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Nederlandse Waterbedrijven — Overzicht',
          description:
            'Overzicht van de 10 Nederlandse drinkwaterbedrijven: regio, waterbron, hardheid en kwaliteit. Vitens, Evides, PWN, Dunea en meer.',
          datePublished: '2026-05-21',
          dateModified: '2026-05-21',
          url: 'https://waterfilterplatform.nl/waterbedrijven',
        }}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          {' '}&rsaquo;{' '}
          <span>Waterbedrijven</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Nederlandse drinkwaterbedrijven
          </h1>
          <p className="text-gray-700 text-lg">
            In Nederland leveren 10 regionale drinkwaterbedrijven samen al het drinkwater aan 17 miljoen
            mensen. Elk bedrijf heeft een eigen regio, eigen waterbronnen en eigen waterkwaliteit.
          </p>
        </div>

        <QuickAnswer answer="Nederland heeft 10 drinkwaterbedrijven die samen zo'n 1,2 miljard m3 drinkwater per jaar leveren aan 17 miljoen mensen. Elk bedrijf gebruikt andere bronnen (grondwater of oppervlaktewater) wat de waterhardheid en samenstelling beinvloedt." />

        <MethodologyBadge
          sources={['RIVM', 'ILT', 'VEWIN (Vereniging van waterbedrijven)', 'EU-richtlijn 2020/2184']}
          lastReviewed="2026-05-22"
        />

        <CTABanner context="algemeen" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Van 200 bedrijven naar 10: schaalvergroting in de watersector
        </h2>
        <p className="text-gray-700 mb-4">
          Nederland telt momenteel 10 drinkwaterbedrijven. Dat was niet altijd zo: aan het begin van
          de twintigste eeuw bestonden er meer dan 200 lokale waterleidingbedrijven. Door decennia van
          fusies en schaalvergroting zijn deze teruggebracht tot de huidige 10 regionale bedrijven.
        </p>
        <p className="text-gray-700 mb-6">
          De schaalvergroting heeft geleid tot hogere investeringen in zuiveringstechnologie, meer
          uniformiteit in kwaliteitseisen en lagere kosten per kubieke meter. Alle bedrijven zijn
          in publiek eigendom: provincies en gemeenten houden de aandelen. Winstoogmerk is wettelijk
          uitgesloten; opbrengsten worden volledig herinvesteerd in de infrastructuur.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Overzicht van alle 10 Nederlandse waterbedrijven
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 mb-8">
          <table className="w-full min-w-[600px] text-sm border-collapse">
            <thead>
              <tr className="bg-[#003F5C] text-white">
                <th className="text-left py-2.5 px-3 font-semibold">Bedrijf</th>
                <th className="text-left py-2.5 px-3 font-semibold">Regio</th>
                <th className="text-left py-2.5 px-3 font-semibold">Bron</th>
                <th className="text-left py-2.5 px-3 font-semibold">Hardheid</th>
                <th className="text-left py-2.5 px-3 font-semibold">Website</th>
              </tr>
            </thead>
            <tbody>
              {bedrijven.map((b, i) => (
                <tr
                  key={b.naam}
                  className={
                    i % 2 === 0
                      ? 'bg-white border-b border-gray-100'
                      : 'bg-[#E0F2FE]/30 border-b border-gray-100'
                  }
                >
                  <td className="py-2.5 px-3 font-medium">{b.naam}</td>
                  <td className="py-2.5 px-3 text-gray-600 text-xs">{b.regio}</td>
                  <td className="py-2.5 px-3 text-gray-600 text-xs">{b.bron}</td>
                  <td className="py-2.5 px-3 text-gray-600 text-xs">{b.hardheid}</td>
                  <td className="py-2.5 px-3 text-xs">
                    <span className="text-[#005F8A]">{b.website}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-8">
          Hardheidscijfers zijn indicatief. Waarden varieren per gemeente en productielocatie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Alle 10 Nederlandse waterbedrijven
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {uitgelicht.map((b) => (
            <Link
              key={b.naam}
              href={b.href}
              className="block border border-gray-200 rounded-xl p-5 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-bold text-[#003F5C] text-lg mb-1">{b.naam}</p>
              <p className="text-xs text-gray-500 mb-1">{b.regio}</p>
              <p className="text-xs text-[#005F8A] font-medium mb-2">Hardheid: {b.hardheid}</p>
              <p className="text-sm text-gray-600">{b.desc}</p>
            </Link>
          ))}
        </div>

        <CTABanner context="algemeen" />

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/waterbedrijven/brabant-water"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Brabant Water</p>
              <p className="text-sm text-gray-600">Zacht grondwater in Noord-Brabant: hardheid, kwaliteit en bijzonderheden.</p>
            </Link>
            <Link
              href="/waterbedrijven/waternet"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Waternet</p>
              <p className="text-sm text-gray-600">Hard IJmeerwater in Amsterdam — oorzaken, gevolgen en oplossingen.</p>
            </Link>
            <Link
              href="/waterbedrijven/wml"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">WML</p>
              <p className="text-sm text-gray-600">Hard tot zeer hard water in Limburg vanuit kalkrijke Maasbodem.</p>
            </Link>
            <Link
              href="/waterbedrijven/oasen"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Oasen</p>
              <p className="text-sm text-gray-600">Matig water in Midden-Holland (Gouda, Alphen) via oevergrondwater.</p>
            </Link>
            <Link
              href="/waterbedrijven/wdl"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">WDL</p>
              <p className="text-sm text-gray-600">Zacht grondwater in Noordwest-Overijssel — nauwelijks kalkproblemen.</p>
            </Link>
            <Link
              href="/waterbedrijven/waterbedrijf-groningen"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Waterbedrijf Groningen</p>
              <p className="text-sm text-gray-600">Een van de zachtste drinkwaters van Nederland vanuit Gronings grondwater.</p>
            </Link>
            <Link
              href="/waterhardheid"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Waterhardheid per gemeente</p>
              <p className="text-sm text-gray-600">Zoek de waterhardheid in uw gemeente en ontdek welk waterfilter past.</p>
            </Link>
            <Link
              href="/drinkwaternormen"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</p>
              <p className="text-sm text-gray-600">Wettelijke kwaliteitseisen waaraan alle waterbedrijven moeten voldoen.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
