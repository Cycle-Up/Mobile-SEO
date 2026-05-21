import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosewater voor ijsblokjes: helder ijs, smaak en cocktailgebruik',
  description:
    'Osmosewater geeft helder, kristalhelder ijs zonder witte kern. Geen kalkdeeltjes of luchtbelletjes. Ideaal voor cocktails, whisky en luxe horeca.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/ijssteen' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waarom geeft leidingwater troebel ijs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Leidingwater bevat opgeloste mineralen zoals calcium, magnesium en bicarbonaat en kleine hoeveelheden opgeloste gassen (lucht). Wanneer water bevriest, vriest het van de buitenkant naar binnen. Mineralen en luchtbellen worden tijdens dat proces naar het laatste vloeibare gedeelte gedrukt en geconcentreerd in het centrum van het ijsblokje. Daardoor ontstaat de typische witte kern en het troebele uiterlijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Maakt osmosewater echt helder ijs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Osmosewater heeft een TDS van slechts 5 tot 30 mg/L, wat betekent dat er nauwelijks mineralen aanwezig zijn die geconcentreerd kunnen worden tijdens het invriezen. Er is geen chloor om bij te smaken en het ijs is harder en transparanter. Het smelt ook langzamer omdat er geen onzuiverheden zijn die het smeltpunt verlagen. Het verschil met leidingwater is direct zichtbaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom helpt langzaam invriezen voor helderder ijs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij langzaam invriezen (vriezer op -10 graden in plaats van -18 graden) krijgen luchtbelletjes en eventuele resterende mineralen tijd om te ontsnappen naar de bovenkant van het ijsblokje voordat het volledig bevriest. Het kristalrooster van het ijs is bovendien regelmatiger. Snel invriezen sluit lucht en onzuiverheden direct in en geeft een troebel resultaat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe werkt directional freezing thuis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Directional freezing is een techniek waarbij water in een geisoleerde container (bijvoorbeeld een kleine koelbox van piepschuim) wordt geplaatst met de bovenkant open. Het water vriest dan alleen vanuit de bovenkant naar beneden. De bovenste twee derde wordt kristalhelder, terwijl onzuiverheden in het onderste derde gedeelte achterblijven. Snijd het heldere deel in blokken voor foutloos ijs zoals in topcocktailbars.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom gebruiken whiskybars osmose-ijs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een groot ijsblok van osmosewater smelt aanzienlijk langzamer dan een ijsblok van leidingwater. Daardoor wordt de whisky minder snel verdund en blijft de smaakontwikkeling intact. Bovendien geeft osmose-ijs geen bijsmaak van chloor of mineralen die de subtiele aroma&apos;s van een single malt zouden kunnen verstoren. Wereldwijde whiskybars hebben deze techniek omarmd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom zijn heldere ijsblokjes belangrijk voor cocktails?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Heldere ijsblokjes zijn zowel esthetisch als functioneel belangrijk. Visueel ogen ze luxer en professioneler. Functioneel verstoren ze de delicate balans van moderne cocktails niet: geen bijsmaak van chloor, geen mineralen die met botanicals in gin reageren en langzamere smelt waardoor de cocktail langer op temperatuur blijft zonder verwatering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een ijsmachine aansluiten op osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Veel professionele ijsmachines (zoals Hoshizaki, Scotsman en Manitowoc) zijn ontworpen om met osmosewater of behandeld water te werken. Voor thuis-ijsmachines is een directe aansluiting op een osmose-installatie mogelijk. Het voordeel is minder kalkaanslag in de ijsmachine zelf en helderder ijs. Let wel op de minimumdruk en flow die de ijsmachine vereist, soms is een drukbooster nodig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik osmosewater eerst koken voor de helderste ijsblokjes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het opwarmen van osmosewater tot net onder kookpunt verwijdert nog meer opgeloste gassen die anders luchtbelletjes in het ijs zouden vormen. Daarna laat u het water afkoelen tot kamertemperatuur en giet u het in de ijsmaakvorm voor invriezen. Voor de absoluut helderste resultaten combineert u deze stap met langzaam invriezen of directional freezing.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosewater voor ijsblokjes: helder ijs, smaak en cocktailgebruik',
  description:
    'Osmosewater geeft kristalhelder ijs zonder witte kern. Ideaal voor cocktails, whisky en luxe horeca.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/osmose-water/ijssteen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseWaterIjssteenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Osmose water', item: 'https://waterfilterplatform.nl/osmose-water' },
              { '@type': 'ListItem', position: 3, name: 'IJsblokjes maken', item: 'https://waterfilterplatform.nl/osmose-water/ijssteen' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/osmose-water" className="hover:underline">Osmose water</Link> &rsaquo;{' '}
          <span>IJsblokjes maken</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Osmosewater voor ijsblokjes: helder ijs, smaak en cocktailgebruik
          </h1>
          <p className="text-[#005F8A] text-lg">
            Kristalhelder ijs zonder witte kern, zonder kalksmaak en met langzamere smelt: osmosewater
            is de geheime ingredient achter de mooiste ijsblokjes in topcocktailbars en whiskylounges.
            Met de juiste invriestechniek behaalt u dat resultaat ook gewoon thuis.
          </p>
        </section>

        <QuickAnswer answer="Osmosewater geeft kristalhelder ijs omdat er nauwelijks mineralen of opgeloste gassen aanwezig zijn die tijdens het invriezen geconcentreerd worden. Combineer osmosewater met langzaam invriezen (vriezer op -10 graden) of directional freezing voor foutloos, helder ijs. Ideaal voor whisky, cocktails en luxe horeca." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom geeft leidingwater troebel ijs?
        </h2>
        <p className="text-gray-700 mb-4">
          De witte kern die u in bijna ieder ijsblokje uit een standaard vriezer ziet, is geen toeval.
          Leidingwater bevat opgeloste mineralen zoals calcium (Ca), magnesium (Mg) en bicarbonaat,
          plus kleine hoeveelheden opgeloste gassen, voornamelijk lucht. Tijdens het invriezen vormen
          deze stoffen samen het troebele middelpunt van uw ijs.
        </p>
        <p className="text-gray-700 mb-6">
          Het mechanisme is fysisch eenvoudig: water vriest van buiten naar binnen. De buitenkant
          van het ijsblokje raakt het eerst aan de koude lucht in de vriezer en kristalliseert daar
          eerst. Hierdoor worden opgeloste mineralen en gassen voor zich uitgeduwd, richting het
          centrum van het blokje. In de laatste fase van het invriezen zit al die concentratie
          opgesloten in de kern. Het resultaat is een ijsblokje dat minder helder en bovendien minder
          hard is, en sneller smelt omdat onzuiverheden het smeltpunt verlagen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De voordelen van osmosewater voor ijs
        </h2>
        <p className="text-gray-700 mb-4">
          Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosesysteem</Link> verwijdert
          95 tot 99 procent van alle opgeloste stoffen uit leidingwater. De TDS-waarde (Total Dissolved
          Solids) zakt van gemiddeld 200 tot 500 mg/L in Nederlands leidingwater naar slechts 5 tot
          30 mg/L na osmose. Voor ijsblokjes betekent dat:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Geen mineralen om te concentreren:</strong> er is bijna niets meer dat tijdens
            het invriezen naar het centrum van het blokje wordt gedrukt
          </li>
          <li>
            <strong>Geen chloorsmaak:</strong> het actief koolfilter in een osmose-installatie verwijdert
            chloor en chlooramines volledig
          </li>
          <li>
            <strong>Helder, hard en transparant:</strong> het ijs is visueel veel mooier en hardere
            blokjes splijten ook minder snel
          </li>
          <li>
            <strong>Langzamere smelt:</strong> zonder onzuiverheden ligt het smeltpunt iets hoger en
            blijft het ijs langer intact in uw glas
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Helder ijs maken: vier praktische technieken
        </h2>
        <p className="text-gray-700 mb-4">
          Osmosewater alleen is een uitstekende start, maar in combinatie met de juiste invriestechniek
          krijgt u het soort kristalheldere blokjes dat u in topbars ziet. Deze stappen samen geven
          het beste resultaat:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Gebruik osmosewater als basis:</strong> tap rechtstreeks uit uw osmosekraan of
            vul een schone karaf met osmosewater
          </li>
          <li>
            <strong>Warm het water op tot net onder kookpunt:</strong> bij ongeveer 95 graden ontsnappen
            de laatste opgeloste gassen. Niet doorkoken, dat is onnodig
          </li>
          <li>
            <strong>Giet direct in de ijsvorm en laat afkoelen tot kamertemperatuur:</strong> dan in
            de vriezer plaatsen. Hierdoor blijft de kans op opgeloste lucht minimaal
          </li>
          <li>
            <strong>Vries langzaam in:</strong> zet uw vriezer tijdelijk op -10 graden in plaats van
            -18 graden. Het water vriest dan ook nu nog van buiten naar binnen, maar de luchtbelletjes
            krijgen tijd om naar de bovenkant te ontsnappen
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Directional freezing: de cocktailbar-techniek thuis
        </h2>
        <p className="text-gray-700 mb-4">
          Wilt u absoluut foutloze, kristalheldere ijsblokken zoals in een Tokio whiskybar?
          Directional freezing is de techniek die u nodig heeft. Het idee is dat u water in een
          geisoleerde container vriest met alleen de bovenkant open, zodat de kou enkel van bovenaf
          binnenkomt en het water in een richting vriest in plaats van vanaf alle kanten tegelijk.
        </p>
        <p className="text-gray-700 mb-4">
          Praktisch werkt het zo: neem een kleine koelbox van piepschuim die in uw vriezer past, of
          een geisoleerde plastic container. Vul met osmosewater (eventueel eerst opgewarmd om gassen
          te verwijderen). Plaats in de vriezer zonder deksel of met het deksel open. Het water vriest
          dan van bovenaf naar beneden, en omdat het water langzaam bevriest en de onzuiverheden naar
          beneden worden geduwd, blijft het bovenste deel ijs kristalhelder.
        </p>
        <p className="text-gray-700 mb-6">
          Haal het ijsblok uit de container voordat het volledig is bevroren (de onderste centimeters
          mogen vloeibaar blijven, daarin zitten de onzuiverheden). Snijd het heldere deel met een
          schoon mes of een ijsbreker in blokjes of grote sferen. Het resultaat is foutloos, kristalhelder
          ijs zoals in hoge cocktailbars.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Whisky en osmose-ijs: een serieuze combinatie
        </h2>
        <p className="text-gray-700 mb-6">
          Voor whiskyliefhebbers is osmose-ijs meer dan esthetiek. Een groot ijsblok (bijvoorbeeld
          5 bij 5 centimeter) van osmosewater smelt veel langzamer dan een standaard ijsblokje. Het
          oppervlakte-volume-verhouding is kleiner en er zijn geen onzuiverheden die het smeltpunt
          verlagen. Daardoor wordt uw whisky minder snel verdund en kunt u langer van de complexe
          smaakontwikkeling genieten. Bovendien is er geen bijsmaak van chloor of bicarbonaat die de
          subtiele aroma&apos;s van een single malt zou kunnen verstoren. Wereldwijde whiskybars,
          van Edinburgh tot Tokio, hebben de combinatie van osmosewater en langzaam invriezen
          omarmd als standaard.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Cocktails en moderne mixology
        </h2>
        <p className="text-gray-700 mb-6">
          In de moderne cocktailcultuur is ijs net zo&apos;n belangrijk ingredient als de spirits zelf.
          Heldere ijsblokken zijn esthetisch (geen troebel middelpunt dat afleidt van een mooi gepresenteerde
          drank) maar ook functioneel: in een delicate gin tonic met botanicals reageren chloor en
          mineralen uit leidingwater met de aromatische verbindingen, waardoor scherpe of metaalachtige
          bijsmaken kunnen ontstaan. Osmosewater elimineert dat risico. Voor stirred cocktails (Martini,
          Manhattan, Negroni) geeft langzaam smeltend osmose-ijs de gewenste verdunning zonder de
          cocktail te slap of te koud te maken. Lees ook hoe osmosewater de{' '}
          <Link href="/osmose-water/smaak" className="text-[#005F8A] underline">smaak van dranken beinvloedt</Link>{' '}
          voor meer achtergrond.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktisch advies voor thuis
        </h2>
        <p className="text-gray-700 mb-6">
          Heeft u al een osmose-installatie? Probeer dan de volgende ronde ijs eens met deze stappen:
          tap osmosewater, breng aan de kook en laat 30 seconden doorkoken (of warm op tot 95 graden),
          laat afkoelen tot kamertemperatuur in een schone karaf, giet in uw ijsvorm en plaats in de
          vriezer op de laagste stand. Vergelijk het resultaat met uw normale ijs. Het verschil is
          direct zichtbaar: heldere, glasachtige blokjes in plaats van witte, troebele exemplaren.
          Voor wie geen osmose-installatie heeft maar wel betere ijsblokjes wil, is een{' '}
          <Link href="/omgekeerde-osmose/voor-thuis" className="text-[#005F8A] underline">osmosesysteem voor thuis</Link>{' '}
          een investering die meer oplevert dan alleen beter ijs: drinkwater, koffie, thee en koken
          worden allemaal beter.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/osmose-water/koffie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater voor koffie</h3>
            <p className="text-sm text-gray-600">Hoe osmosewater de smaak van uw koffie beinvloedt en verbetert.</p>
          </Link>
          <Link href="/osmose-water/smaak" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Smaak van osmosewater</h3>
            <p className="text-sm text-gray-600">Hoe smaakt osmosewater en hoe kunt u de smaak verbeteren?</p>
          </Link>
          <Link href="/waterfilter/koelkast" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor koelkast</h3>
            <p className="text-sm text-gray-600">Waterfilters speciaal voor koelkasten met ijsblokjesmaker.</p>
          </Link>
          <Link href="/osmose-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater overzicht</h3>
            <p className="text-sm text-gray-600">Alles over osmosewater: toepassingen, gezondheid en kwaliteit.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over osmosewater en ijsblokjes
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
          <Link href="/osmose-water/smaak" className="text-[#005F8A] underline">osmosewater en smaak</Link>,{' '}
          <Link href="/osmose-water/koffie" className="text-[#005F8A] underline">osmosewater voor koffie</Link> en{' '}
          <Link href="/omgekeerde-osmose/voor-thuis" className="text-[#005F8A] underline">osmosesysteem voor thuis</Link>.
        </p>
      </main>
    </>
  );
}
