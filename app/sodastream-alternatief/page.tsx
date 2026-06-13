import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'SodaStream alternatief: opties voor bruisend water',
    description:
      'Bekijk de beste alternatieven voor SodaStream: van onderbouwde carbonators tot 4-in-1 kranen. Vergelijk kosten, gebruiksgemak en duurzaamheid.',
    alternates: { canonical: 'https://waterfilterplatform.nl/sodastream-alternatief' },
    openGraph: {
      title: 'SodaStream alternatief — betere opties voor bruisend water thuis',
      description:
        'SodaStream is handig, maar er zijn alternatieven die goedkoper én handiger zijn. Vergelijk kraansystemen, CO2-kosten en wat het beste past bij jouw situatie.',
      url: 'https://waterfilterplatform.nl/sodastream-alternatief',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is het beste alternatief voor SodaStream?',
    answer:
      'Het beste alternatief voor SodaStream hangt af van je gebruik en budget. Voor mensen die veel bruisend water drinken en ook gefilterd of kokend water willen, is een 4-in-1 kraan met onderbouwde carbonator de meest complete oplossing. Dit type kraan levert bruisend, koud gefilterd, warm en kokend water uit één punt. Over drie jaar is dat doorgaans goedkoper dan continu CO2-patronen kopen.',
  },
  {
    question: 'Is een alternatief voor SodaStream goedkoper?',
    answer:
      'Op lange termijn meestal wel. Een SodaStream-apparaat kost 60 tot 130 euro, maar de CO2-patronen (60 liter per patroon, prijs circa 10–15 euro) stapelen snel op. Bij intensief gebruik zijn de jaarlijkse patronenkosten 40 tot 80 euro of meer. Een 4-in-1 kransysteem heeft hogere aanschafkosten, maar het CO2-systeem in de carbonator levert meer liter per vulling en de totale kosten per liter bruisend water liggen lager na circa twee jaar.',
  },
  {
    question: 'Kan ik SodaStream vervangen door een kraan met bruisend water?',
    answer:
      'Ja. Een onderbouwde carbonator die is gekoppeld aan een 4-in-1 kraan maakt bruisend water direct aan het aanrecht. Je hoeft geen fles te vullen, te schudden of te wisselen — je draait gewoon de kraan open. Bovendien is het water al gefilterd via omgekeerde osmose voordat het wordt gecarboniseerd, wat resulteert in schoner en frisser bruisend water dan SodaStream met gewoon kraanwater.',
  },
  {
    question: 'Wat zijn de nadelen van SodaStream?',
    answer:
      'De voornaamste nadelen van SodaStream zijn: je moet patronen retourneren of kopen, de CO2-patronen zijn duurder per liter dan onderbouwde systemen, je hebt een aparte machine nodig op het aanrecht, je moet flessen vullen en omdraaien, en het water is ongefilterd tenzij je apart filtert. Bij een kransysteem vervalt al die handeling.',
  },
  {
    question: 'Is bruisend water uit een 4-in-1 kraan beter dan SodaStream?',
    answer:
      'Op meerdere punten wel. Een 4-in-1 kraan met ingebouwd osmose filter gebruikt gefilterd water als basis voor het bruisende water. SodaStream gebruikt standaard ongefilterd leidingwater. Bovendien is het carbonisatieniveau bij een kraansysteem consistent instelbaar en hoef je geen flessen te hanteren. De initiële investering is hoger, maar het gebruiksgemak en de kwaliteit zijn doorgaans beter.',
  },
];

const vergelijkingData = [
  {
    systeem: 'SodaStream (Terra / Art)',
    aanschaf: '€ 60–130',
    co2kosten: '€ 10–15 per patroon (60 L)',
    gefilterd: 'Nee (ongefilterd leidingwater)',
    kokend: 'Nee',
    gebruiksgemak: 'Matig (flessen wisselen)',
    jaarKosten: '± € 60–120/jaar patronen',
    highlight: false,
  },
  {
    systeem: '4-in-1 kraan met carbonator',
    aanschaf: '€ 699–899',
    co2kosten: 'Groot CO2-cilinder (± € 30 per vulling, ~300–500 L)',
    gefilterd: 'Ja (osmose ingebouwd)',
    kokend: 'Ja (100°C)',
    gebruiksgemak: 'Uitstekend (direct uit kraan)',
    jaarKosten: '± € 30–60/jaar CO2 + filters',
    highlight: true,
  },
  {
    systeem: 'Bruisend water fles (mineraalwater)',
    aanschaf: '€ 0 (geen apparaat)',
    co2kosten: '€ 0,50–1,50 per liter',
    gefilterd: 'Ja (gebotteld)',
    kokend: 'Nee',
    gebruiksgemak: 'Matig (zware flessen sjouwen)',
    jaarKosten: '± € 150–400/jaar bij dagelijks gebruik',
    highlight: false,
  },
];

export default function SodaStreamAlternatiefPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'SodaStream alternatief: opties voor bruisend water',
          description: 'Bekijk de beste alternatieven voor SodaStream: van onderbouwde carbonators tot 4-in-1 kranen. Vergelijk kosten, gebruiksgemak en duurzaamheid.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/sodastream-alternatief',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'SodaStream alternatief', url: 'https://waterfilterplatform.nl/sodastream-alternatief' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>SodaStream alternatief</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            SodaStream alternatief: beter, goedkoper of handiger?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            SodaStream is een handige manier om thuis bruisend water te maken. Maar wie dagelijks veel bruisend
            water drinkt, merkt dat de CO2-patronen snel oplopen in kosten en gedoe. Er zijn serieuze
            <strong> alternatieven voor SodaStream</strong> die goedkoper zijn, gefilterd water gebruiken
            en geen flessen wisselen vereisen. We leggen de opties naast elkaar.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kennisbank/bruisend-water-thuis"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Bruisend water thuis →
            </Link>
            <Link
              href="/kokend-water-kraan"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Kokend water kraan
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />

        {/* SodaStream uitleg */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt SodaStream?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            SodaStream is een populair apparaat dat je op het aanrecht of in de kast plaatst om water te
            carboniseren — te voorzien van CO2 zodat het bruisend wordt. Het werkt via verwisselbare
            CO2-patronen die je in het apparaat plaatst. Je vult een speciale SodaStream-fles met water,
            schroeft hem in het apparaat en drukt op een knop om CO2 toe te voegen.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold">•</span>
              <p className="text-gray-700">
                <strong>CO2-patronen</strong> — elke patroon levert circa 60 liter bruisend water.
                Patronen kosten 10–15 euro en moeten worden ingeleverd bij een retourpunt.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold">•</span>
              <p className="text-gray-700">
                <strong>Modellen</strong> — SodaStream biedt meerdere modellen zoals de Terra, Art, Duo en
                Source. De Duo is compatibel met glazen flessen. Prijzen liggen tussen 60 en 150 euro.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold">•</span>
              <p className="text-gray-700">
                <strong>Ongefilterd leidingwater</strong> — SodaStream carboniseert wat je erin doet.
                Standaard is dat ongefilterd kraanwater, tenzij je apart filtert.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold">•</span>
              <p className="text-gray-700">
                <strong>Aanrechtruimte</strong> — het apparaat staat op het aanrecht en neemt ruimte in.
                De speciale flessen passen niet in alle koelkasten.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold">•</span>
              <p className="text-gray-700">
                <strong>Geen kokend water</strong> — SodaStream levert uitsluitend bruisend water.
                Voor thee of koffie heb je een andere oplossing nodig.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            SodaStream is handig voor incidenteel gebruik of kleine huishoudens. Bij dagelijks intensief
            gebruik beginnen de kosten en het gedoe echter op te vallen. Dat is het moment waarop veel
            mensen beginnen te zoeken naar een alternatief. Lees onze gids over{' '}
            <Link href="/kennisbank/bruisend-water-thuis" className="text-[#005F8A] underline">bruisend water thuis maken</Link>{' '}
            voor meer achtergrond.
          </p>
        </section>

        {/* Alternatieven sectie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Alternatieven voor SodaStream</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Er zijn twee hoofdcategorieën van alternatieven: onderbouwde carbonators gekoppeld aan een 4-in-1
            kraan, en het kopen van bruisend water in flessen. We bespreken beide opties eerlijk.
          </p>

          <div className="space-y-5">
            {/* Optie 1 */}
            <div className="border border-[#005F8A] bg-[#E0F2FE] rounded-2xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-[#005F8A] text-white text-xs font-bold px-2.5 py-1 rounded-full shrink-0 mt-0.5">Optie 1</span>
                <h3 className="font-bold text-gray-900 text-lg">4-in-1 kraan met onderbouwde carbonator</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                De meest complete oplossing is een 4-in-1 kraan met een geïntegreerde onderbouwde carbonator.
                Het CO2-systeem zit onder het aanrecht, gekoppeld aan een grotere CO2-cilinder (doorgaans
                400–600 gram). Dat levert 300 tot 500 liter bruisend water per vulling — veel meer dan de
                60 liter van een SodaStream-patroon.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Dit type systeem combineert dit met een{' '}
                <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose filter</Link>,
                kokend water en warm water in dezelfde kraan. Je hebt dus geen apart SodaStream-apparaat,
                geen flessen op het aanrecht en geen retourpunten meer nodig. Alles vanuit één kraanpunt.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
                <div className="bg-white rounded-lg p-2.5">+ Bruisend, gefilterd, kokend en warm water in één</div>
                <div className="bg-white rounded-lg p-2.5">+ Geen flessen wisselen of retourneren</div>
                <div className="bg-white rounded-lg p-2.5">+ Lager kostprijs per liter bruisend water</div>
                <div className="bg-white rounded-lg p-2.5">+ Gefilterd water via osmose als basis</div>
                <div className="bg-white rounded-lg p-2.5">- Hogere aanschafprijs</div>
                <div className="bg-white rounded-lg p-2.5">- Installatie nodig (zelf mogelijk)</div>
              </div>
            </div>

            {/* Optie 2 */}
            <div className="border border-gray-200 bg-white rounded-2xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-gray-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shrink-0 mt-0.5">Optie 2</span>
                <h3 className="font-bold text-gray-900 text-lg">Bruisend water in flessen kopen</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                De meest eenvoudige optie: gewoon bruisend mineraalwater kopen in de supermarkt. Geen apparaat,
                geen installatie. Maar bij dagelijks gebruik is dit de duurste optie en de minst duurzame keuze
                vanwege de hoeveelheid plastic of glas.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
                <div className="bg-gray-50 rounded-lg p-2.5">+ Geen aanschafkosten</div>
                <div className="bg-gray-50 rounded-lg p-2.5">+ Direct beschikbaar</div>
                <div className="bg-gray-50 rounded-lg p-2.5">- Duurste optie bij dagelijks gebruik</div>
                <div className="bg-gray-50 rounded-lg p-2.5">- Veel plastic/glas afval</div>
                <div className="bg-gray-50 rounded-lg p-2.5">- Zware flessen sjouwen</div>
                <div className="bg-gray-50 rounded-lg p-2.5">- Geen filtervoordeel</div>
              </div>
            </div>
          </div>
        </section>

        {/* Vergelijkingstabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vergelijkingstabel: SodaStream vs kraan vs fles</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Hieronder vergelijken we de drie opties voor bruisend water thuis naast elkaar. Let op de
            combinatie van aanschaf, loopkosten en gebruiksgemak.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Systeem</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Aanschaf</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">CO2-kosten</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Gefilterd</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Kokend water</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Gebruiksgemak</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingData.map(r => (
                  <tr key={r.systeem} className={`border-b border-gray-100 ${r.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">
                      {r.systeem}
                      {r.highlight && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Aanbevolen</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-700">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.co2kosten}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.gefilterd}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.kokend}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.gebruiksgemak}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Prijzen indicatief op basis van publieke richtprijzen. Bijgewerkt mei 2026.
          </p>
        </section>

        {/* 3-jaar kosten vergelijking */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kostenvergelijking over 3 jaar</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Aanschafprijs is het begin. Over drie jaar bepalen de lopende CO2-kosten, filterkosten en
            eventuele installatiekosten welke optie echt voordeliger is. We rekenen door voor een
            huishouden dat dagelijks circa 2 liter bruisend water drinkt (circa 700 liter per jaar).
          </p>
          <div className="space-y-4">
            {[
              {
                naam: 'SodaStream (intensief gebruik)',
                aanschaf: '€ 100',
                jaar1: '€ 100 + ± € 120 patronen = € 220',
                jaar2: '± € 120 patronen = € 120',
                jaar3: '± € 120 patronen = € 120',
                totaal3jaar: '± € 460',
                highlight: false,
                noot: 'Op basis van 12 patronen per jaar bij dagelijks gebruik door 2 personen.',
              },
              {
                naam: '4-in-1 kraan met carbonator',
                aanschaf: '€ 700–1.000',
                jaar1: '€ 850 + ± € 90 filters + ± € 30 CO2 = € 970',
                jaar2: '± € 90 filters + ± € 30 CO2 = € 120',
                jaar3: '± € 90 filters + ± € 30 CO2 = € 120',
                totaal3jaar: '± € 1.159',
                highlight: true,
                noot: 'Inclusief osmose filters. CO2-cilinder levert 300–500 L per vulling.',
              },
              {
                naam: 'Bruisend water in flessen (supermarkt)',
                aanschaf: '€ 0',
                jaar1: '± € 250–400 per jaar',
                jaar2: '± € 250–400 per jaar',
                jaar3: '± € 250–400 per jaar',
                totaal3jaar: '± € 750–1.200',
                highlight: false,
                noot: 'Bij 700 liter per jaar à € 0,35–0,55 per liter gemiddeld (1,5 L fles).',
              },
            ].map(r => (
              <div
                key={r.naam}
                className={`rounded-2xl border p-5 ${r.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-200 bg-gray-50'}`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="font-bold text-gray-900">{r.naam}</p>
                  <span className={`font-bold shrink-0 text-sm ${r.highlight ? 'text-[#005F8A]' : 'text-gray-700'}`}>
                    {r.totaal3jaar}
                  </span>
                </div>
                <div className="text-xs text-gray-600 space-y-1 mb-2">
                  <p><span className="font-semibold">Jaar 1:</span> {r.jaar1}</p>
                  <p><span className="font-semibold">Jaar 2:</span> {r.jaar2}</p>
                  <p><span className="font-semibold">Jaar 3:</span> {r.jaar3}</p>
                </div>
                <p className="text-xs text-gray-400 italic">{r.noot}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4 text-sm">
            Let op: de 4-in-1 kran is in jaar 1 de duurste keuze door de aanschafkosten. Vanaf jaar 2 liggen
            de lopende kosten lager dan SodaStream bij intensief gebruik. Bovendien krijg je er gefilterd
            drinkwater en kokend water bij — functies die SodaStream niet heeft.
          </p>
        </section>

        {/* Wanneer SodaStream */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer is SodaStream nog steeds de juiste keuze?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We zijn eerlijk: voor bepaalde gebruikers is SodaStream prima. Hier zijn de situaties waarin
            een SodaStream nog steeds logisch is.
          </p>
          <div className="space-y-3">
            {[
              {
                titel: 'Je woont tijdelijk',
                tekst:
                  'Huur je een appartement en wil je niet investeren in een vaste installatie? Dan is een SodaStream op het aanrecht een handige en verplaatsbare oplossing zonder installatiewerk.',
              },
              {
                titel: 'Je drinkt zelden bruisend water',
                tekst:
                  'Gebruik je bruisend water slechts incidenteel, dan is het financieel niet interessant om te investeren in een duur kraansysteem. Een SodaStream terugverdient zich pas bij regelmatig gebruik.',
              },
              {
                titel: 'Je budget is beperkt',
                tekst:
                  'De aanschafprijs van een SodaStream begint bij circa 60 euro. Een complete 4-in-1 kraan kost aanmerkelijk meer. Wie nu niet kan of wil investeren, kan overwegen later over te stappen.',
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

        {/* Wanneer 4-in-1 kraan */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer is een 4-in-1 kraan het betere alternatief?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een 4-in-1 kraan met carbonator is een significante upgrade ten opzichte van SodaStream als
            één of meer van de volgende punten voor jou gelden.
          </p>
          <div className="space-y-3">
            {[
              {
                titel: 'Je drinkt dagelijks bruisend water',
                tekst:
                  'Twee of meer personen die dagelijks bruisend water drinken? Dan zijn de lopende kosten van SodaStream-patronen hoger dan bij een kraansysteem. Over twee tot drie jaar verdient een 4-in-1 kraan zich terug.',
              },
              {
                titel: 'Je wilt ook gefilterd drinkwater',
                tekst:
                  'Een 4-in-1 kraan met ingebouwde omgekeerde osmose filter levert gefilterd, kalkvrij water voor drinken en koken. SodaStream carboniseert ongefilterd kraanwater. De kwaliteit en smaak van het bruisende water zijn bij een gefilterd systeem doorgaans beter.',
              },
              {
                titel: 'Je wilt ook kokend water',
                tekst:
                  'Naast bruisend water wil je ook instant kokend water voor thee, koffie of pasta? Een 4-in-1 kraan levert dat uit hetzelfde kraanpunt. Met SodaStream heb je daar een aparte oplossing voor nodig.',
              },
              {
                titel: 'Je wilt geen gedoe meer met patronen',
                tekst:
                  'Geen retourpunten, geen flessen wisselen, geen patroon bestellen. Een kraansysteem is in gebruik eenvoudiger: gewoon de kraan opendraaien voor bruisend water.',
              },
              {
                titel: 'Je wilt minder plastic',
                tekst:
                  'Zowel SodaStream-patronen als flessen genereren afval. Een 4-in-1 kraan heeft geen wegwerpverpakkingen. Alleen de CO2-cilinder wordt eens per periode bijgevuld of omgewisseld.',
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
            Meer lezen over de 4-in-1 kraan? Bekijk onze gids over{' '}
            <Link href="/kokend-water-kraan/met-filter" className="text-[#005F8A] underline">kokend water kraan met filter</Link>{' '}
            en lees de vergelijking met{' '}
            <Link href="/quooker-alternatief" className="text-[#005F8A] underline">alternatieven voor Quooker</Link>.
          </p>
        </section>

        <CTABanner context="algemeen" />

        {/* Meer lezen */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kennisbank/bruisend-water-thuis', label: 'Bruisend water thuis maken' },
              { href: '/kokend-water-kraan/met-filter', label: 'Kraan met filter en kokend water' },
              { href: '/quooker-alternatief', label: 'Quooker alternatief vergelijken' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose uitleg' },
              { href: '/kokend-water-kraan', label: 'Kokend water kraan: complete gids' },
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

        <AffiliateCTA
          destination="vierInEen"
          campaign="kokend-water"
          content="sodastream-alternatief-cta"
          label="Een 4-in-1 kraan met kokend en gefilterd water"
          title="Liever kokend en gefilterd water uit een kraan?"
          sub="De PureAqua 4-in-1 kraan combineert kokend en gefilterd water uit een kraan. Bekijken kan bij onze partner PureAqua."
        />

        <CTABanner context="algemeen" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over SodaStream alternatieven</h2>
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
            <Link href="/bruisend-water" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Bruisend water</p>
              <p className="text-sm text-gray-500">Bruisend water thuis maken</p>
            </Link>
            <Link href="/vergelijken/kraanwater-vs-flessenwater" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Kraanwater vs flessenwater</p>
              <p className="text-sm text-gray-500">Vergelijking van kraanwater en flessenwater</p>
            </Link>
            <Link href="/waterfilter" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Waterfilter</p>
              <p className="text-sm text-gray-500">Alles over waterfilters voor thuis</p>
            </Link>
            <Link href="/filtertechnieken" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Filtertechnieken</p>
              <p className="text-sm text-gray-500">Uitleg over verschillende filtertechnieken</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
