import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Thuiszuivering: wanneer is een thuisfilter zinvol naast leidingwater?',
  description: 'Nederlands leidingwater is al gezuiverd, maar thuiszuivering (osmose, actief kool, UV) biedt extra bescherming tegen PFAS, lood en bacterien in.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterzuivering/thuis' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is een thuisfilter nodig naast leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor de meeste Nederlanders is een thuisfilter niet strikt noodzakelijk: leidingwater voldoet aan strenge drinkwaternormen. Maar een thuisfilter voegt zinvolle bescherming toe in specifieke situaties: loodleidingen in woningen van voor 1960, PFAS-gevoelige gebieden, smaak- en geurvraagstukken door chloor, of nitraat in landbouwgebieden. Het is aanvullende bescherming, niet een vervanging van industriele waterzuivering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat filtert leidingwater niet dat een thuisfilter wel doet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Industriele zuivering stopt aan de watermeter. Daarna kunnen problemen ontstaan door: lood dat lekt uit leidingen in oude woningen (voor 1960); bacteriegroei (Legionella) in warmwaterboilers bij onjuist onderhoud; resterende PFAS die de industriele zuivering doorliet; chloorresiduen die smaak en geur beinvloeden; kalk uit hardregel gebieden. Een thuisfilter lost deze specifieke problemen op of reduceert ze significant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk thuisfilter is het beste voor mijn situatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De keuze hangt af van uw probleem: voor chloor/smaak: actief koolfilter (filterkan of onder-aanrecht, 30-200 euro); voor lood of PFAS: omgekeerde osmose (300-800 euro); voor nitraat: omgekeerde osmose; voor bacterien in huisinstallatie: UV-purifier (200-600 euro) of osmose; voor hard water: waterontharder (800-2.500 euro). Laat uw water eerst testen voor u een filter kiest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is osmose de beste thuiszuivering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Omgekeerde osmose (RO) biedt de breedste verwijdering van verontreinigingen: lood (99%), PFAS (90-98%), nitraat (85-95%), hormonen (97-99%), medicijnresten (90-99%), bacterien en virussen. Het nadeel is dat osmose ook nuttige mineralen verwijdert en een remineralisatiefilter vereist als u dit wilt compenseren. Voor brede bescherming en als u meerdere problemen wilt aanpakken, is osmose de meest complete oplossing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Helpt een thuisfilter tegen PFAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, omgekeerde osmose verwijdert 90-98% van PFAS uit drinkwater, afhankelijk van het type PFAS-verbinding. Actief koolstoffilters verwijderen PFAS gedeeltelijk (60-80% voor grotere PFAS-verbindingen, minder voor korteketenvarianten). Normale waterfilterkannen met standaard koolstoffilter hebben nauwelijks effect op PFAS. Voor effectieve PFAS-verwijdering thuis is een osmosefilter onder het aanrecht de meest betrouwbare optie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vanaf wanneer is een leidingwater thuiszuivering de moeite waard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Thuiszuivering is de moeite waard als u: in een woning van voor 1960 woont met mogelijke loodleidingen; in een gebied woont met verhoogde PFAS-waarden (check uw waterkwaliteitsrapport); smaak- of geurhinder ervaart door chloor; nitraat boven 25 mg/L heeft in uw leidingwater (check drinkwaterrapport waterbedrijf); zuigelingen heeft en extra voorzorg wilt nemen; of een specifieke medische aandoening heeft waarbij extra voorzorg gewenst is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen industriele waterzuivering en een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Industriele waterzuivering verwerkt miljoenen liters per dag via grootschalige installaties (coagulatie, meerfasige filtratie, ozon, actieve kool, desinfectie) en levert gecertificeerd veilig drinkwater tot aan uw watermeter. Een osmosefilter thuis (3-10 liter per uur) voegt een extra filterbarriere toe specifiek voor uw woning. De industriele zuivering doet het zware werk; de osmosefilter geeft aanvullende zekerheid voor wat er na de watermeter kan gebeuren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik mijn leidingwater testen op kwaliteit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Uw waterbedrijf publiceert jaarlijkse drinkwaterkwaliteitsrapporten per postcodegebied. Voor specifieke tests (lood, PFAS, bacterien) kunt u wateranalyse laten uitvoeren via gecertificeerde laboratoria voor 50-200 euro afhankelijk van het aantal parameters. Testkits voor thuisgebruik geven een globale indicatie maar zijn minder betrouwbaar dan laboratoriumanalyse. Kijk op de website van uw waterbedrijf voor het actuele kwaliteitsrapport van uw regio.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Thuiszuivering: wanneer is een thuisfilter zinvol naast leidingwater?',
  description: 'Nederlands leidingwater is al gezuiverd, maar thuiszuivering (osmose, actief kool, UV) biedt extra bescherming tegen PFAS, lood en bacterien in.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterzuivering/thuis',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function ThuiszuiveringPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterzuivering', item: 'https://waterfilterplatform.nl/waterzuivering' },
              { '@type': 'ListItem', position: 3, name: 'Thuiszuivering', item: 'https://waterfilterplatform.nl/waterzuivering/thuis' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterzuivering" className="hover:underline">Waterzuivering</Link> &rsaquo;{' '}
          <span>Thuiszuivering</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Thuiszuivering: wanneer is een thuisfilter zinvol naast leidingwater?
          </h1>
          <p className="text-gray-700 text-lg">
            Nederlands leidingwater is van hoge kwaliteit. Maar industriele waterzuivering stopt aan
            uw watermeter. Wat er in uw huisleiding, kranen en boiler daarna gebeurt, is uw
            verantwoordelijkheid.
          </p>
        </div>

        <QuickAnswer answer="Industriele waterzuivering stopt aan de watermeter. Thuiszuivering is zinvol bij loodleidingen (woningen voor 1960), PFAS in uw regio, chloorresiduen die smaak beinvloeden, of nitraat in landbouwgebieden. Osmosefilter verwijdert lood (99%), PFAS (90-98%) en nitraat (85-95%). Eerste stap: laat uw water testen." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Industriele zuivering stopt aan de watermeter
        </h2>
        <p className="text-gray-700 mb-4">
          Drinkwaterbedrijven leveren gecertificeerd veilig water tot aan uw watermeter. De kwaliteit
          van dat water is wettelijk geborgd en wordt continu gemonitord. Maar de reis van watermeter
          naar uw kraan verloopt via uw eigen huisinstallatie, en daarin kunnen problemen ontstaan:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Lood kan lekken uit leidingen in woningen gebouwd voor 1960</li>
          <li>Legionellabacterien kunnen groeien in warmwaterboilers bij lage temperatuur</li>
          <li>Chloorresiduen die voor het distributienet worden toegevoegd, beinvloeden smaak en geur</li>
          <li>Resterende PFAS die industriele zuivering niet volledig verwijderde, blijft aanwezig</li>
          <li>Harde kalk kan leidingen en apparaten aantasten en smaak beinvloeden</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer heeft thuiszuivering toegevoegde waarde?
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border-l-4 border-[#003F5C] pl-4 py-2">
            <h3 className="font-semibold text-[#003F5C]">1. Loodleidingen (woningen gebouwd voor 1960)</h3>
            <p className="text-gray-700 text-sm mt-1">
              Industriele zuivering helpt niet tegen lood dat lekt uit uw eigen leidingen.
              Waterontharder of osmosefilter verwijdert lood uit het water nadat het al
              verontreinigd is. Osmose verwijdert &gt;99% van opgelost lood. Controleer bij
              uw gemeente of uw wijk loodleidingen heeft of laat een loodtest uitvoeren.
            </p>
          </div>

          <div className="border-l-4 border-[#003F5C] pl-4 py-2">
            <h3 className="font-semibold text-[#003F5C]">2. PFAS in uw regio</h3>
            <p className="text-gray-700 text-sm mt-1">
              Industriele zuivering verwijdert PFAS onvolledig. In gebieden met verhoogde
              PFAS-achtergrondniveaus (nabij militaire bases, industrieterreinen of grote
              rivieren) voegt een thuisfilter zinvolle extra verwijdering toe. Osmosefilter
              verwijdert 90-98% van PFAS. Kijk in het jaarrapport van uw waterbedrijf naar
              de gemeten PFAS-concentraties.
            </p>
          </div>

          <div className="border-l-4 border-[#003F5C] pl-4 py-2">
            <h3 className="font-semibold text-[#003F5C]">3. Smaak en geur van chloor</h3>
            <p className="text-gray-700 text-sm mt-1">
              Chloor wordt toegevoegd voor residuele desinfectie in het distributienet.
              Vlak na een reservoir of bij warme zomers kan de chloorconcentratie merkbaar
              zijn. Een eenvoudig actief koolfilter (filterkan of onder-aanrecht) verwijdert
              chloor effectief en is de goedkoopste thuiszuiveringsoptie (30-200 euro).
            </p>
          </div>

          <div className="border-l-4 border-[#003F5C] pl-4 py-2">
            <h3 className="font-semibold text-[#003F5C]">4. Nitraat (landbouwgebieden)</h3>
            <p className="text-gray-700 text-sm mt-1">
              Nitraat spoelt uit landbouwgrond naar het grondwater. De drinkwaternorm is
              50 mg/L; waarden daarboven zijn gezondheidskundig relevant voor zuigelingen.
              Check uw drinkwaterkwaliteitsrapport. Osmose verwijdert 85-95% van nitraat.
              Actief koolfilter verwijdert geen nitraat.
            </p>
          </div>

          <div className="border-l-4 border-[#003F5C] pl-4 py-2">
            <h3 className="font-semibold text-[#003F5C]">5. Bacterien in de huisinstallatie</h3>
            <p className="text-gray-700 text-sm mt-1">
              Legionella in warmwaterboilers is een ander probleem dan waterverontreiniging
              bij het waterbedrijf. De preventie is anders: warmwaterboiler boven 60 &#176;C
              houden, leidingen regelmatig doorspoelen. Een thuisfilter bij de kraan helpt
              hier slechts beperkt.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Thuiszuivering per probleem: kosten en methode
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Probleem</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Aanbevolen filter</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Chloor/smaak</td>
                <td className="border border-gray-300 px-3 py-2">Actief koolfilter of filterkan</td>
                <td className="border border-gray-300 px-3 py-2">&euro;30-200</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Lood</td>
                <td className="border border-gray-300 px-3 py-2">Osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300-800</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">PFAS</td>
                <td className="border border-gray-300 px-3 py-2">Osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300-800</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Nitraat</td>
                <td className="border border-gray-300 px-3 py-2">Osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300-800</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Bacterien (huisinstallatie)</td>
                <td className="border border-gray-300 px-3 py-2">UV-purifier of osmose</td>
                <td className="border border-gray-300 px-3 py-2">&euro;200-600</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Hard water</td>
                <td className="border border-gray-300 px-3 py-2">Waterontharder of waterontkalker</td>
                <td className="border border-gray-300 px-3 py-2">&euro;800-2.500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Aanpak: eerst testen, dan filteren
        </h2>
        <p className="text-gray-700 mb-4">
          De meest verstandige aanpak is om eerst te weten <em>wat</em> u wilt filteren voordat u
          een filter aanschaft. De stappen:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>Download het jaarrapport van uw waterbedrijf (postcodegebied) en bekijk de meetwaarden voor PFAS, nitraat, lood en hardheid</li>
          <li>Controleer bij de gemeente of uw woning loodleidingen heeft (gebouwd voor 1960)</li>
          <li>Als u specifieke klachten heeft (smaak, geur, gezondheidsklachten), laat een wateranalyse uitvoeren via een gecertificeerd laboratorium</li>
          <li>Kies op basis van het probleem de juiste filtertechnologie</li>
          <li>Vergelijk merken en laat installeren door een gecertificeerde installateur</li>
        </ol>
        <p className="text-gray-700 mb-6">
          Meer over specifieke filtertechnologieen vindt u op de pagina{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> en{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Thuiszuivering is aanvullend, niet vervangend
        </h2>
        <p className="text-gray-700 mb-4">
          Een cruciaal misverstand is dat een thuisfilter de industriele waterzuivering vervangt.
          Dat doet het niet. De industriele waterzuivering door uw waterbedrijf verwijdert het
          overgrote deel van alle verontreinigingen en levert gecertificeerd veilig drinkwater.
        </p>
        <p className="text-gray-700 mb-6">
          Een thuisfilter voegt een extra beschermingslaag toe voor specifieke situaties die na de
          watermeter kunnen optreden. Dit is zinvolle aanvulling voor mensen die extra zekerheid
          willen, in kwetsbare situaties verkeren (zwangerschap, zuigelingen, immuungecompromitteerd),
          of die specifieke verontreinigingen willen reduceren die hun waterbedrijf nog niet volledig
          verwijdert.
        </p>
        <p className="text-gray-700 mb-6">
          Lees meer over de basis:{' '}
          <Link href="/waterzuivering" className="text-[#005F8A] underline">hoe waterzuivering werkt in Nederland</Link>.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose filtertechniek</h3>
            <p className="text-sm text-gray-600">Hoe omgekeerde osmose werkt en wanneer het de beste keuze is voor thuiszuivering.</p>
          </Link>
          <Link href="/waterfilter/soorten" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Soorten waterfilters</h3>
            <p className="text-sm text-gray-600">Vergelijking van alle soorten waterfilters voor thuisgebruik: voor- en nadelen.</p>
          </Link>
          <Link href="/keuzehulp" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp waterfilter</h3>
            <p className="text-sm text-gray-600">Welk waterfilter past bij uw situatie? Gebruik onze keuzehulp.</p>
          </Link>
          <Link href="/filtertechnieken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Filtertechnieken</h3>
            <p className="text-sm text-gray-600">Overzicht van alle filtertechnieken voor drinkwater en hun werking.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over thuiszuivering</h2>
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
          <Link href="/waterzuivering" className="text-[#005F8A] underline">waterzuivering overzicht</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> en{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>
      </main>
    </>
  );
}
