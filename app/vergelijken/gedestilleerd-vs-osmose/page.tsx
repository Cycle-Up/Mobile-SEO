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
    title: 'Gedestilleerd water vs osmosewater: wat is het verschil? (2026)',
    description:
      'Gedestilleerd water of osmosewater? Vergelijk zuiverheid, smaak, kosten en toepassingen - en wanneer welke keuze logisch is voor thuis.',
    alternates: { canonical: 'https://waterfilterplatform.nl/vergelijken/gedestilleerd-vs-osmose' },
    openGraph: {
      title: 'Gedestilleerd water vs osmosewater vergeleken (2026)',
      description:
        'Een eerlijke vergelijking van gedestilleerd water en osmosewater op zuiverheid, smaak, kosten en toepassingen.',
      url: 'https://waterfilterplatform.nl/vergelijken/gedestilleerd-vs-osmose',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is het verschil tussen gedestilleerd water en osmosewater?',
    answer:
      'Gedestilleerd water wordt gemaakt door water te verdampen en de damp weer op te vangen; osmosewater wordt onder druk door een membraan geperst. Beide zijn zeer mineraalarm. Destillatie verwijdert ook micro-organismen door de hitte; omgekeerde osmose verwijdert opgeloste stoffen, microplastics en de meeste micro-organismen via het membraan. Voor dagelijks gebruik thuis is osmosewater praktischer en goedkoper per liter.',
  },
  {
    question: 'Is gedestilleerd water zuiverder dan osmosewater?',
    answer:
      'Beide zijn zeer zuiver en mineraalarm. Gedestilleerd water is doorgaans iets zuiverder qua opgeloste stoffen, maar het verschil is voor huishoudelijk gebruik klein. Osmosewater haalt 90-99% van de opgeloste stoffen weg, wat ruim voldoende is voor drinken, koffie en apparaten.',
  },
  {
    question: 'Kun je gedestilleerd water en osmosewater drinken?',
    answer:
      'Osmosewater is geschikt om te drinken, eventueel geremineraliseerd voor de smaak. Gedestilleerd water is meestal een technisch product en smaakt vlak; het is niet bedoeld als dagelijkse dorstlesser. Voor gezondheidsvragen is je huisarts leidend.',
  },
  {
    question: 'Wat is goedkoper: gedestilleerd of osmosewater?',
    answer:
      'Per liter is osmosewater uit een eigen systeem doorgaans veel goedkoper dan gedestilleerd water uit flessen. Destilleren kost relatief veel energie. Voor wie regelmatig zuiver water nodig heeft, is een osmosesysteem op termijn voordeliger.',
  },
];

const vergelijking = [
  { naam: 'Osmosewater', methode: 'Membraan (druk)', zuiver: '90-99% opgeloste stoffen', kosten: 'Laag per liter', drinken: 'Ja (evt. geremineraliseerd)', highlight: true },
  { naam: 'Gedestilleerd water', methode: 'Verdampen + condenseren', zuiver: 'Zeer hoog', kosten: 'Hoog (energie/fles)', drinken: 'Niet bedoeld als dagelijks', highlight: false },
];

export default function GedestilleerdVsOsmosePage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Gedestilleerd water vs osmosewater: wat is het verschil?',
          description:
            'Een eerlijke vergelijking van gedestilleerd water en osmosewater op zuiverheid, smaak, kosten en toepassingen.',
          datePublished: '2026-05-31',
          dateModified: '2026-05-31',
          url: 'https://waterfilterplatform.nl/vergelijken/gedestilleerd-vs-osmose',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/vergelijken' },
          { name: 'Gedestilleerd vs osmose', url: 'https://waterfilterplatform.nl/vergelijken/gedestilleerd-vs-osmose' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:text-[#005F8A]">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Gedestilleerd vs osmose</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Gedestilleerd water vs osmosewater: wat is het verschil?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Beide zijn zeer mineraalarm, maar worden anders gemaakt en hebben andere toepassingen.
            We vergelijken <strong>gedestilleerd water</strong> en <strong>osmosewater</strong> op
            zuiverheid, smaak, kosten en gebruik.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/omgekeerde-osmose" className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm">
              Over omgekeerde osmose
            </Link>
            <Link href="/kennisbank/gedestilleerd-water" className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm">
              Wat is gedestilleerd water?
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-31" sources={['RIVM', 'WHO - Guidelines for Drinking-water Quality', 'KWR Water Research Institute']} />
        <AuthorBox datePublished="2026-05-31" />

        <QuickAnswer
          question="Gedestilleerd water of osmosewater?"
          answer="Beide zijn zeer mineraalarm. Gedestilleerd water ontstaat door verdampen en condenseren en is meestal een technisch product; osmosewater wordt door een membraan geperst en is geschikt om te drinken, eventueel geremineraliseerd. Voor dagelijks gebruik thuis is osmosewater praktischer en goedkoper per liter."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gedestilleerd en osmose naast elkaar</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Methode</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Zuiverheid</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Kosten</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Drinken</th>
                </tr>
              </thead>
              <tbody>
                {vergelijking.map(a => (
                  <tr key={a.naam} className={`border-b border-gray-100 ${a.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">
                      {a.naam}
                      {a.highlight && <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Praktisch thuis</span>}
                    </th>
                    <td className="py-2.5 px-3 text-gray-700">{a.methode}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.zuiver}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.kosten}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.drinken}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-1">Indicatief overzicht. Bijgewerkt mei 2026.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kies je wat?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              ['Kies osmosewater als...', 'Je dagelijks zuiver drinkwater wilt voor drinken, koffie en apparaten, tegen lage kosten per liter.'],
              ['Kies gedestilleerd als...', 'Je een specifieke technische toepassing hebt (laboratorium, bepaalde apparaten) die destillaat vraagt.'],
              ['Let op de smaak...', 'Puur mineraalarm water smaakt vlak; remineralisatie maakt osmosewater smaakvoller.'],
              ['Let op de kosten...', 'Destilleren kost veel energie; flessen gedestilleerd water zijn duur per liter.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer lezen? Bekijk{' '}
            <Link href="/kennisbank/gedestilleerd-water" className="text-[#005F8A] underline">gedestilleerd water</Link>,{' '}
            <Link href="/kennisbank/gedeioniseerd-water" className="text-[#005F8A] underline">gedeioniseerd water</Link>{' '}
            of het{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">kopen van een osmosesysteem</Link>.
          </p>
        </section>

        <AffiliateCTA
          destination="zuiverWaterKranen"
          campaign="omgekeerde-osmose"
          content="vergelijken-gedestilleerd-vs-osmose-cta"
          label="Bekijk de zuiver-water-kranen"
          title="Klaar voor zuiver water uit de kraan?"
          sub="Bekijk de zuiver-water-kranen (osmosesysteem met kraan) bij onze partner PureAqua."
        />

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
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
              ['/vergelijken/osmose-vs-bronwater', 'Osmose vs bronwater', 'Mineralen, zuiverheid en kosten'],
              ['/kennisbank/gedeioniseerd-water', 'Gedeioniseerd water', 'Demiwater uitgelegd'],
              ['/omgekeerde-osmose', 'Omgekeerde osmose', 'Werking en wanneer zinvol'],
              ['/osmose-water/remineralisatie', 'Remineralisatie', 'Mineralen terug voor de smaak'],
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
