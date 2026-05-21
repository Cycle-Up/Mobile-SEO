import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Wat is nanofiltration (NF)? Tussen ultrafiltratie en osmose uitgelegd',
  description:
    'Nanofiltration (NF) filtert hardheid, pesticiden en kleurstoffen terwijl het nuttige mineralen deels behoudt. Vergelijking met omgekeerde osmose en.',
  alternates: { canonical: 'https://waterfilterplatform.nl/nanofiltration' },
  openGraph: {
    title: 'Wat is nanofiltration (NF)? Tussen ultrafiltratie en osmose uitgelegd',
    description:
      'Nanofiltration (NF) filtert hardheid, pesticiden en kleurstoffen terwijl het nuttige mineralen deels behoudt. Vergelijking met omgekeerde osmose en.',
    url: 'https://waterfilterplatform.nl/nanofiltration',
    type: 'article',
    locale: 'nl_NL',
  },
};

const faqItems = [
  {
    question: 'Wat is het verschil tussen NF en RO?',
    answer:
      'Nanofiltration (NF) heeft iets grotere poriën (0,001–0,01 micron) dan omgekeerde osmose (RO, ~0,0001 micron). Daardoor verwijdert NF hardheid (Ca²⁺/Mg²⁺), pesticiden en kleurstoffen effectief, maar laat het monovalente ionen zoals natrium (NaCl) deels door. RO verwijdert 95–99% van vrijwel alle opgeloste stoffen — inclusief de kleine zouten die NF doorlaat. NF vereist minder druk en produceert minder afvalwater dan RO.',
  },
  {
    question: 'Verwijdert NF nitraten en PFAS?',
    answer:
      'NF verwijdert nitraat slechts gedeeltelijk (circa 50–70%), omdat nitraat een relatief klein anion is dat de iets grotere NF-poriën deels passeert. Voor PFAS is de effectiviteit variabel: grotere PFAS-moleculen worden goed tegengehouden (70–95%), maar kleinere PFAS-verbindingen (zoals PFBS) kunnen het membraan deels passeren. Voor een betrouwbare verwijdering van nitraat en PFAS biedt omgekeerde osmose meer zekerheid.',
  },
  {
    question: 'Hoeveel afvalwater produceert NF?',
    answer:
      'Een NF-systeem produceert gemiddeld een verhouding van ongeveer 1:1 — voor elke liter gefilterd drinkwater gaat circa één liter als concentraatstroom weg. Dit is aanzienlijk minder dan veel conventionele RO-systemen (1:1 tot 1:3). Nieuwere RO-systemen met recirculatietechnologie halen overigens ook al een 1:1 verhouding, waardoor het voordeel van NF op dit punt kleiner wordt.',
  },
  {
    question: 'Behoudt NF mineralen?',
    answer:
      'Ja, NF behoudt nuttige mineralen deels. Het filtert divalente ionen (Ca²⁺, Mg²⁺) selectiever dan monovalente ionen, maar in de praktijk van onthardingstoepassing wordt juist een groot deel van het calcium verwijderd. Kleinere mineralen zoals natrium, kalium en magnesium passeren NF beter dan bij RO. Dit maakt NF interessant voor toepassingen waarbij volledig gedemineraliseerd water ongewenst is.',
  },
  {
    question: 'Is NF beschikbaar voor thuisgebruik?',
    answer:
      'Vrijwel geen fabrikant biedt standalone NF-filters voor consumenten aan. De meeste systemen die worden aangeprezen als "zachte osmose", "mineraalrijke osmose" of "selective RO" maken in feite gebruik van een NF-membraan of een gecombineerd NF+RO-systeem. Zuivere NF wordt voornamelijk industrieel en gemeentelijk ingezet. Wie NF-achtige filtratie wil voor thuis, is aangewezen op gespecialiseerde importeurs of op moderne RO-systemen met remineralisatiefilter.',
  },
  {
    question: 'Wat verwijdert NF wel en niet?',
    answer:
      'NF verwijdert effectief: hardheid/kalk (80–95%), pesticiden en herbiciden (90–99%), kleurstoffen en grote organische moleculen, bacteriën (99,99%) en virussen (~99%). NF verwijdert niet of slechts deels: kleine monovalente zouten zoals NaCl, nitraten (50–70%), kleinere PFAS-verbindingen (variabel 70–95%) en andere kleine anorganische ionen.',
  },
  {
    question: 'Wanneer kiezen voor NF boven RO?',
    answer:
      'NF is interessant wanneer je hardheid, pesticiden en kleurstoffen wilt verwijderen maar een deel van de mineralen in het water wilt behouden — en wanneer volledig gedemineraliseerd water ongewenst is. Gemeenten gebruiken NF voor ontharting zonder volledige demineralisatie. Voor thuisgebruik is RO (eventueel met remineralisatiefilter) in de meeste gevallen de praktischere keuze vanwege de bredere beschikbaarheid van producten en hogere verwijderingsgraad.',
  },
  {
    question: 'Wat kost een NF-systeem?',
    answer:
      'Industriële NF-installaties starten vanaf enkele duizenden euro\'s. Voor thuisgebruik zijn er vrijwel geen kant-en-klare NF-systemen: je bent aangewezen op losse NF-membraanmodules (€ 50–200 voor het membraan zelf) en maatwerk installatie. De totale installatiekosten voor een thuissysteem liggen daardoor al snel op € 400–800. Een vergelijkbaar of beter resultaat is doorgaans goedkoper te bereiken met een moderne RO-systeem (€ 200–500) voorzien van een remineralisatiefilter (€ 30–60 extra).',
  },
];

export default function NanofiltrationPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Nanofiltration', url: 'https://waterfilterplatform.nl/nanofiltration' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Wat is nanofiltration (NF)? Tussen ultrafiltratie en osmose uitgelegd',
          description:
            'Nanofiltration (NF) filtert hardheid, pesticiden en kleurstoffen terwijl het nuttige mineralen deels behoudt. Vergelijking met omgekeerde osmose en.',
          datePublished: '2026-05-16',
          url: 'https://waterfilterplatform.nl/nanofiltration',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Nanofiltration</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Wat is nanofiltration (NF)?<br className="hidden sm:block" /> Tussen ultrafiltratie en omgekeerde osmose uitgelegd
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Nanofiltration (NF) is een membraanfiltratie met poriën van 0,001–0,01 micron — kleiner dan
            ultrafiltratie, maar groter dan omgekeerde osmose. Het filtert hardheid, pesticiden en kleurstoffen
            effectief, terwijl het een deel van de nuttige mineralen doorlaat. Voor thuisgebruik zijn er echter
            nauwelijks kant-en-klare producten: NF wordt voornamelijk industrieel en gemeentelijk ingezet.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Bekijk omgekeerde osmose →
            </Link>
            <Link
              href="/waterfilter/soorten"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Alle filtersoorten vergelijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Quick Answer */}
        <QuickAnswer answer="Nanofiltration (NF) is een membraanfiltratie met poriën van 0,001–0,01 micron — tussen ultrafiltratie en omgekeerde osmose in. Het verwijdert hardheid (Ca²⁺/Mg²⁺), pesticiden en kleurstoffen, maar behoudt deels nuttige mineralen en heeft minder afvalwater dan RO. Weinig consumentenproducten beschikbaar; vooral industrieel en gemeentelijk toegepast." />

        {/* Wat is NF */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is nanofiltration precies?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nanofiltration is een drukmembraanproces waarbij water door een semi-permeabel membraan wordt
            geperst. De poriën hebben een doorsnede van 0,001 tot 0,01 micron (1–10 nanometer). Dit plaatst NF
            precies tussen ultrafiltratie (UF) en omgekeerde osmose (RO) in het filtratiespectrum.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het membraan werkt op twee mechanismen tegelijk: <strong>grootte-uitsluiting</strong> (moleculen
            groter dan de poriën worden tegengehouden) en <strong>ladingsafstoting</strong> (divalente ionen
            zoals Ca²⁺ en Mg²⁺ worden sterker afgestoten dan monovalente ionen zoals Na⁺). Dit is waarom NF
            selectief is: het verwijdert hardheid effectief, maar laat een deel van de zouten door.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De benodigde werkdruk voor NF ligt typisch tussen 5 en 20 bar — lager dan RO (15–75 bar), wat
            resulteert in lager energieverbruik en minder mechanische belasting van het systeem.
          </p>
          <div className="bg-[#E0F2FE]/50 border-l-4 border-[#005F8A] rounded-r-xl p-4">
            <p className="text-sm text-gray-700">
              <strong className="text-[#003F5C]">Oorsprong van de naam:</strong> De naam "nano" verwijst naar
              de nanometergrootte van de poriën (1 nm = 0,000001 mm). NF werd in de jaren 1980 ontwikkeld als
              tussenproces tussen UF en RO, met als doel ontharting zonder volledige demineralisatie.
            </p>
          </div>
        </section>

        {/* Filtratiespectrum tabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-2">Het filtratiespectrum: van grof naar fijn</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Membraanfiltratie bestaat uit vier hoofdtypen die oplopend in verfijning worden ingedeeld. De tabel
            hieronder toont de poriëgrootte, de werkdruk en wat elk membraantype tegenhoudt.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Membraantype</th>
                  <th className="py-3 px-3 text-center font-semibold text-[#003F5C]">Poriëgrootte</th>
                  <th className="py-3 px-3 text-center font-semibold text-[#003F5C]">Druk (bar)</th>
                  <th className="py-3 px-3 text-left font-semibold text-[#003F5C]">Wat wordt tegengehouden</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3 font-medium text-gray-800">
                    <span className="inline-block w-3 h-3 rounded-full bg-gray-300 mr-2 align-middle" />
                    MF / Sedimentfilter
                  </td>
                  <td className="py-2.5 px-3 text-center text-gray-700">&gt;0,1 µm</td>
                  <td className="py-2.5 px-3 text-center text-gray-700">0,1–2</td>
                  <td className="py-2.5 px-3 text-gray-700">Zand, roest, klei, deeltjes, protozoa</td>
                </tr>
                <tr className="border-b border-gray-100 bg-blue-50/30">
                  <td className="py-2.5 px-3 font-medium text-gray-800">
                    <span className="inline-block w-3 h-3 rounded-full bg-blue-300 mr-2 align-middle" />
                    Ultrafiltratie (UF)
                  </td>
                  <td className="py-2.5 px-3 text-center text-gray-700">0,01–0,1 µm</td>
                  <td className="py-2.5 px-3 text-center text-gray-700">1–5</td>
                  <td className="py-2.5 px-3 text-gray-700">Bacteriën (99,99%), virussen, eiwitten, colloidale deeltjes</td>
                </tr>
                <tr className="border-b border-gray-100 bg-[#E0F2FE]/40">
                  <td className="py-2.5 px-3 font-medium text-[#003F5C]">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#005F8A] mr-2 align-middle" />
                    <strong>Nanofiltration (NF)</strong>
                    <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">
                      Deze pagina
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-center font-semibold text-[#003F5C]">0,001–0,01 µm</td>
                  <td className="py-2.5 px-3 text-center text-gray-700">5–20</td>
                  <td className="py-2.5 px-3 text-gray-700">Hardheid (Ca²⁺/Mg²⁺), pesticiden, kleurstoffen, grote organica; deels zouten</td>
                </tr>
                <tr className="border-b border-gray-100 bg-indigo-50/30">
                  <td className="py-2.5 px-3 font-medium text-gray-800">
                    <span className="inline-block w-3 h-3 rounded-full bg-indigo-500 mr-2 align-middle" />
                    Omgekeerde osmose (RO)
                  </td>
                  <td className="py-2.5 px-3 text-center text-gray-700">~0,0001 µm</td>
                  <td className="py-2.5 px-3 text-center text-gray-700">15–75</td>
                  <td className="py-2.5 px-3 text-gray-700">95–99% van alle opgeloste stoffen: kalk, nitraat, PFAS, lood, zouten</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            µm = micron (micrometer). 1 µm = 0,001 mm. NF-poriën zijn circa 10× kleiner dan UF en 10× groter dan RO.
          </p>
        </section>

        {/* NF vs RO vergelijkingstabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-2">NF versus RO: gedetailleerde vergelijking</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Nanofiltration en omgekeerde osmose lijken op elkaar — beide zijn drukmembraanprocessen — maar
            verschillen aanzienlijk in selectiviteit, energieverbruik en toepassingsgebied.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Eigenschap</th>
                  <th className="py-3 px-3 text-center font-semibold text-[#005F8A]">Nanofiltration (NF)</th>
                  <th className="py-3 px-3 text-center font-semibold text-[#003F5C]">Omgekeerde osmose (RO)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    eigenschap: 'Poriëgrootte',
                    nf: '0,001–0,01 µm (1–10 nm)',
                    ro: '~0,0001 µm (0,1 nm)',
                  },
                  {
                    eigenschap: 'Hardheid / kalk',
                    nf: '80–95% verwijdering',
                    ro: '95–99% verwijdering',
                  },
                  {
                    eigenschap: 'Pesticiden / herbiciden',
                    nf: '90–99% verwijdering',
                    ro: '95–99% verwijdering',
                  },
                  {
                    eigenschap: 'Nitraat',
                    nf: '50–70% (deels doorgelaten)',
                    ro: '90–99% verwijdering',
                  },
                  {
                    eigenschap: 'PFAS',
                    nf: '70–95% (grootteverhouding afhankelijk)',
                    ro: '95–99% verwijdering',
                  },
                  {
                    eigenschap: 'Kleine zouten (NaCl)',
                    nf: 'Deels doorgelaten',
                    ro: '95–99% tegengehouden',
                  },
                  {
                    eigenschap: 'Mineraalbehoud',
                    nf: 'Deels (monovalente ionen passeren)',
                    ro: 'Minimaal (bijna volledig verwijderd)',
                  },
                  {
                    eigenschap: 'Afvalwaterverhouding',
                    nf: '~1:1 (50% recovery)',
                    ro: '1:1 tot 1:3 (afhankelijk van systeem)',
                  },
                  {
                    eigenschap: 'Benodigde druk',
                    nf: '5–20 bar',
                    ro: '15–75 bar',
                  },
                  {
                    eigenschap: 'Energieverbruik',
                    nf: 'Lager (minder druk nodig)',
                    ro: 'Hoger (meer druk nodig)',
                  },
                  {
                    eigenschap: 'Consumentenproducten',
                    nf: 'Vrijwel geen standalone producten',
                    ro: 'Breed aanbod (€ 200–900)',
                  },
                ].map((r, i) => (
                  <tr key={r.eigenschap} className={`border-b border-gray-100 ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                    <td className="py-2.5 px-3 font-medium text-gray-700">{r.eigenschap}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.nf}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.ro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Wat NF verwijdert */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat verwijdert nanofiltration wel en niet?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-green-50 border border-green-100 rounded-xl p-5">
              <h3 className="font-semibold text-green-800 mb-3">Wat NF effectief verwijdert</h3>
              <ul className="space-y-2">
                {[
                  'Hardheid / kalk (Ca²⁺, Mg²⁺) — 80–95%',
                  'Pesticiden en herbiciden — 90–99%',
                  'Kleurstoffen en pigmenten',
                  'Bacteriën — 99,99%',
                  'Virussen — ~99%',
                  'Grote organische moleculen (>300 Da)',
                  'Sulfaten en fosfaten (divalente anionen)',
                  'Ijzer en mangaan',
                ].map(item => (
                  <li key={item} className="flex gap-2 text-sm text-gray-700">
                    <span className="text-green-600 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
              <h3 className="font-semibold text-amber-800 mb-3">Wat NF niet of deels verwijdert</h3>
              <ul className="space-y-2">
                {[
                  'Kleine zouten (NaCl) — deels doorgelaten',
                  'Nitraten — slechts 50–70%',
                  'PFAS — variabel 70–95% (afhankelijk van grootte)',
                  'Monovalente ionen (Na⁺, K⁺, Cl⁻)',
                  'Kleinere organische moleculen (<150 Da)',
                  'Opgeloste gassen (CO₂, H₂S)',
                  'Sommige kleine virussen',
                ].map(item => (
                  <li key={item} className="flex gap-2 text-sm text-gray-700">
                    <span className="text-amber-500 font-bold shrink-0">½</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-[#E0F2FE]/50 border-l-4 border-[#005F8A] rounded-r-xl p-4 mt-5">
            <p className="text-sm text-gray-700">
              <strong className="text-[#003F5C]">Praktische conclusie:</strong> NF is uitstekend voor
              ontharding en verwijdering van pesticiden en kleurstoffen. Voor nitraat, PFAS en kleine zouten
              biedt <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">omgekeerde osmose</Link> meer zekerheid.
            </p>
          </div>
        </section>

        {/* Toepassingen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Toepassingen van nanofiltration</h2>

          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Gemeentelijke drinkwaterbereiding</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Nederland en België passen verschillende drinkwaterbedrijven NF toe voor ontharting van grond-
            of oppervlaktewater. Het voordeel: het water wordt zachter en bevat minder pesticidenresiduen,
            maar behoudt een deel van de mineralen die de smaak ten goede komen. Volledig gedemineraliseerd
            water is immers minder prettig om te drinken. NF vindt hier een ideale balans.
          </p>

          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Industriewater en procesindustrie</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            In de voedingsmiddelen-, farmaceutische en chemische industrie wordt NF ingezet voor concentratie,
            scheiding en zuivering van processtromen. Voorbeelden zijn het concentreren van suikerstropen,
            het terugwinnen van pigmenten uit textielafvalwater en het zuiveren van fermenta­tievloeistoffen.
          </p>

          <h3 className="text-lg font-semibold text-[#003F5C] mb-2 mt-6">Niche thuissystemen</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een handvol gespecialiseerde fabrikanten biedt NF-membraanmodules aan voor zelsbouw-
            waterzuiveringssystemen. Producten die worden aangeprezen als "zachte osmose" of "selective RO"
            gebruiken in veel gevallen een NF-membraan. De eindgebruiker merkt het verschil nauwelijks in
            bediening, maar het gefilterde water bevat meer mineralen dan bij klassieke RO.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-900">
              <strong>Let op:</strong> Fabrikanten gebruiken de termen "nanofiltration", "zachte osmose" en
              "selective RO" soms door elkaar zonder eenduidige definitie. Controleer altijd de technische
              specificaties (poriëgrootte, TDS-reductie %) van het membraan voordat u een systeem aanschaft.
            </p>
          </div>
        </section>

        {/* NF voor thuis: wanneer wel/niet */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">NF voor thuis: wanneer wel, wanneer RO beter is</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="border border-[#005F8A]/20 rounded-xl p-5">
              <h3 className="font-semibold text-[#003F5C] mb-3 text-sm">NF interessant als…</h3>
              <ul className="space-y-2">
                {[
                  'Je alleen hardheid en pesticiden wilt verwijderen',
                  'Je mineraalrijker water wil behouden dan bij RO',
                  'Je minder afvalwater wil produceren dan klassieke RO',
                  'Het water bestemd is voor een niche toepassing (aquarium, planten)',
                  'Je een "zachte osmose" of selective RO systeem aanschaft',
                ].map(item => (
                  <li key={item} className="flex gap-2 text-sm text-gray-700">
                    <span className="text-[#005F8A] font-bold shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-green-200 rounded-xl p-5 bg-green-50/50">
              <h3 className="font-semibold text-green-800 mb-3 text-sm">RO beter als…</h3>
              <ul className="space-y-2">
                {[
                  'Je nitraat betrouwbaar wil verwijderen (>90%)',
                  'PFAS een zorg is in jouw regio',
                  'Je kant-en-klare producten wil met service en garantie',
                  'Je het schoonste water wil ongeacht mineralengehalte',
                  'Je een systeem wil combineren met kokend/bruisend water (4-in-1 kraan)',
                ].map(item => (
                  <li key={item} className="flex gap-2 text-sm text-gray-700">
                    <span className="text-green-600 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-5">
            Voor de meeste Nederlandse huishoudens is{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">omgekeerde osmose</Link>{' '}
            — eventueel aangevuld met een{' '}
            <Link href="/omgekeerde-osmose/remineralisatie" className="text-[#005F8A] underline hover:no-underline">remineralisatiefilter</Link>{' '}
            — de praktischere keuze. RO-systemen zijn breed beschikbaar, goed gedocumenteerd en bieden
            hogere zekerheid over verwijdering van nitraat, PFAS en andere probleemstoffen.
          </p>
        </section>

        {/* Consumentenstatus */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Consumentenstatus van NF-producten in Nederland</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In 2026 zijn er vrijwel geen standalone NF-waterfilters beschikbaar in de reguliere Nederlandse
            consumentenmarkt. De markt voor NF blijft nagenoeg volledig professioneel en industrieel.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wie zoekt naar "zachte osmose" of "selective reverse osmosis" stuit op producten die feitelijk
            een NF-membraan of een NF+RO combinatiemembraan bevatten. Deze systemen zijn doorgaans
            afkomstig van Aziatische fabrikanten en worden via gespecialiseerde webshops aangeboden.
            Ondersteuning, garantieafhandeling en filtervervanging kunnen een uitdaging zijn.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-3">Wat je op de markt vindt onder de noemer "NF":</h3>
            <div className="space-y-3">
              {[
                {
                  label: '"Zachte osmose" systemen',
                  beschrijving: 'Gebruiken een NF-membraan met hogere doorlaatbaarheid voor mineralen. TDS-reductie is lager dan klassieke RO (bijv. 40–60% vs. 95–99%).',
                },
                {
                  label: '"Selective RO" of "mineral RO"',
                  beschrijving: 'Combinatiemembraan of RO + remineralisatiefilter. In de praktijk meer RO dan NF, maar met mineralenaanvulling achteraf.',
                },
                {
                  label: 'Losse NF-membraanmodules',
                  beschrijving: 'Voor zelfbouwsystemen. Vereist kennis van waterchemie, drukpompen en houderinstallatie.',
                },
              ].map(item => (
                <div key={item.label} className="flex gap-3 text-sm">
                  <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">▸</span>
                  <div>
                    <span className="font-semibold text-gray-800">{item.label}:</span>{' '}
                    <span className="text-gray-700">{item.beschrijving}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gerelateerde links */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer lezen over membraanfiltratie</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose: volledige gids' },
              { href: '/ultrafiltratie', label: 'Ultrafiltratie (UF) uitgelegd' },
              { href: '/pfas-waterfilter/vergelijken', label: 'PFAS-filteropties vergelijken' },
              { href: '/waterfilter/soorten', label: 'Alle waterfiltersoorten vergelijken' },
              { href: '/keramisch-filter', label: 'Keramisch filter: mechanische filtratie' },
              { href: '/sedimentfilter', label: 'Sedimentfilter: grove voorfiltratie' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>→</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over nanofiltration</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">▾</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Filtertechnieken</p>
              <p className="text-sm text-gray-500">Uitleg over verschillende filtertechnieken</p>
            </Link>
            <Link href="/omgekeerde-osmose" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Omgekeerde osmose</p>
              <p className="text-sm text-gray-500">Hoe werkt omgekeerde osmose filtratie?</p>
            </Link>
            <Link href="/waterfilter" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Waterfilter</p>
              <p className="text-sm text-gray-500">Alles over waterfilters voor thuis</p>
            </Link>
            <Link href="/vergelijken/omgekeerde-osmose-vergelijken" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Omgekeerde osmose vergelijken</p>
              <p className="text-sm text-gray-500">Systemen naast elkaar gezet</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
