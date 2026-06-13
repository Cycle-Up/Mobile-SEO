import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: 'Waterfilterkan kopen: welke is de beste keuze? Vergelijking 2026',
  description:
    'Welke waterfilterkan kopen in 2026? Vergelijk Brita, BWT, PUR en Laica op filterprestaties, cartridgekosten en NSF-certificering. Inclusief wanneer osmose.',
  alternates: { canonical: 'https://waterfilterplatform.nl/filterkan/kopen' },
  openGraph: {
    title: 'Waterfilterkan kopen — vergelijking 2026',
    description:
      'Vergelijk Brita, BWT, PUR en Laica op filterprestaties, cartridgekosten en NSF-certificering. Plus: 5-jaar kostenvergelijking met osmose en flessenwater.',
    url: 'https://waterfilterplatform.nl/filterkan/kopen',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Welke waterfilterkan is de beste in 2026?',
    answer:
      'Er is geen universeel beste filterkan: de keuze hangt af van je prioriteiten. Voor smaak en koffie scoort BWT (Penguin) het beste dankzij magnesiumtechnologie. Voor de laagste kosten per liter is Brita Maxtra+ de sterkste keuze. Als gezondheidsrelevante filtering (NSF 53) belangrijk is, is PUR de enige optie in het kansegment. Laica is de budgetkampioen voor wie niet gehecht is aan NSF-certificering.',
  },
  {
    question: 'Hoe weet ik wanneer het filter vervangen moet worden?',
    answer:
      'De meeste moderne filterkannen hebben een mechanische of digitale filterwisselindicator. Mechanische modellen (Brita) gebruiken een veer- of flapindicator die na een ingesteld aantal werkingen een seintje geeft. Digitale modellen (BWT Penguin) meten verstreken tijd en tonen een led-indicator. Ontbreekt een indicator? Houd dan bij wanneer je de cartridge hebt geplaatst en wissel na 4–6 weken of 100–150 liter, afhankelijk van de waterhardheid in je gemeente.',
  },
  {
    question: 'Zijn merkloze of goedkope cartridges even goed?',
    answer:
      'Dat verschilt sterk. Sommige merkloze cartridges zijn OEM-producten van dezelfde fabrieken als merkproducten. Anderen zijn inferieure kopieën met minder actief kool of een andere ionenwisselaarhars. Controleer of de alternatieve cartridge NSF-gecertificeerd is op dezelfde normen als het origineel. Zonder certificering accepteer je onbekende filterprestaties. Bij BWT werken vrijwel alleen originele cartridges correct in de Penguin-kan door de magneetafsluiting.',
  },
  {
    question: 'Moet ik per se een NSF-gecertificeerde filterkan kopen?',
    answer:
      'Als je uitsluitend filtert voor smaakverbetering van goed gemeentelijk leidingwater, is NSF 42 afdoende. Heb je specifieke zorgen over lood (oude binnenleidingen), kwik of cysten, kies dan een NSF 53-gecertificeerd product. Woon je in een PFAS-gebied of gebruik je putwater, dan biedt geen enkele filterkan voldoende bescherming — overweeg dan omgekeerde osmose.',
  },
  {
    question: 'Kan ik ook een filterkan met grotere capaciteit kopen?',
    answer:
      'Ja. Filterkannen variëren van 1,5 liter (compacte modellen voor 1 persoon) tot 3,5 liter (gezinsmodellen). Brita XL en BWT Luna zijn voorbeelden van grotere varianten. Let op: een grotere reservoircapaciteit betekent niet altijd een grotere filtercartridge. De filtercapaciteit (in liters per cartridge) blijft hetzelfde. Voor grote huishoudens of dagelijks gebruik van meer dan 5 liter is een onderbouwsysteem met grotere filtercapaciteit praktischer.',
  },
  {
    question: 'Wat kost een filterkan versus osmose over 5 jaar?',
    answer:
      'Over 5 jaar is een filterkan (€300–600 totaal) in aanschaf goedkoper dan een osmose onderbouwsysteem (€500–800). Maar als je flessenwater koopt als alternatief, ben je €2000–3000 kwijt over dezelfde periode. Osmose heeft een hogere initiële investering maar een lagere prijs per liter (€0,04–0,10 per liter vs €0,40–0,60 per liter voor filterkan en €0,30–0,60 per liter voor flessenwater). De terugverdientijd van osmose ten opzichte van flessenwater is 1–2 jaar.',
  },
  {
    question: 'Wanneer is upgraden naar osmose slim?',
    answer:
      'Upgrade naar omgekeerde osmose als: (1) je in een PFAS-risicogebied woont, (2) je putwater hebt met nitraat boven 25 mg/L, (3) je babyvoeding of voeding voor zwangeren bereidt, (4) je extreem hard water hebt (>20°dH) en kalkaanslag in dure apparaten wilt elimineren, of (5) je elke maand meer dan €30 uitgeeft aan flessenwater. De kosten per liter van osmose bedragen €0,04–0,10 — aanzienlijk minder dan flessenwater.',
  },
];

const vijfJaarKosten = [
  {
    systeem: 'Waterfilterkan',
    aanschaf: '€25–60',
    jaarkosten: '€50–100',
    vijfJaar: '€300–560',
    perLiter: '€0,08–0,20',
    highlight: false,
  },
  {
    systeem: 'Osmose onderbouw',
    aanschaf: '€150–350',
    jaarkosten: '€60–150',
    vijfJaar: '€450–1.100',
    perLiter: '€0,04–0,10',
    highlight: true,
  },
  {
    systeem: 'Flessenwater (1,5L)',
    aanschaf: '€0',
    jaarkosten: '€400–600',
    vijfJaar: '€2.000–3.000',
    perLiter: '€0,30–0,60',
    highlight: false,
  },
];

const koopCriteria = [
  {
    criterium: 'Capaciteit (liter)',
    uitleg: '1,5–2,4 L voor 1–2 personen; 3,5 L voor gezinnen. Let op: filtervolume ≠ kaninhoud.',
    icon: '📏',
  },
  {
    criterium: 'Kosten per liter',
    uitleg: 'Bereken: cartridgeprijs ÷ capaciteit (liter). Brita Maxtra+: ~€0,05/L. BWT: ~€0,07/L.',
    icon: '💶',
  },
  {
    criterium: 'NSF-certificering',
    uitleg: 'NSF 42 = smaak/geur. NSF 53 = gezondheidsrisico\'s (lood, kwik). Check de cartridge, niet de kan.',
    icon: '✅',
  },
  {
    criterium: 'Cartridge-indicator',
    uitleg: 'Digitale LED-indicator is nauwkeuriger dan mechanisch systeem. Essentieel bij onregelmatig gebruik.',
    icon: '🔔',
  },
  {
    criterium: 'Materiaal (BPA-vrij)',
    uitleg: 'Alle grote merken zijn tegenwoordig BPA-vrij. Controleer dit bij no-name modellen.',
    icon: '♻️',
  },
  {
    criterium: 'Cartridge-beschikbaarheid',
    uitleg: 'Controleer of cartridges gemakkelijk verkrijgbaar zijn bij supermarkten of online. Brita scoort hier het best.',
    icon: '🛒',
  },
];

const upgradeSituaties = [
  {
    situatie: 'PFAS-regio',
    toelichting: 'Woon je nabij Chemours/DuPont (Dordrecht, Rotterdam-Botlek) of andere PFAS-bronnen? Filterkannen verwijderen PFAS onvoldoende. Osmose verwijdert >95% van PFAS-verbindingen.',
    urgent: true,
  },
  {
    situatie: 'Nitraat privéput',
    toelichting: 'Gebruik je grond- of putwater? Laat het analyseren bij een erkend laboratorium. Bij nitraat boven 25 mg/L is osmose de enige betrouwbare thuisoplossing.',
    urgent: true,
  },
  {
    situatie: 'Babyvoeding',
    toelichting: 'Zuigelingen zijn gevoeliger voor nitraat en bacteriën dan volwassenen. Het RIVM adviseert gekookt leidingwater voor zuigelingen jonger dan 6 maanden. Een filterkan biedt onvoldoende bescherming.',
    urgent: true,
  },
  {
    situatie: 'Hard water >14°dH',
    toelichting: 'Bij waterhardheid boven 14°dH verlaag je kalkaanslag in koffiemachines, stoomovens en waterkokers het best met osmose. Filterkannen verlagen hardheid slechts 30–50% en filtercartridges slijten sneller.',
    urgent: false,
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Filterkan', url: 'https://waterfilterplatform.nl/filterkan' },
  { name: 'Kopen', url: 'https://waterfilterplatform.nl/filterkan/kopen' },
];

export default function FilterkanKopenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterfilterkan kopen: welke is de beste keuze? Vergelijking 2026',
          description:
            'Vergelijk Brita, BWT, PUR en Laica op filterprestaties, cartridgekosten en NSF-certificering. Inclusief wanneer osmose slimmer is.',
          datePublished: '2026-01-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/filterkan/kopen',
        }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-b from-[#E0F2FE] to-white pt-10 pb-6 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/filterkan" className="hover:text-[#005F8A]">Filterkan</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Kopen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Waterfilterkan kopen: welke is de beste keuze?
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-2">
            Een waterfilterkan kopen klinkt eenvoudig, maar er zijn genoeg valkuilen: hoge
            cartridgekosten, ontbrekende NSF-certificering en modellen die niet passen bij je
            waterhardheid of situatie. Deze koopgids helpt je de juiste keuze te maken.
          </p>
          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~7 min leestijd</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />

        {/* Quick Answer */}
        <QuickAnswer answer="Voor de meeste Nederlandse huishoudens is Brita Maxtra+ de beste prijs-kwaliteitskeuze: breed verkrijgbaar, lage cartridgekosten (€5–8) en NSF 42-gecertificeerd. BWT Penguin is de beste keuze voor koffieliefhebbers. PUR is als enige merk NSF 53-gecertificeerd. Gebruik je putwater of woon je in een PFAS-risicogebied? Dan is osmose noodzakelijk." />

        {/* Inhoudsopgave */}
        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#criteria', 'Waarop letten bij een filterkan kopen?'],
              ['#kosten', '5-jaar kostenvergelijking'],
              ['#wanneer-osmose', 'Wanneer upgraden naar osmose?'],
              ['#faq', 'Veelgestelde vragen'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#003F5C] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Intro vergelijking */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe kies je een waterfilterkan in 2026?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De markt voor filterkannen is overzichtelijk: Brita, BWT, PUR en Laica domineren het
            Nederlandse retaillandschap. Toch zijn er grote verschillen in jaarkosten,
            filterprestaties en certificering. Onderstaande gids bespreekt de vijf meest
            relevante criteria.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wil je eerst begrijpen hoe een filterkan technisch werkt en wat ze wel en niet
            verwijderen? Lees dan eerst de{' '}
            <Link href="/filterkan" className="text-[#005F8A] underline hover:no-underline">
              uitlegpagina over waterfilterkannen
            </Link>.
          </p>
        </section>

        {/* Criteria */}
        <section id="criteria">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waarop letten bij een filterkan kopen?
          </h2>
          <div className="space-y-3">
            {koopCriteria.map(item => (
              <div
                key={item.criterium}
                className="flex gap-4 items-start border border-gray-100 rounded-xl p-4 hover:border-[#005F8A]/30 transition-colors"
              >
                <div className="text-2xl shrink-0">{item.icon}</div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{item.criterium}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.uitleg}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Capaciteit uitleg */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-[#003F5C] mb-3">Capaciteit: welke maat past bij jou?</h3>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#003F5C] text-white">
                    <th className="text-left px-4 py-3 font-semibold">Kaninhoud</th>
                    <th className="text-left px-4 py-3 font-semibold">Geschikt voor</th>
                    <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Voorbeeldmodellen</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { inhoud: '1,5–2,0 L', geschikt: '1 persoon, kleine keuken', modellen: 'Brita Marella XL, Laica Stream' },
                    { inhoud: '2,4–2,5 L', geschikt: '2 personen, dagelijks gebruik', modellen: 'Brita Style, BWT Slim' },
                    { inhoud: '3,0–3,5 L', geschikt: 'Gezin 3–4 personen', modellen: 'BWT Penguin 2.7L, Brita XL' },
                  ].map((row, i) => (
                    <tr key={row.inhoud} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-medium text-gray-900">{row.inhoud}</td>
                      <td className="px-4 py-3 text-gray-700">{row.geschikt}</td>
                      <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.modellen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* BPA-vrij en materiaal */}
          <div className="mt-6 bg-[#E0F2FE] border border-[#005F8A]/10 rounded-xl p-5">
            <h3 className="font-bold text-[#003F5C] mb-2">Materiaal: BPA-vrij is standaard, maar check no-name</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Alle Brita-, BWT-, PUR- en Laica-producten zijn BPA-vrij (bisphenol A-vrij). Bij
              merkloze filterkannen van onbekende herkomst — met name via marktplaatsachtige
              platforms — is dit minder zeker. Controleer altijd de productbeschrijving op BPA-vrij
              en kijk of er een CE-markering aanwezig is. De cartridgebehuizing is bij alle grote
              merken gemaakt van foodgrade polypropyleen (PP5) of ABS-plastic.
            </p>
          </div>
        </section>

        {/* 5-jaar kostenvergelijking */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            5-jaar kostenvergelijking: filterkan vs osmose vs flessenwater
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De aanschafprijs van een filterkan lijkt laag, maar de werkelijke kosten over
            meerdere jaren liggen hoger door cartridgevervangingen. Vergelijk je met
            flessenwater, dan is zelfs osmose goedkoper op de lange termijn.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Onderstaande berekening gaat uit van een huishouden van 2 personen met een
            dagelijks drinkwaterverbruik van 3 liter gefilterd water.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Systeem</th>
                  <th className="text-center px-4 py-3 font-semibold">Aanschaf</th>
                  <th className="text-center px-4 py-3 font-semibold">Per jaar</th>
                  <th className="text-center px-4 py-3 font-semibold">5 jaar totaal</th>
                  <th className="text-center px-4 py-3 font-semibold hidden sm:table-cell">Per liter</th>
                </tr>
              </thead>
              <tbody>
                {vijfJaarKosten.map((row, i) => (
                  <tr
                    key={row.systeem}
                    className={
                      row.highlight
                        ? 'bg-[#E0F2FE] border-l-4 border-[#005F8A]'
                        : i % 2 === 0
                        ? 'bg-white'
                        : 'bg-gray-50'
                    }
                  >
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.systeem}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.aanschaf}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.jaarkosten}</td>
                    <td className="px-4 py-3 text-center font-medium text-gray-900">{row.vijfJaar}</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden sm:table-cell">{row.perLiter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            Berekening: 3 L/dag × 365 dagen = ~1.100 L/jaar. Cartridgekosten op basis van 150 L
            per cartridge. Osmose: incl. filtervervanging, excl. hogere waterrekening (marginaal).
            Flessenwater: €0,35/L supermarktprijs.
          </p>
          <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Conclusie:</strong> Een filterkan is de
            goedkoopste instapoptie, maar osmose is goedkoper per liter en biedt significant
            betere zuivering. Als je nu flessenwater koopt, verdient een osmose systeem zichzelf
            in 1 tot 2 jaar terug.
          </div>
          <div className="mt-4">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="inline-block text-[#005F8A] font-semibold text-sm hover:underline"
            >
              Vergelijk osmose systemen → bekijk onze koopgids
            </Link>
          </div>
        </section>

        {/* Wanneer upgraden naar osmose */}
        <section id="wanneer-osmose">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer is upgraden naar osmose slim?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor de meeste Nederlandse huishoudens is een filterkan afdoende voor
            smaakverbetering van goed leidingwater. Er zijn echter specifieke situaties
            waarin een filterkan onvoldoende bescherming biedt en omgekeerde osmose de
            verstandigere keuze is.
          </p>
          <div className="space-y-4">
            {upgradeSituaties.map(item => (
              <div
                key={item.situatie}
                className={`rounded-xl border p-5 ${
                  item.urgent
                    ? 'border-red-200 bg-red-50'
                    : 'border-amber-200 bg-amber-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg shrink-0 mt-0.5">
                    {item.urgent ? '⚠️' : '💡'}
                  </span>
                  <div>
                    <p
                      className={`font-bold mb-1.5 ${
                        item.urgent ? 'text-red-900' : 'text-amber-900'
                      }`}
                    >
                      {item.situatie}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.toelichting}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 p-4 border border-[#005F8A]/20 rounded-xl bg-[#E0F2FE] text-sm">
            <p className="text-[#003F5C] font-semibold mb-1">
              Weet je niet zeker of jouw situatie een filterkan of osmose vereist?
            </p>
            <p className="text-gray-700">
              Bekijk ons overzicht{' '}
              <Link href="/waterfilter/vergelijken" className="text-[#005F8A] underline hover:no-underline">
                waterfilter vergelijken
              </Link>{' '}
              voor een complete beslissingstool op basis van je situatie, waterhardheid en budget.
            </p>
          </div>
        </section>

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/filterkan',
                title: 'Filterkan uitleg & werking',
                desc: 'Hoe een filterkan werkt, wat hij filtert en wanneer hij tekortschiet.',
              },
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Osmose filter kopen',
                desc: 'Complete koopgids voor omgekeerde osmose systemen van €150 tot €500.',
              },
              {
                href: '/waterfilter/vergelijken',
                title: 'Waterfilter vergelijken',
                desc: 'Alle filtersoorten naast elkaar: kosten, zuivering, installatie en onderhoud.',
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

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/filterkan/vs-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Filterkan vs osmosefilter</h3>
            <p className="text-sm text-gray-600">Overweegt u ook een osmosefilter? Vergelijk beide opties voor u koopt.</p>
          </Link>
          <Link href="/filterkan/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Hoe werkt een filterkan?</h3>
            <p className="text-sm text-gray-600">Weet wat u koopt: begrijp de filterprestaties voordat u een keuze maakt.</p>
          </Link>
          <Link href="/keuzehulp/budget" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp: waterfilter op budget</h3>
            <p className="text-sm text-gray-600">Wat is de beste waterfilteroplossing voor uw budget?</p>
          </Link>
          <Link href="/filterkan" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Filterkannengids</h3>
            <p className="text-sm text-gray-600">Het complete overzicht van filterkannnen, merken en modellen.</p>
          </Link>
        </div>
      </section>

        {/* CTA */}
        <AffiliateCTA
          destination="zuiverWaterKranen"
          campaign="omgekeerde-osmose"
          content="filterkan-kopen-cta"
          label="Meer dan een filterkan: osmosesysteem met kraan"
          title="Klaar voor zuiver water uit de kraan?"
          sub="Bekijk de zuiver-water-kranen (osmosesysteem met kraan) bij onze partner PureAqua."
        />

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over waterfilterkan kopen
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details
                key={item.question}
                className="border border-gray-100 rounded-xl p-4 group"
              >
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
      </div>
    </>
  );
}
