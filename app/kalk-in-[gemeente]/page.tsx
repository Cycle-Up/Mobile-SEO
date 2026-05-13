import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { gemeenten, getGemeente, getHardheidLabel, type Hardheid } from '@/data/gemeenten';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

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

  return {
    title: `Kalk in ${gemeente.naam}: oorzaken, gevolgen & oplossing`,
    description: `Last van kalkaanslag in ${gemeente.naam}? Het water heeft ${gemeente.hardheid}°dH (${getHardheidLabel(gemeente.categorie).toLowerCase()}). Lees over witte aanslag, schade aan apparaten en de beste manier om kalk te verwijderen.`,
    alternates: { canonical: `https://waterfilterplatform.nl/kalk-in-${gemeente.slug}` },
    openGraph: {
      title: `Kalk in ${gemeente.naam} — oorzaken, kosten en oplossing`,
      description: `Witte kalkaanslag in ${gemeente.naam} bij ${gemeente.hardheid}°dH leidingwater. Ontdek wat kalk je kost en hoe je het structureel oplost.`,
    },
  };
}

interface KalkContent {
  probleem: (naam: string, dH: number) => string;
  zichtbareTekens: string[];
  apparaatSchade: (naam: string, dH: number) => string;
  jaarKostenLaag: number;
  jaarKostenHoog: number;
  ontkalkFrequentie: string;
  oplossingTekst: (naam: string, dH: number) => string;
  oplossingen: { titel: string; uitleg: string }[];
  ernstNiveau: string;
  ernstKleur: string;
  faqExtra: { question: (naam: string) => string; answer: (naam: string, dH: number, waterbedrijf: string) => string }[];
}

const kalkContent: Record<Hardheid, KalkContent> = {
  'zeer hard': {
    probleem: (naam, dH) =>
      `Kalkaanslag in ${naam} is een hardnekkig en dagelijks zichtbaar probleem. Met ${dH}°dH behoort het leidingwater tot de hardste van Nederland — elke druppel die opdroogt op een kraan, douchewand of glas laat een witte calciumlaag achter. Binnen enkele dagen na het schoonmaken zie je de aanslag alweer terugkomen. Voor inwoners van ${naam} is kalk niet alleen een schoonmaakprobleem, maar een directe kostenpost en bron van apparaatschade.`,
    zichtbareTekens: [
      'Witte vlekken op kranen, douchekop en glaswerk binnen 24 uur na schoonmaken',
      'Hardnekkige kalkring rond het wateroppervlak in waterkoker en pannen',
      'Doffe glazen uit de vaatwasser ondanks glansspoelmiddel',
      'Witte aanslag op zwarte tegels, granieten aanrechtblad en RVS-spoelbak',
      'Verstopte douchekoppen en stroef draaiende kranen door kalkophoping',
    ],
    apparaatSchade: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} bouwt kalk zich razendsnel op rond verwarmingselementen. Elke millimeter kalk op een element verhoogt het energieverbruik met circa 8–10%. Waterkokers verliezen 30% van hun efficiëntie binnen een jaar zonder ontkalken; vaatwassers en wasmachines lopen risico op dure reparaties aan de boiler of pomp. CV-ketels in ${naam} ervaren versnelde slijtage in de warmtewisselaar.`,
    jaarKostenLaag: 350,
    jaarKostenHoog: 700,
    ontkalkFrequentie: 'elke 4 tot 6 weken',
    oplossingTekst: (naam, dH) =>
      `Bij zeer hard water (${dH}°dH) in ${naam} is structureel ontkalken alleen onvoldoende — je vecht tegen de symptomen. Een omgekeerde osmose filter verwijdert tot 99% van het calcium en magnesium uit je drinkwater en kookwater. Voor de rest van de woning is een waterontharder in de meterkast de meest complete oplossing.`,
    oplossingen: [
      { titel: 'Omgekeerde osmose filter', uitleg: 'Verwijdert calcium en magnesium uit drink- en kookwater. Geen kalkaanslag meer in waterkoker, koffiemachine of pan.' },
      { titel: 'Waterontharder (centraal)', uitleg: 'Behandelt het hele huis. Beschermt CV-ketel, wasmachine en boiler. Vereist installatie in meterkast en zoutaanvulling.' },
      { titel: 'Citroenzuur of azijn', uitleg: 'Goedkoop natuurlijk ontkalkingsmiddel voor kranen en kookgerei. Werkt symptomatisch — kalk komt terug.' },
      { titel: 'Antikalk-magneten', uitleg: 'Weinig wetenschappelijk bewijs voor effectiviteit. Niet aanbevolen als hoofdoplossing bij zeer hard water.' },
    ],
    ernstNiveau: 'Zeer hoog',
    ernstKleur: 'red',
    faqExtra: [
      {
        question: (naam) => `Waarom is er zoveel kalk in ${naam}?`,
        answer: (naam, dH, waterbedrijf) =>
          `Het leidingwater in ${naam} wordt door ${waterbedrijf} geleverd en heeft een hardheid van ${dH}°dH. Deze hoge mineraalconcentratie ontstaat omdat het water in deze regio veel calcium en magnesium opneemt uit de ondergrond (vaak kalkrijke bodemlagen). De waterzuivering richt zich op veiligheid en niet op het verlagen van de hardheid.`,
      },
      {
        question: (naam) => `Hoeveel kost kalk mij per jaar in ${naam}?`,
        answer: (_naam, dH) =>
          `Bij ${dH}°dH lopen de extra kosten al snel op tot €350–€700 per jaar. Denk aan: hoger energieverbruik door aangetaste verwarmingselementen (€100–€250), extra wasmiddel en zeep (€60–€120), ontkalkers en glansspoelmiddel (€40–€80), en versnelde vervanging van waterkoker, douchekop en kranen (€100–€250 gemiddeld per jaar uitgesmeerd).`,
      },
      {
        question: (naam) => `Helpt vaker poetsen tegen kalk in ${naam}?`,
        answer: (naam, dH) =>
          `Vaker poetsen helpt cosmetisch, maar lost het onderliggende probleem in ${naam} niet op. Bij ${dH}°dH komt de kalk binnen een dag terug. Bovendien beschermt poetsen je apparaten niet — daar zet de kalk zich onzichtbaar af op verwarmingselementen.`,
      },
    ],
  },
  'hard': {
    probleem: (naam, dH) =>
      `Kalkaanslag in ${naam} is een merkbaar probleem. Met ${dH}°dH leidingwater zie je dagelijks de gevolgen: witte vlekken op de douchewand, een grijswitte rand in de waterkoker en doffe glazen uit de vaatwasser. Het is niet de allerergste situatie in Nederland, maar wel uitgesproken genoeg om actief aan te pakken.`,
    zichtbareTekens: [
      'Witte vlekken op kranen en glaswerk binnen 2–3 dagen na schoonmaken',
      'Duidelijke kalkrand in waterkoker na 1 week gebruik',
      'Aanslag op douchewand en glazen schuifdeuren',
      'Hardnekkige strepen op donkere keukenoppervlakken',
      'Vermindering van schuimwerking van zeep en shampoo',
    ],
    apparaatSchade: (naam, dH) =>
      `In ${naam} versnelt kalk de slijtage van warmwaterapparaten met circa 20–30%. Bij ${dH}°dH zet zich binnen een halfjaar een merkbare laag af op verwarmingselementen. Dit verhoogt het energieverbruik geleidelijk en verkort de levensduur van waterkoker, koffiezetapparaat en boiler. Vaatwassers verbruiken meer zout en glansspoelmiddel.`,
    jaarKostenLaag: 200,
    jaarKostenHoog: 400,
    ontkalkFrequentie: 'elke 6 tot 8 weken',
    oplossingTekst: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is een omgekeerde osmose filter de slimste investering voor drink- en kookwater. Het verwijdert kalkbronnen volledig uit het water dat je drinkt, kookt en in koffie/thee gebruikt. Voor douche en wasmachine helpt regelmatig ontkalken al veel.`,
    oplossingen: [
      { titel: 'Omgekeerde osmose filter', uitleg: 'Beste oplossing voor drink- en kookwater. Beschermt waterkoker en koffiemachine 100%.' },
      { titel: 'Ontkalken met citroenzuur', uitleg: 'Goedkoop en effectief voor wekelijks onderhoud van kranen, douchekop en kookgerei.' },
      { titel: 'Glansspoelmiddel en zout vaatwasser', uitleg: 'Onmisbaar bij hard water. Verhoog de zoutdosering tot het maximum.' },
      { titel: 'Waterontharder centraal', uitleg: 'Optie voor wie volledige bescherming wil, maar vereist investering en onderhoud.' },
    ],
    ernstNiveau: 'Hoog',
    ernstKleur: 'orange',
    faqExtra: [
      {
        question: (naam) => `Wat is de beste manier om kalk in ${naam} structureel aan te pakken?`,
        answer: (naam, dH) =>
          `In ${naam} met ${dH}°dH water is een omgekeerde osmose filter de meest efficiënte oplossing voor drink- en kookwater. Voor wie het hele huis wil beschermen, is een waterontharder in de meterkast aanvullend interessant. Beide oplossingen samen zijn complementair: osmose voor pure drinkwaterkwaliteit, ontharder voor de bescherming van leidingen en apparaten.`,
      },
      {
        question: (naam) => `Beschadigt kalk mijn cv-ketel in ${naam}?`,
        answer: (naam, dH) =>
          `Bij ${dH}°dH in ${naam} bouwt kalk zich op in de warmtewisselaar van de cv-ketel. Dit verlaagt het rendement met enkele procenten per jaar en kan op termijn (na 8–15 jaar) leiden tot vroegtijdige vervanging. Een jaarlijkse onderhoudsbeurt is bij dit hardheidsniveau aan te raden.`,
      },
      {
        question: (naam) => `Is kalk in ${naam} schadelijk voor mijn gezondheid?`,
        answer: (naam) =>
          `Nee, het drinken van kalkrijk water in ${naam} is niet schadelijk. Calcium en magnesium zijn gezonde mineralen. Kalk is vooral een esthetisch en technisch probleem — voor apparaten en oppervlakken, niet voor je lichaam.`,
      },
    ],
  },
  'matig hard': {
    probleem: (naam, dH) =>
      `Kalkaanslag in ${naam} is aanwezig maar beheersbaar. Met ${dH}°dH leidingwater zie je af en toe witte vlekken op kranen en in de waterkoker, maar het is geen dagelijkse strijd. Wel loont het om er bewust mee om te gaan zodat je apparaten optimaal blijven werken en de keuken er strak uit blijft zien.`,
    zichtbareTekens: [
      'Lichte witte vlekken op kranen en glaswerk na een week zonder schoonmaken',
      'Dunne kalkring in waterkoker na 2–3 weken gebruik',
      'Minimale aanslag op douchewand',
      'Glazen uit vaatwasser meestal helder met glansspoelmiddel',
      'Zeep en shampoo schuimen normaal',
    ],
    apparaatSchade: (naam, dH) =>
      `In ${naam} is de impact van kalk op apparaten beperkt. Bij ${dH}°dH zie je pas na maanden een dunne kalklaag op verwarmingselementen. Met kwartaalse ontkalking blijven waterkoker en koffiemachine optimaal werken. De impact op CV-ketel en wasmachine is matig.`,
    jaarKostenLaag: 80,
    jaarKostenHoog: 180,
    ontkalkFrequentie: 'elk kwartaal',
    oplossingTekst: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is een omgekeerde osmose filter niet strikt noodzakelijk om kalk te bestrijden. Wel zorgt zo'n filter voor pure drinkwaterkwaliteit zonder chloor, nitraten of microplastics. Voor de bescherming van apparaten volstaat in deze regio regelmatig preventief ontkalken.`,
    oplossingen: [
      { titel: 'Kwartaalse ontkalking', uitleg: 'Belangrijkste maatregel. Citroenzuur of azijn voor waterkoker, kraan en douchekop.' },
      { titel: 'Glansspoelmiddel vaatwasser', uitleg: 'Houdt glazen helder. Standaard dosering volstaat.' },
      { titel: 'Omgekeerde osmose filter', uitleg: 'Vooral interessant voor smaak en zuiverheid van drinkwater, minder voor kalkbestrijding.' },
      { titel: 'Waterfilterkan', uitleg: 'Goedkope eerste stap voor betere smaak en lichte kalkreductie in drinkwater.' },
    ],
    ernstNiveau: 'Gemiddeld',
    ernstKleur: 'amber',
    faqExtra: [
      {
        question: (naam) => `Heb ik in ${naam} echt een osmosefilter nodig tegen kalk?`,
        answer: (naam, dH) =>
          `Bij ${dH}°dH in ${naam} is een osmosefilter niet noodzakelijk om kalkproblemen op te lossen. Met kwartaalse ontkalking houd je apparaten goed in conditie. Een osmosefilter is wel zinvol als je waarde hecht aan extra zuiverheid van drinkwater (chloor- en nitraatverwijdering).`,
      },
      {
        question: (naam) => `Wat is het verschil tussen kalkaanslag en watervlekken in ${naam}?`,
        answer: (naam) =>
          `In ${naam} zie je beide regelmatig. Watervlekken zijn opgedroogde druppels die je makkelijk wegveegt; kalkaanslag is de ingebakken witte laag die overblijft als water steeds op dezelfde plek opdroogt. Bij matig hard water gaat vooral om watervlekken — kalkaanslag ontstaat alleen op plekken die je nooit afdroogt.`,
      },
    ],
  },
  'matig': {
    probleem: (naam, dH) =>
      `Kalkaanslag in ${naam} is nauwelijks een probleem. Met ${dH}°dH leidingwater zie je zelden witte vlekken en blijft de waterkoker maandenlang schoon. Toch bevat het water mineralen die op den duur sporen achterlaten, vooral op plekken waar water regelmatig opdroogt zonder afgeveegd te worden.`,
    zichtbareTekens: [
      'Heel lichte vlekken op kranen — alleen merkbaar zonder schoonmaken gedurende weken',
      'Vrijwel geen kalkring in waterkoker bij normaal gebruik',
      'Glaswerk komt vrijwel helder uit de vaatwasser',
      'Geen aanslag op douchewand bij normaal gebruik',
      'Zeep en shampoo schuimen uitstekend — minder product nodig',
    ],
    apparaatSchade: (naam, dH) =>
      `In ${naam} is de invloed van kalk op apparaten minimaal. Bij ${dH}°dH blijven verwarmingselementen jarenlang vrijwel kalkvrij. Waterkoker en koffiemachine vereisen alleen een preventieve ontkalking ongeveer twee keer per jaar. De levensduur van apparaten wordt nauwelijks beïnvloed.`,
    jaarKostenLaag: 25,
    jaarKostenHoog: 80,
    ontkalkFrequentie: '1 à 2 keer per jaar',
    oplossingTekst: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is kalk geen reden voor een filter. Een omgekeerde osmose filter is hier vooral relevant voor smaak (chloorverwijdering), zuiverheid en gemoedsrust over micro-verontreinigingen. Voor de paar kalkvlekjes die je tegenkomt, volstaat een microvezeldoek en wat citroensap.`,
    oplossingen: [
      { titel: 'Preventief ontkalken (halfjaarlijks)', uitleg: 'Een korte ontkalkbeurt van waterkoker en koffiemachine houdt apparaten optimaal.' },
      { titel: 'Microvezeldoek', uitleg: 'De simpelste oplossing tegen incidentele vlekken op kranen en glas.' },
      { titel: 'Omgekeerde osmose filter', uitleg: 'Niet voor kalk, wel voor pure drinkwaterkwaliteit zonder chloorsmaak.' },
      { titel: 'Geen waterontharder', uitleg: 'Bij dit hardheidsniveau is een centrale waterontharder overdreven en niet rendabel.' },
    ],
    ernstNiveau: 'Laag',
    ernstKleur: 'lime',
    faqExtra: [
      {
        question: (naam) => `Krijg ik in ${naam} überhaupt kalkaanslag?`,
        answer: (naam, dH) =>
          `Bij ${dH}°dH in ${naam} is kalkaanslag minimaal. Je ziet hooguit wat vlekken op kranen of glaswerk als je weken niet schoonmaakt, maar de zware ingebakken kalk uit hardere regio's komt hier niet voor.`,
      },
      {
        question: (naam) => `Waarom ontkalken als er nauwelijks kalk is in ${naam}?`,
        answer: (naam) =>
          `Zelfs in ${naam} bouwt zich na verloop van tijd een dunne kalkkorrel op in de waterkoker. Eén of twee preventieve ontkalkbeurten per jaar voorkomt dat — vooral belangrijk voor de smaak van koffie en thee.`,
      },
    ],
  },
  'zacht': {
    probleem: (naam, dH) =>
      `Kalkaanslag in ${naam} is praktisch geen probleem. Met ${dH}°dH heeft het leidingwater een van de laagste hardheden van Nederland. Kranen, douchewanden en waterkokers blijven van zichzelf vrijwel kalkvrij. Wel betekent zacht water dat eventueel chloor of andere stoffen relatief meer aanwezig zijn in de smaak.`,
    zichtbareTekens: [
      'Vrijwel geen witte vlekken op kranen of glaswerk',
      'Schone waterkoker zonder zichtbare aanslag, ook na maanden gebruik',
      'Helder glaswerk uit vaatwasser zonder glansspoelmiddel',
      'Geen kalkring op douchewand of in toilet',
      'Zeep en shampoo schuimen overvloedig — duidelijke besparing op wasmiddel',
    ],
    apparaatSchade: (naam, dH) =>
      `In ${naam} is de levensduur van warmwaterapparaten optimaal. Bij ${dH}°dH blijven verwarmingselementen jarenlang vrij van kalkafzetting. Waterkokers, koffiemachines, wasmachines en CV-ketels werken op maximale efficiëntie zonder noemenswaardige kalkdegradatie. Onderhoud is minimaal nodig.`,
    jaarKostenLaag: 0,
    jaarKostenHoog: 30,
    ontkalkFrequentie: 'jaarlijks of minder',
    oplossingTekst: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is kalk niet de reden voor een waterfilter. Een omgekeerde osmose filter is hier waardevol vanwege smaak (chloorverwijdering) en zuiverheid (nitraten, microplastics, eventuele PFAS-sporen). Tegen kalk hoef je niets te doen — geniet van het zachte water.`,
    oplossingen: [
      { titel: 'Geen actie nodig tegen kalk', uitleg: 'Op enkele preventieve ontkalkbeurten per jaar na is geen ingreep noodzakelijk.' },
      { titel: 'Omgekeerde osmose voor smaak', uitleg: 'Verwijdert chloor en eventuele micro-verontreinigingen. Niet nodig voor kalkbestrijding.' },
      { titel: 'Koolstoffilter', uitleg: 'Goedkoop alternatief voor enkel smaakverbetering — pakt chloor aan.' },
      { titel: 'Bewaar de zeepbesparing', uitleg: 'Zacht water vraagt 30% minder wasmiddel. Doseer bewust om te besparen.' },
    ],
    ernstNiveau: 'Zeer laag',
    ernstKleur: 'green',
    faqExtra: [
      {
        question: (naam) => `Waarom heeft ${naam} zo weinig kalk in het water?`,
        answer: (naam, dH, waterbedrijf) =>
          `${waterbedrijf} levert het leidingwater in ${naam} met een lage hardheid van slechts ${dH}°dH. De ondergrond in deze regio bevat weinig kalkrijke lagen, waardoor het opgepompte water van nature mineraalarm is. Dat is voordelig voor apparaten en zeepverbruik.`,
      },
      {
        question: (naam) => `Heeft zacht water in ${naam} nadelen?`,
        answer: (naam) =>
          `Heel weinig. Sommige mensen ervaren zacht water als 'minder vol' van smaak. Daarnaast kan zeer zacht water iets agressiever zijn voor koperen leidingen — maar in ${naam} is de hardheid niet zo laag dat dit een praktisch probleem vormt.`,
      },
    ],
  },
};

function getErnstClasses(kleur: string): { bg: string; border: string; text: string } {
  switch (kleur) {
    case 'red': return { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800' };
    case 'orange': return { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-800' };
    case 'amber': return { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800' };
    case 'lime': return { bg: 'bg-lime-50', border: 'border-lime-200', text: 'text-lime-800' };
    case 'green': return { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800' };
    default: return { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-800' };
  }
}

export default async function KalkInGemeentePage({ params }: PageProps) {
  const { gemeente: slug } = await params;
  const gemeente = getGemeente(slug);
  if (!gemeente) notFound();

  const content = kalkContent[gemeente.categorie];
  const ernst = getErnstClasses(content.ernstKleur);
  const isHard = gemeente.categorie === 'hard' || gemeente.categorie === 'zeer hard';

  const faqItems = [
    {
      question: `Hoeveel kalk zit er in het water van ${gemeente.naam}?`,
      answer: `Het leidingwater in ${gemeente.naam} heeft een hardheid van ${gemeente.hardheid}°dH, geleverd door ${gemeente.waterbedrijf}. Dit valt in de categorie "${getHardheidLabel(gemeente.categorie).toLowerCase()}". Hoe hoger de °dH-waarde, hoe meer calcium en magnesium het water bevat — en dus hoe meer kalkaanslag je kunt verwachten.`,
    },
    {
      question: `Hoe krijg ik kalk weg in ${gemeente.naam}?`,
      answer: `Voor losse kalkaanslag op kranen, douchekop en waterkoker in ${gemeente.naam} werkt citroenzuur of schoonmaakazijn uitstekend. Laat het 15–30 minuten inwerken en spoel goed na. Voor structurele bestrijding van kalk bij ${gemeente.hardheid}°dH is een omgekeerde osmose filter de meest effectieve oplossing — het verwijdert kalk uit het water voordat het in je apparaten terechtkomt.`,
    },
    {
      question: `Wat kost kalkbestrijding mij jaarlijks in ${gemeente.naam}?`,
      answer: `Bij ${gemeente.hardheid}°dH in ${gemeente.naam} liggen de jaarlijkse kalkkosten naar schatting tussen €${content.jaarKostenLaag} en €${content.jaarKostenHoog}. Dit omvat extra energieverbruik, ontkalkers, glansspoelmiddel, wasmiddel en versnelde slijtage van apparaten. Een eenmalige investering in een osmosefilter verdient zich daardoor doorgaans binnen enkele jaren terug.`,
    },
    ...content.faqExtra.map(f => ({
      question: f.question(gemeente.naam),
      answer: f.answer(gemeente.naam, gemeente.hardheid, gemeente.waterbedrijf),
    })),
    {
      question: `Welk waterbedrijf is verantwoordelijk voor het water in ${gemeente.naam}?`,
      answer: `${gemeente.waterbedrijf} levert het drinkwater in ${gemeente.naam}. Het bedrijf zorgt voor zuivering en distributie volgens de Nederlandse drinkwaternormen. De waterhardheid (${gemeente.hardheid}°dH) wordt door ${gemeente.waterbedrijf} niet kunstmatig verlaagd — daarvoor moet je zelf een osmosefilter of waterontharder installeren.`,
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
          { name: 'Kalk per gemeente', url: 'https://waterfilterplatform.nl/kennisbank/kalk-in-huis' },
          { name: `Kalk in ${gemeente.naam}`, url: `https://waterfilterplatform.nl/kalk-in-${gemeente.slug}` },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kennisbank/kalk-in-huis" className="hover:text-[#005F8A]">Kalk in huis</Link>
            <span className="mx-2">/</span>
            <span>Kalk in {gemeente.naam}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kalk in {gemeente.naam}: oorzaken, gevolgen & oplossing
          </h1>
          <p className="text-gray-600 text-lg">
            {content.probleem(gemeente.naam, gemeente.hardheid)}
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        {/* Ernst-card */}
        <section className={`${ernst.bg} ${ernst.border} border rounded-2xl p-5`}>
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <p className={`font-bold ${ernst.text}`}>Kalkprobleem in {gemeente.naam}: {content.ernstNiveau}</p>
            <p className={`text-sm ${ernst.text}`}>{gemeente.hardheid}°dH · {getHardheidLabel(gemeente.categorie)}</p>
          </div>
          <p className={`text-sm ${ernst.text} opacity-90`}>
            Drinkwater wordt geleverd door <strong>{gemeente.waterbedrijf}</strong>. Geschatte jaarlijkse kalkkosten: €{content.jaarKostenLaag}–€{content.jaarKostenHoog}. Aanbevolen ontkalkfrequentie: {content.ontkalkFrequentie}.
          </p>
        </section>

        {/* Zichtbare tekens */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Zo herken je kalk in {gemeente.naam}</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Bij {gemeente.hardheid}°dH leidingwater in {gemeente.naam} zijn deze tekens het meest typerend. Let er bewust op — dan weet je snel of jouw situatie overeenkomt met de regionale gemiddelden.
          </p>
          <ul className="space-y-2">
            {content.zichtbareTekens.map((teken, i) => (
              <li key={i} className="flex gap-2 items-start text-sm text-gray-700">
                <span className="text-[#005F8A] font-bold mt-0.5 shrink-0">✓</span>
                <span>{teken}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Apparaatschade */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Wat kalk doet met je apparaten in {gemeente.naam}</h2>
          <p className="text-gray-600 mb-4 text-sm">{content.apparaatSchade(gemeente.naam, gemeente.hardheid)}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Waterkoker', tekst: `Verwarmingselement raakt bedekt met kalkkorst — energieverbruik stijgt 8–10% per mm afzetting.`, icon: '🫖' },
              { label: 'Koffiemachine', tekst: `Kalk in interne leidingen beïnvloedt de extractietijd en smaak van je koffie.`, icon: '☕' },
              { label: 'Vaatwasser', tekst: `Hogere zoutbehoefte en doffe glazen. Pompcomponenten slijten sneller.`, icon: '🍽️' },
              { label: 'Cv-ketel & boiler', tekst: `Kalkafzetting in warmtewisselaar verlaagt rendement met enkele procenten per jaar.`, icon: '🔥' },
            ].map(item => (
              <div key={item.label} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <span className="text-xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{item.label}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{item.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Financiële impact */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-bold text-[#003F5C] mb-3">Financiële impact van kalk in {gemeente.naam}</h2>
          <p className="text-gray-700 text-sm mb-4">
            Onderschat de jaarlijkse kosten van kalk niet. Bij <strong>{gemeente.hardheid}°dH</strong> in {gemeente.naam} loopt het totaal op tot tussen <strong>€{content.jaarKostenLaag} en €{content.jaarKostenHoog} per jaar</strong>. Hieronder een uitsplitsing van de belangrijkste kostenposten:
          </p>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li className="flex justify-between gap-3 border-b border-gray-200 py-1.5"><span>Hoger energieverbruik (waterkoker, boiler, cv)</span><span className="font-mono text-gray-500">€{Math.round(content.jaarKostenLaag * 0.35)}–€{Math.round(content.jaarKostenHoog * 0.4)}</span></li>
            <li className="flex justify-between gap-3 border-b border-gray-200 py-1.5"><span>Extra wasmiddel, zeep en glansspoelmiddel</span><span className="font-mono text-gray-500">€{Math.round(content.jaarKostenLaag * 0.2)}–€{Math.round(content.jaarKostenHoog * 0.25)}</span></li>
            <li className="flex justify-between gap-3 border-b border-gray-200 py-1.5"><span>Ontkalkers en schoonmaakmiddelen</span><span className="font-mono text-gray-500">€{Math.round(content.jaarKostenLaag * 0.15)}–€{Math.round(content.jaarKostenHoog * 0.15)}</span></li>
            <li className="flex justify-between gap-3 py-1.5"><span>Versnelde slijtage en vervanging apparaten</span><span className="font-mono text-gray-500">€{Math.round(content.jaarKostenLaag * 0.3)}–€{Math.round(content.jaarKostenHoog * 0.2)}</span></li>
          </ul>
        </section>

        {/* Oplossingen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Oplossingen voor kalk in {gemeente.naam}</h2>
          <p className="text-gray-600 text-sm mb-4">{content.oplossingTekst(gemeente.naam, gemeente.hardheid)}</p>
          <div className="space-y-3">
            {content.oplossingen.map((opl, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-1">{i + 1}. {opl.titel}</h3>
                <p className="text-sm text-gray-600">{opl.uitleg}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA afhankelijk van hardheid */}
        {isHard ? (
          <div className={`${ernst.bg} ${ernst.border} border rounded-2xl p-5`}>
            <p className={`font-bold ${ernst.text} mb-2`}>
              Stop kalkaanslag in {gemeente.naam} bij de bron
            </p>
            <p className={`${ernst.text} opacity-90 text-sm mb-4`}>
              Met {gemeente.hardheid}°dH water is dweilen met de kraan open. Een omgekeerde osmose filter van PureAqua verwijdert tot 99% van het calcium en magnesium uit je drink- en kookwater. Geen kalkaanslag meer in waterkoker, koffie of pan.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.pureaqua.nl"
                target="_blank"
                rel="noopener"
                className={`inline-block bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm`}
              >
                Bekijk PureAqua osmosefilter →
              </a>
              <Link href="/omgekeerde-osmose/kopen" className={`inline-block border ${ernst.border} ${ernst.text} font-semibold px-5 py-2.5 rounded-xl hover:bg-white transition-colors text-sm`}>
                Vergelijk osmose systemen
              </Link>
            </div>
          </div>
        ) : (
          <CTABanner context="waterhardheid" variant="compact" />
        )}

        {/* Interne links kennisbank */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-3">Meer over kalk en waterfilters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: `/waterhardheid/${gemeente.slug}`, label: `Waterhardheid ${gemeente.naam}`, desc: `Achtergrond, °dH en advies per categorie` },
              { href: '/kennisbank/kalk-in-huis', label: 'Kalk in huis', desc: 'Algemene gids over kalk, gevolgen en kosten' },
              { href: '/kennisbank/kalk-verwijderen-water', label: 'Kalk verwijderen uit water', desc: 'Methoden vergeleken: ontharder, osmose, filter' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose filter kopen', desc: 'Vergelijk de beste osmosesystemen' },
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
            <h2 className="text-xl font-bold text-[#003F5C] mb-3">Kalk in andere gemeenten in {gemeente.provincie}</h2>
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
                    href={`/kalk-in-${g.slug}`}
                    className={`text-sm border rounded-full px-3 py-1.5 hover:shadow-sm transition-shadow ${kleur}`}
                  >
                    Kalk in {g.naam} ({g.hardheid}°)
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over kalk in {gemeente.naam}</h2>
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
