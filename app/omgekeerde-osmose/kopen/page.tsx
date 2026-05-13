import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Reverse osmosis filter kopen — de beste keuze in 2026',
  description:
    'Wil je een osmose filter kopen? Vergelijk de beste reverse osmosis systemen voor thuis en ontdek welke het beste bij jou past.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/kopen' },
};

const faqItems = [
  {
    question: 'Wat kost een osmose filter voor thuis?',
    answer:
      'Een standaard osmose filter kost tussen €150 en €400. Een 4-in-1 kokend water kraan met ingebouwd osmose filter kost €699–899 en combineert alle waterfuncties in één apparaat.',
  },
  {
    question: 'Kan ik een osmose filter zelf installeren?',
    answer:
      'Ja, de meeste systemen zijn ontworpen voor zelfinstallatie. Je sluit het aan op de koudwatertoevoer en de afvoer onder het aanrecht. Gemiddeld duurt dit 30-60 minuten.',
  },
  {
    question: 'Hoe weet ik of een osmose filter goed werkt?',
    answer:
      'Je kunt een TDS-meter gebruiken (Total Dissolved Solids). Leidingwater heeft doorgaans 200-500 ppm TDS. Na osmosefiltering daalt dit naar 5-30 ppm.',
  },
  {
    question: 'Wat is het verschil tussen een losse osmose filter en een 4-in-1 kraan?',
    answer:
      'Een losse osmose filter filtert alleen het water en je drinkt het via een aparte kraantje. Een 4-in-1 kraan combineert de osmosefilter met een kokend, koud en warm waterfunctie in één elegante keukeninstallatie.',
  },
];

const opties = [
  {
    naam: 'Basismodel osmose filter',
    prijs: '€ 150 – 300',
    geschiktVoor: 'Drinkwater filteren',
    voordelen: ['Goedkoop', 'Klein', 'Eenvoudig'],
    nadelen: ['Alleen koud water', 'Apart kraantje nodig', 'Geen kokend water'],
    aanbevolen: false,
  },
  {
    naam: 'Osmose filter met boostpomp',
    prijs: '€ 300 – 500',
    geschiktVoor: 'Lage waterdruk & efficiëntie',
    voordelen: ['Werkt bij lage druk', 'Minder afvalwater', 'Snellere doorstroom'],
    nadelen: ['Duurder', 'Alleen koud gefilterd water'],
    aanbevolen: false,
  },
  {
    naam: 'PureAqua 4-in-1 kraan',
    prijs: '€ 699 – 899',
    geschiktVoor: 'Complete keukeninstallatie',
    voordelen: ['Kokend + koud + warm + bruisend', 'Osmose filter ingebouwd', 'Één kraan, alles in één', 'Eén jaarlijkse filterwissel'],
    nadelen: ['Hogere aanschafprijs'],
    aanbevolen: true,
  },
];

export default function OsmoseKopenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Omgekeerde osmose', url: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
          { name: 'Kopen', url: 'https://waterfilterplatform.nl/omgekeerde-osmose/kopen' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:text-[#005F8A]">Omgekeerde osmose</Link>
            <span className="mx-2">/</span>
            <span>Kopen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Reverse osmosis filter kopen
          </h1>
          <p className="text-gray-600 text-lg">
            Een osmose waterfilter kopen? Er zijn verschillende systemen: van een eenvoudig filter onder het aanrecht tot een complete 4-in-1 kraan met kokend water. We helpen je de juiste keuze maken.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        {/* Vergelijking opties */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Welk osmose systeem past bij jou?</h2>
          <div className="space-y-4">
            {opties.map(o => (
              <div
                key={o.naam}
                className={`rounded-2xl border p-5 ${o.aanbevolen ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900">{o.naam}</h3>
                    <p className="text-sm text-gray-500">{o.geschiktVoor}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-[#005F8A]">{o.prijs}</p>
                    {o.aanbevolen && (
                      <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full">Aanbevolen</span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Voordelen</p>
                    <ul className="space-y-0.5">
                      {o.voordelen.map(v => (
                        <li key={v} className="text-green-700">✓ {v}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Nadelen</p>
                    <ul className="space-y-0.5">
                      {o.nadelen.map(n => (
                        <li key={n} className="text-gray-500">− {n}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Waar op letten */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waar let je op bij het kopen?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { titel: 'Capaciteit', tekst: 'Hoeveel liter water filtert het systeem per dag? Voor een gezin heb je minimaal 50-100 liter per dag nodig.' },
              { titel: 'Aantal filterstappen', tekst: 'Meer filterstappen = betere zuivering. Een goed systeem heeft minimaal 4-5 stappen inclusief RO-membraan.' },
              { titel: 'Afvalwater ratio', tekst: 'Goedkope systemen verspillen 3-5 liter per liter schoon water. Zoek naar een systeem met 1:1 of 2:1 verhouding.' },
              { titel: 'Filterkosten', tekst: 'Reken de jaarlijkse filterkosten mee. Goedkoop instapmodel + dure filters kan duurder uitvallen dan een kwalitatief systeem.' },
            ].map(p => (
              <div key={p.titel} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{p.titel}</p>
                <p className="text-sm text-gray-600">{p.tekst}</p>
              </div>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />

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
