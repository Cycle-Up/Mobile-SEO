import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterzuivering: hoe wordt drinkwater gemaakt in Nederland?',
  description: 'Nederland heeft een van de beste drinkwaterzuiveringen ter wereld. Ontdek hoe grondwater en oppervlaktewater worden omgezet naar drinkwater in 6-10.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterzuivering' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe wordt drinkwater gemaakt in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nederlands drinkwater wordt gemaakt uit grondwater (60%) en oppervlaktewater (40%). Grondwater wordt gewonnen via pompputten en gezuiverd via beluchting, zandfiltratie, UV/ozon, actief koolfiltratie en desinfectie. Oppervlaktewater vereist meer stappen: coagulatie, flocculatie, sedimentatie, ozon-oxidatie en membraanfiltratie komen daarbij. Het resultaat is een van de schoonste drinkwaters ter wereld.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen grondwater en oppervlaktewater als drinkwaterbron?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grondwater is regenwater dat door bodemlagen is gezijpeld en gefilterd. Het is van nature microbiologisch schoner, maar bevat meer ijzer, mangaan en soms arseen. Oppervlaktewater (Maas, Rijn) is minder stabiel van kwaliteit, bevat meer pesticiden, geneesmiddelenresten en PFAS, maar is overvloediger beschikbaar. Oppervlaktewaterzuivering vereist meer stappen en is duurder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel stappen zitten er in drinkwaterzuivering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grondwaterzuivering telt typisch 6-8 stappen: winning, beluchting, snelfiltratie, langzame zandfiltratie, UV/ozon, actief koolfiltratie, desinfectie en distributie. Oppervlaktewaterzuivering vereist 8-10 stappen door de hogere verontreinigingsgraad: daar komen coagulatie, flocculatie, sedimentatie en eventueel membraanfiltratie bij.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wordt PFAS verwijderd bij waterzuivering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bestaande waterzuivering verwijdert PFAS onvolledig. Standaard zandfiltratie en chloordesinfectie zijn niet effectief tegen PFAS. Granulaire actieve kool (GAC) en geavanceerde ozon-oxidatie helpen wel, maar worden pas geleidelijk opgeschaald bij Nederlandse waterbedrijven. Voor gebieden met verhoogde PFAS-concentraties investeren waterbedrijven als PWN en Waternet in extra GAC-filterstappen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom is kraanwater in Nederland zo goedkoop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nederlands kraanwater kost circa 1,50-2,00 euro per kubieke meter (1.000 liter). Dit is een van de laagste tarieven in Europa. Redenen: gunstige grondwatervoorraden, hoogwaardige infrastructuur, grootschalige productie door 10 regionale waterbedrijven zonder winstoogmerk, en strikte overheidsregulering. De prijs omvat niet alleen zuivering maar ook transport, onderhoud en waterwinning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke waterbedrijven zuiveren oppervlaktewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evides en Waterleiding Maatschappij Limburg (WML) gebruiken Maaswater. PWN en Waternet Amsterdam gebruiken Rijn- en IJmeerwater. Dunea en PWN maken gebruik van duinwaterzuivering waarbij oppervlaktewater via duinen wordt gefilterd. Vitens en Brabant Water werken hoofdzakelijk met grondwater. Elk bedrijf heeft eigen zuiveringsprocessen afgestemd op hun waterbron.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is drinkwater altijd gechlooreerd?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niet altijd, maar residuele desinfectie is gebruikelijk. Nederlandse waterbedrijven voegen kleine hoeveelheden chloor of chloraminen toe om bacteriegroei in het distributienet te voorkomen. Bij gebruik van UV-desinfectie als eindstap kan chloor worden geminimaliseerd. De chloorconcentratie in Nederlands drinkwater is doorgaans lager dan in veel andere landen, wat de smaak ten goede komt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen industriele waterzuivering en een thuisfilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Industriele waterzuivering door waterbedrijven verwijdert het overgrote deel van verontreinigingen en levert gecertificeerd veilig drinkwater. Een thuisfilter (actieve kool, osmose, UV) biedt aanvullende bescherming voor stoffen die industriele zuivering niet volledig verwijdert: PFAS, lood uit huisleidingen, chloorresiduen en smaakstoffen. Een thuisfilter is aanvullend, niet vervangend voor de industriele zuivering.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterzuivering: hoe wordt drinkwater gemaakt in Nederland?',
  description: 'Nederland heeft een van de beste drinkwaterzuiveringen ter wereld. Ontdek hoe grondwater en oppervlaktewater worden omgezet naar drinkwater in 6-10.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterzuivering',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterzuiveringPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterzuivering', item: 'https://waterfilterplatform.nl/waterzuivering' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <span>Waterzuivering</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterzuivering: hoe wordt drinkwater gemaakt in Nederland?
          </h1>
          <p className="text-gray-700 text-lg">
            Nederland heeft een van de beste drinkwaterkwaliteiten ter wereld. Tien regionale waterbedrijven
            zuiveren jaarlijks meer dan 1,1 miljard kubieke meter drinkwater uit grondwater en oppervlaktewater.
            Hoe werkt dat zuiveringsproces precies?
          </p>
        </div>

        <QuickAnswer answer="Nederlands drinkwater komt voor 60% uit grondwater en 40% uit oppervlaktewater (Maas, Rijn). Grondwater doorloopt 6-8 zuiveringsstappen; oppervlaktewater vereist 8-10 stappen door hogere verontreinigingsgraad. Kosten: circa 1,50-2,00 euro per kubieke meter, goedkoopste in Europa. PFAS wordt nog onvolledig verwijderd." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Twee hoofdbronnen: grondwater en oppervlaktewater
        </h2>
        <p className="text-gray-700 mb-4">
          Nederland beschikt over twee fundamenteel verschillende drinkwaterbronnen, elk met eigen kenmerken en zuiveringsprocessen:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <h3 className="font-bold text-[#003F5C] mb-2">Grondwater (60%)</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Regenwater dat door bodemlagen sijpelt</li>
              <li>&bull; Gewonnen via pompputten, 20-80 m diepte</li>
              <li>&bull; Van nature microbiologisch schoon</li>
              <li>&bull; Hoger in ijzer en mangaan</li>
              <li>&bull; Stabielere kwaliteit het hele jaar</li>
              <li>&bull; Vitens, Brabant Water, WML, WMD</li>
            </ul>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <h3 className="font-bold text-[#003F5C] mb-2">Oppervlaktewater (40%)</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Maas, Rijn, IJmeer, duinen</li>
              <li>&bull; Meer variatie in kwaliteit per seizoen</li>
              <li>&bull; Hogere concentraties pesticiden en PFAS</li>
              <li>&bull; Vereist meer zuiveringsstappen</li>
              <li>&bull; Overvloediger beschikbaar</li>
              <li>&bull; Evides, PWN, Waternet, Dunea</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-700 mb-6">
          Er zijn <strong>10 regionale waterbedrijven</strong> actief in Nederland, elk met hun eigen bronnen en
          zuiveringsprocessen. Meer informatie over de kwaliteit per regio vindt u op de pagina{' '}
          <Link href="/waterkwaliteit/nederland" className="text-[#005F8A] underline">waterkwaliteit per gemeente</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Grondwaterzuivering stap voor stap
        </h2>
        <p className="text-gray-700 mb-4">
          Grondwater is van nature al gefilterd door de bodem, maar bevat nog stoffen die verwijderd moeten worden
          voor veilig drinkwater. De zuivering verloopt in de volgende stappen:
        </p>
        <ol className="space-y-3 mb-6">
          {[
            { n: 1, title: 'Onttrekking', desc: 'Pompputten tot 20-80 meter diepte in beschermde waterwingebieden. Geen landbouw of industrie toegestaan in de nabijheid.' },
            { n: 2, title: 'Beluchting', desc: 'Water wordt gesproeid of door trappen geleid. IJzer (Fe2+) oxideert tot Fe3+ en slaat neer. CO2 en H2S verdampen, pH stijgt.' },
            { n: 3, title: 'Snelfiltratie', desc: 'Zandfilter van 60-90 cm dik verwijdert neergeslagen ijzer- en mangaandeeltjes.' },
            { n: 4, title: 'Langzame zandfiltratie', desc: 'Biologisch actieve laag (Schmutzdecke) breekt bacterien en organische stof af via biologische processen.' },
            { n: 5, title: 'UV/ozon-desinfectie', desc: 'UV-straling en/of ozon vernietigen resterende micro-organismen en oxideren organische verbindingen.' },
            { n: 6, title: 'Actieve koolfiltratie', desc: 'Granulaire actieve kool adsorbeert pesticiden, organische verbindingen en geur- en smaakstoffen.' },
            { n: 7, title: 'Residuele desinfectie', desc: 'Kleine hoeveelheid chloor of chloramine voorkomt bacteriegroei in het distributienet.' },
            { n: 8, title: 'Distributie', desc: 'Via een netwerk van leidingen en reservoirs bereikt het water uw kraan.' },
          ].map(({ n, title, desc }) => (
            <li key={n} className="flex gap-3 items-start">
              <span className="bg-[#003F5C] text-white text-sm font-bold px-2.5 py-1 rounded-full shrink-0">{n}</span>
              <div>
                <span className="font-semibold text-[#003F5C]">{title}: </span>
                <span className="text-gray-700 text-sm">{desc}</span>
              </div>
            </li>
          ))}
        </ol>

        <p className="text-gray-700 mb-4">
          Meer detail over het grondwaterzuiveringsproces vindt u op de pagina{' '}
          <Link href="/waterzuivering/grondwater" className="text-[#005F8A] underline">grondwaterzuivering</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Oppervlaktewaterzuivering: meer stappen nodig
        </h2>
        <p className="text-gray-700 mb-4">
          Oppervlaktewater uit de Maas of Rijn is complexer van samenstelling dan grondwater. De hogere
          verontreinigingsgraad door industriele lozingen, landbouwafvoer en stedelijk rioolwater vraagt om
          aanvullende zuiveringsstappen:
        </p>
        <div className="bg-gray-50 rounded-xl p-5 mb-6">
          <p className="text-sm text-gray-700 font-semibold mb-2">Extra stappen bovenop grondwaterzuivering:</p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>&bull; <strong>Coagulatie:</strong> ijzersulfaat of aluminiumsulfaat laat kleine deeltjes samenklonteren</li>
            <li>&bull; <strong>Flocculatie:</strong> langzaam roeren laat vlokken groeien</li>
            <li>&bull; <strong>Sedimentatie:</strong> vlokken bezinken in 2-4 uur</li>
            <li>&bull; <strong>Membraanfiltratie:</strong> ultrafiltratie (0,02 micrometer) bij moderne installaties</li>
            <li>&bull; <strong>Ozon-oxidatie:</strong> krachtig oxidatiemiddel voor micro-organismen en organische stoffen</li>
            <li>&bull; <strong>Biologisch actief koolfiltratie (BAC):</strong> ozon-afbraakproducten worden biologisch verwijderd</li>
          </ul>
        </div>
        <p className="text-gray-700 mb-4">
          Lees meer over{' '}
          <Link href="/waterzuivering/oppervlaktewater" className="text-[#005F8A] underline">oppervlaktewaterzuivering</Link>{' '}
          inclusief de uitdagingen van PFAS in de Rijn en Maas.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kosten drinkwater in Nederland
        </h2>
        <p className="text-gray-700 mb-4">
          Nederland heeft een van de goedkoopste drinkwatertarieven van Europa: circa <strong>1,50-2,00 euro per
          kubieke meter</strong> (1.000 liter). Dit omvat de volledige keten van winning, zuivering, transport en
          distributie. Een gemiddeld huishouden betaalt jaarlijks circa 150-200 euro voor drinkwater.
        </p>
        <p className="text-gray-700 mb-4">
          Dit lage tarief is mogelijk door de combinatie van gunstige grondwatervoorraden, grootschalige productie
          zonder winstoogmerk, en een goed onderhouden infrastructuur. Waterbedrijven zijn publiek eigendom en
          vallen onder strikte overheidsregulering.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheid: bewust niet volledig onthard
        </h2>
        <p className="text-gray-700 mb-4">
          Drinkwater wordt in Nederland bewust niet volledig onthard. Een zekere mate van hardheid (calcium en
          magnesium) beschermt leidingen van binnenuit: een dunne kalklaag op de binnenwand voorkomt corrosie en
          uitloging van koper of lood. Waterbedrijven corrigeren de hardheid wanneer deze boven circa 25 graden
          Duits (&#176;dH) uitkomt, maar streven niet naar extreem zacht water.
        </p>
        <p className="text-gray-700 mb-4">
          Kijk op <Link href="/waterkwaliteit" className="text-[#005F8A] underline">waterkwaliteit</Link> voor de hardheid
          in uw regio.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De PFAS-uitdaging voor waterzuivering
        </h2>
        <p className="text-gray-700 mb-4">
          PFAS (poly- en perfluoralkylstoffen) vormen een groeiende uitdaging voor de drinkwaterproductie.
          Bestaande zuiveringsprocessen zijn niet ontworpen voor deze persistente stoffen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Standaard zandfiltratie verwijdert PFAS nauwelijks</li>
          <li>Chloordesinfectie is niet effectief tegen PFAS</li>
          <li>Granulaire actieve kool (GAC) adsorbeert PFAS gedeeltelijk (60-90%), afhankelijk van de stof</li>
          <li>Ozon-oxidatie in combinatie met GAC biedt de beste verwijdering bij industriele schaal</li>
        </ul>
        <p className="text-gray-700 mb-6">
          PWN en Waternet investeren meer dan 100 miljoen euro in extra GAC-filterstappen. Voor aanvullende
          thuisbescherming kunt u lezen over{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>{' '}
          en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Thuiszuivering als aanvulling
        </h2>
        <p className="text-gray-700 mb-4">
          Industriele waterzuivering stopt aan uw watermeter. Wat er daarna in uw huisleiding, kranen en boiler
          gebeurt, valt buiten de verantwoordelijkheid van het waterbedrijf. Thuiszuivering biedt aanvullende
          bescherming voor:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Lood uit leidingen in woningen gebouwd voor 1960</li>
          <li>Resterende PFAS die de industriele zuivering passeerde</li>
          <li>Chloorresiduen en smaakstoffen</li>
          <li>Nitraat in landbouwgebieden</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Meer over wanneer thuiszuivering zinvol is: zie <Link href="/waterzuivering/thuis" className="text-[#005F8A] underline">thuiszuivering</Link>.
        </p>

        <CTABanner context="osmose" />

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Filtertechnieken uitgelegd</p>
              <p className="text-sm text-gray-600">Alle zuiveringstechnologieen vergeleken: osmose, UV, actief kool en meer.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater</p>
              <p className="text-sm text-gray-600">PFAS, nitraat, lood en andere verontreinigingen die zuivering vereisen.</p>
            </Link>
            <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</p>
              <p className="text-sm text-gray-600">Wettelijke eisen voor drinkwaterkwaliteit na zuivering in Nederland.</p>
            </Link>
            <Link href="/waterfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Waterfilter vergelijken</p>
              <p className="text-sm text-gray-600">Welk filter past bij uw waterzuiveringsbehoefte: thuis of zakelijk?</p>
            </Link>
          </div>
        </section>

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over waterzuivering</h2>
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
          <Link href="/waterzuivering/grondwater" className="text-[#005F8A] underline">grondwaterzuivering</Link>,{' '}
          <Link href="/waterzuivering/oppervlaktewater" className="text-[#005F8A] underline">oppervlaktewaterzuivering</Link>,{' '}
          <Link href="/waterkwaliteit/nederland" className="text-[#005F8A] underline">waterkwaliteit per regio</Link> en{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>
      </main>
      {/* orphan-fix: meer in dit cluster */}
      <div className="max-w-3xl mx-auto px-4 pb-12">
        <section>
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Meer in dit cluster</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link key="/waterzuivering/stappen" href="/waterzuivering/stappen" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Stappen in drinkwaterzuivering</p>
              </Link>
          </div>
        </section>
      </div>
    </>
  );
}
