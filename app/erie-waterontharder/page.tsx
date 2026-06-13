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
    title: 'Erie waterontharder: modellen, ervaringen en alternatief',
    description:
      'Erie waterontharder: wat biedt dit merk (onderdeel van Pentair), voor wie is het geschikt en waar let je op? Plus een eerlijke afweging en alternatieven in',
    alternates: { canonical: 'https://waterfilterplatform.nl/erie-waterontharder' },
    openGraph: {
      title: 'Erie waterontharder: modellen, ervaringen en alternatief',
      description:
        'Wat biedt een Erie waterontharder (onderdeel van Pentair), voor wie is het geschikt en hoe verhoudt het zich tot alternatieven? Onafhankelijke uitleg.',
      url: 'https://waterfilterplatform.nl/erie-waterontharder',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Is een Erie waterontharder een goede keuze?',
    answer:
      'Erie (Erie Water Treatment, onderdeel van Pentair) is in de Benelux een veelgebruikt merk voor ionenwisselaar-waterontharders en besturingsventielen, vaak geleverd via een installateur of dealer. Het is een degelijke keuze met een goede onderdelen- en serviceketen. Of het voor jou de beste keuze is hangt af van je waterhardheid, huishoudgrootte en budget; vergelijk altijd capaciteit, zoutverbruik en prijs met andere merken.',
  },
  {
    question: 'Welke waterontharders maakt Erie?',
    answer:
      'Erie biedt vooral ionenwisselaars met zout, plus de regelkleppen (besturingsventielen) die het regeneratieproces aansturen. Die ventielen worden ook in systemen van andere fabrikanten gebruikt. Erie-ontharders worden in de Benelux vaak via installateurs en dealers geleverd. Controleer de actuele modellen en specificaties altijd bij de leverancier, want het assortiment wijzigt.',
  },
  {
    question: 'Wat kost een Erie waterontharder?',
    answer:
      'De prijs van een Erie waterontharder hangt sterk af van het model, de capaciteit en de installateur of dealer die het levert. Vraag altijd een offerte op en beoordeel de totale kosten over vijf jaar (aanschaf, zout, water en service) in plaats van alleen de aanschafprijs.',
  },
  {
    question: 'Wat is het beste alternatief voor Erie?',
    answer:
      'Goede alternatieven zijn andere ionenwisselaar-merken zoals BWT, Culligan en AquaCell, of een zoutloos systeem als je geen zout wilt. Wil je vooral schoon drinkwater in plaats van zachter leidingwater, dan is een osmosefilter op het aanrecht een gerichtere keuze. Bekijk onze koopgids voor de beste waterontharder per situatie.',
  },
];

export default function ErieWaterontharderPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Erie waterontharder: modellen, ervaringen en alternatief',
          description: 'Erie waterontharder: wat biedt dit merk (onderdeel van Pentair), voor wie is het geschikt en waar let je op? Plus een eerlijke afweging en alternatieven in',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/erie-waterontharder',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/waterontharder' },
          { name: 'Erie', url: 'https://waterfilterplatform.nl/erie-waterontharder' },
        ]}
      />
      <SchemaOrg schema={[{ '@type': 'Brand', name: 'Erie', description: 'Merk van waterontharders en besturingsventielen (Erie Water Treatment, onderdeel van Pentair), in de Benelux veelgebruikt voor ionenwisselaars.' }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontharder" className="hover:text-[#005F8A]">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>Erie</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Erie waterontharder: modellen, ervaringen en alternatief
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>Erie</strong> (Erie Water Treatment, onderdeel van Pentair) is in de Benelux een
            veelgebruikt merk voor waterontharders en besturingsventielen. Hieronder lees je wat Erie
            biedt, voor wie het geschikt is, waar je op let bij de keuze en hoe het zich verhoudt tot
            alternatieven - onafhankelijk en zonder verkoopprikkel.
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
          question="Is een Erie waterontharder een goede keuze?"
          answer="Erie (onderdeel van Pentair) is in de Benelux een veelgebruikt merk voor ionenwisselaars met zout, vaak geleverd via een installateur. Het is een degelijke keuze met een goede onderdelen- en serviceketen. Of het voor jou de beste keuze is hangt af van je waterhardheid, huishoudgrootte en budget - vergelijk capaciteit, zoutverbruik en prijs met andere merken."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat biedt Erie?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Erie Water Treatment is onderdeel van Pentair en richt zich op waterbehandeling voor
            consument en bedrijf. Voor het ontharden van leidingwater biedt Erie vooral
            ionenwisselaars met zout, die calcium en magnesium uitwisselen voor natrium en zo
            kalkaanslag tegengaan.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Onderdeel van Pentair', 'Erie Water Treatment hoort bij Pentair, een internationale speler in waterbehandeling.'],
              ['Regelkleppen', 'Erie staat bekend om zijn besturingsventielen die het regeneratieproces aansturen, ook in systemen van anderen.'],
              ['Levering via installateur', 'Erie-waterontharders worden in de Benelux vaak via installateurs en dealers geleverd.'],
              ['Ionenwisseling met zout', 'De kern is een zoutsysteem; reken op periodiek zout bijvullen en regeneratie.'],
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voor wie is een Erie waterontharder geschikt?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['Gezinnen in hard-watergebied', 'Bij hardheid boven 15 dH levert een ionenwisselaar de meeste winst tegen kalkaanslag.'],
              ['Wie via een installateur koopt', 'Erie wordt vaak via installateurs en dealers geleverd, met onderdelen en service in de buurt.'],
              ['Wie waarde hecht aan service', 'Een goede onderdelen- en serviceketen maakt onderhoud en reparatie eenvoudiger.'],
              ['Minder geschikt bij zoutbezwaar', 'Wil je geen zout of natrium toevoegen, kijk dan naar een zoutloos systeem of osmose voor drinkwater.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <AffiliateCTA
          destination="joep"
          campaign="waterontharder"
          content="erie-waterontharder-cta"
          label="Joep waterontharder als alternatief"
          title="Een compacte waterontharder zonder gedoe?"
          sub="Bekijk de Joep waterontharder bij onze partner PureAqua."
        />

        <CTABanner context="waterhardheid" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waar let je op bij de keuze - en alternatieven</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beoordeel een Erie waterontharder net als elk ander merk op de juiste capaciteit voor jouw
            waterhardheid en huishouden, het zout- en waterverbruik bij regeneratie, de certificering en
            de service. Een goed afgestemd middensegment-toestel presteert vaak beter dan een te groot of
            te klein duur toestel.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Vergelijk Erie gerust met alternatieven zoals{' '}
            <Link href="/bwt-waterontharder" className="text-[#005F8A] underline">BWT</Link>,{' '}
            <Link href="/culligan-waterontharder" className="text-[#005F8A] underline">Culligan</Link> en{' '}
            <Link href="/aquacell-waterontharder" className="text-[#005F8A] underline">AquaCell</Link>, of bekijk
            de volledige{' '}
            <Link href="/beste-waterontharder-2026" className="text-[#005F8A] underline">beste waterontharder koopgids</Link>{' '}
            en de{' '}
            <Link href="/vergelijken/waterontharder-vergelijken" className="text-[#005F8A] underline">waterontharder-vergelijking</Link>.
          </p>
          <p className="text-xs text-gray-400 mt-4">
            WaterfilterPlatform verkoopt geen Erie-producten en ontvangt hiervoor geen vergoeding.
            Controleer actuele modellen, specificaties en prijzen altijd bij de leverancier. Bijgewerkt mei 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Erie waterontharders</h2>
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
