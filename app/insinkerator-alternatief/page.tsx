import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export function generateMetadata(): Metadata {
  return {
    title: 'InSinkErator alternatief: beste opties vergeleken',
    description:
      'Op zoek naar een alternatief voor InSinkErator? Vergelijk PureAqua, Quooker, Grohe Red en Franke op prijs, functies en filteropties. Eerlijke vergelijking inclusief TCO.',
    alternates: { canonical: 'https://waterfilterplatform.nl/insinkerator-alternatief' },
    openGraph: {
      title: 'InSinkErator alternatief: top 4 opties vergeleken (2026)',
      description:
        'Vergelijk de beste alternatieven voor InSinkErator. PureAqua, Quooker, Grohe Red en Franke naast elkaar op functies, prijs en 5-jaar kosten.',
      url: 'https://waterfilterplatform.nl/insinkerator-alternatief',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is een goed alternatief voor InSinkErator?',
    answer:
      'De vier serieuze alternatieven voor InSinkErator zijn PureAqua 4-in-1, Quooker, Grohe Red en Franke. PureAqua biedt standaard vier functies inclusief osmose filter voor de laagste prijs. Quooker is de bekendste naam in Nederland. Grohe Red scoort op design. Franke staat voor Zwitserse bouwkwaliteit. Welke het beste past hangt af van je functiebehoefte, budget en of je een ingebouwd waterfilter wilt.',
  },
  {
    question: 'Is er een goedkoper alternatief voor InSinkErator?',
    answer:
      'Ja. InSinkErator-modellen voor kokend water (zoals de HC3300 of HC3500) kosten tussen € 800 en € 1.600 exclusief installatie. PureAqua biedt een volledigere set — met osmose filter, bruisend water en kokend water — voor € 699–899. Over vijf jaar is het verschil nog groter doordat PureAqua zelf te installeren is en lagere filterkosten heeft.',
  },
  {
    question: 'Heeft een InSinkErator een ingebouwd waterfilter?',
    answer:
      'InSinkErator-modellen voor kokend water hebben optioneel een filterpatroon dat kalk en chloor vermindert, maar dit is geen volledig omgekeerde osmose systeem. Wie puur gefilterd water wil — vrij van kalk, nitraat en microplastics — heeft bij InSinkErator een apart osmose systeem nodig. PureAqua heeft een osmose filter standaard meegeleverd.',
  },
  {
    question: 'Kan ik een InSinkErator alternatief zelf installeren?',
    answer:
      'PureAqua is zelf te installeren met standaard aansluitingen onder het aanrecht, zonder verplichte installateur. Voor Quooker en de meeste InSinkErator-modellen wordt een professionele installateur aanbevolen, wat de totaalprijs verhoogt. Grohe Red en Franke variëren per model — raadpleeg de specificaties van het specifieke model dat u overweegt.',
  },
  {
    question: 'Wanneer blijf je beter bij InSinkErator?',
    answer:
      'InSinkErator is een gevestigd Amerikaans merk met een breed assortiment en een goede servicegeschiedenis. Kies bewust voor InSinkErator als je al positieve ervaringen hebt met het merk, als je dealer-service en garantie via een vertrouwde partij wilt, of als het specifieke model of design niet beschikbaar is bij alternatieven. Voor sommige projecten (renovaties, specifieke keukenstijlen) is InSinkErator de juiste keuze.',
  },
];

const topAlternatieven = [
  {
    naam: 'PureAqua 4-in-1',
    prijs: '€ 699–899',
    kokend: 'Ja (100°C)',
    gefilterd: 'Ja (osmose standaard)',
    bruisend: 'Ja, standaard',
    garantie: '2 jaar',
    installatie: 'Zelf installeerbaar',
    highlight: true,
    notitie: 'Meest complete functiepakket voor de laagste prijs inclusief osmose filter',
  },
  {
    naam: 'InSinkErator (referentie)',
    prijs: '€ 800–1.600',
    kokend: 'Ja (98–99°C)',
    gefilterd: 'Optioneel filterpatroon',
    bruisend: 'Niet standaard',
    garantie: 'Via dealer',
    installatie: 'Zelf of installateur',
    highlight: false,
    notitie: 'Bewezen Amerikaans merk, breed modellenaanbod, optioneel filter',
  },
  {
    naam: 'Quooker Fusion / Flex',
    prijs: '€ 1.500–2.800',
    kokend: 'Ja (100°C)',
    gefilterd: 'Optioneel scale control',
    bruisend: 'Via CUBE-module',
    garantie: 'Meerjarig via dealer',
    installatie: 'Via installateur',
    highlight: false,
    notitie: 'Sterkste merknaam in NL; hoog prijspunt voor volledig functiepakket',
  },
  {
    naam: 'Grohe Red Duo',
    prijs: '€ 1.200–2.000',
    kokend: 'Ja (100°C)',
    gefilterd: 'Optioneel filterpatroon',
    bruisend: 'Niet standaard',
    garantie: 'Via dealer',
    installatie: 'Via dealer aanbevolen',
    highlight: false,
    notitie: 'Strak Duits design, sterke naam in sanitair, geen standaard osmose',
  },
];

const tco5jaar = [
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
    set: 'InSinkErator HC3300',
    aanschaf: '€ 1.300',
    installatie: '± € 150',
    filters: '± € 70/jaar',
    energie: '± € 35/jaar',
    totaal5jaar: '± € 1.975',
    highlight: false,
  },
  {
    set: 'Quooker Combi + CUBE',
    aanschaf: '€ 2.500',
    installatie: '€ 250',
    filters: '± € 60/jaar',
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
];

export default function InsinkeratorAlternatiefPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'InSinkErator alternatief', url: 'https://waterfilterplatform.nl/insinkerator-alternatief' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>InSinkErator alternatief</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            InSinkErator alternatief: de beste opties vergeleken
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            InSinkErator is een gevestigd Amerikaans merk met een brede productlijn voor kokend water in de keuken.
            Toch zoeken veel mensen naar een <strong>alternatief voor InSinkErator</strong> — vanwege prijs, filterfuncties of
            design. Op deze pagina vergelijken we vier serieuze alternatieven eerlijk naast elkaar, inclusief InSinkErator
            als referentie.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kokend-water-kraan/vergelijken"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Alle merken vergelijken →
            </Link>
            <Link
              href="/kokend-water-kraan"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Kokend water kraan gids
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        {/* InSinkErator functies */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat biedt InSinkErator?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voordat we de alternatieven bespreken, is het nuttig te begrijpen wat InSinkErator precies levert. Het merk
            is opgericht in de Verenigde Staten en staat in Nederland bekend om de Steaming Hot Water Tap-lijn. De
            belangrijkste kenmerken van de InSinkErator kokend water kranen:
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              {
                punt: 'Kokend water (98–99°C)',
                tekst: 'InSinkErator levert bijna kokend water (niet altijd volledig 100°C) via een geïsoleerd reservoir onder het aanrecht. De HC-lijn (HC3300, HC3500, HC3800) is het meest verkochte in Europa.',
              },
              {
                punt: 'Koud en warm water',
                tekst: 'De meeste InSinkErator-modellen zijn 3-in-1: kokend, koud en warm water. Bruisend water is niet standaard opgenomen in de modellen.',
              },
              {
                punt: 'Optioneel filterpatroon',
                tekst: 'Er zijn filterpatronen beschikbaar die chloor en sediment verminderen, maar dit is geen omgekeerde osmose. Wie volledig gefilterd water wil, heeft een apart osmose systeem nodig.',
              },
              {
                punt: 'Breed assortiment',
                tekst: 'InSinkErator biedt uiteenlopende uitvoeringen in kleur (chroom, gesatineerd staal, zwart) en type. De veiligheidsvergrendeling voor kokend water is standaard op alle modellen aanwezig.',
              },
              {
                punt: 'Dealer- en servicemodel',
                tekst: 'In Nederland zijn InSinkErator-producten verkrijgbaar via keukenspeciaalzaken en sanitairhandelaren. Installatie en service verlopen via de dealer of een loodgieter.',
              },
            ].map(p => (
              <div key={p.punt} className="flex gap-3">
                <span className="text-[#005F8A] font-bold shrink-0">•</span>
                <div>
                  <p className="font-semibold text-gray-800">{p.punt}</p>
                  <p className="text-gray-600 mt-0.5">{p.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            InSinkErator is een solide keuze voor wie uitsluitend een kokend water kraan wil met een bewezen track record.
            De beperkingen — geen standaard osmose filter, geen bruisend water, hogere prijs voor een volledig functiepakket —
            zijn de reden waarom veel mensen zoeken naar een <strong>alternatief InSinkErator</strong>.
          </p>
        </section>

        {/* Top 4 alternatieven tabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Top 4 alternatieven voor InSinkErator vergeleken</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Hieronder staan de vier meest vergeleken systemen naast InSinkErator als referentie. Let op welke functies
            standaard inbegrepen zijn versus wat extra kost.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[700px] text-sm border-collapse">
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
            Prijzen indicatief op basis van publieke richtprijzen mei 2026. Installatiekosten bij InSinkErator en Quooker variëren sterk per dealer.
          </p>
        </section>

        {/* PureAqua in detail */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">PureAqua in detail: waarom het een sterk InSinkErator alternatief is</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Van de vier alternatieven springt PureAqua eruit op het vlak van functies voor de prijs. Hier leggen we uit
            waarom — en ook wanneer PureAqua juist niet de beste keuze is.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              {
                titel: 'Vier functies in één kraan',
                tekst: 'Kokend, koud gefilterd, warm en bruisend water uit één kraanlichaam. InSinkErator biedt standaard drie functies zonder bruisend water.',
              },
              {
                titel: 'Osmose filter standaard meegeleverd',
                tekst: 'PureAqua levert een compleet osmose systeem inclusief, dat kalk, chloor, nitraten en microplastics verwijdert. Bij InSinkErator is dit een extra aanschaf.',
              },
              {
                titel: 'Lagere totaalprijs',
                tekst: 'Een complete PureAqua-set kost € 699–899. Een InSinkErator met vergelijkbare functies (3-in-1 + apart osmose) kost al snel € 1.500–2.000 inclusief installatie.',
              },
              {
                titel: 'Zelf te installeren',
                tekst: 'PureAqua wordt geleverd met Nederlandstalige installatiehandleiding. De meeste klanten plaatsen het systeem in 2–4 uur zonder installateur.',
              },
              {
                titel: 'Nederlandse service',
                tekst: '2 jaar fabrieksgarantie en service via Nederland, zonder afhankelijkheid van een internationale dealer.',
              },
              {
                titel: 'Modern design',
                tekst: 'Beschikbaar in chroom en mat zwart, met een strakke eigentijdse uitstraling die past in zowel moderne als klassieke keukens.',
              },
            ].map(b => (
              <div key={b.titel} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{b.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{b.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer weten over de 4-in-1 technologie? Bekijk onze volledige uitleg van de{' '}
            <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kraan</Link> of lees over{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">omgekeerde osmose kopen</Link>.
          </p>
        </section>

        {/* Wanneer InSinkErator */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kies je bewust voor InSinkErator?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We zijn eerlijk: voor bepaalde mensen en situaties is InSinkErator de beste keuze. Kies bewust voor InSinkErator als:
          </p>
          <div className="space-y-3">
            {[
              {
                titel: 'Je al goede ervaringen hebt met het merk',
                tekst: 'Positieve ervaringen met een vorig InSinkErator model, een vertrouwde dealer in de buurt of bestaande kennis van het systeem zijn geldige redenen om te blijven.',
              },
              {
                titel: 'Je geen behoefte hebt aan bruisend water of osmose',
                tekst: 'Wie alleen kokend water wil en tevreden is met het bestaande kraanwater, heeft geen meerwaarde van een osmose filter of CO₂-installatie. InSinkErator biedt dat eenvoudige pakket.',
              },
              {
                titel: 'Je een specifiek InSinkErator design of kleur zoekt',
                tekst: 'InSinkErator biedt meerdere afwerkingen en kleuren die niet altijd bij alternatieven beschikbaar zijn. Is een specifiek ontwerp doorslaggevend voor jouw keuken, dan past InSinkErator.',
              },
              {
                titel: 'Je dealer-installatie en service wilt',
                tekst: 'Als je de voorkeur geeft aan professionele installatie en doorlopende service via een vaste dealer, levert InSinkErator dat via een breed dealernetwerk.',
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

        {/* Wanneer alternatief */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kies je voor een alternatief voor InSinkErator?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een alternatief InSinkErator is geen downgrade — voor veel mensen is het juist een betere match. Dit zijn de
            situaties waar alternatieven direct beter scoren:
          </p>
          <div className="space-y-3">
            {[
              {
                titel: 'Je wilt een osmose filter in het systeem',
                tekst: 'InSinkErator heeft geen standaard osmose filter. Wie kalkvrij, puur water wil voor koffie, thee of drinkwater, moet bij InSinkErator een apart systeem aanschaffen. PureAqua heeft dat standaard ingebouwd.',
              },
              {
                titel: 'Je wilt bruisend water uit de kraan',
                tekst: 'InSinkErator biedt geen standaard bruisend water functie. Een PureAqua 4-in-1 levert dat direct via een ingebouwde CO₂-cilinder, zonder extra module of apart apparaat.',
              },
              {
                titel: 'Je zoekt een lagere prijs voor hetzelfde functiepakket',
                tekst: 'Voor kokend water + osmose filter + bruisend water betaal je bij InSinkErator al snel € 1.500–2.000 inclusief installatie. PureAqua levert hetzelfde pakket voor € 699–899 inclusief zelfinstallatie.',
              },
              {
                titel: 'Je wilt zelf installeren',
                tekst: 'Bij InSinkErator wordt installatie via dealer aanbevolen — dat verhoogt de totaalprijs met € 100–250. PureAqua is ontworpen voor zelfinstallatie en levert een Nederlandstalige handleiding.',
              },
              {
                titel: 'Je vergelijkt ook met andere kokend water merken',
                tekst: 'Wil je de volle breedte van de markt bekijken? Vergelijk ook het Quooker alternatief en het Grohe Red alternatief voordat je beslist.',
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
            Vergelijkt u breder? Lees ook onze pagina over het{' '}
            <Link href="/quooker-alternatief" className="text-[#005F8A] underline">Quooker alternatief</Link> en het{' '}
            <Link href="/grohe-red-alternatief" className="text-[#005F8A] underline">Grohe Red alternatief</Link> voor
            een volledig beeld van de markt.
          </p>
        </section>

        <CTABanner context="kokend" />

        {/* 5-jaar kostenvergelijking */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kostenvergelijking over 5 jaar (TCO)</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Aanschafprijs is slechts het begin. Installatie, jaarlijkse filterwissels en energieverbruik bepalen mede wat
            een systeem u werkelijk kost over een gebruiksperiode van vijf jaar.
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
                {tco5jaar.map(r => (
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
            Indicatieve cijfers, 4-persoonshuishouden, energieprijs € 0,30/kWh. Filterkosten bij InSinkErator exclusief eventueel apart osmose systeem.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over InSinkErator alternatieven</h2>
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
              { href: '/kokend-water-kraan', label: 'Kokend water kraan: complete gids' },
              { href: '/quooker-alternatief', label: 'Quooker alternatief vergelijken' },
              { href: '/grohe-red-alternatief', label: 'Grohe Red alternatief vergelijken' },
              { href: '/omgekeerde-osmose/kopen', label: 'Omgekeerde osmose kopen' },
              { href: '/kokend-water-kraan/vergelijken', label: 'Alle merken kokend water vergelijken' },
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

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-[#005F8A] to-[#003F5C] text-white rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Liever direct bekijken?</h2>
          <p className="text-blue-100 mb-5 max-w-lg mx-auto">
            Bekijk het volledige 4-in-1 assortiment van PureAqua — met osmose filter, kokend water en bruisend water
            standaard inbegrepen.
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
      </div>
    </>
  );
}
