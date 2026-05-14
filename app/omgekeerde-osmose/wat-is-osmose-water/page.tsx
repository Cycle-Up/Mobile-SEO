import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Wat is osmose water? Werking, kwaliteit & gezondheid',
  description:
    'Wat is osmose water? Gefilterd water via een semipermeabel membraan dat 95–99% van verontreinigingen verwijdert. Lees over werking, kwaliteit, gezondheid en vergelijking met kraanwater.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/wat-is-osmose-water' },
  openGraph: {
    title: 'Wat is osmose water? Werking, kwaliteit en gezondheid uitgelegd',
    description:
      'Wat is osmose water? Gefilterd water via een semipermeabel membraan dat 95–99% van verontreinigingen verwijdert. Lees over werking, kwaliteit, gezondheid en vergelijking met kraanwater.',
    url: 'https://waterfilterplatform.nl/omgekeerde-osmose/wat-is-osmose-water',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is het TDS van osmose water?',
    answer:
      'Osmose water heeft doorgaans een TDS van 10–50 ppm. Kraanwater in Nederland heeft TDS van 200–500 ppm.',
  },
  {
    question: 'Kan ik osmose water gebruiken voor koffie en thee?',
    answer:
      'Ja. Het lage TDS en de afwezigheid van kalk geven een schonere smaak. Barista\'s gebruiken vaak osmose water als basis.',
  },
  {
    question: 'Mag ik osmose water geven aan baby\'s?',
    answer:
      'Ja, mits een remineralisatiefilter aanwezig is. Puur osmose water zonder mineralen is niet aanbevolen voor baby\'s.',
  },
  {
    question: 'Hoe verschilt osmose water van gedestilleerd water?',
    answer:
      'Beide zijn erg puur. Gedestilleerd water wordt verhit en gecondenseerd; osmose water gefilterd. Osmose water met remineralisatie is geschikter voor dagelijks gebruik.',
  },
];

const verwijderingTabel = [
  { stof: 'Kalk (calcium)', verwijdering: '99%' },
  { stof: 'Nitraten', verwijdering: '95%' },
  { stof: 'Lood', verwijdering: '99%' },
  { stof: 'PFAS', verwijdering: '>99%' },
  { stof: 'Arseen', verwijdering: '96%' },
  { stof: 'Medicijnresten', verwijdering: '95%' },
  { stof: 'Pesticiden', verwijdering: '99%' },
  { stof: 'Bacteriën', verwijdering: '99,9%' },
  { stof: 'Virussen', verwijdering: '99,9%' },
];

const vergelijkingTabel = [
  {
    type: 'Kraanwater (NL)',
    tds: '200–500 ppm',
    hardheid: '8–22 °dH',
    smaak: 'Chloor, soms kalkig',
    veiligheid: 'Veilig',
    kosten: '< €1/jaar',
    highlight: false,
  },
  {
    type: 'Osmose water',
    tds: '10–50 ppm',
    hardheid: '< 1 °dH',
    smaak: 'Neutraal, fris',
    veiligheid: 'Zeer veilig',
    kosten: '€ 70–180/jaar',
    highlight: true,
  },
  {
    type: 'Bronwater (fles)',
    tds: '100–300 ppm',
    hardheid: 'Varieert',
    smaak: 'Mineraalachtig',
    veiligheid: 'Veilig',
    kosten: '€ 400–600/jaar',
    highlight: false,
  },
];

export default function WatIsOsmoseWaterPage() {
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
          name: 'Omgekeerde osmose',
          item: 'https://waterfilterplatform.nl/omgekeerde-osmose',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Wat is osmose water',
          item: 'https://waterfilterplatform.nl/omgekeerde-osmose/wat-is-osmose-water',
        },
      ],
    },
  ];

  return (
    <>
      <SchemaOrg schema={schemaData} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:text-[#005F8A]">
              Omgekeerde osmose
            </Link>
            <span className="mx-2">/</span>
            <span>Wat is osmose water?</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Wat is osmose water? Werking, kwaliteit en gezondheid
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Osmose water is water dat via een omgekeerde osmose systeem is gefilterd. Het membraan
            heeft poriën van 0,0001 micron en houdt 95–99% van alle opgeloste stoffen tegen — van
            kalk en nitraten tot PFAS en bacteriën. Op deze pagina leggen we uit hoe dat werkt,
            wat het betekent voor kwaliteit en gezondheid, en wanneer osmose water de beste keuze
            is.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Osmose filter kopen →
            </Link>
            <Link
              href="/omgekeerde-osmose"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Hoe werkt omgekeerde osmose?
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        <QuickAnswer answer="Osmose water is gefilterd water dat door een semipermeabel membraan is geperst. Het membraan heeft poriën van 0,0001 micron en verwijdert 95–99% van alle opgeloste stoffen: kalk, nitraten, lood, PFAS en medicijnresten. Remineralisatie voegt daarna calcium en magnesium terug toe." />

        {/* Sectie 1: Hoe werkt het omgekeerde osmose proces */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe werkt het omgekeerde osmose proces?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Om osmose water te begrijpen, helpt het eerst gewone osmose te kennen. Bij{' '}
            <strong>osmose</strong> stroomt water spontaan door een semipermeabel membraan — van de
            kant met weinig opgeloste stoffen naar de kant met veel opgeloste stoffen. Planten
            gebruiken dit principe om water via hun wortels op te nemen.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Bij <strong>omgekeerde osmose</strong> keren we dit om. Door waterdruk (3–6 bar) wordt
            water in de tegengestelde richting geperst: van het geconcentreerde leidingwater naar
            de schone kant. Het membraan houdt vrijwel alles tegen wat groter is dan een
            watermolecuul.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 mb-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Schaalvergelijking poriëngrootte:</strong>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>RO-membraanporiën: <strong>0,0001 micron</strong></li>
              <li>Virussen: 0,02–0,3 micron (200–3000× groter)</li>
              <li>Bacteriën: 0,5–5 micron (5.000–50.000× groter)</li>
              <li>Menselijk haar: circa 70 micron</li>
            </ul>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Een volledig osmose systeem bestaat uit <strong>vijf filterstappen</strong> in serie:
          </p>
          <div className="space-y-4">
            {[
              {
                nr: '1',
                titel: 'Sedimentfilter',
                desc: 'Vangt zand, roest en grotere deeltjes op. Beschermt de volgende filterstappen.',
              },
              {
                nr: '2',
                titel: 'Pre-koolstofblok',
                desc: 'Absorbeert chloor en organische verbindingen die het RO-membraan zouden beschadigen.',
              },
              {
                nr: '3',
                titel: 'RO-membraan (0,0001 micron)',
                desc: 'Het hart van het systeem. Filtert op moleculair niveau: zouten, metalen, PFAS en virussen worden tegengehouden.',
              },
              {
                nr: '4',
                titel: 'Post-koolstoffilter',
                desc: 'Polijst de smaak van het eindproduct. Verwijdert eventuele restgeuren.',
              },
              {
                nr: '5',
                titel: 'Remineralisatiefilter',
                desc: 'Voegt calcium en magnesium terug toe in de juiste verhouding. Verbetert smaak en pH naar 7–8.',
              },
            ].map(s => (
              <div key={s.nr} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0">
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

        {/* Sectie 2: Wat verwijdert osmose water wél en wat niet */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat verwijdert osmose water wél en wat niet?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Omgekeerde osmose verwijdert een indrukwekkend breed spectrum aan verontreinigingen.
            Hieronder de belangrijkste stoffen met typische verwijderingspercentages voor een goed
            onderhouden 5-stadia systeem.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[360px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Stof</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Verwijdering</th>
                </tr>
              </thead>
              <tbody>
                {verwijderingTabel.map(r => (
                  <tr key={r.stof} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 text-gray-800">{r.stof}</td>
                    <td className="py-2.5 px-3 text-right text-green-700 font-semibold">
                      {r.verwijdering}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Percentages zijn typische waarden voor een goed onderhouden systeem bij Nederlands
            leidingwater. Werkelijke prestaties hangen af van membraankwaliteit, waterdruk en
            filterouderdom.
          </p>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-amber-900">Wat verwijdert osmose NIET?</strong>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Waterstof (H₂) — is al deel van het watermolecuul</li>
              <li>
                Sommige vluchtige organische stoffen (VOC) — worden deels door het pre-koolstoffilter
                afgevangen, maar niet volledig door het membraan tegengehouden
              </li>
            </ul>
            <p className="mt-2">
              Voor VOC-verwijdering is een hoogwaardig koolstofblokfilter in combinatie met RO de
              beste aanpak.
            </p>
          </div>
        </section>

        {/* Sectie 3: Is osmose water gezond */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Is osmose water gezond om te drinken?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De meest gestelde vraag over osmose water. Het korte antwoord: <strong>ja</strong>,
            osmose water is gezond — zeker als een remineralisatiefilter aanwezig is.
          </p>

          <div className="space-y-4 mb-6">
            <div className="border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Puur osmose water (zonder remineralisatie)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Mist calcium en magnesium. pH is licht zuur (circa 6,0). Voor gezonde volwassenen
                vormt dit geen gezondheidsrisico — mineralen komen via voeding ruimschoots
                beschikbaar. Smaak is neutraal tot &ldquo;leeg&rdquo;.
              </p>
            </div>
            <div className="border border-[#005F8A] bg-[#E0F2FE] rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Osmose water met remineralisatie (aanbevolen)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Vergelijkbaar met kwalitatief bronwater. pH 7–8. Calcium en magnesium zijn
                aanwezig in de juiste verhouding. Voller van smaak. Dit is de standaard bij
                hoogwaardige 5-stadia systemen.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">RIVM-standpunt:</strong> Nederlands kraanwater
            voldoet aan de wettelijke normen en is veilig om te drinken. Een osmosefilter is een
            aanvulling voor huishoudens met specifieke zorgen over hard water, PFAS of nitraten —
            niet noodzakelijk voor iedereen.
          </div>

          <p className="text-gray-700 mt-4 leading-relaxed">
            <strong>Aanbeveling:</strong> gebruik altijd een 5-stadia systeem{' '}
            <em>met</em> remineralisatiefilter. Dat geeft het beste van beide werelden: maximale
            zuiverheid met een aangenaam mineraalgehalte.
          </p>
        </section>

        {/* Sectie 4: Verschil kraanwater */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat is het verschil tussen osmose water en kraanwater?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Kraanwater in Nederland is veilig, maar bevat aanzienlijk meer opgeloste stoffen dan
            osmose water. Hieronder een directe vergelijking.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Eigenschap</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Kraanwater</th>
                  <th className="py-2.5 px-3 font-semibold text-center bg-[#005F8A]">
                    Osmose water
                  </th>
                  <th className="py-2.5 px-3 font-semibold text-center">Bronwater (fles)</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingTabel.map(r => (
                  <tr
                    key={r.type + r.tds}
                    className="border-b border-gray-100"
                  >
                    <td className="py-2.5 px-3 font-medium text-gray-700">TDS</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{vergelijkingTabel[0].tds}</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-[#005F8A] bg-[#E0F2FE]">
                      {vergelijkingTabel[1].tds}
                    </td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{vergelijkingTabel[2].tds}</td>
                  </tr>
                )).slice(0, 1)}
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3 font-medium text-gray-700">Hardheid</td>
                  <td className="py-2.5 px-3 text-center text-gray-600">{vergelijkingTabel[0].hardheid}</td>
                  <td className="py-2.5 px-3 text-center font-semibold text-[#005F8A] bg-[#E0F2FE]">
                    {vergelijkingTabel[1].hardheid}
                  </td>
                  <td className="py-2.5 px-3 text-center text-gray-600">{vergelijkingTabel[2].hardheid}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3 font-medium text-gray-700">Smaak</td>
                  <td className="py-2.5 px-3 text-center text-gray-600">{vergelijkingTabel[0].smaak}</td>
                  <td className="py-2.5 px-3 text-center font-semibold text-[#005F8A] bg-[#E0F2FE]">
                    {vergelijkingTabel[1].smaak}
                  </td>
                  <td className="py-2.5 px-3 text-center text-gray-600">{vergelijkingTabel[2].smaak}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3 font-medium text-gray-700">Veiligheid</td>
                  <td className="py-2.5 px-3 text-center text-gray-600">{vergelijkingTabel[0].veiligheid}</td>
                  <td className="py-2.5 px-3 text-center font-semibold text-[#005F8A] bg-[#E0F2FE]">
                    {vergelijkingTabel[1].veiligheid}
                  </td>
                  <td className="py-2.5 px-3 text-center text-gray-600">{vergelijkingTabel[2].veiligheid}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium text-gray-700">Kosten</td>
                  <td className="py-2.5 px-3 text-center text-gray-600">{vergelijkingTabel[0].kosten}</td>
                  <td className="py-2.5 px-3 text-center font-semibold text-[#005F8A] bg-[#E0F2FE]">
                    {vergelijkingTabel[1].kosten}
                  </td>
                  <td className="py-2.5 px-3 text-center text-gray-600">{vergelijkingTabel[2].kosten}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            TDS = Total Dissolved Solids (opgeloste stoffen in mg per liter). Kosten zijn
            gebaseerd op gemiddeld gebruik door een gezin van 4 personen.
          </p>
        </section>

        {/* Sectie 5: Wanneer is osmose water de beste keuze */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer is osmose water de beste keuze?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Osmose water is niet voor iedereen noodzakelijk, maar voor bepaalde situaties is het
            duidelijk de beste oplossing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                titel: 'Hard water (>12 °dH)',
                tekst:
                  'In grote delen van Noord-Holland, Zuid-Holland en Zeeland is het water zeer hard. Een osmosefilter verwijdert kalk effectief (99%) en beschermt je apparaten.',
              },
              {
                titel: 'PFAS-gebied',
                tekst:
                  'Omgekeerde osmose is de enige consumentenmethode die PFAS betrouwbaar verwijdert (>99%). Bijzonder relevant rondom industriegebieden en vliegbases.',
              },
              {
                titel: 'Nitraatprobleem (landbouwgebied)',
                tekst:
                  'In gebieden met intensieve landbouw kan het grondwater verhoogde nitraatwaarden bevatten. Osmose verwijdert 95% van nitraten.',
              },
              {
                titel: 'Smaakverbetering',
                tekst:
                  'Als je chloor, kalk of een metaalachtige smaak in kraanwater proeft, is osmose water een directe en merkbare verbetering. Ook uitstekend voor koffie en thee.',
              },
              {
                titel: 'Gezin met baby\'s',
                tekst:
                  'Osmose water (met remineralisatie) is veilig voor babymelk — vrij van nitraten, chloor en microplastics. Veel kinderartsen bevelen gefilterd water aan.',
              },
              {
                titel: 'Milieuvoetafdruk verkleinen',
                tekst:
                  'Overstappen van flessenwater naar osmose water scheelt 1.000–2.000 plastic flessen per jaar per gezin. Een significante milieuverbetering.',
              },
            ].map(p => (
              <div key={p.titel} className="bg-white border border-gray-100 rounded-2xl p-4">
                <p className="font-semibold text-gray-900 mb-1 text-sm">✓ {p.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{p.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Weet jij hoe hard het water is in jouw gemeente? Bekijk de actuele waarden in onze{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid-database per gemeente
            </Link>
            .
          </p>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over osmose water
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details
                key={item.question}
                className="border border-gray-100 rounded-xl p-4 group"
              >
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

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose: hoe werkt het?',
                desc: 'De complete gids over werking, voordelen en nadelen van RO-filtratie.',
              },
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Osmose filter kopen',
                desc: 'Waar let je op? NSF-certificering, stadia en prijsvergelijking.',
              },
              {
                href: '/osmose-filter',
                title: 'Osmose filter overzicht',
                desc: 'Alle typen osmosefilters uitgelegd: onderbouw, aanrecht en 4-in-1.',
              },
              {
                href: '/beste-osmosefilter-2026',
                title: 'Beste osmosefilter 2026',
                desc: 'Welk systeem scoort het hoogst op zuiverheid, prijs en gebruiksgemak?',
              },
              {
                href: '/drinkwaterkwaliteit',
                title: 'Drinkwaterkwaliteit in Nederland',
                desc: 'Wat zit er in Nederlands kraanwater en hoe verhoudt dat zich tot de normen?',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Zoek de actuele waterhardheid op voor jouw woonplaats in Nederland.',
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
