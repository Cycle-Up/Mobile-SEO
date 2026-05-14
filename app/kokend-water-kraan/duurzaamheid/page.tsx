import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Kokend Water Kraan Duurzaamheid: Energie & CO2-impact',
  description: 'Is een kokend water kraan duurzamer dan een waterkoker? Energieverbruik vergelijking, CO2-footprint, isolatietechnologie en hoe je het duurzaamst kookt.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/duurzaamheid' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Verbruikt een kokend water kraan meer energie dan een waterkoker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het hangt af van je gebruikspatroon. Een waterkoker met 1,5 liter verbruikt ca. 0,1 kWh per keer. Een kokend water kraan heeft een geïsoleerde boiler die continu op temperatuur blijft: standby-verbruik 5–8 W (= 43–70 kWh/jaar, ca. €10–17). Bij 3–5 kopjes thee per dag is een waterkoker goedkoper; bij intensief gebruik (>10 kopjes/dag) wint de kokend water kraan door efficiëntere warmteopslag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe duurzaam zijn kokend water kranen vergeleken met waterkokers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kokend water kranen hebben voordelen: (1) Ze koken nooit meer water dan nodig — geen 1,5L koker voor 1 kopje thee. (2) Geen herkookverlies — waterkoker wordt steeds opnieuw ingeschakeld. (3) Levensduur kraan ca. 10–15 jaar vs. 3–5 jaar voor waterkoker. Nadeel: de standby energie-last bestaat continu, ook als je er niet bent. Met tijdschakelaar is dit op te lossen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de CO2-voetafdruk van een kokend water kraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij gemiddeld Nederlands stroomverbruik (2026: ca. 250 g CO2/kWh) geeft 60 kWh standby-verbruik per jaar ca. 15 kg CO2. Vergelijk: een plasticwaterkoker produceert bij productie ca. 5 kg CO2 en wordt elke 3–5 jaar vervangen. Netto is de jaarlijkse CO2-impact van beide vergelijkbaar, maar een kwaliteitskraan met 15 jaar levensduur wint op langere termijn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke energie-besparende functies hebben kokend water kranen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moderne kranen hebben: (1) Nachtstand/eco-modus: boiler koelt af naar 75°C of wordt uitgeschakeld. (2) Programmeerbare tijdschakelaars. (3) Betere isolatie: sommige merken claimen minder dan 3 W standby. (4) Variabele temperatuurinstelling: voor groene thee (70°C) minder energie dan voor koken. PureAqua 4-in-1 kan temperatuur instellen om energie te besparen.',
      },
    },
  ],
};

export default function KokendWaterKraanDuurzaamheidPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Kokend water kraan', item: 'https://waterfilterplatform.nl/kokend-water-kraan' },
              { '@type': 'ListItem', position: 3, name: 'Duurzaamheid', item: 'https://waterfilterplatform.nl/kokend-water-kraan/duurzaamheid' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/kokend-water-kraan" className="hover:underline">Kokend water kraan</a> &rsaquo;{' '}
          <span>Duurzaamheid</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Kokend Water Kraan Duurzaamheid: Energie & CO2-impact
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Is een kokend water kraan milieuvriendelijker dan een waterkoker? We vergelijken energieverbruik, CO2-impact en levensduur — zodat je een bewuste keuze maakt.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Energieverbruik: kokend water kraan vs. waterkoker
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Scenario</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Waterkoker</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kokend water kraan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">2 kopjes thee/dag</td>
                <td className="border border-gray-300 px-3 py-2">~18 kWh/jaar</td>
                <td className="border border-gray-300 px-3 py-2">~65 kWh/jaar (standby)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">6 kopjes thee/dag</td>
                <td className="border border-gray-300 px-3 py-2">~55 kWh/jaar</td>
                <td className="border border-gray-300 px-3 py-2">~70 kWh/jaar</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">10+ kopjes + koken</td>
                <td className="border border-gray-300 px-3 py-2">~90 kWh/jaar</td>
                <td className="border border-gray-300 px-3 py-2">~75 kWh/jaar</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Kantoor/intensief</td>
                <td className="border border-gray-300 px-3 py-2">~200+ kWh/jaar</td>
                <td className="border border-gray-300 px-3 py-2">~85 kWh/jaar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-xs mb-6">Berekend op basis van 2.300W waterkoker en 5-7W standby (kraan). Kokend water kraanverbruik stijgt nauwelijks bij meer gebruik door warmteopslag.</p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Duurzaamheidsvoordelen van een kokend water kraan
        </h2>
        <div className="space-y-3 mb-6">
          <div className="flex gap-3 p-4 border border-gray-200 rounded-lg">
            <div className="text-green-500 font-bold text-xl">✓</div>
            <div>
              <p className="font-semibold text-[#003F5C]">Nooit meer water koken dan nodig</p>
              <p className="text-gray-700 text-sm">Waterkokers worden gemiddeld met 2× teveel water gevuld. Een kokend water kraan levert precies de gewenste hoeveelheid — geen verspilling.</p>
            </div>
          </div>
          <div className="flex gap-3 p-4 border border-gray-200 rounded-lg">
            <div className="text-green-500 font-bold text-xl">✓</div>
            <div>
              <p className="font-semibold text-[#003F5C]">Lange levensduur (10–15 jaar)</p>
              <p className="text-gray-700 text-sm">Een kwaliteitskraan gaat 3× langer mee dan een waterkoker. Minder productie-CO2, minder plastic afval.</p>
            </div>
          </div>
          <div className="flex gap-3 p-4 border border-gray-200 rounded-lg">
            <div className="text-green-500 font-bold text-xl">✓</div>
            <div>
              <p className="font-semibold text-[#003F5C]">Geen plastic waterflessen nodig</p>
              <p className="text-gray-700 text-sm">Een kokend water kraan met <a href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter</a> elimineert de behoefte aan flessenwater volledig.</p>
            </div>
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

        <CTABanner />

        <p className="text-gray-600 text-sm mt-6">
          Zie ook: <a href="/kokend-water-kraan/energie" className="text-[#005F8A] underline">energieverbruik kokend water kraan</a> en <a href="/kokend-water-kraan/prijs" className="text-[#005F8A] underline">prijsvergelijking</a>.
        </p>
      </main>
    </>
  );
}
