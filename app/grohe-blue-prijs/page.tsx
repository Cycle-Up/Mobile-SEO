import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Grohe Blue prijs 2026: kosten van kraan, filters en CO2',
    description:
      'Wat kost een Grohe Blue? Indicatieve aanschafprijs van Pure en Home, installatie, filterpatronen, CO2-cilinders en de vergelijking met een 4-in-1 osmosekraan.',
    alternates: { canonical: 'https://waterfilterplatform.nl/grohe-blue-prijs' },
    openGraph: {
      title: 'Grohe Blue prijs 2026: kosten van kraan, filters en CO2',
      description:
        'Indicatief prijsoverzicht van de Grohe Blue: aanschaf, installatie, filters en CO2, plus een eerlijke vergelijking met alternatieven.',
      url: 'https://waterfilterplatform.nl/grohe-blue-prijs',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat kost een Grohe Blue?',
    answer:
      'De aanschaf ligt indicatief tussen de 800 en 1.800 euro, afhankelijk van Pure of Home en de afwerking, exclusief installatie. Grohe Blue Pure (alleen gefilterd) zit aan de onderkant, Grohe Blue Home (gefilterd, gekoeld en bruisend) aan de bovenkant. Controleer actuele prijzen altijd bij de officiele verkoper.',
  },
  {
    question: 'Wat kosten de filters en CO2 van een Grohe Blue?',
    answer:
      'Reken op terugkerende kosten voor filterpatronen en, bij de Home-uitvoering, CO2-cilinders voor bruisend water. Hoe vaak je een filter vervangt, hangt af van je waterhardheid en verbruik; CO2 vervang je naar gelang hoeveel bruisend water je tapt. Deze lopende kosten zijn een belangrijk verschil met een kraan zonder verbruiksartikelen.',
  },
  {
    question: 'Wat kost de installatie van een Grohe Blue?',
    answer:
      'Reken voor installatie door een loodgieter indicatief op 150 tot 400 euro, afhankelijk van of er al een kraangat en de juiste aansluitingen zijn en of er ruimte is voor de koeler onder het aanrecht. Vraag vooraf een offerte op.',
  },
  {
    question: 'Is een Grohe Blue duur vergeleken met alternatieven?',
    answer:
      'De Grohe Blue zit in het premium segment, zeker de Home met koeling en bruisend water, plus de lopende kosten van filters en CO2. Een 4-in-1 kraan met ingebouwd osmosefilter levert kokend, koud gefilterd, warm en bruisend water indicatief voor 699 tot 899 euro plus installatie. Voor wie meer functies wil, is dat vaak een gunstiger verhouding tussen prijs en functies.',
  },
  {
    question: 'Is een Grohe Blue de prijs waard?',
    answer:
      'Voor wie gekoeld en bruisend gefilterd water uit een strakke kraan wil, kan de Grohe Blue de investering waard zijn. Houd wel rekening met de terugkerende kosten van filters en CO2. Wil je ook kokend water, een bredere filtering of een lagere totaalprijs, dan biedt een 4-in-1 osmosekraan meer functies voor minder geld.',
  },
];

const kostenRows = [
  ['Aanschaf Grohe Blue Pure', 'EUR 800 - 1.200', 'Gefilterd water; instapsegment, exclusief installatie.'],
  ['Aanschaf Grohe Blue Home', 'EUR 1.200 - 1.800', 'Gefilterd, gekoeld en bruisend; exclusief installatie.'],
  ['Installatie (loodgieter)', 'EUR 150 - 400', 'Eenmalig; ruimte voor koeler onder aanrecht nodig.'],
  ['Filterpatronen', 'Terugkerend', 'Frequentie hangt af van waterhardheid en verbruik.'],
  ['CO2-cilinders (Home)', 'Terugkerend', 'Naar gelang hoeveel bruisend water je tapt.'],
];

export default function GroheBluePrijsPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Grohe Blue prijs 2026: kosten van kraan, filters en CO2',
          description:
            'Indicatief prijsoverzicht van de Grohe Blue: aanschaf, installatie, filters en CO2, met vergelijking.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/grohe-blue-prijs',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Grohe Blue', url: 'https://waterfilterplatform.nl/grohe-blue' },
          { name: 'Prijs', url: 'https://waterfilterplatform.nl/grohe-blue-prijs' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/grohe-blue" className="hover:text-[#005F8A]">Grohe Blue</Link>
            <span className="mx-2">/</span>
            <span>Prijs</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Grohe Blue prijs: wat kost het in 2026?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Wat kost een <strong>Grohe Blue</strong> echt? Hieronder zetten we de indicatieve aanschafprijs
            van Pure en Home, de installatie en de terugkerende kosten van filters en CO2 op een rij -
            inclusief een eerlijke vergelijking met een 4-in-1 osmosekraan. Prijzen zijn indicatief;
            controleer actuele bedragen bij de verkoper.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/grohe-blue"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Over Grohe Blue
            </Link>
            <Link
              href="/grohe-blue-filter"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Grohe Blue filter
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['Fabrikant / verkoper (richtprijzen)', 'RIVM', 'Vewin']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Wat kost een Grohe Blue?"
          answer="De aanschaf ligt indicatief tussen 800 en 1.800 euro: Grohe Blue Pure (gefilterd) aan de onderkant, Grohe Blue Home (gefilterd, gekoeld en bruisend) aan de bovenkant, exclusief installatie (circa 150 tot 400 euro). Daar komen terugkerende kosten bij voor filterpatronen en, bij Home, CO2-cilinders. Een 4-in-1 osmosekraan biedt kokend, gefilterd en bruisend water vaak voor een lagere totaalprijs. Bedragen zijn indicatief; controleer actuele prijzen bij de verkoper."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kostenoverzicht Grohe Blue</h2>
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
            Het grootste verschil met een gewone kraan zijn de terugkerende kosten: filterpatronen en, bij
            de Home, CO2-cilinders. Hoe vaak je een filter vervangt, hangt af van je waterhardheid en
            verbruik - in een hard-watergebied vaker. Reken die kosten mee in je totale plaatje. Meer
            hierover lees je op de pagina over de{' '}
            <Link href="/grohe-blue-filter" className="text-[#005F8A] underline">Grohe Blue filter</Link>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Een 4-in-1 kraan met ingebouwd osmosefilter heeft ook filters, maar geen losse CO2 nodig voor
            bruisend water en biedt daarnaast kokend water. De volledige afweging staat op{' '}
            <Link href="/grohe-blue-alternatief" className="text-[#005F8A] underline">Grohe Blue alternatief</Link>.
          </p>
        </section>

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over de Grohe Blue prijs</h2>
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
              ['/grohe-blue', 'Over Grohe Blue', 'Werking, modellen en filters'],
              ['/grohe-blue-filter', 'Grohe Blue filter', 'Wanneer vervangen en wat het kost'],
              ['/grohe-blue-alternatief', 'Grohe Blue alternatief', 'Meer functies voor minder geld?'],
              ['/bruisend-water', 'Bruisend water', 'Opties voor bruisend water thuis'],
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
