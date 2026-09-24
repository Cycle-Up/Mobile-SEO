import type { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { PUREFILTER } from '@/lib/purefilter.mjs';
import { PUREFILTER_ORG } from '@/lib/pureaqua-products.mjs';

const URL = 'https://waterfilterplatform.nl/purefilter-review';
const PUBLISHED = '2026-05-29';
const MODIFIED = '2026-09-24';

export function generateMetadata(): Metadata {
  const title = 'PureFilter Mineral+ review 2026: labtest, kosten en voor wie het past';
  const description =
    'PureFilter Mineral+ getoetst: inline filter onder het aanrecht, labtest met 83-85% reductie van vijf PFAS, kosten per jaar en eerlijke grenzen van de claims.';
  return {
    title,
    description,
    alternates: { canonical: URL },
    openGraph: { title, description, url: URL, type: 'article', locale: 'nl_NL' },
  };
}

// Elke claim krijgt een expliciete bewijsstatus. Bron van de claims: PureFilter- en
// fabrikantcommunicatie; bewijs: het gepubliceerde Equinox Labs-rapport en officiele registers.
const claims = [
  ['Vermindert PFAS', 'Deels onafhankelijk getest', `Labtest: circa ${PUREFILTER.pfasReduction} reductie van vijf PFAS (PFOA, PFOS, PFHxS, PFHxA en PFBS), in een test met toegevoegde PFAS op een nieuw filter. Dat is geen bewijs voor "alle PFAS", "PFAS-vrij" of werking tot het einde van de filterduur.`],
  ['Verbetert smaak en vermindert chloor', 'Aannemelijk', 'Past technisch bij de koolstofvezellagen in het filter. Smaak blijft persoonlijk.'],
  ['Voegt mineralen toe (Swedish Mineral Rock)', 'Geclaimd, niet gekwantificeerd', 'Zonder milligrammen per liter na filtratie is dit vooral een smaakkenmerk, geen aangetoonde voedingswaarde.'],
  ['Verwijdert 100+ stoffen', 'Niet per stof aangetoond', 'Het labrapport bevat meerdere stofgroepen, maar een complete, publiceerbare stoffenlijst met testcondities ontbreekt nog.'],
  ['Microplastics, zware metalen, fluoride, nitraat, medicijnresten', 'Geclaimd', 'Niet per stof onafhankelijk bevestigd in onze controle. Vraag bij twijfel om het testresultaat voor die ene stof.'],
  ['NSF 42, 53, 61 en 372', 'Getest volgens, niet gecertificeerd', 'De fabrikant spreekt van testen volgens deze normen. Een officiele NSF-listing voor dit model vonden we niet, dus "NSF-gecertificeerd" noemen we het niet.'],
  ['Bacterien en virussen', 'Geen barriere', 'Het labrapport meldt slechts beperkte microbiologische reductie. Gebruik dit filter niet om onveilig water drinkbaar te maken.'],
];

const faqItems = [
  {
    question: 'Wat is PureFilter Mineral+?',
    answer:
      `PureFilter Mineral+ is een compact inline waterfilter dat je onder het aanrecht op de koude waterleiding naar je kraan aansluit. Het werkt met vijf filterlagen, waaronder twee lagen koolstofvezel, en een laag Swedish Mineral Rock die mineralen aan het water afgeeft. Er is geen tank, geen stroom en geen afvalwater nodig. Het filter is gebaseerd op de Tappwater InlinePro SMR en kost bij PureFilter.nl ${PUREFILTER.price} inclusief de eerste cartridge.`,
  },
  {
    question: 'Verwijdert PureFilter Mineral+ PFAS?',
    answer:
      `Het vermindert PFAS aantoonbaar, maar niet volledig. In een onafhankelijke labtest van Equinox Labs (2026) werd circa ${PUREFILTER.pfasReduction} reductie gemeten voor vijf PFAS: PFOA, PFOS, PFHxS, PFHxA en PFBS. Dat was een test op een nieuw filter met water waaraan PFAS waren toegevoegd. Omgekeerde osmose haalt doorgaans meer dan 90 procent van een breed scala aan PFAS weg. Wil je de maximale reductie, dan is osmose de sterkere keuze; wil je een flinke reductie zonder afvalwater en tank, dan is PureFilter een logische optie.`,
  },
  {
    question: 'Wat kost PureFilter Mineral+ per jaar?',
    answer:
      `De aanschaf is ${PUREFILTER.price} inclusief de eerste cartridge. Een cartridge gaat bij 1 tot 3 personen tot 12 maanden mee en bij 4 of meer personen ongeveer 6 maanden, of tot ${PUREFILTER.capacity}, wat het eerst komt. Een vervangcartridge kost volgens opgave rond ${PUREFILTER.cartridgePrice}; controleer de actuele prijs bij PureFilter.nl. Bij volledige capaciteit komt dat neer op minder dan een halve cent per liter.`,
  },
  {
    question: 'Is PureFilter Mineral+ NSF-gecertificeerd?',
    answer:
      'Dat konden we niet bevestigen. De fabrikant meldt dat het filter getest is volgens NSF/ANSI 42, 53, 61 en 372, maar een officiele NSF-listing voor dit model vonden we niet. Het gepubliceerde bewijs is een labrapport van Equinox Labs. Daarom schrijven wij "getest volgens NSF-normen volgens de fabrikant" en niet "NSF-gecertificeerd".',
  },
  {
    question: 'Werkt PureFilter Mineral+ samen met een Quooker?',
    answer:
      'Het filter wordt op de koude toevoer geplaatst. Welke waterstromen van een kokendwaterkraan daardoor gefilterd worden, hangt af van het model, het reservoir, een eventuele CUBE en hoe de leidingen in jouw keuken lopen. Bij sommige configuraties gaat bijvoorbeeld de warme toevoer niet door het filter. Laat de aansluiting daarom per situatie controleren voordat je ervan uitgaat dat al het water gefilterd is.',
  },
  {
    question: 'Voor wie is PureFilter Mineral+ niet geschikt?',
    answer:
      'Minder geschikt als je de hoogst haalbare reductie van PFAS of andere stoffen wilt: dan past omgekeerde osmose beter. Ook niet geschikt om microbiologisch onveilig water te behandelen, zoals water uit een eigen put. En als je in een huurwoning niet aan de leidingen onder het aanrecht mag komen, is een filterkan of kraanfilter praktischer. Nederlands kraanwater is op zichzelf veilig; een filter is een keuze voor smaak en minder blootstelling, geen noodzaak.',
  },
];

const specs = [
  ['Type', 'Inline filter onder het aanrecht, op de koude leiding naar de kraan'],
  ['Filteropbouw', '5 lagen: non-woven stof, koolstofvezel (2 lagen), Swedish Mineral Rock, afsluitende pad'],
  ['Prijs', `${PUREFILTER.price} inclusief eerste cartridge (PureFilter.nl, september 2026)`],
  ['Vervangcartridge', `rond ${PUREFILTER.cartridgePrice} volgens opgave`],
  ['Capaciteit', PUREFILTER.capacity],
  ['Filterduur', '1-3 personen tot 12 maanden, 4+ personen circa 6 maanden'],
  ['Aansluiting', 'standaard 3/8" en 1/2", adapters meegeleverd'],
  ['Werkdruk en temperatuur', '1,5-8,5 bar; 4-38 graden Celsius (alleen koud water)'],
  ['Afmetingen en gewicht', '25,4 x 6,4 cm; circa 1 kg'],
  ['Afvalwater, tank, stroom', 'Geen'],
  ['Garantie en retour', '5 jaar garantie, 40 dagen retour'],
  ['Onderliggend product', 'Tappwater InlinePro SMR'],
];

const compare = [
  ['PFAS-reductie', `circa ${PUREFILTER.pfasReduction} (5 PFAS, labtest)`, 'vaak meer dan 90% (breed)', 'sterk wisselend per merk'],
  ['Afvalwater', 'Nee', 'Ja, spoelwater', 'Nee'],
  ['Installatie', 'Zelf, op koude leiding', 'Onder aanrecht, soms installateur', 'Geen'],
  ['Ruimte', 'Compact', 'Tank en filters nodig', 'Koelkast/aanrecht'],
  ['Mineralen', 'Blijven; SMR voegt toe', 'Grotendeels verwijderd', 'Blijven grotendeels'],
  ['Gebruiksgemak', 'Direct uit de kraan', 'Aparte of 3-weg-kraan', 'Kan bijvullen'],
];

export default function PureFilterReviewPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'PureFilter Mineral+ review 2026: labtest, kosten en voor wie het past',
          description:
            'Review van PureFilter Mineral+ met de onafhankelijke labtest naast de fabrikantclaims, kosten per jaar en een vergelijking met omgekeerde osmose en een filterkan.',
          datePublished: PUBLISHED,
          dateModified: MODIFIED,
          lastReviewed: MODIFIED,
          url: URL,
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          { name: 'PureFilter review', url: URL },
        ]}
      />
      <SchemaOrg
        schema={[
          {
            '@type': 'Product',
            name: 'PureFilter Mineral+',
            description:
              'Inline waterfilter voor onder het aanrecht met koolstofvezel en Swedish Mineral Rock-remineralisatie, gebaseerd op de Tappwater InlinePro SMR.',
            brand: { '@type': 'Brand', name: 'PureFilter' },
            category: 'Waterfilter onder het aanrecht',
            offers: {
              '@type': 'Offer',
              url: PUREFILTER.url,
              price: '149',
              priceCurrency: 'EUR',
              seller: PUREFILTER_ORG,
            },
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:text-[#005F8A]">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>PureFilter review</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PureFilter Mineral+ review: labtest, kosten en voor wie het past
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            <strong>PureFilter Mineral+</strong> is een compact filter dat je onder het aanrecht op de koude
            leiding zet. Het vermindert onder meer PFAS en chloor en voegt daarna mineralen toe, zonder tank,
            stroom of afvalwater. In deze review zetten we de onafhankelijke labtest naast de claims, rekenen we
            de kosten door en vergelijken we het met omgekeerde osmose en een filterkan.
          </p>
          <div className="border border-amber-200 bg-amber-50 rounded-lg p-4 text-sm text-gray-800">
            <strong>Eerlijk vooraf:</strong> PureFilter is een merk van PureAqua, waaraan WaterfilterPlatform
            gelieerd is. Koop je via onze links, dan verdient PureAqua daaraan. We beoordelen PureFilter met
            dezelfde bewijsregels als andere merken: wat niet onafhankelijk is aangetoond, noemen we geclaimd.
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed={MODIFIED} sources={['Equinox Labs-rapport', 'US EPA', 'NSF/ANSI-standaarden', 'RIVM']} />
        <AuthorBox datePublished={PUBLISHED} dateModified={MODIFIED} />

        <QuickAnswer
          question="Is PureFilter Mineral+ een goede koop?"
          answer={`Voor wie een flinke PFAS-reductie en beter smakend water wil zonder osmose, tank of afvalwater: ja. In een onafhankelijke labtest verminderde het filter vijf PFAS met circa ${PUREFILTER.pfasReduction}. Het kost ${PUREFILTER.price} inclusief eerste cartridge en je installeert het zelf. Wil je de hoogst haalbare reductie, dan is omgekeerde osmose sterker. NSF-certificering konden we niet bevestigen.`}
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kort oordeel</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-green-200 bg-green-50 p-4">
              <p className="font-semibold text-green-800 mb-2">Sterke punten</p>
              <ul className="text-sm text-gray-700 space-y-1.5 list-disc pl-5">
                <li>Onafhankelijke labtest: circa {PUREFILTER.pfasReduction} minder van vijf veelvoorkomende PFAS</li>
                <li>Geen afvalwater, geen tank en geen stroom nodig</li>
                <li>Mineralen blijven in het water; smaak blijft vol</li>
                <li>Zelf te installeren op de koude leiding onder het aanrecht</li>
                <li>Lage kosten per liter; 5 jaar garantie en 40 dagen retour</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="font-semibold text-gray-800 mb-2">Beperkingen</p>
              <ul className="text-sm text-gray-700 space-y-1.5 list-disc pl-5">
                <li>Minder PFAS-reductie dan omgekeerde osmose</li>
                <li>Geen officiele NSF-certificering gevonden</li>
                <li>&quot;100+ stoffen&quot; is niet per stof aangetoond</li>
                <li>Geen bescherming tegen bacterien of virussen</li>
                <li>Filtert alleen de koude leiding waarop je het aansluit</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt PureFilter Mineral+?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het filter zit tussen de koudwaterafsluiter onder je aanrecht en de slang naar je kraan. Al het koude
            water dat je uit die kraan tapt, gaat eerst door vijf lagen. Twee lagen non-woven stof houden deeltjes
            tegen, twee lagen koolstofvezel binden chloor en organische stoffen zoals PFAS, en een laag Swedish
            Mineral Rock geeft calcium, magnesium en kalium af. Het is dus een koolstoffilter met remineralisatie,
            geen omgekeerde osmose. Daardoor is er geen afvalwater en geen voorraadtank, maar is de reductie ook
            minder breed dan bij een membraan.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Meer over de techniek lees je in onze uitleg over{' '}
            <Link href="/koolstoffilter" className="text-[#005F8A] underline">koolstoffilters</Link>,{' '}
            <Link href="/waterfilter/onder-aanrecht" className="text-[#005F8A] underline">filters onder het aanrecht</Link>{' '}
            en{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Specificaties</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {specs.map(([k, v]) => (
                  <tr key={k} className="border-b border-gray-100 align-top">
                    <th scope="row" className="py-2.5 pr-4 text-left font-semibold text-gray-800 w-1/3">{k}</th>
                    <td className="py-2.5 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Bron: productinformatie van PureFilter.nl en de fabrikant Tappwater (peildatum september 2026).
            Prijzen en specificaties kunnen wijzigen; de productpagina is leidend.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is onafhankelijk getest?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De fabrikant publiceert een rapport van het onafhankelijke laboratorium Equinox Labs (april-mei 2026,
            rapport EQNX:001:W:26:03:12829). Daarin is een InlinePro-filter getest met water waaraan PFAS waren
            toegevoegd. Resultaat: circa {PUREFILTER.pfasReduction} reductie voor vijf PFAS-verbindingen, namelijk
            PFOA, PFOS, PFHxS, PFHxA en PFBS. Daar zitten zowel lange als kortere ketens bij.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Belangrijk om te weten: het rapport geldt voor het geteste monster onder die testcondities. Het zegt
            niets over PFAS die niet getest zijn, zoals het ultrakorte TFA, en niet over de werking aan het einde
            van de filterduur. Het rapport meldt ook dat de microbiologische reductie beperkt is. Je kunt het
            volledige rapport{' '}
            <a
              href={PUREFILTER.labReportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#005F8A] underline"
            >
              hier inzien (pdf, Engels)
            </a>
            .
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ter vergelijking: volgens de Amerikaanse EPA halen omgekeerde osmose en nanofiltratie vaak meer dan 90
            procent van een breed scala aan PFAS weg. Een goed koolstoffilter zit daaronder, maar werkt zonder
            afvalwater. Wat PFAS in Nederlands kraanwater nu betekent, lees je in{' '}
            <Link href="/kennisbank/pfas-kraanwater-boven-rivm-advieswaarde" className="text-[#005F8A] underline">
              PFAS in kraanwater boven de RIVM-advieswaarde
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Claims naast het bewijs</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[600px] text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200 text-left">
                  <th className="py-2.5 px-3 font-bold text-gray-800">Claim</th>
                  <th className="py-2.5 px-3 font-bold text-gray-800">Bewijsstatus</th>
                  <th className="py-2.5 px-3 font-bold text-gray-800">Toelichting</th>
                </tr>
              </thead>
              <tbody>
                {claims.map(([claim, status, uitleg]) => (
                  <tr key={claim} className="border-b border-gray-100 align-top">
                    <td className="py-2.5 px-3 font-semibold text-gray-800">{claim}</td>
                    <td className="py-2.5 px-3 text-gray-700">{status}</td>
                    <td className="py-2.5 px-3 text-gray-600">{uitleg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">PureFilter, osmose of filterkan?</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[600px] text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200 text-left">
                  <th className="py-2.5 px-3 font-bold text-gray-800"></th>
                  <th className="py-2.5 px-3 font-bold text-gray-800">PureFilter Mineral+</th>
                  <th className="py-2.5 px-3 font-bold text-gray-800">Omgekeerde osmose</th>
                  <th className="py-2.5 px-3 font-bold text-gray-800">Filterkan</th>
                </tr>
              </thead>
              <tbody>
                {compare.map(([k, a, b, c]) => (
                  <tr key={k} className="border-b border-gray-100 align-top">
                    <th scope="row" className="py-2.5 px-3 text-left font-semibold text-gray-800">{k}</th>
                    <td className="py-2.5 px-3 text-gray-700">{a}</td>
                    <td className="py-2.5 px-3 text-gray-700">{b}</td>
                    <td className="py-2.5 px-3 text-gray-700">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Kort gezegd: wie het maximale wil, kiest{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>. Wie
            weinig wil investeren of in een huurwoning niets aan de leidingen mag doen, kiest een{' '}
            <Link href="/filterkan" className="text-[#005F8A] underline">filterkan</Link>. PureFilter zit daar
            tussenin: meer gemak en een aangetoonde PFAS-reductie, zonder de nadelen van een osmosesysteem.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat kost het per jaar?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Je betaalt eenmalig {PUREFILTER.price}, inclusief de eerste cartridge. Daarna vervang je de cartridge
            elke 6 tot 12 maanden, afhankelijk van je huishouden, voor rond {PUREFILTER.cartridgePrice}. Een
            cartridge filtert {PUREFILTER.capacity}. Bij volledig gebruik kost gefilterd water daarmee minder dan
            een halve cent per liter. Ter vergelijking: een huishouden dat dagelijks flessenwater koopt, is al snel
            honderden euro&apos;s per jaar kwijt.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Vervang op tijd: een verzadigd koolstoffilter houdt steeds minder tegen. Zet daarom een herinnering
            of neem een vervangabonnement als de verkoper dat aanbiedt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voor wie is het logisch?</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-gray-100 p-4">
              <p className="font-semibold text-gray-800 mb-2">Logische keuze als je</p>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                <li>minder PFAS wilt binnenkrijgen, bijvoorbeeld in West-Nederland</li>
                <li>chloorsmaak of -geur wilt verminderen</li>
                <li>geen afvalwater, tank of extra kraan wilt</li>
                <li>gefilterd water direct uit je gewone kraan wilt</li>
                <li>wilt stoppen met flessenwater</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-100 p-4">
              <p className="font-semibold text-gray-800 mb-2">Kies iets anders als je</p>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                <li>de hoogst haalbare reductie wilt (kies osmose)</li>
                <li>putwater of microbiologisch onzeker water hebt</li>
                <li>kalk wilt aanpakken (kies een <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder</Link>)</li>
                <li>niet aan de leidingen onder het aanrecht mag komen</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Heb je een Quooker of andere kokendwaterkraan?</h2>
          <p className="text-gray-700 leading-relaxed">
            PureFilter zet je op de koude toevoer. Welke waterstromen van je kokendwaterkraan daarmee gefilterd
            worden, verschilt per model, reservoir en leidingroute. Bij sommige configuraties gaat de warme
            toevoer of de aansluiting van een CUBE niet door het filter, en de eigen filters van zo&apos;n systeem
            blijven gewoon nodig. Ga er dus niet vanuit dat al het water gefilterd is, maar laat je aansluiting
            controleren door de verkoper of een installateur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Installatie in het kort</h2>
          <ol className="list-decimal pl-5 space-y-1.5 text-gray-700">
            <li>Draai de koudwaterafsluiter onder het aanrecht dicht.</li>
            <li>Maak de slang tussen afsluiter en kraan los.</li>
            <li>Sluit de meegeleverde slang aan op de afsluiter en op de IN-poort van het filter.</li>
            <li>Sluit de originele kraanslang aan op de OUT-poort.</li>
            <li>Controleer alle koppelingen, open de afsluiter langzaam en spoel het filter door.</li>
          </ol>
          <p className="text-sm text-gray-500 mt-3">
            Twijfel je over je aansluitingen of heb je een kokendwaterkraan, schakel dan een installateur in.
          </p>
        </section>

        <AffiliateCTA
          destination="purefilterMineral"
          campaign="purefilter"
          content="purefilter-review-cta"
          label="Bekijk PureFilter Mineral+ op PureFilter.nl"
          title="PureFilter Mineral+ bekijken"
          sub={`${PUREFILTER.price} inclusief eerste cartridge, 5 jaar garantie en 40 dagen retour. Labtest: circa ${PUREFILTER.pfasReduction} minder van vijf PFAS.`}
        />

        <section className="rounded-2xl border border-gray-100 p-5">
          <h2 className="text-lg font-bold text-[#003F5C] mb-2">Liever de maximale reductie?</h2>
          <p className="text-sm text-gray-700 mb-3">
            Een omgekeerde-osmosesysteem haalt meer weg, maar vraagt meer ruimte en produceert spoelwater. Dan is
            The Source van PureAqua een alternatief.
          </p>
          <AffiliateCTA
            destination="theSource"
            campaign="omgekeerde-osmose"
            content="purefilter-review-alternatief"
            label="Bekijk The Source (omgekeerde osmose)"
            variant="inline"
          />
        </section>

        <HealthDisclaimer />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onze beoordelingsmethode</h2>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm">
            {[
              ['Gebruikte bronnen', 'Productinformatie van PureFilter.nl en Tappwater, het gepubliceerde Equinox Labs-rapport, en onafhankelijke bronnen (EPA, NSF/ANSI-standaarden, RIVM) voor de techniek.'],
              ['Labrapport', 'Ja: Equinox Labs, april-mei 2026, PFAS-reductie voor vijf verbindingen onder testcondities.'],
              ['Certificaten', 'Geen officiele NSF-listing voor dit model gevonden.'],
              ['Laatste controle', 'September 2026. Controleer actuele prijzen en specificaties op de productpagina.'],
              ['Commerciele relatie', 'PureFilter is een merk van PureAqua, waaraan dit platform gelieerd is. Daarom tonen we bij elke claim de bewijsstatus.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}:</strong> {d}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over PureFilter Mineral+</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">v</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['/waterfilter', 'Waterfilter', 'Alle filtertypes en hoe je kiest'],
              ['/pfas-waterfilter', 'Waterfilter en PFAS', 'Welke techniek verwijdert PFAS echt'],
              ['/waterfilter/onder-aanrecht', 'Onder-aanrecht waterfilter', 'Use-cases, installatie en onderhoud'],
              ['/keurmerken/nsf-ansi-42-53', 'NSF/ANSI 42 en 53', 'Wat deze certificeringen betekenen'],
            ].map(([href, t, d]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{t}</p>
                <p className="text-sm text-gray-500">{d}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
