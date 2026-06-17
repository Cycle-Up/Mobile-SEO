import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { gemeenten, getGemeente, getHardheidLabel, type Hardheid } from '@/data/gemeenten';
import { clampDescription } from '@/lib/seo';

import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
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

  const title = `Osmose filter ${gemeente.naam}: geschikt voor ${gemeente.hardheid}°dH water?`;
  const truncated = title.length > 70 ? title.slice(0, 67) + '...' : title;

  return {
    title: truncated,
    description: clampDescription(`Is een osmosefilter de juiste keuze voor ${gemeente.naam}? Leer wat omgekeerde osmose verwijdert uit ${gemeente.hardheid}°dH leidingwater van ${gemeente.waterbedrijf}, welk systeem past en wat het kost.`),
    alternates: { canonical: `https://waterfilterplatform.nl/osmose-filter/${gemeente.slug}` },
    openGraph: {
      title: `Osmose filter ${gemeente.naam} — geschikt bij ${gemeente.hardheid}°dH water?`,
      description: `Omgekeerde osmose in ${gemeente.naam}: verwijdert calcium, chloor en nitraten uit ${gemeente.waterbedrijf}-water. Advies per hardheidscategorie, kosten en installatie.`,
    },
  };
}

// ─── Content per hardheidscategorie ────────────────────────────────────────

interface OsmoseContent {
  aanbeveling: (naam: string, dH: number, waterbedrijf: string) => string;
  urgentie: string;
  urgentieKleur: string;
  urgentieLabel: string;
  waterkwaliteitTekst: (naam: string, dH: number, waterbedrijf: string) => string;
  verwijdertStorendeStof: string;
  systeemAdvies: (naam: string, dH: number) => string;
  ctaTekst: (naam: string, dH: number) => string;
  faqExtra: {
    question: (naam: string) => string;
    answer: (naam: string, dH: number, waterbedrijf: string) => string;
  }[];
}

const osmoseContent: Record<Hardheid, OsmoseContent> = {
  'zeer hard': {
    aanbeveling: (naam, dH) =>
      `Een osmosefilter is in ${naam} een uitstekende en sterk aanbevolen investering. Met ${dH}°dH behoort het leidingwater tot het hardste van Nederland. Omgekeerde osmose verwijdert tot 99% van het calcium en magnesium — de mineralen die kalkaanslag veroorzaken in waterkoker, koffiezetapparaat en pan. Vrijwel elke woning in ${naam} profiteert direct van de plaatsing.`,
    urgentie: 'Sterk aanbevolen',
    urgentieKleur: 'red',
    urgentieLabel: 'Osmose is hier essentieel',
    waterkwaliteitTekst: (naam, dH, waterbedrijf) =>
      `${waterbedrijf} levert het leidingwater in ${naam} met een gemeten hardheid van ${dH}°dH. Dat is aanzienlijk hoger dan het nationale gemiddelde van circa 10°dH. Het water bevat daarmee een hoge concentratie calcium (Ca²⁺) en magnesium (Mg²⁺) — uitstekend voor de botten, maar verantwoordelijk voor de dagelijkse kalkoverlast in uw keuken en badkamer. Naast hardheid bevat het water, zoals bij alle Nederlandse waterbedrijven, ook chloorresten, nitraten en mogelijk microplastics.`,
    verwijdertStorendeStof: 'Met name kalkmineralen (hoge concentratie)',
    systeemAdvies: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} wordt een 5-traps RO-systeem met remineralisatiestap aanbevolen. Door de hoge mineraalbelasting raakt een standaard 3-traps membraan sneller verzadigd — een hoger-gespecificeerd systeem met grotere membraancapaciteit gaat langer mee. Een populaire keuze voor ${naam}-bewoners is de geïntegreerde 4-in-1 kraan met osmose, die ook kokend en bruisend water levert.`,
    ctaTekst: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is een osmosefilter geen luxe, maar een praktische noodzaak. Bespaar op ontkalkers, bescherm uw apparaten en geniet van puur drinkwater.`,
    faqExtra: [
      {
        question: (naam) => `Is omgekeerde osmose in ${naam} de enige oplossing bij zeer hard water?`,
        answer: (naam, dH) =>
          `Nee, maar het is de meest complete oplossing voor drink- en kookwater in ${naam}. Bij ${dH}°dH verwijdert een osmosefilter tot 99% van calcium en magnesium. Een centrale waterontharder behandelt het hele huis (ook douche en wasmachine), maar is duurder in aanschaf en vraagt zoutonderhoud. Beide systemen kunnen naast elkaar worden ingezet voor maximale bescherming.`,
      },
      {
        question: (naam) => `Hoe snel gaat een osmosemembraan mee in ${naam}?`,
        answer: (naam, dH) =>
          `Bij de hoge hardheid in ${naam} (${dH}°dH) gaat een RO-membraan gemiddeld 2 tot 3 jaar mee. De voorfilters (sediment en koolstof) vervang je elk jaar. Een goed systeem geeft een filterwaarschuwing. Tip: kies een systeem met een grotere membraancapaciteit — dit verlengt de levensduur merkbaar bij dit hardheidsniveau.`,
      },
    ],
  },
  'hard': {
    aanbeveling: (naam, dH) =>
      `Een osmosefilter is in ${naam} een goede en rendabele investering. Met ${dH}°dH leidingwater is kalkvorming in waterkoker, koffiezetapparaat en pannen een merkbaar dagelijks probleem. Omgekeerde osmose verwijdert de oorzaak bij de bron — de calciumionen — waardoor deze apparaten kalkvrij blijven en u beter smakend drinkwater krijgt.`,
    urgentie: 'Aanbevolen',
    urgentieKleur: 'orange',
    urgentieLabel: 'Osmose is zeer zinvol',
    waterkwaliteitTekst: (naam, dH, waterbedrijf) =>
      `${waterbedrijf} levert water in ${naam} met ${dH}°dH hardheid — duidelijk boven het nationale gemiddelde. Dit hard water bevat hoge concentraties calcium en magnesium die zichtbaar zijn als witte aanslag op kranen, douchewanden en glas. Daarnaast bevat het leidingwater de gebruikelijke desinfectiemiddelen (chloor of chlooramine), nitraten, en in sommige regio's sporenhoeveelheden van gewasbeschermingsmiddelen of PFAS.`,
    verwijdertStorendeStof: 'Calciumhardheid (merkbaar niveau)',
    systeemAdvies: (naam, dH) =>
      `Een standaard 4-traps RO-systeem werkt uitstekend voor ${naam} bij ${dH}°dH. U kunt kiezen tussen een losse osmose-unit onder het aanrecht (met een aparte spoeltap) of een geïntegreerd 4-in-1 systeem waarbij ook kokend en bruisend water via dezelfde kraan komt. Bij harde watergebieden zoals ${naam} is de 4-in-1 kraan populair vanwege het totaalgemak.`,
    ctaTekst: (naam, dH) =>
      `Met ${dH}°dH leidingwater in ${naam} bespaart een osmosefilter u jarenlang op ontkalkers, verlengt de levensduur van uw apparaten en levert u dagelijks puur, zacht drinkwater.`,
    faqExtra: [
      {
        question: (naam) => `Voelt osmosewater anders in ${naam}?`,
        answer: (naam, dH) =>
          `Ja, merkbaar anders en beter. Bewoners van ${naam} die overschakelen op osmosewater ervaren het als zachter, schoner en zonder de chloorsmaak die je soms proeft in leidingwater bij ${dH}°dH. Koffie en thee smaken voller; de waterkoker blijft schoon. Sommigen vinden het water "vlakker" — dat is opgelost met een remineralisatiestap in het systeem.`,
      },
      {
        question: (naam) => `Wat is het verschil tussen een losse osmose-unit en een 4-in-1 kraan voor ${naam}?`,
        answer: (naam) =>
          `Een losse osmose-unit in ${naam} filtert het drinkwater via een aparte kleine tap naast de gewone kraan. Een 4-in-1 kraan combineert osmosefiltering met kokend, koud en warm water (en soms bruisend) uit één kraanuitloop. De 4-in-1 variant vervangt uw gewone kokend-waterkraan en osmosesysteem tegelijk — minder kraangaten in het aanrecht, één systeem om bij te houden.`,
      },
    ],
  },
  'matig hard': {
    aanbeveling: (naam, dH) =>
      `Een osmosefilter is in ${naam} zinvol maar niet strikt noodzakelijk vanwege kalk. Met ${dH}°dH water zit u in de middenklasse: enige kalkoverlast, maar beheersbaar. De sterkste argumenten voor een osmosefilter in ${naam} zijn de verwijdering van chloor, nitraten en microplastics voor puur drinkwater — niet primair de kalkbestrijding.`,
    urgentie: 'Zinvol voor drinkwaterkwaliteit',
    urgentieKleur: 'amber',
    urgentieLabel: 'Osmose voor zuiverheid, niet per se voor kalk',
    waterkwaliteitTekst: (naam, dH, waterbedrijf) =>
      `${waterbedrijf} levert water in ${naam} op ${dH}°dH — matig hard, rond het nationale gemiddelde. Kalkaanslag is aanwezig maar beheersbaar. Relevanter voor de keuze van een osmosefilter in ${naam} zijn andere parameters: chloorresten die smaak beïnvloeden, nitraatgehaltes die in agrarische gebieden soms de 25 mg/l benaderen, en de groeiende aandacht voor PFAS-sporen en microplastics in oppervlaktewater.`,
    verwijdertStorendeStof: 'Chloor, nitraten en microplastics (voornaamste reden)',
    systeemAdvies: (naam, dH) =>
      `Voor ${naam} bij ${dH}°dH volstaat een compact 3- of 4-traps RO-systeem. De membraanbelasting is lager dan in harde watergebieden, wat de levensduur van filters verlengd. Wie ook kokend water wil, kan kiezen voor de geïntegreerde 4-in-1 kraan. Voor alleen drinkwaterzuivering is een losse unit met eigen tapje eveneens prima.`,
    ctaTekst: (naam, dH) =>
      `In ${naam} is een osmosefilter de slimste keuze voor wie zeker wil zijn van puur, chloor- en nitraatvrij drinkwater — ongeacht of de waterhardheid van ${dH}°dH al problemen geeft.`,
    faqExtra: [
      {
        question: (naam) => `Heb ik in ${naam} echt een osmosefilter nodig?`,
        answer: (naam, dH) =>
          `Strikt noodzakelijk is het niet bij ${dH}°dH in ${naam} — het water voldoet aan alle wettelijke normen. Maar "veilig" is niet hetzelfde als "zo puur mogelijk". Een osmosefilter verwijdert stoffen die wettelijk zijn toegestaan maar die u liever niet drinkt: chloorresten, nitraten, microplastics en medicijnresten. Of dat de investering waard is, hangt af van uw persoonlijke voorkeur voor waterkwaliteit.`,
      },
      {
        question: (naam) => `Wat verwijdert een osmosefilter dat een koolstoffilter niet verwijdert in ${naam}?`,
        answer: (naam) =>
          `Een koolstoffilter verwijdert in ${naam} goed chloor en verbetert de smaak. Een osmosefilter gaat veel verder: het filtert ook nitraten, fluoride, PFAS, zware metalen, bacteriën en virussen via het semipermeabele membraan. Als u in ${naam} ook nitraten, medicijnresten of microplastics wilt verwijderen, is osmose de betere keuze.`,
      },
    ],
  },
  'matig': {
    aanbeveling: (naam, dH) =>
      `Een osmosefilter is in ${naam} geen noodzaak vanwege kalk, maar biedt meerwaarde als u waarde hecht aan maximale drinkwaterzuiverheid. Met ${dH}°dH water heeft u nauwelijks last van kalkaanslag. De reden voor een osmosefilter in ${naam} is zuiverheid: verwijdering van chloor, nitraten, PFAS-sporen en microplastics die wettelijk zijn toegestaan maar die u liever niet drinkt.`,
    urgentie: 'Optioneel — voor zuiverheid',
    urgentieKleur: 'lime',
    urgentieLabel: 'Kalk is geen probleem; osmose voor smaak en zuiverheid',
    waterkwaliteitTekst: (naam, dH, waterbedrijf) =>
      `${waterbedrijf} levert water in ${naam} op ${dH}°dH — matig hard, relatief zacht voor Nederlandse begrippen. Kalkaanslag is zelden een actief probleem. Qua waterkwaliteit voor drinkwater zijn andere factoren relevanter: de aanwezigheid van chloorresten (geursmaak), nitraatbelasting vanuit de landbouw in sommige regio's, en nieuwe zorgpunten zoals PFAS en microplastics die niet door standaardzuivering worden verwijderd.`,
    verwijdertStorendeStof: 'Chloor en smaakstoffen (voornaamste reden)',
    systeemAdvies: (naam, dH) =>
      `Voor ${naam} bij ${dH}°dH is een compact 3-traps RO-systeem meer dan voldoende. De lage mineraalbelasting betekent lange filterlevensduur en weinig onderhoud. Wie alleen de smaak wil verbeteren, kan ook met een koolstofblokfilter toe. Wie maximale zuiverheid wil én kokend water, kiest voor de 4-in-1 osmosekraan.`,
    ctaTekst: (naam, dH) =>
      `In ${naam} is kalk bij ${dH}°dH geen probleem, maar een osmosefilter geeft u dagelijks de zekerheid van puur, goed smakend drinkwater zonder chloor of nitraten.`,
    faqExtra: [
      {
        question: (naam) => `Is leidingwater in ${naam} al zo schoon dat osmose overbodig is?`,
        answer: (naam, dH) =>
          `Het leidingwater in ${naam} voldoet volledig aan de Nederlandse drinkwaternormen — het is veilig om te drinken. Maar het bevat wettelijk toegestane hoeveelheden chloor, nitraten en sporenconcentraties van honderden andere stoffen. Een osmosefilter verwijdert bij ${dH}°dH ook deze stoffen, inclusief opkomende verontreinigingen zoals PFAS en microplastics. Of dat nodig is, hangt af van hoe puur u uw drinkwater wilt.`,
      },
      {
        question: (naam) => `Verliest water zijn goede mineralen door osmosefiltering in ${naam}?`,
        answer: (naam) =>
          `Ja, een standaard osmosefilter verwijdert ook calcium en magnesium. In ${naam} zijn deze mineralen al in lage concentraties aanwezig. Moderne systemen met een remineralisatiestap voegen na het filtermembraan een gezonde hoeveelheid calcium en magnesium terug toe — u behoudt het beste van beide: zuiverheid én een mineraaltje.`,
      },
    ],
  },
  'zacht': {
    aanbeveling: (naam, dH) =>
      `Een osmosefilter is in ${naam} niet nodig vanwege kalk — het leidingwater is met ${dH}°dH al uiterst zacht. De overweging voor osmose draait hier om iets anders: wilt u ook chloor, eventuele nitraten, PFAS-sporen en microplastics verwijderen? Dan is een osmosefilter in ${naam} nog altijd een zinvolle keuze, maar kalk is niet de motivatie.`,
    urgentie: 'Niet nodig voor kalk',
    urgentieKleur: 'green',
    urgentieLabel: 'Zacht water — osmose uitsluitend voor zuiverheid',
    waterkwaliteitTekst: (naam, dH, waterbedrijf) =>
      `${waterbedrijf} levert water in ${naam} op slechts ${dH}°dH — een van de laagste hardheden van Nederland. Kalk is hier praktisch geen factor. De relevante waterkwaliteitsaspecten voor ${naam} zijn: chloorresten die een lichte smaak geven, de nitraatbelasting in uw specifieke regio, en de nationale discussie over PFAS en microplastics in drinkwater. Een osmosefilter pakt al deze stoffen aan, maar is vanwege kalk niet nodig.`,
    verwijdertStorendeStof: 'Chloor, nitraten, PFAS (kalk is al nauwelijks aanwezig)',
    systeemAdvies: (naam, dH) =>
      `In ${naam} bij ${dH}°dH is een eenvoudig 3-traps RO-systeem al ruimschoots voldoende. De filterlevensduur is uitstekend door de lage mineraalbelasting — u zult nauwelijks onderhoud nodig hebben. Overweegt u een koolstoffilter in plaats van osmose? Dat werkt goed voor chloor en smaak. Voor nitraten en PFAS heeft u echt een RO-membraan nodig.`,
    ctaTekst: (naam, dH) =>
      `In ${naam} is het leidingwater met ${dH}°dH al zacht en kalkvrij. Een osmosefilter is hier een bewuste keuze voor maximale zuiverheid — niet een noodzaak, maar een upgrade.`,
    faqExtra: [
      {
        question: (naam) => `Wat heeft een osmosefilter voor nut in ${naam} met zacht water?`,
        answer: (naam, dH) =>
          `Bij slechts ${dH}°dH in ${naam} is kalkaanslag inderdaad geen reden. Maar osmose verwijdert ook chloor (betere smaak), nitraten (relevant in agrarische omgevingen), PFAS-sporen, medicijnresten en microplastics. Als u drinkwater wilt dat zo puur mogelijk is — zonder de stoffen die wettelijk zijn toegestaan maar idealiter niet in uw glas horen — dan biedt osmose ook in ${naam} meerwaarde.`,
      },
      {
        question: (naam) => `Is een waterfilterkan in ${naam} een goed alternatief voor osmose?`,
        answer: (naam) =>
          `Een waterfilterkan verwijdert in ${naam} effectief chloor en verbetert de smaak. Wat het niet verwijdert: nitraten, PFAS, bacteriën, virussen en zware metalen. Als uw doel puur smakend water is, voldoet een kan. Voor maximale zuiverheid inclusief microplastics en nitraten hebt u een echt RO-membraan nodig, wat uitsluitend in een osmosesysteem zit.`,
      },
    ],
  },
};

// ─── Helpers ────────────────────────────────────────────────────────────────

function getUrgentieClasses(kleur: string): { bg: string; border: string; text: string } {
  switch (kleur) {
    case 'red':    return { bg: 'bg-red-50',    border: 'border-red-200',    text: 'text-red-800' };
    case 'orange': return { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-800' };
    case 'amber':  return { bg: 'bg-amber-50',  border: 'border-amber-200',  text: 'text-amber-800' };
    case 'lime':   return { bg: 'bg-lime-50',   border: 'border-lime-200',   text: 'text-lime-800' };
    case 'green':  return { bg: 'bg-green-50',  border: 'border-green-200',  text: 'text-green-800' };
    default:       return { bg: 'bg-gray-50',   border: 'border-gray-200',   text: 'text-gray-800' };
  }
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function OsmoseFilterGemeentePage({ params }: PageProps) {
  const { gemeente: slug } = await params;
  const gemeente = getGemeente(slug);
  if (!gemeente) notFound();

  const content = osmoseContent[gemeente.categorie];
  const urgentie = getUrgentieClasses(content.urgentieKleur);
  const isHard = gemeente.categorie === 'hard' || gemeente.categorie === 'zeer hard';

  // Kosten tabel — schalen op hardheid
  const aanschafLaag = 249;
  const aanschafHoog = 799;
  const onderhoudPerJaar = gemeente.categorie === 'zeer hard' ? 80
    : gemeente.categorie === 'hard' ? 65
    : gemeente.categorie === 'matig hard' ? 50
    : gemeente.categorie === 'matig' ? 40
    : 35;
  const terugverdienJaar = isHard ? 2 : 4;

  // FAQ items
  const faqItems = [
    {
      question: `Is een osmose filter geschikt voor het water in ${gemeente.naam}?`,
      answer: `Het leidingwater in ${gemeente.naam} wordt geleverd door ${gemeente.waterbedrijf} met een hardheid van ${gemeente.hardheid}°dH (${getHardheidLabel(gemeente.categorie).toLowerCase()}). ${content.aanbeveling(gemeente.naam, gemeente.hardheid, gemeente.waterbedrijf)}`,
    },
    {
      question: `Wat verwijdert omgekeerde osmose uit het water van ${gemeente.naam}?`,
      answer: `Een osmosefilter verwijdert uit het ${gemeente.waterbedrijf}-water in ${gemeente.naam} tot 99% van: calcium en magnesium (kalkhardheid, ${gemeente.hardheid}°dH), chloorresten en desinfectiebijproducten, nitraten en nitriet, PFAS en andere persistente organische verbindingen, zware metalen (lood, arseen, cadmium), bacteriën en virussen, en microplastics. Het RO-membraan laat alleen watermoleculen en een beperkt deel van gezonde mineralen door.`,
    },
    {
      question: `Welk osmose systeem is geschikt voor ${gemeente.naam}?`,
      answer: `${content.systeemAdvies(gemeente.naam, gemeente.hardheid)} Aandachtspunt bij de keuze: een geïntegreerde 4-in-1 kraan met osmose combineert osmosefiltering met kokend, koud en warm water uit één kraanuitloop — ideaal voor keukens in ${gemeente.naam} met beperkt ruimte onder het aanrecht of weinig kraangaten.`,
    },
    {
      question: `Wat kost een osmose filter in ${gemeente.naam} aan aanschaf en onderhoud?`,
      answer: `Een osmosefilter voor ${gemeente.naam} kost bij aanschaf tussen €${aanschafLaag} en €${aanschafHoog} afhankelijk van het systeem (losse unit of 4-in-1 kraan). Het jaarlijkse filteronderhoud bedraagt circa €${onderhoudPerJaar}–€${onderhoudPerJaar + 30} voor voorfilters en membraanvervanging. Bij ${gemeente.hardheid}°dH in ${gemeente.naam} verdient de investering zich doorgaans terug in ${terugverdienJaar}–${terugverdienJaar + 1} jaar door besparing op flessenwater, ontkalkers en verlengde apparaatlevensduur.`,
    },
    ...content.faqExtra.map(f => ({
      question: f.question(gemeente.naam),
      answer: f.answer(gemeente.naam, gemeente.hardheid, gemeente.waterbedrijf),
    })),
    {
      question: `Hoe installeer ik een osmose filter onder het aanrecht in ${gemeente.naam}?`,
      answer: `Installatie van een osmosefilter onder het aanrecht in ${gemeente.naam} vereist: (1) een kraangat in het aanrechtblad voor de spoeltap of 4-in-1 kraan (diameter 35–40 mm), (2) aansluiting op de koude watertoevoer via een T-stuk of aanboorzadel, (3) een afvoerslang naar de sifon van het spoelrek. De meeste systemen kunnen door een handige doe-het-zelver worden geplaatst; een loodgieter is aanbevolen als u nog geen kraangat heeft of als het aanrecht van graniet of composiet is.`,
    },
  ];

  // Naburige gemeenten (zelfde provincie, andere slug)
  const naburigeGemeenten = gemeenten
    .filter(g => g.provincie === gemeente.provincie && g.slug !== gemeente.slug)
    .slice(0, 6);

  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home',              url: 'https://waterfilterplatform.nl' },
          { name: 'Omgekeerde osmose', url: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
          { name: `Osmose filter ${gemeente.naam}`, url: `https://waterfilterplatform.nl/osmose-filter/${gemeente.slug}` },
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
          <nav className="text-xs text-gray-400 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:text-[#005F8A]">Omgekeerde osmose</Link>
            <span className="mx-2">/</span>
            <span>Osmose filter {gemeente.naam}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmose filter {gemeente.naam}: geschikt voor {gemeente.hardheid}°dH water?
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            {content.aanbeveling(gemeente.naam, gemeente.hardheid, gemeente.waterbedrijf)}
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        {/* Urgentie-kaart */}
        <section className={`${urgentie.bg} ${urgentie.border} border rounded-2xl p-5`}>
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <p className={`font-bold ${urgentie.text}`}>
              Osmose in {gemeente.naam}: {content.urgentie}
            </p>
            <p className={`text-sm ${urgentie.text}`}>
              {gemeente.hardheid}°dH · {getHardheidLabel(gemeente.categorie)}
            </p>
          </div>
          <p className={`text-sm ${urgentie.text} opacity-90`}>
            {content.urgentieLabel} — water geleverd door <strong>{gemeente.waterbedrijf}</strong>.{' '}
            Voornaamste reden voor osmose hier: <em>{content.verwijdertStorendeStof}</em>.
          </p>
        </section>

        {/* Waterkwaliteit */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Waterkwaliteit in {gemeente.naam}: wat zit er in uw leidingwater?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {content.waterkwaliteitTekst(gemeente.naam, gemeente.hardheid, gemeente.waterbedrijf)}
          </p>
          {/* Stoffen-grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { stof: 'Calcium (Ca²⁺)', verwijderd: true, toelichting: 'Kalkvorming, waterkoker' },
              { stof: 'Magnesium (Mg²⁺)', verwijderd: true, toelichting: 'Hardheid, kalkaanslag' },
              { stof: 'Chloor / THMs', verwijderd: true, toelichting: 'Desinfectiesmaak' },
              { stof: 'Nitraten', verwijderd: true, toelichting: 'Landbouwresten' },
              { stof: 'PFAS-sporen', verwijderd: true, toelichting: '"Eeuwige" stoffen' },
              { stof: 'Microplastics', verwijderd: true, toelichting: 'Via oppervlaktewater' },
            ].map(item => (
              <div
                key={item.stof}
                className="bg-white border border-[#E0F2FE] rounded-xl p-3 flex flex-col gap-1"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#005F8A] font-bold text-sm">✓</span>
                  <span className="font-semibold text-gray-800 text-sm">{item.stof}</span>
                </div>
                <p className="text-xs text-gray-500">{item.toelichting}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Welk systeem past */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Welk osmose systeem past bij {gemeente.naam}?
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            {content.systeemAdvies(gemeente.naam, gemeente.hardheid)}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Losse unit */}
            <div className="border border-gray-100 rounded-2xl p-4">
              <h3 className="font-semibold text-gray-800 mb-1">Losse osmose-unit</h3>
              <p className="text-xs text-gray-500 mb-3">Aparte spoeltap naast uw gewone kraan</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-[#005F8A]">✓</span><span>Lager aanschafbedrag (€{aanschafLaag}–€450)</span></li>
                <li className="flex gap-2"><span className="text-[#005F8A]">✓</span><span>Makkelijk te installeren</span></li>
                <li className="flex gap-2"><span className="text-gray-400">–</span><span>Aparte tap, extra kraangat nodig</span></li>
                <li className="flex gap-2"><span className="text-gray-400">–</span><span>Geen kokend/bruisend water</span></li>
              </ul>
            </div>
            {/* 4-in-1 kraan */}
            <div className="border-2 border-[#005F8A] rounded-2xl p-4 relative">
              <span className="absolute -top-2.5 left-4 bg-[#005F8A] text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                Populairste keuze
              </span>
              <h3 className="font-semibold text-gray-800 mb-1">Geïntegreerde 4-in-1 kraan</h3>
              <p className="text-xs text-gray-500 mb-3">Osmose + kokend + koud + warm uit één kraan</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-[#005F8A]">✓</span><span>Alles in één: osmose én kokend water</span></li>
                <li className="flex gap-2"><span className="text-[#005F8A]">✓</span><span>Slechts één kraangat nodig</span></li>
                <li className="flex gap-2"><span className="text-[#005F8A]">✓</span><span>Vervangt waterkoker én filter</span></li>
                <li className="flex gap-2"><span className="text-gray-400">–</span><span>Hogere aanschafprijs (€450–€{aanschafHoog})</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Kosten tabel */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">
            Aanschaf- en onderhoudskosten in {gemeente.naam}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 pr-4 text-gray-500 font-medium">Kostenpost</th>
                  <th className="py-2 pr-4 text-gray-500 font-medium">Losse unit</th>
                  <th className="py-2 text-gray-500 font-medium">4-in-1 kraan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-2.5 pr-4 text-gray-700">Aanschaf</td>
                  <td className="py-2.5 pr-4 font-mono text-gray-600">€{aanschafLaag}–€450</td>
                  <td className="py-2.5 font-mono text-gray-600">€450–€{aanschafHoog}</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 text-gray-700">Filteronderhoud / jaar</td>
                  <td className="py-2.5 pr-4 font-mono text-gray-600">€{onderhoudPerJaar}–€{onderhoudPerJaar + 20}</td>
                  <td className="py-2.5 font-mono text-gray-600">€{onderhoudPerJaar + 10}–€{onderhoudPerJaar + 30}</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 text-gray-700">Membraanvervanging</td>
                  <td className="py-2.5 pr-4 font-mono text-gray-600">€35–€55 / 2–3 jr</td>
                  <td className="py-2.5 font-mono text-gray-600">€35–€55 / 2–3 jr</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 text-gray-700">Terugverdientijd</td>
                  <td className="py-2.5 pr-4 font-mono text-gray-600">{terugverdienJaar}–{terugverdienJaar + 1} jaar</td>
                  <td className="py-2.5 font-mono text-gray-600">{terugverdienJaar + 1}–{terugverdienJaar + 2} jaar</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            * Terugverdientijd gebaseerd op besparing flessenwater (€300–€600/jr/gezin) en ontkalkers bij {gemeente.hardheid}°dH in {gemeente.naam}.
          </p>
        </section>

        {/* Installatie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Installatie onder het aanrecht in {gemeente.naam} — wat u nodig heeft
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Een osmosefilter wordt onder het aanrecht geplaatst, verbonden met de koude watertoevoer. In de meeste woningen in {gemeente.naam} is installatie binnen een middag te doen. Hier een checklist van wat u nodig heeft:
          </p>
          <ol className="space-y-3">
            {[
              { stap: 'Kraangat in het aanrecht', uitleg: 'Diameter 35–40 mm voor de spoeltap of 4-in-1 kraan. Niet nodig als u een bestaand ongebruikt gat kunt benutten.' },
              { stap: 'Aanboorzadel op de koude waterleiding', uitleg: 'Kleine T-koppeling waarmee het osmosesysteem water afneemt van de bestaande leidingwatertoevoer onder het aanrecht.' },
              { stap: 'Afvoerslang naar sifon', uitleg: 'De RO-unit spoelt geconcentreerd afvalwater af — een dunne slangetje sluit aan op de sifon van uw spoelbak.' },
              { stap: 'Opslagtank (bij losse unit)', uitleg: 'De meeste units worden geleverd met een opslagvat van 6–10 liter voor gefilterd water, dat onder het aanrecht past.' },
              { stap: 'Stroomaansluiting (bij 4-in-1 kraan)', uitleg: 'Een geïntegreerde 4-in-1 kraan heeft een stroomaansluiting nodig voor het verwarmingselement. Een stopcontact onder het aanrecht is vereist.' },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
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
          <p className="text-xs text-gray-400 mt-4">
            Tip voor {gemeente.naam}: heeft u een granieten of composiet aanrechtblad? Laat het kraangat dan door een professional boren om beschadiging te voorkomen.
          </p>
        </section>

        {/* CTA */}
        {isHard ? (
          <div className={`${urgentie.bg} ${urgentie.border} border rounded-2xl p-5`}>
            <p className={`font-bold text-lg ${urgentie.text} mb-2`}>
              {content.ctaTekst(gemeente.naam, gemeente.hardheid)}
            </p>
            <p className={`${urgentie.text} opacity-85 text-sm mb-4`}>
              Een 4-in-1 osmosekraan is speciaal geschikt voor hard water in regio&apos;s zoals {gemeente.naam}.
              Kokend water, bruisend water en osmose-gefilterd drinkwater uit één kraanuitloop.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/omgekeerde-osmose/kopen"
                className="inline-block bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
              >
                Osmosefilters vergelijken →
              </Link>
              <Link
                href="/omgekeerde-osmose/kopen"
                className={`inline-block border ${urgentie.border} ${urgentie.text} font-semibold px-5 py-2.5 rounded-xl hover:bg-white transition-colors text-sm`}
              >
                Vergelijk alle osmose systemen
              </Link>
            </div>
          </div>
        ) : (
          <CTABanner context="osmose" variant="compact" />
        )}

        <AffiliateCTA
          destination="zuiverWaterKranen"
          campaign="omgekeerde-osmose"
          content="osmose-filter-gemeente-cta"
          label="Bekijk een osmosesysteem met kraan"
          title="Osmosewater uit je eigen kraan?"
          sub="Bekijk de zuiver-water-kranen (osmosesysteem met kraan) bij onze partner PureAqua."
        />

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-3">Meer over osmose en waterkwaliteit</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: '/omgekeerde-osmose',
                label: 'Omgekeerde osmose uitleg',
                desc: 'Hoe werkt RO-filtratie? Volledig technisch overzicht',
              },
              {
                href: '/omgekeerde-osmose/kopen',
                label: 'Osmose filter kopen',
                desc: 'Vergelijk de beste RO-systemen voor thuis',
              },
              {
                href: `/waterhardheid/${gemeente.slug}`,
                label: `Waterhardheid ${gemeente.naam}`,
                desc: `${gemeente.hardheid}°dH — achtergrond en adviezen voor ${gemeente.naam}`,
              },
              {
                href: '/kennisbank/reverse-osmosis-nadelen',
                label: 'Nadelen van omgekeerde osmose',
                desc: 'Eerlijk overzicht: wat zijn de beperkingen van RO?',
              },
              {
                href: '/kennisbank/osmose-water',
                label: 'Wat is osmosewater?',
                desc: 'Samenstelling, gezondheid en gebruik in de keuken',
              },
              {
                href: '/kokend-water-kraan/met-filter',
                label: 'Kokend water kraan met filter',
                desc: 'De 4-in-1 variant combineert kokend water met osmose',
              },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-3 hover:border-[#005F8A] transition-all"
              >
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
              Osmose filter in andere gemeenten in {gemeente.provincie}
            </h2>
            <div className="flex flex-wrap gap-2">
              {naburigeGemeenten.map(g => {
                const kleur =
                  g.categorie === 'zacht'     ? 'border-green-200 text-green-800' :
                  g.categorie === 'matig'     ? 'border-lime-200 text-lime-800' :
                  g.categorie === 'matig hard'? 'border-amber-200 text-amber-800' :
                  g.categorie === 'hard'      ? 'border-orange-200 text-orange-800' :
                                               'border-red-200 text-red-800';
                return (
                  <Link
                    key={g.slug}
                    href={`/osmose-filter/${g.slug}`}
                    className={`text-sm border rounded-full px-3 py-1.5 hover:shadow-sm transition-shadow ${kleur}`}
                  >
                    Osmose in {g.naam} ({g.hardheid}°)
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <GemeenteLinks gemeente={gemeente} currentPath="osmose-filter" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over osmose filter in {gemeente.naam}
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
