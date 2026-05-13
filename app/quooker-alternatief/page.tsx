import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export function generateMetadata(): Metadata {
  return {
    title: 'Quooker alternatief: vergelijking & beste opties (2026)',
    description:
      'Ontdek alternatieven voor Quooker met osmose filter en kokend water. Vergelijk prijs, functies en garantie van de beste merken naast Quooker.',
    alternates: { canonical: 'https://waterfilterplatform.nl/quooker-alternatief' },
    openGraph: {
      title: 'Quooker alternatief vergelijken — beste opties in 2026',
      description:
        'Op zoek naar een alternatief voor Quooker? Vergelijk PureAqua, Grohe Red, Insinkerator en Franke op prijs, kokend water en osmose filter.',
      url: 'https://waterfilterplatform.nl/quooker-alternatief',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is een goed alternatief voor een Quooker?',
    answer:
      'Er zijn verschillende serieuze alternatieven voor Quooker: PureAqua (4-in-1 met ingebouwd osmose filter), Grohe Red (kokend water, Duits design), Insinkerator (Amerikaans, breed assortiment) en Franke Vital/Mondial. Welke het beste past hangt af van of je een filter wilt, welk design je zoekt en wat je budget is. Wil je kokend water én puur gefilterd water in één kraan? Dan biedt PureAqua dat in een lager prijssegment dan Quooker.',
  },
  {
    question: 'Is er een goedkoper alternatief dan Quooker?',
    answer:
      'Ja. Een Quooker met CUBE (voor bruisend water) komt al snel boven de 2.000 euro inclusief installatie. Alternatieven zoals PureAqua bieden een vergelijkbaar functiepakket (kokend, koud, warm en bruisend water met osmose filter) voor 699 tot 899 euro. Ook Insinkerator en Grohe Red kennen modellen onder de 1.500 euro voor uitsluitend kokend water.',
  },
  {
    question: 'Wat is het verschil tussen Quooker en PureAqua?',
    answer:
      'Quooker is de bekendste naam in Nederland en richt zich primair op kokend water met optioneel bruisend water via de aparte CUBE-module. PureAqua combineert standaard vier functies in één kraan: kokend, koud gefilterd, warm en bruisend water — met een ingebouwd omgekeerde osmose filter. De prijs van een PureAqua-set ligt doorgaans onder die van een Quooker met CUBE, en het osmose filter zit standaard meegeleverd.',
  },
  {
    question: 'Welk alternatief voor Quooker heeft een ingebouwd waterfilter?',
    answer:
      'PureAqua is in deze vergelijking het enige merk met een standaard ingebouwd omgekeerde osmose filter dat kalk, chloor en andere stoffen verwijdert. Bij Quooker is een scale control filter optioneel verkrijgbaar, maar dat is geen volledige osmose installatie. Wil je echt puur gefilterd water uit dezelfde kraan als je kokend water, dan is PureAqua de voor de hand liggende keuze.',
  },
  {
    question: 'Kan ik een alternatief voor Quooker zelf installeren?',
    answer:
      'Veel alternatieven zijn zelf te installeren als je standaard aansluitingen onder je aanrecht hebt. PureAqua wordt geleverd met een Nederlandstalige installatiehandleiding en de meeste klanten plaatsen de kraan zelf in een paar uur. Bij Quooker komt vrijwel altijd een installateur langs, wat de totale prijs verhoogt. Bij Grohe Red en Insinkerator is dat sterk afhankelijk van de dealer.',
  },
  {
    question: 'Welke garantie krijg ik bij een alternatief voor Quooker?',
    answer:
      'Garantietermijnen verschillen per merk en model. PureAqua biedt 2 jaar fabrieksgarantie op de kraan en het osmose systeem. Quooker hanteert eveneens een meerjarige garantie. Grohe Red en Insinkerator hebben hun eigen voorwaarden via de dealer. Lees altijd de actuele garantievoorwaarden op de website van de fabrikant voordat je beslist.',
  },
  {
    question: 'Vergelijkbaar met Quooker maar met ander design — bestaat dat?',
    answer:
      'Zeker. Het design van Quooker (Fusion, Classic, Flex, Nordic, Pro3) is herkenbaar maar niet voor iedereen passend. Grohe Red heeft een strak Duits design, Franke biedt slankere lijnen, Insinkerator heeft Amerikaanse stijlvarianten en PureAqua hanteert een moderne, minimalistische look met chroom- en zwartopties. Voor andere keukens of bouwstijlen is er dus volop keuze buiten Quooker.',
  },
  {
    question: 'Is een alternatief voor Quooker even veilig?',
    answer:
      'Ja. Net als bij Quooker werken serieuze alternatieven met een dubbele veiligheidsvergrendeling: je moet bewust draaien en drukken voordat er kokend water vrijkomt. De buitenkant van de kraan wordt niet heet. Let bij elke aankoop op CE-markering en de aanwezigheid van een kinderslot of vergelijkbare beveiliging.',
  },
];

const topAlternatieven = [
  {
    naam: 'PureAqua 4-in-1',
    prijs: '€ 699–899',
    kokend: 'Ja (100°C)',
    gefilterd: 'Ja (osmose ingebouwd)',
    bruisend: 'Ja, standaard',
    garantie: '2 jaar',
    installatie: 'Zelf installeerbaar',
    highlight: true,
    notitie: 'Beste prijs-kwaliteit met ingebouwde osmose filter',
  },
  {
    naam: 'Quooker (referentie)',
    prijs: '€ 1.500–2.800',
    kokend: 'Ja (100°C)',
    gefilterd: 'Optioneel scale control',
    bruisend: 'Met CUBE module',
    garantie: 'Meerjarig',
    installatie: 'Via installateur',
    highlight: false,
    notitie: 'Bekendste merk in Nederland, breed dealernetwerk',
  },
  {
    naam: 'Grohe Red',
    prijs: '€ 1.200–2.000',
    kokend: 'Ja (100°C)',
    gefilterd: 'Optioneel filterpatroon',
    bruisend: 'Niet standaard',
    garantie: 'Via dealer',
    installatie: 'Aanbevolen via dealer',
    highlight: false,
    notitie: 'Strak Duits design, sterke merknaam in sanitair',
  },
  {
    naam: 'Insinkerator',
    prijs: '€ 800–1.600',
    kokend: 'Ja (98–99°C)',
    gefilterd: 'Optioneel filterpatroon',
    bruisend: 'Niet standaard',
    garantie: 'Via dealer',
    installatie: 'Zelf of via installateur',
    highlight: false,
    notitie: 'Amerikaans merk, breed assortiment varianten',
  },
];

const tco = [
  {
    set: 'PureAqua 4-in-1',
    aanschaf: '€ 799',
    installatie: '€ 0 (zelf)',
    filters: '€ 90/jaar',
    energie: '± € 35/jaar',
    totaal5jaar: '± € 1.424',
    highlight: true,
  },
  {
    set: 'Quooker Combi + CUBE',
    aanschaf: '€ 2.500',
    installatie: '€ 250',
    filters: '± € 60/jaar (optioneel)',
    energie: '± € 35/jaar',
    totaal5jaar: '± € 3.225',
    highlight: false,
  },
  {
    set: 'Grohe Red Duo',
    aanschaf: '€ 1.700',
    installatie: '± € 200',
    filters: '± € 70/jaar',
    energie: '± € 35/jaar',
    totaal5jaar: '± € 2.425',
    highlight: false,
  },
  {
    set: 'Insinkerator HC3300',
    aanschaf: '€ 1.300',
    installatie: '± € 150',
    filters: '± € 70/jaar',
    energie: '± € 35/jaar',
    totaal5jaar: '± € 1.975',
    highlight: false,
  },
];

const redenenAlternatief = [
  {
    titel: 'Prijs',
    tekst:
      'Een complete Quooker met CUBE voor bruisend water kost al snel meer dan tweeduizend euro inclusief installatie. Voor veel huishoudens is dat de belangrijkste reden om verder te kijken naar een alternatief dat vergelijkbare functies biedt voor minder geld.',
  },
  {
    titel: 'Ander design',
    tekst:
      'Quooker hanteert herkenbare lijnen en kleuren. Past dat niet bij je keuken of bouwstijl? Dan zijn er volop alternatieven met andere vormgeving, materialen en afwerkingen — van minimalistisch chroom tot mat zwart.',
  },
  {
    titel: 'Andere filterfuncties',
    tekst:
      'Wie naast kokend water ook puur, kalkvrij water wil voor koffie, thee en koken, kiest vaak voor een systeem met ingebouwd omgekeerde osmose filter. Dat is bij Quooker geen standaardconfiguratie maar bij sommige alternatieven wel.',
  },
  {
    titel: 'Andere fabrikant',
    tekst:
      'Sommige consumenten geven om merksoevereiniteit, dealernetwerk, herkomst of duurzaamheidsbeleid. Een vergelijking met andere fabrikanten zoals PureAqua, Grohe, Franke of Insinkerator geeft inzicht in wat past bij jouw waarden.',
  },
  {
    titel: 'Garantie en service',
    tekst:
      'Garantietermijnen, beschikbaarheid van onderdelen en de manier waarop service wordt geleverd verschillen per merk. Het loont om de actuele garantievoorwaarden naast elkaar te leggen voordat je beslist.',
  },
];

export default function QuookerAlternatiefPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Quooker alternatief', url: 'https://waterfilterplatform.nl/quooker-alternatief' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Quooker alternatief</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Op zoek naar een alternatief voor Quooker?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Quooker is een gerespecteerd Nederlands merk met een sterke reputatie. Toch zoeken steeds meer mensen naar een
            <strong> alternatief voor Quooker</strong> — bijvoorbeeld omdat ze een lager prijspunt zoeken, een ander design willen,
            of een kraan met ingebouwd osmose filter prefereren. We zetten de vier serieuze alternatieven naast elkaar
            zodat je een onderbouwde keuze kunt maken.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kokend-water-kraan/vergelijken"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Merken vergelijken →
            </Link>
            <Link
              href="/kokend-water-kraan/met-filter"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Kraan met filter
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        {/* Waarom mensen zoeken naar alternatieven */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom mensen zoeken naar een alternatief voor Quooker</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Quooker is in Nederland het bekendste merk in de categorie <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kranen</Link>.
            De merknaam staat bij veel mensen synoniem voor de hele productcategorie, vergelijkbaar met hoe Tempo dat doet voor zakdoekjes.
            Dat is een verdiende positie. Maar marktbekendheid wil niet zeggen dat het voor iedereen de beste keuze is.
            Hieronder de vijf belangrijkste redenen die we tegenkomen bij mensen die op zoek zijn naar een alternatief.
          </p>
          <div className="space-y-3">
            {redenenAlternatief.map(r => (
              <div key={r.titel} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">→</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{r.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Wat zijn de Quooker functies */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat zijn de functies van een Quooker?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voordat je kunt vergelijken, is het handig te weten wat Quooker precies biedt. De Quooker is in de kern een
            <strong> kokend water kraan</strong>: een geïsoleerd reservoir onder het aanrecht houdt water constant op
            ongeveer 100°C, klaar voor instant gebruik. Daarnaast biedt het merk een aantal aanvullende opties.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm">
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold">•</span>
              <p className="text-gray-700"><strong>Kokend water (100°C)</strong> — de kernfunctie via het reservoir onder het aanrecht.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold">•</span>
              <p className="text-gray-700"><strong>Koud en warm water</strong> — bij Fusion- en Flex-modellen die de gewone mengkraan vervangen.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold">•</span>
              <p className="text-gray-700"><strong>Bruisend en gekoeld water</strong> — als aparte uitbreiding via de CUBE-module (extra kast onder het aanrecht).</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold">•</span>
              <p className="text-gray-700"><strong>Scale control filter</strong> — optioneel filterpatroon dat kalk vermindert, geen volledig osmose systeem.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold">•</span>
              <p className="text-gray-700"><strong>Designvarianten</strong> — onder andere Classic, Fusion, Flex, Nordic en Pro3, in diverse afwerkingen.</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Belangrijk: een Quooker is van origine geen <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> systeem.
            Wil je puur, kalkvrij gefilterd water uit dezelfde kraan, dan moet je dat los oplossen of kiezen voor een alternatief dat het wél standaard meelevert.
          </p>
        </section>

        {/* Top 4 alternatieven vergelijking tabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De top 4 alternatieven vergeleken</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Hieronder vergelijken we vier serieuze alternatieven naast elkaar — inclusief Quooker zelf als referentie.
            Let op de combinatie van prijs, functies en of er een gefilterd water-optie inbegrepen is.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Merk</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Prijs</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Kokend</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Gefilterd</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Bruisend</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Garantie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Installatie</th>
                </tr>
              </thead>
              <tbody>
                {topAlternatieven.map(a => (
                  <tr key={a.naam} className={`border-b border-gray-100 ${a.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">
                      {a.naam}
                      {a.highlight && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Aanbevolen</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-700">{a.prijs}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.kokend}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.gefilterd}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.bruisend}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.garantie}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.installatie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-3">
            {topAlternatieven.map(a => (
              <div
                key={a.naam}
                className={`rounded-xl border p-4 ${a.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-3 mb-1">
                  <p className="font-bold text-gray-900">{a.naam}</p>
                  <span className="font-semibold text-[#005F8A] shrink-0 text-sm">{a.prijs}</span>
                </div>
                <p className="text-sm text-gray-600">{a.notitie}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Prijzen indicatief, inclusief eventuele installatiekosten waar relevant. Cijfers bijgewerkt mei 2026 op basis van publieke richtprijzen.
          </p>
        </section>

        {/* PureAqua in detail */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">PureAqua in detail: het 4-in-1 alternatief</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Van de vier alternatieven springt PureAqua eruit omdat het standaard meer functies combineert in één kraan,
            tegen een lagere prijs dan een vergelijkbare Quooker-combinatie. We lichten toe waarom dit voor veel
            huishoudens een aantrekkelijk alternatief voor Quooker is — en wanneer dat juist niet zo is.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              {
                titel: '4-in-1 functies',
                tekst:
                  'Kokend, koud gefilterd, warm en bruisend water uit één kraan — geen aparte CUBE-module of losse koolfiltermachine nodig.',
              },
              {
                titel: 'Osmose filter ingebouwd',
                tekst:
                  'Een omgekeerde osmose systeem verwijdert kalk, chloor, nitraten en microplastics. Bij PureAqua zit dit standaard in het pakket.',
              },
              {
                titel: 'Prijs',
                tekst:
                  'Het complete pakket ligt rond € 699–899. Een Quooker met CUBE plus filter komt vaak ruim boven de € 2.000 inclusief installatie.',
              },
              {
                titel: 'Garantie',
                tekst:
                  '2 jaar fabrieksgarantie op kraan en osmose systeem, met service vanuit Nederland.',
              },
              {
                titel: 'Design',
                tekst:
                  'Modern, minimalistisch design in chroom of mat zwart. Geschikt voor zowel strakke moderne keukens als landelijke stijlen.',
              },
              {
                titel: 'Zelf installeren',
                tekst:
                  'Met standaard aansluitingen onder het aanrecht plaats je de kraan zelf binnen enkele uren. Geen verplichte installateur.',
              },
            ].map(b => (
              <div key={b.titel} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{b.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{b.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer weten over het filtersysteem dat in deze kraan zit? Lees onze uitleg over <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> en
            wat je moet weten bij het <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">kopen van een osmose systeem</Link>.
            Of bekijk hoe de PureAqua zich verhoudt tot andere <Link href="/heet-water-kraan" className="text-[#005F8A] underline">heet water kranen</Link>.
          </p>
        </section>

        {/* Wanneer kies je Quooker */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kies je voor Quooker?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We zijn eerlijk: Quooker is voor sommige mensen écht de juiste keuze. Het is een gerespecteerd merk met een
            sterke staat van dienst. Kies bewust voor Quooker als één of meer van de volgende dingen voor jou
            doorslaggevend zijn.
          </p>
          <div className="space-y-3">
            {[
              {
                titel: 'Merkvertrouwen is prioriteit',
                tekst:
                  'Quooker is een gevestigd Nederlands merk dat de categorie kokend water kraan in Nederland mede heeft gevormd. Wil je de zekerheid van een marktleider met een uitgebreid dealernetwerk? Dan past Quooker.',
              },
              {
                titel: 'Een specifiek Quooker-design past bij jouw keuken',
                tekst:
                  'De Fusion, Classic, Flex, Nordic en Pro3 hebben elk hun eigen karakter. Als jouw keukenplanning visueel om een specifiek model van Quooker vraagt, is het logisch dat te volgen.',
              },
              {
                titel: 'Je hebt geen behoefte aan een ingebouwd osmose filter',
                tekst:
                  'Woon je in een gebied met zacht water, of vind je de smaak van het kraanwater al prima? Dan is een complete osmose installatie misschien overkill en is Quooker een goede keuze op puur kokend water.',
              },
              {
                titel: 'Je waardeert installatie via een dealer',
                tekst:
                  'Bij Quooker komt vaak een installateur langs. Vind je dat prettig en wil je niet zelf hoeven sleutelen onder het aanrecht? Dan is dat een reden om voor Quooker te kiezen, ook al verhoogt het de totaalprijs.',
              },
            ].map(s => (
              <div key={s.titel} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">→</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Wanneer kies je een alternatief */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kies je voor een alternatief?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een alternatief voor Quooker is geen tweede keuze: voor veel huishoudens is het juist de betere keuze.
            Met name in de volgende situaties levert kijken buiten Quooker direct winst op.
          </p>
          <div className="space-y-3">
            {[
              {
                titel: 'Een osmose filter is voor jou belangrijk',
                tekst:
                  'Heb je hard water, wil je kalk- en chloorvrij drinkwater of liever geen plasticresten in je glas? Dan is een kraan met ingebouwd omgekeerde osmose systeem een echte upgrade. PureAqua heeft dat standaard.',
              },
              {
                titel: 'Je zoekt een betere prijs voor hetzelfde functiepakket',
                tekst:
                  'Voor kokend, koud, warm én bruisend water samen met osmose betaal je bij PureAqua doorgaans honderden tot duizend euro minder dan voor een vergelijkbare Quooker + CUBE + filter combinatie.',
              },
              {
                titel: 'Een ander design past beter bij je keuken',
                tekst:
                  'Quookers designtaal is herkenbaar maar niet voor iedereen passend. Past mat zwart, een slankere boog of een industriële vorm beter bij je keuken? Dan heb je bij alternatieven meer keuze.',
              },
              {
                titel: 'Je wilt zelf installeren',
                tekst:
                  'Ben je technisch onderlegd en wil je geen installateur betalen? Veel alternatieven, waaronder PureAqua, zijn met de standaardaansluitingen onder je aanrecht prima zelf te plaatsen.',
              },
              {
                titel: 'Je wilt een breder waterconcept thuis',
                tekst:
                  'Denk je verder dan alleen de kraan, bijvoorbeeld aan bruisend water thuis maken zonder losse flessen sleppen? Lees onze gids over bruisend water thuis voor meer context.',
              },
            ].map(s => (
              <div key={s.titel} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">→</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Wil je dieper duiken in de bruisend-water-functie? Lees onze achtergrond over <Link href="/kennisbank/bruisend-water-thuis" className="text-[#005F8A] underline">bruisend water thuis maken</Link>.
          </p>
        </section>

        <CTABanner context="kokend" />

        {/* TCO Tabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kostenvergelijking over 5 jaar (TCO)</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Aanschafprijs is maar een deel van het verhaal. Over een gebruiksperiode van vijf jaar betaal je ook installatie,
            filterwissels en stand-by energie. We zetten de totaalkosten (Total Cost of Ownership) van vier vergelijkbare sets naast elkaar.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Set</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Aanschaf</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Installatie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Filters/jaar</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Energie/jaar</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">5 jaar totaal</th>
                </tr>
              </thead>
              <tbody>
                {tco.map(r => (
                  <tr key={r.set} className={`border-b border-gray-100 ${r.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">
                      {r.set}
                      {r.highlight && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Laagste TCO</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-700">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.installatie}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.filters}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.energie}</td>
                    <td className="py-2.5 px-3 font-semibold text-[#005F8A]">{r.totaal5jaar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Indicatieve cijfers gebaseerd op publieke richtprijzen, gemiddeld gebruik (4 personen huishouden) en een energieprijs van € 0,30/kWh. Filterkosten variëren per merk en gebruik.
          </p>
        </section>

        {/* Korte conclusie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Samenvatting: welk alternatief past bij jou?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Quooker is geen verkeerde keuze — het merk heeft zijn positie in Nederland terecht verdiend. Maar het is
            niet voor iedereen de meest logische keuze. Wie standaard een osmose filter wil, een lager prijspunt zoekt
            of zelf wil installeren, vindt in <strong>PureAqua</strong> doorgaans de meest complete uitkomst.
            Wie hecht aan een specifieke Quooker-vorm of dealer-installatie blijft bij Quooker.
            Grohe Red is sterk in design, Insinkerator biedt veel keuze in modellen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Twijfel je nog? Lees verder over <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kranen</Link> in het algemeen,
            de uitgebreide <Link href="/kokend-water-kraan/vergelijken" className="text-[#005F8A] underline">merkvergelijking</Link>, of bekijk
            specifiek de <Link href="/kokend-water-kraan/met-filter" className="text-[#005F8A] underline">kraan met filter</Link>-variant. Voor de filtertechniek zelf: lees over <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> en
            de praktische tips voor het <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">kopen van een osmose systeem</Link>.
          </p>
        </section>

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kokend-water-kraan', label: 'Kokend water kraan: complete gids' },
              { href: '/kokend-water-kraan/vergelijken', label: 'Alle merken vergelijken + TCO' },
              { href: '/kokend-water-kraan/met-filter', label: 'Kraan met waterfilter' },
              { href: '/heet-water-kraan', label: 'Heet water kraan: hoe werkt het?' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose uitleg' },
              { href: '/omgekeerde-osmose/kopen', label: 'Omgekeerde osmose kopen' },
              { href: '/kennisbank/bruisend-water-thuis', label: 'Bruisend water thuis maken' },
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

        {/* Direct CTA */}
        <section className="bg-gradient-to-br from-[#005F8A] to-[#003F5C] text-white rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Liever direct naar de PureAqua kraan?</h2>
          <p className="text-blue-100 mb-5 max-w-lg mx-auto">
            Bekijk het complete 4-in-1 assortiment met osmose filter, kokend water en bruisend water op de site van PureAqua.
          </p>
          <a
            href="https://www.pureaqua.nl"
            target="_blank"
            rel="noopener"
            className="inline-block bg-white text-[#005F8A] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm md:text-base"
          >
            Naar pureaqua.nl →
          </a>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Quooker alternatieven</h2>
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
