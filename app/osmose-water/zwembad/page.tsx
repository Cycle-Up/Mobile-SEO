import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { CTABanner } from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Osmosewater voor zwembad en spa: chloorbehoefte en TDS',
  description:
    'Osmosewater voor zwembad: lagere TDS, minder chloor nodig, kristalhelder water. Spa en jacuzzi profiteren het meest. Kosten en praktische tips.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/zwembad' },
  openGraph: {
    title: 'Osmosewater voor zwembad en spa: chloorbehoefte en TDS',
    description:
      'Osmosewater voor zwembad: lagere TDS, minder chloor nodig, kristalhelder water. Spa en jacuzzi profiteren het meest. Kosten en praktische tips.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Kan ik een zwembad volledig vullen met osmosewater?',
    answer:
      'Ja, dat is mogelijk. Een zwembad vullen met osmosewater geeft je de laagste TDS-startwaarde (5-30 mg/L) en dus de meest stabiele watercondities. Voor grote zwembaden is dit door de kosten van osmosecapaciteit soms niet praktisch; dan is bijvullen met osmosewater de betere keuze. Voor spa en jacuzzi (800-2000 liter) is volledig vullen met osmosewater wel heel praktisch.',
  },
  {
    question: 'Hoeveel minder chloor heb ik nodig met osmosewater?',
    answer:
      'Een lagere TDS betekent dat chloor minder snel gebonden raakt aan mineraaldeeltjes en organische stoffen. In de praktijk rapporteren zwembadeigenaren 20-40% minder chloorverbruik bij gebruik van osmosewater vergeleken met gewoon leidingwater. Het exacte percentage hangt af van het gebruik, de temperatuur en de zonblootstelling van het bad.',
  },
  {
    question: 'Waarom verslechtert de waterkwaliteit in een spa sneller dan in een zwembad?',
    answer:
      'Een spa of jacuzzi heeft een veel kleinere waterinhoud (800-2000 liter) dan een zwembad (10.000-100.000 liter). Bij gelijk gebruik stapelen mineralen, lichaamzouten, cosmetische producten en chloorbiproducten zich dus veel sneller op per liter water. De TDS stijgt daardoor in een spa soms al na een paar weken naar onaanvaardbare niveaus.',
  },
  {
    question: 'Wat is een acceptabel TDS-niveau in zwembadwater?',
    answer:
      'De meeste richtlijnen hanteren 500-1500 mg/L als acceptabel bereik voor zwembadwater. Boven 1500 mg/L wordt het water troebel, smaak en geur verslechteren, en het desinfectiemiddel werkt minder efficient. Bij een zoutwaterzwembad (natriumchloride) liggen de TDS-waarden van nature hoger (2000-3500 mg/L) en gelden andere normen.',
  },
  {
    question: 'Hoe beheer ik de pH bij osmosewater in het zwembad?',
    answer:
      'Osmosewater heeft nauwelijks bufferend vermogen door de lage mineraalinhoud. Dit betekent dat de pH instabiel is en snel kan schommelen bij toevoeging van chemicalien of CO2 uit de lucht. Je moet bij osmosewater een pH-buffer (calciumcarbonaat of natriumbicarbonaatoplossing) toevoegen om de pH stabiel te houden tussen 7,2 en 7,6. Dit vergt iets meer aandacht dan bij gewoon leidingwater.',
  },
  {
    question: 'Kan ik osmosewater gebruiken in een zoutwaterzwembad?',
    answer:
      'Ja, maar de combinatie vraagt extra aandacht voor de zoutconcentratie. Osmosewater heeft van nature een zeer lage zoutconcentratie. Als je een zoutwaterzwembad met osmosewater vult of bijvult, moet je nauwkeuriger doseren om de juiste zoutconcentratie (2000-3500 mg/L NaCl) te bereiken. Het voordeel is dat je minder last hebt van andere mineralen die de waterbalans verstoren.',
  },
  {
    question: 'Wat kost een osmosefilter voor bijvullen van een zwembad?',
    answer:
      'Voor een privezwembad van 20-50 kubieke meter is een osmosefilter met een capaciteit van 200-600 liter per dag voldoende voor bijvullen. Dergelijke systemen kosten 300-800 euro voor aanschaf. Voor grote zwembaden of sneller vullen bestaat ook osmosewagen-verhuur, waarbij een mobiele installatie 2000-5000 liter per uur kan produceren tegen huurkosten van 150-400 euro per dag.',
  },
  {
    question: 'Is osmosewater schadelijk voor de zwembadwand of de filterpomp?',
    answer:
      'Puur osmosewater is van nature licht agressief (lage pH, weinig buffer) en kan bij langdurig contact theoreticel kalk uit beton of grout lossen. Dit los je op door de hardheid en pH te bufferen voordat je het bad in gebruik neemt. De filterpomp en het filtermateriaal hebben zelf geen last van osmosewater. Zorg wel dat de pH altijd boven 7,0 blijft om corrosie van metalen onderdelen te voorkomen.',
  },
];

export default function ZwembadOsmosePage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Osmose water', url: 'https://waterfilterplatform.nl/osmose-water' },
          { name: 'Zwembad', url: 'https://waterfilterplatform.nl/osmose-water/zwembad' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Osmosewater voor zwembad en spa: chloorbehoefte en TDS',
          description:
            'Osmosewater voor zwembad: lagere TDS, minder chloor nodig, kristalhelder water. Spa en jacuzzi profiteren het meest. Kosten en praktische tips.',
          datePublished: '2026-05-01',
          url: 'https://waterfilterplatform.nl/osmose-water/zwembad',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/osmose-water" className="hover:underline">Osmose water</Link>
            <span className="mx-2">/</span>
            <span>Zwembad</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmosewater voor zwembad en spa: voordelen, chloorbehoefte en kosten
          </h1>
          <QuickAnswer answer="Osmosewater in een zwembad of spa verlaagt de TDS (Total Dissolved Solids) sterk, waardoor minder chloor nodig is voor desinfectie en het water langer helder blijft. Voor een spa of jacuzzi is osmosewater bijzonder voordelig omdat de kleine waterinhoud snel verzadigd raakt met mineralen." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        {/* TDS in zwembadwater */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">TDS in zwembadwater: wat is acceptabel?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TDS staat voor Total Dissolved Solids: het totale gehalte aan opgeloste stoffen in water, gemeten in milligram per liter (mg/L). In zwembadwater bestaan die opgeloste stoffen uit mineralen uit het leidingwater, lichaamszout en zweet, zonnecremes en cosmetische producten, chloorbiproducten (zoals chloraminen), en bijgevoegde pH-correctiemiddelen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Normaal leidingwater in Nederland heeft een TDS van ruwweg 150-400 mg/L, afhankelijk van de regio. Na enkele weken zwembadgebruik stijgt de TDS aanzienlijk. De meeste richtlijnen voor zwembadonderhoud hanteren een maximale TDS van <strong>1.500 mg/L</strong>. Boven deze waarde:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4 pl-4">
            <li className="flex items-start gap-2">
              <span className="text-[#005F8A] font-bold mt-0.5">-</span>
              wordt het water troebel of wazig
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#005F8A] font-bold mt-0.5">-</span>
              werkt chloor minder efficient doordat het gebonden raakt aan mineraaldeeltjes
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#005F8A] font-bold mt-0.5">-</span>
              worden chloraminen sneller gevormd, die de typische chloorlucht veroorzaken en irritatie aan ogen en huid geven
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#005F8A] font-bold mt-0.5">-</span>
              verslechtert de smaak van het water en de badervaring
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Bij een hoge TDS is er maar een echte oplossing: (gedeeltelijk) vervangen van het badwater of bijmengen met vers, laag-TDS water. Hier komt osmosewater in beeld.
          </p>
        </section>

        {/* Osmosewater TDS */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Osmosewater TDS: 5-30 mg/L — invloed op zwembadchemie</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <Link href="/osmose-water" className="text-[#005F8A] underline hover:no-underline">Osmosewater</Link> heeft een TDS van slechts 5-30 mg/L: vrijwel alle opgeloste stoffen zijn verwijderd door het RO-membraan. Dit heeft directe gevolgen voor de zwembadchemie.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            {[
              {
                label: 'Normaal leidingwater',
                tds: '150-400 mg/L',
                kleur: 'bg-amber-50 border-amber-300',
              },
              {
                label: 'Zwembadwater (in gebruik)',
                tds: '500-1.500 mg/L',
                kleur: 'bg-red-50 border-red-300',
              },
              {
                label: 'Osmosewater',
                tds: '5-30 mg/L',
                kleur: 'bg-[#E0F2FE] border-[#005F8A]/40',
              },
            ].map((item) => (
              <div key={item.label} className={`border rounded-xl p-4 text-center ${item.kleur}`}>
                <p className="text-sm text-gray-600 mb-1">{item.label}</p>
                <p className="text-xl font-bold text-[#003F5C]">{item.tds}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Door osmosewater te gebruiken om een zwembad te vullen of bij te vullen, daalt de gemiddelde TDS sterk. Dit verlengt de levensduur van het badwater: je hoeft minder snel te verversen en het water blijft langer kristalhelder.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Een bijkomend effect: osmosewater bevat geen carbonaathardheid (geen kalk). Dit zorgt er initieel voor dat de pH van het bad instabiel kan zijn (zie het onderdeel pH-beheer verderop), maar het betekent ook dat er geen witte kalkrand rond de waterlijn ontstaat en dat de filterapparatuur niet verkalkt.
          </p>
        </section>

        {/* Chloor en osmosewater */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Chloor en osmosewater: lagere dosering, minder geur</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chloor werkt als desinfectiemiddel in zwembadwater door vrij chloor (hypochloorzuur) te vormen. Dit vrije chloor is actief en doodt bacterien, virussen en algen. Een deel van het chloor raakt echter gebonden aan organische stoffen en stikstofverbindingen in het water: dit worden chloraminen (gebonden chloor), die verantwoordelijk zijn voor de typische chloorlucht en oogirritatie.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Osmosewater bevat nauwelijks organische stoffen, ammoniak of nitraten. Hierdoor:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">+</span>
              <span>
                Minder chloor raakt gebonden aan mineraaldeeltjes: het vrije chloor blijft langer actief
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">+</span>
              <span>
                Minder chloraminen worden gevormd, dus minder chloorgeur en minder huid- en oogirritatie
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">+</span>
              <span>
                De doseringsbehoefte aan chloor daalt met naar schatting 20-40% in de beginfase
              </span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Dit betekent niet dat je geen chloor meer nodig hebt. Zwemmers brengen nog steeds organische stoffen (zweet, speeksel, urine) in het water. Maar de balans is gunstiger: minder chloor voor hetzelfde desinfectie-effect, en een aangenamere badervaring.
          </p>
        </section>

        {/* Spa en jacuzzi */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voordelen voor spa en jacuzzi: kleine inhoud, snel hoge TDS</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De voordelen van osmosewater zijn het grootst bij spas en jacuzzis. Een typische spa heeft een waterinhoud van 800 tot 2.000 liter. Bij een paar avonden per week gebruik stijgt de TDS in dit kleine volume razendsnel: na 4-6 weken intensief gebruik kan de TDS al boven 1.500 mg/L uitkomen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Normaal leidingwater bijvullen verdunt de TDS nauwelijks. Aan het einde van het seizoen (of elke 3-4 maanden) moet het badwater volledig worden ververst, wat circa 1.000-2.000 liter oud water kost en het opnieuw starten van de chemische balans vergt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Met osmosewater vul je de spa met water van 5-30 mg/L TDS. Je begint dus met een enorm lage startwaarde en de TDS stijgt veel langzamer naar de grenswaarde. Praktisch resultaat: je hoeft de spa minder vaak leeg te gooien, de waterkwaliteit is stabieler en je gebruikt minder chloor en andere behandelingsmiddelen.
          </p>
          <div className="bg-[#E0F2FE] border border-[#005F8A]/20 rounded-xl p-5 my-4">
            <p className="font-semibold text-[#003F5C] mb-2">Vuistregel: spa waterwisseling met osmose</p>
            <p className="text-sm text-gray-700">
              Normaal leidingwater: verversen elke 3-4 maanden bij regelmatig gebruik.
              Osmosewater: verversen elke 5-8 maanden bij vergelijkbaar gebruik.
              Tijdsbesparing: 30-50% minder waterwisselingen per jaar.
            </p>
          </div>
        </section>

        {/* Zwembad starten vs bijvullen */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Zwembad starten met osmosewater of bijvullen?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De keuze hangt af van de grootte van het zwembad en beschikbare osmosecapaciteit. Een standaard huishoudelijk <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">osmosefilter</Link> produceert 200-600 liter per dag. Voor een privezwembad van 20 kubieke meter (20.000 liter) zou volledig vullen met een huishoudelijk systeem weken duren — niet praktisch.
          </p>
          <div className="space-y-4">
            {[
              {
                titel: 'Spa en jacuzzi (800-2.000 liter)',
                tekst: 'Volledig vullen met osmosewater is hier ideaal. Met een osmosefilter van 300 liter per dag heb je de spa in 3-7 dagen vol. Dit is de meest effectieve toepassing van osmosewater voor zwemgelegenheid.',
                aanbeveling: 'Altijd osmose aanbevolen',
                kleur: 'bg-green-50 border-green-400',
              },
              {
                titel: 'Klein privezwembad (5.000-20.000 liter)',
                tekst: 'Bijvullen met osmosewater bij elke vervangingsbeurt is praktisch. Start met normaal leidingwater en mix 30-50% osmosewater bij het bijvullen. Dit verlaagt de TDS gemiddeld met 30-60% zonder dat je een industrieel systeem nodig hebt.',
                aanbeveling: 'Bijvullen met osmose aanbevolen',
                kleur: 'bg-[#E0F2FE] border-[#005F8A]/40',
              },
              {
                titel: 'Groot zwembad (20.000+ liter)',
                tekst: 'Volledig vullen met osmosewater is bij groot volume alleen praktisch via osmosewagen-verhuur of een professionele vaste installatie. Bijvullen met osmosewater bij hoge TDS is ook bij grote zwembaden een optie.',
                aanbeveling: 'Osmosewagen of vaste installatie',
                kleur: 'bg-amber-50 border-amber-400',
              },
            ].map((blok) => (
              <div key={blok.titel} className={`border-l-4 rounded-r-xl p-4 ${blok.kleur}`}>
                <p className="font-semibold text-[#003F5C] mb-1">{blok.titel}</p>
                <p className="text-sm text-gray-700 mb-2">{blok.tekst}</p>
                <span className="text-xs font-semibold text-[#005F8A]">{blok.aanbeveling}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Kosten */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kosten: osmosefilter voor zwembad en spa</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een huishoudelijk osmosefilter met 200-600 liter per dag capaciteit kost 200 tot 600 euro bij aanschaf. Voor het bijvullen van een spa of het regelmatig bijvullen van een klein zwembad is dit volledig toereikend. De filterpatronen kosten jaarlijks 50-100 euro.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-4 font-semibold text-[#003F5C]">Toepassing</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-center">Capaciteit nodig</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-center">Systeemkosten</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-center">Jaarlijks onderhoud</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { gebruik: 'Spa / jacuzzi (1.000 L)', cap: '200-400 L/dag', aanschaf: '200-400 euro', onderhoud: '50-80 euro' },
                  { gebruik: 'Klein zwembad bijvullen', cap: '400-600 L/dag', aanschaf: '300-600 euro', onderhoud: '80-120 euro' },
                  { gebruik: 'Groot zwembad bijvullen', cap: '1.000-5.000 L/dag', aanschaf: '1.500-5.000 euro', onderhoud: '200-500 euro' },
                  { gebruik: 'Eenmalig groot volume', cap: '2.000-5.000 L/u', aanschaf: 'Verhuur 150-400 euro/dag', onderhoud: 'n.v.t.' },
                ].map((rij, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-2.5 px-4 text-gray-700">{rij.gebruik}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{rij.cap}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{rij.aanschaf}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{rij.onderhoud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">Indicatieve prijzen, mei 2026.</p>
        </section>

        {/* pH beheer */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">pH-beheer bij osmosewater: buffering is nodig</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een van de belangrijkste praktische aandachtspunten bij osmosewater is pH-stabiliteit. Normaal leidingwater bevat calcium- en magnesiumcarbonaten die fungeren als pH-buffer: kleine hoeveelheden zuur of base veranderen de pH nauwelijks. Osmosewater heeft dit bufferend vermogen vrijwel niet.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dit betekent dat de pH van osmosewater snel schommelt zodra je chloor, pH-plus, pH-min of andere behandelingsmiddelen toevoegt. Kleine overdoseringen kunnen de pH sterk doen stijgen of dalen, wat de desinfectie-efficientie verstoort (chloor werkt optimaal bij pH 7,2-7,6) en de badervaring verslechtert.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De oplossing is relatief eenvoudig: voeg een buffermiddel toe als je een bad met osmosewater vult. Natriumbicarbonaat (baking soda) is een klassiek, goedkoop en veilig middel om de carbonaathardheid (alkaliniteit) van het water te verhogen. Een alkaliniteit van 80-120 mg/L als CaCO3 geeft voldoende buffering voor stabiele pH-condities.
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-4 my-4">
            <p className="font-semibold text-[#003F5C] mb-2">Praktische stappen bij vullen met osmosewater:</p>
            <ol className="space-y-1.5 text-sm text-gray-700 list-decimal list-inside">
              <li>Vul het bad met osmosewater</li>
              <li>Meet de TDS (doel: onder 50 mg/L)</li>
              <li>Voeg natriumbicarbonaat toe: 15-25 gram per 1.000 liter voor basisbuffering</li>
              <li>Meet en corrigeer de pH naar 7,2-7,6</li>
              <li>Voeg chloor toe volgens standaard dosering (maar start met lagere dosering)</li>
              <li>Meet na 24 uur opnieuw en corrigeer indien nodig</li>
            </ol>
          </div>
        </section>

        {/* Zoutwaterzwembaden */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Osmosewater in zoutwaterzwembaden</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zoutwaterzwembaden gebruiken een elektrolysesysteem dat natriumchloride (NaCl) omzet in hypochloorzuur voor desinfectie. De zoutconcentratie ligt doorgaans op 2.000-3.500 mg/L. De totale TDS van zoutwaterzwembaden is daardoor van nature hoger dan die van traditionele chlorering, maar de TDS bestaat grotendeels uit het gewenste natriumchloride.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Osmosewater gebruiken in een zoutwaterzwembad heeft een bijkomend voordeel: de storingen in de waterbalans die veroorzaakt worden door andere mineralen (calciumhardheid, magnesium, andere zouten) zijn minimaal. Je hebt meer controle over precies welke stoffen in het water zitten.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Aandachtspunt: doseer het zout nauwkeurig na het vullen met osmosewater. Osmosewater heeft een startconcentratie van vrijwel nul, dus je moet zelf de volledige zoutconcentratie opbouwen. Dit vraagt enige precisie maar geeft je een schoner, beter gecontroleerd systeem op de lange termijn.
          </p>
        </section>

        {/* Professionele osmosewagen */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Alternatief voor grote volumes: osmosewagen verhuur</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor grote zwembaden of voor het snel eenmalig vernieuwen van het water is een huishoudelijk osmosefilter niet praktisch. Professionele osmose-installaties op een wagen produceren 2.000-5.000 liter osmosewater per uur. In een dag kan een groot privezwembad van 50 kubieke meter volledig worden ververst.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Verhuur van een osmosewagen kost doorgaans 150-400 euro per dag exclusief transport. Voor zwembaden die jaarlijks worden ververst is dit een praktische optie zonder dat je een dure vaste installatie nodig hebt. Zoek naar bedrijven die osmosewagen of waterontharder-verhuur aanbieden in jouw regio.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen: osmosewater voor zwembad en spa
          </h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        {/* Interne links */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/osmose-water', label: 'Wat is osmosewater?' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose: complete uitleg' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmosefilter kopen: koopgids 2026' },
              { href: '/waterfilter', label: 'Alle waterfilters vergelijken' },
              { href: '/osmose-water/aquarium', label: 'Osmosewater voor aquarium' },
              { href: '/osmose-water/gezondheid', label: 'Osmosewater en gezondheid' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>-&gt;</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
