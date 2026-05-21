import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosewater vs bronwater: verschil in kwaliteit, veiligheid en kosten',
  description:
    'Bronwater komt uit beschermde bron maar bevat variabele samenstelling. Osmosewater is consistent puur. Vergelijking voor drinken, koken en milieu.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/vs-bronwater' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is bronwater veiliger dan osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niet per definitie. Bronwater is gereguleerd en microbiologisch veilig, maar het wordt niet getest op alle opkomende verontreinigingen zoals PFAS. Uit een EEA-rapport uit 2021 bleek dat sommige Europese bronnen lage PFAS-concentraties bevatten. Een goed onderhouden osmosesysteem verwijdert meer dan 95% van PFAS, zware metalen en farmaceutische resten en biedt consistenter zuiver water dan bronwater uit de fles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bevat bronwater PFAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sommige bronwateren bevatten lage concentraties PFAS, afhankelijk van de locatie van de bron. Het EEA-rapport uit 2021 toonde aan dat PFAS wijdverspreid zijn in Europese waterlichamen, inclusief grondwater dat als bron voor bronwater dient. De concentraties in bronwater liggen doorgaans lager dan in oppervlaktewaterafhankelijk leidingwater, maar zijn niet nul. Osmosefilters verwijderen meer dan 95% van alle PFAS.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen bronwater en mineraalwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beide vallen onder EU-Richtlijn 2009/54/EG, maar er is een belangrijk verschil. Mineraalwater moet een wettelijk vastgestelde, constante mineraalsamenstelling hebben die op het etiket staat vermeld. Bronwater heeft geen vereiste vaste mineraalsamenstelling en kan seizoensgebonden variaties vertonen. Mineraalwater heeft strengere eisen voor bronbescherming en samenstelling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is bronwater in plastic flessen veilig voor hergebruik?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, PET-flessen zijn niet ontworpen voor hergebruik. Bij herhaaldelijk gebruik en warmte (auto, zon) geven PET-flessen microplastics en plasticizers af. De claim "BPA-vrij" sluit andere plasticizers niet uit. Onderzoek heeft aangetoond dat microplastics aanwezig zijn in vrijwel alle merken flessenwater. Gebruik een herbruikbare fles van glas of roestvrijstaal en vul die thuis met osmosewater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom is osmosewater goedkoper dan bronwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bronwater kost EUR 0,30-0,80 per liter vanwege bronextractie, flesproductie, kwaliteitscontrole en transport over honderden kilometers. Osmosewater thuis kost EUR 0,02-0,05 per liter, inclusief filterpatronen en afschrijving van het apparaat. Het osmosesysteem gebruikt het bestaande leidingnet als bron en heeft geen transport- of verpakkingskosten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is osmosewater even gezond als bronwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, osmosewater met remineralisatiecartridge is minstens even gezond als bronwater. Puur osmosewater bevat weinig mineralen, maar dit is geen probleem bij een gevarieerde voeding waarbij 80-90% van calcium en magnesium uit voeding komt. Met een remineralisatiecartridge voegt u calcium en magnesium toe tot waarden vergelijkbaar met licht bronwater. Osmosewater bevat bovendien geen PFAS, lood of microplastics uit plastic flessen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe duurzaam is bronwater kopen vergeleken met een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bronwater is aanzienlijk minder duurzaam. De CO2-voetafdruk van een liter bronwater in een PET-fles is 300-500 gram CO2-equivalent, terwijl osmosewater thuis minder dan 30 gram CO2 per liter veroorzaakt. Bovendien genereert bronwater plastic afval en microplastics. Een osmosefilter heeft een eenmalige milieukosten voor productie maar heeft daarna een vielfach lagere voetafdruk per liter gedurende zijn 10-15 jaar levensduur.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosewater vs bronwater: verschil in kwaliteit, veiligheid en kosten',
  description:
    'Bronwater komt uit beschermde bron maar bevat variabele samenstelling. Osmosewater is consistent puur. Vergelijking voor drinken, koken en milieu.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/osmose-water/vs-bronwater',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseVsBronwaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Osmosewater', item: 'https://waterfilterplatform.nl/osmose-water' },
              { '@type': 'ListItem', position: 3, name: 'Osmosewater vs bronwater', item: 'https://waterfilterplatform.nl/osmose-water/vs-bronwater' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/osmose-water" className="hover:underline">Osmosewater</a> &rsaquo;{' '}
          <span>Osmosewater vs bronwater</span>
        </nav>

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Osmosewater vs bronwater: verschil in kwaliteit, veiligheid en kosten
          </h1>
          <p className="text-gray-600 text-sm">
            Uitgebreide vergelijking voor dagelijks drinken, koken en milieubewuste keuzes
          </p>
        </section>

        <QuickAnswer answer="Bronwater komt uit een beschermde ondergrondse bron en is veilig, maar heeft variabele samenstelling en niet getest op alle opkomende verontreinigingen (PFAS). Osmosewater is consistent zuiver, goedkoper (EUR 0,02-0,05/L vs EUR 0,30-0,80/L) en heeft een veel lagere CO2-voetafdruk. Voor dagelijks thuisgebruik is osmose de betere keuze." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is bronwater precies?
        </h2>
        <p className="text-gray-700 mb-4">
          Bronwater is grondwater dat onder EU-Richtlijn 2009/54/EG wordt gereguleerd. Het wordt gewonnen uit een erkende, beschermde ondergrondse bron en mag minimale behandeling ondergaan: filtratie van sediment, toevoeging of verwijdering van koolzuur, en UV-desinfectie. In tegenstelling tot mineraalwater is er geen wettelijk vereiste voor een vaste mineraalsamenstelling. De samenstelling kan daardoor seizoensgebonden variaties vertonen.
        </p>
        <p className="text-gray-700 mb-4">
          Bekende bronwaters in Nederland en de EU:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Spa (Belgie):</strong> lage mineraalinhoud, TDS circa 30-354 mg/L afhankelijk van productlijn</li>
          <li><strong>Chaudfontaine (Belgie):</strong> iets hoger calciumgehalte, TDS circa 380 mg/L</li>
          <li><strong>Volvic (Frankrijk):</strong> vulkanische bron, TDS circa 130 mg/L, populair bij koffieliefhebbers</li>
          <li><strong>Evian (Frankrijk):</strong> hoog calciumgehalte (80 mg/L), TDS circa 309 mg/L, lang in de Alpen gefilterd</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Veiligheid bronwater: wat weet u niet?
        </h2>
        <p className="text-gray-700 mb-4">
          Bronwater is gereguleerd op microbiologische veiligheid (bacterien, virussen) en een reeks chemische parameters. Maar: de wettelijke testvereisten omvatten niet alle opkomende verontreinigingen. In een EEA-rapport uit 2021 werd aangetoond dat PFAS (per- en polyfluoralkylstoffen) wijdverspreid voorkomen in Europese waterlichamen, inclusief grondwater dat als bron dient voor bronwater. Sommige Europese bronwateren bevatten meetbare PFAS-concentraties.
        </p>
        <p className="text-gray-700 mb-6">
          Dit betekent niet dat bronwater onveilig is, maar dat de zuiverheid minder consistent is dan van osmosewater dat actief 95-99% van alle verontreinigingen verwijdert, inclusief PFAS. Osmose is onafhankelijk van de bron: zelfs als het leidingwater PFAS bevat, verwijdert het RO-membraan het.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: osmose, bronwater en mineraalwater
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Eigenschap</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Osmosewater</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Bronwater</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Mineraalwater</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Consistentie kwaliteit</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Zeer hoog (filter controleert)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Hoog (seizoensvar.)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Hoog (wettelijk vereist)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">PFAS</td>
                <td className="border border-gray-300 px-3 py-2">&lt;0,001 µg/L</td>
                <td className="border border-gray-300 px-3 py-2">0-0,05 µg/L (varieert)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;0,001 µg/L*</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">TDS (mg/L)</td>
                <td className="border border-gray-300 px-3 py-2">5-50</td>
                <td className="border border-gray-300 px-3 py-2">100-400</td>
                <td className="border border-gray-300 px-3 py-2">100-500</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Prijs per liter thuis</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">EUR 0,02-0,05</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">EUR 0,30-0,80</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">EUR 0,40-1,50</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">CO2-voetafdruk</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Laag (&lt;30g/L)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Hoog (transport)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Hoog</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Plastic fles</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Ja</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Plastic flessen: BPA-vrij is niet risicovrij
        </h2>
        <p className="text-gray-700 mb-4">
          Veel bronwaterflessen zijn gelabeld als "BPA-vrij". Maar dit betekent niet dat de fles vrij is van andere plasticizers. PET-flessen zijn ontworpen voor eenmalig gebruik. Bij herhaaldelijk gebruik, verhitting in de auto of zon, en bij krasjes in het plastic komen microplasticdeeltjes en andere plasticizers vrij in het water.
        </p>
        <p className="text-gray-700 mb-6">
          Onderzoek heeft aangetoond dat bronwater in plastic flessen gemiddeld 100-300 microplasticdeeltjes per liter bevat. Osmosewater, opgevangen in een roestvrijstalen of glazen fles, bevat geen microplastics. Voor huishoudens die bewust omgaan met blootstelling aan microplastics is dit een sterk argument voor osmose.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer kiest u voor bronwater, wanneer voor osmose?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Bronwater is beter als u...</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>Op reis bent of geen thuis-osmose heeft</li>
              <li>Tijdelijk ergens verblijft (huurkamer, hotel)</li>
              <li>Geen installatie mogelijk is</li>
              <li>Bruisend water wil (koolzuur toegevoegd)</li>
              <li>Een noodreserve wil aanleggen</li>
            </ul>
          </div>
          <div className="border border-[#005F8A] rounded-lg p-4 bg-[#E0F2FE]">
            <h3 className="font-semibold text-[#003F5C] mb-2">Osmose is beter als u...</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>Dagelijks thuis water drinkt</li>
              <li>In een PFAS-risicogebied woont</li>
              <li>Milieubewust wil leven</li>
              <li>Wilt besparen op lange termijn</li>
              <li>Een gezin heeft (veel waterverbruik)</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 mb-6">
          Meer weten over de voordelen van osmosewater?{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">Lees alles over omgekeerde osmose</Link> of bekijk de{' '}
          <Link href="/osmose-water/vs-mineraalwater" className="text-[#005F8A] underline">vergelijking osmosewater vs mineraalwater</Link>.
          De milieuvoordelen van waterfilters worden uitgelegd op de pagina{' '}
          <Link href="/waterfilter/milieu" className="text-[#005F8A] underline">waterfilter en milieu</Link>.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/vergelijken/kraanwater-vs-flessenwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Kraanwater vs flessenwater</h3>
            <p className="text-sm text-gray-600">Vergelijking van kraanwater en flessenwater op kwaliteit, kosten en milieu.</p>
          </Link>
          <Link href="/osmose-water/mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Mineralen in osmosewater</h3>
            <p className="text-sm text-gray-600">Welke mineralen nodig zijn en hoe je ze toevoegt aan osmosewater.</p>
          </Link>
          <Link href="/osmose-water/vs-mineraalwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater vs mineraalwater</h3>
            <p className="text-sm text-gray-600">Vergelijking van osmosewater en mineraalwater op gezondheid en kosten.</p>
          </Link>
          <Link href="/osmose-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater</h3>
            <p className="text-sm text-gray-600">Alles over osmosewater: werking, voordelen en toepassingen.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/osmose-water" className="text-[#005F8A] underline">osmosewater uitleg</Link>,{' '}
          <Link href="/osmose-water/vs-mineraalwater" className="text-[#005F8A] underline">osmose vs mineraalwater</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> en{' '}
          <Link href="/waterfilter/milieu" className="text-[#005F8A] underline">waterfilter en milieu</Link>.
        </p>
      </main>
    </>
  );
}
