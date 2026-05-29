import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Osmosefilter prijs 2026: aanschaf en jaarkosten vergelijking',
  description:
    'Osmosefilter prijzen 2026: instap €100–200, midden €200–400, premium 4-in-1 €800–1500. Jaarlijkse filterkosten, installatie en 5-jaar TCO vergelijking.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/prijs' },
  openGraph: {
    title: 'Osmosefilter prijs 2026: aanschaf en jaarkosten',
    description:
      'Complete prijsoverzicht voor osmosefilters: van instapmodellen tot premium 4-in-1 systemen. 5-jaar kostenvergelijking.',
    url: 'https://waterfilterplatform.nl/osmose-filter/prijs',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat kost een osmosefilter aanschaffen?',
    answer:
      'De aanschafprijs varieert sterk per type: instapmodellen kosten €100–200 (basis 4-staps under-sink), middenklasse systemen €200–400 (met pomp of tankloze doorstroom), en premium 4-in-1 kranen (met kokendwaterfunctie) €800–1.500. Tel er installatie bij op: DIY is gratis; een loodgieter rekent €100–200.',
  },
  {
    question: 'Wat zijn de jaarlijkse kosten van een osmosefilter?',
    answer:
      'Jaarlijkse filterkosten bedragen €50–150 afhankelijk van het systeem. Instapmodellen hebben losse patronen voor €15–30 per stuk (3–4 stuks per jaar). Premium 4-in-1 systemen gebruiken één jaarmodule van €80–150. Voeg €5–20 toe voor extra waterverbruik en een paar euro voor eventuele pomp-elektriciteit.',
  },
  {
    question: 'Is een duur osmosefilter beter dan een goedkoop systeem?',
    answer:
      'Duurdere systemen bieden doorgaans betere membraankwaliteit, hogere capaciteit, minder afvalwater (permeaatpomp), tank-loze doorstroming, remineralisatie en langere garantie. Het RO-filterprincipe is hetzelfde over alle prijsklassen. Een instapmodel filtert ook effectief — het verschil zit in gebruiksgemak, flow rate en duurzaamheid op lange termijn.',
  },
  {
    question: 'Wat kost installatie van een osmosefilter?',
    answer:
      'De meeste under-sink systemen zijn zelf te installeren in 30–60 minuten. Je hebt een boor nodig voor het aanrecht-kraangat. Een loodgieter rekent €100–200 voor installatie. Voor een 4-in-1 kokend water kraan met osmosesysteem is een installateur aan te raden vanwege de elektrische aansluiting: €150–300.',
  },
  {
    question: 'Hoeveel bespaar je op flessenwater met een osmosefilter?',
    answer:
      'Een gemiddeld gezin van 4 personen dat overstapt van flessenwater naar osmosewater bespaart €400–600 per jaar. Bij een investering van €300 (instap) tot €1.500 (premium 4-in-1) is de terugverdientijd 1–4 jaar. Daarna is elk jaar pure besparing, inclusief minder plastic afval.',
  },
  {
    question: 'Wat is het prijsverschil tussen een tankloze en een tank-osmosefilter?',
    answer:
      'Een systeem met drukvat (tank) kost €100–300 meer dan een basismodel, maar levert directe waterstroom zonder wachten. Tankloze systemen zijn nieuwer, compacter en hygiënischer (geen stilstaand water) maar zijn duurder in aanschaf (€250–500). Voor intensief gebruik is een tankloos systeem de betere investering.',
  },
];

const prijsklassen = [
  {
    klasse: 'Instap',
    prijs: '€ 100–200',
    jaarKosten: '€ 50–80',
    kenmerken: ['4-staps RO onder aanrecht', 'Drukvat inclusief', 'DIY installatie', 'Capaciteit 50–75 L/dag', '3:1 spoelwater ratio'],
    ideal: '1–2 personen, eerste kennismaking met RO',
    highlight: false,
  },
  {
    klasse: 'Middenklasse',
    prijs: '€ 200–400',
    jaarKosten: '€ 70–120',
    kenmerken: ['Permeaatpomp (1:1 ratio)', 'Tankloos of compact tank', 'Remineralisatiepatroon mogelijk', 'Capaciteit 75–150 L/dag', 'Betere membraankwaliteit'],
    ideal: '2–4 personen, dagelijks gebruik',
    highlight: false,
  },
  {
    klasse: 'Premium',
    prijs: '€ 400–800',
    jaarKosten: '€ 80–130',
    kenmerken: ['Hoge capaciteit 150–300 L/dag', 'Ingebouwde booster pomp', 'LED TDS-display', 'Remineralisatie standaard', '5+ jaar garantie'],
    ideal: 'Gezin 4+, intensief gebruik, hoge eisen',
    highlight: false,
  },
  {
    klasse: '4-in-1 kraan met osmose',
    prijs: '€ 800–1.500',
    jaarKosten: '€ 100–150',
    kenmerken: ['RO + kokend + koud + bruisend', 'Één elegante kraan aan het aanrecht', 'Jaarlijkse all-in filtermodule', 'Geïntegreerde boiler', 'Professionele installatie'],
    ideal: 'Wie het maximale comfort wil + geen extra kraan',
    highlight: false,
  },
];

const tcoVergelijking = [
  {
    optie: 'Flessenwater (4 pers.)',
    aanschaf: '€ 0',
    installatieKosten: '€ 0',
    jaarFilters: '€ 0',
    jaarKosten: '€ 480–600',
    vijfJaar: '€ 2.400–3.000',
  },
  {
    optie: 'Instap osmosefilter',
    aanschaf: '€ 150',
    installatieKosten: '€ 0 (DIY)',
    jaarFilters: '€ 60',
    jaarKosten: '€ 70',
    vijfJaar: '€ 500–550',
  },
  {
    optie: 'Middenklasse osmosefilter',
    aanschaf: '€ 300',
    installatieKosten: '€ 100',
    jaarFilters: '€ 90',
    jaarKosten: '€ 100',
    vijfJaar: '€ 900–1.000',
  },
  {
    optie: '4-in-1 kraan met osmose',
    aanschaf: '€ 1.100',
    installatieKosten: '€ 200',
    jaarFilters: '€ 130',
    jaarKosten: '€ 150',
    vijfJaar: '€ 2.050',
  },
];

export default function OsmoseFilterPrijsPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Osmosefilter prijs 2026: aanschaf en jaarkosten',
          description:
            'Complete prijsoverzicht voor osmosefilters in 2026: instap tot premium 4-in-1 systemen, inclusief jaarkosten, installatie en 5-jaar TCO vergelijking.',
          datePublished: '2026-01-05',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/osmose-filter/prijs',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Osmose filter', url: 'https://waterfilterplatform.nl/osmose-filter' },
          { name: 'Prijs', url: 'https://waterfilterplatform.nl/osmose-filter/prijs' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/osmose-filter" className="hover:text-[#005F8A]">Osmose filter</Link>
            <span className="mx-2">/</span>
            <span>Prijs</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmosefilter prijs 2026: aanschaf en jaarkosten
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een osmosefilter kost niet altijd evenveel. Van een basispakket voor €100 tot een
            volledig geïntegreerde 4-in-1 kraan voor €1.500 — het aanbod is breed. Op deze pagina
            zetten we alle prijsklassen naast elkaar, inclusief jaarlijkse filterkosten,
            installatie en de totale kosten over 5 jaar.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#prijsklassen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Zie alle prijsklassen →
            </a>
            <a
              href="#tco"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              5-jaar kostenvergelijking
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#overzicht" className="hover:underline">Snel overzicht prijzen</a></li>
            <li><a href="#prijsklassen" className="hover:underline">Prijsklassen uitgelegd</a></li>
            <li><a href="#jaarkosten" className="hover:underline">Jaarlijkse filterkosten</a></li>
            <li><a href="#installatie" className="hover:underline">Installatiekosten</a></li>
            <li><a href="#tco" className="hover:underline">5-jaar kostenvergelijking</a></li>
            <li><a href="#premium-keuze" className="hover:underline">4-in-1 met osmose: complete oplossing</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Overzicht */}
        <section id="overzicht">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Snel overzicht osmosefilter prijzen 2026</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Instap', prijs: '€ 100–200', kleur: 'bg-gray-50 border-gray-200' },
              { label: 'Middenklasse', prijs: '€ 200–400', kleur: 'bg-blue-50 border-blue-200' },
              { label: 'Premium', prijs: '€ 400–800', kleur: 'bg-[#E0F2FE] border-[#005F8A]' },
              { label: '4-in-1 systeem', prijs: '€ 800–1.500', kleur: 'bg-[#003F5C] border-[#003F5C] text-white' },
            ].map(k => (
              <div key={k.label} className={`rounded-2xl p-4 border text-center ${k.kleur}`}>
                <p className={`text-xs font-semibold mb-1 uppercase tracking-wide ${k.label === '4-in-1 systeem' ? 'text-blue-200' : 'text-gray-500'}`}>{k.label}</p>
                <p className={`text-xl font-bold ${k.label === '4-in-1 systeem' ? 'text-white' : 'text-[#003F5C]'}`}>{k.prijs}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Prijsklassen */}
        <section id="prijsklassen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Prijsklassen uitgelegd</h2>
          <div className="space-y-6">
            {prijsklassen.map(p => (
              <div
                key={p.klasse}
                className={`rounded-2xl border p-5 ${p.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-bold text-[#003F5C] text-lg">{p.klasse}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{p.ideal}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#005F8A] text-xl">{p.prijs}</p>
                    <p className="text-xs text-gray-500">{p.jaarKosten}/jaar filters</p>
                  </div>
                </div>
                <ul className="space-y-1">
                  {p.kenmerken.map(k => (
                    <li key={k} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">✓</span>
                      {k}
                    </li>
                  ))}
                </ul>
                {p.highlight && (
                  <div className="mt-4">
                    <Link
                      href="/omgekeerde-osmose/kopen"
                      className="inline-block bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
                    >
                      Osmosefilters vergelijken →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Jaarkosten */}
        <section id="jaarkosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Jaarlijkse filterkosten uitgesplitst</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De aanschafprijs is maar een deel van het verhaal. Filterpatronen moeten regelmatig
            worden vervangen. Hier is een realistisch overzicht van de jaarlijkse terugkerende
            kosten.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[500px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Filtertype</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Interval</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Prijs/stuk</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Per jaar</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Sedimentfilter', interval: '6 mnd', prijs: '€ 8–15', jaar: '€ 16–30' },
                  { type: 'Pre-koolstoffilter', interval: '6–12 mnd', prijs: '€ 10–20', jaar: '€ 10–40' },
                  { type: 'RO-membraan', interval: '2–4 jaar', prijs: '€ 30–80', jaar: '€ 10–40' },
                  { type: 'Post-koolstoffilter', interval: '12 mnd', prijs: '€ 10–20', jaar: '€ 10–20' },
                  { type: '4-in-1 jaarmodule (all-in)', interval: '12 mnd', prijs: '€ 100–150', jaar: '€ 100–150' },
                ].map((r, i) => (
                  <tr key={r.type} className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-gray-50 border-b border-gray-100'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.type}</td>
                    <td className="py-2.5 px-3 text-right text-gray-600">{r.interval}</td>
                    <td className="py-2.5 px-3 text-right">{r.prijs}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A]">{r.jaar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prijzen zijn richtprijzen voor originele of kwalitatieve compatibele patronen. Merkgebonden
            patronen van premium merken liggen doorgaans aan de bovenkant van het bereik.
          </p>
        </section>

        {/* Installatie */}
        <section id="installatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Installatiekosten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-4 text-center">
              <p className="font-bold text-[#003F5C] text-2xl mb-1">€ 0</p>
              <p className="font-semibold text-sm mb-2">DIY installatie</p>
              <p className="text-xs text-gray-600">Instap en middenklasse systemen zijn eenvoudig zelf te installeren in 30–60 min. Je hebt een boor nodig voor het kraangat.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-4 text-center">
              <p className="font-bold text-[#003F5C] text-2xl mb-1">€ 100–200</p>
              <p className="font-semibold text-sm mb-2">Loodgieter (under-sink)</p>
              <p className="text-xs text-gray-600">Laat een loodgieter het systeem aansluiten op de koudwaterleiding. Inclusief boring aanrecht.</p>
            </div>
            <div className="bg-[#E0F2FE] border border-[#005F8A] rounded-2xl p-4 text-center">
              <p className="font-bold text-[#003F5C] text-2xl mb-1">€ 150–300</p>
              <p className="font-semibold text-sm mb-2">4-in-1 systeem</p>
              <p className="text-xs text-gray-600">Professionele installatie inclusief elektrische aansluiting voor de boiler. Sterk aanbevolen voor kokend water systemen.</p>
            </div>
          </div>
        </section>

        {/* TCO */}
        <section id="tco">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">5-jaar totaalkostenvergelijking (TCO)</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Wat is de goedkoopste optie op de lange termijn? De tabel toont de totale kosten
            over 5 jaar, inclusief aanschaf, installatie en jaarlijkse filterkosten.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Optie</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Aanschaf</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Installatie</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Per jaar</th>
                  <th className="py-2.5 px-3 font-semibold text-right">5 jaar totaal</th>
                </tr>
              </thead>
              <tbody>
                {tcoVergelijking.map((r, i) => (
                  <tr
                    key={r.optie}
                    className={i === 0 ? 'bg-red-50 border-b border-gray-100' : i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-gray-50 border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.optie}</td>
                    <td className="py-2.5 px-3 text-right">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-right">{r.installatieKosten}</td>
                    <td className="py-2.5 px-3 text-right">{r.jaarKosten}</td>
                    <td className={`py-2.5 px-3 text-right font-bold ${i === 0 ? 'text-red-700' : 'text-[#005F8A]'}`}>{r.vijfJaar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 text-sm leading-relaxed">
            <strong>Conclusie:</strong> zelfs een instap osmosefilter is na 5 jaar meer dan
            vijf keer goedkoper dan structureel flessenwater kopen. Een 4-in-1 kraan met osmose
            is qua totale prijs vergelijkbaar met flessenwater — maar levert oneindig meer comfort,
            geen plastic afval en kokend water inbegrepen.
          </p>
        </section>

        {/* 4-in-1 CTA sectie */}
        <section id="premium-keuze">
          <CTABanner context="osmose" />
        </section>

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer over osmosefilters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/omgekeerde-osmose', title: 'Omgekeerde osmose uitleg', desc: 'Alles over hoe RO werkt en wat het verwijdert.' },
              { href: '/osmose-filter/werking', title: 'Osmosefilter werking', desc: 'De vier filterstappen uitgelegd voor consumenten.' },
              { href: '/waterfilter/onderhoud-schema', title: 'Onderhoud schema', desc: 'Wanneer moet je welk filter vervangen?' },
              { href: '/osmose-water/smaak', title: 'Osmosewater smaak', desc: 'Waarom smaakt osmosewater anders en hoe verbeter je het?' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">{l.title}</p>
                <p className="text-sm text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose uitgelegd</h3>
            <p className="text-sm text-gray-600">Wat krijgt u voor uw geld? Begrijp de technologie achter osmosefilters.</p>
          </Link>
          <Link href="/omgekeerde-osmose/kopen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosefilter kopen</h3>
            <p className="text-sm text-gray-600">De beste osmosefilters per prijsklasse: van budgetvriendelijk tot premium.</p>
          </Link>
          <Link href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 58 keurmerk</h3>
            <p className="text-sm text-gray-600">Betaalt u meer voor een gecertificeerd osmosefilter? Hier leest u waarom dat de moeite waard is.</p>
          </Link>
          <Link href="/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosefilter gids</h3>
            <p className="text-sm text-gray-600">Alles over osmosefilters: wat kost het, wat levert het op en hoe kiest u de juiste?</p>
          </Link>
        </div>
      </section>

        {/* Regular CTA */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over osmosefilter prijzen</h2>
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
