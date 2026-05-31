import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Waterfilter legionella: beschermt een filter tegen legionella-bacterie?',
  description: 'Legionella in drinkwater: risico\'s, hoe het groeit in leidingen en welke waterfilters bescherming bieden. UV-filter vs osmose vs filtratie.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/legionella' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is legionella en hoe raak je besmet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Legionella pneumophila is een bacterie die de veteranenziekte (legionellose) veroorzaakt, een ernstige longontsteking. Besmetting verloopt via het inademen van fijn waternevel (aerosolen) met legionellabacterien — niet door drinkwater zelf te drinken. Risicobronnen zijn douches, koeltorens, jacuzzi\'s, verwarmingssystemen en bevochtigers. De bacterie groeit het best bij watertemperaturen van 25 tot 45 graden Celsius in stilstaand water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waar groeit legionella in een woning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In een woning zijn de meeste risicoplaatsen: de boiler of cv-systeem (als de temperatuur onder 60 graden Celsius zakt), zelden gebruikte kranen of douches (stilstaand water), douchekoppen met kalkafzetting (biofilm), buitenkranen die lang niet gebruikt zijn, en huishoudelijke bevochtigers of stoominhalatoren. In huurwoningen, hotels en ziekenhuizen zijn grote leidingnetwerken met dode eindpunten een groter risico.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is legionella in kraanwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kraanwater van het drinkwaterbedrijf is in Nederland vrijwel vrij van legionella — drinkwaterbedrijven houden strenge temperatuur- en desinfectienormen aan. Het risico ontstaat in de huisinstallatie: als water lang stilstaat bij 25-45 graden Celsius kunnen aanwezige legionellabacterien (die in kleine aantallen altijd aanwezig kunnen zijn) uitgroeien tot gevaarlijke concentraties. Risicogroepen zijn ouderen, rokers, mensen met verminderde weerstand en chronisch zieken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Helpt een waterfilter tegen legionella?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het hangt sterk van het filtertype af. Een UV-filter doodt legionellabacterien effectief (99,99%+ inactivatie bij correct gedimensioneerde UV-dosis van 40 mJ/cm2). Een osmosefilter verwijdert bacterien fysiek via het membraan. Een standaard koolstoffilter of sedimentfilter beschermt echter niet tegen legionella en kan bij onjuist onderhoud zelfs een broedplaats worden. Preventie via temperatuurmanagement is effectiever dan filteren alleen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een UV-filter en osmosefilter voor legionella?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een UV-filter inactiveert legionellabacterien door DNA-schade maar verwijdert ze niet fysiek uit het water. Na een UV-filter kunnen dode bacterien nog aanwezig zijn in het water (niet schadelijk, maar technisch aanwezig). Een osmosefilter verwijdert bacterien fysiek via het 0,0001-micrometer membraan — legionella (0,5-2 micrometer) passeert het membraan niet. Osmose geeft daarmee het meest volledige resultaat. UV is echter sneller en goedkoper voor desinfectie alleen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke boilertemperatuur voorkomt legionellagroei?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Legionellabacterien worden gedood bij een watertemperatuur van 60 graden Celsius of hoger (volledige inactivatie). Stel uw boiler of cv-combiketel in op minimaal 60 graden Celsius. Bij 55 graden Celsius duurt inactivatie langer (enkele uren); bij 50 graden Celsius kan legionella overleven. Zorg dat het warme water bij de tapkraan minstens 50 graden Celsius bereikt. In huurwoningen heeft de verhuurder een wettelijke legionellabeheersingsplicht.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer is een UV-filter zinvol voor legionellapreventie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een UV-filter is zinvol als: (1) u een privebron (put) gebruikt als drinkwaterbron; (2) u een kwetsbaar persoon heeft in het huishouden (ouder, immuungecompromitteerd); (3) u een systeem heeft waarbij watertemperatuur moeilijk te controleren is; (4) u een regenwaterinstallatie heeft. Voor standaard leidingwater in een goed onderhouden installatie is UV doorgaans niet nodig als de boilertemperatuur correct is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan een koolstoffilter legionellagroei bevorderen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, als het filter niet goed onderhouden wordt. Actieve koolfilters die lang niet vervangen zijn kunnen een biofilm ontwikkelen die bacteriegroei bevordert, inclusief legionella. Dit geldt voor alle filtersystemen waarbij water in contact staat met filtermateriaal bij kamertemperatuur. Vervang filterpatronen altijd op tijd, spoel het systeem na een periode van stilstand en installeer UV-desinfectie na het filter als u putwater of regenwater gebruikt.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter legionella: beschermt een filter tegen legionella-bacterie?',
  description: 'Legionella in drinkwater: risico\'s, groeiomstandigheden en welke waterfilters bescherming bieden. UV-filter vs osmosefilter vs koolstoffilter.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/legionella',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterLegionellaPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Legionella', item: 'https://waterfilterplatform.nl/waterfilter/legionella' },
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
          <span>Legionella</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterfilter legionella: beschermt een filter tegen legionella-bacterie?
        </h1>

        <QuickAnswer answer="Legionella groeit in stilstaand warm water tussen 25-50 graden Celsius in leidingen, boilers en douchekoppen. Een UV-filter doodt legionella effectief (99,99%+). Een osmosefilter verwijdert bacterien fysiek. Een standaard koolstoffilter beschermt niet en kan bij slecht onderhoud zelfs bacteriegroei bevorderen. Preventie via boilertemperatuur (&gt;60 graden Celsius) blijft de primaire maatregel." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is Legionella pneumophila?
        </h2>
        <p className="text-gray-700 mb-4">
          Legionella pneumophila is een gramnegative staafbacterie die de veteranenziekte (legionellose) veroorzaakt. Deze ernstige longontsteking heeft een sterftecijfer van 5 tot 15% bij onbehandelde gevallen. De bacterie werd voor het eerst geidentificeerd in 1976 na een uitbraak op een veteranenconferentie in Philadelphia.
        </p>
        <p className="text-gray-700 mb-4">
          Belangrijk: besmetting verloopt <strong>niet via drinken</strong> maar via het <strong>inademen van fijn waternevel (aerosolen)</strong>. Douchen, jacuzzi gebruik, koeltorens en bevochtigers zijn de meest voorkomende besmettingswegen. Het drinken van water met legionella geeft geen ziekte.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waar groeit legionella? Ideale omstandigheden
        </h2>
        <p className="text-gray-700 mb-4">
          Legionella heeft specifieke groeicondities nodig:
        </p>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Temperatuurzone: 25-50 graden Celsius</h3>
            <p className="text-gray-700 text-sm">
              Optimale groei vindt plaats bij 35-45 graden Celsius. Onder 20 graden Celsius is er nauwelijks groei. Boven 60 graden Celsius worden de bacterien snel gedood (volledige inactivatie binnen enkele minuten). De gevaarlijke zone van 25-50 graden Celsius omvat precies de temperatuur van een slecht ingestelde boiler of lauw warm water in een lang leiding.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Stilstaand water met biofilm</h3>
            <p className="text-gray-700 text-sm">
              Legionella groeit het best in stilstaand of langzaam stromend water met biofilm (bacterieaanslag op leidingwanden). Kalkafzetting, roest en organisch materiaal in leidingen bevorderen biofilmvorming. Douchekoppen en kranen die lang niet gebruikt worden zijn risicovolle plekken.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Grote leidingnetwerken in gebouwen</h3>
            <p className="text-gray-700 text-sm">
              Hotels, ziekenhuizen, kantoren en flatgebouwen met complexe leidingnetwerken hebben een hoger risico vanwege dode eindpunten (stagnante leidingdelen), wisselende waterverbruikspatronen en grote opslagtanks. De Wet milieubeheer en het Drinkwaterbesluit verplichten risicobeheersprogrammas voor legionella in collectieve waterinstallaties.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filteropties: wat werkt en wat niet
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">UV-desinfectiefilter</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Effectief voor legionella</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              UV-licht op 254 nm beschadigt het DNA van legionellabacterien waardoor ze zich niet kunnen vermenigvuldigen. Bij een UV-dosis van 40 mJ/cm&#178; of meer is de inactivatie 99,99%+ (4-log reductie). UV werkt direct in de waterstroom, zonder chemicalien. Effectief voor privebronnen, regenwaterinstallaties en aanvulling op osmosesystemen.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Legionella: ✓ 99,99%+</span>
              <span>Virussen: ✓</span>
              <span>Kosten: &euro;150-400</span>
              <span>Onderhoud: jaarlijks UV-lamp</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Omgekeerde osmose (RO)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Fysieke verwijdering</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Het RO-membraan heeft porieen van 0,0001 micrometer. Legionellabacterien zijn 0,5 tot 2 micrometer groot en worden volledig tegengehouden. Osmose verwijdert bacterien fysiek, in tegenstelling tot UV dat ze inactiveert maar aanwezig laat. Osmose filtert ook chemische verontreinigingen (zware metalen, PFAS, nitraat) weg. Nadeel: geldt alleen voor keuken/drinkwater, niet voor douchemist.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Legionella: ✓ 99,99%+ (fysiek)</span>
              <span>Kosten: &euro;300-800</span>
              <span>Toepassing: drinkwater/koken</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Combinatie UV + Osmose</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Meest compleet</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              UV voor de osmose-unit doodt bacterien vooraf en beschermt het membraan. UV na de osmose-unit (als postfilter) geeft extra zekerheid voor microbiologisch veilig drinkwater. Voor privebronnen of regenwaterinstallaties is UV + osmose de standaardaanbeveling voor complete bescherming.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Legionella: ✓✓</span>
              <span>Chemicalieen: ✓</span>
              <span>Kosten: &euro;500-1.200</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Koolstoffilter / sedimentfilter</h3>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">Niet effectief voor legionella</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Standaard actieve koolfilters en sedimentfilters verwijderen geen legionellabacterien. Erger: als deze filters niet tijdig vervangen worden, kunnen ze zelf een broedplaats voor bacterien worden (biofilmvorming op het filtermateriaal bij kamertemperatuur). Gebruik ze nooit als enige bescherming bij putwater of systemen met legionellarisico.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Legionella: ✗</span>
              <span>Risico bij slecht onderhoud: !</span>
              <span>Geschikt als: voorzuivering</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Preventie: temperatuur als eerste verdedigingslinie
        </h2>
        <p className="text-gray-700 mb-4">
          De meest effectieve maatregel tegen legionella is temperatuurbeheersing. Drinkwaterleidingen en de Legionella-beheersingsrichtlijn (ISSO 55.3) schrijven voor:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Boiler/cv-ketel:</strong> instellen op minimaal 60 graden Celsius (bij 60&deg;C is volledige inactivatie binnen minuten)</li>
          <li><strong>Warm water bij tapkraan:</strong> binnen 1 minuut minimaal 55 graden Celsius bereiken</li>
          <li><strong>Zelden gebruikte kranen:</strong> wekelijks gedurende 3 minuten doorspoelen met heet water</li>
          <li><strong>Douchekoppen:</strong> maandelijks ontkalk en desinfecteer (10 minuten in azijn- of citroenzuuroplossing)</li>
          <li><strong>Na vakantie:</strong> alle kranen en douches 5 minuten doorspoelen voor gebruik</li>
        </ul>
        <p className="text-gray-700 mb-6">
          In huurwoningen heeft de verhuurder een wettelijke legionellabeheersingsplicht op basis van het Drinkwaterbesluit. Bij klachten over watertemperatuur of stilstaand water kunt u de verhuurder aansprakelijk stellen.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/zakelijk/legionella-beheersplan" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Legionella beheersplan zakelijk</h3>
            <p className="text-sm text-gray-600">Wettelijke verplichtingen en praktische aanpak voor bedrijven en instellingen.</p>
          </Link>
          <Link href="/stoffen-in-drinkwater/microbiologisch" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Microbiologische verontreinigingen</h3>
            <p className="text-sm text-gray-600">Overzicht van bacterien, virussen en andere microbiologische risico's in drinkwater.</p>
          </Link>
          <Link href="/filtertechnieken/uv-sterilisatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">UV-sterilisatie uitleg</h3>
            <p className="text-sm text-gray-600">Hoe werkt UV-desinfectie en wanneer is het de beste keuze tegen bacterien?</p>
          </Link>
          <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen Nederland</h3>
            <p className="text-sm text-gray-600">Actueel overzicht van EU- en Nederlandse normen voor drinkwaterkwaliteit.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over legionella en waterfilters</h2>
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
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link> en{' '}
          <Link href="/waterfilter/hormonen" className="text-[#005F8A] underline">hormonen en medicijnresten in water</Link>.
        </p>
      </main>
    </>
  );
}
