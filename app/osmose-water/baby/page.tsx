import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Osmose water voor baby\'s: veilig voor babyvoeding? (2026)',
  description: 'Is osmose water veilig voor babyvoeding? WHO-richtlijn, TDS-waarden, remineralisatie als oplossing. Wat osmose verwijdert (nitraat, lood, PFAS) en wanneer het ideaal is voor baby\'s.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/baby' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is osmose water veilig voor babyvoeding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puur osmose water (TDS 10–30 mg/L) wordt door de WHO afgeraden voor babyvoeding omdat het te weinig mineralen bevat. Osmose water mét remineralisatie (TDS 150–250 mg/L) is echter uitstekend geschikt: het combineert de verwijdering van schadelijke stoffen (nitraat, lood, PFAS, bacteriën) met een mineralengehalte vergelijkbaar met geschikt kraanwater. Controleer altijd of het remineralisatiefilter is geplaatst.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zegt de WHO over gedemineraliseerd water voor baby\'s?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De WHO heeft in haar richtlijnen aangegeven dat volledig gedemineraliseerd water niet aanbevolen wordt voor het bereiden van babyvoeding. Babymelkpoeder veronderstelt een bepaald mineralengehalte in het aanmaakwater. Bij gebruik van water met extreem laag TDS (onder 50 mg/L) kunnen de mineraalverhoudingen in de bereide voeding onjuist worden. Osmose + remineralisatie lost dit probleem op.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk TDS-gehalte is geschikt voor babyvoeding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De Specialty Coffee Association (SCA) en WHO-kaders voor babywater wijzen op een TDS van 150–250 mg/L als optimaal voor het aanmaken van babymelk. Puur osmose water heeft een TDS van 10–30 mg/L — te laag. Gewoon Nederlands leidingwater heeft een TDS van 150–400 mg/L, afhankelijk van de regio. Osmose met remineralisatie bereikt doorgaans een TDS van 150–250 mg/L — ideaal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert osmose nitraat uit water voor baby\'s?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Omgekeerde osmose verwijdert 85–95% van nitraat. Dit is belangrijk voor baby\'s: de WHO-grenswaarde voor nitraat is 25 mg/L voor zuigelingen, strenger dan de volwassenennorm van 50 mg/L. Nitraat kan bij baby\'s methemoglobinemie (blauwe baby-syndroom) veroorzaken. In gebieden met hoge nitraatwaarden in leidingwater (landbouwgebieden) is osmose + remineralisatie de veiligste keuze voor babyvoeding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert osmose water lood — en is dat belangrijk voor baby\'s?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Omgekeerde osmose verwijdert 95–99% van lood. Er is geen veilige drempelwaarde voor lood bij zuigelingen en jonge kinderen — zelfs zeer lage concentraties kunnen de neurologische ontwikkeling schaden. Woningen gebouwd voor 1960 kunnen nog loodleidingen hebben. Voor babyvoeding in oudere woningen is osmose + remineralisatie sterk aanbevolen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zeggen fabrikanten van babymelkpoeder over water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meeste fabrikanten adviseren "geschikt drinkwater" of "water met een laag mineralengehalte". Specifiek wordt vaak vermeld: natriumgehalte onder 200 mg/L, nitraat onder 10 mg/L en fluoride niet te hoog. Puur osmose water voldoet aan de mineraalvereisten niet (te laag), maar osmose + remineralisatie voldoet aan alle criteria. Raadpleeg ook de specifieke richtlijn van het gebruikte merk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe werkt remineralisatie bij een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een remineralisatiefilter voegt calcium, magnesium en andere mineralen terug toe aan het osmose water via een kalksteen- of dolomietbed. Het resultaat is water met een TDS van 150–250 mg/L en een licht basische pH (7,2–8,0). De meeste osmosesystemen van kwaliteit worden aangeboden met een remineralisatiemodule als vijfde of zesde filterstap. Vervang het remineralisatiefilter zoals aanbevolen (doorgaans jaarlijks).',
      },
    },
    {
      '@type': 'Question',
      name: 'Mag ik kraanwater gebruiken voor babyvoeding in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste Nederlandse gemeenten is kraanwater veilig voor babyvoeding. Uitzonderingen zijn: woningen met loodleidingen (voor 1960 gebouwd), gebieden met nitraat boven 25 mg/L (landbouwgebieden) of verhoogde PFAS-niveaus. Twijfel je? Laat water testen op nitraat, lood en bacteriën, of kies voor osmose + remineralisatie als volledige oplossing.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmose water voor baby\'s: veilig voor babyvoeding? (2026)',
  description: 'Is osmose water veilig voor babyvoeding? WHO-richtlijn, TDS-waarden, remineralisatie als oplossing. Wat osmose verwijdert (nitraat, lood, PFAS) en wanneer het ideaal is voor baby\'s.',
  datePublished: '2026-04-12',
  dateModified: '2026-04-12',
  url: 'https://waterfilterplatform.nl/osmose-water/baby',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseWaterBabyPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Osmose water', item: 'https://waterfilterplatform.nl/osmose-water' },
              { '@type': 'ListItem', position: 3, name: 'Baby', item: 'https://waterfilterplatform.nl/osmose-water/baby' },
            ],
          },
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/osmose-water" className="hover:underline">Osmose water</a> &rsaquo;{' '}
          <span>Baby</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Osmose water voor baby&apos;s: veilig voor babyvoeding? (2026)
        </h1>

        {/* QuickAnswer */}
        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#003F5C] mb-1">Snel antwoord</p>
          <p className="text-gray-700 text-sm">
            Puur osmose water is te mineraalarm voor babyvoeding (WHO-advies). Osmose met remineralisatie bereikt een TDS van 150–250 mg/L en is ideaal: het verwijdert nitraat, lood en PFAS terwijl het de juiste mineralen bevat. Dit is de beste waterkeuze voor babyvoeding in risicogebieden.
          </p>
        </div>

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Het dilemma: schoon water versus mineralen
        </h2>
        <p className="text-gray-700 mb-4">
          Ouders van pasgeborenen staan voor een afweging. Aan de ene kant is er de wens om baby&apos;s te beschermen tegen verontreinigingen in kraanwater: nitraat, lood, PFAS en eventueel bacteriën. Aan de andere kant waarschuwen voedingsdeskundigen en de WHO dat volledig gedemineraliseerd water niet geschikt is voor het aanmaken van babymelkpoeder.
        </p>
        <p className="text-gray-700 mb-6">
          De oplossing is niet &eacute;&eacute;n van beiden kiezen — maar beide combineren via osmose met remineralisatie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is het TDS-gehalte van osmose water?
        </h2>
        <p className="text-gray-700 mb-4">
          TDS staat voor Total Dissolved Solids — het totale gehalte aan opgeloste stoffen in water, uitgedrukt in mg/L. Een osmosemembraan verwijdert 95–99% van alle opgeloste stoffen. Resultaat:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li><strong>Puur osmose water:</strong> TDS 10–30 mg/L</li>
          <li><strong>Nederlands leidingwater:</strong> TDS 150–400 mg/L (afhankelijk van regio)</li>
          <li><strong>Osmose + remineralisatie:</strong> TDS 150–250 mg/L</li>
          <li><strong>Geschikt voor babyvoeding (aanbevolen):</strong> TDS 150–250 mg/L</li>
        </ul>
        <p className="text-gray-700 mb-6">
          De WHO heeft aangegeven dat voor het bereiden van babymelkpoeder water met een te laag mineralengehalte de mineraalverhoudingen in de bereide voeding kan verstoren. Calcium en magnesium zijn essentieel voor de botontwikkeling van zuigelingen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat osmose verwijdert dat belangrijk is voor baby&apos;s
        </h2>
        <p className="text-gray-700 mb-4">
          Juist voor baby&apos;s zijn bepaalde verontreinigingen extra gevaarlijk:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Nitraat:</strong> WHO-grenswaarde voor zuigelingen is 25 mg/L — strenger dan de volwassenennorm van 50 mg/L. Nitraat kan blauwe-babysyndroom (methemoglobinemie) veroorzaken. Osmose verwijdert 85–95% van nitraat. Kritisch in landbouwgebieden.
          </li>
          <li>
            <strong>Lood:</strong> Er is geen veilig niveau voor lood bij baby&apos;s. Lood schaadt de neurologische ontwikkeling. Osmose verwijdert 95–99%. Essentieel in woningen gebouwd voor 1960.
          </li>
          <li>
            <strong>PFAS:</strong> &ldquo;Forever chemicals&rdquo; die zich ophopen in het lichaam. Osmose verwijdert 90–99% van PFAS. Relevant in risicogebieden (Schiphol, Dordrecht, militaire bases).
          </li>
          <li>
            <strong>Bacteriën:</strong> Osmose + UV (in gecombineerde systemen) verwijdert en inactiveert bacteriën. Relevant voor putwater of bij kookadviezen.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijking watertypen voor babyvoeding
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Watertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">TDS</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Nitraat</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Lood</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Bacteriën</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Geschikt voor baby?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Puur osmose water</td>
                <td className="border border-gray-300 px-3 py-2">10–30 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Vrijwel 0</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Vrijwel 0</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Verwijderd</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700 font-medium">Nee (te weinig mineralen)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Osmose + remineralisatie</td>
                <td className="border border-gray-300 px-3 py-2">150–250 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Verwijderd</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Verwijderd</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Verwijderd</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Ja (ideaal)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Nederlands kraanwater</td>
                <td className="border border-gray-300 px-3 py-2">150–400 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Variabel</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Risico bij oude leidingen</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Doorgaans vrij</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">Doorgaans ja*</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Flessenwater (geschikt)</td>
                <td className="border border-gray-300 px-3 py-2">100–250 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Laag</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Vrijwel 0</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Vrij</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Ja (duur)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Putwater</td>
                <td className="border border-gray-300 px-3 py-2">Variabel</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Risico (landbouw)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Risico (bodem)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Risico</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700 font-medium">Nee zonder filter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-xs mb-6">*Controleer op nitraat (&gt;25 mg/L) en lood bij woningen gebouwd voor 1960.</p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Remineralisatie: de beste-van-beide-werelden oplossing
        </h2>
        <p className="text-gray-700 mb-4">
          Een osmosesysteem met remineralisatiefilter geeft het beste resultaat voor babyvoeding:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
          <li>Het osmosemembraan verwijdert nitraat, lood, PFAS, pesticiden, bacteriën en alle andere verontreinigingen.</li>
          <li>Het remineralisatiefilter voegt calcium en magnesium terug toe via een kalksteen- of dolomietbed.</li>
          <li>Het resulterende water heeft een TDS van 150–250 mg/L — vergelijkbaar met goed kraanwater en geschikt voor babymelk.</li>
        </ol>
        <p className="text-gray-700 mb-6">
          Lees meer over de werking van remineralisatie in ons artikel over{' '}
          <a href="/osmose-water/mineralen" className="text-[#005F8A] underline">mineralen in osmose water</a>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktisch advies voor ouders
        </h2>
        <div className="space-y-3 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Gebruik altijd osmose + remineralisatie</h3>
            <p className="text-gray-700 text-sm">Puur osmose water is niet geschikt voor babyvoeding. Controleer of jouw osmosesysteem een remineralisatiestap bevat en of het filter niet verlopen is. Vervang het remineralisatiefilter zoals aanbevolen (doorgaans jaarlijks).</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Test op nitraat bij landbouwgebieden</h3>
            <p className="text-gray-700 text-sm">Woon je in een landbouwintensieve regio (Brabant, Zeeland, Groningen)? Laat het leidingwater testen op nitraat. Als de waarde boven 25 mg/L ligt, is osmose + remineralisatie voor babyvoeding sterk aanbevolen.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Oudere woning? Test op lood</h3>
            <p className="text-gray-700 text-sm">Woningen gebouwd voor 1960 kunnen loodleidingen hebben. Voor babyvoeding is er geen veilig looddniveau. Een osmosefilter (NSF 58-gecertificeerd) verwijdert 95–99% van lood.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Gewoon kraanwater kan ook veilig zijn</h3>
            <p className="text-gray-700 text-sm">In de meeste Nederlandse gemeenten met modern leidingwerk is kraanwater veilig voor babyvoeding. Twijfel je niet? Gebruik dan kraanwater. Twijfel je wel, of woon je in een risicogebied? Kies osmose + remineralisatie.</p>
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
          <a href="/osmose-water/mineralen" className="text-[#005F8A] underline">mineralen in osmose water en remineralisatie</a>{' '}
          en{' '}
          <a href="/drinkwater/nitraat" className="text-[#005F8A] underline">nitraat in drinkwater</a>.
        </p>
      </main>
    </>
  );
}
