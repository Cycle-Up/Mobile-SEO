import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { PureFilterCTA } from '@/components/PureFilterCTA';
import { FourInOneRecommendation } from '@/components/FourInOneRecommendation';
import { ThreeWayRecommendation } from '@/components/ThreeWayRecommendation';
import { PUREFILTER } from '@/lib/purefilter.mjs';
import { FOUR_IN_ONE, THREE_WAY, KRAAN_MARKET } from '@/lib/kranen.mjs';
import { COUNTERTOP } from '@/lib/countertop.mjs';

const PAGE_TITLE = 'PFAS waterfilter 2026: welke filters werken echt';
const PAGE_URL = 'https://waterfilterplatform.nl/pfas-waterfilter';

// Max 160 tekens; cijfers uit lib/. Ook gebruikt in het Article-schema, daarom met disclosure.
const PAGE_DESCRIPTION = `PFAS waterfilter: osmosekraan ${FOUR_IN_ONE.lab.PFOA} minder PFOA (SGS), leidingfilter ${PUREFILTER.pfasReduction} minder van vijf PFAS (Equinox). Onze keuze per situatie; gelieerd aan PureAqua.`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: `Welk PFAS waterfilter werkt echt? Osmose vermindert PFAS het sterkst: SGS mat bij een nieuw systeem van de ${FOUR_IN_ONE.name} ${FOUR_IN_ONE.lab.PFOS} minder PFOS. Zonder osmose verminderde de ${PUREFILTER.name} (${PUREFILTER.price}) vijf PFAS met ${PUREFILTER.pfasReduction} (Equinox Labs). Beide zijn van PureAqua, waaraan WaterfilterPlatform gelieerd is.`,
    url: PAGE_URL,
    type: 'article',
    locale: 'nl_NL',
  },
};

// Zichtbare FAQ en FAQPage-JSON-LD gebruiken exact dezelfde tekst.
const faqItems = [
  {
    question: 'Welk filter haalt PFAS uit kraanwater?',
    answer:
      `Omgekeerde osmose haalt de meeste PFAS uit kraanwater, ook een deel van de kortketenige stoffen. Een goed koolstoffilter vermindert vooral langketenige PFAS zoals PFOS en PFOA. Gemeten bij producten die wij aanraden: SGS mat bij een nieuw osmosesysteem van de ${FOUR_IN_ONE.name} ${FOUR_IN_ONE.lab.PFOS} minder PFOS en ${FOUR_IN_ONE.lab.PFOA} minder PFOA. Zonder osmose verminderde een nieuwe ${PUREFILTER.name} (${PUREFILTER.price}) bij Equinox Labs vijf PFAS (${PUREFILTER.pfasTested.join(', ')}) met ${PUREFILTER.pfasReduction}. Beide verkoopt PureAqua, waaraan WaterfilterPlatform gelieerd is. Geen enkel filter haalt aantoonbaar elke PFAS-stof weg.`,
  },
  {
    question: 'Is er een PFAS-filter voor op de kraan?',
    answer:
      `Ja, in drie vormen. Een opzetfilter direct op de kraan is klein en het water heeft weinig contacttijd; voor PFAS vonden wij daar weinig gepubliceerd bewijs voor. Een filter op de koude leiding onder het aanrecht, zoals de ${PUREFILTER.name}, filtert het koude water dat uit je gewone kraan komt; een nieuw filter verminderde vijf PFAS met ${PUREFILTER.pfasReduction} (Equinox Labs). Wil je osmosewater uit de kraan, dan kies je een zuiver-water-kraan met een osmosesysteem onder het aanrecht, zoals The Source, of de ${FOUR_IN_ONE.name}, die ook zeer heet en gekoeld water geeft. Osmose is volgens ons de sterkste optie, maar vraagt meer ruimte en installatie.`,
  },
  {
    question: 'Filtert een filterkan (Brita) PFAS?',
    answer:
      'Daar is weinig over bekend. Voor de filterkannen die in Nederland verkocht worden vonden wij weinig onafhankelijk gepubliceerd bewijs over PFAS. Het actieve kool in een filterkan kan een deel van de langketenige PFAS afvangen, maar de contacttijd is kort, het filter raakt snel verzadigd en kortketenige PFAS houdt een gewoon koolfilter minder goed vast dan langketenige; het zeer kortketenige TFA nauwelijks. Noemt een fabrikant PFAS-reductie, kijk dan welke stoffen getest zijn en of dat met een nieuw of gebruikt filter was. Voor PFAS zijn osmose of een getest koolstoffilter op de leiding volgens ons een betere keuze.',
  },
  {
    question: 'Waar koop je een PFAS-filter?',
    answer:
      `Online bij gespecialiseerde waterfilterwinkels en bouwmarkten; osmosesystemen ook via een installateur. Wil je weten hoeveel PFAS een concreet filter haalt, dan heb je een openbaar labrapport of certificaat met PFAS-claim nodig. Dat is er voor twee van de vier filters die wij in deze gids als onze keuze noemen: de ${PUREFILTER.name} (Equinox Labs) en de ${FOUR_IN_ONE.name} (SGS). Voor de zuiver-water-kranen met The Source en het ${COUNTERTOP.shortName} bestaat geen eigen PFAS-meting; daar baseren we onze keuze op de osmosetechniek, niet op een productmeting. Alle vier koop je bij PureFilter.nl en PureAqua.nl. WaterfilterPlatform is gelieerd aan PureAqua. Op onze pagina over een PFAS-filter kopen zetten we de opties en kosten naast elkaar.`,
  },
  {
    question: 'Wat is de wettelijke norm voor PFAS in drinkwater?',
    answer:
      'Sinds januari 2026 geldt in de hele EU een norm van 0,1 microgram per liter (100 nanogram per liter) voor de som van 20 PFAS, uit de Europese drinkwaterrichtlijn 2020/2184. Daarnaast hanteert het RIVM een veel strengere advieswaarde van 4,4 nanogram PFOA-equivalenten per liter. Die advieswaarde is geen wettelijke norm en telt anders: stoffen worden gewogen naar hun giftigheid. Nederlands kraanwater voldoet aan de wettelijke norm.',
  },
  {
    question: 'Is kraanwater in Nederland veilig wat PFAS betreft?',
    answer:
      'Nederlands kraanwater voldoet aan de wettelijke norm en wordt streng gecontroleerd. Op een deel van de plekken ligt de PFAS-waarde wel boven de strengere RIVM-advieswaarde: volgens een analyse van Greenpeace (september 2026) geldt dat voor ongeveer een derde van het drinkwater. Het RIVM noemt voedsel en drinkwater de belangrijkste bronnen van PFAS-inname. Gebruik je water uit een eigen put, dan valt dat niet onder de controle van een drinkwaterbedrijf.',
  },
  {
    question: 'Wat zijn PFAS en waarom heten ze "forever chemicals"?',
    answer:
      'PFAS (per- en polyfluoralkylstoffen) zijn een groep van duizenden synthetische stoffen met een uiterst stabiele koolstof-fluorbinding. Die binding breekt niet af door zonlicht, hitte of biologische processen. Daardoor blijven PFAS heel lang in het milieu en kunnen ze zich ophopen in het lichaam; vandaar de bijnaam "forever chemicals".',
  },
  {
    question: 'Verwijdert een UV-filter of waterontharder PFAS?',
    answer:
      'Nee. UV-licht heeft geen effect op PFAS; het is bedoeld tegen bacteriën en virussen. Een gewone waterontharder (ionenwisselaar voor kalk) verwijdert evenmin PFAS. Vooral een osmosemembraan, nanofiltratie en adsorptie aan actief kool kunnen PFAS verminderen.',
  },
  {
    question: 'Hoe lang gaat een osmosefilter mee voor PFAS-verwijdering?',
    answer:
      `Dat verschilt per systeem en per waterverbruik, dus houd je aan het schema van de fabrikant. Bij de ${FOUR_IN_ONE.name} is dat: ${FOUR_IN_ONE.filters}. Bij The Source is het ${THREE_WAY.filters}. Vervang op tijd: een versleten membraan of verzadigd voorfilter zie of proef je niet, terwijl het wel meer PFAS kan doorlaten. Labresultaten gelden altijd voor een nieuw filter.`,
  },
  {
    question: 'Wat is het verschil tussen PFOS, PFOA en de PFAS-20?',
    answer:
      'PFOS (perfluoroctaansulfonzuur) en PFOA (perfluoroctaanzuur) zijn de twee bekendste en best onderzochte PFAS. De PFAS-20 is de lijst van 20 PFAS die de EU in drinkwater laat meten, waaronder PFOS, PFOA, PFNA en PFHxS. De wettelijke norm van 0,1 microgram per liter geldt voor de som van deze 20 stoffen.',
  },
];

// Kwalitatieve indeling per filtertype (zelfde oordeel als /pfas-waterfilter/kopen). Percentages noemen we
// alleen per product met een eigen labrapport, zie productData hieronder.
const filterData = [
  { methode: 'Omgekeerde osmose (RO)', langketen: 'Sterk', kortketen: 'Grotendeels', aanbevolen: true },
  { methode: 'Nanofiltratie (NF)', langketen: 'Sterk', kortketen: 'Gedeeltelijk', aanbevolen: true },
  { methode: 'Koolstofblok of koolstofvezel op de leiding, met PFAS-labtest', langketen: 'Goed', kortketen: 'Wisselend; zie de geteste stoffen', aanbevolen: true },
  { methode: 'Actief kool zonder PFAS-labtest (blok of granulaat)', langketen: 'Onbekend tot redelijk', kortketen: 'Zwak', aanbevolen: false },
  { methode: 'Filterkan (Brita-type)', langketen: 'Onbekend', kortketen: 'Onbekend', aanbevolen: false },
  { methode: 'UV-lamp', langketen: 'Geen effect', kortketen: 'Geen effect', aanbevolen: false },
];

// Eigen producten met een gemeten labresultaat (lib/purefilter.mjs en lib/kranen.mjs). PureAqua-producten; zie disclosure.
const productData = [
  {
    methode: `${PUREFILTER.name} (filter op de koude leiding, koolstofvezel)`,
    href: PUREFILTER.reviewPath,
    stoffen: PUREFILTER.pfasTested.join(', '),
    resultaat: `${PUREFILTER.pfasReduction} minder, totaal van de vijf geteste PFAS`,
    kosten: `${PUREFILTER.price}, navulfilter ${PUREFILTER.cartridgePrice}`,
    bron: 'Equinox Labs, nieuw filter, gespiked water',
  },
  {
    methode: `${FOUR_IN_ONE.name} (osmose)`,
    href: FOUR_IN_ONE.reviewPath,
    stoffen: 'PFOS, PFOA',
    resultaat: `PFOS ${FOUR_IN_ONE.lab.PFOS}, PFOA ${FOUR_IN_ONE.lab.PFOA} minder`,
    kosten: FOUR_IN_ONE.price,
    bron: `${FOUR_IN_ONE.labReport.lab}, nieuw systeem`,
  },
];

// Keuzetabel bovenaan: onze keuze per situatie. Alleen gemeten cijfers waar een labrapport bestaat.
const choiceRows = [
  {
    situatie: 'Minder PFAS zonder osmose, tank of afvalwater; filter op de koude leiding',
    keuze: PUREFILTER.name,
    href: PUREFILTER.reviewPath,
    gemeten: `Equinox Labs: ${PUREFILTER.pfasReduction} minder van vijf PFAS (nieuw filter)`,
    prijs: PUREFILTER.price,
  },
  {
    situatie: `Maximaal zuiveren, plus zeer heet (${FOUR_IN_ONE.hot.split(';')[0]}) en gekoeld water uit één kraan`,
    keuze: FOUR_IN_ONE.name,
    href: FOUR_IN_ONE.reviewPath,
    gemeten: `${FOUR_IN_ONE.labReport.lab}: PFOS ${FOUR_IN_ONE.lab.PFOS} en PFOA ${FOUR_IN_ONE.lab.PFOA} minder (nieuw systeem)`,
    prijs: FOUR_IN_ONE.price,
  },
  {
    situatie: 'Osmosewater uit je eigen keukenkraan, zonder extra tapkraantje',
    keuze: 'Zuiver-water-kraan met The Source',
    href: THREE_WAY.reviewPath,
    gemeten: 'Geen eigen PFAS-meting; onze keuze rust op de osmosetechniek',
    prijs: `${THREE_WAY.sourcePrice} plus kraan (${THREE_WAY.tapPrice})`,
  },
  {
    situatie: 'Huurwoning of niet boren: osmose op het aanrecht',
    keuze: COUNTERTOP.name,
    href: COUNTERTOP.reviewPath,
    gemeten: 'Geen eigen PFAS-meting; onze keuze rust op de osmosetechniek',
    prijs: COUNTERTOP.price,
  },
];

export default function PfasWaterfilterPage() {
  return (
    <>
      <SchemaOrg
        type="FAQPage"
        faqItems={faqItems}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'PFAS waterfilter', url: PAGE_URL },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          datePublished: '2026-04-25',
          dateModified: '2026-11-10',
          url: PAGE_URL,
          sources: ['RIVM', 'EFSA (2020)', 'IARC (2023)', 'EU-drinkwaterrichtlijn 2020/2184', 'Equinox Labs', 'SGS', 'NOS', 'Reformatorisch Dagblad'],
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#003F5C]">PFAS waterfilter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            {PAGE_TITLE}
          </h1>
          <p className="text-xs text-gray-500 mb-4">
            Laatst bijgewerkt: <time dateTime="2026-11-10">10 november 2026</time>
          </p>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Wil je PFAS uit je kraanwater filteren? Hier lees je welke filtertypes PFAS echt verminderen, wat
            labtests daarover zeggen en welk filter volgens ons bij jouw situatie past. Eerst de nuance: Nederlands
            kraanwater voldoet aan de wettelijke PFAS-norm. Een filter is een keuze voor extra marge, bijvoorbeeld als
            de waarde in jouw regio boven de strengere RIVM-advieswaarde ligt.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#keuze"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Welk PFAS-filter past bij mij?
            </Link>
            <Link
              href="/pfas-waterfilter/kopen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              PFAS-filter kopen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        <div>
          <AuthorBox datePublished="2026-04-25" dateModified="2026-11-10" />
          <QuickAnswer
            question="Welk waterfilter vermindert PFAS?"
            answer={`Omgekeerde osmose vermindert PFAS het sterkst; een goed koolstoffilter helpt vooral tegen langketenige PFAS, filterkannen en UV-lampen nauwelijks of niet. Onze keuze per situatie: wil je maximaal zuiveren plus zeer heet en gekoeld water, dan de ${FOUR_IN_ONE.name} (${FOUR_IN_ONE.labReport.lab}, nieuw systeem: PFOS ${FOUR_IN_ONE.lab.PFOS} en PFOA ${FOUR_IN_ONE.lab.PFOA} minder). Wil je osmosewater uit je eigen kraan, dan een zuiver-water-kraan met The Source (geen eigen PFAS-meting; onze keuze rust op de osmosetechniek). Geen osmose of tank, dan de ${PUREFILTER.name} (${PUREFILTER.price}; Equinox Labs: ${PUREFILTER.pfasReduction} minder van vijf PFAS bij een nieuw filter). Mag je niet boren, dan het ${COUNTERTOP.shortName} op het aanrecht (ook osmose, ook zonder eigen PFAS-meting). Alle vier verkoopt PureAqua, waaraan WaterfilterPlatform gelieerd is.`}
          />
        </div>

        {/* Keuzetabel */}
        <section id="keuze">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onze keuze per situatie</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Percentages noemen we alleen waar een onafhankelijk labrapport van het product zelf bestaat. Prijzen,
            filterkosten en installatie per product zetten we naast elkaar op onze pagina{' '}
            <Link href="/pfas-waterfilter/kopen" className="text-[#005F8A] underline">PFAS-filter kopen</Link>.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-3">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold text-xs">Jouw situatie</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-xs">Onze keuze</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-xs">PFAS-bewijs</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-xs">Prijs</th>
                </tr>
              </thead>
              <tbody>
                {choiceRows.map((row, i) => (
                  <tr key={row.keuze} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 text-xs text-gray-700">{row.situatie}</td>
                    <td className="py-2.5 px-3 text-xs font-medium">
                      <Link href={row.href} className="text-[#005F8A] underline">{row.keuze}</Link>
                    </td>
                    <td className="py-2.5 px-3 text-xs text-gray-700">{row.gemeten}</td>
                    <td className="py-2.5 px-3 text-xs text-gray-600">{row.prijs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-6">
            Alle vier producten verkoopt PureAqua, waaraan WaterfilterPlatform gelieerd is. Labcijfers gelden voor de
            geteste stoffen en een nieuw filter of systeem. Lees ook het <a href={FOUR_IN_ONE.labReport.url} rel="noopener" className="underline">SGS-testrapport (pdf)</a> en
            het <a href={PUREFILTER.labReportUrl} rel="noopener" className="underline">Equinox-testrapport (pdf)</a>.
          </p>
          <PureFilterCTA context="pfas" content="pfas-waterfilter-keuze" />
        </section>

        {/* Actueel */}
        <section className="bg-[#F0F9FF] border border-[#BAE6FD] rounded-2xl p-5 md:p-6">
          <h2 className="text-xl font-bold text-[#003F5C] mb-3">Actueel: PFAS in het nieuws (najaar 2026)</h2>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <li>
              <strong>22 september 2026:</strong> volgens een analyse van Greenpeace ligt de PFAS-waarde in ongeveer een
              derde van het Nederlandse drinkwater boven de RIVM-advieswaarde, met de hoogste waarden onder meer in
              IJmuiden en Zaandam. Het water voldoet wel aan de wettelijke norm. Bron:{' '}
              <a href="https://nos.nl/artikel/2632030" rel="noopener" className="text-[#005F8A] underline">NOS</a>.
            </li>
            <li>
              <strong>September 2026:</strong> de Inspectie Leefomgeving en Transport (ILT) waarschuwt dat PFAS uit
              bestrijdingsmiddelen, zoals het afbraakproduct TFA, een groeiend risico vormen voor drinkwater. TFA is een
              zeer kortketenige PFAS die actief kool slecht vasthoudt. Bron:{' '}
              <a href="https://nos.nl/artikel/2630617" rel="noopener" className="text-[#005F8A] underline">NOS</a>.
            </li>
            <li>
              <strong>30 oktober 2026:</strong> Noord-Holland, Zuid-Holland en Zeeland onderzoeken samen met het
              ministerie van Infrastructuur en Waterstaat en de drinkwaterbedrijven wat PFAS langs de kust betekent voor
              de drinkwaterwinning. Bron:{' '}
              <a href="https://www.rd.nl/a/onderzoek-gevolgen-pfas-in-kustgebied-voor-winning-drinkwater" rel="noopener" className="text-[#005F8A] underline">Reformatorisch Dagblad</a>.
            </li>
          </ul>
          <p className="text-sm text-gray-700 mt-4 leading-relaxed">
            Wil je weten hoe het bij jou zit? Bekijk de{' '}
            <Link href="/kennisbank/pfas-nederland-kaart" className="text-[#005F8A] underline">PFAS-kaart van Nederland</Link>{' '}
            of lees wat het betekent als{' '}
            <Link href="/kennisbank/pfas-kraanwater-boven-rivm-advieswaarde" className="text-[#005F8A] underline">je kraanwater boven de RIVM-advieswaarde zit</Link>.
          </p>
        </section>

        {/* Wat zijn PFAS */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat zijn PFAS?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            PFAS staat voor per- en polyfluoralkylstoffen: een verzamelnaam voor duizenden synthetische stoffen. De
            bekendste zijn PFOS (perfluoroctaansulfonzuur) en PFOA (perfluoroctaanzuur), maar ook GenX, PFNA, PFHxS en
            het zeer kortketenige TFA horen bij de familie. Wat ze gemeen hebben is de extreem stabiele
            koolstof-fluorbinding.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Door die binding breken PFAS nauwelijks af in het milieu. Ze komen in bodem, grondwater, oppervlaktewater en
            in ons lichaam terecht. Daarom worden ze &ldquo;forever chemicals&rdquo; genoemd.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            PFAS zitten of zaten in antiaanbaklagen, impregneersprays, blusschuim, voedselverpakkingen, cosmetica en
            industriële processen. Over de gezondheid zeggen de officiële beoordelaars het volgende. De Europese
            voedselautoriteit EFSA noemt in haar beoordeling uit 2020 een verminderde reactie van het immuunsysteem op
            vaccinaties bij kinderen het meest kritische effect; in haar beoordeling uit 2018 keek EFSA naar een verhoogd
            cholesterolgehalte. Het kankeronderzoeksinstituut IARC van de Wereldgezondheidsorganisatie deelde PFOA in
            2023 in als kankerverwekkend voor mensen en PFOS als mogelijk kankerverwekkend. Die beoordelingen gaan over
            langdurige blootstelling via alle bronnen samen, niet over één glas kraanwater.
          </p>
        </section>

        {/* Normen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">PFAS-normen: wettelijke norm en RIVM-advies</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Sinds januari 2026 geldt de Europese drinkwaterrichtlijn (2020/2184) voor PFAS: de som van 20 PFAS mag niet
            hoger zijn dan <strong>0,1 microgram per liter</strong> (100 nanogram per liter). Dat is de wettelijke norm,
            en Nederlands kraanwater voldoet daaraan.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het RIVM hanteert daarnaast een veel strengere advieswaarde van <strong>4,4 nanogram PFOA-equivalenten per
            liter</strong>. Die is afgeleid van de veilige wekelijkse inname die de Europese voedselautoriteit EFSA in
            2020 vaststelde voor vier PFAS samen. Het is geen wettelijke norm en het telt anders dan de EU-norm: elke stof
            wordt gewogen naar zijn giftigheid.
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-5 mb-4">
            <p className="font-semibold text-[#003F5C] mb-2">Wat betekent dat in de praktijk?</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Water kan dus ruim onder de wettelijke norm blijven en toch boven de RIVM-advieswaarde uitkomen. Het RIVM
              noemt voedsel en drinkwater de belangrijkste bronnen van PFAS-inname. Een filter verlaagt alleen het deel
              dat via drinkwater binnenkomt.
            </p>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Meer over normen en wetgeving lees je op onze pagina <Link href="/pfas-waterfilter/normen-2026" className="text-[#005F8A] underline">PFAS normen 2026</Link>.
          </p>
        </section>

        {/* NL situatie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">PFAS in Nederlands drinkwater: de huidige situatie</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Drinkwaterbedrijven zijn wettelijk verplicht het water te zuiveren en te controleren voordat het je kraan
            bereikt. De PFAS-waarden verschillen wel per regio, vooral waar drinkwater uit rivier- of duinwater wordt
            gemaakt en rond plekken met een geschiedenis van PFAS-uitstoot:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-sm leading-relaxed">
            <li><strong>Dordrecht en omgeving:</strong> historische uitstoot door de Chemours-fabriek (voorheen DuPont).</li>
            <li><strong>Omgeving Schiphol en militaire vliegvelden:</strong> PFAS-houdend blusschuim uit brandoefeningen heeft plaatselijk het grondwater beïnvloed.</li>
            <li><strong>Kustgebied:</strong> provincies en drinkwaterbedrijven onderzoeken wat PFAS langs de kust betekent voor de drinkwaterwinning.</li>
            <li><strong>Eigen putten en bronwater:</strong> niet gecontroleerd door een drinkwaterbedrijf; laat het water zelf testen als je het drinkt.</li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Bekijk per regio de situatie op onze pagina <Link href="/pfas-waterfilter/gebieden-nederland" className="text-[#005F8A] underline">PFAS risicogebieden in Nederland</Link>, of lees hoe je je water kunt laten <Link href="/pfas-waterfilter/testen" className="text-[#005F8A] underline">testen op PFAS</Link>.
          </p>
        </section>

        {/* Filtertabel */}
        <section id="filtertabel">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vergelijking: welke filters verwijderen PFAS?</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Niet elk waterfilter is geschikt om PFAS te filteren. De tabel geeft ons oordeel over zes filtermethoden voor
            langketenige PFAS (zoals PFOS en PFOA) en kortketenige PFAS (zoals GenX en PFBS). Bij koolstoffilters maakt
            het type veel uit: een koolstofblok- of koolstofvezelfilter met een openbare PFAS-labtest raden we aan, een
            koolfilter zonder zo&apos;n test niet.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold text-xs">Filtermethode</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs">Langketenige PFAS</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs">Kortketenige PFAS</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs">Aanbevolen</th>
                </tr>
              </thead>
              <tbody>
                {filterData.map((row, i) => (
                  <tr key={row.methode} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800 text-xs">{row.methode}</td>
                    <td className={`py-2.5 px-2 text-center text-xs font-medium ${row.aanbevolen ? 'text-green-700' : 'text-gray-600'}`}>{row.langketen}</td>
                    <td className={`py-2.5 px-2 text-center text-xs font-medium ${row.aanbevolen ? 'text-green-700' : 'text-red-600'}`}>{row.kortketen}</td>
                    <td className="py-2.5 px-2 text-center text-xs">
                      {row.aanbevolen
                        ? <span className="text-green-700 font-semibold">Ja</span>
                        : <span className="text-red-600">Nee</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-6">Kwalitatief oordeel van de redactie per filtertype, geen meting. Wat een concreet product haalt, lees je alleen af aan een labrapport van dat product. Bijgewerkt november 2026.</p>
          <h3 className="text-lg font-bold text-[#003F5C] mb-3">Gemeten: producten met een eigen PFAS-labtest</h3>
          <div className="overflow-x-auto -mx-4 px-4 mb-3">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold text-xs">Product</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs">Geteste stoffen</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs">Gemeten reductie</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs">Prijs</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs">Bron</th>
                </tr>
              </thead>
              <tbody>
                {productData.map((row, i) => (
                  <tr key={row.methode} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium text-xs">
                      <Link href={row.href} className="text-[#005F8A] underline">{row.methode}</Link>
                    </td>
                    <td className="py-2.5 px-2 text-center text-xs text-gray-700">{row.stoffen}</td>
                    <td className="py-2.5 px-2 text-center text-xs text-gray-700">{row.resultaat}</td>
                    <td className="py-2.5 px-2 text-center text-xs text-gray-600">{row.kosten}</td>
                    <td className="py-2.5 px-2 text-center text-xs text-gray-600">{row.bron}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-6">
            Beide producten zijn van PureAqua, waaraan WaterfilterPlatform gelieerd is. De cijfers gelden voor de
            geteste stoffen en een nieuw filter of systeem; ze zeggen niets over alle PFAS of over een oud filter.
          </p>
          <FourInOneRecommendation content="pfas-waterfilter-aanbeveling" />
        </section>

        {/* Waarom osmose */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom omgekeerde osmose PFAS het best filtert</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een osmosefilter perst water onder druk door een semipermeabel membraan met uiterst kleine poriën. De meeste
            PFAS-moleculen passeren dat membraan niet en worden met het spoelwater afgevoerd.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Osmose houdt langketenige PFAS zoals PFOS en PFOA sterk tegen en ook het grootste deel van de kortketenige
            PFAS. Volgens ons is het daarmee de sterkste PFAS-filter voor thuis. Hoeveel een concreet systeem haalt,
            verschilt per membraan en per stof. Een voorbeeld met eigen meting: SGS mat bij een nieuw osmosesysteem van
            de {FOUR_IN_ONE.name} {FOUR_IN_ONE.lab.PFOS} minder PFOS en {FOUR_IN_ONE.lab.PFOA} minder PFOA. Bij
            osmosesystemen met een NSF/ANSI 58-certificaat voor PFOA en PFOS is de reductie onafhankelijk vastgesteld;
            kijk bij andere systemen naar een openbaar labrapport. Losse osmosesystemen onder het aanrecht kosten
            doorgaans {KRAAN_MARKET.underSinkRange}.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Osmose vermindert tegelijk ook stoffen als lood, nitraat, kalk en microplastics. Nadelen: je hebt ruimte en
            een afvoer onder het aanrecht nodig, het systeem gebruikt spoelwater en de filters moeten op tijd vervangen
            worden. Meer uitleg vind je bij <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>{' '}
            en <Link href="/pfas-waterfilter/osmose" className="text-[#005F8A] underline">osmose tegen PFAS</Link>.
          </p>
          <ThreeWayRecommendation content="pfas-waterfilter-aanbeveling" />
          <p className="text-gray-700 mt-4 leading-relaxed text-sm">
            Mag je niet boren of verbouwen, bijvoorbeeld in een huurwoning? Dan is het{' '}
            <Link href={COUNTERTOP.reviewPath} className="text-[#005F8A] underline">{COUNTERTOP.name}</Link> onze keuze:
            omgekeerde osmose op het aanrecht, zonder vaste installatie, voor {COUNTERTOP.price}.
          </p>
        </section>

        {/* Wat NIET werkt */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat werkt niet (of nauwelijks) tegen PFAS?</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-300 pl-4">
              <h3 className="font-semibold text-gray-900 mb-1">Filterkannen (Brita, BWT en andere)</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Over PFAS-reductie door filterkannen is weinig onafhankelijk gepubliceerd. De contacttijd met het actieve kool is kort en kortketenige PFAS houdt actief kool slecht vast. Filterkannen zijn vooral gemaakt voor chloor, kalk en smaak.</p>
            </div>
            <div className="border-l-4 border-red-300 pl-4">
              <h3 className="font-semibold text-gray-900 mb-1">UV-lampen</h3>
              <p className="text-gray-700 text-sm leading-relaxed">UV-licht heeft geen effect op PFAS. UV-filters zijn bedoeld tegen bacteriën en virussen, niet tegen chemische stoffen.</p>
            </div>
            <div className="border-l-4 border-red-300 pl-4">
              <h3 className="font-semibold text-gray-900 mb-1">Koken</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Koken haalt geen PFAS uit water. Bij lang koken verdampt water en stijgt de concentratie in wat overblijft juist een beetje.</p>
            </div>
            <div className="border-l-4 border-yellow-300 pl-4">
              <h3 className="font-semibold text-gray-900 mb-1">Actief koolfilters (granulaat)</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Minder effectief dan koolstofblokfilters en zeker minder dan osmose. Redelijk voor langketenige PFAS, wisselend voor kortketenige. Een verzadigd filter kan bovendien PFAS weer loslaten.</p>
            </div>
          </div>
        </section>

        <HealthDisclaimer />

        <CTABanner context="osmose" />

        {/* Subpagina links */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer lezen over PFAS en waterfilters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/pfas-waterfilter/kopen', label: 'PFAS-filter kopen: onze keuze per situatie' },
              { href: '/pfas-waterfilter/osmose', label: 'Osmose tegen PFAS: alles uitgelegd' },
              { href: '/pfas-waterfilter/vergelijken', label: 'PFAS-filters vergelijken: RO vs koolstof vs NF' },
              { href: '/pfas-waterfilter/kosten', label: 'Kosten PFAS-filter: TCO-berekening 5 jaar' },
              { href: '/pfas-waterfilter/huis', label: 'PFAS filteren thuis: per woningtype' },
              { href: '/pfas-waterfilter/pfas-soorten', label: 'PFAS-soorten: PFOS, PFOA, GenX uitgelegd' },
              { href: '/pfas-waterfilter/testen', label: 'PFAS in je water testen: hoe en waar?' },
              { href: '/pfas-waterfilter/normen-2026', label: 'PFAS normen 2026: EU-limiet uitgelegd' },
              { href: '/pfas-waterfilter/gebieden-nederland', label: 'PFAS hotspots per regio in Nederland' },
              { href: '/pfas-water', label: 'PFAS in drinkwater: risico\'s en normen' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2.5 border border-[#E0F2FE]"
              >
                <span>&#8594;</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over PFAS waterfilters</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-[#003F5C] cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">&#9662;</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <p className="text-gray-500 text-xs mt-4">
          Meer lezen: <Link href="/pfas-water" className="text-[#005F8A] underline">PFAS in drinkwater</Link>, <Link href="/waterfilter/soorten" className="text-[#005F8A] underline">alle soorten waterfilters</Link> en <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose gids</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/stoffen-in-drinkwater/pfas-overzicht", title: "PFAS-stoffen in drinkwater uitgelegd" },
              { href: "/drinkwaternormen/pfas", title: "PFAS-normen in drinkwater" },
              { href: "/filtertechnieken/omgekeerde-osmose", title: "Osmose als effectiefste PFAS-filter" },
              { href: "/keuzehulp/pfas-lood", title: "Keuzehulp bij PFAS en lood" },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors">{l.title}</p>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
