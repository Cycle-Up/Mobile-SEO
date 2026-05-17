import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Hoe Werkt een Waterontharder? Uitleg 2026',
  description:
    'Complete uitleg over hoe een waterontharder werkt: ionenwisseling, brine tank, harsbad, regeneratiecyclus, zoutverbruik per gezinsgrootte en vergelijking met.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/werking' },
  openGraph: {
    title: 'Hoe Werkt een Waterontharder? Uitleg 2026',
    description:
      'Begrijp de werking van de waterontharder: ionenwisseling (calcium/magnesium → natrium), brine tank, harsbad, regeneratie en het verschil met zoutloos (TAC).',
    url: 'https://waterfilterplatform.nl/waterontharder/werking',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe werkt ionenwisseling in een waterontharder?',
    answer:
      'Bij ionenwisseling stroomt hard leidingwater door een bed van kleine harskorrels. Deze korrels zijn beladen met natriumionen (Na⁺). Calcium (Ca²⁺) en magnesium (Mg²⁺) — de veroorzakers van kalk — hebben een sterkere bindingskracht aan het hars dan natrium. Ze verdringen de natriumionen en hechten aan het hars. Tegelijkertijd komen twee natriumionen vrij voor elke bivalente ion die bindt. Het resultaat: zacht water met natriumionen in plaats van calcium en magnesium.',
  },
  {
    question: 'Wat is een regeneratiecyclus bij een waterontharder?',
    answer:
      'Na verloop van tijd is het harsbed verzadigd: alle natriumionen zijn uitgewisseld en het hars kan geen kalk meer opnemen. De regeneratiecyclus laadt het hars opnieuw op. Een geconcentreerde zoutoplossing (pekelwater, NaCl-brine) uit het zouttankreservoir spoelt door het harsbed. De hoge natriumconcentratie verdringt de opgeslagen calcium- en magnesiumionen, die samen met het spoelwater naar de riolering worden afgevoerd. Na spoeling met schoon water is het harsbed opnieuw beladen met natrium. De cyclus duurt 1–2 uur.',
  },
  {
    question: 'Hoeveel zout verbruikt een waterontharder?',
    answer:
      'Het zoutverbruik hangt af van het waterverbruik, de waterhardheid en de instelling van de ontharder. Een eenpersoonshuishouden in een gemiddeld hard-watergebied (18 °dH) verbruikt circa 25–50 kg per jaar. Een gezin van vier personen verbruikt 60–150 kg per jaar. Vraaggestuurde ontharders meten het werkelijke verbruik en regenereren alleen wanneer nodig — ze verbruiken 30–50% minder zout dan tijdgestuurde modellen.',
  },
  {
    question: 'Wat is het verschil tussen een zoutontharder en een zoutloze waterontharder (TAC)?',
    answer:
      'Een klassieke zoutontharder gebruikt ionenwisseling: calcium en magnesium worden letterlijk uit het water verwijderd en vervangen door natrium. Water wordt echt zacht (0–3 °dH). Een zoutloze waterontharder op basis van TAC (Template Assisted Crystallization) zet de kalkverbindingen om in kleine kristaldeeltjes die niet aan oppervlakken hechten — maar het calcium en magnesium blijven fysiek in het water aanwezig. TAC voorkomt kalkaanslag maar maakt het water niet zacht. Bij hoge waterhardheid (>25 °dH) is TAC minder effectief dan een klassieke ionenwisselaar.',
  },
  {
    question: 'Wanneer kies ik voor een waterontharder in plaats van een osmose filter?',
    answer:
      'Een waterontharder is de juiste keuze als je de hele woning wilt beschermen tegen kalk: douche, badkamer, wasmachine, vaatwasser, cv-ketel en leidingen. Osmose filtert alleen het drinkwater aan de keukenkraan en verwijdert een veel breder spectrum aan stoffen (PFAS, nitraten, pesticiden), maar onthardt niet het volledige huishoudwater. Veel huizenbezitters met hard water combineren beide: een waterontharder voor de woning en een osmose systeem voor puur drinkwater op de keukentap.',
  },
];

const componentenOntharder = [
  {
    naam: 'Harsbedreservoir (mineraalreservoir)',
    beschrijving:
      'Cilindervormig drukvat gevuld met miljoenen kleine ionenwisselaarharskorrels van polystereen sulfaat. De korrels zijn negatief geladen en beladen met natriumionen. Dit is het actieve filtermedium dat de kalkmineralen opvangt. De capaciteit — uitgedrukt in graden hardheid × liter — bepaalt hoe lang de ontharder tussen regeneraties kan werken.',
    detail: 'Hars heeft levensduur van 8–15 jaar',
  },
  {
    naam: 'Brine tank (zouttankreservoir)',
    beschrijving:
      'Een afzonderlijk reservoir voor het onthardingszout (natriumchloride, NaCl). Water in de brine tank lost het zout op tot een verzadigde zoutoplossing (pekelwater, ±26% NaCl). Tijdens regeneratie pompt het systeem dit pekelwater door het harsbed. De brine tank moet regelmatig worden bijgevuld met onthardingszout (tabletten of blokken — geen gewoon keukenzout).',
    detail: 'Vulfrequentie: maandelijks tot tweemaandelijks',
  },
  {
    naam: 'Regelklep (control valve)',
    beschrijving:
      'De regeleenheid stuurt alle fasen van het ontharderproces aan: de normale waterstroming (service-modus), de verschillende stappen van de regeneratiecyclus en de terugkeer naar service-modus. Moderne regelkleppen zijn vraaggestuurd: ze meten het werkelijke waterverbruik via een doorstroommeter en starten regeneratie alleen wanneer de harscapaciteit bijna uitgeput is. Dit bespaart significant zout en water ten opzichte van tijdgestuurde modellen.',
    detail: 'Vraaggestuurd bespaart 30–50% zout vs tijdgestuurd',
  },
  {
    naam: 'Bypass ventiel',
    beschrijving:
      'Een handmatig of automatisch bypass-systeem dat het ongefilterde leidingwater rechtstreeks naar de woning leidt terwijl de ontharder in onderhoudsmodus is of wordt vervangen. Essentieel voor veilig en ongestoord gebruik tijdens serviceperiodes.',
    detail: 'Vereist voor onderhoud en noodsituaties',
  },
];

const regeneratieFasen = [
  {
    fase: 'Backwash',
    duur: '5–10 min',
    beschrijving:
      'Water stroomt omgekeerd door het harsbed om vastgeklonterde deeltjes los te maken en het hars op te schudden. Slib en fijne deeltjes worden via de drain (afvoer) afgevoerd.',
  },
  {
    fase: 'Brine draw (pekelwater injectie)',
    duur: '20–60 min',
    beschrijving:
      'Geconcentreerd pekelwater (NaCl-oplossing) stroomt langzaam door het harsbed. De hoge natriumconcentratie verdringt de opgeslagen calcium en magnesium via massakrachten. Dit is de kernstap van regeneratie.',
  },
  {
    fase: 'Slow rinse (langzaam naspoelen)',
    duur: '20–30 min',
    beschrijving:
      'Schoon water spoelt de resterende pekeloplossing en de verdrongen Ca²⁺/Mg²⁺ ionen langzaam uit het harsbed richting afvoer. Het hars wordt opnieuw beladen met Na⁺ uit de slokende pekeloplossing.',
  },
  {
    fase: 'Fast rinse (snel naspoelen)',
    duur: '5–10 min',
    beschrijving:
      'Een snelle doorstroming van schoon water verwijdert de laatste resten pekelwater en zout uit het harsbed en de leidingen. Na deze stap is het water van normale kwaliteit.',
  },
  {
    fase: 'Brine refill (pekelreservoir bijvullen)',
    duur: '5–10 min',
    beschrijving:
      'Het systeem vult de brine tank met een gedoseerde hoeveelheid water om de volgende pekeloplossing klaar te maken voor de volgende regeneratiecyclus.',
  },
];

const zoutVerbruik = [
  {
    gezinsgrootte: '1 persoon',
    hardheid: '15 °dH (matig)',
    verbruikKgJr: '20 – 35 kg',
    kostenJr: '€ 5 – 15',
  },
  {
    gezinsgrootte: '2 personen',
    hardheid: '15 °dH (matig)',
    verbruikKgJr: '35 – 60 kg',
    kostenJr: '€ 7 – 24',
  },
  {
    gezinsgrootte: '4 personen',
    hardheid: '18 °dH (hard)',
    verbruikKgJr: '60 – 120 kg',
    kostenJr: '€ 12 – 48',
  },
  {
    gezinsgrootte: '4 personen',
    hardheid: '25 °dH (zeer hard)',
    verbruikKgJr: '90 – 160 kg',
    kostenJr: '€ 18 – 64',
  },
  {
    gezinsgrootte: '6+ personen',
    hardheid: '20 °dH (hard)',
    verbruikKgJr: '120 – 200 kg',
    kostenJr: '€ 24 – 80',
  },
];

const soortentabel = [
  {
    type: 'Zoutontharder (ionenwisselaar)',
    techniek: 'Ionenwisseling Ca/Mg → Na',
    effectiviteit: 'Verwijdert kalk 95–99%',
    uitvoer: 'Echt zacht water (0–3 °dH)',
    nadelen: 'Natriumtoevoeging, zoutgebruik, onderhoud',
    kosten: '€ 500 – 1.500 aanschaf',
    highlight: true,
  },
  {
    type: 'Zoutloze waterontharder (TAC)',
    techniek: 'Template Assisted Crystallization',
    effectiviteit: 'Voorkomt kalkaanslag (verwijdert kalk niet)',
    uitvoer: 'Kalk blijft in water, hecht niet aan oppervlak',
    nadelen: 'Minder effectief bij >25 °dH; water technisch nog "hard"',
    kosten: '€ 200 – 800 aanschaf',
    highlight: false,
  },
  {
    type: 'Elektronische/magnetische ontharding',
    techniek: 'Magnetisch of elektrisch veld',
    effectiviteit: 'Wetenschappelijk omstreden, wisselende resultaten',
    uitvoer: 'Onbewezen effect op kalkaanslag',
    nadelen: 'Geen bewijs van werkzaamheid in onafhankelijk onderzoek',
    kosten: '€ 30 – 200 aanschaf',
    highlight: false,
  },
];

export default function WaterOntharderWerkingPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/waterontharder' },
          { name: 'Werking', url: 'https://waterfilterplatform.nl/waterontharder/werking' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontharder" className="hover:text-[#005F8A]">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>Werking</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Hoe Werkt een Waterontharder? Uitleg 2026
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een <strong>waterontharder</strong> werkt via ionenwisseling: calcium- en
            magnesiumionen — de veroorzakers van kalk — worden uitgewisseld tegen natriumionen in
            een harsbed. Op deze pagina leggen we het proces stap voor stap uit: de componenten
            (brine tank, harsbed, regelklep), de regeneratiecyclus, het zoutverbruik per
            gezinsgrootte en de vergelijking met zoutloze en elektronische alternatieven.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/waterontharder/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Waterontharder kopen →
            </Link>
            <Link
              href="/waterontharder"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Overzicht waterontharders
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
            <li><a href="#ionenwisseling" className="hover:underline">Ionenwisseling uitgelegd</a></li>
            <li><a href="#componenten" className="hover:underline">Componenten: brine tank, harsbed, klep</a></li>
            <li><a href="#regeneratie" className="hover:underline">Regeneratiecyclus stap voor stap</a></li>
            <li><a href="#zout" className="hover:underline">Zoutverbruik per huishoudgrootte</a></li>
            <li><a href="#soorten" className="hover:underline">Zout vs zoutloos vs elektronisch</a></li>
            <li><a href="#keuze" className="hover:underline">Ontharder of osmose: wanneer wat?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Ionenwisseling */}
        <section id="ionenwisseling">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Ionenwisseling: hoe calcium en magnesium worden verwijderd
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De term <strong>ionenwisseling</strong> (ook: ionenuitwisseling of ion exchange)
            beschrijft een chemisch proces waarbij ionen in het water worden uitgewisseld met ionen
            op een vast medium — in dit geval de harskorrels. Het proces is omkeerbaar en kan
            worden gereset door de harskorrels te regenereren met een zoutoplossing.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Nederlands leidingwater bevat calcium (Ca²⁺) en magnesium (Mg²⁺) opgelost als
            bicarbonaten en sulfaten — dat zijn de hardheidsmineralen die verantwoordelijk zijn voor
            witte aanslag op kranen, tegels en in apparaten. Hieronder het proces in vier stappen:
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                nr: '1',
                titel: 'Hard water stroomt het harsbed in',
                desc: 'Leidingwater met calcium- en magnesiumionen stroomt van boven naar beneden door het harsbedreservoir. De kleine harskorrels zijn negatief geladen en bezet met natriumionen (Na⁺).',
              },
              {
                nr: '2',
                titel: 'Calcium en magnesium binden aan het hars',
                desc: 'Ca²⁺ en Mg²⁺ hebben een hogere ladingsdichtheid dan Na⁺ en worden sterker aangetrokken door de negatief geladen harskorrels. Ze verdringen de natriumionen en binden aan het harsbed. De selectiviteitsvolgorde van het hars is: Ca²⁺ > Mg²⁺ > Na⁺.',
              },
              {
                nr: '3',
                titel: 'Natrium komt vrij in het water',
                desc: 'Voor elke Ca²⁺ die aan het hars bindt, komen 2 Na⁺ vrij. Voor elke Mg²⁺ ook 2 Na⁺. Het water dat het harsbed verlaat, is "zacht": het bevat natriumionen in plaats van kalk, maar met de rest van de waterkwaliteit onveranderd.',
              },
              {
                nr: '4',
                titel: 'Harsbed raakt verzadigd — regeneratie volgt',
                desc: 'Na verloop van tijd zijn alle Na⁺ op het hars uitgewisseld. Het hars kan geen kalk meer opnemen. De regelklep detecteert dit (bij vraaggestuurde modellen via doorstroommeters) en start de regeneratiecyclus.',
              },
            ].map(s => (
              <div key={s.nr} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {s.nr}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Chemische reactie (vereenvoudigd):</strong>
            <div className="mt-2 font-mono text-[#003F5C] bg-white/70 rounded-lg p-3 text-xs leading-relaxed">
              <div>Service (ontharding):</div>
              <div className="ml-4">Ca²⁺ + 2 Na-Hars → Ca-Hars + 2 Na⁺</div>
              <div className="ml-4">Mg²⁺ + 2 Na-Hars → Mg-Hars + 2 Na⁺</div>
              <div className="mt-2">Regeneratie:</div>
              <div className="ml-4">Ca-Hars + 2 Na⁺ (pekel) → 2 Na-Hars + Ca²⁺ (afvoer)</div>
            </div>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Meer over de achtergrond van waterhardheid en wat er precies in hard leidingwater zit,
            lees je in ons artikel op de{' '}
            <Link href="/kennisbank/waterontharder" className="text-[#005F8A] underline hover:no-underline">
              kennisbank over waterontharders
            </Link>
            {' '}en op de pagina{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid per gemeente
            </Link>
            .
          </p>
        </section>

        {/* Componenten */}
        <section id="componenten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Componenten: brine tank, harsbed en regelklep
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een klassieke waterontharder bestaat uit drie hoofdcomponenten die samenwerken om
            continu zacht water te leveren. Het begrijpen van elke component helpt bij de juiste
            keuze, installatie en het uitvoeren van onderhoud.
          </p>
          <div className="space-y-4">
            {componentenOntharder.map(c => (
              <div key={c.naam} className="border border-gray-100 rounded-2xl p-5">
                <div className="flex justify-between items-start gap-2 mb-3 flex-wrap">
                  <p className="font-bold text-gray-900">{c.naam}</p>
                  <span className="text-xs bg-[#E0F2FE] text-[#003F5C] font-medium px-2.5 py-1 rounded-full shrink-0">
                    {c.detail}
                  </span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{c.beschrijving}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-gray-50 rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2 text-sm">
              Tijdgestuurd vs vraaggestuurd — welk verschil maakt het?
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Oudere ontharders regenereren op een vast tijdstip (bijv. elke 3 dagen om 2:00
              &apos;s nachts), ongeacht hoeveel water daadwerkelijk is verbruikt. Vraaggestuurde
              ontharders meten het waterverbruik via een doorstroommeter en regenereren pas wanneer
              de harscapaciteit bijna op is. Dit leidt tot 30–50% lager zoutverbruik, minder
              spoelwater en minder belasting voor het riool. Bij de aankoop van een nieuwe ontharder
              is een vraaggestuurd model de aanbevolen keuze.
            </p>
          </div>
        </section>

        {/* Regeneratiecyclus */}
        <section id="regeneratie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            De regeneratiecyclus stap voor stap
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De regeneratiecyclus is het proces waarbij het uitgeputte harsbed opnieuw wordt
            opgeladen met natriumionen. De cyclus duurt doorgaans <strong>60–120 minuten</strong>{' '}
            en wordt bij moderne ontharders ingepland op het tijdstip met het laagste waterverbruik
            (doorgaans &apos;s nachts). Tijdens regeneratie levert de ontharder geen zacht water —
            bij twin-tank systemen (dubbele kolom) neemt de tweede kolom de levering over zodat er
            altijd zacht water beschikbaar is.
          </p>
          <div className="space-y-3 mb-5">
            {regeneratieFasen.map((f, i) => (
              <div key={f.fase} className="flex gap-4 items-start border border-gray-100 rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-[#003F5C] text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline gap-2 flex-wrap mb-1">
                    <p className="font-semibold text-gray-900 text-sm">{f.fase}</p>
                    <p className="text-xs text-[#005F8A] font-medium shrink-0">{f.duur}</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.beschrijving}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
            <p className="font-semibold text-amber-900 mb-2">Water- en zoutverbruik per regeneratie</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Een enkele regeneratiecyclus verbruikt typisch <strong>4–8 kg zout</strong> en{' '}
              <strong>60–200 liter spoelwater</strong>. Het spoelwater — beladen met calcium,
              magnesium en zout — wordt geloosd op de riolering. Sommige gemeenten beperken het
              gebruik van klassieke waterontharders vanwege de impact op de waterzuivering. Controleer
              altijd of er lokale regels gelden voordat u een waterontharder installeert.
            </p>
          </div>
        </section>

        {/* Zoutverbruik */}
        <section id="zout">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Zoutverbruik: berekening per gezinsgrootte en waterhardheid
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het jaarlijkse zoutverbruik is afhankelijk van drie factoren: (1) het dagelijkse
            waterverbruik van het huishouden, (2) de waterhardheid van het leidingwater en (3) de
            ingestelde doeelhardheid van het zachte water. De vuistregel: per{' '}
            <strong>1 °dH verlaging × 1.000 liter water</strong> verbruikt het harsbed circa{' '}
            <strong>6–7 gram NaCl</strong> bij een efficiënte vraaggestuurde ontharder.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Het gemiddeld waterverbruik per persoon in Nederland is circa{' '}
            <strong>120–130 liter per dag</strong> (drinkwater, douche, toilet, wasmachine,
            vaatwasser). Hieronder een tabel met indicatieve zoutverbruiken:
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-5">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Gezinsgrootte</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Waterhardheid</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Verbruik/jaar</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Kosten/jaar</th>
                </tr>
              </thead>
              <tbody>
                {zoutVerbruik.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white border-b border-gray-100'}>
                    <td className="py-2.5 px-3 font-medium">{r.gezinsgrootte}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.hardheid}</td>
                    <td className="py-2.5 px-3 text-right font-medium text-[#005F8A]">{r.verbruikKgJr}</td>
                    <td className="py-2.5 px-3 text-right">{r.kostenJr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mb-5">
            Zoutprijzen berekend op €0,20–0,40/kg voor onthardingszout in tabletten of blokken.
            Vraaggestuurde ontharders zitten aan de onderkant van de bandbreedtes; tijdgestuurde
            modellen aan de bovenkant of hoger.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2 text-sm">
              Zout besparen — praktische tips
            </p>
            <ul className="space-y-2">
              {[
                'Kies een vraaggestuurde ontharder in plaats van tijdgestuurd — dit is de grootste besparing.',
                'Stel de doeelhardheid niet lager in dan nodig. 5–8 °dH is voldoende zacht voor apparaatbescherming; instelling op 0 °dH verbruikt meer zout.',
                'Gebruik zout in blok- of tablettenform van hoge kwaliteit (>99,5% NaCl). Goedkoop zout met meer onzuiverheden kan het harsbed vervuilen.',
                'Controleer of de ontharder in eco-modus of efficiëntiemodus staat als die beschikbaar is.',
                'Vernieuw het harsbed na 10–12 jaar — oud hars heeft meer zout nodig om volledig te regenereren.',
              ].map(tip => (
                <li key={tip} className="flex gap-2 items-start text-sm text-gray-700">
                  <span className="text-[#005F8A] shrink-0 mt-0.5 font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Soorten */}
        <section id="soorten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Zoutontharder vs zoutloos (TAC) vs elektronisch/magnetisch
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De markt voor waterontharding biedt drie verschillende technologieën. Ze worden
            allemaal als &ldquo;waterontharder&rdquo; aangeboden, maar de werking en effectiviteit
            lopen sterk uiteen. Een eerlijk overzicht:
          </p>
          <div className="space-y-4 mb-5">
            {soortentabel.map(s => (
              <div
                key={s.type}
                className={`rounded-2xl border p-5 ${s.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start gap-2 mb-3 flex-wrap">
                  <p className="font-bold text-gray-900 flex-1">{s.type}</p>
                  {s.highlight && (
                    <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full shrink-0">
                      Meest effectief
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                  <div><span className="text-gray-400">Techniek:</span> <span className="text-gray-700">{s.techniek}</span></div>
                  <div><span className="text-gray-400">Effectiviteit:</span> <span className="text-gray-700">{s.effectiviteit}</span></div>
                  <div><span className="text-gray-400">Uitvoerwater:</span> <span className="text-gray-700">{s.uitvoer}</span></div>
                  <div><span className="text-gray-400">Kosten aanschaf:</span> <span className="text-gray-700">{s.kosten}</span></div>
                  <div className="sm:col-span-2"><span className="text-gray-400">Nadelen:</span> <span className="text-gray-700">{s.nadelen}</span></div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
            <p className="font-semibold text-amber-900 mb-2">
              Let op: &ldquo;zoutvrij&rdquo; is niet hetzelfde als &ldquo;onthard&rdquo;
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              TAC-systemen worden soms als &ldquo;zoutvrije waterontharder&rdquo; vermarkt, maar ze
              ontharden het water technisch gezien niet. Calcium en magnesium blijven in het water —
              ze worden alleen omgezet in een kristalvorm die minder neiging heeft om op oppervlakken
              te hechten. In een TDS-meting of hardheidstest zal het water nog steeds &ldquo;hard&rdquo;
              scoren. Voor wie wil dat de waterhardheid daadwerkelijk daalt — bijvoorbeeld voor
              medische redenen of voor een specifieke hardheidsinstelling — is een klassieke
              ionenwisselaar de enige werkende keuze.
            </p>
          </div>
        </section>

        {/* Keuze */}
        <section id="keuze">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waterontharder of osmose filter: wanneer kies je wat?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De waterontharder en het osmose filter zijn complementaire technologieën — geen
            concurrenten. Ze pakken elk een ander probleem aan, en in sommige gevallen is een
            combinatie van beide de optimale oplossing. Hieronder een eerlijk keuzeoverzicht:
          </p>
          <div className="space-y-4 mb-5">
            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <p className="font-bold text-[#003F5C] mb-2">Kies voor een waterontharder als:</p>
              <ul className="space-y-2">
                {[
                  'Je in een gebied woont met hard water (15+ °dH) en last hebt van witte aanslag op tegels, kranen en douchecabines',
                  'Je wil de levensduur van cv-ketel, wasmachine, vaatwasser en waterkoker verlengen',
                  'Je de hele woning wil beschermen — inclusief douchewater, was en leidingen',
                  'Je eigenaar bent van het huis en een ingreep op de hoofdleiding kunt doen',
                ].map(punt => (
                  <li key={punt} className="flex gap-2 items-start text-sm text-gray-700">
                    <span className="text-green-600 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{punt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <p className="font-bold text-[#003F5C] mb-2">
                Kies voor een{' '}
                <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
                  osmose filter
                </Link>{' '}
                als:
              </p>
              <ul className="space-y-2">
                {[
                  'Je wil dat drinkwater vrij is van chloor, nitraten, PFAS, zware metalen en microplastics',
                  'Je geen natriumtoevoeging wil in het drinkwater (natriumarm dieet, zwangeren, zuigelingen)',
                  'Je een huurder bent of geen ingreep op de hoofdleiding kunt doen',
                  'Je een budgetvriendelijke en compacte oplossing zoekt die je zelf installeert',
                ].map(punt => (
                  <li key={punt} className="flex gap-2 items-start text-sm text-gray-700">
                    <span className="text-green-600 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{punt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#E0F2FE] rounded-2xl p-5">
              <p className="font-bold text-[#003F5C] mb-2">Combinatie: waterontharder + osmose</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                De meeste experts raden in hard-watergebieden een combinatie aan: een waterontharder
                op de hoofdleiding voor bescherming van apparaten en leidingen, plus een osmose
                systeem of 4-in-1 kraan op de keukentap voor puur drinkwater. Het osmose systeem
                profiteert ook van het zachte voedingswater — zacht water verlengt de levensduur
                van het RO-membraan aanzienlijk doordat er minder kalkvorming op het membraan
                optreedt. Bekijk de{' '}
                <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">
                  4-in-1 kraan met osmose
                </Link>
                {' '}als je kiest voor gefilterd én kokend water uit één kraan.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wil je weten hoe hard het leidingwater in jouw gemeente is? Bekijk onze database op de
            pagina{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid per gemeente
            </Link>
            . Of lees het volledige overzicht van waterontharder opties op de{' '}
            <Link href="/waterontharder" className="text-[#005F8A] underline hover:no-underline">
              waterontharder hub
            </Link>
            .
          </p>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/waterontharder',
                title: 'Waterontharder — overzicht',
                desc: 'Types, kosten, nadelen en vergelijking met alternatieve technieken.',
              },
              {
                href: '/waterontharder/kopen',
                title: 'Waterontharder kopen',
                desc: 'Koopadvies: wat je moet weten vóór de aanschaf van een waterontharder.',
              },
              {
                href: '/kennisbank/waterontharder',
                title: 'Kennisbank: waterontharder',
                desc: 'Technische diepgang: harsbedtypes, regeneratiechemie en marktoverzicht.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Check de waterhardheid in jouw gemeente en of een ontharder zinvol is.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose',
                desc: 'Alternatief voor drinkwater: 95–99% zuivering zonder natriumtoevoeging.',
              },
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Osmose systeem kopen',
                desc: 'Vergelijk 4-in-1 kranen met osmose en andere osmose systemen.',
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
            Veelgestelde vragen over de werking van een waterontharder
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
