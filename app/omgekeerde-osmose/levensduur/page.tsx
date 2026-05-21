import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosefilter levensduur: hoe lang gaat een RO-membraan mee?',
  description:
    'Een RO-membraan gaat gemiddeld 2-5 jaar mee. Voorfilters jaarlijks vervangen. Post-koolfilter elke 6-12 maanden. Levensduur is afhankelijk van waterhardheid.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/levensduur' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe lang gaat een osmosemembraan mee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een RO-membraan gaat gemiddeld 2 tot 5 jaar mee, afhankelijk van waterkwaliteit, gebruik en onderhoud. In zachte waterregio&apos;s met goede voorfiltering kan een membraan zelfs 5 tot 7 jaar functioneren. In hard water of bij verwaarloosde voorfilters daalt de levensduur naar 1 tot 2 jaar. Membraanvervanging is nodig wanneer de productiehoeveelheid met meer dan 30 procent afneemt of wanneer de TDS-ratio boven 15 procent stijgt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk vervangschema geldt voor alle filters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standaard schema: sedimentfilter elke 6 tot 12 maanden, pre-actief koolfilter elke 6 tot 12 maanden, RO-membraan elke 2 tot 5 jaar, post-actief koolfilter elke 12 tot 18 maanden en remineralisatiefilter elke 12 tot 24 maanden. De druktank gaat 5 tot 10 jaar mee zonder vervanging maar moet worden gecontroleerd op lekkage en juiste voordruk. Plak een onderhoudssticker op het systeem met vervangdata.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe meet ik de TDS-ratio om de membraanstatus te controleren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Koop een eenvoudige TDS-meter (5 tot 25 euro). Meet de TDS van uw voedingswater (kraanwater) en de TDS van het permeaat (osmosewater uit de kraan). Bereken: (permeaat TDS / voedingswater TDS) x 100 procent. Bij een nieuw membraan is dit 1 tot 5 procent. Boven 15 procent wijst op slijtage of membraanlek en is vervanging nodig. Meet onder vergelijkbare omstandigheden (temperatuur en druk).',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe kan ik de levensduur van mijn osmosefilter verlengen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vervang voorfilters op tijd (bespaar daar nooit op, dat is de belangrijkste regel), sanitiseer het systeem jaarlijks met citroenzuur of een verdunde natriumhypochlorietoplossing, gebruik altijd een actief koolfilter v&oacute;&oacute;r het membraan om chloor te verwijderen, overweeg een antiscalantdosering bij zeer hard water en zorg dat de werkdruk binnen het ontwerpbereik blijft (meestal 2,5 tot 5 bar).',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom beschadigt chloor het osmosemembraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het polyamide thin-film composite membraan dat in vrijwel alle huishoudelijke RO-systemen wordt gebruikt is gevoelig voor oxidatie door chloor. Continue blootstelling aan chloor breekt de aromatische polyamide-laag af, vermindert de zoutafwijzing en veroorzaakt onomkeerbare schade. Een actief koolfilter v&oacute;&oacute;r het membraan verwijdert vrijwel alle chloor. Vervang dit voorfilter op tijd, anders bereikt chloor het membraan en wordt het beschadigd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik filters zelf vervangen of moet er een specialist komen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor de meeste onder-aanrecht osmosesystemen is DIY-vervanging eenvoudig. Voorfilters en koolfilters vervangt u in 10 tot 15 minuten met een filtersleutel. Membraanvervanging duurt circa 30 minuten en vereist het vervangen van O-ringen en sanitisering met citroenzuur. Volg de instructies van uw fabrikant. Een specialist is alleen nodig bij grote schade, ingewikkelde meerstapssystemen of als u zich niet comfortabel voelt met loodgieterswerk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een osmosesysteem over 5 jaar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een kwalitatief systeem: aanschaf circa 400 euro, vervangingsfilters jaarlijks 60 tot 80 euro, membraan elke 3 jaar 80 tot 150 euro. Totaal over 5 jaar: 750 tot 1200 euro. Bij een dagelijkse afname van 2 liter drinkwater (3650 liter per 5 jaar) komt dit neer op 0,20 tot 0,30 euro per liter. Dat is significant lager dan flessenwater (0,50 tot 1,50 euro per liter) en bovendien zonder plasticafval.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer moet ik het hele systeem vervangen in plaats van filters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het hele systeem vervangen is zelden nodig. Indicaties: druktank lekt of houdt geen voordruk meer (na 7 tot 10 jaar), behuizing barst of vertoont scheuren (zeldzaam, meestal na 10+ jaar), kraan defect, of u wenst een upgrade naar een tankloos systeem of hogere capaciteit. In andere gevallen volstaat losse vervanging van filters, membraan, kraan of slangen. Een goed onderhouden systeem gaat 10 tot 15 jaar mee.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosefilter levensduur: hoe lang gaat een RO-membraan mee?',
  description:
    'Een RO-membraan gaat 2-5 jaar mee. Voorfilters jaarlijks vervangen. Levensduur afhankelijk van waterhardheid en onderhoud.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/omgekeerde-osmose/levensduur',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OmgekeerdeOsmoseLevensduurPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
              { '@type': 'ListItem', position: 3, name: 'Levensduur filter', item: 'https://waterfilterplatform.nl/omgekeerde-osmose/levensduur' },
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
          <span>Levensduur filter</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Osmosefilter levensduur: hoe lang gaat een RO-membraan mee?
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een omgekeerde-osmose-installatie bestaat uit meerdere componenten, elk met een eigen
            levensduur. Het hart van het systeem &mdash; het RO-membraan &mdash; gaat 2 tot 5 jaar
            mee. Met de juiste voorbehandeling, op tijd vervangen voorfilters en jaarlijkse sanitisering
            kunt u die levensduur aanzienlijk verlengen.
          </p>
        </section>

        <QuickAnswer answer="Een RO-membraan gaat gemiddeld 2 tot 5 jaar mee, mits voorfilters jaarlijks worden vervangen en chloor wordt afgevangen door een actief koolfilter. Voorfilters (sediment en kool) vervangt u elke 6 tot 12 maanden, het post-koolfilter elke 12 tot 18 maanden. Levensduur hangt af van waterhardheid, druk en onderhoud. Bij een TDS-ratio boven 15 procent is membraanvervanging nodig." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Componenten en levensduur in een overzicht
        </h2>
        <p className="text-gray-700 mb-4">
          Een typische huishoudelijke{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmose-installatie</Link>{' '}
          bestaat uit vijf tot zes onderdelen die afzonderlijk worden vervangen. Hieronder de
          gemiddelde levensduur per component:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Component</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Levensduur</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Functie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Sedimentfilter (5 micron)</td>
                <td className="border border-gray-300 px-3 py-2">6&ndash;12 maanden</td>
                <td className="border border-gray-300 px-3 py-2">Vangt zand, roest en deeltjes</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Pre-actief koolfilter</td>
                <td className="border border-gray-300 px-3 py-2">6&ndash;12 maanden</td>
                <td className="border border-gray-300 px-3 py-2">Verwijdert chloor v&oacute;&oacute;r membraan</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">RO-membraan</td>
                <td className="border border-gray-300 px-3 py-2">2&ndash;5 jaar</td>
                <td className="border border-gray-300 px-3 py-2">Hart van het systeem</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Post-actief koolfilter</td>
                <td className="border border-gray-300 px-3 py-2">12&ndash;18 maanden</td>
                <td className="border border-gray-300 px-3 py-2">Eindsmaakcorrectie</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Remineralisatiefilter</td>
                <td className="border border-gray-300 px-3 py-2">12&ndash;24 maanden</td>
                <td className="border border-gray-300 px-3 py-2">Voegt Ca/Mg toe</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Druktank</td>
                <td className="border border-gray-300 px-3 py-2">5&ndash;10 jaar</td>
                <td className="border border-gray-300 px-3 py-2">Voorraadbuffer (geen filter)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Factoren die de levensduur beinvloeden
        </h2>
        <p className="text-gray-700 mb-4">
          De spreiding van 2 tot 5 jaar voor een RO-membraan is groot omdat veel factoren de
          levensduur beinvloeden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Waterhardheid:</strong> hoge calcium- en magnesiumgehaltes veroorzaken scaling
            (kalkafzetting) op het membraanoppervlak, wat de levensduur drastisch verkort. In
            zacht-watergebieden gaan membranen aanzienlijk langer mee
          </li>
          <li>
            <strong>Waterdruk:</strong> te lage druk (onder 2,5 bar) vermindert de flux maar
            beschadigt het membraan niet structureel; te hoge druk (boven 6 bar) geeft mechanische
            stress en kan delaminatie veroorzaken
          </li>
          <li>
            <strong>Invoertemperatuur:</strong> zeer koud water (onder 10 graden) vermindert de
            productiehoeveelheid omdat osmose temperatuurafhankelijk is, maar beschadigt het membraan
            niet permanent
          </li>
          <li>
            <strong>Chloor:</strong> het polyamide membraan wordt onomkeerbaar aangetast door
            chloor. Een goed werkend actief koolfilter v&oacute;&oacute;r het membraan is essentieel
          </li>
          <li>
            <strong>Turbiditeit en sediment:</strong> grof vuil veroorzaakt verstopping van
            membraanporieen (fouling), dat is meestal omkeerbaar met spoeling
          </li>
          <li>
            <strong>Microbiologie:</strong> biofouling door bacterien op het membraan vereist
            sanitisering om te voorkomen
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Signalen dat het membraan toe is aan vervanging
        </h2>
        <p className="text-gray-700 mb-4">
          Een membraan slijt geleidelijk. Drie objectieve indicatoren vertellen u wanneer het tijd
          is voor vervanging:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>TDS-ratio:</strong> meet de TDS van uw voedingswater en uw permeaat (osmosewater).
            Een nieuw membraan geeft een ratio van 1 tot 5 procent (permeaat ten opzichte van
            voedingswater). Stijgt deze ratio boven 15 procent, dan wijst dat op membraanslijtage
            of een lek. Een TDS-meter kost 5 tot 25 euro en is een onmisbare onderhoudshulp
          </li>
          <li>
            <strong>Productiehoeveelheid:</strong> meet hoeveel liter per uur uw systeem produceert
            (vul een maatbeker en houd de tijd bij). Een daling van meer dan 30 procent ten opzichte
            van de oorspronkelijke flux wijst op fouling of slijtage van het membraan
          </li>
          <li>
            <strong>Smaak en geur:</strong> terugkerende chloorsmaak, muffe geur of plotselinge
            smaakveranderingen kunnen wijzen op membraanbeschadiging, biofouling of een verzadigd
            postkool-filter
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Tips om de levensduur te verlengen
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Vervang voorfilters op tijd:</strong> dit is de allerbelangrijkste regel. Bespaar
            hier nooit op &mdash; verwaarloosde voorfilters laten chloor en sediment door, wat het
            duurdere membraan beschadigt
          </li>
          <li>
            <strong>Sanitiseer jaarlijks:</strong> spoel het systeem met een verdunde
            citroenzuuroplossing of natriumhypochloriet om biofilm en kalkafzetting te verwijderen.
            Het is een eenvoudige procedure die u zelf kunt doen
          </li>
          <li>
            <strong>Gebruik altijd een actief koolfilter v&oacute;&oacute;r het membraan:</strong>
            zonder dat is uw membraan binnen maanden onbruikbaar door chloorschade
          </li>
          <li>
            <strong>Antiscalant bij zeer hard water:</strong> bij waterhardheid boven 20 dH is een
            antiscalantdosering of een voorafgaande waterontharder verstandig om scaling te voorkomen
          </li>
          <li>
            <strong>Houd druk binnen het bereik:</strong> de meeste systemen werken optimaal tussen
            2,5 en 5 bar. Bij hogere druk is een drukregelaar aan te raden
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kosten over 5 jaar: wat betaalt u werkelijk?
        </h2>
        <p className="text-gray-700 mb-4">
          Een eerlijke berekening voor een kwalitatief huishoudelijk osmosesysteem over 5 jaar:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Aanschaf systeem: circa 400 euro (eenmalig)</li>
          <li>Jaarlijkse vervangingsfilters (sediment, kool, post-kool): 60 tot 80 euro per jaar</li>
          <li>Membraan: 80 tot 150 euro elke 3 jaar</li>
          <li><strong>Totaal over 5 jaar: 750 tot 1200 euro</strong></li>
        </ul>
        <p className="text-gray-700 mb-6">
          Bij een dagelijkse afname van 2 liter osmosewater (drinken, koffie, thee) levert het systeem
          over 5 jaar 3650 liter drinkwater. De prijs per liter komt dan uit op{' '}
          <strong>0,20 tot 0,30 euro per liter</strong>. Ter vergelijking: flessenwater kost 0,50 tot
          1,50 euro per liter, zonder de plasticafvaloverlast. Voor een gezin van vier personen
          die ook kookwater filtert wordt het verschil nog veel groter. Zie ook onze gedetailleerde
          analyse van{' '}
          <Link href="/omgekeerde-osmose/kosten" className="text-[#005F8A] underline">kosten van een osmosesysteem</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          DIY-vervanging: stappen voor zelfdoeners
        </h2>
        <p className="text-gray-700 mb-4">
          De meeste vervangingen kunt u zelf doen zonder loodgieter:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Voorfilters en koolfilters:</strong> sluit de watertoevoer, tap de tank af, draai
            de filterhuizen los met een filtersleutel, vervang de patroon, draai de behuizing terug
            aan en heropen de watertoevoer. Tijd: 10 tot 15 minuten
          </li>
          <li>
            <strong>RO-membraan:</strong> verwijder de membraanhuis, trek het oude membraan eruit
            (let op de O-ringen), plaats het nieuwe membraan met nieuwe O-ringen, monteer terug.
            Sanitiseer het systeem met citroenzuur door het 30 minuten te laten staan, daarna spoelen.
            Tijd: 30 tot 45 minuten
          </li>
          <li>
            <strong>Eerste keer na vervanging:</strong> spoel het systeem 2 tot 4 uur (laat de
            druktank vollopen en aftappen) om productieresten en koolfilterstof te verwijderen
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is volledige systeemvervanging zinvol?
        </h2>
        <p className="text-gray-700 mb-6">
          Volledige vervanging van een osmosesysteem is zelden nodig. Indicaties zijn een lekkende
          druktank die geen voordruk meer houdt, scheuren in de behuizing van filterhuizen (zeldzaam,
          meestal pas na 10 of meer jaren), een onherstelbaar defecte kraan, of een gewenste upgrade
          naar een tankloos systeem (directe-flow) of een hogere capaciteit voor groeiende huishoudens.
          Voor de meeste situaties geldt: een goed onderhouden osmosesysteem gaat 10 tot 15 jaar mee
          met alleen filtervervanging. Overweeg ook de pagina over{' '}
          <Link href="/omgekeerde-osmose/onderhoud" className="text-[#005F8A] underline">osmose-onderhoud</Link>{' '}
          voor een compleet onderhoudsplan.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/omgekeerde-osmose/membraan-vervangen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Membraan vervangen</h3>
              <p className="text-sm text-gray-600">Wanneer en hoe vervang je het RO-membraan voor optimale filterprestaties?</p>
            </Link>
            <Link href="/omgekeerde-osmose/onderhoud" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Onderhoud osmosesysteem</h3>
              <p className="text-sm text-gray-600">Compleet onderhoudsplan voor een lang meegaand en goed werkend RO-systeem.</p>
            </Link>
            <Link href="/onderhoud/osmose-filter-vervangen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Osmosefilter vervangen</h3>
              <p className="text-sm text-gray-600">Stap-voor-stap handleiding voor het vervangen van alle filters in je osmosesysteem.</p>
            </Link>
            <Link href="/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose: complete gids</h3>
              <p className="text-sm text-gray-600">Alles over hoe RO werkt, wat het filtert en welk systeem bij jou past.</p>
            </Link>
          </div>
        </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/omgekeerde-osmose/membraan-vervangen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Membraan vervangen</h3>
            <p className="text-sm text-gray-600">Wanneer en hoe vervangt u het membraan van uw osmose systeem?</p>
          </Link>
          <Link href="/omgekeerde-osmose/onderhoud" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Onderhoud</h3>
            <p className="text-sm text-gray-600">Hoe onderhoudt u uw omgekeerde osmose systeem correct?</p>
          </Link>
          <Link href="/onderhoud/osmose-filter-vervangen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmose filter vervangen</h3>
            <p className="text-sm text-gray-600">Stap-voor-stap uitleg voor het vervangen van osmose filters.</p>
          </Link>
          <Link href="/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">Terug naar het hoofdoverzicht van omgekeerde osmose.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over levensduur van osmosefilters
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
          <Link href="/omgekeerde-osmose/onderhoud" className="text-[#005F8A] underline">onderhoud osmosesysteem</Link>,{' '}
          <Link href="/omgekeerde-osmose/kosten" className="text-[#005F8A] underline">kosten osmosesysteem</Link> en{' '}
          <Link href="/omgekeerde-osmose/membraan-vervangen" className="text-[#005F8A] underline">membraan vervangen</Link>.
        </p>
      </main>
    </>
  );
}
