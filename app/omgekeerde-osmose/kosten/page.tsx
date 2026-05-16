import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Omgekeerde osmose kosten: aanschaf, installatie en jaarkosten',
  description:
    'Wat kost een omgekeerde osmose systeem écht? Volledig overzicht van aanschafkosten, installatiekosten, jaarlijks onderhoud en 5-jaar kostenvergelijking — inclusief ROI vs. flessenwater.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/kosten' },
  openGraph: {
    title: 'Omgekeerde osmose kosten: aanschaf, installatie en jaarkosten',
    description:
      'Budget €150–300, mid-range €300–600, premium €600–1.200. Inclusief installatiekosten en 5-jaar totaalkostenvergelijking voor alle systeemtypen.',
    url: 'https://waterfilterplatform.nl/omgekeerde-osmose/kosten',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoeveel kost een omgekeerde osmose systeem aanschaffen?',
    answer:
      'De aanschafkosten lopen uiteen van €150–300 voor een budgetsysteem, €300–600 voor een mid-range systeem met remineralisatie of UV, €600–1.200 voor een premium systeem met remineralisatie én UV, tot €800–1.500 voor een 4-in-1 kokend water kraan met ingebouwde osmose. De prijs wordt bepaald door het aantal filterstappen, de aanwezigheid van een boostpomp en extra functies.',
  },
  {
    question: 'Wat kost installatie van een omgekeerde osmose filter?',
    answer:
      'Zelfinstallatie kost nagenoeg niets: alleen materiaal (T-stuk, slangen) voor €0–50. Een professionele loodgieter rekent €150–350 afhankelijk van de complexiteit: een eenvoudige onderbouwinstallatie €150–200, een 4-in-1 kraan waarbij een boorgat in het aanrechtblad nodig is €250–350.',
  },
  {
    question: 'Hoeveel zijn de jaarlijkse onderhoudskosten van een osmosefilter?',
    answer:
      'Reken jaarlijks op €60–120 voor sedimentfilter, koolstoffilter en nafilter (elk 6–12 maanden). Het RO-membraan vervangt u elke 2–3 jaar voor €40–80. Een eventuele UV-lamp kost €30–60 per jaar. In totaal: €90–180 per jaar voor een volledig premium systeem met UV.',
  },
  {
    question: 'Wat kost een 4-in-1 kokend water kraan met osmose?',
    answer:
      'Een 4-in-1 kokend water kraan met ingebouwde omgekeerde osmose kost €800–1.500 in aanschaf. De jaarlijkse filterkosten liggen op €80–150 voor een jaarlijkse filterwisseling. Installatie door een professional kost €200–350 als er een boorgat in het aanrechtblad nodig is.',
  },
  {
    question: 'Is een osmosefilter goedkoper dan flessenwater?',
    answer:
      'Ja, op middellange termijn zeker. Een 1,5L fles kost gemiddeld €0,80 in de supermarkt; osmosewater kost slechts €0,01–0,03 per liter inclusief aanschaf en filterkosten over 5 jaar. Een gezin van 4 dat dagelijks 8 liter koopt, spendeert ruim €1.400 per jaar aan flessenwater. Een osmosefilter verdient zichzelf terug in 6–18 maanden.',
  },
  {
    question: 'Wat is de verborgen kostenfactor bij goedkope osmosesystemen?',
    answer:
      'Goedkope systemen (€150–200) produceren veel afvalwater: 3–5 liter per liter schoon water. Dit verhoogt uw waterrekening met €15–40 per jaar. Bovendien zijn sommige filters proprietary en duurder. Een systeem met boostpomp heeft een betere afvalwaterratio (1:1 tot 1:2) en een langer membraanleven, wat op jaarbasis goedkoper is.',
  },
  {
    question: 'Hoe vaak moet het RO-membraan vervangen worden?',
    answer:
      'Gemiddeld elke 2–3 jaar, afhankelijk van de waterkwaliteit en het gebruik. In hardwatergebieden kan het membraan sneller slijten. Meet jaarlijks de TDS-waarde met een goedkope TDS-meter (€5–15): een stijging van &gt;30 ppm boven de beginmeting is een signaal voor membraanvervanging. Een membraan kost €40–80.',
  },
  {
    question: 'Welk osmosesysteem biedt de beste prijs-kwaliteitsverhouding?',
    answer:
      'Voor de meeste gezinnen biedt een mid-range systeem van €300–500 de beste prijs-kwaliteitsverhouding: 97–98% verwijdering, boostpomp, 4–5 filterstappen en lage afvalwaterratio. Wie ook kokend water wil, kiest voor de 4-in-1 kraan die een waterkoker, losse osmose en bruisend water vervangt — hogere aanschafprijs, maar lagere totale kosten.',
  },
];

const tco5jaar = [
  {
    naam: 'Geen filter (kraanwater)',
    aanschaf: 0,
    installatie: 0,
    jaar1: 0,
    jaar2: 0,
    jaar3: 0,
    jaar4: 0,
    jaar5: 0,
    totaal: 0,
    highlight: false,
    noot: 'PFAS, nitraten en kalk aanwezig',
  },
  {
    naam: 'Filterkan (Brita/BWT)',
    aanschaf: 40,
    installatie: 0,
    jaar1: 130,
    jaar2: 220,
    jaar3: 310,
    jaar4: 400,
    jaar5: 490,
    totaal: 490,
    highlight: false,
    noot: 'Filterpatroon ~€18/mnd',
  },
  {
    naam: 'Koolstoffilter onderbouw',
    aanschaf: 100,
    installatie: 0,
    jaar1: 145,
    jaar2: 190,
    jaar3: 235,
    jaar4: 280,
    jaar5: 325,
    totaal: 325,
    highlight: false,
    noot: 'Geen kalk/nitraten verwijderd',
  },
  {
    naam: 'Osmosefilter (mid-range)',
    aanschaf: 400,
    installatie: 0,
    jaar1: 480,
    jaar2: 560,
    jaar3: 650,
    jaar4: 730,
    jaar5: 810,
    totaal: 810,
    highlight: false,
    noot: '97–98% verwijdering, incl. membraanwissel jaar 3',
  },
  {
    naam: '4-in-1 kokend water kraan',
    aanschaf: 1000,
    installatie: 0,
    jaar1: 1115,
    jaar2: 1230,
    jaar3: 1345,
    jaar4: 1460,
    jaar5: 1575,
    totaal: 1575,
    highlight: true,
    noot: 'Vervangt waterkoker + Brita + osmosekraantje',
  },
];

export default function OsmoseKostenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Omgekeerde osmose', url: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
          { name: 'Kosten', url: 'https://waterfilterplatform.nl/omgekeerde-osmose/kosten' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Omgekeerde osmose kosten: aanschaf, installatie en jaarkosten',
          description:
            'Volledig overzicht van aanschafkosten, installatiekosten, jaarlijks onderhoud en 5-jaar kostenvergelijking voor osmosesystemen.',
          datePublished: '2026-04-18',
          url: 'https://waterfilterplatform.nl/omgekeerde-osmose/kosten',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:text-[#005F8A]">Omgekeerde osmose</Link>
            <span className="mx-2">/</span>
            <span>Kosten</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Omgekeerde osmose kosten: aanschaf, installatie en jaarkosten
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            De kosten van een <strong>omgekeerde osmose systeem</strong> bestaan uit meer dan alleen de aanschafprijs.
            Op deze pagina zetten we alle kostenposten op een rij: aanschafprijs per categorie, installatiekosten
            (DIY vs. loodgieter), jaarlijkse onderhoudskosten, de afvalwaterratio en een 5-jaar totaalkostenvergelijking
            voor vijf systemen — inclusief de terugverdientijd versus flessenwater.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#aanschaf"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Aanschafkosten bekijken →
            </Link>
            <Link
              href="/omgekeerde-osmose/prijs"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Prijsvergelijking
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <QuickAnswer answer="Omgekeerde osmose kosten: aanschaf €150–1.500 afhankelijk van type, installatie DIY €0–50 of loodgieter €150–350, jaaronderhoud €60–180 (filters + membraan). Over 5 jaar kost een mid-range osmosefilter ~€810 totaal. Terugverdientijd versus flessenwater: 6–18 maanden." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#aanschaf" className="hover:underline">Aanschafkosten per systeemtype</a></li>
            <li><a href="#installatie" className="hover:underline">Installatiekosten: DIY vs. loodgieter</a></li>
            <li><a href="#onderhoud" className="hover:underline">Jaarlijkse onderhoudskosten</a></li>
            <li><a href="#afvalwater" className="hover:underline">Waterkosten: afvalwaterratio</a></li>
            <li><a href="#tco" className="hover:underline">5-jaar kostenvergelijking</a></li>
            <li><a href="#roi" className="hover:underline">ROI versus flessenwater</a></li>
            <li><a href="#gezinsgrootte" className="hover:underline">Beste keuze per gezinsgrootte</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Aanschafkosten */}
        <section id="aanschaf">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Aanschafkosten per systeemtype: van budget tot premium
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            De aanschafprijs voor een omgekeerde osmose systeem hangt sterk af van het type en de functies.
            We onderscheiden vier categorieën. Let op: een lagere aanschafprijs betekent niet altijd lagere
            totale kosten — goedkope systemen hebben vaak hogere filterkosten of een slechte afvalwaterratio.
          </p>
          <div className="space-y-5">
            {[
              {
                categorie: 'Budget',
                prijs: '€150 – 300',
                beschrijving: '4-traps onderbouwsysteem zonder boostpomp. Sediment + koolstof voor + RO-membraan + koolstof na. Voldoende voor basisfiltratie in een gezin met lage waterdruk.',
                plusjes: ['Laagste aanschafprijs', 'Eenvoudige installatie', 'Universele filtersets beschikbaar'],
                minnen: ['Geen boostpomp: hoge afvalwaterratio (1:3–1:5)', 'Geen remineralisatie', 'Tragere doorstroom'],
                highlight: false,
              },
              {
                categorie: 'Mid-range',
                prijs: '€300 – 600',
                beschrijving: '5–6-traps systeem mét boostpomp en remineralisatiefilter. Betere afvalwaterratio (1:1 tot 1:2), hogere doorstroom en betere smaak dankzij remineralisatie.',
                plusjes: ['Boostpomp voor lage druk', 'Remineralisatie (betere smaak)', 'Goede prijs-kwaliteitsverhouding'],
                minnen: ['Geen UV-desinfectie', 'Hogere aanschaf dan budget'],
                highlight: false,
              },
              {
                categorie: 'Premium met remineralisatie + UV',
                prijs: '€600 – 1.200',
                beschrijving: '6–7-traps systeem met boostpomp, remineralisatiefilter én UV-lamp voor microbiologische veiligheid. Ideaal voor gezinnen met baby\'s of mensen met een verzwakt immuunsysteem.',
                plusjes: ['UV-desinfectie tegen bacteriën', 'Remineralisatie inbegrepen', 'Laagste afvalwaterratio'],
                minnen: ['Jaarlijkse UV-lampvervanging (€30–60)', 'Hogere aanschafprijs'],
                highlight: false,
              },
              {
                categorie: '4-in-1 kokend water kraan met osmose',
                prijs: '€800 – 1.500',
                beschrijving: 'Geïntegreerde 4-in-1 kraan die osmosefiltratie combineert met direct kokend water (100°C), koud gefilterd water en warm water. Vervangt waterkoker, Brita-kan en losse osmosekraantje in één elegante installatie.',
                plusjes: ['Alles in één: osmose + kokend + koud + warm', 'Één jaarlijkse filterwisseling', 'Vervangt meerdere apparaten'],
                minnen: ['Hoogste aanschafprijs', 'Boorgat in aanrechtblad nodig', 'Professionele installatie aanbevolen'],
                highlight: true,
              },
            ].map(s => (
              <div
                key={s.categorie}
                className={`rounded-2xl border p-5 ${s.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{s.categorie}</h3>
                    <p className="text-sm text-gray-500">{s.beschrijving}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-[#005F8A] text-lg">{s.prijs}</p>
                    {s.highlight && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#005F8A] text-white">
                        Aanbevolen
                      </span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mt-3">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1.5 text-xs uppercase tracking-wide">Voordelen</p>
                    <ul className="space-y-0.5">
                      {s.plusjes.map(p => (
                        <li key={p} className="text-green-700 text-sm flex gap-1.5">
                          <span className="shrink-0">✓</span>{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1.5 text-xs uppercase tracking-wide">Aandachtspunten</p>
                    <ul className="space-y-0.5">
                      {s.minnen.map(m => (
                        <li key={m} className="text-gray-500 text-sm flex gap-1.5">
                          <span className="shrink-0">−</span>{m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Installatiekosten */}
        <section id="installatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Installatiekosten: zelf installeren of een loodgieter inschakelen?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De meeste onderbouw osmosesystemen zijn ontworpen voor zelfinstallatie. U sluit het systeem
            aan op de koudwaterafsluiter onder het aanrecht via een T-stuk (snap-fit of compression fitting)
            en leid het afvalwater naar de sifon. Een apart osmosekraantje vereist een klein boorgat in
            het aanrechtblad of de gootsteen. Voor een 4-in-1 kokend water kraan is een professional
            vrijwel altijd de verstandige keuze.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-3">DIY installatie</p>
              <p className="text-xs text-gray-500 mb-3 font-medium">Kosten: €0 – 50 (materialen)</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span>Geen arbeidskosten</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span>Instructievideo beschikbaar bij de meeste merken</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span>30–60 minuten klus voor handig persoon</li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">!</span>Boorgat vereist juiste boor (diamant voor steen)</li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">!</span>Kleine kans op lekkage bij aansluiting</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-3">Professionele installatie</p>
              <p className="text-xs text-gray-500 mb-3 font-medium">Kosten: €150 – 350</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span>Vakkundig geïnstalleerd, garantie op uitvoering</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span>Aanbevolen voor 4-in-1 kraan (graniet/composiet)</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span>Aanpassing leidingwerk mogelijk bij lage druk</li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">!</span>€75–120 per uur voor loodgieter</li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">!</span>€30–60 voorrijkosten extra</li>
              </ul>
            </div>
          </div>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Systeemtype</th>
                  <th className="py-2.5 px-3 font-semibold text-center">DIY</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Loodgieter</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Aanbeveling</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Budget onderbouw', diy: '€ 0–20', pro: '€ 150–200', adv: 'DIY' },
                  { type: 'Mid-range onderbouw', diy: '€ 20–50', pro: '€ 150–250', adv: 'DIY of pro' },
                  { type: 'Premium met UV', diy: '€ 30–50', pro: '€ 200–300', adv: 'Pro aanbevolen' },
                  { type: '4-in-1 kokend water kraan', diy: '€ 30–80 (boor)', pro: '€ 250–350', adv: 'Pro sterk aanbevolen' },
                ].map((r, i) => (
                  <tr key={r.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3">{r.type}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.diy}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.pro}</td>
                    <td className="py-2.5 px-3 text-center text-xs font-medium text-[#005F8A]">{r.adv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Jaarlijkse onderhoudskosten */}
        <section id="onderhoud">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Jaarlijkse onderhoudskosten: filterpatronen en membraan
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Na de aanschaf zijn de jaarlijkse filterkosten de grootste terugkerende kostenpost. Een osmosesysteem
            heeft meerdere filtercomponenten met elk een eigen vervangingsinterval. Het RO-membraan heeft de
            langste levensduur (2–3 jaar) maar de hoogste vervangingsprijs. Sediment- en koolstoffilters
            vervangt u jaarlijks of per 6 maanden, afhankelijk van de waterkwaliteit.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-5">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Component</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Interval</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Kosten</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Jaarkosten</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { comp: 'Sedimentfilter', interval: '6–12 maanden', kosten: '€ 8–20', jaar: '€ 8–20' },
                  { comp: 'Koolstof voorfilter', interval: '6–12 maanden', kosten: '€ 12–25', jaar: '€ 12–25' },
                  { comp: 'RO-membraan', interval: '2–3 jaar', kosten: '€ 40–80', jaar: '€ 15–40' },
                  { comp: 'Koolstof nafilter', interval: '12 maanden', kosten: '€ 12–20', jaar: '€ 12–20' },
                  { comp: 'Remineralisatiefilter', interval: '12 maanden', kosten: '€ 15–30', jaar: '€ 15–30' },
                  { comp: 'UV-lamp', interval: '12 maanden', kosten: '€ 30–60', jaar: '€ 30–60' },
                  { comp: 'Totaal (zonder UV)', interval: '—', kosten: '—', jaar: '€ 62–115' },
                  { comp: 'Totaal (met UV)', interval: '—', kosten: '—', jaar: '€ 92–175' },
                ].map((r, i) => (
                  <tr
                    key={r.comp}
                    className={
                      r.comp.startsWith('Totaal')
                        ? 'bg-[#E0F2FE] font-semibold text-[#003F5C]'
                        : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }
                  >
                    <td className="py-2.5 px-3">{r.comp}</td>
                    <td className="py-2.5 px-3 text-center text-xs text-gray-500">{r.interval}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.kosten}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.jaar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Tip:</strong> Koop bij aanschaf altijd een TDS-meter (€5–15) om de
            membraankwaliteit jaarlijks te controleren. Een TDS-waarde boven 30 ppm meer dan bij ingebruikname
            is een betrouwbaar signaal dat het membraan aan vervanging toe is. Dit voorkomt vroeg vervangen
            (te vroeg = geldverspilling) of te laat vervangen (verminderde waterkwaliteit).
          </div>
        </section>

        {/* Afvalwater */}
        <section id="afvalwater">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waterkosten: de verborgen impact van de afvalwaterratio
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Elk omgekeerde osmose systeem produceert naast schoon water ook concentraatwater (afvalwater)
            dat via de sifon wordt afgevoerd. Moderne systemen hebben een afvalwaterratio van 1:2 tot 1:4,
            wat betekent dat u voor elke liter schoon water 2–4 liter extra waterverbruik heeft. Voor een
            gezin dat dagelijks 6–8 liter filtert, loopt dit op — maar de absolute kosten vallen mee.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            {[
              { ratio: '1:4 (budget)', extra: '8.760 L/jaar', kosten: '€ 14–22/jaar', type: 'Budget (geen pomp)' },
              { ratio: '1:2 (mid-range)', extra: '4.380 L/jaar', kosten: '€ 7–11/jaar', type: 'Mid-range (met pomp)' },
              { ratio: '1:1 (4-in-1)', extra: '2.190 L/jaar', kosten: '€ 4–6/jaar', type: '4-in-1 geoptimaliseerd' },
            ].map(w => (
              <div key={w.ratio} className="bg-gray-50 rounded-xl p-4 text-sm">
                <p className="font-bold text-gray-900 mb-1">{w.type}</p>
                <p className="text-gray-500 text-xs mb-2">Ratio: {w.ratio}</p>
                <p className="text-gray-700">Extra water: <span className="font-semibold">{w.extra}</span></p>
                <p className="text-gray-700">Extra kosten: <span className="font-semibold">{w.kosten}</span></p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Uitgaande van een gemiddeld Nederlands watertarief van ca. €1,60 per m³ zijn de extra
            waterkosten beperkt (€4–22 per jaar). Toch loont het om voor een systeem met boostpomp
            te kiezen: een betere afvalwaterratio verlengt ook de levensduur van het RO-membraan,
            wat de werkelijke besparing vergroot.
          </p>
        </section>

        <CTABanner context="osmose" />

        {/* 5-jaar TCO */}
        <section id="tco">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            5-jaar kostenvergelijking: vijf systemen naast elkaar
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De onderstaande tabel toont de cumulatieve totale eigendomskosten over 5 jaar voor vijf
            systemen: geen filter, filterkan, koolstoffilter, mid-range osmose en de 4-in-1 kokend
            water kraan. Installatiekosten zijn buiten beschouwing gelaten (ga uit van DIY voor de
            eenvoudigere systemen). De osmose- en 4-in-1-kolommen bevatten een membraanwissel in jaar 3.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[600px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Systeem</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Jaar 1</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Jaar 2</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Jaar 3</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Jaar 4</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Jaar 5</th>
                </tr>
              </thead>
              <tbody>
                {tco5jaar.map((r, i) => (
                  <tr
                    key={r.naam}
                    className={r.highlight ? 'bg-[#E0F2FE] font-semibold text-[#003F5C]' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="py-2.5 px-3">
                      <span>{r.naam}</span>
                      <div className="text-xs text-gray-400 font-normal">{r.noot}</div>
                    </td>
                    <td className="py-2.5 px-3 text-center text-xs">€ {r.jaar1}</td>
                    <td className="py-2.5 px-3 text-center text-xs">€ {r.jaar2}</td>
                    <td className="py-2.5 px-3 text-center text-xs">€ {r.jaar3}</td>
                    <td className="py-2.5 px-3 text-center text-xs">€ {r.jaar4}</td>
                    <td className="py-2.5 px-3 text-center text-xs">€ {r.jaar5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-4">
            Cumulatieve kosten inclusief aanschaf en gemiddelde jaarlijkse filterkosten. Membraanwissel in jaar 3
            verwerkt. Installatiekosten niet inbegrepen. Bedragen zijn schattingen op basis van middenklasse producten.
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-4 text-sm text-gray-700">
            <p className="font-semibold text-[#003F5C] mb-2">Wat de tabel laat zien</p>
            <ul className="space-y-1.5">
              <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">→</span>De filterkan lijkt goedkoop, maar kost over 5 jaar meer dan een koolstoffilter.</li>
              <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">→</span>De 4-in-1 kraan heeft hogere aanvangsinvestering maar vervangt waterkoker (€50–80) en Brita-kan (€30–50) — die waarde is hier niet meegerekend.</li>
              <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">→</span>De osmosefilter verwijdert exponentieel meer verontreinigingen dan filterkan of koolstoffilter bij vergelijkbare jaarkosten na jaar 3.</li>
            </ul>
          </div>
        </section>

        {/* ROI vs flessenwater */}
        <section id="roi">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            ROI versus flessenwater: terugverdientijd van een osmosefilter
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Een 1,5 liter flessenwater kost in de supermarkt gemiddeld €0,80. Osmosewater kost — inclusief
            aanschaf, filters en extra waterverbruik verdeeld over de gebruiksduur — slechts <strong>€0,01–0,03 per liter</strong>.
            Voor een gezin van 4 dat dagelijks 8 liter drinkt en kookt, is de rekensom overzichtelijk:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <p className="font-bold text-gray-900 mb-3">Flessenwater (gezin van 4, 8L/dag)</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between"><span>Goedkoop (€0,40/L)</span><span className="font-semibold">€ 1.168 / jaar</span></li>
                <li className="flex justify-between"><span>Gemiddeld (€0,80/1,5L = €0,53/L)</span><span className="font-semibold">€ 1.549 / jaar</span></li>
                <li className="flex justify-between"><span>Premium (€1,00/L)</span><span className="font-semibold">€ 2.920 / jaar</span></li>
                <li className="border-t border-gray-200 pt-2 flex justify-between font-semibold text-gray-900">
                  <span>5 jaar (gem. €0,53/L)</span><span className="text-red-600">€ 7.745</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#E0F2FE] rounded-2xl p-5 border border-[#005F8A]">
              <p className="font-bold text-[#003F5C] mb-3">Osmosefilter (mid-range, 5-traps)</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between"><span>Aanschaf (eenmalig)</span><span className="font-semibold">€ 400</span></li>
                <li className="flex justify-between"><span>Installatie (DIY)</span><span className="font-semibold">€ 25</span></li>
                <li className="flex justify-between"><span>Filterkosten/jaar</span><span className="font-semibold">€ 82</span></li>
                <li className="flex justify-between"><span>Kosten/liter (over 5 jaar)</span><span className="font-semibold">€ 0,02</span></li>
                <li className="border-t border-[#005F8A]/20 pt-2 flex justify-between font-semibold text-[#003F5C]">
                  <span>5 jaar totaal</span><span className="text-green-700">€ 835</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-green-900">Besparing over 5 jaar:</strong> Een osmosefilter bespaart een
            doorsnee gezin van 4 ruim <strong>€6.900</strong> over 5 jaar ten opzichte van gemiddeld flessenwater.
            De terugverdientijd varieert van <strong>6–18 maanden</strong> afhankelijk van het flessenwatermerk.
            Bovendien vermijdt u gemiddeld 3.890 plastic flessen van 1,5L per jaar.
          </div>
        </section>

        {/* Gezinsgrootte */}
        <section id="gezinsgrootte">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welk systeem biedt de beste waarde voor uw gezinsgrootte?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De optimale keuze hangt niet alleen af van de prijs maar ook van het dagelijks waterverbruik.
            Hieronder een richtlijn per gezinsgrootte en gebruiksprofiel.
          </p>
          <div className="space-y-3">
            {[
              {
                profiel: '1–2 personen, laag verbruik',
                aanbeveling: 'Budget osmose (€150–300) of mid-range (€300–400)',
                reden: 'Lager waterverbruik maakt de terugverdientijd iets langer, maar een budgetsysteem voldoet prima. Kies bij voorkeur een systeem met universele filtersets voor lagere jaarkosten.',
              },
              {
                profiel: '3–4 personen, gemiddeld verbruik',
                aanbeveling: 'Mid-range osmose (€300–600) of 4-in-1 kraan',
                reden: 'Het meest voorkomende profiel. Een mid-range systeem met boostpomp en remineralisatie biedt de beste prijs-kwaliteitsverhouding. De 4-in-1 kraan loont als u ook een waterkoker wilt vervangen.',
              },
              {
                profiel: '5+ personen of hoog verbruik',
                aanbeveling: 'Premium osmose of 4-in-1 kraan (€600–1.500)',
                reden: 'Hoog dagelijks verbruik vraagt om een systeem met grote doorstroomcapaciteit (150+ L/uur) en een lage afvalwaterratio. Een boostpomp is hier essentieel om overbelasting van het membraan te voorkomen.',
              },
              {
                profiel: 'Baby of immuungecompromitteerd gezinslid',
                aanbeveling: 'Premium osmose met UV (€600–1.200)',
                reden: 'UV-desinfectie elimineert bacteriën en virussen en is daarmee een essentiële aanvulling op osmosefiltratie. Het voedt vertrouwen bij extra kwetsbare gezinsleden.',
              },
            ].map(g => (
              <div key={g.profiel} className="border border-gray-100 rounded-xl p-4 bg-white">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <p className="font-semibold text-gray-900">{g.profiel}</p>
                  <span className="text-xs bg-[#E0F2FE] text-[#005F8A] font-semibold px-2 py-0.5 rounded-full shrink-0">
                    {g.aanbeveling}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{g.reden}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/omgekeerde-osmose/prijs', label: 'Osmosefilter prijs: aanschapvergelijking' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose: hoe werkt het?' },
              { href: '/waterfilter/best-getest-2026', label: 'Beste waterfilter 2026: getest en vergeleken' },
              { href: '/kokend-water-kraan/vs-quooker', label: 'Kokend water kraan vs Quooker' },
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
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over osmose kosten
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

      </div>
    </>
  );
}
