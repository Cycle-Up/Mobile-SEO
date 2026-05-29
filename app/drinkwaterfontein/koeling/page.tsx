import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export function generateMetadata(): Metadata {
  return {
    title: 'Gekoelde drinkwaterfontein: koeltechniek en verbruik',
    description:
      'Hoe werkt koeling bij een drinkwaterfontein? Doorstroomkoeling vs voorraadkoeling vergeleken op capaciteit, energieverbruik en hygiene, met de juiste temperatuurinstelling.',
    alternates: { canonical: 'https://waterfilterplatform.nl/drinkwaterfontein/koeling' },
    openGraph: {
      title: 'Gekoelde drinkwaterfontein: koeltechniek en verbruik',
      description:
        'Doorstroomkoeling, voorraadkoeling of geen koeling: capaciteit, energieverbruik en hygiene van een gekoelde drinkwaterfontein op een rij.',
      url: 'https://waterfilterplatform.nl/drinkwaterfontein/koeling',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Hoe koud moet drinkwater uit een fontein zijn?',
    answer:
      'Een instelling van ongeveer 8 tot 12 graden Celsius volstaat voor de meeste situaties: koel genoeg om aangenaam te drinken zonder onnodig veel energie te verbruiken. Kouder instellen verhoogt het energieverbruik en levert weinig extra drinkcomfort op. Stel de temperatuur in op het verwachte gebruik en de omgevingstemperatuur.',
  },
  {
    question: 'Doorstroomkoeling of voorraadkoeling: wat is beter?',
    answer:
      'Doorstroomkoeling (instant) koelt water direct on-demand en heeft geen tank, wat hygienischer is en minder ruimte vraagt, maar de koude capaciteit per uur is beperkt. Voorraadkoeling houdt een tank continu koud en kan korte piekvraag beter aan, maar verbruikt ook in rust energie en vraagt extra aandacht voor hygiene van de tank. Bij hoge piekafname is voorraadkoeling prettiger, bij continu gematigd gebruik is doorstroomkoeling vaak efficienter.',
  },
  {
    question: 'Is een gekoelde drinkwaterfontein gevoelig voor legionella?',
    answer:
      'Koeling zelf verkleint het risico niet automatisch. Stilstaand water in een koeltank of leiding kan bij temperaturen rond de 20 tot 45 graden bacteriegroei (waaronder legionella) bevorderen. Goed gekoeld water onder de 20 graden en regelmatig doorspoelen, filterwissels en reiniging volgens schema houden het risico beheersbaar. Lees meer bij onderhoud.',
  },
  {
    question: 'Verhoogt koeling echt het waterverbruik?',
    answer:
      'Ja, in de praktijk drinken mensen meer water als het koel wordt aangeboden, zeker in warme ruimtes en bij zwaar werk. Koeling maakt de fontein een aantrekkelijker alternatief voor frisdrank en flessenwater. Daar staat tegenover dat koeling energie kost en hygienisch onderhoud vraagt, dus weeg het verwachte extra gebruik af tegen de kosten.',
  },
];

const koelList = [
  { naam: 'Doorstroomkoeling (instant)', capaciteit: 'Beperkt per uur', energie: 'Alleen bij tappen', hygiene: 'Geen tank, lager risico' },
  { naam: 'Voorraadkoeling (tank)', capaciteit: 'Hoog, vangt pieken op', energie: 'Ook in rust', hygiene: 'Tank reinigen, doorspoelen' },
  { naam: 'Geen koeling', capaciteit: 'Onbeperkt (leidingtemp)', energie: 'Geen', hygiene: 'Eenvoudig, geen koeldeel' },
];

export default function DrinkwaterfonteinKoelingPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Drinkwaterfontein', url: 'https://waterfilterplatform.nl/drinkwaterfontein' },
          { name: 'Koeling', url: 'https://waterfilterplatform.nl/drinkwaterfontein/koeling' },
        ]}
      />
      <SchemaOrg
        schema={[
          {
            '@type': 'ItemList',
            name: 'Koeltechnieken drinkwaterfontein',
            description: 'Overzicht van koeltechnieken voor drinkwaterfonteinen met capaciteit, energieverbruik en hygiene.',
            numberOfItems: koelList.length,
            url: 'https://waterfilterplatform.nl/drinkwaterfontein/koeling',
            itemListElement: koelList.map((k, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: k.naam,
              description: `Capaciteit: ${k.capaciteit}. Energie: ${k.energie}. Hygiene: ${k.hygiene}.`,
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
            <span>Koeling</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Gekoelde drinkwaterfontein: koeltechniek en verbruik
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Koeling maakt een drinkwaterfontein aantrekkelijker en verhoogt het gebruik, maar kost
            energie en vraagt hygienisch onderhoud. Deze gids legt het verschil uit tussen
            doorstroomkoeling en voorraadkoeling, en welke{' '}
            <strong>temperatuurinstelling</strong> verstandig is.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/drinkwaterfontein/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Drinkwaterfontein kopen
            </Link>
            <Link
              href="/drinkwaterfontein/soorten"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Soorten drinkwaterfonteinen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        <QuickAnswer
          question="Hoe werkt koeling bij een drinkwaterfontein?"
          answer="Doorstroomkoeling koelt water direct on-demand wanneer je tapt, terwijl voorraadkoeling een tank continu koud houdt zodat er ook bij piekvraag koud water beschikbaar is. Koeling verhoogt het gebruik (mensen drinken meer koud water) maar kost energie en vraagt hygienisch onderhoud zoals doorspoelen en reinigen. Stel de temperatuur niet te koud in: ongeveer 8 tot 12 graden volstaat."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Koeltechnieken vergeleken</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Koeltype</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Capaciteit</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Energieverbruik</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Hygiene</th>
                </tr>
              </thead>
              <tbody>
                {koelList.map(k => (
                  <tr key={k.naam} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-semibold text-gray-800">{k.naam}</td>
                    <td className="py-2.5 px-3 text-gray-700">{k.capaciteit}</td>
                    <td className="py-2.5 px-3 text-gray-700">{k.energie}</td>
                    <td className="py-2.5 px-3 text-gray-700">{k.hygiene}</td>
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom koeling het gebruik verhoogt</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Koel water wordt eerder en vaker gedronken dan lauw leidingwater, zeker in warme ruimtes
            en bij fysiek werk. Een gekoelde fontein wordt zo een aantrekkelijk alternatief voor
            frisdrank en flessenwater, wat goed is voor hydratatie en afvalvermindering. Dat hogere
            gebruik gaat wel gepaard met energieverbruik en extra onderhoud, dus weeg het verwachte
            voordeel af tegen de kosten. Zet je een fontein vooral neer voor flink gebruik op de
            werkplek, lees dan ook{' '}
            <Link href="/drinkwaterfontein/soorten" className="text-[#005F8A] underline">soorten drinkwaterfonteinen</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Energie, hygiene en temperatuurinstelling</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['Energieverbruik', 'Voorraadkoeling houdt een tank ook in rust koud en verbruikt daardoor continu energie; doorstroomkoeling koelt alleen tijdens tappen.'],
              ['Temperatuurinstelling', 'Ongeveer 8 tot 12 graden volstaat. Kouder instellen kost meer energie en levert weinig extra drinkcomfort op.'],
              ['Legionella en hygiene', 'Stilstaand water rond 20 tot 45 graden bevordert bacteriegroei; koel onder 20 graden, spoel door en reinig volgens schema.'],
              ['Onderhoud koeldeel', 'Filterwissels, reiniging van tank en tappunt en periodiek doorspoelen houden de waterkwaliteit op peil.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Hygiene en periodiek onderhoud zijn bij koeling extra belangrijk: lees{' '}
            <Link href="/drinkwaterfontein/onderhoud" className="text-[#005F8A] underline">onderhoud van een drinkwaterfontein</Link> en
            bekijk de aanschafpunten bij{' '}
            <Link href="/drinkwaterfontein/kopen" className="text-[#005F8A] underline">drinkwaterfontein kopen</Link>.
          </p>
        </section>

        <CTABanner context="zakelijk" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over gekoelde drinkwaterfonteinen</h2>
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
              ['/drinkwaterfontein', 'Drinkwaterfontein', 'Alles over drinkwaterfonteinen'],
              ['/drinkwaterfontein/kopen', 'Drinkwaterfontein kopen', 'Waar let je op bij aanschaf'],
              ['/drinkwaterfontein/kantoor', 'Voor kantoor', 'Fontein op de werkplek'],
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
