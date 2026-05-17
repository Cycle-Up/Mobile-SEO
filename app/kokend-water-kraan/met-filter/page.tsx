import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kokend water kraan met filter: wat zijn de opties?',
  description:
    'Kokend water kraan met filter: vergelijk koolstoffilter, osmosefilter en 4-in-1 systemen. Wat verwijdert elk filter? Prijzen van €300 tot €900.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/met-filter' },
  openGraph: {
    title: 'Kokend water kraan met filter — vergelijking & koopgids 2026',
    description:
      'Kokend water kraan met filter: vergelijk koolstoffilter, osmosefilter en 4-in-1 systemen. Wat verwijdert elk filter? Prijzen van €300 tot €900.',
    url: 'https://waterfilterplatform.nl/kokend-water-kraan/met-filter',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Verwijdert een kokend water kraan met filter ook kalk?',
    answer:
      'Alleen als het systeem een osmosefilter of ionenwisselaar bevat. Een standaard koolstoffilter verbetert de smaak maar verwijdert geen kalk.',
  },
  {
    question: 'Hoe lang gaat het filter van een kokend water kraan mee?',
    answer:
      'Koolstoffilters worden elk 6–12 maanden vervangen. RO-membranen gaan 2–3 jaar mee.',
  },
  {
    question: 'Kan ik een bestaande kokend water kraan uitbreiden met een filter?',
    answer:
      'Ja, je kunt een los onderbouw osmosefilter of koolstoffilter inline plaatsen op de koude watertoevoer van de boiler.',
  },
  {
    question: 'Is het filterwater ook bruikbaar voor koffie en thee?',
    answer:
      'Ja, gefilterd water (zeker osmose) geeft een merkbaar betere smaak bij koffie en thee door de afwezigheid van chloor en kalk.',
  },
];

const filterTypesTabel = [
  {
    type: 'Koolstoffilter',
    verwijdert: 'Chloor, geurstoffen, organische stoffen',
    jaarkostenFilter: '€ 30–60',
    hardWater: 'Nee',
    highlight: false,
  },
  {
    type: 'Koolstof + ionenwisselaar',
    verwijdert: 'Chloor, geurstoffen, deels kalk',
    jaarkostenFilter: '€ 40–80',
    hardWater: 'Gedeeltelijk',
    highlight: false,
  },
  {
    type: 'Omgekeerde osmose (RO)',
    verwijdert: 'Kalk, chloor, nitraten, PFAS, lood — 95–99% van alles',
    jaarkostenFilter: '€ 70–100',
    hardWater: 'Ja',
    highlight: true,
  },
];

const prijsCategorieen = [
  {
    label: 'Koolstoffilter variant',
    aanschaf: '€ 300–500',
    filterJaar: '€ 30–60',
    energie: '€ 30–50',
    totaal5jr: '€ 600–1.050',
    highlight: false,
  },
  {
    label: 'Koolstof + ionenwisselaar',
    aanschaf: '€ 450–650',
    filterJaar: '€ 40–80',
    energie: '€ 30–55',
    totaal5jr: '€ 800–1.325',
    highlight: false,
  },
  {
    label: '4-in-1 met osmose',
    aanschaf: '€ 699–899',
    filterJaar: '€ 70–100',
    energie: '€ 40–60',
    totaal5jr: '€ 1.049–1.479',
    highlight: true,
  },
];

const schemaData = [
  {
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  },
  {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Kokend water kraan',
        item: 'https://waterfilterplatform.nl/kokend-water-kraan',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Met filter',
        item: 'https://waterfilterplatform.nl/kokend-water-kraan/met-filter',
      },
    ],
  },
];

export default function KokendWaterKraanMetFilterPage() {
  return (
    <>
      <SchemaOrg schema={schemaData} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:text-[#005F8A]">Kokend water kraan</Link>
            <span className="mx-2">/</span>
            <span>Met filter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan met filter: wat zijn de opties?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een <strong>kokend water kraan met filter</strong> geeft direct heet water én zorgt voor
            schoon, gefilterd drinkwater uit dezelfde kraan. Op deze pagina vergelijken we de drie
            filtertypen — koolstof, ionenwisselaar en omgekeerde osmose — op zuiveringsprestaties,
            jaarkosten en geschiktheid voor hard water in Nederland.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kokend-water-kraan/vergelijken"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Vergelijk modellen →
            </Link>
            <Link
              href="/4-in-1-kraan"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              4-in-1 kraan met osmose
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <QuickAnswer answer="Een kokend water kraan met filter geeft direct heet water én filtert kalk, chloor en verontreinigingen. De meest complete optie is een 4-in-1 systeem met ingebouwd osmosefilter (€699–899): verwijdert 99% inclusief kalk, PFAS en nitraten. Goedkopere koolstoffilter-varianten (€300–500) verbeteren smaak maar verwijderen geen kalk." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">
            Op deze pagina
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#filtertypen" className="hover:underline">Welke filtertypen zijn er?</a></li>
            <li><a href="#verschil" className="hover:underline">Koolstof vs osmosefilter</a></li>
            <li><a href="#keuze" className="hover:underline">Welk systeem past bij uw situatie?</a></li>
            <li><a href="#kosten" className="hover:underline">Wat kost het per jaar?</a></li>
            <li><a href="#installatie" className="hover:underline">Hoe wordt het geïnstalleerd?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* H2: Filtertypen */}
        <section id="filtertypen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welke filtertypen zijn er bij een kokend water kraan?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Fabrikanten bieden drie filterprincipes aan. Ze verschillen sterk in wat ze verwijderen
            en of ze kalk aanpakken — het voornaamste probleem in gebieden met hard water in Nederland.
          </p>

          <div className="space-y-4 mb-6">
            <div className="border border-gray-100 rounded-2xl p-5 bg-white">
              <h3 className="font-bold text-gray-900 mb-2">Koolstoffilter (actief koolstof)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Werkt via adsorptie: chloor, geurstoffen en organische verbindingen hechten aan de
                poreuze koolstofkorrels. Het water smaakt merkbaar beter en ruikt minder naar chloor.
                Koolstoffilters verwijderen <strong>geen</strong> opgeloste mineralen, dus ook geen
                kalk, nitraten, PFAS of zware metalen.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-5 bg-white">
              <h3 className="font-bold text-gray-900 mb-2">Koolstof + ionenwisselaar</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Combineert koolstoffiltratie met een ionenwisselhars die calcium en magnesium
                gedeeltelijk vervangt door natrium of kalium. Dit verlaagt de hardheid, maar
                verwijdert geen nitraten, PFAS of lood. Bij sterk hard water (boven 20°dH) is de
                effectiviteit beperkt zonder regelmatig regenereren van de hars.
              </p>
            </div>
            <div className="border-2 border-[#005F8A] rounded-2xl p-5 bg-[#E0F2FE]">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-gray-900">Omgekeerde osmose (RO)</h3>
                <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full shrink-0">
                  Meest compleet
                </span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Een semi-permeabel membraan met poriën van 0,0001 micron filtert 95–99% van alle
                opgeloste stoffen. Dit omvat kalk (calcium, magnesium), chloor, nitraten, PFAS,
                lood en microplastics. Een 4-in-1 kraan met ingebouwd osmosesysteem combineert dit
                met directe levering van kokend, koud gefilterd, warm gefilterd en bruisend water.
              </p>
            </div>
          </div>

          {/* Vergelijkingstabel */}
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Filtertype</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Wat het verwijdert</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Filter/jaar</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Hard water?</th>
                </tr>
              </thead>
              <tbody>
                {filterTypesTabel.map(r => (
                  <tr
                    key={r.type}
                    className={r.highlight ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 text-sm font-medium">{r.type}</td>
                    <td className="py-2.5 px-3 text-xs text-gray-700">{r.verwijdert}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.jaarkostenFilter}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.hardWater}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* H2: Verschil koolstof vs osmose */}
        <section id="verschil">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat is het verschil tussen een kokend water kraan met koolstoffilter en osmosefilter?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De keuze tussen koolstoffilter en osmosefilter hangt grotendeels af van de waterhardheid
            in uw gemeente en het type verontreinigingen dat u wilt aanpakken.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="border border-gray-100 rounded-2xl p-5 bg-white">
              <p className="font-bold text-gray-900 mb-3 text-sm">Koolstoffilter</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                  Verbetert smaak en geur significant
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                  Lage aanschafprijs (€300–500)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                  Lage filterkosten (€30–60/jaar)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0 mt-0.5">✗</span>
                  Verwijdert geen kalk
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0 mt-0.5">✗</span>
                  Geen bescherming tegen PFAS, nitraten of lood
                </li>
              </ul>
            </div>
            <div className="border-2 border-[#005F8A] rounded-2xl p-5 bg-[#E0F2FE]">
              <p className="font-bold text-gray-900 mb-3 text-sm">Osmosefilter (4-in-1)</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                  Volledige zuivering, ook kalk
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                  Verwijdert PFAS, nitraten en lood
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                  Geen kalkafzetting in boiler of kraan
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 shrink-0 mt-0.5">~</span>
                  Hogere aanschafprijs (€699–899)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 shrink-0 mt-0.5">~</span>
                  Filterkosten €70–100/jaar
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Keuzehulp op basis van waterhardheid:</strong>
            <ul className="mt-2 space-y-1">
              <li>
                <strong>Zacht water (&lt;8°dH)</strong> — koolstoffilter volstaat voor smaakverbetering.
                Bekijk de{' '}
                <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
                  waterhardheid per gemeente
                </Link>{' '}
                om de hardheid bij u in de buurt te checken.
              </li>
              <li>
                <strong>Hard water (&gt;10°dH)</strong> — osmosefilter is de enige oplossing die kalk
                volledig verwijdert en kalkafzetting in de boiler en kraan voorkomt.
              </li>
            </ul>
          </div>
        </section>

        {/* H2: Keuze per situatie */}
        <section id="keuze">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welke kokend water kraan met filter past bij uw situatie?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Er is geen universeel beste keuze. Hieronder de aanbeveling per veelvoorkomende situatie:
          </p>
          <div className="space-y-3">
            {[
              {
                situatie: 'Hard water + wil maximale zuivering',
                keuze: '4-in-1 met osmose (€699–899)',
                reden:
                  'Verwijdert kalk, PFAS, nitraten en chloor volledig. Voorkomt kalkafzetting in boiler en kraanuitloop.',
              },
              {
                situatie: 'Zacht water + alleen smaakverbetering',
                keuze: 'Koolstoffilter variant (€300–500)',
                reden:
                  'Voldoende voor chloor- en geurverwijdering. Lagere aanschaf- en filterkosten.',
              },
              {
                situatie: 'Huurwoning',
                keuze: 'Vraag toestemming verhuurder',
                reden:
                  'Voor elke combi-kraan is een gat (30 mm) in het aanrecht nodig. Bij een aanrechtmodel is installatie soms te omzeilen via een inline filter op de bestaande kraan.',
              },
              {
                situatie: 'Klein budget',
                keuze: 'Los osmosefilter + bestaande kokend water kraan',
                reden:
                  'Een standalone onderbouw osmosefilter (€150–300) kan inline worden geplaatst op de koude watertoevoer van een bestaande kokend water kraan.',
              },
            ].map(a => (
              <div
                key={a.situatie}
                className="flex gap-4 items-start border border-gray-100 rounded-xl p-4 bg-white"
              >
                <div className="shrink-0">
                  <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                    Situatie
                  </span>
                  <span className="block text-sm font-bold text-gray-900">{a.situatie}</span>
                </div>
                <div className="w-px bg-gray-100 self-stretch shrink-0" />
                <div>
                  <span className="inline-block text-xs font-semibold bg-[#005F8A] text-white px-2 py-0.5 rounded-full mb-1.5">
                    {a.keuze}
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed">{a.reden}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* H2: Kosten */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat kost een kokend water kraan met filter per jaar?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De totale kosten bestaan uit aanschaf, jaarlijks filteronderhoud en energieverbruik van
            de boiler. Hieronder een overzicht per categorie en een 5-jaarsraming.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-5">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Categorie</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Aanschaf</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Filter/jaar</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Energie/jaar</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Totaal 5 jr</th>
                </tr>
              </thead>
              <tbody>
                {prijsCategorieen.map(r => (
                  <tr
                    key={r.label}
                    className={r.highlight ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 text-sm">{r.label}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.filterJaar}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.energie}</td>
                    <td className="py-2.5 px-3 text-right text-xs font-semibold">{r.totaal5jr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5 text-sm text-gray-700 space-y-2">
            <p>
              <strong className="text-[#003F5C]">Boiler energieverbruik:</strong> De boiler verbruikt
              ca. 200W bij gebruik en 5W in standby. Bij normaal gebruik (8–12 kopjes per dag) bedragen
              de jaarlijkse energiekosten €30–60 afhankelijk van uw energietarief.
            </p>
            <p>
              <strong className="text-[#003F5C]">Vergelijking flessenwater:</strong> Een gezin van
              4 dat uitsluitend flessenwater koopt, betaalt gemiddeld €600 per jaar. Zelfs de duurste
              4-in-1 kraan met osmose is over 5 jaar goedkoper.
            </p>
          </div>
        </section>

        {/* H2: Installatie */}
        <section id="installatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe wordt een kokend water kraan met filter geïnstalleerd?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Installatie van een combi-kokend water kraan met filter verschilt van een gewone keukenkraan.
            Hieronder de stappen en aandachtspunten:
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                nr: '1',
                stap: 'Kraantje boren in aanrecht',
                desc: 'Voor een combi-kraan is een gat van 30 mm nodig. Bij granieten of composiet aanrechten is een diamantboor vereist. Controleer of er ruimte is voor de boiler (ca. 30×20×20 cm) in het kastje eronder.',
              },
              {
                nr: '2',
                stap: 'Aansluiting op koud- en warmwaterleiding',
                desc: 'De kraan krijgt zowel een koud- als warmwateraansluiting. Koud water gaat eerst door het filter, warm water wordt direct aangesloten. Gebruik de meegeleverde push-fit koppelingen.',
              },
              {
                nr: '3',
                stap: 'Boiler onder aanrecht plaatsen',
                desc: 'De boiler (3–5 kg, ca. 30×20×20 cm) wordt in het kastje geplaatst en aangesloten op het stroomnet (geaard stopcontact). Zorg voor minimaal 5 cm vrije ruimte rondom voor ventilatie.',
              },
              {
                nr: '4',
                stap: 'Osmosefilter aansluiten (bij 4-in-1)',
                desc: 'Bij een 4-in-1 systeem met osmose wordt het filtermodule inline geplaatst op de koude watertoevoer. Een extra afvoerslang van het concentraat (spoelwater) wordt op de sifon aangesloten.',
              },
              {
                nr: '5',
                stap: 'Systeem testen en eerste spoelcyclus',
                desc: 'Zet de watertoevoer open en controleer alle koppelingen op lekkage. Laat 2–3 liter doorlopen (eerste spoelcyclus). Gooi dit water weg. Het systeem is klaar voor gebruik.',
              },
            ].map(s => (
              <div key={s.nr} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {s.nr}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{s.stap}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-amber-900">Loodgieter aanbevolen:</strong> Vanwege de dubbele
            wateraansluiting (koud én warm) en de stroomaansluiting van de boiler is installatie
            door een loodgieter aanbevolen. Kosten eenmalig: €80–150. Dit voorkomt lekkage en
            bewaart de garantie van de fabrikant.
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="kokend" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over een kokend water kraan met filter
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

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/kokend-water-kraan',
                title: 'Kokend water kraan — complete gids',
                desc: 'Werking, types, merken en wat te letten bij de aankoop.',
              },
              {
                href: '/kokend-water-kraan/vergelijken',
                title: 'Kokend water kraan vergelijken',
                desc: 'Alle modellen naast elkaar op prijs, capaciteit en filteropties.',
              },
              {
                href: '/4-in-1-kraan',
                title: '4-in-1 kraan met osmose',
                desc: 'Kokend, koud, warm en bruisend — allemaal gefilterd uit één kraan.',
              },
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Osmose filter kopen',
                desc: 'Vergelijk onderbouwsystemen op prijs, capaciteit en filterkosten.',
              },
              {
                href: '/beste-kokend-water-kraan-2026',
                title: 'Beste kokend water kraan 2026',
                desc: 'De best beoordeelde modellen vergeleken op basis van gebruikerservaringen.',
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
      </div>
    </>
  );
}
