import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterontharder of osmosefilter: wanneer kies je wat?',
  description: 'Waterontharder verzacht water door calciumionen te wisselen voor natrium. Osmosefilter verwijdert 95-99% van alle verontreinigingen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/vs-osmose' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een waterontharder en een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een waterontharder werkt via ionenwisseling: calcium- en magnesiumionen worden vervangen door natriumionen, waardoor het water zachter wordt en geen kalk meer neerslaat. Een osmosefilter werkt via membraanfiltratie en verwijdert 95-99% van alle opgeloste stoffen, inclusief natrium, PFAS, nitraat, lood en bacterien. Een waterontharder installeert u centraal voor het hele huis; een osmosefilter plaatst u als punt-van-gebruik onder de keukeninbak voor drinkwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een waterontharder PFAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Een waterontharder verwijdert via ionenwisseling alleen calcium- en magnesiumionen. PFAS (poly- en perfluoralkylstoffen) zijn organische verbindingen die niet door dit ionenwisselingsproces worden afgevangen. Alleen een osmosefilter (95-99% verwijdering) of een speciaal actief-koolfilter kan PFAS effectief verwijderen. Als PFAS in uw regio een zorg is, is een osmosefilter noodzakelijk.',
      },
    },
    {
      '@type': 'Question',
      name: "Is zacht water van een ontharder veilig voor baby's?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nee, ontharderd water is niet aanbevolen voor de bereiding van babyvoeding. Het ionenwisselingsproces verhoogt het natriumgehalte aanzienlijk, soms tot 200-300 mg/L Na. Baby's hebben een nog onvolgroeide nierfunctie en kunnen hoge natriumgehaltes niet goed verwerken. Gebruik voor babyvoeding altijd osmosewater of flessenwater met een natriumgehalte onder 20 mg/L. Osmosewater bevat doorgaans minder dan 5 mg/L natrium.",
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is goedkoper op lange termijn: ontharder of osmose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een osmosefilter is op lange termijn goedkoper. Een waterontharder heeft jaarlijkse zoutkosten van 300-600 euro plus periodieke servicekosten, bovenop de aanschaf van 800-2500 euro. Een osmosefilter kost bij aanschaf 300-800 euro en heeft jaarlijkse filterkosten van slechts 30-60 euro. Na 5-10 jaar is het totale kostenverschil aanzienlijk in het voordeel van de osmosefilter, terwijl die ook een breder scala aan verontreinigingen verwijdert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik zowel een waterontharder als een osmosefilter installeren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, deze combinatie is mogelijk en zinvol in bepaalde situaties. De waterontharder beschermt de leidingen, boiler en apparaten in het hele huis tegen kalk. De osmosefilter aan de keuken levert chemisch puur drinkwater vrij van PFAS, nitraat, hormonen en &mdash; als bonus &mdash; ook het extra natrium dat de ontharder heeft toegevoegd. Zorg dat de osmosefilter na de ontharder in de waterleiding is geplaatst.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter ook de kalk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Een osmosefilter verwijdert calcium- en magnesiumionen (de veroorzakers van kalk) voor 90-95%. Osmosewater veroorzaakt dan ook geen kalkaanslag in koffiemachines, waterkokers of stoomijzers. Het nadeel is dat een osmosefilter alleen het drinkwater in de keuken beschermt, niet de leidingen en apparaten elders in het huis. Een waterontharder beschermt het hele huis, maar filtert geen chemische verontreinigingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mijn water is hard en bevat PFAS &mdash; wat is de beste oplossing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij zowel kalkaanslag als PFAS-verontreiniging zijn er twee opties: (1) een osmosefilter voor de keuken (verwijdert zowel kalk als PFAS uit drinkwater) gecombineerd met een antikalk-doseerder of magneetontkalker voor apparaten; (2) een waterontharder voor het hele huis plus een osmosefilter in de keuken. Optie 1 is goedkoper; optie 2 biedt volledige bescherming van alle huishoudelijke apparaten. Raadpleeg een installateur voor de beste configuratie in uw situatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is natrium in ontharderd water schadelijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor gezonde volwassenen met een normale nierfunctie is het natriumgehalte in ontharderd water doorgaans geen gezondheidsrisico. De dagelijkse natriuminname via voeding is in Nederland gemiddeld 8-10 gram; het extra natrium uit ontharderd water (bij 300 mg/L en 2 liter drinkwater per dag is dat 600 mg/dag extra) kan echter relevant zijn voor mensen op een strikt zoutarm dieet, mensen met nierproblemen, hart- en vaatziekten of hoge bloeddruk. Voor hen en voor baby&apos;s is osmosewater een betere keuze.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterontharder of osmosefilter: wanneer kies je wat?',
  description: 'Waterontharder verzacht water via ionenwisseling; osmosefilter verwijdert 95-99% van alle verontreinigingen. Vergelijking voor elke situatie.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterontharder/vs-osmose',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterontharderVsOsmosePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterontharder', item: 'https://waterfilterplatform.nl/waterontharder' },
              { '@type': 'ListItem', position: 3, name: 'Waterontharder vs osmosefilter', item: 'https://waterfilterplatform.nl/waterontharder/vs-osmose' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterontharder" className="hover:underline">Waterontharder</a> &rsaquo;{' '}
          <span>Waterontharder vs osmosefilter</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterontharder of osmosefilter: wanneer kies je wat?
          </h1>
          <p className="text-gray-700 text-lg">
            Waterontharder of osmosefilter: ze lossen allebei kalkproblemen op, maar op een heel andere manier en met heel andere bijwerkingen.
            Een ontharder voegt natrium toe; een osmosefilter haalt juist alles weg.
            De juiste keuze hangt af van uw situatie.
          </p>
        </div>

        <QuickAnswer answer="Een waterontharder verwijdert kalk via ionenwisseling maar voegt natrium toe en filtert geen PFAS, nitraat of lood. Een osmosefilter verwijdert 95-99% van alle verontreinigingen inclusief kalk, maar beschermt alleen het drinkwaterpunt in de keuken. Bij hard water zonder chemische verontreiniging volstaat een ontharder; bij PFAS, lood of baby in huis is een osmosefilter noodzakelijk." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe werkt een waterontharder?
        </h2>
        <p className="text-gray-700 mb-4">
          Een waterontharder maakt gebruik van ionenwisseling. Het toestel bevat een hars gevuld met natriumionen.
          Wanneer hard water (rijk aan calcium Ca&sup2;&sup3; en magnesium Mg&sup2;&sup3;) door de hars stroomt,
          wisselen de calciumionen en magnesiumionen van plaats met de natriumionen: de harde ionen worden vastgehouden,
          natriumionen worden afgegeven aan het water.
        </p>
        <p className="text-gray-700 mb-4">
          Het resultaat: zacht water zonder kalkaanslag. Ketel, vaatwasser, wasmachine en leidingen blijven kalkvrij.
          Maar: het natriumgehalte stijgt aanzienlijk. Bij hard water (18+ dH) kan het natriumgehalte na ontharding oplopen tot 200-300 mg/L.
          De hars wordt periodiek geregenereerd met zout, wat de doorlopende zoutkosten van 300-600 euro per jaar verklaart.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe werkt een osmosefilter?
        </h2>
        <p className="text-gray-700 mb-4">
          Een omgekeerde-osmosefilter filtert water op moleculair niveau via een membraan met porieen van 0,0001 micrometer.
          Onder waterdruk passeren alleen watermoleculen en een kleine fractie van de kleinste ionen het membraan.
          Calcium, magnesium, natrium, PFAS, nitraat, lood, bacterien en vrijwel alle andere opgeloste stoffen worden tegengehouden.
        </p>
        <p className="text-gray-700 mb-6">
          Een osmosefilter installeert u als punt-van-gebruik onder de keukeninbak. Het beschermt uw drinkwater en kookwater optimaal,
          maar de rest van het huis (leidingen, wasmachine, douche) ontvangt normaal leidingwater.
          Lees meer over de werking op onze pagina over{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Grote vergelijking: waterontharder vs osmosefilter
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Criterium</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Waterontharder</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Osmosefilter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Kalkaanslag</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (elimineert)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (elimineert)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">PFAS</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (95%+)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Nitraat</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Deels</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (85-95%)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Lood</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (95%+)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Natrium in water</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Toevoegen!</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Verwijdert</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Bacterien</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (membraan)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Geschikt voor baby&apos;s</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee (natrium)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Geschikt voor zoutarm dieet</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Installatie</td>
                <td className="border border-gray-300 px-3 py-2">Heel huis (centraal)</td>
                <td className="border border-gray-300 px-3 py-2">Keuken (punt-van-gebruik)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Aanschafprijs</td>
                <td className="border border-gray-300 px-3 py-2">&euro;800-2.500</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300-800</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Jaarlijkse kosten</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">&euro;300-600 (zout)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">&euro;30-60 (filters)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Onderhoud</td>
                <td className="border border-gray-300 px-3 py-2">Zout bijvullen, service</td>
                <td className="border border-gray-300 px-3 py-2">Filterwissel 1-2x/jaar</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Levensduur</td>
                <td className="border border-gray-300 px-3 py-2">15-25 jaar</td>
                <td className="border border-gray-300 px-3 py-2">10-20 jaar</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke situatie vraagt om welke oplossing?
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">Situatie 1: Hard water, geen chemische verontreinigingen</h3>
            <p className="text-gray-700 text-sm">
              U woont in een regio met hard water (boven 15 dH) en heeft last van kalkaanslag op apparaten en leidingen,
              maar er zijn geen PFAS-problemen of loodleidingen bekend. <strong>Keuze: waterontharder</strong>.
              De ontharder beschermt het hele huis effectief. Overweeg een aparte waterkoker of filterkraan voor drinkwater om het extra natrium te vermijden.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">Situatie 2: PFAS-zone, medicijnresten of loodleidingen</h3>
            <p className="text-gray-700 text-sm">
              U woont nabij een PFAS-bron, uw huis heeft loodleidingen (gebouwen van voor 1960), of u maakt zich zorgen over nitraat en hormonen in uw drinkwater.
              <strong> Keuze: osmosefilter</strong>. Een waterontharder helpt hier niet bij; een osmosefilter verwijdert 95-99% van deze stoffen.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">Situatie 3: Zowel kalkaanslag als chemische verontreinigingen</h3>
            <p className="text-gray-700 text-sm">
              U heeft last van kalk in het hele huis en woont ook in een gebied met PFAS of andere verontreinigingen.
              <strong> Keuze: combinatie waterontharder + osmosefilter</strong> of een 4-in-1 kraan met ingebouwd osmosesysteem voor de keuken.
              De ontharder beschermt apparaten en leidingen; de osmosefilter levert puur drinkwater.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">Situatie 4: Baby in huis of zoutarm dieet</h3>
            <p className="text-gray-700 text-sm">
              Als u een baby heeft, zwanger bent, of een zoutbeperkt dieet volgt vanwege hoge bloeddruk of nierproblemen.
              <strong> Keuze: altijd osmosefilter, nooit ontharderd water</strong>.
              Het verhoogde natriumgehalte van ontharderd water is in deze situaties niet acceptabel.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kostenvergelijking op lange termijn
        </h2>
        <p className="text-gray-700 mb-4">
          Over 10 jaar zijn de totale kosten van een waterontharder aanzienlijk hoger:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Waterontharder</strong>: aanschaf &euro;1.500 + 10 jaar zout &euro;4.500 = totaal ca. &euro;6.000</li>
          <li><strong>Osmosefilter</strong>: aanschaf &euro;500 + 10 jaar filters &euro;500 = totaal ca. &euro;1.000</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Het break-even punt waarbij de ontharder economisch vergelijkbaar is, is vrijwel nooit bereikt.
          De osmosefilter is de duidelijk goedkopere keuze op lange termijn, en levert bovendien beter gefilterd drinkwater.
        </p>
        <p className="text-gray-700 mb-6">
          Vergelijk meer opties op onze pagina over{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharders</Link> en lees het verschil tussen{' '}
          <Link href="/waterontkalker/vs-waterontharder" className="text-[#005F8A] underline">waterontkalker vs waterontharder</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kalk: wat willen we verwijderen?</h3>
              <p className="text-sm text-gray-600">Kalk en mineralen in drinkwater: wat ze zijn en waarom we ze willen verwijderen.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Osmose als alternatief voor ontharder</h3>
              <p className="text-sm text-gray-600">Hoe omgekeerde osmose werkt als alternatief voor een klassieke waterontharder.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
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

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder informatie</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link> en{' '}
          <Link href="/waterontkalker/vs-waterontharder" className="text-[#005F8A] underline">waterontkalker vs waterontharder</Link>.
        </p>
      </main>
    </>
  );
}
