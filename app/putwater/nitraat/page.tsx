import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Nitraat in putwater: EU-norm 50 mg/L, baby-risico, filters',
  description:
    'Nitraat in putwater (landbouwgebieden): EU-norm 50 mg/L, blauwe-baby-syndroom, ionenwisseling vs omgekeerde osmose en jaarlijks testen uitgelegd.',
  alternates: { canonical: 'https://waterfilterplatform.nl/putwater/nitraat' },
};

const faqItems = [
  {
    q: 'Wat is de EU-norm voor nitraat in drinkwater?',
    a: 'De EU-drinkwaterrichtlijn 2020/2184 en het Nederlandse Drinkwaterbesluit stellen de maximale nitraatconcentratie op 50 mg/L (NO3-). Voor babyvoeding hanteert de WHO een strengere richtwaarde van 10 mg/L vanwege het risico op methemoglobinemie (blauwe-baby-syndroom). In landbouwgebieden zoals delen van Brabant, de Achterhoek en Limburg overschrijden putwaters regelmatig de 50 mg/L-grens door uitspoeling van meststoffen.',
  },
  {
    q: 'Wat is blauwe-baby-syndroom (methemoglobinemie)?',
    a: 'Bij baby\'s onder de 6 maanden kan nitraat in de darm worden omgezet naar nitriet, dat zich bindt aan hemoglobine in het bloed en methemoglobine vormt. Methemoglobine kan geen zuurstof transporteren, waardoor de baby een blauwgrijze huidskleur krijgt en in ernstige gevallen ademnood ontwikkelt. Het risico is het hoogst bij flesvoeding aangemaakt met nitraatrijk putwater. Gebruik voor baby\'s onder de 6 maanden altijd water met minder dan 10 mg/L nitraat.',
  },
  {
    q: 'Waar in Nederland komt nitraat in putwater het meest voor?',
    a: 'Verhoogd nitraat in putwater komt vooral voor in landbouwregio\'s met veel veehouderij en akkerbouw: delen van Noord-Brabant, de Achterhoek, Limburg, de Gelderse Vallei en delen van Drenthe en Overijssel. Ondiepe boorputten (minder dan 30 meter) zijn extra kwetsbaar voor uitspoeling van meststoffen, vooral in zandgronden. Het RIVM publiceert regionale grondwaterkwaliteitskaarten waarop nitraatconcentraties zijn aangegeven.',
  },
  {
    q: 'Welke filtertechniek verwijdert nitraat het beste?',
    a: 'Omgekeerde osmose (RO) verwijdert 85-95% van nitraat en is de meest praktische oplossing voor huishoudens. Een 5-traps RO-systeem onder het aanrecht kost 300-800 euro. Ionenwisseling met nitraatselectief hars verwijdert 95-99% van nitraat en is geschikt voor het hele huis. Een ionenwisselingssysteem kost 600-1500 euro inclusief installatie. Beide systemen vereisen periodieke regeneratie of filtervervanging.',
  },
  {
    q: 'Ionenwisseling of omgekeerde osmose: wat kies ik?',
    a: 'Voor alleen drinkwater (1-5 liter per dag) is omgekeerde osmose onder het aanrecht voldoende en kostenefficient. Voor totale huishoudbehandeling (alle kranen) of bij zeer hoge nitraatconcentraties is een nitraat-ionenwisselaar geschikter. Ionenwisseling regenereert met natriumchloride (keukenzout) en heeft een hogere doorvoer. Osmose levert kalkarm water dat ook PFAS, zware metalen en medicijnresten verwijdert. Voor combinatie van problemen biedt osmose vaak betere algehele bescherming.',
  },
  {
    q: 'Hoe vaak moet ik putwater testen op nitraat?',
    a: 'Test minimaal jaarlijks, en bij voorkeur tweemaal per jaar (voorjaar en najaar). Nitraatconcentraties variëren door het seizoen: hoger na bemestingsperiodes en hevige regenval. In landbouwgebieden of bij ondiepe putten is halfjaarlijks testen aanbevolen. Een nitraat-sneltest (teststrip) kost 5-15 euro en geeft een ruwe indicatie. Een laboratoriumtest kost 25-50 euro voor alleen nitraat, of 80-150 euro als onderdeel van een microbiologisch en chemisch basispakket.',
  },
  {
    q: 'Kookt nitraat uit putwater eruit?',
    a: 'Nee, integendeel. Door koken verdampt water terwijl nitraat achterblijft, waardoor de concentratie toeneemt in plaats van afneemt. Koken is dus geen oplossing voor nitraatrijk putwater. De enige effectieve methoden zijn omgekeerde osmose, ionenwisseling met nitraatselectief hars of distillatie. Voor babyvoeding in nitraatrijke gebieden: gebruik altijd gefilterd RO-water of flessenwater dat specifiek geschikt is voor flesvoeding (lage nitraatconcentratie aangegeven op het etiket).',
  },
  {
    q: 'Wat kost een nitraatfilter voor putwater?',
    a: 'Een 5-traps omgekeerde osmose onder het aanrecht voor drinkwaterkraan: 300-800 euro inclusief installatie. Een nitraatselectieve ionenwisselaar voor het hele huis: 600-1500 euro inclusief installatie. Jaarlijkse kosten voor filtervervanging (RO): 80-150 euro. Jaarlijkse zoutkosten voor ionenwisselaar: 50-100 euro. Een combinatiesysteem (osmose plus UV voor bacterien) kost 800-1500 euro en biedt volledige bescherming tegen meerdere putwaterproblemen.',
  },
];

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Nitraat in putwater: EU-norm 50 mg/L, baby-risico, filters',
  description:
    'Nitraat in putwater (landbouwgebieden): EU-norm 50 mg/L, blauwe-baby-syndroom, ionenwisseling vs omgekeerde osmose en jaarlijks testen uitgelegd.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/putwater/nitraat',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function PutwaterNitraatPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Putwater', item: 'https://waterfilterplatform.nl/putwater' },
              { '@type': 'ListItem', position: 3, name: 'Nitraat', item: 'https://waterfilterplatform.nl/putwater/nitraat' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/putwater" className="hover:underline">Putwater</Link> &rsaquo;{' '}
          <span>Nitraat</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Nitraat in putwater: EU-norm 50 mg/L, baby-risico en filters
          </h1>
          <p className="text-gray-700 text-lg">
            In landbouwgebieden overschrijden putwaters regelmatig de EU-norm van 50 mg/L nitraat. Voor baby&apos;s geldt 10 mg/L als veilig maximum. Omgekeerde osmose en ionenwisseling zijn de aanbevolen filteroplossingen.
          </p>
        </div>

        <QuickAnswer answer="De EU-norm voor nitraat in drinkwater is 50 mg/L, voor babyvoeding 10 mg/L (WHO). Putwater in landbouwgebieden (Brabant, Achterhoek, Limburg) overschrijdt deze grens regelmatig door uitspoeling van meststoffen. Omgekeerde osmose verwijdert 85-95% van nitraat, ionenwisseling 95-99%. Test jaarlijks, vooral bij ondiepe putten en in landbouwregio&apos;s. Koken helpt niet: het concentreert juist nitraat." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Nitraat in putwater: oorzaken en risicoregio&apos;s
        </h2>
        <p className="text-gray-700 mb-4">
          Nitraat (NO3-) is een natuurlijk voorkomende verbinding die in verhoogde concentraties in grondwater terechtkomt door uitspoeling van meststoffen, dierlijke mest en stikstofhoudende kunstmest. In Nederland zijn de risicoregio&apos;s voor verhoogd nitraat in putwater: delen van Noord-Brabant (vooral Oost- en Midden-Brabant), de Achterhoek, Limburg, de Gelderse Vallei, en delen van Drenthe en Overijssel.
        </p>
        <p className="text-gray-700 mb-6">
          Ondiepe putten (minder dan 30 meter) op zandgrond zijn het meest kwetsbaar omdat nitraat door zandige bodems makkelijk uitspoelt. Diepere putten (meer dan 80 meter) bevatten doorgaans grondwater dat tientallen jaren oud is en daarom minder is beinvloed door moderne landbouwpraktijken. Lees meer over <Link href="/stoffen-in-drinkwater/nitraat-nitriet" className="text-[#005F8A] underline">nitraat en nitriet in drinkwater</Link> voor de algemene achtergrond.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsrisico&apos;s: blauwe-baby-syndroom
        </h2>
        <p className="text-gray-700 mb-4">
          Het belangrijkste gezondheidsrisico van nitraat in drinkwater is methemoglobinemie, ook bekend als het blauwe-baby-syndroom. Bij baby&apos;s jonger dan 6 maanden zetten darmbacterien nitraat om in nitriet, dat zich bindt aan hemoglobine in het bloed. Het gevormde methemoglobine kan geen zuurstof transporteren, met als gevolg een blauwgrijze huidskleur, kortademigheid en in ernstige gevallen acuut zuurstoftekort.
        </p>
        <p className="text-gray-700 mb-6">
          Voor baby&apos;s onder de 6 maanden hanteert de WHO daarom een strengere richtwaarde van 10 mg/L nitraat. Voor oudere kinderen en volwassenen is 50 mg/L (EU-norm) veilig. Daarnaast is langdurige hoge blootstelling aan nitraat geassocieerd met een verhoogd risico op bepaalde kankertypen (maag, blaas), hoewel deze causale relatie nog onderzocht wordt door RIVM en WHO.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Nitraatfiltertechnieken vergeleken
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Techniek</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aanschaf</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Toepassing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2">85-95%</td>
                <td className="border border-gray-300 px-3 py-2">300-800 euro</td>
                <td className="border border-gray-300 px-3 py-2">Drinkwaterkraan</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Ionenwisseling (nitraatselectief)</td>
                <td className="border border-gray-300 px-3 py-2">95-99%</td>
                <td className="border border-gray-300 px-3 py-2">600-1500 euro</td>
                <td className="border border-gray-300 px-3 py-2">Hele huis</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Distillatie</td>
                <td className="border border-gray-300 px-3 py-2">99%+</td>
                <td className="border border-gray-300 px-3 py-2">200-500 euro</td>
                <td className="border border-gray-300 px-3 py-2">Kleine hoeveelheden</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Biologische denitrificatie</td>
                <td className="border border-gray-300 px-3 py-2">90-95%</td>
                <td className="border border-gray-300 px-3 py-2">2000-5000 euro</td>
                <td className="border border-gray-300 px-3 py-2">Professioneel/industrieel</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief kool</td>
                <td className="border border-gray-300 px-3 py-2">0-10% (niet effectief)</td>
                <td className="border border-gray-300 px-3 py-2">50-200 euro</td>
                <td className="border border-gray-300 px-3 py-2">Niet geschikt voor nitraat</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Voor de meeste huishoudens is omgekeerde osmose de praktische keuze. Het systeem is compact, levert direct gefilterd drinkwater en verwijdert naast nitraat ook PFAS, zware metalen en medicijnresten. Voor totale huishoudbehandeling is een nitraat-<Link href="/filtertechnieken/ionenwisseling" className="text-[#005F8A] underline">ionenwisselaar</Link> geschikter.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Omgekeerde osmose of ionenwisseling: hoe kiezen?
        </h2>
        <p className="text-gray-700 mb-4">
          Kies omgekeerde osmose als u alleen veilig drinkwater nodig heeft (1-5 liter per dag voor drinken en koken). Een 5-traps RO-systeem onder het aanrecht verwijdert nitraat en daarnaast PFAS, lood, kalk, bacterien en medicijnresten. Aanschafkosten 300-800 euro, jaarlijkse filterkosten 80-150 euro.
        </p>
        <p className="text-gray-700 mb-6">
          Kies een nitraat-ionenwisselaar als u alle huishoudelijke kranen wilt behandelen (douche, was, koken) of bij zeer hoge nitraatconcentraties boven 100 mg/L. De ionenwisselaar regenereert met natriumchloride (keukenzout), vergelijkbaar met een waterontharder maar met nitraatselectief hars. Aanschaf 600-1500 euro, jaarlijkse zoutkosten 50-100 euro. Voor productadvies, zie <Link href="/waterfilter/nitraat" className="text-[#005F8A] underline">waterfilter voor nitraat</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Testen: hoe en hoe vaak
        </h2>
        <p className="text-gray-700 mb-4">
          Test putwater minimaal jaarlijks op nitraat, en in landbouwgebieden of bij ondiepe putten halfjaarlijks. Nitraatconcentraties variëren door het seizoen: doorgaans hoger na bemestingsperiodes (voorjaar) en na hevige regenval. Een nitraat-teststrip voor thuis kost 5 tot 15 euro en geeft een ruwe indicatie (gele tot rode kleurverandering).
        </p>
        <p className="text-gray-700 mb-6">
          Voor een betrouwbaar resultaat is een laboratoriumtest noodzakelijk. Een laboratoriumanalyse op alleen nitraat kost 25 tot 50 euro; een uitgebreide chemische analyse (nitraat, ijzer, mangaan, hardheid, pH) inclusief microbiologie kost 80 tot 150 euro. Voor het complete testprotocol zie de <Link href="/putwater" className="text-[#005F8A] underline">putwater hoofdpagina</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Belangrijk: koken verwijdert geen nitraat
        </h2>
        <p className="text-gray-700 mb-6">
          Een veelgehoord misverstand is dat koken nitraat uit het water verwijdert. Het tegenovergestelde is waar: door verdamping van water concentreert het nitraat juist. Voor babyvoeding bereid met nitraatrijk putwater is dit een serieus risico. Gebruik altijd gefilterd RO-water of een flessenbabywater met expliciet lage nitraatconcentratie (controleer het etiket: nitraat onder 10 mg/L). Bij twijfel: laat het putwater testen voordat u het gebruikt voor flesvoeding.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/nitraat-nitriet" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Nitraat en nitriet</h3>
              <p className="text-sm text-gray-600">Algemene achtergrond bij nitraatverontreiniging in drinkwater.</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling</h3>
              <p className="text-sm text-gray-600">Hoe nitraatselectief hars nitraat uit het water verwijdert.</p>
            </Link>
            <Link href="/waterfilter/nitraat" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor nitraat</h3>
              <p className="text-sm text-gray-600">Productadvies en vergelijking van nitraatfilters.</p>
            </Link>
            <Link href="/putwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Putwater overzicht</h3>
              <p className="text-sm text-gray-600">Alle risico&apos;s en filteropties voor eigen waterwinning.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over nitraat in putwater
          </h2>
          {faqItems.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">{faq.q}</summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.a}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/putwater" className="text-[#005F8A] underline">putwater overzicht</Link>,{' '}
          <Link href="/filtertechnieken/ionenwisseling" className="text-[#005F8A] underline">ionenwisseling</Link>,{' '}
          <Link href="/waterfilter/nitraat" className="text-[#005F8A] underline">nitraatfilter</Link> en{' '}
          <Link href="/stoffen-in-drinkwater/nitraat-nitriet" className="text-[#005F8A] underline">nitraat en nitriet</Link>.
        </p>
      </main>
    </>
  );
}
