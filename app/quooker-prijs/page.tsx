import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export function generateMetadata(): Metadata {
  return {
    title: 'Quooker prijs 2026: wat kost een Quooker inclusief installatie en onderhoud?',
    description:
      'Quooker prijs overzicht: van PRO3 (€849) tot FUSION SQUARE CUBE (€2.299). Plus installatiekosten, jaarlijks onderhoud en vergelijking met goedkopere.',
    alternates: { canonical: 'https://waterfilterplatform.nl/quooker-prijs' },
    openGraph: {
      title: 'Quooker prijs 2026: wat kost een Quooker inclusief installatie en onderhoud?',
      description:
        'Quooker prijs overzicht: van PRO3 (€849) tot FUSION SQUARE CUBE (€2.299). Plus installatiekosten, jaarlijks onderhoud en vergelijking met goedkopere.',
      url: 'https://waterfilterplatform.nl/quooker-prijs',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat kost een Quooker PRO3?',
    answer:
      'Een Quooker PRO3 heeft een adviesprijs van €849 tot €999, afhankelijk van het gekozen kraanontwerp. De Nordic Round is het instapmodel, terwijl de Nordic Square en Twintaps-varianten iets duurder zijn. Dit is de prijs exclusief installatie en accessoires zoals de CUBE.',
  },
  {
    question: 'Wat is het prijsverschil tussen PRO3 en PRO7?',
    answer:
      'De Quooker PRO7 heeft een grotere boiler van 7 liter in plaats van 3 liter en is geschikt voor waterdruk boven 4 bar. Het PRO7-model is daarmee ideaal voor gezinnen met een hoog verbruik of woningen met een hogere waterdruk. De adviesprijs ligt op €1.099 tot €1.299, dus gemiddeld zo\'n €250 meer dan de PRO3.',
  },
  {
    question: 'Hoeveel kost de Quooker CUBE erbij?',
    answer:
      'De Quooker CUBE is een add-on module voor gekoeld en bruisend water en kost €249 tot €299 extra. De CUBE vereist een Quooker FILTER-model en past niet op een standaard PRO3 of PRO7 zonder filterfunctie. De module wordt apart onder het aanrecht geplaatst.',
  },
  {
    question: 'Wat zijn de jaarlijkse kosten van een Quooker?',
    answer:
      'De jaarlijkse kosten bestaan uit elektriciteit voor de boiler op stand-by (€30–60 per jaar), een filterpatroon bij FILTER-modellen (€20–25 per jaar) en optioneel een serviceabonnement (€8–12 per maand, inclusief preventief onderhoud). Totaal kom je op €50 tot €170 per jaar afhankelijk van het model en gekozen abonnement.',
  },
  {
    question: 'Wat kost installatie van een Quooker?',
    answer:
      'Een installateur rekent €150 tot €400 voor de installatie van een Quooker, afhankelijk van het aanpassen van het leidingwerk en het boren van een kraangat. Als er al een kraangat aanwezig is en de aansluitingen kloppen, is het onderaan die range. Vraag altijd meerdere offertes op bij erkende loodgieters of Quooker-dealers.',
  },
  {
    question: 'Is een Quooker duur vergeleken met alternatieven?',
    answer:
      'Een Quooker PRO3 zonder extras is all-in (inclusief installatie) beschikbaar voor €1.000 tot €1.500. Een complete Quooker met FILTER en CUBE loopt op tot €2.700 of meer. Een 4-in-1 kraan met ingebouwd osmosefilter biedt vergelijkbare functies (kokend, koud gefilterd, warm, bruisend) voor €699 tot €899 plus €100 tot €200 installatie — totaal €800 tot €1.100 all-in. Dat is €500 tot €1.600 minder voor een vergelijkbaar functiepakket.',
  },
  {
    question: 'Wat kost het Quooker serviceabonnement?',
    answer:
      'Het Quooker serviceabonnement is optioneel en kost €8 tot €12 per maand, afhankelijk van het gekozen pakket. Het abonnement dekt preventief onderhoud, zoals controle van aansluitingen en tijdige filtervervanging. Sommige dealers bieden het abonnement aan als onderdeel van de koopovereenkomst.',
  },
  {
    question: 'Hoeveel kost de Quooker per liter kokend water?',
    answer:
      'De Quooker-boiler staat permanent op temperatuur, wat elektriciteit kost ook als je geen water aftapt. De totale energiekosten bedragen circa €30 tot €60 per jaar bij normaal gebruik (4-persoons huishouden). Per liter afgetapt kokend water komt dit neer op circa €0,02 tot €0,04 — vergelijkbaar met een waterkoker maar zonder het wachten.',
  },
];

const modellenData = [
  { model: 'PRO3-L', boiler: '3 liter', druk: '1,5–4 bar', prijs: '€849–1.099', filter: 'FILTER variant beschikbaar' },
  { model: 'PRO3-VAQ', boiler: '3 liter', druk: '<1,5 of >4 bar', prijs: '€949–1.199', filter: 'FILTER variant beschikbaar' },
  { model: 'PRO7', boiler: '7 liter', druk: '1,5–4 bar', prijs: '€1.099–1.299', filter: 'FILTER variant beschikbaar' },
  { model: 'PRO7-VAQ', boiler: '7 liter', druk: 'Alle drukken', prijs: '€1.199–1.399', filter: 'FILTER variant beschikbaar' },
  { model: 'FUSION', boiler: '3 liter', druk: 'Ingebouwd', prijs: '€1.499–1.899', filter: 'Altijd met FILTER' },
  { model: 'FUSION SQUARE', boiler: '3 liter', druk: 'Ingebouwd', prijs: '€1.599–1.999', filter: 'Altijd met FILTER' },
  { model: 'CUBE (add-on)', boiler: '—', druk: '—', prijs: '€249–299', filter: 'Vereist FILTER model' },
  { model: 'CHILLED (add-on)', boiler: '—', druk: '—', prijs: '€199–249', filter: 'Vereist FILTER model' },
];

const tcoData = [
  {
    systeem: 'Quooker PRO3 (basis)',
    aanschaf: '€849–1.099',
    installatie: '€150–400',
    onderhoud: '€50–85/jaar',
    totaal5jaar: '€1.249–1.924',
  },
  {
    systeem: 'Quooker PRO3 FILTER + CUBE',
    aanschaf: '€1.249–1.599',
    installatie: '€150–400',
    onderhoud: '€80–125/jaar',
    totaal5jaar: '€1.799–2.624',
  },
  {
    systeem: 'Quooker FUSION SQUARE CUBE',
    aanschaf: '€1.999–2.299',
    installatie: '€150–400',
    onderhoud: '€80–125/jaar',
    totaal5jaar: '€2.549–3.124',
  },
  {
    systeem: '4-in-1 osmose kraan',
    aanschaf: '€699–899',
    installatie: '€100–200',
    onderhoud: '€80–120/jaar',
    totaal5jaar: '€1.199–1.699',
  },
  {
    systeem: 'Waterkoker + sodamaker + osmose',
    aanschaf: '€400–600',
    installatie: '€0–100',
    onderhoud: '€100–150/jaar',
    totaal5jaar: '€900–1.350',
  },
];

const designVarianten = [
  {
    naam: 'Nordic Round',
    omschrijving:
      'Ronde greep, klassieke boog, vloeiende lijnen. Populair instapmodel in de PRO3-serie. Verkrijgbaar in chroom, RVS, mat zwart en andere afwerkingen.',
    prijsEffect: 'Basisprijs in de serie',
  },
  {
    naam: 'Nordic Square',
    omschrijving:
      'Vierkante greep met strakke, hoekige lijnen. Geschikt voor moderne keukens. Iets duurder dan de Round-uitvoering vanwege het complexere gietwerk.',
    prijsEffect: '+€50–150 t.o.v. Round',
  },
  {
    naam: 'Twintaps',
    omschrijving:
      'Twee aparte hendels: één voor koud/warm water en één voor kokend. Geschikt voor wie de functies visueel wil scheiden. Karakteristiek, herkenbaar design.',
    prijsEffect: '+€100–200 t.o.v. Round',
  },
  {
    naam: 'FUSION / FUSION SQUARE',
    omschrijving:
      'Integreert mixer- en kokendwaterfunctie in één kraan. Slechts één kraangat nodig. Strakste look, maar ook de hoogste prijs door de geïntegreerde techniek.',
    prijsEffect: '€400–900 meer dan losse PRO3',
  },
];

export default function QuookerPrijsPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Quooker prijs', url: 'https://waterfilterplatform.nl/quooker-prijs' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Quooker prijs 2026: wat kost een Quooker inclusief installatie en onderhoud?',
          description:
            'Quooker prijs overzicht: van PRO3 (€849) tot FUSION SQUARE CUBE (€2.299). Plus installatiekosten, jaarlijks onderhoud en vergelijking met goedkopere.',
          datePublished: '2026-03-15',
          url: 'https://waterfilterplatform.nl/quooker-prijs',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Quooker prijs</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Quooker prijs 2026: wat kost een Quooker inclusief installatie en onderhoud?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            De prijs van een Quooker varieert sterk afhankelijk van het model, het kraanontwerp en de gewenste extra's.
            Op deze pagina vind je een volledig overzicht van alle adviesprijs­niveaus, installatiekosten, jaarlijkse
            onderhoudskosten en een eerlijke vergelijking met goedkopere alternatieven.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quooker-modellen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Modellen vergelijken →
            </Link>
            <Link
              href="/4-in-1-kraan"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              4-in-1 alternatief bekijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        <QuickAnswer answer="Een Quooker kost €849–2.299 afhankelijk van het model. Daarbij komen installatiekosten (€150–400), jaarlijkse filterpatronen (€20–25) en servicekosten. De totale 5-jaarskosten liggen op €1.400–3.500. Een 4-in-1 kokend waterfilter kraan met osmose biedt vergelijkbare functies met betere waterfiltratie vanaf €699–899 all-in." />

        {/* Prijsoverzicht alle modellen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat zijn de adviesprijs­en van alle Quooker-modellen?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Quooker biedt twee boilerseries (PRO3 en PRO7), twee drukversies (standaard en VAQ) en de geïntegreerde
            FUSION-lijn. Daarnaast zijn er add-on modules (CUBE en CHILLED) voor bruisend en gekoeld water.
            Hieronder zie je alle modellen met hun adviesprijs en filteroptie.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Model</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Boiler</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Waterdruk</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Adviesprijs</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Filter</th>
                </tr>
              </thead>
              <tbody>
                {modellenData.map((row, i) => (
                  <tr key={row.model} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">{row.model}</td>
                    <td className="py-2.5 px-3 text-gray-700">{row.boiler}</td>
                    <td className="py-2.5 px-3 text-gray-700">{row.druk}</td>
                    <td className="py-2.5 px-3 font-semibold text-[#005F8A]">{row.prijs}</td>
                    <td className="py-2.5 px-3 text-gray-600">{row.filter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Adviesprijs­en zijn indicatief en afhankelijk van het gekozen kraanontwerp (Nordic Round, Nordic Square,
            Twintaps, etc.). Kraandesign heeft geen invloed op de technische werking maar wel op de prijs.
          </p>
        </section>

        {/* Kraandesigns en prijsverschil */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Quooker kraandesigns en prijsverschil: waarom bepaalt het design de prijs?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Een belangrijk maar vaak onderschat detail: bij Quooker betaal je niet alleen voor techniek, maar ook voor
            het ontwerp van de kraan zelf. Hetzelfde PRO3-boilersysteem is verkrijgbaar in meerdere kraandesigns, elk
            met een eigen prijs. Hieronder een overzicht van de vier hoofd­varianten en hun prijseffect.
          </p>
          <div className="space-y-3">
            {designVarianten.map(d => (
              <div key={d.naam} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">→</span>
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-semibold text-gray-800 text-sm">{d.naam}</p>
                    <span className="text-xs text-[#005F8A] font-semibold shrink-0">{d.prijsEffect}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{d.omschrijving}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Kijk je alleen naar techniek en niet naar design, dan is de Nordic Round de logische keuze voor de laagste
            prijs. Wil je de integratie van mixer en kokend water in één kraangat, dan is de FUSION-lijn de enige optie,
            maar dan betaal je ook fors meer. Meer over modelverschillen lees je op{' '}
            <Link href="/quooker-modellen" className="text-[#005F8A] underline">de modellenpagina</Link>.
          </p>
        </section>

        {/* Installatiekosten */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat kost de installatie van een Quooker erbij?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een Quooker wordt bijna altijd geïnstalleerd door een loodgieter of Quooker-erkend installateur.
            De kosten hangen af van de situatie in jouw keuken. Reken op de volgende posten:
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold">•</span>
              <p className="text-gray-700">
                <strong>Kraangat boren</strong> — Als er nog geen extra kraangat in het aanrechtblad zit, kost dit
                €50–120 afhankelijk van het materiaal (rvs, composiet, steen).
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold">•</span>
              <p className="text-gray-700">
                <strong>Leidingwerk aanpassen</strong> — Bij oudere woningen of niet-standaard aansluitingen kan
                het leidingwerk aangepast moeten worden: €50–150 extra.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold">•</span>
              <p className="text-gray-700">
                <strong>Montagetijd installateur</strong> — Een installateur rekent gemiddeld €80–150 per uur.
                Standaardinstallatie duurt 1,5–2,5 uur.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold">•</span>
              <p className="text-gray-700">
                <strong>CUBE-installatie</strong> — Voeg je de CUBE toe, dan komt er een extra kast bij die ook
                aansloten moet worden: €50–100 extra arbeidskosten.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            In totaal liggen installatiekosten op <strong>€150 tot €400</strong> voor een standaard situatie.
            Vraag altijd drie offertes op voor een eerlijke vergelijking.
          </p>
        </section>

        <CTABanner context="osmose" />

        {/* Jaarlijkse kosten */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat zijn de jaarlijkse kosten van een Quooker?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Na de aanschaf zijn er drie terugkerende kostenposten: energieverbruik, filterpatronen en eventueel een
            serviceabonnement. We zetten ze op een rij.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-[#005F8A] mb-1">€30–60</p>
              <p className="font-semibold text-gray-800 text-sm mb-1">Elektriciteit</p>
              <p className="text-xs text-gray-500">Stand-by verwarming boiler, 24/7 op temperatuur</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-[#005F8A] mb-1">€20–25</p>
              <p className="font-semibold text-gray-800 text-sm mb-1">Filterpatroon</p>
              <p className="text-xs text-gray-500">Alleen bij FILTER-modellen, 1x per jaar vervangen</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-[#005F8A] mb-1">€96–144</p>
              <p className="font-semibold text-gray-800 text-sm mb-1">Serviceabonnement</p>
              <p className="text-xs text-gray-500">Optioneel, €8–12/maand, preventief onderhoud</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Zonder serviceabonnement betaal je jaarlijks <strong>€50–85</strong> voor de basisversie of
            <strong> €80–125</strong> als je een FILTER-model hebt met CUBE. Kies je voor het abonnement, dan
            komen daar nog eens €96–144 bij. Over vijf jaar loopt dat op.
          </p>
        </section>

        {/* 5-jaar TCO vergelijking */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat zijn de totale kosten over 5 jaar (TCO-vergelijking)?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            De aanschafprijs is slechts een deel van het verhaal. Over vijf jaar tellen installatie, onderhoud en
            energie mee. Hieronder een eerlijke Total Cost of Ownership-vergelijking van vijf scenario's, inclusief
            een goedkoper alternatief.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Systeem</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Aanschaf</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Installatie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Jaar onderhoud</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">5-jaar totaal</th>
                </tr>
              </thead>
              <tbody>
                {tcoData.map((row, i) => (
                  <tr key={row.systeem} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">{row.systeem}</td>
                    <td className="py-2.5 px-3 text-gray-700">{row.aanschaf}</td>
                    <td className="py-2.5 px-3 text-gray-700">{row.installatie}</td>
                    <td className="py-2.5 px-3 text-gray-700">{row.onderhoud}</td>
                    <td className="py-2.5 px-3 font-semibold text-[#005F8A]">{row.totaal5jaar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Indicatieve cijfers gebaseerd op publieke richtprijzen, gemiddeld gebruik (4-persoons huishouden).
            Jaarlijks onderhoud exclusief optioneel serviceabonnement. Prijzen inclusief BTW.
          </p>
        </section>

        {/* Wanneer Quooker vs alternatief */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer is een Quooker de moeite waard en wanneer kies je een alternatief?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Een Quooker is geen slechte keuze, maar ook niet voor iedereen de meest logische. We zetten de
            overwegingen per situatie naast elkaar.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#005F8A]/20 p-5">
              <p className="font-bold text-[#003F5C] mb-3">Kies een Quooker als...</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0 font-bold">✓</span>
                  Je waarde hecht aan een gevestigd Nederlands merk met breed dealernetwerk
                </li>
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0 font-bold">✓</span>
                  Een specifiek Quooker-design visueel perfect bij jouw keuken past
                </li>
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0 font-bold">✓</span>
                  Je geen behoefte hebt aan een volwaardig osmosefilter
                </li>
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0 font-bold">✓</span>
                  Installatie via een erkend dealer voor jou gemak geeft
                </li>
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0 font-bold">✓</span>
                  Alleen kokend water de kernbehoefte is (geen bruisend of osmose)
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <p className="font-bold text-gray-800 mb-3">Kies een alternatief als...</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-gray-500 shrink-0">→</span>
                  Je ook gefilterd, kalkvrij drinkwater wilt (osmose-kwaliteit)
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-500 shrink-0">→</span>
                  Het budget maximaal €1.100–1.500 all-in is voor kokend + bruisend + gefilterd
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-500 shrink-0">→</span>
                  Je PFAS, nitraat of zware kalkaanslag in je water hebt
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-500 shrink-0">→</span>
                  Je zelf wilt installeren zonder verplichte installateur
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-500 shrink-0">→</span>
                  Een 4-in-1 kraan meer functies voor minder geld biedt in jouw situatie
                </li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Wil je de technische vergelijking tussen Quooker en een osmosesysteem? Lees onze pagina over{' '}
            <Link href="/quooker-versus-osmose" className="text-[#005F8A] underline">Quooker versus osmose</Link> of
            bekijk het overzicht van <Link href="/quooker-alternatief" className="text-[#005F8A] underline">Quooker alternatieven</Link>.
          </p>
        </section>

        {/* Meer lezen */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/quooker-modellen', label: 'Quooker modellen vergelijken (PRO3 vs PRO7 vs Fusion)' },
              { href: '/quooker-versus-osmose', label: 'Quooker versus osmose: eerlijke vergelijking' },
              { href: '/quooker-alternatief', label: 'Quooker alternatief: alle opties naast elkaar' },
              { href: '/4-in-1-kraan', label: '4-in-1 kraan met osmosefilter: uitleg en keuze' },
              { href: '/kokend-water-kraan', label: 'Kokend water kraan: complete koopgids' },
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

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over de prijs van een Quooker
          </h2>
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

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/kokend-water-kraan" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Kokend water kraan</p>
              <p className="text-sm text-gray-500">Complete gids over kokend water kranen</p>
            </Link>
            <Link href="/vergelijken/kokend-water-kraan-merken" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Kokend water kraan merken vergelijken</p>
              <p className="text-sm text-gray-500">Alle merken naast elkaar</p>
            </Link>
            <Link href="/heet-water-kraan/prijs" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Heet water kraan prijs</p>
              <p className="text-sm text-gray-500">Kosten en prijzen van heet water kranen</p>
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
