import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: "Koper in leidingwater: risico's van koperen leidingen en waterfilters",
  description:
    'Koper in leidingwater komt van koperen huisleidingen. EU-norm is 2 mg/L. Bij nieuw leidingwerk en zacht zuur water kan koper boven de norm uitkomen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/koper' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe komt koper in drinkwater terecht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Koper in drinkwater is bijna altijd afkomstig van koperen leidingen in de huisinstallatie, niet van het waterbedrijf. Bij contact met water lost een kleine hoeveelheid koper op via corrosie. Dit proces verloopt sneller bij zuur water (pH lager dan 7), zacht water met weinig bicarbonaat, warm water en stilstaand water na een nacht. Koperen leidingen werden in Nederland massaal gebruikt in woningen gebouwd van 1950 tot 1990 en zijn nog steeds gangbaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de EU-norm voor koper in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU-drinkwaternorm voor koper is 2 mg/L (Richtlijn 2020/2184). De WHO hanteert dezelfde gezondheidskundige richtwaarde. In de praktijk bevat leidingwater in de meeste Nederlandse woningen 0,01 tot 0,3 mg/L koper, ruimschoots onder de norm. Bij specifieke risicofactoren zoals nieuw gelegd koper, zuur water of het eerste water na een nacht stilstand kunnen piekconcentraties oplopen naar de norm.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is koper in drinkwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Koper is een essentieel sporenelement. Bij concentraties tot 1-2 mg/L zijn er voor gezonde volwassenen geen gezondheidseffecten. Acuut risico bij inname van meer dan 3-5 mg/L: misselijkheid, buikpijn en braken. Bij langdurige hoge inname kan lever- en nierschade optreden. Bijzondere risicogroepen: zuigelingen (lever niet volledig ontwikkeld voor koperverwerking), personen met de ziekte van Wilson en mensen met leverziekten. De dagelijkse behoefte voor een volwassene is 0,9 mg/dag via voeding en water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn zuigelingen extra gevoelig voor koper in water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. De lever van zuigelingen (0-12 maanden) is nog niet volledig in staat koper te verwerken en uit te scheiden. De WHO en EFSA bevelen aan om bij de bereiding van flesvoeding voor zuigelingen water te gebruiken met een kopergehalte lager dan 0,1 mg/L, ruim onder de drinkwaternorm van 2 mg/L. Osmosewater (koper onder 0,02 mg/L) is een veilige keuze voor flesvoeding. Gebruik nooit warm kraanwater rechtstreeks voor zuigelingenvoeding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe herken ik te veel koper in mijn drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Koper in drinkwater herkent u aan: groene of blauwgroene aanslag op kranen en armaturen; blauwgroene ringen of vlekken in badkuip, wasbak of toiletpot; groene vlekken in de wasserij; een metaalachtige of bittere smaak van het eerste water dat na een nacht stilstand uit de kraan komt. Blauw gekleurd water zelf is zeldzaam en treedt uitsluitend op bij extreme corrosie. Witte kalkafzetting wijst op calcium- en magnesiummineralen, niet op koper.',
      },
    },
    {
      '@type': 'Question',
      name: 'Helpt het om de kraan te laten lopen voor gebruik?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, dit is een gratis en effectieve preventieve maatregel. Laat de kraan 30 seconden tot 2 minuten doorlopen voordat u drinkwater afneemt na een nacht stilstand of langere afwezigheid. Het eerste water bevat de hoogste koperconcentraties vanuit de leidingwanden. Het weggelopen water kunt u opvangen voor planten of schoonmaak. Voor de bereiding van zuigelingenvoeding wordt altijd aanbevolen doorgelopen water te gebruiken en eventueel een osmosefilter toe te passen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een koolstoffilter koper uit drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Standaard actieve koolstoffilters zoals filterkannen en inline koolstoffilters zijn niet effectief voor koper of andere metaalionen. Actieve kool adsorbeert organische verbindingen, chloor, geur en smaak, maar metaalionen zoals koper (Cu2+) worden niet gebonden. Voor effectieve koperverwijdering zijn ionenwisseling of omgekeerde osmose de aangewezen methoden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe effectief is een osmosefilter voor koperverwijdering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een osmosefilter verwijdert 97 tot 99% van koper (Cu2+) uit drinkwater. Bij een inkomende concentratie van 0,3 mg/L daalt koper naar minder dan 0,01 mg/L in het gefilterde water, veilig voor alle risicogroepen inclusief zuigelingen. Osmose verwijdert naast koper ook lood, zink, cadmium, nitraat en PFAS. Zorg dat het osmosewater via een aparte osmosekraan wordt afgetapt en NIET door koperen leidingen wordt geleid, omdat osmosewater (pH 5-6) corrosiever is dan normaal leidingwater.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: "Koper in leidingwater: risico's van koperen leidingen en waterfilters",
  description:
    'Koper in leidingwater komt van koperen huisleidingen. EU-norm 2 mg/L. Bij nieuw leidingwerk en zacht zuur water kan koper boven de norm uitkomen.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/koper',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterKoperPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Koper in leidingwater', item: 'https://waterfilterplatform.nl/waterfilter/koper' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>Koper in leidingwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Koper in leidingwater: risico&apos;s van koperen leidingen en waterfilters
          </h1>
          <p className="text-[#005F8A] text-lg">
            Koper (Cu) zit niet in het water van het drinkwaterbedrijf, maar komt vrij uit koperen
            huisleidingen bij corrosie. Bij zacht, zuur water en na stilstand kan de concentratie
            oplopen. EU-norm: 2 mg/L. Zuigelingen en personen met de ziekte van Wilson zijn extra
            gevoelig. Een osmosefilter verwijdert 97&ndash;99% van koper.
          </p>
        </section>

        <QuickAnswer answer="Koper in leidingwater komt van koperen huisleidingen, niet van het waterbedrijf. EU-norm: 2 mg/L. Zacht zuur water en nieuw leidingwerk verhogen het risico. Zuigelingen extra gevoelig. Laat kraan 2 minuten lopen na stilstand. Osmosefilter verwijdert 97-99%. Koolstoffilter werkt niet voor metalen." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bron van koper in leidingwater: de huisinstallatie
        </h2>
        <p className="text-gray-700 mb-4">
          Een veelvoorkomend misverstand is dat koper in drinkwater afkomstig is van het
          drinkwaterbedrijf. Dit klopt niet: drinkwaterbedrijven leveren water met een koperconcentratie
          van praktisch nul. De bron zit in de <strong>koperen leidingen van de woninginstallatie</strong>.
        </p>
        <p className="text-gray-700 mb-4">
          Koperen leidingen werden in Nederland massaal toegepast in woningen gebouwd tussen 1950 en
          1990, maar zijn ook nu nog de standaard in nieuwbouw. Bij contact met water lost een kleine
          hoeveelheid koper op uit de leidingwand via het corrosieproces. De mate van corrosie hangt
          af van meerdere watereigenschappen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>pH van het water:</strong> zuur water (pH lager dan 7) is agressiever voor
            koper dan neutraal of basisch water. Bij een pH onder 6,5 kan de koperafgifte sterk toenemen
          </li>
          <li>
            <strong>Hardheid en bicarbonaat:</strong> zacht water met weinig bicarbonaat (HCO&#8323;&#8315;)
            beschermt de leidingen minder goed. Bicarbonaat vormt een beschermende kalklaag aan de
            binnenkant van koperleidingen; ontbreekt dit, dan is corrosie hoger
          </li>
          <li>
            <strong>Nieuw gelegd koper:</strong> verse koperleidingen geven de eerste weken tot maanden
            aanzienlijk meer koper af. Pas na de vorming van een stabiele koperoxidelaag neemt de afgifte sterk af
          </li>
          <li>
            <strong>Stilstaand water (stagnatie):</strong> het eerste water na een nacht heeft het
            langste contact gehad met de leidingwanden en heeft de hoogste koperconcentratie
          </li>
          <li>
            <strong>Warm water:</strong> warmte versnelt corrosieprocessen; gebruik nooit warm
            kraanwater rechtstreeks voor drinkdoeleinden of zuigelingenvoeding
          </li>
        </ul>

        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6 border-l-4 border-[#005F8A]">
          <p className="text-[#003F5C] font-semibold text-sm">
            Waarschuwing: Osmosewater door koperleidingen
          </p>
          <p className="text-gray-700 text-sm mt-1">
            Osmosewater heeft een lage pH (5&ndash;6) en vrijwel geen buffercapaciteit. Het is
            bijzonder corrosief voor koperleidingen. Laat osmosewater NOOIT door bestaande koperen
            leidingen lopen. Installeer altijd een aparte osmosekraan direct op het osmosesysteem.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm en gezondheidsrichtlijnen
        </h2>
        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
          <ul className="text-gray-700 text-sm space-y-2">
            <li><strong>EU-drinkwaternorm (2020/2184):</strong> maximaal 2 mg/L</li>
            <li><strong>WHO-gezondheidsrichtlijn:</strong> 2 mg/L</li>
            <li><strong>Gemiddeld NL kraanwater:</strong> 0,01&ndash;0,3 mg/L (ver onder de norm)</li>
            <li><strong>Aanbevolen voor zuigelingenvoeding (WHO/EFSA):</strong> &lt;0,1 mg/L</li>
            <li><strong>Na osmosefilter:</strong> typisch &lt;0,02 mg/L</li>
            <li><strong>Dagelijkse behoefte volwassene:</strong> 0,9 mg/dag (essentieel sporenelement)</li>
          </ul>
        </div>
        <p className="text-gray-700 mb-6">
          De norm van 2 mg/L geldt gemeten na 30 minuten stagnatie in de leidingen (het zogeheten
          stagnatiemonster). In de praktijk is de concentratie in doorgelopen water aanmerkelijk lager.
          Bij eigen waterputten of leidinginstallaties in industriegebieden is testen sterk aanbevolen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsrisico&apos;s van koper in drinkwater
        </h2>
        <p className="text-gray-700 mb-4">
          Koper is een essentieel sporenelement dat noodzakelijk is voor het menselijk lichaam.
          De aanbevolen dagelijkse inname voor volwassenen is 0,9 mg/dag. Problemen ontstaan pas
          bij aanzienlijk hogere concentraties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Acuut bij &gt;3&ndash;5 mg/L:</strong> misselijkheid, buikpijn, braken en diarree
            kort na inname. Herstelt snel na het stoppen van blootstelling
          </li>
          <li>
            <strong>Chronisch boven 2 mg/L:</strong> leverschade, nierschade bij jarenlange blootstelling
            boven de EU-norm; zeldzaam in Nederland
          </li>
          <li>
            <strong>Ziekte van Wilson:</strong> genetische stofwisselingsziekte waarbij het lichaam koper
            niet goed uitscheidt; elke extra koperbron is een risico voor deze patienten
          </li>
          <li>
            <strong>Zuigelingen (0&ndash;12 maanden):</strong> de lever is nog onvolgroeid voor kopermetabolisme;
            WHO en EFSA adviseren &lt;0,1 mg/L voor flesvoeding
          </li>
          <li>
            <strong>Kinderen algemeen:</strong> zijn extra gevoelig voor metaalblootstelling door
            lager lichaamsgewicht en hogere waterinname per kg lichaamsgewicht
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe koperprobleem herkennen?
        </h2>
        <p className="text-gray-700 mb-4">
          Er zijn enkele opvallende signalen die kunnen wijzen op een verhoogde koperconcentratie
          in uw leidingwater:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Groene of blauwgroene aanslag</strong> op kranen, douchekoppen en armaturen</li>
          <li><strong>Blauwgroene ringen of vlekken</strong> in badkuip, wasbak of toiletpot</li>
          <li><strong>Groene vlekken op wasgoed</strong> (zeldzaam, bij hoge concentratie)</li>
          <li><strong>Metaalachtige of bittere smaak</strong> van het eerste water na stilstand</li>
          <li><strong>Blauw gekleurd water</strong> zelf (zeldzaam; alleen bij extreme corrosie)</li>
        </ul>
        <p className="text-gray-700 mb-4">
          <strong>Let op:</strong> witte kalkringen zijn van calcium- en magnesiummineralen en hebben
          niets te maken met koper. Oranje-bruine verkleuringen wijzen op ijzer. Laat bij twijfel
          een laboratoriumtest uitvoeren. Een geaccrediteerd laboratorium zoals Kiwa, SGS Intron of
          Eurofins voert een koperanalyse uit voor circa 30&ndash;80 euro. Neem het stagnatiemonster
          (eerste liter na een nacht stilstand) voor de meest representatieve meting.
        </p>
        <p className="text-gray-700 mb-6">
          Meer informatie over alle verontreinigingen in leidingwater vindt u op onze pagina over{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filteroplossingen voor koper
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Omgekeerde osmose (RO)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Beste keuze</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link>{' '}
              verwijdert 97&ndash;99% van koper via het semipermeabele membraan. Bij een inkomende
              concentratie van 0,3 mg/L daalt koper naar minder dan 0,01 mg/L &mdash; veilig voor
              alle risicogroepen inclusief zuigelingen en patienten met de ziekte van Wilson. Tevens
              effectief voor lood, zink, cadmium, nitraat en PFAS. Installeer altijd een aparte
              osmosekraan; leid osmosewater NOOIT door koperleidingen.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Koper: 97&ndash;99%</span>
              <span>Lood: 97&ndash;99%</span>
              <span>Kosten: &euro;300&ndash;800</span>
              <span>Onderhoud: jaarlijks patronen + membraan</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Actief koolblokfilter (NSF 53-gecertificeerd)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Een NSF/ANSI 53-gecertificeerd koolblokfilter is specifiek getest voor zware
              metaalverwijdering en bereikt 85&ndash;95% koperreductie. Standaard koolstoffilters
              (NSF 42, gericht op chloor en geur) zijn <strong>niet</strong> effectief voor koper.
              Let altijd op het NSF 53-certificaat bij aanschaf voor koperverwijdering.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Koper: 85&ndash;95% (NSF 53)</span>
              <span>Kosten: &euro;80&ndash;200</span>
              <span>Onderhoud: filter elk half jaar vervangen</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Filterkan (Brita e.d.)</h3>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">Beperkte effectiviteit</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Standaard filterkansen zijn niet ontworpen voor effectieve verwijdering van zware
              metalen zoals koper. Ze verbeteren smaak en verwijderen chloor, maar bieden bij
              verhoogde koperconcentraties onvoldoende bescherming, zeker voor risicogroepen.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Koper: wisselend, beperkt</span>
              <span>Kosten: &euro;30&ndash;60 + jaarlijkse patronen</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: koperfilters
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Koperreductie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kosten</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Opmerkingen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Omgekeerde osmose</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">97&ndash;99%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300&ndash;800</td>
                <td className="border border-gray-300 px-3 py-2">Beste keuze; ook lood, zink, PFAS</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Koolblokfilter NSF 53</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">85&ndash;95%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;80&ndash;200</td>
                <td className="border border-gray-300 px-3 py-2">Alleen NSF 53, niet NSF 42</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Filterkan standaard</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Beperkt</td>
                <td className="border border-gray-300 px-3 py-2">&euro;30&ndash;60</td>
                <td className="border border-gray-300 px-3 py-2">Onvoldoende voor risicogroepen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Actief koolstoffilter (chloor/geur)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;20&ndash;60</td>
                <td className="border border-gray-300 px-3 py-2">Niet geschikt voor metalen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Permanente oplossing: leidingmateriaal vervangen
        </h2>
        <p className="text-gray-700 mb-4">
          De structurele oplossing voor koper in leidingwater is het vervangen van koperen leidingen
          door <strong>kunststofleidingen (PEX of PE)</strong> of <strong>roestvrijstalen leidingen</strong>.
          Deze materialen geven geen metalen af aan drinkwater en bieden ook betere isolatie (minder
          energieverlies bij warm water).
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>PEX-leidingen:</strong> flexibel, corrosiebestendig, breed toegepast in nieuwbouw</li>
          <li><strong>PE-HD leidingen:</strong> polyetheen; goede keuze voor koude waterleiding</li>
          <li><strong>RVS (roestvrijstaal):</strong> duurzaam en corrosievrij, maar hogere aanlegkosten</li>
          <li><strong>Kosten leidingrenovatie:</strong> gemiddeld 1.000&ndash;5.000 euro afhankelijk van
            de omvang en situatie (appartement vs. eengezinswoning)</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Als u uw water wilt laten testen voor en na een eventuele leidingrenovatie, bekijk dan onze
          pagina over{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteitstesten</Link>{' '}
          voor informatie over gecertificeerde laboratoria en bemonsteringsprotocollen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktische tips voor direct gebruik
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Spoel elke ochtend 30 seconden tot 2 minuten door</strong> voordat u drinkwater afneemt</li>
          <li><strong>Gebruik alleen koud kraanwater</strong> voor drinken en koken</li>
          <li><strong>Zuigelingenvoeding:</strong> gebruik osmosewater of NSF-53-gefilterd water</li>
          <li><strong>Na vakantie of langdurige afwezigheid:</strong> spoel alle kranen minimaal 5 minuten door</li>
          <li><strong>Nieuwbouw of renovatie:</strong> spoel de eerste weken intensief door; overweeg een tijdelijke filteroplossing</li>
          <li><strong>Laat water testen</strong> als u groene vlekken ziet of tot een risicogroep behoort</li>
        </ul>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over koper in leidingwater
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
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link> en{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteitstest</Link>.
        </p>
      </main>
    </>
  );
}
