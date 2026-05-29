import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

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
      'Een 4-in-1 kraan levert vier temperatuurzones uit één kraan: koud leidingwater, warm water (voor thee op ± 60–80 °C), heet water (± 90 °C) en kokend water (100 °C of nagenoeg 100 °C). De kraan is verbonden met een geïsoleerde boiler onder het aanrecht die het water op temperatuur houdt. Sommige modellen bieden ook gefilterd water — dat maakt het technisch een 5-in-1 systeem.',
  },
  {
    question: 'Wat is het verschil tussen 2-in-1, 3-in-1 en 4-in-1 kranen?',
    answer:
      '2-in-1: kokend + koud. 3-in-1: kokend + koud + warm (of kokend + koud + gefilterd). 4-in-1: kokend + koud + warm + heet (of kokend + koud + gefilterd + bruisend). De terminologie is niet gestandaardiseerd — fabrikanten tellen functies soms anders. Let bij aanschaf op de daadwerkelijke temperatuurzones en of filtratie inbegrepen is.',
  },
  {
    question: 'Is een 4-in-1 kraan met RO-filtratie een 5-in-1?',
    answer:
      'Technisch gezien wel. Wanneer een 4-in-1 kraan wordt gekoppeld aan een omgekeerde osmose systeem, levert het koud gefilterd, warm gefilterd, heet gefilterd en kokend gefilterd water — plus eventueel ongefilterd kraanwater als bypass. De term "4-in-1 + RO" geeft aan dat alle vier functies gefilterd zijn via osmose.',
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
      'De boiler en kraanmechaniek zijn ontworpen voor een levensduur van 10–15 jaar. Filterpatronen worden jaarlijks vervangen. De belangrijkste onderhoudsfactor is ontkalking van de boiler — met RO-filtratie is kalkaanslag grotendeels afwezig, wat de levensduur van de boiler significant verlengt ten opzichte van gebruik met onbehandeld leidingwater.',
  },
  {
    question: 'Kan ik een 4-in-1 kraan zelf installeren?',
    answer:
      'Gedeeltelijk. Het mechanische deel (wateraansluiting, filter plaatsen) is in principe doe-het-zelf. De elektrische aansluiting van de boiler (230 V) moet echter worden uitgevoerd door een gecertificeerd elektricien of installateur, conform de Nederlandse Bouwnorm NEN 1010.',
  },
  {
    question: 'Wat kost een 4-in-1 kraan per jaar aan onderhoud?',
    answer:
      'Bij een 4-in-1 systeem met RO-filtratie bestaat het onderhoud uit één jaarlijkse filterwissel van het complete filterpakket. Kosten: €60–100 per jaar voor verbruiksfilters. Geen losse koolstofpatronen, geen apart membraanwissel — alles in één handeling. Dit is significant eenvoudiger dan een losstaand RO-systeem met meerdere filterstappen.',
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
    functies: 'Kokend + koud + warm + heet + gefilterd',
    filtratie: 'RO ingebouwd',
    prijs: '€ 799–1.499',
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
          dateModified: '2026-05-14',
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
            Maar de beste variant gaat nog verder: gecombineerd met een ingebouwde omgekeerde
            osmose filter heb je altijd gefilterd water op elke gewenste temperatuur. Geen
            waterkoker meer. Geen kalkaanslag. Geen plastic flessen.
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
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />
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
          <p className="text-sm text-gray-500">Gemarkeerde rij = aanbevolen keuze voor het beste eindresultaat.</p>
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
                titel: 'Geen kalkaanslag in de boiler',
                tekst: 'RO-water bevat 95–99% minder calcium en magnesium. De boiler hoeft nooit te worden ontkalkt. Dit verlengt de levensduur van de boiler van gemiddeld 8 naar potentieel 15+ jaar.',
              },
              {
                titel: 'Betere smaak bij koffie en thee',
                tekst: 'Gefilterd water bij 90–100 °C geeft koffie en thee een vollere, helderere smaak. Chloor en zware metalen die normaal aromavervlakking veroorzaken zijn volledig afwezig.',
              },
              {
                titel: 'Veiliger voor babymelk en koken',
                tekst: 'Geen nitraten, pesticiden of PFAS in het water dat je gebruikt voor babymelk, soep of koken. Omgekeerde osmose verwijdert deze stoffen voor 95–99%.',
              },
              {
                titel: 'Eén systeem, geen extra kraan',
                tekst: 'Zonder RO heb je bij een apart osmosesysteem een losse osmosekraan naast de kokendwaterkraan. Met een geïntegreerde oplossing heb je één kraan voor alle functies — rustiger op het werkblad.',
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
            Een 4-in-1 kraan gecombineerd met ingebouwde omgekeerde osmose is het meest complete systeem voor de keuken. Dit zijn de situaties waarin het echt loont:
          </p>
          <div className="bg-gradient-to-br from-[#E0F2FE] to-white rounded-2xl p-6 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  kenmerk: 'Hard water in je gemeente',
                  detail: 'Kalkaanslag in waterkoker, koffiezetapparaat en pan? RO verwijdert 95–99% van kalk.',
                },
                {
                  kenmerk: 'Je wilt altijd gefilterd water',
                  detail: 'Alle vier functies gefilterd via osmose membraan — geen aparte kraantje of kan nodig.',
                },
                {
                  kenmerk: 'Eenvoudig onderhoud',
                  detail: 'Één jaarlijkse filterwissel voor het complete systeem — geen losse patronen per fase.',
                },
                {
                  kenmerk: 'Geen waterkoker meer',
                  detail: 'Instant kokend water elimineert de waterkoker van het aanrecht.',
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
                <li>Geaard stopcontact onder aanrecht (230V)</li>
                <li>Aansluiting op koudwaterleiding</li>
                <li>Afvoeraansluiting voor RO-spoelwater</li>
                <li>Gat in aanrecht voor de kraan (∅ 35–38 mm)</li>
                <li>Minimale kastruimte: 30 × 30 × 40 cm</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#003F5C] mb-2 text-sm">Jaarlijks onderhoud</p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>Één filterwissel (alles-in-één patroon)</li>
                <li>Duur: circa 15 minuten doe-het-zelf</li>
                <li>Geen losse patronen, geen gereedschap nodig</li>
                <li>Geen ontkalkingsbeurt dankzij RO-water</li>
                <li>Kosten filter: €60–100 per jaar</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Doordat het water al gefilterd is via RO, is kalkaanslag in de boiler geen issue.
            Systemen die werken op onbehandeld leidingwater moeten de boiler jaarlijks ontkalken —
            een extra onderhoudsstap die bij een 4-in-1+RO systeem overbodig is.
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
                  <td className="py-2.5 px-3 text-right">€ 799–1.299</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">Flessenwater (gezin)</td>
                  <td className="py-2.5 px-3 text-right">€ 400–600/jr</td>
                  <td className="py-2.5 px-3 text-right text-green-700">€ 0</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">Onderhoud / filter</td>
                  <td className="py-2.5 px-3 text-right">€ 10–20/jr</td>
                  <td className="py-2.5 px-3 text-right">€ 60–100/jr</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">Ontkalker</td>
                  <td className="py-2.5 px-3 text-right">€ 20–40/jr</td>
                  <td className="py-2.5 px-3 text-right text-green-700">€ 0</td>
                </tr>
                <tr className="bg-[#E0F2FE] font-semibold">
                  <td className="py-2.5 px-3">Totaal na 5 jaar</td>
                  <td className="py-2.5 px-3 text-right">€ 2.200–3.300</td>
                  <td className="py-2.5 px-3 text-right text-[#005F8A]">€ 1.100–1.800</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            Bij een gezin dat flessenwater drinkt, is de terugverdientijd van een 4-in-1+RO
            systeem doorgaans 2 tot 3 jaar. Daarna is het jaarlijkse kostenvoordeel
            €300–€500 ten opzichte van de flessenwater + waterkoker combinatie.
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
                desc: 'Onafhankelijke vergelijking van de beste osmose systemen voor thuisgebruik.',
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
