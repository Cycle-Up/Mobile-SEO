import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Hoe werkt het Quooker filter? Werking, kosten en wat het niet verwijdert',
  description:
    'Het Quooker filter is een actief koolstoffilter dat chloor en geur verwijdert. Maar wat doet het niet? Kosten, vervangingsinterval en vergelijking met osmose.',
  alternates: { canonical: 'https://waterfilterplatform.nl/quooker-filter' },
  openGraph: {
    title: 'Quooker filter — werking, kosten en wat het niet verwijdert',
    description:
      'Wat verwijdert het Quooker koolstoffilter wel en niet? Kosten, vervangingsinterval en vergelijking met omgekeerde osmose. Onafhankelijke uitleg.',
    url: 'https://waterfilterplatform.nl/quooker-filter',
    type: 'article',
    locale: 'nl_NL',
  },
};

const faqItems = [
  {
    question: 'Heeft elke Quooker een filter?',
    answer:
      'Nee. Standaard Quooker PRO3- en PRO7-modellen leveren ongefilterd kokend water. De FILTER-eenheid (PRO3 FILTER / PRO7 FILTER) is een apart model met ingebouwde koolstoffiltratie voor koud gefilterd water. De CUBE is een add-on module die gekoeld (4°C) en bruisend gefilterd water toevoegt aan de FILTER-functies. Controleer altijd het modelnummer om te weten of uw Quooker een filterpatroon bevat.',
  },
  {
    question: 'Wat verwijdert het Quooker filter wel?',
    answer:
      'Het Quooker koolstoffilter verwijdert vrij chloor (90–95%), chloorbijproducten zoals trihalomethanen (THMs) en haloazijnzuren (HAAs), smaak- en geurafwijkingen en deels lood bij woningen met loodslangen. Dit zijn typische prestaties van een actief koolstofblokfilter bij Nederlands leidingwater.',
  },
  {
    question: 'Wat verwijdert het Quooker filter NIET?',
    answer:
      'Het Quooker koolstoffilter verwijdert geen kalk of hardheid (calcium en magnesium), nitraten, PFAS (poly- en perfluoralkylstoffen), zware metalen zoals arseen en kwik, pesticiden in hogere concentraties, microplastics, bacteriën of virussen. Voor deze stoffen is een aanvullend osmosefilter of ander filtratiesysteem nodig.',
  },
  {
    question: 'Hoe vaak moet het Quooker filterpatroon vervangen worden?',
    answer:
      'Na 1.500 liter of elke 12 maanden — wat eerder komt. De Quooker heeft een indicator op het display die aangeeft wanneer het filter vol is: groen (ok), oranje (bijna vol) en rood (vervangen). Bij een gezin van 4 personen dat gemiddeld 3 liter gefilterd water per dag gebruikt, komt u op circa 8–10 maanden. Bij intensiever gebruik eerder.',
  },
  {
    question: 'Wat kost een Quooker filterpatroon?',
    answer:
      'Een standaard Quooker filterpatroon kost €15–25, afhankelijk van het model (COMBI(+) of CUBE filter). Patronen zijn te bestellen via de Quooker webshop of erkende dealers. Bij normaal gebruik (één vervanging per jaar) liggen de jaarlijkse filterkosten op €20–30. Bij intensief gebruik (twee per jaar) op €30–50.',
  },
  {
    question: 'Kan ik een osmose filter combineren met een Quooker?',
    answer:
      'Ja. Een onderbouw omgekeerde osmose systeem kan worden aangesloten vóór de koudwateraansluiting van de Quooker. Het osmosewater loopt dan door de Quooker — u krijgt zo kokend, warm én diep gefilterd koud water uit dezelfde kraan. De installatie vereist een T-stuk op de toevoerleiding en wordt aanbevolen door een loodgieter of installateur.',
  },
  {
    question: 'Wat is het verschil tussen Quooker FILTER en Quooker CUBE?',
    answer:
      'De Quooker FILTER (PRO3 FILTER / PRO7 FILTER) geeft koud gefilterd water naast kokend en warm water — drie functies in totaal. De CUBE is een separate module die gekoeld water (4°C) en bruisend gefilterd water toevoegt aan de FILTER-functies — in totaal vijf functies uit één kraan: kokend, warm, koud gefilterd, koud bruisend en koud gekoeld.',
  },
  {
    question: 'Is een Quooker filter voldoende voor mensen met hard water?',
    answer:
      'Nee. Het koolstoffilter in de Quooker verwijdert geen waterhardheid (calcium en magnesium). Bij hard water (boven 12°dH) blijft kalkaanslag optreden in de Quooker boiler en in uw waterkoker en koffiemachine. Voor hard water is een waterontharder (ionenwisselaar) of een omgekeerde osmose filter de betere keuze.',
  },
];

const verwijdertData = [
  { stof: 'Chloor', resultaat: '✓ ja', klasse: 'text-green-700' },
  { stof: 'Geur en smaak', resultaat: '✓ ja', klasse: 'text-green-700' },
  { stof: 'THMs (chloorbijproducten)', resultaat: '✓ ja', klasse: 'text-green-700' },
  { stof: 'Lood (bij loodslangen)', resultaat: '½ deels', klasse: 'text-amber-600' },
  { stof: 'Kalk (hardheid)', resultaat: '✗ nee', klasse: 'text-red-600' },
  { stof: 'Nitraat', resultaat: '✗ nee', klasse: 'text-red-600' },
  { stof: 'PFAS', resultaat: '✗ nee', klasse: 'text-red-600' },
  { stof: 'Bacteriën', resultaat: '✗ nee', klasse: 'text-red-600' },
  { stof: 'Microplastics', resultaat: '✗ nee', klasse: 'text-red-600' },
  { stof: 'Pesticiden', resultaat: '✗ nee', klasse: 'text-red-600' },
];

const modellenData = [
  {
    model: 'PRO3 FILTER',
    functies: 'Kokend, warm, koud gefilterd',
    filtert: 'Ja',
    prijsindicatie: '± € 1.100–1.400',
  },
  {
    model: 'PRO3 FUSION FILTER',
    functies: 'Kokend, warm, koud gefilterd (geïntegreerde mengkraan)',
    filtert: 'Ja',
    prijsindicatie: '± € 1.300–1.700',
  },
  {
    model: 'CUBE (add-on)',
    functies: 'Gekoeld (4°C) en bruisend gefilterd water — toevoeging op FILTER',
    filtert: 'Ja',
    prijsindicatie: '± € 500–700 (add-on)',
  },
  {
    model: 'PRO3 / PRO7 (standaard)',
    functies: 'Kokend en warm water',
    filtert: 'Nee',
    prijsindicatie: '± € 700–1.100',
  },
];

export default function QuookerFilterPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Quooker filter', url: 'https://waterfilterplatform.nl/quooker-filter' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Hoe werkt het Quooker filter? Werking, kosten en wat het niet verwijdert',
          description:
            'Het Quooker filter is een actief koolstoffilter dat chloor en geur verwijdert. Maar wat doet het niet? Kosten, vervangingsinterval en vergelijking met osmose.',
          datePublished: '2026-04-10',
          url: 'https://waterfilterplatform.nl/quooker-filter',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Quooker filter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Hoe werkt het Quooker filter? Werking, kosten en wat het niet verwijdert
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Niet iedere Quooker heeft een filter — en de modellen die dat wel hebben, gebruiken een actief
            koolstoffilter met specifieke mogelijkheden én beperkingen. Op deze pagina leggen we objectief uit
            hoe het Quooker filtratiesysteem werkt, wat het verwijdert, wat het niet verwijdert, wat het
            filterpatroon kost en wanneer een aanvullend osmosefilter verstandiger is.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quooker/filter-vervangen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Filterpatroon vervangen →
            </Link>
            <Link
              href="/quooker-versus-osmose"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Quooker vs osmose vergelijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <QuickAnswer answer="De Quooker heeft een ingebouwd actief koolstoffilter dat chloor, geur en chloorbijproducten uit het water haalt. Het verwijdert geen nitraten, kalk, zware metalen of PFAS. Filterpatroon vervangen elke 1.500 liter of circa 12 maanden. Kosten: €15–25 per patroon. Voor diepere filtratie is een aanvullend osmosefilter nodig." />

        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#heeft-elke-quooker-filter" className="hover:underline">Heeft elke Quooker een filter?</a></li>
            <li><a href="#wat-verwijdert-het-wel" className="hover:underline">Wat verwijdert het filter wel?</a></li>
            <li><a href="#wat-verwijdert-het-niet" className="hover:underline">Wat verwijdert het filter NIET?</a></li>
            <li><a href="#modellen-overzicht" className="hover:underline">Quooker modellen met filter</a></li>
            <li><a href="#wanneer-voldoende" className="hover:underline">Wanneer is het filter voldoende?</a></li>
            <li><a href="#onderhoud" className="hover:underline">Filterpatroon onderhoud</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        <section id="heeft-elke-quooker-filter">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Heeft elke Quooker een filter?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nee — dit is een veelvoorkomend misverstand. Een standaard <strong>Quooker PRO3</strong> of{' '}
            <strong>PRO7</strong> levert uitsluitend kokend en warm water, zonder enige filtratie. Het water
            dat u via die modellen drinkt of gebruikt voor thee en koffie, is gewoon ongefilterd leidingwater
            dat op kooktemperatuur is gebracht.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De filtratiefunctie is uitsluitend beschikbaar in de <strong>FILTER-modellen</strong>: de PRO3 FILTER
            en de PRO3 FUSION FILTER. Deze bevatten een ingebouwde koolstoffiltratie voor koud, gefilterd water.
            De <strong>CUBE</strong> is een aparte uitbreidingsmodule die alleen werkt in combinatie met een
            FILTER-model en gekoeld (4°C) en bruisend gefilterd water toevoegt.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Tip:</strong> controleer het modelnummer op uw Quooker of in de
            handleiding. Staat er FILTER of COMBI FILTER in de naam? Dan heeft uw Quooker een filterpatroon dat
            regelmatig vervangen moet worden. Staat er alleen PRO3 of PRO7? Dan heeft u geen filter.
          </div>
        </section>

        <section id="wat-verwijdert-het-wel">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat verwijdert het Quooker filter wel?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het Quooker FILTER-systeem gebruikt een <strong>actief koolstofblokfilter</strong>. Actieve kool heeft
            een enorm intern oppervlak — tot 1.000 m² per gram — waaraan organische verbindingen en chloor zich
            binden door adsorptie. Dit zijn de stoffen die een koolstofblokfilter effectief aanpakt:
          </p>
          <div className="space-y-3 mb-4">
            {[
              {
                titel: 'Vrij chloor (90–95%)',
                tekst:
                  'Nederlands leidingwater bevat chloor als desinfectiemiddel. Het koolstoffilter bindt chloor effectief, wat resulteert in water zonder chloorgeur en met een neutralere smaak.',
              },
              {
                titel: 'Trihalomethanen en haloazijnzuren (THMs en HAAs)',
                tekst:
                  'Dit zijn chloorbijproducten die ontstaan wanneer chloor reageert met organisch materiaal in water. Een koolstoffilter verwijdert deze stoffen voor 90% of meer.',
              },
              {
                titel: 'Smaak- en geurafwijkingen',
                tekst:
                  'Organische verbindingen die water een aardse, metaalachtige of chemische smaak geven, worden effectief geabsorbeerd door de koolstructuur.',
              },
              {
                titel: 'Lood (deels, bij loodslangen)',
                tekst:
                  'Woningen met loodslangen (gebouwd vóór 1960) kunnen lood in het water hebben. Een koolstofblokfilter vangt een deel van dit lood op, maar niet volledig. Voor zekerheid is een RO-membraan beter.',
              },
            ].map(s => (
              <div key={s.titel} className="bg-white border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">✓ {s.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{s.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wilt u meer weten over hoe een actief koolstoffilter werkt? Lees onze uitgebreide uitleg op de{' '}
            <Link href="/koolstoffilter" className="text-[#005F8A] underline hover:no-underline">
              koolstoffilter pagina
            </Link>.
          </p>
        </section>

        <section id="wat-verwijdert-het-niet">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat verwijdert het Quooker filter NIET?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Actieve kool is selectief: het werkt uitstekend voor organische verbindingen en chloor, maar heeft
            nauwelijks effect op anorganische stoffen. Dit zijn de stoffen die het Quooker filter <em>niet</em>{' '}
            verwijdert:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Stof</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Verwijderd door Quooker filter?</th>
                </tr>
              </thead>
              <tbody>
                {verwijdertData.map(r => (
                  <tr key={r.stof} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 text-gray-800">{r.stof}</td>
                    <td className={`py-2.5 px-3 text-center font-semibold ${r.klasse}`}>{r.resultaat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500 mt-3">
            Typische waarden voor het Quooker koolstofblokfilter bij Nederlands leidingwater. Bron: technische
            specificaties actief koolstoffiltratie en NSF-normen.
          </p>

          <div className="mt-6 space-y-3">
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
              <p className="font-semibold text-amber-900 text-sm mb-1">Kalk blijft volledig aanwezig</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Calcium en magnesium — verantwoordelijk voor kalk — zijn anorganische mineralen die actieve kool
                niet bindt. Woonachtig in een hardwaterregio? Dan beschermt het Quooker filter uw boiler en
                apparaten niet tegen kalkaanslag.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
              <p className="font-semibold text-amber-900 text-sm mb-1">PFAS worden niet effectief verwijderd</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                PFAS-verbindingen worden door een standaard koolstoffilter slechts gedeeltelijk verwijderd.
                Voor volledige PFAS-verwijdering is een omgekeerde osmose membraan nodig, dat 95–99% van
                PFAS-stoffen filtert.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
              <p className="font-semibold text-amber-900 text-sm mb-1">Nitraten en zware metalen passeren ongehinderd</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                In agrarische gebieden kunnen nitraatgehaltes verhoogd zijn. Nitraat is een anorganisch zout
                dat actieve kool vrijwel niet absorbeert. Hetzelfde geldt voor arseen, kwik en andere zware
                metalen in hogere concentraties.
              </p>
            </div>
          </div>
        </section>

        <section id="modellen-overzicht">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke Quooker modellen hebben een filter?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Onderstaande tabel geeft een overzicht van de Quooker modellen die met filtratie leverbaar zijn,
            de bijbehorende functies en een indicatieve prijsrange (afgerond, excl. installatie).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Model</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Functies</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Filtert</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Prijs indicatie</th>
                </tr>
              </thead>
              <tbody>
                {modellenData.map(r => (
                  <tr key={r.model} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.model}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.functies}</td>
                    <td className={`py-2.5 px-3 text-center font-semibold ${r.filtert === 'Ja' ? 'text-green-700' : 'text-red-600'}`}>
                      {r.filtert === 'Ja' ? '✓ Ja' : '✗ Nee'}
                    </td>
                    <td className="py-2.5 px-3 text-right text-[#005F8A] font-semibold">{r.prijsindicatie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prijzen zijn indicatief op basis van publieke richtprijzen in 2026 en kunnen per dealer afwijken.
            Installatie (€150–300) is niet inbegrepen.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Meer weten over de CUBE specifiek?{' '}
            <Link href="/quooker-cube" className="text-[#005F8A] underline hover:no-underline">
              Lees onze uitleg over de Quooker CUBE
            </Link>.
          </p>
        </section>

        <section id="wanneer-voldoende">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer is het Quooker filter voldoende — en wanneer heb je meer nodig?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De beslissing of het Quooker koolstoffilter genoeg is, hangt af van wat er in uw leidingwater
            zit en wat uw filterbehoeften zijn. We leggen dit objectief naast elkaar.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#E0F2FE] rounded-2xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-3">Het Quooker filter is voldoende als…</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Uw enige doel smaak- en geurverbetering is',
                  'U chloor en THMs wilt verminderen',
                  'U in een zachtwaterregio woont (geen kalkprobleem)',
                  'Uw leidingwater geen verhoogde nitraat- of PFAS-waarden heeft',
                  'U niet in een agrarisch risicogebied woont',
                  'Er geen zwangeren of baby\'s in uw huishouden zijn',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-green-600 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-3">Een aanvullend osmosefilter is beter als…</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'U in een hardwaterregio woont (>12°dH)',
                  'Uw water verhoogde nitraatwaarden heeft',
                  'U in een PFAS-risicogebied woont',
                  'U zwanger bent of baby\'s voedt (nitraat)',
                  'U kalk- en chloorvrij water wilt voor koffie/thee',
                  'U op medisch advies puur water gebruikt',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-[#005F8A] font-bold shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Weet u niet zeker wat er in uw leidingwater zit? Vraag een waterrapport op bij uw waterbedrijf.
            Wilt u meer weten over de vergelijking tussen Quooker en osmose?{' '}
            <Link href="/quooker-versus-osmose" className="text-[#005F8A] underline hover:no-underline">
              Lees onze vergelijkingspagina
            </Link>
            {' '}of bekijk de uitleg over{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>.
          </p>
        </section>

        <section id="onderhoud">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Filterpatroon onderhoud: interval, indicator en bestellen</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Het Quooker filterpatroon heeft een beperkte levensduur en moet regelmatig worden vervangen voor
            optimale filterprestaties. Een te lang gebruikt filter filtert minder goed en kan bij extreme
            overslagperiodes zelfs stoffen teruggeven aan het water.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">1</div>
              <div>
                <p className="font-semibold text-gray-900">Vervangingsinterval: 1.500 liter of 12 maanden</p>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  Wat eerder bereikt wordt, is het moment van vervangen. Bij een gezin van 4 personen dat
                  dagelijks 3 liter gefilterd water gebruikt, komt u op circa 8–10 maanden per patroon.
                  Bij alleen gebruik voor drinken (1 liter per dag) kunt u tot 12 maanden halen.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">2</div>
              <div>
                <p className="font-semibold text-gray-900">Indicator: groen, oranje en rood</p>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  Het Quooker display toont de filterstatus via een kleurindicator. Groen betekent dat het
                  filter goed functioneert. Oranje geeft aan dat het filter bijna vol is en u binnenkort
                  een nieuw patroon moet bestellen. Rood betekent: vervangen. Knipperend rood betekent dat
                  het vervangingsmoment al is overschreden.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">3</div>
              <div>
                <p className="font-semibold text-gray-900">Kosten: €15–25 per patroon</p>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  Het standaard Quooker filterpatroon kost €15–25 afhankelijk van het model. Patronen zijn
                  verkrijgbaar via de Quooker webshop, erkende installateurs en soms via groothandels.
                  Jaarlijkse filterkosten liggen op €20–30 bij één vervanging, of €30–50 bij intensief gebruik.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">4</div>
              <div>
                <p className="font-semibold text-gray-900">Zelf vervangen in 5 minuten</p>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  Het Quooker filterpatroon is eenvoudig zelf te vervangen zonder gereedschap. Na vervanging
                  reset u de indicator via het display (5 seconden indrukken). Lees de stap-voor-stap uitleg
                  op onze{' '}
                  <Link href="/quooker/filter-vervangen" className="text-[#005F8A] underline hover:no-underline">
                    handleidingspagina voor het vervangen van het Quooker filterpatroon
                  </Link>.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Praktische tip:</strong> stel een agenda-herinnering in voor
            11 maanden na uw laatste filtervervanging. Zo bestelt u op tijd een nieuw patroon en loopt u
            nooit achter op het vervangingsmoment.
          </div>
        </section>

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: '/quooker/filter-vervangen',
                title: 'Filterpatroon vervangen: stap-voor-stap',
                desc: 'Complete handleiding voor het vervangen van het Quooker filterpatroon, inclusief resetinstructies.',
              },
              {
                href: '/quooker-versus-osmose',
                title: 'Quooker versus osmose filter',
                desc: 'Objectieve vergelijking: wanneer is een Quooker met koolstoffilter genoeg en wanneer kies je voor osmose?',
              },
              {
                href: '/quooker-cube',
                title: 'Quooker CUBE uitleg',
                desc: 'Hoe werkt de Quooker CUBE, wat kost het en wanneer is de add-on de moeite waard?',
              },
              {
                href: '/koolstoffilter',
                title: 'Koolstoffilter: werking en types',
                desc: 'Alles over actieve koolstoffiltratie: hoe het werkt, wat het verwijdert en welke types er zijn.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose uitleg',
                desc: 'De meest grondige thuisfiltratie: werking, kosten en de beste RO-systemen voor Nederland.',
              },
              {
                href: '/quooker-alternatief',
                title: 'Quooker alternatieven vergelijken',
                desc: 'Op zoek naar een alternatief? Vergelijk Grohe Red, Insinkerator en 4-in-1 osmose kranen.',
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over het Quooker filter</h2>
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
