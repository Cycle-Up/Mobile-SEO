import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kalkfilter water: welk waterfilter verwijdert kalk?',
  description:
    'Welk waterfilter haalt kalk uit leidingwater? Vergelijking van waterontharder, koolstoffilter, osmose en TAC-systemen voor kalkvast drinkwater.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kalk-in/filter' },
  openGraph: {
    title: 'Kalkfilter water: welk filter verwijdert kalk uit leidingwater?',
    description:
      'Vergelijking van alle filteropties tegen kalk: waterontharder, omgekeerde osmose, TAC-systemen en koolstoffilter. Inclusief aanbeveling per situatie.',
  },
};

const faqItems = [
  {
    question: 'Welk filter verwijdert kalk het beste uit leidingwater?',
    answer:
      'Voor drinkwater is omgekeerde osmose het effectiefste kalkfilter: het verwijdert 95-99% van alle mineralen inclusief calcium en magnesium. Voor het beschermen van leidingen en apparaten in de hele woning is een waterontharder (ionenwisseling) de beste keuze. Koolstoffilters verwijderen geen kalk.',
  },
  {
    question: 'Verwijdert een koolstoffilter kalk uit water?',
    answer:
      'Nee, een koolstof- of actief koolfilter verwijdert geen kalk. Koolstoffilters zijn effectief tegen chloor, organische stoffen en smaakverbeteringen, maar calcium en magnesium passeren het filter ongehinderd. Voor kalkverwijdering heeft u ionenwisseling of omgekeerde osmose nodig.',
  },
  {
    question: 'Wat is het verschil tussen tijdelijke en permanente hardheid?',
    answer:
      'Tijdelijke hardheid wordt veroorzaakt door calciumbicarbonat (Ca(HCO3)2) dat neerslaat bij verhitting als CaCO3. Dit is de meest voorkomende vorm in Nederland. Permanente hardheid bestaat uit calciumsulfaat (CaSO4) dat niet neerslaat bij verhitting maar wel aanwezig blijft. Een waterontharder verwijdert beide vormen.',
  },
  {
    question: 'Hoe werkt een TAC-kalkblokkeerder?',
    answer:
      'Een TAC-systeem (Template Assisted Crystallization) verandert de kristalvorm van calcium zodat het in suspensie blijft en niet neerslaat op oppervlakken. Het verwijdert kalk niet uit het water maar voorkomt kalkaanslag. Er is geen zout of elektriciteit nodig. De effectiviteit is wetenschappelijk aangetoond maar minder sterk dan een echte waterontharder.',
  },
  {
    question: 'Mag ik gedemineraliseerd osmosewater drinken?',
    answer:
      'Ja, omgekeerd osmosewater is veilig om te drinken. Het water is sterk gefilterd en bevat weinig mineralen. Voor dagelijks gebruik wordt aanbevolen een remineralisatiefilter toe te voegen die calcium en magnesium in gezonde hoeveelheden terugbrengt. Dit verbetert ook de smaak.',
  },
  {
    question: 'Is een waterontharder schadelijk omdat het natrium toevoegt?',
    answer:
      'Een waterontharder verhoogt het natriumgehalte van het water. Bij zachte regio\'s of mensen met een natriumbeperkt dieet (hartziekten, hoge bloeddruk) kan dit ongewenst zijn. De uitkomende hoeveelheid natrium is afhankelijk van de originele hardheid. Voor drinkwater wordt aangeraden een osmosefilter te combineren met de ontharder, zodat het drinkwater natriumarm is.',
  },
  {
    question: 'Helpt een magneetontharder tegen kalk?',
    answer:
      'Nee, er is geen wetenschappelijk bewijs dat magneetontharders kalkaanslag significant verminderen. Meerdere onafhankelijke studies hebben geen aantoonbaar effect gevonden. Investeer in een waterontharder of osmosefilter voor bewezen resultaten.',
  },
  {
    question: 'Welk filter is het beste voor kalk in de koffiezetapparaat?',
    answer:
      'Voor de koffiezetapparaat zijn twee opties effectief: (1) omgekeerde osmose water gebruiken als toevoer, waardoor kalk volledig wordt voorkomen; (2) een geintegreerd inline-filter met ionenwisselaar voor koffiezettingen. Veel professionele koffiemachines hebben al een ingebouwd filter. Regelmatig ontkalken met citroenzuur blijft sowieso noodzakelijk.',
  },
];

const filterVergelijkingData = [
  {
    naam: 'Waterontharder (ionenwisseling)',
    werking: 'Vervangt Ca/Mg-ionen door Na-ionen via hars',
    kalkVerwijdering: '100%',
    toepassingsgebied: 'Hele woning',
    nadelenKort: 'Natrium toegevoegd, zout nodig, installatie vereist',
    aanbevolen: true,
    href: '/waterontharder',
    kleur: 'border-green-200 bg-green-50',
    badge: 'Beste voor leidingen',
  },
  {
    naam: 'Omgekeerde osmose',
    werking: 'Semi-permeabel membraan filtert 95-99% mineralen eruit',
    kalkVerwijdering: '95-99%',
    toepassingsgebied: 'Drinkwater / kookwater',
    nadelenKort: 'Alleen voor verbruikswater, niet voor leidingen',
    aanbevolen: true,
    href: '/omgekeerde-osmose/voor-thuis',
    kleur: 'border-blue-200 bg-blue-50',
    badge: 'Beste voor drinkwater',
  },
  {
    naam: 'TAC / kalkblokkeerder',
    werking: 'Verandert kristalvorm van kalk, geen aanslag',
    kalkVerwijdering: 'Voorkomt aanslag (verwijdert niet)',
    toepassingsgebied: 'Leidingen en apparaten',
    nadelenKort: 'Minder effectief dan ontharder, kalk blijft in water',
    aanbevolen: false,
    href: '/waterontharder',
    kleur: 'border-amber-200 bg-amber-50',
    badge: 'Zoutloos alternatief',
  },
  {
    naam: 'Koolstoffilter (actief kool)',
    werking: 'Adsorbeert organische stoffen en chloor',
    kalkVerwijdering: '0% - werkt NIET tegen kalk',
    toepassingsgebied: 'Smaak en geur',
    nadelenKort: 'Haalt geen kalk weg',
    aanbevolen: false,
    href: '/omgekeerde-osmose',
    kleur: 'border-red-200 bg-red-50',
    badge: 'Niet voor kalk',
  },
  {
    naam: 'Magneetontharder',
    werking: 'Magnetisch veld zou kristallen veranderen',
    kalkVerwijdering: 'Niet bewezen effectief',
    toepassingsgebied: 'N.v.t.',
    nadelenKort: 'Pseudowetenschap, geen bewezen effect',
    aanbevolen: false,
    href: '/waterontharder',
    kleur: 'border-gray-200 bg-gray-50',
    badge: 'Niet aanbevolen',
  },
];

export default function KalkFilterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kalk in leidingwater', url: 'https://waterfilterplatform.nl/kalk-in' },
          { name: 'Kalkfilter water', url: 'https://waterfilterplatform.nl/kalk-in/filter' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Kalkfilter water: welk waterfilter verwijdert kalk?',
          description:
            'Welk waterfilter haalt kalk uit leidingwater? Vergelijking van waterontharder, koolstoffilter, osmose en TAC-systemen voor kalkvast drinkwater.',
          datePublished: '2026-05-01',
          url: 'https://waterfilterplatform.nl/kalk-in/filter',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kalk-in" className="hover:text-[#005F8A]">Kalk in leidingwater</Link>
            <span className="mx-2">/</span>
            <span>Kalkfilter water</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kalkfilter water: welk waterfilter verwijdert kalk?
          </h1>
          <p className="text-gray-600 text-lg">
            Niet elk waterfilter haalt kalk uit leidingwater. Een koolstoffilter helpt niet. Een magneetontharder is pseudowetenschap.
            Lees welke filtertechnologie daadwerkelijk calcium en magnesium verwijdert en wat het beste past bij uw situatie.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <QuickAnswer answer="Omgekeerde osmose is het beste kalkfilter voor drinkwater: 95-99% kalkverwijdering zonder natrium toe te voegen. Een waterontharder (ionenwisseling) is de beste keuze voor het beschermen van leidingen en apparaten in de hele woning. Koolstoffilters en magneetontharders verwijderen geen kalk." />

        {/* Hoe kalk in water werkt */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Tijdelijke versus permanente hardheid</h2>
          <p className="text-gray-600 text-sm mb-4">
            Voordat u een kalkfilter kiest, is het belangrijk te begrijpen welke vorm van hardheid uw water bevat. In Nederland is verreweg het grootste deel van de waterhardheid &quot;tijdelijke hardheid&quot;.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="border border-amber-200 bg-amber-50 rounded-xl p-4">
              <p className="font-semibold text-amber-800 text-sm mb-1">Tijdelijke hardheid</p>
              <p className="text-xs text-amber-700">
                Calciumbicarbonat Ca(HCO&sub3;)&sub2;. Slaat neer bij verhitting als CaCO&sub3; (ketelsteen). Meest voorkomend in Nederland. Zichtbaar in waterkoker, CV en douche.
              </p>
            </div>
            <div className="border border-orange-200 bg-orange-50 rounded-xl p-4">
              <p className="font-semibold text-orange-800 text-sm mb-1">Permanente hardheid</p>
              <p className="text-xs text-orange-700">
                Calciumsulfaat CaSO&sub4;. Slaat niet neer bij verhitting maar blijft aanwezig in water. Minder zichtbaar maar draagt bij aan totale hardheid. Alleen verwijderd door ontharder of osmose.
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Een goed kalkfilter pakt beide vormen aan. Onderstaande vergelijking laat zien welke technologieen dat doen.
          </p>
        </section>

        {/* Vergelijkingstabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vergelijking kalkfilters</h2>
          <p className="text-gray-600 text-sm mb-5">
            Vijf veelgebruikte systemen naast elkaar. Let goed op de kolom &quot;kalkverwijdering&quot; en het toepassingsgebied.
          </p>
          <div className="space-y-3">
            {filterVergelijkingData.map(f => (
              <div key={f.naam} className={`border rounded-xl p-4 ${f.kleur}`}>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <p className="font-semibold text-gray-800 text-sm">{f.naam}</p>
                  <span className={`text-xs rounded-full px-2 py-0.5 ${f.aanbevolen ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                    {f.badge}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-600">
                  <div>
                    <span className="font-medium text-gray-700">Werking: </span>
                    {f.werking}
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Kalkverwijdering: </span>
                    {f.kalkVerwijdering}
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Geschikt voor: </span>
                    {f.toepassingsgebied}
                  </div>
                </div>
                {f.nadelenKort && (
                  <p className="text-xs text-gray-500 mt-1.5 italic">{f.nadelenKort}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Waterontharder vs osmose */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waterontharder of osmose voor drinkwater?</h2>
          <p className="text-gray-600 text-sm mb-4">
            Voor drinkwater is omgekeerde osmose beter dan een waterontharder. Hier is waarom:
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-5 mb-4">
            <ul className="space-y-2 text-sm text-[#003F5C]">
              <li className="flex gap-2 items-start">
                <span className="text-[#005F8A] font-bold shrink-0">1.</span>
                <span>Een waterontharder voegt natrium toe aan het drinkwater. Bij hard water (18 dH) bevat onthard water tot 200 mg/L natrium extra. Voor mensen met hoge bloeddruk of hart- en vaatziekten is dit ongewenst.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[#005F8A] font-bold shrink-0">2.</span>
                <span>Osmose verwijdert niet alleen calcium maar ook nitraten, PFAS, zware metalen en microplastics. Een waterontharder doet dit niet.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[#005F8A] font-bold shrink-0">3.</span>
                <span>De ideale combinatie: een waterontharder voor leidingen en apparaten (beschermt CV en wasmachine) plus een osmosefilter onder het aanrecht voor schoon drinkwater zonder natrium.</span>
              </li>
            </ul>
          </div>
          <Link href="/omgekeerde-osmose/voor-thuis" className="inline-block text-sm text-[#005F8A] hover:underline">
            &rarr; Meer over omgekeerde osmose voor thuis
          </Link>
        </section>

        <CTABanner context="osmose" variant="compact" />

        {/* Aanbeveling per situatie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welk kalkfilter past bij uw situatie?</h2>
          <div className="space-y-3">
            {[
              {
                situatie: 'Hard water, wil alleen drinkwater verbeteren',
                aanbeveling: 'Omgekeerde osmose filter onder het aanrecht',
                href: '/omgekeerde-osmose/voor-thuis',
              },
              {
                situatie: 'Hard water, wil leidingen en apparaten beschermen',
                aanbeveling: 'Waterontharder centraal in de meterkast',
                href: '/waterontharder',
              },
              {
                situatie: 'Wil zoutloze oplossing voor aanslag voorkomen',
                aanbeveling: 'TAC-kalkblokkeerder als aanvulling',
                href: '/waterontharder',
              },
              {
                situatie: 'Wil smaak verbeteren, kalk is geen groot probleem',
                aanbeveling: 'Koolstoffilter of waterfilterkan',
                href: '/omgekeerde-osmose',
              },
            ].map(s => (
              <Link
                key={s.situatie}
                href={s.href}
                className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] transition-all group"
              >
                <p className="text-xs text-gray-500 mb-0.5">{s.situatie}</p>
                <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">&rarr; {s.aanbeveling}</p>
              </Link>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over kalkfilters</h2>
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
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Gerelateerde pagina&apos;s</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kalk-in', label: 'Kalk in leidingwater: overzicht' },
              { href: '/waterhardheid', label: 'Waterhardheid per gemeente' },
              { href: '/waterontharder', label: 'Waterontharder kopen' },
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
