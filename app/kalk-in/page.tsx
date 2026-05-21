import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kalk in leidingwater: oorzaken, gevolgen en oplossingen',
  description:
    'Kalk in leidingwater is calciumcarbonaat (CaCO3) door harde mineralen. Gevolgen voor apparaten, leidingen en huid. Alle oplossingen vergelijkend.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kalk-in' },
  openGraph: {
    title: 'Kalk in leidingwater — oorzaken, gevolgen en oplossingen',
    description:
      'Wat is kalk in water, wat doet het met je apparaten en huid, en hoe los je het structureel op? Alles over kalk in leidingwater op een rij.',
  },
};

const faqItems = [
  {
    question: 'Wat is kalk in leidingwater?',
    answer:
      'Kalk in leidingwater bestaat voornamelijk uit calciumcarbonaat (CaCO3) en magnesiumcarbonaat. Deze mineralen lossen op uit de bodem terwijl grondwater door kalkrijke lagen sijpelt. Bij verhitting of verdamping slaan ze neer als vaste witte korst: de bekende kalkaanslag.',
  },
  {
    question: 'Is kalk in water gevaarlijk voor de gezondheid?',
    answer:
      'Nee, kalk in leidingwater is niet schadelijk voor de gezondheid. Calcium en magnesium zijn zelfs essentiële mineralen. Wel kan kalk in combinatie met zeep "kalkzeep" vormen dat de huid kan irriteren. Voor apparaten en leidingen is kalk echter weldegelijk schadelijk.',
  },
  {
    question: 'Welke regio\'s in Nederland hebben het hardste water?',
    answer:
      'Het hardste water in Nederland komt voor in Limburg (tot 22 graden dH), Noord-Brabant en delen van Gelderland en Utrecht. Het zachtste water is te vinden in Zeeland, Friesland en Groningen, waar het water uit oppervlaktewater gewonnen wordt dat minder kalkrijke lagen passeert.',
  },
  {
    question: 'Wat doet kalk met mijn CV-ketel?',
    answer:
      'Kalkafzetting in de CV-ketel werkt als thermische isolator. Elke millimeter ketelsteen op de warmtewisselaar verhoogt het gasverbruik met circa 7%. Bij 3 mm aanslag betaal je al 20% meer stookkosten. Bovendien verkort ketelsteen de levensduur van de ketel aanzienlijk.',
  },
  {
    question: 'Hoe verwijder ik kalk van kranen en douchekoppen?',
    answer:
      'Citroenzuur (1:10 verdund in water) of schoonmaakazijn lost kalk effectief op. Laat de oplossing 15-30 minuten inwerken op de kalkafzetting en spoel daarna grondig na. Voor een verstopte douchekop werkt een plastic zak gevuld met citroenzuuroplossing die je over de kop bevestigt.',
  },
  {
    question: 'Wat is het verschil tussen een waterontharder en omgekeerde osmose?',
    answer:
      'Een waterontharder vervangt calcium- en magnesiumionen door natriumionen via ionenwisseling. Het water wordt zacht maar bevat meer natrium. Omgekeerde osmose verwijdert 95-99% van alle mineralen, inclusief calcium en magnesium, zonder natrium toe te voegen. Voor drinkwater is osmose de betere keuze; voor het beschermen van leidingen en apparaten is een waterontharder effectiever.',
  },
  {
    question: 'Hoe weet ik hoe hard het water in mijn gemeente is?',
    answer:
      'De waterhardheid per gemeente staat vermeld op de website van uw drinkwaterbedrijf en op onze pagina /waterhardheid. In Nederland wordt de hardheid uitgedrukt in graden Duitse hardheid (dH). Waarden boven 12 dH worden als hard beschouwd en vragen om actief kalkaanpak.',
  },
  {
    question: 'Helpt een magneetontharder tegen kalk?',
    answer:
      'Nee, magneetontharders zijn pseudowetenschap. Er is geen peer-reviewed bewijs dat magnetische velden de kristalstructuur van kalk zodanig veranderen dat aanslag significant vermindert. Investeer in een waterontharder of osmosefilter voor bewezen resultaten.',
  },
];

const gevolgenData = [
  {
    titel: 'Witte kalkvlekken',
    beschrijving:
      'Opgedroogde waterdruppels laten calciumcarbonaat achter op kranen, glazen, tegels en keukenapparatuur. Hoe harder het water, hoe sneller de vlekken zichtbaar zijn.',
    icon: '🪣',
  },
  {
    titel: 'Ketelsteen in boiler en CV',
    beschrijving:
      'Bij verhitting slaat opgelost calcium neer als harde korst op verwarmingselementen. Dit verlaagt het warmteoverdrachtsvermogen drastisch.',
    icon: '🔥',
  },
  {
    titel: 'Hogere energierekening',
    beschrijving:
      '1 mm ketelsteen verhoogt het energieverbruik van een verwarmingselement met 7-10%. Bij 5 mm aanslag loopt dat op tot 35% extra energieverbruik.',
    icon: '⚡',
  },
  {
    titel: 'Schade aan huishoudapparaten',
    beschrijving:
      'Wasmachines, vaatwassers en koffiemachines worden aangetast door kalk in verwarmingselementen en pompen. De levensduur wordt met jaren verkort.',
    icon: '🧺',
  },
  {
    titel: 'Huid- en haargevoeligheid',
    beschrijving:
      'Kalk vormt met zeep "kalkzeep" dat slecht afspoelt. Dit laat een film op huid en haar achter, veroorzaakt droogheid en vermindert de zeepwerking.',
    icon: '🚿',
  },
  {
    titel: 'Smaak van water',
    beschrijving:
      'Hard water heeft een kalkachtige of "zware" smaak. Koffie en thee proeven anders in hard-watergebieden doordat mineralen de extractie beinvloeden.',
    icon: '💧',
  },
];

const oplossingenData = [
  {
    titel: 'Waterontharder (ionenwisseling)',
    omschrijving:
      'Vervangt calcium en magnesium door natrium. Beschermt het hele huis inclusief leidingen en CV. Vereist zoutbakken en jaarlijks onderhoud.',
    geschikt: 'Hele woning beschermen',
    href: '/waterontharder',
  },
  {
    titel: 'Omgekeerde osmose filter',
    omschrijving:
      'Verwijdert 95-99% van alle mineralen uit drinkwater en kookwater. Geen natrium toegevoegd. Ideaal onder het aanrecht.',
    geschikt: 'Drinkwater en kookwater',
    href: '/omgekeerde-osmose/voor-thuis',
  },
  {
    titel: 'TAC / zoutloze kalkblokkeerder',
    omschrijving:
      'Verandert de kristalvorm van kalk zodat het minder neerslaat. Verwijdert geen mineralen maar voorkomt aanslag. Geen zout nodig.',
    geschikt: 'Preventie zonder zout',
    href: '/waterontharder',
  },
  {
    titel: 'Citroenzuur reinigen',
    omschrijving:
      'Goedkope symptomatische aanpak. Effectief voor waterkoker, koffiemachine, kranen en douchekop. Kalk komt echter terug.',
    geschikt: 'Periodiek onderhoud',
    href: '/kalk-in/filter',
  },
];

export default function KalkInPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kalk in leidingwater', url: 'https://waterfilterplatform.nl/kalk-in' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Kalk in leidingwater: oorzaken, gevolgen en oplossingen',
          description:
            'Kalk in leidingwater is calciumcarbonaat (CaCO3) door harde mineralen. Gevolgen voor apparaten, leidingen en huid. Alle oplossingen vergelijkend.',
          datePublished: '2026-05-01',
          url: 'https://waterfilterplatform.nl/kalk-in',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Kalk in leidingwater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kalk in leidingwater: oorzaken, gevolgen en oplossingen
          </h1>
          <p className="text-gray-600 text-lg">
            Kalk in leidingwater is een dagelijks probleem voor miljoenen Nederlanders. Witte vlekken op kranen,
            kalkaanslag in de waterkoker, een verstopte douchekop en een CV-ketel die harder werkt dan nodig.
            Op deze pagina leggen we uit wat kalk precies is, wat het kost en hoe je het structureel oplost.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <QuickAnswer answer="Kalk in leidingwater is calciumcarbonaat (CaCO3) dat neerslaat bij verhitting of verdamping. Hard water boven 12 dH veroorzaakt zichtbare aanslag op apparaten, hogere energiekosten en verkort de levensduur van CV-ketel en wasmachine. Een omgekeerde osmose filter verwijdert kalk uit drinkwater; een waterontharder beschermt de hele huisinstallatie." />

        {/* Wat is kalk in water */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is kalk in leidingwater?</h2>
          <p className="text-gray-600 text-sm mb-4">
            Leidingwater bevat opgeloste mineralen, voornamelijk calcium (Ca&sup2;&#x207A;) en magnesium (Mg&sup2;&#x207A;). Deze mineralen komen van nature voor in de bodem en worden door grondwater meegenomen naar het waterwingebied. Hoe meer kalkrijke lagen het water passeert, hoe hoger de concentratie.
          </p>
          <p className="text-gray-600 text-sm mb-4">
            Bij verhitting of verdamping verandert opgelost calciumbicarbonat (Ca(HCO&sub3;)&sub2;) in calciumcarbonaat (CaCO&sub3;) dat niet langer oplosbaar is. Dit is het bekende witte poeder dat je ziet op kranen, in de waterkoker en als ring in pannen: ketelsteen of kalkaanslag.
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-4 text-sm text-[#003F5C]">
            <p className="font-semibold mb-1">De scheikundige reactie simpel uitgelegd:</p>
            <p>Ca(HCO&sub3;)&sub2; &rarr; CaCO&sub3; (neerslag) + H&sub2;O + CO&sub2;</p>
            <p className="mt-2 text-gray-600 text-xs">
              Warmte (waterkoker, CV, douche) versnelt deze reactie enorm. Dat is waarom juist verwarmingselementen het hardst aangetast worden.
            </p>
          </div>
        </section>

        {/* Waterhardheid kaart NL */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waterhardheid in Nederland per regio</h2>
          <p className="text-gray-600 text-sm mb-4">
            De waterhardheid verschilt sterk per provincie en zelfs per gemeente. Dit komt door de herkomst van het drinkwater: grondwater (in het zuiden en oosten) is harder dan oppervlaktewater (in het westen en noorden).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {[
              { regio: 'Limburg', hardheid: '16-22 dH', klasse: 'Zeer hard', kleur: 'bg-red-50 border-red-200 text-red-800' },
              { regio: 'Noord-Brabant', hardheid: '14-20 dH', klasse: 'Hard tot zeer hard', kleur: 'bg-orange-50 border-orange-200 text-orange-800' },
              { regio: 'Gelderland / Utrecht', hardheid: '12-18 dH', klasse: 'Hard', kleur: 'bg-orange-50 border-orange-200 text-orange-800' },
              { regio: 'Zuid-Holland / Noord-Holland', hardheid: '8-14 dH', klasse: 'Matig hard', kleur: 'bg-amber-50 border-amber-200 text-amber-800' },
              { regio: 'Friesland / Groningen', hardheid: '4-8 dH', klasse: 'Zacht', kleur: 'bg-lime-50 border-lime-200 text-lime-800' },
              { regio: 'Zeeland', hardheid: '3-6 dH', klasse: 'Zacht', kleur: 'bg-green-50 border-green-200 text-green-800' },
            ].map(r => (
              <div key={r.regio} className={`border rounded-xl p-3 ${r.kleur}`}>
                <p className="font-semibold text-sm">{r.regio}</p>
                <p className="text-xs">{r.hardheid} &mdash; {r.klasse}</p>
              </div>
            ))}
          </div>
          <Link
            href="/waterhardheid"
            className="inline-block text-sm text-[#005F8A] hover:underline"
          >
            &rarr; Zoek de waterhardheid van jouw gemeente op
          </Link>
        </section>

        {/* 6 gevolgen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">6 gevolgen van kalk in leidingwater</h2>
          <p className="text-gray-600 text-sm mb-5">
            Kalk is meer dan een esthetisch probleem. De gevolgen zijn breed en lopen op tot honderden euros per jaar aan extra kosten voor het gemiddelde huishouden.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gevolgenData.map(g => (
              <div key={g.titel} className="border border-gray-100 rounded-xl p-4 flex gap-3">
                <span className="text-xl shrink-0">{g.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{g.titel}</p>
                  <p className="text-xs text-gray-600">{g.beschrijving}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" variant="compact" />

        {/* Oplossingen overzicht */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Oplossingen voor kalk in leidingwater</h2>
          <p className="text-gray-600 text-sm mb-5">
            Er zijn meerdere manieren om kalk in leidingwater aan te pakken. De beste keuze hangt af van of je drinkwater wilt zuiveren, apparaten wilt beschermen of het hele huis wilt behandelen.
          </p>
          <div className="space-y-3">
            {oplossingenData.map((opl, i) => (
              <Link
                key={opl.titel}
                href={opl.href}
                className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] transition-all group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-gray-800 text-sm group-hover:text-[#005F8A]">
                      {i + 1}. {opl.titel}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">{opl.omschrijving}</p>
                  </div>
                  <span className="shrink-0 text-xs bg-[#E0F2FE] text-[#005F8A] rounded-full px-2 py-0.5 whitespace-nowrap">
                    {opl.geschikt}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Sub-pagina links */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kalk per situatie</h2>
          <p className="text-gray-600 text-sm mb-5">
            Kalk pakt elk apparaat en elke ruimte anders aan. Lees het specifieke artikel voor uw situatie:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kalk-in/filter', label: 'Kalkfilter water', desc: 'Welk filter verwijdert kalk? Vergelijking van alle filtertypen' },
              { href: '/kalk-in/cv-ketel', label: 'Kalk in CV-ketel', desc: 'Gevolgen voor gasverbruik en levensduur, hoe ontkalken' },
              { href: '/kalk-in/douche', label: 'Kalk in de douche', desc: 'Witte aanslag op douchedeur en tegels verwijderen' },
              { href: '/kalk-in/wasmachine', label: 'Kalk in wasmachine', desc: 'Schade aan verwarmingselement en hoe voorkomen' },
              { href: '/waterontharder', label: 'Waterontharder', desc: 'Centrale ontharder voor de hele huisinstallatie' },
              { href: '/omgekeerde-osmose/voor-thuis', label: 'Osmose voor thuis', desc: 'Puur drinkwater zonder kalk, chloor of nitraten' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-3 hover:border-[#005F8A] transition-all"
              >
                <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">{l.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/waterhardheid" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Waterhardheid</p>
              <p className="text-sm text-gray-600">Hardheid per gemeente in graden Duits en wat dat betekent voor uw huishouden.</p>
            </Link>
            <Link href="/waterontharder" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Waterontharder</p>
              <p className="text-sm text-gray-600">Centrale ontharders voor de hele huisinstallatie: werking, kosten en merken.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in drinkwater</p>
              <p className="text-sm text-gray-600">Calcium en magnesium: nuttig voor gezondheid maar schadelijk voor apparaten.</p>
            </Link>
            <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Keuzehulp hard water</p>
              <p className="text-sm text-gray-600">Welke oplossing past het beste bij uw hardwaterprobleem en budget?</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over kalk in leidingwater</h2>
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

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterhardheid', label: 'Waterhardheid per gemeente' },
              { href: '/waterontharder', label: 'Waterontharder kopen' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose uitleg' },
              { href: '/omgekeerde-osmose/voor-thuis', label: 'Osmose filter voor thuis' },
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
      </div>
    </>
  );
}
