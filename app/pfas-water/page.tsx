import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'PFAS in drinkwater: risico\'s, normen en hoe te filteren (2026)',
  description:
    'PFAS in Nederlands drinkwater: wat zijn PFAS, EU-norm 0,10 µg/L, risicogebieden (Dordrecht, Schiphol), gezondheidsrisico\'s, welke filters PFAS verwijderen en vergelijking per methode.',
  alternates: { canonical: 'https://waterfilterplatform.nl/pfas-water' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat zijn PFAS en waarom zijn ze gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PFAS (per- en polyfluoralkylstoffen) zijn een groep van meer dan 4.700 synthetische chemische stoffen met een extreem stabiele koolstof-fluorbinding. Daardoor breken ze niet af in het milieu of in het menselijk lichaam — vandaar de naam "forever chemicals". PFAS hopen zich op in bloed, lever en moedermelk. Ze zijn in verband gebracht met schildklierproblemen, verminderde immuniteit, verhoogde cholesterol en verhoogd risico op bepaalde kankersoorten bij langdurige blootstelling aan hoge concentraties.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke PFAS-norm geldt in Nederland in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sinds 2026 geldt de EU-drinkwaterrichtlijn met een norm van 0,10 µg/L voor de som van 20 PFAS-verbindingen (de PFAS-20 parameter). Voor de vier meest schadelijke PFAS (PFOS, PFOA, PFNA en PFHxS samen) geldt een aparte norm van 0,05 µg/L. Nederlandse drinkwaterbedrijven zijn wettelijk verplicht hieraan te voldoen. De meeste regio\'s voldoen hieraan; bij overschrijding moeten drinkwaterbedrijven actie ondernemen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke gebieden in Nederland hebben verhoogde PFAS in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Risicogebieden met historisch verhoogde PFAS: omgeving Dordrecht/Papendrecht (Chemours/DuPont PFOA-uitstoot), omgeving Schiphol (PFAS-houdend blusschuim bij brandoefeningen), militaire vliegbases zoals Leeuwarden, Volkel en Eindhoven, industriezones in Noord-Brabant en Zeeland. Buiten deze gebieden voldoet leidingwater in de meeste regio\'s aan de EU-norm. Raadpleeg het jaarverslag van jouw drinkwaterbedrijf of de RIVM-wateratlas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk waterfilter verwijdert PFAS het beste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Omgekeerde osmose (RO) is de meest effectieve methode: 95–99% verwijdering van zowel lange- als kortketenige PFAS. Nanofiltration verwijdert 90%+. Actief koolblokfilter verwijdert 80–97% van langketenige PFAS maar is minder effectief voor kortketens. Filterkannen (Brita-type) zijn onvoldoende voor PFAS. UV-lampen hebben geen effect op PFAS.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik mij zorgen maken over PFAS in mijn kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste Nederlandse gemeenten voldoet kraanwater aan de EU-PFAS-normen. Controleer het jaarlijkse drinkwaterrapport van jouw drinkwaterbedrijf (gratis opvraagbaar of online). Woon je in een risicogebied (Dordrecht, omgeving Schiphol, nabij vliegbases) of gebruik je putwater? Dan is extra voorzichtigheid en filtering aanbevolen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoelang gaat een actief koolfilter mee voor PFAS-verwijdering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Actief kool raakt verzadigd. Bij normaal Nederlands leidingwater met lage PFAS-concentraties: 6–12 maanden. In risicogebieden met verhoogde PFAS: 3–6 maanden vervangen. Een osmosemembraan is stabieler: vervanging elke 2–3 jaar is voldoende. Overschrijd nooit de aanbevolen vervangingsdatum — een verzadigd koolfilter kan PFAS terugstoten in het water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert koken PFAS uit water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Koken heeft geen effect op PFAS en maakt de situatie bij langdurig koken zelfs slechter: water verdampt, PFAS blijft achter en de concentratie in het resterende water stijgt. Alleen mechanische filtratie (osmose, nanofiltration) of adsorptie (actief kool) verwijdert PFAS effectief.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zit PFAS ook in bronwater en flessenwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PFAS is aangetoond in diverse Europese bronwaters en flessenwateren, zij het doorgaans op lagere niveaus dan verhoogd leidingwater in risicogebieden. Flessenwater uit diepe bronnen met beperkte atmosferische blootstelling bevat minder PFAS. Echter: herhaaldelijk gebruik van plastic flessen brengt andere chemische risico\'s mee (microplastics, BPA). Een goed osmosefilter thuis is de duurzaamste oplossing.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: "PFAS in drinkwater: risico's, normen en hoe te filteren (2026)",
  description:
    "PFAS in Nederlands drinkwater: wat zijn PFAS, EU-norm, risicogebieden, gezondheidsrisico's en welke filters PFAS verwijderen.",
  datePublished: '2026-04-01',
  dateModified: '2026-04-01',
  url: 'https://waterfilterplatform.nl/pfas-water',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function PfasWaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'PFAS in drinkwater', item: 'https://waterfilterplatform.nl/pfas-water' },
            ],
          },
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <span>PFAS in drinkwater</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          PFAS in drinkwater: risico&apos;s, normen en hoe te filteren (2026)
        </h1>

        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-gray-700 text-sm font-medium">
            <strong>Samenvatting:</strong> PFAS (&ldquo;forever chemicals&rdquo;) zijn meer dan 4.700 synthetische stoffen die zich ophopen in het lichaam en milieu. In Nederland gelden strenge EU-normen (0,10 µg/L som-20 PFAS) voor drinkwater. Omgekeerde osmose is de meest effectieve manier om PFAS uit drinkwater te verwijderen (95–99%).
          </p>
        </div>

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat zijn PFAS?
        </h2>
        <p className="text-gray-700 mb-4">
          PFAS staat voor per- en polyfluoralkylstoffen — een verzamelnaam voor meer dan 4.700 synthetische chemische verbindingen. De bekendste zijn PFOS (perfluoroctaansulfonzuur) en PFOA (perfluoroctaanzuur), maar ook GenX-stoffen, PFNA en PFHxS behoren tot de familie.
        </p>
        <p className="text-gray-700 mb-4">
          De koolstof-fluorbinding in PFAS is de sterkste binding in de organische chemie. Daardoor worden PFAS niet afgebroken door zonlicht, hitte of biologische processen. Ze stapelen zich op in de bodem, het grondwater, het oppervlaktewater en het menselijk lichaam — vandaar de naam &ldquo;forever chemicals&rdquo;.
        </p>
        <p className="text-gray-700 mb-6">
          PFAS zijn decennialang verwerkt in anti-aanbaklagen (Teflon), impregneersprays, brandweerscbuim (AFFF), voedselprikkagen, cosmetica en industriële processen. De uitstoot en het gebruik zijn inmiddels sterk beperkt, maar de al uitgestoten stoffen blijven aanwezig in het milieu.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          PFAS in Nederlands drinkwater: hoe is het zover gekomen?
        </h2>
        <p className="text-gray-700 mb-4">
          Nederland kent een specifieke PFAS-geschiedenis door de aanwezigheid van grote industriële bronnen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Chemours/DuPont in Dordrecht:</strong> De voormalige DuPont-fabriek (nu Chemours) heeft decennialang PFOA uitgestoten in de lucht en het water. De omgeving van Dordrecht en Papendrecht heeft aantoonbaar verhoogde PFAS-waarden in bodem, oppervlaktewater en grondwater.</li>
          <li><strong>Blusschuim op militaire bases en vliegvelden:</strong> PFAS-houdend AFFF-blusschuim (aqueous film-forming foam) werd standaard gebruikt bij brandoefeningen op vliegvelden en defensieterreinen. Schiphol en militaire bases zoals Leeuwarden, Volkel en Eindhoven zijn bekende bronnen.</li>
          <li><strong>Industriezones:</strong> Noord-Brabant, Zeeland en omgeving Rotterdam hebben concentraties van fluorchemische industrie die bijdragen aan regionale PFAS-belasting.</li>
          <li><strong>Atmosferische depositie:</strong> PFAS verspreidt zich ook via de lucht en slaat neer via regen, zelfs ver van de bron. Regenwater in heel Nederland bevat meetbare hoeveelheden PFAS.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsrisico&apos;s van PFAS
        </h2>
        <p className="text-gray-700 mb-4">
          PFAS hopen zich op in bloed, lever, nieren en moedermelk. De belangrijkste gezondheidseffecten bij langdurige blootstelling aan verhoogde concentraties zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Verstoring van de schildklierfunctie</li>
          <li>Verminderde werking van het immuunsysteem (minder antilichaamrespons op vaccins)</li>
          <li>Verhoogd cholesterolgehalte in het bloed</li>
          <li>Verhoogd risico op nierkanker en testiskanker bij hoge doses (PFOS/PFOA)</li>
          <li>Reproductieve effecten: verlaagd geboortegewicht, verminderde vruchtbaarheid</li>
          <li>PFOA is geclassificeerd als &ldquo;mogelijk kankerverwekkend voor mensen&rdquo; door het IARC (WHO)</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Belangrijk: bij de huidige normen voor drinkwater zijn de risico&apos;s voor de gezondheid beperkt. Het risico is het grootst bij jarenlange blootstelling aan concentraties ruim boven de norm, of bij gebruik van sterk verontreinigd putwater in risicogebieden.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Risicogebieden in Nederland
        </h2>
        <p className="text-gray-700 mb-4">
          Op basis van RIVM-monitoringsdata zijn de volgende gebieden als verhoogd risico geïdentificeerd:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Dordrecht/Papendrecht/Sliedrecht:</strong> Historische PFOA-uitstoot door Chemours. Verhoogde bloedwaarden bij bewoners vastgesteld door RIVM.</li>
          <li><strong>Noord-Brabant (omgeving industrieterreinen en vliegbases):</strong> Volkel, Woensdrecht, Tilburg.</li>
          <li><strong>Zeeland (omgeving Vlissingen-Oost industrieterrein):</strong> Dow Chemical en andere fluorchemische producenten.</li>
          <li><strong>Groningen (nabij industrieterreinen):</strong> Chemische industrie in het Chemiepark Delfzijl.</li>
          <li><strong>Regio Schiphol:</strong> PFAS-houdend blusschuim uit jarenlange brandoefeningen.</li>
          <li><strong>Algemeen putwater in risicogebieden:</strong> Particuliere putten zijn niet beschermd door drinkwaterzuivering en kunnen verhoogde PFAS bevatten.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filters vergeleken: PFAS-verwijdering
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtermethode</th>
                <th className="border border-gray-300 px-3 py-2 text-left">PFAS-reductie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten/jaar</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Opmerking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">95–99%</td>
                <td className="border border-gray-300 px-3 py-2">€50–120</td>
                <td className="border border-gray-300 px-3 py-2">Meest effectief, incl. kortketens</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Nanofiltration (NF)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">90–99%</td>
                <td className="border border-gray-300 px-3 py-2">€100–300</td>
                <td className="border border-gray-300 px-3 py-2">Semi-professioneel, hoge flow</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief kool (blokfilter)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">80–97%</td>
                <td className="border border-gray-300 px-3 py-2">€30–80</td>
                <td className="border border-gray-300 px-3 py-2">Langketens beter dan kortketens</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief kool (GAC granulaat)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">70–90%</td>
                <td className="border border-gray-300 px-3 py-2">€20–60</td>
                <td className="border border-gray-300 px-3 py-2">Minder effectief dan blokfilter</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Filterkraan (Brita-type)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Beperkt</td>
                <td className="border border-gray-300 px-3 py-2">€50–100</td>
                <td className="border border-gray-300 px-3 py-2">Niet ontworpen voor PFAS</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">UV-lamp</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0%</td>
                <td className="border border-gray-300 px-3 py-2">€30–60</td>
                <td className="border border-gray-300 px-3 py-2">Geen effect op chemische stoffen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer moet ik actie ondernemen?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor de meeste Nederlanders is het drinkwater veilig wat PFAS betreft. Neem actie als:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Jij woont in een risicogebied (zie lijst hierboven) en gebruik je een <a href="/putwater" className="text-[#005F8A] underline">privéput of bronwater</a></li>
          <li>Het jaarverslag van jouw drinkwaterbedrijf verhoogde PFAS-waarden meldt</li>
          <li>Er zijn kleine kinderen of zwangere vrouwen in het huishouden (voorzorgsprincipe)</li>
          <li>Je wil zekerheid onafhankelijk van waterbedrijf-rapportages</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Bekijk ook de uitgebreide informatie over <a href="/waterfilter/soorten" className="text-[#005F8A] underline">alle soorten waterfilters</a> om de beste keuze voor jouw situatie te maken. Een <a href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerd osmosefilter</a> pakt niet alleen PFAS aan, maar verwijdert tegelijk ook lood, nitraat en andere verontreinigingen.
        </p>

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

        <CTABanner context="osmose" />

        <p className="text-gray-600 text-sm mt-6">
          Meer lezen: <a href="/lood-water" className="text-[#005F8A] underline">lood in kraanwater</a>, <a href="/putwater" className="text-[#005F8A] underline">putwater filteren</a> en <a href="/drinkwater" className="text-[#005F8A] underline">drinkwaterkwaliteit in Nederland</a>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="/pfas-waterfilter" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">PFAS waterfilter</p>
              <p className="text-sm text-gray-500">Welk filter verwijdert PFAS effectief?</p>
            </a>
            <a href="/stoffen-in-drinkwater/pfas-overzicht" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">PFAS overzicht stoffen</p>
              <p className="text-sm text-gray-500">Alle PFAS-verbindingen in drinkwater</p>
            </a>
            <a href="/drinkwaternormen/pfas" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">PFAS drinkwaternormen</p>
              <p className="text-sm text-gray-500">Wettelijke normen voor PFAS in drinkwater</p>
            </a>
            <a href="/keuzehulp/pfas-lood" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Keuzehulp PFAS en lood</p>
              <p className="text-sm text-gray-500">Welk filter past bij jouw situatie?</p>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
