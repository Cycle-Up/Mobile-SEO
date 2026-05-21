import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmose apparaat voor thuis: welk systeem past bij u?',
  description:
    'Osmose apparaat voor thuis kopen? Vergelijk onderbouw, aanrechtmodel en 4-in-1 systemen op prijs, installatiegemak en filterkosten.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/voor-thuis' },
  openGraph: {
    title: 'Osmose apparaat voor thuis — vergelijking & koopadvies 2026',
    description:
      'Osmose apparaat voor thuis kopen? Vergelijk onderbouw, aanrechtmodel en 4-in-1 systemen op prijs, installatiegemak en filterkosten.',
    url: 'https://waterfilterplatform.nl/omgekeerde-osmose/voor-thuis',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoeveel water verbruikt een osmose apparaat extra?',
    answer:
      'Een 1:1 systeem gebruikt 1 liter water voor elk liter drinkwater (afvalwater naar riool). Oudere systemen hebben een ratio van 3:1 of hoger. Moderne systemen met boospomp halen 1:1.',
  },
  {
    question: 'Hoe lang duurt het voor het reservoir vol is?',
    answer:
      'Een standaard 10-liter tank vult zich in 3–6 uur. Een boospomp verdubbelt de doorstroomsnelheid.',
  },
  {
    question: 'Kan een osmose apparaat kalk in de keuken verminderen?',
    answer:
      'Ja. RO verwijdert 95–99% van calcium en magnesium. Kalkafzetting op kranen, koffiezetapparaat en waterkoker verdwijnt vrijwel volledig.',
  },
  {
    question: 'Werkt een osmose apparaat op alle waterleidingdruk?',
    answer:
      'RO heeft minimaal 2,8 bar waterdruk nodig. Nederlandse waterleiding heeft 3–6 bar — dit is altijd voldoende.',
  },
];

const typesTabel = [
  {
    type: 'Onderbouw RO systeem',
    aanschafprijs: '€ 200 – 500',
    installatietijd: '2–4 uur',
    dagcapaciteit: '150–400 L/dag',
    jaarkostenFilter: '€ 50–85',
    highlight: false,
  },
  {
    type: 'Aanrechtmodel',
    aanschafprijs: '€ 150 – 300',
    installatietijd: '0 uur (plug & play)',
    dagcapaciteit: '50–100 L/dag',
    jaarkostenFilter: '€ 40–70',
    highlight: false,
  },
  {
    type: '4-in-1 kraan met RO',
    aanschafprijs: '€ 699 – 899',
    installatietijd: '2–4 uur',
    dagcapaciteit: '150–300 L/dag',
    jaarkostenFilter: '€ 89–100',
    highlight: true,
  },
];

const installatieStappen = [
  {
    nr: '1',
    stap: 'Afsluitventiel plaatsen',
    desc: 'Bevestig een saddle valve (aanboorkraan) op de koudwaterleiding onder het aanrecht. Dit ventiel stuurt water naar het osmose systeem zonder de bestaande watertoevoer te onderbreken.',
  },
  {
    nr: '2',
    stap: 'Aansluitslangen bevestigen',
    desc: 'Sluit de invoerslang aan op het saddle valve. Verbind de slang met de sedimentfilter (stap 1) en vervolgens met de pre-koolstoffilter (stap 2). Gebruik de meegeleverde push-fit koppelingen.',
  },
  {
    nr: '3',
    stap: 'RO-membraan aansluiten',
    desc: 'Schroef het RO-membraan in het filterhuisje. Let op de stroomrichting (pijl op de behuizing). Verbind de permeaatuitgang met de post-koolstoffilter.',
  },
  {
    nr: '4',
    stap: 'Afvoerslang op sifon aansluiten',
    desc: 'Bevestig de afvoerslang van het concentraat (spoelwater) via de meegeleverde sifon-adapter op de keukenafvoer. Zorg dat de slang vrij loopt zonder knikken.',
  },
  {
    nr: '5',
    stap: 'Kraantje boren in aanrecht',
    desc: 'Boor een gat van 16 mm in het aanrecht voor het aparte filterkraantje. Bij granieten of composiet aanrechten is een diamantboor nodig. Bij een 4-in-1 kraan is het gat 30 mm.',
  },
  {
    nr: '6',
    stap: 'Tank aansluiten en systeem spoelen',
    desc: 'Sluit de druktank aan op de post-koolstoffilter. Open het saddle valve en laat het systeem 2–3 liter doorstromen (eerste spoelcyclus). Gooi dit water weg. Herhaal eenmaal. Het systeem is klaar voor gebruik.',
  },
];

const filterKostenSpecificatie = [
  { onderdeel: 'Sedimentfilter', interval: 'Jaarlijks', kosten: '€ 8' },
  { onderdeel: 'Pre-koolstoffilter', interval: 'Jaarlijks', kosten: '€ 12' },
  { onderdeel: 'RO-membraan', interval: 'Elke 2–3 jaar', kosten: '€ 25–40' },
  { onderdeel: 'Post-koolstoffilter', interval: 'Jaarlijks', kosten: '€ 10' },
  { onderdeel: 'Remineralisatiefilter', interval: 'Jaarlijks', kosten: '€ 15' },
];

const situatieAdvies = [
  {
    situatie: 'Kleine keuken of huurder',
    keuze: 'Aanrechtmodel',
    reden: 'Geen installatie nodig, geen gat in aanrecht, direct te gebruiken.',
  },
  {
    situatie: 'Gezin van 4+ personen',
    keuze: '5-stadia onderbouw met remineralisatie',
    reden: 'Hogere dagcapaciteit, druktank voor constante doorstroom, compleet filterproces.',
  },
  {
    situatie: 'Wil ook kokend water',
    keuze: '4-in-1 kraan met osmose',
    reden: 'Vervangt waterkoker, levert kokend én gefilterd koud en bruisend water uit één kraan.',
  },
  {
    situatie: 'Budget onder €200',
    keuze: 'Basis 5-stadia onderbouw',
    keuzeLabel: 'Basis onderbouw',
    reden: 'Meest betaalbare instap met volwaardige RO-zuivering, zelf te installeren.',
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
      { '@type': 'ListItem', position: 2, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
      { '@type': 'ListItem', position: 3, name: 'Voor thuis', item: 'https://waterfilterplatform.nl/omgekeerde-osmose/voor-thuis' },
    ],
  },
];

export default function OsmoseVoorThuisPage() {
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
            <span>Voor thuis</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmose apparaat voor thuis: welk systeem past bij u?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een <strong>osmose apparaat voor thuis</strong> geeft u zuiver drinkwater direct uit de keuken — vrij van kalk, nitraten, PFAS en chloor. Op deze pagina vergelijken we de drie gangbare typen op prijs, installatiegemak en jaarlijkse filterkosten, zodat u precies weet welk systeem bij uw situatie past.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Vergelijk osmose systemen →
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

        <QuickAnswer answer="Een osmose apparaat voor thuis is een onderbouwsysteem dat direct aan de koudwaterkraan wordt gekoppeld en via een apart kraantje gefilterd water levert. Installatie duurt 2–4 uur. Aanschafkosten: €150–500. Filteronderhoud: €50–100 per jaar. Geschikt voor elk gezin, ook in huurwoningen." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">
            Op deze pagina
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#typen" className="hover:underline">Welke typen osmose apparaten zijn er?</a></li>
            <li><a href="#installatie" className="hover:underline">Hoe installeer je een osmose apparaat?</a></li>
            <li><a href="#kosten" className="hover:underline">Wat kost een osmose apparaat per jaar?</a></li>
            <li><a href="#huurwoning" className="hover:underline">Geschikt voor een huurwoning?</a></li>
            <li><a href="#keuze" className="hover:underline">Welk systeem past bij uw situatie?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* H2: Typen */}
        <section id="typen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welke typen osmose apparaten zijn er voor thuis?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Er zijn drie gangbare uitvoeringen van een osmose apparaat voor huishoudelijk gebruik. Ze verschillen in installatiewijze, capaciteit en prijs. Hieronder beschrijven we elk type en sluiten we af met een vergelijkingstabel.
          </p>

          <div className="space-y-4 mb-6">
            <div className="border border-gray-100 rounded-2xl p-5 bg-white">
              <h3 className="font-bold text-gray-900 mb-2">Onderbouw RO systeem</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Het meest gekochte type. Het systeem staat of hangt in het kastje onder het aanrecht en is aangesloten op de koudwaterleiding. Gefilterd water wordt geleverd via een apart, klein kraantje op het aanrecht. Met een druktank heeft u altijd water bij de hand — ook na groot gebruik. Geschikt voor gezinnen van 2–6 personen.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-5 bg-white">
              <h3 className="font-bold text-gray-900 mb-2">Aanrechtmodel</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Het aanrechtmodel staat op het aanrecht en wordt direct op de mengkraan gekoppeld. Geen installatie nodig, geen gat in het aanrecht. Ideaal voor huurders of wie niet wil verbouwen. De capaciteit is lager (50–100 L/dag) en het systeem is minder compact dan een onderbouwvariant.
              </p>
            </div>
            <div className="border-2 border-[#005F8A] rounded-2xl p-5 bg-[#E0F2FE]">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-gray-900">4-in-1 kokend water kraan met RO</h3>
                <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full shrink-0">Meest compleet</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                De meest complete oplossing. De kraan levert kokend (100°C), koud gefilterd, warm gefilterd en bruisend gefilterd water. Het osmosefilter is ingebouwd in de boiler onder het aanrecht. Hogere aanschafprijs, maar vervangt tegelijkertijd de waterkoker en eventueel een bruisend water-abonnement. Één jaarlijkse filterwissel voor alle stappen.
              </p>
            </div>
          </div>

          {/* Vergelijkingstabel */}
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[580px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Aanschafprijs</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Installatietijd</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Dagcapaciteit</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Filter/jaar</th>
                </tr>
              </thead>
              <tbody>
                {typesTabel.map(r => (
                  <tr
                    key={r.type}
                    className={r.highlight ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 text-sm font-medium">{r.type}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.aanschafprijs}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.installatietijd}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.dagcapaciteit}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.jaarkostenFilter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* H2: Installatie */}
        <section id="installatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe installeer je een osmose apparaat thuis?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Een onderbouw osmose systeem installeert u in 2–4 uur zonder loodgieter. U heeft een verstelbare sleutel, een boor (16 mm voor het filterkraantje) en de meegeleverde slangen en koppelingen nodig. Volg de zes stappen hieronder:
          </p>
          <div className="space-y-4 mb-6">
            {installatieStappen.map(s => (
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
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Gemiddelde installatietijd: 2–4 uur.</strong>{' '}
            Voor de meeste onderbouwsystemen is geen loodgieter nodig. Alleen bij een 4-in-1 kraan waarbij zowel koud- als warmwateraansluiting nodig is, kan professionele hulp (€80–150) tijdwinst opleveren. Meer detail vindt u op de pagina{' '}
            <Link href="/osmose-filter/installatie" className="text-[#005F8A] underline hover:no-underline">
              osmose filter installatie
            </Link>.
          </div>
        </section>

        {/* H2: Kosten per jaar */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat kost een osmose apparaat voor thuis per jaar?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Naast de eenmalige aanschaf zijn er jaarlijkse filterkosten. Hieronder de specificatie voor een 5-stadia onderbouwsysteem met remineralisatiefilter:
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-5">
            <table className="w-full min-w-[420px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Onderdeel</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Interval</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Kosten</th>
                </tr>
              </thead>
              <tbody>
                {filterKostenSpecificatie.map((r, i) => (
                  <tr key={r.onderdeel} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.onderdeel}</td>
                    <td className="py-2.5 px-3 text-right text-xs text-gray-600">{r.interval}</td>
                    <td className="py-2.5 px-3 text-right text-[#005F8A] font-semibold">{r.kosten}</td>
                  </tr>
                ))}
                <tr className="bg-[#003F5C] text-white font-bold">
                  <td className="py-2.5 px-3">Totaal per jaar (indicatief)</td>
                  <td className="py-2.5 px-3 text-right"></td>
                  <td className="py-2.5 px-3 text-right">€ 50–85</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-amber-900">Vergelijking:</strong> Een gezin van 4 dat uitsluitend flessenwater koopt, betaalt gemiddeld <strong>€600 per jaar</strong>. Een osmose apparaat met €250 aanschaf en €70/jaar filterkosten betaalt zichzelf in minder dan een jaar terug.
          </div>
        </section>

        {/* H2: Huurwoning */}
        <section id="huurwoning">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Is een osmose apparaat geschikt voor een huurwoning?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ja, in de meeste gevallen is een osmose apparaat ook in een huurwoning te gebruiken. De keuze van het type bepaalt hoeveel toestemming u nodig heeft:
          </p>
          <div className="space-y-4">
            <div className="border border-gray-100 rounded-xl p-4 bg-white">
              <p className="font-semibold text-gray-900 mb-1">Aanrechtmodel — altijd geschikt</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Het aanrechtmodel is plug-and-play: het koppelt aan de bestaande mengkraan via een adapter. Er hoeft niets geboord of permanent aangesloten te worden. Geen toestemming van de verhuurder nodig.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4 bg-white">
              <p className="font-semibold text-gray-900 mb-1">Onderbouw systeem — in principe wel, vraag toestemming</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Voor een onderbouw systeem is een gat (16 mm) in het aanrecht nodig voor het filterkraantje. De meeste verhuurders geven toestemming omdat het om een klein gat gaat dat eenvoudig gedicht kan worden. Het systeem zelf laat geen schade achter: het spoelwater gaat naar de bestaande afvoer.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4 bg-white">
              <p className="font-semibold text-gray-900 mb-1">Bij verhuizing: systeem is makkelijk mee te nemen</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Een onderbouw osmose systeem is volledig los te koppelen. Alle aansluitingen zijn push-fit of schroefkoppelingen. De saddle valve kan worden vervangen door een afsluitdopje. Het systeem is in 30 minuten verwijderd en in een nieuwe woning opnieuw te installeren.
              </p>
            </div>
          </div>
        </section>

        {/* H2: Keuze per situatie */}
        <section id="keuze">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welk osmose apparaat is de beste keuze voor uw situatie?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De juiste keuze hangt af van uw keukenruimte, huishoudensgrootte, budget en woonvorm. Hieronder de aanbevelingen op basis van veelvoorkomende situaties:
          </p>
          <div className="space-y-3">
            {situatieAdvies.map(a => (
              <div key={a.situatie} className="flex gap-4 items-start border border-gray-100 rounded-xl p-4 bg-white">
                <div className="shrink-0">
                  <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Situatie</span>
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
          <p className="mt-5 text-sm text-gray-600">
            Twijfelt u nog?{' '}
            <Link href="/beste-osmosefilter-2026" className="text-[#005F8A] underline hover:no-underline">
              Bekijk de vergelijking van de beste osmosefilters van 2026
            </Link>{' '}
            voor een uitgebreide productoverzicht op basis van gebruikerservaringen en technische specificaties.
          </p>
        </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/omgekeerde-osmose/kopen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmose systeem kopen</h3>
            <p className="text-sm text-gray-600">Vergelijk osmosesystemen op prijs, capaciteit en filterkosten.</p>
          </Link>
          <Link href="/omgekeerde-osmose/inbouw" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Inbouw osmosefilter</h3>
            <p className="text-sm text-gray-600">Alles over de installatie van een inbouw osmosefilter onder het aanrecht.</p>
          </Link>
          <Link href="/keuzehulp" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp waterfilter</h3>
            <p className="text-sm text-gray-600">Welk waterfilter past bij uw situatie? Onze keuzehulp helpt u.</p>
          </Link>
          <Link href="/beste-waterfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Beste waterfilter</h3>
            <p className="text-sm text-gray-600">De best beoordeelde waterfilters van 2026 vergeleken.</p>
          </Link>
        </div>
      </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over een osmose apparaat voor thuis
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
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose — complete gids',
                desc: 'Hoe werkt het membraan, wat verwijdert RO en voor wie is het geschikt?',
              },
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Osmose systeem kopen',
                desc: 'Vergelijk systemen op prijs, capaciteit en filterkosten.',
              },
              {
                href: '/osmose-filter/installatie',
                title: 'Osmose filter installatie',
                desc: 'Stap-voor-stap installatieguide met foto\'s en gereedschapslijst.',
              },
              {
                href: '/beste-osmosefilter-2026',
                title: 'Beste osmosefilter 2026',
                desc: 'De best beoordeelde onderbouw- en aanrechtmodellen vergeleken.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Hoe hard is het leidingwater bij u in de buurt?',
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
