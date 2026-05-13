import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Kokend water kraan met waterfilter — 4-in-1 kraan',
  description:
    'Een kokend water kraan met waterfilter: voordelen, werking en de beste modellen. Ontdek waarom een 4-in-1 kraan met osmosefilter de slimste keuze is.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/met-filter' },
  openGraph: {
    title: 'Kokend water kraan met waterfilter — 4-in-1 kraan',
    description: 'Een kokend water kraan mét osmosefilter: puur water, kokend, koud en bruisend. De beste 4-in-1 systemen vergeleken.',
  },
};

const faqItems = [
  {
    question: 'Wat is een kokend water kraan met filter?',
    answer:
      'Een kokend water kraan met filter combineert een kokendwaterfunctie met een waterfilter. De meest complete variant is een 4-in-1 kraan met omgekeerde osmose: je krijgt kokend, koud, warm en bruisend water — allemaal gefilterd via een osmosemembraan.',
  },
  {
    question: 'Waarom een osmosefilter bij een kokend water kraan?',
    answer:
      'Zonder filter geeft een kokend water kraan ongefilterd leidingwater — inclusief kalk, chloor en eventuele verontreinigingen. Met een osmosefilter is het water vrijwel puur H₂O, wat beter smaakt, geen kalk geeft in je apparaten en gezonder is.',
  },
  {
    question: 'Is een 4-in-1 kraan duurder in gebruik?',
    answer:
      'Nee. De jaarlijkse filterkosten zijn €50-100. Combineer je dit met de besparing op flessenwater en waterkoker, dan verdient een 4-in-1 kraan zichzelf binnen 2-3 jaar terug.',
  },
];

export default function MetFilterPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kokend water kraan', url: 'https://waterfilterplatform.nl/kokend-water-kraan' },
          { name: 'Met filter', url: 'https://waterfilterplatform.nl/kokend-water-kraan/met-filter' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:text-[#005F8A]">Kokend water kraan</Link>
            <span className="mx-2">/</span>
            <span>Met filter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan met waterfilter
          </h1>
          <p className="text-gray-600 text-lg">
            Een kokend water kraan met ingebouwde filter combineert het gemak van direct kokend water met puur, gefilterd drinkwater. De beste modellen gebruiken omgekeerde osmose voor maximale zuivering.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        <section className="prose max-w-none">
          <h2>Waarom een kokend water kraan zonder filter tekortschiet</h2>
          <p>
            De meeste kokend water kranen — inclusief de populaire Quooker — filteren het water niet. Je krijgt kokend leidingwater, inclusief kalk en chloor. Dat betekent:
          </p>
          <ul>
            <li>Kalkafzetting in je ketel en het reservoir van de kraan</li>
            <li>Een lichte chloor- of kalksmaak in thee en koffie</li>
            <li>Regelmatig ontkalken nodig</li>
          </ul>
          <p>
            Een kokend water kraan <strong>met</strong> osmosefilter lost dit probleem op. Het water wordt eerst gefilterd, dan verwarmd. Geen kalk, geen chloor, altijd schoon.
          </p>

          <h2>Wat zijn de voordelen van een 4-in-1 kraan?</h2>
        </section>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          {[
            { icon: '♨️', label: 'Kokend water', sub: '100°C direct' },
            { icon: '❄️', label: 'Koud water', sub: 'gefilterd & fris' },
            { icon: '🌡️', label: 'Warm water', sub: 'gewone temperatuur' },
            { icon: '🫧', label: 'Bruisend water', sub: 'gefilterd & koolzuur' },
          ].map(f => (
            <div key={f.label} className="bg-[#E0F2FE] rounded-xl p-3">
              <div className="text-2xl mb-1">{f.icon}</div>
              <p className="font-semibold text-gray-800 text-sm">{f.label}</p>
              <p className="text-xs text-gray-500">{f.sub}</p>
            </div>
          ))}
        </div>

        <section className="prose max-w-none">
          <h2>Één filterwisseling per jaar</h2>
          <p>
            Bij de PureAqua 4-in-1 kraan verwissel je jaarlijks één filterpatroon. Dat omvat sedimentfilter, koolstoffilter én het RO-membraan in één module. Geen gedoe met losse filterstappen, geen vergeten filterwissel.
          </p>
        </section>

        <CTABanner context="kokend" />

        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kokend-water-kraan', label: 'Kokend water kraan: complete gids' },
              { href: '/kokend-water-kraan/vergelijken', label: 'Merken vergelijken (PureAqua vs Quooker)' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose uitleg' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose filter kopen' },
              { href: '/kennisbank/kokend-water-kraan-installeren', label: 'Zelf installeren: stap-voor-stap' },
              { href: '/kennisbank/waterfilter-vergelijken', label: 'Alle waterfilters vergelijken' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>→</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">▾</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
