import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Quooker filterpatroon vervangen: stap-voor-stap uitleg en kosten 2026',
  description:
    'Hoe vervang je het Quooker filterpatroon? Stap-voor-stap handleiding, vervangingsinterval, kosten en wanneer de indicator rood wordt.',
  alternates: { canonical: 'https://waterfilterplatform.nl/quooker/filter-vervangen' },
  openGraph: {
    title: 'Quooker filterpatroon vervangen — stap-voor-stap en kosten 2026',
    description:
      'Complete handleiding voor het vervangen van het Quooker filterpatroon: interval, indicator kleuren, kosten en resetinstructies.',
    url: 'https://waterfilterplatform.nl/quooker/filter-vervangen',
    type: 'article',
    locale: 'nl_NL',
  },
};

const faqItems = [
  {
    question: 'Wanneer moet ik het Quooker filter vervangen?',
    answer:
      'Vervang het Quooker filterpatroon na 1.500 liter gefilterd water of na 12 maanden — wat eerder bereikt wordt. De indicator op het Quooker display toont de status: oranje betekent dat het filter bijna vol is, rood betekent dat het vervangen moet worden, en knipperend rood betekent dat het vervangingsmoment al is overschreden. Bij een gezin van 4 personen dat dagelijks 3 liter filtert, kunt u rekenen op circa 8–10 maanden per patroon.',
  },
  {
    question: 'Hoe weet ik welk filterpatroon ik nodig heb?',
    answer:
      'Het benodigde patroon is afhankelijk van uw Quooker-model. De COMBI en COMBI+ gebruiken het standaard COMBI-filterpatroon. De CUBE vereist een apart CUBE-filterpatroon. Kijk op het typeplaatje van uw Quooker (achter de kraan of op het reservoir) of controleer de handleiding. Bestel altijd het specifieke patroon voor uw model — patronen zijn niet uitwisselbaar tussen COMBI en CUBE.',
  },
  {
    question: 'Kan ik het Quooker filter zelf vervangen?',
    answer:
      'Ja. Het Quooker filterpatroon is ontworpen voor zelf-vervanging zonder gereedschap. De handeling duurt circa 5 minuten. U hoeft geen loodgieter of installateur in te schakelen. Na vervanging reset u de filtercounter via het display door de knop 5 seconden ingedrukt te houden. Volg voor zekerheid de officiële Quooker vervangingsinstructies of de stap-voor-stap uitleg hieronder.',
  },
  {
    question: 'Wat als ik het filter te lang gebruik?',
    answer:
      'Een overgeslagen filterpatroon presteert minder goed: de koolstofmassa raakt verzadigd en kan stoffen die eerder zijn gebonden, teruggeven aan het water. Dit fenomeen heet "dumping" of breakthrough. U merkt dit aan een verslechterde smaak, terugkerende chloorgeur en een rood knipperend indicatorlampje. Vervang het patroon direct als de indicator rood wordt — wacht niet op merkbaar kwaliteitsverlies.',
  },
  {
    question: 'Waar bestel ik een Quooker filterpatroon?',
    answer:
      'Quooker filterpatronen zijn te bestellen via de officiële Quooker webshop (quooker.nl), via erkende Quooker dealers en installateurs, en soms via grote online platforms zoals Bol.com of Amazon.nl. Controleer altijd of het aangeboden patroon het juiste type is voor uw model (COMBI of CUBE). Prijzen liggen in de range van €15–25 per patroon.',
  },
  {
    question: 'Zijn merkloze filterpatronen geschikt voor de Quooker?',
    answer:
      'Quooker adviseert uitdrukkelijk gebruik van originele filterpatronen. Merkloze ("no-name") patronen kunnen in dezelfde houder passen, maar de filterprestaties en NSF-certificering zijn bij generieke patronen onduidelijk of onbevestigd. Bij gebruik van niet-originele patronen kan de garantie op uw Quooker komen te vervallen. Voor optimale prestaties en garantiebehoud gebruikt u het beste het originele Quooker patroon.',
  },
];

const stappen = [
  {
    nr: 1,
    titel: 'Zet de Quooker in slaapstand',
    beschrijving:
      'Schakel de Quooker in slaapstand via de schakelaar achter of naast de kraan (afhankelijk van het model). Dit zorgt ervoor dat het systeem drukvrij is en u veilig kunt werken. Wacht 30 seconden voordat u verdergaat.',
  },
  {
    nr: 2,
    titel: 'Open de onderkast',
    beschrijving:
      'Open de kastdeur onder het aanrecht. Het filterpatroonhuis bevindt zich op het Quooker reservoir of de CUBE-module — een cilindrisch wit of grijs behuizing met een blauw of wit filterpatroon erin.',
  },
  {
    nr: 3,
    titel: 'Draai het patroonhuis los (kwartslag linksom)',
    beschrijving:
      'Pak het patroonhuis stevig vast en draai een kwartslag (90°) linksom (tegen de klok in). Het huis komt nu los van het reservoir. Houd een doekje bij de hand om eventueel restwater op te vangen — dit is normaal.',
  },
  {
    nr: 4,
    titel: 'Trek het oude filterpatroon eruit',
    beschrijving:
      'Trek het oude filterpatroon recht omhoog of omlaag uit het patroonhuis. Gooi het verbruikte patroon weg via het restafval (niet via het gft-afval). Spoel het patroonhuis indien gewenst even af met koud water.',
  },
  {
    nr: 5,
    titel: 'Verwijder de beschermkap van het nieuwe patroon',
    beschrijving:
      'Haal het nieuwe filterpatroon uit de verpakking en verwijder de plastic beschermkap aan de onderkant. Controleer of het juiste patroon is besteld voor uw model (COMBI of CUBE).',
  },
  {
    nr: 6,
    titel: 'Duw het nieuwe patroon in en draai kwartslag rechtsom',
    beschrijving:
      'Duw het nieuwe patroon recht in het patroonhuis en draai het huis vervolgens een kwartslag (90°) rechtsom (met de klok mee) totdat het vastklikt. Controleer of het huis goed vergrendeld is — het mag niet meer draaien.',
  },
  {
    nr: 7,
    titel: 'Reset de indicator via het display',
    beschrijving:
      'Zet de Quooker terug in de normale stand. Houd de resetknop op het Quooker display 5 seconden ingedrukt om de filtercounter te resetten. De indicator springt terug naar groen. Noteer de vervangingsdatum voor uzelf.',
  },
];

const indicatorKleuren = [
  {
    kleur: 'Groen',
    betekenis: 'Filter functioneert goed',
    actie: 'Niets te doen',
    klasse: 'bg-green-100 border-green-300 text-green-900',
    dot: 'bg-green-500',
  },
  {
    kleur: 'Oranje',
    betekenis: 'Filter bijna vol — bestelling aanbevolen',
    actie: 'Bestel een nieuw patroon',
    klasse: 'bg-amber-50 border-amber-200 text-amber-900',
    dot: 'bg-amber-500',
  },
  {
    kleur: 'Rood',
    betekenis: 'Filter vol — vervangen vereist',
    actie: 'Vervang het patroon zo snel mogelijk',
    klasse: 'bg-red-50 border-red-200 text-red-900',
    dot: 'bg-red-500',
  },
  {
    kleur: 'Knipperend rood',
    betekenis: 'Vervangingsmoment overschreden',
    actie: 'Vervang het patroon direct — filterprestaties niet gegarandeerd',
    klasse: 'bg-red-100 border-red-300 text-red-900',
    dot: 'bg-red-600',
  },
];

export default function QuookerFilterVervangenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Quooker filter', url: 'https://waterfilterplatform.nl/quooker-filter' },
          {
            name: 'Filterpatroon vervangen',
            url: 'https://waterfilterplatform.nl/quooker/filter-vervangen',
          },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Quooker filterpatroon vervangen: stap-voor-stap uitleg en kosten 2026',
          description:
            'Hoe vervang je het Quooker filterpatroon? Stap-voor-stap handleiding, vervangingsinterval, kosten en wanneer de indicator rood wordt.',
          datePublished: '2026-04-10',
          url: 'https://waterfilterplatform.nl/quooker/filter-vervangen',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/quooker-filter" className="hover:text-[#005F8A]">Quooker filter</Link>
            <span className="mx-2">/</span>
            <span>Filterpatroon vervangen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Quooker filterpatroon vervangen: stap-voor-stap uitleg en kosten 2026
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Het Quooker filterpatroon vervangen is eenvoudig en duurt circa 5 minuten zonder gereedschap.
            Op deze pagina vindt u de stap-voor-stap vervangingshandleiding, uitleg over de indicatorkleuren,
            de kosten per patroon en antwoorden op de meest gestelde vragen over filteronderhoud.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#vervangingshandleiding"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Direct naar de stappen →
            </a>
            <Link
              href="/quooker-filter"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Terug naar Quooker filter uitleg
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <QuickAnswer answer="Een Quooker filterpatroon vervang je elke 1.500 liter of 12 maanden. De rode indicator op de Quooker display geeft aan wanneer het filter vol is. Patroon kost €15–25, bestellen bij Quooker of erkende dealer. Vervangen doe je zelf in 5 minuten zonder gereedschap." />

        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#wanneer-vervangen" className="hover:underline">Wanneer vervangen?</a></li>
            <li><a href="#indicator-kleuren" className="hover:underline">Indicator kleuren uitleg</a></li>
            <li><a href="#vervangingshandleiding" className="hover:underline">Stap-voor-stap handleiding</a></li>
            <li><a href="#kosten" className="hover:underline">Kosten patroon en per jaar</a></li>
            <li><a href="#welk-patroon" className="hover:underline">Welk patroon heb ik nodig?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        <section id="wanneer-vervangen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer moet het Quooker filterpatroon vervangen worden?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Quooker hanteert twee vervangsintervallen — het patroon moet worden vervangen wanneer{' '}
            <strong>één van de volgende limieten is bereikt</strong>, wat ook eerder valt:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-[#E0F2FE] rounded-2xl p-5 text-center">
              <p className="text-3xl font-bold text-[#003F5C] mb-1">1.500 L</p>
              <p className="text-sm text-gray-700">gefilterd waterverbruik</p>
            </div>
            <div className="bg-[#E0F2FE] rounded-2xl p-5 text-center">
              <p className="text-3xl font-bold text-[#003F5C] mb-1">12 maanden</p>
              <p className="text-sm text-gray-700">na laatste vervanging</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De Quooker volgt het verbruik automatisch via de ingebouwde teller. Op het display kunt u de
            filterstatus altijd aflezen. U hoeft het verbruik dus niet zelf bij te houden — de Quooker
            geeft tijdig een signaal via de indicator.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Praktisch rekenen:</strong> een gezin van 4 personen dat
            dagelijks 3 liter gefilterd water gebruikt, verbruikt per jaar 4 × 3 × 365 = 4.380 liter
            totaal — maar het filter is doorgaans voor slechts een deel van dit verbruik verantwoordelijk
            (alleen het koude gefilterde water). Bij uitsluitend drinkwatergebruik (circa 4–5 liter per dag
            voor het hele huishouden) haalt u de 1.500 liter na 9–10 maanden.
          </div>
        </section>

        <section id="indicator-kleuren">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat betekenen de indicatorkleuren?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het Quooker display toont de filterstatus via een kleurindicator. Hieronder de betekenis van
            elke kleur en welke actie u moet ondernemen.
          </p>
          <div className="space-y-3">
            {indicatorKleuren.map(i => (
              <div
                key={i.kleur}
                className={`flex items-start gap-3 rounded-xl border p-4 ${i.klasse}`}
              >
                <div className={`w-4 h-4 rounded-full shrink-0 mt-0.5 ${i.dot}`} />
                <div>
                  <p className="font-semibold text-sm">{i.kleur}</p>
                  <p className="text-sm">{i.betekenis}</p>
                  <p className="text-xs mt-1 font-medium">Actie: {i.actie}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-gray-50 rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Tip:</strong> stel een agenda-herinnering in voor 11 maanden
            na uw laatste filtervervanging. Zo bestelt u ruim op tijd een nieuw patroon en loopt u nooit
            achter op het vervangingsmoment.
          </div>
        </section>

        <section id="vervangingshandleiding">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Stap-voor-stap: Quooker filterpatroon vervangen</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Filtervervanging duurt circa 5 minuten en vereist geen gereedschap. Zorg dat u het juiste
            vervangende patroon voor uw model bij de hand heeft voordat u begint.
          </p>
          <div className="space-y-5">
            {stappen.map(s => (
              <div key={s.nr} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0">
                  {s.nr}
                </div>
                <div className="flex-1 border border-gray-100 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 mb-1">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.beschrijving}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Na de vervanging:</strong> laat de Quooker 30 seconden
            drinkwater doorlopen voordat u het gefilterde water consumeert. Dit spoelt eventuele
            koolstofdeeltjes (onschadelijk) door die bij een nieuw patroon los kunnen komen. Controleer
            op lekkage bij het patroonhuis door de aansluitingen te inspecteren.
          </div>
        </section>

        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat zijn de kosten van een Quooker filterpatroon?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De kosten voor een Quooker filterpatroon zijn relatief laag. Hieronder een overzicht van de
            te verwachten jaarlijkse filterkosten bij verschillende gebruiksintensiteiten.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Situatie</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Patronen/jaar</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Jaarkosten</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { situatie: 'Laag gebruik (1–2 personen, ~1 L/dag)', patronen: '1×', kosten: '€ 15–25' },
                  { situatie: 'Normaal gebruik (2–3 personen, ~2 L/dag)', patronen: '1×', kosten: '€ 20–25' },
                  { situatie: 'Intensief gebruik (4+ personen, ~4 L/dag)', patronen: '2×', kosten: '€ 30–50' },
                ].map(r => (
                  <tr key={r.situatie} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 text-gray-800">{r.situatie}</td>
                    <td className="py-2.5 px-3 text-right text-gray-600">{r.patronen}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A]">{r.kosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prijzen indicatief op basis van €15–25 per patroon (2026). Kosten kunnen per dealer afwijken.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Bij intensief gebruik van 4 liter per dag voor een gezin van 4 personen kunt u jaarlijks
            tot 2 filterpatronen nodig hebben (€30–50). Dit zijn de volledige jaarlijkse filterkosten voor
            het koolstoffiltersysteem — er zijn geen andere verbruiksartikelen voor de filtratiefunctie.
          </p>
          <div className="mt-4 bg-gray-50 rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Vergelijking met osmose:</strong> een onderbouw omgekeerde
            osmose systeem kost jaarlijks €80–140 aan filtervervanging (pre-filter, membraan en post-filter),
            maar levert een aanzienlijk hogere filterkwaliteit — inclusief kalkverwijdering, nitraten en PFAS.
            Lees meer op onze pagina over{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>.
          </div>
        </section>

        <section id="welk-patroon">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welk Quooker filterpatroon heb ik nodig?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Quooker heeft verschillende filterpatronen voor verschillende modellen. Het is essentieel het
            juiste patroon te bestellen — patronen zijn niet uitwisselbaar tussen modelreeksen.
          </p>
          <div className="space-y-3 mb-5">
            {[
              {
                model: 'COMBI en COMBI+',
                patroon: 'Quooker COMBI filterpatroon',
                omschrijving:
                  'Het standaard filterpatroon voor COMBI en COMBI+ modellen. Verkrijgbaar als enkelvoudig patroon of in verpakkingen van twee stuks.',
              },
              {
                model: 'CUBE (add-on module)',
                patroon: 'Quooker CUBE filterpatroon',
                omschrijving:
                  'Specifiek voor de CUBE-module. Dit patroon filtert het gekoelde en bruisende water. Heeft een ander afmeting dan het COMBI-patroon.',
              },
            ].map(p => (
              <div key={p.model} className="border border-gray-100 rounded-xl p-4">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <p className="font-semibold text-gray-900">{p.model}</p>
                  <span className="text-sm text-[#005F8A] font-medium shrink-0">{p.patroon}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{p.omschrijving}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-3 leading-relaxed">
            <strong>Waar bestellen?</strong> Originele Quooker filterpatronen zijn verkrijgbaar via:
          </p>
          <ul className="space-y-2 text-sm text-gray-700 mb-4">
            {[
              'quooker.nl — de officiële Quooker webshop',
              'Erkende Quooker dealers en installateurs',
              'Bol.com en Amazon.nl (controleer of het origineel is)',
            ].map(item => (
              <li key={item} className="flex gap-2 items-start">
                <span className="text-[#005F8A] font-bold shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Let op merkloze patronen:</strong> generieke filterpatronen
            kunnen in dezelfde houder passen, maar Quooker adviseert het gebruik van originele patronen.
            Bij niet-originele patronen is de NSF-certificering onduidelijk en kan de garantie komen te
            vervallen. Kies voor de zekerheid altijd het originele Quooker-patroon.
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/quooker" className="group border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1 text-sm">Quooker overzicht</p>
              <p className="text-xs text-gray-500">Alles over de Quooker kokendwaterkraan</p>
            </Link>
            <Link href="/onderhoud/osmose-filter-vervangen" className="group border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1 text-sm">Osmosefilter vervangen stappenplan</p>
              <p className="text-xs text-gray-500">Stap-voor-stap instructies voor RO-filterwissel</p>
            </Link>
            <Link href="/koolstoffilter/vervangen" className="group border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1 text-sm">Koolstoffilter vervangen tips</p>
              <p className="text-xs text-gray-500">Wanneer en hoe vervangt u een koolstoffilter?</p>
            </Link>
            <Link href="/kokend-water-kraan/onderhoud" className="group border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1 text-sm">Kokend water kraan onderhoud</p>
              <p className="text-xs text-gray-500">Onderhoudstips voor uw kokendwaterkraan</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer lezen over de Quooker en waterfilters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: '/quooker-filter',
                title: 'Quooker filter: werking en wat het niet verwijdert',
                desc: 'Objectieve uitleg over het Quooker koolstoffilter: wat verwijdert het wel en niet?',
              },
              {
                href: '/quooker-cube',
                title: 'Quooker CUBE uitleg',
                desc: 'Wat doet de CUBE add-on, hoeveel kost het en wanneer is het de moeite waard?',
              },
              {
                href: '/koolstoffilter',
                title: 'Koolstoffilter: hoe werkt actieve kool?',
                desc: 'Complete gids over actief koolstoffiltratie: types, werking en kosten.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose uitleg',
                desc: 'De grondige filtermethode die kalk, nitraten, PFAS en microplastics verwijdert.',
              },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1 text-sm">
                  {l.title}
                </p>
                <p className="text-xs text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over het vervangen van het Quooker filterpatroon
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">
                    ▾
                  </span>
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
