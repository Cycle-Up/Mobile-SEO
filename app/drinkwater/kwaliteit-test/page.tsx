import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Drinkwaterkwaliteit Testen: Methoden & Interpretatie',
  description: 'Hoe test je de kwaliteit van je drinkwater? Teststrips, TDS-meter, professionele analyse. Wat je meet, wat de resultaten betekenen en wanneer actie nodig is.',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwater/kwaliteit-test' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe kan ik mijn drinkwaterkwaliteit thuis testen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Opties van eenvoudig naar uitgebreid: (1) Watertest strips (€15–30): test op nitraat, nitriet, hardheid, chloor, pH en een paar zware metalen in 5 minuten. Nauwkeurigheid beperkt. (2) TDS-meter (€10–20): meet totaal opgeloste stoffen, geeft indruk van waterkwaliteit. (3) Drinkwater testkit voor specifieke stoffen (lood, PFAS, bacteriën). (4) Laboratoriumanalyse (€80–200): meest betrouwbaar, omvat tientallen parameters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer moet je drinkwater laten testen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Overweeg een drinkwatertest bij: gebruik van een privéput of eigen bron, woning gebouwd voor 1970 (loodleidingen mogelijk), woning nabij industrieterrein of landbouwgebied, waterkleur of geur verandert, na verbouwing of reparatie aan leidingen, zwangerschap of zuigeling in huis, of als je een waterfilter wilt aanschaffen en de specifieke verontreinigingen wilt kennen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is een normale TDS-waarde voor drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De WHO adviseert een maximale TDS van 1.000 mg/L voor drinkwater; boven 600 mg/L wordt de smaak onaangenaam. Nederlands leidingwater heeft typisch TDS van 150–450 mg/L. Na osmosfiltering: 5–25 mg/L. TDS zegt niets over bacteriologische veiligheid of de aanwezigheid van specifieke verontreinigingen (PFAS, bestrijdingsmiddelen).',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe interpreteer ik mijn waterkwaliteitsresultaten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vergelijk je resultaten met EU-drinkwaternormen (Drinkwaterbesluit 2023). Aandachtspunten: lood boven 10 µg/L (actie vereist, EU-norm 2023), nitraat boven 50 mg/L (actie vereist, vooral bij babyvoeding), bacteriën aanwezig = directe actie (koken), hardheid boven 20 °dH (overweeg osmosefilter), PFAS boven 0,1 µg/L totaal (actie aanbevolen).',
      },
    },
  ],
};

export default function DrinkwaterKwaliteitTestPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Kwaliteitstest', item: 'https://waterfilterplatform.nl/drinkwater/kwaliteit-test' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/drinkwater" className="hover:underline">Drinkwater</a> &rsaquo;{' '}
          <span>Kwaliteitstest</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Drinkwaterkwaliteit Testen: Methoden & Interpretatie
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Weet je wat er echt in je drinkwater zit? Of je nu leidingwater drinkt of een privéput hebt — inzicht in je waterkwaliteit is de eerste stap naar de juiste oplossing.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Testmethoden van snel naar nauwkeurig
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">1. TDS-meter (€10–20)</h3>
            <p className="text-gray-700 text-sm">Meet totaal opgeloste stoffen in mg/L. Geeft een globale indruk maar meet geen specifieke gevaarlijke stoffen. Handig voor het monitoren van een osmosefilter.</p>
            <p className="text-gray-600 text-xs mt-1">Nauwkeurigheid: indicatief</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">2. Watertest strips (€15–30)</h3>
            <p className="text-gray-700 text-sm">Test tegelijk op nitraat, nitriet, hardheid, chloor, pH. Resultaat in 5 minuten door kleurvergelijking. Beperkte gevoeligheid bij lage concentraties.</p>
            <p className="text-gray-600 text-xs mt-1">Nauwkeurigheid: matig (±20–30%)</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">3. Specifieke thuistests (€20–60)</h3>
            <p className="text-gray-700 text-sm">Tests voor lood, nitraat, bacteriën of PFAS apart. Nauwkeuriger dan strips maar test slechts één of enkele parameters. Loodtest kits zijn beschikbaar bij bouwmarkten.</p>
            <p className="text-gray-600 text-xs mt-1">Nauwkeurigheid: goed voor specifieke stof</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 bg-[#E0F2FE]">
            <h3 className="font-semibold text-[#003F5C] mb-2">4. Laboratoriumanalyse (€80–200)</h3>
            <p className="text-gray-700 text-sm">Gecertificeerd lab analyseert tientallen parameters: zware metalen, pesticiden, PFAS, bacteriën, mineralen. Meest betrouwbare methode. Neem monster &rsquo;s ochtends vroeg (koud, stilstaand water).</p>
            <p className="text-gray-600 text-xs mt-1">Nauwkeurigheid: hoogst beschikbaar</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat meten en waarom?
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Parameter</th>
                <th className="border border-gray-300 px-3 py-2 text-left">EU-norm</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Risico bij overschrijding</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Wie risico loopt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Lood</td>
                <td className="border border-gray-300 px-3 py-2">10 µg/L</td>
                <td className="border border-gray-300 px-3 py-2">Neurologische schade</td>
                <td className="border border-gray-300 px-3 py-2">Iedereen (oud leidingwerk)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Nitraat</td>
                <td className="border border-gray-300 px-3 py-2">50 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">Methemoglobinemie</td>
                <td className="border border-gray-300 px-3 py-2">Baby&rsquo;s, zwangeren (privéput)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">PFAS</td>
                <td className="border border-gray-300 px-3 py-2">0,1 µg/L totaal</td>
                <td className="border border-gray-300 px-3 py-2">Hormoonverstoring</td>
                <td className="border border-gray-300 px-3 py-2">Nabij industrie/vliegveld</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">E. coli</td>
                <td className="border border-gray-300 px-3 py-2">0 KVE/100ml</td>
                <td className="border border-gray-300 px-3 py-2">Diarree, infectie</td>
                <td className="border border-gray-300 px-3 py-2">Privéput gebruikers</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Waterhardheid</td>
                <td className="border border-gray-300 px-3 py-2">Geen max.</td>
                <td className="border border-gray-300 px-3 py-2">Kalkschade apparaten</td>
                <td className="border border-gray-300 px-3 py-2">Iedereen (boven 15 °dH)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Na de test: de juiste filteroplossing
        </h2>
        <p className="text-gray-700 mb-4">
          Afhankelijk van wat je test aantoont, is er een passende oplossing:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li><strong>Hoog lood:</strong> Osmosefilter (95–99% verwijdering)</li>
          <li><strong>Hoog nitraat:</strong> Osmosefilter (85–95% verwijdering)</li>
          <li><strong>PFAS aanwezig:</strong> Osmosefilter of actief kool (granulaat)</li>
          <li><strong>Hard water:</strong> Osmosefilter voor drinkwater, waterontharder voor het hele huis</li>
          <li><strong>Bacteriën:</strong> UV-filter + osmosefilter combinatie</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Een <a href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter</a> is de meest veelzijdige oplossing: het pakt de meeste verontreinigingen tegelijk aan. Zie ook: <a href="/waterfilter/gezondheid" className="text-[#005F8A] underline">waterfilter en gezondheid</a>.
        </p>

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

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/waterkwaliteit/test" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterkwaliteit testen</h3>
            <p className="text-sm text-gray-600">Hoe u uw drinkwaterkwaliteit thuis kunt testen.</p>
          </a>
          <a href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</h3>
            <p className="text-sm text-gray-600">Wettelijke normen voor drinkwaterkwaliteit in Nederland.</p>
          </a>
          <a href="/pfas-waterfilter/testen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">PFAS testen</h3>
            <p className="text-sm text-gray-600">Hoe u uw water kunt testen op PFAS en wat u kunt doen.</p>
          </a>
          <a href="/stoffen-in-drinkwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater</h3>
            <p className="text-sm text-gray-600">Overzicht van alle stoffen die in drinkwater kunnen voorkomen.</p>
          </a>
        </div>
      </section>

        <CTABanner />
      </main>
    </>
  );
}
