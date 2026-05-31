import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Grohe Red vs Grohe Blue: kokend of gefilterd/bruisend? (2026)',
    description:
      'Grohe Red of Grohe Blue? De Red levert kokend water, de Blue gefilterd, gekoeld en bruisend. Vergelijk functies, filter, prijs en wanneer wat past.',
    alternates: { canonical: 'https://waterfilterplatform.nl/vergelijken/grohe-red-vs-grohe-blue' },
    openGraph: {
      title: 'Grohe Red vs Grohe Blue - kokend versus gefilterd/bruisend (2026)',
      description:
        'Een eerlijke vergelijking van Grohe Red (kokend) en Grohe Blue (gefilterd/gekoeld/bruisend), met het 4-in-1 alternatief dat beide combineert.',
      url: 'https://waterfilterplatform.nl/vergelijken/grohe-red-vs-grohe-blue',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Grohe Red of Grohe Blue - wat is het verschil?',
    answer:
      'Ze lossen verschillende behoeften op binnen dezelfde Grohe-familie. De Grohe Red levert direct kokend water (circa 100 graden) uit een boiler. De Grohe Blue levert juist koud, gefilterd en (in de Home-uitvoering) bruisend water via een koeler, filter en CO2. Red = heet, Blue = koud/gefilterd/bruisend.',
  },
  {
    question: 'Kan een Grohe Red ook bruisend of gefilterd water maken?',
    answer:
      'Nee. De Grohe Red richt zich op kokend water; het filterpatroon beschermt vooral de boiler tegen kalk en is geen osmose. Voor gekoeld, gefilterd of bruisend water is de Grohe Blue bedoeld, of een 4-in-1 osmosekraan die kokend en bruisend combineert.',
  },
  {
    question: 'Levert de Grohe Blue ook kokend water?',
    answer:
      'Nee. De Grohe Blue levert gefilterd, gekoeld en bruisend water, geen kokend water. Voor kokend water is er de Grohe Red. Wil je beide functies in een kraan, dan is een 4-in-1 osmosekraan de logische keuze.',
  },
  {
    question: 'Wat kost een Grohe Red vergeleken met een Grohe Blue?',
    answer:
      'Beide zitten in het premium segment. Een Grohe Red ligt indicatief tussen 1.200 en 2.000 euro; een Grohe Blue tussen 800 en 1.800 euro afhankelijk van Pure of Home. Bij beide komen installatie en lopende kosten: bij de Red vooral stroom en een filter, bij de Blue filters en CO2. Controleer actuele prijzen bij de verkoper.',
  },
  {
    question: 'Is er een kraan die kokend en bruisend water combineert?',
    answer:
      'Ja. Een 4-in-1 kraan met ingebouwd osmosefilter levert kokend, koud gefilterd, warm en bruisend water uit een kraan, vaak voor een lagere totaalprijs dan een Grohe Red en Grohe Blue afzonderlijk. Interessant als je niet wilt kiezen tussen heet en bruisend/gefilterd.',
  },
];

const vergelijking = [
  {
    naam: '4-in-1 osmosekraan',
    type: 'Kokend + gefilterd + bruisend',
    kokend: 'Ja',
    bruisend: 'Ja',
    filter: 'Osmose (breed)',
    highlight: true,
    notitie: 'Combineert beide werelden, vaak voor de laagste totaalprijs.',
  },
  {
    naam: 'Grohe Red',
    type: 'Kokend water kraan',
    kokend: 'Ja (100 graden)',
    bruisend: 'Nee',
    filter: 'Kalkfilter (boiler)',
    highlight: false,
    notitie: 'Voor wie vooral direct kokend water wil, premium design.',
  },
  {
    naam: 'Grohe Blue',
    type: 'Gefilterd/gekoeld/bruisend',
    kokend: 'Nee',
    bruisend: 'Ja (Home)',
    filter: 'Koolstoffilter',
    highlight: false,
    notitie: 'Voor wie koud, gefilterd en bruisend water uit de kraan wil.',
  },
];

export default function GroheRedVsGroheBluePage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Grohe Red vs Grohe Blue: kokend of gefilterd/bruisend?',
          description:
            'Een eerlijke vergelijking van Grohe Red (kokend) en Grohe Blue (gefilterd/gekoeld/bruisend), met een 4-in-1 osmosekraan als alternatief dat beide combineert.',
          datePublished: '2026-05-30',
          dateModified: '2026-05-30',
          url: 'https://waterfilterplatform.nl/vergelijken/grohe-red-vs-grohe-blue',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/vergelijken' },
          { name: 'Grohe Red vs Grohe Blue', url: 'https://waterfilterplatform.nl/vergelijken/grohe-red-vs-grohe-blue' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:text-[#005F8A]">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Grohe Red vs Grohe Blue</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Grohe Red vs Grohe Blue: kokend of gefilterd/bruisend?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>Grohe Red</strong> en <strong>Grohe Blue</strong> komen uit dezelfde familie, maar
            doen iets compleet anders: de Red levert kokend water, de Blue gefilterd, gekoeld en bruisend
            water. We vergelijken ze eerlijk - en laten zien wanneer een 4-in-1 kraan beide combineert.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/grohe-red"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Over Grohe Red
            </Link>
            <Link
              href="/grohe-blue"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Over Grohe Blue
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-30" sources={['Fabrikant / verkoper (richtprijzen)', 'RIVM', 'Vewin']} />
        <AuthorBox datePublished="2026-05-30" />

        <QuickAnswer
          question="Grohe Red of Grohe Blue?"
          answer="Kies de Grohe Red als je direct kokend water wilt voor thee, koffie en koken. Kies de Grohe Blue als je koud, gefilterd en (Home) bruisend water uit de kraan wilt; kokend water levert die niet. Ze overlappen dus nauwelijks: Red is heet, Blue is koud/gefilterd/bruisend. Wil je beide, dan combineert een 4-in-1 osmosekraan kokend, gefilterd en bruisend water in een kraan, vaak voor een lagere totaalprijs. Prijzen indicatief; controleer bij de verkoper."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Grohe Red en Grohe Blue naast elkaar</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Type</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Kokend</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Bruisend</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Filter</th>
                </tr>
              </thead>
              <tbody>
                {vergelijking.map(a => (
                  <tr key={a.naam} className={`border-b border-gray-100 ${a.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">
                      {a.naam}
                      {a.highlight && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Doet beide</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-700">{a.type}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.kokend}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.bruisend}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.filter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Prijzen en specificaties indicatief op basis van publieke richtprijzen. Bijgewerkt mei 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke past bij jou?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              ['Kies Grohe Red als...', 'Direct kokend water je hoofddoel is voor thee, koffie en koken.'],
              ['Kies Grohe Blue als...', 'Je vooral koud, gefilterd en bruisend water uit de kraan wilt.'],
              ['Twijfel je tussen heet en bruisend?', 'Dan kies je eigenlijk tussen twee functies - een 4-in-1 osmosekraan biedt ze allebei.'],
              ['Wil je bredere filtering?', 'Beide gebruiken geen osmose; een 4-in-1 osmosekraan filtert breder (lood, PFAS).'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer lezen? Bekijk{' '}
            <Link href="/grohe-red-alternatief" className="text-[#005F8A] underline">Grohe Red alternatief</Link>,{' '}
            <Link href="/grohe-blue-alternatief" className="text-[#005F8A] underline">Grohe Blue alternatief</Link>{' '}
            of de{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] underline">4-in-1 kraan</Link>.
          </p>
        </section>

        <CTABanner context="kokend" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Grohe Red vs Grohe Blue</h2>
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
              ['/vergelijken/quooker-vs-grohe-red', 'Quooker vs Grohe Red', 'Twee kokend-water kranen'],
              ['/vergelijken/selsiuz-vs-grohe-blue', 'Selsiuz vs Grohe Blue', 'Kokend versus gefilterd/bruisend'],
              ['/grohe-red', 'Over Grohe Red', 'Werking, modellen en prijs'],
              ['/4-in-1-kraan', '4-in-1 kraan', 'Kokend, gefilterd en bruisend uit een kraan'],
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
