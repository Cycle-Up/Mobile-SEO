import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Selsiuz vs Grohe Blue: kokend of bruisend water? (2026)',
    description:
      'Selsiuz of Grohe Blue? De een levert kokend water, de ander gefilterd, gekoeld en bruisend. Vergelijk functies, prijs en onderhoud - en wanneer een 4-in-1 beide doet.',
    alternates: { canonical: 'https://waterfilterplatform.nl/vergelijken/selsiuz-vs-grohe-blue' },
    openGraph: {
      title: 'Selsiuz vs Grohe Blue - kokend of bruisend water (2026)',
      description:
        'Twee verschillende behoeften: Selsiuz levert kokend water, Grohe Blue gefilterd, gekoeld en bruisend. Een eerlijke vergelijking plus het 4-in-1 alternatief.',
      url: 'https://waterfilterplatform.nl/vergelijken/selsiuz-vs-grohe-blue',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Selsiuz of Grohe Blue - wat is het verschil?',
    answer:
      'Ze lossen verschillende behoeften op. De Selsiuz is een kokend water kraan: direct 100 graden water voor thee, koffie en koken. De Grohe Blue richt zich juist op koud, gefilterd en (in de Home-uitvoering) bruisend water. De keuze hangt dus af van wat je vooral wilt: heet water of gekoeld bruisend gefilterd water. Geen van beide bevat standaard een volledig osmosefilter.',
  },
  {
    question: 'Kan ik met een Selsiuz ook bruisend water maken?',
    answer:
      'Nee, bruisend water is geen standaardfunctie van de Selsiuz; die richt zich op kokend, koud en warm water. Wil je bruisend water, dan is de Grohe Blue Home daarvoor gemaakt, of een 4-in-1 osmosekraan die kokend en bruisend combineert.',
  },
  {
    question: 'Levert de Grohe Blue ook kokend water?',
    answer:
      'Nee. De Grohe Blue levert gefilterd, gekoeld en bruisend water, geen kokend water. Voor kokend water is er de Grohe Red of een kokend water kraan zoals de Selsiuz. Wil je beide in een kraan, dan is een 4-in-1 osmosekraan de logische keuze.',
  },
  {
    question: 'Wat kost een Selsiuz vergeleken met een Grohe Blue?',
    answer:
      'Beide zitten in het premium segment. Een Selsiuz set kost indicatief 1.000 tot 1.700 euro; een Grohe Blue indicatief 800 tot 1.800 euro afhankelijk van Pure of Home. Bij de Grohe Blue komen terugkerende kosten voor filters en CO2; bij de Selsiuz vooral stroom en ontkalken. Controleer actuele prijzen bij de verkoper.',
  },
  {
    question: 'Is er een kraan die kokend en bruisend water combineert?',
    answer:
      'Ja. Een 4-in-1 kraan met ingebouwd osmosefilter levert kokend, koud gefilterd, warm en bruisend water uit een kraan, vaak voor een lagere totaalprijs dan een Selsiuz of Grohe Blue afzonderlijk. Dat is interessant als je niet wilt kiezen tussen heet en bruisend.',
  },
];

const vergelijking = [
  {
    naam: '4-in-1 osmosekraan',
    type: 'Kokend + gefilterd + bruisend',
    kokend: 'Ja',
    bruisend: 'Ja',
    filter: 'Osmose ingebouwd',
    highlight: true,
    notitie: 'Combineert beide werelden, vaak voor de laagste totaalprijs.',
  },
  {
    naam: 'Selsiuz',
    type: 'Kokend water kraan',
    kokend: 'Ja (100 graden)',
    bruisend: 'Nee',
    filter: 'Niet standaard',
    highlight: false,
    notitie: 'Voor wie vooral direct kokend water wil, met strak design.',
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

export default function SelsiuzVsGroheBluePage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Selsiuz vs Grohe Blue: kokend of bruisend water?',
          description:
            'Een eerlijke vergelijking van Selsiuz (kokend water) en Grohe Blue (gefilterd, gekoeld en bruisend), met een 4-in-1 osmosekraan als alternatief dat beide combineert.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/vergelijken/selsiuz-vs-grohe-blue',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/vergelijken' },
          { name: 'Selsiuz vs Grohe Blue', url: 'https://waterfilterplatform.nl/vergelijken/selsiuz-vs-grohe-blue' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:text-[#005F8A]">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Selsiuz vs Grohe Blue</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Selsiuz vs Grohe Blue: kokend of bruisend water?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>Selsiuz</strong> en <strong>Grohe Blue</strong> zijn allebei premium keukenkranen, maar
            ze lossen verschillende behoeften op: de Selsiuz levert kokend water, de Grohe Blue gefilterd,
            gekoeld en bruisend water. We vergelijken ze eerlijk - en laten zien wanneer een 4-in-1
            osmosekraan beide combineert.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/selsiuz"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Over Selsiuz
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
        <MethodologyBadge lastReviewed="2026-05-29" sources={['Fabrikant / verkoper (richtprijzen)', 'RIVM', 'Vewin']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Selsiuz of Grohe Blue?"
          answer="Het hangt af van je behoefte. Kies de Selsiuz als je vooral direct kokend water wilt voor thee, koffie en koken. Kies de Grohe Blue als je juist koud, gefilterd en (Home) bruisend water uit de kraan wilt. Ze overlappen dus nauwelijks: de een is heet, de ander koud/bruisend. Wil je beide, dan combineert een 4-in-1 osmosekraan kokend, gefilterd en bruisend water in een kraan, vaak voor een lagere totaalprijs. Prijzen indicatief; controleer bij de verkoper."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Selsiuz en Grohe Blue naast elkaar</h2>
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke past bij jouw behoefte?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              ['Kies Selsiuz als...', 'Direct kokend water je hoofddoel is voor thee, koffie en koken, met een strak design.'],
              ['Kies Grohe Blue als...', 'Je vooral koud, gefilterd en bruisend water uit de kraan wilt en geen kokend water nodig hebt.'],
              ['Twijfel je tussen heet en bruisend?', 'Dan kies je eigenlijk tussen twee functies - een 4-in-1 osmosekraan biedt ze allebei.'],
              ['Wil je ook bredere filtering?', 'Geen van beide heeft standaard osmose; een 4-in-1 osmosekraan filtert breder.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer lezen? Bekijk{' '}
            <Link href="/selsiuz-alternatief" className="text-[#005F8A] underline">Selsiuz alternatief</Link>,{' '}
            <Link href="/grohe-blue-alternatief" className="text-[#005F8A] underline">Grohe Blue alternatief</Link>{' '}
            of de{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] underline">4-in-1 kraan</Link>.
          </p>
        </section>

        <CTABanner context="kokend" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Selsiuz vs Grohe Blue</h2>
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
              ['/vergelijken/grohe-blue-vs-grohe-red', 'Grohe Blue vs Grohe Red', 'Gefilterd/bruisend versus kokend'],
              ['/vergelijken/quooker-vs-selsiuz', 'Quooker vs Selsiuz', 'Twee grootste NL kokend-water-merken'],
              ['/4-in-1-kraan', '4-in-1 kraan', 'Kokend, gefilterd en bruisend in een kraan'],
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
