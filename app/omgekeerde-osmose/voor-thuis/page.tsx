import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Osmose apparaat voor thuis — types, kosten & installatie',
  description:
    'Een osmose apparaat voor thuis installeren? Vergelijk alle types op prijs, capaciteit en gebruik. Van €150 basisfilter tot complete 4-in-1 kraan.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/voor-thuis' },
  openGraph: {
    title: 'Osmose apparaat voor thuis — welk systeem past bij jou?',
    description: 'Vergelijk osmose systemen voor thuisgebruik: basisfilter, systeem met tankje of 4-in-1 kraan. Eerlijke vergelijking op prijs en gebruik.',
  },
};

const faqItems = [
  {
    question: 'Welk osmose apparaat is het beste voor thuisgebruik?',
    answer:
      'Voor thuisgebruik is een systeem met 4-5 filterstappen, een ingebouwde permeaatpomp en minimaal 50-75 liter per dag capaciteit ideaal. Wil je ook kokend water, dan is een 4-in-1 kraan de meest complete oplossing.',
  },
  {
    question: 'Hoe installeer ik een osmose apparaat?',
    answer:
      'Installeer het systeem onder het aanrecht. Je sluit het aan op de koudwatertoevoer (met een saddle valve), de afvoer (voor spoelwater) en een aparte kraan op het werkblad. De meeste installaties duren 30–60 minuten.',
  },
  {
    question: 'Hoe vaak moet ik het filter onderhouden?',
    answer:
      'Pre-filters (sediment, koolstof) verwissel je elk 6–12 maanden. Het RO-membraan gaat 2–3 jaar mee. Bij een 4-in-1 systeem zoals PureAqua verwissel je het complete filterpatroon jaarlijks.',
  },
  {
    question: 'Hoeveel afvalwater produceert een osmose apparaat?',
    answer:
      'Goedkope systemen produceren 3–5 liter spoelwater per liter schoon water. Moderne systemen met permeaatpomp of zero-waste technologie bereiken een 1:1 verhouding. De PureAqua 4-in-1 heeft een geoptimaliseerd spoelapparaat.',
  },
  {
    question: 'Is osmose water geschikt voor koffie en thee?',
    answer:
      'Ja, osmose water is uitstekend voor koffie en thee. Geen kalk, geen chloor, neutrale smaak — baristas en theesommeliers kiezen bewust voor gefilterd water. Koffie uit een machine die is aangesloten op osmose water heeft een vollere, zuiverdere smaak.',
  },
];

const types = [
  {
    naam: 'Losse osmose filter',
    prijs: '€ 150 – 350',
    geschikt: 'Klein huishouden, alleen drinkwater',
    voor: ['Compact formaat', 'Laagste aanschafprijs', 'Eenvoudige installatie'],
    tegen: ['Alleen koud drinkwater', 'Apart kraantje nodig', 'Geen tank = lagere doorstroom'],
    highlight: false,
  },
  {
    naam: 'Osmose systeem met druktank',
    prijs: '€ 250 – 500',
    geschikt: 'Groter huishouden, hogere doorstroom',
    voor: ['Waterreserve in druktank', 'Stabiele druk bij afname', 'Geschikt voor groter gebruik'],
    tegen: ['Meer ruimte nodig', 'Tank kost extra onderhoud'],
    highlight: false,
  },
  {
    naam: 'PureAqua 4-in-1 kraan',
    prijs: '€ 699 – 899',
    geschikt: 'Complete keukenoplossing',
    voor: ['Kokend + koud + warm + bruisend', 'Osmose filter ingebouwd', 'Één jaarlijkse filterwissel', 'Stijlvol design, geen extra kraantje'],
    tegen: ['Hogere aanschafkosten'],
    highlight: true,
  },
];

export default function OsmoseVoorThuisPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Omgekeerde osmose', url: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
          { name: 'Voor thuis', url: 'https://waterfilterplatform.nl/omgekeerde-osmose/voor-thuis' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:text-[#005F8A]">Omgekeerde osmose</Link>
            <span className="mx-2">/</span>
            <span>Voor thuis</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmose apparaat voor thuis
          </h1>
          <p className="text-gray-600 text-lg">
            Een omgekeerde osmose systeem voor thuis geeft je puur drinkwater zonder kalk, chloor en nitraten. We vergelijken de drie hoofdtypen op prijs, capaciteit en geschiktheid voor jouw huishouden.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        {/* Wat filtert het? */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat filtert een osmose apparaat?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een omgekeerde osmose filter verwijdert 95–99% van alle opgeloste stoffen uit leidingwater. Dat is veel meer dan een koolstoffilter (Brita) of ionenwisselaar. Concreet verwijdert het:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { stof: 'Kalk (calcium/magnesium)', effect: '99% verwijderd' },
              { stof: 'Chloor', effect: '99% verwijderd' },
              { stof: 'Nitraten', effect: '95% verwijderd' },
              { stof: 'Pesticiden', effect: '99% verwijderd' },
              { stof: 'Microplastics', effect: '99% verwijderd' },
              { stof: 'Zware metalen', effect: '95–99% verwijderd' },
            ].map(s => (
              <div key={s.stof} className="bg-green-50 rounded-xl p-3 text-center">
                <p className="text-xs font-semibold text-green-800">{s.stof}</p>
                <p className="text-xs text-green-600 mt-0.5">{s.effect}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Types vergelijken */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Typen osmose systemen voor thuis</h2>
          <div className="space-y-4">
            {types.map(t => (
              <div
                key={t.naam}
                className={`rounded-2xl border p-5 ${t.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {t.naam}
                      {t.highlight && (
                        <span className="ml-2 text-xs bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full">Aanbevolen</span>
                      )}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">{t.geschikt}</p>
                  </div>
                  <p className="font-bold text-[#005F8A] shrink-0">{t.prijs}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1 text-xs">Voordelen</p>
                    <ul className="space-y-0.5">
                      {t.voor.map(v => <li key={v} className="text-green-700 text-xs">✓ {v}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1 text-xs">Aandachtspunten</p>
                    <ul className="space-y-0.5">
                      {t.tegen.map(v => <li key={v} className="text-gray-500 text-xs">− {v}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Installatie stap voor stap */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Installatie: stap voor stap</h2>
          <div className="space-y-3">
            {[
              { nr: 1, stap: 'Waterkraan afsluiten', desc: 'Sluit de koudwatertoevoer onder het aanrecht af.' },
              { nr: 2, stap: 'Saddle valve monteren', desc: 'Bevestig een aanboorkraan (saddle valve) op de koudwaterleiding voor de watertoevoer naar het systeem.' },
              { nr: 3, stap: 'Systeem aansluiten', desc: 'Sluit koud water aan op de inlaat. Verbind de afvoerslang met het sifon voor het spoelwater.' },
              { nr: 4, stap: 'Kraantje plaatsen', desc: 'Boor een gat in het aanrecht (35–38mm) voor de osmose kraan. Bij een 4-in-1 gebruik je dit gat ook voor de kokendwaterfunctie.' },
              { nr: 5, stap: 'Eerste flush uitvoeren', desc: 'Laat 2–3 liter spoelwater doorlopen voor ingebruikname. Dit reinigt het membraan.' },
            ].map(s => (
              <div key={s.nr} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#005F8A] text-white font-bold text-sm flex items-center justify-center shrink-0">
                  {s.nr}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{s.stap}</p>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Meer detail nodig?{' '}
            <Link href="/kennisbank/kokend-water-kraan-installeren" className="text-[#005F8A] hover:underline">
              Lees de uitgebreide installatieguide →
            </Link>
          </p>
        </section>

        {/* Jaarlijkse kosten */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Jaarlijkse kosten</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[400px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2 px-4 font-semibold text-[#003F5C]">Systeem</th>
                  <th className="py-2 px-3 font-semibold text-[#003F5C] text-right">Filterkosten/jr</th>
                  <th className="py-2 px-3 font-semibold text-[#003F5C] text-right">Filterwissel</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { naam: 'Losse osmose filter', kosten: '€ 60–120', wissel: '6–12 maanden' },
                  { naam: 'Osmose met druktank', kosten: '€ 80–150', wissel: '6–12 maanden' },
                  { naam: 'PureAqua 4-in-1', kosten: '€ 89', wissel: '1× per jaar (compleet)', highlight: true },
                ].map(r => (
                  <tr key={r.naam} className={r.highlight ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}>
                    <td className="py-2.5 px-4">{r.naam}</td>
                    <td className="py-2.5 px-3 text-right">{r.kosten}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.wissel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Ter vergelijking: flessenwater kost een gezin van 4 gemiddeld €400–600 per jaar.
          </p>
        </section>

        <CTABanner context="osmose" />

        {/* Meer lezen */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose: hoe werkt het?' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose filter kopen' },
              { href: '/omgekeerde-osmose/wat-is-osmose-water', label: 'Is osmose water gezond?' },
              { href: '/kokend-water-kraan/met-filter', label: 'Kokend water kraan met filter' },
              { href: '/kennisbank/osmose-water-drinken', label: 'Osmose water drinken — gezond?' },
              { href: '/waterhardheid', label: 'Waterhardheid per gemeente' },
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

        {/* FAQ */}
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
