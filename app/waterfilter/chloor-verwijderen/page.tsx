import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Chloor verwijderen uit kraanwater: 5 effectieve methoden',
  description: 'Chloor uit kraanwater verwijderen: 5 methoden vergeleken — laten staan, koolstoffilter, filterkan, osmose en UV. Inclusief chloramine en THM-bijproducten.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/chloor-verwijderen' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Verdwijnt chloor als je water laat staan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vrij chloor (Cl₂ en hypochloriet) dissipeert grotendeels na 30–60 minuten in een open bak of karaf bij kamertemperatuur. Roer je het water even door, dan gaat het sneller. Chloramine verwijder je zo echter niet — daarvoor heb je een catalytisch koolfilter of osmosefilter nodig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk filter verwijdert chloor het meest effectief?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een geactiveerd koolfilter (GAC of CTO-blokfilter) verwijdert vrij chloor voor 95–99% binnen seconden. Osmosefilters verwijderen bovendien ook chloramine, THM\'s en andere desinfectiebijproducten. Voor de meest complete chloorverwijdering is een osmosefilter met koolprefilter de gouden standaard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een UV-lamp chloor uit water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. UV-lampen doden bacteriën en virussen door hun DNA te beschadigen, maar hebben geen chemisch effect op chloor of chloramine. UV is geen methode voor chloorverwijdering — dit is een veelvoorkomend misverstand. Gebruik koolstoffiltratie voor chloor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen chloor en chloramine verwijderen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vrij chloor is eenvoudig te verwijderen: laten staan, filterkan of koolfilter volstaan. Chloramine (chloor gebonden aan ammoniak) is stabieler en penetreert dieper. Gewone GAC-koolfilters zijn minder effectief; catalytische geactiveerde kool of een osmosefilter zijn noodzakelijk voor afdoende chloramineverwijdering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn trihalomethanen (THM\'s) en waarom zijn ze relevant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'THM\'s (trihalomethanen) zoals chloroform ontstaan wanneer chloor reageert met organisch materiaal in water. De EU-norm is 100 µg/L totaal-THM. Epidemiologisch onderzoek associeert langdurige blootstelling aan concentraties boven 70 µg/L met een verhoogd risico op blaaskanker. Nederlandse niveaus liggen doorgaans onder de norm. Osmosefilters verwijderen THM\'s effectief.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wordt chloor gebruikt als mijn waterregio chloramine gebruikt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Nederland gebruiken de meeste waterleidingbedrijven vrij chloor (natriumhypochloriet). Chloramine is zeldzamer maar wordt in sommige gebieden toegepast vanwege lagere THM-vorming. Controleer het jaarverslag van jouw waterleidingbedrijf of gebruik een testkit om te bepalen welke desinfectant in jouw regio wordt gebruikt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heeft chloor in kraanwater invloed op koffie en thee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Zelfs lage concentraties chloor (≥0,1 mg/L) beïnvloeden de smaak van koffie en thee negatief. Barista\'s en theefanaten gebruiken gefilterd of osmosewater voor de beste extractie. Koolstoffiltratie vóór het koffiezetapparaat verbetert de smaak merkbaar. Bij osmosewater is remineralisatie aan te raden voor een optimale smaak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is chloor in kraanwater slecht voor de huid bij eczeem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij gevoelige huid en huidaandoeningen zoals eczeem kan chloor irriterend werken, zowel via drinkwater als douchewater. Chloor tast de huidbarrière aan en kan jeuk en droogheid verergeren. Voor gevoelige groepen is een douche- of kraanfilter met koolstofpatroon aan te raden. Zie ook onze pagina over waterfilter voor gevoelige huid.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Chloor verwijderen uit kraanwater: 5 effectieve methoden',
  description: 'Chloor uit kraanwater verwijderen: 5 methoden vergeleken — laten staan, koolstoffilter, filterkan, osmose en UV.',
  datePublished: '2026-04-08',
  dateModified: '2026-04-08',
  url: 'https://waterfilterplatform.nl/waterfilter/chloor-verwijderen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function ChloorVerwijderenPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Chloor verwijderen', item: 'https://waterfilterplatform.nl/waterfilter/chloor-verwijderen' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterfilter" className="hover:underline">Waterfilter</a> &rsaquo;{' '}
          <span>Chloor verwijderen</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Chloor verwijderen uit kraanwater: 5 effectieve methoden
        </h1>

        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#003F5C] mb-1">Kort antwoord</p>
          <p className="text-gray-700 text-sm">
            Vrij chloor verdwijnt na 30–60 minuten laten staan; een koolstoffilter is de snelste en meest effectieve methode (95–99%). Chloramine vereist catalytische kool of osmose. UV-licht verwijdert géén chloor — dat is een hardnekkig misverstand.
          </p>
        </div>

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom gebruiken waterleidingbedrijven chloor?
        </h2>
        <p className="text-gray-700 mb-4">
          Chloor is het meest gebruikte desinfectiemiddel in drinkwaterbereiding wereldwijd. Waterleidingbedrijven voegen het toe om twee redenen: het doodt bacteriën en virussen in de zuiveringsinstallatie, én het zorgt voor een restdesinfectie in het leidingnet — ook wanneer water al bij u thuis door de leidingen stroomt. Zonder die restdesinfectie kunnen bacteriën zoals Legionella groeien in stilstaande leidingen.
        </p>
        <p className="text-gray-700 mb-4">
          De WHO stelt een maximale advieswaarde van 5 mg/L vrij chloor, maar in de praktijk werken Nederlandse waterbedrijven met aanzienlijk lagere concentraties: 0,1–0,3 mg/L vrij chloor aan de kraan. De EU-norm via het Drinkwaterbesluit bedraagt 0,3 mg/L. Meer achtergrond leest u op onze pagina over{' '}
          <a href="/drinkwater/chloor" className="text-[#005F8A] underline">chloor in drinkwater</a>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom wilt u chloor verwijderen?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Smaak en geur:</strong> Chloor heeft een karakteristieke zwemsmbadgeur die veel mensen onaangenaam vinden. De smaakdrempel ligt rond 0,2 mg/L.</li>
          <li><strong>Koken, koffie en thee:</strong> Chloor degradeert aromastoffen. Barista&rsquo;s en koks filteren consequent voor een betere smaak.</li>
          <li><strong>Gevoelige huid:</strong> Bij eczeem en droge huid kan chloor de huidbarrière aantasten en irritatie veroorzaken.</li>
          <li><strong>Desinfectiebijproducten (THM&rsquo;s):</strong> Chloor reageert met organisch materiaal tot trihalomethanen — verbindingen die op hoge niveaus geassocieerd zijn met gezondheidsrisico&rsquo;s.</li>
          <li><strong>Aquaria en huisdieren:</strong> Chloor is schadelijk voor vissen en andere waterdieren in aquaria.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          5 methoden om chloor te verwijderen — gerangschikt
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Laten staan (open karaf of bak)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Vrij chloor (Cl₂ en hypochlorieten) is vluchtig en dissipeert bij kamertemperatuur in een open bak binnen 30–60 minuten. Roer het water door of laat het op kamertemperatuur staan — de chloorconcentratie daalt snel. Bij koude temperaturen of een gesloten fles duurt het langer.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Nadeel:</strong> Werkt niet voor chloramine. Geeft geen bescherming tegen andere verontreinigingen. Niet praktisch voor grote hoeveelheden.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>Vrij chloor: ✓ (goed)</span>
              <span>Chloramine: ✗</span>
              <span>Kosten: €0</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Koolstoffilter (GAC of CTO-blokfilter)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Aanbevolen</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Geactiveerde kool adsorbeert chloor via Van der Waals-krachten. De enorme inwendige oppervlakte (1 gram kool heeft ~1.000 m² oppervlak) zorgt voor vrijwel volledige chloorverwijdering. GAC-granulaat heeft hogere doorstroomsnelheid; CTO-blokfilters geven betere verwijdering en filteren ook sediment en geuren. Vervang filters elke 3–6 maanden.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Catalytische kool</strong> (catalytic carbon) is gemodificeerd voor betere chloramineverwijdering en is de beste keuze wanneer uw waterleidingbedrijf chloramine gebruikt.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>Vrij chloor: ✓ 95–99%</span>
              <span>Chloramine: ± (catalytisch: ✓)</span>
              <span>Kosten: €15–50 filter</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Filterkan (Brita, Aquaphor)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Filterkansen bevatten een combinatie van ionenwisselaarhars en geactiveerde kool. Ze verwijderen chloor effectief (85–95%) en zijn laagdrempelig in gebruik. De filtercapaciteit is beperkt (doorgaans 100–300 liter per patroon) en de doorstroomsnelheid is laag.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Nadeel:</strong> Minder effectief voor chloramine dan een dedicated koolfilter. Hogere kosten per liter dan onderbouwfilters bij intensief gebruik.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>Vrij chloor: ✓ 85–95%</span>
              <span>Chloramine: ±</span>
              <span>Kosten: €20–40/jaar filterpatronen</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Omgekeerde osmose (RO)</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">Meest compleet</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Een osmosefilter verwijdert via het koolstof-voorfilter al het chloor en chloramine vóórdat het water het RO-membraan bereikt (membraan is gevoelig voor chloor). Het RO-membraan verwijdert vervolgens ook THM&rsquo;s, lood, PFAS, nitraat en andere verontreinigingen. Dit is de meest volledige oplossing voor wie ook desinfectiebijproducten wil verwijderen.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>Vrij chloor: ✓ 99%+</span>
              <span>Chloramine: ✓ (via koolprefilter)</span>
              <span>THM&rsquo;s: ✓</span>
              <span>Kosten: €300–800 aanschaf</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-gray-400 text-white text-xs font-bold px-2 py-1 rounded-full">5</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">UV-lamp</h3>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">Verwijdert geen chloor</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              UV-lampen zijn effectief tegen bacteriën en virussen, maar hebben géén effect op chemische verbindingen zoals chloor of chloramine. UV doodt micro-organismen door hun DNA te beschadigen — een zuiver biologisch mechanisme zonder invloed op opgeloste stoffen. Dit is een veelvoorkomend misverstand in marketingmateriaal.
            </p>
            <p className="text-gray-700 text-sm">
              UV is een nuttige aanvulling op een osmosesysteem (voor microbiologische veiligheid bij privéputten), maar nooit een vervanging voor chloorverwijdering.
            </p>
            <div className="flex gap-4 text-xs text-gray-500 mt-2">
              <span>Vrij chloor: ✗</span>
              <span>Chloramine: ✗</span>
              <span>Bacteriën/virussen: ✓</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: 5 methoden
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Vrij chloor</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Chloramine</th>
                <th className="border border-gray-300 px-3 py-2 text-left">THM&rsquo;s</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Snelheid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Laten staan</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ goed</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
                <td className="border border-gray-300 px-3 py-2">€0</td>
                <td className="border border-gray-300 px-3 py-2">30–60 min</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Koolstoffilter</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ 95–99%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">± (cat. kool: ✓)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">±</td>
                <td className="border border-gray-300 px-3 py-2">€15–50</td>
                <td className="border border-gray-300 px-3 py-2">Direct</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Filterkan</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ 85–95%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">±</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
                <td className="border border-gray-300 px-3 py-2">€20–40/jaar</td>
                <td className="border border-gray-300 px-3 py-2">Traag</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Osmosefilter</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ 99%+</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓</td>
                <td className="border border-gray-300 px-3 py-2">€300–800</td>
                <td className="border border-gray-300 px-3 py-2">Direct</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">UV-lamp</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
                <td className="border border-gray-300 px-3 py-2">€100–300</td>
                <td className="border border-gray-300 px-3 py-2">Direct</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Chloramine: moeilijker te verwijderen
        </h2>
        <p className="text-gray-700 mb-4">
          Sommige waterleidingbedrijven gebruiken chloramine (monochloramine, NH₂Cl) als alternatieve desinfectant. Chloramine vormt minder trihalomethanen dan vrij chloor en is stabieler in het leidingnet. Het heeft echter twee nadelen voor consumenten:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Chloramine dissipeert <em>niet</em> door laten staan — zelfs na 24 uur is de concentratie nauwelijks gedaald.</li>
          <li>Gewone GAC-koolfilters verwijderen chloramine minder efficiënt. De reactie is trager en vereist langere contacttijd.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          <strong>Oplossing:</strong> Catalytische geactiveerde kool (KDF-85 of catalytic carbon zoals Jacobi Aquasorb) is geoptimaliseerd voor chloramine. Een osmosefilter met koolstofprefilter verwijdert chloramine ook volledig.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Trihalomethanen (THM&rsquo;s) en desinfectiebijproducten
        </h2>
        <p className="text-gray-700 mb-4">
          Wanneer chloor reageert met natuurlijk organisch materiaal in water (humuszuren, fulvozuren), ontstaan desinfectiebijproducten (DBP&rsquo;s). De meest bekende zijn trihalomethanen (THM&rsquo;s) zoals chloroform (CHCl₃). De EU-norm is 100 µg/L totaal-THM.
        </p>
        <p className="text-gray-700 mb-4">
          Epidemiologisch onderzoek toont een associatie tussen langdurige blootstelling aan THM-concentraties boven 70 µg/L en blaaskanker. Nederlandse leidingwaterbedrijven handhaven niveaus ruim onder de norm. Wilt u alsnog de maximale zekerheid? Een osmosefilter verwijdert THM&rsquo;s effectief — koolstoffilters verwijderen ze deels.
        </p>

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
          Zie ook: <a href="/waterfilter/chloor" className="text-[#005F8A] underline">chloor uit drinkwater filteren</a> en <a href="/drinkwater/chloor" className="text-[#005F8A] underline">chloor in drinkwater — achtergrond en veiligheid</a>.
        </p>
      </main>
    </>
  );
}
