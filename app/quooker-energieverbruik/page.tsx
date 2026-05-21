import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Quooker energieverbruik: hoeveel stroom gebruikt een Quooker per jaar?',
  description:
    'Een Quooker verbruikt 10–17 Wh per uur in stand-by. Per jaar is dat €30–65 aan stroom. Vergelijking met waterkoker, insinkerator en 4-in-1 osmose kraan.',
  alternates: { canonical: 'https://waterfilterplatform.nl/quooker-energieverbruik' },
  openGraph: {
    title: 'Quooker energieverbruik: hoeveel stroom gebruikt een Quooker per jaar?',
    description:
      'Een Quooker verbruikt 10–17 Wh per uur in stand-by. Per jaar is dat €30–65 aan stroom. Vergelijking met waterkoker, insinkerator en 4-in-1 osmose kraan.',
    url: 'https://waterfilterplatform.nl/quooker-energieverbruik',
    type: 'article',
    locale: 'nl_NL',
  },
};

const faqItems = [
  {
    question: 'Hoeveel watt verbruikt een Quooker?',
    answer:
      'In stand-by verbruikt een Quooker 10–17W, afhankelijk van het model en de kwaliteit van de boilerisolatie. De PRO3 zit doorgaans aan de lagere kant (10–14W), de grotere PRO7 iets hoger (14–17W). Bij actief verwarmen — als je water tikt en de boiler aanvult — trekt de Quooker tijdelijk 2.200W. Dit duurt slechts enkele minuten per dag, dus het stand-by vermogen bepaalt grotendeels het totale jaarverbruik.',
  },
  {
    question: 'Wat kost de Quooker per jaar aan stroom?',
    answer:
      'Op basis van 10–17W stand-by vermogen verbruikt een Quooker op jaarbasis 88–149 kWh. Bij een gemiddelde stroomprijs van €0,37/kWh (2026) komt dat neer op €33–55 per jaar. Gebruik je ook de CUBE-module voor gekoeld en bruisend water, dan voeg je 5–10W toe en stijgen de kosten naar €58–88 per jaar. Met de ECO-modus actief bespaar je 20–30% op het stand-by verbruik.',
  },
  {
    question: 'Is de Quooker zuiniger dan een waterkoker?',
    answer:
      'Dat hangt af van hoe vaak je de waterkoker gebruikt. Een elektrische waterkoker verbruikt geen stroom in stand-by, maar trekt bij gebruik 2.000–3.000W gedurende 3–5 minuten. Bij 2–3 keer per dag is het jaarverbruik vergelijkbaar met een Quooker (10–18 kWh/jaar). Kook je 8 of meer keer per dag water — zoals in een groot huishouden of kantoor — dan is de Quooker efficiënter, omdat het water al op temperatuur staat en de boiler slechts aanvult.',
  },
  {
    question: 'Wat doet de ECO-stand van de Quooker?',
    answer:
      'De ECO-modus verlaagt de stand-by temperatuur van de boiler gedurende ingestelde periodes — typisch \'s nachts (23.00–07.00 uur) of tijdens afwezigheid. In ECO-modus hoeft de Quooker minder energie te verbruiken om de temperatuur te handhaven, wat resulteert in een besparing van 20–30% op het totale jaarverbruik. Na activering duurt het 5–10 minuten langer voordat het water weer volledig op 110°C is. Je stelt de ECO-modus in via de draaiknop: druk 3 seconden en volg de menu-instructies.',
  },
  {
    question: 'Hoe verhoudt de Quooker zich qua energieverbruik met een 4-in-1 kraan?',
    answer:
      'Een 4-in-1 osmose kraan heeft ook een boiler voor kokend water en verbruikt daarvoor vergelijkbaar 10–20W in stand-by. Sommige modellen met actief koelen (voor gekoeld en bruisend water) voegen 5–10W toe voor de compressor. Per saldo is het jaarlijkse energieverbruik van een 4-in-1 kraan vergelijkbaar met een Quooker PRO3 zonder CUBE: circa 88–149 kWh/jaar. Het grote verschil zit in de filterwerkzaamheid — een 4-in-1 osmose kraan filtert via een RO-membraan — niet in het energieverbruik.',
  },
  {
    question: 'Verbruikt een Quooker meer energie bij kalk?',
    answer:
      'Ja. Kalkaanslag op het verwarmingselement fungeert als thermische isolator. Elke millimeter kalkaanslag verhoogt het energieverbruik met 10–15%, omdat de Quooker meer energie moet inzetten om het water op temperatuur te houden. Bij hard water zonder ontkalking kan het jaarlijkse verbruik na 2–3 jaar 20–30% hoger liggen dan opgegeven. Regelmatig ontkalken of een osmose pre-filter houdt het verwarmingselement schoon en het verbruik op peil.',
  },
  {
    question: 'Wat is de milieu-impact van een Quooker versus flessenwater?',
    answer:
      'Een Quooker is aanzienlijk milieuvriendelijker dan dagelijks flessenwater. De productie van één liter flessenwater in plastic vereist gemiddeld 200 ml olie-equivalent aan energie en stoot 100–200g CO₂ uit per liter (inclusief transport en verpakking). Een Quooker stoot via zijn stroomverbruik circa 30–50g CO₂ per liter water dat je verwarmt — minder dan de helft. Bovendien elimineert een Quooker volledig het plastic afval van flessen. Na 3–6 maanden gebruik is de CO₂-voetafdruk van de productie terugverdiend.',
  },
  {
    question: 'Hoe maak ik mijn Quooker zuiniger?',
    answer:
      'Vijf concrete stappen om het Quooker-verbruik te verlagen: (1) Activeer de ECO-modus voor nachtelijke en weekendverlaging. (2) Stel nachtverlaging in zodat de boiler \'s nachts op lagere temperatuur staat. (3) Ontkalk regelmatig op basis van je lokale waterhardheid — elke mm kalk verhoogt het verbruik met 10–15%. (4) Overweeg een osmose pre-filter als je in een gebied met hard water woont, zodat kalkaanslag vrijwel uitblijft. (5) Zorg dat de boiler goed geïsoleerd is — bij oudere modellen kan de isolatie slechter zijn geworden.',
  },
];

const vergelijkingstabel = [
  {
    apparaat: 'Quooker PRO3',
    standby: '10–14W',
    gebruik: 'Altijd aan',
    jaarKwh: '88–123 kWh',
    jaarKosten: '€33–45',
  },
  {
    apparaat: 'Quooker PRO7',
    standby: '14–17W',
    gebruik: 'Altijd aan',
    jaarKwh: '123–149 kWh',
    jaarKosten: '€45–55',
  },
  {
    apparaat: 'Quooker + CUBE (koelen)',
    standby: '18–27W',
    gebruik: 'Altijd aan',
    jaarKwh: '158–237 kWh',
    jaarKosten: '€58–88',
  },
  {
    apparaat: 'Elektrische waterkoker',
    standby: '0W',
    gebruik: '5 min, 3×/dag',
    jaarKwh: '9–18 kWh',
    jaarKosten: '€3–7',
  },
  {
    apparaat: 'Traditionele cv-boiler warm water',
    standby: '5–10W',
    gebruik: 'Altijd aan',
    jaarKwh: '44–88 kWh',
    jaarKosten: '€16–33',
  },
];

export default function QuookerEnergieverbruikPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Quooker energieverbruik', url: 'https://waterfilterplatform.nl/quooker-energieverbruik' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Quooker energieverbruik: hoeveel stroom gebruikt een Quooker per jaar?',
          description:
            'Een Quooker verbruikt 10–17 Wh per uur in stand-by. Per jaar is dat €30–65 aan stroom. Vergelijking met waterkoker, insinkerator en 4-in-1 osmose kraan.',
          datePublished: '2026-03-25',
          url: 'https://waterfilterplatform.nl/quooker-energieverbruik',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Quooker energieverbruik</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Quooker energieverbruik: hoeveel stroom gebruikt een Quooker per jaar?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Een Quooker houdt het water continu op 110°C — ook als je er uren niets van gebruikt.
            Dat kost stroom. Maar hoeveel precies, wat betaal je op jaarbasis en hoe verhoudt zich dat tot een gewone waterkoker?
            Op deze pagina zetten we alle cijfers op een rij en laten we zien hoe je het verbruik kunt verlagen.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quooker-onderhoud"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Quooker onderhoud →
            </Link>
            <Link
              href="/quooker-kalk"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Kalk en energieverbruik
            </Link>
            <Link
              href="/4-in-1-kraan"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              4-in-1 osmose kraan
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        <QuickAnswer answer="Een Quooker verbruikt 10–17 Wh per uur in stand-by om het water op 110°C te houden. Op jaarbasis is dat 88–149 kWh, circa €30–55 bij €0,37/kWh. Vergeleken met een waterkoker die alleen water kookt als je het nodig hebt, verbruikt de Quooker meer — maar het is direct beschikbaar. ECO-modus verlaagt het verbruik met circa 30%." />

        {/* Kerngetallen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoeveel watt verbruikt een Quooker precies?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Het energieverbruik van een Quooker bestaat uit twee componenten: het constante stand-by vermogen en het kortdurende
            verwarmingsvermogen als je water tikt en de boiler aanvult. Het stand-by vermogen bepaalt veruit het grootste deel
            van het jaarverbruik.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            {[
              {
                label: 'Stand-by vermogen',
                waarde: '10–17W',
                toelichting: 'Continu verbruik om water op 110°C te houden. Afhankelijk van model en isolatiekwaliteit.',
              },
              {
                label: 'Actief verwarmen',
                waarde: '2.200W',
                toelichting: 'Tijdelijk piekverbruik wanneer de boiler aanvult na gebruik. Duurt slechts 2–5 minuten per dag.',
              },
              {
                label: 'ECO-modus besparing',
                waarde: '20–30%',
                toelichting: 'Verlaging van stand-by verbruik door nachttemperatuur te verlagen via ingestelde tijdschema\'s.',
              },
            ].map(k => (
              <div key={k.label} className="bg-[#E0F2FE] rounded-xl p-5 text-center">
                <p className="text-2xl font-bold text-[#003F5C] mb-1">{k.waarde}</p>
                <p className="font-semibold text-[#005F8A] text-sm mb-2">{k.label}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{k.toelichting}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            De isolatiekwaliteit van de boiler speelt een grote rol. Modernere Quooker-modellen (vanaf 2020) zijn beter geïsoleerd
            dan oudere apparaten en verbruiken doorgaans 15–20% minder stand-by vermogen bij gelijke inhoud.
            Kalk op het verwarmingselement verhoogt het verbruik verder — zie de sectie over kalk verderop op deze pagina.
          </p>
        </section>

        {/* Vergelijkingstabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Energieverbruik vergelijking: Quooker versus alternatieven</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Om het Quooker-verbruik in perspectief te plaatsen, vergelijken we het met een elektrische waterkoker,
            de Quooker CUBE-combinatie en een traditionele cv-boiler voor warm water.
            Alle kosten zijn berekend bij €0,37/kWh.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Apparaat</th>
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Stand-by vermogen</th>
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Gebruik per dag</th>
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Jaar kWh</th>
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Jaar kosten</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingstabel.map((r, i) => (
                  <tr key={r.apparaat} className={`border-b border-gray-100 ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-700">{r.apparaat}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.standby}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.gebruik}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.jaarKwh}</td>
                    <td className="py-2.5 px-3 font-semibold text-[#003F5C]">{r.jaarKosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Berekeningen gebaseerd op continu stand-by gebruik (8.760 uur/jaar) bij €0,37/kWh. Waterkoker: 3× 5 minuten/dag bij 2.400W.
            Cijfers zijn indicatief — werkelijk verbruik hangt af van gebruik, model en isolatie.
          </p>
        </section>

        {/* Quooker vs waterkoker */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Is de Quooker zuiniger dan een waterkoker?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Dit is een van de vaakst gestelde vragen over de Quooker. Het antwoord is genuanceerd en hangt volledig af van
            hoe vaak je dagelijks water kookt.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-[#E0F2FE] rounded-xl p-5">
              <p className="font-bold text-[#003F5C] mb-3">Quooker wint bij intensief gebruik</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Als je 8 of meer keer per dag kokend water nodig hebt — voor koffie, thee, pasta, soep, babyvoeding — is een
                Quooker efficiënter. Het water staat al op temperatuur; je hoeft alleen maar te tappen.
                Een waterkoker moet elke keer opnieuw verwarmen.
              </p>
              <p className="text-xs text-gray-500 italic">Geschat break-even: 6–8 kookbeurten per dag</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <p className="font-bold text-gray-700 mb-3">Waterkoker wint bij laag gebruik</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Gebruik je 2–3 keer per dag kokend water, dan verbruikt een waterkoker significant minder stroom
                (9–18 kWh/jaar vs. 88–149 kWh/jaar). De Quooker betaalt zichzelf energetisch pas terug bij frequent gebruik.
                De voordelen van een Quooker zijn dan meer comfort dan zuinigheid.
              </p>
              <p className="text-xs text-gray-500 italic">Waterkoker jaarkost: €3–7 vs Quooker: €33–55</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Let op: de vergelijking met de waterkoker sluit de aanschafprijs buiten beschouwing.
            Een Quooker kost €1.000–1.800 — voor uitsluitend energiebesparing is de terugverdientijd tientallen jaren.
            De waarde van een Quooker zit in gemak, kooksnelheid en de filteropties van bepaalde modellen.
            Lees meer op de pagina over <Link href="/quooker-prijs" className="text-[#005F8A] underline">Quooker prijzen en kosten</Link>.
          </p>
        </section>

        <CTABanner context="osmose" />

        {/* ECO-modus instellen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe stel ik de ECO-modus in op de Quooker?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            De ECO-modus laat de boiler \'s nachts of op ingestelde tijden op een lagere temperatuur werken.
            Dit verlaagt het stand-by vermogen en bespaart 20–30% op het jaarverbruik.
            De instelling verschilt licht per model; hieronder de algemene stappen voor de meeste Quooker-modellen.
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-5 mb-5">
            <p className="font-semibold text-[#003F5C] mb-3">ECO-modus instellen (PRO3, PRO7, Fusion)</p>
            <ol className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="bg-[#005F8A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">1</span>
                <span>Houd de hendel op de Quooker-kraan 3 seconden ingedrukt totdat het display knippert</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-[#005F8A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">2</span>
                <span>Navigeer met de draaiknop naar het ECO-menu (icoon: blad of maan, afhankelijk van model)</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-[#005F8A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">3</span>
                <span>Stel de tijden in waarop de ECO-modus actief moet zijn (bijv. 23:00–07:00)</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-[#005F8A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">4</span>
                <span>Bevestig de instelling — het display toont een bevestigingssignaal</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-[#005F8A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">5</span>
                <span>Na ECO-periode: wacht 5–10 minuten voor het water weer volledig op temperatuur is</span>
              </li>
            </ol>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Nieuwere Quooker-modellen met de Quooker-app bieden uitgebreidere ECO-schema&apos;s in te stellen via smartphone.
            Raadpleeg de handleiding van jouw specifieke model voor exacte instructies.
          </p>
        </section>

        {/* Kalk en energieverbruik */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kalkaanslag en energieverbruik: het directe verband</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Kalk is een slechte warmtegeleider. Elke millimeter kalkaanslag op het verwarmingselement van je Quooker verhoogt
            het energieverbruik met 10–15%. In regio&apos;s met hard water — veel delen van Zuid- en Oost-Nederland —
            kan dit na 2–3 jaar zonder onderhoud leiden tot een 25–40% hoger jaarverbruik dan de fabrieksspecificaties aangeven.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="border border-gray-100 rounded-xl p-5">
              <p className="font-semibold text-gray-800 mb-3">Effect van kalk op verbruik</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between border-b border-gray-100 pb-1.5">
                  <span>Geen kalk (schoon element)</span>
                  <span className="font-semibold text-[#005F8A]">100% efficiëntie</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-1.5">
                  <span>0,5 mm kalk</span>
                  <span className="font-semibold text-gray-600">+5–8%</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-1.5">
                  <span>1 mm kalk</span>
                  <span className="font-semibold text-gray-600">+10–15%</span>
                </li>
                <li className="flex justify-between">
                  <span>2+ mm kalk</span>
                  <span className="font-semibold text-red-500">+20–30%</span>
                </li>
              </ul>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <p className="font-semibold text-gray-800 mb-3">Oplossingen voor kalkvrij water</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0 font-bold">1.</span>
                  <span><strong>Regelmatig ontkalken</strong> op basis van waterhardheid (zie schema op de onderhoudspagina)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0 font-bold">2.</span>
                  <span><strong>Osmose pre-filter</strong>: verwijdert 95–99% van de kalk vóór het water de Quooker bereikt</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0 font-bold">3.</span>
                  <span><strong>Waterontkalker</strong>: ionenwisselaarsysteem dat de waterhardheid structureel verlaagt</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2">Osmose als structurele oplossing</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose systeem</Link> als pre-filter
              houdt het verwarmingselement van de Quooker permanent vrij van kalkaanslag.
              Naast energiebesparing verlengt dit ook de levensduur van het element aanzienlijk en voorkomt het storingen.
              Lees meer op de pagina over <Link href="/quooker-kalk" className="text-[#005F8A] underline">kalk in de Quooker</Link>.
            </p>
          </div>
        </section>

        {/* Milieu-vergelijking */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Quooker versus flessenwater: milieu-vergelijking</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Een veelgestelde vraag is of het milieuvriendelijker is om een Quooker te gebruiken dan flessenwater te kopen.
            De feiten zijn eenduidig: een Quooker wint ruimschoots op vrijwel alle milieucriteria.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            {[
              {
                titel: 'Plastic afval',
                quooker: 'Geen plastic afval — water rechtstreeks uit kraan',
                fles: 'Gemiddeld 156 plastic flessen per persoon per jaar in Nederland',
                winnaar: 'Quooker',
              },
              {
                titel: 'CO₂ per liter water',
                quooker: '30–50g CO₂ per liter (via stroomverbruik)',
                fles: '100–200g CO₂ per liter (transport, verpakking, productie)',
                winnaar: 'Quooker',
              },
              {
                titel: 'Transport',
                quooker: 'Geen transport nodig — water via leidingnet',
                fles: 'Vrachtwagen, distributiecentrum, supermarkt, auto naar huis',
                winnaar: 'Quooker',
              },
              {
                titel: 'Productievoetafdruk',
                quooker: 'Eenmalige productie van het apparaat (~€ en CO₂ investering)',
                fles: 'Continue productie van plastic PET-flessen en deksels',
                winnaar: 'Quooker (na 3–6 maanden gebruik terugverdiend)',
              },
            ].map(r => (
              <div key={r.titel} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-2 text-sm">{r.titel}</p>
                <div className="space-y-1.5 mb-2">
                  <p className="text-xs text-gray-600"><span className="font-semibold text-[#005F8A]">Quooker:</span> {r.quooker}</p>
                  <p className="text-xs text-gray-600"><span className="font-semibold text-gray-500">Fles:</span> {r.fles}</p>
                </div>
                <p className="text-xs font-semibold text-[#005F8A]">Winnaar: {r.winnaar}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Conclusie: een Quooker is aanzienlijk milieuvriendelijker dan structureel flessenwater kopen.
            Zelfs rekening houdend met de productie-CO₂ van het apparaat zelf, is de milieu-impact na 3–6 maanden gebruik
            lager dan bij flessenwater. De combinatie van een Quooker met een osmose pre-filter maakt leidingwater
            tevens zuiverder dan de meeste commerciële flessenmerken.
          </p>
        </section>

        {/* Tips om zuiniger te zijn */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Tips om het energieverbruik van je Quooker te verlagen</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Met een paar aanpassingen kun je het jaarlijkse stroomverbruik van je Quooker structureel verlagen — zonder in te leveren op gemak.
          </p>
          <div className="space-y-3">
            {[
              {
                tip: 'ECO-modus activeren',
                besparing: '20–30%',
                uitleg: 'Stel de ECO-tijden in voor nacht (23:00–07:00) en/of weekenddagen. Dit is de meest effectieve individuele maatregel.',
              },
              {
                tip: 'Regelmatig ontkalken',
                besparing: '10–20%',
                uitleg: 'Elke mm kalk verhoogt het verbruik met 10–15%. Ontkalk op basis van je waterhardheid — in harde waterregio\'s elk half jaar.',
              },
              {
                tip: 'Osmose pre-filter installeren',
                besparing: 'Structureel kalkaanslag voorkomen',
                uitleg: 'Met een RO-systeem vóór de Quooker is kalkaanslag vrijwel nul. Ontkalken wordt overbodig en het verbruik blijft op fabrieksspecificatie.',
              },
              {
                tip: 'Quooker volledig uitschakelen bij lange afwezigheid',
                besparing: '100% tijdens afwezigheid',
                uitleg: 'Bij vakantie of lang weekend: schakel de Quooker volledig uit. Heropwarmen duurt 10–15 minuten na terugkomst.',
              },
              {
                tip: 'Ouder model vervangen',
                besparing: '15–25% t.o.v. modellen voor 2018',
                uitleg: 'Nieuwere Quooker-modellen hebben betere boilerisolatie en verbruiken minder stand-by vermogen bij gelijke inhoud.',
              },
            ].map((t, i) => (
              <div key={t.tip} className="border border-gray-100 rounded-xl p-4 flex gap-4">
                <div className="bg-[#E0F2FE] text-[#003F5C] font-bold text-sm rounded-full w-7 h-7 flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <p className="font-semibold text-gray-800 text-sm">{t.tip}</p>
                    <span className="text-xs bg-[#E0F2FE] text-[#005F8A] font-semibold px-2 py-0.5 rounded-full">
                      Besparing: {t.besparing}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{t.uitleg}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ sectie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen: Quooker energieverbruik</h2>
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

        {/* Meer lezen */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/quooker-onderhoud', label: 'Quooker onderhoud: compleet schema' },
              { href: '/quooker-kalk', label: 'Kalk in de Quooker: oorzaken en aanpak' },
              { href: '/quooker-prijs', label: 'Quooker prijs en totale kosten 2026' },
              { href: '/4-in-1-kraan', label: '4-in-1 osmose kraan: vergelijking' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose: volledige uitleg' },
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

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/kokend-water-kraan" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Kokend water kraan</p>
              <p className="text-sm text-gray-500">Complete gids over kokend water kranen</p>
            </Link>
            <Link href="/heet-water-kraan/prijs" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Heet water kraan prijs</p>
              <p className="text-sm text-gray-500">Kosten en prijzen van heet water kranen</p>
            </Link>
            <Link href="/vergelijken/kokend-water-kraan-merken" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Kokend water kraan merken vergelijken</p>
              <p className="text-sm text-gray-500">Alle merken naast elkaar</p>
            </Link>
            <Link href="/omgekeerde-osmose" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Omgekeerde osmose</p>
              <p className="text-sm text-gray-500">Hoe werkt omgekeerde osmose filtratie?</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
