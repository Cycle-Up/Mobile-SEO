import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Omgekeerde osmose filter kopen? Alles wat je moet weten',
  description:
    'Omgekeerde osmose filter kopen? Lees wat de beste keuze is: NSF-gecertificeerd, 5-stadia, 1:1 afvalwaterratio. Vergelijk prijzen van €150 tot €500 en leer.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/kopen' },
  openGraph: {
    title: 'Omgekeerde osmose filter kopen — complete koopgids 2026',
    description:
      'Omgekeerde osmose filter kopen? Lees wat de beste keuze is: NSF-gecertificeerd, 5-stadia, 1:1 afvalwaterratio. Vergelijk prijzen van €150 tot €500 en leer.',
    url: 'https://waterfilterplatform.nl/omgekeerde-osmose/kopen',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is het verschil tussen 4-traps en 5-traps osmose?',
    answer:
      '5-traps heeft een remineralisatiefilter dat calcium en magnesium terugvoegt voor betere smaak en gezondheid.',
  },
  {
    question: 'Hoe lang gaat een osmosefilter mee?',
    answer:
      'Membraan 2–3 jaar, sediment- en koolstoffilters 6–12 maanden, afhankelijk van watergebruik en waterhardheid.',
  },
  {
    question: 'Kan ik een osmosefilter zelf installeren?',
    answer:
      'Ja, de meeste systemen worden geleverd met instructies. Installatie duurt 2–4 uur. Enige vereiste is een aansluiting op de koudwaterkraan en een afvoer.',
  },
  {
    question: 'Is osmose water gezond om te drinken?',
    answer:
      'Ja. Remineralisatie voegt calcium en magnesium terug toe. Puur osmose water (zonder remineralisatie) mist mineralen maar is niet schadelijk voor gezonde volwassenen.',
  },
];

const prijsTabel = [
  {
    type: 'Basis onderbouw',
    prijs: '€ 150–250',
    stadia: '4-stadia',
    kenmerken: 'Sediment, pre-kool, RO-membraan, post-kool',
    highlight: false,
  },
  {
    type: 'Mid-range',
    prijs: '€ 250–350',
    stadia: '5-stadia',
    kenmerken: 'Incl. remineralisatie, boostpomp, 1:1 ratio',
    highlight: true,
  },
  {
    type: 'Premium',
    prijs: '€ 350–500',
    stadia: '5-stadia+',
    kenmerken: 'Wifi-monitoring, hogere capaciteit, compact design',
    highlight: false,
  },
];

export default function OsmoseKopenPage() {
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
        { '@type': 'ListItem', position: 2, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
        { '@type': 'ListItem', position: 3, name: 'Filter kopen', item: 'https://waterfilterplatform.nl/omgekeerde-osmose/kopen' },
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
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:text-[#005F8A]">Omgekeerde osmose</Link>
            <span className="mx-2">/</span>
            <span>Filter kopen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Omgekeerde osmose filter kopen — complete koopgids 2026
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Wil je een omgekeerde osmose filter kopen? Dan wil je de juiste keuze maken: het
            juiste certificaat, het juiste aantal filterstappen en een eerlijke prijs-kwaliteitverhouding.
            Deze gids vertelt je precies waar je op moet letten.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/vergelijken"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Osmose filters vergelijken →
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
        <QuickAnswer answer="Een omgekeerde osmose filter kopen? Let op NSF/ANSI 58-certificering, een afvalwaterratio van minimaal 1:1 en een 5-stadia systeem met remineralisatiefilter. Prijzen lopen van €150 (basis onderbouw) tot €500 (premium met wifi-monitoring). Jaarlijks filteronderhoud kost €50–120." />

        {/* Sectie 1 */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waar moet je op letten bij het kopen van een osmosefilter?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            De markt voor omgekeerde osmose filters is groot en onoverzichtelijk. Door te focussen
            op vijf kernpunten filter je snel de goede systemen van de slechte.
          </p>

          <div className="space-y-5">
            {/* NSF certificering */}
            <div className="border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">NSF/ANSI 58-certificering</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                NSF/ANSI 58 is de internationale norm voor omgekeerde osmose systemen voor
                drinkwater. Een gecertificeerd systeem is onafhankelijk getest op de verwijdering
                van lood, arseen, PFAS en nitraten. Koop <strong>nooit</strong> een filter zonder
                deze certificering — of een gelijkwaardige NSF/ANSI 42 of 53.
              </p>
            </div>

            {/* 5-stadia */}
            <div className="border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">5-stadia systeem met remineralisatie</h3>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                Een kwalitatief osmosefilter heeft minimaal vijf filterstappen. Elk stadium heeft
                een specifieke rol:
              </p>
              <ol className="space-y-1.5 text-sm text-gray-700 list-decimal list-inside">
                <li><strong>Sedimentfilter</strong> — vangt zand, roest en slib</li>
                <li><strong>Koolstofblok (pre)</strong> — verwijdert chloor, beschermt het membraan</li>
                <li><strong>RO-membraan</strong> — filtert op moleculair niveau (0,0001 micron)</li>
                <li><strong>Post-koolstof</strong> — polijst de smaak</li>
                <li><strong>Remineralisatiefilter</strong> — voegt calcium en magnesium terug toe</li>
              </ol>
            </div>

            {/* Afvalwaterratio */}
            <div className="border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Afvalwaterratio: 1:1 is de norm</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Goedkope systemen verspillen 2 tot 5 liter water per liter schoon water. Een
                moderne boostpomp brengt de ratio naar 1:1 — voor elke liter drinkwater gaat er
                één liter afvalwater naar de afvoer. Een ratio van 2:1 of hoger is onnodig
                verspillend.
              </p>
            </div>

            {/* Debiet */}
            <div className="border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Debiet: minimaal 150 liter per dag</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Een gezin van vier personen gebruikt gemiddeld 8–12 liter drinkwater per dag. Het
                systeem moet dit comfortabel aan kunnen — reken met minimaal 150 liter per dag
                capaciteit. Systemen met een drukvat als buffer zorgen voor directe waterlevering
                ook al filtert het membraan langzaam.
              </p>
            </div>

            {/* Filterlevensduur */}
            <div className="border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Filterlevensduur</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Het RO-membraan gaat <strong>2–3 jaar</strong> mee. De sediment- en
                koolstoffilters vervan je elke <strong>6–12 maanden</strong>. Bij hard water of
                hoog verbruik zijn kortere intervallen realistisch. Controleer voor aankoop wat
                vervangende filters kosten — sommige merken rekenen veel te hoge prijzen voor
                patronen.
              </p>
            </div>
          </div>
        </section>

        {/* Sectie 2 */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoeveel kost een omgekeerde osmose filter?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De aanschafprijs is slechts een deel van de totale kosten. Reken ook installatie en
            jaarlijks filteronderhoud mee.
          </p>

          {/* Prijs tabel */}
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Prijs</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Stadia</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Kenmerken</th>
                </tr>
              </thead>
              <tbody>
                {prijsTabel.map(r => (
                  <tr
                    key={r.type}
                    className={r.highlight ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3">{r.type}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A]">{r.prijs}</td>
                    <td className="py-2.5 px-3 text-right">{r.stadia}</td>
                    <td className="py-2.5 px-3 text-xs text-gray-600">{r.kenmerken}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-800 text-sm mb-1">Installatie</p>
              <p className="text-sm text-gray-600">
                Zelf installeren: €0, circa 2–4 uur. Loodgieter inschakelen: €80–150.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-800 text-sm mb-1">Filteronderhoud</p>
              <p className="text-sm text-gray-600">
                €50–120 per jaar afhankelijk van systeem en watergebruik.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-800 text-sm mb-1">Totaal 5 jaar</p>
              <p className="text-sm text-gray-600">
                €400–900 afhankelijk van type en onderhoud.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            Ter vergelijking: een gezin dat dagelijks flessenwater drinkt geeft al snel €400–600
            per jaar uit. Een osmosefilter verdient zichzelf terug in 2–3 jaar.
          </p>
        </section>

        {/* Sectie 3 */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welke typen osmosefilters zijn er?
          </h2>
          <div className="space-y-4">
            <div className="rounded-2xl border border-[#005F8A] bg-[#E0F2FE] p-5">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-gray-900">Onderbouw (meest populair)</h3>
                <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full shrink-0">Aanbevolen</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Past compact onder het aanrecht. Er komt een aparte osmose kraan op het aanrecht.
                Dit type biedt de beste prijs-kwaliteitverhouding en is eenvoudig zelf te
                installeren. Geschikt voor vrijwel elk gezin.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-2">Aanrechtmodel</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Staat op het aanrecht en is direct op de keukenkraan aan te sluiten — geen
                installatie nodig. Ideaal voor huurwoningen of als tijdelijke oplossing. Nadeel:
                neemt ruimte op het werkblad in.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-2">4-in-1 kokend water kraan</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                De meest complete oplossing: osmose + kokend water + koud gefilterd water +
                bruisend water uit één kraan. Hogere aanschafprijs (€700–1000) maar alles in één,
                één jaarlijkse filterwissel en een elegant uiterlijk. Lees meer op onze pagina
                over <Link href="/osmose-filter" className="text-[#005F8A] underline hover:no-underline">osmose filter</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Sectie 4 */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Is een omgekeerde osmose filter geschikt voor mijn situatie?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                titel: 'Hard water (>10°dH)',
                tekst:
                  'Ja, een osmosefilter verwijdert ook kalk effectief (95–99%). Je waterkoker en koffiemachine blijven kalkvrij.',
              },
              {
                titel: 'PFAS-zorgen',
                tekst:
                  'Ja, omgekeerde osmose is de enige consumentenmethode die PFAS effectief verwijdert (>99%). Bijzonder relevant in gebieden met PFAS-verontreiniging.',
              },
              {
                titel: 'Huurwoning',
                tekst:
                  'Kies een aanrechtmodel of bespreek een onderbouwinstallatie met de verhuurder. Gaten boren in aanrecht vereist doorgaans toestemming.',
              },
              {
                titel: 'Klein budget (<€200)',
                tekst:
                  'Een basissysteem van €150–200 werkt goed. Let op NSF-certificering en controleer de jaarlijkse filterkosten voor aankoop.',
              },
              {
                titel: 'Gezin met kinderen',
                tekst:
                  'Osmose water (met remineralisatie) is uitstekend voor babymelk en kinderdrinkwater — vrij van nitraten, chloor en microplastics.',
              },
              {
                titel: 'Smaakgevoelig',
                tekst:
                  'Als je chloor of kalk in kraanwater proeft, merk je direct het verschil. Osmose water smaakt neutraal en fris.',
              },
            ].map(p => (
              <div key={p.titel} className="bg-white border border-gray-100 rounded-2xl p-4">
                <p className="font-semibold text-gray-900 mb-1 text-sm">✓ {p.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{p.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Twijfel je over je waterhardheid? Zie onze{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid-database per gemeente
            </Link>
            .
          </p>
        </section>

        {/* Sectie 5 */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat zijn de nadelen van een osmosefilter?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Eerlijk zijn over de beperkingen helpt je een weloverwogen keuze maken.
          </p>
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">Afvalwater</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Klassieke systemen gebruiken 0,5 tot 2 liter spoelwater per liter drinkwater.
                Moderne systemen met boostpomp halen een 1:1 ratio. Het &ldquo;afvalwater&rdquo;
                is geconcentreerd leidingwater — bruikbaar voor planten of schoonmaak.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">Lage doorstroomsnelheid</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Het membraan filtert 1–3 liter per minuut. In de praktijk merk je er niets van
                dankzij een drukvat als buffer — maar bij hoog waterverbruik (grote gezinnen) is
                een hoger capaciteitsmodel aan te raden.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">Verwijdert nuttige mineralen</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Het membraan houdt ook calcium en magnesium tegen. <strong>Oplossing:</strong> een
                5e filterstap met remineralisatiefilter voegt deze mineralen in de juiste
                verhouding terug toe.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">Installatie vereist kraantje in aanrecht</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Voor een onderbouwsysteem moet je een extra gat in het aanrecht boren voor de
                osmose kraan. Bij nieuwe aanrechten zijn hier vaak al voorboringen voor aanwezig.
                In een huurwoning heb je toestemming van de verhuurder nodig.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/omgekeerde-osmose/vergelijken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Osmosesystemen vergelijken</h3>
              <p className="text-sm text-gray-600">Bekijk welke RO-systemen het beste scoren op prijs, capaciteit en filterkwaliteit.</p>
            </Link>
            <Link href="/omgekeerde-osmose/kosten" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kosten omgekeerde osmose</h3>
              <p className="text-sm text-gray-600">Wat kost een osmosesysteem op jaarbasis, inclusief filters en onderhoud?</p>
            </Link>
            <Link href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 58 keurmerk</h3>
              <p className="text-sm text-gray-600">Waarom dit certificaat een betrouwbaarheidsindicator is bij het kopen van een RO-systeem.</p>
            </Link>
            <Link href="/keuzehulp" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp waterfilter</h3>
              <p className="text-sm text-gray-600">Beantwoord een paar vragen en vind het waterfilter dat het beste bij jou past.</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over omgekeerde osmose filter kopen
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
                href: '/omgekeerde-osmose/vergelijken',
                title: 'Osmose filters vergelijken',
                desc: 'Onafhankelijke vergelijking van de beste osmosefilters op de markt.',
              },
              {
                href: '/beste-osmosefilter-2026',
                title: 'Beste osmosefilter 2026',
                desc: 'Welk systeem scoort het hoogst op zuiverheid, prijs en gebruiksgemak?',
              },
              {
                href: '/osmose-filter',
                title: 'Osmose filter overzicht',
                desc: 'Alle typen osmosefilters uitgelegd: onderbouw, aanrecht en 4-in-1.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Zoek de actuele waterhardheid op voor jouw woonplaats in Nederland.',
              },
              {
                href: '/omgekeerde-osmose/wat-is-osmose-water',
                title: 'Wat is osmose water?',
                desc: 'Eigenschappen, smaak, pH-waarde en gezondheidsaspecten van osmose water.',
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
