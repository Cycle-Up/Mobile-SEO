import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Drinkwaterkwaliteit Europa: vergelijking van EU-landen',
  description:
    'Drinkwaterkwaliteit verschilt enorm per Europees land. Nederland en Duitsland scoren uitstekend, terwijl Oost-Europese landen vaker normen overschrijden. Vergelijking van alle EU-landen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterkwaliteit/europa' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'In welke EU-landen kun je veilig kraanwater drinken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste West- en Noord-Europese landen is kraanwater veilig te drinken: Nederland, Duitsland, Oostenrijk, Denemarken, Finland, Zweden, Noorwegen, Zwitserland, Belgie, Luxemburg, Ierland en Frankrijk (buiten bepaalde plattelandsgebieden). In Midden-Europa zijn Polen, Tsjechie en de Baltische staten in stedelijke gebieden veilig. Wees voorzichtiger in Hongarije (arseen), Roemenie en Bulgarije (platteland). Op sommige Griekse eilanden is kraanwater niet geschikt voor consumptie vanwege desalinatieproblemen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom is de drinkwaterkwaliteit zo verschillend binnen Europa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De verschillen in drinkwaterkwaliteit binnen Europa worden bepaald door vier factoren: (1) de kwaliteit van de waterbron (schoon bergwater versus vervuilde rivieren); (2) de ouderdom en staat van de waterinfrastructuur (Oost-Europa heeft veel verouderde leidingen met hoog loodgehalte); (3) de investeringscapaciteit van waterbedrijven en overheden; (4) de handhaving van EU-regelgeving, die in sommige lidstaten achterblijft. Klimaatverandering versterkt de problemen in het zuiden door droogte en verzilting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke EU-landen overschrijden de EU drinkwaternormen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hongarije heeft structurele overschrijdingen van de arseen-norm in grondwatergebieden, met name op het platteland. Roemenie en Bulgarije rapporteren regelmatig overschrijdingen van bacteriologische normen en nitraatnormen in kleine, decentrale watervoorzieningssystemen. Op sommige Griekse eilanden overschrijden desalinatieplanten tijdelijk de zouttoleranties. De Europese Commissie heeft inbreukprocedures lopen tegen meerdere lidstaten voor structurele normoverschrijdingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is PFAS in drinkwater een Europees probleem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, PFAS-verontreiniging in drinkwater is een grensoverschrijdend Europees probleem. Hotspots zijn: het Rijngebied (Nederland, Duitsland, Zwitserland), het Scheldegebied (Belgie, Nederland), de Italiaanse Po-vlakte (nabij 3M-fabriek Spinetta Marengo), de regio rond Tarragona in Spanje, en de Stockholm-regio in Zweden. De nieuwe EU Drinkwaterrichtlijn 2020 heeft voor het eerst een PFAS-norm gesteld (sum-4 max 0,05 microgram/L), maar handhaving verschilt per land.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Europees kraanwater strenger gereguleerd dan in de VS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Op pesticiden is de EU aanzienlijk strenger: de EU hanteert een maximale waarde van 0,1 microgram per liter per afzonderlijke pesticide stof, terwijl de VS individuele normen per stof hanteert die vaak hoger liggen. Op PFAS is de EU na 2023 ook strenger geworden. De VS heeft echter strengere normen voor bepaalde desinfectieproducten. Over het geheel genomen is de EU op de breedte van gereguleerde stoffen strenger dan de VS.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom is water in Noord-Europa schoner dan in Zuid-Europa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Noord-Europees water is doorgaans schoner door een combinatie van factoren: grotere neerslaghoeveelheden zorgen voor verdunning van verontreinigingen; minder intensieve landbouw met minder pesticiden en nitraat; beter ontwikkelde waterinfrastructuur met hogere investeringen; en van nature schonere waterbronnen (bergwater, glaciaalwater). Zuid-Europa kampt met droogte, hogere verdamping die concentraties verhoogt, intensievere landbouw in drogere zones, en op eilanden afhankelijkheid van desalinatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de strengste drinkwaternormen ter wereld?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Australie en Nederland hebben enkele van de strengste drinkwaternormen ter wereld voor pesticiden en PFAS. Australie heeft als een van de eerste landen een comprehensive PFAS-norm ingevoerd. Zwitserland, hoewel geen EU-lid, hanteert de EU-normen en voegt er vaak eigen strengere normen aan toe. Japan heeft strenge normen voor organische microverontreinigingen. De WHO-richtlijnen vormen de internationale referentie, maar nationale normen zijn in bepaalde categorieen strenger dan de WHO-aanbevelingen.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Drinkwaterkwaliteit Europa: vergelijking van EU-landen',
  description:
    'Drinkwaterkwaliteit verschilt enorm per Europees land. Nederland en Duitsland scoren uitstekend, terwijl Oost-Europese landen vaker normen overschrijden.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterkwaliteit/europa',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterkwaliteitEuropaPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterkwaliteit', item: 'https://waterfilterplatform.nl/waterkwaliteit' },
              { '@type': 'ListItem', position: 3, name: 'Drinkwaterkwaliteit Europa', item: 'https://waterfilterplatform.nl/waterkwaliteit/europa' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterkwaliteit" className="hover:underline">Waterkwaliteit</Link> &rsaquo;{' '}
          <span>Drinkwaterkwaliteit Europa</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Drinkwaterkwaliteit Europa: vergelijking van EU-landen
        </h1>

        <QuickAnswer answer="De EU Drinkwaterrichtlijn geldt voor alle 27 lidstaten, maar implementatie verschilt sterk. Nederland, Duitsland en Oostenrijk scoren het best. Hongarije, Roemenie en Bulgarije kennen structurele normproblemen. PFAS is een grensoverschrijdend probleem in het Rijn- en Scheldegebied en de Italiaanse Po-vlakte." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De EU Drinkwaterrichtlijn: een gemeenschappelijk kader
        </h2>
        <p className="text-gray-700 mb-4">
          De Europese Drinkwaterrichtlijn (2020/2184) legt minimumnormen vast die gelden voor alle 27 EU-lidstaten. Elke lidstaat kan strengere nationale normen instellen, maar mag niet onder de EU-minimumnormen zakken. De richtlijn dekt meer dan 50 parameters, van bacterien tot pesticiden en PFAS.
        </p>
        <p className="text-gray-700 mb-6">
          In de praktijk zijn er echter grote verschillen tussen lidstaten in implementatie, handhavingscapaciteit en investeringsniveau in waterinfrastructuur. Het gevolg: in landen als Nederland en Duitsland wordt de letter en geest van de richtlijn strikt nageleefd, terwijl in andere lidstaten normoverschrijdingen structureel voorkomen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Top 5 best scorende landen in Europa
        </h2>
        <p className="text-gray-700 mb-4">
          Op basis van WHO- en EEA-data over drinkwaterkwaliteitscompliance zijn dit de best scorende Europese landen:
        </p>
        <ol className="space-y-4 mb-6">
          <li className="border border-gray-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="bg-[#003F5C] text-white text-sm font-bold px-2.5 py-1 rounded-full shrink-0">#1</span>
              <div>
                <div className="font-semibold text-[#003F5C]">Nederland</div>
                <p className="text-sm text-gray-700 mt-1">
                  &gt;99,9% compliance met alle EU-normen. Geavanceerde zuiveringstechnieken, strenge handhaving door ILT en RIVM, en hoge investeringen in waterinfrastructuur. Eerste land in Europa met een volledig geimplementeerde PFAS-monitoringsstrategie.
                </p>
              </div>
            </div>
          </li>
          <li className="border border-gray-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="bg-[#003F5C] text-white text-sm font-bold px-2.5 py-1 rounded-full shrink-0">#2</span>
              <div>
                <div className="font-semibold text-[#003F5C]">Duitsland</div>
                <p className="text-sm text-gray-700 mt-1">
                  Uitstekende kwaliteit, met de strengste interpretatie van EU-normen. Circa 5.000 regionale waterbedrijven zorgen voor decentrale maar hoge kwaliteitsstandaarden. Bijzonder streng op pesticiden en organische microverontreinigingen.
                </p>
              </div>
            </div>
          </li>
          <li className="border border-gray-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="bg-[#003F5C] text-white text-sm font-bold px-2.5 py-1 rounded-full shrink-0">#3</span>
              <div>
                <div className="font-semibold text-[#003F5C]">Oostenrijk</div>
                <p className="text-sm text-gray-700 mt-1">
                  Bergbronwater van de Alpen vereist minimale behandeling. Meer dan 90% van het Oostenrijkse drinkwater komt uit grondwater en bergbronnen met van nature uitstekende kwaliteit. Zeer lage concentraties verontreinigingen door geringe industrie nabij waterbronnen.
                </p>
              </div>
            </div>
          </li>
          <li className="border border-gray-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="bg-[#003F5C] text-white text-sm font-bold px-2.5 py-1 rounded-full shrink-0">#4</span>
              <div>
                <div className="font-semibold text-[#003F5C]">Denemarken</div>
                <p className="text-sm text-gray-700 mt-1">
                  Grondwatergedomineerd systeem met laag contaminatieniveau. Denemarken heeft als beleid geen oppervlaktewater te gebruiken en vertrouwt volledig op grondwater, dat wordt gewonnen uit diepe, goed beschermde aquifers. Lage concentraties pesticiden en industriele stoffen.
                </p>
              </div>
            </div>
          </li>
          <li className="border border-gray-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="bg-[#003F5C] text-white text-sm font-bold px-2.5 py-1 rounded-full shrink-0">#5</span>
              <div>
                <div className="font-semibold text-[#003F5C]">Finland</div>
                <p className="text-sm text-gray-700 mt-1">
                  Schoonste oppervlaktewater van Europa dankzij uitgestrekte onbewoonde natuur, geringe industrie nabij waterbronnen, en lage bevolkingsdichtheid. Meer dan 60.000 meren dienen als waterreservoir met uitstekende basiskwaliteit.
                </p>
              </div>
            </div>
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Landen met aandachtspunten
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Land</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Probleem</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Hongarije</td>
                <td className="border border-gray-300 px-3 py-2">Arseen boven EU-norm (grondwater)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Onder verbetering</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-semibold">Roemenie</td>
                <td className="border border-gray-300 px-3 py-2">Nitraat, bacteriologische kwaliteit platteland</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Structureel probleem</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Bulgarije</td>
                <td className="border border-gray-300 px-3 py-2">Verouderde infrastructuur, loodleidingen</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Investeringen lopend</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-semibold">Italie (Zuid)</td>
                <td className="border border-gray-300 px-3 py-2">Droogte, verzilting, microplastics kust</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Regionaal probleem</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Griekenland (eilanden)</td>
                <td className="border border-gray-300 px-3 py-2">Desalinatieplanten, variabele kwaliteit</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Toeristisch seizoen probleem</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kraanwater drinken als toerist: een praktische gids
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="font-semibold text-green-700 mb-2">Veilig</div>
            <p className="text-sm text-gray-700">Nederland, Duitsland, Oostenrijk, Denemarken, Finland, Zweden, Noorwegen, Zwitserland, Belgie, Ierland, Luxemburg</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <div className="font-semibold text-yellow-700 mb-2">Voorzichtig (stad vs platteland)</div>
            <p className="text-sm text-gray-700">Hongarije, Polen (grote steden OK), Tsjechie, Slovakije, Baltische staten, Spanje (regionaal), Italie (regionaal)</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="font-semibold text-red-700 mb-2">Niet aanbevolen</div>
            <p className="text-sm text-gray-700">Roemenie (platteland), Bulgarije (platteland), sommige Griekse eilanden, decentrale systemen in Oost-Europa</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Europa versus de VS versus Azie: normen vergeleken
        </h2>
        <p className="text-gray-700 mb-4">
          De EU hanteert op pesticiden aanzienlijk strengere normen dan de VS. De Europese maximale waarde voor een enkele pesticidestof is 0,1 &micro;g/L, ongeacht de toxiciteit van de stof. In de VS wordt per stof een risicogebaseerde norm vastgesteld, wat betekent dat voor sommige stoffen hogere concentraties zijn toegestaan.
        </p>
        <p className="text-gray-700 mb-6">
          Na de invoering van de EU Drinkwaterrichtlijn 2020 is de EU ook strenger op PFAS. De Amerikaanse EPA heeft pas in 2024 voor het eerst bindende PFAS-normen gesteld voor drinkwater. Japan hanteert vergelijkbaar strenge normen als de EU voor organische microverontreinigingen en is bijzonder streng op arseen. Australie loopt voorop met PFAS-regulering.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          PFAS in Europa: een grensoverschrijdend probleem
        </h2>
        <p className="text-gray-700 mb-4">
          PFAS-verontreiniging respecteert geen landsgrenzen. De grootste Europese PFAS-hotspots in drinkwaterrelevante gebieden zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Rijngebied</strong> (Nederland, Duitsland, Zwitserland) &mdash; industriele lozingen stroomopwaarts beinvloeden drinkwaterkwaliteit stroomafwaarts</li>
          <li><strong>Scheldegebied</strong> (Belgie, Nederland) &mdash; de regio Antwerpen-Zwijndrecht herbergt een ernstige PFAS-verontreiniging door 3M-fabriek; Chemours aan de Dordtse Kil raakt ook het Schelde-Rijn-systeem</li>
          <li><strong>Italiaanse Po-vlakte</strong> &mdash; de 3M-fabriek in Spinetta Marengo heeft het grondwater in een straal van tientallen kilometers verontreinigd; drinkwaterbronnen worden gemonitord</li>
          <li><strong>Tarragona, Spanje</strong> &mdash; chemische industrie in het havengebied heeft PFAS-verontreiniging veroorzaakt in het Ebro-stroomgebied</li>
          <li><strong>Stockholm-regio, Zweden</strong> &mdash; voormalige militaire vliegbases met PFAS-houdend blusschuim hebben grondwater beinvloed</li>
        </ul>

        <p className="text-gray-700 mb-6">
          Wilt u meer weten over de Nederlandse situatie? Lees ons gedetailleerd overzicht van{' '}
          <Link href="/waterkwaliteit/nederland" className="text-[#005F8A] underline">drinkwaterkwaliteit in Nederland</Link>.
          Voor de effectiefste thuisoplossing tegen PFAS, bekijk onze pagina over{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose waterfilters</Link>.
          Meer over verontreinigingen algemeen leest u op{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over drinkwaterkwaliteit in Europa</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>
      </main>
    </>
  );
}
