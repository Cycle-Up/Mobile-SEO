import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter voor boot en jacht: drinkwater op het water',
  description: 'Op een boot of jacht is schoon drinkwater cruciaal. Vergelijking van waterfilters voor zeiljacht, motorjacht en sloep: van dakwaterfilter tot.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/boot-jacht' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welk waterfilter gebruik ik op een boot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De keuze hangt af van uw vaargebied en gebruik. Voor dagtochten op binnenwateren volstaat een inline koolstoffilter of een goede waterkan. Voor meerdaagse tochten op havenwater is een UV-purifier met sedimentfilter verstandig. Voor blauwwater-zeilen (oceaan) heeft u een marine RO watermaker nodig die zeewater omzet in drinkwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik zeewater filteren tot drinkwater op een jacht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, met een marine RO watermaker (watermaker). Dit systeem perst zeewater onder hoge druk (55-80 bar) door een zout-selectief osmosemembraan. Het verwijdert het zout en vrijwel alle andere verontreinigingen. De productie ligt tussen 12 en 60 liter drinkwater per uur afhankelijk van het model. Een marine watermaker is onmisbaar voor langdurige oceaanzeiltochten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe werkt een marine watermaker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een marine watermaker werkt op het principe van omgekeerde osmose. Een hogedrukpomp (55-80 bar voor zeewater, vs 3-8 bar voor zoetwater) perst zeewater door een semi-permeabel membraan. Dit membraan laat watermoleculen door maar houdt zouten, bacterien, virussen en andere verontreinigingen tegen. Het resultaat is drinkwater met een zoutgehalte van minder dan 500 mg/L (WHO-norm). Brine (geconcentreerd zeewater) wordt teruggegooid overboord.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is havenwater veilig om te drinken na filtratie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Havenwater is formeel drinkwater dat voldoet aan de Nederlandse normen. Echter, in havens zijn er praktische risicos: lange slangen, aftapkranen die weinig worden gebruikt (biofilm), en incidentele dieselverontreiniging. Een combinatie van sedimentfilter en koolstoffilter verbetert de smaak en verwijdert chloor. Een UV-purifier geeft extra bescherming als u twijfelt aan de hyginische staat van de slang of kraan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe onderhoud ik een waterfilter op een boot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inline koolstoffilters vervangt u elk seizoen of na 2.000 liter. UV-lampen gaan 9.000-12.000 branduren mee en vervangt u jaarlijks. Bij een marine watermaker: spoel het membraan na elk gebruik met zoet water om zoutdepositie te voorkomen. Bij opslag langer dan 2 weken: desinfecteer het systeem met natriummetabisulfiet. Nooit het membraan laten uitdrogen of bevriezen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een watermaker voor een zeilboot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een compacte marine watermaker voor een zeiljacht kost tussen €1.500 en €3.500 voor instapmodellen (12-20 L/uur). Grotere systemen voor bluewater-zeilen met 40-60 L/uur kosten €3.500-€6.000 of meer. Zeewatermembranen zijn duurder dan zoetwater-RO-membranen en gaan bij goed onderhoud 3-5 jaar mee. Montage en installatie zijn niet inbegrepen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk waterfilter werkt op 12V voor een boot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Veel marine watermakers zijn leverbaar als 12V of 24V DC-systeem, voeding direct uit de scheepsaccu. Ook UV-purifiers zijn beschikbaar in 12V uitvoering. Inline sediment- en koolstoffilters hebben geen stroom nodig. Voor een dagtochtboot op binnenwateren volstaat een 12V UV-purifier (circa 10-16W) gecombineerd met een sedimentfilter als complete oplossing.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter voor boot en jacht: drinkwater op het water',
  description: 'Op een boot of jacht is schoon drinkwater cruciaal. Vergelijking van waterfilters voor zeiljacht, motorjacht en sloep: van dakwaterfilter tot.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/boot-jacht',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterBootJachtPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Waterfilter boot en jacht', item: 'https://waterfilterplatform.nl/waterfilter/boot-jacht' },
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
          <span>Waterfilter boot en jacht</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterfilter voor boot en jacht: drinkwater op het water
          </h1>
          <p className="text-gray-600 text-lg">
            Op een boot of jacht bent u afhankelijk van de waterkwaliteit die u aantreft in de haven of van uw eigen watervoorraad. De juiste waterfilter is niet alleen een kwestie van comfort maar ook van gezondheid, zeker op langere vaartochten. Van een eenvoudige inline filter voor dagtrips tot een volledige marine watermaker voor oceaanzeilen.
          </p>
        </div>

        <QuickAnswer answer="Voor dagtochten op havenwater volstaat een inline koolstoffilter. Voor meerdaagse tochten voegt u een UV-purifier toe. Voor oceaanzeilen heeft u een marine RO watermaker nodig die zeewater omzet in drinkwater (55-80 bar druk, 12-60 liter per uur). Alle marine systemen zijn beschikbaar op 12V." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterbronnen op een boot: wat zijn de opties?
        </h2>
        <p className="text-gray-700 mb-4">
          Afhankelijk van het type varen en uw bestemming heeft u toegang tot verschillende waterbronnen, elk met eigen kwaliteitsrisicos:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Haventankwater:</strong> Formeel drinkwater, maar slangen en kranen in jachthavens bevatten soms biofilm of zijn lang niet gebruikt. Smaak kan door chloor onaangenaam zijn.</li>
          <li><strong>Eigen tankwater meenemen:</strong> Veilig mits de tank schoon is en water niet te lang stilstaat. Bij warm weer: bacteriegroei in donkere watertanks.</li>
          <li><strong>Regenwatercollectie van het dek:</strong> Bevat vogelvuil, zout (op zee) en luchtverontreinigingen. Alleen bruikbaar na grondig filtreren.</li>
          <li><strong>Zeewater (ontzilting):</strong> Onbeperkt beschikbaar op zee, maar vereist een marine RO watermaker voor omzetting naar drinkwater.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kwaliteitsproblemen van havenwater
        </h2>
        <p className="text-gray-700 mb-4">
          Havenwater komt uit het drinkwaternet en voldoet formeel aan de Nederlandse drinkwaternormen. Toch zijn er in de praktijk meerdere punten die de kwaliteit kunnen verslechteren voordat het water uw boordtank bereikt:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Chloor en smaak:</strong> Het desinfectiemiddel dat drinkwaterbedrijven gebruiken, is in jachthavens soms nog goed waarneembaar in smaak en geur.</li>
          <li><strong>Sediment:</strong> Slijtage van slangen en koppelingen zorgt voor fijne deeltjes in het water.</li>
          <li><strong>Biofilm in slangen:</strong> Lange, in de zon liggende slangen in de haven zijn een ideale broedplaats voor bacterien als het water stilstaat.</li>
          <li><strong>Dieselverontreiniging:</strong> In drukke commerciele havens is incidentele diesel- of olieverontreiniging van havenwater een reeel risico, hoewel zeldzaam in recreatiehavens.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijking: filteroplossingen per situatie
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Situatie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Oplossing</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Havenwater verbeteren (smaak/chloor)</td>
                <td className="border border-gray-300 px-3 py-2">Inline koolstoffilter of filterkraan</td>
                <td className="border border-gray-300 px-3 py-2">&euro;30-200</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Tankwater behandelen (meerdaagse tocht)</td>
                <td className="border border-gray-300 px-3 py-2">UV-purifier + sedimentfilter</td>
                <td className="border border-gray-300 px-3 py-2">&euro;200-500</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Regenwater op boot als drinkwater</td>
                <td className="border border-gray-300 px-3 py-2">UV + keramisch filter</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300-700</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Zeewater ontzilten (blauwwater-zeilen)</td>
                <td className="border border-gray-300 px-3 py-2">Marine RO watermaker</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1.500-6.000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Marine RO watermaker: voor oceaanzeilen onmisbaar
        </h2>
        <p className="text-gray-700 mb-4">
          Een marine watermaker is het meest geavanceerde systeem voor drinkwater op een boot. Het omzet zeewater in drinkwater via omgekeerde osmose onder zeer hoge druk. De kernspecificaties die u moet kennen:
        </p>
        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">Werkdruk</h3>
            <p className="text-gray-700 text-sm">
              Zeewater-RO vereist 55-80 bar druk om het zoute water door het membraan te persen. Dit is drastisch hoger dan zoetwater-osmose (3-8 bar). De hogedrukpomp is dan ook de kern van het systeem en het meest energieverslindende onderdeel.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">Productie en vermogen</h3>
            <p className="text-gray-700 text-sm">
              Kleine systemen produceren 12-20 liter drinkwater per uur en verbruiken 50-80W. Grotere systemen leveren 40-60 liter per uur bij 150-200W. Voor een bemanning van 4 personen (circa 8-12 liter drinkwater per dag) volstaat een instapmodel ruimschoots.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">Membraanonderhoud op zee</h3>
            <p className="text-gray-700 text-sm">
              Na elk gebruik spoelt u het membraan minimaal 10-15 minuten met zoet water. Dit voorkomt dat zoutdeposities op het membraan achterblijven en het versneld slijten. Bij opslag langer dan 2 weken gebruikt u een conserveringsmiddel (natriummetabisulfiet, 1%) om bacteriegroei te voorkomen. Nooit het membraan laten uitdrogen.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          12V waterfilters voor kleine boten
        </h2>
        <p className="text-gray-700 mb-4">
          Voor een sloep, kajak of kleine zeilboot is een volledige watermaker overdreven. Hier zijn de praktische 12V-opties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>12V UV-purifier:</strong> Circa 10-16W verbruik, ruimschoots op scheepsaccu te draaien. Doodt bacterien en virussen in havenwater of tankwater effectief.</li>
          <li><strong>Inline koolstofblokfilter:</strong> Geen stroom nodig, eenvoudig in de watertoevoerleiding te monteren. Verwijdert chloor, sediment en verbetert de smaak aanzienlijk.</li>
          <li><strong>12V marine watermaker (compact):</strong> Beschikbaar voor kleinere boten, maar nog steeds een investering van circa €1.500 of meer. Zinvol als u regelmatig meerdere dagen op zee vaart zonder haven.</li>
          <li><strong>Solar-powered filterinstallatie:</strong> Combineer een klein zonnepaneel (50-100W) met een marine accu voor een volledig energieonafhankelijke UV-filterinstallatie.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Binnenwateren in Nederland: andere eisen dan oceaanzeilen
        </h2>
        <p className="text-gray-700 mb-4">
          Wie uitsluitend op Nederlandse binnenwateren vaart (rivieren, kanalen, meren), heeft geen zeewater-ontzilting nodig. Het water in Nederlandse jachthavens voldoet formeel aan drinkwaterkwaliteit. Een pragmatische aanpak voor binnenlandse watersporters:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>Vul uw watertank bij in de thuishaven met goed water dat u kent</li>
          <li>Monteer een inline sedimentfilter op de tanktoevoer (50 µm) voor alle havenkranen onderweg</li>
          <li>Voeg een inline koolstoffilter toe aan de drinkwaterkraan aan boord</li>
          <li>Overweeg een 12V UV-lamp bij de drinkwateruitgang voor microbiologische zekerheid op lange tochten</li>
        </ol>
        <p className="text-gray-700 mb-6">
          Dit is een complete en betaalbare filteroplossing voor de Nederlandse watersporter, zonder de kosten van een marine watermaker.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/waterfilter/voor-aquarium" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor aquarium</h3>
            <p className="text-sm text-gray-600">Schoon water voor zoetwater- en zoutwateraquaria: filtertypen, pompen en onderhoud.</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">Hoe werkt omgekeerde osmose en wanneer is het de beste keuze voor waterfiltratie?</p>
          </Link>
          <Link href="/onderhoud/osmose-filter-vervangen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosefilter vervangen</h3>
            <p className="text-sm text-gray-600">Wanneer en hoe vervangt u de membraan en filters van uw osmosesysteem?</p>
          </Link>
          <Link href="/waterfilter/reisfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Reisfilter</h3>
            <p className="text-sm text-gray-600">Draagbare waterfilters voor op reis: van UV-pennen tot compacte holle-vezelfilters.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over waterfilters op een boot of jacht</h2>
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
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfiltertypen</Link> en{' '}
          <Link href="/waterfilter/woonboot" className="text-[#005F8A] underline">waterfilter voor een woonboot</Link>.
        </p>
      </main>
    </>
  );
}
