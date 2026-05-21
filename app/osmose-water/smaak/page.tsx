import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Smaak van osmosewater: waarom smaakt het anders en hoe verbeter je het?',
  description:
    'Osmosewater smaakt soms vlak of zuur door laag TDS en lage pH. Remineralisatie, alkalische cartridge en juiste opslag verbeteren de smaak significant.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/smaak' },
};

const faqItems = [
  {
    question: 'Waarom smaakt osmosewater anders dan kraanwater?',
    answer:
      'Osmosewater bevat nauwelijks opgeloste mineralen (TDS 5-50 mg/L versus 200-500 mg/L voor kraanwater). Calcium en magnesium geven water zijn "ronde" en "volle" smaak. Zonder deze mineralen voelt water leeg of vlak aan. Bovendien heeft osmosewater een licht zure pH (6-7) door opgelost CO2, terwijl kraanwater een pH van 7,5-8,5 heeft. Ook ontbreekt chloor, wat sommige mensen juist als prettig ervaren.',
  },
  {
    question: 'Is osmosewater lekker om te drinken?',
    answer:
      'Dat verschilt per persoon. Veel mensen beschrijven puur osmosewater als neutraal, fris en schoon. Anderen missen de volheid van kraanwater of bronwater. Met een remineralisatiecartridge krijgt osmosewater een TDS van 80-150 mg/L en een pH van 7,5-8,5, wat door de meeste mensen als aangenaam en vergelijkbaar met licht bronwater wordt ervaren. De afwezigheid van chloor, kalk en metaalachtige bijsmaken is voor de meesten een duidelijk voordeel.',
  },
  {
    question: 'Hoe verbeter ik de smaak van osmosewater?',
    answer:
      'De effectiefste methode is een remineralisatiecartridge na het RO-membraan: voegt calcium en magnesium toe, verhoogt pH naar 7,5-8,5 en brengt TDS op 80-150 mg/L. Andere opties zijn: koelen (koud water smaakt voller), een post-koolstoffilter (verwijdert membraangeur bij nieuw systeem), CO2 toevoegen voor bruisend water, of een schijfje citroen of komkommer voor infusie.',
  },
  {
    question: 'Smaakt osmosewater zuur?',
    answer:
      'Puur osmosewater heeft een pH van 6-7, wat licht zuur is. Dit komt doordat het water weinig bicarbonaatbuffers bevat en snel CO2 uit de lucht opneemt. Sommige mensen ervaren dit als een subtiele frisheid of zuurheid. Een remineralisatiecartridge of alkalische cartridge verhoogt de pH naar 7,5-8,5, wat de zure smaak elimineert.',
  },
  {
    question: 'Is geremineraliseerd osmosewater lekkerder?',
    answer:
      'Voor de meeste mensen ja. Geremineraliseerd osmosewater heeft een TDS van 80-150 mg/L, een pH van 7,5-8,5 en bevat calcium en magnesium. Dit geeft een voller mondgevoel, een zachter karakter en een pH die vergelijkbaar is met bronwater. Smaakstudies tonen dat de meeste mensen water in het TDS-bereik van 50-150 mg/L als het prettigst ervaren.',
  },
  {
    question: 'Waarom smaakt nieuw osmosewater soms plasticerig?',
    answer:
      'Een nieuw RO-membraan of nieuwe slangen kunnen een lichte rubberen of plasticerige geur en smaak afgeven in de eerste week na installatie. Dit is normaal en tijdelijk. Gooi de eerste 2-3 tankwisselingen weg of laat het systeem 24-48 uur doorlopen. Een post-koolstoffilter absorbeert eventuele resterende geur en smaak. Na "inrijden" verdwijnt dit volledig.',
  },
  {
    question: 'Is osmosewater lekkerder voor koffie dan kraanwater?',
    answer:
      'Ja, voor de meeste koffiebereidingen is osmosewater met remineralisatie duidelijk beter. De afwezigheid van chloor (dat aroma\'s maskeert) en kalk (dat neerslaat in de machine) maakt osmosewater superieur als basis. Met een TDS van 75-125 mg/L en calcium rond 50 mg/L geeft osmosewater een objectief betere espresso-extractie dan ongefilterd hard kraanwater. Specialty coffee baristas werken vrijwel universeel met gefilterd water.',
  },
];

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
    { '@type': 'ListItem', position: 2, name: 'Osmosewater', item: 'https://waterfilterplatform.nl/osmose-water' },
    { '@type': 'ListItem', position: 3, name: 'Smaak van osmosewater', item: 'https://waterfilterplatform.nl/osmose-water/smaak' },
  ],
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Smaak van osmosewater: waarom smaakt het anders en hoe verbeter je het?',
  description:
    'Osmosewater smaakt soms vlak of zuur door laag TDS en lage pH. Remineralisatie en alkalische cartridge verbeteren de smaak significant.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/osmose-water/smaak',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseWaterSmaakPage() {
  return (
    <>
      <SchemaOrg schema={[breadcrumbSchema, faqSchema, articleSchema]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/osmose-water" className="hover:text-[#005F8A]">Osmosewater</Link>
            <span className="mx-2">/</span>
            <span>Smaak van osmosewater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Smaak van osmosewater: waarom smaakt het anders en hoe verbeter je het?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Osmosewater smaakt anders dan kraanwater of bronwater. Door het lage TDS (5&ndash;50 mg/L)
            en de licht zure pH (6&ndash;7) kan het vlak of fris aanvoelen. Remineralisatie verbetert
            de smaak significant. Alle oorzaken en oplossingen uitgelegd.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        <QuickAnswer answer="Osmosewater smaakt vlakker dan kraanwater door laag TDS (5-50 mg/L) en lage pH (6-7). Calcium en magnesium geven water zijn ronde smaak; osmosewater bevat nauwelijks mineralen. Een remineralisatiecartridge (15-35 euro per jaar) verhoogt TDS naar 80-150 mg/L en pH naar 7,5-8,5 voor een aangenamer smaakprofiel." />

        <CTABanner context="osmose" />

        {/* Waarom anders */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom smaakt osmosewater anders?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De smaak van water wordt bepaald door de opgeloste mineralen, de pH-waarde en
            eventuele andere stoffen. Een RO-membraan verwijdert 95&ndash;99% van vrijwel alles,
            inclusief de mineralen die normaal bijdragen aan smaak en mondgevoel.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Calcium (Ca&sup2;&plus;) geeft water stevigheid en een vol karakter. Magnesium (Mg&sup2;&plus;) draagt bij
            aan een licht bitter of aromatisch profiel bij koffie en thee. Bicarbonaat (HCO&sup3;&ndash;) zorgt
            voor de buffering van zuurheid en geeft een "zachte" afdronk. Osmosewater bevat
            vrijwel geen van deze stoffen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Bovendien lost osmosewater snel CO2 op uit de lucht, waardoor de pH daalt naar
            6&ndash;6,5. Dit geeft een subtiele frisheid die sommigen als licht zuurachtig
            ervaren. Nederlands kraanwater heeft een pH van 7,5&ndash;8,5, wat als "zachter"
            en voller wordt beschouwd.
          </p>
        </section>

        {/* Smaakcomponenten tabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Smaakcomponenten van water</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Elk opgelost mineraal draagt anders bij aan de smaak. Onderstaande tabel laat
            de rol van de belangrijkste mineralen zien:
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[500px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-200 px-3 py-2 text-left text-[#003F5C]">Mineraal</th>
                  <th className="border border-gray-200 px-3 py-2 text-left text-[#003F5C]">Smaakbijdrage</th>
                  <th className="border border-gray-200 px-3 py-2 text-left text-[#003F5C]">Optimaal voor drinken</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 font-medium">Calcium (Ca&sup2;&plus;)</td>
                  <td className="border border-gray-200 px-3 py-2">Stevigheid, "vollheid"</td>
                  <td className="border border-gray-200 px-3 py-2">50&ndash;100 mg/L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-medium">Magnesium (Mg&sup2;&plus;)</td>
                  <td className="border border-gray-200 px-3 py-2">Licht bitter bij hoog niveau, aroma bij laag niveau</td>
                  <td className="border border-gray-200 px-3 py-2">10&ndash;30 mg/L</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 font-medium">Natrium (Na&plus;)</td>
                  <td className="border border-gray-200 px-3 py-2">Zoetheid bij laag niveau</td>
                  <td className="border border-gray-200 px-3 py-2">10&ndash;30 mg/L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-medium">Bicarbonaat (HCO&sup3;&ndash;)</td>
                  <td className="border border-gray-200 px-3 py-2">Zachtheid, buffering zurige smaak</td>
                  <td className="border border-gray-200 px-3 py-2">50&ndash;150 mg/L</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 font-medium">Chloor</td>
                  <td className="border border-gray-200 px-3 py-2">Chemische bijsmaak (negatief)</td>
                  <td className="border border-gray-200 px-3 py-2">0 (osmose verwijdert dit)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-medium">Sulfaat (SO&sup4;&sup2;&ndash;)</td>
                  <td className="border border-gray-200 px-3 py-2">Bitterheid bij hoog niveau</td>
                  <td className="border border-gray-200 px-3 py-2">&lt;50 mg/L</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Osmosewater bevat van al deze stoffen nauwelijks iets. Dat verklaar het vlakke of
            lege smaakprofiel. De afwezigheid van chloor en sulfaat is een voordeel; het ontbreken
            van calcium, magnesium en bicarbonaat is het nadeel.
          </p>
        </section>

        {/* Oplossingen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vijf oplossingen voor een betere smaak</h2>
          <div className="space-y-4 mb-6">
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
                <h3 className="font-semibold text-[#003F5C]">Remineralisatiecartridge</h3>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Beste optie</span>
              </div>
              <p className="text-gray-700 text-sm">
                Voegt calciumcarbonaat en magnesiumoxide toe, verhoogt pH naar 7,5&ndash;8,5 en
                brengt TDS op 80&ndash;150 mg/L. Geeft osmosewater een rond, aangenaam smaakprofiel
                vergelijkbaar met licht bronwater. Kosten: &euro;15&ndash;35 per jaar als inline cartridge.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
                <h3 className="font-semibold text-[#003F5C]">Post-koolstoffilter</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Verwijdert eventuele membraangeur (bij nieuw systeem) en geeft een schone,
                neutrale smaak. De meeste kwalitatieve osmosesystemen hebben al een post-koolstoffilter
                als standaard onderdeel. Vervang jaarlijks.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
                <h3 className="font-semibold text-[#003F5C]">Koelen</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Koud osmosewater (4&ndash;8&deg;C) smaakt voller en frisser dan water op kamertemperatuur.
                De vlakke smaak is minder opvallend bij lage temperatuur. Bewaar osmosewater
                in de koelkast in een glazen karaf.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
                <h3 className="font-semibold text-[#003F5C]">CO2 toevoegen (bruisend water)</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Bruisend osmosewater heeft meer smaakstructuur door de koolzuurbelletjes.
                Een SodaStream of vergelijkbare koolzuurmaker werkt uitstekend met osmosewater
                als basis. Geeft een frisse, licht zure maar aangenamer smaak dan puur stil water.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">5</span>
                <h3 className="font-semibold text-[#003F5C]">Infusie</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Een schijfje citroen, komkommer, munt of gember in een karaf osmosewater
                geeft smaak en aroma. Populair, eenvoudig en gezond. Osmosewater is hiervoor
                ideaal als neutrale basis zonder storende bijsmaken.
              </p>
            </div>
          </div>
        </section>

        {/* Vergelijking waters */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Smaak vergeleken met andere waters</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Osmosewater zonder remineralisatie smaakt leger dan de meeste andere waters:
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-200 px-3 py-2 text-left text-[#003F5C]">Watertype</th>
                  <th className="border border-gray-200 px-3 py-2 text-left text-[#003F5C]">TDS</th>
                  <th className="border border-gray-200 px-3 py-2 text-left text-[#003F5C]">pH</th>
                  <th className="border border-gray-200 px-3 py-2 text-left text-[#003F5C]">Smaakprofiel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">Osmosewater (puur)</td>
                  <td className="border border-gray-200 px-3 py-2">5&ndash;50 mg/L</td>
                  <td className="border border-gray-200 px-3 py-2">6&ndash;7</td>
                  <td className="border border-gray-200 px-3 py-2 text-gray-500">Neutraal, licht fris, "leeg"</td>
                </tr>
                <tr className="bg-[#E0F2FE]">
                  <td className="border border-gray-200 px-3 py-2 font-medium">Osmose + remineralisatie</td>
                  <td className="border border-gray-200 px-3 py-2 font-medium">80&ndash;150 mg/L</td>
                  <td className="border border-gray-200 px-3 py-2 font-medium">7,5&ndash;8,5</td>
                  <td className="border border-gray-200 px-3 py-2 font-medium text-green-700">Vol, mild, als bronwater</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">Nederlands kraanwater</td>
                  <td className="border border-gray-200 px-3 py-2">150&ndash;350 mg/L</td>
                  <td className="border border-gray-200 px-3 py-2">7,5&ndash;8,5</td>
                  <td className="border border-gray-200 px-3 py-2 text-gray-500">Vol, soms kalk- of chloorsbijsmaak</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2">Flessenwater (gemiddeld)</td>
                  <td className="border border-gray-200 px-3 py-2">100&ndash;500 mg/L</td>
                  <td className="border border-gray-200 px-3 py-2">7,0&ndash;7,8</td>
                  <td className="border border-gray-200 px-3 py-2 text-gray-500">Rond, mineraalachtig</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Eerste gebruik */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Smaak na installatie: inrijden</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Na installatie van een nieuw osmosesysteem kan het water de eerste dagen een lichte
            rubberen of plasticerige geur hebben. Dit is normaal en tijdelijk. Het nieuwe membraan
            en de slangen moeten "inrijden". Praktisch advies:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Gooi de eerste 2&ndash;3 tankwisselingen weg of laat het systeem 24&ndash;48 uur doorlopen</li>
            <li>De smaak verbetert de eerste week naarmate het membraan volledig gespoeld is</li>
            <li>Een post-koolstoffilter absorbeert eventuele resterende geur en smaak</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Na de inrijdperiode heeft osmosewater zijn definitieve smaakprofiel. Voeg daarna
            een remineralisatiecartridge toe als u een voller, aangenamer smaak wilt dan puur
            osmosewater biedt.
          </p>
        </section>

        {/* Koffie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Osmosewater voor koffie en thee</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Osmosewater met remineralisatie (TDS 100&ndash;150 mg/L, calcium 50&ndash;75 mg/L) geeft
            objectief een betere koffiesmaak dan onbehandeld hard kraanwater. Redenen:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#E0F2FE] rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2">Geen chloor</p>
              <p className="text-sm text-gray-700">Chloor in kraanwater maskeert subtiele aroma&apos;s. Osmosewater bevat geen chloor.</p>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2">Geen kalk</p>
              <p className="text-sm text-gray-700">Hard water vormt kalkaanslag in de machine en beïnvloedt de extractie negatief.</p>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2">Magnesium voor extractie</p>
              <p className="text-sm text-gray-700">Magnesium verbetert de extractie van zoete en fruitige koffie-aroma&apos;s aantoonbaar.</p>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2">Controleerbaar TDS</p>
              <p className="text-sm text-gray-700">U kunt precies de gewenste TDS instellen voor espresso (75&ndash;125 mg/L) of pour-over (125&ndash;175 mg/L).</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Zie ook onze pagina over{' '}
            <Link href="/osmose-water/espresso" className="text-[#005F8A] underline">
              osmosewater voor espresso
            </Link>{' '}
            voor gedetailleerde aanbevelingen per koffiemethode.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/osmose-water/smaak-verbetering" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Smaak van osmosewater verbeteren</h3>
              <p className="text-sm text-gray-600">Praktische tips en methoden om de smaak van osmosewater te verbeteren.</p>
            </Link>
            <Link href="/osmose-water/mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Mineralen in osmosewater</h3>
              <p className="text-sm text-gray-600">Welke mineralen ontbreken na omgekeerde osmose en waarom dat ertoe doet.</p>
            </Link>
            <Link href="/koolstoffilter/geur-smaak" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Koolstoffilter voor geur en smaak</h3>
              <p className="text-sm text-gray-600">Hoe actief koolstof chloor, geur en smaakafwijkingen uit water verwijdert.</p>
            </Link>
            <Link href="/osmose-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater uitleg</h3>
              <p className="text-sm text-gray-600">Alles over osmosewater: werking, kwaliteit en toepassingen.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* Interne links */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/osmose-water', title: 'Osmosewater uitleg', desc: 'Alles over puur osmosewater: kwaliteit, veiligheid en gebruik.' },
              { href: '/osmose-water/remineraliseren', title: 'Osmosewater remineraliseren', desc: 'Alle methoden om mineralen terug toe te voegen aan osmosewater.' },
              { href: '/omgekeerde-osmose', title: 'Omgekeerde osmose systemen', desc: 'Hoe een RO-systeem werkt en wat het verwijdert.' },
              { href: '/alkalisch-water', title: 'Alkalisch water', desc: 'Wat is alkalisch water en zijn er gezondheidsvoordelen?' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">{l.title}</p>
                <p className="text-sm text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over de smaak van osmosewater</h2>
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

      </div>
    </>
  );
}
