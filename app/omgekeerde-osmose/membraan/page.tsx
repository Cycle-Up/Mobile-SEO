import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'RO membraan: levensduur, types en vervanging | 2026',
  description:
    'Alles over het RO membraan: TFC-technologie uitgelegd, levensduur 2–5 jaar, signalen dat vervanging nodig is (TDS-stijging), vervangingsprocedure en.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/membraan' },
  openGraph: {
    title: 'RO membraan: levensduur, types en vervanging',
    description:
      'Complete gids over het RO-membraan: TFC technologie, levensduur, wanneer vervangen en merkvergelijking Filmtec, Hydranautics en meer.',
    url: 'https://waterfilterplatform.nl/omgekeerde-osmose/membraan',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe lang gaat een RO membraan mee?',
    answer:
      'Een TFC-membraan gaat gemiddeld 2 tot 5 jaar mee, afhankelijk van waterkwaliteit, waterdruk en gebruik. In gebieden met hard water of hoge TDS slijt het membraan sneller. Een goede vuistregel: vervang het membraan als de rejection rate onder 85% daalt — meet dit via TDS in- en uitgang. Jaarlijkse TDS-controle helpt je het optimale vervangingsmoment bepalen.',
  },
  {
    question: 'Hoe weet ik of mijn RO membraan vervangen moet worden?',
    answer:
      'Drie signalen wijzen op een verouderd of beschadigd membraan: (1) stijgende TDS van het gefilterde water — een gezond systeem levert water onder 20 ppm bij inkomend TDS van 300–600 ppm, (2) significant lagere waterproductie dan normaal, en (3) verslechterde smaak van het gefilterde water ondanks een vers post-koolstoffilter. Een goedkope TDS-meter (€10–20) is het meest betrouwbare controlemiddel.',
  },
  {
    question: 'Wat is TFC en hoe verschilt het van CA-membranen?',
    answer:
      'TFC staat voor Thin-Film Composite (dunne-film composiet). Het membraan bestaat uit drie lagen: een polyester basislaag, een polysulfone tussenlaag en een uiterst dunne polyamide toplaag (0,2 micron). Deze structuur geeft uitstekende rejection rates (95–99%) en werkt goed over een breed pH-bereik (2–11). Cellulose-acetaat (CA) membranen zijn gevoeliger voor bacteriën en werken alleen bij pH 4–6. Vrijwel alle moderne huishoudelijke RO-systemen gebruiken TFC.',
  },
  {
    question: 'Wat kost een vervangingsmembraan?',
    answer:
      'Een standaard TFC-membraan (formaat 1812 of 2012 voor compacte systemen, 2040 of 2012 voor grotere systemen) kost €20–60 afhankelijk van merk en capaciteit. Premium merken zoals Filmtec (DowDuPont) en Hydranautics kosten €40–100. Generieke membranen zijn goedkoper (€15–30) maar hebben soms een lagere initiële rejection rate.',
  },
  {
    question: 'Wat beschadigt een RO membraan voortijdig?',
    answer:
      'De grootste vijanden van een RO-membraan zijn: (1) chloor en chloramine — daarom is een functionerend koolstof-voorfilter essentieel, (2) te hoge waterdruk (> 8 bar), (3) te lage waterdruk (< 2 bar) die de rejection rate verlaagt, (4) extreme temperaturen — ideaal is 15–25 °C, en (5) biologische aangroei bij langdurig stilstand. Spoel het systeem na meer dan 3 dagen stilstand altijd door voor gebruik.',
  },
  {
    question: 'Kan ik een RO membraan zelf vervangen?',
    answer:
      'Ja, vervanging is een eenvoudige doe-het-zelf klus van 15–20 minuten. Je sluit het water af, opent de membraanbehuizing (meestal met een sleutel), verwijdert het oude membraan, plaatst het nieuwe en sluit alles terug. Daarna doorspoel je het systeem gedurende 10–15 minuten. Geen gereedschapskennis vereist — de meeste fabrikanten leveren een bijbehorende sleutel mee.',
  },
  {
    question: 'Welk membraanmerk is het beste voor thuisgebruik?',
    answer:
      'Filmtec (DowDuPont) en Hydranautics (Nitto) zijn de twee meest aanbevolen merken voor thuisgebruik. Filmtec BW60 en TW30 membranen hebben uitstekende rejection rates en zijn goed gedocumenteerd. Hydranautics ESPA-serie zijn populair in Europa en presteren vergelijkbaar. Beide merken hebben gemiddeld een rejection rate van 96–98% en zijn OEM voor veel huismerkensystemen.',
  },
  {
    question: 'Hoeveel liter produceert een RO membraan per dag?',
    answer:
      'De capaciteit hangt af van het membraanformaat. Een standaard 50 GPD (gallons per day) membraan produceert circa 190 liter per dag. Een 75 GPD membraan circa 285 liter. In de praktijk liggen deze waarden 15–25% lager door variabele waterdruk. Voor een gezin van 4 personen dat 5–10 liter drinkwater per dag gebruikt, is een 50 GPD membraan ruim voldoende.',
  },
];

const merkenVergelijking = [
  {
    merk: 'Filmtec (DowDuPont)',
    type: 'TW30-1812-50, BW60',
    rejection: '97–98%',
    prijs: '€ 35–65',
    opmerking: 'Industriestandaard, meest gedocumenteerd',
  },
  {
    merk: 'Hydranautics (Nitto)',
    type: 'ESPA2-LD, LFC3',
    rejection: '96–98%',
    prijs: '€ 40–70',
    opmerking: 'Populair in Europa, hoge doorstroom',
  },
  {
    merk: 'Vontron',
    type: 'ULP1812-50',
    rejection: '96–97%',
    prijs: '€ 20–35',
    opmerking: 'Chinese fabrikant, goede prijs-kwaliteit',
  },
  {
    merk: 'Generiek / OEM',
    type: 'Diverse formaten',
    rejection: '93–96%',
    prijs: '€ 15–25',
    opmerking: 'Wisselende kwaliteit, controleer rejection rate',
  },
];

export default function ROMembraanPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'RO membraan: levensduur, types en vervanging',
          description:
            'TFC membraan technologie, levensduur 2–5 jaar, signalen van versleten membraan, vervangingsprocedure en merkvergelijking Filmtec vs Hydranautics.',
          datePublished: '2025-09-01',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/omgekeerde-osmose/membraan',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Omgekeerde osmose', url: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
          { name: 'Membraan', url: 'https://waterfilterplatform.nl/omgekeerde-osmose/membraan' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:text-[#005F8A]">Omgekeerde osmose</Link>
            <span className="mx-2">/</span>
            <span>Membraan</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            RO membraan: levensduur, types en vervanging
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Het RO-membraan is het hart van elk omgekeerde osmose systeem. Dit dunne-film
            composiet membraan (TFC) bepaalt voor 90% de waterkwaliteit die je uit de kraan
            haalt. Op deze pagina leggen we uit hoe het werkt, hoe lang het meegaat,
            wanneer je het moet vervangen en welk merk de beste prestaties levert.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              RO-systeem met goed membraan kopen →
            </Link>
            <Link
              href="/omgekeerde-osmose"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Wat is omgekeerde osmose?
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#tfc" className="hover:underline">Hoe werkt een TFC membraan?</a></li>
            <li><a href="#levensduur" className="hover:underline">Levensduur: 2–5 jaar</a></li>
            <li><a href="#signalen" className="hover:underline">Signalen dat vervanging nodig is</a></li>
            <li><a href="#vervangen" className="hover:underline">Vervangingsprocedure</a></li>
            <li><a href="#kosten" className="hover:underline">Kosten €20–100</a></li>
            <li><a href="#merken" className="hover:underline">Merkvergelijking Filmtec, Hydranautics</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* TFC uitleg */}
        <section id="tfc">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt een TFC membraan?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            TFC staat voor <strong>Thin-Film Composite</strong> — een dunne-film composietstructuur
            die bestaat uit drie lagen, elk met een specifieke functie:
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                laag: 'Polyester basislaag',
                dikte: '~ 120 μm',
                functie: 'Mechanische drager die het membraan zijn structuur geeft en bij hoge waterdruk niet vervormt.',
              },
              {
                laag: 'Polysulfone tussenlaag',
                dikte: '~ 40 μm',
                functie: 'Microporeuze steunlaag die de uiterst dunne toplaag ondersteunt zonder zijn filterende poriën te blokkeren.',
              },
              {
                laag: 'Polyamide toplaag',
                dikte: '~ 0,2 μm',
                functie: 'De daadwerkelijk filterende laag. Poriën van 0,0001 micron houden vrijwel alles groter dan watermoleculen tegen: zouten, zware metalen, pesticiden en zelfs virussen.',
              },
            ].map(l => (
              <div key={l.laag} className="flex gap-4 items-start bg-gray-50 rounded-xl p-4">
                <div className="bg-[#005F8A] text-white text-xs font-semibold px-2 py-1 rounded shrink-0 mt-0.5">
                  {l.dikte}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{l.laag}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{l.functie}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In een under-sink systeem is het membraan opgerold in een spiraalvormige configuratie.
            Water stroomt spiraalgewijs langs de membranen, gefilterd water trekt door de
            membraanlaag en wordt via een centraal buisje afgevoerd. Het concentrate (vuile water)
            verlaat het systeem via de afvoer.
          </p>
          <p className="text-gray-700 leading-relaxed">
            De rejection rate van een TFC membraan — het percentage opgeloste stoffen dat wordt
            tegengehouden — ligt typisch op <strong>96–98%</strong> bij de juiste waterdruk
            (4–6 bar) en temperatuur (15–25 °C).
          </p>
        </section>

        {/* Levensduur */}
        <section id="levensduur">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Levensduur: 2–5 jaar</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een TFC-membraan heeft een gemiddelde levensduur van <strong>2 tot 5 jaar</strong>.
            De grote spreiding wordt verklaard door de volgende factoren:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {[
              {
                factor: 'Waterkwaliteit (TDS)',
                invloed: 'Hoge TDS (> 500 ppm) en hard water belasten het membraan zwaarder. Levensduur eerder 2–3 jaar.',
              },
              {
                factor: 'Waterdruk',
                invloed: 'Te hoge druk (> 7 bar) beschadigt de polyamide laag. Te lage druk (< 2 bar) geeft slechte rejection maar spaart het membraan.',
              },
              {
                factor: 'Chloor beschadiging',
                invloed: 'Vrij chloor en chloramine beschadigen polyamide onomkeerbaar. Cruciaal: vervang je koolstof-voorfilter op tijd.',
              },
              {
                factor: 'Gebruiksfrequentie',
                invloed: 'Weinig gebruik leidt tot biofilm bij stilstand. Spoelen na 3 dagen stilstand verlengt de levensduur.',
              },
            ].map(f => (
              <div key={f.factor} className="bg-white border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">{f.factor}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{f.invloed}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE] rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Tip:</strong> Jaarlijkse TDS-metingen zijn
            goedkoper dan een vroegtijdig membraanvervangingsmoment te missen. Een TDS-meter
            kost €10–20 en is in enkele seconden afgelezen. Noteer de waarden — een stijgende
            trend over 6 maanden is een vroeg signaal.
          </div>
        </section>

        {/* Signalen */}
        <section id="signalen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Signalen dat vervanging nodig is</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een slecht membraan is niet altijd direct zichtbaar aan de smaak. De betrouwbaarste
            manier om de membraantoestand te beoordelen is de TDS-meting.
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-red-400 pl-4">
              <p className="font-semibold text-gray-900">TDS-stijging (belangrijkste signaal)</p>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                Meet de TDS van je leidingwater en het gefilterde water. Bereken de rejection rate:
                (1 - TDS gefilterd / TDS ingang) × 100%. Onder 85% is vervanging noodzakelijk.
                Voorbeeld: ingang 400 ppm, uitgang 70 ppm = rejection 82,5% — net onder de grens.
              </p>
            </div>
            <div className="border-l-4 border-amber-400 pl-4">
              <p className="font-semibold text-gray-900">Lagere waterproductie</p>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                Als het vullen van een glas significant langer duurt dan bij installatie, kan
                het membraan verstopt zijn geraakt (fouling). Soms te herstellen door de
                voorfliters te vervangen, soms duidt het op membraanschade.
              </p>
            </div>
            <div className="border-l-4 border-amber-400 pl-4">
              <p className="font-semibold text-gray-900">Verslechterde smaak</p>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                Als je water een kalk- of metallieke nasmaak krijgt ondanks een vers
                post-koolstoffilter, dan is de rejection rate waarschijnlijk gedaald. Controleer
                altijd eerst met een TDS-meter voor je het membraan vervangt — de oorzaak kan ook
                een slecht pre-filter zijn.
              </p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <p className="font-semibold text-gray-900">Plotselinge TDS-sprong</p>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                Een geleidelijke TDS-stijging over maanden wijst op veroudering. Een plotselinge
                stijging in dagen of weken duidt op fysieke schade — vaak veroorzaakt door
                blootstelling aan chloor na het falen van het pre-koolstoffilter. In dat geval
                moet het membraan onmiddellijk worden vervangen.
              </p>
            </div>
          </div>
        </section>

        {/* Vervangingsprocedure */}
        <section id="vervangen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vervangingsprocedure (stap voor stap)</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een RO-membraan vervangen duurt gemiddeld 15–20 minuten en vereist geen
            gereedschapskennis. De meeste systemen worden geleverd met een membraansleutel.
          </p>
          <div className="space-y-4">
            {[
              {
                nr: '1',
                titel: 'Voorbereiding',
                desc: 'Sluit de toevoerkraan van het RO-systeem. Open de osmosekraan om de restdruk af te voeren. Leg een handdoek onder het systeem om watermorsen op te vangen.',
              },
              {
                nr: '2',
                titel: 'Membraanbehuizing openen',
                desc: 'De membraanbehuizing is meestal de grootste cilindrische behuizing in het systeem. Gebruik de bijgeleverde membraansleutel of een riemsleutel om de behuizing open te draaien (linksom).',
              },
              {
                nr: '3',
                titel: 'Oud membraan verwijderen',
                desc: 'Trek het oude membraan met een draaiende beweging uit de behuizing. Het membraan is opgerold als een witte cilinder. Gooi het membraan weg — niet hergebruiken.',
              },
              {
                nr: '4',
                titel: 'Nieuw membraan plaatsen',
                desc: 'Let op de richting: de O-ringen zitten aan de kant van het gefilterd-water-uitlaatpijpje. Duw het nieuwe membraan met een lichte draaiende beweging in de behuizing tot het stevig zit.',
              },
              {
                nr: '5',
                titel: 'Afsluiten en spoelen',
                desc: 'Draai de behuizing terug vast (rechtsom). Zet het water aan en laat 10–15 minuten spoelen. Gooi dit water weg — het dient om restanten van de productieprocess te verwijderen.',
              },
              {
                nr: '6',
                titel: 'TDS controleren',
                desc: 'Meet het TDS van het gefilterde water na de spoelfase. Verwacht bij een goed membraan een TDS van 5–30 ppm bij Nederlands leidingwater (ingang 300–600 ppm). Noteer de datum voor je onderhoudslogboek.',
              },
            ].map(s => (
              <div key={s.nr} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {s.nr}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Kosten */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kosten: €20–€100</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De kosten van een vervangingsmembraan variëren sterk per merk en formaat. Het formaat
            staat altijd vermeld op de behuizing van je systeem (bijv. 1812-50 of 2012-75).
          </p>
          <div className="bg-gray-50 rounded-2xl p-5 text-sm space-y-3">
            {[
              { post: 'Generiek membraan (50 GPD)', prijs: '€ 15–25' },
              { post: 'Vontron / Toray (50–75 GPD)', prijs: '€ 20–35' },
              { post: 'Filmtec TW30-1812-50', prijs: '€ 35–55' },
              { post: 'Hydranautics ESPA2-LD', prijs: '€ 45–70' },
              { post: 'Grootte upgrade (100+ GPD)', prijs: '€ 50–100' },
            ].map(k => (
              <div key={k.post} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                <span className="text-gray-700">{k.post}</span>
                <span className="font-semibold text-[#005F8A]">{k.prijs}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Telt inclusief de prijs voor het membraan zelf. Installatie is doe-het-zelf (15–20 min).
            Bij jaarlijkse filtervervanging voor het hele systeem (sediment, koolstof, post-carbon
            en membraan samen) reken je op €60–150 per jaar.
          </p>
        </section>

        {/* Merkvergelijking */}
        <section id="merken">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Merkvergelijking: Filmtec, Hydranautics en meer</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Niet elk membraan presteert hetzelfde. De twee grote namen — Filmtec (DowDuPont) en
            Hydranautics (Nitto) — worden in zowel industriële als consumenten RO-systemen
            wereldwijd gebruikt en zijn de referentie waaraan andere merken worden afgemeten.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[500px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Merk</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Rejection</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Prijs</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Opmerking</th>
                </tr>
              </thead>
              <tbody>
                {merkenVergelijking.map(m => (
                  <tr key={m.merk} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-800">{m.merk}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{m.type}</td>
                    <td className="py-2.5 px-3 text-right text-green-700 font-semibold">{m.rejection}</td>
                    <td className="py-2.5 px-3 text-right text-[#005F8A]">{m.prijs}</td>
                    <td className="py-2.5 px-3 text-gray-500 text-xs">{m.opmerking}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Voor de meeste thuisgebruikers biedt een Filmtec TW30 of Vontron-membraan de beste
            balans tussen prijs en betrouwbaarheid. Kies altijd een membraan dat overeenkomt met
            het formaat van je bestaande behuizing — formaat staat op het membraansticker vermeld.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Filtertechniek: omgekeerde osmose</h3>
              <p className="text-sm text-gray-600">Hoe werkt het RO-filterproces en welke verontreinigingen verwijdert het membraan?</p>
            </Link>
            <Link href="/omgekeerde-osmose/membraan-vervangen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Membraan vervangen</h3>
              <p className="text-sm text-gray-600">Wanneer en hoe vervang je het RO-membraan voor optimale filterprestaties?</p>
            </Link>
            <Link href="/omgekeerde-osmose/rendement" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Rendement osmosesysteem</h3>
              <p className="text-sm text-gray-600">Hoeveel water wordt daadwerkelijk gefilterd en wat bepaalt het waterrendement?</p>
            </Link>
            <Link href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 58 keurmerk</h3>
              <p className="text-sm text-gray-600">Wat betekent dit certificaat voor de kwaliteit en veiligheid van het membraan?</p>
            </Link>
          </div>
        </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Filtertechniek: omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">Hoe werkt de omgekeerde osmose filtertechniek precies?</p>
          </Link>
          <Link href="/omgekeerde-osmose/membraan-vervangen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Membraan vervangen</h3>
            <p className="text-sm text-gray-600">Wanneer en hoe vervangt u het RO-membraan?</p>
          </Link>
          <Link href="/omgekeerde-osmose/rendement" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Rendement</h3>
            <p className="text-sm text-gray-600">Hoe efficiënt is uw osmose systeem en hoe verbetert u het rendement?</p>
          </Link>
          <Link href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 58 keurmerk</h3>
            <p className="text-sm text-gray-600">Wat betekent dit certificaat voor de kwaliteit en veiligheid van het membraan?</p>
          </Link>
        </div>
      </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'RO-systeem kopen',
                desc: 'De beste complete osmose systemen inclusief goed membraan voor thuisgebruik.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose: complete gids',
                desc: 'Hoe werkt RO, wat verwijdert het en welk systeem past bij jou?',
              },
              {
                href: '/waterfilter/onder-aanrecht',
                title: 'Waterfilter onder aanrecht',
                desc: 'Alle under-sink filtertypes vergeleken op prijs en prestaties.',
              },
              {
                href: '/kokend-water-kraan/4-in-1',
                title: '4-in-1 kokend water kraan',
                desc: 'Geïntegreerde RO + kokend water oplossing — één filterwisseling per jaar.',
              },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">
                  {l.title}
                </p>
                <p className="text-sm text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over het RO membraan</h2>
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
