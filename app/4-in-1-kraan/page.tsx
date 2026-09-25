import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SgsResults } from '@/components/SgsResults';
import { FourInOneRecommendation } from '@/components/FourInOneRecommendation';
import { FactCard } from '@/components/FactCard';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Wat is een 4-in-1 kraan? Heet, gekoeld en gezuiverd water',
    description:
      'Alles over de 4-in-1 kraan: hoe werkt het systeem, wat kost het, welke merken zijn er en wanneer is zo\'n kraan de juiste keuze? Complete gids inclusief',
    alternates: { canonical: 'https://waterfilterplatform.nl/4-in-1-kraan' },
    openGraph: {
      title: '4-in-1 kraan: zeer heet, gekoeld en gezuiverd water uit één kraan',
      description:
        'Ontdek hoe een 4-in-1 kraan werkt, wat het kost en welk merk het beste bij jou past. Inclusief vergelijkingstabel en 5-jaar kostenberekening.',
      url: 'https://waterfilterplatform.nl/4-in-1-kraan',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is een 4-in-1 kraan precies?',
    answer:
      'Een 4-in-1 kraan levert meerdere waterfuncties uit één kraanlichaam. De PureAqua 4-in-1 kraan geeft gewoon warm en koud kraanwater, plus gezuiverd (osmose) water op kamertemperatuur, gekoeld (circa 5 graden) en zeer heet (circa 96 graden). Onder de spoelbak staan twee apparaten: een heet-/koelunit en een osmose-unit met voorfilter, osmosemembraan en remineralisatie. Bruisend water zit er niet op. Andere merken, zoals Quooker met CUBE, noemen bruisend water wel als functie.',
  },
  {
    question: 'Wat is het verschil tussen een 4-in-1 kraan kopen en een Quooker met CUBE?',
    answer:
      'Een Quooker Flex PRO3 met CUBE geeft kokend, gekoeld en bruisend water en filtert met actieve kool, niet met omgekeerde osmose. Bij PureAqua kost die combinatie 2.240 euro. De PureAqua 4-in-1 kraan kost 1.948 euro, geeft zeer heet (circa 96 graden), gekoeld en osmose-gezuiverd water, maar geen bruisend water. Het prijsverschil is dus ongeveer 300 euro. Installatie door een installateur is aanbevolen; PureAqua biedt die aan voor 299 euro.',
  },
  {
    question: 'Hoe veilig is een 4-in-1 kraan met kokend water?',
    answer:
      'Alle serieuze 4-in-1 kranen hebben een dubbele veiligheidsvergrendeling voor de heetwaterstand: je moet bewust twee handelingen tegelijk uitvoeren voordat het water stroomt. De buitenkant van de kraan wordt niet heet. Let bij aankoop op CE-markering en een kinderslot of gelijkwaardige beveiliging.',
  },
  {
    question: 'Hoeveel kokend water kan een 4-in-1 kraan leveren?',
    answer:
      'De PureAqua 4-in-1 kraan heeft een tank van 2,3 liter, waarvan circa 1,2 liter zeer heet water (circa 96 graden) direct beschikbaar is. Bij normaal gebruik (thee, koffie, pasta) is dat voldoende voor een gemiddeld huishouden. Daarna is het water na 3 tot 4 minuten weer op temperatuur.',
  },
  {
    question: 'Wie installeert een 4-in-1 kraan?',
    answer:
      'Installatie door een installateur is aanbevolen. Onder de spoelbak komen twee apparaten (een heet-/koelunit en een osmose-unit) die elk een stopcontact nodig hebben, plus een aansluiting op koud water en de afvoer. PureAqua biedt installatie aan voor 299 euro.',
  },
  {
    question: 'Wat kost het onderhoud van een 4-in-1 kraan per jaar?',
    answer:
      'De terugkerende kosten zijn filterwissels en stroom. Bij de PureAqua 4-in-1 kraan vervang je het voorfilter en het remineralisatiefilter circa jaarlijks en het osmosemembraan circa elke twee jaar (of eerder bij hoog gebruik). De filters kosten gemiddeld circa 150 euro per jaar (fabrikantprijzen omgerekend): circa 105 euro in een jaar met alleen voorfilter en remineralisatiefilter, circa 200 euro in een jaar met ook een nieuw membraan. Er is geen CO₂-cilinder, dus ook geen navulkosten.',
  },
  {
    question: 'Is een 4-in-1 kraan ook geschikt voor hard water?',
    answer:
      'Juist. Het omgekeerde osmose filter dat in de meeste 4-in-1 systemen zit verwijdert een groot deel van de kalk (calciumcarbonaat) die verantwoordelijk is voor hardheid. Dat beschermt niet alleen het systeem zelf maar levert ook zachter, lekkerder smakend water op. Woon je in een harde waterregio zoals Noord-Holland, Utrecht of Limburg? Dan is dit extra relevant.',
  },
  {
    question: 'Welke 4-in-1 kraan heeft de beste prijs-kwaliteitsverhouding?',
    answer:
      'Volgens ons biedt de PureAqua 4-in-1 kraan voor wie osmose-gezuiverd water wil de beste combinatie van prijs en functies: 1.948 euro voor zeer heet, gekoeld en gezuiverd water, met installatie optioneel voor 299 euro. Een Quooker Flex PRO3 met CUBE kost bij PureAqua 2.240 euro en geeft wel bruisend water, maar filtert met actieve kool. Wil je bruisend water, dan past de Quooker CUBE of Grohe Blue beter.',
  },
];

const voordelen = [
  {
    aspect: 'Prijs over 5 jaar',
    losseApparaten: 'Koffiewaterkraan € 250 + waterkoker € 60 + SodaStream € 100 + mengkraan € 200 = € 610 aanschaf + jaarlijks kosten',
    vierInEen: 'PureAqua 4-in-1: € 1.948 aanschaf, installatie optioneel € 299, filters gemiddeld circa € 150 per jaar (fabrikantprijzen omgerekend), plus stroom',
    winnaar: 'Losse apparaten goedkoper',
  },
  {
    aspect: 'Ruimte',
    losseApparaten: 'Waterkoker op aanrecht, SodaStream op aanrecht, meerdere aansluitingen onder aanrecht',
    vierInEen: 'Alleen de kraan op het aanrecht; onder de spoelbak twee apparaten en twee stopcontacten',
    winnaar: '4-in-1',
  },
  {
    aspect: 'Filterkwaliteit',
    losseApparaten: 'Geen standaard filter bij losse apparaten; koolstoffilter optioneel',
    vierInEen: 'Omgekeerde osmose in drie stappen (voorfilter, membraan, remineralisatie); SGS-test op een nieuw systeem: PFOS meer dan 99,6%, PFOA 99,5% en lood meer dan 99,8% minder',
    winnaar: '4-in-1',
  },
  {
    aspect: 'Gebruiksgemak',
    losseApparaten: 'Meerdere apparaten, meerdere acties voor elke watersoort',
    vierInEen: 'Alles uit één kraan, onmiddellijk beschikbaar',
    winnaar: '4-in-1',
  },
  {
    aspect: 'Bruisend water',
    losseApparaten: 'SodaStream: fles navullen of wisselen',
    vierInEen: 'Niet bij de PureAqua 4-in-1; combineer eventueel met een losse SodaStream',
    winnaar: 'Losse apparaten',
  },
  {
    aspect: 'Flexibiliteit / aanpasbaarheid',
    losseApparaten: 'Elk apparaat afzonderlijk te vervangen of upgraden',
    vierInEen: 'Één systeem; upgrade vergt kraan vervangen',
    winnaar: 'Losse apparaten',
  },
];

const merken = [
  {
    naam: 'PureAqua 4-in-1 kraan',
    prijs: '€ 1.948',
    functies: 'Zeer heet (circa 96 graden), gekoeld, gezuiverd, warm en koud',
    osmose: 'Ja (drie stappen)',
    bruisend: 'Nee',
    garantie: '2 jaar',
    installatie: 'Installateur aanbevolen (PureAqua: € 299)',
    highlight: true,
    notitie: 'Onze keuze voor osmose-gezuiverd water: zeer heet, gekoeld en gezuiverd uit één kraan, geen bruisend water',
  },
  {
    naam: 'Quooker Flex PRO3 + CUBE',
    prijs: '€ 2.240',
    functies: 'Kokend, gekoeld, bruisend, warm, koud',
    osmose: 'Nee (actieve kool)',
    bruisend: 'Via CUBE-module',
    garantie: 'Meerjarig via dealer',
    installatie: 'Aanbevolen via dealer',
    highlight: false,
    notitie: 'Bekendste naam in NL; hoger prijspunt',
  },
  {
    naam: 'Grohe Blue Home / Red',
    prijs: '€ 900–2.000',
    functies: 'Kokend of gefilterd, koud, warm',
    osmose: 'Nee',
    bruisend: 'Bij Blue Home-modellen',
    garantie: 'Via dealer',
    installatie: 'Aanbevolen via dealer',
    highlight: false,
    notitie: 'Sterk design; gefocust op koel/bruisend of kokend, niet beide tegelijk',
  },
  {
    naam: 'Franke Vital / Mondial',
    prijs: '€ 800–1.500',
    functies: 'Gefilterd koud/bruisend of kokend',
    osmose: 'Nee',
    bruisend: 'Bij bepaalde modellen',
    garantie: 'Via dealer',
    installatie: 'Via dealer',
    highlight: false,
    notitie: 'Zwitsers merk; goede bouwkwaliteit maar minder functies gecombineerd',
  },
];

const tco5jaar = [
  {
    set: 'PureAqua 4-in-1 kraan',
    aanschaf: '€ 1.948',
    installatie: '€ 299 (optioneel)',
    filtersCO2: 'circa € 150 (gemiddeld, geen CO₂)',
    energie: 'Afhankelijk van gebruik',
    totaal5jaar: '± € 2.962 plus stroom',
    highlight: true,
  },
  {
    set: 'Quooker Flex PRO3 + CUBE',
    aanschaf: '€ 2.240',
    installatie: '€ 250',
    filtersCO2: '€ 80/jaar (CO₂ + CUBE-filter)',
    energie: '± € 35/jaar',
    totaal5jaar: '± € 3.065',
    highlight: false,
  },
  {
    set: 'Grohe Blue Home',
    aanschaf: '€ 1.400',
    installatie: '€ 200',
    filtersCO2: '€ 90/jaar',
    energie: '± € 30/jaar',
    totaal5jaar: '± € 2.250',
    highlight: false,
  },
  {
    set: 'Losse apparaten (koker + SodaStream + filter)',
    aanschaf: '€ 610',
    installatie: '€ 0',
    filtersCO2: '€ 110/jaar',
    energie: '± € 20/jaar',
    totaal5jaar: '± € 1.260',
    highlight: false,
  },
];

export default function VierInEenKraanPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: '4-in-1 kraan', url: 'https://waterfilterplatform.nl/4-in-1-kraan' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Wat is een 4-in-1 kraan? Heet, gekoeld en gezuiverd water',
          description:
            'Complete gids over de 4-in-1 kraan: werking, systemen, kosten, merken en onderhoud.',
          datePublished: '2026-05-01',
          dateModified: '2026-09-24',
          url: 'https://waterfilterplatform.nl/4-in-1-kraan',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>4-in-1 kraan</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            4-in-1 kraan: zeer heet, gekoeld en gezuiverd water uit één kraan
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Een <strong>4-in-1 kraan</strong> vervangt je gewone mengkraan, waterkoker, kan in de koelkast én waterfilter in één systeem.
            Op deze pagina lees je hoe het systeem werkt, wat het kost, welke merken er zijn en wanneer zo&rsquo;n kraan de juiste keuze is, of juist niet.
            Of je nu zoekt naar een <strong>4 in 1 kraan</strong> of specifiek een <strong>4-in-1 kraan kopen</strong> overweegt: hier staat alles wat je nodig hebt.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kokend-water-kraan"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Kokend water kranen →
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
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer answer="De PureAqua 4-in-1 kraan geeft gewoon warm en koud kraanwater, plus osmose-gezuiverd water op kamertemperatuur, gekoeld (circa 5 graden) en zeer heet (circa 96 graden). Onder de spoelbak staan een heet-/koelunit en een osmose-unit. Bruisend water zit er niet op. De prijs is 1.948 euro; installatie is optioneel voor 299 euro." />

        <FactCard id="fourInOne" />

        <FourInOneRecommendation content="4-in-1-kraan-aanbeveling" />

        <SgsResults />

        {/* Wat is een 4-in-1 kraan */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is een 4-in-1 kraan?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een 4-in-1 kraan is een keukenkraan die vier waterfuncties integreert in één kraanlichaam. De naam zegt het al:
            vier functies, één kraan. Welke functies dat zijn, verschilt per fabrikant. Bij de PureAqua 4-in-1 kraan zijn het:
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-5">
            {[
              { nr: '1', titel: 'Zeer heet water (circa 96 graden)', tekst: 'Direct heet, gezuiverd water voor thee, koffie, pasta of soep uit een tank onder het aanrecht.' },
              { nr: '2', titel: 'Gekoeld gezuiverd water', tekst: 'Osmosewater gekoeld tot circa 5 graden, direct uit de kraan.' },
              { nr: '3', titel: 'Gezuiverd water op kamertemperatuur', tekst: 'Osmosewater na voorfilter, osmosemembraan en remineralisatie.' },
              { nr: '4', titel: 'Gewoon warm en koud kraanwater', tekst: 'Normaal leidingwater voor afwassen en dagelijks gebruik, zoals bij een gewone mengkraan.' },
            ].map(f => (
              <div key={f.nr} className="flex gap-3">
                <span className="flex-shrink-0 bg-[#005F8A] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">{f.nr}</span>
                <div>
                  <p className="font-semibold text-gray-800">{f.titel}</p>
                  <p className="text-gray-600 mt-0.5">{f.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Het systeem vervangt daarmee je waterkoker, een eventuele aanrechtfilter en je gewone mengkraan. Andere merken,
            zoals Quooker met CUBE, tellen bruisend water als functie. Bubbels en een CO₂-cilinder heeft de PureAqua 4-in-1
            kraan niet. Het hete water zit altijd achter een veiligheidsbeveiliging.
          </p>
        </section>

        {/* Hoe werkt het systeem */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt het systeem: heet-/koelunit en osmose?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een 4-in-1 kraan bestaat niet alleen uit de kraan zelf. Onder het aanrecht zitten
            de componenten die het systeem doen werken. Elk onderdeel vervult een specifieke taak.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">De heet-/koelunit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Bij de PureAqua 4-in-1 kraan houdt een heet-/koelunit (circa 23 x 44 x 40 cm) water op circa 96 graden in een
                tank van 2,3 liter; circa 1,2 liter is direct beschikbaar en na 3 tot 4 minuten is het water weer op temperatuur.
                Dezelfde unit koelt gezuiverd water tot circa 5 graden, tot 20 liter per uur. Zodra je de heetwaterstand
                opent, stroomt het hete water direct door de kraan.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">Het omgekeerde osmose filter</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                De PureAqua 4-in-1 kraan gebruikt een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose filter</Link> in
                drie stappen: voorfilter, osmosemembraan en remineralisatie. Een SGS-labtest op een nieuw systeem mat voor PFOS meer
                dan 99,6%, voor PFOA 99,5% en voor lood meer dan 99,8% minder. Het gezuiverde water komt uit de gekoelde, de hete en
                de kamertemperatuurstand. Het membraan vervang je circa elke twee jaar, voorfilter en remineralisatiefilter circa jaarlijks.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">Geen CO₂-unit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                De PureAqua 4-in-1 kraan heeft geen CO₂-cilinder en geeft dus geen bubbels. Kranen met bruisend water,
                zoals Quooker met CUBE of Grohe Blue, gebruiken wel een CO₂-cilinder in de onderkast. Wil je bij de 4-in-1 toch bubbels,
                dan kun je osmosewater in een losse SodaStream doen. Lees meer over <Link href="/kennisbank/bruisend-water-thuis" className="text-[#005F8A] underline">bruisend water thuis</Link>.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Onder de spoelbak staan dus twee apparaten, de heet-/koelunit en de osmose-unit (circa 15 x 38 x 47 cm), met elk een
            eigen stopcontact. De kraan is het stuurpunt voor beide.
          </p>
        </section>

        {/* Voordelen vs losse apparaten */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat zijn de voordelen van een 4-in-1 kraan vs losse apparaten?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Veel mensen hebben al een waterkoker, een kan in de koelkast en misschien een aanrechtfilter. Waarom dan upgraden naar een
            4-in-1 systeem? En wanneer zijn losse apparaten eigenlijk handiger? De vergelijking hieronder laat de
            praktische voor- en nadelen zien.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Aspect</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Losse apparaten</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">4-in-1 kraan</th>
                </tr>
              </thead>
              <tbody>
                {voordelen.map(v => (
                  <tr key={v.aspect} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-semibold text-gray-800">{v.aspect}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs leading-relaxed">{v.losseApparaten}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs leading-relaxed">{v.vierInEen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">
            Indicatieve vergelijking op basis van gemiddeld gebruik, 4-persoonshuishouden. Losse apparaten kunnen voordeliger uitvallen als je al beschikt over waterkoker en SodaStream.
          </p>
        </section>

        {/* Soorten 4-in-1 kranen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke soorten 4-in-1 kranen zijn er?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Niet elk systeem dat zichzelf &ldquo;4-in-1&rdquo; noemt is hetzelfde. Er zijn drie hoofdcategorieën op de markt,
            elk met een andere opbouw en functieomvang.
          </p>
          <div className="space-y-4">
            {[
              {
                type: 'Geïntegreerd 4-in-1 systeem',
                beschrijving: 'Heet water, koeling en filtratie zijn ontworpen als één pakket en werken samen via de kraan. Voorbeelden: Quooker met CUBE (kokend, gekoeld en bruisend, actieve kool) en de PureAqua 4-in-1 kraan (zeer heet, gekoeld en osmose-gezuiverd, zonder bubbels).',
                geschiktVoor: 'Huishoudens die maximaal gemak willen zonder losstaande apparaten.',
              },
              {
                type: '3-in-1 of kokend + filter (zonder bruisend)',
                beschrijving: 'Systemen die kokend water en gefilterd koud water leveren maar geen ingebouwde CO₂-functie hebben. Geschikt als je bruisend water minder belangrijk vindt.',
                geschiktVoor: 'Thee- en koffieliefhebbers die puur water willen maar geen bruisend water drinken.',
              },
              {
                type: 'Modulair systeem (optionele uitbreiding)',
                beschrijving: 'Begint als 2-in-1 of 3-in-1 met de optie later een CO₂-module of osmose-unit toe te voegen. Meer flexibel, maar duurder als je alles later uitbreidt.',
                geschiktVoor: 'Mensen die nu een budget hebben voor de basis en later willen uitbreiden.',
              },
            ].map(s => (
              <div key={s.type} className="rounded-xl border border-gray-100 p-4">
                <h3 className="font-bold text-gray-900 mb-1">{s.type}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">{s.beschrijving}</p>
                <p className="text-xs text-[#005F8A] font-medium">Geschikt voor: {s.geschiktVoor}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Merken vergeleken */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke merken zijn er voor een 4-in-1 kraan?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Hieronder staan de vier meest verkochte merken in de 4-in-1 categorie naast elkaar. Let op welke functies
            standaard inbegrepen zijn en welke extra kosten of modules nodig zijn.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[700px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Merk</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Prijs</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Osmose</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Bruisend</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Garantie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Installatie</th>
                </tr>
              </thead>
              <tbody>
                {merken.map(m => (
                  <tr key={m.naam} className={`border-b border-gray-100 ${m.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">
                      {m.naam}
                      {m.highlight && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Aanbevolen</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-700">{m.prijs}</td>
                    <td className="py-2.5 px-3 text-gray-700">{m.osmose}</td>
                    <td className="py-2.5 px-3 text-gray-700">{m.bruisend}</td>
                    <td className="py-2.5 px-3 text-gray-700">{m.garantie}</td>
                    <td className="py-2.5 px-3 text-gray-700">{m.installatie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-3">
            {merken.map(m => (
              <div
                key={m.naam}
                className={`rounded-xl border p-4 ${m.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-3 mb-1">
                  <p className="font-bold text-gray-900">{m.naam}</p>
                  <span className="font-semibold text-[#005F8A] shrink-0 text-sm">{m.prijs}</span>
                </div>
                <p className="text-sm text-gray-600">{m.notitie}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-5">
            Wil je weten hoe een 4-in-1 kraan met osmose zich specifiek verhoudt tot Quooker? Lees onze gedetailleerde pagina over het{' '}
            <Link href="/quooker-alternatief" className="text-[#005F8A] underline">Quooker alternatief</Link> of bekijk
            hoe de 4-in-1 osmosekraan scoort ten opzichte van het{' '}
            <Link href="/grohe-red-alternatief" className="text-[#005F8A] underline">Grohe Red alternatief</Link>.
          </p>
        </section>

        {/* Installatievereisten */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Installatievereisten</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voordat je een 4-in-1 kraan koopt, is het verstandig te controleren of je aanrecht en onderkast aan de minimale
            vereisten voldoen. De meeste installaties zijn eenvoudiger dan je denkt, maar een paar aandachtspunten spelen altijd een rol.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                punt: 'Kraangat in het aanrecht',
                tekst: 'Je hebt een bestaand kraangat of een geschikte plek nodig om de 4-in-1 kraan te monteren. Standaard maat: 35–52 mm diameter afhankelijk van het merk.',
              },
              {
                punt: 'Koude wateraansluiting',
                tekst: 'Een standaard koude waterkraan (3/8 of 1/2 inch) onder het aanrecht is vereist. Vrijwel elke Nederlandse keuken heeft dit al aanwezig.',
              },
              {
                punt: 'Afvoer voor osmosewater',
                tekst: 'Het omgekeerde osmose filter produceert een kleine hoeveelheid spoelwater die wordt afgevoerd. Je hebt een afvoer of koppeling op de bestaande afvoerbuis nodig.',
              },
              {
                punt: 'Stopcontact (230V)',
                tekst: 'Bij de PureAqua 4-in-1 kraan heb je twee stopcontacten in de onderkast nodig: één voor de heet-/koelunit en één voor de osmose-unit. Laat ze zo nodig plaatsen door een elektricien.',
              },
              {
                punt: 'Ruimte in de onderkast',
                tekst: 'Er komen twee apparaten onder de spoelbak: de heet-/koelunit (circa 23 x 44 x 40 cm) en de osmose-unit (circa 15 x 38 x 47 cm). Meet vooraf of beide passen.',
              },
              {
                punt: 'Installateur',
                tekst: 'Installatie door een installateur is aanbevolen. PureAqua biedt installatie van de 4-in-1 kraan aan voor 299 euro.',
              },
            ].map(p => (
              <div key={p.punt} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 text-sm mb-1">{p.punt}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{p.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Meer details over de installatieprocedure lees je in onze handleiding{' '}
            <Link href="/kennisbank/kokend-water-kraan-installeren" className="text-[#005F8A] underline">kokend water kraan installeren</Link>.
          </p>
        </section>

        {/* Kosten over 5 jaar */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kosten over 5 jaar (TCO-overzicht)</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            De aanschafprijs is slechts een deel van de totale investering. Filters, eventuele CO₂-navullingen en energieverbruik
            tellen mee over de gebruiksperiode. Hieronder een vergelijking van vier opties inclusief alle terugkerende kosten.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Aanschaf</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Installatie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Filter + CO₂/jaar</th>
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
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Aanbevolen</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-700">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.installatie}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.filtersCO2}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.energie}</td>
                    <td className="py-2.5 px-3 font-semibold text-[#005F8A]">{r.totaal5jaar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Indicatieve cijfers, 4-persoonshuishouden, energieprijs € 0,30/kWh. Filterkosten variëren per waterhardheid en gebruik.
          </p>
        </section>

        {/* Onderhoud */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderhoud van een 4-in-1 kraan</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een goed onderhouden 4-in-1 systeem gaat gemakkelijk 10 jaar mee. Het onderhoud is minimaal maar regelmatig:
            je hoeft niet veel tijd te investeren, maar je mag bepaalde wissels niet vergeten.
          </p>
          <div className="space-y-3">
            {[
              {
                frequentie: 'Circa jaarlijks',
                taak: 'Voorfilter wisselen',
                tekst: 'Het voorfilter van de PureAqua 4-in-1 kraan vervang je circa jaarlijks. Bij veel gebruik kan dat eerder nodig zijn.',
              },
              {
                frequentie: 'Circa elke 2 jaar',
                taak: 'Osmose membraan vervangen',
                tekst: 'Het osmosemembraan gaat langer mee en vervang je circa elke twee jaar, of eerder bij hoog gebruik.',
              },
              {
                frequentie: 'Circa jaarlijks',
                taak: 'Remineralisatiefilter wisselen',
                tekst: 'Het remineralisatiefilter voegt na de osmose weer mineralen toe. Je vervangt het circa jaarlijks, samen met het voorfilter.',
              },
              {
                frequentie: 'Jaarlijks',
                taak: 'Kraankoppen en filters reinigen',
                tekst: 'Kalkafzetting op de kraanmond kan worden verwijderd met citroenzuuroplossing. Inwendig reinigen is bij een osmosesysteem doorgaans niet nodig.',
              },
            ].map(o => (
              <div key={o.taak} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <div className="shrink-0 text-right">
                  <span className="text-[10px] font-semibold text-[#005F8A] bg-[#E0F2FE] px-2 py-0.5 rounded-full whitespace-nowrap">{o.frequentie}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{o.taak}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{o.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Voor wie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voor wie is een 4-in-1 kraan de juiste keuze?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een 4-in-1 kraan is niet voor iedereen de logische stap. Hier is een eerlijk overzicht van wie er het meeste
            baat bij heeft, en wanneer je er beter voor kunt kiezen om het niet te doen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#E0F2FE] rounded-xl p-4">
              <h3 className="font-bold text-[#003F5C] mb-3">Goed idee als je...</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Dagelijks thee, koffie of pasta maakt en wacht op de waterkoker',
                  'Graag gekoeld gezuiverd water drinkt zonder kan in de koelkast',
                  'Een gefilterd water oplossing zoekt voor hard of calciumrijk leidingwater',
                  'Aanrechtruimte wilt besparen',
                  'Een nieuwe keuken plaatst of je mengkraan toch al aan vervanging toe is',
                  'Budget voor de komende vijf jaar bekijkt in plaats van alleen aanschaf',
                ].map(p => (
                  <li key={p} className="flex gap-2">
                    <span className="text-[#005F8A] shrink-0 font-bold">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-[#003F5C] mb-3">Minder logisch als je...</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Vooral bruisend water wilt: de PureAqua 4-in-1 heeft dat niet',
                  'Al beschikt over een waterkoker en filter die nog prima werken',
                  'In een huurwoning zit zonder eigen aanrechtinfrastructuur',
                  'Geen ruimte of twee stopcontacten in de onderkast hebt voor twee apparaten',
                  'Een strak budget hebt en losse apparaten al bezit',
                ].map(p => (
                  <li key={p} className="flex gap-2">
                    <span className="text-gray-400 shrink-0">✗</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <CTABanner context="kokend" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over de 4-in-1 kraan</h2>
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
              { href: '/kokend-water-kraan/met-filter', label: 'Kokend water kraan met filter' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose uitleg' },
              { href: '/quooker-alternatief', label: 'Quooker alternatief vergelijken' },
              { href: '/grohe-red-alternatief', label: 'Grohe Red alternatief' },
              { href: '/kennisbank/bruisend-water-thuis', label: 'Bruisend water thuis' },
              { href: '/kennisbank/4-in-1-kraan', label: 'Kennisbank: 4-in-1 kraan' },
              { href: '/kennisbank/kokend-water-kraan-installeren', label: 'Installatie stap voor stap' },
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

        <CTABanner context="kokend" />

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/kokend-water-kraan" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Kokend water kraan</p>
              <p className="text-sm text-gray-500">Complete gids over kokend water kranen</p>
            </Link>
            <Link href="/omgekeerde-osmose" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Omgekeerde osmose</p>
              <p className="text-sm text-gray-500">Hoe werkt omgekeerde osmose filtratie?</p>
            </Link>
            <Link href="/vergelijken/kokend-water-kraan-merken" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Kokend water kraan merken vergelijken</p>
              <p className="text-sm text-gray-500">Alle merken naast elkaar</p>
            </Link>
            <Link href="/keurmerken" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Keurmerken waterfilters</p>
              <p className="text-sm text-gray-500">Welke certificeringen zijn belangrijk?</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
