import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosefilter zonder tank: tankless RO-systemen voor direct water',
  description:
    'Een osmosefilter zonder tank (tankless RO) levert direct gefilterd water zonder opslagtank. Sneller, compacter, geen bacteriegroei in tank. Vergelijking tankless vs tank-systemen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-filter/zonder-tank' },
};

const faqItems = [
  {
    question: 'Wat is een osmosefilter zonder tank?',
    answer:
      'Een osmosefilter zonder tank, ook wel tankless RO-systeem of direct-flow osmose genoemd, produceert gefilterd water rechtstreeks bij het tappen zonder een opslagtank tussenin. In plaats van water op voorhand te filteren en op te slaan, filtert het systeem het water op het moment dat u de kraan opendraait, met behulp van een krachtige boosterpomp van 100-200 watt.',
  },
  {
    question: 'Is een tankless osmosefilter beter dan een systeem met tank?',
    answer:
      'Dat hangt af van uw situatie. Een tankless systeem is beter op het gebied van hygiëne (altijd vers water), capaciteit bij hoog verbruik en ruimtegebruik. Een systeem met tank is beter in prijs (300-600 euro versus 500-1.200 euro), energieverbruik (pomp werkt alleen bij vullen) en directe waterlevering zonder wachttijd. Voor gezinnen van 4 of meer personen met hoog verbruik is tankless doorgaans de betere keuze.',
  },
  {
    question: 'Hoe snel produceert een tankless osmosefilter water?',
    answer:
      'Een tankless osmosefilter heeft een kleine wachttijd van 2-5 seconden voordat water stroomt, omdat de pomp en het membraan op snelheid moeten komen. Daarna levert het systeem continu gefilterd water zolang de kraan open is. Bij een systeem met druktank stroomt het water direct, maar raakt de tank leeg bij langdurig gebruik.',
  },
  {
    question: 'Is er bacteriegroei mogelijk in een osmose-opslagtank?',
    answer:
      'Ja. In een conventionele druktank staat gefilterd water soms urenlang of langer stil. Hoewel osmosewater nauwelijks mineralen bevat, kunnen bacteriën zich in stilstaand water vermenigvuldigen, met name in warme omstandigheden of als het systeem lang niet gebruikt wordt. Een tankless systeem elimineert dit risico volledig omdat er geen stilstaand water is.',
  },
  {
    question: 'Hoeveel water kan een tankless osmosefilter per dag produceren?',
    answer:
      'Moderne tankless RO-systemen hebben een capaciteit van 300-800 GPD (gallons per dag), wat neerkomt op 1.135-3.028 liter per dag. Voor huishoudelijk gebruik is zelfs 300 GPD (ruim 1.100 liter per dag) ruim voldoende voor een gezin van 6. De productiecapaciteit is afhankelijk van waterdruk, temperatuur en membraankwaliteit.',
  },
  {
    question: 'Is een tankless osmosefilter geschikt voor een gezin van 4?',
    answer:
      'Ja, een tankless osmosefilter is uitstekend geschikt voor een gezin van 4 of meer. Het biedt onbeperkte capaciteit omdat het water direct produceert, zonder de beperking van een tank van 5-12 liter. Juist bij gezinnen met een hoog waterverbruik &mdash; ook voor koken en koffiezetten &mdash; is tankless de betere keuze. Kies een systeem met minimaal 400 GPD voor comfortabel gebruik.',
  },
  {
    question: 'Wat kost een osmosefilter zonder tank?',
    answer:
      'Tankless osmosesystemen kosten doorgaans 500-1.200 euro voor aanschaf en installatie. Dat is meer dan een systeem met tank (300-600 euro). De meerkosten zitten in de krachtigere boosterpomp en de hogere membraancapaciteit. Populaire modellen zijn de Waterdrop G3P800 (ca. 650 euro) en de iSpring RCC7AK-UV in tankless configuratie. Onderhoudskosten zijn vergelijkbaar: 60-120 euro per jaar voor filters.',
  },
  {
    question: 'Hoe werkt de boosterpomp in een tankless osmosefilter?',
    answer:
      'De boosterpomp in een tankless osmosefilter verhoogt de waterdruk van de normale leidingdruk (3-6 bar) naar de optimale druk voor het RO-membraan (8-12 bar). Dit zorgt voor een hogere productiesnelheid per tijdseenheid. De pomp verbruikt 100-200 watt en werkt alleen wanneer de kraan open is. Bij een tank-systeem werkt de pomp alleen bij het vullen van de tank en staat daarna stil.',
  },
];

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
    { '@type': 'ListItem', position: 2, name: 'Osmose filter', item: 'https://waterfilterplatform.nl/osmose-filter' },
    { '@type': 'ListItem', position: 3, name: 'Osmosefilter zonder tank', item: 'https://waterfilterplatform.nl/osmose-filter/zonder-tank' },
  ],
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosefilter zonder tank: tankless RO-systemen voor direct water',
  description:
    'Een osmosefilter zonder tank (tankless RO) levert direct gefilterd water zonder opslagtank. Vergelijking tankless vs tank-systemen.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/osmose-filter/zonder-tank',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseFilterZonderTankPage() {
  return (
    <>
      <SchemaOrg schema={[breadcrumbSchema, faqSchema, articleSchema]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/osmose-filter" className="hover:text-[#005F8A]">Osmose filter</Link>
            <span className="mx-2">/</span>
            <span>Osmosefilter zonder tank</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmosefilter zonder tank: tankless RO-systemen voor direct water
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een tankless osmosefilter produceert gefilterd water direct bij het tappen, zonder
            opslagtank. Compacter, hygienischer en geschikt voor hoog verbruik. Maar is het
            ook de beste keuze voor uw situatie? Alle voor- en nadelen vergeleken.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        <QuickAnswer answer="Een tankless osmosefilter filtert water direct bij het tappen via een boosterpomp, zonder opslagtank. Voordelen: altijd vers water (geen bacteriegroei), onbeperkte capaciteit (300-800 GPD), compact. Nadelen: hogere aanschafprijs (500-1.200 euro), meer energieverbruik en 2-5 seconden wachttijd. Beste keuze voor gezinnen met hoog verbruik." />

        <CTABanner context="osmose" />

        {/* Hoe conventioneel systeem werkt */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe een conventioneel osmosesysteem met tank werkt</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een standaard onder-aanrecht osmosesysteem filtert water via het RO-membraan
            (50&ndash;400 GPD) en slaat het op in een druktank van 5&ndash;12 liter. De druktank
            bevat een ingeblazen luchtkussen dat het gefilterde water onder druk houdt.
            Wanneer u de osmosekraan opendraait, duwt de luchtdruk het water omhoog.
          </p>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 mb-4">
            <p className="font-semibold text-amber-900 mb-2">Nadelen van een druktank:</p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Bacteriegroei bij lang stilstaand water, met name in zomer of bij weinig gebruik</li>
              <li>Tank neemt ruimte in (20&ndash;30 cm diameter) in het aanrechtkastje</li>
              <li>Tankdruk moet periodiek gecontroleerd worden (ideaal 0,5&ndash;0,8 bar)</li>
              <li>Water kan oud worden als de tank lang vol staat zonder gebruik</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Tankless systemen lossen deze nadelen op door water alleen te produceren op het
            moment van tapping, met behulp van een krachtige boosterpomp.
          </p>
        </section>

        {/* Tankless uitleg */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe een tankless osmosefilter werkt</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Bij een tankless (direct-flow) osmosesysteem start de boosterpomp zodra u de kraan
            opendraait. De pomp (100&ndash;200 watt) verhoogt de druk tot 8&ndash;12 bar, waardoor het
            membraan water met een snelheid van 300&ndash;800 GPD kan produceren. Er is geen
            opslagtank nodig.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { stap: '1', titel: 'Kraan open', desc: 'Boosterpomp start onmiddellijk. Waterdruk stijgt van leidingdruk (3-5 bar) naar optimale membraandruk (8-12 bar).' },
              { stap: '2', titel: 'Directe filtratie', desc: 'Het RO-membraan filtert het water direct. Na 2-5 seconden stroomt helder osmosewater uit de kraan.' },
              { stap: '3', titel: 'Continu flow', desc: 'Zolang de kraan open is, produceert het membraan continu gefilterd water. Geen beperking door tankinhoud.' },
            ].map(s => (
              <div key={s.stap} className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {s.stap}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vergelijkingstabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Tankless vs systeem met tank: vergelijking</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[500px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-200 px-3 py-2 text-left text-[#003F5C]">Eigenschap</th>
                  <th className="border border-gray-200 px-3 py-2 text-left text-[#003F5C]">Met tank</th>
                  <th className="border border-gray-200 px-3 py-2 text-left text-[#003F5C]">Tankless</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 font-medium">Reactietijd (water uit de kraan)</td>
                  <td className="border border-gray-200 px-3 py-2 text-green-700">Direct (uit tank)</td>
                  <td className="border border-gray-200 px-3 py-2">2&ndash;5 seconden wachten</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-medium">Capaciteit (continu)</td>
                  <td className="border border-gray-200 px-3 py-2">Beperkt (tankinhoud)</td>
                  <td className="border border-gray-200 px-3 py-2 text-green-700">Onbeperkt (pompsnelheid)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 font-medium">Hygiëne</td>
                  <td className="border border-gray-200 px-3 py-2 text-amber-700">Tank = risico stilstaand water</td>
                  <td className="border border-gray-200 px-3 py-2 text-green-700">Altijd vers geproduceerd water</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-medium">Ruimte</td>
                  <td className="border border-gray-200 px-3 py-2 text-amber-700">Tank nodig (groot)</td>
                  <td className="border border-gray-200 px-3 py-2 text-green-700">Compact</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 font-medium">Energieverbruik</td>
                  <td className="border border-gray-200 px-3 py-2 text-green-700">Laag (alleen bij vullen)</td>
                  <td className="border border-gray-200 px-3 py-2 text-amber-700">Hoger (pomp bij elke tapping)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-medium">Prijs</td>
                  <td className="border border-gray-200 px-3 py-2 text-green-700">&euro;300&ndash;600</td>
                  <td className="border border-gray-200 px-3 py-2">&euro;500&ndash;1.200</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 font-medium">Geschikt voor</td>
                  <td className="border border-gray-200 px-3 py-2">1&ndash;3 persoons huishouden</td>
                  <td className="border border-gray-200 px-3 py-2 text-green-700">Gezin met hoog verbruik</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Wanneer kiezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kiest u voor tankless?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="border border-green-200 bg-green-50 rounded-xl p-4">
              <p className="font-semibold text-green-800 mb-2">Kies tankless als u...</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                <li>Met 4 of meer personen bent</li>
                <li>Hoog dagelijks waterverbruik heeft (koken, koffie, thee)</li>
                <li>Hygiëne prioriteit is voor u</li>
                <li>Beperkte ruimte onder het aanrecht heeft</li>
              </ul>
            </div>
            <div className="border border-gray-200 bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-800 mb-2">Kies tank-systeem als u...</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                <li>1&ndash;3 personen bent</li>
                <li>Lager budget heeft (&lt;&euro;600)</li>
                <li>Minder frequent gebruikt</li>
                <li>Direct water wil zonder wachttijd</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Populaire tankless systemen in Nederland zijn de Waterdrop G3P800 (800 GPD),
            RO Pure Plus 600 GPD en de iSpring RCC7AK-UV in tankless uitvoering.
            Voor een 4-in-1 kraan met kokend water is tankless vrijwel altijd de standaard
            configuratie voor het koelwaterdeel.
          </p>
        </section>

        <CTABanner context="osmose" />

        {/* Interne links */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/osmose-filter', title: 'Osmose filter overzicht', desc: 'Alle typen osmosefilters vergeleken op prijs en prestaties.' },
              { href: '/omgekeerde-osmose', title: 'Omgekeerde osmose uitleg', desc: 'Hoe werkt een RO-systeem en wat filtert het eruit?' },
              { href: '/osmose-filter/vervangen', title: 'Osmosefilter vervangen', desc: 'Wanneer en hoe vervangt u de filters van uw RO-systeem?' },
              { href: '/omgekeerde-osmose/waterdruk', title: 'Waterdruk voor osmose', desc: 'Welke waterdruk heeft u nodig voor een goed werkend osmosesysteem?' },
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over osmosefilter zonder tank</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">&#9662;</span>
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
