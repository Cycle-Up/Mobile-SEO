import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SchemaOrg } from '@/components/SchemaOrg';
import { TrustBar } from '@/components/TrustBar';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: 'Welke kokend water kraan is de beste keuze? Vergelijking 2026',
  description:
    'Vergelijk kokend water kranen op prijs, filter, functies en totale kosten over 3 jaar. 4-in-1 osmosekraan, Quooker Combi+, Fusion+CUBE en Grohe Blue Home.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/vergelijken' },
  openGraph: {
    title: 'Welke kokend water kraan is de beste keuze? Vergelijking 2026',
    description: 'Welke kokend water kraan is het beste voor jou? Eerlijke vergelijking op prijs, filter en totale kosten over 3 jaar.',
  },
};

const faqItems = [
  {
    question: 'Wat is de beste kokend water kraan?',
    answer:
      'De beste kokend water kraan hangt af van je prioriteiten. Wil je ook puur, gefilterd water en kost geld geen rol? Kies een 4-in-1 kraan met osmosefilter. Wil je puur kokend water voor een lagere prijs? Dan is een Quooker Combi+ een goede keuze.',
  },
  {
    question: 'Is een 4-in-1 osmosekraan een alternatief voor Quooker?',
    answer:
      'Ja, voor wie gefilterd water belangrijker vindt dan bubbels. Een 4-in-1 kraan met osmose geeft zeer heet (circa 96 graden), gekoeld en osmose-gezuiverd water, maar geen bruisend water zoals een Quooker met CUBE. De PureAqua 4-in-1 kost 1.948 euro; een Quooker Flex PRO3 met CUBE kost bij PureAqua 2.240 euro en filtert met actieve kool, niet met osmose.',
  },
  {
    question: 'Wat kost een kokend water kraan inclusief installatie?',
    answer:
      'Reken voor een Quooker op €1.500–2.800 inclusief professionele installatie. Een 4-in-1 kraan met osmose zoals de PureAqua 4-in-1 kost €1.948, met optionele installatie door PureAqua voor €299. Grohe Blue Home zit lager in prijs maar biedt geen kokend water.',
  },
  {
    question: 'Hoe lang gaan de filters van een kokend water kraan mee?',
    answer:
      'Dat verschilt per systeem. Bij de PureAqua 4-in-1 vervang je voorfilter en remineralisatiefilter circa jaarlijks en het membraan circa elke twee jaar (gemiddeld circa €150 per jaar, fabrikantprijzen omgerekend). Een Quooker CUBE-filter vervang je circa jaarlijks. Grohe Blue Home filters gaan ongeveer 3 maanden mee; dat loopt over 3 jaar op tot honderden euro\'s aan filterkosten.',
  },
  {
    question: 'Verwijdert een kokend water kraan ook kalk?',
    answer:
      'Alleen systemen met een osmosefilter verwijderen kalk effectief. Een 4-in-1 kraan met osmose doet dat: het osmosemembraan haalt het grootste deel van de kalk uit het water. Een Quooker (zonder extra filter) verwijdert geen kalk. Hard water blijft dus aanwezig, wat apparaten sneller slijt.',
  },
];

const itemListSchema = {
  '@type': 'ItemList',
  name: 'Kokend Water Kraan Vergelijken 2026',
  description: 'Vergelijking van 4-in-1 osmosekraan, Quooker Combi+, Quooker Fusion + CUBE en Grohe Blue Home op aanschafprijs, filterkosten en totale kosten over 3 jaar.',
  numberOfItems: 4,
  itemListElement: [
    {
      '@type': 'ListItem', position: 1,
      item: { '@type': 'Product', name: '4-in-1 kraan met osmosefilter', description: 'Warm en koud kraanwater plus gekoeld en zeer heet (circa 96 graden) osmosewater; geen bruisend water', offers: { '@type': 'Offer', priceCurrency: 'EUR', price: '1948.00' } },
    },
    {
      '@type': 'ListItem', position: 2,
      item: { '@type': 'Product', name: 'Quooker Combi+', description: 'Kokend water kraan zonder ingebouwd filter', offers: { '@type': 'AggregateOffer', priceCurrency: 'EUR', lowPrice: '1500', highPrice: '2000', offerCount: '1' } },
    },
    {
      '@type': 'ListItem', position: 3,
      item: { '@type': 'Product', name: 'Quooker Fusion + CUBE', description: 'Kokend, koud en bruisend water met koolstoffilter', offers: { '@type': 'AggregateOffer', priceCurrency: 'EUR', lowPrice: '2200', highPrice: '2800', offerCount: '1' } },
    },
    {
      '@type': 'ListItem', position: 4,
      item: { '@type': 'Product', name: 'Grohe Blue Home', description: 'Gefilterd koud en bruisend kraanwater — geen kokend water', offers: { '@type': 'AggregateOffer', priceCurrency: 'EUR', lowPrice: '450', highPrice: '650', offerCount: '1' } },
    },
  ],
};

const tcoData = [
  {
    naam: '4-in-1 kraan met osmose',
    aanschaf: 1948,
    filters3jr: 410,
    installatie: 299,
    totaal: 2657,
    highlight: true,
    notitie: 'Voor- en remineralisatiefilter jaarlijks, membraan 2-jaarlijks; filters gemiddeld circa €150 per jaar (fabrikantprijzen omgerekend)',
  },
  {
    naam: 'Quooker Combi+',
    aanschaf: 1750,
    filters3jr: 0,
    installatie: 150,
    totaal: 1900,
    highlight: false,
    notitie: 'Geen filter ingebouwd',
  },
  {
    naam: 'Quooker Fusion + CUBE',
    aanschaf: 2500,
    filters3jr: 117,
    installatie: 150,
    totaal: 2767,
    highlight: false,
    notitie: 'CUBE-filter circa jaarlijks (€39)',
  },
  {
    naam: 'Grohe Blue Home',
    aanschaf: 550,
    filters3jr: 360,
    installatie: 75,
    totaal: 985,
    highlight: false,
    notitie: 'Geen kokend water. Filter 3 mnd (€30)',
  },
];

export default function VergelijkenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kokend water kraan', url: 'https://waterfilterplatform.nl/kokend-water-kraan' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/kokend-water-kraan/vergelijken' },
        ]}
      />
      <SchemaOrg schema={[itemListSchema]} />

      <TrustBar />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:text-[#005F8A]">Kokend water kraan</Link>
            <span className="mx-2">/</span>
            <span>Vergelijken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan vergelijken
          </h1>
          <p className="text-gray-600 text-lg">
            Welke kokend water kraan past het beste bij jou? We vergelijken 4-in-1 osmosekranen, Quooker en Grohe eerlijk op prijs, functies en totale kosten over 3 jaar — inclusief filters en installatie.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-14">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer answer="Kokend water kranen vergelijken? De 4-in-1 kraan met osmose is volgens ons de beste prijs-kwaliteit voor wie zuiver water wil (€1.948, filtert kalk, geen bruisend water). Quooker Combi+ is premium (€1.500–2.000, geen filter). Quooker Fusion + CUBE heeft wel bruisend water, filtert niet met osmose en kost over 3 jaar circa €110 meer dan een 4-in-1 alternatief. Grohe Blue Home heeft geen kokend water." />

        {/* Comparison table */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Hoe staan alle merken naast elkaar?</h2>
          <ComparisonTable />
        </section>

        {/* Per-brand deep-dive */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Wat biedt elk merk precies?</h2>
          <div className="space-y-8">

            <div className="border-l-4 border-[#005F8A] pl-5">
              <h3 className="text-xl font-bold text-[#003F5C] mb-2">4-in-1 kraan met osmose — €1.948</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Een geïntegreerde 4-in-1 osmosekraan is volgens ons de meest complete keukenoplossing voor wie zuiver water wil. Met één kraan beschik je over gewoon warm en koud kraanwater plus osmosewater op kamertemperatuur, gekoeld (circa 5°C) en zeer heet (circa 96°C). Bruisend water zit er niet in. Het omgekeerde osmose filter werkt in drie stappen (voorfilter, membraan, remineralisatie); een SGS-labtest op een nieuw systeem mat meer dan 99,6% minder PFOS en meer dan 99,8% minder lood. Osmose biedt geen enkele Quooker standaard.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                De aanschafprijs van €1.948 is inclusief het complete filtersysteem. Ter vergelijking: een Quooker Fusion + CUBE kost €2.200–2.800 en een Quooker Flex PRO3 met CUBE kost bij PureAqua €2.240. Die geven wel bruisend water, maar filteren met actieve kool in plaats van osmose. Het CUBE-filter vervang je circa jaarlijks; bij de 4-in-1 vervang je voorfilter en remineralisatiefilter circa jaarlijks en het membraan circa elke twee jaar.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Installatie door een installateur is aanbevolen: onder de spoelbak komen twee apparaten (heet-/koelunit en osmose-unit) en je hebt twee stopcontacten nodig. PureAqua biedt installatie aan voor €299.
              </p>
            </div>

            <div className="border-l-4 border-gray-200 pl-5">
              <h3 className="text-xl font-bold text-[#003F5C] mb-2">Quooker Combi+ — €1.500–2.000</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                De Quooker Combi+ is de instapprijs kokendwaterkraan van het bekendste merk in Nederland. Quooker heeft een sterke reputatie en het systeem is degelijk gebouwd. De COMBI+ geeft direct kokend water via een geïsoleerd reservoir onder het aanrecht en is al jarenlang de standaard in duurdere keukens.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Maar de Combi+ biedt alleen kokend water. Er zit geen filter in: kalk blijft volledig aanwezig, de smaak van koffie en thee verbetert niet, en apparaten zoals de koffiemachine en waterkoker die je sowieso nog nodig hebt slijten sneller door hard water. Installatie vereist een professionele loodgieter (+€150). Voor wie puur de kookfunctie wil zonder aandacht voor waterkwaliteit.
              </p>
            </div>

            <div className="border-l-4 border-gray-200 pl-5">
              <h3 className="text-xl font-bold text-[#003F5C] mb-2">Quooker Fusion + CUBE — €2.200–2.800</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                De Quooker Fusion + CUBE is Quooker's meest complete systeem: kokend, koud én bruisend water uit één kraan, met een elegante kraanvorm. De CUBE-tank verzorgt het koolzuurhoudende water. Qua functies is dit het dichtst bij een 4-in-1 kraan met osmose, al heeft de Quooker bruisend water en de 4-in-1 niet.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Maar er zijn twee serieuze nadelen. Ten eerste: de prijs — €2.200–2.800 aanschaf plus €150 installatie plus circa jaarlijks een CUBE-filter (€39–49). Over 3 jaar zijn de totale kosten circa €2.770. Ten tweede: de CUBE-filter is een koolstoffilter die geur en chloor verbetert, maar géén osmosefilter. Kalk, nitraten en microplastics worden niet verwijderd. Voor de meerprijs verwacht je meer.
              </p>
            </div>

            <div className="border-l-4 border-gray-200 pl-5">
              <h3 className="text-xl font-bold text-[#003F5C] mb-2">Grohe Blue Home — €400–700</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                De Grohe Blue Home is populair als alternatief voor flessenwater: gefilterd en bruisend water direct uit de kraan. Het koolstoffilter verbetert smaak en geur. In tegenstelling tot de andere systemen op deze pagina biedt de Grohe Blue Home echter géén kokend water.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Wie naast de Grohe Blue Home ook kokend water wil, heeft alsnog een waterkoker of kochend-water-systeem nodig — wat het totaalplaatje duurder maakt. Bovendien is het filter ook hier een koolstoffilter zonder osmosemembraan: kalk blijft in het water. De filterkosten van ~€30 per kwartaal lopen over 3 jaar op tot €360 extra. Beste keuze voor wie een compact bruisend-water systeem zoekt zonder kookfunctie.
              </p>
            </div>
          </div>
        </section>

        {/* TCO section */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-2">Wat zijn de totale kosten over 3 jaar (TCO)?</h2>
          <p className="text-gray-600 mb-6 text-sm">
            De aanschafprijs is slechts een deel van de werkelijke kosten. Filters, installatie en onderhoud tellen mee. Hieronder de eerlijke berekening inclusief alle kosten over 3 jaar.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-4 font-semibold text-[#003F5C]">Systeem</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-right">Aanschaf</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-right">Filters 3 jr</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-right">Installatie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-right">Totaal 3 jr</th>
                </tr>
              </thead>
              <tbody>
                {tcoData.map((r) => (
                  <tr
                    key={r.naam}
                    className={r.highlight ? 'bg-[#005F8A] text-white font-semibold' : 'border-b border-gray-100'}
                  >
                    <td className="py-3 px-4">
                      <span>{r.naam}</span>
                      {r.highlight && (
                        <span className="ml-2 text-xs bg-white text-[#005F8A] px-1.5 py-0.5 rounded font-bold">
                          Onze keuze
                        </span>
                      )}
                      <div className={`text-xs mt-0.5 ${r.highlight ? 'text-blue-200' : 'text-gray-400'}`}>
                        {r.notitie}
                      </div>
                    </td>
                    <td className="py-3 px-3 text-right">€ {r.aanschaf.toLocaleString('nl-NL')}</td>
                    <td className="py-3 px-3 text-right">€ {r.filters3jr.toLocaleString('nl-NL')}</td>
                    <td className="py-3 px-3 text-right">€ {r.installatie.toLocaleString('nl-NL')}</td>
                    <td className="py-3 px-3 text-right font-bold">€ {r.totaal.toLocaleString('nl-NL')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Berekend op middenprijs aanschaf; 4-in-1 inclusief optionele installatie door PureAqua (€299). Grohe Blue Home excl. waterkoker (geen kokend water). PureAqua-prijzen september 2026.
          </p>

          <div className="mt-6 bg-blue-50 border border-[#005F8A]/20 rounded-xl p-4">
            <p className="text-sm text-gray-700 font-medium mb-1">Conclusie TCO</p>
            <p className="text-sm text-gray-600">
              Een 4-in-1 kraan met osmose is in dit overzicht de enige optie die zeer heet water, gekoeld water én osmosefiltratie combineert, voor circa €2.660 over 3 jaar inclusief installatie. De Quooker Fusion + CUBE kost over dezelfde periode circa €110 meer en geeft wel bruisend water, maar filtert niet met osmose.
            </p>
          </div>
        </section>

        {/* Wanneer kies je welk merk */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kies je welk merk?</h2>
          <div className="space-y-3">
            {[
              {
                label: 'Kies 4-in-1 kraan met osmose als...',
                punten: [
                  'Je maximale waterzuivering wilt (osmose, kalk, nitraten)',
                  'Je zeer heet én gekoeld osmosewater wilt uit één kraan (bruisend zit er niet in)',
                  'Je osmosefiltratie wilt voor minder dan een Quooker met CUBE',
                  'Je installatie wilt laten verzorgen (PureAqua biedt dat aan voor €299)',
                ],
                kleur: 'bg-[#005F8A] text-white',
                labelKleur: 'text-blue-200',
              },
              {
                label: 'Kies Quooker Combi+ als...',
                punten: [
                  'Je alleen kokend water wilt, geen filters',
                  'Je de Quooker-merknaam belangrijk vindt',
                  'Je waterkwaliteit geen prioriteit is (zacht watergebied)',
                ],
                kleur: 'bg-gray-50',
                labelKleur: 'text-gray-500',
              },
              {
                label: 'Kies Quooker Fusion + CUBE als...',
                punten: [
                  'Je specifiek de Quooker-naam wilt met bruisend water',
                  'Budget geen rol speelt (circa €2.770 over 3 jaar)',
                  'Je weet dat osmosezuivering voor jou niet nodig is',
                ],
                kleur: 'bg-gray-50',
                labelKleur: 'text-gray-500',
              },
              {
                label: 'Kies Grohe Blue Home als...',
                punten: [
                  'Je geen behoefte hebt aan kokend water',
                  'Je flessenwater wilt vervangen met bruisend gefilterd water',
                  'Je een compact, betaalbaar systeem zoekt',
                ],
                kleur: 'bg-gray-50',
                labelKleur: 'text-gray-500',
              },
            ].map(s => (
              <div key={s.label} className={`rounded-xl p-4 ${s.kleur}`}>
                <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${s.labelKleur}`}>{s.label}</p>
                <ul className="space-y-1">
                  {s.punten.map(p => (
                    <li key={p} className="text-sm flex gap-2">
                      <span className="shrink-0">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <CTABanner context="kokend" />

        {/* Internal links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kokend-water-kraan', label: 'Kokend water kraan: complete gids' },
              { href: '/kokend-water-kraan/met-filter', label: 'Kokend water kraan met filter' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose uitleg' },
              { href: '/kennisbank/kokend-water-kraan-installeren', label: 'Zelf installeren: stap-voor-stap' },
              { href: '/kennisbank/waterfilter-vergelijken', label: 'Waterfilters vergelijken' },
              { href: '/kennisbank/kalk-in-huis', label: 'Kalk in huis: oorzaken en oplossingen' },
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

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
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
            <Link href="/keurmerken/ce-markering" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">CE-markering: veiligheidsnorm vergelijking</h3>
              <p className="text-sm text-gray-600">Welke merken CE-gecertificeerd zijn en hoe CE (EN 61770) de minimale veiligheidseisen per model bepaalt.</p>
            </Link>
            <Link href="/vergelijken/kokend-water-kraan-merken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Uitgebreide merkenvergelijking</h3>
              <p className="text-sm text-gray-600">Quooker vs. Grohe Red vs. PureAqua vs. Franke: complete vergelijking op prijs, capaciteit en filterfunctie.</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
