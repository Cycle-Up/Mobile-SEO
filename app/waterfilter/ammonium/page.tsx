import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Ammonium in leidingwater: bronnen, normen en waterfilter',
  description:
    'Ammonium in leidingwater wijst op verontreiniging of rioollek. EU-norm is 0,5 mg/L. Zeoliet adsorbeert ammonium voor 80-98%. Omgekeerde osmose verwijdert.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/ammonium' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen ammonium en ammoniak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ammonium (NH4+) is de geioniseerde, wateroplosbare vorm van ammoniak (NH3). In water bij neutrale pH (6-8) overweegt ammonium. Bij hogere pH (boven 9) verschuift het chemisch evenwicht naar vrije ammoniak (NH3), die giftig is voor aquatisch leven. In leidingwater is ammoniak vrijwel altijd als ammonium aanwezig, niet als vrije ammoniak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de EU-norm voor ammonium in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU-drinkwaterrichtlijn 2020/2184 stelt ammonium als indicatorparameter op maximaal 0,5 mg/L. De WHO-richtwaarde voor ammonium is 1,5 mg/L (gebaseerd op geur en smaak, niet gezondheidseffecten). Nederlands leidingwater bevat normaliter waarden ver onder deze normen. Verhoogde ammoniumwaarden zijn een signaal van mogelijke rioollekkage of andere verontreiniging.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wijst ammonium in leidingwater op rioollekkage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, verhoogde ammoniumconcentraties in leidingwater kunnen duiden op fecale verontreiniging via rioollekkage. Ammonium is een afbraakproduct van ureum en organisch stikstof in menselijke en dierlijke uitwerpselen. Nederlandse drinkwaterbedrijven monitoren ammonium continu; bij verhoogde waarden worden onmiddellijk maatregelen genomen en wordt de bevolking geadviseerd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe effectief is zeoliet voor het verwijderen van ammonium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zeoliet (klinoptiloliet) verwijdert ammonium via ionenwisseling met een effectiviteit van 80-98%. Het NH4+-ion wordt uitgewisseld tegen natriumionen in het zeolietrooster. Zeoliet is regenereerbaar met een zoutzuuroplossing of zout-zuur-combinatie. Dit maakt zeoliet een kosteneffectieve langetermijnoplossing voor ammoniumverwijdering, met name in systemen die hoge concentraties verwerken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter ammonium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, omgekeerde osmose verwijdert 90-95% van ammonium (NH4+) uit water. NH4+ is een geladen ion dat niet door het semi-permeabele RO-membraan kan passeren. Voor maximale verwijdering is het van belang dat het water een pH heeft waarop ammonium in de geioniseerde NH4+-vorm aanwezig is (pH onder 8). Bij hoge pH zijn kleine hoeveelheden ongeladen NH3 aanwezig die iets makkelijker door het membraan gaan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de relatie tussen ammonium en chlooramine in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wanneer ammonium in contact komt met chloor (gebruikt als desinfectans), reageren beide stoffen tot chlooraminverbindingen. Chlooraminen zijn minder effectief als desinfectans dan vrij chloor en inactiveren pathogenen langzamer. In Nederland wordt voornamelijk vrij chloor gebruikt. Sommige watermaatschappijen in het buitenland doseren ammonium bewust om chlooraminen te vormen als stabieler desinfectans voor lange leidingnetwerken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik zelf ammonium testen in leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, ammonium kan thuis worden getest met aquarium-teststrips (NH3/NH4+ combinatietest) of druppeltestsets voor een nauwkeuriger resultaat. Aquariumstrips zijn beschikbaar bij dierenwinkels en online voor circa 5-10 euro per 25 strips. Voor betrouwbare resultaten in leidingwater is laboratoriumanalyse door een geaccrediteerd lab (Kiwa, Eurofins) aanbevolen. Verhoogde ammoniumwaarden in leidingwater moeten altijd worden gemeld bij uw drinkwaterbedrijf.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke filtermethoden verwijderen ammonium het meest effectief?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meest effectieve methoden voor ammoniumverwijdering zijn: (1) Zeoliet (klinoptiloliet) ionenwisseling: 80-98%; (2) Omgekeerde osmose: 90-95%; (3) Kationenwisselaar: 95%+; (4) Biologisch actief koolfilter met nitrificerende bacterien: zet ammonium om naar nitraat. Standaard actief koolfilters zijn niet effectief voor ammoniumverwijdering. De beste keuze hangt af van de concentratie, het watervolume en het budget.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Ammonium in leidingwater: bronnen, normen en waterfilter',
  description:
    'Ammonium in leidingwater wijst op verontreiniging of rioollek. EU-norm is 0,5 mg/L. Zeoliet adsorbeert ammonium voor 80-98%. Omgekeerde osmose verwijdert.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/ammonium',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterAmmoniumPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Ammonium in leidingwater', item: 'https://waterfilterplatform.nl/waterfilter/ammonium' },
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
          <span>Ammonium in leidingwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Ammonium in leidingwater: bronnen, normen en waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Ammonium (NH4+) in leidingwater kan wijzen op rioollekkage, landbouwverontreiniging of
            industriele lozingen. De EU-norm is 0,5 mg/L als indicatorparameter. Zeoliet en
            omgekeerde osmose zijn de meest effectieve filtermethoden voor ammoniumverwijdering.
          </p>
        </section>

        <QuickAnswer answer="Ammonium in leidingwater wijst op mogelijke verontreiniging. De EU-norm is 0,5 mg/L. Zeoliet verwijdert ammonium voor 80-98% via ionenwisseling. Een osmosefilter bereikt 90-95% verwijdering. Verhoogde waarden in leidingwater zijn altijd een signaal om uw drinkwaterbedrijf te informeren." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Ammonium vs ammoniak: het chemische onderscheid
        </h2>
        <p className="text-gray-700 mb-4">
          Ammonium (NH4+) en ammoniak (NH3) zijn twee vormen van dezelfde stikstofverbinding, maar
          met fundamenteel verschillende eigenschappen in water. <strong>Ammonium</strong> is de
          geioniseerde, positief geladen vorm die stabiel is in water bij neutrale pH (6-8).
          <strong> Ammoniak</strong> is de ongeladen gasvorm die in water opgelost kan zijn als
          vrije ammoniak.
        </p>
        <p className="text-gray-700 mb-4">
          Het chemisch evenwicht tussen beide vormen wordt bepaald door de pH:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Bij pH 6-8</strong> (neutraal water, normaal leidingwater): meer dan 99% is als
            ammonium (NH4+) aanwezig. Vrijwel geen vrije ammoniak
          </li>
          <li>
            <strong>Bij pH 9</strong>: verhouding verschuift, circa 50% ammoniak/50% ammonium
          </li>
          <li>
            <strong>Bij pH hoger dan 9</strong>: vrije ammoniak domineert. Vrije ammoniak is toxischer
            voor aquatisch leven en ruikt sterk naar ammonia
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          In drinkwater is ammonium vrijwel altijd als NH4+ aanwezig. Vrije ammoniak in leidingwater
          is uiterst zeldzaam en zou duiden op extreme pH-afwijkingen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bronnen van ammonium in leidingwater
        </h2>
        <p className="text-gray-700 mb-4">
          Ammonium in drinkwater kan meerdere oorsprongen hebben. De belangrijkste bronnen zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Landbouw:</strong> drijfmest en kunstmest (ammoniumnitraat, ureum) sijpelen door
            de bodem naar het grondwater. Nitrificatie en denitrificatie in de bodem produceren
            ammonium als tussenproduct. Dit is de grootste antropogene bron in Nederland, met name
            in intensieve veehouderijgebieden
          </li>
          <li>
            <strong>Rioollekkages:</strong> fecale verontreiniging via lekkende rioolbuizen is een
            directe bron van ammonium. Ureum in menselijke urine wordt snel afgebroken tot ammonium.
            Verhoogde ammoniumwaarden zijn daarom een indicatorparameter voor fecale verontreiniging
          </li>
          <li>
            <strong>Industriele lozingen:</strong> bepaalde industrietakken (chemie, levensmiddelen,
            papier) lozen stikstofhoudende afvalstromen. Hoewel streng gereguleerd, kunnen
            incidentele lozingen lokale verhogingen veroorzaken
          </li>
          <li>
            <strong>Natuurlijke bodemprocessen:</strong> in anaerobe (zuurstofloze) omstandigheden
            zetten bodembacterien organisch stikstof om naar ammonium via ammonificatie. Dit gebeurt
            van nature in diepe grondwaterlagen, veengebieden en waterbodems
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm en richtwaarden voor ammonium
        </h2>
        <p className="text-gray-700 mb-4">
          De <strong>EU-drinkwaterrichtlijn 2020/2184</strong> classificeert ammonium als
          indicatorparameter met een maximumwaarde van <strong>0,5 mg/L</strong>. Een
          indicatorparameter heeft niet primair een gezondheidskundige basis, maar geeft informatie
          over de proceskwaliteit van drinkwaterproductie en de integriteit van het distributiesysteem.
        </p>
        <p className="text-gray-700 mb-4">
          De <strong>WHO-richtwaarde</strong> voor ammonium in drinkwater bedraagt <strong>1,5 mg/L</strong>,
          gebaseerd op geur- en smaakeffecten, niet op directe gezondheidsrisicos. Ammonium zelf is
          bij drinkwaterniveaus niet direct toxisch voor mensen.
        </p>
        <p className="text-gray-700 mb-6">
          In Nederland bevatten drinkwatermonsters vrijwel altijd waarden ver onder de EU-norm van
          0,5 mg/L. Drinkwaterbedrijven zijn verplicht ammonium te monitoren. Bij verhoogde waarden
          nemen zij onmiddellijk maatregelen en informeren zij het publiek.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidseffecten van ammonium in drinkwater
        </h2>
        <p className="text-gray-700 mb-4">
          Ammonium zelf is bij de concentraties die in drinkwater voorkomen niet direct toxisch voor
          gezonde volwassenen. De gezondheidsrisicos zijn indirect:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Chlooraminvorming:</strong> wanneer ammonium reageert met chloor (desinfectans),
            ontstaan chlooraminen. Deze zijn minder effectief als desinfectans dan vrij chloor.
            Pathogenen worden langzamer geinactiveerd, wat in theorie een risico vormt bij hoge
            ammoniumconcentraties in gechlooreerde systemen
          </li>
          <li>
            <strong>Geur en smaak:</strong> ammonium beinvloedt de organoleptische eigenschappen
            van water. Bij hogere concentraties (boven 0,5 mg/L) kan een licht vissige of ammoniakgeur
            merkbaar zijn
          </li>
          <li>
            <strong>Indicatie voor andere verontreinigingen:</strong> het grootste risico van verhoogd
            ammonium is dat het duidt op fecale verontreiniging, waarbij ook pathogenen (bacterien,
            virussen, parasieten) aanwezig kunnen zijn
          </li>
          <li>
            <strong>Zuigelingen:</strong> ammonium wordt in het lichaam omgezet naar ammoniak.
            Bij zuigelingen met onrijpe lever kan hoge ammoniumblootstelling potentieel problematisch
            zijn, al zijn de concentraties in drinkwater daar normaal gesproken veel te laag voor
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Relatie ammonium en chlooramine
        </h2>
        <p className="text-gray-700 mb-4">
          De interactie tussen ammonium en chloor is relevant voor de drinkwaterdesinfectie. Wanneer
          ammonium aanwezig is bij chloordesinfectie, reageren beide stoffen:
        </p>
        <p className="text-gray-700 mb-4">
          NH4+ + HOCl &rarr; NH2Cl (monochloramine) + H+ + H2O
        </p>
        <p className="text-gray-700 mb-6">
          Chlooraminen zijn stabieler in leidingnetwerken dan vrij chloor maar minder krachtige
          desinfectantia. In Nederland worden drinkwaternormen gehaald met vrij chloor als primair
          desinfectans; chlooramine wordt hier minder gebruikt dan in de VS en het VK. Als u
          vragen heeft over chloor in uw leidingwater, lees dan ook onze pagina over{' '}
          <Link href="/waterfilter/chloor" className="text-[#005F8A] underline">chloorfilters voor leidingwater</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filtermethoden voor ammoniumverwijdering
        </h2>
        <p className="text-gray-700 mb-4">
          Voor de verwijdering van ammonium uit drinkwater zijn meerdere technieken beschikbaar.
          De effectiviteit varieert sterk per methode:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verwijdering NH4+</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Opmerking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Zeoliet (klinoptiloliet)</td>
                <td className="border border-gray-300 px-3 py-2">80&ndash;98%</td>
                <td className="border border-gray-300 px-3 py-2">Ionenwisseling, regenereerbaar</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose</td>
                <td className="border border-gray-300 px-3 py-2">90&ndash;95%</td>
                <td className="border border-gray-300 px-3 py-2">Effectief voor geladen NH4+</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Kationenwisselaar</td>
                <td className="border border-gray-300 px-3 py-2">95%+</td>
                <td className="border border-gray-300 px-3 py-2">Hoge capaciteit, regenereerbaar</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Biologisch actief kool (nitrificatie)</td>
                <td className="border border-gray-300 px-3 py-2">Varieert</td>
                <td className="border border-gray-300 px-3 py-2">Omzetting naar nitraat (niet verwijdering)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Standaard actief koolfilter</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10%</td>
                <td className="border border-gray-300 px-3 py-2">Niet geschikt voor ammonium</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          Zeoliet: de beste adsorptiemethode
        </h3>
        <p className="text-gray-700 mb-4">
          Zeoliet, en in het bijzonder het mineraal <strong>klinoptiloliet</strong>, heeft een hoge
          selectiviteit voor ammoniumionen. De poreuze kristalstructuur van zeoliet biedt
          ladingsuitwisselingssites waar NH4+ gemakkelijk natriumionen (Na+) vervangt. De
          adsorptiecapaciteit is afhankelijk van de pH (optimaal 4-8) en competitie met andere
          kationen zoals calcium en magnesium.
        </p>
        <p className="text-gray-700 mb-6">
          Na verzadiging is zeoliet regenereerbaar met een 1-2% zoutzuuroplossing of een
          gecombineerde zout-zuur-spoeling. Dit maakt zeoliet geschikt voor langdurig gebruik in
          professionele en semi-professionele waterzuiveringssystemen. Voor thuisgebruik zijn
          zeolietpatronen beschikbaar als vervangingsfilter voor bestaande filtersystemen.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          Osmosefilter voor ammonium
        </h3>
        <p className="text-gray-700 mb-6">
          Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link> is
          ook effectief voor ammoniumverwijdering. Het positief geladen NH4+-ion wordt door het
          negatief geladen RO-membraanoppervlak afgestoten en samen met het concentraat afgevoerd.
          De verwijderingsgraad van 90-95% maakt omgekeerde osmose een betrouwbare keuze als u
          tegelijkertijd ook andere verontreinigingen (nitraat, lood, pesticiden) wilt verwijderen.
          Lees meer over het{' '}
          <Link href="/waterfilter/nitraat" className="text-[#005F8A] underline">verwijderen van nitraat met een osmosefilter</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Zelf ammonium testen in leidingwater
        </h2>
        <p className="text-gray-700 mb-4">
          Als u vermoedt dat uw leidingwater verhoogde ammoniumwaarden bevat, zijn er
          verschillende testmogelijkheden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Aquariumteststrips (NH3/NH4+):</strong> snel en goedkoop (circa 5-10 euro per
            25 strips), verkrijgbaar bij dierenwinkels. Nauwkeurigheid beperkt (+/- 0,5 mg/L) maar
            geschikt voor eerste orientatie
          </li>
          <li>
            <strong>Aquarium druppeltest (Nessler-reagens of Salicylaat-methode):</strong> nauwkeuriger
            dan strips, bereik doorgaans 0-3 mg/L, nauwkeurigheid +/- 0,1 mg/L
          </li>
          <li>
            <strong>Laboratoriumanalyse:</strong> geaccrediteerde labs (Kiwa, Eurofins, SGS) bieden
            specifieke ammoniumtesten aan voor circa 20-40 euro. Aanbevolen bij vermoeden van
            daadwerkelijke verontreiniging
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          <strong>Belangrijk:</strong> verhoogde ammoniumwaarden in leidingwater moeten altijd worden
          gemeld bij uw drinkwaterbedrijf. Ammonium is een indicatorparameter; de primaire zorg is
          niet het ammonium zelf maar de mogelijke aanwezigheid van pathogenen bij fecale verontreiniging.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/stoffen-in-drinkwater/microbiologisch" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Microbiologische verontreinigingen</h3>
            <p className="text-sm text-gray-600">Welke bacteriën en virussen kunnen in drinkwater zitten en hoe filter je ze?</p>
          </Link>
          <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Filtertechnieken: ionenwisseling</h3>
            <p className="text-sm text-gray-600">Hoe werkt ionenwisseling en voor welke stoffen is het de beste methode?</p>
          </Link>
          <Link href="/waterfilter/nitraat" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Nitraat verwijderen uit drinkwater</h3>
            <p className="text-sm text-gray-600">Hoe verwijder je nitraat effectief en welk filter is het meest geschikt?</p>
          </Link>
          <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</h3>
            <p className="text-sm text-gray-600">Wat zijn de wettelijke normen voor drinkwaterkwaliteit in Nederland en de EU?</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over ammonium in leidingwater
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
          <Link href="/waterfilter/nitraat" className="text-[#005F8A] underline">nitraat verwijderen</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/waterfilter/chloor" className="text-[#005F8A] underline">chloor in leidingwater filteren</Link> en{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters</Link>.
        </p>
      </main>
    </>
  );
}
