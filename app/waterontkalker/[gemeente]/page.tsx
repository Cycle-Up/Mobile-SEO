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

  const title = `Waterontkalker ${gemeente.naam}: zinvol bij ${gemeente.hardheid}°dH water?`;
  return {
    title: title.length > 70 ? title.slice(0, 67) + '...' : title,
    description: `Is een waterontkalker zinvol in ${gemeente.naam}? Het water heeft ${gemeente.hardheid}°dH (${getHardheidLabel(gemeente.categorie).toLowerCase()}). Lees over magnetische ontkalkers, elektronische apparaten en TAC-systemen — en wanneer een waterontharder beter is.`,
    alternates: { canonical: `https://waterfilterplatform.nl/waterontkalker/${gemeente.slug}` },
    openGraph: {
      title: `Waterontkalker in ${gemeente.naam} bij ${gemeente.hardheid}°dH — zinvol?`,
      description: `Vergelijk waterontkalkers (magnetisch, elektronisch, TAC) met waterontharders voor ${gemeente.naam}. Eerlijk advies op basis van ${gemeente.hardheid}°dH leidingwater.`,
    },
  };
}

interface WaterOntkalkerContent {
  zinvolheid: (naam: string, dH: number) => string;
  adviesTekst: (naam: string, dH: number) => string;
  aanbeveling: 'niet-zinvol' | 'twijfelachtig' | 'overweeg-ontharder' | 'zinvol-tac' | 'urgent-ontharder';
  aanbevelingLabel: string;
  aanbevelingKleur: string;
  alternatiefTekst: (naam: string, dH: number) => string;
}

const waterontkalkerContent: Record<Hardheid, WaterOntkalkerContent> = {
  'zeer hard': {
    zinvolheid: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is de waterkalkproblematiek ernstig genoeg dat je beslist iets moet doen — maar de keuze van oplossing is cruciaal. Een waterontkalker (anti-kalk apparaat) kan enige verlichting bieden, maar de wetenschappelijke onderbouwing varieert sterk per type. Een TAC-systeem (Template Assisted Crystallization) heeft het meeste wetenschappelijke bewijs bij hard water, maar een echte waterontharder of osmosefilter geeft betere resultaten bij dit hardheidsniveau.`,
    adviesTekst: (naam, dH) =>
      `In ${naam} met ${dH}°dH is een magnetische of elektronische waterontkalker onvoldoende als enige maatregel. Deze apparaten claimen kalkdeeltjes te herstructureren zodat ze minder aanhechten, maar onafhankelijk wetenschappelijk onderzoek toont wisselende resultaten — zeker bij hardheden boven 18°dH. Een TAC-systeem werkt beter aantoonbaar: het converteert opgeloste kalk naar microscopische kristallen die niet aan oppervlakken hechten, zonder chemicaliën of zout. Voor volledige bescherming is een waterontharder of omgekeerde osmose filter echter de gouden standaard.`,
    aanbeveling: 'urgent-ontharder',
    aanbevelingLabel: 'Waterontharder of osmose — niet alleen een ontkalker',
    aanbevelingKleur: 'red',
    alternatiefTekst: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is een waterontharder (ionenwisselaar) de meest bewezen en complete oplossing. Deze verwijdert calcium en magnesium volledig uit het water door ionenwisseling met zout — wetenschappelijk robuust onderbouwd. Een omgekeerde osmose filter is aanvullend ideaal voor drinkwater: verwijdert tot 99% van calcium, magnesium en andere stoffen. Een waterontkalker alleen — zeker magnetisch of elektronisch — is bij dit hardheidsniveau niet voldoende.`,
  },
  'hard': {
    zinvolheid: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is de kalkproblematiek reëel en actieve maatregelen zijn zinvol. Een waterontkalker kan hier een rol spelen, maar de effectiviteit hangt sterk af van het type. TAC-systemen (Template Assisted Crystallization) bieden de beste resultaten binnen de ontkalker-categorie. Magnetische en elektronische ontkalkers hebben beperkte en inconsistente wetenschappelijke steun — sommige gebruikers rapporteren verbetering, formele studies tonen gemengde resultaten.`,
    adviesTekst: (naam, dH) =>
      `In ${naam} met ${dH}°dH is een TAC-systeem een reële optie als je een zoutloze, chemicaliënvrije aanpak wilt. TAC converteert de opgeloste kalk naar onschadelijke microkristallen — geen aanhechting aan leidingen of apparaten. Wetenschappelijk beter onderbouwd dan magnetisch of elektronisch. Toch geldt ook hier: voor complete kalkverwijdering (niet alleen kalkvoorkoming) is een waterontharder effectiever. Denk ook aan een omgekeerde osmose filter voor het drinkwater.`,
    aanbeveling: 'overweeg-ontharder',
    aanbevelingLabel: 'TAC-systeem of waterontharder aanbevolen',
    aanbevelingKleur: 'orange',
    alternatiefTekst: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is een waterontharder (ionenwisselaar) de meest effectieve oplossing als je volledig van kalkproblemen af wil. Een osmosefilter is de aanvulling voor zuiver drinkwater. Een TAC-systeem is een goed compromis als je geen zout wil gebruiken of geen ruimte hebt voor een ontharder in de meterkast.`,
  },
  'matig hard': {
    zinvolheid: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is kalkaanslag aanwezig maar beheersbaar. Een waterontkalker is hier een optionele toevoeging — de toegevoegde waarde hangt af van je persoonlijke tolerantie voor kalksporen. Magnetische ontkalkers hebben op dit hardheidsniveau weinig bewezen meerwaarde. Een TAC-systeem kan enige preventieve werking bieden. Voor de meeste inwoners van ${naam} is periodiek ontkalken van apparaten echter al voldoende.`,
    adviesTekst: (naam, dH) =>
      `In ${naam} met ${dH}°dH is een waterontkalker niet noodzakelijk maar ook niet nutteloos. Als je een zoutloos alternatief wil voor een waterontharder, is een TAC-systeem de best wetenschappelijk onderbouwde keuze binnen de ontkalker-categorie. Magnetische of elektronische ontkalkers zijn goedkoper maar hun effectiviteit bij matig hard water is niet aantoonbaar superieur aan geen behandeling.`,
    aanbeveling: 'twijfelachtig',
    aanbevelingKleur: 'amber',
    aanbevelingLabel: 'Optioneel — periodiek ontkalken volstaat',
    alternatiefTekst: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is periodiek ontkalken van waterkoker, koffiemachine en douchekop de meest praktische aanpak. Een osmosefilter voor drinkwater verbetert smaak en zuiverheid. Een waterontharder is bij dit hardheidsniveau een investering die zich moeilijker terugverdient.`,
  },
  'matig': {
    zinvolheid: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is kalk nauwelijks een probleem. Een waterontkalker heeft hier geen zinvolle toepassing — de hardheid is te laag om enig merkbaar voordeel te bieden. Zelfs TAC-systemen, die het beste wetenschappelijke bewijs hebben, zijn bij dit hardheidsniveau overdreven.`,
    adviesTekst: (naam, dH) =>
      `In ${naam} met ${dH}°dH is een waterontkalker niet aan te raden — niet vanwege veiligheidsredenen, maar simpelweg omdat er niets te ontkalken valt. Het water is matig en vormt nauwelijks aanslag. Investeer liever in een waterfilter voor smaak en zuiverheid als waterkwaliteit je interesseert.`,
    aanbeveling: 'niet-zinvol',
    aanbevelingKleur: 'lime',
    aanbevelingLabel: 'Niet zinvol bij dit hardheidsniveau',
    alternatiefTekst: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is geen kalkbestrijding nodig. Voor zuiver drinkwater is een omgekeerde osmose filter of koolstoffilter een zinvollere investering — die pakt chloor, nitraten en smaak aan.`,
  },
  'zacht': {
    zinvolheid: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is kalk vrijwel afwezig. Een waterontkalker heeft hier absoluut geen zin — er is niks om te ontkalken. Het water is al zacht van nature en apparaten blijven jarenlang vrij van kalkafzetting zonder enige ingreep.`,
    adviesTekst: (naam, dH) =>
      `In ${naam} met ${dH}°dH is een waterontkalker een overbodige investering. Het water bevat zo weinig calcium en magnesium dat ontkalking geen enkel voordeel oplevert. Als je de waterkwaliteit wil verbeteren, kijk dan naar een filter voor smaak (chloor) of zuiverheid (nitraten, PFAS).`,
    aanbeveling: 'niet-zinvol',
    aanbevelingKleur: 'green',
    aanbevelingLabel: 'Geen ontkalker nodig — water is zacht',
    alternatiefTekst: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is zacht water al een voordeel. Voor smaak en extra zuiverheid is een omgekeerde osmose filter de zinvollere investering dan een ontkalker.`,
  },
};

function getKleurClasses(kleur: string): { bg: string; border: string; text: string } {
  switch (kleur) {
    case 'red': return { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800' };
    case 'orange': return { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-800' };
    case 'amber': return { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800' };
    case 'lime': return { bg: 'bg-lime-50', border: 'border-lime-200', text: 'text-lime-800' };
    case 'green': return { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800' };
    default: return { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-800' };
  }
}

const ontkalkerTypes = [
  {
    naam: 'Magnetische waterontkalker',
    werking: 'Klemmen of wikkel om de waterleiding; claimt een magnetisch veld te creëren dat kalkdeeltjes herstructureert.',
    bewijs: 'Beperkt',
    bewijsKleur: 'text-red-600',
    uitleg: 'Onafhankelijke wetenschappelijke studies tonen inconsistente resultaten. Sommige gebruikers rapporteren minder aanslag, maar gecontroleerde experimenten geven geen eenduidige bevestiging. De Consumentenbond en Europese waterinstanties adviseren terughoudendheid.',
    prijs: '€15 – €150',
    aanbeveling: 'Niet aanbevolen als enige maatregel',
  },
  {
    naam: 'Elektronische waterontkalker',
    werking: 'Elektrisch apparaat dat wikkelspoel om de leiding plaatst en een wisselend elektromagnetisch veld opwekt.',
    bewijs: 'Beperkt tot matig',
    bewijsKleur: 'text-orange-600',
    uitleg: 'Iets meer onderbouwd dan pure magneten, maar de werkzaamheid is sterk afhankelijk van het specifieke watertype en de installatie. Laboratoriumtesten zijn wisselend. Gebruikservaringen lopen sterk uiteen.',
    prijs: '€50 – €400',
    aanbeveling: 'Twijfelachtig — kies TAC bij serieuze kalkproblemen',
  },
  {
    naam: 'TAC-systeem (Template Assisted Crystallization)',
    werking: 'Waterbehandeling via katalytische media die opgeloste kalk omzetten in stabiele microscopische kristallen die niet aan oppervlakken hechten.',
    bewijs: 'Redelijk tot goed',
    bewijsKleur: 'text-green-600',
    uitleg: 'TAC is wetenschappelijk het best onderbouwde niet-chemische ontkalksysteem. Onderzoek van o.a. Arizona State University toont effectieve preventie van kalkafzetting. Geen zout, geen elektriciteit, geen afvalwater. Werkt het beste bij hardheden tot circa 25°dH.',
    prijs: '€200 – €800',
    aanbeveling: 'Beste keuze bij een zoutloze aanpak',
  },
];

export default async function WaterOntkalkerGemeentePage({ params }: PageProps) {
  const { gemeente: slug } = await params;
  const gemeente = getGemeente(slug);
  if (!gemeente) notFound();

  const content = waterontkalkerContent[gemeente.categorie];
  const kleur = getKleurClasses(content.aanbevelingKleur);
  const isHardWater = gemeente.categorie === 'hard' || gemeente.categorie === 'zeer hard';
  const isZinvol = gemeente.categorie === 'hard' || gemeente.categorie === 'zeer hard' || gemeente.categorie === 'matig hard';

  const faqItems = [
    {
      question: `Wat is het verschil tussen een waterontkalker en een waterontharder?`,
      answer: `Een waterontharder (ionenwisselaar) verwijdert calcium en magnesium fysiek uit het water door ze te vervangen door natriumionen — dit verlaagt de hardheid daadwerkelijk. Een waterontkalker (magnetisch, elektronisch of TAC) verwijdert niets, maar probeert te voorkomen dat kalk zich afzet. Het water blijft even hard, maar de kalkdeeltjes gedragen zich anders. Waterontharders zijn wetenschappelijk robuust bewezen; waterontkalkers variëren sterk in effectiviteit per type.`,
    },
    {
      question: `Is een waterontkalker zinvol in ${gemeente.naam} bij ${gemeente.hardheid}°dH?`,
      answer: `${content.zinvolheid(gemeente.naam, gemeente.hardheid)}`,
    },
    {
      question: `Welk type waterontkalker werkt het beste in ${gemeente.naam}?`,
      answer: `Bij ${gemeente.hardheid}°dH (${getHardheidLabel(gemeente.categorie).toLowerCase()}) in ${gemeente.naam} ${isZinvol ? 'is een TAC-systeem (Template Assisted Crystallization) het best wetenschappelijk onderbouwde type waterontkalker. Het converteert opgeloste kalk naar microscopische kristallen die niet aanhechten — zonder zout of stroom. Magnetische en elektronische ontkalkers hebben minder bewijs.' : 'is geen waterontkalker zinvol — de waterhardheid is te laag om enig voordeel te behalen.'}`,
    },
    {
      question: `Heeft wetenschappelijk onderzoek bewezen dat magnetische ontkalkers werken?`,
      answer: `Magnetische waterontkalkers zijn meerdere keren getest in onafhankelijk onderzoek. De resultaten zijn inconsistent: sommige studies tonen lichte verbetering in kalkaanslag, andere tonen geen verschil ten opzichte van onbehandeld water. Europese consumentenorganisaties adviseren kritisch te zijn bij claims van magnetische ontkalkers. TAC-systemen hebben een sterker wetenschappelijk dossier, maar zijn ook geen vervanging voor een waterontharder bij ernstige kalkproblemen.`,
    },
    {
      question: `Waterontkalker, waterontharder of osmosefilter — wat kies ik voor ${gemeente.naam}?`,
      answer: `In ${gemeente.naam} met ${gemeente.hardheid}°dH: ${
        gemeente.categorie === 'zeer hard'
          ? 'kies een waterontharder voor complete bescherming van het hele huis en een osmosefilter voor drinkwater. Een waterontkalker alleen is onvoldoende bij dit hardheidsniveau.'
          : gemeente.categorie === 'hard'
          ? 'een TAC-systeem of waterontharder zijn zinvol. Voor drinkwater voegt een osmosefilter veel waarde toe.'
          : gemeente.categorie === 'matig hard'
          ? 'periodiek ontkalken is de meest praktische aanpak. Een waterontharder of TAC-systeem is een optie als je een grondigere oplossing wil.'
          : 'kalk is geen probleem. Een osmosefilter of koolstoffilter voor smaak en zuiverheid is zinvoller dan een ontkalker.'
      }`,
    },
    {
      question: `Beschadigt een waterontkalker mijn leidingen of apparaten in ${gemeente.naam}?`,
      answer: `Waterontkalkers zijn in het algemeen veilig voor leidingen en apparaten — ze voegen niets toe aan het water en de meeste vormen (magnetisch, elektronisch, TAC) zijn inert. Er is geen bewijs dat ze schade veroorzaken. Ze kunnen simpelweg weinig effect hebben bij harde wateromstandigheden zoals in ${gemeente.naam} met ${gemeente.hardheid}°dH, maar kwaad doen ze niet.`,
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
          { name: 'Waterontkalker', url: 'https://waterfilterplatform.nl/waterontkalker' },
          { name: `Waterontkalker ${gemeente.naam}`, url: `https://waterfilterplatform.nl/waterontkalker/${gemeente.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kennisbank/waterontharder" className="hover:text-[#005F8A]">Waterbehandeling</Link>
            <span className="mx-2">/</span>
            <span>Waterontkalker {gemeente.naam}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontkalker in {gemeente.naam}: zinvol bij {gemeente.hardheid}°dH?
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            {content.zinvolheid(gemeente.naam, gemeente.hardheid)}
          </p>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-white border border-[#005F8A] text-[#005F8A] rounded-full px-3 py-1">
              {gemeente.hardheid}°dH · {getHardheidLabel(gemeente.categorie)}
            </span>
            <span className="bg-white border border-gray-200 text-gray-600 rounded-full px-3 py-1">
              Water: {gemeente.waterbedrijf}
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        {/* Aanbeveling-badge */}
        <section className={`${kleur.bg} ${kleur.border} border rounded-2xl p-5`}>
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
            <p className={`font-bold ${kleur.text}`}>{content.aanbevelingLabel}</p>
            <p className={`text-sm ${kleur.text}`}>{gemeente.hardheid}°dH · {gemeente.naam}</p>
          </div>
          <p className={`text-sm ${kleur.text} opacity-90`}>
            Water geleverd door <strong>{gemeente.waterbedrijf}</strong> · provincie {gemeente.provincie}
          </p>
        </section>

        {/* Wat is een waterontkalker */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Wat is een waterontkalker (en wat is het niet)?
          </h2>
          <div className="space-y-3 text-sm text-gray-700">
            <p>
              Een <strong>waterontkalker</strong> is een apparaat dat probeert te voorkomen dat kalk (calciumcarbonaat) zich afzet op leidingen, kranen en verwarmingselementen. Belangrijk onderscheid: een waterontkalker <em>verwijdert geen kalk uit het water</em> — het water blijft even hard. De bedoeling is dat kalkdeeltjes minder kleverig worden en makkelijker meespoelen.
            </p>
            <p>
              Een <strong>waterontharder</strong> (ionenwisselaar) werkt anders: die verwijdert calcium en magnesium wél fysiek uit het water via ionenwisseling met zout. Het water wordt daadwerkelijk zachter. Dit is een bewezen technologie die al decennia wordt toegepast.
            </p>
            <p>
              De verwarring tussen beide begrippen is groot, ook in de marketing. Producenten van magnetische of elektronische apparaatjes noemen hun product soms &ldquo;waterontharder&rdquo; maar bedoelen een ontkalker. Let op het verschil bij de aankoop.
            </p>
          </div>

          <div className="mt-5 overflow-hidden border border-gray-100 rounded-xl">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Eigenschap</th>
                  <th className="text-center p-3 font-semibold text-gray-700">Ontkalker</th>
                  <th className="text-center p-3 font-semibold text-gray-700">Ontharder</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-3 text-gray-700">Verlaagt waterhardheid</td>
                  <td className="p-3 text-center text-red-500 font-bold">Nee</td>
                  <td className="p-3 text-center text-green-600 font-bold">Ja</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-700">Voorkomt kalkafzetting</td>
                  <td className="p-3 text-center text-amber-600">Gedeeltelijk*</td>
                  <td className="p-3 text-center text-green-600 font-bold">Ja</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-700">Wetenschappelijk bewijs</td>
                  <td className="p-3 text-center text-amber-600">Wisselend</td>
                  <td className="p-3 text-center text-green-600 font-bold">Sterk</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-700">Gebruikt zout</td>
                  <td className="p-3 text-center text-green-600">Nee</td>
                  <td className="p-3 text-center text-amber-600">Ja</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-700">Installatiegemak</td>
                  <td className="p-3 text-center text-green-600">Eenvoudig</td>
                  <td className="p-3 text-center text-amber-600">Meterkast</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-700">Prijs</td>
                  <td className="p-3 text-center text-gray-600">€15 – €800</td>
                  <td className="p-3 text-center text-gray-600">€600 – €2.000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">* Afhankelijk van type; TAC het best bewezen van de ontkalkers</p>
        </section>

        {/* Zinvolheid in gemeente */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Is een waterontkalker zinvol in {gemeente.naam} bij {gemeente.hardheid}°dH?
          </h2>
          <p className="text-gray-700 text-sm mb-3">{content.adviesTekst(gemeente.naam, gemeente.hardheid)}</p>
          <Link
            href={`/waterhardheid/${gemeente.slug}`}
            className="inline-block text-sm text-[#005F8A] underline hover:text-[#003F5C]"
          >
            Meer over waterhardheid in {gemeente.naam} →
          </Link>
        </section>

        {/* Types ontkalker */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Types waterontkalker: magnetisch, elektronisch en TAC
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            Er zijn drie hoofdtypen waterontkalkers op de markt. Ze verschillen aanzienlijk in werking, prijs en — cruciaal — wetenschappelijk bewijs voor effectiviteit.
          </p>
          <div className="space-y-4">
            {ontkalkerTypes.map(type => (
              <div key={type.naam} className="border border-gray-100 rounded-xl p-4">
                <div className="flex flex-wrap justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900">{type.naam}</h3>
                  <span className={`text-sm font-semibold ${type.bewijsKleur}`}>
                    Bewijs: {type.bewijs}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-2 italic">{type.werking}</p>
                <p className="text-sm text-gray-700 mb-2">{type.uitleg}</p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="bg-gray-100 rounded-full px-2 py-0.5 text-gray-600">Prijs: {type.prijs}</span>
                  <span className="bg-gray-100 rounded-full px-2 py-0.5 text-gray-600">{type.aanbeveling}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vergelijking: ontkalker vs ontharder vs osmose */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Waterontkalker vs waterontharder vs osmose in {gemeente.naam}
          </h2>
          <p className="text-gray-600 text-sm mb-4">{content.alternatiefTekst(gemeente.naam, gemeente.hardheid)}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                titel: 'Waterontkalker',
                sterkte: 'Goedkoop, eenvoudig',
                zwakte: 'Wisselend bewijs',
                voor: gemeente.categorie === 'matig hard' || gemeente.categorie === 'hard',
              },
              {
                titel: 'Waterontharder',
                sterkte: 'Volledig bewezen, centraal',
                zwakte: 'Hogere kosten, zoutgebruik',
                voor: isHardWater,
              },
              {
                titel: 'Osmosefilter',
                sterkte: 'Beste drinkwaterkwaliteit',
                zwakte: 'Alleen bij de kraan',
                voor: true,
              },
            ].map(optie => (
              <div
                key={optie.titel}
                className={`border rounded-xl p-4 ${optie.voor ? 'border-[#005F8A] bg-[#E0F2FE]/20' : 'border-gray-100'}`}
              >
                <p className={`font-semibold text-sm mb-1 ${optie.voor ? 'text-[#003F5C]' : 'text-gray-700'}`}>
                  {optie.titel}
                  {optie.voor && <span className="ml-1 text-xs text-[#005F8A]">✓</span>}
                </p>
                <p className="text-xs text-green-700 mb-1">+ {optie.sterkte}</p>
                <p className="text-xs text-gray-500">– {optie.zwakte}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link href="/kennisbank/waterontharder" className="text-[#005F8A] underline hover:text-[#003F5C]">
              Meer over waterontharders →
            </Link>
            <Link href={`/waterontharder/${gemeente.slug}`} className="text-[#005F8A] underline hover:text-[#003F5C]">
              Waterontharder in {gemeente.naam} →
            </Link>
            <Link href="/kennisbank/kalk-verwijderen-water" className="text-[#005F8A] underline hover:text-[#003F5C]">
              Kalk verwijderen uit water →
            </Link>
          </div>
        </section>

        {/* CTA */}
        {isHardWater ? (
          <div className={`${kleur.bg} ${kleur.border} border rounded-2xl p-5`}>
            <p className={`font-bold ${kleur.text} mb-2`}>
              Bij {gemeente.hardheid}°dH in {gemeente.naam}: osmosefilter voor het drinkwater
            </p>
            <p className={`${kleur.text} opacity-90 text-sm mb-4`}>
              Een waterontkalker alleen is niet voldoende bij dit hardheidsniveau. Een omgekeerde osmose filter verwijdert 99% van calcium en magnesium uit het drinkwater — bewezen technologie.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/omgekeerde-osmose/kopen"
                className="inline-block bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
              >
                Vergelijk osmose systemen →
              </Link>
              <Link
                href="/omgekeerde-osmose"
                className={`inline-block border ${kleur.border} ${kleur.text} font-semibold px-5 py-2.5 rounded-xl hover:bg-white transition-colors text-sm`}
              >
                Meer over omgekeerde osmose
              </Link>
            </div>
          </div>
        ) : (
          <CTABanner context="algemeen" variant="compact" />
        )}

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-3">Meer over waterbehandeling in {gemeente.naam}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kennisbank/waterontharder', label: 'Waterontharder kennisbank', desc: 'Hoe werkt ionenwisseling? Kosten en installatie' },
              { href: `/waterhardheid/${gemeente.slug}`, label: `Waterhardheid ${gemeente.naam}`, desc: `${gemeente.hardheid}°dH — achtergrond en advies` },
              { href: '/kennisbank/kalk-verwijderen-water', label: 'Kalk verwijderen uit water', desc: 'Methoden vergeleken: ontharder, osmose, filter' },
              { href: `/waterontharder/${gemeente.slug}`, label: `Waterontharder ${gemeente.naam}`, desc: 'Is een waterontharder zinvol?' },
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
            <h2 className="text-xl font-bold text-[#003F5C] mb-3">
              Waterontkalker in andere gemeenten in {gemeente.provincie}
            </h2>
            <div className="flex flex-wrap gap-2">
              {naburigeGemeenten.map(g => {
                const badgeKleur =
                  g.categorie === 'zacht' ? 'border-green-200 text-green-800' :
                  g.categorie === 'matig' ? 'border-lime-200 text-lime-800' :
                  g.categorie === 'matig hard' ? 'border-amber-200 text-amber-800' :
                  g.categorie === 'hard' ? 'border-orange-200 text-orange-800' :
                  'border-red-200 text-red-800';
                return (
                  <Link
                    key={g.slug}
                    href={`/waterontkalker/${g.slug}`}
                    className={`text-sm border rounded-full px-3 py-1.5 hover:shadow-sm transition-shadow ${badgeKleur}`}
                  >
                    Waterontkalker {g.naam} ({g.hardheid}°dH)
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over waterontkalkers in {gemeente.naam}
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
