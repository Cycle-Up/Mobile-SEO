import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export function generateMetadata(): Metadata {
  return {
    title: 'Beste waterfilter 2026: eerlijk getest & vergeleken',
    description:
      'Welk waterfilter is het beste in 2026? We vergelijken filterkan, omgekeerde osmose, inline en 4-in-1 kraan op kosten, zuiverheid en installatie.',
    alternates: { canonical: 'https://waterfilterplatform.nl/beste-waterfilter-2026' },
    openGraph: {
      title: 'Beste waterfilter 2026 — eerlijk getest en vergeleken',
      description:
        'We zetten de vijf beste waterfilters van 2026 naast elkaar. Filterkan, osmose, inline, 4-in-1 kraan: welk type past bij jouw situatie en budget?',
      url: 'https://waterfilterplatform.nl/beste-waterfilter-2026',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Welk waterfilter is het beste in 2026?',
    answer:
      'Het beste waterfilter in 2026 hangt af van je situatie. Voor wie puur, kalkvrij drinkwater wil en ook kokend of bruisend water wil, is een 4-in-1 kraan met ingebouwde omgekeerde osmose het meest complete systeem. Voor wie een laag budget heeft en alleen de smaak wil verbeteren, is een waterfilterkan zoals Brita een prima instapoplossing. Voor wie volledig gefilterd water voor het hele huishouden wil, is een onderaanrecht osmose systeem de beste keuze.',
  },
  {
    question: 'Wat filtert een omgekeerde osmose systeem precies?',
    answer:
      'Een omgekeerd osmose filter haalt tot 99% van ongewenste stoffen uit leidingwater: kalk (calcium en magnesium), chloor, nitraten, nitriet, pesticiden, zware metalen zoals lood en koper, en microplastics. Een actief koolstoffilter als voorfilter verwijdert ook geuren en smaken. Een standaard filterkan als Brita filtert alleen chloor en chloramines — kalk en chemische stoffen gaan er grotendeels doorheen.',
  },
  {
    question: 'Wat zijn de kosten van een waterfilter per jaar?',
    answer:
      'De jaarlijkse filterkosten variëren sterk per type. Een Brita-filterkan kost circa 40–80 euro per jaar aan vervangingsfilters. Een onderaanrecht osmose systeem kost 80–150 euro per jaar aan filters (afhankelijk van gebruik en waterhardheid). Een 4-in-1 kraan met osmose kost vergelijkbaar. Een inline keukenkraan filter kost 30–60 euro per jaar. Vergeet niet dat een filterkan ook aankoopkosten voor water vermijdt — maar mineraalwater flesjes nog meer.',
  },
  {
    question: 'Wat is het verschil tussen een filterkan en omgekeerde osmose?',
    answer:
      'Een filterkan zoals Brita gebruikt actief koolstoffilter en ionenwisselaar om chloor en smaak te verbeteren. Kalk, nitraten en microplastics worden nauwelijks verwijderd. Een omgekeerd osmose systeem filtert via een semipermeable membraan dat tot 99% van alle opgeloste stoffen tegenhoudt — inclusief kalk, nitraten, pesticiden en zware metalen. Het resultaat is kwalitatief vergelijkbaar met gebotteld bronwater. Lees meer in onze vergelijking van filterkan vs osmose.',
  },
  {
    question: 'Hoe lang gaan waterfilterpatronen mee?',
    answer:
      'Dat hangt af van het type filter en de waterhardheid in jouw gemeente. Brita-filters gaan 4 tot 6 weken mee (circa 150 liter). Osmose membranen gaan 12 tot 24 maanden mee bij normaal gebruik. Voorfilters bij osmose systemen (sediment, koolstof) wisselen elke 6–12 maanden. Bij een 4-in-1 kraan met osmose gaat het osmose membraan circa 12–18 maanden mee, de koolstoffilters elke 6 maanden. Altijd controleren met de waterhardheid van jouw gemeente.',
  },
  {
    question: 'Kan ik een waterfilter zelf installeren?',
    answer:
      'Ja, de meeste waterfilters zijn zelf te installeren. Een filterkan heeft geen installatie nodig. Inline filters plaatsen lukt zelf met standaard aansluitingen. Een onderaanrecht osmose systeem kost circa 1–2 uur en vereist een standaard kraankoppeling en een aansluiting op de afvoer. Een 4-in-1 kraan met osmosefilter wordt geleverd met een Nederlandstalige installatiehandleiding en is voor de meeste mensen zelf te plaatsen.',
  },
];

const top5Filters = [
  {
    rang: 1,
    type: '4-in-1 kraan met osmose',
    prijs: '€ 699–899',
    zuiverheid: 'Uitstekend (osmose)',
    installatie: 'Zelf (~2–3 uur)',
    onderhoud: 'Laag (filters 2x/jaar)',
    ruimte: 'Onderbouw aanrecht',
    jaarKosten: '± € 90/jaar',
    totaalScore: '9.5/10',
    highlight: true,
    samenvatting: 'Meest complete oplossing: kokend, bruisend, gefilterd en warm water uit één kraan.',
  },
  {
    rang: 2,
    type: 'Onderaanrecht osmose systeem',
    prijs: '€ 150–400',
    zuiverheid: 'Uitstekend (osmose)',
    installatie: 'Zelf (~2 uur)',
    onderhoud: 'Laag (filters 1–2x/jaar)',
    ruimte: 'Onderbouw aanrecht',
    jaarKosten: '± € 80–150/jaar',
    totaalScore: '8.5/10',
    highlight: false,
    samenvatting: 'Bewezen technologie voor puur drinkwater, geen kokend of bruisend water inbegrepen.',
  },
  {
    rang: 3,
    type: 'Inline keukenkraan filter',
    prijs: '€ 50–150',
    zuiverheid: 'Goed (koolstof, geen osmose)',
    installatie: 'Zelf (<1 uur)',
    onderhoud: 'Laag (filter 1x/jaar)',
    ruimte: 'Minimaal',
    jaarKosten: '± € 30–60/jaar',
    totaalScore: '6.5/10',
    highlight: false,
    samenvatting: 'Betaalbare instap voor verbeterde smaak en chloorvrij water, geen kalkverwijdering.',
  },
  {
    rang: 4,
    type: 'Waterfilterkan (Brita, BWTECH)',
    prijs: '€ 20–60',
    zuiverheid: 'Matig (chloor/smaak)',
    installatie: 'Geen',
    onderhoud: 'Middel (filter 4–6 weken)',
    ruimte: 'Koelkast of aanrecht',
    jaarKosten: '± € 50–80/jaar',
    totaalScore: '5.5/10',
    highlight: false,
    samenvatting: 'Laagste aanschaf, maar hoge filterfrequentie en geen kalkverwijdering.',
  },
  {
    rang: 5,
    type: 'Gebotteld mineraalwater',
    prijs: '€ 0 (geen apparaat)',
    zuiverheid: 'Goed (gebotteld)',
    installatie: 'Geen',
    onderhoud: 'Geen',
    ruimte: 'Opslag voor flessen',
    jaarKosten: '± € 150–400/jaar',
    totaalScore: '4.0/10',
    highlight: false,
    samenvatting: 'Geen apparaat nodig, maar duurste optie op lange termijn en meeste plastic.',
  },
];

const filterTypen = [
  {
    naam: 'Waterfilterkan',
    voorbeelden: 'Brita Marella, BWTECH, Aquaphor',
    hoeHetWerkt:
      'Water giet je handmatig in het bovenste reservoir. Het loopt door een filterpatroon met actief koolstof en ionenwisselaar naar het onderste reservoir. Geen aansluiting op het leidingnet nodig.',
    filtert: 'Chloor, chloramines, smaakverbetering. Beperkte kalkverwijdering via ionenwisselaar.',
    filtertNiet: 'Nitraten, pesticiden, zware metalen, microplastics, bacteriën.',
    kosten: 'Aanschaf € 20–60. Filter elke 4–6 weken: € 50–80 per jaar.',
    pros: ['Geen installatie', 'Laagste aanschafprijs', 'Overal te gebruiken'],
    cons: ['Hoge filterfrequentie', 'Kleine capaciteit', 'Geen kalkverwijdering', 'Handmatig vullen'],
    voorWie: 'Huurders, starters, mensen die alleen smaak willen verbeteren, incidenteel gebruik.',
    link: '/kennisbank/brita-vs-osmose',
    linkLabel: 'Brita vs osmose: wat is beter?',
  },
  {
    naam: 'Omgekeerde osmose (onderaanrecht)',
    voorbeelden: 'Ecosoft, iSpring, Waterdrop G3',
    hoeHetWerkt:
      'Water wordt onder hoge druk door een semi-permeabel membraan geforceerd. Alleen watermoleculen passeren; opgeloste stoffen worden tegengehouden en afgevoerd. Het gefilterde water wordt opgeslagen in een drukvat of direct geleverd.',
    filtert: 'Kalk, chloor, nitraten, pesticiden, zware metalen, microplastics, bacteriën (tot 99%).',
    filtertNiet: 'Gasvormige stoffen als radon (beperkt). Sommige systemen voegen mineralen terug toe.',
    kosten: 'Aanschaf € 150–400. Filters 1–2x per jaar: € 80–150 per jaar.',
    pros: ['Hoogste zuiveringsgraad', 'Relatief lage aanschafprijs', 'Zelf te installeren', 'Bewezen technologie'],
    cons: ['Geen kokend of bruisend water', 'Apart kraantje nodig', 'Drukvat neemt ruimte in'],
    voorWie: 'Mensen met hard water, wie gaat voor maximale zuiverheid tegen een redelijke prijs.',
    link: '/omgekeerde-osmose',
    linkLabel: 'Alles over omgekeerde osmose',
  },
  {
    naam: 'Inline keukenkraan filter',
    voorbeelden: 'Pentair, BWT Inline, Aquasana',
    hoeHetWerkt:
      'Een compact filterpatroon wordt direct in de waterleiding of onder het aanrecht geplaatst. Water stroomt via een actief koolstoffilter voordat het de kraan verlaat. Geen drukvat of separate kraan nodig.',
    filtert: 'Chloor, smaak, geur, sediment. Afhankelijk van het filtertype ook bepaalde metalen.',
    filtertNiet: 'Kalk, nitraten (in de meeste gevallen), microplastics (beperkt).',
    kosten: 'Aanschaf € 50–150. Filter jaarlijks: € 30–60 per jaar.',
    pros: ['Simpele installatie', 'Geen extra kraantje nodig', 'Lage jaarkosten', 'Compact'],
    cons: ['Geen kalkverwijdering', 'Lagere zuiveringsgraad dan osmose', 'Beperkte capaciteit'],
    voorWie: 'Wie primair chloor en geur wil filteren, zachter water heeft, of een goedkope instap wil.',
    link: '/kennisbank/waterfilter-vergelijken',
    linkLabel: 'Waterfilters vergelijken',
  },
  {
    naam: '4-in-1 kraan met omgekeerde osmose',
    voorbeelden: 'Geïntegreerde 4-in-1 osmosekraan',
    hoeHetWerkt:
      'Een complete 4-in-1 kraan combineert een omgekeerde osmose systeem met een kokendwaterfunctie, koud gefilterd water, warm water en optioneel bruisend water uit één kraanpunt. Het osmose systeem zit compact onder het aanrecht.',
    filtert: 'Kalk, chloor, nitraten, pesticiden, zware metalen, microplastics (tot 99%) — identiek aan standalone osmose.',
    filtertNiet: 'Gasvormige stoffen als radon (beperkt). Zelfde beperkingen als osmose.',
    kosten: 'Aanschaf € 699–899. Filters 2x per jaar: € 80–100 per jaar.',
    pros: [
      '4 functies uit één kraan',
      'Hoogste zuiveringsgraad',
      'Geen apart filterappaar nodig',
      'Zelf te installeren',
      'Kokend en bruisend water inbegrepen',
    ],
    cons: ['Hogere aanschafprijs dan standalone osmose', 'Installatie duurt 2–3 uur'],
    voorWie: 'Wie het maximale wil: puur gefilterd drinkwater, kokend water, bruisend water en warm water uit één kraan.',
    link: '/kokend-water-kraan/met-filter',
    linkLabel: 'Kokend water kraan met filter',
  },
];

export default function BesteWaterfilter2026Page() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Beste waterfilter 2026', url: 'https://waterfilterplatform.nl/beste-waterfilter-2026' },
        ]}
      />
      <SchemaOrg
        schema={[
          {
            '@type': 'ItemList',
            name: 'Beste waterfilters 2026',
            url: 'https://waterfilterplatform.nl/beste-waterfilter-2026',
            numberOfItems: top5Filters.length,
            itemListOrder: 'https://schema.org/ItemListOrderAscending',
            itemListElement: top5Filters.map((p) => ({
              '@type': 'ListItem',
              position: p.rang,
              name: p.type,
              description: p.samenvatting,
            })),
          },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Beste waterfilter 2026</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Beste waterfilter 2026: eerlijk getest en vergeleken
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Welk waterfilter is het beste in 2026? Er is veel keuze: waterfilterkanen, osmose systemen,
            inline filters en complete 4-in-1 kranen. De beste keuze hangt af van je situatie: hoe hard
            is jouw water, wat wil je filteren, hoeveel ruimte heb je en wat is je budget? We leggen de{' '}
            <strong>vijf beste waterfilters van 2026</strong> eerlijk naast elkaar op zuiverheid, kosten,
            installatie en onderhoud.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kennisbank/waterfilter-vergelijken"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Alle waterfilters vergelijken →
            </Link>
            <Link
              href="/omgekeerde-osmose"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Osmose uitleg
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        {/* Hoe we vergelijken */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe we de waterfilters vergelijken</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We beoordelen elk waterfiltertype op vijf objectieve criteria. Zo kun je de opties eerlijk
            naast elkaar leggen, ongeacht marketingclaims.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                criterium: 'Zuiverheid',
                uitleg:
                  'Welke stoffen worden gefilterd? We kijken naar kalk, chloor, nitraten, zware metalen, pesticiden en microplastics. Zuiverheid wordt uitgedrukt als percentage verwijdering.',
              },
              {
                criterium: 'Kosten',
                uitleg:
                  'Zowel de aanschafprijs als de jaarlijkse onderhoudskosten (filters, energie). We rekenen ook de totaalkosten over 3 jaar door voor een eerlijke vergelijking.',
              },
              {
                criterium: 'Installatie',
                uitleg:
                  'Hoe moeilijk is de installatie? Kan het zelf of is een loodgieter vereist? Hoeveel tijd kost het? En is er ruimte nodig onder het aanrecht?',
              },
              {
                criterium: 'Onderhoud',
                uitleg:
                  'Hoe frequent moeten filters worden gewisseld? Zijn de vervangende filters makkelijk te bestellen? Zijn er speciale tools nodig?',
              },
              {
                criterium: 'Ruimtegebruik',
                uitleg:
                  'Hoeveel ruimte neemt het systeem in — op het aanrecht, onder het aanrecht of in de kast? Dat is bepalend voor keukens met beperkte ruimte.',
              },
            ].map(c => (
              <div key={c.criterium} className="bg-[#E0F2FE] rounded-xl p-4">
                <p className="font-semibold text-[#003F5C] mb-1">{c.criterium}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{c.uitleg}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Top 5 overzicht tabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Top 5 beste waterfilters 2026 — overzichtstabel</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Hieronder onze top 5, gesorteerd op totaalscore. De scores zijn gebaseerd op de combinatie van
            zuiverheid, kosten, gebruiksgemak en beschikbaarheid in Nederland.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[700px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">#</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Type</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Prijs</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Zuiverheid</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Installatie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Jaar kosten</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Score</th>
                </tr>
              </thead>
              <tbody>
                {top5Filters.map(f => (
                  <tr key={f.rang} className={`border-b border-gray-100 ${f.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <td className="py-2.5 px-3 font-bold text-[#005F8A]">{f.rang}</td>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">
                      {f.type}
                      {f.highlight && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Beste keuze</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-700">{f.prijs}</td>
                    <td className="py-2.5 px-3 text-gray-700">{f.zuiverheid}</td>
                    <td className="py-2.5 px-3 text-gray-700">{f.installatie}</td>
                    <td className="py-2.5 px-3 text-gray-700">{f.jaarKosten}</td>
                    <td className="py-2.5 px-3 font-bold text-[#005F8A]">{f.totaalScore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-3">
            {top5Filters.map(f => (
              <div
                key={f.rang}
                className={`rounded-xl border p-4 ${f.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div>
                    <span className="text-[#005F8A] font-bold mr-2">#{f.rang}</span>
                    <span className="font-bold text-gray-900">{f.type}</span>
                  </div>
                  <span className="font-bold text-[#005F8A] shrink-0 text-sm">{f.totaalScore}</span>
                </div>
                <p className="text-sm text-gray-600">{f.samenvatting}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Scores zijn redactioneel en gebaseerd op een gewogen combinatie van zuiverheid, prijs, installatie,
            onderhoud en geschiktheid voor Nederlandse huishoudens. Bijgewerkt mei 2026.
          </p>
        </section>

        {/* Per type uitgebreide bespreking */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-2">Per type: uitgebreide bespreking</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hieronder bespreken we elk filtertype uitgebreid: hoe het werkt, wat het filtert, voor wie het
            geschikt is en wat de echte kosten zijn.
          </p>
          <div className="space-y-8">
            {filterTypen.map((f, i) => (
              <div key={f.naam} className="border border-gray-200 rounded-2xl p-5 md:p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="bg-[#005F8A] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{f.naam}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Voorbeelden: {f.voorbeelden}</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Hoe het werkt</p>
                    <p className="text-gray-600 leading-relaxed">{f.hoeHetWerkt}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="font-semibold text-green-800 mb-1 text-xs">Filtert wel</p>
                      <p className="text-green-700 leading-relaxed text-xs">{f.filtert}</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <p className="font-semibold text-red-800 mb-1 text-xs">Filtert niet (of beperkt)</p>
                      <p className="text-red-700 leading-relaxed text-xs">{f.filtertNiet}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="font-semibold text-gray-800 mb-1 text-xs">Kosten</p>
                    <p className="text-gray-600 text-xs">{f.kosten}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p className="font-semibold text-gray-800 mb-1 text-xs">Voordelen</p>
                      <ul className="space-y-1">
                        {f.pros.map(p => (
                          <li key={p} className="text-xs text-gray-600 flex gap-1.5">
                            <span className="text-green-600 shrink-0">+</span> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1 text-xs">Nadelen</p>
                      <ul className="space-y-1">
                        {f.cons.map(c => (
                          <li key={c} className="text-xs text-gray-600 flex gap-1.5">
                            <span className="text-red-500 shrink-0">−</span> {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-[#E0F2FE] rounded-lg p-3">
                    <p className="font-semibold text-[#003F5C] mb-1 text-xs">Voor wie?</p>
                    <p className="text-[#005F8A] text-xs leading-relaxed">{f.voorWie}</p>
                  </div>
                  <Link href={f.link} className="inline-flex items-center gap-1.5 text-xs text-[#005F8A] hover:underline font-semibold">
                    → {f.linkLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Voor wie welk filter */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voor wie welk waterfilter?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Geen enkel waterfilter is voor iedereen de beste keuze. Hieronder een overzicht op basis
            van situatie en prioriteit.
          </p>
          <div className="space-y-3">
            {[
              {
                situatie: 'Maximale zuiverheid + kokend + bruisend water',
                advies: '4-in-1 kraan met omgekeerde osmose',
                reden:
                  'Combineert de hoogste filtratieprestaties met kokend en bruisend water uit één kraanpunt. Meest complete oplossing voor veeleisende gebruikers.',
                link: '/kokend-water-kraan/met-filter',
              },
              {
                situatie: 'Maximale zuiverheid, geen kokend water nodig',
                advies: 'Onderaanrecht omgekeerde osmose systeem',
                reden:
                  'Bewezen technologie voor puur drinkwater tegen een lagere aanschafprijs dan een 4-in-1 kraan. Ideaal als je al een goede mengkraan hebt.',
                link: '/omgekeerde-osmose/kopen',
              },
              {
                situatie: 'Smaakverbetering, zachter water',
                advies: 'Inline keukenkraan filter',
                reden:
                  'Goedkoop, eenvoudig te installeren, geen kalkverwijdering maar wel merkbare verbetering van smaak en chloorgehalte. Goed voor gebieden met al redelijk zacht water.',
                link: '/kennisbank/waterfilter-keuken',
              },
              {
                situatie: 'Geen installatie mogelijk of tijdelijk',
                advies: 'Waterfilterkan (Brita of vergelijkbaar)',
                reden:
                  'Geen aanrecht-installatie vereist. Handig voor huurders of tijdelijke woonsituaties. Filtert chloor en verbetert de smaak.',
                link: '/kennisbank/filterkan-vs-osmose',
              },
            ].map(s => (
              <div key={s.situatie} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-[#003F5C] mb-1 text-sm">{s.situatie}</p>
                <p className="text-sm font-bold text-[#005F8A] mb-1">→ {s.advies}</p>
                <p className="text-xs text-gray-600 leading-relaxed mb-2">{s.reden}</p>
                <Link href={s.link} className="text-xs text-[#005F8A] hover:underline font-semibold">
                  Lees meer →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* Meer lezen */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kennisbank/waterfilter-vergelijken', label: 'Waterfilters vergelijken: complete gids' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose uitleg' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose systeem kopen: tips' },
              { href: '/kokend-water-kraan/met-filter', label: 'Kokend water kraan met filter' },
              { href: '/kennisbank/brita-vs-osmose', label: 'Brita vs omgekeerde osmose' },
              { href: '/kennisbank/filterkan-vs-osmose', label: 'Filterkan vs osmose filter' },
              { href: '/quooker-alternatief', label: 'Quooker alternatief vergelijken' },
              { href: '/kennisbank/waterfilter-keuken', label: 'Waterfilter voor in de keuken' },
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

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over de beste waterfilters</h2>
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
