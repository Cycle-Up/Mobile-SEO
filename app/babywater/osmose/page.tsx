import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosewater voor baby: veilig voor flesvoeding en babyvoeding?',
  description:
    'Osmosewater is veilig en ideaal voor babyvoeding: natrium <5 mg/L, nitraat <1 mg/L, geen lood, geen PFAS. Het lage TDS is geen probleem want melkpoeder bevat.',
  alternates: { canonical: 'https://waterfilterplatform.nl/babywater/osmose' },
};

const faqItems = [
  {
    q: 'Is osmosewater veilig voor babyvoeding?',
    a: 'Ja, osmosewater is veilig en bij voorkeur de beste keuze voor babyvoeding. Osmosewater heeft natrium onder 5 mg/L, nitraat onder 1 mg/L, geen lood en geen PFAS. Het lage mineralengehalte is geen probleem: babymelkpoeder (Nutrilon, Aptamil, Hipp, Kendamil) bevat alle benodigde mineralen en is berekend op gebruik met laag-mineraal water. Kook osmosewater wel altijd tot minimaal 70 graden Celsius voor aanmaak van de fles om Cronobacter-risico te elimineren.',
  },
  {
    q: 'Bevat osmosewater te weinig mineralen voor baby\'s?',
    a: 'Nee. Dit is een veelgehoord misverstand. Babymelkpoeder (zoals Nutrilon Standaard, Aptamil 1, Hipp Bio) is samengesteld om alle benodigde mineralen, vitaminen en voedingsstoffen te leveren via het poeder zelf. De formule is berekend op aanmaak met laag-mineraal water (TDS onder 100 mg/L). Osmosewater (TDS 5-50 mg/L) past perfect in dit profiel. Extra mineralen via hard kraanwater zijn ongewenst, niet gewenst.',
  },
  {
    q: 'Is osmosewater of flessenbabywater beter?',
    a: 'Osmosewater en flessenbabywater hebben een vergelijkbaar mineralenprofiel (beide laag natrium, laag nitraat). Osmosewater is echter voordeliger: 0,02-0,05 euro per liter versus 0,40-0,80 euro per liter voor flessenbabywater. Bij dagelijks gebruik van 1 liter water voor flesvoeding bespaart u 130-270 euro per jaar met osmosewater. Bovendien geen plastic afval. Osmosewater verwijdert ook PFAS en medicijnresten die niet worden getest in flessenbabywater.',
  },
  {
    q: 'Moet ik osmosewater koken voor flesvoeding?',
    a: 'Ja, ook osmosewater moet u koken tot minimaal 70 graden Celsius voor de aanmaak van flesvoeding. De reden is niet het water zelf (osmosewater is bacteriologisch schoon), maar het melkpoeder. Gedroogd babymelkpoeder is niet steriel en kan Cronobacter sakazakii bevatten, zelfs in ongeopende verpakkingen. Water van minimaal 70 graden Celsius bij het aanmaken doodt deze bacterie. Na aanmaken: koel de fles snel af tot drinktemperatuur van circa 37 graden Celsius.',
  },
  {
    q: 'Kan ik osmosewater gebruiken om Nutrilon aan te maken?',
    a: 'Ja. Nutrilon (en andere babymelkpoedermerken zoals Aptamil, Hipp, Kendamil) geeft aan dat laag-mineraalwater geschikt is voor aanmaak. Osmosewater valt in de categorie laag-mineraalwater (TDS 5-50 mg/L). De instructies op Nutrilon-verpakkingen vermelden "gebruik drinkwater of laag-mineraalwater" en osmosewater voldoet hieraan volledig. Volg altijd de aanwijzingen op de verpakking voor de juiste verhouding poeder en water.',
  },
  {
    q: 'Is osmosewater veilig voor baby\'s in PFAS-gebieden?',
    a: 'Ja, juist in PFAS-gebieden (zoals de omgeving van Dordrecht, Schiphol-regio, of andere gebieden met verhoogde PFAS-concentraties in kraanwater) is osmosewater de aanbevolen keuze voor babyvoeding. Omgekeerde osmose verwijdert PFAS voor meer dan 95%. Baby\'s zijn bijzonder kwetsbaar voor PFAS vanwege hun kleine lichaamsgewicht en de snelle ontwikkeling van het zenuwstelsel en immuunsysteem. In PFAS-zones is osmosefiltratie sterk aanbevolen voor alle babyvoeding.',
  },
  {
    q: 'Hoeveel kost osmosewater voor flesvoeding per maand?',
    a: 'Een osmosefilter (onder-aanrecht RO) kost aanschaf 300-800 euro. Per liter osmosewater betaalt u daarna 0,02-0,05 euro (water + filtervervanging). Bij 1 liter water per dag voor flesvoeding: circa 0,60-1,50 euro per maand. Ter vergelijking: flessenbabywater kost bij 1 liter per dag 12-24 euro per maand. Na 1,5-3 jaar heeft de osmosefilter zichzelf terugverdiend. Na die periode bespaart u 130-270 euro per jaar ten opzichte van flessenbabywater.',
  },
  {
    q: 'Kan ik osmosewater gebruiken voor pap en aanvullende voeding?',
    a: 'Ja. Osmosewater is ook geschikt voor de bereiding van babygranen (Hipp Rijstepap, Nutrilon pap), gepureerde groenten en andere aanvullende voeding. Kook osmosewater voor bereiding van warme gerechten of kook het groente of fruit voldoende door. Voor warme gerechten waarbij water wordt gekookt is het koken van osmosewater al inherent aan de bereiding. Voor bereiding van koude voeding (zoals gemixte fruit): gebruik gekookt en afgekoeld osmosewater.',
  },
  {
    q: 'Osmosewater voor kolven en accessoires: is het veilig?',
    a: 'Osmosewater is uitstekend geschikt voor het reinigen en steriliseren van borstkolven, flessen, spenen en andere babyaccessoires. Voordelen: geen kalkafzetting (laag TDS), geen chloor (vermijdt rubberdegradatie van spenen), geen smaak- of geuroverdracht op plastic onderdelen. Stoomsterilisatie met osmosewater laat geen kalkresidu achter in de sterilisator, wat de apparatuur langer schoon houdt.',
  },
];

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosewater voor baby: veilig voor flesvoeding en babyvoeding?',
  description:
    'Osmosewater is veilig en ideaal voor babyvoeding: natrium onder 5 mg/L, nitraat onder 1 mg/L, geen lood, geen PFAS. Het lage TDS is geen probleem want.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/babywater/osmose',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmosewaterBabyPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Babywater', item: 'https://waterfilterplatform.nl/babywater' },
              { '@type': 'ListItem', position: 3, name: 'Osmosewater voor baby', item: 'https://waterfilterplatform.nl/babywater/osmose' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/babywater" className="hover:underline">Babywater</Link> &rsaquo;{' '}
          <span>Osmosewater voor baby</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Osmosewater voor baby: veilig voor flesvoeding en babyvoeding?
          </h1>
          <p className="text-gray-700 text-lg">
            Osmosewater is de veiligste keuze voor babyvoeding. Natrium &lt;5 mg/L, nitraat &lt;1 mg/L, geen lood, geen PFAS. Het lage mineralengehalte is geen probleem.
          </p>
        </div>

        <QuickAnswer answer="Osmosewater is veilig en bij voorkeur de beste keuze voor flesvoeding: natrium &lt;5 mg/L, nitraat &lt;1 mg/L, geen lood, geen PFAS. Het lage TDS is geen probleem want babymelkpoeder bevat alle mineralen. Kosten &euro;0,02&ndash;0,05 per liter versus &euro;0,40&ndash;0,80 voor flessenbabywater. Kook osmosewater altijd tot minimaal 70&deg;C voor aanmaak." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Is het lage TDS van osmosewater een probleem voor baby&apos;s?
        </h2>
        <p className="text-gray-700 mb-4">
          Een veelgehoord bezwaar tegen osmosewater voor babyvoeding is het lage TDS (Total Dissolved Solids, totaal opgeloste mineralen), doorgaans 5&ndash;50 mg/L bij RO-water. Het idee is dat baby&apos;s te weinig mineralen zouden binnenkrijgen. Dit bezwaar berust op een misverstand.
        </p>
        <p className="text-gray-700 mb-4">
          Babymelkpoeder (Nutrilon, Aptamil, Hipp, Kendamil) bevat alle benodigde mineralen, vitaminen en spoorelementen in exact de juiste verhoudingen voor de leeftijdsfase van uw kind. De formule is berekend op aanmaak met laag-mineraal water &mdash; niet met mineraalwater of hard kraanwater. Extra mineralen via hard water of mineraalwater zijn dus ONGEWENST, niet gewenst.
        </p>
        <p className="text-gray-700 mb-6">
          De WHO-richtlijn voor babywater stelt een maximum voor natrium (20 mg/L) en nitraat (10 mg/L), maar geen minimum voor het totale mineralengehalte. Osmosewater voldoet aan alle maxima ruimschoots en heeft geen nadelen voor de mineraleninname van uw baby.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosewater vs flessenbabywater: vergelijking
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Eigenschap</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Osmosewater (RO)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Flessenbabywater</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Natrium</td>
                <td className="border border-gray-300 px-3 py-2">&lt;5 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">1&ndash;5 mg/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Nitraat</td>
                <td className="border border-gray-300 px-3 py-2">&lt;1 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">&lt;2 mg/L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Lood</td>
                <td className="border border-gray-300 px-3 py-2">&lt;0,1 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">&lt;0,1 &micro;g/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">PFAS</td>
                <td className="border border-gray-300 px-3 py-2">&gt;95% verwijderd</td>
                <td className="border border-gray-300 px-3 py-2">Niet gegarandeerd (niet getest)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Medicijnresten</td>
                <td className="border border-gray-300 px-3 py-2">&gt;95% verwijderd</td>
                <td className="border border-gray-300 px-3 py-2">Niet gegarandeerd</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Prijs per liter</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">&euro;0,02&ndash;0,05</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700 font-semibold">&euro;0,40&ndash;0,80</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Plastic afval</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Geen</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Ja (PET-flessen)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Jaarkosten (1L/dag)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">&euro;7&ndash;18</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700 font-semibold">&euro;146&ndash;292</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosewater en melkpoeder: hoe werkt het samen?
        </h2>
        <p className="text-gray-700 mb-4">
          Nutrilon, Aptamil, Hipp en andere babymelkpoedermerken specificeren dat u drinkwater of laag-mineraalwater gebruikt voor aanmaak. Osmosewater (TDS 5&ndash;50 mg/L) valt in de categorie laag-mineraalwater en is daarmee volledig conform de aanwijzingen op de verpakking.
        </p>
        <p className="text-gray-700 mb-6">
          De bereiding blijft identiek: kook osmosewater tot 100&deg;C, laat iets afkoelen tot minimaal 70&deg;C, voeg het afgemeten poeder toe, schud goed en koel snel af tot drinktemperatuur van circa 37&deg;C. Er is geen verschil in smaak, oplosbaarheid of voedingswaarde van het melkpoeder door gebruik van osmosewater versus flessenbabywater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          PFAS en osmosewater: extra veilig in risicogebieden
        </h2>
        <p className="text-gray-700 mb-4">
          In gebieden met verhoogde PFAS-concentraties in kraanwater (omgeving Dordrecht, Schiphol-zone, delen van Noord-Brabant en Zeeland) is osmosefiltratie bijzonder relevant voor babyvoeding. PFAS worden door het lichaam opgehoopt (bioaccumulatie) en kunnen de ontwikkeling van het immuunsysteem en het zenuwstelsel bei jonge kinderen beinvloeden.
        </p>
        <p className="text-gray-700 mb-6">
          Omgekeerde osmose verwijdert PFAS (zowel PFOS als PFOA als andere PFAS-verbindingen) voor meer dan 95%. Flessenbabywater wordt niet standaard getest op PFAS. Osmosewater biedt daarmee aantoonbaar betere bescherming tegen PFAS voor uw baby dan commercieel babywater, zeker in gebieden met bekende PFAS-problematiek.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosewater voor kolven en accessoires reinigen
        </h2>
        <p className="text-gray-700 mb-6">
          Osmosewater is ook uitstekend voor het reinigen en steriliseren van borstkolven, flessen, spenen en kolv-onderdelen. Omdat osmosewater vrijwel geen kalk bevat, laat stoomsterilisatie geen kalkaanslag achter in de sterilisator of op de accessoires. Dit verlengt de levensduur van apparatuur en vermijdt kalkresiduopbouw op rubberen spenen. Chloorvrij osmosewater voorkomt ook smaak- en geuroverdracht bij plastic accessoires.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer extra mineralen toevoegen aan osmosewater?
        </h2>
        <p className="text-gray-700 mb-6">
          Bij gebruik van osmosewater voor de bereiding van flesvoeding hoeft u GEEN extra mineralen toe te voegen &mdash; het melkpoeder levert alle benodigde mineralen. Het toevoegen van mineraaldruppels of mineraalpoeder aan flesvoeding-water is niet aanbevolen zonder advies van een arts of dieetkundige, omdat dit de mineralenbalans van de voeding verstoort. Overleg met uw kinderarts als u specifieke zorgen heeft over de mineraleninname van uw kind.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/babywater/welk-water" className="group border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1 text-sm">Welk water is het beste voor baby's?</p>
              <p className="text-xs text-gray-500">Vergelijking van alle watersoorten voor flesvoeding</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="group border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1 text-sm">Hoe werkt omgekeerde osmose?</p>
              <p className="text-xs text-gray-500">Technische uitleg van het osmosefiltratie­proces</p>
            </Link>
            <Link href="/keuzehulp/baby-gezin" className="group border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1 text-sm">Keuzehulp voor gezinnen met baby's</p>
              <p className="text-xs text-gray-500">Welk waterfilter past bij uw gezinssituatie?</p>
            </Link>
            <Link href="/babywater" className="group border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1 text-sm">Terug naar babywater overzicht</p>
              <p className="text-xs text-gray-500">Alle informatie over water voor baby's</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over osmosewater voor baby&apos;s
          </h2>
          {faqItems.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">{faq.q}</summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.a}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/babywater" className="text-[#005F8A] underline">babywater overzicht</Link>,{' '}
          <Link href="/babywater/welk-water" className="text-[#005F8A] underline">welk water voor flesvoeding</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link> en{' '}
          <Link href="/pfas-waterfilter" className="text-[#005F8A] underline">PFAS waterfilter</Link>.
        </p>
      </main>
    </>
  );
}
