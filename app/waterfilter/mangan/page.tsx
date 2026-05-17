import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Mangaan in drinkwater: zwart residu, EU-norm en waterfilter',
  description:
    'Mangaan in drinkwater geeft zwart-bruin residu in leidingen en een metaalachtige smaak. EU-norm is 50 microgram per liter. Osmosefilter verwijdert 95-99%.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/mangan' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat veroorzaakt zwart residu in mijn waterkoker of op sanitair?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zwart of zwart-bruin residu in water is een sterk teken van mangaan. Mangaan lost op in grondwater als Mn2+ (kleurloos), maar slaat neer als MnO2 (mangaandioxide, zwart) zodra het in contact komt met zuurstof of chloor in het leidingwater. Dit zwarte neerslag hecht zich aan oppervlakken in de waterkoker, op sanitair en op theedoeken. Zwarte korrels in een waterfilterkan (actieve kool) filteren mangaan niet weg; zij kunnen zelfs mangaan concentreren dat eerder in de filter is terechtgekomen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de EU-norm voor mangaan in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU-drinkwaterrichtlijn 2020/2184 stelt de maximumwaarde voor mangaan op 50 microgram per liter (ug/L of 0,05 mg/L). Dit is een indicatorparameter, wat betekent dat het primair dient als kwaliteitsindicator voor de watertoestand van het distributiesysteem en niet alleen als gezondheidsnorm. De WHO-richtwaarde voor gezondheidseffecten ligt op 400 ug/L; boven 300 tot 400 ug/L bij chronische blootstelling zijn er aanwijzingen voor neurologische effecten, met name bij kinderen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is mangaan in drinkwater gevaarlijk voor de gezondheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mangaan is een essentieel spoorelement voor de mens, maar in hogere concentraties neurotoxisch. Bij chronische blootstelling boven 300 tot 400 ug/L kunnen neurologische effecten optreden, een aandoening die manganism wordt genoemd en symptomen vertoont die lijken op de ziekte van Parkinson. Kinderen zijn gevoeliger: onderzoek toont verminderde cognitieve ontwikkeling bij langdurige blootstelling. In normaal Nederlands leidingwater wordt de EU-norm van 50 ug/L vrijwel altijd gehaald. Het risico is groter bij water uit eigen putten in mangaanhoudende grondlagen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter mangaan uit drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een omgekeerde osmose filter verwijdert 95 tot 99% van het mangaan uit drinkwater. Het RO-membraan houdt opgeloste ionen tegen, waaronder Mn2+. Dit maakt osmose de meest praktische en effectieve thuisoplossing voor mangaan in drinkwater. De verwijdering is effectief voor zowel opgelost Mn2+ als voor fijn gesuspendeerd MnO2, dat door het sedimentprefilter wordt tegengehouden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert actief kool mangaan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Actief kool is niet effectief voor de verwijdering van mangaan. Mangaan is een anorganisch metaalion en adsorbeert slecht of niet aan kooloppervlakken. Waterfilterkannen met actieve koolfilters zijn dan ook ongeschikt voor mangaanverwijdering. Sterker nog, mangaan kan zich ophopen in het filterbed en bij hoge concentraties zelfs uitlogen terug in het gefilterde water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heb ik mangaan in mijn water als ik een eigen put heb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In grondwater uit eigen putten en boorputten is mangaan veel vaker een probleem dan in leidingwater. Diep grondwater is vaak zuurstofarm (anaeroob), waardoor mangaan opgelost blijft als Mn2+. Bij Mn2+-gehalten boven 0,05 mg/L is een waterfilter of zuiveringsinstallatie aan te raden. Laat eigen bronwater analyseren door een geaccrediteerd laboratorium (Kiwa, SGS Intron, Eurofins) voor een nauwkeurige meting. Test ook op ijzer, aangezien mangaan en ijzer vaak samen voorkomen in grondwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen ijzer en mangaan in water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beide zijn metalen die van nature in grondwater voorkomen en vergelijkbare problemen veroorzaken, maar ze zijn te onderscheiden aan de kleur van het residu: ijzer geeft roodbruin neerslag (roest), mangaan geeft zwart of donkerbruin-zwart neerslag. Mangaan is minder reactief dan ijzer en oxideert langzamer. Beide worden effectief verwijderd door omgekeerde osmose en katalytische oxidatiefilters. Mangaan en ijzer komen vaak samen voor in anaeroob diep grondwater.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Mangaan in drinkwater: zwart residu, EU-norm en waterfilter',
  description:
    'Mangaan in drinkwater geeft zwart-bruin residu en een metaalachtige smaak. EU-norm 50 ug/L. Osmosefilter verwijdert 95-99% mangaan en is de beste.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/mangan',
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
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Mangaan in drinkwater', item: 'https://waterfilterplatform.nl/waterfilter/mangan' },
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
          <span>Mangaan in drinkwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Mangaan in drinkwater: zwart residu, EU-norm en waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Mangaan in drinkwater herkent u aan zwart-bruin residu op sanitair, in de waterkoker en
            op theedoeken. De EU-norm is 50 microgram per liter. Een osmosefilter verwijdert
            95 tot 99% van het mangaan en is de meest praktische thuisoplossing.
          </p>
        </section>

        <QuickAnswer answer="Mangaan in drinkwater geeft zwart neerslag op sanitair en een metaalachtige smaak. De EU-norm is 50 ug/L. Bij eigen putten in mangaanrijke grondlagen is overschrijding mogelijk. Een osmosefilter verwijdert 95-99% mangaan. Actief kool filtert mangaan niet. Test bronwater bij een geaccrediteerd laboratorium." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is mangaan?
        </h2>
        <p className="text-gray-700 mb-4">
          Mangaan (Mn) is een transitiemetaal dat van nature voorkomt in de aardkorst. Als
          spoorelement is mangaan essentieel voor de menselijke gezondheid: het speelt een rol
          in enzymwerking, botvorming en antioxidantsystemen. In hogere concentraties is mangaan
          echter neurotoxisch.
        </p>
        <p className="text-gray-700 mb-6">
          In water komt mangaan voor in twee hoofdvormen: als <strong>Mn2+ (manganion, opgelost,
          kleurloos)</strong> en als <strong>Mn4+ in de vorm van MnO2 (mangaandioxide,
          neergeslagen, zwart)</strong>. De opgeloste Mn2+-vorm overheerst in zuurstofarm diep
          grondwater. Zodra dit water in contact komt met zuurstof of chloor in het leidingnet,
          oxideert Mn2+ naar onoplosbaar MnO2 dat als zwart neerslag zichtbaar wordt. Het gedrag
          is vergelijkbaar met dat van ijzer, maar mangaan is minder reactief en oxideert langzamer.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Herkomst van mangaan in leidingwater
        </h2>
        <p className="text-gray-700 mb-4">
          Mangaan spoelt uit mangaanhoudende gesteenten en sedimenten in het grondwater. Dit
          proces vindt met name plaats in:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Anaerobe diepe grondwaterlagen:</strong> in zuurstofarm (anaeroob) milieu
            blijft mangaan opgelost als Mn2+. Dit is de meest voorkomende situatie bij diepe
            boorputten en artesische bronnen.
          </li>
          <li>
            <strong>Grondwaterlagen nabij veengebieden:</strong> afbrekend organisch materiaal
            in veen verbruikt zuurstof, waardoor anaerobe omstandigheden ontstaan die mangaan
            in oplossing houden.
          </li>
          <li>
            <strong>Industriele verontreiniging:</strong> staalproductie, mijnbouw en
            batterijfabricage kunnen lokaal verhoogde mangaanconcentraties in grond- en
            oppervlaktewater veroorzaken.
          </li>
          <li>
            <strong>Verouderde leidingen en distributiesystemen:</strong> mangaanafzettingen
            kunnen zich in leidingen ophopen en bij drukveranderingen of spoelacties loslaten.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Mangaan komt in grondwater vaak samen voor met ijzer. Beide metalen worden door
          drinkwatermaatschappijen verwijderd via beluchting en filtratie, maar bij eigen
          putten en boorputten moet u zelf maatregelen nemen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Symptomen: hoe herkent u mangaan in uw water?
        </h2>
        <p className="text-gray-700 mb-4">
          Mangaan in drinkwater is te herkennen aan een combinatie van visuele en
          smaakkenmerken:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Zwart of zwart-bruin residu</strong> op sanitair, wastafels, in de
            waterkoker en op theedoeken na het koken van water
          </li>
          <li>
            <strong>Zwarte vlekken in het toilet</strong> die snel terugkomen na schoonmaken,
            veroorzaakt door mangaanafzetting bij elke spoeling
          </li>
          <li>
            <strong>Metaalachtige of bitter-zuurachtige smaak</strong> van kraanwater of
            koffie en thee gezet met het water
          </li>
          <li>
            <strong>Zwarte korrels of zwart sediment</strong> in een waterfilterkan of
            waterkoker (actieve kool filtert mangaan niet weg en kan het zelfs concentreren)
          </li>
          <li>
            <strong>Donkere afzetting in de wasmachine</strong> of vlekken op was,
            met name bij wit goed
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm en gezondheidsrisico
        </h2>
        <p className="text-gray-700 mb-4">
          De <strong>EU-drinkwaterrichtlijn 2020/2184</strong> stelt een maximumwaarde van
          <strong> 50 microgram per liter (ug/L, oftewel 0,05 mg/L)</strong> voor mangaan.
          Dit is een zogenoemde indicatorparameter: zij dient als kwaliteitsindicator voor het
          distributiesysteem en signaleert mogelijke corrosie of biologische activiteit in
          leidingen. De WHO-richtwaarde specifiek gericht op gezondheidseffecten ligt veel hoger,
          op <strong>400 ug/L</strong>.
        </p>
        <p className="text-gray-700 mb-4">
          Bij chronische blootstelling aan concentraties boven 300 tot 400 ug/L kunnen
          neurologische effecten optreden. De aandoening manganism, veroorzaakt door
          mangaanvergiftiging, vertoont symptomen die lijken op de ziekte van Parkinson:
          tremoren, stijfheid en een veranderd looppatroon. Kinderen zijn gevoeliger voor
          de neurotoxi<wbr/>sche effecten van mangaan dan volwassenen.
        </p>
        <p className="text-gray-700 mb-6">
          Voor de gemiddelde Nederlander met leidingwater van een drinkwatermaatschappij is
          mangaan geen actueel gezondheidsrisico: de EU-norm wordt vrijwel altijd gehaald.
          Het risico is groter voor gebruikers van eigen putten in mangaanrijke grondlagen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe verwijderen drinkwatermaatschappijen mangaan?
        </h2>
        <p className="text-gray-700 mb-4">
          Professionele waterbehandeling voor mangaan omvat een combinatie van technieken:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Beluchting en sedimentatie:</strong> luchtinjectie oxideert opgelost Mn2+
            naar onoplosbaar MnO2, dat vervolgens bezonkt of gefilterd wordt
          </li>
          <li>
            <strong>Groenzandfiltratie:</strong> een filter bedekt met mangaandioxide (green
            sand) werkt als katalysator en oxideert Mn2+ effectief bij lage concentraties
          </li>
          <li>
            <strong>Chlooroxidatie gevolgd door filtratie:</strong> chloor oxideert Mn2+ snel
            naar MnO2 dat daarna wordt gefilterd; dit verklaart ook waarom mangaan neerslaat
            zodra grondwater het gechloordesinfecteerde leidingnet bereikt
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Mangaan verwijderen thuis: filtermethoden vergeleken
        </h2>
        <p className="text-gray-700 mb-4">
          Niet elke filtermethode werkt even goed voor mangaan. Hier is een vergelijking van
          de beschikbare thuisopties:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Effectiviteit</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Opmerkingen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2">95 tot 99%</td>
                <td className="border border-gray-300 px-3 py-2">Meest praktisch voor drinkwater; verwijdert ook andere verontreinigingen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Katalytisch oxidatiefilter (birm, greensand)</td>
                <td className="border border-gray-300 px-3 py-2">90 tot 99%</td>
                <td className="border border-gray-300 px-3 py-2">Effectief bij hoge concentraties; vereist periodieke regeneratie met kaliumpermanganaat</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief koolfilter</td>
                <td className="border border-gray-300 px-3 py-2">Niet effectief</td>
                <td className="border border-gray-300 px-3 py-2">Mangaan is een anorganisch metaalion; adsorbeert niet aan kool</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Ultrafiltratie (UF)</td>
                <td className="border border-gray-300 px-3 py-2">Beperkt</td>
                <td className="border border-gray-300 px-3 py-2">Verwijdert gesuspendeerd MnO2 maar niet opgelost Mn2+</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Sedimentfilter</td>
                <td className="border border-gray-300 px-3 py-2">Gedeeltelijk</td>
                <td className="border border-gray-300 px-3 py-2">Vangt alleen gesuspendeerd MnO2 deeltjes &gt; 1 micron op</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Voor huishoudelijk drinkwater is een{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose filter</Link>{' '}
          de meest complete oplossing: het verwijdert niet alleen mangaan maar ook ijzer, lood,
          nitraat, PFAS en andere verontreinigingen in een stap.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Mangaan versus ijzer: de verschillen
        </h2>
        <p className="text-gray-700 mb-4">
          Mangaan en ijzer worden regelmatig door elkaar gehaald omdat ze vergelijkbare
          problemen veroorzaken en vaak samen in grondwater voorkomen. De belangrijkste
          verschillen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Kleur van het neerslag:</strong> ijzer geeft roodbruin neerslag (roest),
            mangaan geeft zwart of donkergrijs-bruin neerslag
          </li>
          <li>
            <strong>Oxidatiesnelheid:</strong> ijzer oxideert sneller dan mangaan; u ziet
            ijzerwater roodkleuren vrijwel direct bij blootstelling aan lucht, mangaan
            kleurt pas na langere blootstelling zwart
          </li>
          <li>
            <strong>EU-norm:</strong> ijzer 200 ug/L, mangaan 50 ug/L (mangaan heeft
            een vier keer strengere norm)
          </li>
          <li>
            <strong>Filteroplossingen:</strong> overlappen grotendeels; osmose en katalytische
            oxidatiefilters zijn effectief voor beide. Zie de pagina over{' '}
            <Link href="/kraanwater/ijzer" className="text-[#005F8A] underline">ijzer in kraanwater</Link>{' '}
            voor een uitgebreide behandeling van ijzerspecifieke aanpak
          </li>
        </ul>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over mangaan in drinkwater
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
          <Link href="/kraanwater/ijzer" className="text-[#005F8A] underline">ijzer in kraanwater</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/waterfilter/lood" className="text-[#005F8A] underline">lood in drinkwater</Link> en{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters vergelijken</Link>.
        </p>
      </main>
    </>
  );
}
