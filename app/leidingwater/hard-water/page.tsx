import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Hard leidingwater: gevolgen voor uw huis en gezondheid',
  description:
    'Hard leidingwater bevat veel kalk (calcium en magnesium). Gevolgen voor uw cv-ketel, wasmachine, huid en haar. Oplossingen per situatie.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/hard-water' },
  openGraph: {
    title: 'Hard leidingwater: gevolgen voor uw huis en gezondheid',
    description:
      'Hard water kost u geld: cv-ketel 15% meer energie, wasmachine 30% kortere levensduur. Ontdek uw waterhardheid en de juiste oplossing per situatie.',
    url: 'https://waterfilterplatform.nl/leidingwater/hard-water',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is hard leidingwater?',
    answer:
      'Hard leidingwater bevat een hoge concentratie opgeloste calcium- en magnesiumzouten (samen "totale hardheid" of kalk). De hardheid wordt uitgedrukt in graden Duits (dH) of millimol per liter (mmol/L). Classificatie: zacht water is &lt;7 dH, matig hard is 7-14 dH, hard is &gt;14 dH. In grote delen van Nederland (Limburg, Noord-Brabant, Zeeland) is het leidingwater hard tot zeer hard.',
  },
  {
    question: 'Welke regio\'s in Nederland hebben het hardste water?',
    answer:
      'Het hardste leidingwater in Nederland vind je in Limburg (tot 24 dH in sommige gebieden), Noord-Brabant, Zeeland en delen van Gelderland. Het zachtste water is in Friesland, Groningen en Noord-Holland (4-8 dH). De hardheid verschilt sterk per waterwingebied: grondwater is doorgaans harder dan oppervlaktewater omdat het door kalkgesteente stroomt.',
  },
  {
    question: 'Hoe beinvloedt hard water mijn cv-ketel?',
    answer:
      'Hard water vormt kalkaanslag in de warmtewisselaar van uw cv-ketel. Kalk is een slechte warmtegeleider: een laag van 1 mm kalk verhoogt het energieverbruik met 7-10%. Bij 3 mm kalk stijgt het verbruik met 20-25%. Bovendien slijt de warmtewisselaar sneller door de constante thermische belasting door kalk, wat de levensduur van de ketel met 30-40% kan verkorten. Jaarlijks ontkalken of een waterontharder zijn de oplossingen.',
  },
  {
    question: 'Is hard water slecht voor de gezondheid?',
    answer:
      'Hard water is niet bewezen schadelijk voor de gezondheid. Calcium en magnesium zijn essentieel voor het lichaam en het drinken van hard water draagt bij aan de dagelijkse inname. De Wereldgezondheidsorganisatie (WHO) stelt geen bovengrens voor calciumhardheid in drinkwater voor gezondheidsdoeleinden. Wel kan hard water bij mensen met een gevoelige huid leiden tot droogheid, jeuk en eczeem, omdat kalk de huidbarriere beinvloedt.',
  },
  {
    question: 'Wat doet hard water met mijn haar en huid?',
    answer:
      'Calcium in hard water bindt aan zeep- en shampooresiduen en vormt een laag op haar en huid. Dit kan leiden tot droog, pluizig haar dat moeilijk te stylen is, een dof uiterlijk van het haar, en droge, soms jeukende huid bij gevoelige mensen. Wetenschappelijk bewijs hiervoor is aanwezig maar niet eenduidig. Een waterontharder of een duschfilter met koolstof kan de symptomen significant verminderen.',
  },
  {
    question: 'Hoeveel meer wasmiddel gebruik je bij hard water?',
    answer:
      'Hard water inactiveert een deel van de tensiden (werkzame stoffen) in wasmiddel door neerslag met calcium. Wasmiddelfabrikanten adviseren 25-50% meer wasmiddel bij hard water ten opzichte van zacht water. Dit verklaart waarom wasmiddelpakketten doseeradviezen geven op basis van waterhardheid. Een waterontharder of anti-kalk wasmiddeladditief reduceert het extra verbruik.',
  },
  {
    question: 'Wat is de beste oplossing voor hard water in huis?',
    answer:
      'De beste oplossing hangt af van het doel. Voor de cv-ketel en wasmachine: een ionenwisselende waterontharder op het huisaansluitpunt (geeft zacht water door het hele huis). Voor drinkwater: osmosefilter (verwijdert kalk en overige verontreinigingen). Voor de douche: douchfilter met koolstof vermindert chloor maar verwijdert kalk niet volledig. Een combinatie van waterontharder voor de installatie en osmosefilter voor drinkwater is de meest complete aanpak.',
  },
  {
    question: 'Hoe meet ik de hardheid van mijn leidingwater?',
    answer:
      'U kunt de waterhardheid op meerdere manieren meten: via de website van uw watermaatschappij (geeft de hardheid per postcodegebied), met een TDS-meter (geeft totale opgeloste stoffen, correlatie met hardheid), met een titratietest-kit (nauwkeurige chemische meting in mmol/L of dH), of via een professionele watertest bij een gecertificeerd laboratorium. Op waterfilterplatform.nl vindt u ook de waterhardheid per gemeente.',
  },
];

export default function HardWaterPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Leidingwater', url: 'https://waterfilterplatform.nl/leidingwater' },
          { name: 'Hard water', url: 'https://waterfilterplatform.nl/leidingwater/hard-water' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Hard leidingwater: gevolgen voor uw huis en gezondheid',
          description:
            'Hard water en de gevolgen voor cv-ketel, wasmachine, huid en gezondheid. Oplossingen per situatie in Nederland.',
          datePublished: '2026-05-01',
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
            Hard leidingwater: gevolgen voor uw huis en gezondheid
          </h1>

          {/* QuickAnswer */}
          <div className="bg-white border border-[#005F8A]/30 rounded-xl p-4 mb-6">
            <p className="text-xs font-semibold text-[#005F8A] uppercase tracking-wide mb-1">Snel antwoord</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Hard water (&gt;14 dH) bevat hoge concentraties calcium en magnesium. Gevolgen: cv-ketel verbruikt 15% meer energie, apparaten gaan 30% korter mee, u gebruikt 25% meer wasmiddel. Hard water is niet schadelijk voor de gezondheid maar kan droge huid geven bij gevoelige mensen.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#gevolgen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Gevolgen hard water &rarr;
            </Link>
            <Link
              href="#oplossingen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Oplossingen per situatie
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#definitie" className="hover:underline">Definitie hard water</a></li>
            <li><a href="#nederland-kaart" className="hover:underline">Hardheid per regio in NL</a></li>
            <li><a href="#gevolgen" className="hover:underline">Economische gevolgen</a></li>
            <li><a href="#gezondheid" className="hover:underline">Gezondheidsaspecten</a></li>
            <li><a href="#esthetisch" className="hover:underline">Esthetische gevolgen</a></li>
            <li><a href="#oplossingen" className="hover:underline">Oplossingen per probleem</a></li>
            <li><a href="#meten" className="hover:underline">Hardheid meten</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Definitie */}
        <section id="definitie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat is hard water? Definitie en eenheden
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hard water is leidingwater met een hoge concentratie opgeloste calcium- en magnesiumzouten. Deze mineralen komen in het water door het doorsijpelen van regenwater door kalkgesteente in de bodem. Hoe meer kalk in de bodem, hoe harder het water.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[440px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Classificatie</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Graden Duits (dH)</th>
                  <th className="py-2.5 px-3 font-semibold text-center">mmol/L</th>
                  <th className="py-2.5 px-3 font-semibold text-left hidden sm:table-cell">Kenmerk</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { klasse: 'Zeer zacht', dh: '&lt;4 dH', mmol: '&lt;0,7', kenmerk: 'Nauwelijks kalk; zeldzaam in NL' },
                  { klasse: 'Zacht', dh: '4-7 dH', mmol: '0,7-1,3', kenmerk: 'Friesland, Groningen, Noord-Holland (kust)' },
                  { klasse: 'Matig hard', dh: '7-14 dH', mmol: '1,3-2,5', kenmerk: 'Randstad, grote steden; lichte kalkaanslag mogelijk' },
                  { klasse: 'Hard', dh: '14-21 dH', mmol: '2,5-3,8', kenmerk: 'Noord-Brabant, Zeeland, Gelderland' },
                  { klasse: 'Zeer hard', dh: '&gt;21 dH', mmol: '&gt;3,8', kenmerk: 'Delen Limburg; ernstige kalkaanslag in apparaten' },
                ].map((r, i) => (
                  <tr key={r.klasse} className={`border-b border-gray-100 ${i === 3 || i === 4 ? 'bg-amber-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="py-2.5 px-3 font-medium text-gray-900 text-xs">{r.klasse}</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-[#005F8A] text-xs">{r.dh}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600 text-xs">{r.mmol}</td>
                    <td className="py-2.5 px-3 text-gray-500 text-xs hidden sm:table-cell">{r.kenmerk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            In Nederland varieert de waterhardheid sterk per regio en per waterwingebied. Grondwater is doorgaans harder dan oppervlaktewater. Uw watermaatschappij publiceert de exacte hardheid per postcodegebied op haar website.
          </p>
        </section>

        {/* Nederland kaart */}
        <section id="nederland-kaart">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waterhardheid per regio in Nederland
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De waterhardheid in Nederland verschilt aanzienlijk per provincie en waterwingebied. De bodemgesteldheid is de voornaamste oorzaak: in het zuiden en oosten van het land stroomt water door kalk- en krijtgesteente, wat resulteert in hard water.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                regio: 'Limburg',
                hardheid: 'Hard - Zeer hard',
                dh: '14-24 dH',
                kleur: 'bg-red-50 border-red-200',
                beschrijving: 'Het hardste water van Nederland door krijtbodem (Zuid-Limburg). Kalkaanslag in apparaten is hier een serieus probleem.',
              },
              {
                regio: 'Noord-Brabant',
                hardheid: 'Hard',
                dh: '12-20 dH',
                kleur: 'bg-orange-50 border-orange-200',
                beschrijving: 'Overwegend hard water door grondwaterwinning in zandige kalkrijke bodem. Waterontharder veelgevraagd.',
              },
              {
                regio: 'Zeeland / Gelderland',
                hardheid: 'Matig hard - Hard',
                dh: '10-18 dH',
                kleur: 'bg-amber-50 border-amber-200',
                beschrijving: 'Regionale variaties; rivierwater (Rijn, Maas) is harder dan kustwater.',
              },
              {
                regio: 'Randstad (Amsterdam, Rotterdam, Utrecht)',
                hardheid: 'Zacht - Matig hard',
                dh: '6-12 dH',
                kleur: 'bg-yellow-50 border-yellow-200',
                beschrijving: 'Deels oppervlaktewater van grote rivieren, deels grondwater. Amsterdam heeft relatief zacht water.',
              },
              {
                regio: 'Friesland / Groningen',
                hardheid: 'Zacht',
                dh: '4-8 dH',
                kleur: 'bg-green-50 border-green-200',
                beschrijving: 'Het zachtste leidingwater van Nederland door klei- en veenbodem. Nauwelijks kalkaanslag.',
              },
              {
                regio: 'Noord-Holland (kust)',
                hardheid: 'Zacht - Matig zacht',
                dh: '5-9 dH',
                kleur: 'bg-green-50 border-green-200',
                beschrijving: 'Duinwaterinfiltratie geeft relatief zacht water. Haarlem en Alkmaar: matig zacht.',
              },
            ].map(r => (
              <div key={r.regio} className={`border rounded-xl p-4 ${r.kleur}`}>
                <div className="flex justify-between items-start gap-2 mb-1">
                  <p className="font-semibold text-gray-900 text-sm">{r.regio}</p>
                  <span className="text-xs font-bold text-[#005F8A] shrink-0">{r.dh}</span>
                </div>
                <p className="text-xs text-gray-500 mb-1 font-medium">{r.hardheid}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{r.beschrijving}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4 text-sm text-[#003F5C]">
            Controleer de exacte waterhardheid voor uw adres via{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">onze waterhardheid-kaart per gemeente</Link>.
          </div>
        </section>

        {/* Economische gevolgen */}
        <section id="gevolgen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Economische gevolgen van hard water
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hard water kost u elk jaar geld. Kalkaanslag in verwarmingssystemen, apparaten en leidingen leidt tot hogere energiekosten, meer verbruik van wasmiddelen en zeep, en kortere levensduur van dure apparaten.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              {
                gevolg: 'Energiekosten CV-ketel',
                impact: '+15%',
                details: '1 mm kalk op warmtewisselaar = 7-10% meer energieverbruik. Bij 3 mm kalk loopt dit op tot 20-25%.',
              },
              {
                gevolg: 'Levensduur apparaten',
                impact: '-30%',
                details: 'Wasmachine, vaatwasser, koffiezetapparaat en boiler gaan aanzienlijk korter mee door kalkafzetting in verwarmingselementen.',
              },
              {
                gevolg: 'Wasmiddelverbruik',
                impact: '+25%',
                details: 'Calcium inactiveert tensiden in wasmiddel. Fabrikanten adviseren 25-50% hogere dosering bij hard water.',
              },
            ].map(g => (
              <div key={g.gevolg} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                <p className="font-semibold text-gray-900 mb-1 text-sm">{g.gevolg}</p>
                <p className="text-3xl font-bold text-red-600 mb-2">{g.impact}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{g.details}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
            <strong>Kostenindicatie:</strong> Een huishouden in een harde waterregio geeft gemiddeld 200-400 euro per jaar meer uit aan energiekosten (cv), wasmiddelen en vervangingskosten van apparaten ten opzichte van een vergelijkbaar huishouden met zacht water.
          </div>
        </section>

        {/* Gezondheid */}
        <section id="gezondheid">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Gezondheidsaspecten van hard water
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hard water is niet bewezen schadelijk voor de gezondheid. De WHO heeft geen maximumgrens gesteld voor calciumhardheid in drinkwater voor gezondheidsdoeleinden. Calcium en magnesium zijn essentieel voor het lichaam en de bijdrage via drinkwater is voor sommige mensen zelfs positief.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <h3 className="font-semibold text-green-800 mb-2 text-sm">Positieve aspecten hard water</h3>
              <ul className="space-y-1.5 text-sm text-green-700">
                <li className="flex items-start gap-2"><span className="shrink-0">&#10003;</span> Calcium draagt bij aan botgezondheid</li>
                <li className="flex items-start gap-2"><span className="shrink-0">&#10003;</span> Magnesium ondersteunt hartfunctie</li>
                <li className="flex items-start gap-2"><span className="shrink-0">&#10003;</span> Geen bewezen gezondheidsschade</li>
                <li className="flex items-start gap-2"><span className="shrink-0">&#10003;</span> WHO geeft geen maximumgrens voor hardheid</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <h3 className="font-semibold text-amber-800 mb-2 text-sm">Mogelijke negatieve effecten</h3>
              <ul className="space-y-1.5 text-sm text-amber-700">
                <li className="flex items-start gap-2"><span className="shrink-0">&mdash;</span> Droge huid bij gevoelige personen</li>
                <li className="flex items-start gap-2"><span className="shrink-0">&mdash;</span> Eczeem-verergering (beperkt bewijs)</li>
                <li className="flex items-start gap-2"><span className="shrink-0">&mdash;</span> Dof, pluizig haar</li>
                <li className="flex items-start gap-2"><span className="shrink-0">&mdash;</span> Calciumoxalaat nierstenen (bij hoge inname + gevoeligheid)</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Voor mensen met atopisch eczeem of een gevoelige huid toont onderzoek een verband met harder water, hoewel de causaliteit niet volledig bewezen is. Een waterontharder of douche-koolstoffilter kan voor deze groep relevant zijn.
          </p>
        </section>

        {/* Esthetisch */}
        <section id="esthetisch">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Esthetische gevolgen: kalkafzetting en vlekken
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De esthetische gevolgen van hard water zijn direct zichtbaar in huis. Witte aanslag op kranen, glazen vlekken op servies en kalkrandjes in de waterkoker zijn de meest herkenbare tekens van hard water.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { plek: 'Kranen en douche', gevolg: 'Witte kalkafzetting die snel terugkeert na schoonmaken. Chromeren oppervlakken verliezen glans. Douchekop raakt verstopt.' },
              { plek: 'Glazen en servies', gevolg: 'Wittige vlekken op glazen na de vaatwasser. Troebel uiterlijk van glazen dat niet verdwijnt bij schoonmaken.' },
              { plek: 'Waterkoker en koffiemachine', gevolg: 'Witte kalk-vlokken in het water en aanslag in de bodem. Vereist maandelijks ontkalken om goed te blijven functioneren.' },
              { plek: 'Douche en bad', gevolg: 'Kalkrand op het douchegordijn, badkuip en douchecabine. Lastig te verwijderen zonder zuur ontkalkingsmiddel.' },
              { plek: 'Haar en huid', gevolg: 'Kalk beindt aan haarresiuen en geeft dof, pluizig haar. Zeepschuim wordt minder goed afgespoeld bij hard water.' },
            ].map(p => (
              <div key={p.plek} className="border border-gray-100 rounded-xl p-4 bg-white">
                <p className="font-semibold text-gray-900 mb-1 text-sm">{p.plek}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{p.gevolg}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Oplossingen */}
        <section id="oplossingen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Oplossingen per probleem: welke aanpak werkt?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Er is geen universele oplossing voor alle hard-water-problemen. De juiste aanpak hangt af van welk probleem u het meest wilt oplossen.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                probleem: 'CV-ketel en verwarmingssysteem beschermen',
                oplossing: 'Waterontharder op het huisaansluitpunt (centraal zacht water voor het hele huis). Alternatief: doseerpomp met onthardingszout direct op de verwarmingsinstallatie.',
                link: '/waterontharder',
                linkLabel: 'Waterontharder vergelijken',
              },
              {
                probleem: 'Wasmachine en vaatwasser beschermen',
                oplossing: 'Waterontharder (meest effectief) of anti-kalk wasmiddeladditief. Sommige wasmachines hebben een ingebouwde ontharder; controleer uw handleiding.',
                link: '/waterontharder',
                linkLabel: 'Waterontharder kiezen',
              },
              {
                probleem: 'Drinkwater zonder kalk (smaak en gezondheid)',
                oplossing: 'Osmosefilter onder het aanrecht. Verwijdert 95-99% van calcium en magnesium. Geeft kraanwater met TDS 5-15 mg/L. Kan remineralisatiecartridge toevoegen voor ideale mineralenbalans.',
                link: '/omgekeerde-osmose',
                linkLabel: 'Osmosefilter bekijken',
              },
              {
                probleem: 'Droge huid en haar in de douche',
                oplossing: 'Douchefilter met koolstof en KDF-media vermindert chloor en deels kalk. Of een waterontharder op het hele huis voor volledige calciumreductie in de douche.',
                link: '/waterfilter/douche',
                linkLabel: 'Douchefilter bekijken',
              },
              {
                probleem: 'Kalkvlekken op kranen en servies',
                oplossing: 'Waterontharder op het huisaansluitpunt is de structurele oplossing. Voor symptoombestrijding: regelmatig ontkalken met citroenzuur of azijn, en wateronthardende vaatwassertabletten.',
                link: '/kalk-in',
                linkLabel: 'Kalkaanslag oplossen',
              },
            ].map(o => (
              <div key={o.probleem} className="border border-gray-100 rounded-xl p-4 bg-white">
                <p className="font-semibold text-gray-900 mb-2 text-sm">Probleem: {o.probleem}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">{o.oplossing}</p>
                <Link href={o.link} className="text-xs text-[#005F8A] underline hover:no-underline font-medium">&rarr; {o.linkLabel}</Link>
              </div>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* Meten */}
        <section id="meten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hardheid meten: hoe weet u hoe hard uw water is?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            U heeft meerdere opties om de hardheid van uw leidingwater te bepalen, varierend van gratis tot nauwkeurig.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                methode: 'Website watermaatschappij (gratis)',
                nauwkeurigheid: 'Hoog',
                beschrijving: 'Vul uw postcode in op de website van uw waterbedrijf (Vitens, Evides, PWN etc.). Geeft directe hardheid in dH of mmol/L voor uw locatie.',
              },
              {
                methode: 'TDS-meter (5-15 euro)',
                nauwkeurigheid: 'Gemiddeld',
                beschrijving: 'Meet totale opgeloste stoffen in ppm of mg/L. Correlatie met hardheid maar niet identiek. Snel en handig voor een indicatie.',
              },
              {
                methode: 'Teststrip (2-5 euro)',
                nauwkeurigheid: 'Laag-gemiddeld',
                beschrijving: 'Kleurtest die hardheid globaal aangeeft in zones (zacht/matig/hard). Voldoende voor een eerste indruk, niet voor nauwkeurige metingen.',
              },
              {
                methode: 'Titratietest-kit (10-20 euro)',
                nauwkeurigheid: 'Hoog',
                beschrijving: 'Chemische test waarbij u druppelsgewijs reagentia toevoegt tot kleurverandering. Geeft exacte hardheid in dH of mmol/L.',
              },
            ].map(m => (
              <div key={m.methode} className="border border-gray-100 rounded-xl p-4 bg-white">
                <div className="flex justify-between items-start gap-2 mb-1">
                  <p className="font-semibold text-gray-900 text-sm">{m.methode}</p>
                  <span className="text-xs bg-[#E0F2FE] text-[#005F8A] font-medium px-2 py-0.5 rounded-full shrink-0">{m.nauwkeurigheid}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{m.beschrijving}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4 text-sm">
            <p className="text-[#003F5C]">
              Bekijk onze{' '}
              <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline font-medium">waterhardheid-kaart per gemeente</Link>{' '}
              voor de waterhardheid in uw regio.
            </p>
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterhardheid', label: 'Waterhardheid in uw gemeente controleren' },
              { href: '/waterontharder', label: 'Waterontharder: hoe werkt het en wat kost het?' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose: kalk uit drinkwater halen' },
              { href: '/kalk-in', label: 'Kalkaanslag: oorzaken en oplossingen' },
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

      </div>
    </>
  );
}
