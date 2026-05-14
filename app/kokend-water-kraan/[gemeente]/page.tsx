import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { gemeenten, getGemeente, getHardheidLabel, type Hardheid } from '@/data/gemeenten';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { GemeenteLinks } from '@/components/GemeenteLinks';

interface PageProps {
  params: Promise<{ gemeente: string }>;
}

export async function generateStaticParams() {
  return gemeenten.map(g => ({ gemeente: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { gemeente: slug } = await params;
  const gemeente = getGemeente(slug);
  if (!gemeente) return {};

  const title = `Kokend water kraan in ${gemeente.naam}: advies voor ${gemeente.hardheid}°dH`;
  return {
    title: title.length > 70 ? title.slice(0, 67) + '...' : title,
    description: `Overweeg je een kokend water kraan in ${gemeente.naam}? Het water heeft ${gemeente.hardheid}°dH (${getHardheidLabel(gemeente.categorie).toLowerCase()}). Lees welk type kraan past, hoe vaak ontkalken en wat de installatie kost.`,
    alternates: { canonical: `https://waterfilterplatform.nl/kokend-water-kraan/${gemeente.slug}` },
    openGraph: {
      title: `Kokend water kraan in ${gemeente.naam} — advies bij ${gemeente.hardheid}°dH water`,
      description: `Is een kokend water kraan zinvol in ${gemeente.naam}? Bij ${gemeente.hardheid}°dH water speelt kalk een belangrijke rol. Vergelijk types, onderhoudskosten en installatie.`,
    },
  };
}

interface KokendContent {
  waarom: (naam: string, dH: number) => string;
  typeAdvies: (naam: string, dH: number) => string;
  onderhoud: string;
  ontkalkFrequentie: string;
  ontkalkTekst: (naam: string, dH: number) => string;
  kostenTekst: (naam: string, dH: number) => string;
  urgentie: 'hoog' | 'gemiddeld' | 'laag';
  urgentieKleur: string;
  urgentieLabel: string;
  typeOpties: { naam: string; uitleg: string; aanbevolen: boolean }[];
}

const kokendContent: Record<Hardheid, KokendContent> = {
  'zeer hard': {
    waarom: (naam, dH) =>
      `In ${naam} is een kokend water kraan een slimme maar veeleisende investering. Met ${dH}°dH behoort het leidingwater tot de hardste in Nederland — dat betekent dat kalkaanslag in een kokend water kraan razendsnel ontstaat. Tegelijkertijd is de koolzuurkraan juist hier erg nuttig: je hoeft geen waterkoker meer te gebruiken (die raakt bij dit hardheidsniveau snel verstopt), en de kraan levert direct heet of bruisend gefilterd water.`,
    typeAdvies: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is een kokend water kraan mét geïntegreerd osmosefilter (4-in-1 of 5-in-1 systeem) verreweg de verstandigste keuze. Een standaard 3-in-1 kraan zonder filter geeft je weliswaar kokend water, maar het harde water tast het verwarmingselement aan binnen enkele maanden. Een 4-in-1 systeem combineert osmosezuivering met de koolzuuroptie: het verwarmingselement werkt altijd op zacht water, waardoor kalkaanslag vrijwel verdwijnt.`,
    onderhoud: 'elke 4 tot 6 weken',
    ontkalkFrequentie: 'maandelijks',
    ontkalkTekst: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is maandelijks onderhoud van een kokend water kraan geen luxe maar noodzaak. Kalkafzetting op het verwarmingselement verlaagt de efficiëntie en kan de kraan beschadigen. Gebruik het specifieke ontkalkingsmiddel van de fabrikant — nooit azijn in een tankboiler, dit kan de binnencoating beschadigen. Plan een kwartaalse filterwissel in voor 3-in-1 systemen zonder osmose.`,
    kostenTekst: (naam, dH) =>
      `In ${naam} liggen de totale jaarkosten van een kokend water kraan bij ${dH}°dH hoger dan gemiddeld. Reken op €60–€120 per jaar aan onderhoud en ontkalkers, plus de aanschafprijs van €300–€900 voor het systeem zelf. Bij een 4-in-1 osmosesysteem zijn de jaarlijkse filterkosten hoger (€80–€150), maar de levensduur van het verwarmingselement is aanzienlijk langer.`,
    urgentie: 'hoog',
    urgentieKleur: 'red',
    urgentieLabel: 'Kalk-alert: osmosefilter sterk aanbevolen',
    typeOpties: [
      { naam: '4-in-1 osmose kraan', uitleg: 'Koud, warm, kokend én osmose-gefilterd water. Verwarmingselement werkt op zacht water — ideaal bij zeer hard water.', aanbevolen: true },
      { naam: '5-in-1 met bruisend', uitleg: 'Voegt bruisend water toe aan de 4-in-1. Meest complete oplossing, hogere aanschafprijs.', aanbevolen: true },
      { naam: '3-in-1 met waterfilter', uitleg: 'Koud, warm en kokend — met inline kalkfilter. Bruikbaar, maar filterwissel vaker nodig bij hard water.', aanbevolen: false },
      { naam: 'Standaard 3-in-1', uitleg: 'Geen filter — niet aanbevolen bij zeer hard water. Kalkschade aan verwarmingselement binnen maanden.', aanbevolen: false },
    ],
  },
  'hard': {
    waarom: (naam, dH) =>
      `In ${naam} is een kokend water kraan een aantrekkelijke keuze. Met ${dH}°dH is het leidingwater duidelijk hard — kalk is merkbaar in de waterkoker en op kranen. Een kokend water kraan vervangt de dagelijkse waterkoker en bespaart tijd, maar vraagt bij dit hardheidsniveau actief onderhoud om de levensduur te garanderen.`,
    typeAdvies: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is een 3-in-1 kokend water kraan met geïntegreerd waterfilter een goede keuze. Een osmosesysteem (4-in-1) is de meest onderhoudsarme optie en beschermt het verwarmingselement volledig. Wie een budget-vriendelijkere keuze wil, kiest een 3-in-1 met inline kalkfilter — mits de filter regelmatig gewisseld wordt.`,
    onderhoud: 'elke 6 tot 8 weken',
    ontkalkFrequentie: 'elke 6 tot 8 weken',
    ontkalkTekst: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} ontkalkt u de kokend water kraan het beste elke 6 tot 8 weken. Gebruik altijd het ontkalkingsmiddel van de fabrikant. Bij systemen met geïntegreerd osmosefilter is ontkalking van het verwarmingselement zelden nodig — het water dat het element bereikt is al ontharderd.`,
    kostenTekst: (naam, dH) =>
      `In ${naam} bedragen de jaarlijkse onderhoudskosten van een kokend water kraan bij ${dH}°dH circa €40–€90. Tel daarbij de aanschafprijs op (€250–€800). Een osmosesysteem heeft hogere filterkosten (€60–€130/jaar) maar minder ontkalking.`,
    urgentie: 'gemiddeld',
    urgentieKleur: 'orange',
    urgentieLabel: 'Onderhoud vereist bij hard water',
    typeOpties: [
      { naam: '4-in-1 osmose kraan', uitleg: 'Beste keuze bij hard water: verwarmingselement werkt op zacht, gefilterd water.', aanbevolen: true },
      { naam: '3-in-1 met kalkfilter', uitleg: 'Goed alternatief mits filter tijdig gewisseld. Let op filterlevensduur bij hard water.', aanbevolen: true },
      { naam: '5-in-1 met bruisend', uitleg: 'Premium optie met bruisend water inbegrepen. Hoge aanschafprijs, maar minimaal onderhoud.', aanbevolen: false },
      { naam: 'Standaard 3-in-1', uitleg: 'Zonder filter — niet ideaal bij hard water. Regelmatige ontkalking is verplicht.', aanbevolen: false },
    ],
  },
  'matig hard': {
    waarom: (naam, dH) =>
      `In ${naam} is een kokend water kraan een comfortabele keuze zonder grote zorgen over kalk. Met ${dH}°dH is het water matig hard — kalkaanslag is beheersbaar en een standaard 3-in-1 kraan werkt prima met periodiek onderhoud. De voordelen zijn evident: direct kokend water, besparing op waterkoker en een nette aanrecht.`,
    typeAdvies: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} volstaat een 3-in-1 kokend water kraan met of zonder filter. Een inline kalkfilter is een handige toevoeging, maar niet strikt noodzakelijk. Een 4-in-1 osmose-variant biedt de beste waterkwaliteit voor drinken en koken, maar is minder urgent dan bij harder water.`,
    onderhoud: 'elk kwartaal',
    ontkalkFrequentie: 'elk kwartaal',
    ontkalkTekst: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is kwartaalse ontkalking voldoende. Gebruik het aanbevolen middel van de fabrikant en spoel het systeem goed na. Het verwarmingselement blijft in goede staat met deze onderhoudsfrequentie.`,
    kostenTekst: (naam, dH) =>
      `In ${naam} zijn de jaarlijkse onderhoudskosten van een kokend water kraan bij ${dH}°dH beperkt: €20–€50 per jaar voor ontkalkers en eventuele filterwissel. De aanschafprijs varieert van €200–€700 afhankelijk van het type.`,
    urgentie: 'laag',
    urgentieKleur: 'amber',
    urgentieLabel: 'Geschikt — periodiek onderhoud voldoende',
    typeOpties: [
      { naam: '3-in-1 standaard', uitleg: 'Koud, warm en kokend water. Prima optie bij matig hard water met kwartaalse ontkalking.', aanbevolen: true },
      { naam: '3-in-1 met kalkfilter', uitleg: 'Vermindert onderhoud en verbetert smaak. Goede middenweg.', aanbevolen: true },
      { naam: '4-in-1 osmose kraan', uitleg: 'Beste waterkwaliteit maar niet noodzakelijk voor kalkbescherming bij dit hardheidsniveau.', aanbevolen: false },
      { naam: '5-in-1 met bruisend', uitleg: 'Premium keuze voor wie bruisend water wil integreren.', aanbevolen: false },
    ],
  },
  'matig': {
    waarom: (naam, dH) =>
      `In ${naam} is een kokend water kraan een uitstekende keuze met minimale zorgen over kalk. Met ${dH}°dH is het water matig — kalkaanslag is nauwelijks een thema. De investering is puur gericht op comfort: geen waterkoker meer, direct kokend water en een strakke keuken.`,
    typeAdvies: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} werkt elke type kokend water kraan probleemloos. Een standaard 3-in-1 is al meer dan voldoende. Een inline filter is optioneel — meer voor smaakverfijning (chloorverwijdering) dan voor kalkbescherming.`,
    onderhoud: '1 à 2 keer per jaar',
    ontkalkFrequentie: 'halfjaarlijks',
    ontkalkTekst: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is halfjaarlijkse ontkalking ruim voldoende. Veel gebruikers in zachter-water-regio's doen dit jaarlijks zonder problemen. Volg de aanbeveling van de fabrikant als richtlijn.`,
    kostenTekst: (naam, dH) =>
      `In ${naam} zijn de jaarlijkse onderhoudskosten van een kokend water kraan bij ${dH}°dH minimaal: €10–€30 per jaar. De aanschafprijs varieert van €180–€650 afhankelijk van het type en merk.`,
    urgentie: 'laag',
    urgentieKleur: 'lime',
    urgentieLabel: 'Optimale omstandigheden — kalk geen aandachtspunt',
    typeOpties: [
      { naam: '3-in-1 standaard', uitleg: 'Meest kostenefficiënte keuze bij matig water. Ontkalken tweemaal per jaar volstaat.', aanbevolen: true },
      { naam: '3-in-1 met kalkfilter', uitleg: 'Fijne upgrade voor smaak en extra gemak, maar niet noodzakelijk.', aanbevolen: false },
      { naam: '4-in-1 osmose kraan', uitleg: 'Uitstekende waterkwaliteit — kies dit als zuiver drinkwater prioriteit heeft.', aanbevolen: false },
      { naam: '5-in-1 met bruisend', uitleg: 'Premium comfortoptie voor wie bruisend water wil combineren.', aanbevolen: false },
    ],
  },
  'zacht': {
    waarom: (naam, dH) =>
      `In ${naam} is een kokend water kraan een ideale investering vanuit puur comfortoogpunt. Met ${dH}°dH heeft het leidingwater een van de laagste hardheden van Nederland — kalkaanslag in de kraan is vrijwel geen issue. Je profiteert van direct kokend water zonder de beperkingen die harder water met zich meebrengt.`,
    typeAdvies: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is elke kokend water kraan een goede keuze. Kalk speelt nauwelijks een rol, dus de keuze is puur op comfort en functies gebaseerd. Een 3-in-1 standaard biedt uitstekende waarde. Een 4-in-1 osmosefilter is hier meer interessant voor de pure drinkwaterkwaliteit (chloor, nitraten) dan voor kalkbescherming.`,
    onderhoud: 'jaarlijks',
    ontkalkFrequentie: 'jaarlijks of minder',
    ontkalkTekst: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is jaarlijkse of zelfs tweejaarlijkse ontkalking voldoende. Kalk zet zich nauwelijks af bij dit hardheidsniveau. Onderhoud is meer een preventieve maatregel dan een noodzaak.`,
    kostenTekst: (naam, dH) =>
      `In ${naam} zijn de jaarlijkse onderhoudskosten van een kokend water kraan bij ${dH}°dH verwaarloosbaar: €5–€20 per jaar. De aanschafprijs varieert van €180–€650 afhankelijk van het type.`,
    urgentie: 'laag',
    urgentieKleur: 'green',
    urgentieLabel: 'Ideale wateromstandigheden voor een kokend water kraan',
    typeOpties: [
      { naam: '3-in-1 standaard', uitleg: 'Prima keuze bij zacht water. Vrijwel geen kalkaanslag — geniet van direct kokend water.', aanbevolen: true },
      { naam: '4-in-1 osmose kraan', uitleg: 'Kies dit voor maximale waterkwaliteit: verwijdert chloor, nitraten en microplastics.', aanbevolen: false },
      { naam: '5-in-1 met bruisend', uitleg: 'Alles-in-één comfort inclusief bruisend gefilterd water.', aanbevolen: false },
      { naam: '3-in-1 met kalkfilter', uitleg: 'Weinig meerwaarde bij zacht water, maar prettig voor smaak.', aanbevolen: false },
    ],
  },
};

function getUrgentieClasses(kleur: string): { bg: string; border: string; text: string } {
  switch (kleur) {
    case 'red': return { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800' };
    case 'orange': return { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-800' };
    case 'amber': return { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800' };
    case 'lime': return { bg: 'bg-lime-50', border: 'border-lime-200', text: 'text-lime-800' };
    case 'green': return { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800' };
    default: return { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-800' };
  }
}

export default async function KokendWaterKraanGemeentePage({ params }: PageProps) {
  const { gemeente: slug } = await params;
  const gemeente = getGemeente(slug);
  if (!gemeente) notFound();

  const content = kokendContent[gemeente.categorie];
  const urgentie = getUrgentieClasses(content.urgentieKleur);
  const isHardWater = gemeente.categorie === 'hard' || gemeente.categorie === 'zeer hard';

  const faqItems = [
    {
      question: `Is een kokend water kraan de moeite waard in ${gemeente.naam}?`,
      answer: `Bij ${gemeente.hardheid}°dH in ${gemeente.naam} is een kokend water kraan zeker de moeite waard, mits je het juiste type kiest. Bij dit hardheidsniveau (${getHardheidLabel(gemeente.categorie).toLowerCase()}) is ${isHardWater ? 'een model met geïntegreerd waterfilter of osmosesysteem sterk aan te bevelen om kalkschade te voorkomen' : 'vrijwel elk model geschikt — kalk is hier geen groot bezwaar'}.`,
    },
    {
      question: `Hoe vaak moet ik een kokend water kraan ontkalken in ${gemeente.naam}?`,
      answer: `In ${gemeente.naam} met ${gemeente.hardheid}°dH adviseren we ontkalking ${content.onderhoud}. Gebruik altijd het ontkalkingsmiddel dat de fabrikant voorschrijft — nooit gewoon azijn in een systeem met tankboiler, dat kan de binnenlaag beschadigen. ${isHardWater ? 'Overweeg een systeem met geïntegreerd filter om de ontkalkingsfrequentie te verlagen.' : 'Bij dit watertype is het onderhoud minimaal.'}`,
    },
    {
      question: `Welk type kokend water kraan past bij het water in ${gemeente.naam}?`,
      answer: `Bij ${gemeente.hardheid}°dH (${getHardheidLabel(gemeente.categorie).toLowerCase()}) in ${gemeente.naam} ${isHardWater ? 'raden we een 4-in-1 of 5-in-1 systeem aan met geïntegreerd osmosefilter. Het verwarmingselement werkt dan op zacht water, wat de levensduur aanzienlijk verlengt.' : 'volstaat een 3-in-1 standaard systeem uitstekend. Een filter is optioneel maar verbetert de smaak.'}`,
    },
    {
      question: `Wat kost het gebruik van een kokend water kraan per jaar in ${gemeente.naam}?`,
      answer: content.kostenTekst(gemeente.naam, gemeente.hardheid),
    },
    {
      question: `Kan ik een kokend water kraan zelf installeren in ${gemeente.naam}?`,
      answer: `Een kokend water kraan installeren vereist aansluiting op de waterleiding en een stopcontact voor de boiler. Technisch gezien is het een DIY-klus, maar in ${gemeente.naam} met ${gemeente.hardheid}°dH water raden we aan om ook de waterhardheid mee te nemen in de installatiekeuze. ${isHardWater ? 'Bij hard water is het plaatsen van een voorfilter of osmoseunit een extra stap die vakkundige installatie verdient.' : 'Bij dit hardheidsniveau is een standaard installatie zonder extra voorfilter doorgaans afdoende.'}`,
    },
    {
      question: `Heeft een kokend water kraan een filter nodig in ${gemeente.naam}?`,
      answer: `In ${gemeente.naam} is een filter ${isHardWater ? 'sterk aan te bevelen. Bij ' + gemeente.hardheid + '°dH beschadigt kalk het verwarmingselement zonder filter binnen een jaar. Een inline kalkfilter of osmoseunit beschermt het systeem en verbetert de smaak van het kokende water.' : 'een comfortabele maar niet verplichte toevoeging. Bij ' + gemeente.hardheid + '°dH is kalk beheersbaar. Een filter verbetert de smaak (chloorverwijdering) maar is niet noodzakelijk voor kalkbescherming.'}`,
    },
  ];

  const naburigeGemeenten = gemeenten
    .filter(g => g.provincie === gemeente.provincie && g.slug !== gemeente.slug)
    .slice(0, 6);

  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kokend water kraan', url: 'https://waterfilterplatform.nl/kokend-water-kraan' },
          { name: `Kokend water kraan in ${gemeente.naam}`, url: `https://waterfilterplatform.nl/kokend-water-kraan/${gemeente.slug}` },
        ]}
      />
      <SchemaOrg
        schema={[{
          '@type': 'Place',
          name: gemeente.naam,
          address: {
            '@type': 'PostalAddress',
            addressLocality: gemeente.naam,
            addressRegion: gemeente.provincie,
            addressCountry: 'NL',
          },
          description: `${gemeente.naam} heeft leidingwater met een hardheid van ${gemeente.hardheid}°dH (${getHardheidLabel(gemeente.categorie).toLowerCase()}), geleverd door ${gemeente.waterbedrijf}.`,
        }]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:text-[#005F8A]">Kokend water kraan</Link>
            <span className="mx-2">/</span>
            <span>{gemeente.naam}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan in {gemeente.naam}
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            {content.waarom(gemeente.naam, gemeente.hardheid)}
          </p>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-white border border-[#005F8A] text-[#005F8A] rounded-full px-3 py-1">
              {gemeente.hardheid}°dH · {getHardheidLabel(gemeente.categorie)}
            </span>
            <span className="bg-white border border-gray-200 text-gray-600 rounded-full px-3 py-1">
              Water: {gemeente.waterbedrijf}
            </span>
            <span className="bg-white border border-gray-200 text-gray-600 rounded-full px-3 py-1">
              Ontkalken: {content.onderhoud}
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        {/* Urgentie-badge */}
        <section className={`${urgentie.bg} ${urgentie.border} border rounded-2xl p-5`}>
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
            <p className={`font-bold ${urgentie.text}`}>{content.urgentieLabel}</p>
            <p className={`text-sm ${urgentie.text}`}>{gemeente.hardheid}°dH · {gemeente.naam}</p>
          </div>
          <p className={`text-sm ${urgentie.text} opacity-90`}>
            Water geleverd door <strong>{gemeente.waterbedrijf}</strong>. Aanbevolen ontkalkfrequentie: {content.onderhoud}.
          </p>
        </section>

        {/* Welk type past */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Welk type kokend water kraan past bij het water in {gemeente.naam}?
          </h2>
          <p className="text-gray-600 text-sm mb-5">{content.typeAdvies(gemeente.naam, gemeente.hardheid)}</p>
          <div className="space-y-3">
            {content.typeOpties.map((optie) => (
              <div
                key={optie.naam}
                className={`border rounded-xl p-4 flex gap-3 items-start ${
                  optie.aanbevolen
                    ? 'border-[#005F8A] bg-[#E0F2FE]/30'
                    : 'border-gray-100 bg-white'
                }`}
              >
                <span className={`shrink-0 mt-0.5 font-bold text-sm ${optie.aanbevolen ? 'text-[#005F8A]' : 'text-gray-300'}`}>
                  {optie.aanbevolen ? '★' : '○'}
                </span>
                <div>
                  <p className={`font-semibold text-sm ${optie.aanbevolen ? 'text-[#003F5C]' : 'text-gray-700'}`}>
                    {optie.naam}
                    {optie.aanbevolen && (
                      <span className="ml-2 text-xs bg-[#005F8A] text-white rounded-full px-2 py-0.5">Aanbevolen</span>
                    )}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{optie.uitleg}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link href="/kokend-water-kraan/met-filter" className="text-[#005F8A] underline hover:text-[#003F5C]">
              Meer over kokend water kranen met filter →
            </Link>
            <Link href="/kokend-water-kraan/vergelijken" className="text-[#005F8A] underline hover:text-[#003F5C]">
              Types vergelijken →
            </Link>
          </div>
        </section>

        {/* Onderhoudsadvies */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Onderhoudsadvies voor een kokend water kraan in {gemeente.naam}
          </h2>
          <p className="text-gray-700 text-sm mb-4">{content.ontkalkTekst(gemeente.naam, gemeente.hardheid)}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                label: 'Ontkalkfrequentie',
                waarde: content.ontkalkFrequentie,
                icon: '🔄',
              },
              {
                label: 'Waterhardheid',
                waarde: `${gemeente.hardheid}°dH (${getHardheidLabel(gemeente.categorie)})`,
                icon: '💧',
              },
              {
                label: 'Filterwissel (bij filter)',
                waarde: isHardWater ? 'Elke 3–6 maanden' : 'Elke 6–12 maanden',
                icon: '🔧',
              },
              {
                label: 'Waterbedrijf',
                waarde: gemeente.waterbedrijf,
                icon: '🏢',
              },
            ].map(item => (
              <div key={item.label} className="bg-white rounded-xl p-3 flex gap-3 items-center border border-gray-100">
                <span className="text-xl shrink-0">{item.icon}</span>
                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="font-semibold text-sm text-gray-800">{item.waarde}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Kosten */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Kosten installatie en gebruik in {gemeente.naam}
          </h2>
          <p className="text-gray-600 text-sm mb-4">{content.kostenTekst(gemeente.naam, gemeente.hardheid)}</p>
          <div className="overflow-hidden border border-gray-100 rounded-xl">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Kostenpost</th>
                  <th className="text-right p-3 font-semibold text-gray-700">Indicatie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-gray-700">Aanschaf 3-in-1 systeem</td>
                  <td className="p-3 text-right text-gray-500 font-mono">€180 – €450</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-gray-700">Aanschaf 4-in-1 osmose systeem</td>
                  <td className="p-3 text-right text-gray-500 font-mono">€450 – €900</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-gray-700">Installatie (loodgieter)</td>
                  <td className="p-3 text-right text-gray-500 font-mono">€80 – €200</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-gray-700">Jaarlijks onderhoud &amp; ontkalken</td>
                  <td className="p-3 text-right text-gray-500 font-mono">{isHardWater ? '€40 – €120' : '€10 – €50'}/jr</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-gray-700">Filterwissel (bij osmose)</td>
                  <td className="p-3 text-right text-gray-500 font-mono">€60 – €150/jr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        {isHardWater ? (
          <div className={`${urgentie.bg} ${urgentie.border} border rounded-2xl p-5`}>
            <p className={`font-bold ${urgentie.text} mb-2`}>
              Bij {gemeente.hardheid}°dH in {gemeente.naam}: kies een osmose-kraan
            </p>
            <p className={`${urgentie.text} opacity-90 text-sm mb-4`}>
              Met hard water beschadigt kalk een onbeschermd verwarmingselement binnen maanden. Een 4-in-1 osmose-kraan combineert 99% kalkreductie met direct kokend, koud en gefilterd water — ideaal voor hard water zoals in {gemeente.naam}.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/omgekeerde-osmose/kopen"
                className="inline-block bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
              >
                Vergelijk osmose systemen →
              </Link>
              <Link
                href="/kokend-water-kraan/vergelijken"
                className={`inline-block border ${urgentie.border} ${urgentie.text} font-semibold px-5 py-2.5 rounded-xl hover:bg-white transition-colors text-sm`}
              >
                Kranen vergelijken
              </Link>
            </div>
          </div>
        ) : (
          <CTABanner context="kokend" variant="compact" />
        )}

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-3">Meer informatie en verdieping</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kokend-water-kraan', label: 'Kokend water kraan — overzicht', desc: 'Hoe werkt het, types en kosten' },
              { href: '/kokend-water-kraan/met-filter', label: 'Kokend water kraan met filter', desc: 'Welk filtertype past het beste?' },
              { href: `/waterhardheid/${gemeente.slug}`, label: `Waterhardheid ${gemeente.naam}`, desc: `${gemeente.hardheid}°dH — achtergrond en advies` },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose filter kopen', desc: 'Vergelijk de beste osmosesystemen' },
              { href: `/kennisbank/kokend-water-kraan-installeren`, label: 'Kokend water kraan installeren', desc: 'Stappenplan en installatie-advies' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="group border border-gray-100 rounded-xl p-3 hover:border-[#005F8A] transition-all">
                <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">{l.label}</p>
                <p className="text-xs text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Naburige gemeenten */}
        {naburigeGemeenten.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-[#003F5C] mb-3">
              Kokend water kraan in andere gemeenten in {gemeente.provincie}
            </h2>
            <div className="flex flex-wrap gap-2">
              {naburigeGemeenten.map(g => {
                const kleur =
                  g.categorie === 'zacht' ? 'border-green-200 text-green-800' :
                  g.categorie === 'matig' ? 'border-lime-200 text-lime-800' :
                  g.categorie === 'matig hard' ? 'border-amber-200 text-amber-800' :
                  g.categorie === 'hard' ? 'border-orange-200 text-orange-800' :
                  'border-red-200 text-red-800';
                return (
                  <Link
                    key={g.slug}
                    href={`/kokend-water-kraan/${g.slug}`}
                    className={`text-sm border rounded-full px-3 py-1.5 hover:shadow-sm transition-shadow ${kleur}`}
                  >
                    {g.naam} ({g.hardheid}°dH)
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <GemeenteLinks gemeente={gemeente} currentPath="kokend-water-kraan" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over kokend water kraan in {gemeente.naam}
          </h2>
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
      </div>
    </>
  );
}
