import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Kokend Water Kraan Installeren: Stap-voor-Stap',
  description:
    'Stap-voor-stap installatie van een kokend water kraan: gereedschap, wateraansluiting, boiler plaatsen, elektrische aansluiting en de eerste ingebruikname. Inclusief 4-in-1 met osmose.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/installeren' },
  openGraph: {
    title: 'Kokend Water Kraan Installeren: Stap-voor-Stap',
    description:
      'Complete installatiegids voor een kokend water kraan thuis. Van voorbereiding tot eerste gebruik: wateraansluiting, boiler, elektra en speciale tips voor 4-in-1 met osmose filter.',
    url: 'https://waterfilterplatform.nl/kokend-water-kraan/installeren',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Kan ik een kokend water kraan zelf installeren?',
    answer:
      'Ja, de meeste kokend water kranen zijn ontworpen voor doe-het-zelf installatie. Zolang er al een koudwaterleiding en een geaard stopcontact (230V) onder het aanrecht aanwezig zijn, is een basisinstallatie in 1–2 uur te doen zonder loodgieter. Heb je geen aanrecht-stopcontact, moet er nieuw leidingwerk worden aangelegd of heb je een 4-in-1 kraan met ingebouwde osmose die ook een afvoeraansluiting nodig heeft? Dan is een loodgieter of installateur aan te raden.',
  },
  {
    question: 'Welke tools heb ik nodig voor de installatie?',
    answer:
      'Voor de meeste installaties: een stiftsleutel (of moersleutel), aanrechtboor met 35–38 mm gatenzaag of spiraalboor (voor het kraangat), een schroevendraaier, een emmer en een paar droogdoeken. Voor een 4-in-1 met osmose heb je ook een aanboorkraan (saddle valve) en aanvullende slangkoppelingen nodig. Raadpleeg altijd de handleiding van het specifieke model.',
  },
  {
    question: 'Hoe groot moet het gat in het aanrecht zijn?',
    answer:
      'De meeste kokend water kranen en 4-in-1 kranen vereisen een gat van 35 mm diameter. Sommige modellen hebben een gat van 38 mm of 52 mm nodig. Controleer de technische specificaties van uw kraan vóór het boren. Heeft u al een bestaand kraangat van 35–38 mm (van een ouder filterfilter of aparte osmosekraan)? Dan kunt u dat hergebruiken.',
  },
  {
    question: 'Moet ik de watertoevoer afsluiten voor de installatie?',
    answer:
      'Ja. Sluit altijd de koudwatertoevoer onder het aanrecht af vóór u iets loskoppelt of aansluit. Draai de hoekstopkraan of afsluitkraan voor de koudwaterleiding dicht. Als er geen lokale afsluitkraan aanwezig is, sluit dan de hoofdkraan van de woning af. Zet daarna een emmer of handdoek neer om restwater op te vangen.',
  },
  {
    question: 'Wat is het verschil bij installatie van een 4-in-1 kraan met osmose?',
    answer:
      'Een 4-in-1 kraan met ingebouwde omgekeerde osmose heeft een extra stap: het osmosemodule moet worden aangesloten op de koudwatertoevoer en op een afvoerleiding (voor het spoelwater van het membraan). Het spoelwater (ca. 0,5–2 liter per dag) moet naar het sifon of de afvoer worden geleid. Verder is de boiler van een 4-in-1 combinatiesysteem groter dan bij een eenvoudige kokendwaterboiler, en moet hij goed worden bevestigd aan de kast of muur.',
  },
];

const gereedschap = [
  {
    item: 'Stiftsleutel of verstelbare moersleutel',
    gebruik: 'Aandraaien van montagebeugel en aansluitingen onder het aanrecht',
  },
  {
    item: 'Gatenzaag 35–38 mm (of spiraalboor)',
    gebruik: 'Boren van het kraangat in het aanrecht (sla over als u een bestaand gat hergebruikt)',
  },
  {
    item: 'Schroevendraaier (plat + kruis)',
    gebruik: 'Bevestigen van klemmen, beugels en kabelgeleiders',
  },
  {
    item: 'Emmer en doeken',
    gebruik: 'Opvangen van restwater bij loskoppelen van bestaande leidingen',
  },
  {
    item: 'Teflontape (PTFE)',
    gebruik: 'Afdichten van schroefdraadverbindingen indien geen klempersverbinding wordt gebruikt',
  },
  {
    item: 'Waterpas (optioneel)',
    gebruik: 'Controleren of de boiler waterpas staat en niet scheef hangt',
  },
  {
    item: 'Boor-/zaagbescherming',
    gebruik: 'Beschermt het aanrechtblad bij het zagen van het kraangat',
  },
];

const installatieStappen = [
  {
    nr: 1,
    titel: 'Watertoevoer afsluiten',
    beschrijving:
      'Draai de koudwaterhoekstopkraan onder het aanrecht dicht (rechtsom = dicht). Heeft u geen aparte hoekstopkraan? Sluit dan de hoofdkraan van de woning af. Open daarna de bestaande keukenkraan om de waterdruk te ontlasten en het resterende water te laten afvloeien. Leg een handdoek of emmer klaar voor eventueel lekwater.',
    tip: 'Markeer de hoekstopkraan met een sticker zodat u hem snel vindt bij een noodsituatie.',
  },
  {
    nr: 2,
    titel: 'Bestaande installatie loskoppelen (indien aanwezig)',
    beschrijving:
      'Verwijder de bestaande keukenmixer of apart filterkraantje als dat in de weg zit of als u hetzelfde gat wil hergebruiken. Koppel de waterslangen los en berg ze op. Let op: bij een bestaand osmose systeem of filterkraan koppelt u ook de filterslangen en eventuele afvoerslang los. Sluit open leidinguiteinden af met dop of stop om morsen te voorkomen.',
    tip: 'Maak foto\'s van de bestaande situatie voor u iets loskoppelt — handig bij het opnieuw aansluiten.',
  },
  {
    nr: 3,
    titel: 'Kraangat boren of bestaand gat hergebruiken',
    beschrijving:
      'Controleer de technische specificaties van uw kokend water kraan voor de vereiste gatgrootte (meestal 35 mm). Gebruik een gatenzaag van de juiste maat. Boor altijd via een sjabloon of met tape over het aanrechtblad om scheuren in composiet of keramisch materiaal te voorkomen. Boor bij graniet of steen met een diamantboor en waterkoeling. Verwijder de snijkanten van het gat met schuurpapier en maak het gat stofvrij. Als er al een bestaand gat van de juiste maat aanwezig is, hoeft u niet te boren.',
    tip: 'Boor eerst een proefgat van 10 mm om de locatie te markeren, en vergroot dan met de gatenzaag.',
  },
  {
    nr: 4,
    titel: 'Kraan monteren in het aanrecht',
    beschrijving:
      'Steek de kraan van bovenaf door het gat in het aanrecht. Bevestig de montagebeugel, spatel en moer van onderaf zoals beschreven in de handleiding. Draai de montage-moer stevig aan met een stiftsleutel, maar overdrijf niet — te strak aandraaien kan het aanrechtblad beschadigen of de afdichting vervormen. Controleer of de kraan recht staat en stevig zit. Bij een 4-in-1 kraan heeft het uitloopgedeelte vaak een aparte kabelgeleider voor de drukknop of besturing.',
    tip: 'Gebruik de meegeleverde rubberen afdichtring of kraanpakking om lekkage te voorkomen.',
  },
  {
    nr: 5,
    titel: 'Watertoevoer aansluiten op de koudwaterleiding',
    beschrijving:
      'Sluit de koudwatertoevoerslang van de kokend water kraan aan op de koudwaterleiding. Bij de meeste systemen zit een T-koppeling of Y-koppeling tussen de hoekstopkraan en de bestaande mengkraan: de ene aftakking gaat naar de bestaande keukenkraan, de andere naar het nieuwe systeem. Sommige kokend water kranen worden direct op de hoekstopkraan of op een aparte aftapping aangesloten. Koppel de slangen stevig aan — handvast plus een kwartslag met een sleutel is voldoende voor persluisverbindingen.',
    tip: 'Gebruik altijd de meegeleverde slangen. Vervang nooit flexibele slangen van een kokendwatersysteem met generieke tuinslangen.',
  },
  {
    nr: 6,
    titel: 'Boiler plaatsen en aansluiten',
    beschrijving:
      'Plaats de boiler (het reservoir) in de kast onder het aanrecht. De boiler moet zo worden gepositioneerd dat de slangen spanning-vrij kunnen worden aangesloten en er voldoende ventilatie is. Bevestig de boiler aan de kaswand of achterwand met de meegeleverde beugel of schroeven — voorkom dat de boiler kan kantelen of vallen. Sluit de waterinlaat, uitlaat en veiligheidsventielslang aan op de aanwijzingen in de handleiding. De veiligheidsventielslang moet vrij kunnen afvloeien naar een afvoer of emmer.',
    tip: 'De meeste boilers hebben een minimale vrije afstand van 5–10 cm tot een warmtebron of de kaswand nodig.',
  },
  {
    nr: 7,
    titel: 'Elektrische aansluiting',
    beschrijving:
      'Sluit de stekker van de boiler aan op een geaard stopcontact (230V, 16A) onder het aanrecht. Het stopcontact moet voldoen aan de eisen voor gebruik in natte ruimten (IP44 of hoger). Gebruik geen verlengsnoer of stekkerdoos voor permanente installatie — de boiler heeft een vaste aansluiting nodig. Als er geen stopcontact aanwezig is onder het aanrecht, laat dan een erkend elektricien een stopcontact plaatsen vóór de installatie. De maximale stroom van de boiler staat in de technische specificaties (doorgaans 1.800–3.000W).',
    tip: 'Controleer of de groep in de meterkast de belasting aankan. Een kokend water boiler vraagt 8–13A — gebruik bij voorkeur een aparte groep.',
  },
  {
    nr: 8,
    titel: 'Watertoevoer openen en op lekkage controleren',
    beschrijving:
      'Draai de hoekstopkraan of hoofdkraan langzaam open. Laat het water langzaam instomen in het systeem. Controleer direct alle verbindingen op lekkage: de toevoerslangen, de aansluitingen op de boiler, de verbinding bij het kraangat en de veiligheidsventieluitlaat. Droog alles goed af en wacht 5 minuten om kleine druppellekkages zichtbaar te maken. Los eventuele lekkages op door verbindingen iets verder aan te draaien of door teflontape aan te brengen op schroefdraadverbindingen.',
    tip: 'Gebruik een droge witte doek onder de verbindingen — zelfs een kleine druppel is dan meteen zichtbaar.',
  },
  {
    nr: 9,
    titel: 'Eerste ingebruikname: spoelen en opwarmen',
    beschrijving:
      'Zet het systeem aan via de bedieningsschakelaar of het controlepaneel. De boiler vult zich automatisch met water. Laat de eerste 1–2 liter water via de kraan doorlopen zonder te drinken — dit is het spoelwater dat productieresten en eventuele testwater uit de fabriek verwijdert. Wacht daarna tot de boiler op temperatuur is (doorgaans 3–8 minuten voor de eerste opwarming, afhankelijk van het volume). De meeste systemen hebben een gereed-indicatie (lampje of display). Controleer of het kokende water daadwerkelijk kookt (95–100°C) en of de andere functies (koud, warm, bruisend) correct werken.',
    tip: 'Voer bij een nieuw systeem de eerste keer 2–3 volledige spoelingen uit voordat u het water gebruikt voor drinken of koken.',
  },
];

const osmoseExtra = [
  {
    stap: 'Osmosemodule plaatsen',
    beschrijving:
      'Bij een 4-in-1 kraan met ingebouwde omgekeerde osmose is er naast de boiler ook een osmosemodule (of het filterhuis met membraan). Plaats de module in de kast onder het aanrecht. Zorg voor voldoende ruimte: het filterpatroon moet jaarlijks verwisselbaar zijn zonder dat u alle andere aansluitingen hoeft te verplaatsen. Sommige systemen zoals de PureAqua 4-in-1 combineren boiler en osmosefilter in één behuizing voor maximale compactheid.',
  },
  {
    stap: 'Afvoerleiding voor spoelwater',
    beschrijving:
      'Een omgekeerde osmose membraan produceert naast gefilterd water ook spoelwater (concentraat). Dit spoelwater — met daarin de opgeloste stoffen die zijn tegengehouden — moet worden afgevoerd. Sluit de dunne afvoerslang van het osmosemodule aan op het sifon van de gootsteen via een saddle clamp of via een aftapping op het sifon. Zorg dat de afvoerslang een lichte helling heeft naar het sifon toe en geen luchtval vormt. Het dagelijkse spoelwatervolume van een modern systeem is klein (0,5–2 liter per dag bij normaal gebruik).',
  },
  {
    stap: 'Koudwater voeding voor osmosemodule',
    beschrijving:
      'Sluit de inlaat van het osmosemodule aan op de koudwatertoevoer — niet op warm water. Koud water is essentieel voor de goede werking van het RO-membraan: warm water (>30°C) beschadigt het membraan op de lange termijn. Gebruik de meegeleverde saddle valve of T-koppeling voor de aftapping van de koudwaterleiding.',
  },
  {
    stap: 'Eerste osmose-doorspoeiling',
    beschrijving:
      'Bij een nieuw osmosemembraan moet het systeem worden doorgespoeld. Laat het systeem minimaal 10–15 minuten draaien met afvoer van het geproduceerde water naar de gootsteen voordat u het eerste water bewaart of drinkt. Dit verwijdert de conserveringsvloeistof waarmee het membraan is geleverd. Raadpleeg de handleiding voor de exacte spoelprocedure van uw model.',
  },
];

const veelgemaakteFouten = [
  {
    fout: 'Kraangat te klein of te groot boren',
    gevolg: 'De kraan past niet of de afdichting sluit niet goed aan, wat tot lekkage leidt.',
    oplossing:
      'Meet twee keer, boor één keer. Controleer de vereiste gatdiameter in de handleiding. Gebruik een gatenzaag van exact de opgegeven maat.',
  },
  {
    fout: 'Slangen te strak aantrekken of kruiskoppelen',
    gevolg: 'Persluisslangen kunnen breken bij te veel kracht; teflon-verbindingen kunnen lekken als ze scheef worden aangedraaid.',
    oplossing:
      'Persluisverbindingen: handvast is voldoende + een kwartslag met sleutel. Schroefdraadverbindingen: gebruik teflontape en draai voorzichtig vast.',
  },
  {
    fout: 'Boiler niet bevestigd',
    gevolg: 'Een loshangende boiler kan kantelen, slangen kunnen losraken en er kan waterschade ontstaan.',
    oplossing:
      'Bevestig de boiler altijd aan de achterwand of kaswand met de meegeleverde beugel en schroeven.',
  },
  {
    fout: 'Geen separate elektragroep',
    gevolg: 'Een kokend water boiler trekt 10–13A. Gedeeld op een al belaste groep kan de automaat eruit slaan.',
    oplossing:
      'Laat een elektricien een aparte groep (16A) installeren voor de boiler als er geen vrij stopcontact beschikbaar is.',
  },
  {
    fout: 'Osmose-afvoerslang verkeerd aangesloten',
    gevolg: 'Spoelwater kan terugstromen of ophopen, wat slechte filtratieprestaties veroorzaakt.',
    oplossing:
      'Zorg dat de afvoerslang altijd op een hoger punt begint en richting het sifon afloopt. Gebruik de anti-terugslagklep die met het systeem is meegeleverd.',
  },
  {
    fout: 'Vergeten te spoelen voor eerste gebruik',
    gevolg: 'Het eerste water bevat mogelijk conserveringsvloeistof of productieresten — niet voor consumptie geschikt.',
    oplossing:
      'Voer altijd de aanbevolen spoelprocedure uit (2–3 liter voor kokend water kraan; 10–15 minuten voor osmosemethode).',
  },
];

const moeilijkheidsRating = [
  {
    scenario: 'Bestaand kraangat hergebruiken + stopcontact aanwezig',
    moeilijkheid: 'Eenvoudig',
    tijd: '30–60 minuten',
    diy: true,
    kleur: 'green',
  },
  {
    scenario: 'Nieuw kraangat boren in composiet aanrecht + stopcontact aanwezig',
    moeilijkheid: 'Gemiddeld',
    tijd: '60–90 minuten',
    diy: true,
    kleur: 'yellow',
  },
  {
    scenario: '4-in-1 met osmose, incl. afvoerleiding + stopcontact aanwezig',
    moeilijkheid: 'Gemiddeld',
    tijd: '90–120 minuten',
    diy: true,
    kleur: 'yellow',
  },
  {
    scenario: 'Nieuw kraangat in graniet/steen aanrecht',
    moeilijkheid: 'Moeilijk',
    tijd: '60–120 minuten',
    diy: false,
    kleur: 'red',
  },
  {
    scenario: 'Geen stopcontact aanwezig; nieuw leidingwerk nodig',
    moeilijkheid: 'Loodgieter/elektricien vereist',
    tijd: 'Half dag',
    diy: false,
    kleur: 'red',
  },
];

export default function KokendWaterKraanInstallerenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kokend water kraan', url: 'https://waterfilterplatform.nl/kokend-water-kraan' },
          { name: 'Installeren', url: 'https://waterfilterplatform.nl/kokend-water-kraan/installeren' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:text-[#005F8A]">Kokend water kraan</Link>
            <span className="mx-2">/</span>
            <span>Installeren</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kokend Water Kraan Installeren: Stap-voor-Stap
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een <strong>kokend water kraan</strong> zelf installeren is in de meeste gevallen goed te
            doen als doe-het-zelver. Op deze pagina krijgt u een complete installatiegids: welk
            gereedschap u nodig heeft, de stap-voor-stap procedure van waterkraan afsluiten tot
            eerste ingebruikname, speciale aandachtspunten voor een 4-in-1 kraan met osmose filter,
            veelgemaakte fouten en wanneer u beter een loodgieter inschakelt.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Bekijk de PureAqua 4-in-1 kraan →
            </Link>
            <Link
              href="/kokend-water-kraan"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Overzicht kokend water kranen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">
            Op deze pagina
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#voorbereiding" className="hover:underline">Voorbereiding: gereedschap en vereisten</a></li>
            <li><a href="#stappen" className="hover:underline">Stap-voor-stap installatie</a></li>
            <li><a href="#osmose" className="hover:underline">4-in-1 met osmose: extra stappen</a></li>
            <li><a href="#fouten" className="hover:underline">Veelgemaakte fouten vermijden</a></li>
            <li><a href="#moeilijkheid" className="hover:underline">DIY of loodgieter?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Voorbereiding */}
        <section id="voorbereiding">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Voorbereiding: gereedschap en vereiste aansluitingen
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een goede voorbereiding is het halve werk. Voordat u begint, controleert u of u het
            benodigde gereedschap heeft en of de benodigde aansluitingen aanwezig zijn. De meeste
            kokend water kranen vereisen slechts drie basisaansluitingen: koud water, afvoer
            (sifon) en elektriciteit. Voor een 4-in-1 met osmose is ook een afvoer voor spoelwater nodig.
          </p>

          <h3 className="text-lg font-bold text-[#003F5C] mb-3">Benodigd gereedschap</h3>
          <div className="space-y-2 mb-6">
            {gereedschap.map(g => (
              <div key={g.item} className="flex gap-3 items-start border border-gray-100 rounded-xl p-3">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5 text-sm">→</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{g.item}</p>
                  <p className="text-sm text-gray-600">{g.gebruik}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-[#003F5C] mb-3">Vereiste aansluitingen</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {[
              {
                type: 'Koudwaterleiding',
                detail: 'Een koudwaterleiding onder het aanrecht — de aansluitslang voor de toevoer naar de boiler. Aanwezig bij vrijwel elke keukenkast.',
                kleur: 'border-blue-100 bg-blue-50',
              },
              {
                type: 'Stopcontact (230V, geaard)',
                detail: 'Een geaard stopcontact binnen bereik van de boiler. Gebruik geen verlengsnoer. Als er geen stopcontact aanwezig is, laat dan eerst een elektricien dit plaatsen.',
                kleur: 'border-yellow-100 bg-yellow-50',
              },
              {
                type: 'Sifon of afvoer',
                detail: 'Voor de veiligheidsventielslang van de boiler. Moet vrij afvloeien. Bij een 4-in-1 met osmose is ook het sifon nodig voor de spoelwaterafvoer.',
                kleur: 'border-gray-100 bg-gray-50',
              },
              {
                type: 'Kraangat in aanrecht (35–38 mm)',
                detail: 'Bestaand gat van een eerder filterfilter of apart kraan? Hergebruik het. Nieuw gat nodig? Zorg voor de juiste gatenzaag voor uw aanrechtmateriaal.',
                kleur: 'border-gray-100 bg-gray-50',
              },
            ].map(a => (
              <div key={a.type} className={`rounded-xl border p-4 ${a.kleur}`}>
                <p className="font-semibold text-gray-900 text-sm mb-1">{a.type}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{a.detail}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
            <p className="font-semibold text-amber-900 text-sm mb-1">Controleer dit voordat u begint</p>
            <ul className="space-y-1">
              {[
                'Is er een koudwaterhoekstopkraan aanwezig onder het aanrecht (en sluit die goed af)?',
                'Is er een geaard stopcontact beschikbaar in de kast — geen verlengsnoer, maar een vaste aansluiting?',
                'Heeft het aanrecht al een kraangat van de juiste maat, of moet u boren?',
                'Is de ruimte in de keukenkast groot genoeg voor de boiler (controleer afmetingen in de handleiding)?',
                'Is bij een 4-in-1 met osmose: is er ruimte voor het osmosemodule en een sifon-aftapping?',
              ].map(punt => (
                <li key={punt} className="flex gap-2 items-start text-sm text-gray-700">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">☐</span>
                  <span>{punt}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Stap-voor-stap */}
        <section id="stappen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Stap-voor-stap installatie
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Volg de onderstaande stappen in de beschreven volgorde. Sla geen stap over — elke stap
            bouwt voort op de vorige. De totale installatietijd voor een standaard kokend water
            kraan met bestaand kraangat en stopcontact is doorgaans{' '}
            <strong>45–90 minuten</strong>. Raadpleeg altijd ook de meegeleverde handleiding van uw
            specifieke model, want details kunnen per merk en type afwijken.
          </p>
          <div className="space-y-5">
            {installatieStappen.map(s => (
              <div key={s.nr} className="border border-gray-100 rounded-2xl overflow-hidden">
                <div className="flex items-center gap-4 bg-[#003F5C] text-white px-5 py-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    {s.nr}
                  </div>
                  <p className="font-bold text-sm">{s.titel}</p>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{s.beschrijving}</p>
                  <div className="bg-[#E0F2FE] rounded-xl p-3 text-xs text-[#003F5C]">
                    <span className="font-semibold">Tip: </span>{s.tip}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-5 leading-relaxed">
            Heeft u een 4-in-1 kokend water kraan met ingebouwde omgekeerde osmose? Lees dan
            hieronder de aanvullende stappen die specifiek zijn voor de osmosemodule en
            spoelwaterafvoer.
          </p>
        </section>

        {/* 4-in-1 osmose extra stappen */}
        <section id="osmose">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            4-in-1 met osmose: extra installatiestappen
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een <strong>4-in-1 kraan met omgekeerde osmose</strong> — zoals de{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">
              PureAqua 4-in-1
            </Link>{' '}
            — combineert een kokendwaterfunctie met een ingebouwd osmose filtratie systeem. Dit
            geeft u naast kokend water ook puur gefilterd water (vrij van kalk, chloor, nitraten
            en PFAS) uit dezelfde kraan. De installatie heeft een paar aanvullende stappen ten
            opzichte van een eenvoudige kokend water kraan:
          </p>
          <div className="space-y-4 mb-5">
            {osmoseExtra.map((o, i) => (
              <div key={o.stap} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  {i + 1}
                </div>
                <div className="border border-gray-100 rounded-xl p-4 flex-1">
                  <p className="font-bold text-gray-900 text-sm mb-2">{o.stap}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{o.beschrijving}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE] rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2 text-sm">
              Voordeel van osmose op zachter water (na waterontharder)
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Woont u in een hard-watergebied en heeft u ook een waterontharder? Dan profiteert uw
              4-in-1 osmosekraan van het zachte voedingswater: kalk tast het RO-membraan minder aan
              en de filterlevensduur wordt verlengd. Meer over de combinatie leest u op de pagina{' '}
              <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
                omgekeerde osmose
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Veelgemaakte fouten */}
        <section id="fouten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Veelgemaakte fouten en hoe ze te vermijden
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Zelfs bij een relatief eenvoudige installatie gaat er soms iets mis. Hieronder de
            meest voorkomende fouten die wij zien bij de installatie van een kokend water kraan,
            inclusief het gevolg en de oplossing:
          </p>
          <div className="space-y-3">
            {veelgemaakteFouten.map(f => (
              <details key={f.fout} className="border border-amber-100 bg-amber-50 rounded-xl p-4 group">
                <summary className="font-semibold text-amber-900 cursor-pointer list-none flex justify-between items-center text-sm">
                  {f.fout}
                  <span className="text-amber-600 group-open:rotate-180 transition-transform shrink-0 ml-2">▾</span>
                </summary>
                <div className="mt-3 space-y-2">
                  <div>
                    <p className="text-xs font-semibold text-gray-700">Gevolg:</p>
                    <p className="text-xs text-gray-600">{f.gevolg}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#005F8A]">Oplossing:</p>
                    <p className="text-xs text-gray-700">{f.oplossing}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* DIY of loodgieter */}
        <section id="moeilijkheid">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            DIY-moeilijkheidsgraad en wanneer een loodgieter inschakelen
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De meeste standaard installaties zijn goed te doen zonder professionele hulp. Maar er
            zijn situaties waarbij een loodgieter of installateur de veiligste en snelste keuze is.
            Hieronder een overzicht:
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-5">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Scenario</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Moeilijkheid</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Tijd</th>
                  <th className="py-2.5 px-3 font-semibold text-center">DIY?</th>
                </tr>
              </thead>
              <tbody>
                {moeilijkheidsRating.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white border-b border-gray-100'}>
                    <td className="py-2.5 px-3 text-xs">{r.scenario}</td>
                    <td className="py-2.5 px-3 text-xs font-medium">
                      <span className={
                        r.kleur === 'green' ? 'text-green-700' :
                        r.kleur === 'yellow' ? 'text-yellow-700' :
                        'text-red-700'
                      }>
                        {r.moeilijkheid}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.tijd}</td>
                    <td className="py-2.5 px-3 text-center text-xs font-bold">
                      {r.diy
                        ? <span className="text-green-700">Ja</span>
                        : <span className="text-red-700">Nee</span>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-100 rounded-2xl p-4">
              <p className="font-semibold text-green-800 mb-2 text-sm">Doe het zelf als:</p>
              <ul className="space-y-1">
                {[
                  'Er al een kraangat en stopcontact aanwezig zijn',
                  'U het aanrecht kunt boren (composiet, hout, kunststof)',
                  'U handig bent met eenvoudige klusklussen',
                  'U de handleiding stap voor stap kunt volgen',
                ].map(punt => (
                  <li key={punt} className="flex gap-2 items-start text-sm text-gray-700">
                    <span className="text-green-600 font-bold shrink-0">✓</span>
                    <span>{punt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-4">
              <p className="font-semibold text-red-800 mb-2 text-sm">Schakel een loodgieter/installateur in als:</p>
              <ul className="space-y-1">
                {[
                  'Er geen stopcontact aanwezig is (elektricien nodig)',
                  'Het aanrecht van graniet, marmer of steen is',
                  'Er nieuw leidingwerk moet worden aangelegd',
                  'U twijfelt over de waterdichtheid van de verbindingen',
                  'U in een huurwoning woont en toestemming nodig heeft',
                ].map(punt => (
                  <li key={punt} className="flex gap-2 items-start text-sm text-gray-700">
                    <span className="text-red-600 font-bold shrink-0">✗</span>
                    <span>{punt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-5 bg-[#E0F2FE] rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2 text-sm">Kosten loodgieter bij installatie kokend water kraan</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Een loodgieter rekent doorgaans €60–100 per uur voor installatiewerk. Een standaard
              installatie inclusief kraangat boren en aansluiting duurt 1–2 uur — reken op
              €100–200 arbeidskosten. Een complete installatie van een 4-in-1 kraan met osmose
              door een installateur kost typisch €150–350 inclusief materialen. Vraag altijd
              meerdere offertes aan en controleer of de installateur ervaring heeft met
              kokend water kraan systemen.
            </p>
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="kokend" />

        {/* Meer lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/kokend-water-kraan',
                title: 'Kokend water kraan — overzicht',
                desc: 'Alle types vergelijkend: boiler, doorstroom, 3-in-1, 4-in-1 en met filter.',
              },
              {
                href: '/4-in-1-kraan',
                title: '4-in-1 kraan: alles wat u moet weten',
                desc: 'Kokend, koud, warm en bruisend uit één kraan — met ingebouwde osmosefiltratie.',
              },
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'PureAqua 4-in-1 kopen',
                desc: 'Complete 4-in-1 kraan met osmosefilter, kokend water en bruisend water.',
              },
              {
                href: '/kennisbank/kokend-water-kraan-installeren',
                title: 'Kennisbank: kokend water kraan installeren',
                desc: 'Technische diepgang: aansluitschema\'s, drukspecificaties en onderhoud.',
              },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">
                  {l.title}
                </p>
                <p className="text-sm text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over het installeren van een kokend water kraan
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">
                    ▾
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
