import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kalk in Quooker: oorzaken, gevolgen en hoe je kalkaanslag voorkomt',
  description:
    'Kalkaanslag in de Quooker verkort de levensduur en verhoogt energieverbruik. Ontdek hoe je ontkalkt, hoe vaak, en hoe osmose kalkaanslag structureel voorkomt.',
  alternates: { canonical: 'https://waterfilterplatform.nl/quooker-kalk' },
  openGraph: {
    title: 'Kalk in Quooker — oorzaken, gevolgen en hoe je kalkaanslag voorkomt',
    description:
      'Kalkaanslag in de Quooker verkort de levensduur en verhoogt energieverbruik. Ontdek hoe je ontkalkt, hoe vaak, en hoe osmose kalkaanslag structureel voorkomt.',
    url: 'https://waterfilterplatform.nl/quooker-kalk',
    type: 'article',
    locale: 'nl_NL',
  },
};

const faqItems = [
  {
    question: 'Waarom krijgt mijn Quooker kalkaanslag?',
    answer:
      'Kalkaanslag ontstaat doordat leidingwater calcium en magnesium bevat — de mineralen die samen waterhardheid vormen. In de Quooker wordt water verhit tot circa 110°C. Bij die temperatuur kristalliseren calcium en magnesium en slaan ze neer als wit, kalkachtig residu op de boilerwand en het verwarmingselement. Hoe harder het water in uw gemeente, hoe sneller deze aanslag zich opbouwt. In regio&#39;s als Eindhoven, Tilburg en Maastricht (>18°dH) is dit proces significant sneller dan in Amsterdam of Groningen (<8°dH).',
  },
  {
    question: 'Hoe merk ik dat mijn Quooker verkalk is?',
    answer:
      'Er zijn vier duidelijke signalen van kalkaanslag: (1) de boiler warmt merkbaar langzamer op dan normaal — een volle minuut wachten in plaats van dertig seconden is al een teken; (2) u ziet witte of grijze kalkranden rondom de uitloopdop van de kraan; (3) de stoomkracht bij het Fusion COMBI-model is verminderd; (4) het water uit de Quooker heeft een licht kalkachtige of kalkige smaak. Bij combinatie van meerdere signalen is direct ontkalken aan te raden.',
  },
  {
    question: 'Hoe ontkalk ik de Quooker zelf?',
    answer:
      'De meestgebruikte methode is een citroenzuuroplossing: los 30 gram citroenzuur op in 1 liter lauwwarm water. Schakel de Quooker uit en laat de boiler afkoelen. Sluit de citroenzuuroplossing aan via de filteraansluiting of het aangegeven inlaatpunt (model-afhankelijk). Laat de oplossing 30–45 minuten inwerken. Laat daarna de oplossing aflopen en spoel minimaal twee keer door met schoon leidingwater. Zet de Quooker daarna terug aan en laat de boiler opnieuw opwarmen. De exacte procedure verschilt per model — raadpleeg altijd de handleiding.',
  },
  {
    question: 'Hoe vaak moet ik de Quooker ontkalken?',
    answer:
      'De ontkalkingsfrequentie hangt volledig af van de waterhardheid in uw gemeente. Als richtlijn: bij zacht water (<8°dH) is ontkalken 1 keer per jaar voldoende. Bij matig water (8–12°dH) is 2 keer per jaar aangeraden. Bij hard water (12–18°dH) het best 3 keer per jaar, en bij zeer hard water (>18°dH) is 4 keer per jaar de minimale frequentie. Weet u uw waterhardheid niet? Controleer dan de gemeente-check op onze waterhardheid-pagina.',
  },
  {
    question: 'Verwijdert het Quooker koolstoffilter ook kalk?',
    answer:
      'Nee. Het koolstoffilter in de Quooker FILTER-modellen verwijdert chloor, chloorbijproducten en geur- en smaakstoffen. Maar kalk — in de vorm van opgeloste calcium- en magnesiumionen — is een anorganisch mineraal dat actieve kool vrijwel niet bindt. Het Quooker filter heeft dus geen effect op de waterhardheid. Voor structurele kalkaanpak hebt u een ionenwisselaar (waterontharder) of een omgekeerde osmose systeem nodig. Een osmosefilter verwijdert 95–99% van calcium en magnesium vóórdat het water de boiler bereikt.',
  },
  {
    question: 'Wat doet kalkaanslag met mijn energieverbruik?',
    answer:
      'Kalkaanslag is een slechte thermische geleider: het verwarmingselement moet harder werken om dezelfde temperatuur te bereiken. Al bij een kalklaag van 1 millimeter stijgt het energieverbruik met 10–15%. Bij een laag van 3 millimeter — wat in harde waterregio\'s binnen een jaar kan opbouwen zonder ontkalken — loopt het extra verbruik op tot 25–30%. Dit is niet alleen duurder op de elektriciteitsrekening, maar sloopt ook sneller het verwarmingselement zelf.',
  },
  {
    question: 'Kan ik een osmosefilter aansluiten voor de Quooker om kalk te voorkomen?',
    answer:
      'Ja, dit is de meest structurele oplossing. Een onderbouw omgekeerde osmose systeem (RO-systeem) wordt aangesloten op de koudwateraansluiting van de Quooker. Het osmosewater stroomt vervolgens door de Quooker — zo bereikt vrijwel geen calcium of magnesium de boiler. Osmose verwijdert 95–99% van kalk. Het resultaat: vrijwel geen kalkaanslag, minder onderhoud, een lager energieverbruik en een langere levensduur van het verwarmingselement. De installatie is een klus voor een loodgieter of installateur (eenmalig €100–200).',
  },
  {
    question: 'Wat is de waterhardheid in mijn gemeente?',
    answer:
      'De waterhardheid varieert sterk per regio in Nederland, van minder dan 4°dH in delen van Groningen tot meer dan 22°dH in Eindhoven en omgeving. U kunt de waterhardheid voor uw gemeente opzoeken via onze gemeente-check. Uw waterbedrijf publiceert ook een jaarlijks waterrapport met actuele meetwaarden. De hardheid kan per seizoen en per jaar licht variëren, maar de categorisatie (zacht/matig/hard/zeer hard) blijft doorgaans stabiel.',
  },
];

const waterhardheidData = [
  {
    hardheid: 'Zacht',
    dH: '<8',
    regio: "Groningen, Friesland, Amsterdam",
    ontkalken: '1x per jaar',
    risico: 'Laag',
    risicoKleur: 'text-green-700',
  },
  {
    hardheid: 'Matig',
    dH: '8–12',
    regio: 'Utrecht, Almere',
    ontkalken: '2x per jaar',
    risico: 'Gemiddeld',
    risicoKleur: 'text-amber-700',
  },
  {
    hardheid: 'Hard',
    dH: '12–18',
    regio: 'Arnhem, Den Haag, Breda',
    ontkalken: '3x per jaar',
    risico: 'Hoog',
    risicoKleur: 'text-orange-700',
  },
  {
    hardheid: 'Zeer hard',
    dH: '>18',
    regio: 'Eindhoven, Tilburg, Maastricht',
    ontkalken: '4x per jaar',
    risico: 'Zeer hoog',
    risicoKleur: 'text-red-700',
  },
];

const ontkalkStappen = [
  {
    stap: 1,
    titel: 'Quooker uitschakelen en afkoelen',
    tekst:
      'Zet de Quooker uit via het display of de schakelaar. Wacht minstens 30 minuten tot de boiler volledig is afgekoeld. Nooit ontkalk een hete boiler — het risico op spatten van het verwarmde zuur is te groot.',
  },
  {
    stap: 2,
    titel: 'Citroenzuuroplossing klaarmaken',
    tekst:
      'Los 30 gram citroenzuurpoeder op in 1 liter lauwwarm water. Roer tot alle kristallen zijn opgelost. Citroenzuur is veilig, biologisch afbreekbaar en effectief tegen kalksteen. U vindt het bij de supermarkt of drogist voor circa €2–5 per pak.',
  },
  {
    stap: 3,
    titel: 'Oplossing instromen via filteraansluiting',
    tekst:
      'Sluit de citroenzuuroplossing aan via de filteraansluiting of het inlaatpunt dat in de handleiding van uw model staat beschreven. Laat de oplossing langzaam instromen in de boiler. De precieze methode verschilt per Quooker-model — raadpleeg uw handleiding.',
  },
  {
    stap: 4,
    titel: '30–45 minuten laten inwerken',
    tekst:
      'Laat de citroenzuuroplossing minimaal 30 minuten en maximaal 60 minuten inwerken. In die tijd lost het zuur de kalkaanslag op de boilerwand en het verwarmingselement op. Hoe dikker de kalklaag, hoe langer de inwerktijd.',
  },
  {
    stap: 5,
    titel: 'Spoelen met schoon water',
    tekst:
      'Laat de oplossing aflopen en spoel de boiler minimaal twee keer door met schoon leidingwater. Het is belangrijk dat alle citroenoplosmiddel volledig is weggespoeld vóór gebruik. U kunt desnoods ook een derde keer spoelen voor zekerheid.',
  },
  {
    stap: 6,
    titel: 'Opnieuw inschakelen en testen',
    tekst:
      'Zet de Quooker terug aan en laat de boiler volledig opwarmen. Test daarna de watertemperatuur en de opwarmtijd. Bij een effectieve ontkalking merkt u dat de boiler sneller op temperatuur is dan vóór de behandeling. Herhaal het proces indien nodig.',
  },
];

export default function QuookerKalkPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Quooker kalk', url: 'https://waterfilterplatform.nl/quooker-kalk' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Kalk in Quooker: oorzaken, gevolgen en hoe je kalkaanslag voorkomt',
          description:
            'Kalkaanslag in de Quooker verkort de levensduur en verhoogt energieverbruik. Ontdek hoe je ontkalkt, hoe vaak, en hoe osmose kalkaanslag structureel voorkomt.',
          datePublished: '2026-03-20',
          url: 'https://waterfilterplatform.nl/quooker-kalk',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Quooker kalk</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kalk in Quooker: oorzaken, gevolgen en hoe je kalkaanslag voorkomt
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Kalkaanslag is de grootste slijtage-oorzaak bij een Quooker in Nederland. Op deze pagina
            leggen we objectief uit waarom kalk zo schadelijk is voor de boiler, hoe u de schade
            beperkt door regelmatig te ontkalken, en hoe een osmosefilter als pre-filter het probleem
            structureel aan de bron aanpakt.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quooker-onderhoud"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Compleet onderhoudsschema →
            </Link>
            <Link
              href="/waterhardheid"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Waterhardheid in mijn gemeente
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <QuickAnswer answer="Kalkaanslag in de Quooker ontstaat door calcium en magnesium in hard leidingwater. Het vermindert de verwarmingsefficiëntie en verkort de levensduur van de boiler. Oplossing: regelmatig ontkalken (3–6 maanden bij hard water) of structureel met een osmosefilter dat 95–99% van kalk verwijdert vóór het de Quooker bereikt." />

        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#oorzaken" className="hover:underline">Waarom ontstaat kalkaanslag?</a></li>
            <li><a href="#gevolgen" className="hover:underline">Wat doet kalk met de boiler?</a></li>
            <li><a href="#signalen" className="hover:underline">Hoe herken je verkalkiing?</a></li>
            <li><a href="#waterhardheid-tabel" className="hover:underline">Waterhardheid vs ontkalkfrequentie</a></li>
            <li><a href="#ontkalken" className="hover:underline">Quooker ontkalken: stap-voor-stap</a></li>
            <li><a href="#osmose" className="hover:underline">Structurele oplossing: osmose</a></li>
            <li><a href="#gemeente" className="hover:underline">Waterhardheid in jouw gemeente</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        <section id="oorzaken">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waarom ontstaat kalkaanslag in de Quooker?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nederlands leidingwater bevat van nature opgeloste mineralen, waaronder calcium (Ca²⁺) en
            magnesium (Mg²⁺). De concentratie van deze mineralen bepaalt de waterhardheid, uitgedrukt
            in graden Deutsche Härte (°dH). In regio&#39;s als Amsterdam en Groningen is het water relatief
            zacht (&lt;8°dH); in het zuiden en midden van het land — Eindhoven, Tilburg, Breda — is het
            water beduidend harder (soms &gt;20°dH).
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In de Quooker-boiler wordt water verhit tot circa <strong>110°C</strong> en onder druk bewaard
            (gemiddeld 1,8 bar). Bij die temperatuur neemt de oplosbaarheid van calciumcarbonaat sterk
            af. De calcium- en magnesiumionen kristalliseren en slaan neer als vast, wit residu op de
            binnenste boilerwand en — het meest schadelijk — op het verwarmingselement. Dit proces
            wordt <em>precipitatie</em> of <em>thermische kalkafzetting</em> genoemd.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Chemisch:</strong> bij verhitting verandert opgelost
            calciumhydrogencarbonaat (Ca(HCO₃)₂) in vast calciumcarbonaat (CaCO₃) — beter bekend als
            kalksteen of kalk. Dit is hetzelfde proces dat kalkranden in een waterkoker veroorzaakt,
            maar in de Quooker verloopt het bij een hogere temperatuur en sneller.
          </div>
        </section>

        <section id="gevolgen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat doet kalkaanslag met de Quooker boiler?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Kalkaanslag heeft drie directe negatieve effecten op de werking en levensduur van een Quooker.
            Al bij een kalklaag van 1 millimeter zijn de gevolgen meetbaar.
          </p>
          <div className="space-y-4">
            <div className="border border-gray-100 rounded-xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-2">Hoger energieverbruik</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Kalksteen heeft een thermische geleidbaarheid van circa 1–3 W/(m·K), vergeleken met
                45 W/(m·K) voor staal. Een kalklaag op het verwarmingselement werkt als isolator:
                het element moet langer en harder werken om dezelfde temperatuur te bereiken.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#E0F2FE]">
                      <th className="text-left py-2 px-3 font-semibold text-[#003F5C]">Kalklaagdikte</th>
                      <th className="py-2 px-3 font-semibold text-[#003F5C] text-center">Extra energieverbruik</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { dikte: '0,5 mm', extra: '5–8%' },
                      { dikte: '1 mm', extra: '10–15%' },
                      { dikte: '2 mm', extra: '18–22%' },
                      { dikte: '3 mm', extra: '25–30%' },
                    ].map(r => (
                      <tr key={r.dikte} className="border-b border-gray-100">
                        <td className="py-2 px-3 text-gray-700">{r.dikte}</td>
                        <td className="py-2 px-3 text-center font-semibold text-red-600">{r.extra}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-2">Kortere levensduur verwarmingselement</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                De verhoogde bedrijfstemperatuur als gevolg van kalkaanslag versnelt de thermische
                veroudering van het verwarmingselement. Het element is ontworpen voor een bepaalde
                bedrijfstemperatuur; door de kalkisolatie wordt die temperatuur overschreden, wat de
                levensduur terugbrengt van 10–15 jaar naar mogelijk 5–7 jaar bij hard water zonder onderhoud.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-2">Afdichtingsslijtage</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Kalkdeeltjes zijn mechanisch schurend en tasten O-ringen en afdichtingen aan. Dit verhoogt
                het risico op lekkages, met name rondom de boilerflens en de aansluitingen. In extreme
                gevallen kan een verwaarloosde Quooker in een harde waterregio al na 4–5 jaar lekkages
                vertonen die normaliter pas na 10+ jaar optreden.
              </p>
            </div>
          </div>
        </section>

        <section id="signalen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe herken je dat de Quooker verkalkt is?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Verkalk zijn gaat geleidelijk — de meeste gebruikers merken het pas wanneer de signalen
            al duidelijk zijn. Let op deze vier indicatoren:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                titel: 'Langzamere opwarming',
                tekst: 'De boiler heeft merkbaar meer tijd nodig om op temperatuur te komen. Dit is het vroegste en meest betrouwbare signaal van kalkaanslag op het verwarmingselement.',
              },
              {
                titel: 'Kalkranden op uitloopdop',
                tekst: 'Witte of grijze aanslag rondom de gaatjes van de uitloopdop. Dit is zichtbare kalk die met het water meekwam vanuit de boiler.',
              },
              {
                titel: 'Kalkachtige smaak',
                tekst: "Het water uit de Quooker heeft een kalkige of licht bittere smaak. Dit wijst op een hogere concentratie opgeloste calcium in het boilerwater.",
              },
              {
                titel: 'Verminderde waterdruk',
                tekst: 'De straal uit de kraanuitloop is dunner of ongelijkmatigg dan normaal. Kalk kan de kleine gaatjes in de uitloopdop gedeeltelijk verstoppen.',
              },
            ].map(s => (
              <div key={s.titel} className="bg-white border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1.5">⚠ {s.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{s.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-5 leading-relaxed">
            Herkent u twee of meer van bovenstaande signalen? Dan is ontkalken nu de aangewezen stap.
            Wacht niet langer: hoe dikker de kalklaag, hoe moeilijker en tijdrovender het ontkalkingsproces.
          </p>
        </section>

        <section id="waterhardheid-tabel">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe vaak moet u ontkalken op basis van de waterhardheid?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De ontkalkingsfrequentie is direct afhankelijk van de waterhardheid in uw gemeente.
            Onderstaande tabel geeft een praktische richtlijn per hardheidsklasse.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Hardheid</th>
                  <th className="text-center py-2.5 px-3 font-semibold">°dH</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Regio&#39;s</th>
                  <th className="text-center py-2.5 px-3 font-semibold">Ontkalken</th>
                  <th className="text-center py-2.5 px-3 font-semibold">Kalkrisico</th>
                </tr>
              </thead>
              <tbody>
                {waterhardheidData.map((r, i) => (
                  <tr key={r.hardheid} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.hardheid}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{r.dH}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.regio}</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-[#005F8A]">{r.ontkalken}</td>
                    <td className={`py-2.5 px-3 text-center font-semibold ${r.risicoKleur}`}>{r.risico}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Richtlijnen gebaseerd op gemiddelde kalkafzetsnelheid per waterhardheidsklasse bij
            normaal Quooker-gebruik (3–5 liter per dag). Bij intensiever gebruik is vaker ontkalken
            aan te raden. Controleer de exacte waterhardheid voor uw gemeente via{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              onze gemeente-check
            </Link>.
          </p>
        </section>

        <section id="ontkalken">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Quooker ontkalken: stap-voor-stap met citroenzuur
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Citroenzuur is de veiligste en meest effectieve methode voor het ontkalken van een Quooker
            thuis. Het is voedingsveilig, biologisch afbreekbaar en verkrijgbaar bij vrijwel elke
            supermarkt of drogist. Gebruik geen azijnzuur (witte azijn) voor de boiler-binnenkant —
            de geur hecht makkelijk aan het metaal en is moeilijk te spoelen.
          </p>
          <div className="space-y-4">
            {ontkalkStappen.map(s => (
              <div key={s.stap} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {s.stap}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mt-1">{s.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-amber-50 border border-amber-100 rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Belangrijk:</strong> de exacte ontkalkprocedure
            verschilt per Quooker-model (PRO3, PRO7, COMBI, FUSION). Raadpleeg altijd de meegeleverde
            handleiding of de Quooker-website voor de procedure specifiek voor uw model. Bij twijfel
            kunt u contact opnemen met een erkend Quooker-servicepunt.
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Meer informatie over het complete onderhoudsschema van uw Quooker — inclusief filtervervanging,
            uitloopdop reinigen en professionele service — vindt u op onze pagina{' '}
            <Link href="/quooker-onderhoud" className="text-[#005F8A] underline hover:no-underline">
              Quooker onderhoud
            </Link>.
          </p>
        </section>

        <section id="osmose">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Structurele oplossing: osmosefilter als pre-filter voor de Quooker
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ontkalken is een reactieve oplossing: u verwijdert kalk nadat die al is opgebouwd. Voor
            bewoners van hardwaterregio&#39;s die hun Quooker maximaal willen ontzien, is een{' '}
            <strong>omgekeerde osmose (RO) systeem als pre-filter</strong> de meest structurele aanpak.
            Een osmosefilter wordt aangesloten vóór de koudwaterinlaat van de Quooker en filtert het
            water voordat het de boiler bereikt.
          </p>

          <div className="space-y-3 mb-6">
            {[
              {
                titel: 'Wat osmose verwijdert',
                tekst: 'Een RO-membraan filtert 95–99% van opgeloste calcium- en magnesiumionen uit het water. Het resultaat is vrijwel kalkvrij water met een hardheid van &lt;1°dH — ongeacht hoe hard het leidingwater is.',
              },
              {
                titel: 'Effect op kalkaanslag in de Quooker',
                tekst: 'Zonder calcium en magnesium in het water is er geen grondstof voor kalkaanslag. De boilerwand blijft schoon, het verwarmingselement draait op zijn ontwerptemperatuur en de levensduur wordt niet verkort door kalkschade.',
              },
              {
                titel: 'Kostenbesparing op onderhoud',
                tekst: 'Minder ontkalken betekent minder tijdsinvestering (45 minuten per keer) en minder verbruik van citroenzuur. In harde waterregio\'s kan dat neerkomen op 3–5 vermeden ontkalkbeurten per jaar. Daarnaast bespaart u 10–25% op het elektriciteitsverbruik van de Quooker door de afwezigheid van kalkisolatie.',
              },
              {
                titel: 'Installatie en kosten',
                tekst: 'Een onderbouw RO-systeem wordt aangesloten op de koudwatertoevoer van de Quooker via een T-stuk. Eenmalige installatiekosten bedragen €100–200 bij een loodgieter of installateur. De osmosefilters zelf (membraan + voorfilters) kosten €50–120 per jaar aan vervanging. Meer informatie vindt u op onze pagina over omgekeerde osmose.',
              },
            ].map(s => (
              <div key={s.titel} className="bg-white border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">→ {s.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{s.tekst}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-[#003F5C] mb-3 text-sm">Zonder osmose pre-filter</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  '3–6 keer per jaar ontkalken',
                  '10–30% hoger energieverbruik',
                  'Verwarmingselement slijt sneller',
                  'Afdichtingen eerder defect',
                  'Zichtbare kalk op uitloopdop',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-red-500 font-bold shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-4">
              <h3 className="font-bold text-[#003F5C] mb-3 text-sm">Met osmose pre-filter</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Vrijwel geen kalkaanslag',
                  'Optimaal energieverbruik',
                  'Verwarmingselement gaat langer mee',
                  'Minder afdichtingsslijtage',
                  'Kalkvrij water voor koffie en thee',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-green-600 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Meer weten over omgekeerde osmose als pre-filter voor uw Quooker?{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              Lees onze uitgebreide uitleg over osmosefilters
            </Link>.
            Als alternatief voor osmose kan ook een{' '}
            <Link href="/waterontharder" className="text-[#005F8A] underline hover:no-underline">
              waterontharder (ionenwisselaar)
            </Link>{' '}
            de waterhardheid reduceren, hoewel deze een ander technisch principe gebruikt en andere
            toepassingen heeft.
          </p>
        </section>

        <section id="gemeente">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Controleer de waterhardheid in jouw gemeente
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De waterhardheid varieert sterk per regio en zelfs per wijk in Nederland. Uw waterbedrijf
            meet de hardheid op meerdere meetpunten in het distributienetwerk. Via onze gemeente-check
            kunt u direct opzoeken hoe hard het water bij u thuis is — en daarmee de aanbevolen
            ontkalkingsfrequentie voor uw Quooker bepalen.
          </p>
          <div className="bg-[#E0F2FE] border border-[#005F8A]/20 rounded-2xl p-6 text-center">
            <p className="font-bold text-[#003F5C] text-lg mb-2">Waterhardheid per gemeente</p>
            <p className="text-gray-600 text-sm mb-4">
              Zoek uw gemeente op en ontdek direct hoe hard uw leidingwater is, in welke
              hardheidsklasse uw gemeente valt, en hoe vaak u uw Quooker moet ontkalken.
            </p>
            <Link
              href="/waterhardheid"
              className="inline-block bg-[#005F8A] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Zoek mijn gemeente op →
            </Link>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            De check toont ook de exacte waterhardheid in °dH en de corresponderende ontkalkfrequentie
            voor Quooker, waterkoker en andere warmwaterapparaten. Kijk ook op de pagina{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid per gemeente
            </Link>{' '}
            voor een overzicht van alle Nederlandse gemeenten.
          </p>
        </section>

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: '/quooker-onderhoud',
                title: 'Quooker onderhoud: compleet schema',
                desc: 'Compleet jaarlijks onderhoudsschema met alle taken, frequenties en kosten voor uw Quooker.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Controleer de waterhardheid in uw gemeente en bepaal de juiste ontkalkingsfrequentie.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose als pre-filter',
                desc: 'Hoe werkt een osmosefilter, wat kost het en wanneer is het de moeite waard voor uw Quooker?',
              },
              {
                href: '/waterontharder',
                title: 'Waterontharder als alternatief',
                desc: 'Een ionenwisselaar verwijdert waterhardheid op een andere manier dan osmose. Lees de vergelijking.',
              },
              {
                href: '/quooker-filter',
                title: 'Quooker filter: wat verwijdert het?',
                desc: 'Het koolstoffilter in de Quooker FILTER-modellen verwijdert geen kalk — lees wat het wel en niet doet.',
              },
              {
                href: '/quooker-versus-osmose',
                title: 'Quooker versus osmose filter',
                desc: 'Objectieve vergelijking: wanneer volstaat een Quooker met koolstoffilter en wanneer kies je voor osmose?',
              },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1 text-sm">
                  {l.title}
                </p>
                <p className="text-xs text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over kalk in de Quooker</h2>
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
