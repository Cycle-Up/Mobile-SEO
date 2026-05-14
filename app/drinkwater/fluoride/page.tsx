import type { Metadata } from 'next';
import CTABanner from '@/components/CTABanner';
import SchemaOrg from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Fluoride in Nederlands Drinkwater: Feiten & Filters',
  description: 'Wordt fluoride toegevoegd aan Nederlands drinkwater? Nee, al gestopt in 1973. Actuele concentraties (0,05–0,2 mg/L), EU-norm en welke filters fluoride verwijderen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwater/fluoride' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wordt fluoride toegevoegd aan Nederlands drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Nederland heeft fluoridering van drinkwater in 1973 gestopt, als een van de eerste landen ter wereld. De Hoge Raad oordeelde dat massatoevoeging van een stof aan drinkwater zonder individuele toestemming niet was toegestaan. Sindsdien bevat Nederlands leidingwater alleen van nature aanwezig fluoride: gemiddeld 0,05–0,2 mg/L, ruim onder de EU-norm van 1,5 mg/L.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is fluoride in drinkwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij de concentraties in Nederlands leidingwater (0,05–0,2 mg/L) is fluoride niet gevaarlijk. De WHO-richtlijn is 1,5 mg/L. Problematische fluorideconcentraties (>1,5 mg/L) komen voor in grondwater in sommige Afrikaanse en Aziatische landen en kunnen tanden en botten beschadigen (fluorose). In Nederland is dit risico niet aanwezig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke waterfilters verwijderen fluoride?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Omgekeerde osmose (RO) verwijdert 90–96% van fluoride. Actief kool verwijdert fluoride NIET effectief. Bone char (dierlijk actief kool) en aluminiumoxide-filters zijn specifiek ontwikkeld voor fluorideverwijdering maar worden weinig gebruikt in huishoudelijk gebruik. Voor Nederlandse leidingwater is fluorideverwijdering vrijwel nooit nodig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is osmosewater zonder fluoride schadelijk voor tanden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. De fluoride-inname via drinkwater in Nederland is sowieso al minimaal (0,05–0,2 mg/L). Het meeste fluoridbescherming voor tanden komt van tandpasta (1.000–1.500 ppm fluoride). Tandartsen en WHO stellen dat verwijdering van de kleine hoeveelheid fluoride uit Nederlands leidingwater geen klinisch relevant effect heeft op tandgezondheid.',
      },
    },
  ],
};

export default function DrinkwaterFluoridePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Drinkwater', item: 'https://waterfilterplatform.nl/drinkwater' },
              { '@type': 'ListItem', position: 3, name: 'Fluoride', item: 'https://waterfilterplatform.nl/drinkwater/fluoride' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/drinkwater" className="hover:underline">Drinkwater</a> &rsaquo;{' '}
          <span>Fluoride</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Fluoride in Nederlands Drinkwater: Feiten & Filters
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Nederland voegt al 50 jaar geen fluoride toe aan drinkwater. Wat zit er dan wel in, wat zegt de wetenschap, en wanneer wil je het verwijderen?
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Fluoridering in Nederland gestopt in 1973
        </h2>
        <p className="text-gray-700 mb-4">
          Nederland experimenteerde van 1960 tot 1973 met fluoridedosering in drinkwater in enkele gemeenten. Na een historisch rechtszaak oordeelde de Hoge Raad dat het toevoegen van een stof aan drinkwater zonder toestemming van individuele burgers wettelijk niet was toegestaan. Sindsdien bevat Nederlands leidingwater uitsluitend van nature aanwezig fluoride.
        </p>
        <p className="text-gray-700 mb-6">
          De actuele fluorideconcentratie in Nederlands leidingwater is gemiddeld <strong>0,05–0,2 mg/L</strong> — ver onder de EU-norm van 1,5 mg/L (Drinkwaterbesluit 2023) en de WHO-richtlijn van eveneens 1,5 mg/L.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Fluoride: feiten en wetenschap
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Aspect</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Nederlands leidingwater</td>
                <td className="border border-gray-300 px-3 py-2">0,05–0,2 mg/L (van nature)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">EU-norm (max)</td>
                <td className="border border-gray-300 px-3 py-2">1,5 mg/L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">WHO-richtlijn (max)</td>
                <td className="border border-gray-300 px-3 py-2">1,5 mg/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Fluoride-risico (>4 mg/L)</td>
                <td className="border border-gray-300 px-3 py-2">Skeletfluorose (chronisch)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Tandpasta (ter vergelijking)</td>
                <td className="border border-gray-300 px-3 py-2">1.000–1.500 ppm (mg/kg)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Landen die drinkwater wél fluorideerden (VS, Australië, UK, Ierland) doen dit op 0,7–1,0 mg/L — een niveau waarop Cochrane-reviews positieve effecten op tandbederf aantonen, maar ook discussie over milde tandvlekken (dentale fluorose) bij kinderen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke filters verwijderen fluoride?
        </h2>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Omgekeerde osmose (RO) — 90–96% reductie</h3>
            <p className="text-gray-700 text-sm">Meest effectieve thuisfilter voor fluoride. Membraan van 0,0001 µm houdt de meeste opgeloste ionen tegen. Voor Nederlandse leidingwater vrijwel nooit nodig, maar ideaal als je toch wilt filteren.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Actief koolfilter — niet effectief voor fluoride</h3>
            <p className="text-gray-700 text-sm">Actief kool adsorbeert chloor, geur en organische stoffen goed, maar fluoride (als fluoride-ion) wordt amper vastgehouden. Dit is een veelvoorkomende misvatting.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Bone char / aluminiumoxide — speciaal voor fluoride</h3>
            <p className="text-gray-700 text-sm">Specifieke fluoride-adsorptiemedia. Effectief maar vereist regelmatige regeneratie. Zelden gebruikt in West-Europa omdat fluorideconcentraties al laag zijn.</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
          <p className="text-blue-800 text-sm font-medium">
            <strong>Conclusie voor Nederland:</strong> Fluoride is in Nederlands leidingwater geen gezondheidsprobleem. Een osmosefilter verwijdert het als bijproduct van de algemene zuivering. Er is geen specifieke reden om fluoride te verwijderen uit Nederlands kraanwater.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Veelgestelde vragen
        </h2>
        <div className="space-y-3 mb-8">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <CTABanner />

        <p className="text-gray-600 text-sm mt-6">
          Meer over drinkwaterkwaliteit: <a href="/drinkwater/kwaliteit-test" className="text-[#005F8A] underline">drinkwater testen</a> of <a href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</a>.
        </p>
      </main>
    </>
  );
}
