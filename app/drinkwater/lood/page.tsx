import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { SchemaOrg } from '@/components/SchemaOrg';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lood in Drinkwater: Risico, Testen & Verwijderen',
  description: 'Lood in drinkwater via oude loodleidingen: gezondheidsrisico\'s, EU-norm 10 µg/L, hoe je lood kunt testen en welke waterfilters lood effectief verwijderen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwater/lood' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe komt lood in mijn drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lood in drinkwater is vrijwel altijd afkomstig van loodleidingen in het huis zelf, niet van het drinkwaternetwerk. Woningen gebouwd vóór 1960 kunnen nog loodleidingen hebben. Lood lost op wanneer water (zeker zuur, zacht of koolzuurhoudend water) in contact staat met loden buizen of loodgesoldeerde koperen verbindingen. Het eerste water dat &rsquo;s ochtends uit de kraan komt na stilstand heeft de hoogste loodconcentraties.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de EU-norm voor lood in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sinds 2023 geldt de nieuwe EU-drinkwaterrichtlijn (2020/2184): maximum 10 µg/L lood (per 2023; was 25 µg/L tot 2023). Veel toxicologen en de WHO pleiten voor een nog lagere norm, omdat er geen veilige drempelwaarde voor lood bestaat voor kinderen. Bij zwangerschap en kinderen jonger dan 6 jaar wordt een streefwaarde van 5 µg/L aanbevolen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe test ik op lood in mijn drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Opties: (1) Loodteststrip (€15–25, bouwmarkt): detecteert lood boven ca. 5 µg/L, niet heel nauwkeurig. (2) Thuistestkit (€20–50): specifiek voor lood, nauwkeuriger maar nog steeds indicatief. (3) Laboratoriumanalyse (€30–80 voor alleen lood): meest betrouwbaar. Neem het monster \'s ochtends vroeg na minimaal 8 uur stilstand — dit geeft de worst-case meting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke waterfilters verwijderen lood uit drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Omgekeerde osmose verwijdert 95–99% van lood — de meest effectieve thuisoplossing. NSF 58-gecertificeerde filters zijn getest op loodverwijdering. Actief kool (NSF 53-gecertificeerd) verwijdert ook lood maar minder consistent dan RO. Zeoliet-filters werken specifiek voor zware metalen. Brita-type kannenfilters zijn NIET gecertificeerd voor loodverwijdering.',
      },
    },
  ],
};

export default function DrinkwaterLoodPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Lood', item: 'https://waterfilterplatform.nl/drinkwater/lood' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/drinkwater" className="hover:underline">Drinkwater</Link> &rsaquo;{' '}
          <span>Lood</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Lood in Drinkwater: Risico, Testen & Verwijderen
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Loodleidingen in oudere woningen kunnen lood afscheiden in drinkwater — ook als je leidingwater op zich veilig is. We leggen uit hoe je het herkent, test en aanpakt.
        </p>

        <HealthDisclaimer />
        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Risico per bouwjaar woning
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Bouwjaar</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Risico loodleidingen</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Advies</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Vóór 1945</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">Hoog</td>
                <td className="border border-gray-300 px-3 py-2">Test en vervang of filter</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">1945–1960</td>
                <td className="border border-gray-300 px-3 py-2 text-orange-600 font-medium">Matig-hoog</td>
                <td className="border border-gray-300 px-3 py-2">Test sterk aanbevolen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">1960–1980</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600 font-medium">Mogelijk</td>
                <td className="border border-gray-300 px-3 py-2">Test bij twijfel</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Na 1980</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600 font-medium">Laag</td>
                <td className="border border-gray-300 px-3 py-2">Normaal gebruik</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktische maatregelen
        </h2>
        <p className="text-gray-700 mb-4">
          Als je vermoedt dat je woning loodleidingen heeft:
        </p>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Direct: laat water lopen</h3>
            <p className="text-gray-700 text-sm">Laat &rsquo;s ochtends de kraan 30–60 seconden lopen voordat je het water drinkt. Dit spoelt het stilstaande water met hoge loodconcentraties door.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Middellange termijn: osmosefilter</h3>
            <p className="text-gray-700 text-sm">Een osmosefilter onder je aanrecht verwijdert 95–99% van het lood. Gecertificeerd op NSF 58-standaard. Dit is de meest praktische oplossing zonder leidingwerk.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Structureel: leidingen vervangen</h3>
            <p className="text-gray-700 text-sm">Definitieve oplossing. De gemeente kan de binnenkomende waterleiding vervangen; het leidingwerk binnen de woning is jouw verantwoordelijkheid. Kosten: €2.000–8.000 afhankelijk van de woning.</p>
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

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/stoffen-in-drinkwater/zware-metalen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Zware metalen in drinkwater</h3>
            <p className="text-sm text-gray-600">Overzicht van zware metalen die in drinkwater kunnen voorkomen.</p>
          </Link>
          <Link href="/drinkwaternormen/lood" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Loodnormen drinkwater</h3>
            <p className="text-sm text-gray-600">Wettelijke normen voor lood in drinkwater en wat ze betekenen.</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">Hoe omgekeerde osmose lood en andere verontreinigingen verwijdert.</p>
          </Link>
          <Link href="/waterfilter/lood" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor lood</h3>
            <p className="text-sm text-gray-600">Welke waterfilters lood effectief uit drinkwater verwijderen.</p>
          </Link>
        </div>
      </section>

        <CTABanner />

        <p className="text-gray-600 text-sm mt-6">
          Zie ook: <Link href="/drinkwater/kwaliteit-test" className="text-[#005F8A] underline">drinkwater testen</Link> en <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose werking</Link>.
        </p>
      </main>
    </>
  );
}
