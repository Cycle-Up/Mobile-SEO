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
    title: 'BWT waterontharder: modellen, ervaringen en alternatief (2026)',
    description:
      'BWT waterontharder: wat biedt de AQA Perla-lijn, voor wie is het geschikt en waar let je op? Plus een eerlijke afweging en alternatieven in 2026.',
    alternates: { canonical: 'https://waterfilterplatform.nl/bwt-waterontharder' },
    openGraph: {
      title: 'BWT waterontharder: modellen, ervaringen en alternatief',
      description:
        'Wat biedt een BWT waterontharder (AQA Perla), voor wie is het geschikt en hoe verhoudt het zich tot alternatieven? Onafhankelijke uitleg.',
      url: 'https://waterfilterplatform.nl/bwt-waterontharder',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Is een BWT waterontharder een goede keuze?',
    answer:
      'BWT is een van de bekendste merken voor waterontharders in Europa, met een breed aanbod ionenwisselaars zoals de AQA Perla-lijn. Voor een gezin in een hard-watergebied is het een degelijke keuze met goede serviceondersteuning. Of het de beste keuze is hangt af van je waterhardheid, huishoudgrootte en budget; vergelijk altijd capaciteit, zoutverbruik en certificering met andere merken.',
  },
  {
    question: 'Welke waterontharders maakt BWT?',
    answer:
      'BWT (Best Water Technology) biedt vooral ionenwisselaars met zout. De bekende AQA Perla-serie werkt met een duplex-systeem dat ook tijdens regeneratie zacht water kan leveren, en sommige modellen voegen magnesium toe voor de smaak. Controleer de actuele modellen en specificaties altijd bij de leverancier, want het assortiment wijzigt.',
  },
  {
    question: 'Wat kost een BWT waterontharder?',
    answer:
      'BWT zit doorgaans in het midden- tot hogere prijssegment. Reken indicatief op een aanschaf van enkele honderden tot ruim duizend euro, plus jaarlijkse zoutkosten en periodiek onderhoud. Beoordeel altijd de totale kosten over vijf jaar (aanschaf, zout, water en service) in plaats van alleen de aanschafprijs.',
  },
  {
    question: 'Wat is het beste alternatief voor BWT?',
    answer:
      'Goede alternatieven zijn andere ionenwisselaar-merken zoals Grunbeck, EcoWater, Culligan, Kinetico en Erie, of een zoutloos systeem als je geen zout wilt. Wil je vooral schoon drinkwater in plaats van zachter leidingwater, dan is een osmosefilter op het aanrecht een gerichtere keuze. Bekijk onze koopgids voor de beste waterontharder per situatie.',
  },
];

export default function BwtWaterontharderPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'BWT waterontharder: modellen, ervaringen en alternatief (2026)',
          description: 'BWT waterontharder: wat biedt de AQA Perla-lijn, voor wie is het geschikt en waar let je op? Plus een eerlijke afweging en alternatieven in 2026.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/bwt-waterontharder',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/waterontharder' },
          { name: 'BWT', url: 'https://waterfilterplatform.nl/bwt-waterontharder' },
        ]}
      />
      <SchemaOrg schema={[{ '@type': 'Brand', name: 'BWT', description: 'Merk van waterontharders en waterbehandeling (Best Water Technology), bekend van de AQA Perla-lijn.' }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontharder" className="hover:text-[#005F8A]">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>BWT</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            BWT waterontharder: modellen, ervaringen en alternatief
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>BWT</strong> (Best Water Technology) is een van de bekendste merken voor
            waterontharders in Europa. Hieronder lees je wat BWT biedt, voor wie het geschikt is, waar
            je op let bij de keuze en hoe het zich verhoudt tot alternatieven - onafhankelijk en zonder
            verkoopprikkel.
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
          question="Is een BWT waterontharder een goede keuze?"
          answer="BWT is een gevestigd Europees merk met een breed aanbod ionenwisselaars, bekend van de AQA Perla-lijn. Voor een gezin in een hard-watergebied is het een degelijke, goed ondersteunde keuze. Of het voor jou de beste keuze is hangt af van je waterhardheid, huishoudgrootte en budget - vergelijk capaciteit, zoutverbruik en certificering met andere merken."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat biedt BWT?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            BWT staat voor Best Water Technology, een Oostenrijks bedrijf dat zich richt op
            waterbehandeling voor consument en bedrijf. Voor het ontharden van leidingwater biedt BWT
            vooral ionenwisselaars met zout, die calcium en magnesium uitwisselen voor natrium en zo
            kalkaanslag tegengaan.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['AQA Perla-lijn', 'Bekende ionenwisselaars met een duplex-opzet die ook tijdens regeneratie zacht water kan leveren.'],
              ['Magnesiumtechnologie', 'Sommige BWT-systemen en filters voegen magnesium toe voor de smaak van het water.'],
              ['Breed servicenetwerk', 'Ruime beschikbaarheid van installatie, onderdelen en onderhoud in Nederland en Belgie.'],
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voor wie is een BWT waterontharder geschikt?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['Gezinnen in hard-watergebied', 'Bij hardheid boven 15 dH levert een ionenwisselaar de meeste winst tegen kalkaanslag.'],
              ['Wie waarde hecht aan service', 'Het brede dealer- en servicenetwerk maakt installatie en onderhoud eenvoudig.'],
              ['Smaakbewuste gebruikers', 'De magnesiumtechnologie van sommige modellen kan de smaak van het water verbeteren.'],
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
          content="bwt-waterontharder-cta"
          label="Bekijk de Joep waterontharder"
          title="Een compacte waterontharder zonder gedoe?"
          sub="Bekijk de Joep waterontharder bij onze partner PureAqua."
        />

        <CTABanner context="waterhardheid" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waar let je op bij de keuze - en alternatieven</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beoordeel een BWT waterontharder net als elk ander merk op de juiste capaciteit voor jouw
            waterhardheid en huishouden, het zout- en waterverbruik bij regeneratie, de certificering en
            de service. Een goed afgestemd middensegment-toestel presteert vaak beter dan een te groot of
            te klein duur toestel.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Vergelijk BWT gerust met alternatieven zoals{' '}
            <Link href="/grunbeck-waterontharder" className="text-[#005F8A] underline">Grunbeck</Link>,{' '}
            <Link href="/ecowater-waterontharder" className="text-[#005F8A] underline">EcoWater</Link> en{' '}
            <Link href="/culligan-waterontharder" className="text-[#005F8A] underline">Culligan</Link>, of bekijk
            de volledige{' '}
            <Link href="/beste-waterontharder-2026" className="text-[#005F8A] underline">beste waterontharder koopgids</Link>{' '}
            en de{' '}
            <Link href="/vergelijken/waterontharder-vergelijken" className="text-[#005F8A] underline">waterontharder-vergelijking</Link>.
          </p>
          <p className="text-xs text-gray-400 mt-4">
            WaterfilterPlatform verkoopt geen BWT-producten en ontvangt hiervoor geen vergoeding.
            Controleer actuele modellen, specificaties en prijzen altijd bij de leverancier. Bijgewerkt mei 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over BWT waterontharders</h2>
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
