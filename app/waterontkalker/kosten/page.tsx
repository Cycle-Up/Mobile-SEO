import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterontkalker kosten: wat kost een waterontkalker per jaar?',
  description:
    'Totale kosten van een waterontkalker: aanschaf, installatie, zout, onderhoud en service. Vergelijking over 5 en 10 jaar inclusief alternatieven.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontkalker/kosten' },
  openGraph: {
    title: 'Waterontkalker kosten: wat kost een waterontkalker per jaar?',
    description:
      'Aanschaf €500-2.000, installatie €200-400, zout €180-450/jaar, onderhoud €100-200/jaar. TCO-vergelijking over 10 jaar inclusief osmose alternatief.',
    url: 'https://waterfilterplatform.nl/waterontkalker/kosten',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat kost een waterontkalker aanschaffen in 2026?',
    answer:
      'De aanschafprijs van een waterontkalker varieert van €300-500 voor budget tijdgestuurde modellen tot €1.200-2.000 voor premium twin-tank systemen. Een goed middenklasse model met vraaggestuurde regeneratie kost €700-1.200. Daarboven komen installatiekosten van €200-400 door een erkend loodgieter of waterbehandelingsbedrijf.',
  },
  {
    question: 'Hoeveel kost zout voor een waterontkalker per jaar?',
    answer:
      'Een gemiddeld gezin van 4 personen in een hard-watergebied (18 °dH) verbruikt 10-25 kg zout per maand, ofwel 120-300 kg per jaar. Tabletzout voor ontkalkers kost €0,12-0,20 per kg. Dat is €180-450 per jaar. Moderne vraaggestuurde ontkalkers zitten aan de onderkant van dit bereik; oudere tijdgestuurde modellen aan de bovenkant.',
  },
  {
    question: 'Wat zijn de jaarlijkse onderhoudskosten van een waterontkalker?',
    answer:
      'Zonder servicecontract betaalt u gemiddeld €100-200 per jaar voor jaarlijks onderhoud: reiniging van het harsvat, controle van de zouttank en preventieve vervanging van kleine onderdelen. Met een servicecontract betaalt u €80-150 per jaar inclusief storingsdienst. Grote reparaties (harsharsvervanging, ventielreparatie) kosten €200-500 en komen eens per 7-10 jaar voor.',
  },
  {
    question: 'Wat is de total cost of ownership (TCO) van een waterontkalker over 10 jaar?',
    answer:
      'Voor een middenklasse vraaggestuurde ontkalker: aanschaf €900, installatie €300, zout over 10 jaar €2.500, onderhoud over 10 jaar €1.200, water voor regeneratie €200 = totaal circa €5.100 over 10 jaar, ofwel €510 per jaar. Een premium twin-tank heeft hogere aanschafkosten maar lager zout- en onderhoud, waardoor de TCO vergelijkbaar of lager kan uitvallen.',
  },
  {
    question: 'Hoeveel extra water verbruikt een waterontkalker door regeneratie?',
    answer:
      'Elke regeneratiecyclus verbruikt 40-80 liter water (modern vraaggestuurd model) of 80-150 liter (ouder tijdgestuurd model). Bij wekelijkse regeneratie is dat 2.000-7.800 liter extra per jaar, ofwel €3-12 extra op de waterrekening (bij €1,50 per m3). Dit is een relatief kleine kostenpost maar telt mee in de TCO.',
  },
  {
    question: 'Zijn er verborgen kosten bij een waterontkalker?',
    answer:
      'Verborgen kosten zijn: (1) hogere waterrekening door regeneratiewater, (2) het natriumgehalte van water stijgt licht — sommige mensen kopen apart osmosewater voor drinken, (3) vervanging van de harskorrels na 10-15 jaar (€200-400), (4) vervanging van besturingseenheden na 8-12 jaar (€100-300), en (5) eventuele aanpassing van de waterinstallatie bij installatie (€100-300 extra). Vraag altijd naar een all-in offerte inclusief installatiemateriaal.',
  },
  {
    question: 'Is een waterontkalker goedkoper dan niets doen?',
    answer:
      'In hard-watergebieden (boven 20 °dH) kan de schade door kalk aan apparaten en leidingen aanzienlijk zijn. Een verkalkte cv-ketel verbruikt tot 15% meer energie. Een verkalkte boiler of geiser heeft een kortere levensduur. Verkalkte wasmachineonderdelen leiden tot reparaties. Studies schatten dat kalkschade in een Nederlands gezin €200-400 per jaar kost aan extra energie en versnelde slijtage. Een waterontkalker verdient zichzelf terug in 5-8 jaar in harde watergebieden.',
  },
  {
    question: 'Hoe vergelijken de kosten van een waterontkalker met omgekeerde osmose?',
    answer:
      'Een osmosefilter onder aanrecht kost €400-900 aanschaf plus €100-200 per jaar aan filters. Over 10 jaar: €1.400-2.900. Een waterontkalker kost over 10 jaar €3.000-6.000+ inclusief zout en onderhoud. Het fundamentele verschil: osmose behandelt alleen het drinkwater aan een kraan; de ontkalker onthardt al het water in huis. Voor een klein huishouden dat alleen zuiver drinkwater wil, is osmose veel goedkoper.',
  },
];

const tcoTabel = [
  {
    optie: 'Budget ontkalker (tijdgestuurd)',
    aanschaf: '€400',
    installatie: '€250',
    zoutJaar: '€360',
    onderhoudJaar: '€150',
    tco5: '€3.200',
    tco10: '€5.650',
  },
  {
    optie: 'Middenklasse (vraaggestuurd)',
    aanschaf: '€900',
    installatie: '€300',
    zoutJaar: '€270',
    onderhoudJaar: '€120',
    tco5: '€3.150',
    tco10: '€5.150',
    highlight: true,
  },
  {
    optie: 'Premium twin-tank',
    aanschaf: '€1.500',
    installatie: '€350',
    zoutJaar: '€200',
    onderhoudJaar: '€100',
    tco5: '€3.350',
    tco10: '€5.350',
  },
  {
    optie: 'Osmose 4-in-1 (drinkwater)',
    aanschaf: '€850',
    installatie: '€150',
    zoutJaar: '€0',
    onderhoudJaar: '€150',
    tco5: '€1.750',
    tco10: '€2.500',
  },
  {
    optie: 'Niets doen (kalkschade)',
    aanschaf: '€0',
    installatie: '€0',
    zoutJaar: '€0',
    onderhoudJaar: '€300 (kalkschade)',
    tco5: '€1.500 (schade)',
    tco10: '€3.000 (schade)',
  },
];

export default function WaterOntkalkerKostenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontkalker', url: 'https://waterfilterplatform.nl/waterontkalker' },
          { name: 'Kosten', url: 'https://waterfilterplatform.nl/waterontkalker/kosten' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterontkalker kosten: wat kost een waterontkalker per jaar?',
          description:
            'Totale kosten van een waterontkalker: aanschaf, installatie, zout, onderhoud en service. Vergelijking over 5 en 10 jaar inclusief alternatieven.',
          datePublished: '2026-05-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/waterontkalker/kosten',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontkalker" className="hover:text-[#005F8A]">Waterontkalker</Link>
            <span className="mx-2">/</span>
            <span>Kosten</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontkalker kosten: wat kost een waterontkalker per jaar?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            De aanschafprijs is slechts een deel van de totale kosten. Zout, water, energie en onderhoud
            bepalen de werkelijke prijs. Op deze pagina berekenen we de totale kosten over 5 en 10 jaar
            en vergelijken we met osmose en niets doen.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#tco"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Naar kostenoverzicht &rarr;
            </Link>
            <Link
              href="/waterontkalker/kopen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Koopgids 2026
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <QuickAnswer answer="Een waterontkalker kost €500-2.000 aanschaf + €200-400 installatie. Jaarlijks: €180-450 zout + €100-200 onderhoud + €10-30 energie. Totale kosten over 10 jaar: €3.000-6.000 afhankelijk van model en verbruik. Osmose is goedkoper voor alleen drinkwater. In harde watergebieden verdient een ontkalker zich terug via vermeden kalkschade." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#aanschaf" className="hover:underline">Aanschafkosten</a></li>
            <li><a href="#installatie" className="hover:underline">Installatiekosten</a></li>
            <li><a href="#zout" className="hover:underline">Jaarlijkse zoutkosten</a></li>
            <li><a href="#onderhoud" className="hover:underline">Onderhoud en service</a></li>
            <li><a href="#energie" className="hover:underline">Energieverbruik</a></li>
            <li><a href="#tco" className="hover:underline">TCO-vergelijking 10 jaar</a></li>
            <li><a href="#verborgen" className="hover:underline">Verborgen kosten</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Aanschaf */}
        <section id="aanschaf">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Aanschafkosten</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De aanschafprijs van een waterontkalker hangt af van het type (single-tank vs. twin-tank),
            het harsvolume, de regeneratiebesturing en het merk. Hieronder de drie prijsklassen.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { klasse: 'Budget', prijs: '€300-600', beschrijving: 'Tijdgestuurd, single-tank, 10-15L hars' },
              { klasse: 'Midden', prijs: '€600-1.200', beschrijving: 'Vraaggestuurd, single-tank, 15-25L hars' },
              { klasse: 'Premium', prijs: '€1.200-2.000', beschrijving: 'Twin-tank of non-elektrisch, maximale efficiëntie' },
            ].map(k => (
              <div key={k.klasse} className="bg-[#E0F2FE] rounded-xl p-3 text-center">
                <p className="text-xs text-gray-500 mb-1">{k.klasse}</p>
                <p className="text-lg font-bold text-[#003F5C]">{k.prijs}</p>
                <p className="text-xs text-gray-600 mt-1">{k.beschrijving}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Let op: aanschafprijzen zijn exclusief installatie. De installatiekosten komen er altijd
            bovenop en zijn niet te vermijden bij een systeem dat op de hoofdwaterleiding wordt aangesloten.
          </p>
        </section>

        {/* Installatie */}
        <section id="installatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Installatiekosten</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Installatie door een erkend loodgieter of waterbehandelingsbedrijf kost €200-400 voor een
            standaard situatie. Dit omvat:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside mb-4">
            <li>Aansluiting op de hoofdleiding (inclusief bypass en afsluiters)</li>
            <li>Aanleg van de afvoer voor regeneratiewater</li>
            <li>Plaatsing en waterpas stellen van het apparaat</li>
            <li>Instellen van de bedieningseenheid (waterhardheid, regeneratietijd)</li>
            <li>Eerste inbedrijfstelling en controle op lekkage</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Bijkomende kosten bij complexe installaties: extra koperwerk (€50-150), beugels en ophangmateriaal
            (€20-50), aanpassing van de afvoer (€50-150). Vraag altijd een vaste offerte vooraf.
          </p>
        </section>

        {/* Zout */}
        <section id="zout">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Jaarlijkse zoutkosten</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Zout is de grootste jaarlijkse variabele kostenpost. Het verbruik hangt af van de
            waterhardheid, het dagelijks waterverbruik en het type regeneratiebesturing.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Situatie</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Kg/maand</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Kg/jaar</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Kosten/jaar</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1-2 pers, matig hard (12 °dH), vraaggestuurd', '5-8', '60-96', '€9-19'],
                  ['3-4 pers, hard (18 °dH), vraaggestuurd', '10-16', '120-192', '€18-38'],
                  ['3-4 pers, hard (18 °dH), tijdgestuurd', '18-28', '216-336', '€32-67'],
                  ['5+ pers, zeer hard (22 °dH), vraaggestuurd', '16-25', '192-300', '€29-60'],
                  ['5+ pers, zeer hard (22 °dH), tijdgestuurd', '25-35', '300-420', '€45-84'],
                ].map(([s, m, j, k], i) => (
                  <tr key={s} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white border-b border-gray-100'}>
                    <td className="py-2.5 px-3 text-gray-700">{s}</td>
                    <td className="py-2.5 px-3 text-right text-gray-600">{m}</td>
                    <td className="py-2.5 px-3 text-right text-gray-600">{j}</td>
                    <td className="py-2.5 px-3 text-right font-medium text-[#005F8A]">{k}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">
            Berekend op basis van tabletzout a €0,15 per kg (groenzout, 25 kg-zak). Prijzen kunnen
            variëren per leverancier.
          </p>
        </section>

        {/* Onderhoud */}
        <section id="onderhoud">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderhoud en servicekosten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800 mb-2">Zonder servicecontract</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>Jaarlijkse inspectie: €80-150</li>
                <li>Harsharsreiniging: €50-100 (2-3 jaar)</li>
                <li>Ventielreparatie: €100-250 (eens per 7-10 jr)</li>
                <li>Harsvervanging: €200-400 (na 12-15 jr)</li>
                <li><strong>Gemiddeld per jaar: €100-200</strong></li>
              </ul>
            </div>
            <div className="border border-[#005F8A]/30 bg-[#E0F2FE] rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2">Met servicecontract</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>Jaarlijks onderhoud inclusief</li>
                <li>Storingsdienst inclusief</li>
                <li>Kleine onderdelen inbegrepen</li>
                <li>Rapportage waterverbruik</li>
                <li><strong>Kosten: €80-150 per jaar</strong></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Energie */}
        <section id="energie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Energieverbruik en -kosten</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Elektrische waterontkalkers verbruiken 5-15 W in standby. Op jaarbasis is dat 44-130 kWh,
            ofwel €10-30 per jaar aan elektriciteitskosten (bij €0,23 per kWh). Dit is een kleine
            kostenpost in vergelijking met zout en onderhoud. Non-elektrische systemen (Kinetico) hebben
            nul energieverbruik.
          </p>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
            <p className="font-semibold text-amber-900 mb-1">Indirecte energiebesparing</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Een cv-ketel met kalklaag van 1 mm verbruikt 7-10% meer energie. Bij 3 mm kalk loopt
              dit op tot 15-20% extra gasverbruik. Een waterontkalker voorkomt deze verkalk en
              bespaart zo indirect €50-150 per jaar aan stookkosten voor een gemiddeld gezin.
            </p>
          </div>
        </section>

        {/* TCO tabel */}
        <section id="tco">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Kostenvergelijking over 5 en 10 jaar
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hieronder de totale kosten (TCO) voor een gezin van 4 personen in een hard-watergebied
            (18 °dH), waterverbruik 500 liter per dag.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[600px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Optie</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Aanschaf</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Installatie</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Zout/jaar</th>
                  <th className="py-2.5 px-3 font-semibold text-right">TCO 5 jr</th>
                  <th className="py-2.5 px-3 font-semibold text-right">TCO 10 jr</th>
                </tr>
              </thead>
              <tbody>
                {tcoTabel.map((r, i) => (
                  <tr
                    key={r.optie}
                    className={`border-b border-gray-100 ${r.highlight ? 'bg-[#E0F2FE] font-medium' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="py-2.5 px-3">{r.optie}</td>
                    <td className="py-2.5 px-3 text-right">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-right">{r.installatie}</td>
                    <td className="py-2.5 px-3 text-right">{r.zoutJaar}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A]">{r.tco5}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A]">{r.tco10}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-4">
            Indicatieve cijfers. Onderhoud inbegrepen in TCO (€120/jr). Zout aan €0,15/kg. Kalkschade
            bij &quot;niets doen&quot; is een schatting van energiemeerkosten en apparaatschade.
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Conclusie:</strong> Een middenklasse vraaggestuurde
            ontkalker heeft de laagste TCO van alle ontkalkertypen. Een osmosefilter is significant
            goedkoper maar behandelt alleen drinkwater. Niets doen lijkt goedkoop maar leidt op
            termijn tot hogere energie- en reparatiekosten door kalkschade.
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* Verborgen kosten */}
        <section id="verborgen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verborgen kosten om op te letten</h2>
          <div className="space-y-3">
            {[
              {
                titel: 'Extra waterverbruik door regeneratie',
                tekst: '40-80 liter per cyclus bij moderne systemen. Bij wekelijkse regeneratie: 2.000-4.000 liter per jaar extra. Kosten: €3-6 per jaar — verwaarloosbaar, maar het telt.',
              },
              {
                titel: 'Hogere waterrekening algemeen',
                tekst: 'Zachter water kan leiden tot meer douchen (aangenamer gevoel), maar ook tot minder gebruik van wasmiddelen en zeep. Per saldo is het effect op het waterverbruik beperkt.',
              },
              {
                titel: 'Harsvervanging na 12-15 jaar',
                tekst: 'Ionenuitwisselingshars heeft een levensduur van 10-15 jaar. Vervanging kost €200-400 inclusief arbeid. Vraag bij aankoop of de hars vervangbaar is en wat de kosten zijn.',
              },
              {
                titel: 'Vervanging besturingseenheid',
                tekst: 'De elektronica en het besturingsventiel hebben een levensduur van 8-12 jaar. Vervanging kost €100-300. Premium merken bieden langere garantie op deze componenten.',
              },
              {
                titel: 'Aanpassingen aan de waterinstallatie bij installatie',
                tekst: 'Afhankelijk van de staat van uw leidingwerk kan de installateur extra koperwerk, afsluiters of drukregelaars moeten aanleggen. Begroting: €50-250 extra bovenop de standaard installatieprijs.',
              },
            ].map(v => (
              <div key={v.titel} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{v.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{v.tekst}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meer lezen */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterontkalker', label: 'Waterontkalker overzicht' },
              { href: '/waterontkalker/kopen', label: 'Koopgids waterontkalker 2026' },
              { href: '/waterontkalker/vergelijken', label: 'Modellen vergelijken' },
              { href: '/waterontkalker/werking', label: 'Hoe werkt een waterontkalker?' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose filter' },
              { href: '/waterhardheid', label: 'Waterhardheid per gemeente' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>&rarr;</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over waterontkalker kosten
          </h2>
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

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/waterontharder/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Hoe werkt een waterontharder?</h3>
            <p className="text-sm text-gray-600">Begrijp het principe achter ontharders voordat je een beslissing neemt over de aanschaf.</p>
          </Link>
          <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling uitgelegd</h3>
            <p className="text-sm text-gray-600">De techniek achter waterontharders en waterontkalkers stap voor stap uitgelegd.</p>
          </Link>
          <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in water</h3>
            <p className="text-sm text-gray-600">Wat zijn de werkelijke kosten van kalk voor apparaten, leidingen en energieverbruik?</p>
          </Link>
          <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp hard water</h3>
            <p className="text-sm text-gray-600">Vergelijk opties op kosten, onderhoud en effectiviteit voor jouw situatie.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" variant="compact" />

      </div>
    </>
  );
}
