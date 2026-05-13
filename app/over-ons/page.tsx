import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export function generateMetadata(): Metadata {
  const title = 'Over WaterfilterPlatform — onafhankelijke waterfilter info';
  const description =
    'Wie zit er achter WaterfilterPlatform? Onze redactionele aanpak, bronnen, partnerships en waarden — eerlijke info over drinkwater in Nederland.';

  return {
    title,
    description,
    alternates: { canonical: 'https://waterfilterplatform.nl/over-ons' },
    openGraph: {
      title,
      description,
      url: 'https://waterfilterplatform.nl/over-ons',
      type: 'website',
      siteName: 'WaterfilterPlatform',
      locale: 'nl_NL',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

const faqItems = [
  {
    question: 'Wie schrijft de artikelen op WaterfilterPlatform?',
    answer:
      'Onze artikelen worden samengesteld door een redactieteam met achtergrond in werktuigbouw, water-engineering en consumentenjournalistiek. We claimen geen individuele titels of certificeringen — we leunen op publieke bronnen zoals het Drinkwaterbesluit, KWR, RIVM en fabrikant-documentatie.',
  },
  {
    question: 'Zijn jullie onafhankelijk?',
    answer:
      'We zijn redactioneel onafhankelijk in hoe we artikelen schrijven, maar financieel verbonden met PureAqua.nl. Dat betekent: we kiezen zelf welke onderwerpen we behandelen en welke claims we toetsen. We vermelden expliciet wanneer een concurrent op een specifiek aspect beter scoort dan PureAqua.',
  },
  {
    question: 'Hoe gaan jullie om met de samenwerking met PureAqua?',
    answer:
      'Transparant. PureAqua.nl is onze commerciële partner — affiliate-links en doorverwijzingen leiden naar hun shop. Dit financiert het platform. In ruil eisen we redactionele vrijheid: als een Quooker, Grohe of ander merk objectief beter is op een aspect (bijv. prijs, afmetingen, garantie), zeggen we dat ook.',
  },
  {
    question: 'Hoe vaak worden artikelen geüpdatet?',
    answer:
      'Onze content wordt minstens één keer per jaar herzien. Specifieke datasets zoals waterhardheid per gemeente worden vaker geactualiseerd zodra waterbedrijven nieuwe rapportages publiceren. Onderaan elk redactioneel artikel vermelden we de laatst-bijgewerkt datum.',
  },
  {
    question: 'Welke bronnen gebruiken jullie?',
    answer:
      'Wij baseren ons op het Nederlandse Drinkwaterbesluit, onderzoeksinstituten zoals KWR Water Research Institute en RIVM, drinkwaterbedrijven (Vitens, PWN, Brabant Water, etc.), NEN-normen, fabrikant-documentatie en peer-reviewed publicaties waar beschikbaar.',
  },
  {
    question: 'Geven jullie medisch advies?',
    answer:
      'Nee. WaterfilterPlatform geeft consumenten-informatie over drinkwater en waterfilters, geen medisch advies. Heb je gezondheidsvragen rond drinkwater — bijvoorbeeld voor zwangeren, baby\'s of patiënten met een verzwakt immuunsysteem — raadpleeg dan een huisarts, GGD of het RIVM.',
  },
  {
    question: 'Kan ik feedback geven of een fout melden?',
    answer:
      'Graag. Stuur een e-mail naar redactie@waterfilterplatform.nl met de pagina-URL en een korte beschrijving. We lezen alles en corrigeren feitelijke fouten zo snel mogelijk. We zijn geen 24/7 helpdesk — reken op een reactietijd van enkele werkdagen.',
  },
];

const waarden = [
  {
    icon: '🎯',
    titel: 'Eerlijk',
    tekst:
      'We zeggen wat we niet weten, en geven aan wanneer een claim afhangt van context (waterhardheid, gezinsgrootte, type filter).',
  },
  {
    icon: '📏',
    titel: 'Onafhankelijk gemeten',
    tekst:
      'Specs vergelijken we tegen meerdere bronnen — niet alleen de fabrikant. Marketing-claims worden niet één-op-één overgenomen.',
  },
  {
    icon: '🔄',
    titel: 'Update-gericht',
    tekst:
      'Drinkwater-data verandert. We herzien artikelen minstens jaarlijks en passen tussentijds aan bij nieuwe regelgeving of rapportages.',
  },
  {
    icon: '📱',
    titel: 'Mobile-first',
    tekst:
      'De meeste mensen lezen op hun telefoon. We schrijven kort, scanbaar, en testen elke pagina op mobiel voor we hem publiceren.',
  },
];

const bronnen = [
  {
    naam: 'Drinkwaterbesluit',
    rol: 'Wettelijke normen voor drinkwaterkwaliteit in Nederland — de basis voor wat "veilig drinkwater" betekent.',
  },
  {
    naam: 'KWR Water Research Institute',
    rol: 'Onafhankelijk onderzoeksinstituut dat de Nederlandse waterbedrijven adviseert over kwaliteit en zuivering.',
  },
  {
    naam: 'RIVM',
    rol: 'Rijksinstituut voor Volksgezondheid en Milieu — bron voor gezondheidskundige normen rond water en stoffen daarin.',
  },
  {
    naam: 'Drinkwaterbedrijven',
    rol: 'Vitens, PWN, Brabant Water, Dunea, WMD, Evides, Waterleiding Maatschappij Limburg — voor lokale waterhardheid en kwaliteitsrapporten.',
  },
  {
    naam: 'NEN-normen',
    rol: 'Technische normen voor sanitair, leidingwater en aansluitingen (bijv. NEN 1006) waar we naar verwijzen bij installatie-vragen.',
  },
  {
    naam: 'Fabrikant-specs',
    rol: 'Datasheets, handleidingen en garantievoorwaarden van merken zoals Quooker, Grohe, Franke, PureAqua, BWT en anderen.',
  },
];

export default function OverOnsPage() {
  return (
    <>
      <SchemaOrg type="Organization" />
      <SchemaOrg type="WebSite" />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Over ons', url: 'https://waterfilterplatform.nl/over-ons' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-12 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#005F8A] text-sm font-semibold uppercase tracking-wide mb-3">
            Over WaterfilterPlatform
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-[#003F5C] leading-tight mb-4">
            Eerlijke, onafhankelijke info over drinkwater
          </h1>
          <p className="text-gray-600 text-lg mb-6 max-w-xl mx-auto">
            Onze missie: Nederlandse huishoudens helpen een onderbouwde keuze te maken in waterfilters,
            kokend water kranen en drinkwaterkwaliteit — zonder marketing-praat.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
            <Link
              href="/kennisbank"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors"
            >
              Naar de kennisbank
            </Link>
            <Link
              href="/"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors"
            >
              Terug naar home
            </Link>
          </div>
        </div>
      </section>

      {/* Waarom dit platform */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-4">
          Waarom dit platform?
        </h2>
        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            Drinkwater is voor Google een zogenaamd <strong>YMYL-onderwerp</strong> — Your Money,
            Your Life. Wat je drinkt raakt direct je gezondheid, en daarom hebben websites die hierover
            schrijven een extra verantwoordelijkheid: claims moeten kloppen, bronnen moeten controleerbaar
            zijn, en marketing moet duidelijk gescheiden worden van feiten.
          </p>
          <p>
            Wij vonden dat veel Nederlandse informatie over waterfilters één van twee dingen doet:
            óf het is een verkapte productpagina (de fabrikant prijst zichzelf aan), óf het is een
            algemeen verhaaltje dat de specifieke Nederlandse situatie negeert. De Nederlandse situatie is
            namelijk best uniek: ons leidingwater is van wereldklasse, maar de{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] font-medium hover:underline">
              waterhardheid verschilt sterk per gemeente
            </Link>{' '}
            — en dat bepaalt of een waterfilter voor jou zinvol is of niet.
          </p>
          <p>
            WaterfilterPlatform is opgezet om die kloof te dichten. We leggen techniek uit zoals{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] font-medium hover:underline">
              omgekeerde osmose
            </Link>
            ,{' '}
            <Link href="/kokend-water-kraan" className="text-[#005F8A] font-medium hover:underline">
              kokend water kranen
            </Link>{' '}
            en filterkannen. We vertalen Drinkwaterbesluit-normen naar gewone taal. En we zeggen
            eerlijk wanneer een filter <em>niet</em> nodig is — bijvoorbeeld als je in een gemeente met
            zacht water woont en geen specifieke zorg hebt.
          </p>
          <p>
            We schrijven voor mensen die googlen: &quot;moet ik een waterfilter?&quot;, &quot;is osmosewater
            ongezond?&quot;, &quot;welke kokend water kraan is het beste?&quot;. Die mensen verdienen een
            antwoord dat klopt, niet een verkooppraatje.
          </p>
        </div>
      </section>

      {/* Redactionele aanpak */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-4">
            Onze redactionele aanpak
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Een artikel op WaterfilterPlatform komt niet uit één bron. We werken volgens een vaste
            redactionele cyclus: onderwerp kiezen op basis van werkelijke zoekvraag in Nederland,
            bronnen verzamelen, claims controleren, mobiel-eerst opmaken, en periodiek herzien.
            Onder elk artikel staat de laatst-bijgewerkt-datum, zodat je weet wat je leest.
          </p>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
            <h3 className="font-bold text-[#003F5C] mb-3">Onze bronnen</h3>
            <ul className="space-y-3 text-sm">
              {bronnen.map(b => (
                <li key={b.naam} className="flex gap-3">
                  <span className="text-[#005F8A] font-bold shrink-0">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">{b.naam}</span>
                    <span className="text-gray-600"> — {b.rol}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
            <h3 className="font-bold text-[#003F5C] mb-3">Hoe wij claims toetsen</h3>
            <ol className="space-y-3 text-sm text-gray-700 list-decimal list-inside">
              <li>
                <strong>Meerdere bronnen.</strong> Als een fabrikant beweert &quot;99% kalkverwijdering&quot;,
                checken we dat tegen onafhankelijke onderzoeken (KWR, peer-reviewed) en specs van
                vergelijkbare technologieën.
              </li>
              <li>
                <strong>Feit versus marketing.</strong> Termen als &quot;gezonder water&quot; of
                &quot;basisch&quot; krijgen alleen ruimte als er een meetbare definitie bij hoort.
                Anders benoemen we het als marketingclaim.
              </li>
              <li>
                <strong>Context bij getallen.</strong> Een filter dat &quot;tot 5.000 liter&quot; meegaat
                kan in een hard-watergebied veel korter meegaan. We geven die context altijd erbij.
              </li>
              <li>
                <strong>Onderscheid: wat we weten vs. schatten.</strong> Bij prijzen, garanties of
                lokale waterhardheid die we niet konden verifiëren zeggen we het expliciet.
              </li>
              <li>
                <strong>Jaarlijkse herziening.</strong> Elk artikel wordt minimaal één keer per jaar
                opnieuw doorgelopen — bronnen gecheckt, dode links eruit, nieuwe data erin.
              </li>
            </ol>
          </div>

          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-[#003F5C]">
            <p className="font-semibold mb-1">Laatst bijgewerkt: 13 mei 2026</p>
            <p className="text-gray-700">
              Deze redactionele aanpak wordt zelf ook periodiek herzien. Vragen of suggesties?
              Mail <a href="mailto:redactie@waterfilterplatform.nl" className="text-[#005F8A] font-medium hover:underline">redactie@waterfilterplatform.nl</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Redactieteam */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-4">
          Het redactieteam
        </h2>
        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            Ons redactieteam combineert achtergrond in <strong>werktuigbouw</strong>,{' '}
            <strong>water-engineering</strong> en <strong>consumentenjournalistiek</strong>. We
            kiezen er bewust voor om geen individuele namen of titels te claimen op deze pagina —
            zo voorkomen we dat een &quot;Dr. zus-en-zo&quot; suggereert wat we niet kunnen onderbouwen.
            Wat telt is de werkwijze: meerdere bronnen, geen marketing-papagaai, eerlijke vergelijkingen.
          </p>
          <p>
            Het team bestaat uit redacteuren die zelf jaren met waterzuiveringstechniek hebben gewerkt
            (membranen, ionenwisselaars, actief-koolfiltratie) en uit schrijvers die gewend zijn om
            technische datasheets te vertalen naar begrijpelijke teksten. Daarnaast werken we met
            externe meedenkers — installateurs, keukenleveranciers, hobby-tuinders die rainwater
            harvesten — die ons helpen om praktische vragen te beantwoorden die je in de literatuur niet
            terugvindt.
          </p>
          <p>
            We zijn geen wetenschappelijk instituut en wij doen geen eigen lab-metingen. Wat we wel
            doen: openbare data verzamelen, vergelijken, en zo opschrijven dat een huiseigenaar
            zonder technische achtergrond er iets aan heeft. Voor diepgaande vragen verwijzen we
            altijd door naar de primaire bronnen — die staan onder elk artikel.
          </p>
        </div>
      </section>

      {/* Partnerships */}
      <section className="bg-[#E0F2FE] py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-4">
            Hoe we partnerships aanpakken
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>Transparantie eerst.</strong> WaterfilterPlatform is financieel verbonden met{' '}
              <a
                href="https://www.pureaqua.nl"
                target="_blank"
                rel="noopener"
                className="text-[#005F8A] font-medium hover:underline"
              >
                PureAqua.nl
              </a>
              . Affiliate-links en doorverwijzingen op deze site leiden in veel gevallen naar hun
              shop. Die inkomsten financieren het werk dat hier gebeurt — de teksten, de
              gemeentedatabase, het onderhoud.
            </p>
            <p>
              <strong>Wat dat niet betekent.</strong> Het betekent niet dat we PureAqua kritiekloos
              aanprijzen. Concreet: in onze{' '}
              <Link href="/kokend-water-kraan" className="text-[#005F8A] font-medium hover:underline">
                kokend water kraan
              </Link>{' '}
              vergelijkingen benoemen we wanneer Quooker, Grohe of Franke op een aspect (afmetingen,
              prijs, garantie, kleurkeuze) beter scoort dan PureAqua. Bij{' '}
              <Link href="/omgekeerde-osmose" className="text-[#005F8A] font-medium hover:underline">
                osmose-systemen
              </Link>{' '}
              wijzen we erop dat een onder-aanrecht set van een andere fabrikant soms een betere fit
              is dan een 4-in-1 kraan.
            </p>
            <p>
              <strong>Onze regel.</strong> Als een concurrent op een specifiek aspect aantoonbaar
              beter is, zeggen we dat. Niet omdat we onpartijdig moeten lijken, maar omdat onze
              geloofwaardigheid uiteindelijk meer waard is dan een korte-termijn klik.
            </p>
            <p>
              <strong>Affiliate-disclosure.</strong> Onderaan pagina&apos;s met productlinks of in de
              tekst zelf staat doorgaans dat we een vergoeding ontvangen bij aankoop via die link.
              Die vergoeding heeft geen invloed op het oordeel — wel op welke producten überhaupt
              hier behandeld worden, omdat we niet over álles op de markt kunnen schrijven.
            </p>
          </div>
        </div>
      </section>

      {/* Waarden */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-2 text-center">
          Onze waarden
        </h2>
        <p className="text-gray-500 text-sm text-center mb-8">
          Vier principes die in elk redactioneel besluit terugkomen
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {waarden.map(w => (
            <div key={w.titel} className="bg-white border border-gray-100 rounded-2xl p-5">
              <div className="text-3xl mb-3">{w.icon}</div>
              <h3 className="font-bold text-[#003F5C] mb-2">{w.titel}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{w.tekst}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Wat je verder kunt lezen */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-4">
            Begin hier met lezen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nieuw op het platform? Dit zijn de pagina&apos;s die de meeste bezoekers als eerste
            aanklikken — een mix van techniek-uitleg en praktische antwoorden voor de Nederlandse
            situatie.
          </p>
          <ul className="space-y-3">
            <li className="bg-white border border-gray-100 rounded-xl p-4">
              <Link href="/" className="font-semibold text-[#005F8A] hover:underline">
                Home — overzicht van het platform
              </Link>
              <p className="text-sm text-gray-600 mt-1">
                Snelste route naar de drie hoofdcategorieën: osmose, kokend water, waterhardheid.
              </p>
            </li>
            <li className="bg-white border border-gray-100 rounded-xl p-4">
              <Link href="/omgekeerde-osmose" className="font-semibold text-[#005F8A] hover:underline">
                Omgekeerde osmose — hoe werkt het écht?
              </Link>
              <p className="text-sm text-gray-600 mt-1">
                Wat een RO-membraan wel en niet doet, plus wanneer het voor een Nederlands huishouden
                de moeite waard is.
              </p>
            </li>
            <li className="bg-white border border-gray-100 rounded-xl p-4">
              <Link href="/kokend-water-kraan" className="font-semibold text-[#005F8A] hover:underline">
                Kokend water kraan — alle merken vergeleken
              </Link>
              <p className="text-sm text-gray-600 mt-1">
                Quooker, Grohe Red, Franke, PureAqua. Wat zijn de echte verschillen op prijs,
                installatie en filters?
              </p>
            </li>
            <li className="bg-white border border-gray-100 rounded-xl p-4">
              <Link href="/waterhardheid" className="font-semibold text-[#005F8A] hover:underline">
                Waterhardheid per gemeente
              </Link>
              <p className="text-sm text-gray-600 mt-1">
                349 gemeenten — zoek jouw stad en lees of een waterfilter in jouw regio zinvol is.
              </p>
            </li>
            <li className="bg-white border border-gray-100 rounded-xl p-4">
              <Link href="/kennisbank" className="font-semibold text-[#005F8A] hover:underline">
                Kennisbank — diepgaande gidsen
              </Link>
              <p className="text-sm text-gray-600 mt-1">
                Voor wie meer wil weten over waterkwaliteit, zuiveringstechniek en filterkosten op
                lange termijn.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-4">
          Contact en feedback
        </h2>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 space-y-4 text-gray-700 leading-relaxed">
          <p>
            Heb je een feitelijke onjuistheid gevonden, een dode link, of een suggestie voor een
            onderwerp dat we nog niet behandelen? We horen het graag.
          </p>
          <p>
            <strong>E-mail:</strong>{' '}
            <a
              href="mailto:redactie@waterfilterplatform.nl"
              className="text-[#005F8A] font-medium hover:underline"
            >
              redactie@waterfilterplatform.nl
            </a>
          </p>
          <p className="text-sm text-gray-500">
            We lezen alles, maar we zijn geen 24/7 helpdesk. Reken op een reactietijd van enkele
            werkdagen. Voor commerciële vragen (productinkoop, garantie, installatie) verwijzen we
            door naar de fabrikant of leverancier — wij verkopen zelf geen waterfilters.
          </p>
          <p className="text-sm text-gray-500">
            Vragen over gezondheid en drinkwater horen niet bij ons thuis. Daarvoor raadpleeg je
            huisarts, GGD of RIVM.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-2">
            Veelgestelde vragen over onze content
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Over redactie, onafhankelijkheid, partnerships, updates en bronvermelding.
          </p>
          <div className="space-y-4">
            {faqItems.map(item => (
              <details
                key={item.question}
                className="bg-white border border-gray-100 rounded-xl p-4 group"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center gap-3">
                  <span>{item.question}</span>
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0">
                    ▾
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
