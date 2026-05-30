import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Wat is een koolstoffilter? Werking, types en kosten 2026',
  description:
    'Alles over koolstoffilters (actieve kool): hoe het werkt, wat het wel en niet verwijdert, welke types er zijn en wat ze kosten. Complete gids voor Nederland.',
  alternates: { canonical: 'https://waterfilterplatform.nl/koolstoffilter' },
  openGraph: {
    title: 'Koolstoffilter — werking, types en kosten 2026',
    description:
      'Complete gids over koolstoffilters: wat verwijdert actieve kool, wanneer is het genoeg en wanneer heb je omgekeerde osmose nodig?',
    url: 'https://waterfilterplatform.nl/koolstoffilter',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is een koolstoffilter precies?',
    answer:
      'Een koolstoffilter (ook wel actief koolstoffilter of activated carbon filter genoemd) gebruikt geactiveerde kool om verontreinigingen uit water te absorberen. De geactiveerde kool heeft een enorm intern oppervlak — tot 1500 m² per gram — waaraan chloor, geurstoffen, smaakstoffen en organische verbindingen zich binden. Het resultaat is water met een fris-neutrale smaak zonder chloorgeur.',
  },
  {
    question: 'Wat verwijdert een koolstoffilter wel en wat niet?',
    answer:
      'Een koolstoffilter verwijdert effectief chloor (95–99%), trihalomethanen (THM, 90–99%), pesticiden (70–90%) en geur- en smaakstoffen (95%). Het verwijdert echter nauwelijks nitraten (<10%), bacteriën (<10%) of PFAS. Zware metalen worden deels geabsorbeerd (ca. 30%), maar lang niet volledig. Voor volledige filtratie van nitraten, bacteriën of PFAS is omgekeerde osmose nodig.',
  },
  {
    question: 'Wat is het verschil tussen een blokfilter en een granulair koolstoffilter?',
    answer:
      'Een blokfilter (block carbon) bestaat uit samengeperste actieve kool met een vaste structuur. Het water heeft langere contacttijd met de kool, wat leidt tot betere filtratie en consistentere kwaliteit. Een granulair filter (GAC) bestaat uit losse koolkorrels. Granulaire filters zijn goedkoper maar laten water sneller doorstromen, waardoor de filtratie minder grondig is. Voor kwalitatieve thuisfiltratie is een blokfilter de voorkeur.',
  },
  {
    question: 'Hoe vaak moet ik mijn koolstoffilter vervangen?',
    answer:
      'Dat hangt af van het type: een filterkpatroon in een filterkan (zoals Brita) moet elke 4–6 weken worden vervangen bij normaal gebruik (circa 150 liter). Een kraanfilter of inline blokfilter gaat 3–6 maanden mee. Een onderbouw inline filter heeft een levensduur van 6–12 maanden of 2000–4000 liter. Vervang nooit later dan aanbevolen, want een verzadigd filter kan verontreinigingen juist teruggeven aan het water.',
  },
  {
    question: 'Is een koolstoffilter geschikt om PFAS te verwijderen?',
    answer:
      'Een koolstofblokfilter verwijdert sommige PFAS-verbindingen gedeeltelijk, maar lang niet alle en lang niet volledig. Granulaire koolstoffilters zijn nog minder effectief. Als PFAS-verwijdering uw prioriteit is, heeft u omgekeerde osmose nodig: een RO-membraan verwijdert 95–99% van PFAS-verbindingen. Bekijk onze vergelijking op de osmose-pagina voor meer informatie.',
  },
  {
    question: 'Wat kost een koolstoffilter per jaar?',
    answer:
      'De jaarlijkse kosten variëren sterk per type: voor een filterkan (Brita e.d.) betaalt u €40–90 per jaar aan filterpatronen. Een kraanfilter kost €30–60 aan vervanging. Een inline blokfilter kost €40–80 per jaar. Een onderbouw inline systeem kost €60–120 per jaar. De aanschafkosten van het apparaat komen daar eenmalig bij.',
  },
  {
    question: 'Wanneer kies ik voor een koolstoffilter in plaats van omgekeerde osmose?',
    answer:
      'Een koolstoffilter is de juiste keuze als uw leidingwater veilig is maar u stoort aan chloor, geur of smaak. Het is ook geschikt als u pesticiden of THM wilt verminderen voor de zekerheid. Kies voor omgekeerde osmose als uw water hoge nitraatwaarden heeft (>25 mg/l), als u bacteriologische veiligheid wilt, als u PFAS wilt verwijderen of als u last heeft van hard water en kalk.',
  },
  {
    question: 'Heeft een koolstoffilter invloed op de gezondheid van het water?',
    answer:
      'Een koolstoffilter verwijdert geen nuttige mineralen zoals calcium en magnesium — die blijven intact. Het vermindert wel chloor en organische bijproducten, wat voor veel mensen aangenamer is. Anders dan bij omgekeerde osmose verliest u geen mineralen. Voor mensen die geen omgekeerde osmose willen maar wel de smaak willen verbeteren, is een koolstoffilter een evenwichtige keuze.',
  },
  {
    question: 'Welk NSF-certificaat moet een koolstoffilter hebben?',
    answer:
      'NSF/ANSI 42 is het basisnorm voor smaak- en geurverbetering (chloorverwijdering). NSF/ANSI 53 dekt verwijdering van gezondheidsschadelijke stoffen zoals lood en bepaalde pesticiden. NSF/ANSI 401 is voor opkomende verontreinigingen zoals medicijnresten. Zoek minimaal naar NSF/ANSI 42 certificatie; voor extra veiligheid ook NSF/ANSI 53.',
  },
  {
    question: 'Kan ik een koolstoffilter zelf installeren?',
    answer:
      'Ja, de meeste koolstoffilters zijn ontworpen voor doe-het-zelf installatie. Een filterkan heeft geen installatie nodig. Een kraanfilter schroeft u direct op de kraan (adapter meegegeven). Een inline blokfilter vraagt om het aansnijden van de waterleiding en plaatsen van snelkoppelingen — goed te doen in 20–30 minuten met basic gereedschap. Een onderbouw systeem installeert u op dezelfde manier als een osmose filter onder het aanrecht.',
  },
];

const verwijdertTabel = [
  { stof: 'Chloor', verwijdering: '95–99%', klasse: 'text-green-700' },
  { stof: 'Trihalomethanen (THM)', verwijdering: '90–99%', klasse: 'text-green-700' },
  { stof: 'Pesticiden', verwijdering: '70–90%', klasse: 'text-green-700' },
  { stof: 'Geur- en smaakstoffen', verwijdering: '95%', klasse: 'text-green-700' },
  { stof: 'Organische verbindingen', verwijdering: '60–90%', klasse: 'text-green-700' },
  { stof: 'Zware metalen (lood, koper)', verwijdering: '~30%', klasse: 'text-amber-600' },
  { stof: 'Nitraten', verwijdering: '<10%', klasse: 'text-red-600' },
  { stof: 'Bacteriën', verwijdering: '<10%', klasse: 'text-red-600' },
  { stof: 'PFAS', verwijdering: 'deels (blokfilter)', klasse: 'text-amber-600' },
  { stof: 'Kalk (calcium, magnesium)', verwijdering: '<5%', klasse: 'text-red-600' },
];

const typesTabel = [
  {
    type: 'Filterkan (Brita e.d.)',
    aanschaf: '€ 20–60',
    filterwissel: '4–6 weken',
    jaarkosten: '€ 40–90',
    geschikt: 'Kleine huishoudens, huurders',
  },
  {
    type: 'Kraanfilter',
    aanschaf: '€ 30–80',
    filterwissel: '3–6 maanden',
    jaarkosten: '€ 30–60',
    geschikt: 'Snel, geen installatie',
  },
  {
    type: 'Inline blokfilter',
    aanschaf: '€ 60–150',
    filterwissel: '6 maanden',
    jaarkosten: '€ 40–80',
    geschikt: 'Betere filtratie, iets meer installatie',
  },
  {
    type: 'Onderbouw inline systeem',
    aanschaf: '€ 100–250',
    filterwissel: '6–12 maanden',
    jaarkosten: '€ 60–120',
    geschikt: 'Hoog verbruik, schone installatie',
  },
];

export default function KoolstoffilterPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Koolstoffilter', url: 'https://waterfilterplatform.nl/koolstoffilter' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Koolstoffilter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Wat is een koolstoffilter? Werking, types en kosten 2026
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een koolstoffilter (actief koolstoffilter) is de meest verkochte vorm van waterfiltratie
            voor thuisgebruik. Het verbetert de smaak van kraanwater, verwijdert chloor en reduceert
            organische verbindingen — maar het heeft duidelijke grenzen. Op deze pagina leggen we
            precies uit hoe het werkt, wat het wel en niet doet, welke types er zijn en wanneer een
            koolstoffilter genoeg is of wanneer u beter kiest voor omgekeerde osmose.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/koolstoffilter/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Koolstoffilter kopen →
            </Link>
            <Link
              href="/omgekeerde-osmose"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Omgekeerde osmose vergelijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        <QuickAnswer answer="Een koolstoffilter (actief koolstoffilter) absorbeert chloor, organische verbindingen, geurstoffen en smaakstoffen uit leidingwater — maar verwijdert geen nitraten, zware metalen, bacteriën of PFAS. Jaarkosten: €15–60 voor een filterkan of kraanfilter, €40–120 voor inline systemen. Ideaal voor smaakvverbetering; niet geschikt als volledige waterreiniging." />

        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">
            Op deze pagina
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#wat-is" className="hover:underline">Wat is een koolstoffilter?</a></li>
            <li><a href="#werking" className="hover:underline">Hoe werkt actieve kool?</a></li>
            <li><a href="#verwijdert" className="hover:underline">Wat verwijdert het wel en niet?</a></li>
            <li><a href="#types" className="hover:underline">Welke types zijn er?</a></li>
            <li><a href="#kosten" className="hover:underline">Kosten per type per jaar</a></li>
            <li><a href="#vs-osmose" className="hover:underline">Koolstoffilter vs omgekeerde osmose</a></li>
            <li><a href="#niet-genoeg" className="hover:underline">Wanneer is het niet genoeg?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        <section id="wat-is">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is een koolstoffilter?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een <strong>koolstoffilter</strong>, ook wel <strong>actief koolstoffilter</strong> of
            activated carbon filter genoemd, is een waterfilter dat gebruik maakt van geactiveerde
            kool om verontreinigingen te absorberen. De kool is gemaakt van organisch materiaal —
            doorgaans kokosnootschillen, steenkool of hout — dat bij hoge temperatuur en lage
            zuurstofconcentratie wordt verhit. Dit proces, pyrolyse genaamd, creëert een extreem
            poreuze structuur.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Eén gram geactiveerde kool heeft een intern oppervlak van <strong>500 tot 1500 vierkante
            meter</strong>. Dit reusachtige oppervlak is de sleutel tot de werking: verontreinigingen
            uit het water hechten zich aan dit oppervlak door adsorptie — een fysisch-chemisch proces
            waarbij moleculen aan een vaste stof binden. Anders dan bij filtratie op deeltjesgrootte
            werkt actieve kool dus op moleculair niveau voor specifieke stofklassen.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De technologie bestaat al decennia en is bewezen effectief voor het verwijderen van
            chloor, geurstoffen en organische verbindingen. Filterkannen van merken als Brita,
            PearlCo en TAPP Water gebruiken allemaal actieve kool als kern van hun filtratiesysteem.
            Hetzelfde principe wordt op grote schaal toegepast in de drinkwaterzuivering door
            gemeentelijke waterbedrijven.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Het is belangrijk te begrijpen dat een koolstoffilter <strong>selectief</strong> werkt:
            het bindt goed aan organische verbindingen en chloor, maar heeft nauwelijks effect op
            anorganische stoffen zoals nitraten, zouten of zware metalen in hoge concentraties.
            Dit onderscheid bepaalt wanneer een koolstoffilter de juiste keuze is en wanneer u een
            geavanceerder systeem nodig heeft.
          </p>
        </section>

        <section id="werking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt actieve kool precies?</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Het filtratieproces van een koolstoffilter verloopt in twee stappen: mechanische filtratie
            (deeltjes worden fysiek tegengehouden) en adsorptie (moleculen binden chemisch aan het
            kooloppervlak). De contacttijd tussen water en kool is bepalend voor de filterkwaliteit —
            hoe langer het water in contact is met de actieve kool, hoe effectiever de adsorptie.
          </p>
          <div className="space-y-4">
            {[
              {
                nr: '1',
                titel: 'Water stroomt door het filterpatroon',
                desc:
                  'Leidingwater passeert onder waterdruk door het koolstoffilterpatroon. Bij een inline filter is dit de normale leidingwaterdruk; bij een filterkan valt het water door zwaartekracht.',
              },
              {
                nr: '2',
                titel: 'Mechanische voorfiltratier (blokfilter)',
                desc:
                  'Bij een koolstofblokfilter werkt de vaste structuur ook als mechanisch filter dat deeltjes groter dan 0,5–5 micron tegenhoudt. Granulaire filters doen dit nauwelijks.',
              },
              {
                nr: '3',
                titel: 'Adsorptie aan het kooloppervlak',
                desc:
                  'Chloor, THM, pesticiden en geurstoffen binden zich aan het enorme inwendige oppervlak van de actieve kool. De poreuze structuur zorgt voor maximaal contact tussen water en koolstof.',
              },
              {
                nr: '4',
                titel: 'Gefilterd water verlaat het patroon',
                desc:
                  'Water dat de koolstofmassa heeft doorlopen is bevrijd van geabsorbeerde stoffen en komt schoner, geurlozer en smakelijker uit het filter. Mineralen zoals calcium en magnesium blijven intact.',
              },
            ].map(s => (
              <div key={s.nr} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0">
                  {s.nr}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Blokfilter vs granulair:</strong> een koolstofblokfilter
            heeft een langere contacttijd en filtert consistenter dan een granulair filter (GAC).
            Bij granulaire filters kan water via de weg van de minste weerstand stromen — langs de
            koolkorrels in plaats van erdoorheen. Voor thuisgebruik verdient een blokfilter
            de voorkeur.
          </div>
        </section>

        <section id="verwijdert">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat verwijdert een koolstoffilter wel en niet?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Eerlijkheid over de grenzen van een koolstoffilter is essentieel voor een goede
            aankoopbeslissing. De tabel hieronder laat zien welke stoffen goed, matig of nauwelijks
            worden verwijderd. De percentages gelden voor een kwalitatief koolstofblokfilter bij
            Nederlands leidingwater.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[400px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Stof / categorie</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Verwijdering</th>
                </tr>
              </thead>
              <tbody>
                {verwijdertTabel.map(r => (
                  <tr key={r.stof} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 text-gray-800">{r.stof}</td>
                    <td className={`py-2.5 px-3 text-right font-semibold ${r.klasse}`}>{r.verwijdering}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Percentages zijn typische waarden voor een koolstofblokfilter bij normaal Nederlands
            leidingwater. Granulaire koolstoffilters presteren doorgaans 10–20% lager op alle
            categorieën.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            De groene scores (chloor, THM, geur) zijn indrukwekkend. De rode scores (nitraten,
            bacteriën, kalk) laten zien waar actieve kool fundamenteel tekortschiet: deze stoffen
            zijn anorganisch of te klein voor adsorptie aan koolstof. Voor die verontreinigingen
            heeft u een ionenwisselaar (nitraten, kalk) of een RO-membraan (alles) nodig.
          </p>
        </section>

        <section id="types">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke types koolstoffilter zijn er?</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            De markt biedt vier hoofdtypen koolstoffilters, elk met eigen voor- en nadelen. Uw keuze
            hangt af van uw waterverbruik, beschikbare ruimte, installatiebereidheid en budget.
          </p>
          <div className="space-y-5">
            <div className="border border-gray-100 rounded-2xl p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">Filterkan (Brita, PearlCo, TAPP)</h3>
                <span className="text-sm font-semibold text-[#005F8A] shrink-0 ml-2">€ 20–60 aanschaf</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                De meest toegankelijke optie: een kan met een filterpatroon dat water door actieve
                kool laat lopen voordat het in het reservoir komt. Geen installatie vereist, werkt
                op zwaartekracht. Nadelen: relatief hoge filterkosten per liter, kleine capaciteit
                (0,5–1,2 liter per keer), traag vullen, en granulaire kool geeft minder goede
                filtratie dan blokfilters.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Geen installatie</span>
                <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Laagste aanschafprijs</span>
                <span className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full">Hoge filterkosten/liter</span>
                <span className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full">Kleine capaciteit</span>
              </div>
            </div>

            <div className="border border-gray-100 rounded-2xl p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">Kraanfilter (op de kraan)</h3>
                <span className="text-sm font-semibold text-[#005F8A] shrink-0 ml-2">€ 30–80 aanschaf</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Een compact apparaatje dat direct op de kraanuitloop schroeft. Water stroomt
                onder leidingdruk door een koolstofpatroon. Eenvoudig te installeren (geen gereedschap),
                gemakkelijk te verwijderen voor huurders. De filtratie is verbeterd ten opzichte van
                een filterkan door hogere waterdruk, maar het filterpatroon is klein. Compatibel met
                de meeste standaard kraantypes; niet geschikt voor pullout-kranen.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Direct gefilterd water</span>
                <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Eenvoudige installatie</span>
                <span className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full">Visueel aan de kraan</span>
                <span className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full">Beperkte filtercapaciteit</span>
              </div>
            </div>

            <div className="border border-gray-100 rounded-2xl p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">Inline blokfilter (onder aanrecht)</h3>
                <span className="text-sm font-semibold text-[#005F8A] shrink-0 ml-2">€ 60–150 aanschaf</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Een cilindrisch filterpatroon dat in de waterleiding onder het aanrecht wordt
                geplaatst met snelkoppelingen. Werkt op volledige leidingwaterdruk, bevat een
                koolstofblok voor optimale filtratie, en is volledig verborgen. Geschikt voor
                zowel de koude waterleiding als als voorfilter voor een osmose systeem. Filtercapaciteit
                doorgaans 2000–4000 liter of 6–12 maanden.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Blokfilter kwaliteit</span>
                <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Verborgen installatie</span>
                <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Hoge capaciteit</span>
                <span className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full">Lichte installatie vereist</span>
              </div>
            </div>

            <div className="border border-gray-100 rounded-2xl p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">Onderbouw inline systeem (met aparte kraan)</h3>
                <span className="text-sm font-semibold text-[#005F8A] shrink-0 ml-2">€ 100–250 aanschaf</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Een onderbouw systeem met één of meerdere inline blokfilterpatronen en een
                aparte kleine kraan naast uw hoofdkraan. Biedt de hoogste koolstofkwaliteit
                zonder dat u de volledige investering van een osmose systeem doet. Geschikt voor
                huishoudens met hoog waterverbruik die alleen smaak en chloor willen aanpakken.
                Installatie vergelijkbaar met een osmose systeem maar zonder membraan en drukvat.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Hoogste koolstof kwaliteit</span>
                <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Aparte filterleiding</span>
                <span className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full">Gat in aanrecht nodig</span>
                <span className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full">Hogere aanschafprijs</span>
              </div>
            </div>
          </div>
        </section>

        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat zijn de kosten per type per jaar?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De totale eigendomskosten van een koolstoffilter bestaan uit de eenmalige aanschafprijs
            plus de terugkerende filterkosten. Onderstaande tabel geeft een realistisch overzicht
            voor een huishouden van 2–4 personen dat 3–4 liter gefilterd water per dag gebruikt.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Aanschaf</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Filterwissel</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Jaarkosten filter</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Geschikt voor</th>
                </tr>
              </thead>
              <tbody>
                {typesTabel.map(r => (
                  <tr key={r.type} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.type}</td>
                    <td className="py-2.5 px-3 text-right text-gray-600">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-right text-gray-600">{r.filterwissel}</td>
                    <td className="py-2.5 px-3 text-right text-[#005F8A] font-semibold">{r.jaarkosten}</td>
                    <td className="py-2.5 px-3 text-right text-xs text-gray-500">{r.geschikt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Vergelijk dit met omgekeerde osmose (€60–150 per jaar) — het verschil in jaarkosten
            is kleiner dan u misschien denkt, maar de filterkwaliteit van RO is significant hoger.
            Lees onze volledige vergelijking voor een weloverwogen keuze.
          </p>
        </section>

        <section id="vs-osmose">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kies je voor koolstoffilter, en wanneer voor omgekeerde osmose?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Dit is de vraag die de meeste bezoekers van deze pagina willen beantwoord zien. Het
            antwoord hangt af van uw specifieke situatie: wat staat er in uw leidingwater, wat wilt
            u eruit halen, en wat zijn uw prioriteiten?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#E0F2FE] rounded-2xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-3">Koolstoffilter is geschikt als...</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'U stoort aan de chloorlucht van leidingwater',
                  'Het water een onaangename smaak heeft',
                  'U pesticiden of THM wilt reduceren voor extra zekerheid',
                  'U een eenvoudige, goedkope oplossing zoekt',
                  'U huurder bent en niets wilt installeren',
                  'Uw leidingwater microbiologisch veilig is (in NL altijd zo)',
                  'U geen last heeft van hoog nitraatgehalte of PFAS',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-green-600 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-3">Omgekeerde osmose is beter als...</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Uw water hoge nitraatwaarden heeft (>25 mg/l)',
                  'U PFAS volledig wilt verwijderen',
                  'U hard water heeft en kalkvorming wilt voorkomen',
                  'U medicijnresten of hormonen wilt verwijderen',
                  'U bacteriologische zekerheid wilt',
                  'U microplastics volledig wilt elimineren',
                  'U waterkwaliteit op het hoogste niveau wilt garanderen',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-[#005F8A] font-bold shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            In Nederland is leidingwater van uitstekende microbiologische kwaliteit — bacteriën en
            virussen zijn geen reëel risico. Nitraatwaarden zijn in de meeste gemeenten laag genoeg
            om geen gevaar te vormen. Dat betekent dat voor veel Nederlanders een koolstoffilter
            volledig voldoet als het doel puur smaakverbetering en chloorverwijdering is. Wil u
            een volledig overzicht? Lees de{' '}
            <Link href="/waterfilter/soorten" className="text-[#005F8A] underline hover:no-underline">
              vergelijking van alle waterfiltersoorten
            </Link>.
          </p>
        </section>

        <section id="niet-genoeg">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer is een koolstoffilter niet genoeg?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Er zijn situaties waarbij actieve kool fundamenteel tekortschiet en waarbij u beter
            direct investeert in omgekeerde osmose. Hieronder de drie voornaamste gevallen.
          </p>
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">Hoog nitraatgehalte in het water</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Nitraat is een anorganisch zout dat actieve kool nauwelijks absorbeert. In sommige
                regio&apos;s in Nederland — met name in agrarische gebieden — kunnen nitraatwaarden
                boven de veiligheidsgrens van 50 mg/l komen. Nitraat is schadelijk voor baby&apos;s
                en kleine kinderen. Een koolstoffilter biedt hier geen bescherming; u heeft een
                ionenwisselaar of omgekeerde osmose nodig (RO verwijdert 85–95% van nitraten).
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">PFAS en medicijnresten</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                PFAS (poly- en perfluoralkylstoffen, ook wel &ldquo;eeuwige chemicaliën&rdquo;) worden
                door een gewone koolstoffilter slechts gedeeltelijk verwijderd. Omgekeerde osmose
                verwijdert 95–99% van PFAS-verbindingen. Hetzelfde geldt voor hormonen, antibiotica
                en andere medicijnresten die in sporen voorkomen in oppervlaktewater en daarmee
                soms in het drinkwater. Wilt u maximale bescherming, kies dan voor RO.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-1">Hard water en kalkvorming</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Een koolstoffilter verwijdert vrijwel geen kalk (calcium en magnesium). Als u last
                heeft van kalkaanslag op uw apparaten en in uw waterkoker, helpt een koolstoffilter
                niet. U heeft een waterontharder (ionenwisselaar) nodig voor zachter water, of
                omgekeerde osmose voor water dat zowel ontkalkt als gefilterd is.
              </p>
            </div>
          </div>
          <div className="mt-6 bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Advies:</strong> twijfelt u over de kwaliteit van
            uw leidingwater? Vraag een waterrapport op bij uw waterbedrijf of laat een
            watertest uitvoeren. De resultaten bepalen welke filteroplossing u echt nodig heeft.
            Bekijk onze pagina over{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>{' '}
            voor een volledige vergelijking.
          </div>
        </section>

        <CTABanner context="algemeen" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen op WaterfilterPlatform</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/koolstoffilter/chloor',
                title: 'Koolstoffilter voor chloor',
                desc: 'Adsorptie, NSF/ANSI 42, chlooramine: wanneer volstaat een koolstoffilter?',
              },
              {
                href: '/koolstoffilter/geur-smaak',
                title: 'Koolstoffilter geur en smaak',
                desc: 'Oorzaken van geur in kraanwater en de meest effectieve koolstoffilters.',
              },
              {
                href: '/koolstoffilter/kopen',
                title: 'Koolstoffilter kopen',
                desc: 'Welk type past bij jou? Koopgids met vergelijkingstabel en certificatieadvies.',
              },
              {
                href: '/koolstoffilter/soorten',
                title: 'Soorten koolstoffilters',
                desc: 'GAC, blokfilter, inline, onderbouw: overzicht met vergelijkingstabel.',
              },
              {
                href: '/koolstoffilter/werking',
                title: 'Werking koolstoffilter',
                desc: 'Adsorptieprincipe, BET-oppervlak, contact-tijd en verzadigingsverloop uitgelegd.',
              },
              {
                href: '/koolstoffilter/vervangen',
                title: 'Koolstoffilter vervangen',
                desc: 'Wanneer en hoe vervangt u een koolstoffilterpatroon? Stap-voor-stap handleiding.',
              },
              {
                href: '/waterfilter/soorten',
                title: 'Alle soorten waterfilters',
                desc: 'Overzicht van alle filtertechnologieën: koolstof, osmose, ionenwisseling en meer.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose',
                desc: 'De meest grondige filtratie: werking, kosten en de beste RO-systemen voor thuis.',
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

        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over koolstoffilters</h2>
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
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/filtertechnieken/actief-kool", title: "Actief kool als filtertechniek" },
              { href: "/waterfilter", title: "Waterfiltersoorten vergelijken" },
              { href: "/stoffen-in-drinkwater/chloor-bijproducten", title: "Chloor bijproducten die koolstof filtert" },
              { href: "/keuzehulp", title: "Is een koolstoffilter de juiste keuze?" },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors">{l.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
      {/* orphan-fix: meer in dit cluster */}
      <div className="max-w-3xl mx-auto px-4 pb-12">
        <section>
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Meer in dit cluster</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link key="/koolstoffilter/leidingwater" href="/koolstoffilter/leidingwater" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Koolstoffilter voor leidingwater</p>
              </Link>
              <Link key="/koolstoffilter/prijs" href="/koolstoffilter/prijs" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Koolstoffilter prijs</p>
              </Link>
          </div>
        </section>
      </div>
    </>
  );
}
