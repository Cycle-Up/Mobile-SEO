import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Microplastics in drinkwater filteren: feiten en oplossingen (2026)',
  description: 'Microplastics in drinkwater filteren: wat zijn ze, hoe komen ze in leidingwater, wat zeggen RIVM en WHO, en welk waterfilter verwijdert microplastics het meest effectief.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/microplastics' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat zijn microplastics precies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Microplastics zijn plastic deeltjes kleiner dan 5 millimeter. Nanoplastics zijn nog kleiner: onder de 1 micrometer (1 µm). Ze ontstaan door afbraak van groter plastic afval, maar worden ook direct geproduceerd als bestanddeel van cosmetica en textielwas. In drinkwater zijn ze aangetroffen in concentraties van enkele deeltjes tot tientallen deeltjes per liter, afhankelijk van de bron.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe komen microplastics in drinkwater terecht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bronnen van microplastics in drinkwater zijn: (1) Afvalwaterzuiveringsinstallaties (AWZI) die niet alle deeltjes verwijderen en het effluent lozen op oppervlaktewater. (2) Atmosferische depositie: plastic deeltjes die via regen in oppervlaktewater belanden. (3) Kunststof waterleidingen en verpakkingsmateriaal die kleine hoeveelheden afgeven. (4) Irrigatiewater in de landbouw dat microplastics bevat uit mulchfolie en meststoffen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn microplastics in drinkwater gevaarlijk voor de gezondheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Volgens het WHO-rapport uit 2019 is er bij de huidige niveaus in drinkwater onvoldoende bewijs voor directe gezondheidsschade bij mensen. De WHO hanteert wel het voorzorgsbeginsel: verdere blootstelling beperken is verstandig. RIVM volgt de situatie actief en heeft microplastics op de EU-monitoringslijst 2026 staan. Nanoplastics zijn moeilijker te meten en de kennis over gezondheidseffecten is nog beperkt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert omgekeerde osmose microplastics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Een omgekeerde-osmosemembraan heeft poriën van circa 0,0001 µm — kleiner dan zelfs de kleinste nanoplastics. Daardoor wordt meer dan 99% van alle microplastics en de meeste nanoplastics tegengehouden. Omgekeerde osmose is de meest effectieve thuismethode voor microplasticverwijdering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt een keramisch filter tegen microplastics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keramische filters met poriën van 0,2 µm verwijderen circa 99% van microplastics groter dan 0,2 µm. Zeer kleine nanoplastics (< 0,2 µm) kunnen door een keramisch filter heen gaan. Voor standaard microplastics is een keramisch filter dus effectief; voor nanoplastics is omgekeerde osmose de betere keuze.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een waterfilterkan (zoals Brita) microplastics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Filterkannen met actief koolfilter zijn niet ontworpen voor microplasticverwijdering en hebben een minimaal effect. Actief kool adsorbeert chemische stoffen maar houdt geen fysieke deeltjes zoals microplastics tegen. Voor microplasticverwijdering is omgekeerde osmose of een keramisch filter nodig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kunnen waterfilters zelf microplastics afgeven?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, goedkope filters van laagwaardige kunststoffen kunnen zelf microplastics afgeven aan het gefilterde water. Kies daarom altijd voor filters die NSF-gecertificeerd zijn (NSF/ANSI 42, 53 of 58). NSF-certificering garandeert dat het filtermateriaal geen schadelijke stoffen afgeeft aan drinkwater. Dit is een belangrijk aandachtspunt dat fabrikanten zelden vermelden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zegt de EU-regelgeving over microplastics in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU Drinkwaterrichtlijn 2020/2184 heeft microplastics opgenomen op de zogeheten watchlist: een monitoringslijst voor stoffen die mogelijk risico vormen. Vanaf 2026 zijn EU-lidstaten verplicht microplastics actief te monitoren. Er geldt nog geen wettelijke maximumnorm, maar die wordt verwacht na evaluatie van de monitoringsresultaten. Nederland loopt voor met vrijwillige RIVM-metingen.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Microplastics in drinkwater filteren: feiten en oplossingen (2026)',
  description: 'Microplastics in drinkwater filteren: wat zijn ze, hoe komen ze in leidingwater, wat zeggen RIVM en WHO, en welk waterfilter verwijdert microplastics het meest effectief.',
  datePublished: '2026-04-12',
  dateModified: '2026-04-12',
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
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Microplastics', item: 'https://waterfilterplatform.nl/waterfilter/microplastics' },
            ],
          },
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterfilter" className="hover:underline">Waterfilter</a> &rsaquo;{' '}
          <span>Microplastics</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Microplastics in drinkwater filteren: feiten en oplossingen (2026)
        </h1>

        {/* QuickAnswer */}
        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#003F5C] mb-1">Snel antwoord</p>
          <p className="text-gray-700 text-sm">
            Microplastics zijn kleine plastic deeltjes in drinkwater. WHO (2019) ziet bij huidige niveaus geen bewezen gezondheidsrisico, maar adviseert voorzorg. Omgekeerde osmose verwijdert meer dan 99%; keramisch filter 99% voor deeltjes boven 0,2 µm. Filterkannen zijn niet effectief.
          </p>
        </div>

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat zijn microplastics en nanoplastics?
        </h2>
        <p className="text-gray-700 mb-4">
          Microplastics zijn plastic deeltjes kleiner dan 5 millimeter. Ze zijn met het blote oog nauwelijks of niet zichtbaar. Nanoplastics zijn nóg kleiner: onder de 1 micrometer (1 µm). Ter vergelijking: een mensenhaar is circa 70 µm breed.
        </p>
        <p className="text-gray-700 mb-6">
          Microplastics ontstaan op twee manieren. <strong>Primaire microplastics</strong> worden bewust geproduceerd, bijvoorbeeld als microbeads in cosmetica of als pellets voor plasticproductie. <strong>Secundaire microplastics</strong> ontstaan door afbraak van groter plastic afval door zonlicht, wind en water. Denk aan afbrokkelende plastic tassen, synthetische kleding die wast en autobanden die slijten.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe komen microplastics in Nederlands drinkwater?
        </h2>
        <p className="text-gray-700 mb-4">
          Microplastics bereiken drinkwater via verschillende routes:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>AWZI-effluent:</strong> Afvalwaterzuiveringsinstallaties verwijderen circa 95–99% van microplastics, maar het restant bereikt oppervlaktewater dat gebruikt wordt als drinkwaterbron.</li>
          <li><strong>Atmosferische depositie:</strong> Microplastics zweven in de lucht en landen via regen in oppervlaktewater en grondwater.</li>
          <li><strong>Verpakkingsmateriaal:</strong> Plastic leidingen, waterreservoirs en verpakkingen kunnen kleine hoeveelheden microplastics afgeven.</li>
          <li><strong>Landbouwrunoff:</strong> Mulchfolie, mestkorrels en besproeiingswater brengen microplastics naar het grondwater.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          RIVM-onderzoek toonde aan dat Nederlands leidingwater kleine hoeveelheden microplastics bevat — gemiddeld rond de 11 deeltjes per liter. Waterleidingbedrijven filteren al een groot deel uit tijdens het zuiveringsproces, maar eliminatie is met conventionele behandeling niet volledig mogelijk.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat zeggen RIVM en WHO?
        </h2>
        <p className="text-gray-700 mb-4">
          De <strong>WHO</strong> publiceerde in 2019 een rapport over microplastics in drinkwater. Conclusie: er is bij de huidige niveaus onvoldoende bewijs voor directe gezondheidsschade. Wel wordt het voorzorgsbeginsel aangehouden: blootstelling waar mogelijk beperken is verstandig, zeker gezien de toenemende concentraties in het milieu.
        </p>
        <p className="text-gray-700 mb-6">
          Het <strong>RIVM</strong> volgt de situatie actief. Microplastics staan op de EU-monitoringswatchlist onder de Drinkwaterrichtlijn 2020/2184. Vanaf 2026 zijn Nederlandse waterleidingbedrijven verplicht systematisch te monitoren. Een wettelijke maximumnorm is er nog niet, maar die wordt verwacht na de eerste monitoringsronde.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filterefficiëntie per methode
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtermethode</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Verwijdering microplastics</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Mechanisme</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Indicatieve kosten</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">&gt;99%</td>
                <td className="border border-gray-300 px-3 py-2">Membraanfiltratie 0,0001 µm — blokkeert alle plastics</td>
                <td className="border border-gray-300 px-3 py-2">€200–600 installatie</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Keramisch filter</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">~99% (&gt;0,2 µm)</td>
                <td className="border border-gray-300 px-3 py-2">Fysieke barrière 0,2 µm poriën</td>
                <td className="border border-gray-300 px-3 py-2">€80–250</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief kool (blok)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">Beperkt</td>
                <td className="border border-gray-300 px-3 py-2">Adsorptie chemicaliën; geen fysieke barrière</td>
                <td className="border border-gray-300 px-3 py-2">€50–150</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">UV-lamp</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0%</td>
                <td className="border border-gray-300 px-3 py-2">Doodt micro-organismen; verwijdert geen deeltjes</td>
                <td className="border border-gray-300 px-3 py-2">€100–300</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Filterkan (Brita-type)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Minimaal</td>
                <td className="border border-gray-300 px-3 py-2">Niet ontworpen voor deeltjesfiltratie</td>
                <td className="border border-gray-300 px-3 py-2">€20–50</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Let op: filtermateriaal zelf als bron
        </h2>
        <p className="text-gray-700 mb-4">
          Een belangrijk maar onderbelicht punt: goedkope waterfilters van laagwaardige kunststoffen kunnen zelf microplastics afgeven aan het gefilterde water. Dit geldt met name voor filters zonder kwaliteitscertificering.
        </p>
        <p className="text-gray-700 mb-6">
          Kies altijd voor filters met <strong>NSF-certificering</strong> (NSF/ANSI 42, 53 of 58). NSF-certificering vereist tests op migratie van materialen naar drinkwater. Zonder dit keurmerk weet je niet wat er uit het filtermateriaal zelf vrijkomt.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktisch advies
        </h2>
        <div className="space-y-3 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Beste keuze: omgekeerde osmose</h3>
            <p className="text-gray-700 text-sm">Een <a href="/waterfilter/pfas" className="text-[#005F8A] underline">osmosefilter</a> verwijdert meer dan 99% van microplastics én andere verontreinigingen zoals PFAS, lood en nitraat tegelijk. NSF 58-gecertificeerde systemen bieden de meest volledige bescherming.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Goed alternatief: keramisch filter</h3>
            <p className="text-gray-700 text-sm">Voor microplastics groter dan 0,2 µm is een keramisch filter effectief en goedkoper dan osmose. Minder geschikt voor nanoplastics of chemische verontreinigingen.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Niet effectief: filterkan en UV</h3>
            <p className="text-gray-700 text-sm">Filterkannen verwijderen nauwelijks microplastics. UV doodt bacteriën maar heeft geen effect op plastic deeltjes. Combineer UV altijd met een mechanisch filter als je microplastics wilt aanpakken.</p>
          </div>
        </div>

        <div className="space-y-3 mb-8">
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

        <CTABanner context="osmose" />

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <a href="/waterfilter/pfas" className="text-[#005F8A] underline">PFAS filteren uit drinkwater</a>{' '}
          en{' '}
          <a href="/drinkwater/microplastics" className="text-[#005F8A] underline">microplastics in drinkwater (RIVM-overzicht)</a>.
        </p>
      </main>
    </>
  );
}
