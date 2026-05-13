import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Omgekeerde Osmose Prijs: Kosten & Vergelijking 2026',
  description:
    'Wat kost een omgekeerde osmose systeem? Vergelijk aanschafprijs, jaarlijkse filterkosten en totale eigendomskosten over 5 jaar voor alle systeemtypen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/prijs' },
  openGraph: {
    title: 'Omgekeerde Osmose Prijs: Kosten & Vergelijking 2026',
    description:
      'Aanschafprijs €150–1000, filterkosten €50–150/jaar. Vergelijk de totale kosten van een osmosefilter over 5 jaar — inclusief vergelijking met flessenwater.',
    url: 'https://waterfilterplatform.nl/omgekeerde-osmose/prijs',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat kost een omgekeerde osmose filter gemiddeld?',
    answer:
      'Een basismodel osmosefilter (4-traps) kost €150–300. Een premium 5-traps systeem met boostpomp kost €300–500. Tankloze systemen liggen op €500–800 en een complete 4-in-1 kokend water kraan met ingebouwd osmosefilter kost €700–1000. Daarboven komen jaarlijkse filterkosten van €50–150.',
  },
  {
    question: 'Hoeveel kost een osmosefilter per jaar aan onderhoud?',
    answer:
      'De jaarlijkse onderhoudskosten bestaan voornamelijk uit filtervervanging: sedimentfilter (€10–20/jaar), koolstoffilter (€15–30/jaar) en RO-membraan (€40–80 per 2–3 jaar). In totaal rekent u op €50–120 per jaar voor een standaard onderbouwsysteem. Een 4-in-1 kraan heeft één jaarlijkse filterwissel van €80–150.',
  },
  {
    question: 'Wat kost installatie van een omgekeerde osmose filter?',
    answer:
      'Zelfinstallatie is haalbaar voor de meeste systemen: materiaalkosten zijn nihil en het duurt gemiddeld 30–60 minuten. Professionele installatie door een loodgieter kost €75–150 per uur, inclusief een bezoekje doorgaans €100–200. Een 4-in-1 kraan met boortje in het aanrechtblad vereist soms vakmanschap: reken op €150–250 voor professionele plaatsing.',
  },
  {
    question: 'Is een osmosefilter goedkoper dan flessenwater?',
    answer:
      'Ja, op middellange termijn bespaart een osmosefilter aanzienlijk. Een gezin van 4 dat 8 liter per dag koopt betaalt circa €1.460–2.920 per jaar aan flessenwater (€0,50–1,00/liter). De totale eigendomskosten van een osmosefilter over 5 jaar liggen op €500–1.500, inclusief aanschaf en alle filterkosten — een besparing van €5.000–12.000 over dezelfde periode.',
  },
  {
    question: 'Welke factoren bepalen de prijs van een osmosefilter?',
    answer:
      'De prijs wordt bepaald door: (1) membraantype en verwijderingspercentage (95–99%), (2) doorstroomsnelheid (L/uur), (3) aanwezigheid van een boostpomp, (4) aantal filterstappen (4–7), (5) tankinhoud of tankloos design, (6) extra functies zoals kokend water of remineralisatie. Goedkopere systemen missen vaak een boostpomp en produceren meer afvalwater.',
  },
];

const systeemPrijzen = [
  {
    naam: 'Basis 4-traps onderbouw',
    aanschaf: '€ 150 – 300',
    filterkosten: '€ 50 – 80 / jaar',
    installatie: '€ 0 (zelf) / €100–150 (pro)',
    membraanType: 'Standaard TFC 50–75 GPD',
    rejection: '95–97%',
    flow: '50–100 L/uur',
    afvalratio: '1:3 tot 1:5',
    aanbevolen: false,
    badge: '',
  },
  {
    naam: 'Premium 5-traps met boostpomp',
    aanschaf: '€ 300 – 500',
    filterkosten: '€ 60 – 100 / jaar',
    installatie: '€ 0 (zelf) / €100–150 (pro)',
    membraanType: 'TFC 75–100 GPD met pomp',
    rejection: '97–98%',
    flow: '100–200 L/uur',
    afvalratio: '1:1 tot 1:2',
    aanbevolen: false,
    badge: 'Beste prijs-kwaliteit',
  },
  {
    naam: 'Tankloos systeem (direct flow)',
    aanschaf: '€ 500 – 800',
    filterkosten: '€ 80 – 120 / jaar',
    installatie: '€ 0 (zelf) / €100–150 (pro)',
    membraanType: 'Tankloze composite membraan',
    rejection: '97–99%',
    flow: '150–300 L/uur',
    afvalratio: '1:1 of beter',
    aanbevolen: false,
    badge: 'Geen druktank nodig',
  },
  {
    naam: '4-in-1 kokend water kraan',
    aanschaf: '€ 700 – 1.000',
    filterkosten: '€ 80 – 150 / jaar',
    installatie: '€ 0 (zelf) / €150–250 (pro)',
    membraanType: 'Geïntegreerd 75–100 GPD',
    rejection: '97–99%',
    flow: '150–250 L/uur',
    afvalratio: 'Geoptimaliseerd 1:1',
    aanbevolen: true,
    badge: 'Premium & Aanbevolen',
  },
];

const tcoData = [
  {
    naam: 'Basis 4-traps',
    aanschaf: 300,
    jaarFilterkosten: 65,
    installatie: 0,
    jaar1: 365,
    jaar2: 430,
    jaar3: 495,
    jaar4: 560,
    jaar5: 625,
    highlight: false,
  },
  {
    naam: 'Premium 5-traps',
    aanschaf: 400,
    jaarFilterkosten: 80,
    installatie: 0,
    jaar1: 480,
    jaar2: 560,
    jaar3: 640,
    jaar4: 720,
    jaar5: 800,
    highlight: false,
  },
  {
    naam: 'Tankloos systeem',
    aanschaf: 650,
    jaarFilterkosten: 100,
    installatie: 0,
    jaar1: 750,
    jaar2: 850,
    jaar3: 950,
    jaar4: 1050,
    jaar5: 1150,
    highlight: false,
  },
  {
    naam: '4-in-1 kokend water kraan',
    aanschaf: 850,
    jaarFilterkosten: 115,
    installatie: 0,
    jaar1: 965,
    jaar2: 1080,
    jaar3: 1195,
    jaar4: 1310,
    jaar5: 1425,
    highlight: true,
  },
];

export default function OsmosePrijsPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Omgekeerde osmose', url: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
          { name: 'Prijs', url: 'https://waterfilterplatform.nl/omgekeerde-osmose/prijs' },
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
            <span>Prijs</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Omgekeerde Osmose Prijs: Kosten &amp; Vergelijking 2026
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Wat kost een <strong>omgekeerde osmose systeem</strong> echt? De aanschafprijs is slechts het
            begin. Op deze pagina vergelijken we de totale kosten van alle systeemtypen: aanschaf,
            jaarlijkse filterkosten, installatie en de vergelijking met flessenwater over 5 jaar.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#prijsoverzicht"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Naar prijsoverzicht →
            </Link>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Osmose filter kopen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#prijsoverzicht" className="hover:underline">Prijsoverzicht per systeemtype</a></li>
            <li><a href="#filterkosten" className="hover:underline">Jaarlijkse filterkosten</a></li>
            <li><a href="#tco" className="hover:underline">5-jaar totaalkostenanalyse</a></li>
            <li><a href="#flessenwater" className="hover:underline">Vergelijking met flessenwater</a></li>
            <li><a href="#installatie" className="hover:underline">Installatiekosten: zelf vs. professional</a></li>
            <li><a href="#prijsfactoren" className="hover:underline">Factoren die de prijs bepalen</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Prijsoverzicht */}
        <section id="prijsoverzicht">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Aanschafprijs per systeemtype: wat kost een osmosefilter?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            De aanschafprijzen voor omgekeerde osmose systemen lopen sterk uiteen. De vier hoofdcategorieën
            zijn basismodellen (€150–300), premium systemen met boostpomp (€300–500), tankloze systemen
            (€500–800) en complete 4-in-1 kokend water kranen (€700–1.000). Hieronder een overzicht per
            categorie inclusief de belangrijkste technische specificaties die de prijs rechtvaardigen.
          </p>
          <div className="space-y-5">
            {systeemPrijzen.map(s => (
              <div
                key={s.naam}
                className={`rounded-2xl border p-5 ${s.aanbevolen ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{s.naam}</h3>
                    <p className="text-sm text-gray-500">{s.membraanType}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-[#005F8A] text-lg">{s.aanschaf}</p>
                    {s.badge && (
                      <span className={`text-xs px-2 py-0.5 rounded-full ${s.aanbevolen ? 'bg-[#005F8A] text-white' : 'bg-gray-100 text-gray-600'}`}>
                        {s.badge}
                      </span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm mb-3">
                  {[
                    { label: 'Filterkosten/jaar', value: s.filterkosten },
                    { label: 'Verwijdering', value: s.rejection },
                    { label: 'Doorstroom', value: s.flow },
                    { label: 'Afvalratio', value: s.afvalratio },
                  ].map(spec => (
                    <div key={spec.label} className="bg-white/70 rounded-lg p-2">
                      <p className="text-gray-400 text-xs mb-0.5">{spec.label}</p>
                      <p className="font-medium text-gray-800 text-xs">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 border-t border-gray-100 pt-2">
                  <span className="font-semibold text-gray-700">Installatie: </span>{s.installatie}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Filterkosten */}
        <section id="filterkosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Jaarlijkse filterkosten: wat betaalt u na aanschaf?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De aanschafprijs is slechts de eerste stap. Een osmosefilter heeft meerdere filtercomponenten
            die periodiek vervangen moeten worden. Voor de meeste systemen zijn dit drie tot vier losse
            filters met elk een eigen vervangingsinterval. Vergeet dit niet mee te rekenen bij de
            vergelijking: een goedkoop basismodel met dure of frequente filtervervanging kan over een
            jaar duurder uitvallen dan een kwalitatief systeem.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-5">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Filtercomponent</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Interval</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Basis</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Premium</th>
                  <th className="py-2.5 px-3 font-semibold text-center bg-[#005F8A]">4-in-1</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { filter: 'Sedimentfilter', interval: '6–12 maanden', basis: '€ 10–20', premium: '€ 12–25', vierin1: 'Inbegrepen' },
                  { filter: 'Koolstof voorfilter', interval: '6–12 maanden', basis: '€ 15–30', premium: '€ 18–35', vierin1: 'Inbegrepen' },
                  { filter: 'RO-membraan', interval: '2–3 jaar', basis: '€ 40–70', premium: '€ 50–80', vierin1: 'Inbegrepen' },
                  { filter: 'Koolstof nafilter', interval: '12 maanden', basis: '€ 15–25', premium: '€ 15–30', vierin1: 'Inbegrepen' },
                  { filter: 'Remineralisatiefilter', interval: '12 maanden', basis: 'Nvt', premium: '€ 20–35', vierin1: 'Inbegrepen' },
                  { filter: 'Totaal per jaar', interval: 'Geschat gemiddeld', basis: '€ 50–80', premium: '€ 60–100', vierin1: '€ 80–150' },
                ].map((r, i) => (
                  <tr
                    key={r.filter}
                    className={
                      r.filter === 'Totaal per jaar'
                        ? 'bg-[#E0F2FE] font-semibold text-[#003F5C]'
                        : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }
                  >
                    <td className="py-2.5 px-3">{r.filter}</td>
                    <td className="py-2.5 px-3 text-center text-xs text-gray-500">{r.interval}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.basis}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.premium}</td>
                    <td className="py-2.5 px-3 text-center text-xs bg-[#E0F2FE]/60">{r.vierin1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Tip:</strong> Controleer bij aanschaf altijd of een
            vervangende filterset beschikbaar is en wat de prijs is. Sommige goedkope systemen hebben
            proprietary filters die duurder zijn dan universele alternatieven. Meet jaarlijks de
            TDS-waarde met een TDS-meter (€5–15) om de membraankwaliteit te beoordelen.
          </div>
        </section>

        {/* TCO tabel */}
        <section id="tco">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            5-jaar totaalkostenanalyse: welk systeem is op lange termijn goedkoper?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Een eerlijke kostenvergelijking kijkt verder dan de aanschafprijs. De tabel hieronder toont
            de cumulatieve kosten van elk systeemtype over 5 jaar, inclusief aanschaf, filterkosten en
            een inschatting voor een eventueel membraanwissel in jaar 3. Installatiekosten zijn
            niet inbegrepen (zie verderop).
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[540px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Systeem</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Jaar 1</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Jaar 2</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Jaar 3</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Jaar 4</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Jaar 5</th>
                </tr>
              </thead>
              <tbody>
                {tcoData.map((r, i) => (
                  <tr
                    key={r.naam}
                    className={r.highlight ? 'bg-[#E0F2FE] font-semibold text-[#003F5C]' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="py-2.5 px-3">{r.naam}</td>
                    <td className="py-2.5 px-3 text-center text-xs">€ {r.jaar1}</td>
                    <td className="py-2.5 px-3 text-center text-xs">€ {r.jaar2}</td>
                    <td className="py-2.5 px-3 text-center text-xs">€ {r.jaar3}</td>
                    <td className="py-2.5 px-3 text-center text-xs">€ {r.jaar4}</td>
                    <td className="py-2.5 px-3 text-center text-xs">€ {r.jaar5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-4">
            Cumulatieve kosten inclusief aanschafprijs en gemiddelde jaarlijkse filterkosten.
            Membraanwissel in jaar 3 inbegrepen in schatting. Installatiekosten niet inbegrepen.
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-4 text-sm text-gray-700">
            <p className="font-semibold text-[#003F5C] mb-2">Wat de tabel laat zien:</p>
            <ul className="space-y-1.5">
              <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">→</span>Het basismodel is het goedkoopst in jaar 1, maar het verschil met premium systemen loopt snel terug door lage meerkosten bij premium.</li>
              <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">→</span>De 4-in-1 kraan heeft hogere aanvangsinvestering maar vervangt ook waterkoker en eventuele Brita-kan — die kosten zijn hierboven niet meegenomen.</li>
              <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">→</span>Over 5 jaar liggen alle systemen tussen €625 en €1.425 — een fractie van de kosten van flessenwater.</li>
            </ul>
          </div>
        </section>

        {/* Flessenwater vergelijking */}
        <section id="flessenwater">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Osmosefilter versus flessenwater: de kostenvergelijking voor een gezin van 4
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Veel gezinnen twijfelen of een osmosefilter de investering waard is in vergelijking met
            flessenwater blijven kopen. Hieronder rekenen we het concreet door voor een gezin van 4
            personen dat 8 liter drinkwater per dag verbruikt — een realistische schatting voor drinken
            en koken.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <p className="font-bold text-gray-900 mb-3">Flessenwater (gezin van 4, 8L/dag)</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between"><span>Goedkoop (€0,25/L)</span><span className="font-semibold">€ 730 / jaar</span></li>
                <li className="flex justify-between"><span>Gemiddeld (€0,50/L)</span><span className="font-semibold">€ 1.460 / jaar</span></li>
                <li className="flex justify-between"><span>Premium (€1,00/L)</span><span className="font-semibold">€ 2.920 / jaar</span></li>
                <li className="border-t border-gray-200 pt-2 flex justify-between font-semibold text-gray-900">
                  <span>5 jaar totaal (gem.)</span><span className="text-red-600">€ 7.300</span>
                </li>
              </ul>
              <p className="text-xs text-gray-400 mt-3">Exclusief transportkosten en milieu-impact plastic afval.</p>
            </div>
            <div className="bg-[#E0F2FE] rounded-2xl p-5 border border-[#005F8A]">
              <p className="font-bold text-[#003F5C] mb-3">Osmosefilter (premium 5-traps)</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between"><span>Aanschaf (eenmalig)</span><span className="font-semibold">€ 400</span></li>
                <li className="flex justify-between"><span>Filterkosten/jaar</span><span className="font-semibold">€ 80</span></li>
                <li className="flex justify-between"><span>Kosten/liter (5 jaar)</span><span className="font-semibold">€ 0,01 – 0,02</span></li>
                <li className="border-t border-[#005F8A]/20 pt-2 flex justify-between font-semibold text-[#003F5C]">
                  <span>5 jaar totaal</span><span className="text-green-700">€ 800</span>
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-3">Inclusief gemiddelde jaarlijkse filterkosten en membraanwissel.</p>
            </div>
          </div>
          <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-green-900">Besparing over 5 jaar:</strong> Een osmosefilter bespaart
            een doorsnee gezin van 4 tussen <strong>€5.000 en €12.000</strong> over 5 jaar in vergelijking
            met flessenwater — afhankelijk van het merk flessenwater. Bovendien worden er geen
            plastic flessen verbruikt: gemiddeld 5.840 minder flessen van 1,5L per jaar.
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Wilt u meer weten over de kostenvergelijking en kwaliteitsaspecten van osmosewater?
            Lees onze uitgebreide kennisbankartikel op{' '}
            <Link href="/kennisbank/osmose-filter-prijs" className="text-[#005F8A] underline hover:no-underline">
              osmose filter prijs in de kennisbank
            </Link>
            .
          </p>
        </section>

        <CTABanner context="osmose" />

        {/* Installatie */}
        <section id="installatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Installatiekosten: zelf installeren of een professional inschakelen?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De meeste omgekeerde osmose systemen zijn ontworpen voor zelfinstallatie. U sluit het systeem
            aan op de koudwatertoevoer (via een T-stuk of splitter) en op de sifon onder het aanrecht voor
            de afvoer van afvalwater. Het installeren van een apart osmosekraantje vereist een kleine
            boring in het aanrechtblad of de gootsteen. Gemiddeld bent u 30–90 minuten bezig.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-3">Zelf installeren (DIY)</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>Gratis — geen arbeidskosten</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>Instructievideo&apos;s doorgaans beschikbaar</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>Meeste systemen vereisen geen loodgieterservaring</li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">!</span>Kleine kans op lekkage bij eerste installatie</li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">!</span>Boring voor osmosekraantje vereist juist gereedschap</li>
              </ul>
              <p className="text-xs text-gray-400 mt-3 border-t border-gray-100 pt-2">Tijdsinvestering: 30–90 minuten</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-3">Professionele installatie</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>Vakkundige uitvoering, garantie op installatie</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>Aanbevolen voor 4-in-1 kranen (boortje aanrechtblad)</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>Handig bij lage waterdruk (aanpassing nodig)</li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">!</span>Kosten: €75–150/uur (loodgieter)</li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">!</span>Voorrijkosten: €30–50 extra</li>
              </ul>
              <p className="text-xs text-gray-400 mt-3 border-t border-gray-100 pt-2">Totale installatiekosten: €100–250 afhankelijk van systeem</p>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-[#005F8A]">Advies:</strong> Voor basismodellen en standaard
            onderbouwsystemen is zelfinstallatie goed te doen. Voor een 4-in-1 kokend water kraan
            waarbij u een boorgat in het graniet of composiet aanrechtblad nodig hebt, is een
            professional aan te raden. Een foutje kost daar meer dan de besparing op installatiekosten.
          </div>
        </section>

        {/* Prijsfactoren */}
        <section id="prijsfactoren">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Factoren die de prijs van een osmosefilter bepalen
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Twee systemen met dezelfde aanschafprijs kunnen sterk verschillen in kwaliteit en prestaties.
            De volgende factoren bepalen zowel de prijs als de kwaliteit van een osmosefilter:
          </p>
          <div className="space-y-4">
            {[
              {
                nr: 1,
                titel: 'Membraantype en verwijderingspercentage (rejection rate)',
                tekst: 'Het RO-membraan is het hart van het systeem. Goedkopere membranen halen 90–95% verwijdering van opgeloste stoffen; kwalitatieve membranen halen 97–99%. Een hoog verwijderingspercentage is essentieel voor het verwijderen van zware metalen, nitraten, pesticiden en farmaceutische residuen. Let op de TFC (Thin Film Composite) markering en de GPD-capaciteit (gallons per dag) op het membraanlabel.',
              },
              {
                nr: 2,
                titel: 'Aanwezigheid van een boostpomp',
                tekst: 'Een boostpomp verhoogt de waterdruk in het systeem, wat resulteert in hogere doorstroomsnelheid, een betere afvalwaterratio (minder verspilling) en betere filtratieprestaties bij lage leidingwaterdruk (< 3 bar). Systemen met boostpomp kosten €100–200 meer maar besparen op lange termijn door lagere waterverbruik en betere membraanlevensduur.',
              },
              {
                nr: 3,
                titel: 'Aantal filterstappen en remineralisatie',
                tekst: 'Basismodellen hebben 4 stappen: sediment, koolstof voor, RO-membraan, koolstof na. Premium systemen voegen een remineralisatiefilter toe die gezonde mineralen (calcium, magnesium) terugbrengt na het osmoseproces. Dit verbetert de smaak en het gezondheidsaspect. Sommige premium systemen voegen ook een UV-filter (bacteriën) of alkaline filter (pH-verhoging) toe.',
              },
              {
                nr: 4,
                titel: 'Doorstroomsnelheid en tankloze versus tank-systemen',
                tekst: 'Traditionele systemen slaan gefilterd water op in een druktank (3–12 liter). Tankloze systemen (direct flow) produceren water on-demand met een hogere doorstroomsnelheid maar vereisen voldoende waterdruk. Tankloze systemen zijn compacter, produceren geen stilstaand water in een tank en zijn hygiënischer. Ze kosten wel meer (€500–800 vs €150–400 voor tankmodellen).',
              },
              {
                nr: 5,
                titel: 'Extra functies: kokend water, bruisend water en smart features',
                tekst: 'De 4-in-1 kokend water kraan combineert osmose filtering met een geïntegreerde boiler voor direct kokend water (100°C). Sommige modellen bieden ook bruisend gefilterd water. Smart-functies zoals filterverbruiksmonitoring via app of LED-indicatoren voor filtervervangingstijd verhogen de gebruiksvriendelijkheid maar ook de prijs. Weeg de meerwaarde af tegen uw specifieke gebruikspatroon.',
              },
            ].map(f => (
              <div key={f.nr} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {f.nr}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{f.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Waterkosten vergelijking extra blok */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Afvalwater: verborgen kosten van goedkope systemen
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Een aspect dat vaak over het hoofd wordt gezien bij de aanschaf van een omgekeerde osmose
            filter is de afvalwaterratio. Goedkope basismodellen zonder boostpomp produceren 3–5 liter
            afvalwater per liter schoon water. Voor een gezin van 4 dat 8 liter drinkwater per dag
            filtert, betekent dit 24–40 liter extra waterverbruik per dag — circa 8.760–14.600 liter
            per jaar extra.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            {[
              { ratio: '1:5 (basis)', extraWater: '14.600 L/jaar', extraKosten: '€ 25–40/jaar', type: 'Basismodel' },
              { ratio: '1:2 (premium)', extraWater: '5.840 L/jaar', extraKosten: '€ 10–15/jaar', type: 'Premium met pomp' },
              { ratio: '1:1 (4-in-1)', extraWater: '2.920 L/jaar', extraKosten: '€ 5–8/jaar', type: '4-in-1 geoptimaliseerd' },
            ].map(w => (
              <div key={w.ratio} className="bg-gray-50 rounded-xl p-4 text-sm">
                <p className="font-bold text-gray-900 mb-1">{w.type}</p>
                <p className="text-gray-500 text-xs mb-2">Ratio: {w.ratio}</p>
                <p className="text-gray-700">Afvalwater: <span className="font-semibold">{w.extraWater}</span></p>
                <p className="text-gray-700">Extra waterkosten: <span className="font-semibold">{w.extraKosten}</span></p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Het absolute verschil in waterkosten is beperkt (€5–40/jaar), maar een lagere afvalwaterratio
            verlengt ook de levensduur van het RO-membraan. Combineer dit met lagere filterkosten en
            hogere doorstroomsnelheid, en een systeem met boostpomp of de 4-in-1 kraan rechtvaardigt
            zijn hogere aanschafprijs al snel.
          </p>
        </section>

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose: hoe werkt het?' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose filter kopen — welk systeem?' },
              { href: '/kennisbank/osmose-filter-prijs', label: 'Kennisbank: osmose filter prijs uitgelegd' },
              { href: '/4-in-1-kraan', label: '4-in-1 kokend water kraan met osmose filter' },
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

        {/* CTA naar kopen */}
        <section className="bg-gradient-to-br from-[#005F8A] to-[#003F5C] text-white rounded-2xl p-6 md:p-8 text-center">
          <p className="text-blue-200 text-sm mb-1">Klaar met vergelijken?</p>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Bekijk de PureAqua — osmose, kokend én koud water
          </h2>
          <p className="text-blue-100 mb-5 max-w-lg mx-auto text-sm leading-relaxed">
            De PureAqua 4-in-1 combineert omgekeerde osmose filtratie met kokend, koud en warm water
            uit één elegante kraan. Één jaarlijkse filterwissel. Direct leverbaar.
          </p>
          <Link
            href="/omgekeerde-osmose/kopen"
            className="inline-block bg-white text-[#005F8A] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm md:text-base"
          >
            Bekijk de PureAqua 4-in-1 →
          </Link>
          <p className="text-xs text-blue-200 mt-3">pureaqua.nl · Nederlands merk · direct leverbaar</p>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over osmosefilter prijs
          </h2>
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
