import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Alkalisch water vs osmosewater: wat is het verschil en wat is beter?',
  description:
    'Alkalisch water heeft hoge pH, osmosewater is puur en laag in TDS. Ze zijn fundamenteel anders: osmose filtert verontreinigingen, ionisatoren veranderen pH.',
  alternates: { canonical: 'https://waterfilterplatform.nl/alkalisch-water/vs-osmose' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is alkalisch water hetzelfde als osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, ze zijn fundamenteel verschillend. Osmosewater is gefilterd water waarbij verontreinigingen als PFAS, lood, nitraat en bacterien zijn verwijderd via een semi-permeabel membraan. pH is laag (6,0-7,0). Alkalisch water heeft een verhoogde pH (8-11) maar bevat nog steeds alle verontreinigingen van het invoerwater. Een ionisator filtert niet. U kunt osmosewater alkalisch maken via remineralisatie, maar niet andersom: alkalisch water wordt niet schoner van een ionisator.',
      },
    },
    {
      '@type': 'Question',
      name: 'Filtert een waterionisator ook verontreinigingen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Een waterionisator verandert alleen de pH via elektrolyse. PFAS, lood, nitraat, pesticiden, medicijnresten en bacterien blijven aanwezig in ionisatorwater. De meeste ionisatoren bevatten een eenvoudig actief koolstofvoorfilter dat chloor en smaak verbetert, maar dit is geen vergelijking met een osmosembraan dat 95-99% van chemische verontreinigingen tegenhoudt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk water is beter: alkalisch of osmose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor waterveiligheid is osmose beter: het verwijdert PFAS, lood, nitraat en andere gevaarlijke stoffen. Als uw doel een gezond laag verontreinigd drinkwater is, wint osmose altijd. Als u specifiek alkalische pH wilt voor zuurreflux of smaakvoorkeur, kan alkalisch water (via pitcher of ionisator) zinvol zijn als aanvulling. De beste oplossing combineert beide: osmose + alkalische remineralisatiecartridge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik osmosewater alkalisch maken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, en dit is de meest aanbevolen methode. Voeg een alkalische remineralisatiecartridge toe als 5e trap aan uw osmosesysteem. De cartridge voegt calcium, magnesium en bicarbonaat toe, waardoor de pH stijgt van 6,0-7,0 naar 7,5-8,5. Kosten: 15-35 euro per jaar. U krijgt puur gefilterd water met een aangename pH en nuttige mineralen. Dit is veel goedkoper dan een ionisator.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de pH van osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater heeft doorgaans een pH van 6,0 tot 7,0. Dit is iets lager dan gewoon kraanwater omdat het RO-membraan mineralen en bicarbonaten verwijdert die normaal de pH bufferen. Osmosewater is daarmee licht zuur tot neutraal. Dit is veilig om te drinken maar sommige mensen vinden de smaak minder prettig. Een remineralisatiecartridge brengt de pH terug naar 7,5-8,5.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een ionisator PFAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Een waterionisator verwijdert geen PFAS (per- en polyfluoralkylstoffen). PFAS zijn chemisch stabiele verbindingen die niet worden afgebroken door elektrolyse. Alleen een osmosemembraan (verwijdering 95%+) of actieve koolstoffilters (gedeeltelijk effectief afhankelijk van de PFAS-variant) bieden daadwerkelijke bescherming. Als u in een PFAS-risicogebied woont, is een osmosefilter noodzakelijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is alkalisch water veiliger dan kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niet per definitie. Als uw kraanwater verontreinigd is met PFAS, lood of nitraat, is alkalisch water uit een ionisator niet veiliger: de verontreinigingen blijven aanwezig. Alkalisch water verandert alleen de pH, niet de chemische samenstelling van het water. Nederlands kraanwater voldoet aan strenge normen en is over het algemeen veilig. Als u twijfelt over lokale kwaliteit, laat het water testen of kies voor osmose.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de beste combinatie van osmose en alkalisch water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De beste combinatie is een 5-traps omgekeerde-osmose systeem met alkalische remineralisatiecartridge als 5e trap. Trap 1-2: sediment en actief koolstofprefilter. Trap 3: RO-membraan (verwijdert 95-99% verontreinigingen). Trap 4: actief koolstof nafilter. Trap 5: alkalische remineralisatiecartridge (pH 7,5-8,5, calcium en magnesium toevoegen). Totaalkosten: 350-900 euro aanschaf, 40-80 euro per jaar aan filters. Dit geeft u puur water met gewenste pH.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Alkalisch water vs osmosewater: wat is het verschil en wat is beter?',
  description:
    'Grondige vergelijking van alkalisch water en osmosewater op pH, TDS, filtreervermogen, kosten en veiligheid voor gebruik thuis.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/alkalisch-water/vs-osmose',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function AlkalischVsOsmosePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://waterfilterplatform.nl',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Alkalisch water',
                item: 'https://waterfilterplatform.nl/alkalisch-water',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Alkalisch water vs osmosewater',
                item: 'https://waterfilterplatform.nl/alkalisch-water/vs-osmose',
              },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/alkalisch-water" className="hover:underline">Alkalisch water</Link> &rsaquo;{' '}
          <span>Alkalisch water vs osmosewater</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Alkalisch water vs osmosewater: wat is het verschil en wat is beter?
          </h1>
          <p className="text-gray-700 text-lg">
            Alkalisch water heeft een hoge pH. Osmosewater is puur en laag in opgeloste stoffen (TDS). Ze worden vaak door elkaar gehaald, maar zijn fundamenteel anders. Osmose filtert gevaarlijke stoffen weg &mdash; alkalisch water niet. Hier volgt de volledige vergelijking.
          </p>
        </div>

        <QuickAnswer answer="Osmosewater is gefilterd: het verwijdert 95%+ van PFAS, lood, nitraat en bacterien. pH is laag (6,0-7,0). Alkalisch water heeft hoge pH (8-11) maar filtert geen verontreinigingen. Voor waterveiligheid wint osmose altijd. De beste oplossing: osmosefilter plus alkalische remineralisatiecartridge voor puur water met instelbare pH." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Het cruciale verschil dat in marketing zelden duidelijk wordt gemaakt
        </h2>
        <p className="text-gray-700 mb-4">
          Alkalisch water en osmosewater worden beide gepromoot als &quot;beter dan kraanwater&quot;. Maar ze lossen twee fundamenteel verschillende problemen op:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="border border-blue-200 bg-blue-50 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">Osmosewater</h3>
            <p className="text-gray-700 text-sm">
              <strong>Doel: verwijderen van verontreinigingen.</strong> Het semi-permeabele membraan houdt 95&ndash;99% van chemische stoffen, zware metalen, bacterien en virussen tegen. PFAS, lood, nitraat, pesticiden en medicijnresten worden effectief verwijderd. pH is laag (6,0&ndash;7,0) omdat mineralen worden meegenomen. Zuiver maar smaakarm van nature.
            </p>
          </div>
          <div className="border border-orange-200 bg-orange-50 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">Alkalisch water (ionisator)</h3>
            <p className="text-gray-700 text-sm">
              <strong>Doel: verhogen van de pH.</strong> Elektrolyse verandert de pH van water naar 8&ndash;11. Verontreinigingen blijven onaangeroerd. PFAS, lood en nitraat zijn even aanwezig als in het invoerwater. Een ionisator is geen waterfilter. Hoge pH, zelfde TDS als kraanwater.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Eigenschap</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Alkalisch water (ionisator)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Osmosewater (RO)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Osmose + alkalisch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">pH</td>
                <td className="border border-gray-300 px-3 py-2">8,0&ndash;11,0</td>
                <td className="border border-gray-300 px-3 py-2">6,0&ndash;7,0</td>
                <td className="border border-gray-300 px-3 py-2">7,5&ndash;8,5</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">TDS</td>
                <td className="border border-gray-300 px-3 py-2">Zelfde als invoerwater</td>
                <td className="border border-gray-300 px-3 py-2">5&ndash;50 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">50&ndash;150 mg/L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">PFAS verwijdering</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Ja (95%+)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Ja (95%+)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Lood verwijdering</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Ja (95%+)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Ja (95%+)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Nitraat verwijdering</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Ja (85%+)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Ja (85%+)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Bacterien</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Ja (membraan)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Ja</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Kalk/hardheid</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">Deels</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Volledig</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Volledig</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Aanschaf</td>
                <td className="border border-gray-300 px-3 py-2">&euro;500&ndash;3.000</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300&ndash;800</td>
                <td className="border border-gray-300 px-3 py-2">&euro;350&ndash;900</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Jaarlijkse kosten</td>
                <td className="border border-gray-300 px-3 py-2">&euro;50&ndash;100</td>
                <td className="border border-gray-300 px-3 py-2">&euro;30&ndash;60</td>
                <td className="border border-gray-300 px-3 py-2">&euro;40&ndash;80</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Smaak</td>
                <td className="border border-gray-300 px-3 py-2">Zacht, hoge pH</td>
                <td className="border border-gray-300 px-3 py-2">Plat, mineraalarm</td>
                <td className="border border-gray-300 px-3 py-2">Zacht, mineraalrijk</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer kiest u voor alkalisch water?
        </h2>
        <p className="text-gray-700 mb-4">
          Alkalisch water (via pitcher of ionisator) kan zinvol zijn als:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Smaakvoorkeur:</strong> u prefereert zacht, licht alkalisch water boven plat kraanwater.</li>
          <li><strong>Zuurreflux-experiment:</strong> u wilt testen of pH 8,8+ verlichting geeft bij refluxklachten (laag risico, geen bewezen alternatief voor medische behandeling).</li>
          <li><strong>Sporthydratatie:</strong> u traint intensief en wilt snellere rehydratatie verkennen (beperkt wetenschappelijk bewijs).</li>
          <li><strong>Uw kraanwater is al schoon:</strong> u woont in een regio zonder bekende verontreinigingen en zoekt alleen pH-aanpassing.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is osmose noodzakelijk?
        </h2>
        <p className="text-gray-700 mb-4">
          Kies voor een osmosefilter als:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>PFAS-gebied:</strong> u woont in een postcodegebied met verhoogde PFAS-concentraties in drinkwater (check RIVM-kaart).</li>
          <li><strong>Loden leidingen:</strong> uw woning of waterleiding is ouder dan 1960 (lood kan in het water logen).</li>
          <li><strong>Landbouwgebied:</strong> nitraat of pesticiden in uw regio zijn een bekende zorg.</li>
          <li><strong>Babyvoeding:</strong> voor de bereiding van zuigelingenvoeding is puur water aanbevolen (Voedingscentrum en RIVM).</li>
          <li><strong>Chemische verontreinigingen:</strong> medicijnresten, microplastics of industriele stoffen in uw drinkwater.</li>
        </ul>

        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-8">
          <h3 className="font-semibold text-[#003F5C] mb-3">De beste oplossing: osmose + alkalische remineralisatie</h3>
          <p className="text-gray-700 text-sm mb-3">
            Een 5-traps osmosesysteem met alkalische remineralisatiecartridge geeft u het beste van beide werelden:
          </p>
          <ol className="list-decimal pl-5 text-gray-700 text-sm space-y-1">
            <li>Sedimentfilter: verwijdert deeltjes en slib</li>
            <li>Actief koolstof prefilter: verwijdert chloor, geur en smaak</li>
            <li>RO-membraan: verwijdert 95&ndash;99% van alle chemische verontreinigingen</li>
            <li>Actief koolstof nafilter: polijst smaak</li>
            <li>Alkalische remineralisatiecartridge: pH 7,5&ndash;8,5, calcium en magnesium</li>
          </ol>
          <p className="text-gray-700 text-sm mt-3">
            Totaalkosten: &euro;350&ndash;900 aanschaf, &euro;40&ndash;80 per jaar aan filters. Dit is goedkoper dan de meeste ionisatoren en geeft u puur, mineraalrijk water met alkalische pH.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Conclusie: alkalisch water vervangt osmose niet
        </h2>
        <p className="text-gray-700 mb-4">
          Als het gaat om waterveiligheid en verwijdering van verontreinigingen, is er geen vergelijking: osmosefiltratie is effectief, alkalisch water niet. Een ionisator verandert de pH maar maakt water niet schoner. Dit cruciale onderscheid wordt in marketing van alkalisch water zelden vermeld.
        </p>
        <p className="text-gray-700 mb-4">
          Wil meer weten over de gezondheidsaanspraken van alkalisch water? Lees onze pagina{' '}
          <Link href="/alkalisch-water/gezondheid" className="text-[#005F8A] underline">alkalisch water en gezondheid</Link>.
          Voor technische details over ionisatoren, bezoek{' '}
          <Link href="/alkalisch-water/ionisator" className="text-[#005F8A] underline">waterionisator kopen en merken</Link>.
        </p>
        <p className="text-gray-700 mb-6">
          Voor verontreinigingen in uw lokale drinkwater, raadpleeg onze pagina over{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>{' '}
          en de uitgebreide uitleg over{' '}
          <Link href="/osmose-water" className="text-[#005F8A] underline">osmosewater en de kwaliteit ervan</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose techniek</h3>
              <p className="text-sm text-gray-600">Hoe werkt omgekeerde osmose en wat verwijdert het precies uit uw drinkwater?</p>
            </Link>
            <Link href="/alkalisch-water/gezondheid" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Alkalisch water en gezondheid</h3>
              <p className="text-sm text-gray-600">Wat zegt de wetenschap over de gezondheidsaanspraken van alkalisch water?</p>
            </Link>
            <Link href="/vergelijken/waterfilter-vs-waterontharder" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter vs waterontharder</h3>
              <p className="text-sm text-gray-600">Vergelijking van waterfilters en waterontharders: wanneer kiest u waarvoor?</p>
            </Link>
            <Link href="/alkalisch-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Alkalisch water: complete gids</h3>
              <p className="text-sm text-gray-600">Alles over alkalisch water: wat het is, hoe het wordt gemaakt en of het de moeite waard is.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen: alkalisch water vs osmosewater
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
          <Link href="/alkalisch-water" className="text-[#005F8A] underline">wat is alkalisch water</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>,{' '}
          <Link href="/osmose-water" className="text-[#005F8A] underline">osmosewater kwaliteit</Link> en{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>
      </main>
    </>
  );
}
