import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Hard leidingwater in Nederland: gebieden, gevolgen en oplossingen',
  description: 'Hard leidingwater bevat veel kalk. Welke regio\'s in NL hebben het hardste water? Gevolgen voor CV, wasmachine en huid, met concrete oplossingen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/hard-water' },
  openGraph: {
    title: 'Hard leidingwater in Nederland: gebieden, gevolgen en oplossingen',
    description: 'Hardst water: Limburg (20-30 dH), Noord-Brabant (18-25 dH). Zachts: Friesland/Groningen (4-8 dH). Gevolgen voor cv, wasmachine, huid en oplossingen per.',
    url: 'https://waterfilterplatform.nl/leidingwater/hard-water',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is de waterhardheid in graden dH?',
    answer:
      'Waterhardheid wordt in Nederland gemeten in graden duitse hardheid (dH). 1 dH staat voor 10 mg calciumoxide of 17,8 mg calcium per liter. De schaal loopt van zacht (minder dan 7 dH) tot zeer hard (meer dan 21 dH). Zacht water bevat weinig calcium en magnesium; hard water bevat veel. De hardheid zegt niets over de hygiënische kwaliteit van het water: beide zijn volkomen veilig om te drinken.',
  },
  {
    question: 'Welke provincie heeft het hardste leidingwater in Nederland?',
    answer:
      'Limburg heeft het hardste leidingwater van Nederland, met waarden van 20-30 dH in grote delen van de provincie. Noord-Brabant staat op de tweede plaats met 18-25 dH. Dit heeft te maken met de kalkhoudende bodem (mergel, kalkzandsteen) van waaruit het grondwater wordt gewonnen. Het zachtste water vindt u in Friesland en Groningen (4-8 dH) en in de Randstad (8-14 dH), waar deels oppervlaktewater wordt gebruikt.',
  },
  {
    question: 'Wat kost hard water aan extra energie voor de cv-ketel?',
    answer:
      'Elk millimeter kalk op de warmtewisselaar van een cv-ketel verhoogt het gasverbruik met circa 7-10%. Bij 3 mm ketelsteen loopt dit op tot 15-20% extra gasverbruik. Bij een gemiddeld gasverbruik van 1.500 m3 per jaar (kosten: circa 1.200 euro) is dat een extra uitgave van 180-240 euro per jaar puur door kalk. Een waterontharder voor de cv-ketel verdient zichzelf terug in 4-6 jaar in harde watergebieden.',
  },
  {
    question: 'Schaadt hard water de gezondheid?',
    answer:
      'Nee, er is geen bewezen direct gezondheidsschadelijk effect van hard water bij normale consumptie. Calcium en magnesium zijn voedingsstoffen die ook via hard water worden ingenomen. Sommige studies suggereren zelfs een beschermend effect van hard water op cardiovasculaire gezondheid. De ongemakken van hard water zijn voornamelijk esthetisch en economisch, niet medisch. Mensen met eczeem of droge huid kunnen echter wel meer last ervaren van hard douchewater.',
  },
  {
    question: 'Hoeveel meer wasmiddel heeft u nodig bij hard water?',
    answer:
      'Bij hard water (boven 14 dH) heeft u 25-40% meer wasmiddel nodig om hetzelfde schoonmaakresultaat te bereiken. Calciumionen in het water binden aan de tensiden in wasmiddel en maken ze minder effectief. Wasmiddelproducenten geven doorgaans doseringsadvies per waterhardheidsniveau op de verpakking. In de hardste zones van Limburg en Noord-Brabant betekent dit jaarlijks 30-60 euro extra aan wasmiddelkosten.',
  },
  {
    question: 'Is een waterontharder of een osmosefilter beter bij hard water?',
    answer:
      'Dit hangt af van uw doel. Een waterontharder behandelt al het huishoudwater via ionenwisseling en voorkomt kalkschade aan cv-ketel, wasmachine en douchekoppen. Een osmosefilter behandelt alleen het drinkwater aan de keukenkraan, maar verwijdert behalve kalk ook nitraten, PFAS, zware metalen en medicijnresten. Voor maximale bescherming van apparaten en leidingen: waterontharder. Voor schoon drinkwater: osmose. Ideaal: combinatie van beide.',
  },
  {
    question: 'Hoe meet ik de waterhardheid thuis?',
    answer:
      'Waterhardheid kunt u eenvoudig thuis meten met een teststrip (verkrijgbaar bij bouwmarkt of online, circa 5-15 euro voor een pakket van 50-100 strips). Dip de strip in koud kraanwater en vergelijk de kleur na 30 seconden met de bijgesloten schaal. Voor een nauwkeurigere meting kunt u een druppeltest aanschaffen of contact opnemen met uw drinkwaterbedrijf, dat de hardheidswaarde per postcodegebied kenbaar maakt. U kunt ook onze gemeentepagina raadplegen.',
  },
  {
    question: 'Helpt een douchefilter tegen de gevolgen van hard water?',
    answer:
      'Een eenvoudig koolstof-douchefilter verwijdert geen kalk. Sommige douchefilters bevatten ionenwisselhars die tijdelijk de hardheid verlaagt, maar de capaciteit is beperkt (circa 3-6 maanden gebruik). Voor structurele vermindering van kalk in de douche is een centrale waterontharder de enige effectieve oplossing. Een douchefilter kan chloor en sommige organische stoffen verwijderen, maar is geen kalkvervanger.',
  },
  {
    question: 'Wat zijn de zichtbare tekenen van hard water in huis?',
    answer:
      'Zichtbare tekenen van hard water: (1) witte kalkranden op douchedeur en tegels, (2) kalkafzetting op kranen en armaturen, (3) vlekken op glas en bestek uit de vaatwasser, (4) verminderd schuim van zeep en shampoo, (5) kalkkorst in waterkoker en koffieapparaat, (6) korter werkende apparaten (vaatwasser, wasmachine, boiler). Hoe meer van deze symptomen, hoe harder uw water.',
  },
];

const regioHardheid = [
  { regio: 'Limburg', hardheid: '20-30 dH', type: 'Zeer hard', kleur: 'bg-red-50 border-red-200 text-red-800' },
  { regio: 'Noord-Brabant', hardheid: '18-25 dH', type: 'Zeer hard', kleur: 'bg-red-50 border-red-200 text-red-800' },
  { regio: 'Zeeland', hardheid: '15-22 dH', type: 'Hard tot zeer hard', kleur: 'bg-orange-50 border-orange-200 text-orange-800' },
  { regio: 'Gelderland', hardheid: '10-20 dH', type: 'Matig tot hard', kleur: 'bg-amber-50 border-amber-200 text-amber-800' },
  { regio: 'Utrecht', hardheid: '10-18 dH', type: 'Matig tot hard', kleur: 'bg-amber-50 border-amber-200 text-amber-800' },
  { regio: 'Zuid-Holland', hardheid: '8-15 dH', type: 'Matig hard', kleur: 'bg-yellow-50 border-yellow-200 text-yellow-800' },
  { regio: 'Noord-Holland', hardheid: '6-12 dH', type: 'Zacht tot matig', kleur: 'bg-lime-50 border-lime-200 text-lime-800' },
  { regio: 'Friesland', hardheid: '4-8 dH', type: 'Zacht', kleur: 'bg-green-50 border-green-200 text-green-800' },
  { regio: 'Groningen', hardheid: '4-8 dH', type: 'Zacht', kleur: 'bg-green-50 border-green-200 text-green-800' },
];

const gevolgenHardWater = [
  {
    categorie: 'CV-ketel en verwarming',
    effect: '+15% gasverbruik, kortere levensduur',
    oplossing: 'Waterontharder voor cv-installatie',
    href: '/waterontkalker',
    kosten: 'Extra jaarkosten: circa 180-240 euro',
  },
  {
    categorie: 'Wasmachine',
    effect: '-30% levensduur, +25% wasmiddel',
    oplossing: 'Waterontharder, maandelijks ontkalken',
    href: '/kalk-in/wasmachine',
    kosten: 'Extra jaarkosten: circa 60-120 euro',
  },
  {
    categorie: 'Douche en badkamer',
    effect: 'Kalkafzetting, meer zeep, huidirritatie',
    oplossing: 'Waterontharder, regelmatig ontkalken',
    href: '/kalk-in/douche',
    kosten: 'Extra schoonmaak: circa 20-50 uur/jaar',
  },
  {
    categorie: 'Drinkwater',
    effect: 'Kalkachtige smaak, kalk in waterkoker',
    oplossing: 'Osmosefilter aan keukenkraan',
    href: '/omgekeerde-osmose',
    kosten: 'Osmosefilter: circa 50-100 euro/jaar',
  },
];

export default function HardWaterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Leidingwater', url: 'https://waterfilterplatform.nl/leidingwater' },
          { name: 'Hard water', url: 'https://waterfilterplatform.nl/leidingwater/hard-water' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Hard leidingwater in Nederland: gebieden, gevolgen en oplossingen',
          description: 'Hard leidingwater bevat veel kalk. Welke regio\'s in NL hebben het hardste water? Gevolgen voor CV, wasmachine en huid, met concrete oplossingen.',
          datePublished: '2026-05-01',
          dateModified: '2026-05-01',
          url: 'https://waterfilterplatform.nl/leidingwater/hard-water',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/leidingwater" className="hover:text-[#005F8A]">Leidingwater</Link>
            <span className="mx-2">/</span>
            <span>Hard water</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Hard leidingwater in Nederland: gebieden, gevolgen en oplossingen
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Bijna de helft van Nederland heeft hard tot zeer hard leidingwater. Limburg en
            Noord-Brabant hebben de hoogste waterhardheid: 18-30 dH. Dit kost u jaarlijks
            honderden euros aan extra energie, wasmiddel en kalkschade. Lees welke regio hard
            water heeft en welke oplossing het beste past bij uw situatie.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#regio"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Waterhardheid per regio &rarr;
            </Link>
            <Link
              href="/waterhardheid"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Zoek uw gemeente
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <QuickAnswer answer="Hard leidingwater bevat veel calcium en magnesium (gemeten in graden dH). Zacht is minder dan 7 dH, matig 7-14 dH, hard 14-21 dH, zeer hard meer dan 21 dH. Hardst: Limburg (20-30 dH) en Noord-Brabant (18-25 dH). Zachts: Friesland en Groningen (4-8 dH). Hard water verhoogt gasverbruik cv (+15%), verkort levensduur wasmachine (-30%) en vereist meer wasmiddel (+25%)." />

        {/* Hardheidsdefinitie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Definitie waterhardheid: de dH-schaal uitgelegd
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Waterhardheid wordt veroorzaakt door opgeloste calcium- (Ca2+) en magnesiumionen (Mg2+)
            die afkomstig zijn van kalkrijke bodemlagen waar het grondwater doorheen stroomt.
            Hoe kalkrijker de bodem, hoe harder het water.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[400px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Categorie</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Hardheid (dH)</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Kenmerken</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: 'Zacht', dH: 'minder dan 7', ken: 'Weinig kalk, nauwelijks aanslag, veel schuim' },
                  { cat: 'Matig hard', dH: '7-14', ken: 'Lichte kalkaanslag, normaal zeepverbruik' },
                  { cat: 'Hard', dH: '14-21', ken: 'Zichtbare aanslag, meer wasmiddel, cv-risico' },
                  { cat: 'Zeer hard', dH: 'meer dan 21', ken: 'Snelle kalkaanslag, hoge energiekosten, huidirritatie' },
                ].map(r => (
                  <tr key={r.cat} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-800 text-xs">{r.cat}</td>
                    <td className="py-2.5 px-3 text-center text-xs text-[#005F8A] font-semibold">{r.dH} dH</td>
                    <td className="py-2.5 px-3 text-xs text-gray-600">{r.ken}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Regio kaart */}
        <section id="regio">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waterhardheid per regio in Nederland
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De waterhardheid verschilt sterk per regio. In het zuiden en oosten is het water harder
            omdat het grondwater door kalkrijke bodemlagen stroomt. In het noorden en de Randstad
            is het water zachter, mede omdat hier meer oppervlaktewater wordt gebruikt.
          </p>
          <div className="space-y-2 mb-5">
            {regioHardheid.map(r => (
              <div key={r.regio} className={`border rounded-xl p-3 flex items-center justify-between gap-3 ${r.kleur}`}>
                <div>
                  <p className="font-semibold text-sm">{r.regio}</p>
                  <p className="text-xs opacity-75">{r.type}</p>
                </div>
                <span className="font-bold text-sm shrink-0">{r.hardheid}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Exacte hardheidswaarden per gemeente vindt u op onze{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] hover:underline">
              waterhardheid per gemeente pagina
            </Link>. Waarden zijn gemiddelden; lokale variatie is mogelijk.
          </p>
        </section>

        {/* Gevolgen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Gevolgen van hard water: economisch en esthetisch
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hard water heeft geen bewezen direct gezondheidsrisico. Calcium en magnesium zijn
            voedingsstoffen. De gevolgen zijn voornamelijk economisch en esthetisch:
          </p>
          <div className="space-y-3 mb-5">
            {gevolgenHardWater.map(g => (
              <Link
                key={g.categorie}
                href={g.href}
                className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] transition-all group"
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">{g.categorie}</p>
                  <span className="text-xs text-red-600 font-medium shrink-0">{g.kosten}</span>
                </div>
                <p className="text-xs text-gray-600 mb-1">{g.effect}</p>
                <p className="text-xs text-[#005F8A] font-medium">Oplossing: {g.oplossing} &rarr;</p>
              </Link>
            ))}
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <p className="font-semibold text-[#003F5C] mb-1 text-sm">Totale jaarkosten hard water</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Een gezin in een harde-waterzone (boven 18 dH) betaalt gemiddeld 350-600 euro per jaar
              extra door hoger energieverbruik, meer wasmiddel, snellere slijtage van apparaten en
              extra schoonmaakkosten. Dit zijn de directe besparing die een waterontharder oplevert.
            </p>
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* Gezondheid */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hard water en gezondheid: feiten en fabels
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hard water is veilig om te drinken. De WHO en het RIVM stellen dat er geen bewijs is
            voor gezondheidsschade door hard leidingwater bij de concentraties die in Nederland
            voorkomen. Kalk bestaat uit calcium en magnesium, beide essentieel voor botten,
            spieren en het zenuwstelsel.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Sommige studies suggereren zelfs een beschermend effect van calcium in drinkwater op
            cardiovasculaire gezondheid. Mensen met eczeem of droge huid kunnen echter meer last
            hebben van hard douchewater: kalkzeep (calciumstearaat) vormt in reactie met zeep een
            film die huidirritatie verergert.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Voor zuiver drinkwater zonder de smaak van kalk is een osmosefilter de beste keuze.
            Osmose verwijdert niet alleen kalk maar ook nitraten, PFAS, zware metalen en
            medicijnresten. Meer informatie op onze pagina over{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>.
          </p>
        </section>

        {/* Oplossingen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Oplossingen per situatie
          </h2>
          <div className="space-y-3">
            {[
              {
                situatie: 'CV-ketel beschermen',
                oplossing: 'Waterontharder op de hoofdleiding of een magnesiuminjectie voor de ketel',
                link: '/waterontkalker',
                linkTekst: 'Waterontkalker bekijken',
              },
              {
                situatie: 'Wasmachine beschermen',
                oplossing: 'Waterontharder, maandelijks ontkalken met citroenzuur (200 g, 60 graden C)',
                link: '/kalk-in/wasmachine',
                linkTekst: 'Wasmachine kalkschade',
              },
              {
                situatie: 'Schoon drinkwater',
                oplossing: 'Osmosefilter onder aanrecht: verwijdert kalk, nitraat, PFAS en meer',
                link: '/omgekeerde-osmose',
                linkTekst: 'Osmosefilter bekijken',
              },
              {
                situatie: 'Douche en huid',
                oplossing: 'Centrale waterontharder is de meest effectieve oplossing voor de douche',
                link: '/kalk-in/douche',
                linkTekst: 'Kalk in douche',
              },
            ].map(o => (
              <div key={o.situatie} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">{o.situatie}</p>
                <p className="text-xs text-gray-600 mb-2">{o.oplossing}</p>
                <Link href={o.link} className="text-xs text-[#005F8A] hover:underline font-medium">
                  {o.linkTekst} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Meer lezen */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterhardheid', label: 'Waterhardheid per gemeente' },
              { href: '/waterontkalker', label: 'Waterontkalker voor hard water' },
              { href: '/waterontharder', label: 'Waterontharder: alle opties' },
              { href: '/kalk-in', label: 'Kalk in leidingwater: overzicht' },
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
            Veelgestelde vragen over hard leidingwater
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
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in drinkwater</h3>
              <p className="text-sm text-gray-600">Calcium en magnesium: oorzaken van waterhardheid en effecten op gezondheid.</p>
            </Link>
            <Link href="/waterontharder/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Werking van een waterontharder</h3>
              <p className="text-sm text-gray-600">Hoe een waterontharder kalkaanslag en hard water aanpakt.</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling als filtertechniek</h3>
              <p className="text-sm text-gray-600">De techniek achter waterontharders en ionenuitwisseling uitgelegd.</p>
            </Link>
            <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp bij hard water</h3>
              <p className="text-sm text-gray-600">Vind de juiste oplossing voor hard water in uw situatie.</p>
            </Link>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in drinkwater</h3>
              <p className="text-sm text-gray-600">Calcium, magnesium en bicarbonaat als oorzaak van waterhardheid uitgelegd.</p>
            </Link>
            <Link href="/waterontharder/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Hoe werkt een waterontharder?</h3>
              <p className="text-sm text-gray-600">Technische werking van waterontharders en wanneer ze zinvol zijn.</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling</h3>
              <p className="text-sm text-gray-600">Hoe ionenwisseling kalk en hardheidszouten uit water verwijdert.</p>
            </Link>
            <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp hard water</h3>
              <p className="text-sm text-gray-600">Vind de beste oplossing voor hard water op basis van uw situatie.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

      </div>
    </>
  );
}
