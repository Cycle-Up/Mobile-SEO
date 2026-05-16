import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterkwaliteit testen: hoe meet je de kwaliteit van je kraanwater?',
  description:
    'Test uw waterkwaliteit thuis met een TDS-meter, teststrips of laat het analyseren door een gecertificeerd lab. Stap-voor-stap gids voor waterkwaliteitstests in Nederland.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterkwaliteit/test' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe test ik de kwaliteit van mijn kraanwater thuis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een basistest thuis zijn drie methoden beschikbaar: (1) TDS-meter (circa 10-30 euro) meet totaal opgeloste vaste stoffen in seconden via dompelen in water; (2) teststrips (15-40 euro) meten hardheid, chloor, nitraat en pH tegelijk via kleurverandering; (3) elektronische testkit (50-120 euro) geeft nauwkeuriger resultaten voor hardheid, pH, chloor en soms lood. Voor betrouwbare resultaten inclusief bacterien, PFAS en zware metalen is een professionele labanalyse nodig (50-300 euro afhankelijk van het pakket).',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat meet een TDS-meter precies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een TDS-meter (Total Dissolved Solids) meet de totale hoeveelheid opgeloste vaste stoffen in water, uitgedrukt in mg/L of ppm (parts per million). Dit omvat alle opgeloste ionen: calcium, magnesium, natrium, kalium, nitraten, sulfaten en andere zouten. Een waarde van 50-500 mg/L is normaal voor Nederlands leidingwater. Wat een TDS-meter NIET meet: bacterien, virussen, PFAS, pesticiden, medicijnresten of andere organische verbindingen. Een hoge TDS-waarde kan duiden op hard water maar zegt niets over veiligheid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waar stuur ik een watermonster naartoe voor laboratoriumanalyse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Nederland zijn meerdere gecertificeerde laboratoria beschikbaar voor wateranalyse: Kiwa Technology (kiwa.com), SGS Intron (sgs.com/nl), Eurofins (eurofins.nl), AQUON (aquon.nl). U kunt een watermonster per post versturen in steriele monsterflessen die het lab verstrekt, of een monteur ter plaatse laten meten. Sommige waterbedrijven en GGD-en bieden ook (gratis of goedkope) waterkwaliteitstests aan voor specifieke vragen zoals loodmeting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe neem ik een correct watermonster voor loodonderzoek?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor loodonderzoek zijn er twee standaard monsternameprotocollen: (1) EERSTE liter (ochtendmonster): neem de eerste liter water direct bij het openen van de kraan na een nacht stilstand. Dit geeft de hoogste loodconcentratie omdat lood gedurende de nacht uit leidingen en koppelingen is uitgeloogd. (2) DOORGESPOELD monster: spoel de kraan 2 minuten door en neem dan een monster. Dit simuleert normaal gebruik. Voor risicobeoordelingsdoeleinden is het ochtendmonster het meest representatief. Gebruik altijd de steriele fles van het lab en label met adres, datum, tijd en taplocatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een professionele waterkwaliteitstest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De kosten voor professionele wateranalyse variaren sterk per omvang van het pakket: basispakket (20 parameters inclusief bacterien, hardheid, nitraat, pH) kost 50-80 euro; uitgebreid pakket (60 of meer parameters inclusief PFAS, zware metalen, pesticiden) kost 150-300 euro. Sommige GGD-en bieden gratis of sterk gesubsidieerde tests aan voor lood bij woningen gebouwd voor 1960. Waterbedrijven doen soms gratis specifieke tests op verzoek, met name voor lood en bacterien.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn watertest-strips betrouwbaar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Watertest-strips geven een indicatieve meting met matige nauwkeurigheid. Ze zijn nuttig voor het detecteren van grove afwijkingen in hardheid, chloorgehalte, nitraat en pH, maar zijn niet geschikt voor nauwkeurige concentratiemetingen. De kleurschaal is subjectief te interpreteren en de gevoeligheid is beperkt: lage concentraties van verontreinigingen worden niet opgepikt. Voor beslissingen over filteraankopen of gezondheidsrisicos is een professionele labanalyse betrouwbaarder. Strips zijn wel handig voor regelmatige controle nadat u al een gedetailleerd labrapport heeft.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mijn TDS is hoog -- is mijn water dan ongezond?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niet per se. Een hoge TDS-waarde in Nederlands leidingwater duidt vrijwel altijd op hard water (hoge calcium- en magnesiumconcentraties), niet op gevaarlijke verontreinigingen. Calcium en magnesium zijn geen gevaar voor de gezondheid en worden door de WHO zelfs als gunstig voor het hart beschouwd. TDS-waarden van 300-600 mg/L zijn normaal in harde watergebieden zoals Limburg. Hard water is wel vervelend voor koffiezetapparaten, waterkokers en leidingen door kalkafzetting. Een omgekeerde osmosefilter verlaagt TDS drastisch door nagenoeg alle opgeloste stoffen te verwijderen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe interpreteer ik de resultaten van een waterkwaliteitstest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij het interpreteren van waterkwaliteitsresultaten vergelijkt u de gemeten waarden met de wettelijke normen uit het Drinkwaterbesluit en de EU Drinkwaterrichtlijn. Uw laboratorium levert doorgaans een rapport met drie kolommen: de gemeten waarde, de wettelijke maximumwaarde, en een beoordeling (voldoet/voldoet niet). Overschrijding van een norm is reden voor actie. Bij twijfel kunt u contact opnemen met uw waterbedrijf, GGD of de ILT. Als blijkt dat lood, PFAS of andere stoffen verhoogd zijn, is een omgekeerde osmosefilter als directe maatregel de meest effectieve thuisoplossing.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterkwaliteit testen: hoe meet je de kwaliteit van je kraanwater?',
  description:
    'Test uw waterkwaliteit thuis met een TDS-meter, teststrips of laat het analyseren door een gecertificeerd lab. Stap-voor-stap gids voor waterkwaliteitstests in Nederland.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterkwaliteit/test',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterkwaliteitTestPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterkwaliteit', item: 'https://waterfilterplatform.nl/waterkwaliteit' },
              { '@type': 'ListItem', position: 3, name: 'Waterkwaliteit testen', item: 'https://waterfilterplatform.nl/waterkwaliteit/test' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/waterkwaliteit" className="hover:underline">Waterkwaliteit</Link> &rsaquo;{' '}
            <span>Waterkwaliteit testen</span>
          </nav>

          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterkwaliteit testen: hoe meet je de kwaliteit van je kraanwater?
          </h1>

          <QuickAnswer answer="Het waterkwaliteitsrapport van uw drinkwaterbedrijf meet de bronkwaliteit, niet uw eigen kraan. Lood en koper uit huisleidingen worden niet meegemeten. Thuis testen kan met TDS-meter (indicatief), teststrips (matig) of een professionele labanalyse bij Kiwa, Eurofins of AQUON (50-300 euro voor betrouwbare resultaten)." />
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 py-8">

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom zelf testen als er al een waterkwaliteitsrapport is?
        </h2>
        <p className="text-gray-700 mb-4">
          Veel mensen denken dat het jaarlijkse rapport van hun drinkwaterbedrijf de kwaliteit van hun kraanwater weerspiegelt. Dat is slechts gedeeltelijk juist. Het waterbedrijf meet de kwaliteit van het water <strong>aan het einde van hun distributienetwerk</strong>, vlak voor het uw huis binnenkomt. Wat er daarna gebeurt in uw huisinstallatie, wordt niet gemeten.
        </p>
        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
          <h3 className="font-semibold text-[#003F5C] mb-2">Wat het waterbedrijfsrapport NIET meet</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
            <li><strong>Lood uit loodleidingen</strong> in woningen gebouwd voor 1960 &mdash; lood lost op in stilstaand water in de leidingen</li>
            <li><strong>Koper uit koperen leidingen</strong> in oudere woningen met zacht water</li>
            <li><strong>Bacterien door biofilm</strong> in leidingen die lang niet zijn gebruikt</li>
            <li><strong>Verontreinigingen door kraan of waterkoker</strong> die niet regelmatig worden onderhouden</li>
          </ul>
        </div>
        <p className="text-gray-700 mb-6">
          Zelf testen geeft u inzicht in de werkelijke kwaliteit van het water dat u consumeert. Dit is met name belangrijk als uw woning oud is, als u zuigelingenvoeding bereidt, of als u in een bekend PFAS-risicogebied woont.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Overzicht van testmethoden
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Wat meet het</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Nauwkeurigheid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">TDS-meter</td>
                <td className="border border-gray-300 px-3 py-2">Totaal opgeloste stoffen</td>
                <td className="border border-gray-300 px-3 py-2">&euro;10-30</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Laag (geen specificatie)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-semibold">Teststrips (multi)</td>
                <td className="border border-gray-300 px-3 py-2">Hardheid, chloor, nitraat, pH</td>
                <td className="border border-gray-300 px-3 py-2">&euro;15-40</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Matig</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Elektronische testkit</td>
                <td className="border border-gray-300 px-3 py-2">Hardheid, pH, chloor, lood</td>
                <td className="border border-gray-300 px-3 py-2">&euro;50-120</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Matig-goed</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-semibold">Labanalyse basis</td>
                <td className="border border-gray-300 px-3 py-2">20 parameters incl. bacterien</td>
                <td className="border border-gray-300 px-3 py-2">&euro;50-80</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Hoog</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Labanalyse uitgebreid</td>
                <td className="border border-gray-300 px-3 py-2">60+ parameters incl. PFAS, lood</td>
                <td className="border border-gray-300 px-3 py-2">&euro;150-300</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Zeer hoog</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-semibold">GGD/waterbedrijf test</td>
                <td className="border border-gray-300 px-3 py-2">Specifieke parameters op verzoek</td>
                <td className="border border-gray-300 px-3 py-2">Soms gratis</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Hoog</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gecertificeerde Nederlandse laboratoria
        </h2>
        <p className="text-gray-700 mb-4">
          Voor betrouwbare wateranalyse kunt u terecht bij de volgende geaccrediteerde laboratoria in Nederland:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="border border-gray-200 rounded-xl p-4">
            <div className="font-semibold text-[#003F5C]">Kiwa Technology</div>
            <p className="text-sm text-gray-600 mt-1">Geaccrediteerd wateranalyselaboratorium. Gespecialiseerd in drinkwater, grondwater en proceswater. Monsternames ter plaatse mogelijk.</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <div className="font-semibold text-[#003F5C]">SGS Intron</div>
            <p className="text-sm text-gray-600 mt-1">Internationaal laboratoriumnetwerk met Nederlandse vestigingen. Uitgebreide waterpakketten inclusief PFAS-analyses.</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <div className="font-semibold text-[#003F5C]">Eurofins</div>
            <p className="text-sm text-gray-600 mt-1">Groot Europees labnetwerk. Biedt consumentenpakketten aan met steriele monsterflessen per post. Online resultaten binnen 5-10 werkdagen.</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <div className="font-semibold text-[#003F5C]">AQUON</div>
            <p className="text-sm text-gray-600 mt-1">Gespecialiseerd in water- en milieuanalyse in de regio Utrecht en omgeving. Snel en betaalbaar voor basispakketten.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe een goed watermonster nemen: stap voor stap
        </h2>
        <p className="text-gray-700 mb-4">
          De manier waarop u een watermonster neemt, bepaalt grotendeels de betrouwbaarheid van de resultaten. Volg deze stappen:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Kies het juiste protocol:</strong> voor normaal gebruik spool de kraan 2 minuten door. Voor loodmeting bij een oud huis: neem het eerste water van de ochtend zonder vooraf te spoelen.
          </li>
          <li>
            <strong>Gebruik de steriele monsterfles van het lab.</strong> Vul nooit een gewone fles &mdash; zelfs een schone fles kan de meting beinvloeden door bacterien of chemische resten.
          </li>
          <li>
            <strong>Laat de kraan stromen</strong> op normale temperatuur. Vul de fles direct uit de kraan zonder de rand te raken. Laat geen luchtbellen in de fles.
          </li>
          <li>
            <strong>Sluit de fles direct</strong> af na vulling. Bewaar koel (koelkast, niet bevriezen) en verstuur zo snel mogelijk &mdash; ideaal dezelfde dag.
          </li>
          <li>
            <strong>Label de fles</strong> met: volledig adres, datum en tijdstip van monstername, taplocatie (bijv. keuken koud), type monstername (doorgespoeld of eerste liter).
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Loodrisico: huis gebouwd voor 1960
        </h2>
        <p className="text-gray-700 mb-4">
          Woningen gebouwd voor 1960 hebben mogelijk nog loodleidingen of lood-soldeerpunten in de huisinstallatie. Lood lost op in stilstaand water, met name in zacht water. Het nemen van de <strong>eerste liter ochtendwater</strong> is essentieel voor een representatieve loodmeting, omdat dit water de nacht in de leidingen heeft stilgestaan en de meeste loodconcentratie heeft opgenomen.
        </p>
        <p className="text-gray-700 mb-6">
          Ter vergelijking: na 2 minuten doorspoelen kan de loodconcentratie tien keer lager zijn dan in het eerste ochtendwater. Als u een normaal doorspoelmonster neemt, zult u mogelijk een vals laag loodgehalte meten dat de werkelijke blootstelling onderschat.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          TDS-meter gebruiken: praktische tips
        </h2>
        <p className="text-gray-700 mb-4">
          Een TDS-meter is de snelste manier om een eerste indruk te krijgen van uw waterkwaliteit. Zo gebruikt u hem correct:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Laat de kraan 30 seconden lopen voor het meten</li>
          <li>Dompel de meetpennen 2-3 cm in het water</li>
          <li>Wacht tot het getal stabiel is (5-10 seconden)</li>
          <li>Een getal van 50-500 mg/L is normaal voor Nederlands leidingwater</li>
          <li>Hard water (Limburg, Zeeuws-Vlaanderen): verwacht 300-600 mg/L</li>
          <li>Zacht water (Zeeland, Noord-Holland): verwacht 50-150 mg/L</li>
        </ul>
        <p className="text-gray-700 mb-6">
          <strong>Belangrijk:</strong> een hoge TDS-waarde is geen reden tot bezorgdheid als het rapport van uw waterbedrijf normaal is. TDS meet niet of water bacterien, PFAS of pesticiden bevat. Gebruik de TDS-meter als aanvulling op, niet als vervanging van, professionele analyses.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Na de test: wat nu?
        </h2>
        <p className="text-gray-700 mb-4">
          Als uw testresultaten vragen oproepen, zijn er drie stappen:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Neem contact op</strong> met uw waterbedrijf of GGD voor uitleg bij hoge waarden. Zij kunnen context bieden en aanvullend onderzoek adviseren.</li>
          <li><strong>Raadpleeg de normen</strong> in het Drinkwaterbesluit via rivm.nl voor informatie over maximale waarden per parameter.</li>
          <li><strong>Overweeg een filter</strong> als directe maatregel bij overschrijdingen. Een osmosefilter is de meest complete oplossing voor lood, PFAS, nitraat en andere verontreinigingen.</li>
        </ol>

        <p className="text-gray-700 mb-6">
          Meer over waterkwaliteit in Nederland? Lees ons overzicht van{' '}
          <Link href="/waterkwaliteit/nederland" className="text-[#005F8A] underline">drinkwaterkwaliteit per regio</Link>.
          Informatie over specifieke stoffen vindt u op onze pagina over{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
          Voor de meest complete filtratie-oplossing lees onze uitleg over{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose waterfilters</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over waterkwaliteit testen</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>
      </main>
    </>
  );
}
