import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter voor woonboot: drinkwater bij wal en op het water',
  description: 'Een woonboot heeft specifieke uitdagingen voor drinkwater: aansluiting op waloever, variabele waterkwaliteit en beperkte ruimte. De beste.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/woonboot' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welk waterfilter is geschikt voor een woonboot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een woonboot met vaste walwateraansluiting is een compact osmosesysteem onder het aanrecht de meest complete oplossing. Het verwijdert eventueel lood (bij oudere boten), sediment uit de slangverbinding en verbetert smaak en geur significant. Als alternatief volstaat een sedimentprefilter (50 µm) gecombineerd met een koolstofblokfilter voor smaakverbetering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is het water op een woonboot net zo schoon als in een huis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Woonboten die zijn aangesloten op het gemeentelijke drinkwaternet hebben formeel recht op water van dezelfde kwaliteit als huishoudens op het vaste land. De kwaliteit aan de aansluiting is gelijkwaardig. Echter, het water reist via een slang langs de oever naar de boot, wat risico op sediment en biofilm geeft. De binnenleidingen van de boot kunnen ook een rol spelen, vooral bij oude boten met koperen of loden leidingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heb ik een loodrisico op mijn oude woonboot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dat hangt af van de bouwperiode van de boot. Boten gebouwd voor 1975 kunnen loodleidingen of loodgesoldeerde koperen fittingen hebben. Lood lost op in water, vooral als het water stilstaat (de eerste liter ochtend). Een osmosefilter verwijdert meer dan 95% van het lood uit drinkwater en is de meest praktische oplossing als vervanging van leidingen in een boot complex is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Past een osmosefilter in een kleine woonboot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Een compact osmosesysteem zonder drukvat heeft een footprint van slechts 20x40 cm en past in vrijwel elk aanrechtkastje op een woonboot. Modellen zonder warmwaterboiler zijn nog compacter en leveren direct koud gefilterd drinkwater. De installatie vereist een aansluiting op de koude watertoevoer en een kleine kraan in het aanrechtblad.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doe ik als mijn wateraansluiting tijdelijk niet werkt op mijn woonboot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Houd als reserveoplossing een Berkey-type zwaartekrachtfilter of een voorraad gefilterd water in flessen. Een kleine watertank aan boord (100-200 liter) gevuld met gefilterd water geeft een buffer van enkele dagen. Voor kortere onderbrekingen volstaat flessenwater. Informeer ook bij uw watermaatschappij naar de verwachte duur van de storing; als woonbootbewoner op het gemeentelijke net heeft u dezelfde rechten als reguliere huishoudens.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een kokend waterkraan geschikt voor een woonboot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een 4-in-1 kokend waterkraan is een uitstekende keuze voor een woonboot met walstroomaansluiting. De compacte boiler (2-4 liter) past onder het aanrecht en combineert gefilterd koud water en kokend water in een enkele kraan, wat ruimte bespaart ten opzichte van een aparte waterkoker. Zorg dat uw walstroomaansluiting voldoende vermogen levert voor de boiler (standby circa 30W, verhitten 2.200W).',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe filter ik slangwater van de steiger?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Monteer een sedimentfilter (50 µm) direct aan het begin van de slangaansluiting op de boot, voor de watertank of het leidingwerk. Dit vangt grove deeltjes en schilfers uit de slang op. Voeg daarna in de keuken een koolstofblokfilter of osmosesysteem toe voor de drinkwaterkraan. Vervang de slang regelmatig en laat bij langdurig stilstaan altijd eerst water doorstromen voor gebruik.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter voor woonboot: drinkwater bij wal en op het water',
  description: 'Een woonboot heeft specifieke uitdagingen voor drinkwater: aansluiting op waloever, variabele waterkwaliteit en beperkte ruimte. De beste.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/woonboot',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterWoonbootPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Waterfilter woonboot', item: 'https://waterfilterplatform.nl/waterfilter/woonboot' },
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
          <span>Waterfilter woonboot</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterfilter voor woonboot: drinkwater bij wal en op het water
          </h1>
          <p className="text-gray-600 text-lg">
            Een woonboot is geen boot en geen huis, maar deelt kenmerken van beide. U heeft vrijwel altijd een vaste walwateraansluiting, maar het water reist via een slang langs de oever naar uw woning op het water. De specifieke uitdagingen van een woonboot vragen om een gerichte filterstrategie.
          </p>
        </div>

        <QuickAnswer answer="Een woonboot met walwateraansluiting heeft vergelijkbare waterkwaliteit als een appartement, maar met extra risicos: biofilm in slangen, sediment en bij oude boten loodleidingen. Een compact osmosesysteem (20x40 cm) past onder elk aanrecht en verwijdert alle relevante verontreinigingen inclusief meer dan 95% lood." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Woonboot versus vaarboot: andere watereisen
        </h2>
        <p className="text-gray-700 mb-4">
          Een woonboot verschilt fundamenteel van een vaarboot of jacht als het gaat om watervoorziening. De meeste woonboten in Nederland zijn permanent aangesloten op het gemeentelijke drinkwaternet via de oever. Dit betekent:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Geen watertank nodig:</strong> U heeft doorlopend stromend water, net als in een huis of appartement.</li>
          <li><strong>Walstroomaansluiting:</strong> U kunt gewone huishoudelijke waterfilters gebruiken die op 230V werken.</li>
          <li><strong>Gelijkwaardige rechten:</strong> Als woonbootbewoner op het gemeentelijke net heeft u wettelijk recht op drinkwater van dezelfde kwaliteit als huishoudens op het vaste land.</li>
          <li><strong>Geen marine watermaker nodig:</strong> U hoeft geen zeewater te ontzilten of regenwater te behandelen als primaire waterbron.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Het waterfilterprobleem van een woonboot lijkt daarmee op dat van een appartement, maar met een paar specifieke aandachtspunten die we hieronder bespreken.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vier uitdagingen van waterfiltratie op een woonboot
        </h2>

        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Lange slangverbinding langs de oever</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Het water legt na de watermeter nog een traject af via een slang langs de oever naar de boot. Slangen van rubber of kunststof die buiten liggen, kunnen in de zomerhitte uitlogen en bijdragen aan smaak- en geurafwijkingen. Biofilm groeit in slangen die regelmatig stilstaan. Een sedimentfilter aan het begin van de slangaansluiting is een eerste, goede maatregel.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Lood- en koperleidingen in oude boten</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Woonboten gebouwd voor 1975 kunnen loodleidingen of loodgesoldeerde koperen verbindingen hebben. Dit is hetzelfde probleem als bij woningen van voor 1960 op het vaste land. Lood lost op in water, vooral bij stilstaand water en bij lager pH. Een osmosefilter verwijdert &gt;95% van het lood en is de meest praktische bescherming als leiding vervanging lastig is in een boot.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Variabele waterhardheid per locatie</h3>
            </div>
            <p className="text-gray-700 text-sm">
              De waterhardheid in Nederland varieert per gemeente van zacht (Zeeland, Groningen) tot hard (Limburg, Utrecht). Als u uw woonboot verplaatst naar een andere ligplaats, kan de waterhardheid sterk veranderen. Een osmosesysteem geeft altijd zacht, onthard water ongeacht de bronhardheid.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Beperkte ruimte onder het aanrecht</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Woonboten hebben dikwijls een kleinere keuken dan een gemiddelde woning. Compacte osmosesystemen (20&times;40 cm zonder drukvat) passen ook in de kleinste aanrechtkasten. Kies voor een systeem zonder warmwaterboiler als u uitsluitend koud gefilterd water wilt, dit scheelt aanzienlijk in formaat.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filterstrategie voor een woonboot
        </h2>
        <p className="text-gray-700 mb-4">
          De meest effectieve aanpak voor een woonboot werkt in twee stappen:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Sedimentfilter aan de inlaat (50 µm):</strong> Monteer dit filter op het punt waar de slang de boot binnenkomt, voor de watertank of het leidingwerk. Het vangt grove deeltjes, slibdeeltjes en schilfers op en beschermt de rest van uw installatie.</li>
          <li><strong>Koolstofblokfilter of compact osmosesysteem in de keuken:</strong> Dit is de tweede barriere voor drinkwater specifiek. Het verwijdert chloor, geur, eventuele organische restanten en bij osmose ook lood, nitraat en andere opgeloste stoffen.</li>
        </ol>
        <p className="text-gray-700 mb-6">
          Voor woonboten met oudere leidingen is een osmosesysteem sterk aan te bevelen boven alleen een koolstoffilter, vanwege de loodproblematiek.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Compact osmosesysteem: ook geschikt voor kleine ruimtes
        </h2>
        <p className="text-gray-700 mb-4">
          Een moderne compact onder-aanrecht osmose-unit zonder drukvat heeft een formaat van circa 20&times;40 cm en een hoogte van 35 cm. Dit is kleiner dan een gemiddeld aanrechtblok van 50&times;50 cm. U heeft ruimte genoeg in vrijwel elke woonbootkeuken.
        </p>
        <p className="text-gray-700 mb-4">
          De installatie vereist:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Een aansluiting op de koude watertoevoer (T-stuk met afsluitventiel)</li>
          <li>Een afvoer voor het concentraat (naar de gootsteenafvoer)</li>
          <li>Een klein gat (12 mm) in het aanrechtblad voor de osmosekraan</li>
          <li>Geen stroomaansluiting nodig voor het basis osmosemembraan</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          4-in-1 kokend waterkraan voor de woonboot
        </h2>
        <p className="text-gray-700 mb-4">
          Een 4-in-1 kokend waterkraan is voor een woonboot een bijzonder slimme investering. U bespaart de ruimte van een aparte waterkoker en een extra filterkraan, want u heeft gefilterd koud drinkwater, warm water en direct kokend water allemaal uit dezelfde kraan.
        </p>
        <p className="text-gray-700 mb-6">
          De ingebouwde boiler (2-4 liter) heeft een standby-verbruik van circa 10-30W en past zonder moeite in een kleine onderkast. Gecombineerd met een osmosesysteem filtert de kokend waterkraan ook het kokende water, wat ideaal is voor thee, koffie en babyvoeding. Controleer wel dat uw walstroomaansluiting het vermogen van de boiler aankan (circa 2.200W tijdens verhitten).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Regelgeving: uw rechten als woonbootbewoner
        </h2>
        <p className="text-gray-700 mb-6">
          In Nederland is een woonboot die is aangesloten op het gemeentelijke drinkwaternet wettelijk gelijkgesteld aan een reguliere woning voor wat betreft de drinkwaterkwaliteit. U heeft recht op water dat voldoet aan het Drinkwaterbesluit (2011), inclusief normen voor lood, bacterien, nitraat en alle andere parameters. Als u vermoedt dat uw watermaatschappij niet aan deze normen voldoet, kunt u een klacht indienen bij de Inspectie Leefomgeving en Transport (ILT).
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/beste-waterfilter/woonboot" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Beste waterfilter voor woonboot</h3>
              <p className="text-sm text-gray-600">Overzicht van de beste waterfilters speciaal geschikt voor gebruik op een woonboot.</p>
            </Link>
            <Link href="/waterfilter/tiny-house" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor tiny house</h3>
              <p className="text-sm text-gray-600">Compacte waterfilteroplossingen voor tiny houses en kleine woonruimtes.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose uitgelegd</h3>
              <p className="text-sm text-gray-600">Hoe werkt omgekeerde osmose en waarom is het de meest complete waterfiltertechniek?</p>
            </Link>
            <Link href="/waterfilter/reisfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Reisfilter voor onderweg</h3>
              <p className="text-sm text-gray-600">Draagbare waterfilters voor op reis en als reserveoplossing bij tijdelijke wateronderbreking.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over waterfilters op een woonboot</h2>
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
          <Link href="/waterfilter/boot-jacht" className="text-[#005F8A] underline">waterfilter voor boot en jacht</Link>,{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link> en{' '}
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kraan vergelijken</Link>.
        </p>
      </main>
    </>
  );
}
