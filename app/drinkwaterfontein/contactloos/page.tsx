import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Contactloze drinkwaterfontein: sensor, hygiene en gebruik',
    description:
      'Een contactloze drinkwaterfontein tap je zonder aanraking via sensor, infrarood of voetbediening. Hygienischer voor openbaar en druk gebruik, met bidon-vulpunt - let op sensoronderhoud en stroom.',
    alternates: { canonical: 'https://waterfilterplatform.nl/drinkwaterfontein/contactloos' },
    openGraph: {
      title: 'Contactloze drinkwaterfontein: sensor en hygiene',
      description:
        'Bedieningstypes (sensor, voetbediening, knop), het hygienevoordeel zonder aanraking, bidon-vulpunt en aandachtspunten als sensoronderhoud en stroom of batterij.',
      url: 'https://waterfilterplatform.nl/drinkwaterfontein/contactloos',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Hoe werkt een contactloze drinkwaterfontein precies?',
    answer:
      'Een contactloze fontein gebruikt meestal een infraroodsensor: je houdt je bidon of glas onder de tuit en het water start zonder dat je een knop hoeft aan te raken. Er bestaan ook varianten met voetbediening (een pedaal) of een korte aanraakknop. Het doel is steeds hetzelfde: zo min mogelijk handcontact met gedeelde oppervlakken.',
  },
  {
    question: 'Is een contactloze drinkwaterfontein hygienischer?',
    answer:
      'Het belangrijkste voordeel is dat veel gebruikers het tappunt niet hoeven aan te raken, waardoor er minder overdracht via gedeelde knoppen of hendels is. Dat is vooral relevant bij openbaar en druk gebruik. Hygiene blijft wel afhankelijk van regelmatige reiniging van tuit en lekbak; sensorbediening vervangt het onderhoud niet.',
  },
  {
    question: 'Wat heeft een contactloze fontein nodig: stroom of batterij?',
    answer:
      'De sensor heeft voeding nodig. Veel modellen werken op netstroom, sommige op een batterij of accu. Bij een batterijmodel houd je de levensduur en vervanging in de gaten, bij netstroom is een stopcontact in de buurt nodig. Plan dit mee bij de plaatsing, naast de wateraansluiting en afwatering.',
  },
  {
    question: 'Voor welke plekken is een contactloze fontein geschikt?',
    answer:
      'Contactloze tappunten passen goed bij openbare ruimtes, scholen, sportlocaties en drukke kantoren waar veel mensen achter elkaar tappen. Een bidon-vulpunt met sensor maakt het hervullen snel en hygienisch. Voor minder druk gebruik kan een eenvoudige knop- of voetbediening voldoende zijn.',
  },
];

const bedieningList = [
  { naam: 'Sensor / infrarood', voor: 'Openbaar, druk gebruik', hygiene: 'Geen aanraking nodig', let: 'Sensoronderhoud en voeding' },
  { naam: 'Voetbediening (pedaal)', voor: 'Scholen, sportlocaties', hygiene: 'Handen vrij, geen handcontact', let: 'Mechaniek pedaal slijt' },
  { naam: 'Knop (korte aanraking)', voor: 'Rustiger kantoor of thuis', hygiene: 'Beperkt contact', let: 'Knop regelmatig reinigen' },
];

export default function DrinkwaterfonteinContactloosPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Drinkwaterfontein', url: 'https://waterfilterplatform.nl/drinkwaterfontein' },
          { name: 'Contactloos', url: 'https://waterfilterplatform.nl/drinkwaterfontein/contactloos' },
        ]}
      />
      <SchemaOrg
        schema={[
          {
            '@type': 'ItemList',
            name: 'Bedieningstypes contactloze drinkwaterfontein',
            description: 'Overzicht van bedieningstypes voor contactloze drinkwaterfonteinen met geschiktheid, hygiene en aandachtspunten.',
            numberOfItems: bedieningList.length,
            url: 'https://waterfilterplatform.nl/drinkwaterfontein/contactloos',
            itemListElement: bedieningList.map((b, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: b.naam,
              description: `Geschikt voor ${b.voor}. ${b.hygiene}. Let op: ${b.let}.`,
            })),
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/drinkwaterfontein" className="hover:text-[#005F8A]">Drinkwaterfontein</Link>
            <span className="mx-2">/</span>
            <span>Contactloos</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Contactloze drinkwaterfontein: sensor, hygiene en gebruik
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Een contactloze drinkwaterfontein laat je water tappen zonder het tappunt aan te raken,
            via sensor, infrarood of voetbediening. Dat is <strong>hygienischer</strong> en ideaal
            voor openbaar en druk gebruik, vaak met een bidon-vulpunt. Deze gids zet de
            bedieningstypes, voordelen en aandachtspunten op een rij.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/drinkwaterfontein/soorten"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Soorten drinkwaterfonteinen
            </Link>
            <Link
              href="/drinkwaterfontein/onderhoud"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Onderhoud en hygiene
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Wat is een contactloze drinkwaterfontein?"
          answer="Een contactloze drinkwaterfontein is een tappunt met sensor- of voetbediening waarbij je het water tapt zonder aanraking, wat hygienischer is en ideaal voor openbaar en druk gebruik. Vaak is er een bidon-vulpunt aanwezig. Let op sensoronderhoud en de benodigde stroom of batterij."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Bedieningstypes vergeleken</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Bediening</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Geschikt voor</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Hygiene</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Aandachtspunt</th>
                </tr>
              </thead>
              <tbody>
                {bedieningList.map(b => (
                  <tr key={b.naam} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-semibold text-gray-800">{b.naam}</td>
                    <td className="py-2.5 px-3 text-gray-700">{b.voor}</td>
                    <td className="py-2.5 px-3 text-gray-700">{b.hygiene}</td>
                    <td className="py-2.5 px-3 text-gray-700">{b.let}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Indicatieve vergelijking op basis van publieke richtinfo. Bijgewerkt mei 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hygienevoordeel: tappen zonder aanraking</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het kernvoordeel van contactloze bediening is dat gebruikers het tappunt niet hoeven aan
            te raken. Minder handcontact met gedeelde knoppen of hendels betekent minder overdracht,
            wat vooral telt bij openbaar en druk gebruik. Een bidon-vulpunt met sensor maakt het
            hervullen snel en schoon. Hygiene blijft wel afhankelijk van het regelmatig reinigen van
            tuit en lekbak; sensorbediening vervangt dat onderhoud niet. Lees meer over reiniging in{' '}
            <Link href="/drinkwaterfontein/onderhoud" className="text-[#005F8A] underline">onderhoud van een drinkwaterfontein</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderhoud, stroom en plaatsing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['Sensoronderhoud', 'Houd de sensor en tuit schoon; vuil of kalk kan de detectie verstoren en de werking onbetrouwbaar maken.'],
              ['Stroom of batterij', 'De sensor heeft voeding nodig: netstroom (stopcontact in de buurt) of een batterij of accu die je tijdig vervangt.'],
              ['Bidon-vulpunt', 'Een vulpunt met sensor is ideaal om bidons en flessen snel en hygienisch te hervullen op drukke plekken.'],
              ['Openbaar en druk gebruik', 'Robuuste, eenvoudig te reinigen uitvoeringen passen het best bij scholen, sportlocaties en drukke kantoren.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Een contactloze fontein is een van de uitvoeringen binnen het bredere aanbod: vergelijk
            alle types in{' '}
            <Link href="/drinkwaterfontein/soorten" className="text-[#005F8A] underline">soorten drinkwaterfonteinen</Link>.
            Voor zakelijke plaatsing en advies per situatie zie{' '}
            <Link href="/zakelijk" className="text-[#005F8A] underline">zakelijke wateroplossingen</Link>.
          </p>
        </section>

        <CTABanner context="zakelijk" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over contactloze drinkwaterfonteinen</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">v</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['/drinkwaterfontein/soorten', 'Soorten drinkwaterfonteinen', 'Alle types vergeleken'],
              ['/drinkwaterfontein/onderhoud', 'Onderhoud en hygiene', 'Schoon en veilig water'],
              ['/drinkwaterfontein', 'Drinkwaterfontein', 'Alles over drinkwaterfonteinen'],
              ['/zakelijk', 'Zakelijke wateroplossingen', 'Per sector en situatie'],
            ].map(([href, t, d]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{t}</p>
                <p className="text-sm text-gray-500">{d}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
