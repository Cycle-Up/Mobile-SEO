import type { Metadata } from 'next';
import CTABanner from '@/components/CTABanner';
import SchemaOrg from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Is Osmosewater Gezond? Feiten & Fabels Onderzocht',
  description: 'Osmosewater bevat bijna geen mineralen — maar is dat ongezond? Wetenschappelijk onderbouwde antwoorden over osmosewater en gezondheid, remineralisatie en dagelijks gebruik.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/gezond' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is osmosewater gezond om te drinken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, osmosewater is veilig en gezond om te drinken. De WHO heeft geconcludeerd dat het ontbreken van mineralen in drinkwater geen gezondheidsrisico vormt als je gevarieerd eet. Je krijgt calcium en magnesium voornamelijk uit voeding, niet uit water. De zuiverheid van osmosewater — vrij van lood, PFAS, bacteriën en chloor — is een duidelijk voordeel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mist je mineralen door osmosewater te drinken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, niet bij een normaal voedingspatroon. Drinkwater levert gemiddeld 10–20% van de dagelijkse calciuminname en 4–8% van magnesium. Bij gevarieerde voeding — groenten, zuivel, noten, volle granen — is dit gemakkelijk te compenseren. Wie wil remineraliseren kan een remineralisatiefilter toevoegen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom smaakt osmosewater soms zuur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater heeft een lage buffercapaciteit en lost CO2 uit de lucht op, waardoor de pH licht daalt (6,0–6,5). Dit voelt "vlak" of licht zuur aan. Een remineralisatiefilter of calcietfilter herstelt de pH naar 7,0–7,5 en verbetert de smaak aanzienlijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie mag osmosewater NIET drinken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater is voor vrijwel iedereen geschikt. Zuigelingen tot 6 maanden krijgen bij voorkeur water met remineralisatie als dat water voor babyvoeding wordt gebruikt. Mensen met ernstig kalium- of magnesiumtekort (specifieke medische aandoeningen) raadplegen hun arts. Voor sporters op intensieve training kan remineralisatie van elektrolyten zinvol zijn.',
      },
    },
  ],
};

export default function OsmoseWaterGezondPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
              { '@type': 'ListItem', position: 3, name: 'Osmosewater gezond', item: 'https://waterfilterplatform.nl/osmose-water/gezond' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/omgekeerde-osmose" className="hover:underline">Omgekeerde osmose</a> &rsaquo;{' '}
          <span>Is osmosewater gezond?</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Is Osmosewater Gezond? Feiten & Fabels
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Osmosewater is vrijwel volledig zuiver — geen kalk, geen chloor, geen lood, geen PFAS. Maar dat roept de vraag op: mis je dan ook gezonde mineralen? We leggen uit wat de wetenschap zegt.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat zit er niet meer in osmosewater?
        </h2>
        <p className="text-gray-700 mb-4">
          Een <a href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde-osmosefilter</a> verwijdert nagenoeg alles uit water: mineralen, zware metalen, bacteriën, virussen, microplastics, medicijnresten en hormoonverstorende stoffen. Het resulterende water heeft een TDS (totaal opgeloste stoffen) van doorgaans 5–20 mg/L — versus 150–450 mg/L in normaal leidingwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Voordelen van osmosewater voor de gezondheid
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Geen lood:</strong> RO verwijdert 95–99% van lood — cruciaal voor huishoudens met oud leidingwerk en voor zwangere vrouwen.</li>
          <li><strong>Geen PFAS:</strong> Osmosefilters verwijderen 90%+ van PFAS-verbindingen, de hormoonverstorende &ldquo;forever chemicals&rdquo;.</li>
          <li><strong>Geen nitraat:</strong> Relevant voor privéputten in landbouwgebieden; RO verwijdert 85–95%.</li>
          <li><strong>Geen chloor en THM&rsquo;s:</strong> Trihalomethanen (bijproducten van chloordesinfectie) worden volledig verwijderd.</li>
          <li><strong>Geen bacteriën of virussen:</strong> Het RO-membraan is een effectieve barrière tegen micro-organismen.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Het mineraalvraagstuk: wat zegt de wetenschap?
        </h2>
        <p className="text-gray-700 mb-4">
          De meestgehoorde zorg over osmosewater is het gebrek aan mineralen. De WHO heeft dit uitgebreid onderzocht (rapport &ldquo;Nutrients in Drinking Water&rdquo;, 2005, met updates). Conclusies:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Drinkwater levert gemiddeld <strong>10–20% van de dagelijkse calcium</strong> en <strong>4–8% van de magnesium</strong>behoefte — mits het hard water is.</li>
          <li>Bij gevarieerd eten (groenten, zuivel, noten, volkoren) zijn deze aandelen gemakkelijk te compenseren.</li>
          <li>Er is geen bewijs dat langdurig gebruik van gemineraliseerd-arm water gezondheidsschade veroorzaakt bij mensen met een normaal voedingspatroon.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Kortom: osmosewater drinken is geen probleem als je goed eet. Remineralisatie is een optie, geen vereiste.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Remineralisatie: wanneer en hoe?
        </h2>
        <p className="text-gray-700 mb-4">
          Wie de smaak van kraanwater wil benaderen, of die extra zekerheid wil over mineraleninname, kan een remineralisatiefilter toevoegen aan het osmosesysteem. Dit is een calcietpatroon (calciumcarbonaat) of een magnesiumoxide-patroon die geringe hoeveelheden mineralen toevoegen.
        </p>
        <p className="text-gray-700 mb-4">
          Resultaat: TDS stijgt van 10 naar 50–80 mg/L, pH van 6,2 naar 7,0–7,5. Water smaakt ronder en minder vlak.
        </p>
        <p className="text-gray-700 mb-4">
          Lees meer over dit proces in ons artikel over <a href="/osmose-water/remineralisatie" className="text-[#005F8A] underline">osmosewater remineralisatie</a>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosewater vs. kraanwater vs. flessenwater
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Aspect</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Osmosewater</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kraanwater</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Flessenwater</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Lood</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Verwijderd (95-99%)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Afhankelijk leidingwerk</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Geen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">PFAS</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Sterk gereduceerd</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Binnen norm</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Variabel</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Mineralen</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Minimaal (opt. toevoegen)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Aanwezig</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Aanwezig</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Kosten per liter</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">€0,01–0,03</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">€0,001</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">€0,50–2,00</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Microplastics</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Verwijderd</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Laag</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Hoog (plastic fles)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <div className="bg-[#E0F2FE] rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Zelf osmosewater produceren?</h3>
          <p className="text-gray-700 mb-4">
            Onze 4-in-1 osmosekraan geeft direct schoon, gefilterd water — met optionele remineralisatie voor de perfecte smaak.
          </p>
          <a href="/omgekeerde-osmose/kopen" className="inline-block bg-[#005F8A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#003F5C] transition-colors">
            Bekijk osmosefilters →
          </a>
        </div>

        <p className="text-gray-600 text-sm">
          Lees ook: <a href="/kennisbank/osmose-water-gezond" className="text-[#005F8A] underline">Osmosewater en gezondheid: uitgebreide analyse</a> en <a href="/osmose-water/remineralisatie" className="text-[#005F8A] underline">osmosewater remineraliseren</a>.
        </p>
      </main>
    </>
  );
}
