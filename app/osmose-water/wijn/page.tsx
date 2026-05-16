import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosewater voor wijnmakers: watersamenstelling, gist en remineralisatie',
  description:
    'Thuiswijnmakers en kleine wijnmakerijen gebruiken osmosewater als basiswater voor remineralisatie op maat. pH-instelling, gist-gezondheid en sulfaatgehalte beinvloeden gisting en smaakprofiel.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/wijn' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Kan ik osmosewater gebruiken voor thuiswijn van concentraat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, osmosewater is geschikt voor thuiswijn van concentraat. Het bevat geen chloor dat gistpopulaties beschadigt en heeft een neutrale TDS-waarde. Gebruik bij voorkeur een mix: 15-18 liter osmosewater aangevuld met 5-8 liter leidingwater, of voeg gistvoeding (Fermaid-K, DAP) en mineralen toe aan puur osmosewater om trage gisting te voorkomen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom is chloor in leidingwater slecht voor wijn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chloor beschadigt gistcellen en remt de fermentatie. Erger nog: chloor reageert met fenolverbindingen van houten vaten, kurken of plastic uitrusting tot trichloranisol (TCA), de stof verantwoordelijk voor de befaamde kurksmaak in wijn. Osmosewater of actief-koolbehandeld water elimineert dit risico volledig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heeft gist mineralen nodig uit het water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Saccharomyces cerevisiae (wijn- en brouwgist) heeft magnesium nodig als co-factor voor glycolysezymenen: 50-150 mg/L wordt aanbevolen. Kalium (100-500 mg/L) is ook essentieel maar is ruimschoots aanwezig in druivensap en concentraat. Thiamine (vitamine B1) is ook nuttig -- standaard gistvoedingssupplementen zoals Fermaid-K voorzien hierin.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe remineraliseer ik osmosewater voor wijnmaking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voeg per liter osmosewater toe: 50-100 mg magnesiumsulfaat (epsomazout, MgSO4) voor magnesium en sulfaat, en 50-100 mg calciumsulfaat (gips, CaSO4) voor calcium. Sulfaat verhoogt de droogheid en structuur in rode wijnen. Voeg wijnzuur toe voor pH-aanpassing indien nodig. Test met een TDS-meter en pH-meter voor en na remineralisatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen druivenwijn en concentraatwijn wat betreft water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij druivenwijn is druivensap (most) de primaire basis -- water speelt een kleine rol, eventueel voor verdunning bij extreem hoge suikerconcentraties. Bij concentraatwijn (kits van Winexpert, Beaverdale) vormt water het grootste volume: circa 23 liter per batch. Hier is waterkwaliteit cruciaal voor gistgezondheid, smaak en klaring.',
      },
    },
    {
      '@type': 'Question',
      name: 'Beschadigt chlooramine ook de gist, net als gewoon chloor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, en chlooramine is zelfs lastiger te verwijderen dan gewoon chloor. Chloor verdampt bij koken of staan, maar chlooramine niet. Actief koolfiltratie verwijdert chlooramine effectief. Een osmosefilter verwijdert beide volledig. Nederlandse waterbedrijven gebruiken wisselend chloor of chlooramine afhankelijk van het distributienetwerk en het seizoen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verbetert osmosewater de kwaliteit van zelfgemaakte wijn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater kan de wijnkwaliteit verbeteren door chloor- en chlooraminevrije gistomstandigheden te bieden, wat resulteert in een schonere gisting zonder off-flavors. De toegevoegde waarde is het grootst bij concentraatwijn en bij wijnmakers in gebieden met sterk gechloreerd of hard leidingwater. Bij goed leidingwater met lage hardheid is het voordeel kleiner.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk waterfilter is het beste voor thuiswijnmakers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een osmosefilter onder het aanrecht is de meest complete oplossing: verwijdert chloor, chlooramine, sulfaten, nitraten en zware metalen volledig. Een actief koolfilter (blok- of granulaat) is een goedkoper alternatief dat specifiek chloor en chlooramine aanpakt maar TDS en hardheid niet verlaagt. Voor wijnmakers die ook remineraliseren, geeft osmose de meeste controle.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosewater voor wijnmakers: watersamenstelling, gist en remineralisatie',
  description:
    'Thuiswijnmakers en kleine wijnmakerijen gebruiken osmosewater als basiswater voor remineralisatie op maat. pH-instelling, gist-gezondheid en sulfaatgehalte beinvloeden gisting en smaakprofiel.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/osmose-water/wijn',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseWaterWijnPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Osmose water', item: 'https://waterfilterplatform.nl/osmose-water' },
              { '@type': 'ListItem', position: 3, name: 'Osmosewater voor wijn', item: 'https://waterfilterplatform.nl/osmose-water/wijn' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/osmose-water" className="hover:underline">Osmose water</Link> &rsaquo;{' '}
          <span>Osmosewater voor wijn</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Osmosewater voor wijnmakers: watersamenstelling, gist en remineralisatie
          </h1>
          <p className="text-[#005F8A] text-lg">
            Water speelt een cruciale rol bij thuiswijnmaking, vooral bij concentraatwijn.
            Chloor beschadigt gist en kan kurksmaak veroorzaken. Osmosewater geeft wijnmakers
            volledige controle over de watersamenstelling -- de basis voor een gezonde gisting
            en een zuiver smaakprofiel.
          </p>
        </section>

        <QuickAnswer answer="Osmosewater is ideaal voor thuiswijnmakers: geen chloor dat gist beschadigt, geen TCA-vorming (kurksmaak). Voeg gistvoeding en mineralen toe aan puur osmosewater -- zonder mineralen stagneert de gisting. Magnesiumsulfaat (50-100 mg/L) en calciumsulfaat zijn de standaard remineralisatie voor concentraatwijn." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom water zo belangrijk is bij wijnmaken
        </h2>
        <p className="text-gray-700 mb-4">
          Bij druivenwijn is de primaire basis het druivensap (most). Water speelt daar een
          kleine, maar soms relevante rol: bij extreem hoge suikerconcentraties (chaptalisatie
          correctie) of bij het verdunnen van te geconcentreerde most bij hete jaargangen.
          Maar bij de populaire thuiswijn van concentraat of poeder -- denk aan kits van
          Winexpert, Beaverdale of LD Carlson -- is water het grootste volume in de batch.
          Typisch gaat het om 23 liter per batch, waarvan 18&ndash;22 liter water.
        </p>
        <p className="text-gray-700 mb-4">
          Daarnaast wordt water gebruikt voor het spoelen en steriliseren van gistingsvaten,
          sifons, slangen en ander uitrustingsmateriaal. Ook hier kan chloor in leidingwater
          problemen veroorzaken, zelfs als het water niet direct in de wijn terechtkomt.
        </p>
        <p className="text-gray-700 mb-6">
          De waterkwaliteit beinvloedt drie aspecten van uw wijn rechtstreeks: de gistgezondheid
          (en daarmee de fermentatiesnelheid en volledigheid), de afwezigheid van off-flavors
          (chloor, medicijn, plasticachtige bijsmaken), en de uiteindelijke pH en mineralenbalans
          van de wijn.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterkwaliteit voor wijn: wat telt
        </h2>
        <p className="text-gray-700 mb-4">
          De ideale watersamenstelling voor wijnmaking verschilt van drinkwater of brouwwater.
          De volgende parameters zijn het meest relevant:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Parameter</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Ideaal voor wijn</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Effect bij afwijking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Chloor</td>
                <td className="border border-gray-300 px-3 py-2">0 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">Gistschade, TCA-vorming (kurksmaak)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Magnesium</td>
                <td className="border border-gray-300 px-3 py-2">50&ndash;150 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">Te laag: trage gisting, H2S-vorming</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Calcium</td>
                <td className="border border-gray-300 px-3 py-2">50&ndash;150 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">Te hoog: pH-verhoging, calciumtartaatuitvlokkingen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Sulfaat</td>
                <td className="border border-gray-300 px-3 py-2">50&ndash;200 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">Verhoogt droogheid en structuur (rode wijn)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">TDS totaal</td>
                <td className="border border-gray-300 px-3 py-2">50&ndash;200 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">Te hoog: smaakafwijking; 0 mg/L: gistgebrek</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosewater: voordelen voor wijnmakers
        </h2>
        <p className="text-gray-700 mb-4">
          Een <Link href="/osmose-water" className="text-[#005F8A] underline">omgekeerde osmosefilter</Link>{' '}
          produceert water met nagenoeg 0 mg/L TDS: geen chloor, geen chlooramine, geen sulfaten,
          nitraten, zware metalen of hardheid. Voor wijnmakers biedt dit vier concrete voordelen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Geen chloor of chlooramine:</strong> gistcellen blijven intact en beginnen
            een gezonde, actieve fermentatie zonder vertraging
          </li>
          <li>
            <strong>Geen TCA-risico:</strong> zonder chloor in het water kan geen trichloranisol
            worden gevormd, zelfs niet bij contact met houten of plastic materialen
          </li>
          <li>
            <strong>Controleerbare startwaarden:</strong> u begint met een blanco lei (0 mg/L)
            en voegt precies de mineralen toe die u wilt, in de concentraties die u kiest
          </li>
          <li>
            <strong>Reproduceerbare resultaten:</strong> elke batch begint met dezelfde
            watersamenstelling, ongeacht seizoensvariaties in het leidingwater
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Chloor en TCA: de kurksmaak verbinding
        </h2>
        <p className="text-gray-700 mb-4">
          Trichloranisol (TCA) is de verbinding die verantwoordelijk is voor de karakteristieke
          kurksmaak in wijn -- een muf, kartonachtige geur die zelfs in extreem lage concentraties
          (2&ndash;6 nanogram per liter) detecteerbaar is. TCA ontstaat wanneer chloor (of
          chlooramine) reageert met fenolverbindingen die aanwezig zijn in houten vaten,
          kurken, plastic slangen of bepaalde gistingshulpmiddelen.
        </p>
        <p className="text-gray-700 mb-6">
          Hoewel TCA primair geassocieerd wordt met wijnkurken, kan het ook in uw gistingsvat
          of in de wijn zelf ontstaan. Osmosewater elimineert chloor volledig. Een actief
          koolfilter is een goedkoper alternatief dat specifiek chloor en chlooramine effectief
          verwijdert, maar TDS en hardheid niet aanpast. Zie onze vergelijking van{' '}
          <Link href="/waterfilter/chloor-verwijderen" className="text-[#005F8A] underline">methoden voor chloorverwijdering</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gist en mineralen: wat Saccharomyces cerevisiae nodig heeft
        </h2>
        <p className="text-gray-700 mb-4">
          Wijn- en brouwgist (<em>Saccharomyces cerevisiae</em>) heeft mineralen nodig om
          optimaal te functioneren. Puur osmosewater zonder enige mineraaltoevoeging leidt
          tot trage of gestagneerde gisting, verhoogde zwavelwaterstof (H2S) productie en
          mogelijk stuck fermentation -- een gisting die halverwege stopt.
        </p>
        <p className="text-gray-700 mb-4">
          De meest kritische mineralen voor gistgezondheid in wijnmaking:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Magnesium (50&ndash;150 mg/L):</strong> essentieel als co-factor voor
            glycolysezymenen (hexokinase, fosfoglyceraat kinase). Magnesiumtekort leidt
            direct tot verminderde fermentatie-efficiencye
          </li>
          <li>
            <strong>Kalium (100&ndash;500 mg/L):</strong> belangrijk voor osmoregulatie van
            gistcellen. Aanwezig in voldoende hoeveelheden in druivensap en concentraat,
            maar bij puur osmosewater + neutrale additieven kan aanvulling nodig zijn
          </li>
          <li>
            <strong>Thiamine (vitamine B1):</strong> gist kan thiamine synthetiseren maar
            reageert positief op externe suppletie. Standaard gistvoedingssupplementen
            zoals Fermaid-K en DAP (diammoniumfosfaat) bevatten thiamine en stikstof
          </li>
          <li>
            <strong>Stikstof (YAN -- Yeast Assimilable Nitrogen):</strong> aanwezig in
            druivensap, maar bij concentraatwijn en osmosewater-bases is aanvullende
            stikstofbron (DAP, Fermaid-O) essentieel voor een volledige gisting
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Remineralisatie voor wijn: praktisch stappenplan
        </h2>
        <p className="text-gray-700 mb-4">
          Voor concentraatwijn (typisch 23 liter batch) met puur osmosewater als basis:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Stap 1 &ndash; Magnesiumsulfaat (epsomazout, MgSO4):</strong> voeg 1,2&ndash;2,3 gram
            toe per 23 liter (geeft 50&ndash;100 mg/L magnesium en verhoogt sulfaatgehalte)
          </li>
          <li>
            <strong>Stap 2 &ndash; Calciumsulfaat (gips, CaSO4):</strong> voeg 1,2&ndash;2,3 gram
            toe per 23 liter (geeft 50&ndash;100 mg/L calcium). Verhoogt droogheid in rode wijn
          </li>
          <li>
            <strong>Stap 3 &ndash; Gistvoeding:</strong> Fermaid-K of DAP volgens de doseringsinstructie
            van de fabrikant. Toevoegen bij het pitchen van de gist en bij 1/3 gisting (Brix)
          </li>
          <li>
            <strong>Stap 4 &ndash; pH-controle:</strong> meet de pH van de most voor gisting
            (ideaal 3,2&ndash;3,6 voor wijnmost). Bij te hoge pH: voeg wijnzuur toe (tartaarzuur).
            Water-pH is minder relevant dan most-pH door de buffercapaciteit van zuren in concentraat
          </li>
          <li>
            <strong>Alternatief:</strong> gebruik 15&ndash;18 liter osmosewater en vul aan met
            5&ndash;8 liter leidingwater voor de basismineralen, zonder afzonderlijke remineralisatie.
            Dit is de eenvoudigste aanpak voor beginners
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Thuiswijn kits en osmosewater: aanbevelingen per merk
        </h2>
        <p className="text-gray-700 mb-4">
          De meeste wijnkits (Winexpert, Beaverdale, LD Carlson) zijn geformuleerd voor gebruik
          met gemiddeld leidingwater. Bij gebruik van puur osmosewater zijn de volgende
          aanpassingen aanbevolen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            Voeg altijd gistvoeding toe bij het pitchen (DAP of Fermaid-K, meegeleverd of
            apart verkrijgbaar bij brouwwinkel)
          </li>
          <li>
            Voeg basismineralen toe (magnesiumsulfaat en calciumsulfaat) zoals beschreven
            in het stappenplan hierboven
          </li>
          <li>
            Meet pH na oplossen van het concentraat en pas aan indien nodig. Kits zijn
            voorgezuurd maar reageren soms anders op nul-TDS water
          </li>
          <li>
            Houd de gisttemperatuur stabiel (18&ndash;24 graden voor de meeste rode en witte
            wijngisten) -- dit is belangrijker dan watersamenstelling voor een succesvol
            fermentatieproces
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor meer informatie over osmosewater en andere toepassingen, bekijk onze pagina
          over{' '}
          <Link href="/osmose-water/remineralisatie" className="text-[#005F8A] underline">remineralisatie van osmosewater</Link>{' '}
          en onze vergelijking van{' '}
          <Link href="/osmose-water/vs-mineraalwater" className="text-[#005F8A] underline">osmosewater versus mineraalwater</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over osmosewater en wijn
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
          <Link href="/osmose-water" className="text-[#005F8A] underline">osmose water uitleg</Link>,{' '}
          <Link href="/osmose-water/remineralisatie" className="text-[#005F8A] underline">remineralisatie osmosewater</Link>,{' '}
          <Link href="/waterfilter/chloor-verwijderen" className="text-[#005F8A] underline">chloor verwijderen uit water</Link> en{' '}
          <Link href="/osmose-water/smaak" className="text-[#005F8A] underline">smaak van osmosewater</Link>.
        </p>
      </main>
    </>
  );
}
