import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterontkalker vs waterontharder: wat is het verschil?',
  description:
    'Waterontkalker of waterontharder - wat is het verschil? Uitleg van ionenwisseling vs. andere methoden, voor- en nadelen en welke u nodig heeft.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontkalker/vs-waterontharder' },
  openGraph: {
    title: 'Waterontkalker vs waterontharder: wat is het verschil?',
    description:
      'Verwarrende terminologie uitgelegd: ionenwisseling, magneetontharder, TAC, nanofiltratie en osmose vergeleken op effectiviteit, kosten en toepassingen.',
    url: 'https://waterfilterplatform.nl/waterontkalker/vs-waterontharder',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is het verschil tussen een waterontkalker en een waterontharder?',
    answer:
      'In de technische betekenis is een waterontharder een apparaat dat calcium en magnesium daadwerkelijk uit het water verwijdert via ionenwisseling. Een waterontkalker (in de enge zin) beïnvloedt alleen de kristalstructuur van kalk zodat het minder hecht aan oppervlakken, maar verwijdert niets. In Nederland worden beide termen in de praktijk door elkaar gebruikt voor ionenwisselaars. Lees altijd de technische specificaties om te weten wat u koopt.',
  },
  {
    question: 'Verwijdert een magneetontharder echt kalk?',
    answer:
      'Nee. Een magneetontharder verandert de oriëntatie van kalkdeeltjes tijdelijk, waardoor ze minder snel aan leidingwanden hechten. De calcium en magnesium blijven volledig in het water aanwezig. Het effect verdwijnt bovendien snel nadat het water de magneet passeert (doorgaans binnen enkele uren). Onafhankelijke studies vinden geen statistisch significant voordeel voor magneetontharders bij het voorkomen van kalkschade.',
  },
  {
    question: 'Wat is TAC en hoe verschilt het van ionenwisseling?',
    answer:
      'TAC (Template Assisted Crystallization) laat kalk microscopisch kleine kristallen vormen op polymere media. Die kristallen lossen los en spoelen mee met het water zonder te hechten aan leidingen. TAC verwijdert kalk niet; het verandert hoe kalk zich gedraagt. Ionenwisseling verwijdert calcium en magnesium permanent uit het water en maakt het chemisch zacht. Voor bescherming van leidingen en cv-ketels kan TAC nuttig zijn; voor echt zacht water (huid, haar, was) is ionenwisseling de enige effectieve keuze.',
  },
  {
    question: 'Wanneer is ionenwisseling echt nodig?',
    answer:
      'Ionenwisseling is echt nodig wanneer u (1) het waswater zacht wilt maken (minder zeepverbruik, zachtere kleding), (2) uw cv-ketel optimaal wilt beschermen in een harde waterzone, (3) last heeft van kalkranden in douche en bad die u wilt verminderen, of (4) gevoelige huid of eczeem heeft die verslechtert door hard water. Voor alleen apparaatbescherming of leidingbescherming kan een zoutloze methode als TAC soms volstaan.',
  },
  {
    question: 'Is nanofiltratie een alternatief voor een waterontharder?',
    answer:
      'Nanofiltratie verwijdert een groot deel van de calcium- en magnesiumionen (60-80%) en produceert gedeeltelijk zacht water. Het is effectiever dan TAC maar duurder in aanschaf en exploitatie (membraanvervanging). Nanofiltratie is in Nederland relatief zeldzaam voor huishoudelijke toepassing. Omgekeerde osmose verwijdert 95-99% van alle ionen inclusief hardheid, maar produceert gedemineraliseerd water dat voor sommige gebruikers te zuiver is.',
  },
  {
    question: 'Wanneer is omgekeerde osmose beter dan een waterontharder?',
    answer:
      'Omgekeerde osmose is beter dan een waterontharder als u (1) ook chloor, nitraten, PFAS en microplastics wilt verwijderen, (2) in een huurwoning woont, (3) een natriumbeperkt dieet volgt, of (4) slechts voor drinkwater aan de keukenkraan een oplossing zoekt. Osmose maakt het drinkwater volledig puur maar behandelt geen douche- of waswater. Een waterontharder behandelt al het water in huis maar verbetert de drinkwaterkwaliteit voor andere verontreinigingen niet.',
  },
  {
    question: 'Welke certificering moet een waterontharder hebben?',
    answer:
      'NSF/ANSI 44 is de internationale productnorm voor residentiële ionenwisselaars. Een gecertificeerd systeem voldoet aan normen voor harscapaciteit, zoutefficiëntie en materiaalveiligheid. In Nederland geldt NEN 1006 als installatienorm voor drinkwaterinstallaties. Magnetische en elektronische ontkalkers hebben geen vergelijkbare effectiviteitsnorm; alleen NSF/ANSI 61 voor materiaalveiligheid is van toepassing.',
  },
  {
    question: 'Heeft een waterontharder invloed op het natriumgehalte van drinkwater?',
    answer:
      'Ja. Bij ionenwisseling worden calcium en magnesium vervangen door natrium. Bij een waterhardheid van 20 °dH voegt de ontharder circa 46 mg Na+ per liter toe aan het water. De Europese aanbeveling is maximaal 200 mg/l. Voor gezonde volwassenen is dit geen probleem, maar voor mensen met hypertensie, nierproblemen of een streng natriumbeperkt dieet kan dit relevant zijn. Een osmosefilter aan de keukenkraan verwijdert dit natrium weer.',
  },
];

const vergelijkingMethoden = [
  {
    methode: 'Ionenwisseling (waterontharder)',
    kalkWeg: 'Ja — Ca2+/Mg2+ verwijderd',
    natriumToe: 'Ja (Ca/Mg vervangen door Na)',
    certificering: 'NSF/ANSI 44',
    prijs: '€700-2.000',
    highlight: true,
  },
  {
    methode: 'Magneetontharder',
    kalkWeg: 'Nee (kristaloriëntatie)',
    natriumToe: 'Nee',
    certificering: 'NSF/ANSI 61 (materiaal)',
    prijs: '€30-80',
    highlight: false,
  },
  {
    methode: 'TAC zoutloos',
    kalkWeg: 'Nee (kristalvorm veranderd)',
    natriumToe: 'Nee',
    certificering: 'NSF/ANSI 61',
    prijs: '€150-400',
    highlight: false,
  },
  {
    methode: 'Nanofiltratie',
    kalkWeg: 'Gedeeltelijk (60-80%)',
    natriumToe: 'Nee',
    certificering: 'NSF/ANSI 58',
    prijs: '€800-2.500',
    highlight: false,
  },
  {
    methode: 'Omgekeerde osmose',
    kalkWeg: 'Ja, 95-99% (drinkwater)',
    natriumToe: 'Nee',
    certificering: 'NSF/ANSI 58',
    prijs: '€400-1.200',
    highlight: false,
  },
];

export default function WaterOntkalkerVsWaterOntharderPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontkalker', url: 'https://waterfilterplatform.nl/waterontkalker' },
          { name: 'Vs waterontharder', url: 'https://waterfilterplatform.nl/waterontkalker/vs-waterontharder' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterontkalker vs waterontharder: wat is het verschil?',
          description:
            'Waterontkalker of waterontharder - wat is het verschil? Uitleg van ionenwisseling vs. andere methoden, voor- en nadelen en welke u nodig heeft.',
          datePublished: '2026-05-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/waterontkalker/vs-waterontharder',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontkalker" className="hover:text-[#005F8A]">Waterontkalker</Link>
            <span className="mx-2">/</span>
            <span>Vs waterontharder</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontkalker vs waterontharder: wat is het verschil?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            In Nederland worden <strong>waterontkalker</strong> en <strong>waterontharder</strong> door
            elkaar gebruikt, maar technisch zijn het verschillende dingen. Op deze pagina leggen we het
            verschil uit, vergelijken alle methoden en helpen u kiezen wat u werkelijk nodig heeft.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#vergelijking"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Vergelijkingstabel &rarr;
            </Link>
            <Link
              href="/waterontkalker/soorten"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Alle soorten ontkalkers
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <QuickAnswer answer="In Nederland worden waterontkalker en waterontharder door elkaar gebruikt. Technisch is een waterontharder (ionenwisseling) de enige methode die calcium en magnesium echt verwijdert. Ontkalkers (magnetisch, elektronisch, TAC) veranderen het gedrag van kalk maar laten de mineralen in het water. Voor echt zacht water is ionenwisseling nodig; voor leidingbescherming kan TAC volstaan." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#terminologie" className="hover:underline">Terminologieverwarring</a></li>
            <li><a href="#vergelijking" className="hover:underline">Vergelijkingstabel 5 methoden</a></li>
            <li><a href="#ionenwisseling-nodig" className="hover:underline">Wanneer ionenwisseling nodig?</a></li>
            <li><a href="#zoutloos" className="hover:underline">Zoutloze alternatieven</a></li>
            <li><a href="#osmose" className="hover:underline">Wanneer osmose beter is</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Terminologie */}
        <section id="terminologie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De terminologieverwarring uitgelegd</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In Nederland en Belgie worden <em>waterontkalker</em> en <em>waterontharder</em> in de
            volksmond door elkaar gebruikt. In de winkel, op websites en in reclame verwijzen beide
            termen vaak naar hetzelfde product: een ionenwisselaar die calcium en magnesium uit het
            water haalt.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Technisch gezien is er echter een belangrijk onderscheid:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-[#E0F2FE] border border-[#005F8A]/20 rounded-xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-2">Waterontharder (technisch)</h3>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                Verwijdert hardheidsionen (Ca2+ en Mg2+) uit het water. Het water wordt
                chemisch <em>zacht</em>: de gemeten hardheid in °dH daalt naar 0-2. Alleen
                ionenwisseling bereikt dit resultaat.
              </p>
              <p className="text-xs text-green-700 font-medium">
                &#10003; Water is daadwerkelijk zacht na behandeling
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-800 mb-2">Waterontkalker (technisch)</h3>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                Beinvloedt het gedrag van kalk in het water zonder de mineralen te verwijderen.
                Water blijft chemisch even hard (°dH onveranderd) maar kalk hecht minder snel
                aan oppervlakken.
              </p>
              <p className="text-xs text-amber-700 font-medium">
                &#8212; Water is chemisch nog steeds hard
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
            <p className="font-semibold text-amber-900 mb-1">Praktische tip</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Als een fabrikant of verkoper het woord &quot;ontkalker&quot; of &quot;ontharder&quot; gebruikt,
              vraag dan altijd: &quot;Daalt de waterhardheid in °dH na behandeling?&quot; Als het antwoord
              nee is, koopt u een apparaat dat alleen kalkaanslag beperkt, maar het water niet
              echt zacht maakt.
            </p>
          </div>
        </section>

        {/* Vergelijkingstabel */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            5 methoden vergeleken: kalk weg, natrium, certificering en prijs
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hieronder een overzicht van alle vijf bekende methoden voor het omgaan met hard water,
            inclusief de mate waarin ze kalk verwijderen.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[600px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Methode</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Kalk weg?</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Na+ toe?</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Certificering</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Prijs</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingMethoden.map((m, i) => (
                  <tr
                    key={m.methode}
                    className={`border-b border-gray-100 ${m.highlight ? 'bg-[#E0F2FE] font-medium' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="py-2.5 px-3 font-medium text-gray-900">{m.methode}</td>
                    <td className="py-2.5 px-3 text-gray-700 text-xs">{m.kalkWeg}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{m.natriumToe}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{m.certificering}</td>
                    <td className="py-2.5 px-3 text-right text-[#005F8A] font-medium">{m.prijs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">
            Prijs = richtprijs aanschaf exclusief installatie. NSF/ANSI 44 = prestatienorm voor
            ionenwisselaars. NSF/ANSI 58 = prestatienorm voor omgekeerde osmose en nanofiltratie.
            NSF/ANSI 61 = materiaalveiligheidsnorm.
          </p>
        </section>

        {/* Wanneer ionenwisseling nodig */}
        <section id="ionenwisseling-nodig">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer is echte ionenwisseling noodzakelijk?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ionenwisseling is de enige methode die het water chemisch zacht maakt. Dit is essentieel
            in de volgende situaties:
          </p>
          <div className="space-y-3 mb-5">
            {[
              {
                titel: 'Bescherming van de cv-ketel',
                tekst: 'Een cv-ketel werkt met warm water dat circuleert. Hard water slaat kalk neer op de warmtewisselaar. Alleen echt zacht water (ionenwisseling) voorkomt dit volledig. TAC vermindert kalkaanslag, maar verwijdert het niet. In harde watergebieden (&gt;15 °dH) is ionenwisseling de aanbevolen keuze voor cv-bescherming.',
              },
              {
                titel: 'Zachter waswater en minder zeepverbruik',
                tekst: 'Zacht water heeft een ander oplosvermogen: zeep schuimt beter en spoelt makkelijker uit. Met hard water reageert zeep met calcium tot zeepschuim dat kleding dof maakt. Alleen ionenwisseling maakt het waswater werkelijk zacht. TAC en magneetontharders hebben geen aantoonbaar effect op zeepverbruik.',
              },
              {
                titel: 'Huidcomfort bij eczeem of droge huid',
                tekst: 'Hard water kan huidirritatie verergeren bij mensen met eczeem of droge huid. Klinisch onderzoek toont aan dat zacht water (chemisch zacht door ionenwisseling) de huidbarriere minder beschadigt. Dit effect treedt niet op bij water dat alleen magneet- of TAC-behandeld is.',
              },
              {
                titel: 'Geen kalkranden in douche, bad en keuken',
                tekst: 'Als u de zichtbare kalkaanslag volledig wilt elimineren, is ionenwisseling de meest betrouwbare optie. TAC vermindert nieuwe aangroei maar verwijdert bestaande kalk niet en voorkomt hem niet volledig. Bij een waterhardheid boven 20 °dH is ionenwisseling de enige methode die echt resultaat geeft.',
              },
            ].map(p => (
              <div key={p.titel} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{p.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{p.tekst}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Zoutloze alternatieven */}
        <section id="zoutloos">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Zoutloze alternatieven: wanneer zijn ze voldoende?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Zoutloze systemen (TAC, magnetisch, elektronisch) zijn aantrekkelijk omdat ze geen zout,
            geen regeneratiewater en geen loodgieter vereisen. Ze kunnen volstaan in de volgende
            situaties:
          </p>
          <div className="bg-green-50 border border-green-100 rounded-xl p-5 mb-4">
            <p className="font-bold text-green-900 mb-2">Een zoutloos systeem kan voldoende zijn als...</p>
            <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
              <li>Uw water matig hard is (8-15 °dH) en u alleen leidingbescherming wilt</li>
              <li>U een huurwoning heeft zonder toestemming voor leidingaansluiting</li>
              <li>U al een osmosefilter heeft voor drinkwater en alleen de leidingen wilt beschermen</li>
              <li>U natriumtoevoeging wilt vermijden (dieet of voorkeur)</li>
              <li>Uw budget beperkt is en u liever een goedkoop TAC-systeem probeert</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-xl p-5">
            <p className="font-bold text-red-900 mb-2">Een zoutloos systeem is onvoldoende als...</p>
            <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
              <li>Uw water zeer hard is (boven 18-20 °dH) en u echte kalkproblemen ervaart</li>
              <li>U zachte huid, minder zeepverbruik of zacht waswater wilt</li>
              <li>Uw cv-ketel in een harde waterzone maximale bescherming nodig heeft</li>
              <li>U kalkranden en aanslag volledig wilt elimineren</li>
            </ul>
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* Wanneer osmose beter */}
        <section id="osmose">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer is omgekeerde osmose beter dan een waterontharder?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde-osmosefilter
            </Link>{' '}
            verwijdert 95-99% van alle opgeloste stoffen, inclusief kalk, chloor, nitraten, PFAS en
            microplastics. Het behandelt echter alleen het drinkwater aan de keukenkraan, niet het
            douche- of waswater.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Kenmerk</th>
                  <th className="py-2.5 px-3 font-semibold">Ionenwisselaar</th>
                  <th className="py-2.5 px-3 font-semibold">Omgekeerde osmose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Behandeld volume', 'Al het huishoudwater', 'Alleen drinkwater (kraan)'],
                  ['Kalk verwijderd?', 'Ja (Ca/Mg via hars)', 'Ja (membraanfiltratie 95-99%)'],
                  ['Chloor, nitraten, PFAS', 'Nee', 'Ja (95-99%)'],
                  ['Natriumtoevoeging', 'Ja (Ca/Mg vervangen door Na)', 'Nee (alles verwijderd)'],
                  ['Installatie', 'Loodgieter (hoofdleiding)', 'Zelf (onder aanrecht)'],
                  ['Prijs aanschaf', '€700-2.000', '€400-1.200'],
                  ['Jaarkosten gebruik', '€300-650', '€100-200'],
                  ['Geschikt voor huurwoning', 'Meestal niet', 'Ja'],
                ].map(([kenmerk, ion, osm], i) => (
                  <tr key={kenmerk} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white border-b border-gray-100'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{kenmerk}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{ion}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{osm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            De ideale oplossing voor de meest veeleisende gebruikers is een combinatie: een
            ionenwisselaar voor al het huishoudwater plus een osmosefilter aan de keukenkraan voor
            maximaal zuiver drinkwater. Meer over osmose leest u op onze{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde-osmose pagina
            </Link>
            .
          </p>
        </section>

        {/* Meer lezen */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterontkalker', label: 'Waterontkalker overzicht' },
              { href: '/waterontkalker/soorten', label: 'Soorten waterontkalkers' },
              { href: '/waterontkalker/werking', label: 'Hoe werkt een waterontkalker?' },
              { href: '/waterontharder', label: 'Waterontharder uitgelegd' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose filter' },
              { href: '/waterhardheid', label: 'Waterhardheid per gemeente' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>&rarr;</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over waterontkalker vs waterontharder
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">&#9662;</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/waterontharder/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Hoe werkt een waterontharder?</h3>
            <p className="text-sm text-gray-600">Diepgaande uitleg over de werking van waterontharders en hoe ze verschillen van ontkalkers.</p>
          </Link>
          <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling uitgelegd</h3>
            <p className="text-sm text-gray-600">De techniek die zowel ontkalkers als ontharders gebruiken om kalk te verwijderen.</p>
          </Link>
          <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in drinkwater</h3>
            <p className="text-sm text-gray-600">Wat kalk doet met uw leidingen, apparaten en drinkwater.</p>
          </Link>
          <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp bij hard water</h3>
            <p className="text-sm text-gray-600">Ontkalker of ontharder? Onze keuzehulp bepaalt wat het beste past bij uw situatie.</p>
          </Link>
        </div>
      </section>

        <AffiliateCTA
          destination="waterontharders"
          campaign="waterontharder"
          content="waterontkalker-vs-waterontharder-cta"
          label="Bekijk het aanbod waterontharders"
          title="Een waterontharder uitkiezen?"
          sub="Bekijk het aanbod waterontharders bij onze partner PureAqua."
        />

        <CTABanner context="osmose" variant="compact" />

      </div>
    </>
  );
}
