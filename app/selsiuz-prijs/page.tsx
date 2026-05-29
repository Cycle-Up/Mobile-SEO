import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Selsiuz prijs 2026: wat kost een Selsiuz incl. onderhoud?',
    description:
      'Wat kost een Selsiuz kokend water kraan? Indicatieve aanschafprijs, installatie, jaarlijkse kosten en de vergelijking met een 4-in-1 osmosekraan in 2026.',
    alternates: { canonical: 'https://waterfilterplatform.nl/selsiuz-prijs' },
    openGraph: {
      title: 'Selsiuz prijs 2026: wat kost een Selsiuz incl. onderhoud?',
      description:
        'Indicatief prijsoverzicht van de Selsiuz: aanschaf, installatie en jaarlijkse kosten, plus een eerlijke vergelijking met alternatieven.',
      url: 'https://waterfilterplatform.nl/selsiuz-prijs',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat kost een Selsiuz kokend water kraan?',
    answer:
      'Een Selsiuz set met combi-boiler kost indicatief tussen de 1.000 en 1.700 euro, afhankelijk van het model, de afwerking en de boilercapaciteit. Dit is de aanschafprijs exclusief installatie. Omdat prijzen per jaar en per verkoper wisselen, controleer je het exacte bedrag altijd bij de officiele verkoper.',
  },
  {
    question: 'Wat kost de installatie van een Selsiuz?',
    answer:
      'Reken voor installatie door een loodgieter indicatief op 150 tot 400 euro, afhankelijk van of er al een kraangat en de juiste aansluitingen aanwezig zijn. Is er aanpassing van het leidingwerk nodig, dan ligt het bedrag hoger. Vraag altijd vooraf een offerte op.',
  },
  {
    question: 'Wat zijn de jaarlijkse kosten van een Selsiuz?',
    answer:
      'De lopende kosten bestaan vooral uit elektriciteit om de boiler op temperatuur te houden (indicatief enkele tientallen euro per jaar) en periodiek onderhoud zoals ontkalken, zeker in een hard-watergebied. Een Selsiuz heeft geen standaard osmosefilter, dus filterkosten zoals bij osmose zijn er niet; wel kan kalk de levensduur beinvloeden.',
  },
  {
    question: 'Is een Selsiuz goedkoper dan een Quooker?',
    answer:
      'Vaak ligt de Selsiuz iets onder een vergelijkbare Quooker-opstelling, maar beide zitten in het premium segment. Geen van beide bevat standaard een osmosefilter. Een 4-in-1 kraan met ingebouwd osmosefilter levert kokend, koud gefilterd, warm en bruisend water vaak voor een lagere totaalprijs. De directe merkvergelijking lees je op Quooker vs Selsiuz.',
  },
  {
    question: 'Is een Selsiuz de prijs waard?',
    answer:
      'Dat hangt af van wat je zoekt. Voor wie design, een gevestigd Nederlands merk en een betrouwbare kokendwaterfunctie belangrijk vindt, is een Selsiuz de investering vaak waard. Wil je ook gefilterd of bruisend water of de laagste totaalprijs, dan biedt een 4-in-1 osmosekraan meer functies voor minder geld.',
  },
];

const kostenRows = [
  ['Aanschaf (set met combi-boiler)', 'EUR 1.000 - 1.700', 'Eenmalig, exclusief installatie; varieert per model en afwerking.'],
  ['Installatie (loodgieter)', 'EUR 150 - 400', 'Eenmalig; lager als kraangat en aansluitingen al kloppen.'],
  ['Elektriciteit (boiler stand-by)', 'Enkele tientallen euro/jaar', 'Afhankelijk van model, gebruik en stroomtarief.'],
  ['Onderhoud / ontkalken', 'Indicatief, varieert', 'Vooral in hard-watergebied; verlengt de levensduur.'],
];

export default function SelsiuzPrijsPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Selsiuz prijs 2026: wat kost een Selsiuz incl. onderhoud?',
          description:
            'Indicatief prijsoverzicht van de Selsiuz kokend water kraan: aanschaf, installatie en jaarlijkse kosten, met vergelijking.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/selsiuz-prijs',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Selsiuz', url: 'https://waterfilterplatform.nl/selsiuz' },
          { name: 'Prijs', url: 'https://waterfilterplatform.nl/selsiuz-prijs' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/selsiuz" className="hover:text-[#005F8A]">Selsiuz</Link>
            <span className="mx-2">/</span>
            <span>Prijs</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Selsiuz prijs: wat kost een Selsiuz in 2026?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Wat kost een <strong>Selsiuz</strong> kokend water kraan nu echt? Hieronder zetten we de
            indicatieve aanschafprijs, installatiekosten en jaarlijkse kosten op een rij - inclusief een
            eerlijke vergelijking met een 4-in-1 osmosekraan. Prijzen zijn indicatief; controleer actuele
            bedragen bij de verkoper.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/selsiuz"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Over Selsiuz
            </Link>
            <Link
              href="/selsiuz-alternatief"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Selsiuz alternatief
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['Fabrikant / verkoper (richtprijzen)', 'RIVM', 'Vewin']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Wat kost een Selsiuz?"
          answer="Een Selsiuz set met combi-boiler kost indicatief 1.000 tot 1.700 euro exclusief installatie (circa 150 tot 400 euro). Daar komen jaarlijkse kosten bij voor elektriciteit om de boiler op temperatuur te houden en periodiek ontkalken, vooral in een hard-watergebied. Een Selsiuz heeft geen standaard osmosefilter. Een 4-in-1 osmosekraan biedt kokend, gefilterd en bruisend water vaak voor een lagere totaalprijs. Bedragen zijn indicatief; controleer actuele prijzen bij de verkoper."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kostenoverzicht Selsiuz</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-3">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Kostenpost</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Indicatie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Toelichting</th>
                </tr>
              </thead>
              <tbody>
                {kostenRows.map(([k, v, t]) => (
                  <tr key={k} className="border-b border-gray-100 align-top">
                    <td className="py-2.5 px-3 font-semibold text-gray-800">{k}</td>
                    <td className="py-2.5 px-3 text-gray-700">{v}</td>
                    <td className="py-2.5 px-3 text-gray-600">{t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">
            Prijzen indicatief op basis van publieke richtprijzen. Bijgewerkt mei 2026. Controleer actuele
            bedragen bij de officiele verkoper.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Selsiuz versus een 4-in-1 osmosekraan qua kosten</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een complete Selsiuz-opstelling komt all-in (inclusief installatie) al snel boven de 1.200 euro
            uit. Een 4-in-1 kraan met ingebouwd osmosefilter kost indicatief 699 tot 899 euro plus 100 tot
            200 euro installatie - en levert daarbij ook puur gefilterd en bruisend water. Voor wie meer wil
            dan alleen kokend water is dat vaak een gunstiger verhouding tussen prijs en functies.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Lees de volledige afweging op{' '}
            <Link href="/selsiuz-alternatief" className="text-[#005F8A] underline">Selsiuz alternatief</Link>{' '}
            of vergelijk merken direct via{' '}
            <Link href="/vergelijken/quooker-vs-selsiuz" className="text-[#005F8A] underline">Quooker vs Selsiuz</Link>.
          </p>
        </section>

        <CTABanner context="kokend" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over de Selsiuz prijs</h2>
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
              ['/selsiuz', 'Over Selsiuz', 'Werking, modellen en onderhoud'],
              ['/selsiuz-onderhoud', 'Selsiuz onderhoud', 'Ontkalken, filter en levensduur'],
              ['/selsiuz-alternatief', 'Selsiuz alternatief', 'Meer functies voor minder geld?'],
              ['/kokend-water-kraan', 'Kokend water kraan', 'Complete gids over de categorie'],
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
