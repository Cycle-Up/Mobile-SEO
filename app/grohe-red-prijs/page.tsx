import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Grohe Red prijs 2026: kosten van kraan, filter en installatie',
    description:
      'Wat kost een Grohe Red? Indicatieve aanschafprijs van Mono en Duo, installatie, filter en stroom, plus de vergelijking met een 4-in-1 osmosekraan.',
    alternates: { canonical: 'https://waterfilterplatform.nl/grohe-red-prijs' },
    openGraph: {
      title: 'Grohe Red prijs 2026: kosten van kraan, filter en installatie',
      description:
        'Indicatief prijsoverzicht van de Grohe Red: aanschaf (Mono/Duo), installatie, filter en stroom, met een eerlijke vergelijking.',
      url: 'https://waterfilterplatform.nl/grohe-red-prijs',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat kost een Grohe Red?',
    answer:
      'De aanschaf ligt indicatief tussen de 1.200 en 2.000 euro, afhankelijk van Mono of Duo, de boilermaat (M of L) en de afwerking, exclusief installatie. De Duo met grote boiler zit aan de bovenkant van die range. Controleer actuele prijzen altijd bij de officiele verkoper.',
  },
  {
    question: 'Wat kost de installatie van een Grohe Red?',
    answer:
      'Reken voor installatie door een loodgieter indicatief op 150 tot 400 euro, afhankelijk van of er al een kraangat en de juiste aansluitingen zijn en of er ruimte en een stopcontact is voor de boiler onder het aanrecht. Vraag vooraf een offerte op.',
  },
  {
    question: 'Wat zijn de jaarlijkse kosten van een Grohe Red?',
    answer:
      'De lopende kosten bestaan uit elektriciteit om de boiler op temperatuur te houden (indicatief enkele tientallen euro per jaar) en een filterpatroon dat de boiler tegen kalk beschermt. Hoe vaak je het filter vervangt, hangt af van je waterhardheid en verbruik.',
  },
  {
    question: 'Is een Grohe Red duur vergeleken met alternatieven?',
    answer:
      'De Grohe Red zit in het premium segment. Een 4-in-1 kraan met ingebouwd osmosefilter levert kokend, koud gefilterd, warm en bruisend water indicatief voor 699 tot 899 euro plus 100 tot 200 euro installatie - vaak onder een vergelijkbare Grohe Red-opstelling, en met een volwaardig osmosefilter erbij.',
  },
  {
    question: 'Is de Grohe Red de prijs waard?',
    answer:
      'Voor wie kokend water uit een premium Grohe-kraan met strak design wil, kan de Grohe Red de investering waard zijn. Houd rekening met installatie, stroom en filter. Wil je ook gefilterd of bruisend water of een lagere totaalprijs, dan biedt een 4-in-1 osmosekraan meer functies voor minder geld.',
  },
];

const kostenRows = [
  ['Aanschaf Grohe Red Mono', 'EUR 1.200 - 1.600', 'Kokend + koud; boilermaat M of L; exclusief installatie.'],
  ['Aanschaf Grohe Red Duo', 'EUR 1.500 - 2.000', 'Inclusief volledige mengkraanfunctie; exclusief installatie.'],
  ['Installatie (loodgieter)', 'EUR 150 - 400', 'Eenmalig; ruimte + stopcontact voor boiler nodig.'],
  ['Elektriciteit (boiler)', 'Enkele tientallen euro/jaar', 'Afhankelijk van model, gebruik en stroomtarief.'],
  ['Filterpatroon', 'Terugkerend', 'Beschermt de boiler tegen kalk; frequentie hangt af van hardheid.'],
];

export default function GroheRedPrijsPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Grohe Red prijs 2026: kosten van kraan, filter en installatie',
          description:
            'Indicatief prijsoverzicht van de Grohe Red: aanschaf (Mono/Duo), installatie, filter en stroom, met vergelijking.',
          datePublished: '2026-05-30',
          dateModified: '2026-05-30',
          url: 'https://waterfilterplatform.nl/grohe-red-prijs',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Grohe Red', url: 'https://waterfilterplatform.nl/grohe-red' },
          { name: 'Prijs', url: 'https://waterfilterplatform.nl/grohe-red-prijs' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/grohe-red" className="hover:text-[#005F8A]">Grohe Red</Link>
            <span className="mx-2">/</span>
            <span>Prijs</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Grohe Red prijs: wat kost het in 2026?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Wat kost een <strong>Grohe Red</strong> echt? Hieronder zetten we de indicatieve aanschafprijs
            van Mono en Duo, de installatie en de lopende kosten voor stroom en filter op een rij -
            inclusief een eerlijke vergelijking met een 4-in-1 osmosekraan. Prijzen zijn indicatief;
            controleer actuele bedragen bij de verkoper.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/grohe-red"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Over Grohe Red
            </Link>
            <Link
              href="/grohe-red-filter"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Grohe Red filter
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-30" sources={['Fabrikant / verkoper (richtprijzen)', 'RIVM', 'Vewin']} />
        <AuthorBox datePublished="2026-05-30" />

        <QuickAnswer
          question="Wat kost een Grohe Red?"
          answer="De aanschaf ligt indicatief tussen 1.200 en 2.000 euro: Grohe Red Mono aan de onderkant, Duo met grote boiler aan de bovenkant, exclusief installatie (circa 150 tot 400 euro). Daar komen lopende kosten bij voor elektriciteit (boiler op temperatuur) en een filterpatroon tegen kalk. Een 4-in-1 osmosekraan biedt kokend, gefilterd en bruisend water vaak voor een lagere totaalprijs. Bedragen zijn indicatief; controleer actuele prijzen bij de verkoper."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kostenoverzicht Grohe Red</h2>
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Let op de lopende kosten</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Naast de aanschaf bepalen vooral stroom en het filterpatroon de jaarlijkse kosten. In een
            hard-watergebied vervang je het filter vaker en is ontkalken belangrijker. Reken die kosten mee
            in je totale plaatje. Meer hierover lees je op de pagina over het{' '}
            <Link href="/grohe-red-filter" className="text-[#005F8A] underline">Grohe Red filter</Link>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Een 4-in-1 kraan met osmosefilter heeft ook filters, maar biedt daarnaast gefilterd en bruisend
            water. De volledige afweging staat op{' '}
            <Link href="/grohe-red-alternatief" className="text-[#005F8A] underline">Grohe Red alternatief</Link>.
          </p>
        </section>

        <CTABanner context="kokend" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over de Grohe Red prijs</h2>
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
              ['/grohe-red', 'Over Grohe Red', 'Werking, Mono vs Duo en filter'],
              ['/grohe-red-filter', 'Grohe Red filter', 'Wanneer vervangen en wat het kost'],
              ['/grohe-red-alternatief', 'Grohe Red alternatief', 'Meer functies voor minder geld?'],
              ['/kokend-water-kraan/prijs', 'Kokend water kraan prijs', 'Prijzen van de categorie'],
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
