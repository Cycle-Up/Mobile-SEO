import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: "Lood in leidingwater: risico's, loden leidingen en het beste waterfilter",
  description:
    "Lood in leidingwater is schadelijk bij elke concentratie. EU-norm wordt aangescherpt naar 5 microgram per liter in 2036. Huizen van voor 1960 hebben mogelijk.",
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/lood' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe weet ik of ik loden leidingen heb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Woont u in een huis van voor 1960? Dan is de kans op loden leidingen aanzienlijk. Controleer de buizen onder het aanrecht en bij de watermeter: lood is grijskleurig, zacht en glanzend als u er met een nagel over krast. Koper is roodbruin, staal is glanzend zilver. U kunt ook een loodwatertest laten uitvoeren door een KIWA-gecertificeerd laboratorium voor 40-100 euro. Bij twijfel informeert u bij uw drinkwaterbedrijf of de aansluitleiding van lood is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de EU-norm voor lood in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De huidige EU-drinkwaterrichtlijn (2013) stelt de norm op 10 microgram per liter (microg/L). De herziene EU-richtlijn (2020/2184) verlaagt deze norm naar 5 microg/L per 2036. De WHO adviseert een zo laag mogelijke concentratie en stelt dat er geen veilige grenswaarde bestaat voor lood in drinkwater, met name voor kinderen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk waterfilter verwijdert lood het beste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een omgekeerde-osmosefilter (RO) verwijdert 95-99% van het lood en is de meest effectieve thuisoplossing. Actief koolfilters met NSF/ANSI 53-certificering verwijderen 80-90% van het lood en kunnen dienen als aanvulling of tijdelijke maatregel. Destillatie verwijdert 99%+ van alle zware metalen. Waterontharders zijn niet effectief als primaire maatregel tegen lood.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is lood in drinkwater gevaarlijk voor kinderen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, lood is bijzonder gevaarlijk voor kinderen onder 6 jaar en ongeboren kinderen. Zelfs lage concentraties van minder dan 1 microgram per liter zijn geassocieerd met een meetbare IQ-verlaging bij chronische blootstelling. Lood is een neurotoxine zonder veilige drempelwaarde: elk beetje extra blootstelling vergroot het risico op ontwikkelingsschade. De CDC (VS) en RIVM adviseren voor kinderen een streefwaarde van zo laag als redelijkerwijs haalbaar (ALARA).',
      },
    },
    {
      '@type': 'Question',
      name: 'Helpt het om de kraan te laten doorlopen tegen lood?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, laat altijd 30 seconden tot 2 minuten koud water doorlopen voor gebruik, met name na een periode van stilstand (nacht of weekend). Lood lost het snelst op in stilstaand water dat in contact is geweest met loden buizen. Het doorlopen van de kraan vernieuwt het water in de leidingen en verlaagt de loodconcentratie aanzienlijk. Dit is een interimoplossing; structurele vervanging van loden leidingen of installatie van een osmosefilter geeft meer zekerheid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mag ik warm kraanwater gebruiken voor koken als ik loden leidingen heb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Gebruik nooit warm kraanwater voor koken, het zetten van babyvoeding of het drinken als u vermoedt dat uw leidingen lood bevatten. Lood lost aanzienlijk sneller op in warm water dan in koud water. Gebruik altijd koud water en breng dit eventueel zelf aan de kook. Dit geldt ook voor het aanmaken van babymelkpoeder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost het om loden leidingen te laten vervangen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De kosten voor het vervangen van loden leidingen varieren sterk: bij een eenvoudige situatie met goed toegankelijke leidingen kost het 500-1.000 euro. Bij uitgebreide binneninstallaties of moeilijk bereikbare buizen kan het oplopen tot 3.000 euro of meer. Als u huurt, is de verhuurder wettelijk verplicht om loden leidingen te saneren op grond van het Bouwbesluit 2012. Meld loden leidingen dus altijd bij uw verhuurder of woningcorporatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel woningen in Nederland hebben nog loden leidingen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Schattingen van het CBS (2020) wijzen op 200.000 tot 400.000 woningen in Nederland die nog loden aansluitleidingen of binnenleidingen hebben. Het gaat voornamelijk om woningen van voor 1960 in stedelijke gebieden. Drinkwaterbedrijven vervangen de loden aansluitleidingen (van straat tot watermeter) actief; de binneninstallatie (van watermeter tot kraan) is de verantwoordelijkheid van de eigenaar of verhuurder.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: "Lood in leidingwater: risico's, loden leidingen en het beste waterfilter",
  description:
    'Lood in leidingwater is schadelijk bij elke concentratie. Osmosefilter verwijdert 95-99% van het lood. Structurele oplossing is vervanging van loden.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/lood',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterLoodPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Lood in leidingwater', item: 'https://waterfilterplatform.nl/waterfilter/lood' },
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
          <span>Lood in leidingwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Lood in leidingwater: risico&apos;s, loden leidingen en het beste waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Lood in leidingwater is neurotoxisch en schadelijk bij elke concentratie, met name voor
            kinderen. In Nederland bevatten 200.000&ndash;400.000 woningen nog loden leidingen. Een
            osmosefilter verwijdert 95&ndash;99% van het lood en biedt de sterkste huishoudbescherming
            zolang loden leidingen niet vervangen zijn.
          </p>
        </section>

        <QuickAnswer answer="Lood in leidingwater is neurotoxisch zonder veilige grenswaarde. Woningen van voor 1960 kunnen loden leidingen hebben. Laat altijd 30 seconden koud water doorlopen voor gebruik. Een osmosefilter verwijdert 95-99% van het lood. Structurele oplossing is vervanging van loden leidingen door een gecertificeerde loodgieter." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is lood en waarom zit het in leidingwater?
        </h2>
        <p className="text-gray-700 mb-4">
          Lood (Pb, atoomgetal 82) is een zwaar metaal dat van nature vrijwel afwezig is in
          drinkwater op het moment dat het het waterleidingbedrijf verlaat. De verontreiniging
          ontstaat onderweg: als drinkwater door loden buizen stroomt, lost een kleine hoeveelheid
          lood op in het water. Dit heet uitloging.
        </p>
        <p className="text-gray-700 mb-4">
          Tot ver in de twintigste eeuw was lood het standaardmateriaal voor huisaansluitingen en
          binnenleidingen vanwege de makkelijke verwerkbaarheid en corrosiebestendigheid. Pas nadat
          de gezondheidsrisico&apos;s goed gedocumenteerd waren, werd lood in nieuwe installaties verboden.
          In Nederland werd het gebruik van loden drinkwaterleidingen in nieuwbouw afgeraden vanaf
          de jaren 1960 en formeel verboden bij nieuwbouw met ingang van 1960&ndash;1970, afhankelijk
          van de gemeente en het bouwbesluit.
        </p>
        <p className="text-gray-700 mb-6">
          De uitloging van lood is het hoogst in twee situaties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Stilstaand water:</strong> na een nacht of weekend stilstand is de loodconcentratie
            in de eerste liters water het hoogst. Laat altijd de kraan 30 seconden tot 2 minuten
            doorlopen voor gebruik.
          </li>
          <li>
            <strong>Warm water:</strong> lood lost aanzienlijk sneller op in warm dan in koud water.
            Gebruik nooit warm kraanwater voor koken, babyvoeding of drinken als u loden leidingen
            vermoedt.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Loden leidingen in Nederland: omvang en situatie
        </h2>
        <p className="text-gray-700 mb-4">
          Schattingen van het CBS (2020) wijzen op <strong>200.000 tot 400.000 woningen</strong> in
          Nederland met nog loden aansluitleidingen of binnenleidingen. Het gaat vrijwel uitsluitend
          om woningen gebouwd voor 1960, met name in oudere stadswijken van Amsterdam, Rotterdam,
          Den Haag, Utrecht en andere historische binnensteden.
        </p>
        <p className="text-gray-700 mb-4">
          Er is onderscheid tussen twee typen loden leidingen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Aansluitleiding (van straat tot watermeter):</strong> dit stuk valt onder de
            verantwoordelijkheid van het drinkwaterbedrijf. Bedrijven als Waternet, Oasen en Dunea
            vervangen loden aansluitleidingen actief; in veel gemeenten is dit al grotendeels
            afgerond.
          </li>
          <li>
            <strong>Binneninstallatie (van watermeter tot kraan):</strong> dit valt onder de
            verantwoordelijkheid van de woningbezitter of verhuurder. Hier is de sanering minder
            ver gevorderd. Bij huurwoningen is de verhuurder op grond van het Bouwbesluit 2012
            verplicht loden leidingen te saneren.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Niet alle woningen van voor 1960 hebben loden leidingen: in sommige gevallen zijn de
          leidingen al eerder vervangen bij een renovatie of verbouwing. Een visuele inspectie
          of watertest geeft uitsluitsel.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm en WHO-advies voor lood in drinkwater
        </h2>
        <p className="text-gray-700 mb-4">
          De huidige <strong>EU-drinkwaterrichtlijn (2013/51/EG)</strong> stelt de grenswaarde voor
          lood op <strong>10 microgram per liter (&micro;g/L)</strong>. De herziene EU-drinkwaterrichtlijn
          (2020/2184) verlaagt deze norm naar <strong>5 &micro;g/L</strong> per 2036. Nederland moet
          deze aanscherping voor die datum implementeren.
        </p>
        <p className="text-gray-700 mb-4">
          De <strong>WHO</strong> stelt expliciet dat er <strong>geen veilige grenswaarde</strong> bestaat
          voor lood in drinkwater, met name voor kinderen. De WHO adviseert een beleid van
          &quot;zo laag als redelijkerwijs mogelijk&quot; (ALARA: As Low As Reasonably Achievable).
          Epidemiologisch onderzoek toont aan dat zelfs onder 1 &micro;g/L chronische blootstelling
          bij kinderen een meetbare IQ-verlaging veroorzaakt.
        </p>
        <p className="text-gray-700 mb-6">
          In de praktijk betekent dit dat zelfs woningen waarbij de officieel gemeten
          loodconcentratie onder de huidige norm van 10 &micro;g/L valt, niet per definitie veilig
          zijn voor zuigelingen en jonge kinderen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsrisico&apos;s van lood
        </h2>
        <p className="text-gray-700 mb-4">
          Lood is een neurotoxine dat in het menselijk lichaam niet wordt afgebroken. Het hoopt
          zich op in botten en hersenen. De voornaamste gezondheidseffecten:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Kinderen (0&ndash;6 jaar):</strong> IQ-verlaging bij concentraties onder 1 &micro;g/L
            (chronische blootstelling); gedragsproblemen, vertraagde motorische ontwikkeling,
            verminderd leervermogen. Er is geen drempelwaarde: elk extra microgram per liter
            extra blootstelling verhoogt het risico.
          </li>
          <li>
            <strong>Zwangere vrouwen:</strong> lood passeert de placenta. Blootstelling tijdens
            zwangerschap verhoogt het risico op vroeggeboorte, laag geboortegewicht en
            neurologische ontwikkelingsschade bij het kind.
          </li>
          <li>
            <strong>Volwassenen:</strong> bij chronisch hogere blootstelling zijn er verbanden
            met hypertensie, nierschade en cardiovasculaire aandoeningen. De effecten zijn minder
            acuut dan bij kinderen, maar wel cumulatief.
          </li>
          <li>
            <strong>Bloedarmoede:</strong> lood remt de aanmaak van hemoglobine en kan leiden tot
            bloedarmoede bij langdurige blootstelling boven 10 &micro;g/L in bloed.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          In Nederland lopen de acuut gemeten loodconcentraties in leidingwater doorgaans ver onder
          de huidige norm, maar piekconcentraties in de eerste liters stilstaand water uit loden
          buizen kunnen de norm overschrijden.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe herkent u loden leidingen?
        </h2>
        <p className="text-gray-700 mb-4">
          Visuele inspectie is een eerste stap. Loden buizen zijn te herkennen aan:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Kleur:</strong> grijsachtig, donkerder dan koper (roodbruin) of staal (zilver)
          </li>
          <li>
            <strong>Zachtheid:</strong> kras met uw nagel over de buis: lood laat een glanzende,
            zilverkleurige streep achter. Koper en staal zijn harder.
          </li>
          <li>
            <strong>Vorm:</strong> loden buizen hebben vaak een iets gebobbelde of onregelmatige
            wand en zijn flexibeler dan stalen buizen.
          </li>
          <li>
            <strong>Locatie:</strong> controleer met name de buizen direct achter de watermeter,
            de toevoer naar de gootsteen en de leidingen in de meterkast.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Twijfelt u na visuele inspectie? Een watertest geeft zekerheid.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Lood in water testen
        </h2>
        <p className="text-gray-700 mb-4">
          Laat uw water testen door een geaccrediteerd laboratorium. Stapsgewijze procedure:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            Neem een monster van het <strong>eerste watermonster</strong> direct uit de kraan
            (zonder doorlopen) &mdash; dit geeft de worstcase-concentratie.
          </li>
          <li>
            Neem een tweede monster <strong>na 2 minuten doorlopen</strong> &mdash; dit geeft de
            concentratie na spoelen.
          </li>
          <li>
            Stuur beide monsters naar een KIWA-gecertificeerd laboratorium (Kiwa, SGS Intron,
            Eurofins). Kosten: <strong>40&ndash;100 euro</strong> per loodanalyse via ICP-MS methode.
          </li>
        </ol>
        <p className="text-gray-700 mb-6">
          Voor een volledig beeld van uw waterkwaliteit is een breder{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteitsonderzoek</Link>{' '}
          te overwegen dat ook cadmium, nikkel, koper en bacteriologische parameters omvat (&euro;150&ndash;300).
          Uw drinkwaterbedrijf kan ook een gratis eerste indicatief onderzoek uitvoeren bij vermoeden
          van loden aansluitleidingen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filteropties voor loodverwijdering: vergelijkingstabel
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Loodverwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aanbeveling</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2">95&ndash;99%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;250&ndash;800</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Beste keuze</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief kool NSF 53-gecertificeerd</td>
                <td className="border border-gray-300 px-3 py-2">80&ndash;90%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;50&ndash;200</td>
                <td className="border border-gray-300 px-3 py-2">Aanvulling / interim</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Destillatie</td>
                <td className="border border-gray-300 px-3 py-2">99%+</td>
                <td className="border border-gray-300 px-3 py-2">&euro;100&ndash;300</td>
                <td className="border border-gray-300 px-3 py-2">Langzaam, energieintensief</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Waterontharder (ionenwisseling)</td>
                <td className="border border-gray-300 px-3 py-2">Partieel (&lt;60%)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;500&ndash;1.500</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Niet aanbevolen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Standaard filterkan</td>
                <td className="border border-gray-300 px-3 py-2">&lt;40%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;15&ndash;50</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Onvoldoende</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosefilter voor loodverwijdering
        </h2>
        <p className="text-gray-700 mb-4">
          Een{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde-osmosefilter</Link>{' '}
          is de meest effectieve huishoudbescherming tegen lood in drinkwater. Het RO-membraan
          heeft porieen van 0,0001 micron, terwijl loodionen een ionische diameter hebben van
          0,00024 micron. Loodionen worden voor 95&ndash;99% tegengehouden door het membraan.
        </p>
        <p className="text-gray-700 mb-4">
          Bij het kiezen van een osmosefilter voor loodverwijdering let u op:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>NSF/ANSI 58 certificering:</strong> dit certificeert specifiek dat het systeem
            voldoet aan testprotocollen voor verwijdering van zware metalen inclusief lood.
          </li>
          <li>
            <strong>Aantal filterstadia:</strong> een systeem met sedimentfilter + koolstofprefilter +
            RO-membraan + nafilter (4-traps) biedt afdoende bescherming. Een 5-traps systeem met
            remineralisatiefase voegt mineralen toe die bij osmosewater ontbreken.
          </li>
          <li>
            <strong>Geintegreerde kraan:</strong> een apart osmosekraantje naast de gewone kraan
            maakt het gebruik eenvoudiger en vermindert de kans op vergissingen.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Zie ons overzicht van{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilters voor thuis</Link>{' '}
          met adviezen per budgetcategorie en situatie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Interimmaatregelen terwijl u wacht op leidingvervanging
        </h2>
        <p className="text-gray-700 mb-4">
          Zolang loden leidingen nog niet vervangen zijn, zijn de volgende maatregelen effectief
          om de loodblootstelling te verminderen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            Laat elke ochtend en na langdurige afwezigheid <strong>30 seconden tot 2 minuten
            koud water doorlopen</strong> voordat u het drinkt of gebruikt voor koken.
          </li>
          <li>
            Gebruik <strong>nooit warm kraanwater</strong> voor het bereiden van eten, drinken
            of babyvoeding.
          </li>
          <li>
            Gebruik koud kraanwater uitsluitend na doorlopen, of installeer een{' '}
            <strong>NSF 53-gecertificeerd actief koolfilter</strong> op het kraanpunt waar u
            drinkwater en kookwater afneemt.
          </li>
          <li>
            Gebruik voor zuigelingen en jonge kinderen bij voorkeur <strong>gefilterd water
            of bronwater</strong> zolang de loodstatus van uw leidingen niet gecheckt is.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Meer informatie over verontreinigingen in leidingwater vindt u op de pagina over{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Structurele oplossing: leidingen laten vervangen
        </h2>
        <p className="text-gray-700 mb-4">
          De enige definitieve oplossing is het vervangen van loden leidingen door PVC, koper of
          roestvrij staal. Kosten en procedure:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Kosten binneninstallatie:</strong> 500&ndash;3.000 euro afhankelijk van de
            hoeveelheid leidingwerk, toegankelijkheid en regio. Een gecertificeerde loodgieter
            voert de werkzaamheden uit.
          </li>
          <li>
            <strong>Kosten aansluitleiding:</strong> vervanging van de loden aansluitleiding
            (straat tot watermeter) wordt uitgevoerd door het drinkwaterbedrijf, doorgaans
            kosteloos voor de bewoner als dit onderdeel van een planmatige sanering is.
          </li>
          <li>
            <strong>Huurwoning:</strong> de verhuurder is op grond van het Bouwbesluit 2012
            verplicht loden leidingen te saneren. Dien een schriftelijk verzoek in bij uw
            verhuurder of woningcorporatie. Als de verhuurder niet handelt, kunt u een klacht
            indienen bij de gemeente of de Huurcommissie.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Totdat de loden leidingen zijn vervangen, biedt een osmosefilter de sterkste dagelijkse
          bescherming voor uw gezin. Zie ook ons artikel over{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilters voor thuis</Link>{' '}
          voor een uitgebreid vergelijkingsoverzicht.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over lood in leidingwater
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
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteitstest</Link> en{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>
      </main>
    </>
  );
}
