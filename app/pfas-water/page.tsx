import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { AuthorBox } from '@/components/AuthorBox';
import { PureFilterCTA } from '@/components/PureFilterCTA';
import { SourcesSection } from '@/components/SourcesSection';
import { PUREFILTER } from '@/lib/purefilter.mjs';
import { FOUR_IN_ONE, THREE_WAY } from '@/lib/kranen.mjs';
import { COUNTERTOP } from '@/lib/countertop.mjs';

// Informatieve hub voor "pfas in drinkwater", "pfas in water", "drinkwater pfas" en "pfas kraanwater".
// Filterkeuze hoort op /pfas-waterfilter, regionale verschillen op /leidingwater/pfas.
const PAGE_URL = 'https://waterfilterplatform.nl/pfas-water';
const PAGE_TITLE = 'PFAS in drinkwater en kraanwater: de feiten (2026)';
const PAGE_DESCRIPTION =
  'PFAS in drinkwater: kraanwater voldoet aan de wettelijke norm, maar bij ongeveer een derde van Nederland ligt het boven de RIVM-advieswaarde. Feiten en nieuws.';
const DATE_PUBLISHED = '2026-04-01';
const DATE_MODIFIED = '2026-11-10';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
};

const QUICK_ANSWER =
  'Ja, in Nederlands kraanwater worden op veel plekken lage concentraties PFAS gemeten. Het water voldoet aan de wettelijke EU-norm van 100 nanogram per liter voor de som van 20 PFAS. Het RIVM adviseert een veel strengere waarde van 4,4 nanogram per liter (in PFOA-equivalenten). Volgens een analyse van Greenpeace (september 2026) ligt het kraanwater van ongeveer een derde van de Nederlanders boven die advieswaarde, met de hoogste waarden onder meer in IJmuiden en Zaandam. Er is geen advies om te stoppen met kraanwater drinken; de PFAS-belasting moet op termijn wel omlaag.';

const faqItems = [
  {
    question: 'Zit er PFAS in mijn kraanwater?',
    answer:
      'Waarschijnlijk wel, in een lage concentratie. PFAS komen via rivieren, regen en grondwater vrijwel overal in het milieu terecht, en drinkwaterbedrijven halen ze met de gangbare zuivering maar deels weg. Hoeveel er in jouw kraanwater zit, hangt vooral af van de bron van je waterbedrijf: water uit rivieren en meren bevat doorgaans meer PFAS dan diep grondwater. De meetwaarden voor jouw leveringsgebied staan op de website van je drinkwaterbedrijf.',
  },
  {
    question: 'Is kraanwater met PFAS veilig om te drinken?',
    answer:
      'Nederlands kraanwater voldoet aan de wettelijke PFAS-norm en de drinkwaterbedrijven noemen het veilig. Er is geen acuut gevaar en geen advies om te stoppen met kraanwater drinken. De zorg gaat over langdurige blootstelling: PFAS stapelen zich op in het lichaam, en het RIVM wil dat de totale inname op termijn daalt. Drinkwater is daarbij maar een deel van de inname; voedsel speelt voor de meeste mensen een grotere rol. Twijfel je, bijvoorbeeld bij zwangerschap of flesvoeding, vraag dan advies aan je huisarts, verloskundige of het consultatiebureau.',
  },
  {
    question: 'Wat is het verschil tussen de PFAS-norm en de RIVM-advieswaarde?',
    answer:
      'De wettelijke norm geldt sinds 12 januari 2026 in de hele EU: maximaal 100 nanogram per liter (0,1 microgram per liter) voor de som van 20 aangewezen PFAS. De RIVM-advieswaarde van 4,4 nanogram per liter, uitgedrukt in PFOA-equivalenten, is veel strenger en gebaseerd op de gezondheidskundige grenswaarde van de Europese voedselautoriteit EFSA. Die advieswaarde is geen wet, maar het niveau waar het RIVM op termijn naartoe wil.',
  },
  {
    question: 'Zit er PFAS in bronwater of flessenwater?',
    answer:
      'Ook bronwater en flessenwater zijn niet automatisch PFAS-vrij. PFAS komen via regen en grondwater op veel plekken in het milieu terecht, ook in de bodem rond bronnen. Hoeveel er in een bepaald merk zit, verschilt per bron; omdat wij geen betrouwbare vergelijkende cijfers per merk hebben, noemen we hier geen getallen. Overstappen op flessenwater is daarom geen vanzelfsprekende oplossing voor PFAS, en het is duurder en belastender voor het milieu dan kraanwater. Wil je de inname via water verlagen, dan is gefilterd kraanwater volgens ons de logischere route.',
  },
  {
    question: 'Verwijdert koken PFAS uit water?',
    answer:
      'Nee. PFAS zijn hittebestendig en verdampen niet met het water mee. Bij lang koken verdampt juist een deel van het water, waardoor de concentratie PFAS in wat overblijft iets stijgt. Alleen filtratie, zoals omgekeerde osmose of een geschikt koolstoffilter, vermindert PFAS in drinkwater.',
  },
  {
    question: 'Helpt een waterfilter tegen PFAS in kraanwater?',
    answer:
      'Een geschikt filter kan de hoeveelheid PFAS in je drinkwater flink verlagen, maar niet elk filter werkt even goed. Omgekeerde osmose vermindert PFAS het sterkst, ook veel kortere ketens. Een goed koolstoffilter werkt vooral tegen langere ketens zoals PFOS en PFOA en moet op tijd vervangen worden. UV-lampen en sedimentfilters doen niets tegen PFAS. In onze gids over het PFAS-waterfilter vergelijken we de opties.',
  },
  {
    question: 'Waar vind ik de PFAS-waarden van mijn eigen kraanwater?',
    answer:
      'Alle tien Nederlandse drinkwaterbedrijven publiceren hun meetgegevens, meestal per leveringsgebied. Kijk op de website van je eigen waterbedrijf; dat blijft de betrouwbaarste bron voor jouw adres. Greenpeace bracht in september 2026 een postcodechecker uit op basis van diezelfde openbare meetgegevens van 183 winlocaties.',
  },
];

const NIEUWS = [
  {
    datum: '22 september 2026',
    titel: 'Greenpeace: bij ongeveer een derde van Nederland PFAS boven de RIVM-advieswaarde',
    tekst:
      'Een analyse van Greenpeace op basis van openbare meetgegevens van de drinkwaterbedrijven laat zien dat in ongeveer een derde van het Nederlandse drinkwater meer PFAS zit dan de RIVM-advieswaarde. De hoogste waarden zijn onder meer gemeten in IJmuiden en Zaandam. Het water voldoet wel aan de wettelijke norm.',
    bron: 'NOS',
    url: 'https://nos.nl/artikel/2632030',
  },
  {
    datum: 'September 2026',
    titel: 'ILT: PFAS uit bestrijdingsmiddelen (TFA) groeiend risico voor drinkwater',
    tekst:
      'De Inspectie Leefomgeving en Transport waarschuwt dat TFA, een zeer kleine PFAS-stof die onder meer vrijkomt uit bestrijdingsmiddelen, steeds verder doordringt in het grondwater waaruit drinkwater wordt gemaakt.',
    bron: 'NOS',
    url: 'https://nos.nl/artikel/2630617',
  },
  {
    datum: '30 oktober 2026',
    titel: 'Kustprovincies onderzoeken PFAS en drinkwaterwinning',
    tekst:
      'Noord-Holland, Zuid-Holland en Zeeland onderzoeken samen met het ministerie van Infrastructuur en Waterstaat en de drinkwaterbedrijven wat PFAS langs de kust betekent voor de winning van drinkwater.',
    bron: 'Reformatorisch Dagblad',
    url: 'https://www.rd.nl/a/onderzoek-gevolgen-pfas-in-kustgebied-voor-winning-drinkwater',
  },
];

const linkClass = 'text-[#005F8A] underline hover:text-[#003F5C]';

export default function PfasWaterPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'PFAS in drinkwater', url: PAGE_URL },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          datePublished: DATE_PUBLISHED,
          dateModified: DATE_MODIFIED,
          url: PAGE_URL,
        }}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <span>PFAS in drinkwater</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          PFAS in drinkwater: hoeveel zit er in je kraanwater?
        </h1>

        <AuthorBox datePublished={DATE_PUBLISHED} dateModified={DATE_MODIFIED} />

        <QuickAnswer question="Zit er PFAS in Nederlands drinkwater?" answer={QUICK_ANSWER} />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <p className="text-xl font-bold text-[#005F8A]">100 ng/L</p>
            <p className="text-sm text-gray-700">Wettelijke EU-norm voor de som van 20 PFAS, sinds 12 januari 2026</p>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <p className="text-xl font-bold text-[#005F8A]">4,4 ng/L</p>
            <p className="text-sm text-gray-700">RIVM-advieswaarde in PFOA-equivalenten (geen wet)</p>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <p className="text-xl font-bold text-[#005F8A]">Circa 1 op 3</p>
            <p className="text-sm text-gray-700">Nederlanders met kraanwater boven de advieswaarde (Greenpeace, 2026)</p>
          </div>
        </div>

        <section className="border border-amber-200 bg-amber-50 rounded-2xl p-5 mb-8" aria-labelledby="actueel">
          <h2 id="actueel" className="text-xl font-bold text-[#003F5C] mb-1">
            Actueel: PFAS in drinkwater in het nieuws
          </h2>
          <p className="text-xs text-gray-500 mb-4">Bijgewerkt op 10 november 2026</p>
          <ul className="space-y-4">
            {NIEUWS.map(n => (
              <li key={n.url}>
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-900">{n.datum}</p>
                <p className="font-semibold text-gray-900">{n.titel}</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {n.tekst}{' '}
                  <a href={n.url} rel="noopener" className={linkClass}>
                    Bron: {n.bron}
                  </a>
                </p>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-700 mt-4 leading-relaxed">
            Wat dit nieuws voor jou betekent, zetten we nuchter op een rij in{' '}
            <Link href="/kennisbank/pfas-kraanwater-boven-rivm-advieswaarde" className={linkClass}>
              PFAS in kraanwater boven de RIVM-advieswaarde
            </Link>
            .
          </p>
        </section>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wettelijke norm of RIVM-advieswaarde: waarom zijn er twee getallen?
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Over PFAS in drinkwater circuleren twee getallen die ver uit elkaar liggen. Dat zorgt voor verwarring: het
          ene getal is een wettelijke grens, het andere een gezondheidskundig advies.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Grens</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Waarde</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">EU-norm som van 20 PFAS</td>
                <td className="border border-gray-300 px-3 py-2">100 ng/L (0,1 µg/L)</td>
                <td className="border border-gray-300 px-3 py-2">Wettelijk bindend sinds 12 januari 2026</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">EU-parameter PFAS totaal</td>
                <td className="border border-gray-300 px-3 py-2">500 ng/L (0,5 µg/L)</td>
                <td className="border border-gray-300 px-3 py-2">Keuzeparameter in de EU-richtlijn; lidstaten bepalen zelf of ze die toepassen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">RIVM-advieswaarde</td>
                <td className="border border-gray-300 px-3 py-2">4,4 ng/L PFOA-equivalenten</td>
                <td className="border border-gray-300 px-3 py-2">Advies sinds 2022, gebaseerd op EFSA; geen wet</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6 leading-relaxed">
          De advieswaarde is veel strenger dan de wettelijke norm. Een rechtstreekse vergelijking van de getallen gaat
          niet op: de advieswaarde weegt stoffen naar hun schadelijkheid (PFOA-equivalenten), de norm telt 20 stoffen
          ongewogen op. De advieswaarde is gebaseerd op nieuwere kennis over
          het effect van PFAS op het immuunsysteem, die beschikbaar kwam nadat de Europese regels waren vastgesteld.
          Nederlands kraanwater voldoet aan de wet; de discussie gaat over hoe snel het richting de advieswaarde moet.
          Meer over de regels lees je bij{' '}
          <Link href="/drinkwaternormen/pfas" className={linkClass}>PFAS-normen voor drinkwater</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">Wat zijn PFAS?</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          PFAS staat voor per- en polyfluoralkylstoffen: een verzamelnaam voor duizenden door de mens gemaakte stoffen.
          De bekendste zijn PFOS en PFOA, maar ook GenX, PFNA, PFHxS en de zeer kleine stof TFA horen bij de familie.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          De koolstof-fluorbinding in PFAS is extreem stabiel. Daardoor breken PFAS nauwelijks af door zonlicht, hitte
          of bacteriën en stapelen ze zich op in bodem, water en het menselijk lichaam; vandaar de bijnaam
          &quot;forever chemicals&quot;. Ze zitten of zaten onder meer in antiaanbaklagen, impregneersprays,
          blusschuim, voedselverpakkingen en industriële processen. Een overzicht per stof vind je bij{' '}
          <Link href="/stoffen-in-drinkwater/pfas-overzicht" className={linkClass}>PFAS-stoffen in drinkwater</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe komt PFAS in het drinkwater?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Via rivieren en meren:</strong> Rijn en Maas voeren PFAS aan uit industrie in binnen- en
            buitenland. Drinkwaterbedrijven die oppervlaktewater gebruiken, vooral in het westen, krijgen daardoor meer
            PFAS binnen.
          </li>
          <li>
            <strong>Via lokale bronnen:</strong> lozingen van chemische fabrieken, zoals Chemours in Dordrecht, en
            blusschuim op vliegvelden en oefenterreinen.
          </li>
          <li>
            <strong>Via de lucht en regen:</strong> PFAS verspreiden zich ook door de lucht en slaan met regen neer, ook
            ver van een bron.
          </li>
          <li>
            <strong>Via bestrijdingsmiddelen:</strong> TFA dringt snel door naar diep grondwater, de bron die tot nu
            toe het best beschermd was.
          </li>
        </ul>
        <p className="text-gray-700 mb-6 leading-relaxed">
          De gangbare zuivering bij drinkwaterbedrijven haalt maar een deel van de PFAS weg. Daardoor verschilt de
          hoeveelheid PFAS in kraanwater sterk per regio. Welke regio&apos;s hoger scoren en waarom, lees je op{' '}
          <Link href="/leidingwater/pfas" className={linkClass}>PFAS in leidingwater per regio</Link>, en op de{' '}
          <Link href="/kennisbank/pfas-nederland-kaart" className={linkClass}>PFAS-kaart van Nederland</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat doet PFAS met je gezondheid?
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          PFAS hopen zich op in bloed en organen en verlaten het lichaam maar langzaam. Bij langdurige blootstelling
          worden ze in verband gebracht met:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>een minder sterke afweer, zoals een lagere reactie op vaccinaties;</li>
          <li>een hoger cholesterolgehalte;</li>
          <li>effecten op de schildklier en op het geboortegewicht;</li>
          <li>
            een hoger risico op bepaalde vormen van kanker; het IARC (WHO) deelde PFOA in 2023 in als kankerverwekkend
            en PFOS als mogelijk kankerverwekkend.
          </li>
        </ul>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Belangrijk voor de nuance: dit gaat over langdurige blootstelling en vaak over hogere concentraties dan in
          Nederlands kraanwater. Drinkwater is maar een deel van je totale PFAS-inname; voedsel speelt voor de meeste
          mensen een grotere rol. Meer daarover in{' '}
          <Link href="/kennisbank/pfas-bloedwaarden-nederland" className={linkClass}>PFAS in het bloed van Nederlanders</Link>.
        </p>

        <HealthDisclaimer />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">Wat kun je zelf doen?</h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Zoek op wat er uit jouw kraan komt.</strong> Je drinkwaterbedrijf publiceert de PFAS-metingen per
            leveringsgebied. Hoe je zo&apos;n rapport leest, staat bij{' '}
            <Link href="/leidingwater/waterkwaliteitsrapport" className={linkClass}>het waterkwaliteitsrapport lezen</Link>.
          </li>
          <li>
            <strong>Kijk naar je totale inname.</strong> Varieer in voeding en wees terughoudend met eieren van
            hobbykippen en zelfgevangen vis uit bekende PFAS-gebieden.
          </li>
          <li>
            <strong>Gebruik je eigen putwater?</strong> Dat valt niet onder de controle van een drinkwaterbedrijf. Lees
            meer bij <Link href="/putwater" className={linkClass}>putwater</Link>.
          </li>
          <li>
            <strong>Overweeg een filter als je de inname via water wilt verlagen.</strong> Dat is een persoonlijke
            keuze, geen medische noodzaak.
          </li>
        </ol>

        <section className="border-2 border-[#005F8A] bg-[#F0F9FF] rounded-2xl p-5 md:p-6 mb-8" aria-labelledby="filteren">
          <h2 id="filteren" className="text-xl md:text-2xl font-bold text-[#003F5C] mb-2">
            Overweeg je een filter?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Niet elk filter werkt tegen PFAS. Omgekeerde osmose vermindert PFAS het sterkst; een goed koolstoffilter
            werkt vooral tegen langere ketens; filterkannen verschillen sterk per merk en UV-lampen doen niets. In onze
            koopgids vergelijken we de opties met labresultaten, kosten en onderhoud.
          </p>
          <Link
            href="/pfas-waterfilter"
            className="inline-flex justify-center items-center bg-[#005F8A] text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors"
          >
            Naar de PFAS-waterfilter koopgids
          </Link>
          <p className="font-semibold text-gray-800 text-sm mt-5 mb-2">Welk filter past bij welke situatie? Onze keuze:</p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              <strong>Zonder osmose en zonder ingewikkelde installatie:</strong>{' '}
              <Link href={PUREFILTER.reviewPath} className={linkClass}>{PUREFILTER.name}</Link> ({PUREFILTER.price}), een
              inline filter dat je zelf op de koude leiding zet. Bij
              Equinox Labs verminderde een nieuw filter vijf PFAS met {PUREFILTER.pfasReduction}.
            </li>
            <li>
              <strong>Maximaal zuiveren, plus zeer heet en gekoeld water:</strong>{' '}
              <Link href={FOUR_IN_ONE.reviewPath} className={linkClass}>{FOUR_IN_ONE.name}</Link>. SGS mat bij een nieuw
              systeem {FOUR_IN_ONE.lab.PFOS} minder PFOS en {FOUR_IN_ONE.lab.PFOA} minder PFOA.
            </li>
            <li>
              <strong>Osmosewater uit je eigen kraan:</strong> een{' '}
              <Link href={THREE_WAY.reviewPath} className={linkClass}>{THREE_WAY.name}</Link>, een osmosesysteem onder
              het aanrecht.
            </li>
            <li>
              <strong>Niet boren, bijvoorbeeld in een huurwoning:</strong> het{' '}
              <Link href={COUNTERTOP.reviewPath} className={linkClass}>{COUNTERTOP.name}</Link>, omgekeerde osmose op het
              aanrecht met een stekker.
            </li>
          </ul>
          <p className="text-xs text-gray-500 mt-4">
            Deze producten verkoopt PureAqua, waaraan WaterfilterPlatform gelieerd is. Onze keuze per situatie leggen we
            uit in de koopgids.
          </p>
        </section>

        <PureFilterCTA context="pfas" content="pfas-water-purefilter" />

        <section className="space-y-3 mt-10 mb-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over PFAS in drinkwater</h2>
          {faqItems.map(item => (
            <details key={item.question} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700 text-sm">{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Verder lezen over PFAS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/pfas-waterfilter" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800">PFAS waterfilter: koopgids</p>
              <p className="text-sm text-gray-500">Welk filter vermindert PFAS, en wat kost het?</p>
            </Link>
            <Link href="/leidingwater/pfas" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800">PFAS in leidingwater per regio</p>
              <p className="text-sm text-gray-500">Waar de waarden hoger liggen en waarom</p>
            </Link>
            <Link href="/waterfilter/pfas" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800">Hoe een filter PFAS tegenhoudt</p>
              <p className="text-sm text-gray-500">De techniek per filtertype uitgelegd</p>
            </Link>
            <Link href="/rapporten/pfas-trendoverzicht-2026" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800">PFAS-trendoverzicht 2026</p>
              <p className="text-sm text-gray-500">Tijdlijn van normen, metingen en nieuws</p>
            </Link>
          </div>
        </section>

        <SourcesSection
          sources={[
            'NOS, Greenpeace-analyse PFAS in drinkwater (22 september 2026): nos.nl/artikel/2632030',
            'NOS, ILT-rapport over TFA uit bestrijdingsmiddelen (september 2026): nos.nl/artikel/2630617',
            'Reformatorisch Dagblad, onderzoek gevolgen PFAS in kustgebied voor drinkwaterwinning (30 oktober 2026)',
            'RIVM, PFAS in drinkwater en de advieswaarde van 4,4 ng/L PFOA-equivalenten',
            'Europese Drinkwaterrichtlijn 2020/2184/EU, PFAS-parameters van kracht per 12 januari 2026',
            'IARC Monographs volume 135 (2023), PFOA en PFOS',
          ]}
        />
      </main>
    </>
  );
}
