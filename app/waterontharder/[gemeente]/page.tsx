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

  const title = `Waterontharder ${gemeente.naam}: nodig bij ${gemeente.hardheid}°dH?`;
  const truncated = title.length > 70 ? `Waterontharder in ${gemeente.naam}: ${gemeente.hardheid}°dH advies` : title;

  return {
    title: truncated,
    description: `Is een waterontharder nodig in ${gemeente.naam}? Met ${gemeente.hardheid}°dH (${getHardheidLabel(gemeente.categorie).toLowerCase()}) geleverd door ${gemeente.waterbedrijf}. Lees ons advies, kosten en alternatieven.`,
    alternates: { canonical: `https://waterfilterplatform.nl/waterontharder/${gemeente.slug}` },
    openGraph: {
      title: `Waterontharder in ${gemeente.naam} — nodig bij ${gemeente.hardheid}°dH?`,
      description: `${gemeente.naam} heeft ${gemeente.hardheid}°dH leidingwater. Ontdek of een waterontharder of osmosefilter de beste keuze is voor jouw situatie.`,
    },
  };
}

interface OntharderContent {
  adviesIntro: (naam: string, dH: number) => string;
  aanbeveling: string;
  aanbevelingKleur: string;
  adviesLabel: string;
  jaarKostenZout: number;
  aanschafKostenLaag: number;
  aanschafKostenHoog: number;
  onderhoudPerJaar: number;
  kalkEffect: (naam: string, dH: number) => string;
  tips: string[];
  ontharderVsOsmose: string;
  faqExtra: {
    question: (naam: string) => string;
    answer: (naam: string, dH: number, waterbedrijf: string) => string;
  }[];
}

const ontharderContent: Record<Hardheid, OntharderContent> = {
  'zeer hard': {
    adviesIntro: (naam, dH) =>
      `In ${naam} is een waterontharder geen luxe maar een serieuze overweging. Met ${dH}°dH behoort het leidingwater tot de hardste van Nederland. Kalk zet zich dagelijks af in leidingen, op verwarmingselementen, in de cv-ketel en op alle natte oppervlakken. Een centrale waterontharder behandelt al het water in de woning en beschermt zo leidingen, boiler, wasmachine en cv-installatie structureel.`,
    aanbeveling: 'Sterk aanbevolen',
    aanbevelingKleur: 'red',
    adviesLabel: 'Waterontharder sterk aanbevolen',
    jaarKostenZout: 120,
    aanschafKostenLaag: 800,
    aanschafKostenHoog: 1800,
    onderhoudPerJaar: 80,
    kalkEffect: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is kalkvorming extreem actief. Verwarmingselementen van waterkoker en boiler raken binnen maanden bedekt met een dikke kalkkorst die het energieverbruik met 8–15% verhoogt. De warmtewisselaar van de cv-ketel slijt versneld en leidingen vernauwed langzaam door kalkophoping. Een waterontharder voorkomt dit volledig voor het hele huis.`,
    tips: [
      'Kies een waterontharder met timer of debietmeting — efficiënter zoutverbruik bij ${dH}°dH',
      'Stel de ontharder in op 0–3°dH uitgangswater voor optimale bescherming',
      'Combineer met een osmosefilter voor zuiver drinkwater (ontharder geeft natrium af aan het water)',
      'Laat de installatie uitvoeren door een gecertificeerd installateur — sluit op de hoofdwaterleiding',
      'Controleer het zoutniveau maandelijks; bij zeer hard water verbruik je meer zout',
    ],
    ontharderVsOsmose:
      'Bij zeer hard water vullen een waterontharder en een osmosefilter elkaar aan. De ontharder beschermt het hele huis (leidingen, boiler, wasmachine), terwijl het onthard water nog natrium bevat. Een osmosefilter op de keukenkraan geeft daarna echt puur, mineraalarm drinkwater. Wie alleen drinkwater wil verbeteren, kiest alleen osmose. Wie ook apparaten wil beschermen, kiest beide.',
    faqExtra: [
      {
        question: (naam) => `Is een waterontharder verplicht bij ${naam}s harde water?`,
        answer: (naam, dH) =>
          `Verplicht is een waterontharder nergens, maar bij ${dH}°dH in ${naam} is het een investering die zichzelf terugverdient. De kosten aan energie, reparaties en versnelde slijtage door kalk lopen op tot honderden euro's per jaar. Een ontharder beperkt die schade structureel.`,
      },
      {
        question: (naam) => `Hoeveel zout verbruikt een waterontharder in ${naam}?`,
        answer: (naam, dH) =>
          `Bij ${dH}°dH in ${naam} verbruikt een huishoudelijke waterontharder gemiddeld 8–15 kg tabletzout per maand, afhankelijk van het waterverbruik en de instelling. Dat komt neer op circa €80–€150 per jaar aan zoutkosten. Efficiëntere modellen met debietmeting verbruiken minder.`,
      },
      {
        question: (naam) => `Geeft een waterontharder gezond drinkwater in ${naam}?`,
        answer: (naam, dH) =>
          `Een waterontharder vervangt calcium en magnesium door natrium. Voor de meeste mensen is het natriumgehalte in onthard water verwaarloosbaar, maar mensen met natriumbeperking of zuigelingen mogen onthard water niet zomaar drinken. Bij ${dH}°dH in ${naam} adviseren we een aparte osmosekraan voor drinkwater.`,
      },
    ],
  },
  'hard': {
    adviesIntro: (naam, dH) =>
      `In ${naam} is een waterontharder een zinvolle investering voor wie apparaten en leidingen wil beschermen. Met ${dH}°dH leidingwater is kalkvorming uitgesproken aanwezig — niet de ergste categorie, maar wel genoeg om op lange termijn merkbare schade te veroorzaken aan cv-ketel, boiler en wasmachine. Voor drinkwater alleen is een osmosefilter de slimmere en goedkopere keuze.`,
    aanbeveling: 'Aanbevolen voor gehele woning',
    aanbevelingKleur: 'orange',
    adviesLabel: 'Waterontharder aanbevolen bij hard water',
    jaarKostenZout: 90,
    aanschafKostenLaag: 800,
    aanschafKostenHoog: 1600,
    onderhoudPerJaar: 70,
    kalkEffect: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} treedt kalkschade geleidelijk maar zeker op. De cv-ketel verliest rendement naarmate kalk zich opbouwt in de warmtewisselaar. Wasmachine en vaatwasser verbruiken meer energie en gaan minder lang mee. Een waterontharder voorkomt deze opbouw volledig.`,
    tips: [
      'Vergelijk modellen op zoutverbruik per m³ behandeld water — bij hard water loopt dit op',
      'Een regeneratietimer is goedkoper dan debietmeting, maar minder efficiënt',
      'Overweeg alleen een keukenosmosefilter als je primair drinkwater wilt verbeteren',
      'Laat de ontharder na installatie instellen op de lokale hardheid via een erkend installateur',
      'Houd een voorraad tabletzout in huis — minimaal een maand verbruik als buffer',
    ],
    ontharderVsOsmose:
      'Bij hard water in deze regio is de keuze afhankelijk van je doel. Wil je alleen schoon drinkwater zonder kalk en chloor? Dan is een osmosefilter de goedkoopste en eenvoudigste oplossing. Wil je ook je cv-ketel, boiler en wasmachine beschermen? Dan is een centrale waterontharder de juiste investering. De twee systemen sluiten elkaar niet uit.',
    faqExtra: [
      {
        question: (naam) => `Verdient een waterontharder zichzelf terug in ${naam}?`,
        answer: (naam, dH) =>
          `Bij ${dH}°dH in ${naam} kan een waterontharder zich terugverdienen via lagere energiekosten (minder kalk op verwarmingselementen), minder wasmiddel en zeep, en een langere levensduur van de cv-ketel. De terugverdientijd ligt typisch op 5–10 jaar, afhankelijk van het waterverbruik en de kwaliteit van de installatie.`,
      },
      {
        question: (naam) => `Wat kost installatie van een waterontharder in ${naam}?`,
        answer: (naam) =>
          `De installatiekosten voor een waterontharder in ${naam} liggen gemiddeld tussen €200 en €500, bovenop de aanschafprijs van het apparaat (€800–€1.600). De installateur koppelt het apparaat aan de hoofdwaterleiding in de meterkast of technische ruimte. Vergeet niet jaarlijkse onderhoudskosten (€50–€100) mee te rekenen.`,
      },
    ],
  },
  'matig hard': {
    adviesIntro: (naam, dH) =>
      `In ${naam} is een waterontharder niet strikt noodzakelijk, maar kan nuttig zijn voor mensen die gevoelig zijn voor kalkproblemen of perfecte apparaatbescherming willen. Met ${dH}°dH leidingwater is de hardheid matig — kalkaanslag is aanwezig maar beheersbaar met regelmatige ontkalking. Een osmosefilter is voor de meeste inwoners van ${naam} de slimmere, eenvoudigere en goedkopere keuze.`,
    aanbeveling: 'Optioneel — osmose vaak beter',
    aanbevelingKleur: 'amber',
    adviesLabel: 'Waterontharder optioneel bij matig hard water',
    jaarKostenZout: 65,
    aanschafKostenLaag: 750,
    aanschafKostenHoog: 1400,
    onderhoudPerJaar: 60,
    kalkEffect: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is de kalkopbouw in apparaten beperkt. Met kwartaalse ontkalking van waterkoker en koffiemachine blijven ze optimaal werken. De cv-ketel en boiler ondervinden weinig tot geen merkbare schade op de korte termijn. Een waterontharder biedt extra comfort maar is financieel minder snel rendabel.`,
    tips: [
      'Overweeg eerst een osmosefilter op de keukenkraan — goedkoper en minder onderhoud dan een ontharder',
      'Als je toch een ontharder wil: kies een compact model voor in de meterkast',
      'Ontkalken van waterkoker en koffiemachine elke 3 maanden is voldoende bij dit hardheidsnniveau',
      'Gebruik regeneratiezout van goede kwaliteit om interne verstopping van de ontharder te voorkomen',
      'Vraag je installateur om de ontharder op precies de lokale hardheid in te stellen',
    ],
    ontharderVsOsmose:
      'Bij matig hard water is een osmosefilter op de keukenkraan voor de meeste huishoudens de betere keuze. Het is goedkoper in aanschaf, vergt nauwelijks onderhoud en geeft uitstekend drinkwater. Een waterontharder is alleen zinvol als je ook bescherming van leidingen en apparaten wilt — maar bij dit hardheidsniveau is die investering minder urgent.',
    faqExtra: [
      {
        question: (naam) => `Heb ik in ${naam} echt een waterontharder nodig?`,
        answer: (naam, dH) =>
          `Bij ${dH}°dH in ${naam} is een waterontharder niet noodzakelijk. Je kunt prima volstaan met kwartaalse ontkalking van waterkoker en koffiemachine, en een osmosefilter voor zuiver drinkwater. Een waterontharder is meer comfort dan noodzaak bij dit hardheidsniveau.`,
      },
      {
        question: (naam) => `Wat is het verschil in kosten tussen ontharder en osmosefilter in ${naam}?`,
        answer: (naam) =>
          `Een osmosefilter in ${naam} kost €150–€500 in aanschaf en €30–€60 per jaar aan filtervervanging. Een waterontharder kost €800–€1.400 in aanschaf, plus installatie (€200–€400), zout (€65/jaar) en onderhoud (€60/jaar). Voor louter drinkwaterverbetering is osmose veel goedkoper.`,
      },
    ],
  },
  'matig': {
    adviesIntro: (naam, dH) =>
      `In ${naam} is een waterontharder niet nodig. Met ${dH}°dH leidingwater valt de hardheid in de categorie "matig" — kalk is nauwelijks een probleem en apparaten ondervinden weinig hinder. Een waterontharder zou hier geen enkel praktisch voordeel opleveren en is financieel absoluut niet rendabel. Voor wie drinkwater wil verbeteren, is een osmosefilter of waterfilterkan een betere optie.`,
    aanbeveling: 'Niet aanbevolen',
    aanbevelingKleur: 'lime',
    adviesLabel: 'Waterontharder niet nodig bij matig water',
    jaarKostenZout: 50,
    aanschafKostenLaag: 750,
    aanschafKostenHoog: 1400,
    onderhoudPerJaar: 60,
    kalkEffect: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is kalkopbouw in apparaten minimaal. Verwarmingselementen blijven jarenlang vrij van merkbare kalkafzetting. Een waterontharder zou dit water verder verzachten, maar dat is bij dit niveau geen praktische noodzaak — er is simpelweg nauwelijks kalk om te verwijderen.`,
    tips: [
      'Investeer in een osmosefilter als je drinkwater wilt verbeteren — goedkoper en effectiever dan ontharder',
      'Ontkalken van waterkoker en koffiemachine één à twee keer per jaar is voldoende',
      'Een waterfilterkan is een betaalbare eerste stap voor beter smakend drinkwater',
      'Bespaar op zeep en wasmiddel — matig water vraagt minder dan hard water',
      'Vergelijk waterhardheid in omliggende gemeenten als referentie',
    ],
    ontharderVsOsmose:
      'Bij matig water in deze regio is een waterontharder geen zinvolle investering. De kalkproblematiek is te gering om de aanschaf-, installatie- en onderhoudskosten te rechtvaardigen. Een osmosefilter is wél zinvol als je drinkwater wil verbeteren: het verwijdert chloor, nitraten en eventuele micro-verontreinigingen zonder onnodige complexiteit.',
    faqExtra: [
      {
        question: (naam) => `Waarom is een waterontharder overbodig in ${naam}?`,
        answer: (naam, dH) =>
          `Bij ${dH}°dH in ${naam} is het water van nature zacht genoeg dat kalk nauwelijks een rol speelt. Een waterontharder zou het water nog zachter maken, maar de gezondheidswinst voor apparaten is verwaarloosbaar. De investering (€800–€1.400 aanschaf + installatie) staat niet in verhouding tot het probleem.`,
      },
      {
        question: (naam) => `Wat is wél een goede wateroplossing voor ${naam}?`,
        answer: (naam) =>
          `Voor ${naam} adviseren we een omgekeerde osmosefilter voor zuiver drinkwater — geen kalk, geen chloor, geen nitraten. Dat is de meest praktische en betaalbare ingreep. Voor kalk zijn geen extra maatregelen nodig bij dit hardheidsniveau.`,
      },
    ],
  },
  'zacht': {
    adviesIntro: (naam, dH) =>
      `In ${naam} is een waterontharder absoluut niet nodig. Met ${dH}°dH heeft het leidingwater één van de laagste hardheden van Nederland — kalk is praktisch geen factor. Een waterontharder zou het water nog zachter maken terwijl er al nauwelijks kalk aanwezig is. Bovendien kan zeer zacht water iets agressiever zijn voor leidingen. Investeer liever in een osmosefilter voor zuiver drinkwater.`,
    aanbeveling: 'Niet aanbevolen — overbodig',
    aanbevelingKleur: 'green',
    adviesLabel: 'Waterontharder overbodig bij zacht water',
    jaarKostenZout: 40,
    aanschafKostenLaag: 750,
    aanschafKostenHoog: 1400,
    onderhoudPerJaar: 60,
    kalkEffect: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is er vrijwel geen kalkopbouw in apparaten of leidingen. Waterkokers, koffiemachines en de cv-ketel functioneren op maximale efficiëntie zonder noemenswaardige kalkafzetting. Een waterontharder heeft hier geen kalkprobleem op te lossen.`,
    tips: [
      'Geen waterontharder nodig — het water is al zacht genoeg',
      'Kies een osmosefilter als je drinkwater wilt verbeteren voor smaak en zuiverheid',
      'Profiteer van het zachte water: minder zeep en wasmiddel nodig',
      'Één à twee preventieve ontkalkbeurten per jaar voor waterkoker volstaan',
      'Zacht water is vriendelijk voor je huid en haar — een voordeel bij douchen',
    ],
    ontharderVsOsmose:
      'Bij zacht water is een waterontharder volstrekt overbodig. Een osmosefilter is de relevante keuze als je wilt investeren in waterkwaliteit: het verwijdert chloor, nitraten, eventuele PFAS-sporen en geeft uitstekend smakend drinkwater. Voor kalkbestrijding is geen enkel apparaat nodig.',
    faqExtra: [
      {
        question: (naam) => `Waarom is een waterontharder overbodig in ${naam}?`,
        answer: (naam, dH) =>
          `Het leidingwater in ${naam} heeft slechts ${dH}°dH — dat is zacht water waarbij kalk nauwelijks voorkomt. Een waterontharder lost een probleem op dat er niet is. De hoge aanschaf- en onderhoudskosten zijn volledig niet rendabel bij dit hardheidsniveau.`,
      },
      {
        question: (naam) => `Heeft zacht water in ${naam} nadelen voor leidingen?`,
        answer: (naam, dH) =>
          `Heel licht. Zeer zacht water (onder 4°dH) kan in theorie iets agressiever zijn voor koperen leidingen. Bij ${dH}°dH in ${naam} is dit verschil in de praktijk verwaarloosbaar. Het vormt geen aanleiding om een waterontharder te installeren.`,
      },
    ],
  },
};

function getAdviesClasses(kleur: string): { bg: string; border: string; text: string; badge: string } {
  switch (kleur) {
    case 'red': return { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', badge: 'bg-red-100 text-red-800' };
    case 'orange': return { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-800', badge: 'bg-orange-100 text-orange-800' };
    case 'amber': return { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', badge: 'bg-amber-100 text-amber-800' };
    case 'lime': return { bg: 'bg-lime-50', border: 'border-lime-200', text: 'text-lime-800', badge: 'bg-lime-100 text-lime-800' };
    case 'green': return { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800', badge: 'bg-green-100 text-green-800' };
    default: return { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-800', badge: 'bg-gray-100 text-gray-800' };
  }
}

export default async function WaterOntharderGemeentePage({ params }: PageProps) {
  const { gemeente: slug } = await params;
  const gemeente = getGemeente(slug);
  if (!gemeente) notFound();

  const content = ontharderContent[gemeente.categorie];
  const advies = getAdviesClasses(content.aanbevelingKleur);
  const isHard = gemeente.categorie === 'hard' || gemeente.categorie === 'zeer hard';
  const totaalJaarlijks = content.jaarKostenZout + content.onderhoudPerJaar;

  const faqItems = [
    {
      question: `Heb ik een waterontharder nodig in ${gemeente.naam}?`,
      answer: `Het leidingwater in ${gemeente.naam} heeft een hardheid van ${gemeente.hardheid}°dH, geleverd door ${gemeente.waterbedrijf}. Dit valt in de categorie "${getHardheidLabel(gemeente.categorie).toLowerCase()}". ${
        isHard
          ? `Bij dit hardheidsniveau is een waterontharder sterk aan te raden om leidingen, cv-ketel, boiler en wasmachine te beschermen tegen kalkophoping.`
          : `Bij dit hardheidsniveau is een waterontharder niet strikt noodzakelijk. Voor drinkwater is een osmosefilter een betere en goedkopere keuze.`
      }`,
    },
    {
      question: `Hoe werkt een waterontharder?`,
      answer: `Een waterontharder werkt via ionenwisseling. Leidingwater stroomt door een hars gevuld met natriumionen. De calcium- en magnesiumionen (die kalk veroorzaken) worden vastgehouden door het hars, terwijl natriumionen in ruil worden vrijgegeven. Het uitgangswater is zacht — vrij van kalk. Periodiek wordt het hars geregenereerd met tabletzout, waardoor het calcium wordt afgevoerd en het hars opnieuw klaar is. Het resultaat: geen kalk meer in leidingen, apparaten of op oppervlakken.`,
    },
    {
      question: `Waterontharder of osmosefilter voor ${gemeente.naam}?`,
      answer: content.ontharderVsOsmose,
    },
    {
      question: `Wat kost een waterontharder in ${gemeente.naam}?`,
      answer: `De aanschafkosten voor een waterontharder liggen tussen €${content.aanschafKostenLaag} en €${content.aanschafKostenHoog}, inclusief apparaat maar exclusief installatie (€200–€500). De jaarlijkse lopende kosten bestaan uit tabletzout (ca. €${content.jaarKostenZout}/jaar bij ${gemeente.hardheid}°dH) en onderhoud (ca. €${content.onderhoudPerJaar}/jaar). Totale jaarlijkse kosten na aanschaf: circa €${totaalJaarlijks}.`,
    },
    ...content.faqExtra.map(f => ({
      question: f.question(gemeente.naam),
      answer: f.answer(gemeente.naam, gemeente.hardheid, gemeente.waterbedrijf),
    })),
    {
      question: `Welk waterbedrijf levert water in ${gemeente.naam}?`,
      answer: `${gemeente.waterbedrijf} levert het leidingwater in ${gemeente.naam} met een hardheid van ${gemeente.hardheid}°dH. Nederlandse waterbedrijven zijn niet verplicht de hardheid te verlagen — dat is een individuele keuze van de huiseigenaar.`,
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
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/kennisbank/waterontharder' },
          { name: `Waterontharder ${gemeente.naam}`, url: `https://waterfilterplatform.nl/waterontharder/${gemeente.slug}` },
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
            <Link href="/kennisbank/waterontharder" className="hover:text-[#005F8A]">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>{gemeente.naam}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontharder in {gemeente.naam}: nodig bij {gemeente.hardheid}°dH?
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            {content.adviesIntro(gemeente.naam, gemeente.hardheid)}
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        {/* Advies-card */}
        <section className={`${advies.bg} ${advies.border} border rounded-2xl p-5`}>
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${advies.badge}`}>
                {content.adviesLabel}
              </span>
              <p className={`font-bold text-base ${advies.text}`}>{content.aanbeveling}</p>
            </div>
            <div className="text-right">
              <p className={`text-sm font-mono font-semibold ${advies.text}`}>{gemeente.hardheid}°dH</p>
              <p className={`text-xs ${advies.text} opacity-80`}>{getHardheidLabel(gemeente.categorie)}</p>
            </div>
          </div>
          <p className={`text-sm ${advies.text} opacity-90`}>
            Water geleverd door <strong>{gemeente.waterbedrijf}</strong>. Aanschafkosten ontharder: €{content.aanschafKostenLaag}–€{content.aanschafKostenHoog} + installatie. Jaarlijkse loopkosten: ca. €{totaalJaarlijks} (zout + onderhoud).
          </p>
        </section>

        {/* Hoe werkt een waterontharder */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Hoe werkt een waterontharder?</h2>
          <p className="text-gray-600 text-sm mb-4">
            Een waterontharder gebruikt het principe van <strong>ionenwisseling</strong> om kalk uit leidingwater te verwijderen. Hier is het proces stap voor stap:
          </p>
          <ol className="space-y-3">
            {[
              { stap: '1. Leidingwater instromen', uitleg: 'Hard leidingwater met calcium (Ca²⁺) en magnesium (Mg²⁺) stroomt door een harsbed in de ontharder.' },
              { stap: '2. Ionenwisseling', uitleg: 'Het hars vangt calcium- en magnesiumionen op en geeft natriumionen (Na⁺) terug. Het water verlaat de ontharder als zacht water.' },
              { stap: '3. Zacht water door het huis', uitleg: 'Het onthard water stroomt naar alle kranen, de wasmachine, boiler en cv-ketel — zonder kalkvorming.' },
              { stap: '4. Regeneratie met zout', uitleg: 'Het hars raakt verzadigd. Periodiek spoelt de ontharder zichzelf door met pekelwater (tabletzout), waarna het calcium wordt afgevoerd via het riool.' },
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="shrink-0 w-6 h-6 rounded-full bg-[#005F8A] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{item.stap}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{item.uitleg}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-sm text-gray-500 mt-4">
            Meer achtergrond:{' '}
            <Link href="/kennisbank/waterontharder" className="text-[#005F8A] underline hover:text-[#003F5C]">
              Kennisbank: waterontharder uitgelegd
            </Link>{' '}
            en{' '}
            <Link href="/kennisbank/waterhardheid-verlagen" className="text-[#005F8A] underline hover:text-[#003F5C]">
              waterhardheid verlagen
            </Link>.
          </p>
        </section>

        {/* Ontharder vs Osmose */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Waterontharder vs osmosefilter: wat kiezen?</h2>
          <p className="text-gray-700 text-sm mb-5 leading-relaxed">{content.ontharderVsOsmose}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <p className="font-bold text-[#003F5C] text-sm mb-2">Waterontharder</p>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li className="flex gap-1.5"><span className="text-[#005F8A] shrink-0">✓</span> Beschermt hele huis (leidingen, cv, boiler)</li>
                <li className="flex gap-1.5"><span className="text-[#005F8A] shrink-0">✓</span> Geen kalk op douchewand en kranen</li>
                <li className="flex gap-1.5"><span className="text-red-500 shrink-0">✗</span> Hogere aanschaf- en installatiekosten</li>
                <li className="flex gap-1.5"><span className="text-red-500 shrink-0">✗</span> Voegt natrium toe aan water</li>
                <li className="flex gap-1.5"><span className="text-red-500 shrink-0">✗</span> Vereist regelmatige aanvulling zout</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-[#005F8A] p-4">
              <p className="font-bold text-[#003F5C] text-sm mb-2">Osmosefilter</p>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li className="flex gap-1.5"><span className="text-[#005F8A] shrink-0">✓</span> Puur drinkwater (99% kalk, chloor, nitraat weg)</li>
                <li className="flex gap-1.5"><span className="text-[#005F8A] shrink-0">✓</span> Lagere aanschaf- en onderhoudskosten</li>
                <li className="flex gap-1.5"><span className="text-[#005F8A] shrink-0">✓</span> Geen zout nodig</li>
                <li className="flex gap-1.5"><span className="text-red-500 shrink-0">✗</span> Alleen keukenkraan, niet hele huis</li>
                <li className="flex gap-1.5"><span className="text-red-500 shrink-0">✗</span> Geen bescherming cv of wasmachine</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:text-[#003F5C]">
              Vergelijk osmosesystemen
            </Link>{' '}
            of lees meer over{' '}
            <Link href="/kennisbank/kalk-verwijderen-water" className="text-[#005F8A] underline hover:text-[#003F5C]">
              kalk verwijderen uit water
            </Link>.
          </p>
        </section>

        {/* Kosten waterontharder */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Kosten waterontharder in {gemeente.naam}</h2>
          <p className="text-gray-600 text-sm mb-4">
            Bij {gemeente.hardheid}°dH in {gemeente.naam} zijn dit de verwachte kosten voor aanschaf, installatie en jaarlijks gebruik:
          </p>
          <div className="space-y-0">
            {[
              { post: 'Aanschaf waterontharder', bedrag: `€${content.aanschafKostenLaag}–€${content.aanschafKostenHoog}`, note: 'eenmalig' },
              { post: 'Installatie (erkend installateur)', bedrag: '€200–€500', note: 'eenmalig' },
              { post: 'Tabletzout per jaar', bedrag: `ca. €${content.jaarKostenZout}`, note: `bij ${gemeente.hardheid}°dH` },
              { post: 'Jaarlijks onderhoud', bedrag: `ca. €${content.onderhoudPerJaar}`, note: 'servicebeurt' },
              { post: 'Totale jaarlijkse loopkosten', bedrag: `ca. €${totaalJaarlijks}`, note: 'na aanschaf' },
            ].map((item, i) => (
              <div key={i} className={`flex justify-between items-center py-3 text-sm ${i < 4 ? 'border-b border-gray-100' : 'font-semibold text-gray-800 pt-3'}`}>
                <span className="text-gray-700">{item.post}</span>
                <span className="flex flex-col items-end gap-0.5">
                  <span className="font-mono text-gray-800">{item.bedrag}</span>
                  <span className="text-xs text-gray-400">{item.note}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Effect op kalk */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Effect van kalk op apparaten in {gemeente.naam}</h2>
          <p className="text-gray-600 text-sm mb-4">{content.kalkEffect(gemeente.naam, gemeente.hardheid)}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                label: 'CV-ketel & boiler',
                effect: isHard ? 'Versnelde slijtage warmtewisselaar, rendementsverlies' : 'Minimale impact, lange levensduur verwacht',
                icon: '🔥',
                urgent: isHard,
              },
              {
                label: 'Wasmachine & vaatwasser',
                effect: isHard ? 'Extra wasmiddel nodig, pomp en verwarmingselement slijten sneller' : 'Geen noemenswaardig effect bij dit hardheidsniveau',
                icon: '🫧',
                urgent: isHard,
              },
              {
                label: 'Waterkoker & koffiemachine',
                effect: isHard ? 'Kalkkorst op element binnen weken, frequente ontkalking nodig' : 'Weinig aanslag, halfjaarlijkse ontkalking volstaat',
                icon: '☕',
                urgent: gemeente.categorie === 'zeer hard',
              },
              {
                label: 'Douchekop & kranen',
                effect: isHard ? 'Verstoppingen en witte aanslag snel zichtbaar, regelmatig ontkalken' : 'Nauwelijks aanslag, zeldzame reiniging nodig',
                icon: '🚿',
                urgent: gemeente.categorie === 'zeer hard',
              },
            ].map(item => (
              <div key={item.label} className={`rounded-xl p-4 flex gap-3 border ${item.urgent ? 'bg-red-50 border-red-100' : 'bg-gray-50 border-gray-100'}`}>
                <span className="text-xl shrink-0">{item.icon}</span>
                <div>
                  <p className={`font-semibold text-sm ${item.urgent ? 'text-red-800' : 'text-gray-800'}`}>{item.label}</p>
                  <p className={`text-xs mt-0.5 ${item.urgent ? 'text-red-700' : 'text-gray-600'}`}>{item.effect}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Zie ook:{' '}
            <Link href={`/waterhardheid/${gemeente.slug}`} className="text-[#005F8A] underline hover:text-[#003F5C]">
              waterhardheid in {gemeente.naam}
            </Link>.
          </p>
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Tips voor {gemeente.naam} ({gemeente.hardheid}°dH)</h2>
          <ul className="space-y-2">
            {content.tips.map((tip, i) => (
              <li key={i} className="flex gap-2 items-start text-sm text-gray-700">
                <span className="text-[#005F8A] font-bold mt-0.5 shrink-0">→</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        {isHard ? (
          <div className={`${advies.bg} ${advies.border} border rounded-2xl p-5`}>
            <p className={`font-bold text-base ${advies.text} mb-2`}>
              Kalk aanpakken in {gemeente.naam}?
            </p>
            <p className={`${advies.text} opacity-90 text-sm mb-4`}>
              Bij {gemeente.hardheid}°dH is actie aan te raden. Een omgekeerde osmose filter geeft puur drinkwater zonder kalk, chloor of nitraten — direct op je keukenkraan. Voor volledige huisbescherming is een centrale waterontharder de aanvulling.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/omgekeerde-osmose/kopen"
                className="inline-block bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
              >
                Osmosefilters vergelijken →
              </Link>
              <Link
                href="/waterontharder"
                className={`inline-block border ${advies.border} ${advies.text} font-semibold px-5 py-2.5 rounded-xl hover:bg-white transition-colors text-sm`}
              >
                Waterontharder opties
              </Link>
            </div>
          </div>
        ) : (
          <CTABanner context="waterhardheid" variant="compact" />
        )}

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-3">Meer over waterontharders en waterfilters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kennisbank/waterontharder', label: 'Kennisbank: waterontharder', desc: 'Werking, types, kosten en voor- en nadelen uitgelegd' },
              { href: '/kennisbank/waterhardheid-verlagen', label: 'Waterhardheid verlagen', desc: 'Alle methoden om hard water zacht te maken' },
              { href: `/waterhardheid/${gemeente.slug}`, label: `Waterhardheid ${gemeente.naam}`, desc: `${gemeente.hardheid}°dH — achtergrond en advies` },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmosefilter kopen', desc: 'Vergelijk de beste osmosesystemen voor thuis' },
              { href: '/kennisbank/kalk-verwijderen-water', label: 'Kalk verwijderen uit water', desc: 'Ontharder, osmose en andere methoden vergeleken' },
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
            <h2 className="text-xl font-bold text-[#003F5C] mb-3">Waterontharder in andere gemeenten in {gemeente.provincie}</h2>
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
                    href={`/waterontharder/${g.slug}`}
                    className={`text-sm border rounded-full px-3 py-1.5 hover:shadow-sm transition-shadow ${kleur}`}
                  >
                    {g.naam} ({g.hardheid}°)
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <GemeenteLinks gemeente={gemeente} currentPath="waterontharder" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over waterontharder in {gemeente.naam}</h2>
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
