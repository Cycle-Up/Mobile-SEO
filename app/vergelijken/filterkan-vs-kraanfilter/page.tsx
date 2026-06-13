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
    title: 'Filterkan vs kraanfilter: welke kies je? (2026)',
    description:
      'Filterkan of opzet-kraanfilter? Vergelijk wat ze verwijderen, gemak, kosten en onderhoud, en wanneer osmose een betere keuze is.',
    alternates: { canonical: 'https://waterfilterplatform.nl/vergelijken/filterkan-vs-kraanfilter' },
    openGraph: {
      title: 'Filterkan vs kraanfilter vergeleken (2026)',
      description: 'Wat verwijderen ze, wat kosten ze en wanneer is osmose beter?',
      url: 'https://waterfilterplatform.nl/vergelijken/filterkan-vs-kraanfilter',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is het verschil tussen een filterkan en een kraanfilter?',
    answer:
      'Een filterkan is een losse kan met een koolstoffilter waar je water doorheen giet; een kraanfilter schroef je op de kraan of plaats je eronder, zodat gefilterd water direct uit de kraan komt. Beide werken vooral met actief kool en richten zich op chloor, smaak en geur. Geen van beide verwijdert kalk, nitraat of lood zo grondig als omgekeerde osmose.',
  },
  {
    question: 'Verwijdert een filterkan of kraanfilter kalk?',
    answer:
      'Niet structureel. De meeste filterkannen en kraanfilters werken met actief kool en eventueel een ionenwisselaartje, wat de hardheid hooguit tijdelijk en beperkt verlaagt. Voor echt kalkvrij water aan het tappunt is omgekeerde osmose of een waterontharder nodig.',
  },
  {
    question: 'Wat is goedkoper in gebruik?',
    answer:
      'Een filterkan is goedkoop in aanschaf, maar de patronen moeten vaak (elke maand) worden vervangen. Een kraanfilter heeft soms een langere patroonlevensduur. Reken bij beide de jaarlijkse patroonkosten mee; over meerdere jaren lopen die op.',
  },
];

const vergelijking = [
  { naam: 'Kraanfilter', verwijdert: 'Chloor, smaak, geur', gemak: 'Direct uit de kraan', kosten: 'Laag-middel', filter: 'Actief kool' },
  { naam: 'Filterkan', verwijdert: 'Chloor, smaak, geur', gemak: 'Gieten en wachten', kosten: 'Laag', filter: 'Actief kool' },
  { naam: 'Omgekeerde osmose', verwijdert: 'Ook lood, nitraat, PFAS, kalk', gemak: 'Eigen kraan', kosten: 'Hoger', filter: 'Membraan + kool', highlight: true },
];

export default function FilterkanVsKraanfilterPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Filterkan vs kraanfilter: welke kies je?',
          description: 'Vergelijking van filterkan en kraanfilter op verwijdering, gemak, kosten en onderhoud.',
          datePublished: '2026-06-02',
          dateModified: '2026-06-02',
          url: 'https://waterfilterplatform.nl/vergelijken/filterkan-vs-kraanfilter',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/vergelijken' },
          { name: 'Filterkan vs kraanfilter', url: 'https://waterfilterplatform.nl/vergelijken/filterkan-vs-kraanfilter' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:text-[#005F8A]">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Filterkan vs kraanfilter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Filterkan vs kraanfilter: welke kies je?</h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>Filterkannen</strong> en <strong>kraanfilters</strong> richten zich allebei op chloor, smaak
            en geur. We vergelijken ze op verwijdering, gemak, kosten en onderhoud, en laten zien wanneer osmose beter past.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/filterkan" className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm">Over filterkannen</Link>
            <Link href="/vergelijken/osmose-vs-filterkan" className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm">Osmose vs filterkan</Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-06-02" sources={['RIVM', 'NSF/ANSI normen', 'KWR Water Research Institute']} />
        <AuthorBox datePublished="2026-06-02" />

        <QuickAnswer
          question="Filterkan of kraanfilter?"
          answer="Beide gebruiken vooral actief kool en verbeteren chloor, smaak en geur, maar verwijderen geen kalk, nitraat of lood grondig. Een kraanfilter geeft direct gefilterd water uit de kraan; een filterkan is goedkoper maar vraagt gieten en wachten en vaak frequenter patroonwissel. Wil je ook lood, nitraat of PFAS aanpakken, dan is omgekeerde osmose de betere keuze."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Naast elkaar</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Verwijdert</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Gemak</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Kosten</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Filter</th>
                </tr>
              </thead>
              <tbody>
                {vergelijking.map(a => (
                  <tr key={a.naam} className={`border-b border-gray-100 ${a.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">{a.naam}</th>
                    <td className="py-2.5 px-3 text-gray-700">{a.verwijdert}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.gemak}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.kosten}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.filter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-1">Indicatief overzicht; gecertificeerde prestaties verschillen per product. Bijgewerkt juni 2026.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kies je wat?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              ['Kies een kraanfilter als...', 'Je direct gefilterd water uit de kraan wilt zonder te gieten en wachten.'],
              ['Kies een filterkan als...', 'Je een goedkope, flexibele oplossing zoekt en gieten geen bezwaar is.'],
              ['Kies osmose als...', 'Je ook lood, nitraat, PFAS of kalk wilt verwijderen.'],
              ['Let op de patronen...', 'Reken bij beide de jaarlijkse patroonkosten en wisselfrequentie mee.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer lezen? Bekijk <Link href="/filterkan" className="text-[#005F8A] underline">filterkannen</Link>,{' '}
            <Link href="/filtertechnieken/actief-kool" className="text-[#005F8A] underline">actief kool</Link> of{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">een osmosesysteem kopen</Link>.
          </p>
        </section>

        <AffiliateCTA
          destination="zuiverWaterKranen"
          campaign="omgekeerde-osmose"
          content="vergelijken-filterkan-vs-kraanfilter-cta"
          label="Meer dan een filterkan: osmosesysteem met kraan"
          title="Klaar voor zuiver water uit de kraan?"
          sub="Bekijk de zuiver-water-kranen (osmosesysteem met kraan) bij onze partner PureAqua."
        />

        <CTABanner context="algemeen" />

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
              ['/vergelijken/osmose-vs-filterkan', 'Osmose vs filterkan', 'Prestaties, kosten en keuze'],
              ['/vergelijken/actief-kool-vs-osmose', 'Actief kool vs osmose', 'Wat verwijdert wat'],
              ['/filterkan', 'Filterkannen', 'Werking en keuze'],
              ['/omgekeerde-osmose/kopen', 'Osmosesysteem kopen', 'Wat moet je weten'],
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
