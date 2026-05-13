import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Omgekeerde osmose filter — wat is het en hoe werkt het?',
  description:
    'Alles over omgekeerde osmose (RO): hoe werkt het, wat zijn de voordelen, en welk osmose filter past bij jou? Lees de volledige gids.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
  openGraph: {
    title: 'Omgekeerde osmose filter — uitleg en koopadvies',
    description: 'De complete gids over omgekeerde osmose waterfilters voor thuis.',
    url: 'https://waterfilterplatform.nl/omgekeerde-osmose',
  },
};

const faqItems = [
  {
    question: 'Hoe werkt omgekeerde osmose?',
    answer:
      'Bij omgekeerde osmose wordt water onder hoge druk door een semi-permeabel membraan geperst. Het membraan heeft microscopisch kleine poriën die vrijwel alle opgeloste stoffen tegenhouden — mineralen, kalk, chloor, nitraten, pesticiden en bacteriën. Wat overblijft is vrijwel puur H₂O.',
  },
  {
    question: 'Is osmose water gezond om te drinken?',
    answer:
      'Osmose water is veilig om te drinken. Het mist wel mineralen die normaal in leidingwater zitten. Voor dagelijks gebruik is dit geen bezwaar als je gevarieerd eet. Veel mensen waarderen de neutrale, schone smaak.',
  },
  {
    question: 'Hoeveel water verbruikt een osmose filter?',
    answer:
      'Traditionele osmose systemen verbruiken 3-5 liter spoelwater per liter gefilterd water. Moderne systemen met permeaatpomp zijn efficiënter: 1-1,5 liter spoelwater per liter schoon water.',
  },
  {
    question: 'Hoe vaak moet ik het osmose filter vervangen?',
    answer:
      'Het membraan gaat 2-3 jaar mee. Voorfilters (sediment en koolstof) vervang je elk 6-12 maanden. Bij een 4-in-1 kraan van PureAqua vervang je het filterpatroon jaarlijks.',
  },
  {
    question: 'Kan ik een osmose filter zelf installeren?',
    answer:
      'Ja. Moderne osmose systemen zijn ontworpen voor doe-het-zelf installatie. Je sluit het aan op de koudwatertoevoer onder het aanrecht. De meeste installaties duren 30-60 minuten.',
  },
];

export default function OmgekeerdeOsmosePage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Omgekeerde osmose', url: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Omgekeerde osmose</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Omgekeerde osmose filter
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Omgekeerde osmose (RO) is de meest effectieve manier om leidingwater te filteren. Het systeem verwijdert 95-99% van alle opgeloste stoffen — kalk, chloor, nitraten, pesticiden en microplastics — voor kristalhelder, smaakloos drinkwater.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/omgekeerde-osmose/kopen" className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm">
              Osmose filter kopen →
            </Link>
            <Link href="/omgekeerde-osmose/wat-is-osmose-water" className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm">
              Wat is osmose water?
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        {/* Hoe werkt het */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt omgekeerde osmose?</h2>
          <p className="text-gray-600 mb-4">
            Normaal osmose is een natuurlijk proces waarbij water van een minder geconcentreerde naar een meer geconcentreerde oplossing stroomt door een membraan. Bij <strong>omgekeerde osmose</strong> wordt dit proces omgedraaid: door waterdruk (4-6 bar) wordt water door het semi-permeabele membraan geperst van geconcentreerd naar ongeconcentreerd.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm">
            {[
              { stap: '1', label: 'Sedimentfilter', desc: 'Verwijdert zand, slib en grotere deeltjes' },
              { stap: '2', label: 'Koolstoffilter', desc: 'Verwijdert chloor, geur en kleur' },
              { stap: '3', label: 'RO-membraan', desc: 'Filtert 99% van alle opgeloste stoffen' },
            ].map(s => (
              <div key={s.stap} className="bg-white rounded-xl p-4">
                <div className="w-8 h-8 bg-[#005F8A] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">
                  {s.stap}
                </div>
                <p className="font-semibold text-gray-800">{s.label}</p>
                <p className="text-gray-500 text-xs mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Voordelen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voordelen van osmose water</h2>
          <ul className="space-y-3">
            {[
              { icon: '✓', text: 'Verwijdert 99% van kalk, nitraten, pesticiden, medicijnresten en microplastics' },
              { icon: '✓', text: 'Neutraal van smaak — geen chloor of kalkafzetting' },
              { icon: '✓', text: 'Beschermt koffiemachine, waterkoker en stoomoven tegen kalkaanslag' },
              { icon: '✓', text: 'Geen plastic flesjes nodig — goed voor het milieu' },
              { icon: '✓', text: 'Eenvoudig thuis te installeren, onderhoud 1x per jaar' },
            ].map(v => (
              <li key={v.text} className="flex gap-3 items-start">
                <span className="text-green-500 font-bold mt-0.5">{v.icon}</span>
                <span className="text-gray-700">{v.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Subcategorieën */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/omgekeerde-osmose/kopen', title: 'Osmose filter kopen', desc: 'Welk systeem past bij jou? Vergelijking van de beste osmose filters.' },
              { href: '/omgekeerde-osmose/wat-is-osmose-water', title: 'Wat is osmose water?', desc: 'Is osmose water gezond? Wat zijn de eigenschappen en hoe smaakt het?' },
              { href: '/omgekeerde-osmose/voor-thuis', title: 'Osmose apparaat voor thuis', desc: 'Welk type osmose systeem past het best in een woonhuis?' },
              { href: '/kennisbank', title: 'Kennisbank', desc: 'Diepgaande artikelen over waterkwaliteit en waterfilters.' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">{l.title}</p>
                <p className="text-sm text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over osmose</h2>
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
