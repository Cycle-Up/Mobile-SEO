import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kraanwater vs gefilterd water: wat is het verschil? (2026)',
  description:
    'Kraanwater vs gefilterd water: uitgebreide vergelijking op smaak, veiligheid, kosten, milieu, mineralen, microplastics en PFAS. Welk water is het beste voor.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kraanwater/vs-gefilterd' },
  openGraph: {
    title: 'Kraanwater vs gefilterd water: wat is het verschil? (2026)',
    description:
      'Smaak, veiligheid, kosten en milieu: uitgebreide vergelijking van kraanwater, gefilterd water en flessenwater. Met 15-rijen vergelijkingstabel.',
    url: 'https://waterfilterplatform.nl/kraanwater/vs-gefilterd',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Is gefilterd water beter dan kraanwater?',
    answer:
      'Dat hangt af van uw definitie van "beter". Nederlands kraanwater is wettelijk veilig en voldoet aan meer dan 60 kwaliteitsnormen. Gefilterd water (met name omgekeerde osmose) verwijdert residuele zorgen zoals chloor-smaak, sporen PFAS, microplastics en hardheid. Voor smaakverbetering en extra zekerheid bij kwetsbare groepen is gefilterd water zinvol. Gezondheidskundig is onbehandeld Nederlands kraanwater voor de meeste mensen voldoende.',
  },
  {
    question: 'Wat kost gefilterd water vergeleken met kraanwater?',
    answer:
      'Kraanwater kost circa €0,001 per liter (€1,50/m³). Een filterkan brengt de kosten op ~€0,10/liter. Omgekeerde osmose met filtervervanging kost ~€0,02–0,05/liter. Flessenwater kost €0,50–1,50/liter — 500 tot 1500 keer duurder dan kraanwater. Gefilterd leidingwater via osmose is dus 10–25 keer duurder dan kraanwater maar 10–30 keer goedkoper dan flessenwater.',
  },
  {
    question: 'Bevat kraanwater nog mineralen na omgekeerde osmose filtratie?',
    answer:
      'Een omgekeerde osmose systeem verwijdert 95–99% van alle opgeloste stoffen, inclusief calcium en magnesium (hardheid). Puur RO-water heeft een zeer lage mineraalinhoud. Voor wie dit ongewenst vindt, is een remineralisatiefilter als extra trap beschikbaar — dit voegt calcium, magnesium en andere mineralen terug toe. De dagelijkse mineraalinname komt overigens hoofdzakelijk uit voeding, niet uit drinkwater.',
  },
  {
    question: 'Verwijdert een waterfilter microplastics uit kraanwater?',
    answer:
      'Dit hangt sterk af van het filtertype. Filterkannen (Brita-type) verwijderen geen microplastics aantoonbaar. Actieve koolstoffilters verwijderen deeltjes > een bepaalde grootte. Omgekeerde osmose blokkeert door het semipermeable membraan (poriën <0,0001 µm) vrijwel alle microplasticdeeltjes. Let op: ook plastic onderdelen van filters kunnen microplastics afgeven.',
  },
  {
    question: 'Is kraanwater beter voor het milieu dan gefilterd water of flessenwater?',
    answer:
      'Kraanwater heeft de laagste ecologische voetafdruk: geen verpakking, minimale transport, efficiënte grootschalige productie. Flessenwater heeft de hoogste impact: productie van plastic, transport (soms internationale import) en afvalverwerking. Thuisfilters vallen daartussenin: eenmalige investering in apparatuur, periodieke filtervervanging, maar geen transportkilometers en geen plastic flessen.',
  },
  {
    question: 'Wat is het verschil tussen filterkan, koolstoffilter en omgekeerde osmose?',
    answer:
      'Filterkan (Brita): filtert chloor en kalk gedeeltelijk, patronen maandelijks vervangen, geen installatie nodig. Koolstoffilter onderbouw: filtert chloor en organische stoffen volledig, permanente installatie, halfjaarlijks onderhoud. Omgekeerde osmose: filtert vrijwel alles (PFAS, nitraten, lood, microplastics, hardheid), meest complete oplossing, jaarlijks onderhoud.',
  },
  {
    question: 'Zijn er nadelen aan gefilterd water met omgekeerde osmose?',
    answer:
      'Twee mogelijke nadelen: (1) Mineralenverlies — RO verwijdert ook calcium en magnesium; oplosbaar via remineralisatiefilter. (2) Waterverbruik — RO-systemen produceren spoelwater (verhouding drinkwater:spoelwater = 1:2 tot 1:4 bij oudere systemen, moderne systemen zijn efficiënter). Moderne systemen met retentaat-recirculatie kunnen de waterefficiëntie aanzienlijk verbeteren.',
  },
  {
    question: 'Verwijdert een filter ook farmaceutische residuen uit kraanwater?',
    answer:
      'Actieve koolstoffilters verwijderen sommige farmaceutische residuen gedeeltelijk. Omgekeerde osmose verwijdert de meeste medicijnresten (80–99% afhankelijk van de stof en molecuulgrootte). Standaard filterkannen zijn hier niet voor gecertificeerd. De concentraties medicijnresten in Nederlands kraanwater zijn ultralaag (<0,001 µg/L) en worden door RIVM als verwaarloosbaar beschouwd.',
  },
];

const vergelijkingsTabel = [
  { criteria: 'Smaak (chloor)', kraanwater: 'Chloor merkbaar bij >0,1 mg/L', filterkan: 'Chloor deels verwijderd', koolstof: 'Chloor volledig weg', osmose: 'Puur, neutraal', flessenwater: 'Mineraalwatersmak' },
  { criteria: 'Chloor', kraanwater: '0,05–0,3 mg/L', filterkan: 'Gereduceerd', koolstof: '<0,01 mg/L', osmose: '<0,01 mg/L', flessenwater: 'Nvt' },
  { criteria: 'PFAS (sporen)', kraanwater: '<0,05 µg/L (NL gem.)', filterkan: 'Niet verwijderd', koolstof: 'Deels', osmose: '95–99% weg', flessenwater: 'Varieert' },
  { criteria: 'Nitraten', kraanwater: '15–45 mg/L', filterkan: 'Niet verwijderd', koolstof: 'Niet verwijderd', osmose: '90–95% weg', flessenwater: 'Laag (<5 mg/L)' },
  { criteria: 'Lood', kraanwater: '<1 µg/L (levering)', filterkan: 'Niet verwijderd', koolstof: 'Deels (NSF53)', osmose: '95–99% weg', flessenwater: 'Geen leidingen' },
  { criteria: 'Hardheid / kalk', kraanwater: '4–22 °dH regionaal', filterkan: 'Deels (kationhars)', koolstof: 'Niet verwijderd', osmose: '95–99% weg', flessenwater: '1–20 °dH' },
  { criteria: 'Mineralen (Ca, Mg)', kraanwater: 'Aanwezig', filterkan: 'Deels aanwezig', koolstof: 'Aanwezig', osmose: 'Verwijderd*', flessenwater: 'Aanwezig' },
  { criteria: 'Microplastics', kraanwater: 'Sporen aanwezig', filterkan: 'Nauwelijks effect', koolstof: 'Grote deeltjes', osmose: 'Geblokkeerd (<0,0001µm)', flessenwater: 'In plastic fles zelf' },
  { criteria: 'Bacteriën / virussen', kraanwater: '0 (na zuivering)', filterkan: 'Geen effect', koolstof: 'Geen effect', osmose: '>99% geblokkeerd', flessenwater: 'Veilig (ongeopend)' },
  { criteria: 'Medicijnresten', kraanwater: '<0,001 µg/L', filterkan: 'Niet verwijderd', koolstof: 'Gedeeltelijk', osmose: '80–99%', flessenwater: 'Nvt' },
  { criteria: 'Kosten per liter', kraanwater: '€0,001', filterkan: '~€0,10', koolstof: '~€0,03–0,06', osmose: '~€0,02–0,05', flessenwater: '€0,50–1,50' },
  { criteria: 'Milieu voetafdruk', kraanwater: 'Laag (grootschalig)', filterkan: 'Gemiddeld (plastic)', koolstof: 'Laag-gemiddeld', osmose: 'Laag (spoelwater)', flessenwater: 'Hoog (plastic, transport)' },
  { criteria: 'Installatie', kraanwater: 'Geen', filterkan: 'Geen', koolstof: 'Ja (onderbouw)', osmose: 'Ja (onderbouw/aanrecht)', flessenwater: 'Geen' },
  { criteria: 'Onderhoud', kraanwater: 'Geen', filterkan: 'Maandelijks patroon', koolstof: 'Halfjaarlijks filter', osmose: 'Halfjaarlijks + membraan 2jr', flessenwater: 'Bestellen' },
  { criteria: 'Remineralisatie nodig?', kraanwater: 'Nee', filterkan: 'Nee', koolstof: 'Nee', osmose: 'Optioneel (aanbevolen)', flessenwater: 'Nee' },
];

export default function KraanwaterVsGefilterdPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Kraanwater vs gefilterd water: wat is het verschil? (2026)',
          description:
            'Uitgebreide vergelijking van kraanwater, filterkan, koolstoffilter, omgekeerde osmose en flessenwater op smaak, veiligheid, kosten, milieu en mineralen.',
          datePublished: '2026-03-25',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/kraanwater/vs-gefilterd',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kraanwater', url: 'https://waterfilterplatform.nl/kraanwater' },
          { name: 'vs Gefilterd Water', url: 'https://waterfilterplatform.nl/kraanwater/vs-gefilterd' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kraanwater" className="hover:text-[#005F8A]">Kraanwater</Link>
            <span className="mx-2">/</span>
            <span>vs Gefilterd Water</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kraanwater vs gefilterd water: wat is het verschil? (2026)
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Kraanwater, gefilterd water of flessenwater — wat is de beste keuze? In Nederland
            is kraanwater wettelijk veilig, maar gefilterd water verbetert de smaak en vermindert
            residuele zorgen. Op deze pagina vergelijken we alle opties op smaak, veiligheid,
            mineralen, microplastics, PFAS, kosten en milieu-impact.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#vergelijking"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Naar vergelijkingstabel →
            </Link>
            <Link
              href="#conclusie"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Conclusie en advies
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* QuickAnswer */}
        <QuickAnswer answer="Nederlands kraanwater is veilig en kost €0,001/liter. Gefilterd water via omgekeerde osmose kost €0,02–0,05/liter maar verwijdert ook chloor-smaak, sporen PFAS, microplastics en hardheid. Flessenwater is 500–1500x duurder dan kraanwater met de hoogste milieu-impact. Voor de meeste Nederlanders is kraanwater prima; gefilterd water biedt smaak- en gemoedsrust-voordelen." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#smaak" className="hover:underline">Smaak: chloor vs mineralen</a></li>
            <li><a href="#veiligheid" className="hover:underline">Veiligheid: wettelijk vs optimaal</a></li>
            <li><a href="#kosten" className="hover:underline">Kosten per liter vergeleken</a></li>
            <li><a href="#milieu" className="hover:underline">Milieu: voetafdruk per watertype</a></li>
            <li><a href="#mineralen" className="hover:underline">Mineralen en remineralisatie</a></li>
            <li><a href="#microplastics" className="hover:underline">Microplastics en PFAS</a></li>
            <li><a href="#vergelijking" className="hover:underline">15-rijen vergelijkingstabel</a></li>
            <li><a href="#conclusie" className="hover:underline">Conclusie en advies</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Smaak */}
        <section id="smaak">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Smaak: chloor in kraanwater vs mineralen in gefilterd water</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De meest genoemde reden om kraanwater te filteren is smaak. Residueel chloor
            (0,05–0,3 mg/L) wordt bewust in kraanwater gehouden om bacteriegroei in het
            distributienet te voorkomen, maar geeft boven ~0,1 mg/L een merkbare smaak en geur.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="font-semibold text-amber-800 mb-2">Kraanwater smaakprofiel</p>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>→ Chloor-geur bij stilstaand water</li>
                <li>→ Kalkige nasmaak bij hard water</li>
                <li>→ Vervaagt bij koelen in koelkast</li>
                <li>→ Sterker bij warm of lauw water</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="font-semibold text-green-800 mb-2">Gefilterd water smaakprofiel</p>
              <ul className="text-sm text-green-700 space-y-1">
                <li>→ Koolstoffilter: neutraal, fris</li>
                <li>→ Osmose: puur, licht plat gevoel</li>
                <li>→ Osmose + remineralisatie: rondig</li>
                <li>→ Geen chloor of kalknasmak</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Omgekeerde osmose verwijdert vrijwel alle opgeloste stoffen, waardoor het water
            een licht &ldquo;platte&rdquo; smaak kan hebben. Een remineralisatiefilter als
            extra trap voegt calcium, magnesium en bicarbonaat terug toe, wat resulteert in
            een smaakprofiel vergelijkbaar met premium bronwater.
          </p>
        </section>

        {/* Veiligheid */}
        <section id="veiligheid">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Veiligheid: wettelijk veilig vs subjectief optimaal</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nederlands kraanwater is wettelijk veilig: meer dan 99,9% van alle metingen
            voldoet aan het Drinkwaterbesluit en de EU-Drinkwaterrichtlijn 2020/2184.
            Maar &ldquo;veilig&rdquo; heeft een specifieke wettelijke definitie — het betekent
            dat alle gemeten stoffen onder de maximumwaarden liggen.
          </p>

          <div className="space-y-3 mb-5">
            {[
              {
                titel: 'Wettelijk veilig (kraanwater)',
                punten: [
                  'Voldoet aan >60 parameters Drinkwaterbesluit',
                  'E.coli en bacteriën: 0 KVE/100mL',
                  'PFAS, nitraat, lood: onder wettelijke grenzen',
                  'Gecontroleerd door RIVM en ILT',
                ],
                kleur: 'border-green-200 bg-green-50',
                titleKleur: 'text-green-800',
              },
              {
                titel: 'Subjectief zorgen (residueel aanwezig)',
                punten: [
                  'Chloor 0,05–0,3 mg/L (smaak/geur)',
                  'PFAS sporen <0,05 µg/L (lokaal hoger)',
                  'Microplastics (laag niveau, norm in ontwikkeling)',
                  'Medicijnresten ultralaag (<0,001 µg/L)',
                ],
                kleur: 'border-amber-200 bg-amber-50',
                titleKleur: 'text-amber-800',
              },
            ].map(b => (
              <div key={b.titel} className={`border rounded-xl p-4 ${b.kleur}`}>
                <p className={`font-semibold mb-2 ${b.titleKleur}`}>{b.titel}</p>
                <ul className="space-y-1">
                  {b.punten.map(p => (
                    <li key={p} className="text-sm text-gray-700 flex gap-2">
                      <span className="shrink-0">→</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed">
            Gefilterd water via omgekeerde osmose is in de praktijk &ldquo;schoner&rdquo; dan
            kraanwater — het bevat vrijwel geen opgeloste stoffen. Dit biedt extra gemoedsrust,
            maar is voor de gemiddelde gezonde volwassene in Nederland geen medische noodzaak.
            Voor kwetsbare groepen (baby&apos;s, zwangere vrouwen, immuungecompromitteerden)
            kan extra filtratie wél zinvol zijn.
          </p>
        </section>

        {/* Kosten */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kosten per liter vergeleken</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Kostenvergelijking is één van de meest overtuigende argumenten voor kraanwater
            of gefilterd leidingwater ten opzichte van flessenwater:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {[
              { type: 'Kraanwater', prijs: '€0,001', kleur: 'bg-green-50 border-green-200' },
              { type: 'Osmose filter', prijs: '€0,02–0,05', kleur: 'bg-blue-50 border-blue-200' },
              { type: 'Filterkan', prijs: '~€0,10', kleur: 'bg-amber-50 border-amber-200' },
              { type: 'Flessenwater', prijs: '€0,50–1,50', kleur: 'bg-red-50 border-red-200' },
            ].map(k => (
              <div key={k.type} className={`border rounded-xl p-4 text-center ${k.kleur}`}>
                <p className="font-bold text-lg text-gray-900">{k.prijs}</p>
                <p className="text-xs text-gray-600 mt-1">per liter</p>
                <p className="text-xs font-medium text-gray-700 mt-1">{k.type}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Een gezin dat dagelijks 2 liter per persoon drinkt (4 personen = 8 liter/dag)
            betaalt per jaar:
          </p>
          <div className="space-y-2 mb-4">
            {[
              { type: 'Kraanwater', bedrag: '~€3', noot: 'verwaarloosbaar' },
              { type: 'Osmose gefilterd', bedrag: '~€60–180', noot: 'inclusief jaarlijks filteronderhoud' },
              { type: 'Filterkan', bedrag: '~€300', noot: 'patronen elke maand' },
              { type: 'Flessenwater (1L PET)', bedrag: '€1.460–4.380', noot: 'bij €0,50–1,50 per liter' },
            ].map(k => (
              <div key={k.type} className="flex items-center justify-between border border-gray-100 rounded-xl px-4 py-3">
                <span className="font-medium text-gray-800 text-sm">{k.type}</span>
                <div className="text-right">
                  <span className="font-bold text-[#003F5C]">{k.bedrag}</span>
                  <p className="text-xs text-gray-400">{k.noot}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Milieu */}
        <section id="milieu">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Milieu: voetafdruk per watertype</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Kraanwater heeft de laagste ecologische voetafdruk van alle drinkwateropties.
            Grootschalige productie, minimaal verpakkingsmateriaal en een kort distributienet
            maken het tot de meest duurzame keuze. De vergelijking:
          </p>

          <div className="space-y-3">
            {[
              {
                type: 'Kraanwater',
                voetafdruk: 'Laagst',
                kleur: 'border-green-200 bg-green-50',
                badge: 'bg-green-100 text-green-800',
                toelichting: 'Centraal geproduceerd, geen verpakking, efficiënt transport via leidingnet. CO₂-uitstoot voor drinkwaterproductie ~0,0003 kg CO₂/liter.',
              },
              {
                type: 'Huisfilter (osmose/koolstof)',
                voetafdruk: 'Laag-gemiddeld',
                kleur: 'border-blue-200 bg-blue-50',
                badge: 'bg-blue-100 text-blue-800',
                toelichting: 'Eenmalige apparaatproductie, periodieke filtervervanging (kunststof componenten), osmose produceert spoelwater. Geen transportemissies voor water zelf.',
              },
              {
                type: 'Filterkan (Brita)',
                voetafdruk: 'Gemiddeld',
                kleur: 'border-amber-200 bg-amber-50',
                badge: 'bg-amber-100 text-amber-800',
                toelichting: 'Maandelijkse patronvervanging (kunststof), productie van patronen kost energie en grondstoffen. Kansarm op juiste verwerking patronen.',
              },
              {
                type: 'Flessenwater (PET)',
                voetafdruk: 'Hoogst',
                kleur: 'border-red-200 bg-red-50',
                badge: 'bg-red-100 text-red-800',
                toelichting: 'Productie van PET-fles (~100g CO₂ per fles), transport (soms transcontinen­taal), koeling in supermarkt, 30% van plastic flessen belandt niet in recycling.',
              },
            ].map(m => (
              <div key={m.type} className={`border rounded-xl p-4 ${m.kleur}`}>
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <p className="font-semibold text-gray-800">{m.type}</p>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${m.badge}`}>{m.voetafdruk}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{m.toelichting}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mineralen */}
        <section id="mineralen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Mineralen: kraanwater vs osmose — en remineralisatie</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een veelbesproken aspect van omgekeerde osmose is het verlies van mineralen.
            Kraanwater bevat calcium (20–180 mg/L) en magnesium (2–25 mg/L), die bijdragen
            aan de dagelijkse mineraalinname. Na osmose-filtratie is vrijwel alles verwijderd.
          </p>

          <div className="bg-[#E0F2FE]/60 rounded-2xl p-4 mb-5">
            <p className="font-semibold text-[#003F5C] mb-2 text-sm">Mineralen uit water vs voeding</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Drinkwater levert gemiddeld slechts 5–10% van de dagelijkse calcium- en
              magnesiuminname. Groenten, zuivel, noten en granen zijn de hoofdbron. Het
              verlies van mineralen door osmose heeft daarom voor de meeste mensen geen
              significante voedingskundige impact. Voor wie toch zekerheid wil, is een
              remineralisatiefilter de eenvoudige oplossing.
            </p>
          </div>

          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[400px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Mineraal</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Kraanwater NL</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Na osmose</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Na remineralisatie</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mineraal: 'Calcium', kraanwater: '20–180 mg/L', osmose: '<5 mg/L', remineralisatie: '30–80 mg/L' },
                  { mineraal: 'Magnesium', kraanwater: '2–25 mg/L', osmose: '<1 mg/L', remineralisatie: '5–15 mg/L' },
                  { mineraal: 'Natrium', kraanwater: '10–60 mg/L', osmose: '<5 mg/L', remineralisatie: '5–20 mg/L' },
                  { mineraal: 'Bicarbo­naat', kraanwater: '50–350 mg/L', osmose: '<10 mg/L', remineralisatie: '50–150 mg/L' },
                ].map((r, i) => (
                  <tr
                    key={r.mineraal}
                    className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-[#E0F2FE]/20 border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 font-medium text-gray-900">{r.mineraal}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.kraanwater}</td>
                    <td className="py-2.5 px-3 text-red-600 text-xs">{r.osmose}</td>
                    <td className="py-2.5 px-3 text-green-700 text-xs">{r.remineralisatie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Microplastics en PFAS */}
        <section id="microplastics">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Microplastics en PFAS: filter of niet?</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Microplastics en PFAS zijn de twee zorgen die consumenten het meest naar
            waterfilters drijven. Hier is de stand van zaken voor Nederland:
          </p>

          <div className="space-y-4">
            <div className="border border-gray-100 rounded-2xl p-5">
              <p className="font-bold text-[#003F5C] mb-2">Microplastics in kraanwater</p>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                RIVM-onderzoek bevestigt de aanwezigheid van microplastics in Nederlands
                kraanwater, maar op laag niveau. De gezondheidseffecten zijn nog niet
                volledig vastgesteld; EU-normen zijn in ontwikkeling. Omgekeerde osmose
                (membraan &lt;0,0001 µm) blokkeert vrijwel alle microplasticdeeltjes.
                Kanttekening: plastic componenten van filters zelf kunnen ook microplastics
                afgeven — kies voor gecertificeerde systemen.
              </p>
              <div className="text-xs text-[#005F8A] font-medium">
                Filter advies: omgekeerde osmose membraan is meest effectief
              </div>
            </div>

            <div className="border border-gray-100 rounded-2xl p-5">
              <p className="font-bold text-[#003F5C] mb-2">PFAS in kraanwater</p>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                PFAS-concentraties in Nederlands kraanwater liggen gemiddeld ruim onder
                de EU-norm van 0,10 µg/L (som van 20 PFAS). Lokale verhogingen bestaan
                nabij Schiphol, Eindhoven Airport en Chemours. Omgekeerde osmose verwijdert
                95–99% van PFAS-verbindingen. Standaard koolstoffilters en filterkannen
                bieden geen betrouwbare PFAS-verwijdering.
              </p>
              <div className="text-xs text-[#005F8A] font-medium">
                Filter advies: alleen omgekeerde osmose is gecertificeerd voor PFAS-verwijdering
              </div>
            </div>
          </div>
        </section>

        {/* Vergelijkingstabel */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Uitgebreide vergelijkingstabel: 15 criteria</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Onderstaande tabel vergelijkt kraanwater, filterkan, koolstoffilter, omgekeerde
            osmose en flessenwater op 15 criteria:
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[700px] text-xs border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-2 font-semibold">Criteria</th>
                  <th className="text-left py-2.5 px-2 font-semibold">Kraanwater</th>
                  <th className="text-left py-2.5 px-2 font-semibold">Filterkan</th>
                  <th className="text-left py-2.5 px-2 font-semibold">Koolstof­filter</th>
                  <th className="text-left py-2.5 px-2 font-semibold">Osmose</th>
                  <th className="text-left py-2.5 px-2 font-semibold">Flessenwater</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingsTabel.map((r, i) => (
                  <tr
                    key={r.criteria}
                    className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-[#E0F2FE]/20 border-b border-gray-100'}
                  >
                    <td className="py-2 px-2 font-semibold text-gray-800">{r.criteria}</td>
                    <td className="py-2 px-2 text-gray-600">{r.kraanwater}</td>
                    <td className="py-2 px-2 text-gray-600">{r.filterkan}</td>
                    <td className="py-2 px-2 text-gray-600">{r.koolstof}</td>
                    <td className="py-2 px-2 text-[#005F8A] font-medium">{r.osmose}</td>
                    <td className="py-2 px-2 text-gray-600">{r.flessenwater}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            * Osmose verwijdert mineralen; remineralisatiefilter als extra trap aanbevolen.
            Waarden zijn indicatief voor gemiddeld Nederlands leidingwater.
          </p>
        </section>

        {/* Conclusie */}
        <section id="conclusie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Conclusie: wat is het beste water voor u?</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Nederlands kraanwater is veilig en de meest duurzame en goedkoopste keuze.
            Gefilterd water verbetert de smaak en vermindert residuele zorgen. Flessenwater
            is de duurste en minst duurzame optie met geen kwaliteitsvoordeel ten opzichte
            van goed gefilterd leidingwater.
          </p>

          <div className="space-y-3 mb-6">
            {[
              {
                profiel: 'Gezonde volwassene, moderne woning',
                advies: 'Kraanwater is prima. Voeg eventueel een koolstoffilter toe als de chloor-smaak stoort.',
                kleur: 'border-green-200 bg-green-50',
              },
              {
                profiel: 'Gezin met baby\'s of zwangere vrouw',
                advies: 'Omgekeerde osmose voor extra zekerheid bij flesvoeding. Controleer op loodleidingen (bouw voor 1960).',
                kleur: 'border-blue-200 bg-blue-50',
              },
              {
                profiel: 'Hard watergebied (Limburg, Brabant, >14 °dH)',
                advies: 'Waterontharder voor totale huishoudbehandeling, of osmose voor drinkwater. Bekijk de waterhardheid per gemeente.',
                kleur: 'border-orange-200 bg-orange-50',
              },
              {
                profiel: 'Zorgen over PFAS of nitraten',
                advies: 'Omgekeerde osmose is de enige bewezen thuisoplossing voor PFAS (95–99%) en nitraten (90–95%). Controleer de kwaliteitsrapportage van uw drinkwaterbedrijf.',
                kleur: 'border-red-200 bg-red-50',
              },
              {
                profiel: 'Milieuconscious, wil flessenwater vervangen',
                advies: 'Schakel over naar kraanwater of gefilterd leidingwater. Osmose of koolstoffilter geeft smaak van premium water voor 1/20 tot 1/100 van de kosten.',
                kleur: 'border-[#005F8A]/20 bg-[#E0F2FE]/30',
              },
            ].map(c => (
              <div key={c.profiel} className={`border rounded-xl p-4 ${c.kleur}`}>
                <p className="font-semibold text-gray-800 mb-1 text-sm">{c.profiel}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{c.advies}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#E0F2FE] rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2">Niet zeker welk filter bij u past?</p>
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
              Bekijk de vergelijking van alle waterfiltersoorten of lees meer over omgekeerde
              osmose — de meest complete filteroplossing voor leidingwater.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/waterfilter/soorten"
                className="bg-[#005F8A] text-white font-semibold px-4 py-2 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
              >
                Alle filtersoorten →
              </Link>
              <Link
                href="/omgekeerde-osmose"
                className="border border-[#005F8A] text-[#005F8A] font-semibold px-4 py-2 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
              >
                Omgekeerde osmose gids
              </Link>
            </div>
          </div>
        </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/vergelijken/kraanwater-vs-flessenwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Kraanwater vs flessenwater</h3>
            <p className="text-sm text-gray-600">Vergelijking van kraanwater en flessenwater op kwaliteit en kosten.</p>
          </Link>
          <Link href="/filtertechnieken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Filtertechnieken</h3>
            <p className="text-sm text-gray-600">Overzicht van alle filtertechnieken om kraanwater te verbeteren.</p>
          </Link>
          <Link href="/keuzehulp" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp waterfilter</h3>
            <p className="text-sm text-gray-600">Welk waterfilter past bij uw situatie en waterkwaliteit?</p>
          </Link>
          <Link href="/waterfilter/soorten" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Soorten waterfilters</h3>
            <p className="text-sm text-gray-600">Vergelijking van filtersoorten: osmose, koolstof, UV en meer.</p>
          </Link>
        </div>
      </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer over kraanwater en waterfilters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/kraanwater/kwaliteit',
                title: 'Kraanwater kwaliteit',
                desc: 'Veilig, maar niet altijd optimaal: residuele zorgen en wat u eraan kunt doen.',
              },
              {
                href: '/leidingwater/kwaliteit',
                title: 'Leidingwater kwaliteit Nederland',
                desc: 'Normen, parameters en regionale kwaliteitsverschillen uitgebreid besproken.',
              },
              {
                href: '/leidingwater/kwaliteit-verbeteren',
                title: 'Leidingwater kwaliteit verbeteren',
                desc: '6 bewezen methoden met kosten en onderhoudsadvies.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Hoe hard is het water bij u thuis? Zoek het op en lees advies.',
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over kraanwater vs gefilterd water</h2>
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
