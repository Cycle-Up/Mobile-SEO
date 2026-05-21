import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kraanwater kwaliteit: veilig, maar niet altijd optimaal',
  description:
    'Is kraanwater veilig in Nederland? Alles over de kwaliteit van kraanwater: zuiveringsproces, jaarverslagen, residuele zorgen over PFAS, microplastics en.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kraanwater/kwaliteit' },
  openGraph: {
    title: 'Kraanwater kwaliteit: veilig, maar niet altijd optimaal',
    description:
      'Nederlands kraanwater: veilig door strenge wetgeving, maar consumenten maken zich terecht zorgen over chloor, PFAS, hardheid en microplastics.',
    url: 'https://waterfilterplatform.nl/kraanwater/kwaliteit',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Is kraanwater veilig om te drinken in Nederland?',
    answer:
      'Ja. Nederlands kraanwater is een van de veiligste ter wereld. Meer dan 99,9% van alle gemeten watermonsters voldoet aan de wettelijke normen van het Drinkwaterbesluit. De WHO rangschikt Nederland consequent in de wereldtop voor drinkwaterkwaliteit. Toch zijn er residuele stoffen (chloor, sporen PFAS, hardheid) die consumenten kunnen willen reduceren via een waterfilter.',
  },
  {
    question: 'Wat zit er in Nederlands kraanwater?',
    answer:
      'Nederlands kraanwater bevat: (1) opgeloste mineralen — calcium, magnesium, natrium, kalium, bicarbonaat, (2) residueel chloor (0,05–0,3 mg/L) als desinfectiemiddel, (3) sporenconcentraties van nitraten, PFAS, pesticiden en medicijnresten (altijd binnen wettelijke normen), en (4) soms organische microcomponenten afhankelijk van de waterwinbron.',
  },
  {
    question: 'Bevat kraanwater microplastics?',
    answer:
      'Ja, in lage concentraties. RIVM-onderzoek toont microplastics aan in Nederlands kraanwater. De omvang en gezondheidseffecten zijn nog niet volledig in kaart gebracht; EU-normen zijn in ontwikkeling. Van de beschikbare filtertechnologieën verwijdert omgekeerde osmose het beste microplastics (deeltjes >0,0001 µm worden geblokkeerd door het membraan).',
  },
  {
    question: 'Hoeveel PFAS zit er in Nederlands kraanwater?',
    answer:
      'De PFAS-concentratie in Nederlands kraanwater ligt in de meeste gevallen ruim onder de EU-norm van 0,10 µg/L (som van 20 PFAS). RIVM-monitoring 2023–2024 toont gemiddelden van <0,05 µg/L. Uitzonderingen bestaan in gebieden nabij vliegvelden (Schiphol, Eindhoven) en industrieterreinen (Chemours). Omgekeerde osmose verwijdert 95–99% van PFAS.',
  },
  {
    question: 'Bevat kraanwater medicijnresten?',
    answer:
      'In de meeste Nederlandse drinkwaterbronnen zijn sporen van medicijnresten aangetroffen op ultralaag niveau (< 0,001 µg/L). Er zijn geen EU-normen voor individuele medicijnresten in drinkwater. De gezondheidsrisico\'s bij deze concentraties worden door RIVM als verwaarloosbaar klein beschouwd. Omgekeerde osmose verwijdert de meeste farmaceutische residuen.',
  },
  {
    question: 'Waarom smaakt kraanwater soms naar chloor?',
    answer:
      'Residueel chloor (0,05–0,3 mg/L) wordt toegevoegd als desinfectiemiddel om bacteriegroei in het distributienet te voorkomen. Bij concentraties boven ~0,1 mg/L kan chloor merkbaar zijn voor mensen met een gevoelige neus. De smaak is meer uitgesproken bij warm water, na lang stilstaan of in lange distributiesystemen. Een actieve koolstoffilter verwijdert chloor volledig.',
  },
  {
    question: 'Is kraanwater harder of zachter dan bronwater?',
    answer:
      'Dit varieert sterk per regio en per merk bronwater. Nederlands kraanwater heeft een hardheid van 4–22 °dH afhankelijk van de regio. Veel bekende bronwaters (Spa Blauw, Evian) hebben een hardheid van 2–10 °dH. Sommige mineraalwaters (San Pellegrino) zijn zelfs harder dan Nederlands leidingwater. Hardheid heeft geen directe gezondheidsrisico\'s.',
  },
  {
    question: 'Wanneer is een waterfilter voor kraanwater zinvol?',
    answer:
      'Een waterfilter is zinvol bij: (1) storende chloor-smaak of geur → koolstoffilter, (2) hard water met kalkvorming (>14 °dH) → waterontharder of osmose, (3) zorgen over PFAS of nitraten → omgekeerde osmose, (4) loden leidingen in woning van vóór 1960 → osmose of gecertificeerd koolstoffilter, (5) kwetsbare groepen (baby\'s, zwangere vrouwen, immuungecompromitteerden) → osmose.',
  },
];

const zuiveringsStappen = [
  { stap: '1', naam: 'Coagulatie', desc: 'Toevoeging van coagulatiemiddelen (aluminiumsulfaat of ijzerchloride) om fijne deeltjes, bacteriën en organisch materiaal samen te klonteren tot vlokken.', van: 'Oppervlaktewater' },
  { stap: '2', naam: 'Sedimentatie', desc: 'De gevormde vlokken bezinken in bezinkingstanks. Verwijdert het merendeel van zweefdeeltjes, troebel materiaal en gebonden verontreinigingen.', van: 'Oppervlaktewater' },
  { stap: '3', naam: 'Zandfiltratie', desc: 'Mechanische en biologische filtratie over lagen zand en grind. Verwijdert resterende deeltjes, ijzer en mangaan.', van: 'Grond- en oppervlaktewater' },
  { stap: '4', naam: 'Actieve koolstof', desc: 'Adsorptie van organische microverontreinigingen: pesticiden, PFAS (gedeeltelijk), geur- en smaakstoffen, en medicijnresten.', van: 'Oppervlaktewater' },
  { stap: '5', naam: 'UV-bestraling', desc: 'Inactivatie van pathogenen (bacteriën, virussen, Cryptosporidium) zonder chemische toevoeging.', van: 'Grond- en oppervlaktewater' },
  { stap: '6', naam: 'Chloordesinfectie', desc: 'Toevoeging van residueel chloor (0,05–0,3 mg/L) om bacteriegroei in het distributienet te voorkomen. De bron van chloor-smaak in kraanwater.', van: 'Alle bronnen' },
];

const nlVsWereld = [
  { aspect: 'Normconformiteit', nederland: '99,9%', euGemiddeld: '98,5%', ontwikkelingsland: '60–85%' },
  { aspect: 'PFAS in drinkwater', nederland: 'Veelal <0,05 µg/L', euGemiddeld: 'Variabel', ontwikkelingsland: 'Onbekend/geen norm' },
  { aspect: 'E.coli / bacteriën', nederland: '0 (strenge norm)', euGemiddeld: 'Vrijwel 0', ontwikkelingsland: 'Aanwezig in velen' },
  { aspect: 'Lood', nederland: '<1 µg/L (levering)', euGemiddeld: 'Wisselend (leidingen)', ontwikkelingsland: 'Verhoogd risico' },
  { aspect: 'Chloor', nederland: '0,05–0,3 mg/L', euGemiddeld: '0,1–0,5 mg/L', ontwikkelingsland: 'Niet altijd aanwezig' },
  { aspect: 'Regulering', nederland: 'Drinkwaterbesluit + EU 2020/2184', euGemiddeld: 'EU-richtlijn', ontwikkelingsland: 'Wisselend' },
];

const restzorgenTabel = [
  { zorg: 'Chloor smaak/geur', aanwezig: '✓ 0,05–0,3 mg/L', risico: 'Geen gezondheidsrisico', filteroplossing: 'Koolstoffilter (volledig)' },
  { zorg: 'Hardheid / kalk', aanwezig: '✓ 4–22 °dH regionaal', risico: 'Geen, wel apparaatschade', filteroplossing: 'Ontharder, osmose' },
  { zorg: 'PFAS sporen', aanwezig: '✓ Veelal <0,05 µg/L', risico: 'Laag, lokaal hoger', filteroplossing: 'Osmose (95–99%)' },
  { zorg: 'Microplastics', aanwezig: '✓ Laag niveau', risico: 'Nog onderzocht', filteroplossing: 'Osmose (membraan)' },
  { zorg: 'Medicijnresten', aanwezig: '✓ Ultralaag (<0,001 µg/L)', risico: 'Verwaarloosbaar', filteroplossing: 'Osmose' },
  { zorg: 'Nitraten', aanwezig: '✓ 15–45 mg/L (agrarisch)', risico: 'Baby\'s bij >10 mg/L', filteroplossing: 'Osmose (90–95%)' },
];

export default function KraanwaterKwaliteitPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Kraanwater kwaliteit: veilig, maar niet altijd optimaal',
          description:
            'Overzicht van de kwaliteit van Nederlands kraanwater: zuiveringsproces, jaarverslagen, residuele zorgen en wanneer een waterfilter zinvol is.',
          datePublished: '2026-03-25',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/kraanwater/kwaliteit',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kraanwater', url: 'https://waterfilterplatform.nl/kraanwater' },
          { name: 'Kwaliteit', url: 'https://waterfilterplatform.nl/kraanwater/kwaliteit' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kraanwater" className="hover:text-[#005F8A]">Kraanwater</Link>
            <span className="mx-2">/</span>
            <span>Kwaliteit</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kraanwater kwaliteit: veilig, maar niet altijd optimaal
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Nederlands kraanwater is wettelijk veilig en behoort tot de beste ter wereld.
            Maar &ldquo;veilig&rdquo; betekent niet hetzelfde als &ldquo;optimaal&rdquo;.
            Op deze pagina bespreken we het zuiveringsproces, wat consumenten werkelijk
            bezighoudt (chloor, PFAS, microplastics, hardheid) en wanneer extra filtratie
            zinvolle meerwaarde biedt.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#zorgen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Residuele zorgen bekijken →
            </Link>
            <Link
              href="/kraanwater/vs-gefilterd"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Kraanwater vs gefilterd water
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* QuickAnswer */}
        <QuickAnswer answer="Nederlands kraanwater is een van de veiligste ter wereld: meer dan 99,9% van alle metingen voldoet aan de wettelijke normen. Toch bevatten sporen PFAS (<0,05 µg/L), residueel chloor, microplastics en hardheid het water niet optimaal voor iedereen. Een koolstoffilter pakt smaak aan; omgekeerde osmose verwijdert ook PFAS, nitraten en microplastics." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#veiligheid" className="hover:underline">Nederlands kraanwater veiligheidsrecord</a></li>
            <li><a href="#zuivering" className="hover:underline">Het zuiveringsproces</a></li>
            <li><a href="#zorgen" className="hover:underline">Residuele zorgen: wat blijft over?</a></li>
            <li><a href="#vergelijking-wereld" className="hover:underline">NL vs EU vs wereld</a></li>
            <li><a href="#jaarverslagen" className="hover:underline">Jaarverslagen en kwaliteitsrapporten</a></li>
            <li><a href="#filter-zinvol" className="hover:underline">Wanneer extra filtratie?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Veiligheidsrecord */}
        <section id="veiligheid">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Nederlands kraanwater: een van de beste ter wereld</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Wanneer de WHO en de Europese Commissie drinkwaterkwaliteit beoordelen, eindigt
            Nederland consequent in de mondiale top drie. Dit is geen toeval: het resultaat
            van decennia investering in waterinfrastructuur, strenge regelgeving en onafhankelijke
            monitoring door RIVM.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="bg-[#E0F2FE] rounded-2xl p-4 text-center">
              <p className="text-3xl font-bold text-[#005F8A]">99,9%</p>
              <p className="text-sm text-gray-600 mt-1">normconformiteit metingen</p>
              <p className="text-xs text-gray-400 mt-1">RIVM 2024</p>
            </div>
            <div className="bg-[#E0F2FE] rounded-2xl p-4 text-center">
              <p className="text-3xl font-bold text-[#005F8A]">10</p>
              <p className="text-sm text-gray-600 mt-1">drinkwaterbedrijven</p>
              <p className="text-xs text-gray-400 mt-1">voor 17,9 mln inwoners</p>
            </div>
            <div className="bg-[#E0F2FE] rounded-2xl p-4 text-center">
              <p className="text-3xl font-bold text-[#005F8A]">&gt;60</p>
              <p className="text-sm text-gray-600 mt-1">gemeten parameters</p>
              <p className="text-xs text-gray-400 mt-1">Drinkwaterbesluit 2023</p>
            </div>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Het woord &ldquo;veilig&rdquo; heeft echter een specifieke wettelijke betekenis:
            alle gemeten waarden liggen onder de maximumwaarden vastgesteld in het Drinkwaterbesluit
            en de EU-Drinkwaterrichtlijn 2020/2184. Dit is een minimumgrens, geen streven naar
            nul verontreiniging. Sommige stoffen — zoals PFAS — kennen geen bekende veilige
            drempelwaarde, en voor microplastics zijn normen nog in ontwikkeling.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="font-semibold text-amber-800 mb-1 text-sm">Veilig ≠ perfect zuiver</p>
            <p className="text-sm text-amber-700 leading-relaxed">
              Consumenten die kraanwater drinken, consumeren sporenconcentraties van chloor,
              PFAS, medicijnresten en microplastics. Deze liggen allemaal ver onder de wettelijke
              normen en worden door RIVM als geen gezondheidsrisico gekwalificeerd. Wie extra
              zekerheid wenst of stoort aan smaak/geur, kan kiezen voor aanvullende filtratie.
            </p>
          </div>
        </section>

        {/* Zuiveringsproces */}
        <section id="zuivering">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Het zuiveringsproces: hoe wordt kraanwater veilig?</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Voordat kraanwater uit uw kraan stroomt, heeft het een reeks zuiveringsstappen
            doorlopen. Het exacte proces hangt af van de waterbron (grond- of oppervlaktewater),
            maar de kern bestaat steeds uit dezelfde stappen:
          </p>

          <div className="space-y-3 mb-5">
            {zuiveringsStappen.map(s => (
              <div key={s.stap} className="border border-gray-100 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    {s.stap}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                      <p className="font-semibold text-[#003F5C]">{s.naam}</p>
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">{s.van}</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed">
            Na de zuivering is het water microbiologisch veilig en chemisch conform de normen.
            Residueel chloor wordt bewust in het water gehouden om hercontaminatie in het
            distributienet (130.000 km leidingen) te voorkomen. Dit chloor is de primaire
            oorzaak van de bekende kraanwatersmaak.
          </p>
        </section>

        {/* Residuele zorgen */}
        <section id="zorgen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Residuele zorgen: wat consumenten bezighoudt</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ondanks de uitstekende veiligheidsrecord zijn er zes categorieën residuele stoffen
            of eigenschappen die consumenten zorgen baren. Voor elk geldt: ze zijn aanwezig
            binnen wettelijke normen, maar niet iedereen accepteert dat als voldoende.
          </p>

          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Zorg</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Aanwezig in NL</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Risico</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Filteroplossing</th>
                </tr>
              </thead>
              <tbody>
                {restzorgenTabel.map((r, i) => (
                  <tr
                    key={r.zorg}
                    className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-[#E0F2FE]/20 border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 font-medium text-gray-900">{r.zorg}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.aanwezig}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.risico}</td>
                    <td className="py-2.5 px-3 text-xs text-[#005F8A] font-medium">{r.filteroplossing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Bronnen: RIVM Drinkwaterrapport 2024, EU-Drinkwaterrichtlijn 2020/2184.
          </p>

          <div className="mt-5 bg-[#E0F2FE]/60 rounded-2xl p-4">
            <p className="font-semibold text-[#003F5C] mb-1 text-sm">PFAS: stand van zaken 2026</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              PFAS zijn per- en polyfluoralkylstoffen die zeer persistent zijn in het milieu
              (&ldquo;forever chemicals&rdquo;). In Nederlands kraanwater worden PFAS-sporen gemeten,
              maar doorgaans ruim onder de EU-norm van 0,10 µg/L. Lokale verhogingen bestaan
              nabij Schiphol, Eindhoven Airport en Chemours in Dordrecht. Omgekeerde osmose
              verwijdert 95–99% van PFAS-verbindingen. Controleer de kwaliteitsrapportage
              van uw drinkwaterbedrijf voor uw specifieke regio.
            </p>
          </div>
        </section>

        {/* NL vs wereld */}
        <section id="vergelijking-wereld">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Nederland vs EU-gemiddeld vs ontwikkelingslanden</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Om de kwaliteit van Nederlands kraanwater in perspectief te plaatsen, hier een
            vergelijking met het EU-gemiddelde en drinkwatersituatie in ontwikkelingslanden:
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Aspect</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Nederland</th>
                  <th className="text-left py-2.5 px-3 font-semibold">EU-gemiddeld</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Ontwikkelingsland</th>
                </tr>
              </thead>
              <tbody>
                {nlVsWereld.map((r, i) => (
                  <tr
                    key={r.aspect}
                    className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-[#E0F2FE]/20 border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.aspect}</td>
                    <td className="py-2.5 px-3 text-green-700 text-xs font-medium">{r.nederland}</td>
                    <td className="py-2.5 px-3 text-amber-700 text-xs">{r.euGemiddeld}</td>
                    <td className="py-2.5 px-3 text-red-700 text-xs">{r.ontwikkelingsland}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Jaarverslagen */}
        <section id="jaarverslagen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Jaarverslagen en kwaliteitsrapporten raadplegen</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Elk drinkwaterbedrijf is wettelijk verplicht jaarlijks kwaliteitsgegevens openbaar
            te maken. U kunt de actuele kwaliteit van het kraanwater in uw regio raadplegen via:
          </p>

          <div className="space-y-3">
            {[
              {
                bron: 'drinkwaterinfo.nl',
                beschrijving: 'Centrale database met kwaliteitsgegevens per waterwingebied en distributiepunt. Zoek op postcode voor de resultaten van uw regio.',
              },
              {
                bron: 'RIVM Drinkwaterrapport (jaarlijks)',
                beschrijving: 'Onafhankelijke analyse van alle meetresultaten van de tien drinkwaterbedrijven. Signaleert trends en normoverschrijdingen. Beschikbaar via rivm.nl.',
              },
              {
                bron: 'Jaarverslag uw waterbedrijf',
                beschrijving: 'Elk bedrijf (Vitens, Evides, Dunea, WML, etc.) publiceert een jaarverslag met gedetailleerde kwaliteitsdata per meetpunt en regio.',
              },
            ].map(b => (
              <div key={b.bron} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-[#003F5C] mb-1">{b.bron}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{b.beschrijving}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 mt-4 leading-relaxed">
            Wil je de waterhardheid voor jouw specifieke gemeente opzoeken? Bekijk het{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheidsoverzicht per gemeente
            </Link>
            {' '}met advies per hardheidsklasse.
          </p>
        </section>

        {/* Wanneer filter zinvol */}
        <section id="filter-zinvol">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer is extra filtratie zinvol bij kraanwater?</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Voor de meeste Nederlanders is kraanwater direct drinkbaar zonder aanvullende
            behandeling. Extra filtratie voegt waarde toe in de volgende situaties:
          </p>

          <div className="space-y-3 mb-6">
            {[
              {
                scenario: 'U stoort zich aan de chloor-smaak of -geur',
                oplossing: 'Actieve koolstoffilter (onderbouw of filterkan). Verwijdert chloor volledig en verbetert de smaak aanzienlijk. Kosten: €25–150 per jaar.',
              },
              {
                scenario: 'U woont in een hard watergebied (>14 °dH)',
                oplossing: 'Waterontharder voor totale huishoudbehandeling of omgekeerde osmose voor drinkwater. Voorkomt kalkvorming en verbetert smaak. Controleer uw hardheid via de waterhardheid-pagina.',
              },
              {
                scenario: 'U maakt zich zorgen over PFAS, nitraten of lood',
                oplossing: 'Omgekeerde osmose is de enige bewezen thuistechnologie die PFAS (95–99%), nitraten (90–95%) en lood (95–99%) betrouwbaar verwijdert.',
              },
              {
                scenario: 'Uw woning is gebouwd vóór 1960',
                oplossing: 'Risico op loodleidingen. Laat een loodtest uitvoeren. Tot sanering: osmose filter bij de keukenkraan.',
              },
              {
                scenario: 'U heeft een baby of immuungecompromitteerd gezinslid',
                oplossing: 'Omgekeerde osmose of een gecertificeerd koolstoffilter (NSF 53) biedt extra microbiologische en chemische zekerheid boven de wettelijke norm.',
              },
            ].map(s => (
              <div key={s.scenario} className="bg-white border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-[#003F5C] mb-1.5 text-sm">{s.scenario}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{s.oplossing}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#E0F2FE] rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2">Alle filteropties vergelijken</p>
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
              Van eenvoudige filterkan tot complete osmose-installatie: bekijk alle filtersoorten
              met vergelijking op effectiviteit, kosten en onderhoud.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/waterfilter/soorten"
                className="bg-[#005F8A] text-white font-semibold px-4 py-2 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
              >
                Filtersoorten vergelijken →
              </Link>
              <Link
                href="/kraanwater/vs-gefilterd"
                className="border border-[#005F8A] text-[#005F8A] font-semibold px-4 py-2 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
              >
                Kraanwater vs gefilterd water
              </Link>
            </div>
          </div>
        </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</h3>
            <p className="text-sm text-gray-600">Wettelijke normen en parameters voor drinkwaterkwaliteit in Nederland.</p>
          </Link>
          <Link href="/stoffen-in-drinkwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater</h3>
            <p className="text-sm text-gray-600">Overzicht van alle stoffen die in Nederlands drinkwater voorkomen.</p>
          </Link>
          <Link href="/waterkwaliteit/nederland" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterkwaliteit in Nederland</h3>
            <p className="text-sm text-gray-600">Regionaal overzicht van waterkwaliteit en drinkwaterbedrijven.</p>
          </Link>
          <Link href="/leidingwater/kwaliteit" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Leidingwater kwaliteit</h3>
            <p className="text-sm text-gray-600">Diepgaande informatie over de kwaliteit van Nederlands leidingwater.</p>
          </Link>
        </div>
      </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer over kraanwater en waterkwaliteit</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/kraanwater/vs-gefilterd',
                title: 'Kraanwater vs gefilterd water',
                desc: 'Uitgebreide vergelijking op smaak, veiligheid, kosten en milieu.',
              },
              {
                href: '/leidingwater/kwaliteit',
                title: 'Leidingwater kwaliteit Nederland',
                desc: 'Normen, parameters (>60) en regionale hardheidsverschillen.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Hoe hard is het kraanwater bij u thuis? Zoek het op.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose gids',
                desc: 'Complete uitleg: hoe werkt het, wat verwijdert het, voor wie?',
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over kraanwater kwaliteit</h2>
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
