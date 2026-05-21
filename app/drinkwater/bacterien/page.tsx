import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Bacteriën in drinkwater: risico\'s en hoe te verwijderen',
  description: 'Bacteriën in drinkwater: E.coli, Legionella, Campylobacter in Nederlands leidingwater. Welke filters verwijderen bacteriën, wanneer is water veilig en.',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwater/bacterien' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Nederlands leidingwater vrij van bacteriën?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, bij de meeste huishoudens. De wettelijke norm is 0 kolonievormende eenheden E.coli per 100 ml aan de tap van de consument. Waterleidingbedrijven voldoen hier vrijwel altijd aan. Uitzonderingen komen voor bij oude binnenhuisleidingen, particuliere putten en na leidingbreuken waarbij een kookadvies wordt afgegeven. Legionella vormt een afzonderlijk risico bij warmwatersystemen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het risico van Legionella in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Legionella groeit in warmwatersystemen tussen 25 °C en 50 °C. De bacterie veroorzaakt veteranenziekte (ernstige longontsteking) via inademing van fijn waternevel — niet via drinken. Preventie: houd koud water onder 25 °C en warm water boven 60 °C. In grotere gebouwen (hotels, ziekenhuizen) is een Legionella-risicoanalyse wettelijk verplicht. Thuisfilters helpen NIET tegen Legionella in warmwatersystemen — temperatuurbeheersing is de enige effectieve maatregel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een waterfilter bacteriën?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dat hangt af van het filtertype. UV-desinfectie doodt 99,99% van bacteriën (log-4-reductie voor E.coli) maar vereist voorfiltratie voor troebel water. Keramische filters houden 99,99% van bacteriën fysiek tegen (0,2 µm poriën kleiner dan bacteriën van 1–10 µm). Osmose verwijdert bacteriën. Standaard actief koolfilters doen dit NIET en kunnen bij onvoldoende onderhoud zelf bacteriën herbergen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat moet ik doen bij een kookadvies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij een kookadvies van het waterleidingbedrijf: kook al het drinkwater, ook water voor tandpoetsen en het bereiden van babyvoeding. Breng water aan de kook en laat het ten minste 1 minuut koken (op hogere altitudes langer). Wacht tot het water is afgekoeld voor gebruik. Een kookadvies geldt tot het waterleidingbedrijf de all-clear geeft na bacteriologische hercontrole.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn particuliere putten veilig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Particuliere putten zijn niet aangesloten op het gedistribueerde leidingnetwerk en vallen buiten het toezicht van waterleidingbedrijven. Het RIVM adviseert jaarlijkse bacteriologische analyse van putwater. Fecale bacteriën (E.coli, coliformen) worden regelmatig aangetroffen, zeker na hevige regenval of bij putten dicht bij vee of mestopslag. UV-desinfectie + keramisch voorfilter is de standaardoplossing voor putwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan een actief koolfilter bacteriën bevatten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Actief koolfilters die niet regelmatig worden vervangen of lang stilstaan kunnen bacteriegroeibronnen worden — het koolmedium biedt voedingsstoffen en een oppervlak voor biofilmvorming. Vervang actief koolcartridges op tijd (zie fabrieksadvies, doorgaans elke 3–6 maanden) en laat bij langdurig stilstaan (vakantie) eerst water doorstromen. Kies voor silver-geïmpregneerde koolfilters als bacteriegroei een zorg is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt UV-filter ook tegen Campylobacter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. UV-desinfectie op de juiste dosis (minimaal 40 mJ/cm²) inactiveert ook Campylobacter effectief. Campylobacter is de meest gemelde voedselinfectie in Nederland en kan via besmet putwater of besmette leidingen binnenkomen. Voor putwater wordt een UV-systeem met keramisch voorfilter sterk aanbevolen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke filter is het beste tegen bacteriën in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor leidingwater met bacteriologische besmetting is UV-desinfectie (99,99% reductie, log-4) gecombineerd met een sedimentvoorfilter de meest praktische oplossing. Voor putwater is UV + keramisch filter de standaard. Osmose verwijdert bacteriën maar vereist regelmatig membraanonderhoud. Keramische filters zonder UV doden bacteriën niet — ze houden ze fysiek tegen maar er is geen garantie als de keramiek beschadigd is.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Bacteriën in drinkwater: risico\'s en hoe te verwijderen',
  description: 'Bacteriën in drinkwater: E.coli, Legionella, Campylobacter in Nederlands leidingwater. Welke filters verwijderen bacteriën, wanneer is water veilig en.',
  datePublished: '2026-04-12',
  dateModified: '2026-04-12',
  url: 'https://waterfilterplatform.nl/drinkwater/bacterien',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function DrinkwaterBacterienPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Bacteriën', item: 'https://waterfilterplatform.nl/drinkwater/bacterien' },
            ],
          },
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/drinkwater" className="hover:underline">Drinkwater</a> &rsaquo;{' '}
          <span>Bacteriën</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Bacteriën in drinkwater: risico&apos;s en hoe te verwijderen
        </h1>

        {/* QuickAnswer */}
        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#003F5C] mb-1">Snel antwoord</p>
          <p className="text-gray-700 text-sm">
            Nederlands leidingwater moet wettelijk vrij zijn van E.coli. UV-filter doodt 99,99% van bacteriën; keramisch filter houdt ze fysiek tegen. Standaard koolfilters zijn niet effectief. Legionella-risico zit in warmwatersystemen, niet in drinkwater zelf — temperatuurbeheersing is de oplossing.
          </p>
        </div>

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bacteriën in drinkwater: welke soorten en waar komen ze vandaan?
        </h2>
        <p className="text-gray-700 mb-4">
          Drinkwater kan verschillende bacteriën bevatten, elk met eigen risicoprofielen en bronnen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>E.coli:</strong> De standaardindicator voor fecale besmetting. Aanwezigheid van E.coli duidt op besmetting met uitwerpselen van mens of dier. Wettelijke norm: 0 KVE/100 ml aan de tap.</li>
          <li><strong>Coliformen:</strong> Ruimere groep van darmbacteriën. Sommige zijn onschadelijk, maar hun aanwezigheid wijst op mogelijke fecale besmetting of biofilmvorming in leidingen.</li>
          <li><strong>Campylobacter:</strong> Meest gemelde voedselvergiftiging in Nederland. Komt in drinkwater via besmette oppervlaktewaterbronnen of private putten dicht bij vee.</li>
          <li><strong>Legionella:</strong> Groeit niet in koud drinkwater, maar in warmwatersystemen tussen 25–50 °C. Verspreidt via aerosol (douche, koeltoren) — niet door drinken.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Nederlands leidingwater: wanneer is het veilig?
        </h2>
        <p className="text-gray-700 mb-4">
          De Nederlandse drinkwaternorm is streng: aan de tap van de consument moet het water vrij zijn van E.coli (0 KVE/100 ml) en Enterococcen (0 KVE/100 ml). Waterleidingbedrijven behandelen water met chloor, UV of ozon en voldoen hier vrijwel altijd aan.
        </p>
        <p className="text-gray-700 mb-6">
          Risicosituaties waarbij leidingwater wél bacteriën kan bevatten:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Oude binnenhuisleidingen met biofilmvorming</li>
          <li>Leidingbreuken of herstelwerkzaamheden in de buurt</li>
          <li>Particuliere wateraansluitingen op eigen terrein (eigenaarverantwoordelijkheid)</li>
          <li>Particuliere putten (grondwater niet behandeld)</li>
          <li>Na overstromingen of extreme neerslag</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Legionella: aparte categorie
        </h2>
        <p className="text-gray-700 mb-4">
          Legionella verdient een aparte bespreking. De bacterie komt niet via drinkwater zelf binnen, maar via ingeademde waterdruppels (aerosol). Risicobronnen zijn: douches, koeltorens, fontijnen en jacuzzi&apos;s.
        </p>
        <p className="text-gray-700 mb-4">
          De gouden regel voor Legionella-preventie is temperatuurbeheersing:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li><strong>Koud water:</strong> altijd onder 25 °C houden</li>
          <li><strong>Warm water:</strong> altijd boven 60 °C opslaan en distribueren</li>
          <li>Regelmatig spoelen van weinig gebruikte kranen (kantoor, vakantiewoning)</li>
          <li>In grotere gebouwen wettelijk verplichte Legionella-risicoanalyse en beheersplan</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Thuisfilters — inclusief osmosefilters — bieden géén bescherming tegen Legionella in warmwatersystemen. Temperatuurbeheersing is de enige effectieve maatregel.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filterefficiëntie voor bacteriën
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtermethode</th>
                <th className="border border-gray-300 px-3 py-2 text-left">E.coli</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Legionella*</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Campylobacter</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">UV-desinfectie</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99,99% (log-4)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Niet in warmwatersysteem</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99,99%</td>
                <td className="border border-gray-300 px-3 py-2">€100–300</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Keramisch filter</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99,99% (barrière)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Niet in warmwatersysteem</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">99,99%</td>
                <td className="border border-gray-300 px-3 py-2">€80–250</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">&gt;99,9%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Niet in warmwatersysteem</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">&gt;99,9%</td>
                <td className="border border-gray-300 px-3 py-2">€200–600</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief kool (standaard)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Niet effectief</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Niet effectief</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Niet effectief</td>
                <td className="border border-gray-300 px-3 py-2">€50–150</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-xs mb-6">*Legionella-risico zit in warmwatersystemen; koude drinkwaterfilters bieden hier geen bescherming.</p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Particuliere putten: wanneer handelen?
        </h2>
        <p className="text-gray-700 mb-4">
          Eigenaren van particuliere putten zijn zelf verantwoordelijk voor de veiligheid van hun drinkwater. Het RIVM adviseert jaarlijkse bacteriologische analyse. Aanwijzingen dat je water moet testen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Hevige regenval of overstromingen in de buurt</li>
          <li>Vee of mestopslag in de nabijheid van de put</li>
          <li>Troebel water of ongewone geur</li>
          <li>Gastro-intestinale klachten bij gezinsleden na consumptie van putwater</li>
        </ul>

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

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/stoffen-in-drinkwater/microbiologisch" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Microbiologische waterkwaliteit</h3>
            <p className="text-sm text-gray-600">Achtergronden van microbiologische risicos en normen in drinkwater.</p>
          </a>
          <a href="/filtertechnieken/uv-sterilisatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">UV-sterilisatie</h3>
            <p className="text-sm text-gray-600">Hoe UV-licht bacterien en virussen effectief inactiveert.</p>
          </a>
          <a href="/waterfilter/legionella" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor legionella</h3>
            <p className="text-sm text-gray-600">Welke filteropties bescherming bieden tegen legionella-risicos.</p>
          </a>
          <a href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</h3>
            <p className="text-sm text-gray-600">Wettelijke normen voor drinkwaterkwaliteit in Nederland.</p>
          </a>
        </div>
      </section>

        <CTABanner context="osmose" />

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <a href="/drinkwater/lood" className="text-[#005F8A] underline">lood in drinkwater</a>{' '}
          en{' '}
          <a href="/waterfilter/microplastics" className="text-[#005F8A] underline">microplastics filteren uit drinkwater</a>.
        </p>
      </main>
    </>
  );
}
