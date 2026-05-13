import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Heet water kraan — direct heet water uit de kraan (2026)',
  description:
    'Een heet water kraan geeft direct 100°C water zonder wachten. Vergelijk de beste modellen, lees hoe het werkt en welk systeem bij jou past.',
  alternates: { canonical: 'https://waterfilterplatform.nl/heet-water-kraan' },
  openGraph: {
    title: 'Heet water kraan — direct 100°C water uit de kraan',
    description: 'Alles over de heet water kraan: werking, merken, kosten en de beste keuze voor jouw keuken.',
  },
};

const faqItems = [
  {
    question: 'Wat is een heet water kraan?',
    answer:
      'Een heet water kraan (ook kokend water kraan of kokendwaterkraan) levert direct water van 100°C uit de kraan. Het water wordt in een geïsoleerd reservoir onder het aanrecht constant op temperatuur gehouden, klaar voor gebruik.',
  },
  {
    question: 'Wat is het verschil tussen een heet water kraan en een waterkoker?',
    answer:
      'Een waterkoker kook je los op, duurt 2-4 minuten en neemt ruimte in op het aanrecht. Een heet water kraan levert instant kokend water, spaart werkbladruimte en is op de lange termijn energiezuiniger dan dagelijks een volle waterkoker opkoken.',
  },
  {
    question: 'Hoe veilig is een heet water kraan?',
    answer:
      'Moderne heet water kranen hebben een dubbele veiligheidsontgrendeling. Je moet bewust draaien én drukken om kokend water te activeren. De buitenkant van de kraan wordt niet heet. Kinderslot is standaard of optioneel beschikbaar.',
  },
  {
    question: 'Kan een heet water kraan ook filteren?',
    answer:
      'Ja. Een 4-in-1 heet water kraan met omgekeerde osmose filter geeft kokend, koud, warm én bruisend water — allemaal gefilterd. Kalk, chloor en nitraten worden verwijderd voor puurder water en betere koffie- en theesmaak.',
  },
  {
    question: 'Wat kost een heet water kraan?',
    answer:
      'Een basismodel heet water kraan kost €500–1.000 inclusief installatie. Een complete 4-in-1 kraan met osmosefilter (PureAqua) kost €699–899 en is zelf te installeren. Quooker modellen kosten €1.500–2.800 inclusief loodgieterkosten.',
  },
];

const vergelijking = [
  {
    systeem: 'Heet water kraan (basis)',
    prijs: '€ 500–1.000',
    functies: ['Kokend water (100°C)'],
    filter: false,
    highlight: false,
  },
  {
    systeem: 'PureAqua 4-in-1',
    prijs: '€ 699–899',
    functies: ['Kokend water (100°C)', 'Koud gefilterd', 'Warm water', 'Bruisend water'],
    filter: true,
    highlight: true,
  },
  {
    systeem: 'Quooker Combi+',
    prijs: '€ 1.500–2.000',
    functies: ['Kokend water (100°C)'],
    filter: false,
    highlight: false,
  },
  {
    systeem: 'Quooker Fusion + CUBE',
    prijs: '€ 2.200–2.800',
    functies: ['Kokend water', 'Koud water', 'Bruisend water'],
    filter: false,
    highlight: false,
  },
];

export default function HeetWaterKraanPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Heet water kraan', url: 'https://waterfilterplatform.nl/heet-water-kraan' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Heet water kraan</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Heet water kraan
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Een heet water kraan geeft direct 100°C water uit de kraan — geen waterkoker meer nodig. Je kiest tussen een eenvoudig kokend-watermodel en een complete 4-in-1 kraan met ingebouwde osmosefilter voor puur, heet, koud en bruisend water.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kokend-water-kraan/vergelijken"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Merken vergelijken →
            </Link>
            <Link
              href="/kokend-water-kraan/met-filter"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Kraan met filter
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        {/* Hoe het werkt */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt een heet water kraan?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een heet water kraan bestaat uit twee onderdelen: de kraan zelf op het aanrecht, en een geïsoleerd reservoir onder het aanrecht. Het reservoir houdt het water constant op 100°C (of iets hoger om schuimen te voorkomen). Zodra je de kraan activeert met de veiligheidsvergrendeling, stroomt het hete water direct door.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 grid grid-cols-3 gap-4 text-center text-sm">
            {[
              { nr: '1', label: 'Reservoir vult zich', desc: 'Met koudwater uit de leiding' },
              { nr: '2', label: 'Constant 100°C', desc: 'Energiezuinig stand-by systeem' },
              { nr: '3', label: 'Direct gebruik', desc: 'Veiligheidsvergrendeling → hete stroom' },
            ].map(s => (
              <div key={s.nr} className="bg-white rounded-xl p-3">
                <div className="w-7 h-7 bg-[#005F8A] text-white rounded-full flex items-center justify-center font-bold text-xs mx-auto mb-2">
                  {s.nr}
                </div>
                <p className="font-semibold text-gray-800 text-xs">{s.label}</p>
                <p className="text-gray-500 text-xs mt-0.5">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Voordelen vs waterkoker */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Heet water kraan vs waterkoker</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-4 font-semibold text-[#003F5C]"></th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-center">Heet water kraan</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-center">Waterkoker</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: 'Wachttijd', kraan: 'Direct (0 sec)', koker: '2–4 minuten' },
                  { aspect: 'Aanrechtruimte', kraan: 'Geen extra apparaat', koker: 'Neemt werkblad in beslag' },
                  { aspect: 'Energieverbruik', kraan: '10–30W stand-by', koker: 'Hoog bij meerdere keer/dag' },
                  { aspect: 'Kalkfiltering', kraan: 'Optioneel (met osmose)', koker: 'Geen' },
                  { aspect: 'Aanschafkosten', kraan: '€699–2.800', koker: '€20–100' },
                  { aspect: 'Bruisend water', kraan: 'Optioneel (4-in-1)', koker: 'Nee' },
                ].map(r => (
                  <tr key={r.aspect} className="border-b border-gray-100">
                    <td className="py-2.5 px-4 text-gray-700 font-medium">{r.aspect}</td>
                    <td className="py-2.5 px-3 text-center text-green-700">{r.kraan}</td>
                    <td className="py-2.5 px-3 text-center text-gray-500">{r.koker}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Systemen vergelijken */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welk systeem kies je?</h2>
          <div className="space-y-3">
            {vergelijking.map(v => (
              <div
                key={v.systeem}
                className={`rounded-2xl border p-4 ${v.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="font-bold text-gray-900">{v.systeem}</span>
                    {v.highlight && (
                      <span className="ml-2 text-xs bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full">Aanbevolen</span>
                    )}
                  </div>
                  <span className="font-semibold text-[#005F8A] shrink-0 text-sm">{v.prijs}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {v.functies.map(f => (
                    <span key={f} className="text-xs bg-white border border-gray-200 rounded-full px-2 py-0.5 text-gray-600">{f}</span>
                  ))}
                  {v.filter && (
                    <span className="text-xs bg-green-100 text-green-800 border border-green-200 rounded-full px-2 py-0.5">Osmosefilter ingebouwd</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">Prijzen indicatief inclusief installatie. Bijgewerkt mei 2026.</p>
        </section>

        {/* Wanneer welke keuze */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kies je welk systeem?</h2>
          <div className="space-y-3">
            {[
              {
                situatie: 'Je wilt puur kokend water, laagste prijs',
                advies: 'Een basismodel heet water kraan (€500–1.000) doet het werk. Let op: geen filter, kalk blijft aanwezig.',
              },
              {
                situatie: 'Je wilt ook gefilterd en bruisend water',
                advies: 'PureAqua 4-in-1 — kokend, koud, warm en bruisend uit één kraan, met osmosefilter. Beste prijs-kwaliteit.',
              },
              {
                situatie: 'Je hebt hard water en wil kalkaanslag voorkomen',
                advies: 'Kies altijd een systeem met ingebouwde osmosefilter. Zonder filter geeft een heet water kraan ongefilterd hard water.',
              },
              {
                situatie: 'Je merknaam is belangrijk',
                advies: 'Quooker is het bekendste merk, maar betaal je 2–3× meer. De PureAqua biedt meer functies voor minder geld.',
              },
            ].map(s => (
              <div key={s.situatie} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">→</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{s.situatie}</p>
                  <p className="text-sm text-gray-600">{s.advies}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTABanner context="kokend" />

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kokend-water-kraan', label: 'Kokend water kraan: complete gids' },
              { href: '/kokend-water-kraan/vergelijken', label: 'Alle merken vergelijken + TCO' },
              { href: '/kokend-water-kraan/met-filter', label: 'Kraan met waterfilter' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose uitleg' },
              { href: '/kennisbank/kokend-water-kraan-installeren', label: 'Zelf installeren: stap-voor-stap' },
              { href: '/kennisbank/kalk-in-huis', label: 'Kalk in huis: oorzaken en oplossingen' },
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
