import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosewater smaak verbeteren: pH, mineralen en remineralisatie',
  description:
    'Osmosewater heeft een neutrale, soms vlakke smaak door lage mineralenstand. Remineralisatie met calciet en magnesiumoxide voegt smaak en lichaam toe. pH na CO2-absorptie ca 5,5; remineralisatie verhoogt naar 7,0-7,5.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/smaak' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waarom smaakt osmosewater zo vlak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater heeft een zeer lage mineralenstand (TDS 5-30 mg/L) omdat het RO-membraan 95-99% van alle opgeloste stoffen verwijdert. Mineralen zoals calcium en magnesium geven water zijn karakteristieke lichaam en smaak; zonder deze ionen smaakt water plat of zelfs licht-zoetig. Veel mensen ervaren dit als schoon en zuiver, anderen missen de volle smaak van bronwater. Remineralisatie lost dit op door gecontroleerd mineralen terug te voegen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een pH van 5,5 in osmosewater ongezond?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, een pH van 5,5 in osmosewater is niet schadelijk voor de gezondheid. Het lichaam reguleert de bloed-pH zelf zeer strak tussen 7,35 en 7,45 ongeacht wat u drinkt; maagzuur heeft bovendien een pH rond 2. De licht-zure smaak komt door CO2 uit de lucht dat na het membraan in het water oplost tot koolzuur. Voor smaak en voor koffie/thee is een hogere pH wel prettiger; dat bereikt u met een remineralisatie-cartridge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heb ik remineralisatie echt nodig na mijn osmosesysteem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niet medisch noodzakelijk, maar in de praktijk fijn. Zonder remineralisatie krijgt u zuiver, vlak water met pH rond 5,5-6,5; gezond maar smaakloos. Met remineralisatie stijgt de TDS naar 50-120 mg/L, de pH naar 7,0-7,5 en krijgt het water een natuurlijke smaak. Zeker voor koffie, thee en koken is remineralisatie aanbevolen. Een cartridge kost 50-150 euro en gaat 6-18 maanden mee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Calciet of magnesiumoxide, wat is beter voor remineralisatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beide werken complementair. Calciet (calciumcarbonaat) voegt calcium toe en stijgt de pH effectief naar 7,2-7,5; werkt traag en heeft veel contacttijd nodig. Magnesiumoxide voegt magnesium toe en stijgt de pH sneller; het is reactiever bij lagere pH. De meeste hoogwaardige remineralisatie-cartridges bevatten een mengsel van beide, eventueel aangevuld met spoorelementen als zink en kalium voor een rijker smaakprofiel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt het voordat ik aan de smaak van osmosewater wen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij de meeste mensen past het smaakpalet zich binnen 1-2 weken aan. De eerste dagen kan osmosewater vreemd schoon of zelfs vreemd licht smaken, vooral na jaren chloorhoudend leidingwater. Na een paar weken proeven mensen ineens hoe sterk de chloor- en mineralencomponenten in het oude water waren. Vaak willen mensen daarna nooit meer terug. Een blinde proef met leidingwater versus osmosewater werkt overtuigend.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de beste TDS voor koffie en thee uit osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor specialty-koffie is een TDS tussen 75 en 150 mg/L de SCA-richtlijn met een calciumgehalte van 17-85 mg/L. Voor thee geldt 50-150 mg/L, afhankelijk van de theesoort: groene thee komt het best uit bij lage TDS, zwarte thee mag iets mineraalrijker. Osmosewater zonder remineralisatie is voor beide doeleinden te zuiver. Zie ook de pagina over koffie en thee voor de exacte aanbevelingen per zetwijze.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik zelf mineralen toevoegen aan osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het kan, maar precieze dosering thuis is lastig. Mineraaldruppels (calcium- en magnesium-chloride of -bicarbonaat) zijn verkrijgbaar bij koffiespecialisten en geven controle over de mineralenbalans. Voor dagelijks drinkwater is een in-line remineralisatie-cartridge praktischer en consistenter. Voeg nooit gewoon keukenzout of soda toe; dat geeft een onnatuurlijke smaak en kan ongezonde natriumconcentraties opleveren.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosewater smaak verbeteren: pH, mineralen en remineralisatie',
  description:
    'Osmosewater heeft een neutrale, soms vlakke smaak door lage mineralenstand. Remineralisatie met calciet en magnesiumoxide voegt smaak en lichaam toe.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/omgekeerde-osmose/smaak',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseSmaakPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
              { '@type': 'ListItem', position: 3, name: 'Smaak verbeteren', item: 'https://waterfilterplatform.nl/omgekeerde-osmose/smaak' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/omgekeerde-osmose" className="hover:underline">Omgekeerde osmose</Link> &rsaquo;{' '}
          <span>Smaak verbeteren</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Osmosewater smaak verbeteren: pH, mineralen en remineralisatie
          </h1>
          <p className="text-[#005F8A] text-lg">
            Osmosewater is chemisch zo zuiver dat het bijna geen smaak heeft. Voor sommigen is dat
            een verademing na chloorhoudend leidingwater, voor anderen smaakt het te plat. Met
            remineralisatie en een beetje pH-correctie haalt u het beste uit uw osmosesysteem &mdash;
            voor drinkwater, koffie en thee.
          </p>
        </section>

        <QuickAnswer answer="Osmosewater smaakt vlak door lage TDS (5-30 mg/L) en is licht zuur (pH 5,5-6,5) door CO2-absorptie uit de lucht. Met een remineralisatie-cartridge met calciet en magnesiumoxide stijgt TDS naar 50-120 mg/L en pH naar 7,0-7,5, wat het water een volle, natuurlijke smaak geeft." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe water-smaak werkt
        </h2>
        <p className="text-gray-700 mb-4">
          De smaak van water wordt bepaald door vier factoren: <strong>TDS</strong> (totaal opgeloste
          vaste stoffen), <strong>pH</strong>, de balans tussen specifieke mineralen (calcium,
          magnesium, natrium, bicarbonaat) en de temperatuur. Helemaal puur water met een TDS van 0
          smaakt vlak en kan zelfs licht-zoetig overkomen. De ionen in mineraalwater geven het water
          zijn karakteristieke &quot;lichaam&quot;; dezelfde reden waarom bronwaters uit verschillende
          regio&apos;s zo herkenbaar verschillend smaken.
        </p>
        <p className="text-gray-700 mb-6">
          Voor drinkwater wordt een TDS tussen 100 en 300 mg/L vaak gezien als de zoete spot: rijk
          genoeg om volle smaak te geven, niet zo hoog dat mineralenbijsmaak gaat overheersen. Boven
          500 mg/L wordt water al snel als bitter of zoutig ervaren; onder 50 mg/L als plat.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Smaakprofiel van vers osmosewater
        </h2>
        <p className="text-gray-700 mb-4">
          Direct na het <Link href="/omgekeerde-osmose/membraan" className="text-[#005F8A] underline">RO-membraan</Link> heeft
          osmosewater een TDS van 5-30 mg/L; de exacte waarde hangt af van het ingangswater en de
          membraankwaliteit. De pH van vers permeaat ligt rond 6,5-7,0 in het systeem, maar zakt na
          contact met lucht binnen enkele minuten naar 5,5-6,5. Dat komt door CO2-absorptie: het
          atmosferische CO2 lost op in water en vormt koolzuur (H2CO3), wat de pH verlaagt.
        </p>
        <p className="text-gray-700 mb-6">
          Het smaakprofiel is dus: zeer schoon, neutraal, soms een spoor van zoetheid en licht-zuur.
          In vergelijking met bronwater of een goed mineraalwater mist het &quot;lichaam&quot;. Veel
          mensen vinden dit prettig omdat alle bijsmaken van chloor, ijzer, sediment en hardheid
          verdwenen zijn; anderen missen de volheid en kiezen daarom voor remineralisatie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom mensen overstappen het lekker vinden
        </h2>
        <p className="text-gray-700 mb-6">
          Een interessant patroon: mensen die net zijn overgestapt van chloorhoudend leidingwater
          beschrijven osmosewater vaak in eerste instantie als &quot;vreemd&quot;. Na een week of
          twee gewenning proeven ze echter ineens hoe sterk hun oude water naar chloor en metaal smaakte.
          Veel huishoudens stoppen daarna met flessenwater kopen omdat osmose hetzelfde of zelfs betere
          smaakniveau geeft. Doe de proef: vul drie glazen anoniem met leidingwater, flessenwater en
          osmosewater (gerimineraliseerd) en laat huisgenoten blind kiezen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Remineralisatie: hoe het principe werkt
        </h2>
        <p className="text-gray-700 mb-4">
          Een remineralisatie-cartridge bevat granulair <strong>calcietcarbonaat</strong> (CaCO3) en
          vaak <strong>magnesiumoxide</strong> of dolomiet (CaMg(CO3)2). Het licht-zure osmosewater
          (pH 5,5-6,5) reageert met deze mineralen en lost ze geleidelijk op. Daardoor stijgt de TDS
          van 5-30 naar 50-120 mg/L en de pH naar 7,0-7,5. De reactie verloopt zelfregulerend: hoe
          zuurder het water, hoe sneller het oplost; bij hogere pH stopt de reactie vanzelf.
        </p>
        <p className="text-gray-700 mb-6">
          Een goede remineralisatie-cartridge kost tussen 50 en 150 euro en gaat 6-18 maanden mee,
          afhankelijk van waterverbruik. Sommige premium-varianten bevatten ook spoorelementen zoals
          zink en kalium voor een rijker smaakprofiel. Zie ook onze pagina <Link href="/omgekeerde-osmose/remineralisatie" className="text-[#005F8A] underline">osmose remineralisatie</Link> voor
          een uitgebreid technisch overzicht.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          pH-effect en alternatieven
        </h2>
        <p className="text-gray-700 mb-4">
          De CO2-absorptie maakt osmosewater zuur (pH rond 5,5). Dat is medisch volstrekt
          onschadelijk &mdash; uw maag heeft een pH van 2 &mdash; maar de licht-zure smaak is in
          koffie en thee minder gewenst. Espresso met sterk zuur water proeft als &quot;onderextractie&quot;,
          en groene thee wordt licht bitter. Remineralisatie heft dit op.
        </p>
        <p className="text-gray-700 mb-6">
          Als alternatief kunt u osmosewater kort beluchten: water in een glas omschudden of door een
          druppeltrechter laten lopen. Daarmee wordt CO2 verdreven en stijgt de pH een beetje (richting
          6,0-6,5). Voor een complete oplossing is een remineralisatie-cartridge praktischer en
          consistenter.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Smaakprofielen per toepassing
        </h2>
        <p className="text-gray-700 mb-4">
          Niet elke toepassing vraagt dezelfde TDS. Een overzicht:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Koffie (espresso, filterkoffie):</strong> TDS 75-150 mg/L, calcium 17-85 mg/L. Lees meer op <Link href="/kokend-water-kraan/koffie" className="text-[#005F8A] underline">water voor koffie</Link></li>
          <li><strong>Thee:</strong> TDS 50-150 mg/L. Groene thee: lage TDS (50-80). Zwarte thee: 80-150. Zie <Link href="/kokend-water-kraan/thee" className="text-[#005F8A] underline">water voor thee</Link></li>
          <li><strong>Pure drinkwater:</strong> TDS 100-300 mg/L is meest &quot;natuurlijk&quot;. Bevredigt smaakpalet.</li>
          <li><strong>Babymelk en kindervoeding:</strong> lage TDS (10-100 mg/L) heeft de voorkeur; geen nitraat, geen zware metalen</li>
          <li><strong>Aquarium (zoetwater):</strong> TDS 50-200 voor neonvissen; voor planten-aquarium tot 300</li>
          <li><strong>Strijkijzers en stoomapparatuur:</strong> hoe lager TDS hoe beter; osmosewater pur sang ideaal</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Smaaktest thuis
        </h2>
        <p className="text-gray-700 mb-6">
          Doe een blinde smaaktest: laat een onafhankelijke huisgenoot drie identieke glazen vullen
          met leidingwater, osmosewater zonder remineralisatie en osmosewater met remineralisatie.
          De meeste mensen verkiezen het gerimineraliseerde osmosewater. Sommigen vinden osmose
          zonder remineralisatie het lekkerst (vooral als ze gewend zijn aan flessenwater met lage
          TDS). Leidingwater met chloor wordt vrijwel altijd herkend en als minst aangenaam beoordeeld.
          Lees ook over de <Link href="/omgekeerde-osmose/rendement" className="text-[#005F8A] underline">rendementscijfers van osmose</Link> en
          de <Link href="/omgekeerde-osmose/kosten" className="text-[#005F8A] underline">totale kosten</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over osmosewater smaak
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
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/omgekeerde-osmose/remineralisatie" className="text-[#005F8A] underline">remineralisatie</Link>,{' '}
          <Link href="/omgekeerde-osmose/wat-is-osmose-water" className="text-[#005F8A] underline">wat is osmosewater</Link> en{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters</Link>.
        </p>
      </main>
    </>
  );
}
