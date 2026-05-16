import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Heet water kraan installeren: zo doe je het stap voor stap',
  description:
    'Heet water kraan installeren: benodigde aansluitingen, tools, stappen en wanneer u een installateur inschakelt. Inclusief koppeling aan osmosefilter.',
  alternates: { canonical: 'https://waterfilterplatform.nl/heet-water-kraan/installeren' },
  openGraph: {
    title: 'Heet water kraan installeren: zo doe je het stap voor stap',
    description:
      'Heet water kraan installeren: benodigde aansluitingen, tools, stappen en wanneer u een installateur inschakelt. Inclusief koppeling aan osmosefilter.',
    url: 'https://waterfilterplatform.nl/heet-water-kraan/installeren',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Kan ik een heet water kraan zelf installeren?',
    answer:
      'Een eenvoudige doorstroom instant water heater kunt u zelf installeren in 30-60 minuten als er een geaard stopcontact en koudwateraansluiting beschikbaar zijn onder het aanrecht. Een mini-boiler systeem vereist iets meer technisch inzicht maar is ook doe-het-zelf mogelijk. Bij een combikraan met osmosefilter is professionele installatie sterk aanbevolen.',
  },
  {
    question: 'Welke aansluiting heeft een heet water kraan nodig?',
    answer:
      'U heeft drie aansluitingen nodig: een koudwateraansluiting (3/8 inch of 1/2 inch kogelkraan), een geaard stopcontact 230V/16A, en een afvoermogelijkheid voor condenswater bij sommige modellen. Bij een osmosekoppeling is ook een afvoer voor het spoelwater vereist (aanboorkoppeling op de afvoerleiding).',
  },
  {
    question: 'Hoelang duurt de installatie van een heet water kraan?',
    answer:
      'Een eenvoudige instant water heater installeert u in 30-60 minuten. Een mini-boiler met nieuw kraangat kost 1-2 uur. Een 4-in-1 kraan met osmosefilter die de bestaande mengkraan vervangt neemt 1-2 uur in beslag voor een handige doe-het-zelver, of 1,5-2,5 uur voor een installateur.',
  },
  {
    question: 'Moet ik een loodgieter inschakelen voor een heet water kraan?',
    answer:
      'Niet altijd verplicht, maar in de volgende gevallen is een installateur sterk aan te raden: als u een extra kraangat moet boren in graniet of composiet, als er geen stopcontact aanwezig is onder het aanrecht, als u een osmosefilter koppelt, of als de waterdruk lager is dan 2 bar. De installatie duurt dan 1-3 uur en kost 100-250 euro.',
  },
  {
    question: 'Welke flexibele slang heb ik nodig voor een heet water kraan?',
    answer:
      'Gebruik een 3/8 inch gevlochten roestvrijstalen aansluitslang van 30-60 cm. Koop altijd een model met geintegreerde afsluiter en DVGW- of WRAS-certificering. Gebruik geen eenvoudige kunststof slangen bij water boven 70 graden Celsius: hitte kan de kunststofverbindingen op termijn beschadigen.',
  },
  {
    question: 'Hoe koppel ik een heet water kraan aan een osmosefilter?',
    answer:
      'Sluit de uitgang van het osmosefilter (permeaat, gefilterd water) aan op de koude inlaat van de heet water kraan of boiler. Zo verwarmt u altijd gefilterd water, wat kalk en smaakafwijkingen voorkomt. Bij een 4-in-1 kraan is de osmose-koppeling al intern geregeld. Bij een losse koppeling gebruikt u een 1/4 inch Quick Connect fitting.',
  },
  {
    question: 'Welke waterdruk is vereist voor een heet water kraan?',
    answer:
      'De meeste heet water kranen en instant water heaters vereisen een minimale waterdruk van 1,5-2 bar. De maximale druk is doorgaans 6-8 bar. Ligt uw waterdruk buiten dit bereik, dan werkt het systeem niet correct. U kunt de druk meten met een manometer op het watermeterputje of het afsluitventiel.',
  },
];

const stappenPlan = [
  {
    stap: '1',
    titel: 'Zet de watertoevoer af en controleer de benodigdheden',
    tekst:
      'Sluit de watertoevoer af via het hoofdafsluitventiel of het kraaantje onder het aanrecht. Leg alle benodigdheden klaar: waterafsluitventiel (T-stuk of kogelkraan), 3/8 inch gevlochten aansluitslangen, Teflon tape, schroevendraaier, verstelbare sleutel en een emmer voor restwater. Controleer of het stopcontact bereikbaar is.',
    icon: '1',
  },
  {
    stap: '2',
    titel: 'Installeer de wateraftakking op de koudwaterleiding',
    tekst:
      'Plaats een T-stuk of aftakventiel op de bestaande koudwaterafsluiter. Gebruik bij koperen leidingen een klemverbinding (geen soldeer vereist). Bij flexibele slangen plaatst u de aftakking direct op het aansluitnipple. Wikkel schroefdraadverbindingen met 3-4 lagen Teflon tape. Draai de verbindingen met de hand aan en vervolgens met een kwartslag extra met de sleutel.',
    icon: '2',
  },
  {
    stap: '3',
    titel: 'Monteer het verwarmingselement of de boiler',
    tekst:
      'Bevestig de boiler of instant water heater in de keukenonderkast met de meegeleverde beugel. Zorg voor minimaal 5 cm ruimte rondom voor ventilatie. Sluit de aansluitslang aan van de wateraftakking op de inlaat van het apparaat. Controleer de doorstoomrichting (inlaat = koud, uitlaat = warm). Laat de uitlaat nog onverbonden voor de test in stap 4.',
    icon: '3',
  },
  {
    stap: '4',
    titel: 'Test op lekkage voor definitieve aansluiting',
    tekst:
      'Open langzaam de watertoevoer en controleer alle verbindingen op lekkage. Gebruik een stuk keukenpapier om kleine lekkages te detecteren. Laat het systeem 5 minuten onder druk staan. Pas bij volledig lekvrije installatie sluit u de warm water uitlaat aan op de kraan en werkt u alles definitief weg.',
    icon: '4',
  },
  {
    stap: '5',
    titel: 'Sluit elektriciteit aan en stel de temperatuur in',
    tekst:
      'Steek de stekker in het geaarde stopcontact 230V/16A. Stel de gewenste temperatuur in via het display of de draaischijf. Laat het systeem 10-15 minuten opwarmen voor de eerste ingebruikname. Test de warmwaterlevering met een maatbeker: de geconfigureerde temperatuur moet binnen 30 seconden bereikt worden. Noteer de ingestelde temperatuur en de hydraulische aansluitingen voor toekomstig onderhoud.',
    icon: '5',
  },
];

const benodigdheden = [
  { item: 'Waterafsluitventiel of T-stuk', type: '3/8 inch of 1/2 inch messing', verplicht: true },
  { item: 'Gevlochten aansluitslangen', type: '3/8 inch RVS, 30-50 cm, met afsluiter', verplicht: true },
  { item: 'Geaard stopcontact 230V/16A', type: 'Aanwezig in de keukenonderkast', verplicht: true },
  { item: 'Teflon tape', type: '12-19 mm breed, 3-4 lagen op schroefdraad', verplicht: true },
  { item: 'Afvoerkoppeling voor condenswater', type: 'Aanboorkoppeling op afvoerleiding', verplicht: false },
  { item: '1/4 inch Quick Connect fittingen', type: 'Bij osmosekoppeling', verplicht: false },
  { item: 'Boorgat 35-38 mm in aanrecht', type: 'Alleen bij extra kraan naast bestaande mengkraan', verplicht: false },
];

export default function HeetWaterKraanInstallerenPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Heet water kraan', url: 'https://waterfilterplatform.nl/heet-water-kraan' },
          { name: 'Installeren', url: 'https://waterfilterplatform.nl/heet-water-kraan/installeren' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Heet water kraan installeren: zo doe je het stap voor stap',
          description:
            'Heet water kraan installeren: benodigde aansluitingen, tools, stappen en wanneer u een installateur inschakelt. Inclusief koppeling aan osmosefilter.',
          datePublished: '2026-05-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/heet-water-kraan/installeren',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/heet-water-kraan" className="hover:text-[#005F8A]">Heet water kraan</Link>
            <span className="mx-2">/</span>
            <span>Installeren</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Heet water kraan installeren: zo doe je het stap voor stap
          </h1>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Een <strong>heet water kraan installeren</strong> is voor de meeste modellen een
            doe-het-zelf klus van 30-90 minuten. U heeft een koudwateraansluiting, een geaard
            stopcontact en de juiste slangen nodig. Op deze pagina vindt u het complete stappenplan,
            de benodigde materialen en wanneer u toch beter een installateur inschakelt.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Ook leest u hoe u een heet water kraan koppelt aan een osmosefilter voor maximale
            waterkwaliteit, en wat u moet weten over de installatie van een{' '}
            <Link href="/kokend-water-kraan" className="text-[#005F8A] underline hover:no-underline">
              4-in-1 kokend water kraan
            </Link>{' '}
            als complete vervanging.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/heet-water-kraan/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Koopgids heet water kraan &rarr;
            </Link>
            <Link
              href="/heet-water-kraan/prijs"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Installatiekosten bekijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#benodigdheden" className="hover:underline">Benodigde materialen</a></li>
            <li><a href="#stappen" className="hover:underline">Stap-voor-stap installatie</a></li>
            <li><a href="#installateur" className="hover:underline">Wanneer een installateur?</a></li>
            <li><a href="#kosten" className="hover:underline">Installatiekosten vergelijking</a></li>
            <li><a href="#osmose" className="hover:underline">Koppeling aan osmosefilter</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Quick Answer */}
        <section>
          <QuickAnswer answer="Een eenvoudige heet water kraan (doorstroom) installeert u zelf in 30-60 minuten met een T-stuk, aansluitslangen en een stopcontact. Schakel een installateur in bij graniet-aanrecht boren, nieuwe groep in de meterkast, of koppeling aan een osmosefilter. Kosten installateur: 100-250 euro." />
        </section>

        {/* Benodigdheden */}
        <section id="benodigdheden">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Benodigde materialen voor installatie
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Controleer voor u begint of u alle benodigde materialen bij de hand heeft. Niets is
            vervelender dan halverwege de installatie te ontdekken dat een fitting ontbreekt.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Materiaal</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Specificatie</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Verplicht</th>
                </tr>
              </thead>
              <tbody>
                {benodigdheden.map(b => (
                  <tr key={b.item} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-800">{b.item}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{b.type}</td>
                    <td className="py-2.5 px-3 text-center">
                      {b.verplicht ? (
                        <span className="text-green-700 font-bold text-sm">&#10003;</span>
                      ) : (
                        <span className="text-gray-400 text-sm">Optioneel</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mt-4">
            <p className="font-semibold text-amber-900 mb-1 text-sm">Let op: stopcontact onder aanrecht</p>
            <p className="text-sm text-gray-700">
              De meeste Nederlandse keukens hebben geen stopcontact in de keukenonderkast. Controleer dit
              voor aanschaf. Een elektricien rekent 80-150 euro voor het plaatsen van een extra geaard
              stopcontact op een bestaande groep.
            </p>
          </div>
        </section>

        {/* Stappen */}
        <section id="stappen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Stap-voor-stap installatie: 5 stappen
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Volg onderstaande vijf stappen voor een correcte en lekvrije installatie van uw heet
            water kraan. Wacht altijd op stap 4 (lektest) voor u de elektriciteit aansluit.
          </p>
          <div className="space-y-5">
            {stappenPlan.map(s => (
              <div key={s.stap} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {s.icon}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 mt-5">
            <p className="font-semibold text-[#003F5C] mb-2">Tijdsduur per type installatie</p>
            <div className="space-y-1.5 text-sm text-gray-700">
              <div className="flex gap-3">
                <span className="font-medium text-[#005F8A] w-48 shrink-0">Doorstroom heater (DIY)</span>
                <span>30-60 minuten</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-[#005F8A] w-48 shrink-0">Mini-boiler met kraangat</span>
                <span>60-120 minuten</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-[#005F8A] w-48 shrink-0">4-in-1 kraan (mengkraan vervangen)</span>
                <span>60-120 minuten</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-[#005F8A] w-48 shrink-0">Met osmosefilter erbij</span>
                <span>90-150 minuten totaal</span>
              </div>
            </div>
          </div>
        </section>

        {/* Wanneer installateur */}
        <section id="installateur">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer schakel je een installateur in?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hoewel de meeste heet water kranen door doe-het-zelvers te installeren zijn, zijn er
            situaties waarbij professionele hulp noodzakelijk of verstandig is:
          </p>
          <div className="space-y-3 mb-5">
            {[
              {
                situatie: 'Boren in graniet, composiet of gehard glas aanrecht',
                reden: 'Verkeerd boren beschadigt het aanrecht onherstelbaar. Een steenhouwer of keukenmonteur rekent 80-150 euro voor dit werk.',
                type: 'verplicht',
              },
              {
                situatie: 'Geen stopcontact aanwezig in de keukenonderkast',
                reden: 'Een elektricien plaatst een extra wandcontactdoos op de bestaande keukengroep. Kosten: 80-150 euro. Zonder geaard stopcontact mag de boiler niet worden aangesloten.',
                type: 'verplicht',
              },
              {
                situatie: 'Koppeling aan osmosefilter of combikraan',
                reden: 'De waterdruk na het osmosesysteem verschilt van de normale leidingdruk. Verkeerde aansluiting kan leiden tot lekken of drukproblemen. Aanbevolen voor wie nog geen ervaring heeft.',
                type: 'aanbevolen',
              },
              {
                situatie: 'Waterdruk lager dan 1,5 bar of hoger dan 8 bar',
                reden: 'Buiten dit druklimiet werkt een doorstroom instant heater niet goed of kunnen verbindingen worden beschadigd. Een loodgieter beoordeelt de situatie en plaatst evt. een drukregelaar.',
                type: 'aanbevolen',
              },
              {
                situatie: 'Groepenkast uitbreiden voor aparte groep',
                reden: 'Boilers boven 2.000W op een eigen groep zijn de beste keuze. Uitbreiding van de groepenkast is wettelijk voorbehouden aan erkende elektriciens.',
                type: 'wettelijk',
              },
            ].map(s => (
              <div key={s.situatie} className={`rounded-xl border p-4 ${
                s.type === 'verplicht' ? 'border-red-200 bg-red-50' :
                s.type === 'wettelijk' ? 'border-amber-200 bg-amber-50' :
                'border-gray-100 bg-white'
              }`}>
                <div className="flex items-start gap-2 mb-1">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                    s.type === 'verplicht' ? 'bg-red-100 text-red-700' :
                    s.type === 'wettelijk' ? 'bg-amber-100 text-amber-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {s.type === 'verplicht' ? 'Verplicht' : s.type === 'wettelijk' ? 'Wettelijk vereist' : 'Aanbevolen'}
                  </span>
                  <p className="font-semibold text-gray-900 text-sm">{s.situatie}</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed ml-0">{s.reden}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Kosten vergelijking */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Installatiekosten: DIY versus installateur
          </h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[420px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Scenario</th>
                  <th className="py-2.5 px-3 font-semibold text-center">DIY kosten</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Installateur kosten</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { scenario: 'Doorstroom heater, bestaand stopcontact', diy: '0 euro (materiaal inbegrepen)', inst: '80-150 euro (1 uur)' },
                  { scenario: 'Mini-boiler, bestaand kraangat', diy: '0-20 euro (slangen)', inst: '100-180 euro (1-1,5 uur)' },
                  { scenario: 'Nieuw kraangat boren (hout)', diy: '5-10 euro (gatzaag)', inst: '50-80 euro' },
                  { scenario: 'Nieuw kraangat boren (graniet)', diy: 'Niet aanbevolen', inst: '100-200 euro (specialist)' },
                  { scenario: 'Extra stopcontact plaatsen', diy: 'Niet legaal (elektricien)', inst: '80-150 euro' },
                  { scenario: '4-in-1 met osmose complete installatie', diy: '0 euro', inst: '150-300 euro (2-3 uur)' },
                ].map(r => (
                  <tr key={r.scenario} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 text-gray-800 font-medium text-xs">{r.scenario}</td>
                    <td className="py-2.5 px-3 text-center text-xs text-green-700 font-medium">{r.diy}</td>
                    <td className="py-2.5 px-3 text-center text-xs text-[#005F8A]">{r.inst}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA 1 */}
        <CTABanner context="osmose" />

        {/* Osmose koppeling */}
        <section id="osmose">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Heet water kraan koppelen aan een osmosefilter
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De beste manier om zowel gefilterd als heet water te hebben, is een heet water kraan
            achter een osmosefilter aan te sluiten. Zo verwarmt u altijd schoon, kalkvrij en
            PFAS-vrij water. Dit verlengt ook de levensduur van het verwarmingselement aanzienlijk.
          </p>
          <div className="space-y-3 mb-5">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-2 text-sm">Methode 1: losse koppeling (2 aparte units)</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sluit de permeaatuitgang (gefilterd water) van het osmosesysteem aan op de koudwaterinlaat
                van de heet water boiler via een 1/4 inch Quick Connect T-stuk. Het osmosesysteem filtert
                eerst, daarna verwarmt de boiler het gefilterde water. Kosten extra fitting: 5-15 euro.
              </p>
            </div>
            <div className="bg-[#E0F2FE] border border-[#005F8A]/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <p className="font-semibold text-[#003F5C] text-sm">Methode 2: 4-in-1 kraan (geintegreerd)</p>
                <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full">Aanbevolen</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                De PureAqua 4-in-1 kraan heeft het osmosefilter intern geintegreerd. U installeert
                e&eacute;n systeem dat de mengkraan vervangt en levert automatisch gefilterd koud,
                gefilterd heet (60-98&deg;C) en gefilterd kokend (100&deg;C) water. Geen losse
                koppeling nodig, minder slangen en fittingen, minder kans op lekkage.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Lees meer over hoe osmosefiltratie werkt en wat het filtert op de{' '}
            <Link href="/heet-water-kraan/filter" className="text-[#005F8A] underline hover:no-underline">
              heet water kraan met filter pagina
            </Link>{' '}
            of bekijk de volledige koopgids van de{' '}
            <Link href="/heet-water-kraan/kopen" className="text-[#005F8A] underline hover:no-underline">
              heet water kraan kopen pagina
            </Link>.
          </p>
        </section>

        {/* CTA 2 */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over heet water kraan installeren
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">
                    &#9662;
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
