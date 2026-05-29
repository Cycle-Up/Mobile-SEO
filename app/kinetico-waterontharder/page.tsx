import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Kinetico waterontharder: modellen, ervaringen en alternatief',
    description:
      'Kinetico waterontharder: wat biedt de non-electric twin-tank techniek, voor wie is het geschikt en waar let je op? Plus een eerlijke afweging en alternatieven in 2026.',
    alternates: { canonical: 'https://waterfilterplatform.nl/kinetico-waterontharder' },
    openGraph: {
      title: 'Kinetico waterontharder: modellen, ervaringen en alternatief',
      description:
        'Wat biedt een Kinetico waterontharder (non-electric twin-tank), voor wie is het geschikt en hoe verhoudt het zich tot alternatieven? Onafhankelijke uitleg.',
      url: 'https://waterfilterplatform.nl/kinetico-waterontharder',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Is een Kinetico waterontharder een goede keuze?',
    answer:
      'Kinetico is bekend van non-electric twin-tank waterontharders die continu zacht water leveren en regenereren op basis van werkelijk verbruik in plaats van een timer. Dat maakt ze premium en betrouwbaar, maar ook hoger geprijsd en doorgaans via een dealer geinstalleerd. Het is een goede keuze als je geen stroompunt bij de aansluiting hebt of een onderhoudsarme oplossing wilt; vergelijk capaciteit, zoutverbruik en certificering altijd met andere merken.',
  },
  {
    question: 'Welke waterontharders maakt Kinetico?',
    answer:
      'Kinetico richt zich op non-electric ionenwisselaars die op waterdruk werken in plaats van op stroom. Kenmerkend is de twin-tank opzet waarbij de ene tank zacht water levert terwijl de andere regenereert, zodat er continu zacht water beschikbaar is. Controleer de actuele modellen en specificaties altijd bij de dealer, want het assortiment wijzigt.',
  },
  {
    question: 'Wat kost een Kinetico waterontharder?',
    answer:
      'Kinetico zit in het premium prijssegment en wordt doorgaans via een dealer geleverd en geinstalleerd. Reken naast de aanschaf op zoutkosten en periodiek onderhoud. Beoordeel altijd de totale kosten over vijf jaar (aanschaf, installatie, zout, water en service) in plaats van alleen de aanschafprijs, en vraag een offerte op maat bij de dealer.',
  },
  {
    question: 'Wat is het beste alternatief voor Kinetico?',
    answer:
      'Een goed vergelijkbaar non-electric alternatief is Harvey; daarnaast zijn er ionenwisselaar-merken zoals Culligan en BWT, of een zoutloos systeem als je geen zout wilt. Wil je vooral schoon drinkwater in plaats van zachter leidingwater, dan is een osmosefilter op het aanrecht een gerichtere keuze. Bekijk onze koopgids voor de beste waterontharder per situatie.',
  },
];

export default function KineticoWaterontharderPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/waterontharder' },
          { name: 'Kinetico', url: 'https://waterfilterplatform.nl/kinetico-waterontharder' },
        ]}
      />
      <SchemaOrg schema={[{ '@type': 'Brand', name: 'Kinetico', description: 'Internationaal merk van waterontharders, bekend van non-electric twin-tank systemen die op waterdruk werken.' }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontharder" className="hover:text-[#005F8A]">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>Kinetico</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kinetico waterontharder: modellen, ervaringen en alternatief
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>Kinetico</strong> is een internationaal merk dat bekend staat om non-electric
            waterontharders die op waterdruk werken. Hieronder lees je wat Kinetico biedt, voor wie het
            geschikt is, waar je op let bij de keuze en hoe het zich verhoudt tot alternatieven -
            onafhankelijk en zonder verkoopprikkel.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/beste-waterontharder-2026"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Beste waterontharder 2026
            </Link>
            <Link
              href="/waterontharder/kopen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Waterontharder kopen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Is een Kinetico waterontharder een goede keuze?"
          answer="Kinetico levert non-electric twin-tank waterontharders die continu zacht water leveren en regenereren op basis van werkelijk verbruik in plaats van een timer. Dat maakt ze premium en betrouwbaar, maar ook hoger geprijsd en doorgaans via een dealer geinstalleerd. Het is een goede keuze als je geen stroompunt bij de aansluiting hebt of een onderhoudsarme oplossing wilt - vergelijk capaciteit, zoutverbruik en certificering met andere merken."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat biedt Kinetico?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kinetico is een internationaal merk dat zich richt op waterbehandeling voor consument en
            bedrijf. Kenmerkend is dat de waterontharders non-electric zijn: ze werken op de waterdruk
            van de leiding in plaats van op stroom en een timer. Voor het ontharden van leidingwater
            gebruikt Kinetico ionenwisseling met zout, die calcium en magnesium uitwisselt voor natrium
            en zo kalkaanslag tegengaat.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Non-electric werking', 'Waterdruk-gedreven systeem zonder stroomaansluiting of timer.'],
              ['Twin-tank opzet', 'Twee tanks leveren continu zacht water; de ene regenereert terwijl de andere doorlevert.'],
              ['Regenereert op verbruik', 'Regeneratie gebeurt op basis van werkelijk waterverbruik in plaats van op een vast tijdstip.'],
              ['Premium en dealer-installatie', 'Hoger prijssegment; doorgaans geleverd en geinstalleerd via een dealer.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong> - {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wil je eerst begrijpen hoe ontharden technisch werkt? Lees onze uitleg over{' '}
            <Link href="/filtertechnieken/ionenwisseling" className="text-[#005F8A] underline">ionenwisseling</Link>{' '}
            en de algemene{' '}
            <Link href="/waterontharder/werking" className="text-[#005F8A] underline">werking van een waterontharder</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voor wie is een Kinetico waterontharder geschikt?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['Gezinnen in hard-watergebied', 'Bij hardheid boven 15 dH levert een ionenwisselaar de meeste winst tegen kalkaanslag.'],
              ['Aansluiting zonder stroompunt', 'Door de non-electric werking is er geen stopcontact bij de waterontharder nodig.'],
              ['Wie continu zacht water wil', 'De twin-tank opzet levert ook tijdens regeneratie zacht water, zonder onderbreking.'],
              ['Minder geschikt bij krap budget', 'Kinetico zit in het premium segment; bij zoutbezwaar kun je naar een zoutloos systeem of osmose voor drinkwater kijken.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <CTABanner context="waterhardheid" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waar let je op bij de keuze - en alternatieven</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beoordeel een Kinetico waterontharder net als elk ander merk op de juiste capaciteit voor jouw
            waterhardheid en huishouden, het zout- en waterverbruik bij regeneratie, de certificering en
            de service. Een goed afgestemd toestel presteert vaak beter dan een te groot of te klein
            duur toestel.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Vergelijk Kinetico gerust met alternatieven zoals{' '}
            <Link href="/harvey-waterontharder" className="text-[#005F8A] underline">Harvey</Link> (ook non-electric),{' '}
            <Link href="/culligan-waterontharder" className="text-[#005F8A] underline">Culligan</Link> en{' '}
            <Link href="/bwt-waterontharder" className="text-[#005F8A] underline">BWT</Link>, of bekijk
            de volledige{' '}
            <Link href="/beste-waterontharder-2026" className="text-[#005F8A] underline">beste waterontharder koopgids</Link>{' '}
            en de{' '}
            <Link href="/vergelijken/waterontharder-vergelijken" className="text-[#005F8A] underline">waterontharder-vergelijking</Link>.
          </p>
          <p className="text-xs text-gray-400 mt-4">
            WaterfilterPlatform verkoopt geen Kinetico-producten en ontvangt hiervoor geen vergoeding.
            Controleer actuele modellen, specificaties en prijzen altijd bij de leverancier. Bijgewerkt mei 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Kinetico waterontharders</h2>
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
              ['/beste-waterontharder-2026', 'Beste waterontharder 2026', 'Koopgids met shortlist en merken'],
              ['/kennisbank/waterontharder-merken', 'Waterontharder-merken', 'Overzicht van alle merken'],
              ['/waterontharder/kopen', 'Waterontharder kopen', 'Waar let je op bij aanschaf'],
              ['/vergelijken/waterontharder-vergelijken', 'Waterontharders vergelijken', 'Systemen naast elkaar'],
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
