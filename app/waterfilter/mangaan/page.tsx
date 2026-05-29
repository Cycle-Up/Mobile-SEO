import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Mangaan in water: gevaren, herkenning en de beste waterfilters',
  description: 'Mangaan in water: zwarte vlekken, donker slijm en neurologische risico\'s. Welk waterfilter verwijdert mangaan het best? Greensand, birm en osmose vergeleken',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/mangaan' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is de WHO-grenswaarde voor mangaan in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De WHO hanteert twee grenswaarden voor mangaan. De gezondheidskundige provisorische richtwaarde is 0,4 mg/L. De esthetische richtwaarde (smaak, kleur, vlekken) is 0,1 mg/L. Recente onderzoeken suggereren dat chronische blootstelling boven 0,05 mg/L neurologische effecten kan geven, met name bij kinderen. De EU-drinkwaternorm is 0,05 mg/L.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe herken ik mangaan in mijn water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mangaan geeft specifieke kenmerken: zwart of donkerbruin slijm in de toiletpot, waterleidingen en douchekoppen; zwarte of donkergrijze vlekken op sanitair (donkerder dan ijzervlekken); zwart bezinksel in de waterkoker; een metaalachtige of bittere smaak. Let op: mangaanvlekken zijn hardnekkiger dan ijzervlekken en laten zich moeilijker verwijderen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen mangaan en ijzer in water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IJzer geeft oranje-bruine vlekken en roestkleuring; mangaan geeft zwarte of donkergrijze vlekken. Beide komen samen voor in grondwater. Mangaanvlekken zijn doorgaans moeilijker te verwijderen dan ijzervlekken. Voor de wateranalyse moet u beide stoffen apart testen. Een gecombineerd mangaan-ijzerfilter (greensand of mangaanzeoliet) behandelt beide tegelijkertijd.',
      },
    },
    {
      '@type': 'Question',
      name: 'In welke Nederlandse regio\'s komt mangaan voor in grondwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Verhoogd mangaan in grondwater komt het meest voor in gebieden met zandige bodem en zuurstofarme grondlagen: Gelderland (met name de Gelderse Vallei), Overijssel (Salland, Twente), Drenthe en delen van Noord-Brabant. Ook oudere gemeentelijke distributienetten in sommige steden kunnen mangaanafzettingen in leidingen hebben. Privéputten in de genoemde regio\'s hebben het grootste risico.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is mangaan in drinkwater gevaarlijk voor kinderen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recent onderzoek toont aan dat chronische blootstelling aan mangaan boven 0,05 mg/L bij jonge kinderen geassocieerd is met verlaagd IQ en gedragsproblemen. Kinderen nemen verhoudingsgewijs meer mangaan op dan volwassenen. Bij privéputten in risicogebieden met jonge kinderen wordt wateranalyse en filtering dringend aanbevolen. Zuigelingen die flesvoeding op mangaanrijk water krijgen lopen het grootste risico.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk waterfilter verwijdert mangaan het best?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meest effectieve filters voor mangaan zijn: (1) Greensand-filter — oxideert Mn²⁺ katalytisch en filtert de vlokken, tot 99% verwijdering; (2) Birm-filter — geschikt als ijzer aanwezig is, minder effectief bij hoog mangaan alleen; (3) Osmosefilter — verwijdert 90–95% van opgelost Mn²⁺, ideaal voor keukenwater; (4) KMnO₄-regeneratie (kaliumpermanganaat) voor de zwaarste gevallen. Greensand is de standaardkeuze voor putwater met hoog mangaan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is mijn gemeente verantwoordelijk voor mangaan in kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor gemeentelijk leidingwater is het drinkwaterbedrijf verantwoordelijk voor naleving van de EU-norm (0,05 mg/L). Meld bruine of zwarte verkleuring bij uw drinkwaterbedrijf — zij zijn verplicht te onderzoeken en actie te ondernemen. Bij een privéput bent u zelf verantwoordelijk voor de waterkwaliteit. Mangaan in uw eigen leidingen (distributienetten in de woning) valt onder uw eigen verantwoordelijkheid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer is een osmosefilter de beste keuze bij mangaan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een osmosefilter is de beste keuze bij mangaan als: (1) u naast mangaan ook andere verontreinigingen heeft (ijzer, nitraat, PFAS); (2) het mangaangehalte laag tot matig is (<1 mg/L); (3) u alleen drinkwater en kookwater wilt zuiveren (geen hele-huis-oplossing nodig). Voor hoge mangaanconcentraties (&gt;1 mg/L) is een greensand-voorfilter nodig vóór de osmose, anders raakt het membraan snel vervuild.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Mangaan in water: gevaren, herkenning en de beste waterfilters',
  description: 'Mangaan in water: zwarte vlekken, donker slijm en neurologische risico\'s bij kinderen. Welk waterfilter verwijdert mangaan het best in Nederland?',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  url: 'https://waterfilterplatform.nl/waterfilter/mangaan',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterMangaanPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          articleSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Mangaan', item: 'https://waterfilterplatform.nl/waterfilter/mangaan' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterfilter" className="hover:underline">Waterfilter</a> &rsaquo;{' '}
          <span>Mangaan</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Mangaan in water: gevaren, herkenning en de beste waterfilters
        </h1>

        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#003F5C] mb-1">Kort antwoord</p>
          <p className="text-gray-700 text-sm">
            Zwarte vlekken, donker slijm in leidingen en een bittere smaak wijzen op mangaan. Bij chronische blootstelling boven 0,05 mg/L zijn er neurologische risico&apos;s — zeker voor kinderen. Een greensand-filter of osmosefilter verwijdert mangaan effectief. Privéputten in Gelderland, Overijssel en Drenthe hebben het grootste risico.
          </p>
        </div>

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is mangaan en waar komt het vandaan?
        </h2>
        <p className="text-gray-700 mb-4">
          Mangaan is een van nature voorkomend mineraal dat in de aardkorst aanwezig is. Net als ijzer — maar secundair in voorkomen — lost mangaan op in zuurstofarme grondwaterlagen. In Nederland komt mangaan in grondwater met name voor in:
        </p>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Zandige grondlagen (privéputten)</h3>
            <p className="text-gray-700 text-sm">
              In de zuurstofarme diepere grondlagen van Gelderland, Overijssel (Salland, Twente) en Drenthe lost mangaan op uit mangaanoxiden in de bodem. Concentraties kunnen 0,5–3 mg/L bedragen — ver boven de EU-norm van 0,05 mg/L. Privéputbezitters in deze regio&apos;s hebben zonder wateranalyse geen zekerheid over de mangaanconcentratie.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Gemeentelijke distributienetten (oude leidingen)</h3>
            <p className="text-gray-700 text-sm">
              In sommige gemeenten, met name in Gelderland en Overijssel, hebben distributienetwerken historische mangaanafzettingen. Bij verhoogde doorstroming of drukvariaties kunnen deze afzettingen loslaten en zwarte vlokken geven. Dit is een leidingprobleem dat bij het drinkwaterbedrijf gemeld moet worden.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Industriële verontreiniging</h3>
            <p className="text-gray-700 text-sm">
              Bij staal- en mangaanverwerkende industrie kan mangaan in het grondwater terechtkomen. Dit is in Nederland een minder frequent probleem dan de geogene (bodemkundige) oorzaak.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Herkenning: zwarte vlekken en donker slijm
        </h2>
        <p className="text-gray-700 mb-4">
          Mangaan in water is visueel anders dan ijzer. De herkenningspunten zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Zwart of donkerbruin slijm</strong> in de toiletpot, op douchekoppen en in de waterkoker</li>
          <li><strong>Zwarte strepen of vlekken</strong> op wit sanitair — hardnekkiger dan oranje ijzervlekken</li>
          <li><strong>Zwart bezinksel</strong> op de bodem van de waterkoker of een kan water</li>
          <li><strong>Metaalachtige, bittere of inktachtige smaak</strong> bij hogere concentraties</li>
          <li><strong>Zwart slijm in de spoelbak</strong> van wasmachine en vaatwasser</li>
        </ul>
        <p className="text-gray-700 mb-4">
          <strong>Mangaan versus ijzer:</strong> IJzervlekken zijn oranje-bruin; mangaanvlekken zijn donkergrijs tot zwart. Beide stoffen komen vaak samen voor in grondwater. Bij twijfel: laat het water professioneel analyseren — een colorimetrische test voor mangaan (€20–35) of een volledig laboratoriumonderzoek (€80–150).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidseffecten: WHO-normen en neurologisch risico
        </h2>
        <p className="text-gray-700 mb-4">
          De WHO-richtwaarden voor mangaan zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>0,4 mg/L</strong> — provisorische gezondheidskundige richtwaarde (volwassenen)</li>
          <li><strong>0,1 mg/L</strong> — esthetische richtwaarde (smaak, kleur, vlekken)</li>
          <li><strong>EU-norm: 0,05 mg/L</strong> — de wettelijk geldende drinkwaternorm in Nederland</li>
        </ul>
        <p className="text-gray-700 mb-4">
          <strong>Neurologische effecten bij chronische blootstelling:</strong> Recent epidemiologisch onderzoek heeft zorgen gewekt over mangaan bij concentraties boven 0,05 mg/L. Kinderen zijn het meest kwetsbaar: studies associëren chronische blootstelling met een verlaagd IQ, verminderde aandacht en gedragsproblemen. Mangaan hoopt op in de hersenen bij langdurige inname.
        </p>
        <p className="text-gray-700 mb-6">
          Bij zuigelingen die flesvoeding op mangaanrijk putwater krijgen, is het risico het grootst. Mangaanconcentraties boven 0,3 mg/L worden door de WHO ongeschikt geacht voor bereiding van babyvoeding.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filteropties voor mangaan
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Greensand-filter</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Beste keuze voor hoog Mn²⁺</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Greensand (mangaanoxide-gecoat zand) oxideert opgelost mangaan (Mn²⁺) katalytisch naar mangaandioxide (MnO₂) en filtert de neergeslagen deeltjes. Effectief voor concentraties tot 3 mg/L. Regeneratie met kaliumpermanganaat (KMnO₄) houdt het medium actief. Moderne systemen gebruiken alternatieve oxidatiemiddelen (chlorine dioxide, luchtinjectie) voor KMnO₄-vrije regeneratie.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Mn²⁺: ✓ 95–99%</span>
              <span>IJzer ook: ✓</span>
              <span>Kosten: €600–1.500 (installatie)</span>
              <span>Onderhoud: terugspoelen + regeneratie</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Birm-filter (combinatie Mn + Fe)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Birm (een mangaanoxide-gecoat aluminium silicaat) werkt goed als katalytisch oxidatiemedium voor mangaan én ijzer tegelijk. Vereist een pH van 6,8–8,5 en voldoende opgelost zuurstof. Minder geschikt voor hoge mangaanconcentraties alleen — combineert goed met aëratietrap.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Mn²⁺: ✓ 85–95%</span>
              <span>Fe²⁺: ✓</span>
              <span>Kosten: €400–1.200</span>
              <span>Onderhoud: terugspoelen</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Omgekeerde osmose (RO)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Beste voor keuken + combinatieproblemen</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Een osmosefilter verwijdert opgelost Mn²⁺ voor 90–95% via het semipermeabele membraan. Ideaal als naast mangaan ook nitraat, ijzer, PFAS of andere stoffen aanwezig zijn. Bij hogere mangaanconcentraties (&gt;0,5 mg/L) is een sedimentprefilter of greensand-voorfilter noodzakelijk om het membraan te beschermen.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Mn²⁺: ✓ 90–95%</span>
              <span>Kosten: €300–800</span>
              <span>Onderhoud: jaarlijks patroon + membraan</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Sedimentfilter (alleen deeltjes)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Verwijdert uitgevlokd mangaan (MnO₂-deeltjes) als het water al voorgezuiverd is. Werkt <em>niet</em> voor opgelost Mn²⁺. Nuttig als nafilter na een greensand-systeem of als het probleem bestaat uit afzettingen in leidingen.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Mn²⁺ opgelost: ✗</span>
              <span>Mn-deeltjes: ✓</span>
              <span>Kosten: €20–60/jaar</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: mangaanfilters
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Mn²⁺ verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Onderhoud</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Opmerkingen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Greensand</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">95–99%</td>
                <td className="border border-gray-300 px-3 py-2">€600–1.500</td>
                <td className="border border-gray-300 px-3 py-2">Terugspoelen + regeneratie</td>
                <td className="border border-gray-300 px-3 py-2">Standaard voor hoog Mn, ook Fe</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Birm</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">85–95%</td>
                <td className="border border-gray-300 px-3 py-2">€400–1.200</td>
                <td className="border border-gray-300 px-3 py-2">Terugspoelen</td>
                <td className="border border-gray-300 px-3 py-2">Goed bij combinatie Mn + Fe</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Osmosefilter</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">90–95%</td>
                <td className="border border-gray-300 px-3 py-2">€300–800</td>
                <td className="border border-gray-300 px-3 py-2">Jaarlijks patronen</td>
                <td className="border border-gray-300 px-3 py-2">Ideaal keukenwater, prefilter nodig bij hoog Mn</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Sedimentfilter</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0% (opgelost)</td>
                <td className="border border-gray-300 px-3 py-2">€20–60/jaar</td>
                <td className="border border-gray-300 px-3 py-2">Maandelijks patroon</td>
                <td className="border border-gray-300 px-3 py-2">Alleen voor Mn-deeltjes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gemeente vs. privéput: wie is verantwoordelijk?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor gemeentelijk leidingwater is het drinkwaterbedrijf verantwoordelijk voor naleving van de EU-norm (0,05 mg/L). Ziet u zwarte vlokken of verkleuring bij leidingwater, meld dit bij uw drinkwaterbedrijf — zij zijn verplicht te onderzoeken.
        </p>
        <p className="text-gray-700 mb-4">
          Bij een <strong>privéput</strong> bent u volledig zelf verantwoordelijk voor de waterkwaliteit. De overheid verplicht private putgebruikers niet tot jaarlijkse analyse, maar het RIVM adviseert dit sterk — zeker voor mangaan en ijzer in risicogebieden zoals Gelderland en Overijssel. Meer informatie over putwater en verplichtingen vindt u op onze pagina over{' '}
          <a href="/putwater" className="text-[#005F8A] underline">putwater en privébronnen</a>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Mangaan en ijzer combineren: wanneer osmose het beste is
        </h2>
        <p className="text-gray-700 mb-4">
          Putwater in Gelderland en Overijssel bevat vaak <em>zowel</em> mangaan als ijzer. Bij deze combinatie zijn er twee benaderingen:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Greensand/birm-filter als hele-huis-filter:</strong> Verwijdert beide stoffen uit al het water. Geschikt als concentraties hoog zijn of waterverbruik voor wassen, douchen, etc. relevant is.</li>
          <li><strong>Osmosefilter voor drinkwater en koken:</strong> Als de concentraties laag tot matig zijn en u alleen keukenwater wilt zuiveren. Een goede prefilter (sediment + eventueel oxidatie) beschermt het membraan.</li>
        </ol>
        <p className="text-gray-700 mb-6">
          Voor een volledige vergelijking van filtertypen, zie ook{' '}
          <a href="/waterfilter/ijzer" className="text-[#005F8A] underline">ijzer in water filteren</a> en{' '}
          <a href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</a>.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/stoffen-in-drinkwater/zware-metalen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Zware metalen in drinkwater</h3>
            <p className="text-sm text-gray-600">Overzicht van alle zware metalen die in drinkwater kunnen voorkomen.</p>
          </a>
          <a href="/waterfilter/ijzer" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">IJzer in water filteren</h3>
            <p className="text-sm text-gray-600">Alles over ijzer in grondwater en de beste filters voor ijzerverwijdering.</p>
          </a>
          <a href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose uitleg</h3>
            <p className="text-sm text-gray-600">Hoe werkt omgekeerde osmose en wanneer is het de beste keuze?</p>
          </a>
          <a href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen Nederland</h3>
            <p className="text-sm text-gray-600">Actueel overzicht van EU- en Nederlandse normen voor drinkwaterkwaliteit.</p>
          </a>
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
          <a href="/waterfilter/ijzer" className="text-[#005F8A] underline">ijzer in water filteren</a>,{' '}
          <a href="/putwater" className="text-[#005F8A] underline">putwater testen en zuiveren</a> en{' '}
          <a href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose waterfilter</a>.
        </p>
      </main>
    </>
  );
}
