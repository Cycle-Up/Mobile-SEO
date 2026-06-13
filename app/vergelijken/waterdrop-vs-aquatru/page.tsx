import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Waterdrop vs AquaTru: welk osmosesysteem kiezen? (2026)',
    description:
      'Waterdrop of AquaTru? Tankloze onder-aanrecht osmose versus een werkblad-unit. Vergelijk filtering, capaciteit, ruimte, kosten en certificering.',
    alternates: { canonical: 'https://waterfilterplatform.nl/vergelijken/waterdrop-vs-aquatru' },
    openGraph: {
      title: 'Waterdrop vs AquaTru - osmosesystemen vergeleken (2026)',
      description:
        'Een eerlijke vergelijking van Waterdrop (onder-aanrecht) en AquaTru (werkblad) op filtering, capaciteit, ruimte en kosten.',
      url: 'https://waterfilterplatform.nl/vergelijken/waterdrop-vs-aquatru',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Waterdrop of AquaTru - wat is het verschil?',
    answer:
      'Beide gebruiken omgekeerde osmose, maar in een andere vorm. Waterdrop biedt vooral tankloze onder-aanrecht systemen die verborgen onder de gootsteen zitten en water uit een aparte kraan leveren. AquaTru is een werkblad-unit die je zonder installatie op het aanrecht zet en met een reservoir werkt. De filtering is vergelijkbaar; het verschil zit in plaatsing, capaciteit en installatie.',
  },
  {
    question: 'Filteren Waterdrop en AquaTru even goed?',
    answer:
      'Beide bereiken met een RO-membraan een vergelijkbaar resultaat: circa 95 tot 99 procent van opgeloste stoffen en veel verontreinigingen worden tegengehouden. Beoordeel per model de verifieerbare certificering (zoals NSF/ANSI) voor de specifieke contaminanten die je belangrijk vindt, in plaats van alleen op algemene claims te vertrouwen.',
  },
  {
    question: 'Welke vraagt installatie?',
    answer:
      'Waterdrop onder-aanrecht systemen vragen een eenmalige installatie onder de gootsteen met een aparte kraan. AquaTru vraagt geen installatie: plug-and-play op het werkblad. Heb je geen ruimte of mogelijkheid om te installeren (bijvoorbeeld in een huurwoning), dan is de werkblad-unit praktischer; wil je het uit het zicht en met meer volume, dan is onder-aanrecht logischer.',
  },
  {
    question: 'Wat zijn de kosten op termijn?',
    answer:
      'Bij beide bepalen de vervangingsfilters de lopende kosten. Onder-aanrecht systemen gebruiken vaak standaardere filters, terwijl werkblad-units soms proprietaire filters hebben. Reken de filterkosten per jaar en de aanschaf samen door over meerdere jaren om een eerlijke vergelijking te maken; controleer actuele prijzen bij de verkoper.',
  },
  {
    question: 'Is er een alternatief dat osmose met kokend en bruisend water combineert?',
    answer:
      'Ja. Een 4-in-1 kraan met ingebouwd osmosefilter levert kokend, koud gefilterd, warm en bruisend water uit een kraan. Dat is interessant als je naast osmosewater ook heet en bruisend water wilt zonder losse apparaten. Voor puur osmosewater blijven onder-aanrecht systemen of een werkblad-unit prima keuzes.',
  },
];

const vergelijking = [
  {
    naam: 'Waterdrop (onder-aanrecht)',
    plaatsing: 'Verborgen onder gootsteen',
    installatie: 'Eenmalig',
    capaciteit: 'Hoog, continu (tankloos)',
    filters: 'Vaak standaard',
    highlight: false,
    notitie: 'Uit het zicht, eigen kraan, hoger doorlopend volume.',
  },
  {
    naam: 'AquaTru (werkblad)',
    plaatsing: 'Op het aanrecht',
    installatie: 'Geen (plug-and-play)',
    capaciteit: 'Beperkt tankvolume',
    filters: 'Vaak proprietair',
    highlight: false,
    notitie: 'Geen installatie; neemt aanrechtruimte in.',
  },
  {
    naam: '4-in-1 osmosekraan',
    plaatsing: 'Verborgen, een kraan',
    installatie: 'Eenmalig',
    capaciteit: 'Hoog, continu',
    filters: 'Osmose + kokend/bruisend',
    highlight: true,
    notitie: 'Osmose plus kokend en bruisend water uit een kraan.',
  },
];

export default function WaterdropVsAquaTruPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterdrop vs AquaTru: welk osmosesysteem kiezen?',
          description:
            'Een eerlijke vergelijking van Waterdrop (onder-aanrecht) en AquaTru (werkblad) op filtering, capaciteit, ruimte en kosten, met het 4-in-1 alternatief.',
          datePublished: '2026-05-30',
          dateModified: '2026-05-30',
          url: 'https://waterfilterplatform.nl/vergelijken/waterdrop-vs-aquatru',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/vergelijken' },
          { name: 'Waterdrop vs AquaTru', url: 'https://waterfilterplatform.nl/vergelijken/waterdrop-vs-aquatru' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:text-[#005F8A]">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Waterdrop vs AquaTru</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterdrop vs AquaTru: welk osmosesysteem kiezen?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>Waterdrop</strong> en <strong>AquaTru</strong> zijn allebei osmosemerken, maar in een
            andere vorm: tankloze onder-aanrecht osmose versus een werkblad-unit zonder installatie. We
            vergelijken ze eerlijk op filtering, capaciteit, ruimte en kosten.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/waterdrop"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Over Waterdrop
            </Link>
            <Link
              href="/aquatru-alternatief"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              AquaTru alternatief
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-30" sources={['Fabrikant / verkoper', 'NSF/ANSI-standaarden', 'US EPA', 'RIVM']} />
        <AuthorBox datePublished="2026-05-30" />

        <QuickAnswer
          question="Waterdrop of AquaTru?"
          answer="Beide gebruiken omgekeerde osmose met vergelijkbare filtering (circa 95 tot 99 procent van opgeloste stoffen). Kies Waterdrop onder-aanrecht als je het systeem uit het zicht wilt, met een eigen kraan en hoger doorlopend volume. Kies AquaTru als je geen installatie wilt: een werkblad-unit, handig in een huurwoning, maar met beperkt tankvolume en vaak proprietaire filters. Beoordeel per model de verifieerbare certificering en de filterkosten over meerdere jaren. Wil je osmose plus kokend en bruisend water, dan is een 4-in-1 osmosekraan het overwegen waard."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waterdrop en AquaTru naast elkaar</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Plaatsing</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Installatie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Capaciteit</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Filters</th>
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
                    <td className="py-2.5 px-3 text-gray-700">{a.plaatsing}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.installatie}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.capaciteit}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.filters}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Specificaties indicatief op basis van publieke informatie. Bijgewerkt mei 2026; controleer per
            model de actuele certificering en prijzen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke past bij jou?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              ['Kies Waterdrop als...', 'Je het systeem uit het zicht wilt onder de gootsteen, met een eigen kraan en meer volume.'],
              ['Kies AquaTru als...', 'Je niet wilt of kunt installeren; plug-and-play op het werkblad, handig tijdelijk of bij huur.'],
              ['Let bij beide op...', 'Verifieerbare NSF/ANSI-certificering per contaminant en de filterkosten over meerdere jaren.'],
              ['Wil je meer dan osmose?', 'Een 4-in-1 osmosekraan combineert osmose met kokend en bruisend water.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer lezen? Bekijk{' '}
            <Link href="/waterdrop-alternatief" className="text-[#005F8A] underline">Waterdrop alternatief</Link>,{' '}
            <Link href="/aquatru-alternatief" className="text-[#005F8A] underline">AquaTru alternatief</Link>{' '}
            of de{' '}
            <Link href="/beste-osmosefilter-2026" className="text-[#005F8A] underline">beste osmosefilters van 2026</Link>.
          </p>
        </section>

        <AffiliateCTA
          destination="countertopRo"
          campaign="omgekeerde-osmose"
          content="vergelijken-waterdrop-vs-aquatru-cta"
          label="Bekijk de Countertop RO (osmose zonder installatie)"
          title="Osmose zonder installatie?"
          sub="De Countertop RO is een plug-and-play osmose-apparaat zonder installatie bij onze partner PureAqua."
        />

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Waterdrop vs AquaTru</h2>
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
              ['/omgekeerde-osmose', 'Omgekeerde osmose', 'Werking, kosten, voordelen en nadelen'],
              ['/waterdrop', 'Over Waterdrop', 'Osmosesystemen en filters van het merk'],
              ['/beste-osmosefilter-2026', 'Beste osmosefilter 2026', 'Koopgids met shortlist en criteria'],
              ['/4-in-1-kraan', '4-in-1 kraan', 'Osmose plus kokend en bruisend water'],
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
