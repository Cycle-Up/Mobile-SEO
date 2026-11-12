import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { FourInOneRecommendation } from '@/components/FourInOneRecommendation';
import { SgsResults } from '@/components/SgsResults';
import { SchemaOrg } from '@/components/SchemaOrg';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';
import { FOUR_IN_ONE } from '@/lib/kranen.mjs';

export const metadata: Metadata = {
  title: '4-in-1 kokend water kraan: koud, warm, heet en kokend | 2026',
  description:
    'Alles over de 4-in-1 kokend water kraan: wat het biedt, vergelijking met 2-in-1 en 3-in-1, RO als 5e functie en de beste 4-in-1+RO keuze voor thuis.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/4-in-1' },
  openGraph: {
    title: '4-in-1 kokend water kraan: koud, warm, heet en kokend',
    description:
      'Vergelijking 4-in-1 vs 2-in-1 en 3-in-1 kraantjes, RO-integratie als 5e functie en de beste 4-in-1+RO keuze voor 2026.',
    url: 'https://waterfilterplatform.nl/kokend-water-kraan/4-in-1',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat doet een 4-in-1 kokend water kraan precies?',
    answer:
      'Een 4-in-1 kraan levert vier temperatuurzones uit één kraan: koud leidingwater, warm water (voor thee op ± 60–80 °C), heet water (± 90 °C) en kokend water (100 °C of nagenoeg 100 °C). De kraan is verbonden met een geïsoleerde boiler onder het aanrecht die het water op temperatuur houdt. Biedt een kraan daarnaast gefilterd water, dan tellen veel merken dat als vijfde functie. De PureAqua 4-in-1 telt anders: gewoon warm en koud kraanwater, plus osmose-gezuiverd water op kamertemperatuur, gekoeld (circa 5 °C) en zeer heet (circa 96 °C, dus niet kokend).',
  },
  {
    question: 'Wat is het verschil tussen 2-in-1, 3-in-1 en 4-in-1 kranen?',
    answer:
      '2-in-1: kokend + koud. 3-in-1: kokend + koud + warm (of kokend + koud + gefilterd). 4-in-1: kokend + koud + warm + heet (of kokend + koud + gefilterd + bruisend). De terminologie is niet gestandaardiseerd — fabrikanten tellen functies soms anders. Let bij aanschaf op de daadwerkelijke temperatuurzones en of filtratie inbegrepen is.',
  },
  {
    question: 'Is een 4-in-1 kraan met RO-filtratie een 5-in-1?',
    answer:
      'Hoe je het telt, verschilt per merk. Tel je het gezuiverde water als extra functie, dan wel. De PureAqua 4-in-1 geeft gewoon warm en koud kraanwater, plus osmose-gezuiverd water op kamertemperatuur, gekoeld (circa 5 °C) en zeer heet (circa 96 °C). Niet alles is dus gefilterd: alleen het drink- en kookwater gaat door het membraan, het gewone warme en koude kraanwater niet.',
  },
  {
    question: 'Hoeveel energie verbruikt een 4-in-1 boiler?',
    answer:
      'De geïsoleerde boiler verbruikt typisch 5–10 watt in stand-by modus (continue warmhouden). Bij actief gebruik (kokend water aftappen) is het vermogen 2.000–2.800 watt, maar dat duurt slechts seconden per gebruik. Jaarlijks energieverbruik ligt op 100–200 kWh — vergelijkbaar met een waterkoker die dagelijks 3–4 keer wordt gebruikt, maar dan tientallen keren handiger.',
  },
  {
    question: 'Hoe veilig is een 4-in-1 kraan met kokend water?',
    answer:
      'Kokendwaterkranen hebben standaard kinderbeveiliging: dubbele hendelbediening of een vergrendelknop die simultaan worden bediend om kokend water af te tappen. Accidenteel activeren is daarmee praktisch onmogelijk. De kraan zelf voelt ook niet heet aan — het is de uitloop die kokend water levert. Kwalitatieve systemen hebben CE-certificering en voldoen aan alle Europese veiligheidsnormen.',
  },
  {
    question: 'Hoe lang gaat een 4-in-1 kraan mee?',
    answer:
      `Dat hangt af van gebruik en onderhoud. Bij de PureAqua 4-in-1 krijg je ${FOUR_IN_ONE.warranty}. Het voorfilter en het remineralisatiefilter vervang je circa jaarlijks, het osmosemembraan circa elke twee jaar. Omdat het water eerst door het osmosemembraan gaat, bouwt er in de heetwatertank veel minder kalk op dan bij onbehandeld leidingwater. Dat ontziet de boiler, maar volg voor ontkalken altijd de onderhoudsinstructies van de fabrikant.`,
  },
  {
    question: 'Kan ik een 4-in-1 kraan zelf installeren?',
    answer:
      'Gedeeltelijk. Het mechanische deel (wateraansluiting, filter plaatsen) is in principe doe-het-zelf. De elektrische aansluiting van de boiler (230 V) moet echter worden uitgevoerd door een gecertificeerd elektricien of installateur, conform de Nederlandse Bouwnorm NEN 1010. Bij de PureAqua 4-in-1 kraan (twee apparaten en twee stopcontacten onder de spoelbak) is installatie door een installateur aanbevolen; PureAqua biedt dat aan voor 299 euro.',
  },
  {
    question: 'Wat kost een 4-in-1 kraan per jaar aan onderhoud?',
    answer:
      'Bij de PureAqua 4-in-1 kraan met RO-filtratie vervang je het voorfilter en het remineralisatiefilter circa jaarlijks en het osmosemembraan circa elke twee jaar (of eerder bij hoog gebruik). Reken voor de filters op gemiddeld circa 150 euro per jaar (fabrikantprijzen omgerekend): circa 105 euro in een jaar zonder membraan, circa 200 euro in een jaar met membraan. Omdat het hete water eerst door het osmosemembraan gaat, bouwt er veel minder kalk op in de boiler. Hoe vaak ontkalken dan nog nodig is, is niet apart gemeten; volg daarvoor de onderhoudsinstructies van de fabrikant.',
  },
];

const vergelijkingTypes = [
  {
    type: '2-in-1',
    functies: 'Kokend + koud',
    filtratie: 'Optioneel',
    prijs: '€ 300–600',
    ideaal: 'Basisgebruik koken & thee',
  },
  {
    type: '3-in-1',
    functies: 'Kokend + koud + warm',
    filtratie: 'Optioneel',
    prijs: '€ 450–800',
    ideaal: 'Koken + warm water',
  },
  {
    type: '4-in-1',
    functies: 'Kokend + koud + warm + heet',
    filtratie: 'Optioneel',
    prijs: '€ 600–1.200',
    ideaal: 'Volledige tempreperatuurregeling',
  },
  {
    type: '4-in-1 + RO',
    functies: 'Zeer heet (circa 96 °C) + gekoeld + gezuiverd + warm + koud',
    filtratie: 'RO ingebouwd',
    prijs: '€ 1.948 (PureAqua)',
    ideaal: 'Complete wateroplossing thuis',
  },
];

export default function KokendWaterKraan4In1Page() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: '4-in-1 kokend water kraan: koud, warm, heet en kokend',
          description:
            'Wat een 4-in-1 tap biedt, vergelijking 2-in-1 en 3-in-1, RO als 5e functie en de beste 4-in-1+RO keuze voor 2026.',
          datePublished: '2025-09-01',
          dateModified: '2026-11-10',
          url: 'https://waterfilterplatform.nl/kokend-water-kraan/4-in-1',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kokend water kraan', url: 'https://waterfilterplatform.nl/kokend-water-kraan' },
          { name: '4-in-1', url: 'https://waterfilterplatform.nl/kokend-water-kraan/4-in-1' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:text-[#005F8A]">Kokend water kraan</Link>
            <span className="mx-2">/</span>
            <span>4-in-1</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            4-in-1 kokend water kraan: koud, warm, heet en kokend
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een 4-in-1 kokend water kraan levert vier temperaturen uit één elegante kraan.
            Volgens ons gaat de variant met ingebouwde omgekeerde osmose nog een stap verder:
            dan komt je drink- en kookwater gefilterd uit de kraan, op kamertemperatuur, gekoeld
            of zeer heet. Geen waterkoker meer, veel minder kalkaanslag en geen plastic flessen.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              RO-systeem vergelijken →
            </Link>
            <Link
              href="/kokend-water-kraan/vergelijken"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Merken vergelijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        <MethodologyBadge lastReviewed="2026-11-10" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" dateModified="2026-11-10" />
        <FourInOneRecommendation content="kokend-water-kraan-4-in-1-aanbeveling" />
        <SgsResults />
        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#wat-is" className="hover:underline">Wat doet een 4-in-1 kraan?</a></li>
            <li><a href="#vergelijking" className="hover:underline">Vergelijking 2-in-1, 3-in-1, 4-in-1</a></li>
            <li><a href="#ro-integratie" className="hover:underline">RO als 5e functie</a></li>
            <li><a href="#beste-keuze" className="hover:underline">Wanneer kiezen voor 4-in-1+RO?</a></li>
            <li><a href="#installatie" className="hover:underline">Installatie en onderhoud</a></li>
            <li><a href="#kosten" className="hover:underline">Kosten en terugverdientijd</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Wat is */}
        <section id="wat-is">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat doet een 4-in-1 kokend water kraan?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een 4-in-1 kraan combineert de functies van een gewone mengkraan en een
            kokendwaterkraan in één ontwerp. De vier functies zijn:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { temp: '~10 °C', label: 'Koud water', kleur: 'bg-blue-100 text-blue-800' },
              { temp: '~40 °C', label: 'Warm water', kleur: 'bg-orange-100 text-orange-800' },
              { temp: '~90 °C', label: 'Heet water', kleur: 'bg-red-100 text-red-700' },
              { temp: '100 °C', label: 'Kokend water', kleur: 'bg-red-200 text-red-900' },
            ].map(t => (
              <div key={t.label} className={`${t.kleur} rounded-xl p-3 text-center`}>
                <p className="text-2xl font-bold">{t.temp}</p>
                <p className="text-xs font-semibold mt-1">{t.label}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De kraan is verbonden met een geïsoleerde boiler (2–7 liter) onder het aanrecht.
            Deze boiler houdt het water continu op temperatuur via geavanceerde isolatie — het
            energieverbruik in stand-by is vergelijkbaar met een kleine ledlamp (5–10 watt).
          </p>
          <p className="text-gray-700 leading-relaxed">
            Praktische voordelen in het dagelijks leven: thee zetten in seconden, pasta water
            sneller aan de kook door voor-kokend water toe te voegen, instant koffie of
            couscous klaar in de helft van de tijd, en genoeg warm water voor afwassen zonder
            op de boiler te wachten.
          </p>
        </section>

        {/* Vergelijking */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vergelijking: 2-in-1, 3-in-1, 4-in-1 en 4-in-1+RO</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De markt is verwarrend door inconsistent gebruik van termen. Hieronder een heldere
            vergelijking op basis van daadwerkelijke functies.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[500px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Type</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Functies</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Filtratie</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Prijs</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingTypes.map((r, i) => (
                  <tr
                    key={r.type}
                    className={i === vergelijkingTypes.length - 1 ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 font-semibold">{r.type}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.functies}</td>
                    <td className="py-2.5 px-3 text-xs">{r.filtratie}</td>
                    <td className="py-2.5 px-3 text-right">{r.prijs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">Gemarkeerde rij = onze aanbeveling voor wie ook gefilterd water wil.</p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Een 2-in-1 kraan is de meest toegankelijke instap. Maar wie naast kokend water ook
            waterkwaliteit serieus neemt, mist met een 2-in-1 of 3-in-1 de filtratiestap die
            echt het verschil maakt. Chloor verdwijnt bij 100 °C gedeeltelijk, maar kalk,
            nitraten en microplastics doen dat niet.
          </p>
        </section>

        {/* RO integratie */}
        <section id="ro-integratie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">RO als 5e functie: waarom het uitmaakt</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een kokendwaterkraan met een ingebouwde omgekeerde osmose filter voegt filtratie
            toe aan alle temperaturen. Dat heeft vier concrete gevolgen:
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                titel: 'Veel minder kalkaanslag in de boiler',
                tekst: 'Het osmosemembraan haalt het grootste deel van de opgeloste mineralen, waaronder calcium en magnesium, uit het water voordat het wordt verwarmd. Het remineralisatiefilter voegt daarna weer een kleine hoeveelheid mineralen toe. Er bouwt daardoor veel minder kalk op dan bij onbehandeld kraanwater, maar "nooit ontkalken" kunnen we niet beloven: de kalkreductie van de PureAqua 4-in-1 is niet apart gemeten. Volg de onderhoudsinstructies van de fabrikant.',
              },
              {
                titel: 'Betere smaak bij koffie en thee',
                tekst: `Chloor kan de smaak van koffie en thee vlakker maken. In de SGS-test op een nieuw systeem haalde het osmosesysteem van de PureAqua 4-in-1 ${FOUR_IN_ONE.lab.chloor} van het vrije chloor weg, en ${FOUR_IN_ONE.lab.lood} van het lood.`,
              },
              {
                titel: 'Minder PFAS in drink- en kookwater',
                tekst: `Ook het hete en gekoelde water komt door het osmosemembraan. SGS mat bij de PureAqua 4-in-1 ${FOUR_IN_ONE.lab.PFOS} minder PFOS en ${FOUR_IN_ONE.lab.PFOA} minder PFOA (nieuw systeem). Nederlands kraanwater voldoet aan de wettelijke norm; een filter is een extra stap voor wie PFAS verder wil verminderen.`,
              },
              {
                titel: 'Eén systeem, geen extra kraan',
                tekst: 'Een los osmosesysteem naast een kokendwaterkraan betekent vaak een extra kraantje, tenzij je een 3-weg-kraan gebruikt. De 4-in-1 vervangt je bestaande mengkraan en geeft alle functies uit één kraan, dus geen extra kraangat en een rustiger werkblad.',
              },
            ].map(v => (
              <div key={v.titel} className="flex gap-3 items-start">
                <span className="text-[#005F8A] font-bold text-lg mt-0.5 shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">{v.titel}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{v.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Nuance:</strong> Kokend water doodt bacteriën
            effectief via hitte — RO is daarvoor niet nodig. De waarde van RO zit in het
            verwijderen van <em>chemische</em> verontreinigingen (kalk, pesticiden, PFAS,
            nitraten) die hitte niet kan aanpakken.
          </div>
        </section>

        {/* Wanneer kiezen voor 4-in-1+RO */}
        <section id="beste-keuze">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer is een 4-in-1+RO systeem de beste keuze?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een 4-in-1 kraan gecombineerd met ingebouwde omgekeerde osmose is volgens ons het meest complete systeem voor de keuken. Dit zijn de situaties waarin het echt loont:
          </p>
          <div className="bg-gradient-to-br from-[#E0F2FE] to-white rounded-2xl p-6 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  kenmerk: 'Hard water in je gemeente',
                  detail: 'Kalkaanslag in waterkoker, koffiezetapparaat en pan? Omgekeerde osmose haalt het grootste deel van de kalk uit je drink- en kookwater.',
                },
                {
                  kenmerk: 'Je wilt altijd gefilterd water',
                  detail: 'Heet, gekoeld en kamertemperatuur drinkwater gefilterd via osmose, zonder apart kraantje of kan.',
                },
                {
                  kenmerk: 'Voorspelbaar onderhoud',
                  detail: 'Voorfilter en remineralisatiefilter circa jaarlijks, membraan circa elke twee jaar; door osmosewater veel minder kalkaanslag.',
                },
                {
                  kenmerk: 'Geen waterkoker meer',
                  detail: 'Zeer heet water (circa 96 °C) direct uit de kraan vervangt de waterkoker op het aanrecht.',
                },
              ].map(k => (
                <div key={k.kenmerk} className="flex gap-2 items-start">
                  <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">→</span>
                  <div>
                    <p className="font-semibold text-[#003F5C] text-sm">{k.kenmerk}</p>
                    <p className="text-xs text-gray-600">{k.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <CTABanner context="osmose" />
        </section>

        {/* Installatie */}
        <section id="installatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Installatie en onderhoud</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Installatie van een 4-in-1 kraan is een halve dag klus die het beste door een
            installateur wordt gedaan vanwege de elektrische aansluiting van de boiler.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="font-semibold text-[#003F5C] mb-2 text-sm">Installatievereisten</p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>Geaard stopcontact onder aanrecht (230V); bij de PureAqua 4-in-1 twee stuks</li>
                <li>Aansluiting op koudwaterleiding</li>
                <li>Afvoeraansluiting voor RO-spoelwater</li>
                <li>Gat in aanrecht voor de kraan (∅ 35–38 mm)</li>
                <li>Kastruimte voor twee apparaten (PureAqua 4-in-1: circa 23 × 44 × 40 cm en 15 × 38 × 47 cm)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#003F5C] mb-2 text-sm">Onderhoud</p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>Voorfilter en remineralisatiefilter circa jaarlijks</li>
                <li>Osmosemembraan circa elke twee jaar</li>
                <li>Veel minder kalkaanslag dankzij osmosewater (volg de onderhoudsinstructies)</li>
                <li>Kosten filters: gemiddeld circa €150 per jaar (fabrikantprijzen omgerekend)</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Doordat het water eerst door het osmosemembraan gaat, bouwt er in de boiler veel minder kalk op.
            Kokendwaterkranen op hard, ongefilterd leidingwater moeten geregeld worden ontkalkt; bij een
            4-in-1 met osmose is dat veel minder vaak nodig.
          </p>
        </section>

        {/* Kosten */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kosten en terugverdientijd</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een 4-in-1+RO kraan heeft een hogere aanschafprijs dan een eenvoudige waterkoker,
            maar de totale kostenvergelijking over 5–10 jaar laat een ander beeld zien.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[440px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Kostenpost</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Waterkoker</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">4-in-1+RO</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">Aanschaf</td>
                  <td className="py-2.5 px-3 text-right">€ 30–150</td>
                  <td className="py-2.5 px-3 text-right">€ 1.948</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">Flessenwater (gezin)</td>
                  <td className="py-2.5 px-3 text-right">€ 400–600/jr</td>
                  <td className="py-2.5 px-3 text-right text-green-700">€ 0</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">Onderhoud / filter</td>
                  <td className="py-2.5 px-3 text-right">€ 10–20/jr</td>
                  <td className="py-2.5 px-3 text-right">circa € 150 (gemiddeld)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">Ontkalker</td>
                  <td className="py-2.5 px-3 text-right">€ 20–40/jr</td>
                  <td className="py-2.5 px-3 text-right">minder vaak nodig (niet meegerekend)</td>
                </tr>
                <tr className="bg-[#E0F2FE] font-semibold">
                  <td className="py-2.5 px-3">Totaal na 5 jaar</td>
                  <td className="py-2.5 px-3 text-right">€ 2.200–3.300</td>
                  <td className="py-2.5 px-3 text-right text-[#005F8A]">± € 2.663 (zonder ontkalken)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            Bij een gezin dat flessenwater drinkt, is de terugverdientijd van een 4-in-1+RO
            systeem (PureAqua: € 1.948, installatie optioneel € 299) in dit rekenvoorbeeld circa 4 tot 7,5 jaar.
            Daarna is het jaarlijkse kostenvoordeel circa €260 tot €470 ten opzichte van de flessenwater + waterkoker combinatie.
            Ontkalken rekenen we in dat voordeel niet mee, omdat de kalkreductie van de 4-in-1 niet apart gemeten is.
          </p>
        </section>

        {/* CTA banner */}
        <CTABanner context="kokend" />

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'RO-systeem kopen',
                desc: 'Vergelijking van de beste osmose systemen voor thuisgebruik.',
              },
              {
                href: '/kokend-water-kraan',
                title: 'Kokend water kraan overzicht',
                desc: 'Alle types kokendwaterkranen vergeleken op functies, prijs en merk.',
              },
              {
                href: '/omgekeerde-osmose/membraan',
                title: 'RO membraan levensduur',
                desc: 'Wanneer vervang je het membraan? TDS meten en merkvergelijking.',
              },
              {
                href: '/waterfilter/onder-aanrecht',
                title: 'Waterfilter onder aanrecht',
                desc: 'Van carbon block tot RO: alle under-sink filtertypes vergeleken.',
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

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over de 4-in-1 kokend water kraan</h2>
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

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose: hoe het werkt</h3>
              <p className="text-sm text-gray-600">Hoe het osmosefilter in een 4-in-1 kraan werkt, wat het verwijdert en wanneer membraanvervanging nodig is.</p>
            </Link>
            <Link href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF 58 certificering voor osmosefilters</h3>
              <p className="text-sm text-gray-600">Wat NSF 58 betekent voor de filtermodule in een 4-in-1 kraan en welke verontreinigingen gecertificeerd worden verwijderd.</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
