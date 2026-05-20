import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter voor horeca: schoon water voor restaurant en cafe',
  description: 'Een waterfilter voor horeca verbetert koffie- en theekwaliteit, beschermt apparatuur en voldoet aan HACCP-normen. Vergelijking van horeca waterfilters voor.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/horeca' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welk waterfilter heeft mijn restaurant nodig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dit hangt af van uw specifieke situatie. Voor smaakverbetering volstaat een actief koolfilter (inline, EUR 100-300). Voor bescherming van dure apparatuur zoals espressomachines en vaatwassers is een waterontharder (ionenwisseling, EUR 800-2.500) de beste keuze. Voor speciality coffee of toprestaurants is een RO-systeem met remineralisatie (EUR 1.500-5.000) de gouden standaard. Laat bij twijfel eerst de waterhardheid meten; in Nederland is die gemiddeld 150-300 mg/L CaCO3, wat aanzienlijk hoger is dan de SCA-norm van 50-100 mg/L.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe verbetert een waterfilter de koffiequailiteit in een cafe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De Specialty Coffee Association (SCA) definieert ideaal koffiewater als: TDS 75-150 mg/L, waterhardheid 50-100 mg/L CaCO3, pH 6,5-7,5 en chloride onder 30 mg/L. Nederlands kraanwater heeft gemiddeld een hardheid van 150-300 mg/L CaCO3 en TDS van 200-400 mg/L. Hard water zorgt voor bittere espresso, overextractie en een dunne crema. Een RO-systeem met remineralisatie of een BWT Bestmax-filter brengt het water precies op de SCA-parameters, wat een merkbare smaakverbetering geeft.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een waterfilter verplicht voor horeca (HACCP)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strikt verplicht is het niet als het geleverde water al voldoet aan de EU Drinkwaterrichtlijn. Maar binnen HACCP (Hazard Analysis Critical Control Points) is water een kritisch controlepunt bij voedselverwerking. U moet aantonen dat uw water veilig is. Hoog gehalte aan kalk, chloor of microbiologische risicos (oude leidingen, Legionella) kunnen een extra filterstap vereisen als beheermaatregel. Documenteer de keuze en onderhoudsfrequentie in uw HACCP-plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk waterfilter beschermt mijn espressomachine het beste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor espressomachines (EUR 3.000-15.000) zijn de populairste filteroplossingen: BWT Bestmax (specifiek voor espresso, met Mg2+-verrijking), Everpure (Pentair) ESO-series en Brita Professional Purity C. Deze filters zijn cartridgegebaseerd en reduceren hardheid tot het SCA-optimum zonder volledig te ontzouten. Bij extreme hardheid (boven 300 mg/L) is een RO-systeem met gecontroleerde remineralisatie effectiever. Wissel filters minstens jaarlijks of na het aanbevolen volume.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe bereken ik de terugverdientijd van een horeca waterfilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eenvoudige ROI-berekening: een espressomachine van EUR 5.000 gaat zonder waterfilter gemiddeld 5 jaar mee; met waterfilter 8-10 jaar. Dat is een besparing van EUR 3.000 op apparaatlevensduur. Erbij optellen: minder onderhoudskosten (ontkalken kost EUR 200-500/jaar in arbeid), minder energieverbruik (1 mm kalkaanslag = +10% energieverbruik) en minder afkeur wegens smaakklachten. Een waterfilter van EUR 500-1.000 verdient zichzelf terug in minder dan 1 jaar voor een druk cafe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een waterontharder en RO-systeem voor horeca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een waterontharder (ionenwisseling) vervangt calcium- en magnesiumionen door natriumionen. Het water wordt zacht maar behoudt alle andere mineralen en het natrium stijgt. Geschikt voor vaatwassers, stoomketels en wasinstallaties. Een RO-systeem verwijdert vrijwel alle opgeloste stoffen (90-98% reductie TDS) en produceert bijna gedestilleerd water. Voor espresso en thee is remineralisatie nodig om smaak te garanderen. RO is duurder en produceert afvalwater (1:3 tot 1:1 ratio afhankelijk van systeem).',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke waterfiltermerken zijn geschikt voor professionele horeca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De voornaamste merken voor horeca: Brita Professional (Purity C-serie, geschikt voor espresso en heet water), Everpure by Pentair (ESO-serie, veel gebruikt in Amerika en Europa), BWT Bestmax (met magnesiumverrijking, favoriet bij speciality coffee), 3M Aqua-Pure (AP-serie, brede inzetbaarheid). Voor industriele RO-systemen zijn Culligan, Veolia en Evoqua bekende namen. Kies altijd op basis van uw waterhardheidsmeting en het type apparatuur dat u wilt beschermen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik de kosten van een horeca waterfilter aftrekken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Een waterfilterinstallatie voor horeca is een bedrijfsinvestering en volledig fiscaal aftrekbaar. De investering wordt doorgaans afgeschreven over 5 jaar (20% per jaar). Kleinere aankopen onder de EUR 450 (drempelwaarde kleine bedrijfsmiddelen) kunnen direct als kosten worden geboekt. Vraag uw accountant naar de Kleinschaligheidsinvesteringsaftrek (KIA) als de investering valt binnen de drempels. BTW is volledig verrekenbaar als u BTW-ondernemer bent.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter voor horeca: schoon water voor restaurant en cafe',
  description: 'Een waterfilter voor horeca verbetert koffie- en theekwaliteit, beschermt apparatuur en voldoet aan HACCP-normen.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/horeca',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterHorecaPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Waterfilter horeca', item: 'https://waterfilterplatform.nl/waterfilter/horeca' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>Waterfilter horeca</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-2xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterfilter voor horeca: schoon water voor restaurant en cafe
          </h1>
          <p className="text-gray-700 text-lg">
            Hard kraanwater verwoest de smaak van uw espresso, verkort de levensduur van uw apparatuur en
            verhoogt uw energierekening. Een professioneel waterfilter lost dit op en verdient zichzelf
            doorgaans binnen een jaar terug.
          </p>
        </div>

        <QuickAnswer answer="Een horeca waterfilter verbetert koffie- en theesmaak (SCA-norm: TDS 75-150 mg/L), beschermt dure apparatuur tegen kalkaanslag en ondersteunt HACCP-compliance. Voor espresso is een BWT Bestmax of RO-systeem de beste keuze. Terugverdientijd is doorgaans minder dan 1 jaar voor een actief cafe of restaurant." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom heeft horeca een waterfilter nodig?
        </h2>
        <p className="text-gray-700 mb-4">
          Water is het meest gebruikte ingredient in de horeca. Toch wordt de waterkwaliteit zelden
          gecontroleerd. In Nederland is het kraanwater gemiddeld hard tot zeer hard: 150-300 mg/L CaCO3.
          De Specialty Coffee Association (SCA) stelt als optimum 50-100 mg/L CaCO3 en TDS van 75-150 mg/L.
          Het verschil is enorm en heeft directe gevolgen voor uw bedrijfsvoering.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          1. Koffie- en theekwaliteit
        </h3>
        <p className="text-gray-700 mb-4">
          Hard kraanwater (150-300 mg/L CaCO3) produceert bittere, vlakke espresso met weinig crema.
          De te hoge concentratie calcium en magnesium veroorzaakt overextractie van bittere componenten
          en onderdrukt de gewenste aromatische verbindingen. De SCA-normen zijn duidelijk: TDS 75-150 mg/L
          en waterhardheid 50-100 mg/L CaCO3. Met gefilterd water op SCA-parameters is de verbetering
          direct merkbaar voor uw gasten.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          2. Apparatuurbescherming
        </h3>
        <p className="text-gray-700 mb-4">
          Kalkaanslag is de grootste vijand van uw horeca-apparatuur. Espressomachines kosten EUR 3.000
          tot EUR 15.000, stoomketels EUR 2.000 tot EUR 8.000 en industriele vaatwassers EUR 5.000 tot
          EUR 20.000. Al bij 1 mm kalkaanslag op verwarmingselementen stijgt het energieverbruik met 10%.
          Bij 3 mm is dat al 30% meer energieverbruik en dreigt defect. Een waterfilter verlengt de
          levensduur van uw apparatuur aantoonbaar met 50-100%.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          3. HACCP-compliance
        </h3>
        <p className="text-gray-700 mb-4">
          Hazard Analysis Critical Control Points (HACCP) is verplicht voor alle foodservice-bedrijven
          in de EU. Water is een kritisch controlepunt: het moet voldoen aan de EU Drinkwaterrichtlijn
          voor koude distributie (&lt;12&deg;C) en warm water (&gt;60&deg;C ter voorkoming van Legionella).
          Oud leidingwerk, chloorresidu of bacteriologische risicos kunnen een extra filterstap vereisen
          als beheermaatregel in uw HACCP-plan.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          4. Glaasjes en bestek
        </h3>
        <p className="text-gray-700 mb-6">
          Kalkvrij water uit de vaatwasser geeft vlekkeloos glaswerk en bestek zonder extra poets-arbeid.
          Dit bespaart personeelstijd en geeft uw gasten een professionelere indruk. Kalkarm spoelwater
          vermindert ook het verbruik van glashelder-middel en regenereerzout.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Overzicht horeca filteroplossingen
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Geschikt voor</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Onderhoud</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Actief koolfilter (inline)</td>
                <td className="border border-gray-300 px-3 py-2">Kleine cafe, smaakverbetering</td>
                <td className="border border-gray-300 px-3 py-2">EUR 100-300</td>
                <td className="border border-gray-300 px-3 py-2">Filter 6 mnd</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Waterontharder (ionenwisseling)</td>
                <td className="border border-gray-300 px-3 py-2">Restaurant, hotel, vaatwasser</td>
                <td className="border border-gray-300 px-3 py-2">EUR 800-2.500</td>
                <td className="border border-gray-300 px-3 py-2">Zout bijvullen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">RO-systeem met remineralisatie</td>
                <td className="border border-gray-300 px-3 py-2">Speciality coffee, toprestaurant</td>
                <td className="border border-gray-300 px-3 py-2">EUR 1.500-5.000</td>
                <td className="border border-gray-300 px-3 py-2">Filters 1x/jr</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Waterontkalker (elektronisch)</td>
                <td className="border border-gray-300 px-3 py-2">Keukenaparatuur bescherming</td>
                <td className="border border-gray-300 px-3 py-2">EUR 300-800</td>
                <td className="border border-gray-300 px-3 py-2">Stroomloos</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Doseersysteem (antikalk)</td>
                <td className="border border-gray-300 px-3 py-2">Vaatwasser, stoomoven</td>
                <td className="border border-gray-300 px-3 py-2">EUR 200-500</td>
                <td className="border border-gray-300 px-3 py-2">Cartridge 6 mnd</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          ROI-berekening: waterfilter voor horeca
        </h2>
        <p className="text-gray-700 mb-4">
          De terugverdientijd van een horeca waterfilter is voor de meeste bedrijven minder dan 1 jaar.
          Hier een concrete berekening voor een gemiddeld restaurant:
        </p>
        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>Espressomachine EUR 5.000</strong> zonder waterfilter: gemiddeld 5 jaar levensduur</li>
            <li><strong>Met waterfilter:</strong> 8-10 jaar levensduur &rarr; besparing EUR 3.000+ op apparaatlevensduur</li>
            <li><strong>Energiebesparing:</strong> 10-30% minder energieverbruik op verwarmingselementen</li>
            <li><strong>Onderhoud:</strong> geen jaarlijkse professionele ontkalkbeurt (EUR 200-500 bespaard)</li>
            <li><strong>Investering waterfilter:</strong> EUR 300-1.000 voor cartridge-systeem</li>
            <li><strong>Terugverdientijd:</strong> &lt;1 jaar voor druk cafe of restaurant</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Populaire merken voor horeca waterfilters
        </h2>
        <p className="text-gray-700 mb-4">
          De markt voor professionele horeca waterfilters is gedomineerd door een aantal gespecialiseerde
          fabrikanten. De bekendste merken in Nederland zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Brita Professional</strong> &mdash; Purity C-serie, veel gebruikt in cafes en koffiebars,
            speciale espresso-cartridges beschikbaar
          </li>
          <li>
            <strong>BWT Bestmax</strong> &mdash; met magnesiumverrijking, favoriet bij speciality coffee
            baristas en SCAE-gecertificeerde trainers
          </li>
          <li>
            <strong>Everpure (Pentair)</strong> &mdash; ESO-serie, robuust en breed ingezet in foodservice
            en grootkeuken
          </li>
          <li>
            <strong>3M Aqua-Pure</strong> &mdash; AP-serie, breed inzetbaar voor meerdere horecatoepassingen
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          BTW en fiscale aftrekbaarheid
        </h2>
        <p className="text-gray-700 mb-6">
          Een waterfilterinstallatie voor horeca is een bedrijfsinvestering en volledig fiscaal aftrekbaar.
          De gebruikelijke afschrijftermijn is 5 jaar (20% per jaar). Kleinere aankopen onder de EUR 450
          kunnen direct als kosten worden geboekt. BTW is volledig verrekenbaar voor BTW-ondernemers.
          Vraag uw accountant naar de Kleinschaligheidsinvesteringsaftrek (KIA) voor kleinere investeringen.
        </p>

        <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/zakelijk/horeca" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter zakelijk horeca</h3>
            <p className="text-sm text-gray-600">Overzicht van professionele waterfilteroplossingen specifiek voor de horecasector.</p>
          </Link>
          <Link href="/zakelijk/waterkoeler-vs-filter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterkoeler vs waterfilter</h3>
            <p className="text-sm text-gray-600">Vergelijk waterkoelers en waterfilters op kosten, kwaliteit en gebruiksgemak voor bedrijven.</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose filtertechniek</h3>
            <p className="text-sm text-gray-600">Hoe omgekeerde osmose werkt en waarom het de goudstandaard is voor horeca waterzuivering.</p>
          </Link>
          <Link href="/waterfilter/koffiezetter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor koffiezetter</h3>
            <p className="text-sm text-gray-600">Welk waterfilter past bij uw espressomachine of koffiezetapparaat voor optimale smaak.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over horeca waterfilters
          </h2>
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
          <Link href="/drinkwaterfontein/horeca" className="text-[#005F8A] underline">drinkwaterfontein voor horeca</Link>,{' '}
          <Link href="/waterfilter/bedrijf" className="text-[#005F8A] underline">waterfilter voor bedrijf</Link>,{' '}
          <Link href="/osmose-water" className="text-[#005F8A] underline">osmose water voor espresso</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>
      </main>
    </>
  );
}
