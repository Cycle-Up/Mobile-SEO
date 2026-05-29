import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Maxima waterontharder: modellen, ervaringen en alternatief',
    description:
      'Maxima waterontharder: wat biedt dit betaalbare NL-marktmerk, voor wie is het geschikt en waar let je op? Plus een eerlijke afweging en alternatieven in 2026.',
    alternates: { canonical: 'https://waterfilterplatform.nl/maxima-waterontharder' },
    openGraph: {
      title: 'Maxima waterontharder: modellen, ervaringen en alternatief',
      description:
        'Wat biedt een Maxima waterontharder, voor wie is het geschikt en hoe verhoudt het zich tot alternatieven? Onafhankelijke uitleg.',
      url: 'https://waterfilterplatform.nl/maxima-waterontharder',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Is een Maxima waterontharder een goede keuze?',
    answer:
      'Maxima is een op de Nederlandse markt veel verkocht merk van betaalbare ionenwisselaar-waterontharders in het waarde- tot middensegment, vaak online verkrijgbaar. Voor veel gezinnen biedt het een goede prijs-prestatieverhouding. Of het voor jou de beste keuze is hangt af van je waterhardheid, huishoudgrootte en budget; let vooral op de capaciteit, het zoutverbruik en de garantie en service, en vergelijk dit met andere merken.',
  },
  {
    question: 'Welke waterontharders maakt Maxima?',
    answer:
      'Maxima biedt vooral ionenwisselaars met zout, die calcium en magnesium uitwisselen voor natrium en zo kalkaanslag tegengaan. Het assortiment richt zich op het waarde- tot middensegment en is vaak online verkrijgbaar. Controleer de actuele modellen en specificaties altijd bij de leverancier, want het aanbod en de uitvoeringen kunnen wijzigen.',
  },
  {
    question: 'Wat kost een Maxima waterontharder?',
    answer:
      'Maxima positioneert zich in het betaalbare waarde- tot middensegment. Naast de aanschaf reken je op jaarlijkse zoutkosten en periodiek onderhoud. Beoordeel altijd de totale kosten over vijf jaar (aanschaf, zout, water en service) in plaats van alleen de aanschafprijs, en controleer de actuele prijs bij de leverancier.',
  },
  {
    question: 'Wat is het beste alternatief voor Maxima?',
    answer:
      'Goede alternatieven zijn andere ionenwisselaar-merken zoals AquaCell, BWT en Viteau, of een zoutloos systeem als je geen zout wilt. Wil je vooral schoon drinkwater in plaats van zachter leidingwater, dan is een osmosefilter op het aanrecht een gerichtere keuze. Bekijk onze koopgids voor de beste waterontharder per situatie.',
  },
];

export default function MaximaWaterontharderPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Maxima waterontharder: modellen, ervaringen en alternatief',
          description: 'Maxima waterontharder: wat biedt dit betaalbare NL-marktmerk, voor wie is het geschikt en waar let je op? Plus een eerlijke afweging en alternatieven in 2026.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/maxima-waterontharder',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/waterontharder' },
          { name: 'Maxima', url: 'https://waterfilterplatform.nl/maxima-waterontharder' },
        ]}
      />
      <SchemaOrg schema={[{ '@type': 'Brand', name: 'Maxima', description: 'Op de Nederlandse markt veel verkocht merk van betaalbare ionenwisselaar-waterontharders in het waarde- tot middensegment.' }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontharder" className="hover:text-[#005F8A]">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>Maxima</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Maxima waterontharder: modellen, ervaringen en alternatief
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>Maxima</strong> is een op de Nederlandse markt veel verkocht merk van betaalbare
            waterontharders. Hieronder lees je wat Maxima biedt, voor wie het geschikt is, waar
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
          question="Is een Maxima waterontharder een goede keuze?"
          answer="Maxima is een betaalbaar NL-marktmerk met ionenwisselaars die met zout werken en een goede prijs-prestatieverhouding bieden voor gezinnen. Of het voor jou de beste keuze is hangt af van je waterhardheid, huishoudgrootte en budget - let vooral op de capaciteit, het zoutverbruik en de garantie en service, en vergelijk dit met andere merken."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat biedt Maxima?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Maxima is een merk dat op de Nederlandse markt veel wordt verkocht en zich richt op
            betaalbare waterontharders in het waarde- tot middensegment. Voor het ontharden van
            leidingwater biedt Maxima vooral ionenwisselaars met zout, die calcium en magnesium
            uitwisselen voor natrium en zo kalkaanslag tegengaan.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Ionenwisseling met zout', 'De kern is een zoutsysteem; reken op periodiek zout bijvullen en regeneratie.'],
              ['Waarde- tot middensegment', 'Gericht op een aantrekkelijke prijs-prestatieverhouding voor gezinnen.'],
              ['Vaak online verkrijgbaar', 'Het merk is op de Nederlandse markt veel verkocht en doorgaans online te bestellen.'],
              ['Algemene modelopzet', 'Controleer de actuele modellen en uitvoeringen altijd bij de leverancier.'],
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voor wie is een Maxima waterontharder geschikt?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['Gezinnen in hard-watergebied', 'Bij hardheid boven 15 dH levert een ionenwisselaar de meeste winst tegen kalkaanslag.'],
              ['Prijsbewuste kopers', 'Het waarde- tot middensegment maakt Maxima aantrekkelijk voor wie op het budget let.'],
              ['Wie online wil bestellen', 'Het merk is op de Nederlandse markt veel verkocht en doorgaans online verkrijgbaar.'],
              ['Minder geschikt bij zoutbezwaar', 'Wil je geen zout of natrium toevoegen, kijk dan naar een zoutloos systeem of osmose voor drinkwater.'],
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
            Beoordeel een Maxima waterontharder net als elk ander merk op de juiste capaciteit voor jouw
            waterhardheid en huishouden, het zout- en waterverbruik bij regeneratie, en de garantie en
            service. Een goed afgestemd middensegment-toestel presteert vaak beter dan een te groot of
            te klein duur toestel.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Vergelijk Maxima gerust met alternatieven zoals{' '}
            <Link href="/aquacell-waterontharder" className="text-[#005F8A] underline">AquaCell</Link>,{' '}
            <Link href="/bwt-waterontharder" className="text-[#005F8A] underline">BWT</Link> en{' '}
            <Link href="/viteau-waterontharder" className="text-[#005F8A] underline">Viteau</Link>, of bekijk
            de volledige{' '}
            <Link href="/beste-waterontharder-2026" className="text-[#005F8A] underline">beste waterontharder koopgids</Link>{' '}
            en de{' '}
            <Link href="/vergelijken/waterontharder-vergelijken" className="text-[#005F8A] underline">waterontharder-vergelijking</Link>.
          </p>
          <p className="text-xs text-gray-400 mt-4">
            WaterfilterPlatform verkoopt geen Maxima-producten en ontvangt hiervoor geen vergoeding.
            Controleer actuele modellen, specificaties en prijzen altijd bij de leverancier. Bijgewerkt mei 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Maxima waterontharders</h2>
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
