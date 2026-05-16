import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Zeoliet als waterfiltermedium: ammoniak, zware metalen en aquarium',
  description:
    'Zeoliet is een mineraal filtermedium dat ammoniak, ammonium en sommige zware metalen adsorbeert. Gebruikt in aquariums, waterbehandeling en als aanvulling op osmosefilters. Vergelijking met actief kool.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/zeoliet' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat verwijdert zeoliet uit water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zeoliet (klinoptiloliet) verwijdert voornamelijk positief geladen ionen via ionenwisseling. Het meest effectief is het voor ammonium (NH4+, 80-98% verwijdering) en ammoniak (NH3), wat het uniek maakt ten opzichte van actief kool. Verder adsorbeert zeoliet zware metalen: lood (60-80%), cadmium (70-90%), koper (50-70%) en mangaan (60-85%). Zeoliet is NIET effectief voor chloor, organische stoffen, PFAS, nitraat, sulfaat of fluoride.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik zeoliet in mijn aquarium gebruiken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, zeoliet is zeer geschikt voor zoetwater aquariums, met name in de opstartfase (cycling) wanneer de biologische filter nog niet volledig actief is. Zeoliet adsorbeert de ammoniak die vissen uitscheiden via de kieuwen, waardoor giftige ammoniak-pieken worden voorkomen. Let op: gebruik zeoliet NIET in zoutwater aquariums. Zout (NaCl) regenereert zeoliet automatisch, waardoor geadsorbeerde ammoniak vrijkomt en giftige concentraties kan veroorzaken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe regenereer ik zeoliet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Verzadigd zeoliet kunt u regenereren met een 2% NaCl-oplossing (20 gram zout per liter water). Spoel het zeoliet 30-60 minuten door met deze zoutoplossing; de geadsorbeerde ionen worden verdrongen door natriumionen. Spoel daarna grondig door met schoon water om het zout te verwijderen. Klinoptiloliet kan 10-20 keer worden geregenereerd voor de adsorptiecapaciteit merkbaar afneemt. Na volledige uitputting dient het zeoliet te worden vervangen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen zeoliet en actief kool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zeoliet en actief kool zijn complementaire filtermedia met verschillende sterktes. Zeoliet adsorbeert uitstekend ammonium en zware metalen (selectieve ionenwisseling) maar werkt slecht voor organische stoffen en chloor. Actief kool verwijdert uitstekend chloor, organische microverontreinigingen en pesticiden maar heeft geen effect op ammonium. Zeoliet is regenereerbaar met zout; actief kool niet. Een combinatie van beide media geeft de breedste filterwerking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang gaat zeoliet mee als waterfiltermedium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De levensduur van zeoliet bedraagt 2-5 jaar bij regelmatige regeneratie. Na elke regeneratiecyclus neemt de adsorptiecapaciteit licht af. Na 10-20 regeneraties (afhankelijk van de kwaliteit van het klinoptiloliet) daalt de effectiviteit significant en dient het medium te worden vervangen. Zonder regeneratie is de levensduur korter: een niet-geregenereerd zeolietfilter raakt na enkele weken tot maanden verzadigd, afhankelijk van de waterbelasting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is zeoliet geschikt als voorfilter voor een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, zeoliet is een uitstekende prefilter bij hoge ammoniumconcentraties in het bronwater, bijvoorbeeld bij eigen waterputten in landbouwgebieden. Ammonium kan het osmosemembraan beschadigen of de bacteriegroei in het membraanhuisje bevorderen. Door ammonium met een zeolietfilter te verwijderen voordat het water het membraan bereikt, wordt de membraanlevensduur verlengd. Voor standaard Nederlands leidingwater is een zeoliet-prefilter meestal niet nodig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert zeoliet nitraat uit water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Zeoliet verwijdert geen nitraat (NO3-) omdat nitraat een negatief geladen ion is en zeoliet selectief positief geladen ionen adsorbeert via kationenwisseling. Voor nitraatverwijdering zijn specifieke anionenwisselaars of een osmosefilter noodzakelijk. Een osmosefilter verwijdert 80-95% van nitraat. Nitraat is met name een probleem in landbouwgebieden met intensieve bemesting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik zeoliet gebruiken als zandfiltervervanging in een zwembad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, zeoliet wordt steeds vaker gebruikt als vervanging van filterzand in zwembadfilters. Zeoliet heeft een tot 10 keer grotere specifieke oppervlakte dan filterzand en filtert fijnere deeltjes (tot 3-5 micron versus 20-40 micron voor zand). Dit resulteert in helderder water en lagere chloorbehoefte. De hoeveelheid benodigde zeoliet is circa 75% van de zandhoeveelheid vanwege het lagere soortelijk gewicht. Let op: gebruik zeoliet niet met zoutchloorsystemen in zwembaden vanwege ongewenste regeneratie.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Zeoliet als waterfiltermedium: ammoniak, zware metalen en aquarium',
  description:
    'Zeoliet is een mineraal filtermedium dat ammoniak, ammonium en sommige zware metalen adsorbeert. Vergeleken met actief kool, toepassingen in aquarium, drinkwater en zwembad.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/zeoliet',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function ZeolietWaterfilterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Zeoliet waterfilter', item: 'https://waterfilterplatform.nl/waterfilter/zeoliet' },
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
          <span>Zeoliet waterfilter</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Zeoliet als waterfiltermedium: ammoniak, zware metalen en aquarium
          </h1>
          <p className="text-[#005F8A] text-lg">
            Zeoliet is een natuurlijk mineraalfilter met een unieke eigenschap: het adsorbeert
            ammonium en ammoniak met een verwijderingsrendement van 80-98%. Dit maakt het
            onmisbaar in aquariums, als prefilter bij verontreinigd bronwater en als aanvulling
            op osmosefilters. Leer hoe zeoliet werkt, wat het wel en niet filtert en hoe u het
            kunt regenereren.
          </p>
        </section>

        <QuickAnswer answer="Zeoliet (klinoptiloliet) adsorbeert ammonium (80-98%), ammoniak en zware metalen via kationenwisseling. Het is regenereerbaar met zoutoplossing en gaat 2-5 jaar mee. Niet effectief voor chloor, organisch of nitraat. Ideaal voor aquariums en als prefilter voor osmosefilters bij hoge ammoniakconcentraties." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is zeoliet en hoe werkt het?
        </h2>
        <p className="text-gray-700 mb-4">
          Zeoliet is een groep van microporeuze aluminium-silicaat mineralen met een kristalstructuur
          vol kleine porieen en kanalen. De naam is afgeleid van het Griekse woord voor "kokend
          steen" (zeo = koken, lithos = steen), omdat zeoliet water afgeeft bij verhitting.
          Er bestaan meer dan 40 natuurlijke zeolietsoorten; voor waterfiltratie wordt bijna
          uitsluitend <strong>klinoptiloliet</strong> gebruikt vanwege de hoge kationenwisselcapaciteit.
        </p>
        <p className="text-gray-700 mb-4">
          Het werkingsmechanisme van zeoliet berust op <strong>selectieve kationenwisseling</strong>:
          de kristalstructuur bevat negatief geladen roosterposities die positief geladen ionen
          (kationen) kunnen binden en uitwisselen. De selectiviteitsvolgorde van klinoptiloliet is:
        </p>
        <p className="text-gray-700 mb-4 font-mono text-sm bg-gray-50 p-3 rounded">
          Cs+ &gt; Rb+ &gt; K+ &gt; NH4+ &gt; Ba2+ &gt; Sr2+ &gt; Na+ &gt; Ca2+ &gt; Fe3+ &gt; Al3+ &gt; Mg2+ &gt; Li+
        </p>
        <p className="text-gray-700 mb-6">
          Deze volgorde verklaart waarom zeoliet bijzonder effectief is voor ammonium (NH4+): het
          wordt bij voorkeur gebonden ten opzichte van calcium en magnesium. Dit is een unieke
          eigenschap die actief kool niet bezit.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat verwijdert zeoliet? Verwijderingspercentages per stof
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verontreiniging</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verwijdering (%)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Opmerking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Ammonium (NH4+)</td>
                <td className="border border-gray-300 px-3 py-2">80&ndash;98%</td>
                <td className="border border-gray-300 px-3 py-2">Uniek voordeel t.o.v. actief kool</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Ammoniak (NH3)</td>
                <td className="border border-gray-300 px-3 py-2">70&ndash;90%</td>
                <td className="border border-gray-300 px-3 py-2">Via omzetting naar NH4+ bij pH 7-8</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Lood (Pb2+)</td>
                <td className="border border-gray-300 px-3 py-2">60&ndash;80%</td>
                <td className="border border-gray-300 px-3 py-2">Effectief bij lage concentraties</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Cadmium (Cd2+)</td>
                <td className="border border-gray-300 px-3 py-2">70&ndash;90%</td>
                <td className="border border-gray-300 px-3 py-2">Hoge selectiviteit voor Cd</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Koper (Cu2+)</td>
                <td className="border border-gray-300 px-3 py-2">50&ndash;70%</td>
                <td className="border border-gray-300 px-3 py-2">Matige selectiviteit</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Mangaan (Mn2+)</td>
                <td className="border border-gray-300 px-3 py-2">60&ndash;85%</td>
                <td className="border border-gray-300 px-3 py-2">Goed bij pH &gt; 6,5</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Chloor (Cl2)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10%</td>
                <td className="border border-gray-300 px-3 py-2">Niet geschikt; gebruik actief kool</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Nitraat (NO3-)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;5%</td>
                <td className="border border-gray-300 px-3 py-2">Anion: niet effectief</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">PFAS</td>
                <td className="border border-gray-300 px-3 py-2">&lt;5%</td>
                <td className="border border-gray-300 px-3 py-2">Geen effectieve adsorptie</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Organische stoffen</td>
                <td className="border border-gray-300 px-3 py-2">&lt;20%</td>
                <td className="border border-gray-300 px-3 py-2">Gebruik actief kool hiervoor</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Zeoliet vs. actief kool: vergelijking
        </h2>
        <p className="text-gray-700 mb-4">
          Zeoliet en actief kool worden vaak met elkaar vergeleken, maar ze zijn complementaire
          filtermedia. Elk heeft zijn eigen sterke en zwakke punten:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Eigenschap</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Zeoliet</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Actief kool</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Ammonium/ammoniak</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Uitstekend (80-98%)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Slecht (&lt;10%)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Zware metalen</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Goed (50-90%)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Matig (20-50%)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Chloor</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Slecht (&lt;10%)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Uitstekend (95%+)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Organische stoffen</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Slecht (&lt;20%)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Uitstekend (80-99%)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Pesticiden/PFAS</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Niet effectief</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Goed tot uitstekend</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Regenereerbaar</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (2% NaCl)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Nee (wegwerpen)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Levensduur</td>
                <td className="border border-gray-300 px-3 py-2">2-5 jaar</td>
                <td className="border border-gray-300 px-3 py-2">3-12 maanden</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Kosten (medium)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;3&ndash;8 per kg</td>
                <td className="border border-gray-300 px-3 py-2">&euro;5&ndash;20 per kg</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          De combinatie van zeoliet + actief kool in een meerfasig filter geeft de breedste
          filterwerking: zeoliet pakt ammonium en zware metalen aan, actief kool verzorgt de
          verwijdering van chloor, geurstoffen en organische microverontreinigingen. Dit principe
          wordt ook toegepast in de meertraps{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilters</Link>{' '}
          voor drinkwaterbehandeling.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Toepassingen van zeoliet in waterbehandeling
        </h2>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          1. Zeoliet in het aquarium
        </h3>
        <p className="text-gray-700 mb-4">
          Zeoliet is het meest bekend bij aquariumhouders. In de opstartfase van een nieuw aquarium
          (de zogenaamde "cycling fase") is de biologische filter nog niet gevestigd. Vissen
          scheiden ammoniak uit via de kieuwen; zonder filterbacterieen stijgt de ammoniak-concentratie
          snel tot toxische niveaus. Al bij 0,02 mg/L (pH 8) is ammoniak dodelijk voor de meeste
          tropische vissen.
        </p>
        <p className="text-gray-700 mb-4">
          Zeoliet in de filterinstallatie vangt deze ammoniak op tijdens de kwetsbare opstartperiode.
          Zodra de biologische filter (Nitrosomonas- en Nitrobacter-bacterieen) volledig actief is,
          kan het zeoliet worden verwijderd of als achtervangnet worden gelaten.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="text-amber-800 font-semibold text-sm">Let op: zoutwatertanks</p>
          <p className="text-amber-700 text-sm mt-1">
            Gebruik zeoliet NOOIT in zoutwater aquariums (mariene tanks). Het zout in het
            aquariumwater regenereert het zeoliet continu, waardoor eerder geadsorbeerde ammoniak
            ineens vrijkomt in geconcentreerde vorm. Dit kan een acute ammoniakvergiftiging
            veroorzaken voor alle bewoners van het tank.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          2. Zeoliet als prefilter voor drinkwater
        </h3>
        <p className="text-gray-700 mb-4">
          Bij particuliere waterputten in landbouwgebieden kan de ammoniumconcentratie aanzienlijk
          hoger zijn dan in leidingwater. Ammonium in hoge concentraties is niet direct acuut
          toxisch, maar hoge ammoniumconcentraties vormen een voedingbodem voor bacteriegroei in
          het distributiesysteem. Bovendien kan chlorering van ammoniakrijk water chloreaminen
          vormen.
        </p>
        <p className="text-gray-700 mb-6">
          Een zeolietfilter als prefilter verlaagt het ammoniumgehalte voor de eigenlijke waterfilter.
          Dit is met name nuttig als aanvulling op een{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link>:
          hoge ammoniumconcentraties kunnen de membraanlevensduur verkorten en bacteriegroei in het
          membraanhuisje bevorderen. Met een zeoliet-prefilter blijft het membraan langer effectief.
          Meer over{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          3. Zeoliet als vervanging van zandfilter in zwembaden
        </h3>
        <p className="text-gray-700 mb-6">
          In zwembadfiltratie wordt zeoliet steeds vaker ingezet als vervanging van het traditionele
          filterzand. Zeoliet heeft een specifieke oppervlakte van 25-40 m2/g, versus 0,1-1 m2/g
          voor standaard kwartszand. Dit resulteert in filtratie van deeltjes tot 3-5 micron
          (versus 20-40 micron voor zand), helderder water en een lagere chloorbehoefte omdat
          minder organisch materiaal in het filter achterblijft. U heeft circa 75% van de
          zandhoeveelheid nodig aan zeoliet.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          4. Zeoliet gecombineerd met osmosefilter
        </h3>
        <p className="text-gray-700 mb-6">
          Voor drinkwater in gebieden met hoge ammoniumconcentraties (eigen put, intensief
          landbouwgebied) is een zeolietfilter als prefilter voor een osmosefilter de meest
          effectieve combinatie. Het zeoliet verwijdert het ammonium, het osmosemembraan
          verwijdert vervolgens nitraat, PFAS, zware metalen en andere opgeloste stoffen.
          Het resultaat is drinkwater met een breed verwijderingsspectrum en verlengde
          membraanlevensduur.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Regeneratie van zeoliet: stap voor stap
        </h2>
        <p className="text-gray-700 mb-4">
          Zeoliet regenereren is eenvoudig en goedkoop. Zo doet u het:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>Verwijder het zeoliet uit de filterinstallatie.</li>
          <li>
            Bereid een 2% NaCl-oplossing voor: 20 gram keukenzout per liter water (onze voorkeur:
            zuiver keukenzout zonder anti-klontermiddelen).
          </li>
          <li>Dompel het zeoliet 30-60 minuten in de zoutoplossing; roer af en toe.</li>
          <li>
            Spoel het zeoliet grondig door met schoon water om het overtollige zout te verwijderen
            (minimaal 3 spoelbeurten).
          </li>
          <li>Breng het zeoliet terug in de filterinstallatie.</li>
        </ol>
        <p className="text-gray-700 mb-6">
          Klinoptiloliet kan 10-20 keer worden geregenereerd. Na volledige uitputting daalt de
          adsorptiecapaciteit met meer dan 50%. Vervang het medium dan door vers zeoliet. De totale
          levensduur bij regelmatige regeneratie bedraagt 2-5 jaar.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over zeoliet als waterfilter
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
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters vergelijken</Link>,{' '}
          <Link href="/waterfilter/aquarium" className="text-[#005F8A] underline">waterfilter voor aquarium</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> en{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>
      </main>
    </>
  );
}
