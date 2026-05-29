import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Microplastics in drinkwater: risico\'s, normen en waterfilter',
  description:
    'Microplastics zijn aangetroffen in Nederlands kraanwater en flessenwater. WHO 2022: bij huidige concentraties geen bewijs voor gezondheidsschade, maar.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/microplastics' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat zijn microplastics en hoe komen ze in drinkwater terecht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Microplastics zijn kunststofdeeltjes kleiner dan 5 mm. Ze ontstaan door afbraak van plastic verpakkingen, autobanden en synthetische kleding, en worden ook bewust geproduceerd als microbeads in cosmetica. In drinkwater komen ze terecht via oppervlaktewater dat afvalwaterzuiveringsinstallaties niet volledig reinigen, via atmosferische depositie (regen) en via kunststof leidingen en verpakkingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn microplastics in drinkwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Volgens het WHO 2022 rapport zijn er bij de huidige concentraties in drinkwater geen bewezen gezondheidsrisicos bij mensen. Nieuwere studies tonen echter aan dat microplastics zijn aangetroffen in menselijk bloed, longen en placentaweefsel. Langetermijneffecten zijn onbekend. Het voorzorgsbeginsel raadt aan de blootstelling te beperken, zeker voor nanoplastics waarover het minst bekend is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel microplastics zitten er in Nederlands kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uit RIVM-onderzoek (2023) blijkt dat Nederlands kraanwater 0,1-3 deeltjes microplastics per liter bevat. Dit is laag vergeleken met het wereldgemiddelde. Nederlandse drinkwaterbedrijven zijn actief bezig microplastics te monitoren en te verminderen via geavanceerde zuiveringstechnieken. Flessenwater bevat gemiddeld 10-100 keer meer microplastics dan Nederlands kraanwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter microplastics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Een omgekeerde-osmosemembraan heeft porieen van 0,0001 µm, wat kleiner is dan zelfs de kleinste nanoplastics. Een osmosefilter verwijdert meer dan 99% van alle microplastics en de meeste nanoplastics. Dit is de meest effectieve thuismethode voor microplasticverwijdering uit drinkwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen microplastics en nanoplastics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Microplastics zijn deeltjes van 1 µm tot 5 mm. Nanoplastics zijn kleiner dan 1 µm (micrometer). Nanoplastics zijn moeilijker te meten en te onderzoeken. Zij kunnen door biologische membranen heen diffunderen, wat ze potentieel gevaarlijker maakt dan microplastics. Alleen omgekeerde osmose (RO) en nanofiltratie (NF) verwijderen nanoplastics effectief.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bevat flessenwater minder microplastics dan kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Flessenwater bevat gemiddeld meer microplastics dan Nederlands kraanwater. De plasticfles zelf en het bottelen- en transportproces voegen microplastics toe aan het water. Studies tonen aan dat flessenwater 10-100 keer meer microplastics bevat dan gemiddeld kraanwater. Kraanwater gecombineerd met een osmosefilter is de keuze met de laagste microplasticblootstelling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt een Brita-filterkan tegen microplastics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Filterkannen met actief koolfilter zijn niet ontworpen voor microplasticverwijdering en hebben een verwaarloosbare effectiviteit. Actief kool adsorbeert chemische verbindingen maar houdt geen fysieke plastic deeltjes tegen. Voor effectieve microplasticverwijdering is een osmosefilter, keramisch filter of ultrafiltratiemembraan noodzakelijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer komen er EU-normen voor microplastics in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU Drinkwaterrichtlijn 2020/2184 eist risicomonitoring van microplastics maar stelt nog geen grenswaarden. EU-lidstaten zijn verplicht microplastics actief te monitoren. Op basis van de eerste monitoringsronde worden grenswaarden verwacht in 2026-2028. Nederland loopt voor met vrijwillige RIVM-monitoring en heeft al concentratiegegevens beschikbaar.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: "Microplastics in drinkwater: risico's, normen en waterfilter",
  description:
    'Microplastics zijn aangetroffen in Nederlands kraanwater en flessenwater. WHO 2022: bij huidige concentraties geen bewijs voor gezondheidsschade, maar.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/microplastics',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterMicroplasticsPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Microplastics in drinkwater', item: 'https://waterfilterplatform.nl/waterfilter/microplastics' },
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
          <span>Microplastics in drinkwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Microplastics in drinkwater: risico&apos;s, normen en waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Microplastics zijn aangetroffen in Nederlands kraanwater, flessenwater en zelfs in menselijk
            bloed en placentaweefsel. De WHO concludeerde in 2022 dat er bij huidige concentraties nog
            geen bewijs is voor gezondheidsschade &mdash; maar nieuw onderzoek werpt vragen op. Welk
            waterfilter verwijdert microplastics het meest effectief?
          </p>
        </section>

        <QuickAnswer answer="Microplastics (kleiner dan 5 mm) zijn aangetroffen in 80% van onderzochte kraanwatersamples wereldwijd. Nederlands kraanwater bevat slechts 0,1-3 deeltjes per liter (laag). Flessenwater bevat 10-100x meer microplastics. WHO 2022: geen bewezen gezondheidsrisico bij huidige concentraties. Osmosefilter verwijdert 99%+ van microplastics en nanoplastics." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat zijn microplastics en nanoplastics?
        </h2>
        <p className="text-gray-700 mb-4">
          Microplastics zijn kunststofdeeltjes kleiner dan 5 millimeter. Ze zijn met het blote oog
          nauwelijks of niet zichtbaar en variëren van circa 1 µm tot 5 mm in doorsnede.
          <strong> Nanoplastics</strong> zijn nóg kleiner: deeltjes onder de 1 micrometer (1 µm).
          Ter vergelijking: een mensenhaar is circa 70 µm breed; nanoplastics zijn dus honderd keer
          dunner dan een haar.
        </p>
        <p className="text-gray-700 mb-4">
          Microplastics ontstaan op twee manieren. <strong>Primaire microplastics</strong> worden
          bewust geproduceerd: microbeads in cosmetica, pellets voor plasticproductie, synthetische
          vezels in textiel. <strong>Secundaire microplastics</strong> ontstaan door afbraak van
          groter plastic afval via zonlicht (fotodegradatie), wind en mechanische werking. Afbrokkelende
          plastic tassen, slijtage van autobanden op het wegdek en microvezelsverlies bij het wassen
          van synthetische kleding zijn de grootste bronnen.
        </p>
        <p className="text-gray-700 mb-6">
          Nanoplastics vormen de grootste onbekende: ze zijn moeilijk te meten met standaard
          analysemethoden en kunnen door biologische celmembranen heen diffunderen, wat hun
          gezondheidsimpact potentieel ernstiger maakt dan die van grotere microplastics.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Microplastics in drinkwater: de feiten
        </h2>
        <p className="text-gray-700 mb-4">
          De omvang van microplasticsverontreiniging in drinkwater is in de afgelopen jaren beter
          in beeld gekomen door verbeterde analysemethoden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>WHO 2022 rapport:</strong> microplastics zijn aangetroffen in 80% van onderzochte
            kraanwatersamples wereldwijd. De concentraties lopen sterk uiteen per regio en
            waterbron
          </li>
          <li>
            <strong>RIVM-studie 2023:</strong> Nederlands kraanwater bevat 0,1-3 deeltjes microplastics
            per liter &mdash; laag vergeleken met het wereldgemiddelde. Nederlandse drinkwaterbedrijven
            gebruiken al geavanceerde filtratietechnieken die een groot deel van microplastics verwijderen
          </li>
          <li>
            <strong>Flessenwater:</strong> meerdere internationale studies tonen aan dat flessenwater
            gemiddeld 10-100 keer meer microplastics bevat dan kraanwater. De plasticfles en het
            bottelen- en transportproces zijn directe bronnen van plastic migratie in het water
          </li>
          <li>
            <strong>Menselijk lichaam:</strong> microplastics zijn aangetroffen in menselijk bloed
            (studie Vrije Universiteit Amsterdam, 2022), in longweefsel en in placentaweefsel.
            Dit bewijst biologische opname maar zegt nog niets over de gezondheidseffecten
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsrisico&apos;s: wat zegt de WHO?
        </h2>
        <p className="text-gray-700 mb-4">
          De <strong>WHO</strong> publiceerde in 2019 en actualiseerde in 2022 zijn standpunt over
          microplastics in drinkwater. De kernconclusie: bij de huidige concentraties in drinkwater
          is er <em>geen bewijs</em> voor directe gezondheidsschade bij mensen. De WHO hanteert
          echter het voorzorgsbeginsel en raadt aan blootstelling waar mogelijk te beperken,
          gezien de toenemende concentraties in het milieu en de nog onbekende langetermijneffecten.
        </p>
        <p className="text-gray-700 mb-4">
          Nieuwere studies gooien echter vragen op. Onderzoek gepubliceerd in 2024 in het{' '}
          <em>New England Journal of Medicine</em> toonde een verhoogde incidentie van cardiovasculaire
          events bij mensen met microplastics in plaqueweefsel van bloedvaten. Dit is nog associatief
          onderzoek &mdash; causaliteit is niet bewezen &mdash; maar het geeft aanleiding voor verder
          onderzoek.
        </p>
        <p className="text-gray-700 mb-6">
          Voor <strong>nanoplastics</strong> is de onzekerheid het grootst. Nanoplastics zijn moeilijk
          te meten en te bestuderen. Ze kunnen celwanden passeren en stapelen zich mogelijk op in
          orgaanweefsel. De WHO erkent dat de huidige risicobeoordelingsmethoden onvoldoende zijn
          voor nanoplastics en roept op tot meer onderzoek.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-normen en Nederlandse regelgeving
        </h2>
        <p className="text-gray-700 mb-4">
          De <strong>EU Drinkwaterrichtlijn 2020/2184</strong> eist risicomonitoring van microplastics
          door alle EU-lidstaten maar stelt (nog) geen wettelijke grenswaarden. Microplastics staan
          op de zogeheten watchlist: een monitoringslijst voor stoffen die mogelijk risico vormen en
          waarvoor meer gegevens nodig zijn.
        </p>
        <p className="text-gray-700 mb-6">
          Op basis van de eerste systematische monitoringsronde worden grenswaarden verwacht in
          <strong> 2026-2028</strong>. Nederland loopt voor: het RIVM heeft vrijwillig een meetprogramma
          opgezet en publiceert jaarlijks concentratiegegevens. Nederlandse drinkwaterbedrijven hebben
          microplasticsreductie opgenomen in hun zuiveringsbeleid, al ontbreekt een wettelijke
          verplichting tot specifieke verwijderingstechnologie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filteroplossingen: effectiviteit per methode
        </h2>
        <p className="text-gray-700 mb-4">
          Niet elke filtermethode is geschikt voor microplastics. De effectiviteit hangt af van
          de poriegrootte van het filtermedium:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filtermethode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verwijdering microplastics</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Nanoplastics</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Poriegrootte</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Osmosefilter (RO)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99%+</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Ja</td>
                <td className="border border-gray-300 px-3 py-2">0,0001 µm</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Nanofiltratie (NF)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99%+</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Ja</td>
                <td className="border border-gray-300 px-3 py-2">0,001 µm</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Ultrafiltratie (UF)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">Deels</td>
                <td className="border border-gray-300 px-3 py-2">0,01 µm</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Keramisch filter</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99% (&gt;0,2 µm)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2">0,2 µm</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief kool (blok)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">50-80%</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2">Variabel</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Filterkan (Brita)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Minimaal</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2">Niet getest</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosefilter: de meest complete oplossing
        </h2>
        <p className="text-gray-700 mb-4">
          Een{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">
            osmosefilter
          </Link>{' '}
          perst water onder druk door een semi-permeabel membraan met porieen van 0,0001 µm.
          Deze poriegrootte is kleiner dan de kleinste bekende nanoplastics. Het resultaat: meer
          dan 99% van alle microplastics worden tegengehouden, inclusief de nanofractie.
        </p>
        <p className="text-gray-700 mb-4">
          Een bijkomend voordeel: het osmosefilter verwijdert tegelijk ook{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">
            andere verontreinigingen
          </Link>{' '}
          zoals PFAS, lood, nitraat, pesticiden en farmaceutische reststoffen. Dit maakt het de meest
          brede thuisbeschermingsoptie. NSF/ANSI 58-gecertificeerde osmosesystemen zijn getest op een
          breed scala aan contaminanten en bieden de meest betrouwbare garanties.
        </p>
        <p className="text-gray-700 mb-6">
          Aandachtspunt: kies altijd voor een osmosefilter met NSF-certificering om te verzekeren dat
          het filtermateriaal zelf geen microplastics afgeeft aan het gefilterde water. Goedkope
          filters van laagwaardige kunststoffen kunnen dit risico introduceren.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Flessenwater vs. kraanwater met osmosefilter
        </h2>
        <p className="text-gray-700 mb-4">
          Een veelgehoord argument voor flessenwater is dat het "puurder" zou zijn dan kraanwater.
          Voor microplastics geldt het tegenovergestelde. Onderzoek toont consistent aan dat:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            Flessenwater gemiddeld <strong>10-100 keer meer microplastics</strong> bevat dan
            Nederlands kraanwater
          </li>
          <li>
            De plasticfles zelf levert een continue bron van microplastigartica op, in het bijzonder
            bij bewaring in warmte of zonlicht
          </li>
          <li>
            Hergebruikte plastic flessen geven significant meer microplastics af dan nieuwe flessen
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          De combinatie van Nederlands kraanwater plus een osmosefilter resulteert in water met de
          laagste microplasticblootstelling. Dit is ook milieuvriendelijker: geen plastic flessenafval
          en geen transport. Zie onze vergelijking op de pagina{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">
            waterkwaliteitstest
          </Link>{' '}
          voor meer informatie over het testen van uw kraanwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktische aanbevelingen
        </h2>
        <div className="space-y-3 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Beste keuze: osmosefilter (NSF/ANSI 58)</h3>
            <p className="text-gray-700 text-sm">
              Verwijdert 99%+ van microplastics en nanoplastics. Tevens effectief tegen PFAS, lood,
              nitraat en farmaceutische reststoffen. Kies altijd NSF-gecertificeerde systemen.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Goed alternatief: keramisch filter of UF</h3>
            <p className="text-gray-700 text-sm">
              Effectief voor microplastics groter dan 0,2 µm. Niet effectief voor nanoplastics.
              Goedkoper dan osmose maar biedt minder brede bescherming.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 border-red-200 bg-red-50">
            <h3 className="font-semibold text-red-700 mb-1">Niet effectief: filterkan en flessenwater</h3>
            <p className="text-gray-700 text-sm">
              Filterkannen verwijderen nauwelijks microplastics. Flessenwater bevat juist meer
              microplastics dan Nederlands kraanwater. Beide zijn geen goede keuze voor
              microplasticreductie.
            </p>
          </div>
        </div>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/drinkwater/microplastics" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Microplastics in drinkwater</h3>
            <p className="text-sm text-gray-600">Wetenschappelijke achtergrond en normen voor microplastics in drinkwater.</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose uitleg</h3>
            <p className="text-sm text-gray-600">Hoe werkt omgekeerde osmose en waarom verwijdert het microplastics zo effectief?</p>
          </Link>
          <Link href="/waterfilter/nanoplastics" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Nanoplastics in drinkwater</h3>
            <p className="text-sm text-gray-600">Wat zijn nanoplastics en waarom zijn ze gevaarlijker dan microplastics?</p>
          </Link>
          <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen Nederland</h3>
            <p className="text-sm text-gray-600">Actueel overzicht van EU- en Nederlandse normen voor drinkwaterkwaliteit.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over microplastics in drinkwater
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
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>,{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilters vergelijken</Link> en{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteitstest</Link>.
        </p>
      </main>
    </>
  );
}
