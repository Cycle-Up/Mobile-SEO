import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Beste osmosefilter 2026: top 5 eerlijk vergeleken',
  description:
    'Welk osmosefilter is het beste in 2026? Wij vergeleken 5 systemen op prijs, membraankwaliteit, filterstadia, tankgrootte en TCO. Met eerlijke reviews.',
  alternates: { canonical: 'https://waterfilterplatform.nl/beste-osmosefilter-2026' },
  openGraph: {
    title: 'Beste osmosefilter 2026: top 5 eerlijk vergeleken',
    description:
      'Onze top 5 osmosefilters voor 2026 vergeleken op prijs, filterstadia, membraantype, tankgrootte en 5-jaar eigendomskosten.',
    url: 'https://waterfilterplatform.nl/beste-osmosefilter-2026',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is het beste osmosefilter voor thuis in 2026?',
    answer:
      'Dat hangt af van je situatie. Als je op zoek bent naar de meest complete oplossing — osmose filtratie gecombineerd met kokend, koud, warm en bruisend water uit één kraan — is een 4-in-1 kraan met geïntegreerde RO de beste keuze. Wil je een puur under-sink osmose-systeem zonder extra functies, dan zijn de APEC ROES-50 en de iSpring RCC7AK uitstekende opties op prijs-kwaliteitsverhouding.',
  },
  {
    question: 'Hoeveel filterstadia heeft een goed osmosefilter?',
    answer:
      'De meeste kwalitatieve thuissystemen hebben 4 tot 7 filterstadia. Het minimum voor een goed werkend systeem is 4 stadia: sedimentfilter, pre-koolstof, RO-membraan en post-koolstof. Systemen met 5+ stadia voegen vaak een extra pre-koolstof of een remineralisatiepatroon toe. Meer filterstadia betekent niet automatisch betere zuiverheid — de kwaliteit van het membraan is de bepalende factor.',
  },
  {
    question: 'Wat is de afvalwater-ratio van een osmosefilter?',
    answer:
      'De afvalwater-ratio geeft aan hoeveel water wordt weggespoeld per liter gefilterd water. Een klassiek systeem heeft een ratio van 3:1 of 4:1 — voor elke liter gefilterd water gaat 3 tot 4 liter als spoelwater naar de afvoer. Moderne systemen met een permeaatpomp of hogere druk halen 1:1 of zelfs 0,5:1. Een betere ratio bespaart water en verlaagt de waterrekening.',
  },
  {
    question: 'Hoe lang gaat een osmose-membraan mee?',
    answer:
      'Een RO-membraan gaat gemiddeld 2 tot 3 jaar mee bij normaal huishoudelijk gebruik (4 personen, 5–10 liter gefilterd drinkwater per dag). Bij hard water (15+ °dH) of veel gebruik kan het korter zijn. Signalen dat het membraan aan vervanging toe is: verslechterde smaak, lager debiet of een TDS-meting die aangeeft dat de zuiverheid afneemt.',
  },
  {
    question: 'Kan ik een osmosefilter zelf installeren?',
    answer:
      'Ja. De meeste under-sink osmose-systemen zijn ontworpen voor doe-het-zelf installatie. Je sluit het systeem aan op de koudwaterleiding via een aanboorkraan, verbindt de afvoerslang met de afvoer en installeert een aparte osmose-kraan op het aanrecht. Totale installatietijd: 30 tot 90 minuten. Een 4-in-1 kraan met RO vereist iets meer installatietijd vanwege de elektrische aansluiting, maar ook dat is in de meeste gevallen zelf te doen.',
  },
  {
    question: 'Wat zijn de totale kosten van een osmosefilter over 5 jaar?',
    answer:
      'Reken op €400–1.500 over 5 jaar voor een goed systeem (afhankelijk van het type). Dat bestaat uit aanschaf (€150–1.000), jaarlijkse filtervervanging (€60–150/jr) en een membraanvervanging rond jaar 2–3 (€40–80). Ter vergelijking: een gezin van 4 personen die flessenwater koopt geeft €2.000–3.000 uit over 5 jaar. Een osmosefilter verdient zichzelf gemiddeld in 1 tot 3 jaar terug.',
  },
];

const top5 = [
  {
    rang: 1,
    naam: '4-in-1 kraan met geïntegreerde RO',
    type: '4-in-1 kraan met geïntegreerd RO',
    prijs: '€ 699 – 899',
    filterstadia: 5,
    membraantype: 'TFC Polyamide RO',
    tankCapaciteit: '2,5 liter boiler + RO-reservoir',
    afvalwaterRatio: '1:1 (met permeaatpomp)',
    jaarlijkseKosten: '€ 80 – 150',
    garantie: '5 jaar',
    highlight: true,
    pros: [
      'Alles-in-één: osmose + kokend + koud + warm + bruisend',
      'Geen losse waterkoker of bruisend water-abo meer',
      'Eén jaarlijkse filterwissel voor het complete systeem',
      'Zelf te installeren (1–2 uur)',
      '5 jaar garantie — langste in de vergelijking',
    ],
    cons: [
      'Hogere aanschafprijs dan losse osmose-systemen',
      'Vereist elektrische aansluiting (WCD) naast waterkraan',
    ],
    oordeel:
      'Een 4-in-1 kraan met geïntegreerde RO is de beste keuze voor wie een complete keukenwateroplossing wil. Het combineert de hoogste filterkwaliteit (RO) met alle waterfuncties die een moderne keuken nodig heeft. De aanschafprijs is hoger dan een puur under-sink systeem, maar op 3–5 jaar totale kosten is het concurrerend doordat je de waterkoker (€30–70/jr energie) en flessenwater bruisend (€100–200/jr) vervangt.',
  },
  {
    rang: 2,
    naam: 'APEC Water ROES-50',
    type: 'Under-sink RO (5 stadia)',
    prijs: '€ 180 – 240',
    filterstadia: 5,
    membraantype: 'FILMTEC TFC Polyamide',
    tankCapaciteit: '3,2 liter drukvat',
    afvalwaterRatio: '3:1',
    jaarlijkseKosten: '€ 60 – 100',
    garantie: '1 jaar fabrieksgarantie',
    highlight: false,
    pros: [
      'Hoogwaardige FILMTEC membraan — industriestandaard',
      '5 filterstadia inclusief extra pre-koolstof',
      'Laagste aanschafprijs in de top 5',
      'Bewezen betrouwbaarheid, veel langdurige gebruikers',
    ],
    cons: [
      '3:1 afvalwater-ratio (geen permeaatpomp standaard)',
      'Geen remineralisatie of extra functies',
      'Enkelvoudige keukentap; geen kokend/bruisend water',
    ],
    oordeel:
      'De APEC ROES-50 is de best-presterende puur functionele osmose-installatie voor de prijs. Het FILMTEC-membraan is het referentiemembraan waaraan andere systemen worden gemeten. Ideaal voor wie gewoon schoon drinkwater wil zonder extra functies, met een bewezen track record.',
  },
  {
    rang: 3,
    naam: 'iSpring RCC7AK',
    type: 'Under-sink RO met remineralisatie (6 stadia)',
    prijs: '€ 200 – 280',
    filterstadia: 6,
    membraantype: 'TFC Polyamide RO',
    tankCapaciteit: '3,2 liter drukvat',
    afvalwaterRatio: '3:1',
    jaarlijkseKosten: '€ 70 – 110',
    garantie: '1 jaar',
    highlight: false,
    pros: [
      '6e stadium: Alkaline remineralisatie voegt calcium/magnesium terug toe',
      'Betere smaak voor wie osmose water te &ldquo;plat&rdquo; vindt',
      'Goed gedocumenteerde installatie en klantenservice',
    ],
    cons: [
      'Hogere filterkosten door extra remineralisatiestadium',
      '3:1 afvalwater-ratio',
      'Remineralisatie beïnvloedt pH maar verander de zuiverheid niet significant',
    ],
    oordeel:
      'De iSpring RCC7AK is de beste keuze voor mensen die osmose-kwaliteit willen maar de smaak van volledig gedemineraliseerd water te leeg vinden. Het alkaline remineralisatiepatroon geeft een lichte mineralensmaak terug die veel op bronwater lijkt.',
  },
  {
    rang: 4,
    naam: 'Aqua Medic Easy Line 190',
    type: 'Under-sink RO (4 stadia, compact)',
    prijs: '€ 140 – 190',
    filterstadia: 4,
    membraantype: 'TFC Polyamide RO',
    tankCapaciteit: '3 liter drukvat',
    afvalwaterRatio: '2:1 (ingebouwde hulppomp)',
    jaarlijkseKosten: '€ 55 – 90',
    garantie: '2 jaar',
    highlight: false,
    pros: [
      'Ingebouwde hulppomp — betere afvalwater-ratio dan klasse gemiddelde',
      'Compact formaat, past in kleine keukenkastjes',
      '2 jaar garantie — beter dan gemiddeld in dit segment',
    ],
    cons: [
      '4 filterstadia (geen extra koolstof of remineralisatie)',
      'Minder bekend merk — reservefilters soms moeilijker te vinden',
    ],
    oordeel:
      'De Aqua Medic Easy Line 190 is een slimme keuze voor kleine keukens en voor wie waterbesparing hoog op de agenda staat. De ingebouwde pomp verbetert de afvalwater-ratio significant tegenover klassieke 3:1-systemen.',
  },
  {
    rang: 5,
    naam: 'Waterdrop G3P600',
    type: 'Under-sink RO, tankless (6 stadia)',
    prijs: '€ 350 – 450',
    filterstadia: 6,
    membraantype: 'Samengesteld polyamide RO',
    tankCapaciteit: 'Geen tank — doorstroom systeem',
    afvalwaterRatio: '1,5:1',
    jaarlijkseKosten: '€ 80 – 130',
    garantie: '1 jaar',
    highlight: false,
    pros: [
      'Tankless design: altijd vers osmose-water, geen stilstaand water',
      '1,5:1 afvalwater-ratio — goed voor een tankless systeem',
      'Compact en modern ontwerp',
    ],
    cons: [
      'Hogere aanschafprijs dan vergelijkbare systemen',
      'Zonder reservoir kan de flow even lager zijn bij parallel gebruik',
      'Kortere garantie dan verwacht in dit segment',
    ],
    oordeel:
      'De Waterdrop G3P600 is de beste keuze voor wie bezwaar heeft tegen een drukvat (stilstaand water) en een modern, compact systeem wil. Het tankless ontwerp garandeert altijd vers gefilterd water direct uit het membraan.',
  },
];

const onderdelenVergelijking = [
  {
    onderdeel: 'Membraantype',
    pureaqua: 'TFC Polyamide',
    apec: 'FILMTEC TFC',
    ispring: 'TFC Polyamide',
    aquamedic: 'TFC Polyamide',
    waterdrop: 'Samengesteld PA',
  },
  {
    onderdeel: 'Filterstadia',
    pureaqua: '5 (+ boiler)',
    apec: '5',
    ispring: '6 (+ remin.)',
    aquamedic: '4',
    waterdrop: '6',
  },
  {
    onderdeel: 'Tankcapaciteit',
    pureaqua: '2,5L boiler',
    apec: '3,2L drukvat',
    ispring: '3,2L drukvat',
    aquamedic: '3L drukvat',
    waterdrop: 'Geen tank',
  },
  {
    onderdeel: 'Afvalwater-ratio',
    pureaqua: '1:1',
    apec: '3:1',
    ispring: '3:1',
    aquamedic: '2:1',
    waterdrop: '1,5:1',
  },
  {
    onderdeel: 'Zuiverheid',
    pureaqua: '95–99%',
    apec: '95–99%',
    ispring: '95–99%',
    aquamedic: '95–98%',
    waterdrop: '95–99%',
  },
  {
    onderdeel: 'Kokend water',
    pureaqua: 'Ja (100°C)',
    apec: 'Nee',
    ispring: 'Nee',
    aquamedic: 'Nee',
    waterdrop: 'Nee',
  },
];

const tco5jaar = [
  {
    systeem: '4-in-1 kraan met RO',
    aanschaf: '€ 799',
    jr1: '€ 100',
    jr2: '€ 100',
    jr3: '€ 180',
    jr4: '€ 100',
    jr5: '€ 180',
    totaal: '€ 1.459',
  },
  {
    systeem: 'APEC ROES-50',
    aanschaf: '€ 210',
    jr1: '€ 80',
    jr2: '€ 80',
    jr3: '€ 140',
    jr4: '€ 80',
    jr5: '€ 140',
    totaal: '€ 730',
  },
  {
    systeem: 'iSpring RCC7AK',
    aanschaf: '€ 240',
    jr1: '€ 90',
    jr2: '€ 90',
    jr3: '€ 160',
    jr4: '€ 90',
    jr5: '€ 160',
    totaal: '€ 830',
  },
  {
    systeem: 'Aqua Medic Easy Line',
    aanschaf: '€ 170',
    jr1: '€ 70',
    jr2: '€ 70',
    jr3: '€ 120',
    jr4: '€ 70',
    jr5: '€ 120',
    totaal: '€ 620',
  },
  {
    systeem: 'Waterdrop G3P600',
    aanschaf: '€ 400',
    jr1: '€ 100',
    jr2: '€ 100',
    jr3: '€ 160',
    jr4: '€ 100',
    jr5: '€ 160',
    totaal: '€ 1.020',
  },
  {
    systeem: 'Flessenwater (gezin)',
    aanschaf: '€ 0',
    jr1: '€ 500',
    jr2: '€ 500',
    jr3: '€ 500',
    jr4: '€ 500',
    jr5: '€ 500',
    totaal: '€ 2.500',
  },
];

export default function BesteOsmosefilter2026Page() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          {
            name: 'Beste osmosefilter 2026',
            url: 'https://waterfilterplatform.nl/beste-osmosefilter-2026',
          },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Beste osmosefilter 2026</span>
          </nav>
          <div className="inline-block text-xs bg-[#005F8A] text-white px-3 py-1 rounded-full mb-4 font-medium">
            Bijgewerkt mei 2026
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Beste osmosefilter 2026: top 5 eerlijk vergeleken
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            We vergeleken vijf osmose-systemen op de Nederlandse markt: van de meest complete 4-in-1 oplossing
            tot de beste puur functionele under-sink filters. Onze vergelijking is gebaseerd op membraankwaliteit,
            filterstadia, afvalwater-ratio, tankgrootte en totale eigendomskosten over 5 jaar.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Wat is osmose? →
            </Link>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Osmosefilter kopen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Vergelijkingscriteria */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onze vergelijkingscriteria</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Niet elk criterium weegt even zwaar voor elke gebruiker. Hieronder de vijf factoren die wij het
            zwaarst laten meewegen in onze beoordeling, plus waarom elk criterium relevant is.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                criteria: 'Membraankwaliteit',
                gewicht: 'Zwaarst',
                uitleg:
                  'Het RO-membraan is het hart van het systeem. Een hoogwaardig TFC polyamide-membraan (zoals FILMTEC) verwijdert 95–99% van alle opgeloste stoffen en gaat langer mee. Goedkopere membranen scoren lager in zuiverheid en levensduur.',
              },
              {
                criteria: 'Filterstadia',
                gewicht: 'Zwaar',
                uitleg:
                  'Meer filterstadia bieden betere bescherming voor het membraan (pre-filters) en betere eindkwaliteit (post-filters). Een sedimentfilter, pre-koolstof, RO-membraan en post-koolstof is het minimum; extra stadia voegen bescherming of smaakverbetering toe.',
              },
              {
                criteria: 'Afvalwater-ratio',
                gewicht: 'Middel',
                uitleg:
                  'Een lagere ratio (1:1 of 2:1) bespaart water en verlaagt de waterrekening. Klassieke systemen gebruiken 3–4 liter spoelwater per liter gefilterd. Moderne permeaatpompen of ingebouwde pumps verbeteren de ratio significant.',
              },
              {
                criteria: 'Totale kosten (5 jaar)',
                gewicht: 'Zwaar',
                uitleg:
                  'Aanschafprijs alleen vertelt niet genoeg. We kijken naar de totale eigendomskosten over 5 jaar: aanschaf, filtervervanging, membraanvervanging en eventuele energiekosten.',
              },
              {
                criteria: 'Functionaliteit en gemak',
                gewicht: 'Variabel',
                uitleg:
                  'Wil je alleen puur drinkwater? Dan telt dit minder. Wil je ook kokend, bruisend en warm water geïntegreerd? Dan weegt dit zwaar. We beoordelen elk systeem op zijn eigen doelgroep.',
              },
            ].map(c => (
              <div key={c.criteria} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold text-gray-900 text-sm">{c.criteria}</p>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      c.gewicht === 'Zwaarst'
                        ? 'bg-[#005F8A] text-white'
                        : c.gewicht === 'Zwaar'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {c.gewicht}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{c.uitleg}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Top 5 tabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Top 5 osmosefilters — overzichtstabel</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[580px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">#</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Systeem</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Prijs</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Stadia</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Ratio</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Per jaar</th>
                </tr>
              </thead>
              <tbody>
                {top5.map(t => (
                  <tr
                    key={t.rang}
                    className={t.highlight ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 font-bold text-[#005F8A]">#{t.rang}</td>
                    <td className="py-2.5 px-3">{t.naam}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{t.prijs}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{t.filterstadia}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{t.afvalwaterRatio}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{t.jaarlijkseKosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Per product review cards */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-5">Reviews: elk systeem uitgebreid besproken</h2>
          <div className="space-y-6">
            {top5.map(t => (
              <div
                key={t.rang}
                className={`rounded-2xl border p-5 ${t.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-bold text-[#005F8A]">#{t.rang}</span>
                      <h3 className="font-bold text-gray-900 text-lg">{t.naam}</h3>
                      {t.highlight && (
                        <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full">
                          Beste keuze
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{t.type}</p>
                  </div>
                  <span className="font-bold text-[#005F8A] text-sm shrink-0">{t.prijs}</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 text-xs text-gray-600 mb-4">
                  <div><span className="text-gray-400">Membraan:</span> {t.membraantype}</div>
                  <div><span className="text-gray-400">Stadia:</span> {t.filterstadia}</div>
                  <div><span className="text-gray-400">Tank:</span> {t.tankCapaciteit}</div>
                  <div><span className="text-gray-400">Afvalwater:</span> {t.afvalwaterRatio}</div>
                  <div><span className="text-gray-400">Kosten/jr:</span> {t.jaarlijkseKosten}</div>
                  <div><span className="text-gray-400">Garantie:</span> {t.garantie}</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-green-700 mb-1.5">Voordelen</p>
                    <ul className="space-y-1">
                      {t.pros.map(p => (
                        <li key={p} className="flex gap-2 items-start text-xs text-gray-700">
                          <span className="text-green-600 shrink-0">✓</span>
                          <span dangerouslySetInnerHTML={{ __html: p }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-amber-700 mb-1.5">Aandachtspunten</p>
                    <ul className="space-y-1">
                      {t.cons.map(c => (
                        <li key={c} className="flex gap-2 items-start text-xs text-gray-700">
                          <span className="text-amber-500 shrink-0">!</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white/70 rounded-xl p-3 border border-gray-100">
                  <p className="text-xs font-semibold text-[#003F5C] mb-1">Ons oordeel</p>
                  <p className="text-xs text-gray-700 leading-relaxed">{t.oordeel}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Onderdelen vergelijking */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Technische vergelijking: membraan, stadia, tank en afvalwater</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Onderstaande tabel vergelijkt de vijf systemen op de technische kernspecificaties. Dit helpt bij het
            vergelijken van osmose-filters wanneer je specifieke eisen hebt aan een bepaald onderdeel. Lees meer
            over de werkingsprincipes in ons artikel{' '}
            <Link href="/kennisbank/osmose-water-apparaat" className="text-[#005F8A] underline hover:no-underline">
              osmose water apparaat
            </Link>
            .
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-xs border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Onderdeel</th>
                  <th className="py-2.5 px-2 font-semibold text-[#003F5C] text-center">4-in-1+RO</th>
                  <th className="py-2.5 px-2 font-semibold text-[#003F5C] text-center">APEC</th>
                  <th className="py-2.5 px-2 font-semibold text-[#003F5C] text-center">iSpring</th>
                  <th className="py-2.5 px-2 font-semibold text-[#003F5C] text-center">Aqua Medic</th>
                  <th className="py-2.5 px-2 font-semibold text-[#003F5C] text-center">Waterdrop</th>
                </tr>
              </thead>
              <tbody>
                {onderdelenVergelijking.map(r => (
                  <tr key={r.onderdeel} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.onderdeel}</td>
                    <td className="py-2.5 px-2 text-center text-gray-600 bg-[#E0F2FE]/30">{r.pureaqua}</td>
                    <td className="py-2.5 px-2 text-center text-gray-600">{r.apec}</td>
                    <td className="py-2.5 px-2 text-center text-gray-600">{r.ispring}</td>
                    <td className="py-2.5 px-2 text-center text-gray-600">{r.aquamedic}</td>
                    <td className="py-2.5 px-2 text-center text-gray-600">{r.waterdrop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Specificaties gebaseerd op fabrikantsinformatie en onafhankelijke testen. Zuiverheid kan
            variëren op basis van waterkwaliteit, druk en filterouderdom.
          </p>
        </section>

        {/* Voor welk huishouden wat */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voor welk huishouden welk osmosefilter?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Er is niet één universeel beste osmosefilter. Hieronder een praktisch advies per
            huishoudsituatie. Wil je meer weten over de werking voordat je een beslissing neemt? Lees ook
            ons artikel over{' '}
            <Link href="/kennisbank/reverse-osmosis-nadelen" className="text-[#005F8A] underline hover:no-underline">
              de nadelen van reverse osmosis
            </Link>{' '}
            en{' '}
            <Link href="/kennisbank/osmose-water-drinken" className="text-[#005F8A] underline hover:no-underline">
              osmose water drinken: is het gezond?
            </Link>
          </p>
          <div className="space-y-3">
            {[
              {
                profiel: 'Gezin dat alles in één kraan wil',
                aanbeveling: '4-in-1 kraan met RO',
                reden:
                  'Één systeem voor osmose-drinkwater, kokend water (thee, koffie, pasta), bruisend water en warm. Vervangt waterkoker en flessenwater. De hogere investering verdient zich terug.',
              },
              {
                profiel: 'Budgetbewust gezin, alleen schoon drinkwater',
                aanbeveling: 'APEC ROES-50',
                reden:
                  'Laagste aanschafprijs in de top 5 met industrie-standaard FILMTEC-membraan. Geen onnodige extra\'s, bewezen betrouwbaarheid over jaren.',
              },
              {
                profiel: 'Mensen die osmose-water te plat vinden',
                aanbeveling: 'iSpring RCC7AK',
                reden:
                  'Het alkaline remineralisatiestadium geeft een lichte mineralensmaak terug die veel lijkt op bronwater. Ideaal voor mensen die de neutraliteit van osmose water niet lekker vinden.',
              },
              {
                profiel: 'Kleine keuken of ruimtegebrek',
                aanbeveling: 'Aqua Medic Easy Line 190',
                reden:
                  'Compactste formaat in de vergelijking. De ingebouwde hulppomp geeft ook bij lagere waterdruk goede prestaties. Past in de kleinste kastjes.',
              },
              {
                profiel: 'Wie vers gefilterd water wil (geen drukvat)',
                aanbeveling: 'Waterdrop G3P600',
                reden:
                  'Tankless design filtert water op het moment van gebruik: altijd vers, nooit stilstaand water in een drukvat. Modern ontwerp, compacte behuizing.',
              },
              {
                profiel: 'Hard-waterregio (15+ °dH)',
                aanbeveling: 'APEC ROES-50 of 4-in-1+RO',
                reden:
                  'In harde watergebieden is het pre-filter belangrijk — de APEC heeft een extra pre-koolstof die het membraan beschermt. Check de waterhardheid voor jouw regio op de pagina waterhardheid.',
              },
            ].map(p => (
              <div key={p.profiel} className="border border-gray-100 rounded-xl p-4">
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 mb-2">
                  <p className="font-semibold text-gray-900 text-sm flex-1">{p.profiel}</p>
                  <span className="text-xs bg-[#005F8A] text-white px-2 py-1 rounded-lg shrink-0 w-fit">
                    {p.aanbeveling}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{p.reden}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5-jaar TCO tabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">5-jaar totale eigendomskosten (TCO)</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De aanschafprijs is slechts het begin. Hieronder een realistische TCO over 5 jaar inclusief
            filtervervanging (jaar 1–5) en membraanvervanging (jaar 3). Jaar 5 is ook een membraan-vervangingsjaar
            voor de meeste systemen. Ter vergelijking staat ook de kostenpost voor een gezin van 4 personen dat
            flessenwater koopt.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Systeem</th>
                  <th className="py-2.5 px-2 font-semibold text-[#003F5C] text-right">Aanschaf</th>
                  <th className="py-2.5 px-2 font-semibold text-[#003F5C] text-right">Jr 1</th>
                  <th className="py-2.5 px-2 font-semibold text-[#003F5C] text-right">Jr 2</th>
                  <th className="py-2.5 px-2 font-semibold text-[#003F5C] text-right">Jr 3</th>
                  <th className="py-2.5 px-2 font-semibold text-[#003F5C] text-right">Jr 4</th>
                  <th className="py-2.5 px-2 font-semibold text-[#003F5C] text-right">Jr 5</th>
                  <th className="py-2.5 px-2 font-semibold text-[#003F5C] text-right">Totaal</th>
                </tr>
              </thead>
              <tbody>
                {tco5jaar.map((r, i) => (
                  <tr
                    key={r.systeem}
                    className={
                      r.systeem === 'Flessenwater (gezin)'
                        ? 'bg-red-50 text-gray-500 text-xs italic'
                        : i === 0
                        ? 'bg-[#E0F2FE] font-medium'
                        : 'border-b border-gray-100'
                    }
                  >
                    <td className="py-2.5 px-3">{r.systeem}</td>
                    <td className="py-2.5 px-2 text-right">{r.aanschaf}</td>
                    <td className="py-2.5 px-2 text-right">{r.jr1}</td>
                    <td className="py-2.5 px-2 text-right">{r.jr2}</td>
                    <td className="py-2.5 px-2 text-right">{r.jr3}</td>
                    <td className="py-2.5 px-2 text-right">{r.jr4}</td>
                    <td className="py-2.5 px-2 text-right">{r.jr5}</td>
                    <td className="py-2.5 px-2 text-right font-semibold">{r.totaal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Jaar 3 en 5 zijn hoger vanwege membraanvervanging (€60–100). Bij de 4-in-1 kraan met RO zijn jaar 3/5 hoger vanwege membraan + boilerservice. Flessenwater: 0,5L per persoon per dag × 4 personen × €0,69 gemiddeld.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Zelfs het duurste osmose-systeem (de 4-in-1 kraan met RO, €1.459 over 5 jaar) is aanzienlijk goedkoper dan
            flessenwater (€2.500 over 5 jaar). De Aqua Medic Easy Line is het meest economisch over 5 jaar met
            €620 totaal. Wil je meer weten over de waterhardheid in jouw regio — een factor die de
            filterlevensduur beïnvloedt? Bekijk de{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid per gemeente
            </Link>
            .
          </p>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose — complete gids',
                desc: 'Alles over het werkingsprincipe, voordelen, nadelen en kosten van RO.',
              },
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Osmose filter kopen',
                desc: 'Onze actuele koopgids met aanbevelingen per budget en situatie.',
              },
              {
                href: '/kennisbank/osmose-water-apparaat',
                title: 'Osmose water apparaat',
                desc: 'Technische uitleg over de componenten van een osmose-systeem.',
              },
              {
                href: '/kennisbank/reverse-osmosis-nadelen',
                title: 'Nadelen reverse osmosis',
                desc: 'Eerlijke bespreking van de drie meestgenoemde bezwaren tegen RO.',
              },
              {
                href: '/kennisbank/osmose-water-drinken',
                title: 'Osmose water drinken: gezond?',
                desc: 'Wetenschappelijke onderbouwing van de veiligheid van osmose water.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Zoek de actuele waterhardheid op voor jouw woonplaats.',
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over osmosefilters vergelijken
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
