import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Alkalisch water: wat is het en is het gezond?',
  description:
    'Alkalisch water heeft een pH hoger dan 7 en wordt gepromoot als gezonder. Maar wat zegt de wetenschap? Alles over alkalisch water, ionisatoren en het.',
  alternates: { canonical: 'https://waterfilterplatform.nl/alkalisch-water' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is alkalisch water precies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alkalisch water is water met een pH hoger dan 7. Het bevat meer hydroxide-ionen (OH-) dan gewoon water. De hoge pH kan van nature ontstaan door opgeloste mineralen zoals bicarbonaten, calcium en magnesium, of kunstmatig worden gecreeerd via elektrolyse in een waterionisator. In de marketing wordt alkalisch water ook wel "basisch water" of "geioniseerd water" genoemd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is alkalisch water gezonder dan gewoon kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor gezonde mensen is er geen wetenschappelijk bewijs dat alkalisch water systematisch gezonder is dan gewoon kraanwater. De meeste claims zijn niet onderbouwd door robuuste klinische studies. Er is beperkt bewijs voor voordelen bij zuurreflux (pH 8,8 kan pepsine inactiveren) en iets snellere rehydratatie na sport. Mensen zonder specifieke klachten hebben geen aangetoond voordeel van alkalisch water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de pH van alkalisch water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alkalisch water heeft een pH van 8 of hoger. Waterionisatoren kunnen pH-waarden produceren van 8 tot 11 of hoger. Alkalische filterpitchers produceren doorgaans pH 8 tot 9,5. Ter vergelijking: kraanwater in Nederland heeft een pH van 7,2 tot 8,5 en is dus al licht tot matig alkalisch van nature.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe wordt alkalisch water gemaakt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er zijn drie hoofdmethoden: (1) Elektrolyse via een waterionisator: het apparaat scheidt water in een alkalische stroom (OH--ionen) en een zure stroom (H+-ionen). (2) Alkalische remineralisatiecartridge: voegt mineralen toe zoals calcium, magnesium en bicarbonaat die de pH verhogen. (3) Coral calcium of kalk-stenen filter: water passeert calciumcarbonaat dat oplost en de pH verhoogt. Alleen ionisatoren bereiken pH boven 10.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is kraanwater al alkalisch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, Nederlands kraanwater is van nature al licht tot matig alkalisch. De wettelijke pH-norm voor drinkwater in Nederland ligt tussen 7,0 en 9,5. In de praktijk ligt de pH van Nederlands kraanwater doorgaans tussen 7,2 en 8,5, afhankelijk van de regio en het drinkwaterbedrijf. U hoeft dus geen duur apparaat te kopen voor milde alkaliniteit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen alkalisch water en osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dit is een fundamenteel verschil: osmosewater is gefilterd water waarbij verontreinigingen zoals PFAS, lood, nitraat en bacterien worden verwijderd. Alkalisch water heeft een verhoogde pH maar bevat nog steeds alle verontreinigingen van het invoerwater. Een ionisator filtert niet, maar verandert de pH. Osmosewater heeft een lage pH (6,0-7,0) maar is puur. U kunt osmosewater alkalisch maken via een remineralisatiecartridge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heeft alkalisch water wetenschappelijke voordelen bewezen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De wetenschappelijke basis is dun. Er is enig bewijs voor: (1) inactivering van pepsine bij pH 8,8 (een in-vitro studie, relevant voor zuurreflux); (2) iets snellere rehydratatie na intensieve sport (twee kleine RCT-studies, deels industry-funded). Claims over kankerpreventie, pH-neutralisatie in het lichaam en algemene gezondheidsverbetering zijn niet wetenschappelijk onderbouwd. Het bloed-pH wordt strikt gereguleerd door longen en nieren, niet door drinkwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een waterionisator de moeite waard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor de meeste mensen niet. Een ionisator kost 500 tot 4.000 euro en verwijdert geen verontreinigingen. Voor vergelijkbare pH-waarden (8-9,5) zijn alkalische filterpitchers beschikbaar voor 30 tot 80 euro. Als u wilt experimenteren met alkalisch water voor zuurreflux, probeer eerst een goedkope alkalische pitcher. Als zuiver drinkwater uw doel is, investeer dan in een osmosefilter met remineralisatiecartridge voor vergelijkbare prijs.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Alkalisch water: wat is het en is het gezond?',
  description:
    'Alkalisch water heeft een pH hoger dan 7. Alles over ionisatoren, alkalische filters, claims en het verschil met osmosewater.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/alkalisch-water',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function AlkalischWaterPage() {
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
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <span>Alkalisch water</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Alkalisch water: wat is het en is het gezond?
          </h1>
          <p className="text-gray-700 text-lg">
            Alkalisch water heeft een pH hoger dan 7 en wordt door fabrikanten gepromoot als gezonder, energiegevender en beter voor hydratatie. Maar klopt dat? En wat is het verschil met gewoon kraanwater of osmosewater?
          </p>
        </div>

        <QuickAnswer answer="Alkalisch water heeft een pH boven 7 door bicarbonaten of elektrolyse. Nederlands kraanwater is al licht alkalisch (pH 7,2-8,5). Wetenschappelijk bewijs voor gezondheidsvoordelen is dun. Osmosewater is fundamenteel anders: het filtert verontreinigingen weg. Voor zuiver water kiest u osmose, niet een ionisator." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is alkalisch water?
        </h2>
        <p className="text-gray-700 mb-4">
          Alkalisch water is water met een pH hoger dan 7. De pH-schaal loopt van 0 tot 14, waarbij 7 neutraal is. Zuur water heeft een pH onder 7, alkalisch (basisch) water heeft een pH boven 7. Bij alkalisch water zijn er meer hydroxide-ionen (OH&minus;) aanwezig dan waterstofionen (H&plus;).
        </p>
        <p className="text-gray-700 mb-4">
          In de natuur ontstaat een hoge pH door opgeloste mineralen: bicarbonaten, calcium en magnesium verhogen de pH van water. Kunstmatig kan alkalisch water worden geproduceerd via elektrolyse in een waterionisator, waarbij water wordt gesplitst in een alkalische stroom en een zure stroom.
        </p>
        <p className="text-gray-700 mb-6">
          Belangrijk: <strong>Nederlands kraanwater is al van nature licht alkalisch</strong>. De pH van kraanwater in Nederland ligt doorgaans tussen 7,2 en 8,5, afhankelijk van de regio. U hoeft dus geen duur apparaat aan te schaffen voor een milde basische pH.
        </p>

        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-8">
          <h3 className="font-semibold text-[#003F5C] mb-3">De pH-schaal in perspectief</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Water</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Typische pH</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Karakter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Osmosewater (RO)</td>
                  <td className="border border-gray-300 px-3 py-2">6,0&ndash;7,0</td>
                  <td className="border border-gray-300 px-3 py-2">Neutraal tot licht zuur</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">Nederlands kraanwater</td>
                  <td className="border border-gray-300 px-3 py-2">7,2&ndash;8,5</td>
                  <td className="border border-gray-300 px-3 py-2">Licht alkalisch</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Alkalische pitcher filter</td>
                  <td className="border border-gray-300 px-3 py-2">8,0&ndash;9,5</td>
                  <td className="border border-gray-300 px-3 py-2">Matig alkalisch</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">Waterionisator (elektrisch)</td>
                  <td className="border border-gray-300 px-3 py-2">8,0&ndash;11,0</td>
                  <td className="border border-gray-300 px-3 py-2">Matig tot sterk alkalisch</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Maagzuur</td>
                  <td className="border border-gray-300 px-3 py-2">1,5&ndash;3,5</td>
                  <td className="border border-gray-300 px-3 py-2">Sterk zuur</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe wordt alkalisch water gemaakt?
        </h2>
        <p className="text-gray-700 mb-4">
          Er zijn drie veelgebruikte methoden om alkalisch water te produceren:
        </p>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">1. Waterionisator (elektrolyse)</h3>
            <p className="text-gray-700 text-sm">
              Een ionisator gebruikt elektrolyse: een elektrische stroom door water scheidt de watermoleculen in een alkalische stroom (OH&minus;-ionen bij de negatieve pool) en een zure stroom (H&plus;-ionen bij de positieve pool). Het alkalische water is voor drinken, het zure water voor reiniging. Ionisatoren bereiken pH-waarden van 3,0 tot 11,0 of hoger. Prijs: &euro;500&ndash;3.000. Merken: Kangen (Enagic), Tyent, Life Ionizer.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">2. Alkalische remineralisatiecartridge</h3>
            <p className="text-gray-700 text-sm">
              Een patroon gevuld met calcium, magnesium en bicarbonaat-mineralen. Water passeert de patroon en lost mineralen op, waardoor de pH stijgt naar 7,5&ndash;8,5. Wordt vaak als 5e trap toegevoegd aan osmosesystemen. Kosten: &euro;15&ndash;35 per jaar. Dit is de meest kosteneffectieve methode voor matig alkalisch water.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">3. Coral calcium / kalk-stenen filter</h3>
            <p className="text-gray-700 text-sm">
              Water passeert koraalkorrels of kalksteen (calciumcarbonaat) die oplossen en de pH verhogen. Vergelijkbaar principe als remineralisatie, maar minder gecontroleerd. Bereikt pH 7,5&ndash;8,5. Gebruikt in alkalische pitcherfilters (prijs: &euro;30&ndash;80) als filter-insert.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Populaire claims en wat de wetenschap zegt
        </h2>
        <p className="text-gray-700 mb-4">
          Alkalisch water wordt gepromoot met tal van gezondheidsclaims. Hieronder een eerlijke beoordeling per claim.
        </p>

        <div className="space-y-4 mb-8">
          <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-r-xl">
            <p className="font-semibold text-gray-800 text-sm">Claim: "Alkalisch water neutraliseert lichaamszuur"</p>
            <p className="text-gray-700 text-sm mt-1">
              <strong>ONWAAR.</strong> Maagzuur heeft een pH van 1,5&ndash;3,5. Elke basische stof die u inneemt wordt binnen seconden geneutraliseerd. De bloed-pH wordt strikt gereguleerd door longen (CO&sub2;-uitademing) en nieren (bicarbonaatbuffering) op 7,35&ndash;7,45 met een marge van slechts 0,05 pH-eenheid. Voedsel of water heeft praktisch geen invloed hierop bij gezonde mensen.
            </p>
          </div>
          <div className="border-l-4 border-orange-400 bg-orange-50 p-4 rounded-r-xl">
            <p className="font-semibold text-gray-800 text-sm">Claim: "Betere hydratatie"</p>
            <p className="text-gray-700 text-sm mt-1">
              <strong>GEEN BEWIJS.</strong> Twee kleine RCT-studies (Weidman 2016, Heil 2010) suggereren iets snellere rehydratatie na sport. Methodologische beperkingen: kleine steekproef, deels industry-funded. Geen bewijs voor betere hydratatie in dagelijks gebruik.
            </p>
          </div>
          <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-r-xl">
            <p className="font-semibold text-gray-800 text-sm">Claim: "Anti-kanker werking"</p>
            <p className="text-gray-700 text-sm mt-1">
              <strong>GEEN BEWIJS.</strong> De claim dat alkalisch water kankercellen doodt is wetenschappelijk niet onderbouwd. Het tumormicromilieu-pH is complex en wordt niet beinvloed door het pH van drinkwater. Geen enkele serieuze oncologische organisatie beveelt alkalisch water aan bij kanker.
            </p>
          </div>
          <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded-r-xl">
            <p className="font-semibold text-gray-800 text-sm">Claim: "Verbetert sportuithoudingsvermogen"</p>
            <p className="text-gray-700 text-sm mt-1">
              <strong>BEPERKT BEWIJS.</strong> Een studie toont enig effect bij hoge-intensiteit sport. Kleine steekproef, niet gerepliceerd. Niet voldoende basis voor algemene aanbeveling.
            </p>
          </div>
          <div className="border-l-4 border-green-400 bg-green-50 p-4 rounded-r-xl">
            <p className="font-semibold text-gray-800 text-sm">Claim: "Verlicht zuurreflux (GERD)"</p>
            <p className="text-gray-700 text-sm mt-1">
              <strong>ENIG BEWIJS.</strong> Koufman &amp; Johnston (2012) toonden aan dat water met pH 8,8 het enzym pepsine kan inactiveren in laboratoriumomstandigheden (in vitro). Geen klinische RCT bij GERD-patienten uitgevoerd. Laag risico om te proberen voor zuurreflux, maar geen vervanging voor medische behandeling.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is osmosewater de betere keuze?
        </h2>
        <p className="text-gray-700 mb-4">
          Alkalisch water en osmosewater zijn fundamenteel verschillend. Een waterionisator verhoogt de pH maar filtert geen verontreinigingen. Als uw kraanwater PFAS, lood, nitraat of andere chemische stoffen bevat, heeft een ionisator nul effect op die verontreinigingen.
        </p>
        <p className="text-gray-700 mb-4">
          Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link> verwijdert 95&ndash;99% van PFAS, lood, nitraat, pesticiden, bacterien en andere verontreinigingen. Osmosewater heeft een lagere pH (6,0&ndash;7,0) maar is puur. Door een <Link href="/kraanwater/ph" className="text-[#005F8A] underline">alkalische remineralisatiecartridge</Link> toe te voegen krijgt u puur water met pH 7,5&ndash;8,5.
        </p>
        <p className="text-gray-700 mb-6">
          De waterkwaliteit in uw regio kunt u controleren via <Link href="/waterkwaliteit" className="text-[#005F8A] underline">onze waterkwaliteitspagina</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kosten: ionisator vs alkalische pitcher
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Product</th>
                <th className="border border-gray-300 px-3 py-2 text-left">pH bereik</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Aanschaf</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Filtert verontreinigingen?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Kangen K8 (ionisator)</td>
                <td className="border border-gray-300 px-3 py-2">4,5&ndash;11,5</td>
                <td className="border border-gray-300 px-3 py-2">&euro;3.000&ndash;4.000</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Tyent UCE-13 (ionisator)</td>
                <td className="border border-gray-300 px-3 py-2">1,7&ndash;12,5</td>
                <td className="border border-gray-300 px-3 py-2">&euro;2.000&ndash;3.000</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Alkalische pitcher filter</td>
                <td className="border border-gray-300 px-3 py-2">8,0&ndash;9,5</td>
                <td className="border border-gray-300 px-3 py-2">&euro;30&ndash;80</td>
                <td className="border border-gray-300 px-3 py-2">Deels (koolstof)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Osmose + remineralisatie</td>
                <td className="border border-gray-300 px-3 py-2">7,5&ndash;8,5</td>
                <td className="border border-gray-300 px-3 py-2">&euro;350&ndash;900</td>
                <td className="border border-gray-300 px-3 py-2">Ja (95%+)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Meer details over specifieke merken en werking vindt u op onze pagina over{' '}
          <Link href="/alkalisch-water/ionisator" className="text-[#005F8A] underline">waterionisatoren</Link>{' '}
          en de uitgebreide{' '}
          <Link href="/alkalisch-water/vs-osmose" className="text-[#005F8A] underline">vergelijking alkalisch water vs osmosewater</Link>.
          De gezondheidsaspecten worden nader onderzocht op de pagina{' '}
          <Link href="/alkalisch-water/gezondheid" className="text-[#005F8A] underline">alkalisch water en gezondheid</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over alkalisch water
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
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>,{' '}
          <Link href="/waterkwaliteit" className="text-[#005F8A] underline">waterkwaliteit Nederland</Link>,{' '}
          <Link href="/kraanwater/ph" className="text-[#005F8A] underline">pH van kraanwater</Link>,{' '}
          <Link href="/alkalisch-water/gezondheid" className="text-[#005F8A] underline">alkalisch water en gezondheid</Link> en{' '}
          <Link href="/alkalisch-water/ionisator" className="text-[#005F8A] underline">waterionisator kopen</Link>.
        </p>
      </main>
    </>
  );
}
