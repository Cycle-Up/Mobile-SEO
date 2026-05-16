import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Heet water kraan prijs: kosten overzicht 2026',
  description:
    'Wat kost een heet water kraan? Overzicht van aanschaf, installatie, energieverbruik en onderhoudskosten. Vergelijking over 5 jaar.',
  alternates: { canonical: 'https://waterfilterplatform.nl/heet-water-kraan/prijs' },
  openGraph: {
    title: 'Heet water kraan prijs: kosten overzicht 2026',
    description:
      'Wat kost een heet water kraan? Overzicht van aanschaf, installatie, energieverbruik en onderhoudskosten. Vergelijking over 5 jaar.',
    url: 'https://waterfilterplatform.nl/heet-water-kraan/prijs',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat kost een heet water kraan gemiddeld?',
    answer:
      'Een heet water kraan kost gemiddeld 150-600 euro voor het apparaat zelf. Budget doorstroom-modellen beginnen bij 150 euro, middenklasse mini-boilers kosten 250-450 euro en premium gecertificeerde modellen 450-600 euro. Een 4-in-1 kraan met osmosefilter kost 699-900 euro maar vervangt meerdere losse apparaten.',
  },
  {
    question: 'Wat zijn de jaarlijkse energiekosten van een heet water kraan?',
    answer:
      'Een doorstroom heater zonder standby verbruikt 0W standby en 1.500-3.000W bij gebruik. Bij 10 kopjes per dag (1 liter totaal) kost dit circa 15-25 euro per jaar aan stroom. Een mini-boiler met 20-30W standby kost 25-40 euro per jaar aan standby alleen, plus gebruik. Totaal gemiddeld 20-50 euro per jaar.',
  },
  {
    question: 'Is een heet water kraan goedkoper dan een waterkoker?',
    answer:
      'Op jaarbasis zijn de kosten vergelijkbaar als u 3-4 kopjes per dag zet. Een doorstroom heater is zuiniger omdat u alleen de exacte hoeveelheid verwarmt. Een waterkoker die dagelijks vol wordt opgewarmd kost 40-70 euro per jaar. Bij meer gebruik (4+ kopjes per dag) bespaart een heet water kraan 15-30 euro per jaar.',
  },
  {
    question: 'Wat kost een heet water kraan laten installeren?',
    answer:
      'Professionele installatie kost 80-300 euro afhankelijk van de complexiteit. Eenvoudige plaatsing met bestaand kraangat en stopcontact: 80-150 euro. Inclusief nieuw kraangat boren, stopcontact plaatsen of osmosekoppeling: 150-300 euro. Doe-het-zelvers besparen deze kosten volledig bij eenvoudige modellen.',
  },
  {
    question: 'Hoe hoog zijn de onderhoudskosten van een heet water kraan?',
    answer:
      'Jaarlijkse onderhoudskosten bestaan uit filtervervanging (50-100 euro bij gefilterde modellen), ontkalkingsbeurt (0-50 euro, DIY met citroenzuur of professioneel), en mogelijk vervanging van een anode of O-ringen na 3-5 jaar. Totaal 0-100 euro per jaar afhankelijk van het model en waterharheid.',
  },
  {
    question: 'Wanneer is een heet water kraan rendabel?',
    answer:
      'Bij meer dan 3 kopjes thee of soep per dag is een doorstroom heater al rendabel ten opzichte van een waterkoker. De terugverdientijd van de aanschaf (150-300 euro) ten opzichte van een waterkoker (30-50 euro) ligt op 5-10 jaar puur op energie. Het echte voordeel is comfort en tijdbesparing, niet de energiebesparing.',
  },
  {
    question: 'Wat kost de 5-jaars TCO van een heet water kraan?',
    answer:
      'Budget model (150 euro aanschaf, 0 euro installatie, 20 euro/jaar energie): circa 250 euro over 5 jaar. Premium model (500 euro aanschaf, 150 euro installatie, 40 euro/jaar): circa 850 euro. PureAqua 4-in-1 (800 euro aanschaf, 0 euro installatie DIY, 50 euro/jaar energie + filter): circa 1.050 euro maar inclusief osmosefiltratie en complete vervanging van waterkoker, filterkan en mengkraan.',
  },
  {
    question: 'Zijn er verborgen kosten bij een heet water kraan?',
    answer:
      'Mogelijke extra kosten zijn: boorgat in aanrecht (50-200 euro bij graniet), stopcontact plaatsen (80-150 euro), ontkalkingsbeurt bij hard water (30-60 euro per keer), filtervervanging bij gefilterde modellen (50-100 euro per jaar), en vervanging van verwarmingselement na 5-8 jaar (80-150 euro onderdeel). Plan vooraf een realistisch budget inclusief deze posten.',
  },
];

const prijsklassen = [
  {
    segment: 'Budget',
    bereik: '150 - 250 euro',
    type: 'Doorstroom instant water heater',
    geschikt: 'Personen of kleine huishoudens, basisgebruik',
    pro: 'Laagste aanschafprijs, geen standby verbruik, zelf installeren',
    con: 'Beperkte temperatuurkeuze, geen filter, minder bouwkwaliteit',
    kleur: 'border-gray-200',
  },
  {
    segment: 'Midden',
    bereik: '250 - 500 euro',
    type: 'Mini-boiler met instelbare temp.',
    geschikt: 'Gezinnen 2-4 personen, regelmatig gebruik',
    pro: 'Instelbare temperatuur, directe beschikbaarheid, langere garantie',
    con: 'Standby energieverbruik 20-40W, geen osmosefilter',
    kleur: 'border-gray-200',
  },
  {
    segment: 'Premium',
    bereik: '500 - 1.200 euro',
    type: 'Gecertificeerd merk (Grohe Red, InSinkErator)',
    geschikt: 'Bewuste koper, lange levensduur gewenst',
    pro: 'WRAS/NSF certificering, topbouwkwaliteit, uitgebreide garantie',
    con: 'Hoge prijs, osmosefilter niet ingebouwd',
    kleur: 'border-gray-200',
  },
  {
    segment: 'Compleet',
    bereik: '699 - 900 euro',
    type: 'PureAqua 4-in-1 met osmose',
    geschikt: 'Wie alles wil: heet, kokend, gefilterd, bruisend',
    pro: 'Vervangt waterkoker + filterkan + mengkraan, osmosefiltratie, 100 graden Celsius',
    con: 'Hogere aanschaf dan losse heet water kraan',
    kleur: 'border-[#005F8A]',
    highlight: true,
  },
];

const tcoData = [
  {
    model: 'Budget doorstroom heater',
    aanschaf: 150,
    installatie: 0,
    energieJaar: 20,
    onderhoudJaar: 10,
    tco5jaar: 250,
    highlight: false,
  },
  {
    model: 'Midden mini-boiler',
    aanschaf: 350,
    installatie: 120,
    energieJaar: 35,
    onderhoudJaar: 25,
    tco5jaar: 770,
    highlight: false,
  },
  {
    model: 'Premium Grohe Red / InSinkErator',
    aanschaf: 700,
    installatie: 150,
    energieJaar: 40,
    onderhoudJaar: 30,
    tco5jaar: 1200,
    highlight: false,
  },
  {
    model: 'PureAqua 4-in-1 met osmose',
    aanschaf: 800,
    installatie: 0,
    energieJaar: 45,
    onderhoudJaar: 70,
    tco5jaar: 1375,
    highlight: true,
    notitie: 'Inclusief osmosefilter, vervangt waterkoker (50 euro) + filterkan (150 euro) + mengkraan (200 euro)',
  },
];

export default function HeetWaterKraanPrijsPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Heet water kraan', url: 'https://waterfilterplatform.nl/heet-water-kraan' },
          { name: 'Prijs', url: 'https://waterfilterplatform.nl/heet-water-kraan/prijs' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Heet water kraan prijs: kosten overzicht 2026',
          description:
            'Wat kost een heet water kraan? Overzicht van aanschaf, installatie, energieverbruik en onderhoudskosten. Vergelijking over 5 jaar.',
          datePublished: '2026-05-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/heet-water-kraan/prijs',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/heet-water-kraan" className="hover:text-[#005F8A]">Heet water kraan</Link>
            <span className="mx-2">/</span>
            <span>Prijs</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Heet water kraan prijs: kosten overzicht 2026
          </h1>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Wat kost een <strong>heet water kraan</strong> echt? Niet alleen de aanschafprijs maar
            ook installatie, energieverbruik en jaarlijks onderhoud bepalen de totale eigendomskosten.
            Op deze pagina vindt u alle kosten overzichtelijk, inclusief een 5-jaars
            total cost of ownership vergelijking van vier modellen.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            En we berekenen wanneer een heet water kraan rendabel is ten opzichte van een gewone
            waterkoker. Spoiler: bij meer dan 3 kopjes per dag is de terugverdientijd minder dan 5 jaar.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/heet-water-kraan/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Koopgids lezen &rarr;
            </Link>
            <Link
              href="/heet-water-kraan/vergelijken"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Modellen vergelijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#prijsklassen" className="hover:underline">Prijsklassen aanschaf</a></li>
            <li><a href="#installatie" className="hover:underline">Installatiekosten</a></li>
            <li><a href="#energie" className="hover:underline">Energieverbruik en kosten</a></li>
            <li><a href="#onderhoud" className="hover:underline">Onderhoud en filterkosten</a></li>
            <li><a href="#tco" className="hover:underline">5-jaar TCO vergelijking</a></li>
            <li><a href="#rendabel" className="hover:underline">Wanneer is het rendabel?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Quick Answer */}
        <section>
          <QuickAnswer answer="Een heet water kraan kost 150-600 euro aanschaf plus 0-300 euro installatie. Jaarlijkse kosten: 20-50 euro energie plus 0-100 euro onderhoud. Over 5 jaar kost een budget model circa 250 euro, een premium model circa 1.200 euro. De PureAqua 4-in-1 met osmose kost meer maar vervangt waterkoker, filterkan en mengkraan tegelijk." />
        </section>

        {/* Prijsklassen */}
        <section id="prijsklassen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Prijsklassen heet water kraan: aanschafoverzicht
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De aanschafprijs van een heet water kraan varieert van 150 euro voor een eenvoudige
            doorstroom heater tot 1.200 euro voor een gecertificeerd premium merk. Hier is het
            volledige overzicht per segment:
          </p>
          <div className="space-y-4">
            {prijsklassen.map(p => (
              <div
                key={p.segment}
                className={`rounded-2xl border p-5 ${p.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                  <div>
                    <p className="font-bold text-gray-900">{p.segment}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{p.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-[#005F8A]">{p.bereik}</p>
                    {p.highlight && (
                      <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full">
                        Beste waarde
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-3">{p.geschikt}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="bg-green-50 rounded-lg p-2.5">
                    <p className="text-xs font-semibold text-green-700 mb-1">Voordelen</p>
                    <p className="text-xs text-gray-700">{p.pro}</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-2.5">
                    <p className="text-xs font-semibold text-red-600 mb-1">Nadelen</p>
                    <p className="text-xs text-gray-700">{p.con}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Installatiekosten */}
        <section id="installatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Installatiekosten: wat komt er bij?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Naast de aanschafprijs van het apparaat moet u rekening houden met de eenmalige
            installatiekosten. Deze varieren sterk afhankelijk van de situatie in uw keuken:
          </p>
          <div className="space-y-2 mb-5">
            {[
              { scenario: 'DIY bij bestaand kraangat + stopcontact', kosten: '0 euro', details: 'Eenvoudige doorstroom of mini-boiler, materiaal inbegrepen bij systeem' },
              { scenario: 'Installateur, standaard plaatsing', kosten: '80 - 150 euro', details: 'Montage + aansluiting op water en stroom, 1-1,5 uur werk' },
              { scenario: 'Inclusief nieuw kraangat (hout)', kosten: '100 - 180 euro', details: 'Inclusief boren en afwerking kraagatrand' },
              { scenario: 'Inclusief nieuw kraangat (graniet/composiet)', kosten: '200 - 350 euro', details: 'Steenhouwer vereist, speciaal gereedschap' },
              { scenario: 'Inclusief nieuw stopcontact', kosten: '160 - 300 euro', details: 'Elektricien + installateur of gecombineerd' },
              { scenario: '4-in-1 met osmose, complete installatie', kosten: '0 - 300 euro', details: 'DIY mogelijk in 60-90 min, of installateur voor optimaal resultaat' },
            ].map(r => (
              <div key={r.scenario} className="flex gap-4 items-start border border-gray-100 rounded-xl p-3">
                <span className="font-semibold text-[#005F8A] text-sm shrink-0 w-36">{r.kosten}</span>
                <div>
                  <p className="font-medium text-gray-800 text-sm">{r.scenario}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{r.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Energieverbruik */}
        <section id="energie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Energieverbruik en jaarlijkse energiekosten
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het energieverbruik van een heet water kraan bestaat uit twee componenten: standby verbruik
            (continu, 24/7) en gebruiksverbruik (alleen bij tappen). Bij een stroompijs van 0,30 euro
            per kWh gelden de volgende jaarkosten:
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Type systeem</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Standby</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Standby/jaar</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Totaal/jaar</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Doorstroom heater (tankless)', standby: '0W', jaarStandby: '0 euro', totaal: '15 - 25 euro' },
                  { type: 'Mini-boiler (20-30W)', standby: '20-30W', jaarStandby: '18 - 26 euro', totaal: '25 - 40 euro' },
                  { type: 'Mini-boiler (40-50W)', standby: '40-50W', jaarStandby: '35 - 44 euro', totaal: '45 - 60 euro' },
                  { type: 'Kokend water kraan (goed geisol.)', standby: '10-15W', jaarStandby: '9 - 13 euro', totaal: '20 - 35 euro' },
                  { type: 'Waterkoker (vergelijking)', standby: '0W', jaarStandby: '0 euro', totaal: '40 - 70 euro (4x/dag vol)' },
                ].map(r => (
                  <tr key={r.type} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-800 text-xs">{r.type}</td>
                    <td className="py-2.5 px-3 text-center text-xs text-gray-600">{r.standby}</td>
                    <td className="py-2.5 px-3 text-center text-xs text-gray-600">{r.jaarStandby}</td>
                    <td className="py-2.5 px-3 text-right text-xs font-medium text-[#005F8A]">{r.totaal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Berekend bij 0,30 euro per kWh en gemiddeld gebruik van 3-5 kopjes per dag. Waterkoker
            berekend bij 4 keer vol (1,7 liter) opwarmen per dag.
          </p>
        </section>

        {/* Onderhoud */}
        <section id="onderhoud">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Onderhoud en filterkosten per jaar
          </h2>
          <div className="space-y-3">
            {[
              {
                post: 'Ontkalkingsbeurt (bij hard water)',
                kosten: '0 - 50 euro/jaar',
                details: 'DIY met citroenzuur (1-5 euro materiaal) of professioneel. Bij osmosefilter niet nodig: kalk wordt al gefilterd.',
              },
              {
                post: 'Kalkfilter vervanging (eenvoudig model)',
                kosten: '20 - 50 euro/jaar',
                details: 'In-line kalkfilter voor de boiler, elke 6-12 maanden vervangen afhankelijk van waterharheid.',
              },
              {
                post: 'Koolstoffilter vervanging',
                kosten: '30 - 60 euro/jaar',
                details: 'Modellen met geintegreerde koolstoffilterpatroon: 1x per jaar bij normaal gebruik.',
              },
              {
                post: 'Osmosefilter vervanging (4-in-1)',
                kosten: '60 - 100 euro/jaar',
                details: 'Jaarlijkse filterwissel voor osmosemembraan + pre- en postfilters. Inclusief bij servicepakket PureAqua.',
              },
              {
                post: 'Verwarmingselement vervanging (na 5-8 jaar)',
                kosten: '80 - 150 euro eenmalig',
                details: 'Levensduur aanzienlijk langer bij gebruik van gefilterd water. Bij osmosefilter nagenoeg geen kalkaanslag.',
              },
            ].map(o => (
              <div key={o.post} className="border border-gray-100 rounded-xl p-4">
                <div className="flex items-start justify-between gap-3 mb-1 flex-wrap">
                  <p className="font-semibold text-gray-900 text-sm">{o.post}</p>
                  <span className="text-sm font-semibold text-[#005F8A] shrink-0">{o.kosten}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{o.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TCO tabel */}
        <section id="tco">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            5-jaar total cost of ownership: vier modellen vergeleken
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De meest eerlijke vergelijking van heet water kraan kosten is de total cost of ownership
            (TCO) over 5 jaar: aanschaf + installatie + 5 jaar energie + 5 jaar onderhoud.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Model</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Aanschaf</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Installatie</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Energie/jr</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Onderhoud/jr</th>
                  <th className="py-2.5 px-3 font-semibold text-right">TCO 5 jaar</th>
                </tr>
              </thead>
              <tbody>
                {tcoData.map(r => (
                  <tr
                    key={r.model}
                    className={`border-b border-gray-100 ${r.highlight ? 'bg-[#E0F2FE] font-semibold' : ''}`}
                  >
                    <td className="py-2.5 px-3 text-gray-800 text-xs">
                      {r.model}
                      {r.highlight && (
                        <span className="ml-1 text-xs bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle font-normal">
                          Aanbevolen
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.aanschaf} euro</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.installatie} euro</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.energieJaar} euro</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.onderhoudJaar} euro</td>
                    <td className="py-2.5 px-3 text-right text-xs font-bold text-[#005F8A]">
                      {r.tco5jaar} euro
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            TCO = aanschaf + installatie + (energie + onderhoud) x 5. PureAqua 4-in-1 vervangt
            waterkoker (50 euro) + filterkan (150 euro) + mengkraan (200 euro) = 400 euro vervangte waarde.
            Netto TCO PureAqua inclusief vervangende apparaten: circa 975 euro.
          </p>
          {tcoData.find(r => r.notitie) && (
            <div className="bg-[#E0F2FE] rounded-xl p-4 mt-3">
              <p className="text-xs text-gray-700">
                <strong className="text-[#003F5C]">Noot PureAqua 4-in-1:</strong>{' '}
                {tcoData.find(r => r.notitie)?.notitie}
              </p>
            </div>
          )}
        </section>

        {/* CTA 1 */}
        <CTABanner context="osmose" />

        {/* Rendabel */}
        <section id="rendabel">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer is een heet water kraan rendabel?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De pure financiele terugverdientijd hangt sterk af van uw gebruik. Een waterkoker kost
            30-50 euro en 40-70 euro per jaar aan energie. Een doorstroom heater kost 150 euro aan
            aanschaf en 15-25 euro per jaar aan energie.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 mb-5">
            <p className="font-semibold text-[#003F5C] mb-3">Rekenvoorbeeld: thee voor 2 personen</p>
            <div className="space-y-1.5 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Waterkoker jaarkosten (energie + slijtage):</span>
                <span className="font-semibold">55 euro/jaar</span>
              </div>
              <div className="flex justify-between">
                <span>Doorstroom heater jaarkosten (energie + slijtage):</span>
                <span className="font-semibold">25 euro/jaar</span>
              </div>
              <div className="flex justify-between border-t border-[#005F8A]/20 pt-1.5">
                <span>Jaarlijkse besparing:</span>
                <span className="font-bold text-green-700">30 euro/jaar</span>
              </div>
              <div className="flex justify-between">
                <span>Terugverdientijd doorstroom heater (150 euro):</span>
                <span className="font-semibold">5 jaar</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Bij meer dan 3 kopjes thee per dag is de terugverdientijd korter. Het werkelijke voordeel
            van een heet water kraan is echter niet de energiebesparing maar het comfort: geen
            wachttijd, altijd de juiste temperatuur, en minder aanrechtvervuiling.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wilt u een complete vergelijking van alle modellen? Bekijk de{' '}
            <Link href="/heet-water-kraan/vergelijken" className="text-[#005F8A] underline hover:no-underline">
              heet water kraan vergelijken pagina
            </Link>{' '}
            of lees de{' '}
            <Link href="/heet-water-kraan/kopen" className="text-[#005F8A] underline hover:no-underline">
              complete koopgids
            </Link>.
          </p>
        </section>

        {/* CTA 2 */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over heet water kraan prijs en kosten
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">
                    &#9662;
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
