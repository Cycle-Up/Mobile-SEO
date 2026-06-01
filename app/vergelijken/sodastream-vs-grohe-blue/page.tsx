import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'SodaStream vs Grohe Blue: bruiswatertoestel of -kraan? (2026)',
    description:
      'SodaStream of Grohe Blue? Toestel op het aanrecht versus een gefilterde bruiswaterkraan. Vergelijk gemak, filtering, kosten en wanneer wat past.',
    alternates: { canonical: 'https://waterfilterplatform.nl/vergelijken/sodastream-vs-grohe-blue' },
    openGraph: {
      title: 'SodaStream vs Grohe Blue - toestel of bruiswaterkraan (2026)',
      description:
        'Een eerlijke vergelijking van SodaStream en Grohe Blue op gemak, filtering, koeling en kosten, met het 4-in-1 alternatief.',
      url: 'https://waterfilterplatform.nl/vergelijken/sodastream-vs-grohe-blue',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'SodaStream of Grohe Blue - wat is het verschil?',
    answer:
      'Een SodaStream is een los toestel op het aanrecht dat kraanwater met CO2 bruisend maakt; je vult zelf flessen en het filtert niet. De Grohe Blue is een vaste keukenkraan die gefilterd water levert en in de Home-uitvoering ook gekoeld en bruisend water, direct uit de kraan. SodaStream is goedkoper en zonder installatie; Grohe Blue biedt meer gemak en filtering tegen een hogere prijs.',
  },
  {
    question: 'Filtert een SodaStream of Grohe Blue het water?',
    answer:
      'Een SodaStream filtert niet; kalk en chloor blijven in het water. De Grohe Blue gebruikt een koolstoffilter dat smaak, chloor en kalk vermindert (geen osmose). Wil je bredere filtering zoals lood of PFAS, dan is een osmosesysteem of 4-in-1 osmosekraan geschikter.',
  },
  {
    question: 'Wat is goedkoper, SodaStream of Grohe Blue?',
    answer:
      'In aanschaf is een SodaStream veel goedkoper (enkele tientallen tot ruim honderd euro) en vraagt geen installatie. De Grohe Blue zit in het premium segment met installatie, plus lopende kosten voor filters en CO2. Per liter bruiswater kunnen beide voordelig zijn versus flessen; de keuze hangt vooral af van gewenst gemak en filtering.',
  },
  {
    question: 'Voor wie is SodaStream de betere keuze?',
    answer:
      'Voor wie laagdrempelig en goedkoop af en toe bruiswater wil maken, zonder installatie en zonder filtering nodig te hebben. Ideaal in een huurwoning of bij beperkt gebruik. Het nadeel is het zelf vullen van flessen en het vervangen van CO2-cilinders.',
  },
  {
    question: 'Is er een kraan die gefilterd, kokend en bruisend water combineert?',
    answer:
      'Ja. Een 4-in-1 kraan met ingebouwd osmosefilter levert kokend, koud gefilterd, warm en bruisend water uit een kraan. Dat is interessant als je niet wilt kiezen tussen filtering, heet en bruisend water, vaak voor een lagere totaalprijs dan losse oplossingen naast elkaar.',
  },
];

const vergelijking = [
  {
    naam: '4-in-1 osmosekraan',
    type: 'Kraan: gefilterd + kokend + bruisend',
    filtering: 'Osmose (breed)',
    bruisend: 'Ja',
    installatie: 'Eenmalig',
    highlight: true,
    notitie: 'Combineert filtering, kokend en bruisend water uit een kraan.',
  },
  {
    naam: 'SodaStream',
    type: 'Toestel op aanrecht',
    filtering: 'Geen',
    bruisend: 'Ja (zelf maken)',
    installatie: 'Geen',
    highlight: false,
    notitie: 'Goedkoop, laagdrempelig; flessen vullen en CO2 ruilen.',
  },
  {
    naam: 'Grohe Blue',
    type: 'Gefilterde bruiswaterkraan',
    filtering: 'Koolstoffilter',
    bruisend: 'Ja (Home)',
    installatie: 'Eenmalig',
    highlight: false,
    notitie: 'Gekoeld en gefilterd bruiswater uit de kraan; premium.',
  },
];

export default function SodaStreamVsGroheBluePage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'SodaStream vs Grohe Blue: bruiswatertoestel of -kraan?',
          description:
            'Een eerlijke vergelijking van SodaStream (toestel) en Grohe Blue (gefilterde bruiswaterkraan) op gemak, filtering en kosten, met het 4-in-1 alternatief.',
          datePublished: '2026-05-30',
          dateModified: '2026-05-30',
          url: 'https://waterfilterplatform.nl/vergelijken/sodastream-vs-grohe-blue',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/vergelijken' },
          { name: 'SodaStream vs Grohe Blue', url: 'https://waterfilterplatform.nl/vergelijken/sodastream-vs-grohe-blue' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:text-[#005F8A]">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>SodaStream vs Grohe Blue</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            SodaStream vs Grohe Blue: toestel of bruiswaterkraan?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>SodaStream</strong> en <strong>Grohe Blue</strong> maken allebei bruisend water, maar
            op een heel andere manier: een los toestel op het aanrecht versus een vaste, gefilterde
            bruiswaterkraan. We vergelijken ze eerlijk op gemak, filtering en kosten - en laten zien wanneer
            een 4-in-1 kraan beide overtreft.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/sodastream"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Over SodaStream
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
          question="SodaStream of Grohe Blue?"
          answer="Kies een SodaStream als je goedkoop en zonder installatie af en toe bruiswater wilt maken; filtering heb je er niet bij en je vult zelf flessen. Kies een Grohe Blue als je gekoeld en gefilterd bruiswater direct uit de kraan wilt, tegen een hogere aanschaf en installatie. Wil je daarbovenop ook kokend water en bredere (osmose)filtering, dan combineert een 4-in-1 osmosekraan dat in een kraan, vaak voor een lagere totaalprijs. Prijzen indicatief; controleer bij de verkoper."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">SodaStream en Grohe Blue naast elkaar</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Type</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Filtering</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Bruisend</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Installatie</th>
                </tr>
              </thead>
              <tbody>
                {vergelijking.map(a => (
                  <tr key={a.naam} className={`border-b border-gray-100 ${a.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">
                      {a.naam}
                      {a.highlight && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Completer</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-700">{a.type}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.filtering}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.bruisend}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.installatie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Specificaties indicatief op basis van publieke richtprijzen. Bijgewerkt mei 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke past bij jou?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              ['Kies SodaStream als...', 'Je goedkoop en zonder installatie bruiswater wilt maken en geen filtering nodig hebt.'],
              ['Kies Grohe Blue als...', 'Je gekoeld en gefilterd bruiswater direct uit de kraan wilt en installatie geen bezwaar is.'],
              ['Wil je ook kokend water?', 'Geen van beide levert kokend water; een 4-in-1 osmosekraan wel.'],
              ['Wil je brede filtering?', 'SodaStream filtert niet, Grohe Blue koolstof; osmose filtert breder (lood, PFAS).'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer lezen? Bekijk{' '}
            <Link href="/sodastream-alternatief" className="text-[#005F8A] underline">SodaStream alternatief</Link>,{' '}
            <Link href="/grohe-blue-alternatief" className="text-[#005F8A] underline">Grohe Blue alternatief</Link>{' '}
            of de{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] underline">4-in-1 kraan</Link>.
          </p>
        </section>

        <CTABanner context="algemeen" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over SodaStream vs Grohe Blue</h2>
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
              ['/bruisend-water', 'Bruisend water', 'Alle opties voor bruisend water thuis'],
              ['/vergelijken/grohe-blue-vs-grohe-red', 'Grohe Blue vs Grohe Red', 'Gefilterd/bruisend versus kokend'],
              ['/sodastream', 'Over SodaStream', 'Werking, modellen en kosten'],
              ['/4-in-1-kraan', '4-in-1 kraan', 'Gefilterd, kokend en bruisend uit een kraan'],
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
