import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Soorten waterontkalkers: welk type past bij uw situatie?',
  description: 'Overzicht van alle soorten waterontkalkers: single-tank, twin-tank, zoutloos TAC, magneet en elektrisch. Welk type is het meest effectief?',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontkalker/soorten' },
  openGraph: {
    title: 'Soorten waterontkalkers: welk type past bij uw situatie?',
    description: 'Overzicht van alle soorten waterontkalkers: single-tank, twin-tank, zoutloos TAC, magneet en elektrisch. Welk type is het meest effectief?',
    url: 'https://waterfilterplatform.nl/waterontkalker/soorten',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is het verschil tussen een single-tank en een twin-tank waterontkalker?',
    answer:
      'Een single-tank ontkalker heeft een harsreservoir en gaat tijdens de regeneratie tijdelijk offline. In die periode stroomt er ongezacht water door het systeem. Een twin-tank (duplex) ontkalker heeft twee tanks die elkaar afwisselen: terwijl de ene regenereert, werkt de andere. Dit garandeert continu zacht water, 24 uur per dag.',
  },
  {
    question: 'Hoe werkt een zoutloze TAC-ontkalker?',
    answer:
      'TAC staat voor Template Assisted Crystallization. Het water passeert een polymere media waarop kalk microscopische kristallen vormt. Die kristallen lossen los en spoelen mee met het water in een vorm die minder snel hecht aan leidingwanden en apparaten. TAC verwijdert kalk niet: het water blijft chemisch even hard. De technologie is effectief voor leidingbescherming maar maakt het water niet zacht.',
  },
  {
    question: 'Werkt een magneetontharder echt?',
    answer:
      'Nee, niet op een meetbare manier. Een magneetontharder brengt een magnetisch veld aan op de waterleiding. Onafhankelijke studies vinden geen statistisch significant effect op kalkafzetting of waterhardheid. De waterhardheid in dH blijft onveranderd. Een magneetontharder is geen effectieve vervanging voor ionenwisseling of TAC.',
  },
  {
    question: 'Wat is een elektrische anti-kalkinstallatie?',
    answer:
      'Een elektrische anti-kalkinstallatie plaatst een zwakstroom-elektrisch veld of ultrasone trillingen op de waterleiding. Net als bij magneet-systemen verandert het de kristalstructuur van kalk tijdelijk. De wetenschappelijke onderbouwing is zwak en de effectiviteit varieert sterk per situatie. Voor serieuze kalkbescherming is ionenwisseling of TAC betrouwbaarder.',
  },
  {
    question: 'Welk type waterontkalker is het meest effectief?',
    answer:
      'Voor echte waterontharding (verlagen van dH-waarde) is ionenwisseling via een single-tank of twin-tank ontkalker de enige bewezen effectieve methode. Een twin-tank biedt het voordeel van continu zacht water en efficienter zoutgebruik. TAC is een goede tweede keus voor leidingbescherming zonder zout. Magneet- en elektrische systemen worden niet aanbevolen.',
  },
  {
    question: 'Welk type waterontkalker is geschikt voor een huurwoning?',
    answer:
      'In een huurwoning kunt u doorgaans geen centrale waterontkalker installeren. De beste alternatieven zijn: een TAC-inline-filter, een compacte keukenontkalker voor de keukenkraan, of een osmosefilter onder het aanrecht voor zuiver drinkwater. Een osmosefilter is eenvoudig zelf te installeren en vereist geen permanente aanpassing aan de leiding.',
  },
  {
    question: 'Hoeveel kost een zoutloze waterontkalker?',
    answer:
      'Een TAC-systeem kost bij aanschaf tussen de 150 en 400 euro. Installatie is eenvoudig: de meeste systemen worden inline op de waterleiding geschroefd en vereisen geen elektriciteit, zout of rioolaansluiting. Vervangingskosten zijn laag: de TAC-media gaat 3-5 jaar mee. Totale eigendomskosten over 10 jaar zijn aanzienlijk lager dan bij een ionenwisselaar.',
  },
  {
    question: 'Wanneer is een waterontkalker beter dan een osmosefilter?',
    answer:
      'Een waterontkalker is beter dan een osmosefilter als u het complete huishoudwater wilt ontharden: douche, wasmachine, vaatwasser, cv-ketel en leidingen. Een osmosefilter behandelt alleen het drinkwater aan de keukenkraan. Voor bescherming van apparaten en leidingen is een centrale ontkalker de juiste keuze. Voor schoon drinkwater is een osmosefilter effectiever en goedkoper op jaarbasis.',
  },
];

const soortenData = [
  {
    naam: 'Single-tank ionenwisselaar',
    werking: 'Een harsreservoir wisselt calcium- en magnesiumionen uit tegen natriumionen. Regenereert periodiek met zout en water. Tijdens regeneratie tijdelijk geen zacht water beschikbaar.',
    voordelen: 'Bewezen effectief, echt zacht water, beschermt cv-ketel en wasmachine, breed aanbod',
    nadelen: 'Tijdelijk geen zacht water bij regeneratie, zoutverbruik, hogere aanschaf',
    prijs: '500-1.200 euro',
    geschikt: 'Gezinnen 2-4 personen, harde watergebieden',
    effectiviteit: 5,
    highlight: false,
  },
  {
    naam: 'Duplex/twin-tank ionenwisselaar',
    werking: 'Twee harsvaten wisselen elkaar af. Terwijl de ene regenereert, werkt de andere. Continu zacht water zonder onderbreking. Hogere aanschafprijs, lager zoutverbruik per liter.',
    voordelen: 'Continu zacht water 24/7, efficienter zoutverbruik, ideaal voor groot verbruik',
    nadelen: 'Hogere aanschafprijs, meer installatieruimte nodig',
    prijs: '1.200-2.000 euro',
    geschikt: 'Grote gezinnen 4+ personen, hotels, drukke huishoudens',
    effectiviteit: 5,
    highlight: true,
  },
  {
    naam: 'TAC zoutloze ontkalker',
    werking: 'Polymere media laat kalk microscopische kristallen vormen die meestromen zonder te hechten. Geen zout, geen stroom, geen afvalwater. Water blijft chemisch even hard.',
    voordelen: 'Geen zout, geen stroom, geen rioolaansluiting, lage onderhoudskosten',
    nadelen: 'Maakt water niet zacht (dH blijft gelijk), minder effectief bij zeer hard water',
    prijs: '150-400 euro',
    geschikt: 'Huurwoningen, leidingbescherming zonder zout, budgetkoper',
    effectiviteit: 3,
    highlight: false,
  },
  {
    naam: 'Magneetontharder',
    werking: 'Permanent magneet of elektromagneet rondom de waterleiding. Claimt de kristaloriëntatie van kalk te veranderen. Geen chemische of fysieke verwijdering van mineralen.',
    voordelen: 'Eenmalige aankoop, geen verbruikskosten, geen installatie',
    nadelen: 'Geen wetenschappelijk bewijs van effectiviteit, water blijft chemisch hard',
    prijs: '30-80 euro',
    geschikt: 'Niet aanbevolen als serieuze kalkaanpak',
    effectiviteit: 1,
    highlight: false,
  },
  {
    naam: 'Elektrische anti-kalk',
    werking: 'Zwakstroom-elektrisch veld of ultrasone trillingen op de leiding. Claimt kalkgedrag te veranderen. Geen chemische of fysieke verwijdering. Beperkte onafhankelijke validatie.',
    voordelen: 'Geen zout, eenvoudige installatie, geen filtervervanging',
    nadelen: 'Beperkt bewijs van effectiviteit, continu energieverbruik, water blijft hard',
    prijs: '60-200 euro',
    geschikt: 'Onzeker; als proefoplossing bij lichte kalkproblemen',
    effectiviteit: 1,
    highlight: false,
  },
];

const aanbevelingPerSituatie = [
  {
    situatie: 'Klein appartement (1-2 personen)',
    aanbeveling: 'TAC-inline filter of kleine single-tank ontkalker',
    toelichting: 'TAC is installatievriendelijk en voldoende voor leidingbescherming. Single-tank als u echt zacht water wilt.',
  },
  {
    situatie: 'Groot gezin (4+ personen)',
    aanbeveling: 'Duplex/twin-tank ionenwisselaar',
    toelichting: 'Hoog waterverbruik vraagt om continu zacht water. Twin-tank is efficienter in zoutgebruik per liter.',
  },
  {
    situatie: 'Huurwoning',
    aanbeveling: 'TAC-inline filter of osmosefilter',
    toelichting: 'Geen permanente aansluiting nodig. TAC voor leidingbescherming; osmose voor schoon drinkwater.',
  },
  {
    situatie: 'Focus op drinkwaterkwaliteit',
    aanbeveling: 'Osmosefilter (geen ontkalker)',
    toelichting: 'Osmose verwijdert kalk, nitraten, PFAS en meer uit het drinkwater. Geen natriumtoevoeging. Goedkoper dan een ontkalker op jaarbasis.',
  },
];

export default function WaterOntkalkerSoortenPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontkalker', url: 'https://waterfilterplatform.nl/waterontkalker' },
          { name: 'Soorten', url: 'https://waterfilterplatform.nl/waterontkalker/soorten' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Soorten waterontkalkers: welk type past bij uw situatie?',
          description: 'Overzicht van alle soorten waterontkalkers: single-tank, twin-tank, zoutloos TAC, magneet en elektrisch. Welk type is het meest effectief?',
          datePublished: '2026-05-01',
          dateModified: '2026-05-01',
          url: 'https://waterfilterplatform.nl/waterontkalker/soorten',
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
            <span>Soorten</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Soorten waterontkalkers: welk type past bij uw situatie?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Er zijn vijf soorten waterontkalkers op de markt, maar ze zijn niet allemaal even effectief.
            Van de beproefde ionenwisselaar tot de controversiele magneetontharder: vergelijk hier alle
            soorten op werking, effectiviteit, prijs en toepasbaarheid.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#soorten"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Alle soorten bekijken &rarr;
            </Link>
            <Link
              href="/waterontkalker/kosten"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Kosten vergelijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <QuickAnswer answer="Er zijn 5 soorten waterontkalkers: (1) single-tank ionenwisselaar (echt zacht water, zout nodig), (2) duplex/twin-tank (continu zacht water), (3) TAC zoutloos (geen echt zacht water, wel leidingbescherming), (4) magneetontharder (geen bewezen effect), (5) elektrische anti-kalk (beperkt bewijs). Voor echt zacht water is ionenwisseling de enige bewezen methode." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#soorten" className="hover:underline">5 soorten vergeleken</a></li>
            <li><a href="#ionenwisseling" className="hover:underline">Ionenwisseling: de gouden standaard</a></li>
            <li><a href="#tac" className="hover:underline">TAC: zoutloos alternatief</a></li>
            <li><a href="#aanbeveling" className="hover:underline">Aanbeveling per situatie</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* 5 soorten */}
        <section id="soorten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            5 soorten waterontkalkers: overzicht en effectiviteitsscore
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Hieronder alle vijf bekende soorten beschreven met werking, voordelen, nadelen, prijs en
            een effectiviteitsscore van 1 tot 5 (5 = meest effectief voor echte waterontharding).
          </p>
          <div className="space-y-5">
            {soortenData.map(s => (
              <div
                key={s.naam}
                className={`rounded-2xl border p-5 ${s.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{s.naam}</h3>
                    <div className="flex gap-0.5 mt-1 items-center">
                      {[1, 2, 3, 4, 5].map(n => (
                        <span
                          key={n}
                          className={`inline-block w-3 h-3 rounded-full ${n <= s.effectiviteit ? 'bg-[#005F8A]' : 'bg-gray-200'}`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">effectiviteit {s.effectiviteit}/5</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-[#005F8A]">{s.prijs}</p>
                    {s.highlight && (
                      <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full">
                        Aanbevolen
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">{s.werking}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                  <div className="bg-green-50 rounded-lg p-2.5">
                    <p className="text-xs font-semibold text-green-700 mb-1">Voordelen</p>
                    <p className="text-xs text-gray-700">{s.voordelen}</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-2.5">
                    <p className="text-xs font-semibold text-red-600 mb-1">Nadelen</p>
                    <p className="text-xs text-gray-700">{s.nadelen}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  <strong className="text-gray-700">Geschikt voor:</strong> {s.geschikt}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Ionenwisseling uitgelegd */}
        <section id="ionenwisseling">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Ionenwisseling: de gouden standaard voor waterontharding
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ionenwisseling is de enige methode die het water chemisch zacht maakt. Het principe: de
            harskorrels in het reservoir zijn beladen met natriumionen. Als hard water door de hars
            stroomt, wisselen calcium- en magnesiumionen uit met natriumionen. Het water verlaat de
            hars met een hardheid van 1-3 dH.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Zodra de hars verzadigd is met calcium en magnesium, vindt regeneratie plaats: een
            zoutoplossing spoelt door de hars en wisselt de calcium- en magnesiumionen weer uit
            tegen natriumionen. Daarna is de hars klaar voor de volgende cyclus.
          </p>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-4">
            <p className="font-semibold text-amber-900 mb-1">Let op: natriumtoevoeging</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Bij ionenwisseling wordt calcium vervangen door natrium. Bij een waterhardheid van
              20 dH voegt de ontkalker circa 46 mg natrium per liter toe. Voor gezonde volwassenen
              is dit geen probleem. Voor mensen met hypertensie of een natriumbeperkt dieet is een
              osmosefilter aan de keukenkraan een zinvolle aanvulling.
            </p>
          </div>
        </section>

        {/* TAC */}
        <section id="tac">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            TAC: zoutloze leidingbescherming zonder echte ontharding
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            TAC (Template Assisted Crystallization) is een populair alternatief voor de traditionele
            ionenwisselaar. Het vereist geen zout, geen elektriciteit en geen rioolaansluiting.
            De polymere media laat kalk neerslaan in microscopische kristalvorm, die minder snel
            aan leidingwanden en apparaten hecht dan normaal calciumcarbonaat.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Belangrijk voorbehoud: het water is na TAC-behandeling chemisch even hard als voor
            behandeling. De dH-waarde verandert niet. Zeep schuimt niet beter, haar voelt niet
            zachter en de wasmachine profiteert minder dan bij ionenwisseling. TAC is primair
            een technologie voor leidingen en cv-ketels, niet voor huid, haar en was.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Voor een volledige vergelijking van alle methoden, lees onze pagina over{' '}
            <Link href="/waterontkalker/vs-waterontharder" className="text-[#005F8A] underline hover:no-underline">
              waterontkalker versus waterontharder
            </Link>.
          </p>
        </section>

        <CTABanner context="osmose" />

        {/* Aanbeveling per situatie */}
        <section id="aanbeveling">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Aanbeveling per situatie
          </h2>
          <div className="space-y-3">
            {aanbevelingPerSituatie.map(a => (
              <div key={a.situatie} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-0.5">{a.situatie}</p>
                <p className="text-sm text-[#005F8A] font-medium mb-1">{a.aanbeveling}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{a.toelichting}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meer lezen */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterontkalker', label: 'Waterontkalker overzicht' },
              { href: '/waterontkalker/kosten', label: 'Kosten waterontkalker per jaar' },
              { href: '/waterontkalker/vs-waterontharder', label: 'Ontkalker vs ontharder: verschil' },
              { href: '/waterontkalker/vergelijken', label: 'Modellen vergelijken' },
              { href: '/omgekeerde-osmose', label: 'Osmosefilter als alternatief' },
              { href: '/leidingwater/hard-water', label: 'Hard leidingwater in Nederland' },
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
            Veelgestelde vragen over soorten waterontkalkers
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
            <p className="text-sm text-gray-600">Vergelijk de werking van ontharders met de verschillende soorten ontkalkers.</p>
          </Link>
          <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling uitgelegd</h3>
            <p className="text-sm text-gray-600">De technologie achter de meest effectieve kalkaanpak voor huishoudens.</p>
          </Link>
          <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in water</h3>
            <p className="text-sm text-gray-600">Welke mineralen zorgen voor kalkvorming en welk type ontkalker pakt dit aan?</p>
          </Link>
          <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp hard water</h3>
            <p className="text-sm text-gray-600">Welk type ontkalker past het beste bij jouw woning en waterverbruik?</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

      </div>
    </>
  );
}
