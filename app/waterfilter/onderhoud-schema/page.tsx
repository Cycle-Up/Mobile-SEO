import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterfilter onderhoud schema: wanneer vervangen? | 2026',
  description:
    'Compleet onderhoud schema voor waterfilters: sedimentfilter (3-6m), koolstoffilter (6-12m), RO-membraan (2-5j), UV-lamp (12m). Checklist op basis van.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/onderhoud-schema' },
  openGraph: {
    title: 'Waterfilter onderhoud schema: wanneer vervangen?',
    description:
      'Wanneer moet je welk filter vervangen? Compleet onderhoudsschema voor alle filtertypes, inclusief invloed van waterhardheid.',
    url: 'https://waterfilterplatform.nl/waterfilter/onderhoud-schema',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe vaak moet ik mijn sedimentfilter vervangen?',
    answer:
      'Een sedimentfilter vervang je gemiddeld elke 3 tot 6 maanden. In gebieden met hard of troebel leidingwater (boven 15 °dH of met veel ijzer) kan dat al na 3 maanden nodig zijn. Visuele inspectie helpt: een sterk verkleurd patroon is rijp voor vervanging.',
  },
  {
    question: 'Hoe lang gaat een RO-membraan mee?',
    answer:
      'Een goed onderhouden RO-membraan gaat 2 tot 5 jaar mee. De levensduur hangt sterk af van waterhardheid, gebruik en of de voorfilters op tijd worden gewisseld. Meet de TDS van het gefilterde water: stijgt die boven 50 ppm (of meer dan 10% van het inkomende water), dan is het membraan aan vervanging toe.',
  },
  {
    question: 'Wat gebeurt er als ik mijn filter te laat verwissel?',
    answer:
      'Een te oud sediment- of koolstoffilter beschermt het RO-membraan niet meer adequaat, waardoor het membraan sneller slijt en vervuild raakt. Bij een UV-lamp die niet tijdig wordt vervangen daalt de UV-intensiteit, waardoor bacteriën en virussen niet meer effectief worden geïnactiveerd.',
  },
  {
    question: 'Heeft waterhardheid invloed op de onderhoudsfrequentie?',
    answer:
      'Ja, zeker. In hardwatergebieden (boven 15 °dH, zoals veel delen van Zuid- en Oost-Nederland) raken filters sneller verzadigd. Sediment- en koolstoffilters moeten dan vaker gewisseld worden — soms al na 3 maanden. Het RO-membraan is robuuster, maar ook dat veroudert sneller bij hardwater zonder goed werkende voorfilters.',
  },
  {
    question: 'Kan ik de filters zelf vervangen?',
    answer:
      'Ja, de meeste filterpatronen zijn ontworpen voor eenvoudige doe-het-zelf vervanging. Je draait de filterbehuizing open met de meegeleverde sleutel, verwijdert het oude patroon en plaatst het nieuwe. Spoel het systeem daarna 5 tot 10 minuten door voordat je het water drinkt. Een 4-in-1 systeem heeft soms slechts één jaarlijkse module.',
  },
  {
    question: 'Wat zijn de tekenen dat mijn filter aan vervanging toe is?',
    answer:
      'Signalen zijn: verminderde doorstroom of waterdruk, verandering in smaak of geur van het water, stijgende TDS-waarde (meetbaar met een TDS-meter) en verkleuring van de filterpatroon. Bij een UV-systeem: de lamp brandt op maar UV-output is niet visueel zichtbaar — vervang op interval.',
  },
];

const schema = [
  {
    onderdeel: 'Sedimentfilter',
    interval: '3–6 maanden',
    intervalHard: '3 maanden',
    intervalZacht: '6 maanden',
    indicatie: 'Bruine of grijze verkleuring van het patroon',
    doel: 'Zand, roest, slib',
  },
  {
    onderdeel: 'Pre-koolstoffilter',
    interval: '6–12 maanden',
    intervalHard: '6 maanden',
    intervalZacht: '12 maanden',
    indicatie: 'Chloorlucht in gefilterd water, veranderde smaak',
    doel: 'Chloor, organische verbindingen',
  },
  {
    onderdeel: 'RO-membraan',
    interval: '2–5 jaar',
    intervalHard: '2 jaar',
    intervalZacht: '4–5 jaar',
    indicatie: 'TDS-waarde stijgt boven 10% van inkomend water',
    doel: 'Zouten, metalen, pesticiden',
  },
  {
    onderdeel: 'UV-lamp',
    interval: '12 maanden',
    intervalHard: '12 maanden',
    intervalZacht: '12 maanden',
    indicatie: 'Op interval — UV-output niet visueel zichtbaar',
    doel: 'Bacteriën, virussen inactiveren',
  },
  {
    onderdeel: 'Post-koolstoffilter',
    interval: '12 maanden',
    intervalHard: '12 maanden',
    intervalZacht: '12 maanden',
    indicatie: 'Licht gewijzigde nasmaak',
    doel: 'Eindpolishing, smaak',
  },
  {
    onderdeel: 'Drukvat (membraantank)',
    interval: 'Jaarlijks controleren',
    intervalHard: 'Jaarlijks',
    intervalZacht: 'Jaarlijks',
    indicatie: 'Lage waterdruk of korte vultijd',
    doel: 'Waterbuffer voor directe doorstroom',
  },
];

const checklistItems = [
  { periode: 'Elke 3 maanden', taken: ['Controleer sedimentfilter visueel op verkleuring', 'Check waterdruk en doorstroom bij de kraan', 'Noteer TDS-waarde in logboekje'] },
  { periode: 'Elke 6 maanden', taken: ['Wissel sedimentfilter (hardwatergebied: verplicht)', 'Wissel pre-koolstoffilter (hardwatergebied)', 'Reinig filterbehuizingen met mild schoonmaakmiddel', 'Controleer alle wateraansluitingen op lekkage'] },
  { periode: 'Jaarlijks', taken: ['Wissel post-koolstoffilter', 'Vervang UV-lamp (indien aanwezig)', 'Controleer drukvat op juiste druk (6–8 psi leeg)', 'Wissel pre-koolstoffilter (zachtwatergebied)'] },
  { periode: 'Elke 2–5 jaar', taken: ['Vervang RO-membraan (TDS-meting als leidraad)', 'Saniteer het complete systeem', 'Overweeg upgrade als systeem ouder is dan 8 jaar'] },
];

export default function WaterfilterOnderhoudSchemaPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterfilter onderhoud schema: wanneer vervangen?',
          description:
            'Compleet onderhoud schema voor waterfilters met filterwisselintervallen per type, invloed van waterhardheid en downloadbare checklist.',
          datePublished: '2026-01-10',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/waterfilter/onderhoud-schema',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          { name: 'Onderhoud schema', url: 'https://waterfilterplatform.nl/waterfilter/onderhoud-schema' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:text-[#005F8A]">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>Onderhoud schema</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter onderhoud schema: wanneer vervangen?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een waterfilter werkt alleen goed als je het op tijd onderhoudt. Sedimentfilters,
            koolstoffilters, RO-membranen en UV-lampen hebben elk een eigen wisselinterval —
            afhankelijk van jouw watertype en gebruik. Op deze pagina vind je een compleet
            onderhoudsschema plus een praktische checklist.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#schema"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Bekijk het schema →
            </a>
            <a
              href="#checklist"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Naar checklist
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#schema" className="hover:underline">Filterwisselschema per type</a></li>
            <li><a href="#hardheid" className="hover:underline">Invloed waterhardheid</a></li>
            <li><a href="#checklist" className="hover:underline">Onderhoudschecklist</a></li>
            <li><a href="#tips" className="hover:underline">Praktische tips</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Schema */}
        <section id="schema">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Filterwisselschema per filtertype</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Elk onderdeel van een omgekeerde osmose systeem heeft een eigen levensduur. Onderstaande
            tabel geeft de standaard wisselintervallen, plus de kortere intervallen die gelden bij
            hard water (boven 15 °dH) of intensief gebruik.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[580px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Onderdeel</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Zacht water</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Hard water</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Indicatie vervanging</th>
                </tr>
              </thead>
              <tbody>
                {schema.map((r, i) => (
                  <tr key={r.onderdeel} className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-gray-50 border-b border-gray-100'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.onderdeel}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.intervalZacht}</td>
                    <td className="py-2.5 px-3 text-center text-[#005F8A] font-semibold">{r.intervalHard}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.indicatie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Intervallen zijn richtlijnen voor gemiddeld gebruik (4 personen, 10–15 liter/dag).
            Intensief gebruik of water met veel ijzer kan de intervallen verder verkorten.
          </p>
        </section>

        {/* Waterhardheid sectie */}
        <section id="hardheid">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Invloed van waterhardheid op onderhoud</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Waterhardheid is de belangrijkste factor die de onderhoudsfrequentie bepaalt. Hoe harder
            het water, hoe sneller filters verzadigen en verstoppen. In Nederland varieert de
            waterhardheid sterk per regio.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 border border-green-100 rounded-2xl p-4 text-center">
              <p className="font-bold text-green-800 text-lg mb-1">0–8 °dH</p>
              <p className="font-semibold text-green-700 text-sm mb-2">Zacht water</p>
              <p className="text-xs text-gray-600">Groningen, Drenthe, delen van Friesland. Standaard intervalschema haalbaar.</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-center">
              <p className="font-bold text-amber-800 text-lg mb-1">8–15 °dH</p>
              <p className="font-semibold text-amber-700 text-sm mb-2">Middelhard water</p>
              <p className="text-xs text-gray-600">Randstad, Utrecht. Sedimentfilter aan de kortere kant van de range wisselen.</p>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-4 text-center">
              <p className="font-bold text-red-800 text-lg mb-1">15+ °dH</p>
              <p className="font-semibold text-red-700 text-sm mb-2">Hard water</p>
              <p className="text-xs text-gray-600">Zuid-Limburg, Brabant, Zeeland. Gebruik de kortste intervallen uit het schema.</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm">
            Wil je weten hoe hard het water bij jou thuis is?{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              Bekijk de waterhardheid per gemeente
            </Link>{' '}
            of leer hoe je het zelf kunt{' '}
            <Link href="/waterhardheid/testen" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid testen
            </Link>.
          </p>
        </section>

        {/* Checklist */}
        <section id="checklist">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderhoudschecklist per periode</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Gebruik onderstaande checklist als leidraad voor je onderhoud. Print hem uit of sla hem
            op als referentie. Noteer de datum van elke filterwissel op de patroon of in een logboekje.
          </p>
          <div className="space-y-5">
            {checklistItems.map(periode => (
              <div key={periode.periode} className="border border-gray-100 rounded-2xl overflow-hidden">
                <div className="bg-[#E0F2FE] px-5 py-3">
                  <p className="font-bold text-[#003F5C]">{periode.periode}</p>
                </div>
                <ul className="p-5 space-y-2">
                  {periode.taken.map(taak => (
                    <li key={taak} className="flex items-start gap-3">
                      <span className="w-5 h-5 border-2 border-[#005F8A] rounded flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{taak}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section id="tips">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Praktische onderhoudstips</h2>
          <div className="space-y-4">
            {[
              {
                titel: 'Meet TDS bij elke filterwissel',
                tekst: 'Een TDS-meter kost circa €10–15 en geeft direct inzicht in de filterprestaties. Noteer de waarden zodat je trends herkent. Een plotselinge stijging van de TDS in het gefilterde water wijst op een defect membraan of verouderde filters.',
              },
              {
                titel: 'Schrijf de wisseldate op het patroon',
                tekst: 'Schrijf met een stift de datum van plaatsing op elke nieuwe filterpatroon. Zo vergeet je nooit wanneer een filter moet worden vervangen — ook handig als een monteur of andere huisgenoot het systeem beheert.',
              },
              {
                titel: 'Koop filterpakketten vooruit',
                tekst: 'Filterpatronen zijn goedkoper in pakketvorm (set van 3–5 patronen). Koop ze van tevoren zodat je direct kunt wisselen zodra het nodig is en niet hoeft te wachten op levering.',
              },
              {
                titel: 'Saniteer bij langdurige stilstand',
                tekst: 'Staat het systeem langer dan 2 weken stil (vakantie)? Spoel het dan bij terugkomst grondig door voor gebruik. Bij stilstand langer dan een maand is een volledige sanitatie met desinfectiemiddel aanbevolen.',
              },
              {
                titel: 'Overweeg een 4-in-1 systeem voor minder onderhoud',
                tekst: 'Geïntegreerde 4-in-1 systemen gebruiken één filtermodule die je jaarlijks in één handeling wisselt. Minder gedoe, minder kans op vergeten wisselintervallen.',
              },
            ].map(tip => (
              <div key={tip.titel} className="flex gap-3 items-start">
                <span className="text-[#005F8A] font-bold text-lg mt-0.5 shrink-0">→</span>
                <div>
                  <p className="font-semibold text-gray-900">{tip.titel}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{tip.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gerelateerde pagina&apos;s</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/waterfilter/vervangen', title: 'Waterfilter vervangen', desc: 'Stap-voor-stap handleiding voor het wisselen van filterpatronen.' },
              { href: '/omgekeerde-osmose/kopen', title: 'Osmose filter kopen', desc: 'Onafhankelijk overzicht van de beste RO-systemen voor thuis.' },
              { href: '/waterhardheid/testen', title: 'Waterhardheid testen', desc: 'Hoe meet je de waterhardheid thuis? Methoden en nauwkeurigheid.' },
              { href: '/osmose-filter/prijs', title: 'Osmosefilter prijs 2026', desc: 'Aanschaf- en jaarkosten van alle prijsklassen vergeleken.' },
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

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over waterfilter onderhoud</h2>
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
