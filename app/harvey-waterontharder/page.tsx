import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Harvey waterontharder: modellen, ervaringen en alternatief',
    description:
      'Harvey waterontharder: wat biedt het non-electric twin-tank systeem op blokzout, voor wie is het geschikt en waar let je op? Plus alternatieven in 2026.',
    alternates: { canonical: 'https://waterfilterplatform.nl/harvey-waterontharder' },
    openGraph: {
      title: 'Harvey waterontharder: modellen, ervaringen en alternatief',
      description:
        'Wat biedt een Harvey waterontharder (non-electric twin-tank op blokzout), voor wie is het geschikt en hoe verhoudt het zich tot alternatieven? Onafhankelijke uitleg.',
      url: 'https://waterfilterplatform.nl/harvey-waterontharder',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Is een Harvey waterontharder een goede keuze?',
    answer:
      'Harvey is een Brits merk dat bekend staat om non-electric twin-tank (twin-cylinder) waterontharders op blokzout, die continu zacht water leveren zonder stroomaansluiting. Door het compacte formaat is het een goede keuze bij een kleine ruimte of als er geen stroompunt in de buurt is. Let wel op de kosten en beschikbaarheid van blokzout en op de verkrijgbaarheid in Nederland, waar Harvey vooral via importeurs en dealers wordt aangeboden.',
  },
  {
    question: 'Welke waterontharders maakt Harvey?',
    answer:
      'Harvey (Harvey Water Softeners) richt zich op non-electric, compacte twin-cylinder waterontharders die werken op waterdruk in plaats van stroom en die blokzout gebruiken in plaats van zoutkorrels. Door de twee cilinders kan het systeem continu zacht water leveren, ook tijdens regeneratie. Controleer de actuele modellen en specificaties altijd bij de importeur of dealer, want het assortiment en de beschikbaarheid kunnen wijzigen.',
  },
  {
    question: 'Wat kost een Harvey waterontharder?',
    answer:
      'Een betrouwbare aanschafprijs hangt sterk af van het model en de manier waarop Harvey in Nederland wordt geleverd (via importeurs en dealers). Beoordeel naast de aanschaf vooral de doorlopende kosten: blokzout is doorgaans anders geprijsd en verkrijgbaar dan gewone zoutkorrels. Vraag de actuele prijs en de totale kosten over vijf jaar altijd op bij de leverancier.',
  },
  {
    question: 'Wat is het beste alternatief voor Harvey?',
    answer:
      'Een logisch alternatief is Kinetico, dat eveneens non-electric waterontharders maakt. Ook gevestigde ionenwisselaar-merken zoals BWT en Culligan zijn het overwegen waard, zeker als blokzout of de Nederlandse verkrijgbaarheid een drempel vormt. Bekijk onze koopgids voor de beste waterontharder per situatie en vergelijk Harvey direct met BWT.',
  },
];

export default function HarveyWaterontharderPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Harvey waterontharder: modellen, ervaringen en alternatief',
          description: 'Harvey waterontharder: wat biedt het non-electric twin-tank systeem op blokzout, voor wie is het geschikt en waar let je op? Plus alternatieven in 2026.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/harvey-waterontharder',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/waterontharder' },
          { name: 'Harvey', url: 'https://waterfilterplatform.nl/harvey-waterontharder' },
        ]}
      />
      <SchemaOrg schema={[{ '@type': 'Brand', name: 'Harvey', description: 'Brits merk van non-electric twin-cylinder waterontharders op blokzout (Harvey Water Softeners).' }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontharder" className="hover:text-[#005F8A]">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>Harvey</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Harvey waterontharder: modellen, ervaringen en alternatief
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>Harvey</strong> (Harvey Water Softeners) is een Brits merk dat bekend staat om
            non-electric, compacte twin-cylinder waterontharders. Hieronder lees je wat Harvey biedt,
            voor wie het geschikt is, waar je op let bij de keuze en hoe het zich verhoudt tot
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
          question="Is een Harvey waterontharder een goede keuze?"
          answer="Harvey is een Brits merk met non-electric twin-tank waterontharders op blokzout die continu zacht water leveren zonder stroom, in een compact formaat. Dat maakt het een goede keuze bij een kleine ruimte of als er geen stroompunt in de buurt is. Let wel op de kosten en beschikbaarheid van blokzout en op de Nederlandse verkrijgbaarheid - Harvey loopt hier vooral via importeurs en dealers."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat biedt Harvey?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Harvey Water Softeners is een Brits bedrijf dat zich richt op compacte waterontharders voor
            de woning. Kenmerkend is het non-electric ontwerp: het systeem werkt op de waterdruk in
            plaats van op stroom en gebruikt blokzout in plaats van losse zoutkorrels. Net als andere
            ontharders wisselt het calcium en magnesium uit en gaat het zo kalkaanslag tegen.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Non-electric', 'Het systeem wordt aangedreven door de waterdruk en heeft geen stroomaansluiting nodig.'],
              ['Twin-cylinder', 'Door twee cilinders levert het continu zacht water, ook tijdens regeneratie.'],
              ['Werkt op blokzout', 'Harvey gebruikt blokzout in plaats van losse zoutkorrels; let op kosten en beschikbaarheid.'],
              ['Compact formaat', 'Het kleine formaat past in beperkte ruimtes, bijvoorbeeld onder het aanrecht.'],
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voor wie is een Harvey waterontharder geschikt?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['Kleine ruimtes', 'Het compacte twin-cylinder formaat past waar een groter toestel niet kwijt kan.'],
              ['Geen stroompunt beschikbaar', 'Het non-electric ontwerp werkt op waterdruk, dus zonder stopcontact in de buurt.'],
              ['Wie continu zacht water wil', 'Door de twee cilinders blijft er ook tijdens regeneratie zacht water beschikbaar.'],
              ['Minder geschikt bij blokzout-bezwaar', 'Wil je niet afhankelijk zijn van blokzout of twijfel je over de NL-verkrijgbaarheid, kijk dan naar een alternatief merk.'],
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
            Beoordeel een Harvey waterontharder net als elk ander merk op de juiste capaciteit voor jouw
            waterhardheid en huishouden en op het zout- en waterverbruik bij regeneratie. Houd bij Harvey
            extra rekening met de kosten en beschikbaarheid van blokzout en met de verkrijgbaarheid in
            Nederland, waar het merk vooral via importeurs en dealers loopt - controleer dus levertijd,
            installatie en onderhoud lokaal.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Vergelijk Harvey gerust met alternatieven zoals{' '}
            <Link href="/kinetico-waterontharder" className="text-[#005F8A] underline">Kinetico</Link> (ook non-electric),{' '}
            <Link href="/bwt-waterontharder" className="text-[#005F8A] underline">BWT</Link> en{' '}
            <Link href="/culligan-waterontharder" className="text-[#005F8A] underline">Culligan</Link>, of bekijk
            de volledige{' '}
            <Link href="/beste-waterontharder-2026" className="text-[#005F8A] underline">beste waterontharder koopgids</Link>{' '}
            en de{' '}
            <Link href="/vergelijken/harvey-vs-bwt" className="text-[#005F8A] underline">vergelijking Harvey vs BWT</Link>.
          </p>
          <p className="text-xs text-gray-400 mt-4">
            WaterfilterPlatform verkoopt geen Harvey-producten en ontvangt hiervoor geen vergoeding.
            Controleer actuele modellen, specificaties en prijzen altijd bij de leverancier. Bijgewerkt mei 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Harvey waterontharders</h2>
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
